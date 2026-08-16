#!/usr/bin/env node
"use strict";
/**
 * Generate reports/da-verbs-owner-review-GITHUB.md — clickable GitHub blob links.
 */
const fs = require("fs");
const path = require("path");

const REPO = "sandrisbrikmanis-rgb/de-lv-app";
const BRANCH = process.env.GITHUB_BRANCH || "cursor/da-verbs-full-audit-fffe";
const PR_NUMBER = process.env.GITHUB_PR || "559";
const REPORTS = path.join(__dirname, "..", "reports");
const BATCH_SIZE = 50;

function ghLink(file) {
  return `https://github.com/${REPO}/blob/${BRANCH}/reports/${file}`;
}

function link(file, label) {
  return `[${label || file}](${ghLink(file)})`;
}

function readSummary() {
  const p = path.join(REPORTS, "temp", "da-verbs-merged-audit.json");
  if (!fs.existsSync(p)) return { total: 0, bySeverity: {}, meta: {} };
  const data = JSON.parse(fs.readFileSync(p, "utf8"));
  const findings = (data.findings || []).filter((f) => f.status !== "FALSE_POSITIVE");
  return {
    total: findings.length,
    bySeverity: data.bySeverity || {},
    meta: data.meta || {},
  };
}

function groupLinks(total) {
  const groupCount = Math.ceil(total / BATCH_SIZE);
  const rows = [];
  for (let i = 1; i <= groupCount; i++) {
    const slug = `group${String(i).padStart(2, "0")}`;
    const start = (i - 1) * BATCH_SIZE + 1;
    const end = Math.min(i * BATCH_SIZE, total);
    rows.push(
      `| ${start}–${end} | ${link(`da-verbs-owner-review-${slug}.md`, "Review")} | ${link(`da-verbs-owner-decisions-${slug}.md`, "Decisions")} |`
    );
  }
  return rows.join("\n");
}

const summary = readSummary();
const prLine = PR_NUMBER
  ? `[#${PR_NUMBER}](https://github.com/${REPO}/pull/${PR_NUMBER})`
  : "(PR pēc push)";

const md = `# DA–DE Verbs — GitHub atvēršanas indekss

**Auditors:** GPT-5.6 Luna (READ-ONLY)
**Branch:** \`${BRANCH}\` · **PR:** ${prLine}

## Sākt šeit

| Fails | Apraksts |
|-------|----------|
| ${link("da-verbs-full-audit.md", "Pilns audits")} | GPT-5.6 Luna Verbs audits (189/189 · 945/945) |
| ${link("da-verbs-all-findings-by-verb.md", "Visi findingi")} | Apvienota tabula pēc verb order |
| ${link("da-verbs-owner-review-README.md", "OWNER README")} | Workflow un kopsavilkums |
| ${link("da-verbs-owner-review-GITHUB.md", "Šis indekss")} | Visas GitHub saites |

## Preview ↔ Decisions ↔ Accepted

| Dataset | Decisions (PENDING) | Accepted (recommended LABOT) |
|---------|---------------------|------------------------------|
| Verbs (viss) | ${link("da-verbs-owner-decisions.md", "Decisions")} | ${link("da-verbs-owner-accepted.md", "Accepted")} |

## Grupu faili (pa 50 findingiem)

| Findings | Review | Decisions |
|----------|--------|-----------|
${groupLinks(summary.total)}

## Visi OWNER faili

### Decisions (PENDING — aizpildīt OWNER)
- ${link("da-verbs-owner-decisions.md")}

### Accepted (ieteicamais LABOT ceļš)
- ${link("da-verbs-owner-accepted.md")}

### Grupu review
${Array.from({ length: Math.ceil(summary.total / BATCH_SIZE) }, (_, i) => {
  const slug = `group${String(i + 1).padStart(2, "0")}`;
  return `- ${link(`da-verbs-owner-review-${slug}.md`)} · ${link(`da-verbs-owner-decisions-${slug}.md`)}`;
}).join("\n")}

---

**Verdict:** DA–DE Verbs: NEEDS REPAIR · **Findings:** **${summary.total}** · **Production changes:** 0 · **DE changes:** 0
`;

fs.writeFileSync(path.join(REPORTS, "da-verbs-owner-review-GITHUB.md"), md, "utf8");
console.log(`Wrote reports/da-verbs-owner-review-GITHUB.md (${summary.total} findings, ${Math.ceil(summary.total / BATCH_SIZE)} groups)`);
