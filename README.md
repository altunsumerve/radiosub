# 📻 RADIOSUB-1

**Browser-based radio subtitle & translation tool — free, no backend, no API keys.**

Point your phone microphone at any radio, scanner, or WebSDR speaker — get live subtitles with automatic language detection and translation. Supports voice transcription in 15+ languages and Morse code (CW) decoding.

🔗 **[Live Demo](https://altunsumerve.github.io/radiosub)**

> **UI design**: Modernized retro CRT terminal aesthetic — default light gray theme + dark (#0f0f0f) theme, Open Sans typography, GNOME-style language dropdown
> **Interface languages**: 11 — Türkçe, English, Deutsch, Español, 中文, Русский, Azərbaycanca, Қазақша, Kurdî, Zazakî, தமிழ்

---

## What This Tool Is — and Isn't

**What it does:**
- Captures audio from your radio's speaker via your phone/laptop microphone
- Uses your browser's built-in Web Speech API for voice-to-text
- Detects the spoken language and translates it using free public APIs
- Decodes Morse code (CW) signals using an in-browser FFT analyzer

**What it isn't:**
- ❌ Not a professional simultaneous interpretation system
- ❌ Not an SDR signal processing tool — it reads audio from a microphone, not RF directly
- ❌ Not reliable on encrypted, digital voice (DMR/D-STAR/P25), or heavily noisy signals
- ❌ Not a substitute for a human translator in critical situations

**Honest expectation:** This is a **hybrid orchestration tool** that cleverly combines existing free services. Its quality depends on the third-party speech recognition and translation services it relies on. Results vary with audio quality, accent, speaking speed, and signal strength.

---

## How to Use

**The simplest setup:**
1. Tune your radio or WebSDR to a station
2. Open RadioSub on your **phone** (or any device with a mic)
3. Hold the phone near the speaker — click **START RX**
4. Live subtitles appear in real-time

That's it. No installs, no accounts, no backend.

---

## Approach: Hybrid Architecture

RadioSub is **not** an end-to-end trained model. It is an orchestrator that wires together free services in the browser:

| Layer | Service | Why |
|-------|---------|-----|
| Speech → Text | Browser Web Speech API (Chrome/Edge) | Free, built-in, no key |
| Language detection | Google Translate unofficial endpoint | Reliable, no key, CORS-open |
| Translation | MyMemory (primary) + Lingva (fallback) | Free public APIs |
| Morse decoding | Custom FFT-based decoder | Runs locally in browser |

**Advantage:** No backend, no API keys, deploys for free on GitHub Pages.
**Trade-off:** Result quality is bounded by what these third-party services provide.

---

## Features

| | Feature | Detail |
|-|---------|--------|
| ⬡ | **Auto Mode** | Cycles through 7 languages (EN→RU→DE→IT→FR→ES→TR) in 5-second windows over 35 seconds, votes on best match |
| 🎙️ | **Voice Mode** | Manual language selection + Web Speech API (Chrome/Edge built-in, 15+ languages) |
| ·-· | **Morse Mode** | FFT-based CW decoder — auto-calibrates to operator speed, outputs Latin characters |
| 🌐 | **Translation** | MyMemory API (primary) + Lingva fallback — free, no API key needed |
| 🔍 | **Language Detection** | Google Translate unofficial endpoint — fast, reliable, no key required |
| 📱 | **Mobile First** | Works great on Android Chrome with microphone — point at any speaker |
| 🌗 | **Theme** | Default light gray mode + dark mode (#0f0f0f) — preference remembered |
| 🔤 | **Open Sans** | Readability-focused modern typography across the UI + Noto Sans SC / Noto Sans Tamil fallbacks for Chinese & Tamil |
| 🌍 | **11 UI Languages** | GNOME.org-style dropdown: TR, EN, DE, ES, ZH, RU, AZ, KK, KU (Kurmancî), ZAZA (Zazakî), TA — native names, persisted choice |
| ✨ | **Modern UI (v1.2)** | Rounded panels with soft shadows, glass header, gradient action button, smooth transitions, accessible focus states |
| ⚡ | **No Backend** | Pure HTML / CSS / JS — deploys to GitHub Pages for free |

---

## How Auto Mode Works

```
START RX
  │
  ├─ 0–5s    tries [EN] speech recognition
  ├─ 5–10s   tries [RU] speech recognition
  ├─ 10–15s  tries [DE] speech recognition
  ├─ 15–20s  tries [IT] speech recognition   ← Italian detected here
  ├─ 20–25s  tries [FR] speech recognition
  ├─ 25–30s  tries [ES] speech recognition
  └─ 30–35s  tries [TR] speech recognition

At any point: transcript → Google Translate detect API
  ├─ Language confirmed? → "LANGUAGE DETECTED: ITALIAN (92%)"
  │   → Restart Speech API in Italian → translate continuously
  └─ No detection within 35s → "LANGUAGE NOT DETECTED — TRY AGAIN"
```

---

## Modes

### ⬡ Auto Mode
- Best for: unknown radio stations, WebSDR
- Cycles through 7 languages in 5-second windows (35 seconds total)
- Auto-detects the spoken language → translates to your selected target language once confirmed

### 🎙️ Voice Mode
- Best for: when you already know the source language
- Select the source language manually → immediate transcription + translation

### ·-· Morse Mode
- Best for: CW (Continuous Wave) amateur radio signals
- Decodes dots and dashes into Latin alphabet characters
- No translation — shows raw decoded text
- Auto-calibrates to operator speed (5–50+ WPM)

---

## Quick Start

### WebSDR (from your phone)
1. Open [websdr.org](http://websdr.org) on your **PC** and tune to a station
2. Open RadioSub on your **phone**
3. Select target language → click **START RX** → hold phone near PC speaker
4. Subtitles appear in real-time

### Your Own Radio / Scanner
1. Tune the radio to the target frequency
2. Open RadioSub on your phone — click **START RX**
3. Hold phone near the radio speaker
4. Use **AUTO** mode to detect the language, or **VOICE** if you already know it

### Morse Code (CW)
1. Select **MORSE** mode
2. Tune to a CW signal (on WebSDR or your own receiver)
3. Click **START RX** — hold phone near speaker
4. Decoder auto-calibrates — decoded characters appear one by one

### Better Audio Quality
For cleaner input without background noise, connect via cable:
- 3.5mm audio cable from radio/receiver headphone jack → phone mic input
- Works for Voice, Auto, and Morse modes

---

## Limitations & Known Issues

Being upfront about where this tool struggles:

### Voice / Auto Mode
- **Noisy signals:** Heavy QRM, QRN, or low SNR severely degrades transcription
- **Multiple speakers:** Web Speech API is designed for single-speaker input
- **Fast or accented speech:** Recognition accuracy drops with rapid speech, strong regional accents, or non-native pronunciation
- **Short utterances:** Auto language detection can guess wrong on phrases under ~6 words
- **Similar languages:** Detection may confuse closely related languages (Spanish/Italian/Portuguese, Russian/Ukrainian)
- **Browser dependency:** Web Speech API quality varies between Chrome versions and is unavailable in Firefox

### Morse Mode
- **Signal fading (QSB):** Extended fades can break character detection
- **Sudden WPM changes:** Decoder needs ~5 marks to recalibrate after a speed change
- **Heavy interference:** Multiple overlapping CW signals confuse the FFT peak detection
- **Non-standard prosigns:** Custom or rare prosigns appear as `[pattern]` rather than meaning

### Translation
- **MyMemory daily limit:** 1000 words/day for anonymous users — falls back to Lingva when exceeded
- **Technical jargon:** Free APIs often miss radio terminology, callsigns, Q-codes
- **Idioms and slang:** Literal translation may produce awkward results
- **Lingva uptime:** Community-hosted instances occasionally go offline

### General
- **Background noise:** Room acoustics, fans, traffic noise all degrade results
- **Speaker volume:** Too loud → distortion; too quiet → missed words
- **Phone microphone quality:** Older phones or laptops with poor mics give worse results

---

## Browser Requirements

| Browser | Auto / Voice | Morse |
|---------|-------------|-------|
| **Chrome** | ✅ | ✅ |
| **Edge** | ✅ | ✅ |
| **Opera** | ✅ | ✅ |
| Safari (14.1+) | ✅ | ✅ |
| Firefox | ❌ | ✅ |
| Samsung Internet | ✅ | ✅ |

> Speech recognition (Auto + Voice modes) requires Chromium-based browsers or Safari 14.1+.
> Morse decoding works in all modern browsers.
>
> **v1.1 improvements:** in browsers without speech recognition (e.g. Firefox) the app
> detects this at startup, shows a clear notice and switches to Morse mode automatically —
> no more dead-end error messages.
>
> **v1.2 improvements:** modernized UI (rounded cards, soft shadows, glass header),
> 11 interface languages via a GNOME.org-style dropdown, and automatic font fallback
> for Chinese (Noto Sans SC) and Tamil (Noto Sans Tamil).

> ⚠️ **Do not open via `file://`** — browser won't remember microphone permission.
> Use `http://localhost` for local testing or deploy to GitHub Pages.

---

## Legal & Ethical Notice

⚠️ **Always comply with local regulations.** In some jurisdictions:
- Recording or rebroadcasting non-public radio communications is restricted
- Sharing transcripts of amateur radio QSOs without consent may violate ham radio etiquette
- Monitoring certain frequencies (e.g., police, military) is restricted or illegal

This tool is intended for **public broadcast monitoring, WebSDR exploration, ham radio educational use, and personal language learning**. The developer assumes no responsibility for misuse.

---

## Technical Details

### Auto Language Detection
- Web Speech API cycles through 7 languages (EN→RU→DE→IT→FR→ES→TR) in 5s windows, votes on best match, decides at 35s
- After each recognition result (3+ words), calls Google Translate's unofficial detection endpoint: `translate.googleapis.com/translate_a/single?client=gtx&sl=auto`
- No API key required — same endpoint used by Google Translate web UI
- On detection: switches Speech API to the confirmed language for better accuracy

### Morse (CW) Decoder
- 4096-point FFT scans 350–1300 Hz for tone presence
- Biquad bandpass filter centered at 750 Hz reduces interference
- Adaptive dot-unit estimation from mark-duration history (bottom 40th percentile)
- Letter/word boundaries from silence duration ratios (3× and 7× dot unit)
- Supported speed: 5–50+ WPM, self-calibrating

### Permission Design
- Voice/Auto: only **one** permission prompt (Web Speech API owns the mic)
- Morse: one `getUserMedia` call
- No duplicate permission dialogs

### Free APIs Used
| API | Purpose | Limit |
|-----|---------|-------|
| Web Speech API | Speech-to-text | Browser built-in, free |
| Google Translate (unofficial) | Language detection | No key, no documented limit |
| MyMemory | Translation (primary) | 1000 words/day anonymous |
| Lingva | Translation (fallback) | Community hosted |

> **Note on third-party APIs:** RadioSub depends on free public services that the developer does not control. If MyMemory, Lingva, or the Google Translate detection endpoint changes its terms or goes offline, parts of the app may stop working until a fix is pushed.

---

## Project Structure

```
radiosub/
├── index.html              Single-page app
├── css/
│   └── style.css           Modernized retro CRT UI + theme system + language dropdown
├── js/
│   ├── compat.js           ES5/legacy polyfills + safeStorage + capability report
│   ├── app.js              Main controller, auto-detect logic
│   ├── speech.js           Web Speech API wrapper + VU meter
│   ├── morse.js            CW decoder (FFT + adaptive timing)
│   ├── translator.js       Translation + language detection
│   └── i18n.js             11-language internationalization + GNOME-style dropdown + operator guide
├── README.md               English documentation
├── README_TR.md            Turkish documentation
├── LICENSE                 MIT
└── .gitignore
```

---

## Contributing

Issues and pull requests welcome. If you report a bug, please include:
- Browser + version
- Mode in use (Auto / Voice / Morse)
- Source language (if known)
- Sample audio characteristics (clean / noisy / WebSDR / direct cable)

---

## License

[MIT](LICENSE) — free to use, fork, and modify.

---

*Made for the ham radio and WebSDR community*
