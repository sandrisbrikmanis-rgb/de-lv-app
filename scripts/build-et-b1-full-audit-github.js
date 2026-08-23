#!/usr/bin/env node
"use strict";
/**
 * Split et-b1-full-audit.md into GitHub-openable group files + index.
 * Monolith ~1MB is blocked in GitHub/Cursor UI; groups ~15–20 KB each.
 */
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");

const REPO = "sandrisbrikmanis-rgb/de-lv-app";
const BRANCH = process.env.WORK_BRANCH || execSync("git branch --show-current", { cwd: ROOT, encoding: "utf8" }).trim();
const PR_NUMBER = process.env.AUDIT_PR || "621";
const MAIN_BASE_SHA = process.env.MAIN_BASE_SHA || execSync("git rev-parse origin/main", { cwd: ROOT, encoding: "utf8" }).trim();
const GROUP_SIZE = 50;
const AUDIT_MD = path.join(ROOT, "reports/et-b1-full-audit.md");
const AUDIT_JSON = path.join(ROOT, "reports/temp/et-b1-full-audit.json");
const OUT_INDEX = path.join(ROOT, "reports/et-b1-full-audit-GITHUB.md");
const GROUP_PREFIX = "et-b1-full-audit-group";

function gh(relPath) {
  return `https://github.com/${REPO}/blob/${BRANCH}/${relPath}`;
}

function cleanStaleGroups() {
  const dir = path.join(ROOT, "reports");
  for (const name of fs.readdirSync(dir)) {
    if (new RegExp(`^${GROUP_PREFIX}\\d+\\.md$`).test(name)) {
      fs.unlinkSync(path.join(dir, name));
    }
  }
}

