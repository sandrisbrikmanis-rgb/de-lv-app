#!/usr/bin/env node
"use strict";

const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const { MULTI_VALUE_DELIM } = require("./prepare-g2-a1-phase3-owner-review-batch-001");
const { loadCsv, parseCsvLine } = require("./lib/g2-a1-phase3/batch-001-csv");
const { STAGING_ROOT } = require("./lib/g2-a1-phase3/constants");
const {
  EXPECTED_SOURCE_HASH,
  EXPECTED_FINDING_COUNT,
  buildOwnerPrepUsability,
  validateSourceIntegrity,
} = require("./lib/g2-a1-phase3/owner-prep-usability");
const {
  IMMUTABLE_SOURCES,
  BATCH_001_ID,
  reconcileSource,
  prepareAllRemainingBatches,
} = require("./lib/g2-a1-phase3/owner-review-all-batches");
const { POST_CROWDIN_STATES } = require("./lib/g2-a1-phase3/post-crowdin-production");

const OUT_DIR = path.join(ROOT, "reports/g2-a1-phase3-owner-review-all-batches");
const OUT_INDEX = path.join(ROOT, "reports/g2-a1-phase3-owner-review-all-batches-index.json");
const OUT_CONSOLIDATED = path.join(ROOT, "reports/g2-a1-phase3-owner-review-all-batches-consolidated.csv");
const OUT_PROOF = path.join(ROOT, "reports/g2-a1-phase3-owner-review-all-batches-proof.json");
const OUT_TARGET_BACKLOG = path.join(
  ROOT,
  "reports/g2-a1-phase3-owner-review-batch-001-target-language-backlog.json",
);

let testsRun = 0;
let testsFailed = 0;

function assert(condition, message) {
  testsRun += 1;
  if (!condition) {
    testsFailed += 1;
    console.error(`FAIL: ${message}`);
  }
}

function sha256Hex(value) {
  return crypto.createHash("sha256").update(value).digest("hex");
}

function sha256File(relPath) {
  return sha256Hex(fs.readFileSync(path.join(ROOT, relPath)));
}

function gitDiffCount(paths) {
  const output = execSync(`git diff --name-only origin/main -- ${paths.join(" ")}`, {
    cwd: ROOT,
    encoding: "utf8",
  }).trim();
  return output ? output.split("\n").filter(Boolean).length : 0;
}

function testSourceReconciliation() {
  const recon = reconcileSource(ROOT);
  assert(recon.pass, "source reconciliation pass");
  assert(recon.reconciliation.totalSourceFindings === 22750, "total findings 22750");
  assert(recon.reconciliation.batch001Decided === 100, "batch001 decided 100");
  assert(recon.reconciliation.remainingFindings === 22650, "remaining 22650");
  assert(recon.reconciliation.sourceHashMatch, "source hash match");
}

function testCoverageAndAssignments() {
  const proof = JSON.parse(fs.readFileSync(OUT_PROOF, "utf8"));
  const index = JSON.parse(fs.readFileSync(OUT_INDEX, "utf8"));
  const manifest = JSON.parse(
    fs.readFileSync(path.join(ROOT, "reports/g2-a1-phase3-owner-review-batches.json"), "utf8"),
  );
  const batch001Proof = JSON.parse(
    fs.readFileSync(path.join(ROOT, "reports/g2-a1-phase3-owner-review-batch-001-proof.json"), "utf8"),
  );
  const batch001Ids = new Set(batch001Proof.memberFindingIds);
  const consolidated = loadCsv(OUT_CONSOLIDATED);
  const assigned = new Map();

  assert(proof.classification === "G2_A1_ALL_REMAINING_OWNER_REVIEW_BATCHES_READY", "classification ready");
  assert(proof.generatedBatchCount === 232, "232 generated batches");
  assert(index.batches.length === 232, "index has 232 batches");
  assert(consolidated.rows.length === 22650, "consolidated 22650 rows");
  assert(proof.firstGeneratedBatch === "BATCH-002", "first batch 002");
  assert(proof.lastGeneratedBatch === "BATCH-233", "last batch 233");

  for (const row of consolidated.rows) {
    assert(!batch001Ids.has(row.finding_stable_id), `batch001 id not repeated ${row.finding_stable_id}`);
    if (assigned.has(row.finding_stable_id)) {
      assert(false, `duplicate assignment ${row.finding_stable_id}`);
    }
    assigned.set(row.finding_stable_id, row.batch_id);
    assert(row.owner_status === "PENDING", `owner pending ${row.finding_stable_id}`);
    assert(row.owner_decision === "" && row.owner_new === "" && row.owner_note === "", "owner fields blank");
    assert(POST_CROWDIN_STATES.has(row.post_crowdin_state), `valid post state ${row.post_crowdin_state}`);
    assert(row.discovery_current !== undefined, "discovery_current preserved");
  }

  const usability = buildOwnerPrepUsability({ root: ROOT });
  const remainingBatches = usability.batches.filter((b) => b.batchId !== BATCH_001_ID);
  assert(remainingBatches.length === 232, "usability remaining batch count");

  let consolidatedFromBatches = 0;
  for (const entry of index.batches) {
    const manifestBatch = manifest.batches.find((b) => b.batchId === entry.batchId);
    const usabilityBatch = remainingBatches.find((b) => b.batchId === entry.batchId);
    assert(manifestBatch, `manifest has ${entry.batchId}`);
    assert(usabilityBatch, `usability has ${entry.batchId}`);
    assert(entry.decisionTargetCount === manifestBatch.decisionTargetCount, `dt count ${entry.batchId}`);
    assert(entry.findingCount === manifestBatch.findingCount, `finding count ${entry.batchId}`);
    assert(fs.existsSync(path.join(ROOT, entry.file)), `file exists ${entry.file}`);
    assert(entry.sha256 === sha256File(entry.file), `sha256 ${entry.file}`);
    assert(entry.status === "PENDING", `status pending ${entry.batchId}`);

    const batchCsv = loadCsv(path.join(ROOT, entry.file));
    assert(batchCsv.rows.length === entry.decisionTargetCount, `batch csv dt ${entry.batchId}`);
    assert(batchCsv.rows.length <= 100, `max 100 dt ${entry.batchId}`);
    for (const row of batchCsv.rows) {
      const stableIds = row.finding_stable_ids.split(MULTI_VALUE_DELIM);
      consolidatedFromBatches += stableIds.length;
      for (const id of stableIds) {
        assert(assigned.get(id) === entry.batchId, `batch assignment ${id}`);
      }
    }
  }
  assert(consolidatedFromBatches === 22650, "batch sum matches consolidated");
  assert(assigned.size === 22650, "all remaining assigned once");
}

