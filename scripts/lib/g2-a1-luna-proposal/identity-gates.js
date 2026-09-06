#!/usr/bin/env node
"use strict";

const fs = require("fs");
const { execSync } = require("child_process");
const { EXPECTED, pathState } = require("./constants");
const { sha256Hex } = require("./hash");
const { assertPhase1MatrixIdentity } = require("../content-crowdin-bridge/g2-a1-audit-key-resolver");
const bridge = require("../content-crowdin-bridge");
const { gitProductionDiffAgainstBaseline, gitDeDiffAgainstBaseline } = require("../content-discovery/git-baseline");

function resolveGitShas(options = {}) {
  if (options._allowMockInfrastructureBypass && options.gitContext) {
    return {
      headSha: options.gitContext.headSha,
      originMainSha: options.gitContext.originMainSha,
    };
  }
  return {
    headSha: execSync("git rev-parse HEAD", { encoding: "utf8" }).trim(),
    originMainSha: execSync("git rev-parse origin/main", { encoding: "utf8" }).trim(),
  };
}

function runInfrastructureGates(options = {}) {
  if (
    options._allowMockInfrastructureBypass &&
    options.skipInfrastructureGates &&
    options.infrastructureContext
  ) {
    const ctx = options.infrastructureContext;
    const git = resolveGitShas(options);
    return {
      pass: true,
      errors: [],
      originMainSha: git.originMainSha ?? ctx.originMainSha,
      headSha: git.headSha ?? ctx.headSha,
      productionBaselineSha: ctx.productionBaselineSha ?? EXPECTED.productionBaselineSha,
      matrixIdentitySha: ctx.matrixIdentitySha ?? EXPECTED.matrixIdentitySha,
      sourceSha: ctx.sourceSha ?? EXPECTED.sourceSha,
      prod: ctx.prod ?? { clean: true, changed: [] },
      de: ctx.de ?? { clean: true, changed: [] },
      ownerPackRoot: ctx.ownerPackRoot ?? pathState.ownerPackRoot,
      matrixPath: ctx.matrixPath ?? pathState.matrixPath,
      mockBypass: true,
    };
  }

  const errors = [];
  const ownerPackRoot = pathState.ownerPackRoot;
  const matrixPath = pathState.matrixPath;
  const productionBaselineSha = EXPECTED.productionBaselineSha;

  const { originMainSha, headSha } = resolveGitShas(options);

  const porcelain = execSync("git status --porcelain", { encoding: "utf8" }).trim();
  if (porcelain) errors.push("WORKTREE_NOT_CLEAN");

  const proofPath = `${ownerPackRoot}/proof.json`;
  if (!fs.existsSync(proofPath)) errors.push("OWNER_PACK_PROOF_MISSING");
  else {
    const proof = JSON.parse(fs.readFileSync(proofPath, "utf8"));
    if (proof.classification !== EXPECTED.ownerPackClassification) {
      errors.push(`OWNER_PACK_CLASSIFICATION:${proof.classification}`);
    }
  }

  let matrixIdentitySha = null;
  if (!fs.existsSync(matrixPath)) errors.push("MATRIX_MISSING");
  else {
    const matrix = JSON.parse(fs.readFileSync(matrixPath, "utf8"));
    const identity = assertPhase1MatrixIdentity(matrix);
    matrixIdentitySha = identity.actual;
    if (identity.actual !== EXPECTED.matrixIdentitySha) errors.push("MATRIX_IDENTITY_MISMATCH");
  }

  const lvJson = bridge.exportG2LevelToCrowdinJson("lv", "a1");
  const sourceSha = sha256Hex(typeof lvJson === "string" ? lvJson : JSON.stringify(lvJson));
  if (sourceSha !== EXPECTED.sourceSha) errors.push(`SOURCE_SHA_MISMATCH:${sourceSha}`);

  const prod = gitProductionDiffAgainstBaseline(productionBaselineSha);
  const de = gitDeDiffAgainstBaseline(productionBaselineSha);
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
    originMainSha,
    headSha,
    productionBaselineSha,
    matrixIdentitySha,
    sourceSha,
    prod,
    de,
    ownerPackRoot,
    matrixPath,
    mockBypass: false,
  };
}

module.exports = { runInfrastructureGates, resolveGitShas };
