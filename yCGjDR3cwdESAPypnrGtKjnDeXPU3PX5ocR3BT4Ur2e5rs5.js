const baseUrl = "https://michaelseh.com/album/";
const images = [];
const start = 1;
const end = 1053;

for (let i = start; i <= end; i++) {
  images.push(`${baseUrl}${i}.jpg`);
}

const imageDisplay = document.getElementById("image-display");

function shuffleImage() {
  const randomIndex = Math.floor(Math.random() * images.length);
  imageDisplay.src = images[randomIndex];
}

shuffleImage();

setInterval(shuffleImage, 500);