#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { ROOT } = require("../audit-common");
const { TARGET_LANGUAGES, G2_LEVELS } = require("../content-crowdin-bridge/constants");
const { runBaselineGate } = require("./baseline-gate");
const { collectG2Structural } = require("./collectors/structural");

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function parseLangsArg(value) {
  if (!value || value === "all") return [...TARGET_LANGUAGES];
  return value.split(",").map((s) => s.trim()).filter(Boolean);
}

function parseDatasetsArg(value) {
  if (!value || value === "all") return [...G2_LEVELS];
  return value.split(",").map((s) => s.trim().toLowerCase()).filter(Boolean);
}

/**
 * Run READ-ONLY G2 discovery (Phase 0: structural only).
 */
function runContentDiscovery(options = {}) {
  const langs = options.langs || [...TARGET_LANGUAGES];
  const datasets = options.datasets || ["a1"];
  const group = options.group || "g2";

  const baseline = runBaselineGate();
  const findings = [];
  const summary = [];

  if (baseline.verdict === "BLOCKED") {
    return {
      baseline,
      group,
      scope: { langs: langs.length, datasets },
      summary: [],
      findings: [],
      blockers: baseline.blockers,
      verdict: "BLOCKED_BASELINE",
    };
  }

  for (const dataset of datasets) {
    for (const lang of langs) {
      const idPrefix = `DISC-${group.toUpperCase()}-${dataset.toUpperCase()}-${lang.toUpperCase()}`;
      const { findings: levelFindings, stats } = collectG2Structural({
        lang,
        level: dataset,
        idPrefix,
      });
      findings.push(...levelFindings);

      const critical = levelFindings.filter((f) => f.severity === "CRITICAL").length;
      const high = levelFindings.filter((f) => f.severity === "HIGH").length;

      summary.push({
        group,
        dataset,
        lang,
        cards: stats.cards,
        lvCards: stats.lvCards,
        structuralIssues: stats.structuralIssues,
        critical,
        high,
        verdict: levelFindings.length === 0 ? "PASS" : "NEEDS_OWNER_REVIEW",
      });
    }
  }

  const matrix = {
    originMainSha: baseline.originMainSha,
    masterVersion: baseline.masterStandardVersion,
    generatedAt: baseline.generatedAt,
    baselineVerdict: baseline.verdict,
    mode: "READ_ONLY",
    productionChanges: 0,
    scope: { group, langs: langs.length, datasets },
    summary,
    blockers: baseline.blockers,
    findings,
    verdict: findings.length === 0 ? "PASS" : "NEEDS_OWNER_REVIEW",
  };

  return matrix;
}

function writeDiscoveryReports(matrix, options = {}) {
  const outJson = options.outJson || path.join(ROOT, "reports", "content-discovery-matrix.json");
  const outMd = options.outMd || path.join(ROOT, "reports", "content-discovery-READONLY.md");

  ensureDir(path.dirname(outJson));

  fs.writeFileSync(outJson, `${JSON.stringify(matrix, null, 2)}\n`, "utf8");

  const lines = [
    "# Content discovery — READ-ONLY (Phase 0)",
    "",
    `**Generated:** ${matrix.generatedAt}`,
    `**MASTER:** ${matrix.masterVersion}`,
    `**ORIGIN_MAIN_SHA:** \`${matrix.originMainSha}\``,
    `**Mode:** ${matrix.mode}`,
    `**Production changes:** ${matrix.productionChanges}`,
    `**Verdict:** ${matrix.verdict}`,
    "",
    "## Baseline",
    "",
  ];

  if (matrix.blockers?.length) {
    for (const b of matrix.blockers) {
      lines.push(`- \`${b.code}\`: ${b.message}`);
    }
  } else {
    lines.push("- No baseline blockers");
  }

  lines.push("", "## Summary", "", "| Dataset | Lang | Cards | Structural issues | Verdict |", "|---------|------|-------|-------------------|---------|");

  for (const row of matrix.summary) {
    lines.push(
      `| ${row.dataset} | ${row.lang} | ${row.cards} | ${row.structuralIssues} | ${row.verdict} |`,
    );
  }

  lines.push("", "## Notes", "", "- Phase 0: structural collector only (`--skip-luna` implied).", "- No Crowdin import, no apply.", "");

  fs.writeFileSync(outMd, `${lines.join("\n")}\n`, "utf8");

  return { outJson, outMd };
}

module.exports = {
  runContentDiscovery,
  writeDiscoveryReports,
  parseLangsArg,
  parseDatasetsArg,
};
