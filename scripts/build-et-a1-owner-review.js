#!/usr/bin/env node
"use strict";
/**
 * Build ET–DE A1 OWNER-PREP package per PROJECT_LANGUAGE_MASTER_STANDARD.md §7.6 / §7.10.
 */
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");

const AUDIT_JSON = path.join(ROOT, "reports/temp/et-a1-full-audit.json");
const AUDIT_MD = "et-a1-full-audit.md";
const REPO = "sandrisbrikmanis-rgb/de-lv-app";
const BRANCH = process.env.WORK_BRANCH || execSync("git branch --show-current", { cwd: ROOT, encoding: "utf8" }).trim();
const PR_NUMBER = process.env.AUDIT_PR || "597";
const MAIN_BASE_SHA = process.env.MAIN_BASE_SHA || execSync("git rev-parse origin/main", { cwd: ROOT, encoding: "utf8" }).trim();
const GROUP_SIZE = 50;

const OUT = {
  view: path.join(ROOT, "reports/et-a1-owner-view.md"),
  decisions: path.join(ROOT, "reports/et-a1-owner-decisions.md"),
  github: path.join(ROOT, "reports/et-a1-owner-review-GITHUB.md"),
  readme: path.join(ROOT, "reports/et-a1-owner-review-README.md"),
};

function gh(relPath) {
  return `https://github.com/${REPO}/blob/${BRANCH}/${relPath}`;
}

function truncate(text, max = 200) {
  const s = String(text || "").replace(/\n/g, " ");
  return s.length > max ? `${s.slice(0, max)}…` : s;
}

function escapePipe(text) {
  return String(text || "").replace(/\|/g, "\\|").replace(/\n/g, " ").trim();
}

function countBySev(findings) {
  const bySev = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0 };
  findings.forEach((f) => {
    const s = String(f.severity || "MEDIUM").toUpperCase();
    if (bySev[s] !== undefined) bySev[s] += 1;
  });
  return bySev;
}

function loadFindings() {
  if (!fs.existsSync(AUDIT_JSON)) {
    console.error(`Missing ${AUDIT_JSON}. Run: node scripts/run-et-a1-full-audit.js`);
    process.exit(1);
  }
  const data = JSON.parse(fs.readFileSync(AUDIT_JSON, "utf8"));
  if (Array.isArray(data.validatedFindings) && data.validatedFindings.length > 0) {
    return data.validatedFindings;
  }
  return (data.findings || []).filter((f) => f.validatedReal);
}

