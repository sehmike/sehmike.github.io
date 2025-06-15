const vertexShader = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `;

const fragmentShader = `
      precision highp float;
      uniform float offset, darkness, overlayAmount, noiseAmount, time, introTime;
      uniform sampler2D tDiffuse, tOverlay;
      varying vec2 vUv;

      float random2d(vec2 st) {
        return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
      }

      void main() {
        vec3 orig = texture2D(tDiffuse, vUv).rgb;
        vec3 over = texture2D(tOverlay, vUv).rgb;
        vec3 color = vec3(0.149, 0.274, 0.364);
        vec2 uv = (vUv - vec2(0.5)) * vec2(offset);
        vec3 col = mix(orig, vec3(1.0 - darkness, color), dot(uv, uv));
        col = mix(col, col * over, overlayAmount);

        float baseNoise = random2d(gl_FragCoord.xy + mod(time, 1000.0));
        float sweepSpeed = 0.4;
        float sweepWidth = 0.1;
        float sweepPos = mod(time * sweepSpeed, 2.0);
        float dist = abs(vUv.y - sweepPos);
        float sweepMask = smoothstep(sweepWidth, 4.0, dist);
        float sweepNoise = random2d(vec2(gl_FragCoord.x * 5.0, gl_FragCoord.y + time * 50.0));

        col += (sweepNoise - 0.5) * noiseAmount * 1.2 * sweepMask;
        col += (baseNoise - 0.8) * noiseAmount * 0.4;
        col = mix(orig, col, introTime);
        gl_FragColor = vec4(col, 1.0);
      }
    `;

const scene = new THREE.Scene();
const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
const geometry = new THREE.PlaneGeometry(2, 2);

const baseTexture = new THREE.DataTexture(
  new Uint8Array([0, 90, 156, 255]),
  1,
  1,
  THREE.RGBAFormat
);
baseTexture.needsUpdate = true;
const overlayTexturePlaceholder = new THREE.DataTexture(
  new Uint8Array([255, 255, 255, 255]),
  1,
  1,
  THREE.RGBAFormat
);
overlayTexturePlaceholder.needsUpdate = true;

const uniforms = {
  offset: { value: 1.0 },
  darkness: { value: 1.0 },
  overlayAmount: { value: 0.38 },
  noiseAmount: { value: 0.1 },
  time: { value: 0 },
  introTime: { value: 1.0 },
  tDiffuse: { value: baseTexture },
  tOverlay: { value: overlayTexturePlaceholder }
};

const material = new THREE.ShaderMaterial({
  vertexShader,
  fragmentShader,
  uniforms
});

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

function animate(time) {
  uniforms.time.value = time * 0.001;
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

animate();

window.addEventListener("resize", () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
});

const overlayUrl = "https://michaelseh.com/Overlay.jpg";
const image = new Image();
image.crossOrigin = "anonymous";
image.onload = () => {
  const tex = new THREE.Texture(image);
  tex.minFilter = THREE.LinearFilter;
  tex.magFilter = THREE.LinearFilter;
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  tex.needsUpdate = true;
  uniforms.tOverlay.value = tex;
};
image.src = overlayUrl;