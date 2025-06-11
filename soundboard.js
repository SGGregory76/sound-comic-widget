import { config } from './config.js';

const playBtn = document.getElementById('play-btn');
const stopBtn = document.getElementById('stop-btn');
const varspeed = document.getElementById('varspeed');
const speedValue = document.getElementById('speed-value');
const frameImg = document.getElementById('frame');

let audio;
let animationTimer;

function init() {
  audio = new Audio(config.audioPath);
  audio.loop = false;

  varspeed.addEventListener('input', () => {
    const speed = parseFloat(varspeed.value);
    speedValue.textContent = speed.toFixed(1) + '×';
    audio.playbackRate = speed;
  });

  playBtn.addEventListener('click', play);
  stopBtn.addEventListener('click', stop);
}

function play() {
  stop();
  let frameIndex = 1;
  const speed = parseFloat(varspeed.value);
  const effectiveInterval = config.frameIntervalMs / speed;

  audio.currentTime = 0;
  audio.play();

  animationTimer = setInterval(() => {
    frameImg.src = `${config.framesPath}${frameIndex}.png`;
    frameIndex = frameIndex % config.frameCount + 1;
  }, effectiveInterval);
}

function stop() {
  if (audio) {
    audio.pause();
    audio.currentTime = 0;
  }
  clearInterval(animationTimer);
  frameImg.src = 'assets/frames/placeholder/1.png';
}

window.addEventListener('DOMContentLoaded', init);
