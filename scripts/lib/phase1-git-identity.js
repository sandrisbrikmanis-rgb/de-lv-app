#!/usr/bin/env node
"use strict";

const {
  git,
  fetchOriginMain,
  gitProductionDiffAgainstBaseline,
  gitDeDiffAgainstBaseline,
} = require("./content-discovery/git-baseline");

const SHA40_HEX = /^[0-9a-f]{40}$/;

function isValidSha(sha) {
  return typeof sha === "string" && SHA40_HEX.test(sha);
}

function resolvePhase1GitIdentity(deps = {}) {
  const gitFn = deps.git || git;
  const fetchFn = deps.fetchOriginMain || fetchOriginMain;
  const productionDiffFn = deps.gitProductionDiffAgainstBaseline || gitProductionDiffAgainstBaseline;
  const deDiffFn = deps.gitDeDiffAgainstBaseline || gitDeDiffAgainstBaseline;

  const blockers = [];

  let fetchStatus = deps.fetchStatus;
  if (fetchStatus === undefined) {
    if (deps.skipFetch) {
      fetchStatus = "PASS";
    } else {
      const fetch = fetchFn();
      fetchStatus = fetch.ok ? "PASS" : "FAIL";
      if (!fetch.ok) {
        blockers.push({
          code: "GIT_FETCH_FAILED",
          message: fetch.error || "git fetch origin main failed",
        });
      }
    }
  } else if (fetchStatus !== "PASS") {
    blockers.push({
      code: "GIT_FETCH_FAILED",
      message: deps.fetchError || "git fetch origin main failed",
    });
  }

  let originMainSha = deps.originMainSha ?? null;
  if (originMainSha === null && fetchStatus === "PASS") {
    const originResult = gitFn("git rev-parse origin/main");
    if (!originResult.ok || !originResult.stdout) {
      blockers.push({
        code: "ORIGIN_MAIN_SHA_UNRESOLVED",
        message: originResult.stderr || originResult.error || "Could not resolve origin/main SHA",
      });
    } else {
      originMainSha = originResult.stdout;
    }
  }

  let headSha = deps.headSha ?? null;
  if (headSha === null) {
    const headResult = gitFn("git rev-parse HEAD");
    if (!headResult.ok || !headResult.stdout) {
      blockers.push({
        code: "HEAD_SHA_UNRESOLVED",
        message: headResult.stderr || headResult.error || "Could not resolve HEAD SHA",
      });
    } else {
      headSha = headResult.stdout;
    }
  }

  if (originMainSha !== null && !isValidSha(originMainSha)) {
    blockers.push({
      code: "ORIGIN_MAIN_SHA_INVALID",
      message: `origin/main SHA is not a valid 40-character hex value: ${String(originMainSha).slice(0, 12)}`,
    });
  }

  if (headSha !== null && !isValidSha(headSha)) {
    blockers.push({
      code: "HEAD_SHA_INVALID",
      message: `HEAD SHA is not a valid 40-character hex value: ${String(headSha).slice(0, 12)}`,
    });
  }

  const headMatchesOriginMain =
    isValidSha(headSha) && isValidSha(originMainSha) && headSha === originMainSha;

  if (isValidSha(headSha) && isValidSha(originMainSha) && !headMatchesOriginMain) {
    blockers.push({
      code: "HEAD_NOT_AT_ORIGIN_MAIN",
      message: `HEAD ${headSha} does not match origin/main ${originMainSha}`,
    });
  }

  let workingTreeClean = deps.workingTreeClean;
  if (workingTreeClean === undefined) {
    const status = gitFn("git status --porcelain");
    const porcelain = status.ok ? status.stdout : null;
    workingTreeClean = Boolean(status.ok && !porcelain);
    if (!workingTreeClean) {
      blockers.push({
        code: "WORKING_TREE_DIRTY",
        message: "Working tree is not clean before real Luna authorization",
      });
    }
  } else if (!workingTreeClean) {
    blockers.push({
      code: "WORKING_TREE_DIRTY",
      message: "Working tree is not clean before real Luna authorization",
    });
  }

  let productionDiffClean = deps.productionDiffClean;
  let productionDiff = deps.productionDiff;
  if (productionDiffClean === undefined && isValidSha(originMainSha)) {
    productionDiff = productionDiffFn(originMainSha);
    productionDiffClean = Boolean(productionDiff.clean);
    if (!productionDiffClean) {
      blockers.push({
        code: "PRODUCTION_DIFF_NONZERO",
        message: "Production diff against origin/main is not zero",
      });
    }
  } else if (productionDiffClean === false) {
    blockers.push({
      code: "PRODUCTION_DIFF_NONZERO",
      message: "Production diff against origin/main is not zero",
    });
  } else if (productionDiffClean === undefined) {
    productionDiffClean = false;
  } else if (productionDiffClean && !productionDiff) {
    productionDiff = { clean: true, changed: [] };
  }

  let deDiffClean = deps.deDiffClean;
  let deDiff = deps.deDiff;
  if (deDiffClean === undefined && isValidSha(originMainSha)) {
    deDiff = deDiffFn(originMainSha);
    deDiffClean = Boolean(deDiff.clean);
    if (!deDiffClean) {
      blockers.push({
        code: "DE_DIFF_NONZERO",
        message: "DE diff against origin/main is not zero",
      });
    }
  } else if (deDiffClean === false) {
    blockers.push({
      code: "DE_DIFF_NONZERO",
      message: "DE diff against origin/main is not zero",
    });
  } else if (deDiffClean === undefined) {
    deDiffClean = false;
  } else if (deDiffClean && !deDiff) {
    deDiff = { clean: true, changed: [] };
  }

  return {
    pass: blockers.length === 0,
    blockers,
    headSha: isValidSha(headSha) ? headSha : null,
    originMainSha: isValidSha(originMainSha) ? originMainSha : null,
    headMatchesOriginMain,
    workingTreeClean: Boolean(workingTreeClean),
    productionDiffClean: Boolean(productionDiffClean),
    deDiffClean: Boolean(deDiffClean),
    productionDiff: productionDiff || { clean: Boolean(productionDiffClean), changed: [] },
    deDiff: deDiff || { clean: Boolean(deDiffClean), changed: [] },
    fetchStatus: fetchStatus || "FAIL",
  };
}

module.exports = {
  SHA40_HEX,
  isValidSha,
  resolvePhase1GitIdentity,
};
