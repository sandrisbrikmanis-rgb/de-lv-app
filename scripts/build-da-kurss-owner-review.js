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
const REPO = "sandrisbrikmanis-rgb/de-lv-app";
const BRANCH = process.env.WORK_BRANCH || "cursor/da-kurss-master-v11-audit-fffe";
const PR_NUMBER = process.env.AUDIT_PR || "585";
const GROUP_SIZE = 50;

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

function countBySev(findings) {
  const bySev = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0, NEEDS_SOURCE_REVIEW: 0, PASS: 0 };
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
    console.error(`Missing ${AUDIT_JSON}. Run audit-da-kurss-full.js first.`);
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

function renderReviewFile(findings, titleSuffix = "") {
  return [
    `# DA–DE Kurss — OWNER preview${titleSuffix}`,
    "",
    `**Auditors:** ${AUDITOR} (READ-ONLY)`,
    `**Standard:** \`PROJECT_LANGUAGE_MASTER_STANDARD.md\` v1.1`,
    `Avots: \`reports/${AUDIT_REPORT}\` / \`reports/temp/da-kurss-full-audit.json\``,
    `Findings: **${findings.length}** ieraksti`,
    "",
    "> **PROPOSED_DA** ir GPT-5.6 Luna ieteikums — **nav** OWNER apstiprināts.",
    "> **Statuss:** sākotnēji **PENDING**. OWNER aizpilda decisions tabulu.",
    "> **DE lauki nemainīt.** Apply tikai DA lauki pēc OWNER lēmuma.",
    "",
    ...findings.map((f, i) => renderFinding(f, f._globalNum || i + 1)),
  ].join("\n");
}

