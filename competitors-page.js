const $ = (s, r = document) => r.querySelector(s);
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const tierOf = id => EVENTS.find(e => e.id === id);
const tierName = e => e.tierNote || `Tier ${e.tier}`;

$("#compList").innerHTML = COMP_EVENTS.map(c => {
  const t = tierOf(c.ids[0]);
  return `<article class="comp t${t.tier}">
    <div class="comp-head">
      <div><h4>${esc(c.name)}</h4><p class="loc">📅 ${esc(c.when)}</p></div>
      <div class="comp-tags"><span class="badge b${t.tier}">${esc(tierName(t))}</span></div>
    </div>
    <div class="pills">${c.items.map(x => `<span class="pill" title="${esc(x.note)}">${esc(x.n)} <i>· ${esc(x.note)}</i></span>`).join("")}</div>
  </article>`;
}).join("");

$("#sightings").innerHTML = SIGHTINGS.map(s => `<article class="card"><h4>${esc(s.n)}</h4><span class="meta">${esc(s.at)}</span><p>${esc(s.note)}</p></article>`).join("");

const links = $("#navLinks");
$("#navToggle").addEventListener("click", () => links.classList.toggle("open"));
const bar = $("#progress"), nav = $("#nav");
addEventListener("scroll", () => {
  const h = document.documentElement;
  bar.style.width = (h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight) * 100) + "%";
  nav.classList.toggle("scrolled", h.scrollTop > 20);
}, { passive: true });
