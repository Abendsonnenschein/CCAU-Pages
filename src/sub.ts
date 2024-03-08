// DOM observation but its 🥺

export function observeDOM(element: Element, callback: () => void) {
  const observer = new MutationObserver(callback);

  observer.observe(element, {
    childList: true,
  });

  return observer;
}
