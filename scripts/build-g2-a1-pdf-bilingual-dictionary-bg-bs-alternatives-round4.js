#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");

const OUT_DIR = path.join(
  ROOT,
  "reports/g2-a1-production-current/pdf-bilingual-dictionary-bg-bs-alternatives-round4",
);

const DE_LEMMAS = ["Haus", "arbeiten", "Kleingeld", "bewirten", "Grenzkonflikt", "Machtgier"];

/** Alternatives for languages with PARTIAL / NOT_FOUND digitized chains */
const ALTERNATIVES = {
  bg: [
    {
      id: "stack-mdz-miladinov-v1-plus-ht-v2",
      role: "RECOMMENDED_STACK",
      title: "Miladinov DE→BG (MDZ vol. I) + Miladinov BG→DE (HathiTrust vol. II)",
      year: "1897 / 1893–1908",
      authorPublisher: "Ivan Miladinov",
      direction: "DE↔BG (2 volumes, complementary)",
      accessType: "Page images (IIIF + HathiTrust viewer)",
      deToTarget: {
        viewerUrl: "https://www.digitale-sammlungen.de/de/view/bsb11814571?page=1",
        bsbId: "bsb11814571",
      },
      targetToDe: {
        viewerUrl: "https://babel.hathitrust.org/cgi/pt?id=harvard.32044086444973",
        catalogUrl: "https://catalog.hathitrust.org/Record/102751195",
      },
      pilotNote: "Vol. I OCR sample: Haus/arbeiten hit; modern compounds often absent in 1897 lexicon",
      vsPrevious: "Better than NSI-only — vol. I now verified open (MDZ)",
    },
    {
      id: "multislavdict-miladinov-1927",
      role: "BG_TO_DE_SEARCHABLE",
      title: "Bulgarisch-Deutsches Handwörterbuch (MultiSlavDict transcription)",
      year: 1927,
      authorPublisher: "Ivan Miladinov; Slavistik-Portal",
      direction: "BG→DE (full text DB, page navigation)",
      accessType: "Digitized text (not facsimile PDF)",
      viewerUrl: "https://slavistik-portal.de/en/dicthub/dict-milad.html",
      pilotNote: "Use for BG→DE and reverse lookup; complements MDZ vol. I",
      vsPrevious: "New vs round-2 as explicit BG→DE leg",
    },
    {
      id: "mdz-sofia-1881-2vol",
      role: "ALTERNATIVE_BILINGUAL",
      title: "Bulgarisch-deutsches und deutsch-bulgarisches Wörterbuch (Sofia, 2 vols.)",
      year: 1881,
      authorPublisher: "Sofia; BSB scans",
      direction: "DE↔BG (both vols. on MDZ)",
      accessType: "Page images (shorter scans ~108 + ~76 IIIF pages)",
      viewerVol1: "https://www.digitale-sammlungen.de/de/view/bsb11646155?page=1",
      viewerVol2: "https://www.digitale-sammlungen.de/de/view/bsb11646156?page=1",
      pilotNote: "Smaller digitization; fallback if Miladinov vol. I gaps",
      vsPrevious: "Additional open MDZ pair",
    },
    {
      id: "weigand-dorich-1913-hathi",
      role: "INVESTIGATE_MANUAL",
      title: "Bulgarisch-Deutsches Wörterbuch (Weigand & Dorich)",
      year: 1913,
      authorPublisher: "Gustav Weigand, Aleksandăr Dorich; Otto Holtze's Nachfolger",
      direction: "BG→DE (standard 20th-c. historical)",
      accessType: "HathiTrust page images (US access; no IA/MDZ mirror found)",
      catalogHint: "https://onlinebooks.library.upenn.edu/webbin/book/lookupid?key=ha012468233",
      pilotNote: "Not probed open in automation; candidate for human Hathi session",
      vsPrevious: "Newer/larger than 1881/1897 — needs manual viewer verification",
    },
    {
      id: "ia-stameva-2004-lcp",
      role: "REJECTED_GATED",
      title: "Stamcheva-Andreeva DE↔BG (2004)",
      year: 2004,
      accessType: "IA LCP/Borrow — not open page access",
      viewerUrl: "https://archive.org/details/nemskobalgarskib00stam",
      pilotNote: "Would cover modern lemmas; blocked without borrow",
      vsPrevious: "Still not audit-grade open access",
    },
  ],
  bs: [
    {
      id: "NOT_FOUND_DIGITIZED",
      role: "STATUS",
      title: "No digitized general DE↔BS dictionary located",
      pilotNote: "0/6 pilot lemmas; no page-image chain",
    },
    {
      id: "karadzic-deutsch-serbisches-1877-ia",
      role: "REJECTED_WRONG_LANGUAGE",
      title: "Deutsch-serbisches Wörterbuch (Vuk Karadžić)",
      year: 1877,
      authorPublisher: "Vuk Stefanović Karadžić",
      direction: "DE↔SR (Serbian)",
      accessType: "Open IA scan + OCR",
      viewerUrl: "https://archive.org/details/deutschserbisch00karagoog",
      pdfUrl: "https://archive.org/download/deutschserbisch00karagoog/deutschserbisch00karagoog.pdf",
      rejectReason: "Serbian (sr), not Bosnian (bs) — user rule: no hr/sr proxy",
      pilotSample: "arbeiten in OCR; not valid for bs audit",
    },
    {
      id: "kruzic-deutsch-hrvatski-ia",
      role: "REJECTED_WRONG_LANGUAGE",
      title: "Njemačko-hrvatski rječnik (Ante Kružić)",
      direction: "DE↔HR",
      viewerUrl: "https://archive.org/details/njemacko_hrvatski_rjecnik-ante_kruzic",
      rejectReason: "Croatian (hr), not bs",
    },
    {
      id: "vukic-marojevic-print",
      role: "REJECTED_PHYSICAL_PURCHASE",
      title: "Vukić / Marojević DE↔BS (print only)",
      rejectReason: "Buyable physical books — not digitized audit sources",
    },
    {
      id: "nub-bih-digital-collections",
      role: "INSTITUTIONAL_UNVERIFIED",
      title: "NUB BiH Digitalne kolekcije",
      accessType: "https://kolekcije.nub.ba/ — human search required (Cloudflare in automation)",
      pilotNote: "No DE↔BS rječnik hit confirmed this run",
    },
    {
      id: "dict-cc-de-bs",
      role: "REJECTED_AGGREGATOR",
      title: "dict.cc DE-BS",
      rejectReason: "Aggregator / crowd wiki — not institutional dictionary scan",
    },
  ],
};

