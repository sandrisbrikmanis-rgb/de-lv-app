#!/usr/bin/env node
"use strict";

const fs = require("fs");
const { execSync } = require("child_process");
const { EXPECTED, pathState } = require("./constants");
const { sha256Hex } = require("./hash");
const { assertPhase1MatrixIdentity } = require("../content-crowdin-bridge/g2-a1-audit-key-resolver");
const bridge = require("../content-crowdin-bridge");
const { gitProductionDiffAgainstBaseline, gitDeDiffAgainstBaseline } = require("../content-discovery/git-baseline");

function runStartGates(options = {}) {
  const errors = [];
  const ownerPackRoot = options.ownerPackRoot || pathState.ownerPackRoot;
  const matrixPath = options.matrixPath || pathState.matrixPath;

  const originMain = execSync("git rev-parse origin/main", { encoding: "utf8" }).trim();
  const porcelain = execSync("git status --porcelain", { encoding: "utf8" }).trim();
  if (originMain !== EXPECTED.originMain) errors.push(`ORIGIN_MAIN_MISMATCH:${originMain}`);
  if (porcelain) errors.push("WORKTREE_NOT_CLEAN");

  const proofPath = `${ownerPackRoot}/proof.json`;
  if (!fs.existsSync(proofPath)) errors.push("OWNER_PACK_PROOF_MISSING");
  else {
    const proof = JSON.parse(fs.readFileSync(proofPath, "utf8"));
    if (proof.classification !== EXPECTED.ownerPackClassification) {
      errors.push(`OWNER_PACK_CLASSIFICATION:${proof.classification}`);
    }
  }

  if (!fs.existsSync(matrixPath)) errors.push("MATRIX_MISSING");
  else {
    const matrix = JSON.parse(fs.readFileSync(matrixPath, "utf8"));
    const identity = assertPhase1MatrixIdentity(matrix);
    if (identity.actual !== EXPECTED.matrixIdentitySha) errors.push("MATRIX_IDENTITY_MISMATCH");
  }

  const lvJson = bridge.exportG2LevelToCrowdinJson("lv", "a1");
  const sourceSha = sha256Hex(typeof lvJson === "string" ? lvJson : JSON.stringify(lvJson));
  if (sourceSha !== EXPECTED.sourceSha) errors.push(`SOURCE_SHA_MISMATCH:${sourceSha}`);

  const prod = gitProductionDiffAgainstBaseline(EXPECTED.originMain);
  const de = gitDeDiffAgainstBaseline(EXPECTED.originMain);
  if (!prod.clean) errors.push(`PRODUCTION_DIFF:${(prod.changed || []).length}`);
  if (!de.clean) errors.push(`DE_DIFF:${(de.changed || []).length}`);

  const uploadPids = execSync("pgrep -af 'phase2-g2-a1.*upload\\.js' || true", { encoding: "utf8" })
    .trim()
    .split("\n")
    .filter(Boolean);
  if (uploadPids.length) errors.push("ACTIVE_UPLOADER");

  return {
    pass: errors.length === 0,
    errors,
    originMain,
    sourceSha,
    prod,
    de,
    ownerPackRoot,
    matrixPath,
  };
}

module.exports = { runStartGates };
