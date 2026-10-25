#!/usr/bin/env node
"use strict";

const path = require("path");
const { dataRel, loadG2Level, exportG2LevelFlat } = require("../content-crowdin-bridge/roundtrip");
const { resolveCardSlug } = require("../content-crowdin-bridge/slug");
const { TRANSLATION_FIELD_SUFFIXES } = require("./constants");

function productionLevelRel(lang, level) {
  return dataRel(lang, `${level}.js`);
}

function cardSlugFromFieldPath(fieldPath, level) {
  const re = new RegExp(`^${level}\\.card\\.([^.]+)`);
  const m = String(fieldPath || "").match(re);
  return m ? m[1] : null;
}

function isTranslationFieldPath(fieldPath) {
  return TRANSLATION_FIELD_SUFFIXES.some((suffix) => fieldPath.endsWith(suffix));
}

function buildSlugIndex(cards) {
  const map = new Map();
  for (const entry of cards) {
    map.set(resolveCardSlug(entry), entry);
  }
  return map;
}

/**
 * Read-only: enumerate learner-facing translation fields for one lang+level.
 * @returns {{ productionFile: string, cards: number, fields: object[] }}
 */
function loadTranslationFieldsForLevelLang(lang, level) {
  const productionFile = productionLevelRel(lang, level);
  const cards = loadG2Level(lang, level);
  const flat = exportG2LevelFlat(lang, level);
  const bySlug = buildSlugIndex(cards);

  const fields = [];
  for (const [fieldPath, currentValue] of Object.entries(flat)) {
    if (!isTranslationFieldPath(fieldPath)) continue;
    const slug = cardSlugFromFieldPath(fieldPath, level);
    const entry = slug ? bySlug.get(slug) : null;
    const deValue = entry?.de ? String(entry.de) : "";
    fields.push({
      level,
      language: lang,
      cardId: slug || fieldPath,
      fieldPath,
      currentValue: String(currentValue),
      deValue,
      productionFile,
    });
  }

  return {
    productionFile,
    cards: cards.length,
    fields,
  };
}

module.exports = {
  productionLevelRel,
  loadTranslationFieldsForLevelLang,
  cardSlugFromFieldPath,
  isTranslationFieldPath,
};
