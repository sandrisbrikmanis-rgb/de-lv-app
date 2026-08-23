"use strict";

const {
  normalizeOwnerPath,
  parsePathParts,
  getAt,
  setAt,
  fieldLabel,
  uiRelativePath,
  lessonsRelativePath,
  resolveLessonsRoot,
  getLegacyHtml,
  setLegacyHtml,
  legacyHtmlContainsFragment,
  replaceLegacyHtmlFragment,
  normalizeCompare,
} = require("./da-kurss-owner-path");

function classifyTarget(path) {
  const p = String(path || "");
  if (p.startsWith("LANGUAGE_UI_STRINGS.")) return "ui";
  if (/^lesson\d+TrainingCardsEt\[\d+\]\./.test(p) || /^lesson7ExerciseCardsEt\[\d+\]\./.test(p)) {
    return "rootTraining";
  }
  if (p.startsWith("COURSE_LESSON_DATA.") || p.startsWith("COURSE_LESSON_HTML.")) return "lessons";
  return "unknown";
}

function isLegacyHtmlGranularPath(path) {
  return /^COURSE_LESSON_DATA\.kurssLesson\d+\.legacyHtml\./.test(String(path || ""));
}

function legacyHtmlGranularLessonKey(path) {
  const m = String(path || "").match(/^COURSE_LESSON_DATA\.(kurssLesson\d+)\.legacyHtml\./);
  return m ? m[1] : null;
}

function legacyHtmlLessonKey(path) {
  const m = String(path || "").match(/^COURSE_LESSON_DATA\.(\w+)\.legacyHtml$/);
  return m ? m[1] : null;
}

module.exports = {
  normalizeOwnerPath,
  parsePathParts,
  getAt,
  setAt,
  fieldLabel,
  classifyTarget,
  uiRelativePath,
  lessonsRelativePath,
  resolveLessonsRoot,
  getLegacyHtml,
  setLegacyHtml,
  legacyHtmlContainsFragment,
  replaceLegacyHtmlFragment,
  normalizeCompare,
  isLegacyHtmlGranularPath,
  legacyHtmlGranularLessonKey,
  legacyHtmlLessonKey,
};
