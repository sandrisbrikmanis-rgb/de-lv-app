#!/usr/bin/env node
"use strict";

const { scanDatasetMainTranslations } = require("../../main-translation-field-inventory");
const { loadArrayDataset } = require("../../audit-common");
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

module.exports = {
  collectG2MultiTranslation,
  collectG1SentencesMultiTranslation,
};
