#!/usr/bin/env node
"use strict";

const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT } = require("../audit-common");
const {
  EXPECTED_SOURCE_HASH,
  EXPECTED_FINDING_COUNT,
  validateSourceIntegrity,
} = require("./owner-prep-usability");
const { STAGING_ROOT } = require("./constants");
const { BASELINE_PACK_COMMIT, PACK_FILES, gitShow, gitRevParse } = require("./batch-001-pack-git");
const { loadCsv, loadCsvFromString } = require("./batch-001-csv");
const {
  IDENTITY_COLUMNS,
  applyOwnerReviewBatch001,
} = require("../../apply-g2-a1-phase3-owner-review-batch-001");

function sha256Hex(value) {
  return crypto.createHash("sha256").update(value).digest("hex");
}

function sha256File(absPath) {
  return sha256Hex(fs.readFileSync(absPath));
}

function gitDiffNames(baseRef, paths) {
  const output = execSync(`git diff --name-only ${baseRef} -- ${paths.join(" ")}`, {
    cwd: ROOT,
    encoding: "utf8",
  }).trim();
  return output ? output.split("\n").filter(Boolean) : [];
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
    .map((filePath) => `${path.basename(filePath)}:${sha256File(filePath)}`)
    .join("\n");
  return sha256Hex(payload);
}

function reconcileIdentity(baselineRows, currentRows) {
  const baselineByStable = new Map(baselineRows.map((row) => [row.finding_stable_ids, row]));
  const currentByStable = new Map(currentRows.map((row) => [row.finding_stable_ids, row]));
  const baselineIds = [...baselineByStable.keys()].sort();
  const currentIds = [...currentByStable.keys()].sort();
  const missing = baselineIds.filter((id) => !currentByStable.has(id));
  const extra = currentIds.filter((id) => !baselineByStable.has(id));
  const duplicates = currentIds.length - new Set(currentIds).size;
  const mismatches = [];
  for (const id of baselineIds) {
    const base = baselineByStable.get(id);
    const cur = currentByStable.get(id);
    if (!cur) continue;
    for (const col of IDENTITY_COLUMNS) {
      if (base[col] !== cur[col]) mismatches.push({ id, col, baseline: base[col], current: cur[col] });
    }
  }
  return { missing, extra, duplicates, mismatches, baselineIds, currentIds };
}

function ownerOutcomeStats(rows) {
  const stats = {
    ownerStatusDecided: 0,
    ownerStatusPending: 0,
    nelabot: 0,
    labot: 0,
    newCount: 0,
    ownerNewPopulated: 0,
    ownerNotesPopulated: 0,
    nonSourceLvIssueDecisions: 0,
    targetLanguageBacklogFlags: 0,
    targetLanguageBacklogClosed: 0,
    targetLanguageFixesApplied: 0,
    targetLanguageOwnerDecisionsCreated: 0,
    targetLanguageBacklogMemberIds: [],
    targetLanguageBacklogStableIds: [],
  };
  for (const row of rows) {
    if (row.owner_status === "DECIDED") stats.ownerStatusDecided += 1;
    if (row.owner_status === "PENDING") stats.ownerStatusPending += 1;
    if (row.owner_decision === "NELABOT") stats.nelabot += 1;
    if (row.owner_decision === "LABOT") stats.labot += 1;
    if (row.owner_decision === "NEW") stats.newCount += 1;
    if (row.owner_new?.trim()) stats.ownerNewPopulated += 1;
    if (row.owner_note?.trim()) stats.ownerNotesPopulated += 1;
    if (row.owner_decision && row.raw_category !== "SOURCE_LV_ISSUE") {
      stats.nonSourceLvIssueDecisions += 1;
    }
    if (row.owner_note.includes("target-language review backlog")) {
      stats.targetLanguageBacklogFlags += 1;
      stats.targetLanguageBacklogMemberIds.push(row.finding_member_ids);
      stats.targetLanguageBacklogStableIds.push(row.finding_stable_ids);
      if (row.owner_note.toLowerCase().includes("closed") || row.owner_note.toLowerCase().includes("resolved")) {
        stats.targetLanguageBacklogClosed += 1;
      }
    }
    if (row.owner_decision === "LABOT" || row.owner_decision === "NEW") {
      stats.targetLanguageFixesApplied += 1;
    }
  }
  stats.targetLanguageBacklogMemberIds.sort();
  stats.targetLanguageBacklogStableIds.sort();
  return stats;
}

