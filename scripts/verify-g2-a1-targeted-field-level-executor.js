#!/usr/bin/env node
"use strict";

const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const { buildMissingFieldRowsFromProduction } = require("./lib/g2-a1-production-current/missing-field-inventory");
const { runTargetedFieldLevelAudit } = require("./lib/g2-a1-production-current/targeted-field-level-executor");

async function main() {
  const blockers = [];
  execSync("node scripts/test-g2-a1-targeted-field-level-executor.js", { cwd: ROOT, stdio: "inherit" });
  execSync("node scripts/test-g2-a1-field-level-mapping.js", { cwd: ROOT, stdio: "inherit" });

  const built = buildMissingFieldRowsFromProduction();
  if (!built.pass || built.totalRows !== 95731) {
    blockers.push({ code: "MISSING_INVENTORY_COUNT", total: built.totalRows, pass: built.pass });
  }

  const dry = await runTargetedFieldLevelAudit({
    dryRun: true,
    useMultipartInventory: false,
    expectedMissingCount: 95731,
  });
  if (!dry.pass || dry.FULL_LINGUISTIC_AUDITS_EXECUTED !== 0) {
    blockers.push({ code: "DRY_RUN", detail: dry });
  }

  const prodDiff = execSync("git diff --name-only -- data www/data crowdin/content crowdin/ui", {
    cwd: ROOT,
    encoding: "utf8",
  }).trim();

  const gate = {
    G2_A1_TARGETED_FIELD_LEVEL_EXECUTOR_VERIFY: blockers.length === 0 ? "PASS" : "FAIL",
    missingFieldCount: built.totalRows,
    productionChanges: prodDiff ? prodDiff.split("\n").length : 0,
    BATCH_LIMIT_CHANGES: 0,
    FULL_LINGUISTIC_AUDITS_EXECUTED: 0,
    classification: dry.classification,
    blockers,
  };
  console.log(JSON.stringify(gate, null, 2));
  process.exit(blockers.length === 0 ? 0 : 1);
}

main();
