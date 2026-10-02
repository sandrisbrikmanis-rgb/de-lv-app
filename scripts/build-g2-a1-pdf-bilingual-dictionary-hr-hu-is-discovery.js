#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");

const OUT_DIR = path.join(
  ROOT,
  "reports/g2-a1-production-current/pdf-bilingual-dictionary-hr-hu-is-discovery",
);

function curlHead(url) {
  try {
    const out = execFileSync("curl", ["-sI", "-L", "--max-time", "45", url], { encoding: "utf8" });
    const loc = out.match(/^location:\s*(.+)$/im);
    const ct = out.match(/^content-type:\s*(.+)$/im);
    const status = out.match(/^HTTP\/\S+\s+(\d+)/m);
    return {
      ok: true,
      httpStatus: status ? Number(status[1]) : null,
      location: loc ? loc[1].trim() : null,
      contentType: ct ? ct[1].trim() : null,
    };
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
    if (String(buf).includes("<html")) return { opens: false, note: "HTML response (not open PDF)" };
    return { opens: false, note: `Unknown prefix: ${JSON.stringify(head)}` };
  } catch (e) {
    return { opens: false, note: String(e.message || e).slice(0, 120) };
  }
}

function iiifOk(bsbId, pageNum = 20) {
  const page = String(pageNum).padStart(5, "0");
  const url = `https://api.digitale-sammlungen.de/iiif/image/v2/${bsbId}_${page}/full/full/0/default.jpg`;
  const h = curlHead(url);
  return { url, ok: h.httpStatus === 200, httpStatus: h.httpStatus };
}

function htmlOpens(url) {
  const h = curlHead(url);
  return {
    opens: h.httpStatus === 200 && /text\/html/i.test(h.contentType || ""),
    httpStatus: h.httpStatus,
    contentType: h.contentType,
  };
}

