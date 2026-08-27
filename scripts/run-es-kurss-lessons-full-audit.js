#!/usr/bin/env node
"use strict";
/**
 * ES–DE Kurss Lessons full audit orchestrator (READ-ONLY).
 * MASTER v1.9: auto-generates OWNER artifacts after audit when backlog > 0.
 *
 * Usage:
 *   node scripts/run-es-kurss-lessons-full-audit.js [--skip-luna] [--skip-owner-review] [--resume] [--test-luna]
 */
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const { runPostAuditOwnerReview, filterAuditArgs } = require("./lib/audit-post-run");

const AUDIT_JSON = path.join(ROOT, "reports/temp/es-kurss-lessons-full-audit.json");
const auditArgs = filterAuditArgs(process.argv.slice(2)).join(" ");

console.log(`\n=== audit-es-kurss-lessons-full.js ${auditArgs} ===\n`);
try {
  execSync(`node scripts/audit-es-kurss-lessons-full.js ${auditArgs}`.trim(), {
    cwd: ROOT,
    stdio: "inherit",
  });
} catch {
  // Audit exits 1 when findings remain — still generate OWNER review pack.
}

let backlogCount = 0;
if (fs.existsSync(AUDIT_JSON)) {
  const data = JSON.parse(fs.readFileSync(AUDIT_JSON, "utf8"));
  backlogCount = (data.findings || []).filter((f) => f.category !== "FALSE_POSITIVE").length;
}

runPostAuditOwnerReview("es-kurss-lessons-full", {
  backlogCount,
  dryRun: process.argv.includes("--owner-publish-dry-run"),
});
