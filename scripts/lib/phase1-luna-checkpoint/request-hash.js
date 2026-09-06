#!/usr/bin/env node
"use strict";

const { hashRequestInput } = require("./hash");
const { buildLunaRequestPayload } = require("./object-identity");

/** V1: checkpoint request payload — raw objects, scopeId + adapter + objects (frozen at RUN start). */
const REQUEST_HASH_V1_CHECKPOINT_PAYLOAD = "REQUEST_HASH_V1_CHECKPOINT_PAYLOAD";

/** V2: canonical Luna API payload — objects serialized via buildLunaRequestPayload. */
const REQUEST_HASH_V2_CANONICAL_LUNA_PAYLOAD = "REQUEST_HASH_V2_CANONICAL_LUNA_PAYLOAD";

function buildCheckpointRequestPayload(scopeId, adapterName, batch, serialize = (obj) => obj) {
  return {
    scopeId,
    adapter: adapterName,
    objects: batch.map((obj) => serialize(obj)),
  };
}

function buildCanonicalLunaRequestPayload(scopeId, adapterName, batch) {
  return {
    scopeId,
    adapter: adapterName,
    objects: batch.map((obj) => buildLunaRequestPayload(scopeId, obj)),
  };
}

function computeRequestHashVersions(scopeId, adapterName, batch, options = {}) {
  const serialize = options.serialize || ((obj) => obj);
  const checkpointPayload = buildCheckpointRequestPayload(scopeId, adapterName, batch, serialize);
  const canonicalPayload = buildCanonicalLunaRequestPayload(scopeId, adapterName, batch);
  return {
    [REQUEST_HASH_V1_CHECKPOINT_PAYLOAD]: hashRequestInput(checkpointPayload),
    [REQUEST_HASH_V2_CANONICAL_LUNA_PAYLOAD]: hashRequestInput(canonicalPayload),
    checkpointPayloadKeys: Object.keys(checkpointPayload),
    objectCount: batch.length,
  };
}

function matchRequestInputHash(storedHash, versions) {
  const matches = [];
  for (const [version, hash] of Object.entries(versions)) {
    if (hash === storedHash) matches.push(version);
  }
  return {
    matchedVersions: matches,
    ok: matches.length > 0,
    ambiguous: matches.length > 1,
    version: matches.length === 1 ? matches[0] : null,
  };
}

function resolveExpectedRequestInputHash(expectedBatch) {
  if (!expectedBatch) return { ok: false, code: "BATCH_PLAN_MISSING" };
  if (expectedBatch.requestHashVersions) {
    const versions = {
      [REQUEST_HASH_V1_CHECKPOINT_PAYLOAD]:
        expectedBatch.requestHashVersions[REQUEST_HASH_V1_CHECKPOINT_PAYLOAD],
      [REQUEST_HASH_V2_CANONICAL_LUNA_PAYLOAD]:
        expectedBatch.requestHashVersions[REQUEST_HASH_V2_CANONICAL_LUNA_PAYLOAD],
    };
    return { ok: true, versions, primary: expectedBatch.requestInputHash };
  }
  const versions = {
    [REQUEST_HASH_V1_CHECKPOINT_PAYLOAD]: expectedBatch.requestInputHash,
  };
  if (expectedBatch.canonicalRequestInputHash) {
    versions[REQUEST_HASH_V2_CANONICAL_LUNA_PAYLOAD] = expectedBatch.canonicalRequestInputHash;
  }
  return { ok: true, versions, primary: expectedBatch.requestInputHash };
}

function validateCheckpointRequestInputHash(checkpoint, expectedBatch) {
  const stored = checkpoint?.requestInputHash;
  if (!stored) return { ok: false, issues: ["REQUEST_INPUT_HASH_MISSING"], matchedVersion: null };

  const resolved = resolveExpectedRequestInputHash(expectedBatch);
  if (!resolved.ok) return { ok: false, issues: ["BATCH_PLAN_MISSING"], matchedVersion: null };

  const match = matchRequestInputHash(stored, resolved.versions);
  if (!match.ok) {
    return { ok: false, issues: ["REQUEST_INPUT_HASH_MISMATCH"], matchedVersion: null, knownVersions: Object.keys(resolved.versions) };
  }
  if (match.ambiguous) {
    return { ok: false, issues: ["REQUEST_INPUT_HASH_AMBIGUOUS"], matchedVersion: null, matchedVersions: match.matchedVersions };
  }
  return { ok: true, issues: [], matchedVersion: match.version };
}

function extractRequestHashVersions(hashResult) {
  return {
    [REQUEST_HASH_V1_CHECKPOINT_PAYLOAD]: hashResult[REQUEST_HASH_V1_CHECKPOINT_PAYLOAD],
    [REQUEST_HASH_V2_CANONICAL_LUNA_PAYLOAD]: hashResult[REQUEST_HASH_V2_CANONICAL_LUNA_PAYLOAD],
  };
}

module.exports = {
  REQUEST_HASH_V1_CHECKPOINT_PAYLOAD,
  REQUEST_HASH_V2_CANONICAL_LUNA_PAYLOAD,
  buildCheckpointRequestPayload,
  buildCanonicalLunaRequestPayload,
  computeRequestHashVersions,
  extractRequestHashVersions,
  matchRequestInputHash,
  resolveExpectedRequestInputHash,
  validateCheckpointRequestInputHash,
};
