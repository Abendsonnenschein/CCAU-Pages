import { addButton } from "./utils";

function selectAll() {
  const sel: string = ".select-page-checkbox";
  const boxes: NodeListOf<Element> = document.querySelectorAll(sel);
  const elems: Element[] = Array.from(boxes);

  elems.forEach((e) => (e as HTMLElement).click());
}

export function addSelectButton() {
  addButton("Select All", "ccau_select", selectAll, ".header-bar-right");
}
