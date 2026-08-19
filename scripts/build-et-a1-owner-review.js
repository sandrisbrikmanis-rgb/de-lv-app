#!/usr/bin/env node
"use strict";
/**
 * Build ET–DE A1 OWNER-PREP package per PROJECT_LANGUAGE_MASTER_STANDARD.md §7.6.
 */
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");

const AUDIT_JSON = path.join(ROOT, "reports/temp/et-a1-full-audit.json");
const AUDIT_MD = "et-a1-full-audit.md";
const REPO = "sandrisbrikmanis-rgb/de-lv-app";
const BRANCH = process.env.WORK_BRANCH || execSync("git branch --show-current", { cwd: ROOT, encoding: "utf8" }).trim();
const PR_NUMBER = process.env.AUDIT_PR || "593";
const MAIN_BASE_SHA = process.env.MAIN_BASE_SHA || execSync("git rev-parse origin/main", { cwd: ROOT, encoding: "utf8" }).trim();
const GROUP_SIZE = 50;

const OUT = {
  view: path.join(ROOT, "reports/et-a1-owner-view.md"),
  decisions: path.join(ROOT, "reports/et-a1-owner-decisions.md"),
  github: path.join(ROOT, "reports/et-a1-owner-review-GITHUB.md"),
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

function loadFindings() {
  if (!fs.existsSync(AUDIT_JSON)) {
    console.error(`Missing ${AUDIT_JSON}. Run: node scripts/run-et-a1-full-audit.js`);
    process.exit(1);
  }
  return JSON.parse(fs.readFileSync(AUDIT_JSON, "utf8")).findings || [];
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
    `**OWNER STATUS:** PENDING`,
    `**OWNER_DECISION:** [nav aizpildīts]`,
    "",
    "> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.",
    "",
    "---",
    "",
  ].filter(Boolean).join("\n");
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
    const name = `et-a1-owner-view-group${String(gi + 1).padStart(2, "0")}.md`;
    const rel = `reports/${name}`;
    const content = [
      `# ET–DE A1 — OWNER VIEW (grupa ${gi + 1}, ${start}–${end})`,
      "",
      `**Standard:** \`PROJECT_LANGUAGE_MASTER_STANDARD.md\` v1.5`,
      `**Auditors:** deterministika + GPT-5.6 Luna (READ-ONLY)`,
      `Avots: \`reports/${AUDIT_MD}\``,
      "",
      ...slice.map(renderViewFinding),
    ].join("\n");
    fs.writeFileSync(path.join(ROOT, rel), content);
    groupFiles.push({ name, rel, start, end });
  });

  const main = [
    "# ET–DE A1 — OWNER VIEW",
    "",
    `**Standard:** \`PROJECT_LANGUAGE_MASTER_STANDARD.md\` v1.5`,
    `**Auditors:** deterministika + GPT-5.6 Luna (READ-ONLY)`,
    `**MAIN_BASE_SHA:** \`${MAIN_BASE_SHA}\``,
    `**WORK_BRANCH:** \`${BRANCH}\``,
    `**SCOPE:** ET–DE A1 (\`data/et/a1.js\`)`,
    `**Findings:** **${findings.length}**`,
    "",
    "> PROPOSED_ET ir audita ieteikums — **nav** OWNER apstiprināts.",
    "> Visi ieraksti sākotnēji **PENDING**. OWNER aizpilda `et-a1-owner-decisions.md`.",
    "> **DE = STRICT READ-ONLY.** Production: `data/et/a1.js` + `www/data/et/a1.js`.",
    "",
    "## Grupas (pa 50 findingiem)",
    "",
    "| Grupa | Findings | Fails |",
    "|-------|----------|-------|",
    ...groupFiles.map((g) => `| ${g.start}–${g.end} | ${g.end - g.start + 1} | [${g.name}](./${g.name}) |`),
    "",
    "## Īsais saraksts (visi findingi)",
    "",
    ...findings.map((f) => `- **${f.findingId}** \`${f.cardId}\` · \`${f.field}\` · ${f.severity} · ${truncate(f.reason, 80)}`),
    "",
  ].join("\n");

  fs.writeFileSync(OUT.view, main);
  return groupFiles;
}

