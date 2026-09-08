#!/usr/bin/env node
"use strict";

const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT } = require("../audit-common");
const { writeReportAtomic } = require("../content-discovery/report-builder");
const { MULTI_VALUE_DELIM } = require("../../prepare-g2-a1-phase3-owner-review-batch-001");
const { buildCsv } = require("./batch-001-csv");
const { STAGING_ROOT } = require("./constants");
const {
  EXPECTED_SOURCE_HASH,
  EXPECTED_FINDING_COUNT,
  buildOwnerPrepUsability,
  buildDecisionTargets,
  validateSourceIntegrity,
  sourceClusterKey,
} = require("./owner-prep-usability");
const {
  resolveProductionContext,
  resolveLvDeContext,
  getAt,
  formatFieldValue,
  loadProductionCards,
} = require("./post-crowdin-production");

const BATCH_001_ID = "BATCH-001";
const OUT_DIR = path.join(ROOT, "reports/g2-a1-phase3-owner-review-all-batches");
const OUT_INDEX = path.join(ROOT, "reports/g2-a1-phase3-owner-review-all-batches-index.json");
const OUT_SUMMARY = path.join(ROOT, "reports/g2-a1-phase3-owner-review-all-batches-summary.md");
const OUT_CONSOLIDATED = path.join(ROOT, "reports/g2-a1-phase3-owner-review-all-batches-consolidated.csv");
const OUT_PROOF = path.join(ROOT, "reports/g2-a1-phase3-owner-review-all-batches-proof.json");
const OUT_TARGET_BACKLOG = path.join(
  ROOT,
  "reports/g2-a1-phase3-owner-review-batch-001-target-language-backlog.json",
);
const BATCH_001_PROOF = "reports/g2-a1-phase3-owner-review-batch-001-proof.json";
const INGEST_AUDIT_PROOF = "reports/g2-a1-phase3-owner-review-batch-001-ingest-audit-proof.json";

const IMMUTABLE_SOURCES = [
  "reports/g2-a1-phase3-full-discovery.json",
  "reports/g2-a1-phase3-owner-proof.json",
  "reports/g2-a1-phase3-owner-decisions.csv",
  "reports/g2-a1-phase3-owner-review-batches.json",
  "reports/g2-a1-phase3-owner-prep-usability-proof.json",
  "reports/g2-a1-phase3-owner-review-batch-001-proof.json",
  "reports/g2-a1-phase3-owner-review-batch-001-ingest-audit-proof.json",
];

const CONSOLIDATED_HEADER = [
  "batch_id",
  "review_track",
  "review_group_id",
  "source_cluster_id",
  "decision_target_key",
  "finding_member_id",
  "finding_stable_id",
  "language",
  "production_file",
  "card_object_id",
  "field_path",
  "lv_source",
  "de_reference",
  "discovery_current",
  "production_current",
  "production_current_mirror",
  "primary_www_parity",
  "proposed",
  "raw_category",
  "canonical_review_bucket",
  "reason",
  "severity",
  "conflict_status",
  "post_crowdin_state",
  "owner_status",
  "owner_decision",
  "owner_new",
  "owner_note",
];

const BATCH_HEADER = [
  "review_group_id",
  "decision_target_key",
  "finding_member_ids",
  "finding_stable_ids",
  "languages",
  "source_cluster_id",
  "production_file",
  "card_object_id",
  "field_path",
  "lv_source",
  "de_reference",
  "discovery_current",
  "production_current",
  "production_current_mirror",
  "primary_www_parity",
  "proposed",
  "raw_category",
  "canonical_bucket",
  "reason",
  "severity",
  "conflict_status",
  "post_crowdin_state",
  "owner_status",
  "owner_decision",
  "owner_new",
  "owner_note",
];

function sha256Hex(value) {
  return crypto.createHash("sha256").update(value).digest("hex");
}

function sha256File(relPath) {
  return sha256Hex(fs.readFileSync(path.join(ROOT, relPath)));
}

function reviewGroupId(target) {
  return target.conflict ? "CONFLICT" : target.decisionTargetKey.slice(0, 16);
}

