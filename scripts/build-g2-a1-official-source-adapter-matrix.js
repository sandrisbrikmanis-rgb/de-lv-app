#!/usr/bin/env node
"use strict";

const { writeJsonAtomic } = require("./lib/g2-a1-production-current/artifacts");
const {
  listTargetAdapterMatrix,
  assertRegistryComplete,
} = require("./lib/g2-a1-production-current/source-adapters/target");
const { OFFICIAL_SOURCE_ACCESS_VERSION } = require("./lib/g2-a1-production-current/official-source-access-constants");

function main() {
  const complete = assertRegistryComplete();
  const targets = listTargetAdapterMatrix();
  const implemented = targets.filter((r) => r.realLookup === "YES").length;
  const live = targets.filter((r) => r.liveIntegrationStatus === "LIVE").length;
  const blocked = targets.filter((r) => r.liveIntegrationStatus === "BLOCKED").length;

  const gate = {
    pass: implemented === 32 && complete.pass,
    officialSourceAccessVersion: OFFICIAL_SOURCE_ACCESS_VERSION,
    targetLanguages: targets.length,
    adaptersImplemented: implemented,
    adaptersPending: 32 - implemented,
    liveAdapters: live,
    blockedOfficialAdapters: blocked,
    registryComplete: complete.pass,
    missingAdapters: complete.missing,
    deAdapter: {
      adapterId: "de-dwds-wb-entry+de-duden-rechtschreibung-entry",
      realLookup: "YES",
      entryValidation: "SOURCE_ENTRY_VALIDATED",
    },
    matrix: targets,
    classification:
      implemented === 32 && live === 32
        ? "G2_A1_OFFICIAL_SOURCE_ENTRY_VALIDATION_READY"
        : implemented === 32
          ? "G2_A1_OFFICIAL_SOURCE_ENTRY_VALIDATION_BLOCKED_AFTER_FULL_REGISTRY_RECONCILIATION"
          : "G2_A1_OFFICIAL_SOURCE_ENTRY_VALIDATION_IN_PROGRESS",
    nextAction:
      implemented === 32 && live === 32
        ? "OWNER_MAY_AUTHORIZE_FULL_TARGETED_FIELD_LEVEL_AUDIT_RESUME"
        : implemented === 32
          ? "OWNER_DECISION_REQUIRED_FOR_REMAINING_EXACT_BLOCKERS"
          : "IMPLEMENT_REMAINING_TARGET_SOURCE_ADAPTERS",
  };
  writeJsonAtomic("official-source-adapter-matrix.json", gate);
  console.log(JSON.stringify({ gate: "OFFICIAL_SOURCE_ADAPTER_MATRIX", ...gate }, null, 2));
  process.exit(gate.pass ? 0 : 1);
}

main();
