/* ════════════════════════════════════════════════════════════
   RADIOSUB-1 // compat.js
   Cross-browser compatibility layer — MUST be loaded FIRST.
   Written in ES5 so it also runs on older engines that the
   main app code (ES6+) cannot reach.
   ════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  /* ── 1. Safe localStorage ─────────────────────────────────
     localStorage throws in private browsing (old Safari),
     when cookies are blocked, or on file:// in some setups. */
  var storage = null;
  try {
    var probe = '__radiosub_probe__';
    window.localStorage.setItem(probe, '1');
    window.localStorage.removeItem(probe);
    storage = window.localStorage;
  } catch (e) {
    // In-memory fallback: theme/lang persist for the session only
    var mem = {};
    storage = {
      getItem: function (k) { return Object.prototype.hasOwnProperty.call(mem, k) ? mem[k] : null; },
      setItem: function (k, v) { mem[k] = String(v); },
      removeItem: function (k) { delete mem[k]; }
    };
  }
  window.safeStorage = storage;

  /* ── 2. AbortSignal.timeout polyfill ──────────────────────
     Native since: Chrome 103 / Firefox 100 / Safari 15.4.
     Older engines get an AbortController + setTimeout shim. */
  if (typeof AbortSignal !== 'undefined' && typeof AbortSignal.timeout !== 'function') {
    AbortSignal.timeout = function (ms) {
      var ctrl = new AbortController();
      setTimeout(function () { ctrl.abort(); }, ms);
      return ctrl.signal;
    };
  }

  /* ── 3. fetchWithTimeout helper ───────────────────────────
     Uses native AbortSignal.timeout when available, otherwise
     an AbortController shim. Falls back to plain fetch when
     AbortController itself is missing (very old browsers). */
  window.fetchWithTimeout = function (url, options, ms) {
    options = options || {};
    var timeout = ms || 6000;
    if (typeof AbortSignal !== 'undefined' && typeof AbortSignal.timeout === 'function') {
      options.signal = AbortSignal.timeout(timeout);
      return fetch(url, options);
    }
    if (typeof AbortController === 'function') {
      var ctrl = new AbortController();
      var timer = setTimeout(function () { ctrl.abort(); }, timeout);
      options.signal = ctrl.signal;
      return fetch(url, options).then(
        function (r) { clearTimeout(timer); return r; },
        function (err) { clearTimeout(timer); throw err; }
      );
    }
    return fetch(url, options); // last resort: no timeout support
  };

  /* ── 4. Clipboard copy with legacy fallback ───────────────
     navigator.clipboard requires a secure context and is not
     available on http:// or older browsers — execCommand covers
     those cases. Returns a Promise that resolves true/false. */
  window.copyTextToClipboard = function (text) {
    return new Promise(function (resolve) {
      if (!text) { resolve(false); return; }
      if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
        navigator.clipboard.writeText(text).then(
          function () { resolve(true); },
          function () { resolve(legacyCopy(text)); }
        );
        return;
      }
      resolve(legacyCopy(text));
    });
  };

  function legacyCopy(text) {
    var ta = document.createElement('textarea');
    ta.value = text;
    ta.setAttribute('readonly', '');
    ta.style.position = 'fixed';
    ta.style.top = '-1000px';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    var ok = false;
    try {
      ta.select();
      ta.setSelectionRange(0, text.length); // iOS Safari
      ok = document.execCommand('copy');
    } catch (e) { ok = false; }
    document.body.removeChild(ta);
    return ok;
  }

  /* ── 5. NodeList.forEach polyfill (legacy Safari/Edge) ──── */
  if (typeof NodeList !== 'undefined' && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach;
  }

  /* ── 6. Object.entries polyfill (Chrome <54 / Safari <10) ─ */
  if (!Object.entries) {
    Object.entries = function (obj) {
      var out = [];
      for (var k in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, k)) out.push([k, obj[k]]);
      }
      return out;
    };
  }

  /* ── 7. getUserMedia prefix fallback ──────────────────────
     Covers older Chrome / Firefox builds that still expose the
     prefixed navigator.getUserMedia API. */
  if (navigator.mediaDevices && !navigator.mediaDevices.getUserMedia) {
    var legacy = navigator.getUserMedia || navigator.webkitGetUserMedia ||
                 navigator.mozGetUserMedia || navigator.msGetUserMedia;
    if (legacy) {
      navigator.mediaDevices.getUserMedia = function (constraints) {
        return new Promise(function (resolve, reject) {
          legacy.call(navigator, constraints, resolve, reject);
        });
      };
    }
  }

  /* ── 8. Element.closest polyfill (legacy browsers) ──────── */
  if (window.Element && !Element.prototype.closest) {
    Element.prototype.closest = function (s) {
      var el = this;
      while (el && el.nodeType === 1) {
        if (el.matches(s)) return el;
        el = el.parentElement || el.parentNode;
      }
      return null;
    };
  }
  if (window.Element && !Element.prototype.matches) {
    Element.prototype.matches =
      Element.prototype.msMatchesSelector ||
      Element.prototype.webkitMatchesSelector;
  }

  /* ── 9. Browser capability report (used by app.js) ──────── */
  window.RadioSubCompat = {
    speechRecognition: !!(window.SpeechRecognition || window.webkitSpeechRecognition),
    webAudio: !!(window.AudioContext || window.webkitAudioContext),
    mediaDevices: !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia),
    secure: window.isSecureContext !== false
  };
})();
