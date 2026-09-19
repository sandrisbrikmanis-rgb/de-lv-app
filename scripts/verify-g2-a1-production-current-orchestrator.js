#!/usr/bin/env node
"use strict";
/**
 * Verifier for production-CURRENT A1 orchestrator gates and dry-run artifact schema.
 * Does not run Luna or modify production data.
 */

const { execSync } = require("child_process");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const { runPreflight } = require("./lib/g2-a1-production-current/preflight");
const { runDryRun } = require("./lib/g2-a1-production-current/dry-run");
const { validateDryRunArtifact, REQUIRED_ROW_FIELDS } = require("./lib/g2-a1-production-current/artifacts");
const { AUDIT_VERDICTS, FORBIDDEN_AUDIT_VERDICTS } = require("./lib/g2-a1-production-current/constants");
const { authorizeFullLinguisticAudit } = require("./lib/g2-a1-production-current/full-gates");

function main() {
  const blockers = [];

  const preflight = runPreflight();
  if (!preflight.pass) {
    blockers.push({ code: "PREFLIGHT", detail: preflight.blockers });
  }

  const dry = runDryRun();
  if (!dry.pass) {
    blockers.push({ code: "DRY_RUN", detail: dry.phase });
  }

  const artifactCheck = validateDryRunArtifact({
    summary: dry.summary,
    perLang: dry.perLang,
    rowsSample: dry.rows.slice(0, 3),
  });
  if (!artifactCheck.pass) {
    blockers.push({ code: "ROW_SCHEMA", detail: artifactCheck.errors });
  }

  const fullWithoutAuth = authorizeFullLinguisticAudit();
  if (fullWithoutAuth.pass) {
    blockers.push({ code: "FULL_SHOULD_REQUIRE_AUTH", detail: "full passed without OWNER env" });
  }

  let productionDiffClean = true;
  try {
    const diff = execSync("git diff --name-only -- data www/data", { cwd: ROOT, encoding: "utf8" }).trim();
    if (diff) {
      productionDiffClean = false;
      blockers.push({ code: "PRODUCTION_DIRTY", detail: diff.split("\n") });
    }
  } catch {
    /* ignore */
  }

  const gate = {
    PRODUCTION_CURRENT_ORCHESTRATOR_VERIFY: blockers.length === 0 ? "PASS" : "FAIL",
    preflightPass: preflight.pass,
    dryRunPass: dry.pass,
    totalAuditRows: dry.rows.length,
    productionFileSetSha256: dry.summary?.auditBaselineSha || null,
    requiredRowFields: REQUIRED_ROW_FIELDS,
    allowedVerdicts: AUDIT_VERDICTS,
    forbiddenFinalVerdicts: FORBIDDEN_AUDIT_VERDICTS,
    fullOwnerGateEnv: fullWithoutAuth.ownerAuthEnv,
    productionDiffClean,
    blockers,
  };

  console.log(JSON.stringify(gate, null, 2));
  process.exit(blockers.length === 0 ? 0 : 1);
}

main();
