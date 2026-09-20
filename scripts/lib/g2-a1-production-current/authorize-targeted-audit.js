#!/usr/bin/env node
"use strict";

const { execSync } = require("child_process");
const { ROOT } = require("../audit-common");
const { runPreflight } = require("./preflight");
const { buildProductionFileSetInventory } = require("./inventory");
const { isApiKeyConfigured } = require("../luna-phase1-openai");

function git(cmd) {
  return execSync(cmd, { cwd: ROOT, encoding: "utf8" }).trim();
}

function authorizeTargetedFieldLevelAudit(options = {}) {
  const blockers = [];
  if (!options.ownerAuthorizeTargetedAudit) {
    blockers.push({ code: "OWNER_FLAG_MISSING", message: "Require --owner-authorize-targeted-field-audit" });
  }
  if (!options.expectedMainSha || options.expectedMainSha.length < 40) {
    blockers.push({ code: "EXPECTED_MAIN_SHA_MISSING" });
  }
  if (!options.expectedProductionFileSetSha || options.expectedProductionFileSetSha.length < 40) {
    blockers.push({ code: "EXPECTED_PRODUCTION_FILE_SET_SHA_MISSING" });
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
  if (originMain && options.expectedMainSha && originMain !== options.expectedMainSha) {
    blockers.push({ code: "MAIN_SHA_MISMATCH", originMain, expected: options.expectedMainSha });
  }

  const modifiedTracked = git("git diff --name-only");
  if (modifiedTracked) {
    blockers.push({ code: "WORKTREE_DIRTY_TRACKED", paths: modifiedTracked.split("\n").filter(Boolean) });
  }

  const prodDirty = git("git diff --name-only -- data www/data crowdin/content crowdin/ui");
  if (prodDirty) {
    blockers.push({ code: "PRODUCTION_DIRTY", paths: prodDirty.split("\n").filter(Boolean) });
  }

  const preflight = runPreflight({ baseRef: "origin/main" });
  if (!preflight.pass) blockers.push({ code: "PREFLIGHT_FAIL", detail: preflight.blockers });

  const inventory = buildProductionFileSetInventory();
  if (!inventory.gate.pass) blockers.push({ code: "FILE_SET_FAIL", gate: inventory.gate });
  if (
    options.expectedProductionFileSetSha &&
    inventory.gate.productionFileSetSha256 !== options.expectedProductionFileSetSha
  ) {
    blockers.push({
      code: "FILE_SET_SHA_MISMATCH",
      actual: inventory.gate.productionFileSetSha256,
      expected: options.expectedProductionFileSetSha,
    });
  }

  if (options.executeLuna && !isApiKeyConfigured()) {
    blockers.push({ code: "OPENAI_API_KEY_MISSING" });
  }

  return {
    pass: blockers.length === 0,
    blockers,
    headSha: head,
    originMainSha: originMain,
    auditBaselineSha: inventory.gate.productionFileSetSha256,
    inventory,
    preflight,
  };
}

module.exports = {
  authorizeTargetedFieldLevelAudit,
};
