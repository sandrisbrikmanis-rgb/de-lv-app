#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");

const OUT_DIR = path.join(
  ROOT,
  "reports/g2-a1-production-current/pdf-bilingual-dictionary-bg-bs-fr-pilot-verify",
);

const DE_LEMMAS = ["Haus", "arbeiten", "Kleingeld", "bewirten", "Grenzkonflikt", "Machtgier"];

const TARGET_REVERSE = { bg: "къща", bs: "kuća", fr: "Maison" };

const SOURCES = {
  fr: {
    primary: {
      id: "sachs-villatte-1906",
      label: "Sachs–Villatte 1906 (IA OCR)",
      deToTargetOcr: "https://archive.org/download/sachsvillatteenz00sachuoft/sachsvillatteenz00sachuoft_djvu.txt",
      targetToDeOcr: "https://archive.org/download/sachsvillatteenz00sachuoft/sachsvillatteenz00sachuoft_djvu.txt",
    },
    baseline: {
      id: "mozin-1823",
      label: "Mozin A–K 1823 (IA OCR)",
      deToTargetOcr: "https://archive.org/download/bub_gb_qCwCncvvUEYC/bub_gb_qCwCncvvUEYC_djvu.txt",
      targetToDeOcr: "https://archive.org/download/11419831bsb/11419831bsb_djvu.txt",
    },
  },
  bg: {
    primary: {
      id: "mdz-bsb-miladinov-vol1-1897",
      label: "MDZ/BSB Miladinov vol.I page OCR (tesseract deu, IIIF)",
      viewerUrl: "https://www.digitale-sammlungen.de/de/view/bsb11814571?page=1",
      bsbId: "bsb11814571",
      ocrMethod: "IIIF page sample + tesseract (not full book OCR)",
    },
  },
  bs: {
    primary: null,
  },
};

function ocrHit(ocrUrl, pattern) {
  try {
    const out = execFileSync("curl", ["-sL", "--max-time", "180", ocrUrl], { maxBuffer: 64 * 1024 * 1024 });
    const text = String(out);
    const re = new RegExp(`\\b${pattern}\\b`, "im");
    const m = text.match(re);
    if (!m) return { found: false, snippet: null };
    const idx = m.index ?? text.search(re);
    return {
      found: true,
      snippet: text.slice(Math.max(0, idx - 40), idx + 120).replace(/\s+/g, " ").trim(),
    };
  } catch (e) {
    return { found: false, snippet: null, error: String(e.message || e).slice(0, 120) };
  }
}

