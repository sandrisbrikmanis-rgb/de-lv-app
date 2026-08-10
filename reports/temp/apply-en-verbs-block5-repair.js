#!/usr/bin/env node
/**
 * EN-DE Verbs OWNER repair block 5/9 — mechanical lv-field replacements only.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.join(__dirname, "..", "..");

const REPAIRS = [
  { index: 105, field: "infinitiv", before: "cirpt", after: "to shear" },
  { index: 105, field: "praesens", before: "he is cutting", after: "he shears" },
  { index: 105, field: "imperfektIndikativ", before: "cirpa", after: "he sheared" },
  { index: 105, field: "partizipVergangenheit", before: "apcirpts", after: "shorn / sheared" },
  { index: 106, field: "infinitiv", before: "stumt", after: "to push" },
  { index: 106, field: "partizipVergangenheit", before: "stumts", after: "pushed" },
  { index: 108, field: "imperfektKonjunktiv", before: "tormented", after: "would torment" },
  { index: 110, field: "partizipVergangenheit", before: "sists", after: "hit" },
  { index: 111, field: "infinitiv", before: "it's raining", after: "to creep" },
  { index: 111, field: "praesens", before: "he leans", after: "he creeps" },
  { index: 111, field: "imperfektIndikativ", before: "he rained", after: "he crept" },
  { index: 111, field: "imperfektKonjunktiv", before: "he is raining", after: "he would creep" },
  { index: 111, field: "partizipVergangenheit", before: "passed away", after: "crept" },
  { index: 114, field: "infinitiv", before: "tomorrow", after: "to swallow" },
  { index: 114, field: "imperfektKonjunktiv", before: "he morning", after: "he would swallow" },
  { index: 114, field: "partizipVergangenheit", before: "the morning", after: "swallowed" },
  { index: 115, field: "infinitiv", before: "mest", after: "to throw" },
  { index: 115, field: "imperfektKonjunktiv", before: "he threw", after: "he would throw" },
  { index: 115, field: "partizipVergangenheit", before: "mests", after: "thrown" },
  { index: 116, field: "infinitiv", before: "kust", after: "to melt" },
  { index: 116, field: "imperfektIndikativ", before: "he moaned", after: "he melted" },
  { index: 116, field: "imperfektKonjunktiv", before: "he was moving", after: "he would melt" },
  { index: 116, field: "partizipVergangenheit", before: "kusis", after: "melted" },
  { index: 117, field: "infinitiv", before: "to hiss", after: "to snort" },
  { index: 118, field: "infinitiv", before: "griezt", after: "to cut" },
  { index: 118, field: "praesens", before: "he spins", after: "he cuts" },
  { index: 118, field: "partizipVergangenheit", before: "griezts", after: "cut" },
  { index: 120, field: "infinitiv", before: "kliegt", after: "to shout" },
  { index: 120, field: "partizipVergangenheit", before: "kliegts", after: "shouted" },
  { index: 123, field: "infinitiv", before: "pampt", after: "to swell" },
  { index: 123, field: "praesens", before: "he pouts", after: "he swells" },
  { index: 123, field: "imperfektIndikativ", before: "he pampas", after: "he swelled" },
  { index: 123, field: "imperfektKonjunktiv", before: "he would pump", after: "he would swell" },
  { index: 123, field: "partizipVergangenheit", before: "pampis", after: "swollen" },
  { index: 125, field: "infinitiv", before: "zust", after: "to disappear" },
  { index: 125, field: "partizipVergangenheit", before: "zudis", after: "disappeared" },
  { index: 129, field: "imperfektIndikativ", before: "bija", after: "he was" },
  { index: 129, field: "partizipVergangenheit", before: "bijis", after: "been" },
  { index: 131, field: "praesens", before: "he cooks", after: "he boils" },
  { index: 133, field: "infinitiv", before: "grimt", after: "to sink" },
  { index: 133, field: "partizipVergangenheit", before: "grimis", after: "sunk" },
  { index: 136, field: "praesens", before: "he needs", after: "he should / he is supposed to" },
  { index: 136, field: "imperfektIndikativ", before: "should have", after: "he was supposed to" },
  { index: 136, field: "imperfektKonjunktiv", before: "should have", after: "he should" },
  { index: 139, field: "infinitiv", before: "savienot", after: "to splice" },
  { index: 139, field: "imperfektIndikativ", before: "savienoja", after: "spliced" },
];

const DE_SOURCE_ISSUE = [
  "verb-105-scheren/imperfektKonjunktiv stays cirpa",
  "verb-117-schnauben/imperfektKonjunktiv stays snorted",
  "verb-129-sein/imperfektKonjunktiv stays bija",
  "verb-131-sieden/imperfektKonjunktiv stays cooked",
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
    path.join(ROOT, "reports/temp/en-verbs-repair-block5-log.json"),
    JSON.stringify({ applied, repairs: log, deSourceIssue: DE_SOURCE_ISSUE }, null, 2)
  );
  console.log(JSON.stringify({ applied, deFieldsChanged: 0 }, null, 2));
}

main();
