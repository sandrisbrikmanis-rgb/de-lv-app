#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const { writeJsonAtomic } = require("./lib/g2-a1-production-current/artifacts");
const { OFFICIAL_SOURCE_ACCESS_VERSION } = require("./lib/g2-a1-production-current/official-source-access-constants");

function listCheckpoints(root) {
  if (!fs.existsSync(root)) return [];
  const out = [];
  for (const lang of fs.readdirSync(root)) {
    const dir = path.join(root, lang);
    if (!fs.statSync(dir).isDirectory()) continue;
    for (const f of fs.readdirSync(dir)) out.push(path.join(dir, f));
  }
  return out.sort();
}

function main() {
  const statePath = path.join(ROOT, "reports/temp/g2-a1-production-current/targeted-field-audit-state.json");
  const cpRoot = path.join(ROOT, "reports/temp/g2-a1-production-current/targeted-field-luna-raw-checkpoints");
  let state = null;
  if (fs.existsSync(statePath)) {
    state = JSON.parse(fs.readFileSync(statePath, "utf8"));
    const snap = path.join(ROOT, "reports/temp/g2-a1-production-current/targeted-field-audit-state-HALTED-pre-source-access.json");
    fs.copyFileSync(statePath, snap);
  }

  const manifest = {
    haltedAt: new Date().toISOString(),
    classification: "G2_A1_TARGETED_FIELD_LEVEL_AUDIT_BLOCKED_OFFICIAL_SOURCE_ACCESS_NOT_WIRED",
    reason:
      "targeted-field-luna-audit.js passed authority names/URLs only; no web search or deterministic official source fetch before model analysis.",
    headSha: execSync("git rev-parse HEAD", { cwd: ROOT, encoding: "utf8" }).trim(),
    productionFileSetSha: state?.auditBaselineSha || null,
    progress: {
      batchesCompleted: state?.batchesCompleted || 0,
      batchesTotal: state?.batchesTotal || 288,
      fieldsInStateRecords: state?.records?.length || 0,
      lunaCalls: state?.lunaCalls || 0,
      lastBatchId: state?.lastBatchId || null,
      processedBatchIds: state?.processedBatches ? Object.keys(state.processedBatches) : [],
    },
    invalidForLinguisticAudit: {
      note: "Pre-source-access rows MUST NOT enter OWNER backlog or linguistic TOTAL_CHECKED.",
      preSourceAccessFieldResults: state?.records?.length || 0,
      firstBatchOnlyNsrNotOwnerBacklog: true,
    },
    preservedArtifacts: {
      checkpointFiles: listCheckpoints(cpRoot),
      stateSnapshot: "reports/temp/g2-a1-production-current/targeted-field-audit-state-HALTED-pre-source-access.json",
      runLog: "reports/temp/g2-a1-production-current/targeted-field-audit-run.log",
      stdoutLog: "reports/temp/g2-a1-production-current/targeted-field-audit-stdout.log",
    },
    nextOfficialSourceAccessVersion: OFFICIAL_SOURCE_ACCESS_VERSION,
    nextAction: "IMPLEMENT_OFFICIAL_SOURCE_ACCESS_THEN_PILOT",
  };

  writeJsonAtomic("targeted-field-audit-halt-manifest.json", manifest);
  console.log(JSON.stringify({ gate: "TARGETED_AUDIT_HALT_MANIFEST", pass: true, manifest }, null, 2));
}

main();
