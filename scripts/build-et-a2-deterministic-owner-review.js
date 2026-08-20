#!/usr/bin/env node
"use strict";
/** Build ET–DE A2 deterministic OWNER artifacts (MASTER v1.9). */
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");

const LOG = path.join(ROOT, "reports/temp/et-a2-deterministic-repair-log.json");
const ACCEPTED = path.join(ROOT, "reports/et-a2-deterministic-owner-decisions-accepted.md");
const REPO = "sandrisbrikmanis-rgb/de-lv-app";

function git(cmd) {
  try {
    return execSync(cmd, { cwd: ROOT, encoding: "utf8" }).trim();
  } catch {
    return "";
  }
}

function gh(rel) {
  const branch = git("git branch --show-current") || "main";
  return `https://github.com/${REPO}/blob/${branch}/${rel}`;
}

function main() {
  if (!fs.existsSync(LOG)) {
    console.error("Missing repair log");
    process.exit(1);
  }
  const log = JSON.parse(fs.readFileSync(LOG, "utf8"));
  const applied = log.lvResults?.applied || [];
  const branch = git("git branch --show-current");

  const viewLines = [
    "# ET–DE A2 — deterministic OWNER VIEW",
    "",
    "**Standard:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.9",
    `**Branch:** \`${branch}\``,
    `**Baseline:** \`${log.mainSha}\``,
    "",
    "Deterministic repairs from verified pre-PR612 snapshot (`ea2db53c^`) + structural/accent recovery.",
    "",
  ];

  const decLines = [
    "# ET–DE A2 — deterministic OWNER DECISIONS",
    "",
    "**Standard:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.9",
    "",
    "| Audit ID | Card ID | Field | CURRENT | NEW | Category | OWNER STATUS |",
    "|----------|---------|-------|---------|-----|----------|--------------|",
  ];

  let n = 1;
  for (const row of applied) {
    const auditId = `ET-A2-D${String(n).padStart(4, "0")}`;
    viewLines.push(
      `## ${auditId}`,
      "",
      `| Lauks | Vērtība |`,
      `|-------|---------|`,
      `| **Card ID** | \`${row.cardId}\` |`,
      `| **Field/path** | \`${row.field}\` |`,
      `| **Category** | REPAIR_ARTIFACT |`,
      `| **Source** | \`${row.source}\` (verified clean snapshot) |`,
      "",
      `**CURRENT:** ${row.current}`,
      `**NEW (accepted):** ${row.ownerNew}`,
      "",
      "**OWNER recommendation:** **LABOT** — restore verified pre-repair ET value.",
      "",
      "---",
      "",
    );
    decLines.push(
      `| ${auditId} | \`${row.cardId}\` | \`${row.field}\` | ${String(row.current).replace(/\|/g, "\\|").slice(0, 60)} | ${String(row.ownerNew).replace(/\|/g, "\\|").slice(0, 60)} | REPAIR_ARTIFACT | **LABOT** |`,
    );
    n++;
  }

  if (log.jobResult?.status === "APPLIED") {
    const auditId = `ET-A2-D${String(n).padStart(4, "0")}`;
    viewLines.push(
      `## ${auditId}`,
      "",
      "**Card ID:** `a2-job` · **Field:** `study`",
      "",
      "ET had study card; LV MASTER has none → remove study for structural parity.",
      "",
      "**OWNER recommendation:** **LABOT**",
      "",
      "---",
      "",
    );
    decLines.push(`| ${auditId} | \`a2-job\` | \`study\` | (ET-only study) | (removed) | STRUCTURAL | **LABOT** |`);
  }

  const ghLines = [
    "# ET–DE A2 — deterministic OWNER review (GitHub index)",
    "",
    `**Branch:** [\`${branch}\`](${gh(`tree/${branch}`)})`,
    "",
    "## Artifacts",
    "",
    `- [OWNER VIEW](${gh("reports/et-a2-deterministic-owner-view.md")})`,
    `- [OWNER DECISIONS](${gh("reports/et-a2-deterministic-owner-decisions.md")})`,
    `- [OWNER DECISIONS ACCEPTED](${gh("reports/et-a2-deterministic-owner-decisions-accepted.md")})`,
    `- [Deterministic repair report](${gh("reports/et-a2-final-deterministic-repair.md")})`,
    `- [Final closure check](${gh("reports/et-a2-final-closure-check.md")})`,
    "",
    `**Applied repairs:** ${applied.length} LV artifacts + ${log.jobResult?.status === "APPLIED" ? 1 : 0} structural`,
    "",
  ];

  fs.writeFileSync(path.join(ROOT, "reports/et-a2-deterministic-owner-view.md"), viewLines.join("\n"));
  fs.writeFileSync(path.join(ROOT, "reports/et-a2-deterministic-owner-decisions.md"), decLines.join("\n") + "\n");
  fs.writeFileSync(path.join(ROOT, "reports/et-a2-deterministic-owner-review-GITHUB.md"), ghLines.join("\n"));

  if (!fs.existsSync(ACCEPTED)) {
    console.warn("Accepted file missing — apply script should have created it");
  }
  console.log("Wrote deterministic OWNER artifacts:", applied.length, "entries");
}

main();
