#!/usr/bin/env node
"use strict";

const MANIFEST = require("../data/german-target-dictionary-de-et-used-sources.json");

const BILINGUAL_ENTRY_FOUND = "BILINGUAL_ENTRY_FOUND";
const NOT_FOUND_IN_DICTIONARY = "NOT_FOUND_IN_DICTIONARY";

function primaryDictionary() {
  const id = MANIFEST.primaryDictionaryId;
  return MANIFEST.dictionaries.find((d) => d.id === id) || MANIFEST.dictionaries[0];
}

function viewerPageUrl(page) {
  const dict = primaryDictionary();
  const base = dict.viewerBaseUrl.replace(/\/$/, "");
  return `${base}/page/${page}`;
}

function pickSearchPage(deLemma, matches) {
  const verified = MANIFEST.verifiedEntries[deLemma];
  if (verified?.page) return verified.page;
  if (!matches?.length) return null;
  if (matches.length === 1) return matches[0].global_page ?? matches[0].page_number;
  return Math.max(...matches.map((m) => m.global_page ?? m.page_number ?? 0));
}

async function digarSearchApi(deLemma) {
  const dict = primaryDictionary();
  const objectId = dict.digarSearchObjectId;
  const url = `https://www.digar.ee/viewer/api/search/${objectId}`;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `term=${encodeURIComponent(deLemma)}`,
  });
  if (!res.ok) {
    return { error: `HTTP_${res.status}`, count: 0, matches: [] };
  }
  return res.json();
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
    api = await digarSearchApi(lemma);
  } catch (e) {
    return {
      ok: false,
      dictionaryId: dict.id,
      dictionaryName: dict.name,
      platform: dict.platform,
      lookupStatus: "SOURCE_ACCESS_ERROR",
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
      digarSearchCount: count,
      targetTranslations: [],
      resultUrl: dict.viewerBaseUrl,
    };
  }

  const page = pickSearchPage(lemma, api.matches);
  const translations =
    verified?.targetTranslations?.length > 0
      ? verified.targetTranslations
      : [];

  if (!translations.length) {
    return {
      ok: false,
      dictionaryId: dict.id,
      dictionaryName: dict.name,
      platform: dict.platform,
      lookupStatus: "BILINGUAL_PAGE_FOUND_GLOSS_PENDING",
      digarSearchCount: count,
      page,
      resultUrl: page ? viewerPageUrl(page) : dict.viewerBaseUrl,
      targetTranslations: [],
    };
  }

  return {
    ok: true,
    dictionaryId: dict.id,
    dictionaryName: dict.name,
    platform: dict.platform,
    lookupStatus: BILINGUAL_ENTRY_FOUND,
    digarSearchCount: count,
    page,
    resultUrl: verified?.viewerUrl || (page ? viewerPageUrl(page) : dict.viewerBaseUrl),
    targetTranslations: translations,
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

module.exports = {
  BILINGUAL_ENTRY_FOUND,
  NOT_FOUND_IN_DICTIONARY,
  MANIFEST,
  primaryDictionary,
  lookupDigarDeEtBilingual,
  digarDeEtSourceSpec,
};
