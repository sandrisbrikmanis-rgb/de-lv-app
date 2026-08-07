#!/usr/bin/env node
/**
 * Apply only audit-identified BS A2 fixes from reports/bs-a2-full-audit.md
 * Run: node scripts/apply-bs-a2-audit-fixes.js
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./lib/audit-common");

const BS_FILE = path.join(ROOT, "data", "bs", "a2.js");
const WWW_FILE = path.join(ROOT, "www", "data", "bs", "a2.js");

function loadWords(filePath) {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.A2_WORDS;
}

function writeA2(filePath, data) {
  const json = JSON.stringify(data, null, 2);
  fs.writeFileSync(filePath, `const A2_WORDS = ${json};\n\nwindow.A2_WORDS = A2_WORDS;\n`, "utf8");
}

function findStudy(words, id) {
  const entry = words.find((e) => e.study?.id === id);
  if (!entry) throw new Error(`Study card not found: ${id}`);
  return entry.study;
}

const words = loadWords(BS_FILE);

// 1. Critical: a2-holen DE sectionAccents restore holen
const holen = findStudy(words, "a2-holen");
holen.sectionAccents.examples[1].de.green = ["holen", "holen"];

// 2. HIGH sectionAccents (15)
const brav = findStudy(words, "a2-brav");
brav.sectionAccents.examples[4].lv.orange[0] = "dobra";

const davor = findStudy(words, "a2-davor");
davor.sectionAccents.examples[3].lv.purple[0] = "upozorio";

const dazu = findStudy(words, "a2-dazu");
dazu.sectionAccents.explanation.text.purple[2] = "dodato";
dazu.sectionAccents.examples[1].lv.purple[0] = "uz to";
dazu.sectionAccents.comparison[0].meaning.purple[2] = "uz to";
dazu.sectionAccents.important[1].text.purple[1] = "uz to";

const durch = findStudy(words, "a2-durch");
durch.sectionAccents.examples[2].lv.purple[0] = "mnogo";

const fall = findStudy(words, "a2-fall");
fall.sectionAccents.comparison[0].example.blue[0] = "U";
fall.sectionAccents.comparison[0].example.blue[3] = "ću";

// a2-indem comparison[2].meaning.purple[0]: audit flags "To" as EN remnant, but
// study.comparison[2].meaning is literally "To" — changing accent breaks technical validation.

const kaum = findStudy(words, "a2-kaum");
kaum.sectionAccents.examples[4].lv.purple[0] = "skoro";

const klar = findStudy(words, "a2-klar");
klar.sectionAccents.tip.leftBlocks[1].text.yellow[5] = "sve";

const meinen = findStudy(words, "a2-meinen");
meinen.sectionAccents.examples[4].lv.purple[0] = "to";

const naGut = findStudy(words, "a2-na-gut");
naGut.sectionAccents.comparison[1].example.purple[0] = "dobro";

const teil = findStudy(words, "a2-teil");
teil.sectionAccents.examples[0].lv.purple[0] = "priče";

// 3. Legacy accents (LV remnants)
const abfahren = findStudy(words, "a2-abfahren");
abfahren.accents.purple[5] = "Voziti";

const bahn = findStudy(words, "a2-bahn");
bahn.sectionAccents.tip.leftBlocks[0].text.purple[0] = "putovati vozom";
bahn.accents.purple[3] = "putovati vozom";

const fuhren = findStudy(words, "a2-führen");
fuhren.sectionAccents.tip.leftBlocks[0].text.orange[0] = "voditi";
fuhren.sectionAccents.tip.leftBlocks[0].text.yellow[4] = "nekamo";
fuhren.accents.blue[16] = "voditi";
fuhren.accents.green[1] = "voziti sa transportom";
fuhren.accents.orange[2] = "Voziti";
fuhren.accents.orange[3] = "voditi";
fuhren.accents.purple[2] = "Voziti / voziti sa transportom";

writeA2(BS_FILE, words);
writeA2(WWW_FILE, words);

console.log("Applied BS A2 audit fixes to data/bs/a2.js and www/data/bs/a2.js");
