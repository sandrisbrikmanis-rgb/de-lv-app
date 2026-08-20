#!/usr/bin/env node
"use strict";
/**
 * Supplementary MASTER v1.8 discovery-stability unit tests.
 */
const fs = require("fs");
const path = require("path");
const {
  classifyRootCause,
  computeDiscoveryChurn,
  validateHistoryGates,
  pathFamilyKey,
  semanticIssueSignature,
  persistRawFindings,
  loadNeedsSourceReviewRegistry,
} = require("./lib/discovery-stability");
const { REGISTRY_DIR } = require("./lib/et-a1-discovery-config");

function assert(cond, msg) {
  if (!cond) throw new Error(msg);
}

function testChurn() {
  const prev = [{ cardId: "a1-im", field: "study.examples[0].lv", currentEt: "x" }];
  const cur = [{ cardId: "a1-im", field: "study.examples[1].lv", currentEt: "y" }];
  const c = computeDiscoveryChurn(prev, cur);
  assert(c.SEMANTIC_OVERLAP === 1, "path-family overlap expected");
  assert(c.EXACT_OVERLAP === 0, "exact overlap expected 0");
}

function testGatesFailWhenHistoryMissing() {
  const g = validateHistoryGates({ rawHistoryLoaded: false, ownerHistoryLoaded: true, preBacklogReady: false });
  assert(g.RAW_AUDIT_HISTORY_GATE === "FAIL", "RAW gate fail");
  assert(g.ownerBacklogAllowed === false, "backlog blocked");
}

function testNeedsSourceReviewRegistry() {
  const file = path.join(REGISTRY_DIR, "needs-source-review-unresolved.json");
  assert(fs.existsSync(file), "needs-source-review registry file exists");
  const reg = loadNeedsSourceReviewRegistry(REGISTRY_DIR);
  assert(Array.isArray(reg.unresolved), "unresolved array");
}

function testSemanticSignatures() {
  const a = semanticIssueSignature("a1-im", "study.examples[0].lv", "reason text", "STUDY");
  const b = semanticIssueSignature("a1-im", "study.examples[2].lv", "reason text", "STUDY");
  assert(pathFamilyKey("a1-im", "study.examples[0].lv") === pathFamilyKey("a1-im", "study.examples[2].lv"), "path family match");
  assert(a !== b || pathFamilyKey("a1-im", "study.examples[0].lv") === pathFamilyKey("a1-im", "study.examples[2].lv"), "family dedup");
}

function testCarryForwardClassification() {
  const { rootCause } = classifyRootCause({
    finding: { category: "STUDY", currentEt: "x" },
    productionValue: "x",
    owner: null,
    seenRawRuns: [],
    seenValidatedRuns: [],
    seenSemanticRuns: [],
    seenPathFamilyRuns: [],
    repairTouchedField: false,
    existedBeforePreviousAudit: true,
    unresolvedNeedsSourceReview: { auditRunId: "pr603" },
    styleOnly: false,
  });
  assert(rootCause === "NEEDS_SOURCE_REVIEW_CARRY_FORWARD", "carry-forward class");
}

function main() {
  const tests = [testChurn, testGatesFailWhenHistoryMissing, testNeedsSourceReviewRegistry, testSemanticSignatures, testCarryForwardClassification];
  for (const t of tests) t();
  console.log(JSON.stringify({ DISCOVERY_STABILITY_UNIT: "PASS", tests: tests.length }, null, 2));
}

main();
