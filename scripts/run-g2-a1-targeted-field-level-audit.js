#!/usr/bin/env node
"use strict";

const { runTargetedFieldLevelAudit } = require("./lib/g2-a1-production-current/targeted-field-level-executor");
const { AI_AUDIT_ROLE, AI_NOT_LANGUAGE_AUTHORITY } = require("./lib/g2-a1-production-current/constants");

function parseArgs(argv) {
  const args = {
    dryRun: false,
    executeLuna: false,
    ensureInventory: false,
    help: false,
    ownerAuthorizeTargetedAudit: false,
    ownerAuthorizeResumeAfterPilot: false,
    pilotOnly: false,
    expectedMainSha: null,
    expectedProductionFileSetSha: null,
  };
  for (let i = 2; i < argv.length; i++) {
    let arg = argv[i];
    let inlineValue = null;
    const eq = arg.indexOf("=");
    if (eq > 2 && arg.startsWith("--")) {
      inlineValue = arg.slice(eq + 1);
      arg = arg.slice(0, eq);
    }
    if (arg === "--help" || arg === "-h") args.help = true;
    else if (arg === "--dry-run") args.dryRun = true;
    else if (arg === "--with-luna") args.executeLuna = true;
    else if (arg === "--ensure-inventory") args.ensureInventory = true;
    else if (arg === "--owner-authorize-targeted-field-audit") args.ownerAuthorizeTargetedAudit = true;
    else if (arg === "--owner-authorize-resume-after-pilot") args.ownerAuthorizeResumeAfterPilot = true;
    else if (arg === "--pilot-only") args.pilotOnly = true;
    else if (arg === "--expected-main-sha") args.expectedMainSha = inlineValue ?? argv[++i];
    else if (arg === "--expected-production-file-set-sha") args.expectedProductionFileSetSha = inlineValue ?? argv[++i];
    else throw new Error(`Unknown argument: ${arg}`);
  }
  if (args.executeLuna) args.dryRun = false;
  if (!args.executeLuna && !args.dryRun && !args.help) args.dryRun = true;
  return args;
}

function printHelp() {
  console.log(`Usage: node scripts/run-g2-a1-targeted-field-level-audit.js [options]

Modes:
  --dry-run       Inventory + batch plan only (default when --with-luna omitted)
  --with-luna     Execute full targeted field-level Luna audit (288 batches)

OWNER authorization (--with-luna requires all three):
  --owner-authorize-targeted-field-audit
  --expected-main-sha=<full origin/main SHA>
  --expected-production-file-set-sha=<64-file production set SHA>

Optional:
  --ensure-inventory   Regenerate multipart missing-field inventory before run

AI role: ${AI_AUDIT_ROLE}; AI is NOT ${AI_NOT_LANGUAGE_AUTHORITY}.
`);
}

async function main() {
  const args = parseArgs(process.argv);
  if (args.help) {
    printHelp();
    process.exit(0);
  }

  const result = await runTargetedFieldLevelAudit({
    dryRun: args.dryRun,
    executeLuna: args.executeLuna,
    ensureFullInventoryWritten: args.ensureInventory,
    expectedMissingCount: 95731,
    useMultipartInventory: true,
    ownerAuthorizeTargetedAudit: args.ownerAuthorizeTargetedAudit,
    ownerAuthorizeResumeAfterPilot: args.ownerAuthorizeResumeAfterPilot,
    pilotOnly: args.pilotOnly,
    expectedMainSha: args.expectedMainSha,
    expectedProductionFileSetSha: args.expectedProductionFileSetSha,
  });

  console.log(JSON.stringify(result, null, 2));
  process.exit(result.pass ? 0 : 1);
}

main();
