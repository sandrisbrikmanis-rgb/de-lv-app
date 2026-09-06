#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const { ROOT } = require("./audit-common");

const FIXTURE_PATH = path.join(
  ROOT,
  "scripts",
  "fixtures",
  "r-ckpt-004-pid-1491461-untrusted-id-mapping-checkpoints.json",
);

let cachedRegistry = null;
let fixturePathOverride = null;

function resolveFixturePath(fixturePath) {
  if (fixturePath) return fixturePath;
  if (fixturePathOverride) return fixturePathOverride;
  return FIXTURE_PATH;
}

function setIdMappingCheckpointRegistryFixtureForTests(fixturePath) {
  fixturePathOverride = fixturePath;
  resetIdMappingCheckpointRegistryCache();
}

function clearIdMappingCheckpointRegistryFixtureForTests() {
  fixturePathOverride = null;
  resetIdMappingCheckpointRegistryCache();
}

function loadIdMappingCheckpointRegistry(fixturePath) {
  const resolvedPath = resolveFixturePath(fixturePath);
  if (cachedRegistry && cachedRegistry.fixturePath === resolvedPath) {
    return cachedRegistry;
  }
  if (!fs.existsSync(resolvedPath)) {
    cachedRegistry = { fixturePath: resolvedPath, sha256Set: new Set(), entries: [], entriesBySha: new Map() };
    return cachedRegistry;
  }
  const parsed = JSON.parse(fs.readFileSync(resolvedPath, "utf8"));
  const entries = parsed.entries || [];
  cachedRegistry = {
    fixturePath: resolvedPath,
    classification: parsed.classification || "UNTRUSTED_ID_MAPPING_RUN",
    sourcePid: parsed.sourcePid || null,
    entries,
    sha256Set: new Set(entries.map((entry) => entry.sha256)),
    entriesBySha: new Map(entries.map((entry) => [entry.sha256, entry])),
  };
  return cachedRegistry;
}

function sha256File(filePath) {
  const content = fs.readFileSync(filePath);
  return crypto.createHash("sha256").update(content).digest("hex");
}

function isUntrustedIdMappingCheckpoint(filePath, context = {}) {
  if (!filePath || typeof filePath !== "string") return false;
  const absPath = path.isAbsolute(filePath) ? filePath : path.join(ROOT, filePath);
  if (!fs.existsSync(absPath)) return false;

  let hash;
  try {
    hash = sha256File(absPath);
  } catch {
    return false;
  }

  const registry = loadIdMappingCheckpointRegistry();
  const entry = registry.entriesBySha.get(hash);
  if (!entry) return false;
  if (context.scopeId && entry.scopeId !== context.scopeId) return false;
  if (context.batchId && entry.batchId !== context.batchId) return false;
  return true;
}

function resetIdMappingCheckpointRegistryCache() {
  cachedRegistry = null;
}

module.exports = {
  FIXTURE_PATH,
  loadIdMappingCheckpointRegistry,
  isUntrustedIdMappingCheckpoint,
  sha256File,
  resetIdMappingCheckpointRegistryCache,
  setIdMappingCheckpointRegistryFixtureForTests,
  clearIdMappingCheckpointRegistryFixtureForTests,
};
