#!/usr/bin/env node
"use strict";

const MANIFEST = require("../data/german-target-dictionary-de-et-used-sources.json");

const BILINGUAL_ENTRY_FOUND = "BILINGUAL_ENTRY_FOUND";
const NOT_FOUND_IN_DICTIONARY = "NOT_FOUND_IN_DICTIONARY";

function dictionaryById(id) {
  return MANIFEST.dictionaries.find((d) => d.id === id);
}

function primaryDictionary() {
  const id = MANIFEST.primaryDictionaryId;
  return dictionaryById(id) || MANIFEST.dictionaries[0];
}

function reverseDictionary() {
  const id = MANIFEST.reverseDictionaryId;
  return dictionaryById(id) || MANIFEST.dictionaries.find((d) => d.platform === "digar-et-de-reverse");
}

function viewerPageUrl(dict, page) {
  const base = dict.viewerBaseUrl.replace(/\/$/, "");
  return `${base}/page/${page}`;
}

function pickSearchPage(deLemma, matches, verified) {
  if (verified?.page) return verified.page;
  if (!matches?.length) return null;
  if (matches.length === 1) return matches[0].global_page ?? matches[0].page_number;
  return Math.max(...matches.map((m) => m.global_page ?? m.page_number ?? 0));
}

async function digarSearchApi(objectId, term) {
  const url = `https://www.digar.ee/viewer/api/search/${objectId}`;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `term=${encodeURIComponent(term)}`,
  });
  if (!res.ok) {
    return { error: `HTTP_${res.status}`, count: 0, matches: [] };
  }
  return res.json();
}

function etHeadwordMatchesCard(verifiedEt, cardEtLemma) {
  const card = String(cardEtLemma || "").trim();
  if (!card) return false;
  return card.toLowerCase() === String(verifiedEt || "").trim().toLowerCase();
}

/**
 * DE→ET bilingual lookup via DIGAR Valgus 1976 (OCR search + verified ET glosses).
 */
async function lookupDigarDeEtBilingual(deLemma) {
  const dict = primaryDictionary();
  const lemma = String(deLemma || "").trim();
  const verified = MANIFEST.verifiedEntries[lemma];

  let api;
  try {
    api = await digarSearchApi(dict.digarSearchObjectId, lemma);
  } catch (e) {
    return {
      ok: false,
      dictionaryId: dict.id,
      dictionaryName: dict.name,
      platform: dict.platform,
      lookupStatus: "SOURCE_ACCESS_ERROR",
      lookupMode: "FORWARD_DE_ET",
      error: String(e.message || e),
      targetTranslations: [],
      resultUrl: dict.viewerBaseUrl,
    };
  }

  const count = Number(api.count) || 0;
  if (count === 0 || verified?.status === NOT_FOUND_IN_DICTIONARY) {
    return {
      ok: false,
      dictionaryId: dict.id,
      dictionaryName: dict.name,
      platform: dict.platform,
      lookupStatus: NOT_FOUND_IN_DICTIONARY,
      lookupMode: "FORWARD_DE_ET",
      digarSearchCount: count,
      targetTranslations: [],
      resultUrl: dict.viewerBaseUrl,
    };
  }

  const page = pickSearchPage(lemma, api.matches, verified);
  const translations = verified?.targetTranslations?.length > 0 ? verified.targetTranslations : [];

  if (!translations.length) {
    return {
      ok: false,
      dictionaryId: dict.id,
      dictionaryName: dict.name,
      platform: dict.platform,
      lookupStatus: "BILINGUAL_PAGE_FOUND_GLOSS_PENDING",
      lookupMode: "FORWARD_DE_ET",
      digarSearchCount: count,
      page,
      resultUrl: page ? viewerPageUrl(dict, page) : dict.viewerBaseUrl,
      targetTranslations: [],
    };
  }

  return {
    ok: true,
    dictionaryId: dict.id,
    dictionaryName: dict.name,
    platform: dict.platform,
    lookupStatus: BILINGUAL_ENTRY_FOUND,
    lookupMode: "FORWARD_DE_ET",
    digarSearchCount: count,
    page,
    resultUrl: verified?.viewerUrl || (page ? viewerPageUrl(dict, page) : dict.viewerBaseUrl),
    targetTranslations: translations,
  };
}

