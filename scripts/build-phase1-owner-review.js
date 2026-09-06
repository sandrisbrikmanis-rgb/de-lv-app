#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const { writeReportAtomic, writeReportAtomicStream } = require("./lib/content-discovery/report-builder");

const PHASE1_OWNER_PREP_DIR = "reports/phase1-owner-prep";
const PHASE1_OWNER_VIEW_FILE = "phase1-full-owner-view.md";
const PHASE1_OWNER_DECISIONS_FILE = "phase1-full-owner-decisions.md";

function ownerPrepDir(root = ROOT) {
  return path.join(root, PHASE1_OWNER_PREP_DIR);
}

function normalizeOwnerPrepFindings(findings = []) {
  return findings.map((f) => ({
    ...f,
    ownerStatus: "PENDING",
    proposed: f.proposed || f.findingType || null,
  }));
}

function buildPhase1OwnerView(findings = [], options = {}) {
  const rows = normalizeOwnerPrepFindings(findings);
  const sourceHash = options.sourceHash;
  const lines = [
    "# Phase 1 — OWNER preview (phase1-full)",
    "",
    `**Findings:** ${rows.length}`,
    `**Generated:** ${options.generatedAt || new Date().toISOString()}`,
    sourceHash ? `**Source hash:** \`${sourceHash}\`` : null,
    "",
    options.mockNote ? `> ${options.mockNote}` : "",
    options.mockNote ? "" : null,
  ].filter((line) => line !== null);

  rows.forEach((finding, index) => {
    lines.push(
      `## Finding ${index + 1}`,
      "",
      `**Audit ID:** \`${finding.auditId || "—"}\``,
      `**Finding Stable ID:** \`${finding.findingStableId || "—"}\``,
      `**Dedup key:** \`${finding.dedupKey || "—"}\``,
      `**Scope:** \`${finding.scopeId || "—"}\``,
      `**Card:** \`${finding.cardId || "—"}\``,
      `**Field:** \`${finding.fieldPath || "—"}\``,
      `**Category:** ${finding.category || "—"}`,
      `**Severity:** ${finding.severity || "—"}`,
      `**Source:** ${finding.source || "—"}`,
      `**Current:** ${finding.current || "—"}`,
      `**Proposed:** ${finding.proposed || "—"}`,
      `**OWNER STATUS:** PENDING`,
      "",
      "---",
      "",
    );
  });

  return `${lines.join("\n")}\n`;
}

function buildPhase1OwnerDecisions(findings = []) {
  const rows = normalizeOwnerPrepFindings(findings);
  const lines = [
    "# Phase 1 OWNER decisions",
    "",
    "| Audit ID | Finding Stable ID | Dedup key | Card | Field | Category | Severity | CURRENT | Source | OWNER STATUS |",
    "|----------|-------------------|-----------|------|-------|----------|----------|---------|--------|--------------|",
  ];

  const escapeCell = (value) => String(value ?? "—").replace(/\|/g, "\\|");

  for (const f of rows) {
    lines.push(
      `| ${escapeCell(f.auditId)} | ${escapeCell(f.findingStableId)} | ${escapeCell(f.dedupKey)} | ${escapeCell(f.cardId)} | ${escapeCell(f.fieldPath)} | ${escapeCell(f.category)} | ${escapeCell(f.severity)} | ${escapeCell(f.current)} | ${escapeCell(f.source)} | PENDING |`,
    );
  }

  return `${lines.join("\n")}\n`;
}

