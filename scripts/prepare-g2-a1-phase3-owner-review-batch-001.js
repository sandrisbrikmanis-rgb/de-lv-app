#!/usr/bin/env node
"use strict";

const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const { writeReportAtomic } = require("./lib/content-discovery/report-builder");
const { loadG2Level } = require("./lib/content-crowdin-bridge");
const {
  EXPECTED_SOURCE_HASH,
  EXPECTED_FINDING_COUNT,
  buildOwnerPrepUsability,
  buildDecisionTargets,
  loadOwnerPrepFindings,
  validateSourceIntegrity,
} = require("./lib/g2-a1-phase3/owner-prep-usability");

const BATCH_ID = "BATCH-001";
const MULTI_VALUE_DELIM = "\u001f";
const OUT_VIEW = path.join(ROOT, "reports/g2-a1-phase3-owner-review-batch-001-view.md");
const OUT_DECISIONS = path.join(ROOT, "reports/g2-a1-phase3-owner-review-batch-001-decisions.md");
const OUT_CSV = path.join(ROOT, "reports/g2-a1-phase3-owner-review-batch-001-decisions.csv");
const OUT_PROOF = path.join(ROOT, "reports/g2-a1-phase3-owner-review-batch-001-proof.json");

const SOURCE_PATHS = {
  batches: "reports/g2-a1-phase3-owner-review-batches.json",
  preview: "reports/g2-a1-phase3-owner-review-batch-001-preview.md",
  taxonomy: "reports/g2-a1-phase3-owner-taxonomy-map.json",
  usabilityProof: "reports/g2-a1-phase3-owner-prep-usability-proof.json",
  discovery: "reports/g2-a1-phase3-full-discovery.json",
  decisionsCsv: "reports/g2-a1-phase3-owner-decisions.csv",
};

function sha256Hex(value) {
  return crypto.createHash("sha256").update(value).digest("hex");
}

function sha256File(relPath) {
  const filePath = path.join(ROOT, relPath);
  return sha256Hex(fs.readFileSync(filePath));
}

function parseIndexFromStableId(stableId) {
  const part = String(stableId || "")
    .split("|")
    .find((segment) => segment.startsWith("idx:"));
  if (!part) return null;
  const parsed = Number.parseInt(part.slice(4), 10);
  return Number.isNaN(parsed) ? null : parsed;
}

function getAt(obj, fieldPath) {
  if (!obj || !fieldPath) return undefined;
  const primary = String(fieldPath).split(",")[0].trim();
  if (primary === "lv") return obj.lv;
  const normalized = primary.startsWith("study.") ? primary.slice("study.".length) : primary;
  const parts = normalized.replace(/\[(\d+)\]/g, ".$1").split(".").filter(Boolean);
  let current = primary.startsWith("study.") ? obj.study : obj;
  for (const part of parts) {
    if (current == null) return undefined;
    current = current[part];
  }
  return current;
}

function formatFieldValue(value) {
  if (value === null || value === undefined) return "";
  if (typeof value === "string") return value;
  if (typeof value === "number" || typeof value === "boolean") return String(value);
  return JSON.stringify(value);
}

function resolveFieldContext(finding, lvCards, targetCards) {
  const idx = parseIndexFromStableId(finding.sourceFindingId);
  const lvCard = idx != null ? lvCards[idx] : null;
  const targetCard = idx != null ? targetCards[idx] : null;
  const deReference = lvCard?.de ?? finding.objectId ?? finding.cardId ?? "";
  const lvSource = formatFieldValue(getAt(lvCard, finding.fieldPath));
  let current = finding.current;
  if (!current && targetCard) {
    current = formatFieldValue(getAt(targetCard, finding.fieldPath));
  }
  return {
    lvSource,
    deReference,
    current: current || "",
  };
}

function reviewGroupId(target) {
  return target.conflict ? "CONFLICT" : target.decisionTargetKey.slice(0, 16);
}

function buildDecisionRow(target, finding, context) {
  const proposed =
    target.proposedValues.length > 0 ? target.proposedValues.join(" | ") : "";
  const reason = target.reasons.length > 0 ? target.reasons.join(" | ") : "";
  return {
    reviewGroupId: reviewGroupId(target),
    decisionTargetKey: target.decisionTargetKey,
    memberAuditIds: target.memberAuditIds,
    memberFindingIds: target.memberFindingIds,
    languages: [target.lang],
    objectKey: target.objectKey,
    fieldPath: target.fieldPath,
    lvSource: context.lvSource,
    deReference: context.deReference,
    current: context.current,
    proposed,
    rawCategory: target.rawCategories.join(", "),
    canonicalBucket: target.canonicalBuckets.join(", "),
    reason,
    severity: finding.severity || "",
    conflictStatus: target.conflictStatus,
    ownerStatus: "PENDING",
    ownerDecision: "",
    ownerNew: "",
    ownerNote: "",
    auditId: finding.auditId,
    sourceFindingId: finding.sourceFindingId,
  };
}

