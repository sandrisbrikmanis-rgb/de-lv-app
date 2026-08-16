#!/usr/bin/env node
"use strict";
/**
 * Orchestrator: DA–DE Verbs OWNER repairs final targeted regression audit.
 */
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");

const args = process.argv.slice(2).join(" ");
execSync(`node scripts/audit-da-verbs-owner-repairs-final-regression.js ${args}`, {
  cwd: ROOT,
  stdio: "inherit",
});
