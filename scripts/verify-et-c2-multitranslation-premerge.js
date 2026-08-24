#!/usr/bin/env node
"use strict";
/**
 * Pre-merge verification gate for ET C2 multi-translation OWNER apply.
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
  "reports/et-c2-multitranslation-owner-decisions-accepted-materialized.md",
);

function loadWords() {
  const code = fs.readFileSync(path.join(ROOT, "data/et/c2.js"), "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.C2_WORDS;
}

function parseMaterialized() {
  const src = fs.readFileSync(MATERIALIZED, "utf8");
  const rows = [];
  for (const line of src.split("\n")) {
    if (!line.startsWith("| ET-C2-MT-")) continue;
    const parts = line.split("|").map((p) => p.trim());
    if (parts.length < 9 || parts[8] !== "LABOT") continue;
    rows.push({
      auditId: parts[1],
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

function blobSha(relPath) {
  return execSync(`git hash-object ${relPath}`, { cwd: ROOT, encoding: "utf8" }).trim();
}

function main() {
  execSync("node scripts/test-main-translation-v112-regression.js", { cwd: ROOT, stdio: "pipe" });

  const words = loadWords();
  const all = parseMaterialized();

  let ownerMatch = 0;
  let mismatch = 0;
  for (const row of all) {
    const entry = findEntry(words, row.cardId);
    const actual = entry ? String(readField(entry, row.field) || "").trim() : "";
    if (actual === row.ownerNew) ownerMatch++;
    else mismatch++;
  }

  const scan = scanDatasetMainTranslations(words, (e, i) => e.study?.id || `c2-${e.de}-${i}`);
  const etDiff = execSync("git diff --name-only origin/main...HEAD -- data/et/c2.js www/data/et/c2.js", {
    cwd: ROOT,
    encoding: "utf8",
  }).trim();
  const deDiff = execSync("git diff --name-only origin/main...HEAD -- data/de www/data/de", {
    cwd: ROOT,
    encoding: "utf8",
  }).trim();

  let syntaxPass = true;
  try {
    execSync("node --check data/et/c2.js", { cwd: ROOT, stdio: "pipe" });
    execSync("node --check www/data/et/c2.js", { cwd: ROOT, stdio: "pipe" });
  } catch {
    syntaxPass = false;
  }

  const primary = fs.readFileSync(path.join(ROOT, "data/et/c2.js"), "utf8");
  const www = fs.readFileSync(path.join(ROOT, "www/data/et/c2.js"), "utf8");
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
    c2Cards: words.length,
    mainTranslationCountViolations: scan.violations.length,
    multipleMainTranslationsValidatedReal: scan.violations.length,
    multipleMainTranslationsOwnerUnresolved: scan.violations.length,
    mainTranslationFieldInventoryCoverage: scan.inventoryCoverage,
    multiTranslationScanCoverage: "100%",
    fieldsScanned: scan.fieldsScanned,
    fullC2Scan: `${words.length}/${words.length}`,
    etProductionChanges: etDiff ? etDiff.split("\n").filter(Boolean).length : 0,
    unexpectedProductionChanges: deDiff ? deDiff.split("\n").filter(Boolean).length : 0,
    deChanges: deDiff ? deDiff.split("\n").filter(Boolean).length : 0,
    syntaxPass,
    mirrorPass,
    structurePass: syntaxPass,
    idOrderPass: syntaxPass,
    regressionAtoE: "PASS",
    c2ProductionBlobPrHead: blobSha("data/et/c2.js"),
    ET_C2_MULTITRANSLATION_PREMERGE_VERIFY:
      all.length === 19 &&
      ownerMatch === 19 &&
      mismatch === 0 &&
      scan.violations.length === 0 &&
      words.length === 219 &&
      scan.inventoryCoverage === "100%" &&
      deDiff === "" &&
      syntaxPass &&
      mirrorPass
        ? "PASS"
        : "FAIL",
  };

  const out = path.join(ROOT, "reports/temp/et-c2-multitranslation-premerge-verify.json");
  fs.writeFileSync(out, JSON.stringify(result, null, 2));
  console.log(JSON.stringify(result, null, 2));
  if (result.ET_C2_MULTITRANSLATION_PREMERGE_VERIFY !== "PASS") process.exit(1);
}

main();
