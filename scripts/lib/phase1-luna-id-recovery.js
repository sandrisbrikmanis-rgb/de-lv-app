#!/usr/bin/env node
"use strict";

const C0_CONTROL_RE = /[\u0000-\u001F\u007F]/;
const recoveryFixture = require("../fixtures/phase1-id-recovery-lb-sq.json");
const {
  isLandlichStructuralTarget,
  evaluateLandlichStructuralSegment,
  isLandlichStructuralC0Recovery,
} = require("./phase1-luna-id-recovery-landlich");
const {
  buildRecoveryFailureDiagnostic,
  formatShortRecoveryError,
} = require("./phase1-luna-id-recovery-diagnostics");

function stripC0ControlChars(value) {
  return String(value || "").replace(C0_CONTROL_RE, "");
}

function buildObservedRawCorruptionAllowlist() {
  const allowlist = new Map();
  const register = (canonicalId, mutatedId) => {
    const expectedParsed = parseCanonicalLunaRequestId(canonicalId);
    const returnedParsed = parseCanonicalLunaRequestId(mutatedId);
    if (!expectedParsed || !returnedParsed) return;
    const key = `${buildIdentityKey(expectedParsed)}|${expectedParsed.raw}`;
    if (!allowlist.has(key)) allowlist.set(key, new Set());
    allowlist.get(key).add(returnedParsed.raw);
  };

  register(recoveryFixture.landlichSqExactId, recoveryFixture.landlichSqMutationIdA);
  register(recoveryFixture.landlichSqExactId, recoveryFixture.landlichSqMutationIdB);

  return allowlist;
}

const OBSERVED_RAW_CORRUPTION_ALLOWLIST = buildObservedRawCorruptionAllowlist();

