#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");

function buildPhase1OwnerReview(findings = [], options = {}) {
  const validated = findings.filter((f) =>
    ["VALIDATED_REAL_FINDING", "OWNER_DECISION_REQUIRED", "NEEDS_REVIEW"].includes(
      f.classificationStatus,
    ),
  );

  const lines = [
    "# Phase 1 — OWNER preview (phase1-full)",
    "",
    `**Findings:** ${validated.length}`,
    `**Generated:** ${new Date().toISOString()}`,
    "",
    "> Mock/fixture generated for F0-COMP infrastructure verification only.",
    "",
  ];

  validated.forEach((finding, index) => {
    lines.push(
      `## Finding ${index + 1}`,
      "",
      `**Scope:** \`${finding.scopeId}\``,
      `**Card:** \`${finding.cardId}\``,
      `**Field:** \`${finding.fieldPath}\``,
      `**Category:** ${finding.category}`,
      `**Severity:** ${finding.severity}`,
      `**Current:** ${finding.current || "—"}`,
      `**Statuss:** PENDING`,
      "",
      "---",
      "",
    );
  });

  return lines.join("\n");
}

function main() {
  const inputPath =
    process.argv[2] || path.join(ROOT, "reports", "temp", "phase1-mock-findings.json");
  const findings = fs.existsSync(inputPath)
    ? JSON.parse(fs.readFileSync(inputPath, "utf8")).findings || []
    : [];

  const outDir = path.join(ROOT, "reports", "phase1-owner-prep");
  fs.mkdirSync(outDir, { recursive: true });

  const reviewPath = path.join(outDir, "phase1-full-owner-view.md");
  const decisionsPath = path.join(outDir, "phase1-full-owner-decisions.md");

  fs.writeFileSync(reviewPath, `${buildPhase1OwnerReview(findings)}\n`, "utf8");
  fs.writeFileSync(
    decisionsPath,
    "# Phase 1 OWNER decisions\n\n| Finding | Decision |\n|---------|----------|\n",
    "utf8",
  );

  console.log(
    JSON.stringify(
      {
        review: "reports/phase1-owner-prep/phase1-full-owner-view.md",
        decisions: "reports/phase1-owner-prep/phase1-full-owner-decisions.md",
        findings: findings.length,
      },
      null,
      2,
    ),
  );
}

if (require.main === module) {
  main();
}

module.exports = { buildPhase1OwnerReview };
