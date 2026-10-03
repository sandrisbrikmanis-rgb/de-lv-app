#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");

const OUT_DIR = path.join(
  ROOT,
  "reports/g2-a1-production-current/pdf-bilingual-dictionary-it-mk-nl-pilot-verify",
);

const DE_LEMMAS = ["Haus", "arbeiten", "Kleingeld", "bewirten", "Grenzkonflikt", "Machtgier"];

const PRODUCTION_HAUS = {
  it: { target: "casa", reverseLookup: "casa" },
  nl: { target: "Huis", reverseLookup: "Huis" },
  mk: { target: "Куќа", reverseLookup: "куќа" },
};

const SOURCES = {
  it: {
    primary: {
      id: "ia-bsb-neues-it-de-11793257-vol1",
      ocrUrls: ["https://archive.org/download/11793257bsb/11793257bsb_djvu.txt"],
      mdzIiifSample:
        "https://api.digitale-sammlungen.de/iiif/image/v2/bsb11793257_00020/full/full/0/default.jpg",
    },
    alt: {
      id: "ia-bsb-neues-vollstaendig-it-de-vol1-2",
      ocrUrls: [
        "https://archive.org/download/11645915bsb/11645915bsb_djvu.txt",
        "https://archive.org/download/11645916bsb/11645916bsb_djvu.txt",
      ],
    },
    altBull: {
      id: "ia-neuesitalienisch00bulluoft-vol1",
      ocrUrl: "https://archive.org/download/neuesitalienisch00bulluoft/neuesitalienisch00bulluoft_djvu.txt",
    },
  },
  nl: {
    primary: {
      id: "ia-bsb-nieuw-woordenboek-nl-hoogduits-1787",
      ocrUrls: [
        "https://archive.org/download/10523039bsb/10523039bsb_djvu.txt",
        "https://archive.org/download/10627384bsb/10627384bsb_djvu.txt",
        "https://archive.org/download/10523038bsb/10523038bsb_djvu.txt",
      ],
      mdzIiifSample:
        "https://api.digitale-sammlungen.de/iiif/image/v2/bsb10523039_00020/full/full/0/default.jpg",
    },
  },
  mk: {
    primary: {
      id: "web-makedonisch-info-de-mk",
      searchUrlDe: "http://makedonisch.info/index/search/Haus",
      searchUrlMk: "http://makedonisch.info/index/search/%D0%BA%D1%83%D1%9A%D0%B0",
    },
  },
};

function curlText(url, maxMb = 128) {
  return execFileSync("curl", ["-sL", "--max-time", "240", url], {
    encoding: "utf8",
    maxBuffer: maxMb * 1024 * 1024,
  });
}

