#!/usr/bin/env node
/**
 * Validates the Kurss (course lessons) section for a given native
 * language: lesson structure, translate/exercise card counts, and
 * leftover-source-language text leaks. Generalized from the
 * LT-specific validate-lt-kurss.js per PROJECT_LANGUAGE_MASTER_STANDARD.md §7.7.
 *
 * Some checks are inherently language-specific (e.g. the exact section
 * title strings used for "translate"/"exercise" sections, or the
 * lessons 1-6 courseTrainingCards.js side-file that currently only LT
 * has). Where a language doesn't have the relevant file/section, the
 * check is skipped with a note rather than failing.
 *
 * Run: node scripts/validate-kurss.js --lang=lt
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT, parseLangArg, dataDir, fileExists, readFile, langSuffix } = require("./lib/audit-common");

const lang = parseLangArg("lt");
const DIR = dataDir(lang);
const suffix = langSuffix(lang);
const failures = [];
const notes = [];

const courseLessonsPath = `${DIR}/courseLessons.js`;
if (!fileExists(courseLessonsPath)) {
  console.log(`No Kurss data for lang="${lang}" (${courseLessonsPath} does not exist) — nothing to validate; this language still relies fully on the LV fallback for Kurss.`);
  process.exit(0);
}

function loadCourseLessons(filePath) {
  const code = readFile(filePath);
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.COURSE_LESSON_DATA || {};
}

function loadWindowGlobals(filePath) {
  const code = readFile(filePath);
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window;
}

const data = loadCourseLessons(courseLessonsPath);

// Lessons 1-6 + lesson 7 exercise side-file (only exists for languages that
// needed to override the LV-hardcoded lessonNTrainingCards in ui.js — see
// data/lt/courseTrainingCards.js for the LT precedent).
const trainingCardsPath = `${DIR}/courseTrainingCards.js`;
if (fileExists(trainingCardsPath)) {
  const cards = loadWindowGlobals(trainingCardsPath);
  for (let i = 1; i <= 6; i++) {
    const key = `lesson${i}TrainingCards${suffix}`;
    const deck = cards[key];
    if (!Array.isArray(deck) || !deck.length) {
      failures.push(`${key} missing or empty in ${trainingCardsPath}`);
    }
  }
  const exerciseKey = `lesson7ExerciseCards${suffix}`;
  if (!Array.isArray(cards[exerciseKey]) || !cards[exerciseKey].length) {
    failures.push(`${exerciseKey} missing or empty in ${trainingCardsPath}`);
  }
} else {
  notes.push(`${trainingCardsPath} does not exist — lessons 1-6 fall back to the LV-hardcoded lessonNTrainingCards in ui.js for this language (only correct if ui.js explicitly branches on lang="${lang}" the way it does for "lt").`);
}

// Lessons 8-21: at least one "translate" and ideally one "exercise" card
// deck per lesson, matching *any* section that carries a non-empty
// `cards` array (title strings are language-specific, so we don't hardcode
// "Išversk"/"Pratimas" here).
let translateTotal = 0;
let exerciseTotal = 0;
let lessonsWithNoCardsSection = 0;
for (let i = 8; i <= 21; i++) {
  const lesson = data[`kurssLesson${i}`];
  if (!lesson?.sections?.length) {
    failures.push(`kurssLesson${i} has no sections`);
    continue;
  }
  const cardSections = lesson.sections.filter((s) => Array.isArray(s.cards) && s.cards.length);
  if (!cardSections.length) {
    lessonsWithNoCardsSection++;
    failures.push(`kurssLesson${i} has no section with non-empty cards (translate/exercise flashcards would render empty)`);
    continue;
  }
  // Heuristic: the largest cards[] section is usually "translate"; any
  // additional smaller one is usually "exercise". This avoids hardcoding
  // language-specific section title strings.
  const sorted = [...cardSections].sort((a, b) => b.cards.length - a.cards.length);
  translateTotal += sorted[0].cards.length;
  if (sorted[1]) exerciseTotal += sorted[1].cards.length;
}

// Leftover-source-language leak check: for any non-LV language, LV
// personal names should not appear verbatim in ported Kurss dialogue text.
const LV_PERSONAL_NAMES = ["Pēteris", "Jānis", "Rūdolfs", "Roberts"];
if (lang !== "lv") {
  const courseText = readFile(courseLessonsPath);
  const leaked = LV_PERSONAL_NAMES.filter((name) => courseText.includes(name));
  if (leaked.length) {
    failures.push(`Latvian personal name(s) still present in ${courseLessonsPath}: ${leaked.join(", ")}`);
  }
}

if (failures.length) {
  console.error(`Kurss validation FAILED for lang="${lang}":\n- ` + failures.join("\n- "));
  if (notes.length) console.error("\nNotes:\n- " + notes.join("\n- "));
  process.exit(1);
}

console.log(`Kurss validation passed for lang="${lang}" (${translateTotal} translate cards, ${exerciseTotal} exercise cards in lessons 8-21).`);
if (notes.length) console.log("Notes:\n- " + notes.join("\n- "));
