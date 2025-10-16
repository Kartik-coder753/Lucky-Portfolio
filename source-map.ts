import { SourceMapConsumer } from "source-map";

// Initialize SourceMapConsumer with the WebAssembly mappings
let isInitialized = false;

// Error deduplication cache
const errorCache = new Map<string, ErrorMappingResult>();
const ERROR_CACHE_TTL = 5 * 60 * 1000; // 5 minutes expiration time
const ERROR_CACHE_MAX_SIZE = 1000; // Maximum cache size

// Clean expired cache
setInterval(() => {
  const now = Date.now();
  for (const [key, result] of errorCache.entries()) {
    if (now - (result as any).timestamp > ERROR_CACHE_TTL) {
      errorCache.delete(key);
    }
  }
}, 60000); // Clean every minute

async function initializeSourceMapConsumer() {
  if (isInitialized) return;

  try {
    // Initialize with the mappings.wasm file URL
    // Type assertion to handle TypeScript definition issues
    await (SourceMapConsumer as any).initialize({
      "lib/mappings.wasm":
        "https://unpkg.com/source-map@0.7.6/lib/mappings.wasm",
    });
    isInitialized = true;
  } catch (error) {
    console.warn("Failed to initialize SourceMapConsumer:", error);
    // Try alternative initialization methods
    try {
      // Fallback: try without explicit URL (some environments have built-in support)
      await (SourceMapConsumer as any).initialize({});
      isInitialized = true;
    } catch (fallbackError) {
      console.error(
        "SourceMapConsumer initialization failed completely:",
        fallbackError
      );
      throw fallbackError;
    }
  }
}

// Define return type
export type ErrorMappingResult = {
  errorMessage: string;
  mappedStack: string;
  sourceContext: Array<{
    file: string;
    line: number;
    column: number;
    context: string;
  }>;
}

/**
 * Generate error signature for deduplication
 * @param error Error object
 * @returns Error signature string
 */
function generateErrorSignature(error: Error): string {
  if (!error || !error.stack) {
    return `no-stack-${error?.message || 'unknown'}`;
  }

  // Extract key parts of the stack to generate signature
  const stack = error.stack;
  const lines = stack.split('\n').slice(0, 3); // Only take the first 3 lines of stack
  
  // Remove dynamic parts (like timestamps, random numbers, etc.)
  const normalizedLines = lines.map(line => 
    line
      .replace(/\?t=\d+/g, '') // Remove timestamp parameters
      .replace(/\?v=[\w\d]+/g, '') // Remove version parameters
      .replace(/\d{13,}/g, 'TIMESTAMP') // Replace timestamps
  );

  return `${error.name || 'Error'}-${error.message}-${normalizedLines.join('|')}`;
}

const FILTER_STACK_PATH = 'preview-inject/'

/**
 * Map production error stack to source code stack
 * @param {Error} error - Error object
 * @returns {Promise<ErrorMappingResult>} Mapped stack information and source context
 */