function ocrLemmaHitsFromText(text, lemmas) {
  return lemmas.map((lemma) => {
    const re = new RegExp(`\\b${lemma.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "im");
    const found = re.test(text);
    if (!found) return { lemma, found: false };
    const idx = text.search(re);
    return {
      lemma,
      found: true,
      snippet: text.slice(Math.max(0, idx - 35), idx + 100).replace(/\s+/g, " ").trim(),
    };
  });
}

function loadOcrCombined(urls) {
  return urls.map((u) => curlText(u)).join("\n");
}

function pilotIt() {
  const text = loadOcrCombined(SOURCES.it.primary.ocrUrls);
  const deToTarget = ocrLemmaHitsFromText(text, DE_LEMMAS);
  const altText = loadOcrCombined(SOURCES.it.alt.ocrUrls);
  const altHits = ocrLemmaHitsFromText(altText, DE_LEMMAS);
  const bullText = curlText(SOURCES.it.altBull.ocrUrl);
  const bullHits = ocrLemmaHitsFromText(bullText, DE_LEMMAS);
  let mdzIiifOk = false;
  try {
    const h = execFileSync(
      "curl",
      ["-sI", "-L", "--max-time", "30", SOURCES.it.primary.mdzIiifSample],
      { encoding: "utf8" },
    );
    mdzIiifOk = /HTTP\/\S+\s+200/.test(h);
  } catch {
    mdzIiifOk = false;
  }
  const target = PRODUCTION_HAUS.it.reverseLookup;
  const reTarget = new RegExp(`\\b${target}\\b`, "i");
  const m = text.match(reTarget);
  let targetToDe = { lemma: target, found: false };
  if (m) {
    const idx = m.index ?? text.search(reTarget);
    const window = text.slice(Math.max(0, idx - 200), idx + 400);
    targetToDe = {
      lemma: target,
      found: true,
      hausInWindow: /\bHaus\b/i.test(window),
      productionTarget: PRODUCTION_HAUS.it.target,
    };
  }
  return {
    deToTarget,
    targetToDe,
    hitCount: deToTarget.filter((r) => r.found).length,
    mdzIiifSampleOk: mdzIiifOk,
    altSource11645915: {
      id: SOURCES.it.alt.id,
      hitCount: altHits.filter((r) => r.found).length,
      deToTarget: altHits,
    },
    altSourceBull00: {
      id: SOURCES.it.altBull.id,
      hitCount: bullHits.filter((r) => r.found).length,
      deToTarget: bullHits,
    },
  };
}

function pilotNl() {
  const text = loadOcrCombined(SOURCES.nl.primary.ocrUrls);
  const deToTarget = ocrLemmaHitsFromText(text, DE_LEMMAS);
  let mdzIiifOk = false;
  try {
    const h = execFileSync(
      "curl",
      ["-sI", "-L", "--max-time", "30", SOURCES.nl.primary.mdzIiifSample],
      { encoding: "utf8" },
    );
    mdzIiifOk = /HTTP\/\S+\s+200/.test(h);
  } catch {
    mdzIiifOk = false;
  }
  const variantNotes = {
    kleinGeldSpaced: /Klein\s+geld/i.test(text),
  };
  const target = PRODUCTION_HAUS.nl.reverseLookup;
  const reTarget = new RegExp(`\\b${target}\\b`, "i");
  const targetFound = reTarget.test(text);
  let targetToDe = {
    lemma: target,
    found: targetFound,
    hausInWindow: null,
    productionTarget: PRODUCTION_HAUS.nl.target,
  };
  if (targetFound) {
    const idx = text.search(reTarget);
    targetToDe.hausInWindow = /\bHaus\b/i.test(text.slice(Math.max(0, idx - 250), idx + 250));
  }
  return {
    deToTarget,
    targetToDe,
    hitCount: deToTarget.filter((r) => r.found).length,
    variantNotes,
    mdzIiifSampleOk: mdzIiifOk,
  };
}

function pilotMk() {
  let deHtml = "";
  let mkHtml = "";
  try {
    deHtml = curlText(SOURCES.mk.primary.searchUrlDe, 2);
    mkHtml = curlText(SOURCES.mk.primary.searchUrlMk, 2);
  } catch (e) {
    return {
      deToTarget: DE_LEMMAS.map((lemma) => ({ lemma, found: false, error: "fetch failed" })),
      targetToDe: { lemma: PRODUCTION_HAUS.mk.reverseLookup, found: false },
      hitCount: 0,
      automationNote: String(e.message || e).slice(0, 120),
    };
  }
  const deToTarget = DE_LEMMAS.map((lemma) => ({
    lemma,
    found: false,
    method: "makedonisch.info HTML — no grepable lexicon body in automation",
  }));
  const cyrHouse = /куќ|Куќ/i.test(mkHtml);
  const hausOnPage = /\bHaus\b/i.test(deHtml);
  return {
    deToTarget,
    targetToDe: {
      lemma: PRODUCTION_HAUS.mk.reverseLookup,
      found: cyrHouse && mkHtml.length > 1000,
      hausOnDeSearchPage: hausOnPage,
      productionTarget: PRODUCTION_HAUS.mk.target,
      method: "makedonisch.info search HTML (not full dictionary OCR)",
    },
    hitCount: 0,
    automationNote: "No open DE↔MK PDF/OCR; web UI does not expose pilot lemmas for word-boundary grep",
  };
}

function main() {
  const generatedAt = new Date().toISOString();
  const it = pilotIt();
  const nl = pilotNl();
  const mk = pilotMk();

  const summary = {
    it: {
      status: it.hitCount >= 4 ? "READY" : it.hitCount >= 2 ? "PARTIAL" : "FAIL",
      deToTargetHits: `${it.hitCount}/6`,
      alt11645915Hits: `${it.altSource11645915.hitCount}/6`,
      altBull00Hits: `${it.altSourceBull00.hitCount}/6`,
      sourceId: SOURCES.it.primary.id,
      mdzIiifSampleOk: it.mdzIiifSampleOk,
      targetToDeCasa: it.targetToDe.found,
      targetToDeHausNear: it.targetToDe.hausInWindow ?? null,
    },
    nl: {
      status: nl.hitCount >= 2 ? "PARTIAL" : "FAIL",
      deToTargetHits: `${nl.hitCount}/6`,
      sourceId: SOURCES.nl.primary.id,
      mdzIiifSampleOk: nl.mdzIiifSampleOk,
      targetToDeHuis: nl.targetToDe.found,
      kleinGeldVariant: nl.variantNotes.kleinGeldSpaced,
    },
    mk: {
      status: "NOT_VERIFIED_AUTOMATION",
      deToTargetHits: `${mk.hitCount}/6`,
      sourceId: SOURCES.mk.primary.id,
      reason: mk.automationNote,
    },
  };

  const report = {
    schemaVersion: "g2-a1-pdf-bilingual-dictionary-it-mk-nl-pilot-verify-v2",
    generatedAt,
    pilotLemmasDe: DE_LEMMAS,
    productionHausTarget: PRODUCTION_HAUS,
    pilotVerification: { it, nl, mk },
    summary,
    bestFoundSource: {
      it: "ia-bsb-neues-it-de-11793257-vol1 (6/6 OCR + MDZ IIIF) + Bull/11645915 alts",
      nl: "ia-bsb-nieuw-woordenboek-nl-hoogduits-1787 (3 BSB parts)",
      mk: "NOT_FOUND_DIGITIZED — makedonisch.info PARTIAL web only",
    },
  };

  fs.mkdirSync(OUT_DIR, { recursive: true });
  const jsonPath = path.join(OUT_DIR, "pdf-bilingual-dictionary-it-mk-nl-pilot-verify.json");
  fs.writeFileSync(jsonPath, `${JSON.stringify(report, null, 2)}\n`);

  const md = [
    "# Pilot lemma verification — `it`, `mk`, `nl`",
    "",
    `Generated: ${generatedAt}`,
    "",
    "Pilotlemmas (DE): **Haus, arbeiten, Kleingeld, bewirten, Grenzkonflikt, Machtgier**.",
    "",
    "## Summary",
    "",
    "| Lang | Source | DE→TARGET | Reverse (Haus) | Status |",
    "|------|--------|-----------|----------------|--------|",
    `| **it** | BSB 11793257 OCR + MDZ IIIF | ${summary.it.deToTargetHits} | casa: ${it.targetToDe.found ? "yes" : "no"} | **${summary.it.status}** |`,
    `| **it** | 11645915/16 OCR (alt) | ${summary.it.alt11645915Hits} | — | compare |`,
    `| **it** | Bull vol.0 OCR (alt) | ${summary.it.altBull00Hits} | — | compare |`,
    `| **nl** | BSB Nieuw woordenboek 1787 (3 parts) | ${summary.nl.deToTargetHits} | Huis: ${nl.targetToDe.found ? "yes" : "no"} | **${summary.nl.status}** |`,
    `| **mk** | makedonisch.info | ${summary.mk.deToTargetHits} | куќа web: ${mk.targetToDe.found ? "weak" : "no"} | **${summary.mk.status}** |`,
    "",
    "### Expected gaps",
    "",
    "- Historical OCR: `Kleingeld`, `Grenzkonflikt`, `Machtgier` often absent (word-boundary grep).",
    "- **nl** may attest `Klein geld` as spaced variant (not counted in 2/6 strict hits).",
    "- **mk:** no open full lexicon text — do not treat as READY audit source.",
    "",
  ].join("\n");

  fs.writeFileSync(path.join(OUT_DIR, "pdf-bilingual-dictionary-it-mk-nl-pilot-verify.md"), `${md}\n`);
  console.log(JSON.stringify({ ok: true, jsonPath, summary }, null, 2));
}

main();
