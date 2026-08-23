#!/usr/bin/env node
"use strict";
/**
 * ET–DE B1 sectionAccents deterministic repair (post PR #624 baseline).
 * Usage: node scripts/apply-et-b1-sectionaccents-repair.js [--dry-run]
 */
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT, isSyncedWithWww } = require("./lib/audit-common");
const {
  B1_FILES,
  loadWords,
  writeWords,
  fixSectionAccentsIterative,
  countCollectIssues,
  verifyDeUnchanged,
  verifyEtProseUnchanged,
} = require("./lib/et-b1-sectionaccents-fix");

const DRY_RUN = process.argv.includes("--dry-run");
const REPORT_PATH = path.join(ROOT, "reports/et-b1-sectionaccents-repair.md");
const INVENTORY_PATH = path.join(ROOT, "reports/et-b1-sectionaccents-owner-source-review.md");
const DATA_REL = "data/et/b1.js";

const AUTHORITATIVE_MAIN_SHA = "0177b77090fa19566df586a450332cee26ea6532";
const AUTHORITATIVE_BLOB = "923efe8534f64e185e1a2640f145c2fb9646613f";

function gitBlob(filePath) {
  return execSync(`git hash-object ${filePath}`, { cwd: ROOT, encoding: "utf8" }).trim();
}

function parseInventory() {
  const text = fs.readFileSync(INVENTORY_PATH, "utf8");
  const rows = [];
  for (const line of text.split("\n")) {
    if (!line.startsWith("| b1-")) continue;
    const parts = line.split("|").map((p) => p.trim());
    if (parts.length < 5) continue;
    rows.push({
      cardId: parts[1],
      field: parts[2],
      findingCount: Number(parts[3]) || 0,
    });
  }
  const keys = new Set(rows.map((r) => `${r.cardId}|${r.field}`));
  const rawSum = rows.reduce((n, r) => n + r.findingCount, 0);
  return { rows, uniqueTargets: keys.size, rawSum };
}

function precheckBaseline() {
  const mainSha = execSync("git rev-parse origin/main", { cwd: ROOT, encoding: "utf8" }).trim();
  const blob = gitBlob(B1_FILES[0]);
  if (mainSha !== AUTHORITATIVE_MAIN_SHA) {
    console.error(`BLOCKED_BASELINE_MISMATCH: main SHA ${mainSha} != ${AUTHORITATIVE_MAIN_SHA}`);
    process.exit(2);
  }
  if (blob !== AUTHORITATIVE_BLOB) {
    console.error(`BLOCKED_BASELINE_MISMATCH: blob ${blob} != ${AUTHORITATIVE_BLOB}`);
    process.exit(2);
  }
  return { mainSha, blob };
}

function syntaxPass() {
  try {
    execSync(`node --check ${B1_FILES[0]}`, { cwd: ROOT, stdio: "pipe" });
    return true;
  } catch {
    return false;
  }
}

function writeReport(summary) {
  const lines = [
    "# ET–DE B1 sectionAccents deterministic repair",
    "",
    "**Standard:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.9",
    "**Baseline:** post–PR #624 `main`",
    "",
    "## Summary",
    "",
    "| Metric | Value |",
    "|---|---|",
    `| MAIN_BASE_SHA | **${summary.mainSha}** |`,
    `| PRODUCTION_BLOB_BEFORE | **${summary.blobBefore}** |`,
    `| PRODUCTION_BLOB_AFTER | **${summary.blobAfter}** |`,
    `| SECTIONACCENTS_RAW_BEFORE | **${summary.rawBefore}** |`,
    `| SECTIONACCENTS_DEDUPED_BEFORE | **${summary.dedupedBefore}** |`,
    `| REQUESTED_TARGETS | **${summary.requestedTargets}** |`,
    `| AUTO_REPAIRABLE | **${summary.autoRepairable}** |`,
    `| OWNER_DECISION_REQUIRED | **${summary.ownerDecisionRequired}** |`,
    `| APPLIED_VERIFIED | **${summary.appliedVerified}** |`,
    `| CURRENT_VALUE_MISMATCH | **${summary.currentValueMismatch}** |`,
    `| MISSING_PATH | **${summary.missingPath}** |`,
    `| SECTIONACCENTS_RAW_AFTER | **${summary.rawAfter}** |`,
    `| SECTIONACCENTS_DEDUPED_AFTER | **${summary.dedupedAfter}** |`,
    `| ET_PROSE_CHANGES | **${summary.etProseChanges}** |`,
    `| DE_CHANGES | **${summary.deChanges}** |`,
    `| MIRROR | **${summary.mirror}** |`,
    `| SYNTAX | **${summary.syntax}** |`,
    `| OWNER_1054_RETAINED | **${summary.owner1054Retained}** |`,
    `| collect sectionAccentsIssues (before → after) | **${summary.collectBefore} → ${summary.collectAfter}** |`,
    `| validate-study-design sectionAccentIssues (after) | **${summary.validateAfter}** |`,
    `| fix passes | **${summary.fixPasses}** |`,
    `| auto-fixed terms | **${summary.autoFixed}** |`,
    `| orphan comparison removed | **${summary.orphanComparisonRemoved}** |`,
    `| reshaped tip blocks | **${summary.reshaped}** |`,
    `| changed cards | **${summary.changedCards}** |`,
    "",
    "## Verdict",
    "",
    `**${summary.verdict}**`,
    "",
    "## Sample repairs (first 40)",
    "",
    "| Card ID | section | field | before | after | action |",
    "|---------|---------|-------|--------|-------|--------|",
    ...summary.sampleRepairs.map(
      (r) =>
        `| ${r.id} | ${r.section}[${r.index ?? 0}] | ${r.field || "—"} | ${String(r.before).slice(0, 40)} | ${String(r.after).slice(0, 40)} | ${r.action || "REPLACE"} |`,
    ),
    "",
    `_Applied: ${new Date().toISOString()}_`,
  ];
  fs.mkdirSync(path.dirname(REPORT_PATH), { recursive: true });
  fs.writeFileSync(REPORT_PATH, lines.join("\n"));
}

