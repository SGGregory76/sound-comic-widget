// config.js — loaded before soundboard.js
console.log("config.js loaded");
window.CONFIG = {
  items: [
    {
      name:      "images",
      label:     "Demo SFX",
      audio:     "assets/audio/ticking-clock-108342.mp3",
      mainImage: "assets/images/03311262-18a0-4e24-b4bb-ed73b2d472b9.png",
      frames: [
        "assets/frames/placeholder/1.png",
        "assets/frames/placeholder/2.png",
        "assets/frames/placeholder/3.png"
      ]
    },
    {
      name:      "boing",
      label:     "Boing SFX",
      audio:     "assets/audio/ticking-clock-108342.mp3",
      mainImage: "assets/images/boing-main.png",
      frames: [
        "assets/frames/placeholder/1.png",
        "assets/frames/boing/2.png",
        "assets/frames/boing/3.png"
      ]
    }
    // ← To add more:
    // 1. Duplicate one object here.
    // 2. Give it a unique name/label.
    // 3. Point audio→ your .mp3 in assets/audio.
    // 4. Point mainImage→ your header image in assets/images.
    // 5. List your frames PNGs in assets/frames/<name>/
  ]
};
