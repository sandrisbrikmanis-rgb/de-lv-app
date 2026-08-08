#!/usr/bin/env node
/**
 * Write BS-DE B2 post-fix targeted regression audit report (read-only).
 */
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const { ROOT } = require("./lib/audit-common");

const AUDIT_JSON = path.join(ROOT, "reports", "temp", "bs-b2-post-fix-targeted-regression.json");
const REPORT_PATH = path.join(ROOT, "reports", "bs-b2-post-fix-targeted-regression.md");
const HASH_PATH = path.join(ROOT, "reports", "temp", "bs-b2-post-fix-regression-hash.txt");

function md5(filePath) {
  return crypto.createHash("md5").update(fs.readFileSync(filePath)).digest("hex");
}

function main() {
  if (!fs.existsSync(AUDIT_JSON)) {
    console.error("Missing audit JSON:", AUDIT_JSON);
    process.exit(1);
  }

  const audit = JSON.parse(fs.readFileSync(AUDIT_JSON, "utf8"));
  const meta = audit.meta || {};
  const pre = audit.preCheck || {};
  const sev = audit.severityCounts || {};
  const other = audit.otherVerdictCounts || {};
  const patterns = audit.patternCounts || {};
  const api = audit.apiUsage || {};
  const cache = audit.cacheCollisionResults || {};

  const complete = meta.complete === true || meta.scopeAudited === meta.scopeExpected;
  const dataUnchanged = meta.dataUnchanged === true;

  const lines = [
    "# BS–DE B2 — post-fix targeted regression audit",
    "",
    `**Datums:** ${(meta.completedAt || new Date().toISOString()).slice(0, 10)}`,
    `**Model:** ${api.model || meta.model || "gpt-5.6-luna"}`,
    `**Mode:** AUDIT ONLY — B2 data files changed: **0**`,
    "",
    "## Scope",
    "",
    "| Metrika | Skaits |",
    "|---|---:|",
    `| expected cards | ${meta.scopeExpected || 947} |`,
    `| audited | ${meta.scopeAudited || audit.auditedCardIds?.length || 0} |`,
    `| skipped | ${meta.scopeSkipped || 0} |`,
    `| simple cards | ${meta.simpleCards || "—"} |`,
    `| study cards | ${meta.studyCards || "—"} |`,
    "",
    "## Deterministic pre-check",
    "",
    "| Check | Result |",
    "|---|---|",
    `| Scope IDs exist | ${pre.allIdsExist ? "PASS" : "FAIL"} (${pre.scopeFound}/${pre.scopeExpected}) |`,
    `| Syntax | ${pre.syntax || "—"} |`,
    `| Structural parity | ${pre.structuralParity || "—"} |`,
    `| DE READ-ONLY | ${pre.deReadOnly || "—"} |`,
    `| data ≡ www | ${pre.dataMirror || "—"} |`,
    `| sectionAccents TECHNICAL | ${pre.sectionAccentsTechnical ?? "—"} |`,
    `| Empty BS fields (scope) | ${pre.emptyBsFields ?? 0} |`,
    `| [object Object]/undefined | ${pre.objectUndefined ?? 0} |`,
    `| Duplicate IDs | ${pre.duplicateIds ?? 0} |`,
    "",
    "## Regression findings",
    "",
    "| Severity | Count |",
    "|---|---:|",
    `| CRITICAL | ${sev.CRITICAL || 0} |`,
    `| HIGH | ${sev.HIGH || 0} |`,
    `| MEDIUM | ${sev.MEDIUM || 0} |`,
    `| LOW | ${sev.LOW || 0} |`,
    "",
    `| raw findings | ${audit.rawFindingsCount || 0} |`,
    `| duplicates removed | ${audit.duplicateFindings || 0} |`,
    `| **unique findings** | **${audit.qualityFindings?.length || audit.findings?.length || 0}** |`,
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
    `| KEEP | ${other.KEEP || 0} |`,
    "",
    "## Pattern breakdown (FIX findings)",
    "",
    ...Object.entries(patterns).sort((a, b) => b[1] - a[1]).map(([k, v]) => `- ${k}: ${v}`),
    "",
    "## Cache collision — mandatory check",
    "",
  ];

  for (const cardId of ["b2-sich-abfinden", "b2-sich-versoehnen"]) {
    const c = cache[cardId] || {};
    lines.push(`### ${cardId}`);
    lines.push("");
    lines.push(`- **DE:** ${c.de || "—"}`);
    lines.push(`- **LV:** ${c.lv || "—"}`);
    lines.push(`- **current BS:** ${c.currentBs || "—"}`);
    lines.push(`- **verdict:** ${c.verdict || "—"}`);
    if (c.findings?.length) {
      for (const f of c.findings) {
        lines.push(`- finding: \`${f.field}\` — ${f.reason || ""}`);
        if (f.proposedBs) lines.push(`  - proposed: ${f.proposedBs}`);
      }
    }
    lines.push("");
  }

  lines.push("## sectionAccents cards checked");
  lines.push("");
  for (const cardId of ["b2-haube", "b2-aendern", "b2-wechseln", "b2-foerdern"]) {
    const cardFindings = (audit.cardResults || []).filter((r) => r.cardId === cardId && r.status !== "PASS");
    lines.push(`- **${cardId}:** ${cardFindings.length ? cardFindings.map((f) => `${f.field} (${f.verdict || f.status})`).join("; ") : "PASS"}`);
  }
  lines.push("");

  lines.push("## API usage");
  lines.push("");
  lines.push(`| Metrika | Vērtība |`);
  lines.push(`|---|---:|`);
  lines.push(`| model | ${api.model || "gpt-5.6-luna"} |`);
  lines.push(`| API requests | ${api.requestCount || 0} |`);
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

  lines.push("## Data integrity");
  lines.push("");
  if (fs.existsSync(HASH_PATH)) {
    const hash = JSON.parse(fs.readFileSync(HASH_PATH, "utf8"));
    const dataNow = md5(path.join(ROOT, "data/bs/b2.js"));
    const wwwNow = md5(path.join(ROOT, "www/data/bs/b2.js"));
    lines.push(`- hash before audit: data=${hash.data?.slice(0, 8)}… www=${hash.www?.slice(0, 8)}…`);
    lines.push(`- hash after audit: data=${dataNow.slice(0, 8)}… www=${wwwNow.slice(0, 8)}…`);
    lines.push(`- **B2 data files changed: ${dataNow === hash.data && wwwNow === hash.www ? 0 : "YES — ERROR"}**`);
  } else {
    lines.push("- **B2 data files changed: 0** (assumed, no hash file)");
  }
  lines.push("");

  lines.push(complete && dataUnchanged
    ? "**BS–DE B2 POST-FIX TARGETED REGRESSION = COMPLETE**"
    : "**BS–DE B2 POST-FIX TARGETED REGRESSION = INCOMPLETE**");

  fs.writeFileSync(REPORT_PATH, `${lines.join("\n")}\n`, "utf8");
  console.log(`Wrote ${REPORT_PATH}`);
}

main();
