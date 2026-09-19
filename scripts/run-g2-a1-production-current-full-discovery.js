#!/usr/bin/env node
"use strict";
/**
 * Production-CURRENT G2/A1 full discovery orchestrator (separate from phase3 Crowdin staging).
 * phase3:g2-a1:discovery = CROWDIN_STAGING_DISCOVERY (unchanged).
 */

const { runPreflight } = require("./lib/g2-a1-production-current/preflight");
const { buildProductionFileSetInventory } = require("./lib/g2-a1-production-current/inventory");
const { runDryRun } = require("./lib/g2-a1-production-current/dry-run");
const { runFullDiscoveryAudit } = require("./lib/g2-a1-production-current/full-discovery-executor");
const { writeJsonAtomic } = require("./lib/g2-a1-production-current/artifacts");
const { AI_AUDIT_ROLE, AI_NOT_LANGUAGE_AUTHORITY } = require("./lib/g2-a1-production-current/constants");

function parseArgs(argv) {
  const args = {
    preflight: false,
    inventory: false,
    dryRun: false,
    full: false,
    withLuna: false,
    help: false,
    baseRef: "origin/main",
    ownerAuthorizeFullAudit: false,
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
    else if (arg === "--preflight") args.preflight = true;
    else if (arg === "--inventory") args.inventory = true;
    else if (arg === "--dry-run") args.dryRun = true;
    else if (arg === "--full") args.full = true;
    else if (arg === "--with-luna") args.withLuna = true;
    else if (arg === "--base-ref") args.baseRef = inlineValue ?? argv[++i];
    else if (arg === "--owner-authorize-full-audit") args.ownerAuthorizeFullAudit = true;
    else if (arg === "--expected-main-sha") args.expectedMainSha = inlineValue ?? argv[++i];
    else if (arg === "--expected-production-file-set-sha") args.expectedProductionFileSetSha = inlineValue ?? argv[++i];
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
  --dry-run     Preflight + technical inventory rows (no AUDIT_VERDICT)
  --full        OWNER-gated FULL LINGUISTIC DISCOVERY (executor; add --with-luna to run Luna pass)

Crowdin staging discovery remains:
  npm run phase3:g2-a1:discovery   # CROWDIN_STAGING_DISCOVERY

Full mode requires:
  --owner-authorize-full-audit
  --expected-main-sha=<full origin/main SHA>
  --expected-production-file-set-sha=<64-file set SHA>

Optional:
  --with-luna     Execute Luna linguistic pass (requires OPENAI_API_KEY; not used in executor-only CI tests)

AI role (APVIENOTS §15): ${AI_AUDIT_ROLE}; AI is NOT ${AI_NOT_LANGUAGE_AUTHORITY}.

Options:
  --base-ref <ref>   Git ref for MASTER premerge (default: origin/main)
  --help             Show help
`);
}

function emitGateJson(label, payload) {
  console.log(JSON.stringify({ gate: label, ...payload }, null, 2));
}

async function main() {
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
      recordKind: "TECHNICAL_INVENTORY",
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
    const result = await runFullDiscoveryAudit({
      ownerAuthorizeFullAudit: args.ownerAuthorizeFullAudit,
      expectedMainSha: args.expectedMainSha,
      expectedProductionFileSetSha: args.expectedProductionFileSetSha,
      baseRef: args.baseRef,
      executeLuna: args.withLuna,
      writeArtifacts: args.withLuna,
    });
    writeJsonAtomic("full-discovery-result.json", {
      pass: result.pass,
      phase: result.phase,
      linguisticAuditsExecuted: result.linguisticAuditsExecuted || 0,
      metadata: result.metadata || null,
      blockers: result.blockers || [],
      coverage: result.coverage || null,
      postRun: result.postRun || null,
    });
    emitGateJson("full", result);
    if (!result.pass) process.exit(2);
    process.exit(result.phase === "full-discovery-ready" ? 0 : result.linguisticAuditsExecuted ? 0 : 3);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
