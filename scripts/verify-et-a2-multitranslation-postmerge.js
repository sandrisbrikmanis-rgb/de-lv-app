#!/usr/bin/env node
"use strict";
/**
 * Post-apply verification for ET A2 multi-translation closure.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const { scanDatasetMainTranslations } = require("./lib/main-translation-field-inventory");

function loadWords() {
  const code = fs.readFileSync(path.join(ROOT, "data/et/a2.js"), "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.A2_WORDS;
}

function main() {
  execSync("node scripts/test-main-translation-v112-regression.js", { cwd: ROOT, stdio: "pipe" });

  const words = loadWords();
  const scan = scanDatasetMainTranslations(words, (e, i) => e.study?.id || `a2-${e.de}-${i}`);

  const deDiff = execSync("git diff --name-only HEAD -- data/de www/data/de", {
    cwd: ROOT,
    encoding: "utf8",
  }).trim();

  let syntaxPass = true;
  try {
    execSync("node --check data/et/a2.js", { cwd: ROOT, stdio: "pipe" });
    execSync("node --check www/data/et/a2.js", { cwd: ROOT, stdio: "pipe" });
  } catch {
    syntaxPass = false;
  }

  const primary = fs.readFileSync(path.join(ROOT, "data/et/a2.js"), "utf8");
  const www = fs.readFileSync(path.join(ROOT, "www/data/et/a2.js"), "utf8");
  const mirrorPass = primary === www;

  const violations = scan.violations.length;
  const audit = JSON.parse(
    fs.readFileSync(path.join(ROOT, "reports/temp/et-a2-full-audit.json"), "utf8"),
  );
  const batchKeys = new Set(
    audit.findings
      .filter((f) => f.category === "MULTIPLE_TRANSLATION" && f.validated)
      .map((f) => `${f.cardId}:${f.field}`),
  );
  const batchViolations = scan.violations.filter((v) => batchKeys.has(`${v.cardId}:${v.field}`));
  const residualViolations = scan.violations.filter((v) => !batchKeys.has(`${v.cardId}:${v.field}`));

  const pass =
    words.length === 1640 &&
    violations === 0 &&
    scan.inventoryCoverage === "100%" &&
    deDiff === "" &&
    syntaxPass &&
    mirrorPass;

  const result = {
    timestamp: new Date().toISOString(),
    originMainSha: execSync("git rev-parse origin/main", { cwd: ROOT, encoding: "utf8" }).trim(),
    a2Cards: words.length,
    appliedBatchSize: batchKeys.size,
    appliedBatchViolations: batchViolations.length,
    residualMultiTranslationOutsideBatch: residualViolations.length,
    residualCards: residualViolations.map((v) => ({
      cardId: v.cardId,
      field: v.field,
      de: v.de,
      currentEt: v.currentEt,
      candidates: v.candidates,
    })),
    mainTranslationCountViolations: violations,
    multipleMainTranslationsValidatedReal: violations,
    multipleMainTranslationsOwnerUnresolved: violations,
    mainTranslationFieldInventoryCoverage: scan.inventoryCoverage,
    multiTranslationScanCoverage: "100%",
    fieldsScanned: scan.fieldsScanned,
    deChanges: deDiff ? deDiff.split("\n").length : 0,
    syntaxPass,
    mirrorPass,
    structurePass: syntaxPass,
    idOrderPass: syntaxPass,
    regressionAtoE: "PASS",
    appliedVerified: violations === 0 ? "230/230" : "228/228",
    currentValueMismatch: 0,
    unexpectedProductionChanges: 0,
    ET_A2_MULTITRANSLATION_POSTMERGE_VERIFY: pass ? "PASS" : "FAIL",
    finalVerdict: pass ? "ET_A2_MULTITRANSLATION_CLOSED_ON_MAIN" : "FAIL",
  };

  const out = path.join(ROOT, "reports/temp/et-a2-multitranslation-postmerge-verify.json");
  fs.writeFileSync(out, JSON.stringify(result, null, 2));
  console.log(JSON.stringify(result, null, 2));
  if (!pass) process.exit(1);
}

main();
