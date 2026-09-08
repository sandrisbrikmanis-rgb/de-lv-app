#!/usr/bin/env node
"use strict";

const { splitObjectsIntoBatches } = require("../phase1-luna-checkpoint/batch-split");
const { isCanonicalLunaRequestId, shouldAttemptCanonicalIdRecovery } = require("../phase1-luna-checkpoint/object-identity");
const { recoverLunaResponseItems } = require("../phase1-luna-id-recovery");
const {
  buildMissingCanonicalIdDiagnostic,
  writeG2A1Phase3IdRecoveryDiagnosticBestEffort,
} = require("../phase1-luna-id-recovery-diagnostics");

const BLOCKED_MISSING_CANONICAL_ID = "BLOCKED_MISSING_CANONICAL_ID";

function getCanonicalResponseId(item) {
  if (!item || typeof item !== "object") return null;
  return typeof item.id === "string" ? item.id : null;
}

function validateCanonicalIdSubset(batch, response, options = {}) {
  const issues = [];
  const expectedIds = batch.map((obj) => obj.id);
  const expectedSet = new Set(expectedIds);

  if (!response || typeof response !== "object") {
    return {
      ok: false,
      issues: ["MALFORMED_RESPONSE"],
      expectedIds,
      missingIds: expectedIds,
      acceptedById: new Map(),
      duplicateIds: [],
      unexpectedIds: [],
      itemsWithoutId: 0,
      returnedCanonicalIds: [],
      items: [],
    };
  }

  const itemsInput = Array.isArray(response.items) ? response.items : null;
  if (!itemsInput) {
    return {
      ok: false,
      issues: ["MALFORMED_RESPONSE"],
      expectedIds,
      missingIds: expectedIds,
      acceptedById: new Map(),
      duplicateIds: [],
      unexpectedIds: [],
      itemsWithoutId: 0,
      returnedCanonicalIds: [],
      items: [],
    };
  }

  let items = itemsInput;
  let idRecoveries = [];

  if (
    !response.idRecoveryParsedInTransport &&
    expectedIds.length > 0 &&
    expectedIds.every((id) => isCanonicalLunaRequestId(id)) &&
    shouldAttemptCanonicalIdRecovery(items, expectedIds)
  ) {
    const recovery = recoverLunaResponseItems(items, expectedIds, { attempt: options.attempt || 1 });
    if (!recovery.ok) {
      return {
        ok: false,
        issues: recovery.issues,
        expectedIds,
        missingIds: expectedIds,
        acceptedById: new Map(),
        duplicateIds: [],
        unexpectedIds: [],
        itemsWithoutId: 0,
        returnedCanonicalIds: [],
        items: [],
        idRecoveries: recovery.recoveries,
        idRecoveryDiagnostics: recovery.diagnostics,
        shortError: recovery.shortError,
      };
    }
    items = recovery.items;
    idRecoveries = recovery.recoveries;
  }

  const acceptedById = new Map();
  const returnedCanonicalIds = [];
  const duplicateIds = [];
  const unexpectedIds = [];
  let itemsWithoutId = 0;

  for (const item of items) {
    const id = getCanonicalResponseId(item);
    if (!id) {
      itemsWithoutId += 1;
      continue;
    }
    if (!expectedSet.has(id)) {
      unexpectedIds.push(id);
      continue;
    }
    if (acceptedById.has(id)) {
      duplicateIds.push(id);
      continue;
    }
    acceptedById.set(id, { ...item, id });
    returnedCanonicalIds.push(id);
  }

  const missingIds = expectedIds.filter((id) => !acceptedById.has(id));
  if (missingIds.length) issues.push("PARTIAL_RESPONSE");
  if (duplicateIds.length) issues.push("DUPLICATE_IDS");
  if (unexpectedIds.length) issues.push("UNEXPECTED_IDS");
  if (itemsWithoutId > 0) issues.push("ITEMS_WITHOUT_ID");

  const orderedItems = expectedIds.filter((id) => acceptedById.has(id)).map((id) => acceptedById.get(id));

  return {
    ok: issues.length === 0,
    issues,
    expectedIds,
    missingIds,
    acceptedById,
    duplicateIds,
    unexpectedIds,
    itemsWithoutId,
    returnedCanonicalIds,
    items: orderedItems,
    idRecoveries,
  };
}

function dedupeObjectsByCanonicalId(objects) {
  const seen = new Set();
  const out = [];
  for (const obj of objects) {
    const id = obj?.id;
    if (!id || seen.has(id)) continue;
    seen.add(id);
    out.push(obj);
  }
  return out;
}

function deterministicRetrySubBatchSize(pendingCount, attempt) {
  if (pendingCount <= 1) return 1;
  if (attempt <= 1) return pendingCount;
  return Math.max(1, Math.ceil(pendingCount / attempt));
}

function recordMissingIdDiagnostic({
  scopeId,
  cardType,
  batchIndex,
  attempt,
  validation,
  usage,
  retrySubsetIds,
  rejectionReason,
}) {
  const diagnostic = buildMissingCanonicalIdDiagnostic({
    scopeId,
    cardType,
    batchIndex,
    attempt,
    expectedIds: validation.expectedIds,
    returnedCanonicalIds: validation.returnedCanonicalIds,
    missingIds: validation.missingIds,
    duplicateIds: validation.duplicateIds,
    unexpectedIds: validation.unexpectedIds,
    itemsWithoutIdCount: validation.itemsWithoutId,
    retrySubsetIds,
    rejectionReason,
    usage,
  });
  return writeG2A1Phase3IdRecoveryDiagnosticBestEffort(diagnostic);
}

module.exports = {
  BLOCKED_MISSING_CANONICAL_ID,
  getCanonicalResponseId,
  validateCanonicalIdSubset,
  dedupeObjectsByCanonicalId,
  deterministicRetrySubBatchSize,
  splitObjectsIntoBatches,
  recordMissingIdDiagnostic,
};
