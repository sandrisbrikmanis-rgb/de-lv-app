#!/usr/bin/env node
"use strict";

const { slugify } = require("./slug");

const READ_ONLY_KEYS = new Set([
  "de",
  "answer",
  "text",
  "prompt",
  "legacyHtml",
  "id",
  "type",
  "exerciseType",
  "exerciseDeckId",
  "word",
]);

const NATIVE_SCALAR_KEYS = new Set([
  "title",
  "subtitle",
  "description",
  "label",
  "task",
  "hint",
  "progressLabel",
]);

function isNonEmptyString(v) {
  return typeof v === "string" && v.trim().length > 0;
}

function shouldExportItemString(value) {
  if (!isNonEmptyString(value)) return false;
  // Vocabulary-style bilingual lines; skip pure DE dialogue lines.
  return value.includes(" — ") || value.includes(" - ");
}

function walkLessonData(value, path, flat) {
  if (value === null || value === undefined) return;

  if (typeof value === "string") {
    if (path.endsWith(".items") || /\.items\[\d+\]$/.test(path)) {
      if (shouldExportItemString(value)) flat[path] = value;
    }
    return;
  }

  if (Array.isArray(value)) {
    value.forEach((item, i) => walkLessonData(item, `${path}[${i}]`, flat));
    return;
  }

  if (typeof value !== "object") return;

  for (const [key, child] of Object.entries(value)) {
    if (READ_ONLY_KEYS.has(key)) continue;

    const childPath = path ? `${path}.${key}` : key;

    if (key === "lv" && isNonEmptyString(child)) {
      flat[`${childPath}.native`] = child;
      continue;
    }

    if (NATIVE_SCALAR_KEYS.has(key) && isNonEmptyString(child)) {
      flat[childPath] = child;
      continue;
    }

    walkLessonData(child, childPath, flat);
  }
}

function flattenG3CourseLessons(courseLessonData) {
  const flat = {};
  if (!courseLessonData || typeof courseLessonData !== "object") return flat;

  for (const [lessonKey, lesson] of Object.entries(courseLessonData)) {
    if (!lesson || typeof lesson !== "object") continue;
    const base = `kurss.${lessonKey}`;

    if (isNonEmptyString(lesson.title)) flat[`${base}.title`] = lesson.title;
    if (isNonEmptyString(lesson.subtitle)) flat[`${base}.subtitle`] = lesson.subtitle;

    if (Array.isArray(lesson.sections)) {
      lesson.sections.forEach((section, si) => {
        const sBase = `${base}.sections[${si}]`;
        if (isNonEmptyString(section.title)) flat[`${sBase}.title`] = section.title;
        if (isNonEmptyString(section.description)) flat[`${sBase}.description`] = section.description;
        walkLessonData(section, sBase, flat);
      });
    }
  }

  return flat;
}

function setByPath(root, dotPath, value) {
  const parts = dotPath.replace(/\[(\d+)\]/g, ".$1").split(".").filter(Boolean);
  let cur = root;
  for (let i = 0; i < parts.length - 1; i++) {
    const p = parts[i];
    const nextIsIndex = /^\d+$/.test(parts[i + 1]);
    if (/^\d+$/.test(p)) {
      const idx = Number(p);
      if (!cur[idx]) cur[idx] = nextIsIndex ? [] : {};
      cur = cur[idx];
    } else {
      if (!(p in cur)) cur[p] = nextIsIndex ? [] : {};
      cur = cur[p];
    }
  }
  const leaf = parts[parts.length - 1];
  if (leaf === "native") {
    const parentPath = parts.slice(0, -1);
    let parent = root;
    for (const p of parentPath) {
      parent = /^\d+$/.test(p) ? parent[Number(p)] : parent[p];
    }
    if (parent && typeof parent === "object") parent.lv = value;
    return;
  }
  if (/^\d+$/.test(leaf)) cur[Number(leaf)] = value;
  else cur[leaf] = value;
}

function applyG3CourseLessonsFlat(courseLessonData, flat) {
  const cloned = JSON.parse(JSON.stringify(courseLessonData || {}));
  for (const [key, value] of Object.entries(flat)) {
    if (!key.startsWith("kurss.")) continue;
    const path = key.slice("kurss.".length);
    setByPath(cloned, path, value);
  }
  return cloned;
}

module.exports = {
  flattenG3CourseLessons,
  applyG3CourseLessonsFlat,
  shouldExportItemString,
};
