#!/usr/bin/env node
"use strict";
/**
 * DA–DE Kurss full audit orchestrator (deterministic + GPT-5.6 Luna + OWNER pack).
 *
 * Usage:
 *   node scripts/run-da-kurss-full-audit.js [--skip-luna] [--skip-owner-review] [--force-luna]
 */
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const { runPostAuditOwnerReview, filterAuditArgs } = require("./lib/audit-post-run");

const argv = process.argv.slice(2);
const skipLuna = argv.includes("--skip-luna");
const forceLuna = argv.includes("--force-luna");
const auditArgs = filterAuditArgs(argv).join(" ");

console.log("\n=== Phase 1: export Luna batches ===\n");
execSync("node scripts/audit-da-kurss-full.js --export-only", { cwd: ROOT, stdio: "inherit" });

if (!skipLuna) {
  console.log("\n=== Phase 2: GPT-5.6 Luna API batches ===\n");
  const lunaFlags = forceLuna ? " --force" : "";
  try {
    execSync(`node scripts/audit-da-kurss-full-luna-api.js${lunaFlags}`, { cwd: ROOT, stdio: "inherit" });
  } catch (e) {
    console.warn("Luna API pass incomplete:", e.message);
  }
} else {
  console.log("\n=== Phase 2: Luna SKIPPED (--skip-luna) ===\n");
}

console.log(`\n=== Phase 3: audit-da-kurss-full.js ${auditArgs} ===\n`);
try {
  execSync(`node scripts/audit-da-kurss-full.js ${auditArgs}`.trim(), {
    cwd: ROOT,
    stdio: "inherit",
  });
} catch {
  // Audit exits 1 when findings remain — still generate OWNER review pack.
}

runPostAuditOwnerReview("kurss-full");
