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
const { IDENTITY_PAIRS, reconcileIdentity, EXPECTED_DECISIONS_SHA, EXPECTED_NEEDS_OWNER_SHA } = require("./all-remaining-ingest");

const INGEST_COMMIT = "1b2212f2";
const REPAIRED_INPUT_HASH = "0d3b8fbb1aeed3a694c2301194d950a1034b91f2f376aca7a6a9b6f46588c1bb";
const OWNER_FIELDS = ["owner_status", "owner_decision", "owner_new", "owner_note"];

const DECISIONS_CSV = path.join(ROOT, "reports/g2-a1-owner-review-all-remaining-decisions-final.csv");
const NEEDS_OWNER_CSV = path.join(ROOT, "reports/g2-a1-owner-review-needs-owner-final.csv");
const OUT_DECISIONS = path.join(ROOT, "reports/g2-a1-owner-review-7737-escalations-decisions.csv");
const OUT_REMAINING = path.join(ROOT, "reports/g2-a1-owner-review-7737-escalations-remaining.csv");
const OUT_PROOF = path.join(ROOT, "reports/g2-a1-owner-review-7737-escalations-proof.json");
const OUT_SUMMARY = path.join(ROOT, "reports/g2-a1-owner-review-7737-escalations-summary.md");
const OUT_BATCH_DIR = path.join(ROOT, "reports/g2-a1-owner-review-7737-escalations-batches");
const OUT_BATCH_INDEX = path.join(ROOT, "reports/g2-a1-owner-review-7737-escalations-batches-index.json");
const BATCH_001_PROOF = path.join(ROOT, "reports/g2-a1-phase3-owner-review-batch-001-proof.json");
const TARGET_BACKLOG = path.join(ROOT, "reports/g2-a1-phase3-owner-review-batch-001-target-language-backlog.json");
const INGEST_PROOF = path.join(ROOT, "reports/g2-a1-phase3-owner-review-all-remaining-ingest-proof.json");

const REVIEW_HEADER = [
  "escalation_batch_id",
  "source_batch_id",
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
  "mapping_resolution",
  "unresolved_category",
  "owner_status",
  "owner_decision",
  "owner_new",
  "owner_note",
];

function sha256Hex(value) {
  return crypto.createHash("sha256").update(value).digest("hex");
}

function sha256File(absPath) {
  return sha256Hex(fs.readFileSync(absPath));
}

function gitShow(relPath) {
  return execSync(`git show ${INGEST_COMMIT}:${relPath}`, {
    cwd: ROOT,
    encoding: "utf8",
    maxBuffer: 64 * 1024 * 1024,
  });
}

function gitDiffCount(paths) {
  const output = execSync(`git diff --name-only origin/main -- ${paths.join(" ")}`, {
    cwd: ROOT,
    encoding: "utf8",
  }).trim();
  return output ? output.split("\n").filter(Boolean).length : 0;
}

function ownerFieldsEqual(a, b) {
  return OWNER_FIELDS.every((key) => (a[key] ?? "") === (b[key] ?? ""));
}

function classifyUnresolvedCategory(row) {
  if (row.mapping_resolution === "COMPOSITE_SCOPE_CAPTURED") {
    return "COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER";
  }
  if (row.mapping_resolution === "CONFIRMED_FIELD_ABSENT") {
    return "CONFIRMED_FIELD_ABSENT_NO_PRODUCTION_TARGET";
  }
  if (row.canonical_bucket === "WRONG_OR_MIXED_TARGET_LANGUAGE") {
    return "TARGET_LANGUAGE_REWRITE_REQUIRED";
  }
  if (row.canonical_bucket === "MULTI_TRANSLATION_REVIEW_REQUIRED") {
    return "MULTI_TRANSLATION_SCALAR_DECISION_REQUIRED";
  }
  if (row.canonical_bucket === "SEMANTIC_OR_MEANING_ERROR") {
    return "SEMANTIC_MEANING_REVIEW_REQUIRED";
  }
  if (row.canonical_bucket === "MISSING_OR_UNTRANSLATED") {
    return "MISSING_TRANSLATION_REVIEW_REQUIRED";
  }
  if (row.canonical_bucket === "ORTHOGRAPHY_SPELLING_OR_DIACRITICS") {
    return "ORTHOGRAPHY_REVIEW_REQUIRED";
  }
  return "OTHER_OWNER_REVIEW_REQUIRED";
}

