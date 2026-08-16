#!/usr/bin/env node
"use strict";
/**
 * Build DA–DE Kurss OWNER review + decisions + accepted + GitHub index (READ-ONLY).
 */
const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");

const AUDIT_JSON = path.join(ROOT, "reports/temp/da-kurss-full-audit.json");
const AUDITOR = "GPT-5.6 Luna";
const AUDIT_REPORT = "da-kurss-full-audit.md";

const OUT = {
  review: path.join(ROOT, "reports/da-kurss-owner-review.md"),
  decisions: path.join(ROOT, "reports/da-kurss-owner-decisions.md"),
  accepted: path.join(ROOT, "reports/da-kurss-owner-accepted.md"),
  github: path.join(ROOT, "reports/da-kurss-owner-review-GITHUB.md"),
  readme: path.join(ROOT, "reports/da-kurss-owner-review-README.md"),
};

function escapePipe(text) {
  return String(text || "").replace(/\|/g, "\\|").replace(/\n/g, " ").trim();
}

function truncate(text, max = 100) {
  const s = String(text || "");
  return s.length > max ? `${s.slice(0, max)}…` : s;
}

function loadFindings() {
  if (!fs.existsSync(AUDIT_JSON)) {
    console.error(`Missing ${AUDIT_JSON}. Run run-da-kurss-full-audit.js first.`);
    process.exit(1);
  }
  const data = JSON.parse(fs.readFileSync(AUDIT_JSON, "utf8"));
  return (data.findings || []).filter((f) => f.category !== "FALSE_POSITIVE");
}

function renderFinding(f, num) {
  return [
    `## Finding ${num} (Kurss)`,
    "",
    `**Finding:** ${num}`,
    `**Audit ID:** ${f.id}`,
    `**Lesson/ID:** \`${f.lessonId}\``,
    `**Path:** \`${f.path}\``,
    `**Field type:** \`${f.fieldType || "—"}\``,
    `**DE (read-only):** ${truncate(f.deCurrent || "—", 200)}`,
    `**CURRENT_DA:** ${truncate(f.daCurrent, 400)}`,
    `**PROPOSED_DA:** ${truncate(f.proposedDa, 400)}`,
    `**Severity:** ${f.severity}`,
    `**Category:** ${f.category}`,
    `**Problem:** ${f.problem}`,
    `**Reason:** ${f.reason || f.problem}`,
    `**Statuss:** PENDING`,
    `**OWNER_DECISION:** [nav aizpildīts]`,
    "",
    `**Avots:** ${AUDITOR} audit (\`reports/${AUDIT_REPORT}\`) · ${f.source}`,
    "",
    "---",
    "",
  ].join("\n");
}

function renderReviewFile(findings) {
  return [
    "# DA–DE Kurss — OWNER preview",
    "",
    `**Auditors:** ${AUDITOR} (READ-ONLY)`,
    `Avots: \`reports/${AUDIT_REPORT}\` / \`reports/temp/da-kurss-full-audit.json\``,
    `Findings: **${findings.length}** ieraksti`,
    "Fails: `reports/da-kurss-owner-review.md`",
    "",
    "> **PROPOSED_DA** ir GPT-5.6 Luna ieteikums — **nav** OWNER apstiprināts.",
    "> **Statuss:** sākotnēji **PENDING**. OWNER aizpilda `da-kurss-owner-decisions.md`.",
    "> **DE lauki nemainīt.** Apply tikai DA lauki pēc OWNER lēmuma.",
    "",
    ...findings.map((f, i) => renderFinding(f, i + 1)),
  ].join("\n");
}

