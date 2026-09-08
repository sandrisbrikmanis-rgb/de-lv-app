#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");

const DEFAULT_DIAGNOSTICS_DIR = "/tmp/cursor/artifacts/phase1-id-recovery-diagnostics";
const G2_A1_PHASE3_ID_RECOVERY_DIR = "/tmp/cursor/artifacts/g2-a1-phase3-id-recovery";

function redactSecrets(text) {
  const key = process.env.OPENAI_API_KEY?.trim();
  if (!key || !text) return text;
  return String(text).split(key).join("[REDACTED]");
}

function parseCanonicalLunaRequestId(id) {
  if (typeof id !== "string") return null;
  const idxPos = id.indexOf("|idx:");
  if (idxPos < 0) return null;
  const scopeId = id.slice(0, idxPos);
  const rest = id.slice(idxPos + 1);
  const match = rest.match(/^idx:(\d+)\|raw:(.+)\|src:(.+)$/);
  if (!match) return null;
  return {
    scopeId,
    objectIndex: Number(match[1]),
    raw: match[2],
    sourceFile: match[3],
  };
}

function escapeDiagnosticString(value) {
  let out = "";
  const input = redactSecrets(String(value ?? ""));
  for (const ch of input) {
    const code = ch.charCodeAt(0);
    if (code < 0x20 || code === 0x7f) {
      out += `\\u${code.toString(16).padStart(4, "0")}`;
    } else if (ch === "\\") {
      out += "\\\\";
    } else {
      out += ch;
    }
  }
  return out;
}

function buildRecoveryFailureDiagnostic({
  expectedCanonicalId,
  returnedId,
  rejectionReason,
  attempt = 1,
}) {
  const expectedParsed = parseCanonicalLunaRequestId(expectedCanonicalId);
  const returnedParsed = parseCanonicalLunaRequestId(returnedId);
  return {
    classification: "BLOCKED_UNCAPTURED_RAW_VARIANT",
    expectedCanonicalId,
    returnedIdEscaped: escapeDiagnosticString(returnedId),
    parsed: expectedParsed
      ? {
          scopeId: expectedParsed.scopeId,
          objectIndex: expectedParsed.objectIndex,
          sourceFile: expectedParsed.sourceFile,
          expectedRawEscaped: escapeDiagnosticString(expectedParsed.raw),
        }
      : null,
    returnedRawEscaped: returnedParsed ? escapeDiagnosticString(returnedParsed.raw) : null,
    rejectionReason,
    attempt,
    recordedAt: new Date().toISOString(),
  };
}

function summarizeRecoveryFailure(issues = [], diagnostics = []) {
  if (issues.includes("NON_C0_RAW_CORRUPTION") || issues.includes("MISSING_OR_UNRECOVERABLE_ID")) {
    return "BLOCKED_UNCAPTURED_RAW_VARIANT";
  }
  return issues[0] || "ID_RECOVERY_FAILED";
}

function formatShortRecoveryError(issues = [], diagnostics = []) {
  const summary = summarizeRecoveryFailure(issues, diagnostics);
  return `Luna ID recovery failed: ${summary}`;
}

function getDiagnosticsDir() {
  return process.env.PHASE1_ID_RECOVERY_DIAGNOSTICS_DIR || DEFAULT_DIAGNOSTICS_DIR;
}

