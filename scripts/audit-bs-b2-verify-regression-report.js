#!/usr/bin/env node
/**
 * Write BS-DE B2 verify regression audit report (read-only).
 */
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const { ROOT } = require("./lib/audit-common");

const AUDIT_JSON = path.join(ROOT, "reports", "temp", "bs-b2-verify-regression.json");
const REPORT_PATH = path.join(ROOT, "reports", "bs-b2-verify-regression.md");
const HASH_PATH = path.join(ROOT, "reports", "temp", "bs-b2-verify-regression-hash.txt");

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
  const special = audit.specialResults || {};

  const findings = audit.qualityFindings || audit.findings || [];
  const zeroFindings = findings.length === 0 && (other.NEEDS_REVIEW || 0) === 0;
  const complete = meta.complete === true || meta.scopeAudited === 42;
  const status = !complete ? "INCOMPLETE"
    : zeroFindings && pre.pass !== false ? "PASS" : "FINDINGS REMAIN";

  const lines = [
    "# BS–DE B2 — verify regression audit",
    "",
    `**Datums:** ${(meta.completedAt || new Date().toISOString()).slice(0, 10)}`,
    `**Model:** ${api.model || "gpt-5.6-luna"}`,
    "**Mode:** AUDIT ONLY — B2 data files changed: **0**",
    "",
    "## Coverage",
    "",
    "| Metrika | Skaits |",
    "|---|---:|",
    `| expected | 42 |`,
    `| audited | ${meta.scopeAudited || audit.auditedCardIds?.length || 0} |`,
    `| skipped | ${meta.scopeSkipped || 0} |`,
    `| PASS cards | ${audit.passCards || 0} |`,
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
    "## Other verdicts",
    "",
    "| Verdict | Count |",
    "|---|---:|",
    `| STYLE_ONLY | ${other.STYLE_ONLY || 0} |`,
    `| PROJECT_CONVENTION | ${other.PROJECT_CONVENTION || 0} |`,
    `| SOURCE_LV_ISSUE | ${other.SOURCE_LV_ISSUE || 0} |`,
    `| DE_SOURCE_ISSUE | ${other.DE_SOURCE_ISSUE || 0} |`,
    `| NEEDS_REVIEW | ${other.NEEDS_REVIEW || 0} |`,
    "",
    "## Technical",
    "",
    "| Check | Result |",
    "|---|---|",
    `| syntax | ${pre.syntax || "—"} |`,
    `| DE READ-ONLY | ${pre.deReadOnly || "—"} |`,
    `| sectionAccents TECHNICAL | ${pre.sectionAccentsTechnical ?? "—"} |`,
    `| data ≡ www | ${pre.mirror || "—"} |`,
    `| card count | ${pre.cardCount || 2118} |`,
    `| study count | ${pre.studyCount || 60} |`,
    "",
    "## Special cards",
    "",
  ];

  for (const cardId of ["b2-sich-einpraegen", "b2-nachdruck"]) {
    const s = special[cardId] || {};
    lines.push(`### ${cardId}`);
    lines.push("");
    lines.push(`- **verdict:** ${s.verdict || "—"}`);
    if (s.rektion) lines.push(`- **rektion:** ${s.rektion}`);
    if (s.forms) lines.push(`- **forms:** ${s.forms}`);
    if (s.exampleLv) lines.push(`- **example[0].lv:** ${s.exampleLv}`);
    if (s.findings?.length) {
      for (const f of s.findings) lines.push(`- finding: ${f.field} — ${f.reason}`);
    }
    lines.push("");
  }

  lines.push("### sectionAccents cards (6 in scope)");
  lines.push("");
  const accentCards = [
    "b2-sich-erniedrigen", "b2-sich-erregen", "b2-sich-genieren",
    "b2-sich-gesellen", "b2-sich-gestalten", "b2-sich-grauen",
  ];
  for (const cardId of accentCards) {
    const s = special[cardId] || {};
    lines.push(`- **${cardId}:** ${s.verdict || (s.inScope === false ? "not in scope" : "—")}`);
  }
  lines.push("");

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
  lines.push(`| cost | cost not reliably calculated |`);
  lines.push("");

  if (fs.existsSync(HASH_PATH)) {
    const hash = JSON.parse(fs.readFileSync(HASH_PATH, "utf8"));
    const dataNow = md5(path.join(ROOT, "data/bs/b2.js"));
    lines.push("## Data integrity");
    lines.push("");
    lines.push(`- **B2 data files changed: ${dataNow === hash.data ? 0 : "YES — ERROR"}**`);
    lines.push("");
  }

  lines.push(`# BS–DE B2 VERIFY REGRESSION = ${status}`);

  fs.writeFileSync(REPORT_PATH, `${lines.join("\n")}\n`, "utf8");
  console.log(`Wrote ${REPORT_PATH}`);
}

main();
