#!/usr/bin/env node
"use strict";

const { fileExists, loadArrayDataset, loadWindowGlobals } = require("../../audit-common");
const { G2_LEVELS } = require("../../content-crowdin-bridge/constants");
const {
  loadLvTrainingCardsFromUi,
  loadTrainingCardsByLesson,
  TRAINING_NOT_APPLICABLE_LANGS,
} = require("../../content-crowdin-bridge/flatten-g1-training");
const { entryId } = require("../../content-crowdin-bridge/slug");

const SCHEMA_EXCLUDE_KEYS = new Set(["sectionAccents", "accents"]);
const G3_STRUCTURAL_EXCLUDE_KEYS = new Set([
  "legacyHtml",
  "de",
  "answer",
  "text",
  "prompt",
  "back",
  "du",
  "ihr",
  "sie",
  "infinitive",
]);

function schemaKeys(obj, prefix = "") {
  const keys = [];
  for (const k of Object.keys(obj)) {
    if (SCHEMA_EXCLUDE_KEYS.has(k)) continue;
    const p = prefix ? `${prefix}.${k}` : k;
    keys.push(p);
    const v = obj[k];
    if (v && typeof v === "object" && !Array.isArray(v)) {
      keys.push(...schemaKeys(v, p));
    }
  }
  return keys;
}

function makeFinding({
  auditId,
  group,
  dataset,
  lang,
  cardId,
  fieldPath,
  severity,
  category,
  productionFile,
  current,
  de,
  message,
}) {
  return {
    auditId,
    group,
    dataset,
    lang,
    cardId: cardId || "",
    fieldPath: fieldPath || "",
    severity,
    category,
    productionFile,
    current: current ?? null,
    de: de ?? null,
    proposed: null,
    message,
    source: "deterministic/structural",
  };
}

/**
 * Structural parity vs LV for one G2 level (READ-ONLY).
 */
