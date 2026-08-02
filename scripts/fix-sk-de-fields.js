#!/usr/bin/env node
/**
 * Fix SK data: restore German comparison.word and other DE fields from LV source.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./lib/audit-common");

function loadArray(relPath) {
  const code = fs.readFileSync(path.join(ROOT, relPath), "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  const key = Object.keys(ctx.window).find((k) => Array.isArray(ctx.window[k]));
  return key ? ctx.window[key] : [];
}

function writeArrayFile(filePath, varName, data) {
  const json = JSON.stringify(data, null, 2);
  fs.writeFileSync(filePath, `const ${varName} = ${json};\n\nwindow.${varName} = ${varName};\n`, "utf8");
}

function restoreDeFields(lvEntry, skEntry) {
  skEntry.de = lvEntry.de;
  if (lvEntry.de_article !== undefined) skEntry.de_article = lvEntry.de_article;
  if (lvEntry.de_plural !== undefined) skEntry.de_plural = lvEntry.de_plural;

  if (!lvEntry.study || !skEntry.study) return;

  if (Array.isArray(lvEntry.study.examples) && Array.isArray(skEntry.study.examples)) {
    lvEntry.study.examples.forEach((tex, i) => {
      if (skEntry.study.examples[i]) skEntry.study.examples[i].de = tex.de;
    });
  }

  if (Array.isArray(lvEntry.study.comparison) && Array.isArray(skEntry.study.comparison)) {
    lvEntry.study.comparison.forEach((trow, i) => {
      if (skEntry.study.comparison[i]) {
        skEntry.study.comparison[i].word = trow.word;
        const tex = trow.example || "";
        const hex = skEntry.study.comparison[i].example || "";
        if (tex.includes("–") || tex.includes("—") || tex.includes("-")) {
          const sep = tex.match(/\s*[–—-]\s*/);
          if (sep) {
            const dePart = tex.split(sep[0])[0];
            const skNative = hex.split(/\s*[–—-]\s*/).pop() || hex;
            skEntry.study.comparison[i].example = `${dePart}${sep[0]}${skNative.trim()}`;
          }
        }
      }
    });
  }

  if (Array.isArray(lvEntry.study.words) && Array.isArray(skEntry.study.words)) {
    lvEntry.study.words.forEach((tw, i) => {
      if (skEntry.study.words[i]) {
        skEntry.study.words[i].de = tw.de;
      }
    });
  }

  if (Array.isArray(lvEntry.study.comparisonTable) && Array.isArray(skEntry.study.comparisonTable)) {
    lvEntry.study.comparisonTable.forEach((trow, i) => {
      if (skEntry.study.comparisonTable[i]) {
        if (trow.de) skEntry.study.comparisonTable[i].de = trow.de;
      }
    });
  }
}

const LEVELS = ["a1", "a2", "b1", "b2", "c1", "c2"];
const VAR_NAMES = { a1: "A1_WORDS", a2: "A2_WORDS", b1: "B1_WORDS", b2: "B2_WORDS", c1: "C1_WORDS", c2: "C2_WORDS" };

for (const level of LEVELS) {
  const lv = loadArray(`data/${level}.js`);
  const sk = loadArray(`data/sk/${level}.js`);
  for (let i = 0; i < Math.min(lv.length, sk.length); i++) {
    restoreDeFields(lv[i], sk[i]);
  }
  writeArrayFile(path.join(ROOT, "data/sk", `${level}.js`), VAR_NAMES[level], sk);
  console.log(`Fixed ${level}: ${sk.length} entries`);
}

const lvSent = loadArray("data/sentences.js");
const skSent = loadArray("data/sk/sentences.js");
lvSent.forEach((t, i) => { if (skSent[i]) skSent[i].de = t.de; });
writeArrayFile(path.join(ROOT, "data/sk/sentences.js"), "SENTENCE_ENTRIES", skSent);
console.log(`Fixed sentences: ${skSent.length}`);

const lvVerbs = loadArray("data/verbs.js");
const skVerbs = loadArray("data/sk/verbs.js");
lvVerbs.forEach((t, i) => {
  if (!skVerbs[i]) return;
  for (const form of Object.keys(t)) {
    skVerbs[i][form].de = t[form].de;
  }
});
writeArrayFile(path.join(ROOT, "data/sk/verbs.js"), "VERB_ENTRIES", skVerbs);
console.log(`Fixed verbs: ${skVerbs.length}`);

const lvDlgCode = fs.readFileSync(path.join(ROOT, "data/dialogueIdMap.js"), "utf8");
const lvDlgCtx = { window: {} };
vm.createContext(lvDlgCtx);
vm.runInContext(lvDlgCode, lvDlgCtx);
const lvDlgObj = lvDlgCtx.window.DIALOGUE_ID_MAP;

const skDlgCode = fs.readFileSync(path.join(ROOT, "data/sk/dialogueIdMap.js"), "utf8");
const skDlgCtx = { window: {} };
vm.createContext(skDlgCtx);
vm.runInContext(skDlgCode, skDlgCtx);
const skDlg = skDlgCtx.window.DIALOGUE_ID_MAP;

for (const [id, entry] of Object.entries(lvDlgObj)) {
  if (skDlg[id]) skDlg[id].de = entry.de;
}
fs.writeFileSync(
  path.join(ROOT, "data/sk/dialogueIdMap.js"),
  `const DIALOGUE_ID_MAP = ${JSON.stringify(skDlg, null, 2)};\n\nwindow.DIALOGUE_ID_MAP = DIALOGUE_ID_MAP;\n`,
  "utf8"
);
console.log("Fixed dialogueIdMap");

console.log("\nDE field restoration complete.");
