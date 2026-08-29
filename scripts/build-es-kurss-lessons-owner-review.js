#!/usr/bin/env node
"use strict";
/**
 * Build ES–DE Kurss Lessons OWNER review + decisions + accepted + GitHub index (READ-ONLY).
 */
const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");

const AUDIT_JSON = path.join(ROOT, "reports/temp/es-kurss-lessons-full-audit-v2.json");
const AUDITOR = "GPT-5.6 Luna v2 + deterministic";
const AUDIT_REPORT = "es-kurss-lessons-full-audit-v2.md";
const REPO = "sandrisbrikmanis-rgb/de-lv-app";
const BRANCH = process.env.WORK_BRANCH || "cursor/es-kurss-lessons-full-audit-3141";
const GROUP_SIZE = 50;

const OUT = {
  view: path.join(ROOT, "reports/es-kurss-lessons-owner-view.md"),
  review: path.join(ROOT, "reports/es-kurss-lessons-owner-review.md"),
  decisions: path.join(ROOT, "reports/es-kurss-lessons-owner-decisions.md"),
  accepted: path.join(ROOT, "reports/es-kurss-lessons-owner-accepted.md"),
  github: path.join(ROOT, "reports/es-kurss-lessons-owner-review-GITHUB.md"),
  readme: path.join(ROOT, "reports/es-kurss-lessons-owner-review-README.md"),
};

function escapePipe(text) {
  return String(text || "").replace(/\|/g, "\\|").replace(/\n/g, " ").trim();
}

function truncate(text, max = 100) {
  const s = String(text || "");
  return s.length > max ? `${s.slice(0, max)}…` : s;
}

function countBySev(findings) {
  const bySev = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0 };
  findings.forEach((f) => {
    bySev[f.severity] = (bySev[f.severity] || 0) + 1;
  });
  return bySev;
}

function gh(relPath) {
  return `https://github.com/${REPO}/blob/${BRANCH}/${relPath}`;
}

function loadFindings() {
  if (!fs.existsSync(AUDIT_JSON)) {
    console.error(`Missing ${AUDIT_JSON}. Run audit-es-kurss-lessons-full.js first.`);
    process.exit(1);
  }
  const data = JSON.parse(fs.readFileSync(AUDIT_JSON, "utf8"));
  return (data.findings || []).filter((f) => f.category !== "FALSE_POSITIVE");
}

