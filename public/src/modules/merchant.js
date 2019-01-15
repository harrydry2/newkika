import { $, $$ } from "./bling";
import zenscroll from "zenscroll";

function faqFunction() {
  const faqInnerArray = Array.from($$(".faq__inner"));

  faqInnerArray.forEach(clickFAQ => {
    clickFAQ.on("click", () => {
      const chevron = clickFAQ.querySelector(".faq__inner-icon");
      const text = clickFAQ.querySelector(".faq__inner-text");
      const bottom = clickFAQ.querySelector(".faq__inner-bottom");
      chevron.classList.toggle("faq__inner-icon-active");
      clickFAQ.classList.toggle("faq__inner-active");
      text.classList.toggle("faq__inner-text-active");
      bottom.classList.toggle("faq__inner-bottom-active");
    });
  });
}

function radioFunction() {
  const radioClick = $$(".radioClick");

  radioClick.forEach(radioButton => {
    radioButton.on("click", () => {
      radioButton.querySelector("label").click();
    });
  });
}

function wideFunction() {
  var wideVar = 0;
  var prevVar = 0;

  const ulWide = $(".stories > ul");
  const next = $(".wide__handle-next");
  const prev = $(".wide__handle-prev");
  const wideRightArray = Array.from($$(".wide__right"));
  const wideImgArray = Array.from($$("figure > img"));
  var clicked = false;

  setInterval(() => {
    if (!clicked) {
      if (wideVar === 3) {
        prevVar = wideVar;
        wideVar = 0;
      } else {
        prevVar = wideVar;
        wideVar++;
      }
      wideFunc();
    }
    clicked = false;
  }, 4000);

  next.on("click", () => {
    clicked = true;
    if (wideVar === 3) {
      prevVar = wideVar;
      wideVar = 0;
    } else {
      prevVar = wideVar;
      wideVar++;
    }
    wideFunc(true);
  });

  prev.on("click", () => {
    clicked = true;
    if (wideVar === 0) {
      prevVar = wideVar;
      wideVar = 3;
    } else {
      prevVar = wideVar;
      wideVar--;
    }
    wideFunc(false);
  });

  function wideFunc(next) {
    ulWide.style.transform = `translateX(-${wideVar * 25}%)`;
    wideRightArray.forEach((wideRight, i) => {
      if (i === prevVar) {
        wideRight.classList.remove("wide__right-active");
        wideImgArray[i].classList.remove("wide__extra-active");
      }
      if (i === wideVar) {
        wideRight.classList.add("wide__right-active");
        wideImgArray[i].classList.add("wide__extra-active");
      }
    });
  }
}

function formSubmit() {
  const emailButton = $(".git__submit > .button");
  const form = $("form");
  emailButton.on("click", () => form.submit());
}

function zenscrollFunction() {
  const button = $(".merchants__left > .button");
  const git = $(".gitOuter");
  button.on("click", () => {
    zenscroll.to(git);
  });
}

function zenscrollFunction2() {
  const button = $(".specialGIT");
  const git = $(".gitOuter");
  button.on("click", () => {
    zenscroll.to(git);
  });
}

const bamn0 = $(".bamn0");
const bamn1 = $(".bamn1");
const bamn2 = $(".bamn2");
const bamn3 = $(".bamn3");

function imgSwap() {
  if (window.innerWidth < 840) {
    bamn0.src = "https://s3.amazonaws.com/kikapay/wide0Alt.jpg";
    bamn1.src = "https://s3.amazonaws.com/kikapay/wide1Alt.jpg";
    bamn2.src = "https://s3.amazonaws.com/kikapay/wide2Alt.jpg";
    bamn3.src = "https://s3.amazonaws.com/kikapay/wide3Alt.jpg";
  }
}

module.exports = {
  faqFunction,
  radioFunction,
  wideFunction,
  formSubmit,
  zenscrollFunction,
  zenscrollFunction2,
  imgSwap
};
