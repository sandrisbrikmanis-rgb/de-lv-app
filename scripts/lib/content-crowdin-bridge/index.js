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
const { flattenG1Sentences, applyG1SentencesFlat } = require("./flatten-g1-sentences");
const { flattenG1Verbs, applyG1VerbsFlat } = require("./flatten-g1-verbs");
const {
  flattenG1TrainingCards,
  applyG1TrainingFlat,
  loadTrainingCardsByLesson,
} = require("./flatten-g1-training");
const { flattenG3CourseLessons, applyG3CourseLessonsFlat } = require("./flatten-g3-lessons");
const {
  verifyRoundTrip,
  roundTripGroup,
  flattenGroup,
  exportG2LevelToCrowdinJson,
  exportG2LevelFlat,
  getLvG2SourceKeySet,
  loadG2Level,
} = require("./roundtrip");

const GROUPS = ["g1-sentences", "g1-verbs", "g1-training", "g2", "g3"];

function exportContentToCrowdinJson({ group, lang, level }) {
  if (group === "g2") {
    if (!G2_LEVELS.includes(level)) throw new Error(`Invalid G2 level: ${level}`);
    return exportG2LevelToCrowdinJson(lang, level);
  }
  const flat = flattenGroup({ group, lang, level });
  return exportFlatToJson(flat);
}

module.exports = {
  CONTENT_LANGUAGES,
  CROWDIN_SOURCE_LANG,
  TARGET_LANGUAGES,
  G2_LEVELS,
  G2_GLOBALS,
  MASTER_VERSION,
  CONTENT_JSON_REL,
  GROUPS,
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
  flattenG1Sentences,
  applyG1SentencesFlat,
  flattenG1Verbs,
  applyG1VerbsFlat,
  flattenG1TrainingCards,
  applyG1TrainingFlat,
  loadTrainingCardsByLesson,
  flattenG3CourseLessons,
  applyG3CourseLessonsFlat,
  exportContentToCrowdinJson,
  flattenGroup,
  exportG2LevelFlat,
  getLvG2SourceKeySet,
  verifyRoundTrip,
  roundTripGroup,
  loadG2Level,
};
