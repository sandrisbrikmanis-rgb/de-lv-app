#!/usr/bin/env node
"use strict";
/**
 * Run DA–DE B1 final repair regression audit (READ-ONLY).
 * Usage: node scripts/run-da-b1-final-repair-regression-audit.js
 */
const { spawnSync } = require("child_process");
const path = require("path");
const { ROOT } = require("./lib/audit-common");

const result = spawnSync("node", [path.join(ROOT, "scripts/audit-da-b1-final-repair-regression.js")], {
  cwd: ROOT,
  stdio: "inherit",
  env: process.env,
});

process.exit(result.status ?? 1);
