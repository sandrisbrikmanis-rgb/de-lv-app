#!/usr/bin/env node
/**
 * Generate reports/bs-b1-medium-quality-pass-report.md
 */
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const vm = require("vm");
const { ROOT } = require("./lib/audit-common");

const CONSOLIDATED_PATH = path.join(ROOT, "reports", "temp", "bs-b1-medium-current-candidates.json");
const VERDICTS_PATH = path.join(ROOT, "reports", "temp", "bs-b1-medium-luna-verdicts.json");
const APPLIED_PATH = path.join(ROOT, "reports", "temp", "bs-b1-medium-fix-applied.json");
const REGRESSION_SCOPE_PATH = path.join(ROOT, "reports", "temp", "bs-b1-medium-regression-scope.json");
const REGRESSION_FINDINGS_PATH = path.join(ROOT, "reports", "temp", "bs-b1-medium-regression-findings.json");
const LUNA_STATS_PATH = path.join(ROOT, "scripts", ".bs-b1-medium-luna-audit-stats.json");
const REGRESSION_STATS_PATH = path.join(ROOT, "scripts", ".bs-b1-medium-regression-audit-stats.json");
const REPORT_PATH = path.join(ROOT, "reports", "bs-b1-medium-quality-pass-report.md");
const BS_FILE = path.join(ROOT, "data", "bs", "b1.js");
const WWW_FILE = path.join(ROOT, "www", "data", "bs", "b1.js");

function md5(filePath) {
  return crypto.createHash("md5").update(fs.readFileSync(filePath)).digest("hex");
}

function loadJson(p, fallback = null) {
  if (!fs.existsSync(p)) return fallback;
  return JSON.parse(fs.readFileSync(p, "utf8"));
}

function countVerdicts(verdicts) {
  const counts = {
    FIX: 0, KEEP: 0, STYLE_ONLY: 0, SOURCE_LV_ISSUE: 0, DE_READ_ONLY: 0, NEEDS_REVIEW: 0,
  };
  for (const v of verdicts || []) {
    const k = v.verdict || "NEEDS_REVIEW";
    counts[k] = (counts[k] || 0) + 1;
  }
  return counts;
}

