#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const { withDomainBrowserSession } = require("./lib/g2-a1-production-current/source-adapters/browser/pool");
const { acceptPonsConsent } = require("./lib/g2-a1-production-current/german-target-dictionary-probes");
const { probePilotWord } = require("./lib/g2-a1-production-current/german-target-dictionary-search-probe");
const { cleanTarget } = require("./lib/g2-a1-production-current/three-word-dict-extract");

const OUT_DIR = path.join(
  ROOT,
  "reports/g2-a1-production-current/card-translation-uk-bilingual-sources",
);

const DE_LEMMAS = ["Haus", "arbeiten", "Kleingeld", "bewirten", "Grenzkonflikt", "Machtgier"];

/** UK lemmas for UK→DE probes (card-aligned; refined after DE→UK hits). */
const UK_REVERSE_BY_DE = {
  Haus: "будинок",
  arbeiten: "працювати",
  Kleingeld: "дрібні",
  bewirten: "гостувати",
  Grenzkonflikt: "прикордонний конфлікт",
  Machtgier: "прагнення до влади",
};

const SOURCES = [
  {
    id: "udew-uk-de-bidir",
    name: "UDEW — Ukrainisch–Deutsch Online-Wörterbuch (Universität Leipzig)",
    publisher: "Universität Leipzig / Harrassowitz",
    portalUrl: "https://udew.uni-leipzig.de/udew/ukrainisch_deutsch_online.htm",
    buildUrl: (lemma) =>
      `https://udew.uni-leipzig.de/udew/ukrainisch_deutsch_online.htm?input=${encodeURIComponent(lemma)}`,
    platform: "udew",
    yearBase: "Akademisches Wörterbuch UDEW (Online v13.x)",
    approxEntries: "~60000+ (institucionāls digitālais leksikons)",
  },
  {
    id: "lingea-dict-com-de-uk",
    name: "dict.com / Lingea — німецько-український",
    publisher: "Lingea",
    portalUrl: "https://dict.com/німецько-український",
    buildUrlDeUk: (lemma) =>
      `https://dict.com/translate/german-ukrainian/${encodeURIComponent(lemma.toLowerCase())}`,
    buildUrlUkDe: (lemma) =>
      `https://dict.com/translate/ukrainian-german/${encodeURIComponent(lemma.toLowerCase())}`,
    platform: "dictcom",
    yearBase: "Lingea dict.com digitālais",
    approxEntries: "Profesionāls tiešsaistes leksikons",
  },
  {
    id: "dict-cc-de-uk",
    name: "dict.cc Deutsch–Ukrainisch",
    publisher: "dict.cc",
    portalUrl: "https://deuk.dict.cc/",
    platform: "dictcc",
    dictUrl: "https://deuk.dict.cc/",
    direction: "de→uk",
  },
  {
    id: "dict-cc-uk-de",
    name: "dict.cc Ukrainisch–Deutsch",
    publisher: "dict.cc",
    portalUrl: "https://ukde.dict.cc/",
    platform: "dictcc",
    dictUrl: "https://ukde.dict.cc/",
    direction: "uk→de",
  },
];

