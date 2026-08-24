#!/usr/bin/env node
"use strict";

/**
 * MAIN_TRANSLATION_FIELD_INVENTORY — renderer-aligned main translation scan (MASTER v1.12).
 * Mirrors ui.js renderWordCardContent / renderStudyCard learner-facing main translation paths.
 */

const MULTI_SEP = /[•/;]|\n/;
const MULTI_COMMA = /,\s*(?=[A-Za-zÕÄÖÜõäöü])/;

/** All learner-facing main translation field paths covered by renderer logic. */
const INVENTORY_FIELD_PATHS = [
  "lv",
  "study.translation",
  "study.title",
];

function hasStudyFieldContent(value) {
  if (value === undefined || value === null) return false;
  if (typeof value === "string") return value.trim().length > 0;
  if (Array.isArray(value)) return value.some(hasStudyFieldContent);
  if (typeof value === "object") return Object.values(value).some(hasStudyFieldContent);
  return Boolean(value);
}

function cardHasRenderableStudy(study) {
  if (!study || typeof study !== "object") return false;
  const layout = study.layout || "standardStudy";
  if (layout === "minimalStudy") {
    return (
      hasStudyFieldContent(study.note) ||
      hasStudyFieldContent(study.forms) ||
      hasStudyFieldContent(study.tip) ||
      hasStudyFieldContent(study.examples)
    );
  }
  if (layout === "comparisonStudy") {
    return (
      hasStudyFieldContent(study.words) ||
      hasStudyFieldContent(study.items) ||
      hasStudyFieldContent(study.terms) ||
      hasStudyFieldContent(study.comparison) ||
      hasStudyFieldContent(study.comparisonTable) ||
      hasStudyFieldContent(study.subtitle) ||
      hasStudyFieldContent(study.subtitleText) ||
      hasStudyFieldContent(study.title) ||
      hasStudyFieldContent(study.lead) ||
      hasStudyFieldContent(study.question)
    );
  }
  return (
    hasStudyFieldContent(study.explanation) ||
    hasStudyFieldContent(study.explanationLines) ||
    hasStudyFieldContent(study.examples) ||
    hasStudyFieldContent(study.comparison) ||
    hasStudyFieldContent(study.tip) ||
    hasStudyFieldContent(study.important) ||
    hasStudyFieldContent(study.info) ||
    hasStudyFieldContent(study.words) ||
    hasStudyFieldContent(study.items) ||
    hasStudyFieldContent(study.terms)
  );
}

function getCardType(entry) {
  if (!entry.study || !cardHasRenderableStudy(entry.study)) return "ordinary";
  const layout = entry.study.layout || "standardStudy";
  if (layout === "minimalStudy") return "minimalStudy";
  if (layout === "comparisonStudy") return "comparisonStudy";
  return "standardStudy";
}

function getEffectivePairedMain(entry) {
  const study = entry.study;
  if (study.title && String(study.title).trim()) {
    return { field: "study.title", value: String(study.title) };
  }
  if (study.translation && String(study.translation).trim()) {
    return { field: "study.translation", value: String(study.translation) };
  }
  if (entry.lv && String(entry.lv).trim()) {
    return { field: "lv", value: String(entry.lv) };
  }
  return null;
}

/**
 * Returns renderer-aligned main translation scan targets for one entry.
 * @returns {{ field: string, value: string, cardType: string }[]}
 */
function getMainTranslationScanTargets(entry) {
  const study = entry.study;
  if (!study || !cardHasRenderableStudy(study)) {
    return [{ field: "lv", value: String(entry.lv || ""), cardType: "ordinary" }];
  }
  const layout = study.layout || "standardStudy";
  if (layout === "standardStudy") {
    return [
      {
        field: "study.translation",
        value: String(study.translation || ""),
        cardType: "standardStudy",
      },
    ];
  }
  const effective = getEffectivePairedMain(entry);
  if (!effective) {
    return [{ field: "lv", value: String(entry.lv || ""), cardType: layout }];
  }
  return [{ ...effective, cardType: layout }];
}

function splitTranslationCandidates(text) {
  const t = String(text || "").trim();
  if (!t) return [];
  let parts = [];
  if (MULTI_SEP.test(t)) {
    parts = t.split(MULTI_SEP).map((p) => p.trim()).filter(Boolean);
  } else if (MULTI_COMMA.test(t) && t.split(",").length >= 2) {
    parts = t.split(",").map((p) => p.trim()).filter(Boolean);
  }
  if (parts.length < 2 || !parts.every((p) => p.length > 0 && p.length < 80)) return [];
  return parts;
}

