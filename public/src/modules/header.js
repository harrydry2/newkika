import { $, $$ } from "./bling";

const header = $(".header");
const headerInner = $(".header__inner");
const twitter = $(".header__icons-twitter");
const linkedin = $(".header__icons-linkedin");

window.on("scroll", headerScroll);

function headerScroll() {
  if (window.scrollY > 20) {
    header.classList.add("headerScroll");
    headerInner.classList.add("headerScrollInner");
    if ($(".merchants")) {
      twitter.classList.remove("headerWhite");
      linkedin.classList.remove("headerWhite");
    }
  }
  if (window.scrollY < 20 && header.classList.contains("headerScroll")) {
    header.classList.remove("headerScroll");
    headerInner.classList.remove("headerScrollInner");
    if ($(".merchants")) {
      twitter.classList.add("headerWhite");
      linkedin.classList.add("headerWhite");
    }
  }
}
