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

function loadUntrustedCheckpointRegistry(fixturePath = FIXTURE_PATH) {
  if (cachedRegistry && cachedRegistry.fixturePath === fixturePath) {
    return cachedRegistry;
  }
  if (!fs.existsSync(fixturePath)) {
    cachedRegistry = { fixturePath, sha256Set: new Set(), entries: [] };
    return cachedRegistry;
  }
  const parsed = JSON.parse(fs.readFileSync(fixturePath, "utf8"));
  const entries = parsed.entries || [];
  const sha256Set = new Set(entries.map((entry) => entry.sha256));
  cachedRegistry = {
    fixturePath,
    classification: parsed.classification || "UNTRUSTED_LOCAL_PATCH_RUN",
    sourcePid: parsed.sourcePid || null,
    entries,
    sha256Set,
  };
  return cachedRegistry;
}

function sha256File(filePath) {
  const content = fs.readFileSync(filePath);
  return crypto.createHash("sha256").update(content).digest("hex");
}

function isUntrustedLocalPatchCheckpoint(fileOrCheckpoint, scopeId = null) {
  const registry = loadUntrustedCheckpointRegistry();
  if (typeof fileOrCheckpoint === "string") {
    if (!fs.existsSync(fileOrCheckpoint)) return false;
    try {
      return registry.sha256Set.has(sha256File(fileOrCheckpoint));
    } catch {
      return false;
    }
  }
  const checkpoint = fileOrCheckpoint;
  if (!checkpoint || typeof checkpoint !== "object") return false;
  return registry.entries.some(
    (entry) =>
      entry.batchId === checkpoint.batchId &&
      (!scopeId || entry.scopeId === scopeId || entry.scopeId === checkpoint.scopeId),
  );
}

function classifyUntrustedCheckpoint(fileOrCheckpoint, scopeId = null) {
  if (isUntrustedLocalPatchCheckpoint(fileOrCheckpoint, scopeId)) {
    return "UNTRUSTED_LOCAL_PATCH_RUN";
  }
  return null;
}

module.exports = {
  FIXTURE_PATH,
  loadUntrustedCheckpointRegistry,
  isUntrustedLocalPatchCheckpoint,
  classifyUntrustedCheckpoint,
  sha256File,
};
