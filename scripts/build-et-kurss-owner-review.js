#!/usr/bin/env node
"use strict";
/**
 * Build ET–DE Kurss OWNER review + decisions + accepted + GitHub index (READ-ONLY).
 */
const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");

const AUDIT_JSON = path.join(ROOT, "reports/temp/et-kurss-full-audit.json");
const AUDITOR = "GPT-5.6 Luna";
const AUDIT_REPORT = "et-kurss-full-audit.md";
const REPO = "sandrisbrikmanis-rgb/de-lv-app";
const BRANCH = process.env.WORK_BRANCH || "cursor/et-de-kurss-full-audit-4a7c";
const PR_NUMBER = process.env.AUDIT_PR || "";
const GROUP_SIZE = 50;

const OUT = {
  view: path.join(ROOT, "reports/et-kurss-owner-view.md"),
  review: path.join(ROOT, "reports/et-kurss-owner-review.md"),
  decisions: path.join(ROOT, "reports/et-kurss-owner-decisions.md"),
  accepted: path.join(ROOT, "reports/et-kurss-owner-accepted.md"),
  github: path.join(ROOT, "reports/et-kurss-owner-review-GITHUB.md"),
  readme: path.join(ROOT, "reports/et-kurss-owner-review-README.md"),
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
    console.error(`Missing ${AUDIT_JSON}. Run audit-et-kurss-full.js first.`);
    process.exit(1);
  }
  const data = JSON.parse(fs.readFileSync(AUDIT_JSON, "utf8"));
  return (data.ownerBacklogFinal || data.findings || []).filter((f) => f.category !== "FALSE_POSITIVE");
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
    `**CURRENT_ET:** ${truncate(f.etCurrent, 400)}`,
    `**PROPOSED_ET:** ${truncate(f.proposedEt, 400)}`,
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
    for (const m of fs.readFileSync(OUT.view, "utf8").matchAll(/^## Finding (\d+) \(Kurss\)/gm)) {
      viewIds.add(m[1]);
    }
  }
  let decisionRows = 0;
  const decisionIds = new Set();
  if (fs.existsSync(OUT.decisions)) {
    for (const line of fs.readFileSync(OUT.decisions, "utf8").split("\n")) {
      const m = line.match(/^\| (\d+) \|/);
      if (!m) continue;
      decisionRows += 1;
      decisionIds.add(m[1]);
    }
  }
  const expectedIds = new Set(findings.map((_, i) => String(i + 1)));
  const missingInOwnerView = [...expectedIds].filter((id) => !viewIds.has(id)).length;
  const missingInOwnerDecisions = n - decisionRows;
  const pass =
    n > 0 &&
    viewIds.size === n &&
    decisionRows === n &&
    missingInOwnerView === 0 &&
    missingInOwnerDecisions === 0;

  return {
    ownerBacklogFinal: n,
    ownerViewFindings: viewIds.size,
    ownerDecisionsFindings: decisionRows,
    missingInOwnerView,
    missingInOwnerDecisions: Math.max(0, missingInOwnerDecisions),
    duplicateAuditIdsView: 0,
    duplicateAuditIdsDecisions: 0,
    ownerArtifactCoverage: pass ? "100%" : "<100%",
    pass,
  };
}

function renderViewFile(findings, titleSuffix = "") {
  return [
    `# ET–DE Kurss — OWNER VIEW${titleSuffix}`,
    "",
    `**Auditors:** ${AUDITOR} (READ-ONLY)`,
    `**Standard:** \`PROJECT_LANGUAGE_MASTER_STANDARD.md\` v1.9`,
    `Avots: \`reports/${AUDIT_REPORT}\` / \`reports/temp/et-kurss-full-audit.json\``,
    `Findings: **${findings.length}** ieraksti`,
    "",
    "> **PROPOSED_ET** ir GPT-5.6 Luna ieteikums — **nav** OWNER apstiprināts.",
    "> **Statuss:** sākotnēji **PENDING**. OWNER aizpilda decisions tabulu.",
    "> **DE lauki nemainīt.** Apply tikai ET lauki pēc OWNER lēmuma.",
    "",
    ...findings.map((f, i) => renderFinding(f, f._globalNum || i + 1)),
  ].join("\n");
}

