#!/usr/bin/env node
"use strict";

const crypto = require("crypto");
const { DEFAULT_MODEL, PHASE1_SYSTEM_PROMPT } = require("../luna-phase1-openai");
const { getBatchLimit } = require("../luna-phase1-core");
const { adapterKey } = require("../luna-orchestrator");
const {
  loadG2Objects,
  loadG1SentencesObjects,
  loadG1VerbsObjects,
  loadG1TrainingObjects,
  loadG3LessonObjects,
} = require("../luna-object-loaders");
const { hashSortedList, hashObject } = require("./hash");
const {
  SCHEMA_VERSION,
  BATCHING_CONFIG,
  manifestPath,
  runDir,
} = require("./constants");
const { writeJsonAtomic } = require("./atomic-io");

function generateRunId() {
  const ts = new Date().toISOString().replace(/[:.]/g, "-");
  const rand = crypto.randomBytes(4).toString("hex");
  return `phase1-${ts}-${rand}`;
}

function loadObjectsForScope(scope) {
  const key = adapterKey(scope.group, scope.dataset);
  if (key === "g2") return loadG2Objects(scope.lang, scope.dataset);
  if (key === "g1/sentences") return loadG1SentencesObjects(scope.lang);
  if (key === "g1/verbs") return loadG1VerbsObjects(scope.lang);
  if (key === "g1/training") return loadG1TrainingObjects(scope.lang);
  if (key === "g3/courseLessons") return loadG3LessonObjects(scope.lang);
  return [];
}

function getObjectId(obj) {
  return obj.id;
}

function computeScopeIdentity(scopes) {
  const scopeIds = scopes.map((s) => s.scopeId).sort();
  const scopeHash = hashSortedList(scopeIds);

  const objectIdEntries = [];
  for (const scope of scopes) {
    if (!scope.lunaApplicable) continue;
    const objects = loadObjectsForScope(scope);
    for (const obj of objects) {
      objectIdEntries.push(`${scope.scopeId}|${getObjectId(obj)}`);
    }
  }
  objectIdEntries.sort();
  const objectIdsHash = hashSortedList(objectIdEntries);

  return {
    expectedScopeIds: scopeIds,
    scopeHash,
    objectIdsHash,
    objectCount: objectIdEntries.length,
  };
}

function buildBatchingConfigSnapshot() {
  return { ...BATCHING_CONFIG };
}

function buildPromptSchemaHash() {
  return hashObject({
    model: DEFAULT_MODEL,
    prompt: PHASE1_SYSTEM_PROMPT,
    responseSchema: "phase1-items-array-strict",
  });
}

function createRunManifest({
  runId,
  discoveryBaselineSha,
  headSha,
  originMainSha,
  model = DEFAULT_MODEL,
  transport,
  cliScope,
  scopes,
  status = "IN_PROGRESS",
  startedAt = new Date().toISOString(),
}) {
  const identity = computeScopeIdentity(scopes);
  return {
    runId,
    schemaVersion: SCHEMA_VERSION,
    discoveryBaselineSha,
    headSha,
    originMainSha,
    model,
    transport,
    cliScope,
    expectedScopeIds: identity.expectedScopeIds,
    scopeHash: identity.scopeHash,
    objectIdsHash: identity.objectIdsHash,
    objectCount: identity.objectCount,
    batchingConfig: buildBatchingConfigSnapshot(),
    promptSchemaHash: buildPromptSchemaHash(),
    startedAt,
    status,
  };
}

function writeRunManifest(manifest) {
  const target = require("./constants").manifestPath(manifest.runId);
  writeJsonAtomic(target, manifest);
  return target;
}

function validateManifestSchema(manifest) {
  const required = [
    "runId",
    "schemaVersion",
    "discoveryBaselineSha",
    "headSha",
    "originMainSha",
    "model",
    "transport",
    "cliScope",
    "expectedScopeIds",
    "scopeHash",
    "objectIdsHash",
    "batchingConfig",
    "promptSchemaHash",
    "startedAt",
    "status",
  ];
  const missing = required.filter((key) => manifest[key] === undefined || manifest[key] === null);
  if (missing.length) return { ok: false, reason: "MANIFEST_SCHEMA_INVALID", missing };
  if (!Array.isArray(manifest.expectedScopeIds) || manifest.expectedScopeIds.length === 0) {
    return { ok: false, reason: "MANIFEST_SCHEMA_INVALID", missing: ["expectedScopeIds"] };
  }
  return { ok: true };
}

function compareManifestIdentity(manifest, expected) {
  const mismatches = [];
  const fields = [
    "discoveryBaselineSha",
    "headSha",
    "originMainSha",
    "model",
    "transport",
    "scopeHash",
    "objectIdsHash",
    "promptSchemaHash",
  ];
  for (const field of fields) {
    if (manifest[field] !== expected[field]) {
      mismatches.push({ field, expected: expected[field], actual: manifest[field] });
    }
  }
  if (expected.batchingConfig) {
    const a = JSON.stringify(manifest.batchingConfig || {});
    const b = JSON.stringify(expected.batchingConfig || {});
    if (a !== b) mismatches.push({ field: "batchingConfig", expected: b, actual: a });
  }
  if (expected.cliScope) {
    const a = JSON.stringify(manifest.cliScope || {});
    const b = JSON.stringify(expected.cliScope || {});
    if (a !== b) mismatches.push({ field: "cliScope", expected: b, actual: a });
  }
  return { ok: mismatches.length === 0, mismatches };
}

function getBatchSizeForScope(scope) {
  if (scope.group === "g2") return getBatchLimit("g2", scope.dataset);
  if (scope.group === "g1" && scope.dataset === "sentences") return getBatchLimit("g1", "sentences");
  if (scope.group === "g1" && scope.dataset === "verbs") return getBatchLimit("g1", "verbs");
  if (scope.group === "g1" && scope.dataset === "training") return getBatchLimit("g1", "training");
  if (scope.group === "g3") return getBatchLimit("g3", "courseLessons");
  return 25;
}

module.exports = {
  generateRunId,
  loadObjectsForScope,
  getObjectId,
  computeScopeIdentity,
  buildBatchingConfigSnapshot,
  buildPromptSchemaHash,
  createRunManifest,
  writeRunManifest,
  validateManifestSchema,
  compareManifestIdentity,
  getBatchSizeForScope,
};
