import heroImage from "./resources/hero-image.png";

export default function appendHome(content) {
  //hero section
  const hero = document.createElement("div");
  hero.classList.add("hero");

  const pitch = document.createElement("div");
  pitch.classList.add("pitch");
  const heroText = document.createElement("p");
  heroText.textContent = "Finest Setifian\nStyle Pizza\nStraight To\nYour Door";
  const heroButton = document.createElement("button");
  heroButton.classList.add("hero-btn");
  heroButton.textContent = "Browse Selection";
  pitch.appendChild(heroText);
  pitch.appendChild(heroButton);

  const heroImg = document.createElement("img");
  heroImg.src = heroImage;
  heroImg.setAttribute("alt", "hero-image");

  hero.appendChild(pitch);
  hero.appendChild(heroImg);

  content.appendChild(hero);
}