function escapeMd(value) {
  return String(value ?? "").replace(/\|/g, "\\|");
}

function escapeCsv(value) {
  return `"${String(value ?? "").replace(/"/g, '""')}"`;
}

function buildViewMarkdown(batch, rows) {
  const lines = [
    "# G2/A1 Phase 3 — OWNER review BATCH-001",
    "",
    `**Batch ID:** ${batch.batchId}`,
    `**Review track:** ${batch.reviewTrack}`,
    `**Decision targets:** ${batch.decisionTargetCount}`,
    `**Findings:** ${batch.findingCount}`,
    `**Source hash:** \`${batch.sourceHash}\``,
    `**Status:** PENDING`,
    "",
    "> All OWNER statuses are **PENDING**. Agent does not make OWNER decisions.",
    "",
  ];

  rows.forEach((row, index) => {
    lines.push(`## Review target ${index + 1}`);
    lines.push("");
    lines.push(`**Review group ID:** \`${row.reviewGroupId}\``);
    lines.push(`**Finding/member IDs:** ${row.memberAuditIds.join(", ")}`);
    lines.push(`**Language(s):** ${row.languages.join(", ")}`);
    lines.push(`**Card/object ID:** \`${row.objectKey}\``);
    lines.push(`**Field/path:** \`${row.fieldPath}\``);
    lines.push(`**LV source:** ${row.lvSource || "—"}`);
    lines.push(`**DE reference:** ${row.deReference || "—"}`);
    lines.push(`**CURRENT:** ${row.current || "—"}`);
    lines.push(`**PROPOSED:** ${row.proposed || "—"}`);
    lines.push(`**Raw category:** ${row.rawCategory}`);
    lines.push(`**Canonical bucket:** ${row.canonicalBucket}`);
    lines.push(`**Reason:** ${row.reason || "—"}`);
    lines.push(`**Severity:** ${row.severity || "—"}`);
    lines.push(`**Conflict status:** ${row.conflictStatus}`);
    lines.push(`**OWNER STATUS:** PENDING`);
    lines.push(`**OWNER DECISION:**`);
    lines.push(`**OWNER NEW:**`);
    lines.push(`**OWNER NOTE:**`);
    lines.push("");
    lines.push("---");
    lines.push("");
  });

  return `${lines.join("\n")}\n`;
}

function buildDecisionsMarkdown(batch, rows) {
  const lines = [
    "# G2/A1 Phase 3 — OWNER review BATCH-001 decisions",
    "",
    `**Batch ID:** ${batch.batchId}`,
    `**Decision targets:** ${batch.decisionTargetCount}`,
    `**Findings:** ${batch.findingCount}`,
    `**Source hash:** \`${batch.sourceHash}\``,
    "",
    "| # | Review group ID | Finding/member IDs | Language(s) | Card/object ID | Field/path | LV source | DE reference | CURRENT | PROPOSED | Raw category | Canonical bucket | Reason | Severity | Conflict status | OWNER STATUS | OWNER DECISION | OWNER NEW | OWNER NOTE |",
    "|--:|-----------------|--------------------|-------------|----------------|------------|-----------|--------------|---------|----------|--------------|------------------|--------|----------|-----------------|--------------|----------------|----------|------------|",
  ];

  rows.forEach((row, index) => {
    lines.push(
      `| ${index + 1} | ${escapeMd(row.reviewGroupId)} | ${escapeMd(row.memberAuditIds.join(", "))} | ${escapeMd(row.languages.join(", "))} | ${escapeMd(row.objectKey)} | ${escapeMd(row.fieldPath)} | ${escapeMd(row.lvSource)} | ${escapeMd(row.deReference)} | ${escapeMd(row.current)} | ${escapeMd(row.proposed)} | ${escapeMd(row.rawCategory)} | ${escapeMd(row.canonicalBucket)} | ${escapeMd(row.reason)} | ${escapeMd(row.severity)} | ${escapeMd(row.conflictStatus)} | PENDING | | | |`,
    );
  });

  return `${lines.join("\n")}\n`;
}

