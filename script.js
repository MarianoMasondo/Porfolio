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
   CSS FIXES INYECTADOS
   - Pisa estilos viejos
   - Estiliza botón real del hero
   - Hace loop infinito real en programming skills
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
  }
`;

document.head.appendChild(style);