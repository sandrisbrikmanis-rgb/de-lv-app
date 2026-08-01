#!/usr/bin/env node
/**
 * Second pass: translate all remaining Turkish/Latvian text in SQ data to Albanian.
 * Preserves all DE fields verbatim.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./lib/audit-common");
const { translateAll, loadCache, cacheKey } = require("./lib/translate-helper");

const CACHE_PATH = path.join(ROOT, "scripts", ".sq-translation-cache.json");
const DE_KEYS = new Set(["de", "de_article", "de_plural", "id", "layout", "level"]);

function isTurkishText(text) {
  return typeof text === "string" && /[çğıöşüÇĞİÖŞÜ]/.test(text);
}

function isLatvianText(text) {
  return typeof text === "string" && /[āčēģīķļņšūžĀČĒĢĪĶĻŅŠŪŽ]/.test(text);
}

function needsTranslation(text) {
  return isTurkishText(text) || isLatvianText(text);
}

function collectAllStrings(value, out, parentKey = "", inSectionAccents = false) {
  if (value === null || value === undefined) return;
  if (typeof value === "string") {
    if (!inSectionAccents && needsTranslation(value) && value.trim()) out.add(value);
    return;
  }
  if (Array.isArray(value)) {
    value.forEach((v) => collectAllStrings(v, out, parentKey, inSectionAccents));
    return;
  }
  if (typeof value === "object") {
    for (const [k, v] of Object.entries(value)) {
      if (DE_KEYS.has(k)) continue;
      const inSA = inSectionAccents || k === "sectionAccents";
      collectAllStrings(v, out, k, inSA);
    }
  }
}

function applyMap(value, map, inSectionAccents = false) {
  if (value === null || value === undefined) return value;
  if (typeof value === "string") {
    if (!inSectionAccents && map[value]) return map[value];
    return value;
  }
  if (Array.isArray(value)) return value.map((v) => applyMap(v, map, inSectionAccents));
  if (typeof value === "object") {
    const out = {};
    for (const [k, v] of Object.entries(value)) {
      if (DE_KEYS.has(k)) { out[k] = v; continue; }
      const inSA = inSectionAccents || k === "sectionAccents";
      out[k] = applyMap(v, map, inSA);
    }
    return out;
  }
  return value;
}

function loadArray(relPath) {
  const code = fs.readFileSync(path.join(ROOT, relPath), "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  const key = Object.keys(ctx.window).find((k) => Array.isArray(ctx.window[k]));
  return { key, data: key ? ctx.window[key] : [] };
}

function writeArrayFile(filePath, varName, data) {
  const json = JSON.stringify(data, null, 2);
  fs.writeFileSync(filePath, `const ${varName} = ${json};\n\nwindow.${varName} = ${varName};\n`, "utf8");
}

async function main() {
  const allStrings = new Set();
  const files = ["a1", "a2", "b1", "b2", "c1", "c2", "sentences", "verbs"];
  const loaded = {};

  for (const f of files) {
    loaded[f] = loadArray(`data/sq/${f}.js`);
    loaded[f].data.forEach((e) => collectAllStrings(e, allStrings));
  }

  const courseCode = fs.readFileSync(path.join(ROOT, "data/sq/courseLessons.js"), "utf8");
  const courseCtx = { window: {} };
  vm.createContext(courseCtx);
  vm.runInContext(courseCode, courseCtx);
  loaded.course = courseCtx.window;
  collectAllStrings(loaded.course.COURSE_LESSON_DATA, allStrings);
  Object.values(loaded.course.COURSE_LESSON_HTML || {}).forEach((html) => {
    [...String(html).matchAll(/>([^<]{3,300})</g)].forEach((m) => {
      const t = m[1].trim();
      if (needsTranslation(t)) allStrings.add(t);
    });
  });

  const dlgCode = fs.readFileSync(path.join(ROOT, "data/sq/dialogueIdMap.js"), "utf8");
  const dlgCtx = { window: {} };
  vm.createContext(dlgCtx);
  vm.runInContext(dlgCode, dlgCtx);
  loaded.dialogue = dlgCtx.window.DIALOGUE_ID_MAP;
  Object.values(loaded.dialogue).forEach((e) => collectAllStrings(e, allStrings));

  const unique = [...allStrings].filter((s) => s && s.trim());
  console.log(`Found ${unique.length} strings needing TR/LV → SQ translation`);

  const map = await translateAll(unique, "tr", "sq", {
    cachePath: CACHE_PATH,
    delayMs: 60,
    concurrency: 20,
    onProgress: (n, remaining) => {
      if (n % 200 === 0) process.stdout.write(`  translated ${n} (~${remaining} remaining)\n`);
    },
  });

  // Also try LV->SQ for any remaining Latvian
  const lvStrings = unique.filter(isLatvianText).filter((s) => !map[s] || map[s] === s);
  if (lvStrings.length) {
    const lvMap = await translateAll(lvStrings, "lv", "sq", {
      cachePath: CACHE_PATH,
      delayMs: 60,
      concurrency: 20,
    });
    Object.assign(map, lvMap);
  }

  const VAR_NAMES = { a1: "A1_WORDS", a2: "A2_WORDS", b1: "B1_WORDS", b2: "B2_WORDS", c1: "C1_WORDS", c2: "C2_WORDS", sentences: "SENTENCE_ENTRIES", verbs: "VERB_ENTRIES" };

  for (const f of files) {
    const fixed = loaded[f].data.map((e) => applyMap(e, map));
    writeArrayFile(path.join(ROOT, "data/sq", `${f}.js`), VAR_NAMES[f], fixed);
    console.log(`Fixed ${f}.js`);
  }

  const fixedDlg = {};
  for (const [id, entry] of Object.entries(loaded.dialogue)) {
    fixedDlg[id] = applyMap(entry, map);
  }
  fs.writeFileSync(
    path.join(ROOT, "data/sq/dialogueIdMap.js"),
    `const DIALOGUE_ID_MAP = ${JSON.stringify(fixedDlg, null, 2)};\n\nwindow.DIALOGUE_ID_MAP = DIALOGUE_ID_MAP;\n`,
    "utf8"
  );

  const fixedCourseData = applyMap(loaded.course.COURSE_LESSON_DATA, map);
  let fixedHtml = loaded.course.COURSE_LESSON_HTML;
  for (const [key, html] of Object.entries(fixedHtml || {})) {
    let result = html;
    for (const [src, dst] of Object.entries(map)) {
      if (result.includes(src)) result = result.split(src).join(dst);
    }
    fixedHtml[key] = result;
  }
  fs.writeFileSync(
    path.join(ROOT, "data/sq/courseLessons.js"),
    `const COURSE_LESSON_HTML = ${JSON.stringify(fixedHtml, null, 2)};\n\nconst COURSE_LESSON_DATA = ${JSON.stringify(fixedCourseData, null, 2)};\n\nwindow.COURSE_LESSON_HTML = COURSE_LESSON_HTML;\nwindow.COURSE_LESSON_DATA = COURSE_LESSON_DATA;\n`,
    "utf8"
  );

  console.log("\nSecond pass complete. Re-run fix-sq-de-fields.js to restore DE fields.");
}

main().catch((err) => { console.error(err); process.exit(1); });