function renderTableFile(findings, mode) {
  const isAccepted = mode === "accepted";
  const title = isAccepted ? "OWNER accepted (recommended LABOT track)" : "OWNER decisions";
  const lines = [
    `# DA–DE Kurss — ${title}`,
    "",
    `**Auditors:** ${AUDITOR} (READ-ONLY)`,
    "Avots: `reports/da-kurss-owner-review.md`",
    `Findings: **${findings.length}** ieraksti`,
    "",
    "**DE = STRICT READ-ONLY.**",
    isAccepted
      ? "Šis fails ir **ieteicamais LABOT ceļš**, ja OWNER piekrīt auditora PROPOSED_DA."
      : "Sākotnēji visi ieraksti: **Statuss: PENDING**, **OWNER_DECISION:** tukšs.",
    "",
    "| # | Finding | Lesson/ID | Path | DE_CURRENT | DA_CURRENT | PROPOSED_DA | Severity | Statuss | OWNER_DECISION |",
    "|--:|--------:|-----------|------|------------|------------|-------------|----------|---------|----------------|",
  ];

  findings.forEach((f, i) => {
    const num = i + 1;
    const status = isAccepted ? "LABOT" : "PENDING";
    lines.push(
      `| ${num} | ${f.id} | \`${f.lessonId}\` | \`${truncate(f.path, 40)}\` | ${truncate(escapePipe(f.deCurrent), 50)} | ${truncate(escapePipe(f.daCurrent), 50)} | ${truncate(escapePipe(f.proposedDa), 50)} | ${f.severity} | ${status} | |`
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
    `- findings: **${findings.length}**`,
    `- CRITICAL: **${bySev.CRITICAL || 0}**`,
    `- HIGH: **${bySev.HIGH || 0}**`,
    `- MEDIUM: **${bySev.MEDIUM || 0}**`,
    `- LOW: **${bySev.LOW || 0}**`,
    "- DE izmaiņas: **0**",
    ""
  );
  return lines.join("\n");
}

function gh(path) {
  return `https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/da-kurss-full-audit-fffe/${path}`;
}

function renderGithubIndex(findings) {
  return [
    "# DA–DE Kurss — OWNER review (GitHub index)",
    "",
    `**Auditors:** ${AUDITOR} (READ-ONLY)`,
    "**Branch:** `cursor/da-kurss-full-audit-fffe`",
    "**PR:** [#566](https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/566)",
    `**Findings:** ${findings.length} · **Verdict:** NEEDS OWNER REVIEW`,
    "",
    "> Faili **nav** uz `main` — tie ir tikai audit PR zarā. Izmanto saites zemāk.",
    "",
    "## Faili",
    "",
    "| Fails | Apraksts |",
    "|-------|----------|",
    `| [da-kurss-full-audit.md](${gh("reports/da-kurss-full-audit.md")}) | Galvenā audit atskaite |`,
    `| [da-kurss-owner-review.md](${gh("reports/da-kurss-owner-review.md")}) | Pilns OWNER preview |`,
    `| [da-kurss-owner-decisions.md](${gh("reports/da-kurss-owner-decisions.md")}) | OWNER lēmumi (PENDING) |`,
    `| [da-kurss-owner-accepted.md](${gh("reports/da-kurss-owner-accepted.md")}) | Ieteicamais LABOT ceļš |`,
    `| [da-kurss-owner-review-README.md](${gh("reports/da-kurss-owner-review-README.md")}) | Instrukcijas |`,
    "",
    "## Apply",
    "",
    "1. Aizpildīt `da-kurss-owner-decisions.md`",
    "2. Apply COPY-ONLY uz `data/da/` + `www/data/da/` mirror",
    "3. **DE nemainīt**",
    "",
    `Production changes = 0 · DE changes = 0 · Findings = ${findings.length}`,
  ].join("\n");
}

function main() {
  const findings = loadFindings();
  if (!findings.length) {
    console.log("No findings — OWNER review pack skipped.");
    return;
  }

  fs.mkdirSync(path.dirname(OUT.review), { recursive: true });
  fs.writeFileSync(OUT.review, renderReviewFile(findings));
  fs.writeFileSync(OUT.decisions, renderTableFile(findings, "decisions"));
  fs.writeFileSync(OUT.accepted, renderTableFile(findings, "accepted"));
  fs.writeFileSync(OUT.github, renderGithubIndex(findings));
  fs.writeFileSync(
    OUT.readme,
    `# DA–DE Kurss — OWNER review README\n\nFindings: **${findings.length}**\n\nSkatīt [da-kurss-owner-review-GITHUB.md](./da-kurss-owner-review-GITHUB.md)\n`
  );

  console.log(
    JSON.stringify(
      {
        findings: findings.length,
        outputs: Object.fromEntries(Object.entries(OUT).map(([k, v]) => [k, path.relative(ROOT, v)])),
      },
      null,
      2
    )
  );
}

main();
