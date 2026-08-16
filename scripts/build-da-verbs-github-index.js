#!/usr/bin/env node
"use strict";
/**
 * Generate reports/da-verbs-owner-review-GITHUB.md — clickable GitHub blob links.
 */
const fs = require("fs");
const path = require("path");

const REPO = "sandrisbrikmanis-rgb/de-lv-app";
const BRANCH = process.env.GITHUB_BRANCH || "cursor/da-verbs-owner-repair-fffe";
const AUDIT_PR = process.env.GITHUB_AUDIT_PR || "559";
const REPAIR_PR = process.env.GITHUB_REPAIR_PR || "560";
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
  if (!fs.existsSync(p)) return { total: 569, applied: 454, pendingGroup: 7 };
  const data = JSON.parse(fs.readFileSync(p, "utf8"));
  const findings = (data.findings || []).filter((f) => f.status !== "FALSE_POSITIVE");
  let applied = 454;
  const logPath = path.join(REPORTS, "temp", "da-verbs-owner-apply-log.json");
  if (fs.existsSync(logPath)) {
    applied = JSON.parse(fs.readFileSync(logPath, "utf8")).summary?.applied ?? applied;
  }
  return { total: findings.length, applied, pendingGroup: 7 };
}

function groupLinks(total) {
  const groupCount = Math.ceil(total / BATCH_SIZE);
  const rows = [];
  for (let i = 1; i <= groupCount; i++) {
    const slug = `group${String(i).padStart(2, "0")}`;
    const start = (i - 1) * BATCH_SIZE + 1;
    const end = Math.min(i * BATCH_SIZE, total);
    const status = i === 7 ? " **PENDING**" : i <= 6 || i >= 8 ? " signed" : "";
    const signed =
      i !== 7 && fs.existsSync(path.join(REPORTS, `da-verbs-owner-decisions-signed-${slug}.md`))
        ? ` · ${link(`da-verbs-owner-decisions-signed-${slug}.md`, "Signed")}`
        : "";
    rows.push(
      `| ${start}–${end} | ${link(`da-verbs-owner-review-${slug}.md`, "Preview")} | ${link(`da-verbs-owner-decisions-${slug}.md`, "Decisions")}${signed} |${status}|`
    );
  }
  return rows.join("\n");
}

const summary = readSummary();

const md = `# DA–DE Verbs — GitHub atvēršanas indekss

**Auditors:** GPT-5.6 Luna
**Branch:** \`${BRANCH}\`
**Audit PR:** [#${AUDIT_PR}](https://github.com/${REPO}/pull/${AUDIT_PR}) · **Repair PR:** [#${REPAIR_PR}](https://github.com/${REPO}/pull/${REPAIR_PR})

## Sākt šeit

| Fails | Apraksts |
|-------|----------|
| ${link("da-verbs-owner-review-README.md", "OWNER README")} | Workflow, kopsavilkums, lokālās saites |
| ${link("da-verbs-owner-review-GITHUB.md", "Šis indekss")} | Visas GitHub saites |
| ${link("da-verbs-full-audit.md", "Pilns audits")} | 189/189 verbs · 945/945 forms · 569 findings |
| ${link("da-verbs-all-findings-by-verb.md", "Visi findingi")} | Apvienota tabula pēc verb order |

## OWNER preview ↔ decisions ↔ accepted

| Tips | Fails |
|------|-------|
| Decisions (viss, PENDING) | ${link("da-verbs-owner-decisions.md", "da-verbs-owner-decisions.md")} |
| Accepted (ieteicamais LABOT) | ${link("da-verbs-owner-accepted.md", "da-verbs-owner-accepted.md")} |
| Repair apply atskaite | ${link("da-verbs-owner-repair-apply.md", "da-verbs-owner-repair-apply.md")} |

## Grupu preview (pa 50 findingiem)

| Findings | Preview | Decisions | Statuss |
|----------|---------|-----------|---------|
${groupLinks(summary.total)}

## Group 07 — vēl jāaizpilda

| | |
|--|--|
| Preview | ${link("da-verbs-owner-review-group07.md", "da-verbs-owner-review-group07.md")} |
| Decisions (PENDING) | ${link("da-verbs-owner-decisions-group07.md", "da-verbs-owner-decisions-group07.md")} |
| Findings | **301–350** (50 ieraksti) |

## Signed decisions (jau apply)

${[1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12]
  .map((i) => {
    const slug = `group${String(i).padStart(2, "0")}`;
    return `- ${link(`da-verbs-owner-decisions-signed-${slug}.md`)}`;
  })
  .join("\n")}

---

**Findings:** **${summary.total}** · **Applied:** **${summary.applied}** · **Group07 pending:** **50** · **DE changes:** **0**
`;

fs.writeFileSync(path.join(REPORTS, "da-verbs-owner-review-GITHUB.md"), md, "utf8");
console.log(`Wrote reports/da-verbs-owner-review-GITHUB.md (branch: ${BRANCH})`);
