#!/usr/bin/env node
"use strict";

const { execSync } = require("child_process");
const { ROOT } = require("../audit-common");

const BATCH_ID = "BATCH-001";
const BASELINE_PACK_COMMIT = "026f2b0c50d2b4a45ccdae2479900569f06701cf";
const PACK_FILES = {
  view: "reports/g2-a1-phase3-owner-review-batch-001-view.md",
  decisions: "reports/g2-a1-phase3-owner-review-batch-001-decisions.md",
  csv: "reports/g2-a1-phase3-owner-review-batch-001-decisions.csv",
  proof: "reports/g2-a1-phase3-owner-review-batch-001-proof.json",
};

function gitShow(commit, relPath) {
  return execSync(`git show ${commit}:${relPath}`, { cwd: ROOT, encoding: "utf8" });
}

function gitRevParse(ref) {
  return execSync(`git rev-parse ${ref}`, { cwd: ROOT, encoding: "utf8" }).trim();
}

module.exports = {
  BATCH_ID,
  BASELINE_PACK_COMMIT,
  PACK_FILES,
  gitShow,
  gitRevParse,
};
