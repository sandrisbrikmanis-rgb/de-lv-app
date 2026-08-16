#!/usr/bin/env node
"use strict";
/**
 * Generate DA Kurss final post-repair OWNER review pack (READ-ONLY).
 */
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const { runPostAuditOwnerReview } = require("./lib/audit-post-run");

execSync("node scripts/build-da-kurss-final-post-repair-owner-review.js", {
  cwd: ROOT,
  stdio: "inherit",
});

runPostAuditOwnerReview("kurss-final-post-repair", { force: true });
