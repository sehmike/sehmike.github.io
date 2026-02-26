const experiments = [
  {
    type: 'video',
    src: 'https://michaelseh.com/videos/Temperature-gradient-list.mp4',
    caption: 'Temperature gradient list. <span class="muted">Tap a day in the 7-day forecast and the entire screen shifts color to match the temperature. Warm days glow amber, cold days go deep blue.</span>'
  },
  {
    type: 'video',
    src: 'https://michaelseh.com/videos/Emoji-motion-cues.mp4',
    caption: 'Emoji motion cues. <span class="muted">Vehicle motion cues is a feature that displays small dots along your screen edges while riding in a car. The dots shift with vehicle movement, giving your eyes a reference point to reduce motion sickness. This experiment swaps the dots for emoji as a hidden Easter egg. Steering wheels, traffic lights, pedestrians reacting to every turn and brake.</span>'
  }
];

const placeholder = {
  type: 'placeholder',
  caption: 'Next experiment. <span class="muted">In progress.</span>'
};

for (let j = experiments.length - 1; j > 0; j--) {
  const k = Math.floor(Math.random() * (j + 1));
  [experiments[j], experiments[k]] = [experiments[k], experiments[j]];
}

const items = [...experiments, placeholder];

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
    fig.appendChild(video);

    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          if (!video.src || video.readyState === 0) {
            video.src = item.src;
            video.load();
          }
          video.play().catch(() => {});
        } else {
          video.pause();
          if (video.readyState > 0) {
            video.removeAttribute('src');
            video.load();
          }
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