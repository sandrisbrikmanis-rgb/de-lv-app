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
  "r-auth-005-pid-327971-untrusted-checkpoints.json",
);

let cachedRegistry = null;
let fixturePathOverride = null;

function resolveFixturePath(fixturePath) {
  if (fixturePath) return fixturePath;
  if (fixturePathOverride) return fixturePathOverride;
  return FIXTURE_PATH;
}

function setUntrustedCheckpointRegistryFixtureForTests(fixturePath) {
  fixturePathOverride = fixturePath;
  resetUntrustedCheckpointRegistryCache();
}

function clearUntrustedCheckpointRegistryFixtureForTests() {
  fixturePathOverride = null;
  resetUntrustedCheckpointRegistryCache();
}

function loadUntrustedCheckpointRegistry(fixturePath) {
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
  const sha256Set = new Set(entries.map((entry) => entry.sha256));
  const entriesBySha = new Map(entries.map((entry) => [entry.sha256, entry]));
  cachedRegistry = {
    fixturePath: resolvedPath,
    classification: parsed.classification || "UNTRUSTED_LOCAL_PATCH_RUN",
    sourcePid: parsed.sourcePid || null,
    entries,
    sha256Set,
    entriesBySha,
  };
  return cachedRegistry;
}

function sha256File(filePath) {
  const content = fs.readFileSync(filePath);
  return crypto.createHash("sha256").update(content).digest("hex");
}

function sha256Content(content) {
  return crypto.createHash("sha256").update(content).digest("hex");
}

/**
 * R-CKPT-003: UNTRUSTED_LOCAL_PATCH_RUN only when on-disk bytes match a registered SHA-256.
 * batchId/scopeId alone must never poison reruns.
 */
function isUntrustedLocalPatchCheckpoint(filePath, context = {}) {
  if (!filePath || typeof filePath !== "string") return false;
  const absPath = path.isAbsolute(filePath) ? filePath : path.join(ROOT, filePath);
  if (!fs.existsSync(absPath)) return false;

  let hash;
  try {
    hash = sha256File(absPath);
  } catch {
    return false;
  }

  const registry = loadUntrustedCheckpointRegistry();
  const entry = registry.entriesBySha.get(hash);
  if (!entry) return false;

  if (context.scopeId && entry.scopeId !== context.scopeId) return false;
  if (context.batchId && entry.batchId !== context.batchId) return false;

  return true;
}

function classifyUntrustedCheckpoint(filePath, context = {}) {
  if (isUntrustedLocalPatchCheckpoint(filePath, context)) {
    return "UNTRUSTED_LOCAL_PATCH_RUN";
  }
  return null;
}

function resetUntrustedCheckpointRegistryCache() {
  cachedRegistry = null;
}

module.exports = {
  FIXTURE_PATH,
  loadUntrustedCheckpointRegistry,
  isUntrustedLocalPatchCheckpoint,
  classifyUntrustedCheckpoint,
  sha256File,
  sha256Content,
  resetUntrustedCheckpointRegistryCache,
  setUntrustedCheckpointRegistryFixtureForTests,
  clearUntrustedCheckpointRegistryFixtureForTests,
};
