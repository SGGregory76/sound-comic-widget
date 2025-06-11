# Sound Comic Widget

A simple HTML/JS widget that plays an audio effect while cycling through comic-style frames.

## Setup

1. Clone the repo
2. Ensure directory structure matches:
assets/
audio/ticking-clock-108342.mp3
frames/
placeholder/.png
boing/.png

3. Run `npm install` (for local server)
4. Serve using a live-server or `npm start`

## Controls

- **Play**: starts the sound & frame animation
- **Stop**: halts playback & resets
- **Speed slider**: adjusts playback and animation speed

## Customize

- `config.js` controls:
- `framesPath`: path to animation frames
- `frameCount`: number of frames
- `frameIntervalMs`: base delay between frames (lower is faster)
- `audioPath`: audio file path

Feel free to adjust paths, frame counts, timing, CSS styling, etc.
