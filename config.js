// must run first, so soundboard.js can see window.CONFIG
console.log("config.js loaded");
window.CONFIG = {
  items: [
    {
      name:      "placeholder",
      label:     "Demo SFX",
      audio:     "https://sggregory76.github.io/sound-comic-widget/assets/audio/ticking-clock-108342.mp3",
      mainImage: "https://sggregory76.github.io/sound-comic-widget/assets/images/placeholder-main.png",
      frames: [
        "https://sggregory76.github.io/sound-comic-widget/assets/frames/placeholder/1.png",
        "https://sggregory76.github.io/sound-comic-widget/assets/frames/placeholder/2.png",
        "https://sggregory76.github.io/sound-comic-widget/assets/frames/placeholder/3.png"
      ]
    },
    // …add more here…
  ]
};
