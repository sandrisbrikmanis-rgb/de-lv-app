#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");

const OUT_DIR = path.join(
  ROOT,
  "reports/g2-a1-production-current/pdf-bilingual-dictionary-it-mk-nl-discovery",
);

function curlHead(url) {
  try {
    const out = execFileSync("curl", ["-sI", "-L", "--max-time", "45", url], { encoding: "utf8" });
    const ct = out.match(/^content-type:\s*(.+)$/im);
    const status = out.match(/^HTTP\/\S+\s+(\d+)/m);
    return { httpStatus: status ? Number(status[1]) : null, contentType: ct ? ct[1].trim() : null };
  } catch (e) {
    return { httpStatus: null, error: String(e.message || e).slice(0, 80) };
  }
}

function pdfOpens(url) {
  try {
    const buf = execFileSync("curl", ["-sL", "-r", "0-8191", "--max-time", "90", url], {
      maxBuffer: 1024 * 1024,
    });
    const head = buf.slice(0, 8).toString("ascii");
    if (head.startsWith("%PDF")) return { opens: true, note: "First bytes are %PDF (range GET)" };
    if (head.startsWith("PK")) return { opens: false, note: "Borrow/LCP or ZIP wrapper" };
    if (String(buf).includes("<html")) return { opens: false, note: "HTML interstitial" };
    return { opens: false, note: `Unknown prefix: ${JSON.stringify(head)}` };
  } catch (e) {
    return { opens: false, note: String(e.message || e).slice(0, 120) };
  }
}

function iiifOk(bsbId, pageNum = 30) {
  const page = String(pageNum).padStart(5, "0");
  const url = `https://api.digitale-sammlungen.de/iiif/image/v2/${bsbId}_${page}/full/full/0/default.jpg`;
  const h = curlHead(url);
  return { url, ok: h.httpStatus === 200, httpStatus: h.httpStatus };
}

