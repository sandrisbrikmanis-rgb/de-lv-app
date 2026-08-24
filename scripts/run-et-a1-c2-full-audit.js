#!/usr/bin/env node
"use strict";
/**
 * ET–DE A1–C2 FULL READ-ONLY audit (deterministic, no Luna).
 * Usage: node scripts/run-et-a1-c2-full-audit.js
 */
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const { MASTER_VERSION, DATASETS, auditDataset, buildGithubIndex, git } = require("./lib/et-a1-c2-full-audit-core");

function main() {
  execSync("git fetch origin", { cwd: ROOT, stdio: "pipe" });
  const originMainSha = git("git rev-parse origin/main");

  console.log(`\n=== ET–DE A1–C2 FULL AUDIT — MASTER v${MASTER_VERSION} ===\n`);
  console.log(`ORIGIN_MAIN_SHA: ${originMainSha}`);

  const deDiff = git("git diff --name-only HEAD -- data/de www/data/de");
  if (deDiff) {
    console.error("STOP: DE_CHANGES detected");
    process.exit(2);
  }

  let validateStudy = null;
  try {
    execSync("node scripts/validate-study-design.js --lang=et", { cwd: ROOT, stdio: "pipe" });
    const vPath = path.join(ROOT, "reports/temp/et-validate-study.json");
    if (fs.existsSync(vPath)) validateStudy = JSON.parse(fs.readFileSync(vPath, "utf8"));
  } catch {
    /* validate output may not exist */
  }

  execSync("node scripts/test-main-translation-v112-regression.js", { cwd: ROOT, stdio: "inherit" });

  const results = [];
  for (const key of Object.keys(DATASETS)) {
    console.log(`\n--- Auditing ${key.toUpperCase()} ---\n`);
    const r = auditDataset(key);
    results.push(r);
    console.log(`${r.verdict} · cards=${r.cardCount} · OWNER backlog=${r.ownerBacklog}`);
  }

  buildGithubIndex(results);

  const summary = results.map((r) => ({
    dataset: r.dataset,
    cards: r.cardCount,
    study: r.studyCount,
    multiTranslationRaw: r.multiTranslationCandidatesRaw,
    multiTranslationOwner: r.multiTranslationOwnerUnresolved,
    otherOwnerBacklog: r.ownerBacklog - r.multiTranslationOwnerUnresolved,
    foreignResidual: r.foreignResidual,
    ownerBacklog: r.ownerBacklog,
    multiTranslationScan: r.multiTranslationScanStatus,
    verdict: r.verdict,
  }));

  fs.writeFileSync(
    path.join(ROOT, "reports/temp/et-a1-c2-full-audit-summary.json"),
    JSON.stringify({ originMainSha, masterVersion: MASTER_VERSION, results: summary }, null, 2),
  );

  console.log("\n=== SUMMARY ===\n");
  console.table(summary);
  console.log("\nIndex: reports/et-a1-c2-full-audit-GITHUB.md\n");

  const anyFail = results.some((r) => r.ownerBacklog > 0);
  if (anyFail) process.exit(1);
}

main();