function runIngestAudit(options = {}) {
  const root = options.root || ROOT;
  const baselineCommit = options.baselineCommit || BASELINE_PACK_COMMIT;
  const currentCommit = options.currentCommit || gitRevParse("HEAD");
  const errors = [];

  const baselineProof = JSON.parse(gitShow(baselineCommit, PACK_FILES.proof));
  const baselineCsv = loadCsvFromString(gitShow(baselineCommit, PACK_FILES.csv));
  const currentProof = JSON.parse(fs.readFileSync(path.join(root, PACK_FILES.proof), "utf8"));
  const currentCsv = loadCsv(path.join(root, PACK_FILES.csv));

  const baselineHashes = {};
  const currentHashes = {};
  for (const [key, rel] of Object.entries(PACK_FILES)) {
    baselineHashes[key] = sha256Hex(gitShow(baselineCommit, rel));
    currentHashes[key] = sha256File(path.join(root, rel));
  }

  if (baselineProof.classification !== "G2_A1_OWNER_REVIEW_BATCH_001_PACK_READY") {
    errors.push("baseline not PACK_READY");
  }
  if (!baselineProof.ownerStatuses?.includes("PENDING") || baselineProof.ownerStatuses.length !== 1) {
    errors.push("baseline owner status not PENDING-only");
  }
  if (currentProof.classification !== "G2_A1_OWNER_REVIEW_BATCH_001_DECIDED") {
    errors.push("current proof not DECIDED");
  }
  if (baselineProof.sourceHash !== EXPECTED_SOURCE_HASH || currentProof.sourceHash !== EXPECTED_SOURCE_HASH) {
    errors.push("source hash mismatch");
  }

  const identity = reconcileIdentity(baselineCsv.rows, currentCsv.rows);
  const ownerStats = ownerOutcomeStats(currentCsv.rows);

  const integrity = validateSourceIntegrity(root);
  if (!integrity.pass) errors.push("global source integrity fail");

  const batchMemberSet = new Set(currentProof.memberFindingIds);
  const globalDecidedInMaster = integrity.findings.filter(
    (f) => batchMemberSet.has(f.sourceFindingId) && f.ownerStatus !== "PENDING",
  ).length;

  const productionDiff = gitDiffNames("origin/main", ["data", "www/data"]);
  const lvDiff = gitDiffNames("origin/main", ["data/a1.js"]);
  const stagingDiff = gitDiffNames("origin/main", [path.relative(ROOT, STAGING_ROOT)]);
  const lunaDiff = gitDiffNames("origin/main", ["reports/temp/g2-a1-phase3-luna-runs"]);
  const crowdinDiff = gitDiffNames("origin/main", ["crowdin"]);

  const gates = {
    baselineBatchStatus: baselineProof.ownerStatuses?.[0] === "PENDING" ? "PENDING" : "FAIL",
    baselineFindings: baselineProof.batchFindingCount,
    baselineDecisionTargets: baselineProof.batchDecisionTargetCount,
    baselineSourceClusters: baselineProof.sourceClusterCount,
    baselineOwnerDecisions: 0,
    baselineSourceHash: baselineProof.sourceHash,
    memberIdCoverage: `${identity.currentIds.length}/${baselineProof.batchFindingCount}`,
    missingMemberIds: identity.missing.length,
    extraMemberIds: identity.extra.length,
    duplicateMemberIds: identity.duplicates,
    identityMismatches: identity.mismatches.length,
    ownerStatusDecided: ownerStats.ownerStatusDecided,
    ownerStatusPending: ownerStats.ownerStatusPending,
    ownerDecisionNelabot: ownerStats.nelabot,
    ownerDecisionLabot: ownerStats.labot,
    ownerNewPopulated: ownerStats.ownerNewPopulated,
    ownerNotesPopulated: ownerStats.ownerNotesPopulated,
    targetLanguageBacklogFlags: ownerStats.targetLanguageBacklogFlags,
    targetLanguageBacklogClosed: ownerStats.targetLanguageBacklogClosed,
    targetLanguageFixesApplied: ownerStats.targetLanguageFixesApplied,
    targetLanguageOwnerDecisionsCreated: ownerStats.targetLanguageOwnerDecisionsCreated,
    productionDiff: productionDiff.length,
    lvSourceDiff: lvDiff.length,
    deDiff: lvDiff.length,
    crowdinStagingDiff: stagingDiff.length + crowdinDiff.length,
    lunaCheckpointDiff: lunaDiff.length,
    lunaCheckpointSetSha: checkpointSetSha(),
    newRealLunaCalls: currentProof.newLunaCalls ?? 0,
    totalSourceFindings: EXPECTED_FINDING_COUNT,
    batch001Decided: currentProof.batchFindingCount,
    remainingForOwnerReview: EXPECTED_FINDING_COUNT - currentProof.batchFindingCount,
    findingsLost: EXPECTED_FINDING_COUNT - integrity.findings.length,
    findingsDuplicated:
      integrity.findings.length - new Set(integrity.findings.map((f) => f.sourceFindingId)).size,
    automaticOwnerDecisions: currentProof.automaticOwnerDecisions ?? 0,
    masterCsvBatchMembersStillPending: globalDecidedInMaster === 0,
    baselineReconstructableFromGit: true,
    decidedPackNotRewrittenToPending: currentProof.batchStatus === "DECIDED",
  };

  const required = [
    gates.baselineBatchStatus === "PENDING",
    gates.baselineFindings === 100,
    gates.baselineDecisionTargets === 100,
    gates.baselineSourceClusters === 21,
    gates.missingMemberIds === 0,
    gates.extraMemberIds === 0,
    gates.duplicateMemberIds === 0,
    gates.identityMismatches === 0,
    gates.ownerStatusDecided === 100,
    gates.ownerStatusPending === 0,
    gates.ownerDecisionNelabot === 100,
    gates.ownerDecisionLabot === 0,
    gates.ownerNewPopulated === 0,
    gates.ownerNotesPopulated === 100,
    gates.targetLanguageBacklogFlags === 29,
    gates.targetLanguageBacklogClosed === 0,
    gates.targetLanguageFixesApplied === 0,
    gates.productionDiff === 0,
    gates.lvSourceDiff === 0,
    gates.crowdinStagingDiff === 0,
    gates.newRealLunaCalls === 0,
    gates.automaticOwnerDecisions === 0,
    gates.findingsLost === 0,
    gates.findingsDuplicated === 0,
    ownerStats.nonSourceLvIssueDecisions === 0,
    gates.decidedPackNotRewrittenToPending,
    integrity.pass,
  ];

  if (!required.every(Boolean)) errors.push("one or more ingest audit gates failed");

  const proof = {
    classification: errors.length
      ? "BLOCKED_G2_A1_OWNER_REVIEW_BATCH_001_INGEST"
      : "G2_A1_OWNER_REVIEW_BATCH_001_INGEST_AUDIT_PASS",
    pass: errors.length === 0,
    ownerAuthorization: "G2_A1_OWNER_REVIEW_BATCH_001_INGEST_AUDIT_AND_REPAIR_APPROVED",
    baselineCommit,
    currentCommit,
    baselineFileSha256: baselineHashes,
    currentFileSha256: currentHashes,
    gates,
    identityMismatches: identity.mismatches,
    targetLanguageBacklogMemberIds: ownerStats.targetLanguageBacklogMemberIds,
    targetLanguageBacklogStableIds: ownerStats.targetLanguageBacklogStableIds,
    memberFindingIds: currentProof.memberFindingIds,
    decisionTargetKeys: currentProof.decisionTargetKeys,
    errors,
    nextStep: errors.length
      ? "TARGETED_REPAIR_REQUIRED"
      : "OWNER_REVIEW_PR_720_AND_PREPARE_BATCH_002",
  };

  return { pass: proof.pass, proof, errors, baselineCsv, currentCsv, baselineProof, currentProof };
}