function renderFinding(f, num) {
  return [
    `## Finding ${num} (ES Kurss Lessons)`,
    "",
    `**Finding:** ${num}`,
    `**Audit ID:** ${f.id}`,
    `**Lesson:** \`${f.lessonId}\``,
    `**Path:** \`${f.path}\``,
    `**Field type:** \`${f.fieldType || "—"}\``,
    `**DE (read-only):** ${truncate(f.deContext || "—", 200)}`,
    `**CURRENT_ES:** ${truncate(f.esCurrent, 400)}`,
    `**PROPOSED_ES:** ${truncate(f.proposedEs, 400)}`,
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

function verifyOwnerArtifactCoverage(findings) {
  const n = findings.length;
  const viewIds = new Set();
  if (fs.existsSync(OUT.view)) {
    for (const m of fs.readFileSync(OUT.view, "utf8").matchAll(/^## Finding (\d+) \(ES Kurss Lessons\)/gm)) {
      viewIds.add(m[1]);
    }
  }
  let decisionRows = 0;
  if (fs.existsSync(OUT.decisions)) {
    for (const line of fs.readFileSync(OUT.decisions, "utf8").split("\n")) {
      const m = line.match(/^\| (\d+) \|/);
      if (m) decisionRows += 1;
    }
  }
  const expectedIds = new Set(findings.map((_, i) => String(i + 1)));
  const missingInOwnerView = [...expectedIds].filter((id) => !viewIds.has(id)).length;
  const pass = n > 0 && viewIds.size === n && decisionRows === n && missingInOwnerView === 0;

  return {
    ownerBacklogFinal: n,
    ownerViewFindings: viewIds.size,
    ownerDecisionsFindings: decisionRows,
    missingInOwnerView,
    ownerArtifactCoverage: pass ? "100%" : "<100%",
    pass,
  };
}

function renderViewFile(findings, titleSuffix = "") {
  return [
    `# ES–DE Kurss Lessons — OWNER VIEW${titleSuffix}`,
    "",
    `**Auditors:** ${AUDITOR} (READ-ONLY)`,
    "**Standard:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.9",
    `Avots: \`reports/${AUDIT_REPORT}\` / \`reports/temp/es-kurss-lessons-full-audit-v2.json\``,
    `Findings: **${findings.length}** ieraksti`,
    "",
    "> **PROPOSED_ES** ir auditora ieteikums — **nav** OWNER apstiprināts.",
    "> **Statuss:** sākotnēji **PENDING**. OWNER aizpilda decisions tabulu.",
    "> **DE lauki nemainīt.** Apply tikai ES lauki pēc OWNER lēmuma.",
    "",
    ...findings.map((f, i) => renderFinding(f, f._globalNum || i + 1)),
  ].join("\n");
}

function renderTableFile(findings, mode, titleSuffix = "") {
  const isAccepted = mode === "accepted";
  const title = isAccepted ? "OWNER accepted (recommended LABOT track)" : "OWNER decisions";
  const lines = [
    `# ES–DE Kurss Lessons — ${title}${titleSuffix}`,
    "",
    `**Auditors:** ${AUDITOR} (READ-ONLY)`,
    "Avots: `reports/es-kurss-lessons-owner-review.md`",
    `Findings: **${findings.length}** ieraksti`,
    "",
    "**DE = STRICT READ-ONLY.**",
    isAccepted
      ? "Šis fails ir **ieteicamais LABOT ceļš**, ja OWNER piekrīt auditora PROPOSED_ES."
      : "Sākotnēji visi ieraksti: **Statuss: PENDING**, **OWNER_DECISION:** tukšs.",
    "",
    "| # | Finding | Lesson | Path | DE_CONTEXT | ES_CURRENT | PROPOSED_ES | Severity | Statuss | OWNER_DECISION |",
    "|--:|--------:|--------|------|------------|------------|-------------|----------|---------|----------------|",
  ];

  findings.forEach((f, i) => {
    const num = f._globalNum || i + 1;
    const status = isAccepted ? "LABOT" : "PENDING";
    lines.push(
      `| ${num} | ${f.id} | \`${f.lessonId}\` | \`${truncate(f.path, 40)}\` | ${truncate(escapePipe(f.deContext), 50)} | ${truncate(escapePipe(f.esCurrent), 50)} | ${truncate(escapePipe(f.proposedEs), 50)} | ${f.severity} | ${status} | |`,
    );
  });

  const bySev = countBySev(findings);
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
    "",
  );
  return lines.join("\n");
}

function renderGithubIndex(findings, groups, stats) {
  const bySev = countBySev(findings);
  const groupRows = groups
    .map((g) => {
      const label = `${g.start}–${g.end}`;
      return `| ${label} | [Preview](${gh(`reports/es-kurss-lessons-owner-review-group${g.id}.md`)}) | [Decisions](${gh(`reports/es-kurss-lessons-owner-decisions-group${g.id}.md`)}) | **PENDING** |`;
    })
    .join("\n");

  return [
    "# ES–DE Kurss Lessons — GitHub atvēršanas indekss",
    "",
    `**Auditors:** ${AUDITOR} (READ-ONLY)`,
    "**Standard:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.9",
    `**Branch:** \`${BRANCH}\``,
    `**Findings:** **${findings.length}** · **Verdict:** NEEDS OWNER REVIEW`,
    "",
    "## Sākt šeit",
    "",
    "| Fails | Apraksts |",
    "|-------|----------|",
    `| [OWNER README](${gh("reports/es-kurss-lessons-owner-review-README.md")}) | Workflow, kopsavilkums |`,
    `| [Šis indekss](${gh("reports/es-kurss-lessons-owner-review-GITHUB.md")}) | Visas GitHub saites |`,
    `| [Pilns audits](${gh(`reports/${AUDIT_REPORT}`)}) | ${stats?.totalFields || "2951"} lauki · MASTER v1.9 |`,
    "",
    "## Preview ↔ Decisions ↔ Accepted",
    "",
    "| Tips | Fails |",
    "|------|-------|",
    `| Preview | [es-kurss-lessons-owner-view.md](${gh("reports/es-kurss-lessons-owner-view.md")}) |`,
    `| Decisions (PENDING) | [es-kurss-lessons-owner-decisions.md](${gh("reports/es-kurss-lessons-owner-decisions.md")}) |`,
    `| Accepted (ieteicamais LABOT) | [es-kurss-lessons-owner-accepted.md](${gh("reports/es-kurss-lessons-owner-accepted.md")}) |`,
    "",
    "## Grupu preview (pa 50 findingiem)",
    "",
    "| Findings | Preview | Decisions | Statuss |",
    "|----------|---------|-----------|---------|",
    groupRows,
    "",
    "## Kopsavilkums",
    "",
    "| Severity | Skaits |",
    "|----------|--------|",
    `| CRITICAL | **${bySev.CRITICAL || 0}** |`,
    `| HIGH | **${bySev.HIGH || 0}** |`,
    `| MEDIUM | **${bySev.MEDIUM || 0}** |`,
    `| LOW | **${bySev.LOW || 0}** |`,
    "",
    "**Production changes = 0 · DE changes = 0**",
  ].join("\n");
}

function renderReadme(findings, stats) {
  const bySev = countBySev(findings);
  return [
    "# ES–DE Kurss Lessons — OWNER review",
    "",
    `**Auditors:** ${AUDITOR} (READ-ONLY)`,
    "**Standard:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.9",
    "",
    `Avots: [${AUDIT_REPORT}](./${AUDIT_REPORT}) · [GitHub indekss](./es-kurss-lessons-owner-review-GITHUB.md)`,
    "",
    "## Kopsavilkums",
    "",
    "| Metrika | Skaitlis |",
    "|---------|----------|",
    `| ES lauki audited | **${stats?.totalFields || findings.length}** |`,
    `| Lekcijas | **21/21** |`,
    `| Kopā findings | **${findings.length}** |`,
    `| CRITICAL | **${bySev.CRITICAL || 0}** |`,
    `| HIGH | **${bySev.HIGH || 0}** |`,
    `| MEDIUM | **${bySev.MEDIUM || 0}** |`,
    `| LOW | **${bySev.LOW || 0}** |`,
    "",
    "## Faili",
    "",
    "| Tips | Fails | Apraksts |",
    "|------|-------|----------|",
    "| Preview | [es-kurss-lessons-owner-view.md](./es-kurss-lessons-owner-view.md) | Pilns OWNER VIEW |",
    "| Decisions | [es-kurss-lessons-owner-decisions.md](./es-kurss-lessons-owner-decisions.md) | **Aizpildīt šeit** |",
    "| Accepted | [es-kurss-lessons-owner-accepted.md](./es-kurss-lessons-owner-accepted.md) | Ieteicamais LABOT ceļš |",
    "| GitHub | [es-kurss-lessons-owner-review-GITHUB.md](./es-kurss-lessons-owner-review-GITHUB.md) | Visas saites |",
    "",
    "## OWNER statusi",
    "",
    "- **PENDING** — sākotnējais stāvoklis",
    "- **LABOT** — OWNER apstiprina precīzu gala vērtību",
    "- **FALSE_POSITIVE** — nemainām",
    "- **NELABOT** — apzināti atstājam",
    "- **NEEDS_SOURCE_REVIEW** — DE avota jautājums",
    "",
    "## Apply noteikumi",
    "",
    "- Production apply ir **COPY-ONLY** pēc OWNER lēmuma.",
    "- Pirms apply: `actual current value === CURRENT_ES`, citādi SKIP.",
    "- Mainīt tikai norādīto ES lauku; **DE = STRICT READ-ONLY**.",
    "",
    "**Production changes = 0 · DE changes = 0**",
  ].join("\n");
}

function buildGroups(findings) {
  const groups = [];
  for (let i = 0; i < findings.length; i += GROUP_SIZE) {
    const slice = findings.slice(i, i + GROUP_SIZE).map((f, j) => ({
      ...f,
      _globalNum: i + j + 1,
    }));
    const id = String(Math.floor(i / GROUP_SIZE) + 1).padStart(2, "0");
    groups.push({
      id,
      start: i + 1,
      end: i + slice.length,
      slice,
      reviewPath: path.join(ROOT, `reports/es-kurss-lessons-owner-review-group${id}.md`),
      decisionsPath: path.join(ROOT, `reports/es-kurss-lessons-owner-decisions-group${id}.md`),
    });
  }
  return groups;
}

function main() {
  const auditData = fs.existsSync(AUDIT_JSON) ? JSON.parse(fs.readFileSync(AUDIT_JSON, "utf8")) : {};
  const findings = loadFindings();
  if (!findings.length) {
    console.log("No findings — OWNER review pack skipped.");
    return;
  }

  const numbered = findings.map((f, i) => ({ ...f, _globalNum: i + 1 }));
  const groups = buildGroups(numbered);
  const monolithicView = renderViewFile(numbered);

  fs.mkdirSync(path.dirname(OUT.view), { recursive: true });
  fs.writeFileSync(OUT.view, monolithicView);
  fs.writeFileSync(OUT.review, monolithicView);
  fs.writeFileSync(OUT.decisions, renderTableFile(numbered, "decisions"));
  fs.writeFileSync(OUT.accepted, renderTableFile(numbered, "accepted"));
  fs.writeFileSync(OUT.github, renderGithubIndex(numbered, groups, auditData.stats));
  fs.writeFileSync(OUT.readme, renderReadme(numbered, auditData.stats));

  for (const g of groups) {
    fs.writeFileSync(
      g.reviewPath,
      renderViewFile(g.slice, ` (group ${g.id}: findings ${g.start}–${g.end})`),
    );
    fs.writeFileSync(
      g.decisionsPath,
      renderTableFile(g.slice, "decisions", ` (group ${g.id}: findings ${g.start}–${g.end})`),
    );
  }

  const coverage = verifyOwnerArtifactCoverage(numbered);
  console.log(
    JSON.stringify(
      {
        findings: findings.length,
        groups: groups.length,
        outputs: Object.fromEntries(Object.entries(OUT).map(([k, v]) => [k, path.relative(ROOT, v)])),
        coverage,
      },
      null,
      2,
    ),
  );
  if (!coverage.pass) {
    console.error("\nBLOCKED: OWNER artifact coverage FAIL (MASTER v1.9 §7.20.5)\n");
    process.exit(5);
  }
}

if (require.main === module) main();

module.exports = { loadFindings, verifyOwnerArtifactCoverage, OUT };