function buildPrecisePendingNote(row) {
  const category = classifyUnresolvedCategory(row);
  const parts = [
    `OWNER_REVIEW_REQUIRED: ${category}.`,
    `mapping=${row.mapping_resolution}`,
    `bucket=${row.canonical_bucket}`,
    `lang=${row.languages}`,
    `field=${row.field_path}`,
  ];
  if (row.mapping_resolution === "COMPOSITE_SCOPE_CAPTURED") {
    parts.push("composite scope does not isolate the reported field; an exact field-level decision is unsafe.");
  }
  if (row.mapping_resolution === "CONFIRMED_FIELD_ABSENT") {
    parts.push("confirmed field absent in current production schema; LABOT apply target does not exist.");
  }
  if (!row.production_current?.trim()) {
    parts.push("production_current is empty; exact COPY-ONLY correction cannot be authorized without a resolved scalar target.");
  }
  return parts.join(" ");
}

function triageEscalationRow(row) {
  const unresolvedCategory = classifyUnresolvedCategory(row);
  const ownerNote = buildPrecisePendingNote(row);
  return {
    ...row,
    unresolved_category: unresolvedCategory,
    owner_status: "PENDING",
    owner_decision: "",
    owner_new: "",
    owner_note: ownerNote,
    reviewOutcome: "PENDING",
  };
}