const CANDIDATES = {
  it: [
    {
      id: "ia-bsb-neues-vollstaendig-it-de-vol1-2",
      title: "Neues vollständiges italienisch-deutsches und deutsch-italienisches Wörterbuch (BSB, 2 vol.)",
      year: null,
      authorPublisher: "Bayerische Staatsbibliothek — Internet Archive",
      direction: "DE↔IT",
      viewerUrl: "https://archive.org/details/11645915bsb",
      pdfUrl: "https://archive.org/download/11645915bsb/11645915bsb.pdf",
      pdfUrlVol2: "https://archive.org/download/11645916bsb/11645916bsb.pdf",
      ocrUrl: "https://archive.org/download/11645915bsb/11645915bsb_djvu.txt",
      ocrUrlVol2: "https://archive.org/download/11645916bsb/11645916bsb_djvu.txt",
      approximateScope: "2 large BSB scans; full bilingual title (vol. 1–2 on IA)",
      accessType: "Open PDF + OCR (both volumes)",
      rejectReason: null,
    },
    {
      id: "ia-neuesitalienisch-bulluoft",
      title: "Neues italienisch-deutsches und deutsch-italienisches Wörterbuch (Bull / IA upload)",
      year: null,
      authorPublisher: "Internet Archive",
      direction: "DE↔IT",
      viewerUrl: "https://archive.org/details/neuesitalienisch02bulluoft",
      pdfUrl: "https://archive.org/download/neuesitalienisch02bulluoft/neuesitalienisch02bulluoft.pdf",
      ocrUrl: "https://archive.org/download/neuesitalienisch02bulluoft/neuesitalienisch02bulluoft_djvu.txt",
      approximateScope: "~15 MB OCR text; comprehensive historical edition",
      accessType: "Open PDF + OCR",
      rejectReason: null,
    },
    {
      id: "ia-bsb-vollstaendig-grammatisch-it-de-11304274",
      title: "Vollständiges deutsch-italienisches und italienisch-deutsches grammatisch-praktisches Wörterbuch",
      year: null,
      authorPublisher: "BSB — Internet Archive (11304274bsb et al.)",
      direction: "DE↔IT",
      viewerUrl: "https://archive.org/details/11304274bsb",
      pdfUrl: "https://archive.org/download/11304274bsb/11304274bsb.pdf",
      ocrUrl: "https://archive.org/download/11304274bsb/11304274bsb_djvu.txt",
      approximateScope: "Multi-part BSB scan family (~4M+ OCR chars per part)",
      accessType: "Open PDF + OCR",
      rejectReason: null,
    },
    {
      id: "ia-bsb-nuovo-dizionario-10587958",
      title: "Nuovo Dizionario Italiano-Tedesco e Tedesco-Italiano (BSB scan)",
      year: null,
      authorPublisher: "BSB — Internet Archive",
      direction: "DE↔IT",
      viewerUrl: "https://archive.org/details/10587958bsb",
      pdfUrl: "https://archive.org/download/10587958bsb/10587958bsb.pdf",
      ocrUrl: "https://archive.org/download/10587958bsb/10587958bsb_djvu.txt",
      approximateScope: "Large bilingual dictionary PDF + OCR",
      accessType: "Open PDF + OCR",
      rejectReason: null,
    },
    {
      id: "ia-bub-taschen-it-de-1821",
      title: "Deutsch-italienisches und italienisch-deutsches Taschenwörterbuch (1821)",
      year: 1821,
      authorPublisher: "Internet Archive (Google scan)",
      direction: "DE↔IT",
      viewerUrl: "https://archive.org/details/bub_gb_MVRDAAAAYAAJ",
      pdfUrl: "https://archive.org/download/bub_gb_MVRDAAAAYAAJ/bub_gb_MVRDAAAAYAAJ.pdf",
      ocrUrl: "https://archive.org/download/bub_gb_MVRDAAAAYAAJ/bub_gb_MVRDAAAAYAAJ_djvu.txt",
      approximateScope: "Pocket dictionary (small scope)",
      accessType: "Open PDF + OCR",
      rejectReason: null,
    },
    {
      id: "ia-castelli-nuovo-dizionario-1782-4vol",
      title: "Castelli Nuovo Dizionario IT↔DE (1782, 4 vol. on IA)",
      year: 1782,
      authorPublisher: "Internet Archive community upload",
      direction: "DE↔IT (split volumes IT→DE / DE→IT)",
      viewerUrl:
        "https://archive.org/details/castelli-nuovo-dizionario-italiano-tedesco-e-tedesco-italiano-1782-volumi-1-4",
      pdfUrl: null,
      ocrUrl: null,
      approximateScope: "4 PDFs listed; OCR download blocked/HTML in automation this run",
      accessType: "Partial IA listing",
      rejectReason: null,
    },
    {
      id: "ia-pons-bertelsmann-it-de-borrow",
      title: "Bertelsmann / PONS Taschenwörterbuch Italienisch (modern print on IA)",
      year: null,
      authorPublisher: "Internet Archive",
      direction: "DE↔IT",
      viewerUrl: "https://archive.org/details/bertelsmanntasch0000unse_b1s8",
      pdfUrl: "https://archive.org/download/bertelsmanntasch0000unse_b1s8/bertelsmanntasch0000unse_b1s8.pdf",
      ocrUrl: null,
      approximateScope: "Modern pocket — often LCP/borrow",
      accessType: "IA item",
      rejectReason: null,
    },
  ],
  nl: [
    {
      id: "ia-bsb-nieuw-woordenboek-nl-hoogduits-1787",
      title: "Nieuw Woordenboek der Nederlandsche en Hoogduitsche Taal (BSB, multi-part)",
      year: 1787,
      authorPublisher: "Bayerische Staatsbibliothek — Internet Archive",
      direction: "NL↔DE (historical; Hoogduits = High German)",
      viewerUrl: "https://archive.org/details/10523039bsb",
      pdfUrl: "https://archive.org/download/10523039bsb/10523039bsb.pdf",
      pdfUrlPart2: "https://archive.org/download/10627384bsb/10627384bsb.pdf",
      pdfUrlPart3: "https://archive.org/download/10523038bsb/10523038bsb.pdf",
      ocrUrl: "https://archive.org/download/10523039bsb/10523039bsb_djvu.txt",
      ocrUrlPart2: "https://archive.org/download/10627384bsb/10627384bsb_djvu.txt",
      ocrUrlPart3: "https://archive.org/download/10523038bsb/10523038bsb_djvu.txt",
      approximateScope: "3 BSB parts, ~4M OCR chars each; 18th-c. full NL–German lexicon",
      accessType: "Open PDF + OCR",
      rejectReason: null,
    },
    {
      id: "ia-kramers-woordenboek-duits-1969",
      title: "Kramers' woordenboek Duits : Duits-Nederlands, Nederlands-Duits (1969)",
      year: 1969,
      authorPublisher: "Internet Archive",
      direction: "DE↔NL",
      viewerUrl: "https://archive.org/details/kramerswoordenbo0000unse_n6p9",
      pdfUrl: "https://archive.org/download/kramerswoordenbo0000unse_n6p9/kramerswoordenbo0000unse_n6p9.pdf",
      ocrUrl: "https://archive.org/download/kramerswoordenbo0000unse_n6p9/kramerswoordenbo0000unse_n6p9_djvu.txt",
      approximateScope: "Modern bidirectional title; PDF borrow/HTML this run; OCR empty/unusable",
      accessType: "IA (access blocked)",
      rejectReason: null,
    },
    {
      id: "ia-van-dale-pocket-nl-de-borrow",
      title: "Van Dale pocketwoordenboek Nederlands-Duits",
      year: null,
      authorPublisher: "Internet Archive",
      direction: "NL→DE",
      viewerUrl: "https://archive.org/details/vandalepocketwoo0000unse_f2g1",
      pdfUrl: "https://archive.org/download/vandalepocketwoo0000unse_f2g1/vandalepocketwoo0000unse_f2g1.pdf",
      ocrUrl: "https://archive.org/download/vandalepocketwoo0000unse_f2g1/vandalepocketwoo0000unse_f2g1_djvu.txt",
      approximateScope: "Pocket; PDF LCP/HTML interstitial",
      accessType: "IA borrow",
      rejectReason: null,
    },
    {
      id: "ia-wolters-ster-duits-nl-borrow",
      title: "Wolters ster woordenboek Duits-Nederlands",
      year: null,
      authorPublisher: "Internet Archive",
      direction: "DE→NL",
      viewerUrl: "https://archive.org/details/isbn_9789066486782",
      pdfUrl: "https://archive.org/download/isbn_9789066486782/isbn_9789066486782.pdf",
      ocrUrl: null,
      approximateScope: "Commercial print scan — borrow",
      accessType: "IA borrow",
      rejectReason: null,
    },
    {
      id: "ia-nederlands-duits-2004-borrow",
      title: "Nederlands-Duits (2004 IA upload)",
      year: 2004,
      authorPublisher: "Internet Archive",
      direction: "NL↔DE",
      viewerUrl: "https://archive.org/details/nederlandsduits0000unse",
      pdfUrl: "https://archive.org/download/nederlandsduits0000unse/nederlandsduits0000unse.pdf",
      ocrUrl: "https://archive.org/download/nederlandsduits0000unse/nederlandsduits0000unse_djvu.txt",
      approximateScope: "Modern title; PDF HTML interstitial in automation",
      accessType: "IA borrow",
      rejectReason: null,
    },
    {
      id: "ia-duitsch-woordenboek-wallis",
      title: "Duitsch woordenboek dl. 1 Duits-Nederlands (Wallis)",
      year: null,
      authorPublisher: "Internet Archive",
      direction: "DE→NL",
      viewerUrl: "https://archive.org/details/duitschwoordenbo0000geld",
      pdfUrl: null,
      ocrUrl: "https://archive.org/download/duitschwoordenbo0000geld/duitschwoordenbo0000geld_djvu.txt",
      approximateScope: "OCR not available (empty response)",
      accessType: "IA item incomplete",
      rejectReason: null,
    },
  ],
  mk: [
    {
      id: "web-makedonisch-info-de-mk",
      title: "Дигитален Германско-македонски / македонско-германски речник (makedonisch.info)",
      year: null,
      authorPublisher: "Community / educational web lexicon",
      direction: "DE↔MK",
      viewerUrl: "http://makedonisch.info/",
      pdfUrl: null,
      ocrUrl: null,
      approximateScope: "Searchable web UI; autocomplete API only — no full lexicon dump",
      accessType: "Website (HTML)",
      rejectReason: null,
    },
    {
      id: "ugd-elib-ivanovska-belcev-2012",
      title: "Македонско-германски / германско-македонски речник (Ivanovska & Belčev, 2012)",
      year: 2012,
      authorPublisher: "Goce Delčev University e-lib (UGD)",
      direction: "DE↔MK",
      viewerUrl: "https://e-lib.ugd.edu.mk/137",
      pdfUrl: "https://e-lib.ugd.edu.mk/137",
      ocrUrl: null,
      approximateScope: "~365 pp print; repository page is HTML metadata — not open full-text PDF bytes",
      accessType: "Institutional repository record",
      rejectReason: null,
    },
    {
      id: "print-milosev-matica-2004",
      title: "Rečnik makedonsko-germanski, germansko-makedonski (Milošev et al., Matica Makedonska 2004)",
      year: 2004,
      authorPublisher: "Matica Makedonska, Skopje",
      direction: "DE↔MK",
      viewerUrl: "https://katalog.ub.uni-heidelberg.de/titel/66068010",
      pdfUrl: null,
      ocrUrl: null,
      approximateScope: "~735 pp — library catalog Präsenznutzung only",
      accessType: "Print / catalog",
      rejectReason: null,
    },
    {
      id: "manu-damj-macedonian-archive",
      title: "MANU Digital Archive of the Macedonian Language (DAMJ)",
      year: "2008+",
      authorPublisher: "Macedonian Academy of Sciences and Arts (MANU / ICAL)",
      direction: "MK reference corpus (not DE↔MK lexicon)",
      viewerUrl: "http://damj.manu.edu.mk/index_en.html",
      pdfUrl: null,
      ocrUrl: null,
      approximateScope: "Historical grammars/texts PDFs — no Macedonian–German dictionary scan listed",
      accessType: "Institutional archive",
      rejectReason: null,
    },
    {
      id: "bg-miladinov-as-mk-proxy",
      title: "Bulgarian Miladinov DE↔BG dictionaries as MK substitute",
      year: null,
      authorPublisher: "—",
      direction: "DE↔BG",
      viewerUrl: null,
      pdfUrl: null,
      ocrUrl: null,
      approximateScope: "—",
      accessType: "—",
      rejectReason: "bg ≠ mk — unacceptable proxy for Macedonian audit",
    },
  ],
};

