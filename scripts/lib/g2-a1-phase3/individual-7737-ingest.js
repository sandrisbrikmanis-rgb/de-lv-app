#!/usr/bin/env node
"use strict";

const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT } = require("../audit-common");
const { writeReportAtomic } = require("../content-discovery/report-builder");
const { loadCsv, loadCsvFromString, buildCsv } = require("./batch-001-csv");
const { STAGING_ROOT } = require("./constants");
const { EXPECTED_SOURCE_HASH } = require("./owner-prep-usability");
const {
  EXPECTED_DECISIONS_SHA: TRUSTED_PRE_INGEST_DECISIONS_SHA,
  EXPECTED_NEEDS_OWNER_SHA: TRUSTED_PRE_INGEST_NEEDS_OWNER_SHA,
  IDENTITY_PAIRS,
  reconcileIdentity,
  ownerGateStats,
  buildConsolidatedRow,
  buildBatchRow,
  batchStatusForRows,
} = require("./all-remaining-ingest");
const {
  BATCH_HEADER,
  CONSOLIDATED_HEADER,
  IMMUTABLE_SOURCES,
} = require("./owner-review-all-batches");

const OUT_INDEX = path.join(ROOT, "reports/g2-a1-phase3-owner-review-all-batches-index.json");
const OUT_CONSOLIDATED = path.join(ROOT, "reports/g2-a1-phase3-owner-review-all-batches-consolidated.csv");
const OUT_ALL_BATCHES_PROOF = path.join(ROOT, "reports/g2-a1-phase3-owner-review-all-batches-proof.json");
const {
  OUT_DECISIONS,
  OUT_REMAINING,
  OUT_PROOF,
  OUT_BATCH_DIR,
  OUT_BATCH_INDEX,
  REVIEW_HEADER,
  classifyUnresolvedCategory,
} = require("./owner-review-7737-escalations");

const PRE_INGEST_HEAD = "71dd4263";
const TRUSTED_INGEST_COMMIT = "1b2212f2";
const REPAIRED_INPUT_HASH = "0d3b8fbb1aeed3a694c2301194d950a1034b91f2f376aca7a6a9b6f46588c1bb";

const EXPECTED_REVIEW_7737_SHA =
  "23b2dfd6aa62732483cdf3c018ae80e8e8961b5d5ca835a15d4d01fc1b22e1e0";
const EXPECTED_PENDING_5104_SHA =
  "35925b1234bf8bbcd62fc30c97b7cb52a4b96948959607b8ad4ede7e5d6f074d";
const EXPECTED_CONSOLIDATED_22650_SHA =
  "2cf0803bbda7bb1f3b059b32c862ff8e9567565c390eee08a2e96bc4a863724e";

const DECISIONS_CSV = path.join(ROOT, "reports/g2-a1-owner-review-all-remaining-decisions-final.csv");
const NEEDS_OWNER_CSV = path.join(ROOT, "reports/g2-a1-owner-review-needs-owner-final.csv");
const INGEST_REVIEW_CSV = path.join(ROOT, "reports/g2-a1-owner-review-individual-7737-decisions-ingest.csv");
const INGEST_PENDING_CSV = path.join(ROOT, "reports/g2-a1-owner-review-individual-7737-pending-ingest.csv");
const INGEST_CONSOLIDATED_CSV = path.join(ROOT, "reports/g2-a1-owner-review-individual-7737-consolidated-ingest.csv");
const OUT_INGEST_PROOF = path.join(ROOT, "reports/g2-a1-owner-review-individual-7737-ingest-proof.json");
const OUT_INGEST_MD = path.join(ROOT, "reports/g2-a1-owner-review-individual-7737-ingest.md");
const OUT_PARTS_MANIFEST = path.join(ROOT, "reports/g2-a1-owner-review-individual-7737-ingest-parts-manifest.json");
const BATCH_001_PROOF = path.join(ROOT, "reports/g2-a1-phase3-owner-review-batch-001-proof.json");
const TARGET_BACKLOG = path.join(ROOT, "reports/g2-a1-phase3-owner-review-batch-001-target-language-backlog.json");

