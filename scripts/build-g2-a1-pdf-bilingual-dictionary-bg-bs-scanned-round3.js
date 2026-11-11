#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");

const OUT_DIR = path.join(
  ROOT,
  "reports/g2-a1-production-current/pdf-bilingual-dictionary-bg-bs-scanned-round3",
);

function iiifPageOk(bsbId, pageNum) {
  const page = String(pageNum).padStart(5, "0");
  const url = `https://api.digitale-sammlungen.de/iiif/image/v2/${bsbId}_${page}/full/full/0/default.jpg`;
  try {
    const head = execFileSync("curl", ["-sI", "-L", "--max-time", "45", url], { encoding: "utf8" });
    const status = head.match(/^HTTP\/\S+\s+(\d+)/m);
    return { url, httpStatus: status ? Number(status[1]) : null, ok: head.includes("HTTP/2 200") || head.includes("HTTP/1.1 200") };
  } catch (e) {
    return { url, httpStatus: null, ok: false, error: String(e.message || e).slice(0, 80) };
  }
}

function estimateLastPage(bsbId, hiStart) {
  let lo = 1;
  let hi = hiStart;
  while (iiifPageOk(bsbId, hi).ok) {
    lo = hi;
    hi = Math.min(hi * 2, 5000);
    if (hi === lo) break;
  }
  while (lo + 1 < hi) {
    const mid = Math.floor((lo + hi) / 2);
    if (iiifPageOk(bsbId, mid).ok) lo = mid;
    else hi = mid;
  }
  return lo;
}