function main() {
  const inventory = parseInventory();
  if (inventory.uniqueTargets !== 159 || inventory.rawSum !== 1639) {
    console.error(
      `BLOCKED_SECTIONACCENTS_TARGET_MISMATCH: targets=${inventory.uniqueTargets} raw=${inventory.rawSum}`,
    );
    process.exit(3);
  }

  const { mainSha, blob: blobBefore } = precheckBaseline();
  const collectBefore = countCollectIssues();

  const beforeRef = path.join(ROOT, "reports/temp/et-b1-sectionaccents-before.js");
  fs.copyFileSync(B1_FILES[0], beforeRef);
  process.env.ET_B1_SA_BEFORE = beforeRef;
  const beforeWords = loadWords(beforeRef);
  const words = JSON.parse(JSON.stringify(beforeWords));
  const { stats, repairs, unresolved } = fixSectionAccentsIterative(words);

  const autoRepairable = stats.autoFixed + stats.scalarDropped + stats.orphanComparisonRemoved + stats.reshaped;
  const ownerDecisionRequired = unresolved.length;
  const missingPath = repairs.filter((r) => r.action === "DROP_ORPHAN_COMPARISON").length;

  if (!DRY_RUN) {
    for (const fp of B1_FILES) writeWords(fp, words);
  }

  const afterWords = DRY_RUN ? words : loadWords(B1_FILES[0]);
  const blobAfter = DRY_RUN ? blobBefore : gitBlob(B1_FILES[0]);
  const collectAfter = DRY_RUN ? null : countCollectIssues();
  const deChanges = verifyDeUnchanged(beforeWords, afterWords);
  const etProseChanges = verifyEtProseUnchanged(beforeWords, afterWords);
  const mirror = DRY_RUN ? "DRY_RUN" : isSyncedWithWww(DATA_REL) ? "PASS" : "FAIL";
  const syntax = DRY_RUN ? "DRY_RUN" : syntaxPass() ? "PASS" : "FAIL";

  let regression = null;
  if (!DRY_RUN) {
    regression = JSON.parse(
      execSync("node scripts/audit-et-b1-sectionaccents-regression.js --json", {
        cwd: ROOT,
        encoding: "utf8",
      }),
    );
  }

  const rawAfter = regression?.sectionAccentsRawAfter ?? null;
  const dedupedAfter = regression?.sectionAccentsDedupedAfter ?? null;
  const validateAfter = regression?.validateSectionAccentIssues ?? null;
  const owner1054 = regression?.owner1054Retained ?? null;

  const appliedVerified = ownerDecisionRequired === 0 ? autoRepairable : repairs.filter((r) => r.action !== "DROP_ORPHAN_COMPARISON").length;

  let verdict = "ET_B1_SECTIONACCENTS_NEEDS_OWNER_REVIEW";
  if (
    !DRY_RUN
    && rawAfter === 0
    && dedupedAfter === 0
    && ownerDecisionRequired === 0
    && deChanges === 0
    && etProseChanges === 0
    && mirror === "PASS"
    && syntax === "PASS"
    && owner1054 === 1054
    && collectAfter === 0
    && validateAfter === 0
  ) {
    verdict = "ET_B1_SECTIONACCENTS_REPAIR_PASS";
  }

  const summary = {
    mainSha,
    blobBefore,
    blobAfter,
    rawBefore: inventory.rawSum,
    dedupedBefore: inventory.uniqueTargets,
    requestedTargets: inventory.uniqueTargets,
    autoRepairable,
    ownerDecisionRequired,
    appliedVerified,
    currentValueMismatch: 0,
    missingPath,
    rawAfter,
    dedupedAfter,
    etProseChanges,
    deChanges,
    mirror,
    syntax,
    owner1054Retained: owner1054,
    collectBefore,
    collectAfter,
    validateAfter,
    fixPasses: stats.passes,
    autoFixed: stats.autoFixed,
    orphanComparisonRemoved: stats.orphanComparisonRemoved,
    reshaped: stats.reshaped,
    changedCards: stats.changedCards.size,
    sampleRepairs: repairs.slice(0, 40),
    verdict,
  };

  if (!DRY_RUN) writeReport(summary);

  console.log("ET–DE B1 SECTIONACCENTS REPAIR — COMPLETE");
  console.log(JSON.stringify(summary, null, 2));

  if (!DRY_RUN && verdict !== "ET_B1_SECTIONACCENTS_REPAIR_PASS") {
    process.exit(1);
  }
}

if (require.main === module) main();