const BEST_FOUND = {
  it: {
    id: "stack-bsb-neues-vollstaendig-it-de-vol1-2-plus-bulluoft-alt",
    title:
      "BSB Neues vollständiges italienisch-deutsches / deutsch-italienisches Wörterbuch (IA vol. 1–2, PDF+OCR) — alt. Bull IA OCR ~15MB",
    status: "PARTIAL",
    primaryUrls: [
      "https://archive.org/details/11645915bsb",
      "https://archive.org/details/11645916bsb",
      "https://archive.org/details/neuesitalienisch02bulluoft",
    ],
    note: "Pilot OCR: 3/6 DE lemmas on BSB vol. 1–2; casa attested; modern open full scan scarce on IA",
  },
  nl: {
    id: "stack-bsb-nieuw-woordenboek-nl-hoogduits-1787-3parts",
    title:
      "Nieuw Woordenboek der Nederlandsche en Hoogduitsche Taal (BSB 1787, 3 IA parts, PDF+OCR) — no open modern full DE↔NL scan found",
    status: "PARTIAL",
    primaryUrls: [
      "https://archive.org/details/10523039bsb",
      "https://archive.org/details/10627384bsb",
      "https://archive.org/details/10523038bsb",
    ],
    note: "Pilot OCR: 2/6 word-boundary hits (Haus, arbeiten); Huis + Klein geld variants; Kramers/Van Dale IA borrow",
  },
  mk: {
    id: "no-open-full-de-mk-lexicon",
    title:
      "No open institutional full DE↔MK dictionary scan/PDF verified — makedonisch.info web only (not automation-verified)",
    status: "NOT_FOUND_DIGITIZED",
    primaryUrls: ["http://makedonisch.info/", "https://e-lib.ugd.edu.mk/137"],
    note: "Milošev 2004 and Ivanovska 2012 remain print/repository metadata; do not use bg as proxy",
  },
};

