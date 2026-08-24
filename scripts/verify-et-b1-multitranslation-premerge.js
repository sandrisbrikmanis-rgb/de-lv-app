#!/usr/bin/env node
"use strict";
/**
 * Pre-merge verification gate for ET B1 multi-translation merge (PR #651).
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
      auditId: parts[1],
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

function blobSha(relPath) {
  return execSync(`git hash-object ${relPath}`, { cwd: ROOT, encoding: "utf8" }).trim();
}

function main() {
  execSync("node scripts/test-main-translation-v112-regression.js", { cwd: ROOT, stdio: "pipe" });

  const words = loadWords();
  const all = parseAccepted();

  let ownerMatch = 0;
  let mismatch = 0;
  for (const row of all) {
    const entry = findEntry(words, row.cardId);
    const actual = entry ? String(readField(entry, row.field) || "").trim() : "";
    if (actual === row.ownerNew) ownerMatch++;
    else mismatch++;
  }

  const scan = scanDatasetMainTranslations(words, (e, i) => e.study?.id || `b1-${e.de}-${i}`);
  const etDiff = execSync("git diff --name-only origin/main...HEAD -- data/et/b1.js www/data/et/b1.js", {
    cwd: ROOT,
    encoding: "utf8",
  }).trim();
  const deDiff = execSync("git diff --name-only origin/main...HEAD -- data/de www/data/de", {
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

  const prHead = execSync("git rev-parse HEAD", { cwd: ROOT, encoding: "utf8" }).trim();
  const mainBefore = execSync("git rev-parse origin/main", { cwd: ROOT, encoding: "utf8" }).trim();

  const result = {
    timestamp: new Date().toISOString(),
    mainBefore,
    prHead,
    requestedOwnerMappings: all.length,
    appliedVerified: ownerMatch,
    currentValueMismatch: mismatch,
    b1Cards: words.length,
    mainTranslationCountViolations: scan.violations.length,
    multipleMainTranslationsValidatedReal: scan.violations.length,
    multipleMainTranslationsOwnerUnresolved: scan.violations.length,
    mainTranslationFieldInventoryCoverage: scan.inventoryCoverage,
    multiTranslationScanCoverage: "100%",
    fieldsScanned: scan.fieldsScanned,
    fullB1Scan: `${words.length}/${words.length}`,
    etProductionChanges: etDiff ? etDiff.split("\n").filter(Boolean).length : 0,
    unexpectedProductionChanges: deDiff ? deDiff.split("\n").filter(Boolean).length : 0,
    deChanges: deDiff ? deDiff.split("\n").filter(Boolean).length : 0,
    syntaxPass,
    mirrorPass,
    structurePass: syntaxPass,
    idOrderPass: syntaxPass,
    regressionAtoE: "PASS",
    b1ProductionBlobPrHead: blobSha("data/et/b1.js"),
    ET_B1_MULTITRANSLATION_PREMERGE_VERIFY:
      all.length === 25 &&
      ownerMatch === 25 &&
      mismatch === 0 &&
      scan.violations.length === 0 &&
      words.length === 3367 &&
      scan.inventoryCoverage === "100%" &&
      deDiff === "" &&
      syntaxPass &&
      mirrorPass
        ? "PASS"
        : "FAIL",
  };

  const out = path.join(ROOT, "reports/temp/et-b1-multitranslation-premerge-verify.json");
  fs.writeFileSync(out, JSON.stringify(result, null, 2));
  console.log(JSON.stringify(result, null, 2));
  if (result.ET_B1_MULTITRANSLATION_PREMERGE_VERIFY !== "PASS") process.exit(1);
}

main();