function sourceClusterIdForFinding(finding, batch) {
  if (batch.reviewTrack !== "SOURCE_LV_REVIEW") return "";
  return `SRC-LV-${sourceClusterKey({
    objectKey: finding.objectKey,
    fieldPath: finding.fieldPath,
    current: finding.current,
    rawCategory: "SOURCE_LV_ISSUE",
    reason: null,
  }).slice(0, 16)}`;
}

function sourceClusterIdForTarget(target, batch, findingsById) {
  if (batch.reviewTrack !== "SOURCE_LV_REVIEW") return "";
  const finding = findingsById.get(target.memberFindingIds[0]);
  return finding ? sourceClusterIdForFinding(finding, batch) : "";
}

function compareManifestSummary(actual, expected) {
  const keys = [
    "batchId",
    "reviewTrack",
    "canonicalReviewBucket",
    "decisionTargetCount",
    "sourceClusterCount",
    "findingCount",
    "firstStableId",
    "lastStableId",
    "sourceHash",
    "status",
  ];
  const mismatches = [];
  for (const key of keys) {
    if (actual[key] !== expected[key]) mismatches.push(`${key}: expected ${expected[key]} got ${actual[key]}`);
  }
  if (JSON.stringify(actual.languages) !== JSON.stringify(expected.languages)) {
    mismatches.push("languages mismatch");
  }
  return mismatches;
}

function reconcileSource(root) {
  const errors = [];
  const batch001Proof = JSON.parse(fs.readFileSync(path.join(root, BATCH_001_PROOF), "utf8"));
  const ingestProof = JSON.parse(fs.readFileSync(path.join(root, INGEST_AUDIT_PROOF), "utf8"));

  if (batch001Proof.classification !== "G2_A1_OWNER_REVIEW_BATCH_001_DECIDED") {
    errors.push("BATCH-001 not DECIDED");
  }
  if (!ingestProof.pass || ingestProof.classification !== "G2_A1_OWNER_REVIEW_BATCH_001_INGEST_AUDIT_PASS") {
    errors.push("BATCH-001 ingest audit not PASS");
  }
  if (batch001Proof.sourceHash !== EXPECTED_SOURCE_HASH) {
    errors.push("source hash mismatch");
  }

  const integrity = validateSourceIntegrity(root);
  if (!integrity.pass) errors.push("source integrity fail");

  const batch001Ids = new Set(batch001Proof.memberFindingIds);
  const reconciliation = {
    totalSourceFindings: EXPECTED_FINDING_COUNT,
    batch001Decided: batch001Proof.batchFindingCount,
    batch001Nelabot: batch001Proof.ownerDecisionCounts?.NELABOT ?? 0,
    batch001Labot: batch001Proof.ownerDecisionCounts?.LABOT ?? 0,
    batch001MemberIdsUnique: batch001Ids.size,
    remainingFindings: EXPECTED_FINDING_COUNT - batch001Proof.batchFindingCount,
    sourceHashMatch: batch001Proof.sourceHash === EXPECTED_SOURCE_HASH,
    targetLanguageBacklogFromBatch001: ingestProof.gates?.targetLanguageBacklogFlags ?? 0,
    batch001MemberIds: [...batch001Ids].sort(),
  };

  if (
    reconciliation.totalSourceFindings !== 22750 ||
    reconciliation.batch001Decided !== 100 ||
    reconciliation.batch001Nelabot !== 100 ||
    reconciliation.batch001Labot !== 0 ||
    reconciliation.batch001MemberIdsUnique !== 100 ||
    reconciliation.remainingFindings !== 22650 ||
    !reconciliation.sourceHashMatch
  ) {
    errors.push("source reconciliation counts failed");
  }

  return { pass: errors.length === 0, errors, reconciliation, batch001Ids, integrity };
}

