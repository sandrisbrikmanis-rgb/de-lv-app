#!/usr/bin/env node
"use strict";
/**
 * Generate DA Kurss final post-repair OWNER review pack (READ-ONLY).
 */
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");

execSync("node scripts/build-da-kurss-final-post-repair-owner-review.js", {
  cwd: ROOT,
  stdio: "inherit",
});