function escapeRe(s) {
  return String(s).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function isAutomaticTranslationBlock(text) {
  return /automatic translation|google translate|machine translation|algorithmically generated/i.test(
    text,
  );
}

function extractUewEntries(text, queryLemma, direction) {
  if (!text || text.length < 80) return { usable: false, variants: [], note: "empty_page" };
  if (/404|nicht gefunden|could not be found|Fehler 404/i.test(text)) {
    return { usable: false, variants: [], note: "not_found_page" };
  }
  if (isAutomaticTranslationBlock(text)) {
    return { usable: false, variants: [], note: "automatic_translation_only" };
  }
  const variants = [];
  const lines = text.split("\n").map((l) => l.trim()).filter(Boolean);
  const qEsc = escapeRe(queryLemma);
  if (direction === "de→uk") {
    for (let i = 0; i < lines.length; i++) {
      if (!new RegExp(`^${qEsc}$`, "i").test(lines[i]) && !new RegExp(`\\b${qEsc}\\b`, "i").test(lines[i]))
        continue;
      for (let j = i + 1; j < Math.min(i + 20, lines.length); j++) {
        const line = lines[j];
        if (/ukrainisch|deutsch|copyright|leipzig|suche|faq|download/i.test(line)) continue;
        if (/^[\u0400-\u04FF][\u0400-\u04FF\s'-]{1,48}$/.test(line)) {
          variants.push(cleanTarget(line));
        }
        if (variants.length >= 6) break;
      }
      break;
    }
    if (!variants.length) {
      const m = text.match(/[\u0400-\u04FF]{3,}/g);
      if (m) {
        for (const w of m.slice(0, 8)) {
          const t = cleanTarget(w);
          if (t.length >= 3 && t.length <= 40) variants.push(t);
        }
      }
    }
  } else {
    if (!new RegExp(qEsc, "i").test(text)) return { usable: false, variants: [], note: "query_missing" };
    for (const line of lines) {
      if (new RegExp(`\\b(Haus|arbeiten|Kleingeld|bewirten|Grenzkonflikt|Machtgier)\\b`, "i").test(line)) {
        const m = line.match(/\b(Haus|arbeiten|Kleingeld|bewirten|Grenzkonflikt|Machtgier)\b/gi);
        if (m) for (const g of m) variants.push(g);
      }
    }
  }
  const uniq = [...new Set(variants.map((v) => v.toLowerCase()))].map(
    (k) => variants.find((v) => v.toLowerCase() === k),
  );
  return { usable: uniq.length > 0, variants: uniq, note: null };
}

function extractDictComEntries(html, text, deLemma, direction, queryLemma) {
  if (isAutomaticTranslationBlock(text)) {
    return { usable: false, variants: [], note: "automatic_translation_only" };
  }
  const variants = [];
  if (direction === "de→uk") {
    const re = /class="[^"]*translation[^"]*"[^>]*>([^<]+)</gi;
    let m;
    while ((m = re.exec(html)) && variants.length < 8) {
      const t = cleanTarget(m[1]);
      if (t && /[\u0400-\u04FF]/.test(t)) variants.push(t);
    }
    const linkRe = /href="\/translate\/ukrainian-german\/([^"]+)"[^>]*>([^<]+)</gi;
    while ((m = linkRe.exec(html)) && variants.length < 8) {
      const t = cleanTarget(m[2]);
      if (t && /[\u0400-\u04FF]/.test(t)) variants.push(t);
    }
    if (!variants.length && /[\u0400-\u04FF]{3,}/.test(text)) {
      const words = text.match(/[\u0400-\u04FF][\u0400-\u04FF'-]{2,30}/g) || [];
      for (const w of words.slice(0, 10)) {
        if (!/переклад|словник|україн/i.test(w)) variants.push(cleanTarget(w));
      }
    }
  } else {
    if (new RegExp(`\\b${escapeRe(deLemma)}\\b`, "i").test(text)) variants.push(deLemma);
    const hrefRe = new RegExp(
      `href="/translate/german-ukrainian/${escapeRe(deLemma.toLowerCase())}"`,
      "i",
    );
    if (hrefRe.test(html)) variants.push(deLemma);
  }
  const uniq = [...new Set(variants.filter(Boolean))];
  return { usable: uniq.length > 0, variants: uniq, note: uniq.length ? null : "no_entry_extracted" };
}

async function fetchBrowser(url, platform) {
  const host = new URL(url).hostname;
  return withDomainBrowserSession(host, async (page) => {
    await page.goto(url, { waitUntil: "domcontentloaded", timeout: 120000 });
    if (platform === "dictcom") {
      await page.waitForTimeout(3000);
      try {
        const cf = page.locator('text=Verify you are human');
        if (await cf.isVisible({ timeout: 2000 })) {
          await page.waitForTimeout(8000);
        }
      } catch {
        /* no cf */
      }
    } else {
      await page.waitForTimeout(2500);
    }
    const html = await page.content();
    const text = await page.evaluate(() => document.body?.innerText || "");
    return { finalUrl: page.url(), html, text };
  });
}

async function probeUew(deLemma, direction) {
  const queryLemma = direction === "de→uk" ? deLemma : UK_REVERSE_BY_DE[deLemma];
  const url = SOURCES[0].buildUrl(queryLemma);
  try {
    const page = await fetchBrowser(url, "udew");
    const parsed = extractUewEntries(page.text, queryLemma, direction);
    const status = parsed.usable ? "TRANSLATION_PAIR_FOUND" : "NOT_FOUND";
    return {
      deLemma,
      direction,
      queryLemma,
      dictionary: SOURCES[0].name,
      dictionaryId: SOURCES[0].id,
      ukrainianVariants: direction === "de→uk" ? parsed.variants : [],
      germanVariants: direction === "uk→de" ? parsed.variants : [],
      entryUrl: page.finalUrl,
      status,
      note: parsed.note,
      searchWorks: !/404|nicht gefunden/i.test(page.text),
      evidenceSnippet: page.text.replace(/\s+/g, " ").slice(0, 280),
    };
  } catch (e) {
    return {
      deLemma,
      direction,
      queryLemma,
      dictionary: SOURCES[0].name,
      dictionaryId: SOURCES[0].id,
      entryUrl: url,
      status: "NOT_FOUND",
      note: `TECHNICAL_ERROR: ${e.message}`,
      searchWorks: false,
    };
  }
}

async function probeDictCom(deLemma, direction) {
  const src = SOURCES[1];
  const queryLemma = direction === "de→uk" ? deLemma : UK_REVERSE_BY_DE[deLemma];
  const url =
    direction === "de→uk"
      ? src.buildUrlDeUk(deLemma)
      : src.buildUrlUkDe(queryLemma);
  try {
    const page = await fetchBrowser(url, "dictcom");
    const parsed = extractDictComEntries(page.html, page.text, deLemma, direction, queryLemma);
    return {
      deLemma,
      direction,
      queryLemma,
      dictionary: src.name,
      dictionaryId: src.id,
      ukrainianVariants: direction === "de→uk" ? parsed.variants : [],
      germanVariants: direction === "uk→de" ? parsed.variants : [],
      entryUrl: page.finalUrl,
      status: parsed.usable ? "TRANSLATION_PAIR_FOUND" : "NOT_FOUND",
      note: parsed.note,
      searchWorks: page.text.length > 500 && !/404|not found/i.test(page.text),
      evidenceSnippet: page.text.replace(/\s+/g, " ").slice(0, 280),
    };
  } catch (e) {
    return {
      deLemma,
      direction,
      queryLemma,
      dictionary: src.name,
      dictionaryId: src.id,
      entryUrl: url,
      status: "NOT_FOUND",
      note: `TECHNICAL_ERROR: ${e.message}`,
      searchWorks: false,
    };
  }
}

async function probeDictCc(deLemma, direction) {
  const src = direction === "de→uk" ? SOURCES[2] : SOURCES[3];
  const queryLemma = direction === "de→uk" ? deLemma : UK_REVERSE_BY_DE[deLemma];
  const candidate = {
    id: src.id,
    appCode: "uk",
    url: src.dictUrl,
    name: src.name,
    languagePair: direction,
    access: "PUBLIC_BROWSER_SESSION",
    type: "COMMUNITY_BILINGUAL_DICT_CC",
  };
  const result = await probePilotWord(candidate, queryLemma, "uk");
  const found = result.pilotStatus === "FOUND";
  const ukVariants =
    direction === "de→uk"
      ? [result.sampleTranslation, ...(result.alternativeSamples || [])].filter(Boolean)
      : [];
  const deVariants = direction === "uk→de" && found ? [deLemma] : found ? [result.sampleTranslation] : [];
  return {
    deLemma,
    direction,
    queryLemma,
    dictionary: src.name,
    dictionaryId: src.id,
    ukrainianVariants: ukVariants,
    germanVariants: direction === "uk→de" ? (found ? [deLemma] : deVariants) : [],
    entryUrl: result.resultUrl,
    status: found ? "TRANSLATION_PAIR_FOUND" : "NOT_FOUND",
    note: result.note,
    searchWorks: found,
    evidenceSnippet: null,
  };
}

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const results = [];
  for (const direction of ["de→uk", "uk→de"]) {
    for (const deLemma of DE_LEMMAS) {
      for (const probe of [
        () => probeUew(deLemma, direction),
        () => probeDictCom(deLemma, direction),
        () => probeDictCc(deLemma, direction),
      ]) {
        const row = await probe();
        results.push(row);
        console.log(row.dictionaryId, direction, deLemma, row.status);
      }
    }
  }

  const sourceHealth = {
    uew: {
      portalUrl: SOURCES[0].portalUrl,
      searchWorks: results.some((r) => r.dictionaryId === "udew-uk-de-bidir" && r.searchWorks),
      pairsFound: results.filter(
        (r) => r.dictionaryId === "udew-uk-de-bidir" && r.status === "TRANSLATION_PAIR_FOUND",
      ).length,
    },
    lingeaDictCom: {
      portalUrl: SOURCES[1].portalUrl,
      searchWorks: results.some((r) => r.dictionaryId === "lingea-dict-com-de-uk" && r.searchWorks),
      pairsFound: results.filter(
        (r) => r.dictionaryId === "lingea-dict-com-de-uk" && r.status === "TRANSLATION_PAIR_FOUND",
      ).length,
    },
    dictCc: {
      pairsFound: results.filter(
        (r) => r.dictionaryId.startsWith("dict-cc") && r.status === "TRANSLATION_PAIR_FOUND",
      ).length,
    },
  };

  const report = {
    schemaVersion: "g2-a1-uk-bilingual-source-pilot-v1",
    generatedAt: new Date().toISOString(),
    pilotLemmas: DE_LEMMAS,
    sourceOrder: ["UDEW", "Lingea dict.com", "dict.cc"],
    sourceHealth,
    results,
    uewPrimaryRecommendation: null,
  };

  const uewHits = sourceHealth.udew.pairsFound;
  const uewWorks = sourceHealth.udew.searchWorks;
  if (uewWorks && uewHits >= 8) {
    report.udewPrimaryRecommendation = "YES_UDEW_AS_PRIMARY_BILINGUAL";
  } else if (uewWorks && uewHits >= 4) {
    report.udewPrimaryRecommendation = "PARTIAL_UDEW_NEEDS_MANUAL_REVIEW";
  } else {
    report.udewPrimaryRecommendation = "NO_UDEW_NOT_RELIABLE_THIS_ENV";
  }

  const jsonPath = path.join(OUT_DIR, "uk-bilingual-source-pilot-verification.json");
  fs.writeFileSync(jsonPath, `${JSON.stringify(report, null, 2)}\n`);
  console.log("Wrote", jsonPath);
  console.log("UDEW recommendation:", report.udewPrimaryRecommendation);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