function buildDecisions(findings) {
  const lines = [
    "# ET–DE A1 — OWNER DECISIONS",
    "",
    `**Standard:** \`PROJECT_LANGUAGE_MASTER_STANDARD.md\` v1.5`,
    `**MAIN_BASE_SHA:** \`${MAIN_BASE_SHA}\``,
    `**WORK_BRANCH:** \`${BRANCH}\``,
    `**Findings:** **${findings.length}** · sākotnēji visi **PENDING**`,
    "",
    "Atļautie statusi: LABOT | NELABOT | FALSE_POSITIVE | NEEDS_SOURCE_REVIEW",
    "",
    "**DE = STRICT READ-ONLY.** Apply tikai pēc OWNER apstiprinājuma.",
    "",
    "| Audit ID | Card ID | Field | CURRENT | PROPOSED_ET | Severity | Category | OWNER STATUS | OWNER_DECISION | Piezīme |",
    "|----------|---------|-------|---------|-------------|----------|----------|--------------|----------------|---------|",
  ];

  for (const f of findings) {
    lines.push(
      `| ${f.findingId} | ${escapePipe(f.cardId)} | ${escapePipe(f.field)} | ${escapePipe(truncate(f.currentEt, 120))} | ${escapePipe(truncate(f.proposedEt, 120))} | ${f.severity} | ${f.category || ""} | PENDING | | |`,
    );
  }

  lines.push("");
  fs.writeFileSync(OUT.decisions, lines.join("\n"));
}

function buildGithub(findings, groupFiles) {
  const sev = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0 };
  findings.forEach((f) => {
    const s = String(f.severity || "MEDIUM").toUpperCase();
    if (sev[s] !== undefined) sev[s] += 1;
  });

  const content = [
    "# ET–DE A1 — GitHub atvēršanas indekss",
    "",
    `**Standard:** \`PROJECT_LANGUAGE_MASTER_STANDARD.md\` v1.5`,
    `**Branch:** \`${BRANCH}\``,
    `**MAIN_BASE_SHA:** \`${MAIN_BASE_SHA}\``,
    `**Audit PR:** [#${PR_NUMBER}](https://github.com/${REPO}/pull/${PR_NUMBER})`,
    `**Findings:** **${findings.length}** · **STAGE RESULT:** NEEDS OWNER REVIEW`,
    "",
    "## Sākt šeit",
    "",
    "| Fails | Apraksts |",
    "|-------|----------|",
    `| [Pilns audits](${gh(`reports/${AUDIT_MD}`)}) | 702/702 Luna · ${findings.length} findings |`,
    `| [OWNER VIEW](${gh("reports/et-a1-owner-view.md")}) | Cilvēkam ērts pārskats |`,
    `| [OWNER DECISIONS](${gh("reports/et-a1-owner-decisions.md")}) | Lēmumu tabula (PENDING) |`,
    `| [Audit JSON](${gh("reports/et-a1-full-audit.json")}) | Mašīnlasāms konsolidāts JSON |`,
    `| [MASTER standarts](${gh("docs_and_rules/PROJECT_LANGUAGE_MASTER_STANDARD.md")}) | v1.5 |`,
    "",
    "## OWNER VIEW grupas",
    "",
    "| Findings | Fails |",
    "|----------|-------|",
    ...groupFiles.map((g) => `| ${g.start}–${g.end} | [${g.name}](${gh(g.rel)}) |`),
    "",
    "## Severity",
    "",
    "| Severity | Skaits |",
    "|----------|--------|",
    `| CRITICAL | **${sev.CRITICAL}** |`,
    `| HIGH | **${sev.HIGH}** |`,
    `| MEDIUM | **${sev.MEDIUM}** |`,
    `| LOW | **${sev.LOW}** |`,
    "",
    "## OWNER workflow",
    "",
    "1. Atver OWNER VIEW grupas vai decisions tabulu.",
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
  buildDecisions(findings);
  buildGithub(findings, groupFiles);
  console.log(JSON.stringify({
    findings: findings.length,
    view: OUT.view,
    decisions: OUT.decisions,
    github: OUT.github,
    groups: groupFiles.length,
  }, null, 2));
}

main();
