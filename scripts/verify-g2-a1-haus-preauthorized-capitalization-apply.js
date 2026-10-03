#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const {
  verifyHausCapRuntimeVerification,
  CLOSURE_REL,
  RUNTIME_REL,
  DEFAULT_PRE_APPLY_SHA,
  DEFAULT_PRODUCTION_APPLY_SHA,
} = require("./lib/g2-a1-production-current/haus-preauthorized-cap-commit-range");
const { APP_LANGUAGE_TO_LOCALE } = require("./lib/master-initial-case-only");
const { PREAUTHORIZED_CAP_ROWS } = require("./lib/g2-a1-production-current/haus-preauthorized-capitalization");
const { productionA1Rel, wwwA1Rel } = require("./lib/g2-a1-production-current/paths");

function readClosure() {
  const p = path.join(ROOT, CLOSURE_REL);
  if (!fs.existsSync(p)) {
    return { ok: false, code: "CLOSURE_MISSING", path: CLOSURE_REL };
  }
  return { ok: true, closure: JSON.parse(fs.readFileSync(p, "utf8")) };
}

function metricsMatchClosure(live, expected) {
  const keys = [
    "changedProductionLogicalFields",
    "changedDataFields",
    "changedWwwMirrorFields",
    "changedFiles",
    "unauthorizedProductionFieldChanges",
    "deFieldChanges",
    "crowdinChanges",
    "mirrorMismatches",
    "productionFileSetShaBefore",
    "productionFileSetShaAfter",
  ];
  const mismatches = [];
  for (const k of keys) {
    if (live[k] !== expected[k]) mismatches.push({ key: k, live: live[k], expected: expected[k] });
  }
  return mismatches;
}

function assertJsSyntaxAtHead(relPath) {
  execSync(`node --check ${JSON.stringify(path.join(ROOT, relPath))}`, { stdio: "pipe" });
}

function main() {
  const blockers = [];
  const closureRead = readClosure();
  if (!closureRead.ok) {
    console.log(JSON.stringify({ pass: false, blockers: [closureRead] }, null, 2));
    process.exit(1);
  }
  const closure = closureRead.closure;

  if (closure.preApplySha !== DEFAULT_PRE_APPLY_SHA) {
    blockers.push({ code: "CLOSURE_PRE_APPLY_MISMATCH", closure: closure.preApplySha });
  }
  if (closure.productionApplySha !== DEFAULT_PRODUCTION_APPLY_SHA) {
    blockers.push({ code: "CLOSURE_PRODUCTION_APPLY_MISMATCH", closure: closure.productionApplySha });
  }

  const result = verifyHausCapRuntimeVerification({
    repoRoot: ROOT,
    preApplySha: closure.preApplySha,
    productionApplySha: closure.productionApplySha,
  });
  blockers.push(...result.blockers);

  const closureMetricDiff = metricsMatchClosure(result.applyRange, closure.applyRange);
  if (closureMetricDiff.length) {
    blockers.push({ code: "CLOSURE_APPLY_RANGE_DRIFT", mismatches: closureMetricDiff });
  }

  if (!result.worktreeClean) {
    blockers.push({ code: "WORKTREE_PRODUCTION_DIRTY", lines: result.worktreeDirtyLines });
  }

  let syntaxFailures = 0;
  for (const spec of PREAUTHORIZED_CAP_ROWS) {
    try {
      assertJsSyntaxAtHead(productionA1Rel(spec.language));
      assertJsSyntaxAtHead(wwwA1Rel(spec.language));
    } catch {
      syntaxFailures += 1;
      blockers.push({ code: "SYNTAX_FAILURE", language: spec.language });
    }
  }

  const localeMappingsVerified = PREAUTHORIZED_CAP_ROWS.filter((s) => APP_LANGUAGE_TO_LOCALE[s.language]).length;
  if (localeMappingsVerified !== PREAUTHORIZED_CAP_ROWS.length) {
    blockers.push({ code: "LOCALE_MAPPING_INCOMPLETE", got: localeMappingsVerified });
  }

  const pass = blockers.length === 0 && result.pass;

  const payload = {
    generatedAt: new Date().toISOString(),
    pass,
    preApplySha: result.preApplySha,
    productionApplySha: result.productionApplySha,
    verifiedAtHead: result.verifiedAtHead,
    originMainSha: result.originMainSha,
    localHeadSha: result.localHeadSha,
    remotePrHeadSha: result.remotePrHeadSha,
    headEqualsRemotePrHead: result.headEqualsRemotePrHead,
    worktreeClean: result.worktreeClean && blockers.every((b) => b.code !== "WORKTREE_PRODUCTION_DIRTY"),
    applyRange: result.applyRange,
    stabilityRange: result.stabilityRange,
    localeMappingsVerified,
    syntaxFailures,
    closurePath: CLOSURE_REL,
    blockers,
    classification: pass
      ? "G2_A1_HAUS_PREAUTHORIZED_CAPITALIZATION_RUNTIME_VERIFIED"
      : "G2_A1_HAUS_CAPITALIZATION_RUNTIME_VERIFICATION_BLOCKED",
    nextAction: pass
      ? "OWNER_REVIEW_4_LEXICAL_HAUS_FINDINGS_AND_18_SOURCE_BLOCKERS"
      : "RESOLVE_EXACT_SHA_IDENTITY_OR_INTEGRATION_TEST_BLOCKER",
  };

  const runtimePath = path.join(ROOT, RUNTIME_REL);
  fs.mkdirSync(path.dirname(runtimePath), { recursive: true });
  fs.writeFileSync(runtimePath, `${JSON.stringify(payload, null, 2)}\n`);

  console.log(JSON.stringify(payload, null, 2));
  process.exit(pass ? 0 : 1);
}

main();
