#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");

const OUT_DIR = path.join(
  ROOT,
  "reports/g2-a1-production-current/pdf-bilingual-dictionary-hr-hu-is-pilot-verify",
);

const DE_LEMMAS = ["Haus", "arbeiten", "Kleingeld", "bewirten", "Grenzkonflikt", "Machtgier"];

const PRODUCTION_HAUS = {
  hr: { target: "Куќа", reverseLookup: "kuća" },
  hu: { target: "Ház", reverseLookup: "Ház" },
  is: { target: "Maya", reverseLookup: "hús", note: "Card CURRENT is Maya; pilot reverse uses hús (house)" },
};

const SOURCES = {
  hr: {
    deToTarget: {
      id: "mdz-bsb-sulek-de-hr-vol1-1860",
      label: "Šulek DE→HR vol. I (IA _djvu.txt)",
      ocrUrl: "https://archive.org/download/bub_gb_qgstAAAAYAAJ/bub_gb_qgstAAAAYAAJ_djvu.txt",
    },
    targetToDe: {
      id: "ia-filipovic-hr-de-vol-a-o-1875",
      label: "Filipović 1875 HR→DE A–O (IA _djvu.txt)",
      ocrUrl:
        "https://archive.org/download/novi_rjecnik_hrvatskoga_i_njemackoga_jezika_1_a-o_1875-ivan_filipovic/novi_rjecnik_hrvatskoga_i_njemackoga_jezika_1_a-o_1875-ivan_filipovic_djvu.txt",
      targetLemma: "kuća",
    },
  },
  hu: {
    deToTargetHtml: {
      id: "mek-00072-de-hu-hu-de-html",
      label: "MEK HTML DE→HU (Molnár 1996)",
      baseUrl: "https://mek.oszk.hu/00000/00072/html/",
    },
    deToTargetPdf: {
      id: "mek-24482-nemet-magyar-pdf-2023",
      label: "MEK PDF DE→HU (24482, 2 parts)",
      pdfUrls: [
        "https://mek.oszk.hu/24400/24482/pdf/24482_1.pdf",
        "https://mek.oszk.hu/24400/24482/pdf/24482_2.pdf",
      ],
    },
    targetToDe: {
      id: "mek-00072-de-hu-hu-de-html",
      label: "MEK HTML (Haus → ház)",
      page: "h.htm",
      url: "https://mek.oszk.hu/00000/00072/html/h.htm",
      pattern: /Haus\s*\(\s*s\s*\)\s*[^<]*h[aá]z/i,
    },
  },
  is: {
    primary: {
      id: "lexia-is-de-sam",
      label: "LEXÍA online IS↔DE",
      url: "https://lexia.arnastofnun.is/",
      automationNote: "SPA + API returns HTML shell in this environment — not grep-verified",
    },
  },
};