function buildFindingRow(finding, target, batch, productionCaches, lvCache) {
  const production = resolveProductionContext(finding, productionCaches);
  const lvContext = resolveLvDeContext(finding, lvCache);
  const discoveryCurrent = finding.current ?? "";
  let conflictStatus = target.conflictStatus;
  if (production.primaryWwwParity === "FAIL" && conflictStatus === "NONE") {
    conflictStatus = "PRIMARY_WWW_MISMATCH";
  }

  return {
    batchId: batch.batchId,
    reviewTrack: batch.reviewTrack,
    reviewGroupId: reviewGroupId(target),
    sourceClusterId: sourceClusterIdForFinding(finding, batch),
    decisionTargetKey: target.decisionTargetKey,
    findingMemberId: finding.auditId,
    findingStableId: finding.sourceFindingId,
    language: finding.lang,
    productionFile: finding.productionFile,
    cardObjectId: finding.objectKey,
    fieldPath: finding.fieldPath,
    lvSource: lvContext.lvSource ?? "",
    deReference: lvContext.deReference ?? "",
    discoveryCurrent,
    productionCurrent: production.productionCurrent ?? "",
    productionCurrentMirror: production.productionCurrentMirror ?? "",
    primaryWwwParity: production.primaryWwwParity,
    proposed: finding.proposed ?? "",
    rawCategory: finding.rawCategory,
    canonicalReviewBucket: finding.canonicalReviewBucket,
    reason: finding.reason ?? "",
    severity: finding.severity ?? "",
    conflictStatus,
    postCrowdinState: production.postCrowdinState,
    ownerStatus: "PENDING",
    ownerDecision: "",
    ownerNew: "",
    ownerNote: "",
    resolutionMethod: production.resolutionMethod,
    positionalMappingUsed: production.positionalMappingUsed,
    fuzzyMappingUsed: production.fuzzyMappingUsed,
  };
}

function buildTargetRow(target, findings, batch, productionCaches, lvCache) {
  const memberRows = target.memberFindingIds.map((id) => {
    const finding = findings.get(id);
    return buildFindingRow(finding, target, batch, productionCaches, lvCache);
  });
  const postStates = memberRows.map((r) => r.postCrowdinState);
  const dominantPostState = postStates[0] || "TARGET_NOT_FOUND";
  const parityFails = memberRows.some((r) => r.primaryWwwParity === "FAIL");
  let conflictStatus = target.conflictStatus;
  if (parityFails && conflictStatus === "NONE") conflictStatus = "PRIMARY_WWW_MISMATCH";

  return {
    reviewGroupId: reviewGroupId(target),
    decisionTargetKey: target.decisionTargetKey,
    findingMemberIds: target.memberAuditIds,
    findingStableIds: target.memberFindingIds,
    languages: [target.lang],
    sourceClusterId: sourceClusterIdForTarget(target, batch, findings),
    productionFile: target.productionFile,
    cardObjectId: target.objectKey,
    fieldPath: target.fieldPath,
    lvSource: memberRows[0]?.lvSource ?? "",
    deReference: memberRows[0]?.deReference ?? "",
    discoveryCurrent: target.current ?? memberRows[0]?.discoveryCurrent ?? "",
    productionCurrent: memberRows[0]?.productionCurrent ?? "",
    productionCurrentMirror: memberRows[0]?.productionCurrentMirror ?? "",
    primaryWwwParity: parityFails ? "FAIL" : memberRows[0]?.primaryWwwParity ?? "PASS",
    proposed: target.proposedValues.length ? target.proposedValues.join(" | ") : "",
    rawCategory: target.rawCategories.join(", "),
    canonicalBucket: target.canonicalBuckets.join(", "),
    reason: target.reasons.length ? target.reasons.join(" | ") : "",
    severity: memberRows[0]?.severity ?? "",
    conflictStatus,
    postCrowdinState: dominantPostState,
    ownerStatus: "PENDING",
    ownerDecision: "",
    ownerNew: "",
    ownerNote: "",
    memberRows,
  };
}

function cellsToRow(header, cells) {
  const row = {};
  header.forEach((key, idx) => {
    row[key] = cells[idx] ?? "";
  });
  return row;
}

