const $ = (s, r = document) => r.querySelector(s);
const state = { tier: "all", year: "all", q: "" };
const esc = s => s.replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const tierLabel = e => e.tierNote || `Tier ${e.tier}`;
const fitClass = f => f.startsWith("Very") || f.startsWith("Direct") ? "vh" : f === "High" ? "h" : f === "Medium-High" ? "mh" : f === "Medium" ? "m" : "l";
const yearOf = e => +e.month.slice(0, 4);

const compOf = id => (typeof COMP_EVENTS !== "undefined") && COMP_EVENTS.find(c => c.ids.includes(id));
const pills = (a, cls = "") => `<div class="pills ${cls}">${a.map(x => `<span class="pill">${esc(x)}</span>`).join("")}</div>`;

function render() {
  const q = state.q.toLowerCase();
  const list = EVENTS.filter(e =>
    (state.tier === "all" || e.tier === +state.tier) &&
    (state.year === "all" || yearOf(e) === +state.year) &&
    (!q || [e.name, e.loc, e.focus, e.model, e.date, e.fitNote].join(" ").toLowerCase().includes(q)));
  $("#count").textContent = `Showing ${list.length} of ${EVENTS.length} events`;
  $("#timeline").innerHTML = list.length ? list.map(e => `
    <article class="event t${e.tier}">
      <div class="when"><span>${esc(e.date)}</span><em>${esc(e.status)}</em></div>
      <div class="body">
        <div class="head">
          <h4>${esc(e.name)}</h4>
          <span class="badge b${e.tier}">${esc(tierLabel(e))}</span>
        </div>
        <p class="loc">📍 ${esc(e.loc)}</p>
        <dl>
          <div><dt>B2B Network Fit</dt><dd><span class="fit ${fitClass(e.fit)}">${esc(e.fit)}</span> ${esc(e.fitNote)}</dd></div>
          <div><dt>Recommended Participation Model</dt><dd>${esc(e.model)}</dd></div>
          <div class="wide"><dt>Featured Omada Solution &amp; Presentation Focus</dt><dd>${esc(e.focus)}</dd></div>
        </dl>
        ${(c => c ? `<div class="comp-mini">
          <div class="cm-head"><span>Competitors &amp; Ecosystem</span><span class="int u">${c.rivals.length ? "Confirmed" : "None confirmed yet"}</span><a href="competitors.html">Details →</a></div>
          ${c.confirmed.length ? `<ul class="facts">${c.confirmed.slice(0, 2).map(x => `<li>${esc(x)}</li>`).join("")}</ul>` : `<p class="none">Not yet checked in public sources.</p>`}
          <dl><div><dt>Claimed in source report · unconfirmed</dt>${pills([...c.claimed.rivals, ...c.claimed.exhibitors], "claimed")}</div></dl>
        </div>` : "")(compOf(e.id))}
      </div>
    </article>`).join("") : `<p class="empty">No matching events found.</p>`;
}

function bindChips(id, key) {
  $(id).addEventListener("click", ev => {
    const b = ev.target.closest(".chip");
    if (!b) return;
    $(id).querySelectorAll(".chip").forEach(c => c.classList.toggle("active", c === b));
    state[key] = b.dataset[key];
    render();
  });
}
if ($("#timeline")) {
  bindChips("#tierFilter", "tier");
  bindChips("#yearFilter", "year");
  $("#search").addEventListener("input", e => { state.q = e.target.value.trim(); render(); });
  render();
}

function bindCopy(btnId, srcId) {
  const b = $(btnId); if (!b) return;
  b.dataset.l = b.textContent;
  b.addEventListener("click", async () => {
    try { await navigator.clipboard.writeText($(srcId).innerText); b.textContent = "Copied ✓"; }
    catch { b.textContent = "Copy failed"; }
    setTimeout(() => (b.textContent = b.dataset.l), 1800);
  });
}
bindCopy("#copyPost", "#postText");
bindCopy("#copyPrompt", "#promptText");

const links = $("#navLinks");
$("#navToggle").addEventListener("click", () => links.classList.toggle("open"));
links.addEventListener("click", e => { if (e.target.tagName === "A") links.classList.remove("open"); });

const bar = $("#progress"), nav = $("#nav");
addEventListener("scroll", () => {
  const h = document.documentElement;
  bar.style.width = (h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight) * 100) + "%";
  nav.classList.toggle("scrolled", h.scrollTop > 20);
}, { passive: true });

document.querySelectorAll("[data-count]").forEach(el => {
  const to = +el.dataset.count; let n = 0;
  const t = setInterval(() => { n++; el.textContent = n; if (n >= to) clearInterval(t); }, 900 / to);
});

const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: 0.08 });
document.querySelectorAll(".card,.tier,.step,.callout,.post").forEach(el => { el.classList.add("reveal"); io.observe(el); });
