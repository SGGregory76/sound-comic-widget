document.addEventListener('DOMContentLoaded', () => {
  fetch('config.json')
    .then(r => r.ok ? r.json() : Promise.reject(`HTTP ${r.status}`))
    .then(cfg => {
      const board = document.getElementById('soundboard');
      const grid  = document.getElementById('grid-container');
      let anim;

      // insert main image if defined
      if (cfg.mainImage) {
        const m = document.createElement('img');
        m.src = cfg.mainImage;
        m.style = 'display:block; margin:0 auto 16px; max-width:100%';
        board.parentNode.insertBefore(m, board);
      }

      // build each item
      cfg.items.forEach(item => {
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
            img.src = src;
            grid.appendChild(img);
          });
          audio.currentTime = 0;
          audio.play();
        };

        board.appendChild(btn);
      });
    })
    .catch(err => console.error('Error loading config.json:', err));
});
