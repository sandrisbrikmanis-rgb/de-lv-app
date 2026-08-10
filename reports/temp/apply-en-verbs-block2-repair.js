#!/usr/bin/env node
/**
 * EN-DE Verbs OWNER repair block 2/9 — mechanical lv-field replacements only.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.join(__dirname, "..", "..");

const REPAIRS = [
  { index: 30, field: "infinitiv", before: "palikt", after: "to stay" },
  { index: 30, field: "partizipVergangenheit", before: "palicis", after: "stayed" },
  { index: 32, field: "infinitiv", before: "cept", after: "to fry / to roast" },
  { index: 32, field: "praesens", before: "he bakes", after: "he fries / roasts" },
  { index: 32, field: "imperfektIndikativ", before: "he was baking", after: "he fried / roasted" },
  { index: 32, field: "imperfektKonjunktiv", before: "he would bake", after: "he would fry / roast" },
  { index: 32, field: "partizipVergangenheit", before: "cepts / izcepts", after: "fried / roasted" },
  { index: 33, field: "infinitiv", before: "lauzt", after: "to break" },
  { index: 33, field: "partizipVergangenheit", before: "lauzts / salauzts", after: "broken" },
  { index: 34, field: "infinitiv", before: "degt", after: "to burn" },
  { index: 34, field: "imperfektIndikativ", before: "dega", after: "burned" },
  { index: 34, field: "partizipVergangenheit", before: "dedzis", after: "burned" },
  { index: 35, field: "infinitiv", before: "nest", after: "to bring" },
  { index: 35, field: "praesens", before: "he carries", after: "he brings" },
  { index: 35, field: "imperfektIndikativ", before: "he carried", after: "he brought" },
  { index: 35, field: "imperfektKonjunktiv", before: "he would carry", after: "he would bring" },
  { index: 35, field: "partizipVergangenheit", before: "nests / atnests", after: "brought" },
  { index: 38, field: "infinitiv", before: "kult", after: "to thresh" },
  { index: 38, field: "imperfektKonjunktiv", before: "he would worship", after: "he would thresh" },
  { index: 38, field: "partizipVergangenheit", before: "kults", after: "threshed" },
  { index: 39, field: "infinitiv", before: "ielauzties", after: "to break in" },
  { index: 39, field: "partizipVergangenheit", before: "ielauzies", after: "broken in" },
  { index: 40, field: "infinitiv", before: "it seems", after: "to seem" },
  { index: 40, field: "imperfektKonjunktiv", before: "it seemed", after: "it would seem" },
  { index: 42, field: "infinitiv", before: "ieteikt", after: "to recommend" },
  { index: 42, field: "partizipVergangenheit", before: "ieteikts", after: "recommended" },
  { index: 43, field: "infinitiv", before: "sajust", after: "to feel" },
  { index: 43, field: "partizipVergangenheit", before: "sajusts", after: "felt" },
  { index: 44, field: "infinitiv", before: "izdzist", after: "to go out" },
  { index: 44, field: "partizipVergangenheit", before: "izdzisis", after: "gone out" },
  { index: 45, field: "infinitiv", before: "get confused", after: "to get frightened" },
  { index: 45, field: "partizipVergangenheit", before: "sabijies", after: "frightened" },
  { index: 47, field: "infinitiv", before: "braukt", after: "to drive" },
  { index: 47, field: "partizipVergangenheit", before: "braucis / aizbraucis", after: "driven" },
  { index: 48, field: "infinitiv", before: "krist", after: "to fall" },
  { index: 48, field: "partizipVergangenheit", before: "kritis", after: "fallen" },
  { index: 50, field: "infinitiv", before: "atrast", after: "to find" },
  { index: 50, field: "partizipVergangenheit", before: "atrasts", after: "found" },
  { index: 51, field: "infinitiv", before: "laisties", after: "to fly" },
  { index: 51, field: "partizipVergangenheit", before: "lidojis", after: "flown" },
  { index: 52, field: "partizipVergangenheit", before: "ran away", after: "fled" },
  { index: 53, field: "praesens", before: "he runs", after: "he flows" },
  { index: 53, field: "imperfektIndikativ", before: "he ran", after: "he flowed" },
  { index: 53, field: "imperfektKonjunktiv", before: "he would run", after: "he would flow" },
  { index: 53, field: "partizipVergangenheit", before: "passed", after: "flowed" },
  { index: 54, field: "infinitiv", before: "eat tomorrow", after: "to eat / to devour" },
  { index: 54, field: "partizipVergangenheit", before: "eaten / morning", after: "eaten / devoured" },
];

const DE_SOURCE_ISSUE = [
  "verb-31-bleichen/imperfektKonjunktiv stays bleached",
  "verb-34-brennen/imperfektKonjunktiv stays dega",
  "verb-41-dürfen/imperfektKonjunktiv stays was allowed",
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

  const logPath = path.join(ROOT, "reports/temp/en-verbs-repair-block2-log.json");
  fs.writeFileSync(
    logPath,
    JSON.stringify({ applied, repairs: log, deSourceIssue: DE_SOURCE_ISSUE }, null, 2)
  );
  console.log(JSON.stringify({ applied, deFieldsChanged: 0 }, null, 2));
}

main();
