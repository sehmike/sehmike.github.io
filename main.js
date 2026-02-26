const items = [
  {
    type: 'video',
    src: 'https://michaelseh.com/videos/Temperature-gradient-list.mp4',
    caption: 'Temperature gradient list. <span class="muted">Tap a day in the 7-day forecast and the entire screen shifts color to match the temperature. Warm days glow amber, cold days go deep blue.</span>'
  },
  {
    type: 'placeholder',
    caption: 'Next experiment. <span class="muted">In progress.</span>'
  }
];

let i = 0;
const mosaic = document.getElementById('mosaic');

function addPiece() {
  if (i >= items.length) return;

  const item = items[i];
  const w = Math.floor(Math.random() * 25 + 25);

  const fig = document.createElement('figure');
  fig.className = 'piece';
  fig.style.maxWidth = w + '%';

  if (item.type === 'video') {
    const video = document.createElement('video');
    video.loop = true;
    video.muted = true;
    video.playsInline = true;
    video.preload = 'none';
    video.dataset.lazy = '';
    const source = document.createElement('source');
    source.src = item.src;
    source.type = 'video/mp4';
    video.appendChild(source);
    fig.appendChild(video);

    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          if (video.dataset.lazy !== undefined && video.readyState === 0) {
            video.load();
            delete video.dataset.lazy;
          }
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      });
    }, { threshold: 0.2 });
    obs.observe(video);
  } else {
    const ph = document.createElement('div');
    ph.className = 'placeholder';
    fig.appendChild(ph);
  }

  const cap = document.createElement('figcaption');
  cap.innerHTML = item.caption;
  fig.appendChild(cap);

  mosaic.prepend(fig);
  i++;
}

addPiece();

document.body.addEventListener('click', function(e) {
  if (e.target.closest('footer')) return;
  addPiece();
});

document.addEventListener('dragstart', function(e) {
  if (e.target.tagName === 'VIDEO') e.preventDefault();
});