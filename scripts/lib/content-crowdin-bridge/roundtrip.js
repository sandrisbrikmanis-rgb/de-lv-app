#!/usr/bin/env node
"use strict";

const { loadArrayDataset } = require("../audit-common");
const { G2_LEVELS } = require("./constants");
const { flattenG2Flashcards, applyG2FlashcardsFlat } = require("./flatten-g2-flashcards");
const { exportFlatToJson, parseCrowdinJson } = require("./guards");

function dataRel(lang, level) {
  return lang === "lv" ? `data/${level}.js` : `data/${lang}/${level}.js`;
}

function loadG2Level(lang, level) {
  return loadArrayDataset(dataRel(lang, level)) || [];
}

function exportG2LevelToCrowdinJson(lang, level) {
  const cards = loadG2Level(lang, level);
  const flat = flattenG2Flashcards(level, cards);
  return exportFlatToJson(flat);
}

function exportG2LevelFlat(lang, level) {
  const cards = loadG2Level(lang, level);
  return flattenG2Flashcards(level, cards);
}

function getLvG2SourceKeySet(level) {
  const flat = exportG2LevelFlat("lv", level);
  return new Set(Object.keys(flat));
}

function roundTripG2Level(lang, level) {
  const original = loadG2Level(lang, level);
  const flat = flattenG2Flashcards(level, original);
  const json = exportFlatToJson(flat);
  const parsed = parseCrowdinJson(json);
  const reapplied = applyG2FlashcardsFlat(level, original, parsed);
  const reflat = flattenG2Flashcards(level, reapplied);

  const origKeys = Object.keys(flat).sort();
  const newKeys = Object.keys(reflat).sort();

  if (origKeys.length !== newKeys.length) {
    return {
      pass: false,
      reason: `key count ${origKeys.length} → ${newKeys.length}`,
      keyCount: origKeys.length,
    };
  }

  for (let i = 0; i < origKeys.length; i++) {
    if (origKeys[i] !== newKeys[i]) {
      return {
        pass: false,
        reason: `key order mismatch at ${i}: ${origKeys[i]} vs ${newKeys[i]}`,
        keyCount: origKeys.length,
      };
    }
    const k = origKeys[i];
    if (flat[k] !== reflat[k]) {
      return {
        pass: false,
        reason: `value mismatch at ${k}`,
        keyCount: origKeys.length,
      };
    }
  }

  return { pass: true, keyCount: origKeys.length };
}

function verifyRoundTrip({ group, lang, level }) {
  if (group !== "g2") {
    return { pass: false, reason: `unsupported group ${group}` };
  }
  if (!G2_LEVELS.includes(level)) {
    return { pass: false, reason: `unsupported level ${level}` };
  }
  return roundTripG2Level(lang, level);
}

module.exports = {
  loadG2Level,
  exportG2LevelToCrowdinJson,
  exportG2LevelFlat,
  getLvG2SourceKeySet,
  roundTripG2Level,
  verifyRoundTrip,
};
