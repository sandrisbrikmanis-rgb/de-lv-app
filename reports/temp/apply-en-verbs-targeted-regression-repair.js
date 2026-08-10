#!/usr/bin/env node
/**
 * EN-DE Verbs targeted regression OWNER repair — 19 mechanical lv-field replacements.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.join(__dirname, "..", "..");

const REPAIRS = [
  { index: 27, verbId: "verb-27-kennen", field: "imperfektKonjunktiv", before: "pazina", after: "knew" },
  { index: 34, verbId: "verb-34-brennen", field: "imperfektKonjunktiv", before: "dega", after: "burned" },
  { index: 60, verbId: "verb-60-haben", field: "imperfektIndikativ", before: "bija", after: "had" },
  { index: 68, verbId: "verb-68-lassen", field: "imperfektIndikativ", before: "he ordered / allowed", after: "he ordered • allowed" },
  { index: 80, verbId: "verb-80-mögen", field: "imperfektKonjunktiv", before: "patika", after: "liked" },
  { index: 83, verbId: "verb-83-nennen", field: "partizipVergangenheit", before: "nosaukts", after: "named" },
  { index: 84, verbId: "verb-84-pfeifen", field: "partizipVergangenheit", before: "svilpots", after: "whistled" },
  { index: 85, verbId: "verb-85-pflegen", field: "imperfektKonjunktiv", before: "kopa", after: "cared for" },
  { index: 95, verbId: "verb-95-rinnen", field: "partizipVergangenheit", before: "flowed", after: "flowed / coagulated" },
  { index: 98, verbId: "verb-98-saufen", field: "infinitiv", before: "to drink heavily", after: "to drink heavily / to drink" },
  { index: 98, verbId: "verb-98-saufen", field: "praesens", before: "he drinks heavily", after: "he drinks heavily / he drinks" },
  { index: 98, verbId: "verb-98-saufen", field: "imperfektIndikativ", before: "he drank / drank", after: "he drank heavily / he drank" },
  { index: 98, verbId: "verb-98-saufen", field: "imperfektKonjunktiv", before: "he would drink heavily", after: "he would drink heavily / he would drink" },
  { index: 105, verbId: "verb-105-scheren", field: "imperfektKonjunktiv", before: "cirpa", after: "he would shear" },
  { index: 110, verbId: "verb-110-schlagen", field: "infinitiv", before: "sist", after: "to hit" },
  { index: 129, verbId: "verb-129-sein", field: "imperfektKonjunktiv", before: "bija", after: "he was" },
  { index: 156, verbId: "verb-156-treiben", field: "praesens", before: "he drives", after: "he chases" },
  { index: 156, verbId: "verb-156-treiben", field: "imperfektIndikativ", before: "he drove", after: "he chased" },
  { index: 156, verbId: "verb-156-treiben", field: "imperfektKonjunktiv", before: "he would drive", after: "he would chase" },
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
  const log = { applied: [], preconditionMismatch: [], deFieldsChanged: 0 };

  for (const r of REPAIRS) {
    const entry = entries[r.index];
    const form = entry[r.field];
    if (form.lv !== r.before) {
      log.preconditionMismatch.push({
        verbId: r.verbId,
        field: r.field,
        expected: r.before,
        actual: form.lv,
      });
      continue;
    }
    form.lv = r.after;
    log.applied.push({
      verbId: r.verbId,
      field: r.field,
      de: form.de,
      before: r.before,
      after: r.after,
    });
  }

  if (log.preconditionMismatch.length > 0) {
    fs.writeFileSync(path.join(ROOT, "reports/temp/en-verbs-targeted-regression-repair-log.json"), JSON.stringify(log, null, 2));
    console.error("PRECONDITION_MISMATCH", log.preconditionMismatch.length);
    process.exit(1);
  }

  const header = "const VERB_ENTRIES = ";
  const footer = "\n\nwindow.VERB_ENTRIES = VERB_ENTRIES;\n";
  const content = header + JSON.stringify(entries, null, 2) + ";" + footer;
  fs.writeFileSync(path.join(ROOT, "data/en/verbs.js"), content);
  fs.writeFileSync(path.join(ROOT, "www/data/en/verbs.js"), content);

  const uniqueVerbs = new Set(REPAIRS.map((r) => r.verbId)).size;
  log.summary = {
    repairsApplied: log.applied.length,
    uniqueRepairedVerbs: uniqueVerbs,
    preconditionMismatch: 0,
  };
  fs.writeFileSync(path.join(ROOT, "reports/temp/en-verbs-targeted-regression-repair-log.json"), JSON.stringify(log, null, 2));
  console.log(JSON.stringify(log.summary, null, 2));
}

main();
