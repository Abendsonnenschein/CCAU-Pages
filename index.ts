import { addSelectButton } from "./pg_delete";

function addButtons() {
  // UNSAFETY: Race condition
  setTimeout(addSelectButton, 2000);
}

addButtons();
