#!/usr/bin/env node
"use strict";
/**
 * MASTER v1.8 ET A1 discovery tooling regression (no Luna run).
 * Reconstructs PR #604 23/23 forensic classification from historical artifacts.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const { runDiscoveryStability, loadJsonFromGit, pathFamilyKey } = require("./lib/discovery-stability");
const {
  DATASET,
  PRODUCTION_PATH,
  REGISTRY_DIR,
  AUDIT_RUNS,
  OWNER_SOURCES,
  REGRESSION_EXPECTED,
  SEMANTIC_DEDUP_CARDS,
} = require("./lib/et-a1-discovery-config");

const PR604_COMMIT = "5637d944";
const PRE603_MAIN = "a313c363";

function git(cmd) {
  try {
    return execSync(cmd, { cwd: ROOT, encoding: "utf8", stdio: "pipe" }).trim();
  } catch {
    return "";
  }
}

function loadWords(filePath) {
  const raw = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(raw, ctx);
  return ctx.window.A1_WORDS;
}

function assertEq(label, actual, expected) {
  const pass = actual === expected;
  return { label, actual, expected, pass };
}

function main() {
  execSync("git fetch origin", { cwd: ROOT, stdio: "pipe" });

  const auditJson = loadJsonFromGit(PR604_COMMIT, "reports/temp/et-a1-full-audit.json");
  if (!auditJson) {
    console.error("BLOCKED: cannot load PR604 audit JSON from git");
    process.exit(2);
  }

  const findings = (auditJson.validatedFindings || []).filter((f) => f.validatedReal !== false);
  const productionPath = path.join(ROOT, PRODUCTION_PATH);
  const words = loadWords(productionPath);
  const wordsPre603 = require("./lib/discovery-stability").loadWordsFromGit(PRE603_MAIN, PRODUCTION_PATH);

  const prodBlob = git(`git rev-parse ${PR604_COMMIT}:${PRODUCTION_PATH}`);
  const preBlob = git(`git rev-parse ${PRE603_MAIN}:${PRODUCTION_PATH}`);

  const result = runDiscoveryStability({
    dataset: DATASET,
    registryDir: REGISTRY_DIR,
    auditRuns: AUDIT_RUNS.filter((r) => r.id !== "pr604-post603"),
    currentRunId: "pr604-post603",
    findings,
    ownerSources: OWNER_SOURCES,
    productionPath: PRODUCTION_PATH,
    words,
    wordsAtPreviousAudit: wordsPre603,
    repairRange: {
      beforeSha: PRE603_MAIN,
      afterSha: git(`git rev-parse ${PR604_COMMIT}`),
      productionBlobCurrent: prodBlob,
      productionBlobPrevious: preBlob,
    },
    ownerHistoryLoaded: true,
    persistCurrentRaw: false,
    currentMeta: {
      auditRunId: "pr604-post603",
      mainSha: PR604_COMMIT,
      productionBlob: prodBlob,
      masterVersion: "1.7",
      model: auditJson.meta?.model || "gpt-5.6-luna",
    },
  });

  const c = result.rootCauseCounts;
  const checks = [
    assertEq("CURRENT_FINDINGS", findings.length, REGRESSION_EXPECTED.CURRENT_FINDINGS),
    assertEq("PREVIOUSLY_SEEN_RAW_LLM_CANDIDATE", c.PREVIOUSLY_SEEN_RAW_LLM_CANDIDATE, REGRESSION_EXPECTED.PREVIOUSLY_SEEN_RAW_LLM_CANDIDATE),
    assertEq("PRE_EXISTING_BUT_PREVIOUSLY_MISSED", c.PRE_EXISTING_BUT_PREVIOUSLY_MISSED, REGRESSION_EXPECTED.PRE_EXISTING_BUT_PREVIOUSLY_MISSED),
    assertEq("OWNER_DECISION_CONFIRMED", c.OWNER_DECISION_CONFIRMED, REGRESSION_EXPECTED.OWNER_DECISION_CONFIRMED),
    assertEq("OWNER_DECISION_REOPEN_REQUIRED", c.OWNER_DECISION_REOPEN_REQUIRED, REGRESSION_EXPECTED.OWNER_DECISION_REOPEN_REQUIRED),
    assertEq("REPAIR_REGRESSION", c.REPAIR_REGRESSION, REGRESSION_EXPECTED.REPAIR_REGRESSION),
    assertEq("FALSE_POSITIVE_OR_STYLE_ONLY", c.FALSE_POSITIVE_OR_STYLE_ONLY, REGRESSION_EXPECTED.FALSE_POSITIVE_OR_STYLE_ONLY),
    assertEq("GENUINELY_NEW_VALIDATED_REAL_FINDING", c.GENUINELY_NEW_VALIDATED_REAL_FINDING, REGRESSION_EXPECTED.GENUINELY_NEW_VALIDATED_REAL_FINDING),
    assertEq("AUDIT_DISCOVERY_NON_REPRODUCIBILITY", result.AUDIT_DISCOVERY_NON_REPRODUCIBILITY, REGRESSION_EXPECTED.AUDIT_DISCOVERY_NON_REPRODUCIBILITY),
  ];

  const semanticChecks = [];
  for (const cardId of SEMANTIC_DEDUP_CARDS) {
    const rows = result.classified.filter((r) => r.cardId === cardId);
    const notGenuinelyNew = rows.every((r) => r.rootCause !== "GENUINELY_NEW_VALIDATED_REAL_FINDING");
    const hasPathFamily = rows.some((r) => r.pathFamilyMatch || r.seenInPreviousRaw === "YES");
    semanticChecks.push({
      cardId,
      count: rows.length,
      notGenuinelyNew,
      hasPathFamily,
      pass: rows.length > 0 && notGenuinelyNew,
    });
  }

  const ownerConfirmedRows = result.classified.filter(
    (r) => r.rootCause === "OWNER_DECISION_CONFIRMED",
  );
  const ownerHistoryPass = ownerConfirmedRows.every((r) => !r.ownerBacklogEligible);

  const needsSourceReviewTest = {
    label: "NEEDS_SOURCE_REVIEW carry-forward registry present",
    pass: fs.existsSync(path.join(REGISTRY_DIR, "needs-source-review-unresolved.json")),
  };

  const churnPass =
    result.discoveryChurn.PREVIOUS_RAW_COUNT >= 0
    && result.discoveryChurn.CURRENT_RAW_COUNT === findings.length
    && typeof result.discoveryChurn.DISCOVERY_CHURN_RATE === "number";

  const productionDiff = git("git diff --name-only -- data/ www/data/");
  const productionClean = productionDiff === "";

  const allPass =
    checks.every((x) => x.pass)
    && semanticChecks.every((x) => x.pass)
    && ownerHistoryPass
    && needsSourceReviewTest.pass
    && churnPass
    && productionClean;

  const out = {
    TOOLING_REGRESSION: allPass ? "PASS" : "FAIL",
    checks,
    semanticDedup: semanticChecks,
    ownerHistoryRegression: ownerHistoryPass ? "PASS" : "FAIL",
    needsSourceReviewCarryForward: needsSourceReviewTest.pass ? "PASS" : "FAIL",
    discoveryChurn: churnPass ? "PASS" : "FAIL",
    productionDiff: productionClean ? 0 : productionDiff.split("\n").length,
    metrics: result.metrics,
    gates: result.gates,
    discoveryChurnMetrics: result.discoveryChurn,
  };

  console.log(JSON.stringify(out, null, 2));
  process.exit(allPass ? 0 : 1);
}

main();