function collectG2Structural({ lang, level, idPrefix }) {
  const findings = [];
  const lvPath = `data/${level}.js`;
  const langPath = lang === "lv" ? lvPath : `data/${lang}/${level}.js`;
  const productionFile = langPath;

  if (lang !== "lv" && !fileExists(langPath)) {
    findings.push(
      makeFinding({
        auditId: `${idPrefix}-MISSING-FILE`,
        group: "g2",
        dataset: level,
        lang,
        severity: "CRITICAL",
        category: "MISSING_DATASET_FILE",
        productionFile: langPath,
        message: `Dataset file missing: ${langPath}`,
      }),
    );
    return { findings, stats: { cards: 0, structuralIssues: findings.length } };
  }

  const lvWords = loadArrayDataset(lvPath) || [];
  const langWords = lang === "lv" ? lvWords : loadArrayDataset(langPath) || [];

  let seq = 0;
  const nextId = (cat) => `${idPrefix}-${String(++seq).padStart(4, "0")}-${cat}`;

  if (lvWords.length !== langWords.length) {
    findings.push(
      makeFinding({
        auditId: nextId("COUNT"),
        group: "g2",
        dataset: level,
        lang,
        severity: "CRITICAL",
        category: "RECORD_COUNT_MISMATCH",
        productionFile,
        current: `${langWords.length}`,
        de: `${lvWords.length}`,
        message: `Record count LV=${lvWords.length} ${lang.toUpperCase()}=${langWords.length}`,
      }),
    );
  }

  const n = Math.min(lvWords.length, langWords.length);
  let orderMismatches = 0;
  let layoutMismatches = 0;
  let missingFieldRecords = 0;

  for (let i = 0; i < n; i++) {
    const lvC = lvWords[i];
    const langC = langWords[i];
    const cid = entryId(lvC, i);

    if (lvC.de !== langC.de) {
      orderMismatches++;
      if (orderMismatches <= 5) {
        findings.push(
          makeFinding({
            auditId: nextId("ORDER"),
            group: "g2",
            dataset: level,
            lang,
            cardId: cid,
            fieldPath: "de",
            severity: "CRITICAL",
            category: "ORDER_MISMATCH",
            productionFile,
            current: langC.de,
            de: lvC.de,
            message: `Index ${i}: de field order mismatch`,
          }),
        );
      }
      continue;
    }

    const lvKeys = new Set(
      schemaKeys(lvC).filter((k) => k !== "lv" && !k.startsWith("lv.") && !k.endsWith(".lv")),
    );
    const langKeys = new Set(
      schemaKeys(langC).filter((k) => k !== "lv" && !k.startsWith("lv.") && !k.endsWith(".lv")),
    );
    const missing = [...lvKeys].filter((k) => !langKeys.has(k));
    if (missing.length) {
      missingFieldRecords++;
      if (missingFieldRecords <= 5) {
        findings.push(
          makeFinding({
            auditId: nextId("SCHEMA"),
            group: "g2",
            dataset: level,
            lang,
            cardId: cid,
            fieldPath: missing.join(", "),
            severity: "HIGH",
            category: "MISSING_FIELDS",
            productionFile,
            de: lvC.de,
            message: `Missing fields vs LV: ${missing.slice(0, 8).join(", ")}`,
          }),
        );
      }
    }

    const lvLayout = lvC.study?.layout || (lvC.study ? "standardStudy" : null);
    const langLayout = langC.study?.layout || (langC.study ? "standardStudy" : null);
    if (lvLayout !== langLayout) {
      layoutMismatches++;
      if (layoutMismatches <= 5) {
        findings.push(
          makeFinding({
            auditId: nextId("LAYOUT"),
            group: "g2",
            dataset: level,
            lang,
            cardId: cid,
            fieldPath: "study.layout",
            severity: "HIGH",
            category: "STUDY_LAYOUT_MISMATCH",
            productionFile,
            current: String(langLayout),
            de: lvC.de,
            message: `study.layout LV=${lvLayout} ${lang.toUpperCase()}=${langLayout}`,
          }),
        );
      }
    }
  }

  if (orderMismatches > 5) {
    findings.push(
      makeFinding({
        auditId: nextId("ORDER-SUM"),
        group: "g2",
        dataset: level,
        lang,
        severity: "CRITICAL",
        category: "ORDER_MISMATCH",
        productionFile,
        message: `${orderMismatches} total de-order mismatches (first 5 listed)`,
      }),
    );
  }

  return {
    findings,
    stats: {
      cards: langWords.length,
      lvCards: lvWords.length,
      structuralIssues: findings.length,
      orderMismatches,
      layoutMismatches,
      missingFieldRecords,
      structuralCollector: "g2",
    },
  };
}

function collectG1SentencesStructural({ lang, idPrefix }) {
  const findings = [];
  const lvPath = "data/sentences.js";
  const langPath = lang === "lv" ? lvPath : `data/${lang}/sentences.js`;
  const productionFile = langPath;

  if (lang !== "lv" && !fileExists(langPath)) {
    findings.push(
      makeFinding({
        auditId: `${idPrefix}-MISSING-FILE`,
        group: "g1",
        dataset: "sentences",
        lang,
        severity: "CRITICAL",
        category: "MISSING_DATASET_FILE",
        productionFile: langPath,
        message: `Dataset file missing: ${langPath}`,
      }),
    );
    return { findings, stats: { records: 0, structuralIssues: findings.length, structuralCollector: "g1-sentences" } };
  }

  const lvEntries = loadArrayDataset(lvPath) || [];
  const langEntries = lang === "lv" ? lvEntries : loadArrayDataset(langPath) || [];
  let seq = 0;
  const nextId = (cat) => `${idPrefix}-${String(++seq).padStart(4, "0")}-${cat}`;

  if (lvEntries.length !== langEntries.length) {
    findings.push(
      makeFinding({
        auditId: nextId("COUNT"),
        group: "g1",
        dataset: "sentences",
        lang,
        severity: "CRITICAL",
        category: "RECORD_COUNT_MISMATCH",
        productionFile,
        current: `${langEntries.length}`,
        de: `${lvEntries.length}`,
        message: `Record count LV=${lvEntries.length} ${lang.toUpperCase()}=${langEntries.length}`,
      }),
    );
  }

  const n = Math.min(lvEntries.length, langEntries.length);
  let orderMismatches = 0;
  for (let i = 0; i < n; i++) {
    if (lvEntries[i]?.de !== langEntries[i]?.de) {
      orderMismatches++;
      if (orderMismatches <= 5) {
        findings.push(
          makeFinding({
            auditId: nextId("ORDER"),
            group: "g1",
            dataset: "sentences",
            lang,
            fieldPath: "de",
            severity: "CRITICAL",
            category: "ORDER_MISMATCH",
            productionFile,
            current: langEntries[i]?.de,
            de: lvEntries[i]?.de,
            message: `Index ${i}: de field order mismatch`,
          }),
        );
      }
    }
  }

  if (orderMismatches > 5) {
    findings.push(
      makeFinding({
        auditId: nextId("ORDER-SUM"),
        group: "g1",
        dataset: "sentences",
        lang,
        severity: "CRITICAL",
        category: "ORDER_MISMATCH",
        productionFile,
        message: `${orderMismatches} total de-order mismatches (first 5 listed)`,
      }),
    );
  }

  return {
    findings,
    stats: {
      records: langEntries.length,
      lvRecords: lvEntries.length,
      structuralIssues: findings.length,
      orderMismatches,
      structuralCollector: "g1-sentences",
    },
  };
}

