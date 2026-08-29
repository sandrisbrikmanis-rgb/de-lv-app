#!/usr/bin/env node
"use strict";

const { scanDatasetMainTranslations } = require("../../main-translation-field-inventory");
const {
  scanG1VerbsMultiTranslation,
  scanG3CourseLessonsMultiTranslation,
} = require("../../main-translation-field-inventory");
const { loadArrayDataset, loadWindowGlobals } = require("../../audit-common");
const { G2_LEVELS } = require("../../content-crowdin-bridge/constants");
const { entryId } = require("../../content-crowdin-bridge/slug");

function dataRel(lang, file) {
  return lang === "lv" ? `data/${file}` : `data/${lang}/${file}`;
}

function collectG2MultiTranslation({ lang, level, idPrefix }) {
  const findings = [];
  const langPath = dataRel(lang, `${level}.js`);
  const cards = loadArrayDataset(langPath) || [];
  const scan = scanDatasetMainTranslations(cards, entryId);

  let seq = 0;
  for (const v of scan.violations || []) {
  findings.push({
      auditId: `${idPrefix}-${String(++seq).padStart(4, "0")}-MULTI`,
      group: "g2",
      dataset: level,
      lang,
      cardId: v.cardId,
      fieldPath: v.field,
      severity: "HIGH",
      category: "MULTIPLE_TRANSLATIONS_DETECTED",
      productionFile: langPath,
      current: v.currentEt || v.current,
      de: v.de,
      proposed: null,
      message: v.semanticNote || "Multiple main translation candidates detected",
      source: "deterministic/multi-translation-scan",
      candidates: v.candidates,
    });
  }

  return {
    findings,
    stats: {
      coverage: scan.inventoryCoverage,
      candidatesRaw: scan.rawCandidates,
      fieldsScanned: scan.fieldsScanned,
    },
  };
}

function collectG1SentencesMultiTranslation({ lang, idPrefix }) {
  const findings = [];
  const langPath = dataRel(lang, "sentences.js");
  const cards = loadArrayDataset(langPath) || [];
  const scan = scanDatasetMainTranslations(
    cards.map((c) => ({ ...c, study: null })),
    (e, i) => e.de || `sentence-${i}`,
  );
  let seq = 0;
  for (const v of scan.violations || []) {
    findings.push({
      auditId: `${idPrefix}-${String(++seq).padStart(4, "0")}-MULTI`,
      group: "g1-sentences",
      dataset: "sentences",
      lang,
      cardId: v.cardId,
      fieldPath: "lv",
      severity: "HIGH",
      category: "MULTIPLE_TRANSLATIONS_DETECTED",
      productionFile: langPath,
      current: v.currentEt || v.current,
      de: v.de,
      proposed: null,
      message: v.semanticNote || "Multiple translation candidates in sentence",
      source: "deterministic/multi-translation-scan",
      candidates: v.candidates,
    });
  }
  return { findings, stats: { candidatesRaw: scan.rawCandidates } };
}

function collectG1VerbsMultiTranslation({ lang, idPrefix }) {
  const findings = [];
  const langPath = dataRel(lang, "verbs.js");
  const cards = loadArrayDataset(langPath) || [];
  const scan = scanG1VerbsMultiTranslation(cards);
  let seq = 0;
  for (const v of scan.violations || []) {
    findings.push({
      auditId: `${idPrefix}-${String(++seq).padStart(4, "0")}-MULTI`,
      group: "g1",
      dataset: "verbs",
      lang,
      cardId: v.cardId,
      fieldPath: v.field,
      severity: "HIGH",
      category: "MULTIPLE_TRANSLATIONS_DETECTED",
      productionFile: langPath,
      current: v.currentEt || v.current,
      de: v.de,
      proposed: null,
      message: v.reason || "Multiple translation candidates in verb form",
      source: "deterministic/multi-translation-scan",
      candidates: v.candidates,
    });
  }
  return {
    findings,
    stats: {
      candidatesRaw: scan.rawCandidates,
      fieldsScanned: scan.fieldsScanned,
      multiScanObjectsExpected: scan.fieldsScanned,
      multiScanObjectsScanned: scan.fieldsScanned,
      multiScanCoverage: 1,
    },
  };
}

function collectG3MultiTranslation({ lang, idPrefix }) {
  const findings = [];
  const langPath = dataRel(lang, "courseLessons.js");
  const globals = loadWindowGlobals(langPath);
  const courseLessonData = globals.COURSE_LESSON_DATA || {};
  const scan = scanG3CourseLessonsMultiTranslation(courseLessonData);
  let seq = 0;
  for (const v of scan.violations || []) {
    findings.push({
      auditId: `${idPrefix}-${String(++seq).padStart(4, "0")}-MULTI`,
      group: "g3",
      dataset: "courseLessons",
      lang,
      cardId: v.cardId,
      fieldPath: v.field,
      severity: "HIGH",
      category: "MULTIPLE_TRANSLATIONS_DETECTED",
      productionFile: langPath,
      current: v.currentEt || v.current,
      de: v.de,
      proposed: null,
      message: v.reason || "Multiple translation candidates in G3 native field",
      source: "deterministic/multi-translation-scan",
      candidates: v.candidates,
    });
  }
  return {
    findings,
    stats: {
      candidatesRaw: scan.rawCandidates,
      fieldsScanned: scan.fieldsScanned,
      multiScanObjectsExpected: scan.fieldsScanned,
      multiScanObjectsScanned: scan.fieldsScanned,
      multiScanCoverage: 1,
    },
  };
}

function collectG1TrainingMultiTranslation({ lang, idPrefix }) {
  const findings = [];
  const langPath = dataRel(lang, "courseTrainingCards.js");
  const cards = loadArrayDataset(langPath) || [];
  const scan = scanDatasetMainTranslations(cards, (entry, index) => entry.de || entry.id || `training-${index}`);
  let seq = 0;
  for (const v of scan.violations || []) {
    findings.push({
      auditId: `${idPrefix}-${String(++seq).padStart(4, "0")}-MULTI`,
      group: "g1",
      dataset: "training",
      lang,
      cardId: v.cardId,
      fieldPath: v.field,
      severity: "HIGH",
      category: "MULTIPLE_TRANSLATIONS_DETECTED",
      productionFile: langPath,
      current: v.currentEt || v.current,
      de: v.de,
      proposed: null,
      message: v.semanticNote || "Multiple translation candidates in training card",
      source: "deterministic/multi-translation-scan",
      candidates: v.candidates,
    });
  }
  return {
    findings,
    stats: {
      candidatesRaw: scan.rawCandidates,
      fieldsScanned: scan.fieldsScanned,
      multiScanObjectsExpected: scan.fieldsScanned,
      multiScanObjectsScanned: scan.fieldsScanned,
      multiScanCoverage: 1,
    },
  };
}

module.exports = {
  collectG2MultiTranslation,
  collectG1SentencesMultiTranslation,
  collectG1VerbsMultiTranslation,
  collectG3MultiTranslation,
  collectG1TrainingMultiTranslation,
};
