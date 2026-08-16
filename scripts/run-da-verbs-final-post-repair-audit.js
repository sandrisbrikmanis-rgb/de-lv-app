#!/usr/bin/env node
"use strict";
/**
 * DA–DE Verbs final post-repair audit orchestrator (READ-ONLY).
 * Auto-generates OWNER review if findings remain (via audit-post-run hook when added).
 */
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const { filterAuditArgs } = require("./lib/audit-post-run");

const args = filterAuditArgs(process.argv.slice(2)).join(" ");
execSync(`node scripts/audit-da-verbs-final-post-repair.js ${args}`.trim(), {
  cwd: ROOT,
  stdio: "inherit",
});
