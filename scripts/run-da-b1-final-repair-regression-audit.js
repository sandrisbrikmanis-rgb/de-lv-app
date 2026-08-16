#!/usr/bin/env node
"use strict";
/**
 * Run DA–DE B1 final repair regression audit (READ-ONLY).
 * Auto-generates OWNER review after audit when findings exist.
 */
const { spawnSync } = require("child_process");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const { runPostAuditOwnerReview } = require("./lib/audit-post-run");

const result = spawnSync("node", [path.join(ROOT, "scripts/audit-da-b1-final-repair-regression.js")], {
  cwd: ROOT,
  stdio: "inherit",
  env: process.env,
});

if (result.status === 0 || result.status === 1) {
  runPostAuditOwnerReview("b1-final-regression");
}

process.exit(result.status ?? 1);
