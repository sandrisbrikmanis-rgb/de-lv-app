#!/usr/bin/env node
"use strict";

const { fileExists, loadWindowGlobals, langSuffix } = require("../audit-common");

const LESSON_IDS = ["lesson1", "lesson2", "lesson3", "lesson4", "lesson5", "lesson6", "lesson7"];

function trainingCardsRel(lang) {
  return lang === "lv" ? null : `data/${lang}/courseTrainingCards.js`;
}

function loadTrainingCardsByLesson(lang) {
  const rel = trainingCardsRel(lang);
  if (!rel || !fileExists(rel)) return {};

  const globals = loadWindowGlobals(rel);
  const suffix = langSuffix(lang);
  const out = {};

  for (let n = 1; n <= 7; n++) {
    const candidates = [
      `lesson${n}TrainingCards${suffix}`,
      `lesson${n}TrainingCards`,
    ];
    const key = candidates.find((k) => Array.isArray(globals[k]));
    if (key) out[`lesson${n}`] = globals[key];
  }
  return out;
}

function flattenG1TrainingCards(byLesson) {
  const flat = {};
  for (const lessonId of LESSON_IDS) {
    const cards = byLesson[lessonId];
    if (!Array.isArray(cards)) continue;
    cards.forEach((card, i) => {
      if (card?.front) {
        flat[`kurss.training.${lessonId}.card[${i}].front`] = String(card.front);
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
    cloned[lessonId][index].front = value;
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
  trainingCardsRel,
  loadTrainingCardsByLesson,
  flattenG1TrainingCards,
  applyG1TrainingFlat,
  buildTrainingSourceKeyTemplate,
};
