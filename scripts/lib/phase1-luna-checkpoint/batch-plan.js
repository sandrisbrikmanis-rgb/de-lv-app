#!/usr/bin/env node
"use strict";

const { adapterKey } = require("../luna-orchestrator");
const {
  loadObjectsForScope,
  getObjectId,
  getBatchSizeForScope,
} = require("./manifest");
const { hashSortedList, hashRequestInput, stableBatchId } = require("./hash");
const { splitObjectsIntoBatches } = require("./batch-split");
const { buildLunaRequestPayload } = require("./object-identity");
const {
  REQUEST_HASH_V1_CHECKPOINT_PAYLOAD,
  REQUEST_HASH_V2_CANONICAL_LUNA_PAYLOAD,
} = require("./request-hash");

function buildRequestPayload(scopeId, adapterName, batch, serialize = (obj) => obj) {
  return {
    scopeId,
    adapter: adapterName,
    objects: batch.map((obj) => serialize(obj)),
  };
}

function buildExpectedBatchPlanForScope(scope, options = {}) {
  const getId = options.getId || getObjectId;
  const serialize = options.serialize || ((obj) => obj);
  let objects = loadObjectsForScope(scope);
  if (options.lunaObjectLimit && options.lunaObjectLimit > 0) {
    objects = objects.slice(0, options.lunaObjectLimit);
  }
  const batchSize = options.batchSize || getBatchSizeForScope(scope);
  const adapterName = adapterKey(scope.group, scope.dataset);
  const batches = splitObjectsIntoBatches(objects, batchSize);

  return batches.map((batch, batchIndex) => {
    const expectedObjectIds = batch.map(getId);
    const requestPayload = buildRequestPayload(scope.scopeId, adapterName, batch, serialize);
    const canonicalPayload = {
      scopeId: scope.scopeId,
      adapter: adapterName,
      objects: batch.map((obj) => buildLunaRequestPayload(scope.scopeId, obj)),
    };
    const batchId = stableBatchId(scope.scopeId, batchIndex, expectedObjectIds);
    const requestInputHash = hashRequestInput(requestPayload);
    const canonicalRequestInputHash = hashRequestInput(canonicalPayload);
    return {
      scopeId: scope.scopeId,
      batchIndex,
      expectedObjectIds,
      expectedIdsHash: hashSortedList(expectedObjectIds),
      requestPayload,
      requestInputHash,
      canonicalRequestInputHash,
      requestHashVersions: {
        [REQUEST_HASH_V1_CHECKPOINT_PAYLOAD]: requestInputHash,
        [REQUEST_HASH_V2_CANONICAL_LUNA_PAYLOAD]: canonicalRequestInputHash,
      },
      batchId,
      expectedFilename: `${batchId}.json`,
      adapterName,
    };
  });
}

function buildExpectedBatchPlanForScopes(scopes, options = {}) {
  const planByScope = new Map();
  const batchByKey = new Map();

  for (const scope of scopes) {
    if (!scope.lunaApplicable) continue;
    const batches = buildExpectedBatchPlanForScope(scope, options);
    planByScope.set(scope.scopeId, batches);
    for (const batch of batches) {
      batchByKey.set(`${scope.scopeId}|${batch.batchId}`, batch);
    }
  }

  return { planByScope, batchByKey };
}

module.exports = {
  buildRequestPayload,
  buildExpectedBatchPlanForScope,
  buildExpectedBatchPlanForScopes,
  splitObjectsIntoBatches,
};
