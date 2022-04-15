import "./style.css";
import appendHeader from "./header";
import appendHome from "./home";
import appendMenu from "./menu";
import appendAbout from "./about";

const header = document.querySelector("#header");
const content = document.querySelector("#content");
appendHeader(header);
appendHome(content);

let hero_btn = document.querySelector(".hero-btn");
const links = document.querySelectorAll("a");

const heroBtnOnClick = () => {
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
  links.forEach((link) => {
    link.classList.remove("clicked-link");
    if (link.textContent == "Menu") {
      link.classList.add("clicked-link");
    }
  });
  appendMenu(content);
};

hero_btn.addEventListener("click", heroBtnOnClick);

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    links.forEach((a) => {
      a.classList.remove("clicked-link");
    });
    e.target.classList.add("clicked-link");
    while (content.firstChild) {
      content.removeChild(content.firstChild);
    }
    switch (e.target.textContent) {
      case "Home":
        appendHome(content);
        hero_btn = document.querySelector(".hero-btn");
        hero_btn.addEventListener("click", heroBtnOnClick);
        break;
      case "Menu":
        appendMenu(content);
        break;
      case "About":
        appendAbout(content);
        break;
      default:
    }
  });
});
