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

function restoreDeFields(lvEntry, slEntry) {
  slEntry.de = lvEntry.de;
  if (lvEntry.de_article !== undefined) slEntry.de_article = lvEntry.de_article;
  if (lvEntry.de_plural !== undefined) slEntry.de_plural = lvEntry.de_plural;

  if (!lvEntry.study || !slEntry.study) return;

  if (Array.isArray(lvEntry.study.examples) && Array.isArray(slEntry.study.examples)) {
    lvEntry.study.examples.forEach((tex, i) => {
      if (slEntry.study.examples[i]) slEntry.study.examples[i].de = tex.de;
    });
  }

  if (Array.isArray(lvEntry.study.comparison) && Array.isArray(slEntry.study.comparison)) {
    lvEntry.study.comparison.forEach((trow, i) => {
      if (slEntry.study.comparison[i]) {
        slEntry.study.comparison[i].word = trow.word;
        const tex = trow.example || "";
        const sex = slEntry.study.comparison[i].example || "";
        if (tex.includes("–") || tex.includes("—") || tex.includes("-")) {
          const sep = tex.match(/\s*[–—-]\s*/);
          if (sep) {
            const dePart = tex.split(sep[0])[0];
            const slNative = sex.split(/\s*[–—-]\s*/).pop() || sex;
            slEntry.study.comparison[i].example = `${dePart}${sep[0]}${slNative.trim()}`;
          }
        }
      }
    });
  }

  if (Array.isArray(lvEntry.study.words) && Array.isArray(slEntry.study.words)) {
    lvEntry.study.words.forEach((tw, i) => {
      if (slEntry.study.words[i]) {
        slEntry.study.words[i].de = tw.de;
      }
    });
  }

  if (Array.isArray(lvEntry.study.comparisonTable) && Array.isArray(slEntry.study.comparisonTable)) {
    lvEntry.study.comparisonTable.forEach((trow, i) => {
      if (slEntry.study.comparisonTable[i]) {
        if (trow.de) slEntry.study.comparisonTable[i].de = trow.de;
      }
    });
  }
}

const LEVELS = ["a1", "a2", "b1", "b2", "c1", "c2"];
const VAR_NAMES = { a1: "A1_WORDS", a2: "A2_WORDS", b1: "B1_WORDS", b2: "B2_WORDS", c1: "C1_WORDS", c2: "C2_WORDS" };

for (const level of LEVELS) {
  const lv = loadArray(`data/${level}.js`);
  const sl = loadArray(`data/sl/${level}.js`);
  for (let i = 0; i < Math.min(lv.length, sl.length); i++) {
    restoreDeFields(lv[i], sl[i]);
  }
  writeArrayFile(path.join(ROOT, "data/sl", `${level}.js`), VAR_NAMES[level], sl);
  console.log(`Fixed ${level}: ${sl.length} entries`);
}

const lvSent = loadArray("data/sentences.js");
const slSent = loadArray("data/sl/sentences.js");
lvSent.forEach((t, i) => { if (slSent[i]) slSent[i].de = t.de; });
writeArrayFile(path.join(ROOT, "data/sl/sentences.js"), "SENTENCE_ENTRIES", slSent);
console.log(`Fixed sentences: ${slSent.length}`);

const lvVerbs = loadArray("data/verbs.js");
const slVerbs = loadArray("data/sl/verbs.js");
lvVerbs.forEach((t, i) => {
  if (!slVerbs[i]) return;
  for (const form of Object.keys(t)) {
    slVerbs[i][form].de = t[form].de;
  }
});
writeArrayFile(path.join(ROOT, "data/sl/verbs.js"), "VERB_ENTRIES", slVerbs);
console.log(`Fixed verbs: ${slVerbs.length}`);

const lvDlgCode = fs.readFileSync(path.join(ROOT, "data/dialogueIdMap.js"), "utf8");
const lvDlgCtx = { window: {} };
vm.createContext(lvDlgCtx);
vm.runInContext(lvDlgCode, lvDlgCtx);
const lvDlgObj = lvDlgCtx.window.DIALOGUE_ID_MAP;

const slDlgCode = fs.readFileSync(path.join(ROOT, "data/sl/dialogueIdMap.js"), "utf8");
const slDlgCtx = { window: {} };
vm.createContext(slDlgCtx);
vm.runInContext(slDlgCode, slDlgCtx);
const slDlg = slDlgCtx.window.DIALOGUE_ID_MAP;

for (const [id, entry] of Object.entries(lvDlgObj)) {
  if (slDlg[id]) slDlg[id].de = entry.de;
}
fs.writeFileSync(
  path.join(ROOT, "data/sl/dialogueIdMap.js"),
  `const DIALOGUE_ID_MAP = ${JSON.stringify(slDlg, null, 2)};\n\nwindow.DIALOGUE_ID_MAP = DIALOGUE_ID_MAP;\n`,
  "utf8"
);
console.log("Fixed dialogueIdMap");

console.log("\nDE field restoration complete.");
