# TP-Link Omada – Fuar Strateji Raporu (2026 Q4 – 2027)

Rapor formatında, koyu temalı statik web sitesi. Derleme adımı yoktur (saf HTML/CSS/JS).

## Vercel ile yayına alma
1. vercel.com → **Add New… → Project** → bu GitHub reposunu seçin.
2. Framework Preset: **Other**. Build Command ve Output Directory boş bırakılır (kök dizin servis edilir).
3. **Deploy**.

## Yerelde önizleme
`python3 -m http.server 8000` → http://localhost:8000

## Düzenleme
- Etkinlik matrisi verisi: `app.js` (`EVENTS`)
- İçerik: `index.html`, tema: `styles.css` (üstteki `:root` renk değişkenleri)
