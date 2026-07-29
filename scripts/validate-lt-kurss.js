#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.resolve(__dirname, "..");
const failures = [];

function loadCourseLessons(filePath) {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.COURSE_LESSON_DATA || {};
}

function loadTrainingCards(filePath) {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window;
}

const data = loadCourseLessons(path.join(root, "data/lt/courseLessons.js"));
const cards = loadTrainingCards(path.join(root, "data/lt/courseTrainingCards.js"));

for (let i = 1; i <= 6; i++) {
  const deck = cards[`lesson${i}TrainingCardsLt`];
  if (!Array.isArray(deck) || !deck.length) {
    failures.push(`lesson${i}TrainingCardsLt missing or empty`);
  }
}

if (!Array.isArray(cards.lesson7ExerciseCardsLt) || cards.lesson7ExerciseCardsLt.length !== 16) {
  failures.push("lesson7ExerciseCardsLt must have 16 cards");
}

let translateTotal = 0;
let exerciseTotal = 0;
for (let i = 8; i <= 21; i++) {
  const lesson = data[`kurssLesson${i}`];
  if (!lesson?.sections?.length) {
    failures.push(`kurssLesson${i} has no sections`);
    continue;
  }
  const translate = lesson.sections.find((s) => s.title === "Išversk" && Array.isArray(s.cards));
  if (!translate?.cards?.length) {
    failures.push(`kurssLesson${i} missing Išversk cards`);
  } else {
    translateTotal += translate.cards.length;
  }
  const exercise = lesson.sections.find((s) => (s.title === "Pratimas" || s.title === "Übung / Pratimas") && Array.isArray(s.cards));
  if (exercise?.cards?.length) exerciseTotal += exercise.cards.length;
}

const latvianNamePattern = /Pēteris|Jānis|Rūdolfs|Jāni\b|Roberts\b/;
const courseText = fs.readFileSync(path.join(root, "data/lt/courseLessons.js"), "utf8");
if (latvianNamePattern.test(courseText)) {
  failures.push("Latvian personal names still present in data/lt/courseLessons.js");
}

const css = fs.readFileSync(path.join(root, "style.css"), "utf8");
if (/Ôîä|Ôîâ/.test(css)) {
  failures.push("Chevron mojibake still present in style.css");
}

if (failures.length) {
  console.error("LT Kurss validation failed:\n- " + failures.join("\n- "));
  process.exit(1);
}

console.log(`LT Kurss validation passed (${translateTotal} Išversk cards, ${exerciseTotal} Pratimas cards in lessons 8-21).`);
