#!/usr/bin/env node
"use strict";
/**
 * ET–DE Kurss full audit orchestrator (READ-ONLY).
 * MASTER v1.9: auto-generates OWNER artifacts after audit when backlog > 0.
 *
 * Usage:
 *   node scripts/run-et-kurss-full-audit.js [--skip-luna] [--skip-owner-review] [--owner-publish-dry-run]
 */
require("dotenv").config({ path: require("path").join(__dirname, "..", ".env") });

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const { runPostAuditOwnerReview, filterAuditArgs } = require("./lib/audit-post-run");

const LUNA_DIR = path.join(ROOT, "reports/temp/et-kurss-full-audit-luna");
const AUDIT_JSON = path.join(ROOT, "reports/temp/et-kurss-full-audit.json");
const SKIP_LUNA = process.argv.includes("--skip-luna");
const auditArgs = filterAuditArgs(process.argv.slice(2))
  .filter((a) => a !== "--skip-luna")
  .join(" ");

function countBatches() {
  if (!fs.existsSync(LUNA_DIR)) return 0;
  return fs.readdirSync(LUNA_DIR).filter((f) => /^batch-\d+\.json$/.test(f)).length;
}

function countLunaFindingsFiles() {
  if (!fs.existsSync(LUNA_DIR)) return 0;
  return fs.readdirSync(LUNA_DIR).filter((f) => f.endsWith("-findings.json")).length;
}

console.log("\n=== ET–DE KURSS FULL_DISCOVERY AUDIT (READ-ONLY) — MASTER v1.9 ===\n");

if (!SKIP_LUNA) {
  console.log("\n=== Export Luna batches ===\n");
  execSync("node scripts/audit-et-kurss-full.js --export-only", { cwd: ROOT, stdio: "inherit" });

  const expected = countBatches();
  const loaded = countLunaFindingsFiles();
  if (loaded < expected) {
    console.log(`\n=== Luna linguistic audit (${loaded}/${expected} batches) ===\n`);
    execSync("node scripts/audit-et-kurss-full-luna-api.js", { cwd: ROOT, stdio: "inherit" });
  }
} else {
  console.log("\n=== Luna SKIPPED (--skip-luna) ===\n");
}

console.log(`\n=== audit-et-kurss-full.js ${auditArgs || "(full merge)"} ===\n`);
try {
  execSync(`node scripts/audit-et-kurss-full.js ${auditArgs}`.trim(), {
    cwd: ROOT,
    stdio: "inherit",
  });
} catch {
  // Audit exits 1 when findings remain — still generate OWNER review pack.
}

let backlogCount = 0;
if (fs.existsSync(AUDIT_JSON)) {
  const data = JSON.parse(fs.readFileSync(AUDIT_JSON, "utf8"));
  backlogCount = (data.ownerBacklogFinal || data.findings || []).length;
}

runPostAuditOwnerReview("et-kurss-full", {
  backlogCount,
  dryRun: process.argv.includes("--owner-publish-dry-run"),
});

if (fs.existsSync(AUDIT_JSON)) {
  const data = JSON.parse(fs.readFileSync(AUDIT_JSON, "utf8"));
  console.log("\n=== DONE ===\n");
  console.log(JSON.stringify({
    stageVerdict: data.stageVerdict,
    ownerBacklogFinal: data.ownerBacklogFinalCount,
    totalFields: data.stats?.totalFields,
    originMainSha: data.baseline?.originMainSha,
  }, null, 2));
}
