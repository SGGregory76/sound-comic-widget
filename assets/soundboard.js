fetch('config.json')
  .then(res => res.json())
  .then(cfg => {
    const board = document.getElementById('soundboard');
    const grid  = document.getElementById('grid-container');
    let anim;

    cfg.items.forEach(item => {
      const audio = new Audio(item.audio);
      audio.preload = 'auto';

      const btn = document.createElement('button');
      btn.textContent = item.label;
      btn.onclick = () => {
        clearInterval(anim);
        grid.innerHTML = '';
        item.frames.forEach(src => {
          const img = document.createElement('img');
          img.src = src;
          grid.appendChild(img);
        });
        audio.currentTime = 0;
        audio.play();
      };

      board.appendChild(btn);
    });
  });
