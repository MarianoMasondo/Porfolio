const carousels = document.querySelectorAll(".project-carousel");

carousels.forEach((carousel) => {
  const image = carousel.querySelector(".carousel-image");
  const dots = carousel.querySelectorAll(".carousel-dot");

  const images = carousel.dataset.images
    .split(",")
    .map((imagePath) => imagePath.trim());

  let currentImageIndex = 0;

  const showImage = (newIndex) => {
    image.classList.add("is-changing");

    setTimeout(() => {
      currentImageIndex = newIndex;
      image.src = images[currentImageIndex];

      dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === currentImageIndex);
      });

      image.classList.remove("is-changing");
    }, 250);
  };

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      showImage(index);
    });
  });

  setInterval(() => {
    const nextImageIndex = (currentImageIndex + 1) % images.length;
    showImage(nextImageIndex);
  }, 4000);
});