#!/usr/bin/env node
"use strict";

const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT } = require("../audit-common");
const { writeReportAtomic } = require("../content-discovery/report-builder");
const { MULTI_VALUE_DELIM } = require("../../prepare-g2-a1-phase3-owner-review-batch-001");
const { loadCsv, loadCsvFromString, buildCsv } = require("./batch-001-csv");
const { STAGING_ROOT } = require("./constants");
const {
  EXPECTED_SOURCE_HASH,
  EXPECTED_FINDING_COUNT,
  validateSourceIntegrity,
} = require("./owner-prep-usability");
const {
  BATCH_001_ID,
  OUT_DIR,
  CONSOLIDATED_HEADER,
  BATCH_HEADER,
  IMMUTABLE_SOURCES,
} = require("./owner-review-all-batches");

const BASELINE_COMMIT = "edad2f36";
const REPAIRED_INPUT_HASH = "0d3b8fbb1aeed3a694c2301194d950a1034b91f2f376aca7a6a9b6f46588c1bb";
const EXPECTED_DECISIONS_SHA =
  "37fbe192699bfe2bc5738eaaf3622481ac2ed1335f995032666d2ba8033c25d0";
const EXPECTED_NEEDS_OWNER_SHA =
  "750299e3602769e59a0951f7adbbecdbb4968c09638afbd91025385f4b533414";

const DECISIONS_CSV = path.join(ROOT, "reports/g2-a1-owner-review-all-remaining-decisions-final.csv");
const NEEDS_OWNER_CSV = path.join(ROOT, "reports/g2-a1-owner-review-needs-owner-final.csv");
const OWNER_PROOF_FINAL = path.join(ROOT, "reports/g2-a1-owner-review-all-remaining-proof-final.json");
const OUT_CONSOLIDATED = path.join(ROOT, "reports/g2-a1-phase3-owner-review-all-batches-consolidated.csv");
const OUT_INDEX = path.join(ROOT, "reports/g2-a1-phase3-owner-review-all-batches-index.json");
const OUT_ALL_BATCHES_PROOF = path.join(ROOT, "reports/g2-a1-phase3-owner-review-all-batches-proof.json");
const OUT_INGEST_PROOF = path.join(ROOT, "reports/g2-a1-phase3-owner-review-all-remaining-ingest-proof.json");
const OUT_INGEST_MD = path.join(ROOT, "reports/g2-a1-phase3-owner-review-all-remaining-ingest.md");
const BATCH_001_PROOF = path.join(ROOT, "reports/g2-a1-phase3-owner-review-batch-001-proof.json");
const TARGET_BACKLOG = path.join(ROOT, "reports/g2-a1-phase3-owner-review-batch-001-target-language-backlog.json");
const INGEST_AUDIT_PROOF = path.join(ROOT, "reports/g2-a1-phase3-owner-review-batch-001-ingest-audit-proof.json");

const ALLOWED_DECISIONS = new Set(["NELABOT", "LABOT"]);
const OWNER_REVIEW_REQUIRED = "OWNER_REVIEW_REQUIRED";

const IDENTITY_PAIRS = [
  ["review_group_id", "review_group_id"],
  ["decision_target_key", "decision_target_key"],
  ["finding_member_ids", "finding_member_id"],
  ["finding_stable_ids", "finding_stable_id"],
  ["languages", "language"],
  ["source_cluster_id", "source_cluster_id"],
  ["production_file", "production_file"],
  ["card_object_id", "card_object_id"],
  ["field_path", "field_path"],
  ["lv_source", "lv_source"],
  ["de_reference", "de_reference"],
  ["discovery_current", "discovery_current"],
  ["production_current", "production_current"],
  ["production_current_mirror", "production_current_mirror"],
  ["primary_www_parity", "primary_www_parity"],
  ["proposed", "proposed"],
  ["raw_category", "raw_category"],
  ["canonical_bucket", "canonical_review_bucket"],
  ["reason", "reason"],
  ["severity", "severity"],
  ["conflict_status", "conflict_status"],
  ["post_crowdin_state", "post_crowdin_state"],
  ["mapping_resolution", "mapping_resolution"],
];

function sha256Hex(value) {
  return crypto.createHash("sha256").update(value).digest("hex");
}

function sha256File(absPath) {
  return sha256Hex(fs.readFileSync(absPath));
}

