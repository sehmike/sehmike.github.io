window.addEventListener('load', function() {
  const gifUrl = "https://michaelseh.com/001.gif?" + Math.random();

  const bgGif = document.getElementById('bg-gif');

  const preloadImg = new Image();
  preloadImg.src = gifUrl;

  preloadImg.onload = function() {
    bgGif.src = gifUrl;
  };
});