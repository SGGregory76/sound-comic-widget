document.addEventListener('DOMContentLoaded', () => {
  const cfg   = window.CONFIG || fetch('./config.json').then(r=>r.json()),
        board = document.getElementById('soundboard'),
        grid  = document.getElementById('grid-container');
  let anim;

  Promise.resolve(cfg).then(config => {
    // (optional) show main image, if you want to swap dynamically
    if (config.mainImage) {
      const img = document.createElement('img');
      img.src   = config.mainImage;
      img.style = 'display:block;margin:0 auto 16px;max-width:100%';
      board.parentNode.insertBefore(img, board);
    }

    config.items.forEach(item => {
      // create audio
      const audio = new Audio(item.audio);
      audio.preload = 'auto';

      // create button
      const btn = document.createElement('button');
      btn.textContent = item.label;
      btn.onclick = () => {
        clearInterval(anim);
        grid.innerHTML = '';  // clear old panels

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
});
