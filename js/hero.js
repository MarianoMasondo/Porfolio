const heroContent = document.querySelector(".container-header");
const heroTitle = document.querySelector(".header-title");

if (heroTitle) {
  heroTitle.innerHTML = `
    Hola gente!
    <span>Soy Marian</span>
  `;
}

if (heroContent) {
  const existingButton = document.querySelector(".hero-projects-button");

  if (existingButton) {
    existingButton.remove();
  }

  const projectsButton = document.createElement("a");

  projectsButton.href = "#projects";
  projectsButton.className = "hero-projects-button";
  projectsButton.textContent = "Ver proyectos";

  projectsButton.addEventListener("click", (event) => {
    const projectsSection = document.querySelector("#projects");

    if (!projectsSection) {
      window.location.href = "./index.html#projects";
      return;
    }

    event.preventDefault();

    projectsSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    window.history.pushState(null, "", "#projects");
  });

  heroContent.appendChild(projectsButton);
}

const heroStyle = document.createElement("style");

heroStyle.innerHTML = `
  .container-header::before {
    content: "Full Stack Developer" !important;
  }

  .container-header::after {
    display: none !important;
    content: none !important;
    pointer-events: none !important;
  }

  .hero-projects-button {
    width: fit-content;
    min-height: 50px;
    margin-top: 34px;
    padding: 0 24px;
    border: 1px solid var(--green);
    border-radius: 6px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: var(--green);
    font-family: "JetBrains Mono", monospace;
    font-size: 0.88rem;
    font-weight: 500;
    cursor: pointer;
    transition:
      background 0.2s ease,
      transform 0.2s ease;
  }

  .hero-projects-button:hover {
    background: var(--green-soft);
    transform: translateY(-2px);
  }

  @media (max-width: 480px) {
    .hero-projects-button {
      width: 100%;
    }
  }
`;

document.head.appendChild(heroStyle);