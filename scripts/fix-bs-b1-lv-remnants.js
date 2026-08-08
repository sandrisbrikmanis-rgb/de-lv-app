#!/usr/bin/env node
/**
 * Fix remaining BS B1 LV remnants (study text + sectionAccents) from LV etalon.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./lib/audit-common");

const BS_FILE = path.join(ROOT, "data", "bs", "b1.js");
const WWW_FILE = path.join(ROOT, "www", "data", "bs", "b1.js");

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

function findStudy(words, id) {
  const entry = words.find((e) => e.study?.id === id);
  if (!entry) throw new Error(`Not found: ${id}`);
  return entry;
}

const words = loadWords(BS_FILE);

// b1-hort — explanation[3] from LV etalon line 4
const hort = findStudy(words, "b1-hort");
if (Array.isArray(hort.study.explanation)) {
  hort.study.explanation[3] = "Na bosanskom, najbliži ekvivalent je grupa produženog dana ili dječji dnevni centar.";
}

// b1-kurs — important from LV etalon (not Terra MEDIUM with latvijskom)
const kurs = findStudy(words, "b1-kurs");
kurs.study.important = "U bosanskom riječ 'kurs' može imati nekoliko značenja, ali njemački kontekst određuje da li je riječ o nastavi, smjeru ili cijeni.";
if (kurs.study.sectionAccents?.important?.yellow) {
  const yellow = kurs.study.sectionAccents.important.yellow;
  if (Array.isArray(yellow)) {
    kurs.study.sectionAccents.important.yellow = yellow.map(() => "bosanskom");
  } else if (yellow === "latvijskom") {
    kurs.study.sectionAccents.important.yellow = "bosanskom";
  }
}

// b1-zeugnis — important.text from LV etalon
const zeugnis = findStudy(words, "b1-zeugnis");
if (zeugnis.study.important?.text) {
  zeugnis.study.important.text = "Ärztliches Zeugnis je na bosanskom često ljekarsko uvjerenje, ne školska svjedodžba.";
}

writeB1(BS_FILE, words);
writeB1(WWW_FILE, words);
console.log("Fixed 6 remaining LV remnants (b1-hort, b1-kurs, b1-zeugnis)");
