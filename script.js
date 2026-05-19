const hamburgerButton = document.querySelector("#btn-hamburger");
const navMenu = document.querySelector(".undeploy");
const navLinks = document.querySelectorAll(".undeploy a");

/* =========================
   NAVBAR MOBILE
========================= */

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
   HERO
   - Evita texto repetitivo
   - Crea botón real a proyectos
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
   SOFT SKILLS
   - Cambia textos
   - Agrega íconos más profesionales
========================= */

const softSkillItems = document.querySelectorAll(".softSkills-items li");

const newSoftSkills = [
  {
    text: "Resolución de problemas",
    icon: "fas fa-puzzle-piece",
  },
  {
    text: "Aprendizaje continuo",
    icon: "fas fa-book-open",
  },
  {
    text: "Trabajo en equipo",
    icon: "fas fa-users",
  },
  {
    text: "Comunicación clara",
    icon: "fas fa-comment-dots",
  },
  {
    text: "Adaptabilidad",
    icon: "fas fa-arrows-rotate",
  },
  {
    text: "Atención al detalle",
    icon: "fas fa-magnifying-glass",
  },
];

softSkillItems.forEach((item, index) => {
  const skill = newSoftSkills[index];

  if (!skill) return;

  item.innerHTML = `
    <i class="${skill.icon} soft-skill-icon"></i>
    <span>${skill.text}</span>
  `;
});

/* =========================
   PROGRAMMING SKILLS LOOP
   - Duplica los íconos para que el banner sea infinito
========================= */

const skillsMarquee = document.querySelector(".languagesIcon-container");

if (skillsMarquee && !skillsMarquee.dataset.cloned) {
  const originalSkills = Array.from(skillsMarquee.children);

  originalSkills.forEach((skill) => {
    const clonedSkill = skill.cloneNode(true);
    clonedSkill.setAttribute("aria-hidden", "true");
    skillsMarquee.appendChild(clonedSkill);
  });

  skillsMarquee.dataset.cloned = "true";
}

/* =========================
   PROJECT LINKS
   - Reemplaza íconos rotos por FontAwesome
   - Los deja flotando sobre la imagen
   - Cambia textos:
     Youtube -> Demo
     Website -> Live App
     Github -> Repositorio
========================= */

const projectLinkGroups = document.querySelectorAll(".linked-project");

projectLinkGroups.forEach((group) => {
  const projectButtons = group.querySelectorAll("div");

  projectButtons.forEach((buttonContainer) => {
    const link = buttonContainer.querySelector("a");
    const previousText = buttonContainer.textContent.toLowerCase().trim();

    if (!link) return;

    const href = link.getAttribute("href") || "";
    const hrefLower = href.toLowerCase();

    let iconClass = "fas fa-globe";
    let label = "Live App";
    let ariaLabel = "Abrir aplicación publicada";

    if (previousText.includes("youtube") || hrefLower.includes("youtube")) {
      iconClass = "fab fa-youtube";
      label = "Video demo";
      ariaLabel = "Ver demo en YouTube";
    } else if (previousText.includes("github") || hrefLower.includes("github")) {
      iconClass = "fab fa-github";
      label = "Repositorio";
      ariaLabel = "Ver repositorio en GitHub";
    } else if (
      previousText.includes("website") ||
      previousText.includes("web") ||
      previousText.includes("live") ||
      hrefLower.includes("vercel") ||
      hrefLower.includes("netlify") ||
      hrefLower.includes("github.io") ||
      hrefLower.includes("render")
    ) {
      iconClass = "fab fa-chrome";
      label = "Live App";
      ariaLabel = "Abrir aplicación publicada";
    }

    buttonContainer.classList.add("project-action-item");

    link.innerHTML = `<i class="${iconClass}"></i>`;
    link.setAttribute("aria-label", ariaLabel);
    link.setAttribute("title", label);

    let labelElement = buttonContainer.querySelector(".project-action-label");

    if (!labelElement) {
      labelElement = document.createElement("span");
      labelElement.className = "project-action-label";
      buttonContainer.appendChild(labelElement);
    }

    labelElement.textContent = label;
  });
});

