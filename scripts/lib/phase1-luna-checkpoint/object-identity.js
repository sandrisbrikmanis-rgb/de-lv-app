#!/usr/bin/env node
"use strict";

const path = require("path");

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

/** Map Luna response item back to legacy checkpoint id (frozen for resume). */
function resolveLegacyObjectId(item) {
  if (!item || typeof item !== "object") return "unknown";
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
};