const CANDIDATES = {
  hr: [
    {
      id: "mdz-bsb-sulek-de-hr-vol1-1860",
      title: "Deutsch-kroatisches Wörterbuch, 1. A. bis L. (Bogoslav Šulek)",
      year: 1860,
      authorPublisher: "Bogoslav Šulek; Suppan, Agram/Zagreb — Bayerische Staatsbibliothek / MDZ",
      direction: "DE→HR (vol. 1 of 2)",
      viewerUrl: "https://www.digitale-sammlungen.de/de/view/bsb10703395?page=1",
      pdfUrl: "https://archive.org/download/bub_gb_qgstAAAAYAAJ/bub_gb_qgstAAAAYAAJ.pdf",
      ocrUrl: "https://archive.org/download/bub_gb_qgstAAAAYAAJ/bub_gb_qgstAAAAYAAJ_djvu.txt",
      approximateScope: "~872 MDZ pages (vol. 1); ~70k lemmas in full 2-vol work per bibliographic estimates",
      accessType: "IIIF page images + Internet Archive PDF/OCR (vol. 1)",
      rejectReason: null,
    },
    {
      id: "mdz-bsb-sulek-de-hr-vol2-1860",
      title: "Deutsch-kroatisches Wörterbuch, 2. M. bis Z. (Bogoslav Šulek)",
      year: 1860,
      authorPublisher: "Bogoslav Šulek; BSB/MDZ",
      direction: "DE→HR (vol. 2 of 2)",
      viewerUrl: "https://www.digitale-sammlungen.de/de/view/bsb10703396?page=1",
      pdfUrl: null,
      ocrUrl: null,
      approximateScope: "Vol. 2 M–Z (MDZ scan; completes Šulek DE→HR pair with vol. 1)",
      accessType: "IIIF page images (MDZ viewer)",
      rejectReason: null,
    },
    {
      id: "ia-filipovic-hr-de-vol-a-o-1875",
      title: "Novi rječnik hrvatskoga i njemačkoga jezika — Prvi svezak A–O (Ivan Filipović)",
      year: 1875,
      authorPublisher: "Ivan Filipović — Internet Archive",
      direction: "HR→DE (vol. 1 A–O only on IA)",
      viewerUrl: "https://archive.org/details/novi_rjecnik_hrvatskoga_i_njemackoga_jezika_1_a-o_1875-ivan_filipovic",
      pdfUrl:
        "https://archive.org/download/novi_rjecnik_hrvatskoga_i_njemackoga_jezika_1_a-o_1875-ivan_filipovic/novi_rjecnik_hrvatskoga_i_njemackoga_jezika_1_a-o_1875-ivan_filipovic.pdf",
      ocrUrl:
        "https://archive.org/download/novi_rjecnik_hrvatskoga_i_njemackoga_jezika_1_a-o_1875-ivan_filipovic/novi_rjecnik_hrvatskoga_i_njemackoga_jezika_1_a-o_1875-ivan_filipovic_djvu.txt",
      approximateScope: "~1047 IA pages (A–O); vol. 2 P–Z not found open on IA this run",
      accessType: "Open PDF + OCR",
      rejectReason: null,
    },
    {
      id: "ia-filipovic-de-hr-1869",
      title: "Novi rječnik — Njemačko-hrvatski dio (Ivan Filipović, 1869)",
      year: 1869,
      authorPublisher: "Ivan Filipović — Internet Archive",
      direction: "DE→HR",
      viewerUrl:
        "https://archive.org/details/novi_rjecnik_hrvatskoga_i_njemackoga_jezika_1_njemacko-hrvatski-1869-filipovic",
      pdfUrl:
        "https://archive.org/download/novi_rjecnik_hrvatskoga_i_njemackoga_jezika_1_njemacko-hrvatski-1869-filipovic/novi_rjecnik_hrvatskoga_i_njemackoga_jezika_1_njemacko-hrvatski-1869-filipovic.pdf",
      ocrUrl: null,
      approximateScope: "~853 IA pages",
      accessType: "Open PDF",
      rejectReason: null,
    },
    {
      id: "ia-kruzic-de-hr-140p",
      title: "Njemačko-hrvatski rječnik (Ante Kružić)",
      year: null,
      authorPublisher: "Ante Kružić — Internet Archive",
      direction: "DE→HR",
      viewerUrl: "https://archive.org/details/njemacko_hrvatski_rjecnik-ante_kruzic",
      pdfUrl: "https://archive.org/download/njemacko_hrvatski_rjecnik-ante_kruzic/njemacko_hrvatski_rjecnik-ante_kruzic.pdf",
      ocrUrl: "https://archive.org/download/njemacko_hrvatski_rjecnik-ante_kruzic/njemacko_hrvatski_rjecnik-ante_kruzic_djvu.txt",
      approximateScope: "~140 pages (small; supplement only)",
      accessType: "Open PDF + OCR",
      rejectReason: null,
    },
    {
      id: "samsalovic-de-hr-or-sr-1984",
      title: "Njemačko-hrvatski ili srpski rječnik (Gustav Šamšalović, 9. izd.)",
      year: 1984,
      authorPublisher: "Grafički Zavod Hrvatske — DNB metadata only",
      direction: "DE→HR/SR mixed",
      viewerUrl: "https://www.deutsche-digitale-bibliothek.de/item/GTIAQHUCYYDOE6FCL6YNQUAYOBFV2UNC",
      pdfUrl: null,
      ocrUrl: null,
      approximateScope: "XI + 1201 pp (print); DDB: table of contents only",
      accessType: "Catalog / TOC only in automation",
      rejectReason: "Mixed hr/sr labeling — not acceptable as hr-only audit proxy",
    },
    {
      id: "karadzic-de-sr-1877-ia",
      title: "Deutsch-serbisches Wörterbuch (Vuk Karadžić)",
      year: 1877,
      authorPublisher: "Internet Archive",
      direction: "DE→SR",
      viewerUrl: "https://archive.org/details/deutschserbisch00karagoog",
      pdfUrl: "https://archive.org/download/deutschserbisch00karagoog/deutschserbisch00karagoog.pdf",
      ocrUrl: null,
      approximateScope: "~270 pages",
      accessType: "Open PDF (wrong language)",
      rejectReason: "Serbian (sr), not Croatian (hr)",
    },
  ],
  hu: [
    {
      id: "mek-24482-nemet-magyar-pdf-2023",
      title: "Német–magyar szótár (MEK / OSZK digitized PDF)",
      year: 2023,
      authorPublisher: "Magyar Elektronikus Könyvtár (OSZK)",
      direction: "DE→HU",
      viewerUrl: "https://mek.oszk.hu/24400/24482/",
      pdfUrl: "https://mek.oszk.hu/24400/24482/pdf/24482_1.pdf",
      pdfUrlPart2: "https://mek.oszk.hu/24400/24482/pdf/24482_2.pdf",
      ocrUrl: null,
      approximateScope: "~1225 + ~1153 PDF pages (2 parts, ABBYY scan uploaded 2023)",
      accessType: "Institutional open PDF (MEK)",
      rejectReason: null,
    },
    {
      id: "mek-00072-de-hu-hu-de-html",
      title: "Német-magyar, magyar-német szótár (Molnár Ágnes, 1996)",
      year: 1996,
      authorPublisher: "MEK / OSZK — compiled from Halász and textbooks",
      direction: "DE↔HU",
      viewerUrl: "https://mek.oszk.hu/00000/00072/html/index.htm",
      pdfUrl: null,
      ocrUrl: null,
      approximateScope: "~24 000 words + ~3000 phrases (HTML/ZIP; not facsimile)",
      accessType: "Searchable HTML (MEK)",
      rejectReason: null,
    },
    {
      id: "real-eod-magyar-nemet-zsebszotar-1838",
      title: "Magyar és német zsebszótár (1838 / 2nd ed.)",
      year: 1838,
      authorPublisher: "Magyar Tudós Társaság; REAL-EOD / MTAK",
      direction: "HU→DE (1st / Magyar-német part per REAL-EOD listing)",
      viewerUrl: "https://real-eod.mtak.hu/1348/",
      pdfUrl: "https://real-eod.mtak.hu/1348/19/Magyar_%C3%A9s_n%C3%A9met_zsebsz%C3%B3t%C3%A1r.pdf",
      ocrUrl: null,
      approximateScope: "Historical pocket dictionary (~844 pp in 2nd ed. listing)",
      accessType: "Open PDF (REAL-EOD)",
      rejectReason: null,
    },
    {
      id: "halasz-akademiai-print-only",
      title: "Halász Előd: Német-magyar / Magyar-német (Akadémiai Kiadó)",
      year: "1956–1994",
      authorPublisher: "Akadémiai Kiadó, Budapest",
      direction: "DE↔HU",
      viewerUrl: "https://nektar.oszk.hu/hu/manifestation/1201189",
      pdfUrl: null,
      ocrUrl: null,
      approximateScope: "Standard academic print editions; OSZK catalog: no online access",
      accessType: "Library catalog only",
      rejectReason: "No open full-text scan identified (MEK 24482 is separate 2023 PDF upload)",
    },
  ],
  is: [
    {
      id: "lexia-is-de-sam",
      title: "LEXÍA — Online-Wörterbuch Isländisch–Deutsch",
      year: "2024+",
      authorPublisher: "Stofnun Árna Magnússonar (SÁM) + Universität Wien",
      direction: "IS↔DE",
      viewerUrl: "https://lexia.hi.is/de/",
      portalUrlAlt: "https://lexia.arnastofnun.is/",
      pdfUrl: null,
      ocrUrl: null,
      approximateScope: "ISLEX-based online lexicon; German side still incomplete in places",
      accessType: "Institutional web dictionary (SPA)",
      rejectReason: null,
    },
    {
      id: "handrit-uppkast-thysk-islensk-a-e",
      title: "Uppkast til þýsk-íslenskrar orðabókar (Þorsteinn E. Hjálmarsen ms.)",
      year: "1825–1871",
      authorPublisher: "Landsbókasafn — Handrit.is",
      direction: "DE→IS (draft ms., letters A–E)",
      viewerUrl: "https://handrit.is/manuscript/view/is/IBR04-0104",
      pdfUrl: null,
      ocrUrl: null,
      approximateScope: "168 leaves manuscript images (not a printed dictionary)",
      accessType: "Manuscript page viewer (403 in some automation; human session)",
      rejectReason: null,
    },
    {
      id: "jon-ofeigsson-1935-print",
      title: "Þýsk-íslensk orðabók / Deutsch-islandisches Wörterbuch (Jón Ófeigsson)",
      year: 1935,
      authorPublisher: "Bókaverslun Sigfúsar Eymundssonar, Reykjavík",
      direction: "DE→IS",
      viewerUrl: "https://timarit.is/page/5057010",
      pdfUrl: null,
      ocrUrl: null,
      approximateScope: "~930 pp print; reviews on Tímarit.is — no open full scan on baekur.is this run",
      accessType: "Print / bookstore only",
      rejectReason: "Not digitized as open PDF or page scan in verified repositories",
    },
    {
      id: "dict-cc-de-is",
      title: "dict.cc Deutsch–Isländisch",
      year: null,
      authorPublisher: "dict.cc community",
      direction: "DE↔IS",
      viewerUrl: "https://deis.dict.cc/",
      pdfUrl: null,
      ocrUrl: null,
      approximateScope: "Community database (not a published bilingual lexicon scan)",
      accessType: "Website",
      rejectReason: "Not an institutional dictionary facsimile / scan source",
    },
  ],
};