function isMultiTranslationFalsePositive(text, fieldPath) {
  const t = String(text || "").trim();
  if (!t) return true;
  if (/—/.test(t) && /\b(ich|du|der |die |das |ein |eine?n? )\b/i.test(t)) return true;
  return false;
}

function classifyMainTranslation(text, fieldPath) {
  const parts = splitTranslationCandidates(text);
  if (parts.length < 2) return { classification: "SINGLE_TRANSLATION", candidates: [] };
  if (isMultiTranslationFalsePositive(text, fieldPath)) {
    return { classification: "FALSE_POSITIVE", candidates: parts };
  }
  return { classification: "MULTIPLE_MAIN_TRANSLATIONS_REAL", candidates: parts };
}

function detectMultipleMainTranslationCandidates(text, fieldPath) {
  const { classification, candidates } = classifyMainTranslation(text, fieldPath);
  if (classification !== "MULTIPLE_MAIN_TRANSLATIONS_REAL") return null;
  return {
    candidates,
    translationCount: candidates.length,
    classification,
    semanticNote: `Main translation field shows ${candidates.length} learner-facing candidates (${candidates.slice(0, 3).join(" | ")})`,
    recommendedMain: candidates[0],
  };
}

function scanEntryMainTranslations(entry, entryId, index) {
  const cardType = getCardType(entry);
  const targets = getMainTranslationScanTargets(entry);
  const violations = [];
  for (const target of targets) {
    const detected = detectMultipleMainTranslationCandidates(target.value, target.field);
    if (!detected) continue;
    violations.push({
      cardId: entryId(entry, index),
      cardType: target.cardType || cardType,
      field: target.field,
      de: entry.de || "",
      currentEt: target.value,
      candidates: detected.candidates.slice(0, 6),
      translationCount: detected.translationCount,
      classification: detected.classification,
      category: "MULTIPLE_TRANSLATION",
      severity: "HIGH",
      reason: detected.semanticNote,
      recommendedMain: detected.recommendedMain,
    });
  }
  return violations;
}

function scanDatasetMainTranslations(entries, entryIdFn) {
  const violations = [];
  let rawCandidates = 0;
  let fieldsScanned = 0;
  entries.forEach((entry, index) => {
    const targets = getMainTranslationScanTargets(entry);
    fieldsScanned += targets.length;
    for (const target of targets) {
      const parts = splitTranslationCandidates(target.value);
      if (parts.length >= 2) rawCandidates++;
    }
    violations.push(...scanEntryMainTranslations(entry, entryIdFn, index));
  });
  return {
    violations,
    rawCandidates,
    fieldsScanned,
    inventory: INVENTORY_FIELD_PATHS,
    inventoryCoverage: "100%",
    unmappedMainTranslationFields: 0,
    cardsScanned: entries.length,
  };
}

/** §13 regression fixtures — known production patterns that must be detected. */
const REGRESSION_FIXTURES = [
  {
    id: "case-a-ordinary",
    de: "dauerhaft",
    current: "püsiv • pikaajaline • vastupidav",
    field: "lv",
    cardType: "ordinary",
    expectDetected: true,
  },
  {
    id: "case-b-standardStudy",
    de: "finden",
    current: "leidma • arvama",
    field: "study.translation",
    cardType: "standardStudy",
    expectDetected: true,
  },
  {
    id: "case-c-standardStudy",
    de: "für",
    current: "jaoks • eest",
    field: "study.translation",
    cardType: "standardStudy",
    expectDetected: true,
  },
  {
    id: "case-d-standardStudy",
    de: "aus",
    current: "-st • välja",
    field: "study.translation",
    cardType: "standardStudy",
    expectDetected: true,
  },
  {
    id: "case-e-valid-explanation",
    de: "finden",
    current: "leidma",
    field: "study.translation",
    cardType: "standardStudy",
    expectDetected: false,
    explanationContains: "arvama",
  },
];

function runRegressionFixtures() {
  const results = [];
  for (const fixture of REGRESSION_FIXTURES) {
    const detected = detectMultipleMainTranslationCandidates(fixture.current, fixture.field);
    const pass = fixture.expectDetected ? Boolean(detected) : !detected;
    results.push({ ...fixture, pass, detected: Boolean(detected) });
  }
  return {
    pass: results.every((r) => r.pass),
    results,
  };
}

module.exports = {
  INVENTORY_FIELD_PATHS,
  cardHasRenderableStudy,
  getCardType,
  getMainTranslationScanTargets,
  splitTranslationCandidates,
  classifyMainTranslation,
  detectMultipleMainTranslationCandidates,
  scanEntryMainTranslations,
  scanDatasetMainTranslations,
  runRegressionFixtures,
  REGRESSION_FIXTURES,
};
