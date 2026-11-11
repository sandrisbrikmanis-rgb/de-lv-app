#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");

const OUT_DIR = path.join(
  ROOT,
  "reports/g2-a1-production-current/pdf-bilingual-dictionary-bg-bs-fr-round2",
);

const DE_LEMMAS = ["Haus", "arbeiten", "Kleingeld", "bewirten", "Grenzkonflikt", "Machtgier"];

function curlHead(url) {
  try {
    const out = execFileSync("curl", ["-sI", "-L", "--max-time", "45", url], { encoding: "utf8" });
    const loc = out.match(/^location:\s*(.+)$/im);
    const ct = out.match(/^content-type:\s*(.+)$/im);
    return { ok: true, location: loc ? loc[1].trim() : null, contentType: ct ? ct[1].trim() : null };
  } catch (e) {
    return { ok: false, error: String(e.message || e).slice(0, 120) };
  }
}

function pdfOpens(url) {
  try {
    const buf = execFileSync("curl", ["-sL", "-r", "0-8191", "--max-time", "90", url], {
      maxBuffer: 1024 * 1024,
    });
    const head = Buffer.isBuffer(buf) ? buf.slice(0, 8).toString("ascii") : String(buf).slice(0, 8);
    if (head.startsWith("%PDF")) return { opens: true, note: "First bytes are %PDF (range GET)" };
    if (head.startsWith("PK")) return { opens: false, note: "Borrow/LCP or ZIP wrapper — not open PDF" };
    if (String(buf).includes("<html")) return { opens: false, note: "HTML interstitial (login/borrow/block)" };
    return { opens: false, note: `Unknown payload prefix: ${JSON.stringify(head)}` };
  } catch (e) {
    return { opens: false, note: String(e.message || e).slice(0, 120) };
  }
}

function ocrHit(ocrUrl, pattern) {
  try {
    const out = execFileSync("curl", ["-sL", "--max-time", "180", ocrUrl], { maxBuffer: 64 * 1024 * 1024 });
    const text = String(out);
    if (text.length < 500) return { found: false, ocrBytes: text.length, snippet: null };
    const re = new RegExp(pattern, "im");
    const m = text.match(re);
    if (!m) return { found: false, ocrBytes: text.length, snippet: null };
    const idx = m.index ?? text.search(re);
    return {
      found: true,
      ocrBytes: text.length,
      snippet: text.slice(Math.max(0, idx - 40), idx + 120).replace(/\s+/g, " ").trim(),
    };
  } catch (e) {
    return { found: false, snippet: null, error: String(e.message || e).slice(0, 120) };
  }
}

function pilotOcr(ocrUrl) {
  return Object.fromEntries(
    DE_LEMMAS.map((lemma) => {
      const hit = ocrHit(ocrUrl, lemma);
      return [lemma, { found: hit.found, ocrBytes: hit.ocrBytes, snippet: hit.snippet }];
    }),
  );
}

