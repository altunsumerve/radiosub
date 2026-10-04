/* ════════════════════════════════════════════════════════════
   RADIOSUB-1 v1.2 — i18n
   11 arayüz dili: TR, EN, DE, ES, ZH, RU, AZ, KK, KU (Kurmancî),
   ZAZA (Zazakî), TA (Tamilçe)
   Dil seçici: GNOME.org tarzı açılır menü (header dropdown)
   ════════════════════════════════════════════════════════════ */

const STRINGS = {
  tr: {
    'ctrl-unit':         '// KONTROL ÜNİTESİ',
    'mode-select':       '// MOD SEÇ',
    'source-lang-label': '// KAYNAK DİL (SES)',
    'target-lang-label': '// HEDEF DİL',
    'scan-window':       'TARAMA',
    'sec':               'SN',
    'detected-label':    'ALGILANDI:',
    'vu-label':          'SİN',
    'rx-title':          '// ALIM TRANSKRİPTİ',
    'trans-title':       '// ÇEVİRİ',
    'history-title':     '// OTURUM KAYDI',
    'manual-title':      '// OPERATÖR KILAVUZU',
    'tab-auto':          'OTO MOD',
    'tab-websdr':        'WEBSDR',
    'tab-radio':         'AMATÖR RADYO',
    'tab-morse':         'MORS CW',
    'btn-mode-auto':     '⬡ OTO',
    'btn-mode-speech':   '▶ SES',
    'btn-mode-morse':    '·-· MORS',
    'footer-2-short':    'SUNUCU YOK // %100 ÜCRETSİZ',
    'btn-start':         'BAŞLAT',
    'btn-stop':          'DURDUR',
    'copy':              '[ KOPYALA ]',
    'clr':               '[ TEMİZLE ]',
    'copy-ok':           '[ OK ]',
    'copy-fail':         '[ HATA ]',
    'awaiting':          '// SİNYAL BEKLENİYOR_',
    'trans-empty':       '// ÇEVİRİ TAMPONU BOŞ_',
    'history-empty':     '// OTURUM KAYDI BOŞ',
    'footer-1':          'RADIOSUB-1 // AÇIK KAYNAK RADYO ALTYAZI ARACI // MIT LİSANSI',
    'footer-2':          'GITHUB.COM/ALTUNSUMERVE/RADIOSUB // SUNUCU YOK // %100 ÜCRETSİZ',
    // app.js dynamic
    'msg-ready':         'RADIOSUB v1.2 — HAZIR',
    'msg-standby':       'BEKLEMEDE',
    'msg-not-supported': 'WEB SPEECH API DESTEKLENMİYOR — CHROME VEYA EDGE KULLANIN',
    'msg-mic-denied':    'MİKROFON ERİŞİMİ REDDEDİLDİ — İZİN VERİP TEKRAR DENEYİN',
    'msg-audio-err':     e => `SES HATASI: ${e}`,
    'msg-speech-err':    e => `SES API HATASI: ${e}`,
    'msg-scanning':      l => `TARANYOR [${l}] — NET KONUŞUN...`,
    'msg-detected':      n => `DİL ALGILANDI: ${n} — ÇEVİRİLİYOR`,
    'msg-not-detected':  'DİL ALGILANAMADI — LÜTFEN TEKRAR DENEYİN',
    'msg-receiving':     'SES İLETİMİ ALINIYOR...',
    'msg-cw-active':     'CW ÇÖZÜCÜ AKTİF — WPM KALİBRE EDİLİYOR...',
    'msg-cw-locked':     w => `CW SİNYALİ KİLİTLENDİ — ${w} WPM`,
    'not-detected-disp': 'ALGILANAMADI',
    // theme
    'theme-label-light': 'AÇIK',
    'theme-label-dark':  'KOYU',
    'theme-aria':        'Açık / karanlık tema arasında geçiş yap',
    // language dropdown
    'lang-dd-aria':      'Dil seçin',
    // browser support notice
    'browser-notice':    '⚠ BU TARAYICI SES TANIMAYI DESTEKLEMİYOR — MORS (CW) MODU TARAYICIDAN BAĞIMSIZ ÇALIŞIR. SES/OTO MOD İÇİN CHROME VEYA EDGE KULLANIN.',
    'msg-insecure':      'MİKROFON İZNİ YALNIZCA HTTPS VEYA LOCALHOST ÜZERİNDE ÇALIŞIR',
  },
  en: {
    'ctrl-unit':         '// CONTROL UNIT',
    'mode-select':       '// MODE SELECT',
    'source-lang-label': '// SOURCE LANG (VOICE)',
    'target-lang-label': '// TARGET LANG',
    'scan-window':       'SCAN WINDOW',
    'sec':               'SEC',
    'detected-label':    'DETECTED:',
    'vu-label':          'SIG',
    'rx-title':          '// RX TRANSCRIPT',
    'trans-title':       '// TRANSLATION',
    'history-title':     '// SESSION LOG',
    'manual-title':      '// OPERATOR MANUAL',
    'tab-auto':          'AUTO MODE',
    'tab-websdr':        'WEBSDR',
    'tab-radio':         'HAM RADIO',
    'tab-morse':         'MORSE CW',
    'btn-mode-auto':     '⬡ AUTO',
    'btn-mode-speech':   '▶ VOICE',
    'btn-mode-morse':    '·-· MORSE',
    'footer-2-short':    'NO BACKEND // 100% FREE',
    'btn-start':         'START RX',
    'btn-stop':          'STOP',
    'copy':              '[ COPY ]',
    'clr':               '[ CLR ]',
    'copy-ok':           '[ OK ]',
    'copy-fail':         '[ FAIL ]',
    'awaiting':          '// AWAITING SIGNAL_',
    'trans-empty':       '// TRANSLATION BUFFER EMPTY_',
    'history-empty':     '// SESSION LOG EMPTY',
    'footer-1':          'RADIOSUB-1 // OPEN SOURCE RADIO SUBTITLE TOOL // MIT LICENSE',
    'footer-2':          'GITHUB.COM/ALTUNSUMERVE/RADIOSUB // NO BACKEND // 100% FREE',
    // app.js dynamic
    'msg-ready':         'RADIOSUB v1.2 — READY',
    'msg-standby':       'STANDING BY',
    'msg-not-supported': 'WEB SPEECH API NOT SUPPORTED — USE CHROME OR EDGE',
    'msg-mic-denied':    'MICROPHONE ACCESS DENIED — PLEASE ALLOW AND RETRY',
    'msg-audio-err':     e => `AUDIO ERROR: ${e}`,
    'msg-speech-err':    e => `SPEECH ERR: ${e}`,
    'msg-scanning':      l => `SCANNING [${l}] — SPEAK CLEARLY...`,
    'msg-detected':      n => `LANGUAGE DETECTED: ${n} — TRANSLATING`,
    'msg-not-detected':  'LANGUAGE NOT DETECTED — PLEASE TRY AGAIN',
    'msg-receiving':     'RECEIVING VOICE TRANSMISSION...',
    'msg-cw-active':     'CW DECODER ACTIVE — AUTO-CALIBRATING WPM...',
    'msg-cw-locked':     w => `CW SIGNAL LOCKED — ${w} WPM`,
    'not-detected-disp': 'NOT DETECTED',
    // theme
    'theme-label-light': 'LIGHT',
    'theme-label-dark':  'DARK',
    'theme-aria':        'Toggle between light and dark theme',
    // language dropdown
    'lang-dd-aria':      'Select language',
    // browser support notice
    'browser-notice':    '⚠ THIS BROWSER DOES NOT SUPPORT SPEECH RECOGNITION — MORSE (CW) MODE WORKS IN ANY BROWSER. USE CHROME OR EDGE FOR VOICE/AUTO MODES.',
    'msg-insecure':      'MICROPHONE PERMISSION ONLY WORKS OVER HTTPS OR LOCALHOST',
  },
  de: {
    'ctrl-unit':         '// STEUERUNG',
    'mode-select':       '// MODUS WÄHLEN',
    'source-lang-label': '// QUELLSPRACHE (STIMME)',
    'target-lang-label': '// ZIELSPRACHE',
    'scan-window':       'SUCHFENSTER',
    'sec':               'SEK',
    'detected-label':    'ERKANNT:',
    'vu-label':          'SIG',
    'rx-title':          '// RX-TRANSKRIPT',
    'trans-title':       '// ÜBERSETZUNG',
    'history-title':     '// SITZUNGSPROTOKOLL',
    'manual-title':      '// BEDIENUNGSANLEITUNG',
    'tab-auto':          'AUTO-MODUS',
    'tab-websdr':        'WEBSDR',
    'tab-radio':         'AMATEURFUNK',
    'tab-morse':         'MORSE CW',
    'btn-mode-auto':     '⬡ AUTO',
    'btn-mode-speech':   '▶ STIMME',
    'btn-mode-morse':    '·-· MORSE',
    'footer-2-short':    'KEIN SERVER // 100 % KOSTENLOS',
    'btn-start':         'EMPFANG STARTEN',
    'btn-stop':          'STOPP',
    'copy':              '[ KOPIEREN ]',
    'clr':               '[ LÖSCHEN ]',
    'copy-ok':           '[ OK ]',
    'copy-fail':         '[ FEHLER ]',
    'awaiting':          '// WARTE AUF SIGNAL_',
    'trans-empty':       '// ÜBERSETZUNGS-SPEICHER LEER_',
    'history-empty':     '// SITZUNGSPROTOKOLL LEER',
    'footer-1':          'RADIOSUB-1 // OPEN-SOURCE-RADIO-UNTERTITEL-TOOL // MIT-LIZENZ',
    'footer-2':          'GITHUB.COM/ALTUNSUMERVE/RADIOSUB // KEIN SERVER // 100 % KOSTENLOS',
    'msg-ready':         'RADIOSUB v1.2 — BEREIT',
    'msg-standby':       'IN BEREITSCHAFT',
    'msg-not-supported': 'WEB-SPEECH-API NICHT UNTERSTÜTZT — BITTE CHROME ODER EDGE VERWENDEN',
    'msg-mic-denied':    'MIKROFONZUGRIFF VERWEIGERT — BITTE ERLAUBEN UND ERNEUT VERSUCHEN',
    'msg-audio-err':     e => `AUDIOFEHLER: ${e}`,
    'msg-speech-err':    e => `SPRACH-API-FEHLER: ${e}`,
    'msg-scanning':      l => `SUCHE [${l}] — BITTE DEUTLICH SPRECHEN...`,
    'msg-detected':      n => `SPRACHE ERKANNT: ${n} — ÜBERSETZE`,
    'msg-not-detected':  'SPRACHE NICHT ERKANNT — BITTE ERNEUT VERSUCHEN',
    'msg-receiving':     'SPRACHÜBERTRAGUNG WIRD EMPFANGEN...',
    'msg-cw-active':     'CW-DEKODER AKTIV — WPM WIRD KALIBRIERT...',
    'msg-cw-locked':     w => `CW-SIGNAL GESPERRT — ${w} WPM`,
    'not-detected-disp': 'NICHT ERKANNT',
    'theme-label-light': 'HELL',
    'theme-label-dark':  'DUNKEL',
    'theme-aria':        'Zwischen hellem und dunklem Design wechseln',
    'lang-dd-aria':      'Sprache wählen',
    'browser-notice':    '⚠ DIESER BROWSER UNTERSTÜTZT KEINE SPRACHERKENNUNG — DER MORSE (CW)-MODUS FUNKTIONIERT IN JEDEM BROWSER. FÜR STIMME/AUTO BITTE CHROME ODER EDGE VERWENDEN.',
    'msg-insecure':      'MIKROFONZUGRIFF FUNKTIONIERT NUR ÜBER HTTPS ODER LOCALHOST',
  },
  es: {
    'ctrl-unit':         '// UNIDAD DE CONTROL',
    'mode-select':       '// SELECCIONAR MODO',
    'source-lang-label': '// IDIOMA DE ORIGEN (VOZ)',
    'target-lang-label': '// IDIOMA DE DESTINO',
    'scan-window':       'VENTANA DE ESCANEO',
    'sec':               'SEG',
    'detected-label':    'DETECTADO:',
    'vu-label':          'SEÑ',
    'rx-title':          '// TRANSCRIPCIÓN RX',
    'trans-title':       '// TRADUCCIÓN',
    'history-title':     '// REGISTRO DE SESIÓN',
    'manual-title':      '// MANUAL DEL OPERADOR',
    'tab-auto':          'MODO AUTO',
    'tab-websdr':        'WEBSDR',
    'tab-radio':         'RADIO AFICIONADO',
    'tab-morse':         'MORSE CW',
    'btn-mode-auto':     '⬡ AUTO',
    'btn-mode-speech':   '▶ VOZ',
    'btn-mode-morse':    '·-· MORSE',
    'footer-2-short':    'SIN SERVIDOR // 100 % GRATIS',
    'btn-start':         'INICIAR RX',
    'btn-stop':          'DETENER',
    'copy':              '[ COPIAR ]',
    'clr':               '[ BORRAR ]',
    'copy-ok':           '[ OK ]',
    'copy-fail':         '[ ERROR ]',
    'awaiting':          '// ESPERANDO SEÑAL_',
    'trans-empty':       '// BÚFER DE TRADUCCIÓN VACÍO_',
    'history-empty':     '// REGISTRO DE SESIÓN VACÍO',
    'footer-1':          'RADIOSUB-1 // HERRAMIENTA DE SUBTÍTULOS DE RADIO DE CÓDIGO ABIERTO // LICENCIA MIT',
    'footer-2':          'GITHUB.COM/ALTUNSUMERVE/RADIOSUB // SIN SERVIDOR // 100 % GRATIS',
    'msg-ready':         'RADIOSUB v1.2 — LISTO',
    'msg-standby':       'EN ESPERA',
    'msg-not-supported': 'LA API WEB SPEECH NO ES COMPATIBLE — USE CHROME O EDGE',
    'msg-mic-denied':    'ACCESO AL MICRÓFONO DENEGADO — PERMITA EL ACCESO E INTENTE DE NUEVO',
    'msg-audio-err':     e => `ERROR DE AUDIO: ${e}`,
    'msg-speech-err':    e => `ERROR DE API DE VOZ: ${e}`,
    'msg-scanning':      l => `ESCANNEANDO [${l}] — HABLE CON CLARIDAD...`,
    'msg-detected':      n => `IDIOMA DETECTADO: ${n} — TRADUCIENDO`,
    'msg-not-detected':  'IDIOMA NO DETECTADO — INTENTE DE NUEVO',
    'msg-receiving':     'RECIBIENDO TRANSMISIÓN DE VOZ...',
    'msg-cw-active':     'DECODIFICADOR CW ACTIVO — CALIBRANDO WPM...',
    'msg-cw-locked':     w => `SEÑAL CW FIJADA — ${w} WPM`,
    'not-detected-disp': 'NO DETECTADO',
    'theme-label-light': 'CLARO',
    'theme-label-dark':  'OSCURO',
    'theme-aria':        'Cambiar entre tema claro y oscuro',
    'lang-dd-aria':      'Seleccionar idioma',
    'browser-notice':    '⚠ ESTE NAVEGADOR NO ADMITE RECONOCIMIENTO DE VOZ — EL MODO MORSE (CW) FUNCIONA EN CUALQUIER NAVEGADOR. USE CHROME O EDGE PARA LOS MODOS VOZ/AUTO.',
    'msg-insecure':      'EL PERMISO DEL MICRÓFONO SOLO FUNCIONA EN HTTPS O LOCALHOST',
  },
  zh: {
    'ctrl-unit':         '// 控制单元',
    'mode-select':       '// 选择模式',
    'source-lang-label': '// 源语言（语音）',
    'target-lang-label': '// 目标语言',
    'scan-window':       '扫描窗口',
    'sec':               '秒',
    'detected-label':    '已检测：',
    'vu-label':          '信号',
    'rx-title':          '// 接收转录',
    'trans-title':       '// 翻译',
    'history-title':     '// 会话记录',
    'manual-title':      '// 操作手册',
    'tab-auto':          '自动模式',
    'tab-websdr':        'WEBSDR',
    'tab-radio':         '业余无线电',
    'tab-morse':         '摩尔斯 CW',
    'btn-mode-auto':     '⬡ 自动',
    'btn-mode-speech':   '▶ 语音',
    'btn-mode-morse':    '·-· 摩尔斯',
    'footer-2-short':    '无服务器 // 100% 免费',
    'btn-start':         '开始接收',
    'btn-stop':          '停止',
    'copy':              '[ 复制 ]',
    'clr':               '[ 清空 ]',
    'copy-ok':           '[ 成功 ]',
    'copy-fail':         '[ 失败 ]',
    'awaiting':          '// 等待信号_',
    'trans-empty':       '// 翻译缓冲区为空_',
    'history-empty':     '// 会话记录为空',
    'footer-1':          'RADIOSUB-1 // 开源无线电字幕工具 // MIT 许可证',
    'footer-2':          'GITHUB.COM/ALTUNSUMERVE/RADIOSUB // 无服务器 // 100% 免费',
    'msg-ready':         'RADIOSUB v1.2 — 就绪',
    'msg-standby':       '待机中',
    'msg-not-supported': '不支持 WEB SPEECH API — 请使用 CHROME 或 EDGE',
    'msg-mic-denied':    '麦克风访问被拒绝 — 请授权后重试',
    'msg-audio-err':     e => `音频错误：${e}`,
    'msg-speech-err':    e => `语音 API 错误：${e}`,
    'msg-scanning':      l => `正在扫描 [${l}] — 请清晰讲话...`,
    'msg-detected':      n => `已识别语言：${n} — 正在翻译`,
    'msg-not-detected':  '未识别到语言 — 请重试',
    'msg-receiving':     '正在接收语音传输...',
    'msg-cw-active':     'CW 解码器已激活 — 正在校准 WPM...',
    'msg-cw-locked':     w => `CW 信号已锁定 — ${w} WPM`,
    'not-detected-disp': '未检测到',
    'theme-label-light': '浅色',
    'theme-label-dark':  '深色',
    'theme-aria':        '在浅色和深色主题之间切换',
    'lang-dd-aria':      '选择语言',
    'browser-notice':    '⚠ 此浏览器不支持语音识别 — 摩尔斯（CW）模式可在任何浏览器中使用。语音/自动模式请使用 CHROME 或 EDGE。',
    'msg-insecure':      '麦克风权限仅在 HTTPS 或 LOCALHOST 下可用',
  },
  ru: {
    'ctrl-unit':         '// БЛОК УПРАВЛЕНИЯ',
    'mode-select':       '// ВЫБОР РЕЖИМА',
    'source-lang-label': '// ИСХОДНЫЙ ЯЗЫК (ГОЛОС)',
    'target-lang-label': '// ЦЕЛЕВОЙ ЯЗЫК',
    'scan-window':       'ОКНО СКАНИРОВАНИЯ',
    'sec':               'СЕК',
    'detected-label':    'ОБНАРУЖЕНО:',
    'vu-label':          'СИГ',
    'rx-title':          '// ТРАНСКРИПЦИЯ ПРИЁМА',
    'trans-title':       '// ПЕРЕВОД',
    'history-title':     '// ЖУРНАЛ СЕАНСА',
    'manual-title':      '// РУКОВОДСТВО ОПЕРАТОРА',
    'tab-auto':          'АВТО-РЕЖИМ',
    'tab-websdr':        'WEBSDR',
    'tab-radio':         'ЛЮБИТЕЛЬСКОЕ РАДИО',
    'tab-morse':         'МОРЗЕ CW',
    'btn-mode-auto':     '⬡ АВТО',
    'btn-mode-speech':   '▶ ГОЛОС',
    'btn-mode-morse':    '·-· МОРЗЕ',
    'footer-2-short':    'БЕЗ СЕРВЕРА // 100% БЕСПЛАТНО',
    'btn-start':         'НАЧАТЬ ПРИЁМ',
    'btn-stop':          'СТОП',
    'copy':              '[ КОПИРОВАТЬ ]',
    'clr':               '[ ОЧИСТИТЬ ]',
    'copy-ok':           '[ ОК ]',
    'copy-fail':         '[ ОШИБКА ]',
    'awaiting':          '// ОЖИДАНИЕ СИГНАЛА_',
    'trans-empty':       '// БУФЕР ПЕРЕВОДА ПУСТ_',
    'history-empty':     '// ЖУРНАЛ СЕАНСА ПУСТ',
    'footer-1':          'RADIOSUB-1 // ИНСТРУМЕНТ СУБТИТРОВ ДЛЯ РАДИО С ОТКРЫТЫМ КОДОМ // ЛИЦЕНЗИЯ MIT',
    'footer-2':          'GITHUB.COM/ALTUNSUMERVE/RADIOSUB // БЕЗ СЕРВЕРА // 100% БЕСПЛАТНО',
    'msg-ready':         'RADIOSUB v1.2 — ГОТОВ',
    'msg-standby':       'В РЕЖИМЕ ОЖИДАНИЯ',
    'msg-not-supported': 'WEB SPEECH API НЕ ПОДДЕРЖИВАЕТСЯ — ИСПОЛЬЗУЙТЕ CHROME ИЛИ EDGE',
    'msg-mic-denied':    'ДОСТУП К МИКРОФОНУ ЗАПРЕЩЁН — РАЗРЕШИТЕ И ПОВТОРИТЕ ПОПЫТКУ',
    'msg-audio-err':     e => `ОШИБКА ЗВУКА: ${e}`,
    'msg-speech-err':    e => `ОШИБКА РЕЧЕВОГО API: ${e}`,
    'msg-scanning':      l => `СКАНИРОВАНИЕ [${l}] — ГОВОРИТЕ ОТЧЁТЛИВО...`,
    'msg-detected':      n => `ЯЗЫК ОБНАРУЖЕН: ${n} — ПЕРЕВОД`,
    'msg-not-detected':  'ЯЗЫК НЕ ОБНАРУЖЕН — ПОПРОБУЙТЕ СНОВА',
    'msg-receiving':     'ПОЛУЧЕНИЕ ГОЛОСОВОЙ ПЕРЕДАЧИ...',
    'msg-cw-active':     'CW-ДЕКОДЕР АКТИВЕН — КАЛИБРОВКА WPM...',
    'msg-cw-locked':     w => `CW-СИГНАЛ ЗАХВАЧЕН — ${w} WPM`,
    'not-detected-disp': 'НЕ ОБНАРУЖЕНО',
    'theme-label-light': 'СВЕТЛАЯ',
    'theme-label-dark':  'ТЁМНАЯ',
    'theme-aria':        'Переключить между светлой и тёмной темой',
    'lang-dd-aria':      'Выбрать язык',
    'browser-notice':    '⚠ ЭТОТ БРАУЗЕР НЕ ПОДДЕРЖИВАЕТ РАСПОЗНАВАНИЕ РЕЧИ — РЕЖИМ МОРЗЕ (CW) РАБОТАЕТ В ЛЮБОМ БРАУЗЕРЕ. ДЛЯ ГОЛОСА/АВТО ИСПОЛЬЗУЙТЕ CHROME ИЛИ EDGE.',
    'msg-insecure':      'ДОСТУП К МИКРОФОНУ РАБОТАЕТ ТОЛЬКО ЧЕРЕЗ HTTPS ИЛИ LOCALHOST',
  },
  az: {
    'ctrl-unit':         '// İDARƏ BLOKU',
    'mode-select':       '// REJİM SEÇ',
    'source-lang-label': '// MƏNBƏ DİLİ (SƏS)',
    'target-lang-label': '// HƏDƏF DİL',
    'scan-window':       'SKAN PƏNCƏRƏSİ',
    'sec':               'SAN',
    'detected-label':    'AŞKARLANDI:',
    'vu-label':          'SİG',
    'rx-title':          '// QƏBUL TRANSKRİPTİ',
    'trans-title':       '// TƏRCÜMƏ',
    'history-title':     '// SEANS JURNALI',
    'manual-title':      '// OPERATOR TƏLİMATI',
    'tab-auto':          'AVTO REJİM',
    'tab-websdr':        'WEBSDR',
    'tab-radio':         'HƏVƏSKAR RADYO',
    'tab-morse':         'MORZE CW',
    'btn-mode-auto':     '⬡ AVTO',
    'btn-mode-speech':   '▶ SƏS',
    'btn-mode-morse':    '·-· MORZE',
    'footer-2-short':    'SERVER YOXDUR // 100% PULSUZ',
    'btn-start':         'QƏBULA BAŞLA',
    'btn-stop':          'DAYANDIR',
    'copy':              '[ KÖÇÜR ]',
    'clr':               '[ TƏMİZLƏ ]',
    'copy-ok':           '[ OK ]',
    'copy-fail':         '[ XƏTA ]',
    'awaiting':          '// SİQNAL GÖZLƏNİR_',
    'trans-empty':       '// TƏRCÜMƏ BUFERİ BOŞDUR_',
    'history-empty':     '// SEANS JURNALI BOŞDUR',
    'footer-1':          'RADIOSUB-1 // AÇIQ MƏNBƏLİ RADYO ALTYAZI ALƏTİ // MIT LİSANSI',
    'footer-2':          'GITHUB.COM/ALTUNSUMERVE/RADIOSUB // SERVER YOXDUR // 100% PULSUZ',
    'msg-ready':         'RADIOSUB v1.2 — HAZIR',
    'msg-standby':       'GÖZLƏMƏDƏ',
    'msg-not-supported': 'WEB SPEECH API DƏSTƏKLƏNMİR — CHROME VƏ YA EDGE İSTİFADƏ EDİN',
    'msg-mic-denied':    'MİKROFONA GİRİŞ RƏDD EDİLDİ — İCAZƏ VERİB YENİDƏN CƏHD EDİN',
    'msg-audio-err':     e => `SƏS XƏTASI: ${e}`,
    'msg-speech-err':    e => `SƏS API XƏTASI: ${e}`,
    'msg-scanning':      l => `SKAN EDİLİR [${l}] — AYDIN DANIŞIN...`,
    'msg-detected':      n => `DİL AŞKARLANDI: ${n} — TƏRCÜMƏ EDİLİR`,
    'msg-not-detected':  'DİL AŞKARLANMADI — YENİDƏN CƏHD EDİN',
    'msg-receiving':     'SƏS ÖTÜRÜMÜ QƏBUL EDİLİR...',
    'msg-cw-active':     'CW DEKODERU AKTİVDİR — WPM KALİBRƏ OLUNUR...',
    'msg-cw-locked':     w => `CW SİQNALI KİLİDLENDİ — ${w} WPM`,
    'not-detected-disp': 'AŞKARLANMADI',
    'theme-label-light': 'AÇIQ',
    'theme-label-dark':  'TÜND',
    'theme-aria':        'Açıq və tünd tema arasında keçid edin',
    'lang-dd-aria':      'Dil seçin',
    'browser-notice':    '⚠ BU BRAUZER SƏS TANIMANI DƏSTƏKLƏMİR — MORZE (CW) REJİMİ HƏR BRAUZERDƏ İŞLƏYİR. SƏS/AVTO REJİM ÜÇÜN CHROME VƏ YA EDGE İSTİFADƏ EDİN.',
    'msg-insecure':      'MİKROFON İCAZƏSİ YALNIZ HTTPS VƏ YA LOCALHOST ÜZƏRİNDƏN İŞLƏYİR',
  },
  kk: {
    'ctrl-unit':         '// БАСҚАРУ БЛОГЫ',
    'mode-select':       '// РЕЖІМ ТАҢДАУ',
    'source-lang-label': '// ДЕРЕККӨЗ ТІЛІ (ДАУЫС)',
    'target-lang-label': '// МАҚСАТТЫ ТІЛ',
    'scan-window':       'СКАНЕРЛЕУ ТЕРЕЗЕСІ',
    'sec':               'СЕК',
    'detected-label':    'АНЫҚТАЛДЫ:',
    'vu-label':          'СИГ',
    'rx-title':          '// ҚАБЫЛДАУ ТРАНСКРИПТСІ',
    'trans-title':       '// АУДАРМА',
    'history-title':     '// СЕСС ЖУРНАЛЫ',
    'manual-title':      '// ОПЕРАТОР НҰСҚАУЫ',
    'tab-auto':          'АВТО РЕЖІМ',
    'tab-websdr':        'WEBSDR',
    'tab-radio':         'ӘУЕСКЕР РАДИО',
    'tab-morse':         'МОРЗЕ CW',
    'btn-mode-auto':     '⬡ АВТО',
    'btn-mode-speech':   '▶ ДАУЫС',
    'btn-mode-morse':    '·-· МОРЗЕ',
    'footer-2-short':    'СЕРВЕР ЖОҚ // 100% ТЕГІН',
    'btn-start':         'ҚАБЫЛДАУДЫ БАСТАУ',
    'btn-stop':          'ТОҚТАТУ',
    'copy':              '[ КӨШІРУ ]',
    'clr':               '[ ТАЗАРТУ ]',
    'copy-ok':           '[ ОК ]',
    'copy-fail':         '[ ҚАТЕ ]',
    'awaiting':          '// СИГНАЛ КҮТІЛУДЕ_',
    'trans-empty':       '// АУДАРМА БУФЕРІ БОС_',
    'history-empty':     '// СЕСС ЖУРНАЛЫ БОС',
    'footer-1':          'RADIOSUB-1 // АШЫҚ БҰЛАҚТЫ РАДИО СУБТИТР ҚҰРАЛЫ // MIT ЛИЦЕНЗИЯСЫ',
    'footer-2':          'GITHUB.COM/ALTUNSUMERVE/RADIOSUB // СЕРВЕР ЖОҚ // 100% ТЕГІН',
    'msg-ready':         'RADIOSUB v1.2 — ДАЙЫН',
    'msg-standby':       'КҮТУ РЕЖИМІНДЕ',
    'msg-not-supported': 'WEB SPEECH API ҚОЛДАУЫЛМАЙДЫ — CHROME НЕМЕСЕ EDGE ПАЙДАЛАНЫҢЫЗ',
    'msg-mic-denied':    'МИКРОФОНҒА РҰҚСАТ БЕРІЛМЕДІ — РҰҚСАТ БЕРІП ҚАЙТАЛАҢЫЗ',
    'msg-audio-err':     e => `ДЫБЫС ҚАТЕСІ: ${e}`,
    'msg-speech-err':    e => `ДАУЫС API ҚАТЕСІ: ${e}`,
    'msg-scanning':      l => `СКАНЕРЛЕУ [${l}] — АНЫҚ СОЙЛЕҢІЗ...`,
    'msg-detected':      n => `ТІЛ АНЫҚТАЛДЫ: ${n} — АУДАРЫЛУДА`,
    'msg-not-detected':  'ТІЛ АНЫҚТАЛМАДЫ — ҚАЙТАЛАҢЫЗ',
    'msg-receiving':     'ДАУЫС ХАБАРЫ ҚАБЫЛДАНУДА...',
    'msg-cw-active':     'CW ДЕКОДЕРІ БЕЛСЕНДІ — WPM КАЛИБРЛЕНУДЕ...',
    'msg-cw-locked':     w => `CW СИГНАЛЫ ҚҰЛЫПТАЛДЫ — ${w} WPM`,
    'not-detected-disp': 'АНЫҚТАЛМАДЫ',
    'theme-label-light': 'ЖАРЫҚ',
    'theme-label-dark':  'ҚАРАҢҒЫ',
    'theme-aria':        'Жарық және қараңғы тақырып арасында ауыстыру',
    'lang-dd-aria':      'Тіл таңдаңыз',
    'browser-notice':    '⚠ БҰЛ БРАУЗЕР ДАУЫСТЫ ТАНУДЫ ҚОЛДАМАЙДЫ — МОРЗЕ (CW) РЕЖІМІ КЕЗ КЕЛГЕН БРАУЗЕРДЕ ЖҰМЫС ІСТЕЙДІ. ДАУЫС/АВТО РЕЖІМ ҮШІН CHROME НЕМЕСЕ EDGE ПАЙДАЛАНЫҢЫЗ.',
    'msg-insecure':      'МИКРОФОН РҰҚСАТЫ ТЕК HTTPS НЕМЕСЕ LOCALHOST АРҚЫЛЫ ЖҰМЫС ІСТЕЙДІ',
  },
  ku: {
    'ctrl-unit':         '// YEKNÎYA KONTROLÊ',
    'mode-select':       '// HILBIJÊRINA MOD',
    'source-lang-label': '// ZIMANÊ ÇAVKANÎ (DENG)',
    'target-lang-label': '// ZIMANÊ ARMANC',
    'scan-window':       'PENÇEYA ŞÛNDARÎ',
    'sec':               'ÇRK',
    'detected-label':    'HAT DÎTIN:',
    'vu-label':          'SÎG',
    'rx-title':          '// TRANSKRÎPTA RX',
    'trans-title':       '// WERGER',
    'history-title':     '// TOMARA RÛNIŞTINÊ',
    'manual-title':      '// RÊBERNAMÊYA KARWER',
    'tab-auto':          'MODA OTO',
    'tab-websdr':        'WEBSDR',
    'tab-radio':         'RADYOYA AMATÛR',
    'tab-morse':         'MORS CW',
    'btn-mode-auto':     '⬡ OTO',
    'btn-mode-speech':   '▶ DENG',
    'btn-mode-morse':    '·-· MORS',
    'footer-2-short':    'BÊ SERVER // %100 BELAŞ',
    'btn-start':         'DEST PÊ BIKE',
    'btn-stop':          'RAWESTNE',
    'copy':              '[ JÊGIRRE ]',
    'clr':               '[ PAQIJ BIKE ]',
    'copy-ok':           '[ BAŞ ]',
    'copy-fail':         '[ ÇEWTÎ ]',
    'awaiting':          '// LI BENDÎ SÎNYALÊ_',
    'trans-empty':       '// BÎRÛŞÛŞTA WERGERÊ VALA YE_',
    'history-empty':     '// TOMARA RÛNIŞTINÊ VALA YE',
    'footer-1':          'RADIOSUB-1 // AMÛRA JÊNIVÎSANDINA RADYOYÊ // ÇAVKANIYA VEKERÎ // LÎSANSa MIT',
    'footer-2':          'GITHUB.COM/ALTUNSUMERVE/RADIOSUB // BÊ SERVER // %100 BELAŞ',
    'msg-ready':         'RADIOSUB v1.2 — AMADE',
    'msg-standby':       'LI BENDÎ MA',
    'msg-not-supported': 'WEB SPEECH API NAYE DESTEKÊ — CHROME AN EDGE BIKAR BÎNE',
    'msg-mic-denied':    'GÎHÎŞTÎNA MÎKROFONÊ HAT REDKIRIN — ÎCAZE BIDE Û DÎSA BÎCEREBÎNE',
    'msg-audio-err':     e => `ÇEWTIYA DENG: ${e}`,
    'msg-speech-err':    e => `ÇEWTIYA API YA DENG: ${e}`,
    'msg-scanning':      l => `ŞÛNDARÎ [${l}] — BI ZELALÎ BÎAXÎVE...`,
    'msg-detected':      n => `ZIMAN HAT DÎTIN: ${n} — TÊ WERGERIN`,
    'msg-not-detected':  'ZIMAN NEHAT DÎTIN — DÎSA BÎCEREBÎNE',
    'msg-receiving':     'VEGUHASTÎNA DENGÎ TÊ WERGRITIN...',
    'msg-cw-active':     'VEKODERA CW ÇALAK E — WPM TÊ KALÎBRÊKIRIN...',
    'msg-cw-locked':     w => `SÎNYALA CW HAT GRÊDAN — ${w} WPM`,
    'not-detected-disp': 'NEHAT DÎTIN',
    'theme-label-light': 'RONAK',
    'theme-label-dark':  'TARÎ',
    'theme-aria':        'Di navbera ronak û tarî de biguhere',
    'lang-dd-aria':      'Zimanê hilbijêre',
    'browser-notice':    '⚠ EV GEROK NASNASKIRINA DENGÎ NAYE DESTEKÊ — MODA MORS (CW) DI HER GEROKÊ DE DIXEBITE. JI BO MODA DENG/OTO CHROME AN EDGE BIKAR BÎNE.',
    'msg-insecure':      'ÎCAZETA MÎKROFONÊ TENÊ BI HTTPS AN LOCALHOST DIXEBITE',
  },
  zza: {
    'ctrl-unit':         '// BLOKA KONTROLÎ',
    'mode-select':       '// WEÇÎNAYÎŞÊ MODÎ',
    'source-lang-label': '// ZIWANÊ ÇÎMEYÎ (VENG)',
    'target-lang-label': '// ZIWANÊ HEDEFÎ',
    'scan-window':       'PENCERA SKANÊ',
    'sec':               'SAN',
    'detected-label':    'HAT DÎYAYÎNE:',
    'vu-label':          'SÎG',
    'rx-title':          '// TRANSKRÎPTA RX',
    'trans-title':       '// ÇARNAYÎŞ',
    'history-title':     '// TOMA SEANSÎ',
    'manual-title':      '// KILAWUZÊ OPERATORÎ',
    'tab-auto':          'MODA OTO',
    'tab-websdr':        'WEBSDR',
    'tab-radio':         'RADYOYA AMATÖRAN',
    'tab-morse':         'MORS CW',
    'btn-mode-auto':     '⬡ OTO',
    'btn-mode-speech':   '▶ VENG',
    'btn-mode-morse':    '·-· MORS',
    'footer-2-short':    'BÊ SERVER // %100 WERRE',
    'btn-start':         'DEST PÊ KER',
    'btn-stop':          'VINDAR',
    'copy':              '[ KOPYA KER ]',
    'clr':               '[ PAQIJ KER ]',
    'copy-ok':           '[ RIND ]',
    'copy-fail':         '[ XETA ]',
    'awaiting':          '// PARÎ SÎNALÎ_',
    'trans-empty':       '// ÇARNAYÎŞÎ VALA YE_',
    'history-empty':     '// TOMA SEANSÎ VALA YE',
    'footer-1':          'RADIOSUB-1 // ALÊTA JÊNUSTÎŞÊ RADYOYÎ // ÇÎMEYA RAKERDÎ // LÎSANSÊ MIT',
    'footer-2':          'GITHUB.COM/ALTUNSUMERVE/RADIOSUB // BÊ SERVER // %100 WERRE',
    'msg-ready':         'RADIOSUB v1.2 — AMADÊ O',
    'msg-standby':       'SEKENÊNO',
    'msg-not-supported': 'WEB SPEECH API DESTEK NÎYO — CHROME YA KÎ EDGE BÎKARÎNÎ',
    'msg-mic-denied':    'ÎZÎNÊ MÎKROFONÎ RED BÎ — ÎZÎN BIDE Û DISA BÎCEREBNE',
    'msg-audio-err':     e => `XETAYA DENGÎ: ${e}`,
    'msg-speech-err':    e => `XETAYA API YÊ VENGÎ: ${e}`,
    'msg-scanning':      l => `SKAN BENO [${l}] — AŞKARE QISEY KE...`,
    'msg-detected':      n => `ZIWAN HAT DÎYAYÎNE: ${n} — ÇARNINO`,
    'msg-not-detected':  'ZIWAN NÊHAT DÎYAYÎNE — DISA BÎCEREBNE',
    'msg-receiving':     'VENG GROTENO...',
    'msg-cw-active':     'DEKODERA CW ÇALAKA — WPM KALÎBRE BENO...',
    'msg-cw-locked':     w => `SÎNALA CW GROTÎ — ${w} WPM`,
    'not-detected-disp': 'NÊHAT DÎYAYÎNE',
    'theme-label-light': 'RONAK',
    'theme-label-dark':  'TARÎ',
    'theme-aria':        'Mîyanê ronak û tarî dê vurne',
    'lang-dd-aria':      'Ziwane weçîne',
    'browser-notice':    '⚠ NAYA GEROKÎ NASAÎNÎŞÊ VENGÎ DESTEK NÎYO — MODA MORS (CW) HEMÎN GEROKAN DÊ GURENA. QANDÎ VENG/OTO CHROME YA KÎ EDGE BÎKARÎNÎ.',
    'msg-insecure':      'ÎZÎNÊ MÎKROFONÎ TENÊNA HTTPS YA KÎ LOCALHOST SER GURENA',
  },
  ta: {
    'ctrl-unit':         '// கட்டுப்பாட்டு பிரிவு',
    'mode-select':       '// முறையைத் தேர்ந்தெடு',
    'source-lang-label': '// மூல மொழி (குரல்)',
    'target-lang-label': '// இலக்கு மொழி',
    'scan-window':       'ஸ்கேன் சாளரம்',
    'sec':               'வி',
    'detected-label':    'கண்டறியப்பட்டது:',
    'vu-label':          'சிக',
    'rx-title':          '// கேட்பு நகல்',
    'trans-title':       '// மொழிபெயர்ப்பு',
    'history-title':     '// அமர்வு பதிவு',
    'manual-title':      '// இயக்குபவர் கையேடு',
    'tab-auto':          'தானியங்கி முறை',
    'tab-websdr':        'WEBSDR',
    'tab-radio':         'அமெச்சூர் வானொலி',
    'tab-morse':         'மோர்ஸ் CW',
    'btn-mode-auto':     '⬡ தானி',
    'btn-mode-speech':   '▶ குரல்',
    'btn-mode-morse':    '·-· மோர்ஸ்',
    'footer-2-short':    'சேவையகம் இல்லை // 100% இலவசம்',
    'btn-start':         'தொடங்கு',
    'btn-stop':          'நிறுத்து',
    'copy':              '[ நகலெடு ]',
    'clr':               '[ அழி ]',
    'copy-ok':           '[ சரி ]',
    'copy-fail':         '[ பிழை ]',
    'awaiting':          '// சமிக்ஞைக்காக காத்திருக்கிறது_',
    'trans-empty':       '// மொழிபெயர்ப்பு இடையகம் காலியாக உள்ளது_',
    'history-empty':     '// அமர்வு பதிவு காலியாக உள்ளது',
    'footer-1':          'RADIOSUB-1 // திறமூல வானொலி வசன கருவி // MIT உரிமம்',
    'footer-2':          'GITHUB.COM/ALTUNSUMERVE/RADIOSUB // சேவையகம் இல்லை // 100% இலவசம்',
    'msg-ready':         'RADIOSUB v1.2 — தயார்',
    'msg-standby':       'காத்திருப்பில்',
    'msg-not-supported': 'WEB SPEECH API ஆதரிக்கப்படவில்லை — CHROME அல்லது EDGE பயன்படுத்துங்கள்',
    'msg-mic-denied':    'ஒலிவாங்கி அணுகல் மறுக்கப்பட்டது — அனுமதித்து மீண்டும் முயற்சிக்கவும்',
    'msg-audio-err':     e => `ஒலி பிழை: ${e}`,
    'msg-speech-err':    e => `குரல் API பிழை: ${e}`,
    'msg-scanning':      l => `ஸ்கேன் செய்கிறது [${l}] — தெளிவாகப் பேசுங்கள்...`,
    'msg-detected':      n => `மொழி கண்டறியப்பட்டது: ${n} — மொழிபெயர்க்கப்படுகிறது`,
    'msg-not-detected':  'மொழி கண்டறியப்படவில்லை — மீண்டும் முயற்சிக்கவும்',
    'msg-receiving':     'குரல் பரிமாற்றம் பெறப்படுகிறது...',
    'msg-cw-active':     'CW டிகோடர் செயலில் — WPM அளவீடு செய்யப்படுகிறது...',
    'msg-cw-locked':     w => `CW சமிக்ஞை பூட்டப்பட்டது — ${w} WPM`,
    'not-detected-disp': 'கண்டறியப்படவில்லை',
    'theme-label-light': 'ஒளி',
    'theme-label-dark':  'இருள்',
    'theme-aria':        'ஒளி மற்றும் இருள் தீம்களுக்கு இடையில் மாற்று',
    'lang-dd-aria':      'மொழியைத் தேர்ந்தெடுங்கள்',
    'browser-notice':    '⚠ இந்த உலாவி பேச்சு அறிதலை ஆதரிக்கவில்லை — மோர்ஸ் (CW) முறை எந்த உலாவியிலும் வேலை செய்யும். குரல்/தானியங்கி முறைகளுக்கு CHROME அல்லது EDGE பயன்படுத்துங்கள்.',
    'msg-insecure':      'ஒலிவாங்கி அனுமதி HTTPS அல்லது LOCALHOST இல் மட்டுமே வேலை செய்யும்',
  },
};