function probeCandidate(c) {
  const out = { contentOpens: null, pdf: null, ocrAvailable: Boolean(c.ocrUrl), probeNotes: [] };

  if (c.rejectReason) {
    return { ...out, finalStatus: "REJECTED", statusReason: c.rejectReason };
  }

  if (c.pdfUrl) {
    out.pdf = pdfOpens(c.pdfUrl);
    out.contentOpens = out.pdf.opens;
  }
  if (c.pdfUrlPart2) {
    const p2 = pdfOpens(c.pdfUrlPart2);
    out.pdf = { ...(out.pdf || {}), part2: p2 };
    out.contentOpens = out.contentOpens && p2.opens;
  }
  if (c.pdfUrlVol2) {
    const p2 = pdfOpens(c.pdfUrlVol2);
    out.pdf = { ...(out.pdf || {}), vol2: p2 };
    out.contentOpens = out.contentOpens && p2.opens;
  }
  if (c.pdfUrlPart3) {
    const p3 = pdfOpens(c.pdfUrlPart3);
    out.pdf = { ...(out.pdf || {}), part3: p3 };
    out.contentOpens = out.contentOpens && p3.opens;
  }

  if (c.id === "ia-castelli-nuovo-dizionario-1782-4vol") {
    out.finalStatus = "NOT_FOUND_DIGITIZED";
    out.statusReason = "Volume OCR downloads return HTML shell in automation (PDFs listed but not grep-verified)";
    out.contentOpens = false;
    return out;
  }
  if (c.id === "ia-kramers-woordenboek-duits-1969") {
    if (c.ocrUrl) {
      try {
        const t = execFileSync("curl", ["-sL", "--max-time", "45", c.ocrUrl], { encoding: "utf8", maxBuffer: 1e6 });
        out.probeNotes.push(`OCR bytes: ${t.length}`);
        if (t.length < 500) out.contentOpens = false;
      } catch {
        out.contentOpens = false;
      }
    }
    out.finalStatus = "NOT_FOUND_DIGITIZED";
    out.statusReason = "Modern bidirectional title exists but IA PDF/OCR not open in automation";
    return out;
  }
  if (
    c.id === "ia-van-dale-pocket-nl-de-borrow" ||
    c.id === "ia-wolters-ster-duits-nl-borrow" ||
    c.id === "ia-nederlands-duits-2004-borrow" ||
    c.id === "ia-pons-bertelsmann-it-de-borrow"
  ) {
    out.finalStatus = out.contentOpens ? "PARTIAL" : "NOT_FOUND_DIGITIZED";
    out.statusReason = "Commercial / borrow IA item — not reliable open audit source";
    return out;
  }
  if (c.id === "ia-bub-taschen-it-de-1821" && out.contentOpens) {
    out.finalStatus = "PARTIAL";
    out.statusReason = "Pocket dictionary only";
    return out;
  }
  if (c.id === "web-makedonisch-info-de-mk") {
    const h = curlHead(c.viewerUrl);
    out.contentOpens = h.httpStatus === 200;
    out.finalStatus = "PARTIAL";
    out.statusReason = "Web lexicon shell loads; no downloadable OCR/PDF for pilot grep";
    return out;
  }
  if (c.id === "ugd-elib-ivanovska-belcev-2012") {
    out.contentOpens = pdfOpens(c.pdfUrl).opens === false;
    out.finalStatus = "NOT_FOUND_DIGITIZED";
    out.statusReason = "Repository HTML record — citation_pdf_url is not open %PDF";
    return out;
  }
  if (c.id === "print-milosev-matica-2004" || c.id === "manu-damj-macedonian-archive") {
    out.contentOpens = false;
    out.finalStatus = "NOT_FOUND_DIGITIZED";
    out.statusReason = "Print or non-lexicon archive only";
    return out;
  }
  if (c.id === "ia-duitsch-woordenboek-wallis") {
    out.finalStatus = "NOT_FOUND_DIGITIZED";
    out.contentOpens = false;
    return out;
  }

  if (!out.finalStatus) {
    if (out.contentOpens && c.approximateScope?.includes("Pocket")) out.finalStatus = "PARTIAL";
    else if (out.contentOpens) out.finalStatus = "READY";
    else out.finalStatus = "NOT_FOUND_DIGITIZED";
  }
  return out;
}

