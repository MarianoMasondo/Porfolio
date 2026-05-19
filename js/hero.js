const heroContent = document.querySelector(".container-header");
const heroTitle = document.querySelector(".header-title");

if (heroTitle) {
  heroTitle.innerHTML = `
    Hola gente!
    <span>Soy Marian</span>
  `;
}

if (heroContent && !document.querySelector(".hero-projects-button")) {
  const projectsButton = document.createElement("a");

  projectsButton.href = "#projects";
  projectsButton.className = "hero-projects-button";
  projectsButton.textContent = "Ver proyectos";

  heroContent.appendChild(projectsButton);
}