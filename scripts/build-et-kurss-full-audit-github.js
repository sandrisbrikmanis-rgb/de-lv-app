#!/usr/bin/env node
"use strict";
/**
 * Generate reports/et-kurss-full-audit-GITHUB.md — GitHub blob links for full audit.
 */
const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");

const REPO = "sandrisbrikmanis-rgb/de-lv-app";
const BRANCH = process.env.WORK_BRANCH || "cursor/et-de-kurss-full-audit-4a7c";
const AUDIT_JSON = path.join(ROOT, "reports/temp/et-kurss-full-audit.json");
const OUT = path.join(ROOT, "reports/et-kurss-full-audit-GITHUB.md");

function gh(file) {
  return `https://github.com/${REPO}/blob/${BRANCH}/${file}`;
}

function link(file, label) {
  return `[${label || file}](${gh(file)})`;
}

function loadAudit() {
  if (!fs.existsSync(AUDIT_JSON)) {
    return {
      totalFields: 0,
      findings: [],
      ownerBacklogFinal: [],
      bySev: { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0 },
      verdict: "PENDING",
    };
  }
  const data = JSON.parse(fs.readFileSync(AUDIT_JSON, "utf8"));
  const backlog = data.ownerBacklogFinal || data.findings || [];
  const bySev = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0 };
  const bySource = {};
  for (const f of backlog) {
    bySev[f.severity] = (bySev[f.severity] || 0) + 1;
    bySource[f.source] = (bySource[f.source] || 0) + 1;
  }
  return {
    totalFields: data.stats?.totalFields || 0,
    findings: data.findings || [],
    ownerBacklogFinal: backlog,
    bySev,
    bySource,
    verdict: data.stageVerdict || data.verdict || "PENDING",
    generatedAt: data.generatedAt,
    baseline: data.baseline || {},
  };
}

function main() {
  const audit = loadAudit();
  const n = audit.ownerBacklogFinal.length;
  const md = [
    "# ET–DE Kurss — pilns audits GitHub indekss",
    "",
    `**Branch:** \`${BRANCH}\``,
    `**Standard:** PROJECT_LANGUAGE_MASTER_STANDARD.md v1.9`,
    `**Generated:** ${audit.generatedAt || "—"}`,
    `**ORIGIN_MAIN_SHA:** ${audit.baseline?.originMainSha || "—"}`,
  ].join("\n");

  const body = [
    md,
    "",
    "## Galvenie artefakti",
    "",
    "| Fails | Apraksts |",
    "|-------|----------|",
    `| ${link("reports/et-kurss-full-audit-GITHUB.md", "Šis indekss")} | GitHub saites pilnam auditam |`,
    `| ${link("reports/et-kurss-full-audit.md", `Pilns audits (${n} OWNER backlog)`)} | Galvenais READ-ONLY audits |`,
    `| ${link("reports/temp/et-kurss-full-audit.json", "Mašīnlasāms JSON")} | Strukturēts kopsavilkums + findingi |`,
    "",
    "## OWNER review (ja backlog > 0)",
    "",
    "| Fails | Apraksts |",
    "|-------|----------|",
    `| ${link("reports/et-kurss-owner-review-GITHUB.md", "OWNER GitHub indekss")} | Preview / Decisions saites |`,
    `| ${link("reports/et-kurss-owner-view.md", "OWNER VIEW")} | Pilns preview |`,
    `| ${link("reports/et-kurss-owner-decisions.md", "OWNER DECISIONS")} | PENDING tabula |`,
    "",
    "## Kopsavilkums",
    "",
    `| Metrika | Vērtība |`,
    `|---|---|`,
    `| Lauki (coverage) | **${audit.totalFields}** |`,
    `| OWNER_BACKLOG_FINAL | **${n}** |`,
    `| CRITICAL | **${audit.bySev.CRITICAL || 0}** |`,
    `| HIGH | **${audit.bySev.HIGH || 0}** |`,
    `| MEDIUM | **${audit.bySev.MEDIUM || 0}** |`,
    `| LOW | **${audit.bySev.LOW || 0}** |`,
    `| Stage verdict | **${audit.verdict}** |`,
    "",
    `Visi **${n}** OWNER backlog ieraksti: ${link("reports/et-kurss-full-audit.md#findings", "et-kurss-full-audit.md → Findings")}`,
    "",
  ].join("\n");

  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, body);
  console.log(JSON.stringify({ out: path.relative(ROOT, OUT), ownerBacklogFinal: n }, null, 2));
}

main();