function main() {
  const languages = {};
  for (const [lang, list] of Object.entries(CANDIDATES)) {
    languages[lang] = list.map((c) => {
      const probe = probeCandidate(c);
      return { ...c, probe, finalStatus: probe.finalStatus };
    });
  }

  const report = {
    schemaVersion: "g2-a1-pdf-bilingual-dictionary-it-mk-nl-discovery-v1",
    generatedAt: new Date().toISOString(),
    scope: ["it", "mk", "nl"],
    rules: ["Production / MASTER / OWNER unchanged — discovery only", "mk must not use bg as proxy"],
    languages,
    bestFoundSource: BEST_FOUND,
  };

  fs.mkdirSync(OUT_DIR, { recursive: true });
  const jsonPath = path.join(OUT_DIR, "pdf-bilingual-dictionary-it-mk-nl-discovery.json");
  fs.writeFileSync(jsonPath, `${JSON.stringify(report, null, 2)}\n`);

  const lines = [
    "# DE↔TARGET digitized dictionary discovery — `it`, `mk`, `nl`",
    "",
    `Generated: ${report.generatedAt}`,
    "",
    "## BEST_FOUND_SOURCE",
    "",
    "| Lang | Status | Best stack |",
    "|------|--------|------------|",
    ...["it", "mk", "nl"].map(
      (l) => `| **${l}** | ${BEST_FOUND[l].status} | ${BEST_FOUND[l].title} |`,
    ),
    "",
  ];

  for (const lang of ["it", "mk", "nl"]) {
    lines.push(`## ${lang.toUpperCase()}`, "");
    for (const c of languages[lang]) {
      lines.push(`### ${c.id} — \`${c.finalStatus}\``);
      lines.push(`- **Title:** ${c.title}`);
      lines.push(`- **Year:** ${c.year ?? "—"}`);
      lines.push(`- **Author/publisher:** ${c.authorPublisher}`);
      lines.push(`- **Direction:** ${c.direction}`);
      if (c.viewerUrl) lines.push(`- **Viewer:** ${c.viewerUrl}`);
      if (c.pdfUrl) lines.push(`- **PDF:** ${c.pdfUrl}`);
      if (c.ocrUrl) lines.push(`- **OCR:** ${c.ocrUrl}`);
      lines.push(`- **Scope:** ${c.approximateScope}`);
      lines.push(`- **Opens:** ${c.probe.contentOpens}`);
      if (c.probe.statusReason) lines.push(`- **Note:** ${c.probe.statusReason}`);
      if (c.rejectReason) lines.push(`- **Rejected:** ${c.rejectReason}`);
      lines.push("");
    }
  }

  fs.writeFileSync(path.join(OUT_DIR, "pdf-bilingual-dictionary-it-mk-nl-discovery.md"), `${lines.join("\n")}\n`);
  console.log(JSON.stringify({ ok: true, jsonPath, bestFound: BEST_FOUND }, null, 2));
}

main();
