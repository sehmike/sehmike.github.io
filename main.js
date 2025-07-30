window.addEventListener('load', function() {
    const fullBgUrl = "https://michaelseh.com/001.gif?" + Math.random();
    const bgGif = document.getElementById('bg-gif');
    const img = new Image();
    img.src = fullBgUrl;
    img.onload = function() {
      bgGif.src = fullBgUrl;
    };
  });