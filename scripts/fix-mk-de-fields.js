#!/usr/bin/env node
/**
 * Fix MK data: restore German comparison.word and other DE fields from LV source.
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

function restoreDeFields(lvEntry, mkEntry) {
  mkEntry.de = lvEntry.de;
  if (lvEntry.de_article !== undefined) mkEntry.de_article = lvEntry.de_article;
  if (lvEntry.de_plural !== undefined) mkEntry.de_plural = lvEntry.de_plural;

  if (!lvEntry.study || !mkEntry.study) return;

  if (Array.isArray(lvEntry.study.examples) && Array.isArray(mkEntry.study.examples)) {
    lvEntry.study.examples.forEach((tex, i) => {
      if (mkEntry.study.examples[i]) mkEntry.study.examples[i].de = tex.de;
    });
  }

  if (Array.isArray(lvEntry.study.comparison) && Array.isArray(mkEntry.study.comparison)) {
    lvEntry.study.comparison.forEach((trow, i) => {
      if (mkEntry.study.comparison[i]) {
        mkEntry.study.comparison[i].word = trow.word;
        const tex = trow.example || "";
        const sex = mkEntry.study.comparison[i].example || "";
        if (tex.includes("–") || tex.includes("—") || tex.includes("-")) {
          const sep = tex.match(/\s*[–—-]\s*/);
          if (sep) {
            const dePart = tex.split(sep[0])[0];
            const mkNative = sex.split(/\s*[–—-]\s*/).pop() || sex;
            mkEntry.study.comparison[i].example = `${dePart}${sep[0]}${mkNative.trim()}`;
          }
        }
      }
    });
  }

  if (Array.isArray(lvEntry.study.words) && Array.isArray(mkEntry.study.words)) {
    lvEntry.study.words.forEach((tw, i) => {
      if (mkEntry.study.words[i]) {
        mkEntry.study.words[i].de = tw.de;
      }
    });
  }

  if (Array.isArray(lvEntry.study.comparisonTable) && Array.isArray(mkEntry.study.comparisonTable)) {
    lvEntry.study.comparisonTable.forEach((trow, i) => {
      if (mkEntry.study.comparisonTable[i]) {
        if (trow.de) mkEntry.study.comparisonTable[i].de = trow.de;
      }
    });
  }
}

const LEVELS = ["a1", "a2", "b1", "b2", "c1", "c2"];
const VAR_NAMES = { a1: "A1_WORDS", a2: "A2_WORDS", b1: "B1_WORDS", b2: "B2_WORDS", c1: "C1_WORDS", c2: "C2_WORDS" };

for (const level of LEVELS) {
  const lv = loadArray(`data/${level}.js`);
  const mk = loadArray(`data/mk/${level}.js`);
  for (let i = 0; i < Math.min(lv.length, mk.length); i++) {
    restoreDeFields(lv[i], mk[i]);
  }
  writeArrayFile(path.join(ROOT, "data/mk", `${level}.js`), VAR_NAMES[level], mk);
  console.log(`Fixed ${level}: ${mk.length} entries`);
}

const lvSent = loadArray("data/sentences.js");
const mkSent = loadArray("data/mk/sentences.js");
lvSent.forEach((t, i) => { if (mkSent[i]) mkSent[i].de = t.de; });
writeArrayFile(path.join(ROOT, "data/mk/sentences.js"), "SENTENCE_ENTRIES", mkSent);
console.log(`Fixed sentences: ${mkSent.length}`);

const lvVerbs = loadArray("data/verbs.js");
const mkVerbs = loadArray("data/mk/verbs.js");
lvVerbs.forEach((t, i) => {
  if (!mkVerbs[i]) return;
  for (const form of Object.keys(t)) {
    mkVerbs[i][form].de = t[form].de;
  }
});
writeArrayFile(path.join(ROOT, "data/mk/verbs.js"), "VERB_ENTRIES", mkVerbs);
console.log(`Fixed verbs: ${mkVerbs.length}`);

const lvDlgCode = fs.readFileSync(path.join(ROOT, "data/dialogueIdMap.js"), "utf8");
const lvDlgCtx = { window: {} };
vm.createContext(lvDlgCtx);
vm.runInContext(lvDlgCode, lvDlgCtx);
const lvDlgObj = lvDlgCtx.window.DIALOGUE_ID_MAP;

const mkDlgCode = fs.readFileSync(path.join(ROOT, "data/mk/dialogueIdMap.js"), "utf8");
const mkDlgCtx = { window: {} };
vm.createContext(mkDlgCtx);
vm.runInContext(mkDlgCode, mkDlgCtx);
const mkDlg = mkDlgCtx.window.DIALOGUE_ID_MAP;

for (const [id, entry] of Object.entries(lvDlgObj)) {
  if (mkDlg[id]) mkDlg[id].de = entry.de;
}
fs.writeFileSync(
  path.join(ROOT, "data/mk/dialogueIdMap.js"),
  `const DIALOGUE_ID_MAP = ${JSON.stringify(mkDlg, null, 2)};\n\nwindow.DIALOGUE_ID_MAP = DIALOGUE_ID_MAP;\n`,
  "utf8"
);
console.log("Fixed dialogueIdMap");

console.log("\nDE field restoration complete.");
