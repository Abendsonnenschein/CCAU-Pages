// ==UserScript==
// @name        CCAU - Pages Section
// @namespace   CCAU Suite
// @description Automate course copies
// @match       https://*.instructure.com/courses/*/pages
// @version     0.1.1
// @author      Abendsonnenschein
// @icon        https://du11hjcvx0uqb.cloudfront.net/br/dist/images/favicon-e10d657a73.ico
// @grant       none
// @license     AGPL-3.-or-later
// ==/UserScript==

function selectAll() {
  const sel: string = ".select-page-checkbox";
  const boxes: NodeListOf<Element> = document.querySelectorAll(sel);
  const elems: Element[] = Array.from(boxes);

  elems.forEach((e) => (e as HTMLElement).click());
}

function addButton() {
  const row: Element | null = document.querySelector(".header-row");
  const slot: Element | undefined = row?.children[0];
  const newHTML: string = `<input type="checkbox" id="ccau-pages"></input>`;

  slot?.insertAdjacentHTML("afterbegin", newHTML);

  const btn: Element | null = document.querySelector("#ccau-pages");
  btn?.addEventListener("click", selectAll, false);
}

setTimeout(addButton, 1500);