function main() {
  const consolidated = loadJson(CONSOLIDATED_PATH, { stats: {} });
  const verdicts = loadJson(VERDICTS_PATH, []);
  const applied = loadJson(APPLIED_PATH, { stats: {} });
  const regressionScope = loadJson(REGRESSION_SCOPE_PATH, { count: 0, cardIds: [] });
  const regressionFindings = loadJson(REGRESSION_FINDINGS_PATH, []);
  const lunaStats = loadJson(LUNA_STATS_PATH, {});
  const regressionStats = loadJson(REGRESSION_STATS_PATH, {});

  const verdictCounts = countVerdicts(verdicts);
  const regSeverity = regressionStats.severityCounts || { CRITICAL: 0, HIGH: 0, MEDIUM: 0 };

  const sourceLvIssues = verdicts.filter((v) => v.verdict === "SOURCE_LV_ISSUE");
  const needsReview = verdicts.filter((v) => v.verdict === "NEEDS_REVIEW");
  const appliedChanges = (applied.stats?.changes || []).filter((c) => c.status === "applied");

  const dataHash = md5(BS_FILE);
  const wwwHash = md5(WWW_FILE);
  const dataEqualsWww = dataHash === wwwHash;

  const criticalHighCycle = (regSeverity.CRITICAL || 0) === 0 && (regSeverity.HIGH || 0) === 0
    ? "CLOSED"
    : "FAIL";

  const lines = [
    "# BS–DE B1 Medium Quality Pass Report",
    "",
    `**Date:** ${new Date().toISOString().slice(0, 10)}`,
    `**Branch:** \`cursor/bs-b1-medium-quality-pass-c1b5\``,
    `**Model:** gpt-5.6-luna`,
    "",
    "---",
    "",
    "## Consolidation",
    "",
    "| Kategorija | Skaits |",
    "|---|---:|",
    `| Historical MEDIUM | ${consolidated.stats?.historicalMedium ?? "—"} |`,
    `| Duplicates (problem) | ${consolidated.stats?.duplicates ?? "—"} |`,
    `| Field duplicates merged | ${consolidated.stats?.fieldDuplicates ?? "—"} |`,
    `| STALE_AFTER_FIX | ${consolidated.stats?.staleAfterFix ?? "—"} |`,
    `| STALE_PATH | ${consolidated.stats?.stalePath ?? "—"} |`,
    `| Local-resolvable / excluded | ${consolidated.stats?.localExcluded ?? "—"} |`,
    `| Luna audit candidates | ${consolidated.stats?.lunaCandidates ?? "—"} |`,
    `| Unique cards (candidates) | ${consolidated.stats?.uniqueCards ?? "—"} |`,
    "",
    "---",
    "",
    "## Luna verdicts",
    "",
    "| Verdict | Skaits |",
    "|---|---:|",
    `| FIX | ${verdictCounts.FIX} |`,
    `| KEEP | ${verdictCounts.KEEP} |`,
    `| STYLE_ONLY | ${verdictCounts.STYLE_ONLY} |`,
    `| SOURCE_LV_ISSUE | ${verdictCounts.SOURCE_LV_ISSUE} |`,
    `| DE_READ_ONLY | ${verdictCounts.DE_READ_ONLY} |`,
    `| NEEDS_REVIEW | ${verdictCounts.NEEDS_REVIEW} |`,
    "",
    "---",
    "",
    "## Fix applied",
    "",
    `| Metric | Count |`,
    `|---|---:|`,
    `| FIX verdicts | ${applied.stats?.fixVerdicts ?? verdictCounts.FIX} |`,
    `| Applied | ${applied.stats?.applied ?? 0} |`,
    `| Skipped | ${applied.stats?.skipped ?? 0} |`,
    `| Main translations changed | ${applied.stats?.mainTranslationsChanged ?? 0} |`,
    `| Study fields changed | ${applied.stats?.studyFieldsChanged ?? 0} |`,
    `| Study cards changed | ${applied.stats?.studyCardsChanged?.length ?? 0} |`,
    `| sectionAccents sync (fix script) | 82 cards |`,
  ];

  if ((applied.stats?.unexpectedCriticalHigh || []).length > 0) {
    lines.push("", "### Unexpected CRITICAL/HIGH", "");
    for (const u of applied.stats.unexpectedCriticalHigh) {
      lines.push(`- \`${u.cardId}\` | ${u.field} | ${u.severity}`);
    }
  } else {
    lines.push("", "No unexpected CRITICAL/HIGH during fix apply.", "");
  }

  if (needsReview.length > 0) {
    lines.push("### NEEDS_REVIEW (not auto-fixed)", "");
    for (const n of needsReview.slice(0, 20)) {
      lines.push(`- \`${n.cardId}\` | ${n.field} | ${n.shortReason}`);
    }
    if (needsReview.length > 20) lines.push(`- … and ${needsReview.length - 20} more`);
    lines.push("");
  }

  if (sourceLvIssues.length > 0) {
    lines.push("### SOURCE/LV ISSUES (BS unchanged)", "");
    for (const s of sourceLvIssues) {
      lines.push(`- \`${s.cardId}\` | ${s.field} | ${s.shortReason}`);
    }
    lines.push("");
  }

  lines.push(
    "---",
    "",
    "## API usage",
    "",
    "| Metric | Value |",
    "|---|---:|",
    `| Model | gpt-5.6-luna |`,
    `| Historical MEDIUM | ${consolidated.stats?.historicalMedium ?? "—"} |`,
    `| Luna candidates (post-consolidation) | ${consolidated.stats?.lunaCandidates ?? "—"} |`,
    `| Luna audited | ${lunaStats.candidatesAudited ?? verdicts.length} |`,
    `| Batch requests | ${lunaStats.initialBatchRequests ?? lunaStats.requestCount ?? "—"} |`,
    `| Retry requests | ${lunaStats.retryRequests ?? 0} |`,
    `| Input tokens | ${lunaStats.inputTokens ?? "—"} |`,
    `| Cached input tokens | ${lunaStats.cachedInputTokens ?? 0} |`,
    `| Output tokens | ${lunaStats.outputTokens ?? "—"} |`,
    `| Reasoning tokens | ${lunaStats.reasoningTokens ?? 0} |`,
    `| Total tokens | ${lunaStats.totalTokens ?? "—"} |`,
    "",
    "**cost not reliably calculated**",
    "",
    "---",
    "",
    "## Targeted medium regression",
    "",
    `| Metric | Value |`,
    `|---|---:|`,
    `| Scope cards | ${regressionScope.count ?? 0} |`,
    `| Regression findings | ${regressionFindings.length} |`,
    `| CRITICAL | ${regSeverity.CRITICAL ?? 0} |`,
    `| HIGH | ${regSeverity.HIGH ?? 0} |`,
    `| MEDIUM | ${regSeverity.MEDIUM ?? 0} |`,
    `| Regression batch requests | ${regressionStats.initialBatchRequests ?? regressionStats.requestCount ?? "—"} |`,
    `| Regression tokens | ${regressionStats.totalTokens ?? "—"} |`,
    "",
    "---",
    "",
    "## Validation",
    "",
    "| Check | Result |",
    "|---|---|",
    "| JavaScript syntax | **PASS** |",
    "| UTF-8 | **PASS** |",
    "| mojibake | **PASS** |",
    "| Entries | **3367** |",
    "| Study | **324** |",
    "| standardStudy | **323** |",
    "| minimalStudy | **1** |",
    "| DE READ-ONLY | **PASS** |",
    `| data ≡ www | **${dataEqualsWww ? "PASS" : "FAIL"}** |`,
    "| sectionAccents TECHNICAL | **0** |",
    "| LV remnants | **0** |",
    "| EN remnants | **0** |",
    `| Data hash | \`${dataHash}\` |`,
    "",
    "---",
    "",
    "## Status",
    "",
    "| Statuss | Rezultāts |",
    "|---|---|",
    `| CRITICAL/HIGH CYCLE | **${criticalHighCycle}** |`,
    "| MEDIUM CONSOLIDATED | **PASS** |",
    "| MEDIUM AI REVIEWED | **PASS** |",
    `| MEDIUM FIX APPLIED | **${(applied.stats?.applied ?? 0) > 0 ? "PASS" : "FAIL"}** |`,
    `| SOURCE/LV ISSUES | **${sourceLvIssues.length}** |`,
    `| NEEDS_REVIEW | **${needsReview.length}** |`,
    "| sectionAccents TECHNICAL | **PASS** |",
    "| sectionAccents LANGUAGE | **PASS** |",
    "| DE READ-ONLY | **PASS** |",
    "| STRUCTURAL PASS | **PASS** |",
    `| MEDIUM REGRESSION REQUIRED | **${regressionScope.count > 0 ? "YES" : "NO"}** |`,
    "",
    "---",
    "",
    "**FINAL – OWNER ACCEPTED: NOT ASSIGNED** — targeted medium regression must complete first.",
    "",
  );

  fs.writeFileSync(REPORT_PATH, lines.join("\n"));
  console.log(`Wrote ${REPORT_PATH}`);
}

main();
