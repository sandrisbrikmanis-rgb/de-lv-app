#!/usr/bin/env node
"use strict";
/**
 * Prerequisite gate for DA–DE Kurss final closure RE-AUDIT (post PR #575 OWNER repair).
 * READ-ONLY — exits 0 with JSON on stdout; prerequisitePass=false when blocked.
 */
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");

const PR575_NUMBER = 575;
const PR575_BRANCH = "cursor/da-kurss-final-closure-owner-repair-fffe";
const SIGNED_FILE = path.join(ROOT, "reports/da-kurss-owner-decisions-final-closure-signed.md");
const APPLY_REPORT = path.join(ROOT, "reports/da-kurss-final-closure-owner-repair-apply.md");
const APPLY_LOG = path.join(ROOT, "reports/temp/da-kurss-final-closure-owner-apply-log.json");
const APPLY_MAP = path.join(ROOT, "reports/temp/da-kurss-final-closure-owner-apply-map.json");

const PRODUCTION_PATHS = [
  "data/da/courseLessons.js",
  "data/da/courseTrainingCards.js",
  "languages/da/ui.js",
  "www/data/da/courseLessons.js",
  "www/data/da/courseTrainingCards.js",
  "www/languages/da/ui.js",
];

function gitSha() {
  try {
    return execSync("git rev-parse HEAD", { cwd: ROOT, encoding: "utf8" }).trim();
  } catch {
    return "unknown";
  }
}

function checkPr575Merged() {
  try {
    const out = execSync(`gh pr view ${PR575_NUMBER} --json state,mergedAt,mergeCommit,headRefName`, {
      cwd: ROOT,
      encoding: "utf8",
    });
    const pr = JSON.parse(out);
    if (pr.state !== "MERGED" || !pr.mergeCommit?.oid) {
      return {
        merged: false,
        state: pr.state,
        mergedAt: pr.mergedAt,
        mergeCommit: pr.mergeCommit?.oid || null,
        headRefName: pr.headRefName,
        reason: `PR #${PR575_NUMBER} is ${pr.state} (not merged to main)`,
      };
    }
    try {
      execSync(`git merge-base --is-ancestor ${pr.mergeCommit.oid} origin/main`, { cwd: ROOT, stdio: "pipe" });
    } catch {
      return {
        merged: false,
        state: pr.state,
        mergedAt: pr.mergedAt,
        mergeCommit: pr.mergeCommit.oid,
        reason: `PR #${PR575_NUMBER} merge commit ${pr.mergeCommit.oid} not on origin/main`,
      };
    }
    return {
      merged: true,
      state: pr.state,
      mergedAt: pr.mergedAt,
      mergeCommit: pr.mergeCommit.oid,
      headRefName: pr.headRefName,
      reason: `PR #${PR575_NUMBER} merged at ${pr.mergedAt}`,
    };
  } catch (e) {
    return { merged: false, reason: `PR #${PR575_NUMBER} check failed: ${e.message}` };
  }
}

function checkOwnerArtifacts() {
  const files = {
    signedFile: { path: SIGNED_FILE, exists: fs.existsSync(SIGNED_FILE) },
    applyReport: { path: APPLY_REPORT, exists: fs.existsSync(APPLY_REPORT) },
    applyLog: { path: APPLY_LOG, exists: fs.existsSync(APPLY_LOG) },
    applyMap: { path: APPLY_MAP, exists: fs.existsSync(APPLY_MAP) },
  };
  const missing = Object.entries(files)
    .filter(([, v]) => !v.exists)
    .map(([k]) => k);
  return { files, missing, allPresent: missing.length === 0 };
}

function checkUncommittedProduction() {
  const dirty = [];
  for (const rel of PRODUCTION_PATHS) {
    try {
      execSync(`git diff --quiet HEAD -- "${rel}"`, { cwd: ROOT, stdio: "pipe" });
    } catch {
      dirty.push(rel);
    }
  }
  return { clean: dirty.length === 0, dirtyPaths: dirty };
}

function loadApplyMetrics() {
  if (!fs.existsSync(APPLY_LOG)) {
    return {
      available: false,
      signedLabot: null,
      uniqueApplyPaths: null,
      productionApplied: null,
      deProtectedSkip: null,
      dryRun: null,
    };
  }
  const log = JSON.parse(fs.readFileSync(APPLY_LOG, "utf8"));
  let mapCount = null;
  if (fs.existsSync(APPLY_MAP)) {
    const map = JSON.parse(fs.readFileSync(APPLY_MAP, "utf8"));
    mapCount = map.applyCount ?? (map.apply || []).length;
  }
  const applied = (log.applied || []).length;
  const deProtected = (log.deProtected || []).length;
  const currentMismatch = (log.currentValueMismatch || []).length;
  return {
    available: true,
    dryRun: !!log.dryRun,
    requested: log.requested ?? null,
    productionApplied: applied,
    currentMismatchSkip: currentMismatch,
    deProtectedSkip: deProtected,
    notFound: (log.notFound || []).length,
    uniqueApplyPaths: mapCount ?? log.requested,
    signedLabot: null,
  };
}

function main() {
  const pr575 = checkPr575Merged();
  const artifacts = checkOwnerArtifacts();
  const production = checkUncommittedProduction();
  const applyMetrics = loadApplyMetrics();

  const blockers = [];
  if (!pr575.merged) blockers.push("PR575_NOT_MERGED");
  if (!artifacts.allPresent) blockers.push("OWNER_ARTIFACTS_MISSING");
  if (!production.clean) blockers.push("UNCOMMITTED_PRODUCTION");

  const expected = {
    signedLabot: 118,
    uniqueApplyPaths: 88,
    productionApplied: 85,
    deProtectedSkip: 3,
    deChanges: 0,
    lvMasterChanges: 0,
  };

  const prerequisitePass = blockers.length === 0;

  const result = {
    generatedAt: new Date().toISOString(),
    gitSha: gitSha(),
    prerequisitePass,
    finalStatus: prerequisitePass ? "PREREQUISITE_PASS" : "PREREQUISITE_FAIL",
    blockers,
    pr575,
    pr575Branch: PR575_BRANCH,
    artifacts,
    production,
    applyMetrics,
    expectedOwnerState: expected,
    auditAgainst: "origin/main HEAD production",
  };

  console.log(JSON.stringify(result, null, 2));
  process.exit(prerequisitePass ? 0 : 2);
}

main();
