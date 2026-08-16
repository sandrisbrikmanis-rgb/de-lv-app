#!/usr/bin/env node
/**
 * Generate reports/da-b2-owner-review-GITHUB.md — clickable GitHub blob links.
 */
const fs = require("fs");
const path = require("path");

const REPO = "sandrisbrikmanis-rgb/de-lv-app";
const BRANCH = process.env.GITHUB_BRANCH || "cursor/da-b2-full-audit-fffe";
const PR_NUMBER = process.env.GITHUB_PR || "";
const REPORTS = path.join(__dirname, "..", "reports");
const OUT = path.join(REPORTS, "da-b2-owner-review-GITHUB.md");
const AUDIT_JSON = path.join(REPORTS, "temp/da-b2-audit-data.json");

function ghLink(file) {
  return `https://github.com/${REPO}/blob/${BRANCH}/reports/${file}`;
}

function link(file, label) {
  return `[${label || file}](${ghLink(file)})`;
}

function listFiles(prefix) {
  if (!fs.existsSync(REPORTS)) return [];
  return fs
    .readdirSync(REPORTS)
    .filter((f) => f.startsWith(prefix) && f.endsWith(".md"))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
}

const reviewFiles = listFiles("da-b2-owner-review-").filter(
  (f) => !f.includes("README") && !f.includes("GITHUB")
);
const decisionFiles = listFiles("da-b2-owner-decisions-");

let summary = { total: 0, verdict: "NEEDS REPAIR" };
if (fs.existsSync(AUDIT_JSON)) {
  const data = JSON.parse(fs.readFileSync(AUDIT_JSON, "utf8"));
  summary.total = data.summary?.total || data.findings?.length || 0;
  summary.verdict = data.summary?.verdict || "NEEDS REPAIR";
}

const rows = reviewFiles
  .map((r, i) => {
    const slug = r.replace("da-b2-owner-review-", "").replace(".md", "");
    const d = decisionFiles.find((x) => x.includes(`decisions-${slug}`));
    return `| ${slug} | ${link(r, "Review")} | ${d ? link(d, "Decisions") : "—"} |`;
  })
  .join("\n");

const prLine = PR_NUMBER
  ? `[#${PR_NUMBER}](https://github.com/${REPO}/pull/${PR_NUMBER})`
  : "(PR pēc push)";

const md = `# DA–DE B2 — GitHub atvēršanas indekss

**Auditors:** GPT-5.6 Luna (READ-ONLY)
**Branch:** \`${BRANCH}\` · **PR:** ${prLine}

## Sākt šeit

| Fails | Apraksts |
|-------|----------|
| ${link("da-b2-full-audit.md", "Pilns audits")} | GPT-5.6 Luna pilns B2 audits |
| ${link("da-b2-owner-review-README.md", "OWNER README")} | Workflow un kopsavilkums |
| ${link("da-b2-owner-review-GITHUB.md", "Šis indekss")} | Visas GitHub saites |

## Review ↔ Decisions

| # | Review | Decisions |
|---|--------|-----------|
${rows}

## Visi review faili

${reviewFiles.map((f) => `- ${link(f)}`).join("\n")}

## Visi decisions faili

${decisionFiles.map((f) => `- ${link(f)}`).join("\n")}

---

**Verdict:** DA–DE B2: ${summary.verdict} · **Findings:** ${summary.total} · **Production changes:** 0 · **DE changes:** 0
`;

fs.writeFileSync(OUT, md, "utf8");
console.log(`Wrote ${OUT} (${reviewFiles.length} review links)`);