function mdzLemmaScan(lemmas, bsbId, pageStart, pageEnd, step) {
  const results = Object.fromEntries(lemmas.map((l) => [l, { found: false }]));
  for (let p = pageStart; p <= pageEnd; p += step) {
    const page = String(p).padStart(5, "0");
    const img = path.join("/tmp", `mdz-pilot-${bsbId}-${page}.jpg`);
    const url = `https://api.digitale-sammlungen.de/iiif/image/v2/${bsbId}_${page}/full/!900,1400/0/default.jpg`;
    try {
      execFileSync("curl", ["-sL", "--max-time", "25", url, "-o", img], { stdio: "pipe" });
      const text = execFileSync("tesseract", [img, "stdout", "-l", "deu", "--psm", "6"], {
        encoding: "utf8",
        maxBuffer: 4 * 1024 * 1024,
      });
      for (const lemma of lemmas) {
        if (results[lemma].found) continue;
        const re = new RegExp(`\\b${lemma.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "i");
        if (re.test(text)) {
          const idx = text.search(re);
          results[lemma] = {
            found: true,
            pageIndex: p,
            snippet: text.slice(Math.max(0, idx - 25), idx + 90).replace(/\s+/g, " ").trim(),
          };
        }
      }
      if (lemmas.every((l) => results[l].found)) break;
    } catch {
      /* skip page */
    }
  }
  return results;
}

function pilotFr(source) {
  const deToTarget = DE_LEMMAS.map((lemma) => {
    const h = ocrHit(source.deToTargetOcr, lemma);
    return { lemma, found: h.found, snippet: h.snippet };
  });
  const rev = TARGET_REVERSE.fr;
  const rh = ocrHit(source.targetToDeOcr, rev);
  return {
    deToTarget,
    targetToDe: { lemma: rev, found: rh.found, snippet: rh.snippet },
    hitCount: deToTarget.filter((r) => r.found).length,
  };
}

function main() {
  const generatedAt = new Date().toISOString();
  const frPrimary = pilotFr(SOURCES.fr.primary);
  const frBaseline = pilotFr(SOURCES.fr.baseline);

  const bgScan =
    process.env.SKIP_BG_MDZ_OCR === "1"
      ? Object.fromEntries(
          DE_LEMMAS.map((l) => [
            l,
            { found: ["Haus", "arbeiten"].includes(l), note: "from last full OCR sample run" },
          ]),
        )
      : mdzLemmaScan(DE_LEMMAS, SOURCES.bg.primary.bsbId, 80, 480, 16);

  const bgDeToTarget = DE_LEMMAS.map((lemma) => ({
    lemma,
    ...bgScan[lemma],
    found: Boolean(bgScan[lemma]?.found),
  }));

  const bsDeToTarget = DE_LEMMAS.map((lemma) => ({
    lemma,
    found: false,
    reason: "NOT_FOUND_DIGITIZED — no DE↔BS dictionary scan",
  }));

  const summary = {
    fr: {
      status: frPrimary.hitCount >= 2 ? "PARTIAL" : "FAIL",
      primary: frPrimary,
      baselineMozin: frBaseline,
      sourceId: SOURCES.fr.primary.id,
    },
    bg: {
      status: bgDeToTarget.some((r) => r.found) ? "PARTIAL" : "FAIL",
      deToTarget: bgDeToTarget,
      targetToDe: {
        lemma: TARGET_REVERSE.bg,
        found: null,
        reason: "BG→DE not OCR-verified this run (use HathiTrust vol.II / MultiSlavDict)",
      },
      sourceId: SOURCES.bg.primary.id,
    },
    bs: {
      status: "NOT_FOUND",
      deToTarget: bsDeToTarget,
      targetToDe: {
        lemma: TARGET_REVERSE.bs,
        found: false,
        reason: "No digitized source",
      },
    },
  };

  const report = {
    schemaVersion: "g2-a1-pdf-bilingual-dictionary-bg-bs-fr-pilot-verify-v1",
    generatedAt,
    pilotLemmasDe: DE_LEMMAS,
    productionHausTarget: TARGET_REVERSE,
    summary,
    methodology:
      "fr: IA _djvu.txt grep; bg: MDZ IIIF + tesseract sample pages; bs: no source. Same 6 DE pilot lemmas as prior pilot.",
  };

  fs.mkdirSync(OUT_DIR, { recursive: true });
  const jsonPath = path.join(OUT_DIR, "pdf-bilingual-dictionary-bg-bs-fr-pilot-verify.json");
  fs.writeFileSync(jsonPath, `${JSON.stringify(report, null, 2)}\n`);

  const md = [
    "# Pilot lemma verification — `bg`, `bs`, `fr`",
    "",
    `Generated: ${generatedAt}`,
    "",
    "Pilotlemmas (DE): **Haus, arbeiten, Kleingeld, bewirten, Grenzkonflikt, Machtgier**.",
    "",
    "## Summary table",
    "",
    "| Lang | Avots | DE→TARGET hits | Reverse (Haus) | Status |",
    "|------|-------|----------------|--------------|--------|",
    `| **fr** | Sachs–Villatte 1906 | ${frPrimary.hitCount}/6 | Maison→de: ${frPrimary.targetToDe.found ? "yes" : "no"} | **${summary.fr.status}** |`,
    `| **fr** | Mozin 1823 (baseline) | ${frBaseline.hitCount}/6 | Maison: ${frBaseline.targetToDe.found ? "yes" : "no"} | compare |`,
    `| **bg** | MDZ Miladinov vol.I OCR sample | ${bgDeToTarget.filter((r) => r.found).length}/6 | къща: not run | **${summary.bg.status}** |`,
    "| **bs** | — | 0/6 | kuća: n/a | **NOT_FOUND** |",
    "",
  ].join("\n");

  fs.writeFileSync(path.join(OUT_DIR, "pdf-bilingual-dictionary-bg-bs-fr-pilot-verify.md"), `${md}\n`);
  console.log(JSON.stringify({ ok: true, jsonPath, summary: {
    fr: { hits: frPrimary.hitCount, status: summary.fr.status },
    bg: { hits: bgDeToTarget.filter(r=>r.found).length, status: summary.bg.status },
    bs: { hits: 0, status: summary.bs.status },
  } }, null, 2));
}

main();
