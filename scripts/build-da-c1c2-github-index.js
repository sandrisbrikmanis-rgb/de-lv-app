#!/usr/bin/env node
"use strict";
/**
 * Generate reports/da-c1c2-owner-review-GITHUB.md — clickable GitHub blob links.
 */
const fs = require("fs");
const path = require("path");

const REPO = "sandrisbrikmanis-rgb/de-lv-app";
const BRANCH = process.env.GITHUB_BRANCH || "cursor/da-c1c2-full-audit-fffe";
const PR_NUMBER = process.env.GITHUB_PR || "552";
const REPORTS = path.join(__dirname, "..", "reports");

function ghLink(file) {
  return `https://github.com/${REPO}/blob/${BRANCH}/reports/${file}`;
}

function link(file, label) {
  return `[${label || file}](${ghLink(file)})`;
}

function readSummary() {
  let c1 = 0;
  let c2 = 0;
  for (const [level, file] of [
    ["c1", "da-c1-audit-data.json"],
    ["c2", "da-c2-audit-data.json"],
  ]) {
    const p = path.join(REPORTS, "temp", file);
    if (!fs.existsSync(p)) continue;
    const n = JSON.parse(fs.readFileSync(p, "utf8")).summary?.realFindings || 0;
    if (level === "c1") c1 = n;
    else c2 = n;
  }
  return { c1, c2, total: c1 + c2 };
}

const summary = readSummary();
const prLine = PR_NUMBER
  ? `[#${PR_NUMBER}](https://github.com/${REPO}/pull/${PR_NUMBER})`
  : "(PR pēc push)";

const rows = ["c1", "c2"]
  .map((slug) => {
    const ds = slug.toUpperCase();
    return `| ${ds} | ${link(`da-c1c2-owner-review-${slug}.md`, "Preview")} | ${link(`da-c1c2-owner-decisions-${slug}.md`, "Decisions")} | ${link(`da-c1c2-owner-accepted-${slug}.md`, "Accepted")} |`;
  })
  .join("\n");

const md = `# DA–DE C1/C2 — GitHub atvēršanas indekss

**Auditors:** GPT-5.6 Luna (READ-ONLY)
**Branch:** \`${BRANCH}\` · **PR:** ${prLine}

## Sākt šeit

| Fails | Apraksts |
|-------|----------|
| ${link("da-c1-full-audit.md", "C1 pilns audits")} | GPT-5.6 Luna C1 audits (572/572) |
| ${link("da-c2-full-audit.md", "C2 pilns audits")} | GPT-5.6 Luna C2 audits (219/219) |
| ${link("da-c1c2-all-findings-by-card.md", "Visi findingi")} | Apvienota tabula pēc kartītes |
| ${link("da-c1c2-owner-review-README.md", "OWNER README")} | Workflow un kopsavilkums |
| ${link("da-c1c2-owner-review-GITHUB.md", "Šis indekss")} | Visas GitHub saites |

## Preview ↔ Decisions ↔ Accepted

| Dataset | Preview (review) | Decisions (PENDING) | Accepted (recommended LABOT) |
|---------|------------------|---------------------|------------------------------|
${rows}

## Visi OWNER faili

### Preview
- ${link("da-c1c2-owner-review-c1.md")}
- ${link("da-c1c2-owner-review-c2.md")}

### Decisions (PENDING — aizpildīt OWNER)
- ${link("da-c1c2-owner-decisions-c1.md")}
- ${link("da-c1c2-owner-decisions-c2.md")}

### Accepted (ieteicamais LABOT ceļš)
- ${link("da-c1c2-owner-accepted-c1.md")}
- ${link("da-c1c2-owner-accepted-c2.md")}

---

**Verdict:** DA–DE C1/C2: NEEDS REPAIR · **Findings:** C1 ${summary.c1} + C2 ${summary.c2} = **${summary.total}** · **Production changes:** 0 · **DE changes:** 0
`;

fs.writeFileSync(path.join(REPORTS, "da-c1c2-owner-review-GITHUB.md"), md, "utf8");
console.log(`Wrote reports/da-c1c2-owner-review-GITHUB.md (${summary.total} findings)`);
