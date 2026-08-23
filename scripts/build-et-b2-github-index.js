#!/usr/bin/env node
"use strict";
/**
 * Generate reports/et-b2-owner-review-GITHUB.md — clickable GitHub blob links (MASTER §7.6 / §7.10.1).
 */
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");

const REPO = "sandrisbrikmanis-rgb/de-lv-app";
const BRANCH = process.env.WORK_BRANCH || process.env.GITHUB_BRANCH || execSync("git branch --show-current", { cwd: ROOT, encoding: "utf8" }).trim();
const PR_NUMBER = process.env.AUDIT_PR || "614";
const MAIN_BASE_SHA = process.env.MAIN_BASE_SHA || execSync("git rev-parse origin/main", { cwd: ROOT, encoding: "utf8" }).trim();
const GROUP_SIZE = 50;
const TOTAL_CARDS = 2118;
const AUDIT_JSON = path.join(ROOT, "reports/temp/et-b2-full-audit.json");
const OUT = path.join(ROOT, "reports/et-b2-owner-review-GITHUB.md");

function ghBlob(relPath) {
  return `https://github.com/${REPO}/blob/${BRANCH}/${relPath}`;
}

function link(file, label) {
  return `[${label || file}](${ghBlob(`reports/${file}`)})`;
}

function countBySev(findings) {
  const bySev = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0 };
  findings.forEach((f) => {
    const s = String(f.severity || "MEDIUM").toUpperCase();
    if (bySev[s] !== undefined) bySev[s] += 1;
  });
  return bySev;
}

function loadMeta() {
  if (!fs.existsSync(AUDIT_JSON)) {
    console.error(`Missing ${AUDIT_JSON}`);
    process.exit(1);
  }
  const data = JSON.parse(fs.readFileSync(AUDIT_JSON, "utf8"));
  const findings =
    data.ownerBacklogFinal?.length > 0
      ? data.ownerBacklogFinal
      : data.validatedFindings?.length > 0
        ? data.validatedFindings
        : (data.findings || []).filter((f) => f.validatedReal);
  return { findings, discovery: data.discoveryStability, coverage: data.discoveryStability?.ownerBacklogFinalCount ?? findings.length };
}

function groupRows(total) {
  const rows = [];
  const groupCount = Math.ceil(total / GROUP_SIZE);
  for (let i = 1; i <= groupCount; i++) {
    const id = String(i).padStart(2, "0");
    const start = (i - 1) * GROUP_SIZE + 1;
    const end = Math.min(i * GROUP_SIZE, total);
    rows.push(
      `| ${start}–${end} | ${link(`et-b2-owner-view-group${id}.md`, "VIEW")} | ${link(`et-b2-owner-decisions-group${id}.md`, "DECISIONS")} | **PENDING** |`,
    );
  }
  return rows.join("\n");
}

function verifyBlobOnBranch(relPath) {
  try {
    execSync(
      `gh api "repos/${REPO}/contents/${relPath}?ref=${BRANCH}" --jq .name`,
      { cwd: ROOT, encoding: "utf8", stdio: ["pipe", "pipe", "pipe"] },
    );
    return true;
  } catch {
    return false;
  }
}

function verifyGithubArtifacts(findings) {
  const required = [
    "reports/et-b2-owner-review-GITHUB.md",
    "reports/et-b2-owner-review-README.md",
    "reports/et-b2-owner-view.md",
    "reports/et-b2-owner-decisions.md",
    "reports/et-b2-full-audit.json",
  ];
  const groupCount = Math.ceil(findings.length / GROUP_SIZE);
  for (let i = 1; i <= groupCount; i++) {
    const id = String(i).padStart(2, "0");
    required.push(`reports/et-b2-owner-view-group${id}.md`, `reports/et-b2-owner-decisions-group${id}.md`);
  }
  const missing = required.filter((p) => !verifyBlobOnBranch(p));
  if (missing.length > 0) {
    console.error("BLOCKED: GitHub artifacts missing on branch (push before verify):");
    missing.forEach((m) => console.error(`  - ${m}`));
    process.exit(8);
  }
  console.log(`GitHub link verify: ${required.length} artifacts OK on ${BRANCH}`);
}

