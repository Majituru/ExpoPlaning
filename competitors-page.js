const $ = (s, r = document) => r.querySelector(s);
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const tierOf = id => EVENTS.find(e => e.id === id);
const tierName = e => e.tierNote || `Tier ${e.tier}`;

function renderList(f) {
  const list = COMP_EVENTS.filter(c => f === "all" || (f === "part" ? c.confirmed.length : !c.confirmed.length));
  $("#compList").innerHTML = list.map(c => {
    const t = tierOf(c.ids[0]);
    const badges = [...new Set(c.ids.map(i => tierName(tierOf(i))))].map(n => `<span class="badge b${n.slice(5, 6)}">${esc(n)}</span>`).join("");
    const pills = (a, cls = "") => `<div class="pills ${cls}">${a.map(x => `<span class="pill">${esc(x)}</span>`).join("")}</div>`;
    const conf = c.confirmed.length
      ? `<ul class="facts">${c.confirmed.map(x => `<li>${esc(x)}</li>`).join("")}</ul>`
      : `<p class="none">Not yet checked in public sources.</p>`;
    return `<article class="comp t${t.tier}">
      <div class="comp-head">
        <div><h4>${esc(c.name)}</h4><p class="loc">📅 ${esc(c.when)}</p></div>
        <div class="comp-tags">${badges}<span class="int u">Competitors: ${c.rivals.length ? "confirmed" : "none confirmed"}</span></div>
      </div>
      <div class="comp-grid">
        <div><dt>Confirmed from public sources</dt>${conf}</div>
        <div><dt>Competitor exhibitors confirmed</dt>${c.rivals.length ? pills(c.rivals, "rival") : `<p class="none">None confirmed yet.</p>`}
          <dt class="gap">Claimed in source report · <b>unconfirmed</b> · estimate: ${esc(c.claimed.estimate)}</dt>
          ${pills([...c.claimed.rivals, ...c.claimed.exhibitors], "claimed")}</div>
      </div>
      <p class="take"><b>For Omada:</b> ${esc(c.take)}</p>
    </article>`;
  }).join("");
}
$("#intFilter").addEventListener("click", ev => {
  const b = ev.target.closest(".chip"); if (!b) return;
  $("#intFilter").querySelectorAll(".chip").forEach(c => c.classList.toggle("active", c === b));
  renderList(b.dataset.int);
});
renderList("all");

$("#matrix").innerHTML = `<thead><tr><th>Brand</th>${MATRIX_COLS.map(([n]) => `<th>${esc(n)}</th>`).join("")}</tr></thead><tbody>` +
  MATRIX.map(([b, v]) => `<tr><th>${esc(b)}</th>${MATRIX_COLS.map(([, k]) => `<td>${v[k] ? `<span class="mk m${v[k]}"></span>` : ""}</td>`).join("")}</tr>`).join("") + "</tbody>";

$("#siPills").innerHTML = INTEGRATORS.map(x => `<span class="pill">${esc(x)}</span>`).join("");
$("#ecoCards").innerHTML = ECOSYSTEM.map(e => `<article class="card"><h4>${esc(e.title)}</h4><div class="pills">${e.names.map(x => `<span class="pill ally">${esc(x)}</span>`).join("")}</div><p>${esc(e.why)}</p></article>`).join("");

const links = $("#navLinks");
$("#navToggle").addEventListener("click", () => links.classList.toggle("open"));
const bar = $("#progress"), nav = $("#nav");
addEventListener("scroll", () => {
  const h = document.documentElement;
  bar.style.width = (h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight) * 100) + "%";
  nav.classList.toggle("scrolled", h.scrollTop > 20);
}, { passive: true });
