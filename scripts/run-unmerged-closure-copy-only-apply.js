#!/usr/bin/env node
"use strict";

const { runCopyOnlyApply } = require("./lib/content-discovery/unmerged-closure-copy-only-apply");

function main() {
  const dryRun = process.argv.includes("--dry-run");
  const verifyOnly = process.argv.includes("--verify-only");
  console.log(`\n=== Unmerged closure COPY-ONLY apply ${dryRun ? "(dry-run)" : verifyOnly ? "(verify-only)" : ""} ===\n`);

  const result = runCopyOnlyApply({ dryRun, verifyOnly });
  if (!result.ok) {
    console.error(`STOP: ${result.error}`);
    if (result.preflightMetrics) console.error(JSON.stringify(result.preflightMetrics, null, 2));
    if (result.mismatches?.length) {
      console.error("Mismatches:", result.mismatches.length);
      for (const m of result.mismatches.slice(0, 10)) {
        console.error(`  PR ${m.prRefs} ${m.fieldPath}: ${m.errorCategory}`);
        console.error(`    OWNER CURRENT: ${JSON.stringify(m.ownerCurrent)?.slice(0, 80)}`);
        console.error(`    ACTUAL: ${JSON.stringify(m.actualCurrent)?.slice(0, 80)}`);
      }
    }
    process.exit(1);
  }

  if (result.dryRun) {
    console.log("PREFLIGHT PASS (dry-run)");
    console.log(JSON.stringify(result.preflightMetrics, null, 2));
    console.log(`EN B1 unique: ${result.enB1Unique}, CS B2 unique: ${result.csB2Unique}`);
    process.exit(0);
  }

  console.log(`PRE_APPLY_HEAD = ${result.report.preApplyHead}`);
  console.log(`APPLIED_VERIFIED = ${result.report.appliedVerified}/963`);
  console.log(`VERDICT = ${result.report.verdict}`);
  console.log(`APPLY = ${result.APPLY}`);
  console.log(`Changed files:`, result.report.changedFiles);
}

main();
