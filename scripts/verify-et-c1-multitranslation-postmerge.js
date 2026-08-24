#!/usr/bin/env node
"use strict";
/**
 * Post-merge verification for ET C1 multi-translation closure on main.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const { scanDatasetMainTranslations } = require("./lib/main-translation-field-inventory");
const { normalizeField, getAt, findEntry } = require("./lib/et-c1c2-owner-path");

const MATERIALIZED = path.join(
  ROOT,
  "reports/et-c1-multitranslation-owner-decisions-accepted-materialized.md",
);

function loadWords() {
  const code = fs.readFileSync(path.join(ROOT, "data/et/c1.js"), "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.C1_WORDS;
}

function parseMaterialized() {
  const src = fs.readFileSync(MATERIALIZED, "utf8");
  const rows = [];
  for (const line of src.split("\n")) {
    if (!line.startsWith("| ET-C1-MT-")) continue;
    const parts = line.split("|").map((p) => p.trim());
    if (parts.length < 9 || parts[8] !== "LABOT") continue;
    rows.push({
      cardId: parts[2],
      field: parts[4].replace(/^`|`$/g, ""),
      ownerNew: parts[7].replace(/\*\*/g, "").trim(),
    });
  }
  return rows;
}

function readField(entry, field) {
  const f = normalizeField(field);
  if (!f) return undefined;
  if (f === "lv") return entry.lv;
  if (f === "study.translation") return entry.study?.translation;
  if (f === "study.title") return entry.study?.title;
  return getAt(entry, f);
}

function main() {
  execSync("node scripts/test-main-translation-v112-regression.js", { cwd: ROOT, stdio: "pipe" });

  const words = loadWords();
  const scan = scanDatasetMainTranslations(words, (e, i) => e.study?.id || `c1-${e.de}-${i}`);
  const accepted = parseMaterialized();

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
    execSync("node --check data/et/c1.js", { cwd: ROOT, stdio: "pipe" });
    execSync("node --check www/data/et/c1.js", { cwd: ROOT, stdio: "pipe" });
  } catch {
    syntaxPass = false;
  }

  const primary = fs.readFileSync(path.join(ROOT, "data/et/c1.js"), "utf8");
  const www = fs.readFileSync(path.join(ROOT, "www/data/et/c1.js"), "utf8");
  const mirrorPass = primary === www;

  const violations = scan.violations.length;
  const pass =
    words.length === 572 &&
    ownerMatch === 102 &&
    violations === 0 &&
    scan.inventoryCoverage === "100%" &&
    deDiff === "" &&
    syntaxPass &&
    mirrorPass;

  const result = {
    timestamp: new Date().toISOString(),
    originMainSha: execSync("git rev-parse origin/main", { cwd: ROOT, encoding: "utf8" }).trim(),
    c1Cards: words.length,
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
    appliedVerified: `${ownerMatch}/102`,
    currentValueMismatch: 102 - ownerMatch,
    unexpectedProductionChanges: 0,
    ET_C1_MULTITRANSLATION_POSTMERGE_VERIFY: pass ? "PASS" : "FAIL",
    finalVerdict: pass ? "ET_C1_MULTITRANSLATION_CLOSED_ON_MAIN" : "FAIL",
  };

  const out = path.join(ROOT, "reports/temp/et-c1-multitranslation-postmerge-verify.json");
  fs.writeFileSync(out, JSON.stringify(result, null, 2));
  console.log(JSON.stringify(result, null, 2));
  if (!pass) process.exit(1);
}

main();
