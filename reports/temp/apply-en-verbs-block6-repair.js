#!/usr/bin/env node
/**
 * EN-DE Verbs OWNER repair block 6/9 — mechanical lv-field replacements only.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.join(__dirname, "..", "..");

const REPAIRS = [
  { index: 139, field: "partizipVergangenheit", before: "savienots", after: "spliced" },
  { index: 141, field: "infinitiv", before: "plaukt", after: "to sprout" },
  { index: 141, field: "imperfektKonjunktiv", before: "he shelf", after: "he would sprout" },
  { index: 141, field: "partizipVergangenheit", before: "plaucis", after: "sprouted" },
  { index: 142, field: "partizipVergangenheit", before: "lens", after: "jumped" },
  { index: 143, field: "infinitiv", before: "durt", after: "to stab" },
  { index: 143, field: "partizipVergangenheit", before: "durts", after: "stabbed" },
  { index: 146, field: "infinitiv", before: "zagt", after: "to steal" },
  { index: 146, field: "partizipVergangenheit", before: "zagts", after: "stolen" },
  { index: 148, field: "infinitiv", before: "mirt", after: "to die" },
  { index: 148, field: "partizipVergangenheit", before: "miris", after: "died" },
  { index: 149, field: "praesens", before: "tas put", after: "it scatters" },
  { index: 150, field: "praesens", before: "tas smird", after: "it stinks" },
  { index: 151, field: "imperfektKonjunktiv", before: "he was pushing", after: "he would push" },
  { index: 154, field: "infinitiv", before: "nest", after: "to carry" },
  { index: 154, field: "partizipVergangenheit", before: "nests", after: "carried" },
  { index: 155, field: "infinitiv", before: "sastapt", after: "to meet" },
  { index: 155, field: "partizipVergangenheit", before: "sastapts", after: "met" },
  { index: 158, field: "infinitiv", before: "dzert", after: "to drink" },
  { index: 158, field: "partizipVergangenheit", before: "dzerts", after: "drunk" },
  { index: 163, field: "infinitiv", before: "aizmirst", after: "to forget" },
  { index: 163, field: "partizipVergangenheit", before: "aizmirsts", after: "forgotten" },
  { index: 165, field: "infinitiv", before: "augt", after: "to grow" },
  { index: 165, field: "partizipVergangenheit", before: "audzis", after: "grown" },
  { index: 167, field: "infinitiv", before: "aust", after: "to weave" },
  { index: 167, field: "imperfektIndikativ", before: "auda", after: "he wove" },
  { index: 167, field: "partizipVergangenheit", before: "izausts", after: "woven" },
  { index: 168, field: "partizipVergangenheit", before: "back off", after: "backed off" },
  { index: 171, field: "infinitiv", before: "to propose", after: "to advertise / to recruit / to woo" },
  { index: 171, field: "praesens", before: "he proposes", after: "he advertises / recruits / woos" },
  { index: 171, field: "imperfektIndikativ", before: "he proposed", after: "he advertised / recruited / wooed" },
  { index: 171, field: "imperfektKonjunktiv", before: "he would propose", after: "he would advertise / recruit / woo" },
  { index: 171, field: "partizipVergangenheit", before: "proposed to", after: "advertised / recruited / wooed" },
  { index: 173, field: "infinitiv", before: "mest", after: "to throw" },
  { index: 173, field: "imperfektKonjunktiv", before: "he threw", after: "he would throw" },
  { index: 173, field: "partizipVergangenheit", before: "mests", after: "thrown" },
  { index: 175, field: "praesens", before: "he pin", after: "he braids" },
  { index: 175, field: "imperfektIndikativ", before: "he braids", after: "he braided" },
  { index: 177, field: "imperfektKonjunktiv", before: "wanted to", after: "would want" },
  { index: 178, field: "infinitiv", before: "izgriezt / izspiest", after: "to wring / to squeeze" },
  { index: 178, field: "praesens", before: "he cuts out", after: "he wrings / squeezes" },
  { index: 178, field: "imperfektIndikativ", before: "izgrieza", after: "he wrung / squeezed" },
  { index: 178, field: "partizipVergangenheit", before: "izgriezts", after: "wrung / squeezed" },
];

const DE_SOURCE_ISSUE = [
  "verb-139-spleißen/imperfektKonjunktiv stays savienoja",
  "verb-144-stecken/imperfektKonjunktiv stays stuffed",
  "verb-149-stieben/imperfektKonjunktiv stays foamed",
  "verb-150-stinken/imperfektKonjunktiv stays smelled",
  "verb-167-weben/imperfektKonjunktiv stays auda",
  "verb-172-werden/imperfektKonjunktiv stays became",
  "verb-178-wringen/imperfektKonjunktiv stays izgrieza",
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
    path.join(ROOT, "reports/temp/en-verbs-repair-block6-log.json"),
    JSON.stringify({ applied, repairs: log, deSourceIssue: DE_SOURCE_ISSUE }, null, 2)
  );
  console.log(JSON.stringify({ applied, deFieldsChanged: 0 }, null, 2));
}

main();