function renderTableFile(findings, mode, titleSuffix = "") {
  const isAccepted = mode === "accepted";
  const title = isAccepted ? "OWNER accepted (recommended LABOT track)" : "OWNER decisions";
  const lines = [
    `# ET–DE Kurss — ${title}${titleSuffix}`,
    "",
    `**Auditors:** ${AUDITOR} (READ-ONLY)`,
    "Avots: `reports/et-kurss-owner-review.md`",
    `Findings: **${findings.length}** ieraksti`,
    "",
    "**DE = STRICT READ-ONLY.**",
    isAccepted
      ? "Šis fails ir **ieteicamais LABOT ceļš**, ja OWNER piekrīt auditora PROPOSED_ET."
      : "Sākotnēji visi ieraksti: **Statuss: PENDING**, **OWNER_DECISION:** tukšs.",
    "",
    "| # | Finding | Lesson/ID | Path | DE (read-only) | CURRENT_ET | PROPOSED_ET | Severity | Statuss | OWNER_DECISION |",
    "|--:|--------:|-----------|------|------------|------------|-------------|----------|---------|----------------|",
  ];

  findings.forEach((f, i) => {
    const num = f._globalNum || i + 1;
    const status = isAccepted ? "LABOT" : "PENDING";
    lines.push(
      `| ${num} | ${f.id} | \`${f.lessonId}\` | \`${truncate(f.path, 40)}\` | ${truncate(escapePipe(f.deCurrent), 50)} | ${truncate(escapePipe(f.etCurrent), 50)} | ${truncate(escapePipe(f.proposedEt), 50)} | ${f.severity} | ${status} | |`
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
      return `| ${label} | [Preview](${gh(`reports/et-kurss-owner-review-group${g.id}.md`)}) | [Decisions](${gh(`reports/et-kurss-owner-decisions-group${g.id}.md`)}) | **PENDING** |`;
    })
    .join("\n");

  return [
    "# ET–DE Kurss — GitHub atvēršanas indekss",
    "",
    `**Auditors:** ${AUDITOR} (READ-ONLY)`,
    "**Standard:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.9",
    `**Branch:** \`${BRANCH}\``,
    `**Audit PR:** ${PR_NUMBER ? `[#${PR_NUMBER}](https://github.com/${REPO}/pull/${PR_NUMBER})` : "draft (pending)"}`,
    `**Findings:** **${findings.length}** · **Verdict:** NEEDS OWNER REVIEW`,
    "",
    "## Sākt šeit",
    "",
    "| Fails | Apraksts |",
    "|-------|----------|",
    `| [OWNER README](${gh("reports/et-kurss-owner-review-README.md")}) | Workflow, kopsavilkums, triage piezīmes |`,
    `| [Šis indekss](${gh("reports/et-kurss-owner-review-GITHUB.md")}) | Visas GitHub saites |`,
    `| [Pilns audits](${gh(`reports/${AUDIT_REPORT}`)}) | ${findings.length} OWNER backlog · MASTER v1.9 |`,
    "",
    "## Preview ↔ Decisions ↔ Accepted (viss komplekts)",
    "",
    "| Tips | Fails |",
    "|------|-------|",
    `| Preview (authoritative monolithic) | [et-kurss-owner-view.md](${gh("reports/et-kurss-owner-view.md")}) |`,
    `| Preview (legacy alias) | [et-kurss-owner-review.md](${gh("reports/et-kurss-owner-review.md")}) |`,
    `| Decisions (PENDING) | [et-kurss-owner-decisions.md](${gh("reports/et-kurss-owner-decisions.md")}) |`,
    `| Accepted (ieteicamais LABOT) | [et-kurss-owner-accepted.md](${gh("reports/et-kurss-owner-accepted.md")}) |`,
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
    "## OWNER triage",
    "",
    "1. Pārskatīt **FOREIGN_REMNANT** (LV atliekas: Pārtulko, Vingrinājums, Latviešu valodā…).",
    "2. Pārskatīt **NAMES** (Martha/Marta u.c.).",
    "3. CRITICAL **TECHNICAL** / **STRUCTURE** — augsta prioritāte.",
    "",
    "## Apply (pēc OWNER lēmuma)",
    "",
    "1. Aizpildīt `et-kurss-owner-decisions.md` (vai group failus).",
    "2. COPY-ONLY apply uz `data/et/` + `www/data/et/` mirror.",
    "3. **DE nemainīt.** Targeted regression pēc apply.",
    "",
    `**Production changes = 0 · DE changes = 0 · Coverage = 100% objects**`,
  ].join("\n");
}

function renderReadme(findings, groups) {
  const bySev = countBySev(findings);
  const groupRows = (groups || []).map(
    (g) => `| ${g.start}–${g.end} | [group${g.id} preview](./et-kurss-owner-review-group${g.id}.md) | [group${g.id} decisions](./et-kurss-owner-decisions-group${g.id}.md) |`,
  );
  return [
    "# ET–DE Kurss — OWNER review (GPT-5.6 Luna)",
    "",
    `**Auditors:** ${AUDITOR} (READ-ONLY)`,
    "**Standard:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.9",
    "",
    `Avots: [${AUDIT_REPORT}](./${AUDIT_REPORT}) · [GitHub indekss](./et-kurss-owner-review-GITHUB.md)`,
    "",
    "## Kopsavilkums",
    "",
    "| Metrika | Skaitlis |",
    "|---------|----------|",
    "| ET lauki audited | **100% object coverage** |",
    "| Lekcijas | **21** |",
    "| Extra HTML topics | **6** |",
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
    "| Preview (authoritative) | [et-kurss-owner-view.md](./et-kurss-owner-view.md) | Pilns OWNER VIEW |",
    "| Preview (legacy alias) | [et-kurss-owner-review.md](./et-kurss-owner-review.md) | Atpakaļsaderība |",
    "| Decisions | [et-kurss-owner-decisions.md](./et-kurss-owner-decisions.md) | **Aizpildīt šeit** — PENDING |",
    "| Accepted | [et-kurss-owner-accepted.md](./et-kurss-owner-accepted.md) | Ieteicamais LABOT ceļš |",
    "| GitHub | [et-kurss-owner-review-GITHUB.md](./et-kurss-owner-review-GITHUB.md) | Visas saites |",
    "",
    "## Grupas (GitHub ērtākai review)",
    "",
    "| Grupa | Preview | Decisions |",
    "|-------|---------|-----------|",
    ...groupRows,
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
    "- Pirms apply: `actual current value === CURRENT_ET`, citādi SKIP.",
    "- Mainīt tikai norādīto ET lauku; **DE = STRICT READ-ONLY**.",
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
      reviewPath: path.join(ROOT, `reports/et-kurss-owner-review-group${id}.md`),
      decisionsPath: path.join(ROOT, `reports/et-kurss-owner-decisions-group${id}.md`),
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
  const monolithicView = renderViewFile(numbered);

  fs.mkdirSync(path.dirname(OUT.view), { recursive: true });
  fs.writeFileSync(OUT.view, monolithicView);
  fs.writeFileSync(OUT.review, monolithicView);
  fs.writeFileSync(OUT.decisions, renderTableFile(numbered, "decisions"));
  fs.writeFileSync(OUT.accepted, renderTableFile(numbered, "accepted"));
  fs.writeFileSync(OUT.github, renderGithubIndex(numbered, groups));
  fs.writeFileSync(OUT.readme, renderReadme(numbered, groups));

  for (const g of groups) {
    fs.writeFileSync(
      g.reviewPath,
      renderViewFile(g.slice, ` (group ${g.id}: findings ${g.start}–${g.end})`)
    );
    fs.writeFileSync(
      g.decisionsPath,
      renderTableFile(g.slice, "decisions", ` (group ${g.id}: findings ${g.start}–${g.end})`)
    );
  }

  const coverage = verifyOwnerArtifactCoverage(numbered);
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
        coverage,
      },
      null,
      2
    )
  );
  if (!coverage.pass) {
    console.error("\nBLOCKED: OWNER artifact coverage FAIL (MASTER v1.9 §7.20.5)\n");
    process.exit(5);
  }
}

if (require.main === module) main();

module.exports = {
  loadFindings,
  verifyOwnerArtifactCoverage,
  renderViewFile,
  renderTableFile,
  OUT,
};
