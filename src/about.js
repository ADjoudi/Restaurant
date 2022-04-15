export default function appendAbout(content) {
  const about = document.createElement("div");
  about.classList.add("about");
  const aboutTitle = document.createElement("p");
  aboutTitle.textContent = "Your new favorite place!";
  aboutTitle.classList.add("aboutTitle");
  const aboutText = document.createElement("p");
  aboutText.textContent =
    "According to all known laws of aviation, there is no way a bee should be able to fly. Its wings are too small to get its fat little body off the ground. The bee, of course, flies anyway because bees don't care what humans think is impossible. Yellow, black. Yellow, black. Yellow, black. Yellow, black. Ooh, black and yellow! Let's shake it up a little. Barry! Breakfast is ready! Ooming! Hang on a second. Hello? - Barry? - Adam? - Oan you believe this is happening? - I can't. I'll pick you up. Looking sharp.";
  aboutText.classList.add("aboutText");

  about.appendChild(aboutTitle);
  about.appendChild(aboutText);

  content.appendChild(about);
}