function collectG1VerbsStructural({ lang, idPrefix }) {
  const findings = [];
  const lvPath = "data/verbs.js";
  const langPath = lang === "lv" ? lvPath : `data/${lang}/verbs.js`;
  const productionFile = langPath;

  if (lang !== "lv" && !fileExists(langPath)) {
    findings.push(
      makeFinding({
        auditId: `${idPrefix}-MISSING-FILE`,
        group: "g1",
        dataset: "verbs",
        lang,
        severity: "CRITICAL",
        category: "MISSING_DATASET_FILE",
        productionFile: langPath,
        message: `Dataset file missing: ${langPath}`,
      }),
    );
    return { findings, stats: { records: 0, structuralIssues: findings.length, structuralCollector: "g1-verbs" } };
  }

  const lvEntries = loadArrayDataset(lvPath) || [];
  const langEntries = lang === "lv" ? lvEntries : loadArrayDataset(langPath) || [];
  let seq = 0;
  const nextId = (cat) => `${idPrefix}-${String(++seq).padStart(4, "0")}-${cat}`;

  if (lvEntries.length !== langEntries.length) {
    findings.push(
      makeFinding({
        auditId: nextId("COUNT"),
        group: "g1",
        dataset: "verbs",
        lang,
        severity: "CRITICAL",
        category: "RECORD_COUNT_MISMATCH",
        productionFile,
        current: `${langEntries.length}`,
        de: `${lvEntries.length}`,
        message: `Record count LV=${lvEntries.length} ${lang.toUpperCase()}=${langEntries.length}`,
      }),
    );
  }

  const n = Math.min(lvEntries.length, langEntries.length);
  let orderMismatches = 0;
  for (let i = 0; i < n; i++) {
    const lvDe = lvEntries[i]?.infinitiv?.de;
    const langDe = langEntries[i]?.infinitiv?.de;
    if (lvDe !== langDe) {
      orderMismatches++;
      if (orderMismatches <= 5) {
        findings.push(
          makeFinding({
            auditId: nextId("ORDER"),
            group: "g1",
            dataset: "verbs",
            lang,
            fieldPath: "infinitiv.de",
            severity: "CRITICAL",
            category: "ORDER_MISMATCH",
            productionFile,
            current: langDe,
            de: lvDe,
            message: `Index ${i}: infinitiv.de order mismatch`,
          }),
        );
      }
    }
  }

  if (orderMismatches > 5) {
    findings.push(
      makeFinding({
        auditId: nextId("ORDER-SUM"),
        group: "g1",
        dataset: "verbs",
        lang,
        severity: "CRITICAL",
        category: "ORDER_MISMATCH",
        productionFile,
        message: `${orderMismatches} total infinitiv.de-order mismatches (first 5 listed)`,
      }),
    );
  }

  return {
    findings,
    stats: {
      records: langEntries.length,
      lvRecords: lvEntries.length,
      structuralIssues: findings.length,
      orderMismatches,
      structuralCollector: "g1-verbs",
    },
  };
}

function trainingAnchor(card, lessonId) {
  if (!card) return "";
  if (lessonId === "lesson7") return card.infinitive || "";
  return card.back || "";
}

