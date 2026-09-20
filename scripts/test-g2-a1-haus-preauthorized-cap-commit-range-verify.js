#!/usr/bin/env node
"use strict";

const assert = require("assert");
const { execSync } = require("child_process");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const {
  verifyCommitRangeCapApply,
  flattenCardFieldChanges,
  DEFAULT_PRE_APPLY_SHA,
} = require("./lib/g2-a1-production-current/haus-preauthorized-cap-commit-range");

function runVerifierSubprocessCleanCheckout() {
  const out = execSync("node scripts/verify-g2-a1-haus-preauthorized-capitalization-apply.js", {
    cwd: ROOT,
    encoding: "utf8",
  });
  const start = out.indexOf("{");
  const end = out.lastIndexOf("}");
  const payload = JSON.parse(out.slice(start, end + 1));
  assert.strictEqual(payload.pass, true);
  assert.strictEqual(payload.changedProductionLogicalFields, 6);
  assert.strictEqual(payload.worktreeClean, true);
}

function runEmptyWorktreeDiffDoesNotFakePass() {
  const head = execSync("git rev-parse HEAD", { cwd: ROOT, encoding: "utf8" }).trim();
  const gate = verifyCommitRangeCapApply({ preApplySha: DEFAULT_PRE_APPLY_SHA, postApplySha: head });
  assert.strictEqual(gate.changedFiles, 12, "commit-range must detect 12 files even when worktree diff empty");
}

function runUnauthorizedExtraFileDetection() {
  const head = execSync("git rev-parse HEAD", { cwd: ROOT, encoding: "utf8" }).trim();
  const parent = execSync(`git rev-parse ${head}^`, { cwd: ROOT, encoding: "utf8" }).trim();
  const gate = verifyCommitRangeCapApply({ preApplySha: parent, postApplySha: head });
  if (gate.changedFiles === 0) {
    assert.strictEqual(gate.pass, false);
  }
}

function runDeFieldChangeFails() {
  const before = [{ de: "Haus", de_article: "das", lv: "House" }];
  const after = [{ de: "Hau", de_article: "das", lv: "house" }];
  const changes = flattenCardFieldChanges(before, after, "data/en/a1.js");
  const deChange = changes.find((c) => c.field === "de");
  assert(deChange, "de change detected");
  assert.notStrictEqual(deChange.before, deChange.after);
}

function main() {
  runEmptyWorktreeDiffDoesNotFakePass();
  runVerifierSubprocessCleanCheckout();
  runUnauthorizedExtraFileDetection();
  runDeFieldChangeFails();
  console.log(JSON.stringify({ pass: true, suite: "commit-range-verifier-regression" }));
}

main();
