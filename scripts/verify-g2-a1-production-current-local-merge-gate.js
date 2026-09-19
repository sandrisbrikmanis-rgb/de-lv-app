#!/usr/bin/env node
"use strict";

const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const { buildAuditScopeInventory } = require("./lib/g2-a1-production-current/audit-scope-inventory");
const { buildBatchManifest } = require("./lib/g2-a1-production-current/batch-manifest");
const { buildProductionFileSetInventory } = require("./lib/g2-a1-production-current/inventory");

const COMMANDS = [
  "npm run test:master-premerge-section-numbers",
  "npm run test:embedded-language-registry",
  "npm run verify:master-v112-premerge",
  "npm run test:g2-a1-production-current-orchestrator",
  "npm run test:g2-a1-production-current-master-pipeline",
  "npm run verify:g2-a1-production-current-orchestrator",
  "npm run audit:g2-a1:production-current:preflight",
  "npm run audit:g2-a1:production-current:inventory",
  "npm run audit:g2-a1:production-current:dry-run",
  "npm run test:g2-a1-production-current-owner-authorization-runtime",
];

function runStep(cmd) {
  try {
    execSync(cmd, { cwd: ROOT, encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] });
    return { cmd, exitCode: 0, pass: true };
  } catch (e) {
    return {
      cmd,
      exitCode: e.status ?? 1,
      pass: false,
      stderr: String(e.stderr || e.message).slice(0, 2000),
    };
  }
}

function main() {
  const steps = COMMANDS.map(runStep);
  const scope = buildAuditScopeInventory();
  const fileSet = buildProductionFileSetInventory();
  const batch = buildBatchManifest();
  const prodDiff = execSync("git diff --name-only -- data www/data crowdin/content crowdin/ui", {
    cwd: ROOT,
    encoding: "utf8",
  }).trim();
  const workflowsDir = path.join(ROOT, ".github", "workflows");
  const ciStatus = fs.existsSync(workflowsDir)
    ? "GITHUB_WORKFLOWS_PRESENT"
    : "NO_APPLICABLE_GITHUB_CI_CONFIGURED";

  const gates = {
    MASTER_GATES: steps.find((s) => s.cmd.includes("verify:master"))?.pass ? "PASS" : "FAIL",
    AUDIT_LANGUAGES: scope.AUDIT_LANGUAGES,
    totalAuditRows: scope.totalAuditRows,
    DATA_A1_FILES: fileSet.gate.DATA_A1_FILES,
    WWW_A1_FILES: fileSet.gate.WWW_A1_FILES,
    TOTAL_FILE_SET: fileSet.gate.TOTAL_A1_FILE_SET,
    MIRROR_MISMATCHES: fileSet.gate.MIRROR_MISMATCHES,
    STAGING_AS_CURRENT: scope.STAGING_AS_CURRENT,
    AUDIT_SOURCE: scope.AUDIT_SOURCE,
    BATCH_LIMIT_CHANGES: batch.BATCH_LIMIT_CHANGES,
    batchManifestPass: batch.pass,
    PRODUCTION_CHANGES: prodDiff ? prodDiff.split("\n").filter(Boolean).length : 0,
    FULL_AUDIT_EXECUTED: 0,
    ciStatus,
    allStepsPass: steps.every((s) => s.pass) && scope.pass && fileSet.gate.pass && batch.pass,
  };

  const manifest = {
    classification: "G2_A1_PRODUCTION_CURRENT_LOCAL_MERGE_GATE",
    generatedAt: new Date().toISOString(),
    headSha: execSync("git rev-parse HEAD", { cwd: ROOT, encoding: "utf8" }).trim(),
    originMainSha: execSync("git rev-parse origin/main", { cwd: ROOT, encoding: "utf8" }).trim(),
    ciInvestigation: {
      workflowsDirectoryExists: fs.existsSync(workflowsDir),
      conclusion: ciStatus,
      reason:
        ciStatus === "NO_APPLICABLE_GITHUB_CI_CONFIGURED"
          ? "No .github/workflows in repository; local verifier suite is merge gate."
          : "Workflows present — check GitHub Actions tab for PR runs.",
    },
    steps,
    gates,
    scopeSummary: {
      cardTypeTotals: scope.cardTypeTotals,
      fieldCategoryTotals: scope.fieldCategoryTotals,
      productionFileSetSha256: fileSet.gate.productionFileSetSha256,
    },
  };

  const outDir = path.join(ROOT, "reports", "g2-a1-production-current");
  fs.mkdirSync(outDir, { recursive: true });
  const outPath = path.join(outDir, "local-merge-gate-manifest.json");
  fs.writeFileSync(outPath, `${JSON.stringify(manifest, null, 2)}\n`, "utf8");
  console.log(JSON.stringify(manifest, null, 2));
  process.exit(manifest.gates.allStepsPass ? 0 : 1);
}

main();