function collectG1TrainingStructural({ lang, idPrefix }) {
  const findings = [];
  const lvByLesson = loadLvTrainingCardsFromUi();
  const productionFile = `data/${lang}/courseTrainingCards.js`;

  if (TRAINING_NOT_APPLICABLE_LANGS.has(lang)) {
    return {
      findings,
      stats: {
        lessons: 0,
        structuralIssues: 0,
        structuralCollector: "g1-training",
        applicability: "EXPECTED_NOT_APPLICABLE",
        note: `${lang}: no courseTrainingCards.js (LV embedded / ET absent)`,
      },
    };
  }

  if (!fileExists(productionFile)) {
    findings.push(
      makeFinding({
        auditId: `${idPrefix}-MISSING-FILE`,
        group: "g1",
        dataset: "training",
        lang,
        severity: "CRITICAL",
        category: "MISSING_DATASET_FILE",
        productionFile,
        message: `Dataset file missing: ${productionFile}`,
      }),
    );
    return { findings, stats: { lessons: 0, structuralIssues: findings.length, structuralCollector: "g1-training" } };
  }

  const langByLesson = loadTrainingCardsByLesson(lang);
  let seq = 0;
  const nextId = (cat) => `${idPrefix}-${String(++seq).padStart(4, "0")}-${cat}`;
  let lesson7Cards = 0;

  for (let n = 1; n <= 7; n++) {
    const lessonId = `lesson${n}`;
    const lvDeck = lvByLesson[lessonId] || [];
    const langDeck = langByLesson[lessonId] || [];

    if (n === 7) lesson7Cards = langDeck.length;

    if (!Array.isArray(langDeck) || langDeck.length === 0) {
      findings.push(
        makeFinding({
          auditId: nextId("MISSING-DECK"),
          group: "g1",
          dataset: "training",
          lang,
          fieldPath: lessonId,
          severity: "CRITICAL",
          category: "MISSING_LESSON_DECK",
          productionFile,
          message: `${lessonId} deck missing or empty`,
        }),
      );
      continue;
    }

    if (lvDeck.length !== langDeck.length) {
      findings.push(
        makeFinding({
          auditId: nextId("COUNT"),
          group: "g1",
          dataset: "training",
          lang,
          fieldPath: lessonId,
          severity: "CRITICAL",
          category: "RECORD_COUNT_MISMATCH",
          productionFile,
          current: `${langDeck.length}`,
          de: `${lvDeck.length}`,
          message: `${lessonId} card count LV=${lvDeck.length} ${lang.toUpperCase()}=${langDeck.length}`,
        }),
      );
    }

    const count = Math.min(lvDeck.length, langDeck.length);
    let orderMismatches = 0;
    for (let i = 0; i < count; i++) {
      const lvAnchor = trainingAnchor(lvDeck[i], lessonId);
      const langAnchor = trainingAnchor(langDeck[i], lessonId);
      if (lvAnchor && langAnchor && lvAnchor !== langAnchor) {
        orderMismatches++;
        if (orderMismatches <= 3) {
          findings.push(
            makeFinding({
              auditId: nextId("ORDER"),
              group: "g1",
              dataset: "training",
              lang,
              fieldPath: `${lessonId}[${i}]`,
              severity: "CRITICAL",
              category: "ORDER_MISMATCH",
              productionFile,
              current: langAnchor,
              de: lvAnchor,
              message: `${lessonId} index ${i}: DE anchor mismatch`,
            }),
          );
        }
      }
    }
  }

  return {
    findings,
    stats: {
      lessons: Object.keys(langByLesson).length,
      lesson7Cards,
      structuralIssues: findings.length,
      structuralCollector: "g1-training",
      applicability: "APPLICABLE",
    },
  };
}

function g3ShapePaths(value, prefix = "", paths = []) {
  if (value === null || value === undefined) return paths;
  if (Array.isArray(value)) {
    paths.push(`${prefix}.length=${value.length}`);
    value.forEach((item, i) => g3ShapePaths(item, `${prefix}[${i}]`, paths));
    return paths;
  }
  if (typeof value !== "object") return paths;

  for (const [key, child] of Object.entries(value)) {
    if (G3_STRUCTURAL_EXCLUDE_KEYS.has(key)) continue;
    const childPath = prefix ? `${prefix}.${key}` : key;
    if (typeof child === "string") {
      paths.push(childPath);
    } else {
      g3ShapePaths(child, childPath, paths);
    }
  }
  return paths;
}