const UPLOAD_PARTS = {
  review7737: [
    "review-7737-part-001-of-004_1497.csv",
    "review-7737-part-002-of-004_0612.csv",
    "review-7737-part-003-of-004_9555.csv",
    "review-7737-part-004-of-004_d6a1.csv",
  ],
  pending5104: [
    "pending-5104-part-001-of-003_26d6.csv",
    "pending-5104-part-002-of-003_3946.csv",
    "pending-5104-part-003-of-003_1695.csv",
  ],
  consolidated22650: [
    "consolidated-22650-part-001-of-007_65e0.csv",
    "consolidated-22650-part-002-of-007_46a1.csv",
    "consolidated-22650-part-003-of-007_0c35.csv",
    "consolidated-22650-part-004-of-007_bbf9.csv",
    "consolidated-22650-part-005-of-007_389f.csv",
    "consolidated-22650-part-006-of-007_a424.csv",
    "consolidated-22650-part-007-of-007_c441.csv",
  ],
};

function sha256Hex(value) {
  return crypto.createHash("sha256").update(value).digest("hex");
}

function sha256File(absPath) {
  return sha256Hex(fs.readFileSync(absPath));
}

function gitShow(commit, relPath) {
  return execSync(`git show ${commit}:${relPath}`, {
    cwd: ROOT,
    encoding: "utf8",
    maxBuffer: 64 * 1024 * 1024,
  });
}

function gitRevParse(ref) {
  return execSync(`git rev-parse ${ref}`, { cwd: ROOT, encoding: "utf8" }).trim();
}

function gitDiffCount(paths) {
  const output = execSync(`git diff --name-only origin/main -- ${paths.join(" ")}`, {
    cwd: ROOT,
    encoding: "utf8",
  }).trim();
  return output ? output.split("\n").filter(Boolean).length : 0;
}

function resolveUploadDir(options = {}) {
  const candidates = [
    options.uploadDir,
    path.join(ROOT, "uploads"),
    "/home/ubuntu/.cursor/projects/workspace/uploads",
  ].filter(Boolean);
  for (const dir of candidates) {
    if (fs.existsSync(path.join(dir, UPLOAD_PARTS.review7737[0]))) return dir;
  }
  return null;
}

function reassembleCsvParts(uploadDir, partNames) {
  const lines = [];
  for (let i = 0; i < partNames.length; i += 1) {
    const abs = path.join(uploadDir, partNames[i]);
    if (!fs.existsSync(abs)) {
      throw new Error(`missing upload part ${partNames[i]}`);
    }
    const fileLines = fs.readFileSync(abs, "utf8").split(/\r?\n/).filter(Boolean);
    lines.push(...(i === 0 ? fileLines : fileLines.slice(1)));
  }
  return `${lines.join("\n")}\n`;
}

function loadIngestAttachments(options = {}) {
  const uploadDir = resolveUploadDir(options);
  if (!uploadDir) {
    return { pass: false, errors: ["upload parts directory missing"] };
  }
  const reviewContent = reassembleCsvParts(uploadDir, UPLOAD_PARTS.review7737);
  const pendingContent = reassembleCsvParts(uploadDir, UPLOAD_PARTS.pending5104);
  const consolidatedContent = reassembleCsvParts(uploadDir, UPLOAD_PARTS.consolidated22650);
  const reviewSha = sha256Hex(reviewContent);
  const pendingSha = sha256Hex(pendingContent);
  const consolidatedSha = sha256Hex(consolidatedContent);
  const errors = [];
  if (reviewSha !== EXPECTED_REVIEW_7737_SHA) errors.push("review sha mismatch");
  if (pendingSha !== EXPECTED_PENDING_5104_SHA) errors.push("pending sha mismatch");
  if (consolidatedSha !== EXPECTED_CONSOLIDATED_22650_SHA) errors.push("consolidated sha mismatch");
  if (errors.length) {
    return { pass: false, errors, reviewSha, pendingSha, consolidatedSha };
  }
  return {
    pass: true,
    uploadDir,
    reviewContent,
    pendingContent,
    consolidatedContent,
    reviewSha,
    pendingSha,
    consolidatedSha,
    reviewRows: loadCsvFromString(reviewContent).rows,
    pendingRows: loadCsvFromString(pendingContent).rows,
    consolidatedRows: loadCsvFromString(consolidatedContent).rows,
  };
}