function buildCsv(rows) {
  const header = [
    "review_group_id",
    "decision_target_key",
    "finding_member_ids",
    "finding_stable_ids",
    "languages",
    "card_object_id",
    "field_path",
    "lv_source",
    "de_reference",
    "current",
    "proposed",
    "raw_category",
    "canonical_bucket",
    "reason",
    "severity",
    "conflict_status",
    "owner_status",
    "owner_decision",
    "owner_new",
    "owner_note",
  ];
  const lines = [header.join(",")];
  for (const row of rows) {
    lines.push(
      [
        row.reviewGroupId,
        row.decisionTargetKey,
        row.memberAuditIds.join(MULTI_VALUE_DELIM),
        row.memberFindingIds.join(MULTI_VALUE_DELIM),
        row.languages.join(MULTI_VALUE_DELIM),
        row.objectKey,
        row.fieldPath,
        row.lvSource,
        row.deReference,
        row.current,
        row.proposed,
        row.rawCategory,
        row.canonicalBucket,
        row.reason,
        row.severity,
        row.conflictStatus,
        "PENDING",
        "",
        "",
        "",
      ]
        .map(escapeCsv)
        .join(","),
    );
  }
  return `${lines.join("\n")}\n`;
}

function compareBatchSummary(actual, expected) {
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
    if (actual[key] !== expected[key]) {
      mismatches.push(`${key}: expected ${expected[key]} got ${actual[key]}`);
    }
  }
  if (JSON.stringify(actual.languages) !== JSON.stringify(expected.languages)) {
    mismatches.push("languages mismatch");
  }
  return mismatches;
}

