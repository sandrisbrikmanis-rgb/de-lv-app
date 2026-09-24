#!/usr/bin/env node
"use strict";

/**
 * Kartes tulkošanas audita gatavība pa valodām (DE→TARGET kolektors + oficiālā TARGET validācija).
 *
 * Nākamais lielais darbs: tāda pati loģika kā lb (LOD) pārējām 31 valodai.
 * Kamēr readyCount < 32 — pilnu targeted-field-level Luna batch nedrīkst atvērt.
 */

const { EXPECTED_APP_LANGUAGES } = require("./constants");
const { listAllTargetAppLanguages } = require("./source-adapters/target");

const COLLECTOR_STAGE = Object.freeze({
  /** Nav DE→TARGET kartes audita kolektora */
  NOT_IMPLEMENTED: "NOT_IMPLEMENTED",
  /** Tikai vārdnīcas pieejamības piloti (FOUND) — nav TRANSLATION_VALIDATED */
  DICTIONARY_FOUND_PILOT_ONLY: "DICTIONARY_FOUND_PILOT_ONLY",
  /** Pilns DE→TARGET kandidātu vākums + salīdzinājums ar CURRENT (kā lb) */
  FULL_DE_TO_TARGET_COLLECTOR: "FULL_DE_TO_TARGET_COLLECTOR",
});

/** Vienīgā valoda ar pilnu kartes tulkošanas ceļu šajā repo versijā. */
const FULL_CARD_TRANSLATION_LANGUAGES = Object.freeze(["lb"]);

/**
 * Manuāli uzturēts statuss — papildināt, kad valodai pievieno kolektoru + TARGET oficiālo validāciju.
 * @type {Record<string, { deToTargetCollector: string, targetOfficialValidation: boolean, note?: string, collectorRef?: string }>}
 */
const LANGUAGE_READINESS_OVERRIDES = Object.freeze({
  lb: {
    deToTargetCollector: COLLECTOR_STAGE.FULL_DE_TO_TARGET_COLLECTOR,
    targetOfficialValidation: true,
    collectorRef: "lod-card-translation-audit.js + lookupLodOfficialLbEntry",
    note: "DE: DWDS/Duden; TARGET: LOD lb/search",
  },
  mk: {
    deToTargetCollector: COLLECTOR_STAGE.DICTIONARY_FOUND_PILOT_ONLY,
    targetOfficialValidation: false,
    note: "verbformen DE→mk FOUND pilot only",
  },
  nn: {
    deToTargetCollector: COLLECTOR_STAGE.DICTIONARY_FOUND_PILOT_ONLY,
    targetOfficialValidation: false,
    note: "Langenscheidt DE→nn FOUND pilot only",
  },
});

function defaultLangRow(appLang) {
  return {
    appLang,
    deToTargetCollector: COLLECTOR_STAGE.NOT_IMPLEMENTED,
    targetOfficialValidation: false,
    cardTranslationReady: false,
    note: "Awaiting DE→TARGET collector + TARGET official validation (same contract as lb)",
  };
}

function isLanguageCardTranslationReady(row) {
  return (
    row.deToTargetCollector === COLLECTOR_STAGE.FULL_DE_TO_TARGET_COLLECTOR &&
    row.targetOfficialValidation === true
  );
}

function getCardTranslation32LangReadiness() {
  const appLangs = listAllTargetAppLanguages().sort();
  const languages = appLangs.map((appLang) => {
    const override = LANGUAGE_READINESS_OVERRIDES[appLang];
    const base = defaultLangRow(appLang);
    if (override) {
      base.deToTargetCollector = override.deToTargetCollector;
      base.targetOfficialValidation = Boolean(override.targetOfficialValidation);
      base.note = override.note || base.note;
      base.collectorRef = override.collectorRef || null;
    }
    base.cardTranslationReady = isLanguageCardTranslationReady(base);
    return base;
  });

  const ready = languages.filter((l) => l.cardTranslationReady);
  const notReady = languages.filter((l) => !l.cardTranslationReady);
  const expectedCount = EXPECTED_APP_LANGUAGES;

  return {
    schemaVersion: "g2-a1-card-translation-32lang-readiness-v1",
    expectedCount,
    registryLanguageCount: appLangs.length,
    readyCount: ready.length,
    remainingCount: expectedCount - ready.length,
    fullCardTranslationBatchReady: ready.length === expectedCount && appLangs.length === expectedCount,
    readyLanguages: ready.map((l) => l.appLang),
    notReadyLanguages: notReady.map((l) => l.appLang),
    languages,
    nextWork:
      "Implement FULL_DE_TO_TARGET_COLLECTOR + targetOfficialValidation for each notReady language (31 remaining after lb). Do not remove batch blocker until fullCardTranslationBatchReady is true.",
  };
}

function isFullCardTranslationBatchReady() {
  return getCardTranslation32LangReadiness().fullCardTranslationBatchReady;
}

module.exports = {
  COLLECTOR_STAGE,
  FULL_CARD_TRANSLATION_LANGUAGES,
  LANGUAGE_READINESS_OVERRIDES,
  getCardTranslation32LangReadiness,
  isLanguageCardTranslationReady,
  isFullCardTranslationBatchReady,
};
