#!/usr/bin/env node
"use strict";

const { ROOT } = require("./lib/audit-common");
const {
  runCrowdinStagingCopyOnlyApply,
  writeApplyReports,
} = require("./lib/g2-a1-phase3/crowdin-staging-copy-only-apply");

function parseArgs(argv) {
  const args = { dryRun: false, help: false };
  for (let i = 2; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === "--help" || arg === "-h") args.help = true;
    else if (arg === "--dry-run") args.dryRun = true;
    else throw new Error(`Unknown argument: ${arg}`);
  }
  return args;
}

function printHelp() {
  console.log(`Usage: node scripts/apply-g2-a1-phase3-crowdin-staging-copy-only.js [--dry-run]

Copy Crowdin G2/A1 staging translations into App production files (31 langs × data + www/data).
Requires reports/g2-a1-crowdin-app-apply-owner-decision.md.
`);
}

function main() {
  const args = parseArgs(process.argv);
  if (args.help) {
    printHelp();
    process.exit(0);
  }

  const preStructureRepairHeadSha = require("child_process")
    .execSync("git rev-parse HEAD", { cwd: ROOT, encoding: "utf8" })
    .trim();
  const result = runCrowdinStagingCopyOnlyApply({
    root: ROOT,
    dryRun: args.dryRun,
    preStructureRepairHeadSha,
    alignStudyStructure: true,
  });
  result.finalHeadSha = require("child_process")
    .execSync("git rev-parse HEAD", { cwd: ROOT, encoding: "utf8" })
    .trim();
  const reports = writeApplyReports(result, ROOT);

  console.log(
    JSON.stringify(
      {
        classification: result.classification,
        dryRun: result.dryRun,
        languagesApplied: result.languagesApplied,
        valuesMatched: result.valuesMatched,
        filesChanged: result.filesChanged,
        outputHash: result.outputHash,
        reports,
      },
      null,
      2,
    ),
  );

  if (!result.pass) process.exit(1);
}

if (require.main === module) {
  main();
}

module.exports = { main };
