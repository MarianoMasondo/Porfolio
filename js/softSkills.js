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