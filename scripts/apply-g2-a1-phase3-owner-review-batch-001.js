#!/usr/bin/env node
"use strict";

const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const { writeReportAtomic } = require("./lib/content-discovery/report-builder");
const {
  EXPECTED_SOURCE_HASH,
  validateSourceIntegrity,
} = require("./lib/g2-a1-phase3/owner-prep-usability");
const {
  BATCH_ID,
  MULTI_VALUE_DELIM,
} = require("./prepare-g2-a1-phase3-owner-review-batch-001");

const PACK_PROOF = path.join(ROOT, "reports/g2-a1-phase3-owner-review-batch-001-proof.json");
const PACK_CSV = path.join(ROOT, "reports/g2-a1-phase3-owner-review-batch-001-decisions.csv");
const OUT_VIEW = path.join(ROOT, "reports/g2-a1-phase3-owner-review-batch-001-view.md");
const OUT_DECISIONS = path.join(ROOT, "reports/g2-a1-phase3-owner-review-batch-001-decisions.md");
const OUT_CSV = path.join(ROOT, "reports/g2-a1-phase3-owner-review-batch-001-decisions.csv");
const OUT_PROOF = path.join(ROOT, "reports/g2-a1-phase3-owner-review-batch-001-proof.json");

const ALLOWED_DECISIONS = new Set(["NELABOT", "LABOT", "NEW"]);
const IDENTITY_COLUMNS = [
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
];