function containsC0ControlChars(value) {
  return C0_CONTROL_RE.test(String(value || ""));
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

function buildIdentityKey({ scopeId, objectIndex, sourceFile }) {
  return `${scopeId}|idx:${objectIndex}|src:${sourceFile}`;
}

function buildIdentityIndex(expectedIds) {
  const index = new Map();
  for (const expectedId of expectedIds) {
    const parsed = parseCanonicalLunaRequestId(expectedId);
    if (!parsed) continue;
    const key = buildIdentityKey(parsed);
    if (!index.has(key)) index.set(key, []);
    index.get(key).push({ expectedId, parsed });
  }
  return index;
}

function isC0InsertionOnlyCorruption(expectedRaw, returnedRaw) {
  if (!containsC0ControlChars(returnedRaw) || returnedRaw === expectedRaw) return false;
  let expectedIndex = 0;
  for (const ch of returnedRaw) {
    if (C0_CONTROL_RE.test(ch)) continue;
    if (expectedIndex >= expectedRaw.length || ch !== expectedRaw[expectedIndex]) {
      return false;
    }
    expectedIndex += 1;
  }
  return expectedIndex === expectedRaw.length;
}

function isAllowlistedRawCorruption(expectedParsed, returnedRaw) {
  const key = `${buildIdentityKey(expectedParsed)}|${expectedParsed.raw}`;
  const allowed = OBSERVED_RAW_CORRUPTION_ALLOWLIST.get(key);
  return Boolean(allowed && allowed.has(returnedRaw));
}

function evaluateRawCorruptionRecovery(expectedParsed, returnedRaw) {
  if (!expectedParsed || typeof returnedRaw !== "string") {
    return { ok: false, reason: "INVALID_INPUT" };
  }
  const expectedRaw = expectedParsed.raw;
  if (expectedRaw === returnedRaw) {
    return { ok: false, reason: "EXACT_RAW_MATCH" };
  }

  if (isLandlichStructuralTarget(expectedParsed)) {
    return evaluateLandlichStructuralSegment(returnedRaw);
  }

  if (isAllowlistedRawCorruption(expectedParsed, returnedRaw)) {
    return { ok: true, reason: "ALLOWLISTED_RAW_CORRUPTION" };
  }

  if (isC0InsertionOnlyCorruption(expectedRaw, returnedRaw)) {
    return { ok: true, reason: "C0_INSERTION_ONLY_CORRUPTION" };
  }

  return { ok: false, reason: "NON_C0_RAW_CORRUPTION" };
}

function isOnlyC0RawSegmentCorruption(expectedParsed, returnedRaw) {
  return evaluateRawCorruptionRecovery(expectedParsed, returnedRaw).ok;
}

function resolveItemId(item) {
  if (!item || typeof item !== "object") return null;
  return item.id || item.cardId || item.objectId || null;
}

/**
 * Recover corrupted Luna response IDs by unique scopeId + objectIndex + sourceFile identity.
 * Fail-closed unless C0-control corruption is present in the returned raw segment.
 */
function recoverLunaResponseItems(items, expectedIds, options = {}) {
  const recoveries = [];
  const issues = [];
  const diagnostics = [];
  const attempt = options.attempt || 1;

  if (!Array.isArray(items)) {
    return { ok: false, items: [], recoveries, issues: ["MALFORMED_ITEMS"], diagnostics };
  }
  if (!Array.isArray(expectedIds) || expectedIds.length === 0) {
    return { ok: false, items: [], recoveries, issues: ["MISSING_EXPECTED_IDS"], diagnostics };
  }
  if (items.length !== expectedIds.length) {
    return { ok: false, items, recoveries, issues: ["COUNT_MISMATCH"], diagnostics };
  }

  const identityIndex = buildIdentityIndex(expectedIds);
  const itemsByReturnedId = new Map();

  for (const item of items) {
    const returnedId = resolveItemId(item);
    if (!returnedId) {
      issues.push("MISSING_RETURNED_ID");
      continue;
    }
    if (itemsByReturnedId.has(returnedId)) {
      issues.push("DUPLICATE_RETURNED_ID");
    }
    itemsByReturnedId.set(returnedId, item);
  }
  if (issues.length) {
    return { ok: false, items, recoveries, issues: [...new Set(issues)], diagnostics };
  }

  const resultByExpected = new Map();
  const consumedReturnedIds = new Set();

  for (const expectedId of expectedIds) {
    if (!itemsByReturnedId.has(expectedId)) continue;
    resultByExpected.set(expectedId, { ...itemsByReturnedId.get(expectedId), id: expectedId });
    consumedReturnedIds.add(expectedId);
  }

  for (const expectedId of expectedIds) {
    if (resultByExpected.has(expectedId)) continue;

    const expectedParsed = parseCanonicalLunaRequestId(expectedId);
    if (!expectedParsed) {
      issues.push("UNPARSEABLE_EXPECTED_ID");
      continue;
    }

    const identityKey = buildIdentityKey(expectedParsed);
    const identityCandidates = identityIndex.get(identityKey) || [];
    if (identityCandidates.length !== 1 || identityCandidates[0].expectedId !== expectedId) {
      issues.push("AMBIGUOUS_IDENTITY");
      continue;
    }

    let matchedItem = null;
    let matchedReturnedId = null;

    for (const [returnedId, item] of itemsByReturnedId.entries()) {
      if (consumedReturnedIds.has(returnedId)) continue;
      const returnedParsed = parseCanonicalLunaRequestId(returnedId);
      if (!returnedParsed) continue;
      if (buildIdentityKey(returnedParsed) !== identityKey) continue;
      if (returnedId === expectedId) continue;

      const evaluation = evaluateRawCorruptionRecovery(expectedParsed, returnedParsed.raw);
      if (!evaluation.ok) {
        issues.push(evaluation.reason === "NON_C0_RAW_CORRUPTION" ? "NON_C0_RAW_CORRUPTION" : "RAW_RECOVERY_REJECTED");
        diagnostics.push(
          buildRecoveryFailureDiagnostic({
            expectedCanonicalId: expectedId,
            returnedId,
            rejectionReason: evaluation.reason,
            attempt,
          }),
        );
        continue;
      }

      if (matchedItem) {
        issues.push("AMBIGUOUS_IDENTITY");
        matchedItem = null;
        matchedReturnedId = null;
        break;
      }
      matchedItem = item;
      matchedReturnedId = returnedId;
    }

    if (!matchedItem) {
      issues.push("MISSING_OR_UNRECOVERABLE_ID");
      continue;
    }

    consumedReturnedIds.add(matchedReturnedId);
    resultByExpected.set(expectedId, { ...matchedItem, id: expectedId });
    const evaluation = evaluateRawCorruptionRecovery(
      expectedParsed,
      parseCanonicalLunaRequestId(matchedReturnedId).raw,
    );
    recoveries.push({
      returnedId: matchedReturnedId,
      canonicalId: expectedId,
      reason: evaluation.reason || "C0_CONTROL_RAW_SEGMENT_CORRUPTION",
      identityKey,
      identity: {
        scopeId: expectedParsed.scopeId,
        objectIndex: expectedParsed.objectIndex,
        sourceFile: expectedParsed.sourceFile,
      },
    });
  }

  for (const returnedId of itemsByReturnedId.keys()) {
    if (!consumedReturnedIds.has(returnedId)) {
      issues.push("UNEXPECTED_RETURNED_ID");
      const orphanParsed = parseCanonicalLunaRequestId(returnedId);
      if (orphanParsed) {
        diagnostics.push(
          buildRecoveryFailureDiagnostic({
            expectedCanonicalId: expectedIds.find((id) => {
              const parsed = parseCanonicalLunaRequestId(id);
              return parsed && buildIdentityKey(parsed) === buildIdentityKey(orphanParsed);
            }) || expectedIds[0],
            returnedId,
            rejectionReason: "UNEXPECTED_RETURNED_ID",
            attempt,
          }),
        );
      }
    }
  }

  if (issues.length) {
    return {
      ok: false,
      items,
      recoveries,
      issues: [...new Set(issues)],
      diagnostics,
      shortError: formatShortRecoveryError([...new Set(issues)], diagnostics),
    };
  }

  const normalized = expectedIds.map((expectedId) => resultByExpected.get(expectedId));
  return { ok: true, items: normalized, recoveries, issues: [], diagnostics };
}

module.exports = {
  C0_CONTROL_RE,
  containsC0ControlChars,
  stripC0ControlChars,
  parseCanonicalLunaRequestId,
  buildIdentityKey,
  buildIdentityIndex,
  isC0InsertionOnlyCorruption,
  isAllowlistedRawCorruption,
  isLandlichStructuralC0Recovery,
  evaluateRawCorruptionRecovery,
  isOnlyC0RawSegmentCorruption,
  recoverLunaResponseItems,
  resolveItemId,
  OBSERVED_RAW_CORRUPTION_ALLOWLIST,
};