/** Round-2 discovery sources (same pilot lemmas). */
const ROUND2 = {
  hr: [
    {
      id: "ia-zepni-de-hr-1887-filipovic",
      label: "Žepni 1887 DE→HR (IA OCR)",
      kind: "ocr",
      ocrUrl:
        "https://archive.org/download/zepni_rjecnik_hrvatskoga_i_njemackoga_jezika-1887-ivan_filipovic/zepni_rjecnik_hrvatskoga_i_njemackoga_jezika-1887-ivan_filipovic_djvu.txt",
    },
    {
      id: "ia-filipovic-de-hr-1869",
      label: "Filipović 1869 DE→HR (IA OCR)",
      kind: "ocr",
      ocrUrl:
        "https://archive.org/download/novi_rjecnik_hrvatskoga_i_njemackoga_jezika_1_njemacko-hrvatski-1869-filipovic/novi_rjecnik_hrvatskoga_i_njemackoga_jezika_1_njemacko-hrvatski-1869-filipovic_djvu.txt",
    },
    {
      id: "ia-zepni-hr-de-1878-filipovic",
      label: "Žepni 1878 HR→DE pocket (reverse kuća)",
      kind: "reverse",
      ocrUrl:
        "https://archive.org/download/zepni_rjecnik_hrvatskoga_i_njemackoga_jezika_1878-ivan_filipovic/zepni_rjecnik_hrvatskoga_i_njemackoga_jezika_1878-ivan_filipovic_djvu.txt",
      targetLemma: "kuća",
    },
  ],
  hu: [
    {
      id: "ia-bsb-ungrische-deutsche-gesprache",
      label: "Ungrische und deutsche Gespräche (IA OCR)",
      kind: "ocr",
      ocrUrl: "https://archive.org/download/10589452bsb/10589452bsb_djvu.txt",
    },
    {
      id: "real-eod-nemet-magyar-zsebszotar-vol13-1838",
      label: "REAL-EOD pocket vol. 13 (pdftotext)",
      kind: "pdf",
      pdfUrl: "http://real-eod.mtak.hu/1348/13/Magyar_es_N%C3%A9met_Zsebsz%C3%B3t%C3%A1r.pdf",
    },
  ],
};

function curlText(url, maxBufferMb = 64) {
  return execFileSync("curl", ["-sL", "--max-time", "180", url], {
    encoding: "utf8",
    maxBuffer: maxBufferMb * 1024 * 1024,
  });
}

