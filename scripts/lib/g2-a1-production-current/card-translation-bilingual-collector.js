#!/usr/bin/env node
"use strict";

const { loadManifest } = require("./german-target-dictionary-search-catalog");
const { loadOverrides } = require("./german-target-dictionary-search-catalog");
const {
  lookupBilingualTranslation,
  buildSearchUrl,
  fetchDictionaryPage,
  extractFromDictCcPlainText,
  extractFromGlosbeText,
  filterTranslationCandidates,
} = require("./three-word-dict-extract");
const { manifestSourceAllowed, pageTextIsAutomaticTranslationOnly } = require("./card-translation-forbidden-sources");
const { REJECT_REASON } = require("./card-translation-audit-search");

function escapeRe(s) {
  return String(s).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function cardPosToLodTag(partOfSpeech) {
  const p = String(partOfSpeech || "").trim().toLowerCase();
  if (p === "verb") return "VRB";
  if (p === "adjective") return "ADJ";
  if (p === "adverb") return "ADV";
  return "SUBST";
}

function manifestRowForLang(appLang) {
  const manifest = loadManifest();
  const row = (manifest.sources || []).find((s) => s.appCode === appLang);
  const overrides = loadOverrides();
  const oLang = overrides.languages?.[appLang];
  if (oLang?.publicPrimary) {
    return {
      appCode: appLang,
      standardCode: row?.standardCode || appLang,
      name: oLang.publicPrimary.name,
      url: oLang.publicPrimary.url,
      type: oLang.publicPrimary.type,
      access: oLang.publicPrimary.access,
      languagePair: oLang.publicPrimary.languagePair,
      overrideId: oLang.publicPrimary.id,
    };
  }
  return row;
}

function dictRowFromSpec(spec) {
  if (!spec) return null;
  return {
    name: spec.name,
    url: spec.url,
    type: spec.type,
    id: spec.overrideId || `manifest-${spec.appCode}`,
  };
}

function mapTargetsToCandidates(translations, cardGerman, sourceMeta) {
  const pos = cardPosToLodTag(cardGerman.partOfSpeech);
  const lemma = cardGerman.lemma;
  return translations.map((targetLemma, index) => ({
    targetLemma,
    wordLb: targetLemma,
    deTranslation: lemma,
    pos,
    sourceUrl: sourceMeta.resultUrl,
    bilingualSourceId: sourceMeta.sourceId,
    rank: index,
  }));
}

async function collectDeTargetCandidatesFromBilingualDictionary(appLang, cardGerman) {
  const spec = manifestRowForLang(appLang);
  const dictRow = dictRowFromSpec(spec);
  const rejected = [];
  if (!dictRow) {
    return {
      ok: false,
      eligible: [],
      rejected: [{ reason: REJECT_REASON.DE_SENSE_MISMATCH, detail: "NO_BILINGUAL_MANIFEST" }],
      bilingualMeta: null,
    };
  }
  const allowed = manifestSourceAllowed(spec);
  if (!allowed.ok) {
    return {
      ok: false,
      eligible: [],
      rejected: [{ reason: "FORBIDDEN_SOURCE", detail: allowed.code }],
      bilingualMeta: { sourceId: dictRow.id, sourceUrl: dictRow.url },
    };
  }

  const lemma = String(cardGerman.lemma || "").trim();
  const lookup = await lookupBilingualTranslation({ dictRow, lemma, appCode: appLang });
  const sourceMeta = {
    sourceId: dictRow.id,
    sourceName: dictRow.name,
    sourceUrl: dictRow.url,
    resultUrl: lookup.resultUrl,
    resultStatus: lookup.resultStatus,
  };

  if (lookup.resultStatus === "SOURCE_ACCESS_BLOCKED") {
    return {
      ok: false,
      eligible: [],
      rejected: [{ reason: "SOURCE_ACCESS_BLOCKED", detail: lookup.note }],
      bilingualMeta: sourceMeta,
    };
  }

  const searchUrl = buildSearchUrl(dictRow, lemma);
  let pageText = "";
  try {
    const page = await fetchDictionaryPage(searchUrl);
    pageText = page.text || "";
    if (/glosbe\.com/i.test(searchUrl) && pageTextIsAutomaticTranslationOnly(pageText)) {
      return {
        ok: false,
        eligible: [],
        rejected: [{ reason: "AUTOMATIC_TRANSLATION_ONLY", detail: "Glosbe automatic section only" }],
        bilingualMeta: sourceMeta,
      };
    }
  } catch {
    /* lookup result still usable */
  }

  const translations = [lookup.targetTranslation, ...(lookup.alternativeTranslations || [])].filter(Boolean);
  const filtered = filterTranslationCandidates(translations, lemma, appLang);
  if (!filtered.length) {
    return {
      ok: false,
      eligible: [],
      rejected: [{ reason: REJECT_REASON.DE_SENSE_MISMATCH, detail: lookup.note || "NO_EXTRACTED_TARGETS" }],
      bilingualMeta: sourceMeta,
    };
  }

  const eligible = mapTargetsToCandidates(filtered, cardGerman, sourceMeta);
  return { ok: true, eligible, rejected, bilingualMeta: sourceMeta };
}

module.exports = {
  manifestRowForLang,
  collectDeTargetCandidatesFromBilingualDictionary,
  cardPosToLodTag,
  mapTargetsToCandidates,
};
