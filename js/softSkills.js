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

const softSkillsStyle = document.createElement("style");

softSkillsStyle.innerHTML = `
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

  @media (max-width: 480px) {
    .softSkills-items li {
      min-height: 68px;
    }
  }
`;

document.head.appendChild(softSkillsStyle);
