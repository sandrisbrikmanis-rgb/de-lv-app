#!/usr/bin/env node
"use strict";

const vm = require("vm");
const { fileExists, loadWindowGlobals, langSuffix, readFile } = require("../audit-common");

const LESSON_IDS = ["lesson1", "lesson2", "lesson3", "lesson4", "lesson5", "lesson6", "lesson7"];
const TRAINING_NOT_APPLICABLE_LANGS = new Set(["lv", "et"]);

function trainingCardsRel(lang) {
  if (TRAINING_NOT_APPLICABLE_LANGS.has(lang)) return null;
  return `data/${lang}/courseTrainingCards.js`;
}

function loadLvTrainingCardsFromUi() {
  const rel = "www/ui.js";
  if (!fileExists(rel)) return {};
  const code = readFile(rel);
  const out = {};

  for (let n = 1; n <= 6; n++) {
    const re = new RegExp(`const lesson${n}TrainingCards = (\\[[\\s\\S]*?\\]);`);
    const m = code.match(re);
    if (m) {
      try {
        out[`lesson${n}`] = vm.runInNewContext(m[1]);
      } catch {
        /* skip malformed deck */
      }
    }
  }

  const m7 = code.match(/const lesson7ExerciseCards = (\[[\s\S]*?\]);/);
  if (m7) {
    try {
      out.lesson7 = vm.runInNewContext(m7[1]);
    } catch {
      /* skip malformed deck */
    }
  }
  return out;
}

function resolveLessonDeck(n, globals, suffix) {
  if (n === 7) {
    const candidates = [
      `lesson7ExerciseCards${suffix}`,
      "lesson7ExerciseCards",
      `lesson7TrainingCards${suffix}`,
      `lesson7TrainingCards`,
    ];
    const key = candidates.find((k) => Array.isArray(globals[k]));
    return key ? globals[key] : null;
  }

  const candidates = [
    `lesson${n}TrainingCards${suffix}`,
    `lesson${n}TrainingCards`,
  ];
  const key = candidates.find((k) => Array.isArray(globals[k]));
  return key ? globals[key] : null;
}

function loadTrainingCardsByLesson(lang) {
  if (lang === "lv") return loadLvTrainingCardsFromUi();

  const rel = trainingCardsRel(lang);
  if (!rel || !fileExists(rel)) return {};

  const globals = loadWindowGlobals(rel);
  const suffix = langSuffix(lang);
  const out = {};

  for (let n = 1; n <= 7; n++) {
    const deck = resolveLessonDeck(n, globals, suffix);
    if (deck) out[`lesson${n}`] = deck;
  }
  return out;
}

function trainingCardNative(card) {
  if (!card) return null;
  const value = card.front ?? card.lv;
  return typeof value === "string" && value.trim().length > 0 ? value : null;
}

function flattenG1TrainingCards(byLesson) {
  const flat = {};
  for (const lessonId of LESSON_IDS) {
    const cards = byLesson[lessonId];
    if (!Array.isArray(cards)) continue;
    cards.forEach((card, i) => {
      const native = trainingCardNative(card);
      if (native) {
        flat[`kurss.training.${lessonId}.card[${i}].front`] = native;
      }
    });
  }
  return flat;
}

function applyG1TrainingFlat(byLesson, flat) {
  const cloned = JSON.parse(JSON.stringify(byLesson));
  for (const [key, value] of Object.entries(flat)) {
    const m = key.match(/^kurss\.training\.(lesson\d+)\.card\[(\d+)\]\.front$/);
    if (!m) continue;
    const lessonId = m[1];
    const index = Number(m[2]);
    if (!cloned[lessonId] || !cloned[lessonId][index]) continue;
    const card = cloned[lessonId][index];
    if (Object.prototype.hasOwnProperty.call(card, "front")) {
      card.front = value;
    } else {
      card.lv = value;
    }
  }
  return cloned;
}

/**
 * Build LV source key template from first lang with complete training cards (structural master).
 */
function buildTrainingSourceKeyTemplate(referenceLang = "da") {
  const byLesson = loadTrainingCardsByLesson(referenceLang);
  return new Set(Object.keys(flattenG1TrainingCards(byLesson)));
}

module.exports = {
  LESSON_IDS,
  TRAINING_NOT_APPLICABLE_LANGS,
  trainingCardsRel,
  loadLvTrainingCardsFromUi,
  loadTrainingCardsByLesson,
  flattenG1TrainingCards,
  applyG1TrainingFlat,
  buildTrainingSourceKeyTemplate,
  trainingCardNative,
  resolveLessonDeck,
};
