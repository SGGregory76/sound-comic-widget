        🎙️ Sound Comic Widget

Bring comic-style sound effects to life with this interactive HTML widget. Users can click buttons to play audio and reveal matching comic panels — ideal for bloggers, authors, educators, and creators.

        📦 What's Inside

sound-comic-widget/
├── index.html → Standalone demo page
├── soundboard.css → Widget styles
├── soundboard.js → Core JS logic
├── config.js → Custom sound/image data
├── blogger-snippet.html → Ready-to-copy Blogger embed
├── LICENSE.txt → MIT License
└── assets/
├── audio/ → MP3 files
└── frames/ → Comic panel images

        ✅ How to Use

       🔹 Blogger Users
1. Open `blogger-snippet.html`
2. Copy the **entire HTML block**
3. Paste into a **Blogger HTML/JavaScript Gadget**
4. Save and preview!

       🔹 Developers / Web Users
1. Open `index.html` in a browser
2. Modify `config.js` to customize sounds & images
3. Host files via GitHub Pages, Netlify, or your own site

       🛠️ Configuration

Edit `config.js` to add or update sounds:
```js
{
  name: "pop",
  label: "Pop SFX",
  audio: "assets/audio/pop.mp3",
  mainImg: "assets/frames/pop/1.png",
  panels: [
    "assets/frames/pop/1.png",
    "assets/frames/pop/2.png",
    "assets/frames/pop/3.png"
  ]
}