const CANDIDATES = {
  bg: [
    {
      id: "mdz-bsb-miladinov-vol1-1897",
      title:
        "Němsko-bǔlgarski i bǔlgarsko-němski rěčnik — I (Deutsch-Bulgarisches und Bulgarisch-Deutsches Wörterbuch, vol. I)",
      year: 1897,
      authorPublisher: "Ivan Anastasov Miladinov; Sofia (exemplar in Bayerische Staatsbibliothek)",
      direction: "DE→BG (vol. I of historical pair)",
      accessType: "Digitized page images (IIIF JPEG + MDZ viewer)",
      viewerUrl: "https://www.digitale-sammlungen.de/de/view/bsb11814571?page=1",
      resolveUrl: "http://mdz-nbn-resolving.de/urn:nbn:de:bvb:12-bsb11814571-5",
      iiifSample: "https://api.digitale-sammlungen.de/iiif/image/v2/bsb11814571_00017/full/full/0/default.jpg",
      europeana: "https://www.europeana.eu/item/1493/item_BGIINE4U6JNXCID35TGLG4SEG4ONO5FH",
      bsbId: "bsb11814571",
      ocrRequired: false,
      betterThanRound2: true,
    },
    {
      id: "mdz-bsb-de-bg-woerterbuch-1881-vol1",
      title: "Bulgarisch-deutsches und deutsch-bulgarisches Wörterbuch, 1",
      year: 1881,
      authorPublisher: "Sofia, 1881 (2 Teile; BSB scan; cf. Swiss library catalog)",
      direction: "DE↔BG (vol. 1 of 2)",
      accessType: "Digitized page images (IIIF + MDZ viewer)",
      viewerUrl: "https://www.digitale-sammlungen.de/de/view/bsb11646155?page=1",
      resolveUrl: "http://mdz-nbn-resolving.de/urn:nbn:de:bvb:12-bsb11646155-0",
      iiifSample: "https://api.digitale-sammlungen.de/iiif/image/v2/bsb11646155_00007/full/full/0/default.jpg",
      bsbId: "bsb11646155",
      ocrRequired: false,
      betterThanRound2: "partial scan length vs Miladinov vol I",
    },
    {
      id: "mdz-bsb-de-bg-woerterbuch-1881-vol2",
      title: "Bulgarisch-deutsches und deutsch-bulgarisches Wörterbuch, 2",
      year: 1881,
      authorPublisher: "Sofia, 1881 (BSB scan)",
      direction: "DE↔BG (vol. 2 of 2)",
      accessType: "Digitized page images (IIIF + MDZ viewer)",
      viewerUrl: "https://www.digitale-sammlungen.de/de/view/bsb11646156?page=1",
      resolveUrl: "http://mdz-nbn-resolving.de/urn:nbn:de:bvb:12-bsb11646156-6",
      iiifSample: "https://api.digitale-sammlungen.de/iiif/image/v2/bsb11646156_00003/full/full/0/default.jpg",
      bsbId: "bsb11646156",
      ocrRequired: false,
      betterThanRound2: "same 1881 set",
    },
    {
      id: "hathitrust-miladinov-vol2",
      title: "Ni︠e︡msko-bŭlgarski i bŭlgarsko-ni︠e︡mski rechnik — vol. 2 (Pŭlen bŭlgarsko-ni︠e︡mski)",
      year: "1893–1908",
      authorPublisher: "Ivan A. Miladinov",
      direction: "BG→DE (vol. 2)",
      accessType: "Library page viewer (HathiTrust full view; scan pages in browser)",
      viewerUrl: "https://babel.hathitrust.org/cgi/pt?id=harvard.32044086444973",
      catalogUrl: "https://catalog.hathitrust.org/Record/102751195",
      ocrRequired: false,
      automationNote: "HTTP 403 bot wall in cloud probe; valid for human/library session",
      betterThanRound2: "confirms BG→DE pair path",
    },
    {
      id: "multislavdict-miladinov-1927",
      title: "Bulgarisch-Deutsches Handwörterbuch / Българо-немски пъленъ речникъ",
      year: 1927,
      authorPublisher: "Ivan Miladinov; MultiSlavDict / Slavistik-Portal",
      direction: "BG→DE (transcribed, page-navigable HTML)",
      accessType: "Searchable digitized text by page (not facsimile PDF)",
      viewerUrl: "https://slavistik-portal.de/en/dicthub/dict-milad.html",
      ocrRequired: false,
      betterThanRound2: "supplement for BG→DE lookup; not image scan",
    },
    {
      id: "ia-stameva-2004-lcp",
      title: "Wörterbuch Deutsch–Bulgarisch, Bulgarisch–Deutsch (Stamcheva-Andreeva)",
      year: 2004,
      authorPublisher: "Виолина Стамчева-Андреева",
      direction: "DE↔BG",
      accessType: "IA LCP borrow (~910 jp2 pages exist; BookReader 403 without login)",
      viewerUrl: "https://archive.org/details/nemskobalgarskib00stam",
      ocrRequired: "later OCR possible if borrow unlocked",
      betterThanRound2: "modern scope but gated",
    },
    {
      id: "nsi-statlib-miladinov",
      title: "NSI Digital Library — Miladinov volumes",
      year: "1893 / 1929",
      authorPublisher: "National Statistical Institute, Sofia",
      direction: "DE→BG + BG→DE catalog entries",
      accessType: "Institutional digitized holdings (Cloudflare in automation)",
      catalogVol1: "https://statlib.nsi.bg/bg/v/NSI010008337",
      catalogVol2: "https://statlib.nsi.bg/en/v/NSI010008318",
      ocrRequired: false,
      betterThanRound2: "same institution, not probed open here",
    },
  ],
  bs: [
    {
      id: "vukic-2018-print",
      title: "Njemačko-bosanski i bosansko-njemacki rječnik",
      year: 2018,
      authorPublisher: "Mario Vukić (priredio); Dječija knjiga, Sarajevo",
      direction: "DE↔BS (single printed volume)",
      accessType: "Physical purchase only (bookstore) — not an audit source",
      auditVerdict: "REJECTED_PHYSICAL_PURCHASE_ONLY",
      catalogUrl: "https://bookstore.ba/knjiga/njemacko-bosanski-i-bosansko-njemacki-rjecnik",
      approximateScope: "~836 pp",
      ocrRequired: "N/A",
      note: "Known full-scope lexicon in BiH, but only as a buyable printed book — excluded from BEST_FOUND.",
    },
    {
      id: "vukic-1998-heidelberg",
      title: "Njemačko-bosanski i bosansko-njemacki rječnik (2. izd.)",
      year: 1998,
      authorPublisher: "Mario Vukić; Svjetlost, Sarajevo",
      direction: "DE↔BS",
      accessType: "Physical library copy — no digitized scan",
      auditVerdict: "REJECTED_NO_DIGITIZED_ACCESS",
      catalogUrl: "https://katalog.ub.uni-heidelberg.de/titel/9900267",
      approximateScope: "857 S.",
      ocrRequired: "N/A",
    },
    {
      id: "marojevic-1999-school",
      title: "Njemačko-bosanski rječnik za osnovnu školu",
      year: 1999,
      authorPublisher: "Slavko Marojević, Milica Marojević; Sarajevo Publishing",
      direction: "DE→BS (school, not full encyclopedic)",
      accessType: "Physical purchase only",
      auditVerdict: "REJECTED_PHYSICAL_PURCHASE_ONLY",
      catalogUrl: "https://www.knjiga.ba/strani-jezici/rjecnici/jednojezicni-rjecnici/njemacko-bosanski-rjecnik-za-osnovnu-skolu-b1699.html",
      ocrRequired: "N/A",
    },
    {
      id: "kruzic-hr-rejected",
      title: "Njemačko-hrvatski rječnik (Ante Kružić)",
      year: null,
      authorPublisher: "Ante Kružić",
      direction: "DE↔HR — not valid for bs",
      accessType: "Open IA scan (wrong language)",
      viewerUrl: "https://archive.org/details/njemacko_hrvatski_rjecnik-ante_kruzic",
      rejected: true,
      ocrRequired: false,
      betterThanRound2: false,
    },
  ],
};

