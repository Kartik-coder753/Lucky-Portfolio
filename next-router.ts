import { NavigateFunction } from "react-router-dom";

interface NextRouter {
  push: (url: string, as?: any, options?: any) => Promise<any> | void;
  replace: (url: string, as?: any, options?: any) => Promise<any> | void;
  forward: () => void;
  back: () => void;
  refresh: () => void;
  prefetch: (href: string, options?: any) => void;
}

declare global {
  interface Window {
    REACT_APP_ROUTER: NextRouter
  }
}
 async function setupNextRouter() {
  const navigatePromise = await import("../src/router").then(m => m.navigatePromise).catch((e) => {
    console.error(e);
    return Promise.resolve(() => {})
  });
  const navigate: NavigateFunction = await navigatePromise;
  window.REACT_APP_ROUTER = {
      push: (url: string, options?: any) => {
        navigate(url, options);
      },
      replace: (url: string, as?: any, options?: any) => {
        navigate(url, {replace: true, ...options});
      },
      forward: () => {
        navigate(1);
      },
      back: () => {
        navigate(-1);
      },
      refresh: () => {
        navigate(0);
      },
      prefetch: (href: string, options?: any) => {
        navigate(href, options);
      },
    }
  }

  export const routerReady = new Promise((resolve)=>{
    setupNextRouter().then(()=>{
      resolve(window.REACT_APP_ROUTER)
    })
  })


export const getNextRouter = (): NextRouter => {
  return window.REACT_APP_ROUTER
};