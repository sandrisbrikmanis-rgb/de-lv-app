#!/usr/bin/env node
"use strict";
/**
 * Orchestrator: DA–DE Verbs OWNER repairs final targeted regression audit.
 *
 * After audit (unless --skip-owner-review):
 *   build-da-verbs-regression-owner-review.js — review + decisions + accepted + GitHub index
 *
 * Usage:
 *   node scripts/run-da-verbs-owner-repairs-final-regression-audit.js [--skip-luna] [--skip-owner-review]
 */
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");

const argv = process.argv.slice(2);
const skipOwnerReview = argv.includes("--skip-owner-review");
const auditArgs = argv.filter((a) => a !== "--skip-owner-review").join(" ");

function run(script, extraEnv = {}) {
  console.log(`\n=== ${script} ===\n`);
  execSync(`node scripts/${script}`, {
    cwd: ROOT,
    stdio: "inherit",
    env: { ...process.env, ...extraEnv },
  });
}

run(`audit-da-verbs-owner-repairs-final-regression.js ${auditArgs}`.trim());

if (!skipOwnerReview) {
  run("build-da-verbs-regression-owner-review.js");
  console.log("\n=== OWNER review pack ===\n");
  console.log("  reports/da-verbs-owner-review-regression-GITHUB.md");
  console.log("  reports/da-verbs-owner-review-regression-README.md");
  console.log("  reports/da-verbs-owner-decisions-regression.md");
  console.log("  reports/da-verbs-owner-accepted-regression.md");
}
