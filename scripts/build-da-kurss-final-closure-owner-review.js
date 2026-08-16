#!/usr/bin/env node
"use strict";
/**
 * Build DA–DE Kurss final closure OWNER review + decisions groups (READ-ONLY).
 * Source: reports/temp/da-kurss-final-closure-audit.json
 */
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");

const AUDIT_JSON = path.join(ROOT, "reports/temp/da-kurss-final-closure-audit.json");
const AUDIT_MD = "da-kurss-final-closure-audit.md";
const BATCH_SIZE = 50;
const REPO = "sandrisbrikmanis-rgb/de-lv-app";
const DEFAULT_BRANCH = "cursor/da-kurss-final-closure-audit-fffe";
const DEFAULT_PR = "574";

const FILES = {
  index: "da-kurss-owner-review-final-closure-index.md",
  readme: "da-kurss-owner-review-final-closure-README.md",
  github: "da-kurss-owner-review-final-closure-GITHUB.md",
  decisions: "da-kurss-owner-decisions-final-closure.md",
  accepted: "da-kurss-owner-accepted-final-closure.md",
  reviewGroup: (n, range) =>
    `da-kurss-owner-review-final-closure-group${String(n).padStart(2, "0")}-${range.replace(/–/g, "-")}.md`,
  decisionsGroup: (n, range) =>
    `da-kurss-owner-decisions-final-closure-group${String(n).padStart(2, "0")}-${range.replace(/–/g, "-")}.md`,
};

function getBranch() {
  if (process.env.GITHUB_BRANCH) return process.env.GITHUB_BRANCH;
  try {
    return execSync("git rev-parse --abbrev-ref HEAD", { cwd: ROOT, encoding: "utf8" }).trim();
  } catch {
    return DEFAULT_BRANCH;
  }
}

const BRANCH = getBranch();
const AUDIT_PR = process.env.GITHUB_AUDIT_PR || DEFAULT_PR;

function escapePipe(text) {
  return String(text || "").replace(/\|/g, "\\|").replace(/\n/g, " ").trim();
}

function truncate(text, max = 60) {
  const s = String(text || "");
  return s.length > max ? `${s.slice(0, max)}…` : s;
}

