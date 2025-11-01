document.querySelectorAll(".image-container").forEach((container) => {
  const images = Array.from(container.querySelectorAll("img"));
  const btnPrev = container.querySelector(".nav-arrow.left");
  const btnNext = container.querySelector(".nav-arrow.right");
  let currentIndex = 0;

  function showImage(index) {
    images.forEach((img, i) => {
      img.classList.toggle("visible", i === index);
    });
  }

  btnPrev.addEventListener("click", (e) => {
    e.stopPropagation();
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  });

  btnNext.addEventListener("click", (e) => {
    e.stopPropagation();
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  });

  let touchStartX = 0;
  let touchEndX = 0;

  container.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  container.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX;
    e.preventDefault();
    handleGesture();
  });

  function handleGesture() {
    const swipeThreshold = 50;
    if (touchEndX + swipeThreshold < touchStartX) {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    } else if (touchEndX - swipeThreshold > touchStartX) {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showImage(currentIndex);
    }
  }

  showImage(currentIndex);
});