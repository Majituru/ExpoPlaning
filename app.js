// Etkinlik verisi: rapordaki "Etkinlik Bazlı Katılım, Stant ve Sunum Uygunluk Matrisi"
const EVENTS = [
  { date: "Kasım 2026", year: 2026, name: "İstanbul Uzakrota Turizm Fuarı", loc: "İstanbul", status: "Mevcut Plan", fit: "Orta-Düşük", fitNote: "Acente ve OTA ağırlıklı", tier: 4, model: "B2B Ziyaret / Küçük Networking Noktası (büyük donanım standı önerilmez)", focus: "Seyahat teknolojileri ve otel dijitalleşmesinde kesintisiz misafir Wi-Fi deneyimi" },
  { date: "10–14 Kasım 2026", year: 2026, name: "HOSTECH by TUSİD İstanbul", loc: "TÜYAP İstanbul", status: "Yeni Öneri", fit: "Çok Yüksek", fitNote: "Bilişim, otel otomasyon ve ağ sistemleri doğrudan katılımcı profilinde", tier: 1, model: "Ana Deneyim Standı + Canlı Omada Cloud Demo", focus: "Kurumsal Wi-Fi 7 (EAP783), duvar tipi otel AP'leri, PoE Switch ve merkezi bulut yönetimi" },
  { date: "25–26 Kasım 2026", year: 2026, name: "16. Uluslararası Resort Turizm Kongresi – AKTOB", loc: "Antalya", status: "Yeni Öneri", fit: "Çok Yüksek", fitNote: "Otel GM'leri, yatırımcılar ve IT karar vericileri", tier: 2, model: "Sahne Sunumu / Panel Konuşmacısı + Fuaye VIP Standı", focus: "\"Turizmde Yapay Zekâ ve Akıllı İşletmeler\" panelinde AI destekli Wi-Fi 7 ve bulut ağ yönetimi sunumu" },
  { date: "2–4 Aralık 2026", year: 2026, name: "TTI İzmir – Uluslararası Turizm Ticaret Fuarı", loc: "Fuarizmir", status: "Mevcut Plan", fit: "Orta", fitNote: "Ege/Akdeniz otelleri ve acenteler", tier: 3, model: "Bölgesel Entegratör Ortak Standı + B2B Randevu Masası", focus: "Ege bölgesi resort ve butik otelleri için sezon öncesi ağ yenileme paketleri" },
  { date: "10–12 Aralık 2026", year: 2026, name: "Hotel-Tech Antalya 2026", loc: "NEST Kongre Merkezi, Belek", status: "Yeni Öneri", fit: "Çok Yüksek", fitNote: "Doğrudan zayıf akım, IP/network ve otel teknik müdürleri", tier: 1, model: "Teknik İhtisas Standı + Uygulamalı Workshop Sunumu", focus: "Zayıf akım, IP/VLAN izolasyonu, GPON/PoE altyapısı ve Zero-Touch Provisioning canlı demosu" },
  { date: "12–15 Ocak 2027", year: 2027, name: "37. ANFAŞ Hotel Equipment", loc: "ANFAŞ Antalya", status: "Mevcut Plan", fit: "Çok Yüksek", fitNote: "Sezon öncesi en büyük otel yenileme ve bilişim satın alma buluşması", tier: 1, model: "Amiral Gemi (Flagship) Stant + \"Akıllı Otel Odası\" Canlı Simülasyonu", focus: "Resort otellerde uçtan uca iç/dış mekân (Outdoor EAP) Wi-Fi 7, PMS/Captive Portal entegrasyonu" },
  { date: "Ocak 2027", year: 2027, name: "ACE of M.I.C.E. Exhibition", loc: "İstanbul", status: "Yeni Öneri", fit: "Yüksek", fitNote: "Kongre merkezleri ve etkinlik otelleri IT/satın alma direktörleri", tier: 2, model: "Etkinlik Resmi Wi-Fi Sponsorluğu + Sunum + Butik Stant", focus: "Kongre ve balo salonlarında Ultra-High-Density (EAP783) ile binlerce eşzamanlı kullanıcı yönetimi" },
  { date: "20–22 & 28–30 Ocak 2027", year: 2027, name: "4. Alanya & İzmir Otel Ekipmanları Fuarı – IZCOREX", loc: "Alanya · İzmir", status: "Yeni Öneri", fit: "Orta-Yüksek", fitNote: "Lokal otel, restoran ve kafe işletmeleri", tier: 3, model: "Bölge Bayisi / Sistem Entegratörü ile Ortak Stant", focus: "KOBİ ölçekli otel, restoran ve kafeler için hızlı kurulumlu Omada Cloud ve PoE çözümleri" },
  { date: "Şubat 2027", year: 2027, name: "Antalya Culinary Forum & Antalya F-Summit Zirvesi", loc: "Antalya", status: "Mevcut Plan", fit: "Düşük", fitNote: "Şefler, F&B direktörleri ve gastronomi odaklı", tier: 4, model: "Stant önerilmez; yalnızca F&B yatırımcılarına yönelik VIP networking", focus: "Restoran zincirleri ve POS/sipariş otomasyonu için kesintisiz PoE ve güvenli misafir Wi-Fi" },
  { date: "2–3 Şubat 2027", year: 2027, name: "Turizm Yatırım Forumu – TIF", loc: "İstanbul", status: "Yeni Öneri", fit: "Çok Yüksek", fitNote: "Yeni otel yatırımcıları, zincir geliştiriciler ve C-Level yöneticiler", tier: 2, model: "Yatırımcı Yuvarlak Masa / Panel Konuşmacısı + VIP Lounge Sponsorluğu", focus: "Greenfield ve zincir projelerde çoklu tesis (Multi-Site) bulut ağ mimarisi ve CAPEX/OPEX optimizasyonu" },
  { date: "4–6 Şubat 2027", year: 2027, name: "EMITT 2027", loc: "İFM İstanbul", status: "Yeni Öneri", fit: "Orta-Yüksek", fitNote: "Seyahat teknolojileri ve otel otomasyon bölümü mevcut", tier: 3, model: "Seyahat Teknolojileri Holünde Kompakt Stant + Ortak Sunum", focus: "Otel otomasyon (PMS) yazılımlarıyla entegre çalışan Omada ağ çözümleri" },
  { date: "18–20 Mart 2027", year: 2027, name: "HOTEL SHOW 2027 Bodrum", loc: "BODTO Destekli · Muğla", status: "Stratejik Ekleme", fit: "Yüksek", fitNote: "Bodrum/Muğla lüks resort ve butik otel teknik/satın alma müdürleri", tier: 1, model: "Bölgesel İhtisas Standı + Sezon Öncesi Teknik Sunum", focus: "Lüks segment villa/resort tesislerde estetik AP tasarımı, dış mekân (marina/plaj) kapsama ve yüksek hız" },
  { date: "15–17 Nisan 2027", year: 2027, name: "ELES Expo 2027", loc: "İFM İstanbul · Hall 9-10", status: "Dikey Teknoloji Eklemesi", fit: "Çok Yüksek", fitNote: "Elektrik, zayıf akım, akıllı bina, kablolama ve sistem entegratörleri", tier: 1, model: "Büyük Teknoloji Standı + Sistem Entegratörü Semineri", focus: "Akıllı bina otomasyonu, PoE+ / PoE++ Switch altyapısı, fiber/bakır anahtarlama ve VIGI + Omada entegrasyonu" },
  { date: "Mayıs 2027", year: 2027, name: "Saha Kurulum ve Entegrasyon Dönemi", loc: "Türkiye Geneli", status: "Operasyonel Dönem", fit: "Doğrudan Uygulama", fitNote: "Sezon açılışı öncesi otel saha kurulumları", tier: 4, model: "İçerik & Vaka Analizi: fuar yerine Saha Vaka Çalışması (Case Study) çekimleri", focus: "Kurulumu tamamlanan otellerde Omada Cloud Controller, AP montajı ve yük testi başarı hikâyelerinin video/vaka olarak kaydedilmesi" },
  { date: "23–24 Eylül 2027", year: 2027, name: "Uluslararası İstanbul Turizm Fuarı – ITF", loc: "İFM İstanbul", status: "Mevcut Plan", fit: "Yüksek", fitNote: "IT/teknoloji firmaları ve otel hizmet tedarikçileri bölümü mevcut", tier: 2, model: "Teknoloji Bölümü Standı + Turizm Zirvesi Sunumu", focus: "Kurumsal konaklama grupları için merkezi bulut yönetimi ve siber güvenlik (WPA3 / VLAN)" },
  { date: "Ekim 2027", year: 2027, name: "Antalya Turizm Fuarı – ATF", loc: "ANFAŞ Antalya", status: "Mevcut Plan", fit: "Yüksek", fitNote: "Resort otel GM'leri, kontrat müdürleri ve Focus Stage teknoloji panelleri", tier: 2, tierNote: "Tier 2/3", model: "Focus Stage Teknoloji Sunumu + B2B Görüşme Standı", focus: "2028 sezonu kontrat ve bütçe döneminde otel genel müdürlerine yatırım getirisi (ROI) odaklı ağ yenileme sunumu" },
  { date: "Kasım 2027", year: 2027, name: "Uzakrota İstanbul & Gastromasa Zirvesi", loc: "İstanbul", status: "Mevcut Plan", fit: "Düşük", fitNote: "Gastronomi ve seyahat acentesi odaklı", tier: 4, model: "Stant önerilmez; Marka Görünürlüğü / PR Ziyareti", focus: "Bütçenin Aralık ayındaki Hotel-Tech Antalya'ya kaydırılması önerilir" },
  { date: "18–20 Kasım 2027", year: 2027, name: "Travel Expo Ankara", loc: "ATO Congresium", status: "Yeni Öneri", fit: "Orta", fitNote: "Kamu sosyal tesisleri, kongre merkezleri ve İç Anadolu otelleri", tier: 3, model: "Kamu ve Kurumsal Entegratör Ortak Standı", focus: "Kamu misafirhaneleri, termal oteller ve kongre merkezleri için güvenli, yönetilebilir ağ altyapısı" },
  { date: "1–3 Aralık 2027", year: 2027, name: "21. TTI İzmir", loc: "Fuarizmir", status: "Mevcut Plan", fit: "Orta", fitNote: "Ege turizm paydaşları", tier: 3, model: "Bölgesel Entegratör Ortak Standı", focus: "Ege bölgesi tesisleri için 2028 bütçe dönemi teknoloji yenileme görüşmeleri" },
  { date: "9–11 Aralık 2027", year: 2027, name: "Hotel-Tech Antalya 2027", loc: "NEST Kongre Merkezi, Belek", status: "Yeni Öneri", fit: "Çok Yüksek", fitNote: "Yıl sonu otel IT ve teknik bütçe netleştirme fuarı", tier: 1, model: "Ana İhtisas Standı + 2028 Otel Teknoloji Bütçesi Sunumu", focus: "Otel IT ve teknik müdürleriyle 2028 yılı Wi-Fi 7 ve Switch yenileme projelerinin kapanış anlaşmaları" }
];

