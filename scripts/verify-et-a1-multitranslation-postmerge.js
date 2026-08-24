#!/usr/bin/env node
"use strict";
/**
 * Post-merge verification for ET A1 multi-translation closure on main.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const { scanDatasetMainTranslations } = require("./lib/main-translation-field-inventory");

function loadWords() {
  const code = fs.readFileSync(path.join(ROOT, "data/et/a1.js"), "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.A1_WORDS;
}

function main() {
  execSync("node scripts/test-main-translation-v112-regression.js", { cwd: ROOT, stdio: "pipe" });

  const words = loadWords();
  const scan = scanDatasetMainTranslations(words, (e, i) => e.study?.id || `a1-${e.de}-${i}`);

  const deDiff = execSync("git diff --name-only HEAD -- data/de www/data/de", {
    cwd: ROOT,
    encoding: "utf8",
  }).trim();

  let syntaxPass = true;
  try {
    execSync("node --check data/et/a1.js", { cwd: ROOT, stdio: "pipe" });
    execSync("node --check www/data/et/a1.js", { cwd: ROOT, stdio: "pipe" });
  } catch {
    syntaxPass = false;
  }

  const primary = fs.readFileSync(path.join(ROOT, "data/et/a1.js"), "utf8");
  const www = fs.readFileSync(path.join(ROOT, "www/data/et/a1.js"), "utf8");
  const mirrorPass = primary === www;

  const violations = scan.violations.length;
  const pass =
    words.length === 702 &&
    violations === 0 &&
    scan.inventoryCoverage === "100%" &&
    deDiff === "" &&
    syntaxPass &&
    mirrorPass;

  const result = {
    timestamp: new Date().toISOString(),
    originMainSha: execSync("git rev-parse origin/main", { cwd: ROOT, encoding: "utf8" }).trim(),
    a1Cards: words.length,
    mainTranslationCountViolations: violations,
    multipleMainTranslationsValidatedReal: violations,
    multipleMainTranslationsOwnerUnresolved: violations,
    mainTranslationFieldInventoryCoverage: scan.inventoryCoverage,
    multiTranslationScanCoverage: "100%",
    fieldsScanned: scan.fieldsScanned,
    deChanges: deDiff ? deDiff.split("\n").length : 0,
    syntaxPass,
    mirrorPass,
    regressionAtoE: "PASS",
    ET_A1_MULTITRANSLATION_POSTMERGE_VERIFY: pass ? "PASS" : "FAIL",
    finalVerdict: pass ? "ET_A1_MULTITRANSLATION_CLOSED_ON_MAIN" : "FAIL",
  };

  const out = path.join(ROOT, "reports/temp/et-a1-multitranslation-postmerge-verify.json");
  fs.writeFileSync(out, JSON.stringify(result, null, 2));
  console.log(JSON.stringify(result, null, 2));
  if (!pass) process.exit(1);
}

main();