const CANDIDATES = {
  fr: [
    {
      id: "sachs-villatte-1906",
      title:
        "Sachs-Villatte enzyklopädisches französisch-deutsches und deutsch-französisches Wörterbuch (rev. Ausg. 1905)",
      year: 1906,
      authorPublisher: "Karl Ernst August Sachs, Césaire Villatte; Langenscheidt, Berlin-Schöneberg",
      direction: "DE↔FR (abi virzieni vienā darbā)",
      pdfUrl: "https://archive.org/download/sachsvillatteenz00sachuoft/sachsvillatteenz00sachuoft.pdf",
      viewerUrl: "https://archive.org/details/sachsvillatteenz00sachuoft",
      ocrUrl: "https://archive.org/download/sachsvillatteenz00sachuoft/sachsvillatteenz00sachuoft_djvu.txt",
      approximateScope: "~2140 pp (IA jp2 filecount); encyklopädisch",
      betterThanRound1: true,
      round1Baseline: "Mozin/Biber 1823–1828",
    },
    {
      id: "grand-dictionnaire-birm-1884-v1",
      title:
        "Grand dictionnaire français-allemand et allemand-français (Birm et al.) — vol. 1",
      year: 1884,
      authorPublisher: "H. A. Birmann et al.",
      direction: "DE↔FR (2 vol.)",
      pdfUrl: "https://archive.org/download/granddictionnair01birm/granddictionnair01birm.pdf",
      viewerUrl: "https://archive.org/details/granddictionnair01birm",
      ocrUrl: "https://archive.org/download/granddictionnair01birm/granddictionnair01birm_djvu.txt",
      approximateScope: "~1186 pp vol. 1 on IA",
      betterThanRound1: true,
      round1Baseline: "Mozin/Biber 1823–1828",
    },
    {
      id: "grand-dictionnaire-denis-1972-bwb",
      title: "Grand Dictionnaire Allemand-Francais et Francais-Allemand",
      year: 1972,
      authorPublisher: "Joseph Denis; digitized BWB / Internet Archive",
      direction: "DE↔FR",
      pdfUrl: "https://archive.org/download/bwb_S0-DGA-173/bwb_S0-DGA-173.pdf",
      viewerUrl: "https://archive.org/details/bwb_S0-DGA-173",
      ocrUrl: "https://archive.org/download/bwb_S0-DGA-173/bwb_S0-DGA-173_djvu.txt",
      approximateScope: "20th-c. full dictionary (publisher scan)",
      betterThanRound1: "scope yes; access no (LCP)",
      round1Baseline: "Mozin/Biber 1823–1828",
    },
    {
      id: "mozin-biber-1823-round1",
      title: "Neues vollständiges Wörterbuch (Mozin, Biber, Hölder) — round-1 baseline",
      year: "1823–1828",
      authorPublisher: "J. G. Cotta; Internet Archive / Gallica",
      direction: "DE→FR A–K + FR→DE vol.1 (atsevišķi IA PDF)",
      pdfUrl: "https://archive.org/download/bub_gb_qCwCncvvUEYC/bub_gb_qCwCncvvUEYC.pdf",
      viewerUrl: "https://archive.org/details/bub_gb_qCwCncvvUEYC",
      ocrUrl: "https://archive.org/download/bub_gb_qCwCncvvUEYC/bub_gb_qCwCncvvUEYC_djvu.txt",
      approximateScope: "Multi-volume; IA pilots used A–K DE part + FR vol.1",
      betterThanRound1: false,
      round1Baseline: "(self)",
    },
  ],
  bg: [
    {
      id: "stamcheva-2004-ia-lcp",
      title:
        "Немско–български, български–немски речник / Wörterbuch Deutsch–Bulgarisch, Bulgarisch–Deutsch",
      year: 2004,
      authorPublisher: "Виолина Стамчева-Андреева; Sofia (IA scan)",
      direction: "DE↔BG (vienā sējumā)",
      pdfUrl: "https://archive.org/download/nemskobalgarskib00stam/nemskobalgarskib00stam.pdf",
      viewerUrl: "https://archive.org/details/nemskobalgarskib00stam",
      ocrUrl: "https://archive.org/download/nemskobalgarskib00stam/nemskobalgarskib00stam_djvu.txt",
      approximateScope: "Modern school/university pocket dictionary (both directions)",
      betterThanRound1: "lexicon modernity yes; open PDF no",
      round1Baseline: "Miladinov 1893 / NSI catalog",
    },
    {
      id: "miladinov-1893-vol1-nsi",
      title: "Немско-български и българско-немски речник, I Немско-българска част",
      year: 1893,
      authorPublisher: "Ivan A. Miladinov; Sofia; NSI/NALIS digitālā bibliotēka",
      direction: "DE→BG (vol. 1)",
      pdfUrl: null,
      catalogUrl: "https://statlib.nsi.bg/bg/v/NSI010008337",
      nalisUrl: "https://unicat.nalis.bg/Record/LSU.000120189",
      approximateScope: "Vol. I DE→BG (institutional scan catalog)",
      betterThanRound1: "same pair; still no open PDF in probe",
      round1Baseline: "Miladinov 1893 / NSI catalog",
    },
    {
      id: "miladinov-vol2-hathitrust",
      title: "Пълен българско-немски речник / Deutsch-bulgarisches und bulgarisch-deutsches Wörterbuch vol. 2",
      year: "1893–1908",
      authorPublisher: "Ivan A. Miladinov; HathiTrust (Harvard full view)",
      direction: "BG→DE (vol. 2)",
      pdfUrl: null,
      catalogUrl: "https://catalog.hathitrust.org/Record/102751195",
      hathitrustView: "https://babel.hathitrust.org/cgi/pt?id=harvard.32044086444973",
      approximateScope: "2-vol set; HT full view v.2 only",
      betterThanRound1: "same pair",
      round1Baseline: "HathiTrust 102751195",
    },
    {
      id: "miladinov-1927-multislavdict",
      title: "Bulgarisch-Deutsches Handwörterbuch / Българо-немски пъленъ речникъ",
      year: 1927,
      authorPublisher: "Ivan Miladinov; MultiSlavDict / Slavistik-Portal (transcription)",
      direction: "BG→DE (searchable DB, not PDF)",
      pdfUrl: null,
      catalogUrl: "https://slavistik-portal.de/en/dicthub/dict-milad.html",
      approximateScope: "Full historical lexicon — digital text, not downloadable PDF",
      betterThanRound1: "searchability yes; not PDF audit chain",
      round1Baseline: "Miladinov NSI/Hathi",
    },
    {
      id: "miladinov-1929-vol2-nsi",
      title: "Българо-немски пълен речник, Tom II, 3. dop. izd.",
      year: 1929,
      authorPublisher: "Печатница Братя Миладинови; NSI statlib",
      direction: "BG→DE",
      pdfUrl: null,
      catalogUrl: "https://statlib.nsi.bg/en/v/NSI010008318",
      approximateScope: "984 pp (NSI catalog metadata)",
      betterThanRound1: "newer BG→DE edition; PDF not probed open",
      round1Baseline: "Miladinov vol.2 Hathi",
    },
  ],
  bs: [
    {
      id: "vukic-2018-print",
      title: "Njemačko-bosanski i bosansko-njemacki rječnik",
      year: 2018,
      authorPublisher: "Mario Vukić (priredio); Dječija knjiga, Sarajevo",
      direction: "DE↔BS (abi virzieni, drukāts)",
      pdfUrl: null,
      catalogUrl: "https://bookstore.ba/knjiga/njemacko-bosanski-i-bosansko-njemacki-rjecnik",
      approximateScope: "~836 pp; skolu programam",
      betterThanRound1: "best institutional monolingual pair; still no scan",
      round1Baseline: "NOT_FOUND",
    },
    {
      id: "vukic-1998-heidelberg",
      title: "Njemačko-bosanski i bosansko-njemacki rječnik (2. izd.)",
      year: 1998,
      authorPublisher: "Mario Vukić; Svjetlost, Sarajevo — UB Heidelberg holding",
      direction: "DE↔BS",
      pdfUrl: null,
      catalogUrl: "https://katalog.ub.uni-heidelberg.de/titel/9900267",
      approximateScope: "857 S.",
      betterThanRound1: "library holding only",
      round1Baseline: "NOT_FOUND",
    },
    {
      id: "coralic-2013-phraseological",
      title: "Bosansko-njemački frazeološki rječnik",
      year: 2013,
      authorPublisher: "Zrinka Ćoralić",
      direction: "Phraseological — not general DE↔BS",
      pdfUrl: "https://idoc.pub/documents/bosansko-njemacki-frazeoloski-rjecnik-6nq8qyp3o1nw",
      approximateScope: "Frazeoloģija",
      betterThanRound1: false,
      round1Baseline: "NOT_FOUND",
    },
    {
      id: "kruzic-hr-rejected",
      title: "Njemačko-hrvatski rječnik (Ante Kružić)",
      year: null,
      authorPublisher: "Ante Kružić — Croatian, not Bosnian",
      direction: "DE↔HR (noraidīts kā bs proxy)",
      pdfUrl: "https://archive.org/download/njemacko_hrvatski_rjecnik-ante_kruzic/njemacko_hrvatski_rjecnik-ante_kruzic.pdf",
      viewerUrl: "https://archive.org/details/njemacko_hrvatski_rjecnik-ante_kruzic",
      approximateScope: "Open IA PDF — wrong target language",
      betterThanRound1: false,
      round1Baseline: "rejected proxy",
    },
  ],
};

