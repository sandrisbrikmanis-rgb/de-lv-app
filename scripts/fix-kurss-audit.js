/**
 * Apply Kurss content audit fixes to data/courseLessons.js
 * Usage: node scripts/fix-kurss-audit.js [--dry-run]
 */
const fs = require("fs");
const path = require("path");

const dryRun = process.argv.includes("--dry-run");
const bullet = "\u2022";
const files = [
  path.join(__dirname, "../data/courseLessons.js"),
  path.join(__dirname, "../www/data/courseLessons.js"),
];

let content = fs.readFileSync(files[0], "utf8");
const before = content;

// 1. Modern German orthography: ß → ss in verb conjugations (verbs.js audit rule)
// Note: \b does not work after ß in JS regex, so avoid \b before ß-ending forms.
const eszettFixes = [
  [/\bIßt\b/g, "Isst"],
  [/\bißt\b/g, "isst"],
  [/\beßt\b/g, "esst"],
  [/\bmußt\b/g, "musst"],
  [/\bmüßt\b/g, "müsst"],
  [/muß/g, "muss"],
  [/\bMuß\b/g, "Muss"],
];
for (const [re, rep] of eszettFixes) content = content.replace(re, rep);

// 2. LV semicolons as meaning separators → bullet (vocab / multi-meaning)
content = content.replace(/rotaļāties; spēlēt/g, `rotaļāties ${bullet} spēlēt`);

// Lesson 6 grammar example lines: semicolons between example groups → bullet
content = content.replace(
  /er legt hin; aufmachen — er macht auf; anspitzen — er spitzt an\./g,
  `er legt hin ${bullet} aufmachen — er macht auf ${bullet} anspitzen — er spitzt an.`
);
content = content.replace(
  /ein Schüler — viens skolnieks; eine Schülerin — viena skolniece; ein Kind — viens bērns\./g,
  `ein Schüler — viens skolnieks ${bullet} eine Schülerin — viena skolniece ${bullet} ein Kind — viens bērns.`
);
content = content.replace(
  /das ist ein Hammer; tā ir adata — das ist eine Nadel; tie ir veseri — das sind Hämmer; tās ir adatas — das sind Nadeln\./g,
  `das ist ein Hammer ${bullet} tā ir adata — das ist eine Nadel ${bullet} tie ir veseri — das sind Hämmer ${bullet} tās ir adatas — das sind Nadeln.`
);
content = content.replace(
  /die Hämmer; der Garten — die Gärten; das Fenster — die Fenster; das Messer — die Messer\./g,
  `die Hämmer ${bullet} der Garten — die Gärten ${bullet} das Fenster — die Fenster ${bullet} das Messer — die Messer.`
);
content = content.replace(
  /die Nadeln; die Feder — die Federn\./g,
  `die Nadeln ${bullet} die Feder — die Federn.`
);
content = content.replace(
  /die Mütter \(mātes\); die Tochter \(meita\) — die Töchter \(meitas\)\./g,
  `die Mütter (mātes) ${bullet} die Tochter (meita) — die Töchter (meitas).`
);
content = content.replace(
  /das sind Wagen; das ist eine Nadel — das sind Nadeln\./g,
  `das sind Wagen ${bullet} das ist eine Nadel — das sind Nadeln.`
);

// 3. Consistent terminology: skolēni → skolnieki
content = content.replace(/Visi skolēni/g, "Visi skolnieki");

// 4. Mistranslation: reflexive imperative
content = content.replace(/Paul, sēdini sevi!/g, "Paul, sēdies!");

// 5. Remove exact duplicate translate card in lesson 8 Übung
content = content.replace(
  /,\s*\{\s*type: "translate",\s*lv: "Nerunā klusi!",\s*de: "Sprich nicht leise!"\s*\},\s*\{\s*type: "translate",\s*lv: "Lasiet labi!"/,
  ', { type: "translate", lv: "Lasiet labi!"'
);

// 6. Update ß pronunciation/grammar notes for lesson 14/15 to match modern forms
content = content.replace(
  /ß raksta vārda vidū vai beigās pēc gara patskaņa vai divskaņa: die Füße, die Straße, ich muß, er muß\./g,
  `ß raksta vārda vidū vai beigās pēc gara patskaņa vai divskaņa: die Füße, die Straße, groß, weiß. Saliktajās darbības vārdu formās mūsdienās bieži raksta ss: ich muss, er isst.`
);
content = content.replace(
  /Ja citās formās ir ss, tad pirms galotnes var būt ß: müssen, ich muss, du musst, ihr müsst\./g,
  `Piemēram: müssen — ich muss, du musst, er muss; essen — ich esse, du isst, er isst.`
);
content = content.replace(
  /er legt den Schlüssel hin; dann legt er den Schlüssel hin\./g,
  `er legt den Schlüssel hin ${bullet} dann legt er den Schlüssel hin.`
);
content = content.replace(
  /der Schüler ist klein; die Schüler sind klein\./g,
  `der Schüler ist klein ${bullet} die Schüler sind klein.`
);
// Lesson 15 comparison still had old muß forms in examples
content = content.replace(/Ich muß lernen\./g, "Ich muss lernen.");

// 7. Vocab slash separators with spaces: normalize "resns / biezs" style is fine; fix semicolon in dick if any
content = content.replace(/vajadzēt \/ būt jādara/g, `vajadzēt ${bullet} būt jādara`);

const changes = before !== content;
console.log(changes ? "Applied Kurss audit fixes." : "No changes needed.");
if (changes && !dryRun) {
  for (const file of files) {
    fs.writeFileSync(file, content, "utf8");
    console.log("Wrote", file);
  }
} else if (dryRun) {
  console.log("Dry run — no files written.");
}

// Report remaining ß in conjugation-like contexts
const remain = [...content.matchAll(/\b\w*ß\w*\b/g)].map((m) => m[0]);
console.log("Remaining ß words:", [...new Set(remain)].sort().join(", "));
