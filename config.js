// config.js — drop this in your repo alongside soundboard.js, and serve via GitHub Pages
window.CONFIG = {
  items: [
    {
      name:      "placeholder",
      label:     "Demo SFX",
      audio:     "https://sggregory76.github.io/sound-comic-widget/assets/audio/ticking-clock-108342.mp3",
      mainImage: "https://sggregory76.github.io/sound-comic-widget/assets/images/placeholder-main.png",
      panels: [
        "https://sggregory76.github.io/sound-comic-widget/assets/frames/placeholder/1.png",
        "https://sggregory76.github.io/sound-comic-widget/assets/frames/placeholder/2.png",
        "https://sggregory76.github.io/sound-comic-widget/assets/frames/placeholder/3.png"
      ]
    },
    {
      name:      "boing",
      label:     "Boing SFX",
      audio:     "https://sggregory76.github.io/sound-comic-widget/assets/audio/boing.mp3",
      mainImage: "https://sggregory76.github.io/sound-comic-widget/assets/images/boing-main.png",
      panels: [
        "https://sggregory76.github.io/sound-comic-widget/assets/frames/boing/1.png",
        "https://sggregory76.github.io/sound-comic-widget/assets/frames/boing/2.png",
        "https://sggregory76.github.io/sound-comic-widget/assets/frames/boing/3.png"
      ]
    }
    // ← To add more, duplicate one of these objects,
    //     give it a unique name/label, point audio→ your MP3,
    //     mainImage→ your header image, panels→ your frame URLs.
  ]
};
