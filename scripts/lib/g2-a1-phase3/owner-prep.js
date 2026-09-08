#!/usr/bin/env node
"use strict";

const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const { ROOT } = require("../audit-common");
const { writeReportAtomic } = require("../content-discovery/report-builder");
const { OWNER_FILES } = require("./constants");

function normalizeFindings(findings = []) {
  return findings.map((f) => ({
    ...f,
    ownerStatus: "PENDING",
  }));
}

function buildOwnerView(findings, options = {}) {
  const rows = normalizeFindings(findings);
  const sourceHash = options.sourceHash;
  const lines = [
    "# G2/A1 Phase 3 — OWNER preview",
    "",
    `**Scope:** ${options.scope || "G2/A1 × 31 languages"}`,
    `**Findings:** ${rows.length}`,
    `**Generated:** ${options.generatedAt || new Date().toISOString()}`,
    `**MAIN_BASE_SHA:** \`${options.mainBaseSha || "—"}\``,
    `**WORK_BRANCH:** \`${options.workBranch || "—"}\``,
    sourceHash ? `**Source hash:** \`${sourceHash}\`` : null,
    "",
    "> All OWNER statuses are initially **PENDING**. Agent does not make OWNER decisions.",
    "",
  ].filter((line) => line !== null);

  rows.forEach((finding, index) => {
    lines.push(
      `## Finding ${index + 1}`,
      "",
      `**Audit ID:** \`${finding.auditId || "—"}\``,
      `**Finding Stable ID:** \`${finding.findingStableId || "—"}\``,
      `**Scope:** \`${finding.scopeId || "—"}\``,
      `**Lang:** ${finding.lang || "—"}`,
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

function buildOwnerDecisions(findings = []) {
  const rows = normalizeFindings(findings);
  const lines = [
    "# G2/A1 Phase 3 OWNER decisions",
    "",
    "| Audit ID | Finding Stable ID | Lang | Card | Field | Category | Severity | CURRENT | Source | OWNER STATUS |",
    "|----------|-------------------|------|------|-------|----------|----------|---------|--------|--------------|",
  ];
  const escape = (v) => String(v ?? "—").replace(/\|/g, "\\|");
  for (const f of rows) {
    lines.push(
      `| ${escape(f.auditId)} | ${escape(f.findingStableId)} | ${escape(f.lang)} | ${escape(f.cardId)} | ${escape(f.fieldPath)} | ${escape(f.category)} | ${escape(f.severity)} | ${escape(f.current)} | ${escape(f.source)} | PENDING |`,
    );
  }
  return `${lines.join("\n")}\n`;
}

function buildOwnerCsv(findings = []) {
  const rows = normalizeFindings(findings);
  const header =
    "audit_id,finding_stable_id,lang,card_id,field_path,category,severity,current,source,owner_status";
  const lines = [header];
  for (const f of rows) {
    const cells = [
      f.auditId,
      f.findingStableId,
      f.lang,
      f.cardId,
      f.fieldPath,
      f.category,
      f.severity,
      f.current,
      f.source,
      "PENDING",
    ].map((v) => `"${String(v ?? "").replace(/"/g, '""')}"`);
    lines.push(cells.join(","));
  }
  return `${lines.join("\n")}\n`;
}

function buildGithubIndex(options = {}) {
  const branch = options.branch || "main";
  const repoUrl = options.repoUrl || "https://github.com/sandrisbrikmanis-rgb/de-lv-app";
  const blob = (file) => `${repoUrl}/blob/${branch}/${file}`;
  return [
    "# G2/A1 Phase 3 OWNER review — GitHub index",
    "",
    "## OWNER-PREP",
    "",
    `- [OWNER view](${blob(`reports/${OWNER_FILES.view}`)})`,
    `- [OWNER decisions](${blob(`reports/${OWNER_FILES.decisions}`)})`,
    `- [OWNER proof JSON](${blob(`reports/${OWNER_FILES.proof}`)})`,
    `- [OWNER decisions CSV](${blob(`reports/${OWNER_FILES.csv}`)})`,
    "",
    "## Discovery artefacts",
    "",
    `- [Phase 3 discovery report](${blob("reports/g2-a1-phase3-full-discovery.md")})`,
    `- [Phase 3 discovery JSON](${blob("reports/g2-a1-phase3-full-discovery.json")})`,
    `- [Staging export proof](${blob("reports/g2-a1-phase3-staging-export-proof.json")})`,
    "",
    `**Branch:** \`${branch}\``,
    "",
  ].join("\n");
}

function generateOwnerPrep(findings, options = {}) {
  const reportsDir = options.reportsDir || path.join(ROOT, "reports");
  fs.mkdirSync(reportsDir, { recursive: true });
  const sourceHash =
    options.sourceHash ||
    crypto
      .createHash("sha256")
      .update(JSON.stringify(findings.map((f) => f.auditId).sort()))
      .digest("hex");

  const files = {
    view: path.join(reportsDir, OWNER_FILES.view),
    decisions: path.join(reportsDir, OWNER_FILES.decisions),
    github: path.join(reportsDir, OWNER_FILES.github),
    proof: path.join(reportsDir, OWNER_FILES.proof),
    csv: path.join(reportsDir, OWNER_FILES.csv),
  };

  writeReportAtomic(files.view, buildOwnerView(findings, { ...options, sourceHash }));
  writeReportAtomic(files.decisions, buildOwnerDecisions(findings));
  writeReportAtomic(files.github, `${buildGithubIndex(options)}\n`);
  writeReportAtomic(files.csv, buildOwnerCsv(findings));
  writeReportAtomic(
    files.proof,
    JSON.stringify(
      {
        generatedAt: options.generatedAt || new Date().toISOString(),
        scope: options.scope,
        mainBaseSha: options.mainBaseSha,
        workBranch: options.workBranch,
        sourceHash,
        findingCount: findings.length,
        ownerStatus: "PENDING",
        files: Object.fromEntries(
          Object.entries(files).map(([k, v]) => [k, path.relative(ROOT, v).replace(/\\/g, "/")]),
        ),
      },
      null,
      2,
    ),
  );

  return {
    files,
    count: findings.length,
    sourceHash,
    ownerStatus: "PENDING",
  };
}

module.exports = {
  generateOwnerPrep,
  buildOwnerView,
  buildOwnerDecisions,
  buildGithubIndex,
};
