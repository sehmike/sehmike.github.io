window.addEventListener('load', function() {
  const fullBgUrl = "https://michaelseh.com/001.gif?" + Math.random();

  const img = new Image();
  img.src = fullBgUrl;

  img.onload = function() {
    document.documentElement.style.backgroundImage = `url('${fullBgUrl}')`;
    document.documentElement.style.backgroundRepeat = "no-repeat";
    document.documentElement.style.backgroundPosition = "center center";
    document.documentElement.style.backgroundAttachment = "fixed";
    document.documentElement.style.backgroundSize = "cover";
  };
});