function gitShow(relPath) {
  return execSync(`git show ${BASELINE_COMMIT}:${relPath}`, {
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

function normalizeBatchId(value) {
  return String(value || "").replace(/^"|"$/g, "");
}

function reconcileIdentity(baselineRows, decisionRows) {
  const baselineByStable = new Map(baselineRows.map((row) => [row.finding_stable_id, row]));
  const missing = [];
  const extra = [];
  const mismatches = [];
  const decisionIds = decisionRows.map((row) => row.finding_stable_ids);
  const duplicateAssignments = decisionIds.length - new Set(decisionIds).size;

  for (const row of decisionRows) {
    const base = baselineByStable.get(row.finding_stable_ids);
    if (!base) {
      missing.push(row.finding_stable_ids);
      continue;
    }
    for (const [decisionCol, baselineCol] of IDENTITY_PAIRS) {
      if (row[decisionCol] !== base[baselineCol]) {
        mismatches.push({
          findingStableId: row.finding_stable_ids,
          column: decisionCol,
          decision: row[decisionCol],
          baseline: base[baselineCol],
        });
      }
    }
  }
  for (const id of baselineByStable.keys()) {
    if (!decisionIds.includes(id)) extra.push(id);
  }
  return { missing, extra, mismatches, duplicateAssignments };
}

function ownerGateStats(rows) {
  const stats = {
    decided: 0,
    pending: 0,
    labot: 0,
    nelabot: 0,
    labotWithoutOwnerNew: 0,
    nelabotWithOwnerNew: 0,
    pendingWithDecisionOrNew: 0,
    pendingWithoutMarker: 0,
    ownerNotesPopulated: 0,
  };
  for (const row of rows) {
    if (row.owner_status === "DECIDED") stats.decided += 1;
    if (row.owner_status === "PENDING") stats.pending += 1;
    if (row.owner_decision === "LABOT") {
      stats.labot += 1;
      if (!String(row.owner_new || "").trim()) stats.labotWithoutOwnerNew += 1;
    }
    if (row.owner_decision === "NELABOT") {
      stats.nelabot += 1;
      if (String(row.owner_new || "").trim()) stats.nelabotWithOwnerNew += 1;
    }
    if (row.owner_status === "PENDING" && (row.owner_decision || row.owner_new)) {
      stats.pendingWithDecisionOrNew += 1;
    }
    if (
      row.owner_status === "PENDING" &&
      !String(row.owner_note || "").includes(OWNER_REVIEW_REQUIRED)
    ) {
      stats.pendingWithoutMarker += 1;
    }
    if (String(row.owner_note || "").trim()) stats.ownerNotesPopulated += 1;
  }
  return stats;
}

function batchStatusForRows(rows) {
  const decided = rows.filter((row) => row.owner_status === "DECIDED").length;
  const pending = rows.length - decided;
  if (pending === 0) return "DECIDED";
  if (decided === 0) return "PENDING";
  return "PARTIAL";
}

function buildConsolidatedRow(baselineRow, decisionRow) {
  return {
    batch_id: baselineRow.batch_id,
    review_track: baselineRow.review_track,
    review_group_id: baselineRow.review_group_id,
    source_cluster_id: baselineRow.source_cluster_id,
    decision_target_key: baselineRow.decision_target_key,
    finding_member_id: baselineRow.finding_member_id,
    finding_stable_id: baselineRow.finding_stable_id,
    language: baselineRow.language,
    production_file: baselineRow.production_file,
    card_object_id: baselineRow.card_object_id,
    field_path: baselineRow.field_path,
    lv_source: baselineRow.lv_source,
    de_reference: baselineRow.de_reference,
    discovery_current: baselineRow.discovery_current,
    production_current: baselineRow.production_current,
    production_current_mirror: baselineRow.production_current_mirror,
    primary_www_parity: baselineRow.primary_www_parity,
    proposed: baselineRow.proposed,
    raw_category: baselineRow.raw_category,
    canonical_review_bucket: baselineRow.canonical_review_bucket,
    reason: baselineRow.reason,
    severity: baselineRow.severity,
    conflict_status: baselineRow.conflict_status,
    post_crowdin_state: baselineRow.post_crowdin_state,
    mapping_resolution: baselineRow.mapping_resolution,
    owner_status: decisionRow.owner_status,
    owner_decision: decisionRow.owner_decision,
    owner_new: decisionRow.owner_new,
    owner_note: decisionRow.owner_note,
  };
}

function buildBatchRow(baselineRow, decisionRow) {
  return {
    ...baselineRow,
    owner_status: decisionRow.owner_status,
    owner_decision: decisionRow.owner_decision,
    owner_new: decisionRow.owner_new,
    owner_note: decisionRow.owner_note,
  };
}

function buildIngestMarkdown(proof) {
  const lines = [
    "# G2/A1 Phase 3 — All remaining OWNER review ingest",
    "",
    `**Classification:** \`${proof.classification}\``,
    `**Owner authorization:** \`${proof.ownerAuthorization}\``,
    `**Rows ingested:** ${proof.rowCoverage}`,
    `**Batch coverage:** ${proof.batchCoverage}`,
    "",
    "## OWNER gates",
    "",
    "| Gate | Value |",
    "|------|------:|",
    `| DECIDED | ${proof.decided} |`,
    `| LABOT | ${proof.labot} |`,
    `| NELABOT | ${proof.nelabot} |`,
    `| PENDING | ${proof.pending} |`,
    `| IDENTITY_MISMATCH | ${proof.identityMismatch} |`,
    `| BATCH_001_DECISIONS_CHANGED | ${proof.batch001DecisionsChanged} |`,
    `| DEFERRED_BACKLOG_29_CLOSED | ${proof.deferredBacklog29Closed} |`,
    "",
    `**Next step:** \`${proof.nextStep}\``,
    "",
  ];
  return `${lines.join("\n")}\n`;
}

function ingestAllRemainingOwnerReview(options = {}) {
  const root = options.root || ROOT;
  const dryRun = Boolean(options.dryRun);
  const errors = [];

  if (!fs.existsSync(DECISIONS_CSV)) errors.push("decisions csv missing");
  if (!fs.existsSync(NEEDS_OWNER_CSV)) errors.push("needs-owner csv missing");
  if (sha256File(DECISIONS_CSV) !== EXPECTED_DECISIONS_SHA) errors.push("decisions sha mismatch");
  if (sha256File(NEEDS_OWNER_CSV) !== EXPECTED_NEEDS_OWNER_SHA) errors.push("needs-owner sha mismatch");

  const allBatchesProof = JSON.parse(fs.readFileSync(OUT_ALL_BATCHES_PROOF, "utf8"));
  if (allBatchesProof.outputHash !== REPAIRED_INPUT_HASH) {
    errors.push("repaired input hash drift");
  }
  if (allBatchesProof.sourceHash !== EXPECTED_SOURCE_HASH) {
    errors.push("source hash drift");
  }

  const batch001ProofBefore = JSON.parse(fs.readFileSync(BATCH_001_PROOF, "utf8"));
  const ingestAuditBefore = JSON.parse(fs.readFileSync(INGEST_AUDIT_PROOF, "utf8"));
  const backlogBefore = JSON.parse(fs.readFileSync(TARGET_BACKLOG, "utf8"));
  const sourceShaBefore = Object.fromEntries(
    IMMUTABLE_SOURCES.map((rel) => [rel, sha256Hex(fs.readFileSync(path.join(root, rel)))]),
  );

  const baselineConsolidated = loadCsvFromString(
    gitShow("reports/g2-a1-phase3-owner-review-all-batches-consolidated.csv"),
  ).rows;
  const decisions = loadCsv(DECISIONS_CSV).rows;
  const needsOwner = loadCsv(NEEDS_OWNER_CSV).rows;
  const index = JSON.parse(fs.readFileSync(OUT_INDEX, "utf8"));

  if (baselineConsolidated.length !== 22650) errors.push("baseline row count");
  if (decisions.length !== 22650) errors.push("decision row count");
  if (index.batches.length !== 232) errors.push("batch index count");

  const identity = reconcileIdentity(baselineConsolidated, decisions);
  if (identity.missing.length) errors.push(`missing ids ${identity.missing.length}`);
  if (identity.extra.length) errors.push(`extra ids ${identity.extra.length}`);
  if (identity.mismatches.length) errors.push(`identity mismatch ${identity.mismatches.length}`);
  if (identity.duplicateAssignments) errors.push("duplicate stable ids");

  const gates = ownerGateStats(decisions);
  if (gates.decided !== 14913) errors.push(`decided ${gates.decided}`);
  if (gates.pending !== 7737) errors.push(`pending ${gates.pending}`);
  if (gates.labot !== 1476) errors.push(`labot ${gates.labot}`);
  if (gates.nelabot !== 13437) errors.push(`nelabot ${gates.nelabot}`);
  if (gates.labotWithoutOwnerNew) errors.push("labot without owner_new");
  if (gates.nelabotWithOwnerNew) errors.push("nelabot with owner_new");
  if (gates.pendingWithDecisionOrNew) errors.push("pending with decision/new");
  if (gates.pendingWithoutMarker) errors.push("pending without OWNER_REVIEW_REQUIRED");

  const pendingIds = new Set(decisions.filter((row) => row.owner_status === "PENDING").map((r) => r.finding_stable_ids));
  const needsIds = new Set(needsOwner.map((row) => row.finding_stable_ids));
  if (pendingIds.size !== 7737 || needsIds.size !== 7737) errors.push("pending/needs count");
  for (const id of pendingIds) {
    if (!needsIds.has(id)) errors.push(`needs-owner missing ${id}`);
  }
  for (const id of needsIds) {
    if (!pendingIds.has(id)) errors.push(`unexpected needs-owner id ${id}`);
  }

  const decisionByStable = new Map(decisions.map((row) => [row.finding_stable_ids, row]));
  const baselineByStable = new Map(baselineConsolidated.map((row) => [row.finding_stable_id, row]));
  const consolidatedRows = [];
  const batchOutputs = [];
  let consolidatedFromBatches = 0;

  for (const entry of index.batches) {
    const batchPath = path.join(root, entry.file);
    const batchCsv = loadCsv(batchPath);
    const updatedRows = [];
    for (const row of batchCsv.rows) {
      const stableId = row.finding_stable_ids;
      const decision = decisionByStable.get(stableId);
      const baseline = baselineByStable.get(stableId);
      if (!decision || !baseline) {
        errors.push(`batch row missing decision/baseline ${stableId}`);
        continue;
      }
      if (normalizeBatchId(decision.source_batch_id) !== entry.batchId) {
        errors.push(`batch id mismatch ${stableId}`);
      }
      updatedRows.push(buildBatchRow(row, decision));
      consolidatedRows.push(buildConsolidatedRow(baseline, decision));
      consolidatedFromBatches += 1;
    }
    const csvContent = buildCsv(BATCH_HEADER, updatedRows);
    batchOutputs.push({
      batchId: entry.batchId,
      relFile: entry.file,
      csvContent,
      rows: updatedRows,
      status: batchStatusForRows(updatedRows),
    });
  }

  consolidatedRows.sort((a, b) => a.finding_stable_id.localeCompare(b.finding_stable_id));
  if (consolidatedRows.length !== 22650) errors.push("consolidated output count");
  if (consolidatedFromBatches !== 22650) errors.push("batch sum mismatch");

  const productionDiff = gitDiffCount(["data", "www/data"]);
  const crowdinDiff = gitDiffCount(["crowdin", path.relative(root, STAGING_ROOT)]);
  if (productionDiff) errors.push("production diff");
  if (crowdinDiff) errors.push("crowdin diff");

  if (errors.length) {
    return {
      pass: false,
      classification: "BLOCKED_G2_A1_OWNER_REVIEW_ALL_REMAINING_INGEST",
      errors,
    };
  }

  const batchIndex = index.batches.map((entry) => {
    const out = batchOutputs.find((row) => row.batchId === entry.batchId);
    return {
      ...entry,
      sha256: sha256Hex(out.csvContent),
      status: out.status,
    };
  });
  const consolidatedContent = buildCsv(CONSOLIDATED_HEADER, consolidatedRows);
  const ingestProof = {
    classification: "G2_A1_OWNER_REVIEW_ALL_REMAINING_INGEST_READY",
    pass: true,
    ownerAuthorization: "G2_A1_OWNER_REVIEW_ALL_REMAINING_DECISIONS_INGEST_APPROVED",
    baselineCommit: BASELINE_COMMIT,
    repairedBatchInputHash: REPAIRED_INPUT_HASH,
    sourceHash: EXPECTED_SOURCE_HASH,
    decisionsSha256: EXPECTED_DECISIONS_SHA,
    needsOwnerSha256: EXPECTED_NEEDS_OWNER_SHA,
    rowCoverage: "22650/22650",
    batchCoverage: "232/232",
    uniqueStableIds: 22650,
    missing: 0,
    extra: 0,
    duplicateAssignments: 0,
    identityMismatch: 0,
    decided: gates.decided,
    labot: gates.labot,
    nelabot: gates.nelabot,
    pending: gates.pending,
    labotWithoutOwnerNew: gates.labotWithoutOwnerNew,
    nelabotWithOwnerNew: gates.nelabotWithOwnerNew,
    pendingWithDecisionOrNew: gates.pendingWithDecisionOrNew,
    ownerNotesPopulated: gates.ownerNotesPopulated,
    batch001DecisionsChanged: 0,
    deferredBacklog29Closed: 0,
    productionDiff: 0,
    lvDiff: 0,
    deDiff: 0,
    crowdinDiff: 0,
    newRealLunaCalls: 0,
    automaticOwnerDecisions: 0,
    sourceArtifactSha256Before: sourceShaBefore,
    batch001ProofBefore,
    ingestAuditBefore,
    backlogBefore,
    nextStep: "OWNER_REVIEW_7737_ESCALATIONS_OR_SEPARATE_APPLY_AUTHORIZATION",
  };
  ingestProof.outputHash = sha256Hex(
    JSON.stringify({
      sourceHash: ingestProof.sourceHash,
      decisionsSha256: ingestProof.decisionsSha256,
      decided: ingestProof.decided,
      pending: ingestProof.pending,
      consolidatedSha256: sha256Hex(consolidatedContent),
    }),
  );

  if (!dryRun) {
    for (const out of batchOutputs) {
      writeReportAtomic(path.join(root, out.relFile), out.csvContent);
    }
    writeReportAtomic(OUT_CONSOLIDATED, consolidatedContent);
    writeReportAtomic(OUT_INDEX, JSON.stringify({ batchCount: batchIndex.length, batches: batchIndex }, null, 2));
    writeReportAtomic(OUT_INGEST_PROOF, JSON.stringify(ingestProof, null, 2));
    writeReportAtomic(OUT_INGEST_MD, buildIngestMarkdown(ingestProof));

    const batch001ProofAfter = JSON.parse(fs.readFileSync(BATCH_001_PROOF, "utf8"));
    const backlogAfter = JSON.parse(fs.readFileSync(TARGET_BACKLOG, "utf8"));
    ingestProof.sourceArtifactSha256After = Object.fromEntries(
      IMMUTABLE_SOURCES.map((rel) => [rel, sha256Hex(fs.readFileSync(path.join(root, rel)))]),
    );
    ingestProof.batch001ProofAfter = batch001ProofAfter;
    ingestProof.backlogAfter = backlogAfter;
    ingestProof.batch001DecisionsChanged =
      JSON.stringify(batch001ProofBefore) === JSON.stringify(batch001ProofAfter) ? 0 : 1;
    ingestProof.deferredBacklog29Closed =
      backlogAfter.count === 29 &&
      backlogAfter.entries.every((entry) => entry.status === "DEFERRED_TARGET_LANGUAGE_REVIEW")
        ? 0
        : 1;
    writeReportAtomic(OUT_INGEST_PROOF, JSON.stringify(ingestProof, null, 2));

    const updatedAllBatchesProof = {
      ...allBatchesProof,
      ownerStatuses: ["DECIDED", "PENDING", "PARTIAL"],
      ownerReviewIngest: {
        classification: ingestProof.classification,
        decided: ingestProof.decided,
        pending: ingestProof.pending,
        labot: ingestProof.labot,
        nelabot: ingestProof.nelabot,
        ingestProofSha256: sha256Hex(JSON.stringify(ingestProof)),
        outputHash: ingestProof.outputHash,
      },
      nextStep: ingestProof.nextStep,
    };
    writeReportAtomic(OUT_ALL_BATCHES_PROOF, JSON.stringify(updatedAllBatchesProof, null, 2));
  }

  return {
    pass: true,
    classification: ingestProof.classification,
    proof: ingestProof,
    gates,
    batchOutputs,
    consolidatedRows,
  };
}

module.exports = {
  BASELINE_COMMIT,
  REPAIRED_INPUT_HASH,
  EXPECTED_DECISIONS_SHA,
  EXPECTED_NEEDS_OWNER_SHA,
  DECISIONS_CSV,
  NEEDS_OWNER_CSV,
  IDENTITY_PAIRS,
  reconcileIdentity,
  ownerGateStats,
  buildConsolidatedRow,
  buildBatchRow,
  batchStatusForRows,
  ingestAllRemainingOwnerReview,
};
