const gallery   = document.getElementById('gallery');
const navLeft  = document.getElementById('navLeft');
const navRight = document.getElementById('navRight');
const numSlides = gallery.children.length;
let current = 0;

function updateGallery() {
  gallery.style.transform = `translateX(${-current * window.innerWidth}px)`;
}
function prev() {
  if(current > 0) {
    current--;
  } else {
    current = numSlides - 1;
  }
  updateGallery();
}
function next() {
  if(current < numSlides - 1) {
    current++;
  } else {
    current = 0;
  }
  updateGallery();
}
navLeft.addEventListener('click', prev);
navRight.addEventListener('click', next);

// Touch support for mobile
let startX = null;
gallery.addEventListener('touchstart', e => {
  if(e.touches.length === 1) startX = e.touches[0].clientX;
});
gallery.addEventListener('touchend', e => {
  if(startX === null) return;
  const endX = (e.changedTouches && e.changedTouches[0].clientX) || 0;
  const diff = endX - startX;
  if(Math.abs(diff) > 50){
    if(diff > 0) prev();
    else next();
  }
  startX = null;
});

document.querySelectorAll('.gallery img').forEach(img => {
  img.addEventListener('dragstart', e => e.preventDefault());
});

window.addEventListener('keydown', e => {
  if(e.key === 'ArrowLeft') prev();
  if(e.key === 'ArrowRight') next();
});

window.addEventListener('resize', updateGallery);

updateGallery();