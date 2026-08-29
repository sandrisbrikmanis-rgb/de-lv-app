#!/usr/bin/env node
"use strict";

const path = require("path");
const { ROOT } = require("../audit-common");
const {
  PHASE1_OWNER_VIEW_FILE,
  PHASE1_OWNER_DECISIONS_FILE,
  ownerPrepDir,
  writePhase1OwnerPrepReviewFiles,
} = require("../../build-phase1-owner-review");
const {
  PHASE1_OWNER_GITHUB_FILE,
  writePhase1GithubIndex,
} = require("../../build-phase1-github-index");

const OWNER_PREP_FILES = [
  PHASE1_OWNER_VIEW_FILE,
  PHASE1_OWNER_DECISIONS_FILE,
  PHASE1_OWNER_GITHUB_FILE,
];

function runPreBacklogHistoryGate(validatedFindings, registry = {}) {
  if (!validatedFindings.length) {
    return { status: "SKIP", reason: "VALIDATED_FINDINGS_ZERO" };
  }
  const conflicts = validatedFindings.filter((f) => f.registryConflict);
  if (conflicts.length) {
    return { status: "FAIL", reason: "REGISTRY_CONFLICT", conflicts };
  }
  const unresolved = validatedFindings.filter((f) => f.semanticMatch === "NEEDS_REVIEW");
  if (unresolved.length) {
    return { status: "FAIL", reason: "SEMANTIC_NEEDS_REVIEW", unresolved };
  }
  return { status: "PASS", registrySize: Object.keys(registry).length };
}

function generateOwnerPrep(validatedFindings, reportsDir = ownerPrepDir(ROOT), options = {}) {
  const review = writePhase1OwnerPrepReviewFiles(validatedFindings, {
    outDir: reportsDir,
    root: options.root || ROOT,
    generatedAt: options.generatedAt,
  });
  const github = writePhase1GithubIndex({
    outDir: reportsDir,
    root: options.root || ROOT,
    branch: options.branch,
    repoUrl: options.repoUrl,
  });

  return {
    outDir: reportsDir,
    files: [...review.files, github.file],
    count: validatedFindings.length,
    ownerStatus: "PENDING",
  };
}

module.exports = {
  runPreBacklogHistoryGate,
  generateOwnerPrep,
  OWNER_PREP_FILES,
  ownerPrepDir,
};
