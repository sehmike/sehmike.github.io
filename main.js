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
  },
  {
    type: 'video',
    src: 'https://michaelseh.com/videos/Artwork-dimension-measure.mp4',
    caption: 'Artwork dimension measure. <span class="muted">Listed dimensions describe the whole. Drag to measure the parts. Isolate any section to see its estimated real-world size, scaled from the known artwork dimensions.</span>'
  },
  {
    type: 'video',
    src: 'https://michaelseh.com/videos/Translation-scrub.mp4',
    caption: 'Translation scrub. <span class="muted">Drag across any text and it translates word by word as your finger passes over it. One language behind your finger, another ahead.</span>'
  },
  {
    type: 'video',
    src: 'https://michaelseh.com/videos/Functional-doubt.mp4',
    caption: 'Functional Doubt. <span class="muted">A watch face where shapes tell the time, but only if you know how to look.</span>'
  },
  {
    type: 'video',
    src: 'https://michaelseh.com/videos/Gaze-depth.mp4',
    caption: 'Gaze depth. <span class="muted">The paragraph you\'re reading is sharp. The rest blur more the further they are from your focus.</span>'
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