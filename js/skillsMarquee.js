const skillsMarquee = document.querySelector(".languagesIcon-container");

if (skillsMarquee && !skillsMarquee.dataset.loopReady) {
  const originalSkills = Array.from(skillsMarquee.children);

  originalSkills.forEach((skill) => {
    skill.classList.add("skill-marquee-item");
  });

  for (let i = 0; i < 3; i++) {
    originalSkills.forEach((skill) => {
      const clonedSkill = skill.cloneNode(true);
      clonedSkill.setAttribute("aria-hidden", "true");
      clonedSkill.classList.add("skill-marquee-item");
      skillsMarquee.appendChild(clonedSkill);
    });
  }

  skillsMarquee.dataset.loopReady = "true";
}

const marqueeStyle = document.createElement("style");

marqueeStyle.innerHTML = `
  .languages {
    overflow: hidden !important;
  }

  .languagesIcon-container {
    width: max-content !important;
    min-width: max-content !important;
    display: flex !important;
    align-items: center !important;
    gap: 26px !important;
    padding: 6px 0 10px !important;
    animation: skillsInfiniteLoop 34s linear infinite !important;
    will-change: transform;
  }

  .languagesIcon-container:hover {
    animation-play-state: paused !important;
  }

  .languagesIcon-container > div,
  .skill-marquee-item {
    flex-shrink: 0 !important;
  }

  @keyframes skillsInfiniteLoop {
    from {
      transform: translateX(0);
    }

    to {
      transform: translateX(-50%);
    }
  }

  @media (max-width: 480px) {
    .languagesIcon-container {
      animation-duration: 22s !important;
      gap: 18px !important;
    }
  }
`;

document.head.appendChild(marqueeStyle);