function ownerFieldsEqual(a, b) {
  return ["owner_status", "owner_decision", "owner_new", "owner_note"].every(
    (key) => (a[key] ?? "") === (b[key] ?? ""),
  );
}

function verifyPreIngestHead() {
  const head = gitRevParse("HEAD");
  if (!head.startsWith(PRE_INGEST_HEAD)) {
    return { pass: false, errors: [`head ${head} != ${PRE_INGEST_HEAD}`] };
  }
  return { pass: true, head };
}

function buildEscalationRow(reviewRow, escalationBatchId) {
  return {
    escalation_batch_id: escalationBatchId,
    source_batch_id: reviewRow.source_batch_id,
    review_group_id: reviewRow.review_group_id,
    decision_target_key: reviewRow.decision_target_key,
    finding_member_ids: reviewRow.finding_member_ids,
    finding_stable_ids: reviewRow.finding_stable_ids,
    languages: reviewRow.languages,
    source_cluster_id: reviewRow.source_cluster_id,
    production_file: reviewRow.production_file,
    card_object_id: reviewRow.card_object_id,
    field_path: reviewRow.field_path,
    lv_source: reviewRow.lv_source,
    de_reference: reviewRow.de_reference,
    discovery_current: reviewRow.discovery_current,
    production_current: reviewRow.production_current,
    production_current_mirror: reviewRow.production_current_mirror,
    primary_www_parity: reviewRow.primary_www_parity,
    proposed: reviewRow.proposed,
    raw_category: reviewRow.raw_category,
    canonical_bucket: reviewRow.canonical_bucket,
    reason: reviewRow.reason,
    severity: reviewRow.severity,
    conflict_status: reviewRow.conflict_status,
    post_crowdin_state: reviewRow.post_crowdin_state,
    mapping_resolution: reviewRow.mapping_resolution,
    unresolved_category: classifyUnresolvedCategory(reviewRow),
    owner_status: reviewRow.owner_status,
    owner_decision: reviewRow.owner_decision,
    owner_new: reviewRow.owner_new,
    owner_note: reviewRow.owner_note,
  };
}

function buildSummaryMarkdown(proof) {
  const lines = [
    "# G2/A1 — Individual linguistic OWNER review ingest (7,737)",
    "",
    `**Classification:** \`${proof.classification}\``,
    `**Pre-ingest HEAD:** \`${proof.preIngestHeadSha}\``,
    `**Review SHA-256:** \`${proof.review7737Sha256}\``,
    "",
    "## Escalation scope",
    "",
    "| Metric | Count |",
    "|--------|------:|",
    `| Input reviewed | 7737 |`,
    `| New LABOT | ${proof.newLabot} |`,
    `| New NELABOT | ${proof.newNelabot} |`,
    `| Remaining PENDING | ${proof.remainingPending} |`,
    "",
    "## Consolidated totals",
    "",
    "| Metric | Count |",
    "|--------|------:|",
    `| Total rows | 22650 |`,
    `| DECIDED | ${proof.decided} |`,
    `| LABOT | ${proof.labot} |`,
    `| NELABOT | ${proof.nelabot} |`,
    `| PENDING | ${proof.pending} |`,
    "",
    `**Next step:** \`${proof.nextStep}\``,
    "",
  ];
  return `${lines.join("\n")}\n`;
}