function prepareBatch001(options = {}) {
  const root = options.root || ROOT;
  const errors = [];

  for (const relPath of Object.values(SOURCE_PATHS)) {
    if (!fs.existsSync(path.join(root, relPath))) {
      errors.push(`missing source ${relPath}`);
    }
  }
  if (errors.length) {
    return { pass: false, classification: "BLOCKED_G2_A1_OWNER_REVIEW_BATCH_001_PACK", errors };
  }

  const integrity = validateSourceIntegrity(root);
  if (!integrity.pass) {
    return {
      pass: false,
      classification: "BLOCKED_G2_A1_OWNER_REVIEW_BATCH_001_PACK",
      errors: integrity.errors,
    };
  }

  const manifest = JSON.parse(fs.readFileSync(path.join(root, SOURCE_PATHS.batches), "utf8"));
  const manifestBatch = manifest.batches.find((batch) => batch.batchId === BATCH_ID);
  if (!manifestBatch) {
    return {
      pass: false,
      classification: "BLOCKED_G2_A1_OWNER_REVIEW_BATCH_001_PACK",
      errors: ["BATCH-001 missing from manifest"],
    };
  }

  const usabilityProof = JSON.parse(
    fs.readFileSync(path.join(root, SOURCE_PATHS.usabilityProof), "utf8"),
  );
  const proofBatch001 = usabilityProof.batch001;
  if (!proofBatch001 || proofBatch001.batchId !== BATCH_ID) {
    return {
      pass: false,
      classification: "BLOCKED_G2_A1_OWNER_REVIEW_BATCH_001_PACK",
      errors: ["batch001 missing from usability proof"],
    };
  }

  const usability = buildOwnerPrepUsability({ root });
  if (!usability.pass) {
    return {
      pass: false,
      classification: "BLOCKED_G2_A1_OWNER_REVIEW_BATCH_001_PACK",
      errors: usability.errors || ["owner prep usability failed"],
    };
  }

  const batch = usability.batches.find((entry) => entry.batchId === BATCH_ID);
  if (!batch) {
    return {
      pass: false,
      classification: "BLOCKED_G2_A1_OWNER_REVIEW_BATCH_001_PACK",
      errors: ["BATCH-001 missing from regenerated batches"],
    };
  }

  errors.push(...compareBatchSummary(batch, manifestBatch));
  errors.push(...compareBatchSummary(batch, proofBatch001));

  const targetMap = new Map(buildDecisionTargets(integrity.findings).map((t) => [t.decisionTargetKey, t]));
  const findingsByStableId = new Map(integrity.findings.map((f) => [f.sourceFindingId, f]));
  const lvCards = loadG2Level("lv", "a1");
  const targetCache = new Map();

  const rows = [];
  for (const key of batch.decisionTargetKeys) {
    const target = targetMap.get(key);
    if (!target) {
      errors.push(`missing decision target ${key}`);
      continue;
    }
    const finding = findingsByStableId.get(target.memberFindingIds[0]);
    if (!finding) {
      errors.push(`missing finding for target ${key}`);
      continue;
    }
    if (!targetCache.has(finding.lang)) {
      targetCache.set(finding.lang, loadG2Level(finding.lang, "a1"));
    }
    rows.push(
      buildDecisionRow(target, finding, resolveFieldContext(finding, lvCards, targetCache.get(finding.lang))),
    );
  }

  const memberSet = new Set(batch.memberFindingIds);
  if (memberSet.size !== batch.memberFindingIds.length) {
    errors.push("duplicate memberFindingIds in BATCH-001");
  }
  if (rows.length !== batch.decisionTargetCount) {
    errors.push(`row count ${rows.length} != decisionTargetCount ${batch.decisionTargetCount}`);
  }
  for (const id of batch.memberFindingIds) {
    if (!findingsByStableId.has(id)) errors.push(`member finding missing ${id}`);
  }
  const rowFindingIds = new Set(rows.flatMap((row) => row.memberFindingIds));
  for (const id of batch.memberFindingIds) {
    if (!rowFindingIds.has(id)) errors.push(`member finding not packed ${id}`);
  }
  if (rows.some((row) => row.ownerStatus !== "PENDING")) {
    errors.push("non-PENDING owner status in batch rows");
  }
  if (rows.some((row) => row.ownerDecision || row.ownerNew || row.ownerNote)) {
    errors.push("automatic owner decision fields populated");
  }

  if (errors.length) {
    return {
      pass: false,
      classification: "BLOCKED_G2_A1_OWNER_REVIEW_BATCH_001_PACK",
      errors,
    };
  }

  const proof = {
    classification: "G2_A1_OWNER_REVIEW_BATCH_001_PACK_READY",
    pass: true,
    batchId: BATCH_ID,
    ownerAuthorization: "G2_A1_OWNER_REVIEW_BATCH_001_PACK_PREPARATION_APPROVED",
    sourceHash: batch.sourceHash,
    findingCountTotal: EXPECTED_FINDING_COUNT,
    batchDecisionTargetCount: batch.decisionTargetCount,
    batchFindingCount: batch.findingCount,
    sourceClusterCount: batch.sourceClusterCount,
    reviewTrack: batch.reviewTrack,
    canonicalReviewBucket: batch.canonicalReviewBucket,
    memberFindingIds: batch.memberFindingIds,
    decisionTargetKeys: batch.decisionTargetKeys,
    sourceClusterIds: batch.sourceClusterIds,
    ownerStatuses: ["PENDING"],
    automaticOwnerDecisions: 0,
    newLunaCalls: 0,
    productionChanged: false,
    lvSourceChanged: false,
    deReferenceChanged: false,
    crowdinStagingChanged: false,
    mainBaseSha: execSync("git rev-parse origin/main", { cwd: root, encoding: "utf8" }).trim(),
    sourceArtifacts: Object.fromEntries(
      Object.entries(SOURCE_PATHS).map(([key, relPath]) => [key, { path: relPath, sha256: sha256File(relPath) }]),
    ),
    nextStep: "OWNER_FILL_BATCH_001_DECISIONS",
  };

  proof.outputHash = sha256Hex(
    JSON.stringify({
      batchId: proof.batchId,
      sourceHash: proof.sourceHash,
      memberFindingIds: proof.memberFindingIds,
      decisionTargetKeys: proof.decisionTargetKeys,
    }),
  );

  writeReportAtomic(OUT_VIEW, buildViewMarkdown(batch, rows));
  writeReportAtomic(OUT_DECISIONS, buildDecisionsMarkdown(batch, rows));
  writeReportAtomic(OUT_CSV, buildCsv(rows));
  writeReportAtomic(OUT_PROOF, JSON.stringify(proof, null, 2));

  return {
    pass: true,
    classification: proof.classification,
    proof,
    files: {
      view: path.relative(root, OUT_VIEW),
      decisions: path.relative(root, OUT_DECISIONS),
      csv: path.relative(root, OUT_CSV),
      proof: path.relative(root, OUT_PROOF),
    },
  };
}

function main() {
  const result = prepareBatch001({ root: ROOT });
  console.log(JSON.stringify(result, null, 2));
  if (!result.pass) process.exit(1);
}

if (require.main === module) {
  main();
}

module.exports = {
  BATCH_ID,
  MULTI_VALUE_DELIM,
  SOURCE_PATHS,
  prepareBatch001,
  resolveFieldContext,
  buildDecisionRow,
};
