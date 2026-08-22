#!/usr/bin/env node
"use strict";
/**
 * Generate reports/et-sentences-owner-review-GITHUB.md — clickable GitHub blob links.
 */
const fs = require("fs");
const path = require("path");

const REPO = "sandrisbrikmanis-rgb/de-lv-app";
const BRANCH = process.env.GITHUB_BRANCH || "cursor/et-sentences-full-audit-fffe";
const PR_NUMBER = process.env.GITHUB_PR || "554";
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

const md = `# DA–DE Sätze — GitHub atvēršanas indekss

**Auditors:** GPT-5.6 Luna (READ-ONLY)
**Branch:** \`${BRANCH}\` · **PR:** ${prLine}

## Sākt šeit

| Fails | Apraksts |
|-------|----------|
| ${link("et-sentences-full-audit.md", "Pilns audits")} | GPT-5.6 Luna Sätze audits (796/796) |
| ${link("et-sentences-all-findings-by-sentence.md", "Visi findingi")} | Apvienota tabula pēc teikuma |
| ${link("et-sentences-owner-review-README.md", "OWNER README")} | Workflow un kopsavilkums |
| ${link("et-sentences-owner-review-GITHUB.md", "Šis indekss")} | Visas GitHub saites |

## Preview ↔ Decisions ↔ Accepted

| Dataset | Preview (review) | Decisions (PENDING) | Accepted (recommended LABOT) |
|---------|------------------|---------------------|------------------------------|
| Sätze | ${link("et-sentences-owner-review.md", "Preview")} | ${link("et-sentences-owner-decisions.md", "Decisions")} | ${link("et-sentences-owner-accepted.md", "Accepted")} |

## Visi OWNER faili

### Preview
- ${link("et-sentences-owner-review.md")}

### Decisions (PENDING — aizpildīt OWNER)
- ${link("et-sentences-owner-decisions.md")}

### Accepted (ieteicamais LABOT ceļš)
- ${link("et-sentences-owner-accepted.md")}

---

**Verdict:** DA–DE Sätze: NEEDS REPAIR · **Findings:** **${summary.total}** · **Production changes:** 0 · **DE changes:** 0
`;

fs.writeFileSync(path.join(REPORTS, "et-sentences-owner-review-GITHUB.md"), md, "utf8");
console.log(`Wrote reports/et-sentences-owner-review-GITHUB.md (${summary.total} findings)`);
