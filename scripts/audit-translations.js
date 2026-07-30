#!/usr/bin/env node
/**
 * Checks a native language's translation field (still keyed "lv" for
 * historical reasons across all datasets) against study.translation for
 * semicolon misuse and meaning-list consistency, across all levels
 * (a1-c2). Generalized per LANGUAGE_AUDIT_STANDARD.md §5 §3.1.
 *
 * Run: node scripts/audit-translations.js --lang=lt
 * Defaults to --lang=lv to preserve the original script's behavior.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT, parseLangArg, dataDir, fileExists } = require("./lib/audit-common");

const lang = parseLangArg("lv");
const DIR = dataDir(lang);

function loadWords(file) {
  const code = fs.readFileSync(path.join(ROOT, file), "utf8");
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  vm.runInContext(code, sandbox);
  const key = Object.keys(sandbox.window).find((k) => k.endsWith("_WORDS"));
  return sandbox.window[key] || [];
}

function splitMeanings(s) {
  if (!s) return [];
  return s
    .split(/\s*•\s*|\s*;\s*/)
    .map((x) => x.trim().toLowerCase())
    .filter(Boolean);
}

const issues = [];

for (const level of ["a1", "a2", "b1", "b2", "c1", "c2"]) {
  const file = `${DIR}/${level}.js`;
  if (!fileExists(file)) continue;
  const words = loadWords(file);
  console.log(`${level.toUpperCase()}: ${words.length} words`);

  for (const w of words) {
    const de = w.de;
    const lv = w.lv || "";

    if (lv.includes(";")) {
      issues.push({ type: "semicolon_in_lv", de, lv, file, level: level.toUpperCase() });
    }

    if (!w.study) continue;

    const trans = w.study.translation || "";

    if (trans.includes(";")) {
      issues.push({ type: "semicolon_in_translation", de, lv, translation: trans, file, level: level.toUpperCase() });
    }

    const lvParts = splitMeanings(lv);
    const transParts = splitMeanings(trans);

    if (trans && lvParts.length > 0 && transParts.length > 0) {
      const lvSet = new Set(lvParts);
      const transSet = new Set(transParts);
      const lvOnly = lvParts.filter((x) => !transSet.has(x));
      const transOnly = transParts.filter((x) => !lvSet.has(x));
      if (lvOnly.length || transOnly.length) {
        issues.push({ type: "lv_translation_mismatch", de, lv, translation: trans, lvOnly, transOnly, file, level: level.toUpperCase() });
      }
    } else if (
      trans &&
      lv &&
      !trans.includes("•") &&
      !lv.includes("•") &&
      lv.trim().toLowerCase() !== trans.trim().toLowerCase()
    ) {
      issues.push({ type: "lv_translation_mismatch_simple", de, lv, translation: trans, file, level: level.toUpperCase() });
    }
  }
}

console.log(`\n=== TOTAL ISSUES (lang=${lang}): ${issues.length} ===\n`);
for (const i of issues) {
  console.log(JSON.stringify(i));
}
