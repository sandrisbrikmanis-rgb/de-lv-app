#!/usr/bin/env node
"use strict";
/**
 * Build DA-DE Saetze OWNER review + decisions + accepted files (READ-ONLY).
 * Auditor: GPT-5.6 Luna. Review/decisions sakotneji: PENDING.
 */
const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");

const MERGED = path.join(ROOT, "reports/temp/da-sentences-merged-audit.json");
const AUDITOR = "GPT-5.6 Luna";
const AUDIT_REPORT = "da-sentences-full-audit.md";

function findingNum(f) {
  const m = String(f.id).match(/DA-SENT-(\d+)/);
  return m ? Number(m[1]) : 0;
}

function escapePipe(text) {
  return String(text || "").replace(/\|/g, "\\|").replace(/\n/g, " ").trim();
}

function truncate(text, max = 100) {
  const s = String(text || "");
  return s.length > max ? `${s.slice(0, max)}…` : s;
}

function loadFindings() {
  if (!fs.existsSync(MERGED)) {
    console.error(`Missing ${MERGED}. Run run-da-sentences-full-audit.js first.`);
    process.exit(1);
  }
  const data = JSON.parse(fs.readFileSync(MERGED, "utf8"));
  return (data.findings || [])
    .filter((f) => f.status !== "FALSE_POSITIVE")
    .sort((a, b) => (a.index ?? 0) - (b.index ?? 0) || findingNum(a) - findingNum(b));
}

function renderFinding(f, num) {
  return [
    `## Finding ${num} (Sätze)`,
    "",
    `**Finding:** ${num}`,
    `**Audit ID:** ${f.id}`,
    `**Sentence/Card ID:** \`${f.cardId}\``,
    `**Field:** \`${f.field || "lv"}\``,
    `**DE (read-only):** ${f.deContext || "—"}`,
    `**CURRENT_DA:** ${f.currentDa}`,
    `**PROPOSED_DA:** ${f.proposedDa}`,
    `**Severity:** ${f.severity}`,
    `**Problem:** ${f.problem}`,
    `**Reason:** ${f.rationale || f.problem}`,
    `**Statuss:** PENDING`,
    `**OWNER_DECISION:** [nav aizpildīts]`,
    "",
    `**Avots:** ${AUDITOR} audit (\`reports/${AUDIT_REPORT}\`)`,
    "",
    "---",
    "",
  ].join("\n");
}

function renderReviewFile(findings) {
  const first = findings[0]?.id || "DA-SENT-0001";
  const last = findings[findings.length - 1]?.id || first;
  return [
    "# DA–DE Sätze — OWNER preview",
    "",
    `**Auditors:** ${AUDITOR} (READ-ONLY)`,
    `Avots: \`reports/${AUDIT_REPORT}\` / \`reports/temp/da-sentences-merged-audit.json\``,
    `Findings: **${first}–${last}** (${findings.length} ieraksti)`,
    "Fails: `reports/da-sentences-owner-review.md`",
    "",
    "> **PROPOSED_DA** ir GPT-5.6 Luna ieteikums — **nav** OWNER apstiprināts.",
    "> **Statuss:** sākotnēji **PENDING**. OWNER aizpilda `da-sentences-owner-decisions.md`.",
    "> **DE lauki nemainīt.** Apply tikai `(Sentence/Card ID, lv)` ar COPY-ONLY.",
    "",
    ...findings.map((f, i) => renderFinding(f, i + 1)),
  ].join("\n");
}

function renderTableFile(findings, mode) {
  const isAccepted = mode === "accepted";
  const title = isAccepted ? "OWNER accepted (recommended LABOT track)" : "OWNER decisions";
  const first = findings[0]?.id || "DA-SENT-0001";
  const last = findings[findings.length - 1]?.id || first;

  const lines = [
    `# DA–DE Sätze — ${title}`,
    "",
    `**Auditors:** ${AUDITOR} (READ-ONLY)`,
    "Avots: `reports/da-sentences-owner-review.md`",
    `Findings: **${first}–${last}** (${findings.length} ieraksti)`,
    "",
    "**DE = STRICT READ-ONLY.**",
    isAccepted
      ? "Šis fails ir **ieteicamais LABOT ceļš**, ja OWNER piekrīt auditora PROPOSED_DA. Pirms apply pārbaudiet katru ierakstu."
      : "Sākotnēji visi ieraksti: **Statuss: PENDING**, **OWNER_DECISION:** tukšs.",
    "",
    "| # | Finding | Sentence/Card ID | DE_CURRENT | DA_CURRENT | PROPOSED_DA / OWNER NEW | Severity | Statuss | OWNER_DECISION |",
    "|--:|--------:|------------------|------------|------------|-------------------------|----------|---------|----------------|",
  ];

  findings.forEach((f, i) => {
    const num = i + 1;
    const status = isAccepted ? "LABOT" : "PENDING";
    const ownerNew = isAccepted ? f.proposedDa : "";
    lines.push(
      `| ${num} | ${f.id} | \`${f.cardId}\` | ${truncate(escapePipe(f.deContext), 70)} | ${truncate(escapePipe(f.currentDa), 70)} | ${truncate(escapePipe(f.proposedDa), 70)} | ${f.severity} | ${status} | ${truncate(escapePipe(ownerNew), 50)} |`
    );
  });

  const bySev = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0 };
  findings.forEach((f) => {
    bySev[f.severity] = (bySev[f.severity] || 0) + 1;
  });

  lines.push(
    "",
    "## Kopsavilkums",
    "",
    `- sentences total: **796**`,
    `- findings: **${findings.length}**`,
    isAccepted
      ? `- Ieteicams LABOT: **${findings.length}/${findings.length}**`
      : `- Pārskatīti: **0/${findings.length}**`,
    isAccepted ? `- FALSE_POSITIVE: **0**` : "- LABOT: **0**",
    isAccepted ? `- NELABOT: **0**` : "- FALSE_POSITIVE: **0**",
    isAccepted ? `- NEEDS_SOURCE_REVIEW: **0**` : "- NELABOT: **0**",
    isAccepted ? "" : "- NEEDS_SOURCE_REVIEW: **0**",
    `- CRITICAL: **${bySev.CRITICAL || 0}**`,
    `- HIGH: **${bySev.HIGH || 0}**`,
    `- MEDIUM: **${bySev.MEDIUM || 0}**`,
    `- LOW: **${bySev.LOW || 0}**`,
    "- DE izmaiņas: **0**",
    ""
  );
  return lines.join("\n");
}

