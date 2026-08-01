#!/usr/bin/env node
/**
 * Fix SR data: restore German comparison.word and other DE fields from LV source.
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

function restoreDeFields(lvEntry, srEntry) {
  srEntry.de = lvEntry.de;
  if (lvEntry.de_article !== undefined) srEntry.de_article = lvEntry.de_article;
  if (lvEntry.de_plural !== undefined) srEntry.de_plural = lvEntry.de_plural;

  if (!lvEntry.study || !srEntry.study) return;

  if (Array.isArray(lvEntry.study.examples) && Array.isArray(srEntry.study.examples)) {
    lvEntry.study.examples.forEach((tex, i) => {
      if (srEntry.study.examples[i]) srEntry.study.examples[i].de = tex.de;
    });
  }

  if (Array.isArray(lvEntry.study.comparison) && Array.isArray(srEntry.study.comparison)) {
    lvEntry.study.comparison.forEach((trow, i) => {
      if (srEntry.study.comparison[i]) {
        srEntry.study.comparison[i].word = trow.word;
        const tex = trow.example || "";
        const sex = srEntry.study.comparison[i].example || "";
        if (tex.includes("–") || tex.includes("—") || tex.includes("-")) {
          const sep = tex.match(/\s*[–—-]\s*/);
          if (sep) {
            const dePart = tex.split(sep[0])[0];
            const srNative = sex.split(/\s*[–—-]\s*/).pop() || sex;
            srEntry.study.comparison[i].example = `${dePart}${sep[0]}${srNative.trim()}`;
          }
        }
      }
    });
  }

  if (Array.isArray(lvEntry.study.words) && Array.isArray(srEntry.study.words)) {
    lvEntry.study.words.forEach((tw, i) => {
      if (srEntry.study.words[i]) {
        srEntry.study.words[i].de = tw.de;
      }
    });
  }

  if (Array.isArray(lvEntry.study.comparisonTable) && Array.isArray(srEntry.study.comparisonTable)) {
    lvEntry.study.comparisonTable.forEach((trow, i) => {
      if (srEntry.study.comparisonTable[i]) {
        if (trow.de) srEntry.study.comparisonTable[i].de = trow.de;
      }
    });
  }
}

const LEVELS = ["a1", "a2", "b1", "b2", "c1", "c2"];
const VAR_NAMES = { a1: "A1_WORDS", a2: "A2_WORDS", b1: "B1_WORDS", b2: "B2_WORDS", c1: "C1_WORDS", c2: "C2_WORDS" };

for (const level of LEVELS) {
  const lv = loadArray(`data/${level}.js`);
  const sr = loadArray(`data/sr/${level}.js`);
  for (let i = 0; i < Math.min(lv.length, sr.length); i++) {
    restoreDeFields(lv[i], sr[i]);
  }
  writeArrayFile(path.join(ROOT, "data/sr", `${level}.js`), VAR_NAMES[level], sr);
  console.log(`Fixed ${level}: ${sr.length} entries`);
}

const lvSent = loadArray("data/sentences.js");
const srSent = loadArray("data/sr/sentences.js");
lvSent.forEach((t, i) => { if (srSent[i]) srSent[i].de = t.de; });
writeArrayFile(path.join(ROOT, "data/sr/sentences.js"), "SENTENCE_ENTRIES", srSent);
console.log(`Fixed sentences: ${srSent.length}`);

const lvVerbs = loadArray("data/verbs.js");
const srVerbs = loadArray("data/sr/verbs.js");
lvVerbs.forEach((t, i) => {
  if (!srVerbs[i]) return;
  for (const form of Object.keys(t)) {
    srVerbs[i][form].de = t[form].de;
  }
});
writeArrayFile(path.join(ROOT, "data/sr/verbs.js"), "VERB_ENTRIES", srVerbs);
console.log(`Fixed verbs: ${srVerbs.length}`);

const lvDlgCode = fs.readFileSync(path.join(ROOT, "data/dialogueIdMap.js"), "utf8");
const lvDlgCtx = { window: {} };
vm.createContext(lvDlgCtx);
vm.runInContext(lvDlgCode, lvDlgCtx);
const lvDlgObj = lvDlgCtx.window.DIALOGUE_ID_MAP;

const srDlgCode = fs.readFileSync(path.join(ROOT, "data/sr/dialogueIdMap.js"), "utf8");
const srDlgCtx = { window: {} };
vm.createContext(srDlgCtx);
vm.runInContext(srDlgCode, srDlgCtx);
const srDlg = srDlgCtx.window.DIALOGUE_ID_MAP;

for (const [id, entry] of Object.entries(lvDlgObj)) {
  if (srDlg[id]) srDlg[id].de = entry.de;
}
fs.writeFileSync(
  path.join(ROOT, "data/sr/dialogueIdMap.js"),
  `const DIALOGUE_ID_MAP = ${JSON.stringify(srDlg, null, 2)};\n\nwindow.DIALOGUE_ID_MAP = DIALOGUE_ID_MAP;\n`,
  "utf8"
);
console.log("Fixed dialogueIdMap");

console.log("\nDE field restoration complete.");
