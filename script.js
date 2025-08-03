const gallery = document.getElementById('gallery');
const navLeft = document.getElementById('navLeft');
const navRight = document.getElementById('navRight');
const imgCount = gallery.children.length;
let current = 0;

// Navigation function
function goTo(idx) {
  current = (idx + imgCount) % imgCount;
  gallery.style.transform = `translateX(-${current * 100}vw)`;
}

// Click/touch navigation
navLeft.addEventListener('click', () => goTo(current - 1));
navRight.addEventListener('click', () => goTo(current + 1));

// Touch/swipe navigation (mobile)
let startX = null;
gallery.addEventListener('touchstart', (e) => {
  if (e.touches.length === 1) startX = e.touches[0].clientX;
});
gallery.addEventListener('touchmove', (e) => {
  if (startX === null) return;
  const dx = e.touches[0].clientX - startX;
  // Lower threshold for better responsiveness
  if (dx > 35) {
    goTo(current - 1);
    startX = null;
  } else if (dx < -35) {
    goTo(current + 1);
    startX = null;
  }
});
gallery.addEventListener('touchend', (e) => { startX = null; });

// Prevent accidental dragging of images on desktop
gallery.addEventListener('dragstart', (e) => e.preventDefault());