import { config } from './config.js';

const frameImg = document.getElementById('frame');
const soundButtonsContainer = document.querySelector('.sound-buttons');

let audio;
let animationTimer;

function createSoundButtons() {
  config.sounds.forEach(sound => {
    const btn = document.createElement('button');
    btn.textContent = `Play ${sound.name}`;
    btn.addEventListener('click', () => playSound(sound));
    soundButtonsContainer.appendChild(btn);
  });
}

function playSound(sound) {
  stop(); // Stop any current sound/animation
  audio = new Audio(sound.audioPath);
  audio.playbackRate = 1;
  audio.play();

  let frameIndex = 1;
  animationTimer = setInterval(() => {
    const newSrc = `${sound.framesPath}${frameIndex}.png`;
    frameImg.src = newSrc;
    flashEffect(frameImg);
    frameIndex = (frameIndex % sound.frameCount) + 1;
  }, config.frameIntervalMs);
}

function stop() {
  if (audio) {
    audio.pause();
    audio.currentTime = 0;
  }
  clearInterval(animationTimer);
  frameImg.src = 'assets/frames/placeholder/1.png';
}

function flashEffect(img) {
  img.classList.remove('flash');
  void img.offsetWidth; // reflow
  img.classList.add('flash');
}

window.addEventListener('DOMContentLoaded', () => {
  createSoundButtons();
});
