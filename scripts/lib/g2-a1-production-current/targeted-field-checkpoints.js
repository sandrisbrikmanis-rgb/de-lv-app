#!/usr/bin/env node
"use strict";

const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const { ROOT } = require("../audit-common");

const TARGETED_RAW_CHECKPOINT_ROOT = path.join(
  ROOT,
  "reports/temp/g2-a1-production-current/targeted-field-luna-raw-checkpoints",
);

const { OFFICIAL_SOURCE_ACCESS_VERSION } = require("./official-source-access-constants");

function batchFileStem(batchId, sourceAccessVersion) {
  const safeBatch = batchId.replace(/[/\\:]/g, "_");
  if (sourceAccessVersion && sourceAccessVersion === OFFICIAL_SOURCE_ACCESS_VERSION) {
    return `${safeBatch}.${sourceAccessVersion}`;
  }
  return safeBatch;
}

function sha256Text(text) {
  return crypto.createHash("sha256").update(text, "utf8").digest("hex");
}

function checkpointPath(lang, batchId, sourceAccessVersion = null) {
  const stem = batchFileStem(batchId, sourceAccessVersion);
  return path.join(TARGETED_RAW_CHECKPOINT_ROOT, lang, `${stem}.luna-raw.json`);
}

function verifiedCheckpointPath(lang, batchId, sourceAccessVersion = null) {
  const stem = batchFileStem(batchId, sourceAccessVersion);
  return path.join(TARGETED_RAW_CHECKPOINT_ROOT, lang, `${stem}.luna-verified.json`);
}

function loadRawCheckpoint(lang, batchId, auditBaselineSha, sourceAccessVersion = null) {
  const p = checkpointPath(lang, batchId, sourceAccessVersion);
  if (!fs.existsSync(p)) return null;
  try {
    const payload = JSON.parse(fs.readFileSync(p, "utf8"));
    if (payload.auditBaselineSha && payload.auditBaselineSha !== auditBaselineSha) return null;
    return payload;
  } catch {
    return null;
  }
}

function loadVerifiedCheckpoint(lang, batchId, auditBaselineSha, sourceAccessVersion = null) {
  const p = verifiedCheckpointPath(lang, batchId, sourceAccessVersion);
  if (!fs.existsSync(p)) return null;
  try {
    const payload = JSON.parse(fs.readFileSync(p, "utf8"));
    if (payload.auditBaselineSha && payload.auditBaselineSha !== auditBaselineSha) return null;
    return payload;
  } catch {
    return null;
  }
}

function saveRawCheckpoint(payload, options = {}) {
  const version = payload.sourceAccessVersion || null;
  if (options.dryRun) return { saved: false, path: checkpointPath(payload.language, payload.batchId, version) };
  const p = checkpointPath(payload.language, payload.batchId, version);
  if (fs.existsSync(p)) {
    return { saved: false, skipped: true, reason: "RAW_CHECKPOINT_IMMUTABLE", path: p };
  }
  fs.mkdirSync(path.dirname(p), { recursive: true });
  const text = `${JSON.stringify(payload, null, 2)}\n`;
  fs.writeFileSync(p, text, "utf8");
  return { saved: true, path: p, rawResponseSha256: payload.rawResponseSha256 || sha256Text(text) };
}

function saveVerifiedCheckpoint(payload) {
  const version = payload.sourceAccessVersion || null;
  const p = verifiedCheckpointPath(payload.language, payload.batchId, version);
  if (fs.existsSync(p)) {
    return { saved: false, skipped: true, reason: "VERIFIED_CHECKPOINT_EXISTS", path: p };
  }
  fs.mkdirSync(path.dirname(p), { recursive: true });
  const text = `${JSON.stringify(payload, null, 2)}\n`;
  fs.writeFileSync(p, text, "utf8");
  return { saved: true, path: p, sha256: sha256Text(text) };
}

function buildCheckpointEnvelope(meta, rawResponse) {
  const rawText = typeof rawResponse === "string" ? rawResponse : JSON.stringify(rawResponse);
  return {
    ...meta,
    rawResponse,
    rawResponseSha256: sha256Text(rawText),
    savedAt: new Date().toISOString(),
    completionStatus: meta.completionStatus || "COMPLETE",
  };
}

module.exports = {
  TARGETED_RAW_CHECKPOINT_ROOT,
  checkpointPath,
  verifiedCheckpointPath,
  loadRawCheckpoint,
  loadVerifiedCheckpoint,
  saveRawCheckpoint,
  saveVerifiedCheckpoint,
  buildCheckpointEnvelope,
  sha256Text,
};
