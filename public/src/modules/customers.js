import { $, $$ } from "./bling";
import zenscroll from "zenscroll";

function zenscrollFunction3() {
  const button = $(".customerstop__arrow");
  const git = $(".three");
  button.on("click", () => {
    zenscroll.to(git);
  });
}

export default zenscrollFunction3;
