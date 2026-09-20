#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const { writeJsonAtomic } = require("./lib/g2-a1-production-current/artifacts");

function main() {
  const matrixPath = path.join(ROOT, "reports/g2-a1-production-current/official-source-adapter-matrix.json");
  const blockers = [];
  if (!fs.existsSync(matrixPath)) blockers.push({ code: "MISSING_ADAPTER_MATRIX" });
  else {
    const matrix = JSON.parse(fs.readFileSync(matrixPath, "utf8"));
    if (!matrix.pass) blockers.push({ code: "ADAPTERS_INCOMPLETE", pending: matrix.adaptersPending });
  }

  const gate = {
    pass: blockers.length === 0,
    blockers,
    classification: blockers.length
      ? "G2_A1_OFFICIAL_SOURCE_ENTRY_VALIDATION_IN_PROGRESS"
      : "G2_A1_OFFICIAL_SOURCE_ENTRY_VALIDATION_READY",
    nextAction: blockers.length
      ? "IMPLEMENT_REMAINING_TARGET_SOURCE_ADAPTERS_AND_NEW_PILOTS"
      : "OWNER_MAY_AUTHORIZE_FULL_TARGETED_FIELD_LEVEL_AUDIT_RESUME",
  };
  writeJsonAtomic("official-source-entry-validation-ready.json", gate);
  console.log(JSON.stringify(gate, null, 2));
  process.exit(gate.pass ? 0 : 1);
}

main();