const BEST_FOUND_SOURCE = {
  bg: {
    id: "mdz-bsb-miladinov-vol1-1897",
    pairWith: "hathitrust-miladinov-vol2 (BG→DE) or multislavdict-miladinov-1927",
    rationale:
      "Apstiprināts **reāli atverams lapu attēlu** avots: BSB/MDZ IIIF (vol. I, 1897, Miladinov DE→BG; IIIF indeksa probes ~636–790 lapu atkarībā no caurumu skaita). OCR nav vajadzīgs skatīšanai. Pilnam DE↔BG pārim pievienot HathiTrust vol. II (BG→DE skeni) vai MultiSlavDict 1927.",
  },
  bs: {
    id: "NOT_FOUND_DIGITIZED",
    rationale:
      "Digitizēts DE↔BS vārdnīcas avots **nav atrasts**. Vukić / Marojević / knižaru katalogi ir **tikai nopērkamas fiziskas grāmatas** — netiek lietoti kā BEST_FOUND. hr Kružić (atvērts IA skens) nav bosniešu mērķvaloda.",
  },
};

function main() {
  const generatedAt = new Date().toISOString();
  const pageCounts = {};
  for (const id of ["bsb11814571", "bsb11646155", "bsb11646156"]) {
    pageCounts[id] = estimateLastPage(id, id === "bsb11814571" ? 400 : 50);
  }

  const enriched = { bg: [], bs: [] };
  for (const [lang, list] of Object.entries(CANDIDATES)) {
    enriched[lang] = list.map((c) => {
      if (!c.bsbId) return { ...c, pageImageProbe: null };
      const last = pageCounts[c.bsbId];
      const first = iiifPageOk(c.bsbId, 1);
      const lastP = iiifPageOk(c.bsbId, last);
      return {
        ...c,
        pageImageProbe: {
          firstPage: first,
          lastPageIndexProbed: last,
          lastPage: lastP,
          pageViewable: first.ok && lastP.ok,
        },
        approximateScope: c.approximateScope || `~${last} IIIF page images (probe)`,
      };
    });
  }

  const report = {
    schemaVersion: "g2-a1-pdf-bilingual-dictionary-bg-bs-scanned-round3-v1",
    generatedAt,
    scope: "bg + bs only; accepts scan/page-image access without OCR",
    languages: enriched,
    bestFoundSource: BEST_FOUND_SOURCE,
    methodology:
      "Europeana/DDB discovery + MDZ IIIF HTTP probes + prior round-2 negatives for bs. No production/MASTER/OWNER changes.",
  };

  fs.mkdirSync(OUT_DIR, { recursive: true });
  const jsonPath = path.join(OUT_DIR, "pdf-bilingual-dictionary-bg-bs-scanned-round3.json");
  fs.writeFileSync(jsonPath, `${JSON.stringify(report, null, 2)}\n`);

  const md = [
    "# Digitized dictionary discovery — round 3 (`bg`, `bs` scans)",
    "",
    `Generated: ${generatedAt}`,
    "",
    "Pieņemts: **lapu attēli / skeni** (OCR nav obligāts).",
    "",
    "## BEST_FOUND_SOURCE",
    "",
    `### bg — \`${BEST_FOUND_SOURCE.bg.id}\``,
    "",
    BEST_FOUND_SOURCE.bg.rationale,
    "",
    `- **Viewer:** https://www.digitale-sammlungen.de/de/view/bsb11814571?page=1`,
    `- **IIIF piemērs:** https://api.digitale-sammlungen.de/iiif/image/v2/bsb11814571_00017/full/full/0/default.jpg`,
    `- **Pāris BG→DE:** ${BEST_FOUND_SOURCE.bg.pairWith}`,
    "",
    `### bs — \`${BEST_FOUND_SOURCE.bs.id}\``,
    "",
    BEST_FOUND_SOURCE.bs.rationale,
    "",
  ].join("\n");

  fs.writeFileSync(path.join(OUT_DIR, "pdf-bilingual-dictionary-bg-bs-scanned-round3.md"), `${md}\n`);
  console.log(JSON.stringify({ ok: true, jsonPath, pageCounts, bestFoundSource: BEST_FOUND_SOURCE }, null, 2));
}

main();
