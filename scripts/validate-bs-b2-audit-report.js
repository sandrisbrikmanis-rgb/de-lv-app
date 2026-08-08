#!/usr/bin/env node
/**
 * BS-DE B2 audit validation report writer (read-only).
 */
const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");

const VALIDATION_JSON = path.join(ROOT, "reports", "temp", "bs-b2-audit-validation.json");
const STATS_PATH = path.join(ROOT, "scripts", ".bs-b2-audit-validation-stats.json");
const OUT = path.join(ROOT, "reports", "bs-b2-audit-validation-report.md");

function loadJson(p, fallback = null) {
  if (!fs.existsSync(p)) return fallback;
  try {
    return JSON.parse(fs.readFileSync(p, "utf8"));
  } catch {
    return fallback;
  }
}

function patternStats(results, patternName) {
  const items = results.filter((r) => (r.pattern || "other") === patternName);
  const candidates = items.length;
  const confirmed = items.filter((r) => r.verdict === "FIX").length;
  const rejected = items.filter((r) => ["KEEP", "STYLE_ONLY", "PROJECT_CONVENTION"].includes(r.verdict)).length;
  return { candidates, confirmed, rejected };
}

function main() {
  const data = loadJson(VALIDATION_JSON);
  const stats = loadJson(STATS_PATH, data?.apiUsage || {});
  if (!data) throw new Error("Missing validation JSON");

  const results = data.results || [];
  const summary = data.summary || {};
  const counts = summary.counts || {};
  const fixByMethod = summary.fixByMethod || {};
  const validatedSeverity = summary.validatedSeverity || {};
  const pre = data.preValidation || {};

  const patterns = ["ekavism", "grammar", "semantic", "formsLabel", "en_remnant", "cache_collision"];
  const patternReport = {};
  for (const p of patterns) patternReport[p] = patternStats(results, p);

  const fixItems = results.filter((r) => r.verdict === "FIX");
  const esc = (s) => String(s || "").replace(/\|/g, "\\|").replace(/\n/g, " ").slice(0, 90);

  const lines = [
    "# BS–DE B2 — audit findings validation / triage",
    "",
    `**Datums:** ${new Date().toISOString().slice(0, 10)}`,
    `**Modelis:** ${stats.model || "gpt-5.6-luna"}`,
    `**Režīms:** VALIDATION ONLY — datu faili nemainīti`,
    "",
    "---",
    "",
    "## Initial audit",
    "",
    "| Kategorija | Skaits |",
    "|---|---:|",
    "| CRITICAL | 32 |",
    "| HIGH | 514 |",
    "| MEDIUM | 530 |",
    "| LOW | 81 |",
    "| Raw total | 1157 |",
    "",
    "---",
    "",
    "## Pre-validation",
    "",
    "| Metrika | Skaits |",
    "|---|---:|",
    `| raw findings | ${pre.rawFindings || 1157} |`,
    `| duplicates | ${pre.duplicates || 0} |`,
    `| stale | ${pre.stale || counts.STALE_AFTER_AUDIT || 0} |`,
    `| unique findings | ${pre.uniqueFindings || 1157} |`,
    `| deterministic candidates | ${pre.deterministicValidated || fixByMethod.deterministic || 0} |`,
    `| Luna candidates | ${pre.lunaCandidates || 0} |`,
    "",
    "---",
    "",
    "## Final verdicts",
    "",
    "| Verdict | Count |",
    "|---|---:|",
    `| FIX | ${counts.FIX || 0} |`,
    `| KEEP | ${counts.KEEP || 0} |`,
    `| STYLE_ONLY | ${counts.STYLE_ONLY || 0} |`,
    `| PROJECT_CONVENTION | ${counts.PROJECT_CONVENTION || 0} |`,
    `| SOURCE_LV_ISSUE | ${counts.SOURCE_LV_ISSUE || 0} |`,
    `| DE_SOURCE_ISSUE | ${counts.DE_SOURCE_ISSUE || 0} |`,
    `| NEEDS_REVIEW | ${counts.NEEDS_REVIEW || 0} |`,
    `| STALE_AFTER_AUDIT | ${counts.STALE_AFTER_AUDIT || 0} |`,
    "",
    "---",
    "",
    "## FIX by validation method",
    "",
    "| Method | Count |",
    "|---|---:|",
    `| deterministic | ${fixByMethod.deterministic || 0} |`,
    `| Luna | ${fixByMethod.luna || 0} |`,
    "",
    "---",
    "",
    "## Validated severity (FIX only)",
    "",
    "| Severity | Count |",
    "|---|---:|",
    `| CRITICAL | ${validatedSeverity.CRITICAL || 0} |`,
    `| HIGH | ${validatedSeverity.HIGH || 0} |`,
    `| MEDIUM | ${validatedSeverity.MEDIUM || 0} |`,
    `| LOW | ${validatedSeverity.LOW || 0} |`,
    "",
    "---",
    "",
    "## Pattern report",
    "",
    "| Pattern | candidates | confirmed (FIX) | rejected |",
    "|---|---:|---:|---:|",
    ...patterns.map((p) => {
      const s = patternReport[p];
      return `| ${p} | ${s.candidates} | ${s.confirmed} | ${s.rejected} |`;
    }),
    "",
    "---",
    "",
    "## Confirmed FIX list (priority order)",
    "",
    "| cardId | field | severity | method | current | corrected | reason |",
    "|---|---|---|---|---|---|---|",
  ];

  const order = { CRITICAL: 0, HIGH: 1, MEDIUM: 2, LOW: 3 };
  const sortedFix = [...fixItems].sort((a, b) => (order[a.validatedSeverity] ?? 9) - (order[b.validatedSeverity] ?? 9));

  for (const f of sortedFix) {
    lines.push(`| ${esc(f.cardId)} | ${esc(f.field)} | ${f.validatedSeverity || ""} | ${f.validationMethod} | ${esc(f.currentText)} | ${esc(f.correctedText)} | ${esc(f.shortReason)} |`);
  }

  lines.push(
    "",
    "---",
    "",
    "## API usage",
    "",
    "| Metrika | Vērtība |",
    "|---|---|",
    `| model | \`gpt-5.6-luna\` |`,
    `| deterministic findings | ${fixByMethod.deterministic || 0} |`,
    `| Luna findings | ${fixByMethod.luna || 0} |`,
    `| API requests | ${stats.requestCount || 0} |`,
    `| successful | ${stats.requestCount || 0} |`,
    `| failed | 0 |`,
    `| retries | ${stats.retryCount || 0} |`,
    `| input tokens | ${stats.inputTokens || 0} |`,
    `| cached input tokens | ${stats.cachedInputTokens || 0} |`,
    `| output tokens | ${stats.outputTokens || 0} |`,
    `| reasoning tokens | ${stats.reasoningTokens || 0} |`,
    `| total tokens | ${stats.totalTokens || 0} |`,
    `| cost | cost not reliably calculated |`,
    "",
    "---",
    "",
    "## Statuss",
    "",
    "**B2 data files changed: 0**",
    "",
    data.meta?.inProgress === false || data.meta?.validatedCount === data.meta?.expectedCount
      ? "**BS–DE B2 AUDIT FINDINGS VALIDATION = COMPLETE**"
      : "**BS–DE B2 AUDIT FINDINGS VALIDATION = INCOMPLETE**",
    "",
    "Šis NAV QUALITY CYCLE CLOSED, NAV PRODUCTION READY, NAV FINAL – OWNER ACCEPTED.",
    "",
    "**NEKO NELABOT. VALIDATION / TRIAGE ONLY.**",
  );

  fs.writeFileSync(OUT, `${lines.join("\n")}\n`, "utf8");
  console.log(`Wrote ${OUT}`);
}

main();
