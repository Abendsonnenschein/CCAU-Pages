import { addButton } from "./check";
import * as u from "./utils";

u.observeDOM(document.body, () => {
  const msg0: string = "This friendly creature sees all, however ";
  const msg1: string = "it probably wont know what to do with it.";

  u.log(msg0 + msg1);
  addButton();
});

setTimeout(addButton, 2000);
