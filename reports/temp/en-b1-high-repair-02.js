#!/usr/bin/env node
/**
 * EN-DE B1 HIGH REPAIR #2 — 25 owner-approved cards (deterministic).
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.join(__dirname, "..", "..");

const CARD_IDS = [
  "b1-weder",
  "b1-zeugnis",
  "b1-sich-befinden-study",
  "b1-beruf",
  "b1-Umgebung-6",
  "b1-Aktentasche-8",
  "b1-Alarm-11",
  "b1-Angehörige-23",
  "b1-abfragen-46",
  "b1-abhängig-54",
  "b1-Ablauf-59",
  "b1-absichern-80",
  "b1-absperren-84",
  "b1-abschaffen-71",
  "b1-Ambulanz-106",
  "b1-Anklang-115",
  "b1-anknüpfen-116",
  "b1-Anlauf-117",
  "b1-anlehnen-120",
  "b1-anliegend-122",
  "b1-Anrede-129",
  "b1-Ansager-135",
  "b1-anschaulich-136",
  "b1-anschreiben-141",
  "b1-Ansichtskarte-146",
];

const NORMAL_LV = {
  Umgebung: "Surroundings",
  Aktentasche: "Briefcase",
  Alarm: "Alarm",
  Angehörige: "Relative",
  abfragen: "To query / to test",
  abhängig: "Dependent",
  Ablauf: "Process / sequence",
  absichern: "To secure / safeguard",
  absperren: "To cordon off / block",
  abschaffen: "To abolish",
  Ambulanz: "Outpatient clinic",
  Anklang: "Appeal / resonance",
  anknüpfen: "To connect / build on",
  Anlauf: "Run-up / attempt",
  anlehnen: "To lean against",
  anliegend: "Attached / enclosed",
  Anrede: "Form of address / salutation",
  Ansager: "Announcer",
  anschaulich: "Clear / vivid",
  anschreiben: "To write to",
  Ansichtskarte: "Postcard",
};

function load(rel) {
  const code = fs.readFileSync(path.join(ROOT, rel), "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.B1_WORDS;
}

function serializeB1(words) {
  const lines = ["const B1_WORDS = ["];
  for (const w of words) {
    lines.push("  " + JSON.stringify(w, null, 2).replace(/\n/g, "\n  ") + ",");
  }
  lines.push("];\n\nwindow.B1_WORDS = B1_WORDS;\n");
  return lines.join("\n");
}

function findEntryByStudyId(words, id) {
  return words.find((w) => w.study?.id === id);
}

const words = load("data/en/b1.js");
const log = [];

function note(cardId, field, value) {
  log.push({ cardId, field, value });
}

// 01 b1-weder
const wed = findEntryByStudyId(words, "b1-weder").study;
wed.explanation =
  "Main idea: weder is used with noch. The construction weder ... noch means neither ... nor.";
wed.sectionAccents.comparison[1].meaning.purple = "Either ... or";
wed.sectionAccents.comparison[0].meaning.purple = "Neither";
wed.sectionAccents.comparison[2].meaning.purple = "Both";
note("b1-weder", "study.explanation", wed.explanation);
note("b1-weder", "sectionAccents.comparison[1].meaning.purple", "Either ... or");

// 02 b1-zeugnis
const zeuEntry = findEntryByStudyId(words, "b1-zeugnis");
const zeu = zeuEntry.study;
zeuEntry.lv = "Certificate / school report";
zeu.translation = "Certificate / school report";
zeu.explanation =
  "Main idea: das Zeugnis means a testimony, certificate or official statement. In a school context, das Zeugnis usually means a school report or report card.";
zeu.examples[0].lv = "The child receives a school report today.";
zeu.important.text =
  "ärztliches Zeugnis means a medical certificate or doctor's note, not a school report.";
zeu.comparison[0].meaning = "Testimony, certificate, official statement";
zeu.comparison[1].meaning = "Certificate, confirmation";
zeu.sectionAccents.examples[0].lv.purple = ["school report"];
zeu.sectionAccents.examples[1].lv.red = "doctor's note";
zeu.sectionAccents.important.red = "doctor's note";
zeu.sectionAccents.comparison[1].meaning.purple = "Certificate";
zeu.sectionAccents.comparison[2].meaning.purple = "A witness";
zeu.sectionAccents.tip.leftBlocks[0].text.purple = ["confirms"];
note("b1-zeugnis", "study.translation", zeu.translation);

// 03 b1-sich-befinden-study
const bef = findEntryByStudyId(words, "b1-sich-befinden-study").study;
bef.tip.leftBlocks[1].text =
  "To say “to feel,” use sich fühlen, not sich befinden.";
bef.comparison[2].meaning = "To lie / to be located";
bef.sectionAccents.examples[4].lv.purple = ["I feel"];
bef.sectionAccents.comparison[2].meaning.purple = ["lie", "located"];
bef.sectionAccents.tip.leftBlocks[0].text.purple = ["located"];
bef.sectionAccents.tip.leftBlocks[1].text.purple = ["feel"];
bef.sectionAccents.important[0].example.purple = ["feel"];
if (bef.accents?.purple) {
  bef.accents.purple = ["located", "feel", "location"];
}
note("b1-sich-befinden-study", "study.tip.leftBlocks[1].text", bef.tip.leftBlocks[1].text);

// 04 b1-beruf
const ber = findEntryByStudyId(words, "b1-beruf").study;
ber.examples[0].lv = "What is your profession?";
ber.examples[1].lv = "I am a teacher.";
ber.important.text = "Beruf usually refers to a person's profession or field of work.";
ber.sectionAccents.examples[1].lv.purple = ["teacher"];
ber.sectionAccents.tip.leftBlocks[0].text.purple = ["profession"];
ber.sectionAccents.tip.leftBlocks[1].text.purple = ["work"];
if (ber.accents?.purple) {
  ber.accents.purple = ["profession", "occupation", "work"];
}
note("b1-beruf", "study.examples[1].lv", ber.examples[1].lv);

// 05–25 normal cards
function findByDe(words, de) {
  return words.find((w) => w.de === de);
}

for (const [de, lv] of Object.entries(NORMAL_LV)) {
  const entry = findByDe(words, de);
  if (!entry) throw new Error(`Missing normal card: ${de}`);
  entry.lv = lv;
  note(`b1-${de}`, "lv", lv);
}

const out = serializeB1(words);
fs.writeFileSync(path.join(ROOT, "data/en/b1.js"), out);
fs.writeFileSync(path.join(ROOT, "www/data/en/b1.js"), out);
fs.writeFileSync(
  path.join(ROOT, "reports/temp/en-b1-high-repair-02-log.json"),
  JSON.stringify({ cards: CARD_IDS, changes: log }, null, 2)
);
console.log("Repair #2 applied:", log.length, "logged changes");
