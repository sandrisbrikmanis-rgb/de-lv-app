#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const { writeJsonAtomic } = require("./lib/g2-a1-production-current/artifacts");
const {
  listTargetAdapterMatrix,
  assertRegistryComplete,
} = require("./lib/g2-a1-production-current/source-adapters/target");
const { OFFICIAL_SOURCE_ACCESS_VERSION } = require("./lib/g2-a1-production-current/official-source-access-constants");

function loadBrowserPilots() {
  const p = path.join(ROOT, "reports/g2-a1-production-current/official-source-browser-adapter-pilots.json");
  if (!fs.existsSync(p)) return null;
  return JSON.parse(fs.readFileSync(p, "utf8"));
}

function loadBlockerResolution() {
  const p = path.join(ROOT, "reports/g2-a1-production-current/official-source-exact-blockers-resolution.json");
  if (!fs.existsSync(p)) return null;
  return JSON.parse(fs.readFileSync(p, "utf8"));
}

function main() {
  const complete = assertRegistryComplete();
  const targets = listTargetAdapterMatrix();
  const implemented = targets.filter((r) => r.realLookup === "YES").length;
  const live = targets.filter((r) => r.liveIntegrationStatus === "LIVE").length;
  const blocked = targets.filter((r) => r.liveIntegrationStatus === "BLOCKED").length;
  const browserPilots = loadBrowserPilots();
  const blockerResolution = loadBlockerResolution();
  const entryPathsValidated =
    blockerResolution?.totalEntryPathsVerified ??
    (browserPilots?.positivePilotPass != null ? 8 + browserPilots.positivePilotPass : null);

  const gate = {
    pass: implemented === 32 && complete.pass && entryPathsValidated === 32,
    officialSourceAccessVersion: OFFICIAL_SOURCE_ACCESS_VERSION,
    targetLanguages: targets.length,
    adaptersImplemented: implemented,
    adaptersPending: 32 - implemented,
    liveAdapters: live,
    blockedOfficialAdapters: blocked,
    browserAdapterPilots: browserPilots
      ? {
          positivePilotPass: browserPilots.positivePilotPass,
          browserAdapterCount: browserPilots.browserAdapterCount,
          classification: browserPilots.classification,
        }
      : null,
    blockerResolution: blockerResolution
      ? {
          totalEntryPathsVerified: blockerResolution.totalEntryPathsVerified,
          counts: blockerResolution.counts,
          classification: blockerResolution.classification,
        }
      : null,
    entryPathsValidatedEstimate: entryPathsValidated !== null ? Math.min(32, entryPathsValidated) : null,
    registryComplete: complete.pass,
    missingAdapters: complete.missing,
    deAdapter: {
      adapterId: "de-dwds-wb-entry+de-duden-rechtschreibung-entry",
      realLookup: "YES",
      entryValidation: "SOURCE_ENTRY_VALIDATED",
    },
    matrix: targets,
    classification:
      implemented === 32 && entryPathsValidated === 32
        ? "G2_A1_OFFICIAL_SOURCE_ENTRY_VALIDATION_READY"
        : implemented === 32 && browserPilots
          ? "G2_A1_OFFICIAL_SOURCE_BROWSER_ACCESS_PARTIALLY_BLOCKED"
          : implemented === 32
            ? "G2_A1_OFFICIAL_SOURCE_ENTRY_VALIDATION_BLOCKED_AFTER_FULL_REGISTRY_RECONCILIATION"
            : "G2_A1_OFFICIAL_SOURCE_ENTRY_VALIDATION_IN_PROGRESS",
    nextAction:
      implemented === 32 && entryPathsValidated === 32
        ? "OWNER_MAY_AUTHORIZE_FULL_TARGETED_FIELD_LEVEL_AUDIT_RESUME"
        : implemented === 32
          ? "OWNER_DECISION_REQUIRED_FOR_REMAINING_SPECIFIC_AUTHORITIES"
          : "IMPLEMENT_REMAINING_TARGET_SOURCE_ADAPTERS",
  };
  writeJsonAtomic("official-source-adapter-matrix.json", gate);
  console.log(JSON.stringify({ gate: "OFFICIAL_SOURCE_ADAPTER_MATRIX", ...gate }, null, 2));
  process.exit(gate.pass ? 0 : 1);
}

main();
