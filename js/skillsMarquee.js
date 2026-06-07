(() => {
  const SELECTOR = ".languagesIcon-container";
  const SPEED = 42;

  const initMarquee = (container) => {
    const originalHTML = container.dataset.originalHtml || container.innerHTML;
    container.dataset.originalHtml = originalHTML;
    container.innerHTML = originalHTML;

    const items = Array.from(container.children);

    if (!items.length) return;

    container.innerHTML = "";

    const groupOne = document.createElement("div");
    const groupTwo = document.createElement("div");

    groupOne.className = "skills-marquee-group";
    groupTwo.className = "skills-marquee-group";
    groupTwo.setAttribute("aria-hidden", "true");

    items.forEach((item) => {
      groupOne.appendChild(item.cloneNode(true));
      groupTwo.appendChild(item.cloneNode(true));
    });

    container.appendChild(groupOne);
    container.appendChild(groupTwo);

    const groupWidth = groupOne.scrollWidth;
    const duration = groupWidth / SPEED;

    container.style.setProperty("--marquee-duration", `${duration}s`);
    container.classList.add("marquee-ready");
  };

  const initAll = () => {
    document.querySelectorAll(SELECTOR).forEach(initMarquee);
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAll);
  } else {
    initAll();
  }
})();