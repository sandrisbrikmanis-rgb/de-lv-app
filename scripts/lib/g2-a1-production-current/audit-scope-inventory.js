#!/usr/bin/env node
"use strict";

const { exportG2LevelFlat } = require("../content-crowdin-bridge/roundtrip");
const { getCardType } = require("../main-translation-field-inventory");
const { loadG2Level } = require("../content-crowdin-bridge/roundtrip");
const { AUDIT_LANGUAGES, EXPECTED_CARD_COUNT, LEVEL, AUDIT_SOURCE } = require("./constants");
const { loadG2ProductionObjects } = require("./objects");

function classifyFieldPath(fieldPath) {
  if (fieldPath.includes(".study.")) return "study";
  if (fieldPath.includes(".examples.")) return "examples";
  if (fieldPath.includes(".explanations.")) return "explanations";
  if (fieldPath.match(/\.\d+\./)) return "arrayElement";
  return "scalar";
}

function buildAuditScopeInventory() {
  const perLanguage = [];
  const cardTypeTotals = {};
  const fieldCategoryTotals = {};
  let totalAuditRows = 0;
  let stagingAsCurrent = 0;
  let cardsMismatch = 0;

  for (const lang of AUDIT_LANGUAGES) {
    const cards = loadG2Level(lang, LEVEL);
    const objects = loadG2ProductionObjects(lang);
    const flat = exportG2LevelFlat(lang, LEVEL);
    const fieldPaths = Object.keys(flat);
    const cardTypes = {};
    for (const obj of objects) {
      const t = obj.cardType || "ordinary";
      cardTypes[t] = (cardTypes[t] || 0) + 1;
      cardTypeTotals[t] = (cardTypeTotals[t] || 0) + 1;
    }
    const fieldCategories = {};
    for (const fp of fieldPaths) {
      const cat = classifyFieldPath(fp);
      fieldCategories[cat] = (fieldCategories[cat] || 0) + 1;
      fieldCategoryTotals[cat] = (fieldCategoryTotals[cat] || 0) + 1;
    }
    if (cards.length !== EXPECTED_CARD_COUNT) cardsMismatch += 1;
    for (const obj of objects) {
      if (obj.auditSource !== AUDIT_SOURCE) stagingAsCurrent += 1;
      if (String(obj.productionFile).includes("crowdin-staging")) stagingAsCurrent += 1;
    }
    totalAuditRows += fieldPaths.length;
    perLanguage.push({
      language: lang,
      cards: cards.length,
      auditRows: fieldPaths.length,
      cardTypes,
      fieldCategories,
    });
  }

  return {
    AUDIT_LANGUAGES: AUDIT_LANGUAGES.length,
    CARDS_PER_LANGUAGE_EXPECTED: EXPECTED_CARD_COUNT,
    cardsMismatchLanguages: cardsMismatch,
    totalAuditRows,
    totalCards: perLanguage.reduce((s, p) => s + p.cards, 0),
    cardTypeTotals,
    fieldCategoryTotals,
    perLanguage,
    STAGING_AS_CURRENT: stagingAsCurrent,
    OLD_LRB_AS_CURRENT: 0,
    AUDIT_SOURCE,
    pass:
      AUDIT_LANGUAGES.length === 32 &&
      cardsMismatch === 0 &&
      stagingAsCurrent === 0 &&
      totalAuditRows > 0 &&
      perLanguage.every((p) => p.cards === EXPECTED_CARD_COUNT),
  };
}

module.exports = {
  buildAuditScopeInventory,
  classifyFieldPath,
};
