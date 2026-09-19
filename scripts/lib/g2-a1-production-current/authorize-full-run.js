#!/usr/bin/env node
"use strict";

const { execSync } = require("child_process");
const { ROOT } = require("../audit-common");
const { runPreflight } = require("./preflight");
const { buildProductionFileSetInventory } = require("./inventory");
const { AUDIT_SOURCE } = require("./constants");

function git(cmd) {
  return execSync(cmd, { cwd: ROOT, encoding: "utf8" }).trim();
}

function authorizeFullProductionCurrentAudit(options = {}) {
  const blockers = [];
  const {
    ownerAuthorizeFullAudit = false,
    expectedMainSha = null,
    expectedProductionFileSetSha = null,
    baseRef = "origin/main",
  } = options;

  if (!ownerAuthorizeFullAudit) {
    blockers.push({
      code: "OWNER_FLAG_MISSING",
      message: "Require --owner-authorize-full-audit",
    });
  }
  if (!expectedMainSha || expectedMainSha.length < 40) {
    blockers.push({ code: "EXPECTED_MAIN_SHA_MISSING", message: "Require --expected-main-sha=<full SHA>" });
  }
  if (!expectedProductionFileSetSha || expectedProductionFileSetSha.length < 40) {
    blockers.push({
      code: "EXPECTED_FILE_SET_SHA_MISSING",
      message: "Require --expected-production-file-set-sha=<SHA>",
    });
  }

  let originMain = "";
  let head = "";
  try {
    originMain = git("git rev-parse origin/main");
    head = git("git rev-parse HEAD");
  } catch (e) {
    blockers.push({ code: "GIT_REF_FAIL", message: String(e.message || e) });
  }

  if (head && originMain && head !== originMain) {
    blockers.push({ code: "HEAD_NOT_ORIGIN_MAIN", head, originMain });
  }
  if (originMain && expectedMainSha && originMain !== expectedMainSha) {
    blockers.push({ code: "MAIN_SHA_MISMATCH", originMain, expectedMainSha });
  }

  const dirty = git("git diff --name-only -- data www/data crowdin/content crowdin/ui");
  if (dirty) {
    blockers.push({ code: "WORKTREE_DIRTY", paths: dirty.split("\n").filter(Boolean) });
  }

  const preflight = runPreflight({ baseRef });
  if (!preflight.pass) {
    blockers.push({ code: "PREFLIGHT_FAIL", detail: preflight.blockers });
  }

  const inventory = buildProductionFileSetInventory();
  if (!inventory.gate.pass) {
    blockers.push({ code: "FILE_SET_FAIL", gate: inventory.gate });
  }
  if (
    expectedProductionFileSetSha &&
    inventory.gate.productionFileSetSha256 !== expectedProductionFileSetSha
  ) {
    blockers.push({
      code: "FILE_SET_SHA_MISMATCH",
      actual: inventory.gate.productionFileSetSha256,
      expected: expectedProductionFileSetSha,
    });
  }

  blockers.push({
    code: "STAGING_NOT_CURRENT_GUARD",
    pass: AUDIT_SOURCE === "production-current",
    message: "Pipeline CURRENT must remain production-current (not crowdin-staging)",
  });
  const stagingGuard = blockers.find((b) => b.code === "STAGING_NOT_CURRENT_GUARD");
  if (stagingGuard && stagingGuard.pass !== true) {
    /* keep as blocker shape */
  } else if (stagingGuard) {
    blockers.splice(blockers.indexOf(stagingGuard), 1);
  }

  const pass = blockers.length === 0;
  return {
    pass,
    blockers,
    preflightPass: preflight.pass,
    masterVersion: preflight.masterVersion,
    productionFileSetSha256: inventory.gate.productionFileSetSha256,
    originMainSha: originMain,
    headSha: head,
  };
}

module.exports = {
  authorizeFullProductionCurrentAudit,
};
