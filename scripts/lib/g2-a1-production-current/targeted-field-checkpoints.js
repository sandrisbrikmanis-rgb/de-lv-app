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

function sha256Text(text) {
  return crypto.createHash("sha256").update(text, "utf8").digest("hex");
}

function checkpointPath(lang, batchId) {
  const safeBatch = batchId.replace(/[/\\:]/g, "_");
  return path.join(TARGETED_RAW_CHECKPOINT_ROOT, lang, `${safeBatch}.luna-raw.json`);
}

function loadRawCheckpoint(lang, batchId, auditBaselineSha) {
  const p = checkpointPath(lang, batchId);
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
  if (options.dryRun) return { saved: false, path: checkpointPath(payload.language, payload.batchId) };
  const p = checkpointPath(payload.language, payload.batchId);
  if (fs.existsSync(p) && !options.overwrite) {
    return { saved: false, skipped: true, reason: "CHECKPOINT_EXISTS", path: p };
  }
  fs.mkdirSync(path.dirname(p), { recursive: true });
  const text = `${JSON.stringify(payload, null, 2)}\n`;
  fs.writeFileSync(p, text, "utf8");
  return { saved: true, path: p, rawResponseSha256: payload.rawResponseSha256 || sha256Text(text) };
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
  loadRawCheckpoint,
  saveRawCheckpoint,
  buildCheckpointEnvelope,
  sha256Text,
};