function chunk(arr, size) {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

function mdLink(file, label) {
  return `[${label || file}](./${file})`;
}

function ghLink(file) {
  return `https://github.com/${REPO}/blob/${BRANCH}/reports/${file}`;
}

function ghMd(file, label) {
  return `[${label || file}](${ghLink(file)})`;
}

function findingNum(f) {
  const m = String(f.id || "").match(/DA-KURSS-FCA-(\d+)/);
  return m ? Number(m[1]) : 0;
}

function loadAuditFindings() {
  if (!fs.existsSync(AUDIT_JSON)) {
    console.error(`Missing ${AUDIT_JSON}. Run audit-da-kurss-final-closure-audit.js first.`);
    process.exit(1);
  }
  const data = JSON.parse(fs.readFileSync(AUDIT_JSON, "utf8"));
  const rows = [...(data.validatedFindings || []), ...(data.lowFindings || [])].map((f) => ({
    ...f,
    problem: f.problem || f.reason || "",
    reason: f.reason || f.problem || "",
    source: f.source || "luna",
  }));
  return rows.sort((a, b) => findingNum(a) - findingNum(b));
}

function renderFinding(f, globalNum) {
  return [
    `## Finding ${globalNum}`,
    "",
    `**Audit ID:** \`${f.id}\``,
    `**Lesson/ID:** \`${f.lessonId || "—"}\``,
    `**Path:** \`${f.path}\``,
    `**Field type:** \`${f.fieldType || "—"}\``,
    `**DE (read-only):** ${truncate(f.deCurrent || "—", 200)}`,
    `**Severity:** ${f.severity}`,
    `**Category:** ${f.category || "—"}`,
    `**CURRENT_DA:** ${truncate(f.daCurrent, 500)}`,
    `**PROPOSED_DA:** ${truncate(f.proposedDa, 500)}`,
    `**Problēma:** ${f.problem || "—"}`,
    `**Audita pamatojums:** ${f.reason || f.problem || "—"}`,
    `**Avots:** ${f.source || "luna"}`,
    "",
    "**Statuss:**",
    "",
    "**OWNER_DECISION:**",
    "",
    "---",
    "",
  ].join("\n");
}

function renderReviewHeader(groupNum, count, range) {
  return [
    `# DA–DE Kurss — OWNER review — final closure Group ${String(groupNum).padStart(2, "0")}`,
    "",
    `Avots: \`reports/${AUDIT_MD}\``,
    `Findings: **${range}** (${count} ieraksti)`,
    "",
    "> **DE = STRICT READ-ONLY.**",
    "> **PROPOSED_DA ir Luna ieteikums, nevis automātiski OWNER apstiprināts variants.**",
    "> Katram finding aizpildi `Statuss` un `OWNER_DECISION`.",
    "> `LABOT` gadījumā `OWNER_DECISION` jābūt precīzam gala DA tekstam/vērtībai.",
    "> `NELABOT` / `FALSE_POSITIVE` gadījumā production netiek mainīts.",
    "",
  ].join("\n");
}

function renderDecisionsHeader(groupNum, range, count) {
  return [
    `# DA–DE Kurss — OWNER decisions — final closure Group ${String(groupNum).padStart(2, "0")}`,
    "",
    `Avots: final closure audit · Findings **${range}** (${count} ieraksti)`,
    "",
    "Aizpildi tabulu. **DE = STRICT READ-ONLY.**",
    "",
    "| Audit ID | Lesson/ID | Path | DE_CURRENT | DA_CURRENT | PROPOSED_DA | Severity | Category | Statuss | OWNER_DECISION |",
    "|----------|-----------|------|------------|------------|-------------|----------|----------|---------|----------------|",
  ].join("\n");
}

function renderDecisionRow(f) {
  return `| ${f.id} | \`${f.lessonId}\` | \`${truncate(f.path, 45)}\` | ${truncate(escapePipe(f.deCurrent), 40)} | ${truncate(escapePipe(f.daCurrent), 40)} | ${truncate(escapePipe(f.proposedDa), 40)} | ${f.severity} | ${f.category || "—"} | PENDING | |`;
}

function renderPendingTable(rows, title) {
  const lines = [
    `# DA–DE Kurss — ${title}`,
    "",
    `Avots: [${FILES.readme}](./${FILES.readme})`,
    `Findings: **${rows.length}** ieraksti`,
    "",
    "Sākotnēji visi: **Statuss: PENDING**, **OWNER_DECISION:** tukšs.",
    "",
    "| # | Audit ID | Lesson/ID | Path | DE_CURRENT | DA_CURRENT | PROPOSED_DA | Severity | Category | Statuss | OWNER_DECISION |",
    "|--:|----------|-----------|------|------------|------------|-------------|----------|----------|---------|----------------|",
  ];
  rows.forEach((f, i) => {
    lines.push(
      `| ${i + 1} | ${f.id} | \`${f.lessonId}\` | \`${truncate(f.path, 40)}\` | ${truncate(escapePipe(f.deCurrent))} | ${truncate(escapePipe(f.daCurrent))} | ${truncate(escapePipe(f.proposedDa))} | ${f.severity} | ${f.category || "—"} | PENDING | |`,
    );
  });
  lines.push("", "**Statuss:** LABOT | FALSE_POSITIVE | NELABOT | NEEDS_SOURCE_REVIEW", "");
  return lines.join("\n");
}

function renderAcceptedTable(rows) {
  const bySev = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0, NEEDS_SOURCE_REVIEW: 0 };
  rows.forEach((f) => {
    bySev[f.severity] = (bySev[f.severity] || 0) + 1;
  });
  const labot = rows.filter((f) => f.proposedDa && !/^\(/.test(String(f.proposedDa))).length;

  const lines = [
    `# DA–DE Kurss — OWNER accepted final closure (recommended LABOT track)`,
    "",
    "**Auditors:** GPT-5.6 Luna final closure audit",
    `Avots: [${AUDIT_MD}](./${AUDIT_MD})`,
    `Findings: **${rows.length}** ieraksti`,
    "",
    "**DE = STRICT READ-ONLY.**",
    "Šis fails ir **ieteicamais LABOT ceļš**, ja OWNER piekrīt Luna PROPOSED_DA. Pārbaudi katru ierakstu pirms apply.",
    "",
    "| # | Audit ID | Lesson/ID | Path | DE_CURRENT | DA_CURRENT | PROPOSED / OWNER NEW | Severity | Category | Statuss | OWNER_DECISION |",
    "|--:|----------|-----------|------|------------|------------|----------------------|----------|----------|---------|----------------|",
  ];
  rows.forEach((f, i) => {
    const ownerNew = f.proposedDa && !/^\(/.test(String(f.proposedDa)) ? f.proposedDa : "";
    lines.push(
      `| ${i + 1} | ${f.id} | \`${f.lessonId}\` | \`${truncate(f.path, 40)}\` | ${truncate(escapePipe(f.deCurrent))} | ${truncate(escapePipe(f.daCurrent))} | ${truncate(escapePipe(f.proposedDa))} | ${f.severity} | ${f.category || "—"} | LABOT | ${truncate(escapePipe(ownerNew), 50)} |`,
    );
  });
  lines.push(
    "",
    "## Kopsavilkums",
    "",
    `- Findings: **${rows.length}**`,
    `- Ieteicams LABOT: **${labot}/${rows.length}**`,
    `- CRITICAL: **${bySev.CRITICAL || 0}**`,
    `- HIGH: **${bySev.HIGH || 0}**`,
    `- MEDIUM: **${bySev.MEDIUM || 0}**`,
    `- LOW: **${bySev.LOW || 0}**`,
    "- DE izmaiņas: **0**",
    "",
  );
  return lines.join("\n");
}

function renderIndex(groups, rows) {
  const fileList = groups
    .map((g) => `- \`${FILES.reviewGroup(g.num, g.rangeFile)}\``)
    .join("\n");
  return `# DA–DE Kurss — OWNER review — final closure INDEX

Avots: \`reports/${AUDIT_MD}\`
Kopā findings: **${rows.length}**
Grupas: **${groups.length}**

## Noteikumi

- DE = STRICT READ-ONLY.
- PROPOSED_DA nav automātiski OWNER apstiprināts.
- Aizpildīt tikai \`Statuss\` un \`OWNER_DECISION\`.
- \`LABOT\` → precīzs gala DA teksts.
- \`NELABOT\` / \`FALSE_POSITIVE\` → production nemainīt.

## Faili

${fileList}
`;
}

function renderReadme(groups, rows, audit) {
  const bySev = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0 };
  rows.forEach((f) => {
    bySev[f.severity] = (bySev[f.severity] || 0) + 1;
  });

  const groupRows = groups
    .map((g) => {
      const review = FILES.reviewGroup(g.num, g.rangeFile);
      const decisions = FILES.decisionsGroup(g.num, g.rangeFile);
      return `| ${g.range} | ${mdLink(review, "Preview")} | ${mdLink(decisions, "Decisions")} | ${g.count} |`;
    })
    .join("\n");

  return `# DA–DE Kurss — OWNER review final closure (Copy-Only workflow)

1. Atver [INDEX](./${FILES.index}) vai ${mdLink(FILES.github, "GitHub indeksu")}.
2. Katram finding — **CURRENT_DA** ir faktiskais production teksts.
3. **OWNER** aizpilda **Statuss** + **OWNER_DECISION** (vai decisions tabulu).
4. Atgriez aizpildītos failus — deterministisks **COPY-ONLY** apply.

## Kopsavilkums

| Metrika | Skaitlis |
|---------|----------|
| Final closure audit | [${AUDIT_MD}](./${AUDIT_MD}) |
| DA fields audited | **${audit.stats?.totalFields || 1265}** |
| **Findings (OWNER review)** | **${rows.length}** |
| CRITICAL | **${bySev.CRITICAL || 0}** |
| HIGH | **${bySev.HIGH || 0}** |
| MEDIUM | **${bySev.MEDIUM || 0}** |
| LOW | **${bySev.LOW || 0}** |
| Review grupas | **${groups.length}** (pa ${BATCH_SIZE}) |
| Luna raw → validated | **${audit.luna?.rawCount || "?"} → ${audit.luna?.validatedCount || rows.length}** |
| DE changes | **0** |

## Grupu faili (${rows.length} findings)

| Findings | Preview | Decisions | Skaits |
|----------|---------|-----------|--------|
${groupRows}

## Konsolidētie faili

| Tips | Fails |
|------|-------|
| INDEX | ${mdLink(FILES.index, FILES.index)} |
| Decisions (viss, PENDING) | ${mdLink(FILES.decisions, FILES.decisions)} |
| Accepted (ieteicamais LABOT) | ${mdLink(FILES.accepted, FILES.accepted)} |
| GitHub | ${mdLink(FILES.github, FILES.github)} |

**Production changes = 0 · DE changes = 0**
`;
}

function renderGithubIndex(groups, rows) {
  const bySev = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0 };
  rows.forEach((f) => {
    bySev[f.severity] = (bySev[f.severity] || 0) + 1;
  });

  const groupRows = groups
    .map((g) => {
      const review = FILES.reviewGroup(g.num, g.rangeFile);
      const decisions = FILES.decisionsGroup(g.num, g.rangeFile);
      return `| ${g.range} | ${ghMd(review, "Preview")} | ${ghMd(decisions, "Decisions")} | ${g.count} |`;
    })
    .join("\n");

  return `# DA–DE Kurss — GitHub indekss (final closure OWNER review)

**Auditors:** GPT-5.6 Luna (API)
**Branch:** \`${BRANCH}\`
**Audit PR:** [#${AUDIT_PR}](https://github.com/${REPO}/pull/${AUDIT_PR})

## Sākt šeit

| Fails | Apraksts |
|-------|----------|
| ${ghMd(FILES.index, "INDEX")} | Grupu saraksts |
| ${ghMd(FILES.readme, "OWNER README")} | Workflow + kopsavilkums |
| ${ghMd(AUDIT_MD, "Final closure audit")} | ${rows.length} findings |

## Konsolidētie faili

| Tips | Fails |
|------|-------|
| Decisions (PENDING) | ${ghMd(FILES.decisions, FILES.decisions)} |
| Accepted (ieteicamais LABOT) | ${ghMd(FILES.accepted, FILES.accepted)} |

## Grupas (pa ${BATCH_SIZE})

| Findings | Preview | Decisions | Skaits |
|----------|---------|-----------|--------|
${groupRows}

---

**Findings:** **${rows.length}** · **CRITICAL:** **${bySev.CRITICAL || 0}** · **HIGH:** **${bySev.HIGH || 0}** · **DE changes:** **0**
`;
}

