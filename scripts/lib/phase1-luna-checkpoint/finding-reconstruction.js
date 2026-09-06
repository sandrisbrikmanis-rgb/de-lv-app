#!/usr/bin/env node
"use strict";

const path = require("path");
const { mapLunaStatusToClassification, normalizeLunaItemsToFindings } = require("./findings");
const { isCanonicalLunaRequestId } = require("./object-identity");
const { parseCanonicalLunaRequestId } = require("../phase1-luna-id-recovery");
const { loadObjectsForScope, getObjectId } = require("./manifest");

const scopeLegacyLookupCache = new Map();

function scopeLookupCacheKey(scope) {
  return `${scope.scopeId}|${scope.group || ""}|${scope.dataset || ""}|${scope.lang || ""}`;
}

function buildScopeLegacyLookup(scope) {
  const cacheKey = scopeLookupCacheKey(scope);
  if (scopeLegacyLookupCache.has(cacheKey)) return scopeLegacyLookupCache.get(cacheKey);

  const objects = loadObjectsForScope(scope);
  const byLegacyId = new Map();
  objects.forEach((obj, index) => {
    const legacyId = getObjectId(obj);
    byLegacyId.set(legacyId, {
      objectIndex: obj.index ?? obj.objectIndex ?? index,
      rawCardId: obj.rawCardId || legacyId,
      productionFile: obj.productionFile ? path.basename(obj.productionFile) : null,
    });
  });
  scopeLegacyLookupCache.set(cacheKey, byLegacyId);
  return byLegacyId;
}

function clearScopeLegacyLookupCache() {
  scopeLegacyLookupCache.clear();
}

function checkpointHasFindingItems(checkpoint) {
  const items = checkpoint.rawResult?.items || [];
  return items.some((item) => mapLunaStatusToClassification(item.status || item.lunaVerdict));
}

function storedFindingsLackFullIdentity(checkpoint) {
  if (checkpointHasFindingItems(checkpoint)) return true;
  const stored = checkpoint.normalizedFindings || [];
  if (!stored.length) return false;
  return stored.some(
    (finding) =>
      finding.objectIndex == null ||
      finding.cardId === "unknown" ||
      !String(finding.findingStableId || "").includes("|idx:") ||
      String(finding.findingStableId || "").includes("idx:?|") ||
      String(finding.dedupKey || "").includes("idx:?|"),
  );
}

function enrichRawItemFromCheckpoint(item, checkpoint, scope) {
  const map = checkpoint.canonicalToLegacyIdMap || {};
  const enriched = { ...item };
  const legacyLookup = buildScopeLegacyLookup(scope);

  if (item?.id && isCanonicalLunaRequestId(item.id)) {
    const parsed = parseCanonicalLunaRequestId(item.id);
    if (!parsed) {
      return { item: enriched, recoverable: false, reason: "CANONICAL_PARSE_FAILED", canonicalId: item.id };
    }

    enriched.objectIndex = enriched.objectIndex ?? enriched.index ?? parsed.objectIndex;
    enriched.rawCardId = enriched.rawCardId ?? map[item.id] ?? parsed.raw;
    if (!enriched.productionFile && parsed.sourceFile) {
      enriched.productionFile = parsed.sourceFile;
    }
  } else if (item?.id) {
    const legacyMeta = legacyLookup.get(item.id);
    if (!legacyMeta) {
      return {
        item: enriched,
        recoverable: false,
        reason: "LEGACY_ID_UNMAPPED",
        canonicalId: item.id,
      };
    }
    enriched.objectIndex = enriched.objectIndex ?? enriched.index ?? legacyMeta.objectIndex;
    enriched.rawCardId = enriched.rawCardId ?? legacyMeta.rawCardId ?? item.id;
    if (!enriched.productionFile && legacyMeta.productionFile) {
      enriched.productionFile = legacyMeta.productionFile;
    }
  }

  if (enriched.rawCardId == null || enriched.rawCardId === "" || enriched.rawCardId === "unknown") {
    return {
      item: enriched,
      recoverable: false,
      reason: "CARD_ID_UNRECOVERABLE",
      canonicalId: item?.id || null,
    };
  }
  if (enriched.objectIndex == null || Number.isNaN(enriched.objectIndex)) {
    return {
      item: enriched,
      recoverable: false,
      reason: "OBJECT_INDEX_UNRECOVERABLE",
      canonicalId: item?.id || null,
    };
  }

  return { item: enriched, recoverable: true };
}

function reconstructFindingsFromCheckpoint(checkpoint, scope) {
  const items = checkpoint.rawResult?.items || [];
  if (!items.length) {
    return {
      findings: checkpoint.normalizedFindings || [],
      identityStatus: "STORED_ONLY",
      unrecoverable: [],
    };
  }

  const enrichedItems = [];
  const unrecoverable = [];

  for (const item of items) {
    const classificationStatus = mapLunaStatusToClassification(item.status || item.lunaVerdict);
    if (!classificationStatus) continue;

    const enriched = enrichRawItemFromCheckpoint(item, checkpoint, scope);
    if (!enriched.recoverable) {
      unrecoverable.push({
        batchId: checkpoint.batchId,
        scopeId: checkpoint.scopeId,
        canonicalId: enriched.canonicalId || item.id || null,
        reason: enriched.reason,
      });
      continue;
    }
    enrichedItems.push(enriched.item);
  }

  if (unrecoverable.length) {
    return {
      findings: [],
      identityStatus: "CHECKPOINT_FINDING_IDENTITY_UNRECOVERABLE",
      unrecoverable,
    };
  }

  const productionFile =
    enrichedItems.find((item) => item.productionFile)?.productionFile ||
    checkpoint.productionFile ||
    null;

  const findings = normalizeLunaItemsToFindings(enrichedItems, scope, { productionFile });
  return {
    findings,
    identityStatus: "RECONSTRUCTED",
    unrecoverable: [],
  };
}

function getCheckpointFindings(checkpoint, scope) {
  if (!checkpointHasFindingItems(checkpoint) && !storedFindingsLackFullIdentity(checkpoint)) {
    return {
      findings: checkpoint.normalizedFindings || [],
      identityStatus: "STORED_COMPLETE",
      unrecoverable: [],
    };
  }
  if (!checkpointHasFindingItems(checkpoint)) {
    return {
      findings: checkpoint.normalizedFindings || [],
      identityStatus: "STORED_ONLY",
      unrecoverable: [],
    };
  }
  return reconstructFindingsFromCheckpoint(checkpoint, scope);
}

module.exports = {
  buildScopeLegacyLookup,
  clearScopeLegacyLookupCache,
  storedFindingsLackFullIdentity,
  enrichRawItemFromCheckpoint,
  reconstructFindingsFromCheckpoint,
  getCheckpointFindings,
};