/**
 * ET→DE reverse lookup on Valgus 1987 to confirm DE→ET card pair (ET headword → DE gloss).
 */
async function lookupDigarEtDeReverseForDeEtPair(deLemma, cardEtLemma) {
  const dict = reverseDictionary();
  const de = String(deLemma || "").trim();
  const verified = MANIFEST.verifiedReverseEntries?.[de];

  if (!dict || !verified) {
    return {
      ok: false,
      dictionaryId: dict?.id,
      dictionaryName: dict?.name,
      platform: dict?.platform || "digar-et-de-reverse",
      lookupStatus: NOT_FOUND_IN_DICTIONARY,
      lookupMode: "REVERSE_ET_DE",
      targetTranslations: [],
      resultUrl: dict?.viewerBaseUrl || null,
    };
  }

  if (!etHeadwordMatchesCard(verified.etHeadword, cardEtLemma)) {
    return {
      ok: false,
      dictionaryId: dict.id,
      dictionaryName: dict.name,
      platform: dict.platform,
      lookupStatus: "REVERSE_ET_HEADWORD_MISMATCH",
      lookupMode: "REVERSE_ET_DE",
      targetTranslations: [],
      resultUrl: dict.viewerBaseUrl,
    };
  }

  let api;
  try {
    api = await digarSearchApi(dict.digarSearchObjectId, verified.etHeadword);
  } catch (e) {
    return {
      ok: false,
      dictionaryId: dict.id,
      dictionaryName: dict.name,
      platform: dict.platform,
      lookupStatus: "SOURCE_ACCESS_ERROR",
      lookupMode: "REVERSE_ET_DE",
      error: String(e.message || e),
      targetTranslations: [],
      resultUrl: dict.viewerBaseUrl,
    };
  }

  const count = Number(api.count) || 0;
  if (count === 0) {
    return {
      ok: false,
      dictionaryId: dict.id,
      dictionaryName: dict.name,
      platform: dict.platform,
      lookupStatus: NOT_FOUND_IN_DICTIONARY,
      lookupMode: "REVERSE_ET_DE",
      digarSearchCount: count,
      targetTranslations: [],
      resultUrl: dict.viewerBaseUrl,
    };
  }

  const page = pickSearchPage(de, api.matches, verified);

  return {
    ok: true,
    dictionaryId: dict.id,
    dictionaryName: dict.name,
    platform: dict.platform,
    lookupStatus: BILINGUAL_ENTRY_FOUND,
    lookupMode: "REVERSE_ET_DE",
    digarSearchCount: count,
    page,
    etHeadword: verified.etHeadword,
    deGlossDisplay: verified.deGlossDisplay,
    resultUrl: verified.viewerUrl || (page ? viewerPageUrl(dict, page) : dict.viewerBaseUrl),
    targetTranslations: [verified.etHeadword],
  };
}

function digarDeEtSourceSpec() {
  const dict = primaryDictionary();
  return {
    id: dict.id,
    name: `${dict.name} (DIGAR Valgus ${dict.year})`,
    url: dict.viewerBaseUrl,
    platform: dict.platform,
  };
}

function digarEtDeReverseSourceSpec() {
  const dict = reverseDictionary();
  return {
    id: dict.id,
    name: `${dict.name} (DIGAR Valgus ${dict.year}, reverso)`,
    url: dict.viewerBaseUrl,
    platform: dict.platform,
  };
}

module.exports = {
  BILINGUAL_ENTRY_FOUND,
  NOT_FOUND_IN_DICTIONARY,
  MANIFEST,
  primaryDictionary,
  reverseDictionary,
  lookupDigarDeEtBilingual,
  lookupDigarEtDeReverseForDeEtPair,
  digarDeEtSourceSpec,
  digarEtDeReverseSourceSpec,
};