function main() {
  const audit = JSON.parse(fs.readFileSync(AUDIT_JSON, "utf8"));
  const rows = loadAuditFindings();
  if (!rows.length) {
    console.log(JSON.stringify({ skipped: true, reason: "no findings" }, null, 2));
    return;
  }

  const batches = chunk(rows, BATCH_SIZE);
  const groups = batches.map((batch, i) => {
    const num = i + 1;
    const start = i * BATCH_SIZE + 1;
    const end = start + batch.length - 1;
    const range = `${String(start).padStart(3, "0")}–${String(end).padStart(3, "0")}`;
    const rangeFile = `${String(start).padStart(3, "0")}-${String(end).padStart(3, "0")}`;
    return { num, batch, range, rangeFile, count: batch.length, startIndex: start };
  });

  const reports = path.join(ROOT, "reports");
  const written = [];

  fs.writeFileSync(path.join(reports, FILES.index), renderIndex(groups, rows));
  written.push(FILES.index);

  fs.writeFileSync(path.join(reports, FILES.decisions), renderPendingTable(rows, "OWNER decisions final closure (PENDING)"));
  written.push(FILES.decisions);

  fs.writeFileSync(path.join(reports, FILES.accepted), renderAcceptedTable(rows));
  written.push(FILES.accepted);

  for (const g of groups) {
    const reviewFile = FILES.reviewGroup(g.num, g.rangeFile);
    const reviewContent = [
      renderReviewHeader(g.num, g.count, g.range),
      ...g.batch.map((f, i) => renderFinding(f, g.startIndex + i)),
    ].join("\n");
    fs.writeFileSync(path.join(reports, reviewFile), reviewContent);
    written.push(reviewFile);

    const decFile = FILES.decisionsGroup(g.num, g.rangeFile);
    const decContent = [
      renderDecisionsHeader(g.num, g.range, g.count),
      ...g.batch.map(renderDecisionRow),
      "",
      "**Statuss:** LABOT | FALSE_POSITIVE | NELABOT | NEEDS_SOURCE_REVIEW",
      "",
    ].join("\n");
    fs.writeFileSync(path.join(reports, decFile), decContent);
    written.push(decFile);
  }

  fs.writeFileSync(path.join(reports, FILES.readme), renderReadme(groups, rows, audit));
  written.push(FILES.readme);

  fs.writeFileSync(path.join(reports, FILES.github), renderGithubIndex(groups, rows));
  written.push(FILES.github);

  fs.mkdirSync(path.join(reports, "temp"), { recursive: true });
  fs.writeFileSync(
    path.join(reports, "temp/da-kurss-final-closure-owner-review-traceability.json"),
    JSON.stringify(
      {
        findings: rows.length,
        groups: groups.length,
        groupSize: BATCH_SIZE,
        branch: BRANCH,
        auditPr: AUDIT_PR,
        filesWritten: written.length,
        bySeverity: rows.reduce((acc, f) => {
          acc[f.severity] = (acc[f.severity] || 0) + 1;
          return acc;
        }, {}),
      },
      null,
      2,
    ),
  );

  console.log(
    JSON.stringify(
      {
        findings: rows.length,
        groups: groups.length,
        filesWritten: written.length,
        github: `reports/${FILES.github}`,
        branch: BRANCH,
        productionChanges: 0,
      },
      null,
      2,
    ),
  );
}

main();
