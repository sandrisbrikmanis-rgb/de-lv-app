#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const { runTargetedFieldLevelAudit } = require("./lib/g2-a1-production-current/targeted-field-level-executor");
const { writeJsonAtomic } = require("./lib/g2-a1-production-current/artifacts");

function parseArgs(argv) {
  const args = {
    expectedMainSha: null,
    expectedProductionFileSetSha: null,
    ownerAuthorizeTargetedAudit: false,
  };
  for (let i = 2; i < argv.length; i++) {
    let arg = argv[i];
    let inline = null;
    const eq = arg.indexOf("=");
    if (eq > 2 && arg.startsWith("--")) {
      inline = arg.slice(eq + 1);
      arg = arg.slice(0, eq);
    }
    if (arg === "--owner-authorize-targeted-field-audit") args.ownerAuthorizeTargetedAudit = true;
    else if (arg === "--expected-main-sha") args.expectedMainSha = inline ?? argv[++i];
    else if (arg === "--expected-production-file-set-sha") args.expectedProductionFileSetSha = inline ?? argv[++i];
  }
  return args;
}

async function main() {
  const args = parseArgs(process.argv);
  const pilotStatePath = path.join(ROOT, "reports/temp/g2-a1-production-current/targeted-field-audit-state-pilot.json");
  const legacyState = path.join(ROOT, "reports/temp/g2-a1-production-current/targeted-field-audit-state.json");
  if (fs.existsSync(legacyState)) {
    fs.renameSync(legacyState, path.join(ROOT, "reports/temp/g2-a1-production-current/targeted-field-audit-state-pre-pilot-backup.json"));
  }

  const result = await runTargetedFieldLevelAudit({
    executeLuna: true,
    dryRun: false,
    pilotOnly: true,
    pilotBatchId: "bg|ordinary|0",
    useMultipartInventory: true,
    expectedMissingCount: 95731,
    ownerAuthorizeTargetedAudit: args.ownerAuthorizeTargetedAudit,
    expectedMainSha: args.expectedMainSha,
    expectedProductionFileSetSha: args.expectedProductionFileSetSha,
  });

  writeJsonAtomic("targeted-field-source-access-pilot-result.json", result);
  if (fs.existsSync(path.join(ROOT, "reports/temp/g2-a1-production-current/targeted-field-audit-state.json"))) {
    fs.copyFileSync(
      path.join(ROOT, "reports/temp/g2-a1-production-current/targeted-field-audit-state.json"),
      pilotStatePath,
    );
  }

  console.log(JSON.stringify(result, null, 2));
  process.exit(result.pass ? 0 : 1);
}

main();