const BEST_FOUND_SOURCE = {
  bg: {
    id: "stack-mdz-miladinov-v1-plus-ht-v2",
    rationale:
      "Labākais **atvērtais** digitizētais risinājums nav viena jauna grāmata, bet **pāris**: MDZ Miladinov vol. I (DE→BG, verificēts IIIF) + HathiTrust vol. II vai MultiSlavDict 1927 (BG→DE). Weigand–Dorich 1913 paliek manuāli pārbaudāms HathiTrust. Modernie pilotlemmas (Kleingeld u.c.) vēsturiskās vārdnīcās bieži trūkst.",
  },
  bs: {
    id: "NOT_FOUND_DIGITIZED",
    rationale:
      "Alternatīvu meklēšana apstiprina: **nav** digitizētas vispārīgas DE↔BS vārdnīcas. Atvērtais Karadžić DE–**SR** un Kružić DE–**HR** ir **noraidīti**; Vukić/Marojević — tikai drukātas grāmatas.",
  },
};

function ocrHits(ocrUrl, lemmas) {
  try {
    const text = String(
      execFileSync("curl", ["-sL", "--max-time", "120", ocrUrl], { maxBuffer: 32 * 1024 * 1024 }),
    );
    return Object.fromEntries(
      lemmas.map((l) => {
        const re = new RegExp(`\\b${l.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "i");
        const m = text.match(re);
        return [
          l,
          {
            found: Boolean(m),
            snippet: m ? text.slice(m.index, m.index + 100).replace(/\s+/g, " ").trim() : null,
          },
        ];
      }),
    );
  } catch (e) {
    return Object.fromEntries(lemmas.map((l) => [l, { found: false, error: String(e.message || e).slice(0, 80) }]));
  }
}

function main() {
  const generatedAt = new Date().toISOString();
  const karadzicPilot = ocrHits(
    "https://archive.org/download/deutschserbisch00karagoog/deutschserbisch00karagoog_djvu.txt",
    DE_LEMMAS,
  );

  const report = {
    schemaVersion: "g2-a1-pdf-bilingual-dictionary-bg-bs-alternatives-round4-v1",
    generatedAt,
    pilotLemmasDe: DE_LEMMAS,
    scope: "Alternative dictionary search for bg (PARTIAL) and bs (NOT_FOUND)",
    alternatives: ALTERNATIVES,
    bestFoundSource: BEST_FOUND_SOURCE,
    rejectedPilotCheck: {
      karadzic1877DeSr: {
        note: "Shown only to prove open scan exists but wrong language for bs",
        deToTarget: karadzicPilot,
      },
    },
    methodology:
      "Europeana, IA, MDZ, NUB, OpenLibrary, prior rounds. No production/MASTER/OWNER changes.",
  };

  fs.mkdirSync(OUT_DIR, { recursive: true });
  const jsonPath = path.join(OUT_DIR, "pdf-bilingual-dictionary-bg-bs-alternatives-round4.json");
  fs.writeFileSync(jsonPath, `${JSON.stringify(report, null, 2)}\n`);

  const md = [
    "# Alternative dictionary discovery — round 4 (`bg`, `bs`)",
    "",
    `Generated: ${generatedAt}`,
    "",
    "## BEST_FOUND_SOURCE (after alternative search)",
    "",
    "### bg",
    "",
    `- **\`${BEST_FOUND_SOURCE.bg.id}\`**`,
    "",
    BEST_FOUND_SOURCE.bg.rationale,
    "",
    "### bs",
    "",
    `- **\`${BEST_FOUND_SOURCE.bs.id}\`**`,
    "",
    BEST_FOUND_SOURCE.bs.rationale,
    "",
    "## bg — alternative candidates",
    "",
    "| ID | Loma | Gads | Pieeja |",
    "|----|------|------|--------|",
    "| stack-mdz-miladinov-v1-plus-ht-v2 | Miladinov pāris | 1897 / 1893–1908 | MDZ + HathiTrust |",
    "| multislavdict-miladinov-1927 | MultiSlavDict | 1927 | Meklējams teksts |",
    "| mdz-sofia-1881-2vol | Sofia 2 sēj. | 1881 | MDZ IIIF (īsāks) |",
    "| weigand-dorich-1913-hathi | Weigand & Dorich | 1913 | HathiTrust (manuāli) |",
    "",
    "## bs — noraidījumi / institucionāli",
    "",
    "| ID | Kāpēc nav audit avots |",
    "|----|------------------------|",
    "| karadzic-deutsch-serbisches-1877-ia | Atvērts, bet **sr**, ne bs |",
    "| kruzic-deutsch-hrvatski-ia | **hr**, ne bs |",
    "| vukic-marojevic-print | Tikai **nopērkamas** grāmatas |",
    "| nub-bih-digital-collections | Nav apstiprināts DE↔BS hits |",
    "",
  ].join("\n");

  fs.writeFileSync(path.join(OUT_DIR, "pdf-bilingual-dictionary-bg-bs-alternatives-round4.md"), `${md}\n`);
  console.log(JSON.stringify({ ok: true, jsonPath, bestFoundSource: BEST_FOUND_SOURCE }, null, 2));
}

main();
