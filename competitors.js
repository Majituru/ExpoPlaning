// Competitor & ecosystem presence per event.
// `confirmed`  = facts found in public sources (see verification log on the page).
// `rivals`     = competitor exhibitors confirmed from official lists (none confirmed so far).
// `claimed`    = statements from the internal source report that could NOT be confirmed.
const COMP_EVENTS = [
  {
    "ids": [
      2
    ],
    "name": "HOSTECH by TUSİD Istanbul",
    "when": "10–14 Nov 2026",
    "confirmed": [
      "Scope: hotel, restaurant, café and patisserie equipment & technologies (kitchen, laundry, cleaning/hygiene, furniture, lighting, HVAC, security/fire, digital cash register & payment systems)",
      "Organizer: TÜYAP · trade visitors only · 10–14 Nov 2026",
      "Example confirmed exhibitor: GGM Gastro (Hall 12A, Booth 23A), kitchen equipment, not IT",
      "Official alphabetical exhibitor list exists on hostechbytusid.com (could not be opened from this environment)"
    ],
    "rivals": [],
    "claimed": {
      "exhibitors": [
        "Adisyo Bilişim (Hall F, Booth 450 – cloud POS)",
        "ICM Energy & Cooling Technologies",
        "IT, hotel automation and POS hardware suppliers"
      ],
      "rivals": [
        "Ruijie/Reyee",
        "Ubiquiti (UniFi)",
        "Zyxel",
        "Keenetic",
        "Aruba Instant On"
      ],
      "estimate": "High"
    },
    "form": "Shown as “recommended AP / PoE switch” on POS vendors’ and IT distributors’ booths.",
    "take": "Mostly a HoReCa equipment audience. No network-vendor exhibitor is confirmed, and the earlier listed names were not found on their own sites. Moved from Tier 1 to Tier 3 in the re-evaluation; check the official exhibitor list before spending more."
  },
  {
    "ids": [
      3
    ],
    "name": "AKTOB Resort Tourism Congress",
    "when": "25–26 Nov 2026",
    "confirmed": [
      "15th edition (Nov 2025) main sponsor: Türkiye İş Bankası; DenizBank is tied to earlier editions only",
      "No 2026 (16th) sponsor list found publicly yet"
    ],
    "rivals": [],
    "claimed": {
      "exhibitors": [
        "DenizBank (main sponsor)",
        "H3C (lead sponsor)",
        "Mintyfi (platinum sponsor)",
        "Olbia Bilişim",
        "F2 Connect / F2 Cloud",
        "Maipu",
        "Winncom"
      ],
      "rivals": [
        "H3C",
        "HPE Aruba",
        "Ruckus",
        "Huawei (GPON / Wi-Fi 7)",
        "Türk Telekom / Turkcell"
      ],
      "estimate": "Very High"
    },
    "form": "VIP sponsorship tables in the foyer and speakers on the “AI and Smart Operations in Tourism” panel.",
    "take": "C-level audience; H3C, Maipu and regional integrators sponsor aggressively. Reach GMs directly through stage / panel sponsorship."
  },
  {
    "ids": [
      4,
      19
    ],
    "name": "TTI Izmir",
    "when": "2–4 Dec 2026 · 1–3 Dec 2027",
    "confirmed": [],
    "rivals": [],
    "claimed": {
      "exhibitors": [
        "Destinations, hotels, municipalities and travel agencies"
      ],
      "rivals": [
        "Rarely a direct global network-vendor booth",
        "Aegean local computer / low-current dealers attend as visitors or small exhibitors"
      ],
      "estimate": "Low"
    },
    "form": "Visitors or small exhibitors only.",
    "take": "Low hardware competition. A B2B meeting table with an Aegean integrator is enough."
  },
  {
    "ids": [
      5,
      20
    ],
    "name": "Hotel-Tech Antalya",
    "when": "10–12 Dec 2026 · 9–11 Dec 2027",
    "confirmed": [
      "4th edition · 10–12 Dec 2026 · NEST Convention Center, Belek · organizer: Plan T",
      "Categories: hotel technical equipment, electrical, energy, HVAC, automation, fire systems, building materials, laundry, pool/treatment",
      "No named exhibitor list found publicly; the earlier “internet / network systems” product group was not confirmed"
    ],
    "rivals": [],
    "claimed": {
      "exhibitors": [
        "Official product groups: music systems, TV/satellite, internet systems, phone/PBX, automation and security",
        "Art-In Systems",
        "AYZ Bilişim",
        "Lotis Bilişim",
        "Netko Sistem",
        "Bimatek",
        "GSG Technology",
        "Televox",
        "Toptel",
        "Procom"
      ],
      "rivals": [
        "H3C",
        "Ruijie/Reyee",
        "Zyxel",
        "Huawei (GPON/ONT)",
        "HPE Aruba",
        "Ruckus",
        "Grandstream",
        "Hikvision",
        "Dahua"
      ],
      "estimate": "Very High"
    },
    "form": "On Antalya low-current and hotel-system integrators’ booths: live cabinets, fiber GPON and wall-plate AP demos.",
    "take": "Hotel technical managers compare products directly here. Rivals are present through integrators; an Omada + VIGI integrated booth is a must."
  },
  {
    "ids": [
      6
    ],
    "name": "ANFAŞ Hotel Equipment",
    "when": "12–15 Jan 2027",
    "confirmed": [
      "12–15 Jan 2027 · ANFAŞ Antalya · held together with ANFAŞ Food Product",
      "2027 announcements highlight professional kitchen & cooling equipment, hotel/restaurant furniture and storage; smart-room / IT is not mentioned",
      "240+ companies expected (figure belongs to the food fair)"
    ],
    "rivals": [],
    "claimed": {
      "exhibitors": [
        "Smart room technologies (IoT, voice control, smart locks), concierge solutions and IT systems categories",
        "Turkcell and other telecom events at ANFAŞ Expo Center",
        "200+ suppliers (2026/2027 full list is gated)"
      ],
      "rivals": [
        "Huawei",
        "H3C",
        "HPE Aruba",
        "Ruckus",
        "Zyxel",
        "Ruijie",
        "ASSA ABLOY / VingCard (smart lock / IoT)",
        "Karel, Telesis (IPTV / PBX)",
        "LG / Samsung hospitality TV integrators"
      ],
      "estimate": "Very High"
    },
    "form": "“Smart room + IPTV + Wi-Fi” bundles.",
    "take": "The main pre-season budget fair. Build the flagship Omada booth here."
  },
  {
    "ids": [
      7
    ],
    "name": "ACE of M.I.C.E. Exhibition",
    "when": "January 2027",
    "confirmed": [
      "Organizer: Tourism Media Group; the most recent edition found (Jan 2025) was held in Northern Cyprus, not Istanbul",
      "No 2027 Istanbul edition, exhibitor or sponsor announcement found"
    ],
    "rivals": [],
    "claimed": {
      "exhibitors": [
        "Organizer: Dream Project",
        "Congress centers, event hotels, AV and event-technology firms"
      ],
      "rivals": [
        "Türk Telekom / Turkcell (event Wi-Fi sponsorships, e.g. AKM Türk Telekom Wi-Fi model)",
        "Cisco Meraki",
        "HPE Aruba",
        "Ruckus"
      ],
      "estimate": "Medium-High"
    },
    "form": "Event Wi-Fi sponsorships.",
    "take": "The “Wi-Fi that never drops with thousands of users” perception belongs to rivals. Break it with EAP783 (Wi-Fi 7) via event Wi-Fi sponsorship."
  },
  {
    "ids": [
      8
    ],
    "name": "IZCOREX Alanya & Izmir",
    "when": "20–22 & 28–30 Jan 2027",
    "confirmed": [],
    "rivals": [],
    "claimed": {
      "exhibitors": [
        "Organizer: Başak Fuar",
        "Regional HoReCa, kitchen and technical suppliers"
      ],
      "rivals": [
        "Ruijie/Reyee",
        "Ubiquiti",
        "Keenetic",
        "Tenda",
        "Zyxel",
        "Local security / camera dealers"
      ],
      "estimate": "Medium"
    },
    "form": "Price/performance rivals exhibit with local dealers.",
    "take": "Price competition at 3–4 star regional hotels and apart properties. Exhibit with a local dealer."
  },
  {
    "ids": [
      10
    ],
    "name": "Tourism Investment Forum – TIF",
    "when": "February 2027",
    "confirmed": [
      "TIF 2026 (5th edition, 10–11 Feb 2026): main sponsor Türkiye İş Bankası; supported by the Presidency Investment Office and TGA",
      "No “automation & technology sponsor” found; digitalization appears only as a theme"
    ],
    "rivals": [],
    "claimed": {
      "exhibitors": [
        "Dedicated “Automation & Technology Sponsors” category on the TIF site",
        "1000 Yatırımlar Holding technology executives",
        "Financial institutions (TKYB, Ziraat, World Bank)",
        "International hotel chains"
      ],
      "rivals": [
        "Cisco (Meraki)",
        "HPE Aruba",
        "Huawei Enterprise",
        "Large system integrators and telecom operators"
      ],
      "estimate": "High"
    },
    "form": "Hotel chains’ global Approved Vendor List (AVL) discussions and C-level sponsorships.",
    "take": "On new 5-star and chain builds, rivals use their global AVL advantage. Sponsor with TCO and cloud-management messaging."
  },
  {
    "ids": [
      11,
      15
    ],
    "name": "EMITT 2027 & ITF Istanbul",
    "when": "Feb 2027 · 23–24 Sep 2027",
    "confirmed": [],
    "rivals": [],
    "claimed": {
      "exhibitors": [
        "“IT / Technology Companies” category in the ITF exhibitor profile"
      ],
      "rivals": [
        "Travel-tech & PMS ecosystem: SAN TSG, Paximum, ElektraWeb, Protel",
        "Corporate ISPs / telecom firms"
      ],
      "estimate": "Medium"
    },
    "form": "Software vendors lead rather than hardware rivals.",
    "take": "Plan shared visibility with software partners."
  },
  {
    "ids": [
      12
    ],
    "name": "HOTEL SHOW 2027 Bodrum",
    "when": "18–20 Mar 2027",
    "confirmed": [
      "18–20 Mar 2027 · organizer: Başak Fuar",
      "2026 edition: about 60 companies and 300+ brands, supported by Bodrum Municipality and BODER; BODTO’s role is not confirmed"
    ],
    "rivals": [],
    "claimed": {
      "exhibitors": [
        "Supported by the Tourism Technical Managers Association and BODTO"
      ],
      "rivals": [
        "Ubiquiti (UniFi)",
        "HPE Aruba",
        "Ruckus",
        "Ruijie",
        "Local Muğla / Bodrum low-current and yacht-marina network integrators"
      ],
      "estimate": "High"
    },
    "form": "Regional integrators and brands in the luxury segment.",
    "take": "High competition on outdoor APs and aesthetic design at luxury, beach and marina sites."
  },
  {
    "ids": [
      13
    ],
    "name": "ELES Expo 2027",
    "when": "15–17 Apr 2027",
    "confirmed": [
      "2026 edition was held 23–25 Apr 2026 (organizer ITC Fuarcılık); no 2027 edition or exhibitor list published yet",
      "Exhibitor profile: electrical, lighting, panel equipment, energy systems, building automation"
    ],
    "rivals": [],
    "claimed": {
      "exhibitors": [
        "Cengiz Kablo",
        "Royal Kablo",
        "A Kablo",
        "Proton",
        "Electran",
        "Erem Kablo (structured cabling, energy and smart-building technologies)"
      ],
      "rivals": [
        "Schneider Electric",
        "Legrand",
        "Siemens (smart building / KNX)",
        "Huawei",
        "Zyxel",
        "Ruijie",
        "Planet",
        "D-Link",
        "Structured cabling / rack makers (Canovate, Lande)"
      ],
      "estimate": "Very High"
    },
    "form": "Low-current, cabling and industrial switch players.",
    "take": "Project firms that write hotel and commercial electrical / low-current specs are here. Critical for Omada PoE++ switches and fiber."
  },
  {
    "ids": [
      16
    ],
    "name": "Antalya Tourism Fair – ATF",
    "when": "October 2027",
    "confirmed": [
      "2026 edition (8th) at ANFAŞ: 100+ countries and 40,000+ visitors expected; themes include digitalization and AI",
      "Qure Technology, Snap Turizm, Tumeva and the Focus Stage claim were not found in public sources"
    ],
    "rivals": [],
    "claimed": {
      "exhibitors": [
        "Qure Technology",
        "Snap Turizm ve Bilişim A.Ş.",
        "Tumeva Bilişim",
        "Focus Stage: Setur & Holiday Heroes (AI and travel-tech sessions)"
      ],
      "rivals": [
        "Antalya Teknokent / ATSO integrators: Defline Teknoloji, Ecerem Bilişim, Olbia Bilişim",
        "H3C and Maipu partners (via integrators)"
      ],
      "estimate": "High"
    },
    "form": "Runs alongside Antalya Tourism Technology Day, so all regional IT managers and rival integrators are active.",
    "take": "High competition: regional IT managers and rival integrators are all on site."
  },
  {
    "ids": [
      1,
      9,
      17
    ],
    "name": "Gastronomy & OTA summits",
    "when": "Uzakrota · Culinary Forum · F-Summit · Gastromasa",
    "confirmed": [],
    "rivals": [],
    "claimed": {
      "exhibitors": [
        "Food, kitchen equipment, airlines and online travel agencies (OTAs)"
      ],
      "rivals": [
        "No direct enterprise network vendor (Aruba, Ruckus, Zyxel, Huawei etc.) exhibits hardware here"
      ],
      "estimate": "Very Low"
    },
    "form": "None.",
    "take": "Rivals also skip these. Moving booth budget to Tier 1 fairs is the right competitive move."
  }
];

