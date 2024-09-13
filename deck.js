const images = document.querySelectorAll('.slideshow img');
let currentIndex = 0;

function showImage(index) {
  images.forEach(img => img.style.display = 'none');
  images[index].style.display = 'block';
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

setInterval(nextImage, 500);

// Show the first image initially
showImage(currentIndex);