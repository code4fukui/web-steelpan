# web-steelpan

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)


A web-based steelpan emulator using AudioWorklet, supporting keyboard, buttons, and PlayStation Access Controller input via Gamepad API. [Demo](https://code4fukui.github.io/web-steelpan/)

## Demo
https://code4fukui.github.io/web-steelpan/

## Features
- Play steelpan samples using:
  - Number keys `1-8`
  - On-screen buttons
  - [PlayStation Access Controller](https://www.playstation.com/ja-jp/accessories/access-controller/) (mapped: △=C, ◯=D, □=E, X=F, L1=G, R1=A, L2=B, R2=C)
- Half-tone mode via gamepad Select button
- Audio output device selection
- Volume control slider
- Web Audio API with AudioWorklet for low-latency sample playback

## Requirements
- Modern browser with Gamepad API support (tested on Chrome/Edge)
- [PlayStation Access Controller](https://www.playstation.com/ja-jp/accessories/access-controller/) (optional)

## Usage
1. Click **START** to initialize audio context
2. Use:
   - Number keys `1-8` for notes
   - On-screen C-D-E-F-G-A-B-C buttons
   - Connected Access Controller buttons
3. Adjust volume with slider
4. Select audio output device from dropdown
5. Click **STOP** to release audio resources

## Data / API
- Steelpan samples: [CC0-licensed](https://github.com/code4fukui/sound-cc0) `steel1.wav` from [sound-cc0](https://github.com/code4fukui/sound-cc0)
- Gamepad input: [Gamepad API](https://developer.mozilla.org/en-US/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
- Audio processing: [AudioWorklet](https://developer.mozilla.org/en-US/docs/Web/API/AudioWorklet)

## License
License information [LICENSE](LICENSE)