// Brand × event presence matrix (from the internal source report — NOT independently confirmed). Keys = column ids below; 1 = named at the event, 2 = through partners/integrators.
const MATRIX_COLS = [["HOSTECH","hos"],["AKTOB","akt"],["Hotel-Tech","ht"],["ANFAŞ","anf"],["ACE MICE","ace"],["IZCOREX","izc"],["TIF","tif"],["Bodrum","bod"],["ELES","eles"],["ATF","atf"]];
const MATRIX = [
  ["H3C",                    {akt:1, ht:1, anf:1, atf:2}],
  ["Maipu",                  {akt:1, atf:2}],
  ["HPE Aruba",              {hos:1, akt:1, ht:1, anf:1, ace:1, tif:1, bod:1}],
  ["Ruckus (CommScope)",     {akt:1, ht:1, anf:1, ace:1, bod:1}],
  ["Huawei",                 {akt:1, ht:1, anf:1, tif:1, eles:1}],
  ["Ruijie / Reyee",         {hos:1, ht:1, anf:1, izc:1, bod:1, eles:1}],
  ["Zyxel",                  {hos:1, ht:1, anf:1, izc:1, eles:1}],
  ["Ubiquiti (UniFi)",       {hos:1, izc:1, bod:1}],
  ["Cisco Meraki",           {ace:1, tif:1}],
  ["Keenetic",               {hos:1, izc:1}],
  ["Tenda",                  {izc:1}],
  ["D-Link / Planet",        {eles:1}],
  ["Grandstream / CCTV",     {ht:1}],
  ["Türk Telekom / Turkcell",{akt:1, anf:1, ace:1, tif:1}]
];

const INTEGRATORS = [
  "Olbia Bilişim", "F2 Connect / F2 Cloud", "Art-In Systems", "AYZ Bilişim", "Winncom", "Lotis Bilişim", "Netko Sistem",
  "Bimatek", "Beytepe Bilişim", "GSG Technology", "Televox", "Toptel", "Procom", "Defline Teknoloji Çözümleri", "Ecerem Bilişim"
];

const ECOSYSTEM = [
  { title: "Hotspot / Captive Portal & logging software", names: ["Mintyfi"], why: "Mandatory logging (Law 5651) and PMS-integrated welcome screens. Full compatibility with Omada Cloud Controller gives hotel IT a turnkey solution." },
  { title: "Hotel automation (PMS) & cloud POS", names: ["Adisyo Bilişim", "SAN TSG", "Paximum", "Tumeva Bilişim", "ElektraWeb", "Qure Technology", "Bilnex", "Protel"], why: "Not hardware rivals. Their handhelds and POS tablets drop on weak Wi-Fi, so “Powered by TP-Link Omada” on their booths creates cross traffic." }
];
