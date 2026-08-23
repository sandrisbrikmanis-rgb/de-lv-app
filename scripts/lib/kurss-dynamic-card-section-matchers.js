"use strict";
/**
 * Shared Kurss L8–L21 dynamic card section matchers.
 * Keep in sync with ui.js (browser bundle cannot import this module directly).
 */
const COURSE_TRANSLATE_SECTION_TITLES = new Set([
  "Pārtulko",
  "Išversk",
  "Prevedi",
  "Translate",
  "Přeložit",
  "Přelož",
  "Oversætte",
  "Oversæt",
]);
const COURSE_EXERCISE_SECTION_TITLES = new Set([
  "Vingrinājums",
  "Pratimas",
  "Übung / Vingrinājums",
  "Übung / Pratimas",
  "Vježbajte",
  "Übung / Vježba",
  "Exercise",
  "Übung / Exercise",
  "Cvičení",
  "Übung / Cvičení",
  "Øvelse",
  "Übung / Øvelse",
]);

function isCourseTranslateSection(title) {
  return COURSE_TRANSLATE_SECTION_TITLES.has(String(title || "").trim());
}

function isCourseExerciseSection(title) {
  return COURSE_EXERCISE_SECTION_TITLES.has(String(title || "").trim());
}

function isCourseTranslateCardShape(card) {
  if (!card || typeof card !== "object") return false;
  const hasLvDe = Boolean(card.lv) && Boolean(card.de);
  const hasExerciseFields = Boolean(
    card.prompt ||
      card.task ||
      card.answer ||
      card.ich ||
      card.er ||
      card.wir ||
      card.infinitive ||
      card.du ||
      card.ihr ||
      card.sie ||
      card.type === "fill",
  );
  return hasLvDe && !hasExerciseFields;
}

function isCourseExerciseCardShape(card) {
  if (!card || typeof card !== "object") return false;
  return Boolean(
    card.prompt ||
      card.task ||
      card.answer ||
      card.ich ||
      card.er ||
      card.wir ||
      card.infinitive ||
      card.du ||
      card.ihr ||
      card.sie ||
      card.type === "fill",
  );
}

function isCourseTranslateSectionData(section) {
  if (!Array.isArray(section?.cards) || section.cards.length === 0) return false;
  if (section.type === "translationCards") return true;
  return section.cards.every(isCourseTranslateCardShape);
}

function isCourseExerciseSectionData(section) {
  if (!Array.isArray(section?.cards) || section.cards.length === 0) return false;
  if (isCourseTranslateSectionData(section)) return false;
  return section.cards.some(isCourseExerciseCardShape);
}

function matchesCourseTranslateSection(section) {
  return isCourseTranslateSection(section?.title) || isCourseTranslateSectionData(section);
}

function matchesCourseExerciseSection(section) {
  return isCourseExerciseSection(section?.title) || isCourseExerciseSectionData(section);
}

function findCourseLessonCardSection(lesson, matcher) {
  return (
    lesson?.sections?.find((section) => {
      if (!Array.isArray(section.cards)) return false;
      return matcher(section);
    }) || null
  );
}

function getExerciseCardsForLesson(lesson) {
  return findCourseLessonCardSection(lesson, matchesCourseExerciseSection)?.cards || [];
}

function getTranslateCardsForLesson(lesson) {
  return findCourseLessonCardSection(lesson, matchesCourseTranslateSection)?.cards || [];
}

module.exports = {
  COURSE_TRANSLATE_SECTION_TITLES,
  COURSE_EXERCISE_SECTION_TITLES,
  isCourseTranslateSection,
  isCourseExerciseSection,
  isCourseTranslateCardShape,
  isCourseExerciseCardShape,
  isCourseTranslateSectionData,
  isCourseExerciseSectionData,
  matchesCourseTranslateSection,
  matchesCourseExerciseSection,
  findCourseLessonCardSection,
  getExerciseCardsForLesson,
  getTranslateCardsForLesson,
};
