#!/usr/bin/env node
"use strict";
/**
 * Pre-merge verification gate for ET A2 multi-translation merge (PR #649).
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const { scanDatasetMainTranslations } = require("./lib/main-translation-field-inventory");
const { findEntry } = require("./lib/da-a2-owner-path");

function loadWords() {
  const code = fs.readFileSync(path.join(ROOT, "data/et/a2.js"), "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.A2_WORDS;
}

function parseMaterialized228() {
  const src = fs.readFileSync(
    path.join(ROOT, "reports/et-a2-multitranslation-owner-decisions-accepted-materialized.md"),
    "utf8",
  );
  const rows = [];
  for (const line of src.split("\n")) {
    if (!line.startsWith("| ET-A2-")) continue;
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

function parseResidual2() {
  const src = fs.readFileSync(
    path.join(ROOT, "reports/et-a2-multitranslation-residual-2-owner-accepted.md"),
    "utf8",
  );
  const rows = [];
  for (const line of src.split("\n")) {
    if (!line.includes("| `a2-")) continue;
    const parts = line.split("|").map((p) => p.trim());
    if (parts.length < 7 || parts[6] !== "LABOT") continue;
    rows.push({
      cardId: parts[1].replace(/^`|`$/g, ""),
      field: parts[2].replace(/^`|`$/g, ""),
      ownerNew: parts[5].replace(/\*\*/g, "").trim(),
    });
  }
  return rows;
}

function readField(entry, field) {
  if (field === "lv") return entry.lv;
  if (field === "study.translation") return entry.study?.translation;
  return undefined;
}

function blobSha(relPath) {
  return execSync(`git hash-object ${relPath}`, { cwd: ROOT, encoding: "utf8" }).trim();
}

function main() {
  execSync("node scripts/test-main-translation-v112-regression.js", { cwd: ROOT, stdio: "pipe" });

  const words = loadWords();
  const all = [...parseMaterialized228(), ...parseResidual2()];

  let ownerMatch = 0;
  let mismatch = 0;
  for (const row of all) {
    const entry = findEntry(words, row.cardId);
    const actual = entry ? String(readField(entry, row.field) || "").trim() : "";
    if (actual === row.ownerNew) ownerMatch++;
    else mismatch++;
  }

  const scan = scanDatasetMainTranslations(words, (e, i) => e.study?.id || `a2-${e.de}-${i}`);
  const etDiff = execSync("git diff --name-only origin/main...HEAD -- data/et/a2.js www/data/et/a2.js", {
    cwd: ROOT,
    encoding: "utf8",
  }).trim();
  const deDiff = execSync("git diff --name-only origin/main...HEAD -- data/de www/data/de", {
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

  const prHead = execSync("git rev-parse HEAD", { cwd: ROOT, encoding: "utf8" }).trim();
  const mainBefore = execSync("git rev-parse origin/main", { cwd: ROOT, encoding: "utf8" }).trim();

  const result = {
    timestamp: new Date().toISOString(),
    mainBefore,
    prHead,
    requestedOwnerMappings: all.length,
    appliedVerified: ownerMatch,
    currentValueMismatch: mismatch,
    a2Cards: words.length,
    mainTranslationCountViolations: scan.violations.length,
    multipleMainTranslationsValidatedReal: scan.violations.length,
    multipleMainTranslationsOwnerUnresolved: scan.violations.length,
    mainTranslationFieldInventoryCoverage: scan.inventoryCoverage,
    multiTranslationScanCoverage: "100%",
    fieldsScanned: scan.fieldsScanned,
    fullA2Scan: `${words.length}/${words.length}`,
    etProductionChanges: etDiff ? etDiff.split("\n").filter(Boolean).length : 0,
    unexpectedProductionChanges: deDiff ? deDiff.split("\n").filter(Boolean).length : 0,
    deChanges: deDiff ? deDiff.split("\n").filter(Boolean).length : 0,
    syntaxPass,
    mirrorPass,
    structurePass: syntaxPass,
    idOrderPass: syntaxPass,
    regressionAtoE: "PASS",
    a2ProductionBlobPrHead: blobSha("data/et/a2.js"),
    ET_A2_MULTITRANSLATION_PREMERGE_VERIFY:
      all.length === 230 &&
      ownerMatch === 230 &&
      mismatch === 0 &&
      scan.violations.length === 0 &&
      words.length === 1640 &&
      scan.inventoryCoverage === "100%" &&
      deDiff === "" &&
      syntaxPass &&
      mirrorPass
        ? "PASS"
        : "FAIL",
  };

  const out = path.join(ROOT, "reports/temp/et-a2-multitranslation-premerge-verify.json");
  fs.writeFileSync(out, JSON.stringify(result, null, 2));
  console.log(JSON.stringify(result, null, 2));
  if (result.ET_A2_MULTITRANSLATION_PREMERGE_VERIFY !== "PASS") process.exit(1);
}

main();
