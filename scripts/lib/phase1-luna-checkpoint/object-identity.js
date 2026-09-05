#!/usr/bin/env node
"use strict";

const path = require("path");
const {
  recoverLunaResponseItems,
  parseCanonicalLunaRequestId,
  containsC0ControlChars,
  resolveItemId,
} = require("../phase1-luna-id-recovery");

/**
 * Legacy Luna/checkpoint object id (frozen for RUN_ID resume compatibility).
 * Uses raw card id from loader — may collide when DE headword repeats (e.g. Gehalt).
 */
function getLegacyObjectId(obj) {
  if (!obj || typeof obj !== "object") return "unknown";
  return obj.id || obj.de || obj.study?.id || `index-${obj.index ?? 0}`;
}

function getRawCardId(obj) {
  if (!obj || typeof obj !== "object") return "unknown";
  return obj.rawCardId || obj.cardId || obj.id || obj.de || obj.study?.id || `index-${obj.index ?? 0}`;
}

/**
 * Deterministic canonical Luna request id — unique per object position in scope.
 * Raw card id is preserved separately for OWNER findings.
 */
function buildLunaRequestId(scopeId, obj) {
  const rawCardId = getRawCardId(obj);
  const index = obj.index ?? obj.objectIndex ?? 0;
  const sourceFile = obj.productionFile ? path.basename(obj.productionFile) : "unknown";
  return `${scopeId}|idx:${index}|raw:${rawCardId}|src:${sourceFile}`;
}

function buildLunaRequestPayload(scopeId, obj) {
  const rawCardId = getRawCardId(obj);
  return {
    ...obj,
    id: buildLunaRequestId(scopeId, obj),
    rawCardId,
    cardId: rawCardId,
    objectIndex: obj.index ?? obj.objectIndex ?? 0,
  };
}

function resolveLunaResponseId(item) {
  if (!item || typeof item !== "object") return null;
  return item.id || item.cardId || item.objectId || null;
}

function isCanonicalLunaRequestId(id) {
  return typeof id === "string" && id.includes("|idx:") && id.includes("|raw:");
}

/**
 * Build deterministic canonical Luna request id → legacy checkpoint id map for one batch.
 */
function buildCanonicalToLegacyIdMap(scopeId, objects, getLegacyId = getLegacyObjectId) {
  const map = new Map();
  const orderedCanonicalIds = [];
  for (const obj of objects) {
    const canonicalId = buildLunaRequestId(scopeId, obj);
    if (map.has(canonicalId)) {
      return {
        ok: false,
        issues: ["DUPLICATE_CANONICAL_ID_IN_BATCH"],
        map,
        orderedCanonicalIds,
      };
    }
    map.set(canonicalId, getLegacyId(obj));
    orderedCanonicalIds.push(canonicalId);
  }
  return { ok: true, issues: [], map, orderedCanonicalIds };
}

function shouldAttemptCanonicalIdRecovery(items, orderedCanonicalIds) {
  if (!Array.isArray(items) || items.length !== orderedCanonicalIds.length) return false;
  const expectedSet = new Set(orderedCanonicalIds);
  const returnedIds = items.map((item) => resolveItemId(item)).filter(Boolean);
  if (returnedIds.length !== orderedCanonicalIds.length) return false;
  if (returnedIds.every((id) => expectedSet.has(id))) return false;
  return returnedIds.some((id) => {
    if (expectedSet.has(id)) return false;
    const parsed = parseCanonicalLunaRequestId(id);
    return parsed && containsC0ControlChars(parsed.raw);
  });
}

/**
 * Map Luna strict response items to legacy checkpoint ids in expected batch order.
 * Does not rely on rawCardId/cardId/de in the response.
 */
function mapResponseItemsToLegacyIds(items, idMap, orderedCanonicalIds) {
  const issues = [];
  if (!Array.isArray(items)) {
    return { ok: false, issues: ["MALFORMED_RAW_RESULT"], legacyIds: [] };
  }

  let recoveredItems = items;
  let idRecoveries = [];
  if (shouldAttemptCanonicalIdRecovery(items, orderedCanonicalIds)) {
    const recovery = recoverLunaResponseItems(items, orderedCanonicalIds);
    idRecoveries = recovery.recoveries;
    if (!recovery.ok) {
      return {
        ok: false,
        issues: recovery.issues,
        legacyIds: [],
        idRecoveries: recovery.recoveries,
      };
    }
    recoveredItems = recovery.items;
  }

  const itemsByCanonical = new Map();
  for (const item of recoveredItems) {
    const canonicalId = resolveLunaResponseId(item);
    if (!canonicalId) {
      issues.push("MISSING_CANONICAL_ID");
      continue;
    }
    if (itemsByCanonical.has(canonicalId)) {
      issues.push("DUPLICATE_CANONICAL_ID");
      continue;
    }
    if (!idMap.has(canonicalId)) {
      issues.push("UNKNOWN_CANONICAL_ID");
      continue;
    }
    itemsByCanonical.set(canonicalId, item);
  }

  const legacyIds = [];
  for (const canonicalId of orderedCanonicalIds) {
    if (!itemsByCanonical.has(canonicalId)) {
      issues.push("MISSING_CANONICAL_ID");
      break;
    }
    legacyIds.push(idMap.get(canonicalId));
  }

  if (itemsByCanonical.size !== orderedCanonicalIds.length) {
    issues.push("UNEXPECTED_CANONICAL_ID");
  }

  const uniqueIssues = [...new Set(issues)];
  return {
    ok: uniqueIssues.length === 0 && legacyIds.length === orderedCanonicalIds.length,
    issues: uniqueIssues,
    legacyIds,
    itemsByCanonical,
    idRecoveries,
  };
}

/** Map Luna response item back to legacy checkpoint id (frozen for resume). */
function resolveLegacyObjectId(item, idMap = null) {
  if (!item || typeof item !== "object") return "unknown";
  const canonicalId = resolveLunaResponseId(item);
  if (canonicalId && idMap?.has(canonicalId)) {
    return idMap.get(canonicalId);
  }
  if (item.rawCardId) return item.rawCardId;
  if (item.cardId && !isCanonicalLunaRequestId(item.cardId)) return item.cardId;
  if (item.id && !isCanonicalLunaRequestId(item.id)) return item.id;
  return item.de || item.study?.id || "unknown";
}

module.exports = {
  getLegacyObjectId,
  getRawCardId,
  buildLunaRequestId,
  buildLunaRequestPayload,
  resolveLunaResponseId,
  resolveLegacyObjectId,
  isCanonicalLunaRequestId,
  buildCanonicalToLegacyIdMap,
  shouldAttemptCanonicalIdRecovery,
  mapResponseItemsToLegacyIds,
};