function splitFindings(md) {
  const marker = "## 3. Validated findings";
  const idx = md.indexOf(marker);
  if (idx < 0) throw new Error("Missing '## 3. Validated findings' section");
  const header = md.slice(0, idx + marker.length);
  const rest = md.slice(idx + marker.length);
  const parts = rest.split(/\n(?=#### ET-B1-)/).filter((p) => p.trim());
  const severityLine = parts[0]?.startsWith("\nCRITICAL:") ? parts.shift() : "";
  const findings = parts.map((p) => p.trim()).filter((p) => p.startsWith("#### ET-B1-"));
  return { header: header + (severityLine ? `\n\n${severityLine.trim()}` : ""), findings };
}

function buildGroupFiles(findings) {
  const groups = [];
  const groupCount = Math.ceil(findings.length / GROUP_SIZE);
  for (let i = 0; i < groupCount; i++) {
    const id = String(i + 1).padStart(2, "0");
    const start = i * GROUP_SIZE + 1;
    const end = Math.min((i + 1) * GROUP_SIZE, findings.length);
    const slice = findings.slice(i * GROUP_SIZE, (i + 1) * GROUP_SIZE);
    const fileName = `${GROUP_PREFIX}${id}.md`;
    const rel = `reports/${fileName}`;
    const content = [
      `# ET–DE B1 — pilns audits (grupa ${start}–${end})`,
      "",
      `**Branch:** \`${BRANCH}\` · **PR:** [#${PR_NUMBER}](https://github.com/${REPO}/pull/${PR_NUMBER})`,
      `**Indekss:** [et-b1-full-audit-GITHUB.md](${gh("reports/et-b1-full-audit-GITHUB.md")})`,
      "",
      ...slice,
      "",
    ].join("\n");
    fs.writeFileSync(path.join(ROOT, rel), content);
    groups.push({ id, fileName, rel, start, end, count: slice.length });
  }
  return groups;
}

function loadSummary() {
  if (!fs.existsSync(AUDIT_JSON)) return { totalCards: 3367, findings: 0 };
  const data = JSON.parse(fs.readFileSync(AUDIT_JSON, "utf8"));
  const findings =
    data.ownerBacklogFinal?.length ||
    data.validatedFindings?.length ||
    (data.findings || []).filter((f) => f.validatedReal).length;
  return { totalCards: 3367, findings, verdict: data.meta?.verdict || "NEEDS_OWNER_REVIEW" };
}

function buildIndex(header, groups, summary) {
  const groupRows = groups
    .map(
      (g) =>
        `| ${g.start}–${g.end} | ${g.count} | [${g.fileName}](${gh(g.rel)}) |`,
    )
    .join("\n");

  const slimHeader = header
    .replace(/^# .*/m, "# ET–DE B1 — audita kopsavilkums (MASTER v1.9)")
    .trim();

  const content = [
    "# ET–DE B1 — GitHub atvēršanas indekss (pilns audits)",
    "",
    `**Standard:** \`PROJECT_LANGUAGE_MASTER_STANDARD.md\` v1.9`,
    `**Branch:** \`${BRANCH}\``,
    `**MAIN_BASE_SHA:** \`${MAIN_BASE_SHA}\``,
    `**Audit PR:** [#${PR_NUMBER}](https://github.com/${REPO}/pull/${PR_NUMBER})`,
    `**Kartītes:** **${summary.totalCards}/${summary.totalCards}** · **Findings:** **${summary.findings}**`,
    `**Verdict:** **${summary.verdict}**`,
    "",
    "> Monolīts `et-b1-full-audit.md` (~1 MB) GitHub/Cursor bieži **bloķē**. Izmanto šo indeksu un grupu failus.",
    "",
    "## Sākt šeit",
    "",
    "| Fails | Apraksts |",
    "|-------|----------|",
    `| [OWNER GitHub indekss](${gh("reports/et-b1-owner-review-GITHUB.md")}) | 55 OWNER grupas (VIEW + DECISIONS) |`,
    `| [Audit JSON](${gh("reports/et-b1-full-audit.json")}) | Mašīnlasāms pilns audits |`,
    `| [Kopsavilkums](${gh("reports/et-b1-full-audit-summary.md")}) | §1–2b bez findingiem |`,
    "",
    "## Pilna audita grupas (pa 50 findingiem)",
    "",
    "| Findings | Skaits | Audita MD |",
    "|----------|--------|-----------|",
    groupRows,
    "",
    "## Saistītie OWNER faili",
    "",
    `| OWNER VIEW indekss | [et-b1-owner-view.md](${gh("reports/et-b1-owner-view.md")}) |`,
    `| OWNER DECISIONS indekss | [et-b1-owner-decisions.md](${gh("reports/et-b1-owner-decisions.md")}) |`,
    "",
    "**Production changes = 0 · DE changes = 0**",
    "",
  ].join("\n");

  fs.writeFileSync(OUT_INDEX, content, "utf8");

  const summaryOnly = [
    slimHeader,
    "",
    `> Pilni findingi: [et-b1-full-audit-GITHUB.md](${gh("reports/et-b1-full-audit-GITHUB.md")}) (${groups.length} grupas).`,
    "",
  ].join("\n");
  fs.writeFileSync(path.join(ROOT, "reports/et-b1-full-audit-summary.md"), summaryOnly, "utf8");
}

function main() {
  if (!fs.existsSync(AUDIT_MD)) {
    console.error(`Missing ${AUDIT_MD}`);
    process.exit(1);
  }
  const md = fs.readFileSync(AUDIT_MD, "utf8");
  const { header, findings } = splitFindings(md);
  if (findings.length === 0) {
    console.error("No findings parsed from audit MD");
    process.exit(2);
  }
  cleanStaleGroups();
  const groups = buildGroupFiles(findings);
  const summary = loadSummary();
  buildIndex(header, groups, summary);
  console.log(
    JSON.stringify(
      {
        findings: findings.length,
        groups: groups.length,
        index: OUT_INDEX,
        summary: path.join(ROOT, "reports/et-b1-full-audit-summary.md"),
      },
      null,
      2,
    ),
  );
}

main();
