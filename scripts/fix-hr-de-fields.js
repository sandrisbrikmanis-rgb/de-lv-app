#!/usr/bin/env node
/**
 * Fix HR data: restore German comparison.word and other DE fields from LV source.
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

function restoreDeFields(lvEntry, hrEntry) {
  hrEntry.de = lvEntry.de;
  if (lvEntry.de_article !== undefined) hrEntry.de_article = lvEntry.de_article;
  if (lvEntry.de_plural !== undefined) hrEntry.de_plural = lvEntry.de_plural;

  if (!lvEntry.study || !hrEntry.study) return;

  if (Array.isArray(lvEntry.study.examples) && Array.isArray(hrEntry.study.examples)) {
    lvEntry.study.examples.forEach((tex, i) => {
      if (hrEntry.study.examples[i]) hrEntry.study.examples[i].de = tex.de;
    });
  }

  if (Array.isArray(lvEntry.study.comparison) && Array.isArray(hrEntry.study.comparison)) {
    lvEntry.study.comparison.forEach((trow, i) => {
      if (hrEntry.study.comparison[i]) {
        hrEntry.study.comparison[i].word = trow.word;
        const tex = trow.example || "";
        const hex = hrEntry.study.comparison[i].example || "";
        if (tex.includes("–") || tex.includes("—") || tex.includes("-")) {
          const sep = tex.match(/\s*[–—-]\s*/);
          if (sep) {
            const dePart = tex.split(sep[0])[0];
            const hrNative = hex.split(/\s*[–—-]\s*/).pop() || hex;
            hrEntry.study.comparison[i].example = `${dePart}${sep[0]}${hrNative.trim()}`;
          }
        }
      }
    });
  }

  if (Array.isArray(lvEntry.study.words) && Array.isArray(hrEntry.study.words)) {
    lvEntry.study.words.forEach((tw, i) => {
      if (hrEntry.study.words[i]) {
        hrEntry.study.words[i].de = tw.de;
      }
    });
  }

  if (Array.isArray(lvEntry.study.comparisonTable) && Array.isArray(hrEntry.study.comparisonTable)) {
    lvEntry.study.comparisonTable.forEach((trow, i) => {
      if (hrEntry.study.comparisonTable[i]) {
        if (trow.de) hrEntry.study.comparisonTable[i].de = trow.de;
      }
    });
  }
}

const LEVELS = ["a1", "a2", "b1", "b2", "c1", "c2"];
const VAR_NAMES = { a1: "A1_WORDS", a2: "A2_WORDS", b1: "B1_WORDS", b2: "B2_WORDS", c1: "C1_WORDS", c2: "C2_WORDS" };

for (const level of LEVELS) {
  const lv = loadArray(`data/${level}.js`);
  const hr = loadArray(`data/hr/${level}.js`);
  for (let i = 0; i < Math.min(lv.length, hr.length); i++) {
    restoreDeFields(lv[i], hr[i]);
  }
  writeArrayFile(path.join(ROOT, "data/hr", `${level}.js`), VAR_NAMES[level], hr);
  console.log(`Fixed ${level}: ${hr.length} entries`);
}

const lvSent = loadArray("data/sentences.js");
const hrSent = loadArray("data/hr/sentences.js");
lvSent.forEach((t, i) => { if (hrSent[i]) hrSent[i].de = t.de; });
writeArrayFile(path.join(ROOT, "data/hr/sentences.js"), "SENTENCE_ENTRIES", hrSent);
console.log(`Fixed sentences: ${hrSent.length}`);

const lvVerbs = loadArray("data/verbs.js");
const hrVerbs = loadArray("data/hr/verbs.js");
lvVerbs.forEach((t, i) => {
  if (!hrVerbs[i]) return;
  for (const form of Object.keys(t)) {
    hrVerbs[i][form].de = t[form].de;
  }
});
writeArrayFile(path.join(ROOT, "data/hr/verbs.js"), "VERB_ENTRIES", hrVerbs);
console.log(`Fixed verbs: ${hrVerbs.length}`);

const lvDlgCode = fs.readFileSync(path.join(ROOT, "data/dialogueIdMap.js"), "utf8");
const lvDlgCtx = { window: {} };
vm.createContext(lvDlgCtx);
vm.runInContext(lvDlgCode, lvDlgCtx);
const lvDlgObj = lvDlgCtx.window.DIALOGUE_ID_MAP;

const hrDlgCode = fs.readFileSync(path.join(ROOT, "data/hr/dialogueIdMap.js"), "utf8");
const hrDlgCtx = { window: {} };
vm.createContext(hrDlgCtx);
vm.runInContext(hrDlgCode, hrDlgCtx);
const hrDlg = hrDlgCtx.window.DIALOGUE_ID_MAP;

for (const [id, entry] of Object.entries(lvDlgObj)) {
  if (hrDlg[id]) hrDlg[id].de = entry.de;
}
fs.writeFileSync(
  path.join(ROOT, "data/hr/dialogueIdMap.js"),
  `const DIALOGUE_ID_MAP = ${JSON.stringify(hrDlg, null, 2)};\n\nwindow.DIALOGUE_ID_MAP = DIALOGUE_ID_MAP;\n`,
  "utf8"
);
console.log("Fixed dialogueIdMap");

console.log("\nDE field restoration complete.");
