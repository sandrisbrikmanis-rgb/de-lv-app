#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");

const DEFAULT_DIAGNOSTICS_DIR = "/tmp/cursor/artifacts/phase1-id-recovery-diagnostics";

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
  const filePath = path.join(dir, `id-recovery-failure-${scopePart}-${stamp}.json`);
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

module.exports = {
  DEFAULT_DIAGNOSTICS_DIR,
  escapeDiagnosticString,
  buildRecoveryFailureDiagnostic,
  summarizeRecoveryFailure,
  formatShortRecoveryError,
  getDiagnosticsDir,
  writeRecoveryDiagnostics,
};
