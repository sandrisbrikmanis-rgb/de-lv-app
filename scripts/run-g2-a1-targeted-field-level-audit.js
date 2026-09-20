#!/usr/bin/env node
"use strict";

const { runTargetedFieldLevelAudit } = require("./lib/g2-a1-production-current/targeted-field-level-executor");

async function main() {
  const executeLuna = process.argv.includes("--with-luna");
  const dryRun = process.argv.includes("--dry-run") || !executeLuna;
  const ensureInventory = process.argv.includes("--ensure-inventory");

  const result = await runTargetedFieldLevelAudit({
    dryRun,
    executeLuna,
    ensureFullInventoryWritten: ensureInventory,
    expectedMissingCount: 95731,
    useMultipartInventory: true,
  });

  console.log(JSON.stringify(result, null, 2));
  process.exit(result.pass ? 0 : 1);
}

main();
