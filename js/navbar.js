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
