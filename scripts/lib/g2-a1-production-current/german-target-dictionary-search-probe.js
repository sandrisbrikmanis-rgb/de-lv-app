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
  if (candidate.searchMode === "LOD_DE_INPUT") {
    return `https://lod.lu/de/search/${encodeURIComponent(lemma)}`;
  }
  if (/pons\.com\/translate\//i.test(candidate.url)) {
    const base = candidate.url.replace(/\/$/, "");
    return `${base}/${encodeURIComponent(lemma)}`;
  }
  return buildSearchUrl(row, lemma);
}

async function fetchLodDePage(lemma) {
  return withDomainBrowserSession("lod.lu", async (page) => {
    await page.goto("https://lod.lu/", { waitUntil: "domcontentloaded", timeout: 90000 });
    await page.waitForTimeout(2500);
    try {
      const deBtn = page.getByRole("button", { name: /DE|Deutsch|German/i }).first();
      await deBtn.click({ timeout: 4000 });
      await page.waitForTimeout(1500);
    } catch {
      /* URL fallback below */
    }
    const url = `https://lod.lu/de/search/${encodeURIComponent(lemma)}`;
    await page.goto(url, { waitUntil: "domcontentloaded", timeout: 90000 });
    await page.waitForTimeout(7000);
    const finalUrl = page.url();
    const text = await page.evaluate(() => document.body?.innerText || "");
    return { blocked: false, finalUrl, text, searchUrl: url };
  });
}

async function fetchDictionaryPageForCandidate(candidate, lemma) {
  if (candidate.searchMode === "LOD_DE_INPUT" || (/lod\.lu/i.test(candidate.url) && candidate.appCode === "lb")) {
    return fetchLodDePage(lemma);
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
  if (/dict\.cc/i.test(searchUrl)) {
    translations = extractFromDictCcPlainText(page.text, lemma);
  } else if (/glosbe\.com/i.test(searchUrl)) {
    translations = extractFromGlosbeText(page.text, lemma);
    if (!translations.length) translations = extractFromDictCcPlainText(page.text, lemma);
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

  if (/glosbe\.com/i.test(searchUrl) && isGlosbeAutomaticOnly(page.text, lemma)) {
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
