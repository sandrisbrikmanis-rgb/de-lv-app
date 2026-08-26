#!/usr/bin/env node
"use strict";
/**
 * Build ES-DE A1+A2 final micro-regression OWNER decisions (READ-ONLY).
 * Usage: node scripts/build-es-de-a1-a2-final-micro-regression-owner-decisions.js
 */
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT, isSyncedWithWww } = require("./lib/audit-common");
const { loadWords } = require("./lib/es-a1-a2-final-regression-retention");
const {
  buildOwnerDecisions,
  validateOwnerDecisions,
  buildViewMd,
  buildSummaryMd,
} = require("./lib/es-a1-a2-final-micro-regression-owner-map");

const REGRESSION_JSON = path.join(ROOT, "reports/es-de-a1-a2-final-micro-regression.json");
const OUT_JSON = path.join(ROOT, "reports/es-de-a1-a2-final-micro-regression-owner-decisions.json");
const OUT_MD = path.join(ROOT, "reports/es-de-a1-a2-final-micro-regression-owner-decisions.md");
const OUT_SUMMARY = path.join(
  ROOT,
  "reports/es-de-a1-a2-final-micro-regression-owner-decisions-summary.md",
);
const EXPECTED_HEAD_PREFIX = "4d849bf1";

function git(cmd) {
  return execSync(cmd, { cwd: ROOT, encoding: "utf8" }).trim();
}

function main() {
  const head = git("git rev-parse HEAD");
  if (!head.startsWith(EXPECTED_HEAD_PREFIX)) {
    throw new Error(`HEAD ${head} does not start with ${EXPECTED_HEAD_PREFIX}`);
  }

  const regression = JSON.parse(fs.readFileSync(REGRESSION_JSON, "utf8"));
  const wordsByLevel = {
    a1: loadWords("data/es/a1.js", "A1_WORDS"),
    a2: loadWords("data/es/a2.js", "A2_WORDS"),
  };

  const payload = buildOwnerDecisions({ regression, wordsByLevel, head });

  let syntaxPass = true;
  try {
    execSync("node --check data/es/a1.js", { cwd: ROOT, stdio: "pipe" });
    execSync("node --check data/es/a2.js", { cwd: ROOT, stdio: "pipe" });
    execSync("node --check www/data/es/a1.js", { cwd: ROOT, stdio: "pipe" });
    execSync("node --check www/data/es/a2.js", { cwd: ROOT, stdio: "pipe" });
  } catch {
    syntaxPass = false;
  }
  const mirrorPass = isSyncedWithWww("data/es/a1.js") && isSyncedWithWww("data/es/a2.js");

  const validation = validateOwnerDecisions({
    regression,
    payload,
    wordsByLevel,
    syntaxPass,
    mirrorPass,
  });

  if (validation.errors.length || validation.verdict === "BLOCKED") {
    payload.status = "BLOCKED";
  } else {
    payload.status = "OWNER ACCEPTED";
  }

  fs.writeFileSync(OUT_JSON, JSON.stringify(payload, null, 2) + "\n");
  fs.writeFileSync(OUT_MD, buildViewMd(payload));
  fs.writeFileSync(OUT_SUMMARY, buildSummaryMd(payload, validation));

  console.log(
    JSON.stringify(
      {
        status: payload.status,
        verdict: validation.verdict,
        reviewFindings: payload.reviewFindings,
        labotFindings: payload.labotFindings,
        nelabotFindings: payload.nelabotFindings,
        blockedFindings: payload.blockedFindings,
        uniqueLabotTargets: payload.uniqueOwnerTargets,
        consolidatedDuplicates: payload.consolidatedDuplicates,
        errors: validation.errors.length,
        outJson: OUT_JSON,
      },
      null,
      2,
    ),
  );

  if (validation.verdict === "FAIL") process.exit(1);
}

main();
