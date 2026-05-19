const hamburgerButton = document.querySelector("#btn-hamburger");
const navMenu = document.querySelector(".undeploy");
const navLinks = document.querySelectorAll(".undeploy a");

if (hamburgerButton && navMenu) {
  hamburgerButton.addEventListener("click", () => {
    navMenu.classList.toggle("deploy");
    hamburgerButton.classList.toggle("rotate");
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (navMenu) {
      navMenu.classList.remove("deploy");
    }

    if (hamburgerButton) {
      hamburgerButton.classList.remove("rotate");
    }
  });
});

/* =========================
   HERO FIX
   - Cambia "Hola, mi nombre es" por "Full Stack Developer"
   - Reemplaza el botón falso de CSS por un link real
========================= */

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

/* =========================
   CSS FIXES INYECTADOS
   Esto pisa el botón falso hecho con ::after
========================= */

const style = document.createElement("style");

style.innerHTML = `
  .container-header::before {
    content: "Full Stack Developer";
  }

  .container-header::after {
    display: none !important;
    content: none !important;
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

document.head.appendChild(style);