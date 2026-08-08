#!/usr/bin/env node
/** Fix 7 findings from final medium regression (1 HIGH + 6 MEDIUM). */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./lib/audit-common");

const BS_FILE = path.join(ROOT, "data", "bs", "b1.js");
const WWW_FILE = path.join(ROOT, "www", "data", "bs", "b1.js");

const FIXES = [
  { cardId: "b1-einführen", field: "study.comparison[2].meaning", correctedText: "Predstaviti / upoznati" },
  { cardId: "b1-folge", field: "study.translation", correctedText: "Posljedica" },
  { cardId: "b1-lösen", field: "study.examples[0].lv", correctedText: "Moramo riješiti ovaj problem." },
  { cardId: "b1-verhältnis", field: "study.examples[2].lv", correctedText: "Politički uslovi su se promijenili." },
  { cardId: "b1-verletzen", field: "study.examples[0].lv", correctedText: "Povrijedio je koljeno dok se bavio sportom." },
  { cardId: "b1-verletzen", field: "study.comparison[0].meaning", correctedText: "Povrijediti, uvrijediti, prekršiti" },
  { cardId: "b1-weder", field: "study.comparison[2].meaning", correctedText: "I ... i" },
];

function loadWords(p) {
  const code = fs.readFileSync(p, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.B1_WORDS;
}

function writeB1(p, data) {
  fs.writeFileSync(p, `const B1_WORDS = ${JSON.stringify(data, null, 2)};\n\nwindow.B1_WORDS = B1_WORDS;\n`, "utf8");
}

function parsePath(fp) { return fp.replace(/\[(\d+)\]/g, ".$1").split(".").filter(Boolean); }
function setAt(root, fp, val) { const parts = parsePath(fp); let cur = root; for (let i = 0; i < parts.length - 1; i++) cur = cur[parts[i]]; cur[parts[parts.length - 1]] = val; }
function findEntry(words, id) { return words.find((e, i) => (e.study?.id || `b1-${e.de}-${i}`) === id); }

const words = loadWords(BS_FILE);
for (const fix of FIXES) {
  const entry = findEntry(words, fix.cardId);
  const sub = fix.field.startsWith("study.") ? fix.field.slice("study.".length) : fix.field;
  const root = fix.field === "lv" ? entry : entry.study;
  let text = fix.correctedText;
  if (fix.field === "study.translation") text = text.charAt(0).toUpperCase() + text.slice(1);
  setAt(root, sub, text);
  console.log(`${fix.cardId}: ${fix.field} → ${text}`);
}
writeB1(BS_FILE, words);
writeB1(WWW_FILE, words);
