# 📻 RADIOSUB-1

**Tarayıcı tabanlı radyo altyazısı ve çeviri aracı — ücretsiz, backend yok, API anahtarı gerekmez.**

Telefon mikrofonunu herhangi bir radyo, telsiz veya WebSDR hoparlörüne tut — otomatik dil algılama ve çeviri ile canlı altyazı al. 15'ten fazla dilde ses tanıma ve Mors alfabesi (CW) çözme desteği.

🔗 **[Canlı Demo](https://altunsumerve.github.io/radiosub)**

> **Tasarım**: Modernize edilmiş retro CRT terminal estetiği — varsayılan açık gri tema ve karanlık (#0f0f0f) tema, Open Sans tipografisi, GNOME.org tarzı dil açılır menüsü
> **Arayüz dilleri**: 11 — Türkçe, English, Deutsch, Español, 中文, Русский, Azərbaycanca, Қазақша, Kurdî, Zazakî, தமிழ்

---

## Bu Araç Nedir — Ne Değildir

**Ne yapar:**
- Telefon/dizüstü mikrofonu ile radyo hoparlöründen ses yakalar
- Tarayıcının dahili Web Speech API'sini kullanarak sesi metne dönüştürür
- Konuşulan dili tespit eder ve ücretsiz halka açık API'lerle çevirir
- Mors kodu (CW) sinyallerini tarayıcı içindeki FFT analizörü ile çözer

**Ne değildir:**
- ❌ Profesyonel bir simultane çeviri sistemi **değildir**
- ❌ SDR donanımına doğrudan bağlanan bir sinyal işleme aracı değildir — RF sinyalini değil, mikrofondan gelen sesi okur
- ❌ Şifreli, dijital ses (DMR/D-STAR/P25) veya ağır parazitli sinyallerde güvenilir çalışmaz
- ❌ Kritik durumlarda insan tercüman yerine kullanılamaz

**Dürüst beklenti:** Bu araç, mevcut ücretsiz servisleri akıllıca birleştiren bir **hibrit orkestrasyon aracıdır**. Kalitesi, dayandığı üçüncü taraf ses tanıma ve çeviri servislerine bağlıdır. Sonuçlar; ses kalitesine, aksana, konuşma hızına ve sinyal gücüne göre değişir.

---

## Nasıl Kullanılır

**En basit kurulum:**
1. Radyonu veya WebSDR'i bir istasyona ayarla
2. RadioSub'ı **telefonunda** aç (veya mikrofonu olan herhangi bir cihazda)
3. Telefonu hoparlöre tut — **START RX** tıkla
4. Canlı altyazılar gerçek zamanlı olarak gelir

Hepsi bu. Kurulum yok, hesap yok, sunucu yok.

---

## Yaklaşım: Hibrit Mimari

RadioSub, uçtan uca eğitilmiş bir model **değildir**. Tarayıcı içinde ücretsiz servisleri birbirine bağlayan bir orkestratördür:

| Katman | Servis | Neden |
|--------|--------|-------|
| Ses → Metin | Tarayıcının Web Speech API'si (Chrome/Edge) | Ücretsiz, dahili, anahtar gerekmez |
| Dil tespiti | Google Translate resmi olmayan endpoint | Güvenilir, anahtar yok, CORS açık |
| Çeviri | MyMemory (birincil) + Lingva (yedek) | Ücretsiz halka açık API'ler |
| Mors çözme | Özel FFT tabanlı çözücü | Tarayıcıda yerel çalışır |

**Avantaj:** Backend yok, API anahtarı yok, GitHub Pages'te ücretsiz yayınlanır.
**Ödün:** Sonuç kalitesi, bu üçüncü taraf servislerinin sunduğu kadarıyla sınırlıdır.

---

## Özellikler

| | Özellik | Detay |
|-|---------|-------|
| ⬡ | **Otomatik Mod** | 35 saniye boyunca 7 dili 5'er saniyelik pencerelerle dener (EN→RU→DE→IT→FR→ES→TR), oylamaya göre en yüksek skoru alan dili seçer |
| 🎙️ | **Ses Modu** | Manuel dil seçimi + Web Speech API (Chrome/Edge dahili, 15+ dil) |
| ·-· | **Mors Modu** | FFT tabanlı CW çözücü — operatör hızına otomatik kalibrasyon, Latin karakterleri çıkarır |
| 🌐 | **Çeviri** | MyMemory API (birincil) + Lingva (yedek) — ücretsiz, API anahtarı gerekmez |
| 🔍 | **Dil Tespiti** | Google Translate resmi olmayan endpoint — hızlı, güvenilir, anahtar gerekmez |
| 📱 | **Mobil Öncelikli** | Android Chrome + mikrofon ile mükemmel çalışır — hoparlöre tut, altyazı gelir |
| 🌗 | **Tema** | Varsayılan açık gri mod + karanlık mod (#0f0f0f) — tercih hatırlanır |
| 🔤 | **Open Sans** | Tüm arayüzde okunabilirlik odaklı modern tipografi + Çince/Tamilce için Noto Sans SC / Noto Sans Tamil yedekleri |
| 🌍 | **11 Arayüz Dili** | GNOME.org tarzı açılır menü: TR, EN, DE, ES, ZH, RU, AZ, KK, KU (Kurmancî), ZAZA (Zazakî), TA — ana dili adlarıyla, tercih kalıcı |
| ✨ | **Modern UI (v1.2)** | Yumuşak gölgeli yuvarlatılmış kartlar, cam efektli başlık, gradyan aksiyon butonu, akıcı geçişler, erişilebilir odak durumları |
| ⚡ | **Backend Yok** | Saf HTML / CSS / JS — GitHub Pages'te ücretsiz yayınlanır |

---

## Otomatik Mod Nasıl Çalışır?

```
START RX
  │
  ├─ 0–5s    [EN] İngilizce ses tanımayı dener
  ├─ 5–10s   [RU] Rusça ses tanımayı dener
  ├─ 10–15s  [DE] Almanca ses tanımayı dener
  ├─ 15–20s  [IT] İtalyanca ses tanımayı dener  ← İtalyanca burada oy alır
  ├─ 20–25s  [FR] Fransızca ses tanımayı dener
  ├─ 25–30s  [ES] İspanyolca ses tanımayı dener
  └─ 30–35s  [TR] Türkçe ses tanımayı dener

Her adımda: transkript → Google Translate dil tespit API'si
  ├─ Dil onaylandı? → "LANGUAGE DETECTED: ITALIAN (92%)"
  │   → Speech API İtalyancaya geçer → sürekli çevirir
  └─ 35s'de bulunamazsa → "LANGUAGE NOT DETECTED — TRY AGAIN"
```

---

## Modlar

### ⬡ Otomatik Mod
- En iyi: bilinmeyen radyo istasyonları, WebSDR
- 7 dili 5'er saniyelik pencerelerle dener (toplam 35 saniye)
- 35 saniye boyunca oy toplar, en çok oy alan dili seçer, temiz alıma başlar

### 🎙️ Ses Modu
- En iyi: kaynak dili önceden biliyorsan
- Kaynak dili manuel seç → anında transkripsiyon + çeviri

### ·-· Mors Modu
- En iyi: CW (Continuous Wave) amatör radyo sinyalleri
- Nokta ve çizgileri Latin alfabesi karakterlerine dönüştürür
- Çeviri yok — ham çözülmüş metni gösterir
- Operatör hızına otomatik kalibrasyon (5–50+ WPM)

---

## Hızlı Başlangıç

### WebSDR ile (telefondan)
1. PC'nde [websdr.org](http://websdr.org) aç ve bir istasyona tun yap
2. **Telefonunda** RadioSub'ı aç
3. Hedef dili seç → **START RX** tıkla → telefonu PC hoparlörüne tut
4. Altyazılar gerçek zamanlı görünür

### Kendi Radyon / Telsizinle
1. Radyoyu istediğin frekansa ayarla
2. Telefonunda RadioSub'ı aç — **START RX** tıkla
3. Telefonu radyo hoparlörüne tut
4. Dil bilinmiyorsa **AUTO** modu, biliyorsan **VOICE** seç

### Mors Alfabesi (CW)
1. **MORSE** modunu seç
2. CW sinyaline tun yap (WebSDR veya alıcında)
3. **START RX** tıkla — telefonu hoparlöre tut
4. Çözücü otomatik kalibre olur — çözülen karakterler tek tek görünür

### Daha İyi Ses Kalitesi
Arka plan gürültüsü olmadan daha temiz giriş için kablo kullan:
- 3.5mm ses kablosu: radyo/alıcı kulaklık çıkışı → telefon mikrofon girişi
- Ses, Otomatik ve Mors modlarında çalışır

---

## Sınırlamalar ve Bilinen Sorunlar

Bu aracın zorlandığı durumlar konusunda dürüst olmak gerek:

### Ses / Otomatik Mod
- **Gürültülü sinyaller:** Yoğun QRM, QRN veya düşük SNR transkripsiyon kalitesini ciddi şekilde düşürür
- **Birden fazla konuşmacı:** Web Speech API tek konuşmacılı ses için tasarlandı
- **Hızlı veya aksanlı konuşma:** Hızlı konuşma, güçlü bölgesel aksanlar veya ana dili olmayan telaffuz tanıma doğruluğunu düşürür
- **Kısa ifadeler:** Otomatik dil tespiti ~6 kelimeden kısa ifadelerde yanılabilir
- **Benzer diller:** Tespit, yakın akraba dilleri karıştırabilir (İspanyolca/İtalyanca/Portekizce, Rusça/Ukraynaca)
- **Tarayıcı bağımlılığı:** Web Speech API kalitesi Chrome sürümlerine göre değişir, Firefox'ta yoktur

### Mors Modu
- **Sinyal sönümlenmesi (QSB):** Uzun süreli sönümler karakter tespitini bozar
- **Ani WPM değişiklikleri:** Çözücü hız değişiminden sonra ~5 işaret bekleyerek yeniden kalibre olur
- **Yoğun parazit:** Birden fazla üst üste binen CW sinyali FFT tepe tespitini şaşırtır
- **Standart dışı kısaltmalar:** Özel veya nadir prosignler `[pattern]` olarak görünür, anlamı çözülmez

### Çeviri
- **MyMemory günlük limiti:** Anonim kullanıcılar için 1000 kelime/gün — aşıldığında Lingva'ya düşer
- **Teknik jargon:** Ücretsiz API'ler radyo terminolojisini, çağrı işaretlerini, Q-kodlarını sıklıkla yanlış çevirir
- **Deyimler ve argo:** Birebir çeviri garip sonuçlar üretebilir
- **Lingva çalışma süresi:** Topluluk barındırmalı sunucular zaman zaman çevrimdışı olur

### Genel
- **Arka plan gürültüsü:** Oda akustiği, fan, trafik gürültüsü sonuçları bozar
- **Hoparlör seviyesi:** Çok yüksek → bozulma; çok düşük → kelime kayıpları
- **Telefon mikrofon kalitesi:** Eski telefonlar veya kötü mikrofonlu dizüstüler daha kötü sonuç verir

---

## Tarayıcı Desteği

| Tarayıcı | Otomatik / Ses | Mors |
|----------|---------------|------|
| **Chrome** | ✅ | ✅ |
| **Edge** | ✅ | ✅ |
| **Opera** | ✅ | ✅ |
| Safari (14.1+) | ✅ | ✅ |
| Firefox | ❌ | ✅ |
| Samsung Internet | ✅ | ✅ |

> Ses tanıma (Otomatik + Ses modları) Chromium tabanlı tarayıcılar ve Safari 14.1+ gerektirir.
> Mors çözme tüm modern tarayıcılarda çalışır.
>
> **v1.1 iyileştirmeleri:** Firefox gibi ses tanıma desteklemeyen tarayıcılarda uygulama
> bunu başlangıçta tespit eder, uyarı gösterir ve otomatik olarak Mors moduna geçer —
> kullanıcı artık boş hata mesajlarıyla karşılaşmaz.
>
> **v1.2 iyileştirmeleri:** modernize UI (yuvarlatılmış kartlar, yumuşak gölgeler, cam başlık),
> GNOME.org tarzı açılır menüyle 11 arayüz dili ve Çince (Noto Sans SC) ile Tamilce
> (Noto Sans Tamil) için otomatik font yedeği.

> ⚠️ **`file://` ile açma** — tarayıcı mikrofon iznini hatırlamaz, her açılışta sorar.
> Lokal test için `http://localhost` kullan veya GitHub Pages'e deploy et.

---

## Yasal ve Etik Uyarı

⚠️ **Her zaman yerel düzenlemelere uy.** Bazı ülkelerde:
- Kamuya açık olmayan radyo iletişimlerinin kaydedilmesi veya yeniden yayınlanması kısıtlıdır
- Amatör radyo QSO transkriptlerini izinsiz paylaşmak ham radyo etiğini ihlal edebilir
- Belirli frekansların (örneğin polis, askeri) izlenmesi kısıtlı veya yasaktır

Bu araç **kamu yayınlarını izleme, WebSDR keşfi, amatör radyo eğitim kullanımı ve kişisel dil öğrenme** amaçlıdır. Geliştirici, yanlış kullanımdan sorumlu değildir.

---

## Teknik Detaylar

### Otomatik Dil Tespiti
- Web Speech API, 7 dili 5'er saniyelik pencerelerle dener (EN→RU→DE→IT→FR→ES→TR) — 35 saniye boyunca oy toplar, en yüksek skor kazanır
- Her tanıma sonucunda (3+ kelime) Google Translate'in resmi olmayan detection endpoint'ini çağırır: `translate.googleapis.com/translate_a/single?client=gtx&sl=auto`
- API anahtarı gerekmez — Google Translate web arayüzünün kullandığı endpoint
- Tespit sonrası: Speech API onaylanan dile geçer, doğruluk artar

### Mors (CW) Çözücü
- 4096 noktalı FFT ile 350–1300 Hz aralığında ton varlığını tarar
- 750 Hz merkezli biquad bandpass filtre ile parazit azaltma
- İşaret süresi geçmişinin alt %40'ından adaptif nokta-birim tahmini
- Harf/kelime sınırları: sessizlik süresi oranları (3× ve 7× nokta birimi)
- Desteklenen hız: 5–50+ WPM, kendiliğinden kalibre olur

### İzin Tasarımı
- Ses/Otomatik: yalnızca **tek** izin diyaloğu (Web Speech API mikrofonu kendisi yönetiyor)
- Mors: tek `getUserMedia` çağrısı
- Çift izin diyaloğu yok

### Kullanılan Ücretsiz API'ler
| API | Amaç | Limit |
|-----|------|-------|
| Web Speech API | Konuşmadan metne | Tarayıcı dahili, ücretsiz |
| Google Translate (resmi olmayan) | Dil tespiti | Anahtar yok, belgelenmiş limit yok |
| MyMemory | Çeviri (birincil) | Anonim 1000 kelime/gün |
| Lingva | Çeviri (yedek) | Topluluk barındırmalı |

> **Üçüncü taraf API'ler hakkında not:** RadioSub, geliştiricinin kontrol etmediği ücretsiz halka açık servislere bağımlıdır. Eğer MyMemory, Lingva veya Google Translate tespit endpoint'i şartlarını değiştirir veya çevrimdışı olursa, bir düzeltme yayınlanana kadar uygulamanın bazı kısımları çalışmayabilir.

---

## Proje Yapısı

```
radiosub/
├── index.html              Tek sayfalı uygulama
├── css/
│   └── style.css           Modernize edilmiş retro CRT arayüzü + tema sistemi + dil menüsü
├── js/
│   ├── compat.js           ES5/legacy polyfill'ler + safeStorage + yetenek raporu
│   ├── app.js              Ana kontrolcü, otomatik algılama mantığı
│   ├── speech.js           Web Speech API sarmalayıcısı + VU metre
│   ├── morse.js            CW çözücü (FFT + adaptif zamanlama)
│   ├── translator.js       Çeviri + dil tespiti servisi
│   └── i18n.js             11 dil desteği + GNOME tarzı açılır menü + operatör kılavuzu
├── README.md               İngilizce dokümantasyon
├── README_TR.md            Türkçe dokümantasyon
├── LICENSE                 MIT
└── .gitignore
```

---

## Katkıda Bulunma

Issue ve pull request'ler memnuniyetle karşılanır. Bir hata bildiriyorsan lütfen şunları ekle:
- Tarayıcı + sürüm
- Kullandığın mod (Otomatik / Ses / Mors)
- Kaynak dil (biliniyorsa)
- Ses örneği özellikleri (temiz / gürültülü / WebSDR / direkt kablo)

---

## Lisans

[MIT](LICENSE) — özgürce kullan, fork'la ve değiştir.

---

*Amatör radyo ve WebSDR topluluğu için yapıldı*
