const SPEECH_LANG_MAP = {
  en:'en-US', de:'de-DE', ru:'ru-RU', es:'es-ES', fr:'fr-FR',
  it:'it-IT', pt:'pt-PT', nl:'nl-NL', ja:'ja-JP', zh:'zh-CN',
  ar:'ar-SA', tr:'tr-TR', pl:'pl-PL', sv:'sv-SE', uk:'uk-UA'
};
const LANG_NAMES = {
  en:'English', de:'German', ru:'Russian', es:'Spanish', fr:'French',
  it:'Italian', pt:'Portuguese', nl:'Dutch', ja:'Japanese', zh:'Chinese',
  ar:'Arabic', tr:'Turkish', pl:'Polish', sv:'Swedish', uk:'Ukrainian'
};

class RadioSubApp {
  constructor() {
    this.mode      = 'auto';   // 'auto' | 'speech' | 'morse'
    this.isRunning = false;
    this.stream      = null;

    this.translator = new Translator();
    this.speech     = new SpeechHandler();
    this.morse      = new MorseDecoder();

    this.transcript  = '';
    this.translation = '';
    this.morseBuffer = '';

    this._translateTimer  = null;
    this._detectedLang    = null;
    this._langLocked      = false;
    this._langVotes       = {};     // { 'it': { count, score } }
    this._autoHardStop    = null;
    this._autoCountdownId = null;
    this._autoCheckTimer  = null;
    this._cycleTimer      = null;

    this._initTheme();
    this._initUI();
  }

  /* ════════════════════════════════════════
     THEME — light (default) / dark (#0f0f0f)
  ════════════════════════════════════════ */
  _initTheme() {
    const btn   = document.getElementById('themeToggle');
    const icon  = document.getElementById('themeIcon');
    const label = document.getElementById('themeText');
    const meta  = document.getElementById('metaThemeColor');

    const apply = (theme) => {
      document.documentElement.setAttribute('data-theme', theme);
      try { window.safeStorage.setItem('radiosub-theme', theme); } catch (e) {}
      if (meta) meta.setAttribute('content', theme === 'dark' ? '#0f0f0f' : '#e4e5e6');
      if (icon)  icon.textContent  = theme === 'dark' ? '🌙' : '☀';
      if (label) label.textContent = t(theme === 'dark' ? 'theme-label-dark' : 'theme-label-light');
    };

    // Sync with the head bootstrap (default = light)
    const current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    apply(current);

    if (btn) {
      btn.addEventListener('click', () => {
        const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        apply(next);
      });
    }
  }

