#!/usr/bin/env node
"use strict";

const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const {
  EXPECTED_SOURCE_HASH,
  EXPECTED_FINDING_COUNT,
  loadOwnerPrepFindings,
  validateSourceIntegrity,
  buildOwnerPrepUsability,
} = require("./lib/g2-a1-phase3/owner-prep-usability");
const { STAGING_ROOT } = require("./lib/g2-a1-phase3/constants");
const {
  BATCH_ID,
  MULTI_VALUE_DELIM,
  SOURCE_PATHS,
  prepareBatch001,
} = require("./prepare-g2-a1-phase3-owner-review-batch-001");

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
  const filePath = path.join(ROOT, relPath);
  return crypto.createHash("sha256").update(fs.readFileSync(filePath)).digest("hex");
}

function parseCsvLine(line) {
  const cells = [];
  let current = "";
  let inQuotes = false;
  for (let i = 0; i < line.length; i += 1) {
    const ch = line[i];
    if (inQuotes) {
      if (ch === '"') {
        if (line[i + 1] === '"') {
          current += '"';
          i += 1;
        } else {
          inQuotes = false;
        }
      } else {
        current += ch;
      }
    } else if (ch === '"') {
      inQuotes = true;
    } else if (ch === ",") {
      cells.push(current);
      current = "";
    } else {
      current += ch;
    }
  }
  cells.push(current);
  return cells;
}

function gitDiffNames(paths) {
  try {
    const output = execSync(`git diff --name-only -- ${paths.join(" ")}`, {
      cwd: ROOT,
      encoding: "utf8",
    }).trim();
    return output ? output.split("\n") : [];
  } catch {
    return ["git diff failed"];
  }
}

function checkpointSetSha() {
  const dir = path.join(ROOT, "reports", "temp", "g2-a1-phase3-luna-runs");
  if (!fs.existsSync(dir)) return null;
  const files = fs
    .readdirSync(dir)
    .map((name) => path.join(dir, name))
    .filter((filePath) => fs.statSync(filePath).isFile())
    .sort((a, b) => path.basename(a).localeCompare(path.basename(b)));
  const payload = files
    .map((filePath) => `${path.basename(filePath)}:${sha256File(path.relative(ROOT, filePath))}`)
    .join("\n");
  return crypto.createHash("sha256").update(payload).digest("hex");
}

function testPreflightSources() {
  const manifest = JSON.parse(fs.readFileSync(path.join(ROOT, SOURCE_PATHS.batches), "utf8"));
  const proof = JSON.parse(fs.readFileSync(path.join(ROOT, SOURCE_PATHS.usabilityProof), "utf8"));
  const discovery = JSON.parse(fs.readFileSync(path.join(ROOT, SOURCE_PATHS.discovery), "utf8"));
  const batch = manifest.batches.find((entry) => entry.batchId === BATCH_ID);
  assert(batch, "BATCH-001 exists in manifest");
  assert(proof.batch001?.batchId === BATCH_ID, "proof batch001 exists");
  assert(proof.sourceHash === EXPECTED_SOURCE_HASH, "source hash matches expected");
  assert(discovery.findings.validated === EXPECTED_FINDING_COUNT, "discovery validated count");
}

