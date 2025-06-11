# Sound + Comic Widget

A self-contained, JS-driven soundboard that plays SFX and displays comic panels.

## Files

- **index.html** – your demo page (includes main test image)
- **soundboard.css** – styling for buttons & panels
- **soundboard.js** – reads `config.json`, builds UI, plays audio, swaps frames
- **config.js** – list your sounds & frames here
- **assets/** – your media
  - **images/main-test.png** – main demo image
  - **audio/*.mp3** – sound files
  - **frames/<name>/*.png** – panel sequences

## How to add more sounds

1. **Drop** your MP3 into `assets/audio/` (e.g. `my-sfx.mp3`).
2. **Add** a folder under `assets/frames/` with your PNGs (e.g. `assets/frames/my-sfx/1.png`, etc).
3. **Open** `config.json`, duplicate the example object in `"items"`, and update:
   - `"name"` and `"label"`  
   - `"audio": "assets/audio/my-sfx.mp3"`  
   - `"frames": ["assets/frames/my-sfx/1.png", ...]`
   - Good Luck! Have Fun!

