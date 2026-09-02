#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const { buildPhase1Scopes } = require("./lib/content-discovery/phase1-applicability");
const { buildExpectedBatchPlanForScopes } = require("./lib/phase1-luna-checkpoint/batch-plan");
const { listCheckpointFiles, readJsonFile } = require("./lib/phase1-luna-checkpoint/atomic-io");
const { RUNS_ROOT } = require("./lib/phase1-luna-checkpoint/constants");
const {
  REQUEST_HASH_V1_CHECKPOINT_PAYLOAD,
  REQUEST_HASH_V2_CANONICAL_LUNA_PAYLOAD,
  validateCheckpointRequestInputHash,
} = require("./lib/phase1-luna-checkpoint/request-hash");

const RUN_ID = process.argv[2] || "phase1-2026-08-30T08-56-50-163Z-a8e1dec1";
const OUT_DIR = process.argv[3] || path.join(ROOT, "reports");

function buildMatrix(runId) {
  const scopes = buildPhase1Scopes().filter((s) => s.lunaApplicable);
  const { planByScope } = buildExpectedBatchPlanForScopes(scopes);
  const stats = {
    runId,
    generatedAt: new Date().toISOString(),
    TOTAL_CHECKPOINTS: 0,
    CURRENT_HASH_MATCH: 0,
    ORIGINAL_HASH_MATCH: 0,
    LEGACY_COMPATIBLE_HASH_MATCH: 0,
    CANONICAL_HASH_MATCH: 0,
    NO_KNOWN_HASH_MATCH: 0,
    MULTIPLE_ALGORITHM_MATCH: 0,
    mismatchesByGroup: {},
    rows: [],
  };

  for (const scope of scopes) {
    const dir = path.join(RUNS_ROOT, runId, "checkpoints", scope.scopeId.replace(/\//g, "_"));
    if (!fs.existsSync(dir)) continue;
    const expectedBatches = planByScope.get(scope.scopeId) || [];
    const expectedByBatchId = new Map(expectedBatches.map((b) => [b.batchId, b]));

    for (const file of listCheckpointFiles(dir)) {
      stats.TOTAL_CHECKPOINTS += 1;
      const cp = readJsonFile(file);
      const expected = expectedByBatchId.get(cp.batchId);
      if (!expected) {
        stats.NO_KNOWN_HASH_MATCH += 1;
        stats.rows.push({ scopeId: scope.scopeId, batchId: cp.batchId, match: "UNMAPPED" });
        continue;
      }

      const hashCheck = validateCheckpointRequestInputHash(cp, expected);
      const row = {
        group: scope.group,
        dataset: scope.dataset,
        lang: scope.lang,
        scopeId: scope.scopeId,
        batchId: cp.batchId,
        storedHash: cp.requestInputHash,
        matchedVersion: hashCheck.matchedVersion || null,
        ok: hashCheck.ok,
      };

      if (hashCheck.ok) {
        if (hashCheck.matchedVersion === REQUEST_HASH_V1_CHECKPOINT_PAYLOAD) {
          stats.CURRENT_HASH_MATCH += 1;
          stats.LEGACY_COMPATIBLE_HASH_MATCH += 1;
        } else if (hashCheck.matchedVersion === REQUEST_HASH_V2_CANONICAL_LUNA_PAYLOAD) {
          stats.CANONICAL_HASH_MATCH += 1;
        }
        row.match = hashCheck.matchedVersion;
      } else {
        stats.NO_KNOWN_HASH_MATCH += 1;
        row.match = "NONE";
        const key = `${scope.group}|${scope.dataset}|${scope.lang}`;
        stats.mismatchesByGroup[key] = (stats.mismatchesByGroup[key] || 0) + 1;
      }
      stats.rows.push(row);
    }
  }
  return stats;
}

function main() {
  const matrix = buildMatrix(RUN_ID);
  const jsonPath = path.join(OUT_DIR, "phase1-r-ckpt-005-checkpoint-hash-matrix.json");
  const mdPath = path.join(OUT_DIR, "phase1-r-ckpt-005-checkpoint-hash-matrix.md");
  fs.mkdirSync(OUT_DIR, { recursive: true });
  fs.writeFileSync(jsonPath, `${JSON.stringify(matrix, null, 2)}\n`);

  const md = [
    "# R-CKPT-005 Checkpoint Hash Matrix",
    "",
    `Run: \`${RUN_ID}\``,
    `Generated: ${matrix.generatedAt}`,
    "",
    "| Metric | Count |",
    "|---|---:|",
    `| TOTAL_CHECKPOINTS | ${matrix.TOTAL_CHECKPOINTS} |`,
    `| CURRENT_HASH_MATCH (V1) | ${matrix.CURRENT_HASH_MATCH} |`,
    `| LEGACY_COMPATIBLE_HASH_MATCH | ${matrix.LEGACY_COMPATIBLE_HASH_MATCH} |`,
    `| CANONICAL_HASH_MATCH (V2) | ${matrix.CANONICAL_HASH_MATCH} |`,
    `| NO_KNOWN_HASH_MATCH | ${matrix.NO_KNOWN_HASH_MATCH} |`,
    `| MULTIPLE_ALGORITHM_MATCH | ${matrix.MULTIPLE_ALGORITHM_MATCH} |`,
    "",
    "## Mismatches by group",
    "",
    Object.keys(matrix.mismatchesByGroup).length
      ? Object.entries(matrix.mismatchesByGroup)
          .map(([k, v]) => `- ${k}: ${v}`)
          .join("\n")
      : "_None_",
    "",
  ].join("\n");
  fs.writeFileSync(mdPath, md);
  console.log(JSON.stringify({
    jsonPath: path.relative(ROOT, jsonPath),
    mdPath: path.relative(ROOT, mdPath),
    TOTAL_CHECKPOINTS: matrix.TOTAL_CHECKPOINTS,
    CURRENT_HASH_MATCH: matrix.CURRENT_HASH_MATCH,
    NO_KNOWN_HASH_MATCH: matrix.NO_KNOWN_HASH_MATCH,
  }, null, 2));
}

main();
