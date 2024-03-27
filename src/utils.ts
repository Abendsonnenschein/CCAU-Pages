import { Option } from "./option";

export function log(msg: string) {
  console.log("[CCAU] " + msg);
}

export function observeDOM(element: Element, callback: () => void) {
  const observer = new MutationObserver(callback);

  observer.observe(element, {
    childList: true,
  });

  return observer;
}
