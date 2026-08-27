#!/usr/bin/env node
"use strict";

/**
 * Collect ES Kurss Lessons 1–21 fields for READ-ONLY full audit.
 * LV MASTER at data/courseLessons.js is reference for structure only.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT, loadWindowGlobals } = require("./audit-common");
const {
  collectAllLessons,
  LESSON_COUNT,
  LESSON_KEYS,
  COURSE_LESSONS_FILE,
  TRAINING_FILE,
  UI_FILE,
} = require("./es-kurss-lessons-owner-extract");

const PRODUCTION_FILES = [
  COURSE_LESSONS_FILE,
  TRAINING_FILE,
  UI_FILE,
  `www/${COURSE_LESSONS_FILE}`,
  `www/${TRAINING_FILE}`,
  `www/${UI_FILE}`,
];

function loadLvCourseWindow() {
  const code = fs.readFileSync(path.join(ROOT, "data/courseLessons.js"), "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window;
}

function targetToField(target) {
  return {
    id: target.id,
    lessonNumber: target.lessonNumber,
    lessonId: `lesson${target.lessonNumber}`,
    path: target.path,
    field: target.field,
    fieldType: target.category,
    esCurrent: target.current ?? "",
    deContext: target.deContext ?? "",
    structureContext: target.structureContext ?? "",
    sourceFile: target.file,
    source: categorizeSource(target),
  };
}

function categorizeSource(target) {
  if (target.file === UI_FILE) return "ui";
  if (target.file === TRAINING_FILE) return "training";
  if (String(target.field || "").includes("legacyHtml")) return "legacyHtml";
  return "lesson";
}

function collectAllEsFields() {
  const { byLesson } = collectAllLessons();
  const fields = [];
  const byLessonCount = {};

  for (let n = 1; n <= LESSON_COUNT; n++) {
    const lessonTargets = byLesson[n] || [];
    byLessonCount[n] = lessonTargets.length;
    for (const t of lessonTargets) {
      fields.push(targetToField(t));
    }
  }

  const bySource = fields.reduce((acc, f) => {
    acc[f.source] = (acc[f.source] || 0) + 1;
    return acc;
  }, {});

  return {
    fields,
    stats: {
      lessons: LESSON_COUNT,
      totalFields: fields.length,
      byLesson: byLessonCount,
      bySource,
    },
  };
}

function shapeSignature(value) {
  if (value == null) return "null";
  if (typeof value === "string") return "string";
  if (typeof value === "number" || typeof value === "boolean") return typeof value;
  if (Array.isArray(value)) {
    if (!value.length) return "array:0";
    return `array:${value.length}:${shapeSignature(value[0])}`;
  }
  if (typeof value === "object") {
    const keys = Object.keys(value).sort();
    return `object{${keys.join(",")}}`;
  }
  return typeof value;
}

function compareStructureWithLvMaster() {
  const esWin = loadWindowGlobals(COURSE_LESSONS_FILE);
  const lvWin = loadLvCourseWindow();
  const esData = esWin.COURSE_LESSON_DATA || {};
  const lvData = lvWin.COURSE_LESSON_DATA || {};
  const issues = [];
  let pass = true;

  function addIssue(severity, lessonId, pathLabel, message, esShape, lvShape) {
    pass = false;
    issues.push({ severity, lessonId, path: pathLabel, message, esShape, lvShape });
  }

  for (const lessonKey of LESSON_KEYS) {
    const esLesson = esData[lessonKey];
    const lvLesson = lvData[lessonKey];
    const lessonNum = lessonKey.replace(/^kurssLesson/, "");
    const lessonId = esLesson?.id || `lesson${lessonNum}`;

    if (!esLesson && lvLesson) {
      addIssue("CRITICAL", lessonId, lessonKey, "Missing ES lesson", "missing", "present");
      continue;
    }
    if (esLesson && !lvLesson) {
      addIssue("HIGH", lessonId, lessonKey, "Extra ES lesson not in LV MASTER", "present", "missing");
    }
    if (!esLesson || !lvLesson) continue;

    for (const key of ["title", "subtitle", "intro", "legacyHtml", "sections"]) {
      const esHas = esLesson[key] !== undefined;
      const lvHas = lvLesson[key] !== undefined;
      if (esHas !== lvHas) {
        addIssue(
          "HIGH",
          lessonId,
          `${lessonKey}.${key}`,
          `Field presence mismatch for ${key}`,
          esHas ? "present" : "missing",
          lvHas ? "present" : "missing",
        );
      }
    }

    const esSections = esLesson.sections || [];
    const lvSections = lvLesson.sections || [];
    if (!esLesson.legacyHtml && esSections.length !== lvSections.length) {
      addIssue(
        "CRITICAL",
        lessonId,
        `${lessonKey}.sections`,
        `Section count mismatch (${esSections.length} vs ${lvSections.length})`,
        String(esSections.length),
        String(lvSections.length),
      );
    }

    const maxSec = Math.max(esSections.length, lvSections.length);
    for (let si = 0; si < maxSec; si++) {
      const esSection = esSections[si];
      const lvSection = lvSections[si];
      if (!esSection || !lvSection) continue;
      const secPath = `${lessonKey}.sections[${si}]`;

      for (const key of ["title", "description", "items", "cards", "exerciseType", "type"]) {
        const esHas = esSection[key] !== undefined;
        const lvHas = lvSection[key] !== undefined;
        if (esHas !== lvHas) {
          addIssue(
            "HIGH",
            lessonId,
            `${secPath}.${key}`,
            `Section field presence mismatch for ${key}`,
            esHas ? "present" : "missing",
            lvHas ? "present" : "missing",
          );
        }
      }

      const esCards = esSection.cards || [];
      const lvCards = lvSection.cards || [];
      if (esCards.length !== lvCards.length) {
        addIssue(
          "HIGH",
          lessonId,
          `${secPath}.cards`,
          `Card count mismatch (${esCards.length} vs ${lvCards.length})`,
          String(esCards.length),
          String(lvCards.length),
        );
      }
    }
  }

  return { pass, issueCount: issues.length, issues };
}

function checkLegacyHtmlDrift() {
  const esWin = loadWindowGlobals(COURSE_LESSONS_FILE);
  const esData = esWin.COURSE_LESSON_DATA || {};
  const esHtml = esWin.COURSE_LESSON_HTML || {};
  const issues = [];
  let pass = true;

  for (let n = 1; n <= 7; n++) {
    const lessonKey = `kurssLesson${n}`;
    const lesson = esData[lessonKey];
    if (!lesson?.legacyHtml) continue;
    const inline = String(lesson.legacyHtml);
    const store = String(esHtml[lessonKey] || "");
    if (store && inline !== store) {
      pass = false;
      issues.push({
        severity: "HIGH",
        lessonId: `lesson${n}`,
        path: `COURSE_LESSON_DATA.${lessonKey}.legacyHtml ↔ COURSE_LESSON_HTML.${lessonKey}`,
        message: "Inline legacyHtml differs from COURSE_LESSON_HTML store (runtime uses inline)",
        esShape: `inline:${inline.length}`,
        lvShape: `store:${store.length}`,
      });
    }
  }

  return { pass, issueCount: issues.length, issues };
}

module.exports = {
  LESSON_COUNT,
  LESSON_KEYS,
  PRODUCTION_FILES,
  COURSE_LESSONS_FILE,
  TRAINING_FILE,
  UI_FILE,
  collectAllEsFields,
  compareStructureWithLvMaster,
  checkLegacyHtmlDrift,
};
