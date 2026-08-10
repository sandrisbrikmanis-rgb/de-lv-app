#!/usr/bin/env node
/**
 * EN-DE Verbs OWNER repair block 8/9 — mechanical lv-field replacements only.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.join(__dirname, "..", "..");

const REPAIRS = [
  { index: 90, field: "praesens", before: "he snaps", after: "he tears" },
  { index: 90, field: "imperfektIndikativ", before: "he snapped", after: "he tore" },
  { index: 92, field: "praesens", before: "he is running", after: "he runs" },
  { index: 95, field: "partizipVergangenheit", before: "flowed / coagulated", after: "flowed" },
  { index: 98, field: "praesens", before: "he is drinking / drinking", after: "he drinks heavily" },
  { index: 99, field: "infinitiv", before: "suck", after: "to suck" },
  { index: 102, field: "infinitiv", before: "divorce / break up", after: "to divorce / to separate" },
  { index: 102, field: "praesens", before: "he is divorcing / divorcing", after: "he divorces / separates" },
  { index: 102, field: "imperfektIndikativ", before: "he divorced / divorced", after: "he divorced / separated" },
  { index: 103, field: "infinitiv", before: "shine / appear", after: "to shine / to appear" },
  { index: 103, field: "imperfektKonjunktiv", before: "he would shine / seem", after: "he would shine / would seem" },
  { index: 108, field: "infinitiv", before: "torment", after: "to torment" },
  { index: 112, field: "imperfektIndikativ", before: "he grinded", after: "he ground" },
  { index: 117, field: "partizipVergangenheit", before: "snort", after: "snorted" },
  { index: 118, field: "imperfektIndikativ", before: "he was cutting", after: "he cut" },
  { index: 121, field: "infinitiv", before: "walking", after: "to walk" },
  { index: 122, field: "infinitiv", before: "keep quiet", after: "to keep quiet" },
  { index: 122, field: "partizipVergangenheit", before: "silenced", after: "been silent" },
  { index: 124, field: "partizipVergangenheit", before: "swam", after: "swum" },
  { index: 126, field: "infinitiv", before: "wave", after: "to wave" },
  { index: 131, field: "imperfektIndikativ", before: "cooked", after: "boiled" },
  { index: 133, field: "praesens", before: "he is sinking", after: "he sinks" },
  { index: 135, field: "praesens", before: "he is sitting", after: "he sits" },
  { index: 135, field: "imperfektIndikativ", before: "he was sitting", after: "he sat" },
  { index: 135, field: "partizipVergangenheit", before: "sat down", after: "sat" },
  { index: 136, field: "infinitiv", before: "need / be obliged", after: "to be supposed to • to be obliged" },
  { index: 136, field: "partizipVergangenheit", before: "needed", after: "supposed to" },
  { index: 137, field: "partizipVergangenheit", before: "spat out", after: "spat" },
  { index: 138, field: "infinitiv", before: "spin", after: "to spin" },
  { index: 138, field: "praesens", before: "he twists", after: "he spins" },
  { index: 139, field: "praesens", before: "he connects", after: "he splices" },
  { index: 141, field: "praesens", before: "he thrives", after: "he sprouts" },
  { index: 141, field: "imperfektIndikativ", before: "he thrived", after: "he sprouted" },
  { index: 143, field: "imperfektIndikativ", before: "he punched", after: "he stabbed" },
  { index: 145, field: "partizipVergangenheit", before: "standing", after: "stood" },
  { index: 149, field: "infinitiv", before: "foam / swirl", after: "to scatter / to swirl" },
  { index: 149, field: "imperfektIndikativ", before: "foamed", after: "it scattered" },
  { index: 149, field: "partizipVergangenheit", before: "spoiled", after: "scattered" },
  { index: 150, field: "infinitiv", before: "to smell", after: "to stink" },
  { index: 150, field: "imperfektIndikativ", before: "smelled", after: "stank" },
  { index: 150, field: "partizipVergangenheit", before: "smelly", after: "stunk" },
  { index: 152, field: "infinitiv", before: "paint / strip", after: "to paint / to stripe" },
  { index: 152, field: "imperfektKonjunktiv", before: "he would paint / strip", after: "he would paint / stripe" },
  { index: 153, field: "imperfektIndikativ", before: "he struggled", after: "he fought" },
  { index: 157, field: "imperfektIndikativ", before: "he stood / walked", after: "he entered / went" },
  { index: 157, field: "imperfektKonjunktiv", before: "he would stand / go", after: "he would enter / he would go" },
  { index: 157, field: "partizipVergangenheit", before: "stood / walked", after: "entered / gone" },
];

const KEEP = [
  "verb-152-streichen/praesens he paints / stripes",
  "verb-152-streichen/imperfektIndikativ he painted / striped",
  "verb-152-streichen/partizipVergangenheit painted / striped",
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
    path.join(ROOT, "reports/temp/en-verbs-repair-block8-log.json"),
    JSON.stringify({ applied, repairs: log, keep: KEEP }, null, 2)
  );
  console.log(JSON.stringify({ applied, deFieldsChanged: 0 }, null, 2));
}

main();
