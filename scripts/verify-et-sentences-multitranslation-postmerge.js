#!/usr/bin/env node
"use strict";
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const { scanDatasetMainTranslations } = require("./lib/main-translation-field-inventory");

const MATERIALIZED = path.join(
  ROOT,
  "reports/et-sentences-multitranslation-owner-decisions-accepted-materialized.md",
);

function loadWords() {
  const code = fs.readFileSync(path.join(ROOT, "data/et/sentences.js"), "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.SENTENCE_ENTRIES;
}

function parseMaterialized() {
  const src = fs.readFileSync(MATERIALIZED, "utf8");
  const rows = [];
  for (const line of src.split("\n")) {
    if (!line.startsWith("| ET-SENT-MT-")) continue;
    const parts = line.split("|").map((p) => p.trim());
    if (parts.length < 9 || parts[8] !== "LABOT") continue;
    rows.push({
      cardId: parts[2],
      ownerNew: parts[7].replace(/\*\*/g, "").trim(),
    });
  }
  return rows;
}

function main() {
  execSync("node scripts/test-main-translation-v112-regression.js", { cwd: ROOT, stdio: "pipe" });
  const words = loadWords();
  const scan = scanDatasetMainTranslations(words, (e, i) => e.de || `sent-${i}`);
  const accepted = parseMaterialized();
  let ownerMatch = 0;
  for (const row of accepted) {
    const entry = words.find((e) => e.de === row.cardId);
    if (entry && String(entry.lv || "").trim() === row.ownerNew) ownerMatch++;
  }
  const pass =
    words.length === 796 &&
    ownerMatch === 120 &&
    scan.violations.length === 0 &&
    scan.inventoryCoverage === "100%";
  const result = {
    teikumiCards: words.length,
    appliedOwnerMappings: ownerMatch,
    mainTranslationCountViolations: scan.violations.length,
    ET_TEIKUMI_MULTITRANSLATION_POSTMERGE_VERIFY: pass ? "PASS" : "FAIL",
    finalVerdict: pass ? "ET_TEIKUMI_MULTITRANSLATION_CLOSED_ON_MAIN" : "FAIL",
  };
  fs.writeFileSync(
    path.join(ROOT, "reports/temp/et-sentences-multitranslation-postmerge-verify.json"),
    JSON.stringify(result, null, 2),
  );
  console.log(JSON.stringify(result, null, 2));
  if (!pass) process.exit(1);
}

main();