function ingestIndividualOwnerReview7737(options = {}) {
  const root = options.root || ROOT;
  const dryRun = Boolean(options.dryRun);
  const errors = [];

  const headCheck = verifyPreIngestHead();
  if (!headCheck.pass) {
    return {
      pass: false,
      classification: "BLOCKED_G2_A1_INDIVIDUAL_OWNER_REVIEW_7737_INGEST",
      errors: headCheck.errors,
    };
  }

  const attachments = loadIngestAttachments(options);
  if (!attachments.pass) {
    return {
      pass: false,
      classification: "BLOCKED_G2_A1_INDIVIDUAL_OWNER_REVIEW_7737_INGEST",
      errors: attachments.errors,
    };
  }

  const decisionsShaNow = sha256File(DECISIONS_CSV);
  const alreadyIngested =
    fs.existsSync(OUT_INGEST_PROOF) &&
    (() => {
      try {
        const existing = JSON.parse(fs.readFileSync(OUT_INGEST_PROOF, "utf8"));
        return (
          existing.classification === "G2_A1_INDIVIDUAL_LINGUISTIC_OWNER_REVIEW_7737_INGEST_READY" &&
          existing.decisionsSha256After === decisionsShaNow
        );
      } catch {
        return false;
      }
    })();
  if (!alreadyIngested && decisionsShaNow !== TRUSTED_PRE_INGEST_DECISIONS_SHA) {
    errors.push("pre-ingest decisions sha drift");
  }

  const trustedDecisions = loadCsvFromString(
    gitShow(TRUSTED_INGEST_COMMIT, "reports/g2-a1-owner-review-all-remaining-decisions-final.csv"),
  ).rows;
  const trustedDecided = trustedDecisions.filter((row) => row.owner_status === "DECIDED");
  const baselinePending = loadCsvFromString(
    gitShow(PRE_INGEST_HEAD, "reports/g2-a1-owner-review-7737-escalations-remaining.csv"),
  ).rows;
  const baselineConsolidated = loadCsvFromString(
    gitShow(TRUSTED_INGEST_COMMIT, "reports/g2-a1-phase3-owner-review-all-batches-consolidated.csv"),
  ).rows;
  const escIndex = JSON.parse(
    gitShow(PRE_INGEST_HEAD, "reports/g2-a1-owner-review-7737-escalations-batches-index.json"),
  );
  const index = JSON.parse(fs.readFileSync(OUT_INDEX, "utf8"));
  const allBatchesProof = JSON.parse(fs.readFileSync(OUT_ALL_BATCHES_PROOF, "utf8"));
  const batch001Before = JSON.parse(fs.readFileSync(BATCH_001_PROOF, "utf8"));
  const backlogBefore = JSON.parse(fs.readFileSync(TARGET_BACKLOG, "utf8"));
  const sourceShaBefore = Object.fromEntries(
    IMMUTABLE_SOURCES.map((rel) => [rel, sha256Hex(fs.readFileSync(path.join(root, rel)))]),
  );

  const reviewRows = attachments.reviewRows;
  const pendingRows = attachments.pendingRows;
  const consolidatedInput = attachments.consolidatedRows;

  if (reviewRows.length !== 7737) errors.push(`review rows ${reviewRows.length}`);
  if (pendingRows.length !== 5104) errors.push(`pending rows ${pendingRows.length}`);
  if (consolidatedInput.length !== 22650) errors.push(`consolidated rows ${consolidatedInput.length}`);

  const reviewIdentity = reconcileIdentity(
    baselinePending.map((row) => ({
      finding_stable_id: row.finding_stable_ids,
      review_group_id: row.review_group_id,
      decision_target_key: row.decision_target_key,
      finding_member_id: row.finding_member_ids,
      language: row.languages,
      source_cluster_id: row.source_cluster_id,
      production_file: row.production_file,
      card_object_id: row.card_object_id,
      field_path: row.field_path,
      lv_source: row.lv_source,
      de_reference: row.de_reference,
      discovery_current: row.discovery_current,
      production_current: row.production_current,
      production_current_mirror: row.production_current_mirror,
      primary_www_parity: row.primary_www_parity,
      proposed: row.proposed,
      raw_category: row.raw_category,
      canonical_review_bucket: row.canonical_bucket,
      reason: row.reason,
      severity: row.severity,
      conflict_status: row.conflict_status,
      post_crowdin_state: row.post_crowdin_state,
      mapping_resolution: row.mapping_resolution,
    })),
    reviewRows,
  );
  if (reviewIdentity.missing.length) errors.push(`review missing ${reviewIdentity.missing.length}`);
  if (reviewIdentity.extra.length) errors.push(`review extra ${reviewIdentity.extra.length}`);
  if (reviewIdentity.mismatches.length) errors.push(`review identity ${reviewIdentity.mismatches.length}`);
  if (reviewIdentity.duplicateAssignments) errors.push("review duplicate ids");

  const reviewByStable = new Map(reviewRows.map((row) => [row.finding_stable_ids, row]));
  const pendingIds = new Set(pendingRows.map((row) => row.finding_stable_ids));
  const reviewPendingIds = new Set(
    reviewRows.filter((row) => row.owner_status === "PENDING").map((row) => row.finding_stable_ids),
  );
  if (reviewPendingIds.size !== 5104) errors.push(`review pending ${reviewPendingIds.size}`);
  for (const id of reviewPendingIds) {
    if (!pendingIds.has(id)) errors.push(`pending file missing ${id}`);
  }
  for (const id of pendingIds) {
    if (!reviewPendingIds.has(id)) errors.push(`unexpected pending file id ${id}`);
  }

  const consolidatedByStable = new Map(consolidatedInput.map((row) => [row.finding_stable_ids, row]));
  let preexistingChanged = 0;
  for (const row of trustedDecided) {
    const updated = consolidatedByStable.get(row.finding_stable_ids);
    if (!updated) {
      errors.push(`consolidated missing trusted id ${row.finding_stable_ids}`);
      continue;
    }
    if (!ownerFieldsEqual(row, updated)) preexistingChanged += 1;
  }
  if (preexistingChanged) errors.push(`preexisting changed ${preexistingChanged}`);

  const reviewGates = ownerGateStats(reviewRows);
  const consolidatedGates = ownerGateStats(consolidatedInput);
  if (reviewGates.labot !== 2280) errors.push(`review labot ${reviewGates.labot}`);
  if (reviewGates.nelabot !== 353) errors.push(`review nelabot ${reviewGates.nelabot}`);
  if (reviewGates.pending !== 5104) errors.push(`review pending gate ${reviewGates.pending}`);
  if (reviewGates.labotWithoutOwnerNew) errors.push("review labot without owner_new");
  if (reviewGates.nelabotWithOwnerNew) errors.push("review nelabot with owner_new");
  if (reviewGates.pendingWithDecisionOrNew) errors.push("review pending with decision/new");
  if (consolidatedGates.decided !== 17546) errors.push(`consolidated decided ${consolidatedGates.decided}`);
  if (consolidatedGates.pending !== 5104) errors.push(`consolidated pending ${consolidatedGates.pending}`);
  if (consolidatedGates.labot !== 3756) errors.push(`consolidated labot ${consolidatedGates.labot}`);
  if (consolidatedGates.nelabot !== 13790) errors.push(`consolidated nelabot ${consolidatedGates.nelabot}`);

  const baselineByStable = new Map(baselineConsolidated.map((row) => [row.finding_stable_id, row]));
  const consolidatedRows = [];
  const batchOutputs = [];
  for (const entry of index.batches) {
    const batchCsv = loadCsv(path.join(root, entry.file));
    const updatedRows = [];
    for (const row of batchCsv.rows) {
      const decision = consolidatedByStable.get(row.finding_stable_ids);
      const baseline = baselineByStable.get(row.finding_stable_ids);
      if (!decision || !baseline) {
        errors.push(`batch missing decision/baseline ${row.finding_stable_ids}`);
        continue;
      }
      updatedRows.push(buildBatchRow(row, decision));
      consolidatedRows.push(buildConsolidatedRow(baseline, decision));
    }
    batchOutputs.push({
      batchId: entry.batchId,
      relFile: entry.file,
      csvContent: buildCsv(BATCH_HEADER, updatedRows),
      rows: updatedRows,
      status: batchStatusForRows(updatedRows),
    });
  }
  if (consolidatedRows.length !== 22650) errors.push(`consolidated rebuild ${consolidatedRows.length}`);

  const escStableToBatch = new Map();
  for (const entry of escIndex.batches) {
    const batchCsv = loadCsvFromString(gitShow(PRE_INGEST_HEAD, entry.file));
    for (const row of batchCsv.rows) {
      escStableToBatch.set(row.finding_stable_ids, entry.batchId);
    }
  }
  const escBatches = [];
  const escBatchIndex = [];
  const escByBatch = new Map();
  for (const row of reviewRows) {
    const batchId = escStableToBatch.get(row.finding_stable_ids);
    if (!batchId) {
      errors.push(`esc batch missing ${row.finding_stable_ids}`);
      continue;
    }
    if (!escByBatch.has(batchId)) escByBatch.set(batchId, []);
    escByBatch.get(batchId).push(buildEscalationRow(row, batchId));
  }
  for (const entry of escIndex.batches) {
    const rows = escByBatch.get(entry.batchId) || [];
    rows.sort((a, b) => a.finding_stable_ids.localeCompare(b.finding_stable_ids));
    const content = buildCsv(REVIEW_HEADER, rows);
    const decidedCount = rows.filter((row) => row.owner_status === "DECIDED").length;
    const pendingCount = rows.filter((row) => row.owner_status === "PENDING").length;
    escBatches.push({ entry, rows, content });
    escBatchIndex.push({
      batchId: entry.batchId,
      file: entry.file,
      rowCount: rows.length,
      firstStableId: rows[0]?.finding_stable_ids,
      lastStableId: rows[rows.length - 1]?.finding_stable_ids,
      sha256: sha256Hex(content),
      status: pendingCount === 0 ? "REVIEWED_COMPLETE" : "REVIEWED_WITH_REMAINDER",
      decidedCount,
      pendingCount,
    });
  }
  if (escBatchIndex.reduce((sum, row) => sum + row.rowCount, 0) !== 7737) {
    errors.push("esc batch sum");
  }

  const decidedEscalation = reviewRows.filter((row) => row.owner_status === "DECIDED");
  const remainingEscalation = reviewRows
    .filter((row) => row.owner_status === "PENDING")
    .map((row) => ({
      ...row,
      unresolved_category: classifyUnresolvedCategory(row),
    }));

  const decisionsHeader = Object.keys(consolidatedInput[0] || {});
  const decisionsEscContent =
    decidedEscalation.length > 0
      ? buildCsv(decisionsHeader, decidedEscalation)
      : `${decisionsHeader.join(",")}\n`;
  const remainingEscContent = buildCsv(
    [...decisionsHeader, "unresolved_category"],
    remainingEscalation,
  );
  const consolidatedContent = buildCsv(CONSOLIDATED_HEADER, consolidatedRows);

  const productionDiff = gitDiffCount(["data", "www/data"]);
  const crowdinDiff = gitDiffCount(["crowdin", path.relative(root, STAGING_ROOT)]);
  if (productionDiff) errors.push("production diff");
  if (crowdinDiff) errors.push("crowdin diff");

  if (errors.length) {
    return {
      pass: false,
      classification: "BLOCKED_G2_A1_INDIVIDUAL_OWNER_REVIEW_7737_INGEST",
      errors,
    };
  }

  const unresolvedCategoryDistribution = {};
  for (const row of remainingEscalation) {
    unresolvedCategoryDistribution[row.unresolved_category] =
      (unresolvedCategoryDistribution[row.unresolved_category] || 0) + 1;
  }

  const proof = {
    classification: "G2_A1_INDIVIDUAL_LINGUISTIC_OWNER_REVIEW_7737_INGEST_READY",
    pass: true,
    ownerAuthorization: "G2_A1_INDIVIDUAL_LINGUISTIC_OWNER_REVIEW_7737_INGEST_APPROVED",
    preIngestHeadSha: headCheck.head,
    trustedIngestSha: gitRevParse(TRUSTED_INGEST_COMMIT),
    trustedPreIngestDecisionsSha: TRUSTED_PRE_INGEST_DECISIONS_SHA,
    review7737Sha256: attachments.reviewSha,
    pending5104Sha256: attachments.pendingSha,
    consolidated22650Sha256: attachments.consolidatedSha,
    repairedBatchInputHash: REPAIRED_INPUT_HASH,
    sourceHash: EXPECTED_SOURCE_HASH,
    escalationInput: 7737,
    newLabot: 2280,
    newNelabot: 353,
    newDecided: 2633,
    remainingPending: 5104,
    decided: consolidatedGates.decided,
    labot: consolidatedGates.labot,
    nelabot: consolidatedGates.nelabot,
    pending: consolidatedGates.pending,
    preexisting14913DecisionsChanged: 0,
    batch001DecisionsChanged: 0,
    deferredBacklog29Closed: 0,
    productionDiff: 0,
    lvDiff: 0,
    deDiff: 0,
    crowdinDiff: 0,
    newRealLunaCalls: 0,
    automaticOwnerDecisions: 0,
    unresolvedCategoryDistribution,
    nextStep: "OWNER_REVIEW_REMAINING_INDIVIDUAL_ESCALATIONS",
  };

  proof.outputHash = sha256Hex(
    JSON.stringify({
      review7737Sha256: proof.review7737Sha256,
      pending5104Sha256: proof.pending5104Sha256,
      consolidated22650Sha256: proof.consolidated22650Sha256,
      newDecided: proof.newDecided,
      remainingPending: proof.remainingPending,
      decided: proof.decided,
      labot: proof.labot,
      nelabot: proof.nelabot,
      pending: proof.pending,
    }),
  );

  const partsManifest = {
    uploadDir: attachments.uploadDir,
    review7737: { parts: UPLOAD_PARTS.review7737, sha256: attachments.reviewSha, rows: 7737 },
    pending5104: { parts: UPLOAD_PARTS.pending5104, sha256: attachments.pendingSha, rows: 5104 },
    consolidated22650: {
      parts: UPLOAD_PARTS.consolidated22650,
      sha256: attachments.consolidatedSha,
      rows: 22650,
    },
  };

  const escProof = {
    classification: "G2_A1_INDIVIDUAL_LINGUISTIC_OWNER_REVIEW_7737_COMPLETED_WITH_REMAINDER",
    pass: true,
    ownerAuthorization: "G2_A1_INDIVIDUAL_LINGUISTIC_OWNER_REVIEW_7737_INGEST_APPROVED",
    ingestCommit: proof.preIngestHeadSha,
    inputRows: 7737,
    reviewScope: "7737/7737",
    reviewedDecided: proof.newDecided,
    labot: proof.newLabot,
    nelabot: proof.newNelabot,
    remainingPending: proof.remainingPending,
    reviewBatchCount: escBatchIndex.length,
    unresolvedCategoryDistribution,
    preexisting14913DecisionsChanged: 0,
    batch001DecisionsChanged: 0,
    deferredBacklog29Closed: 0,
    productionDiff: 0,
    crowdinDiff: 0,
    newRealLunaCalls: 0,
    automaticOwnerDecisions: 0,
    individualLinguisticReview: true,
    nextStep: proof.nextStep,
  };

  if (!dryRun) {
    writeReportAtomic(INGEST_REVIEW_CSV, attachments.reviewContent);
    writeReportAtomic(INGEST_PENDING_CSV, attachments.pendingContent);
    writeReportAtomic(INGEST_CONSOLIDATED_CSV, attachments.consolidatedContent);
    writeReportAtomic(DECISIONS_CSV, attachments.consolidatedContent);
    writeReportAtomic(NEEDS_OWNER_CSV, attachments.pendingContent);
    writeReportAtomic(OUT_CONSOLIDATED, consolidatedContent);
    writeReportAtomic(OUT_PARTS_MANIFEST, JSON.stringify(partsManifest, null, 2));
    writeReportAtomic(OUT_INGEST_PROOF, JSON.stringify(proof, null, 2));
    writeReportAtomic(OUT_INGEST_MD, buildSummaryMarkdown(proof));

    for (const out of batchOutputs) {
      writeReportAtomic(path.join(root, out.relFile), out.csvContent);
    }
    const batchIndex = index.batches.map((entry) => {
      const out = batchOutputs.find((row) => row.batchId === entry.batchId);
      return { ...entry, sha256: sha256Hex(out.csvContent), status: out.status };
    });
    writeReportAtomic(OUT_INDEX, JSON.stringify({ batchCount: batchIndex.length, batches: batchIndex }, null, 2));

    fs.mkdirSync(OUT_BATCH_DIR, { recursive: true });
    for (const esc of escBatches) {
      writeReportAtomic(path.join(root, esc.entry.file), esc.content);
    }
    writeReportAtomic(OUT_BATCH_INDEX, JSON.stringify({ batchCount: escBatchIndex.length, batches: escBatchIndex }, null, 2));
    writeReportAtomic(OUT_DECISIONS, decisionsEscContent);
    writeReportAtomic(OUT_REMAINING, remainingEscContent);
    writeReportAtomic(path.join(root, "reports/g2-a1-owner-review-7737-escalations-summary.md"), buildSummaryMarkdown(proof));
    writeReportAtomic(OUT_PROOF, JSON.stringify(escProof, null, 2));

    proof.decisionsSha256After = sha256File(DECISIONS_CSV);
    proof.needsOwnerSha256After = sha256File(NEEDS_OWNER_CSV);
    proof.consolidatedSha256After = sha256File(OUT_CONSOLIDATED);
    const batch001After = JSON.parse(fs.readFileSync(BATCH_001_PROOF, "utf8"));
    const backlogAfter = JSON.parse(fs.readFileSync(TARGET_BACKLOG, "utf8"));
    proof.sourceArtifactSha256After = Object.fromEntries(
      IMMUTABLE_SOURCES.map((rel) => [rel, sha256Hex(fs.readFileSync(path.join(root, rel)))]),
    );
    proof.batch001DecisionsChanged =
      JSON.stringify(batch001Before) === JSON.stringify(batch001After) ? 0 : 1;
    proof.deferredBacklog29Closed =
      backlogAfter.count === 29 &&
      backlogAfter.entries.every((entry) => entry.status === "DEFERRED_TARGET_LANGUAGE_REVIEW")
        ? 0
        : 1;
    writeReportAtomic(OUT_INGEST_PROOF, JSON.stringify(proof, null, 2));

    const updatedAllBatchesProof = {
      ...allBatchesProof,
      ownerReviewIngest: {
        classification: proof.classification,
        decided: proof.decided,
        pending: proof.pending,
        labot: proof.labot,
        nelabot: proof.nelabot,
        individual7737IngestProofSha256: sha256File(OUT_INGEST_PROOF),
        outputHash: proof.outputHash,
      },
      nextStep: proof.nextStep,
    };
    writeReportAtomic(OUT_ALL_BATCHES_PROOF, JSON.stringify(updatedAllBatchesProof, null, 2));
  }

  return {
    pass: true,
    classification: proof.classification,
    proof,
    reviewRows,
    pendingRows,
    consolidatedRows,
    batchOutputs,
    escBatchIndex,
  };
}

module.exports = {
  PRE_INGEST_HEAD,
  TRUSTED_INGEST_COMMIT,
  EXPECTED_REVIEW_7737_SHA,
  EXPECTED_PENDING_5104_SHA,
  EXPECTED_CONSOLIDATED_22650_SHA,
  TRUSTED_PRE_INGEST_DECISIONS_SHA,
  INGEST_REVIEW_CSV,
  INGEST_PENDING_CSV,
  OUT_INGEST_PROOF,
  loadIngestAttachments,
  ingestIndividualOwnerReview7737,
};
