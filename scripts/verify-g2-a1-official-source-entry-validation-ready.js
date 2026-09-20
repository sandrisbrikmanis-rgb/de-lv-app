#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const { writeJsonAtomic } = require("./lib/g2-a1-production-current/artifacts");
const {
  runAllTargetAdapterIntegrationTests,
} = require("./lib/g2-a1-production-current/source-adapters/target/integration-tests");
const { runOfficialSourceV2MultiPilot } = require("./lib/g2-a1-production-current/official-source-v2-multi-pilot");

const integration = process.argv.includes("--integration") || process.env.G2_A1_SOURCE_ACCESS_INTEGRATION === "1";

function productionDiffClean() {
  const diff = execSync("git diff --name-only -- data www/data crowdin/content crowdin/ui", {
    cwd: ROOT,
    encoding: "utf8",
  }).trim();
  return { pass: !diff, diff: diff ? diff.split("\n") : [] };
}

async function main() {
  const blockers = [];
  const matrixPath = path.join(ROOT, "reports/g2-a1-production-current/official-source-adapter-matrix.json");

  if (!fs.existsSync(matrixPath)) {
    blockers.push({ code: "MISSING_ADAPTER_MATRIX", hint: "npm run build:g2-a1:official-source-adapter-matrix" });
  } else {
    const matrix = JSON.parse(fs.readFileSync(matrixPath, "utf8"));
    if (matrix.adaptersImplemented !== 32) {
      blockers.push({
        code: "ADAPTERS_INCOMPLETE",
        adaptersImplemented: matrix.adaptersImplemented,
        pending: matrix.adaptersPending,
      });
    }
    if (matrix.liveAdapters !== 32) {
      blockers.push({
        code: "BLOCKED_OFFICIAL_AUTHORITIES",
        liveAdapters: matrix.liveAdapters,
        blockedOfficialAdapters: matrix.blockedOfficialAdapters,
        blocked: (matrix.matrix || [])
          .filter((r) => r.liveIntegrationStatus === "BLOCKED")
          .map((r) => ({ language: r.language, outcome: r.blockedOutcome, adapterId: r.adapterId })),
      });
    }
  }

  const prod = productionDiffClean();
  if (!prod.pass) {
    blockers.push({ code: "UNEXPECTED_PRODUCTION_OR_CROWDIN_CHANGE", files: prod.diff });
  }

  let integrationSummary = null;
  let multiPilot = null;

  if (integration && blockers.every((b) => b.code !== "MISSING_ADAPTER_MATRIX")) {
    try {
      integrationSummary = await runAllTargetAdapterIntegrationTests();
      if (!integrationSummary.pass) {
        blockers.push({ code: "LIVE_INTEGRATION_FAIL", detail: integrationSummary.failures });
      }
      if (integrationSummary.positiveLivePass !== integrationSummary.positiveLiveExpected) {
        blockers.push({
          code: "POSITIVE_LIVE_TESTS",
          pass: integrationSummary.positiveLivePass,
          expected: integrationSummary.positiveLiveExpected,
        });
      }
      if (integrationSummary.negativeLivePass !== 32) {
        blockers.push({ code: "NEGATIVE_LIVE_TESTS", pass: integrationSummary.negativeLivePass, expected: 32 });
      }
      if (!integrationSummary.grElPass) {
        blockers.push({ code: "GR_EL_MAPPING_FAIL" });
      }
      if (!integrationSummary.dePass) {
        blockers.push({ code: "DE_ADAPTER_FAIL" });
      }
    } catch (e) {
      blockers.push({ code: "LIVE_INTEGRATION_THROW", message: String(e.message || e) });
    }

    try {
      multiPilot = await runOfficialSourceV2MultiPilot();
      writeJsonAtomic("official-source-v2-multi-pilot-result.json", multiPilot);
      if (!multiPilot.pass) {
        blockers.push({ code: "V2_MULTI_PILOT_FAIL", failures: multiPilot.failures });
      }
    } catch (e) {
      blockers.push({ code: "V2_MULTI_PILOT_THROW", message: String(e.message || e) });
    }
  } else if (!integration) {
    blockers.push({
      code: "LIVE_INTEGRATION_NOT_RUN",
      hint: "Re-run with G2_A1_SOURCE_ACCESS_INTEGRATION=1 or --integration",
    });
  }

  const ready =
    blockers.length === 0 &&
    integrationSummary &&
    integrationSummary.liveAdapterCount === 32 &&
    multiPilot &&
    multiPilot.pass;

  const blockedAuthorities = blockers.some((b) => b.code === "BLOCKED_OFFICIAL_AUTHORITIES");

  const reconciliationPath = path.join(ROOT, "reports/g2-a1-production-current/language-authority-registry-reconciliation.json");
  let registryReconciliation = null;
  if (fs.existsSync(reconciliationPath)) {
    registryReconciliation = JSON.parse(fs.readFileSync(reconciliationPath, "utf8"));
  }

  const gate = {
    pass: ready,
    blockers,
    registryReconciliation: registryReconciliation
      ? {
          classification: registryReconciliation.classification,
          registryIncomplete: registryReconciliation.registryIncomplete,
        }
      : null,
    integrationRan: Boolean(integrationSummary),
    integrationSummary: integrationSummary
      ? {
          adaptersImplemented: integrationSummary.adaptersImplemented,
          liveAdapterCount: integrationSummary.liveAdapterCount,
          positiveLivePass: integrationSummary.positiveLivePass,
          negativeLivePass: integrationSummary.negativeLivePass,
          blockedLanguages: integrationSummary.blockedLanguages,
        }
      : null,
    multiPilot: multiPilot
      ? { pass: multiPilot.pass, dualValidatedCount: multiPilot.dualValidatedCount, pilotCount: multiPilot.pilotCount }
      : null,
    productionDiffClean: prod.pass,
    classification: ready
      ? "G2_A1_OFFICIAL_SOURCE_ENTRY_VALIDATION_READY"
      : blockedAuthorities
        ? "G2_A1_OFFICIAL_SOURCE_ENTRY_VALIDATION_BLOCKED_AFTER_FULL_REGISTRY_RECONCILIATION"
        : "G2_A1_OFFICIAL_SOURCE_ENTRY_VALIDATION_IN_PROGRESS",
    nextAction: ready
      ? "OWNER_MAY_AUTHORIZE_FULL_TARGETED_FIELD_LEVEL_AUDIT_RESUME"
      : blockedAuthorities
        ? "OWNER_DECISION_REQUIRED_FOR_REMAINING_EXACT_BLOCKERS"
        : "IMPLEMENT_REMAINING_TARGET_SOURCE_ADAPTERS_AND_NEW_PILOTS",
  };

  writeJsonAtomic("official-source-entry-validation-ready.json", gate);
  console.log(JSON.stringify(gate, null, 2));
  process.exit(gate.pass ? 0 : 1);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
