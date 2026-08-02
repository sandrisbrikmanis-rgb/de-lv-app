const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.join(__dirname, "..");
const code = fs.readFileSync(path.join(root, "data/sentences.js"), "utf8");
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(code, sandbox);
const entries = sandbox.window.SENTENCE_ENTRIES || [];

const bullet = "\u2022";

function isFullSentence(de, lv) {
  const deTrim = de.trim();
  const lvFirst = (lv.split(bullet)[0] || "").trim();
  return /[.!?]$/.test(deTrim) || /[.!?]$/.test(lvFirst);
}

function startsUpper(s) {
  return /^[A-ZÄÖÜ]/.test(s.trim());
}

function startsLower(s) {
  return /^[a-zäöüß]/.test(s.trim());
}

const issues = {
  semicolon: [],
  spaceBeforePunct: [],
  deFullLowerStart: [],
  lvFullLowerStart: [],
  deFullMissingPunct: [],
  lvFullMissingPunct: [],
  dePhraseUpperStart: [],
  lvPhraseUpperStart: [],
  dePhraseEndsPunct: [],
  lvPhraseEndsPunct: [],
};

for (const e of entries) {
  const { de, lv } = e;
  const lvFirst = (lv.split(bullet)[0] || "").trim();
  const full = isFullSentence(de, lv);

  if (lv.includes(";")) {
    issues.semicolon.push({ de, lv });
  }
  if (/\s+[!?.]/.test(lv)) {
    issues.spaceBeforePunct.push({ de, lv });
  }

  if (full) {
    if (startsLower(de)) issues.deFullLowerStart.push({ de, lv });
    if (startsLower(lvFirst)) issues.lvFullLowerStart.push({ de, lv });
    if (!/[.!?]$/.test(de.trim())) issues.deFullMissingPunct.push({ de, lv });
    if (/[.!?]$/.test(de.trim()) && !/[.!?]$/.test(lvFirst)) {
      issues.lvFullMissingPunct.push({ de, lv });
    }
  } else {
    if (startsUpper(de)) issues.dePhraseUpperStart.push({ de, lv });
    if (startsUpper(lvFirst)) issues.lvPhraseUpperStart.push({ de, lv });
    if (/[.!?]$/.test(de.trim())) issues.dePhraseEndsPunct.push({ de, lv });
    if (/[.!?]$/.test(lvFirst)) issues.lvPhraseEndsPunct.push({ de, lv });
  }
}

console.log("Total entries:", entries.length);
for (const [key, list] of Object.entries(issues)) {
  console.log(`${key}: ${list.length}`);
  for (const item of list.slice(0, 5)) {
    console.log("  ", JSON.stringify(item));
  }
}
