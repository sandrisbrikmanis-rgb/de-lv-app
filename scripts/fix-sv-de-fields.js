#!/usr/bin/env node
/**
 * Fix SV data: restore German comparison.word and other DE fields from LV source.
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

function restoreDeFields(lvEntry, csEntry) {
  csEntry.de = lvEntry.de;
  if (lvEntry.de_article !== undefined) csEntry.de_article = lvEntry.de_article;
  if (lvEntry.de_plural !== undefined) csEntry.de_plural = lvEntry.de_plural;

  if (!lvEntry.study || !csEntry.study) return;

  if (Array.isArray(lvEntry.study.examples) && Array.isArray(csEntry.study.examples)) {
    lvEntry.study.examples.forEach((tex, i) => {
      if (csEntry.study.examples[i]) csEntry.study.examples[i].de = tex.de;
    });
  }

  if (Array.isArray(lvEntry.study.comparison) && Array.isArray(csEntry.study.comparison)) {
    lvEntry.study.comparison.forEach((trow, i) => {
      if (csEntry.study.comparison[i]) {
        csEntry.study.comparison[i].word = trow.word;
        const tex = trow.example || "";
        const hex = csEntry.study.comparison[i].example || "";
        if (tex.includes("–") || tex.includes("—") || tex.includes("-")) {
          const sep = tex.match(/\s*[–—-]\s*/);
          if (sep) {
            const dePart = tex.split(sep[0])[0];
            const csNative = hex.split(/\s*[–—-]\s*/).pop() || hex;
            csEntry.study.comparison[i].example = `${dePart}${sep[0]}${csNative.trim()}`;
          }
        }
      }
    });
  }

  if (Array.isArray(lvEntry.study.words) && Array.isArray(csEntry.study.words)) {
    lvEntry.study.words.forEach((tw, i) => {
      if (csEntry.study.words[i]) {
        csEntry.study.words[i].de = tw.de;
      }
    });
  }

  if (Array.isArray(lvEntry.study.comparisonTable) && Array.isArray(csEntry.study.comparisonTable)) {
    lvEntry.study.comparisonTable.forEach((trow, i) => {
      if (csEntry.study.comparisonTable[i]) {
        if (trow.de) csEntry.study.comparisonTable[i].de = trow.de;
      }
    });
  }
}

const LEVELS = ["a1", "a2", "b1", "b2", "c1", "c2"];
const VAR_NAMES = { a1: "A1_WORDS", a2: "A2_WORDS", b1: "B1_WORDS", b2: "B2_WORDS", c1: "C1_WORDS", c2: "C2_WORDS" };

for (const level of LEVELS) {
  const lv = loadArray(`data/${level}.js`);
  const sv = loadArray(`data/sv/${level}.js`);
  for (let i = 0; i < Math.min(lv.length, sv.length); i++) {
    restoreDeFields(lv[i], sv[i]);
  }
  writeArrayFile(path.join(ROOT, "data/sv", `${level}.js`), VAR_NAMES[level], sv);
  console.log(`Fixed ${level}: ${sv.length} entries`);
}

const lvSent = loadArray("data/sentences.js");
const csSent = loadArray("data/sv/sentences.js");
lvSent.forEach((t, i) => { if (csSent[i]) csSent[i].de = t.de; });
writeArrayFile(path.join(ROOT, "data/sv/sentences.js"), "SENTENCE_ENTRIES", csSent);
console.log(`Fixed sentences: ${csSent.length}`);

const lvVerbs = loadArray("data/verbs.js");
const csVerbs = loadArray("data/sv/verbs.js");
lvVerbs.forEach((t, i) => {
  if (!csVerbs[i]) return;
  for (const form of Object.keys(t)) {
    csVerbs[i][form].de = t[form].de;
  }
});
writeArrayFile(path.join(ROOT, "data/sv/verbs.js"), "VERB_ENTRIES", csVerbs);
console.log(`Fixed verbs: ${csVerbs.length}`);

const lvDlgCode = fs.readFileSync(path.join(ROOT, "data/dialogueIdMap.js"), "utf8");
const lvDlgCtx = { window: {} };
vm.createContext(lvDlgCtx);
vm.runInContext(lvDlgCode, lvDlgCtx);
const lvDlgObj = lvDlgCtx.window.DIALOGUE_ID_MAP;

const csDlgCode = fs.readFileSync(path.join(ROOT, "data/sv/dialogueIdMap.js"), "utf8");
const csDlgCtx = { window: {} };
vm.createContext(csDlgCtx);
vm.runInContext(csDlgCode, csDlgCtx);
const csDlg = csDlgCtx.window.DIALOGUE_ID_MAP;

for (const [id, entry] of Object.entries(lvDlgObj)) {
  if (csDlg[id]) csDlg[id].de = entry.de;
}
fs.writeFileSync(
  path.join(ROOT, "data/sv/dialogueIdMap.js"),
  `const DIALOGUE_ID_MAP = ${JSON.stringify(csDlg, null, 2)};\n\nwindow.DIALOGUE_ID_MAP = DIALOGUE_ID_MAP;\n`,
  "utf8"
);
console.log("Fixed dialogueIdMap");

console.log("\nDE field restoration complete.");
