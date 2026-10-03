#!/usr/bin/env node
"use strict";

const { ROOT } = require("./lib/audit-common");
const { runAutomaticDecisionsAudit } = require("./lib/g2-a1-phase3/automatic-decisions-5241-audit-repair");

function main() {
  const dryRun = process.argv.includes("--dry-run");
  const result = runAutomaticDecisionsAudit({ root: ROOT, dryRun });
  if (!result.pass) {
    console.error(JSON.stringify({ pass: false, classification: result.classification, errors: result.errors || [] }, null, 2));
    process.exit(1);
  }
  console.log(JSON.stringify({ pass: true, classification: result.classification, gates: result.proof }, null, 2));
}

if (require.main === module) {
  main();
}

module.exports = { main };