const BEST_FOUND_SOURCE = {
  fr: {
    id: "sachs-villatte-1906",
    rationale:
      "Atvērts IA PDF (~2140 lp.), abpusējs enciklopēdisks DE↔FR vienā sējumā, OCR `_djvu.txt` (~22 MB) ar pilotiem `arbeiten`, `bewirten`; jaunāks un platāks par Mozin 1823–1828.",
  },
  bg: {
    id: "miladinov-institutional-pair",
    rationale:
      "Round 2 nav apstiprinājis **pilnībā atvēru** modernu DE↔BG PDF: Stameva 2004 IA ir LCP/Borrow (PDF nav `%PDF`, OCR 172 B). Labākais **leksikons** joprojām Miladinov (NSI vol.I DE→BG + HathiTrust/NSI vol.II BG→DE), bet PDF šajā vidē nav atvērts (Cloudflare/Hathi bot siena). MultiSlavDict 1927 ir meklējams, bet nav PDF.",
  },
  bs: {
    id: "NOT_FOUND_DIGITIZED",
    rationale:
      "Nav digitizēta DE↔BS vārdnīcas avota. Vukić u.c. ir **tikai nopērkamas fiziskas grāmatas** (bookstore/katalogs) — ne audit avots. hr Kružić noraidīts.",
  },
};

