#!/usr/bin/env node
"use strict";
/**
 * Production-CURRENT G2/A1 full discovery orchestrator (separate from phase3 Crowdin staging).
 * phase3:g2-a1:discovery = CROWDIN_STAGING_DISCOVERY (unchanged).
 */

const { runPreflight } = require("./lib/g2-a1-production-current/preflight");
const { buildProductionFileSetInventory } = require("./lib/g2-a1-production-current/inventory");
const { runDryRun } = require("./lib/g2-a1-production-current/dry-run");
const { authorizeFullLinguisticAudit } = require("./lib/g2-a1-production-current/full-gates");
const { writeJsonAtomic } = require("./lib/g2-a1-production-current/artifacts");

function parseArgs(argv) {
  const args = {
    preflight: false,
    inventory: false,
    dryRun: false,
    full: false,
    help: false,
    baseRef: "origin/main",
  };
  for (let i = 2; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === "--help" || arg === "-h") args.help = true;
    else if (arg === "--preflight") args.preflight = true;
    else if (arg === "--inventory") args.inventory = true;
    else if (arg === "--dry-run") args.dryRun = true;
    else if (arg === "--full") args.full = true;
    else if (arg === "--base-ref") args.baseRef = argv[++i];
    else throw new Error(`Unknown argument: ${arg}`);
  }
  const modeCount = [args.preflight, args.inventory, args.dryRun, args.full].filter(Boolean).length;
  if (args.help || modeCount === 0) args.help = true;
  if (!args.help && modeCount > 1) throw new Error("Choose exactly one of --preflight, --inventory, --dry-run, --full");
  return args;
}

function printHelp() {
  console.log(`Usage: node scripts/run-g2-a1-production-current-full-discovery.js <mode>

Modes (production CURRENT from data/** only):
  --preflight   MASTER + embedded registry + 64-file inventory gates
  --inventory   Write production file-set inventory JSON
  --dry-run     Preflight + enumerate audit rows (no Luna / no linguistic verdicts)
  --full        OWNER-gated full linguistic audit entry (Luna not enabled in minimal orchestrator task)

Crowdin staging discovery remains:
  npm run phase3:g2-a1:discovery   # CROWDIN_STAGING_DISCOVERY

Options:
  --base-ref <ref>   Git ref for MASTER premerge (default: origin/main)
  --help             Show help
`);
}

function emitGateJson(label, payload) {
  console.log(JSON.stringify({ gate: label, ...payload }, null, 2));
}

function main() {
  const args = parseArgs(process.argv);
  if (args.help) {
    printHelp();
    process.exit(0);
  }

  const options = { baseRef: args.baseRef };

  if (args.preflight) {
    const result = runPreflight(options);
    const written = writeJsonAtomic("preflight-gate.json", result);
    emitGateJson("preflight", { pass: result.pass, blockers: result.blockers, artifact: written });
    process.exit(result.pass ? 0 : 2);
  }

  if (args.inventory) {
    const inventory = buildProductionFileSetInventory();
    const written = writeJsonAtomic("production-file-set-inventory.json", inventory);
    emitGateJson("inventory", { pass: inventory.gate.pass, gate: inventory.gate, artifact: written });
    process.exit(inventory.gate.pass ? 0 : 2);
  }

  if (args.dryRun) {
    const result = runDryRun(options);
    const rowsSample = result.rows.slice(0, 5);
    const artifactPayload = {
      pass: result.pass,
      phase: result.phase,
      summary: result.summary,
      languageGate: result.preflight?.languageGate,
      fileSetGate: result.inventory?.gate,
      preflightPass: result.preflight?.pass,
      masterVersion: result.preflight?.masterVersion,
      perLang: result.perLang.map((p) => ({
        language: p.language,
        objects: p.objects,
        auditRows: p.auditRows,
        datasetProductionSha: p.datasetProductionSha,
        batchCheckPass: p.batchCheck?.pass,
      })),
      rowsSample,
      totalRows: result.rows.length,
    };
    const written = writeJsonAtomic("dry-run-summary.json", artifactPayload);
    if (result.rows.length > 0) {
      writeJsonAtomic("dry-run-rows-sample.json", rowsSample);
    }
    emitGateJson("dry-run", {
      pass: result.pass,
      totalAuditRows: result.rows.length,
      productionFileSetSha256: result.summary?.auditBaselineSha,
      artifact: written,
    });
    process.exit(result.pass ? 0 : 2);
  }

  if (args.full) {
    const auth = authorizeFullLinguisticAudit(options);
    const payload = {
      pass: false,
      phase: "full",
      authorization: {
        pass: auth.pass,
        blockers: auth.blockers,
        preflightPass: auth.preflightPass,
        masterVersion: auth.masterVersion,
        ownerAuthEnv: auth.ownerAuthEnv,
      },
      message:
        "Full linguistic audit (Luna) is not executed in MINIMAL_PRODUCTION_CURRENT_A1_AUDIT_ORCHESTRATOR task. " +
        "Preflight/authorization gates only; run authorized Luna pass in a follow-up task.",
    };
    writeJsonAtomic("full-blocked.json", payload);
    emitGateJson("full", payload);
    process.exit(auth.pass ? 3 : 2);
  }
}

main();
