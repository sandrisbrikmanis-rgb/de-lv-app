#!/usr/bin/env node
"use strict";

const { buildPhase1Scopes } = require("./lib/content-discovery/phase1-applicability");
const { buildExpectedBatchPlanForScope } = require("./lib/phase1-luna-checkpoint/batch-plan");
const { hashRequestInput } = require("./lib/phase1-luna-checkpoint/hash");
const { buildLunaRequestPayload } = require("./lib/phase1-luna-checkpoint/object-identity");
const { loadObjectsForScope, getBatchSizeForScope } = require("./lib/phase1-luna-checkpoint/manifest");
const { splitObjectsIntoBatches } = require("./lib/phase1-luna-checkpoint/batch-split");

const scopeId = process.argv[2] || "g1/sentences/bg";
const batchIndex = Number(process.argv[3] || 0);

const scope = buildPhase1Scopes().find((s) => s.scopeId === scopeId);
if (!scope) {
  console.log(JSON.stringify({ error: "SCOPE_NOT_FOUND" }));
  process.exit(1);
}

const plan = buildExpectedBatchPlanForScope(scope);
const batch = plan[batchIndex];
if (!batch) {
  console.log(JSON.stringify({ error: "BATCH_NOT_FOUND" }));
  process.exit(1);
}

const objects = loadObjectsForScope(scope);
const batchSize = getBatchSizeForScope(scope);
const batches = splitObjectsIntoBatches(objects, batchSize);
const batchObjects = batches[batchIndex];

const checkpointPayload = batch.requestPayload;
const canonicalPayload = {
  scopeId: scope.scopeId,
  adapter: batch.adapterName,
  objects: batchObjects.map((obj) => buildLunaRequestPayload(scope.scopeId, obj)),
};

const out = {
  requestInputHash: batch.requestInputHash,
  canonicalRequestInputHash: hashRequestInput(canonicalPayload),
  adapterName: batch.adapterName,
  objectCount: batch.expectedObjectIds.length,
  payloadKeys: Object.keys(checkpointPayload),
  objectFieldKeys: checkpointPayload.objects[0] ? Object.keys(checkpointPayload.objects[0]).sort() : [],
  canonicalObjectFieldKeys: canonicalPayload.objects[0]
    ? Object.keys(canonicalPayload.objects[0]).sort()
    : [],
  batchId: batch.batchId,
  expectedIdsHash: batch.expectedIdsHash,
};

console.log(JSON.stringify(out));