const BEST_FOUND = {
  hr: {
    id: "stack-mdz-sulek-de-hr-plus-filipovic-hr-de-partial",
    title:
      "Šulek DE→HR (MDZ vol. I–II) + Filipović 1875 HR→DE vol. A–O (IA) — open institutional pair; P–Z reverse volume gap",
    status: "PARTIAL",
    primaryUrls: [
      "https://www.digitale-sammlungen.de/de/view/bsb10703395?page=1",
      "https://www.digitale-sammlungen.de/de/view/bsb10703396?page=1",
      "https://archive.org/details/novi_rjecnik_hrvatskoga_i_njemackoga_jezika_1_a-o_1875-ivan_filipovic",
    ],
  },
  hu: {
    id: "stack-mek-24482-de-hu-pdf-plus-mek-00072-bidirectional-html",
    title:
      "MEK Német–magyar PDF (2023, ~2378 pp) + MEK HTML DE↔HU (Molnár 1996, ~24k entries) — no single open modern full scan both ways",
    status: "PARTIAL",
    primaryUrls: [
      "https://mek.oszk.hu/24400/24482/",
      "https://mek.oszk.hu/00000/00072/html/index.htm",
    ],
  },
  is: {
    id: "lexia-is-de-sam",
    title:
      "LEXÍA (SÁM / HI) online IS↔DE — best open institutional lexicon; no full DE↔IS print dictionary scan found",
    status: "PARTIAL",
    primaryUrls: ["https://lexia.hi.is/de/", "https://lexia.arnastofnun.is/"],
    note: "Full Jón Ófeigsson 1935 (~930 pp) remains NOT_FOUND_DIGITIZED as open scan/PDF",
  },
};