/* Dil meta bilgileri — dropdown menü buradan üretilir (GNOME.org tarzı) */
const LANG_META = [
  { code: 'tr',  name: 'Türkçe',       short: 'TR'  },
  { code: 'en',  name: 'English',      short: 'EN'  },
  { code: 'de',  name: 'Deutsch',      short: 'DE'  },
  { code: 'es',  name: 'Español',      short: 'ES'  },
  { code: 'zh',  name: '中文',          short: 'ZH'  },
  { code: 'ru',  name: 'Русский',      short: 'RU'  },
  { code: 'az',  name: 'Azərbaycanca', short: 'AZ'  },
  { code: 'kk',  name: 'Қазақша',      short: 'KK'  },
  { code: 'ku',  name: 'Kurdî',        short: 'KU'  },
  { code: 'zza', name: 'Zazakî',       short: 'ZZA' },
  { code: 'ta',  name: 'தமிழ்',         short: 'TA'  },
];
const GUIDE = {
  tr: {
    auto: `
      <h3>// OTO MOD</h3>
      <ol>
        <li><strong>OTO</strong> modunu ve hedef dilini seç</li>
        <li><strong>BAŞLAT</strong>'a bas, mikrofon iznine izin ver</li>
        <li>Telefonu radyo hoparlörüne yaklaştır — sistem <strong>30 saniyeye</strong> kadar dinler</li>
        <li>Dil tespit edilince: <em>DİL ALGILANDI: İTALYANCA (87%)</em></li>
        <li>Çeviri hemen başlar, DURDUR'a basana kadar devam eder</li>
        <li>30 saniyede bulunamazsa: <em>DİL ALGILANAMADI — TEKRAR DENEYİN</em></li>
      </ol>
      <p class="tip">⬡ Net, tek konuşmacılı ses için en iyi sonucu verir</p>
      <p class="tip">⬡ Mors kodu için MORS modunu kullan — Oto mod sadece ses içindir</p>`,
    websdr: `
      <h3>// WEBSDR KULLANIMI</h3>
      <ol>
        <li>PC'nde <a href="http://websdr.org" target="_blank" rel="noopener">websdr.org</a> aç ve bir istasyona tun yap</li>
        <li><strong>Telefonunda</strong> RadioSub'ı aç</li>
        <li><strong>OTO</strong> veya <strong>SES</strong> modunu seç, <strong>BAŞLAT</strong>'a bas</li>
        <li>Telefon mikrofonunu PC hoparlörüne yaklaştır</li>
        <li>Altyazılar gerçek zamanlı görünür — net USB/LSB sinyaller için en iyi sonuç</li>
      </ol>
      <p class="tip">▶ Ses sinyalleri için WebSDR'de USB veya LSB modunu kullan</p>
      <p class="tip">·-· Mors için WebSDR'i CW moduna alıp MORS modunu seç</p>`,
    radio: `
      <h3>// AMATÖR RADYO / TARAYICI</h3>
      <ol>
        <li>Radyonu istediğin frekansa ayarla</li>
        <li>Telefonunda RadioSub'ı aç — <strong>BAŞLAT</strong>'a bas</li>
        <li>Telefonu radyo hoparlörüne yaklaştır</li>
        <li>Dil bilinmiyorsa <strong>OTO</strong> modunu, biliyorsan <strong>SES</strong> modunu kullan</li>
      </ol>
      <p class="tip">▶ Radyo kulaklık çıkışından telefon mikrofon girişine 3.5mm kablo daha temiz ses verir</p>
      <p class="tip">▶ Kısa dalga, tarayıcı, PMR, deniz VHF — hepsinde çalışır</p>`,
    morse: `
      <h3>// MORS CW ÇÖZÜCÜ</h3>
      <ol>
        <li><strong>MORS</strong> modunu seç ve <strong>BAŞLAT</strong>'a bas</li>
        <li>Telefonu CW sinyaline ayarlı radyo hoparlörüne yaklaştır</li>
        <li>Çözücü otomatik kalibre olur — karakterler tek tek görünür</li>
        <li>Çeviri yok — sadece ham çözülmüş Latin karakterleri gösterir</li>
      </ol>
      <p class="tip">⚙ 5'ten 50+ WPM'e kadar otomatik uyum sağlar</p>
      <p class="tip">⚙ En iyi CW ton aralığı: 400–1200 Hz</p>`,
  },
  en: {
    auto: `
      <h3>// AUTO MODE</h3>
      <ol>
        <li>Select <strong>AUTO</strong> mode and your target language</li>
        <li>Click <strong>START RX</strong> and allow microphone access</li>
        <li>Hold your phone near the radio speaker — system listens up to <strong>30 seconds</strong></li>
        <li>When identified: <em>LANGUAGE DETECTED: ITALIAN (87%)</em></li>
        <li>Translation starts immediately and continues until you click STOP</li>
        <li>If no language detected in 30s: <em>LANGUAGE NOT DETECTED — TRY AGAIN</em></li>
      </ol>
      <p class="tip">⬡ Works best with clear, single-speaker audio</p>
      <p class="tip">⬡ For Morse code, use MORSE mode — Auto mode is voice only</p>`,
    websdr: `
      <h3>// WEBSDR SETUP</h3>
      <ol>
        <li>Open <a href="http://websdr.org" target="_blank" rel="noopener">websdr.org</a> on your PC and tune to a station</li>
        <li>Open RadioSub on your <strong>phone</strong></li>
        <li>Select <strong>AUTO</strong> or <strong>VOICE</strong> mode and click <strong>START RX</strong></li>
        <li>Hold the phone microphone close to your PC speaker</li>
        <li>Subtitles appear in real-time — best results with clear USB/LSB voice signals</li>
      </ol>
      <p class="tip">▶ For voice signals: use USB or LSB mode in WebSDR</p>
      <p class="tip">·-· For Morse: switch WebSDR to CW mode and select MORSE above</p>`,
    radio: `
      <h3>// HAM RADIO / SCANNER</h3>
      <ol>
        <li>Tune your radio to the target frequency</li>
        <li>Open RadioSub on your phone — click <strong>START RX</strong></li>
        <li>Hold the phone near the radio speaker</li>
        <li>Use <strong>AUTO</strong> to detect language, or <strong>VOICE</strong> if you know it</li>
      </ol>
      <p class="tip">▶ A 3.5mm cable from radio headphone jack to phone mic gives cleaner audio</p>
      <p class="tip">▶ Works with any receiver: shortwave, scanner, PMR, marine VHF</p>`,
    morse: `
      <h3>// MORSE CW DECODER</h3>
      <ol>
        <li>Select <strong>MORSE</strong> mode and click <strong>START RX</strong></li>
        <li>Hold your phone near the radio speaker tuned to a CW signal</li>
        <li>Decoder auto-calibrates — decoded text appears character by character</li>
        <li>No translation — shows raw decoded Latin characters only</li>
      </ol>
      <p class="tip">⚙ Adapts automatically to any speed from 5 to 50+ WPM</p>
      <p class="tip">⚙ Optimal CW tone range: 400–1200 Hz</p>`,
  },
  de: {
    auto: `
      <h3>// AUTO-MODUS</h3>
      <ol>
        <li><strong>AUTO</strong>-Modus und Zielsprache wählen</li>
        <li><strong>EMPFANG STARTEN</strong> drücken und Mikrofonzugriff erlauben</li>
        <li>Telefon an den Radiolautsprecher halten — das System hört bis zu <strong>30 Sekunden</strong></li>
        <li>Bei Erkennung: <em>SPRACHE ERKANNT: ITALIENISCH (87 %)</em></li>
        <li>Die Übersetzung beginnt sofort und läuft, bis STOPP gedrückt wird</li>
        <li>Wenn in 30 s nichts erkannt wird: <em>SPRACHE NICHT ERKANNT — ERNEUT VERSUCHEN</em></li>
      </ol>
      <p class="tip">⬡ Funktioniert am besten mit klarer Sprache einer einzelnen Person</p>
      <p class="tip">⬡ Für Morsecoden den MORSE-Modus verwenden — der Auto-Modus ist nur für Sprache</p>`,
    websdr: `
      <h3>// WEBSDR EINRICHTEN</h3>
      <ol>
        <li><a href="http://websdr.org" target="_blank" rel="noopener">websdr.org</a> am PC öffnen und einen Sender anwählen</li>
        <li>RadioSub auf dem <strong>Telefon</strong> öffnen</li>
        <li><strong>AUTO</strong>- oder <strong>STIMME</strong>-Modus wählen und <strong>EMPFANG STARTEN</strong> drücken</li>
        <li>Das Telefonmikrofon an den PC-Lautsprecher halten</li>
        <li>Untertitel erscheinen in Echtzeit — beste Ergebnisse mit klaren USB/LSB-Sprachsignalen</li>
      </ol>
      <p class="tip">▶ Für Sprachsignale: USB- oder LSB-Modus im WebSDR verwenden</p>
      <p class="tip">·-· Für Morse: WebSDR in den CW-Modus schalten und oben MORSE wählen</p>`,
    radio: `
      <h3>// AMATEURFUNK / SCANNER</h3>
      <ol>
        <li>Das Radio auf die Zielfrequenz abstimmen</li>
        <li>RadioSub auf dem Telefon öffnen — <strong>EMPFANG STARTEN</strong> drücken</li>
        <li>Das Telefon an den Radiolautsprecher halten</li>
        <li><strong>AUTO</strong> zur Spracherkennung oder <strong>STIMME</strong>, wenn die Sprache bekannt ist</li>
      </ol>
      <p class="tip">▶ Ein 3,5-mm-Kabel vom Kopfhörerausgang zum Telefonmikrofon liefert saubereren Ton</p>
      <p class="tip">▶ Funktioniert mit jedem Empfänger: Kurzwelle, Scanner, PMR, UKW-Marine</p>`,
    morse: `
      <h3>// MORSE-CW-DEKODER</h3>
      <ol>
        <li><strong>MORSE</strong>-Modus wählen und <strong>EMPFANG STARTEN</strong> drücken</li>
        <li>Das Telefon an den Radiolautsprecher halten, der auf ein CW-Signal abgestimmt ist</li>
        <li>Der Dekoder kalibriert sich automatisch — der Text erscheint Zeichen für Zeichen</li>
        <li>Keine Übersetzung — zeigt nur rohe dekodierte lateinische Zeichen</li>
      </ol>
      <p class="tip">⚙ Passt sich automatisch jeder Geschwindigkeit von 5 bis 50+ WPM an</p>
      <p class="tip">⚙ Optimaler CW-Tonbereich: 400–1200 Hz</p>`,
  },
  es: {
    auto: `
      <h3>// MODO AUTO</h3>
      <ol>
        <li>Selecciona el modo <strong>AUTO</strong> y tu idioma de destino</li>
        <li>Pulsa <strong>INICIAR RX</strong> y permite el acceso al micrófono</li>
        <li>Sujeta el teléfono cerca del altavoz de la radio — el sistema escucha hasta <strong>30 segundos</strong></li>
        <li>Al identificar: <em>IDIOMA DETECTADO: ITALIANO (87 %)</em></li>
        <li>La traducción comienza de inmediato y continúa hasta pulsar DETENER</li>
        <li>Si no se detecta nada en 30 s: <em>IDIOMA NO DETECTADO — INTENTE DE NUEVO</em></li>
      </ol>
      <p class="tip">⬡ Funciona mejor con audio claro de un solo hablante</p>
      <p class="tip">⬡ Para código morse usa el modo MORSE — el modo Auto es solo de voz</p>`,
    websdr: `
      <h3>// CONFIGURACIÓN WEBSDR</h3>
      <ol>
        <li>Abre <a href="http://websdr.org" target="_blank" rel="noopener">websdr.org</a> en tu PC y sintoniza una estación</li>
        <li>Abre RadioSub en tu <strong>teléfono</strong></li>
        <li>Selecciona el modo <strong>AUTO</strong> o <strong>VOZ</strong> y pulsa <strong>INICIAR RX</strong></li>
        <li>Acerca el micrófono del teléfono al altavoz del PC</li>
        <li>Los subtítulos aparecen en tiempo real — mejores resultados con señales de voz USB/LSB claras</li>
      </ol>
      <p class="tip">▶ Para señales de voz: usa el modo USB o LSB en WebSDR</p>
      <p class="tip">·-· Para morse: cambia WebSDR a modo CW y selecciona MORSE arriba</p>`,
    radio: `
      <h3>// RADIO AFICIONADO / ESCÁNER</h3>
      <ol>
        <li>Sintoniza tu radio en la frecuencia objetivo</li>
        <li>Abre RadioSub en tu teléfono — pulsa <strong>INICIAR RX</strong></li>
        <li>Sujeta el teléfono cerca del altavoz de la radio</li>
        <li>Usa <strong>AUTO</strong> para detectar el idioma, o <strong>VOZ</strong> si lo conoces</li>
      </ol>
      <p class="tip">▶ Un cable de 3,5 mm de la salida de auriculares al micrófono del teléfono da un audio más limpio</p>
      <p class="tip">▶ Funciona con cualquier receptor: onda corta, escáner, PMR, VHF marino</p>`,
    morse: `
      <h3>// DECODIFICADOR MORSE CW</h3>
      <ol>
        <li>Selecciona el modo <strong>MORSE</strong> y pulsa <strong>INICIAR RX</strong></li>
        <li>Sujeta el teléfono cerca del altavoz sintonizado en una señal CW</li>
        <li>El decodificador se calibra automáticamente — el texto aparece carácter a carácter</li>
        <li>Sin traducción — muestra solo caracteres latinos decodificados en bruto</li>
      </ol>
      <p class="tip">⚙ Se adapta automáticamente a cualquier velocidad de 5 a más de 50 WPM</p>
      <p class="tip">⚙ Rango de tono CW óptimo: 400–1200 Hz</p>`,
  },
  zh: {
    auto: `
      <h3>// 自动模式</h3>
      <ol>
        <li>选择<strong>自动</strong>模式和目标语言</li>
        <li>点击<strong>开始接收</strong>并允许麦克风访问</li>
        <li>将手机靠近收音机扬声器 — 系统最多监听 <strong>30 秒</strong></li>
        <li>识别成功时：<em>已识别语言：意大利语 (87%)</em></li>
        <li>翻译立即开始，直到点击“停止”为止</li>
        <li>若 30 秒内未识别：<em>未识别到语言 — 请重试</em></li>
      </ol>
      <p class="tip">⬡ 对清晰的单人语音效果最佳</p>
      <p class="tip">⬡ 摩尔斯电码请使用摩尔斯模式 — 自动模式仅支持语音</p>`,
    websdr: `
      <h3>// WEBSDR 设置</h3>
      <ol>
        <li>在电脑上打开 <a href="http://websdr.org" target="_blank" rel="noopener">websdr.org</a> 并调谐到一个电台</li>
        <li>在<strong>手机</strong>上打开 RadioSub</li>
        <li>选择<strong>自动</strong>或<strong>语音</strong>模式，点击<strong>开始接收</strong></li>
        <li>将手机麦克风靠近电脑扬声器</li>
        <li>字幕实时显示 — 清晰的 USB/LSB 语音信号效果最佳</li>
      </ol>
      <p class="tip">▶ 语音信号：在 WebSDR 中使用 USB 或 LSB 模式</p>
      <p class="tip">·-· 摩尔斯：将 WebSDR 切换到 CW 模式并选择上方的摩尔斯</p>`,
    radio: `
      <h3>// 业余无线电 / 扫描仪</h3>
      <ol>
        <li>将收音机调到目标频率</li>
        <li>在手机上打开 RadioSub — 点击<strong>开始接收</strong></li>
        <li>将手机靠近收音机扬声器</li>
        <li>语言未知时使用<strong>自动</strong>，已知时使用<strong>语音</strong></li>
      </ol>
      <p class="tip">▶ 用 3.5mm 线连接收音机耳机口和手机麦克风可获得更清晰的音频</p>
      <p class="tip">▶ 适用于任何接收机：短波、扫描仪、PMR、海事 VHF</p>`,
    morse: `
      <h3>// 摩尔斯 CW 解码器</h3>
      <ol>
        <li>选择<strong>摩尔斯</strong>模式并点击<strong>开始接收</strong></li>
        <li>将手机靠近调谐到 CW 信号的收音机扬声器</li>
        <li>解码器自动校准 — 解码文本逐字符出现</li>
        <li>无翻译 — 仅显示原始解码的拉丁字符</li>
      </ol>
      <p class="tip">⚙ 自动适应 5 到 50+ WPM 的任何速度</p>
      <p class="tip">⚙ 最佳 CW 音调范围：400–1200 Hz</p>`,
  },
  ru: {
    auto: `
      <h3>// АВТО-РЕЖИМ</h3>
      <ol>
        <li>Выберите режим <strong>АВТО</strong> и целевой язык</li>
        <li>Нажмите <strong>НАЧАТЬ ПРИЁМ</strong> и разрешите доступ к микрофону</li>
        <li>Держите телефон у динамика радио — система слушает до <strong>30 секунд</strong></li>
        <li>При распознавании: <em>ЯЗЫК ОБНАРУЖЕН: ИТАЛЬЯНСКИЙ (87%)</em></li>
        <li>Перевод начинается сразу и продолжается до нажатия СТОП</li>
        <li>Если за 30 с ничего не найдено: <em>ЯЗЫК НЕ ОБНАРУЖЕН — ПОПРОБУЙТЕ СНОВА</em></li>
      </ol>
      <p class="tip">⬡ Лучше всего работает с чёткой речью одного диктора</p>
      <p class="tip">⬡ Для азбуки Морзе используйте режим МОРЗЕ — авто-режим только для голоса</p>`,
    websdr: `
      <h3>// НАСТРОЙКА WEBSDR</h3>
      <ol>
        <li>Откройте <a href="http://websdr.org" target="_blank" rel="noopener">websdr.org</a> на ПК и настройтесь на станцию</li>
        <li>Откройте RadioSub на <strong>телефоне</strong></li>
        <li>Выберите режим <strong>АВТО</strong> или <strong>ГОЛОС</strong> и нажмите <strong>НАЧАТЬ ПРИЁМ</strong></li>
        <li>Поднесите микрофон телефона к динамику ПК</li>
        <li>Субтитры появляются в реальном времени — лучший результат с чёткими голосовыми USB/LSB сигналами</li>
      </ol>
      <p class="tip">▶ Для голосовых сигналов: используйте режим USB или LSB в WebSDR</p>
      <p class="tip">·-· Для Морзе: переведите WebSDR в режим CW и выберите МОРЗЕ выше</p>`,
    radio: `
      <h3>// ЛЮБИТЕЛЬСКОЕ РАДИО / СКАНЕР</h3>
      <ol>
        <li>Настройте радио на нужную частоту</li>
        <li>Откройте RadioSub на телефоне — нажмите <strong>НАЧАТЬ ПРИЁМ</strong></li>
        <li>Держите телефон у динамика радио</li>
        <li>Используйте <strong>АВТО</strong> для определения языка или <strong>ГОЛОС</strong>, если язык известен</li>
      </ol>
      <p class="tip">▶ Кабель 3,5 мм от выхода наушников к микрофону телефона даёт более чистый звук</p>
      <p class="tip">▶ Работает с любым приёмником: КВ, сканер, PMR, морская УКВ</p>`,
    morse: `
      <h3>// CW-ДЕКОДЕР МОРЗЕ</h3>
      <ol>
        <li>Выберите режим <strong>МОРЗЕ</strong> и нажмите <strong>НАЧАТЬ ПРИЁМ</strong></li>
        <li>Держите телефон у динамика, настроенного на CW-сигнал</li>
        <li>Декодер калибруется автоматически — текст появляется символ за символом</li>
        <li>Без перевода — показывает только декодированные латинские символы</li>
      </ol>
      <p class="tip">⚙ Автоматически подстраивается под скорость от 5 до 50+ WPM</p>
      <p class="tip">⚙ Оптимальный диапазон тона CW: 400–1200 Гц</p>`,
  },
  az: {
    auto: `
      <h3>// AVTO REJİM</h3>
      <ol>
        <li><strong>AVTO</strong> rejimini və hədəf dilini seç</li>
        <li><strong>QƏBULA BAŞLA</strong> düyməsinə bas və mikrofona icazə ver</li>
        <li>Telefonu radio dinamikinə yaxınlaşdır — sistem <strong>30 saniyəyə</strong> qədər dinləyir</li>
        <li>Dil aşkarlananda: <em>DİL AŞKARLANDI: İTALYAN (87%)</em></li>
        <li>Tərcümə dərhal başlayır, DAYANDIR düyməsinə basana qədər davam edir</li>
        <li>30 saniyədə tapılmarsa: <em>DİL AŞKARLANMADI — YENİDƏN CƏHD EDİN</em></li>
      </ol>
      <p class="tip">⬡ Aydın, tək natiqli səs üçün ən yaxşı nəticə verir</p>
      <p class="tip">⬡ Morze kodu üçün MORZE rejimini işlət — Avto rejim yalnız səs üçündür</p>`,
    websdr: `
      <h3>// WEBSDR QURULUMU</h3>
      <ol>
        <li>PC-də <a href="http://websdr.org" target="_blank" rel="noopener">websdr.org</a> aç və bir stansiyaya tənzimlə</li>
        <li><strong>Telefonunda</strong> RadioSub-ı aç</li>
        <li><strong>AVTO</strong> və ya <strong>SƏS</strong> rejimini seç, <strong>QƏBULA BAŞLA</strong> düyməsinə bas</li>
        <li>Telefon mikrofonunu PC dinamikinə yaxınlaşdır</li>
        <li>Altyazılar real vaxtda görünür — aydın USB/LSB səs siqnalları üçün ən yaxşı nəticə</li>
      </ol>
      <p class="tip">▶ Səs siqnalları üçün WebSDR-də USB və ya LSB rejimini işlət</p>
      <p class="tip">·-· Morze üçün WebSDR-i CW rejiminə al və yuxarıdan MORZE-nü seç</p>`,
    radio: `
      <h3>// HƏVƏSKAR RADYO / SKANER</h3>
      <ol>
        <li>Radionu istədiyin tezliyə tənzimlə</li>
        <li>Telefonunda RadioSub-ı aç — <strong>QƏBULA BAŞLA</strong> düyməsinə bas</li>
        <li>Telefonu radio dinamikinə yaxınlaşdır</li>
        <li>Dil bəllidirsə <strong>SƏS</strong>, bəlli deyilsə <strong>AVTO</strong> rejimini işlət</li>
      </ol>
      <p class="tip">▶ Radio qulaqlıq çıxışından telefon mikrofonuna 3.5mm kabel daha təmiz səs verir</p>
      <p class="tip">▶ Qısa dalğa, skaner, PMR, dəniz VHF — hamısında işləyir</p>`,
    morse: `
      <h3>// MORZE CW DEKODERU</h3>
      <ol>
        <li><strong>MORZE</strong> rejimini seç və <strong>QƏBULA BAŞLA</strong> düyməsinə bas</li>
        <li>Telefonu CW siqnalına tənzimlənmiş radio dinamikinə yaxınlaşdır</li>
        <li>Dekoder avtomatik kalibrə olunur — hərflər tək-tək görünür</li>
        <li>Tərcümə yoxdur — yalnız xam dekodlanmış latın hərflərini göstərir</li>
      </ol>
      <p class="tip">⚙ 5-dən 50+ WPM-ə qədər hər sürətə avtomatik uyğunlaşır</p>
      <p class="tip">⚙ Ən yaxşı CW ton aralığı: 400–1200 Hz</p>`,
  },
  kk: {
    auto: `
      <h3>// АВТО РЕЖІМ</h3>
      <ol>
        <li><strong>АВТО</strong> режимі мен мақсатты тілді таңдаңыз</li>
        <li><strong>ҚАБЫЛДАУДЫ БАСТАУ</strong> түймесін басып, микрофонға рұқсат беріңіз</li>
        <li>Телефонды радио динамигіне жақын ұстаңыз — жүйе <strong>30 секундқа</strong> дейін тыңдайды</li>
        <li>Тіл анықталғанда: <em>ТІЛ АНЫҚТАЛДЫ: ИТАЛЬЯН (87%)</em></li>
        <li>Аударма бірден басталады, ТОҚТАТУ басылғанша жалғасады</li>
        <li>30 секундта табылмаса: <em>ТІЛ АНЫҚТАЛМАДЫ — ҚАЙТАЛАҢЫЗ</em></li>
      </ol>
      <p class="tip">⬡ Анық, бір сөйлеуші дауысы үшін ең жақсы нәтиже береді</p>
      <p class="tip">⬡ Морзе коды үшін МОРЗЕ режимін қолданыңыз — Авто режим тек дауысқа арналған</p>`,
    websdr: `
      <h3>// WEBSDR БАПТАУ</h3>
      <ol>
        <li>ПК-де <a href="http://websdr.org" target="_blank" rel="noopener">websdr.org</a> ашып, бір станцияға туралаңыз</li>
        <li><strong>Телефонда</strong> RadioSub-ты ашыңыз</li>
        <li><strong>АВТО</strong> немесе <strong>ДАУЫС</strong> режимін таңдап, <strong>ҚАБЫЛДАУДЫ БАСТАУ</strong> түймесін басыңыз</li>
        <li>Телефон микрофонын ПК динамигіне жақын ұстаңыз</li>
        <li>Субтитрлер нақты уақытта көрінеді — анық USB/LSB дауыс сигналдары үшін ең жақсы</li>
      </ol>
      <p class="tip">▶ Дауыс сигналдары үшін WebSDR-де USB немесе LSB режимін қолданыңыз</p>
      <p class="tip">·-· Морзе үшін WebSDR-ді CW режиміне ауыстырып, жоғарыдан МОРЗЕ таңдаңыз</p>`,
    radio: `
      <h3>// ӘУЕСКЕР РАДИО / СКАНЕР</h3>
      <ol>
        <li>Радионы қалаған жиілікке туралаңыз</li>
        <li>Телефонда RadioSub-ты ашыңыз — <strong>ҚАБЫЛДАУДЫ БАСТАУ</strong> түймесін басыңыз</li>
        <li>Телефонды радио динамигіне жақын ұстаңыз</li>
        <li>Тіл белгісіз болса <strong>АВТО</strong>, белгілі болса <strong>ДАУЫС</strong> режимін қолданыңыз</li>
      </ol>
      <p class="tip">▶ Радио құлақаспап шығысынан телефон микрофонына 3.5мм кабель таза дыбыс береді</p>
      <p class="tip">▶ Қысқа толқын, сканер, PMR, теңіз VHF — барлығында жұмыс істейді</p>`,
    morse: `
      <h3>// МОРЗЕ CW ДЕКОДЕРІ</h3>
      <ol>
        <li><strong>МОРЗЕ</strong> режимін таңдап, <strong>ҚАБЫЛДАУДЫ БАСТАУ</strong> түймесін басыңыз</li>
        <li>Телефонды CW сигналына тураланған радио динамигіне жақын ұстаңыз</li>
        <li>Декодер автоматты түрде калибрленеді — әріптер бір-бірлеп пайда болады</li>
        <li>Аударма жоқ — тек шикі декодталған латын әріптерін көрсетеді</li>
      </ol>
      <p class="tip">⚙ 5-тен 50+ WPM-ге дейінгі кез келген жылдамдыққа автоматты бейімделеді</p>
      <p class="tip">⚙ Оңтайлы CW тон диапазоны: 400–1200 Гц</p>`,
  },
  ku: {
    auto: `
      <h3>// MODA OTO</h3>
      <ol>
        <li>Moda <strong>OTO</strong> û zimanê armanc hilbijêre</li>
        <li>Li <strong>DEST PÊ BIKE</strong> bitikîne û destûrê bide mîkrofonê</li>
        <li>Telefonê nêzî qutekerê radyoyê bigire — pergal heta <strong>30 çirkeyan</strong> guhdarî dike</li>
        <li>Dema ziman hat dîtin: <em>ZIMAN HAT DÎTIN: ÎTALÎ (87%)</em></li>
        <li>Werger tavilê dest pê dike, heta te RAWESTNE bitikîne didome</li>
        <li>Di 30 çirkeyan de nehatibe dîtin: <em>ZIMAN NEHAT DÎTIN — DÎSA BICEREBÎNE</em></li>
      </ol>
      <p class="tip">⬡ Ji bo dengê zelal ê yekaxiv herî baş dixebite</p>
      <p class="tip">⬡ Ji bo koda Mors moda MORS bikar bîne — moda Oto tenê ji bo dengê ye</p>`,
    websdr: `
      <h3>// SAZKIRINA WEBSDR</h3>
      <ol>
        <li>Li PC-ya xwe <a href="http://websdr.org" target="_blank" rel="noopener">websdr.org</a> veke û stasyonêkê akor bike</li>
        <li>RadioSub-ê li <strong>telefonê</strong> xwe veke</li>
        <li>Moda <strong>OTO</strong> an moda <strong>DENG</strong> hilbijêre, li <strong>DEST PÊ BIKE</strong> bitikîne</li>
        <li>Mîkrofonê telefonê nêzî qutekerê PC-ya xwe bigire</li>
        <li>Jênivîs bi dema rasteqîn xuya dibin — ji bo sînyalên dengî yên zelal ên USB/LSB encam herî baş in</li>
      </ol>
      <p class="tip">▶ Ji bo sînyalên dengî: di WebSDR de moda USB an LSB bikar bîne</p>
      <p class="tip">·-· Ji bo Mors: WebSDR-ê bibe moda CW û jor MORS hilbijêre</p>`,
    radio: `
      <h3>// RADYOYA AMATÛR / SKENER</h3>
      <ol>
        <li>Radyoyê xwe biguhêze frekansa ku tu dixwazî</li>
        <li>RadioSub-ê li telefonê xwe veke — li <strong>DEST PÊ BIKE</strong> bitikîne</li>
        <li>Telefonê nêzî qutekerê radyoyê bigire</li>
        <li>Heke ziman nayê zanîn moda <strong>OTO</strong>, heke tê zanîn moda <strong>DENG</strong> bikar bîne</li>
      </ol>
      <p class="tip">▶ Kabloya 3.5mm ji derketina gulbîkê bo mîkrofonê telefonê dengê paqtir dide</p>
      <p class="tip">▶ Pêla kurt, skener, PMR, VHF-a deryayî — di hemîyan de dixebite</p>`,
    morse: `
      <h3>// VEKODERA MORS CW</h3>
      <ol>
        <li>Moda <strong>MORS</strong> hilbijêre û li <strong>DEST PÊ BIKE</strong> bitikîne</li>
        <li>Telefonê nêzî qutekerê radyoyê yê bi sînyala CW ve bigire</li>
        <li>Vekoder xwe bixweber kalîbre dike — tîp bi tîp xuya dibin</li>
        <li>Werger tune — tenê tîpên latînî yên xam ên vekodokirî nîşan dide</li>
      </ol>
      <p class="tip">⚙ Xwe bixweber li her lezê ji 5 heta 50+ WPM digire</p>
      <p class="tip">⚙ Rêja dengî ya herî baş a CW: 400–1200 Hz</p>`,
  },
  zza: {
    auto: `
      <h3>// MODA OTO</h3>
      <ol>
        <li>Moda <strong>OTO</strong> û ziwanê hedefî weçîne</li>
        <li>Ser <strong>DEST PÊ KER</strong> bitikne û îzînê mîkrofonî bide</li>
        <li>Telefon nêzî hoparlora radyoyî bicerêbn — sistem hetanî <strong>30 saneyan</strong> gos keno</li>
        <li>Ziwan diya vîştî: <em>ZIWAN HAT DÎYAYÎNE: ÎTALYANÎ (87%)</em></li>
        <li>Çarnayiş raşti ra dest keno, hetanî tı VINDAR bitikne</li>
        <li>30 saneyan dı çîno bî: <em>ZIWAN NÊHAT DÎYAYÎNE — DISA BÎCEREBNE</em></li>
      </ol>
      <p class="tip">⬡ Qisey aşkare yê tek kesî rê weş gurena</p>
      <p class="tip">⬡ Qandî koda Mors moda MORS bîkarîne — moda Oto tenê qandî vengî ya</p>`,
    websdr: `
      <h3>// SAZKERDIŞA WEBSDR</h3>
      <ol>
        <li>PC ser de <a href="http://websdr.org" target="_blank" rel="noopener">websdr.org</a> akerê û yew istasyonî rê ayar bide</li>
        <li><strong>Telefonê</strong> xo de RadioSub akerê</li>
        <li>Moda <strong>OTO</strong> ya kî moda <strong>VENGÎ</strong> weçîne, ser <strong>DEST PÊ KER</strong> bitikne</li>
        <li>Mîkrofonê telefonî nêzî hoparlora PC bicerêbn</li>
        <li>Jênustîşê raşti de xuya benê — sînalê vengî yê aşkareyê USB/LSB rê weşêno</li>
      </ol>
      <p class="tip">▶ Qandî sînalê vengî: WebSDR de moda USB ya kî LSB bîkarîne</p>
      <p class="tip">·-· Qandî Mors: WebSDR sera moda CW ser û cor de MORS weçîne</p>`,
    radio: `
      <h3>// RADYOYA AMATÖRAN / SKANER</h3>
      <ol>
        <li>Radyoyo xo frekansa ke wazenê ay rê ayar bide</li>
        <li>Telefonê xo de RadioSub akerê — ser <strong>DEST PÊ KER</strong> bitikne</li>
        <li>Telefon nêzî hoparlora radyoyî bicerêbn</li>
        <li>Ziwan zanênî nêbî moda <strong>OTO</strong>, zanênî bî moda <strong>VENGÎ</strong> bîkarîne</li>
      </ol>
      <p class="tip">▶ 3.5mm kabloya ra qulipik ra mîkrofonê telefonî rê veng paqijêr ro dano</p>
      <p class="tip">▶ Pêla kilm, skaner, PMR, VHF deryayî — pêroyî de gurena</p>`,
    morse: `
      <h3>// DEKODERA MORS CW</h3>
      <ol>
        <li>Moda <strong>MORS</strong> weçîne û ser <strong>DEST PÊ KER</strong> bitikne</li>
        <li>Telefon nêzî hoparlora radyoyî ya sînalê CW rê ayar bîyaye bicerêbn</li>
        <li>Dekoder xo bixweber kalîbre keno — herfî herf bi herf xuya benê</li>
        <li>Çarnayiş çînî o — tenê herfê latînî yê xamî yê dekodîbîyayê musneno</li>
      </ol>
      <p class="tip">⚙ Xo 5 ra hetanî 50+ WPM rê otomatîk gurena</p>
      <p class="tip">⚙ Rangeyê tonê CW yê weş: 400–1200 Hz</p>`,
  },
  ta: {
    auto: `
      <h3>// தானியங்கி முறை</h3>
      <ol>
        <li><strong>தானியங்கி</strong> முறையையும் இலக்கு மொழியையும் தேர்ந்தெடுங்கள்</li>
        <li><strong>தொடங்கு</strong> என்பதை அழுத்தி, ஒலிவாங்கி அணுகலை அனுமதிக்கவும்</li>
        <li>வானொலி ஒலிபெருக்கிக்கு அருகில் தொலைபேசியை வைக்கவும் — அமைப்பு <strong>30 விநாடிகள்</strong> வரை கேட்கும்</li>
        <li>அடையாளம் கண்டவுடன்: <em>மொழி கண்டறியப்பட்டது: இத்தாலியன் (87%)</em></li>
        <li>மொழிபெயர்ப்பு உடனடியாகத் தொடங்கும், நிறுத்து அழுத்தும் வரை தொடரும்</li>
        <li>30 விநாடிகளில் கண்டறியப்படாவிட்டால்: <em>மொழி கண்டறியப்படவில்லை — மீண்டும் முயற்சிக்கவும்</em></li>
      </ol>
      <p class="tip">⬡ தெளிவான, ஒரே பேச்சாளர் குரலுக்கு சிறந்த முடிவுகள்</p>
      <p class="tip">⬡ மோர்ஸ் குறியீட்டுக்கு மோர்ஸ் முறையைப் பயன்படுத்துங்கள் — தானியங்கி முறை குரலுக்கு மட்டுமே</p>`,
    websdr: `
      <h3>// WEBSDR அமைவு</h3>
      <ol>
        <li>கணினியில் <a href="http://websdr.org" target="_blank" rel="noopener">websdr.org</a> திறந்து ஒரு நிலையத்திற்குத் திருத்துங்கள்</li>
        <li><strong>தொலைபேசியில்</strong> RadioSub-ஐத் திறக்கவும்</li>
        <li><strong>தானியங்கி</strong> அல்லது <strong>குரல்</strong> முறையைத் தேர்ந்து <strong>தொடங்கு</strong> அழுத்துங்கள்</li>
        <li>தொலைபேசி ஒலிவாங்கியை கணினி ஒலிபெருக்கிக்கு அருகில் வைக்கவும்</li>
        <li>வசனங்கள் நேரலையில் தோன்றும் — தெளிவான USB/LSB குரல் சமிக்ஞைகளுக்கு சிறந்தது</li>
      </ol>
      <p class="tip">▶ குரல் சமிக்ஞைகளுக்கு: WebSDR இல் USB அல்லது LSB முறையைப் பயன்படுத்துங்கள்</p>
      <p class="tip">·-· மோர்ஸுக்கு: WebSDR-ஐ CW முறைக்கு மாற்றி மேலே மோர்ஸைத் தேர்ந்தெடுங்கள்</p>`,
    radio: `
      <h3>// அமெச்சூர் வானொலி / ஸ்கேனர்</h3>
      <ol>
        <li>உங்கள் வானொலியை விரும்பிய அதிர்வெண்ணுக்குத் திருத்துங்கள்</li>
        <li>தொலைபேசியில் RadioSub-ஐத் திறந்து <strong>தொடங்கு</strong> அழுத்துங்கள்</li>
        <li>தொலைபேசியை வானொலி ஒலிபெருக்கிக்கு அருகில் வைக்கவும்</li>
        <li>மொழி தெரியவில்லை என்றால் <strong>தானியங்கி</strong>, தெரிந்தால் <strong>குரல்</strong> முறையைப் பயன்படுத்துங்கள்</li>
      </ol>
      <p class="tip">▶ வானொலி ஹெட்போன் வெளியீட்டிலிருந்து தொலைபேசி ஒலிவாங்கிக்கு 3.5mm கேபிள் தெளிவான ஒலியைத் தரும்</p>
      <p class="tip">▶ குறுக்கு அலை, ஸ்கேனர், PMR, கடல் VHF — அனைத்திலும் வேலை செய்யும்</p>`,
    morse: `
      <h3>// மோர்ஸ் CW டிகோடர்</h3>
      <ol>
        <li><strong>மோர்ஸ்</strong> முறையைத் தேர்ந்து <strong>தொடங்கு</strong> அழுத்துங்கள்</li>
        <li>CW சமிக்ஞைக்குத் திருத்தப்பட்ட வானொலி ஒலிபெருக்கிக்கு அருகில் தொலைபேசியை வைக்கவும்</li>
        <li>டிகோடர் தானாகவே அளவுத்திருத்தம் செய்யும் — எழுத்துக்கள் ஒவ்வொன்றாகத் தோன்றும்</li>
        <li>மொழிபெயர்ப்பு இல்லை — மூல டிகோட் செய்யப்பட்ட இலத்தீன் எழுத்துகள் மட்டுமே காட்டப்படும்</li>
      </ol>
      <p class="tip">⚙ 5 முதல் 50+ WPM வரை எந்த வேகத்திற்கும் தானாகப் பொருந்தும்</p>
      <p class="tip">⚙ சிறந்த CW டோன் வரம்பு: 400–1200 Hz</p>`,
  },
};

