#!/usr/bin/env node
"use strict";

const { URL } = require("url");
const { withDomainBrowserSession } = require("./source-adapters/browser/pool");
const {
  buildSearchUrl,
  extractFromDictCcPlainText,
  extractFromGlosbeText,
  filterTranslationCandidates,
  cleanTarget,
} = require("./three-word-dict-extract");
const { PILOT_FIELD } = require("./german-target-dictionary-search-catalog");
const { acceptPonsConsent } = require("./german-target-dictionary-probes");

function escapeRe(s) {
  return String(s).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function isSubscriptionWall(text) {
  return /subscription|tellimus|tellimust|paywall|purchase|buy now|log in to continue|sign in to/i.test(text);
}

function extractGlosbeDictionarySection(text, lemma) {
  const esc = escapeRe(lemma);
  const autoIdx = text.search(/AUTOMATIC TRANSLATIONS|SHOW ALGORITHMICALLY GENERATED/i);
  const slice = autoIdx >= 0 ? text.slice(0, autoIdx) : text;
  const topRe = new RegExp(
    `top translations of ["«]?${esc}["»]? into[^\\n]*\\n([^\\n]+)`,
    "i",
  );
  const top = slice.match(topRe);
  const found = [];
  if (top?.[1]) {
    for (const part of top[1].split(/[,;]/)) {
      const w = cleanTarget(part.replace(/\bare the.*/i, "").trim());
      if (w && !new RegExp(`^${esc}$`, "i").test(w)) found.push(w);
    }
  }
  const lineRe = new RegExp(`^([\\p{L}\\p{M}'-]{2,40})\\s+(?:noun|verb|adjective|adverb|substant|veiks)`, "gimu");
  let m;
  while ((m = lineRe.exec(slice))) {
    const w = cleanTarget(m[1]);
    if (w && !new RegExp(`^${esc}$`, "i").test(w)) found.push(w);
  }
  const uniq = [];
  const seen = new Set();
  for (const w of found) {
    const k = w.toLowerCase();
    if (seen.has(k)) continue;
    seen.add(k);
    uniq.push(w);
  }
  return uniq;
}

function extractVokieciuLietuviu(text, lemma) {
  if (/Nėra vertimo/i.test(text)) return [];
  const blocklist = /^(Pradžia|Versti|Įveskite|Atraskite|draugai|©)/i;
  const vt = text.match(/(?:\||\s)vt\s+([^\n|]+)/i);
  if (vt?.[1]) {
    const t = cleanTarget(vt[1].split(";")[0]);
    if (t && !blocklist.test(t)) return [t];
  }
  const quoted = text.match(/\|\s*"[^"]*-\s*f[^|]*\|\s*([^|\n]+)/i);
  if (quoted?.[1]) {
    const t = cleanTarget(quoted[1]);
    if (t && !blocklist.test(t)) return [t];
  }
  const lines = text.split("\n").map((l) => l.trim()).filter(Boolean);
  const esc = escapeRe(lemma);
  const headIdx = lines.findIndex((l) => new RegExp(`^${esc}$`, "i").test(l));
  if (headIdx >= 0) {
    for (const l of lines.slice(headIdx + 1, headIdx + 8)) {
      if (blocklist.test(l) || /\[taisyti\]|\[papildyti\]/i.test(l)) continue;
      if (new RegExp(`^${esc}$`, "i").test(l)) continue;
      if (new RegExp(`^${esc}[a-zäöüß]`, "i").test(l)) continue;
      const t = cleanTarget(l);
      if (t && t.length >= 3) return [t];
    }
  }
  return [];
}

