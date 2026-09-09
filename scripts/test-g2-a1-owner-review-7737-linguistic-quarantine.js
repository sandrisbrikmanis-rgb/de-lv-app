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
const { OUT_INGEST_PROOF } = require("./lib/g2-a1-phase3/individual-7737-ingest");
const {
  OUT_AUDIT_PROOF,
  OUT_QUARANTINE_PROOF,
  OUT_QUARANTINE_ROWS,
  CONFIRMED_BAD_STABLE_IDS,
  classifyDecisionProvenance,
  classifyLinguisticRisk,
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

function sha256Hex(value) {
  return crypto.createHash("sha256").update(value).digest("hex");
}

function gitDiffCount(paths) {
  const output = execSync(`git diff --name-only origin/main -- ${paths.join(" ")}`, {
    cwd: ROOT,
    encoding: "utf8",
  }).trim();
  return output ? output.split("\n").filter(Boolean).length : 0;
}

function testAuditGates() {
  const auditProof = JSON.parse(fs.readFileSync(OUT_AUDIT_PROOF, "utf8"));
  assert(auditProof.pass, "audit proof pass");
  assert(auditProof.quarantineTarget === 21, "quarantine target 21");
  assert(auditProof.confirmedBad === 4, "confirmed bad 4");
  assert(auditProof.nnLemmaQuarantine === 18, "nn lemma quarantine 18");
  assert(auditProof.automaticOwnerDecisions === 0, "automatic 0");
  assert(auditProof.individualLinguisticOwnerReview === 2633, "individual 2633 pre-repair");
}

function testQuarantineArtifacts() {
  const auditProof = JSON.parse(fs.readFileSync(OUT_AUDIT_PROOF, "utf8"));
  const quarantineProof = JSON.parse(fs.readFileSync(OUT_QUARANTINE_PROOF, "utf8"));
  const ingestProof = JSON.parse(fs.readFileSync(OUT_INGEST_PROOF, "utf8"));
  const escProof = JSON.parse(fs.readFileSync(OUT_PROOF, "utf8"));
  const quarantineRows = loadCsv(OUT_QUARANTINE_ROWS);
  const decisions = loadCsv(OUT_DECISIONS);
  const remaining = loadCsv(OUT_REMAINING);

  assert(auditProof.pass, "audit proof pass");
  assert(
    quarantineProof.classification === "G2_A1_LINGUISTIC_OWNER_REVIEW_7737_QUARANTINE_REPAIRED",
    "quarantine classification",
  );
  assert(
    ingestProof.classification === "G2_A1_INDIVIDUAL_LINGUISTIC_OWNER_REVIEW_7737_QUARANTINE_REPAIRED",
    "ingest classification",
  );
  assert(quarantineProof.quarantinedToPending === 21, "quarantined 21");
  assert(quarantineProof.remainingNewDecided === 2612, "remaining decided 2612");
  assert(quarantineProof.remainingPending === 5125, "remaining pending 5125");
  assert(quarantineProof.decided === 17525, "consolidated decided 17525");
  assert(quarantineProof.pending === 5125, "consolidated pending 5125");
  assert(quarantineProof.automaticOwnerDecisions === 0, "automatic 0");
  assert(quarantineProof.individualLinguisticOwnerReview === 2612, "individual 2612");
  assert(escProof.reviewedDecided === 2612, "esc reviewed 2612");
  assert(escProof.remainingPending === 5125, "esc pending 5125");
  assert(decisions.rows.length === 2612, "decisions 2612");
  assert(remaining.rows.length === 5125, "remaining 5125");
  assert(quarantineRows.rows.length === 21, "quarantine rows 21");

  const quarantinedIds = new Set(quarantineRows.rows.map((row) => row.finding_stable_ids));
  for (const id of CONFIRMED_BAD_STABLE_IDS) {
    assert(quarantinedIds.has(id), `confirmed bad quarantined ${id}`);
    assert(!decisions.rows.some((row) => row.finding_stable_ids === id), `confirmed bad not decided ${id}`);
    assert(remaining.rows.some((row) => row.finding_stable_ids === id), `confirmed bad pending ${id}`);
  }

  for (const row of quarantineRows.rows) {
    assert(row.owner_status_after === "PENDING", `quarantine pending ${row.finding_stable_ids}`);
    assert(String(row.owner_note_after_prefix || "").startsWith("LINGUISTIC_QUARANTINE:"), `quarantine note ${row.finding_stable_ids}`);
  }

  for (const row of decisions.rows) {
    assert(classifyDecisionProvenance(row) !== "AUTOMATIC_RULE_DECISION", `no automatic ${row.finding_stable_ids}`);
    assert(classifyLinguisticRisk(row) !== "CONFIRMED_BAD_HR_CYRILLIC_NELABOT", `no bad hr cyr ${row.finding_stable_ids}`);
    assert(classifyLinguisticRisk(row) !== "CONFIRMED_BAD_NN_HERR_LABOT", `no bad nn herr ${row.finding_stable_ids}`);
    assert(classifyLinguisticRisk(row) !== "SUSPECT_NN_DE_LEMMA_LABOT", `no suspect nn ${row.finding_stable_ids}`);
  }
}

function testSourceIntegrity() {
  const source = verifySourceIntegrity(ROOT);
  assert(source.pass, "source integrity pass");
  assert(source.individualProof.pending === 5125, "proof pending 5125");
  assert(source.individualProof.decided === 17525, "proof decided 17525");
}

function testDeterminism() {
  const quarantineProof = JSON.parse(fs.readFileSync(OUT_QUARANTINE_PROOF, "utf8"));
  const recomputed = sha256Hex(
    JSON.stringify({
      quarantinedToPending: quarantineProof.quarantinedToPending,
      remainingNewDecided: quarantineProof.remainingNewDecided,
      remainingPending: quarantineProof.remainingPending,
      decided: quarantineProof.decided,
      pending: quarantineProof.pending,
    }),
  );
  assert(quarantineProof.outputHash === recomputed, "quarantine output hash stable");
}

function testImmutableProduction() {
  assert(gitDiffCount(["data", "www/data"]) === 0, "production diff 0");
  assert(gitDiffCount(["crowdin", path.relative(ROOT, STAGING_ROOT)]) === 0, "crowdin diff 0");
}

function main() {
  testAuditGates();
  testQuarantineArtifacts();
  testSourceIntegrity();
  testDeterminism();
  testImmutableProduction();

  console.log(`\nTests run: ${testsRun}, failed: ${testsFailed}`);
  if (testsFailed > 0) {
    console.error("BLOCKED_G2_A1_7737_LINGUISTIC_QUARANTINE");
    process.exit(1);
  }
  console.log("PASS: g2-a1-owner-review-7737-linguistic-quarantine");
}

if (require.main === module) {
  main();
}

module.exports = { main };
