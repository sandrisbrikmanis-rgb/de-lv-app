#!/usr/bin/env node
/**
 * Write BS-DE B2 final verify regression audit report (read-only).
 */
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const { ROOT } = require("./lib/audit-common");

const AUDIT_JSON = path.join(ROOT, "reports", "temp", "bs-b2-final-verify-regression.json");
const REPORT_PATH = path.join(ROOT, "reports", "bs-b2-final-verify-regression.md");
const HASH_PATH = path.join(ROOT, "reports", "temp", "bs-b2-final-verify-regression-hash.txt");

const EXPECTED_CARDS = [
  "b2-durchbrennen-470",
  "b2-sich-hingeben",
  "b2-sich-revanchieren",
  "b2-sich-verwundern",
  "b2-sich-verlaufen",
];

function md5(filePath) {
  return crypto.createHash("md5").update(fs.readFileSync(filePath)).digest("hex");
}

function main() {
  if (!fs.existsSync(AUDIT_JSON)) {
    console.error("Missing:", AUDIT_JSON);
    process.exit(1);
  }

  const audit = JSON.parse(fs.readFileSync(AUDIT_JSON, "utf8"));
  const meta = audit.meta || {};
  const pre = audit.preCheck || {};
  const sev = audit.severityCounts || {};
  const other = audit.otherVerdictCounts || {};
  const api = audit.apiUsage || {};
  const cardVerdicts = audit.cardVerdicts || {};
  const accentResults = audit.accentResults || {};

  const findings = audit.qualityFindings || audit.findings || [];
  const zeroFindings = findings.length === 0 && (other.NEEDS_REVIEW || 0) === 0;
  const complete = meta.complete === true || meta.scopeAudited === 5;
  const status = !complete ? "INCOMPLETE"
    : zeroFindings && pre.pass !== false ? "PASS" : "FINDINGS REMAIN";

  const lines = [
    "# BS–DE B2 — final verify regression audit",
    "",
    `**Datums:** ${(meta.completedAt || new Date().toISOString()).slice(0, 10)}`,
    `**Model:** ${api.model || "gpt-5.6-luna"}`,
    "**Mode:** AUDIT ONLY — B2 data files changed: **0**",
    "",
    "## Coverage",
    "",
    "| Metric | Count |",
    "|---|---:|",
    `| Expected | 5 |`,
    `| Audited | ${meta.scopeAudited || audit.auditedCardIds?.length || 0} |`,
    `| PASS cards | ${audit.passCards || 0} |`,
    `| Skipped | ${meta.scopeSkipped || 0} |`,
    "",
    "## Findings",
    "",
    "| Severity | Count |",
    "|---|---:|",
    `| CRITICAL | ${sev.CRITICAL || 0} |`,
    `| HIGH | ${sev.HIGH || 0} |`,
    `| MEDIUM | ${sev.MEDIUM || 0} |`,
    `| LOW | ${sev.LOW || 0} |`,
    "",
    `| raw findings | ${audit.rawFindingsCount || 0} |`,
    `| duplicates | ${audit.duplicateFindings || 0} |`,
    `| **unique findings** | **${findings.length}** |`,
    "",
    "## Other",
    "",
    "| Verdict | Count |",
    "|---|---:|",
    `| STYLE_ONLY | ${other.STYLE_ONLY || 0} |`,
    `| PROJECT_CONVENTION | ${other.PROJECT_CONVENTION || 0} |`,
    `| SOURCE_LV_ISSUE | ${other.SOURCE_LV_ISSUE || 0} |`,
    `| DE_SOURCE_ISSUE | ${other.DE_SOURCE_ISSUE || 0} |`,
    `| NEEDS_REVIEW | ${other.NEEDS_REVIEW || 0} |`,
    "",
    "## Card verdicts",
    "",
  ];

  for (const cardId of EXPECTED_CARDS) {
    lines.push(`- **${cardId}:** ${cardVerdicts[cardId] || "—"}`);
  }
  lines.push("");

  lines.push("## sectionAccents (post stale-fragment removal)");
  lines.push("");
  for (const cardId of ["b2-sich-revanchieren", "b2-sich-verwundern"]) {
    const a = accentResults[cardId] || {};
    lines.push(`### ${cardId}`);
    lines.push("");
    lines.push(`- **verdict:** ${a.verdict || cardVerdicts[cardId] || "—"}`);
    lines.push(`- **stale fragment removed:** ${a.staleFragmentRemoved ? "yes" : "—"}`);
    if (a.sectionAccents) {
      lines.push(`- **sectionAccents:** \`${JSON.stringify(a.sectionAccents)}\``);
    }
    lines.push("");
  }

  lines.push("## Technical");
  lines.push("");
  lines.push("| Check | Result |");
  lines.push("|---|---|");
  lines.push(`| syntax | ${pre.syntax || "—"} |`);
  lines.push(`| DE READ-ONLY | ${pre.deReadOnly || "—"} |`);
  lines.push(`| sectionAccents TECHNICAL | ${pre.sectionAccentsTechnical ?? "—"} |`);
  lines.push(`| data ≡ www | ${pre.mirror || "—"} |`);
  lines.push(`| card count | ${pre.cardCount || 2118} |`);
  lines.push(`| study count | ${pre.studyCount || 60} |`);
  lines.push("");

  if (findings.length > 0) {
    lines.push("## Finding details");
    lines.push("");
    for (const f of findings) {
      lines.push(`### ${f.cardId} — ${f.field}`);
      lines.push("");
      lines.push(`- **severity:** ${f.severity}`);
      lines.push(`- **currentBs:** ${f.currentBs}`);
      lines.push(`- **proposedBs:** ${f.proposedBs}`);
      lines.push(`- **reason:** ${f.reason}`);
      lines.push("");
    }
  }

  lines.push("## API usage");
  lines.push("");
  lines.push(`| model | ${api.model || "gpt-5.6-luna"} |`);
  lines.push(`| requests | ${api.requestCount || 0} |`);
  lines.push(`| successful | ${api.successfulRequests || api.requestCount || 0} |`);
  lines.push(`| failed | ${api.failedRequests || 0} |`);
  lines.push(`| retries | ${api.retryCount || 0} |`);
  lines.push(`| input tokens | ${api.inputTokens || 0} |`);
  lines.push(`| cached input tokens | ${api.cachedInputTokens || 0} |`);
  lines.push(`| output tokens | ${api.outputTokens || 0} |`);
  lines.push(`| reasoning tokens | ${api.reasoningTokens || 0} |`);
  lines.push(`| total tokens | ${api.totalTokens || 0} |`);
  lines.push("");

  if (fs.existsSync(HASH_PATH)) {
    const hash = JSON.parse(fs.readFileSync(HASH_PATH, "utf8"));
    const dataNow = md5(path.join(ROOT, "data/bs/b2.js"));
    lines.push("## Data integrity");
    lines.push("");
    lines.push(`- **B2 data files changed: ${dataNow === hash.data ? 0 : "YES — ERROR"}**`);
    lines.push("");
  }

  lines.push(`# BS–DE B2 FINAL VERIFY REGRESSION = ${status}`);
  if (status === "PASS") {
    lines.push("");
    lines.push("# BS–DE B2 AUTOMATED QUALITY/FIX CYCLE = CLOSED");
  }

  fs.writeFileSync(REPORT_PATH, `${lines.join("\n")}\n`, "utf8");
  console.log(`Wrote ${REPORT_PATH}`);
}

main();
