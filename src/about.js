export default function appendAbout(content) {
  //hero section
  const about = document.createElement("p");
  about.textContent = "this is the about page";

  content.appendChild(about);
}
