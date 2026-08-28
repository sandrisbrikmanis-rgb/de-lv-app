#!/usr/bin/env node
"use strict";

const {
  CONTENT_LANGUAGES,
  CROWDIN_SOURCE_LANG,
  TARGET_LANGUAGES,
  G2_LEVELS,
  G2_GLOBALS,
  MASTER_VERSION,
  CONTENT_JSON_REL,
} = require("./constants");
const { slugify, resolveCardSlug, entryId } = require("./slug");
const {
  validateCrowdinKeySet,
  validateImportGuards,
  exportFlatToJson,
  parseCrowdinJson,
} = require("./guards");
const {
  flattenG2Flashcards,
  applyG2FlashcardsFlat,
  buildCardIndex,
} = require("./flatten-g2-flashcards");
const {
  exportG2LevelToCrowdinJson,
  exportG2LevelFlat,
  getLvG2SourceKeySet,
  roundTripG2Level,
  verifyRoundTrip,
  loadG2Level,
} = require("./roundtrip");

function exportContentToCrowdinJson({ group, lang, level }) {
  if (group !== "g2") {
    throw new Error(`Phase 0 export supports group=g2 only (got ${group})`);
  }
  if (!G2_LEVELS.includes(level)) {
    throw new Error(`Invalid G2 level: ${level}`);
  }
  return exportG2LevelToCrowdinJson(lang, level);
}

module.exports = {
  CONTENT_LANGUAGES,
  CROWDIN_SOURCE_LANG,
  TARGET_LANGUAGES,
  G2_LEVELS,
  G2_GLOBALS,
  MASTER_VERSION,
  CONTENT_JSON_REL,
  slugify,
  resolveCardSlug,
  entryId,
  validateCrowdinKeySet,
  validateImportGuards,
  exportFlatToJson,
  parseCrowdinJson,
  flattenG2Flashcards,
  applyG2FlashcardsFlat,
  buildCardIndex,
  exportContentToCrowdinJson,
  exportG2LevelFlat,
  getLvG2SourceKeySet,
  roundTripG2Level,
  verifyRoundTrip,
  loadG2Level,
};
