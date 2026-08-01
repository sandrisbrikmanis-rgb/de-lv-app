#!/usr/bin/env node
/**
 * Verify BS-DE creation compliance:
 * 1. German (de) fields in BS data match LV source exactly (READ-ONLY)
 * 2. No modifications to other language files
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");

function loadArray(relPath) {
  const code = fs.readFileSync(path.join(ROOT, relPath), "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  const key = Object.keys(ctx.window).find((k) => Array.isArray(ctx.window[k]));
  return key ? ctx.window[key] : [];
}

function collectDeFields(entry, prefix = "") {
  const fields = [];
  if (entry.de !== undefined) fields.push({ path: `${prefix}de`, value: entry.de });
  if (entry.de_article !== undefined) fields.push({ path: `${prefix}de_article`, value: entry.de_article });
  if (entry.de_plural !== undefined) fields.push({ path: `${prefix}de_plural`, value: entry.de_plural });
  if (entry.study) {
    if (Array.isArray(entry.study.examples)) {
      entry.study.examples.forEach((ex, i) => {
        if (ex.de) fields.push({ path: `${prefix}study.examples[${i}].de`, value: ex.de });
      });
    }
    if (Array.isArray(entry.study.comparison)) {
      entry.study.comparison.forEach((row, i) => {
        if (row.word) fields.push({ path: `${prefix}study.comparison[${i}].word`, value: row.word });
      });
    }
    if (Array.isArray(entry.study.words)) {
      entry.study.words.forEach((w, i) => {
        if (w.de) fields.push({ path: `${prefix}study.words[${i}].de`, value: w.de });
      });
    }
    if (Array.isArray(entry.study.comparisonTable)) {
      entry.study.comparisonTable.forEach((row, i) => {
        if (row.de) fields.push({ path: `${prefix}study.comparisonTable[${i}].de`, value: row.de });
      });
    }
  }
  return fields;
}

const LEVELS = ["a1", "a2", "b1", "b2", "c1", "c2"];
const deMismatches = [];

for (const level of LEVELS) {
  const lv = loadArray(`data/${level}.js`);
  const bs = loadArray(`data/bs/${level}.js`);
  const n = Math.min(lv.length, bs.length);
  for (let i = 0; i < n; i++) {
    const lvFields = collectDeFields(lv[i]);
    const bsFields = collectDeFields(bs[i]);
    for (const lf of lvFields) {
      const tf = bsFields.find((f) => f.path === lf.path);
      if (!tf || tf.value !== lf.value) {
        deMismatches.push({ level, de: lv[i].de, path: lf.path, lv: lf.value, bs: tf?.value });
      }
    }
  }
}

const lvSent = loadArray("data/sentences.js");
const bsSent = loadArray("data/bs/sentences.js");
lvSent.forEach((lv, i) => {
  if (bsSent[i] && lv.de !== bsSent[i].de) {
    deMismatches.push({ level: "sentences", index: i, lv: lv.de, bs: bsSent[i].de });
  }
});

const lvVerbs = loadArray("data/verbs.js");
const bsVerbs = loadArray("data/bs/verbs.js");
lvVerbs.forEach((lvEntry, i) => {
  const bsEntry = bsVerbs[i];
  if (!bsEntry) return;
  for (const form of Object.keys(lvEntry)) {
    if (lvEntry[form].de !== bsEntry[form]?.de) {
      deMismatches.push({ level: "verbs", form, lv: lvEntry[form].de, bs: bsEntry[form]?.de });
    }
  }
});

let otherLangChanges = [];
try {
  const diff = execSync(
    "git diff --name-only HEAD -- languages/lv languages/lt languages/ru languages/pl languages/uk languages/et languages/ro languages/bg languages/gr languages/tr languages/sq languages/mk languages/sl data/lv data/lt data/ru data/pl data/uk data/et data/ro data/bg data/gr data/tr data/sq data/mk data/sl data/a1.js data/a2.js data/b1.js data/b2.js data/c1.js data/c2.js data/sentences.js data/verbs.js data/courseLessons.js",
    { cwd: ROOT, encoding: "utf8" }
  ).trim();
  if (diff) otherLangChanges = diff.split("\n").filter(Boolean);
} catch (e) {
  otherLangChanges = ["git diff failed: " + e.message];
}

const report = {
  deReadOnly: {
    pass: deMismatches.length === 0,
    mismatches: deMismatches.slice(0, 20),
    totalMismatches: deMismatches.length,
    checkedLevels: LEVELS.concat(["sentences", "verbs"]),
  },
  otherLanguagesReadOnly: {
    pass: otherLangChanges.length === 0,
    modifiedFiles: otherLangChanges,
  },
};

console.log(JSON.stringify(report, null, 2));
process.exit(report.deReadOnly.pass && report.otherLanguagesReadOnly.pass ? 0 : 1);
