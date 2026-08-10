#!/usr/bin/env node
/**
 * EN-DE Verbs OWNER repair block 9/9 — mechanical lv-field replacements only.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.join(__dirname, "..", "..");

const REPAIRS = [
  { index: 162, field: "partizipVergangenheit", before: "upset", after: "annoyed" },
  { index: 165, field: "imperfektIndikativ", before: "he was growing up", after: "he grew" },
  { index: 169, field: "infinitiv", before: "show", after: "to show" },
  { index: 170, field: "infinitiv", before: "modify / crop", after: "to turn / to reverse" },
  { index: 170, field: "praesens", before: "he twists / turns", after: "he turns / reverses" },
  { index: 170, field: "imperfektIndikativ", before: "he twisted / turned", after: "he turned / reversed" },
  { index: 170, field: "imperfektKonjunktiv", before: "he would amend / reverse", after: "he would turn / reverse" },
  { index: 170, field: "partizipVergangenheit", before: "amended / reversed", after: "turned / reversed" },
  { index: 174, field: "partizipVergangenheit", before: "weighted", after: "weighed" },
  { index: 175, field: "infinitiv", before: "braid", after: "to braid" },
  { index: 177, field: "infinitiv", before: "want to", after: "to want" },
  { index: 177, field: "partizipVergangenheit", before: "wanted to", after: "wanted" },
  { index: 180, field: "imperfektKonjunktiv", before: "he would drag", after: "he would pull" },
  { index: 184, field: "imperfektIndikativ", before: "he struggled", after: "he fought" },
  { index: 185, field: "infinitiv", before: "braid", after: "to braid" },
  { index: 186, field: "imperfektKonjunktiv", before: "he would hang himself", after: "he would hang" },
  { index: 58, field: "imperfektIndikativ", before: "he walked", after: "he went" },
  { index: 151, field: "infinitiv", before: "push", after: "to push" },
  { index: 153, field: "praesens", before: "he is fighting", after: "he fights" },
  { index: 156, field: "infinitiv", before: "chase", after: "to chase" },
  { index: 157, field: "infinitiv", before: "enter / go", after: "to enter / to go" },
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
    path.join(ROOT, "reports/temp/en-verbs-repair-block9-log.json"),
    JSON.stringify({ applied, repairs: log, cumulativeFindings: 421 }, null, 2)
  );
  console.log(JSON.stringify({ applied, deFieldsChanged: 0, cumulativeFindings: 421 }, null, 2));
}

main();
