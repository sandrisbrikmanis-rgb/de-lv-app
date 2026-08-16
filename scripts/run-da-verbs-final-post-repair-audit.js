#!/usr/bin/env node
"use strict";
/**
 * DA–DE Verbs final post-repair audit orchestrator (READ-ONLY).
 * Auto-generates OWNER review + accepted + GitHub index after audit (A1/A2 pattern).
 *
 * Usage:
 *   node scripts/run-da-verbs-final-post-repair-audit.js [--skip-luna] [--skip-owner-review]
 */
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const { runPostAuditOwnerReview, filterAuditArgs } = require("./lib/audit-post-run");

const auditArgs = filterAuditArgs(process.argv.slice(2)).join(" ");

console.log(`\n=== audit-da-verbs-final-post-repair.js ${auditArgs} ===\n`);
try {
  execSync(`node scripts/audit-da-verbs-final-post-repair.js ${auditArgs}`.trim(), {
    cwd: ROOT,
    stdio: "inherit",
  });
} catch {
  // Audit exits 1 when findings remain — still generate OWNER review pack.
}

runPostAuditOwnerReview("verbs-final-post-repair");