function testImmutableArtifacts() {
  const proof = JSON.parse(fs.readFileSync(OUT_PROOF, "utf8"));
  for (const rel of IMMUTABLE_SOURCES) {
    assert(
      proof.sourceArtifactSha256Before[rel] === proof.sourceArtifactSha256After[rel],
      `immutable ${rel}`,
    );
  }
  assert(proof.checkpointShaBefore === proof.checkpointShaAfter, "checkpoint unchanged");
  assert(proof.productionDiff === 0, "production diff 0");
  assert(proof.crowdinDiff === 0, "crowdin diff 0");
  assert(proof.lunaCheckpointDiff === 0, "luna diff 0");
  assert(proof.newRealLunaCalls === 0, "no luna calls");
  assert(proof.automaticOwnerDecisions === 0, "no automatic decisions");
  assert(proof.positionalMappingUsed === false, "no positional mapping");
  assert(proof.fuzzyMappingUsed === false, "no fuzzy mapping");
  assert(gitDiffCount(["data", "www/data"]) === 0, "git production diff 0");
  assert(gitDiffCount(["crowdin", path.relative(ROOT, STAGING_ROOT)]) === 0, "git crowdin diff 0");
}

function testTargetLanguageBacklog() {
  const backlog = JSON.parse(fs.readFileSync(OUT_TARGET_BACKLOG, "utf8"));
  const ingestProof = JSON.parse(
    fs.readFileSync(
      path.join(ROOT, "reports/g2-a1-phase3-owner-review-batch-001-ingest-audit-proof.json"),
      "utf8",
    ),
  );
  assert(backlog.count === 29, "29 backlog entries");
  assert(backlog.status === "DEFERRED_TARGET_LANGUAGE_REVIEW", "deferred status");
  assert(
    backlog.entries.every((e) => e.status === "DEFERRED_TARGET_LANGUAGE_REVIEW"),
    "all entries deferred",
  );
  assert(
    JSON.stringify(backlog.entries.map((e) => e.auditId).sort()) ===
      JSON.stringify(ingestProof.targetLanguageBacklogMemberIds.sort()),
    "backlog member ids match ingest audit",
  );
  const consolidated = loadCsv(OUT_CONSOLIDATED);
  for (const id of ingestProof.targetLanguageBacklogStableIds) {
    assert(!consolidated.rows.some((r) => r.finding_stable_id === id), `backlog id not in consolidated ${id}`);
  }
}

function testDeterminism() {
  const first = prepareAllRemainingBatches({ root: ROOT, dryRun: true });
  const second = prepareAllRemainingBatches({ root: ROOT, dryRun: true });
  assert(first.pass && second.pass, "dry-run pass");
  assert(first.proof.outputHash === second.proof.outputHash, "deterministic output hash");
  assert(
    JSON.stringify(first.postCrowdinDistribution) === JSON.stringify(second.postCrowdinDistribution),
    "deterministic post-crowdin distribution",
  );
}

function testFailClosedMutations() {
  const rel = "reports/g2-a1-phase3-owner-review-batch-001-proof.json";
  const backup = fs.readFileSync(path.join(ROOT, rel), "utf8");
  const proof = JSON.parse(backup);
  proof.sourceHash = "deadbeef";
  fs.writeFileSync(path.join(ROOT, rel), JSON.stringify(proof, null, 2));
  const recon = reconcileSource(ROOT);
  fs.writeFileSync(path.join(ROOT, rel), backup);
  assert(!recon.pass, "source hash tamper fails reconciliation");
}

function testPostCrowdinSum() {
  const proof = JSON.parse(fs.readFileSync(OUT_PROOF, "utf8"));
  const sum = Object.values(proof.postCrowdinDistribution).reduce((a, b) => a + b, 0);
  assert(sum === 22650, "post-crowdin sum 22650");
}

function main() {
  testSourceReconciliation();
  testCoverageAndAssignments();
  testImmutableArtifacts();
  testTargetLanguageBacklog();
  testDeterminism();
  testFailClosedMutations();
  testPostCrowdinSum();

  console.log(`\nTests run: ${testsRun}, failed: ${testsFailed}`);
  if (testsFailed > 0) {
    console.error("BLOCKED_G2_A1_ALL_REMAINING_OWNER_REVIEW_BATCH_PREP");
    process.exit(1);
  }
  console.log("PASS: g2-a1-phase3-owner-review-all-batches");
}

if (require.main === module) {
  main();
}

module.exports = { main };
