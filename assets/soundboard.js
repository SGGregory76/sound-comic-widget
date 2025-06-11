document.addEventListener('DOMContentLoaded', () => {
  const board = document.getElementById('soundboard');
  const grid  = document.getElementById('grid-container');
  let anim;

  // 1) Load the static JSON
  fetch('config.json')
    .then(r => r.ok ? r.json() : Promise.reject(`HTTP ${r.status}`))
    .then(cfg => {
      board.innerHTML = '';  // clear "Loading…"
      
      cfg.items.forEach(item => {
        // create hidden audio
        const audio = new Audio(item.audio);
        audio.preload = 'auto';

        // create button
        const btn = document.createElement('button');
        btn.textContent = item.label;
        board.appendChild(btn);

        // play & animate on click
        btn.addEventListener('click', () => {
          clearInterval(anim);
          grid.innerHTML = '';           // clear old panels
          item.panels.forEach(src => {
            const img = document.createElement('img');
            img.src = src;
            grid.appendChild(img);
          });
          audio.currentTime = 0;
          audio.play();
        });
      });
    })
    .catch(err => {
      board.textContent = `Error loading config.json: ${err}`;
      console.error(err);
    });
});
