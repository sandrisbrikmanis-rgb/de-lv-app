#!/usr/bin/env node
"use strict";
/**
 * MASTER standard-line pre-merge / post-merge verification gate.
 * `MASTER_V1_12_*` = v1.12+ semantic retention line, not a frozen document version pin.
 */
const fs = require("fs");
const path = require("path");
const { runMasterPremergeVerify } = require("./lib/master-premerge-verify-core");

const ROOT = path.join(__dirname, "..");

function main() {
  const result = runMasterPremergeVerify({
    baseRef: process.env.BASE_REF || "origin/main",
  });

  const outPath = path.join(ROOT, "reports/temp/master-v112-verify.json");
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, `${JSON.stringify(result, null, 2)}\n`, "utf8");
  console.log(JSON.stringify(result, null, 2));

  if (result.MASTER_V1_12_PREMERGE_VERIFY !== "PASS") {
    process.exit(1);
  }
}

main();
