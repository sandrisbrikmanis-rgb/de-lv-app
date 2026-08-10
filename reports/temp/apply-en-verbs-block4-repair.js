#!/usr/bin/env node
/**
 * EN-DE Verbs OWNER repair block 4/9 — mechanical lv-field replacements only.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.join(__dirname, "..", "..");

const REPAIRS = [
  { index: 83, field: "praesens", before: "he named", after: "he names" },
  { index: 84, field: "infinitiv", before: "svilpot", after: "to whistle" },
  { index: 85, field: "infinitiv", before: "kopt", after: "to care for" },
  { index: 85, field: "imperfektIndikativ", before: "kopa", after: "cared for" },
  { index: 85, field: "partizipVergangenheit", before: "kopts", after: "cared for" },
  { index: 87, field: "infinitiv", before: "briest", after: "to swell" },
  { index: 87, field: "praesens", before: "he is getting fat", after: "he swells" },
  { index: 87, field: "imperfektIndikativ", before: "he matured", after: "he swelled" },
  { index: 87, field: "imperfektKonjunktiv", before: "he fat", after: "he would swell" },
  { index: 87, field: "partizipVergangenheit", before: "uzbriedis", after: "swollen" },
  { index: 88, field: "infinitiv", before: "suggest / mention", after: "to advise / to guess" },
  { index: 88, field: "praesens", before: "he recommends / min", after: "he advises / he guesses" },
  { index: 88, field: "imperfektIndikativ", before: "he suggested / suggested", after: "he advised / he guessed" },
  { index: 88, field: "imperfektKonjunktiv", before: "he would suggest / mention", after: "he would advise / he would guess" },
  { index: 88, field: "partizipVergangenheit", before: "suggested / mentioned", after: "advised / guessed" },
  { index: 89, field: "infinitiv", before: "berzt", after: "to rub" },
  { index: 89, field: "imperfektIndikativ", before: "he rubs", after: "he rubbed" },
  { index: 89, field: "partizipVergangenheit", before: "berzts", after: "rubbed" },
  { index: 90, field: "infinitiv", before: "raut", after: "to tear" },
  { index: 90, field: "imperfektKonjunktiv", before: "he snapped", after: "he would tear" },
  { index: 90, field: "partizipVergangenheit", before: "rauts", after: "torn" },
  { index: 91, field: "partizipVergangenheit", before: "rode", after: "ridden" },
  { index: 92, field: "infinitiv", before: "skriet", after: "to run" },
  { index: 92, field: "partizipVergangenheit", before: "ran", after: "run" },
  { index: 93, field: "infinitiv", before: "ost", after: "to smell" },
  { index: 93, field: "imperfektIndikativ", before: "he sings", after: "he smelled" },
  { index: 93, field: "imperfektKonjunktiv", before: "he port", after: "he would smell" },
  { index: 93, field: "partizipVergangenheit", before: "osts", after: "smelled" },
  { index: 94, field: "infinitiv", before: "lauzties", after: "to wrestle" },
  { index: 94, field: "praesens", before: "he breaks", after: "he wrestles" },
  { index: 94, field: "imperfektIndikativ", before: "he broke down", after: "he wrestled" },
  { index: 94, field: "imperfektKonjunktiv", before: "he would break", after: "he would wrestle" },
  { index: 94, field: "partizipVergangenheit", before: "laucies", after: "wrestled" },
  { index: 95, field: "praesens", before: "he runs", after: "he flows" },
  { index: 95, field: "imperfektIndikativ", before: "he ran", after: "he flowed" },
  { index: 95, field: "imperfektKonjunktiv", before: "he would run", after: "he would flow" },
  { index: 96, field: "infinitiv", before: "saukt", after: "to call" },
  { index: 96, field: "partizipVergangenheit", before: "saukts", after: "called" },
  { index: 97, field: "praesens", before: "he salted", after: "he salts" },
  { index: 98, field: "infinitiv", before: "dry / drink", after: "to drink heavily" },
  { index: 98, field: "imperfektKonjunktiv", before: "he would drink / drink", after: "he would drink heavily" },
  { index: 98, field: "partizipVergangenheit", before: "dzerts", after: "drunk" },
  { index: 101, field: "praesens", before: "tas skan", after: "it sounds" },
  { index: 102, field: "imperfektKonjunktiv", before: "he would divorce / divorce", after: "he would divorce / he would separate" },
  { index: 104, field: "infinitiv", before: "bart", after: "to scold" },
  { index: 104, field: "imperfektIndikativ", before: "he barred", after: "he scolded" },
  { index: 104, field: "imperfektKonjunktiv", before: "he shaves", after: "he would scold" },
  { index: 104, field: "partizipVergangenheit", before: "beard", after: "scolded" },
];

const DE_SOURCE_ISSUE = [
  "verb-85-pflegen/imperfektKonjunktiv stays kopa",
  "verb-101-schallen/imperfektKonjunktiv stays sounded",
];

function load(rel) {
  const code = fs.readFileSync(path.join(ROOT, rel), "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.VERB_ENTRIES;
}

function main() {
  const entries = load("data/en/verbs.js");
  const log = [];
  let applied = 0;

  for (const r of REPAIRS) {
    const entry = entries[r.index];
    const form = entry[r.field];
    if (form.lv !== r.before) {
      console.error(`MISMATCH index=${r.index} field=${r.field} expected="${r.before}" got="${form.lv}"`);
      process.exit(1);
    }
    form.lv = r.after;
    applied++;
    log.push({ index: r.index, infinitiv: entry.infinitiv.de, field: r.field, before: r.before, after: r.after });
  }

  const header = "const VERB_ENTRIES = ";
  const footer = "\n\nwindow.VERB_ENTRIES = VERB_ENTRIES;\n";
  const content = header + JSON.stringify(entries, null, 2) + ";" + footer;
  fs.writeFileSync(path.join(ROOT, "data/en/verbs.js"), content);
  fs.writeFileSync(path.join(ROOT, "www/data/en/verbs.js"), content);

  fs.writeFileSync(
    path.join(ROOT, "reports/temp/en-verbs-repair-block4-log.json"),
    JSON.stringify({ applied, repairs: log, deSourceIssue: DE_SOURCE_ISSUE }, null, 2)
  );
  console.log(JSON.stringify({ applied, deFieldsChanged: 0 }, null, 2));
}

main();
