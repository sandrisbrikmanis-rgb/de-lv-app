#!/usr/bin/env node
"use strict";
/**
 * Orchestrator: DA–DE Verbs OWNER repairs final targeted regression audit.
 * Auto-generates regression OWNER review pack after audit (A1/A2 pattern).
 *
 * Usage:
 *   node scripts/run-da-verbs-owner-repairs-final-regression-audit.js [--skip-luna] [--skip-owner-review]
 */
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const { runPostAuditOwnerReview, filterAuditArgs } = require("./lib/audit-post-run");

const auditArgs = filterAuditArgs(process.argv.slice(2)).join(" ");

console.log(`\n=== audit-da-verbs-owner-repairs-final-regression.js ${auditArgs} ===\n`);
execSync(`node scripts/audit-da-verbs-owner-repairs-final-regression.js ${auditArgs}`.trim(), {
  cwd: ROOT,
  stdio: "inherit",
});

runPostAuditOwnerReview("verbs-regression");