const $ = (s, r = document) => r.querySelector(s);
const state = { tier: "all", year: "all", q: "" };
const esc = s => s.replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const tierLabel = e => e.tierNote || `Tier ${e.tier}`;
const fitClass = f => f.startsWith("Çok") ? "vh" : f === "Yüksek" ? "h" : f.startsWith("Orta-Y") ? "mh" : f === "Orta" ? "m" : f.startsWith("Doğ") ? "vh" : "l";

function render() {
  const q = state.q.toLocaleLowerCase("tr");
  const list = EVENTS.filter(e =>
    (state.tier === "all" || e.tier === +state.tier) &&
    (state.year === "all" || e.year === +state.year) &&
    (!q || [e.name, e.loc, e.focus, e.model, e.date, e.fitNote].join(" ").toLocaleLowerCase("tr").includes(q)));
  $("#count").textContent = `${list.length} / ${EVENTS.length} etkinlik gösteriliyor`;
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
          <div><dt>B2B Network Uyumu</dt><dd><span class="fit ${fitClass(e.fit)}">${esc(e.fit)}</span> ${esc(e.fitNote)}</dd></div>
          <div><dt>Önerilen Katılım Modeli</dt><dd>${esc(e.model)}</dd></div>
          <div class="wide"><dt>Öne Çıkarılacak Omada Çözüm &amp; Sunum Odağı</dt><dd>${esc(e.focus)}</dd></div>
        </dl>
      </div>
    </article>`).join("") : `<p class="empty">Eşleşen etkinlik bulunamadı.</p>`;
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
bindChips("#tierFilter", "tier");
bindChips("#yearFilter", "year");
$("#search").addEventListener("input", e => { state.q = e.target.value.trim(); render(); });
render();

// Kopyalama
function bindCopy(btnId, srcId) {
  const b = $(btnId);
  b.addEventListener("click", async () => {
    try { await navigator.clipboard.writeText($(srcId).innerText); b.textContent = "Kopyalandı ✓"; }
    catch { b.textContent = "Kopyalanamadı"; }
    setTimeout(() => (b.textContent = b.dataset.l), 1800);
  });
  b.dataset.l = b.textContent;
}
bindCopy("#copyPost", "#postText");
bindCopy("#copyPrompt", "#promptText");

// Mobil menü
const links = $("#navLinks");
$("#navToggle").addEventListener("click", () => links.classList.toggle("open"));
links.addEventListener("click", e => { if (e.target.tagName === "A") links.classList.remove("open"); });

// Okuma ilerlemesi + nav gölgesi
const bar = $("#progress"), nav = $("#nav");
addEventListener("scroll", () => {
  const h = document.documentElement;
  bar.style.width = (h.scrollTop / (h.scrollHeight - h.clientHeight) * 100) + "%";
  nav.classList.toggle("scrolled", h.scrollTop > 20);
}, { passive: true });

// Sayaç animasyonu
document.querySelectorAll("[data-count]").forEach(el => {
  const to = +el.dataset.count; let n = 0;
  const t = setInterval(() => { n++; el.textContent = n; if (n >= to) clearInterval(t); }, 900 / to);
});

// Görünürlükte beliren bölümler
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: 0.08 });
document.querySelectorAll(".card,.tier,.step,.callout,.post").forEach(el => { el.classList.add("reveal"); io.observe(el); });
