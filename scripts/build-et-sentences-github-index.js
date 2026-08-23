#!/usr/bin/env node
"use strict";
/**
 * Generate reports/et-sentences-owner-review-GITHUB.md — ET–DE Teikumi GitHub index.
 */
const fs = require("fs");
const path = require("path");

const REPO = "sandrisbrikmanis-rgb/de-lv-app";
const BRANCH = process.env.GITHUB_BRANCH || process.env.WORK_BRANCH || "cursor/et-de-c1c2-teikumi-full-audit-4a7c";
const PR_NUMBER = process.env.GITHUB_PR || process.env.AUDIT_PR || "622";
const REPORTS = path.join(__dirname, "..", "reports");

function ghLink(file) {
  return `https://github.com/${REPO}/blob/${BRANCH}/reports/${file}`;
}

function link(file, label) {
  return `[${label || file}](${ghLink(file)})`;
}

function readSummary() {
  const p = path.join(REPORTS, "temp", "et-sentences-merged-audit.json");
  if (!fs.existsSync(p)) return { total: 0, bySeverity: {} };
  const data = JSON.parse(fs.readFileSync(p, "utf8"));
  return {
    total: (data.findings || []).filter((f) => f.status !== "FALSE_POSITIVE").length,
    bySeverity: data.bySeverity || {},
  };
}

const summary = readSummary();
const prLine = PR_NUMBER
  ? `[#${PR_NUMBER}](https://github.com/${REPO}/pull/${PR_NUMBER})`
  : "(PR pēc push)";

const md = `# ET–DE Teikumi (Sätze) — GitHub atvēršanas indekss

**Standard:** \`PROJECT_LANGUAGE_MASTER_STANDARD.md\` v1.9
**Auditors:** GPT-5.6 Luna (READ-ONLY)
**Branch:** \`${BRANCH}\` · **PR:** ${prLine}

## Sākt šeit

| Fails | Apraksts |
|-------|----------|
| ${link("et-sentences-full-audit.md", "Pilns audits")} | ET–DE Teikumi FULL_DISCOVERY (796/796) |
| ${link("et-sentences-all-findings-by-sentence.md", "Visi findingi")} | Apvienota tabula pēc teikuma |
| ${link("et-sentences-owner-review-README.md", "OWNER README")} | Workflow un kopsavilkums |
| ${link("et-sentences-owner-review-GITHUB.md", "Šis indekss")} | Visas GitHub saites |

## OWNER VIEW ↔ DECISIONS

| Tips | Fails |
|------|-------|
| OWNER VIEW (monolīts) | ${link("et-sentences-owner-view.md", "et-sentences-owner-view.md")} |
| OWNER DECISIONS (PENDING) | ${link("et-sentences-owner-decisions.md", "Decisions")} |
| Accepted (ieteikums) | ${link("et-sentences-owner-accepted.md", "Accepted")} |

## Visi OWNER faili

- ${link("et-sentences-owner-view.md")}
- ${link("et-sentences-owner-review.md")} (alias — identisks VIEW)
- ${link("et-sentences-owner-decisions.md")}
- ${link("et-sentences-owner-accepted.md")}

---

**Verdict:** ET–DE Teikumi: NEEDS OWNER REVIEW · **Findings:** **${summary.total}** · **Production changes:** 0 · **DE changes:** 0
`;

fs.writeFileSync(path.join(REPORTS, "et-sentences-owner-review-GITHUB.md"), md, "utf8");
console.log(`Wrote reports/et-sentences-owner-review-GITHUB.md (${summary.total} findings)`);