function testPrepareAndArtifacts() {
  const beforeLvSha = sha256File("data/a1.js");
  const beforeDeSha = sha256File("data/a1.js");
  const beforeStagingSha = sha256File(path.relative(ROOT, path.join(STAGING_ROOT, "en-a1.json")));
  const beforeCheckpointSha = checkpointSetSha();

  const existingProofPath = path.join(ROOT, "reports/g2-a1-phase3-owner-review-batch-001-proof.json");
  const existingProof = fs.existsSync(existingProofPath)
    ? JSON.parse(fs.readFileSync(existingProofPath, "utf8"))
    : null;
  const alreadyDecided = existingProof?.classification === "G2_A1_OWNER_REVIEW_BATCH_001_DECIDED";

  if (!alreadyDecided) {
    const result = prepareBatch001({ root: ROOT });
    assert(result.pass, "prepareBatch001 PASS");
    assert(result.classification === "G2_A1_OWNER_REVIEW_BATCH_001_PACK_READY", "classification ready");
  }

  const proof = JSON.parse(fs.readFileSync(existingProofPath, "utf8"));
  const manifestBatch = JSON.parse(fs.readFileSync(path.join(ROOT, SOURCE_PATHS.batches), "utf8")).batches.find(
    (entry) => entry.batchId === BATCH_ID,
  );
  const usabilityBatch = JSON.parse(
    fs.readFileSync(path.join(ROOT, SOURCE_PATHS.usabilityProof), "utf8"),
  ).batch001;

  assert(proof.batchId === BATCH_ID, "proof batch id");
  assert(proof.sourceHash === EXPECTED_SOURCE_HASH, "proof source hash");
  assert(proof.batchDecisionTargetCount === manifestBatch.decisionTargetCount, "manifest decision target count");
  assert(proof.batchFindingCount === manifestBatch.findingCount, "manifest finding count");
  assert(proof.batchFindingCount === usabilityBatch.findingCount, "usability proof finding count");
  assert(
    JSON.stringify(proof.memberFindingIds) === JSON.stringify(usabilityBatch.memberFindingIds),
    "memberFindingIds match usability proof",
  );
  assert(
    JSON.stringify(proof.decisionTargetKeys) === JSON.stringify(usabilityBatch.decisionTargetKeys),
    "decisionTargetKeys match usability proof",
  );
  assert(proof.automaticOwnerDecisions === 0, "no automatic owner decisions");
  assert(proof.newLunaCalls === 0, "no luna calls");

  const view = fs.readFileSync(path.join(ROOT, "reports/g2-a1-phase3-owner-review-batch-001-view.md"), "utf8");
  const decisions = fs.readFileSync(
    path.join(ROOT, "reports/g2-a1-phase3-owner-review-batch-001-decisions.md"),
    "utf8",
  );
  const csv = fs.readFileSync(path.join(ROOT, "reports/g2-a1-phase3-owner-review-batch-001-decisions.csv"), "utf8");

  if (alreadyDecided) {
    assert(proof.batchStatus === "DECIDED", "batch status decided");
    assert(proof.ownerDecisionCounts?.NELABOT === proof.batchDecisionTargetCount, "all nelabot");
    assert((view.match(/\*\*OWNER DECISION:\*\* NELABOT/g) || []).length === proof.batchDecisionTargetCount, "view nelabot count");
    return;
  }

  assert(proof.ownerStatuses.length === 1 && proof.ownerStatuses[0] === "PENDING", "owner statuses pending");
  assert((view.match(/\*\*OWNER STATUS:\*\* PENDING/g) || []).length === proof.batchDecisionTargetCount, "view pending count");
  assert(!/OWNER DECISION:\*\* (LABOT|NELABOT|NEW)/.test(view), "view has no owner decisions");
  assert(!/OWNER NEW:\*\* .+/.test(view), "view owner new blank");
  assert((decisions.match(/\| PENDING \| \| \| \|/g) || []).length === proof.batchDecisionTargetCount, "decisions pending rows");
  const csvLines = csv.trim().split(/\r?\n/).slice(1);
  assert(csvLines.length === proof.batchDecisionTargetCount, "csv row count");
  const packedIds = new Set();
  for (const line of csvLines) {
    const cells = parseCsvLine(line);
    assert(cells[16] === "PENDING", "csv owner status pending");
    assert(cells[17] === "" && cells[18] === "" && cells[19] === "", "csv owner decision fields blank");
    const stableIds = cells[3].split(MULTI_VALUE_DELIM);
    for (const id of stableIds) {
      assert(!packedIds.has(id), `finding packed once ${id}`);
      packedIds.add(id);
    }
  }
  assert(packedIds.size === proof.batchFindingCount, "csv finding coverage");
  for (const id of proof.memberFindingIds) {
    assert(packedIds.has(id), `batch member packed ${id}`);
  }

  const allFindings = loadOwnerPrepFindings(ROOT);
  const allIds = new Set(allFindings.map((f) => f.sourceFindingId));
  for (const id of proof.memberFindingIds) {
    assert(allIds.has(id), `member id in source data ${id}`);
  }
  const outside = [...packedIds].filter((id) => !proof.memberFindingIds.includes(id));
  assert(outside.length === 0, "no findings outside BATCH-001");

  const integrity = validateSourceIntegrity(ROOT);
  assert(integrity.pass, "source integrity still PASS");
  assert(new Set(integrity.findings.map((f) => f.ownerStatus)).size === 1, "all source findings pending");

  assert(sha256File("data/a1.js") === beforeLvSha, "LV source unchanged");
  assert(sha256File("data/a1.js") === beforeDeSha, "DE template unchanged");
  assert(
    sha256File(path.relative(ROOT, path.join(STAGING_ROOT, "en-a1.json"))) === beforeStagingSha,
    "crowdin staging unchanged",
  );
  assert(checkpointSetSha() === beforeCheckpointSha, "luna checkpoint unchanged");

  const productionDiff = gitDiffNames(["data", "www/data"]);
  assert(productionDiff.length === 0, `production unchanged (${productionDiff.join(",")})`);
}

function testBatchIdentityDeterminism() {
  const usability = buildOwnerPrepUsability({ root: ROOT });
  const batch = usability.batches.find((entry) => entry.batchId === BATCH_ID);
  const proof = JSON.parse(
    fs.readFileSync(path.join(ROOT, "reports/g2-a1-phase3-owner-review-batch-001-proof.json"), "utf8"),
  );
  assert(batch.decisionTargetCount === proof.batchDecisionTargetCount, "deterministic decision target count");
  assert(
    JSON.stringify(batch.memberFindingIds) === JSON.stringify(proof.memberFindingIds),
    "deterministic memberFindingIds",
  );
}

function main() {
  testPreflightSources();
  testPrepareAndArtifacts();
  testBatchIdentityDeterminism();

  console.log(`\nTests run: ${testsRun}, failed: ${testsFailed}`);
  if (testsFailed > 0) {
    console.error("BLOCKED_G2_A1_OWNER_REVIEW_BATCH_001_PACK");
    process.exit(1);
  }
  console.log("PASS: g2-a1-phase3-owner-review-batch-001");
}

if (require.main === module) {
  main();
}

module.exports = {
  main,
};