function verifyOwnerArtifactCoverage(findings) {
  const ids = new Set();
  let duplicateAuditIds = 0;
  let invalidCardOrField = 0;
  for (const f of findings) {
    const id = String(f.findingId || "").trim();
    if (!id || ids.has(id)) duplicateAuditIds += 1;
    else ids.add(id);
    if (!String(f.cardId || "").trim() || !String(f.field || "").trim()) invalidCardOrField += 1;
  }
  const n = findings.length;
  const viewIds = new Set();
  const viewText = fs.existsSync(OUT.view) ? fs.readFileSync(OUT.view, "utf8") : "";
  for (const m of viewText.matchAll(/^## (ET-A1-\d+)/gm)) viewIds.add(m[1]);
  const decisionRows = fs.existsSync(OUT.decisions)
    ? fs.readFileSync(OUT.decisions, "utf8").split("\n").filter((l) => l.startsWith("| ET-A1-")).length
    : 0;
  const missingInOwnerView = [...ids].filter((id) => !viewIds.has(id)).length;
  const missingInOwnerDecisions = n - decisionRows;
  const pass =
    n > 0 &&
    duplicateAuditIds === 0 &&
    invalidCardOrField === 0 &&
    missingInOwnerView === 0 &&
    missingInOwnerDecisions === 0 &&
    viewIds.size === n &&
    decisionRows === n;

  return {
    validatedFindings: n,
    ownerViewFindings: viewIds.size,
    ownerDecisionsFindings: decisionRows,
    missingInOwnerView,
    missingInOwnerDecisions: Math.max(0, missingInOwnerDecisions),
    duplicateAuditIds,
    invalidCardOrField,
    ownerReviewArtifactCoverage: pass ? "100%" : "<100%",
    pass,
  };
}

function renderViewFinding(f) {
  return [
    `## ${f.findingId}`,
    "",
    `**Audit ID:** ${f.findingId}`,
    `**Card ID:** \`${f.cardId}\``,
    `**Field/path:** \`${f.field}\``,
    `**Production file:** \`data/et/a1.js\``,
    `**Severity:** ${f.severity}`,
    `**Category:** ${f.category || "—"}`,
    `**DE (read-only):** ${truncate(f.de, 120) || "—"}`,
    f.lvSource ? `**LV MASTER reference:** ${truncate(f.lvSource, 200)}` : "",
    `**CURRENT:** ${truncate(f.currentEt, 500)}`,
    f.proposedEt ? `**PROPOSED_ET (audit ieteikums):** ${truncate(f.proposedEt, 500)}` : "",
    `**Problēma:** ${f.reason || "—"}`,
    `**Avots:** ${f.source || "—"}`,
    f.ownerHistoryStatus ? `**OWNER history:** ${f.ownerHistoryStatus}` : "",
    f.ownerApprovedValue ? `**OWNER approved (iepriekš):** ${truncate(f.ownerApprovedValue, 200)}` : "",
    `**OWNER STATUS:** PENDING`,
    `**OWNER_DECISION:** [nav aizpildīts]`,
    "",
    "> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.",
    "",
    "---",
    "",
  ].filter(Boolean).join("\n");
}

function renderDecisionsRows(findings) {
  const lines = [
    "| Audit ID | Card ID | Field | CURRENT | PROPOSED_ET | Severity | Category | OWNER STATUS | OWNER_DECISION | Piezīme |",
    "|----------|---------|-------|---------|-------------|----------|----------|--------------|----------------|---------|",
  ];
  for (const f of findings) {
    lines.push(
      `| ${f.findingId} | ${escapePipe(f.cardId)} | ${escapePipe(f.field)} | ${escapePipe(truncate(f.currentEt, 120))} | ${escapePipe(truncate(f.proposedEt, 120))} | ${f.severity} | ${f.category || ""} | PENDING | | |`,
    );
  }
  return lines;
}

function buildView(findings) {
  const groups = [];
  for (let i = 0; i < findings.length; i += GROUP_SIZE) {
    groups.push(findings.slice(i, i + GROUP_SIZE));
  }

  const groupFiles = [];
  groups.forEach((slice, gi) => {
    const start = gi * GROUP_SIZE + 1;
    const end = Math.min((gi + 1) * GROUP_SIZE, findings.length);
    const id = String(gi + 1).padStart(2, "0");
    const viewName = `et-a1-owner-view-group${id}.md`;
    const decName = `et-a1-owner-decisions-group${id}.md`;
    const viewRel = `reports/${viewName}`;
    const decRel = `reports/${decName}`;
    const content = [
      `# ET–DE A1 — OWNER VIEW (grupa ${gi + 1}, ${start}–${end})`,
      "",
      `**Standard:** \`PROJECT_LANGUAGE_MASTER_STANDARD.md\` v1.7`,
      `**Auditors:** deterministika + GPT-5.6 Luna (READ-ONLY)`,
      `**Audit PR:** [#${PR_NUMBER}](https://github.com/${REPO}/pull/${PR_NUMBER})`,
      "",
      "| Navigācija | Saite |",
      "|------------|-------|",
      `| GitHub indekss | [et-a1-owner-review-GITHUB.md](${gh("reports/et-a1-owner-review-GITHUB.md")}) |`,
      `| OWNER VIEW (visi) | [et-a1-owner-view.md](${gh("reports/et-a1-owner-view.md")}) |`,
      `| Decisions (šī grupa) | [${decName}](${gh(decRel)}) |`,
      `| Decisions (viss) | [et-a1-owner-decisions.md](${gh("reports/et-a1-owner-decisions.md")}) |`,
      "",
      `Avots: [${AUDIT_MD}](${gh(`reports/${AUDIT_MD}`)})`,
      "",
      ...slice.map(renderViewFinding),
    ].join("\n");
    fs.writeFileSync(path.join(ROOT, viewRel), content);
    groupFiles.push({ id, viewName, decName, viewRel, decRel, start, end, slice });
  });

  const main = [
    "# ET–DE A1 — OWNER VIEW",
    "",
    `**Standard:** \`PROJECT_LANGUAGE_MASTER_STANDARD.md\` v1.7`,
    `**Auditors:** deterministika + GPT-5.6 Luna (READ-ONLY)`,
    `**MAIN_BASE_SHA:** \`${MAIN_BASE_SHA}\``,
    `**WORK_BRANCH:** \`${BRANCH}\``,
    `**Audit PR:** [#${PR_NUMBER}](https://github.com/${REPO}/pull/${PR_NUMBER})`,
    `**SCOPE:** ET–DE A1 (\`data/et/a1.js\`)`,
    `**Findings:** **${findings.length}**`,
    "",
    "> PROPOSED_ET ir audita ieteikums — **nav** OWNER apstiprināts.",
    "> Visi ieraksti sākotnēji **PENDING**. OWNER aizpilda [et-a1-owner-decisions.md](et-a1-owner-decisions.md).",
    "> **DE = STRICT READ-ONLY.** Production: `data/et/a1.js` + `www/data/et/a1.js`.",
    "",
    "## GitHub atvēršana",
    "",
    "| Fails | GitHub |",
    "|-------|--------|",
    `| GitHub indekss | [et-a1-owner-review-GITHUB.md](${gh("reports/et-a1-owner-review-GITHUB.md")}) |`,
    `| OWNER README | [et-a1-owner-review-README.md](${gh("reports/et-a1-owner-review-README.md")}) |`,
    `| OWNER DECISIONS | [et-a1-owner-decisions.md](${gh("reports/et-a1-owner-decisions.md")}) |`,
    `| Pilns audits | [${AUDIT_MD}](${gh(`reports/${AUDIT_MD}`)}) |`,
    "",
    "## Grupas (pa 50 findingiem)",
    "",
    "| Grupa | Findings | VIEW | DECISIONS |",
    "|-------|----------|------|-----------|",
    ...groupFiles.map(
      (g) =>
        `| ${g.start}–${g.end} | ${g.end - g.start + 1} | [${g.viewName}](${gh(g.viewRel)}) | [${g.decName}](${gh(g.decRel)}) |`,
    ),
    "",
    "## Īsais saraksts (visi findingi)",
    "",
    ...findings.map((f) => `- **${f.findingId}** \`${f.cardId}\` · \`${f.field}\` · ${f.severity} · ${truncate(f.reason, 80)}`),
    "",
  ].join("\n");

  fs.writeFileSync(OUT.view, main);
  return groupFiles;
}

function buildDecisions(findings, groupFiles) {
  const header = [
    "# ET–DE A1 — OWNER DECISIONS",
    "",
    `**Standard:** \`PROJECT_LANGUAGE_MASTER_STANDARD.md\` v1.7`,
    `**MAIN_BASE_SHA:** \`${MAIN_BASE_SHA}\``,
    `**WORK_BRANCH:** \`${BRANCH}\``,
    `**Audit PR:** [#${PR_NUMBER}](https://github.com/${REPO}/pull/${PR_NUMBER})`,
    `**Findings:** **${findings.length}** · sākotnēji visi **PENDING**`,
    "",
    "Atļautie statusi: **LABOT** | **NELABOT** | **FALSE_POSITIVE** | **NEEDS_SOURCE_REVIEW**",
    "",
    "**DE = STRICT READ-ONLY.** Apply tikai pēc OWNER apstiprinājuma.",
    "",
    "## GitHub atvēršana",
    "",
    "| Fails | GitHub |",
    "|-------|--------|",
    `| GitHub indekss | [et-a1-owner-review-GITHUB.md](${gh("reports/et-a1-owner-review-GITHUB.md")}) |`,
    `| OWNER VIEW | [et-a1-owner-view.md](${gh("reports/et-a1-owner-view.md")}) |`,
    ...groupFiles.map(
      (g) => `| Decisions grupa ${g.start}–${g.end} | [${g.decName}](${gh(g.decRel)}) |`,
    ),
    "",
    "## Pilna tabula (visi findingi)",
    "",
  ].join("\n");

  fs.writeFileSync(OUT.decisions, `${header}${renderDecisionsRows(findings).join("\n")}\n`);

  groupFiles.forEach((g) => {
    const groupContent = [
      `# ET–DE A1 — OWNER DECISIONS (grupa ${g.id}, ${g.start}–${g.end})`,
      "",
      `**Standard:** \`PROJECT_LANGUAGE_MASTER_STANDARD.md\` v1.7`,
      `**Audit PR:** [#${PR_NUMBER}](https://github.com/${REPO}/pull/${PR_NUMBER})`,
      "",
      "| Navigācija | Saite |",
      "|------------|-------|",
      `| GitHub indekss | [et-a1-owner-review-GITHUB.md](${gh("reports/et-a1-owner-review-GITHUB.md")}) |`,
      `| VIEW (šī grupa) | [${g.viewName}](${gh(g.viewRel)}) |`,
      `| Decisions (viss) | [et-a1-owner-decisions.md](${gh("reports/et-a1-owner-decisions.md")}) |`,
      "",
      "Atļautie statusi: **LABOT** | **NELABOT** | **FALSE_POSITIVE** | **NEEDS_SOURCE_REVIEW**",
      "",
      ...renderDecisionsRows(g.slice),
      "",
    ].join("\n");
    fs.writeFileSync(path.join(ROOT, g.decRel), groupContent);
  });
}

function buildReadme(findings, groupFiles) {
  const bySev = countBySev(findings);
  const content = [
    "# ET–DE A1 — OWNER review (MASTER v1.7)",
    "",
    `**Standard:** \`PROJECT_LANGUAGE_MASTER_STANDARD.md\` v1.7`,
    `**Branch:** \`${BRANCH}\``,
    `**Audit PR:** [#${PR_NUMBER}](https://github.com/${REPO}/pull/${PR_NUMBER})`,
    "",
    `Avots: [${AUDIT_MD}](${gh(`reports/${AUDIT_MD}`)}) · [GitHub indekss](${gh("reports/et-a1-owner-review-GITHUB.md")})`,
    "",
    "## Kopsavilkums",
    "",
    "| Metrika | Skaitlis |",
    "|---------|----------|",
    "| Kartītes audited | **702/702** |",
    "| Study | **134/134** |",
    `| Kopā findings | **${findings.length}** |`,
    `| CRITICAL | **${bySev.CRITICAL}** |`,
    `| HIGH | **${bySev.HIGH}** |`,
    `| MEDIUM | **${bySev.MEDIUM}** |`,
    `| LOW | **${bySev.LOW}** |`,
    "",
    "## Faili (GitHub)",
    "",
    "| Tips | Fails | Apraksts |",
    "|------|-------|----------|",
    `| README | [et-a1-owner-review-README.md](${gh("reports/et-a1-owner-review-README.md")}) | Šis fails |`,
    `| Indekss | [et-a1-owner-review-GITHUB.md](${gh("reports/et-a1-owner-review-GITHUB.md")}) | Visas saites |`,
    `| VIEW | [et-a1-owner-view.md](${gh("reports/et-a1-owner-view.md")}) | Cilvēkam ērts pārskats |`,
    `| DECISIONS | [et-a1-owner-decisions.md](${gh("reports/et-a1-owner-decisions.md")}) | **Aizpildīt šeit** — PENDING |`,
    "",
    "## Grupas",
    "",
    "| Findings | VIEW | DECISIONS |",
    "|----------|------|-----------|",
    ...groupFiles.map(
      (g) =>
        `| ${g.start}–${g.end} | [${g.viewName}](${gh(g.viewRel)}) | [${g.decName}](${gh(g.decRel)}) |`,
    ),
    "",
    "## OWNER workflow",
    "",
    "1. Atver VIEW + DECISIONS grupu pāri (1–50, 51–100).",
    "2. Katram finding — aizpildi **OWNER STATUS** un **OWNER_DECISION** (precīzs ET teksts LABOT gadījumā).",
    "3. Konsolidē lēmumus `et-a1-owner-decisions.md` vai group failos.",
    "4. Atgriez aizpildītu decisions failu COPY-ONLY remontam.",
    "",
    "**Production changes = 0 · DE changes = 0**",
    "",
  ].join("\n");
  fs.writeFileSync(OUT.readme, content);
}

function buildGithub(findings, groupFiles) {
  const bySev = countBySev(findings);
  const groupRows = groupFiles
    .map(
      (g) =>
        `| ${g.start}–${g.end} | [VIEW](${gh(g.viewRel)}) | [DECISIONS](${gh(g.decRel)}) | **PENDING** |`,
    )
    .join("\n");

  const content = [
    "# ET–DE A1 — GitHub atvēršanas indekss",
    "",
    `**Standard:** \`PROJECT_LANGUAGE_MASTER_STANDARD.md\` v1.7`,
    `**Branch:** \`${BRANCH}\``,
    `**MAIN_BASE_SHA:** \`${MAIN_BASE_SHA}\``,
    `**Audit PR:** [#${PR_NUMBER}](https://github.com/${REPO}/pull/${PR_NUMBER})`,
    `**Findings:** **${findings.length}** · **STAGE RESULT:** NEEDS OWNER REVIEW`,
    "",
    "## Sākt šeit",
    "",
    "| Fails | Apraksts |",
    "|-------|----------|",
    `| [OWNER README](${gh("reports/et-a1-owner-review-README.md")}) | Workflow un kopsavilkums |`,
    `| [Šis indekss](${gh("reports/et-a1-owner-review-GITHUB.md")}) | Visas GitHub saites |`,
    `| [Pilns audits](${gh(`reports/${AUDIT_MD}`)}) | 702/702 Luna · ${findings.length} findings |`,
    "",
    "## VIEW ↔ DECISIONS (viss komplekts)",
    "",
    "| Tips | Fails |",
    "|------|-------|",
    `| OWNER VIEW | [et-a1-owner-view.md](${gh("reports/et-a1-owner-view.md")}) |`,
    `| OWNER DECISIONS (PENDING) | [et-a1-owner-decisions.md](${gh("reports/et-a1-owner-decisions.md")}) |`,
    `| Audit JSON | [et-a1-full-audit.json](${gh("reports/et-a1-full-audit.json")}) |`,
    `| MASTER standarts | [PROJECT_LANGUAGE_MASTER_STANDARD.md](${gh("docs_and_rules/PROJECT_LANGUAGE_MASTER_STANDARD.md")}) |`,
    "",
    "## Grupas (pa 50 findingiem)",
    "",
    "| Findings | VIEW | DECISIONS | Statuss |",
    "|----------|------|-----------|---------|",
    groupRows,
    "",
    "## Severity",
    "",
    "| Severity | Skaits |",
    "|----------|--------|",
    `| CRITICAL | **${bySev.CRITICAL}** |`,
    `| HIGH | **${bySev.HIGH}** |`,
    `| MEDIUM | **${bySev.MEDIUM}** |`,
    `| LOW | **${bySev.LOW}** |`,
    "",
    "## OWNER workflow",
    "",
    "1. Atver VIEW + DECISIONS grupu pāri (1–50, 51–100).",
    "2. Katram finding — aizpildi OWNER STATUS un OWNER_DECISION (precīzs ET teksts LABOT gadījumā).",
    "3. Atgriez aizpildītu `et-a1-owner-decisions.md` COPY-ONLY remontam.",
    "",
    "**Production changes = 0 · DE changes = 0**",
    "",
  ].join("\n");

  fs.writeFileSync(OUT.github, content);
}

function main() {
  const findings = loadFindings();
  const groupFiles = buildView(findings);
  buildDecisions(findings, groupFiles);
  buildReadme(findings, groupFiles);
  buildGithub(findings, groupFiles);
  const coverage = verifyOwnerArtifactCoverage(findings);
  console.log(
    JSON.stringify(
      {
        findings: findings.length,
        view: OUT.view,
        decisions: OUT.decisions,
        readme: OUT.readme,
        github: OUT.github,
        groups: groupFiles.length,
        coverage,
      },
      null,
      2,
    ),
  );
  if (!coverage.pass && findings.length > 0) {
    console.error("\nBLOCKED: OWNER-PREP COVERAGE FAIL (§7.10.4)\n");
    process.exit(5);
  }
}

main();
