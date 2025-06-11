document.addEventListener('DOMContentLoaded', () => {
  console.log("soundboard.js started, CONFIG =", window.CONFIG);

  const cfg = window.CONFIG;
  const board = document.getElementById('soundboard');
  const grid  = document.getElementById('grid-container');
  let anim;

  if (!cfg || !Array.isArray(cfg.items)) {
    board.textContent = "Error: CONFIG not found";
    console.error("Missing or invalid CONFIG", cfg);
    return;
  }

  board.textContent = '';  // clear “Loading…”

  cfg.items.forEach(item => {
    // swap main image if provided
    if (item.mainImage) {
      let mainImg = document.getElementById('main-image');
      if (!mainImg) {
        mainImg = document.createElement('img');
        mainImg.id = 'main-image';
        mainImg.style = 'display:block;margin:0 auto 16px;max-width:100%';
        board.parentNode.insertBefore(mainImg, board);
      }
      mainImg.src = item.mainImage;
    }

    // prepare audio
    const audio = new Audio(item.audio);
    audio.preload = 'auto';

    // button
    const btn = document.createElement('button');
    btn.textContent = item.label;
    btn.style.margin = '5px';
    btn.style.padding = '8px 12px';
    btn.style.cursor = 'pointer';

    btn.onclick = () => {
      clearInterval(anim);
      grid.innerHTML = '';
      item.frames.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.style.width = '100%';
        img.style.height = 'auto';
        grid.appendChild(img);
      });
      audio.currentTime = 0;
      audio.play().catch(e => console.error("play() failed:", e));
    };

    board.appendChild(btn);
  });
});