/* ── Core ─────────────────────────────────────────── */

let _lang = 'tr';
try {
  _lang = (window.safeStorage || localStorage).getItem('radiosub-lang') || 'tr';
} catch (e) { /* keep default */ }
/* Sadece tanımlı dillere izin ver */
const LANG_CODES = LANG_META.map(m => m.code);
if (LANG_CODES.indexOf(_lang) === -1) _lang = 'tr';

window.t = function(key, arg) {
  const pack = STRINGS[_lang] || STRINGS.tr;
  const val = pack[key] !== undefined ? pack[key] : STRINGS.tr[key];
  if (typeof val === 'function') return val(arg);
  return val !== undefined ? val : key;
};

window.getLang = () => _lang;

/* ── GNOME.org tarzı dil açılır menüsü ────────────── */
const _ddBtn  = document.getElementById('langDdBtn');
const _ddMenu = document.getElementById('langDdMenu');
const _ddLbl  = document.getElementById('langDdLabel');

function closeLangDd() {
  if (!_ddMenu || !_ddBtn) return;
  _ddMenu.hidden = true;
  _ddBtn.setAttribute('aria-expanded', 'false');
}

function toggleLangDd() {
  if (!_ddMenu || !_ddBtn) return;
  const willOpen = _ddMenu.hidden;
  _ddMenu.hidden = !willOpen;
  _ddBtn.setAttribute('aria-expanded', String(willOpen));
  if (willOpen) {
    const sel = _ddMenu.querySelector('.lang-dd-item.selected');
    if (sel) sel.focus();
    else if (_ddMenu.firstElementChild) _ddMenu.firstElementChild.focus();
  }
}

