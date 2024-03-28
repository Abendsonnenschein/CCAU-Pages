import { Option } from "./option";

export function clickButton(sel: string) {
  const element: Option<Element> = document.querySelector(sel);
  const btn: Option<HTMLElement> = element as Option<HTMLElement>;

  btn?.click();
}

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