function verifySourceIntegrity(root) {
  const errors = [];
  const committedDecisions = loadCsvFromString(
    gitShow("reports/g2-a1-owner-review-all-remaining-decisions-final.csv"),
  ).rows;
  const committedNeeds = loadCsvFromString(
    gitShow("reports/g2-a1-owner-review-needs-owner-final.csv"),
  ).rows;
  const workingDecisions = loadCsv(DECISIONS_CSV).rows;
  const workingNeeds = loadCsv(NEEDS_OWNER_CSV).rows;

  if (sha256File(DECISIONS_CSV) !== EXPECTED_DECISIONS_SHA) errors.push("decisions sha drift");
  if (sha256File(NEEDS_OWNER_CSV) !== EXPECTED_NEEDS_OWNER_SHA) errors.push("needs-owner sha drift");

  const committedPending = committedDecisions.filter((row) => row.owner_status === "PENDING");
  const workingPending = workingDecisions.filter((row) => row.owner_status === "PENDING");
  const committedDecided = committedDecisions.filter((row) => row.owner_status === "DECIDED");

  if (committedPending.length !== 7737) errors.push(`committed pending ${committedPending.length}`);
  if (workingPending.length !== 7737) errors.push(`working pending ${workingPending.length}`);
  if (committedDecided.length !== 14913) errors.push(`committed decided ${committedDecided.length}`);

  const identity = reconcileIdentity(
    committedPending.map((row) => ({
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
    workingPending,
  );
  if (identity.missing.length || identity.extra.length || identity.mismatches.length || identity.duplicateAssignments) {
    errors.push("pending identity mismatch");
  }

  const pendingIds = new Set(committedPending.map((row) => row.finding_stable_ids));
  const needsIds = new Set(committedNeeds.map((row) => row.finding_stable_ids));
  for (const id of pendingIds) {
    if (!needsIds.has(id)) errors.push(`needs-owner missing ${id}`);
  }

  for (const row of committedDecided) {
    const working = workingDecisions.find((item) => item.finding_stable_ids === row.finding_stable_ids);
    if (!working || !ownerFieldsEqual(row, working)) {
      errors.push(`preexisting decision changed ${row.finding_stable_ids}`);
    }
  }

  const ingestProof = JSON.parse(fs.readFileSync(INGEST_PROOF, "utf8"));
  if (ingestProof.classification !== "G2_A1_OWNER_REVIEW_ALL_REMAINING_INGEST_READY") {
    errors.push("ingest proof not ready");
  }
  if (ingestProof.decided !== 14913 || ingestProof.pending !== 7737) {
    errors.push("ingest proof counts drift");
  }

  return {
    pass: errors.length === 0,
    errors,
    committedPending,
    committedDecided,
    committedNeeds,
    workingPending,
    workingNeeds,
    identity,
    ingestProof,
  };
}

function packageReviewBatches(rows, maxPerBatch = 100) {
  const sorted = [...rows].sort((a, b) => a.finding_stable_ids.localeCompare(b.finding_stable_ids));
  const batches = [];
  for (let i = 0; i < sorted.length; i += maxPerBatch) {
    const chunk = sorted.slice(i, i + maxPerBatch);
    const batchId = `ESC-${String(batches.length + 1).padStart(3, "0")}`;
    batches.push({
      batchId,
      rows: chunk.map((row) => ({
        escalation_batch_id: batchId,
        source_batch_id: row.source_batch_id,
        review_group_id: row.review_group_id,
        decision_target_key: row.decision_target_key,
        finding_member_ids: row.finding_member_ids,
        finding_stable_ids: row.finding_stable_ids,
        languages: row.languages,
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
        canonical_bucket: row.canonical_bucket,
        reason: row.reason,
        severity: row.severity,
        conflict_status: row.conflict_status,
        post_crowdin_state: row.post_crowdin_state,
        mapping_resolution: row.mapping_resolution,
        unresolved_category: row.unresolved_category,
        owner_status: "PENDING",
        owner_decision: "",
        owner_new: "",
        owner_note: row.owner_note,
      })),
    });
  }
  return batches;
}

function buildSummaryMarkdown(proof) {
  const lines = [
    "# G2/A1 — OWNER review of 7,737 escalations",
    "",
    `**Classification:** \`${proof.classification}\``,
    `**Ingest commit:** \`${proof.ingestCommit}\``,
    `**Review scope:** ${proof.reviewScope}`,
    "",
    "## Results",
    "",
    "| Metric | Count |",
    "|--------|------:|",
    `| Input rows | ${proof.inputRows} |`,
    `| Reviewed to DECIDED | ${proof.reviewedDecided} |`,
    `| LABOT | ${proof.labot} |`,
    `| NELABOT | ${proof.nelabot} |`,
    `| Remaining PENDING | ${proof.remainingPending} |`,
    `| Review batches packaged | ${proof.reviewBatchCount} |`,
    "",
    "## Unresolved categories",
    "",
    "| Category | Count |",
    "|----------|------:|",
    ...Object.entries(proof.unresolvedCategoryDistribution)
      .sort((a, b) => a[0].localeCompare(b[0]))
      .map(([key, value]) => `| ${key} | ${value} |`),
    "",
    `**Next step:** \`${proof.nextStep}\``,
    "",
  ];
  return `${lines.join("\n")}\n`;
}

function runOwnerReview7737Escalations(options = {}) {
  const root = options.root || ROOT;
  const dryRun = Boolean(options.dryRun);
  const errors = [];

  const source = verifySourceIntegrity(root);
  if (!source.pass) {
    return {
      pass: false,
      classification: "BLOCKED_G2_A1_OWNER_REVIEW_7737_SOURCE_INTEGRITY",
      errors: source.errors,
    };
  }

  const triaged = source.committedPending.map((row) => triageEscalationRow(row));
  const decidedRows = triaged.filter((row) => row.reviewOutcome === "DECIDED");
  const remainingRows = triaged.filter((row) => row.reviewOutcome === "PENDING");
  const reviewBatches = packageReviewBatches(triaged);

  if (triaged.length !== 7737) errors.push("triage count");
  if (remainingRows.length + decidedRows.length !== 7737) errors.push("output partition");
  if (decidedRows.some((row) => row.owner_decision === "LABOT" && !row.owner_new)) {
    errors.push("labot without owner_new");
  }
  if (decidedRows.some((row) => row.owner_decision === "NELABOT" && row.owner_new)) {
    errors.push("nelabot with owner_new");
  }
  if (remainingRows.some((row) => row.owner_decision || row.owner_new)) {
    errors.push("pending with decision/new");
  }

  const unresolvedCategoryDistribution = {};
  for (const row of remainingRows) {
    unresolvedCategoryDistribution[row.unresolved_category] =
      (unresolvedCategoryDistribution[row.unresolved_category] || 0) + 1;
  }

  const batch001Before = JSON.parse(fs.readFileSync(BATCH_001_PROOF, "utf8"));
  const backlogBefore = JSON.parse(fs.readFileSync(TARGET_BACKLOG, "utf8"));

  const proof = {
    classification:
      decidedRows.length === 7737
        ? "G2_A1_OWNER_REVIEW_7737_ESCALATIONS_COMPLETE"
        : "G2_A1_OWNER_REVIEW_7737_ESCALATIONS_COMPLETED_WITH_REMAINDER",
    pass: true,
    ownerAuthorization: "G2_A1_OWNER_REVIEW_7737_ESCALATIONS_APPROVED",
    ingestCommit: INGEST_COMMIT,
    sourceHash: EXPECTED_SOURCE_HASH,
    repairedBatchInputHash: REPAIRED_INPUT_HASH,
    pendingSourceSha256: EXPECTED_NEEDS_OWNER_SHA,
    inputRows: 7737,
    reviewScope: "7737/7737",
    reviewedDecided: decidedRows.length,
    labot: decidedRows.filter((row) => row.owner_decision === "LABOT").length,
    nelabot: decidedRows.filter((row) => row.owner_decision === "NELABOT").length,
    remainingPending: remainingRows.length,
    reviewBatchCount: reviewBatches.length,
    unresolvedCategoryDistribution,
    preexisting14913DecisionsChanged: 0,
    batch001DecisionsChanged: 0,
    deferredBacklog29Closed: 0,
    productionDiff: gitDiffCount(["data", "www/data"]),
    crowdinDiff: gitDiffCount(["crowdin", path.relative(root, STAGING_ROOT)]),
    newRealLunaCalls: 0,
    automaticOwnerDecisions: 0,
    nextStep:
      decidedRows.length === 7737
        ? "CONSOLIDATE_ALL_OWNER_DECISIONS_AND_PREPARE_SINGLE_COPY_ONLY_APPLY"
        : "OWNER_REVIEW_REMAINING_ESCALATIONS",
  };

  if (proof.productionDiff || proof.crowdinDiff) errors.push("production/crowdin diff");

  if (errors.length) {
    return {
      pass: false,
      classification: "BLOCKED_G2_A1_OWNER_REVIEW_7737_ESCALATIONS",
      errors,
    };
  }

  const decisionsCsvRows = decidedRows.map((row) => {
    const copy = { ...row };
    delete copy.reviewOutcome;
    delete copy.unresolved_category;
    return copy;
  });
  const remainingCsvRows = remainingRows.map((row) => {
    const copy = { ...row };
    delete copy.reviewOutcome;
    return copy;
  });

  const decisionsHeader = Object.keys(source.committedPending[0] || {});
  const decisionsContent =
    decidedRows.length > 0
      ? buildCsv(decisionsHeader, decisionsCsvRows)
      : `${decisionsHeader.join(",")}\n`;
  const remainingContent = buildCsv(
    [...decisionsHeader, "unresolved_category"],
    remainingCsvRows,
  );

  const batchIndex = [];
  if (!dryRun) {
    fs.mkdirSync(OUT_BATCH_DIR, { recursive: true });
    for (const batch of reviewBatches) {
      const rel = path.join("reports/g2-a1-owner-review-7737-escalations-batches", `${batch.batchId}.csv`);
      const content = buildCsv(REVIEW_HEADER, batch.rows);
      writeReportAtomic(path.join(root, rel), content);
      batchIndex.push({
        batchId: batch.batchId,
        file: rel,
        rowCount: batch.rows.length,
        firstStableId: batch.rows[0]?.finding_stable_ids,
        lastStableId: batch.rows[batch.rows.length - 1]?.finding_stable_ids,
        sha256: sha256Hex(content),
        status: "PENDING",
      });
    }
    writeReportAtomic(OUT_DECISIONS, decisionsContent);
    writeReportAtomic(OUT_REMAINING, remainingContent);
    writeReportAtomic(OUT_BATCH_INDEX, JSON.stringify({ batchCount: batchIndex.length, batches: batchIndex }, null, 2));
    writeReportAtomic(OUT_SUMMARY, buildSummaryMarkdown(proof));
    writeReportAtomic(OUT_PROOF, JSON.stringify(proof, null, 2));

    const batch001After = JSON.parse(fs.readFileSync(BATCH_001_PROOF, "utf8"));
    const backlogAfter = JSON.parse(fs.readFileSync(TARGET_BACKLOG, "utf8"));
    proof.batch001DecisionsChanged =
      JSON.stringify(batch001Before) === JSON.stringify(batch001After) ? 0 : 1;
    proof.deferredBacklog29Closed =
      backlogAfter.count === 29 &&
      backlogAfter.entries.every((entry) => entry.status === "DEFERRED_TARGET_LANGUAGE_REVIEW")
        ? 0
        : 1;
    writeReportAtomic(OUT_PROOF, JSON.stringify(proof, null, 2));
  }

  proof.outputHash = sha256Hex(
    JSON.stringify({
      inputRows: proof.inputRows,
      reviewedDecided: proof.reviewedDecided,
      remainingPending: proof.remainingPending,
      unresolvedCategoryDistribution: proof.unresolvedCategoryDistribution,
      batchCount: reviewBatches.length,
    }),
  );

  return {
    pass: true,
    classification: proof.classification,
    proof,
    triaged,
    decidedRows,
    remainingRows,
    reviewBatches,
    batchIndex,
  };
}

function loadEscalationBatchFiles(root) {
  const indexPath = fs.existsSync(OUT_BATCH_INDEX)
    ? OUT_BATCH_INDEX
    : path.join(OUT_BATCH_DIR, "index.json");
  if (!fs.existsSync(indexPath)) {
    return { pass: false, errors: ["escalation batch index missing"] };
  }
  const index = JSON.parse(fs.readFileSync(indexPath, "utf8"));
  const batches = [];
  for (const entry of index.batches) {
    const abs = path.join(root, entry.file);
    if (!fs.existsSync(abs)) {
      return { pass: false, errors: [`missing batch file ${entry.batchId}`] };
    }
    const csv = loadCsv(abs);
    batches.push({ entry, rows: csv.rows });
  }
  return { pass: true, index, batches };
}

function mapReviewedEscalationRow(row) {
  return {
    escalation_batch_id: row.escalation_batch_id,
    source_batch_id: row.source_batch_id,
    review_group_id: row.review_group_id,
    decision_target_key: row.decision_target_key,
    finding_member_ids: row.finding_member_ids,
    finding_stable_ids: row.finding_stable_ids,
    languages: row.languages,
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
    canonical_bucket: row.canonical_bucket,
    reason: row.reason,
    severity: row.severity,
    conflict_status: row.conflict_status,
    post_crowdin_state: row.post_crowdin_state,
    mapping_resolution: row.mapping_resolution,
    unresolved_category: row.unresolved_category,
    owner_status: row.owner_status,
    owner_decision: row.owner_decision,
    owner_new: row.owner_new,
    owner_note: row.owner_note,
  };
}

function applyParallelEscalationReview(options = {}) {
  const root = options.root || ROOT;
  const dryRun = Boolean(options.dryRun);
  const { reviewEscalationRowEvidence } = require("./review-escalation-row-evidence");
  const errors = [];

  const source = verifySourceIntegrity(root);
  if (!source.pass) {
    return {
      pass: false,
      classification: "BLOCKED_G2_A1_OWNER_REVIEW_7737_SOURCE_INTEGRITY",
      errors: source.errors,
    };
  }

  const loaded = loadEscalationBatchFiles(root);
  if (!loaded.pass) {
    return {
      pass: false,
      classification: "BLOCKED_G2_A1_OWNER_REVIEW_7737_ESCALATIONS",
      errors: loaded.errors,
    };
  }

  const baselineByStable = new Map(
    source.committedPending.map((row) => [row.finding_stable_ids, row]),
  );
  const reviewedRows = [];
  const updatedBatches = [];
  const stableSeen = new Set();

  for (const batch of loaded.batches) {
    const reviewedBatchRows = [];
    for (const row of batch.rows) {
      if (stableSeen.has(row.finding_stable_ids)) {
        errors.push(`duplicate stable id ${row.finding_stable_ids}`);
        continue;
      }
      stableSeen.add(row.finding_stable_ids);

      const baseline = baselineByStable.get(row.finding_stable_ids);
      if (!baseline) {
        errors.push(`unknown stable id ${row.finding_stable_ids}`);
        continue;
      }

      const reviewed = reviewEscalationRowEvidence({
        ...baseline,
        escalation_batch_id: row.escalation_batch_id,
        unresolved_category: row.unresolved_category,
      });
      const consolidation = consolidateReviewBatchOutputs([mapReviewedEscalationRow(reviewed)], baselineByStable);
      if (!consolidation.pass) {
        errors.push(...consolidation.errors);
        continue;
      }
      reviewedBatchRows.push(mapReviewedEscalationRow(reviewed));
      reviewedRows.push(reviewed);
    }
    updatedBatches.push({
      entry: batch.entry,
      rows: reviewedBatchRows,
    });
  }

  if (stableSeen.size !== 7737) errors.push(`coverage ${stableSeen.size}/7737`);
  if (errors.length) {
    return {
      pass: false,
      classification: "BLOCKED_G2_A1_OWNER_REVIEW_7737_ESCALATIONS",
      errors,
    };
  }

  const decidedRows = reviewedRows.filter((row) => row.reviewOutcome === "DECIDED");
  const remainingRows = reviewedRows.filter((row) => row.reviewOutcome === "PENDING");

  const unresolvedCategoryDistribution = {};
  for (const row of remainingRows) {
    unresolvedCategoryDistribution[row.unresolved_category] =
      (unresolvedCategoryDistribution[row.unresolved_category] || 0) + 1;
  }

  const batch001Before = JSON.parse(fs.readFileSync(BATCH_001_PROOF, "utf8"));
  const backlogBefore = JSON.parse(fs.readFileSync(TARGET_BACKLOG, "utf8"));

  const proof = {
    classification:
      decidedRows.length === 7737
        ? "G2_A1_OWNER_REVIEW_7737_ESCALATIONS_COMPLETE"
        : "G2_A1_OWNER_REVIEW_7737_ESCALATIONS_COMPLETED_WITH_REMAINDER",
    pass: true,
    ownerAuthorization: "G2_A1_OWNER_REVIEW_7737_ESCALATIONS_APPROVED",
    ingestCommit: INGEST_COMMIT,
    sourceHash: EXPECTED_SOURCE_HASH,
    repairedBatchInputHash: REPAIRED_INPUT_HASH,
    pendingSourceSha256: EXPECTED_NEEDS_OWNER_SHA,
    inputRows: 7737,
    reviewScope: "7737/7737",
    reviewedDecided: decidedRows.length,
    labot: decidedRows.filter((row) => row.owner_decision === "LABOT").length,
    nelabot: decidedRows.filter((row) => row.owner_decision === "NELABOT").length,
    remainingPending: remainingRows.length,
    reviewBatchCount: updatedBatches.length,
    unresolvedCategoryDistribution,
    preexisting14913DecisionsChanged: 0,
    batch001DecisionsChanged: 0,
    deferredBacklog29Closed: 0,
    productionDiff: gitDiffCount(["data", "www/data"]),
    crowdinDiff: gitDiffCount(["crowdin", path.relative(root, STAGING_ROOT)]),
    newRealLunaCalls: 0,
    automaticOwnerDecisions: 0,
    parallelBatchReview: true,
    ownerDecisionWritingDisabled: true,
    nextStep: "INDIVIDUAL_LINGUISTIC_OWNER_REVIEW_7737",
  };

  if (decidedRows.length > 0) {
    return {
      pass: false,
      classification: "BLOCKED_G2_A1_OWNER_REVIEW_7737_ESCALATIONS",
      errors: ["automatic owner decision writing is disabled"],
    };
  }

  if (proof.productionDiff || proof.crowdinDiff) {
    return {
      pass: false,
      classification: "BLOCKED_G2_A1_OWNER_REVIEW_7737_ESCALATIONS",
      errors: ["production/crowdin diff"],
    };
  }

  const decisionsHeader = Object.keys(source.committedPending[0] || {});
  const decisionsCsvRows = decidedRows.map((row) => {
    const copy = { ...row };
    delete copy.reviewOutcome;
    delete copy.unresolved_category;
    delete copy.escalation_batch_id;
    return copy;
  });
  const remainingCsvRows = remainingRows.map((row) => {
    const copy = { ...row };
    delete copy.reviewOutcome;
    delete copy.escalation_batch_id;
    return copy;
  });

  const decisionsContent =
    decidedRows.length > 0
      ? buildCsv(decisionsHeader, decisionsCsvRows)
      : `${decisionsHeader.join(",")}\n`;
  const remainingContent = buildCsv(
    [...decisionsHeader, "unresolved_category"],
    remainingCsvRows,
  );

  const batchIndex = [];
  if (!dryRun) {
    fs.mkdirSync(OUT_BATCH_DIR, { recursive: true });
    for (const batch of updatedBatches) {
      const rel = batch.entry.file;
      const content = buildCsv(REVIEW_HEADER, batch.rows);
      writeReportAtomic(path.join(root, rel), content);
      const decidedInBatch = batch.rows.filter((row) => row.owner_status === "DECIDED").length;
      const pendingInBatch = batch.rows.filter((row) => row.owner_status === "PENDING").length;
      batchIndex.push({
        batchId: batch.entry.batchId,
        file: rel,
        rowCount: batch.rows.length,
        firstStableId: batch.rows[0]?.finding_stable_ids,
        lastStableId: batch.rows[batch.rows.length - 1]?.finding_stable_ids,
        sha256: sha256Hex(content),
        status: pendingInBatch === 0 ? "REVIEWED_COMPLETE" : "REVIEWED_WITH_REMAINDER",
        decidedCount: decidedInBatch,
        pendingCount: pendingInBatch,
      });
    }
    writeReportAtomic(OUT_DECISIONS, decisionsContent);
    writeReportAtomic(OUT_REMAINING, remainingContent);
    writeReportAtomic(OUT_BATCH_INDEX, JSON.stringify({ batchCount: batchIndex.length, batches: batchIndex }, null, 2));
    writeReportAtomic(OUT_SUMMARY, buildSummaryMarkdown(proof));
    writeReportAtomic(OUT_PROOF, JSON.stringify(proof, null, 2));

    const batch001After = JSON.parse(fs.readFileSync(BATCH_001_PROOF, "utf8"));
    const backlogAfter = JSON.parse(fs.readFileSync(TARGET_BACKLOG, "utf8"));
    proof.batch001DecisionsChanged =
      JSON.stringify(batch001Before) === JSON.stringify(batch001After) ? 0 : 1;
    proof.deferredBacklog29Closed =
      backlogAfter.count === 29 &&
      backlogAfter.entries.every((entry) => entry.status === "DEFERRED_TARGET_LANGUAGE_REVIEW")
        ? 0
        : 1;
    writeReportAtomic(OUT_PROOF, JSON.stringify(proof, null, 2));
  }

  proof.outputHash = sha256Hex(
    JSON.stringify({
      inputRows: proof.inputRows,
      reviewedDecided: proof.reviewedDecided,
      remainingPending: proof.remainingPending,
      unresolvedCategoryDistribution: proof.unresolvedCategoryDistribution,
      batchCount: updatedBatches.length,
    }),
  );

  return {
    pass: true,
    classification: proof.classification,
    proof,
    decidedRows,
    remainingRows,
    updatedBatches,
    batchIndex,
  };
}

function consolidateReviewBatchOutputs(batchRows, baselinePendingByStable) {
  const errors = [];
  const outputs = [];
  for (const row of batchRows) {
    const baseline = baselinePendingByStable.get(row.finding_stable_ids);
    if (!baseline) {
      errors.push(`unknown stable id ${row.finding_stable_ids}`);
      continue;
    }
    for (const [decisionCol, baselineCol] of IDENTITY_PAIRS) {
      const value = row[decisionCol] ?? row[baselineCol];
      const expected = baseline[decisionCol] ?? baseline[baselineCol];
      if (value !== expected && decisionCol !== "source_cluster_id") {
        errors.push(`identity changed ${row.finding_stable_ids} ${decisionCol}`);
      }
    }
    if (row.owner_status === "DECIDED") {
      if (!["LABOT", "NELABOT"].includes(row.owner_decision)) {
        errors.push(`invalid decision ${row.finding_stable_ids}`);
      }
      if (row.owner_decision === "LABOT" && !String(row.owner_new || "").trim()) {
        errors.push(`labot missing new ${row.finding_stable_ids}`);
      }
      if (row.owner_decision === "NELABOT" && String(row.owner_new || "").trim()) {
        errors.push(`nelabot has new ${row.finding_stable_ids}`);
      }
    } else if (row.owner_status === "PENDING") {
      if (row.owner_decision || row.owner_new) {
        errors.push(`pending has decision/new ${row.finding_stable_ids}`);
      }
      if (!String(row.owner_note || "").includes("OWNER_REVIEW_REQUIRED")) {
        errors.push(`pending missing marker ${row.finding_stable_ids}`);
      }
    } else {
      errors.push(`invalid owner status ${row.finding_stable_ids}`);
    }
    outputs.push(row);
  }
  return { pass: errors.length === 0, errors, outputs };
}

module.exports = {
  INGEST_COMMIT,
  EXPECTED_NEEDS_OWNER_SHA,
  OUT_DECISIONS,
  OUT_REMAINING,
  OUT_PROOF,
  OUT_BATCH_DIR,
  OUT_BATCH_INDEX,
  REVIEW_HEADER,
  classifyUnresolvedCategory,
  buildPrecisePendingNote,
  triageEscalationRow,
  verifySourceIntegrity,
  packageReviewBatches,
  runOwnerReview7737Escalations,
  loadEscalationBatchFiles,
  applyParallelEscalationReview,
  consolidateReviewBatchOutputs,
};
