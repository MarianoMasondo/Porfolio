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