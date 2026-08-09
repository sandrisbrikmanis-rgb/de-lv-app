#!/usr/bin/env node
/**
 * Supplemental deterministic fixes for reconciliation edge cases (regression grammar + accents).
 */
const fs = require("fs");
const path = require("path");
const {
  loadB1,
  serializeB1,
  applyRepairMapping,
  findEntry,
} = require("./en-b1-field-apply-lib.js");

const ROOT = path.join(__dirname, "..", "..");
const EN_PATH = path.join(ROOT, "data/en/b1.js");
const EN_MIRROR_PATH = path.join(ROOT, "www/data/en/b1.js");

const SUPPLEMENTAL = [
  {
    cardId: "b1-hort",
    field: "study.explanation[0]",
    value:
      "Main idea: Hort (also Schulhort/Kinderhort) is an after-school care facility for school-aged children.",
    source: "regression_repair #12",
  },
  {
    cardId: "b1-kader",
    field: "study.explanation[0]",
    value:
      "Main Idea: Kader means a (qualified) cadre or nucleus—a group of people with a specific role or qualification.",
    source: "regression_repair #15",
  },
  {
    cardId: "b1-leistung",
    field: "study.sectionAccents.comparison[0].meaning.purple",
    value: ["Performance", "achievement", "Performance"],
    source: "HIGH #12 + sectionaccent_oos triage #9",
  },
  {
    cardId: "b1-treiben",
    field: "study.sectionAccents.comparison[2].meaning.purple",
    value: "__REMOVE_ACCENT__",
    source: "regression_repair #238",
  },
];

function main() {
  const words = JSON.parse(JSON.stringify(loadB1("data/en/b1.js")));
  const log = [];

  for (const s of SUPPLEMENTAL) {
    const entry = findEntry(words, s.cardId, undefined, s.cardId);
    if (!entry) {
      log.push({ ...s, status: "ENTRY_NOT_FOUND" });
      continue;
    }
    applyRepairMapping(entry, s.field, s.value);
    log.push({ ...s, status: "APPLIED", productionId: entry.study?.id });
  }

  const out = serializeB1(words);
  fs.writeFileSync(EN_PATH, out);
  fs.writeFileSync(EN_MIRROR_PATH, out);

  const reportPath = path.join(ROOT, "reports/temp/en-b1-main-missing-repairs-supplement-log.json");
  fs.writeFileSync(reportPath, JSON.stringify({ generatedAt: new Date().toISOString(), repairs: log }, null, 2));
  console.log("Supplement applied:", log.length);
}

main();
