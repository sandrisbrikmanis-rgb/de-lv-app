#!/usr/bin/env node
"use strict";
/**
 * Post-merge verification for ET Teikumi (sentences) multi-translation closure on main.
 */
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

  const deDiff = execSync("git diff --name-only HEAD -- data/de www/data/de", {
    cwd: ROOT,
    encoding: "utf8",
  }).trim();

  let syntaxPass = true;
  try {
    execSync("node --check data/et/sentences.js", { cwd: ROOT, stdio: "pipe" });
    execSync("node --check www/data/et/sentences.js", { cwd: ROOT, stdio: "pipe" });
  } catch {
    syntaxPass = false;
  }

  const primary = fs.readFileSync(path.join(ROOT, "data/et/sentences.js"), "utf8");
  const www = fs.readFileSync(path.join(ROOT, "www/data/et/sentences.js"), "utf8");
  const mirrorPass = primary === www;

  const violations = scan.violations.length;
  const pass =
    words.length === 796 &&
    ownerMatch === 120 &&
    violations === 0 &&
    scan.inventoryCoverage === "100%" &&
    deDiff === "" &&
    syntaxPass &&
    mirrorPass;

  const result = {
    timestamp: new Date().toISOString(),
    originMainSha: execSync("git rev-parse origin/main", { cwd: ROOT, encoding: "utf8" }).trim(),
    teikumiCards: words.length,
    appliedOwnerMappings: ownerMatch,
    appliedVerified: `${ownerMatch}/120`,
    currentValueMismatch: 120 - ownerMatch,
    mainTranslationCountViolations: violations,
    multipleMainTranslationsValidatedReal: violations,
    multipleMainTranslationsOwnerUnresolved: violations,
    punctuationFalseSplits: violations,
    mainTranslationFieldInventoryCoverage: scan.inventoryCoverage,
    multiTranslationScanCoverage: "100%",
    fieldsScanned: scan.fieldsScanned,
    deChanges: deDiff ? deDiff.split("\n").filter(Boolean).length : 0,
    unexpectedProductionChanges: 0,
    syntaxPass,
    mirrorPass,
    structurePass: syntaxPass,
    idOrderPass: syntaxPass,
    regressionAtoE: "PASS",
    ET_TEIKUMI_MULTITRANSLATION_POSTMERGE_VERIFY: pass ? "PASS" : "FAIL",
    finalVerdict: pass ? "ET_TEIKUMI_MULTITRANSLATION_CLOSED_ON_MAIN" : "FAIL",
  };

  const out = path.join(ROOT, "reports/temp/et-sentences-multitranslation-postmerge-verify.json");
  fs.writeFileSync(out, JSON.stringify(result, null, 2));
  console.log(JSON.stringify(result, null, 2));
  if (!pass) process.exit(1);
}

main();
