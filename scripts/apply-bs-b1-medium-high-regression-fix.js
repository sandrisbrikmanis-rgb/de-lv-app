#!/usr/bin/env node
/**
 * Fix 17 HIGH regressions introduced during medium pass.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./lib/audit-common");

const BS_FILE = path.join(ROOT, "data", "bs", "b1.js");
const WWW_FILE = path.join(ROOT, "www", "data", "bs", "b1.js");

const FIXES = [
  { cardId: "b1-dadurch", field: "study.comparison[1].meaning", correctedText: "Zato / zbog toga" },
  { cardId: "b1-durchfall", field: "study.comparison[1].meaning", correctedText: "Pasti na ispitu" },
  { cardId: "b1-einfahrt", field: "study.comparison[1].meaning", correctedText: "Izlaz / izlazak" },
  { cardId: "b1-einfarbig", field: "study.comparison[1].meaning", correctedText: "Šaren / obojen" },
  { cardId: "b1-längeneinheit", field: "study.comparison[1].meaning", correctedText: "Jedinica težine / mase" },
  { cardId: "b1-kastanie", field: "study.comparison[2].meaning", correctedText: "Orah / orašasti plod" },
  { cardId: "b1-leistung", field: "study.examples[1].lv", correctedText: "Njen učinak na ispitu je bio dobar." },
  { cardId: "b1-löschen", field: "study.comparison[0].meaning", correctedText: "Ugasiti vatru • izbrisati podatke" },
  { cardId: "b1-rausch", field: "study.comparison[1].meaning", correctedText: "Radost" },
  { cardId: "b1-rollen", field: "study.comparison[1].meaning", correctedText: "Okretati / okretati se" },
  { cardId: "b1-schmelzen", field: "study.comparison[2].meaning", correctedText: "Kuvati" },
  { cardId: "b1-senken", field: "study.comparison[2].meaning", correctedText: "Podići" },
  { cardId: "b1-sitz", field: "study.comparison[0].meaning", correctedText: "Sjedalo, sjedište / sjedište kompanije" },
  { cardId: "b1-spannung", field: "study.comparison[2].meaning", correctedText: "Snaga" },
  { cardId: "b1-taufen", field: "study.important.text", correctedText: "Taufen nije kladiti se; to znači krstiti ili dati ime." },
  { cardId: "b1-übernehmen", field: "study.examples[0].lv", correctedText: "Preuzimam ovaj zadatak." },
  { cardId: "b1-wachen", field: "study.comparison[1].meaning", correctedText: "Probuditi se" },
];

function loadWords(filePath) {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.B1_WORDS;
}

function writeB1(filePath, data) {
  const json = JSON.stringify(data, null, 2);
  fs.writeFileSync(filePath, `const B1_WORDS = ${json};\n\nwindow.B1_WORDS = B1_WORDS;\n`, "utf8");
}

function parsePath(fieldPath) {
  return fieldPath.replace(/\[(\d+)\]/g, ".$1").split(".").filter(Boolean);
}

function getAt(root, fieldPath) {
  const parts = parsePath(fieldPath);
  let cur = root;
  for (const part of parts) cur = cur?.[part];
  return cur;
}

function setAt(root, fieldPath, value) {
  const parts = parsePath(fieldPath);
  let cur = root;
  for (let i = 0; i < parts.length - 1; i++) cur = cur[parts[i]];
  cur[parts[parts.length - 1]] = value;
}

function findEntry(words, cardId) {
  return words.find((e, i) => (e.study?.id || `b1-${e.de}-${i}`) === cardId);
}

function applyFix(words, fix) {
  const entry = findEntry(words, fix.cardId);
  const sub = fix.field.startsWith("study.") ? fix.field.slice("study.".length) : fix.field;
  const before = getAt(entry.study, sub);
  setAt(entry.study, sub, fix.correctedText);
  console.log(`${fix.cardId}: ${JSON.stringify(before)} → ${JSON.stringify(fix.correctedText)}`);
}

const words = loadWords(BS_FILE);
for (const fix of FIXES) applyFix(words, fix);
writeB1(BS_FILE, words);
writeB1(WWW_FILE, words);
console.log(`Applied ${FIXES.length} HIGH regression fixes`);
