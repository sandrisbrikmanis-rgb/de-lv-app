#!/usr/bin/env node
"use strict";

const { URL } = require("url");
const { withDomainBrowserSession } = require("./source-adapters/browser/pool");

function escapeRe(s) {
  return String(s).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function cleanTarget(raw) {
  let t = String(raw || "")
    .replace(/\{[^}]+\}/g, "")
    .replace(/\[[^\]]+\]/g, "")
    .replace(/^\d+\s*/, "")
    .replace(/^to\s+/i, "")
    .trim();
  t = t.replace(/\s+/g, " ");
  if (!t || t.length > 80) return null;
  if (/^edit$|^SYNO|^NOUN|^VERB|^–$/i.test(t)) return null;
  return t;
}

function uniqueList(items) {
  const seen = new Set();
  const out = [];
  for (const raw of items) {
    const c = cleanTarget(raw);
    if (!c) continue;
    const key = c.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(c);
  }
  return out;
}

function extractFromDictCcPlainText(text, lemma) {
  const esc = escapeRe(lemma);
  const found = [];
  const patterns = [
    new RegExp(`${esc}\\s*\\{[^}]*\\}\\s*\\d+\\s+([^\\n\\t]+)`, "gi"),
    new RegExp(`${esc}\\s*\\{[^}]*\\}\\s*\\n\\s*\\d+\\s*\\n\\s*([^\\n]+)`, "gi"),
    new RegExp(`([^\n\t]+?)\\s*\\n\\s*\\d+\\s*\\n\\s*${esc}\\b`, "gi"),
    new RegExp(`\\t([^\t\n]+?)\\t\\n\\d+\\n${esc}\\b`, "gi"),
  ];
  for (const re of patterns) {
    let m;
    while ((m = re.exec(text))) {
      found.push(m[1]);
    }
  }
  return uniqueList(found);
}

function extractFromGlosbeText(text, lemma) {
  const esc = escapeRe(lemma);
  const found = [];
  const re = new RegExp(`${esc}[^\\n]{0,40}\\n([^\\n]{2,60})`, "gi");
  let m;
  while ((m = re.exec(text))) {
    found.push(m[1]);
  }
  return uniqueList(found);
}

function buildSearchUrl(dictRow, lemma) {
  const base = dictRow.url.replace(/\/$/, "");
  if (/dict\.cc/i.test(base)) {
    return `${base}/?s=${encodeURIComponent(lemma)}`;
  }
  if (/glosbe\.com/i.test(base)) {
    return `${base}/${encodeURIComponent(lemma)}`;
  }
  if (/langenscheidt\.com/i.test(base)) {
    return `${base}/${encodeURIComponent(lemma.toLowerCase())}`;
  }
  if (/lod\.lu/i.test(base)) {
    return `https://lod.lu/search?q=${encodeURIComponent(lemma)}`;
  }
  if (/keelevara\.ee/i.test(base)) {
    return `https://www.keelevara.ee/et/search?query=${encodeURIComponent(lemma)}`;
  }
  if (/letonika\.lv/i.test(base)) {
    return `https://www.letonika.lv/groups/default.aspx?g=2&r=10601001&q=${encodeURIComponent(lemma)}`;
  }
  if (/zodynai\.org/i.test(base)) {
    return `https://www.zodynai.org/vok/${encodeURIComponent(lemma)}`;
  }
  return `${base}/?s=${encodeURIComponent(lemma)}`;
}

async function fetchDictionaryPage(url) {
  const host = new URL(url).hostname;
  return withDomainBrowserSession(host, async (page) => {
    await page.goto(url, { waitUntil: "domcontentloaded", timeout: 90000 });
    await page.waitForTimeout(8000);
    const finalUrl = page.url();
    const text = await page.evaluate(() => document.body?.innerText || "");
    if (/captcha|access denied|403 forbidden|login required/i.test(text)) {
      return { blocked: true, finalUrl, text: text.slice(0, 400) };
    }
    return { blocked: false, finalUrl, text };
  });
}

async function lookupBilingualTranslation({ dictRow, lemma, appCode }) {
  const searchUrl = buildSearchUrl(dictRow, lemma);
  try {
    const page = await fetchDictionaryPage(searchUrl);
    if (page.blocked) {
      return {
        resultStatus: "SOURCE_ACCESS_BLOCKED",
        resultUrl: page.finalUrl || searchUrl,
        dictionaryName: dictRow.name,
        targetTranslation: null,
        alternativeTranslations: [],
        note: "Dictionary access blocked or captcha",
      };
    }

    let translations = [];
    if (/dict\.cc/i.test(searchUrl)) {
      translations = extractFromDictCcPlainText(page.text, lemma);
    } else if (/glosbe\.com/i.test(searchUrl)) {
      translations = extractFromGlosbeText(page.text, lemma);
      if (!translations.length) {
        translations = extractFromDictCcPlainText(page.text, lemma);
      }
    } else {
      translations = extractFromDictCcPlainText(page.text, lemma);
      if (!translations.length && new RegExp(escapeRe(lemma), "i").test(page.text)) {
        const idx = page.text.search(new RegExp(escapeRe(lemma), "i"));
        const chunk = page.text.slice(idx, idx + 600);
        const lineAfter = chunk.split("\n").slice(1, 4).join(" ");
        const guess = cleanTarget(lineAfter);
        if (guess && !new RegExp(escapeRe(lemma), "i").test(guess)) translations = [guess];
      }
    }

    if (!translations.length) {
      return {
        resultStatus: "ENTRY_NOT_FOUND",
        resultUrl: page.finalUrl || searchUrl,
        dictionaryName: dictRow.name,
        targetTranslation: null,
        alternativeTranslations: [],
        note: `No bilingual pair extracted for ${lemma} (${appCode})`,
      };
    }

    const primary = translations[0];
    const alts = translations.slice(1);
    return {
      resultStatus: alts.length ? "MULTIPLE_TRANSLATIONS_FOUND" : "TRANSLATION_FOUND",
      resultUrl: page.finalUrl || searchUrl,
      dictionaryName: dictRow.name,
      targetTranslation: primary,
      alternativeTranslations: alts,
      note: alts.length ? `Dictionary lists ${translations.length} renderings.` : null,
    };
  } catch (e) {
    return {
      resultStatus: "SOURCE_ACCESS_BLOCKED",
      resultUrl: searchUrl,
      dictionaryName: dictRow.name,
      targetTranslation: null,
      alternativeTranslations: [],
      note: String(e.message || e),
    };
  }
}

module.exports = {
  buildSearchUrl,
  extractFromDictCcPlainText,
  lookupBilingualTranslation,
  cleanTarget,
};
