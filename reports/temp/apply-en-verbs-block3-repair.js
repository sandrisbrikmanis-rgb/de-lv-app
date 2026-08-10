#!/usr/bin/env node
/**
 * EN-DE Verbs OWNER repair block 3/9 — mechanical lv-field replacements only.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.join(__dirname, "..", "..");

const REPAIRS = [
  { index: 55, field: "infinitiv", before: "salt", after: "to freeze" },
  { index: 55, field: "imperfektIndikativ", before: "he island", after: "he froze" },
  { index: 55, field: "imperfektKonjunktiv", before: "he was freezing", after: "he would freeze" },
  { index: 55, field: "partizipVergangenheit", before: "salis", after: "frozen" },
  { index: 56, field: "infinitiv", before: "dot", after: "to give" },
  { index: 56, field: "partizipVergangenheit", before: "dots", after: "given" },
  { index: 57, field: "infinitiv", before: "izdoties", after: "to thrive" },
  { index: 57, field: "partizipVergangenheit", before: "izdevies", after: "thrived" },
  { index: 58, field: "infinitiv", before: "iet", after: "to go" },
  { index: 58, field: "partizipVergangenheit", before: "went", after: "gone" },
  { index: 60, field: "infinitiv", before: "to be / to belong", after: "to have" },
  { index: 60, field: "partizipVergangenheit", before: "bijis", after: "had" },
  { index: 61, field: "praesens", before: "he there", after: "he holds" },
  { index: 62, field: "infinitiv", before: "saukt", after: "to call / to be called" },
  { index: 62, field: "partizipVergangenheit", before: "saukts", after: "called" },
  { index: 65, field: "partizipVergangenheit", before: "could", after: "been able to" },
  { index: 66, field: "infinitiv", before: "it's raining", after: "to crawl" },
  { index: 66, field: "praesens", before: "he leans", after: "he crawls" },
  { index: 66, field: "imperfektIndikativ", before: "he rained", after: "he crawled" },
  { index: 66, field: "imperfektKonjunktiv", before: "he is raining", after: "he would crawl" },
  { index: 66, field: "partizipVergangenheit", before: "passed away", after: "crawled" },
  { index: 69, field: "infinitiv", before: "skriet", after: "to run" },
  { index: 70, field: "infinitiv", before: "ciest", after: "to suffer" },
  { index: 70, field: "partizipVergangenheit", before: "ciests", after: "suffered" },
  { index: 73, field: "infinitiv", before: "to sleep", after: "to lie" },
  { index: 73, field: "praesens", before: "he is sleeping", after: "he lies" },
  { index: 73, field: "imperfektIndikativ", before: "he was sleeping", after: "he lay" },
  { index: 73, field: "imperfektKonjunktiv", before: "he would sleep", after: "he would lie" },
  { index: 73, field: "partizipVergangenheit", before: "slept", after: "lain" },
  { index: 74, field: "infinitiv", before: "melot", after: "to lie" },
  { index: 74, field: "partizipVergangenheit", before: "melots", after: "lied" },
  { index: 75, field: "infinitiv", before: "malt", after: "to grind" },
  { index: 75, field: "imperfektIndikativ", before: "he edge", after: "he ground" },
  { index: 75, field: "partizipVergangenheit", before: "malts", after: "ground" },
  { index: 77, field: "infinitiv", before: "slaukt", after: "to milk" },
  { index: 77, field: "praesens", before: "he sweeps", after: "he milks" },
  { index: 77, field: "imperfektIndikativ", before: "he swept", after: "he milked" },
  { index: 77, field: "partizipVergangenheit", before: "slaukts", after: "milked" },
  { index: 79, field: "infinitiv", before: "neizdoties", after: "to fail" },
  { index: 79, field: "praesens", before: "tas neizdodas", after: "it fails" },
  { index: 79, field: "partizipVergangenheit", before: "neizdevies", after: "failed" },
  { index: 80, field: "infinitiv", before: "patikt", after: "to like" },
  { index: 80, field: "imperfektIndikativ", before: "patika", after: "liked" },
  { index: 80, field: "partizipVergangenheit", before: "paticis", after: "liked" },
  { index: 81, field: "imperfektIndikativ", before: "should have", after: "had to" },
  { index: 83, field: "infinitiv", before: "nosaukt", after: "to name" },
];

const DE_SOURCE_ISSUE = [
  "verb-60-haben/imperfektKonjunktiv stays bija",
  "verb-75-mahlen/imperfektKonjunktiv stays he grinds",
  "verb-80-mögen/imperfektKonjunktiv stays patika",
  "verb-81-müssen/imperfektKonjunktiv stays should have",
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
    path.join(ROOT, "reports/temp/en-verbs-repair-block3-log.json"),
    JSON.stringify({ applied, repairs: log, deSourceIssue: DE_SOURCE_ISSUE }, null, 2)
  );
  console.log(JSON.stringify({ applied, deFieldsChanged: 0 }, null, 2));
}

main();