/* =========================
   CSS FIXES INYECTADOS
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

  .softSkills-items li {
    min-height: 74px;
    padding: 16px 18px;
    border-radius: var(--radius);
    display: flex;
    align-items: center;
    gap: 14px;
    color: var(--slate-lighter);
    font-size: 0.92rem;
    font-weight: 700;
    background: var(--navy-light);
    border: 1px solid var(--border);
    transition:
      transform 0.2s ease,
      border-color 0.2s ease,
      background 0.2s ease;
  }

  .softSkills-items li::before {
    display: none !important;
    content: none !important;
  }

  .soft-skill-icon {
    width: 34px;
    height: 34px;
    min-width: 34px;
    border-radius: 10px;
    display: grid;
    place-items: center;
    color: var(--green);
    font-size: 1rem;
    background: var(--green-soft);
    border: 1px solid rgba(100, 255, 218, 0.24);
  }

  .softSkills-items li span {
    line-height: 1.3;
  }

  .softSkills-items li:hover {
    transform: translateY(-4px);
    border-color: rgba(100, 255, 218, 0.34);
    background: rgba(17, 34, 64, 0.86);
  }

  .languages {
    overflow: hidden;
  }

  .languagesIcon-container {
    width: max-content;
    min-width: max-content;
    display: flex;
    align-items: center;
    gap: 26px;
    animation: skillsLoop 26s linear infinite !important;
    will-change: transform;
  }

  .languagesIcon-container:hover {
    animation-play-state: paused !important;
  }

  .languagesIcon-container > div {
    flex-shrink: 0;
  }

  @keyframes skillsLoop {
    from {
      transform: translateX(0);
    }

    to {
      transform: translateX(-50%);
    }
  }

  /* =========================
     PROJECT ACTIONS - FLOATING READABLE STYLE
  ========================= */

  .container-img {
    position: relative;
  }

  .container-img::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 48%;
    z-index: 2;
    pointer-events: none;
    background:
      linear-gradient(
        to top,
        rgba(10, 25, 47, 0.88) 0%,
        rgba(10, 25, 47, 0.58) 42%,
        rgba(10, 25, 47, 0.16) 76%,
        transparent 100%
      );
  }

  .linked-project {
    position: absolute !important;
    left: 50% !important;
    right: auto !important;
    bottom: 18px !important;
    width: auto !important;
    min-width: auto !important;
    padding: 0 !important;
    border-radius: 0 !important;
    display: flex !important;
    align-items: flex-end !important;
    justify-content: center !important;
    gap: 28px !important;
    background: transparent !important;
    border: none !important;
    backdrop-filter: none !important;
    box-shadow: none !important;
    transform: translateX(-50%) !important;
    z-index: 6;
  }

  .project-action-item {
    min-width: 82px;
    display: grid !important;
    place-items: center;
    gap: 8px !important;
  }

  .linked-project a {
    width: 60px !important;
    height: 60px !important;
    border-radius: 50% !important;
    display: grid !important;
    place-items: center !important;
    color: var(--green) !important;
    font-size: 1.55rem !important;
    background: rgba(10, 25, 47, 0.92) !important;
    border: 1px solid rgba(100, 255, 218, 0.55) !important;
    backdrop-filter: blur(12px);
    box-shadow:
      0 14px 30px rgba(2, 12, 27, 0.52),
      0 0 0 1px rgba(255, 255, 255, 0.04) inset;
    transition:
      background 0.2s ease,
      transform 0.2s ease,
      border-color 0.2s ease,
      box-shadow 0.2s ease !important;
  }

  .linked-project a:hover {
    background: rgba(100, 255, 218, 0.16) !important;
    transform: translateY(-5px);
    border-color: var(--green) !important;
    box-shadow:
      0 18px 36px rgba(2, 12, 27, 0.58),
      0 0 22px rgba(100, 255, 218, 0.2);
  }

  .linked-project a img,
  .linked-project .linked {
    display: none !important;
  }

  .linked-project span:not(.project-action-label) {
    display: none !important;
  }

  .project-action-label {
    display: inline-flex !important;
    min-height: 24px;
    padding: 4px 9px;
    border-radius: 999px;
    align-items: center;
    justify-content: center;
    color: var(--white) !important;
    font-family: "JetBrains Mono", monospace;
    font-size: 0.7rem !important;
    font-weight: 700 !important;
    line-height: 1;
    text-align: center;
    white-space: nowrap;
    background: rgba(10, 25, 47, 0.9);
    border: 1px solid rgba(100, 255, 218, 0.24);
    box-shadow: 0 8px 20px rgba(2, 12, 27, 0.42);
    text-shadow: none;
  }

  @media (max-width: 760px) {
    .container-img::before {
      display: none;
    }

    .linked-project {
      position: static !important;
      left: auto !important;
      right: auto !important;
      bottom: auto !important;
      width: 100% !important;
      padding: 16px 12px !important;
      border-radius: 0 0 var(--radius) var(--radius) !important;
      gap: 20px !important;
      transform: none !important;
      background: var(--navy-light) !important;
      border-top: 1px solid var(--border) !important;
    }

    .project-action-item {
      min-width: 74px;
    }

    .linked-project a {
      width: 52px !important;
      height: 52px !important;
      font-size: 1.35rem !important;
    }

    .project-action-label {
      background: transparent;
      border: none;
      box-shadow: none;
      color: var(--slate-lighter) !important;
    }
  }

  @media (max-width: 480px) {
    .hero-projects-button {
      width: 100%;
    }

    .softSkills-items li {
      min-height: 68px;
    }

    .languagesIcon-container {
      animation-duration: 18s !important;
    }

    .linked-project {
      gap: 12px !important;
    }

    .project-action-label {
      font-size: 0.64rem !important;
    }
  }
`;

document.head.appendChild(style);