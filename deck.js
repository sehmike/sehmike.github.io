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

// Automatically change images every 3 seconds
setInterval(nextImage, 3000);

// Show the first image initially
showImage(currentIndex);