function extractLodAdvanced(text, lemma, appCode) {
  if (/Et gëtt keng Resultater|Feeler 404/i.test(text)) return [];
  if (!new RegExp(`\\b${escapeRe(lemma)}\\b`, "i").test(text)) return [];
  if (!/Resultater|Substantiv|Verb|Adjectiv/i.test(text)) return [];
  const lines = text.split("\n").map((l) => cleanTarget(l)).filter(Boolean);
  const idx = lines.findIndex((l) => l.toLowerCase() === lemma.toLowerCase());
  if (idx < 0) return [];
  if (appCode === "lb") {
    if (/Substantiv|Verb|Adjectiv/i.test(text)) return [lemma];
    const tail = lines.slice(idx + 1, idx + 6).filter((l) => !/kopéiert|Export|Cookies|Substantiv|Neutrum|Maskulinum|Femininum/i.test(l));
    if (tail.length) return [tail[0]];
    return [lemma];
  }
  return [lemma];
}

function isGlosbeAutomaticOnly(text, lemma) {
  if (!/glosbe/i.test(text) && !/automatic translations/i.test(text)) {
    /* glosbe pages always mention section headers */
  }
  const hasAuto = /automatic translations/i.test(text);
  const hasDictSection = /translation memory|phrase|examples|dictionary/i.test(text);
  const extracted = extractFromGlosbeText(text, lemma);
  const dictCcStyle = extractFromDictCcPlainText(text, lemma);
  if (extracted.length || dictCcStyle.length) return false;
  if (hasAuto && !extracted.length && !dictCcStyle.length) {
    const lemmaPresent = new RegExp(`\\b${escapeRe(lemma)}\\b`, "i").test(text);
    if (lemmaPresent && hasAuto) return true;
  }
  return false;
}

function buildSearchUrlForCandidate(candidate, lemma) {
  const row = { url: candidate.url, name: candidate.name };
  if (candidate.searchMode === "LOD_ADVANCED_SEARCH" || candidate.searchMode === "LOD_DE_INPUT") {
    return `https://lod.lu/advanced-search/1?query=${encodeURIComponent(lemma)}`;
  }
  if (/vokieciu-lietuviu\.com/i.test(candidate.url)) {
    return `http://www.vokieciu-lietuviu.com/?word=${encodeURIComponent(lemma)}`;
  }
  if (/pons\.com\/translate\//i.test(candidate.url)) {
    const base = candidate.url.replace(/\/$/, "");
    return `${base}/${encodeURIComponent(lemma)}`;
  }
  return buildSearchUrl(row, lemma);
}

async function fetchDictionaryPageForCandidate(candidate, lemma) {
  if (
    candidate.searchMode === "LOD_ADVANCED_SEARCH" ||
    candidate.searchMode === "LOD_DE_INPUT" ||
    (/lod\.lu/i.test(candidate.url) && candidate.appCode === "lb")
  ) {
    const searchUrl = `https://lod.lu/advanced-search/1?query=${encodeURIComponent(lemma)}`;
    return withDomainBrowserSession("lod.lu", async (page) => {
      await page.goto(searchUrl, { waitUntil: "domcontentloaded", timeout: 90000 });
      await page.waitForTimeout(8000);
      const finalUrl = page.url();
      const text = await page.evaluate(() => document.body?.innerText || "");
      return { blocked: false, finalUrl, text, searchUrl };
    });
  }

  const searchUrl = buildSearchUrlForCandidate(candidate, lemma);
  const host = new URL(searchUrl).hostname;
  return withDomainBrowserSession(host, async (page) => {
    await page.goto(searchUrl, { waitUntil: "domcontentloaded", timeout: 90000 });
    if (/pons\.com/i.test(searchUrl)) {
      await acceptPonsConsent(page);
    }
    await page.waitForTimeout(8000);
    const finalUrl = page.url();
    const text = await page.evaluate(() => document.body?.innerText || "");
    if (/captcha|access denied|403 forbidden|cf-browser-verification/i.test(text)) {
      return { blocked: true, finalUrl, text, searchUrl };
    }
    if (candidate.access === "SUBSCRIPTION_REQUIRED" || /keelevara\.ee/i.test(searchUrl)) {
      if (isSubscriptionWall(text)) {
        return { blocked: true, subscription: true, finalUrl, text, searchUrl };
      }
    }
    return { blocked: false, finalUrl, text, searchUrl };
  });
}

