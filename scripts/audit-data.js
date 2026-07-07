// scripts/audit-data.js
// Datu audits: atrod ierakstus, kur galvenajā laukā (lv / study.translation)
// ir kaut kas, kam tur nevajadzētu būt. NEKO NELABO — tikai ziņo.
// Palaist no projekta saknes:  node scripts/audit-data.js

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const win = {};
const context = vm.createContext({ window: win, console });

const DATA_DIR = path.join(__dirname, "..", "data");
const DATA_FILES = [
  "a1.js", "a2.js", "b1.js", "b2.js", "c1.js", "c2.js",
  "sentences.js", "verbs.js", "comparisonStudy.js"
];

for (const file of DATA_FILES) {
  const full = path.join(DATA_DIR, file);
  if (!fs.existsSync(full)) {
    console.log(`⚠️  Nav atrasts: ${file} (izlaižu)`);
    continue;
  }
  try {
    vm.runInContext(fs.readFileSync(full, "utf8"), context, { filename: file });
  } catch (e) {
    console.log(`⚠️  Kļūda ielādējot ${file}: ${e.message}`);
  }
}

// Datu faili reģistrē A1_WORDS u.c.; window.wordEntries veido www/ui.js
function datasetWords(name) {
  const dataset = win[name];
  return Array.isArray(dataset) ? dataset : [];
}
const flashcards = [
  ...datasetWords("A1_WORDS"), ...datasetWords("A2_WORDS"),
  ...datasetWords("B1_WORDS"), ...datasetWords("B2_WORDS"),
  ...datasetWords("C1_WORDS"), ...datasetWords("C2_WORDS"),
  ...datasetWords("SENTENCE_ENTRIES"),
];
win.wordEntries = flashcards.filter((c) => c.level !== "Sätze");
win["sätze"] = flashcards.filter((c) => c.level === "Sätze");
win.sentenceEntries = win.sentenceEntries || [];
win.COMPARISON_STUDY_CARDS = win.COMPARISON_STUDY_CARDS || [];
for (const s of win["sätze"]) {
  if (!win.sentenceEntries.some((x) => x.de === s.de && x.lv === s.lv)) {
    win.sentenceEntries.push(s);
  }
}

const buckets = [
  ["wordEntries", win.wordEntries],
  ["sentenceEntries", win.sentenceEntries],
  ["sätze", win["sätze"]],
  ["COMPARISON_STUDY_CARDS", win.COMPARISON_STUDY_CARDS],
];

const all = [];
for (const [name, arr] of buckets) {
  if (Array.isArray(arr)) arr.forEach((e, i) => all.push({ source: name, index: i, entry: e }));
}

console.log(`\n📊 Kopā ielādēti ${all.length} ieraksti.\n`);

const CONTRACTIONS = ["vom","zum","zur","im","am","ans","ins","beim","aufs","fürs","durchs","ums","hinterm","überm","unterm","vorm"];
const GERMAN_HINT = /^(der|die|das|von|zu|in|an|auf|bei|mit|für|und|dem|den|des|ein|eine)\b/i;
const GERMAN_CHARS = /[äöüß]/i;

const findings = { c1: [], c2: [], c3: [], c4: [], c5: [] };

for (const item of all) {
  const e = item.entry;
  if (!e || typeof e !== "object") continue;

  const de = (e.de || e.front || "").trim();
  const lv = (e.lv || e.back || "").trim();
  const studyTr = ((e.study && e.study.translation) || "").trim();
  const loc = `${item.source}[${item.index}]  de="${de}"`;

  if (lv && (GERMAN_HINT.test(lv) || GERMAN_CHARS.test(lv)) && lv !== de) {
    findings.c1.push(`${loc}  lv="${lv}"`);
  }
  if (lv.includes("•") || studyTr.includes("•")) {
    findings.c2.push(`${loc}  lv="${lv}"${studyTr ? `  study.translation="${studyTr}"` : ""}`);
  }
  if (studyTr && lv && studyTr !== lv) {
    findings.c3.push(`${loc}  lv="${lv}"  study.translation="${studyTr}"`);
  }
  if (CONTRACTIONS.includes(de.toLowerCase()) && lv && (GERMAN_HINT.test(lv) || GERMAN_CHARS.test(lv)) && lv !== de) {
    findings.c4.push(`${loc}  lv="${lv}"`);
  }
  if (!lv) {
    findings.c5.push(`${loc}  (TUKŠS lv)`);
  } else if (e.study && (!e.study.explanation ||
             (Array.isArray(e.study.explanation) && e.study.explanation.length === 0))) {
    findings.c5.push(`${loc}  (study bez explanation)`);
  }
}

function report(title, arr) {
  console.log(`\n=== ${title}  (${arr.length}) ===`);
  if (!arr.length) { console.log("  ✅ nav atrasts"); return; }
  arr.forEach((l) => console.log("  • " + l));
}

report("KAT.1 — vācu teksts LV laukā (kā 'vom' -> 'von dem')", findings.c1);
report("KAT.2 — daudznozīmju virsraksts, • galvenajā laukā (kā 'laufen')", findings.c2);
report("KAT.3 — lv atšķiras no study.translation", findings.c3);
report("KAT.4 — priekšvārdu saplūšana kā vārds (vom/zum/im/am...)", findings.c4);
report("KAT.5 — tukši vai nepilnīgi ieraksti", findings.c5);

console.log(`\n📋 KOPĀ atzīmēti pārskatam: ${Object.values(findings).reduce((s,a)=>s+a.length,0)} ieraksti.\n`);
