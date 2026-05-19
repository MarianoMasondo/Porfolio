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
      label = "Demo";
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