function writeRecoveryDiagnostics(records, context = {}) {
  if (!Array.isArray(records) || records.length === 0) return null;
  const dir = getDiagnosticsDir();
  fs.mkdirSync(dir, { recursive: true });
  const stamp = new Date().toISOString().replace(/[:.]/g, "-");
  const scopePart = String(context.scopeId || "unknown").replace(/\//g, "_");
  const attemptPart = context.attempt != null ? `-attempt-${context.attempt}` : "";
  const filePath = path.join(dir, `id-recovery-failure-${scopePart}${attemptPart}-${stamp}.json`);
  const payload = {
    schemaVersion: "1.0.0",
    scopeId: context.scopeId || null,
    batchIndex: context.batchIndex ?? null,
    attempt: context.attempt ?? null,
    records,
  };
  fs.writeFileSync(filePath, `${JSON.stringify(payload, null, 2)}\n`);
  return filePath;
}

function writeRecoveryDiagnosticsBestEffort(records, context = {}) {
  if (!Array.isArray(records) || records.length === 0) {
    return { path: null, writeError: null };
  }
  try {
    const filePath = writeRecoveryDiagnostics(records, context);
    return { path: filePath, writeError: null };
  } catch (error) {
    return { path: null, writeError: redactSecrets(error.message || String(error)) };
  }
}

function buildMissingCanonicalIdDiagnostic({
  scopeId,
  cardType = null,
  batchIndex,
  attempt,
  expectedIds = [],
  returnedCanonicalIds = [],
  missingIds = [],
  duplicateIds = [],
  unexpectedIds = [],
  itemsWithoutIdCount = 0,
  retrySubsetIds = [],
  rejectionReason,
  usage = null,
}) {
  return {
    schemaVersion: "1.0.0",
    classification: "MISSING_CANONICAL_ID_VALIDATION",
    scopeId,
    cardType,
    batchIndex,
    attempt,
    expectedItemCount: expectedIds.length,
    returnedItemCount: returnedCanonicalIds.length,
    expectedCanonicalIds: expectedIds.map(escapeDiagnosticString),
    returnedCanonicalIds: returnedCanonicalIds.map(escapeDiagnosticString),
    missingIds: missingIds.map(escapeDiagnosticString),
    duplicateIds: duplicateIds.map(escapeDiagnosticString),
    unexpectedIds: unexpectedIds.map(escapeDiagnosticString),
    itemsWithoutIdCount,
    retrySubsetIds: retrySubsetIds.map(escapeDiagnosticString),
    rejectionReason,
    usage,
    recordedAt: new Date().toISOString(),
  };
}

function getG2A1Phase3DiagnosticsDir() {
  return process.env.G2_A1_PHASE3_ID_RECOVERY_DIR || G2_A1_PHASE3_ID_RECOVERY_DIR;
}

function writeG2A1Phase3IdRecoveryDiagnostic(record) {
  if (!record || typeof record !== "object") return null;
  const dir = getG2A1Phase3DiagnosticsDir();
  fs.mkdirSync(dir, { recursive: true });
  const stamp = new Date().toISOString().replace(/[:.]/g, "-");
  const scopePart = String(record.scopeId || "unknown").replace(/[/:]/g, "_");
  const attemptPart = record.attempt != null ? `-attempt-${record.attempt}` : "";
  const filePath = path.join(dir, `missing-id-${scopePart}${attemptPart}-${stamp}.json`);
  fs.writeFileSync(filePath, `${JSON.stringify(record, null, 2)}\n`);
  return filePath;
}

function writeG2A1Phase3IdRecoveryDiagnosticBestEffort(record) {
  try {
    const filePath = writeG2A1Phase3IdRecoveryDiagnostic(record);
    return { path: filePath, writeError: null };
  } catch (error) {
    return { path: null, writeError: redactSecrets(error.message || String(error)) };
  }
}

module.exports = {
  DEFAULT_DIAGNOSTICS_DIR,
  G2_A1_PHASE3_ID_RECOVERY_DIR,
  escapeDiagnosticString,
  buildRecoveryFailureDiagnostic,
  buildMissingCanonicalIdDiagnostic,
  summarizeRecoveryFailure,
  formatShortRecoveryError,
  getDiagnosticsDir,
  getG2A1Phase3DiagnosticsDir,
  writeRecoveryDiagnostics,
  writeRecoveryDiagnosticsBestEffort,
  writeG2A1Phase3IdRecoveryDiagnostic,
  writeG2A1Phase3IdRecoveryDiagnosticBestEffort,
};
