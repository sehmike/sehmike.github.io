window.addEventListener('load', function() {
  // Animated GIF URL with cache buster to avoid stale cached static frames
  const gifUrl = "https://michaelseh.com/001.gif?" + Math.random();

  const bgGif = document.getElementById('bg-gif');

  // Preload the GIF
  const preloadImg = new Image();
  preloadImg.src = gifUrl;

  preloadImg.onload = function() {
    // Once fully loaded, replace the PNG with the animated GIF
    bgGif.src = gifUrl;
  };
});