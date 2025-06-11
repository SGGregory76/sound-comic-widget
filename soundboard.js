document.addEventListener('DOMContentLoaded', () => {
  console.log("soundboard.js started, CONFIG=", window.CONFIG);
  const cfg   = window.CONFIG,
        board = document.getElementById('soundboard'),
        grid  = document.getElementById('grid-container');
  let anim;

  if (!cfg || !Array.isArray(cfg.items)) {
    board.textContent = "Error: CONFIG not found";
    return;
  }

  board.textContent = '';  

  cfg.items.forEach(item => {
    // swap main image
    if (item.mainImage) {
      let mi = document.getElementById('main-image');
      if (!mi) {
        mi = document.createElement('img');
        mi.id = 'main-image';
        mi.style = 'display:block;margin:0 auto 16px;max-width:100%';
        board.parentNode.insertBefore(mi, board);
      }
      mi.src = item.mainImage;
    }

    // prepare audio
    const audio = new Audio(item.audio);
    audio.preload = 'auto';

    // button
    const btn = document.createElement('button');
    btn.textContent = item.label;
    btn.onclick = () => {
      clearInterval(anim);
      grid.innerHTML = '';
      item.frames.forEach(src => {
        const img = document.createElement('img');
        img.src   = src;
        grid.appendChild(img);
      });
      audio.currentTime = 0;
      audio.play();
    };
    board.appendChild(btn);
  });
});