function sha256Hex(value) {
  return crypto.createHash("sha256").update(value).digest("hex");
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

function loadCsv(filePath) {
  const lines = fs.readFileSync(filePath, "utf8").trim().split(/\r?\n/);
  const header = parseCsvLine(lines[0]);
  const rows = [];
  for (let i = 1; i < lines.length; i += 1) {
    const cells = parseCsvLine(lines[i]);
    const row = {};
    header.forEach((key, idx) => {
      row[key] = cells[idx] ?? "";
    });
    rows.push(row);
  }
  return { header, rows };
}

function escapeMd(value) {
  return String(value ?? "").replace(/\|/g, "\\|");
}

function escapeCsv(value) {
  return `"${String(value ?? "").replace(/"/g, '""')}"`;
}

function buildViewMarkdown(rows, summary) {
  const lines = [
    "# G2/A1 Phase 3 — OWNER review BATCH-001",
    "",
    `**Batch ID:** ${BATCH_ID}`,
    `**Review track:** ${summary.reviewTrack}`,
    `**Decision targets reviewed:** ${summary.decidedCount}/${summary.decisionTargetCount}`,
    `**OWNER decisions:** NELABOT ${summary.nelabotCount} • LABOT ${summary.labotCount} • NEW ${summary.newCount}`,
    `**Target-language backlog flags:** ${summary.targetLanguageBacklogCount}`,
    `**Source hash:** \`${summary.sourceHash}\``,
    "",
    "> Lēmums attiecas tikai uz SOURCE_LV_ISSUE. Atzīmētās mērķvalodas problēmas šajā batch netiek labotas.",
    "",
  ];

  rows.forEach((row, index) => {
    lines.push(`## Review target ${index + 1}`);
    lines.push("");
    lines.push(`**Review group ID:** \`${row.review_group_id}\``);
    lines.push(`**Finding/member IDs:** ${row.finding_member_ids}`);
    lines.push(`**Language(s):** ${row.languages}`);
    lines.push(`**Card/object ID:** \`${row.card_object_id}\``);
    lines.push(`**Field/path:** \`${row.field_path}\``);
    lines.push(`**LV source:** ${row.lv_source || "—"}`);
    lines.push(`**DE reference:** ${row.de_reference || "—"}`);
    lines.push(`**CURRENT:** ${row.current || "—"}`);
    lines.push(`**PROPOSED:** ${row.proposed || "—"}`);
    lines.push(`**Raw category:** ${row.raw_category}`);
    lines.push(`**Canonical bucket:** ${row.canonical_bucket}`);
    lines.push(`**Reason:** ${row.reason || "—"}`);
    lines.push(`**Severity:** ${row.severity || "—"}`);
    lines.push(`**Conflict status:** ${row.conflict_status}`);
    lines.push(`**OWNER STATUS:** ${row.owner_status}`);
    lines.push(`**OWNER DECISION:** ${row.owner_decision}`);
    lines.push(`**OWNER NEW:** ${row.owner_new}`);
    lines.push(`**OWNER NOTE:** ${row.owner_note}`);
    lines.push("");
    lines.push("---");
    lines.push("");
  });

  return `${lines.join("\n")}\n`;
}

function buildDecisionsMarkdown(rows, summary) {
  const lines = [
    "# G2/A1 Phase 3 — OWNER review BATCH-001 decisions",
    "",
    `**Batch ID:** ${BATCH_ID}`,
    `**Review track:** ${summary.reviewTrack}`,
    `**Decision targets reviewed:** ${summary.decidedCount}/${summary.decisionTargetCount}`,
    `**OWNER decisions:** NELABOT ${summary.nelabotCount} • LABOT ${summary.labotCount} • NEW ${summary.newCount}`,
    `**Target-language backlog flags:** ${summary.targetLanguageBacklogCount}`,
    `**Source hash:** \`${summary.sourceHash}\``,
    "",
    "> Lēmums attiecas tikai uz SOURCE_LV_ISSUE. Atzīmētās mērķvalodas problēmas šajā batch netiek labotas.",
    "",
    "| # | Review group ID | Finding/member IDs | Language(s) | Card/object ID | Field/path | LV source | DE reference | CURRENT | Raw category | Severity | OWNER STATUS | OWNER DECISION | OWNER NEW | OWNER NOTE |",
    "|--:|-----------------|--------------------|-------------|----------------|------------|-----------|--------------|---------|--------------|----------|--------------|----------------|----------|------------|",
  ];

  rows.forEach((row, index) => {
    lines.push(
      `| ${index + 1} | ${escapeMd(row.review_group_id)} | ${escapeMd(row.finding_member_ids)} | ${escapeMd(row.languages)} | ${escapeMd(row.card_object_id)} | ${escapeMd(row.field_path)} | ${escapeMd(row.lv_source)} | ${escapeMd(row.de_reference)} | ${escapeMd(row.current)} | ${escapeMd(row.raw_category)} | ${escapeMd(row.severity)} | ${escapeMd(row.owner_status)} | ${escapeMd(row.owner_decision)} | ${escapeMd(row.owner_new)} | ${escapeMd(row.owner_note)} |`,
    );
  });

  return `${lines.join("\n")}\n`;
}

function buildCsv(header, rows) {
  const lines = [header.join(",")];
  for (const row of rows) {
    lines.push(header.map((key) => escapeCsv(row[key])).join(","));
  }
  return `${lines.join("\n")}\n`;
}

function applyOwnerReviewBatch001(options = {}) {
  const root = options.root || ROOT;
  const ownerCsvPath = options.ownerCsvPath || PACK_CSV;
  const errors = [];

  if (!fs.existsSync(PACK_PROOF)) {
    return {
      pass: false,
      classification: "BLOCKED_G2_A1_OWNER_REVIEW_BATCH_001_APPLY",
      errors: ["pack proof missing"],
    };
  }
  if (!fs.existsSync(ownerCsvPath)) {
    return {
      pass: false,
      classification: "BLOCKED_G2_A1_OWNER_REVIEW_BATCH_001_APPLY",
      errors: [`owner csv missing ${ownerCsvPath}`],
    };
  }

  const packProof = JSON.parse(fs.readFileSync(PACK_PROOF, "utf8"));
  const packCsv = loadCsv(PACK_CSV);
  const ownerCsv = loadCsv(ownerCsvPath);

  if (packProof.sourceHash !== EXPECTED_SOURCE_HASH) {
    errors.push("pack source hash mismatch");
  }
  if (ownerCsv.rows.length !== packProof.batchDecisionTargetCount) {
    errors.push(`owner row count ${ownerCsv.rows.length}`);
  }

  const packByStableId = new Map(packCsv.rows.map((row) => [row.finding_stable_ids, row]));
  const ownerByStableId = new Map(ownerCsv.rows.map((row) => [row.finding_stable_ids, row]));

  for (const stableId of packProof.memberFindingIds) {
    const base = packByStableId.get(stableId);
    const owner = ownerByStableId.get(stableId);
    if (!base) errors.push(`pack row missing ${stableId}`);
    if (!owner) errors.push(`owner row missing ${stableId}`);
    if (base && owner) {
      for (const col of IDENTITY_COLUMNS) {
        if (base[col] !== owner[col]) {
          errors.push(`identity mismatch ${stableId} ${col}`);
        }
      }
    }
  }

  const decisionCounts = { NELABOT: 0, LABOT: 0, NEW: 0 };
  let targetLanguageBacklogCount = 0;
  for (const row of ownerCsv.rows) {
    if (row.owner_status !== "DECIDED") errors.push(`owner status not DECIDED ${row.finding_stable_ids}`);
    if (!ALLOWED_DECISIONS.has(row.owner_decision)) {
      errors.push(`invalid owner decision ${row.owner_decision}`);
    } else {
      decisionCounts[row.owner_decision] += 1;
    }
    if (row.owner_decision === "LABOT" && !row.owner_new.trim()) {
      errors.push(`LABOT without owner_new ${row.finding_stable_ids}`);
    }
    if (row.owner_decision === "NEW" && !row.owner_new.trim()) {
      errors.push(`NEW without owner_new ${row.finding_stable_ids}`);
    }
    if (row.owner_note.includes("target-language review backlog")) {
      targetLanguageBacklogCount += 1;
    }
  }

  const integrity = validateSourceIntegrity(root);
  if (!integrity.pass) errors.push("source integrity failed after ingest");

  if (errors.length) {
    return {
      pass: false,
      classification: "BLOCKED_G2_A1_OWNER_REVIEW_BATCH_001_APPLY",
      errors,
    };
  }

  const summary = {
    reviewTrack: packProof.reviewTrack,
    sourceHash: packProof.sourceHash,
    decisionTargetCount: packProof.batchDecisionTargetCount,
    decidedCount: ownerCsv.rows.length,
    nelabotCount: decisionCounts.NELABOT,
    labotCount: decisionCounts.LABOT,
    newCount: decisionCounts.NEW,
    targetLanguageBacklogCount,
  };

  const productionChanged = decisionCounts.LABOT > 0 || decisionCounts.NEW > 0;
  const proof = {
    ...packProof,
    classification: "G2_A1_OWNER_REVIEW_BATCH_001_DECIDED",
    pass: true,
    batchStatus: "DECIDED",
    ownerAuthorization: "G2_A1_OWNER_REVIEW_BATCH_001_PACK_PREPARATION_APPROVED",
    ownerDecisionCounts: decisionCounts,
    targetLanguageBacklogCount,
    productionChanged,
    productionFilesChanged: 0,
    lvSourceChanged: false,
    automaticOwnerDecisions: 0,
    newLunaCalls: 0,
    mainBaseSha: execSync("git rev-parse origin/main", { cwd: root, encoding: "utf8" }).trim(),
    decidedAt: new Date().toISOString(),
    nextStep: "OWNER_REVIEW_BATCH_002_PACK",
  };
  proof.outputHash = sha256Hex(
    JSON.stringify({
      batchId: proof.batchId,
      sourceHash: proof.sourceHash,
      memberFindingIds: proof.memberFindingIds,
      ownerDecisionCounts: proof.ownerDecisionCounts,
      batchStatus: proof.batchStatus,
    }),
  );

  writeReportAtomic(OUT_VIEW, buildViewMarkdown(ownerCsv.rows, summary));
  writeReportAtomic(OUT_DECISIONS, buildDecisionsMarkdown(ownerCsv.rows, summary));
  writeReportAtomic(OUT_CSV, buildCsv(ownerCsv.header, ownerCsv.rows));
  writeReportAtomic(OUT_PROOF, JSON.stringify(proof, null, 2));

  return {
    pass: true,
    classification: proof.classification,
    proof,
    summary,
    productionChanged,
  };
}

function main() {
  const ownerCsvArg = process.argv.find((arg) => arg.startsWith("--owner-csv="));
  const ownerCsvPath = ownerCsvArg ? ownerCsvArg.split("=")[1] : PACK_CSV;
  const result = applyOwnerReviewBatch001({ ownerCsvPath });
  console.log(JSON.stringify(result, null, 2));
  if (!result.pass) process.exit(1);
}

if (require.main === module) {
  main();
}

module.exports = {
  applyOwnerReviewBatch001,
  loadCsv,
  IDENTITY_COLUMNS,
};