function writePhase1OwnerViewStream(findings = [], options = {}, write) {
  const rows = normalizeOwnerPrepFindings(findings);
  const sourceHash = options.sourceHash;
  write("# Phase 1 — OWNER preview (phase1-full)\n\n");
  write(`**Findings:** ${rows.length}\n`);
  write(`**Generated:** ${options.generatedAt || new Date().toISOString()}\n`);
  if (sourceHash) write(`**Source hash:** \`${sourceHash}\`\n`);
  write("\n");
  if (options.mockNote) {
    write(`> ${options.mockNote}\n\n`);
  }

  for (let index = 0; index < rows.length; index += 1) {
    const finding = rows[index];
    write(`## Finding ${index + 1}\n\n`);
    write(`**Audit ID:** \`${finding.auditId || "—"}\`\n`);
    write(`**Finding Stable ID:** \`${finding.findingStableId || "—"}\`\n`);
    write(`**Dedup key:** \`${finding.dedupKey || "—"}\`\n`);
    write(`**Scope:** \`${finding.scopeId || "—"}\`\n`);
    write(`**Card:** \`${finding.cardId || "—"}\`\n`);
    write(`**Field:** \`${finding.fieldPath || "—"}\`\n`);
    write(`**Category:** ${finding.category || "—"}\n`);
    write(`**Severity:** ${finding.severity || "—"}\n`);
    write(`**Source:** ${finding.source || "—"}\n`);
    write(`**Current:** ${finding.current || "—"}\n`);
    write(`**Proposed:** ${finding.proposed || "—"}\n`);
    write("**OWNER STATUS:** PENDING\n\n---\n\n");
  }
}

function writePhase1OwnerDecisionsStream(findings = [], write) {
  const rows = normalizeOwnerPrepFindings(findings);
  const escapeCell = (value) => String(value ?? "—").replace(/\|/g, "\\|");
  write("# Phase 1 OWNER decisions\n\n");
  write(
    "| Audit ID | Finding Stable ID | Dedup key | Card | Field | Category | Severity | CURRENT | Source | OWNER STATUS |\n",
  );
  write(
    "|----------|-------------------|-----------|------|-------|----------|----------|---------|--------|--------------|\n",
  );
  for (const f of rows) {
    write(
      `| ${escapeCell(f.auditId)} | ${escapeCell(f.findingStableId)} | ${escapeCell(f.dedupKey)} | ${escapeCell(f.cardId)} | ${escapeCell(f.fieldPath)} | ${escapeCell(f.category)} | ${escapeCell(f.severity)} | ${escapeCell(f.current)} | ${escapeCell(f.source)} | PENDING |\n`,
    );
  }
}

function writePhase1OwnerPrepReviewFiles(findings = [], options = {}) {
  const root = options.root || ROOT;
  const outDir = options.outDir || ownerPrepDir(root);
  fs.mkdirSync(outDir, { recursive: true });

  const viewPath = path.join(outDir, PHASE1_OWNER_VIEW_FILE);
  const decisionsPath = path.join(outDir, PHASE1_OWNER_DECISIONS_FILE);
  const useStream = options.stream !== false && findings.length > 1000;

  if (useStream) {
    writeReportAtomicStream(viewPath, (write) => writePhase1OwnerViewStream(findings, options, write));
    writeReportAtomicStream(decisionsPath, (write) => writePhase1OwnerDecisionsStream(findings, write));
  } else {
    writeReportAtomic(viewPath, buildPhase1OwnerView(findings, options));
    writeReportAtomic(decisionsPath, buildPhase1OwnerDecisions(findings));
  }

  return {
    outDir,
    viewPath,
    decisionsPath,
    files: [
      path.relative(root, viewPath).replace(/\\/g, "/"),
      path.relative(root, decisionsPath).replace(/\\/g, "/"),
    ],
    count: findings.length,
  };
}

function main() {
  const inputPath =
    process.argv[2] || path.join(ROOT, "reports", "temp", "phase1-mock-findings.json");
  const findings = fs.existsSync(inputPath)
    ? JSON.parse(fs.readFileSync(inputPath, "utf8")).findings || []
    : [];

  const result = writePhase1OwnerPrepReviewFiles(findings, {
    mockNote: "Mock/fixture generated for F0-COMP infrastructure verification only.",
  });

  console.log(
    JSON.stringify(
      {
        review: result.files[0],
        decisions: result.files[1],
        findings: result.count,
      },
      null,
      2,
    ),
  );
}

if (require.main === module) {
  main();
}

module.exports = {
  PHASE1_OWNER_PREP_DIR,
  PHASE1_OWNER_VIEW_FILE,
  PHASE1_OWNER_DECISIONS_FILE,
  ownerPrepDir,
  buildPhase1OwnerReview: buildPhase1OwnerView,
  buildPhase1OwnerView,
  buildPhase1OwnerDecisions,
  writePhase1OwnerPrepReviewFiles,
  normalizeOwnerPrepFindings,
};
