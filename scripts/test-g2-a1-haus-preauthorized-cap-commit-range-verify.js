#!/usr/bin/env node
"use strict";

const assert = require("assert");
const { execSync } = require("child_process");
const path = require("path");
const fs = require("fs");
const { ROOT } = require("./lib/audit-common");
const {
  verifyHausCapRuntimeVerification,
  analyzeProductionApplyRange,
  DEFAULT_PRE_APPLY_SHA,
  DEFAULT_PRODUCTION_APPLY_SHA,
  RUNTIME_REL,
  CLOSURE_REL,
} = require("./lib/g2-a1-production-current/haus-preauthorized-cap-commit-range");

function capVerifyPorcelainScope(relPath) {
  return (
    relPath.startsWith("data/") ||
    relPath.startsWith("www/data/") ||
    relPath.startsWith("crowdin/") ||
    relPath.startsWith("scripts/") ||
    relPath === CLOSURE_REL
  );
}

function porcelainInScope(raw) {
  return raw
    .split("\n")
    .filter(Boolean)
    .filter((line) => capVerifyPorcelainScope(line.slice(3).trim()));
}

function runVerifierSubprocessCleanCheckout() {
  const before = porcelainInScope(execSync("git status --porcelain", { cwd: ROOT, encoding: "utf8" }));
  const out = execSync("node scripts/verify-g2-a1-haus-preauthorized-capitalization-apply.js", {
    cwd: ROOT,
    encoding: "utf8",
  });
  const after = porcelainInScope(execSync("git status --porcelain", { cwd: ROOT, encoding: "utf8" }));
  assert.deepStrictEqual(after, before, "verify must not modify tracked production/closure paths");
  const start = out.indexOf("{");
  const end = out.lastIndexOf("}");
  const payload = JSON.parse(out.slice(start, end + 1));
  assert.strictEqual(payload.pass, true);
  assert.strictEqual(payload.applyRange.changedProductionLogicalFields, 6);
  assert(fs.existsSync(path.join(ROOT, RUNTIME_REL)));
  const ignore = execSync(`git check-ignore -v ${RUNTIME_REL}`, { cwd: ROOT, encoding: "utf8" });
  assert(ignore.includes(RUNTIME_REL));
  assert(fs.existsSync(path.join(ROOT, CLOSURE_REL)));
  void before;
}

function runEmptyWorktreeDiffDoesNotFakePass() {
  const head = execSync("git rev-parse HEAD", { cwd: ROOT, encoding: "utf8" }).trim();
  const gate = analyzeProductionApplyRange(ROOT, DEFAULT_PRE_APPLY_SHA, DEFAULT_PRODUCTION_APPLY_SHA);
  assert.strictEqual(gate.metrics.changedFiles, 12);
  const runtime = verifyHausCapRuntimeVerification({
    repoRoot: ROOT,
    preApplySha: DEFAULT_PRE_APPLY_SHA,
    productionApplySha: DEFAULT_PRODUCTION_APPLY_SHA,
    verifiedAtHead: head,
    skipRemoteHeadCheck: false,
  });
  assert.strictEqual(runtime.applyRange.changedProductionLogicalFields, 6);
  assert.strictEqual(runtime.stabilityRange.productionChangesAfterApply, 0);
}

function main() {
  runEmptyWorktreeDiffDoesNotFakePass();
  runVerifierSubprocessCleanCheckout();
  console.log(JSON.stringify({ pass: true, suite: "commit-range-verifier-regression" }));
}

main();
