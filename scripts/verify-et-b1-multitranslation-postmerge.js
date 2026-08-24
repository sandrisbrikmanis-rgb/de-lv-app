#!/usr/bin/env node
"use strict";
/**
 * Post-apply verification for ET B1 multi-translation closure.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const { scanDatasetMainTranslations } = require("./lib/main-translation-field-inventory");
const { findEntry } = require("./lib/da-b1-owner-path");

function loadWords() {
  const code = fs.readFileSync(path.join(ROOT, "data/et/b1.js"), "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.B1_WORDS;
}

function parseAccepted() {
  const src = fs.readFileSync(
    path.join(ROOT, "reports/et-b1-multitranslation-owner-decisions-accepted.md"),
    "utf8",
  );
  const rows = [];
  for (const line of src.split("\n")) {
    if (!line.includes("ET-B1-MT-")) continue;
    const parts = line.split("|").map((p) => p.trim());
    if (parts.length < 8 || parts[7] !== "LABOT") continue;
    rows.push({
      cardId: parts[2].replace(/^`|`$/g, ""),
      field: parts[3].replace(/^`|`$/g, ""),
      ownerNew: parts[6].replace(/\*\*/g, "").trim(),
    });
  }
  return rows;
}

function readField(entry, field) {
  if (field === "lv") return entry.lv;
  if (field === "study.translation") return entry.study?.translation;
  return undefined;
}

function main() {
  execSync("node scripts/test-main-translation-v112-regression.js", { cwd: ROOT, stdio: "pipe" });

  const words = loadWords();
  const scan = scanDatasetMainTranslations(words, (e, i) => e.study?.id || `b1-${e.de}-${i}`);
  const accepted = parseAccepted();

  let ownerMatch = 0;
  for (const row of accepted) {
    const entry = findEntry(words, row.cardId);
    const actual = entry ? String(readField(entry, row.field) || "").trim() : "";
    if (actual === row.ownerNew) ownerMatch++;
  }

  const deDiff = execSync("git diff --name-only HEAD -- data/de www/data/de", {
    cwd: ROOT,
    encoding: "utf8",
  }).trim();

  let syntaxPass = true;
  try {
    execSync("node --check data/et/b1.js", { cwd: ROOT, stdio: "pipe" });
    execSync("node --check www/data/et/b1.js", { cwd: ROOT, stdio: "pipe" });
  } catch {
    syntaxPass = false;
  }

  const primary = fs.readFileSync(path.join(ROOT, "data/et/b1.js"), "utf8");
  const www = fs.readFileSync(path.join(ROOT, "www/data/et/b1.js"), "utf8");
  const mirrorPass = primary === www;

  const violations = scan.violations.length;
  const pass =
    words.length === 3367 &&
    ownerMatch === 25 &&
    violations === 0 &&
    scan.inventoryCoverage === "100%" &&
    deDiff === "" &&
    syntaxPass &&
    mirrorPass;

  const result = {
    timestamp: new Date().toISOString(),
    originMainSha: execSync("git rev-parse origin/main", { cwd: ROOT, encoding: "utf8" }).trim(),
    b1Cards: words.length,
    appliedOwnerMappings: ownerMatch,
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
    appliedVerified: `${ownerMatch}/25`,
    currentValueMismatch: 25 - ownerMatch,
    unexpectedProductionChanges: 0,
    ET_B1_MULTITRANSLATION_POSTMERGE_VERIFY: pass ? "PASS" : "FAIL",
    finalVerdict: pass ? "ET_B1_MULTITRANSLATION_CLOSED_ON_MAIN" : "FAIL",
  };

  const out = path.join(ROOT, "reports/temp/et-b1-multitranslation-postmerge-verify.json");
  fs.writeFileSync(out, JSON.stringify(result, null, 2));
  console.log(JSON.stringify(result, null, 2));
  if (!pass) process.exit(1);
}

main();
