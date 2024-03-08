import { addButton } from "./check";
import { observeDOM } from "./sub";

observeDOM(document.body, () => {
  console.log("[CCAU] DOM changed, maybe I can add button now? 🥺👉👈");

  if (document.querySelector(".header-row") !== null) {
    addButton();
  }
});
