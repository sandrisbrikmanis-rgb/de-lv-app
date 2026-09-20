#!/usr/bin/env node
"use strict";

const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");

function main() {
  const blockers = [];
  execSync("node scripts/test-g2-a1-field-level-mapping.js", { cwd: ROOT, stdio: "inherit" });

  const manifestPath = path.join(ROOT, "reports/g2-a1-production-current/FIRST_RUN_EVIDENCE_MANIFEST.json");
  if (!fs.existsSync(manifestPath)) {
    blockers.push({ code: "MISSING_FIRST_RUN_MANIFEST", path: "reports/g2-a1-production-current/FIRST_RUN_EVIDENCE_MANIFEST.json" });
  }

  const prodDiff = execSync("git diff --name-only -- data www/data crowdin/content crowdin/ui", {
    cwd: ROOT,
    encoding: "utf8",
  }).trim();

  const gate = {
    G2_A1_FIELD_LEVEL_MAPPING_VERIFY: blockers.length === 0 ? "PASS" : "FAIL",
    productionChanges: prodDiff ? prodDiff.split("\n").length : 0,
    blockers,
  };
  console.log(JSON.stringify(gate, null, 2));
  process.exit(blockers.length === 0 ? 0 : 1);
}

main();
