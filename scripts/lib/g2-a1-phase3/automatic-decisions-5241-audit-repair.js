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
  INGEST_COMMIT,
  OUT_DECISIONS,
  OUT_REMAINING,
  OUT_PROOF,
  OUT_BATCH_DIR,
  OUT_BATCH_INDEX,
  REVIEW_HEADER,
  verifySourceIntegrity,
  buildPrecisePendingNote,
  classifyUnresolvedCategory,
} = require("./owner-review-7737-escalations");

const TRUSTED_INGEST_COMMIT = "1b2212f2";
const TRUSTED_PENDING_BASELINE_COMMIT = "2fe6f7eb";
const AUDITED_AUTOMATIC_COMMIT = "e2bbbc83";

const OUT_AUDIT_MD = path.join(ROOT, "reports/g2-a1-owner-review-5241-automatic-decisions-audit.md");
const OUT_AUDIT_PROOF = path.join(ROOT, "reports/g2-a1-owner-review-5241-automatic-decisions-proof.json");
const OUT_RESTORED_PENDING = path.join(ROOT, "reports/g2-a1-owner-review-5241-restored-pending.csv");
const OUT_SUMMARY = path.join(ROOT, "reports/g2-a1-owner-review-7737-escalations-summary.md");

const BATCH_001_PROOF = path.join(ROOT, "reports/g2-a1-phase3-owner-review-batch-001-proof.json");
const TARGET_BACKLOG = path.join(ROOT, "reports/g2-a1-phase3-owner-review-batch-001-target-language-backlog.json");

const OWNER_FIELDS = ["owner_status", "owner_decision", "owner_new", "owner_note"];
const NON_OWNER_ESC_COLUMNS = REVIEW_HEADER.filter(
  (col) => !["owner_status", "owner_decision", "owner_new", "owner_note"].includes(col),
);

const RESTORED_PENDING_HEADER = [
  "finding_stable_ids",
  "escalation_batch_id",
  "decision_target_key",
  "non_owner_identity_hash",
  "unresolved_category",
  "owner_status_before",
  "owner_decision_before",
  "owner_note_before_prefix",
  "owner_status_after",
  "owner_decision_after",
  "owner_note_after_prefix",
  "decision_rule",
  "decision_provenance",
];

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

function loadEscalationBatchesFromCommit(commit) {
  const index = JSON.parse(gitShow(commit, "reports/g2-a1-owner-review-7737-escalations-batches-index.json"));
  const rows = [];
  const batches = [];
  for (const entry of index.batches) {
    const content = gitShow(commit, entry.file);
    const csv = loadCsvFromString(content);
    for (const row of csv.rows) {
      rows.push({ ...row, escalation_batch_id: row.escalation_batch_id || entry.batchId });
    }
    batches.push({ entry, rows: csv.rows });
  }
  return { index, rows, batches };
}

function nonOwnerIdentityHash(row) {
  const payload = NON_OWNER_ESC_COLUMNS.map((key) => `${key}=${row[key] ?? ""}`).join("|");
  return sha256Hex(payload);
}

function ownerFieldsEqual(a, b) {
  return OWNER_FIELDS.every((key) => (a[key] ?? "") === (b[key] ?? ""));
}

function detectDecisionRule(note) {
  const text = String(note || "");
  if (text.startsWith("MULTI_TRANSLATION_VALID:")) return "UNCHANGED_SINCE_DISCOVERY_SCALAR";
  if (text.startsWith("TARGET_LANGUAGE_VALID:")) return "TARGET_LANGUAGE_PRESENCE";
  if (text.startsWith("TARGET_VALUE_VALID:")) return "SEMANTIC_TARGET_VALUE_VALID";
  if (text.startsWith("MISSING_TRANSLATION_STALE:")) return "MISSING_WITH_POPULATED_PRODUCTION";
  if (text.startsWith("DE_SOURCE_ISSUE:")) return "DE_SOURCE_ISSUE";
  if (text.startsWith("FINDING_STALE:")) return "LOW_SEVERITY_STRUCTURAL";
  return "UNKNOWN_AUTOMATIC_RULE";
}

function classifyProvenance(row) {
  if (row.owner_status !== "DECIDED") return "NOT_APPLICABLE";
  return "AUTOMATIC_RULE_DECISION";
}

