#!/usr/bin/env node
"use strict";

const { loadArrayDataset, loadWindowGlobals } = require("./audit-common");
const { entryId } = require("./content-crowdin-bridge/slug");
const { slugify } = require("./content-crowdin-bridge/slug");
const { VERB_FORMS } = require("./content-crowdin-bridge/flatten-g1-verbs");
const { getCardType } = require("./main-translation-field-inventory");

function dataRel(lang, file) {
  return lang === "lv" ? `data/${file}` : `data/${lang}/${file}`;
}

function loadG2Objects(lang, level) {
  const productionFile = dataRel(lang, `${level}.js`);
  const cards = loadArrayDataset(productionFile) || [];
  return cards.map((card, index) => ({
    id: entryId(card, index),
    cardType: getCardType(card),
    de: card.de || "",
    lv: card.lv || "",
    study: card.study || null,
    productionFile,
    index,
  }));
}

function loadG1SentencesObjects(lang) {
  const productionFile = dataRel(lang, "sentences.js");
  const cards = loadArrayDataset(productionFile) || [];
  return cards.map((card, index) => ({
    id: card.de || `sentence-${index}`,
    de: card.de || "",
    lv: card.lv || "",
    productionFile,
    index,
  }));
}

function loadG1VerbsObjects(lang) {
  const productionFile = dataRel(lang, "verbs.js");
  const cards = loadArrayDataset(productionFile) || [];
  return cards
    .filter((entry) => entry?.infinitiv?.de)
    .map((entry) => ({
      id: slugify(entry.infinitiv.de),
      infinitiv: entry.infinitiv.de,
      forms: VERB_FORMS.reduce((acc, form) => {
        acc[form] = entry[form] || null;
        return acc;
      }, {}),
      productionFile,
    }));
}

function loadG1TrainingObjects(lang) {
  if (lang === "lv") return [];
  const productionFile = dataRel(lang, "courseTrainingCards.js");
  const cards = loadArrayDataset(productionFile) || [];
  return cards.map((card, index) => ({
    id: card.de || card.id || `training-${index}`,
    de: card.de || "",
    lv: card.lv || "",
    study: card.study || null,
    productionFile,
    index,
  }));
}

function loadG3LessonObjects(lang) {
  const productionFile = dataRel(lang, "courseLessons.js");
  const globals = loadWindowGlobals(productionFile);
  const courseLessonData = globals.COURSE_LESSON_DATA || {};
  return Object.entries(courseLessonData).map(([lessonKey, lesson]) => ({
    id: lessonKey,
    lessonKey,
    native: lesson,
    productionFile,
  }));
}

module.exports = {
  loadG2Objects,
  loadG1SentencesObjects,
  loadG1VerbsObjects,
  loadG1TrainingObjects,
  loadG3LessonObjects,
};
