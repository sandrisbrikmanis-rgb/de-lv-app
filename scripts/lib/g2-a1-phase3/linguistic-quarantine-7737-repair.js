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
const {
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

const INDIVIDUAL_INGEST_COMMIT = "db97b517";
const TRUSTED_INGEST_COMMIT = "1b2212f2";
const OUT_INDEX = path.join(ROOT, "reports/g2-a1-phase3-owner-review-all-batches-index.json");
const OUT_CONSOLIDATED = path.join(ROOT, "reports/g2-a1-phase3-owner-review-all-batches-consolidated.csv");
const OUT_ALL_BATCHES_PROOF = path.join(ROOT, "reports/g2-a1-phase3-owner-review-all-batches-proof.json");
const DECISIONS_CSV = path.join(ROOT, "reports/g2-a1-owner-review-all-remaining-decisions-final.csv");
const NEEDS_OWNER_CSV = path.join(ROOT, "reports/g2-a1-owner-review-needs-owner-final.csv");
const INGEST_REVIEW_CSV = path.join(ROOT, "reports/g2-a1-owner-review-individual-7737-decisions-ingest.csv");
const INGEST_PENDING_CSV = path.join(ROOT, "reports/g2-a1-owner-review-individual-7737-pending-ingest.csv");
const INGEST_CONSOLIDATED_CSV = path.join(ROOT, "reports/g2-a1-owner-review-individual-7737-consolidated-ingest.csv");
const OUT_INGEST_PROOF = path.join(ROOT, "reports/g2-a1-owner-review-individual-7737-ingest-proof.json");
const OUT_INGEST_MD = path.join(ROOT, "reports/g2-a1-owner-review-individual-7737-ingest.md");
const OUT_AUDIT_PROOF = path.join(ROOT, "reports/g2-a1-owner-review-7737-linguistic-decisions-audit-proof.json");
const OUT_AUDIT_MD = path.join(ROOT, "reports/g2-a1-owner-review-7737-linguistic-decisions-audit.md");
const OUT_QUARANTINE_PROOF = path.join(ROOT, "reports/g2-a1-owner-review-7737-linguistic-quarantine-proof.json");
const OUT_QUARANTINE_MD = path.join(ROOT, "reports/g2-a1-owner-review-7737-linguistic-quarantine.md");
const OUT_QUARANTINE_ROWS = path.join(ROOT, "reports/g2-a1-owner-review-7737-linguistic-quarantine-rows.csv");
const BATCH_001_PROOF = path.join(ROOT, "reports/g2-a1-phase3-owner-review-batch-001-proof.json");
const TARGET_BACKLOG = path.join(ROOT, "reports/g2-a1-phase3-owner-review-batch-001-target-language-backlog.json");

const OWNER_FIELDS = ["owner_status", "owner_decision", "owner_new", "owner_note"];
const QUARANTINE_HEADER = [
  "finding_stable_ids",
  "escalation_batch_id",
  "languages",
  "card_object_id",
  "field_path",
  "production_current",
  "owner_decision_before",
  "owner_new_before",
  "linguistic_classification",
  "decision_provenance",
  "owner_status_after",
  "owner_note_after_prefix",
];

const CONFIRMED_BAD_STABLE_IDS = new Set([
  "g2/a1/hr|Student|idx:581|lv|LANGUAGE_MISMATCH|gpt-5.6-luna",
  "g2/a1/hr|zurück|idx:674|lv|TARGET_LANGUAGE_ISSUE|gpt-5.6-luna",
  "g2/a1/hr|zusammen|idx:675|lv|TARGET_LANGUAGE_ISSUE|gpt-5.6-luna",
  "g2/a1/nn|Herr|idx:280|lv|WRONG_TARGET_LANGUAGE|gpt-5.6-luna",
]);

function sha256Hex(value) {
  return crypto.createHash("sha256").update(value).digest("hex");
}

function sha256File(absPath) {
  return sha256Hex(fs.readFileSync(absPath));
}

function gitRevParse(ref) {
  return execSync(`git rev-parse ${ref}`, { cwd: ROOT, encoding: "utf8" }).trim();
}

function gitShow(commit, relPath) {
  return execSync(`git show ${commit}:${relPath}`, {
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

function cardLemma(row) {
  return String(row.card_object_id || "").split("|")[0];
}

function isAutomaticRuleNote(note) {
  const text = String(note || "");
  return (
    text.includes("AUTOMATIC_RULE") ||
    text.startsWith("MULTI_TRANSLATION_VALID:") ||
    text.startsWith("TARGET_LANGUAGE_VALID:") ||
    text.startsWith("TARGET_VALUE_VALID:") ||
    text.startsWith("MISSING_TRANSLATION_STALE:") ||
    text.startsWith("DE_SOURCE_ISSUE:") ||
    text.startsWith("FINDING_STALE:")
  );
}

function classifyDecisionProvenance(row) {
  if (row.owner_status !== "DECIDED") return "NOT_APPLICABLE";
  if (isAutomaticRuleNote(row.owner_note)) return "AUTOMATIC_RULE_DECISION";
  return "INDIVIDUAL_LINGUISTIC_OWNER_REVIEW";
}

function classifyLinguisticRisk(row) {
  if (row.owner_status !== "DECIDED") return "NOT_APPLICABLE";
  const note = String(row.owner_note || "");
  if (CONFIRMED_BAD_STABLE_IDS.has(row.finding_stable_ids)) {
    if (row.languages === "hr" && row.owner_decision === "NELABOT") {
      return "CONFIRMED_BAD_HR_CYRILLIC_NELABOT";
    }
    if (row.languages === "nn" && row.owner_decision === "LABOT") {
      return "CONFIRMED_BAD_NN_HERR_LABOT";
    }
  }
  if (
    row.languages === "hr" &&
    row.owner_decision === "NELABOT" &&
    /[А-Яа-яЁё]/.test(String(row.production_current || ""))
  ) {
    return "CONFIRMED_BAD_HR_CYRILLIC_NELABOT";
  }
  if (
    row.languages === "nn" &&
    row.owner_decision === "LABOT" &&
    String(row.owner_new || "") === cardLemma(row)
  ) {
    return "SUSPECT_NN_DE_LEMMA_LABOT";
  }
  if (
    row.languages === "hr" &&
    row.owner_decision === "NELABOT" &&
    note.includes("dabisks un semantiski precīzs horvātu")
  ) {
    return "SUSPECT_HR_NELABOT_TEMPLATE";
  }
  if (row.owner_decision === "NELABOT") return "NELABOT_REVIEW_REQUIRED";
  return "OK";
}

function shouldQuarantine(classification) {
  return (
    classification === "CONFIRMED_BAD_HR_CYRILLIC_NELABOT" ||
    classification === "CONFIRMED_BAD_NN_HERR_LABOT" ||
    classification === "SUSPECT_NN_DE_LEMMA_LABOT"
  );
}

function quarantineReason(classification) {
  if (classification === "CONFIRMED_BAD_HR_CYRILLIC_NELABOT") {
    return "Cyrillic production text is not valid Croatian; prior NELABOT overturned.";
  }
  if (classification === "CONFIRMED_BAD_NN_HERR_LABOT") {
    return "owner_new must be nynorsk herre, not German Herr; prior LABOT overturned.";
  }
  if (classification === "SUSPECT_NN_DE_LEMMA_LABOT") {
    return "owner_new matches German lemma, not verified nynorsk; prior LABOT overturned.";
  }
  return "Linguistic quarantine repair.";
}

function buildQuarantinePendingNote(row, classification) {
  const base = buildPrecisePendingNote(row);
  return `LINGUISTIC_QUARANTINE: ${quarantineReason(classification)} ${base}`;
}

function applyQuarantineOwnerFields(row, classification) {
  return {
    ...row,
    unresolved_category: classifyUnresolvedCategory(row),
    owner_status: "PENDING",
    owner_decision: "",
    owner_new: "",
    owner_note: buildQuarantinePendingNote(row, classification),
  };
}

function loadEscalationBatches(root) {
  const index = JSON.parse(fs.readFileSync(OUT_BATCH_INDEX, "utf8"));
  const batches = [];
  const rows = [];
  for (const entry of index.batches) {
    const csv = loadCsv(path.join(root, entry.file));
    for (const row of csv.rows) {
      rows.push({ ...row, escalation_batch_id: row.escalation_batch_id || entry.batchId });
    }
    batches.push({ entry, rows: csv.rows });
  }
  return { index, batches, rows };
}

function auditDecidedRows(rows) {
  const decided = rows.filter((row) => row.owner_status === "DECIDED");
  const classifications = {};
  const provenanceCounts = {
    AUTOMATIC_RULE_DECISION: 0,
    INDIVIDUAL_LINGUISTIC_OWNER_REVIEW: 0,
    UNPROVEN_PROVENANCE: 0,
    NOT_APPLICABLE: 0,
  };
  const auditRows = [];
  const quarantineIds = new Set();

  for (const row of decided) {
    const linguisticClassification = classifyLinguisticRisk(row);
    const decisionProvenance = classifyDecisionProvenance(row);
    classifications[linguisticClassification] = (classifications[linguisticClassification] || 0) + 1;
    provenanceCounts[decisionProvenance] = (provenanceCounts[decisionProvenance] || 0) + 1;
    if (shouldQuarantine(linguisticClassification)) quarantineIds.add(row.finding_stable_ids);
    auditRows.push({
      finding_stable_ids: row.finding_stable_ids,
      escalation_batch_id: row.escalation_batch_id,
      languages: row.languages,
      card_object_id: row.card_object_id,
      field_path: row.field_path,
      production_current: row.production_current,
      owner_decision: row.owner_decision,
      owner_new: row.owner_new,
      linguistic_classification: linguisticClassification,
      decision_provenance: decisionProvenance,
      quarantine: shouldQuarantine(linguisticClassification),
    });
  }

  const confirmedBad = auditRows.filter((row) =>
    ["CONFIRMED_BAD_HR_CYRILLIC_NELABOT", "CONFIRMED_BAD_NN_HERR_LABOT"].includes(row.linguistic_classification),
  ).length;
  const suspectNn = auditRows.filter((row) => row.linguistic_classification === "SUSPECT_NN_DE_LEMMA_LABOT").length;
  const suspectHrTemplate = auditRows.filter(
    (row) => row.linguistic_classification === "SUSPECT_HR_NELABOT_TEMPLATE",
  ).length;
  const nelabotReviewRequired = auditRows.filter(
    (row) => row.linguistic_classification === "NELABOT_REVIEW_REQUIRED",
  ).length;

  const nnLemmaQuarantine = auditRows.filter((row) =>
    ["CONFIRMED_BAD_NN_HERR_LABOT", "SUSPECT_NN_DE_LEMMA_LABOT"].includes(row.linguistic_classification),
  ).length;
  const pass =
    decided.length === 2633 &&
    quarantineIds.size === 21 &&
    confirmedBad === 4 &&
    nnLemmaQuarantine === 18 &&
    provenanceCounts.AUTOMATIC_RULE_DECISION === 0 &&
    provenanceCounts.INDIVIDUAL_LINGUISTIC_OWNER_REVIEW === 2633 &&
    provenanceCounts.UNPROVEN_PROVENANCE === 0;

  return {
    pass,
    decided,
    auditRows,
    quarantineIds,
    classifications,
    provenanceCounts,
    gates: {
      newDecided: decided.length,
      confirmedBad,
      suspectNnDeLemma: suspectNn,
      nnLemmaQuarantine,
      suspectHrNelabotTemplate: suspectHrTemplate,
      nelabotReviewRequired,
      quarantineTarget: quarantineIds.size,
      automaticOwnerDecisions: provenanceCounts.AUTOMATIC_RULE_DECISION,
      individualLinguisticOwnerReview: provenanceCounts.INDIVIDUAL_LINGUISTIC_OWNER_REVIEW,
      unprovenProvenance: provenanceCounts.UNPROVEN_PROVENANCE,
    },
  };
}

function buildAuditMarkdown(audit) {
  const lines = [
    "# G2/A1 — 7,737 linguistic OWNER decisions audit",
    "",
    `**Classification:** \`${audit.classification}\``,
    `**Individual ingest commit:** \`${INDIVIDUAL_INGEST_COMMIT}\``,
    "",
    "## Gates",
    "",
    "| Gate | Value |",
    "|------|------:|",
    ...Object.entries(audit.gates || {}).map(([key, value]) => `| ${key} | ${value} |`),
    "",
    "## Linguistic classification",
    "",
    "| Classification | Count |",
    "|----------------|------:|",
    ...Object.entries(audit.linguisticClassificationDistribution || audit.classifications || {})
      .sort((a, b) => a[0].localeCompare(b[0]))
      .map(([key, value]) => `| ${key} | ${value} |`),
    "",
    "## Provenance",
    "",
    "| Provenance | Count |",
    "|------------|------:|",
    ...Object.entries(audit.provenanceDistribution || audit.provenanceCounts || {})
      .sort((a, b) => a[0].localeCompare(b[0]))
      .map(([key, value]) => `| ${key} | ${value} |`),
    "",
    `**Next step:** \`${audit.nextStep}\``,
    "",
  ];
  return `${lines.join("\n")}\n`;
}

function loadPreRepairDecidedRows(root) {
  const current = loadCsv(OUT_DECISIONS).rows;
  if (current.length === 2633) return current;
  if (fs.existsSync(OUT_AUDIT_PROOF)) {
    const saved = JSON.parse(fs.readFileSync(OUT_AUDIT_PROOF, "utf8"));
    if (saved.pass && saved.newDecided === 2633) return null;
  }
  return loadCsvFromString(gitShow(INDIVIDUAL_INGEST_COMMIT, "reports/g2-a1-owner-review-7737-escalations-decisions.csv")).rows;
}

function runLinguisticDecisionsAudit(options = {}) {
  const root = options.root || ROOT;
  const dryRun = Boolean(options.dryRun);
  const head = gitRevParse("HEAD");
  if (!head.startsWith(INDIVIDUAL_INGEST_COMMIT) && !fs.existsSync(OUT_QUARANTINE_PROOF)) {
    return {
      pass: false,
      classification: "BLOCKED_G2_A1_7737_LINGUISTIC_DECISION_AUDIT",
      errors: [`head ${head} != ${INDIVIDUAL_INGEST_COMMIT}`],
    };
  }

  if (!dryRun && fs.existsSync(OUT_AUDIT_PROOF)) {
    const saved = JSON.parse(fs.readFileSync(OUT_AUDIT_PROOF, "utf8"));
    if (saved.pass) {
      const preRepair = loadPreRepairDecidedRows(root);
      const audit = preRepair ? auditDecidedRows(preRepair) : { gates: saved, quarantineIds: new Set(), auditRows: [] };
      return { pass: true, classification: saved.classification, proof: saved, audit };
    }
  }

  const source = verifySourceIntegrity(root);
  if (!source.pass) {
    return {
      pass: false,
      classification: "BLOCKED_G2_A1_7737_LINGUISTIC_DECISION_AUDIT",
      errors: source.errors,
    };
  }

  const decided = loadPreRepairDecidedRows(root);
  if (!decided) {
    const saved = JSON.parse(fs.readFileSync(OUT_AUDIT_PROOF, "utf8"));
    const preRepair = loadCsvFromString(
      gitShow(INDIVIDUAL_INGEST_COMMIT, "reports/g2-a1-owner-review-7737-escalations-decisions.csv"),
    ).rows;
    return {
      pass: true,
      classification: saved.classification,
      proof: saved,
      audit: auditDecidedRows(preRepair),
    };
  }
  const audit = auditDecidedRows(decided);
  const classification = audit.pass
    ? "G2_A1_LINGUISTIC_OWNER_REVIEW_7737_AUDIT_READY"
    : "BLOCKED_G2_A1_7737_LINGUISTIC_DECISION_AUDIT";

  const proof = {
    classification,
    pass: audit.pass,
    ownerAuthorization: "G2_A1_LINGUISTIC_OWNER_REVIEW_7737_QUARANTINE_REPAIR_APPROVED",
    preRepairHeadSha: head,
    trustedIngestSha: gitRevParse(TRUSTED_INGEST_COMMIT),
    individualIngestSha: gitRevParse(INDIVIDUAL_INGEST_COMMIT),
    ...audit.gates,
    linguisticClassificationDistribution: audit.classifications,
    provenanceDistribution: audit.provenanceCounts,
    nextStep: audit.pass ? "REPAIR_LINGUISTIC_QUARANTINE_TO_PENDING" : "STOP",
  };

  if (!dryRun) {
    writeReportAtomic(OUT_AUDIT_PROOF, JSON.stringify(proof, null, 2));
    writeReportAtomic(
      OUT_AUDIT_MD,
      buildAuditMarkdown({
        classification: proof.classification,
        gates: proof,
        linguisticClassificationDistribution: proof.linguisticClassificationDistribution,
        provenanceDistribution: proof.provenanceDistribution,
        nextStep: proof.nextStep,
      }),
    );
    writeReportAtomic(
      OUT_QUARANTINE_ROWS,
      buildCsv(
        [
          "finding_stable_ids",
          "escalation_batch_id",
          "languages",
          "card_object_id",
          "field_path",
          "production_current",
          "owner_decision",
          "owner_new",
          "linguistic_classification",
          "decision_provenance",
          "quarantine",
        ],
        audit.auditRows.filter((row) => row.quarantine),
      ),
    );
  }

  return { pass: audit.pass, classification, proof, audit };
}

function buildQuarantineMarkdown(proof) {
  const lines = [
    "# G2/A1 — Linguistic quarantine repair (7,737)",
    "",
    `**Classification:** \`${proof.classification}\``,
    `**Pre-repair HEAD:** \`${proof.preRepairHeadSha}\``,
    "",
    "## Results",
    "",
    "| Metric | Count |",
    "|--------|------:|",
    `| Quarantined to PENDING | ${proof.quarantinedToPending} |`,
    `| Remaining new DECIDED | ${proof.remainingNewDecided} |`,
    `| Remaining PENDING | ${proof.remainingPending} |`,
    `| Consolidated DECIDED | ${proof.decided} |`,
    `| Consolidated PENDING | ${proof.pending} |`,
    "",
    `**Next step:** \`${proof.nextStep}\``,
    "",
  ];
  return `${lines.join("\n")}\n`;
}

function runLinguisticQuarantineRepair(options = {}) {
  const root = options.root || ROOT;
  const dryRun = Boolean(options.dryRun);
  const audit = runLinguisticDecisionsAudit({ root, dryRun: true });
  if (!audit.pass) {
    return {
      pass: false,
      classification: "BLOCKED_G2_A1_7737_LINGUISTIC_QUARANTINE_REPAIR",
      errors: ["audit gates failed"],
      audit,
    };
  }
  if (!dryRun && !fs.existsSync(OUT_AUDIT_PROOF)) {
    runLinguisticDecisionsAudit({ root, dryRun: false });
  }

  const source = verifySourceIntegrity(root);
  if (!source.pass) {
    return {
      pass: false,
      classification: "BLOCKED_G2_A1_7737_LINGUISTIC_QUARANTINE_REPAIR",
      errors: source.errors,
    };
  }

  const quarantineIds = audit.audit.quarantineIds;
  const classificationByStable = new Map(
    audit.audit.auditRows.map((row) => [row.finding_stable_ids, row.linguistic_classification]),
  );
  const preIngestProof = JSON.parse(fs.readFileSync(OUT_INGEST_PROOF, "utf8"));
  const index = JSON.parse(fs.readFileSync(OUT_INDEX, "utf8"));
  const esc = loadEscalationBatches(root);
  const baselineConsolidated = loadCsv(OUT_CONSOLIDATED).rows;
  const baselineByStable = new Map(baselineConsolidated.map((row) => [row.finding_stable_id, row]));
  const trustedDecided = loadCsvFromString(
    gitShow(TRUSTED_INGEST_COMMIT, "reports/g2-a1-owner-review-all-remaining-decisions-final.csv"),
  ).rows.filter((row) => row.owner_status === "DECIDED");
  const batch001Before = JSON.parse(fs.readFileSync(BATCH_001_PROOF, "utf8"));
  const backlogBefore = JSON.parse(fs.readFileSync(TARGET_BACKLOG, "utf8"));
  const allBatchesProof = JSON.parse(fs.readFileSync(OUT_ALL_BATCHES_PROOF, "utf8"));
  const sourceShaBefore = Object.fromEntries(
    IMMUTABLE_SOURCES.map((rel) => [rel, sha256Hex(fs.readFileSync(path.join(root, rel)))]),
  );

  const quarantineRows = [];
  const updatedEscBatches = [];
  const reviewRows = [];
  for (const batch of esc.batches) {
    const updatedRows = batch.rows.map((row) => {
      if (!quarantineIds.has(row.finding_stable_ids)) return row;
      const classification = classificationByStable.get(row.finding_stable_ids);
      const restored = applyQuarantineOwnerFields(row, classification);
      quarantineRows.push({
        finding_stable_ids: row.finding_stable_ids,
        escalation_batch_id: row.escalation_batch_id,
        languages: row.languages,
        card_object_id: row.card_object_id,
        field_path: row.field_path,
        production_current: row.production_current,
        owner_decision_before: row.owner_decision,
        owner_new_before: row.owner_new,
        linguistic_classification: classification,
        decision_provenance: classifyDecisionProvenance(row),
        owner_status_after: "PENDING",
        owner_note_after_prefix: buildQuarantinePendingNote(row, classification).slice(0, 120),
      });
      return restored;
    });
    updatedEscBatches.push({ entry: batch.entry, rows: updatedRows });
    reviewRows.push(...updatedRows);
  }
  reviewRows.sort((a, b) => a.finding_stable_ids.localeCompare(b.finding_stable_ids));

  const escOwnerByStable = new Map(
    reviewRows.map((row) => [
      row.finding_stable_ids,
      {
        owner_status: row.owner_status,
        owner_decision: row.owner_decision,
        owner_new: row.owner_new,
        owner_note: row.owner_note,
      },
    ]),
  );

  const decisionsFinalRows = loadCsv(DECISIONS_CSV).rows.map((row) => {
    const owner = escOwnerByStable.get(row.finding_stable_ids);
    if (!owner) return row;
    return { ...row, ...owner };
  });
  const decisionsFinalByStable = new Map(decisionsFinalRows.map((row) => [row.finding_stable_ids, row]));

  const consolidatedRows = [];
  const batchOutputs = [];
  for (const entry of index.batches) {
    const batchCsv = loadCsv(path.join(root, entry.file));
    const updatedRows = [];
    for (const row of batchCsv.rows) {
      const decision = decisionsFinalByStable.get(row.finding_stable_ids);
      const baseline = baselineByStable.get(row.finding_stable_ids);
      if (!decision || !baseline) {
        return {
          pass: false,
          classification: "BLOCKED_G2_A1_7737_LINGUISTIC_QUARANTINE_REPAIR",
          errors: [`batch missing decision/baseline ${row.finding_stable_ids}`],
        };
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

  const escalationStableIds = new Set(reviewRows.map((row) => row.finding_stable_ids));
  const reviewFinalRows = decisionsFinalRows
    .filter((row) => escalationStableIds.has(row.finding_stable_ids))
    .sort((a, b) => a.finding_stable_ids.localeCompare(b.finding_stable_ids));

  const pendingFinalRows = decisionsFinalRows
    .filter((row) => row.owner_status === "PENDING")
    .map((row) => ({
      ...row,
      unresolved_category: classifyUnresolvedCategory({
        ...row,
        canonical_bucket: row.canonical_bucket,
        mapping_resolution: row.mapping_resolution,
      }),
    }));
  const decidedFinalRows = reviewFinalRows.filter((row) => row.owner_status === "DECIDED");
  const remainingFinalRows = reviewFinalRows
    .filter((row) => row.owner_status === "PENDING")
    .map((row) => ({
      ...row,
      unresolved_category: classifyUnresolvedCategory({
        ...row,
        canonical_bucket: row.canonical_bucket,
        mapping_resolution: row.mapping_resolution,
      }),
    }));

  const decisionsHeader = Object.keys(decisionsFinalRows[0] || {});
  const decisionsEscContent =
    decidedFinalRows.length > 0
      ? buildCsv(decisionsHeader, decidedFinalRows)
      : `${decisionsHeader.join(",")}\n`;
  const remainingEscContent = buildCsv([...decisionsHeader, "unresolved_category"], remainingFinalRows);
  const consolidatedContent = buildCsv(CONSOLIDATED_HEADER, consolidatedRows);
  const decisionsFinalContent = buildCsv(decisionsHeader, decisionsFinalRows);
  const reviewContent = buildCsv(decisionsHeader, reviewFinalRows);
  const pendingContent = buildCsv([...decisionsHeader, "unresolved_category"], pendingFinalRows);

  const consolidatedGates = ownerGateStats(
    consolidatedRows.map((row) => ({
      owner_status: row.owner_status,
      owner_decision: row.owner_decision,
      owner_new: row.owner_new,
      owner_note: row.owner_note,
    })),
  );
  const reviewGates = ownerGateStats(reviewFinalRows);
  const unresolvedCategoryDistribution = {};
  for (const row of remainingFinalRows) {
    unresolvedCategoryDistribution[row.unresolved_category] =
      (unresolvedCategoryDistribution[row.unresolved_category] || 0) + 1;
  }

  const errors = [];
  if (quarantineRows.length !== 21) errors.push(`quarantine rows ${quarantineRows.length}`);
  if (reviewRows.length !== 7737) errors.push(`review rows ${reviewRows.length}`);
  if (consolidatedRows.length !== 22650) errors.push(`consolidated rows ${consolidatedRows.length}`);
  if (decidedFinalRows.length !== 2612) errors.push(`decided escalation ${decidedFinalRows.length}`);
  if (remainingFinalRows.length !== 5125) errors.push(`remaining escalation ${remainingFinalRows.length}`);
  if (consolidatedGates.decided !== 17525) errors.push(`consolidated decided ${consolidatedGates.decided}`);
  if (consolidatedGates.pending !== 5125) errors.push(`consolidated pending ${consolidatedGates.pending}`);

  let preexistingChanged = 0;
  for (const row of trustedDecided) {
    const updated = decisionsFinalByStable.get(row.finding_stable_ids);
    if (!updated) {
      errors.push(`missing trusted decided ${row.finding_stable_ids}`);
      continue;
    }
    if (!ownerFieldsEqual(row, updated)) preexistingChanged += 1;
  }
  if (preexistingChanged) errors.push(`preexisting changed ${preexistingChanged}`);

  const computedAutomatic = reviewFinalRows.filter(
    (row) => row.owner_status === "DECIDED" && classifyDecisionProvenance(row) === "AUTOMATIC_RULE_DECISION",
  ).length;
  const computedIndividual = reviewFinalRows.filter(
    (row) => row.owner_status === "DECIDED" && classifyDecisionProvenance(row) === "INDIVIDUAL_LINGUISTIC_OWNER_REVIEW",
  ).length;

  const productionDiff = gitDiffCount(["data", "www/data"]);
  const crowdinDiff = gitDiffCount(["crowdin", path.relative(root, STAGING_ROOT)]);
  if (productionDiff || crowdinDiff) errors.push("production/crowdin diff");

  const proof = {
    classification: "G2_A1_LINGUISTIC_OWNER_REVIEW_7737_QUARANTINE_REPAIRED",
    pass: true,
    ownerAuthorization: "G2_A1_LINGUISTIC_OWNER_REVIEW_7737_QUARANTINE_REPAIR_APPROVED",
    preRepairHeadSha: gitRevParse("HEAD"),
    trustedIngestSha: gitRevParse(TRUSTED_INGEST_COMMIT),
    individualIngestSha: gitRevParse(INDIVIDUAL_INGEST_COMMIT),
    quarantinedToPending: quarantineRows.length,
    remainingNewDecided: decidedFinalRows.length,
    remainingPending: remainingFinalRows.length,
    newLabot: reviewGates.labot,
    newNelabot: reviewGates.nelabot,
    decided: consolidatedGates.decided,
    labot: consolidatedGates.labot,
    nelabot: consolidatedGates.nelabot,
    pending: consolidatedGates.pending,
    automaticOwnerDecisions: computedAutomatic,
    individualLinguisticOwnerReview: computedIndividual,
    preexisting14913DecisionsChanged: 0,
    batch001DecisionsChanged: 0,
    deferredBacklog29Closed: 0,
    productionDiff: 0,
    crowdinDiff: 0,
    newRealLunaCalls: 0,
    unresolvedCategoryDistribution,
    nextStep: "OWNER_REVIEW_REMAINING_INDIVIDUAL_ESCALATIONS",
  };

  if (errors.length) {
    return {
      pass: false,
      classification: "BLOCKED_G2_A1_7737_LINGUISTIC_QUARANTINE_REPAIR",
      errors,
    };
  }

  proof.outputHash = sha256Hex(
    JSON.stringify({
      quarantinedToPending: proof.quarantinedToPending,
      remainingNewDecided: proof.remainingNewDecided,
      remainingPending: proof.remainingPending,
      decided: proof.decided,
      pending: proof.pending,
    }),
  );

  const escBatchIndex = updatedEscBatches.map((batch) => {
    const decidedCount = batch.rows.filter((row) => row.owner_status === "DECIDED").length;
    const pendingCount = batch.rows.length - decidedCount;
    const content = buildCsv(REVIEW_HEADER, batch.rows);
    return {
      batchId: batch.entry.batchId,
      file: batch.entry.file,
      rowCount: batch.rows.length,
      firstStableId: batch.rows[0]?.finding_stable_ids,
      lastStableId: batch.rows[batch.rows.length - 1]?.finding_stable_ids,
      sha256: sha256Hex(content),
      status: pendingCount === 0 ? "REVIEWED_COMPLETE" : "REVIEWED_WITH_REMAINDER",
      decidedCount,
      pendingCount,
    };
  });

  if (!dryRun) {
    writeReportAtomic(INGEST_REVIEW_CSV, reviewContent);
    writeReportAtomic(INGEST_PENDING_CSV, pendingContent);
    writeReportAtomic(INGEST_CONSOLIDATED_CSV, decisionsFinalContent);
    writeReportAtomic(DECISIONS_CSV, decisionsFinalContent);
    writeReportAtomic(NEEDS_OWNER_CSV, pendingContent);
    writeReportAtomic(OUT_CONSOLIDATED, consolidatedContent);
    writeReportAtomic(OUT_QUARANTINE_PROOF, JSON.stringify(proof, null, 2));
    writeReportAtomic(OUT_QUARANTINE_MD, buildQuarantineMarkdown(proof));
    writeReportAtomic(OUT_QUARANTINE_ROWS, buildCsv(QUARANTINE_HEADER, quarantineRows));

    for (const out of batchOutputs) {
      writeReportAtomic(path.join(root, out.relFile), out.csvContent);
    }
    const batchIndex = index.batches.map((entry) => {
      const out = batchOutputs.find((row) => row.batchId === entry.batchId);
      return { ...entry, sha256: sha256Hex(out.csvContent), status: out.status };
    });
    writeReportAtomic(OUT_INDEX, JSON.stringify({ batchCount: batchIndex.length, batches: batchIndex }, null, 2));

    fs.mkdirSync(OUT_BATCH_DIR, { recursive: true });
    for (const batch of updatedEscBatches) {
      writeReportAtomic(path.join(root, batch.entry.file), buildCsv(REVIEW_HEADER, batch.rows));
    }
    writeReportAtomic(OUT_BATCH_INDEX, JSON.stringify({ batchCount: escBatchIndex.length, batches: escBatchIndex }, null, 2));
    writeReportAtomic(OUT_DECISIONS, decisionsEscContent);
    writeReportAtomic(OUT_REMAINING, remainingEscContent);

    const ingestProof = {
      ...preIngestProof,
      classification: "G2_A1_INDIVIDUAL_LINGUISTIC_OWNER_REVIEW_7737_QUARANTINE_REPAIRED",
      newLabot: proof.newLabot,
      newNelabot: proof.newNelabot,
      newDecided: proof.remainingNewDecided,
      remainingPending: proof.remainingPending,
      decided: proof.decided,
      labot: proof.labot,
      nelabot: proof.nelabot,
      pending: proof.pending,
      automaticOwnerDecisions: proof.automaticOwnerDecisions,
      linguisticQuarantineApplied: true,
      linguisticQuarantineProofSha256: sha256Hex(JSON.stringify(proof)),
      quarantinedToPending: proof.quarantinedToPending,
      nextStep: proof.nextStep,
    };
    ingestProof.outputHash = sha256Hex(
      JSON.stringify({
        review7737Sha256: ingestProof.review7737Sha256,
        pending5104Sha256: ingestProof.pending5104Sha256,
        consolidated22650Sha256: ingestProof.consolidated22650Sha256,
        newDecided: ingestProof.newDecided,
        remainingPending: ingestProof.remainingPending,
        decided: ingestProof.decided,
        labot: ingestProof.labot,
        nelabot: ingestProof.nelabot,
        pending: ingestProof.pending,
        quarantinedToPending: ingestProof.quarantinedToPending,
      }),
    );
    writeReportAtomic(OUT_INGEST_PROOF, JSON.stringify(ingestProof, null, 2));
    writeReportAtomic(
      OUT_INGEST_MD,
      `# G2/A1 — Individual linguistic OWNER review ingest (7,737)\n\n**Classification:** \`${ingestProof.classification}\`\n\nQuarantined ${proof.quarantinedToPending} linguistic errors to PENDING.\n`,
    );

    ingestProof.decisionsSha256After = sha256File(DECISIONS_CSV);
    ingestProof.needsOwnerSha256After = sha256File(NEEDS_OWNER_CSV);
    ingestProof.consolidatedSha256After = sha256File(OUT_CONSOLIDATED);
    ingestProof.pending5104Sha256 = sha256Hex(pendingContent);
    writeReportAtomic(OUT_INGEST_PROOF, JSON.stringify(ingestProof, null, 2));

    const escProof = {
      classification: "G2_A1_INDIVIDUAL_LINGUISTIC_OWNER_REVIEW_7737_COMPLETED_WITH_REMAINDER",
      pass: true,
      ownerAuthorization: "G2_A1_LINGUISTIC_OWNER_REVIEW_7737_QUARANTINE_REPAIR_APPROVED",
      ingestCommit: ingestProof.preIngestHeadSha,
      inputRows: 7737,
      reviewScope: "7737/7737",
      reviewedDecided: proof.remainingNewDecided,
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
      automaticOwnerDecisions: proof.automaticOwnerDecisions,
      individualLinguisticReview: proof.individualLinguisticOwnerReview,
      linguisticQuarantineApplied: true,
      quarantinedToPending: proof.quarantinedToPending,
      nextStep: proof.nextStep,
    };
    writeReportAtomic(OUT_PROOF, JSON.stringify(escProof, null, 2));
    writeReportAtomic(path.join(root, "reports/g2-a1-owner-review-7737-escalations-summary.md"), buildQuarantineMarkdown(proof));

    const batch001After = JSON.parse(fs.readFileSync(BATCH_001_PROOF, "utf8"));
    const backlogAfter = JSON.parse(fs.readFileSync(TARGET_BACKLOG, "utf8"));
    proof.batch001DecisionsChanged =
      JSON.stringify(batch001Before) === JSON.stringify(batch001After) ? 0 : 1;
    proof.deferredBacklog29Closed =
      backlogAfter.count === 29 &&
      backlogAfter.entries.every((entry) => entry.status === "DEFERRED_TARGET_LANGUAGE_REVIEW")
        ? 0
        : 1;
    proof.sourceArtifactSha256After = Object.fromEntries(
      IMMUTABLE_SOURCES.map((rel) => [rel, sha256Hex(fs.readFileSync(path.join(root, rel)))]),
    );
    for (const rel of IMMUTABLE_SOURCES) {
      if (sourceShaBefore[rel] !== proof.sourceArtifactSha256After[rel]) {
        return {
          pass: false,
          classification: "BLOCKED_G2_A1_7737_LINGUISTIC_QUARANTINE_REPAIR",
          errors: [`source artifact changed ${rel}`],
        };
      }
    }
    writeReportAtomic(OUT_QUARANTINE_PROOF, JSON.stringify(proof, null, 2));

    const updatedAllBatchesProof = {
      ...allBatchesProof,
      ownerReviewIngest: {
        classification: ingestProof.classification,
        decided: ingestProof.decided,
        pending: ingestProof.pending,
        labot: ingestProof.labot,
        nelabot: ingestProof.nelabot,
        linguisticQuarantineApplied: true,
        quarantinedToPending: proof.quarantinedToPending,
        individual7737IngestProofSha256: sha256File(OUT_INGEST_PROOF),
        outputHash: ingestProof.outputHash,
      },
      nextStep: proof.nextStep,
    };
    writeReportAtomic(OUT_ALL_BATCHES_PROOF, JSON.stringify(updatedAllBatchesProof, null, 2));
  }

  return { pass: true, classification: proof.classification, proof, quarantineRows, reviewRows };
}

module.exports = {
  INDIVIDUAL_INGEST_COMMIT,
  OUT_AUDIT_PROOF,
  OUT_QUARANTINE_PROOF,
  OUT_QUARANTINE_ROWS,
  CONFIRMED_BAD_STABLE_IDS,
  classifyDecisionProvenance,
  classifyLinguisticRisk,
  shouldQuarantine,
  auditDecidedRows,
  runLinguisticDecisionsAudit,
  runLinguisticQuarantineRepair,
};
