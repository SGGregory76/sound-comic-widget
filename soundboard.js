document.addEventListener('DOMContentLoaded', () => {
  let currentSceneIndex = 0;

  const board = document.getElementById('soundboard');
  const grid = document.getElementById('grid-container');
  const mainImage = document.getElementById('main-image');

  function loadScene(index) {
    const scene = window.CONFIG.scenes[index];
    if (!scene) return;

    // Update main image
    mainImage.src = scene.mainImage;

    // Load relevant sounds
    board.innerHTML = '';
    scene.sounds.forEach(sound => {
      const btn = document.createElement('button');
      btn.textContent = sound.label;
      btn.onclick = () => new Audio(sound.file).play();
      board.appendChild(btn);
    });

    // Load frames
    grid.innerHTML = '';
    scene.frames.forEach(src => {
      const img = document.createElement('img');
      img.src = src;
      img.style = 'width:100%';
      grid.appendChild(img);
    });
  }

  document.getElementById('next-scene').onclick = () => {
    currentSceneIndex = (currentSceneIndex + 1) % window.CONFIG.scenes.length;
    loadScene(currentSceneIndex);
  };

  loadScene(currentSceneIndex);
});