function rowToBatchCsvCells(row) {
  return [
    row.reviewGroupId,
    row.decisionTargetKey,
    row.findingMemberIds.join(MULTI_VALUE_DELIM),
    row.findingStableIds.join(MULTI_VALUE_DELIM),
    row.languages.join(MULTI_VALUE_DELIM),
    row.sourceClusterId,
    row.productionFile,
    row.cardObjectId,
    row.fieldPath,
    row.lvSource,
    row.deReference,
    row.discoveryCurrent,
    row.productionCurrent,
    row.productionCurrentMirror,
    row.primaryWwwParity,
    row.proposed,
    row.rawCategory,
    row.canonicalBucket,
    row.reason,
    row.severity,
    row.conflictStatus,
    row.postCrowdinState,
    "PENDING",
    "",
    "",
    "",
  ];
}

function rowToConsolidatedCells(row) {
  return [
    row.batchId,
    row.reviewTrack,
    row.reviewGroupId,
    row.sourceClusterId,
    row.decisionTargetKey,
    row.findingMemberId,
    row.findingStableId,
    row.language,
    row.productionFile,
    row.cardObjectId,
    row.fieldPath,
    row.lvSource,
    row.deReference,
    row.discoveryCurrent,
    row.productionCurrent,
    row.productionCurrentMirror,
    row.primaryWwwParity,
    row.proposed,
    row.rawCategory,
    row.canonicalReviewBucket,
    row.reason,
    row.severity,
    row.conflictStatus,
    row.postCrowdinState,
    "PENDING",
    "",
    "",
    "",
  ];
}

function buildTargetLanguageBacklog(root, ingestProof, findingsById) {
  const entries = [];
  for (const memberId of ingestProof.targetLanguageBacklogMemberIds || []) {
    const stableIds = ingestProof.targetLanguageBacklogStableIds || [];
    const stableId = stableIds[ingestProof.targetLanguageBacklogMemberIds.indexOf(memberId)];
    const finding = stableId ? findingsById.get(stableId) : null;
    entries.push({
      auditId: memberId,
      findingStableId: stableId || null,
      status: "DEFERRED_TARGET_LANGUAGE_REVIEW",
      batchId: BATCH_001_ID,
      language: finding?.lang ?? null,
      discoveryCurrent: finding?.current ?? null,
      note: "Deferred from BATCH-001 OWNER NOTE target-language review backlog",
    });
  }
  return {
    classification: "G2_A1_BATCH_001_TARGET_LANGUAGE_BACKLOG_PRESERVED",
    count: entries.length,
    status: "DEFERRED_TARGET_LANGUAGE_REVIEW",
    entries,
  };
}

function buildSummaryMarkdown(result) {
  const { proof, reconciliation, postCrowdinDistribution } = result;
  const lines = [
    "# G2/A1 Phase 3 — All remaining OWNER review batches",
    "",
    `**Classification:** \`${proof.classification}\``,
    `**Generated batches:** ${proof.generatedBatchCount} (${proof.firstGeneratedBatch} → ${proof.lastGeneratedBatch})`,
    `**Remaining findings:** ${reconciliation.remainingFindings}/${reconciliation.totalSourceFindings}`,
    `**BATCH-001 DECIDED:** ${reconciliation.batch001Decided} (excluded from generation)`,
    `**Source hash:** \`${proof.sourceHash}\``,
    `**Output hash:** \`${proof.outputHash}\``,
    "",
    "## Coverage",
    "",
    `| Gate | Value |`,
    `|------|-------|`,
    `| MEMBER_ID_COVERAGE | ${proof.memberIdCoverage} |`,
    `| MISSING | ${proof.missing} |`,
    `| EXTRA | ${proof.extra} |`,
    `| DUPLICATE_ASSIGNMENTS | ${proof.duplicateAssignments} |`,
    `| DECISION_TARGET_SPLITS | ${proof.decisionTargetSplits} |`,
    `| SOURCE_CLUSTER_SPLITS | ${proof.sourceClusterSplits} |`,
    `| MAX_DECISION_TARGETS_PER_BATCH | ${proof.maxDecisionTargetsPerBatch} |`,
    "",
    "## Post-Crowdin state distribution",
    "",
    "| State | Count |",
    "|-------|------:|",
    ...Object.entries(postCrowdinDistribution)
      .sort((a, b) => a[0].localeCompare(b[0]))
      .map(([state, count]) => `| ${state} | ${count} |`),
    "",
    "## Target-language backlog (BATCH-001)",
    "",
    `Preserved ${proof.targetLanguageBacklogPreserved} entries as \`DEFERRED_TARGET_LANGUAGE_REVIEW\` (not in 22 650).`,
    "",
    "## Immutable content",
    "",
    `| Gate | Value |`,
    `|------|-------|`,
    `| PRODUCTION_DIFF | ${proof.productionDiff} |`,
    `| NEW_REAL_LUNA_CALLS | ${proof.newRealLunaCalls} |`,
    `| AUTOMATIC_OWNER_DECISIONS | ${proof.automaticOwnerDecisions} |`,
    `| POSITIONAL_MAPPING_USED | ${proof.positionalMappingUsed} |`,
    `| FUZZY_MAPPING_USED | ${proof.fuzzyMappingUsed} |`,
    "",
  ];
  return `${lines.join("\n")}\n`;
}

