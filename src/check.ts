function selectAll() {
  const s: string = ".select-page-checkbox";
  const s2: string = "#ccau-pages";
  const boxes: NodeListOf<Element> = document.querySelectorAll(s);
  const elems: Element[] = Array.from(boxes);
  const chk: boolean = (document.querySelector(s2) as HTMLInputElement).checked;

  elems.forEach((e) => {
    const box: HTMLInputElement = e as HTMLInputElement;
    const label: string = box.ariaLabel;

    if (box.checked !== chk && !label.includes("University Information")) {
      box.click();
    }
  });
}

export function addButton() {
  const row: Element | null = document.querySelector(".header-row");
  const slot: Element | undefined = row?.children[0];
  const newHTML: string = `<input type="checkbox" id="ccau-pages"></input>`;
  const oldHTML: string = slot?.innerHTML || "";

  if (oldHTML.includes("ccau-pages")) {
    console.log("[CCAU] Button already exists");
    return;
  }

  slot?.insertAdjacentHTML("afterbegin", newHTML);

  const btn: Element | null = document.querySelector("#ccau-pages");
  btn?.addEventListener("click", selectAll, false);
}