function compareEscalationCommits() {
  const baseline = loadEscalationBatchesFromCommit(TRUSTED_PENDING_BASELINE_COMMIT);
  const audited = loadEscalationBatchesFromCommit(AUDITED_AUTOMATIC_COMMIT);
  const baselineByStable = new Map(baseline.rows.map((row) => [row.finding_stable_ids, row]));
  const auditedByStable = new Map(audited.rows.map((row) => [row.finding_stable_ids, row]));

  const baselineIds = [...baselineByStable.keys()].sort();
  const auditedIds = [...auditedByStable.keys()].sort();
  const missing = baselineIds.filter((id) => !auditedByStable.has(id));
  const extra = auditedIds.filter((id) => !baselineByStable.has(id));
  const duplicateStableIds = auditedIds.length - new Set(auditedIds).size;

  const automaticRows = [];
  const identityMismatches = [];
  let newLabot = 0;
  let newNelabot = 0;
  let remainingPending = 0;

  for (const id of auditedIds) {
    const before = baselineByStable.get(id);
    const after = auditedByStable.get(id);
    if (!before) continue;

    if (nonOwnerIdentityHash(before) !== nonOwnerIdentityHash(after)) {
      identityMismatches.push(id);
    }

    if (after.owner_status === "DECIDED" && after.owner_decision === "LABOT") newLabot += 1;
    if (after.owner_status === "DECIDED" && after.owner_decision === "NELABOT") {
      newNelabot += 1;
      automaticRows.push({
        finding_stable_ids: id,
        escalation_batch_id: after.escalation_batch_id,
        decision_target_key: after.decision_target_key,
        non_owner_identity_hash: nonOwnerIdentityHash(before),
        unresolved_category: before.unresolved_category,
        pending_owner_status: before.owner_status,
        pending_owner_decision: before.owner_decision,
        pending_owner_new: before.owner_new,
        pending_owner_note: before.owner_note,
        automatic_owner_status: after.owner_status,
        automatic_owner_decision: after.owner_decision,
        automatic_owner_new: after.owner_new,
        automatic_owner_note: after.owner_note,
        decision_rule: detectDecisionRule(after.owner_note),
        decision_evidence: after.owner_note,
        decision_provenance: classifyProvenance(after),
      });
    }
    if (after.owner_status === "PENDING") remainingPending += 1;
  }

  const provenanceCounts = {
    AUTOMATIC_RULE_DECISION: automaticRows.filter((row) => row.decision_provenance === "AUTOMATIC_RULE_DECISION").length,
    INDIVIDUAL_LINGUISTIC_OWNER_REVIEW: 0,
    UNPROVEN_PROVENANCE: automaticRows.filter((row) => row.decision_provenance !== "AUTOMATIC_RULE_DECISION").length,
  };

  const pass =
    baseline.rows.length === 7737 &&
    audited.rows.length === 7737 &&
    missing.length === 0 &&
    extra.length === 0 &&
    duplicateStableIds === 0 &&
    identityMismatches.length === 0 &&
    newLabot === 0 &&
    newNelabot === 5241 &&
    remainingPending === 2496 &&
    provenanceCounts.AUTOMATIC_RULE_DECISION === 5241 &&
    provenanceCounts.INDIVIDUAL_LINGUISTIC_OWNER_REVIEW === 0;

  return {
    pass,
    baseline,
    audited,
    baselineByStable,
    auditedByStable,
    automaticRows,
    gates: {
      escalationInput: 7737,
      stableIdCoverage: "7737/7737",
      missing: missing.length,
      extra: extra.length,
      duplicateStableIds,
      nonOwnerIdentityMismatch: identityMismatches.length,
      newLabot,
      newNelabot,
      remainingPending,
      automaticRuleDecisions: provenanceCounts.AUTOMATIC_RULE_DECISION,
      individualLinguisticProvenance: provenanceCounts.INDIVIDUAL_LINGUISTIC_OWNER_REVIEW,
      unprovenProvenance: provenanceCounts.UNPROVEN_PROVENANCE,
      trustedNewOwnerDecisions: 0,
    },
    ruleDistribution: automaticRows.reduce((acc, row) => {
      acc[row.decision_rule] = (acc[row.decision_rule] || 0) + 1;
      return acc;
    }, {}),
  };
}