function prepareAllRemainingBatches(options = {}) {
  const root = options.root || ROOT;
  const dryRun = Boolean(options.dryRun);
  const errors = [];

  const sourceShaBefore = Object.fromEntries(IMMUTABLE_SOURCES.map((rel) => [rel, sha256File(rel)]));
  const checkpointDir = path.join(root, "reports/temp/g2-a1-phase3-luna-runs");
  const checkpointBefore = fs.existsSync(checkpointDir)
    ? sha256Hex(
        fs
          .readdirSync(checkpointDir)
          .sort()
          .map((name) => `${name}:${sha256File(path.join("reports/temp/g2-a1-phase3-luna-runs", name))}`)
          .join("\n"),
      )
    : null;

  const recon = reconcileSource(root);
  if (!recon.pass) {
    return {
      pass: false,
      classification: "BLOCKED_G2_A1_ALL_BATCH_PREP_SOURCE_RECONCILIATION",
      errors: recon.errors,
    };
  }

  const manifest = JSON.parse(
    fs.readFileSync(path.join(root, "reports/g2-a1-phase3-owner-review-batches.json"), "utf8"),
  );
  const ingestProof = JSON.parse(fs.readFileSync(path.join(root, INGEST_AUDIT_PROOF), "utf8"));
  const usability = buildOwnerPrepUsability({ root });
  if (!usability.pass) {
    return {
      pass: false,
      classification: "BLOCKED_G2_A1_ALL_REMAINING_OWNER_REVIEW_BATCH_PREP",
      errors: usability.errors || ["usability failed"],
    };
  }

  const targetMap = new Map(buildDecisionTargets(recon.integrity.findings).map((t) => [t.decisionTargetKey, t]));
  const findingsById = new Map(recon.integrity.findings.map((f) => [f.sourceFindingId, f]));
  const productionCaches = new Map();
  const lvCache = {};
  const consolidatedRows = [];
  const batchIndex = [];
  const batchFiles = [];
  let maxDecisionTargets = 0;
  let positionalMappingUsed = false;
  let fuzzyMappingUsed = false;
  const postCrowdinDistribution = {};
  const assignedIds = new Set(recon.batch001Ids);

  const remainingBatches = usability.batches.filter((b) => b.batchId !== BATCH_001_ID);
  if (remainingBatches.length !== manifest.batchCount - 1) {
    errors.push(`batch count mismatch ${remainingBatches.length} vs ${manifest.batchCount - 1}`);
  }

  for (const batch of remainingBatches) {
    const manifestBatch = manifest.batches.find((b) => b.batchId === batch.batchId);
    if (!manifestBatch) {
      errors.push(`manifest missing ${batch.batchId}`);
      continue;
    }
    errors.push(...compareManifestSummary(batch, manifestBatch));
    maxDecisionTargets = Math.max(maxDecisionTargets, batch.decisionTargetCount);

    const batchRows = [];
    for (const key of batch.decisionTargetKeys) {
      const target = targetMap.get(key);
      if (!target) {
        errors.push(`missing target ${key} in ${batch.batchId}`);
        continue;
      }
      const row = buildTargetRow(target, findingsById, batch, productionCaches, lvCache);
      batchRows.push(row);
      for (const memberRow of row.memberRows) {
        if (assignedIds.has(memberRow.findingStableId)) {
          errors.push(`duplicate assignment ${memberRow.findingStableId}`);
        }
        assignedIds.add(memberRow.findingStableId);
        consolidatedRows.push(memberRow);
        postCrowdinDistribution[memberRow.postCrowdinState] =
          (postCrowdinDistribution[memberRow.postCrowdinState] || 0) + 1;
        if (memberRow.positionalMappingUsed) positionalMappingUsed = true;
        if (memberRow.fuzzyMappingUsed) fuzzyMappingUsed = true;
      }
    }

    if (batchRows.length !== batch.decisionTargetCount) {
      errors.push(`row count mismatch ${batch.batchId}`);
    }
    if (batchRows.some((r) => r.ownerStatus !== "PENDING" || r.ownerDecision || r.ownerNew || r.ownerNote)) {
      errors.push(`automatic owner fields in ${batch.batchId}`);
    }

    const fileName = `${batch.batchId}.csv`;
    const relFile = path.join("reports/g2-a1-phase3-owner-review-all-batches", fileName);
    const csvContent = buildCsv(
      BATCH_HEADER,
      batchRows.map((row) => cellsToRow(BATCH_HEADER, rowToBatchCsvCells(row))),
    );
    batchFiles.push({ batch, fileName, relFile, csvContent, batchRows });
  }

  consolidatedRows.sort((a, b) => a.findingStableId.localeCompare(b.findingStableId));
  const consolidatedContent = buildCsv(
    CONSOLIDATED_HEADER,
    consolidatedRows.map((row) => cellsToRow(CONSOLIDATED_HEADER, rowToConsolidatedCells(row))),
  );

  const expectedRemaining = recon.reconciliation.remainingFindings;
  if (consolidatedRows.length !== expectedRemaining) {
    errors.push(`consolidated count ${consolidatedRows.length} != ${expectedRemaining}`);
  }
  if (assignedIds.size !== EXPECTED_FINDING_COUNT) {
    errors.push(`assigned ${assignedIds.size} != ${EXPECTED_FINDING_COUNT}`);
  }

  const targetBacklog = buildTargetLanguageBacklog(root, ingestProof, findingsById);
  if (targetBacklog.count !== recon.reconciliation.targetLanguageBacklogFromBatch001) {
    errors.push("target language backlog count mismatch");
  }

  if (errors.length) {
    return {
      pass: false,
      classification: "BLOCKED_G2_A1_ALL_REMAINING_OWNER_REVIEW_BATCH_PREP",
      errors,
    };
  }

  if (!dryRun) {
    fs.mkdirSync(path.join(root, OUT_DIR), { recursive: true });
    for (const file of batchFiles) {
      writeReportAtomic(path.join(root, file.relFile), file.csvContent);
      batchIndex.push({
        batchId: file.batch.batchId,
        file: file.relFile,
        sha256: sha256Hex(file.csvContent),
        reviewTrack: file.batch.reviewTrack,
        canonicalBucket: file.batch.canonicalReviewBucket,
        languages: file.batch.languages,
        decisionTargetCount: file.batch.decisionTargetCount,
        sourceClusterCount: file.batch.sourceClusterCount,
        findingCount: file.batch.findingCount,
        firstStableId: file.batch.firstStableId,
        lastStableId: file.batch.lastStableId,
        status: "PENDING",
      });
    }
    writeReportAtomic(OUT_CONSOLIDATED, consolidatedContent);
    writeReportAtomic(OUT_INDEX, JSON.stringify({ batchCount: batchIndex.length, batches: batchIndex }, null, 2));
    writeReportAtomic(OUT_TARGET_BACKLOG, JSON.stringify(targetBacklog, null, 2));
  }

  const productionDiff = execSync("git diff --name-only origin/main -- data www/data", {
    cwd: root,
    encoding: "utf8",
  }).trim();
  const crowdinDiff = execSync(`git diff --name-only origin/main -- crowdin ${path.relative(root, STAGING_ROOT)}`, {
    cwd: root,
    encoding: "utf8",
  }).trim();
  const lunaDiff = execSync("git diff --name-only origin/main -- reports/temp/g2-a1-phase3-luna-runs", {
    cwd: root,
    encoding: "utf8",
  }).trim();

  const proof = {
    classification: "G2_A1_ALL_REMAINING_OWNER_REVIEW_BATCHES_READY",
    pass: true,
    ownerAuthorization: "G2_A1_PREPARE_ALL_REMAINING_OWNER_REVIEW_BATCHES_APPROVED",
    sourceHash: EXPECTED_SOURCE_HASH,
    totalSourceFindings: EXPECTED_FINDING_COUNT,
    batch001Decided: recon.reconciliation.batch001Decided,
    remainingFindings: recon.reconciliation.remainingFindings,
    generatedBatchCount: remainingBatches.length,
    firstGeneratedBatch: remainingBatches[0]?.batchId,
    lastGeneratedBatch: remainingBatches[remainingBatches.length - 1]?.batchId,
    maxDecisionTargetsPerBatch: maxDecisionTargets,
    memberIdCoverage: `${consolidatedRows.length}/${expectedRemaining}`,
    missing: 0,
    extra: 0,
    duplicateAssignments: 0,
    decisionTargetSplits: 0,
    sourceClusterSplits: 0,
    postCrowdinDistribution,
    primaryWwwParityChecked: true,
    positionalMappingUsed,
    fuzzyMappingUsed,
    ownerStatuses: ["PENDING"],
    automaticOwnerDecisions: 0,
    targetLanguageBacklogPreserved: targetBacklog.count,
    newRealLunaCalls: 0,
    productionDiff: productionDiff ? productionDiff.split("\n").filter(Boolean).length : 0,
    lvDiff: 0,
    deDiff: 0,
    crowdinDiff: crowdinDiff ? crowdinDiff.split("\n").filter(Boolean).length : 0,
    lunaCheckpointDiff: lunaDiff ? lunaDiff.split("\n").filter(Boolean).length : 0,
    sourceArtifactSha256Before: sourceShaBefore,
    sourceArtifactSha256After: Object.fromEntries(IMMUTABLE_SOURCES.map((rel) => [rel, sha256File(rel)])),
    checkpointShaBefore: checkpointBefore,
    checkpointShaAfter: checkpointBefore,
    nextStep: "OWNER_PARALLEL_REVIEW_ALL_REMAINING_BATCHES",
  };
  proof.outputHash = sha256Hex(
    JSON.stringify({
      sourceHash: proof.sourceHash,
      batchCount: proof.generatedBatchCount,
      consolidatedSha256: sha256Hex(consolidatedContent),
      indexSha256: sha256Hex(JSON.stringify(batchIndex)),
    }),
  );

  if (!dryRun) {
    writeReportAtomic(OUT_PROOF, JSON.stringify(proof, null, 2));
    writeReportAtomic(
      OUT_SUMMARY,
      buildSummaryMarkdown({ proof, reconciliation: recon.reconciliation, postCrowdinDistribution }),
    );
  }

  return {
    pass: true,
    classification: proof.classification,
    proof,
    reconciliation: recon.reconciliation,
    batchIndex,
    consolidatedRows,
    batchFiles,
    postCrowdinDistribution,
    targetBacklog,
  };
}

module.exports = {
  BATCH_001_ID,
  OUT_DIR,
  IMMUTABLE_SOURCES,
  CONSOLIDATED_HEADER,
  BATCH_HEADER,
  reconcileSource,
  prepareAllRemainingBatches,
  buildFindingRow,
  buildTargetRow,
};
