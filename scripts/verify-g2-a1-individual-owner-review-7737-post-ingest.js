#!/usr/bin/env node
"use strict";

const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const { loadCsv } = require("./lib/g2-a1-phase3/batch-001-csv");
const { STAGING_ROOT } = require("./lib/g2-a1-phase3/constants");
const {
  OUT_DECISIONS,
  OUT_REMAINING,
  OUT_PROOF,
  verifySourceIntegrity,
} = require("./lib/g2-a1-phase3/owner-review-7737-escalations");
const {
  INGEST_REVIEW_CSV,
  INGEST_PENDING_CSV,
  OUT_INGEST_PROOF,
} = require("./lib/g2-a1-phase3/individual-7737-ingest");
const {
  OUT_QUARANTINE_PROOF,
  classifyDecisionProvenance,
} = require("./lib/g2-a1-phase3/linguistic-quarantine-7737-repair");

let testsRun = 0;
let testsFailed = 0;

function assert(condition, message) {
  testsRun += 1;
  if (!condition) {
    testsFailed += 1;
    console.error(`FAIL: ${message}`);
  }
}

function sha256File(relPath) {
  const abs = path.isAbsolute(relPath) ? relPath : path.join(ROOT, relPath);
  return crypto.createHash("sha256").update(fs.readFileSync(abs)).digest("hex");
}

function gitDiffCount(paths) {
  const output = execSync(`git diff --name-only origin/main -- ${paths.join(" ")}`, {
    cwd: ROOT,
    encoding: "utf8",
  }).trim();
  return output ? output.split("\n").filter(Boolean).length : 0;
}

function computeProvenanceCounts(rows) {
  const stats = {
    automaticOwnerDecisions: 0,
    individualLinguisticOwnerReview: 0,
    unprovenProvenance: 0,
  };
  for (const row of rows) {
    if (row.owner_status !== "DECIDED") continue;
    const provenance = classifyDecisionProvenance(row);
    if (provenance === "AUTOMATIC_RULE_DECISION") stats.automaticOwnerDecisions += 1;
    else if (provenance === "INDIVIDUAL_LINGUISTIC_OWNER_REVIEW") stats.individualLinguisticOwnerReview += 1;
    else stats.unprovenProvenance += 1;
  }
  return stats;
}

function main() {
  const ingestProof = JSON.parse(fs.readFileSync(OUT_INGEST_PROOF, "utf8"));
  const escProof = JSON.parse(fs.readFileSync(OUT_PROOF, "utf8"));
  const quarantineProof = fs.existsSync(OUT_QUARANTINE_PROOF)
    ? JSON.parse(fs.readFileSync(OUT_QUARANTINE_PROOF, "utf8"))
    : null;
  const review = loadCsv(INGEST_REVIEW_CSV);
  const pending = loadCsv(INGEST_PENDING_CSV);
  const decisions = loadCsv(OUT_DECISIONS);
  const remaining = loadCsv(OUT_REMAINING);
  const source = verifySourceIntegrity(ROOT);

  assert(source.pass, "source integrity pass");
  assert(
    [
      "G2_A1_INDIVIDUAL_LINGUISTIC_OWNER_REVIEW_7737_INGEST_READY",
      "G2_A1_INDIVIDUAL_LINGUISTIC_OWNER_REVIEW_7737_QUARANTINE_REPAIRED",
    ].includes(ingestProof.classification),
    "ingest classification",
  );
  assert(review.rows.length === 7737, "review rows 7737");
  assert(pending.rows.length === ingestProof.remainingPending, "pending rows");
  assert(decisions.rows.length === ingestProof.newDecided, "decisions rows");
  assert(remaining.rows.length === ingestProof.remainingPending, "remaining rows");
  assert(decisions.rows.length + remaining.rows.length === 7737, "partition 7737");
  assert(sha256File("reports/g2-a1-owner-review-all-remaining-decisions-final.csv") === ingestProof.decisionsSha256After, "decisions sha");
  assert(sha256File("reports/g2-a1-owner-review-needs-owner-final.csv") === ingestProof.needsOwnerSha256After, "needs-owner sha");

  const provenance = computeProvenanceCounts(review.rows);
  assert(provenance.automaticOwnerDecisions === 0, "computed automatic 0");
  assert(
    provenance.individualLinguisticOwnerReview === ingestProof.newDecided,
    "computed individual matches newDecided",
  );
  assert(provenance.unprovenProvenance === 0, "computed unproven 0");
  assert(escProof.automaticOwnerDecisions === 0, "proof automatic 0");
  assert(ingestProof.automaticOwnerDecisions === 0, "ingest automatic 0");
  assert(ingestProof.preexisting14913DecisionsChanged === 0, "14913 unchanged");
  assert(gitDiffCount(["data", "www/data"]) === 0, "production diff 0");
  assert(gitDiffCount(["crowdin", path.relative(ROOT, STAGING_ROOT)]) === 0, "crowdin diff 0");

  if (quarantineProof) {
    assert(quarantineProof.quarantinedToPending === 21, "quarantine 21");
    assert(ingestProof.quarantinedToPending === 21, "ingest quarantine 21");
  }

  console.log(`\nTests run: ${testsRun}, failed: ${testsFailed}`);
  if (testsFailed > 0) {
    console.error("BLOCKED_G2_A1_INDIVIDUAL_OWNER_REVIEW_7737_POST_INGEST_VERIFY");
    process.exit(1);
  }
  console.log("PASS: g2-a1-individual-owner-review-7737-post-ingest");
}

if (require.main === module) {
  main();
}

module.exports = { main };
