#!/usr/bin/env node
"use strict";

const { fileExists, loadArrayDataset, loadWindowGlobals } = require("../audit-common");
const { G2_LEVELS } = require("./constants");
const { flattenG2Flashcards, applyG2FlashcardsFlat } = require("./flatten-g2-flashcards");
const { flattenG1Sentences, applyG1SentencesFlat } = require("./flatten-g1-sentences");
const { flattenG1Verbs, applyG1VerbsFlat } = require("./flatten-g1-verbs");
const {
  loadTrainingCardsByLesson,
  flattenG1TrainingCards,
  applyG1TrainingFlat,
  trainingCardsRel,
  TRAINING_NOT_APPLICABLE_LANGS,
} = require("./flatten-g1-training");
const { flattenG3CourseLessons, applyG3CourseLessonsFlat } = require("./flatten-g3-lessons");
const { exportFlatToJson, parseCrowdinJson } = require("./guards");

function dataRel(lang, fileName) {
  return lang === "lv" ? `data/${fileName}` : `data/${lang}/${fileName}`;
}

function loadG2Level(lang, level) {
  return loadArrayDataset(dataRel(lang, `${level}.js`)) || [];
}

function loadG1Sentences(lang) {
  return loadArrayDataset(dataRel(lang, "sentences.js")) || [];
}

function loadG1Verbs(lang) {
  return loadArrayDataset(dataRel(lang, "verbs.js")) || [];
}

function loadG3CourseLessons(lang) {
  const rel = dataRel(lang, "courseLessons.js");
  if (!fileExists(rel)) return null;
  const globals = loadWindowGlobals(rel);
  return globals.COURSE_LESSON_DATA || null;
}

function flattenGroup({ group, lang, level, data }) {
  if (group === "g2") {
    return flattenG2Flashcards(level, data ?? loadG2Level(lang, level));
  }
  if (group === "g1-sentences") {
    return flattenG1Sentences(data ?? loadG1Sentences(lang));
  }
  if (group === "g1-verbs") {
    return flattenG1Verbs(data ?? loadG1Verbs(lang));
  }
  if (group === "g1-training") {
    return flattenG1TrainingCards(data ?? loadTrainingCardsByLesson(lang));
  }
  if (group === "g3") {
    const lessonData = data ?? loadG3CourseLessons(lang);
    return lessonData ? flattenG3CourseLessons(lessonData) : {};
  }
  throw new Error(`Unknown group: ${group}`);
}

function applyGroupFlat({ group, lang, level, original, flat }) {
  if (group === "g2") return applyG2FlashcardsFlat(level, original, flat);
  if (group === "g1-sentences") return applyG1SentencesFlat(original, flat);
  if (group === "g1-verbs") return applyG1VerbsFlat(original, flat);
  if (group === "g1-training") return applyG1TrainingFlat(original, flat);
  if (group === "g3") return applyG3CourseLessonsFlat(original, flat);
  throw new Error(`Unknown group: ${group}`);
}

function loadGroupOriginal({ group, lang, level }) {
  if (group === "g2") return loadG2Level(lang, level);
  if (group === "g1-sentences") return loadG1Sentences(lang);
  if (group === "g1-verbs") return loadG1Verbs(lang);
  if (group === "g1-training") return loadTrainingCardsByLesson(lang);
  if (group === "g3") return loadG3CourseLessons(lang);
  throw new Error(`Unknown group: ${group}`);
}

function roundTripGroup({ group, lang, level }) {
  const original = loadGroupOriginal({ group, lang, level });
  if (original === null) {
    return { pass: false, reason: "dataset missing", keyCount: 0, skipped: true };
  }
  if (group === "g1-training" && Object.keys(original).length === 0) {
    return { pass: false, reason: "training cards missing", keyCount: 0, skipped: true };
  }
  if (group === "g1-training" && !TRAINING_NOT_APPLICABLE_LANGS.has(lang)) {
    const rel = trainingCardsRel(lang);
    if (rel && fileExists(rel)) {
      const lesson7 = original.lesson7;
      if (!Array.isArray(lesson7) || lesson7.length === 0) {
        return {
          pass: false,
          reason: "lesson7ExerciseCards missing or empty",
          keyCount: 0,
          lesson7Missing: true,
        };
      }
    }
  }

  const flat = flattenGroup({ group, lang, level, data: original });
  const keyCount = Object.keys(flat).length;
  if (keyCount === 0) {
    return { pass: false, reason: "zero exportable keys", keyCount: 0 };
  }

  const parsed = parseCrowdinJson(exportFlatToJson(flat));
  const reapplied = applyGroupFlat({ group, lang, level, original, flat: parsed });
  const reflat = flattenGroup({ group, lang, level, data: reapplied });

  const origKeys = Object.keys(flat).sort();
  const newKeys = Object.keys(reflat).sort();

  if (origKeys.length !== newKeys.length) {
    return { pass: false, reason: `key count ${origKeys.length} → ${newKeys.length}`, keyCount };
  }
  for (let i = 0; i < origKeys.length; i++) {
    if (origKeys[i] !== newKeys[i]) {
      return { pass: false, reason: `key mismatch ${origKeys[i]} vs ${newKeys[i]}`, keyCount };
    }
    if (flat[origKeys[i]] !== reflat[origKeys[i]]) {
      return { pass: false, reason: `value mismatch at ${origKeys[i]}`, keyCount };
    }
  }
  return { pass: true, keyCount };
}

function verifyRoundTrip({ group, lang, level }) {
  if (group === "g2" && level && !G2_LEVELS.includes(level)) {
    return { pass: false, reason: `invalid level ${level}` };
  }
  return roundTripGroup({ group, lang, level });
}

module.exports = {
  dataRel,
  loadG2Level,
  loadG1Sentences,
  loadG1Verbs,
  loadG3CourseLessons,
  loadTrainingCardsByLesson,
  flattenGroup,
  applyGroupFlat,
  loadGroupOriginal,
  roundTripGroup,
  verifyRoundTrip,
  exportG2LevelToCrowdinJson: (lang, level) =>
    exportFlatToJson(flattenG2Flashcards(level, loadG2Level(lang, level))),
  exportG2LevelFlat: (lang, level) => flattenG2Flashcards(level, loadG2Level(lang, level)),
  getLvG2SourceKeySet: (level) =>
    new Set(Object.keys(flattenG2Flashcards(level, loadG2Level("lv", level)))),
};
