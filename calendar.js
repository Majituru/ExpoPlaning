const $ = (s, r = document) => r.querySelector(s);
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const DOW = ["Mo","Tu","We","Th","Fr","Sa","Su"];
const tierName = e => e.tierNote || `Tier ${e.tier}`;
const pad = n => String(n).padStart(2, "0");
const state = { period: "q4", tier: "all" };

function monthsFor(period) {
  const out = [];
  const add = (y, a, b) => { for (let m = a; m <= b; m++) out.push([y, m]); };
  if (period === "q4") add(2026, 9, 11);
  else if (period === "2027") add(2027, 0, 11);
  else { add(2026, 9, 11); add(2027, 0, 11); }
  return out;
}

function dayMap(events) {
  const map = {};
  events.forEach(e => (e.ranges || []).forEach(([a, b]) => {
    for (let d = new Date(a + "T00:00:00"); d <= new Date(b + "T00:00:00"); d.setDate(d.getDate() + 1)) {
      const k = `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
      (map[k] ||= []).push(e);
    }
  }));
  return map;
}

function fmtRange(e) { return e.date; }

function render() {
  const events = EVENTS.filter(e => state.tier === "all" || e.tier === +state.tier);
  const map = dayMap(events);
  const html = monthsFor(state.period).map(([y, m]) => {
    const key = `${y}-${pad(m + 1)}`;
    const first = new Date(y, m, 1), days = new Date(y, m + 1, 0).getDate();
    const lead = (first.getDay() + 6) % 7;
    let cells = DOW.map(d => `<span class="dow">${d}</span>`).join("") + `<span></span>`.repeat(lead);
    for (let d = 1; d <= days; d++) {
      const ev = map[`${key}-${pad(d)}`];
      if (ev) {
        const e = ev[0];
        cells += `<button class="day t${e.tier}" data-id="${e.id}" title="${esc(e.name)}">${d}</button>`;
      } else cells += `<span class="day">${d}</span>`;
    }
    const inMonth = events.filter(e => e.month === key);
    const dated = inMonth.filter(e => e.ranges && e.name !== "Field Installation & Integration Period");
    const tbc = inMonth.filter(e => !e.ranges);
    const field = inMonth.filter(e => e.name === "Field Installation & Integration Period");
    const item = (e, extra = "") => `<li><button class="ev t${e.tier}" data-id="${e.id}"><span class="dot"></span><span class="ev-d">${esc(e.date.replace(/ \d{4}$/, "").replace(/ (January|February|March|April|May|June|July|August|September|October|November|December)$/, " $1"))}</span><span class="ev-n">${esc(e.name)}</span><span class="ev-t">${esc(tierName(e))}</span>${extra}</button></li>`;
    const list = [...dated.map(e => item(e)), ...tbc.map(e => item(e, `<em class="tbc">date TBC</em>`)), ...field.map(e => item(e, `<em class="tbc">all month</em>`))];
    return `<article class="month ${list.length ? "" : "quiet"}">
      <h3>${MONTHS[m]} <small>${y}</small></h3>
      <div class="grid">${cells}</div>
      <ul class="evlist">${list.join("") || `<li class="none">No events scheduled</li>`}</ul>
    </article>`;
  }).join("");
  $("#months").innerHTML = html;
}

function openModal(id) {
  const e = EVENTS.find(x => x.id === +id);
  $("#modalBody").innerHTML = `
    <span class="badge b${e.tier}">${esc(tierName(e))}</span>
    <h3 id="mTitle">${esc(e.name)}</h3>
    <p class="loc">📅 ${esc(e.date)} · 📍 ${esc(e.loc)}</p>
    <dl>
      <div class="wide"><dt>Plan Status</dt><dd>${esc(e.status)}</dd></div>
      <div class="wide"><dt>B2B Network Fit</dt><dd>${esc(e.fit)} – ${esc(e.fitNote)}</dd></div>
      <div class="wide"><dt>Recommended Participation Model</dt><dd>${esc(e.model)}</dd></div>
      <div class="wide"><dt>Featured Omada Solution &amp; Presentation Focus</dt><dd>${esc(e.focus)}</dd></div>
    </dl>`;
  $("#modal").hidden = false;
  document.body.style.overflow = "hidden";
}
const closeModal = () => { $("#modal").hidden = true; document.body.style.overflow = ""; };

$("#legend").innerHTML = Object.entries(TIERS).map(([k, t]) => `<span class="lg t${k}"><i></i><b>${t.name}</b> ${esc(t.label)}</span>`).join("");

function bind(id, key, attr) {
  $(id).addEventListener("click", ev => {
    const b = ev.target.closest(".chip"); if (!b) return;
    $(id).querySelectorAll(".chip").forEach(c => c.classList.toggle("active", c === b));
    state[key] = b.dataset[attr]; render();
  });
}
bind("#periodFilter", "period", "period");
bind("#calTier", "tier", "tier");
$("#months").addEventListener("click", ev => { const b = ev.target.closest("[data-id]"); if (b) openModal(b.dataset.id); });
$("#modalX").addEventListener("click", closeModal);
$("#modal").addEventListener("click", e => { if (e.target.id === "modal") closeModal(); });
addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

const links = $("#navLinks");
$("#navToggle").addEventListener("click", () => links.classList.toggle("open"));
const bar = $("#progress"), nav = $("#nav");
addEventListener("scroll", () => {
  const h = document.documentElement;
  bar.style.width = (h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight) * 100) + "%";
  nav.classList.toggle("scrolled", h.scrollTop > 20);
}, { passive: true });
render();