function buildLangMenu() {
  if (!_ddMenu) return;
  _ddMenu.innerHTML = '';
  LANG_META.forEach(m => {
    const li = document.createElement('li');
    li.className = 'lang-dd-item';
    li.setAttribute('role', 'option');
    li.setAttribute('data-lang', m.code);
    li.setAttribute('tabindex', '-1');
    const name = document.createElement('span');
    name.className = 'lang-dd-name';
    name.textContent = m.name;
    const code = document.createElement('span');
    code.className = 'lang-dd-code';
    code.textContent = m.short;
    li.appendChild(name);
    li.appendChild(code);
    li.addEventListener('click', () => { applyLang(m.code); closeLangDd(); if (_ddBtn) _ddBtn.focus(); });
    li.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); li.click(); }
      else if (e.key === 'ArrowDown') { e.preventDefault(); focusSiblingItem(li, 1); }
      else if (e.key === 'ArrowUp')   { e.preventDefault(); focusSiblingItem(li, -1); }
    });
    _ddMenu.appendChild(li);
  });
}

function focusSiblingItem(current, dir) {
  if (!_ddMenu) return;
  const items = Array.prototype.slice.call(_ddMenu.querySelectorAll('.lang-dd-item'));
  const idx = items.indexOf(current) + dir;
  const next = items[Math.max(0, Math.min(items.length - 1, idx))];
  if (next) next.focus();
}

