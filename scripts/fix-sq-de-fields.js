#!/usr/bin/env node
/**
 * Fix SQ data: restore German comparison.word and other DE fields from TR source.
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

function restoreDeFields(trEntry, sqEntry) {
  sqEntry.de = trEntry.de;
  if (trEntry.de_article !== undefined) sqEntry.de_article = trEntry.de_article;
  if (trEntry.de_plural !== undefined) sqEntry.de_plural = trEntry.de_plural;

  if (!trEntry.study || !sqEntry.study) return;

  if (Array.isArray(trEntry.study.examples) && Array.isArray(sqEntry.study.examples)) {
    trEntry.study.examples.forEach((tex, i) => {
      if (sqEntry.study.examples[i]) sqEntry.study.examples[i].de = tex.de;
    });
  }

  if (Array.isArray(trEntry.study.comparison) && Array.isArray(sqEntry.study.comparison)) {
    trEntry.study.comparison.forEach((trow, i) => {
      if (sqEntry.study.comparison[i]) {
        sqEntry.study.comparison[i].word = trow.word;
        // Restore DE part of example (before dash or =)
        const tex = trow.example || "";
        const sex = sqEntry.study.comparison[i].example || "";
        if (tex.includes("–") || tex.includes("—") || tex.includes("-")) {
          const sep = tex.match(/\s*[–—-]\s*/);
          if (sep) {
            const dePart = tex.split(sep[0])[0];
            const sqNative = sex.split(/\s*[–—-]\s*/).pop() || sex;
            sqEntry.study.comparison[i].example = `${dePart}${sep[0]}${sqNative.trim()}`;
          }
        }
      }
    });
  }

  if (Array.isArray(trEntry.study.words) && Array.isArray(sqEntry.study.words)) {
    trEntry.study.words.forEach((tw, i) => {
      if (sqEntry.study.words[i]) {
        sqEntry.study.words[i].de = tw.de;
      }
    });
  }

  if (Array.isArray(trEntry.study.comparisonTable) && Array.isArray(sqEntry.study.comparisonTable)) {
    trEntry.study.comparisonTable.forEach((trow, i) => {
      if (sqEntry.study.comparisonTable[i]) {
        if (trow.de) sqEntry.study.comparisonTable[i].de = trow.de;
      }
    });
  }

  if (Array.isArray(trEntry.study.examples) && Array.isArray(sqEntry.study.examples)) {
    trEntry.study.examples.forEach((tex, i) => {
      if (sqEntry.study.examples[i]) {
        sqEntry.study.examples[i].de = tex.de;
      }
    });
  }
}

const LEVELS = ["a1", "a2", "b1", "b2", "c1", "c2"];
const VAR_NAMES = { a1: "A1_WORDS", a2: "A2_WORDS", b1: "B1_WORDS", b2: "B2_WORDS", c1: "C1_WORDS", c2: "C2_WORDS" };

for (const level of LEVELS) {
  const tr = loadArray(`data/tr/${level}.js`);
  const sq = loadArray(`data/sq/${level}.js`);
  for (let i = 0; i < Math.min(tr.length, sq.length); i++) {
    restoreDeFields(tr[i], sq[i]);
  }
  writeArrayFile(path.join(ROOT, "data/sq", `${level}.js`), VAR_NAMES[level], sq);
  console.log(`Fixed ${level}: ${sq.length} entries`);
}

// Fix sentences
const trSent = loadArray("data/tr/sentences.js");
const sqSent = loadArray("data/sq/sentences.js");
trSent.forEach((t, i) => { if (sqSent[i]) sqSent[i].de = t.de; });
writeArrayFile(path.join(ROOT, "data/sq/sentences.js"), "SENTENCE_ENTRIES", sqSent);
console.log(`Fixed sentences: ${sqSent.length}`);

// Fix verbs
const trVerbs = loadArray("data/tr/verbs.js");
const sqVerbs = loadArray("data/sq/verbs.js");
trVerbs.forEach((t, i) => {
  if (!sqVerbs[i]) return;
  for (const form of Object.keys(t)) {
    sqVerbs[i][form].de = t[form].de;
  }
});
writeArrayFile(path.join(ROOT, "data/sq/verbs.js"), "VERB_ENTRIES", sqVerbs);
console.log(`Fixed verbs: ${sqVerbs.length}`);

// Fix dialogue
const trDlg = loadArray("data/tr/dialogueIdMap.js");
const sqDlgCode = fs.readFileSync(path.join(ROOT, "data/sq/dialogueIdMap.js"), "utf8");
const sqDlgCtx = { window: {} };
vm.createContext(sqDlgCtx);
vm.runInContext(sqDlgCode, sqDlgCtx);
const sqDlg = sqDlgCtx.window.DIALOGUE_ID_MAP;
const trDlgMap = loadArray("data/tr/dialogueIdMap.js");
// dialogue is object not array
const trDlgCode = fs.readFileSync(path.join(ROOT, "data/tr/dialogueIdMap.js"), "utf8");
const trDlgCtx = { window: {} };
vm.createContext(trDlgCtx);
vm.runInContext(trDlgCode, trDlgCtx);
const trDlgObj = trDlgCtx.window.DIALOGUE_ID_MAP;
for (const [id, entry] of Object.entries(trDlgObj)) {
  if (sqDlg[id]) sqDlg[id].de = entry.de;
}
fs.writeFileSync(
  path.join(ROOT, "data/sq/dialogueIdMap.js"),
  `const DIALOGUE_ID_MAP = ${JSON.stringify(sqDlg, null, 2)};\n\nwindow.DIALOGUE_ID_MAP = DIALOGUE_ID_MAP;\n`,
  "utf8"
);
console.log("Fixed dialogueIdMap");

console.log("\nDE field restoration complete.");
