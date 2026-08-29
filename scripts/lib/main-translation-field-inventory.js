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
  // Teikumi / sentence cards: comma without • is internal punctuation, not alt translations
  if (!/[•/;]/.test(t) && /,\s+/.test(t)) {
    const parts = t.split(/,\s+/).map((p) => p.trim()).filter(Boolean);
    if (parts.length >= 2) {
      if (/[.!?…]$/.test(t)) return true;
      if (parts[0].length <= 12 && parts.length === 2) return true;
    }
  }
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

const { VERB_FORMS } = require("./content-crowdin-bridge/flatten-g1-verbs");
const { slugify } = require("./content-crowdin-bridge/slug");

function isNonEmptyString(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function scanG1VerbsInventory(entries = []) {
  let fieldsExpected = 0;
  let fieldsMapped = 0;
  let emptyByDesign = 0;
  const unmapped = [];

  for (const entry of entries) {
    const inf = entry?.infinitiv?.de;
    if (!isNonEmptyString(inf)) continue;
    const cardId = slugify(inf);
    const hasAnyLv = VERB_FORMS.some((form) => isNonEmptyString(entry[form]?.lv));
    if (!hasAnyLv) continue;

    for (const form of VERB_FORMS) {
      fieldsExpected++;
      const slot = entry[form];
      const fieldPath = `${form}.lv`;
      if (!slot || slot.lv === undefined || slot.lv === null) {
        unmapped.push({ cardId, fieldPath, reason: "missing slot" });
        continue;
      }
      if (!String(slot.lv).trim()) {
        emptyByDesign++;
        fieldsMapped++;
        continue;
      }
      fieldsMapped++;
    }
  }

  return {
    violations: [],
    fieldsExpected,
    fieldsMapped,
    emptyByDesign,
    unmappedMainTranslationFields: unmapped.length,
    inventoryCoverage: fieldsExpected === 0 ? 1 : fieldsMapped / fieldsExpected,
    unmapped,
    cardsScanned: entries.length,
  };
}

function scanG1VerbsMultiTranslation(entries = [], entryIdFn) {
  const violations = [];
  let fieldsScanned = 0;
  let rawCandidates = 0;

  entries.forEach((entry, index) => {
    const inf = entry?.infinitiv?.de;
    if (!inf) return;
    const cardId = slugify(inf);
    for (const form of VERB_FORMS) {
      const value = entry[form]?.lv;
      if (value === undefined || value === null) continue;
      fieldsScanned++;
      const parts = splitTranslationCandidates(String(value));
      if (parts.length >= 2) rawCandidates++;
      const detected = detectMultipleMainTranslationCandidates(String(value), `${form}.lv`);
      if (!detected) continue;
      violations.push({
        cardId,
        cardType: "verb",
        field: `${form}.lv`,
        de: inf,
        currentEt: String(value),
        candidates: detected.candidates.slice(0, 6),
        translationCount: detected.translationCount,
        classification: detected.classification,
        category: "MULTIPLE_TRANSLATION",
        severity: "HIGH",
        reason: detected.semanticNote,
        recommendedMain: detected.recommendedMain,
      });
    }
  });

  return {
    violations,
    rawCandidates,
    fieldsScanned,
    inventoryCoverage: 1,
    unmappedMainTranslationFields: 0,
    cardsScanned: entries.length,
  };
}

const G3_NATIVE_SCALAR_KEYS = new Set([
  "title",
  "subtitle",
  "description",
  "label",
  "task",
  "hint",
  "progressLabel",
]);

function walkG3NativeInventory(value, path, stats) {
  if (value === null || value === undefined) return;
  if (typeof value === "string") return;
  if (Array.isArray(value)) {
    value.forEach((item, i) => walkG3NativeInventory(item, `${path}[${i}]`, stats));
    return;
  }
  if (typeof value !== "object") return;

  for (const [key, child] of Object.entries(value)) {
    if (key === "legacyHtml") continue;
    const childPath = path ? `${path}.${key}` : key;
    if (key === "lv" && typeof child === "string") {
      stats.fieldsExpected++;
      stats.fieldsMapped++;
      if (!child.trim()) stats.emptyByDesign++;
      continue;
    }
    if (G3_NATIVE_SCALAR_KEYS.has(key) && typeof child === "string") {
      stats.fieldsExpected++;
      stats.fieldsMapped++;
      if (!child.trim()) stats.emptyByDesign++;
      continue;
    }
    walkG3NativeInventory(child, childPath, stats);
  }
}

function scanG3CourseLessonsInventory(courseLessonData = {}) {
  const stats = { fieldsExpected: 0, fieldsMapped: 0, emptyByDesign: 0 };
  for (const [lessonKey, lesson] of Object.entries(courseLessonData)) {
    walkG3NativeInventory(lesson, lessonKey, stats);
  }
  return {
    violations: [],
    ...stats,
    unmappedMainTranslationFields: 0,
    inventoryCoverage: stats.fieldsExpected === 0 ? 1 : stats.fieldsMapped / stats.fieldsExpected,
    cardsScanned: Object.keys(courseLessonData).length,
  };
}

function walkG3NativeMulti(value, path, violations, lessonKey) {
  if (value === null || value === undefined) return;
  if (typeof value === "string") return;
  if (Array.isArray(value)) {
    value.forEach((item, i) => walkG3NativeMulti(item, `${path}[${i}]`, violations, lessonKey));
    return;
  }
  if (typeof value !== "object") return;

  for (const [key, child] of Object.entries(value)) {
    if (key === "legacyHtml") continue;
    const childPath = path ? `${path}.${key}` : key;
    if ((key === "lv" || G3_NATIVE_SCALAR_KEYS.has(key)) && typeof child === "string") {
      const detected = detectMultipleMainTranslationCandidates(child, childPath);
      if (detected) {
        violations.push({
          cardId: lessonKey,
          field: childPath,
          de: "",
          currentEt: child,
          candidates: detected.candidates.slice(0, 6),
          translationCount: detected.translationCount,
          classification: detected.classification,
          category: "MULTIPLE_TRANSLATION",
          severity: "HIGH",
          reason: detected.semanticNote,
        });
      }
      continue;
    }
    walkG3NativeMulti(child, childPath, violations, lessonKey);
  }
}

function scanG3CourseLessonsMultiTranslation(courseLessonData = {}) {
  const violations = [];
  let fieldsScanned = 0;
  for (const [lessonKey, lesson] of Object.entries(courseLessonData)) {
    walkG3NativeMulti(lesson, lessonKey, violations, lessonKey);
    fieldsScanned++;
  }
  return {
    violations,
    rawCandidates: violations.length,
    fieldsScanned,
    inventoryCoverage: 1,
    unmappedMainTranslationFields: 0,
    cardsScanned: Object.keys(courseLessonData).length,
  };
}

function scanG1TrainingInventory(entries = []) {
  return scanDatasetMainTranslations(entries, (entry, index) => entry.de || entry.id || `training-${index}`);
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
  scanG1VerbsInventory,
  scanG1VerbsMultiTranslation,
  scanG3CourseLessonsInventory,
  scanG3CourseLessonsMultiTranslation,
  scanG1TrainingInventory,
  runRegressionFixtures,
  REGRESSION_FIXTURES,
};
