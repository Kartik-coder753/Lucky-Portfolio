(function() {
    const i = document.createElement("link").relList;
    if (i && i.supports && i.supports("modulepreload")) return;
    for (const c of document.querySelectorAll('link[rel="modulepreload"]')) o(c);
    new MutationObserver(c => {
        for (const f of c)
            if (f.type === "childList")
                for (const d of f.addedNodes) d.tagName === "LINK" && d.rel === "modulepreload" && o(d)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function r(c) {
        const f = {};
        return c.integrity && (f.integrity = c.integrity), c.referrerPolicy && (f.referrerPolicy = c.referrerPolicy), c.crossOrigin === "use-credentials" ? f.credentials = "include" : c.crossOrigin === "anonymous" ? f.credentials = "omit" : f.credentials = "same-origin", f
    }

    function o(c) {
        if (c.ep) return;
        c.ep = !0;
        const f = r(c);
        fetch(c.href, f)
    }
})();
const gr = [];
let hm = !0;
const mm = console.error;

function gh(s) {
    gr.length > 5 || !hm || gr.push(s)
}

function gm(s) {
    gr.push({
        type: "runtime",
        args: s
    })
}

function pm(s) {
    s.preventDefault()
}

function x0(s) {
    try {
        const i = s.find(r => r instanceof Error);
        if (i && i.stack) gh({
            type: "console.error",
            args: i
        });
        else if (s.length > 0) {
            const r = s.map(c => typeof c == "object" ? JSON.stringify(c) : String(c)).join(" "),
                o = new Error(r);
            gh({
                type: "console.error",
                args: o
            })
        }
    } catch (i) {
        console.warn(i)
    }
}
window.addEventListener("error", gm);
window.addEventListener("unhandledrejection", pm);
console.error = function(...i) {
    x0(i), mm.apply(this, i)
};

function b0() {
    return window.removeEventListener("error", gm), window.removeEventListener("unhandledrejection", pm), console.error = mm, hm = !1, gr
}
const S0 = 1e3,
    ph = Symbol("postMessageResponseTimeout");
let ur = 0;
const ku = "*";
class br {
    client;
    baseTimeout;
    waitRes = new Map;
    removeListeners = new Set;
    clear;
    constructor(i, r) {
        this.client = i, this.baseTimeout = r ? .timeout || S0;
        const o = this.emitResponse.bind(this);
        this.clear = () => {
            window.removeEventListener("message", o)
        }, window.addEventListener("message", o)
    }
    destroy() {
        this.clear(), this.removeListeners.forEach(i => i())
    }
    isTimeout(i) {
        return i === ph
    }
    post(i, r, o) {
        ur++;
        const {
            timeout: c,
            origin: f = ku
        } = o || {};
        return this.client.postMessage({
            data: r,
            id: ur,
            type: i
        }, f), new Promise(d => {
            this.waitRes.set(ur, g => {
                d(g)
            }), setTimeout(() => {
                this.waitRes.delete(ur), d(ph)
            }, c || this.baseTimeout)
        })
    }
    on(i, r, o) {
        const {
            once: c,
            origin: f = ku
        } = o || {}, d = async p => {
            const {
                id: m,
                type: x,
                data: b
            } = p.data;
            let w;
            x === i && (w = await r(b), console.log(i, c, w, b), (m && f === p.origin || f === ku) && p.source ? .postMessage({
                fromType: i,
                id: m,
                data: w
            }, p.origin), c && g())
        };
        window.addEventListener("message", d);
        const g = () => {
            window.removeEventListener("message", d), this.removeListeners.delete(g)
        };
        return this.removeListeners.add(g), g
    }
    emitResponse(i) {
        const r = i.data,
            {
                id: o,
                data: c
            } = r,
            f = this.waitRes.get(o);
        f && f(c)
    }
}

function w0(s) {
    if (Object.prototype.hasOwnProperty.call(s, "__esModule")) return s;
    var i = s.default;
    if (typeof i == "function") {
        var r = function o() {
            var c = !1;
            try {
                c = this instanceof o
            } catch {}
            return c ? Reflect.construct(i, arguments, this.constructor) : i.apply(this, arguments)
        };
        r.prototype = i.prototype
    } else r = {};
    return Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.keys(s).forEach(function(o) {
        var c = Object.getOwnPropertyDescriptor(s, o);
        Object.defineProperty(r, o, c.get ? c : {
            enumerable: !0,
            get: function() {
                return s[o]
            }
        })
    }), r
}
var La = {},
    Gu = {},
    Yu = {},
    Qu = {},
    yh;

function E0() {
    if (yh) return Qu;
    yh = 1;
    const s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
    return Qu.encode = function(i) {
        if (0 <= i && i < s.length) return s[i];
        throw new TypeError("Must be between 0 and 63: " + i)
    }, Qu
}
var vh;

function ym() {
    if (vh) return Yu;
    vh = 1;
    const s = E0(),
        i = 5,
        r = 1 << i,
        o = r - 1,
        c = r;

    function f(d) {
        return d < 0 ? (-d << 1) + 1 : (d << 1) + 0
    }
    return Yu.encode = function(g) {
        let p = "",
            m, x = f(g);
        do m = x & o, x >>>= i, x > 0 && (m |= c), p += s.encode(m); while (x > 0);
        return p
    }, Yu
}
var Rt = {};
const N0 = {},
    C0 = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: N0
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    _0 = w0(C0);
var Xu, xh;

function R0() {
    return xh || (xh = 1, Xu = typeof URL == "function" ? URL : _0.URL), Xu
}
var bh;

function Sr() {
    if (bh) return Rt;
    bh = 1;
    const s = R0();

    function i(G, K, F) {
        if (K in G) return G[K];
        if (arguments.length === 3) return F;
        throw new Error('"' + K + '" is a required argument.')
    }
    Rt.getArg = i;
    const r = (function() {
        return !("__proto__" in Object.create(null))
    })();

    function o(G) {
        return G
    }

    function c(G) {
        return d(G) ? "$" + G : G
    }
    Rt.toSetString = r ? o : c;

    function f(G) {
        return d(G) ? G.slice(1) : G
    }
    Rt.fromSetString = r ? o : f;

    function d(G) {
        if (!G) return !1;
        const K = G.length;
        if (K < 9 || G.charCodeAt(K - 1) !== 95 || G.charCodeAt(K - 2) !== 95 || G.charCodeAt(K - 3) !== 111 || G.charCodeAt(K - 4) !== 116 || G.charCodeAt(K - 5) !== 111 || G.charCodeAt(K - 6) !== 114 || G.charCodeAt(K - 7) !== 112 || G.charCodeAt(K - 8) !== 95 || G.charCodeAt(K - 9) !== 95) return !1;
        for (let F = K - 10; F >= 0; F--)
            if (G.charCodeAt(F) !== 36) return !1;
        return !0
    }

    function g(G, K) {
        return G === K ? 0 : G === null ? 1 : K === null ? -1 : G > K ? 1 : -1
    }

    function p(G, K) {
        let F = G.generatedLine - K.generatedLine;
        return F !== 0 || (F = G.generatedColumn - K.generatedColumn, F !== 0) || (F = g(G.source, K.source), F !== 0) || (F = G.originalLine - K.originalLine, F !== 0) || (F = G.originalColumn - K.originalColumn, F !== 0) ? F : g(G.name, K.name)
    }
    Rt.compareByGeneratedPositionsInflated = p;

    function m(G) {
        return JSON.parse(G.replace(/^\)]}'[^\n]*\n/, ""))
    }
    Rt.parseSourceMapInput = m;
    const x = "http:",
        b = `${x}//host`;

    function w(G) {
        return K => {
            const F = D(K),
                le = A(K),
                he = new s(K, le);
            G(he);
            const me = he.toString();
            return F === "absolute" ? me : F === "scheme-relative" ? me.slice(x.length) : F === "path-absolute" ? me.slice(b.length) : z(le, me)
        }
    }

    function S(G, K) {
        return new s(G, K).toString()
    }

    function N(G, K) {
        let F = 0;
        do {
            const le = G + F++;
            if (K.indexOf(le) === -1) return le
        } while (!0)
    }

    function A(G) {
        const K = G.split("..").length - 1,
            F = N("p", G);
        let le = `${b}/`;
        for (let he = 0; he < K; he++) le += `${F}/`;
        return le
    }
    const _ = /^[A-Za-z0-9\+\-\.]+:/;

    function D(G) {
        return G[0] === "/" ? G[1] === "/" ? "scheme-relative" : "path-absolute" : _.test(G) ? "absolute" : "path-relative"
    }

    function z(G, K) {
        typeof G == "string" && (G = new s(G)), typeof K == "string" && (K = new s(K));
        const F = K.pathname.split("/"),
            le = G.pathname.split("/");
        for (le.length > 0 && !le[le.length - 1] && le.pop(); F.length > 0 && le.length > 0 && F[0] === le[0];) F.shift(), le.shift();
        return le.map(() => "..").concat(F).join("/") + K.search + K.hash
    }
    const Y = w(G => {
            G.pathname = G.pathname.replace(/\/?$/, "/")
        }),
        P = w(G => {
            G.href = new s(".", G.toString()).toString()
        }),
        Q = w(G => {});
    Rt.normalize = Q;

    function se(G, K) {
        const F = D(K),
            le = D(G);
        if (G = Y(G), F === "absolute") return S(K, void 0);
        if (le === "absolute") return S(K, G);
        if (F === "scheme-relative") return Q(K);
        if (le === "scheme-relative") return S(K, S(G, b)).slice(x.length);
        if (F === "path-absolute") return Q(K);
        if (le === "path-absolute") return S(K, S(G, b)).slice(b.length);
        const he = A(K + G),
            me = S(K, S(G, he));
        return z(he, me)
    }
    Rt.join = se;

    function pe(G, K) {
        const F = we(G, K);
        return typeof F == "string" ? F : Q(K)
    }
    Rt.relative = pe;

    function we(G, K) {
        if (D(G) !== D(K)) return null;
        const le = A(G + K),
            he = new s(G, le),
            me = new s(K, le);
        try {
            new s("", me.toString())
        } catch {
            return null
        }
        return me.protocol !== he.protocol || me.user !== he.user || me.password !== he.password || me.hostname !== he.hostname || me.port !== he.port ? null : z(he, me)
    }

    function ye(G, K, F) {
        G && D(K) === "path-absolute" && (K = K.replace(/^\//, ""));
        let le = Q(K || "");
        return G && (le = se(G, le)), F && (le = se(P(F), le)), le
    }
    return Rt.computeSourceURL = ye, Rt
}
var Ku = {},
    Sh;

function vm() {
    if (Sh) return Ku;
    Sh = 1;
    class s {
        constructor() {
            this._array = [], this._set = new Map
        }
        static fromArray(r, o) {
            const c = new s;
            for (let f = 0, d = r.length; f < d; f++) c.add(r[f], o);
            return c
        }
        size() {
            return this._set.size
        }
        add(r, o) {
            const c = this.has(r),
                f = this._array.length;
            (!c || o) && this._array.push(r), c || this._set.set(r, f)
        }
        has(r) {
            return this._set.has(r)
        }
        indexOf(r) {
            const o = this._set.get(r);
            if (o >= 0) return o;
            throw new Error('"' + r + '" is not in the set.')
        }
        at(r) {
            if (r >= 0 && r < this._array.length) return this._array[r];
            throw new Error("No element indexed by " + r)
        }
        toArray() {
            return this._array.slice()
        }
    }
    return Ku.ArraySet = s, Ku
}
var Zu = {},
    wh;

function j0() {
    if (wh) return Zu;
    wh = 1;
    const s = Sr();

    function i(o, c) {
        const f = o.generatedLine,
            d = c.generatedLine,
            g = o.generatedColumn,
            p = c.generatedColumn;
        return d > f || d == f && p >= g || s.compareByGeneratedPositionsInflated(o, c) <= 0
    }
    class r {
        constructor() {
            this._array = [], this._sorted = !0, this._last = {
                generatedLine: -1,
                generatedColumn: 0
            }
        }
        unsortedForEach(c, f) {
            this._array.forEach(c, f)
        }
        add(c) {
            i(this._last, c) ? (this._last = c, this._array.push(c)) : (this._sorted = !1, this._array.push(c))
        }
        toArray() {
            return this._sorted || (this._array.sort(s.compareByGeneratedPositionsInflated), this._sorted = !0), this._array
        }
    }
    return Zu.MappingList = r, Zu
}
var Eh;

function xm() {
    if (Eh) return Gu;
    Eh = 1;
    const s = ym(),
        i = Sr(),
        r = vm().ArraySet,
        o = j0().MappingList;
    class c {
        constructor(d) {
            d || (d = {}), this._file = i.getArg(d, "file", null), this._sourceRoot = i.getArg(d, "sourceRoot", null), this._skipValidation = i.getArg(d, "skipValidation", !1), this._sources = new r, this._names = new r, this._mappings = new o, this._sourcesContents = null
        }
        static fromSourceMap(d) {
            const g = d.sourceRoot,
                p = new c({
                    file: d.file,
                    sourceRoot: g
                });
            return d.eachMapping(function(m) {
                const x = {
                    generated: {
                        line: m.generatedLine,
                        column: m.generatedColumn
                    }
                };
                m.source != null && (x.source = m.source, g != null && (x.source = i.relative(g, x.source)), x.original = {
                    line: m.originalLine,
                    column: m.originalColumn
                }, m.name != null && (x.name = m.name)), p.addMapping(x)
            }), d.sources.forEach(function(m) {
                let x = m;
                g != null && (x = i.relative(g, m)), p._sources.has(x) || p._sources.add(x);
                const b = d.sourceContentFor(m);
                b != null && p.setSourceContent(m, b)
            }), p
        }
        addMapping(d) {
            const g = i.getArg(d, "generated"),
                p = i.getArg(d, "original", null);
            let m = i.getArg(d, "source", null),
                x = i.getArg(d, "name", null);
            this._skipValidation || this._validateMapping(g, p, m, x), m != null && (m = String(m), this._sources.has(m) || this._sources.add(m)), x != null && (x = String(x), this._names.has(x) || this._names.add(x)), this._mappings.add({
                generatedLine: g.line,
                generatedColumn: g.column,
                originalLine: p && p.line,
                originalColumn: p && p.column,
                source: m,
                name: x
            })
        }
        setSourceContent(d, g) {
            let p = d;
            this._sourceRoot != null && (p = i.relative(this._sourceRoot, p)), g != null ? (this._sourcesContents || (this._sourcesContents = Object.create(null)), this._sourcesContents[i.toSetString(p)] = g) : this._sourcesContents && (delete this._sourcesContents[i.toSetString(p)], Object.keys(this._sourcesContents).length === 0 && (this._sourcesContents = null))
        }
        applySourceMap(d, g, p) {
            let m = g;
            if (g == null) {
                if (d.file == null) throw new Error(`SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map's "file" property. Both were omitted.`);
                m = d.file
            }
            const x = this._sourceRoot;
            x != null && (m = i.relative(x, m));
            const b = this._mappings.toArray().length > 0 ? new r : this._sources,
                w = new r;
            this._mappings.unsortedForEach(function(S) {
                if (S.source === m && S.originalLine != null) {
                    const _ = d.originalPositionFor({
                        line: S.originalLine,
                        column: S.originalColumn
                    });
                    _.source != null && (S.source = _.source, p != null && (S.source = i.join(p, S.source)), x != null && (S.source = i.relative(x, S.source)), S.originalLine = _.line, S.originalColumn = _.column, _.name != null && (S.name = _.name))
                }
                const N = S.source;
                N != null && !b.has(N) && b.add(N);
                const A = S.name;
                A != null && !w.has(A) && w.add(A)
            }, this), this._sources = b, this._names = w, d.sources.forEach(function(S) {
                const N = d.sourceContentFor(S);
                N != null && (p != null && (S = i.join(p, S)), x != null && (S = i.relative(x, S)), this.setSourceContent(S, N))
            }, this)
        }
        _validateMapping(d, g, p, m) {
            if (g && typeof g.line != "number" && typeof g.column != "number") throw new Error("original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values.");
            if (!(d && "line" in d && "column" in d && d.line > 0 && d.column >= 0 && !g && !p && !m)) {
                if (!(d && "line" in d && "column" in d && g && "line" in g && "column" in g && d.line > 0 && d.column >= 0 && g.line > 0 && g.column >= 0 && p)) throw new Error("Invalid mapping: " + JSON.stringify({
                    generated: d,
                    source: p,
                    original: g,
                    name: m
                }))
            }
        }
        _serializeMappings() {
            let d = 0,
                g = 1,
                p = 0,
                m = 0,
                x = 0,
                b = 0,
                w = "",
                S, N, A, _;
            const D = this._mappings.toArray();
            for (let z = 0, Y = D.length; z < Y; z++) {
                if (N = D[z], S = "", N.generatedLine !== g)
                    for (d = 0; N.generatedLine !== g;) S += ";", g++;
                else if (z > 0) {
                    if (!i.compareByGeneratedPositionsInflated(N, D[z - 1])) continue;
                    S += ","
                }
                S += s.encode(N.generatedColumn - d), d = N.generatedColumn, N.source != null && (_ = this._sources.indexOf(N.source), S += s.encode(_ - b), b = _, S += s.encode(N.originalLine - 1 - m), m = N.originalLine - 1, S += s.encode(N.originalColumn - p), p = N.originalColumn, N.name != null && (A = this._names.indexOf(N.name), S += s.encode(A - x), x = A)), w += S
            }
            return w
        }
        _generateSourcesContent(d, g) {
            return d.map(function(p) {
                if (!this._sourcesContents) return null;
                g != null && (p = i.relative(g, p));
                const m = i.toSetString(p);
                return Object.prototype.hasOwnProperty.call(this._sourcesContents, m) ? this._sourcesContents[m] : null
            }, this)
        }
        toJSON() {
            const d = {
                version: this._version,
                sources: this._sources.toArray(),
                names: this._names.toArray(),
                mappings: this._serializeMappings()
            };
            return this._file != null && (d.file = this._file), this._sourceRoot != null && (d.sourceRoot = this._sourceRoot), this._sourcesContents && (d.sourcesContent = this._generateSourcesContent(d.sources, d.sourceRoot)), d
        }
        toString() {
            return JSON.stringify(this.toJSON())
        }
    }
    return c.prototype._version = 3, Gu.SourceMapGenerator = c, Gu
}
var Da = {},
    $u = {},
    Nh;

function T0() {
    return Nh || (Nh = 1, (function(s) {
        s.GREATEST_LOWER_BOUND = 1, s.LEAST_UPPER_BOUND = 2;

        function i(r, o, c, f, d, g) {
            const p = Math.floor((o - r) / 2) + r,
                m = d(c, f[p], !0);
            return m === 0 ? p : m > 0 ? o - p > 1 ? i(p, o, c, f, d, g) : g === s.LEAST_UPPER_BOUND ? o < f.length ? o : -1 : p : p - r > 1 ? i(r, p, c, f, d, g) : g == s.LEAST_UPPER_BOUND ? p : r < 0 ? -1 : r
        }
        s.search = function(o, c, f, d) {
            if (c.length === 0) return -1;
            let g = i(-1, c.length, o, c, f, d || s.GREATEST_LOWER_BOUND);
            if (g < 0) return -1;
            for (; g - 1 >= 0 && f(c[g], c[g - 1], !0) === 0;) --g;
            return g
        }
    })($u)), $u
}
var or = {
        exports: {}
    },
    Ch;

function bm() {
    if (Ch) return or.exports;
    Ch = 1;
    let s = null;
    return or.exports = function() {
        if (typeof s == "string") return fetch(s).then(r => r.arrayBuffer());
        if (s instanceof ArrayBuffer) return Promise.resolve(s);
        throw new Error("You must provide the string URL or ArrayBuffer contents of lib/mappings.wasm by calling SourceMapConsumer.initialize({ 'lib/mappings.wasm': ... }) before using SourceMapConsumer")
    }, or.exports.initialize = i => {
        s = i
    }, or.exports
}
var Ju, _h;

function O0() {
    if (_h) return Ju;
    _h = 1;
    const s = bm();

    function i() {
        this.generatedLine = 0, this.generatedColumn = 0, this.lastGeneratedColumn = null, this.source = null, this.originalLine = null, this.originalColumn = null, this.name = null
    }
    let r = null;
    return Ju = function() {
        if (r) return r;
        const c = [];
        return r = s().then(f => WebAssembly.instantiate(f, {
            env: {
                mapping_callback(d, g, p, m, x, b, w, S, N, A) {
                    const _ = new i;
                    _.generatedLine = d + 1, _.generatedColumn = g, p && (_.lastGeneratedColumn = m - 1), x && (_.source = b, _.originalLine = w + 1, _.originalColumn = S, N && (_.name = A)), c[c.length - 1](_)
                },
                start_all_generated_locations_for() {
                    console.time("all_generated_locations_for")
                },
                end_all_generated_locations_for() {
                    console.timeEnd("all_generated_locations_for")
                },
                start_compute_column_spans() {
                    console.time("compute_column_spans")
                },
                end_compute_column_spans() {
                    console.timeEnd("compute_column_spans")
                },
                start_generated_location_for() {
                    console.time("generated_location_for")
                },
                end_generated_location_for() {
                    console.timeEnd("generated_location_for")
                },
                start_original_location_for() {
                    console.time("original_location_for")
                },
                end_original_location_for() {
                    console.timeEnd("original_location_for")
                },
                start_parse_mappings() {
                    console.time("parse_mappings")
                },
                end_parse_mappings() {
                    console.timeEnd("parse_mappings")
                },
                start_sort_by_generated_location() {
                    console.time("sort_by_generated_location")
                },
                end_sort_by_generated_location() {
                    console.timeEnd("sort_by_generated_location")
                },
                start_sort_by_original_location() {
                    console.time("sort_by_original_location")
                },
                end_sort_by_original_location() {
                    console.timeEnd("sort_by_original_location")
                }
            }
        })).then(f => ({
            exports: f.instance.exports,
            withMappingCallback: (d, g) => {
                c.push(d);
                try {
                    g()
                } finally {
                    c.pop()
                }
            }
        })).then(null, f => {
            throw r = null, f
        }), r
    }, Ju
}
var Rh;

function A0() {
    if (Rh) return Da;
    Rh = 1;
    const s = Sr(),
        i = T0(),
        r = vm().ArraySet;
    ym();
    const o = bm(),
        c = O0(),
        f = Symbol("smcInternal");
    class d {
        constructor(w, S) {
            return w == f ? Promise.resolve(this) : m(w, S)
        }
        static initialize(w) {
            o.initialize(w["lib/mappings.wasm"])
        }
        static fromSourceMap(w, S) {
            return x(w, S)
        }
        static async with(w, S, N) {
            const A = await new d(w, S);
            try {
                return await N(A)
            } finally {
                A.destroy()
            }
        }
        eachMapping(w, S, N) {
            throw new Error("Subclasses must implement eachMapping")
        }
        allGeneratedPositionsFor(w) {
            throw new Error("Subclasses must implement allGeneratedPositionsFor")
        }
        destroy() {
            throw new Error("Subclasses must implement destroy")
        }
    }
    d.prototype._version = 3, d.GENERATED_ORDER = 1, d.ORIGINAL_ORDER = 2, d.GREATEST_LOWER_BOUND = 1, d.LEAST_UPPER_BOUND = 2, Da.SourceMapConsumer = d;
    class g extends d {
        constructor(w, S) {
            return super(f).then(N => {
                let A = w;
                typeof w == "string" && (A = s.parseSourceMapInput(w));
                const _ = s.getArg(A, "version"),
                    D = s.getArg(A, "sources").map(String),
                    z = s.getArg(A, "names", []),
                    Y = s.getArg(A, "sourceRoot", null),
                    P = s.getArg(A, "sourcesContent", null),
                    Q = s.getArg(A, "mappings"),
                    se = s.getArg(A, "file", null),
                    pe = s.getArg(A, "x_google_ignoreList", null);
                if (_ != N._version) throw new Error("Unsupported version: " + _);
                return N._sourceLookupCache = new Map, N._names = r.fromArray(z.map(String), !0), N._sources = r.fromArray(D, !0), N._absoluteSources = r.fromArray(N._sources.toArray().map(function(we) {
                    return s.computeSourceURL(Y, we, S)
                }), !0), N.sourceRoot = Y, N.sourcesContent = P, N._mappings = Q, N._sourceMapURL = S, N.file = se, N.x_google_ignoreList = pe, N._computedColumnSpans = !1, N._mappingsPtr = 0, N._wasm = null, c().then(we => (N._wasm = we, N))
            })
        }
        _findSourceIndex(w) {
            const S = this._sourceLookupCache.get(w);
            if (typeof S == "number") return S;
            const N = s.computeSourceURL(null, w, this._sourceMapURL);
            if (this._absoluteSources.has(N)) {
                const _ = this._absoluteSources.indexOf(N);
                return this._sourceLookupCache.set(w, _), _
            }
            const A = s.computeSourceURL(this.sourceRoot, w, this._sourceMapURL);
            if (this._absoluteSources.has(A)) {
                const _ = this._absoluteSources.indexOf(A);
                return this._sourceLookupCache.set(w, _), _
            }
            return -1
        }
        static fromSourceMap(w, S) {
            return new g(w.toString())
        }
        get sources() {
            return this._absoluteSources.toArray()
        }
        _getMappingsPtr() {
            return this._mappingsPtr === 0 && this._parseMappings(), this._mappingsPtr
        }
        _parseMappings() {
            const w = this._mappings,
                S = w.length,
                N = this._wasm.exports.allocate_mappings(S) >>> 0,
                A = new Uint8Array(this._wasm.exports.memory.buffer, N, S);
            for (let D = 0; D < S; D++) A[D] = w.charCodeAt(D);
            const _ = this._wasm.exports.parse_mappings(N);
            if (!_) {
                const D = this._wasm.exports.get_last_error();
                let z = `Error parsing mappings (code ${D}): `;
                switch (D) {
                    case 1:
                        z += "the mappings contained a negative line, column, source index, or name index";
                        break;
                    case 2:
                        z += "the mappings contained a number larger than 2**32";
                        break;
                    case 3:
                        z += "reached EOF while in the middle of parsing a VLQ";
                        break;
                    case 4:
                        z += "invalid base 64 character while parsing a VLQ";
                        break;
                    default:
                        z += "unknown error code";
                        break
                }
                throw new Error(z)
            }
            this._mappingsPtr = _
        }
        eachMapping(w, S, N) {
            const A = S || null,
                _ = N || d.GENERATED_ORDER;
            this._wasm.withMappingCallback(D => {
                D.source !== null && (D.source = this._absoluteSources.at(D.source), D.name !== null && (D.name = this._names.at(D.name))), this._computedColumnSpans && D.lastGeneratedColumn === null && (D.lastGeneratedColumn = 1 / 0), w.call(A, D)
            }, () => {
                switch (_) {
                    case d.GENERATED_ORDER:
                        this._wasm.exports.by_generated_location(this._getMappingsPtr());
                        break;
                    case d.ORIGINAL_ORDER:
                        this._wasm.exports.by_original_location(this._getMappingsPtr());
                        break;
                    default:
                        throw new Error("Unknown order of iteration.")
                }
            })
        }
        allGeneratedPositionsFor(w) {
            let S = s.getArg(w, "source");
            const N = s.getArg(w, "line"),
                A = w.column || 0;
            if (S = this._findSourceIndex(S), S < 0) return [];
            if (N < 1) throw new Error("Line numbers must be >= 1");
            if (A < 0) throw new Error("Column numbers must be >= 0");
            const _ = [];
            return this._wasm.withMappingCallback(D => {
                let z = D.lastGeneratedColumn;
                this._computedColumnSpans && z === null && (z = 1 / 0), _.push({
                    line: D.generatedLine,
                    column: D.generatedColumn,
                    lastColumn: z
                })
            }, () => {
                this._wasm.exports.all_generated_locations_for(this._getMappingsPtr(), S, N - 1, "column" in w, A)
            }), _
        }
        destroy() {
            this._mappingsPtr !== 0 && (this._wasm.exports.free_mappings(this._mappingsPtr), this._mappingsPtr = 0)
        }
        computeColumnSpans() {
            this._computedColumnSpans || (this._wasm.exports.compute_column_spans(this._getMappingsPtr()), this._computedColumnSpans = !0)
        }
        originalPositionFor(w) {
            const S = {
                generatedLine: s.getArg(w, "line"),
                generatedColumn: s.getArg(w, "column")
            };
            if (S.generatedLine < 1) throw new Error("Line numbers must be >= 1");
            if (S.generatedColumn < 0) throw new Error("Column numbers must be >= 0");
            let N = s.getArg(w, "bias", d.GREATEST_LOWER_BOUND);
            N == null && (N = d.GREATEST_LOWER_BOUND);
            let A;
            if (this._wasm.withMappingCallback(_ => A = _, () => {
                    this._wasm.exports.original_location_for(this._getMappingsPtr(), S.generatedLine - 1, S.generatedColumn, N)
                }), A && A.generatedLine === S.generatedLine) {
                let _ = s.getArg(A, "source", null);
                _ !== null && (_ = this._absoluteSources.at(_));
                let D = s.getArg(A, "name", null);
                return D !== null && (D = this._names.at(D)), {
                    source: _,
                    line: s.getArg(A, "originalLine", null),
                    column: s.getArg(A, "originalColumn", null),
                    name: D
                }
            }
            return {
                source: null,
                line: null,
                column: null,
                name: null
            }
        }
        hasContentsOfAllSources() {
            return this.sourcesContent ? this.sourcesContent.length >= this._sources.size() && !this.sourcesContent.some(function(w) {
                return w == null
            }) : !1
        }
        sourceContentFor(w, S) {
            if (!this.sourcesContent) return null;
            const N = this._findSourceIndex(w);
            if (N >= 0) return this.sourcesContent[N];
            if (S) return null;
            throw new Error('"' + w + '" is not in the SourceMap.')
        }
        generatedPositionFor(w) {
            let S = s.getArg(w, "source");
            if (S = this._findSourceIndex(S), S < 0) return {
                line: null,
                column: null,
                lastColumn: null
            };
            const N = {
                source: S,
                originalLine: s.getArg(w, "line"),
                originalColumn: s.getArg(w, "column")
            };
            if (N.originalLine < 1) throw new Error("Line numbers must be >= 1");
            if (N.originalColumn < 0) throw new Error("Column numbers must be >= 0");
            let A = s.getArg(w, "bias", d.GREATEST_LOWER_BOUND);
            A == null && (A = d.GREATEST_LOWER_BOUND);
            let _;
            if (this._wasm.withMappingCallback(D => _ = D, () => {
                    this._wasm.exports.generated_location_for(this._getMappingsPtr(), N.source, N.originalLine - 1, N.originalColumn, A)
                }), _ && _.source === N.source) {
                let D = _.lastGeneratedColumn;
                return this._computedColumnSpans && D === null && (D = 1 / 0), {
                    line: s.getArg(_, "generatedLine", null),
                    column: s.getArg(_, "generatedColumn", null),
                    lastColumn: D
                }
            }
            return {
                line: null,
                column: null,
                lastColumn: null
            }
        }
    }
    g.prototype.consumer = d, Da.BasicSourceMapConsumer = g;
    class p extends d {
        constructor(w, S) {
            return super(f).then(N => {
                let A = w;
                typeof w == "string" && (A = s.parseSourceMapInput(w));
                const _ = s.getArg(A, "version"),
                    D = s.getArg(A, "sections");
                if (_ != N._version) throw new Error("Unsupported version: " + _);
                let z = {
                    line: -1,
                    column: 0
                };
                return Promise.all(D.map(Y => {
                    if (Y.url) throw new Error("Support for url field in sections not implemented.");
                    const P = s.getArg(Y, "offset"),
                        Q = s.getArg(P, "line"),
                        se = s.getArg(P, "column");
                    if (Q < z.line || Q === z.line && se < z.column) throw new Error("Section offsets must be ordered and non-overlapping.");
                    return z = P, new d(s.getArg(Y, "map"), S).then(we => ({
                        generatedOffset: {
                            generatedLine: Q + 1,
                            generatedColumn: se + 1
                        },
                        consumer: we
                    }))
                })).then(Y => (N._sections = Y, N))
            })
        }
        get sources() {
            const w = [];
            for (let S = 0; S < this._sections.length; S++)
                for (let N = 0; N < this._sections[S].consumer.sources.length; N++) w.push(this._sections[S].consumer.sources[N]);
            return w
        }
        originalPositionFor(w) {
            const S = {
                    generatedLine: s.getArg(w, "line"),
                    generatedColumn: s.getArg(w, "column")
                },
                N = i.search(S, this._sections, function(_, D) {
                    const z = _.generatedLine - D.generatedOffset.generatedLine;
                    return z || _.generatedColumn - (D.generatedOffset.generatedColumn - 1)
                }),
                A = this._sections[N];
            return A ? A.consumer.originalPositionFor({
                line: S.generatedLine - (A.generatedOffset.generatedLine - 1),
                column: S.generatedColumn - (A.generatedOffset.generatedLine === S.generatedLine ? A.generatedOffset.generatedColumn - 1 : 0),
                bias: w.bias
            }) : {
                source: null,
                line: null,
                column: null,
                name: null
            }
        }
        hasContentsOfAllSources() {
            return this._sections.every(function(w) {
                return w.consumer.hasContentsOfAllSources()
            })
        }
        sourceContentFor(w, S) {
            for (let N = 0; N < this._sections.length; N++) {
                const _ = this._sections[N].consumer.sourceContentFor(w, !0);
                if (_) return _
            }
            if (S) return null;
            throw new Error('"' + w + '" is not in the SourceMap.')
        }
        _findSectionIndex(w) {
            for (let S = 0; S < this._sections.length; S++) {
                const {
                    consumer: N
                } = this._sections[S];
                if (N._findSourceIndex(w) !== -1) return S
            }
            return -1
        }
        generatedPositionFor(w) {
            const S = this._findSectionIndex(s.getArg(w, "source")),
                N = S >= 0 ? this._sections[S] : null,
                A = S >= 0 && S + 1 < this._sections.length ? this._sections[S + 1] : null,
                _ = N && N.consumer.generatedPositionFor(w);
            if (_ && _.line !== null) {
                const D = N.generatedOffset.generatedLine - 1,
                    z = N.generatedOffset.generatedColumn - 1;
                return _.line === 1 && (_.column += z, typeof _.lastColumn == "number" && (_.lastColumn += z)), _.lastColumn === 1 / 0 && A && _.line === A.generatedOffset.generatedLine && (_.lastColumn = A.generatedOffset.generatedColumn - 2), _.line += D, _
            }
            return {
                line: null,
                column: null,
                lastColumn: null
            }
        }
        allGeneratedPositionsFor(w) {
            const S = this._findSectionIndex(s.getArg(w, "source")),
                N = S >= 0 ? this._sections[S] : null,
                A = S >= 0 && S + 1 < this._sections.length ? this._sections[S + 1] : null;
            return N ? N.consumer.allGeneratedPositionsFor(w).map(_ => {
                const D = N.generatedOffset.generatedLine - 1,
                    z = N.generatedOffset.generatedColumn - 1;
                return _.line === 1 && (_.column += z, typeof _.lastColumn == "number" && (_.lastColumn += z)), _.lastColumn === 1 / 0 && A && _.line === A.generatedOffset.generatedLine && (_.lastColumn = A.generatedOffset.generatedColumn - 2), _.line += D, _
            }) : []
        }
        eachMapping(w, S, N) {
            this._sections.forEach((A, _) => {
                const D = _ + 1 < this._sections.length ? this._sections[_ + 1] : null,
                    {
                        generatedOffset: z
                    } = A,
                    Y = z.generatedLine - 1,
                    P = z.generatedColumn - 1;
                A.consumer.eachMapping(function(Q) {
                    Q.generatedLine === 1 && (Q.generatedColumn += P, typeof Q.lastGeneratedColumn == "number" && (Q.lastGeneratedColumn += P)), Q.lastGeneratedColumn === 1 / 0 && D && Q.generatedLine === D.generatedOffset.generatedLine && (Q.lastGeneratedColumn = D.generatedOffset.generatedColumn - 2), Q.generatedLine += Y, w.call(this, Q)
                }, S, N)
            })
        }
        computeColumnSpans() {
            for (let w = 0; w < this._sections.length; w++) this._sections[w].consumer.computeColumnSpans()
        }
        destroy() {
            for (let w = 0; w < this._sections.length; w++) this._sections[w].consumer.destroy()
        }
    }
    Da.IndexedSourceMapConsumer = p;

    function m(b, w) {
        let S = b;
        typeof b == "string" && (S = s.parseSourceMapInput(b));
        const N = S.sections != null ? new p(S, w) : new g(S, w);
        return Promise.resolve(N)
    }

    function x(b, w) {
        return g.fromSourceMap(b, w)
    }
    return Da
}
var Fu = {},
    jh;

function M0() {
    if (jh) return Fu;
    jh = 1;
    const s = xm().SourceMapGenerator,
        i = Sr(),
        r = /(\r?\n)/,
        o = 10,
        c = "$$$isSourceNode$$$";
    class f {
        constructor(g, p, m, x, b) {
            this.children = [], this.sourceContents = {}, this.line = g ? ? null, this.column = p ? ? null, this.source = m ? ? null, this.name = b ? ? null, this[c] = !0, x != null && this.add(x)
        }
        static fromStringWithSourceMap(g, p, m) {
            const x = new f,
                b = g.split(r);
            let w = 0;
            const S = function() {
                const Y = Q(),
                    P = Q() || "";
                return Y + P;

                function Q() {
                    return w < b.length ? b[w++] : void 0
                }
            };
            let N = 1,
                A = 0,
                _ = null,
                D;
            return p.eachMapping(function(Y) {
                if (_ !== null)
                    if (N < Y.generatedLine) z(_, S()), N++, A = 0;
                    else {
                        D = b[w] || "";
                        const P = D.substr(0, Y.generatedColumn - A);
                        b[w] = D.substr(Y.generatedColumn - A), A = Y.generatedColumn, z(_, P), _ = Y;
                        return
                    }
                for (; N < Y.generatedLine;) x.add(S()), N++;
                A < Y.generatedColumn && (D = b[w] || "", x.add(D.substr(0, Y.generatedColumn)), b[w] = D.substr(Y.generatedColumn), A = Y.generatedColumn), _ = Y
            }, this), w < b.length && (_ && z(_, S()), x.add(b.splice(w).join(""))), p.sources.forEach(function(Y) {
                const P = p.sourceContentFor(Y);
                P != null && (m != null && (Y = i.join(m, Y)), x.setSourceContent(Y, P))
            }), x;

            function z(Y, P) {
                if (Y === null || Y.source === void 0) x.add(P);
                else {
                    const Q = m ? i.join(m, Y.source) : Y.source;
                    x.add(new f(Y.originalLine, Y.originalColumn, Q, P, Y.name))
                }
            }
        }
        add(g) {
            if (Array.isArray(g)) g.forEach(function(p) {
                this.add(p)
            }, this);
            else if (g[c] || typeof g == "string") g && this.children.push(g);
            else throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + g);
            return this
        }
        prepend(g) {
            if (Array.isArray(g))
                for (let p = g.length - 1; p >= 0; p--) this.prepend(g[p]);
            else if (g[c] || typeof g == "string") this.children.unshift(g);
            else throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + g);
            return this
        }
        walk(g) {
            let p;
            for (let m = 0, x = this.children.length; m < x; m++) p = this.children[m], p[c] ? p.walk(g) : p !== "" && g(p, {
                source: this.source,
                line: this.line,
                column: this.column,
                name: this.name
            })
        }
        join(g) {
            let p, m;
            const x = this.children.length;
            if (x > 0) {
                for (p = [], m = 0; m < x - 1; m++) p.push(this.children[m]), p.push(g);
                p.push(this.children[m]), this.children = p
            }
            return this
        }
        replaceRight(g, p) {
            const m = this.children[this.children.length - 1];
            return m[c] ? m.replaceRight(g, p) : typeof m == "string" ? this.children[this.children.length - 1] = m.replace(g, p) : this.children.push("".replace(g, p)), this
        }
        setSourceContent(g, p) {
            this.sourceContents[i.toSetString(g)] = p
        }
        walkSourceContents(g) {
            for (let m = 0, x = this.children.length; m < x; m++) this.children[m][c] && this.children[m].walkSourceContents(g);
            const p = Object.keys(this.sourceContents);
            for (let m = 0, x = p.length; m < x; m++) g(i.fromSetString(p[m]), this.sourceContents[p[m]])
        }
        toString() {
            let g = "";
            return this.walk(function(p) {
                g += p
            }), g
        }
        toStringWithSourceMap(g) {
            const p = {
                    code: "",
                    line: 1,
                    column: 0
                },
                m = new s(g);
            let x = !1,
                b = null,
                w = null,
                S = null,
                N = null;
            return this.walk(function(A, _) {
                p.code += A, _.source !== null && _.line !== null && _.column !== null ? ((b !== _.source || w !== _.line || S !== _.column || N !== _.name) && m.addMapping({
                    source: _.source,
                    original: {
                        line: _.line,
                        column: _.column
                    },
                    generated: {
                        line: p.line,
                        column: p.column
                    },
                    name: _.name
                }), b = _.source, w = _.line, S = _.column, N = _.name, x = !0) : x && (m.addMapping({
                    generated: {
                        line: p.line,
                        column: p.column
                    }
                }), b = null, x = !1);
                for (let D = 0, z = A.length; D < z; D++) A.charCodeAt(D) === o ? (p.line++, p.column = 0, D + 1 === z ? (b = null, x = !1) : x && m.addMapping({
                    source: _.source,
                    original: {
                        line: _.line,
                        column: _.column
                    },
                    generated: {
                        line: p.line,
                        column: p.column
                    },
                    name: _.name
                })) : p.column++
            }), this.walkSourceContents(function(A, _) {
                m.setSourceContent(A, _)
            }), {
                code: p.code,
                map: m
            }
        }
    }
    return Fu.SourceNode = f, Fu
}
var Th;

function L0() {
    return Th || (Th = 1, La.SourceMapGenerator = xm().SourceMapGenerator, La.SourceMapConsumer = A0().SourceMapConsumer, La.SourceNode = M0().SourceNode), La
}
var so = L0();
let Pu = !1;
const Dl = new Map,
    D0 = 300 * 1e3,
    z0 = 1e3;
setInterval(() => {
    const s = Date.now();
    for (const [i, r] of Dl.entries()) s - r.timestamp > D0 && Dl.delete(i)
}, 6e4);
async function U0() {
    if (!Pu) try {
        await so.SourceMapConsumer.initialize({
            "lib/mappings.wasm": "https://unpkg.com/source-map@0.7.6/lib/mappings.wasm"
        }), Pu = !0
    } catch (s) {
        console.warn("Failed to initialize SourceMapConsumer:", s);
        try {
            await so.SourceMapConsumer.initialize({}), Pu = !0
        } catch (i) {
            throw console.error("SourceMapConsumer initialization failed completely:", i), i
        }
    }
}

function H0(s) {
    if (!s || !s.stack) return `no-stack-${s?.message||"unknown"}`;
    const o = s.stack.split(`
`).slice(0, 3).map(c => c.replace(/\?t=\d+/g, "").replace(/\?v=[\w\d]+/g, "").replace(/\d{13,}/g, "TIMESTAMP"));
    return `${s.name||"Error"}-${s.message}-${o.join("|")}`
}
const B0 = "preview-inject/";
async function cr(s, i = 5) {
    if (!s || !s.stack) return {
        errorMessage: s ? .message || "",
        mappedStack: s ? .stack || "",
        sourceContext: []
    };
    const r = H0(s);
    if (Dl.has(r)) {
        const x = Dl.get(r);
        return console.log("Using cached error mapping for:", r), x
    }
    if (Dl.size >= z0) return null;
    await U0();
    const o = s.stack.split(`
`),
        c = [],
        f = [],
        d = new Map,
        g = new Map;
    let p = 0;
    for (const x of o) {
        const b = x.match(/at\s+(.+?)\s+\((.+?):(\d+):(\d+)\)|at\s+(.+?):(\d+):(\d+)/);
        if (!b) {
            c.push(x);
            continue
        }
        let w, S, N, A;
        b[1] ? (w = b[1], S = b[2], N = parseInt(b[3]), A = parseInt(b[4])) : (w = "<anonymous>", S = b[5], N = parseInt(b[6]), A = parseInt(b[7]));
        try {
            const _ = `${S}.map`;
            let D = d.get(_);
            if (!D) {
                const Y = await k0(_);
                D = await new so.SourceMapConsumer(Y), d.set(_, D)
            }
            const z = D.originalPositionFor({
                line: N,
                column: A
            });
            if (z.source) {
                if (z.source.includes(B0)) continue;
                const Y = z.source.split("/").filter(se => se !== "..").join("/"),
                    Q = `    at ${z.name||w} (${Y}:${z.line}:${z.column})`;
                if (c.push(Q), z.line && z.column && p < i) {
                    p++;
                    try {
                        const se = await q0(D, z.source, g);
                        if (se) {
                            const pe = V0(se, z.line, 10);
                            f.push({
                                file: Y,
                                line: z.line,
                                column: z.column,
                                context: pe
                            })
                        }
                    } catch (se) {
                        console.warn("Failed to extract source context:", se)
                    }
                }
            } else c.push(x)
        } catch (_) {
            console.warn("Failed to map stack line:", x, _), c.push(x)
        }
    }
    for (const x of d.values()) x.destroy();
    const m = {
        errorMessage: s ? .message || "",
        mappedStack: c.join(`
`),
        sourceContext: f
    };
    return m.timestamp = Date.now(), Dl.set(r, m), m
}
async function q0(s, i, r) {
    if (r.has(i)) return r.get(i) || null;
    const o = s.sourceContentFor(i);
    return o ? (r.set(i, o), o) : null
}

function V0(s, i, r = 10) {
    const o = s.split(`
`),
        c = Math.max(0, i - r - 1),
        f = Math.min(o.length - 1, i + r - 1),
        d = [];
    for (let g = c; g <= f; g++) {
        const p = g + 1,
            b = `${p===i?">>>":"   "} ${p.toString().padStart(4," ")} | ${o[g]||""}`;
        d.push(b)
    }
    return d.join(`
`)
}
async function k0(s) {
    try {
        const i = await fetch(s);
        if (!i.ok) throw new Error(`Failed to load source map: ${i.status}`);
        return await i.json()
    } catch (i) {
        const r = i instanceof Error ? i.message : String(i);
        throw new Error(`Error loading source map from ${s}: ${r}`)
    }
}
class G0 {
    client;
    originalConsoleError;
    constructor() {
        const i = b0();
        i.length > 0 && i.forEach(r => {
            r.type === "console.error" ? this.handleConsoleError(r.args) : r.type === "runtime" && this.handleError(r.args)
        }), this.client = new br(window.parent), this.originalConsoleError = console.error, this.initErrorHandlers()
    }
    initErrorHandlers() {
        window.addEventListener("error", this.handleError.bind(this)), window.addEventListener("unhandledrejection", this.handlePromiseRejection.bind(this)), this.interceptConsoleError()
    }
    async handleError(i) {
        const r = i.target;
        if (!(r && r instanceof HTMLElement && r.tagName && ["IMG", "SCRIPT", "LINK", "VIDEO", "AUDIO", "SOURCE", "IFRAME"].includes(r.tagName)) && i.error && i.error.stack) try {
            const o = await cr(i.error);
            this.sendError(o)
        } catch (o) {
            console.warn("Failed to map error stack:", o)
        }
    }
    async handlePromiseRejection(i) {
        const r = i.reason instanceof Error ? i.reason : new Error(String(i.reason));
        if (r.stack) try {
            const o = await cr(r);
            this.sendError(o)
        } catch (o) {
            console.warn("Failed to map promise rejection stack:", o)
        }
    }
    interceptConsoleError() {
        console.error = (...i) => {
            this.originalConsoleError.apply(console, i);
            const r = i.find(o => o instanceof Error);
            if (r && r.stack) this.handleConsoleError(r);
            else if (i.length > 0) {
                const o = i.map(f => typeof f == "object" ? JSON.stringify(f) : String(f)).join(" "),
                    c = new Error(o);
                this.handleConsoleError(c)
            }
        }
    }
    async handleConsoleError(i) {
        try {
            const r = await cr(i);
            this.sendError(r)
        } catch (r) {
            console.warn("Failed to map console error stack:", r)
        }
    }
    reportError(i) {
        this.handleReactError(i)
    }
    async handleReactError(i) {
        try {
            const r = await cr(i);
            this.sendError(r)
        } catch (r) {
            console.warn("Failed to map React error stack:", r)
        }
    }
    async sendError(i) {
        if (!i) {
            console.warn("error is too many");
            return
        }
        if (i.sourceContext.length !== 0) try {
            await this.client.post("runtime-error", i)
        } catch (r) {
            console.warn("Failed to send error to parent:", r)
        }
    }
    destroy() {
        console.error = this.originalConsoleError, this.client.destroy()
    }
}

function Y0() {
    const s = new G0;
    return window.runtimeErrorCollector = s, s
}
class Q0 {
    _client;
    constructor() {
        this._client = new br(window.parent), this._domContentLoadedListener()
    }
    _domContentLoadedListener() {
        const i = () => {
            console.log("DOMContentLoaded"), this._client.post("DOMContentLoaded"), document.removeEventListener("DOMContentLoaded", i)
        };
        document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", i) : (console.log("DOMContentLoaded"), this._client.post("DOMContentLoaded"))
    }
}

function X0() {
    return new Q0
}
const mo = s => {
        const i = "/preview/f9801a94-cd6a-4a15-bcbd-d787b757fc94/3144826";
        return s.startsWith(i) ? s.replaceAll(i, "") || "/" : s || "/"
    },
    K0 = "modulepreload",
    Z0 = function(s) {
        return "/preview/f9801a94-cd6a-4a15-bcbd-d787b757fc94/3144826/" + s
    },
    Oh = {},
    Sm = function(i, r, o) {
        let c = Promise.resolve();
        if (r && r.length > 0) {
            let m = function(x) {
                return Promise.all(x.map(b => Promise.resolve(b).then(w => ({
                    status: "fulfilled",
                    value: w
                }), w => ({
                    status: "rejected",
                    reason: w
                }))))
            };
            var d = m;
            document.getElementsByTagName("link");
            const g = document.querySelector("meta[property=csp-nonce]"),
                p = g ? .nonce || g ? .getAttribute("nonce");
            c = m(r.map(x => {
                if (x = Z0(x), x in Oh) return;
                Oh[x] = !0;
                const b = x.endsWith(".css"),
                    w = b ? '[rel="stylesheet"]' : "";
                if (document.querySelector(`link[href="${x}"]${w}`)) return;
                const S = document.createElement("link");
                if (S.rel = b ? "stylesheet" : K0, b || (S.as = "script"), S.crossOrigin = "", S.href = x, p && S.setAttribute("nonce", p), document.head.appendChild(S), b) return new Promise((N, A) => {
                    S.addEventListener("load", N), S.addEventListener("error", () => A(new Error(`Unable to preload CSS for ${x}`)))
                })
            }))
        }

        function f(g) {
            const p = new Event("vite:preloadError", {
                cancelable: !0
            });
            if (p.payload = g, window.dispatchEvent(p), !p.defaultPrevented) throw g
        }
        return c.then(g => {
            for (const p of g || []) p.status === "rejected" && f(p.reason);
            return i().catch(f)
        })
    };
async function $0() {
    const i = await await Sm(() => Promise.resolve().then(() => zx), []).then(r => r.navigatePromise).catch(r => (console.error(r), Promise.resolve(() => {})));
    window.REACT_APP_ROUTER = {
        push: (r, o) => {
            i(r, o)
        },
        replace: (r, o, c) => {
            i(r, {
                replace: !0,
                ...c
            })
        },
        forward: () => {
            i(1)
        },
        back: () => {
            i(-1)
        },
        refresh: () => {
            i(0)
        },
        prefetch: (r, o) => {
            i(r, o)
        }
    }
}
const wm = new Promise(s => {
        $0().then(() => {
            s(window.REACT_APP_ROUTER)
        })
    }),
    go = () => window.REACT_APP_ROUTER,
    Em = new br(window.parent),
    uo = async (s, i) => {
        await Em.post("routeWillChange", {
            next: mo(s)
        }, i)
    };

function J0(s) {
    const i = document.querySelector(s);
    i && i.scrollIntoView({
        behavior: "smooth"
    })
}

function F0() {
    const s = window.open;
    return window.open = function(i, r, o) {
        return i && typeof i == "string" && i.startsWith("#") ? (J0(i), null) : (s(i, "_blank", o), null)
    }, () => {
        window.open = s
    }
}

function P0() {
    const s = async i => {
        const o = i.target.closest("a");
        if (!o || o.tagName !== "A") return;
        const c = o.getAttribute("href");
        if (c && !["#", "javascript:void(0)", ""].includes(c) && !c.startsWith("#")) {
            if (i.preventDefault(), c.startsWith("/")) {
                const f = go();
                await uo(c, {
                    timeout: 500
                });
                const d = mo(c);
                f.push(d);
                return
            }
            window.open(o.href, "_blank")
        }
    };
    return window.addEventListener("click", s, !0), () => {
        window.removeEventListener("click", s, !0)
    }
}
const Ah = s => s.startsWith("http://") || s.startsWith("https://");

function W0() {
    const s = () => {
        const i = go(),
            r = i.push;
        i.push = async function(c, f, d) {
            return Ah(c) ? (window.open(c, "_blank"), Promise.resolve(!1)) : (await uo(c, {
                timeout: 500
            }), r.call(this, c, f, d))
        };
        const o = i.replace;
        i.replace = async function(c, f, d) {
            return Ah(c) ? (window.open(c, "_blank"), Promise.resolve(!1)) : (await uo(c, {
                timeout: 500
            }), o.call(this, c, f, d))
        }
    };
    return window.addEventListener("load", s), () => {
        window.removeEventListener("load", s)
    }
}
async function I0() {
    await wm;
    const s = F0(),
        i = P0(),
        r = W0();
    return () => {
        Em.destroy(), s(), i(), r()
    }
}
async function ey() {
    const s = await Sm(() => Promise.resolve().then(() => Lx), void 0).then(c => c.default).catch(c => []);
    let i = [],
        r = 0;

    function o(c, f) {
        const {
            path: d = "",
            children: g,
            index: p
        } = c;
        r++;
        const m = p === !0 || d === "",
            x = d && d[0] === "/",
            b = d.slice(-1) === "/" ? d.slice(0, -1) : d,
            w = m ? f.path : `${f.path}/${b}`,
            S = x && !m ? d : w,
            N = {
                id: r,
                parentId: f.id,
                path: S
            };
        /\*/.test(N.path) || i.push(N), g && g.forEach(A => o(A, N))
    }
    return s.forEach(c => o(c, {
        id: 0,
        path: ""
    })), i
}
async function ty() {
    const s = new br(window.parent),
        i = await ey();
    window.REACT_APP_ROUTES = i, s.post("routes", {
        routes: i
    }), s.on("getRouteInfo", async p => i), await wm, s.on("routeAction", async p => {
        const m = go(),
            {
                action: x,
                route: b
            } = p;
        switch (x) {
            case "goForward":
                m.forward();
                break;
            case "goBack":
                m.back();
                break;
            case "refresh":
                m.refresh();
                break;
            case "goTo":
                b && m.push(b);
                break;
            default:
                console.warn("Unknown action:", x)
        }
    });

    function r() {
        const p = window.history.state ? .index ? ? 0,
            m = window.history.length > p + 1,
            x = p > 0,
            b = window.location.pathname;
        s.post("updateNavigationState", {
            canGoForward: m,
            canGoBack: x,
            currentRoute: mo(b)
        })
    }

    function o() {
        const p = new MutationObserver(x => {
                x.forEach(b => {
                    (b.type === "childList" || b.type === "characterData") && s.post("titleChanged", {
                        title: document.title
                    })
                })
            }),
            m = document.querySelector("title");
        return s.post("titleChanged", {
            title: document.title
        }), m && p.observe(m, {
            childList: !0,
            characterData: !0,
            subtree: !0
        }), p
    }
    let c = o();

    function f() {
        c.disconnect(), setTimeout(() => {
            c = o()
        }, 100)
    }
    const d = window.history.pushState,
        g = window.history.replaceState;
    return window.history.pushState = function(p, m, x) {
        d.apply(this, arguments), r(), f()
    }, window.history.replaceState = function(p, m, x) {
        g.apply(this, arguments), r(), f()
    }, {
        destroy: () => {
            s.destroy(), c.disconnect()
        }
    }
}
const ny = !0;
console.log("Is preview build:", ny);
async function ly() {
    Y0(), I0(), X0(), ty()
}
ly();
var Wu = {
        exports: {}
    },
    za = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mh;

function ay() {
    if (Mh) return za;
    Mh = 1;
    var s = Symbol.for("react.transitional.element"),
        i = Symbol.for("react.fragment");

    function r(o, c, f) {
        var d = null;
        if (f !== void 0 && (d = "" + f), c.key !== void 0 && (d = "" + c.key), "key" in c) {
            f = {};
            for (var g in c) g !== "key" && (f[g] = c[g])
        } else f = c;
        return c = f.ref, {
            $$typeof: s,
            type: o,
            key: d,
            ref: c !== void 0 ? c : null,
            props: f
        }
    }
    return za.Fragment = i, za.jsx = r, za.jsxs = r, za
}
var Lh;

function iy() {
    return Lh || (Lh = 1, Wu.exports = ay()), Wu.exports
}
var y = iy(),
    Iu = {
        exports: {}
    },
    ue = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Dh;

function ry() {
    if (Dh) return ue;
    Dh = 1;
    var s = Symbol.for("react.transitional.element"),
        i = Symbol.for("react.portal"),
        r = Symbol.for("react.fragment"),
        o = Symbol.for("react.strict_mode"),
        c = Symbol.for("react.profiler"),
        f = Symbol.for("react.consumer"),
        d = Symbol.for("react.context"),
        g = Symbol.for("react.forward_ref"),
        p = Symbol.for("react.suspense"),
        m = Symbol.for("react.memo"),
        x = Symbol.for("react.lazy"),
        b = Symbol.iterator;

    function w(C) {
        return C === null || typeof C != "object" ? null : (C = b && C[b] || C["@@iterator"], typeof C == "function" ? C : null)
    }
    var S = {
            isMounted: function() {
                return !1
            },
            enqueueForceUpdate: function() {},
            enqueueReplaceState: function() {},
            enqueueSetState: function() {}
        },
        N = Object.assign,
        A = {};

    function _(C, q, $) {
        this.props = C, this.context = q, this.refs = A, this.updater = $ || S
    }
    _.prototype.isReactComponent = {}, _.prototype.setState = function(C, q) {
        if (typeof C != "object" && typeof C != "function" && C != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, C, q, "setState")
    }, _.prototype.forceUpdate = function(C) {
        this.updater.enqueueForceUpdate(this, C, "forceUpdate")
    };

    function D() {}
    D.prototype = _.prototype;

    function z(C, q, $) {
        this.props = C, this.context = q, this.refs = A, this.updater = $ || S
    }
    var Y = z.prototype = new D;
    Y.constructor = z, N(Y, _.prototype), Y.isPureReactComponent = !0;
    var P = Array.isArray,
        Q = {
            H: null,
            A: null,
            T: null,
            S: null,
            V: null
        },
        se = Object.prototype.hasOwnProperty;

    function pe(C, q, $, Z, ee, xe) {
        return $ = xe.ref, {
            $$typeof: s,
            type: C,
            key: q,
            ref: $ !== void 0 ? $ : null,
            props: xe
        }
    }

    function we(C, q) {
        return pe(C.type, q, void 0, void 0, void 0, C.props)
    }

    function ye(C) {
        return typeof C == "object" && C !== null && C.$$typeof === s
    }

    function G(C) {
        var q = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + C.replace(/[=:]/g, function($) {
            return q[$]
        })
    }
    var K = /\/+/g;

    function F(C, q) {
        return typeof C == "object" && C !== null && C.key != null ? G("" + C.key) : q.toString(36)
    }

    function le() {}

    function he(C) {
        switch (C.status) {
            case "fulfilled":
                return C.value;
            case "rejected":
                throw C.reason;
            default:
                switch (typeof C.status == "string" ? C.then(le, le) : (C.status = "pending", C.then(function(q) {
                    C.status === "pending" && (C.status = "fulfilled", C.value = q)
                }, function(q) {
                    C.status === "pending" && (C.status = "rejected", C.reason = q)
                })), C.status) {
                    case "fulfilled":
                        return C.value;
                    case "rejected":
                        throw C.reason
                }
        }
        throw C
    }

    function me(C, q, $, Z, ee) {
        var xe = typeof C;
        (xe === "undefined" || xe === "boolean") && (C = null);
        var re = !1;
        if (C === null) re = !0;
        else switch (xe) {
            case "bigint":
            case "string":
            case "number":
                re = !0;
                break;
            case "object":
                switch (C.$$typeof) {
                    case s:
                    case i:
                        re = !0;
                        break;
                    case x:
                        return re = C._init, me(re(C._payload), q, $, Z, ee)
                }
        }
        if (re) return ee = ee(C), re = Z === "" ? "." + F(C, 0) : Z, P(ee) ? ($ = "", re != null && ($ = re.replace(K, "$&/") + "/"), me(ee, q, $, "", function(tn) {
            return tn
        })) : ee != null && (ye(ee) && (ee = we(ee, $ + (ee.key == null || C && C.key === ee.key ? "" : ("" + ee.key).replace(K, "$&/") + "/") + re)), q.push(ee)), 1;
        re = 0;
        var it = Z === "" ? "." : Z + ":";
        if (P(C))
            for (var Oe = 0; Oe < C.length; Oe++) Z = C[Oe], xe = it + F(Z, Oe), re += me(Z, q, $, xe, ee);
        else if (Oe = w(C), typeof Oe == "function")
            for (C = Oe.call(C), Oe = 0; !(Z = C.next()).done;) Z = Z.value, xe = it + F(Z, Oe++), re += me(Z, q, $, xe, ee);
        else if (xe === "object") {
            if (typeof C.then == "function") return me(he(C), q, $, Z, ee);
            throw q = String(C), Error("Objects are not valid as a React child (found: " + (q === "[object Object]" ? "object with keys {" + Object.keys(C).join(", ") + "}" : q) + "). If you meant to render a collection of children, use an array instead.")
        }
        return re
    }

    function U(C, q, $) {
        if (C == null) return C;
        var Z = [],
            ee = 0;
        return me(C, Z, "", "", function(xe) {
            return q.call($, xe, ee++)
        }), Z
    }

    function X(C) {
        if (C._status === -1) {
            var q = C._result;
            q = q(), q.then(function($) {
                (C._status === 0 || C._status === -1) && (C._status = 1, C._result = $)
            }, function($) {
                (C._status === 0 || C._status === -1) && (C._status = 2, C._result = $)
            }), C._status === -1 && (C._status = 0, C._result = q)
        }
        if (C._status === 1) return C._result.default;
        throw C._result
    }
    var I = typeof reportError == "function" ? reportError : function(C) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var q = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message: typeof C == "object" && C !== null && typeof C.message == "string" ? String(C.message) : String(C),
                error: C
            });
            if (!window.dispatchEvent(q)) return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", C);
            return
        }
        console.error(C)
    };

    function ve() {}
    return ue.Children = {
        map: U,
        forEach: function(C, q, $) {
            U(C, function() {
                q.apply(this, arguments)
            }, $)
        },
        count: function(C) {
            var q = 0;
            return U(C, function() {
                q++
            }), q
        },
        toArray: function(C) {
            return U(C, function(q) {
                return q
            }) || []
        },
        only: function(C) {
            if (!ye(C)) throw Error("React.Children.only expected to receive a single React element child.");
            return C
        }
    }, ue.Component = _, ue.Fragment = r, ue.Profiler = c, ue.PureComponent = z, ue.StrictMode = o, ue.Suspense = p, ue.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Q, ue.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function(C) {
            return Q.H.useMemoCache(C)
        }
    }, ue.cache = function(C) {
        return function() {
            return C.apply(null, arguments)
        }
    }, ue.cloneElement = function(C, q, $) {
        if (C == null) throw Error("The argument must be a React element, but you passed " + C + ".");
        var Z = N({}, C.props),
            ee = C.key,
            xe = void 0;
        if (q != null)
            for (re in q.ref !== void 0 && (xe = void 0), q.key !== void 0 && (ee = "" + q.key), q) !se.call(q, re) || re === "key" || re === "__self" || re === "__source" || re === "ref" && q.ref === void 0 || (Z[re] = q[re]);
        var re = arguments.length - 2;
        if (re === 1) Z.children = $;
        else if (1 < re) {
            for (var it = Array(re), Oe = 0; Oe < re; Oe++) it[Oe] = arguments[Oe + 2];
            Z.children = it
        }
        return pe(C.type, ee, void 0, void 0, xe, Z)
    }, ue.createContext = function(C) {
        return C = {
            $$typeof: d,
            _currentValue: C,
            _currentValue2: C,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        }, C.Provider = C, C.Consumer = {
            $$typeof: f,
            _context: C
        }, C
    }, ue.createElement = function(C, q, $) {
        var Z, ee = {},
            xe = null;
        if (q != null)
            for (Z in q.key !== void 0 && (xe = "" + q.key), q) se.call(q, Z) && Z !== "key" && Z !== "__self" && Z !== "__source" && (ee[Z] = q[Z]);
        var re = arguments.length - 2;
        if (re === 1) ee.children = $;
        else if (1 < re) {
            for (var it = Array(re), Oe = 0; Oe < re; Oe++) it[Oe] = arguments[Oe + 2];
            ee.children = it
        }
        if (C && C.defaultProps)
            for (Z in re = C.defaultProps, re) ee[Z] === void 0 && (ee[Z] = re[Z]);
        return pe(C, xe, void 0, void 0, null, ee)
    }, ue.createRef = function() {
        return {
            current: null
        }
    }, ue.forwardRef = function(C) {
        return {
            $$typeof: g,
            render: C
        }
    }, ue.isValidElement = ye, ue.lazy = function(C) {
        return {
            $$typeof: x,
            _payload: {
                _status: -1,
                _result: C
            },
            _init: X
        }
    }, ue.memo = function(C, q) {
        return {
            $$typeof: m,
            type: C,
            compare: q === void 0 ? null : q
        }
    }, ue.startTransition = function(C) {
        var q = Q.T,
            $ = {};
        Q.T = $;
        try {
            var Z = C(),
                ee = Q.S;
            ee !== null && ee($, Z), typeof Z == "object" && Z !== null && typeof Z.then == "function" && Z.then(ve, I)
        } catch (xe) {
            I(xe)
        } finally {
            Q.T = q
        }
    }, ue.unstable_useCacheRefresh = function() {
        return Q.H.useCacheRefresh()
    }, ue.use = function(C) {
        return Q.H.use(C)
    }, ue.useActionState = function(C, q, $) {
        return Q.H.useActionState(C, q, $)
    }, ue.useCallback = function(C, q) {
        return Q.H.useCallback(C, q)
    }, ue.useContext = function(C) {
        return Q.H.useContext(C)
    }, ue.useDebugValue = function() {}, ue.useDeferredValue = function(C, q) {
        return Q.H.useDeferredValue(C, q)
    }, ue.useEffect = function(C, q, $) {
        var Z = Q.H;
        if (typeof $ == "function") throw Error("useEffect CRUD overload is not enabled in this build of React.");
        return Z.useEffect(C, q)
    }, ue.useId = function() {
        return Q.H.useId()
    }, ue.useImperativeHandle = function(C, q, $) {
        return Q.H.useImperativeHandle(C, q, $)
    }, ue.useInsertionEffect = function(C, q) {
        return Q.H.useInsertionEffect(C, q)
    }, ue.useLayoutEffect = function(C, q) {
        return Q.H.useLayoutEffect(C, q)
    }, ue.useMemo = function(C, q) {
        return Q.H.useMemo(C, q)
    }, ue.useOptimistic = function(C, q) {
        return Q.H.useOptimistic(C, q)
    }, ue.useReducer = function(C, q, $) {
        return Q.H.useReducer(C, q, $)
    }, ue.useRef = function(C) {
        return Q.H.useRef(C)
    }, ue.useState = function(C) {
        return Q.H.useState(C)
    }, ue.useSyncExternalStore = function(C, q, $) {
        return Q.H.useSyncExternalStore(C, q, $)
    }, ue.useTransition = function() {
        return Q.H.useTransition()
    }, ue.version = "19.1.1", ue
}
var zh;

function po() {
    return zh || (zh = 1, Iu.exports = ry()), Iu.exports
}
var V = po();
const ie = s => typeof s == "string",
    Ua = () => {
        let s, i;
        const r = new Promise((o, c) => {
            s = o, i = c
        });
        return r.resolve = s, r.reject = i, r
    },
    Uh = s => s == null ? "" : "" + s,
    sy = (s, i, r) => {
        s.forEach(o => {
            i[o] && (r[o] = i[o])
        })
    },
    uy = /###/g,
    Hh = s => s && s.indexOf("###") > -1 ? s.replace(uy, ".") : s,
    Bh = s => !s || ie(s),
    Va = (s, i, r) => {
        const o = ie(i) ? i.split(".") : i;
        let c = 0;
        for (; c < o.length - 1;) {
            if (Bh(s)) return {};
            const f = Hh(o[c]);
            !s[f] && r && (s[f] = new r), Object.prototype.hasOwnProperty.call(s, f) ? s = s[f] : s = {}, ++c
        }
        return Bh(s) ? {} : {
            obj: s,
            k: Hh(o[c])
        }
    },
    qh = (s, i, r) => {
        const {
            obj: o,
            k: c
        } = Va(s, i, Object);
        if (o !== void 0 || i.length === 1) {
            o[c] = r;
            return
        }
        let f = i[i.length - 1],
            d = i.slice(0, i.length - 1),
            g = Va(s, d, Object);
        for (; g.obj === void 0 && d.length;) f = `${d[d.length-1]}.${f}`, d = d.slice(0, d.length - 1), g = Va(s, d, Object), g ? .obj && typeof g.obj[`${g.k}.${f}`] < "u" && (g.obj = void 0);
        g.obj[`${g.k}.${f}`] = r
    },
    oy = (s, i, r, o) => {
        const {
            obj: c,
            k: f
        } = Va(s, i, Object);
        c[f] = c[f] || [], c[f].push(r)
    },
    pr = (s, i) => {
        const {
            obj: r,
            k: o
        } = Va(s, i);
        if (r && Object.prototype.hasOwnProperty.call(r, o)) return r[o]
    },
    cy = (s, i, r) => {
        const o = pr(s, r);
        return o !== void 0 ? o : pr(i, r)
    },
    Nm = (s, i, r) => {
        for (const o in i) o !== "__proto__" && o !== "constructor" && (o in s ? ie(s[o]) || s[o] instanceof String || ie(i[o]) || i[o] instanceof String ? r && (s[o] = i[o]) : Nm(s[o], i[o], r) : s[o] = i[o]);
        return s
    },
    Al = s => s.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var fy = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
    "/": "&#x2F;"
};
const dy = s => ie(s) ? s.replace(/[&<>"'\/]/g, i => fy[i]) : s;
class hy {
    constructor(i) {
        this.capacity = i, this.regExpMap = new Map, this.regExpQueue = []
    }
    getRegExp(i) {
        const r = this.regExpMap.get(i);
        if (r !== void 0) return r;
        const o = new RegExp(i);
        return this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()), this.regExpMap.set(i, o), this.regExpQueue.push(i), o
    }
}
const my = [" ", ",", "?", "!", ";"],
    gy = new hy(20),
    py = (s, i, r) => {
        i = i || "", r = r || "";
        const o = my.filter(d => i.indexOf(d) < 0 && r.indexOf(d) < 0);
        if (o.length === 0) return !0;
        const c = gy.getRegExp(`(${o.map(d=>d==="?"?"\\?":d).join("|")})`);
        let f = !c.test(s);
        if (!f) {
            const d = s.indexOf(r);
            d > 0 && !c.test(s.substring(0, d)) && (f = !0)
        }
        return f
    },
    oo = (s, i, r = ".") => {
        if (!s) return;
        if (s[i]) return Object.prototype.hasOwnProperty.call(s, i) ? s[i] : void 0;
        const o = i.split(r);
        let c = s;
        for (let f = 0; f < o.length;) {
            if (!c || typeof c != "object") return;
            let d, g = "";
            for (let p = f; p < o.length; ++p)
                if (p !== f && (g += r), g += o[p], d = c[g], d !== void 0) {
                    if (["string", "number", "boolean"].indexOf(typeof d) > -1 && p < o.length - 1) continue;
                    f += p - f + 1;
                    break
                }
            c = d
        }
        return c
    },
    ka = s => s ? .replace("_", "-"),
    yy = {
        type: "logger",
        log(s) {
            this.output("log", s)
        },
        warn(s) {
            this.output("warn", s)
        },
        error(s) {
            this.output("error", s)
        },
        output(s, i) {
            console ? .[s] ? .apply ? .(console, i)
        }
    };
class yr {
    constructor(i, r = {}) {
        this.init(i, r)
    }
    init(i, r = {}) {
        this.prefix = r.prefix || "i18next:", this.logger = i || yy, this.options = r, this.debug = r.debug
    }
    log(...i) {
        return this.forward(i, "log", "", !0)
    }
    warn(...i) {
        return this.forward(i, "warn", "", !0)
    }
    error(...i) {
        return this.forward(i, "error", "")
    }
    deprecate(...i) {
        return this.forward(i, "warn", "WARNING DEPRECATED: ", !0)
    }
    forward(i, r, o, c) {
        return c && !this.debug ? null : (ie(i[0]) && (i[0] = `${o}${this.prefix} ${i[0]}`), this.logger[r](i))
    }
    create(i) {
        return new yr(this.logger, {
            prefix: `${this.prefix}:${i}:`,
            ...this.options
        })
    }
    clone(i) {
        return i = i || this.options, i.prefix = i.prefix || this.prefix, new yr(this.logger, i)
    }
}
var Dt = new yr;
class wr {
    constructor() {
        this.observers = {}
    }
    on(i, r) {
        return i.split(" ").forEach(o => {
            this.observers[o] || (this.observers[o] = new Map);
            const c = this.observers[o].get(r) || 0;
            this.observers[o].set(r, c + 1)
        }), this
    }
    off(i, r) {
        if (this.observers[i]) {
            if (!r) {
                delete this.observers[i];
                return
            }
            this.observers[i].delete(r)
        }
    }
    emit(i, ...r) {
        this.observers[i] && Array.from(this.observers[i].entries()).forEach(([c, f]) => {
            for (let d = 0; d < f; d++) c(...r)
        }), this.observers["*"] && Array.from(this.observers["*"].entries()).forEach(([c, f]) => {
            for (let d = 0; d < f; d++) c.apply(c, [i, ...r])
        })
    }
}
class Vh extends wr {
    constructor(i, r = {
        ns: ["translation"],
        defaultNS: "translation"
    }) {
        super(), this.data = i || {}, this.options = r, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.options.ignoreJSONStructure === void 0 && (this.options.ignoreJSONStructure = !0)
    }
    addNamespaces(i) {
        this.options.ns.indexOf(i) < 0 && this.options.ns.push(i)
    }
    removeNamespaces(i) {
        const r = this.options.ns.indexOf(i);
        r > -1 && this.options.ns.splice(r, 1)
    }
    getResource(i, r, o, c = {}) {
        const f = c.keySeparator !== void 0 ? c.keySeparator : this.options.keySeparator,
            d = c.ignoreJSONStructure !== void 0 ? c.ignoreJSONStructure : this.options.ignoreJSONStructure;
        let g;
        i.indexOf(".") > -1 ? g = i.split(".") : (g = [i, r], o && (Array.isArray(o) ? g.push(...o) : ie(o) && f ? g.push(...o.split(f)) : g.push(o)));
        const p = pr(this.data, g);
        return !p && !r && !o && i.indexOf(".") > -1 && (i = g[0], r = g[1], o = g.slice(2).join(".")), p || !d || !ie(o) ? p : oo(this.data ? .[i] ? .[r], o, f)
    }
    addResource(i, r, o, c, f = {
        silent: !1
    }) {
        const d = f.keySeparator !== void 0 ? f.keySeparator : this.options.keySeparator;
        let g = [i, r];
        o && (g = g.concat(d ? o.split(d) : o)), i.indexOf(".") > -1 && (g = i.split("."), c = r, r = g[1]), this.addNamespaces(r), qh(this.data, g, c), f.silent || this.emit("added", i, r, o, c)
    }
    addResources(i, r, o, c = {
        silent: !1
    }) {
        for (const f in o)(ie(o[f]) || Array.isArray(o[f])) && this.addResource(i, r, f, o[f], {
            silent: !0
        });
        c.silent || this.emit("added", i, r, o)
    }
    addResourceBundle(i, r, o, c, f, d = {
        silent: !1,
        skipCopy: !1
    }) {
        let g = [i, r];
        i.indexOf(".") > -1 && (g = i.split("."), c = o, o = r, r = g[1]), this.addNamespaces(r);
        let p = pr(this.data, g) || {};
        d.skipCopy || (o = JSON.parse(JSON.stringify(o))), c ? Nm(p, o, f) : p = { ...p,
            ...o
        }, qh(this.data, g, p), d.silent || this.emit("added", i, r, o)
    }
    removeResourceBundle(i, r) {
        this.hasResourceBundle(i, r) && delete this.data[i][r], this.removeNamespaces(r), this.emit("removed", i, r)
    }
    hasResourceBundle(i, r) {
        return this.getResource(i, r) !== void 0
    }
    getResourceBundle(i, r) {
        return r || (r = this.options.defaultNS), this.getResource(i, r)
    }
    getDataByLanguage(i) {
        return this.data[i]
    }
    hasLanguageSomeTranslations(i) {
        const r = this.getDataByLanguage(i);
        return !!(r && Object.keys(r) || []).find(c => r[c] && Object.keys(r[c]).length > 0)
    }
    toJSON() {
        return this.data
    }
}
var Cm = {
    processors: {},
    addPostProcessor(s) {
        this.processors[s.name] = s
    },
    handle(s, i, r, o, c) {
        return s.forEach(f => {
            i = this.processors[f] ? .process(i, r, o, c) ? ? i
        }), i
    }
};
const _m = Symbol("i18next/PATH_KEY");

function vy() {
    const s = [],
        i = Object.create(null);
    let r;
    return i.get = (o, c) => (r ? .revoke ? .(), c === _m ? s : (s.push(c), r = Proxy.revocable(o, i), r.proxy)), Proxy.revocable(Object.create(null), i).proxy
}

function co(s, i) {
    const {
        [_m]: r
    } = s(vy());
    return r.join(i ? .keySeparator ? ? ".")
}
const kh = {},
    Gh = s => !ie(s) && typeof s != "boolean" && typeof s != "number";
class vr extends wr {
    constructor(i, r = {}) {
        super(), sy(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], i, this), this.options = r, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = Dt.create("translator")
    }
    changeLanguage(i) {
        i && (this.language = i)
    }
    exists(i, r = {
        interpolation: {}
    }) {
        const o = { ...r
        };
        return i == null ? !1 : this.resolve(i, o) ? .res !== void 0
    }
    extractFromKey(i, r) {
        let o = r.nsSeparator !== void 0 ? r.nsSeparator : this.options.nsSeparator;
        o === void 0 && (o = ":");
        const c = r.keySeparator !== void 0 ? r.keySeparator : this.options.keySeparator;
        let f = r.ns || this.options.defaultNS || [];
        const d = o && i.indexOf(o) > -1,
            g = !this.options.userDefinedKeySeparator && !r.keySeparator && !this.options.userDefinedNsSeparator && !r.nsSeparator && !py(i, o, c);
        if (d && !g) {
            const p = i.match(this.interpolator.nestingRegexp);
            if (p && p.length > 0) return {
                key: i,
                namespaces: ie(f) ? [f] : f
            };
            const m = i.split(o);
            (o !== c || o === c && this.options.ns.indexOf(m[0]) > -1) && (f = m.shift()), i = m.join(c)
        }
        return {
            key: i,
            namespaces: ie(f) ? [f] : f
        }
    }
    translate(i, r, o) {
        let c = typeof r == "object" ? { ...r
        } : r;
        if (typeof c != "object" && this.options.overloadTranslationOptionHandler && (c = this.options.overloadTranslationOptionHandler(arguments)), typeof options == "object" && (c = { ...c
            }), c || (c = {}), i == null) return "";
        typeof i == "function" && (i = co(i, c)), Array.isArray(i) || (i = [String(i)]);
        const f = c.returnDetails !== void 0 ? c.returnDetails : this.options.returnDetails,
            d = c.keySeparator !== void 0 ? c.keySeparator : this.options.keySeparator,
            {
                key: g,
                namespaces: p
            } = this.extractFromKey(i[i.length - 1], c),
            m = p[p.length - 1];
        let x = c.nsSeparator !== void 0 ? c.nsSeparator : this.options.nsSeparator;
        x === void 0 && (x = ":");
        const b = c.lng || this.language,
            w = c.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
        if (b ? .toLowerCase() === "cimode") return w ? f ? {
            res: `${m}${x}${g}`,
            usedKey: g,
            exactUsedKey: g,
            usedLng: b,
            usedNS: m,
            usedParams: this.getUsedParamsDetails(c)
        } : `${m}${x}${g}` : f ? {
            res: g,
            usedKey: g,
            exactUsedKey: g,
            usedLng: b,
            usedNS: m,
            usedParams: this.getUsedParamsDetails(c)
        } : g;
        const S = this.resolve(i, c);
        let N = S ? .res;
        const A = S ? .usedKey || g,
            _ = S ? .exactUsedKey || g,
            D = ["[object Number]", "[object Function]", "[object RegExp]"],
            z = c.joinArrays !== void 0 ? c.joinArrays : this.options.joinArrays,
            Y = !this.i18nFormat || this.i18nFormat.handleAsObject,
            P = c.count !== void 0 && !ie(c.count),
            Q = vr.hasDefaultValue(c),
            se = P ? this.pluralResolver.getSuffix(b, c.count, c) : "",
            pe = c.ordinal && P ? this.pluralResolver.getSuffix(b, c.count, {
                ordinal: !1
            }) : "",
            we = P && !c.ordinal && c.count === 0,
            ye = we && c[`defaultValue${this.options.pluralSeparator}zero`] || c[`defaultValue${se}`] || c[`defaultValue${pe}`] || c.defaultValue;
        let G = N;
        Y && !N && Q && (G = ye);
        const K = Gh(G),
            F = Object.prototype.toString.apply(G);
        if (Y && G && K && D.indexOf(F) < 0 && !(ie(z) && Array.isArray(G))) {
            if (!c.returnObjects && !this.options.returnObjects) {
                this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
                const le = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(A, G, { ...c,
                    ns: p
                }) : `key '${g} (${this.language})' returned an object instead of string.`;
                return f ? (S.res = le, S.usedParams = this.getUsedParamsDetails(c), S) : le
            }
            if (d) {
                const le = Array.isArray(G),
                    he = le ? [] : {},
                    me = le ? _ : A;
                for (const U in G)
                    if (Object.prototype.hasOwnProperty.call(G, U)) {
                        const X = `${me}${d}${U}`;
                        Q && !N ? he[U] = this.translate(X, { ...c,
                            defaultValue: Gh(ye) ? ye[U] : void 0,
                            joinArrays: !1,
                            ns: p
                        }) : he[U] = this.translate(X, { ...c,
                            joinArrays: !1,
                            ns: p
                        }), he[U] === X && (he[U] = G[U])
                    }
                N = he
            }
        } else if (Y && ie(z) && Array.isArray(N)) N = N.join(z), N && (N = this.extendTranslation(N, i, c, o));
        else {
            let le = !1,
                he = !1;
            !this.isValidLookup(N) && Q && (le = !0, N = ye), this.isValidLookup(N) || (he = !0, N = g);
            const U = (c.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && he ? void 0 : N,
                X = Q && ye !== N && this.options.updateMissing;
            if (he || le || X) {
                if (this.logger.log(X ? "updateKey" : "missingKey", b, m, g, X ? ye : N), d) {
                    const q = this.resolve(g, { ...c,
                        keySeparator: !1
                    });
                    q && q.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")
                }
                let I = [];
                const ve = this.languageUtils.getFallbackCodes(this.options.fallbackLng, c.lng || this.language);
                if (this.options.saveMissingTo === "fallback" && ve && ve[0])
                    for (let q = 0; q < ve.length; q++) I.push(ve[q]);
                else this.options.saveMissingTo === "all" ? I = this.languageUtils.toResolveHierarchy(c.lng || this.language) : I.push(c.lng || this.language);
                const C = (q, $, Z) => {
                    const ee = Q && Z !== N ? Z : U;
                    this.options.missingKeyHandler ? this.options.missingKeyHandler(q, m, $, ee, X, c) : this.backendConnector ? .saveMissing && this.backendConnector.saveMissing(q, m, $, ee, X, c), this.emit("missingKey", q, m, $, N)
                };
                this.options.saveMissing && (this.options.saveMissingPlurals && P ? I.forEach(q => {
                    const $ = this.pluralResolver.getSuffixes(q, c);
                    we && c[`defaultValue${this.options.pluralSeparator}zero`] && $.indexOf(`${this.options.pluralSeparator}zero`) < 0 && $.push(`${this.options.pluralSeparator}zero`), $.forEach(Z => {
                        C([q], g + Z, c[`defaultValue${Z}`] || ye)
                    })
                }) : C(I, g, ye))
            }
            N = this.extendTranslation(N, i, c, S, o), he && N === g && this.options.appendNamespaceToMissingKey && (N = `${m}${x}${g}`), (he || le) && this.options.parseMissingKeyHandler && (N = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${m}${x}${g}` : g, le ? N : void 0, c))
        }
        return f ? (S.res = N, S.usedParams = this.getUsedParamsDetails(c), S) : N
    }
    extendTranslation(i, r, o, c, f) {
        if (this.i18nFormat ? .parse) i = this.i18nFormat.parse(i, { ...this.options.interpolation.defaultVariables,
            ...o
        }, o.lng || this.language || c.usedLng, c.usedNS, c.usedKey, {
            resolved: c
        });
        else if (!o.skipInterpolation) {
            o.interpolation && this.interpolator.init({ ...o,
                interpolation: { ...this.options.interpolation,
                    ...o.interpolation
                }
            });
            const p = ie(i) && (o ? .interpolation ? .skipOnVariables !== void 0 ? o.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
            let m;
            if (p) {
                const b = i.match(this.interpolator.nestingRegexp);
                m = b && b.length
            }
            let x = o.replace && !ie(o.replace) ? o.replace : o;
            if (this.options.interpolation.defaultVariables && (x = { ...this.options.interpolation.defaultVariables,
                    ...x
                }), i = this.interpolator.interpolate(i, x, o.lng || this.language || c.usedLng, o), p) {
                const b = i.match(this.interpolator.nestingRegexp),
                    w = b && b.length;
                m < w && (o.nest = !1)
            }!o.lng && c && c.res && (o.lng = this.language || c.usedLng), o.nest !== !1 && (i = this.interpolator.nest(i, (...b) => f ? .[0] === b[0] && !o.context ? (this.logger.warn(`It seems you are nesting recursively key: ${b[0]} in key: ${r[0]}`), null) : this.translate(...b, r), o)), o.interpolation && this.interpolator.reset()
        }
        const d = o.postProcess || this.options.postProcess,
            g = ie(d) ? [d] : d;
        return i != null && g ? .length && o.applyPostProcessor !== !1 && (i = Cm.handle(g, i, r, this.options && this.options.postProcessPassResolved ? {
            i18nResolved: { ...c,
                usedParams: this.getUsedParamsDetails(o)
            },
            ...o
        } : o, this)), i
    }
    resolve(i, r = {}) {
        let o, c, f, d, g;
        return ie(i) && (i = [i]), i.forEach(p => {
            if (this.isValidLookup(o)) return;
            const m = this.extractFromKey(p, r),
                x = m.key;
            c = x;
            let b = m.namespaces;
            this.options.fallbackNS && (b = b.concat(this.options.fallbackNS));
            const w = r.count !== void 0 && !ie(r.count),
                S = w && !r.ordinal && r.count === 0,
                N = r.context !== void 0 && (ie(r.context) || typeof r.context == "number") && r.context !== "",
                A = r.lngs ? r.lngs : this.languageUtils.toResolveHierarchy(r.lng || this.language, r.fallbackLng);
            b.forEach(_ => {
                this.isValidLookup(o) || (g = _, !kh[`${A[0]}-${_}`] && this.utils ? .hasLoadedNamespace && !this.utils ? .hasLoadedNamespace(g) && (kh[`${A[0]}-${_}`] = !0, this.logger.warn(`key "${c}" for languages "${A.join(", ")}" won't get resolved as namespace "${g}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), A.forEach(D => {
                    if (this.isValidLookup(o)) return;
                    d = D;
                    const z = [x];
                    if (this.i18nFormat ? .addLookupKeys) this.i18nFormat.addLookupKeys(z, x, D, _, r);
                    else {
                        let P;
                        w && (P = this.pluralResolver.getSuffix(D, r.count, r));
                        const Q = `${this.options.pluralSeparator}zero`,
                            se = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
                        if (w && (r.ordinal && P.indexOf(se) === 0 && z.push(x + P.replace(se, this.options.pluralSeparator)), z.push(x + P), S && z.push(x + Q)), N) {
                            const pe = `${x}${this.options.contextSeparator||"_"}${r.context}`;
                            z.push(pe), w && (r.ordinal && P.indexOf(se) === 0 && z.push(pe + P.replace(se, this.options.pluralSeparator)), z.push(pe + P), S && z.push(pe + Q))
                        }
                    }
                    let Y;
                    for (; Y = z.pop();) this.isValidLookup(o) || (f = Y, o = this.getResource(D, _, Y, r))
                }))
            })
        }), {
            res: o,
            usedKey: c,
            exactUsedKey: f,
            usedLng: d,
            usedNS: g
        }
    }
    isValidLookup(i) {
        return i !== void 0 && !(!this.options.returnNull && i === null) && !(!this.options.returnEmptyString && i === "")
    }
    getResource(i, r, o, c = {}) {
        return this.i18nFormat ? .getResource ? this.i18nFormat.getResource(i, r, o, c) : this.resourceStore.getResource(i, r, o, c)
    }
    getUsedParamsDetails(i = {}) {
        const r = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"],
            o = i.replace && !ie(i.replace);
        let c = o ? i.replace : i;
        if (o && typeof i.count < "u" && (c.count = i.count), this.options.interpolation.defaultVariables && (c = { ...this.options.interpolation.defaultVariables,
                ...c
            }), !o) {
            c = { ...c
            };
            for (const f of r) delete c[f]
        }
        return c
    }
    static hasDefaultValue(i) {
        const r = "defaultValue";
        for (const o in i)
            if (Object.prototype.hasOwnProperty.call(i, o) && r === o.substring(0, r.length) && i[o] !== void 0) return !0;
        return !1
    }
}
class Yh {
    constructor(i) {
        this.options = i, this.supportedLngs = this.options.supportedLngs || !1, this.logger = Dt.create("languageUtils")
    }
    getScriptPartFromCode(i) {
        if (i = ka(i), !i || i.indexOf("-") < 0) return null;
        const r = i.split("-");
        return r.length === 2 || (r.pop(), r[r.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(r.join("-"))
    }
    getLanguagePartFromCode(i) {
        if (i = ka(i), !i || i.indexOf("-") < 0) return i;
        const r = i.split("-");
        return this.formatLanguageCode(r[0])
    }
    formatLanguageCode(i) {
        if (ie(i) && i.indexOf("-") > -1) {
            let r;
            try {
                r = Intl.getCanonicalLocales(i)[0]
            } catch {}
            return r && this.options.lowerCaseLng && (r = r.toLowerCase()), r || (this.options.lowerCaseLng ? i.toLowerCase() : i)
        }
        return this.options.cleanCode || this.options.lowerCaseLng ? i.toLowerCase() : i
    }
    isSupportedCode(i) {
        return (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) && (i = this.getLanguagePartFromCode(i)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(i) > -1
    }
    getBestMatchFromCodes(i) {
        if (!i) return null;
        let r;
        return i.forEach(o => {
            if (r) return;
            const c = this.formatLanguageCode(o);
            (!this.options.supportedLngs || this.isSupportedCode(c)) && (r = c)
        }), !r && this.options.supportedLngs && i.forEach(o => {
            if (r) return;
            const c = this.getScriptPartFromCode(o);
            if (this.isSupportedCode(c)) return r = c;
            const f = this.getLanguagePartFromCode(o);
            if (this.isSupportedCode(f)) return r = f;
            r = this.options.supportedLngs.find(d => {
                if (d === f) return d;
                if (!(d.indexOf("-") < 0 && f.indexOf("-") < 0) && (d.indexOf("-") > 0 && f.indexOf("-") < 0 && d.substring(0, d.indexOf("-")) === f || d.indexOf(f) === 0 && f.length > 1)) return d
            })
        }), r || (r = this.getFallbackCodes(this.options.fallbackLng)[0]), r
    }
    getFallbackCodes(i, r) {
        if (!i) return [];
        if (typeof i == "function" && (i = i(r)), ie(i) && (i = [i]), Array.isArray(i)) return i;
        if (!r) return i.default || [];
        let o = i[r];
        return o || (o = i[this.getScriptPartFromCode(r)]), o || (o = i[this.formatLanguageCode(r)]), o || (o = i[this.getLanguagePartFromCode(r)]), o || (o = i.default), o || []
    }
    toResolveHierarchy(i, r) {
        const o = this.getFallbackCodes((r === !1 ? [] : r) || this.options.fallbackLng || [], i),
            c = [],
            f = d => {
                d && (this.isSupportedCode(d) ? c.push(d) : this.logger.warn(`rejecting language code not found in supportedLngs: ${d}`))
            };
        return ie(i) && (i.indexOf("-") > -1 || i.indexOf("_") > -1) ? (this.options.load !== "languageOnly" && f(this.formatLanguageCode(i)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && f(this.getScriptPartFromCode(i)), this.options.load !== "currentOnly" && f(this.getLanguagePartFromCode(i))) : ie(i) && f(this.formatLanguageCode(i)), o.forEach(d => {
            c.indexOf(d) < 0 && f(this.formatLanguageCode(d))
        }), c
    }
}
const Qh = {
        zero: 0,
        one: 1,
        two: 2,
        few: 3,
        many: 4,
        other: 5
    },
    Xh = {
        select: s => s === 1 ? "one" : "other",
        resolvedOptions: () => ({
            pluralCategories: ["one", "other"]
        })
    };
class xy {
    constructor(i, r = {}) {
        this.languageUtils = i, this.options = r, this.logger = Dt.create("pluralResolver"), this.pluralRulesCache = {}
    }
    addRule(i, r) {
        this.rules[i] = r
    }
    clearCache() {
        this.pluralRulesCache = {}
    }
    getRule(i, r = {}) {
        const o = ka(i === "dev" ? "en" : i),
            c = r.ordinal ? "ordinal" : "cardinal",
            f = JSON.stringify({
                cleanedCode: o,
                type: c
            });
        if (f in this.pluralRulesCache) return this.pluralRulesCache[f];
        let d;
        try {
            d = new Intl.PluralRules(o, {
                type: c
            })
        } catch {
            if (!Intl) return this.logger.error("No Intl support, please use an Intl polyfill!"), Xh;
            if (!i.match(/-|_/)) return Xh;
            const p = this.languageUtils.getLanguagePartFromCode(i);
            d = this.getRule(p, r)
        }
        return this.pluralRulesCache[f] = d, d
    }
    needsPlural(i, r = {}) {
        let o = this.getRule(i, r);
        return o || (o = this.getRule("dev", r)), o ? .resolvedOptions().pluralCategories.length > 1
    }
    getPluralFormsOfKey(i, r, o = {}) {
        return this.getSuffixes(i, o).map(c => `${r}${c}`)
    }
    getSuffixes(i, r = {}) {
        let o = this.getRule(i, r);
        return o || (o = this.getRule("dev", r)), o ? o.resolvedOptions().pluralCategories.sort((c, f) => Qh[c] - Qh[f]).map(c => `${this.options.prepend}${r.ordinal?`ordinal${this.options.prepend}`:""}${c}`) : []
    }
    getSuffix(i, r, o = {}) {
        const c = this.getRule(i, o);
        return c ? `${this.options.prepend}${o.ordinal?`ordinal${this.options.prepend}`:""}${c.select(r)}` : (this.logger.warn(`no plural rule found for: ${i}`), this.getSuffix("dev", r, o))
    }
}
const Kh = (s, i, r, o = ".", c = !0) => {
        let f = cy(s, i, r);
        return !f && c && ie(r) && (f = oo(s, r, o), f === void 0 && (f = oo(i, r, o))), f
    },
    eo = s => s.replace(/\$/g, "$$$$");
class by {
    constructor(i = {}) {
        this.logger = Dt.create("interpolator"), this.options = i, this.format = i ? .interpolation ? .format || (r => r), this.init(i)
    }
    init(i = {}) {
        i.interpolation || (i.interpolation = {
            escapeValue: !0
        });
        const {
            escape: r,
            escapeValue: o,
            useRawValueToEscape: c,
            prefix: f,
            prefixEscaped: d,
            suffix: g,
            suffixEscaped: p,
            formatSeparator: m,
            unescapeSuffix: x,
            unescapePrefix: b,
            nestingPrefix: w,
            nestingPrefixEscaped: S,
            nestingSuffix: N,
            nestingSuffixEscaped: A,
            nestingOptionsSeparator: _,
            maxReplaces: D,
            alwaysFormat: z
        } = i.interpolation;
        this.escape = r !== void 0 ? r : dy, this.escapeValue = o !== void 0 ? o : !0, this.useRawValueToEscape = c !== void 0 ? c : !1, this.prefix = f ? Al(f) : d || "{{", this.suffix = g ? Al(g) : p || "}}", this.formatSeparator = m || ",", this.unescapePrefix = x ? "" : b || "-", this.unescapeSuffix = this.unescapePrefix ? "" : x || "", this.nestingPrefix = w ? Al(w) : S || Al("$t("), this.nestingSuffix = N ? Al(N) : A || Al(")"), this.nestingOptionsSeparator = _ || ",", this.maxReplaces = D || 1e3, this.alwaysFormat = z !== void 0 ? z : !1, this.resetRegExp()
    }
    reset() {
        this.options && this.init(this.options)
    }
    resetRegExp() {
        const i = (r, o) => r ? .source === o ? (r.lastIndex = 0, r) : new RegExp(o, "g");
        this.regexp = i(this.regexp, `${this.prefix}(.+?)${this.suffix}`), this.regexpUnescape = i(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`), this.nestingRegexp = i(this.nestingRegexp, `${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`)
    }
    interpolate(i, r, o, c) {
        let f, d, g;
        const p = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {},
            m = S => {
                if (S.indexOf(this.formatSeparator) < 0) {
                    const D = Kh(r, p, S, this.options.keySeparator, this.options.ignoreJSONStructure);
                    return this.alwaysFormat ? this.format(D, void 0, o, { ...c,
                        ...r,
                        interpolationkey: S
                    }) : D
                }
                const N = S.split(this.formatSeparator),
                    A = N.shift().trim(),
                    _ = N.join(this.formatSeparator).trim();
                return this.format(Kh(r, p, A, this.options.keySeparator, this.options.ignoreJSONStructure), _, o, { ...c,
                    ...r,
                    interpolationkey: A
                })
            };
        this.resetRegExp();
        const x = c ? .missingInterpolationHandler || this.options.missingInterpolationHandler,
            b = c ? .interpolation ? .skipOnVariables !== void 0 ? c.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
        return [{
            regex: this.regexpUnescape,
            safeValue: S => eo(S)
        }, {
            regex: this.regexp,
            safeValue: S => this.escapeValue ? eo(this.escape(S)) : eo(S)
        }].forEach(S => {
            for (g = 0; f = S.regex.exec(i);) {
                const N = f[1].trim();
                if (d = m(N), d === void 0)
                    if (typeof x == "function") {
                        const _ = x(i, f, c);
                        d = ie(_) ? _ : ""
                    } else if (c && Object.prototype.hasOwnProperty.call(c, N)) d = "";
                else if (b) {
                    d = f[0];
                    continue
                } else this.logger.warn(`missed to pass in variable ${N} for interpolating ${i}`), d = "";
                else !ie(d) && !this.useRawValueToEscape && (d = Uh(d));
                const A = S.safeValue(d);
                if (i = i.replace(f[0], A), b ? (S.regex.lastIndex += d.length, S.regex.lastIndex -= f[0].length) : S.regex.lastIndex = 0, g++, g >= this.maxReplaces) break
            }
        }), i
    }
    nest(i, r, o = {}) {
        let c, f, d;
        const g = (p, m) => {
            const x = this.nestingOptionsSeparator;
            if (p.indexOf(x) < 0) return p;
            const b = p.split(new RegExp(`${x}[ ]*{`));
            let w = `{${b[1]}`;
            p = b[0], w = this.interpolate(w, d);
            const S = w.match(/'/g),
                N = w.match(/"/g);
            ((S ? .length ? ? 0) % 2 === 0 && !N || N.length % 2 !== 0) && (w = w.replace(/'/g, '"'));
            try {
                d = JSON.parse(w), m && (d = { ...m,
                    ...d
                })
            } catch (A) {
                return this.logger.warn(`failed parsing options string in nesting for key ${p}`, A), `${p}${x}${w}`
            }
            return d.defaultValue && d.defaultValue.indexOf(this.prefix) > -1 && delete d.defaultValue, p
        };
        for (; c = this.nestingRegexp.exec(i);) {
            let p = [];
            d = { ...o
            }, d = d.replace && !ie(d.replace) ? d.replace : d, d.applyPostProcessor = !1, delete d.defaultValue;
            const m = /{.*}/.test(c[1]) ? c[1].lastIndexOf("}") + 1 : c[1].indexOf(this.formatSeparator);
            if (m !== -1 && (p = c[1].slice(m).split(this.formatSeparator).map(x => x.trim()).filter(Boolean), c[1] = c[1].slice(0, m)), f = r(g.call(this, c[1].trim(), d), d), f && c[0] === i && !ie(f)) return f;
            ie(f) || (f = Uh(f)), f || (this.logger.warn(`missed to resolve ${c[1]} for nesting ${i}`), f = ""), p.length && (f = p.reduce((x, b) => this.format(x, b, o.lng, { ...o,
                interpolationkey: c[1].trim()
            }), f.trim())), i = i.replace(c[0], f), this.regexp.lastIndex = 0
        }
        return i
    }
}
const Sy = s => {
        let i = s.toLowerCase().trim();
        const r = {};
        if (s.indexOf("(") > -1) {
            const o = s.split("(");
            i = o[0].toLowerCase().trim();
            const c = o[1].substring(0, o[1].length - 1);
            i === "currency" && c.indexOf(":") < 0 ? r.currency || (r.currency = c.trim()) : i === "relativetime" && c.indexOf(":") < 0 ? r.range || (r.range = c.trim()) : c.split(";").forEach(d => {
                if (d) {
                    const [g, ...p] = d.split(":"), m = p.join(":").trim().replace(/^'+|'+$/g, ""), x = g.trim();
                    r[x] || (r[x] = m), m === "false" && (r[x] = !1), m === "true" && (r[x] = !0), isNaN(m) || (r[x] = parseInt(m, 10))
                }
            })
        }
        return {
            formatName: i,
            formatOptions: r
        }
    },
    Zh = s => {
        const i = {};
        return (r, o, c) => {
            let f = c;
            c && c.interpolationkey && c.formatParams && c.formatParams[c.interpolationkey] && c[c.interpolationkey] && (f = { ...f,
                [c.interpolationkey]: void 0
            });
            const d = o + JSON.stringify(f);
            let g = i[d];
            return g || (g = s(ka(o), c), i[d] = g), g(r)
        }
    },
    wy = s => (i, r, o) => s(ka(r), o)(i);
class Ey {
    constructor(i = {}) {
        this.logger = Dt.create("formatter"), this.options = i, this.init(i)
    }
    init(i, r = {
        interpolation: {}
    }) {
        this.formatSeparator = r.interpolation.formatSeparator || ",";
        const o = r.cacheInBuiltFormats ? Zh : wy;
        this.formats = {
            number: o((c, f) => {
                const d = new Intl.NumberFormat(c, { ...f
                });
                return g => d.format(g)
            }),
            currency: o((c, f) => {
                const d = new Intl.NumberFormat(c, { ...f,
                    style: "currency"
                });
                return g => d.format(g)
            }),
            datetime: o((c, f) => {
                const d = new Intl.DateTimeFormat(c, { ...f
                });
                return g => d.format(g)
            }),
            relativetime: o((c, f) => {
                const d = new Intl.RelativeTimeFormat(c, { ...f
                });
                return g => d.format(g, f.range || "day")
            }),
            list: o((c, f) => {
                const d = new Intl.ListFormat(c, { ...f
                });
                return g => d.format(g)
            })
        }
    }
    add(i, r) {
        this.formats[i.toLowerCase().trim()] = r
    }
    addCached(i, r) {
        this.formats[i.toLowerCase().trim()] = Zh(r)
    }
    format(i, r, o, c = {}) {
        const f = r.split(this.formatSeparator);
        if (f.length > 1 && f[0].indexOf("(") > 1 && f[0].indexOf(")") < 0 && f.find(g => g.indexOf(")") > -1)) {
            const g = f.findIndex(p => p.indexOf(")") > -1);
            f[0] = [f[0], ...f.splice(1, g)].join(this.formatSeparator)
        }
        return f.reduce((g, p) => {
            const {
                formatName: m,
                formatOptions: x
            } = Sy(p);
            if (this.formats[m]) {
                let b = g;
                try {
                    const w = c ? .formatParams ? .[c.interpolationkey] || {},
                        S = w.locale || w.lng || c.locale || c.lng || o;
                    b = this.formats[m](g, S, { ...x,
                        ...c,
                        ...w
                    })
                } catch (w) {
                    this.logger.warn(w)
                }
                return b
            } else this.logger.warn(`there was no format function for ${m}`);
            return g
        }, i)
    }
}
const Ny = (s, i) => {
    s.pending[i] !== void 0 && (delete s.pending[i], s.pendingCount--)
};
class Cy extends wr {
    constructor(i, r, o, c = {}) {
        super(), this.backend = i, this.store = r, this.services = o, this.languageUtils = o.languageUtils, this.options = c, this.logger = Dt.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = c.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = c.maxRetries >= 0 ? c.maxRetries : 5, this.retryTimeout = c.retryTimeout >= 1 ? c.retryTimeout : 350, this.state = {}, this.queue = [], this.backend ? .init ? .(o, c.backend, c)
    }
    queueLoad(i, r, o, c) {
        const f = {},
            d = {},
            g = {},
            p = {};
        return i.forEach(m => {
            let x = !0;
            r.forEach(b => {
                const w = `${m}|${b}`;
                !o.reload && this.store.hasResourceBundle(m, b) ? this.state[w] = 2 : this.state[w] < 0 || (this.state[w] === 1 ? d[w] === void 0 && (d[w] = !0) : (this.state[w] = 1, x = !1, d[w] === void 0 && (d[w] = !0), f[w] === void 0 && (f[w] = !0), p[b] === void 0 && (p[b] = !0)))
            }), x || (g[m] = !0)
        }), (Object.keys(f).length || Object.keys(d).length) && this.queue.push({
            pending: d,
            pendingCount: Object.keys(d).length,
            loaded: {},
            errors: [],
            callback: c
        }), {
            toLoad: Object.keys(f),
            pending: Object.keys(d),
            toLoadLanguages: Object.keys(g),
            toLoadNamespaces: Object.keys(p)
        }
    }
    loaded(i, r, o) {
        const c = i.split("|"),
            f = c[0],
            d = c[1];
        r && this.emit("failedLoading", f, d, r), !r && o && this.store.addResourceBundle(f, d, o, void 0, void 0, {
            skipCopy: !0
        }), this.state[i] = r ? -1 : 2, r && o && (this.state[i] = 0);
        const g = {};
        this.queue.forEach(p => {
            oy(p.loaded, [f], d), Ny(p, i), r && p.errors.push(r), p.pendingCount === 0 && !p.done && (Object.keys(p.loaded).forEach(m => {
                g[m] || (g[m] = {});
                const x = p.loaded[m];
                x.length && x.forEach(b => {
                    g[m][b] === void 0 && (g[m][b] = !0)
                })
            }), p.done = !0, p.errors.length ? p.callback(p.errors) : p.callback())
        }), this.emit("loaded", g), this.queue = this.queue.filter(p => !p.done)
    }
    read(i, r, o, c = 0, f = this.retryTimeout, d) {
        if (!i.length) return d(null, {});
        if (this.readingCalls >= this.maxParallelReads) {
            this.waitingReads.push({
                lng: i,
                ns: r,
                fcName: o,
                tried: c,
                wait: f,
                callback: d
            });
            return
        }
        this.readingCalls++;
        const g = (m, x) => {
                if (this.readingCalls--, this.waitingReads.length > 0) {
                    const b = this.waitingReads.shift();
                    this.read(b.lng, b.ns, b.fcName, b.tried, b.wait, b.callback)
                }
                if (m && x && c < this.maxRetries) {
                    setTimeout(() => {
                        this.read.call(this, i, r, o, c + 1, f * 2, d)
                    }, f);
                    return
                }
                d(m, x)
            },
            p = this.backend[o].bind(this.backend);
        if (p.length === 2) {
            try {
                const m = p(i, r);
                m && typeof m.then == "function" ? m.then(x => g(null, x)).catch(g) : g(null, m)
            } catch (m) {
                g(m)
            }
            return
        }
        return p(i, r, g)
    }
    prepareLoading(i, r, o = {}, c) {
        if (!this.backend) return this.logger.warn("No backend was added via i18next.use. Will not load resources."), c && c();
        ie(i) && (i = this.languageUtils.toResolveHierarchy(i)), ie(r) && (r = [r]);
        const f = this.queueLoad(i, r, o, c);
        if (!f.toLoad.length) return f.pending.length || c(), null;
        f.toLoad.forEach(d => {
            this.loadOne(d)
        })
    }
    load(i, r, o) {
        this.prepareLoading(i, r, {}, o)
    }
    reload(i, r, o) {
        this.prepareLoading(i, r, {
            reload: !0
        }, o)
    }
    loadOne(i, r = "") {
        const o = i.split("|"),
            c = o[0],
            f = o[1];
        this.read(c, f, "read", void 0, void 0, (d, g) => {
            d && this.logger.warn(`${r}loading namespace ${f} for language ${c} failed`, d), !d && g && this.logger.log(`${r}loaded namespace ${f} for language ${c}`, g), this.loaded(i, d, g)
        })
    }
    saveMissing(i, r, o, c, f, d = {}, g = () => {}) {
        if (this.services ? .utils ? .hasLoadedNamespace && !this.services ? .utils ? .hasLoadedNamespace(r)) {
            this.logger.warn(`did not save key "${o}" as the namespace "${r}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
            return
        }
        if (!(o == null || o === "")) {
            if (this.backend ? .create) {
                const p = { ...d,
                        isUpdate: f
                    },
                    m = this.backend.create.bind(this.backend);
                if (m.length < 6) try {
                    let x;
                    m.length === 5 ? x = m(i, r, o, c, p) : x = m(i, r, o, c), x && typeof x.then == "function" ? x.then(b => g(null, b)).catch(g) : g(null, x)
                } catch (x) {
                    g(x)
                } else m(i, r, o, c, g, p)
            }!i || !i[0] || this.store.addResource(i[0], r, o, c)
        }
    }
}
const $h = () => ({
        debug: !1,
        initAsync: !0,
        ns: ["translation"],
        defaultNS: ["translation"],
        fallbackLng: ["dev"],
        fallbackNS: !1,
        supportedLngs: !1,
        nonExplicitSupportedLngs: !1,
        load: "all",
        preload: !1,
        simplifyPluralSuffix: !0,
        keySeparator: ".",
        nsSeparator: ":",
        pluralSeparator: "_",
        contextSeparator: "_",
        partialBundledLanguages: !1,
        saveMissing: !1,
        updateMissing: !1,
        saveMissingTo: "fallback",
        saveMissingPlurals: !0,
        missingKeyHandler: !1,
        missingInterpolationHandler: !1,
        postProcess: !1,
        postProcessPassResolved: !1,
        returnNull: !1,
        returnEmptyString: !0,
        returnObjects: !1,
        joinArrays: !1,
        returnedObjectHandler: !1,
        parseMissingKeyHandler: !1,
        appendNamespaceToMissingKey: !1,
        appendNamespaceToCIMode: !1,
        overloadTranslationOptionHandler: s => {
            let i = {};
            if (typeof s[1] == "object" && (i = s[1]), ie(s[1]) && (i.defaultValue = s[1]), ie(s[2]) && (i.tDescription = s[2]), typeof s[2] == "object" || typeof s[3] == "object") {
                const r = s[3] || s[2];
                Object.keys(r).forEach(o => {
                    i[o] = r[o]
                })
            }
            return i
        },
        interpolation: {
            escapeValue: !0,
            format: s => s,
            prefix: "{{",
            suffix: "}}",
            formatSeparator: ",",
            unescapePrefix: "-",
            nestingPrefix: "$t(",
            nestingSuffix: ")",
            nestingOptionsSeparator: ",",
            maxReplaces: 1e3,
            skipOnVariables: !0
        },
        cacheInBuiltFormats: !0
    }),
    Jh = s => (ie(s.ns) && (s.ns = [s.ns]), ie(s.fallbackLng) && (s.fallbackLng = [s.fallbackLng]), ie(s.fallbackNS) && (s.fallbackNS = [s.fallbackNS]), s.supportedLngs ? .indexOf ? .("cimode") < 0 && (s.supportedLngs = s.supportedLngs.concat(["cimode"])), typeof s.initImmediate == "boolean" && (s.initAsync = s.initImmediate), s),
    fr = () => {},
    _y = s => {
        Object.getOwnPropertyNames(Object.getPrototypeOf(s)).forEach(r => {
            typeof s[r] == "function" && (s[r] = s[r].bind(s))
        })
    };
class Ga extends wr {
    constructor(i = {}, r) {
        if (super(), this.options = Jh(i), this.services = {}, this.logger = Dt, this.modules = {
                external: []
            }, _y(this), r && !this.isInitialized && !i.isClone) {
            if (!this.options.initAsync) return this.init(i, r), this;
            setTimeout(() => {
                this.init(i, r)
            }, 0)
        }
    }
    init(i = {}, r) {
        this.isInitializing = !0, typeof i == "function" && (r = i, i = {}), i.defaultNS == null && i.ns && (ie(i.ns) ? i.defaultNS = i.ns : i.ns.indexOf("translation") < 0 && (i.defaultNS = i.ns[0]));
        const o = $h();
        this.options = { ...o,
            ...this.options,
            ...Jh(i)
        }, this.options.interpolation = { ...o.interpolation,
            ...this.options.interpolation
        }, i.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = i.keySeparator), i.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = i.nsSeparator);
        const c = m => m ? typeof m == "function" ? new m : m : null;
        if (!this.options.isClone) {
            this.modules.logger ? Dt.init(c(this.modules.logger), this.options) : Dt.init(null, this.options);
            let m;
            this.modules.formatter ? m = this.modules.formatter : m = Ey;
            const x = new Yh(this.options);
            this.store = new Vh(this.options.resources, this.options);
            const b = this.services;
            b.logger = Dt, b.resourceStore = this.store, b.languageUtils = x, b.pluralResolver = new xy(x, {
                prepend: this.options.pluralSeparator,
                simplifyPluralSuffix: this.options.simplifyPluralSuffix
            }), this.options.interpolation.format && this.options.interpolation.format !== o.interpolation.format && this.logger.deprecate("init: you are still using the legacy format function, please use the new approach: https://www.i18next.com/translation-function/formatting"), m && (!this.options.interpolation.format || this.options.interpolation.format === o.interpolation.format) && (b.formatter = c(m), b.formatter.init && b.formatter.init(b, this.options), this.options.interpolation.format = b.formatter.format.bind(b.formatter)), b.interpolator = new by(this.options), b.utils = {
                hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
            }, b.backendConnector = new Cy(c(this.modules.backend), b.resourceStore, b, this.options), b.backendConnector.on("*", (S, ...N) => {
                this.emit(S, ...N)
            }), this.modules.languageDetector && (b.languageDetector = c(this.modules.languageDetector), b.languageDetector.init && b.languageDetector.init(b, this.options.detection, this.options)), this.modules.i18nFormat && (b.i18nFormat = c(this.modules.i18nFormat), b.i18nFormat.init && b.i18nFormat.init(this)), this.translator = new vr(this.services, this.options), this.translator.on("*", (S, ...N) => {
                this.emit(S, ...N)
            }), this.modules.external.forEach(S => {
                S.init && S.init(this)
            })
        }
        if (this.format = this.options.interpolation.format, r || (r = fr), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
            const m = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
            m.length > 0 && m[0] !== "dev" && (this.options.lng = m[0])
        }!this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined"), ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach(m => {
            this[m] = (...x) => this.store[m](...x)
        }), ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach(m => {
            this[m] = (...x) => (this.store[m](...x), this)
        });
        const g = Ua(),
            p = () => {
                const m = (x, b) => {
                    this.isInitializing = !1, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), g.resolve(b), r(x, b)
                };
                if (this.languages && !this.isInitialized) return m(null, this.t.bind(this));
                this.changeLanguage(this.options.lng, m)
            };
        return this.options.resources || !this.options.initAsync ? p() : setTimeout(p, 0), g
    }
    loadResources(i, r = fr) {
        let o = r;
        const c = ie(i) ? i : this.language;
        if (typeof i == "function" && (o = i), !this.options.resources || this.options.partialBundledLanguages) {
            if (c ? .toLowerCase() === "cimode" && (!this.options.preload || this.options.preload.length === 0)) return o();
            const f = [],
                d = g => {
                    if (!g || g === "cimode") return;
                    this.services.languageUtils.toResolveHierarchy(g).forEach(m => {
                        m !== "cimode" && f.indexOf(m) < 0 && f.push(m)
                    })
                };
            c ? d(c) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(p => d(p)), this.options.preload ? .forEach ? .(g => d(g)), this.services.backendConnector.load(f, this.options.ns, g => {
                !g && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language), o(g)
            })
        } else o(null)
    }
    reloadResources(i, r, o) {
        const c = Ua();
        return typeof i == "function" && (o = i, i = void 0), typeof r == "function" && (o = r, r = void 0), i || (i = this.languages), r || (r = this.options.ns), o || (o = fr), this.services.backendConnector.reload(i, r, f => {
            c.resolve(), o(f)
        }), c
    }
    use(i) {
        if (!i) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
        if (!i.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
        return i.type === "backend" && (this.modules.backend = i), (i.type === "logger" || i.log && i.warn && i.error) && (this.modules.logger = i), i.type === "languageDetector" && (this.modules.languageDetector = i), i.type === "i18nFormat" && (this.modules.i18nFormat = i), i.type === "postProcessor" && Cm.addPostProcessor(i), i.type === "formatter" && (this.modules.formatter = i), i.type === "3rdParty" && this.modules.external.push(i), this
    }
    setResolvedLanguage(i) {
        if (!(!i || !this.languages) && !(["cimode", "dev"].indexOf(i) > -1)) {
            for (let r = 0; r < this.languages.length; r++) {
                const o = this.languages[r];
                if (!(["cimode", "dev"].indexOf(o) > -1) && this.store.hasLanguageSomeTranslations(o)) {
                    this.resolvedLanguage = o;
                    break
                }
            }!this.resolvedLanguage && this.languages.indexOf(i) < 0 && this.store.hasLanguageSomeTranslations(i) && (this.resolvedLanguage = i, this.languages.unshift(i))
        }
    }
    changeLanguage(i, r) {
        this.isLanguageChangingTo = i;
        const o = Ua();
        this.emit("languageChanging", i);
        const c = g => {
                this.language = g, this.languages = this.services.languageUtils.toResolveHierarchy(g), this.resolvedLanguage = void 0, this.setResolvedLanguage(g)
            },
            f = (g, p) => {
                p ? this.isLanguageChangingTo === i && (c(p), this.translator.changeLanguage(p), this.isLanguageChangingTo = void 0, this.emit("languageChanged", p), this.logger.log("languageChanged", p)) : this.isLanguageChangingTo = void 0, o.resolve((...m) => this.t(...m)), r && r(g, (...m) => this.t(...m))
            },
            d = g => {
                !i && !g && this.services.languageDetector && (g = []);
                const p = ie(g) ? g : g && g[0],
                    m = this.store.hasLanguageSomeTranslations(p) ? p : this.services.languageUtils.getBestMatchFromCodes(ie(g) ? [g] : g);
                m && (this.language || c(m), this.translator.language || this.translator.changeLanguage(m), this.services.languageDetector ? .cacheUserLanguage ? .(m)), this.loadResources(m, x => {
                    f(x, m)
                })
            };
        return !i && this.services.languageDetector && !this.services.languageDetector.async ? d(this.services.languageDetector.detect()) : !i && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(d) : this.services.languageDetector.detect(d) : d(i), o
    }
    getFixedT(i, r, o) {
        const c = (f, d, ...g) => {
            let p;
            typeof d != "object" ? p = this.options.overloadTranslationOptionHandler([f, d].concat(g)) : p = { ...d
            }, p.lng = p.lng || c.lng, p.lngs = p.lngs || c.lngs, p.ns = p.ns || c.ns, p.keyPrefix !== "" && (p.keyPrefix = p.keyPrefix || o || c.keyPrefix);
            const m = this.options.keySeparator || ".";
            let x;
            return p.keyPrefix && Array.isArray(f) ? x = f.map(b => (typeof b == "function" && (b = co(b, d)), `${p.keyPrefix}${m}${b}`)) : (typeof f == "function" && (f = co(f, d)), x = p.keyPrefix ? `${p.keyPrefix}${m}${f}` : f), this.t(x, p)
        };
        return ie(i) ? c.lng = i : c.lngs = i, c.ns = r, c.keyPrefix = o, c
    }
    t(...i) {
        return this.translator ? .translate(...i)
    }
    exists(...i) {
        return this.translator ? .exists(...i)
    }
    setDefaultNamespace(i) {
        this.options.defaultNS = i
    }
    hasLoadedNamespace(i, r = {}) {
        if (!this.isInitialized) return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
        if (!this.languages || !this.languages.length) return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
        const o = r.lng || this.resolvedLanguage || this.languages[0],
            c = this.options ? this.options.fallbackLng : !1,
            f = this.languages[this.languages.length - 1];
        if (o.toLowerCase() === "cimode") return !0;
        const d = (g, p) => {
            const m = this.services.backendConnector.state[`${g}|${p}`];
            return m === -1 || m === 0 || m === 2
        };
        if (r.precheck) {
            const g = r.precheck(this, d);
            if (g !== void 0) return g
        }
        return !!(this.hasResourceBundle(o, i) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || d(o, i) && (!c || d(f, i)))
    }
    loadNamespaces(i, r) {
        const o = Ua();
        return this.options.ns ? (ie(i) && (i = [i]), i.forEach(c => {
            this.options.ns.indexOf(c) < 0 && this.options.ns.push(c)
        }), this.loadResources(c => {
            o.resolve(), r && r(c)
        }), o) : (r && r(), Promise.resolve())
    }
    loadLanguages(i, r) {
        const o = Ua();
        ie(i) && (i = [i]);
        const c = this.options.preload || [],
            f = i.filter(d => c.indexOf(d) < 0 && this.services.languageUtils.isSupportedCode(d));
        return f.length ? (this.options.preload = c.concat(f), this.loadResources(d => {
            o.resolve(), r && r(d)
        }), o) : (r && r(), Promise.resolve())
    }
    dir(i) {
        if (i || (i = this.resolvedLanguage || (this.languages ? .length > 0 ? this.languages[0] : this.language)), !i) return "rtl";
        try {
            const c = new Intl.Locale(i);
            if (c && c.getTextInfo) {
                const f = c.getTextInfo();
                if (f && f.direction) return f.direction
            }
        } catch {}
        const r = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"],
            o = this.services ? .languageUtils || new Yh($h());
        return i.toLowerCase().indexOf("-latn") > 1 ? "ltr" : r.indexOf(o.getLanguagePartFromCode(i)) > -1 || i.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr"
    }
    static createInstance(i = {}, r) {
        return new Ga(i, r)
    }
    cloneInstance(i = {}, r = fr) {
        const o = i.forkResourceStore;
        o && delete i.forkResourceStore;
        const c = { ...this.options,
                ...i,
                isClone: !0
            },
            f = new Ga(c);
        if ((i.debug !== void 0 || i.prefix !== void 0) && (f.logger = f.logger.clone(i)), ["store", "services", "language"].forEach(g => {
                f[g] = this[g]
            }), f.services = { ...this.services
            }, f.services.utils = {
                hasLoadedNamespace: f.hasLoadedNamespace.bind(f)
            }, o) {
            const g = Object.keys(this.store.data).reduce((p, m) => (p[m] = { ...this.store.data[m]
            }, p[m] = Object.keys(p[m]).reduce((x, b) => (x[b] = { ...p[m][b]
            }, x), p[m]), p), {});
            f.store = new Vh(g, c), f.services.resourceStore = f.store
        }
        return f.translator = new vr(f.services, c), f.translator.on("*", (g, ...p) => {
            f.emit(g, ...p)
        }), f.init(c, r), f.translator.options = c, f.translator.backendConnector.services.utils = {
            hasLoadedNamespace: f.hasLoadedNamespace.bind(f)
        }, f
    }
    toJSON() {
        return {
            options: this.options,
            store: this.store,
            language: this.language,
            languages: this.languages,
            resolvedLanguage: this.resolvedLanguage
        }
    }
}
const We = Ga.createInstance();
We.createInstance = Ga.createInstance;
We.createInstance;
We.dir;
We.init;
We.loadResources;
We.reloadResources;
We.use;
We.changeLanguage;
We.getFixedT;
We.t;
We.exists;
We.setDefaultNamespace;
We.hasLoadedNamespace;
We.loadNamespaces;
We.loadLanguages;
const Ry = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
    jy = {
        "&amp;": "&",
        "&#38;": "&",
        "&lt;": "<",
        "&#60;": "<",
        "&gt;": ">",
        "&#62;": ">",
        "&apos;": "'",
        "&#39;": "'",
        "&quot;": '"',
        "&#34;": '"',
        "&nbsp;": " ",
        "&#160;": " ",
        "&copy;": "©",
        "&#169;": "©",
        "&reg;": "®",
        "&#174;": "®",
        "&hellip;": "…",
        "&#8230;": "…",
        "&#x2F;": "/",
        "&#47;": "/"
    },
    Ty = s => jy[s],
    Oy = s => s.replace(Ry, Ty);
let Fh = {
    bindI18n: "languageChanged",
    bindI18nStore: "",
    transEmptyNodeValue: "",
    transSupportBasicHtmlNodes: !0,
    transWrapTextNodes: "",
    transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
    useSuspense: !0,
    unescape: Oy
};
const Ay = (s = {}) => {
        Fh = { ...Fh,
            ...s
        }
    },
    My = {
        type: "3rdParty",
        init(s) {
            Ay(s.options.react)
        }
    },
    {
        slice: Ly,
        forEach: Dy
    } = [];

function zy(s) {
    return Dy.call(Ly.call(arguments, 1), i => {
        if (i)
            for (const r in i) s[r] === void 0 && (s[r] = i[r])
    }), s
}

function Uy(s) {
    return typeof s != "string" ? !1 : [/<\s*script.*?>/i, /<\s*\/\s*script\s*>/i, /<\s*img.*?on\w+\s*=/i, /<\s*\w+\s*on\w+\s*=.*?>/i, /javascript\s*:/i, /vbscript\s*:/i, /expression\s*\(/i, /eval\s*\(/i, /alert\s*\(/i, /document\.cookie/i, /document\.write\s*\(/i, /window\.location/i, /innerHTML/i].some(r => r.test(s))
}
const Ph = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,
    Hy = function(s, i) {
        const o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
                path: "/"
            },
            c = encodeURIComponent(i);
        let f = `${s}=${c}`;
        if (o.maxAge > 0) {
            const d = o.maxAge - 0;
            if (Number.isNaN(d)) throw new Error("maxAge should be a Number");
            f += `; Max-Age=${Math.floor(d)}`
        }
        if (o.domain) {
            if (!Ph.test(o.domain)) throw new TypeError("option domain is invalid");
            f += `; Domain=${o.domain}`
        }
        if (o.path) {
            if (!Ph.test(o.path)) throw new TypeError("option path is invalid");
            f += `; Path=${o.path}`
        }
        if (o.expires) {
            if (typeof o.expires.toUTCString != "function") throw new TypeError("option expires is invalid");
            f += `; Expires=${o.expires.toUTCString()}`
        }
        if (o.httpOnly && (f += "; HttpOnly"), o.secure && (f += "; Secure"), o.sameSite) switch (typeof o.sameSite == "string" ? o.sameSite.toLowerCase() : o.sameSite) {
            case !0:
                f += "; SameSite=Strict";
                break;
            case "lax":
                f += "; SameSite=Lax";
                break;
            case "strict":
                f += "; SameSite=Strict";
                break;
            case "none":
                f += "; SameSite=None";
                break;
            default:
                throw new TypeError("option sameSite is invalid")
        }
        return o.partitioned && (f += "; Partitioned"), f
    },
    Wh = {
        create(s, i, r, o) {
            let c = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
                path: "/",
                sameSite: "strict"
            };
            r && (c.expires = new Date, c.expires.setTime(c.expires.getTime() + r * 60 * 1e3)), o && (c.domain = o), document.cookie = Hy(s, i, c)
        },
        read(s) {
            const i = `${s}=`,
                r = document.cookie.split(";");
            for (let o = 0; o < r.length; o++) {
                let c = r[o];
                for (; c.charAt(0) === " ";) c = c.substring(1, c.length);
                if (c.indexOf(i) === 0) return c.substring(i.length, c.length)
            }
            return null
        },
        remove(s, i) {
            this.create(s, "", -1, i)
        }
    };
var By = {
        name: "cookie",
        lookup(s) {
            let {
                lookupCookie: i
            } = s;
            if (i && typeof document < "u") return Wh.read(i) || void 0
        },
        cacheUserLanguage(s, i) {
            let {
                lookupCookie: r,
                cookieMinutes: o,
                cookieDomain: c,
                cookieOptions: f
            } = i;
            r && typeof document < "u" && Wh.create(r, s, o, c, f)
        }
    },
    qy = {
        name: "querystring",
        lookup(s) {
            let {
                lookupQuerystring: i
            } = s, r;
            if (typeof window < "u") {
                let {
                    search: o
                } = window.location;
                !window.location.search && window.location.hash ? .indexOf("?") > -1 && (o = window.location.hash.substring(window.location.hash.indexOf("?")));
                const f = o.substring(1).split("&");
                for (let d = 0; d < f.length; d++) {
                    const g = f[d].indexOf("=");
                    g > 0 && f[d].substring(0, g) === i && (r = f[d].substring(g + 1))
                }
            }
            return r
        }
    },
    Vy = {
        name: "hash",
        lookup(s) {
            let {
                lookupHash: i,
                lookupFromHashIndex: r
            } = s, o;
            if (typeof window < "u") {
                const {
                    hash: c
                } = window.location;
                if (c && c.length > 2) {
                    const f = c.substring(1);
                    if (i) {
                        const d = f.split("&");
                        for (let g = 0; g < d.length; g++) {
                            const p = d[g].indexOf("=");
                            p > 0 && d[g].substring(0, p) === i && (o = d[g].substring(p + 1))
                        }
                    }
                    if (o) return o;
                    if (!o && r > -1) {
                        const d = c.match(/\/([a-zA-Z-]*)/g);
                        return Array.isArray(d) ? d[typeof r == "number" ? r : 0] ? .replace("/", "") : void 0
                    }
                }
            }
            return o
        }
    };
let Ml = null;
const Ih = () => {
    if (Ml !== null) return Ml;
    try {
        if (Ml = typeof window < "u" && window.localStorage !== null, !Ml) return !1;
        const s = "i18next.translate.boo";
        window.localStorage.setItem(s, "foo"), window.localStorage.removeItem(s)
    } catch {
        Ml = !1
    }
    return Ml
};
var ky = {
    name: "localStorage",
    lookup(s) {
        let {
            lookupLocalStorage: i
        } = s;
        if (i && Ih()) return window.localStorage.getItem(i) || void 0
    },
    cacheUserLanguage(s, i) {
        let {
            lookupLocalStorage: r
        } = i;
        r && Ih() && window.localStorage.setItem(r, s)
    }
};
let Ll = null;
const em = () => {
    if (Ll !== null) return Ll;
    try {
        if (Ll = typeof window < "u" && window.sessionStorage !== null, !Ll) return !1;
        const s = "i18next.translate.boo";
        window.sessionStorage.setItem(s, "foo"), window.sessionStorage.removeItem(s)
    } catch {
        Ll = !1
    }
    return Ll
};
var Gy = {
        name: "sessionStorage",
        lookup(s) {
            let {
                lookupSessionStorage: i
            } = s;
            if (i && em()) return window.sessionStorage.getItem(i) || void 0
        },
        cacheUserLanguage(s, i) {
            let {
                lookupSessionStorage: r
            } = i;
            r && em() && window.sessionStorage.setItem(r, s)
        }
    },
    Yy = {
        name: "navigator",
        lookup(s) {
            const i = [];
            if (typeof navigator < "u") {
                const {
                    languages: r,
                    userLanguage: o,
                    language: c
                } = navigator;
                if (r)
                    for (let f = 0; f < r.length; f++) i.push(r[f]);
                o && i.push(o), c && i.push(c)
            }
            return i.length > 0 ? i : void 0
        }
    },
    Qy = {
        name: "htmlTag",
        lookup(s) {
            let {
                htmlTag: i
            } = s, r;
            const o = i || (typeof document < "u" ? document.documentElement : null);
            return o && typeof o.getAttribute == "function" && (r = o.getAttribute("lang")), r
        }
    },
    Xy = {
        name: "path",
        lookup(s) {
            let {
                lookupFromPathIndex: i
            } = s;
            if (typeof window > "u") return;
            const r = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
            return Array.isArray(r) ? r[typeof i == "number" ? i : 0] ? .replace("/", "") : void 0
        }
    },
    Ky = {
        name: "subdomain",
        lookup(s) {
            let {
                lookupFromSubdomainIndex: i
            } = s;
            const r = typeof i == "number" ? i + 1 : 1,
                o = typeof window < "u" && window.location ? .hostname ? .match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i);
            if (o) return o[r]
        }
    };
let Rm = !1;
try {
    document.cookie, Rm = !0
} catch {}
const jm = ["querystring", "cookie", "localStorage", "sessionStorage", "navigator", "htmlTag"];
Rm || jm.splice(1, 1);
const Zy = () => ({
    order: jm,
    lookupQuerystring: "lng",
    lookupCookie: "i18next",
    lookupLocalStorage: "i18nextLng",
    lookupSessionStorage: "i18nextLng",
    caches: ["localStorage"],
    excludeCacheFor: ["cimode"],
    convertDetectedLanguage: s => s
});
class Tm {
    constructor(i) {
        let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        this.type = "languageDetector", this.detectors = {}, this.init(i, r)
    }
    init() {
        let i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
                languageUtils: {}
            },
            r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
            o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        this.services = i, this.options = zy(r, this.options || {}, Zy()), typeof this.options.convertDetectedLanguage == "string" && this.options.convertDetectedLanguage.indexOf("15897") > -1 && (this.options.convertDetectedLanguage = c => c.replace("-", "_")), this.options.lookupFromUrlIndex && (this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex), this.i18nOptions = o, this.addDetector(By), this.addDetector(qy), this.addDetector(ky), this.addDetector(Gy), this.addDetector(Yy), this.addDetector(Qy), this.addDetector(Xy), this.addDetector(Ky), this.addDetector(Vy)
    }
    addDetector(i) {
        return this.detectors[i.name] = i, this
    }
    detect() {
        let i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.options.order,
            r = [];
        return i.forEach(o => {
            if (this.detectors[o]) {
                let c = this.detectors[o].lookup(this.options);
                c && typeof c == "string" && (c = [c]), c && (r = r.concat(c))
            }
        }), r = r.filter(o => o != null && !Uy(o)).map(o => this.options.convertDetectedLanguage(o)), this.services && this.services.languageUtils && this.services.languageUtils.getBestMatchFromCodes ? r : r.length > 0 ? r[0] : null
    }
    cacheUserLanguage(i) {
        let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.options.caches;
        r && (this.options.excludeCacheFor && this.options.excludeCacheFor.indexOf(i) > -1 || r.forEach(o => {
            this.detectors[o] && this.detectors[o].cacheUserLanguage(i, this.options)
        }))
    }
}
Tm.type = "languageDetector";
const tm = Object.assign({}),
    qa = {};
Object.keys(tm).forEach(s => {
    const i = s.match(/\.\/([^/]+)\/([^/]+)\.ts$/);
    if (i) {
        const [, r] = i, o = tm[s];
        qa[r] || (qa[r] = {
            translation: {}
        }), o.default && (qa[r].translation = { ...qa[r].translation,
            ...o.default
        })
    }
});
We.use(Tm).use(My).init({
    lng: "en",
    fallbackLng: "en",
    debug: !1,
    resources: qa,
    interpolation: {
        escapeValue: !1
    }
});
var to = {
        exports: {}
    },
    Ha = {},
    no = {
        exports: {}
    },
    lo = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nm;

function $y() {
    return nm || (nm = 1, (function(s) {
        function i(U, X) {
            var I = U.length;
            U.push(X);
            e: for (; 0 < I;) {
                var ve = I - 1 >>> 1,
                    C = U[ve];
                if (0 < c(C, X)) U[ve] = X, U[I] = C, I = ve;
                else break e
            }
        }

        function r(U) {
            return U.length === 0 ? null : U[0]
        }

        function o(U) {
            if (U.length === 0) return null;
            var X = U[0],
                I = U.pop();
            if (I !== X) {
                U[0] = I;
                e: for (var ve = 0, C = U.length, q = C >>> 1; ve < q;) {
                    var $ = 2 * (ve + 1) - 1,
                        Z = U[$],
                        ee = $ + 1,
                        xe = U[ee];
                    if (0 > c(Z, I)) ee < C && 0 > c(xe, Z) ? (U[ve] = xe, U[ee] = I, ve = ee) : (U[ve] = Z, U[$] = I, ve = $);
                    else if (ee < C && 0 > c(xe, I)) U[ve] = xe, U[ee] = I, ve = ee;
                    else break e
                }
            }
            return X
        }

        function c(U, X) {
            var I = U.sortIndex - X.sortIndex;
            return I !== 0 ? I : U.id - X.id
        }
        if (s.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
            var f = performance;
            s.unstable_now = function() {
                return f.now()
            }
        } else {
            var d = Date,
                g = d.now();
            s.unstable_now = function() {
                return d.now() - g
            }
        }
        var p = [],
            m = [],
            x = 1,
            b = null,
            w = 3,
            S = !1,
            N = !1,
            A = !1,
            _ = !1,
            D = typeof setTimeout == "function" ? setTimeout : null,
            z = typeof clearTimeout == "function" ? clearTimeout : null,
            Y = typeof setImmediate < "u" ? setImmediate : null;

        function P(U) {
            for (var X = r(m); X !== null;) {
                if (X.callback === null) o(m);
                else if (X.startTime <= U) o(m), X.sortIndex = X.expirationTime, i(p, X);
                else break;
                X = r(m)
            }
        }

        function Q(U) {
            if (A = !1, P(U), !N)
                if (r(p) !== null) N = !0, se || (se = !0, F());
                else {
                    var X = r(m);
                    X !== null && me(Q, X.startTime - U)
                }
        }
        var se = !1,
            pe = -1,
            we = 5,
            ye = -1;

        function G() {
            return _ ? !0 : !(s.unstable_now() - ye < we)
        }

        function K() {
            if (_ = !1, se) {
                var U = s.unstable_now();
                ye = U;
                var X = !0;
                try {
                    e: {
                        N = !1,
                        A && (A = !1, z(pe), pe = -1),
                        S = !0;
                        var I = w;
                        try {
                            t: {
                                for (P(U), b = r(p); b !== null && !(b.expirationTime > U && G());) {
                                    var ve = b.callback;
                                    if (typeof ve == "function") {
                                        b.callback = null, w = b.priorityLevel;
                                        var C = ve(b.expirationTime <= U);
                                        if (U = s.unstable_now(), typeof C == "function") {
                                            b.callback = C, P(U), X = !0;
                                            break t
                                        }
                                        b === r(p) && o(p), P(U)
                                    } else o(p);
                                    b = r(p)
                                }
                                if (b !== null) X = !0;
                                else {
                                    var q = r(m);
                                    q !== null && me(Q, q.startTime - U), X = !1
                                }
                            }
                            break e
                        }
                        finally {
                            b = null, w = I, S = !1
                        }
                        X = void 0
                    }
                }
                finally {
                    X ? F() : se = !1
                }
            }
        }
        var F;
        if (typeof Y == "function") F = function() {
            Y(K)
        };
        else if (typeof MessageChannel < "u") {
            var le = new MessageChannel,
                he = le.port2;
            le.port1.onmessage = K, F = function() {
                he.postMessage(null)
            }
        } else F = function() {
            D(K, 0)
        };

        function me(U, X) {
            pe = D(function() {
                U(s.unstable_now())
            }, X)
        }
        s.unstable_IdlePriority = 5, s.unstable_ImmediatePriority = 1, s.unstable_LowPriority = 4, s.unstable_NormalPriority = 3, s.unstable_Profiling = null, s.unstable_UserBlockingPriority = 2, s.unstable_cancelCallback = function(U) {
            U.callback = null
        }, s.unstable_forceFrameRate = function(U) {
            0 > U || 125 < U ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : we = 0 < U ? Math.floor(1e3 / U) : 5
        }, s.unstable_getCurrentPriorityLevel = function() {
            return w
        }, s.unstable_next = function(U) {
            switch (w) {
                case 1:
                case 2:
                case 3:
                    var X = 3;
                    break;
                default:
                    X = w
            }
            var I = w;
            w = X;
            try {
                return U()
            } finally {
                w = I
            }
        }, s.unstable_requestPaint = function() {
            _ = !0
        }, s.unstable_runWithPriority = function(U, X) {
            switch (U) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    U = 3
            }
            var I = w;
            w = U;
            try {
                return X()
            } finally {
                w = I
            }
        }, s.unstable_scheduleCallback = function(U, X, I) {
            var ve = s.unstable_now();
            switch (typeof I == "object" && I !== null ? (I = I.delay, I = typeof I == "number" && 0 < I ? ve + I : ve) : I = ve, U) {
                case 1:
                    var C = -1;
                    break;
                case 2:
                    C = 250;
                    break;
                case 5:
                    C = 1073741823;
                    break;
                case 4:
                    C = 1e4;
                    break;
                default:
                    C = 5e3
            }
            return C = I + C, U = {
                id: x++,
                callback: X,
                priorityLevel: U,
                startTime: I,
                expirationTime: C,
                sortIndex: -1
            }, I > ve ? (U.sortIndex = I, i(m, U), r(p) === null && U === r(m) && (A ? (z(pe), pe = -1) : A = !0, me(Q, I - ve))) : (U.sortIndex = C, i(p, U), N || S || (N = !0, se || (se = !0, F()))), U
        }, s.unstable_shouldYield = G, s.unstable_wrapCallback = function(U) {
            var X = w;
            return function() {
                var I = w;
                w = X;
                try {
                    return U.apply(this, arguments)
                } finally {
                    w = I
                }
            }
        }
    })(lo)), lo
}
var lm;

function Jy() {
    return lm || (lm = 1, no.exports = $y()), no.exports
}
var ao = {
        exports: {}
    },
    Pe = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var am;

function Fy() {
    if (am) return Pe;
    am = 1;
    var s = po();

    function i(p) {
        var m = "https://react.dev/errors/" + p;
        if (1 < arguments.length) {
            m += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var x = 2; x < arguments.length; x++) m += "&args[]=" + encodeURIComponent(arguments[x])
        }
        return "Minified React error #" + p + "; visit " + m + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }

    function r() {}
    var o = {
            d: {
                f: r,
                r: function() {
                    throw Error(i(522))
                },
                D: r,
                C: r,
                L: r,
                m: r,
                X: r,
                S: r,
                M: r
            },
            p: 0,
            findDOMNode: null
        },
        c = Symbol.for("react.portal");

    function f(p, m, x) {
        var b = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: c,
            key: b == null ? null : "" + b,
            children: p,
            containerInfo: m,
            implementation: x
        }
    }
    var d = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;

    function g(p, m) {
        if (p === "font") return "";
        if (typeof m == "string") return m === "use-credentials" ? m : ""
    }
    return Pe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o, Pe.createPortal = function(p, m) {
        var x = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!m || m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11) throw Error(i(299));
        return f(p, m, null, x)
    }, Pe.flushSync = function(p) {
        var m = d.T,
            x = o.p;
        try {
            if (d.T = null, o.p = 2, p) return p()
        } finally {
            d.T = m, o.p = x, o.d.f()
        }
    }, Pe.preconnect = function(p, m) {
        typeof p == "string" && (m ? (m = m.crossOrigin, m = typeof m == "string" ? m === "use-credentials" ? m : "" : void 0) : m = null, o.d.C(p, m))
    }, Pe.prefetchDNS = function(p) {
        typeof p == "string" && o.d.D(p)
    }, Pe.preinit = function(p, m) {
        if (typeof p == "string" && m && typeof m.as == "string") {
            var x = m.as,
                b = g(x, m.crossOrigin),
                w = typeof m.integrity == "string" ? m.integrity : void 0,
                S = typeof m.fetchPriority == "string" ? m.fetchPriority : void 0;
            x === "style" ? o.d.S(p, typeof m.precedence == "string" ? m.precedence : void 0, {
                crossOrigin: b,
                integrity: w,
                fetchPriority: S
            }) : x === "script" && o.d.X(p, {
                crossOrigin: b,
                integrity: w,
                fetchPriority: S,
                nonce: typeof m.nonce == "string" ? m.nonce : void 0
            })
        }
    }, Pe.preinitModule = function(p, m) {
        if (typeof p == "string")
            if (typeof m == "object" && m !== null) {
                if (m.as == null || m.as === "script") {
                    var x = g(m.as, m.crossOrigin);
                    o.d.M(p, {
                        crossOrigin: x,
                        integrity: typeof m.integrity == "string" ? m.integrity : void 0,
                        nonce: typeof m.nonce == "string" ? m.nonce : void 0
                    })
                }
            } else m == null && o.d.M(p)
    }, Pe.preload = function(p, m) {
        if (typeof p == "string" && typeof m == "object" && m !== null && typeof m.as == "string") {
            var x = m.as,
                b = g(x, m.crossOrigin);
            o.d.L(p, x, {
                crossOrigin: b,
                integrity: typeof m.integrity == "string" ? m.integrity : void 0,
                nonce: typeof m.nonce == "string" ? m.nonce : void 0,
                type: typeof m.type == "string" ? m.type : void 0,
                fetchPriority: typeof m.fetchPriority == "string" ? m.fetchPriority : void 0,
                referrerPolicy: typeof m.referrerPolicy == "string" ? m.referrerPolicy : void 0,
                imageSrcSet: typeof m.imageSrcSet == "string" ? m.imageSrcSet : void 0,
                imageSizes: typeof m.imageSizes == "string" ? m.imageSizes : void 0,
                media: typeof m.media == "string" ? m.media : void 0
            })
        }
    }, Pe.preloadModule = function(p, m) {
        if (typeof p == "string")
            if (m) {
                var x = g(m.as, m.crossOrigin);
                o.d.m(p, {
                    as: typeof m.as == "string" && m.as !== "script" ? m.as : void 0,
                    crossOrigin: x,
                    integrity: typeof m.integrity == "string" ? m.integrity : void 0
                })
            } else o.d.m(p)
    }, Pe.requestFormReset = function(p) {
        o.d.r(p)
    }, Pe.unstable_batchedUpdates = function(p, m) {
        return p(m)
    }, Pe.useFormState = function(p, m, x) {
        return d.H.useFormState(p, m, x)
    }, Pe.useFormStatus = function() {
        return d.H.useHostTransitionStatus()
    }, Pe.version = "19.1.1", Pe
}
var im;

function Py() {
    if (im) return ao.exports;
    im = 1;

    function s() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)
        } catch (i) {
            console.error(i)
        }
    }
    return s(), ao.exports = Fy(), ao.exports
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rm;

function Wy() {
    if (rm) return Ha;
    rm = 1;
    var s = Jy(),
        i = po(),
        r = Py();

    function o(e) {
        var t = "https://react.dev/errors/" + e;
        if (1 < arguments.length) {
            t += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var n = 2; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n])
        }
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }

    function c(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
    }

    function f(e) {
        var t = e,
            n = e;
        if (e.alternate)
            for (; t.return;) t = t.return;
        else {
            e = t;
            do t = e, (t.flags & 4098) !== 0 && (n = t.return), e = t.return; while (e)
        }
        return t.tag === 3 ? n : null
    }

    function d(e) {
        if (e.tag === 13) {
            var t = e.memoizedState;
            if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
        }
        return null
    }

    function g(e) {
        if (f(e) !== e) throw Error(o(188))
    }

    function p(e) {
        var t = e.alternate;
        if (!t) {
            if (t = f(e), t === null) throw Error(o(188));
            return t !== e ? null : e
        }
        for (var n = e, l = t;;) {
            var a = n.return;
            if (a === null) break;
            var u = a.alternate;
            if (u === null) {
                if (l = a.return, l !== null) {
                    n = l;
                    continue
                }
                break
            }
            if (a.child === u.child) {
                for (u = a.child; u;) {
                    if (u === n) return g(a), e;
                    if (u === l) return g(a), t;
                    u = u.sibling
                }
                throw Error(o(188))
            }
            if (n.return !== l.return) n = a, l = u;
            else {
                for (var h = !1, v = a.child; v;) {
                    if (v === n) {
                        h = !0, n = a, l = u;
                        break
                    }
                    if (v === l) {
                        h = !0, l = a, n = u;
                        break
                    }
                    v = v.sibling
                }
                if (!h) {
                    for (v = u.child; v;) {
                        if (v === n) {
                            h = !0, n = u, l = a;
                            break
                        }
                        if (v === l) {
                            h = !0, l = u, n = a;
                            break
                        }
                        v = v.sibling
                    }
                    if (!h) throw Error(o(189))
                }
            }
            if (n.alternate !== l) throw Error(o(190))
        }
        if (n.tag !== 3) throw Error(o(188));
        return n.stateNode.current === n ? e : t
    }

    function m(e) {
        var t = e.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6) return e;
        for (e = e.child; e !== null;) {
            if (t = m(e), t !== null) return t;
            e = e.sibling
        }
        return null
    }
    var x = Object.assign,
        b = Symbol.for("react.element"),
        w = Symbol.for("react.transitional.element"),
        S = Symbol.for("react.portal"),
        N = Symbol.for("react.fragment"),
        A = Symbol.for("react.strict_mode"),
        _ = Symbol.for("react.profiler"),
        D = Symbol.for("react.provider"),
        z = Symbol.for("react.consumer"),
        Y = Symbol.for("react.context"),
        P = Symbol.for("react.forward_ref"),
        Q = Symbol.for("react.suspense"),
        se = Symbol.for("react.suspense_list"),
        pe = Symbol.for("react.memo"),
        we = Symbol.for("react.lazy"),
        ye = Symbol.for("react.activity"),
        G = Symbol.for("react.memo_cache_sentinel"),
        K = Symbol.iterator;

    function F(e) {
        return e === null || typeof e != "object" ? null : (e = K && e[K] || e["@@iterator"], typeof e == "function" ? e : null)
    }
    var le = Symbol.for("react.client.reference");

    function he(e) {
        if (e == null) return null;
        if (typeof e == "function") return e.$$typeof === le ? null : e.displayName || e.name || null;
        if (typeof e == "string") return e;
        switch (e) {
            case N:
                return "Fragment";
            case _:
                return "Profiler";
            case A:
                return "StrictMode";
            case Q:
                return "Suspense";
            case se:
                return "SuspenseList";
            case ye:
                return "Activity"
        }
        if (typeof e == "object") switch (e.$$typeof) {
            case S:
                return "Portal";
            case Y:
                return (e.displayName || "Context") + ".Provider";
            case z:
                return (e._context.displayName || "Context") + ".Consumer";
            case P:
                var t = e.render;
                return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
            case pe:
                return t = e.displayName || null, t !== null ? t : he(e.type) || "Memo";
            case we:
                t = e._payload, e = e._init;
                try {
                    return he(e(t))
                } catch {}
        }
        return null
    }
    var me = Array.isArray,
        U = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        X = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        I = {
            pending: !1,
            data: null,
            method: null,
            action: null
        },
        ve = [],
        C = -1;

    function q(e) {
        return {
            current: e
        }
    }

    function $(e) {
        0 > C || (e.current = ve[C], ve[C] = null, C--)
    }

    function Z(e, t) {
        C++, ve[C] = e.current, e.current = t
    }
    var ee = q(null),
        xe = q(null),
        re = q(null),
        it = q(null);

    function Oe(e, t) {
        switch (Z(re, t), Z(xe, e), Z(ee, null), t.nodeType) {
            case 9:
            case 11:
                e = (e = t.documentElement) && (e = e.namespaceURI) ? Yd(e) : 0;
                break;
            default:
                if (e = t.tagName, t = t.namespaceURI) t = Yd(t), e = Qd(t, e);
                else switch (e) {
                    case "svg":
                        e = 1;
                        break;
                    case "math":
                        e = 2;
                        break;
                    default:
                        e = 0
                }
        }
        $(ee), Z(ee, e)
    }

    function tn() {
        $(ee), $(xe), $(re)
    }

    function _r(e) {
        e.memoizedState !== null && Z(it, e);
        var t = ee.current,
            n = Qd(t, e.type);
        t !== n && (Z(xe, e), Z(ee, n))
    }

    function Za(e) {
        xe.current === e && ($(ee), $(xe)), it.current === e && ($(it), ja._currentValue = I)
    }
    var Rr = Object.prototype.hasOwnProperty,
        jr = s.unstable_scheduleCallback,
        Tr = s.unstable_cancelCallback,
        Pm = s.unstable_shouldYield,
        Wm = s.unstable_requestPaint,
        jt = s.unstable_now,
        Im = s.unstable_getCurrentPriorityLevel,
        wo = s.unstable_ImmediatePriority,
        Eo = s.unstable_UserBlockingPriority,
        $a = s.unstable_NormalPriority,
        eg = s.unstable_LowPriority,
        No = s.unstable_IdlePriority,
        tg = s.log,
        ng = s.unstable_setDisableYieldValue,
        Ul = null,
        rt = null;

    function nn(e) {
        if (typeof tg == "function" && ng(e), rt && typeof rt.setStrictMode == "function") try {
            rt.setStrictMode(Ul, e)
        } catch {}
    }
    var st = Math.clz32 ? Math.clz32 : ig,
        lg = Math.log,
        ag = Math.LN2;

    function ig(e) {
        return e >>>= 0, e === 0 ? 32 : 31 - (lg(e) / ag | 0) | 0
    }
    var Ja = 256,
        Fa = 4194304;

    function Rn(e) {
        var t = e & 42;
        if (t !== 0) return t;
        switch (e & -e) {
            case 1:
                return 1;
            case 2:
                return 2;
            case 4:
                return 4;
            case 8:
                return 8;
            case 16:
                return 16;
            case 32:
                return 32;
            case 64:
                return 64;
            case 128:
                return 128;
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return e & 4194048;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                return e & 62914560;
            case 67108864:
                return 67108864;
            case 134217728:
                return 134217728;
            case 268435456:
                return 268435456;
            case 536870912:
                return 536870912;
            case 1073741824:
                return 0;
            default:
                return e
        }
    }

    function Pa(e, t, n) {
        var l = e.pendingLanes;
        if (l === 0) return 0;
        var a = 0,
            u = e.suspendedLanes,
            h = e.pingedLanes;
        e = e.warmLanes;
        var v = l & 134217727;
        return v !== 0 ? (l = v & ~u, l !== 0 ? a = Rn(l) : (h &= v, h !== 0 ? a = Rn(h) : n || (n = v & ~e, n !== 0 && (a = Rn(n))))) : (v = l & ~u, v !== 0 ? a = Rn(v) : h !== 0 ? a = Rn(h) : n || (n = l & ~e, n !== 0 && (a = Rn(n)))), a === 0 ? 0 : t !== 0 && t !== a && (t & u) === 0 && (u = a & -a, n = t & -t, u >= n || u === 32 && (n & 4194048) !== 0) ? t : a
    }

    function Hl(e, t) {
        return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0
    }

    function rg(e, t) {
        switch (e) {
            case 1:
            case 2:
            case 4:
            case 8:
            case 64:
                return t + 250;
            case 16:
            case 32:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return t + 5e3;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                return -1;
            case 67108864:
            case 134217728:
            case 268435456:
            case 536870912:
            case 1073741824:
                return -1;
            default:
                return -1
        }
    }

    function Co() {
        var e = Ja;
        return Ja <<= 1, (Ja & 4194048) === 0 && (Ja = 256), e
    }

    function _o() {
        var e = Fa;
        return Fa <<= 1, (Fa & 62914560) === 0 && (Fa = 4194304), e
    }

    function Or(e) {
        for (var t = [], n = 0; 31 > n; n++) t.push(e);
        return t
    }

    function Bl(e, t) {
        e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0)
    }

    function sg(e, t, n, l, a, u) {
        var h = e.pendingLanes;
        e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
        var v = e.entanglements,
            E = e.expirationTimes,
            O = e.hiddenUpdates;
        for (n = h & ~n; 0 < n;) {
            var H = 31 - st(n),
                k = 1 << H;
            v[H] = 0, E[H] = -1;
            var M = O[H];
            if (M !== null)
                for (O[H] = null, H = 0; H < M.length; H++) {
                    var L = M[H];
                    L !== null && (L.lane &= -536870913)
                }
            n &= ~k
        }
        l !== 0 && Ro(e, l, 0), u !== 0 && a === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(h & ~t))
    }

    function Ro(e, t, n) {
        e.pendingLanes |= t, e.suspendedLanes &= ~t;
        var l = 31 - st(t);
        e.entangledLanes |= t, e.entanglements[l] = e.entanglements[l] | 1073741824 | n & 4194090
    }

    function jo(e, t) {
        var n = e.entangledLanes |= t;
        for (e = e.entanglements; n;) {
            var l = 31 - st(n),
                a = 1 << l;
            a & t | e[l] & t && (e[l] |= t), n &= ~a
        }
    }

    function Ar(e) {
        switch (e) {
            case 2:
                e = 1;
                break;
            case 8:
                e = 4;
                break;
            case 32:
                e = 16;
                break;
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                e = 128;
                break;
            case 268435456:
                e = 134217728;
                break;
            default:
                e = 0
        }
        return e
    }

    function Mr(e) {
        return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2
    }

    function To() {
        var e = X.p;
        return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : oh(e.type))
    }

    function ug(e, t) {
        var n = X.p;
        try {
            return X.p = e, t()
        } finally {
            X.p = n
        }
    }
    var ln = Math.random().toString(36).slice(2),
        Je = "__reactFiber$" + ln,
        et = "__reactProps$" + ln,
        Kn = "__reactContainer$" + ln,
        Lr = "__reactEvents$" + ln,
        og = "__reactListeners$" + ln,
        cg = "__reactHandles$" + ln,
        Oo = "__reactResources$" + ln,
        ql = "__reactMarker$" + ln;

    function Dr(e) {
        delete e[Je], delete e[et], delete e[Lr], delete e[og], delete e[cg]
    }

    function Zn(e) {
        var t = e[Je];
        if (t) return t;
        for (var n = e.parentNode; n;) {
            if (t = n[Kn] || n[Je]) {
                if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
                    for (e = $d(e); e !== null;) {
                        if (n = e[Je]) return n;
                        e = $d(e)
                    }
                return t
            }
            e = n, n = e.parentNode
        }
        return null
    }

    function $n(e) {
        if (e = e[Je] || e[Kn]) {
            var t = e.tag;
            if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3) return e
        }
        return null
    }

    function Vl(e) {
        var t = e.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
        throw Error(o(33))
    }

    function Jn(e) {
        var t = e[Oo];
        return t || (t = e[Oo] = {
            hoistableStyles: new Map,
            hoistableScripts: new Map
        }), t
    }

    function Ge(e) {
        e[ql] = !0
    }
    var Ao = new Set,
        Mo = {};

    function jn(e, t) {
        Fn(e, t), Fn(e + "Capture", t)
    }

    function Fn(e, t) {
        for (Mo[e] = t, e = 0; e < t.length; e++) Ao.add(t[e])
    }
    var fg = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),
        Lo = {},
        Do = {};

    function dg(e) {
        return Rr.call(Do, e) ? !0 : Rr.call(Lo, e) ? !1 : fg.test(e) ? Do[e] = !0 : (Lo[e] = !0, !1)
    }

    function Wa(e, t, n) {
        if (dg(t))
            if (n === null) e.removeAttribute(t);
            else {
                switch (typeof n) {
                    case "undefined":
                    case "function":
                    case "symbol":
                        e.removeAttribute(t);
                        return;
                    case "boolean":
                        var l = t.toLowerCase().slice(0, 5);
                        if (l !== "data-" && l !== "aria-") {
                            e.removeAttribute(t);
                            return
                        }
                }
                e.setAttribute(t, "" + n)
            }
    }

    function Ia(e, t, n) {
        if (n === null) e.removeAttribute(t);
        else {
            switch (typeof n) {
                case "undefined":
                case "function":
                case "symbol":
                case "boolean":
                    e.removeAttribute(t);
                    return
            }
            e.setAttribute(t, "" + n)
        }
    }

    function Ht(e, t, n, l) {
        if (l === null) e.removeAttribute(n);
        else {
            switch (typeof l) {
                case "undefined":
                case "function":
                case "symbol":
                case "boolean":
                    e.removeAttribute(n);
                    return
            }
            e.setAttributeNS(t, n, "" + l)
        }
    }
    var zr, zo;

    function Pn(e) {
        if (zr === void 0) try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            zr = t && t[1] || "", zo = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : ""
        }
        return `
` + zr + e + zo
    }
    var Ur = !1;

    function Hr(e, t) {
        if (!e || Ur) return "";
        Ur = !0;
        var n = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            var l = {
                DetermineComponentFrameRoot: function() {
                    try {
                        if (t) {
                            var k = function() {
                                throw Error()
                            };
                            if (Object.defineProperty(k.prototype, "props", {
                                    set: function() {
                                        throw Error()
                                    }
                                }), typeof Reflect == "object" && Reflect.construct) {
                                try {
                                    Reflect.construct(k, [])
                                } catch (L) {
                                    var M = L
                                }
                                Reflect.construct(e, [], k)
                            } else {
                                try {
                                    k.call()
                                } catch (L) {
                                    M = L
                                }
                                e.call(k.prototype)
                            }
                        } else {
                            try {
                                throw Error()
                            } catch (L) {
                                M = L
                            }(k = e()) && typeof k.catch == "function" && k.catch(function() {})
                        }
                    } catch (L) {
                        if (L && M && typeof L.stack == "string") return [L.stack, M.stack]
                    }
                    return [null, null]
                }
            };
            l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var a = Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot, "name");
            a && a.configurable && Object.defineProperty(l.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot"
            });
            var u = l.DetermineComponentFrameRoot(),
                h = u[0],
                v = u[1];
            if (h && v) {
                var E = h.split(`
`),
                    O = v.split(`
`);
                for (a = l = 0; l < E.length && !E[l].includes("DetermineComponentFrameRoot");) l++;
                for (; a < O.length && !O[a].includes("DetermineComponentFrameRoot");) a++;
                if (l === E.length || a === O.length)
                    for (l = E.length - 1, a = O.length - 1; 1 <= l && 0 <= a && E[l] !== O[a];) a--;
                for (; 1 <= l && 0 <= a; l--, a--)
                    if (E[l] !== O[a]) {
                        if (l !== 1 || a !== 1)
                            do
                                if (l--, a--, 0 > a || E[l] !== O[a]) {
                                    var H = `
` + E[l].replace(" at new ", " at ");
                                    return e.displayName && H.includes("<anonymous>") && (H = H.replace("<anonymous>", e.displayName)), H
                                }
                        while (1 <= l && 0 <= a);
                        break
                    }
            }
        } finally {
            Ur = !1, Error.prepareStackTrace = n
        }
        return (n = e ? e.displayName || e.name : "") ? Pn(n) : ""
    }

    function hg(e) {
        switch (e.tag) {
            case 26:
            case 27:
            case 5:
                return Pn(e.type);
            case 16:
                return Pn("Lazy");
            case 13:
                return Pn("Suspense");
            case 19:
                return Pn("SuspenseList");
            case 0:
            case 15:
                return Hr(e.type, !1);
            case 11:
                return Hr(e.type.render, !1);
            case 1:
                return Hr(e.type, !0);
            case 31:
                return Pn("Activity");
            default:
                return ""
        }
    }

    function Uo(e) {
        try {
            var t = "";
            do t += hg(e), e = e.return; while (e);
            return t
        } catch (n) {
            return `
Error generating stack: ` + n.message + `
` + n.stack
        }
    }

    function gt(e) {
        switch (typeof e) {
            case "bigint":
            case "boolean":
            case "number":
            case "string":
            case "undefined":
                return e;
            case "object":
                return e;
            default:
                return ""
        }
    }

    function Ho(e) {
        var t = e.type;
        return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
    }

    function mg(e) {
        var t = Ho(e) ? "checked" : "value",
            n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
            l = "" + e[t];
        if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
            var a = n.get,
                u = n.set;
            return Object.defineProperty(e, t, {
                configurable: !0,
                get: function() {
                    return a.call(this)
                },
                set: function(h) {
                    l = "" + h, u.call(this, h)
                }
            }), Object.defineProperty(e, t, {
                enumerable: n.enumerable
            }), {
                getValue: function() {
                    return l
                },
                setValue: function(h) {
                    l = "" + h
                },
                stopTracking: function() {
                    e._valueTracker = null, delete e[t]
                }
            }
        }
    }

    function ei(e) {
        e._valueTracker || (e._valueTracker = mg(e))
    }

    function Bo(e) {
        if (!e) return !1;
        var t = e._valueTracker;
        if (!t) return !0;
        var n = t.getValue(),
            l = "";
        return e && (l = Ho(e) ? e.checked ? "true" : "false" : e.value), e = l, e !== n ? (t.setValue(e), !0) : !1
    }

    function ti(e) {
        if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
        try {
            return e.activeElement || e.body
        } catch {
            return e.body
        }
    }
    var gg = /[\n"\\]/g;

    function pt(e) {
        return e.replace(gg, function(t) {
            return "\\" + t.charCodeAt(0).toString(16) + " "
        })
    }

    function Br(e, t, n, l, a, u, h, v) {
        e.name = "", h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" ? e.type = h : e.removeAttribute("type"), t != null ? h === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + gt(t)) : e.value !== "" + gt(t) && (e.value = "" + gt(t)) : h !== "submit" && h !== "reset" || e.removeAttribute("value"), t != null ? qr(e, h, gt(t)) : n != null ? qr(e, h, gt(n)) : l != null && e.removeAttribute("value"), a == null && u != null && (e.defaultChecked = !!u), a != null && (e.checked = a && typeof a != "function" && typeof a != "symbol"), v != null && typeof v != "function" && typeof v != "symbol" && typeof v != "boolean" ? e.name = "" + gt(v) : e.removeAttribute("name")
    }

    function qo(e, t, n, l, a, u, h, v) {
        if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (e.type = u), t != null || n != null) {
            if (!(u !== "submit" && u !== "reset" || t != null)) return;
            n = n != null ? "" + gt(n) : "", t = t != null ? "" + gt(t) : n, v || t === e.value || (e.value = t), e.defaultValue = t
        }
        l = l ? ? a, l = typeof l != "function" && typeof l != "symbol" && !!l, e.checked = v ? e.checked : !!l, e.defaultChecked = !!l, h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" && (e.name = h)
    }

    function qr(e, t, n) {
        t === "number" && ti(e.ownerDocument) === e || e.defaultValue === "" + n || (e.defaultValue = "" + n)
    }

    function Wn(e, t, n, l) {
        if (e = e.options, t) {
            t = {};
            for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
            for (n = 0; n < e.length; n++) a = t.hasOwnProperty("$" + e[n].value), e[n].selected !== a && (e[n].selected = a), a && l && (e[n].defaultSelected = !0)
        } else {
            for (n = "" + gt(n), t = null, a = 0; a < e.length; a++) {
                if (e[a].value === n) {
                    e[a].selected = !0, l && (e[a].defaultSelected = !0);
                    return
                }
                t !== null || e[a].disabled || (t = e[a])
            }
            t !== null && (t.selected = !0)
        }
    }

    function Vo(e, t, n) {
        if (t != null && (t = "" + gt(t), t !== e.value && (e.value = t), n == null)) {
            e.defaultValue !== t && (e.defaultValue = t);
            return
        }
        e.defaultValue = n != null ? "" + gt(n) : ""
    }

    function ko(e, t, n, l) {
        if (t == null) {
            if (l != null) {
                if (n != null) throw Error(o(92));
                if (me(l)) {
                    if (1 < l.length) throw Error(o(93));
                    l = l[0]
                }
                n = l
            }
            n == null && (n = ""), t = n
        }
        n = gt(t), e.defaultValue = n, l = e.textContent, l === n && l !== "" && l !== null && (e.value = l)
    }

    function In(e, t) {
        if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && n.nodeType === 3) {
                n.nodeValue = t;
                return
            }
        }
        e.textContent = t
    }
    var pg = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));

    function Go(e, t, n) {
        var l = t.indexOf("--") === 0;
        n == null || typeof n == "boolean" || n === "" ? l ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : l ? e.setProperty(t, n) : typeof n != "number" || n === 0 || pg.has(t) ? t === "float" ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px"
    }

    function Yo(e, t, n) {
        if (t != null && typeof t != "object") throw Error(o(62));
        if (e = e.style, n != null) {
            for (var l in n) !n.hasOwnProperty(l) || t != null && t.hasOwnProperty(l) || (l.indexOf("--") === 0 ? e.setProperty(l, "") : l === "float" ? e.cssFloat = "" : e[l] = "");
            for (var a in t) l = t[a], t.hasOwnProperty(a) && n[a] !== l && Go(e, a, l)
        } else
            for (var u in t) t.hasOwnProperty(u) && Go(e, u, t[u])
    }

    function Vr(e) {
        if (e.indexOf("-") === -1) return !1;
        switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
                return !1;
            default:
                return !0
        }
    }
    var yg = new Map([
            ["acceptCharset", "accept-charset"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
            ["crossOrigin", "crossorigin"],
            ["accentHeight", "accent-height"],
            ["alignmentBaseline", "alignment-baseline"],
            ["arabicForm", "arabic-form"],
            ["baselineShift", "baseline-shift"],
            ["capHeight", "cap-height"],
            ["clipPath", "clip-path"],
            ["clipRule", "clip-rule"],
            ["colorInterpolation", "color-interpolation"],
            ["colorInterpolationFilters", "color-interpolation-filters"],
            ["colorProfile", "color-profile"],
            ["colorRendering", "color-rendering"],
            ["dominantBaseline", "dominant-baseline"],
            ["enableBackground", "enable-background"],
            ["fillOpacity", "fill-opacity"],
            ["fillRule", "fill-rule"],
            ["floodColor", "flood-color"],
            ["floodOpacity", "flood-opacity"],
            ["fontFamily", "font-family"],
            ["fontSize", "font-size"],
            ["fontSizeAdjust", "font-size-adjust"],
            ["fontStretch", "font-stretch"],
            ["fontStyle", "font-style"],
            ["fontVariant", "font-variant"],
            ["fontWeight", "font-weight"],
            ["glyphName", "glyph-name"],
            ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
            ["glyphOrientationVertical", "glyph-orientation-vertical"],
            ["horizAdvX", "horiz-adv-x"],
            ["horizOriginX", "horiz-origin-x"],
            ["imageRendering", "image-rendering"],
            ["letterSpacing", "letter-spacing"],
            ["lightingColor", "lighting-color"],
            ["markerEnd", "marker-end"],
            ["markerMid", "marker-mid"],
            ["markerStart", "marker-start"],
            ["overlinePosition", "overline-position"],
            ["overlineThickness", "overline-thickness"],
            ["paintOrder", "paint-order"],
            ["panose-1", "panose-1"],
            ["pointerEvents", "pointer-events"],
            ["renderingIntent", "rendering-intent"],
            ["shapeRendering", "shape-rendering"],
            ["stopColor", "stop-color"],
            ["stopOpacity", "stop-opacity"],
            ["strikethroughPosition", "strikethrough-position"],
            ["strikethroughThickness", "strikethrough-thickness"],
            ["strokeDasharray", "stroke-dasharray"],
            ["strokeDashoffset", "stroke-dashoffset"],
            ["strokeLinecap", "stroke-linecap"],
            ["strokeLinejoin", "stroke-linejoin"],
            ["strokeMiterlimit", "stroke-miterlimit"],
            ["strokeOpacity", "stroke-opacity"],
            ["strokeWidth", "stroke-width"],
            ["textAnchor", "text-anchor"],
            ["textDecoration", "text-decoration"],
            ["textRendering", "text-rendering"],
            ["transformOrigin", "transform-origin"],
            ["underlinePosition", "underline-position"],
            ["underlineThickness", "underline-thickness"],
            ["unicodeBidi", "unicode-bidi"],
            ["unicodeRange", "unicode-range"],
            ["unitsPerEm", "units-per-em"],
            ["vAlphabetic", "v-alphabetic"],
            ["vHanging", "v-hanging"],
            ["vIdeographic", "v-ideographic"],
            ["vMathematical", "v-mathematical"],
            ["vectorEffect", "vector-effect"],
            ["vertAdvY", "vert-adv-y"],
            ["vertOriginX", "vert-origin-x"],
            ["vertOriginY", "vert-origin-y"],
            ["wordSpacing", "word-spacing"],
            ["writingMode", "writing-mode"],
            ["xmlnsXlink", "xmlns:xlink"],
            ["xHeight", "x-height"]
        ]),
        vg = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;

    function ni(e) {
        return vg.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e
    }
    var kr = null;

    function Gr(e) {
        return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
    }
    var el = null,
        tl = null;

    function Qo(e) {
        var t = $n(e);
        if (t && (e = t.stateNode)) {
            var n = e[et] || null;
            e: switch (e = t.stateNode, t.type) {
                case "input":
                    if (Br(e, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name), t = n.name, n.type === "radio" && t != null) {
                        for (n = e; n.parentNode;) n = n.parentNode;
                        for (n = n.querySelectorAll('input[name="' + pt("" + t) + '"][type="radio"]'), t = 0; t < n.length; t++) {
                            var l = n[t];
                            if (l !== e && l.form === e.form) {
                                var a = l[et] || null;
                                if (!a) throw Error(o(90));
                                Br(l, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name)
                            }
                        }
                        for (t = 0; t < n.length; t++) l = n[t], l.form === e.form && Bo(l)
                    }
                    break e;
                case "textarea":
                    Vo(e, n.value, n.defaultValue);
                    break e;
                case "select":
                    t = n.value, t != null && Wn(e, !!n.multiple, t, !1)
            }
        }
    }
    var Yr = !1;

    function Xo(e, t, n) {
        if (Yr) return e(t, n);
        Yr = !0;
        try {
            var l = e(t);
            return l
        } finally {
            if (Yr = !1, (el !== null || tl !== null) && (ki(), el && (t = el, e = tl, tl = el = null, Qo(t), e)))
                for (t = 0; t < e.length; t++) Qo(e[t])
        }
    }

    function kl(e, t) {
        var n = e.stateNode;
        if (n === null) return null;
        var l = n[et] || null;
        if (l === null) return null;
        n = l[t];
        e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
                (l = !l.disabled) || (e = e.type, l = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !l;
                break e;
            default:
                e = !1
        }
        if (e) return null;
        if (n && typeof n != "function") throw Error(o(231, t, typeof n));
        return n
    }
    var Bt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
        Qr = !1;
    if (Bt) try {
        var Gl = {};
        Object.defineProperty(Gl, "passive", {
            get: function() {
                Qr = !0
            }
        }), window.addEventListener("test", Gl, Gl), window.removeEventListener("test", Gl, Gl)
    } catch {
        Qr = !1
    }
    var an = null,
        Xr = null,
        li = null;

    function Ko() {
        if (li) return li;
        var e, t = Xr,
            n = t.length,
            l, a = "value" in an ? an.value : an.textContent,
            u = a.length;
        for (e = 0; e < n && t[e] === a[e]; e++);
        var h = n - e;
        for (l = 1; l <= h && t[n - l] === a[u - l]; l++);
        return li = a.slice(e, 1 < l ? 1 - l : void 0)
    }

    function ai(e) {
        var t = e.keyCode;
        return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
    }

    function ii() {
        return !0
    }

    function Zo() {
        return !1
    }

    function tt(e) {
        function t(n, l, a, u, h) {
            this._reactName = n, this._targetInst = a, this.type = l, this.nativeEvent = u, this.target = h, this.currentTarget = null;
            for (var v in e) e.hasOwnProperty(v) && (n = e[v], this[v] = n ? n(u) : u[v]);
            return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? ii : Zo, this.isPropagationStopped = Zo, this
        }
        return x(t.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var n = this.nativeEvent;
                n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = ii)
            },
            stopPropagation: function() {
                var n = this.nativeEvent;
                n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = ii)
            },
            persist: function() {},
            isPersistent: ii
        }), t
    }
    var Tn = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function(e) {
                return e.timeStamp || Date.now()
            },
            defaultPrevented: 0,
            isTrusted: 0
        },
        ri = tt(Tn),
        Yl = x({}, Tn, {
            view: 0,
            detail: 0
        }),
        xg = tt(Yl),
        Kr, Zr, Ql, si = x({}, Yl, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: Jr,
            button: 0,
            buttons: 0,
            relatedTarget: function(e) {
                return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
            },
            movementX: function(e) {
                return "movementX" in e ? e.movementX : (e !== Ql && (Ql && e.type === "mousemove" ? (Kr = e.screenX - Ql.screenX, Zr = e.screenY - Ql.screenY) : Zr = Kr = 0, Ql = e), Kr)
            },
            movementY: function(e) {
                return "movementY" in e ? e.movementY : Zr
            }
        }),
        $o = tt(si),
        bg = x({}, si, {
            dataTransfer: 0
        }),
        Sg = tt(bg),
        wg = x({}, Yl, {
            relatedTarget: 0
        }),
        $r = tt(wg),
        Eg = x({}, Tn, {
            animationName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }),
        Ng = tt(Eg),
        Cg = x({}, Tn, {
            clipboardData: function(e) {
                return "clipboardData" in e ? e.clipboardData : window.clipboardData
            }
        }),
        _g = tt(Cg),
        Rg = x({}, Tn, {
            data: 0
        }),
        Jo = tt(Rg),
        jg = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified"
        },
        Tg = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta"
        },
        Og = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey"
        };

    function Ag(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : (e = Og[e]) ? !!t[e] : !1
    }

    function Jr() {
        return Ag
    }
    var Mg = x({}, Yl, {
            key: function(e) {
                if (e.key) {
                    var t = jg[e.key] || e.key;
                    if (t !== "Unidentified") return t
                }
                return e.type === "keypress" ? (e = ai(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Tg[e.keyCode] || "Unidentified" : ""
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: Jr,
            charCode: function(e) {
                return e.type === "keypress" ? ai(e) : 0
            },
            keyCode: function(e) {
                return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
            },
            which: function(e) {
                return e.type === "keypress" ? ai(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
            }
        }),
        Lg = tt(Mg),
        Dg = x({}, si, {
            pointerId: 0,
            width: 0,
            height: 0,
            pressure: 0,
            tangentialPressure: 0,
            tiltX: 0,
            tiltY: 0,
            twist: 0,
            pointerType: 0,
            isPrimary: 0
        }),
        Fo = tt(Dg),
        zg = x({}, Yl, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: Jr
        }),
        Ug = tt(zg),
        Hg = x({}, Tn, {
            propertyName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }),
        Bg = tt(Hg),
        qg = x({}, si, {
            deltaX: function(e) {
                return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
            },
            deltaY: function(e) {
                return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
            },
            deltaZ: 0,
            deltaMode: 0
        }),
        Vg = tt(qg),
        kg = x({}, Tn, {
            newState: 0,
            oldState: 0
        }),
        Gg = tt(kg),
        Yg = [9, 13, 27, 32],
        Fr = Bt && "CompositionEvent" in window,
        Xl = null;
    Bt && "documentMode" in document && (Xl = document.documentMode);
    var Qg = Bt && "TextEvent" in window && !Xl,
        Po = Bt && (!Fr || Xl && 8 < Xl && 11 >= Xl),
        Wo = " ",
        Io = !1;

    function ec(e, t) {
        switch (e) {
            case "keyup":
                return Yg.indexOf(t.keyCode) !== -1;
            case "keydown":
                return t.keyCode !== 229;
            case "keypress":
            case "mousedown":
            case "focusout":
                return !0;
            default:
                return !1
        }
    }

    function tc(e) {
        return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
    }
    var nl = !1;

    function Xg(e, t) {
        switch (e) {
            case "compositionend":
                return tc(t);
            case "keypress":
                return t.which !== 32 ? null : (Io = !0, Wo);
            case "textInput":
                return e = t.data, e === Wo && Io ? null : e;
            default:
                return null
        }
    }

    function Kg(e, t) {
        if (nl) return e === "compositionend" || !Fr && ec(e, t) ? (e = Ko(), li = Xr = an = null, nl = !1, e) : null;
        switch (e) {
            case "paste":
                return null;
            case "keypress":
                if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                    if (t.char && 1 < t.char.length) return t.char;
                    if (t.which) return String.fromCharCode(t.which)
                }
                return null;
            case "compositionend":
                return Po && t.locale !== "ko" ? null : t.data;
            default:
                return null
        }
    }
    var Zg = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };

    function nc(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t === "input" ? !!Zg[e.type] : t === "textarea"
    }

    function lc(e, t, n, l) {
        el ? tl ? tl.push(l) : tl = [l] : el = l, t = Zi(t, "onChange"), 0 < t.length && (n = new ri("onChange", "change", null, n, l), e.push({
            event: n,
            listeners: t
        }))
    }
    var Kl = null,
        Zl = null;

    function $g(e) {
        Bd(e, 0)
    }

    function ui(e) {
        var t = Vl(e);
        if (Bo(t)) return e
    }

    function ac(e, t) {
        if (e === "change") return t
    }
    var ic = !1;
    if (Bt) {
        var Pr;
        if (Bt) {
            var Wr = "oninput" in document;
            if (!Wr) {
                var rc = document.createElement("div");
                rc.setAttribute("oninput", "return;"), Wr = typeof rc.oninput == "function"
            }
            Pr = Wr
        } else Pr = !1;
        ic = Pr && (!document.documentMode || 9 < document.documentMode)
    }

    function sc() {
        Kl && (Kl.detachEvent("onpropertychange", uc), Zl = Kl = null)
    }

    function uc(e) {
        if (e.propertyName === "value" && ui(Zl)) {
            var t = [];
            lc(t, Zl, e, Gr(e)), Xo($g, t)
        }
    }

    function Jg(e, t, n) {
        e === "focusin" ? (sc(), Kl = t, Zl = n, Kl.attachEvent("onpropertychange", uc)) : e === "focusout" && sc()
    }

    function Fg(e) {
        if (e === "selectionchange" || e === "keyup" || e === "keydown") return ui(Zl)
    }

    function Pg(e, t) {
        if (e === "click") return ui(t)
    }

    function Wg(e, t) {
        if (e === "input" || e === "change") return ui(t)
    }

    function Ig(e, t) {
        return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
    }
    var ut = typeof Object.is == "function" ? Object.is : Ig;

    function $l(e, t) {
        if (ut(e, t)) return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
        var n = Object.keys(e),
            l = Object.keys(t);
        if (n.length !== l.length) return !1;
        for (l = 0; l < n.length; l++) {
            var a = n[l];
            if (!Rr.call(t, a) || !ut(e[a], t[a])) return !1
        }
        return !0
    }

    function oc(e) {
        for (; e && e.firstChild;) e = e.firstChild;
        return e
    }

    function cc(e, t) {
        var n = oc(e);
        e = 0;
        for (var l; n;) {
            if (n.nodeType === 3) {
                if (l = e + n.textContent.length, e <= t && l >= t) return {
                    node: n,
                    offset: t - e
                };
                e = l
            }
            e: {
                for (; n;) {
                    if (n.nextSibling) {
                        n = n.nextSibling;
                        break e
                    }
                    n = n.parentNode
                }
                n = void 0
            }
            n = oc(n)
        }
    }

    function fc(e, t) {
        return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? fc(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
    }

    function dc(e) {
        e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
        for (var t = ti(e.document); t instanceof e.HTMLIFrameElement;) {
            try {
                var n = typeof t.contentWindow.location.href == "string"
            } catch {
                n = !1
            }
            if (n) e = t.contentWindow;
            else break;
            t = ti(e.document)
        }
        return t
    }

    function Ir(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
    }
    var ep = Bt && "documentMode" in document && 11 >= document.documentMode,
        ll = null,
        es = null,
        Jl = null,
        ts = !1;

    function hc(e, t, n) {
        var l = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
        ts || ll == null || ll !== ti(l) || (l = ll, "selectionStart" in l && Ir(l) ? l = {
            start: l.selectionStart,
            end: l.selectionEnd
        } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = {
            anchorNode: l.anchorNode,
            anchorOffset: l.anchorOffset,
            focusNode: l.focusNode,
            focusOffset: l.focusOffset
        }), Jl && $l(Jl, l) || (Jl = l, l = Zi(es, "onSelect"), 0 < l.length && (t = new ri("onSelect", "select", null, t, n), e.push({
            event: t,
            listeners: l
        }), t.target = ll)))
    }

    function On(e, t) {
        var n = {};
        return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
    }
    var al = {
            animationend: On("Animation", "AnimationEnd"),
            animationiteration: On("Animation", "AnimationIteration"),
            animationstart: On("Animation", "AnimationStart"),
            transitionrun: On("Transition", "TransitionRun"),
            transitionstart: On("Transition", "TransitionStart"),
            transitioncancel: On("Transition", "TransitionCancel"),
            transitionend: On("Transition", "TransitionEnd")
        },
        ns = {},
        mc = {};
    Bt && (mc = document.createElement("div").style, "AnimationEvent" in window || (delete al.animationend.animation, delete al.animationiteration.animation, delete al.animationstart.animation), "TransitionEvent" in window || delete al.transitionend.transition);

    function An(e) {
        if (ns[e]) return ns[e];
        if (!al[e]) return e;
        var t = al[e],
            n;
        for (n in t)
            if (t.hasOwnProperty(n) && n in mc) return ns[e] = t[n];
        return e
    }
    var gc = An("animationend"),
        pc = An("animationiteration"),
        yc = An("animationstart"),
        tp = An("transitionrun"),
        np = An("transitionstart"),
        lp = An("transitioncancel"),
        vc = An("transitionend"),
        xc = new Map,
        ls = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    ls.push("scrollEnd");

    function Nt(e, t) {
        xc.set(e, t), jn(t, [e])
    }
    var bc = new WeakMap;

    function yt(e, t) {
        if (typeof e == "object" && e !== null) {
            var n = bc.get(e);
            return n !== void 0 ? n : (t = {
                value: e,
                source: t,
                stack: Uo(t)
            }, bc.set(e, t), t)
        }
        return {
            value: e,
            source: t,
            stack: Uo(t)
        }
    }
    var vt = [],
        il = 0,
        as = 0;

    function oi() {
        for (var e = il, t = as = il = 0; t < e;) {
            var n = vt[t];
            vt[t++] = null;
            var l = vt[t];
            vt[t++] = null;
            var a = vt[t];
            vt[t++] = null;
            var u = vt[t];
            if (vt[t++] = null, l !== null && a !== null) {
                var h = l.pending;
                h === null ? a.next = a : (a.next = h.next, h.next = a), l.pending = a
            }
            u !== 0 && Sc(n, a, u)
        }
    }

    function ci(e, t, n, l) {
        vt[il++] = e, vt[il++] = t, vt[il++] = n, vt[il++] = l, as |= l, e.lanes |= l, e = e.alternate, e !== null && (e.lanes |= l)
    }

    function is(e, t, n, l) {
        return ci(e, t, n, l), fi(e)
    }

    function rl(e, t) {
        return ci(e, null, null, t), fi(e)
    }

    function Sc(e, t, n) {
        e.lanes |= n;
        var l = e.alternate;
        l !== null && (l.lanes |= n);
        for (var a = !1, u = e.return; u !== null;) u.childLanes |= n, l = u.alternate, l !== null && (l.childLanes |= n), u.tag === 22 && (e = u.stateNode, e === null || e._visibility & 1 || (a = !0)), e = u, u = u.return;
        return e.tag === 3 ? (u = e.stateNode, a && t !== null && (a = 31 - st(n), e = u.hiddenUpdates, l = e[a], l === null ? e[a] = [t] : l.push(t), t.lane = n | 536870912), u) : null
    }

    function fi(e) {
        if (50 < ba) throw ba = 0, fu = null, Error(o(185));
        for (var t = e.return; t !== null;) e = t, t = e.return;
        return e.tag === 3 ? e.stateNode : null
    }
    var sl = {};

    function ap(e, t, n, l) {
        this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
    }

    function ot(e, t, n, l) {
        return new ap(e, t, n, l)
    }

    function rs(e) {
        return e = e.prototype, !(!e || !e.isReactComponent)
    }

    function qt(e, t) {
        var n = e.alternate;
        return n === null ? (n = ot(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 65011712, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.refCleanup = e.refCleanup, n
    }

    function wc(e, t) {
        e.flags &= 65011714;
        var n = e.alternate;
        return n === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        }), e
    }

    function di(e, t, n, l, a, u) {
        var h = 0;
        if (l = e, typeof e == "function") rs(e) && (h = 1);
        else if (typeof e == "string") h = r0(e, n, ee.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
        else e: switch (e) {
            case ye:
                return e = ot(31, n, t, a), e.elementType = ye, e.lanes = u, e;
            case N:
                return Mn(n.children, a, u, t);
            case A:
                h = 8, a |= 24;
                break;
            case _:
                return e = ot(12, n, t, a | 2), e.elementType = _, e.lanes = u, e;
            case Q:
                return e = ot(13, n, t, a), e.elementType = Q, e.lanes = u, e;
            case se:
                return e = ot(19, n, t, a), e.elementType = se, e.lanes = u, e;
            default:
                if (typeof e == "object" && e !== null) switch (e.$$typeof) {
                    case D:
                    case Y:
                        h = 10;
                        break e;
                    case z:
                        h = 9;
                        break e;
                    case P:
                        h = 11;
                        break e;
                    case pe:
                        h = 14;
                        break e;
                    case we:
                        h = 16, l = null;
                        break e
                }
                h = 29, n = Error(o(130, e === null ? "null" : typeof e, "")), l = null
        }
        return t = ot(h, n, t, a), t.elementType = e, t.type = l, t.lanes = u, t
    }

    function Mn(e, t, n, l) {
        return e = ot(7, e, l, t), e.lanes = n, e
    }

    function ss(e, t, n) {
        return e = ot(6, e, null, t), e.lanes = n, e
    }

    function us(e, t, n) {
        return t = ot(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        }, t
    }
    var ul = [],
        ol = 0,
        hi = null,
        mi = 0,
        xt = [],
        bt = 0,
        Ln = null,
        Vt = 1,
        kt = "";

    function Dn(e, t) {
        ul[ol++] = mi, ul[ol++] = hi, hi = e, mi = t
    }

    function Ec(e, t, n) {
        xt[bt++] = Vt, xt[bt++] = kt, xt[bt++] = Ln, Ln = e;
        var l = Vt;
        e = kt;
        var a = 32 - st(l) - 1;
        l &= ~(1 << a), n += 1;
        var u = 32 - st(t) + a;
        if (30 < u) {
            var h = a - a % 5;
            u = (l & (1 << h) - 1).toString(32), l >>= h, a -= h, Vt = 1 << 32 - st(t) + a | n << a | l, kt = u + e
        } else Vt = 1 << u | n << a | l, kt = e
    }

    function os(e) {
        e.return !== null && (Dn(e, 1), Ec(e, 1, 0))
    }

    function cs(e) {
        for (; e === hi;) hi = ul[--ol], ul[ol] = null, mi = ul[--ol], ul[ol] = null;
        for (; e === Ln;) Ln = xt[--bt], xt[bt] = null, kt = xt[--bt], xt[bt] = null, Vt = xt[--bt], xt[bt] = null
    }
    var Ie = null,
        Le = null,
        Se = !1,
        zn = null,
        Tt = !1,
        fs = Error(o(519));

    function Un(e) {
        var t = Error(o(418, ""));
        throw Wl(yt(t, e)), fs
    }

    function Nc(e) {
        var t = e.stateNode,
            n = e.type,
            l = e.memoizedProps;
        switch (t[Je] = e, t[et] = l, n) {
            case "dialog":
                de("cancel", t), de("close", t);
                break;
            case "iframe":
            case "object":
            case "embed":
                de("load", t);
                break;
            case "video":
            case "audio":
                for (n = 0; n < wa.length; n++) de(wa[n], t);
                break;
            case "source":
                de("error", t);
                break;
            case "img":
            case "image":
            case "link":
                de("error", t), de("load", t);
                break;
            case "details":
                de("toggle", t);
                break;
            case "input":
                de("invalid", t), qo(t, l.value, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name, !0), ei(t);
                break;
            case "select":
                de("invalid", t);
                break;
            case "textarea":
                de("invalid", t), ko(t, l.value, l.defaultValue, l.children), ei(t)
        }
        n = l.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || l.suppressHydrationWarning === !0 || Gd(t.textContent, n) ? (l.popover != null && (de("beforetoggle", t), de("toggle", t)), l.onScroll != null && de("scroll", t), l.onScrollEnd != null && de("scrollend", t), l.onClick != null && (t.onclick = $i), t = !0) : t = !1, t || Un(e)
    }

    function Cc(e) {
        for (Ie = e.return; Ie;) switch (Ie.tag) {
            case 5:
            case 13:
                Tt = !1;
                return;
            case 27:
            case 3:
                Tt = !0;
                return;
            default:
                Ie = Ie.return
        }
    }

    function Fl(e) {
        if (e !== Ie) return !1;
        if (!Se) return Cc(e), Se = !0, !1;
        var t = e.tag,
            n;
        if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = !(n !== "form" && n !== "button") || Ru(e.type, e.memoizedProps)), n = !n), n && Le && Un(e), Cc(e), t === 13) {
            if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
            e: {
                for (e = e.nextSibling, t = 0; e;) {
                    if (e.nodeType === 8)
                        if (n = e.data, n === "/$") {
                            if (t === 0) {
                                Le = _t(e.nextSibling);
                                break e
                            }
                            t--
                        } else n !== "$" && n !== "$!" && n !== "$?" || t++;
                    e = e.nextSibling
                }
                Le = null
            }
        } else t === 27 ? (t = Le, Sn(e.type) ? (e = Au, Au = null, Le = e) : Le = t) : Le = Ie ? _t(e.stateNode.nextSibling) : null;
        return !0
    }

    function Pl() {
        Le = Ie = null, Se = !1
    }

    function _c() {
        var e = zn;
        return e !== null && (at === null ? at = e : at.push.apply(at, e), zn = null), e
    }

    function Wl(e) {
        zn === null ? zn = [e] : zn.push(e)
    }
    var ds = q(null),
        Hn = null,
        Gt = null;

    function rn(e, t, n) {
        Z(ds, t._currentValue), t._currentValue = n
    }

    function Yt(e) {
        e._currentValue = ds.current, $(ds)
    }

    function hs(e, t, n) {
        for (; e !== null;) {
            var l = e.alternate;
            if ((e.childLanes & t) !== t ? (e.childLanes |= t, l !== null && (l.childLanes |= t)) : l !== null && (l.childLanes & t) !== t && (l.childLanes |= t), e === n) break;
            e = e.return
        }
    }

    function ms(e, t, n, l) {
        var a = e.child;
        for (a !== null && (a.return = e); a !== null;) {
            var u = a.dependencies;
            if (u !== null) {
                var h = a.child;
                u = u.firstContext;
                e: for (; u !== null;) {
                    var v = u;
                    u = a;
                    for (var E = 0; E < t.length; E++)
                        if (v.context === t[E]) {
                            u.lanes |= n, v = u.alternate, v !== null && (v.lanes |= n), hs(u.return, n, e), l || (h = null);
                            break e
                        }
                    u = v.next
                }
            } else if (a.tag === 18) {
                if (h = a.return, h === null) throw Error(o(341));
                h.lanes |= n, u = h.alternate, u !== null && (u.lanes |= n), hs(h, n, e), h = null
            } else h = a.child;
            if (h !== null) h.return = a;
            else
                for (h = a; h !== null;) {
                    if (h === e) {
                        h = null;
                        break
                    }
                    if (a = h.sibling, a !== null) {
                        a.return = h.return, h = a;
                        break
                    }
                    h = h.return
                }
            a = h
        }
    }

    function Il(e, t, n, l) {
        e = null;
        for (var a = t, u = !1; a !== null;) {
            if (!u) {
                if ((a.flags & 524288) !== 0) u = !0;
                else if ((a.flags & 262144) !== 0) break
            }
            if (a.tag === 10) {
                var h = a.alternate;
                if (h === null) throw Error(o(387));
                if (h = h.memoizedProps, h !== null) {
                    var v = a.type;
                    ut(a.pendingProps.value, h.value) || (e !== null ? e.push(v) : e = [v])
                }
            } else if (a === it.current) {
                if (h = a.alternate, h === null) throw Error(o(387));
                h.memoizedState.memoizedState !== a.memoizedState.memoizedState && (e !== null ? e.push(ja) : e = [ja])
            }
            a = a.return
        }
        e !== null && ms(t, e, n, l), t.flags |= 262144
    }

    function gi(e) {
        for (e = e.firstContext; e !== null;) {
            if (!ut(e.context._currentValue, e.memoizedValue)) return !0;
            e = e.next
        }
        return !1
    }

    function Bn(e) {
        Hn = e, Gt = null, e = e.dependencies, e !== null && (e.firstContext = null)
    }

    function Fe(e) {
        return Rc(Hn, e)
    }

    function pi(e, t) {
        return Hn === null && Bn(e), Rc(e, t)
    }

    function Rc(e, t) {
        var n = t._currentValue;
        if (t = {
                context: t,
                memoizedValue: n,
                next: null
            }, Gt === null) {
            if (e === null) throw Error(o(308));
            Gt = t, e.dependencies = {
                lanes: 0,
                firstContext: t
            }, e.flags |= 524288
        } else Gt = Gt.next = t;
        return n
    }
    var ip = typeof AbortController < "u" ? AbortController : function() {
            var e = [],
                t = this.signal = {
                    aborted: !1,
                    addEventListener: function(n, l) {
                        e.push(l)
                    }
                };
            this.abort = function() {
                t.aborted = !0, e.forEach(function(n) {
                    return n()
                })
            }
        },
        rp = s.unstable_scheduleCallback,
        sp = s.unstable_NormalPriority,
        qe = {
            $$typeof: Y,
            Consumer: null,
            Provider: null,
            _currentValue: null,
            _currentValue2: null,
            _threadCount: 0
        };

    function gs() {
        return {
            controller: new ip,
            data: new Map,
            refCount: 0
        }
    }

    function ea(e) {
        e.refCount--, e.refCount === 0 && rp(sp, function() {
            e.controller.abort()
        })
    }
    var ta = null,
        ps = 0,
        cl = 0,
        fl = null;

    function up(e, t) {
        if (ta === null) {
            var n = ta = [];
            ps = 0, cl = vu(), fl = {
                status: "pending",
                value: void 0,
                then: function(l) {
                    n.push(l)
                }
            }
        }
        return ps++, t.then(jc, jc), t
    }

    function jc() {
        if (--ps === 0 && ta !== null) {
            fl !== null && (fl.status = "fulfilled");
            var e = ta;
            ta = null, cl = 0, fl = null;
            for (var t = 0; t < e.length; t++)(0, e[t])()
        }
    }

    function op(e, t) {
        var n = [],
            l = {
                status: "pending",
                value: null,
                reason: null,
                then: function(a) {
                    n.push(a)
                }
            };
        return e.then(function() {
            l.status = "fulfilled", l.value = t;
            for (var a = 0; a < n.length; a++)(0, n[a])(t)
        }, function(a) {
            for (l.status = "rejected", l.reason = a, a = 0; a < n.length; a++)(0, n[a])(void 0)
        }), l
    }
    var Tc = U.S;
    U.S = function(e, t) {
        typeof t == "object" && t !== null && typeof t.then == "function" && up(e, t), Tc !== null && Tc(e, t)
    };
    var qn = q(null);

    function ys() {
        var e = qn.current;
        return e !== null ? e : Te.pooledCache
    }

    function yi(e, t) {
        t === null ? Z(qn, qn.current) : Z(qn, t.pool)
    }

    function Oc() {
        var e = ys();
        return e === null ? null : {
            parent: qe._currentValue,
            pool: e
        }
    }
    var na = Error(o(460)),
        Ac = Error(o(474)),
        vi = Error(o(542)),
        vs = {
            then: function() {}
        };

    function Mc(e) {
        return e = e.status, e === "fulfilled" || e === "rejected"
    }

    function xi() {}

    function Lc(e, t, n) {
        switch (n = e[n], n === void 0 ? e.push(t) : n !== t && (t.then(xi, xi), t = n), t.status) {
            case "fulfilled":
                return t.value;
            case "rejected":
                throw e = t.reason, zc(e), e;
            default:
                if (typeof t.status == "string") t.then(xi, xi);
                else {
                    if (e = Te, e !== null && 100 < e.shellSuspendCounter) throw Error(o(482));
                    e = t, e.status = "pending", e.then(function(l) {
                        if (t.status === "pending") {
                            var a = t;
                            a.status = "fulfilled", a.value = l
                        }
                    }, function(l) {
                        if (t.status === "pending") {
                            var a = t;
                            a.status = "rejected", a.reason = l
                        }
                    })
                }
                switch (t.status) {
                    case "fulfilled":
                        return t.value;
                    case "rejected":
                        throw e = t.reason, zc(e), e
                }
                throw la = t, na
        }
    }
    var la = null;

    function Dc() {
        if (la === null) throw Error(o(459));
        var e = la;
        return la = null, e
    }

    function zc(e) {
        if (e === na || e === vi) throw Error(o(483))
    }
    var sn = !1;

    function xs(e) {
        e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                lanes: 0,
                hiddenCallbacks: null
            },
            callbacks: null
        }
    }

    function bs(e, t) {
        e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            callbacks: null
        })
    }

    function un(e) {
        return {
            lane: e,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }

    function on(e, t, n) {
        var l = e.updateQueue;
        if (l === null) return null;
        if (l = l.shared, (Ee & 2) !== 0) {
            var a = l.pending;
            return a === null ? t.next = t : (t.next = a.next, a.next = t), l.pending = t, t = fi(e), Sc(e, null, n), t
        }
        return ci(e, l, t, n), fi(e)
    }

    function aa(e, t, n) {
        if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194048) !== 0)) {
            var l = t.lanes;
            l &= e.pendingLanes, n |= l, t.lanes = n, jo(e, n)
        }
    }

    function Ss(e, t) {
        var n = e.updateQueue,
            l = e.alternate;
        if (l !== null && (l = l.updateQueue, n === l)) {
            var a = null,
                u = null;
            if (n = n.firstBaseUpdate, n !== null) {
                do {
                    var h = {
                        lane: n.lane,
                        tag: n.tag,
                        payload: n.payload,
                        callback: null,
                        next: null
                    };
                    u === null ? a = u = h : u = u.next = h, n = n.next
                } while (n !== null);
                u === null ? a = u = t : u = u.next = t
            } else a = u = t;
            n = {
                baseState: l.baseState,
                firstBaseUpdate: a,
                lastBaseUpdate: u,
                shared: l.shared,
                callbacks: l.callbacks
            }, e.updateQueue = n;
            return
        }
        e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
    }
    var ws = !1;

    function ia() {
        if (ws) {
            var e = fl;
            if (e !== null) throw e
        }
    }

    function ra(e, t, n, l) {
        ws = !1;
        var a = e.updateQueue;
        sn = !1;
        var u = a.firstBaseUpdate,
            h = a.lastBaseUpdate,
            v = a.shared.pending;
        if (v !== null) {
            a.shared.pending = null;
            var E = v,
                O = E.next;
            E.next = null, h === null ? u = O : h.next = O, h = E;
            var H = e.alternate;
            H !== null && (H = H.updateQueue, v = H.lastBaseUpdate, v !== h && (v === null ? H.firstBaseUpdate = O : v.next = O, H.lastBaseUpdate = E))
        }
        if (u !== null) {
            var k = a.baseState;
            h = 0, H = O = E = null, v = u;
            do {
                var M = v.lane & -536870913,
                    L = M !== v.lane;
                if (L ? (ge & M) === M : (l & M) === M) {
                    M !== 0 && M === cl && (ws = !0), H !== null && (H = H.next = {
                        lane: 0,
                        tag: v.tag,
                        payload: v.payload,
                        callback: null,
                        next: null
                    });
                    e: {
                        var ae = e,
                            te = v;M = t;
                        var Re = n;
                        switch (te.tag) {
                            case 1:
                                if (ae = te.payload, typeof ae == "function") {
                                    k = ae.call(Re, k, M);
                                    break e
                                }
                                k = ae;
                                break e;
                            case 3:
                                ae.flags = ae.flags & -65537 | 128;
                            case 0:
                                if (ae = te.payload, M = typeof ae == "function" ? ae.call(Re, k, M) : ae, M == null) break e;
                                k = x({}, k, M);
                                break e;
                            case 2:
                                sn = !0
                        }
                    }
                    M = v.callback, M !== null && (e.flags |= 64, L && (e.flags |= 8192), L = a.callbacks, L === null ? a.callbacks = [M] : L.push(M))
                } else L = {
                    lane: M,
                    tag: v.tag,
                    payload: v.payload,
                    callback: v.callback,
                    next: null
                }, H === null ? (O = H = L, E = k) : H = H.next = L, h |= M;
                if (v = v.next, v === null) {
                    if (v = a.shared.pending, v === null) break;
                    L = v, v = L.next, L.next = null, a.lastBaseUpdate = L, a.shared.pending = null
                }
            } while (!0);
            H === null && (E = k), a.baseState = E, a.firstBaseUpdate = O, a.lastBaseUpdate = H, u === null && (a.shared.lanes = 0), yn |= h, e.lanes = h, e.memoizedState = k
        }
    }

    function Uc(e, t) {
        if (typeof e != "function") throw Error(o(191, e));
        e.call(t)
    }

    function Hc(e, t) {
        var n = e.callbacks;
        if (n !== null)
            for (e.callbacks = null, e = 0; e < n.length; e++) Uc(n[e], t)
    }
    var dl = q(null),
        bi = q(0);

    function Bc(e, t) {
        e = Ft, Z(bi, e), Z(dl, t), Ft = e | t.baseLanes
    }

    function Es() {
        Z(bi, Ft), Z(dl, dl.current)
    }

    function Ns() {
        Ft = bi.current, $(dl), $(bi)
    }
    var cn = 0,
        oe = null,
        Ce = null,
        He = null,
        Si = !1,
        hl = !1,
        Vn = !1,
        wi = 0,
        sa = 0,
        ml = null,
        cp = 0;

    function ze() {
        throw Error(o(321))
    }

    function Cs(e, t) {
        if (t === null) return !1;
        for (var n = 0; n < t.length && n < e.length; n++)
            if (!ut(e[n], t[n])) return !1;
        return !0
    }

    function _s(e, t, n, l, a, u) {
        return cn = u, oe = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, U.H = e === null || e.memoizedState === null ? wf : Ef, Vn = !1, u = n(l, a), Vn = !1, hl && (u = Vc(t, n, l, a)), qc(e), u
    }

    function qc(e) {
        U.H = ji;
        var t = Ce !== null && Ce.next !== null;
        if (cn = 0, He = Ce = oe = null, Si = !1, sa = 0, ml = null, t) throw Error(o(300));
        e === null || Ye || (e = e.dependencies, e !== null && gi(e) && (Ye = !0))
    }

    function Vc(e, t, n, l) {
        oe = e;
        var a = 0;
        do {
            if (hl && (ml = null), sa = 0, hl = !1, 25 <= a) throw Error(o(301));
            if (a += 1, He = Ce = null, e.updateQueue != null) {
                var u = e.updateQueue;
                u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0)
            }
            U.H = yp, u = t(n, l)
        } while (hl);
        return u
    }

    function fp() {
        var e = U.H,
            t = e.useState()[0];
        return t = typeof t.then == "function" ? ua(t) : t, e = e.useState()[0], (Ce !== null ? Ce.memoizedState : null) !== e && (oe.flags |= 1024), t
    }

    function Rs() {
        var e = wi !== 0;
        return wi = 0, e
    }

    function js(e, t, n) {
        t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~n
    }

    function Ts(e) {
        if (Si) {
            for (e = e.memoizedState; e !== null;) {
                var t = e.queue;
                t !== null && (t.pending = null), e = e.next
            }
            Si = !1
        }
        cn = 0, He = Ce = oe = null, hl = !1, sa = wi = 0, ml = null
    }

    function nt() {
        var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return He === null ? oe.memoizedState = He = e : He = He.next = e, He
    }

    function Be() {
        if (Ce === null) {
            var e = oe.alternate;
            e = e !== null ? e.memoizedState : null
        } else e = Ce.next;
        var t = He === null ? oe.memoizedState : He.next;
        if (t !== null) He = t, Ce = e;
        else {
            if (e === null) throw oe.alternate === null ? Error(o(467)) : Error(o(310));
            Ce = e, e = {
                memoizedState: Ce.memoizedState,
                baseState: Ce.baseState,
                baseQueue: Ce.baseQueue,
                queue: Ce.queue,
                next: null
            }, He === null ? oe.memoizedState = He = e : He = He.next = e
        }
        return He
    }

    function Os() {
        return {
            lastEffect: null,
            events: null,
            stores: null,
            memoCache: null
        }
    }

    function ua(e) {
        var t = sa;
        return sa += 1, ml === null && (ml = []), e = Lc(ml, e, t), t = oe, (He === null ? t.memoizedState : He.next) === null && (t = t.alternate, U.H = t === null || t.memoizedState === null ? wf : Ef), e
    }

    function Ei(e) {
        if (e !== null && typeof e == "object") {
            if (typeof e.then == "function") return ua(e);
            if (e.$$typeof === Y) return Fe(e)
        }
        throw Error(o(438, String(e)))
    }

    function As(e) {
        var t = null,
            n = oe.updateQueue;
        if (n !== null && (t = n.memoCache), t == null) {
            var l = oe.alternate;
            l !== null && (l = l.updateQueue, l !== null && (l = l.memoCache, l != null && (t = {
                data: l.data.map(function(a) {
                    return a.slice()
                }),
                index: 0
            })))
        }
        if (t == null && (t = {
                data: [],
                index: 0
            }), n === null && (n = Os(), oe.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0)
            for (n = t.data[t.index] = Array(e), l = 0; l < e; l++) n[l] = G;
        return t.index++, n
    }

    function Qt(e, t) {
        return typeof t == "function" ? t(e) : t
    }

    function Ni(e) {
        var t = Be();
        return Ms(t, Ce, e)
    }

    function Ms(e, t, n) {
        var l = e.queue;
        if (l === null) throw Error(o(311));
        l.lastRenderedReducer = n;
        var a = e.baseQueue,
            u = l.pending;
        if (u !== null) {
            if (a !== null) {
                var h = a.next;
                a.next = u.next, u.next = h
            }
            t.baseQueue = a = u, l.pending = null
        }
        if (u = e.baseState, a === null) e.memoizedState = u;
        else {
            t = a.next;
            var v = h = null,
                E = null,
                O = t,
                H = !1;
            do {
                var k = O.lane & -536870913;
                if (k !== O.lane ? (ge & k) === k : (cn & k) === k) {
                    var M = O.revertLane;
                    if (M === 0) E !== null && (E = E.next = {
                        lane: 0,
                        revertLane: 0,
                        action: O.action,
                        hasEagerState: O.hasEagerState,
                        eagerState: O.eagerState,
                        next: null
                    }), k === cl && (H = !0);
                    else if ((cn & M) === M) {
                        O = O.next, M === cl && (H = !0);
                        continue
                    } else k = {
                        lane: 0,
                        revertLane: O.revertLane,
                        action: O.action,
                        hasEagerState: O.hasEagerState,
                        eagerState: O.eagerState,
                        next: null
                    }, E === null ? (v = E = k, h = u) : E = E.next = k, oe.lanes |= M, yn |= M;
                    k = O.action, Vn && n(u, k), u = O.hasEagerState ? O.eagerState : n(u, k)
                } else M = {
                    lane: k,
                    revertLane: O.revertLane,
                    action: O.action,
                    hasEagerState: O.hasEagerState,
                    eagerState: O.eagerState,
                    next: null
                }, E === null ? (v = E = M, h = u) : E = E.next = M, oe.lanes |= k, yn |= k;
                O = O.next
            } while (O !== null && O !== t);
            if (E === null ? h = u : E.next = v, !ut(u, e.memoizedState) && (Ye = !0, H && (n = fl, n !== null))) throw n;
            e.memoizedState = u, e.baseState = h, e.baseQueue = E, l.lastRenderedState = u
        }
        return a === null && (l.lanes = 0), [e.memoizedState, l.dispatch]
    }

    function Ls(e) {
        var t = Be(),
            n = t.queue;
        if (n === null) throw Error(o(311));
        n.lastRenderedReducer = e;
        var l = n.dispatch,
            a = n.pending,
            u = t.memoizedState;
        if (a !== null) {
            n.pending = null;
            var h = a = a.next;
            do u = e(u, h.action), h = h.next; while (h !== a);
            ut(u, t.memoizedState) || (Ye = !0), t.memoizedState = u, t.baseQueue === null && (t.baseState = u), n.lastRenderedState = u
        }
        return [u, l]
    }

    function kc(e, t, n) {
        var l = oe,
            a = Be(),
            u = Se;
        if (u) {
            if (n === void 0) throw Error(o(407));
            n = n()
        } else n = t();
        var h = !ut((Ce || a).memoizedState, n);
        h && (a.memoizedState = n, Ye = !0), a = a.queue;
        var v = Qc.bind(null, l, a, e);
        if (oa(2048, 8, v, [e]), a.getSnapshot !== t || h || He !== null && He.memoizedState.tag & 1) {
            if (l.flags |= 2048, gl(9, Ci(), Yc.bind(null, l, a, n, t), null), Te === null) throw Error(o(349));
            u || (cn & 124) !== 0 || Gc(l, t, n)
        }
        return n
    }

    function Gc(e, t, n) {
        e.flags |= 16384, e = {
            getSnapshot: t,
            value: n
        }, t = oe.updateQueue, t === null ? (t = Os(), oe.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e))
    }

    function Yc(e, t, n, l) {
        t.value = n, t.getSnapshot = l, Xc(t) && Kc(e)
    }

    function Qc(e, t, n) {
        return n(function() {
            Xc(t) && Kc(e)
        })
    }

    function Xc(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var n = t();
            return !ut(e, n)
        } catch {
            return !0
        }
    }

    function Kc(e) {
        var t = rl(e, 2);
        t !== null && mt(t, e, 2)
    }

    function Ds(e) {
        var t = nt();
        if (typeof e == "function") {
            var n = e;
            if (e = n(), Vn) {
                nn(!0);
                try {
                    n()
                } finally {
                    nn(!1)
                }
            }
        }
        return t.memoizedState = t.baseState = e, t.queue = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Qt,
            lastRenderedState: e
        }, t
    }

    function Zc(e, t, n, l) {
        return e.baseState = n, Ms(e, Ce, typeof l == "function" ? l : Qt)
    }

    function dp(e, t, n, l, a) {
        if (Ri(e)) throw Error(o(485));
        if (e = t.action, e !== null) {
            var u = {
                payload: a,
                action: e,
                next: null,
                isTransition: !0,
                status: "pending",
                value: null,
                reason: null,
                listeners: [],
                then: function(h) {
                    u.listeners.push(h)
                }
            };
            U.T !== null ? n(!0) : u.isTransition = !1, l(u), n = t.pending, n === null ? (u.next = t.pending = u, $c(t, u)) : (u.next = n.next, t.pending = n.next = u)
        }
    }

    function $c(e, t) {
        var n = t.action,
            l = t.payload,
            a = e.state;
        if (t.isTransition) {
            var u = U.T,
                h = {};
            U.T = h;
            try {
                var v = n(a, l),
                    E = U.S;
                E !== null && E(h, v), Jc(e, t, v)
            } catch (O) {
                zs(e, t, O)
            } finally {
                U.T = u
            }
        } else try {
            u = n(a, l), Jc(e, t, u)
        } catch (O) {
            zs(e, t, O)
        }
    }

    function Jc(e, t, n) {
        n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(function(l) {
            Fc(e, t, l)
        }, function(l) {
            return zs(e, t, l)
        }) : Fc(e, t, n)
    }

    function Fc(e, t, n) {
        t.status = "fulfilled", t.value = n, Pc(t), e.state = n, t = e.pending, t !== null && (n = t.next, n === t ? e.pending = null : (n = n.next, t.next = n, $c(e, n)))
    }

    function zs(e, t, n) {
        var l = e.pending;
        if (e.pending = null, l !== null) {
            l = l.next;
            do t.status = "rejected", t.reason = n, Pc(t), t = t.next; while (t !== l)
        }
        e.action = null
    }

    function Pc(e) {
        e = e.listeners;
        for (var t = 0; t < e.length; t++)(0, e[t])()
    }

    function Wc(e, t) {
        return t
    }

    function Ic(e, t) {
        if (Se) {
            var n = Te.formState;
            if (n !== null) {
                e: {
                    var l = oe;
                    if (Se) {
                        if (Le) {
                            t: {
                                for (var a = Le, u = Tt; a.nodeType !== 8;) {
                                    if (!u) {
                                        a = null;
                                        break t
                                    }
                                    if (a = _t(a.nextSibling), a === null) {
                                        a = null;
                                        break t
                                    }
                                }
                                u = a.data,
                                a = u === "F!" || u === "F" ? a : null
                            }
                            if (a) {
                                Le = _t(a.nextSibling), l = a.data === "F!";
                                break e
                            }
                        }
                        Un(l)
                    }
                    l = !1
                }
                l && (t = n[0])
            }
        }
        return n = nt(), n.memoizedState = n.baseState = t, l = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Wc,
            lastRenderedState: t
        }, n.queue = l, n = xf.bind(null, oe, l), l.dispatch = n, l = Ds(!1), u = Vs.bind(null, oe, !1, l.queue), l = nt(), a = {
            state: t,
            dispatch: null,
            action: e,
            pending: null
        }, l.queue = a, n = dp.bind(null, oe, a, u, n), a.dispatch = n, l.memoizedState = e, [t, n, !1]
    }

    function ef(e) {
        var t = Be();
        return tf(t, Ce, e)
    }

    function tf(e, t, n) {
        if (t = Ms(e, t, Wc)[0], e = Ni(Qt)[0], typeof t == "object" && t !== null && typeof t.then == "function") try {
            var l = ua(t)
        } catch (h) {
            throw h === na ? vi : h
        } else l = t;
        t = Be();
        var a = t.queue,
            u = a.dispatch;
        return n !== t.memoizedState && (oe.flags |= 2048, gl(9, Ci(), hp.bind(null, a, n), null)), [l, u, e]
    }

    function hp(e, t) {
        e.action = t
    }

    function nf(e) {
        var t = Be(),
            n = Ce;
        if (n !== null) return tf(t, n, e);
        Be(), t = t.memoizedState, n = Be();
        var l = n.queue.dispatch;
        return n.memoizedState = e, [t, l, !1]
    }

    function gl(e, t, n, l) {
        return e = {
            tag: e,
            create: n,
            deps: l,
            inst: t,
            next: null
        }, t = oe.updateQueue, t === null && (t = Os(), oe.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (l = n.next, n.next = e, e.next = l, t.lastEffect = e), e
    }

    function Ci() {
        return {
            destroy: void 0,
            resource: void 0
        }
    }

    function lf() {
        return Be().memoizedState
    }

    function _i(e, t, n, l) {
        var a = nt();
        l = l === void 0 ? null : l, oe.flags |= e, a.memoizedState = gl(1 | t, Ci(), n, l)
    }

    function oa(e, t, n, l) {
        var a = Be();
        l = l === void 0 ? null : l;
        var u = a.memoizedState.inst;
        Ce !== null && l !== null && Cs(l, Ce.memoizedState.deps) ? a.memoizedState = gl(t, u, n, l) : (oe.flags |= e, a.memoizedState = gl(1 | t, u, n, l))
    }

    function af(e, t) {
        _i(8390656, 8, e, t)
    }

    function rf(e, t) {
        oa(2048, 8, e, t)
    }

    function sf(e, t) {
        return oa(4, 2, e, t)
    }

    function uf(e, t) {
        return oa(4, 4, e, t)
    }

    function of (e, t) {
        if (typeof t == "function") {
            e = e();
            var n = t(e);
            return function() {
                typeof n == "function" ? n() : t(null)
            }
        }
        if (t != null) return e = e(), t.current = e,
            function() {
                t.current = null
            }
    }

    function cf(e, t, n) {
        n = n != null ? n.concat([e]) : null, oa(4, 4, of .bind(null, t, e), n)
    }

    function Us() {}

    function ff(e, t) {
        var n = Be();
        t = t === void 0 ? null : t;
        var l = n.memoizedState;
        return t !== null && Cs(t, l[1]) ? l[0] : (n.memoizedState = [e, t], e)
    }

    function df(e, t) {
        var n = Be();
        t = t === void 0 ? null : t;
        var l = n.memoizedState;
        if (t !== null && Cs(t, l[1])) return l[0];
        if (l = e(), Vn) {
            nn(!0);
            try {
                e()
            } finally {
                nn(!1)
            }
        }
        return n.memoizedState = [l, t], l
    }

    function Hs(e, t, n) {
        return n === void 0 || (cn & 1073741824) !== 0 ? e.memoizedState = t : (e.memoizedState = n, e = gd(), oe.lanes |= e, yn |= e, n)
    }

    function hf(e, t, n, l) {
        return ut(n, t) ? n : dl.current !== null ? (e = Hs(e, n, l), ut(e, t) || (Ye = !0), e) : (cn & 42) === 0 ? (Ye = !0, e.memoizedState = n) : (e = gd(), oe.lanes |= e, yn |= e, t)
    }

    function mf(e, t, n, l, a) {
        var u = X.p;
        X.p = u !== 0 && 8 > u ? u : 8;
        var h = U.T,
            v = {};
        U.T = v, Vs(e, !1, t, n);
        try {
            var E = a(),
                O = U.S;
            if (O !== null && O(v, E), E !== null && typeof E == "object" && typeof E.then == "function") {
                var H = op(E, l);
                ca(e, t, H, ht(e))
            } else ca(e, t, l, ht(e))
        } catch (k) {
            ca(e, t, {
                then: function() {},
                status: "rejected",
                reason: k
            }, ht())
        } finally {
            X.p = u, U.T = h
        }
    }

    function mp() {}

    function Bs(e, t, n, l) {
        if (e.tag !== 5) throw Error(o(476));
        var a = gf(e).queue;
        mf(e, a, t, I, n === null ? mp : function() {
            return pf(e), n(l)
        })
    }

    function gf(e) {
        var t = e.memoizedState;
        if (t !== null) return t;
        t = {
            memoizedState: I,
            baseState: I,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Qt,
                lastRenderedState: I
            },
            next: null
        };
        var n = {};
        return t.next = {
            memoizedState: n,
            baseState: n,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Qt,
                lastRenderedState: n
            },
            next: null
        }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t
    }

    function pf(e) {
        var t = gf(e).next.queue;
        ca(e, t, {}, ht())
    }

    function qs() {
        return Fe(ja)
    }

    function yf() {
        return Be().memoizedState
    }

    function vf() {
        return Be().memoizedState
    }

    function gp(e) {
        for (var t = e.return; t !== null;) {
            switch (t.tag) {
                case 24:
                case 3:
                    var n = ht();
                    e = un(n);
                    var l = on(t, e, n);
                    l !== null && (mt(l, t, n), aa(l, t, n)), t = {
                        cache: gs()
                    }, e.payload = t;
                    return
            }
            t = t.return
        }
    }

    function pp(e, t, n) {
        var l = ht();
        n = {
            lane: l,
            revertLane: 0,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, Ri(e) ? bf(t, n) : (n = is(e, t, n, l), n !== null && (mt(n, e, l), Sf(n, t, l)))
    }

    function xf(e, t, n) {
        var l = ht();
        ca(e, t, n, l)
    }

    function ca(e, t, n, l) {
        var a = {
            lane: l,
            revertLane: 0,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (Ri(e)) bf(t, a);
        else {
            var u = e.alternate;
            if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null)) try {
                var h = t.lastRenderedState,
                    v = u(h, n);
                if (a.hasEagerState = !0, a.eagerState = v, ut(v, h)) return ci(e, t, a, 0), Te === null && oi(), !1
            } catch {} finally {}
            if (n = is(e, t, a, l), n !== null) return mt(n, e, l), Sf(n, t, l), !0
        }
        return !1
    }

    function Vs(e, t, n, l) {
        if (l = {
                lane: 2,
                revertLane: vu(),
                action: l,
                hasEagerState: !1,
                eagerState: null,
                next: null
            }, Ri(e)) {
            if (t) throw Error(o(479))
        } else t = is(e, n, l, 2), t !== null && mt(t, e, 2)
    }

    function Ri(e) {
        var t = e.alternate;
        return e === oe || t !== null && t === oe
    }

    function bf(e, t) {
        hl = Si = !0;
        var n = e.pending;
        n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
    }

    function Sf(e, t, n) {
        if ((n & 4194048) !== 0) {
            var l = t.lanes;
            l &= e.pendingLanes, n |= l, t.lanes = n, jo(e, n)
        }
    }
    var ji = {
            readContext: Fe,
            use: Ei,
            useCallback: ze,
            useContext: ze,
            useEffect: ze,
            useImperativeHandle: ze,
            useLayoutEffect: ze,
            useInsertionEffect: ze,
            useMemo: ze,
            useReducer: ze,
            useRef: ze,
            useState: ze,
            useDebugValue: ze,
            useDeferredValue: ze,
            useTransition: ze,
            useSyncExternalStore: ze,
            useId: ze,
            useHostTransitionStatus: ze,
            useFormState: ze,
            useActionState: ze,
            useOptimistic: ze,
            useMemoCache: ze,
            useCacheRefresh: ze
        },
        wf = {
            readContext: Fe,
            use: Ei,
            useCallback: function(e, t) {
                return nt().memoizedState = [e, t === void 0 ? null : t], e
            },
            useContext: Fe,
            useEffect: af,
            useImperativeHandle: function(e, t, n) {
                n = n != null ? n.concat([e]) : null, _i(4194308, 4, of .bind(null, t, e), n)
            },
            useLayoutEffect: function(e, t) {
                return _i(4194308, 4, e, t)
            },
            useInsertionEffect: function(e, t) {
                _i(4, 2, e, t)
            },
            useMemo: function(e, t) {
                var n = nt();
                t = t === void 0 ? null : t;
                var l = e();
                if (Vn) {
                    nn(!0);
                    try {
                        e()
                    } finally {
                        nn(!1)
                    }
                }
                return n.memoizedState = [l, t], l
            },
            useReducer: function(e, t, n) {
                var l = nt();
                if (n !== void 0) {
                    var a = n(t);
                    if (Vn) {
                        nn(!0);
                        try {
                            n(t)
                        } finally {
                            nn(!1)
                        }
                    }
                } else a = t;
                return l.memoizedState = l.baseState = a, e = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: a
                }, l.queue = e, e = e.dispatch = pp.bind(null, oe, e), [l.memoizedState, e]
            },
            useRef: function(e) {
                var t = nt();
                return e = {
                    current: e
                }, t.memoizedState = e
            },
            useState: function(e) {
                e = Ds(e);
                var t = e.queue,
                    n = xf.bind(null, oe, t);
                return t.dispatch = n, [e.memoizedState, n]
            },
            useDebugValue: Us,
            useDeferredValue: function(e, t) {
                var n = nt();
                return Hs(n, e, t)
            },
            useTransition: function() {
                var e = Ds(!1);
                return e = mf.bind(null, oe, e.queue, !0, !1), nt().memoizedState = e, [!1, e]
            },
            useSyncExternalStore: function(e, t, n) {
                var l = oe,
                    a = nt();
                if (Se) {
                    if (n === void 0) throw Error(o(407));
                    n = n()
                } else {
                    if (n = t(), Te === null) throw Error(o(349));
                    (ge & 124) !== 0 || Gc(l, t, n)
                }
                a.memoizedState = n;
                var u = {
                    value: n,
                    getSnapshot: t
                };
                return a.queue = u, af(Qc.bind(null, l, u, e), [e]), l.flags |= 2048, gl(9, Ci(), Yc.bind(null, l, u, n, t), null), n
            },
            useId: function() {
                var e = nt(),
                    t = Te.identifierPrefix;
                if (Se) {
                    var n = kt,
                        l = Vt;
                    n = (l & ~(1 << 32 - st(l) - 1)).toString(32) + n, t = "«" + t + "R" + n, n = wi++, 0 < n && (t += "H" + n.toString(32)), t += "»"
                } else n = cp++, t = "«" + t + "r" + n.toString(32) + "»";
                return e.memoizedState = t
            },
            useHostTransitionStatus: qs,
            useFormState: Ic,
            useActionState: Ic,
            useOptimistic: function(e) {
                var t = nt();
                t.memoizedState = t.baseState = e;
                var n = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: null,
                    lastRenderedState: null
                };
                return t.queue = n, t = Vs.bind(null, oe, !0, n), n.dispatch = t, [e, t]
            },
            useMemoCache: As,
            useCacheRefresh: function() {
                return nt().memoizedState = gp.bind(null, oe)
            }
        },
        Ef = {
            readContext: Fe,
            use: Ei,
            useCallback: ff,
            useContext: Fe,
            useEffect: rf,
            useImperativeHandle: cf,
            useInsertionEffect: sf,
            useLayoutEffect: uf,
            useMemo: df,
            useReducer: Ni,
            useRef: lf,
            useState: function() {
                return Ni(Qt)
            },
            useDebugValue: Us,
            useDeferredValue: function(e, t) {
                var n = Be();
                return hf(n, Ce.memoizedState, e, t)
            },
            useTransition: function() {
                var e = Ni(Qt)[0],
                    t = Be().memoizedState;
                return [typeof e == "boolean" ? e : ua(e), t]
            },
            useSyncExternalStore: kc,
            useId: yf,
            useHostTransitionStatus: qs,
            useFormState: ef,
            useActionState: ef,
            useOptimistic: function(e, t) {
                var n = Be();
                return Zc(n, Ce, e, t)
            },
            useMemoCache: As,
            useCacheRefresh: vf
        },
        yp = {
            readContext: Fe,
            use: Ei,
            useCallback: ff,
            useContext: Fe,
            useEffect: rf,
            useImperativeHandle: cf,
            useInsertionEffect: sf,
            useLayoutEffect: uf,
            useMemo: df,
            useReducer: Ls,
            useRef: lf,
            useState: function() {
                return Ls(Qt)
            },
            useDebugValue: Us,
            useDeferredValue: function(e, t) {
                var n = Be();
                return Ce === null ? Hs(n, e, t) : hf(n, Ce.memoizedState, e, t)
            },
            useTransition: function() {
                var e = Ls(Qt)[0],
                    t = Be().memoizedState;
                return [typeof e == "boolean" ? e : ua(e), t]
            },
            useSyncExternalStore: kc,
            useId: yf,
            useHostTransitionStatus: qs,
            useFormState: nf,
            useActionState: nf,
            useOptimistic: function(e, t) {
                var n = Be();
                return Ce !== null ? Zc(n, Ce, e, t) : (n.baseState = e, [e, n.queue.dispatch])
            },
            useMemoCache: As,
            useCacheRefresh: vf
        },
        pl = null,
        fa = 0;

    function Ti(e) {
        var t = fa;
        return fa += 1, pl === null && (pl = []), Lc(pl, e, t)
    }

    function da(e, t) {
        t = t.props.ref, e.ref = t !== void 0 ? t : null
    }

    function Oi(e, t) {
        throw t.$$typeof === b ? Error(o(525)) : (e = Object.prototype.toString.call(t), Error(o(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)))
    }

    function Nf(e) {
        var t = e._init;
        return t(e._payload)
    }

    function Cf(e) {
        function t(j, R) {
            if (e) {
                var T = j.deletions;
                T === null ? (j.deletions = [R], j.flags |= 16) : T.push(R)
            }
        }

        function n(j, R) {
            if (!e) return null;
            for (; R !== null;) t(j, R), R = R.sibling;
            return null
        }

        function l(j) {
            for (var R = new Map; j !== null;) j.key !== null ? R.set(j.key, j) : R.set(j.index, j), j = j.sibling;
            return R
        }

        function a(j, R) {
            return j = qt(j, R), j.index = 0, j.sibling = null, j
        }

        function u(j, R, T) {
            return j.index = T, e ? (T = j.alternate, T !== null ? (T = T.index, T < R ? (j.flags |= 67108866, R) : T) : (j.flags |= 67108866, R)) : (j.flags |= 1048576, R)
        }

        function h(j) {
            return e && j.alternate === null && (j.flags |= 67108866), j
        }

        function v(j, R, T, B) {
            return R === null || R.tag !== 6 ? (R = ss(T, j.mode, B), R.return = j, R) : (R = a(R, T), R.return = j, R)
        }

        function E(j, R, T, B) {
            var J = T.type;
            return J === N ? H(j, R, T.props.children, B, T.key) : R !== null && (R.elementType === J || typeof J == "object" && J !== null && J.$$typeof === we && Nf(J) === R.type) ? (R = a(R, T.props), da(R, T), R.return = j, R) : (R = di(T.type, T.key, T.props, null, j.mode, B), da(R, T), R.return = j, R)
        }

        function O(j, R, T, B) {
            return R === null || R.tag !== 4 || R.stateNode.containerInfo !== T.containerInfo || R.stateNode.implementation !== T.implementation ? (R = us(T, j.mode, B), R.return = j, R) : (R = a(R, T.children || []), R.return = j, R)
        }

        function H(j, R, T, B, J) {
            return R === null || R.tag !== 7 ? (R = Mn(T, j.mode, B, J), R.return = j, R) : (R = a(R, T), R.return = j, R)
        }

        function k(j, R, T) {
            if (typeof R == "string" && R !== "" || typeof R == "number" || typeof R == "bigint") return R = ss("" + R, j.mode, T), R.return = j, R;
            if (typeof R == "object" && R !== null) {
                switch (R.$$typeof) {
                    case w:
                        return T = di(R.type, R.key, R.props, null, j.mode, T), da(T, R), T.return = j, T;
                    case S:
                        return R = us(R, j.mode, T), R.return = j, R;
                    case we:
                        var B = R._init;
                        return R = B(R._payload), k(j, R, T)
                }
                if (me(R) || F(R)) return R = Mn(R, j.mode, T, null), R.return = j, R;
                if (typeof R.then == "function") return k(j, Ti(R), T);
                if (R.$$typeof === Y) return k(j, pi(j, R), T);
                Oi(j, R)
            }
            return null
        }

        function M(j, R, T, B) {
            var J = R !== null ? R.key : null;
            if (typeof T == "string" && T !== "" || typeof T == "number" || typeof T == "bigint") return J !== null ? null : v(j, R, "" + T, B);
            if (typeof T == "object" && T !== null) {
                switch (T.$$typeof) {
                    case w:
                        return T.key === J ? E(j, R, T, B) : null;
                    case S:
                        return T.key === J ? O(j, R, T, B) : null;
                    case we:
                        return J = T._init, T = J(T._payload), M(j, R, T, B)
                }
                if (me(T) || F(T)) return J !== null ? null : H(j, R, T, B, null);
                if (typeof T.then == "function") return M(j, R, Ti(T), B);
                if (T.$$typeof === Y) return M(j, R, pi(j, T), B);
                Oi(j, T)
            }
            return null
        }

        function L(j, R, T, B, J) {
            if (typeof B == "string" && B !== "" || typeof B == "number" || typeof B == "bigint") return j = j.get(T) || null, v(R, j, "" + B, J);
            if (typeof B == "object" && B !== null) {
                switch (B.$$typeof) {
                    case w:
                        return j = j.get(B.key === null ? T : B.key) || null, E(R, j, B, J);
                    case S:
                        return j = j.get(B.key === null ? T : B.key) || null, O(R, j, B, J);
                    case we:
                        var ce = B._init;
                        return B = ce(B._payload), L(j, R, T, B, J)
                }
                if (me(B) || F(B)) return j = j.get(T) || null, H(R, j, B, J, null);
                if (typeof B.then == "function") return L(j, R, T, Ti(B), J);
                if (B.$$typeof === Y) return L(j, R, T, pi(R, B), J);
                Oi(R, B)
            }
            return null
        }

        function ae(j, R, T, B) {
            for (var J = null, ce = null, W = R, ne = R = 0, Xe = null; W !== null && ne < T.length; ne++) {
                W.index > ne ? (Xe = W, W = null) : Xe = W.sibling;
                var be = M(j, W, T[ne], B);
                if (be === null) {
                    W === null && (W = Xe);
                    break
                }
                e && W && be.alternate === null && t(j, W), R = u(be, R, ne), ce === null ? J = be : ce.sibling = be, ce = be, W = Xe
            }
            if (ne === T.length) return n(j, W), Se && Dn(j, ne), J;
            if (W === null) {
                for (; ne < T.length; ne++) W = k(j, T[ne], B), W !== null && (R = u(W, R, ne), ce === null ? J = W : ce.sibling = W, ce = W);
                return Se && Dn(j, ne), J
            }
            for (W = l(W); ne < T.length; ne++) Xe = L(W, j, ne, T[ne], B), Xe !== null && (e && Xe.alternate !== null && W.delete(Xe.key === null ? ne : Xe.key), R = u(Xe, R, ne), ce === null ? J = Xe : ce.sibling = Xe, ce = Xe);
            return e && W.forEach(function(_n) {
                return t(j, _n)
            }), Se && Dn(j, ne), J
        }

        function te(j, R, T, B) {
            if (T == null) throw Error(o(151));
            for (var J = null, ce = null, W = R, ne = R = 0, Xe = null, be = T.next(); W !== null && !be.done; ne++, be = T.next()) {
                W.index > ne ? (Xe = W, W = null) : Xe = W.sibling;
                var _n = M(j, W, be.value, B);
                if (_n === null) {
                    W === null && (W = Xe);
                    break
                }
                e && W && _n.alternate === null && t(j, W), R = u(_n, R, ne), ce === null ? J = _n : ce.sibling = _n, ce = _n, W = Xe
            }
            if (be.done) return n(j, W), Se && Dn(j, ne), J;
            if (W === null) {
                for (; !be.done; ne++, be = T.next()) be = k(j, be.value, B), be !== null && (R = u(be, R, ne), ce === null ? J = be : ce.sibling = be, ce = be);
                return Se && Dn(j, ne), J
            }
            for (W = l(W); !be.done; ne++, be = T.next()) be = L(W, j, ne, be.value, B), be !== null && (e && be.alternate !== null && W.delete(be.key === null ? ne : be.key), R = u(be, R, ne), ce === null ? J = be : ce.sibling = be, ce = be);
            return e && W.forEach(function(v0) {
                return t(j, v0)
            }), Se && Dn(j, ne), J
        }

        function Re(j, R, T, B) {
            if (typeof T == "object" && T !== null && T.type === N && T.key === null && (T = T.props.children), typeof T == "object" && T !== null) {
                switch (T.$$typeof) {
                    case w:
                        e: {
                            for (var J = T.key; R !== null;) {
                                if (R.key === J) {
                                    if (J = T.type, J === N) {
                                        if (R.tag === 7) {
                                            n(j, R.sibling), B = a(R, T.props.children), B.return = j, j = B;
                                            break e
                                        }
                                    } else if (R.elementType === J || typeof J == "object" && J !== null && J.$$typeof === we && Nf(J) === R.type) {
                                        n(j, R.sibling), B = a(R, T.props), da(B, T), B.return = j, j = B;
                                        break e
                                    }
                                    n(j, R);
                                    break
                                } else t(j, R);
                                R = R.sibling
                            }
                            T.type === N ? (B = Mn(T.props.children, j.mode, B, T.key), B.return = j, j = B) : (B = di(T.type, T.key, T.props, null, j.mode, B), da(B, T), B.return = j, j = B)
                        }
                        return h(j);
                    case S:
                        e: {
                            for (J = T.key; R !== null;) {
                                if (R.key === J)
                                    if (R.tag === 4 && R.stateNode.containerInfo === T.containerInfo && R.stateNode.implementation === T.implementation) {
                                        n(j, R.sibling), B = a(R, T.children || []), B.return = j, j = B;
                                        break e
                                    } else {
                                        n(j, R);
                                        break
                                    }
                                else t(j, R);
                                R = R.sibling
                            }
                            B = us(T, j.mode, B),
                            B.return = j,
                            j = B
                        }
                        return h(j);
                    case we:
                        return J = T._init, T = J(T._payload), Re(j, R, T, B)
                }
                if (me(T)) return ae(j, R, T, B);
                if (F(T)) {
                    if (J = F(T), typeof J != "function") throw Error(o(150));
                    return T = J.call(T), te(j, R, T, B)
                }
                if (typeof T.then == "function") return Re(j, R, Ti(T), B);
                if (T.$$typeof === Y) return Re(j, R, pi(j, T), B);
                Oi(j, T)
            }
            return typeof T == "string" && T !== "" || typeof T == "number" || typeof T == "bigint" ? (T = "" + T, R !== null && R.tag === 6 ? (n(j, R.sibling), B = a(R, T), B.return = j, j = B) : (n(j, R), B = ss(T, j.mode, B), B.return = j, j = B), h(j)) : n(j, R)
        }
        return function(j, R, T, B) {
            try {
                fa = 0;
                var J = Re(j, R, T, B);
                return pl = null, J
            } catch (W) {
                if (W === na || W === vi) throw W;
                var ce = ot(29, W, null, j.mode);
                return ce.lanes = B, ce.return = j, ce
            } finally {}
        }
    }
    var yl = Cf(!0),
        _f = Cf(!1),
        St = q(null),
        Ot = null;

    function fn(e) {
        var t = e.alternate;
        Z(Ve, Ve.current & 1), Z(St, e), Ot === null && (t === null || dl.current !== null || t.memoizedState !== null) && (Ot = e)
    }

    function Rf(e) {
        if (e.tag === 22) {
            if (Z(Ve, Ve.current), Z(St, e), Ot === null) {
                var t = e.alternate;
                t !== null && t.memoizedState !== null && (Ot = e)
            }
        } else dn()
    }

    function dn() {
        Z(Ve, Ve.current), Z(St, St.current)
    }

    function Xt(e) {
        $(St), Ot === e && (Ot = null), $(Ve)
    }
    var Ve = q(0);

    function Ai(e) {
        for (var t = e; t !== null;) {
            if (t.tag === 13) {
                var n = t.memoizedState;
                if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || Ou(n))) return t
            } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
                if ((t.flags & 128) !== 0) return t
            } else if (t.child !== null) {
                t.child.return = t, t = t.child;
                continue
            }
            if (t === e) break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e) return null;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
        return null
    }

    function ks(e, t, n, l) {
        t = e.memoizedState, n = n(l, t), n = n == null ? t : x({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n)
    }
    var Gs = {
        enqueueSetState: function(e, t, n) {
            e = e._reactInternals;
            var l = ht(),
                a = un(l);
            a.payload = t, n != null && (a.callback = n), t = on(e, a, l), t !== null && (mt(t, e, l), aa(t, e, l))
        },
        enqueueReplaceState: function(e, t, n) {
            e = e._reactInternals;
            var l = ht(),
                a = un(l);
            a.tag = 1, a.payload = t, n != null && (a.callback = n), t = on(e, a, l), t !== null && (mt(t, e, l), aa(t, e, l))
        },
        enqueueForceUpdate: function(e, t) {
            e = e._reactInternals;
            var n = ht(),
                l = un(n);
            l.tag = 2, t != null && (l.callback = t), t = on(e, l, n), t !== null && (mt(t, e, n), aa(t, e, n))
        }
    };

    function jf(e, t, n, l, a, u, h) {
        return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(l, u, h) : t.prototype && t.prototype.isPureReactComponent ? !$l(n, l) || !$l(a, u) : !0
    }

    function Tf(e, t, n, l) {
        e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, l), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, l), t.state !== e && Gs.enqueueReplaceState(t, t.state, null)
    }

    function kn(e, t) {
        var n = t;
        if ("ref" in t) {
            n = {};
            for (var l in t) l !== "ref" && (n[l] = t[l])
        }
        if (e = e.defaultProps) {
            n === t && (n = x({}, n));
            for (var a in e) n[a] === void 0 && (n[a] = e[a])
        }
        return n
    }
    var Mi = typeof reportError == "function" ? reportError : function(e) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var t = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
                error: e
            });
            if (!window.dispatchEvent(t)) return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", e);
            return
        }
        console.error(e)
    };

    function Of(e) {
        Mi(e)
    }

    function Af(e) {
        console.error(e)
    }

    function Mf(e) {
        Mi(e)
    }

    function Li(e, t) {
        try {
            var n = e.onUncaughtError;
            n(t.value, {
                componentStack: t.stack
            })
        } catch (l) {
            setTimeout(function() {
                throw l
            })
        }
    }

    function Lf(e, t, n) {
        try {
            var l = e.onCaughtError;
            l(n.value, {
                componentStack: n.stack,
                errorBoundary: t.tag === 1 ? t.stateNode : null
            })
        } catch (a) {
            setTimeout(function() {
                throw a
            })
        }
    }

    function Ys(e, t, n) {
        return n = un(n), n.tag = 3, n.payload = {
            element: null
        }, n.callback = function() {
            Li(e, t)
        }, n
    }

    function Df(e) {
        return e = un(e), e.tag = 3, e
    }

    function zf(e, t, n, l) {
        var a = n.type.getDerivedStateFromError;
        if (typeof a == "function") {
            var u = l.value;
            e.payload = function() {
                return a(u)
            }, e.callback = function() {
                Lf(t, n, l)
            }
        }
        var h = n.stateNode;
        h !== null && typeof h.componentDidCatch == "function" && (e.callback = function() {
            Lf(t, n, l), typeof a != "function" && (vn === null ? vn = new Set([this]) : vn.add(this));
            var v = l.stack;
            this.componentDidCatch(l.value, {
                componentStack: v !== null ? v : ""
            })
        })
    }

    function vp(e, t, n, l, a) {
        if (n.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
            if (t = n.alternate, t !== null && Il(t, n, a, !0), n = St.current, n !== null) {
                switch (n.tag) {
                    case 13:
                        return Ot === null ? hu() : n.alternate === null && De === 0 && (De = 3), n.flags &= -257, n.flags |= 65536, n.lanes = a, l === vs ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = new Set([l]) : t.add(l), gu(e, l, a)), !1;
                    case 22:
                        return n.flags |= 65536, l === vs ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = {
                            transitions: null,
                            markerInstances: null,
                            retryQueue: new Set([l])
                        }, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = new Set([l]) : n.add(l)), gu(e, l, a)), !1
                }
                throw Error(o(435, n.tag))
            }
            return gu(e, l, a), hu(), !1
        }
        if (Se) return t = St.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = a, l !== fs && (e = Error(o(422), {
            cause: l
        }), Wl(yt(e, n)))) : (l !== fs && (t = Error(o(423), {
            cause: l
        }), Wl(yt(t, n))), e = e.current.alternate, e.flags |= 65536, a &= -a, e.lanes |= a, l = yt(l, n), a = Ys(e.stateNode, l, a), Ss(e, a), De !== 4 && (De = 2)), !1;
        var u = Error(o(520), {
            cause: l
        });
        if (u = yt(u, n), xa === null ? xa = [u] : xa.push(u), De !== 4 && (De = 2), t === null) return !0;
        l = yt(l, n), n = t;
        do {
            switch (n.tag) {
                case 3:
                    return n.flags |= 65536, e = a & -a, n.lanes |= e, e = Ys(n.stateNode, l, e), Ss(n, e), !1;
                case 1:
                    if (t = n.type, u = n.stateNode, (n.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (vn === null || !vn.has(u)))) return n.flags |= 65536, a &= -a, n.lanes |= a, a = Df(a), zf(a, e, n, l), Ss(n, a), !1
            }
            n = n.return
        } while (n !== null);
        return !1
    }
    var Uf = Error(o(461)),
        Ye = !1;

    function Ke(e, t, n, l) {
        t.child = e === null ? _f(t, null, n, l) : yl(t, e.child, n, l)
    }

    function Hf(e, t, n, l, a) {
        n = n.render;
        var u = t.ref;
        if ("ref" in l) {
            var h = {};
            for (var v in l) v !== "ref" && (h[v] = l[v])
        } else h = l;
        return Bn(t), l = _s(e, t, n, h, u, a), v = Rs(), e !== null && !Ye ? (js(e, t, a), Kt(e, t, a)) : (Se && v && os(t), t.flags |= 1, Ke(e, t, l, a), t.child)
    }

    function Bf(e, t, n, l, a) {
        if (e === null) {
            var u = n.type;
            return typeof u == "function" && !rs(u) && u.defaultProps === void 0 && n.compare === null ? (t.tag = 15, t.type = u, qf(e, t, u, l, a)) : (e = di(n.type, null, l, t, t.mode, a), e.ref = t.ref, e.return = t, t.child = e)
        }
        if (u = e.child, !Ps(e, a)) {
            var h = u.memoizedProps;
            if (n = n.compare, n = n !== null ? n : $l, n(h, l) && e.ref === t.ref) return Kt(e, t, a)
        }
        return t.flags |= 1, e = qt(u, l), e.ref = t.ref, e.return = t, t.child = e
    }

    function qf(e, t, n, l, a) {
        if (e !== null) {
            var u = e.memoizedProps;
            if ($l(u, l) && e.ref === t.ref)
                if (Ye = !1, t.pendingProps = l = u, Ps(e, a))(e.flags & 131072) !== 0 && (Ye = !0);
                else return t.lanes = e.lanes, Kt(e, t, a)
        }
        return Qs(e, t, n, l, a)
    }

    function Vf(e, t, n) {
        var l = t.pendingProps,
            a = l.children,
            u = e !== null ? e.memoizedState : null;
        if (l.mode === "hidden") {
            if ((t.flags & 128) !== 0) {
                if (l = u !== null ? u.baseLanes | n : n, e !== null) {
                    for (a = t.child = e.child, u = 0; a !== null;) u = u | a.lanes | a.childLanes, a = a.sibling;
                    t.childLanes = u & ~l
                } else t.childLanes = 0, t.child = null;
                return kf(e, t, l, n)
            }
            if ((n & 536870912) !== 0) t.memoizedState = {
                baseLanes: 0,
                cachePool: null
            }, e !== null && yi(t, u !== null ? u.cachePool : null), u !== null ? Bc(t, u) : Es(), Rf(t);
            else return t.lanes = t.childLanes = 536870912, kf(e, t, u !== null ? u.baseLanes | n : n, n)
        } else u !== null ? (yi(t, u.cachePool), Bc(t, u), dn(), t.memoizedState = null) : (e !== null && yi(t, null), Es(), dn());
        return Ke(e, t, a, n), t.child
    }

    function kf(e, t, n, l) {
        var a = ys();
        return a = a === null ? null : {
            parent: qe._currentValue,
            pool: a
        }, t.memoizedState = {
            baseLanes: n,
            cachePool: a
        }, e !== null && yi(t, null), Es(), Rf(t), e !== null && Il(e, t, l, !0), null
    }

    function Di(e, t) {
        var n = t.ref;
        if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816);
        else {
            if (typeof n != "function" && typeof n != "object") throw Error(o(284));
            (e === null || e.ref !== n) && (t.flags |= 4194816)
        }
    }

    function Qs(e, t, n, l, a) {
        return Bn(t), n = _s(e, t, n, l, void 0, a), l = Rs(), e !== null && !Ye ? (js(e, t, a), Kt(e, t, a)) : (Se && l && os(t), t.flags |= 1, Ke(e, t, n, a), t.child)
    }

    function Gf(e, t, n, l, a, u) {
        return Bn(t), t.updateQueue = null, n = Vc(t, l, n, a), qc(e), l = Rs(), e !== null && !Ye ? (js(e, t, u), Kt(e, t, u)) : (Se && l && os(t), t.flags |= 1, Ke(e, t, n, u), t.child)
    }

    function Yf(e, t, n, l, a) {
        if (Bn(t), t.stateNode === null) {
            var u = sl,
                h = n.contextType;
            typeof h == "object" && h !== null && (u = Fe(h)), u = new n(l, u), t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = Gs, t.stateNode = u, u._reactInternals = t, u = t.stateNode, u.props = l, u.state = t.memoizedState, u.refs = {}, xs(t), h = n.contextType, u.context = typeof h == "object" && h !== null ? Fe(h) : sl, u.state = t.memoizedState, h = n.getDerivedStateFromProps, typeof h == "function" && (ks(t, n, h, l), u.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (h = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), h !== u.state && Gs.enqueueReplaceState(u, u.state, null), ra(t, l, u, a), ia(), u.state = t.memoizedState), typeof u.componentDidMount == "function" && (t.flags |= 4194308), l = !0
        } else if (e === null) {
            u = t.stateNode;
            var v = t.memoizedProps,
                E = kn(n, v);
            u.props = E;
            var O = u.context,
                H = n.contextType;
            h = sl, typeof H == "object" && H !== null && (h = Fe(H));
            var k = n.getDerivedStateFromProps;
            H = typeof k == "function" || typeof u.getSnapshotBeforeUpdate == "function", v = t.pendingProps !== v, H || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (v || O !== h) && Tf(t, u, l, h), sn = !1;
            var M = t.memoizedState;
            u.state = M, ra(t, l, u, a), ia(), O = t.memoizedState, v || M !== O || sn ? (typeof k == "function" && (ks(t, n, k, l), O = t.memoizedState), (E = sn || jf(t, n, E, l, M, O, h)) ? (H || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = l, t.memoizedState = O), u.props = l, u.state = O, u.context = h, l = E) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), l = !1)
        } else {
            u = t.stateNode, bs(e, t), h = t.memoizedProps, H = kn(n, h), u.props = H, k = t.pendingProps, M = u.context, O = n.contextType, E = sl, typeof O == "object" && O !== null && (E = Fe(O)), v = n.getDerivedStateFromProps, (O = typeof v == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (h !== k || M !== E) && Tf(t, u, l, E), sn = !1, M = t.memoizedState, u.state = M, ra(t, l, u, a), ia();
            var L = t.memoizedState;
            h !== k || M !== L || sn || e !== null && e.dependencies !== null && gi(e.dependencies) ? (typeof v == "function" && (ks(t, n, v, l), L = t.memoizedState), (H = sn || jf(t, n, H, l, M, L, E) || e !== null && e.dependencies !== null && gi(e.dependencies)) ? (O || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(l, L, E), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(l, L, E)), typeof u.componentDidUpdate == "function" && (t.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || h === e.memoizedProps && M === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || h === e.memoizedProps && M === e.memoizedState || (t.flags |= 1024), t.memoizedProps = l, t.memoizedState = L), u.props = l, u.state = L, u.context = E, l = H) : (typeof u.componentDidUpdate != "function" || h === e.memoizedProps && M === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || h === e.memoizedProps && M === e.memoizedState || (t.flags |= 1024), l = !1)
        }
        return u = l, Di(e, t), l = (t.flags & 128) !== 0, u || l ? (u = t.stateNode, n = l && typeof n.getDerivedStateFromError != "function" ? null : u.render(), t.flags |= 1, e !== null && l ? (t.child = yl(t, e.child, null, a), t.child = yl(t, null, n, a)) : Ke(e, t, n, a), t.memoizedState = u.state, e = t.child) : e = Kt(e, t, a), e
    }

    function Qf(e, t, n, l) {
        return Pl(), t.flags |= 256, Ke(e, t, n, l), t.child
    }
    var Xs = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0,
        hydrationErrors: null
    };

    function Ks(e) {
        return {
            baseLanes: e,
            cachePool: Oc()
        }
    }

    function Zs(e, t, n) {
        return e = e !== null ? e.childLanes & ~n : 0, t && (e |= wt), e
    }

    function Xf(e, t, n) {
        var l = t.pendingProps,
            a = !1,
            u = (t.flags & 128) !== 0,
            h;
        if ((h = u) || (h = e !== null && e.memoizedState === null ? !1 : (Ve.current & 2) !== 0), h && (a = !0, t.flags &= -129), h = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
            if (Se) {
                if (a ? fn(t) : dn(), Se) {
                    var v = Le,
                        E;
                    if (E = v) {
                        e: {
                            for (E = v, v = Tt; E.nodeType !== 8;) {
                                if (!v) {
                                    v = null;
                                    break e
                                }
                                if (E = _t(E.nextSibling), E === null) {
                                    v = null;
                                    break e
                                }
                            }
                            v = E
                        }
                        v !== null ? (t.memoizedState = {
                            dehydrated: v,
                            treeContext: Ln !== null ? {
                                id: Vt,
                                overflow: kt
                            } : null,
                            retryLane: 536870912,
                            hydrationErrors: null
                        }, E = ot(18, null, null, 0), E.stateNode = v, E.return = t, t.child = E, Ie = t, Le = null, E = !0) : E = !1
                    }
                    E || Un(t)
                }
                if (v = t.memoizedState, v !== null && (v = v.dehydrated, v !== null)) return Ou(v) ? t.lanes = 32 : t.lanes = 536870912, null;
                Xt(t)
            }
            return v = l.children, l = l.fallback, a ? (dn(), a = t.mode, v = zi({
                mode: "hidden",
                children: v
            }, a), l = Mn(l, a, n, null), v.return = t, l.return = t, v.sibling = l, t.child = v, a = t.child, a.memoizedState = Ks(n), a.childLanes = Zs(e, h, n), t.memoizedState = Xs, l) : (fn(t), $s(t, v))
        }
        if (E = e.memoizedState, E !== null && (v = E.dehydrated, v !== null)) {
            if (u) t.flags & 256 ? (fn(t), t.flags &= -257, t = Js(e, t, n)) : t.memoizedState !== null ? (dn(), t.child = e.child, t.flags |= 128, t = null) : (dn(), a = l.fallback, v = t.mode, l = zi({
                mode: "visible",
                children: l.children
            }, v), a = Mn(a, v, n, null), a.flags |= 2, l.return = t, a.return = t, l.sibling = a, t.child = l, yl(t, e.child, null, n), l = t.child, l.memoizedState = Ks(n), l.childLanes = Zs(e, h, n), t.memoizedState = Xs, t = a);
            else if (fn(t), Ou(v)) {
                if (h = v.nextSibling && v.nextSibling.dataset, h) var O = h.dgst;
                h = O, l = Error(o(419)), l.stack = "", l.digest = h, Wl({
                    value: l,
                    source: null,
                    stack: null
                }), t = Js(e, t, n)
            } else if (Ye || Il(e, t, n, !1), h = (n & e.childLanes) !== 0, Ye || h) {
                if (h = Te, h !== null && (l = n & -n, l = (l & 42) !== 0 ? 1 : Ar(l), l = (l & (h.suspendedLanes | n)) !== 0 ? 0 : l, l !== 0 && l !== E.retryLane)) throw E.retryLane = l, rl(e, l), mt(h, e, l), Uf;
                v.data === "$?" || hu(), t = Js(e, t, n)
            } else v.data === "$?" ? (t.flags |= 192, t.child = e.child, t = null) : (e = E.treeContext, Le = _t(v.nextSibling), Ie = t, Se = !0, zn = null, Tt = !1, e !== null && (xt[bt++] = Vt, xt[bt++] = kt, xt[bt++] = Ln, Vt = e.id, kt = e.overflow, Ln = t), t = $s(t, l.children), t.flags |= 4096);
            return t
        }
        return a ? (dn(), a = l.fallback, v = t.mode, E = e.child, O = E.sibling, l = qt(E, {
            mode: "hidden",
            children: l.children
        }), l.subtreeFlags = E.subtreeFlags & 65011712, O !== null ? a = qt(O, a) : (a = Mn(a, v, n, null), a.flags |= 2), a.return = t, l.return = t, l.sibling = a, t.child = l, l = a, a = t.child, v = e.child.memoizedState, v === null ? v = Ks(n) : (E = v.cachePool, E !== null ? (O = qe._currentValue, E = E.parent !== O ? {
            parent: O,
            pool: O
        } : E) : E = Oc(), v = {
            baseLanes: v.baseLanes | n,
            cachePool: E
        }), a.memoizedState = v, a.childLanes = Zs(e, h, n), t.memoizedState = Xs, l) : (fn(t), n = e.child, e = n.sibling, n = qt(n, {
            mode: "visible",
            children: l.children
        }), n.return = t, n.sibling = null, e !== null && (h = t.deletions, h === null ? (t.deletions = [e], t.flags |= 16) : h.push(e)), t.child = n, t.memoizedState = null, n)
    }

    function $s(e, t) {
        return t = zi({
            mode: "visible",
            children: t
        }, e.mode), t.return = e, e.child = t
    }

    function zi(e, t) {
        return e = ot(22, e, null, t), e.lanes = 0, e.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        }, e
    }

    function Js(e, t, n) {
        return yl(t, e.child, null, n), e = $s(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
    }

    function Kf(e, t, n) {
        e.lanes |= t;
        var l = e.alternate;
        l !== null && (l.lanes |= t), hs(e.return, t, n)
    }

    function Fs(e, t, n, l, a) {
        var u = e.memoizedState;
        u === null ? e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: l,
            tail: n,
            tailMode: a
        } : (u.isBackwards = t, u.rendering = null, u.renderingStartTime = 0, u.last = l, u.tail = n, u.tailMode = a)
    }

    function Zf(e, t, n) {
        var l = t.pendingProps,
            a = l.revealOrder,
            u = l.tail;
        if (Ke(e, t, l.children, n), l = Ve.current, (l & 2) !== 0) l = l & 1 | 2, t.flags |= 128;
        else {
            if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null;) {
                if (e.tag === 13) e.memoizedState !== null && Kf(e, n, t);
                else if (e.tag === 19) Kf(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e, e = e.child;
                    continue
                }
                if (e === t) break e;
                for (; e.sibling === null;) {
                    if (e.return === null || e.return === t) break e;
                    e = e.return
                }
                e.sibling.return = e.return, e = e.sibling
            }
            l &= 1
        }
        switch (Z(Ve, l), a) {
            case "forwards":
                for (n = t.child, a = null; n !== null;) e = n.alternate, e !== null && Ai(e) === null && (a = n), n = n.sibling;
                n = a, n === null ? (a = t.child, t.child = null) : (a = n.sibling, n.sibling = null), Fs(t, !1, a, n, u);
                break;
            case "backwards":
                for (n = null, a = t.child, t.child = null; a !== null;) {
                    if (e = a.alternate, e !== null && Ai(e) === null) {
                        t.child = a;
                        break
                    }
                    e = a.sibling, a.sibling = n, n = a, a = e
                }
                Fs(t, !0, n, null, u);
                break;
            case "together":
                Fs(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null
        }
        return t.child
    }

    function Kt(e, t, n) {
        if (e !== null && (t.dependencies = e.dependencies), yn |= t.lanes, (n & t.childLanes) === 0)
            if (e !== null) {
                if (Il(e, t, n, !1), (n & t.childLanes) === 0) return null
            } else return null;
        if (e !== null && t.child !== e.child) throw Error(o(153));
        if (t.child !== null) {
            for (e = t.child, n = qt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = qt(e, e.pendingProps), n.return = t;
            n.sibling = null
        }
        return t.child
    }

    function Ps(e, t) {
        return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && gi(e)))
    }

    function xp(e, t, n) {
        switch (t.tag) {
            case 3:
                Oe(t, t.stateNode.containerInfo), rn(t, qe, e.memoizedState.cache), Pl();
                break;
            case 27:
            case 5:
                _r(t);
                break;
            case 4:
                Oe(t, t.stateNode.containerInfo);
                break;
            case 10:
                rn(t, t.type, t.memoizedProps.value);
                break;
            case 13:
                var l = t.memoizedState;
                if (l !== null) return l.dehydrated !== null ? (fn(t), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? Xf(e, t, n) : (fn(t), e = Kt(e, t, n), e !== null ? e.sibling : null);
                fn(t);
                break;
            case 19:
                var a = (e.flags & 128) !== 0;
                if (l = (n & t.childLanes) !== 0, l || (Il(e, t, n, !1), l = (n & t.childLanes) !== 0), a) {
                    if (l) return Zf(e, t, n);
                    t.flags |= 128
                }
                if (a = t.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), Z(Ve, Ve.current), l) break;
                return null;
            case 22:
            case 23:
                return t.lanes = 0, Vf(e, t, n);
            case 24:
                rn(t, qe, e.memoizedState.cache)
        }
        return Kt(e, t, n)
    }

    function $f(e, t, n) {
        if (e !== null)
            if (e.memoizedProps !== t.pendingProps) Ye = !0;
            else {
                if (!Ps(e, n) && (t.flags & 128) === 0) return Ye = !1, xp(e, t, n);
                Ye = (e.flags & 131072) !== 0
            }
        else Ye = !1, Se && (t.flags & 1048576) !== 0 && Ec(t, mi, t.index);
        switch (t.lanes = 0, t.tag) {
            case 16:
                e: {
                    e = t.pendingProps;
                    var l = t.elementType,
                        a = l._init;
                    if (l = a(l._payload), t.type = l, typeof l == "function") rs(l) ? (e = kn(l, e), t.tag = 1, t = Yf(null, t, l, e, n)) : (t.tag = 0, t = Qs(null, t, l, e, n));
                    else {
                        if (l != null) {
                            if (a = l.$$typeof, a === P) {
                                t.tag = 11, t = Hf(null, t, l, e, n);
                                break e
                            } else if (a === pe) {
                                t.tag = 14, t = Bf(null, t, l, e, n);
                                break e
                            }
                        }
                        throw t = he(l) || l, Error(o(306, t, ""))
                    }
                }
                return t;
            case 0:
                return Qs(e, t, t.type, t.pendingProps, n);
            case 1:
                return l = t.type, a = kn(l, t.pendingProps), Yf(e, t, l, a, n);
            case 3:
                e: {
                    if (Oe(t, t.stateNode.containerInfo), e === null) throw Error(o(387));l = t.pendingProps;
                    var u = t.memoizedState;a = u.element,
                    bs(e, t),
                    ra(t, l, null, n);
                    var h = t.memoizedState;
                    if (l = h.cache, rn(t, qe, l), l !== u.cache && ms(t, [qe], n, !0), ia(), l = h.element, u.isDehydrated)
                        if (u = {
                                element: l,
                                isDehydrated: !1,
                                cache: h.cache
                            }, t.updateQueue.baseState = u, t.memoizedState = u, t.flags & 256) {
                            t = Qf(e, t, l, n);
                            break e
                        } else if (l !== a) {
                        a = yt(Error(o(424)), t), Wl(a), t = Qf(e, t, l, n);
                        break e
                    } else {
                        switch (e = t.stateNode.containerInfo, e.nodeType) {
                            case 9:
                                e = e.body;
                                break;
                            default:
                                e = e.nodeName === "HTML" ? e.ownerDocument.body : e
                        }
                        for (Le = _t(e.firstChild), Ie = t, Se = !0, zn = null, Tt = !0, n = _f(t, null, l, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling
                    } else {
                        if (Pl(), l === a) {
                            t = Kt(e, t, n);
                            break e
                        }
                        Ke(e, t, l, n)
                    }
                    t = t.child
                }
                return t;
            case 26:
                return Di(e, t), e === null ? (n = Wd(t.type, null, t.pendingProps, null)) ? t.memoizedState = n : Se || (n = t.type, e = t.pendingProps, l = Ji(re.current).createElement(n), l[Je] = t, l[et] = e, $e(l, n, e), Ge(l), t.stateNode = l) : t.memoizedState = Wd(t.type, e.memoizedProps, t.pendingProps, e.memoizedState), null;
            case 27:
                return _r(t), e === null && Se && (l = t.stateNode = Jd(t.type, t.pendingProps, re.current), Ie = t, Tt = !0, a = Le, Sn(t.type) ? (Au = a, Le = _t(l.firstChild)) : Le = a), Ke(e, t, t.pendingProps.children, n), Di(e, t), e === null && (t.flags |= 4194304), t.child;
            case 5:
                return e === null && Se && ((a = l = Le) && (l = Zp(l, t.type, t.pendingProps, Tt), l !== null ? (t.stateNode = l, Ie = t, Le = _t(l.firstChild), Tt = !1, a = !0) : a = !1), a || Un(t)), _r(t), a = t.type, u = t.pendingProps, h = e !== null ? e.memoizedProps : null, l = u.children, Ru(a, u) ? l = null : h !== null && Ru(a, h) && (t.flags |= 32), t.memoizedState !== null && (a = _s(e, t, fp, null, null, n), ja._currentValue = a), Di(e, t), Ke(e, t, l, n), t.child;
            case 6:
                return e === null && Se && ((e = n = Le) && (n = $p(n, t.pendingProps, Tt), n !== null ? (t.stateNode = n, Ie = t, Le = null, e = !0) : e = !1), e || Un(t)), null;
            case 13:
                return Xf(e, t, n);
            case 4:
                return Oe(t, t.stateNode.containerInfo), l = t.pendingProps, e === null ? t.child = yl(t, null, l, n) : Ke(e, t, l, n), t.child;
            case 11:
                return Hf(e, t, t.type, t.pendingProps, n);
            case 7:
                return Ke(e, t, t.pendingProps, n), t.child;
            case 8:
                return Ke(e, t, t.pendingProps.children, n), t.child;
            case 12:
                return Ke(e, t, t.pendingProps.children, n), t.child;
            case 10:
                return l = t.pendingProps, rn(t, t.type, l.value), Ke(e, t, l.children, n), t.child;
            case 9:
                return a = t.type._context, l = t.pendingProps.children, Bn(t), a = Fe(a), l = l(a), t.flags |= 1, Ke(e, t, l, n), t.child;
            case 14:
                return Bf(e, t, t.type, t.pendingProps, n);
            case 15:
                return qf(e, t, t.type, t.pendingProps, n);
            case 19:
                return Zf(e, t, n);
            case 31:
                return l = t.pendingProps, n = t.mode, l = {
                    mode: l.mode,
                    children: l.children
                }, e === null ? (n = zi(l, n), n.ref = t.ref, t.child = n, n.return = t, t = n) : (n = qt(e.child, l), n.ref = t.ref, t.child = n, n.return = t, t = n), t;
            case 22:
                return Vf(e, t, n);
            case 24:
                return Bn(t), l = Fe(qe), e === null ? (a = ys(), a === null && (a = Te, u = gs(), a.pooledCache = u, u.refCount++, u !== null && (a.pooledCacheLanes |= n), a = u), t.memoizedState = {
                    parent: l,
                    cache: a
                }, xs(t), rn(t, qe, a)) : ((e.lanes & n) !== 0 && (bs(e, t), ra(t, null, null, n), ia()), a = e.memoizedState, u = t.memoizedState, a.parent !== l ? (a = {
                    parent: l,
                    cache: l
                }, t.memoizedState = a, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = a), rn(t, qe, l)) : (l = u.cache, rn(t, qe, l), l !== a.cache && ms(t, [qe], n, !0))), Ke(e, t, t.pendingProps.children, n), t.child;
            case 29:
                throw t.pendingProps
        }
        throw Error(o(156, t.tag))
    }

    function Zt(e) {
        e.flags |= 4
    }

    function Jf(e, t) {
        if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0) e.flags &= -16777217;
        else if (e.flags |= 16777216, !lh(t)) {
            if (t = St.current, t !== null && ((ge & 4194048) === ge ? Ot !== null : (ge & 62914560) !== ge && (ge & 536870912) === 0 || t !== Ot)) throw la = vs, Ac;
            e.flags |= 8192
        }
    }

    function Ui(e, t) {
        t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? _o() : 536870912, e.lanes |= t, Sl |= t)
    }

    function ha(e, t) {
        if (!Se) switch (e.tailMode) {
            case "hidden":
                t = e.tail;
                for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
                n === null ? e.tail = null : n.sibling = null;
                break;
            case "collapsed":
                n = e.tail;
                for (var l = null; n !== null;) n.alternate !== null && (l = n), n = n.sibling;
                l === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : l.sibling = null
        }
    }

    function Me(e) {
        var t = e.alternate !== null && e.alternate.child === e.child,
            n = 0,
            l = 0;
        if (t)
            for (var a = e.child; a !== null;) n |= a.lanes | a.childLanes, l |= a.subtreeFlags & 65011712, l |= a.flags & 65011712, a.return = e, a = a.sibling;
        else
            for (a = e.child; a !== null;) n |= a.lanes | a.childLanes, l |= a.subtreeFlags, l |= a.flags, a.return = e, a = a.sibling;
        return e.subtreeFlags |= l, e.childLanes = n, t
    }

    function bp(e, t, n) {
        var l = t.pendingProps;
        switch (cs(t), t.tag) {
            case 31:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
                return Me(t), null;
            case 1:
                return Me(t), null;
            case 3:
                return n = t.stateNode, l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), Yt(qe), tn(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (Fl(t) ? Zt(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, _c())), Me(t), null;
            case 26:
                return n = t.memoizedState, e === null ? (Zt(t), n !== null ? (Me(t), Jf(t, n)) : (Me(t), t.flags &= -16777217)) : n ? n !== e.memoizedState ? (Zt(t), Me(t), Jf(t, n)) : (Me(t), t.flags &= -16777217) : (e.memoizedProps !== l && Zt(t), Me(t), t.flags &= -16777217), null;
            case 27:
                Za(t), n = re.current;
                var a = t.type;
                if (e !== null && t.stateNode != null) e.memoizedProps !== l && Zt(t);
                else {
                    if (!l) {
                        if (t.stateNode === null) throw Error(o(166));
                        return Me(t), null
                    }
                    e = ee.current, Fl(t) ? Nc(t) : (e = Jd(a, l, n), t.stateNode = e, Zt(t))
                }
                return Me(t), null;
            case 5:
                if (Za(t), n = t.type, e !== null && t.stateNode != null) e.memoizedProps !== l && Zt(t);
                else {
                    if (!l) {
                        if (t.stateNode === null) throw Error(o(166));
                        return Me(t), null
                    }
                    if (e = ee.current, Fl(t)) Nc(t);
                    else {
                        switch (a = Ji(re.current), e) {
                            case 1:
                                e = a.createElementNS("http://www.w3.org/2000/svg", n);
                                break;
                            case 2:
                                e = a.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                                break;
                            default:
                                switch (n) {
                                    case "svg":
                                        e = a.createElementNS("http://www.w3.org/2000/svg", n);
                                        break;
                                    case "math":
                                        e = a.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                                        break;
                                    case "script":
                                        e = a.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild);
                                        break;
                                    case "select":
                                        e = typeof l.is == "string" ? a.createElement("select", {
                                            is: l.is
                                        }) : a.createElement("select"), l.multiple ? e.multiple = !0 : l.size && (e.size = l.size);
                                        break;
                                    default:
                                        e = typeof l.is == "string" ? a.createElement(n, {
                                            is: l.is
                                        }) : a.createElement(n)
                                }
                        }
                        e[Je] = t, e[et] = l;
                        e: for (a = t.child; a !== null;) {
                            if (a.tag === 5 || a.tag === 6) e.appendChild(a.stateNode);
                            else if (a.tag !== 4 && a.tag !== 27 && a.child !== null) {
                                a.child.return = a, a = a.child;
                                continue
                            }
                            if (a === t) break e;
                            for (; a.sibling === null;) {
                                if (a.return === null || a.return === t) break e;
                                a = a.return
                            }
                            a.sibling.return = a.return, a = a.sibling
                        }
                        t.stateNode = e;
                        e: switch ($e(e, n, l), n) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                e = !!l.autoFocus;
                                break e;
                            case "img":
                                e = !0;
                                break e;
                            default:
                                e = !1
                        }
                        e && Zt(t)
                    }
                }
                return Me(t), t.flags &= -16777217, null;
            case 6:
                if (e && t.stateNode != null) e.memoizedProps !== l && Zt(t);
                else {
                    if (typeof l != "string" && t.stateNode === null) throw Error(o(166));
                    if (e = re.current, Fl(t)) {
                        if (e = t.stateNode, n = t.memoizedProps, l = null, a = Ie, a !== null) switch (a.tag) {
                            case 27:
                            case 5:
                                l = a.memoizedProps
                        }
                        e[Je] = t, e = !!(e.nodeValue === n || l !== null && l.suppressHydrationWarning === !0 || Gd(e.nodeValue, n)), e || Un(t)
                    } else e = Ji(e).createTextNode(l), e[Je] = t, t.stateNode = e
                }
                return Me(t), null;
            case 13:
                if (l = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                    if (a = Fl(t), l !== null && l.dehydrated !== null) {
                        if (e === null) {
                            if (!a) throw Error(o(318));
                            if (a = t.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(o(317));
                            a[Je] = t
                        } else Pl(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
                        Me(t), a = !1
                    } else a = _c(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), a = !0;
                    if (!a) return t.flags & 256 ? (Xt(t), t) : (Xt(t), null)
                }
                if (Xt(t), (t.flags & 128) !== 0) return t.lanes = n, t;
                if (n = l !== null, e = e !== null && e.memoizedState !== null, n) {
                    l = t.child, a = null, l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (a = l.alternate.memoizedState.cachePool.pool);
                    var u = null;
                    l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), u !== a && (l.flags |= 2048)
                }
                return n !== e && n && (t.child.flags |= 8192), Ui(t, t.updateQueue), Me(t), null;
            case 4:
                return tn(), e === null && wu(t.stateNode.containerInfo), Me(t), null;
            case 10:
                return Yt(t.type), Me(t), null;
            case 19:
                if ($(Ve), a = t.memoizedState, a === null) return Me(t), null;
                if (l = (t.flags & 128) !== 0, u = a.rendering, u === null)
                    if (l) ha(a, !1);
                    else {
                        if (De !== 0 || e !== null && (e.flags & 128) !== 0)
                            for (e = t.child; e !== null;) {
                                if (u = Ai(e), u !== null) {
                                    for (t.flags |= 128, ha(a, !1), e = u.updateQueue, t.updateQueue = e, Ui(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null;) wc(n, e), n = n.sibling;
                                    return Z(Ve, Ve.current & 1 | 2), t.child
                                }
                                e = e.sibling
                            }
                        a.tail !== null && jt() > qi && (t.flags |= 128, l = !0, ha(a, !1), t.lanes = 4194304)
                    }
                else {
                    if (!l)
                        if (e = Ai(u), e !== null) {
                            if (t.flags |= 128, l = !0, e = e.updateQueue, t.updateQueue = e, Ui(t, e), ha(a, !0), a.tail === null && a.tailMode === "hidden" && !u.alternate && !Se) return Me(t), null
                        } else 2 * jt() - a.renderingStartTime > qi && n !== 536870912 && (t.flags |= 128, l = !0, ha(a, !1), t.lanes = 4194304);
                    a.isBackwards ? (u.sibling = t.child, t.child = u) : (e = a.last, e !== null ? e.sibling = u : t.child = u, a.last = u)
                }
                return a.tail !== null ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = jt(), t.sibling = null, e = Ve.current, Z(Ve, l ? e & 1 | 2 : e & 1), t) : (Me(t), null);
            case 22:
            case 23:
                return Xt(t), Ns(), l = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== l && (t.flags |= 8192) : l && (t.flags |= 8192), l ? (n & 536870912) !== 0 && (t.flags & 128) === 0 && (Me(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Me(t), n = t.updateQueue, n !== null && Ui(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== n && (t.flags |= 2048), e !== null && $(qn), null;
            case 24:
                return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), Yt(qe), Me(t), null;
            case 25:
                return null;
            case 30:
                return null
        }
        throw Error(o(156, t.tag))
    }

    function Sp(e, t) {
        switch (cs(t), t.tag) {
            case 1:
                return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 3:
                return Yt(qe), tn(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
            case 26:
            case 27:
            case 5:
                return Za(t), null;
            case 13:
                if (Xt(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                    if (t.alternate === null) throw Error(o(340));
                    Pl()
                }
                return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 19:
                return $(Ve), null;
            case 4:
                return tn(), null;
            case 10:
                return Yt(t.type), null;
            case 22:
            case 23:
                return Xt(t), Ns(), e !== null && $(qn), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 24:
                return Yt(qe), null;
            case 25:
                return null;
            default:
                return null
        }
    }

    function Ff(e, t) {
        switch (cs(t), t.tag) {
            case 3:
                Yt(qe), tn();
                break;
            case 26:
            case 27:
            case 5:
                Za(t);
                break;
            case 4:
                tn();
                break;
            case 13:
                Xt(t);
                break;
            case 19:
                $(Ve);
                break;
            case 10:
                Yt(t.type);
                break;
            case 22:
            case 23:
                Xt(t), Ns(), e !== null && $(qn);
                break;
            case 24:
                Yt(qe)
        }
    }

    function ma(e, t) {
        try {
            var n = t.updateQueue,
                l = n !== null ? n.lastEffect : null;
            if (l !== null) {
                var a = l.next;
                n = a;
                do {
                    if ((n.tag & e) === e) {
                        l = void 0;
                        var u = n.create,
                            h = n.inst;
                        l = u(), h.destroy = l
                    }
                    n = n.next
                } while (n !== a)
            }
        } catch (v) {
            je(t, t.return, v)
        }
    }

    function hn(e, t, n) {
        try {
            var l = t.updateQueue,
                a = l !== null ? l.lastEffect : null;
            if (a !== null) {
                var u = a.next;
                l = u;
                do {
                    if ((l.tag & e) === e) {
                        var h = l.inst,
                            v = h.destroy;
                        if (v !== void 0) {
                            h.destroy = void 0, a = t;
                            var E = n,
                                O = v;
                            try {
                                O()
                            } catch (H) {
                                je(a, E, H)
                            }
                        }
                    }
                    l = l.next
                } while (l !== u)
            }
        } catch (H) {
            je(t, t.return, H)
        }
    }

    function Pf(e) {
        var t = e.updateQueue;
        if (t !== null) {
            var n = e.stateNode;
            try {
                Hc(t, n)
            } catch (l) {
                je(e, e.return, l)
            }
        }
    }

    function Wf(e, t, n) {
        n.props = kn(e.type, e.memoizedProps), n.state = e.memoizedState;
        try {
            n.componentWillUnmount()
        } catch (l) {
            je(e, t, l)
        }
    }

    function ga(e, t) {
        try {
            var n = e.ref;
            if (n !== null) {
                switch (e.tag) {
                    case 26:
                    case 27:
                    case 5:
                        var l = e.stateNode;
                        break;
                    case 30:
                        l = e.stateNode;
                        break;
                    default:
                        l = e.stateNode
                }
                typeof n == "function" ? e.refCleanup = n(l) : n.current = l
            }
        } catch (a) {
            je(e, t, a)
        }
    }

    function At(e, t) {
        var n = e.ref,
            l = e.refCleanup;
        if (n !== null)
            if (typeof l == "function") try {
                l()
            } catch (a) {
                je(e, t, a)
            } finally {
                e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null)
            } else if (typeof n == "function") try {
                n(null)
            } catch (a) {
                je(e, t, a)
            } else n.current = null
    }

    function If(e) {
        var t = e.type,
            n = e.memoizedProps,
            l = e.stateNode;
        try {
            e: switch (t) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                    n.autoFocus && l.focus();
                    break e;
                case "img":
                    n.src ? l.src = n.src : n.srcSet && (l.srcset = n.srcSet)
            }
        }
        catch (a) {
            je(e, e.return, a)
        }
    }

    function Ws(e, t, n) {
        try {
            var l = e.stateNode;
            Gp(l, e.type, n, t), l[et] = t
        } catch (a) {
            je(e, e.return, a)
        }
    }

    function ed(e) {
        return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Sn(e.type) || e.tag === 4
    }

    function Is(e) {
        e: for (;;) {
            for (; e.sibling === null;) {
                if (e.return === null || ed(e.return)) return null;
                e = e.return
            }
            for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
                if (e.tag === 27 && Sn(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
                e.child.return = e, e = e.child
            }
            if (!(e.flags & 2)) return e.stateNode
        }
    }

    function eu(e, t, n) {
        var l = e.tag;
        if (l === 5 || l === 6) e = e.stateNode, t ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(e, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, t.appendChild(e), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = $i));
        else if (l !== 4 && (l === 27 && Sn(e.type) && (n = e.stateNode, t = null), e = e.child, e !== null))
            for (eu(e, t, n), e = e.sibling; e !== null;) eu(e, t, n), e = e.sibling
    }

    function Hi(e, t, n) {
        var l = e.tag;
        if (l === 5 || l === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
        else if (l !== 4 && (l === 27 && Sn(e.type) && (n = e.stateNode), e = e.child, e !== null))
            for (Hi(e, t, n), e = e.sibling; e !== null;) Hi(e, t, n), e = e.sibling
    }

    function td(e) {
        var t = e.stateNode,
            n = e.memoizedProps;
        try {
            for (var l = e.type, a = t.attributes; a.length;) t.removeAttributeNode(a[0]);
            $e(t, l, n), t[Je] = e, t[et] = n
        } catch (u) {
            je(e, e.return, u)
        }
    }
    var $t = !1,
        Ue = !1,
        tu = !1,
        nd = typeof WeakSet == "function" ? WeakSet : Set,
        Qe = null;

    function wp(e, t) {
        if (e = e.containerInfo, Cu = tr, e = dc(e), Ir(e)) {
            if ("selectionStart" in e) var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
            else e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var l = n.getSelection && n.getSelection();
                if (l && l.rangeCount !== 0) {
                    n = l.anchorNode;
                    var a = l.anchorOffset,
                        u = l.focusNode;
                    l = l.focusOffset;
                    try {
                        n.nodeType, u.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var h = 0,
                        v = -1,
                        E = -1,
                        O = 0,
                        H = 0,
                        k = e,
                        M = null;
                    t: for (;;) {
                        for (var L; k !== n || a !== 0 && k.nodeType !== 3 || (v = h + a), k !== u || l !== 0 && k.nodeType !== 3 || (E = h + l), k.nodeType === 3 && (h += k.nodeValue.length), (L = k.firstChild) !== null;) M = k, k = L;
                        for (;;) {
                            if (k === e) break t;
                            if (M === n && ++O === a && (v = h), M === u && ++H === l && (E = h), (L = k.nextSibling) !== null) break;
                            k = M, M = k.parentNode
                        }
                        k = L
                    }
                    n = v === -1 || E === -1 ? null : {
                        start: v,
                        end: E
                    }
                } else n = null
            }
            n = n || {
                start: 0,
                end: 0
            }
        } else n = null;
        for (_u = {
                focusedElem: e,
                selectionRange: n
            }, tr = !1, Qe = t; Qe !== null;)
            if (t = Qe, e = t.child, (t.subtreeFlags & 1024) !== 0 && e !== null) e.return = t, Qe = e;
            else
                for (; Qe !== null;) {
                    switch (t = Qe, u = t.alternate, e = t.flags, t.tag) {
                        case 0:
                            break;
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if ((e & 1024) !== 0 && u !== null) {
                                e = void 0, n = t, a = u.memoizedProps, u = u.memoizedState, l = n.stateNode;
                                try {
                                    var ae = kn(n.type, a, n.elementType === n.type);
                                    e = l.getSnapshotBeforeUpdate(ae, u), l.__reactInternalSnapshotBeforeUpdate = e
                                } catch (te) {
                                    je(n, n.return, te)
                                }
                            }
                            break;
                        case 3:
                            if ((e & 1024) !== 0) {
                                if (e = t.stateNode.containerInfo, n = e.nodeType, n === 9) Tu(e);
                                else if (n === 1) switch (e.nodeName) {
                                    case "HEAD":
                                    case "HTML":
                                    case "BODY":
                                        Tu(e);
                                        break;
                                    default:
                                        e.textContent = ""
                                }
                            }
                            break;
                        case 5:
                        case 26:
                        case 27:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            if ((e & 1024) !== 0) throw Error(o(163))
                    }
                    if (e = t.sibling, e !== null) {
                        e.return = t.return, Qe = e;
                        break
                    }
                    Qe = t.return
                }
    }

    function ld(e, t, n) {
        var l = n.flags;
        switch (n.tag) {
            case 0:
            case 11:
            case 15:
                mn(e, n), l & 4 && ma(5, n);
                break;
            case 1:
                if (mn(e, n), l & 4)
                    if (e = n.stateNode, t === null) try {
                        e.componentDidMount()
                    } catch (h) {
                        je(n, n.return, h)
                    } else {
                        var a = kn(n.type, t.memoizedProps);
                        t = t.memoizedState;
                        try {
                            e.componentDidUpdate(a, t, e.__reactInternalSnapshotBeforeUpdate)
                        } catch (h) {
                            je(n, n.return, h)
                        }
                    }
                l & 64 && Pf(n), l & 512 && ga(n, n.return);
                break;
            case 3:
                if (mn(e, n), l & 64 && (e = n.updateQueue, e !== null)) {
                    if (t = null, n.child !== null) switch (n.child.tag) {
                        case 27:
                        case 5:
                            t = n.child.stateNode;
                            break;
                        case 1:
                            t = n.child.stateNode
                    }
                    try {
                        Hc(e, t)
                    } catch (h) {
                        je(n, n.return, h)
                    }
                }
                break;
            case 27:
                t === null && l & 4 && td(n);
            case 26:
            case 5:
                mn(e, n), t === null && l & 4 && If(n), l & 512 && ga(n, n.return);
                break;
            case 12:
                mn(e, n);
                break;
            case 13:
                mn(e, n), l & 4 && rd(e, n), l & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (n = Ap.bind(null, n), Jp(e, n))));
                break;
            case 22:
                if (l = n.memoizedState !== null || $t, !l) {
                    t = t !== null && t.memoizedState !== null || Ue, a = $t;
                    var u = Ue;
                    $t = l, (Ue = t) && !u ? gn(e, n, (n.subtreeFlags & 8772) !== 0) : mn(e, n), $t = a, Ue = u
                }
                break;
            case 30:
                break;
            default:
                mn(e, n)
        }
    }

    function ad(e) {
        var t = e.alternate;
        t !== null && (e.alternate = null, ad(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Dr(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
    }
    var Ae = null,
        lt = !1;

    function Jt(e, t, n) {
        for (n = n.child; n !== null;) id(e, t, n), n = n.sibling
    }

    function id(e, t, n) {
        if (rt && typeof rt.onCommitFiberUnmount == "function") try {
            rt.onCommitFiberUnmount(Ul, n)
        } catch {}
        switch (n.tag) {
            case 26:
                Ue || At(n, t), Jt(e, t, n), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode, n.parentNode.removeChild(n));
                break;
            case 27:
                Ue || At(n, t);
                var l = Ae,
                    a = lt;
                Sn(n.type) && (Ae = n.stateNode, lt = !1), Jt(e, t, n), Na(n.stateNode), Ae = l, lt = a;
                break;
            case 5:
                Ue || At(n, t);
            case 6:
                if (l = Ae, a = lt, Ae = null, Jt(e, t, n), Ae = l, lt = a, Ae !== null)
                    if (lt) try {
                        (Ae.nodeType === 9 ? Ae.body : Ae.nodeName === "HTML" ? Ae.ownerDocument.body : Ae).removeChild(n.stateNode)
                    } catch (u) {
                        je(n, t, u)
                    } else try {
                        Ae.removeChild(n.stateNode)
                    } catch (u) {
                        je(n, t, u)
                    }
                break;
            case 18:
                Ae !== null && (lt ? (e = Ae, Zd(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, n.stateNode), Ma(e)) : Zd(Ae, n.stateNode));
                break;
            case 4:
                l = Ae, a = lt, Ae = n.stateNode.containerInfo, lt = !0, Jt(e, t, n), Ae = l, lt = a;
                break;
            case 0:
            case 11:
            case 14:
            case 15:
                Ue || hn(2, n, t), Ue || hn(4, n, t), Jt(e, t, n);
                break;
            case 1:
                Ue || (At(n, t), l = n.stateNode, typeof l.componentWillUnmount == "function" && Wf(n, t, l)), Jt(e, t, n);
                break;
            case 21:
                Jt(e, t, n);
                break;
            case 22:
                Ue = (l = Ue) || n.memoizedState !== null, Jt(e, t, n), Ue = l;
                break;
            default:
                Jt(e, t, n)
        }
    }

    function rd(e, t) {
        if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null)))) try {
            Ma(e)
        } catch (n) {
            je(t, t.return, n)
        }
    }

    function Ep(e) {
        switch (e.tag) {
            case 13:
            case 19:
                var t = e.stateNode;
                return t === null && (t = e.stateNode = new nd), t;
            case 22:
                return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new nd), t;
            default:
                throw Error(o(435, e.tag))
        }
    }

    function nu(e, t) {
        var n = Ep(e);
        t.forEach(function(l) {
            var a = Mp.bind(null, e, l);
            n.has(l) || (n.add(l), l.then(a, a))
        })
    }

    function ct(e, t) {
        var n = t.deletions;
        if (n !== null)
            for (var l = 0; l < n.length; l++) {
                var a = n[l],
                    u = e,
                    h = t,
                    v = h;
                e: for (; v !== null;) {
                    switch (v.tag) {
                        case 27:
                            if (Sn(v.type)) {
                                Ae = v.stateNode, lt = !1;
                                break e
                            }
                            break;
                        case 5:
                            Ae = v.stateNode, lt = !1;
                            break e;
                        case 3:
                        case 4:
                            Ae = v.stateNode.containerInfo, lt = !0;
                            break e
                    }
                    v = v.return
                }
                if (Ae === null) throw Error(o(160));
                id(u, h, a), Ae = null, lt = !1, u = a.alternate, u !== null && (u.return = null), a.return = null
            }
        if (t.subtreeFlags & 13878)
            for (t = t.child; t !== null;) sd(t, e), t = t.sibling
    }
    var Ct = null;

    function sd(e, t) {
        var n = e.alternate,
            l = e.flags;
        switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                ct(t, e), ft(e), l & 4 && (hn(3, e, e.return), ma(3, e), hn(5, e, e.return));
                break;
            case 1:
                ct(t, e), ft(e), l & 512 && (Ue || n === null || At(n, n.return)), l & 64 && $t && (e = e.updateQueue, e !== null && (l = e.callbacks, l !== null && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = n === null ? l : n.concat(l))));
                break;
            case 26:
                var a = Ct;
                if (ct(t, e), ft(e), l & 512 && (Ue || n === null || At(n, n.return)), l & 4) {
                    var u = n !== null ? n.memoizedState : null;
                    if (l = e.memoizedState, n === null)
                        if (l === null)
                            if (e.stateNode === null) {
                                e: {
                                    l = e.type,
                                    n = e.memoizedProps,
                                    a = a.ownerDocument || a;t: switch (l) {
                                        case "title":
                                            u = a.getElementsByTagName("title")[0], (!u || u[ql] || u[Je] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = a.createElement(l), a.head.insertBefore(u, a.querySelector("head > title"))), $e(u, l, n), u[Je] = e, Ge(u), l = u;
                                            break e;
                                        case "link":
                                            var h = th("link", "href", a).get(l + (n.href || ""));
                                            if (h) {
                                                for (var v = 0; v < h.length; v++)
                                                    if (u = h[v], u.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && u.getAttribute("rel") === (n.rel == null ? null : n.rel) && u.getAttribute("title") === (n.title == null ? null : n.title) && u.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                                                        h.splice(v, 1);
                                                        break t
                                                    }
                                            }
                                            u = a.createElement(l), $e(u, l, n), a.head.appendChild(u);
                                            break;
                                        case "meta":
                                            if (h = th("meta", "content", a).get(l + (n.content || ""))) {
                                                for (v = 0; v < h.length; v++)
                                                    if (u = h[v], u.getAttribute("content") === (n.content == null ? null : "" + n.content) && u.getAttribute("name") === (n.name == null ? null : n.name) && u.getAttribute("property") === (n.property == null ? null : n.property) && u.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && u.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                                                        h.splice(v, 1);
                                                        break t
                                                    }
                                            }
                                            u = a.createElement(l), $e(u, l, n), a.head.appendChild(u);
                                            break;
                                        default:
                                            throw Error(o(468, l))
                                    }
                                    u[Je] = e,
                                    Ge(u),
                                    l = u
                                }
                                e.stateNode = l
                            }
                    else nh(a, e.type, e.stateNode);
                    else e.stateNode = eh(a, l, e.memoizedProps);
                    else u !== l ? (u === null ? n.stateNode !== null && (n = n.stateNode, n.parentNode.removeChild(n)) : u.count--, l === null ? nh(a, e.type, e.stateNode) : eh(a, l, e.memoizedProps)) : l === null && e.stateNode !== null && Ws(e, e.memoizedProps, n.memoizedProps)
                }
                break;
            case 27:
                ct(t, e), ft(e), l & 512 && (Ue || n === null || At(n, n.return)), n !== null && l & 4 && Ws(e, e.memoizedProps, n.memoizedProps);
                break;
            case 5:
                if (ct(t, e), ft(e), l & 512 && (Ue || n === null || At(n, n.return)), e.flags & 32) {
                    a = e.stateNode;
                    try {
                        In(a, "")
                    } catch (L) {
                        je(e, e.return, L)
                    }
                }
                l & 4 && e.stateNode != null && (a = e.memoizedProps, Ws(e, a, n !== null ? n.memoizedProps : a)), l & 1024 && (tu = !0);
                break;
            case 6:
                if (ct(t, e), ft(e), l & 4) {
                    if (e.stateNode === null) throw Error(o(162));
                    l = e.memoizedProps, n = e.stateNode;
                    try {
                        n.nodeValue = l
                    } catch (L) {
                        je(e, e.return, L)
                    }
                }
                break;
            case 3:
                if (Wi = null, a = Ct, Ct = Fi(t.containerInfo), ct(t, e), Ct = a, ft(e), l & 4 && n !== null && n.memoizedState.isDehydrated) try {
                    Ma(t.containerInfo)
                } catch (L) {
                    je(e, e.return, L)
                }
                tu && (tu = !1, ud(e));
                break;
            case 4:
                l = Ct, Ct = Fi(e.stateNode.containerInfo), ct(t, e), ft(e), Ct = l;
                break;
            case 12:
                ct(t, e), ft(e);
                break;
            case 13:
                ct(t, e), ft(e), e.child.flags & 8192 && e.memoizedState !== null != (n !== null && n.memoizedState !== null) && (uu = jt()), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, nu(e, l)));
                break;
            case 22:
                a = e.memoizedState !== null;
                var E = n !== null && n.memoizedState !== null,
                    O = $t,
                    H = Ue;
                if ($t = O || a, Ue = H || E, ct(t, e), Ue = H, $t = O, ft(e), l & 8192) e: for (t = e.stateNode, t._visibility = a ? t._visibility & -2 : t._visibility | 1, a && (n === null || E || $t || Ue || Gn(e)), n = null, t = e;;) {
                    if (t.tag === 5 || t.tag === 26) {
                        if (n === null) {
                            E = n = t;
                            try {
                                if (u = E.stateNode, a) h = u.style, typeof h.setProperty == "function" ? h.setProperty("display", "none", "important") : h.display = "none";
                                else {
                                    v = E.stateNode;
                                    var k = E.memoizedProps.style,
                                        M = k != null && k.hasOwnProperty("display") ? k.display : null;
                                    v.style.display = M == null || typeof M == "boolean" ? "" : ("" + M).trim()
                                }
                            } catch (L) {
                                je(E, E.return, L)
                            }
                        }
                    } else if (t.tag === 6) {
                        if (n === null) {
                            E = t;
                            try {
                                E.stateNode.nodeValue = a ? "" : E.memoizedProps
                            } catch (L) {
                                je(E, E.return, L)
                            }
                        }
                    } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
                        t.child.return = t, t = t.child;
                        continue
                    }
                    if (t === e) break e;
                    for (; t.sibling === null;) {
                        if (t.return === null || t.return === e) break e;
                        n === t && (n = null), t = t.return
                    }
                    n === t && (n = null), t.sibling.return = t.return, t = t.sibling
                }
                l & 4 && (l = e.updateQueue, l !== null && (n = l.retryQueue, n !== null && (l.retryQueue = null, nu(e, n))));
                break;
            case 19:
                ct(t, e), ft(e), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, nu(e, l)));
                break;
            case 30:
                break;
            case 21:
                break;
            default:
                ct(t, e), ft(e)
        }
    }

    function ft(e) {
        var t = e.flags;
        if (t & 2) {
            try {
                for (var n, l = e.return; l !== null;) {
                    if (ed(l)) {
                        n = l;
                        break
                    }
                    l = l.return
                }
                if (n == null) throw Error(o(160));
                switch (n.tag) {
                    case 27:
                        var a = n.stateNode,
                            u = Is(e);
                        Hi(e, u, a);
                        break;
                    case 5:
                        var h = n.stateNode;
                        n.flags & 32 && (In(h, ""), n.flags &= -33);
                        var v = Is(e);
                        Hi(e, v, h);
                        break;
                    case 3:
                    case 4:
                        var E = n.stateNode.containerInfo,
                            O = Is(e);
                        eu(e, O, E);
                        break;
                    default:
                        throw Error(o(161))
                }
            } catch (H) {
                je(e, e.return, H)
            }
            e.flags &= -3
        }
        t & 4096 && (e.flags &= -4097)
    }

    function ud(e) {
        if (e.subtreeFlags & 1024)
            for (e = e.child; e !== null;) {
                var t = e;
                ud(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling
            }
    }

    function mn(e, t) {
        if (t.subtreeFlags & 8772)
            for (t = t.child; t !== null;) ld(e, t.alternate, t), t = t.sibling
    }

    function Gn(e) {
        for (e = e.child; e !== null;) {
            var t = e;
            switch (t.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                    hn(4, t, t.return), Gn(t);
                    break;
                case 1:
                    At(t, t.return);
                    var n = t.stateNode;
                    typeof n.componentWillUnmount == "function" && Wf(t, t.return, n), Gn(t);
                    break;
                case 27:
                    Na(t.stateNode);
                case 26:
                case 5:
                    At(t, t.return), Gn(t);
                    break;
                case 22:
                    t.memoizedState === null && Gn(t);
                    break;
                case 30:
                    Gn(t);
                    break;
                default:
                    Gn(t)
            }
            e = e.sibling
        }
    }

    function gn(e, t, n) {
        for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null;) {
            var l = t.alternate,
                a = e,
                u = t,
                h = u.flags;
            switch (u.tag) {
                case 0:
                case 11:
                case 15:
                    gn(a, u, n), ma(4, u);
                    break;
                case 1:
                    if (gn(a, u, n), l = u, a = l.stateNode, typeof a.componentDidMount == "function") try {
                        a.componentDidMount()
                    } catch (O) {
                        je(l, l.return, O)
                    }
                    if (l = u, a = l.updateQueue, a !== null) {
                        var v = l.stateNode;
                        try {
                            var E = a.shared.hiddenCallbacks;
                            if (E !== null)
                                for (a.shared.hiddenCallbacks = null, a = 0; a < E.length; a++) Uc(E[a], v)
                        } catch (O) {
                            je(l, l.return, O)
                        }
                    }
                    n && h & 64 && Pf(u), ga(u, u.return);
                    break;
                case 27:
                    td(u);
                case 26:
                case 5:
                    gn(a, u, n), n && l === null && h & 4 && If(u), ga(u, u.return);
                    break;
                case 12:
                    gn(a, u, n);
                    break;
                case 13:
                    gn(a, u, n), n && h & 4 && rd(a, u);
                    break;
                case 22:
                    u.memoizedState === null && gn(a, u, n), ga(u, u.return);
                    break;
                case 30:
                    break;
                default:
                    gn(a, u, n)
            }
            t = t.sibling
        }
    }

    function lu(e, t) {
        var n = null;
        e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== n && (e != null && e.refCount++, n != null && ea(n))
    }

    function au(e, t) {
        e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && ea(e))
    }

    function Mt(e, t, n, l) {
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null;) od(e, t, n, l), t = t.sibling
    }

    function od(e, t, n, l) {
        var a = t.flags;
        switch (t.tag) {
            case 0:
            case 11:
            case 15:
                Mt(e, t, n, l), a & 2048 && ma(9, t);
                break;
            case 1:
                Mt(e, t, n, l);
                break;
            case 3:
                Mt(e, t, n, l), a & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && ea(e)));
                break;
            case 12:
                if (a & 2048) {
                    Mt(e, t, n, l), e = t.stateNode;
                    try {
                        var u = t.memoizedProps,
                            h = u.id,
                            v = u.onPostCommit;
                        typeof v == "function" && v(h, t.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0)
                    } catch (E) {
                        je(t, t.return, E)
                    }
                } else Mt(e, t, n, l);
                break;
            case 13:
                Mt(e, t, n, l);
                break;
            case 23:
                break;
            case 22:
                u = t.stateNode, h = t.alternate, t.memoizedState !== null ? u._visibility & 2 ? Mt(e, t, n, l) : pa(e, t) : u._visibility & 2 ? Mt(e, t, n, l) : (u._visibility |= 2, vl(e, t, n, l, (t.subtreeFlags & 10256) !== 0)), a & 2048 && lu(h, t);
                break;
            case 24:
                Mt(e, t, n, l), a & 2048 && au(t.alternate, t);
                break;
            default:
                Mt(e, t, n, l)
        }
    }

    function vl(e, t, n, l, a) {
        for (a = a && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null;) {
            var u = e,
                h = t,
                v = n,
                E = l,
                O = h.flags;
            switch (h.tag) {
                case 0:
                case 11:
                case 15:
                    vl(u, h, v, E, a), ma(8, h);
                    break;
                case 23:
                    break;
                case 22:
                    var H = h.stateNode;
                    h.memoizedState !== null ? H._visibility & 2 ? vl(u, h, v, E, a) : pa(u, h) : (H._visibility |= 2, vl(u, h, v, E, a)), a && O & 2048 && lu(h.alternate, h);
                    break;
                case 24:
                    vl(u, h, v, E, a), a && O & 2048 && au(h.alternate, h);
                    break;
                default:
                    vl(u, h, v, E, a)
            }
            t = t.sibling
        }
    }

    function pa(e, t) {
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null;) {
                var n = e,
                    l = t,
                    a = l.flags;
                switch (l.tag) {
                    case 22:
                        pa(n, l), a & 2048 && lu(l.alternate, l);
                        break;
                    case 24:
                        pa(n, l), a & 2048 && au(l.alternate, l);
                        break;
                    default:
                        pa(n, l)
                }
                t = t.sibling
            }
    }
    var ya = 8192;

    function xl(e) {
        if (e.subtreeFlags & ya)
            for (e = e.child; e !== null;) cd(e), e = e.sibling
    }

    function cd(e) {
        switch (e.tag) {
            case 26:
                xl(e), e.flags & ya && e.memoizedState !== null && u0(Ct, e.memoizedState, e.memoizedProps);
                break;
            case 5:
                xl(e);
                break;
            case 3:
            case 4:
                var t = Ct;
                Ct = Fi(e.stateNode.containerInfo), xl(e), Ct = t;
                break;
            case 22:
                e.memoizedState === null && (t = e.alternate, t !== null && t.memoizedState !== null ? (t = ya, ya = 16777216, xl(e), ya = t) : xl(e));
                break;
            default:
                xl(e)
        }
    }

    function fd(e) {
        var t = e.alternate;
        if (t !== null && (e = t.child, e !== null)) {
            t.child = null;
            do t = e.sibling, e.sibling = null, e = t; while (e !== null)
        }
    }

    function va(e) {
        var t = e.deletions;
        if ((e.flags & 16) !== 0) {
            if (t !== null)
                for (var n = 0; n < t.length; n++) {
                    var l = t[n];
                    Qe = l, hd(l, e)
                }
            fd(e)
        }
        if (e.subtreeFlags & 10256)
            for (e = e.child; e !== null;) dd(e), e = e.sibling
    }

    function dd(e) {
        switch (e.tag) {
            case 0:
            case 11:
            case 15:
                va(e), e.flags & 2048 && hn(9, e, e.return);
                break;
            case 3:
                va(e);
                break;
            case 12:
                va(e);
                break;
            case 22:
                var t = e.stateNode;
                e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, Bi(e)) : va(e);
                break;
            default:
                va(e)
        }
    }

    function Bi(e) {
        var t = e.deletions;
        if ((e.flags & 16) !== 0) {
            if (t !== null)
                for (var n = 0; n < t.length; n++) {
                    var l = t[n];
                    Qe = l, hd(l, e)
                }
            fd(e)
        }
        for (e = e.child; e !== null;) {
            switch (t = e, t.tag) {
                case 0:
                case 11:
                case 15:
                    hn(8, t, t.return), Bi(t);
                    break;
                case 22:
                    n = t.stateNode, n._visibility & 2 && (n._visibility &= -3, Bi(t));
                    break;
                default:
                    Bi(t)
            }
            e = e.sibling
        }
    }

    function hd(e, t) {
        for (; Qe !== null;) {
            var n = Qe;
            switch (n.tag) {
                case 0:
                case 11:
                case 15:
                    hn(8, n, t);
                    break;
                case 23:
                case 22:
                    if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
                        var l = n.memoizedState.cachePool.pool;
                        l != null && l.refCount++
                    }
                    break;
                case 24:
                    ea(n.memoizedState.cache)
            }
            if (l = n.child, l !== null) l.return = n, Qe = l;
            else e: for (n = e; Qe !== null;) {
                l = Qe;
                var a = l.sibling,
                    u = l.return;
                if (ad(l), l === n) {
                    Qe = null;
                    break e
                }
                if (a !== null) {
                    a.return = u, Qe = a;
                    break e
                }
                Qe = u
            }
        }
    }
    var Np = {
            getCacheForType: function(e) {
                var t = Fe(qe),
                    n = t.data.get(e);
                return n === void 0 && (n = e(), t.data.set(e, n)), n
            }
        },
        Cp = typeof WeakMap == "function" ? WeakMap : Map,
        Ee = 0,
        Te = null,
        fe = null,
        ge = 0,
        Ne = 0,
        dt = null,
        pn = !1,
        bl = !1,
        iu = !1,
        Ft = 0,
        De = 0,
        yn = 0,
        Yn = 0,
        ru = 0,
        wt = 0,
        Sl = 0,
        xa = null,
        at = null,
        su = !1,
        uu = 0,
        qi = 1 / 0,
        Vi = null,
        vn = null,
        Ze = 0,
        xn = null,
        wl = null,
        El = 0,
        ou = 0,
        cu = null,
        md = null,
        ba = 0,
        fu = null;

    function ht() {
        if ((Ee & 2) !== 0 && ge !== 0) return ge & -ge;
        if (U.T !== null) {
            var e = cl;
            return e !== 0 ? e : vu()
        }
        return To()
    }

    function gd() {
        wt === 0 && (wt = (ge & 536870912) === 0 || Se ? Co() : 536870912);
        var e = St.current;
        return e !== null && (e.flags |= 32), wt
    }

    function mt(e, t, n) {
        (e === Te && (Ne === 2 || Ne === 9) || e.cancelPendingCommit !== null) && (Nl(e, 0), bn(e, ge, wt, !1)), Bl(e, n), ((Ee & 2) === 0 || e !== Te) && (e === Te && ((Ee & 2) === 0 && (Yn |= n), De === 4 && bn(e, ge, wt, !1)), Lt(e))
    }

    function pd(e, t, n) {
        if ((Ee & 6) !== 0) throw Error(o(327));
        var l = !n && (t & 124) === 0 && (t & e.expiredLanes) === 0 || Hl(e, t),
            a = l ? jp(e, t) : mu(e, t, !0),
            u = l;
        do {
            if (a === 0) {
                bl && !l && bn(e, t, 0, !1);
                break
            } else {
                if (n = e.current.alternate, u && !_p(n)) {
                    a = mu(e, t, !1), u = !1;
                    continue
                }
                if (a === 2) {
                    if (u = t, e.errorRecoveryDisabledLanes & u) var h = 0;
                    else h = e.pendingLanes & -536870913, h = h !== 0 ? h : h & 536870912 ? 536870912 : 0;
                    if (h !== 0) {
                        t = h;
                        e: {
                            var v = e;a = xa;
                            var E = v.current.memoizedState.isDehydrated;
                            if (E && (Nl(v, h).flags |= 256), h = mu(v, h, !1), h !== 2) {
                                if (iu && !E) {
                                    v.errorRecoveryDisabledLanes |= u, Yn |= u, a = 4;
                                    break e
                                }
                                u = at, at = a, u !== null && (at === null ? at = u : at.push.apply(at, u))
                            }
                            a = h
                        }
                        if (u = !1, a !== 2) continue
                    }
                }
                if (a === 1) {
                    Nl(e, 0), bn(e, t, 0, !0);
                    break
                }
                e: {
                    switch (l = e, u = a, u) {
                        case 0:
                        case 1:
                            throw Error(o(345));
                        case 4:
                            if ((t & 4194048) !== t) break;
                        case 6:
                            bn(l, t, wt, !pn);
                            break e;
                        case 2:
                            at = null;
                            break;
                        case 3:
                        case 5:
                            break;
                        default:
                            throw Error(o(329))
                    }
                    if ((t & 62914560) === t && (a = uu + 300 - jt(), 10 < a)) {
                        if (bn(l, t, wt, !pn), Pa(l, 0, !0) !== 0) break e;
                        l.timeoutHandle = Xd(yd.bind(null, l, n, at, Vi, su, t, wt, Yn, Sl, pn, u, 2, -0, 0), a);
                        break e
                    }
                    yd(l, n, at, Vi, su, t, wt, Yn, Sl, pn, u, 0, -0, 0)
                }
            }
            break
        } while (!0);
        Lt(e)
    }

    function yd(e, t, n, l, a, u, h, v, E, O, H, k, M, L) {
        if (e.timeoutHandle = -1, k = t.subtreeFlags, (k & 8192 || (k & 16785408) === 16785408) && (Ra = {
                stylesheets: null,
                count: 0,
                unsuspend: s0
            }, cd(t), k = o0(), k !== null)) {
            e.cancelPendingCommit = k(Nd.bind(null, e, t, u, n, l, a, h, v, E, H, 1, M, L)), bn(e, u, h, !O);
            return
        }
        Nd(e, t, u, n, l, a, h, v, E)
    }

    function _p(e) {
        for (var t = e;;) {
            var n = t.tag;
            if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && (n = t.updateQueue, n !== null && (n = n.stores, n !== null)))
                for (var l = 0; l < n.length; l++) {
                    var a = n[l],
                        u = a.getSnapshot;
                    a = a.value;
                    try {
                        if (!ut(u(), a)) return !1
                    } catch {
                        return !1
                    }
                }
            if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
            else {
                if (t === e) break;
                for (; t.sibling === null;) {
                    if (t.return === null || t.return === e) return !0;
                    t = t.return
                }
                t.sibling.return = t.return, t = t.sibling
            }
        }
        return !0
    }

    function bn(e, t, n, l) {
        t &= ~ru, t &= ~Yn, e.suspendedLanes |= t, e.pingedLanes &= ~t, l && (e.warmLanes |= t), l = e.expirationTimes;
        for (var a = t; 0 < a;) {
            var u = 31 - st(a),
                h = 1 << u;
            l[u] = -1, a &= ~h
        }
        n !== 0 && Ro(e, n, t)
    }

    function ki() {
        return (Ee & 6) === 0 ? (Sa(0), !1) : !0
    }

    function du() {
        if (fe !== null) {
            if (Ne === 0) var e = fe.return;
            else e = fe, Gt = Hn = null, Ts(e), pl = null, fa = 0, e = fe;
            for (; e !== null;) Ff(e.alternate, e), e = e.return;
            fe = null
        }
    }

    function Nl(e, t) {
        var n = e.timeoutHandle;
        n !== -1 && (e.timeoutHandle = -1, Qp(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), du(), Te = e, fe = n = qt(e.current, null), ge = t, Ne = 0, dt = null, pn = !1, bl = Hl(e, t), iu = !1, Sl = wt = ru = Yn = yn = De = 0, at = xa = null, su = !1, (t & 8) !== 0 && (t |= t & 32);
        var l = e.entangledLanes;
        if (l !== 0)
            for (e = e.entanglements, l &= t; 0 < l;) {
                var a = 31 - st(l),
                    u = 1 << a;
                t |= e[a], l &= ~u
            }
        return Ft = t, oi(), n
    }

    function vd(e, t) {
        oe = null, U.H = ji, t === na || t === vi ? (t = Dc(), Ne = 3) : t === Ac ? (t = Dc(), Ne = 4) : Ne = t === Uf ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, dt = t, fe === null && (De = 1, Li(e, yt(t, e.current)))
    }

    function xd() {
        var e = U.H;
        return U.H = ji, e === null ? ji : e
    }

    function bd() {
        var e = U.A;
        return U.A = Np, e
    }

    function hu() {
        De = 4, pn || (ge & 4194048) !== ge && St.current !== null || (bl = !0), (yn & 134217727) === 0 && (Yn & 134217727) === 0 || Te === null || bn(Te, ge, wt, !1)
    }

    function mu(e, t, n) {
        var l = Ee;
        Ee |= 2;
        var a = xd(),
            u = bd();
        (Te !== e || ge !== t) && (Vi = null, Nl(e, t)), t = !1;
        var h = De;
        e: do try {
                if (Ne !== 0 && fe !== null) {
                    var v = fe,
                        E = dt;
                    switch (Ne) {
                        case 8:
                            du(), h = 6;
                            break e;
                        case 3:
                        case 2:
                        case 9:
                        case 6:
                            St.current === null && (t = !0);
                            var O = Ne;
                            if (Ne = 0, dt = null, Cl(e, v, E, O), n && bl) {
                                h = 0;
                                break e
                            }
                            break;
                        default:
                            O = Ne, Ne = 0, dt = null, Cl(e, v, E, O)
                    }
                }
                Rp(), h = De;
                break
            } catch (H) {
                vd(e, H)
            }
            while (!0);
            return t && e.shellSuspendCounter++, Gt = Hn = null, Ee = l, U.H = a, U.A = u, fe === null && (Te = null, ge = 0, oi()), h
    }

    function Rp() {
        for (; fe !== null;) Sd(fe)
    }

    function jp(e, t) {
        var n = Ee;
        Ee |= 2;
        var l = xd(),
            a = bd();
        Te !== e || ge !== t ? (Vi = null, qi = jt() + 500, Nl(e, t)) : bl = Hl(e, t);
        e: do try {
                if (Ne !== 0 && fe !== null) {
                    t = fe;
                    var u = dt;
                    t: switch (Ne) {
                        case 1:
                            Ne = 0, dt = null, Cl(e, t, u, 1);
                            break;
                        case 2:
                        case 9:
                            if (Mc(u)) {
                                Ne = 0, dt = null, wd(t);
                                break
                            }
                            t = function() {
                                Ne !== 2 && Ne !== 9 || Te !== e || (Ne = 7), Lt(e)
                            }, u.then(t, t);
                            break e;
                        case 3:
                            Ne = 7;
                            break e;
                        case 4:
                            Ne = 5;
                            break e;
                        case 7:
                            Mc(u) ? (Ne = 0, dt = null, wd(t)) : (Ne = 0, dt = null, Cl(e, t, u, 7));
                            break;
                        case 5:
                            var h = null;
                            switch (fe.tag) {
                                case 26:
                                    h = fe.memoizedState;
                                case 5:
                                case 27:
                                    var v = fe;
                                    if (!h || lh(h)) {
                                        Ne = 0, dt = null;
                                        var E = v.sibling;
                                        if (E !== null) fe = E;
                                        else {
                                            var O = v.return;
                                            O !== null ? (fe = O, Gi(O)) : fe = null
                                        }
                                        break t
                                    }
                            }
                            Ne = 0, dt = null, Cl(e, t, u, 5);
                            break;
                        case 6:
                            Ne = 0, dt = null, Cl(e, t, u, 6);
                            break;
                        case 8:
                            du(), De = 6;
                            break e;
                        default:
                            throw Error(o(462))
                    }
                }
                Tp();
                break
            } catch (H) {
                vd(e, H)
            }
            while (!0);
            return Gt = Hn = null, U.H = l, U.A = a, Ee = n, fe !== null ? 0 : (Te = null, ge = 0, oi(), De)
    }

    function Tp() {
        for (; fe !== null && !Pm();) Sd(fe)
    }

    function Sd(e) {
        var t = $f(e.alternate, e, Ft);
        e.memoizedProps = e.pendingProps, t === null ? Gi(e) : fe = t
    }

    function wd(e) {
        var t = e,
            n = t.alternate;
        switch (t.tag) {
            case 15:
            case 0:
                t = Gf(n, t, t.pendingProps, t.type, void 0, ge);
                break;
            case 11:
                t = Gf(n, t, t.pendingProps, t.type.render, t.ref, ge);
                break;
            case 5:
                Ts(t);
            default:
                Ff(n, t), t = fe = wc(t, Ft), t = $f(n, t, Ft)
        }
        e.memoizedProps = e.pendingProps, t === null ? Gi(e) : fe = t
    }

    function Cl(e, t, n, l) {
        Gt = Hn = null, Ts(t), pl = null, fa = 0;
        var a = t.return;
        try {
            if (vp(e, a, t, n, ge)) {
                De = 1, Li(e, yt(n, e.current)), fe = null;
                return
            }
        } catch (u) {
            if (a !== null) throw fe = a, u;
            De = 1, Li(e, yt(n, e.current)), fe = null;
            return
        }
        t.flags & 32768 ? (Se || l === 1 ? e = !0 : bl || (ge & 536870912) !== 0 ? e = !1 : (pn = e = !0, (l === 2 || l === 9 || l === 3 || l === 6) && (l = St.current, l !== null && l.tag === 13 && (l.flags |= 16384))), Ed(t, e)) : Gi(t)
    }

    function Gi(e) {
        var t = e;
        do {
            if ((t.flags & 32768) !== 0) {
                Ed(t, pn);
                return
            }
            e = t.return;
            var n = bp(t.alternate, t, Ft);
            if (n !== null) {
                fe = n;
                return
            }
            if (t = t.sibling, t !== null) {
                fe = t;
                return
            }
            fe = t = e
        } while (t !== null);
        De === 0 && (De = 5)
    }

    function Ed(e, t) {
        do {
            var n = Sp(e.alternate, e);
            if (n !== null) {
                n.flags &= 32767, fe = n;
                return
            }
            if (n = e.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !t && (e = e.sibling, e !== null)) {
                fe = e;
                return
            }
            fe = e = n
        } while (e !== null);
        De = 6, fe = null
    }

    function Nd(e, t, n, l, a, u, h, v, E) {
        e.cancelPendingCommit = null;
        do Yi(); while (Ze !== 0);
        if ((Ee & 6) !== 0) throw Error(o(327));
        if (t !== null) {
            if (t === e.current) throw Error(o(177));
            if (u = t.lanes | t.childLanes, u |= as, sg(e, n, u, h, v, E), e === Te && (fe = Te = null, ge = 0), wl = t, xn = e, El = n, ou = u, cu = a, md = l, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, Lp($a, function() {
                    return Td(), null
                })) : (e.callbackNode = null, e.callbackPriority = 0), l = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || l) {
                l = U.T, U.T = null, a = X.p, X.p = 2, h = Ee, Ee |= 4;
                try {
                    wp(e, t, n)
                } finally {
                    Ee = h, X.p = a, U.T = l
                }
            }
            Ze = 1, Cd(), _d(), Rd()
        }
    }

    function Cd() {
        if (Ze === 1) {
            Ze = 0;
            var e = xn,
                t = wl,
                n = (t.flags & 13878) !== 0;
            if ((t.subtreeFlags & 13878) !== 0 || n) {
                n = U.T, U.T = null;
                var l = X.p;
                X.p = 2;
                var a = Ee;
                Ee |= 4;
                try {
                    sd(t, e);
                    var u = _u,
                        h = dc(e.containerInfo),
                        v = u.focusedElem,
                        E = u.selectionRange;
                    if (h !== v && v && v.ownerDocument && fc(v.ownerDocument.documentElement, v)) {
                        if (E !== null && Ir(v)) {
                            var O = E.start,
                                H = E.end;
                            if (H === void 0 && (H = O), "selectionStart" in v) v.selectionStart = O, v.selectionEnd = Math.min(H, v.value.length);
                            else {
                                var k = v.ownerDocument || document,
                                    M = k && k.defaultView || window;
                                if (M.getSelection) {
                                    var L = M.getSelection(),
                                        ae = v.textContent.length,
                                        te = Math.min(E.start, ae),
                                        Re = E.end === void 0 ? te : Math.min(E.end, ae);
                                    !L.extend && te > Re && (h = Re, Re = te, te = h);
                                    var j = cc(v, te),
                                        R = cc(v, Re);
                                    if (j && R && (L.rangeCount !== 1 || L.anchorNode !== j.node || L.anchorOffset !== j.offset || L.focusNode !== R.node || L.focusOffset !== R.offset)) {
                                        var T = k.createRange();
                                        T.setStart(j.node, j.offset), L.removeAllRanges(), te > Re ? (L.addRange(T), L.extend(R.node, R.offset)) : (T.setEnd(R.node, R.offset), L.addRange(T))
                                    }
                                }
                            }
                        }
                        for (k = [], L = v; L = L.parentNode;) L.nodeType === 1 && k.push({
                            element: L,
                            left: L.scrollLeft,
                            top: L.scrollTop
                        });
                        for (typeof v.focus == "function" && v.focus(), v = 0; v < k.length; v++) {
                            var B = k[v];
                            B.element.scrollLeft = B.left, B.element.scrollTop = B.top
                        }
                    }
                    tr = !!Cu, _u = Cu = null
                } finally {
                    Ee = a, X.p = l, U.T = n
                }
            }
            e.current = t, Ze = 2
        }
    }

    function _d() {
        if (Ze === 2) {
            Ze = 0;
            var e = xn,
                t = wl,
                n = (t.flags & 8772) !== 0;
            if ((t.subtreeFlags & 8772) !== 0 || n) {
                n = U.T, U.T = null;
                var l = X.p;
                X.p = 2;
                var a = Ee;
                Ee |= 4;
                try {
                    ld(e, t.alternate, t)
                } finally {
                    Ee = a, X.p = l, U.T = n
                }
            }
            Ze = 3
        }
    }

    function Rd() {
        if (Ze === 4 || Ze === 3) {
            Ze = 0, Wm();
            var e = xn,
                t = wl,
                n = El,
                l = md;
            (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Ze = 5 : (Ze = 0, wl = xn = null, jd(e, e.pendingLanes));
            var a = e.pendingLanes;
            if (a === 0 && (vn = null), Mr(n), t = t.stateNode, rt && typeof rt.onCommitFiberRoot == "function") try {
                rt.onCommitFiberRoot(Ul, t, void 0, (t.current.flags & 128) === 128)
            } catch {}
            if (l !== null) {
                t = U.T, a = X.p, X.p = 2, U.T = null;
                try {
                    for (var u = e.onRecoverableError, h = 0; h < l.length; h++) {
                        var v = l[h];
                        u(v.value, {
                            componentStack: v.stack
                        })
                    }
                } finally {
                    U.T = t, X.p = a
                }
            }(El & 3) !== 0 && Yi(), Lt(e), a = e.pendingLanes, (n & 4194090) !== 0 && (a & 42) !== 0 ? e === fu ? ba++ : (ba = 0, fu = e) : ba = 0, Sa(0)
        }
    }

    function jd(e, t) {
        (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, ea(t)))
    }

    function Yi(e) {
        return Cd(), _d(), Rd(), Td()
    }

    function Td() {
        if (Ze !== 5) return !1;
        var e = xn,
            t = ou;
        ou = 0;
        var n = Mr(El),
            l = U.T,
            a = X.p;
        try {
            X.p = 32 > n ? 32 : n, U.T = null, n = cu, cu = null;
            var u = xn,
                h = El;
            if (Ze = 0, wl = xn = null, El = 0, (Ee & 6) !== 0) throw Error(o(331));
            var v = Ee;
            if (Ee |= 4, dd(u.current), od(u, u.current, h, n), Ee = v, Sa(0, !1), rt && typeof rt.onPostCommitFiberRoot == "function") try {
                rt.onPostCommitFiberRoot(Ul, u)
            } catch {}
            return !0
        } finally {
            X.p = a, U.T = l, jd(e, t)
        }
    }

    function Od(e, t, n) {
        t = yt(n, t), t = Ys(e.stateNode, t, 2), e = on(e, t, 2), e !== null && (Bl(e, 2), Lt(e))
    }

    function je(e, t, n) {
        if (e.tag === 3) Od(e, e, n);
        else
            for (; t !== null;) {
                if (t.tag === 3) {
                    Od(t, e, n);
                    break
                } else if (t.tag === 1) {
                    var l = t.stateNode;
                    if (typeof t.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (vn === null || !vn.has(l))) {
                        e = yt(n, e), n = Df(2), l = on(t, n, 2), l !== null && (zf(n, l, t, e), Bl(l, 2), Lt(l));
                        break
                    }
                }
                t = t.return
            }
    }

    function gu(e, t, n) {
        var l = e.pingCache;
        if (l === null) {
            l = e.pingCache = new Cp;
            var a = new Set;
            l.set(t, a)
        } else a = l.get(t), a === void 0 && (a = new Set, l.set(t, a));
        a.has(n) || (iu = !0, a.add(n), e = Op.bind(null, e, t, n), t.then(e, e))
    }

    function Op(e, t, n) {
        var l = e.pingCache;
        l !== null && l.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, Te === e && (ge & n) === n && (De === 4 || De === 3 && (ge & 62914560) === ge && 300 > jt() - uu ? (Ee & 2) === 0 && Nl(e, 0) : ru |= n, Sl === ge && (Sl = 0)), Lt(e)
    }

    function Ad(e, t) {
        t === 0 && (t = _o()), e = rl(e, t), e !== null && (Bl(e, t), Lt(e))
    }

    function Ap(e) {
        var t = e.memoizedState,
            n = 0;
        t !== null && (n = t.retryLane), Ad(e, n)
    }

    function Mp(e, t) {
        var n = 0;
        switch (e.tag) {
            case 13:
                var l = e.stateNode,
                    a = e.memoizedState;
                a !== null && (n = a.retryLane);
                break;
            case 19:
                l = e.stateNode;
                break;
            case 22:
                l = e.stateNode._retryCache;
                break;
            default:
                throw Error(o(314))
        }
        l !== null && l.delete(t), Ad(e, n)
    }

    function Lp(e, t) {
        return jr(e, t)
    }
    var Qi = null,
        _l = null,
        pu = !1,
        Xi = !1,
        yu = !1,
        Qn = 0;

    function Lt(e) {
        e !== _l && e.next === null && (_l === null ? Qi = _l = e : _l = _l.next = e), Xi = !0, pu || (pu = !0, zp())
    }

    function Sa(e, t) {
        if (!yu && Xi) {
            yu = !0;
            do
                for (var n = !1, l = Qi; l !== null;) {
                    if (e !== 0) {
                        var a = l.pendingLanes;
                        if (a === 0) var u = 0;
                        else {
                            var h = l.suspendedLanes,
                                v = l.pingedLanes;
                            u = (1 << 31 - st(42 | e) + 1) - 1, u &= a & ~(h & ~v), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0
                        }
                        u !== 0 && (n = !0, zd(l, u))
                    } else u = ge, u = Pa(l, l === Te ? u : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1), (u & 3) === 0 || Hl(l, u) || (n = !0, zd(l, u));
                    l = l.next
                }
            while (n);
            yu = !1
        }
    }

    function Dp() {
        Md()
    }

    function Md() {
        Xi = pu = !1;
        var e = 0;
        Qn !== 0 && (Yp() && (e = Qn), Qn = 0);
        for (var t = jt(), n = null, l = Qi; l !== null;) {
            var a = l.next,
                u = Ld(l, t);
            u === 0 ? (l.next = null, n === null ? Qi = a : n.next = a, a === null && (_l = n)) : (n = l, (e !== 0 || (u & 3) !== 0) && (Xi = !0)), l = a
        }
        Sa(e)
    }

    function Ld(e, t) {
        for (var n = e.suspendedLanes, l = e.pingedLanes, a = e.expirationTimes, u = e.pendingLanes & -62914561; 0 < u;) {
            var h = 31 - st(u),
                v = 1 << h,
                E = a[h];
            E === -1 ? ((v & n) === 0 || (v & l) !== 0) && (a[h] = rg(v, t)) : E <= t && (e.expiredLanes |= v), u &= ~v
        }
        if (t = Te, n = ge, n = Pa(e, e === t ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), l = e.callbackNode, n === 0 || e === t && (Ne === 2 || Ne === 9) || e.cancelPendingCommit !== null) return l !== null && l !== null && Tr(l), e.callbackNode = null, e.callbackPriority = 0;
        if ((n & 3) === 0 || Hl(e, n)) {
            if (t = n & -n, t === e.callbackPriority) return t;
            switch (l !== null && Tr(l), Mr(n)) {
                case 2:
                case 8:
                    n = Eo;
                    break;
                case 32:
                    n = $a;
                    break;
                case 268435456:
                    n = No;
                    break;
                default:
                    n = $a
            }
            return l = Dd.bind(null, e), n = jr(n, l), e.callbackPriority = t, e.callbackNode = n, t
        }
        return l !== null && l !== null && Tr(l), e.callbackPriority = 2, e.callbackNode = null, 2
    }

    function Dd(e, t) {
        if (Ze !== 0 && Ze !== 5) return e.callbackNode = null, e.callbackPriority = 0, null;
        var n = e.callbackNode;
        if (Yi() && e.callbackNode !== n) return null;
        var l = ge;
        return l = Pa(e, e === Te ? l : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), l === 0 ? null : (pd(e, l, t), Ld(e, jt()), e.callbackNode != null && e.callbackNode === n ? Dd.bind(null, e) : null)
    }

    function zd(e, t) {
        if (Yi()) return null;
        pd(e, t, !0)
    }

    function zp() {
        Xp(function() {
            (Ee & 6) !== 0 ? jr(wo, Dp) : Md()
        })
    }

    function vu() {
        return Qn === 0 && (Qn = Co()), Qn
    }

    function Ud(e) {
        return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : ni("" + e)
    }

    function Hd(e, t) {
        var n = t.ownerDocument.createElement("input");
        return n.name = t.name, n.value = t.value, e.id && n.setAttribute("form", e.id), t.parentNode.insertBefore(n, t), e = new FormData(e), n.parentNode.removeChild(n), e
    }

    function Up(e, t, n, l, a) {
        if (t === "submit" && n && n.stateNode === a) {
            var u = Ud((a[et] || null).action),
                h = l.submitter;
            h && (t = (t = h[et] || null) ? Ud(t.formAction) : h.getAttribute("formAction"), t !== null && (u = t, h = null));
            var v = new ri("action", "action", null, l, a);
            e.push({
                event: v,
                listeners: [{
                    instance: null,
                    listener: function() {
                        if (l.defaultPrevented) {
                            if (Qn !== 0) {
                                var E = h ? Hd(a, h) : new FormData(a);
                                Bs(n, {
                                    pending: !0,
                                    data: E,
                                    method: a.method,
                                    action: u
                                }, null, E)
                            }
                        } else typeof u == "function" && (v.preventDefault(), E = h ? Hd(a, h) : new FormData(a), Bs(n, {
                            pending: !0,
                            data: E,
                            method: a.method,
                            action: u
                        }, u, E))
                    },
                    currentTarget: a
                }]
            })
        }
    }
    for (var xu = 0; xu < ls.length; xu++) {
        var bu = ls[xu],
            Hp = bu.toLowerCase(),
            Bp = bu[0].toUpperCase() + bu.slice(1);
        Nt(Hp, "on" + Bp)
    }
    Nt(gc, "onAnimationEnd"), Nt(pc, "onAnimationIteration"), Nt(yc, "onAnimationStart"), Nt("dblclick", "onDoubleClick"), Nt("focusin", "onFocus"), Nt("focusout", "onBlur"), Nt(tp, "onTransitionRun"), Nt(np, "onTransitionStart"), Nt(lp, "onTransitionCancel"), Nt(vc, "onTransitionEnd"), Fn("onMouseEnter", ["mouseout", "mouseover"]), Fn("onMouseLeave", ["mouseout", "mouseover"]), Fn("onPointerEnter", ["pointerout", "pointerover"]), Fn("onPointerLeave", ["pointerout", "pointerover"]), jn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), jn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), jn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), jn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), jn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), jn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var wa = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
        qp = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(wa));

    function Bd(e, t) {
        t = (t & 4) !== 0;
        for (var n = 0; n < e.length; n++) {
            var l = e[n],
                a = l.event;
            l = l.listeners;
            e: {
                var u = void 0;
                if (t)
                    for (var h = l.length - 1; 0 <= h; h--) {
                        var v = l[h],
                            E = v.instance,
                            O = v.currentTarget;
                        if (v = v.listener, E !== u && a.isPropagationStopped()) break e;
                        u = v, a.currentTarget = O;
                        try {
                            u(a)
                        } catch (H) {
                            Mi(H)
                        }
                        a.currentTarget = null, u = E
                    } else
                        for (h = 0; h < l.length; h++) {
                            if (v = l[h], E = v.instance, O = v.currentTarget, v = v.listener, E !== u && a.isPropagationStopped()) break e;
                            u = v, a.currentTarget = O;
                            try {
                                u(a)
                            } catch (H) {
                                Mi(H)
                            }
                            a.currentTarget = null, u = E
                        }
            }
        }
    }

    function de(e, t) {
        var n = t[Lr];
        n === void 0 && (n = t[Lr] = new Set);
        var l = e + "__bubble";
        n.has(l) || (qd(t, e, 2, !1), n.add(l))
    }

    function Su(e, t, n) {
        var l = 0;
        t && (l |= 4), qd(n, e, l, t)
    }
    var Ki = "_reactListening" + Math.random().toString(36).slice(2);

    function wu(e) {
        if (!e[Ki]) {
            e[Ki] = !0, Ao.forEach(function(n) {
                n !== "selectionchange" && (qp.has(n) || Su(n, !1, e), Su(n, !0, e))
            });
            var t = e.nodeType === 9 ? e : e.ownerDocument;
            t === null || t[Ki] || (t[Ki] = !0, Su("selectionchange", !1, t))
        }
    }

    function qd(e, t, n, l) {
        switch (oh(t)) {
            case 2:
                var a = d0;
                break;
            case 8:
                a = h0;
                break;
            default:
                a = Uu
        }
        n = a.bind(null, t, n, e), a = void 0, !Qr || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (a = !0), l ? a !== void 0 ? e.addEventListener(t, n, {
            capture: !0,
            passive: a
        }) : e.addEventListener(t, n, !0) : a !== void 0 ? e.addEventListener(t, n, {
            passive: a
        }) : e.addEventListener(t, n, !1)
    }

    function Eu(e, t, n, l, a) {
        var u = l;
        if ((t & 1) === 0 && (t & 2) === 0 && l !== null) e: for (;;) {
            if (l === null) return;
            var h = l.tag;
            if (h === 3 || h === 4) {
                var v = l.stateNode.containerInfo;
                if (v === a) break;
                if (h === 4)
                    for (h = l.return; h !== null;) {
                        var E = h.tag;
                        if ((E === 3 || E === 4) && h.stateNode.containerInfo === a) return;
                        h = h.return
                    }
                for (; v !== null;) {
                    if (h = Zn(v), h === null) return;
                    if (E = h.tag, E === 5 || E === 6 || E === 26 || E === 27) {
                        l = u = h;
                        continue e
                    }
                    v = v.parentNode
                }
            }
            l = l.return
        }
        Xo(function() {
            var O = u,
                H = Gr(n),
                k = [];
            e: {
                var M = xc.get(e);
                if (M !== void 0) {
                    var L = ri,
                        ae = e;
                    switch (e) {
                        case "keypress":
                            if (ai(n) === 0) break e;
                        case "keydown":
                        case "keyup":
                            L = Lg;
                            break;
                        case "focusin":
                            ae = "focus", L = $r;
                            break;
                        case "focusout":
                            ae = "blur", L = $r;
                            break;
                        case "beforeblur":
                        case "afterblur":
                            L = $r;
                            break;
                        case "click":
                            if (n.button === 2) break e;
                        case "auxclick":
                        case "dblclick":
                        case "mousedown":
                        case "mousemove":
                        case "mouseup":
                        case "mouseout":
                        case "mouseover":
                        case "contextmenu":
                            L = $o;
                            break;
                        case "drag":
                        case "dragend":
                        case "dragenter":
                        case "dragexit":
                        case "dragleave":
                        case "dragover":
                        case "dragstart":
                        case "drop":
                            L = Sg;
                            break;
                        case "touchcancel":
                        case "touchend":
                        case "touchmove":
                        case "touchstart":
                            L = Ug;
                            break;
                        case gc:
                        case pc:
                        case yc:
                            L = Ng;
                            break;
                        case vc:
                            L = Bg;
                            break;
                        case "scroll":
                        case "scrollend":
                            L = xg;
                            break;
                        case "wheel":
                            L = Vg;
                            break;
                        case "copy":
                        case "cut":
                        case "paste":
                            L = _g;
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                        case "pointercancel":
                        case "pointerdown":
                        case "pointermove":
                        case "pointerout":
                        case "pointerover":
                        case "pointerup":
                            L = Fo;
                            break;
                        case "toggle":
                        case "beforetoggle":
                            L = Gg
                    }
                    var te = (t & 4) !== 0,
                        Re = !te && (e === "scroll" || e === "scrollend"),
                        j = te ? M !== null ? M + "Capture" : null : M;
                    te = [];
                    for (var R = O, T; R !== null;) {
                        var B = R;
                        if (T = B.stateNode, B = B.tag, B !== 5 && B !== 26 && B !== 27 || T === null || j === null || (B = kl(R, j), B != null && te.push(Ea(R, B, T))), Re) break;
                        R = R.return
                    }
                    0 < te.length && (M = new L(M, ae, null, n, H), k.push({
                        event: M,
                        listeners: te
                    }))
                }
            }
            if ((t & 7) === 0) {
                e: {
                    if (M = e === "mouseover" || e === "pointerover", L = e === "mouseout" || e === "pointerout", M && n !== kr && (ae = n.relatedTarget || n.fromElement) && (Zn(ae) || ae[Kn])) break e;
                    if ((L || M) && (M = H.window === H ? H : (M = H.ownerDocument) ? M.defaultView || M.parentWindow : window, L ? (ae = n.relatedTarget || n.toElement, L = O, ae = ae ? Zn(ae) : null, ae !== null && (Re = f(ae), te = ae.tag, ae !== Re || te !== 5 && te !== 27 && te !== 6) && (ae = null)) : (L = null, ae = O), L !== ae)) {
                        if (te = $o, B = "onMouseLeave", j = "onMouseEnter", R = "mouse", (e === "pointerout" || e === "pointerover") && (te = Fo, B = "onPointerLeave", j = "onPointerEnter", R = "pointer"), Re = L == null ? M : Vl(L), T = ae == null ? M : Vl(ae), M = new te(B, R + "leave", L, n, H), M.target = Re, M.relatedTarget = T, B = null, Zn(H) === O && (te = new te(j, R + "enter", ae, n, H), te.target = T, te.relatedTarget = Re, B = te), Re = B, L && ae) t: {
                            for (te = L, j = ae, R = 0, T = te; T; T = Rl(T)) R++;
                            for (T = 0, B = j; B; B = Rl(B)) T++;
                            for (; 0 < R - T;) te = Rl(te),
                            R--;
                            for (; 0 < T - R;) j = Rl(j),
                            T--;
                            for (; R--;) {
                                if (te === j || j !== null && te === j.alternate) break t;
                                te = Rl(te), j = Rl(j)
                            }
                            te = null
                        }
                        else te = null;
                        L !== null && Vd(k, M, L, te, !1), ae !== null && Re !== null && Vd(k, Re, ae, te, !0)
                    }
                }
                e: {
                    if (M = O ? Vl(O) : window, L = M.nodeName && M.nodeName.toLowerCase(), L === "select" || L === "input" && M.type === "file") var J = ac;
                    else if (nc(M))
                        if (ic) J = Wg;
                        else {
                            J = Fg;
                            var ce = Jg
                        }
                    else L = M.nodeName,
                    !L || L.toLowerCase() !== "input" || M.type !== "checkbox" && M.type !== "radio" ? O && Vr(O.elementType) && (J = ac) : J = Pg;
                    if (J && (J = J(e, O))) {
                        lc(k, J, n, H);
                        break e
                    }
                    ce && ce(e, M, O),
                    e === "focusout" && O && M.type === "number" && O.memoizedProps.value != null && qr(M, "number", M.value)
                }
                switch (ce = O ? Vl(O) : window, e) {
                    case "focusin":
                        (nc(ce) || ce.contentEditable === "true") && (ll = ce, es = O, Jl = null);
                        break;
                    case "focusout":
                        Jl = es = ll = null;
                        break;
                    case "mousedown":
                        ts = !0;
                        break;
                    case "contextmenu":
                    case "mouseup":
                    case "dragend":
                        ts = !1, hc(k, n, H);
                        break;
                    case "selectionchange":
                        if (ep) break;
                    case "keydown":
                    case "keyup":
                        hc(k, n, H)
                }
                var W;
                if (Fr) e: {
                    switch (e) {
                        case "compositionstart":
                            var ne = "onCompositionStart";
                            break e;
                        case "compositionend":
                            ne = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            ne = "onCompositionUpdate";
                            break e
                    }
                    ne = void 0
                }
                else nl ? ec(e, n) && (ne = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (ne = "onCompositionStart");ne && (Po && n.locale !== "ko" && (nl || ne !== "onCompositionStart" ? ne === "onCompositionEnd" && nl && (W = Ko()) : (an = H, Xr = "value" in an ? an.value : an.textContent, nl = !0)), ce = Zi(O, ne), 0 < ce.length && (ne = new Jo(ne, e, null, n, H), k.push({
                    event: ne,
                    listeners: ce
                }), W ? ne.data = W : (W = tc(n), W !== null && (ne.data = W)))),
                (W = Qg ? Xg(e, n) : Kg(e, n)) && (ne = Zi(O, "onBeforeInput"), 0 < ne.length && (ce = new Jo("onBeforeInput", "beforeinput", null, n, H), k.push({
                    event: ce,
                    listeners: ne
                }), ce.data = W)),
                Up(k, e, O, n, H)
            }
            Bd(k, t)
        })
    }

    function Ea(e, t, n) {
        return {
            instance: e,
            listener: t,
            currentTarget: n
        }
    }

    function Zi(e, t) {
        for (var n = t + "Capture", l = []; e !== null;) {
            var a = e,
                u = a.stateNode;
            if (a = a.tag, a !== 5 && a !== 26 && a !== 27 || u === null || (a = kl(e, n), a != null && l.unshift(Ea(e, a, u)), a = kl(e, t), a != null && l.push(Ea(e, a, u))), e.tag === 3) return l;
            e = e.return
        }
        return []
    }

    function Rl(e) {
        if (e === null) return null;
        do e = e.return; while (e && e.tag !== 5 && e.tag !== 27);
        return e || null
    }

    function Vd(e, t, n, l, a) {
        for (var u = t._reactName, h = []; n !== null && n !== l;) {
            var v = n,
                E = v.alternate,
                O = v.stateNode;
            if (v = v.tag, E !== null && E === l) break;
            v !== 5 && v !== 26 && v !== 27 || O === null || (E = O, a ? (O = kl(n, u), O != null && h.unshift(Ea(n, O, E))) : a || (O = kl(n, u), O != null && h.push(Ea(n, O, E)))), n = n.return
        }
        h.length !== 0 && e.push({
            event: t,
            listeners: h
        })
    }
    var Vp = /\r\n?/g,
        kp = /\u0000|\uFFFD/g;

    function kd(e) {
        return (typeof e == "string" ? e : "" + e).replace(Vp, `
`).replace(kp, "")
    }

    function Gd(e, t) {
        return t = kd(t), kd(e) === t
    }

    function $i() {}

    function _e(e, t, n, l, a, u) {
        switch (n) {
            case "children":
                typeof l == "string" ? t === "body" || t === "textarea" && l === "" || In(e, l) : (typeof l == "number" || typeof l == "bigint") && t !== "body" && In(e, "" + l);
                break;
            case "className":
                Ia(e, "class", l);
                break;
            case "tabIndex":
                Ia(e, "tabindex", l);
                break;
            case "dir":
            case "role":
            case "viewBox":
            case "width":
            case "height":
                Ia(e, n, l);
                break;
            case "style":
                Yo(e, l, u);
                break;
            case "data":
                if (t !== "object") {
                    Ia(e, "data", l);
                    break
                }
            case "src":
            case "href":
                if (l === "" && (t !== "a" || n !== "href")) {
                    e.removeAttribute(n);
                    break
                }
                if (l == null || typeof l == "function" || typeof l == "symbol" || typeof l == "boolean") {
                    e.removeAttribute(n);
                    break
                }
                l = ni("" + l), e.setAttribute(n, l);
                break;
            case "action":
            case "formAction":
                if (typeof l == "function") {
                    e.setAttribute(n, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                    break
                } else typeof u == "function" && (n === "formAction" ? (t !== "input" && _e(e, t, "name", a.name, a, null), _e(e, t, "formEncType", a.formEncType, a, null), _e(e, t, "formMethod", a.formMethod, a, null), _e(e, t, "formTarget", a.formTarget, a, null)) : (_e(e, t, "encType", a.encType, a, null), _e(e, t, "method", a.method, a, null), _e(e, t, "target", a.target, a, null)));
                if (l == null || typeof l == "symbol" || typeof l == "boolean") {
                    e.removeAttribute(n);
                    break
                }
                l = ni("" + l), e.setAttribute(n, l);
                break;
            case "onClick":
                l != null && (e.onclick = $i);
                break;
            case "onScroll":
                l != null && de("scroll", e);
                break;
            case "onScrollEnd":
                l != null && de("scrollend", e);
                break;
            case "dangerouslySetInnerHTML":
                if (l != null) {
                    if (typeof l != "object" || !("__html" in l)) throw Error(o(61));
                    if (n = l.__html, n != null) {
                        if (a.children != null) throw Error(o(60));
                        e.innerHTML = n
                    }
                }
                break;
            case "multiple":
                e.multiple = l && typeof l != "function" && typeof l != "symbol";
                break;
            case "muted":
                e.muted = l && typeof l != "function" && typeof l != "symbol";
                break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "defaultValue":
            case "defaultChecked":
            case "innerHTML":
            case "ref":
                break;
            case "autoFocus":
                break;
            case "xlinkHref":
                if (l == null || typeof l == "function" || typeof l == "boolean" || typeof l == "symbol") {
                    e.removeAttribute("xlink:href");
                    break
                }
                n = ni("" + l), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
                break;
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
                l != null && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(n, "" + l) : e.removeAttribute(n);
                break;
            case "inert":
            case "allowFullScreen":
            case "async":
            case "autoPlay":
            case "controls":
            case "default":
            case "defer":
            case "disabled":
            case "disablePictureInPicture":
            case "disableRemotePlayback":
            case "formNoValidate":
            case "hidden":
            case "loop":
            case "noModule":
            case "noValidate":
            case "open":
            case "playsInline":
            case "readOnly":
            case "required":
            case "reversed":
            case "scoped":
            case "seamless":
            case "itemScope":
                l && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(n, "") : e.removeAttribute(n);
                break;
            case "capture":
            case "download":
                l === !0 ? e.setAttribute(n, "") : l !== !1 && l != null && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(n, l) : e.removeAttribute(n);
                break;
            case "cols":
            case "rows":
            case "size":
            case "span":
                l != null && typeof l != "function" && typeof l != "symbol" && !isNaN(l) && 1 <= l ? e.setAttribute(n, l) : e.removeAttribute(n);
                break;
            case "rowSpan":
            case "start":
                l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l) ? e.removeAttribute(n) : e.setAttribute(n, l);
                break;
            case "popover":
                de("beforetoggle", e), de("toggle", e), Wa(e, "popover", l);
                break;
            case "xlinkActuate":
                Ht(e, "http://www.w3.org/1999/xlink", "xlink:actuate", l);
                break;
            case "xlinkArcrole":
                Ht(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", l);
                break;
            case "xlinkRole":
                Ht(e, "http://www.w3.org/1999/xlink", "xlink:role", l);
                break;
            case "xlinkShow":
                Ht(e, "http://www.w3.org/1999/xlink", "xlink:show", l);
                break;
            case "xlinkTitle":
                Ht(e, "http://www.w3.org/1999/xlink", "xlink:title", l);
                break;
            case "xlinkType":
                Ht(e, "http://www.w3.org/1999/xlink", "xlink:type", l);
                break;
            case "xmlBase":
                Ht(e, "http://www.w3.org/XML/1998/namespace", "xml:base", l);
                break;
            case "xmlLang":
                Ht(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", l);
                break;
            case "xmlSpace":
                Ht(e, "http://www.w3.org/XML/1998/namespace", "xml:space", l);
                break;
            case "is":
                Wa(e, "is", l);
                break;
            case "innerText":
            case "textContent":
                break;
            default:
                (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = yg.get(n) || n, Wa(e, n, l))
        }
    }

    function Nu(e, t, n, l, a, u) {
        switch (n) {
            case "style":
                Yo(e, l, u);
                break;
            case "dangerouslySetInnerHTML":
                if (l != null) {
                    if (typeof l != "object" || !("__html" in l)) throw Error(o(61));
                    if (n = l.__html, n != null) {
                        if (a.children != null) throw Error(o(60));
                        e.innerHTML = n
                    }
                }
                break;
            case "children":
                typeof l == "string" ? In(e, l) : (typeof l == "number" || typeof l == "bigint") && In(e, "" + l);
                break;
            case "onScroll":
                l != null && de("scroll", e);
                break;
            case "onScrollEnd":
                l != null && de("scrollend", e);
                break;
            case "onClick":
                l != null && (e.onclick = $i);
                break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "innerHTML":
            case "ref":
                break;
            case "innerText":
            case "textContent":
                break;
            default:
                if (!Mo.hasOwnProperty(n)) e: {
                    if (n[0] === "o" && n[1] === "n" && (a = n.endsWith("Capture"), t = n.slice(2, a ? n.length - 7 : void 0), u = e[et] || null, u = u != null ? u[n] : null, typeof u == "function" && e.removeEventListener(t, u, a), typeof l == "function")) {
                        typeof u != "function" && u !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(t, l, a);
                        break e
                    }
                    n in e ? e[n] = l : l === !0 ? e.setAttribute(n, "") : Wa(e, n, l)
                }
        }
    }

    function $e(e, t, n) {
        switch (t) {
            case "div":
            case "span":
            case "svg":
            case "path":
            case "a":
            case "g":
            case "p":
            case "li":
                break;
            case "img":
                de("error", e), de("load", e);
                var l = !1,
                    a = !1,
                    u;
                for (u in n)
                    if (n.hasOwnProperty(u)) {
                        var h = n[u];
                        if (h != null) switch (u) {
                            case "src":
                                l = !0;
                                break;
                            case "srcSet":
                                a = !0;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                throw Error(o(137, t));
                            default:
                                _e(e, t, u, h, n, null)
                        }
                    }
                a && _e(e, t, "srcSet", n.srcSet, n, null), l && _e(e, t, "src", n.src, n, null);
                return;
            case "input":
                de("invalid", e);
                var v = u = h = a = null,
                    E = null,
                    O = null;
                for (l in n)
                    if (n.hasOwnProperty(l)) {
                        var H = n[l];
                        if (H != null) switch (l) {
                            case "name":
                                a = H;
                                break;
                            case "type":
                                h = H;
                                break;
                            case "checked":
                                E = H;
                                break;
                            case "defaultChecked":
                                O = H;
                                break;
                            case "value":
                                u = H;
                                break;
                            case "defaultValue":
                                v = H;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                if (H != null) throw Error(o(137, t));
                                break;
                            default:
                                _e(e, t, l, H, n, null)
                        }
                    }
                qo(e, u, v, E, O, h, a, !1), ei(e);
                return;
            case "select":
                de("invalid", e), l = h = u = null;
                for (a in n)
                    if (n.hasOwnProperty(a) && (v = n[a], v != null)) switch (a) {
                        case "value":
                            u = v;
                            break;
                        case "defaultValue":
                            h = v;
                            break;
                        case "multiple":
                            l = v;
                        default:
                            _e(e, t, a, v, n, null)
                    }
                t = u, n = h, e.multiple = !!l, t != null ? Wn(e, !!l, t, !1) : n != null && Wn(e, !!l, n, !0);
                return;
            case "textarea":
                de("invalid", e), u = a = l = null;
                for (h in n)
                    if (n.hasOwnProperty(h) && (v = n[h], v != null)) switch (h) {
                        case "value":
                            l = v;
                            break;
                        case "defaultValue":
                            a = v;
                            break;
                        case "children":
                            u = v;
                            break;
                        case "dangerouslySetInnerHTML":
                            if (v != null) throw Error(o(91));
                            break;
                        default:
                            _e(e, t, h, v, n, null)
                    }
                ko(e, l, a, u), ei(e);
                return;
            case "option":
                for (E in n)
                    if (n.hasOwnProperty(E) && (l = n[E], l != null)) switch (E) {
                        case "selected":
                            e.selected = l && typeof l != "function" && typeof l != "symbol";
                            break;
                        default:
                            _e(e, t, E, l, n, null)
                    }
                return;
            case "dialog":
                de("beforetoggle", e), de("toggle", e), de("cancel", e), de("close", e);
                break;
            case "iframe":
            case "object":
                de("load", e);
                break;
            case "video":
            case "audio":
                for (l = 0; l < wa.length; l++) de(wa[l], e);
                break;
            case "image":
                de("error", e), de("load", e);
                break;
            case "details":
                de("toggle", e);
                break;
            case "embed":
            case "source":
            case "link":
                de("error", e), de("load", e);
            case "area":
            case "base":
            case "br":
            case "col":
            case "hr":
            case "keygen":
            case "meta":
            case "param":
            case "track":
            case "wbr":
            case "menuitem":
                for (O in n)
                    if (n.hasOwnProperty(O) && (l = n[O], l != null)) switch (O) {
                        case "children":
                        case "dangerouslySetInnerHTML":
                            throw Error(o(137, t));
                        default:
                            _e(e, t, O, l, n, null)
                    }
                return;
            default:
                if (Vr(t)) {
                    for (H in n) n.hasOwnProperty(H) && (l = n[H], l !== void 0 && Nu(e, t, H, l, n, void 0));
                    return
                }
        }
        for (v in n) n.hasOwnProperty(v) && (l = n[v], l != null && _e(e, t, v, l, n, null))
    }

    function Gp(e, t, n, l) {
        switch (t) {
            case "div":
            case "span":
            case "svg":
            case "path":
            case "a":
            case "g":
            case "p":
            case "li":
                break;
            case "input":
                var a = null,
                    u = null,
                    h = null,
                    v = null,
                    E = null,
                    O = null,
                    H = null;
                for (L in n) {
                    var k = n[L];
                    if (n.hasOwnProperty(L) && k != null) switch (L) {
                        case "checked":
                            break;
                        case "value":
                            break;
                        case "defaultValue":
                            E = k;
                        default:
                            l.hasOwnProperty(L) || _e(e, t, L, null, l, k)
                    }
                }
                for (var M in l) {
                    var L = l[M];
                    if (k = n[M], l.hasOwnProperty(M) && (L != null || k != null)) switch (M) {
                        case "type":
                            u = L;
                            break;
                        case "name":
                            a = L;
                            break;
                        case "checked":
                            O = L;
                            break;
                        case "defaultChecked":
                            H = L;
                            break;
                        case "value":
                            h = L;
                            break;
                        case "defaultValue":
                            v = L;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (L != null) throw Error(o(137, t));
                            break;
                        default:
                            L !== k && _e(e, t, M, L, l, k)
                    }
                }
                Br(e, h, v, E, O, H, u, a);
                return;
            case "select":
                L = h = v = M = null;
                for (u in n)
                    if (E = n[u], n.hasOwnProperty(u) && E != null) switch (u) {
                        case "value":
                            break;
                        case "multiple":
                            L = E;
                        default:
                            l.hasOwnProperty(u) || _e(e, t, u, null, l, E)
                    }
                for (a in l)
                    if (u = l[a], E = n[a], l.hasOwnProperty(a) && (u != null || E != null)) switch (a) {
                        case "value":
                            M = u;
                            break;
                        case "defaultValue":
                            v = u;
                            break;
                        case "multiple":
                            h = u;
                        default:
                            u !== E && _e(e, t, a, u, l, E)
                    }
                t = v, n = h, l = L, M != null ? Wn(e, !!n, M, !1) : !!l != !!n && (t != null ? Wn(e, !!n, t, !0) : Wn(e, !!n, n ? [] : "", !1));
                return;
            case "textarea":
                L = M = null;
                for (v in n)
                    if (a = n[v], n.hasOwnProperty(v) && a != null && !l.hasOwnProperty(v)) switch (v) {
                        case "value":
                            break;
                        case "children":
                            break;
                        default:
                            _e(e, t, v, null, l, a)
                    }
                for (h in l)
                    if (a = l[h], u = n[h], l.hasOwnProperty(h) && (a != null || u != null)) switch (h) {
                        case "value":
                            M = a;
                            break;
                        case "defaultValue":
                            L = a;
                            break;
                        case "children":
                            break;
                        case "dangerouslySetInnerHTML":
                            if (a != null) throw Error(o(91));
                            break;
                        default:
                            a !== u && _e(e, t, h, a, l, u)
                    }
                Vo(e, M, L);
                return;
            case "option":
                for (var ae in n)
                    if (M = n[ae], n.hasOwnProperty(ae) && M != null && !l.hasOwnProperty(ae)) switch (ae) {
                        case "selected":
                            e.selected = !1;
                            break;
                        default:
                            _e(e, t, ae, null, l, M)
                    }
                for (E in l)
                    if (M = l[E], L = n[E], l.hasOwnProperty(E) && M !== L && (M != null || L != null)) switch (E) {
                        case "selected":
                            e.selected = M && typeof M != "function" && typeof M != "symbol";
                            break;
                        default:
                            _e(e, t, E, M, l, L)
                    }
                return;
            case "img":
            case "link":
            case "area":
            case "base":
            case "br":
            case "col":
            case "embed":
            case "hr":
            case "keygen":
            case "meta":
            case "param":
            case "source":
            case "track":
            case "wbr":
            case "menuitem":
                for (var te in n) M = n[te], n.hasOwnProperty(te) && M != null && !l.hasOwnProperty(te) && _e(e, t, te, null, l, M);
                for (O in l)
                    if (M = l[O], L = n[O], l.hasOwnProperty(O) && M !== L && (M != null || L != null)) switch (O) {
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (M != null) throw Error(o(137, t));
                            break;
                        default:
                            _e(e, t, O, M, l, L)
                    }
                return;
            default:
                if (Vr(t)) {
                    for (var Re in n) M = n[Re], n.hasOwnProperty(Re) && M !== void 0 && !l.hasOwnProperty(Re) && Nu(e, t, Re, void 0, l, M);
                    for (H in l) M = l[H], L = n[H], !l.hasOwnProperty(H) || M === L || M === void 0 && L === void 0 || Nu(e, t, H, M, l, L);
                    return
                }
        }
        for (var j in n) M = n[j], n.hasOwnProperty(j) && M != null && !l.hasOwnProperty(j) && _e(e, t, j, null, l, M);
        for (k in l) M = l[k], L = n[k], !l.hasOwnProperty(k) || M === L || M == null && L == null || _e(e, t, k, M, l, L)
    }
    var Cu = null,
        _u = null;

    function Ji(e) {
        return e.nodeType === 9 ? e : e.ownerDocument
    }

    function Yd(e) {
        switch (e) {
            case "http://www.w3.org/2000/svg":
                return 1;
            case "http://www.w3.org/1998/Math/MathML":
                return 2;
            default:
                return 0
        }
    }

    function Qd(e, t) {
        if (e === 0) switch (t) {
            case "svg":
                return 1;
            case "math":
                return 2;
            default:
                return 0
        }
        return e === 1 && t === "foreignObject" ? 0 : e
    }

    function Ru(e, t) {
        return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
    }
    var ju = null;

    function Yp() {
        var e = window.event;
        return e && e.type === "popstate" ? e === ju ? !1 : (ju = e, !0) : (ju = null, !1)
    }
    var Xd = typeof setTimeout == "function" ? setTimeout : void 0,
        Qp = typeof clearTimeout == "function" ? clearTimeout : void 0,
        Kd = typeof Promise == "function" ? Promise : void 0,
        Xp = typeof queueMicrotask == "function" ? queueMicrotask : typeof Kd < "u" ? function(e) {
            return Kd.resolve(null).then(e).catch(Kp)
        } : Xd;

    function Kp(e) {
        setTimeout(function() {
            throw e
        })
    }

    function Sn(e) {
        return e === "head"
    }

    function Zd(e, t) {
        var n = t,
            l = 0,
            a = 0;
        do {
            var u = n.nextSibling;
            if (e.removeChild(n), u && u.nodeType === 8)
                if (n = u.data, n === "/$") {
                    if (0 < l && 8 > l) {
                        n = l;
                        var h = e.ownerDocument;
                        if (n & 1 && Na(h.documentElement), n & 2 && Na(h.body), n & 4)
                            for (n = h.head, Na(n), h = n.firstChild; h;) {
                                var v = h.nextSibling,
                                    E = h.nodeName;
                                h[ql] || E === "SCRIPT" || E === "STYLE" || E === "LINK" && h.rel.toLowerCase() === "stylesheet" || n.removeChild(h), h = v
                            }
                    }
                    if (a === 0) {
                        e.removeChild(u), Ma(t);
                        return
                    }
                    a--
                } else n === "$" || n === "$?" || n === "$!" ? a++ : l = n.charCodeAt(0) - 48;
            else l = 0;
            n = u
        } while (n);
        Ma(t)
    }

    function Tu(e) {
        var t = e.firstChild;
        for (t && t.nodeType === 10 && (t = t.nextSibling); t;) {
            var n = t;
            switch (t = t.nextSibling, n.nodeName) {
                case "HTML":
                case "HEAD":
                case "BODY":
                    Tu(n), Dr(n);
                    continue;
                case "SCRIPT":
                case "STYLE":
                    continue;
                case "LINK":
                    if (n.rel.toLowerCase() === "stylesheet") continue
            }
            e.removeChild(n)
        }
    }

    function Zp(e, t, n, l) {
        for (; e.nodeType === 1;) {
            var a = n;
            if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
                if (!l && (e.nodeName !== "INPUT" || e.type !== "hidden")) break
            } else if (l) {
                if (!e[ql]) switch (t) {
                    case "meta":
                        if (!e.hasAttribute("itemprop")) break;
                        return e;
                    case "link":
                        if (u = e.getAttribute("rel"), u === "stylesheet" && e.hasAttribute("data-precedence")) break;
                        if (u !== a.rel || e.getAttribute("href") !== (a.href == null || a.href === "" ? null : a.href) || e.getAttribute("crossorigin") !== (a.crossOrigin == null ? null : a.crossOrigin) || e.getAttribute("title") !== (a.title == null ? null : a.title)) break;
                        return e;
                    case "style":
                        if (e.hasAttribute("data-precedence")) break;
                        return e;
                    case "script":
                        if (u = e.getAttribute("src"), (u !== (a.src == null ? null : a.src) || e.getAttribute("type") !== (a.type == null ? null : a.type) || e.getAttribute("crossorigin") !== (a.crossOrigin == null ? null : a.crossOrigin)) && u && e.hasAttribute("async") && !e.hasAttribute("itemprop")) break;
                        return e;
                    default:
                        return e
                }
            } else if (t === "input" && e.type === "hidden") {
                var u = a.name == null ? null : "" + a.name;
                if (a.type === "hidden" && e.getAttribute("name") === u) return e
            } else return e;
            if (e = _t(e.nextSibling), e === null) break
        }
        return null
    }

    function $p(e, t, n) {
        if (t === "") return null;
        for (; e.nodeType !== 3;)
            if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = _t(e.nextSibling), e === null)) return null;
        return e
    }

    function Ou(e) {
        return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState === "complete"
    }

    function Jp(e, t) {
        var n = e.ownerDocument;
        if (e.data !== "$?" || n.readyState === "complete") t();
        else {
            var l = function() {
                t(), n.removeEventListener("DOMContentLoaded", l)
            };
            n.addEventListener("DOMContentLoaded", l), e._reactRetry = l
        }
    }

    function _t(e) {
        for (; e != null; e = e.nextSibling) {
            var t = e.nodeType;
            if (t === 1 || t === 3) break;
            if (t === 8) {
                if (t = e.data, t === "$" || t === "$!" || t === "$?" || t === "F!" || t === "F") break;
                if (t === "/$") return null
            }
        }
        return e
    }
    var Au = null;

    function $d(e) {
        e = e.previousSibling;
        for (var t = 0; e;) {
            if (e.nodeType === 8) {
                var n = e.data;
                if (n === "$" || n === "$!" || n === "$?") {
                    if (t === 0) return e;
                    t--
                } else n === "/$" && t++
            }
            e = e.previousSibling
        }
        return null
    }

    function Jd(e, t, n) {
        switch (t = Ji(n), e) {
            case "html":
                if (e = t.documentElement, !e) throw Error(o(452));
                return e;
            case "head":
                if (e = t.head, !e) throw Error(o(453));
                return e;
            case "body":
                if (e = t.body, !e) throw Error(o(454));
                return e;
            default:
                throw Error(o(451))
        }
    }

    function Na(e) {
        for (var t = e.attributes; t.length;) e.removeAttributeNode(t[0]);
        Dr(e)
    }
    var Et = new Map,
        Fd = new Set;

    function Fi(e) {
        return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument
    }
    var Pt = X.d;
    X.d = {
        f: Fp,
        r: Pp,
        D: Wp,
        C: Ip,
        L: e0,
        m: t0,
        X: l0,
        S: n0,
        M: a0
    };

    function Fp() {
        var e = Pt.f(),
            t = ki();
        return e || t
    }

    function Pp(e) {
        var t = $n(e);
        t !== null && t.tag === 5 && t.type === "form" ? pf(t) : Pt.r(e)
    }
    var jl = typeof document > "u" ? null : document;

    function Pd(e, t, n) {
        var l = jl;
        if (l && typeof t == "string" && t) {
            var a = pt(t);
            a = 'link[rel="' + e + '"][href="' + a + '"]', typeof n == "string" && (a += '[crossorigin="' + n + '"]'), Fd.has(a) || (Fd.add(a), e = {
                rel: e,
                crossOrigin: n,
                href: t
            }, l.querySelector(a) === null && (t = l.createElement("link"), $e(t, "link", e), Ge(t), l.head.appendChild(t)))
        }
    }

    function Wp(e) {
        Pt.D(e), Pd("dns-prefetch", e, null)
    }

    function Ip(e, t) {
        Pt.C(e, t), Pd("preconnect", e, t)
    }

    function e0(e, t, n) {
        Pt.L(e, t, n);
        var l = jl;
        if (l && e && t) {
            var a = 'link[rel="preload"][as="' + pt(t) + '"]';
            t === "image" && n && n.imageSrcSet ? (a += '[imagesrcset="' + pt(n.imageSrcSet) + '"]', typeof n.imageSizes == "string" && (a += '[imagesizes="' + pt(n.imageSizes) + '"]')) : a += '[href="' + pt(e) + '"]';
            var u = a;
            switch (t) {
                case "style":
                    u = Tl(e);
                    break;
                case "script":
                    u = Ol(e)
            }
            Et.has(u) || (e = x({
                rel: "preload",
                href: t === "image" && n && n.imageSrcSet ? void 0 : e,
                as: t
            }, n), Et.set(u, e), l.querySelector(a) !== null || t === "style" && l.querySelector(Ca(u)) || t === "script" && l.querySelector(_a(u)) || (t = l.createElement("link"), $e(t, "link", e), Ge(t), l.head.appendChild(t)))
        }
    }

    function t0(e, t) {
        Pt.m(e, t);
        var n = jl;
        if (n && e) {
            var l = t && typeof t.as == "string" ? t.as : "script",
                a = 'link[rel="modulepreload"][as="' + pt(l) + '"][href="' + pt(e) + '"]',
                u = a;
            switch (l) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                    u = Ol(e)
            }
            if (!Et.has(u) && (e = x({
                    rel: "modulepreload",
                    href: e
                }, t), Et.set(u, e), n.querySelector(a) === null)) {
                switch (l) {
                    case "audioworklet":
                    case "paintworklet":
                    case "serviceworker":
                    case "sharedworker":
                    case "worker":
                    case "script":
                        if (n.querySelector(_a(u))) return
                }
                l = n.createElement("link"), $e(l, "link", e), Ge(l), n.head.appendChild(l)
            }
        }
    }

    function n0(e, t, n) {
        Pt.S(e, t, n);
        var l = jl;
        if (l && e) {
            var a = Jn(l).hoistableStyles,
                u = Tl(e);
            t = t || "default";
            var h = a.get(u);
            if (!h) {
                var v = {
                    loading: 0,
                    preload: null
                };
                if (h = l.querySelector(Ca(u))) v.loading = 5;
                else {
                    e = x({
                        rel: "stylesheet",
                        href: e,
                        "data-precedence": t
                    }, n), (n = Et.get(u)) && Mu(e, n);
                    var E = h = l.createElement("link");
                    Ge(E), $e(E, "link", e), E._p = new Promise(function(O, H) {
                        E.onload = O, E.onerror = H
                    }), E.addEventListener("load", function() {
                        v.loading |= 1
                    }), E.addEventListener("error", function() {
                        v.loading |= 2
                    }), v.loading |= 4, Pi(h, t, l)
                }
                h = {
                    type: "stylesheet",
                    instance: h,
                    count: 1,
                    state: v
                }, a.set(u, h)
            }
        }
    }

    function l0(e, t) {
        Pt.X(e, t);
        var n = jl;
        if (n && e) {
            var l = Jn(n).hoistableScripts,
                a = Ol(e),
                u = l.get(a);
            u || (u = n.querySelector(_a(a)), u || (e = x({
                src: e,
                async: !0
            }, t), (t = Et.get(a)) && Lu(e, t), u = n.createElement("script"), Ge(u), $e(u, "link", e), n.head.appendChild(u)), u = {
                type: "script",
                instance: u,
                count: 1,
                state: null
            }, l.set(a, u))
        }
    }

    function a0(e, t) {
        Pt.M(e, t);
        var n = jl;
        if (n && e) {
            var l = Jn(n).hoistableScripts,
                a = Ol(e),
                u = l.get(a);
            u || (u = n.querySelector(_a(a)), u || (e = x({
                src: e,
                async: !0,
                type: "module"
            }, t), (t = Et.get(a)) && Lu(e, t), u = n.createElement("script"), Ge(u), $e(u, "link", e), n.head.appendChild(u)), u = {
                type: "script",
                instance: u,
                count: 1,
                state: null
            }, l.set(a, u))
        }
    }

    function Wd(e, t, n, l) {
        var a = (a = re.current) ? Fi(a) : null;
        if (!a) throw Error(o(446));
        switch (e) {
            case "meta":
            case "title":
                return null;
            case "style":
                return typeof n.precedence == "string" && typeof n.href == "string" ? (t = Tl(n.href), n = Jn(a).hoistableStyles, l = n.get(t), l || (l = {
                    type: "style",
                    instance: null,
                    count: 0,
                    state: null
                }, n.set(t, l)), l) : {
                    type: "void",
                    instance: null,
                    count: 0,
                    state: null
                };
            case "link":
                if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
                    e = Tl(n.href);
                    var u = Jn(a).hoistableStyles,
                        h = u.get(e);
                    if (h || (a = a.ownerDocument || a, h = {
                            type: "stylesheet",
                            instance: null,
                            count: 0,
                            state: {
                                loading: 0,
                                preload: null
                            }
                        }, u.set(e, h), (u = a.querySelector(Ca(e))) && !u._p && (h.instance = u, h.state.loading = 5), Et.has(e) || (n = {
                            rel: "preload",
                            as: "style",
                            href: n.href,
                            crossOrigin: n.crossOrigin,
                            integrity: n.integrity,
                            media: n.media,
                            hrefLang: n.hrefLang,
                            referrerPolicy: n.referrerPolicy
                        }, Et.set(e, n), u || i0(a, e, n, h.state))), t && l === null) throw Error(o(528, ""));
                    return h
                }
                if (t && l !== null) throw Error(o(529, ""));
                return null;
            case "script":
                return t = n.async, n = n.src, typeof n == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Ol(n), n = Jn(a).hoistableScripts, l = n.get(t), l || (l = {
                    type: "script",
                    instance: null,
                    count: 0,
                    state: null
                }, n.set(t, l)), l) : {
                    type: "void",
                    instance: null,
                    count: 0,
                    state: null
                };
            default:
                throw Error(o(444, e))
        }
    }

    function Tl(e) {
        return 'href="' + pt(e) + '"'
    }

    function Ca(e) {
        return 'link[rel="stylesheet"][' + e + "]"
    }

    function Id(e) {
        return x({}, e, {
            "data-precedence": e.precedence,
            precedence: null
        })
    }

    function i0(e, t, n, l) {
        e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? l.loading = 1 : (t = e.createElement("link"), l.preload = t, t.addEventListener("load", function() {
            return l.loading |= 1
        }), t.addEventListener("error", function() {
            return l.loading |= 2
        }), $e(t, "link", n), Ge(t), e.head.appendChild(t))
    }

    function Ol(e) {
        return '[src="' + pt(e) + '"]'
    }

    function _a(e) {
        return "script[async]" + e
    }

    function eh(e, t, n) {
        if (t.count++, t.instance === null) switch (t.type) {
            case "style":
                var l = e.querySelector('style[data-href~="' + pt(n.href) + '"]');
                if (l) return t.instance = l, Ge(l), l;
                var a = x({}, n, {
                    "data-href": n.href,
                    "data-precedence": n.precedence,
                    href: null,
                    precedence: null
                });
                return l = (e.ownerDocument || e).createElement("style"), Ge(l), $e(l, "style", a), Pi(l, n.precedence, e), t.instance = l;
            case "stylesheet":
                a = Tl(n.href);
                var u = e.querySelector(Ca(a));
                if (u) return t.state.loading |= 4, t.instance = u, Ge(u), u;
                l = Id(n), (a = Et.get(a)) && Mu(l, a), u = (e.ownerDocument || e).createElement("link"), Ge(u);
                var h = u;
                return h._p = new Promise(function(v, E) {
                    h.onload = v, h.onerror = E
                }), $e(u, "link", l), t.state.loading |= 4, Pi(u, n.precedence, e), t.instance = u;
            case "script":
                return u = Ol(n.src), (a = e.querySelector(_a(u))) ? (t.instance = a, Ge(a), a) : (l = n, (a = Et.get(u)) && (l = x({}, n), Lu(l, a)), e = e.ownerDocument || e, a = e.createElement("script"), Ge(a), $e(a, "link", l), e.head.appendChild(a), t.instance = a);
            case "void":
                return null;
            default:
                throw Error(o(443, t.type))
        } else t.type === "stylesheet" && (t.state.loading & 4) === 0 && (l = t.instance, t.state.loading |= 4, Pi(l, n.precedence, e));
        return t.instance
    }

    function Pi(e, t, n) {
        for (var l = n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), a = l.length ? l[l.length - 1] : null, u = a, h = 0; h < l.length; h++) {
            var v = l[h];
            if (v.dataset.precedence === t) u = v;
            else if (u !== a) break
        }
        u ? u.parentNode.insertBefore(e, u.nextSibling) : (t = n.nodeType === 9 ? n.head : n, t.insertBefore(e, t.firstChild))
    }

    function Mu(e, t) {
        e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title)
    }

    function Lu(e, t) {
        e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity)
    }
    var Wi = null;

    function th(e, t, n) {
        if (Wi === null) {
            var l = new Map,
                a = Wi = new Map;
            a.set(n, l)
        } else a = Wi, l = a.get(n), l || (l = new Map, a.set(n, l));
        if (l.has(e)) return l;
        for (l.set(e, null), n = n.getElementsByTagName(e), a = 0; a < n.length; a++) {
            var u = n[a];
            if (!(u[ql] || u[Je] || e === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
                var h = u.getAttribute(t) || "";
                h = e + h;
                var v = l.get(h);
                v ? v.push(u) : l.set(h, [u])
            }
        }
        return l
    }

    function nh(e, t, n) {
        e = e.ownerDocument || e, e.head.insertBefore(n, t === "title" ? e.querySelector("head > title") : null)
    }

    function r0(e, t, n) {
        if (n === 1 || t.itemProp != null) return !1;
        switch (e) {
            case "meta":
            case "title":
                return !0;
            case "style":
                if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") break;
                return !0;
            case "link":
                if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) break;
                switch (t.rel) {
                    case "stylesheet":
                        return e = t.disabled, typeof t.precedence == "string" && e == null;
                    default:
                        return !0
                }
            case "script":
                if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string") return !0
        }
        return !1
    }

    function lh(e) {
        return !(e.type === "stylesheet" && (e.state.loading & 3) === 0)
    }
    var Ra = null;

    function s0() {}

    function u0(e, t, n) {
        if (Ra === null) throw Error(o(475));
        var l = Ra;
        if (t.type === "stylesheet" && (typeof n.media != "string" || matchMedia(n.media).matches !== !1) && (t.state.loading & 4) === 0) {
            if (t.instance === null) {
                var a = Tl(n.href),
                    u = e.querySelector(Ca(a));
                if (u) {
                    e = u._p, e !== null && typeof e == "object" && typeof e.then == "function" && (l.count++, l = Ii.bind(l), e.then(l, l)), t.state.loading |= 4, t.instance = u, Ge(u);
                    return
                }
                u = e.ownerDocument || e, n = Id(n), (a = Et.get(a)) && Mu(n, a), u = u.createElement("link"), Ge(u);
                var h = u;
                h._p = new Promise(function(v, E) {
                    h.onload = v, h.onerror = E
                }), $e(u, "link", n), t.instance = u
            }
            l.stylesheets === null && (l.stylesheets = new Map), l.stylesheets.set(t, e), (e = t.state.preload) && (t.state.loading & 3) === 0 && (l.count++, t = Ii.bind(l), e.addEventListener("load", t), e.addEventListener("error", t))
        }
    }

    function o0() {
        if (Ra === null) throw Error(o(475));
        var e = Ra;
        return e.stylesheets && e.count === 0 && Du(e, e.stylesheets), 0 < e.count ? function(t) {
            var n = setTimeout(function() {
                if (e.stylesheets && Du(e, e.stylesheets), e.unsuspend) {
                    var l = e.unsuspend;
                    e.unsuspend = null, l()
                }
            }, 6e4);
            return e.unsuspend = t,
                function() {
                    e.unsuspend = null, clearTimeout(n)
                }
        } : null
    }

    function Ii() {
        if (this.count--, this.count === 0) {
            if (this.stylesheets) Du(this, this.stylesheets);
            else if (this.unsuspend) {
                var e = this.unsuspend;
                this.unsuspend = null, e()
            }
        }
    }
    var er = null;

    function Du(e, t) {
        e.stylesheets = null, e.unsuspend !== null && (e.count++, er = new Map, t.forEach(c0, e), er = null, Ii.call(e))
    }

    function c0(e, t) {
        if (!(t.state.loading & 4)) {
            var n = er.get(e);
            if (n) var l = n.get(null);
            else {
                n = new Map, er.set(e, n);
                for (var a = e.querySelectorAll("link[data-precedence],style[data-precedence]"), u = 0; u < a.length; u++) {
                    var h = a[u];
                    (h.nodeName === "LINK" || h.getAttribute("media") !== "not all") && (n.set(h.dataset.precedence, h), l = h)
                }
                l && n.set(null, l)
            }
            a = t.instance, h = a.getAttribute("data-precedence"), u = n.get(h) || l, u === l && n.set(null, a), n.set(h, a), this.count++, l = Ii.bind(this), a.addEventListener("load", l), a.addEventListener("error", l), u ? u.parentNode.insertBefore(a, u.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(a, e.firstChild)), t.state.loading |= 4
        }
    }
    var ja = {
        $$typeof: Y,
        Provider: null,
        Consumer: null,
        _currentValue: I,
        _currentValue2: I,
        _threadCount: 0
    };

    function f0(e, t, n, l, a, u, h, v) {
        this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Or(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Or(0), this.hiddenUpdates = Or(null), this.identifierPrefix = l, this.onUncaughtError = a, this.onCaughtError = u, this.onRecoverableError = h, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = v, this.incompleteTransitions = new Map
    }

    function ah(e, t, n, l, a, u, h, v, E, O, H, k) {
        return e = new f0(e, t, n, h, v, E, O, k), t = 1, u === !0 && (t |= 24), u = ot(3, null, null, t), e.current = u, u.stateNode = e, t = gs(), t.refCount++, e.pooledCache = t, t.refCount++, u.memoizedState = {
            element: l,
            isDehydrated: n,
            cache: t
        }, xs(u), e
    }

    function ih(e) {
        return e ? (e = sl, e) : sl
    }

    function rh(e, t, n, l, a, u) {
        a = ih(a), l.context === null ? l.context = a : l.pendingContext = a, l = un(t), l.payload = {
            element: n
        }, u = u === void 0 ? null : u, u !== null && (l.callback = u), n = on(e, l, t), n !== null && (mt(n, e, t), aa(n, e, t))
    }

    function sh(e, t) {
        if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
            var n = e.retryLane;
            e.retryLane = n !== 0 && n < t ? n : t
        }
    }

    function zu(e, t) {
        sh(e, t), (e = e.alternate) && sh(e, t)
    }

    function uh(e) {
        if (e.tag === 13) {
            var t = rl(e, 67108864);
            t !== null && mt(t, e, 67108864), zu(e, 67108864)
        }
    }
    var tr = !0;

    function d0(e, t, n, l) {
        var a = U.T;
        U.T = null;
        var u = X.p;
        try {
            X.p = 2, Uu(e, t, n, l)
        } finally {
            X.p = u, U.T = a
        }
    }

    function h0(e, t, n, l) {
        var a = U.T;
        U.T = null;
        var u = X.p;
        try {
            X.p = 8, Uu(e, t, n, l)
        } finally {
            X.p = u, U.T = a
        }
    }

    function Uu(e, t, n, l) {
        if (tr) {
            var a = Hu(l);
            if (a === null) Eu(e, t, l, nr, n), ch(e, l);
            else if (g0(a, e, t, n, l)) l.stopPropagation();
            else if (ch(e, l), t & 4 && -1 < m0.indexOf(e)) {
                for (; a !== null;) {
                    var u = $n(a);
                    if (u !== null) switch (u.tag) {
                        case 3:
                            if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                                var h = Rn(u.pendingLanes);
                                if (h !== 0) {
                                    var v = u;
                                    for (v.pendingLanes |= 2, v.entangledLanes |= 2; h;) {
                                        var E = 1 << 31 - st(h);
                                        v.entanglements[1] |= E, h &= ~E
                                    }
                                    Lt(u), (Ee & 6) === 0 && (qi = jt() + 500, Sa(0))
                                }
                            }
                            break;
                        case 13:
                            v = rl(u, 2), v !== null && mt(v, u, 2), ki(), zu(u, 2)
                    }
                    if (u = Hu(l), u === null && Eu(e, t, l, nr, n), u === a) break;
                    a = u
                }
                a !== null && l.stopPropagation()
            } else Eu(e, t, l, null, n)
        }
    }

    function Hu(e) {
        return e = Gr(e), Bu(e)
    }
    var nr = null;

    function Bu(e) {
        if (nr = null, e = Zn(e), e !== null) {
            var t = f(e);
            if (t === null) e = null;
            else {
                var n = t.tag;
                if (n === 13) {
                    if (e = d(t), e !== null) return e;
                    e = null
                } else if (n === 3) {
                    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
                    e = null
                } else t !== e && (e = null)
            }
        }
        return nr = e, null
    }

    function oh(e) {
        switch (e) {
            case "beforetoggle":
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "toggle":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
                return 2;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
                return 8;
            case "message":
                switch (Im()) {
                    case wo:
                        return 2;
                    case Eo:
                        return 8;
                    case $a:
                    case eg:
                        return 32;
                    case No:
                        return 268435456;
                    default:
                        return 32
                }
            default:
                return 32
        }
    }
    var qu = !1,
        wn = null,
        En = null,
        Nn = null,
        Ta = new Map,
        Oa = new Map,
        Cn = [],
        m0 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");

    function ch(e, t) {
        switch (e) {
            case "focusin":
            case "focusout":
                wn = null;
                break;
            case "dragenter":
            case "dragleave":
                En = null;
                break;
            case "mouseover":
            case "mouseout":
                Nn = null;
                break;
            case "pointerover":
            case "pointerout":
                Ta.delete(t.pointerId);
                break;
            case "gotpointercapture":
            case "lostpointercapture":
                Oa.delete(t.pointerId)
        }
    }

    function Aa(e, t, n, l, a, u) {
        return e === null || e.nativeEvent !== u ? (e = {
            blockedOn: t,
            domEventName: n,
            eventSystemFlags: l,
            nativeEvent: u,
            targetContainers: [a]
        }, t !== null && (t = $n(t), t !== null && uh(t)), e) : (e.eventSystemFlags |= l, t = e.targetContainers, a !== null && t.indexOf(a) === -1 && t.push(a), e)
    }

    function g0(e, t, n, l, a) {
        switch (t) {
            case "focusin":
                return wn = Aa(wn, e, t, n, l, a), !0;
            case "dragenter":
                return En = Aa(En, e, t, n, l, a), !0;
            case "mouseover":
                return Nn = Aa(Nn, e, t, n, l, a), !0;
            case "pointerover":
                var u = a.pointerId;
                return Ta.set(u, Aa(Ta.get(u) || null, e, t, n, l, a)), !0;
            case "gotpointercapture":
                return u = a.pointerId, Oa.set(u, Aa(Oa.get(u) || null, e, t, n, l, a)), !0
        }
        return !1
    }

    function fh(e) {
        var t = Zn(e.target);
        if (t !== null) {
            var n = f(t);
            if (n !== null) {
                if (t = n.tag, t === 13) {
                    if (t = d(n), t !== null) {
                        e.blockedOn = t, ug(e.priority, function() {
                            if (n.tag === 13) {
                                var l = ht();
                                l = Ar(l);
                                var a = rl(n, l);
                                a !== null && mt(a, n, l), zu(n, l)
                            }
                        });
                        return
                    }
                } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                    e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                    return
                }
            }
        }
        e.blockedOn = null
    }

    function lr(e) {
        if (e.blockedOn !== null) return !1;
        for (var t = e.targetContainers; 0 < t.length;) {
            var n = Hu(e.nativeEvent);
            if (n === null) {
                n = e.nativeEvent;
                var l = new n.constructor(n.type, n);
                kr = l, n.target.dispatchEvent(l), kr = null
            } else return t = $n(n), t !== null && uh(t), e.blockedOn = n, !1;
            t.shift()
        }
        return !0
    }

    function dh(e, t, n) {
        lr(e) && n.delete(t)
    }

    function p0() {
        qu = !1, wn !== null && lr(wn) && (wn = null), En !== null && lr(En) && (En = null), Nn !== null && lr(Nn) && (Nn = null), Ta.forEach(dh), Oa.forEach(dh)
    }

    function ar(e, t) {
        e.blockedOn === t && (e.blockedOn = null, qu || (qu = !0, s.unstable_scheduleCallback(s.unstable_NormalPriority, p0)))
    }
    var ir = null;

    function hh(e) {
        ir !== e && (ir = e, s.unstable_scheduleCallback(s.unstable_NormalPriority, function() {
            ir === e && (ir = null);
            for (var t = 0; t < e.length; t += 3) {
                var n = e[t],
                    l = e[t + 1],
                    a = e[t + 2];
                if (typeof l != "function") {
                    if (Bu(l || n) === null) continue;
                    break
                }
                var u = $n(n);
                u !== null && (e.splice(t, 3), t -= 3, Bs(u, {
                    pending: !0,
                    data: a,
                    method: n.method,
                    action: l
                }, l, a))
            }
        }))
    }

    function Ma(e) {
        function t(E) {
            return ar(E, e)
        }
        wn !== null && ar(wn, e), En !== null && ar(En, e), Nn !== null && ar(Nn, e), Ta.forEach(t), Oa.forEach(t);
        for (var n = 0; n < Cn.length; n++) {
            var l = Cn[n];
            l.blockedOn === e && (l.blockedOn = null)
        }
        for (; 0 < Cn.length && (n = Cn[0], n.blockedOn === null);) fh(n), n.blockedOn === null && Cn.shift();
        if (n = (e.ownerDocument || e).$$reactFormReplay, n != null)
            for (l = 0; l < n.length; l += 3) {
                var a = n[l],
                    u = n[l + 1],
                    h = a[et] || null;
                if (typeof u == "function") h || hh(n);
                else if (h) {
                    var v = null;
                    if (u && u.hasAttribute("formAction")) {
                        if (a = u, h = u[et] || null) v = h.formAction;
                        else if (Bu(a) !== null) continue
                    } else v = h.action;
                    typeof v == "function" ? n[l + 1] = v : (n.splice(l, 3), l -= 3), hh(n)
                }
            }
    }

    function Vu(e) {
        this._internalRoot = e
    }
    rr.prototype.render = Vu.prototype.render = function(e) {
        var t = this._internalRoot;
        if (t === null) throw Error(o(409));
        var n = t.current,
            l = ht();
        rh(n, l, e, t, null, null)
    }, rr.prototype.unmount = Vu.prototype.unmount = function() {
        var e = this._internalRoot;
        if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            rh(e.current, 2, null, e, null, null), ki(), t[Kn] = null
        }
    };

    function rr(e) {
        this._internalRoot = e
    }
    rr.prototype.unstable_scheduleHydration = function(e) {
        if (e) {
            var t = To();
            e = {
                blockedOn: null,
                target: e,
                priority: t
            };
            for (var n = 0; n < Cn.length && t !== 0 && t < Cn[n].priority; n++);
            Cn.splice(n, 0, e), n === 0 && fh(e)
        }
    };
    var mh = i.version;
    if (mh !== "19.1.1") throw Error(o(527, mh, "19.1.1"));
    X.findDOMNode = function(e) {
        var t = e._reactInternals;
        if (t === void 0) throw typeof e.render == "function" ? Error(o(188)) : (e = Object.keys(e).join(","), Error(o(268, e)));
        return e = p(t), e = e !== null ? m(e) : null, e = e === null ? null : e.stateNode, e
    };
    var y0 = {
        bundleType: 0,
        version: "19.1.1",
        rendererPackageName: "react-dom",
        currentDispatcherRef: U,
        reconcilerVersion: "19.1.1"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var sr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!sr.isDisabled && sr.supportsFiber) try {
            Ul = sr.inject(y0), rt = sr
        } catch {}
    }
    return Ha.createRoot = function(e, t) {
        if (!c(e)) throw Error(o(299));
        var n = !1,
            l = "",
            a = Of,
            u = Af,
            h = Mf,
            v = null;
        return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (l = t.identifierPrefix), t.onUncaughtError !== void 0 && (a = t.onUncaughtError), t.onCaughtError !== void 0 && (u = t.onCaughtError), t.onRecoverableError !== void 0 && (h = t.onRecoverableError), t.unstable_transitionCallbacks !== void 0 && (v = t.unstable_transitionCallbacks)), t = ah(e, 1, !1, null, null, n, l, a, u, h, v, null), e[Kn] = t.current, wu(e), new Vu(t)
    }, Ha.hydrateRoot = function(e, t, n) {
        if (!c(e)) throw Error(o(299));
        var l = !1,
            a = "",
            u = Of,
            h = Af,
            v = Mf,
            E = null,
            O = null;
        return n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (a = n.identifierPrefix), n.onUncaughtError !== void 0 && (u = n.onUncaughtError), n.onCaughtError !== void 0 && (h = n.onCaughtError), n.onRecoverableError !== void 0 && (v = n.onRecoverableError), n.unstable_transitionCallbacks !== void 0 && (E = n.unstable_transitionCallbacks), n.formState !== void 0 && (O = n.formState)), t = ah(e, 1, !0, t, n ? ? null, l, a, u, h, v, E, O), t.context = ih(null), n = t.current, l = ht(), l = Ar(l), a = un(l), a.callback = null, on(n, a, l), n = l, t.current.lanes = n, Bl(t, n), Lt(t), e[Kn] = t.current, wu(e), new rr(t)
    }, Ha.version = "19.1.1", Ha
}
var sm;

function Iy() {
    if (sm) return to.exports;
    sm = 1;

    function s() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)
        } catch (i) {
            console.error(i)
        }
    }
    return s(), to.exports = Wy(), to.exports
}
var ev = Iy();
/**
 * react-router v7.9.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
var um = "popstate";

function tv(s = {}) {
    function i(o, c) {
        let {
            pathname: f,
            search: d,
            hash: g
        } = o.location;
        return fo("", {
            pathname: f,
            search: d,
            hash: g
        }, c.state && c.state.usr || null, c.state && c.state.key || "default")
    }

    function r(o, c) {
        return typeof c == "string" ? c : Ya(c)
    }
    return lv(i, r, null, s)
}

function ke(s, i) {
    if (s === !1 || s === null || typeof s > "u") throw new Error(i)
}

function zt(s, i) {
    if (!s) {
        typeof console < "u" && console.warn(i);
        try {
            throw new Error(i)
        } catch {}
    }
}

function nv() {
    return Math.random().toString(36).substring(2, 10)
}

function om(s, i) {
    return {
        usr: s.state,
        key: s.key,
        idx: i
    }
}

function fo(s, i, r = null, o) {
    return {
        pathname: typeof s == "string" ? s : s.pathname,
        search: "",
        hash: "",
        ...typeof i == "string" ? Qa(i) : i,
        state: r,
        key: i && i.key || o || nv()
    }
}

function Ya({
    pathname: s = "/",
    search: i = "",
    hash: r = ""
}) {
    return i && i !== "?" && (s += i.charAt(0) === "?" ? i : "?" + i), r && r !== "#" && (s += r.charAt(0) === "#" ? r : "#" + r), s
}

function Qa(s) {
    let i = {};
    if (s) {
        let r = s.indexOf("#");
        r >= 0 && (i.hash = s.substring(r), s = s.substring(0, r));
        let o = s.indexOf("?");
        o >= 0 && (i.search = s.substring(o), s = s.substring(0, o)), s && (i.pathname = s)
    }
    return i
}

function lv(s, i, r, o = {}) {
    let {
        window: c = document.defaultView,
        v5Compat: f = !1
    } = o, d = c.history, g = "POP", p = null, m = x();
    m == null && (m = 0, d.replaceState({ ...d.state,
        idx: m
    }, ""));

    function x() {
        return (d.state || {
            idx: null
        }).idx
    }

    function b() {
        g = "POP";
        let _ = x(),
            D = _ == null ? null : _ - m;
        m = _, p && p({
            action: g,
            location: A.location,
            delta: D
        })
    }

    function w(_, D) {
        g = "PUSH";
        let z = fo(A.location, _, D);
        m = x() + 1;
        let Y = om(z, m),
            P = A.createHref(z);
        try {
            d.pushState(Y, "", P)
        } catch (Q) {
            if (Q instanceof DOMException && Q.name === "DataCloneError") throw Q;
            c.location.assign(P)
        }
        f && p && p({
            action: g,
            location: A.location,
            delta: 1
        })
    }

    function S(_, D) {
        g = "REPLACE";
        let z = fo(A.location, _, D);
        m = x();
        let Y = om(z, m),
            P = A.createHref(z);
        d.replaceState(Y, "", P), f && p && p({
            action: g,
            location: A.location,
            delta: 0
        })
    }

    function N(_) {
        return av(_)
    }
    let A = {
        get action() {
            return g
        },
        get location() {
            return s(c, d)
        },
        listen(_) {
            if (p) throw new Error("A history only accepts one active listener");
            return c.addEventListener(um, b), p = _, () => {
                c.removeEventListener(um, b), p = null
            }
        },
        createHref(_) {
            return i(c, _)
        },
        createURL: N,
        encodeLocation(_) {
            let D = N(_);
            return {
                pathname: D.pathname,
                search: D.search,
                hash: D.hash
            }
        },
        push: w,
        replace: S,
        go(_) {
            return d.go(_)
        }
    };
    return A
}

function av(s, i = !1) {
    let r = "http://localhost";
    typeof window < "u" && (r = window.location.origin !== "null" ? window.location.origin : window.location.href), ke(r, "No window.location.(origin|href) available to create URL");
    let o = typeof s == "string" ? s : Ya(s);
    return o = o.replace(/ $/, "%20"), !i && o.startsWith("//") && (o = r + o), new URL(o, r)
}

function Om(s, i, r = "/") {
    return iv(s, i, r, !1)
}

function iv(s, i, r, o) {
    let c = typeof i == "string" ? Qa(i) : i,
        f = It(c.pathname || "/", r);
    if (f == null) return null;
    let d = Am(s);
    rv(d);
    let g = null;
    for (let p = 0; g == null && p < d.length; ++p) {
        let m = yv(f);
        g = gv(d[p], m, o)
    }
    return g
}

function Am(s, i = [], r = [], o = "", c = !1) {
    let f = (d, g, p = c, m) => {
        let x = {
            relativePath: m === void 0 ? d.path || "" : m,
            caseSensitive: d.caseSensitive === !0,
            childrenIndex: g,
            route: d
        };
        if (x.relativePath.startsWith("/")) {
            if (!x.relativePath.startsWith(o) && p) return;
            ke(x.relativePath.startsWith(o), `Absolute route path "${x.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`), x.relativePath = x.relativePath.slice(o.length)
        }
        let b = Wt([o, x.relativePath]),
            w = r.concat(x);
        d.children && d.children.length > 0 && (ke(d.index !== !0, `Index routes must not have child routes. Please remove all child routes from route path "${b}".`), Am(d.children, i, w, b, p)), !(d.path == null && !d.index) && i.push({
            path: b,
            score: hv(b, d.index),
            routesMeta: w
        })
    };
    return s.forEach((d, g) => {
        if (d.path === "" || !d.path ? .includes("?")) f(d, g);
        else
            for (let p of Mm(d.path)) f(d, g, !0, p)
    }), i
}

function Mm(s) {
    let i = s.split("/");
    if (i.length === 0) return [];
    let [r, ...o] = i, c = r.endsWith("?"), f = r.replace(/\?$/, "");
    if (o.length === 0) return c ? [f, ""] : [f];
    let d = Mm(o.join("/")),
        g = [];
    return g.push(...d.map(p => p === "" ? f : [f, p].join("/"))), c && g.push(...d), g.map(p => s.startsWith("/") && p === "" ? "/" : p)
}

function rv(s) {
    s.sort((i, r) => i.score !== r.score ? r.score - i.score : mv(i.routesMeta.map(o => o.childrenIndex), r.routesMeta.map(o => o.childrenIndex)))
}
var sv = /^:[\w-]+$/,
    uv = 3,
    ov = 2,
    cv = 1,
    fv = 10,
    dv = -2,
    cm = s => s === "*";

function hv(s, i) {
    let r = s.split("/"),
        o = r.length;
    return r.some(cm) && (o += dv), i && (o += ov), r.filter(c => !cm(c)).reduce((c, f) => c + (sv.test(f) ? uv : f === "" ? cv : fv), o)
}

function mv(s, i) {
    return s.length === i.length && s.slice(0, -1).every((o, c) => o === i[c]) ? s[s.length - 1] - i[i.length - 1] : 0
}

function gv(s, i, r = !1) {
    let {
        routesMeta: o
    } = s, c = {}, f = "/", d = [];
    for (let g = 0; g < o.length; ++g) {
        let p = o[g],
            m = g === o.length - 1,
            x = f === "/" ? i : i.slice(f.length) || "/",
            b = xr({
                path: p.relativePath,
                caseSensitive: p.caseSensitive,
                end: m
            }, x),
            w = p.route;
        if (!b && m && r && !o[o.length - 1].route.index && (b = xr({
                path: p.relativePath,
                caseSensitive: p.caseSensitive,
                end: !1
            }, x)), !b) return null;
        Object.assign(c, b.params), d.push({
            params: c,
            pathname: Wt([f, b.pathname]),
            pathnameBase: Sv(Wt([f, b.pathnameBase])),
            route: w
        }), b.pathnameBase !== "/" && (f = Wt([f, b.pathnameBase]))
    }
    return d
}

function xr(s, i) {
    typeof s == "string" && (s = {
        path: s,
        caseSensitive: !1,
        end: !0
    });
    let [r, o] = pv(s.path, s.caseSensitive, s.end), c = i.match(r);
    if (!c) return null;
    let f = c[0],
        d = f.replace(/(.)\/+$/, "$1"),
        g = c.slice(1);
    return {
        params: o.reduce((m, {
            paramName: x,
            isOptional: b
        }, w) => {
            if (x === "*") {
                let N = g[w] || "";
                d = f.slice(0, f.length - N.length).replace(/(.)\/+$/, "$1")
            }
            const S = g[w];
            return b && !S ? m[x] = void 0 : m[x] = (S || "").replace(/%2F/g, "/"), m
        }, {}),
        pathname: f,
        pathnameBase: d,
        pattern: s
    }
}

function pv(s, i = !1, r = !0) {
    zt(s === "*" || !s.endsWith("*") || s.endsWith("/*"), `Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);
    let o = [],
        c = "^" + s.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (d, g, p) => (o.push({
            paramName: g,
            isOptional: p != null
        }), p ? "/?([^\\/]+)?" : "/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
    return s.endsWith("*") ? (o.push({
        paramName: "*"
    }), c += s === "*" || s === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : r ? c += "\\/*$" : s !== "" && s !== "/" && (c += "(?:(?=\\/|$))"), [new RegExp(c, i ? void 0 : "i"), o]
}

function yv(s) {
    try {
        return s.split("/").map(i => decodeURIComponent(i).replace(/\//g, "%2F")).join("/")
    } catch (i) {
        return zt(!1, `The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${i}).`), s
    }
}

function It(s, i) {
    if (i === "/") return s;
    if (!s.toLowerCase().startsWith(i.toLowerCase())) return null;
    let r = i.endsWith("/") ? i.length - 1 : i.length,
        o = s.charAt(r);
    return o && o !== "/" ? null : s.slice(r) || "/"
}

function vv(s, i = "/") {
    let {
        pathname: r,
        search: o = "",
        hash: c = ""
    } = typeof s == "string" ? Qa(s) : s;
    return {
        pathname: r ? r.startsWith("/") ? r : xv(r, i) : i,
        search: wv(o),
        hash: Ev(c)
    }
}

function xv(s, i) {
    let r = i.replace(/\/+$/, "").split("/");
    return s.split("/").forEach(c => {
        c === ".." ? r.length > 1 && r.pop() : c !== "." && r.push(c)
    }), r.length > 1 ? r.join("/") : "/"
}

function io(s, i, r, o) {
    return `Cannot include a '${s}' character in a manually specified \`to.${i}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`
}

function bv(s) {
    return s.filter((i, r) => r === 0 || i.route.path && i.route.path.length > 0)
}

function Lm(s) {
    let i = bv(s);
    return i.map((r, o) => o === i.length - 1 ? r.pathname : r.pathnameBase)
}

function Dm(s, i, r, o = !1) {
    let c;
    typeof s == "string" ? c = Qa(s) : (c = { ...s
    }, ke(!c.pathname || !c.pathname.includes("?"), io("?", "pathname", "search", c)), ke(!c.pathname || !c.pathname.includes("#"), io("#", "pathname", "hash", c)), ke(!c.search || !c.search.includes("#"), io("#", "search", "hash", c)));
    let f = s === "" || c.pathname === "",
        d = f ? "/" : c.pathname,
        g;
    if (d == null) g = r;
    else {
        let b = i.length - 1;
        if (!o && d.startsWith("..")) {
            let w = d.split("/");
            for (; w[0] === "..";) w.shift(), b -= 1;
            c.pathname = w.join("/")
        }
        g = b >= 0 ? i[b] : "/"
    }
    let p = vv(c, g),
        m = d && d !== "/" && d.endsWith("/"),
        x = (f || d === ".") && r.endsWith("/");
    return !p.pathname.endsWith("/") && (m || x) && (p.pathname += "/"), p
}
var Wt = s => s.join("/").replace(/\/\/+/g, "/"),
    Sv = s => s.replace(/\/+$/, "").replace(/^\/*/, "/"),
    wv = s => !s || s === "?" ? "" : s.startsWith("?") ? s : "?" + s,
    Ev = s => !s || s === "#" ? "" : s.startsWith("#") ? s : "#" + s;

function Nv(s) {
    return s != null && typeof s.status == "number" && typeof s.statusText == "string" && typeof s.internal == "boolean" && "data" in s
}
var zm = ["POST", "PUT", "PATCH", "DELETE"];
new Set(zm);
var Cv = ["GET", ...zm];
new Set(Cv);
var zl = V.createContext(null);
zl.displayName = "DataRouter";
var Er = V.createContext(null);
Er.displayName = "DataRouterState";
V.createContext(!1);
var Um = V.createContext({
    isTransitioning: !1
});
Um.displayName = "ViewTransition";
var _v = V.createContext(new Map);
_v.displayName = "Fetchers";
var Rv = V.createContext(null);
Rv.displayName = "Await";
var Ut = V.createContext(null);
Ut.displayName = "Navigation";
var Nr = V.createContext(null);
Nr.displayName = "Location";
var en = V.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
});
en.displayName = "Route";
var yo = V.createContext(null);
yo.displayName = "RouteError";

function jv(s, {
    relative: i
} = {}) {
    ke(Xa(), "useHref() may be used only in the context of a <Router> component.");
    let {
        basename: r,
        navigator: o
    } = V.useContext(Ut), {
        hash: c,
        pathname: f,
        search: d
    } = Ka(s, {
        relative: i
    }), g = f;
    return r !== "/" && (g = f === "/" ? r : Wt([r, f])), o.createHref({
        pathname: g,
        search: d,
        hash: c
    })
}

function Xa() {
    return V.useContext(Nr) != null
}

function Xn() {
    return ke(Xa(), "useLocation() may be used only in the context of a <Router> component."), V.useContext(Nr).location
}
var Hm = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";

function Bm(s) {
    V.useContext(Ut).static || V.useLayoutEffect(s)
}

function qm() {
    let {
        isDataRoute: s
    } = V.useContext(en);
    return s ? kv() : Tv()
}

function Tv() {
    ke(Xa(), "useNavigate() may be used only in the context of a <Router> component.");
    let s = V.useContext(zl),
        {
            basename: i,
            navigator: r
        } = V.useContext(Ut),
        {
            matches: o
        } = V.useContext(en),
        {
            pathname: c
        } = Xn(),
        f = JSON.stringify(Lm(o)),
        d = V.useRef(!1);
    return Bm(() => {
        d.current = !0
    }), V.useCallback((p, m = {}) => {
        if (zt(d.current, Hm), !d.current) return;
        if (typeof p == "number") {
            r.go(p);
            return
        }
        let x = Dm(p, JSON.parse(f), c, m.relative === "path");
        s == null && i !== "/" && (x.pathname = x.pathname === "/" ? i : Wt([i, x.pathname])), (m.replace ? r.replace : r.push)(x, m.state, m)
    }, [i, r, f, c, s])
}
V.createContext(null);

function Ka(s, {
    relative: i
} = {}) {
    let {
        matches: r
    } = V.useContext(en), {
        pathname: o
    } = Xn(), c = JSON.stringify(Lm(r));
    return V.useMemo(() => Dm(s, JSON.parse(c), o, i === "path"), [s, c, o, i])
}

function Ov(s, i) {
    return Vm(s)
}

function Vm(s, i, r, o, c) {
    ke(Xa(), "useRoutes() may be used only in the context of a <Router> component.");
    let {
        navigator: f
    } = V.useContext(Ut), {
        matches: d
    } = V.useContext(en), g = d[d.length - 1], p = g ? g.params : {}, m = g ? g.pathname : "/", x = g ? g.pathnameBase : "/", b = g && g.route; {
        let z = b && b.path || "";
        km(m, !b || z.endsWith("*") || z.endsWith("*?"), `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${z}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${z}"> to <Route path="${z==="/"?"*":`${z}/*`}">.`)
    }
    let w = Xn(),
        S;
    S = w;
    let N = S.pathname || "/",
        A = N;
    if (x !== "/") {
        let z = x.replace(/^\//, "").split("/");
        A = "/" + N.replace(/^\//, "").split("/").slice(z.length).join("/")
    }
    let _ = Om(s, {
        pathname: A
    });
    return zt(b || _ != null, `No routes matched location "${S.pathname}${S.search}${S.hash}" `), zt(_ == null || _[_.length - 1].route.element !== void 0 || _[_.length - 1].route.Component !== void 0 || _[_.length - 1].route.lazy !== void 0, `Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`), zv(_ && _.map(z => Object.assign({}, z, {
        params: Object.assign({}, p, z.params),
        pathname: Wt([x, f.encodeLocation ? f.encodeLocation(z.pathname.replace(/\?/g, "%3F").replace(/#/g, "%23")).pathname : z.pathname]),
        pathnameBase: z.pathnameBase === "/" ? x : Wt([x, f.encodeLocation ? f.encodeLocation(z.pathnameBase.replace(/\?/g, "%3F").replace(/#/g, "%23")).pathname : z.pathnameBase])
    })), d, r, o, c)
}

function Av() {
    let s = Vv(),
        i = Nv(s) ? `${s.status} ${s.statusText}` : s instanceof Error ? s.message : JSON.stringify(s),
        r = s instanceof Error ? s.stack : null,
        o = "rgba(200,200,200, 0.5)",
        c = {
            padding: "0.5rem",
            backgroundColor: o
        },
        f = {
            padding: "2px 4px",
            backgroundColor: o
        },
        d = null;
    return console.error("Error handled by React Router default ErrorBoundary:", s), d = V.createElement(V.Fragment, null, V.createElement("p", null, "💿 Hey developer 👋"), V.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", V.createElement("code", {
        style: f
    }, "ErrorBoundary"), " or", " ", V.createElement("code", {
        style: f
    }, "errorElement"), " prop on your route.")), V.createElement(V.Fragment, null, V.createElement("h2", null, "Unexpected Application Error!"), V.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, i), r ? V.createElement("pre", {
        style: c
    }, r) : null, d)
}
var Mv = V.createElement(Av, null),
    Lv = class extends V.Component {
        constructor(s) {
            super(s), this.state = {
                location: s.location,
                revalidation: s.revalidation,
                error: s.error
            }
        }
        static getDerivedStateFromError(s) {
            return {
                error: s
            }
        }
        static getDerivedStateFromProps(s, i) {
            return i.location !== s.location || i.revalidation !== "idle" && s.revalidation === "idle" ? {
                error: s.error,
                location: s.location,
                revalidation: s.revalidation
            } : {
                error: s.error !== void 0 ? s.error : i.error,
                location: i.location,
                revalidation: s.revalidation || i.revalidation
            }
        }
        componentDidCatch(s, i) {
            this.props.unstable_onError ? this.props.unstable_onError(s, i) : console.error("React Router caught the following error during render", s)
        }
        render() {
            return this.state.error !== void 0 ? V.createElement(en.Provider, {
                value: this.props.routeContext
            }, V.createElement(yo.Provider, {
                value: this.state.error,
                children: this.props.component
            })) : this.props.children
        }
    };

function Dv({
    routeContext: s,
    match: i,
    children: r
}) {
    let o = V.useContext(zl);
    return o && o.static && o.staticContext && (i.route.errorElement || i.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = i.route.id), V.createElement(en.Provider, {
        value: s
    }, r)
}

function zv(s, i = [], r = null, o = null, c = null) {
    if (s == null) {
        if (!r) return null;
        if (r.errors) s = r.matches;
        else if (i.length === 0 && !r.initialized && r.matches.length > 0) s = r.matches;
        else return null
    }
    let f = s,
        d = r ? .errors;
    if (d != null) {
        let m = f.findIndex(x => x.route.id && d ? .[x.route.id] !== void 0);
        ke(m >= 0, `Could not find a matching route for errors on route IDs: ${Object.keys(d).join(",")}`), f = f.slice(0, Math.min(f.length, m + 1))
    }
    let g = !1,
        p = -1;
    if (r)
        for (let m = 0; m < f.length; m++) {
            let x = f[m];
            if ((x.route.HydrateFallback || x.route.hydrateFallbackElement) && (p = m), x.route.id) {
                let {
                    loaderData: b,
                    errors: w
                } = r, S = x.route.loader && !b.hasOwnProperty(x.route.id) && (!w || w[x.route.id] === void 0);
                if (x.route.lazy || S) {
                    g = !0, p >= 0 ? f = f.slice(0, p + 1) : f = [f[0]];
                    break
                }
            }
        }
    return f.reduceRight((m, x, b) => {
        let w, S = !1,
            N = null,
            A = null;
        r && (w = d && x.route.id ? d[x.route.id] : void 0, N = x.route.errorElement || Mv, g && (p < 0 && b === 0 ? (km("route-fallback", !1, "No `HydrateFallback` element provided to render during initial hydration"), S = !0, A = null) : p === b && (S = !0, A = x.route.hydrateFallbackElement || null)));
        let _ = i.concat(f.slice(0, b + 1)),
            D = () => {
                let z;
                return w ? z = N : S ? z = A : x.route.Component ? z = V.createElement(x.route.Component, null) : x.route.element ? z = x.route.element : z = m, V.createElement(Dv, {
                    match: x,
                    routeContext: {
                        outlet: m,
                        matches: _,
                        isDataRoute: r != null
                    },
                    children: z
                })
            };
        return r && (x.route.ErrorBoundary || x.route.errorElement || b === 0) ? V.createElement(Lv, {
            location: r.location,
            revalidation: r.revalidation,
            component: N,
            error: w,
            children: D(),
            routeContext: {
                outlet: null,
                matches: _,
                isDataRoute: !0
            },
            unstable_onError: o
        }) : D()
    }, null)
}

function vo(s) {
    return `${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`
}

function Uv(s) {
    let i = V.useContext(zl);
    return ke(i, vo(s)), i
}

function Hv(s) {
    let i = V.useContext(Er);
    return ke(i, vo(s)), i
}

function Bv(s) {
    let i = V.useContext(en);
    return ke(i, vo(s)), i
}

function xo(s) {
    let i = Bv(s),
        r = i.matches[i.matches.length - 1];
    return ke(r.route.id, `${s} can only be used on routes that contain a unique "id"`), r.route.id
}

function qv() {
    return xo("useRouteId")
}

function Vv() {
    let s = V.useContext(yo),
        i = Hv("useRouteError"),
        r = xo("useRouteError");
    return s !== void 0 ? s : i.errors ? .[r]
}

function kv() {
    let {
        router: s
    } = Uv("useNavigate"), i = xo("useNavigate"), r = V.useRef(!1);
    return Bm(() => {
        r.current = !0
    }), V.useCallback(async (c, f = {}) => {
        zt(r.current, Hm), r.current && (typeof c == "number" ? s.navigate(c) : await s.navigate(c, {
            fromRouteId: i,
            ...f
        }))
    }, [s, i])
}
var fm = {};

function km(s, i, r) {
    !i && !fm[s] && (fm[s] = !0, zt(!1, r))
}
V.memo(Gv);

function Gv({
    routes: s,
    future: i,
    state: r,
    unstable_onError: o
}) {
    return Vm(s, void 0, r, o, i)
}

function Yv({
    basename: s = "/",
    children: i = null,
    location: r,
    navigationType: o = "POP",
    navigator: c,
    static: f = !1
}) {
    ke(!Xa(), "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
    let d = s.replace(/^\/*/, "/"),
        g = V.useMemo(() => ({
            basename: d,
            navigator: c,
            static: f,
            future: {}
        }), [d, c, f]);
    typeof r == "string" && (r = Qa(r));
    let {
        pathname: p = "/",
        search: m = "",
        hash: x = "",
        state: b = null,
        key: w = "default"
    } = r, S = V.useMemo(() => {
        let N = It(p, d);
        return N == null ? null : {
            location: {
                pathname: N,
                search: m,
                hash: x,
                state: b,
                key: w
            },
            navigationType: o
        }
    }, [d, p, m, x, b, w, o]);
    return zt(S != null, `<Router basename="${d}"> is not able to match the URL "${p}${m}${x}" because it does not start with the basename, so the <Router> won't render anything.`), S == null ? null : V.createElement(Ut.Provider, {
        value: g
    }, V.createElement(Nr.Provider, {
        children: i,
        value: S
    }))
}
var hr = "get",
    mr = "application/x-www-form-urlencoded";

function Cr(s) {
    return s != null && typeof s.tagName == "string"
}

function Qv(s) {
    return Cr(s) && s.tagName.toLowerCase() === "button"
}

function Xv(s) {
    return Cr(s) && s.tagName.toLowerCase() === "form"
}

function Kv(s) {
    return Cr(s) && s.tagName.toLowerCase() === "input"
}

function Zv(s) {
    return !!(s.metaKey || s.altKey || s.ctrlKey || s.shiftKey)
}

function $v(s, i) {
    return s.button === 0 && (!i || i === "_self") && !Zv(s)
}
var dr = null;

function Jv() {
    if (dr === null) try {
        new FormData(document.createElement("form"), 0), dr = !1
    } catch {
        dr = !0
    }
    return dr
}
var Fv = new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);

function ro(s) {
    return s != null && !Fv.has(s) ? (zt(!1, `"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${mr}"`), null) : s
}

function Pv(s, i) {
    let r, o, c, f, d;
    if (Xv(s)) {
        let g = s.getAttribute("action");
        o = g ? It(g, i) : null, r = s.getAttribute("method") || hr, c = ro(s.getAttribute("enctype")) || mr, f = new FormData(s)
    } else if (Qv(s) || Kv(s) && (s.type === "submit" || s.type === "image")) {
        let g = s.form;
        if (g == null) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
        let p = s.getAttribute("formaction") || g.getAttribute("action");
        if (o = p ? It(p, i) : null, r = s.getAttribute("formmethod") || g.getAttribute("method") || hr, c = ro(s.getAttribute("formenctype")) || ro(g.getAttribute("enctype")) || mr, f = new FormData(g, s), !Jv()) {
            let {
                name: m,
                type: x,
                value: b
            } = s;
            if (x === "image") {
                let w = m ? `${m}.` : "";
                f.append(`${w}x`, "0"), f.append(`${w}y`, "0")
            } else m && f.append(m, b)
        }
    } else {
        if (Cr(s)) throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
        r = hr, o = null, c = mr, d = s
    }
    return f && c === "text/plain" && (d = f, f = void 0), {
        action: o,
        method: r.toLowerCase(),
        encType: c,
        formData: f,
        body: d
    }
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");

function bo(s, i) {
    if (s === !1 || s === null || typeof s > "u") throw new Error(i)
}

function Wv(s, i, r) {
    let o = typeof s == "string" ? new URL(s, typeof window > "u" ? "server://singlefetch/" : window.location.origin) : s;
    return o.pathname === "/" ? o.pathname = `_root.${r}` : i && It(o.pathname, i) === "/" ? o.pathname = `${i.replace(/\/$/,"")}/_root.${r}` : o.pathname = `${o.pathname.replace(/\/$/,"")}.${r}`, o
}
async function Iv(s, i) {
    if (s.id in i) return i[s.id];
    try {
        let r = await
        import (s.module);
        return i[s.id] = r, r
    } catch (r) {
        return console.error(`Error loading route module \`${s.module}\`, reloading page...`), console.error(r), window.__reactRouterContext && window.__reactRouterContext.isSpaMode, window.location.reload(), new Promise(() => {})
    }
}

function ex(s) {
    return s == null ? !1 : s.href == null ? s.rel === "preload" && typeof s.imageSrcSet == "string" && typeof s.imageSizes == "string" : typeof s.rel == "string" && typeof s.href == "string"
}
async function tx(s, i, r) {
    let o = await Promise.all(s.map(async c => {
        let f = i.routes[c.route.id];
        if (f) {
            let d = await Iv(f, r);
            return d.links ? d.links() : []
        }
        return []
    }));
    return ix(o.flat(1).filter(ex).filter(c => c.rel === "stylesheet" || c.rel === "preload").map(c => c.rel === "stylesheet" ? { ...c,
        rel: "prefetch",
        as: "style"
    } : { ...c,
        rel: "prefetch"
    }))
}

function dm(s, i, r, o, c, f) {
    let d = (p, m) => r[m] ? p.route.id !== r[m].route.id : !0,
        g = (p, m) => r[m].pathname !== p.pathname || r[m].route.path ? .endsWith("*") && r[m].params["*"] !== p.params["*"];
    return f === "assets" ? i.filter((p, m) => d(p, m) || g(p, m)) : f === "data" ? i.filter((p, m) => {
        let x = o.routes[p.route.id];
        if (!x || !x.hasLoader) return !1;
        if (d(p, m) || g(p, m)) return !0;
        if (p.route.shouldRevalidate) {
            let b = p.route.shouldRevalidate({
                currentUrl: new URL(c.pathname + c.search + c.hash, window.origin),
                currentParams: r[0] ? .params || {},
                nextUrl: new URL(s, window.origin),
                nextParams: p.params,
                defaultShouldRevalidate: !0
            });
            if (typeof b == "boolean") return b
        }
        return !0
    }) : []
}

function nx(s, i, {
    includeHydrateFallback: r
} = {}) {
    return lx(s.map(o => {
        let c = i.routes[o.route.id];
        if (!c) return [];
        let f = [c.module];
        return c.clientActionModule && (f = f.concat(c.clientActionModule)), c.clientLoaderModule && (f = f.concat(c.clientLoaderModule)), r && c.hydrateFallbackModule && (f = f.concat(c.hydrateFallbackModule)), c.imports && (f = f.concat(c.imports)), f
    }).flat(1))
}

function lx(s) {
    return [...new Set(s)]
}

function ax(s) {
    let i = {},
        r = Object.keys(s).sort();
    for (let o of r) i[o] = s[o];
    return i
}

function ix(s, i) {
    let r = new Set;
    return new Set(i), s.reduce((o, c) => {
        let f = JSON.stringify(ax(c));
        return r.has(f) || (r.add(f), o.push({
            key: f,
            link: c
        })), o
    }, [])
}

function Gm() {
    let s = V.useContext(zl);
    return bo(s, "You must render this element inside a <DataRouterContext.Provider> element"), s
}

function rx() {
    let s = V.useContext(Er);
    return bo(s, "You must render this element inside a <DataRouterStateContext.Provider> element"), s
}
var So = V.createContext(void 0);
So.displayName = "FrameworkContext";

function Ym() {
    let s = V.useContext(So);
    return bo(s, "You must render this element inside a <HydratedRouter> element"), s
}

function sx(s, i) {
    let r = V.useContext(So),
        [o, c] = V.useState(!1),
        [f, d] = V.useState(!1),
        {
            onFocus: g,
            onBlur: p,
            onMouseEnter: m,
            onMouseLeave: x,
            onTouchStart: b
        } = i,
        w = V.useRef(null);
    V.useEffect(() => {
        if (s === "render" && d(!0), s === "viewport") {
            let A = D => {
                    D.forEach(z => {
                        d(z.isIntersecting)
                    })
                },
                _ = new IntersectionObserver(A, {
                    threshold: .5
                });
            return w.current && _.observe(w.current), () => {
                _.disconnect()
            }
        }
    }, [s]), V.useEffect(() => {
        if (o) {
            let A = setTimeout(() => {
                d(!0)
            }, 100);
            return () => {
                clearTimeout(A)
            }
        }
    }, [o]);
    let S = () => {
            c(!0)
        },
        N = () => {
            c(!1), d(!1)
        };
    return r ? s !== "intent" ? [f, w, {}] : [f, w, {
        onFocus: Ba(g, S),
        onBlur: Ba(p, N),
        onMouseEnter: Ba(m, S),
        onMouseLeave: Ba(x, N),
        onTouchStart: Ba(b, S)
    }] : [!1, w, {}]
}

function Ba(s, i) {
    return r => {
        s && s(r), r.defaultPrevented || i(r)
    }
}

function ux({
    page: s,
    ...i
}) {
    let {
        router: r
    } = Gm(), o = V.useMemo(() => Om(r.routes, s, r.basename), [r.routes, s, r.basename]);
    return o ? V.createElement(cx, {
        page: s,
        matches: o,
        ...i
    }) : null
}

function ox(s) {
    let {
        manifest: i,
        routeModules: r
    } = Ym(), [o, c] = V.useState([]);
    return V.useEffect(() => {
        let f = !1;
        return tx(s, i, r).then(d => {
            f || c(d)
        }), () => {
            f = !0
        }
    }, [s, i, r]), o
}

function cx({
    page: s,
    matches: i,
    ...r
}) {
    let o = Xn(),
        {
            manifest: c,
            routeModules: f
        } = Ym(),
        {
            basename: d
        } = Gm(),
        {
            loaderData: g,
            matches: p
        } = rx(),
        m = V.useMemo(() => dm(s, i, p, c, o, "data"), [s, i, p, c, o]),
        x = V.useMemo(() => dm(s, i, p, c, o, "assets"), [s, i, p, c, o]),
        b = V.useMemo(() => {
            if (s === o.pathname + o.search + o.hash) return [];
            let N = new Set,
                A = !1;
            if (i.forEach(D => {
                    let z = c.routes[D.route.id];
                    !z || !z.hasLoader || (!m.some(Y => Y.route.id === D.route.id) && D.route.id in g && f[D.route.id] ? .shouldRevalidate || z.hasClientLoader ? A = !0 : N.add(D.route.id))
                }), N.size === 0) return [];
            let _ = Wv(s, d, "data");
            return A && N.size > 0 && _.searchParams.set("_routes", i.filter(D => N.has(D.route.id)).map(D => D.route.id).join(",")), [_.pathname + _.search]
        }, [d, g, o, c, m, i, s, f]),
        w = V.useMemo(() => nx(x, c), [x, c]),
        S = ox(x);
    return V.createElement(V.Fragment, null, b.map(N => V.createElement("link", {
        key: N,
        rel: "prefetch",
        as: "fetch",
        href: N,
        ...r
    })), w.map(N => V.createElement("link", {
        key: N,
        rel: "modulepreload",
        href: N,
        ...r
    })), S.map(({
        key: N,
        link: A
    }) => V.createElement("link", {
        key: N,
        nonce: r.nonce,
        ...A
    })))
}

function fx(...s) {
    return i => {
        s.forEach(r => {
            typeof r == "function" ? r(i) : r != null && (r.current = i)
        })
    }
}
var Qm = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
    Qm && (window.__reactRouterVersion = "7.9.3")
} catch {}

function dx({
    basename: s,
    children: i,
    window: r
}) {
    let o = V.useRef();
    o.current == null && (o.current = tv({
        window: r,
        v5Compat: !0
    }));
    let c = o.current,
        [f, d] = V.useState({
            action: c.action,
            location: c.location
        }),
        g = V.useCallback(p => {
            V.startTransition(() => d(p))
        }, [d]);
    return V.useLayoutEffect(() => c.listen(g), [c, g]), V.createElement(Yv, {
        basename: s,
        children: i,
        location: f.location,
        navigationType: f.action,
        navigator: c
    })
}
var Xm = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
    Km = V.forwardRef(function({
        onClick: i,
        discover: r = "render",
        prefetch: o = "none",
        relative: c,
        reloadDocument: f,
        replace: d,
        state: g,
        target: p,
        to: m,
        preventScrollReset: x,
        viewTransition: b,
        ...w
    }, S) {
        let {
            basename: N
        } = V.useContext(Ut), A = typeof m == "string" && Xm.test(m), _, D = !1;
        if (typeof m == "string" && A && (_ = m, Qm)) try {
            let ye = new URL(window.location.href),
                G = m.startsWith("//") ? new URL(ye.protocol + m) : new URL(m),
                K = It(G.pathname, N);
            G.origin === ye.origin && K != null ? m = K + G.search + G.hash : D = !0
        } catch {
            zt(!1, `<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)
        }
        let z = jv(m, {
                relative: c
            }),
            [Y, P, Q] = sx(o, w),
            se = px(m, {
                replace: d,
                state: g,
                target: p,
                preventScrollReset: x,
                relative: c,
                viewTransition: b
            });

        function pe(ye) {
            i && i(ye), ye.defaultPrevented || se(ye)
        }
        let we = V.createElement("a", { ...w,
            ...Q,
            href: _ || z,
            onClick: D || f ? i : pe,
            ref: fx(S, P),
            target: p,
            "data-discover": !A && r === "render" ? "true" : void 0
        });
        return Y && !A ? V.createElement(V.Fragment, null, we, V.createElement(ux, {
            page: z
        })) : we
    });
Km.displayName = "Link";
var hx = V.forwardRef(function({
    "aria-current": i = "page",
    caseSensitive: r = !1,
    className: o = "",
    end: c = !1,
    style: f,
    to: d,
    viewTransition: g,
    children: p,
    ...m
}, x) {
    let b = Ka(d, {
            relative: m.relative
        }),
        w = Xn(),
        S = V.useContext(Er),
        {
            navigator: N,
            basename: A
        } = V.useContext(Ut),
        _ = S != null && Sx(b) && g === !0,
        D = N.encodeLocation ? N.encodeLocation(b).pathname : b.pathname,
        z = w.pathname,
        Y = S && S.navigation && S.navigation.location ? S.navigation.location.pathname : null;
    r || (z = z.toLowerCase(), Y = Y ? Y.toLowerCase() : null, D = D.toLowerCase()), Y && A && (Y = It(Y, A) || Y);
    const P = D !== "/" && D.endsWith("/") ? D.length - 1 : D.length;
    let Q = z === D || !c && z.startsWith(D) && z.charAt(P) === "/",
        se = Y != null && (Y === D || !c && Y.startsWith(D) && Y.charAt(D.length) === "/"),
        pe = {
            isActive: Q,
            isPending: se,
            isTransitioning: _
        },
        we = Q ? i : void 0,
        ye;
    typeof o == "function" ? ye = o(pe) : ye = [o, Q ? "active" : null, se ? "pending" : null, _ ? "transitioning" : null].filter(Boolean).join(" ");
    let G = typeof f == "function" ? f(pe) : f;
    return V.createElement(Km, { ...m,
        "aria-current": we,
        className: ye,
        ref: x,
        style: G,
        to: d,
        viewTransition: g
    }, typeof p == "function" ? p(pe) : p)
});
hx.displayName = "NavLink";
var mx = V.forwardRef(({
    discover: s = "render",
    fetcherKey: i,
    navigate: r,
    reloadDocument: o,
    replace: c,
    state: f,
    method: d = hr,
    action: g,
    onSubmit: p,
    relative: m,
    preventScrollReset: x,
    viewTransition: b,
    ...w
}, S) => {
    let N = xx(),
        A = bx(g, {
            relative: m
        }),
        _ = d.toLowerCase() === "get" ? "get" : "post",
        D = typeof g == "string" && Xm.test(g),
        z = Y => {
            if (p && p(Y), Y.defaultPrevented) return;
            Y.preventDefault();
            let P = Y.nativeEvent.submitter,
                Q = P ? .getAttribute("formmethod") || d;
            N(P || Y.currentTarget, {
                fetcherKey: i,
                method: Q,
                navigate: r,
                replace: c,
                state: f,
                relative: m,
                preventScrollReset: x,
                viewTransition: b
            })
        };
    return V.createElement("form", {
        ref: S,
        method: _,
        action: A,
        onSubmit: o ? p : z,
        ...w,
        "data-discover": !D && s === "render" ? "true" : void 0
    })
});
mx.displayName = "Form";

function gx(s) {
    return `${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`
}

function Zm(s) {
    let i = V.useContext(zl);
    return ke(i, gx(s)), i
}

function px(s, {
    target: i,
    replace: r,
    state: o,
    preventScrollReset: c,
    relative: f,
    viewTransition: d
} = {}) {
    let g = qm(),
        p = Xn(),
        m = Ka(s, {
            relative: f
        });
    return V.useCallback(x => {
        if ($v(x, i)) {
            x.preventDefault();
            let b = r !== void 0 ? r : Ya(p) === Ya(m);
            g(s, {
                replace: b,
                state: o,
                preventScrollReset: c,
                relative: f,
                viewTransition: d
            })
        }
    }, [p, g, m, r, o, i, s, c, f, d])
}
var yx = 0,
    vx = () => `__${String(++yx)}__`;

function xx() {
    let {
        router: s
    } = Zm("useSubmit"), {
        basename: i
    } = V.useContext(Ut), r = qv();
    return V.useCallback(async (o, c = {}) => {
        let {
            action: f,
            method: d,
            encType: g,
            formData: p,
            body: m
        } = Pv(o, i);
        if (c.navigate === !1) {
            let x = c.fetcherKey || vx();
            await s.fetch(x, r, c.action || f, {
                preventScrollReset: c.preventScrollReset,
                formData: p,
                body: m,
                formMethod: c.method || d,
                formEncType: c.encType || g,
                flushSync: c.flushSync
            })
        } else await s.navigate(c.action || f, {
            preventScrollReset: c.preventScrollReset,
            formData: p,
            body: m,
            formMethod: c.method || d,
            formEncType: c.encType || g,
            replace: c.replace,
            state: c.state,
            fromRouteId: r,
            flushSync: c.flushSync,
            viewTransition: c.viewTransition
        })
    }, [s, i, r])
}

function bx(s, {
    relative: i
} = {}) {
    let {
        basename: r
    } = V.useContext(Ut), o = V.useContext(en);
    ke(o, "useFormAction must be used inside a RouteContext");
    let [c] = o.matches.slice(-1), f = { ...Ka(s || ".", {
            relative: i
        })
    }, d = Xn();
    if (s == null) {
        f.search = d.search;
        let g = new URLSearchParams(f.search),
            p = g.getAll("index");
        if (p.some(x => x === "")) {
            g.delete("index"), p.filter(b => b).forEach(b => g.append("index", b));
            let x = g.toString();
            f.search = x ? `?${x}` : ""
        }
    }
    return (!s || s === ".") && c.route.index && (f.search = f.search ? f.search.replace(/^\?/, "?index&") : "?index"), r !== "/" && (f.pathname = f.pathname === "/" ? r : Wt([r, f.pathname])), Ya(f)
}

function Sx(s, {
    relative: i
} = {}) {
    let r = V.useContext(Um);
    ke(r != null, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
    let {
        basename: o
    } = Zm("useViewTransitionState"), c = Ka(s, {
        relative: i
    });
    if (!r.isTransitioning) return !1;
    let f = It(r.currentLocation.pathname, o) || r.currentLocation.pathname,
        d = It(r.nextLocation.pathname, o) || r.nextLocation.pathname;
    return xr(c.pathname, d) != null || xr(c.pathname, f) != null
}

function wx() {
    return y.jsxs("div", {
        className: "flex flex-col items-center justify-center h-screen text-center px-4",
        children: [y.jsx("h1", {
            className: "text-5xl md:text-5xl font-semibold text-gray-100",
            children: "404"
        }), y.jsx("h1", {
            className: "text-2xl md:text-3xl font-semibold mt-6",
            children: "This page has not been generated"
        }), y.jsx("p", {
            className: "mt-4 text-xl md:text-2xl text-gray-500",
            children: "Tell me what you would like on this page"
        })]
    })
}

function ho({
    children: s,
    variant: i = "primary",
    size: r = "md",
    onClick: o,
    className: c = "",
    disabled: f = !1
}) {
    const d = "whitespace-nowrap cursor-pointer font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95",
        g = {
            primary: "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl",
            secondary: "bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600 shadow-lg hover:shadow-xl",
            outline: "border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white"
        },
        p = {
            sm: "px-4 py-2 text-sm rounded-lg",
            md: "px-6 py-3 text-base rounded-xl",
            lg: "px-8 py-4 text-lg rounded-2xl"
        };
    return y.jsx("button", {
        onClick: o,
        disabled: f,
        className: `${d} ${g[i]} ${p[r]} ${c} ${f?"opacity-50 cursor-not-allowed":""}`,
        children: s
    })
}

function Ex() {
    const [s, i] = V.useState(!1), r = o => {
        const c = document.getElementById(o);
        c && c.scrollIntoView({
            behavior: "smooth"
        }), i(!1)
    };
    return y.jsxs("nav", {
        className: "fixed top-0 left-0 right-0 z-50 bg-black/10 backdrop-blur-lg border-b border-white/10",
        children: [y.jsx("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: y.jsxs("div", {
                className: "flex justify-between items-center h-16",
                children: [y.jsx("div", {
                    className: "flex items-center",
                    children: y.jsx("div", {
                        className: "text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent",
                        children: "VR Portfolio"
                    })
                }), y.jsx("div", {
                    className: "hidden md:block",
                    children: y.jsxs("div", {
                        className: "ml-10 flex items-baseline space-x-8",
                        children: [y.jsx("button", {
                            onClick: () => r("home"),
                            className: "text-white hover:text-purple-400 transition-colors duration-300 cursor-pointer",
                            children: "Home"
                        }), y.jsx("button", {
                            onClick: () => r("profile"),
                            className: "text-white hover:text-purple-400 transition-colors duration-300 cursor-pointer",
                            children: "Profile"
                        }), y.jsx("button", {
                            onClick: () => r("about"),
                            className: "text-white hover:text-purple-400 transition-colors duration-300 cursor-pointer",
                            children: "About"
                        }), y.jsx("button", {
                            onClick: () => r("projects"),
                            className: "text-white hover:text-purple-400 transition-colors duration-300 cursor-pointer",
                            children: "Projects"
                        }), y.jsx("button", {
                            onClick: () => r("skills"),
                            className: "text-white hover:text-purple-400 transition-colors duration-300 cursor-pointer",
                            children: "Skills"
                        }), y.jsx("button", {
                            onClick: () => r("contact"),
                            className: "text-white hover:text-purple-400 transition-colors duration-300 cursor-pointer",
                            children: "Contact"
                        })]
                    })
                }), y.jsx("div", {
                    className: "md:hidden",
                    children: y.jsx("button", {
                        onClick: () => i(!s),
                        className: "text-white hover:text-purple-400 cursor-pointer",
                        children: y.jsx("i", {
                            className: `ri-${s?"close":"menu"}-line text-2xl`
                        })
                    })
                })]
            })
        }), s && y.jsx("div", {
            className: "md:hidden bg-black/20 backdrop-blur-lg",
            children: y.jsxs("div", {
                className: "px-2 pt-2 pb-3 space-y-1",
                children: [y.jsx("button", {
                    onClick: () => r("home"),
                    className: "block px-3 py-2 text-white hover:text-purple-400 transition-colors duration-300 cursor-pointer w-full text-left",
                    children: "Home"
                }), y.jsx("button", {
                    onClick: () => r("profile"),
                    className: "block px-3 py-2 text-white hover:text-purple-400 transition-colors duration-300 cursor-pointer w-full text-left",
                    children: "Profile"
                }), y.jsx("button", {
                    onClick: () => r("about"),
                    className: "block px-3 py-2 text-white hover:text-purple-400 transition-colors duration-300 cursor-pointer w-full text-left",
                    children: "About"
                }), y.jsx("button", {
                    onClick: () => r("projects"),
                    className: "block px-3 py-2 text-white hover:text-purple-400 transition-colors duration-300 cursor-pointer w-full text-left",
                    children: "Projects"
                }), y.jsx("button", {
                    onClick: () => r("skills"),
                    className: "block px-3 py-2 text-white hover:text-purple-400 transition-colors duration-300 cursor-pointer w-full text-left",
                    children: "Skills"
                }), y.jsx("button", {
                    onClick: () => r("contact"),
                    className: "block px-3 py-2 text-white hover:text-purple-400 transition-colors duration-300 cursor-pointer w-full text-left",
                    children: "Contact"
                })]
            })
        })]
    })
}

function Nx() {
    const s = new Date().getFullYear();
    return y.jsx("footer", {
        className: "bg-black border-t border-white/10",
        children: y.jsx("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",
            children: y.jsxs("div", {
                className: "text-center",
                children: [y.jsx("div", {
                    className: "text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4",
                    children: "VR Portfolio"
                }), y.jsx("p", {
                    className: "text-gray-400 mb-6",
                    children: "Creating immersive virtual reality experiences for the future"
                }), y.jsxs("div", {
                    className: "flex justify-center space-x-6 mb-6",
                    children: [y.jsx("a", {
                        href: "#",
                        className: "text-gray-400 hover:text-purple-400 transition-colors duration-300 cursor-pointer",
                        children: y.jsx("i", {
                            className: "ri-linkedin-fill text-xl"
                        })
                    }), y.jsx("a", {
                        href: "#",
                        className: "text-gray-400 hover:text-cyan-400 transition-colors duration-300 cursor-pointer",
                        children: y.jsx("i", {
                            className: "ri-github-fill text-xl"
                        })
                    }), y.jsx("a", {
                        href: "#",
                        className: "text-gray-400 hover:text-pink-400 transition-colors duration-300 cursor-pointer",
                        children: y.jsx("i", {
                            className: "ri-twitter-fill text-xl"
                        })
                    }), y.jsx("a", {
                        href: "#",
                        className: "text-gray-400 hover:text-green-400 transition-colors duration-300 cursor-pointer",
                        children: y.jsx("i", {
                            className: "ri-dribbble-fill text-xl"
                        })
                    })]
                }), y.jsx("div", {
                    className: "border-t border-white/10 pt-6",
                    children: y.jsxs("p", {
                        className: "text-gray-500 text-sm",
                        children: ["© ", s, " VR Portfolio. All rights reserved. |", y.jsx("a", {
                            href: "https://readdy.ai/?origin=logo",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "ml-2 text-purple-400 hover:text-purple-300 transition-colors duration-300",
                            children: "Powered by Readdy"
                        })]
                    })
                })]
            })
        })
    })
}

function Cx() {
    const [s, i] = V.useState(0), r = ["VR Developer", "Game Developer", "Unity Developer", "XR Enthusiast"];
    V.useEffect(() => {
        const c = setInterval(() => {
            i(f => (f + 1) % r.length)
        }, 3e3);
        return () => clearInterval(c)
    }, []);
    const o = c => {
        const f = document.getElementById(c);
        f && f.scrollIntoView({
            behavior: "smooth"
        })
    };
    return y.jsxs("section", {
        id: "home",
        className: "min-h-screen flex items-center justify-center relative overflow-hidden",
        style: {
            backgroundImage: "url('https://readdy.ai/api/search-image?query=Futuristic%20virtual%20reality%20environment%20with%20neon%20purple%20and%20cyan%20lights%2C%20digital%20particles%20floating%20in%20space%2C%20holographic%20interfaces%2C%20cyberpunk%20aesthetic%2C%20immersive%20VR%20world%20with%20glowing%20geometric%20shapes%20and%20data%20streams%2C%20high-tech%20laboratory%20setting%20with%20VR%20headsets%20and%20advanced%20technology%2C%20modern%20minimalist%20design%20with%20vibrant%20colors&width=1920&height=1080&seq=hero-bg&orientation=landscape')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed"
        },
        children: [y.jsx("div", {
            className: "absolute inset-0 bg-gradient-to-br from-purple-900/80 via-black/60 to-cyan-900/80"
        }), y.jsxs("div", {
            className: "relative z-10 text-center px-4 max-w-4xl mx-auto",
            children: [y.jsxs("div", {
                className: "mb-8",
                children: [y.jsx("h1", {
                    className: "text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-pulse",
                    children: "Lucky Kumar"
                }), y.jsxs("div", {
                    className: "text-2xl md:text-4xl text-white mb-8 h-12 flex items-center justify-center",
                    children: [y.jsx("span", {
                        className: "mr-4",
                        children: "I'm a"
                    }), y.jsx("span", {
                        className: "bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent font-bold transition-all duration-500 transform",
                        children: r[s]
                    })]
                }), y.jsx("p", {
                    className: "text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed",
                    children: "Computer Science student at VIT Bhopal specializing in Gaming Technology. Passionate about creating immersive VR/AR experiences and innovative game development solutions."
                })]
            }), y.jsxs("div", {
                className: "flex flex-col sm:flex-row gap-6 justify-center items-center",
                children: [y.jsxs(ho, {
                    size: "lg",
                    onClick: () => o("projects"),
                    className: "transform hover:rotate-1 hover:shadow-2xl hover:shadow-purple-500/25",
                    children: [y.jsx("i", {
                        className: "ri-rocket-line mr-2"
                    }), "View My Projects"]
                }), y.jsxs(ho, {
                    variant: "outline",
                    size: "lg",
                    onClick: () => o("contact"),
                    className: "transform hover:-rotate-1 hover:shadow-2xl hover:shadow-cyan-500/25",
                    children: [y.jsx("i", {
                        className: "ri-mail-line mr-2"
                    }), "Get In Touch"]
                })]
            }), y.jsx("div", {
                className: "mt-16 animate-bounce",
                children: y.jsx("button", {
                    onClick: () => o("about"),
                    className: "text-white/70 hover:text-white transition-colors duration-300 cursor-pointer",
                    children: y.jsx("i", {
                        className: "ri-arrow-down-line text-3xl"
                    })
                })
            })]
        }), y.jsx("div", {
            className: "absolute top-20 left-10 w-20 h-20 bg-purple-500/20 rounded-full blur-xl animate-pulse"
        }), y.jsx("div", {
            className: "absolute bottom-20 right-10 w-32 h-32 bg-cyan-500/20 rounded-full blur-xl animate-pulse delay-1000"
        }), y.jsx("div", {
            className: "absolute top-1/2 left-1/4 w-16 h-16 bg-pink-500/20 rounded-full blur-xl animate-pulse delay-500"
        })]
    })
}

function _x() {
    return y.jsx("section", {
        id: "profile",
        className: "py-20 bg-gradient-to-br from-gray-900 via-purple-900/10 to-gray-900",
        children: y.jsxs("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [y.jsxs("div", {
                className: "text-center mb-16",
                children: [y.jsx("h2", {
                    className: "text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6",
                    children: "Profile Overview"
                }), y.jsx("div", {
                    className: "w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full"
                })]
            }), y.jsxs("div", {
                className: "grid lg:grid-cols-3 gap-8",
                children: [y.jsxs("div", {
                    className: "bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-500/30 transition-all duration-300",
                    children: [y.jsxs("div", {
                        className: "text-center mb-6",
                        children: [y.jsx("div", {
                            className: "w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-gradient-to-r from-purple-500 to-cyan-500 p-1",
                            children: y.jsx("img", {
                                src: "https://static.readdy.ai/image/4ee2febbf6e60d45b11c4e1e3fd34313/b46507957b53d109007a87e505d9044e.jpeg",
                                alt: "Profile",
                                className: "w-full h-full object-cover rounded-full"
                            })
                        }), y.jsx("h3", {
                            className: "text-2xl font-bold text-white mb-2",
                            children: "Lucky Kumar"
                        }), y.jsx("p", {
                            className: "text-purple-400 font-medium",
                            children: "VR Developer & Gaming Technology Specialist"
                        })]
                    }), y.jsxs("div", {
                        className: "space-y-4",
                        children: [y.jsxs("div", {
                            className: "flex items-center text-gray-300",
                            children: [y.jsx("i", {
                                className: "ri-calendar-line text-purple-400 mr-3 w-5"
                            }), y.jsx("span", {
                                children: "Date of Birth: March 15, 2004"
                            })]
                        }), y.jsxs("div", {
                            className: "flex items-center text-gray-300",
                            children: [y.jsx("i", {
                                className: "ri-map-pin-line text-cyan-400 mr-3 w-5"
                            }), y.jsx("span", {
                                children: "New Delhi, India"
                            })]
                        }), y.jsxs("div", {
                            className: "flex items-center text-gray-300",
                            children: [y.jsx("i", {
                                className: "ri-graduation-cap-line text-pink-400 mr-3 w-5"
                            }), y.jsx("span", {
                                children: "B.Tech Computer Science (Gaming Tech)"
                            })]
                        }), y.jsxs("div", {
                            className: "flex items-center text-gray-300",
                            children: [y.jsx("i", {
                                className: "ri-building-line text-green-400 mr-3 w-5"
                            }), y.jsx("span", {
                                children: "VIT Bhopal University"
                            })]
                        }), y.jsxs("div", {
                            className: "flex items-center text-gray-300",
                            children: [y.jsx("i", {
                                className: "ri-star-line text-yellow-400 mr-3 w-5"
                            }), y.jsx("span", {
                                children: "CGPA: 9.72/10"
                            })]
                        })]
                    })]
                }), y.jsxs("div", {
                    className: "bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-500/30 transition-all duration-300",
                    children: [y.jsxs("h3", {
                        className: "text-2xl font-bold text-white mb-6 flex items-center",
                        children: [y.jsx("i", {
                            className: "ri-pulse-line text-cyan-400 mr-3"
                        }), "Current Status"]
                    }), y.jsxs("div", {
                        className: "space-y-6",
                        children: [y.jsxs("div", {
                            className: "bg-gradient-to-r from-cyan-500/10 to-pink-500/10 rounded-xl p-4 border border-cyan-500/20",
                            children: [y.jsxs("div", {
                                className: "flex items-center justify-between mb-2",
                                children: [y.jsx("span", {
                                    className: "text-white font-medium",
                                    children: "XR Research Intern"
                                }), y.jsx("span", {
                                    className: "text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full",
                                    children: "Completed"
                                })]
                            }), y.jsx("p", {
                                className: "text-gray-400 text-sm",
                                children: "IIT Delhi (May-July 2025)"
                            })]
                        }), y.jsxs("div", {
                            className: "bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-xl p-4 border border-pink-500/20",
                            children: [y.jsxs("div", {
                                className: "flex items-center justify-between mb-2",
                                children: [y.jsx("span", {
                                    className: "text-white font-medium",
                                    children: "Project Development"
                                }), y.jsx("span", {
                                    className: "text-xs bg-orange-500/20 text-orange-400 px-2 py-1 rounded-full",
                                    children: "In Progress"
                                })]
                            }), y.jsx("p", {
                                className: "text-gray-400 text-sm",
                                children: "Echoes in the Void - VR Game"
                            })]
                        }), y.jsxs("div", {
                            className: "bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-xl p-4 border border-purple-500/20",
                            children: [y.jsxs("div", {
                                className: "flex items-center justify-between mb-2",
                                children: [y.jsx("span", {
                                    className: "text-white font-medium",
                                    children: "Academic Status"
                                }), y.jsx("span", {
                                    className: "text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full",
                                    children: "Active"
                                })]
                            }), y.jsx("p", {
                                className: "text-gray-400 text-sm",
                                children: "Pre - Final Year Student - VIT Bhopal"
                            })]
                        })]
                    })]
                }), y.jsxs("div", {
                    className: "bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-pink-500/30 transition-all duration-300",
                    children: [y.jsxs("h3", {
                        className: "text-2xl font-bold text-white mb-6 flex items-center",
                        children: [y.jsx("i", {
                            className: "ri-trophy-line text-pink-400 mr-3"
                        }), "Key Highlights"]
                    }), y.jsxs("div", {
                        className: "space-y-4",
                        children: [y.jsxs("div", {
                            className: "flex items-start",
                            children: [y.jsx("div", {
                                className: "w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"
                            }), y.jsxs("div", {
                                children: [y.jsx("p", {
                                    className: "text-white font-medium",
                                    children: "Top 10 National Rank"
                                }), y.jsx("p", {
                                    className: "text-gray-400 text-sm",
                                    children: "Innovate2Education Challenge, WAVES 2025"
                                })]
                            })]
                        }), y.jsxs("div", {
                            className: "flex items-start",
                            children: [y.jsx("div", {
                                className: "w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"
                            }), y.jsxs("div", {
                                children: [y.jsx("p", {
                                    className: "text-white font-medium",
                                    children: "VR Hardware Expert"
                                }), y.jsx("p", {
                                    className: "text-gray-400 text-sm",
                                    children: "Meta Quest 2/3, Oculus Rift, HTC Vive Pro"
                                })]
                            })]
                        }), y.jsxs("div", {
                            className: "flex items-start",
                            children: [y.jsx("div", {
                                className: "w-2 h-2 bg-pink-400 rounded-full mt-2 mr-3 flex-shrink-0"
                            }), y.jsxs("div", {
                                children: [y.jsx("p", {
                                    className: "text-white font-medium",
                                    children: "Unity VR Specialist"
                                }), y.jsx("p", {
                                    className: "text-gray-400 text-sm",
                                    children: "Advanced XR development & optimization"
                                })]
                            })]
                        }), y.jsxs("div", {
                            className: "flex items-start",
                            children: [y.jsx("div", {
                                className: "w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"
                            }), y.jsxs("div", {
                                children: [y.jsx("p", {
                                    className: "text-white font-medium",
                                    children: "Research Experience"
                                }), y.jsx("p", {
                                    className: "text-gray-400 text-sm",
                                    children: "Extended Reality at premier institute"
                                })]
                            })]
                        }), y.jsxs("div", {
                            className: "flex items-start",
                            children: [y.jsx("div", {
                                className: "w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"
                            }), y.jsxs("div", {
                                children: [y.jsx("p", {
                                    className: "text-white font-medium",
                                    children: "Academic Excellence"
                                }), y.jsx("p", {
                                    className: "text-gray-400 text-sm",
                                    children: "Consistent top performer with 9.72 CGPA"
                                })]
                            })]
                        })]
                    })]
                })]
            }), y.jsxs("div", {
                className: "mt-12 grid grid-cols-2 md:grid-cols-3 gap-6",
                children: [y.jsxs("div", {
                    className: "text-center bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10",
                    children: [y.jsx("div", {
                        className: "text-3xl font-bold text-purple-400 mb-1",
                        children: "1+"
                    }), y.jsx("div", {
                        className: "text-gray-300 text-sm",
                        children: "Years Experience"
                    })]
                }), y.jsxs("div", {
                    className: "text-center bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10",
                    children: [y.jsx("div", {
                        className: "text-3xl font-bold text-cyan-400 mb-1",
                        children: "9+"
                    }), y.jsx("div", {
                        className: "text-gray-300 text-sm",
                        children: "VR Projects"
                    })]
                }), y.jsxs("div", {
                    className: "text-center bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10",
                    children: [y.jsx("div", {
                        className: "text-3xl font-bold text-green-400 mb-1",
                        children: "Top 10"
                    }), y.jsx("div", {
                        className: "text-gray-300 text-sm",
                        children: "National Rank"
                    })]
                })]
            })]
        })
    })
}

function Rx() {
    return y.jsx("section", {
        id: "about",
        className: "py-20 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900",
        children: y.jsxs("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [y.jsxs("div", {
                className: "text-center mb-16",
                children: [y.jsx("h2", {
                    className: "text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6",
                    children: "About Me"
                }), y.jsx("div", {
                    className: "w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full"
                })]
            }), y.jsxs("div", {
                className: "grid lg:grid-cols-2 gap-12 items-center",
                children: [y.jsxs("div", {
                    className: "space-y-6",
                    children: [y.jsxs("div", {
                        className: "bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-500/30 transition-all duration-300 transform hover:scale-105",
                        children: [y.jsxs("h3", {
                            className: "text-2xl font-bold text-white mb-4",
                            children: [y.jsx("i", {
                                className: "ri-graduation-cap-line text-purple-400 mr-3"
                            }), "Education & Background"]
                        }), y.jsx("p", {
                            className: "text-gray-300 leading-relaxed",
                            children: "Currently pursuing Bachelor of Technology in Computer Science (Gaming Technology) at Vellore Institute of Technology, Bhopal with an impressive 9.72 CGPA. Strong academic foundation with consistent excellence throughout my educational journey."
                        })]
                    }), y.jsxs("div", {
                        className: "bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 transform hover:scale-105",
                        children: [y.jsxs("h3", {
                            className: "text-2xl font-bold text-white mb-4",
                            children: [y.jsx("i", {
                                className: "ri-briefcase-line text-cyan-400 mr-3"
                            }), "Work Experience"]
                        }), y.jsx("p", {
                            className: "text-gray-300 leading-relaxed",
                            children: "Completed an XR (Extended Reality) internship at IIT Delhi from May to July 2025, gaining hands-on experience with cutting-edge immersive technologies and research methodologies in virtual and augmented reality applications."
                        })]
                    }), y.jsxs("div", {
                        className: "bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-pink-500/30 transition-all duration-300 transform hover:scale-105",
                        children: [y.jsxs("h3", {
                            className: "text-2xl font-bold text-white mb-4",
                            children: [y.jsx("i", {
                                className: "ri-code-line text-pink-400 mr-3"
                            }), "Technical Skills"]
                        }), y.jsx("p", {
                            className: "text-gray-300 leading-relaxed",
                            children: "Proficient in C, C++, Python, MySQL, and Front-End Web Development (HTML, CSS, JavaScript). Experienced with Unity Game Engine, Blender, and Virtual Reality Implementation. Hands-on experience with Meta Quest 2, Meta Quest 3, Oculus Rift, and HTC Vive Pro. Strong foundation in data structures, algorithms, and game development frameworks."
                        })]
                    }), y.jsxs("div", {
                        className: "bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-green-500/30 transition-all duration-300 transform hover:scale-105",
                        children: [y.jsxs("h3", {
                            className: "text-2xl font-bold text-white mb-4",
                            children: [y.jsx("i", {
                                className: "ri-trophy-line text-green-400 mr-3"
                            }), "Achievements & Leadership"]
                        }), y.jsx("p", {
                            className: "text-gray-300 leading-relaxed",
                            children: "Student Coordinator of Virtual Reality & Gaming Club at VIT Bhopal University. Selected among top 10 teams out of 1800+ participants in the Innovate2Education challenge under WAVES 2025, a national event organized by the Government of India in Mumbai."
                        })]
                    })]
                }), y.jsxs("div", {
                    className: "relative",
                    children: [y.jsx("div", {
                        className: "relative z-10",
                        children: y.jsx("img", {
                            src: "https://readdy.ai/api/search-image?query=Professional%20young%20developer%20wearing%20VR%20headset%20in%20modern%20tech%20studio%2C%20surrounded%20by%20holographic%20displays%20and%20futuristic%20interfaces%2C%20purple%20and%20cyan%20lighting%2C%20high-tech%20workspace%20with%20multiple%20monitors%20showing%20VR%20development%20tools%2C%20clean%20modern%20aesthetic%20with%20vibrant%20neon%20accents&width=600&height=800&seq=about-profile&orientation=portrait",
                            alt: "VR Developer Profile",
                            className: "rounded-2xl shadow-2xl w-full object-cover object-top"
                        })
                    }), y.jsx("div", {
                        className: "absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-2xl blur-xl"
                    }), y.jsx("div", {
                        className: "absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-tl from-pink-500/20 to-purple-500/20 rounded-2xl blur-xl"
                    })]
                })]
            }), y.jsxs("div", {
                className: "mt-16 grid md:grid-cols-4 gap-8",
                children: [y.jsxs("div", {
                    className: "text-center bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-500/30 transition-all duration-300",
                    children: [y.jsx("div", {
                        className: "text-4xl font-bold text-purple-400 mb-2",
                        children: "9.72"
                    }), y.jsx("div", {
                        className: "text-gray-300",
                        children: "CGPA"
                    })]
                }), y.jsxs("div", {
                    className: "text-center bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-500/30 transition-all duration-300",
                    children: [y.jsx("div", {
                        className: "text-4xl font-bold text-cyan-400 mb-2",
                        children: "9+"
                    }), y.jsx("div", {
                        className: "text-gray-300",
                        children: "Projects"
                    })]
                }), y.jsxs("div", {
                    className: "text-center bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-pink-500/30 transition-all duration-300",
                    children: [y.jsx("div", {
                        className: "text-4xl font-bold text-pink-400 mb-2",
                        children: "Top 10"
                    }), y.jsx("div", {
                        className: "text-gray-300",
                        children: "Innovate2Education"
                    })]
                }), y.jsxs("div", {
                    className: "text-center bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-green-500/30 transition-all duration-300",
                    children: [y.jsx("div", {
                        className: "text-4xl font-bold text-green-400 mb-2",
                        children: "XR"
                    }), y.jsx("div", {
                        className: "text-gray-300",
                        children: "IIT Delhi Intern"
                    })]
                })]
            })]
        })
    })
}

function jx() {
    const [s, i] = V.useState("all"), r = [{
        id: 1,
        title: "Echoes in the Void",
        category: "vr",
        description: "Currently developing a sci-fi VR survival game set on a space station invaded by invisible aliens. Players must protect themselves and the station using Unity VR.",
        image: "https://readdy.ai/api/search-image?query=Sci-fi%20VR%20survival%20game%20screenshot%20showing%20futuristic%20space%20station%20interior%20with%20dark%20corridors%2C%20invisible%20alien%20threats%2C%20high-tech%20equipment%2C%20atmospheric%20lighting%2C%20Unity%20game%20engine%20graphics%2C%20immersive%20VR%20experience%20with%20holographic%20interfaces%20and%20space%20environment&width=600&height=400&seq=echoes-void&orientation=landscape",
        tech: ["Unity", "C#", "VR SDK", "Sci-Fi Design"],
        features: ["Spatial Audio", "Hand Tracking", "Room-Scale VR", "AI Enemies"],
        github: "https://github.com/Lucky1403",
        demo: "#",
        status: "In Development"
    }, {
        id: 2,
        title: "The Woods VR",
        category: "vr",
        description: "Developed a VR zombie shooter game with immersive first-person interactions using Unity Game Engine.",
        image: "https://readdy.ai/api/search-image?query=VR%20zombie%20shooter%20game%20screenshot%20showing%20dark%20forest%20environment%20with%20zombies%2C%20first-person%20view%20with%20weapon%2C%20atmospheric%20lighting%2C%20Unity%20game%20engine%20graphics%2C%20horror%20survival%20gameplay%2C%20immersive%20VR%20experience%20with%20realistic%20shadows%20and%20fog%20effects&width=600&height=400&seq=woods-vr&orientation=landscape",
        tech: ["Unity", "C#", "VR SDK", "Blender"],
        features: ["Immersive Combat", "Environmental Audio", "Physics-Based Interactions"],
        github: "https://github.com/Lucky1403",
        demo: "#"
    }, {
        id: 3,
        title: "Musical Auditorium VR",
        category: "vr",
        description: "Creating a VR musical auditorium where users play instruments in a live concert setting.",
        image: "https://readdy.ai/api/search-image?query=VR%20musical%20auditorium%20with%20virtual%20instruments%2C%20concert%20hall%20environment%2C%20users%20playing%20piano%20and%20guitar%20in%20VR%2C%20stage%20lighting%2C%20audience%20seating%2C%20immersive%20music%20experience%2C%20Unity%203D%20graphics%2C%20realistic%20concert%20venue%20atmosphere&width=600&height=400&seq=musical-vr&orientation=landscape",
        tech: ["Unity", "VR", "Audio Systems", "3D Modeling"],
        features: ["Spatial Audio", "Hand Tracking", "Multi-User Support", "Real-Time Audio"],
        github: "https://github.com/Lucky1403",
        demo: "#"
    }, {
        id: 4,
        title: "Battle Centrum",
        category: "game",
        description: "Designed a Third-Person Shooter (TPS) game with engaging story-driven gameplay in Unity.",
        image: "https://readdy.ai/api/search-image?query=Third-person%20shooter%20game%20screenshot%20showing%20character%20with%20weapon%2C%20action-packed%20battlefield%20environment%2C%20Unity%20game%20graphics%2C%20dynamic%20combat%20scene%2C%20modern%20military%20setting%2C%20engaging%20gameplay%20mechanics&width=600&height=400&seq=battle-centrum&orientation=landscape",
        tech: ["Unity", "C#", "Game Design", "Animation"],
        features: ["Story Mode", "Combat System", "Character Progression", "Dynamic AI"],
        github: "https://github.com/Lucky1403",
        demo: "#"
    }, {
        id: 5,
        title: "Portfolio Website",
        category: "web",
        description: "Created a personal portfolio website showcasing projects and technical skills.",
        image: "https://readdy.ai/api/search-image?query=Modern%20portfolio%20website%20design%20with%20dark%20theme%2C%20purple%20and%20cyan%20gradients%2C%20project%20showcase%20grid%2C%20responsive%20web%20design%2C%20HTML%20CSS%20JavaScript%2C%20clean%20professional%20layout%2C%20tech%20portfolio%20interface&width=600&height=400&seq=portfolio-web&orientation=landscape",
        tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
        features: ["Responsive Design", "Interactive UI", "Project Showcase", "Contact Forms"],
        github: "https://github.com/Lucky1403",
        demo: "#"
    }, {
        id: 6,
        title: "Currency Calculator",
        category: "web",
        description: "Built a real-time currency converter supporting more than 190 global currencies.",
        image: "https://readdy.ai/api/search-image?query=Currency%20calculator%20web%20application%20interface%20showing%20exchange%20rates%2C%20multiple%20currency%20options%2C%20real-time%20conversion%2C%20clean%20modern%20UI%20design%2C%20financial%20app%20interface%2C%20responsive%20web%20design&width=600&height=400&seq=currency-calc&orientation=landscape",
        tech: ["HTML", "CSS", "JavaScript", "API Integration"],
        features: ["Real-Time Rates", "Multi-Currency Support", "Clean UI", "API Integration"],
        github: "https://github.com/Lucky1403",
        demo: "#"
    }, {
        id: 7,
        title: "Invoice Website",
        category: "web",
        description: "Developed an invoice generation system for small-scale companies using JavaScript, HTML, and CSS.",
        image: "https://readdy.ai/api/search-image?query=Invoice%20generation%20web%20application%20interface%20showing%20professional%20invoice%20template%2C%20business%20document%20layout%2C%20form%20fields%2C%20company%20branding%2C%20clean%20business%20software%20design%2C%20modern%20web%20interface&width=600&height=400&seq=invoice-web&orientation=landscape",
        tech: ["HTML", "CSS", "JavaScript", "PDF Generation"],
        features: ["PDF Export", "Template System", "Business Logic", "Data Management"],
        github: "https://github.com/Lucky1403",
        demo: "#"
    }, {
        id: 8,
        title: "Weather Report",
        category: "python",
        description: "Built a Python tool that fetches real-time weather data using API integration.",
        image: "https://readdy.ai/api/search-image?query=Weather%20application%20interface%20showing%20current%20weather%20conditions%2C%20temperature%20display%2C%20weather%20icons%2C%20forecast%20data%2C%20Python%20GUI%20application%2C%20clean%20weather%20app%20design%2C%20API%20data%20visualization&width=600&height=400&seq=weather-app&orientation=landscape",
        tech: ["Python", "API Integration", "GUI", "Data Processing"],
        features: ["Real-Time Data", "Weather Forecasts", "Location-Based", "GUI Interface"],
        github: "https://github.com/Lucky1403",
        demo: "#"
    }, {
        id: 9,
        title: "Video Downloader",
        category: "python",
        description: "Created a YouTube video downloader with highest quality download capabilities.",
        image: "https://readdy.ai/api/search-image?query=Video%20downloader%20application%20interface%20showing%20YouTube%20video%20download%20options%2C%20quality%20selection%2C%20progress%20bar%2C%20Python%20desktop%20application%2C%20modern%20software%20interface%2C%20download%20manager%20design&width=600&height=400&seq=video-downloader&orientation=landscape",
        tech: ["Python", "YouTube API", "GUI", "File Management"],
        features: ["Quality Selection", "Batch Downloads", "Progress Tracking", "Format Options"],
        github: "https://github.com/Lucky1403",
        demo: "#"
    }], o = [{
        id: "all",
        label: "All Projects",
        count: r.length
    }, {
        id: "vr",
        label: "VR/AR",
        count: r.filter(f => f.category === "vr").length
    }, {
        id: "game",
        label: "Games",
        count: r.filter(f => f.category === "game").length
    }, {
        id: "web",
        label: "Web Dev",
        count: r.filter(f => f.category === "web").length
    }, {
        id: "python",
        label: "Python",
        count: r.filter(f => f.category === "python").length
    }], c = s === "all" ? r : r.filter(f => f.category === s);
    return y.jsx("section", {
        id: "projects",
        className: "py-20 bg-gradient-to-br from-black via-gray-900/50 to-black",
        children: y.jsxs("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [y.jsxs("div", {
                className: "text-center mb-16",
                children: [y.jsx("h2", {
                    className: "text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6",
                    children: "My Projects"
                }), y.jsx("div", {
                    className: "w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full"
                }), y.jsx("p", {
                    className: "text-gray-300 mt-6 max-w-2xl mx-auto",
                    children: "Explore my diverse portfolio of VR experiences, games, and web applications showcasing technical skills and creativity."
                })]
            }), y.jsx("div", {
                className: "flex flex-wrap justify-center gap-4 mb-12",
                children: o.map(f => y.jsxs("button", {
                    onClick: () => i(f.id),
                    className: `px-6 py-3 rounded-full border transition-all duration-300 whitespace-nowrap cursor-pointer ${s===f.id?"bg-gradient-to-r from-purple-500 to-cyan-500 text-white border-transparent shadow-lg":"bg-white/5 text-gray-300 border-white/10 hover:border-purple-500/50 hover:text-white"}`,
                    children: [f.label, " (", f.count, ")"]
                }, f.id))
            }), y.jsx("div", {
                className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
                children: c.map(f => y.jsxs("div", {
                    className: "bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden hover:border-purple-500/30 transition-all duration-300 transform hover:scale-105 group",
                    children: [y.jsxs("div", {
                        className: "relative overflow-hidden",
                        children: [y.jsx("img", {
                            src: f.image,
                            alt: f.title,
                            className: "w-full h-48 object-cover object-top group-hover:scale-110 transition-transform duration-500"
                        }), y.jsx("div", {
                            className: "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        }), y.jsxs("div", {
                            className: "absolute top-4 right-4 flex gap-2",
                            children: [y.jsx("span", {
                                className: `px-3 py-1 rounded-full text-xs font-medium ${f.category==="vr"?"bg-purple-500/80 text-white":f.category==="game"?"bg-cyan-500/80 text-white":f.category==="web"?"bg-pink-500/80 text-white":"bg-green-500/80 text-white"}`,
                                children: f.category.toUpperCase()
                            }), f.status && y.jsx("span", {
                                className: "px-3 py-1 rounded-full text-xs font-medium bg-orange-500/80 text-white",
                                children: f.status
                            })]
                        })]
                    }), y.jsxs("div", {
                        className: "p-6",
                        children: [y.jsx("h3", {
                            className: "text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300",
                            children: f.title
                        }), y.jsx("p", {
                            className: "text-gray-300 text-sm mb-4 leading-relaxed",
                            children: f.description
                        }), f.features && y.jsxs("div", {
                            className: "mb-4",
                            children: [y.jsx("h4", {
                                className: "text-sm font-semibold text-gray-400 mb-2",
                                children: "Key Features:"
                            }), y.jsx("div", {
                                className: "flex flex-wrap gap-1",
                                children: f.features.map((d, g) => y.jsx("span", {
                                    className: "px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-md border border-purple-500/30",
                                    children: d
                                }, g))
                            })]
                        }), y.jsx("div", {
                            className: "flex flex-wrap gap-2 mb-6",
                            children: f.tech.map((d, g) => y.jsx("span", {
                                className: "px-3 py-1 bg-white/10 text-gray-300 text-xs rounded-full border border-white/20",
                                children: d
                            }, g))
                        }), y.jsxs("div", {
                            className: "flex gap-4",
                            children: [y.jsxs("a", {
                                href: f.github,
                                className: "flex items-center text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer",
                                children: [y.jsx("i", {
                                    className: "ri-github-fill mr-2"
                                }), y.jsx("span", {
                                    className: "text-sm",
                                    children: "Code"
                                })]
                            }), y.jsxs("a", {
                                href: f.demo,
                                className: "flex items-center text-gray-300 hover:text-purple-400 transition-colors duration-300 cursor-pointer",
                                children: [y.jsx("i", {
                                    className: "ri-external-link-line mr-2"
                                }), y.jsx("span", {
                                    className: "text-sm",
                                    children: "Demo"
                                })]
                            })]
                        })]
                    })]
                }, f.id))
            }), y.jsx("div", {
                className: "text-center mt-12",
                children: y.jsxs("a", {
                    href: "https://github.com/Lucky1403",
                    className: "inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-medium rounded-full hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 cursor-pointer whitespace-nowrap",
                    children: [y.jsx("i", {
                        className: "ri-github-fill mr-3 text-xl"
                    }), "View All Projects on GitHub"]
                })
            })]
        })
    })
}

function Tx() {
    const s = [{
            title: "Programming Languages",
            icon: "ri-code-line",
            color: "purple",
            skills: [{
                name: "C",
                level: 90
            }, {
                name: "C++",
                level: 85
            }, {
                name: "Python",
                level: 80
            }, {
                name: "JavaScript",
                level: 75
            }, {
                name: "HTML/CSS",
                level: 85
            }, {
                name: "MySQL",
                level: 70
            }]
        }, {
            title: "Game Development",
            icon: "ri-gamepad-line",
            color: "cyan",
            skills: [{
                name: "Unity Game Engine",
                level: 90
            }, {
                name: "C# for Unity",
                level: 85
            }, {
                name: "Game Design",
                level: 80
            }, {
                name: "3D Modeling",
                level: 75
            }, {
                name: "Animation",
                level: 70
            }, {
                name: "Physics Systems",
                level: 75
            }]
        }, {
            title: "VR/AR Development",
            icon: "ri-vr-line",
            color: "pink",
            skills: [{
                name: "Virtual Reality Implementation",
                level: 85
            }, {
                name: "VR SDK Integration",
                level: 80
            }, {
                name: "Immersive Interactions",
                level: 85
            }, {
                name: "Spatial Audio",
                level: 70
            }, {
                name: "Hand Tracking",
                level: 75
            }, {
                name: "Room-Scale VR",
                level: 80
            }]
        }, {
            title: "Tools & Frameworks",
            icon: "ri-tools-line",
            color: "green",
            skills: [{
                name: "Blender",
                level: 80
            }, {
                name: "Git/GitHub",
                level: 85
            }, {
                name: "Visual Studio",
                level: 90
            }, {
                name: "Pandas",
                level: 70
            }, {
                name: "NumPy",
                level: 65
            }, {
                name: "Flask",
                level: 60
            }]
        }],
        i = [{
            title: "Python Programming Certification",
            issuer: "VIT Bhopal University",
            icon: "ri-python-line",
            color: "yellow"
        }, {
            title: "HTML, CSS, and JavaScript for Web Developers",
            issuer: "Udemy",
            icon: "ri-html5-line",
            color: "orange"
        }];
    return y.jsx("section", {
        id: "skills",
        className: "py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900",
        children: y.jsxs("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [y.jsxs("div", {
                className: "text-center mb-16",
                children: [y.jsx("h2", {
                    className: "text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6",
                    children: "Skills & Expertise"
                }), y.jsx("div", {
                    className: "w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full"
                }), y.jsx("p", {
                    className: "text-gray-300 mt-6 max-w-2xl mx-auto",
                    children: "Technical skills and expertise gained through academic projects, certifications, and hands-on development experience."
                })]
            }), y.jsx("div", {
                className: "grid lg:grid-cols-2 gap-8 mb-16",
                children: s.map((r, o) => y.jsxs("div", {
                    className: "bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-500/30 transition-all duration-300",
                    children: [y.jsxs("div", {
                        className: "flex items-center mb-6",
                        children: [y.jsx("div", {
                            className: `w-12 h-12 rounded-xl bg-gradient-to-br from-${r.color}-500/20 to-${r.color}-600/20 border border-${r.color}-500/30 flex items-center justify-center mr-4`,
                            children: y.jsx("i", {
                                className: `${r.icon} text-xl text-${r.color}-400`
                            })
                        }), y.jsx("h3", {
                            className: "text-2xl font-bold text-white",
                            children: r.title
                        })]
                    }), y.jsx("div", {
                        className: "space-y-4",
                        children: r.skills.map((c, f) => y.jsxs("div", {
                            className: "space-y-2",
                            children: [y.jsxs("div", {
                                className: "flex justify-between items-center",
                                children: [y.jsx("span", {
                                    className: "text-gray-300 font-medium",
                                    children: c.name
                                }), y.jsxs("span", {
                                    className: "text-gray-400 text-sm",
                                    children: [c.level, "%"]
                                })]
                            }), y.jsx("div", {
                                className: "w-full bg-gray-700/50 rounded-full h-2",
                                children: y.jsx("div", {
                                    className: `h-2 rounded-full bg-gradient-to-r from-${r.color}-500 to-${r.color}-400 transition-all duration-1000 ease-out`,
                                    style: {
                                        width: `${c.level}%`
                                    }
                                })
                            })]
                        }, f))
                    })]
                }, o))
            }), y.jsxs("div", {
                className: "bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 mb-16",
                children: [y.jsxs("div", {
                    className: "text-center mb-8",
                    children: [y.jsx("h3", {
                        className: "text-3xl font-bold text-white mb-4",
                        children: "Certifications"
                    }), y.jsx("div", {
                        className: "w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full"
                    })]
                }), y.jsx("div", {
                    className: "grid md:grid-cols-2 gap-6",
                    children: i.map((r, o) => y.jsx("div", {
                        className: "bg-white/5 rounded-xl p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-300 transform hover:scale-105",
                        children: y.jsxs("div", {
                            className: "flex items-start space-x-4",
                            children: [y.jsx("div", {
                                className: `w-12 h-12 rounded-lg bg-gradient-to-br from-${r.color}-500/20 to-${r.color}-600/20 border border-${r.color}-500/30 flex items-center justify-center flex-shrink-0`,
                                children: y.jsx("i", {
                                    className: `${r.icon} text-xl text-${r.color}-400`
                                })
                            }), y.jsxs("div", {
                                children: [y.jsx("h4", {
                                    className: "text-lg font-semibold text-white mb-2",
                                    children: r.title
                                }), y.jsx("p", {
                                    className: "text-gray-400 text-sm",
                                    children: r.issuer
                                })]
                            })]
                        })
                    }, o))
                })]
            }), y.jsx("div", {
                className: "mt-16 text-center",
                children: y.jsxs("div", {
                    className: "bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-2xl p-8 border border-purple-500/20",
                    children: [y.jsx("h3", {
                        className: "text-2xl font-bold text-white mb-4",
                        children: "Academic Excellence"
                    }), y.jsxs("div", {
                        className: "grid md:grid-cols-3 gap-6",
                        children: [y.jsxs("div", {
                            className: "text-center",
                            children: [y.jsx("div", {
                                className: "text-3xl font-bold text-purple-400 mb-2",
                                children: "9.72"
                            }), y.jsx("div", {
                                className: "text-gray-300",
                                children: "Current CGPA"
                            }), y.jsx("div", {
                                className: "text-sm text-gray-400",
                                children: "VIT Bhopal"
                            })]
                        }), y.jsxs("div", {
                            className: "text-center",
                            children: [y.jsx("div", {
                                className: "text-3xl font-bold text-cyan-400 mb-2",
                                children: "87.2%"
                            }), y.jsx("div", {
                                className: "text-gray-300",
                                children: "Class XII"
                            }), y.jsx("div", {
                                className: "text-sm text-gray-400",
                                children: "Kendriya Vidyalaya"
                            })]
                        }), y.jsxs("div", {
                            className: "text-center",
                            children: [y.jsx("div", {
                                className: "text-3xl font-bold text-pink-400 mb-2",
                                children: "81.0%"
                            }), y.jsx("div", {
                                className: "text-gray-300",
                                children: "Class X"
                            }), y.jsx("div", {
                                className: "text-sm text-gray-400",
                                children: "J.B.M. Public School"
                            })]
                        })]
                    })]
                })
            })]
        })
    })
}

function Ox() {
    const s = [{
            title: "Top 10 National Rank",
            subtitle: "Innovate2Education Challenge under WAVES 2025",
            description: "Achieved top 10 position out of 1800+ participating teams in the national innovation challenge",
            icon: "ri-trophy-line",
            color: "yellow",
            stats: {
                value: "10",
                label: "Out of 1800+ Teams"
            }
        }, {
            title: "Student Coordinator",
            subtitle: "VR & Gaming Club, VIT Bhopal",
            description: "Leading VR and gaming initiatives, organizing workshops and mentoring fellow students",
            icon: "ri-team-line",
            color: "purple",
            stats: {
                value: "9.72",
                label: "CGPA"
            }
        }, {
            title: "XR Research Intern",
            subtitle: "IIT Delhi (May - July 2025)",
            description: "Conducted research in Extended Reality technologies at one of India's premier institutes",
            icon: "ri-research-line",
            color: "cyan",
            stats: {
                value: "3",
                label: "Months"
            }
        }],
        i = [{
            value: "8+",
            label: "Projects Completed",
            icon: "ri-code-box-line",
            color: "purple"
        }, {
            value: "4+",
            label: "VR Platforms",
            icon: "ri-vr-line",
            color: "cyan"
        }, {
            value: "1+",
            label: "Years Experience",
            icon: "ri-time-line",
            color: "pink"
        }, {
            value: "100%",
            label: "Passion for VR",
            icon: "ri-heart-line",
            color: "red"
        }];
    return y.jsx("section", {
        className: "py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900",
        children: y.jsxs("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [y.jsxs("div", {
                className: "text-center mb-16",
                children: [y.jsx("h2", {
                    className: "text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6",
                    children: "Recognition & Achievements"
                }), y.jsx("div", {
                    className: "w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full"
                }), y.jsx("p", {
                    className: "text-gray-300 mt-6 max-w-2xl mx-auto",
                    children: "Key milestones and recognition earned through dedication to VR development and academic excellence."
                })]
            }), y.jsx("div", {
                className: "grid lg:grid-cols-3 gap-8 mb-16",
                children: s.map((r, o) => y.jsxs("div", {
                    className: "bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-500/30 transition-all duration-300 transform hover:scale-105 group",
                    children: [y.jsxs("div", {
                        className: "text-center mb-6",
                        children: [y.jsx("div", {
                            className: `w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-${r.color}-500/20 to-${r.color}-600/20 border border-${r.color}-500/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`,
                            children: y.jsx("i", {
                                className: `${r.icon} text-2xl text-${r.color}-400`
                            })
                        }), y.jsx("h3", {
                            className: "text-xl font-bold text-white mb-2",
                            children: r.title
                        }), y.jsx("p", {
                            className: "text-purple-400 font-medium text-sm mb-3",
                            children: r.subtitle
                        })]
                    }), y.jsx("p", {
                        className: "text-gray-300 text-sm leading-relaxed mb-6 text-center",
                        children: r.description
                    }), y.jsxs("div", {
                        className: "text-center",
                        children: [y.jsx("div", {
                            className: `text-3xl font-bold text-${r.color}-400 mb-1`,
                            children: r.stats.value
                        }), y.jsx("div", {
                            className: "text-gray-400 text-sm",
                            children: r.stats.label
                        })]
                    })]
                }, o))
            }), y.jsxs("div", {
                className: "bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-2xl p-8 border border-purple-500/20",
                children: [y.jsxs("div", {
                    className: "text-center mb-8",
                    children: [y.jsx("h3", {
                        className: "text-2xl font-bold text-white mb-4",
                        children: "Performance Statistics"
                    }), y.jsx("div", {
                        className: "w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full"
                    })]
                }), y.jsx("div", {
                    className: "grid md:grid-cols-4 gap-6",
                    children: i.map((r, o) => y.jsxs("div", {
                        className: "text-center group",
                        children: [y.jsx("div", {
                            className: `w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-${r.color}-500/20 to-${r.color}-600/20 border border-${r.color}-500/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`,
                            children: y.jsx("i", {
                                className: `${r.icon} text-xl text-${r.color}-400`
                            })
                        }), y.jsx("div", {
                            className: `text-3xl font-bold text-${r.color}-400 mb-2`,
                            children: r.value
                        }), y.jsx("div", {
                            className: "text-gray-300 text-sm",
                            children: r.label
                        })]
                    }, o))
                })]
            }), y.jsx("div", {
                className: "mt-16 text-center",
                children: y.jsxs("div", {
                    className: "bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10",
                    children: [y.jsxs("div", {
                        className: "flex items-center justify-center mb-6",
                        children: [y.jsx("div", {
                            className: "w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-cyan-600/20 border border-purple-500/30 flex items-center justify-center mr-4",
                            children: y.jsx("i", {
                                className: "ri-graduation-cap-line text-2xl text-purple-400"
                            })
                        }), y.jsxs("div", {
                            className: "text-left",
                            children: [y.jsx("h3", {
                                className: "text-2xl font-bold text-white",
                                children: "Academic Journey"
                            }), y.jsx("p", {
                                className: "text-gray-400",
                                children: "B.Tech in Computer Science & Engineering"
                            }), y.jsx("p", {
                                className: "text-purple-400 text-sm",
                                children: "Specialization: Gaming Technology"
                            })]
                        })]
                    }), y.jsxs("div", {
                        className: "grid md:grid-cols-3 gap-6",
                        children: [y.jsxs("div", {
                            className: "text-center p-4 bg-white/5 rounded-xl border border-white/10",
                            children: [y.jsx("div", {
                                className: "text-2xl font-bold text-purple-400 mb-2",
                                children: "Current"
                            }), y.jsx("div", {
                                className: "text-gray-300 text-sm",
                                children: "VIT Bhopal University"
                            }), y.jsx("div", {
                                className: "text-gray-400 text-xs",
                                children: "2023 - 2027"
                            })]
                        }), y.jsxs("div", {
                            className: "text-center p-4 bg-white/5 rounded-xl border border-white/10",
                            children: [y.jsx("div", {
                                className: "text-2xl font-bold text-cyan-400 mb-2",
                                children: "87.2%"
                            }), y.jsx("div", {
                                className: "text-gray-300 text-sm",
                                children: "Class XII"
                            }), y.jsx("div", {
                                className: "text-gray-400 text-xs",
                                children: "Kendriya Vidyalaya"
                            })]
                        }), y.jsxs("div", {
                            className: "text-center p-4 bg-white/5 rounded-xl border border-white/10",
                            children: [y.jsx("div", {
                                className: "text-2xl font-bold text-pink-400 mb-2",
                                children: "81.0%"
                            }), y.jsx("div", {
                                className: "text-gray-300 text-sm",
                                children: "Class X"
                            }), y.jsx("div", {
                                className: "text-gray-400 text-xs",
                                children: "J.B.M. Public School"
                            })]
                        })]
                    })]
                })
            })]
        })
    })
}

function Ax() {
    const [s, i] = V.useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    }), [r, o] = V.useState(!1), [c, f] = V.useState("idle"), d = x => {
        const {
            name: b,
            value: w
        } = x.target;
        i(S => ({ ...S,
            [b]: w
        }))
    }, g = async x => {
        x.preventDefault(), o(!0), setTimeout(() => {
            o(!1), f("success"), i({
                name: "",
                email: "",
                subject: "",
                message: ""
            }), setTimeout(() => {
                f("idle")
            }, 3e3)
        }, 1e3)
    }, p = [{
        icon: "ri-mail-line",
        title: "Email",
        value: "lucky.23062289@gmail.com",
        color: "purple"
    }, {
        icon: "ri-phone-line",
        title: "Phone",
        value: "+91-9319975312",
        color: "cyan"
    }, {
        icon: "ri-map-pin-line",
        title: "Location",
        value: "New Delhi, India",
        color: "pink"
    }], m = [{
        icon: "ri-linkedin-fill",
        url: "https://linkedin.com/in/lucky-kumar-",
        color: "text-blue-400"
    }, {
        icon: "ri-github-fill",
        url: "https://github.com/Lucky1403",
        color: "text-gray-400"
    }, {
        icon: "ri-mail-line",
        url: "mailto:lucky.23062289@gmail.com",
        color: "text-purple-400"
    }];
    return y.jsx("section", {
        id: "contact",
        className: "py-20 bg-gradient-to-br from-black via-purple-900/10 to-black",
        children: y.jsxs("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [y.jsxs("div", {
                className: "text-center mb-16",
                children: [y.jsx("h2", {
                    className: "text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6",
                    children: "Let's Connect"
                }), y.jsx("div", {
                    className: "w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full"
                }), y.jsx("p", {
                    className: "text-gray-300 mt-6 max-w-2xl mx-auto",
                    children: "Ready to bring innovative VR experiences to life? Let's discuss how I can contribute to your team and projects as an intern."
                })]
            }), y.jsxs("div", {
                className: "grid lg:grid-cols-2 gap-12",
                children: [y.jsxs("div", {
                    className: "space-y-8",
                    children: [y.jsxs("div", {
                        className: "bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10",
                        children: [y.jsx("h3", {
                            className: "text-2xl font-bold text-white mb-6",
                            children: "Get In Touch"
                        }), y.jsx("div", {
                            className: "space-y-6",
                            children: p.map((x, b) => y.jsxs("div", {
                                className: "flex items-center space-x-4",
                                children: [y.jsx("div", {
                                    className: `w-12 h-12 rounded-xl bg-gradient-to-br from-${x.color}-500/20 to-${x.color}-600/20 border border-${x.color}-500/30 flex items-center justify-center`,
                                    children: y.jsx("i", {
                                        className: `${x.icon} text-xl text-${x.color}-400`
                                    })
                                }), y.jsxs("div", {
                                    children: [y.jsx("div", {
                                        className: "text-gray-400 text-sm",
                                        children: x.title
                                    }), y.jsx("div", {
                                        className: "text-white font-medium",
                                        children: x.value
                                    })]
                                })]
                            }, b))
                        }), y.jsxs("div", {
                            className: "mt-8 pt-8 border-t border-white/10",
                            children: [y.jsx("h4", {
                                className: "text-lg font-semibold text-white mb-4",
                                children: "Connect With Me"
                            }), y.jsx("div", {
                                className: "flex space-x-4",
                                children: m.map((x, b) => y.jsx("a", {
                                    href: x.url,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: `w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center ${x.color} hover:scale-110 transition-all duration-300 cursor-pointer`,
                                    children: y.jsx("i", {
                                        className: `${x.icon} text-lg`
                                    })
                                }, b))
                            })]
                        })]
                    }), y.jsxs("div", {
                        className: "bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10",
                        children: [y.jsx("h3", {
                            className: "text-xl font-bold text-white mb-4",
                            children: "Why Choose Me?"
                        }), y.jsxs("ul", {
                            className: "space-y-3 text-gray-300",
                            children: [y.jsxs("li", {
                                className: "flex items-center",
                                children: [y.jsx("i", {
                                    className: "ri-check-line text-green-400 mr-3"
                                }), "Strong academic performance (9.72 CGPA)"]
                            }), y.jsxs("li", {
                                className: "flex items-center",
                                children: [y.jsx("i", {
                                    className: "ri-check-line text-green-400 mr-3"
                                }), "Hands-on VR/AR development experience"]
                            }), y.jsxs("li", {
                                className: "flex items-center",
                                children: [y.jsx("i", {
                                    className: "ri-check-line text-green-400 mr-3"
                                }), "Leadership experience as club coordinator"]
                            }), y.jsxs("li", {
                                className: "flex items-center",
                                children: [y.jsx("i", {
                                    className: "ri-check-line text-green-400 mr-3"
                                }), "National-level competition recognition"]
                            }), y.jsxs("li", {
                                className: "flex items-center",
                                children: [y.jsx("i", {
                                    className: "ri-check-line text-green-400 mr-3"
                                }), "Passionate about emerging technologies"]
                            })]
                        })]
                    }), y.jsxs("div", {
                        className: "bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-2xl p-6 border border-purple-500/20",
                        children: [y.jsx("h4", {
                            className: "text-lg font-bold text-white mb-3",
                            children: "Current Status"
                        }), y.jsxs("div", {
                            className: "flex items-center text-green-400",
                            children: [y.jsx("div", {
                                className: "w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"
                            }), y.jsx("span", {
                                children: "Available for VR Studio Internship Opportunities"
                            })]
                        })]
                    })]
                }), y.jsxs("div", {
                    className: "bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10",
                    children: [y.jsx("h3", {
                        className: "text-2xl font-bold text-white mb-6",
                        children: "Send Message"
                    }), y.jsxs("form", {
                        onSubmit: g,
                        className: "space-y-6",
                        children: [y.jsxs("div", {
                            className: "grid md:grid-cols-2 gap-4",
                            children: [y.jsxs("div", {
                                children: [y.jsx("label", {
                                    className: "block text-gray-300 text-sm font-medium mb-2",
                                    children: "Name"
                                }), y.jsx("input", {
                                    type: "text",
                                    name: "name",
                                    value: s.name,
                                    onChange: d,
                                    required: !0,
                                    className: "w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-purple-500/50 focus:outline-none transition-colors duration-300 text-sm",
                                    placeholder: "Your Name"
                                })]
                            }), y.jsxs("div", {
                                children: [y.jsx("label", {
                                    className: "block text-gray-300 text-sm font-medium mb-2",
                                    children: "Email"
                                }), y.jsx("input", {
                                    type: "email",
                                    name: "email",
                                    value: s.email,
                                    onChange: d,
                                    required: !0,
                                    className: "w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-purple-500/50 focus:outline-none transition-colors duration-300 text-sm",
                                    placeholder: "your@email.com"
                                })]
                            })]
                        }), y.jsxs("div", {
                            children: [y.jsx("label", {
                                className: "block text-gray-300 text-sm font-medium mb-2",
                                children: "Subject"
                            }), y.jsx("input", {
                                type: "text",
                                name: "subject",
                                value: s.subject,
                                onChange: d,
                                required: !0,
                                className: "w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-purple-500/50 focus:outline-none transition-colors duration-300 text-sm",
                                placeholder: "VR Studio Internship Opportunity"
                            })]
                        }), y.jsxs("div", {
                            children: [y.jsx("label", {
                                className: "block text-gray-300 text-sm font-medium mb-2",
                                children: "Message"
                            }), y.jsx("textarea", {
                                name: "message",
                                value: s.message,
                                onChange: d,
                                required: !0,
                                rows: 6,
                                maxLength: 500,
                                className: "w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-purple-500/50 focus:outline-none transition-colors duration-300 resize-none text-sm",
                                placeholder: "I'm interested in discussing internship opportunities at your VR studio. I bring strong technical skills in Unity, VR development, and a passion for creating immersive experiences..."
                            }), y.jsxs("div", {
                                className: "text-right text-xs text-gray-400 mt-1",
                                children: [s.message.length, "/500 characters"]
                            })]
                        }), y.jsx(ho, {
                            size: "lg",
                            disabled: r,
                            className: "w-full",
                            children: r ? y.jsxs(y.Fragment, {
                                children: [y.jsx("i", {
                                    className: "ri-loader-4-line mr-2 animate-spin"
                                }), "Sending..."]
                            }) : y.jsxs(y.Fragment, {
                                children: [y.jsx("i", {
                                    className: "ri-send-plane-line mr-2"
                                }), "Send Message"]
                            })
                        }), c === "success" && y.jsxs("div", {
                            className: "text-center text-green-400 text-sm",
                            children: [y.jsx("i", {
                                className: "ri-check-line mr-2"
                            }), "Message sent successfully! I'll get back to you soon."]
                        })]
                    })]
                })]
            })]
        })
    })
}

function Mx() {
    return y.jsxs("div", {
        className: "min-h-screen bg-black text-white",
        children: [y.jsx(Ex, {}), y.jsx(Cx, {}), y.jsx(_x, {}), y.jsx(Rx, {}), y.jsx(jx, {}), y.jsx(Tx, {}), y.jsx(Ox, {}), y.jsx(Ax, {}), y.jsx(Nx, {})]
    })
}
const $m = [{
        path: "/",
        element: y.jsx(Mx, {})
    }, {
        path: "*",
        element: y.jsx(wx, {})
    }],
    Lx = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: $m
    }, Symbol.toStringTag, {
        value: "Module"
    }));
let Jm;
const Dx = new Promise(s => {
    Jm = s
});

function Fm() {
    const s = Ov($m);
    if (!window.REACT_APP_NAVIGATE) {
        const i = qm();
        V.useEffect(() => {
            window.REACT_APP_NAVIGATE = i, Jm(window.REACT_APP_NAVIGATE)
        })
    }
    return s
}
const zx = Object.freeze(Object.defineProperty({
    __proto__: null,
    AppRoutes: Fm,
    navigatePromise: Dx
}, Symbol.toStringTag, {
    value: "Module"
}));

function Ux() {
    return y.jsx(dx, {
        basename: "/preview/f9801a94-cd6a-4a15-bcbd-d787b757fc94/3144826",
        children: y.jsx(Fm, {})
    })
}
ev.createRoot(document.getElementById("root")).render(y.jsx(V.StrictMode, {
    children: y.jsx(Ux, {})
}));
//# sourceMappingURL=index-CaUGlL50.js.map