function main() {
  const { findings, discovery } = loadMeta();
  const bySev = countBySev(findings);
  const n = findings.length;

  const md = `# ET–DE B2 — GitHub atvēršanas indekss

**Standard:** \`PROJECT_LANGUAGE_MASTER_STANDARD.md\` v1.8
**Branch:** \`${BRANCH}\`
**MAIN_BASE_SHA:** \`${MAIN_BASE_SHA}\`
**Audit PR:** [#${PR_NUMBER}](https://github.com/${REPO}/pull/${PR_NUMBER})
**Findings:** **${n}** · **STAGE RESULT:** NEEDS OWNER REVIEW

## Sākt šeit

| Fails | Apraksts |
|-------|----------|
| ${link("et-b2-owner-review-README.md", "OWNER README")} | Workflow un kopsavilkums |
| ${link("et-b2-owner-review-GITHUB.md", "Šis indekss")} | Visas GitHub saites |
| ${link("et-b2-full-audit.json", "Audit JSON")} | ${TOTAL_CARDS}/${TOTAL_CARDS} · OWNER backlog **${n}** |
| ${link("et-b2-full-audit.md", "Pilns audits (MD)")} | Liels fails — JSON ieteicams |

> **${n} findingi** — strādā pa **${Math.ceil(n / GROUP_SIZE)} grupām** (pa ${GROUP_SIZE}). Pilns VIEW/DECISIONS saturs group failos.

## VIEW ↔ DECISIONS (obligātie §7.10.1)

| Tips | Fails |
|------|-------|
| OWNER VIEW | ${link("et-b2-owner-view.md", "et-b2-owner-view.md")} |
| OWNER DECISIONS | ${link("et-b2-owner-decisions.md", "et-b2-owner-decisions.md")} |
| Audit JSON | ${link("et-b2-full-audit.json", "et-b2-full-audit.json")} |
| MASTER standarts | [PROJECT_LANGUAGE_MASTER_STANDARD.md](${ghBlob("docs_and_rules/PROJECT_LANGUAGE_MASTER_STANDARD.md")}) |

## Grupas (pa 50 findingiem)

| Findings | VIEW | DECISIONS | Statuss |
|----------|------|-----------|---------|
${groupRows(n)}

## Severity

| Severity | Skaits |
|----------|--------|
| CRITICAL | **${bySev.CRITICAL}** |
| HIGH | **${bySev.HIGH}** |
| MEDIUM | **${bySev.MEDIUM}** |
| LOW | **${bySev.LOW}** |

## §11.9 OWNER backlog validity (MASTER v1.8)

| Metrika | Vērtība |
|---------|---------|
| RAW_CANDIDATES | **${discovery?.metrics?.RAW_CANDIDATES ?? n}** |
| SEMANTIC_DEDUPED | **${discovery?.metrics?.SEMANTIC_DEDUPED ?? "—"}** |
| PREVIOUS_RAW_MATCHES | **${discovery?.metrics?.PREVIOUS_RAW_MATCHES ?? "—"}** |
| PREVIOUSLY_MISSED | **${discovery?.metrics?.PREVIOUSLY_MISSED ?? "—"}** |
| GENUINELY_NEW | **${discovery?.metrics?.GENUINELY_NEW ?? n}** |
| OWNER_BACKLOG_FINAL | **${discovery?.metrics?.OWNER_BACKLOG_FINAL ?? n}** |
| PRE_BACKLOG_HISTORY_GATE | **${discovery?.gates?.PRE_BACKLOG_HISTORY_GATE ?? "—"}** |
| AUDIT_DISCOVERY_NON_REPRODUCIBILITY | **${discovery?.AUDIT_DISCOVERY_NON_REPRODUCIBILITY ?? "—"}** |

## OWNER workflow

1. Atver ${link("et-b2-owner-view-group01.md", "VIEW 1–50")} + ${link("et-b2-owner-decisions-group01.md", "DECISIONS 1–50")} (tad pārējās grupas).
2. Katram finding — aizpildi OWNER STATUS un OWNER_DECISION (precīzs ET teksts LABOT gadījumā).
3. Atgriez aizpildītus group decisions failus COPY-ONLY remontam.

**Production changes = 0 · DE changes = 0**
`;

  fs.writeFileSync(OUT, md, "utf8");
  console.log(`Wrote ${OUT} (branch: ${BRANCH})`);
  if (process.argv.includes("--verify-remote")) {
    verifyGithubArtifacts(findings);
  }
}

main();
