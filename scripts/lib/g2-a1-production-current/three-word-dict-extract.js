#!/usr/bin/env node
"use strict";

const { URL } = require("url");
const { withDomainBrowserSession } = require("./source-adapters/browser/pool");

function escapeRe(s) {
  return String(s).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function isDictionaryUiNoise(raw) {
  const t = String(raw || "").trim();
  if (!t) return true;
  if (/^words?\s*:/i.test(t)) return true;
  if (/^words?\s+(verbs|nouns|adjectives|adverbs|others|phrases|idioms)\b/i.test(t)) return true;
  if (/^(verbs|nouns|adjectives|adverbs|others|phrases|idioms|synonyms|antonyms)$/i.test(t)) return true;
  if (/^(more translations|similar words|add translation|contribute|forum|register|log in)$/i.test(t)) return true;
  if (/^automatic translation/i.test(t)) return true;
  if (/overview of all translations/i.test(t)) return true;
  if (/^fill sth$/i.test(t)) return true;
  if (/\bsth\b|\bsb\b|\bs\.?\s*th\.?/i.test(t) && t.length < 20) return true;
  if (/^©|^copyright|^navigation|^menu$/i.test(t)) return true;
  if (/^\{[nvadj\.]+\}$/i.test(t)) return true;
  if (/^dict\.cc|^glosbe|^pons/i.test(t)) return true;
  return false;
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
  if (isDictionaryUiNoise(t)) return null;
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

function filterTranslationCandidates(translations, lemma, appCode) {
  const blocklist = /^(words?|dictionary|german|english|czech|add example|ableitung|derivation)$/i;
  return translations.filter((t) => {
    if (!t || blocklist.test(t)) return false;
    if (isDictionaryUiNoise(t)) return false;
    if (lemma === "Reute") {
      if (/Reutlingen|Getreide|Getriebe/i.test(t)) return false;
    }
    if (lemma === "ablehnen") {
      if (/Ableitende|Harnwege|Ableitung/i.test(t)) return false;
    }
    if (lemma === "Getreide") {
      if (/^Getriebe$/i.test(t)) return false;
    }
    if (appCode !== "de" && appCode !== "lb") {
      if (/[äöüß]/i.test(t) && t.length > 8) return false;
    }
    if (t.length > 55) return false;
    return true;
  });
}

function dictCcPosBrace(partOfSpeech) {
  const p = String(partOfSpeech || "").trim().toLowerCase();
  if (p === "verb") return ["{v}", "{vt}"];
  if (p === "noun") return ["{n}"];
  if (p === "adjective" || p === "participle") return ["{adj}", "{a}"];
  if (p === "adverb") return ["{adv}"];
  return null;
}

function extractFromDictCcStructured(text, lemma, partOfSpeech) {
  const esc = escapeRe(lemma);
  const lines = String(text || "").split("\n").map((l) => l.trim());
  const wantBraces = dictCcPosBrace(partOfSpeech);
  const found = [];

  for (let i = 0; i < lines.length; i += 1) {
    if (!new RegExp(`^${esc}$`, "i").test(lines[i])) continue;
    let inPosSection = wantBraces == null;
    for (let j = i + 1; j < lines.length && j < i + 40; j += 1) {
      const line = lines[j];
      if (/^words?\s*:/i.test(line)) break;
      if (/^\{[^}]+\}$/i.test(line)) {
        const brace = line.toLowerCase();
        inPosSection = wantBraces == null || wantBraces.some((b) => brace.includes(b.replace(/[{}]/g, "")));
        continue;
      }
      if (!inPosSection) continue;
      if (/^\d+$/.test(line) && j + 1 < lines.length) {
        const trans = cleanTarget(lines[j + 1]);
        if (trans && !new RegExp(`^${esc}$`, "i").test(trans)) found.push(trans);
        j += 1;
        continue;
      }
      if (/^[ivx]+\.$/i.test(line) && j + 1 < lines.length) {
        const trans = cleanTarget(lines[j + 1]);
        if (trans) found.push(trans);
        j += 1;
      }
    }
  }
  return uniqueList(found);
}

function extractFromDictCcPlainText(text, lemma, options = {}) {
  const partOfSpeech = options.partOfSpeech;
  const structured = extractFromDictCcStructured(text, lemma, partOfSpeech);
  if (structured.length) return structured;

  const esc = escapeRe(lemma);
  const found = [];
  const patterns = [
    new RegExp(`${esc}\\s*\\{[^}]*\\}\\s*\\d+\\s+([^\\n\\t]+)`, "gi"),
    new RegExp(`${esc}\\s*\\{[^}]*\\}\\s*\\n\\s*\\d+\\s*\\n\\s*([^\\n]+)`, "gi"),
    new RegExp(`${esc}\\s*\\{[^}]*\\}\\s*\\t\\n\\s*\\d+\\s*\\n\\s*([^\\n\\t]+)`, "gi"),
    new RegExp(`${esc}[^\\n]*\\n\\s*\\d+\\s*\\n\\s*([^\\n\\t]+)`, "gi"),
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

    translations = filterTranslationCandidates(translations, lemma, appCode);

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
  extractFromDictCcStructured,
  extractFromGlosbeText,
  fetchDictionaryPage,
  lookupBilingualTranslation,
  cleanTarget,
  isDictionaryUiNoise,
  filterTranslationCandidates,
};
