#!/usr/bin/env node
"use strict";
/**
 * Run DA–DE B1 final micro-repair regression closure audit (READ-ONLY).
 */
const { execSync } = require("child_process");
const path = require("path");
const { ROOT } = require("./lib/audit-common");

execSync("node scripts/audit-da-b1-final-micro-regression-closure.js", {
  cwd: ROOT,
  stdio: "inherit",
});
