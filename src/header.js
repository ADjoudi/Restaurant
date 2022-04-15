import profileImage from "./resources/i1.png";

export default function appendHeader(content) {
  //header
  const header = document.createElement("header");

  const logo = document.createElement("div");
  logo.textContent = "Pizza Eleulma";
  logo.classList.add("logo");

  const nav = document.createElement("nav");
  const linkHome = document.createElement("a");
  linkHome.textContent = "Home";
  linkHome.classList.add("clicked-link");
  const linkMenu = document.createElement("a");
  linkMenu.textContent = "Menu";
  const linkAbout = document.createElement("a");
  linkAbout.textContent = "About";
  nav.appendChild(linkHome);
  nav.appendChild(linkMenu);
  nav.appendChild(linkAbout);

  const profile = document.createElement("img");
  profile.src = profileImage;
  profile.setAttribute("alt", "placeholder");

  header.appendChild(logo);
  header.appendChild(nav);
  header.appendChild(profile);

  content.appendChild(header);
}
