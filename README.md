# Sound + Comic Widget

Self-contained soundboard that plays SFX and displays comic panels with a swappable main image.

## Files

- `index.html` – demo page (for GitHub Pages or local viewing)
- `soundboard.css` – styling
- `config.js` – list your sounds, main images, and frame sequences
- `soundboard.js` – widget logic
- `assets/` – media assets
  - `images/` – header images
  - `audio/` – MP3 files
  - `frames/` – folders of PNG sequences

## Usage

1. **Customize**  
   - Drop your MP3s into `assets/audio/`.
   - Drop your header images into `assets/images/`.
   - Drop your frame PNGs into `assets/frames/<name>/`.
   - Edit `config.js` to add or update items.

2. **Host**  
   - Upload the entire folder to GitHub Pages (or any static host).
   - Link `index.html` in an `<iframe>`, or embed the CSS/JS snippet in Blogger as shown.

3. **Embed on Blogger**  
   ```html
   <link rel="stylesheet" href="https://…/soundboard.css">
   <div id="soundboard"></div>
   <div id="grid-container"></div>
   <script src="https://…/config.js"></script>
   <script src="https://…/soundboard.js"></script>
