#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./audit-common");
const {
  getLegacyHtml,
  setLegacyHtml,
  legacyHtmlContainsFragment,
  replaceLegacyHtmlFragment,
  normalizeCompare,
} = require("./da-kurss-owner-path");

const LESSON_COUNT = 21;
const COURSE_LESSONS_PRIMARY = path.join(ROOT, "data/es/courseLessons.js");
const COURSE_LESSONS_WWW = path.join(ROOT, "www/data/es/courseLessons.js");
const TRAINING_PRIMARY = path.join(ROOT, "data/es/courseTrainingCards.js");
const TRAINING_WWW = path.join(ROOT, "www/data/es/courseTrainingCards.js");
const UI_PRIMARY = path.join(ROOT, "languages/es/ui.js");
const UI_WWW = path.join(ROOT, "www/languages/es/ui.js");
const { decodeHtmlText } = require("./es-kurss-lessons-owner-extract");

function escapeRegExp(s) {
  return String(s).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function loadCourses(filePath) {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return {
    code,
    html: JSON.parse(JSON.stringify(ctx.window.COURSE_LESSON_HTML || {})),
    data: JSON.parse(JSON.stringify(ctx.window.COURSE_LESSON_DATA || {})),
  };
}

function loadUi(filePath) {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return JSON.parse(JSON.stringify(ctx.window.LANGUAGE_UI_STRINGS || {}));
}

function loadTraining(filePath) {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return JSON.parse(JSON.stringify(ctx.window || {}));
}

function writeTraining(filePath, training) {
  const lines = [
    "// Spanish course training cards for ES-DE Kurss lessons 1-7.",
    "",
  ];
  for (let n = 1; n <= 6; n++) {
    const key = `lesson${n}TrainingCardsEs`;
    if (training[key]) {
      lines.push(`window.${key} = ${JSON.stringify(training[key], null, 2)};`, "");
    }
  }
  if (training.lesson7ExerciseCardsEs) {
    lines.push(
      `window.lesson7ExerciseCardsEs = ${JSON.stringify(training.lesson7ExerciseCardsEs, null, 2)};`,
      "",
    );
  }
  fs.writeFileSync(filePath, lines.join("\n"), "utf8");
}

function writeCourseLessons(filePath, html, data) {
  let dataJson = JSON.stringify(data, null, 2);
  for (let i = 1; i <= 21; i++) {
    const key = `kurssLesson${i}`;
    if (!html[key]) continue;
    const htmlEscaped = JSON.stringify(html[key]);
    dataJson = dataJson.replace(
      new RegExp(`("legacyHtml": )${escapeRegExp(htmlEscaped)}`),
      `$1COURSE_LESSON_HTML.${key}`,
    );
  }
  const content = `const COURSE_LESSON_HTML = ${JSON.stringify(html, null, 2)};\n\nconst COURSE_LESSON_DATA = ${dataJson};\n\nwindow.COURSE_LESSON_HTML = COURSE_LESSON_HTML;\nwindow.COURSE_LESSON_DATA = COURSE_LESSON_DATA;\n`;
  fs.writeFileSync(filePath, content, "utf8");
}

function writeUi(filePath, ui) {
  fs.writeFileSync(filePath, `window.LANGUAGE_UI_STRINGS = ${JSON.stringify(ui, null, 2)};\n`, "utf8");
}

function parseFieldParts(field) {
  const parts = [];
  const re = /([^.\[\]]+)|\[(\d+)\]/g;
  let m;
  while ((m = re.exec(field)) !== null) {
    parts.push(m[1] !== undefined ? m[1] : parseInt(m[2], 10));
  }
  return parts;
}

function getAt(root, parts) {
  let cur = root;
  for (const part of parts) {
    if (cur == null) return undefined;
    cur = cur[part];
  }
  return cur;
}

function setAt(root, parts, value) {
  let cur = root;
  for (let i = 0; i < parts.length - 1; i++) {
    cur = cur[parts[i]];
    if (cur == null) return false;
  }
  const last = parts[parts.length - 1];
  cur[last] = value;
  return true;
}

function uiPathFromField(field) {
  return String(field || "").replace(/^LANGUAGE_UI_STRINGS\./, "");
}

function dataPathFromField(field) {
  const m = String(field || "").match(/^COURSE_LESSON_DATA\.(.+)$/);
  return m ? parseFieldParts(m[1]) : null;
}

function legacyLessonKeyFromField(field) {
  const m = String(field || "").match(/^COURSE_LESSON_DATA\.(kurssLesson\d+)\.legacyHtml$/);
  return m ? m[1] : null;
}

function loadAllDecisions(suffix = "") {
  const targets = [];
  for (let n = 1; n <= LESSON_COUNT; n++) {
    const pad = String(n).padStart(2, "0");
    const rel = `reports/es-kurss-lesson-${pad}-owner-decisions${suffix}.json`;
    const filePath = path.join(ROOT, rel);
    const json = JSON.parse(fs.readFileSync(filePath, "utf8"));
    for (const target of json.targets) {
      targets.push({ ...target, sourceFile: rel });
    }
  }
  return targets;
}

function loadAllDecisionsV2MainCurrent() {
  return loadAllDecisions("-v2-main-current");
}

function trainingPathFromField(field) {
  const m = String(field || "").match(/^(lesson\d+TrainingCardsEs)\[(\d+)\]\.(\w+)$/);
  if (m) return { deck: m[1], index: Number(m[2]), key: m[3] };
  const ex = String(field || "").match(/^lesson7ExerciseCardsEs\[(\d+)\]\.(\w+)$/);
  if (ex) return { deck: "lesson7ExerciseCardsEs", index: Number(ex[1]), key: ex[2] };
  return null;
}

function classifyApplyKind(target) {
  if (target.file.includes("ui.js")) return "ui";
  if (target.file.includes("courseTrainingCards.js")) return "training";
  if (legacyLessonKeyFromField(target.field)) return "legacyHtml";
  if (target.field.startsWith("COURSE_LESSON_DATA.")) return "structured";
  return "unknown";
}

function buildFlexibleHtmlPattern(text) {
  const lines = String(text).split("\n");
  const linePatterns = lines.map((line) => {
    return [...line].map((ch) => escapeRegExp(ch)).join("(?:<[^>]+>)*");
  });
  return linePatterns.join("(?:<br\\s*/?>|\\n)(?:<[^>]+>)*");
}

function htmlContainsDisplayText(html, text) {
  if (legacyHtmlContainsFragment(html, text)) return true;
  const decoded = decodeHtmlText(html);
  return normalizeCompare(decoded).includes(normalizeCompare(text));
}

function formatNewForHtmlMatch(matchedHtml, next) {
  const usesBr = /<br\s*\/?>/i.test(matchedHtml);
  if (!usesBr) return next;
  return next.split("\n").join("<br>");
}

function extractLegacyBlock(html, targetPath) {
  const p = String(targetPath || "");
  const ending = p.match(/ending-info\[(\d+)\]/);
  if (ending) {
    const blocks = [...html.matchAll(/<div class="lesson1-ending-info-body">([\s\S]*?)<\/div>/g)];
    const hit = blocks[Number(ending[1])];
    return hit ? { start: hit.index, end: hit.index + hit[0].length, inner: hit[1], wrapper: hit[0] } : null;
  }
  const grammarNote = p.match(/grammar-note\[(\d+)\]/);
  if (grammarNote) {
    const blocks = [...html.matchAll(/<div class="lesson1-grammar-note">([\s\S]*?)<\/div>/g)];
    const hit = blocks[Number(grammarNote[1])];
    return hit ? { start: hit.index, end: hit.index + hit[0].length, inner: hit[1], wrapper: hit[0] } : null;
  }
  return null;
}

function replaceDecodedSubstringInHtml(html, current, next) {
  const normCurrent = normalizeCompare(decodeHtmlText(current));
  for (let start = 0; start < html.length; start++) {
    for (let end = start + 1; end <= html.length; end++) {
      const sub = html.slice(start, end);
      if (normalizeCompare(decodeHtmlText(sub)) !== normCurrent) continue;
      const usesBr = /<br\s*\/?>/i.test(sub) || /<\/p>\s*<p/i.test(sub);
      const insert = usesBr ? next.split("\n").join("<br>") : next.replace(/\n/g, "<br>");
      return html.slice(0, start) + insert + html.slice(end);
    }
  }
  return null;
}

const EXAMPLE_CLASSES = ["kurss-example", "course-example", "curso-example", "curso-ejemplo"];

function parseLegacyTargetPath(pathLabel) {
  const parts = String(pathLabel || "").split(" → ").map((p) => p.trim());
  if (parts.length < 2) return null;
  const acc = parts[1].match(/^accordion\[(\d+)\]:(.+)$/);
  if (!acc) {
    if (/\(summary title\)$/.test(parts[1])) {
      return { kind: "summaryTitle", accordionIndex: null, tail: parts.slice(1) };
    }
    return null;
  }
  const tail = parts.slice(2);
  return { kind: "accordion", accordionIndex: Number(acc[1]), accordionTitle: acc[2], tail };
}

function readFragmentAtLegacyPath(fullHtml, pathLabel) {
  const parsed = parseLegacyTargetPath(pathLabel);
  if (!parsed || typeof fullHtml !== "string") return undefined;

  if (parsed.kind === "summaryTitle") {
    const accordions = [...fullHtml.matchAll(/<details class="lesson1-accordion"[^>]*>[\s\S]*?<summary>[\s\S]*?<span[^>]*>\d+\.<\/span>\s*<span>([^<]*)<\/span>/gi)];
    for (const m of accordions) {
      const title = decodeHtmlText(m[1]);
      if (parsed.tail[0]?.includes(title)) return title;
    }
    return undefined;
  }

  const accordions = [...fullHtml.matchAll(/<details class="lesson1-accordion"[^>]*>([\s\S]*?)<\/details>/gi)];
  const acc = accordions[parsed.accordionIndex];
  if (!acc) return undefined;
  const accHtml = acc[1];
  const tail = parsed.tail[0] || "";

  let m;
  if ((m = tail.match(/^lesson1-info\[(\d+)\]$/))) {
    const blocks = [...accHtml.matchAll(/<div class="lesson1-info[^"]*">([\s\S]*?)<\/div>/gi)];
    return decodeHtmlText(blocks[Number(m[1])]?.[1] || "");
  }
  if ((m = tail.match(/^verbCard\[(\d+)\]\.title$/))) {
    const cards = [...accHtml.matchAll(/<article class="lesson1-verb-card">([\s\S]*?)<\/article>/gi)];
    const h4 = cards[Number(m[1])]?.[1]?.match(/<h4[^>]*>([\s\S]*?)<\/h4>/i);
    return h4 ? decodeHtmlText(h4[1]) : undefined;
  }
  if ((m = tail.match(/^verbCard\[(\d+)\]\.span\[(\d+)\]$/))) {
    const cards = [...accHtml.matchAll(/<article class="lesson1-verb-card">([\s\S]*?)<\/article>/gi)];
    const spans = [...(cards[Number(m[1])]?.[1]?.matchAll(/<span>([^<]*)<\/span>/gi) || [])]
      .map((s) => s[1].trim())
      .filter(Boolean);
    return spans[Number(m[2])];
  }
  for (const cls of EXAMPLE_CLASSES) {
    const ex = tail.match(new RegExp(`^${cls}\\[(\\d+)\\]$`));
    if (!ex) continue;
    const re = new RegExp(`<div class="${cls}"[^>]*>([\\s\\S]*?)<\\/div>`, "gi");
    let hit;
    let ei = 0;
    while ((hit = re.exec(accHtml)) !== null) {
      if (ei === Number(ex[1])) return decodeHtmlText(hit[1]);
      ei++;
    }
    return undefined;
  }
  if ((m = tail.match(/^grammar-note\[(\d+)\]$/))) {
    const blocks = [...accHtml.matchAll(/<div class="lesson1-grammar-note">([\s\S]*?)<\/div>/gi)];
    return decodeHtmlText(blocks[Number(m[1])]?.[1] || "");
  }
  if ((m = tail.match(/^grammar-header\[(\d+)\]$/))) {
    const blocks = [...accHtml.matchAll(/<h[45][^>]*class="lesson1-grammar-header"[^>]*>([\s\S]*?)<\/h[45]>/gi)];
    return decodeHtmlText(blocks[Number(m[1])]?.[1] || "");
  }
  if ((m = tail.match(/^lesson2-subtitle\[(\d+)\]$/))) {
    const blocks = [...accHtml.matchAll(/<h5 class="lesson2-subtitle">([\s\S]*?)<\/h5>/gi)];
    return decodeHtmlText(blocks[Number(m[1])]?.[1] || "");
  }
  if ((m = tail.match(/^subtitle\[(\d+)\]$/))) {
    const blocks = [...accHtml.matchAll(/<h5 class="lesson2-subtitle">([\s\S]*?)<\/h5>/gi)];
    return decodeHtmlText(blocks[Number(m[1])]?.[1] || "");
  }
  if ((m = tail.match(/^ending-info\[(\d+)\]$/))) {
    const blocks = [...accHtml.matchAll(/<div class="lesson1-ending-info-body">([\s\S]*?)<\/div>/gi)];
    return decodeHtmlText(blocks[Number(m[1])]?.[1] || "");
  }
  if ((m = tail.match(/^p\[(\d+)\]$/))) {
    const blocks = [...accHtml.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)];
    return decodeHtmlText(blocks[Number(m[1])]?.[1] || "");
  }
  if ((m = tail.match(/^ending-info\[(\d+)\]$/))) {
    const blocks = [...accHtml.matchAll(/<div class="lesson1-ending-info-body">([\s\S]*?)<\/div>/gi)];
    return decodeHtmlText(blocks[Number(m[1])]?.[1] || "");
  }
  return undefined;
}

function replaceFragmentAtLegacyPath(fullHtml, pathLabel, current, next) {
  const parsed = parseLegacyTargetPath(pathLabel);
  if (!parsed || typeof fullHtml !== "string") return null;

  const accordions = [...fullHtml.matchAll(/<details class="lesson1-accordion"[^>]*>([\s\S]*?)<\/details>/gi)];
  const acc = accordions[parsed.accordionIndex];
  if (!acc) return null;
  const accStart = acc.index;
  const accEnd = accStart + acc[0].length;
  const accHtml = acc[1];
  const tail = parsed.tail[0] || "";

  const accInnerOffset = acc[0].indexOf(accHtml);
  const replaceAtOffset = (hitIndex, hitLength, replacedSlice) => {
    const globalStart = accStart + accInnerOffset + hitIndex;
    const globalEnd = globalStart + hitLength;
    return fullHtml.slice(0, globalStart) + replacedSlice + fullHtml.slice(globalEnd);
  };

  for (const cls of EXAMPLE_CLASSES) {
    const ex = tail.match(new RegExp(`^${cls}\\[(\\d+)\\]$`));
    if (!ex) continue;
    const re = new RegExp(`(<div class="${cls}"[^>]*>)([\\s\\S]*?)(<\\/div>)`, "gi");
    let hit;
    let ei = 0;
    while ((hit = re.exec(accHtml)) !== null) {
      if (ei !== Number(ex[1])) {
        ei++;
        continue;
      }
      const inner = hit[2];
      if (normalizeCompare(decodeHtmlText(inner)) !== normalizeCompare(current)) return null;
      const insert = formatNewForHtmlMatch(inner, next);
      const replaced = hit[1] + insert + hit[3];
      return replaceAtOffset(hit.index, hit[0].length, replaced);
    }
    return null;
  }

  const genericPatterns = [
    { re: /<p[^>]*>([\s\S]*?)<\/p>/gi, tail: /^p\[(\d+)\]$/ },
    { re: /<div class="lesson1-info[^"]*">([\s\S]*?)<\/div>/gi, tail: /^lesson1-info\[(\d+)\]$/ },
    { re: /<div class="lesson1-grammar-note">([\s\S]*?)<\/div>/gi, tail: /^grammar-note\[(\d+)\]$/ },
    { re: /<div class="lesson1-ending-info-body">([\s\S]*?)<\/div>/gi, tail: /^ending-info\[(\d+)\]$/ },
    { re: /<h5 class="lesson2-subtitle">([\s\S]*?)<\/h5>/gi, tail: /^lesson2-subtitle\[(\d+)\]$/ },
    { re: /<h[45][^>]*class="lesson1-grammar-header"[^>]*>([\s\S]*?)<\/h[45]>/gi, tail: /^grammar-header\[(\d+)\]$/ },
  ];
  for (const { re, tail: tailRe } of genericPatterns) {
    const m = tail.match(tailRe);
    if (!m) continue;
    const blocks = [...accHtml.matchAll(re)];
    const block = blocks[Number(m[1])];
    if (!block) return null;
    if (normalizeCompare(decodeHtmlText(block[1])) !== normalizeCompare(current)) return null;
    const insert = formatNewForHtmlMatch(block[1], next);
    const replaced = block[0].replace(block[1], insert);
    return replaceAtOffset(block.index, block[0].length, replaced);
  }

  return replaceDisplayTextInHtml(fullHtml, current, next, pathLabel);
}

function replaceDisplayTextInHtml(html, current, next, targetPath) {
  if (html.includes(current)) {
    return html.replace(current, formatNewForHtmlMatch(current, next));
  }
  const updated = replaceLegacyHtmlFragment(html, current, next);
  if (updated != null) return updated;
  const pattern = buildFlexibleHtmlPattern(current);
  const re = new RegExp(pattern, "ms");
  const match = html.match(re);
  if (match) {
    return html.replace(re, formatNewForHtmlMatch(match[0], next));
  }
  const block = extractLegacyBlock(html, targetPath);
  if (block) {
    const replacedInner = replaceDecodedSubstringInHtml(block.inner, current, next);
    if (replacedInner != null) {
      const replacedBlock = block.wrapper.replace(block.inner, replacedInner);
      return html.slice(0, block.start) + replacedBlock + html.slice(block.end);
    }
  }
  return replaceDecodedSubstringInHtml(html, current, next);
}

function readActual(target, data, html, ui, training) {
  const kind = classifyApplyKind(target);
  if (kind === "ui") return getAt(ui, parseFieldParts(uiPathFromField(target.field)));
  if (kind === "training") {
    const tp = trainingPathFromField(target.field);
    if (!tp) return undefined;
    return training?.[tp.deck]?.[tp.index]?.[tp.key];
  }
  if (kind === "structured") {
    const parts = dataPathFromField(target.field);
    return parts ? getAt(data, parts) : undefined;
  }
  if (kind === "legacyHtml") {
    const lessonKey = legacyLessonKeyFromField(target.field);
    const full = getLegacyHtml(data, html, lessonKey);
    if (typeof full !== "string") return undefined;
    if (target.path) {
      const atPath = readFragmentAtLegacyPath(full, target.path);
      if (atPath != null && atPath !== "") return atPath;
    }
    return htmlContainsDisplayText(full, target.current) ? target.current : undefined;
  }
  return undefined;
}

function applyTarget(target, data, html, ui, training) {
  const kind = classifyApplyKind(target);
  if (kind === "ui") {
    const parts = parseFieldParts(uiPathFromField(target.field));
    return setAt(ui, parts, target.new);
  }
  if (kind === "training") {
    const tp = trainingPathFromField(target.field);
    if (!tp || !training[tp.deck]?.[tp.index]) return false;
    training[tp.deck][tp.index][tp.key] = target.new;
    return true;
  }
  if (kind === "structured") {
    const parts = dataPathFromField(target.field);
    return parts ? setAt(data, parts, target.new) : false;
  }
  if (kind === "legacyHtml") {
    const lessonKey = legacyLessonKeyFromField(target.field);
    const full = getLegacyHtml(data, html, lessonKey);
    if (typeof full !== "string") return false;
    const updated =
      (target.path ? replaceFragmentAtLegacyPath(full, target.path, target.current, target.new) : null) ||
      replaceDisplayTextInHtml(full, target.current, target.new, target.path);
    if (updated == null) return false;
    return setLegacyHtml(data, html, lessonKey, updated);
  }
  return false;
}

function verifyNew(target, data, html, ui, training) {
  const kind = classifyApplyKind(target);
  if (kind === "ui" || kind === "structured" || kind === "training") {
    const actual = readActual({ ...target, current: target.new }, data, html, ui, training);
    if (kind === "training") return normalizeCompare(actual) === normalizeCompare(target.new);
    return normalizeCompare(actual) === normalizeCompare(target.new);
  }
  if (kind === "legacyHtml") {
    const lessonKey = legacyLessonKeyFromField(target.field);
    const full = getLegacyHtml(data, html, lessonKey);
    if (target.path) {
      const atPath = readFragmentAtLegacyPath(full, target.path);
      if (normalizeCompare(atPath) === normalizeCompare(target.new)) return true;
    }
    return htmlContainsDisplayText(full, target.new);
  }
  return false;
}

function dedupeLabotTargets(targets) {
  const seen = new Set();
  const out = [];
  for (const target of targets) {
    const key = `${target.file}|${target.field}|${target.current}|${target.new}`;
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(target);
  }
  return out;
}

function isDeOnlyString(text) {
  const t = String(text || "").trim();
  if (!t || /\s[—–-]\s/.test(t)) return false;
  if (/[āēīūģķļņĀĒĪŪĢĶĻŅ]/.test(t)) return false;
  if (/[áéíóúñüÁÉÍÓÚÑ¿¡]/.test(t)) return false;
  return /^[\s"„"'«»A-Za-zÄÖÜäöüß.,!?;:()0-9]+$/.test(t.replace(/<[^>]+>/g, " "));
}

function extractCanonicalDeSnapshots(data) {
  const fields = [];
  const keys = ["de", "back", "answer", "infinitive"];
  for (const [lessonKey, lesson] of Object.entries(data || {})) {
    if (!lesson?.sections) continue;
    lesson.sections.forEach((section, si) => {
      if (!Array.isArray(section.cards)) return;
      section.cards.forEach((card, ci) => {
        for (const key of keys) {
          if (typeof card[key] === "string" && card[key].trim()) {
            fields.push({ loc: `${lessonKey}.sections[${si}].cards[${ci}].${key}`, value: card[key] });
          }
        }
      });
    });
  }
  return fields;
}

function compareCanonicalDeSnapshots(before, after) {
  const beforeMap = new Map(before.map((e) => [e.loc, e.value]));
  const changes = [];
  for (const [loc, value] of beforeMap) {
    const afterVal = after.find((e) => e.loc === loc)?.value;
    if (afterVal !== value) changes.push({ loc, before: value, after: afterVal });
  }
  return changes;
}

function extractDeSnapshots(data, html) {
  const fields = [];
  const add = (loc, value) => {
    if (typeof value === "string" && value.trim() && isDeOnlyString(value)) {
      fields.push({ loc, value });
    }
  };

  for (const [lessonKey, lesson] of Object.entries(data)) {
    if (!lesson?.sections) continue;
    lesson.sections.forEach((section, si) => {
      if (Array.isArray(section.items)) {
        section.items.forEach((item, ii) => {
          if (typeof item === "string") add(`${lessonKey}.sections[${si}].items[${ii}]`, item);
        });
      }
      if (Array.isArray(section.cards)) {
        section.cards.forEach((card, ci) => {
          for (const key of ["prompt", "answer", "back", "de", "base", "ich", "er", "wir", "du", "ihr", "sie"]) {
            if (card[key] !== undefined) add(`${lessonKey}.sections[${si}].cards[${ci}].${key}`, card[key]);
          }
        });
      }
    });
  }

  for (const [key, htmlStr] of Object.entries(html)) {
    if (typeof htmlStr !== "string") continue;
    [...htmlStr.matchAll(/<div class="kurss-example">([\s\S]*?)<\/div>/g)].forEach((m, i) => {
      const inner = m[1].trim();
      if (isDeOnlyString(inner)) add(`html.${key}.example[${i}]`, inner);
    });
  }
  return fields;
}

function compareDeSnapshots(before, after) {
  const beforeMap = new Map(before.map((e) => [e.loc, e.value]));
  const changes = [];
  for (const [loc, value] of beforeMap) {
    const afterVal = after.find((e) => e.loc === loc)?.value;
    if (afterVal !== value) changes.push({ loc, before: value, after: afterVal });
  }
  return changes;
}

function verifyHtmlStructure(html) {
  const issues = [];
  for (let i = 1; i <= 7; i++) {
    const key = `kurssLesson${i}`;
    const h = html[key];
    if (!h) continue;
    const openDetails = (h.match(/<details\b/gi) || []).length;
    const closeDetails = (h.match(/<\/details>/gi) || []).length;
    if (openDetails !== closeDetails) {
      issues.push(`${key}: details mismatch ${openDetails}/${closeDetails}`);
    }
    if (/<div class="kurss-example"><div class="kurss-example">/.test(h)) {
      issues.push(`${key}: nested kurss-example`);
    }
    if (h.includes("</sección>") || h.includes("</seccion>")) {
      issues.push(`${key}: broken closing tag`);
    }
  }
  return { pass: issues.length === 0, issues };
}

function sortLabotTargets(targets) {
  return [...targets].sort((a, b) => {
    const aLegacy = classifyApplyKind(a) === "legacyHtml" ? 1 : 0;
    const bLegacy = classifyApplyKind(b) === "legacyHtml" ? 1 : 0;
    if (aLegacy !== bLegacy) return bLegacy - aLegacy;
    const len = (b.current || "").length - (a.current || "").length;
    if (len !== 0) return len;
    return String(a.id).localeCompare(String(b.id));
  });
}

module.exports = {
  ROOT,
  LESSON_COUNT,
  COURSE_LESSONS_PRIMARY,
  COURSE_LESSONS_WWW,
  TRAINING_PRIMARY,
  TRAINING_WWW,
  UI_PRIMARY,
  UI_WWW,
  loadCourses,
  loadUi,
  loadTraining,
  writeCourseLessons,
  writeUi,
  writeTraining,
  loadAllDecisions,
  loadAllDecisionsV2MainCurrent,
  classifyApplyKind,
  readActual,
  applyTarget,
  verifyNew,
  extractDeSnapshots,
  extractCanonicalDeSnapshots,
  compareDeSnapshots,
  compareCanonicalDeSnapshots,
  verifyHtmlStructure,
  sortLabotTargets,
  dedupeLabotTargets,
  htmlContainsDisplayText,
  readFragmentAtLegacyPath,
  replaceFragmentAtLegacyPath,
  normalizeCompare,
};