export async function mapErrorStack(
  error: Error,
  maxContexLimit: number = 5
): Promise<ErrorMappingResult | null> {
  if (!error || !error.stack) {
    return {
      errorMessage: error?.message || "",
      mappedStack: error?.stack || "",
      sourceContext: [],
    };
  }

  // Generate error signature for deduplication check
  const errorSignature = generateErrorSignature(error);
  
  // Check if it already exists in cache
  if (errorCache.has(errorSignature)) {
    const cachedResult = errorCache.get(errorSignature)!;
    console.log('Using cached error mapping for:', errorSignature);
    return cachedResult;
  }

  // Check cache size, return null if exceeds limit
  if (errorCache.size >= ERROR_CACHE_MAX_SIZE) {
    return null;
  }

  // Initialize SourceMapConsumer before use
  await initializeSourceMapConsumer();

  const stackLines = error.stack.split("\n");
  const mappedLines: string[] = [];
  const sourceContext: Array<{
    file: string;
    line: number;
    column: number;
    context: string;
  }> = [];

  const sourceMapCache = new Map<string, SourceMapConsumer>();
  const sourceContentCache = new Map<string, string>();
  let contextLimit = 0;

  for (const line of stackLines) {
    const match = line.match(
      /at\s+(.+?)\s+\((.+?):(\d+):(\d+)\)|at\s+(.+?):(\d+):(\d+)/
    );

    if (!match) {
      mappedLines.push(line);
      continue;
    }

    let functionName: string,
      fileName: string,
      lineNumber: number,
      columnNumber: number;

    if (match[1]) {
      functionName = match[1];
      fileName = match[2];
      lineNumber = parseInt(match[3]);
      columnNumber = parseInt(match[4]);
    } else {
      functionName = "<anonymous>";
      fileName = match[5];
      lineNumber = parseInt(match[6]);
      columnNumber = parseInt(match[7]);
    }
    
    try {
      const sourceMapUrl = `${fileName}.map`;

      let consumer = sourceMapCache.get(sourceMapUrl);
      if (!consumer) {
        const sourceMapContent = await loadSourceMap(sourceMapUrl);
        consumer = await new SourceMapConsumer(sourceMapContent);
        sourceMapCache.set(sourceMapUrl, consumer);
      }

      const originalPosition = consumer.originalPositionFor({
        line: lineNumber,
        column: columnNumber,
      });

      if (originalPosition.source) {
        if (originalPosition.source.includes(FILTER_STACK_PATH)) {
          continue;
        }
        const source = originalPosition.source
          .split("/")
          .filter((s: string) => s !== "..")
          .join("/");
        const originalFunctionName = originalPosition.name || functionName;
        const mappedLine = `    at ${originalFunctionName} (${source}:${originalPosition.line}:${originalPosition.column})`;
        mappedLines.push(mappedLine);

        // Get source code context
        if (
          originalPosition.line &&
          originalPosition.column &&
          contextLimit < maxContexLimit
        ) {
          contextLimit++;
          try {
            const sourceContent = await getSourceContent(
              consumer,
              originalPosition.source,
              sourceContentCache
            );
            if (sourceContent) {
              const context = extractSourceContext(
                sourceContent,
                originalPosition.line,
                10
              );
              sourceContext.push({
                file: source,
                line: originalPosition.line,
                column: originalPosition.column,
                context: context,
              });
            }
          } catch (contextError) {
            console.warn("Failed to extract source context:", contextError);
          }
        }
      } else {
        mappedLines.push(line);
      }
    } catch (err) {
      console.warn("Failed to map stack line:", line, err);
      mappedLines.push(line);
    }
  }

  // Clean up source map consumers
  for (const consumer of sourceMapCache.values()) {
    consumer.destroy();
  }

  const result: ErrorMappingResult = {
    errorMessage: error?.message || "",
    mappedStack: mappedLines.join("\n"),
    sourceContext: sourceContext,
  };

  // Cache result (add timestamp for TTL)
  (result as any).timestamp = Date.now();
  errorCache.set(errorSignature, result);

  return result;
}

/**
 * Clear error cache (for debugging or reset)
 */
export function clearErrorCache(): void {
  errorCache.clear();
}

/**
 * Get current cache status (for debugging)
 */
export function getErrorCacheStats(): { size: number; keys: string[] } {
  return {
    size: errorCache.size,
    keys: Array.from(errorCache.keys())
  };
}

/**
 * Get source file content
 * @param consumer SourceMapConsumer instance
 * @param sourcePath Source file path
 * @param cache Cache Map
 * @returns Source file content
 */
async function getSourceContent(
  consumer: SourceMapConsumer,
  sourcePath: string,
  cache: Map<string, string>
): Promise<string | null> {
  // First try to get from cache
  if (cache.has(sourcePath)) {
    return cache.get(sourcePath) || null;
  }

  // Try to get source content from source map
  const sourceContent = consumer.sourceContentFor(sourcePath);
  if (sourceContent) {
    cache.set(sourcePath, sourceContent);
    return sourceContent;
  }

  return null;
}

/**
 * Extract source code context (N lines before and after error line)
 * @param sourceContent Source file content
 * @param errorLine Error line number (1-based)
 * @param contextLines Number of context lines
 * @returns Formatted context string
 */
function extractSourceContext(
  sourceContent: string,
  errorLine: number,
  contextLines: number = 10
): string {
  const lines = sourceContent.split("\n");
  const startLine = Math.max(0, errorLine - contextLines - 1); // Convert to 0-based index
  const endLine = Math.min(lines.length - 1, errorLine + contextLines - 1);

  const contextArray: string[] = [];

  for (let i = startLine; i <= endLine; i++) {
    const lineNumber = i + 1; // Display 1-based line number
    const isErrorLine = lineNumber === errorLine;
    const prefix = isErrorLine ? ">>>" : "   ";
    const formattedLine = `${prefix} ${lineNumber
      .toString()
      .padStart(4, " ")} | ${lines[i] || ""}`;
    contextArray.push(formattedLine);
  }

  return contextArray.join("\n");
}

/**
 * Load source map file
 * @param {string} url - source map URL
 * @returns {Promise<Object>} source map content
 */
async function loadSourceMap(url: string): Promise<any> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to load source map: ${response.status}`);
    }
    return await response.json();
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    throw new Error(`Error loading source map from ${url}: ${errorMessage}`);
  }
}