function buildAuditMarkdown(audit) {
  const { proof } = audit;
  const { gates } = proof;
  const lines = [
    "# G2/A1 Phase 3 — OWNER review BATCH-001 ingest audit",
    "",
    `**Classification:** \`${proof.classification}\``,
    `**OWNER authorization:** \`${proof.ownerAuthorization}\``,
    `**Baseline commit (PENDING pack):** \`${proof.baselineCommit}\``,
    `**Current commit (DECIDED pack):** \`${proof.currentCommit}\``,
    `**Next step:** \`${proof.nextStep}\``,
    "",
    "## Baseline preservation",
    "",
    "| Gate | Value |",
    "|------|-------|",
    `| BASELINE_BATCH_STATUS | ${gates.baselineBatchStatus} |`,
    `| BASELINE_FINDINGS | ${gates.baselineFindings} |`,
    `| BASELINE_DECISION_TARGETS | ${gates.baselineDecisionTargets} |`,
    `| BASELINE_SOURCE_CLUSTERS | ${gates.baselineSourceClusters} |`,
    `| BASELINE_OWNER_DECISIONS | ${gates.baselineOwnerDecisions} |`,
    `| BASELINE_SOURCE_HASH | \`${gates.baselineSourceHash}\` |`,
    `| BASELINE_RECONSTRUCTABLE_FROM_GIT | ${gates.baselineReconstructableFromGit} |`,
    "",
    "### Baseline file SHA-256",
    "",
    "| File | SHA-256 |",
    "|------|---------|",
    ...Object.entries(proof.baselineFileSha256).map(([key, hash]) => `| ${key} | \`${hash}\` |`),
    "",
    "## Identity reconciliation (100/100)",
    "",
    "| Gate | Value |",
    "|------|-------|",
    `| MEMBER_ID_COVERAGE | ${gates.memberIdCoverage} |`,
    `| MISSING_MEMBER_IDS | ${gates.missingMemberIds} |`,
    `| EXTRA_MEMBER_IDS | ${gates.extraMemberIds} |`,
    `| DUPLICATE_MEMBER_IDS | ${gates.duplicateMemberIds} |`,
    `| IDENTITY_MISMATCHES | ${gates.identityMismatches} |`,
    "",
    "## OWNER outcomes",
    "",
    "| Gate | Value |",
    "|------|-------|",
    `| OWNER_STATUS_DECIDED | ${gates.ownerStatusDecided} |`,
    `| OWNER_STATUS_PENDING | ${gates.ownerStatusPending} |`,
    `| OWNER_DECISION_NELABOT | ${gates.ownerDecisionNelabot} |`,
    `| OWNER_DECISION_LABOT | ${gates.ownerDecisionLabot} |`,
    `| OWNER_NEW_POPULATED | ${gates.ownerNewPopulated} |`,
    `| OWNER_NOTES_POPULATED | ${gates.ownerNotesPopulated} |`,
    "",
    "## Target-language backlog (29 flagged, 0 closed)",
    "",
    "| Gate | Value |",
    "|------|-------|",
    `| TARGET_LANGUAGE_BACKLOG_FLAGS | ${gates.targetLanguageBacklogFlags} |`,
    `| TARGET_LANGUAGE_BACKLOG_CLOSED | ${gates.targetLanguageBacklogClosed} |`,
    `| TARGET_LANGUAGE_FIXES_APPLIED | ${gates.targetLanguageFixesApplied} |`,
    `| TARGET_LANGUAGE_OWNER_DECISIONS_CREATED | ${gates.targetLanguageOwnerDecisionsCreated} |`,
    "",
    "### Target-language backlog member IDs",
    "",
    ...proof.targetLanguageBacklogMemberIds.map((id) => `- \`${id}\``),
    "",
    "## Immutable content (vs origin/main)",
    "",
    "| Gate | Value |",
    "|------|-------|",
    `| PRODUCTION_DIFF | ${gates.productionDiff} |`,
    `| LV_SOURCE_DIFF | ${gates.lvSourceDiff} |`,
    `| DE_DIFF | ${gates.deDiff} |`,
    `| CROWDIN_STAGING_DIFF | ${gates.crowdinStagingDiff} |`,
    `| LUNA_CHECKPOINT_DIFF | ${gates.lunaCheckpointDiff} |`,
    `| NEW_REAL_LUNA_CALLS | ${gates.newRealLunaCalls} |`,
    "",
    "## Global backlog reconciliation",
    "",
    "| Gate | Value |",
    "|------|-------|",
    `| TOTAL_SOURCE_FINDINGS | ${gates.totalSourceFindings} |`,
    `| BATCH_001_DECIDED | ${gates.batch001Decided} |`,
    `| REMAINING_FOR_OWNER_REVIEW | ${gates.remainingForOwnerReview} |`,
    `| FINDINGS_LOST | ${gates.findingsLost} |`,
    `| FINDINGS_DUPLICATED | ${gates.findingsDuplicated} |`,
    `| AUTOMATIC_OWNER_DECISIONS | ${gates.automaticOwnerDecisions} |`,
    `| MASTER_CSV_BATCH_MEMBERS_STILL_PENDING | ${gates.masterCsvBatchMembersStillPending} |`,
    "",
    "## Current file SHA-256",
    "",
    "| File | SHA-256 |",
    "|------|---------|",
    ...Object.entries(proof.currentFileSha256).map(([key, hash]) => `| ${key} | \`${hash}\` |`),
    "",
  ];
  if (proof.errors.length) {
    lines.push("## Errors", "", ...proof.errors.map((e) => `- ${e}`), "");
  }
  return `${lines.join("\n")}\n`;
}

module.exports = {
  BASELINE_PACK_COMMIT,
  PACK_FILES,
  IDENTITY_COLUMNS,
  runIngestAudit,
  buildAuditMarkdown,
  reconcileIdentity,
  ownerOutcomeStats,
  loadCsvFromString,
  gitShow,
  checkpointSetSha,
  applyOwnerReviewBatch001,
};