function ocrLemmaHits(ocrUrl, lemmas) {
  const text = curlText(ocrUrl);
  return lemmas.map((lemma) => {
    const re = new RegExp(`\\b${lemma.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "im");
    const m = text.match(re);
    if (!m) return { lemma, found: false };
    const idx = m.index ?? text.search(re);
    return {
      lemma,
      found: true,
      snippet: text.slice(Math.max(0, idx - 35), idx + 100).replace(/\s+/g, " ").trim(),
    };
  });
}

function mekHtmlPageForLemma(lemma) {
  const c = lemma.charAt(0).toLowerCase();
  if (/[a-zäöüß]/.test(c)) return `${c}.htm`;
  return "a.htm";
}

function pilotHuHtml(lemmas) {
  const base = SOURCES.hu.deToTargetHtml.baseUrl;
  const deToTarget = lemmas.map((lemma) => {
    const page = mekHtmlPageForLemma(lemma);
    let text = "";
    try {
      text = curlText(base + page, 8);
    } catch (e) {
      return { lemma, found: false, error: String(e.message || e).slice(0, 80) };
    }
    const re = new RegExp(`\\b${lemma.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "im");
    return { lemma, found: re.test(text), page, method: "MEK HTML letter page" };
  });

  let targetToDe = { lemma: PRODUCTION_HAUS.hu.reverseLookup, found: false };
  try {
    const raw = execFileSync("curl", ["-sL", "--max-time", "45", SOURCES.hu.targetToDe.url], {
      encoding: "buffer",
      maxBuffer: 8 * 1024 * 1024,
    });
    let text = raw.toString("latin1");
    let found = SOURCES.hu.targetToDe.pattern.test(text);
    if (!found) {
      text = raw.toString("binary");
      found = /Haus\s*\(\s*s\s*\)/i.test(text) && /h[aá]z/i.test(text);
    }
    targetToDe = {
      lemma: PRODUCTION_HAUS.hu.reverseLookup,
      found,
      method: "MEK h.htm (legacy encoding)",
      productionTarget: PRODUCTION_HAUS.hu.target,
    };
  } catch (e) {
    targetToDe.error = String(e.message || e).slice(0, 80);
  }

  return { deToTarget, targetToDe, hitCount: deToTarget.filter((r) => r.found).length };
}

function pilotHuPdf(lemmas) {
  const tmp1 = path.join("/tmp", "mek24482_pilot_1.pdf");
  const tmp2 = path.join("/tmp", "mek24482_pilot_2.pdf");
  const txt1 = path.join("/tmp", "mek24482_pilot_1.txt");
  const txt2 = path.join("/tmp", "mek24482_pilot_2.txt");
  const urls = SOURCES.hu.deToTargetPdf.pdfUrls;
  execFileSync("curl", ["-sL", "--max-time", "300", urls[0], "-o", tmp1], { stdio: "pipe" });
  execFileSync("curl", ["-sL", "--max-time", "300", urls[1], "-o", tmp2], { stdio: "pipe" });
  execFileSync("pdftotext", [tmp1, txt1], { stdio: "pipe" });
  execFileSync("pdftotext", [tmp2, txt2], { stdio: "pipe" });
  const text = `${fs.readFileSync(txt1, "utf8")}\n${fs.readFileSync(txt2, "utf8")}`;
  const deToTarget = lemmas.map((lemma) => {
    const re = new RegExp(`\\b${lemma.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "im");
    const found = re.test(text);
    return { lemma, found, method: "pdftotext both parts" };
  });
  const hw = /Haus\s*\(\s*s\s*\)\s*[^\n]{0,40}h[aá]z/i.test(text);
  return {
    deToTarget,
    targetToDe: {
      lemma: PRODUCTION_HAUS.hu.reverseLookup,
      found: hw,
      method: "pdftotext grep Haus (s) … ház",
    },
    hitCount: deToTarget.filter((r) => r.found).length,
  };
}

function pilotReverseFromOcr(ocrUrl, targetLemma) {
  const text = curlText(ocrUrl);
  const reTarget = new RegExp(targetLemma.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i");
  const m = text.match(reTarget);
  if (!m) return { lemma: targetLemma, found: false };
  const idx = m.index ?? text.search(reTarget);
  const window = text.slice(Math.max(0, idx - 200), idx + 400);
  return {
    lemma: targetLemma,
    found: true,
    snippet: window.replace(/\s+/g, " ").trim().slice(0, 280),
    hausInWindow: /\bHaus\b/i.test(window),
    productionTarget: PRODUCTION_HAUS.hr.target,
  };
}

function pilotPdfLemmaHits(pdfUrl, lemmas, tmpBase) {
  const tmpPdf = `${tmpBase}.pdf`;
  const tmpTxt = `${tmpBase}.txt`;
  execFileSync("curl", ["-sL", "--max-time", "300", pdfUrl, "-o", tmpPdf], { stdio: "pipe" });
  execFileSync("pdftotext", [tmpPdf, tmpTxt], { stdio: "pipe" });
  const text = fs.readFileSync(tmpTxt, "utf8");
  const deToTarget = lemmas.map((lemma) => {
    const re = new RegExp(`\\b${lemma.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "im");
    return { lemma, found: re.test(text), method: "pdftotext" };
  });
  const hausHaz = /Haus\s*\(\s*s\s*\)\s*[^\n]{0,60}h[aá]z/i.test(text) || (/\bHaus\b/i.test(text) && /\bh[aá]z\b/i.test(text));
  return {
    deToTarget,
    targetToDe: {
      lemma: PRODUCTION_HAUS.hu.reverseLookup,
      found: hausHaz,
      method: "pdftotext grep Haus … ház",
    },
    hitCount: deToTarget.filter((r) => r.found).length,
  };
}

function pilotRound2Lang(lang) {
  const entries = ROUND2[lang] || [];
  return entries.map((src) => {
    if (src.kind === "ocr") {
      const deToTarget = ocrLemmaHits(src.ocrUrl, DE_LEMMAS);
      const hitCount = deToTarget.filter((r) => r.found).length;
      return {
        id: src.id,
        label: src.label,
        kind: src.kind,
        deToTarget,
        hitCount,
        status: hitCount >= 2 ? "PARTIAL" : hitCount >= 1 ? "WEAK" : "FAIL",
      };
    }
    if (src.kind === "reverse") {
      const targetToDe = pilotReverseFromOcr(src.ocrUrl, src.targetLemma);
      return {
        id: src.id,
        label: src.label,
        kind: src.kind,
        targetToDe,
        status: targetToDe.found ? "PARTIAL" : "FAIL",
      };
    }
    if (src.kind === "pdf") {
      const tmpBase = path.join("/tmp", `pilot-${src.id.replace(/[^a-z0-9]+/gi, "-")}`);
      const block = pilotPdfLemmaHits(src.pdfUrl, DE_LEMMAS, tmpBase);
      return {
        id: src.id,
        label: src.label,
        kind: src.kind,
        ...block,
        status: block.hitCount >= 2 ? "PARTIAL" : block.hitCount >= 1 ? "WEAK" : "FAIL",
      };
    }
    return { id: src.id, label: src.label, status: "SKIP" };
  });
}

function pilotHr() {
  const deToTarget = ocrLemmaHits(SOURCES.hr.deToTarget.ocrUrl, DE_LEMMAS);
  const text = curlText(SOURCES.hr.targetToDe.ocrUrl);
  const target = SOURCES.hr.targetToDe.targetLemma;
  const reTarget = new RegExp(target.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i");
  const m = text.match(reTarget);
  let targetToDe = { lemma: target, found: false };
  if (m) {
    const idx = m.index ?? text.search(reTarget);
    const window = text.slice(Math.max(0, idx - 200), idx + 400);
    targetToDe = {
      lemma: target,
      found: true,
      snippet: window.replace(/\s+/g, " ").trim(),
      hausInWindow: /\bHaus\b/i.test(window),
      productionTarget: PRODUCTION_HAUS.hr.target,
    };
  }
  return {
    deToTarget,
    targetToDe,
    hitCount: deToTarget.filter((r) => r.found).length,
  };
}

function main() {
  const generatedAt = new Date().toISOString();
  const hr = pilotHr();
  const huHtml = pilotHuHtml(DE_LEMMAS);
  const huPdf = process.env.SKIP_HU_MEK_PDF === "1" ? null : pilotHuPdf(DE_LEMMAS);
  const round2 = {
    hr: pilotRound2Lang("hr"),
    hu: pilotRound2Lang("hu"),
  };

  const summary = {
    hr: {
      status: hr.hitCount >= 2 ? "PARTIAL" : "FAIL",
      deToTargetHits: `${hr.hitCount}/6`,
      sourceDeToTarget: SOURCES.hr.deToTarget.id,
      sourceTargetToDe: SOURCES.hr.targetToDe.id,
      targetToDeKuća: hr.targetToDe.found,
      targetToDeHausNear: hr.targetToDe.hausInWindow ?? null,
    },
    hu: {
      status:
        (huPdf?.hitCount ?? huHtml.hitCount) >= 2
          ? "PARTIAL"
          : "FAIL",
      mekHtmlDeToTargetHits: `${huHtml.hitCount}/6`,
      mekPdfDeToTargetHits: huPdf ? `${huPdf.hitCount}/6` : "skipped",
      targetToDeHázHtml: huHtml.targetToDe.found,
      targetToDeHázPdf: huPdf?.targetToDe?.found ?? null,
    },
    is: {
      status: "NOT_VERIFIED_AUTOMATION",
      reason: "No open OCR/PDF/ HTML dictionary text for IS↔DE in this run (LEXÍA requires browser session)",
      lexiaUrl: SOURCES.is.primary.url,
    },
    round2Hr: round2.hr.map((r) => ({
      id: r.id,
      status: r.status,
      hits: r.hitCount != null ? `${r.hitCount}/6` : null,
      reverseKuća: r.targetToDe?.found ?? null,
    })),
    round2Hu: round2.hu.map((r) => ({
      id: r.id,
      status: r.status,
      hits: r.hitCount != null ? `${r.hitCount}/6` : null,
      reverseHáz: r.targetToDe?.found ?? null,
    })),
  };

  const report = {
    schemaVersion: "g2-a1-pdf-bilingual-dictionary-hr-hu-is-pilot-verify-v2",
    generatedAt,
    pilotLemmasDe: DE_LEMMAS,
    productionHausTarget: PRODUCTION_HAUS,
    pilotVerification: { hr, huHtml, huPdf, is: summary.is, round2 },
    summary,
    methodology:
      "Same 6 DE lemmas as bg/bs/fr pilot. hr: IA OCR grep; hu: MEK HTML letter pages + optional MEK 24482 pdftotext; is: no automatable full lexicon text.",
  };

  fs.mkdirSync(OUT_DIR, { recursive: true });
  const jsonPath = path.join(OUT_DIR, "pdf-bilingual-dictionary-hr-hu-is-pilot-verify.json");
  fs.writeFileSync(jsonPath, `${JSON.stringify(report, null, 2)}\n`);

  const md = [
    "# Pilot lemma verification — `hr`, `hu`, `is`",
    "",
    `Generated: ${generatedAt}`,
    "",
    "Pilotlemmas (DE): **Haus, arbeiten, Kleingeld, bewirten, Grenzkonflikt, Machtgier**.",
    "",
    "## Summary",
    "",
    "| Lang | Avots (DE→TARGET) | Hits | Reverse (Haus) | Status |",
    "|------|-------------------|------|----------------|--------|",
    `| **hr** | Šulek IA OCR | ${summary.hr.deToTargetHits} | kuća→DE: ${hr.targetToDe.found ? "yes" : "no"} (Haus nearby: ${hr.targetToDe.hausInWindow ?? "n/a"}) | **${summary.hr.status}** |`,
    `| **hu** | MEK 00072 HTML | ${summary.hu.mekHtmlDeToTargetHits} | Ház via Haus (s): ${huHtml.targetToDe.found ? "yes" : "no"} | **${summary.hu.status}** |`,
    huPdf
      ? `| **hu** | MEK 24482 PDF | ${summary.hu.mekPdfDeToTargetHits} | Ház in PDF: ${huPdf.targetToDe.found ? "yes" : "no"} | compare |`
      : "",
    `| **is** | LEXÍA | — | hús (pilot) / card CURRENT Maya | **${summary.is.status}** |`,
    "",
    "## Round 2 sources (same pilot lemmas)",
    "",
    "| Lang | Source | DE→TARGET hits | Reverse | Status |",
    "|------|--------|----------------|---------|--------|",
    ...round2.hr.map(
      (r) =>
        `| **hr** | ${r.id} | ${r.hitCount != null ? `${r.hitCount}/6` : "—"} | ${
          r.targetToDe ? `kuća: ${r.targetToDe.found ? "yes" : "no"}` : "—"
        } | **${r.status}** |`,
    ),
    ...round2.hu.map(
      (r) =>
        `| **hu** | ${r.id} | ${r.hitCount != null ? `${r.hitCount}/6` : "—"} | ${
          r.targetToDe ? `Ház/Haus: ${r.targetToDe.found ? "yes" : "no"}` : "—"
        } | **${r.status}** |`,
    ),
    "",
    "### Not found on primary (expected for historical lexica)",
    "",
    "- **hr** Šulek OCR: `bewirten`, `Grenzkonflikt`, `Machtgier` absent (word-boundary grep).",
    "- **hu** MEK: `Grenzkonflikt`, `Machtgier` absent on letter pages / PDF text.",
    "",
  ]
    .filter(Boolean)
    .join("\n");

  fs.writeFileSync(path.join(OUT_DIR, "pdf-bilingual-dictionary-hr-hu-is-pilot-verify.md"), `${md}\n`);
  console.log(JSON.stringify({ ok: true, jsonPath, summary }, null, 2));
}

main();
