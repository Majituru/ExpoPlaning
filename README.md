# TP-Link Omada – Trade Show Strategy Report (2026 Q4 – 2027)

Dark-themed, report-style static website (plain HTML/CSS/JS, no build step).

- `index.html` – the report (summary, event matrix, action plan, content strategy, risk & KPI, sources)
- `calendar.html` – annual calendar, events color-coded by tier (click an event for details)
- `events.js` – shared event data used by the matrix and the calendar

## Deploy on Vercel
1. vercel.com → **Add New… → Project** → select this GitHub repo.
2. Framework Preset: **Other**; leave Build Command and Output Directory empty.
3. **Deploy**.

## Local preview
`python3 -m http.server 8000` → http://localhost:8000