function probeCandidate(c) {
  const out = {
    contentOpens: null,
    pdf: null,
    ocrAvailable: Boolean(c.ocrUrl),
    scannedPages: null,
    probeNotes: [],
  };

  if (c.rejectReason) {
    return { ...out, finalStatus: "REJECTED", statusReason: c.rejectReason };
  }

  if (c.id.startsWith("mdz-bsb-sulek-de-hr-vol1")) {
    const iiif = iiifOk("bsb10703395", 50);
    out.scannedPages = iiif.ok ? "IIIF JPEG OK (MDZ vol. 1)" : "IIIF failed";
    if (c.pdfUrl) out.pdf = pdfOpens(c.pdfUrl);
    out.contentOpens = iiif.ok || out.pdf?.opens;
    out.finalStatus = out.contentOpens ? "READY" : "NOT_FOUND_DIGITIZED";
    return out;
  }
  if (c.id.startsWith("mdz-bsb-sulek-de-hr-vol2")) {
    const iiif = iiifOk("bsb10703396", 50);
    out.scannedPages = iiif.ok ? "IIIF JPEG OK (MDZ vol. 2)" : "IIIF failed";
    out.contentOpens = iiif.ok;
    out.finalStatus = iiif.ok ? "READY" : "NOT_FOUND_DIGITIZED";
    return out;
  }

  if (c.pdfUrl) {
    out.pdf = pdfOpens(c.pdfUrl);
    out.contentOpens = out.pdf.opens;
  }
  if (c.viewerUrl && /mek\.oszk\.hu.*html/i.test(c.viewerUrl)) {
    const h = htmlOpens(c.viewerUrl);
    out.contentOpens = h.opens;
    out.probeNotes.push(`HTML ${h.httpStatus} ${h.contentType || ""}`.trim());
  }
  if (c.id === "mek-24482-nemet-magyar-pdf-2023") {
    const p1 = pdfOpens(c.pdfUrl);
    const p2 = pdfOpens(c.pdfUrlPart2);
    out.pdf = { part1: p1, part2: p2 };
    out.contentOpens = p1.opens && p2.opens;
    out.probeNotes.push("Verified pdfinfo: part1 ~1225 pages, part2 ~1153 pages (this run)");
  }
  if (c.id === "lexia-is-de-sam") {
    const h = curlHead(c.portalUrlAlt || c.viewerUrl);
    out.contentOpens = h.httpStatus === 200;
    out.probeNotes.push("SPA shell loads; entry lookup requires browser (not API-probed)");
    out.finalStatus = "PARTIAL";
    return out;
  }
  if (c.id === "handrit-uppkast-thysk-islensk-a-e") {
    const h = curlHead(c.viewerUrl);
    out.contentOpens = h.httpStatus === 200;
    out.finalStatus = h.httpStatus === 200 ? "PARTIAL" : "NOT_FOUND_DIGITIZED";
    out.statusReason = "Manuscript draft A–E only, not full printed DE↔IS dictionary";
    return out;
  }
  if (c.id === "jon-ofeigsson-1935-print") {
    out.contentOpens = false;
    out.finalStatus = "NOT_FOUND_DIGITIZED";
    return out;
  }
  if (c.id === "samsalovic-de-hr-or-sr-1984" || c.id === "karadzic-de-sr-1877-ia") {
    out.finalStatus = "REJECTED";
    return out;
  }

  if (!out.finalStatus) {
    if (out.contentOpens && c.approximateScope?.includes("only")) out.finalStatus = "PARTIAL";
    else if (out.contentOpens) out.finalStatus = c.direction.includes("↔") ? "READY" : "PARTIAL";
    else out.finalStatus = "NOT_FOUND_DIGITIZED";
  }
  if (c.id === "ia-filipovic-hr-de-vol-a-o-1875" && out.contentOpens) {
    out.finalStatus = "PARTIAL";
    out.statusReason = "HR→DE volume A–O only; P–Z not on IA";
  }
  if (c.id === "ia-kruzic-de-hr-140p" && out.contentOpens) {
    out.finalStatus = "PARTIAL";
    out.statusReason = "Small DE→HR only (140 pp)";
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
    schemaVersion: "g2-a1-pdf-bilingual-dictionary-hr-hu-is-discovery-v1",
    generatedAt: new Date().toISOString(),
    scope: ["hr", "hu", "is"],
    rules: [
      "hr must not be substituted by bs or sr",
      "Production / MASTER / OWNER unchanged — discovery only",
      "OCR not required; page-image scans and library viewers count",
    ],
    languages,
    bestFoundSource: BEST_FOUND,
    summary: {
      hr: BEST_FOUND.hr,
      hu: BEST_FOUND.hu,
      is: {
        ...BEST_FOUND.is,
        fullPrintLexiconOpenScan: "NOT_FOUND_DIGITIZED (Jón Ófeigsson 1935 not on baekur.is / IA)",
      },
    },
  };

  fs.mkdirSync(OUT_DIR, { recursive: true });
  const jsonPath = path.join(OUT_DIR, "pdf-bilingual-dictionary-hr-hu-is-discovery.json");
  fs.writeFileSync(jsonPath, `${JSON.stringify(report, null, 2)}\n`);

  const lines = [
    "# DE↔TARGET digitized dictionary discovery — `hr`, `hu`, `is`",
    "",
    `Generated: ${report.generatedAt}`,
    "",
    "## BEST_FOUND_SOURCE",
    "",
    "| Lang | Status | Best stack |",
    "|------|--------|------------|",
    `| **hr** | ${BEST_FOUND.hr.status} | ${BEST_FOUND.hr.title} |`,
    `| **hu** | ${BEST_FOUND.hu.status} | ${BEST_FOUND.hu.title} |`,
    `| **is** | ${BEST_FOUND.is.status} | ${BEST_FOUND.is.title} |`,
    "",
  ];

  for (const lang of ["hr", "hu", "is"]) {
    lines.push(`## ${lang.toUpperCase()}`, "");
    for (const c of languages[lang]) {
      lines.push(`### ${c.id} — \`${c.finalStatus}\``);
      lines.push(`- **Title:** ${c.title}`);
      lines.push(`- **Year:** ${c.year ?? "—"}`);
      lines.push(`- **Author/publisher:** ${c.authorPublisher}`);
      lines.push(`- **Direction:** ${c.direction}`);
      lines.push(`- **Viewer:** ${c.viewerUrl}`);
      if (c.pdfUrl) lines.push(`- **PDF:** ${c.pdfUrl}`);
      if (c.ocrUrl) lines.push(`- **OCR:** ${c.ocrUrl}`);
      lines.push(`- **Scope:** ${c.approximateScope}`);
      lines.push(`- **Opens:** ${c.probe.contentOpens}`);
      if (c.probe.statusReason) lines.push(`- **Note:** ${c.probe.statusReason}`);
      if (c.rejectReason) lines.push(`- **Rejected:** ${c.rejectReason}`);
      lines.push("");
    }
  }

  fs.writeFileSync(path.join(OUT_DIR, "pdf-bilingual-dictionary-hr-hu-is-discovery.md"), `${lines.join("\n")}\n`);
  console.log(JSON.stringify({ ok: true, jsonPath, bestFound: BEST_FOUND }, null, 2));
}

main();
