#!/usr/bin/env node
"use strict";
/**
 * Generate reports/et-verbs-owner-review-GITHUB.md — clickable GitHub blob links.
 */
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");

const REPO = "sandrisbrikmanis-rgb/de-lv-app";
const BRANCH =
  process.env.GITHUB_BRANCH ||
  execSync("git branch --show-current", { cwd: ROOT, encoding: "utf8" }).trim();
const REPORTS = path.join(ROOT, "reports");
const BATCH_SIZE = 50;

function ghLink(file) {
  return `https://github.com/${REPO}/blob/${BRANCH}/reports/${file}`;
}

function link(file, label) {
  return `[${label || file}](${ghLink(file)})`;
}

function readSummary() {
  const p = path.join(REPORTS, "temp", "et-verbs-merged-audit.json");
  if (!fs.existsSync(p)) return { total: 0, verbsTotal: 189, verbFormsTotal: 945 };
  const data = JSON.parse(fs.readFileSync(p, "utf8"));
  const findings = (data.findings || []).filter((f) => f.status !== "FALSE_POSITIVE");
  return {
    total: findings.length,
    verbsTotal: data.meta?.verbsTotal || 189,
    verbFormsTotal: data.meta?.verbFormsTotal || 945,
    lunaVerbsAudited: data.meta?.lunaVerbsAudited || 0,
    lunaFormsAudited: data.meta?.lunaFormsAudited || 0,
  };
}

function groupLinks(total) {
  if (!total) return "";
  const groupCount = Math.ceil(total / BATCH_SIZE);
  const rows = [];
  for (let i = 1; i <= groupCount; i++) {
    const slug = `group${String(i).padStart(2, "0")}`;
    const start = (i - 1) * BATCH_SIZE + 1;
    const end = Math.min(i * BATCH_SIZE, total);
    rows.push(
      `| ${start}–${end} | ${link(`et-verbs-owner-review-${slug}.md`, "Preview")} | ${link(`et-verbs-owner-decisions-${slug}.md`, "Decisions")} | PENDING |`
    );
  }
  return rows.join("\n");
}

const summary = readSummary();

const md = `# ET–DE Verbs — GitHub atvēršanas indekss

**Auditors:** GPT-5.6 Luna
**Branch:** \`${BRANCH}\`

## Sākt šeit

| Fails | Apraksts |
|-------|----------|
| ${link("et-verbs-owner-review-README.md", "OWNER README")} | Workflow, kopsavilkums, lokālās saites |
| ${link("et-verbs-owner-review-GITHUB.md", "Šis indekss")} | Visas GitHub saites |
| ${link("et-verbs-full-audit.md", "Pilns audits")} | ${summary.lunaVerbsAudited}/${summary.verbsTotal} verbs · ${summary.lunaFormsAudited}/${summary.verbFormsTotal} forms · ${summary.total} findings |
| ${link("et-verbs-all-findings-by-verb.md", "Visi findingi")} | Apvienota tabula pēc verb order |

## OWNER preview ↔ decisions ↔ accepted

| Tips | Fails |
|------|-------|
| Decisions (viss, PENDING) | ${link("et-verbs-owner-decisions.md", "et-verbs-owner-decisions.md")} |
| Accepted (ieteicamais LABOT) | ${link("et-verbs-owner-accepted.md", "et-verbs-owner-accepted.md")} |

## Grupu preview (pa 50 findingiem)

| Findings | Preview | Decisions | Statuss |
|----------|---------|-----------|---------|
${groupLinks(summary.total)}

---

**Findings:** **${summary.total}** · **DE changes:** **0** · **Production changes:** **0**
`;

fs.writeFileSync(path.join(REPORTS, "et-verbs-owner-review-GITHUB.md"), md, "utf8");
console.log(`Wrote reports/et-verbs-owner-review-GITHUB.md (branch: ${BRANCH})`);
