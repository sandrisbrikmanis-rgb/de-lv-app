#!/usr/bin/env node
/**
 * EN-DE Verbs OWNER repair block 7/9 — mechanical lv-field replacements only.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.join(__dirname, "..", "..");

const REPAIRS = [
  { index: 179, field: "infinitiv", before: "vainot", after: "to accuse / to blame" },
  { index: 179, field: "imperfektIndikativ", before: "vainoja", after: "he accused / blamed" },
  { index: 179, field: "imperfektKonjunktiv", before: "vainoja", after: "he would accuse / blame" },
  { index: 179, field: "partizipVergangenheit", before: "vainojis", after: "accused / blamed" },
  { index: 180, field: "infinitiv", before: "vilkt", after: "to pull" },
  { index: 180, field: "partizipVergangenheit", before: "vilkts", after: "pulled" },
  { index: 181, field: "infinitiv", before: "piespiest", after: "to force" },
  { index: 181, field: "partizipVergangenheit", before: "piespiests", after: "forced" },
  { index: 185, field: "praesens", before: "he pin", after: "he braids" },
  { index: 185, field: "imperfektIndikativ", before: "he braids", after: "he braided" },
  { index: 186, field: "partizipVergangenheit", before: "hang on", after: "hung" },
  { index: 188, field: "infinitiv", before: "piedot", after: "to forgive" },
  { index: 188, field: "partizipVergangenheit", before: "piedots", after: "forgiven" },
  { index: 0, field: "imperfektIndikativ", before: "he was baking", after: "he baked" },
  { index: 4, field: "infinitiv", before: "hide", after: "to hide" },
  { index: 5, field: "infinitiv", before: "bursting", after: "to burst" },
  { index: 5, field: "imperfektIndikativ", before: "he burst out", after: "he burst" },
  { index: 5, field: "partizipVergangenheit", before: "broken", after: "burst" },
  { index: 7, field: "infinitiv", before: "bend", after: "to bend" },
  { index: 12, field: "imperfektIndikativ", before: "it ferments", after: "it fermented" },
  { index: 15, field: "praesens", before: "he fits / is valid", after: "he counts • he is valid" },
  { index: 15, field: "imperfektIndikativ", before: "he fit / was fit", after: "he counted • he was valid" },
  { index: 16, field: "infinitiv", before: "getting well", after: "to recover" },
  { index: 20, field: "imperfektIndikativ", before: "he emulated", after: "he resembled" },
  { index: 20, field: "imperfektKonjunktiv", before: "he would emulate", after: "he would resemble" },
  { index: 21, field: "imperfektIndikativ", before: "he was sliding", after: "he slid" },
  { index: 21, field: "partizipVergangenheit", before: "slipped", after: "slid" },
  { index: 22, field: "partizipVergangenheit", before: "glowing", after: "glowed" },
  { index: 31, field: "infinitiv", before: "whiten", after: "to bleach" },
  { index: 34, field: "praesens", before: "he's on fire", after: "he burns" },
  { index: 36, field: "partizipVergangenheit", before: "intended", after: "thought" },
  { index: 41, field: "praesens", before: "he can", after: "he is allowed to" },
  { index: 41, field: "partizipVergangenheit", before: "allowed", after: "been allowed" },
  { index: 46, field: "imperfektIndikativ", before: "he was eating", after: "he ate" },
  { index: 52, field: "infinitiv", before: "run away", after: "to flee" },
  { index: 54, field: "imperfektKonjunktiv", before: "he would eat / breakfast", after: "he would eat / devour" },
  { index: 57, field: "praesens", before: "he succeeds", after: "he thrives" },
  { index: 57, field: "imperfektIndikativ", before: "he succeeded", after: "he thrived" },
  { index: 57, field: "imperfektKonjunktiv", before: "he would succeed", after: "he would thrive" },
  { index: 61, field: "infinitiv", before: "hold", after: "to hold" },
  { index: 65, field: "infinitiv", before: "be able to", after: "to be able to" },
  { index: 65, field: "imperfektKonjunktiv", before: "could", after: "would be able to" },
  { index: 68, field: "infinitiv", before: "to put, to let", after: "to let • to leave" },
  { index: 68, field: "praesens", before: "he puts / lets", after: "he lets • he leaves" },
  { index: 68, field: "imperfektKonjunktiv", before: "he would put / let", after: "he would let • he would leave" },
  { index: 68, field: "partizipVergangenheit", before: "put / allowed", after: "left • let" },
  { index: 69, field: "partizipVergangenheit", before: "ran", after: "has run" },
  { index: 85, field: "praesens", before: "he cares", after: "he cares for" },
  { index: 86, field: "infinitiv", before: "praise", after: "to praise" },
];

const AUDIT_SOURCE_ISSUE = [
  "verb-79-misslingen/imperfektKonjunktiv — not changed (empty audit finding)",
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
    path.join(ROOT, "reports/temp/en-verbs-repair-block7-log.json"),
    JSON.stringify({ applied, repairs: log, auditSourceIssue: AUDIT_SOURCE_ISSUE }, null, 2)
  );
  console.log(JSON.stringify({ applied, deFieldsChanged: 0 }, null, 2));
}

main();
