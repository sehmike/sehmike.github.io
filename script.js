// Gallery core navigation
document.addEventListener('DOMContentLoaded', () => {
  const gallery = document.querySelector('.gallery');
  const images = Array.from(document.querySelectorAll('.gallery img'));
  const navLeft = document.getElementById('navLeft');
  const navRight = document.getElementById('navRight');
  let currentIndex = 0;

  function showImage(index) {
    images.forEach((img, i) => {
      if (i === index) {
        img.classList.add('active');
      } else {
        img.classList.remove('active');
      }
    });
  }

  function prevImage() {
    currentIndex = (currentIndex + images.length - 1) % images.length;
    showImage(currentIndex);
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }

  navLeft.addEventListener('click', prevImage);
  navRight.addEventListener('click', nextImage);

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') prevImage();
    else if (e.key === 'ArrowRight') nextImage();
  });

  // Touch swipe navigation
  let startX = null;
  gallery.addEventListener('touchstart', (e) => {
    if (e.touches.length === 1) startX = e.touches[0].clientX;
  });
  gallery.addEventListener('touchend', (e) => {
    if (startX === null || e.touches.length > 0) return;
    let endX = e.changedTouches[0].clientX;
    if (endX - startX > 50) prevImage();
    if (startX - endX > 50) nextImage();
    startX = null;
  });

  // Initialize
  showImage(currentIndex);
});