function enrichCandidate(c) {
  const pdfUrl = c.pdfUrl || null;
  const pdf = pdfUrl ? pdfOpens(pdfUrl) : { opens: false, note: c.pdfUrl ? null : "No direct PDF URL" };
  const ocr =
    c.ocrUrl && pdf.opens !== false
      ? { pilot: pilotOcr(c.ocrUrl), reverseMaison: c.id.startsWith("sachs") ? ocrHit(c.ocrUrl, "Maison") : null }
      : c.ocrUrl
        ? { pilot: pilotOcr(c.ocrUrl), note: pdf.opens ? null : "OCR skipped or empty when PDF not open" }
        : null;
  return { ...c, pdfOpens: pdf.opens, pdfProbeNote: pdf.note, httpHead: pdfUrl ? curlHead(pdfUrl) : null, ocrVerification: ocr };
}

function main() {
  const generatedAt = new Date().toISOString();
  const languages = {};
  for (const [lang, list] of Object.entries(CANDIDATES)) {
    languages[lang] = list.map(enrichCandidate);
  }

  const report = {
    schemaVersion: "g2-a1-pdf-bilingual-dictionary-bg-bs-fr-round2-v1",
    generatedAt,
    pilotLemmasDe: DE_LEMMAS,
    round1Report: "reports/g2-a1-production-current/pdf-bilingual-dictionary-bg-bs-fr-pilot/",
    languages,
    bestFoundSource: BEST_FOUND_SOURCE,
    methodology:
      "Round-2 discovery: Internet Archive metadata/OCR, institutional catalogs (NSI, HathiTrust, Heidelberg UB, bookstore.ba). PDF open = range GET first bytes %PDF. No production/MASTER/OWNER changes.",
  };

  fs.mkdirSync(OUT_DIR, { recursive: true });
  const jsonPath = path.join(OUT_DIR, "pdf-bilingual-dictionary-bg-bs-fr-round2.json");
  fs.writeFileSync(jsonPath, `${JSON.stringify(report, null, 2)}\n`);

  const mdLines = [
    "# PDF bilingual dictionary discovery — round 2 (`bg`, `bs`, `fr`)",
    "",
    `Generated: ${generatedAt}`,
    "",
    "Pilotlemmas (DE): **Haus, arbeiten, Kleingeld, bewirten, Grenzkonflikt, Machtgier**.",
    "",
    "## BEST_FOUND_SOURCE (kopsavilkums)",
    "",
    "| Lang | ID | Pamatojums |",
    "|------|-----|------------|",
    `| **fr** | \`${BEST_FOUND_SOURCE.fr.id}\` | ${BEST_FOUND_SOURCE.fr.rationale} |`,
    `| **bg** | \`${BEST_FOUND_SOURCE.bg.id}\` | ${BEST_FOUND_SOURCE.bg.rationale} |`,
    `| **bs** | \`${BEST_FOUND_SOURCE.bs.id}\` | ${BEST_FOUND_SOURCE.bs.rationale} |`,
    "",
  ];

  for (const [lang, list] of Object.entries(languages)) {
    mdLines.push(`## ${lang}`, "", "| Title | Year | Direction | PDF | Opens | OCR/search | Scope | vs round-1 |", "|---|---|---|---|---|---|---|---|");
    for (const c of list) {
      const pdfLink = c.pdfUrl ? `[PDF](${c.pdfUrl})` : c.catalogUrl ? `[catalog](${c.catalogUrl})` : "—";
      const ocr =
        c.ocrVerification?.pilot?.Haus?.ocrBytes > 1000
          ? `yes (~${Math.round(c.ocrVerification.pilot.Haus.ocrBytes / 1e6)}M text); pilots: ${DE_LEMMAS.filter((l) => c.ocrVerification.pilot[l]?.found).join(", ") || "—"}`
          : c.ocrUrl && c.ocrVerification?.pilot?.Haus?.ocrBytes
            ? `empty/short (${c.ocrVerification.pilot.Haus.ocrBytes} B)`
            : c.catalogUrl?.includes("slavistik")
              ? "searchable DB (not PDF OCR)"
              : "—";
      mdLines.push(
        `| ${c.title.slice(0, 72)}… | ${c.year} | ${c.direction} | ${pdfLink} | ${c.pdfOpens ? "**yes**" : "**no**"} | ${ocr} | ${c.approximateScope || "—"} | ${c.betterThanRound1} |`,
      );
    }
    mdLines.push("");
  }

  mdLines.push(
    "## France — Sachs-Villatte vs Mozin (round-1)",
    "",
    "- **Sachs-Villatte 1906:** viens IA PDF, DE↔FR, ~2140 lp., OCR meklējams; piloti `arbeiten`, `bewirten` atrasti OCR.",
    "- **Mozin 1823:** joprojām derīgs baseline (Gallica/IA), bet šaurāks laiks un OCR biežāk neaptver jaunākos salikteņus (`Kleingeld`, `Grenzkonflikt`, `Machtgier` bieži nav).",
    "",
    "## Bulgaria — atvērts PDF",
    "",
    "- **Stameva 2004** IA: modernākais kandidāts pēc apjoma, bet **Borrow/LCP** — nav brīvi atvērams PDF auditam.",
    "- **Miladinov** NSI + HathiTrust: pilna vēsturiskā pāris, PDF jāverificē ar cilvēka pārlūku / bibliotēkas VPN.",
    "",
    "## Bosnia — DE↔BS",
    "",
    "- Nav IA **njemačko-bosanski** vispārīgas vārdnīcas PDF.",
    "- **Vukić 2018** — standarta BiH skolu/leksikons (836 lp.), bez digitāla skena.",
    "",
  );

  const mdPath = path.join(OUT_DIR, "pdf-bilingual-dictionary-bg-bs-fr-round2.md");
  fs.writeFileSync(mdPath, `${mdLines.join("\n")}\n`);

  console.log(
    JSON.stringify(
      {
        ok: true,
        jsonPath,
        mdPath,
        bestFoundSource: BEST_FOUND_SOURCE,
      },
      null,
      2,
    ),
  );
}

main();
