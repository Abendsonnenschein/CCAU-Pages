import * as u from "./utils";
import { Option } from "./option";

function deleteAll() {
  const s: string = ".select-page-checkbox";
  const s2: string = "#ccau_omnibox";
  const chk: boolean = (document.querySelector(s2) as HTMLInputElement).checked;

  Array.from(document.querySelectorAll(s))
    .map((e) => e as HTMLInputElement)
    .forEach((box) => {
      const label: Option<string> = box.ariaLabel;

      if (box.checked !== chk && !label?.includes("University Information")) {
        box.click();
      }
    });

  if (chk) {
    u.clickButton(".delete_pages");
  }
}

export function addButton() {
  const row: Option<Element> = document.querySelector("thead");
  const slot: Option<Element> = row?.children[0].children[0];
  const omniBox: HTMLInputElement = document.createElement("input");

  omniBox.type = "checkbox";
  omniBox.id = "ccau_omnibox";
  omniBox.onclick = deleteAll;

  if (document.querySelector("#ccau_omnibox")) {
    u.log("Omni-box already exists");
    return;
  }

  if (!row) {
    u.log("Row not found");
    return;
  }

  u.log("Adding omni-box");
  slot?.appendChild(omniBox);
}