function applyLang(lang) {
  _lang = lang;
  try { (window.safeStorage || localStorage).setItem('radiosub-lang', lang); } catch (e) {}
  document.documentElement.lang = lang;
  /* Çince/Tamilce için font fallback anahtarı (style.css html[data-lang=...] kuralları) */
  document.documentElement.setAttribute('data-lang', lang);

  // Static elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const val = STRINGS[lang][el.dataset.i18n];
    if (val !== undefined && typeof val !== 'function') el.textContent = val;
  });

  // data-i18n-aria (aria-label çevirileri)
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const val = STRINGS[lang][el.dataset.i18nAria];
    if (val !== undefined && typeof val !== 'function') el.setAttribute('aria-label', val);
  });

  // Theme button label + state
  const themeText = document.getElementById('themeText');
  if (themeText) {
    const cur = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    themeText.textContent = STRINGS[lang][cur === 'dark' ? 'theme-label-dark' : 'theme-label-light'];
  }
  const themeBtn = document.getElementById('themeToggle');
  if (themeBtn) themeBtn.setAttribute('aria-label', STRINGS[lang]['theme-aria']);

  // Language dropdown: button label + selected state
  if (_ddLbl) {
    const meta = LANG_META.filter(m => m.code === lang)[0];
    if (meta) _ddLbl.textContent = meta.name;
  }
  if (_ddMenu) {
    _ddMenu.querySelectorAll('.lang-dd-item').forEach(item => {
      const isSel = item.getAttribute('data-lang') === lang;
      item.classList.toggle('selected', isSel);
      if (isSel) item.setAttribute('aria-selected', 'true');
      else item.removeAttribute('aria-selected');
    });
  }

  // Guide panes
  const activeTabEl = document.querySelector('.guide-tab.active');
  const activeTab = (activeTabEl && activeTabEl.dataset.tab) || 'auto';
  ['auto', 'websdr', 'radio', 'morse'].forEach(tab => {
    const pane = document.querySelector(`.guide-tab-content[data-tab="${tab}"]`);
    if (!pane) return;
    pane.innerHTML = GUIDE[lang][tab];
    pane.style.display = tab === activeTab ? 'block' : 'none';
  });

  // Dynamic elements (only when app is idle)
  const idle = !window.app || !window.app.isRunning;
  if (idle) {
    const btnText = document.querySelector('#mainBtn .btn-text');
    if (btnText) btnText.textContent = STRINGS[lang]['btn-start'];
    document.getElementById('statusMsg').textContent = STRINGS[lang]['msg-ready'];
  }

  const sub = document.getElementById('subtitleBox');
  if (sub && sub.querySelector('.ph-text'))
    sub.innerHTML = `<span class="ph-text">${STRINGS[lang]['awaiting']}</span>`;

  const trn = document.getElementById('translationBox');
  if (trn && trn.querySelector('.ph-text'))
    trn.innerHTML = `<span class="ph-text">${STRINGS[lang]['trans-empty']}</span>`;

  const hist = document.getElementById('historyBox');
  if (hist && hist.querySelector('.ph'))
    hist.innerHTML = `<span class="ph">${STRINGS[lang]['history-empty']}</span>`;
}

document.addEventListener('DOMContentLoaded', () => {
  buildLangMenu();

  if (_ddBtn) {
    _ddBtn.addEventListener('click', e => {
      e.stopPropagation();
      toggleLangDd();
    });
  }
  // Menü dışına tıklama → kapat
  document.addEventListener('click', e => {
    if (_ddMenu && !_ddMenu.hidden && _ddBtn && !_ddBtn.contains(e.target) && !_ddMenu.contains(e.target)) {
      closeLangDd();
    }
  });
  // Esc → kapat ve odağı butona ver
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && _ddMenu && !_ddMenu.hidden) {
      closeLangDd();
      if (_ddBtn) _ddBtn.focus();
    }
  });

  applyLang(_lang);
});