  /* ════════════════════════════════════════
     UI WIRING
  ════════════════════════════════════════ */
  _initUI() {
    // ── Browser support UX: if speech recognition is missing
    //    (e.g. Firefox), steer the user to Morse mode up front.
    if (!this.speech.supported) {
      this.mode = 'morse';
      document.querySelectorAll('.toggle-btn[data-mode]').forEach(b => {
        if (b.dataset.mode !== 'morse') b.classList.add('unsupported');
      });
      document.querySelectorAll('.toggle-btn[data-mode="morse"]').forEach(b =>
        b.classList.add('active')
      );
      const notice = document.getElementById('browserNotice');
      const noticeText = document.getElementById('browserNoticeText');
      if (notice && noticeText) {
        noticeText.textContent = t('browser-notice');
        notice.hidden = false;
      }
    } else if (!window.RadioSubCompat || !window.RadioSubCompat.secure) {
      const notice = document.getElementById('browserNotice');
      const noticeText = document.getElementById('browserNoticeText');
      if (notice && noticeText) {
        noticeText.textContent = t('msg-insecure');
        notice.hidden = false;
      }
    }

    // ── Mode buttons (class=toggle-btn, data-mode=...) ──
    document.querySelectorAll('.toggle-btn[data-mode]').forEach(btn => {
      btn.addEventListener('click', () => {
        if (btn.classList.contains('unsupported')) return;
        if (this.isRunning) return; // don't change mode while running
        document.querySelectorAll('.toggle-btn[data-mode]').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.mode = btn.dataset.mode;
        this._syncModeUI();
      });
    });

    // ── Start / Stop ──
    document.getElementById('mainBtn').addEventListener('click', () => {
      this.isRunning ? this.stop() : this.start();
    });

    // ── Copy buttons (with legacy clipboard fallback) ──
    document.getElementById('copyTranscript').addEventListener('click', () => {
      window.copyTextToClipboard(this.transcript).then(ok =>
        this._flash('copyTranscript', ok ? t('copy-ok') : t('copy-fail'))
      );
    });
    document.getElementById('copyTranslation').addEventListener('click', () => {
      window.copyTextToClipboard(this.translation).then(ok =>
        this._flash('copyTranslation', ok ? t('copy-ok') : t('copy-fail'))
      );
    });

    // ── Clear history ──
    document.getElementById('clearHistory').addEventListener('click', () => {
      document.getElementById('historyBox').innerHTML =
        `<span class="ph">${t('history-empty')}</span>`;
    });

    // ── Guide tabs — only match inner panes (those with data-tab) ──
    document.querySelectorAll('.guide-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('.guide-tab').forEach(x => x.classList.remove('active'));
        tab.classList.add('active');
        document.querySelectorAll('.guide-tab-content[data-tab]').forEach(pane => {
          pane.style.display = pane.dataset.tab === tab.dataset.tab ? 'block' : 'none';
        });
      });
    });

    // ── Speech API events ──
    this.speech.addEventListener('final',   e => this._onSpeechFinal(e.detail.text));
    this.speech.addEventListener('interim', e => this._onSpeechInterim(e.detail.text));
    this.speech.addEventListener('level',   e => this._updateVU(e.detail));
    this.speech.addEventListener('error',   e => {
      if (e.detail.error === 'network') return; // transient, ignore
      if (e.detail.error === 'not-allowed') {
        this.stop();
        this._setStatus('ERR', t('msg-mic-denied'));
        return;
      }
      this._setStatus('ERR', t('msg-speech-err', e.detail.error.toUpperCase()));
    });

    // ── Morse decoder events ──
    this.morse.addEventListener('level',      e => this._updateVU(e.detail));
    this.morse.addEventListener('letter',     e => this._onMorseLetter(e.detail));
    this.morse.addEventListener('word',       e => this._onMorseWord(e.detail));
    this.morse.addEventListener('calibrated', e => this._onCalibrated(e.detail));
    this.morse.addEventListener('error',      e => {
      this._setStatus('ERR', t('msg-speech-err', e.detail.error.toUpperCase()));
    });
    this.morse.addEventListener('element',    e => {
      document.getElementById('morseRaw').textContent = e.detail.seq || '';
    });

    this._syncModeUI();
    this._setStatus('RDY', t('msg-ready'));
    this._updateVU(0);
    this._startClock();
  }

  _syncModeUI() {
    const isMorse  = this.mode === 'morse';
    const isAuto   = this.mode === 'auto';

    // Source-lang selector: dimmed when not needed
    document.getElementById('sourceLangGroup').style.opacity =
      (isMorse || isAuto) ? '0.35' : '1';

    // Morse WPM / raw CW display
    document.getElementById('morseInfo').style.display = isMorse ? 'flex' : 'none';

    // Auto-mode countdown bar
    document.getElementById('autoInfoBar').style.display = isAuto ? 'flex' : 'none';

    // Translation panel: hidden in Morse mode (no translation for CW)
    const transPanel = document.querySelector('.translation-screen');
    if (transPanel) transPanel.style.display = isMorse ? 'none' : '';
  }

  /* ════════════════════════════════════════
     START / STOP
  ════════════════════════════════════════ */
  async start() {
    if ((this.mode === 'speech' || this.mode === 'auto') && !this.speech.supported) {
      this._setStatus('ERR', t('msg-not-supported'));
      return;
    }

    // getUserMedia only needed for Morse (Web Audio API FFT).
    // Speech/Auto: Web Speech API manages its own mic internally.
    const needsStream = this.mode === 'morse';
    if (needsStream) {
      if (!window.RadioSubCompat || !window.RadioSubCompat.mediaDevices) {
        this._setStatus('ERR', t('msg-audio-err', 'NOT SUPPORTED'));
        return;
      }
      try {
        this.stream = await this._getStream();
      } catch (err) {
        this._setStatus('ERR',
          err.name === 'NotAllowedError'
            ? t('msg-mic-denied')
            : t('msg-audio-err', err.message.toUpperCase())
        );
        return;
      }
    }

    // Reset state
    this.isRunning   = true;
    this._detectedLang = null;
    this._langLocked   = false;
    this.transcript   = '';
    this.translation  = '';
    this.morseBuffer  = '';

    document.getElementById('subtitleBox').innerHTML    = '';
    document.getElementById('translationBox').innerHTML = '';
    document.getElementById('morseRaw').textContent     = '';
    document.getElementById('wpmDisplay').textContent   = '-- WPM';
    document.getElementById('detectedLangDisplay').textContent = '---';

    const btn = document.getElementById('mainBtn');
    btn.querySelector('.btn-text').textContent = t('btn-stop');
    btn.classList.add('active');

    if      (this.mode === 'auto')   this._startAutoMode();
    else if (this.mode === 'speech') this._startSpeechMode();
    else                             this._startMorseMode();
  }

  stop(statusMsg) {
    this.isRunning = false;

    // Kill all timers
    clearTimeout(this._autoHardStop);
    clearInterval(this._autoCountdownId);
    clearTimeout(this._autoCheckTimer);
    clearTimeout(this._cycleTimer);
    clearTimeout(this._translateTimer);

    this.speech.stop();
    this.morse.stop();

    if (this.stream) {
      this.stream.getTracks().forEach(track => track.stop());
      this.stream = null;
    }

    const btn = document.getElementById('mainBtn');
    btn.querySelector('.btn-text').textContent = t('btn-start');
    btn.classList.remove('active');
    this._updateVU(0);

    if (!statusMsg) {
      this._setStatus('RDY', t('msg-standby'));
    }

    if (this.transcript.trim()) this._addToHistory();
  }

  /* ════════════════════════════════════════
     AUTO MODE — language detection
     Cycles through 7 languages in 5s windows
     (35s total), votes on Google-detected
     language after each final transcript.
  ════════════════════════════════════════ */
  _startAutoMode() {
    const LANGS = [
      { code: 'en-US', label: 'EN' },
      { code: 'ru-RU', label: 'RU' },
      { code: 'de-DE', label: 'DE' },
      { code: 'it-IT', label: 'IT' },
      { code: 'fr-FR', label: 'FR' },
      { code: 'es-ES', label: 'ES' },
      { code: 'tr-TR', label: 'TR' },
    ];
    let remaining = 35;
    let cycleIdx  = 0;
    this._langVotes = {};

    document.getElementById('autoCountdown').textContent = remaining;
    this._autoCountdownId = setInterval(() => {
      remaining--;
      document.getElementById('autoCountdown').textContent = Math.max(0, remaining);
      // Show current leader live
      const leader = this._getVoteWinner();
      if (leader) {
        const name = LANG_NAMES[leader] || leader.toUpperCase();
        document.getElementById('detectedLangDisplay').textContent = `${name.toUpperCase()} ?`;
      }
    }, 1000);

    // Hard stop: tally votes and decide
    this._autoHardStop = setTimeout(() => {
      if (!this.isRunning) return;
      clearInterval(this._autoCountdownId);
      clearTimeout(this._cycleTimer);
      document.getElementById('autoCountdown').textContent = '0';

      const winner = this._getVoteWinner();
      if (winner) {
        const avg = this._langVotes[winner].score / this._langVotes[winner].count;
        this._onLanguageDetected({ lang: winner, confidence: avg });
      } else {
        document.getElementById('detectedLangDisplay').textContent = t('not-detected-disp');
        this._setStatus('ERR', t('msg-not-detected'));
        this.stop('handled');
      }
    }, 35000);

    // Start with first language
    this.speech.start(LANGS[0].code);
    this._setStatus('SCN', t('msg-scanning', LANGS[0].label));

    // Every 5s switch to next language candidate
    const cycleNext = () => {
      if (!this.isRunning || this._langLocked) return;
      cycleIdx++;
      if (cycleIdx >= LANGS.length) return; // hard stop will fire
      const lang = LANGS[cycleIdx];
      this._setStatus('SCN', t('msg-scanning', lang.label));
      this.speech.changeLang(lang.code);
      this._cycleTimer = setTimeout(cycleNext, 5000);
    };
    this._cycleTimer = setTimeout(cycleNext, 5000);

    // Check transcript for language every 2s
    this._scheduleAutoLangCheck();
  }

  _scheduleAutoLangCheck() {
    this._autoCheckTimer = setTimeout(async () => {
      if (!this.isRunning || this._langLocked) return;

      const words = this.transcript.trim().split(/\s+/).filter(Boolean);
      if (words.length >= 3) {
        const result = await this.translator.detectLanguage(this.transcript.trim());
        if (this.isRunning && !this._langLocked && result && result.confidence >= 0.5) {
          // Cast a vote — no early lock
          if (!this._langVotes[result.lang])
            this._langVotes[result.lang] = { count: 0, score: 0 };
          this._langVotes[result.lang].count++;
          this._langVotes[result.lang].score += result.confidence;
        }
      }

      if (this.isRunning && !this._langLocked) this._scheduleAutoLangCheck();
    }, 2000);
  }

  _getVoteWinner() {
    const entries = Object.entries(this._langVotes);
    if (!entries.length) return null;
    return entries.sort((a, b) => b[1].score - a[1].score)[0][0];
  }

  _onLanguageDetected(result) {
    this._langLocked   = true;
    this._detectedLang = result.lang;
    clearTimeout(this._autoCheckTimer);

    const name = LANG_NAMES[result.lang] || result.lang.toUpperCase();
    const voteEntry = this._langVotes[result.lang];
    const votes = (voteEntry && voteEntry.count) || 1;

    document.getElementById('autoCountdown').textContent = '✓';
    document.getElementById('detectedLangDisplay').textContent =
      `${name.toUpperCase()} (${votes}×)`;
    this._setStatus('RX', t('msg-detected', name.toUpperCase()));

    // Clear scan debris — start fresh in the confirmed language
    this.transcript  = '';
    this.translation = '';
    document.getElementById('subtitleBox').innerHTML  = '';
    document.getElementById('translationBox').innerHTML = '';

    const speechCode = SPEECH_LANG_MAP[result.lang] || result.lang;
    this.speech.changeLang(speechCode);
  }

  /* ════════════════════════════════════════
     SPEECH MODE (manual language)
  ════════════════════════════════════════ */
  _startSpeechMode() {
    const lang = document.getElementById('sourceLang').value;
    this.speech.start(lang);
    this._setStatus('RX', t('msg-receiving'));
  }

  _onSpeechFinal(text) {
    this.transcript += (this.transcript ? ' ' : '') + text;
    this._renderSubtitle(this.transcript, false);

    if (this.mode === 'speech') {
      // Manual mode: always translate
      const src = document.getElementById('sourceLang').value;
      this._doTranslate(text, this._short(src));
    } else if (this.mode === 'auto' && this._langLocked) {
      // Auto mode: only translate after language is confirmed
      this._doTranslate(text, this._detectedLang);
    }
  }

  _onSpeechInterim(text) {
    if (!text) return;
    const display = this.transcript + (this.transcript ? ' ' : '') + text;
    this._renderSubtitle(display, true);
  }

  /* ════════════════════════════════════════
     MORSE MODE — decode only, no translation
  ════════════════════════════════════════ */
  async _startMorseMode() {
    await this.morse.start(this.stream);
    this._setStatus('RX', t('msg-cw-active'));
  }

  _onMorseLetter(detail) {
    this.morseBuffer += detail.char;
    this.transcript   = this.morseBuffer;
    this._renderSubtitle(this.morseBuffer, false);
    // No translation in Morse mode
  }

  _onMorseWord(detail) {
    this.morseBuffer += ' ';
    this.transcript   = this.morseBuffer;
    this._renderSubtitle(this.morseBuffer, false);
  }

  _onCalibrated(detail) {
    document.getElementById('wpmDisplay').textContent = `${detail.wpm} WPM`;
    this._setStatus('RX', t('msg-cw-locked', detail.wpm));
  }

  /* ════════════════════════════════════════
     TRANSLATION (speech & auto modes only)
  ════════════════════════════════════════ */
  _doTranslate(text, fromLang) {
    clearTimeout(this._translateTimer);
    this._translateTimer = setTimeout(async () => {
      const to   = document.getElementById('targetLang').value;
      const from = this._short(String(fromLang || 'en'));
      if (from === to) return;
      try {
        const result = await this.translator.translate(text, from, to);
        if (!result || result === text) return;
        this.translation += (this.translation ? ' ' : '') + result;
        this._renderTranslation(this.translation);
        document.getElementById('apiIndicator').textContent =
          `[${this.translator.currentApiName}]`;
      } catch (e) { console.warn('[translate]', e); }
    }, 700);
  }

  /* ════════════════════════════════════════
     AUDIO SOURCE
  ════════════════════════════════════════ */
  async _getStream() {
    return navigator.mediaDevices.getUserMedia({ audio: true, video: false });
  }

  /* ════════════════════════════════════════
     RENDER
  ════════════════════════════════════════ */
  _renderSubtitle(text, isInterim) {
    const box = document.getElementById('subtitleBox');
    box.innerHTML =
      `<span class="${isInterim ? 'interim' : ''}">${this._esc(text)}</span>` +
      (isInterim ? '' : '<span class="cursor">█</span>');
    box.scrollTop = box.scrollHeight;
  }

  _renderTranslation(text) {
    const box = document.getElementById('translationBox');
    box.innerHTML = `<span>${this._esc(text)}</span><span class="cursor">█</span>`;
    box.scrollTop = box.scrollHeight;
  }

  _addToHistory() {
    const box = document.getElementById('historyBox');
    const ph  = box.querySelector('.ph');
    if (ph) ph.remove();

    const item = document.createElement('div');
    item.className = 'history-item';
    const now   = new Date().toLocaleTimeString('en-GB', { hour12: false });
    const modeTag = this.mode.toUpperCase();
    const langTag = this._detectedLang
      ? ` [${(LANG_NAMES[this._detectedLang] || this._detectedLang).toUpperCase()}]`
      : '';

    item.innerHTML =
      `<div class="hi-time">[${now}] [${modeTag}]${langTag}</div>` +
      `<div class="hi-orig">&gt; ${this._esc(this.transcript)}</div>` +
      (this.translation
        ? `<div class="hi-trans">  ${this._esc(this.translation)}</div>`
        : '');
    box.prepend(item);
  }

  /* ════════════════════════════════════════
     STATUS & VU METER
  ════════════════════════════════════════ */
  _setStatus(code, msg) {
    document.getElementById('statusCode').textContent = `[${code}]`;
    document.getElementById('statusMsg').textContent  = msg;
  }

  _updateVU(level) {
    const segs   = document.querySelectorAll('.vu-seg');
    const active = Math.round(level * segs.length);
    segs.forEach((s, i) => {
      const on   = i < active;
      const warn = on && i >= 11;
      const peak = on && i >= 14;
      s.classList.toggle('on',   on && !warn);
      s.classList.toggle('warn', warn && !peak);
      s.classList.toggle('peak', peak);
    });
  }

  _startClock() {
    const el = document.getElementById('clockDisplay');
    if (!el) return;
    const tick = () => {
      el.textContent = new Date().toLocaleTimeString('en-GB', { hour12: false });
    };
    tick();
    setInterval(tick, 1000);
  }

  /* ════════════════════════════════════════
     HELPERS
  ════════════════════════════════════════ */
  _short(lang) { return String(lang).split('-')[0].toLowerCase(); }

  _esc(t) {
    return String(t)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;')
      .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  _flash(id, txt) {
    const el   = document.getElementById(id);
    const orig = el.textContent;
    el.textContent = txt;
    setTimeout(() => { el.textContent = orig; }, 1200);
  }
}

document.addEventListener('DOMContentLoaded', () => { window.app = new RadioSubApp(); });
