#!/usr/bin/env node
/**
 * EN-DE Verbs OWNER repair block 1/9 — mechanical lv-field replacements only.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.join(__dirname, "..", "..");
const FORMS = [
  "infinitiv",
  "praesens",
  "imperfektIndikativ",
  "imperfektKonjunktiv",
  "partizipVergangenheit",
];

const REPAIRS = [
  { index: 133, field: "imperfektIndikativ", before: "he was making up", after: "he sank" },
  { index: 0, field: "infinitiv", before: "cept", after: "to bake" },
  { index: 0, field: "partizipVergangenheit", before: "cepts / izcepts", after: "baked" },
  { index: 3, field: "infinitiv", before: "kost", after: "to bite" },
  { index: 3, field: "imperfektIndikativ", before: "he coded", after: "he bit" },
  { index: 3, field: "imperfektKonjunktiv", before: "he bites", after: "he would bite" },
  { index: 3, field: "partizipVergangenheit", before: "kosts / sakosts", after: "bitten" },
  { index: 5, field: "imperfektKonjunktiv", before: "he bursts", after: "he would burst" },
  { index: 7, field: "praesens", before: "he bows", after: "he bends" },
  { index: 9, field: "infinitiv", before: "siet", after: "to tie" },
  { index: 9, field: "praesens", before: "he hay", after: "he ties" },
  { index: 9, field: "imperfektIndikativ", before: "he sowed", after: "he tied" },
  { index: 9, field: "imperfektKonjunktiv", before: "he sieved", after: "he would tie" },
  { index: 9, field: "partizipVergangenheit", before: "siets", after: "tied" },
  { index: 10, field: "imperfektKonjunktiv", before: "he would pray", after: "he would ask" },
  { index: 12, field: "imperfektKonjunktiv", before: "it would be bitter", after: "it would ferment" },
  { index: 12, field: "partizipVergangenheit", before: "rye", after: "fermented" },
  { index: 13, field: "praesens", before: "in her womb", after: "she gives birth" },
  { index: 14, field: "infinitiv", before: "izdoties", after: "to succeed" },
  { index: 14, field: "praesens", before: "tas izdodas", after: "it succeeds" },
  { index: 14, field: "imperfektKonjunktiv", before: "tas izdotos", after: "it would succeed" },
  { index: 14, field: "partizipVergangenheit", before: "izdevies", after: "succeeded" },
  { index: 15, field: "infinitiv", before: "come in handy", after: "to be valid / to apply" },
  { index: 15, field: "imperfektKonjunktiv", before: "he would fit / it would fit", after: "he would count / it would be valid" },
  { index: 16, field: "partizipVergangenheit", before: "get well", after: "recovered" },
  { index: 18, field: "infinitiv", before: "notikt", after: "to happen" },
  { index: 18, field: "praesens", before: "tas notiek", after: "it happens" },
  { index: 18, field: "imperfektIndikativ", before: "tas notika", after: "it happened" },
  { index: 18, field: "imperfektKonjunktiv", before: "tas notiktu", after: "it would happen" },
  { index: 18, field: "partizipVergangenheit", before: "noticis", after: "happened" },
  { index: 19, field: "infinitiv", before: "liet", after: "to pour" },
  { index: 19, field: "imperfektKonjunktiv", before: "he rains", after: "he would pour" },
  { index: 19, field: "partizipVergangenheit", before: "liets", after: "poured" },
  { index: 22, field: "infinitiv", before: "glowing", after: "to glow" },
  { index: 23, field: "infinitiv", before: "rakt", after: "to dig" },
  { index: 23, field: "partizipVergangenheit", before: "rakts", after: "dug" },
  { index: 25, field: "infinitiv", before: "cirst", after: "to chop" },
  { index: 25, field: "praesens", before: "he picked", after: "he chops" },
  { index: 25, field: "imperfektIndikativ", before: "he snapped", after: "he chopped" },
  { index: 25, field: "partizipVergangenheit", before: "cirsts", after: "chopped" },
  { index: 25, field: "imperfektKonjunktiv", before: "he would carve", after: "he would chop" },
  { index: 26, field: "infinitiv", before: "celt", after: "to raise" },
  { index: 26, field: "imperfektIndikativ", before: "he brought", after: "he raised" },
  { index: 26, field: "imperfektKonjunktiv", before: "he would build", after: "he would raise" },
  { index: 26, field: "partizipVergangenheit", before: "celts", after: "raised" },
  { index: 27, field: "imperfektIndikativ", before: "pazina", after: "he knew" },
  { index: 27, field: "partizipVergangenheit", before: "pazinis", after: "known" },
  { index: 29, field: "infinitiv", before: "kniebt", after: "to pinch" },
  { index: 29, field: "praesens", before: "he quips", after: "he pinches" },
  { index: 29, field: "partizipVergangenheit", before: "kniebts", after: "pinched" },
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

  const logPath = path.join(ROOT, "reports/temp/en-verbs-repair-block1-log.json");
  fs.writeFileSync(logPath, JSON.stringify({ applied, repairs: log, deSourceIssue: ["verb-27-kennen/imperfektKonjunktiv stays pazina"] }, null, 2));
  console.log(JSON.stringify({ applied, deFieldsChanged: 0 }, null, 2));
}

main();