function extractTranslations(page, lemma, searchUrl, appCode) {
  if (page.blocked) return [];
  let translations = [];
  if (/vokieciu-lietuviu\.com/i.test(searchUrl)) {
    translations = extractVokieciuLietuviu(page.text, lemma);
  } else if (/dict\.cc/i.test(searchUrl)) {
    translations = extractFromDictCcPlainText(page.text, lemma);
  } else if (/glosbe\.com/i.test(searchUrl)) {
    translations = extractGlosbeDictionarySection(page.text, lemma);
    if (!translations.length) translations = extractFromGlosbeText(page.text, lemma);
    if (!translations.length) translations = extractFromDictCcPlainText(page.text, lemma);
  } else if (/lod\.lu/i.test(searchUrl)) {
    translations = extractLodAdvanced(page.text, lemma, appCode);
  } else {
    translations = extractFromDictCcPlainText(page.text, lemma);
    if (!translations.length && new RegExp(escapeRe(lemma), "i").test(page.text)) {
      const idx = page.text.search(new RegExp(escapeRe(lemma), "i"));
      const chunk = page.text.slice(idx, idx + 800);
      const lines = chunk
        .split("\n")
        .map((l) => cleanTarget(l))
        .filter(Boolean)
        .filter((l) => !new RegExp(`^${escapeRe(lemma)}$`, "i").test(l));
      translations = lines.slice(0, 5);
    }
  }
  return filterTranslationCandidates(translations, lemma, appCode);
}

async function probePilotWord(candidate, lemma, appCode) {
  if (candidate.subscriptionReferenceOnly) {
    return {
      pilotStatus: PILOT_FIELD.BLOCKED,
      resultUrl: candidate.url,
      sampleTranslation: null,
      note: "SUBSCRIPTION_REQUIRED reference — not used as audit translation source",
      access: "SUBSCRIPTION_REQUIRED",
    };
  }

  const page = await fetchDictionaryPageForCandidate(candidate, lemma);
  const searchUrl = page.searchUrl || buildSearchUrlForCandidate(candidate, lemma);

  if (page.blocked) {
    if (page.subscription || candidate.access === "SUBSCRIPTION_REQUIRED") {
      return {
        pilotStatus: PILOT_FIELD.BLOCKED,
        resultUrl: page.finalUrl || searchUrl,
        sampleTranslation: null,
        note: "SUBSCRIPTION_REQUIRED",
        access: "SUBSCRIPTION_REQUIRED",
      };
    }
    return {
      pilotStatus: PILOT_FIELD.BLOCKED,
      resultUrl: page.finalUrl || searchUrl,
      sampleTranslation: null,
      note: "Technical access blocked",
      access: candidate.access,
    };
  }

  if (/glosbe\.com/i.test(searchUrl) && !extractGlosbeDictionarySection(page.text, lemma).length && isGlosbeAutomaticOnly(page.text, lemma)) {
    return {
      pilotStatus: PILOT_FIELD.AUTOMATIC_TRANSLATION_ONLY,
      resultUrl: page.finalUrl || searchUrl,
      sampleTranslation: null,
      note: "Glosbe automatic translations only — dictionary entry not extracted",
      access: candidate.access,
    };
  }

  const translations = extractTranslations(page, lemma, searchUrl, appCode);
  if (!translations.length) {
    return {
      pilotStatus: PILOT_FIELD.NOT_FOUND,
      resultUrl: page.finalUrl || searchUrl,
      sampleTranslation: null,
      note: null,
      access: candidate.access,
    };
  }

  return {
    pilotStatus: PILOT_FIELD.FOUND,
    resultUrl: page.finalUrl || searchUrl,
    sampleTranslation: translations[0],
    alternativeSamples: translations.slice(1, 4),
    note: null,
    access: candidate.access,
  };
}

module.exports = {
  probePilotWord,
  buildSearchUrlForCandidate,
  isGlosbeAutomaticOnly,
  isSubscriptionWall,
};
