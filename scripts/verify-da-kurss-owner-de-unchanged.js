#!/usr/bin/env node
"use strict";
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");

function repairDaCourseLessonsSource(code) {
  return code.replace(
    /(<\/section>)"kurss-lesson-intro\\">[\s\S]*?<\/section>",(\s*"kurssSentenceStructureLesson")/,
    '$1",$2',
  );
}

const TRAINING_DECK_KEYS = [
  ...Array.from({ length: 6 }, (_, i) => `lesson${i + 1}TrainingCardsDa`),
  "lesson7ExerciseCardsDa",
];

function loadLessonsFromSource(code) {
  code = repairDaCourseLessonsSource(code);
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return { data: ctx.window.COURSE_LESSON_DATA || {}, html: ctx.window.COURSE_LESSON_HTML || {} };
}

function loadTrainingFromSource(code) {
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  const decks = {};
  for (const key of TRAINING_DECK_KEYS) decks[key] = ctx.window[key] || [];
  return decks;
}

function isDeField(key, value) {
  if (typeof value !== "string" || !value.trim()) return false;
  if (key === "front" || key === "lv" || key === "title" || key === "subtitle" || key === "intro") return false;
  if (key === "back" || key === "de" || key === "infinitive" || key === "du" || key === "ihr" || key === "sie") return true;
  if (key === "prompt" || key === "answer" || key === "base") return true;
  return false;
}

function collectDeFields(data, training) {
  const out = [];
  for (const [lessonKey, lesson] of Object.entries(data)) {
    if (!lesson?.sections) continue;
    lesson.sections.forEach((section, si) => {
      section.cards?.forEach((card, ci) => {
        for (const [k, v] of Object.entries(card || {})) {
          if (isDeField(k, v)) out.push({ loc: `${lessonKey}.sections[${si}].cards[${ci}].${k}`, value: v });
        }
        card.forms?.forEach((form, fi) => {
          if (form.text) out.push({ loc: `${lessonKey}.sections[${si}].cards[${ci}].forms[${fi}].text`, value: form.text });
        });
      });
    });
  }
  for (const deckKey of TRAINING_DECK_KEYS) {
    (training[deckKey] || []).forEach((card, i) => {
      for (const k of ["back", "infinitive", "du", "ihr", "sie"]) {
        if (card?.[k]) out.push({ loc: `${deckKey}[${i}].${k}`, value: card[k] });
      }
    });
  }
  return out;
}

function readGit(relPath) {
  return execSync(`git show HEAD:${relPath}`, { cwd: ROOT, encoding: "utf8" });
}

function main() {
  const beforeLessons = loadLessonsFromSource(readGit("data/da/courseLessons.js"));
  const afterLessons = loadLessonsFromSource(fs.readFileSync(path.join(ROOT, "data/da/courseLessons.js"), "utf8"));
  const beforeTraining = loadTrainingFromSource(readGit("data/da/courseTrainingCards.js"));
  const afterTraining = loadTrainingFromSource(fs.readFileSync(path.join(ROOT, "data/da/courseTrainingCards.js"), "utf8"));

  const before = collectDeFields(beforeLessons.data, beforeTraining);
  const after = collectDeFields(afterLessons.data, afterTraining);
  const beforeMap = new Map(before.map((e) => [e.loc, e.value]));
  const changes = [];
  for (const [loc, value] of beforeMap) {
    const afterVal = after.find((e) => e.loc === loc)?.value;
    if (afterVal !== value) changes.push({ loc, before: value, after: afterVal });
  }
  console.log(JSON.stringify({ deFieldsChecked: before.length, deChanges: changes.length, sample: changes.slice(0, 10) }, null, 2));
  if (changes.length) process.exit(1);
}

try {
  main();
} catch (err) {
  console.error(err.message);
  process.exit(1);
}