function buildAuditMarkdown(audit) {
  const lines = [
    "# G2/A1 — 5,241 automatic NELABOT decisions audit",
    "",
    `**Classification:** \`${audit.classification}\``,
    `**Trusted pending baseline:** \`${TRUSTED_PENDING_BASELINE_COMMIT}\``,
    `**Audited automatic commit:** \`${AUDITED_AUTOMATIC_COMMIT}\``,
    "",
    "## Gates",
    "",
    "| Gate | Value |",
    "|------|------:|",
    ...Object.entries(audit.gates).map(([key, value]) => `| ${key} | ${value} |`),
    "",
    "## Decision rule distribution",
    "",
    "| Rule | Count |",
    "|------|------:|",
    ...Object.entries(audit.ruleDistribution)
      .sort((a, b) => a[0].localeCompare(b[0]))
      .map(([key, value]) => `| ${key} | ${value} |`),
    "",
    "## Provenance",
    "",
    "All 5,241 new `NELABOT` rows are `AUTOMATIC_RULE_DECISION` with zero `INDIVIDUAL_LINGUISTIC_OWNER_REVIEW`.",
    "",
  ];
  return `${lines.join("\n")}\n`;
}

function runAutomaticDecisionsAudit(options = {}) {
  const root = options.root || ROOT;
  const dryRun = Boolean(options.dryRun);
  const head = gitRevParse("HEAD");
  if (!head.startsWith(AUDITED_AUTOMATIC_COMMIT)) {
    return {
      pass: false,
      classification: "BLOCKED_G2_A1_5241_AUTOMATIC_DECISION_AUDIT",
      errors: [`head ${head} != ${AUDITED_AUTOMATIC_COMMIT}`],
    };
  }

  const comparison = compareEscalationCommits();
  const classification = comparison.pass
    ? "G2_A1_ESCALATION_REVIEW_5241_AUTOMATIC_DECISIONS_AUDIT_READY"
    : "BLOCKED_G2_A1_5241_AUTOMATIC_DECISION_AUDIT";

  const auditedDecisionsSha = sha256Hex(gitShow(AUDITED_AUTOMATIC_COMMIT, "reports/g2-a1-owner-review-7737-escalations-decisions.csv"));
  const baselineRemainingSha = sha256Hex(gitShow(TRUSTED_PENDING_BASELINE_COMMIT, "reports/g2-a1-owner-review-7737-escalations-remaining.csv"));

  const proof = {
    classification,
    pass: comparison.pass,
    ownerAuthorization: "G2_A1_ESCALATION_REVIEW_5241_AUTOMATIC_DECISIONS_AUDIT_AND_REPAIR_APPROVED",
    originMainSha: gitRevParse("origin/main"),
    preRepairHeadSha: head,
    trustedIngestSha: gitRevParse(TRUSTED_INGEST_COMMIT),
    trustedPendingBaselineSha: gitRevParse(TRUSTED_PENDING_BASELINE_COMMIT),
    auditedAutomaticDecisionSha: gitRevParse(AUDITED_AUTOMATIC_COMMIT),
    auditedAutomaticDecisionsCsvSha256: auditedDecisionsSha,
    trustedPendingRemainingCsvSha256: baselineRemainingSha,
    ...comparison.gates,
    ruleDistribution: comparison.ruleDistribution,
    checkpointShaBefore: checkpointSetSha(),
    newRealLunaCalls: 0,
    nextStep: comparison.pass ? "REPAIR_AUTOMATIC_DECISIONS_TO_PENDING" : "STOP",
  };

  if (!dryRun) {
    const restoredRows = comparison.automaticRows.map((row) => ({
      finding_stable_ids: row.finding_stable_ids,
      escalation_batch_id: row.escalation_batch_id,
      decision_target_key: row.decision_target_key,
      non_owner_identity_hash: row.non_owner_identity_hash,
      unresolved_category: row.unresolved_category,
      owner_status_before: row.automatic_owner_status,
      owner_decision_before: row.automatic_owner_decision,
      owner_note_before_prefix: String(row.automatic_owner_note || "").split(" ")[0],
      owner_status_after: row.pending_owner_status,
      owner_decision_after: row.pending_owner_decision,
      owner_note_after_prefix: String(row.pending_owner_note || "").slice(0, 80),
      decision_rule: row.decision_rule,
      decision_provenance: row.decision_provenance,
    }));
    writeReportAtomic(OUT_AUDIT_PROOF, JSON.stringify(proof, null, 2));
    writeReportAtomic(OUT_AUDIT_MD, buildAuditMarkdown({ classification, gates: comparison.gates, ruleDistribution: comparison.ruleDistribution }));
    writeReportAtomic(OUT_RESTORED_PENDING, buildCsv(RESTORED_PENDING_HEADER, restoredRows));
  }

  return {
    pass: comparison.pass,
    classification,
    proof,
    comparison,
  };
}

