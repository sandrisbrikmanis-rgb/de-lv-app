#!/usr/bin/env node
"use strict";

const { TARGET_LANGUAGES } = require("./constants");

/**
 * File-closed Crowdin locale → repo locale mapping for G2/A1 content round.
 * Unknown Crowdin locales must throw — never guess.
 */
const CROWDIN_TO_REPO_LOCALE = Object.freeze({
  el: "gr",
  "en-GB": "en",
  "es-ES": "es",
  "pt-PT": "pt",
  "nn-NO": "nn",
  "sv-SE": "sv",
});

/** Crowdin target locale IDs configured for project 923473 (31). */
const CROWDIN_TARGET_LOCALE_IDS = Object.freeze([
  "bg",
  "bs",
  "cs",
  "da",
  "el",
  "en-GB",
  "es-ES",
  "et",
  "fi",
  "fr",
  "hr",
  "hu",
  "is",
  "it",
  "lb",
  "lt",
  "mk",
  "nb",
  "nl",
  "nn-NO",
  "pl",
  "pt-PT",
  "ro",
  "ru",
  "sk",
  "sl",
  "sq",
  "sr",
  "sv-SE",
  "tr",
  "uk",
]);

function crowdinLocaleToRepo(crowdinLocaleId) {
  if (crowdinLocaleId == null || crowdinLocaleId === "") {
    throw new Error("UNKNOWN_CROWDIN_LOCALE: empty locale id");
  }
  const normalized = String(crowdinLocaleId).trim();
  if (Object.prototype.hasOwnProperty.call(CROWDIN_TO_REPO_LOCALE, normalized)) {
    return CROWDIN_TO_REPO_LOCALE[normalized];
  }
  if (CROWDIN_TARGET_LOCALE_IDS.includes(normalized)) {
    return normalized;
  }
  throw new Error(`UNKNOWN_CROWDIN_LOCALE: ${normalized}`);
}

function buildCrowdinLanguagesMapping() {
  const mapping = {};
  for (const crowdinId of CROWDIN_TARGET_LOCALE_IDS) {
    mapping[crowdinId] = crowdinLocaleToRepo(crowdinId);
  }
  return mapping;
}

function validateLocaleMappingRegistry() {
  const repoLocales = CROWDIN_TARGET_LOCALE_IDS.map((id) => crowdinLocaleToRepo(id));
  const unique = new Set(repoLocales);
  const expected = [...TARGET_LANGUAGES].sort();
  const mappedSorted = [...unique].sort();
  const missing = expected.filter((code) => !unique.has(code));
  const extra = mappedSorted.filter((code) => !expected.includes(code));
  const duplicateCount = repoLocales.length - unique.size;
  return {
    crowdinCount: CROWDIN_TARGET_LOCALE_IDS.length,
    repoUniqueCount: unique.size,
    missing,
    extra,
    duplicateCount,
    pass:
      CROWDIN_TARGET_LOCALE_IDS.length === 31 &&
      unique.size === 31 &&
      missing.length === 0 &&
      extra.length === 0 &&
      duplicateCount === 0,
  };
}

function g2LevelCrowdinPath(level, repoLang) {
  return `crowdin/content/g2/${repoLang}-${level}.json`;
}

module.exports = {
  CROWDIN_TO_REPO_LOCALE,
  CROWDIN_TARGET_LOCALE_IDS,
  crowdinLocaleToRepo,
  buildCrowdinLanguagesMapping,
  validateLocaleMappingRegistry,
  g2LevelCrowdinPath,
};