function renderTableFile(findings, mode, titleSuffix = "") {
  const isAccepted = mode === "accepted";
  const title = isAccepted ? "OWNER accepted (recommended LABOT track)" : "OWNER decisions";
  const lines = [
    `# DA–DE Kurss — ${title}${titleSuffix}`,
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
    const num = f._globalNum || i + 1;
    const status = isAccepted ? "LABOT" : "PENDING";
    lines.push(
      `| ${num} | ${f.id} | \`${f.lessonId}\` | \`${truncate(f.path, 40)}\` | ${truncate(escapePipe(f.deCurrent), 50)} | ${truncate(escapePipe(f.daCurrent), 50)} | ${truncate(escapePipe(f.proposedDa), 50)} | ${f.severity} | ${status} | |`
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
    ""
  );
  return lines.join("\n");
}

function renderGithubIndex(findings, groups) {
  const bySev = countBySev(findings);
  const groupRows = groups
    .map((g) => {
      const label = `${g.start}–${g.end}`;
      return `| ${label} | [Preview](${gh(`reports/da-kurss-owner-review-group${g.id}.md`)}) | [Decisions](${gh(`reports/da-kurss-owner-decisions-group${g.id}.md`)}) | **PENDING** |`;
    })
    .join("\n");

  return [
    "# DA–DE Kurss — GitHub atvēršanas indekss",
    "",
    `**Auditors:** ${AUDITOR} (READ-ONLY)`,
    "**Standard:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.1",
    `**Branch:** \`${BRANCH}\``,
    `**Audit PR:** [#${PR_NUMBER}](https://github.com/${REPO}/pull/${PR_NUMBER})`,
    `**Findings:** **${findings.length}** · **Verdict:** NEEDS OWNER REVIEW`,
    "",
    "## Sākt šeit",
    "",
    "| Fails | Apraksts |",
    "|-------|----------|",
    `| [OWNER README](${gh("reports/da-kurss-owner-review-README.md")}) | Workflow, kopsavilkums, triage piezīmes |`,
    `| [Šis indekss](${gh("reports/da-kurss-owner-review-GITHUB.md")}) | Visas GitHub saites |`,
    `| [Pilns audits](${gh(`reports/${AUDIT_REPORT}`)}) | 1264/1264 lauki · MASTER v1.1 |`,
    "",
    "## Preview ↔ Decisions ↔ Accepted (viss komplekts)",
    "",
    "| Tips | Fails |",
    "|------|-------|",
    `| Preview (95 findingi) | [da-kurss-owner-review.md](${gh("reports/da-kurss-owner-review.md")}) |`,
    `| Decisions (PENDING) | [da-kurss-owner-decisions.md](${gh("reports/da-kurss-owner-decisions.md")}) |`,
    `| Accepted (ieteicamais LABOT) | [da-kurss-owner-accepted.md](${gh("reports/da-kurss-owner-accepted.md")}) |`,
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
    `| NEEDS_SOURCE_REVIEW | **${bySev.NEEDS_SOURCE_REVIEW || 0}** |`,
    "",
    "## OWNER triage (pirms aizpildīšanas)",
    "",
    "1. **#1–16** (`lesson7ExerciseCardsDa[*].lv`) — iespējams **FALSE_POSITIVE**: DA imperatīva kartes bez `.lv` atbilst SV/NO konvencijai; pārbaudīt renderer, nevis akli pievienot `.lv`.",
    "2. **#17–26** (`FOREIGN_REMNANT` deterministic legacyHtml) — daļa ir false-positive (DE dialogi, macron `(rāt)`); prioritizēt Luna findingus (#27+).",
    "3. **CRITICAL HTML** — `kurssArticlesLesson`, `kurssPronounsLesson`, `kurssPronunciationLesson`, `kurssConsonantsLesson`, `kurssSentenceStructureLesson` — augsta prioritāte.",
    "",
    "## Apply (pēc OWNER lēmuma)",
    "",
    "1. Aizpildīt `da-kurss-owner-decisions.md` (vai group failus).",
    "2. COPY-ONLY apply uz `data/da/` + `www/data/da/` mirror.",
    "3. **DE nemainīt.** Targeted regression pēc apply.",
    "",
    `**Production changes = 0 · DE changes = 0 · Coverage = 1264/1264**`,
  ].join("\n");
}

function renderReadme(findings) {
  const bySev = countBySev(findings);
  return [
    "# DA–DE Kurss — OWNER review (GPT-5.6 Luna)",
    "",
    `**Auditors:** ${AUDITOR} (READ-ONLY)`,
    "**Standard:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.1",
    "",
    `Avots: [${AUDIT_REPORT}](./${AUDIT_REPORT}) · [GitHub indekss](./da-kurss-owner-review-GITHUB.md)`,
    "",
    "## Kopsavilkums",
    "",
    "| Metrika | Skaitlis |",
    "|---------|----------|",
    "| DA lauki audited | **1264/1264** |",
    "| Lekcijas | **21/21** |",
    "| Extra HTML topics | **6/6** |",
    "| Kopā findings | **95** |",
    `| CRITICAL | **${bySev.CRITICAL || 0}** |`,
    `| HIGH | **${bySev.HIGH || 0}** |`,
    `| MEDIUM | **${bySev.MEDIUM || 0}** |`,
    `| LOW | **${bySev.LOW || 0}** |`,
    "",
    "## Faili",
    "",
    "| Tips | Fails | Apraksts |",
    "|------|-------|----------|",
    "| Preview | [da-kurss-owner-review.md](./da-kurss-owner-review.md) | Pilns OWNER preview (95) |",
    "| Decisions | [da-kurss-owner-decisions.md](./da-kurss-owner-decisions.md) | **Aizpildīt šeit** — PENDING |",
    "| Accepted | [da-kurss-owner-accepted.md](./da-kurss-owner-accepted.md) | Ieteicamais LABOT ceļš |",
    "| GitHub | [da-kurss-owner-review-GITHUB.md](./da-kurss-owner-review-GITHUB.md) | Visas saites PR #585 |",
    "",
    "## Grupas (GitHub ērtākai review)",
    "",
    "| Grupa | Preview | Decisions |",
    "|-------|---------|-----------|",
    "| 1–50 | [group01 preview](./da-kurss-owner-review-group01.md) | [group01 decisions](./da-kurss-owner-decisions-group01.md) |",
    "| 51–95 | [group02 preview](./da-kurss-owner-review-group02.md) | [group02 decisions](./da-kurss-owner-decisions-group02.md) |",
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
    "- Pirms apply: `actual current value === CURRENT_DA`, citādi SKIP.",
    "- Mainīt tikai norādīto DA lauku; **DE = STRICT READ-ONLY**.",
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
      reviewPath: path.join(ROOT, `reports/da-kurss-owner-review-group${id}.md`),
      decisionsPath: path.join(ROOT, `reports/da-kurss-owner-decisions-group${id}.md`),
    });
  }
  return groups;
}

function main() {
  const findings = loadFindings();
  if (!findings.length) {
    console.log("No findings — OWNER review pack skipped.");
    return;
  }

  const numbered = findings.map((f, i) => ({ ...f, _globalNum: i + 1 }));
  const groups = buildGroups(numbered);

  fs.mkdirSync(path.dirname(OUT.review), { recursive: true });
  fs.writeFileSync(OUT.review, renderReviewFile(numbered));
  fs.writeFileSync(OUT.decisions, renderTableFile(numbered, "decisions"));
  fs.writeFileSync(OUT.accepted, renderTableFile(numbered, "accepted"));
  fs.writeFileSync(OUT.github, renderGithubIndex(numbered, groups));
  fs.writeFileSync(OUT.readme, renderReadme(numbered));

  for (const g of groups) {
    fs.writeFileSync(
      g.reviewPath,
      renderReviewFile(g.slice, ` (group ${g.id}: findings ${g.start}–${g.end})`)
    );
    fs.writeFileSync(
      g.decisionsPath,
      renderTableFile(g.slice, "decisions", ` (group ${g.id}: findings ${g.start}–${g.end})`)
    );
  }

  console.log(
    JSON.stringify(
      {
        findings: findings.length,
        groups: groups.map((g) => ({
          id: g.id,
          range: `${g.start}-${g.end}`,
          review: path.relative(ROOT, g.reviewPath),
          decisions: path.relative(ROOT, g.decisionsPath),
        })),
        outputs: Object.fromEntries(Object.entries(OUT).map(([k, v]) => [k, path.relative(ROOT, v)])),
      },
      null,
      2
    )
  );
}

main();