function collectG3CourseLessonsStructural({ lang, idPrefix }) {
  const findings = [];
  const lvPath = "data/courseLessons.js";
  const langPath = lang === "lv" ? lvPath : `data/${lang}/courseLessons.js`;
  const productionFile = langPath;

  if (lang !== "lv" && !fileExists(langPath)) {
    findings.push(
      makeFinding({
        auditId: `${idPrefix}-MISSING-FILE`,
        group: "g3",
        dataset: "courseLessons",
        lang,
        severity: "CRITICAL",
        category: "MISSING_DATASET_FILE",
        productionFile: langPath,
        message: `Dataset file missing: ${langPath}`,
      }),
    );
    return { findings, stats: { lessons: 0, structuralIssues: findings.length, structuralCollector: "g3-courseLessons" } };
  }

  const lvGlobals = loadWindowGlobals(lvPath);
  const langGlobals = lang === "lv" ? lvGlobals : loadWindowGlobals(langPath);
  const lvData = lvGlobals.COURSE_LESSON_DATA || {};
  const langData = langGlobals.COURSE_LESSON_DATA || {};

  let seq = 0;
  const nextId = (cat) => `${idPrefix}-${String(++seq).padStart(4, "0")}-${cat}`;

  const lvKeys = Object.keys(lvData).sort();
  const langKeys = Object.keys(langData).sort();

  if (lvKeys.join("|") !== langKeys.join("|")) {
    findings.push(
      makeFinding({
        auditId: nextId("LESSON-KEYS"),
        group: "g3",
        dataset: "courseLessons",
        lang,
        severity: "CRITICAL",
        category: "LESSON_KEY_MISMATCH",
        productionFile,
        current: `${langKeys.length} keys`,
        de: `${lvKeys.length} keys`,
        message: "COURSE_LESSON_DATA top-level lesson keys differ from LV",
      }),
    );
  }

  let shapeMismatches = 0;
  for (const key of lvKeys) {
    if (!langData[key]) continue;
    const lvShape = g3ShapePaths(lvData[key], key).sort();
    const langShape = g3ShapePaths(langData[key], key).sort();
    if (lvShape.join("|") !== langShape.join("|")) {
      shapeMismatches++;
      if (shapeMismatches <= 5) {
        findings.push(
          makeFinding({
            auditId: nextId("SHAPE"),
            group: "g3",
            dataset: "courseLessons",
            lang,
            fieldPath: key,
            severity: "HIGH",
            category: "STRUCTURE_MISMATCH",
            productionFile,
            message: `Structured shape mismatch for ${key} (legacyHtml excluded)`,
          }),
        );
      }
    }
    if (lvData[key]?.id && langData[key]?.id && lvData[key].id !== langData[key].id) {
      findings.push(
        makeFinding({
          auditId: nextId("ID"),
          group: "g3",
          dataset: "courseLessons",
          lang,
          fieldPath: `${key}.id`,
          severity: "CRITICAL",
          category: "LESSON_ID_MISMATCH",
          productionFile,
          current: langData[key].id,
          de: lvData[key].id,
          message: `Lesson id mismatch for ${key}`,
        }),
      );
    }
  }

  if (shapeMismatches > 5) {
    findings.push(
      makeFinding({
        auditId: nextId("SHAPE-SUM"),
        group: "g3",
        dataset: "courseLessons",
        lang,
        severity: "HIGH",
        category: "STRUCTURE_MISMATCH",
        productionFile,
        message: `${shapeMismatches} total structured shape mismatches (first 5 listed)`,
      }),
    );
  }

  return {
    findings,
    stats: {
      lessons: langKeys.length,
      lvLessons: lvKeys.length,
      structuralIssues: findings.length,
      shapeMismatches,
      structuralCollector: "g3-courseLessons",
    },
  };
}

module.exports = {
  collectG2Structural,
  collectG1SentencesStructural,
  collectG1VerbsStructural,
  collectG1TrainingStructural,
  collectG3CourseLessonsStructural,
};
