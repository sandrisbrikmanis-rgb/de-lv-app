#!/usr/bin/env node
/**
 * Replace Latvian personal names in NL data with international forms.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./lib/audit-common");

const NAME_REPLACEMENTS = [
  [/\bPēteris\b/g, "Peter"], [/\bPētera\b/g, "Peter"],
  [/\bJānis\b/g, "Jan"], [/\bJāņa\b/g, "Jan"],
  [/\bRūdolfs\b/g, "Rudolf"], [/\bRoberts\b/g, "Robert"],
  [/\bMarija\b/g, "Maria"], [/\bMarie\b/g, "Maria"],
  [/\bAlbert\b/g, "Albert"], [/\bAlberta\b/g, "Alberta"],
  [/\bMarta\b/g, "Marta"], [/\bPauls\b/g, "Paul"], [/\bPaul\b/g, "Paul"],
  [/\bHanna\b/g, "Hanna"], [/\bGertrud\b/g, "Gertrud"], [/\bAnna\b/g, "Anna"],
  [/\bEdgar\b/g, "Edgar"], [/\bBen\b/g, "Ben"], [/\bEmma\b/g, "Emma"],
  [/\bJonas\b/g, "Jonas"], [/\bFinn\b/g, "Finn"], [/\bMaksis\b/g, "Max"],
];

function replaceNames(text) {
  if (!text || typeof text !== "string") return text;
  let out = text;
  for (const [from, to] of NAME_REPLACEMENTS) out = out.replace(from, to);
  return out;
}

function walk(value) {
  if (value === null || value === undefined) return value;
  if (typeof value === "string") return replaceNames(value);
  if (Array.isArray(value)) return value.map(walk);
  if (typeof value === "object") {
    const out = {};
    for (const [k, v] of Object.entries(value)) out[k] = walk(v);
    return out;
  }
  return value;
}

function processJsFile(relPath, globalKey) {
  const full = path.join(ROOT, relPath);
  if (!fs.existsSync(full)) return;
  const code = fs.readFileSync(full, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  const key = globalKey || Object.keys(ctx.window).find((k) => k !== "COURSE_LESSON_HTML" && k !== "COURSE_LESSON_DATA") || Object.keys(ctx.window)[0];
  if (ctx.window.COURSE_LESSON_HTML || ctx.window.COURSE_LESSON_DATA) {
    const html = walk(ctx.window.COURSE_LESSON_HTML || {});
    const data = walk(ctx.window.COURSE_LESSON_DATA || {});
    fs.writeFileSync(
      full,
      `const COURSE_LESSON_HTML = ${JSON.stringify(html, null, 2)};\n\nconst COURSE_LESSON_DATA = ${JSON.stringify(data, null, 2)};\n\nwindow.COURSE_LESSON_HTML = COURSE_LESSON_HTML;\nwindow.COURSE_LESSON_DATA = COURSE_LESSON_DATA;\n`,
      "utf8"
    );
    console.log(`Fixed names in ${relPath}`);
    return;
  }
  const arr = ctx.window[key];
  if (!Array.isArray(arr)) return;
  const fixed = walk(arr);
  fs.writeFileSync(full, `const ${key} = ${JSON.stringify(fixed, null, 2)};\n\nwindow.${key} = ${key};\n`, "utf8");
  console.log(`Fixed names in ${relPath}`);
}

["a1", "a2", "b1", "b2", "c1", "c2"].forEach((level) => {
  processJsFile(`data/es/${level}.js`);
});
processJsFile("data/es/sentences.js", "SENTENCE_ENTRIES");
processJsFile("data/es/verbs.js", "VERB_ENTRIES");
processJsFile("data/es/dialogueIdMap.js", "DIALOGUE_ID_MAP");
processJsFile("data/es/courseLessons.js");
// courseTrainingCards.js uses multiple window.* assignments — regenerate separately

console.log("LB name replacement complete.");