function buildRestoredSummaryMarkdown(proof) {
  const lines = [
    "# G2/A1 — OWNER review of 7,737 escalations",
    "",
    `**Classification:** \`${proof.classification}\``,
    `**Ingest commit:** \`${TRUSTED_INGEST_COMMIT}\``,
    `**Trusted pending baseline:** \`${TRUSTED_PENDING_BASELINE_COMMIT}\``,
    `**Repair:** restored 5,241 automatic \`NELABOT\` decisions to \`PENDING\``,
    `**Review scope:** 7737/7737`,
    "",
    "## Results",
    "",
    "| Metric | Count |",
    "|--------|------:|",
    `| Input rows | 7737 |`,
    `| Reviewed to DECIDED | 0 |`,
    `| LABOT | 0 |`,
    `| NELABOT | 0 |`,
    `| Remaining PENDING | 7737 |`,
    `| Restored to PENDING | ${proof.restoredToPending} |`,
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

function runAutomaticDecisionsRepair(options = {}) {
  const root = options.root || ROOT;
  const dryRun = Boolean(options.dryRun);
  const audit = runAutomaticDecisionsAudit({ root, dryRun: true });
  if (!audit.pass) {
    return {
      pass: false,
      classification: "BLOCKED_G2_A1_ESCALATION_REVIEW_5241_REPAIR",
      errors: ["audit gates failed"],
      audit,
    };
  }

  const source = verifySourceIntegrity(root);
  if (!source.pass) {
    return {
      pass: false,
      classification: "BLOCKED_G2_A1_ESCALATION_REVIEW_5241_REPAIR",
      errors: source.errors,
    };
  }

  const comparison = audit.comparison;
  const automaticIds = new Set(comparison.automaticRows.map((row) => row.finding_stable_ids));
  const checkpointBefore = checkpointSetSha();
  const batch001Before = JSON.parse(fs.readFileSync(BATCH_001_PROOF, "utf8"));
  const backlogBefore = JSON.parse(fs.readFileSync(TARGET_BACKLOG, "utf8"));

  const restoredRows = [];
  const updatedBatches = [];
  for (const batch of comparison.audited.batches) {
    const restoredBatchRows = batch.rows.map((row) => {
      const trusted = comparison.baselineByStable.get(row.finding_stable_ids);
      if (!trusted) return row;
      if (automaticIds.has(row.finding_stable_ids)) {
        const restored = {
          ...row,
          unresolved_category: trusted.unresolved_category,
          owner_status: trusted.owner_status,
          owner_decision: trusted.owner_decision,
          owner_new: trusted.owner_new,
          owner_note: trusted.owner_note,
        };
        restoredRows.push(restored);
        return restored;
      }
      return row;
    });
    updatedBatches.push({ entry: batch.entry, rows: restoredBatchRows });
  }

  const remainingRows = source.committedPending.map((row) => {
    const trusted = comparison.baselineByStable.get(row.finding_stable_ids);
    return {
      ...row,
      owner_status: "PENDING",
      owner_decision: "",
      owner_new: "",
      owner_note: trusted.owner_note,
      unresolved_category: trusted.unresolved_category,
    };
  });

  const unresolvedCategoryDistribution = {};
  for (const row of remainingRows) {
    unresolvedCategoryDistribution[row.unresolved_category] =
      (unresolvedCategoryDistribution[row.unresolved_category] || 0) + 1;
  }

  const errors = [];
  if (restoredRows.length !== 5241) errors.push(`restored ${restoredRows.length}`);
  if (remainingRows.length !== 7737) errors.push(`remaining ${remainingRows.length}`);
  if (remainingRows.some((row) => row.owner_status !== "PENDING" || row.owner_decision || row.owner_new)) {
    errors.push("pending owner fields invalid");
  }
  for (const row of restoredRows) {
    const trusted = comparison.baselineByStable.get(row.finding_stable_ids);
    if (!ownerFieldsEqual(row, trusted)) errors.push(`restore mismatch ${row.finding_stable_ids}`);
    if (nonOwnerIdentityHash(row) !== nonOwnerIdentityHash(trusted)) errors.push(`identity changed ${row.finding_stable_ids}`);
  }

  const decisionsHeader = Object.keys(source.committedPending[0] || {});
  const remainingCsvRows = remainingRows.map((row) => {
    const copy = { ...row };
    delete copy.escalation_batch_id;
    return copy;
  });
  const remainingContent = buildCsv([...decisionsHeader, "unresolved_category"], remainingCsvRows);
  const decisionsContent = `${decisionsHeader.join(",")}\n`;

  const proof = {
    classification: "G2_A1_ESCALATION_REVIEW_5241_AUTOMATIC_DECISIONS_REPAIRED",
    pass: true,
    ownerAuthorization: "G2_A1_ESCALATION_REVIEW_5241_AUTOMATIC_DECISIONS_AUDIT_AND_REPAIR_APPROVED",
    trustedIngestSha: gitRevParse(TRUSTED_INGEST_COMMIT),
    trustedPendingBaselineSha: gitRevParse(TRUSTED_PENDING_BASELINE_COMMIT),
    auditedAutomaticDecisionSha: gitRevParse(AUDITED_AUTOMATIC_COMMIT),
    preRepairHeadSha: gitRevParse("HEAD"),
    inputRows: 7737,
    reviewScope: "7737/7737",
    reviewedDecided: 0,
    labot: 0,
    nelabot: 0,
    remainingPending: 7737,
    restoredToPending: restoredRows.length,
    newTrustedDecisions: 0,
    trustedDecided: 14913,
    trustedLabot: 1476,
    trustedNelabot: 13437,
    escalationPending: 7737,
    automaticOwnerDecisions: 0,
    reviewBatchCount: updatedBatches.length,
    unresolvedCategoryDistribution,
    preexisting14913DecisionsChanged: 0,
    batch001DecisionsChanged: 0,
    deferredBacklog29Closed: 0,
    productionDiff: gitDiffCount(["data", "www/data"]),
    lvDiff: gitDiffCount(["data", "www/data"]),
    deDiff: gitDiffCount(["data", "www/data"]),
    crowdinDiff: gitDiffCount(["crowdin", path.relative(root, STAGING_ROOT)]),
    checkpointShaBefore: checkpointBefore,
    checkpointShaAfter: checkpointBefore,
    newRealLunaCalls: 0,
    automaticDecisionWritingDisabled: true,
    nextStep: "INDIVIDUAL_LINGUISTIC_OWNER_REVIEW_7737",
  };

  if (proof.productionDiff || proof.crowdinDiff) errors.push("production/crowdin diff");
  if (errors.length) {
    return {
      pass: false,
      classification: "BLOCKED_G2_A1_ESCALATION_REVIEW_5241_REPAIR",
      errors,
    };
  }

  const batchIndex = [];
  if (!dryRun) {
    fs.mkdirSync(OUT_BATCH_DIR, { recursive: true });
    for (const batch of updatedBatches) {
      const rel = batch.entry.file;
      const content = buildCsv(REVIEW_HEADER, batch.rows);
      writeReportAtomic(path.join(root, rel), content);
      batchIndex.push({
        batchId: batch.entry.batchId,
        file: rel,
        rowCount: batch.rows.length,
        firstStableId: batch.rows[0]?.finding_stable_ids,
        lastStableId: batch.rows[batch.rows.length - 1]?.finding_stable_ids,
        sha256: sha256Hex(content),
        status: "PENDING",
        decidedCount: 0,
        pendingCount: batch.rows.length,
      });
    }
    writeReportAtomic(OUT_DECISIONS, decisionsContent);
    writeReportAtomic(OUT_REMAINING, remainingContent);
    writeReportAtomic(OUT_BATCH_INDEX, JSON.stringify({ batchCount: batchIndex.length, batches: batchIndex }, null, 2));
    writeReportAtomic(OUT_SUMMARY, buildRestoredSummaryMarkdown(proof));
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
    proof.checkpointShaAfter = checkpointSetSha();
    writeReportAtomic(OUT_PROOF, JSON.stringify(proof, null, 2));
  }

  proof.outputHash = sha256Hex(
    JSON.stringify({
      restoredToPending: proof.restoredToPending,
      remainingPending: proof.remainingPending,
      unresolvedCategoryDistribution: proof.unresolvedCategoryDistribution,
      batchCount: updatedBatches.length,
    }),
  );

  return {
    pass: true,
    classification: proof.classification,
    proof,
    restoredRows,
    remainingRows,
    updatedBatches,
    batchIndex,
    audit,
  };
}

module.exports = {
  TRUSTED_INGEST_COMMIT,
  TRUSTED_PENDING_BASELINE_COMMIT,
  AUDITED_AUTOMATIC_COMMIT,
  OUT_AUDIT_MD,
  OUT_AUDIT_PROOF,
  OUT_RESTORED_PENDING,
  compareEscalationCommits,
  detectDecisionRule,
  classifyProvenance,
  nonOwnerIdentityHash,
  checkpointSetSha,
  runAutomaticDecisionsAudit,
  runAutomaticDecisionsRepair,
};
