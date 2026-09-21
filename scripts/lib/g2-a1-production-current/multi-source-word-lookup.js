#!/usr/bin/env node
"use strict";

const { URL } = require("url");
const {
  buildSearchUrl,
  extractFromDictCcPlainText,
  extractFromGlosbeText,
  fetchDictionaryPage,
  cleanTarget,
} = require("./three-word-dict-extract");
const { RESULT_STATUS } = require("./multi-source-pilot-catalog");

const pageCache = new Map();

function escapeRe(s) {
  return String(s).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function filterCandidates(translations, lemma, appCode) {
  const blocklist =
    /^(words?|dictionary|german|english|add example|ableitung|derivation|syno|noun|verb|äöüß|search for|home|contacts)$/i;
  return translations.filter((t) => {
    if (!t || blocklist.test(t)) return false;
    if (/^DE\s*(<>|–>)/i.test(t)) return false;
    if (/AUTOMATIC TRANSLATIONS/i.test(t)) return false;
    if (/^[A-Z]{2}\s*<>\s*DE/i.test(t)) return false;
    if (lemma === "Getriebe" && /^Getreide$/i.test(t)) return false;
    if (lemma === "Route" && /^(Router|Routine)$/i.test(t)) return false;
    if (appCode !== "de" && appCode !== "lb") {
      if (/[äöüß]/i.test(t) && t.length > 10) return false;
    }
    return t.length <= 60;
  });
}

function buildPonsUrl(baseUrl, lemma) {
  const base = baseUrl.replace(/\/$/, "");
  return `${base}/${encodeURIComponent(lemma)}`;
}

function resolveSearchUrl(source, lemma) {
  if (/pons\.com\/translate\//i.test(source.url)) {
    return buildPonsUrl(source.url, lemma);
  }
  return buildSearchUrl({ url: source.url }, lemma);
}

async function getPageText(url) {
  const key = url;
  if (pageCache.has(key)) return pageCache.get(key);
  const page = await fetchDictionaryPage(url);
  pageCache.set(key, page);
  return page;
}

function extractBilingual(page, lemma, searchUrl) {
  if (page.blocked || !page.text) return [];
  let translations = [];
  if (/dict\.cc/i.test(searchUrl)) {
    translations = extractFromDictCcPlainText(page.text, lemma);
  } else if (/glosbe\.com/i.test(searchUrl)) {
    translations = extractFromGlosbeText(page.text, lemma);
    if (!translations.length) translations = extractFromDictCcPlainText(page.text, lemma);
  } else if (/pons\.com/i.test(searchUrl)) {
    translations = extractFromDictCcPlainText(page.text, lemma);
    const re = new RegExp(`${escapeRe(lemma)}[\\s\\S]{0,120}`, "gi");
    if (!translations.length && re.test(page.text)) {
      translations = extractFromDictCcPlainText(page.text, lemma);
    }
  } else {
    translations = extractFromDictCcPlainText(page.text, lemma);
  }
  return translations;
}

function extractSupporting(page, lemma) {
  if (page.blocked || !page.text) return [];
  if (!new RegExp(`\\b${escapeRe(lemma)}\\b`, "i").test(page.text)) return [];
  const idx = page.text.search(new RegExp(escapeRe(lemma), "i"));
  const chunk = page.text.slice(idx, idx + 500);
  const lines = chunk.split("\n").map((l) => cleanTarget(l)).filter(Boolean);
  return lines.filter((l) => !new RegExp(`^${escapeRe(lemma)}$`, "i").test(l)).slice(0, 3);
}

async function queryOneSource(source, lemma, appCode) {
  const searchUrl = resolveSearchUrl(source, lemma);
  try {
    const page = await getPageText(searchUrl);
    if (page.blocked) {
      return {
        sourceName: source.sourceName,
        sourceType: source.sourceType,
        resultUrl: page.finalUrl || searchUrl,
        direct: false,
        translations: [],
        status: RESULT_STATUS.SOURCE_ACCESS_BLOCKED,
        note: "Access blocked",
      };
    }

    let translations = [];
    let direct = false;
    if (source.bilingual || /dict\.cc|glosbe|pons|langenscheidt|letonika|zodynai|lod\.lu|keelevara/i.test(searchUrl)) {
      translations = filterCandidates(extractBilingual(page, lemma, searchUrl), lemma, appCode);
      direct = translations.length > 0;
    }
    if (!translations.length) {
      translations = filterCandidates(extractSupporting(page, lemma), lemma, appCode);
    }

    if (!translations.length) {
      return {
        sourceName: source.sourceName,
        sourceType: source.sourceType,
        resultUrl: page.finalUrl || searchUrl,
        direct: false,
        translations: [],
        status: RESULT_STATUS.ENTRY_NOT_FOUND,
        note: null,
      };
    }

    const status = direct
      ? translations.length > 1
        ? RESULT_STATUS.MULTIPLE_TRANSLATIONS_FOUND
        : RESULT_STATUS.DIRECT_TRANSLATION_FOUND
      : RESULT_STATUS.SUPPORTING_SOURCE_FOUND;

    return {
      sourceName: source.sourceName,
      sourceType: source.sourceType,
      resultUrl: page.finalUrl || searchUrl,
      direct,
      translations,
      status,
      note: direct ? null : "Monolingual/supporting hit only — not a standalone de→TARGET pair proof",
    };
  } catch (e) {
    return {
      sourceName: source.sourceName,
      sourceType: source.sourceType,
      resultUrl: searchUrl,
      direct: false,
      translations: [],
      status: RESULT_STATUS.SOURCE_ACCESS_BLOCKED,
      note: String(e.message || e),
    };
  }
}

function normalizeKey(t) {
  return String(t || "")
    .normalize("NFC")
    .trim()
    .toLowerCase();
}

function mergeSourceResults(sourceHits) {
  const directHits = sourceHits.filter((h) => h.direct && h.translations?.length);
  const supportingHits = sourceHits.filter(
    (h) => !h.direct && h.status === RESULT_STATUS.SUPPORTING_SOURCE_FOUND,
  );
  const blocked = sourceHits.every((h) => h.status === RESULT_STATUS.SOURCE_ACCESS_BLOCKED);

  const targetTranslations = [];
  for (const h of sourceHits) {
    for (const t of h.translations || []) {
      targetTranslations.push({
        text: t,
        sourceName: h.sourceName,
        sourceType: h.sourceType,
        resultUrl: h.resultUrl,
        direct: h.direct,
        meaningNote: h.note,
      });
    }
  }

  let resultStatus = RESULT_STATUS.ENTRY_NOT_FOUND;
  if (directHits.length) {
    const directKeys = new Set();
    for (const h of directHits) {
      for (const t of h.translations) directKeys.add(normalizeKey(t));
    }
    const primarySets = directHits.map((h) => new Set(h.translations.map(normalizeKey)));
    let conflict = false;
    if (primarySets.length > 1) {
      const first = primarySets[0];
      conflict = primarySets.some((s) => [...s].some((k) => !first.has(k)) || [...first].some((k) => !s.has(k)));
    }
    const allDirect = [...directKeys];
    if (conflict && allDirect.length > 1) {
      resultStatus = RESULT_STATUS.SOURCE_CONFLICT;
    } else if (allDirect.length > 1) {
      resultStatus = RESULT_STATUS.MULTIPLE_TRANSLATIONS_FOUND;
    } else {
      resultStatus = RESULT_STATUS.DIRECT_TRANSLATION_FOUND;
    }
  } else if (supportingHits.length) {
    resultStatus = RESULT_STATUS.SUPPORTING_SOURCE_FOUND;
  } else if (blocked) {
    resultStatus = RESULT_STATUS.SOURCE_ACCESS_BLOCKED;
  }

  const best = directHits[0] || supportingHits[0] || sourceHits.find((h) => h.translations?.length) || sourceHits[0];

  let sourceAgreement = "NONE";
  if (directHits.length === 1) sourceAgreement = "SINGLE_SOURCE";
  else if (directHits.length > 1) {
    sourceAgreement = resultStatus === RESULT_STATUS.SOURCE_CONFLICT ? "CONFLICT" : "AGREED";
  } else if (supportingHits.length) sourceAgreement = "SUPPORTING_ONLY";

  return {
    targetTranslations,
    resultStatus,
    sourceName: best?.sourceName || null,
    sourceType: best?.sourceType || null,
    resultUrl: best?.resultUrl || null,
    sourceAgreement,
    sourcesChecked: sourceHits.map((h) => ({
      sourceName: h.sourceName,
      sourceType: h.sourceType,
      resultUrl: h.resultUrl,
      status: h.status,
      translations: h.translations,
      direct: h.direct,
    })),
  };
}

async function queryAllSourcesForWord({ sources, lemma, appCode }) {
  const hits = [];
  for (const source of sources) {
    // eslint-disable-next-line no-await-in-loop
    const hit = await queryOneSource(source, lemma, appCode);
    hits.push(hit);
  }
  return mergeSourceResults(hits);
}

function clearPageCache() {
  pageCache.clear();
}

module.exports = {
  queryAllSourcesForWord,
  queryOneSource,
  orderedMasterSources: require("./multi-source-registry-sources").orderedMasterSources,
  clearPageCache,
};
