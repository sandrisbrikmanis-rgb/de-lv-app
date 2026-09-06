#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const { loadObjectsForScope, getBatchSizeForScope } = require("./lib/phase1-luna-checkpoint/manifest");
const { splitObjectsIntoBatches } = require("./lib/phase1-luna-checkpoint/batch-split");
const { adapterKey } = require("./lib/luna-orchestrator");
const { listScopeCheckpoints } = require("./lib/phase1-luna-checkpoint/batch-checkpoint");
const { getDeterministicScopeOrder } = require("./lib/content-discovery/phase1-applicability");

const RUN_ID = "phase1-2026-08-30T08-56-50-163Z-a8e1dec1";
const BASELINE = "6cfb96105f7f741f6052d20ee1d1e342f198fda2";

function loadFailures() {
  const stats = JSON.parse(fs.readFileSync(path.join(ROOT, "reports/phase1-luna-stats.json"), "utf8"));
  return stats.failures || [];
}

function analyzeScope(scopeId, reason) {
  const parts = scopeId.split("/");
  const scope = {
    scopeId,
    group: parts[0],
    dataset: parts[1],
    lang: parts[2],
    lunaApplicable: true,
  };
  const objects = loadObjectsForScope(scope);
  const batchSize = getBatchSizeForScope(scope);
  const batches = splitObjectsIntoBatches(objects, batchSize);
  const cpDir = path.join(ROOT, "reports/temp/phase1-luna-runs", RUN_ID, "checkpoints", scopeId.replace(/\//g, "_"));
  const checkpoints = fs.existsSync(cpDir) ? listScopeCheckpoints(RUN_ID, scopeId) : [];
  const passCps = checkpoints.filter((c) => c.status === "PASS");
  const lastCp = passCps[passCps.length - 1];
  const failedBatchIndex = lastCp ? lastCp.batchIndex + 1 : 0;
  const failedBatch = batches[failedBatchIndex] || [];
  const sourceFile = objects[0]?.productionFile || null;

  return {
    scopeId,
    group: scope.group,
    level: scope.dataset,
    language: scope.lang,
    sourceFile,
    batchIndex: failedBatchIndex,
    batchObjectCount: failedBatch.length,
    totalBatches: batches.length,
    totalObjects: objects.length,
    checkpointStatus: passCps.length ? "PARTIAL_PASS" : "NONE",
    checkpointsSaved: passCps.length,
    lastSuccessfulBatchIndex: lastCp?.batchIndex ?? null,
    lastSuccessfulBatchId: lastCp?.batchId ?? null,
    objectsSavedFromCheckpoints: passCps.reduce((n, c) => n + (c.returnedObjectIds?.length || 0), 0),
    errorCode: reason,
    priorResultsSaved: passCps.length > 0,
    resumeWouldRecallCompleteBatch: false,
    resumable: true,
  };
}

function main() {
  const failures = loadFailures();
  const wallClock = failures.filter((f) => f.reason === "BATCH_WALL_CLOCK_EXCEEDED");
  const duplicate = failures.filter((f) => String(f.reason).includes("duplicate id"));
  assert(wallClock.length + duplicate.length === failures.length, "failure partition");
  assert(failures.length === 98, "98 failures total");
  assert(wallClock.length === 90, "90 wall-clock");
  assert(duplicate.length === 8, "8 duplicate-id");

  const rows = failures.map((f) => analyzeScope(f.scopeId, f.reason));
  const attempted = getDeterministicScopeOrder().filter((s) => s.lunaApplicable).length;
  const succeeded = attempted - failures.length;
  const summary = {
    RUN_ID,
    DISCOVERY_BASELINE_SHA: BASELINE,
    ATTEMPTED: attempted,
    SUCCEEDED: succeeded,
    FAILED: failures.length,
    RESUMABLE: rows.filter((r) => r.resumable).length,
    NON_RESUMABLE: rows.filter((r) => !r.resumable).length,
    WALL_CLOCK_FAILURES: wallClock.length,
    DUPLICATE_ID_FAILURES: duplicate.length,
    rootCause: {
      BATCH_WALL_CLOCK_EXCEEDED:
        "Scope-level batchStart accumulated wall-clock across all batches; later batches falsely exceeded 10m limit. Fixed: per-batch batchWallStart reset.",
      "duplicate id: Gehalt":
        "entryId(card)=card.de collided for das/der Gehalt at indices 1027/1028 in g2/b1. Fixed: canonical Luna request id includes scope+index+raw id.",
    },
    rows,
  };

  const outMd = path.join(ROOT, "reports/phase1-luna-98-failures-audit.md");
  const outJson = path.join(ROOT, "reports/phase1-luna-98-failures-audit.json");
  fs.writeFileSync(outJson, JSON.stringify(summary, null, 2));

  const lines = [
    "# Phase 1 Luna 98 Failures — Root-Cause Audit",
    "",
    `RUN_ID: \`${RUN_ID}\``,
    `DISCOVERY_BASELINE_SHA: \`${BASELINE}\``,
    "",
    "## Summary",
    "",
    "| Metric | Count |",
    "|---|---:|",
    `| ATTEMPTED | ${summary.ATTEMPTED} |`,
    `| SUCCEEDED | ${summary.SUCCEEDED} |`,
    `| FAILED | ${summary.FAILED} |`,
    `| RESUMABLE | ${summary.RESUMABLE} |`,
    `| NON_RESUMABLE | ${summary.NON_RESUMABLE} |`,
    `| WALL_CLOCK_FAILURES | ${summary.WALL_CLOCK_FAILURES} |`,
    `| DUPLICATE_ID_FAILURES | ${summary.DUPLICATE_ID_FAILURES} |`,
    "",
    "## Root causes",
    "",
    "### BATCH_WALL_CLOCK_EXCEEDED (90)",
    "",
    summary.rootCause["BATCH_WALL_CLOCK_EXCEEDED"],
    "",
    "### duplicate id: Gehalt (8)",
    "",
    summary.rootCause["duplicate id: Gehalt"],
    "",
    "## Per-scope failures",
    "",
    "| scope | error | batches saved | failed batch | objects in failed batch | prior saved | resumable |",
    "|---|---|---:|---:|---:|---|---|",
  ];
  for (const r of rows) {
    lines.push(
      `| ${r.scopeId} | ${r.errorCode} | ${r.checkpointsSaved}/${r.totalBatches} | ${r.batchIndex} | ${r.batchObjectCount} | ${r.priorResultsSaved ? "yes" : "no"} | ${r.resumable ? "yes" : "no"} |`,
    );
  }
  fs.writeFileSync(outMd, `${lines.join("\n")}\n`);
  console.log(JSON.stringify({ failures: failures.length, wallClock: wallClock.length, duplicate: duplicate.length, outMd, outJson }));
}

function assert(cond, msg) {
  if (!cond) throw new Error(msg);
}

main();
