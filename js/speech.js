class SpeechHandler extends EventTarget {
  constructor() {
    super();
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    this.supported = !!SR;
    if (!this.supported) return;

    this._SR = SR;
    this._rec = null;
    this._recId = 0;              // tags each recognition instance
    this._running = false;
    this._restartTimer = null;
    this._currentLang = '';

    // Lightweight VU analyser (speech/auto modes: Web Speech API
    // gives no audio levels, so we open our own small stream)
    this._vuCtx = null;
    this._vuAnalyser = null;
    this._vuStream = null;
    this._vuTimer = null;
  }

  _create(lang) {
    const rec = new this._SR();
    const id = ++this._recId;
    rec.__rsId = id;
    rec.continuous = true;
    rec.interimResults = true;
    rec.maxAlternatives = 1;
    rec.lang = lang || '';

    rec.onresult = (e) => {
      let interim = '', final = '';
      for (let i = e.resultIndex; i < e.results.length; i++) {
        const t = e.results[i][0].transcript;
        if (e.results[i].isFinal) final += t;
        else interim += t;
      }
      if (final.trim())
        this.dispatchEvent(new CustomEvent('final', { detail: { text: final.trim() } }));
      this.dispatchEvent(new CustomEvent('interim', { detail: { text: interim } }));
    };

    rec.onerror = (e) => {
      if (e.error === 'no-speech' || e.error === 'aborted') return;
      this.dispatchEvent(new CustomEvent('error', { detail: { error: e.error } }));
    };

    rec.onend = () => {
      // Only auto-restart if this instance is still the current one
      // (prevents stale restarts after changeLang)
      if (this._running && this._rec && this._rec.__rsId === id) {
        this._restartTimer = setTimeout(() => {
          if (this._running && this._rec && this._rec.__rsId === id) {
            try { this._rec.start(); } catch (_) {}
          }
        }, 250);
      }
    };
    return rec;
  }

  start(lang) {
    if (!this.supported) return;
    this._running = true;
    this._currentLang = lang || '';
    this._rec = this._create(lang);
    try { this._rec.start(); } catch (_) {}
    this._startVU();
  }

  changeLang(lang) {
    if (!this.supported || !this._running) return;
    clearTimeout(this._restartTimer);
    this._running = false;          // block onend from scheduling a restart
    if (this._rec) { try { this._rec.stop(); } catch (_) {} this._rec = null; }
    this._running = true;
    this._currentLang = lang;
    this._rec = this._create(lang);
    setTimeout(() => { try { this._rec.start(); } catch (_) {} }, 300);
  }

  stop() {
    this._running = false;
    clearTimeout(this._restartTimer);
    if (this._rec) { try { this._rec.stop(); } catch (_) {} this._rec = null; }
    this._stopVU();
  }

  /* ── VU meter: separate analyser stream (cosmetic, fails silently) ── */
  async _startVU() {
    if (this._vuTimer) return;
    try {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) return;
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      if (!this._running) {            // stopped while awaiting permission
        stream.getTracks().forEach(t => t.stop());
        return;
      }
      this._vuStream = stream;
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      this._vuCtx = new AC();
      if (this._vuCtx.state === 'suspended') {
        try { await this._vuCtx.resume(); } catch (_) {}
      }
      const src = this._vuCtx.createMediaStreamSource(stream);
      this._vuAnalyser = this._vuCtx.createAnalyser();
      this._vuAnalyser.fftSize = 512;
      this._vuAnalyser.smoothingTimeConstant = 0.5;
      src.connect(this._vuAnalyser);

      const buf = new Uint8Array(this._vuAnalyser.fftSize);
      this._vuTimer = setInterval(() => {
        if (!this._vuAnalyser) return;
        this._vuAnalyser.getByteTimeDomainData(buf);
        let sum = 0;
        for (let i = 0; i < buf.length; i++) {
          const v = (buf[i] - 128) / 128;
          sum += v * v;
        }
        const rms = Math.sqrt(sum / buf.length);
        const level = Math.min(1, rms * 3.2);
        this.dispatchEvent(new CustomEvent('level', { detail: level }));
      }, 80);
    } catch (_) { /* VU is cosmetic — ignore permission/unsupported errors */ }
  }

  _stopVU() {
    if (this._vuTimer) { clearInterval(this._vuTimer); this._vuTimer = null; }
    if (this._vuStream) {
      this._vuStream.getTracks().forEach(t => t.stop());
      this._vuStream = null;
    }
    if (this._vuCtx) { this._vuCtx.close().catch(() => {}); this._vuCtx = null; }
    this._vuAnalyser = null;
    this.dispatchEvent(new CustomEvent('level', { detail: 0 }));
  }
}
