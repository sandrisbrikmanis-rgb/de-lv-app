#!/usr/bin/env node
"use strict";

const fs = require("fs");
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
  const crypto = require("crypto");
  const sourceHash =
    options.sourceHash ||
    crypto
      .createHash("sha256")
      .update(JSON.stringify(validatedFindings.map((f) => f.auditId).sort()))
      .digest("hex");
  const review = writePhase1OwnerPrepReviewFiles(validatedFindings, {
    outDir: reportsDir,
    root: options.root || ROOT,
    generatedAt: options.generatedAt,
    sourceHash,
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
    sourceHash,
  };
}

function evaluateOwnerPrepCoverage(options = {}) {
  const { ROOT } = require("../audit-common");
  const {
    PHASE1_OWNER_VIEW_FILE,
    PHASE1_OWNER_DECISIONS_FILE,
  } = require("../../build-phase1-owner-review");
  const { PHASE1_OWNER_GITHUB_FILE } = require("../../build-phase1-github-index");
  const crypto = require("crypto");

  const matrix = options.matrix || {};
  const validatedFindings = (matrix.findings || []).filter((f) =>
    ["VALIDATED_REAL_FINDING", "OWNER_DECISION_REQUIRED"].includes(f.classificationStatus),
  );
  const expected = validatedFindings.length;
  const outDir = options.ownerPrepOutDir || path.join(ROOT, "reports", "phase1-owner-prep");
  const requiredFiles = [
    path.join(outDir, PHASE1_OWNER_VIEW_FILE),
    path.join(outDir, PHASE1_OWNER_DECISIONS_FILE),
    path.join(outDir, PHASE1_OWNER_GITHUB_FILE),
  ];

  const OWNER_PREP_FILES_EXIST = requiredFiles.every((f) => fs.existsSync(f));
  if (!OWNER_PREP_FILES_EXIST || expected === 0) {
    return {
      pass: expected === 0,
      OWNER_PREP_FILES_EXIST,
      EXPECTED_VALIDATED_FINDINGS: expected,
      OWNER_PREP_ROWS: 0,
      MISSING_AUDIT_IDS: expected,
      EXTRA_AUDIT_IDS: 0,
      DUPLICATE_AUDIT_IDS: 0,
      ALL_INITIAL_STATUSES_PENDING: false,
      SOURCE_HASH_MATCH: false,
    };
  }

  const viewText = fs.readFileSync(requiredFiles[0], "utf8");
  const decisionsText = fs.readFileSync(requiredFiles[1], "utf8");
  const auditIds = validatedFindings.map((f) => f.auditId).filter(Boolean);
  const missing = auditIds.filter((id) => !decisionsText.includes(id));
  const duplicateAuditIds = auditIds.length - new Set(auditIds).size;
  const rowCount = (decisionsText.match(/^\| PH1-/gm) || []).length;
  const allPending =
    !/OWNER STATUS:\s*(LABOT|NELABOT|FALSE_POSITIVE)/i.test(viewText) &&
    !/\|\s*(LABOT|NELABOT|FALSE_POSITIVE)\s*\|/i.test(decisionsText);
  const sourceHash = crypto
    .createHash("sha256")
    .update(JSON.stringify(validatedFindings.map((f) => f.auditId).sort()))
    .digest("hex");
  const sourceHashMatch = viewText.includes(sourceHash) || matrix.ownerPrep?.sourceHash === sourceHash;

  return {
    pass:
      OWNER_PREP_FILES_EXIST &&
      rowCount === expected &&
      missing.length === 0 &&
      duplicateAuditIds === 0 &&
      allPending,
    OWNER_PREP_FILES_EXIST,
    EXPECTED_VALIDATED_FINDINGS: expected,
    OWNER_PREP_ROWS: rowCount,
    MISSING_AUDIT_IDS: missing.length,
    EXTRA_AUDIT_IDS: Math.max(0, rowCount - expected),
    DUPLICATE_AUDIT_IDS: duplicateAuditIds,
    ALL_INITIAL_STATUSES_PENDING: allPending,
    SOURCE_HASH_MATCH: sourceHashMatch,
    sourceHash,
  };
}

module.exports = {
  runPreBacklogHistoryGate,
  generateOwnerPrep,
  evaluateOwnerPrepCoverage,
  OWNER_PREP_FILES,
  ownerPrepDir,
};
