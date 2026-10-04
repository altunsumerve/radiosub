const MORSE_TABLE = {
  '.-':'A','-...':'B','-.-.':'C','-..':'D','.':'E','..-.':'F',
  '--.':'G','....':'H','..':'I','.---':'J','-.-':'K','.-..':'L',
  '--':'M','-.':'N','---':'O','.--.':'P','--.-':'Q','.-.':'R',
  '...':'S','-':'T','..-':'U','...-':'V','.--':'W','-..-':'X',
  '-.--':'Y','--..':'Z','-----':'0','.----':'1','..---':'2',
  '...--':'3','....-':'4','.....':'5','-....':'6','--...':'7',
  '---..':'8','----.':'9','.-.-.-':'.','--..--':',','..--..':'?',
  '.----.': "'", '-.-.--':'!','-..-.':'/','-.--.':'(','-.--.-':')',
  '.-...':'&','---...':':','-.-.-.':';','-...-':'=','.-.-.':'+',
  '-....-':'-','..--.-':'_','.-..-.':'"','.--.-.':'@',
  '...---...':'SOS'
};

class MorseDecoder extends EventTarget {
  constructor() {
    super();
    this.audioCtx = null;
    this.analyser = null;
    this.source   = null;

    this.isOn      = false;
    this.lastChange = 0;
    this.dotUnit   = 90;   // ms, auto-calibrated
    this.markHistory = [];
    this.calibrated  = false;

    this.seq  = [];   // dots/dashes for current letter
    this.word = '';   // word in progress

    this._pollId = null;
    this._POLL   = 12;    // ms

    this._letterTimer = null;
    this._wordTimer   = null;

    this.currentLevel  = 0;
    this.currentSeqStr = '';
  }

  async start(stream) {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) {
      this.dispatchEvent(new CustomEvent('error', { detail: { error: 'Web Audio API not supported' } }));
      return;
    }
    this.audioCtx = new AudioCtx();
    // iOS Safari: context starts 'suspended' until resumed inside a user gesture
    if (this.audioCtx.state === 'suspended') {
      try { await this.audioCtx.resume(); } catch (_) {}
    }
    this.analyser  = this.audioCtx.createAnalyser();
    this.analyser.fftSize = 4096;
    this.analyser.smoothingTimeConstant = 0.4;

    const bp = this.audioCtx.createBiquadFilter();
    bp.type = 'bandpass';
    bp.frequency.value = 750;
    bp.Q.value = 1.5;

    this.source = this.audioCtx.createMediaStreamSource(stream);
    this.source.connect(bp);
    bp.connect(this.analyser);

    this.isOn = false;
    this.lastChange = performance.now();
    this.seq = []; this.word = '';
    this.markHistory = []; this.calibrated = false;

    this._pollId = setInterval(() => this._poll(), this._POLL);
  }

  stop() {
    if (this._pollId) { clearInterval(this._pollId); this._pollId = null; }
    clearTimeout(this._letterTimer);
    clearTimeout(this._wordTimer);
    if (this.source) { try { this.source.disconnect(); } catch (_) {} this.source = null; }
    if (this.analyser) { try { this.analyser.disconnect(); } catch (_) {} this.analyser = null; }
    if (this.audioCtx) { this.audioCtx.close().catch(() => {}); this.audioCtx = null; }
  }

  _peakDb() {
    if (!this.analyser) return -Infinity;
    const buf = new Float32Array(this.analyser.frequencyBinCount);
    this.analyser.getFloatFrequencyData(buf);
    const binW = this.audioCtx.sampleRate / (2 * buf.length);
    const lo = Math.floor(350 / binW);
    const hi = Math.min(Math.ceil(1300 / binW), buf.length - 1);
    let peak = -Infinity, overall = -Infinity;
    for (let i = 0; i < buf.length; i++) {
      if (buf[i] > overall) overall = buf[i];
      if (i >= lo && i <= hi && buf[i] > peak) peak = buf[i];
    }
    this.currentLevel = Math.max(0, Math.min(1, (overall + 80) / 60));
    return peak;
  }

  _poll() {
    if (!this.analyser || !this.audioCtx) return;
    const now = performance.now();
    const db  = this._peakDb();
    const thr = this.calibrated ? -46 : -40;
    const isOn = db > thr;

    if (isOn !== this.isOn) {
      const dur = now - this.lastChange;
      clearTimeout(this._letterTimer);
      clearTimeout(this._wordTimer);
      if (this.isOn) this._onMarkEnd(dur);
      else           this._onSpaceEnd(dur);
      this.isOn = isOn;
      this.lastChange = now;
    } else if (!isOn && this.seq.length > 0) {
      const sil = now - this.lastChange;
      if (sil > this.dotUnit * 3.5) {
        clearTimeout(this._letterTimer);
        this._letterTimer = setTimeout(() => this._commitLetter(), 0);
      }
      if (sil > this.dotUnit * 7) {
        clearTimeout(this._wordTimer);
        this._wordTimer = setTimeout(() => this._commitWord(), 0);
      }
    }
    this.dispatchEvent(new CustomEvent('level', { detail: this.currentLevel }));
  }

  _onMarkEnd(dur) {
    this.markHistory.push(dur);
    if (this.markHistory.length > 30) this.markHistory.shift();
    if (this.markHistory.length >= 5) this._calibrate();
    const el = dur > this.dotUnit * 2 ? '-' : '.';
    this.seq.push(el);
    this.currentSeqStr = this.seq.join('');
    this.dispatchEvent(new CustomEvent('element', { detail: { element: el, seq: this.currentSeqStr } }));
  }

  _onSpaceEnd(dur) {
    if (this.seq.length === 0) return;
    if      (dur >= this.dotUnit * 5)   { this._commitLetter(); this._commitWord(); }
    else if (dur >= this.dotUnit * 1.8) { this._commitLetter(); }
  }

  _calibrate() {
    const sorted = [...this.markHistory].sort((a, b) => a - b);
    const dotSlice = sorted.slice(0, Math.max(1, Math.floor(sorted.length * 0.4)));
    const avg = dotSlice.reduce((a, b) => a + b, 0) / dotSlice.length;
    this.dotUnit  = Math.max(18, Math.min(320, avg));
    this.calibrated = true;
    const wpm = Math.round(1200 / this.dotUnit);
    this.dispatchEvent(new CustomEvent('calibrated', { detail: { wpm } }));
  }

  _commitLetter() {
    if (this.seq.length === 0) return;
    const pattern = this.seq.join('');
    const char = MORSE_TABLE[pattern] || `[${pattern}]`;
    this.word += char;
    this.seq = []; this.currentSeqStr = '';
    this.dispatchEvent(new CustomEvent('letter', { detail: { char, pattern } }));
  }

  _commitWord() {
    if (!this.word.trim()) return;
    const word = this.word.trim();
    this.word = '';
    this.dispatchEvent(new CustomEvent('word', { detail: { word } }));
  }
}

