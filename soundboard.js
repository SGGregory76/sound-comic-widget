import { config } from './config.js';

const mainImg = document.getElementById('main-img');
const buttonsContainer = document.querySelector('.sound-buttons');
const gridContainer = document.querySelector('.frame-grid');

let currentAudio = null;

config.sounds.forEach(item => {
  const audio = new Audio(item.audio);
  audio.preload = "auto";

  const btn = document.createElement('button');
  btn.textContent = item.label;

  btn.addEventListener('click', () => {
    if (currentAudio && currentAudio !== audio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }

    mainImg.src = item.mainImg || item.panels[0];
    gridContainer.innerHTML = '';

    item.panels.forEach(src => {
      const img = document.createElement('img');
      img.src = src;
      gridContainer.appendChild(img);
    });

    audio.currentTime = 0;
    audio.play();
    currentAudio = audio;
  });

  buttonsContainer.appendChild(btn);
});