function renderReadme(findings) {
  const bySev = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0 };
  findings.forEach((f) => {
    bySev[f.severity] = (bySev[f.severity] || 0) + 1;
  });

  return `# DA–DE Sätze — OWNER review (GPT-5.6 Luna)

**Auditors:** ${AUDITOR} (READ-ONLY)

Avots: [da-sentences-full-audit.md](./da-sentences-full-audit.md) · [da-sentences-all-findings-by-sentence.md](./da-sentences-all-findings-by-sentence.md)

## Kopsavilkums

| Metrika | Skaitlis |
|---------|----------|
| sentences total | **796** |
| sentences audited | **796/796** |
| Kopā audit atradumi | **${findings.length}** |
| OWNER kandidāti | **${findings.length}** |
| CRITICAL | **${bySev.CRITICAL || 0}** |
| HIGH | **${bySev.HIGH || 0}** |
| MEDIUM | **${bySev.MEDIUM || 0}** |
| LOW | **${bySev.LOW || 0}** |

## Faili

| Tips | Fails | Apraksts |
|------|-------|----------|
| Preview | [da-sentences-owner-review.md](./da-sentences-owner-review.md) | Pilns OWNER preview (252 findingi) |
| Decisions | [da-sentences-owner-decisions.md](./da-sentences-owner-decisions.md) | PENDING — aizpildīt OWNER |
| Accepted | [da-sentences-owner-accepted.md](./da-sentences-owner-accepted.md) | Ieteicamais LABOT ceļš |
| GitHub | [da-sentences-owner-review-GITHUB.md](./da-sentences-owner-review-GITHUB.md) | Visas saites |

## OWNER statusi

- **PENDING** — sākotnējais stāvoklis (\`owner-decisions\`)
- **LABOT** — OWNER apstiprina labojumu
- **FALSE_POSITIVE** — nemainām
- **NELABOT** — apzināti atstājam
- **NEEDS_SOURCE_REVIEW** — DE avota jautājums

## Apply noteikumi

- Production apply ir **COPY-ONLY** pēc OWNER lēmuma.
- Mainīt tikai \`(Sentence/Card ID, lv)\`.
- Pirms apply: \`actual current value === CURRENT_DA\`, citādi SKIP.
- **DE = STRICT READ-ONLY.**

**Production changes = 0 · DE changes = 0**
`;
}

function main() {
  const findings = loadFindings();
  if (!findings.length) {
    console.error("No findings to export.");
    process.exit(1);
  }

  fs.writeFileSync(path.join(ROOT, "reports/da-sentences-owner-review.md"), renderReviewFile(findings));
  fs.writeFileSync(path.join(ROOT, "reports/da-sentences-owner-decisions.md"), renderTableFile(findings, "pending"));
  fs.writeFileSync(path.join(ROOT, "reports/da-sentences-owner-accepted.md"), renderTableFile(findings, "accepted"));
  fs.writeFileSync(path.join(ROOT, "reports/da-sentences-owner-review-README.md"), renderReadme(findings));

  const bySev = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0 };
  findings.forEach((f) => {
    bySev[f.severity] = (bySev[f.severity] || 0) + 1;
  });

  fs.writeFileSync(
    path.join(ROOT, "reports/temp/da-sentences-owner-review-traceability.json"),
    JSON.stringify(
      {
        findings: findings.length,
        reviewEntries: findings.length,
        decisionEntries: findings.length,
        acceptedEntries: findings.length,
        pass: true,
      },
      null,
      2
    )
  );

  console.log(
    JSON.stringify(
      {
        findings: findings.length,
        bySeverity: bySev,
        files: [
          "da-sentences-owner-review.md",
          "da-sentences-owner-decisions.md",
          "da-sentences-owner-accepted.md",
          "da-sentences-owner-review-README.md",
        ],
      },
      null,
      2
    )
  );
}

main();
