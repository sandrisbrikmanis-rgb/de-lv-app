#!/usr/bin/env node
/**
 * Fix SL data: restore German comparison.word and other DE fields from LV source.
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

function restoreDeFields(lvEntry, bsEntry) {
  bsEntry.de = lvEntry.de;
  if (lvEntry.de_article !== undefined) bsEntry.de_article = lvEntry.de_article;
  if (lvEntry.de_plural !== undefined) bsEntry.de_plural = lvEntry.de_plural;

  if (!lvEntry.study || !bsEntry.study) return;

  if (Array.isArray(lvEntry.study.examples) && Array.isArray(bsEntry.study.examples)) {
    lvEntry.study.examples.forEach((tex, i) => {
      if (bsEntry.study.examples[i]) bsEntry.study.examples[i].de = tex.de;
    });
  }

  if (Array.isArray(lvEntry.study.comparison) && Array.isArray(bsEntry.study.comparison)) {
    lvEntry.study.comparison.forEach((trow, i) => {
      if (bsEntry.study.comparison[i]) {
        bsEntry.study.comparison[i].word = trow.word;
        const tex = trow.example || "";
        const sex = bsEntry.study.comparison[i].example || "";
        if (tex.includes("–") || tex.includes("—") || tex.includes("-")) {
          const sep = tex.match(/\s*[–—-]\s*/);
          if (sep) {
            const dePart = tex.split(sep[0])[0];
            const bsNative = sex.split(/\s*[–—-]\s*/).pop() || sex;
            bsEntry.study.comparison[i].example = `${dePart}${sep[0]}${bsNative.trim()}`;
          }
        }
      }
    });
  }

  if (Array.isArray(lvEntry.study.words) && Array.isArray(bsEntry.study.words)) {
    lvEntry.study.words.forEach((tw, i) => {
      if (bsEntry.study.words[i]) {
        bsEntry.study.words[i].de = tw.de;
      }
    });
  }

  if (Array.isArray(lvEntry.study.comparisonTable) && Array.isArray(bsEntry.study.comparisonTable)) {
    lvEntry.study.comparisonTable.forEach((trow, i) => {
      if (bsEntry.study.comparisonTable[i]) {
        if (trow.de) bsEntry.study.comparisonTable[i].de = trow.de;
      }
    });
  }
}

const LEVELS = ["a1", "a2", "b1", "b2", "c1", "c2"];
const VAR_NAMES = { a1: "A1_WORDS", a2: "A2_WORDS", b1: "B1_WORDS", b2: "B2_WORDS", c1: "C1_WORDS", c2: "C2_WORDS" };

for (const level of LEVELS) {
  const lv = loadArray(`data/${level}.js`);
  const sl = loadArray(`data/bs/${level}.js`);
  for (let i = 0; i < Math.min(lv.length, sl.length); i++) {
    restoreDeFields(lv[i], sl[i]);
  }
  writeArrayFile(path.join(ROOT, "data/bs", `${level}.js`), VAR_NAMES[level], sl);
  console.log(`Fixed ${level}: ${sl.length} entries`);
}

const lvSent = loadArray("data/sentences.js");
const bsSent = loadArray("data/bs/sentences.js");
lvSent.forEach((t, i) => { if (bsSent[i]) bsSent[i].de = t.de; });
writeArrayFile(path.join(ROOT, "data/bs/sentences.js"), "SENTENCE_ENTRIES", bsSent);
console.log(`Fixed sentences: ${bsSent.length}`);

const lvVerbs = loadArray("data/verbs.js");
const bsVerbs = loadArray("data/bs/verbs.js");
lvVerbs.forEach((t, i) => {
  if (!bsVerbs[i]) return;
  for (const form of Object.keys(t)) {
    bsVerbs[i][form].de = t[form].de;
  }
});
writeArrayFile(path.join(ROOT, "data/bs/verbs.js"), "VERB_ENTRIES", bsVerbs);
console.log(`Fixed verbs: ${bsVerbs.length}`);

const lvDlgCode = fs.readFileSync(path.join(ROOT, "data/dialogueIdMap.js"), "utf8");
const lvDlgCtx = { window: {} };
vm.createContext(lvDlgCtx);
vm.runInContext(lvDlgCode, lvDlgCtx);
const lvDlgObj = lvDlgCtx.window.DIALOGUE_ID_MAP;

const bsDlgCode = fs.readFileSync(path.join(ROOT, "data/bs/dialogueIdMap.js"), "utf8");
const bsDlgCtx = { window: {} };
vm.createContext(bsDlgCtx);
vm.runInContext(bsDlgCode, bsDlgCtx);
const bsDlg = bsDlgCtx.window.DIALOGUE_ID_MAP;

for (const [id, entry] of Object.entries(lvDlgObj)) {
  if (bsDlg[id]) bsDlg[id].de = entry.de;
}
fs.writeFileSync(
  path.join(ROOT, "data/bs/dialogueIdMap.js"),
  `const DIALOGUE_ID_MAP = ${JSON.stringify(bsDlg, null, 2)};\n\nwindow.DIALOGUE_ID_MAP = DIALOGUE_ID_MAP;\n`,
  "utf8"
);
console.log("Fixed dialogueIdMap");

console.log("\nDE field restoration complete.");
