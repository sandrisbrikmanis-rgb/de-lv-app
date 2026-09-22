#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { ROOT } = require("../audit-common");
const { APP_LANGUAGE_CODES } = require("../official-language-sources-registry");
const { stripTrackingParams } = require("../master-language-authority-sources-33");

const MANIFEST_REL = "scripts/lib/data/master-german-target-bilingual-dictionaries-32.json";
const OVERRIDES_REL = "scripts/lib/data/german-target-dictionary-search-overrides-32.json";

const SEARCH_PILOT_WORDS = Object.freeze([
  { id: "haus", lemma: "Haus" },
  { id: "abholen", lemma: "abholen" },
  { id: "route", lemma: "Route" },
  { id: "getriebe", lemma: "Getriebe" },
]);

const FINAL_STATUS = Object.freeze({
  DICTIONARY_READY: "DICTIONARY_READY",
  DICTIONARY_PARTIALLY_READY: "DICTIONARY_PARTIALLY_READY",
  SUBSCRIPTION_REQUIRED: "SUBSCRIPTION_REQUIRED",
  AUTOMATIC_TRANSLATOR_ONLY: "AUTOMATIC_TRANSLATOR_ONLY",
  TECHNICAL_ACCESS_BLOCKED: "TECHNICAL_ACCESS_BLOCKED",
  NO_SUITABLE_DICTIONARY_FOUND: "NO_SUITABLE_DICTIONARY_FOUND",
});

const PILOT_FIELD = Object.freeze({
  FOUND: "FOUND",
  NOT_FOUND: "NOT_FOUND",
  BLOCKED: "BLOCKED",
  AUTOMATIC_TRANSLATION_ONLY: "AUTOMATIC_TRANSLATION_ONLY",
});

function loadManifest() {
  return JSON.parse(fs.readFileSync(path.join(ROOT, MANIFEST_REL), "utf8"));
}

function loadOverrides() {
  const p = path.join(ROOT, OVERRIDES_REL);
  if (!fs.existsSync(p)) return { languages: {} };
  return JSON.parse(fs.readFileSync(p, "utf8"));
}

function manifestToCandidate(spec) {
  return {
    id: `manifest-${spec.appCode}`,
    appCode: spec.appCode,
    standardCode: spec.standardCode,
    name: spec.name,
    publisher: publisherForType(spec),
    url: stripTrackingParams(spec.url),
    languagePair: spec.languagePair,
    access: spec.access || "PUBLIC_BROWSER_SESSION",
    entryCount: spec.entryCount,
    entryCountStatus: spec.entryCountStatus,
    type: spec.type,
    searchMode: null,
    fromMasterManifest: true,
  };
}

function publisherForType(spec) {
  if (spec.type === "COMMUNITY_BILINGUAL_DICT_CC") return "dict.cc (community-maintained)";
  if (spec.type === "COMMUNITY_BILINGUAL_GLOSBE") return "Glosbe (community lexicon)";
  if (spec.type === "PROFESSIONAL_BILINGUAL_COMMERCIAL") return "Langenscheidt";
  if (spec.type === "OFFICIAL_BILINGUAL_LEXICON") return "LOD / Zenter fir d'Lëtzebuergescht";
  if (spec.type === "INSTITUTIONAL_BILINGUAL_LEXICON") return spec.name;
  return spec.name;
}

function overrideToCandidate(o, appCode, standardCode) {
  return {
    id: o.id,
    appCode,
    standardCode,
    name: o.name,
    publisher: o.publisher,
    url: stripTrackingParams(o.url),
    languagePair: o.languagePair,
    access: o.access,
    entryCount: o.entryCount ?? null,
    entryCountStatus: o.entryCountStatus || "ENTRY_COUNT_NOT_PUBLICLY_CONFIRMED",
    type: o.type,
    searchMode: o.searchMode || null,
    fromMasterManifest: false,
  };
}

/** Ordered candidates: full internet-priority list (dict.cc → PONS → Langenscheidt → …). */
function candidatesForLanguage(appCode, manifest, overrides) {
  const {
    orderedAlternativeCandidatesForLanguage,
  } = require("./german-target-dictionary-alternative-catalog");
  return orderedAlternativeCandidatesForLanguage(appCode, manifest, overrides);
}

function formatEntryCount(candidate) {
  if (candidate.entryCount != null && Number.isFinite(candidate.entryCount)) {
    return String(candidate.entryCount);
  }
  return candidate.entryCountStatus || "ENTRY_COUNT_NOT_PUBLICLY_CONFIRMED";
}

module.exports = {
  SEARCH_PILOT_WORDS,
  FINAL_STATUS,
  PILOT_FIELD,
  TARGET_APP_CODES: APP_LANGUAGE_CODES,
  loadManifest,
  loadOverrides,
  candidatesForLanguage,
  formatEntryCount,
  manifestToCandidate,
  overrideToCandidate,
};
