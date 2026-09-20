#!/usr/bin/env node
"use strict";

const { AI_AUDIT_ROLE, AI_NOT_LANGUAGE_AUTHORITY, LEVEL, MASTER_AUTHORIZED_MIN } = require("./constants");
const { bindRegistryAuthorities } = require("./registry-bindings");
const { loadG2ProductionObjects } = require("./objects");

const TARGETED_PROMPT_VERSION = "g2-a1-targeted-field-level-v1";

function findCardObject(lang, cardId) {
  const objects = loadG2ProductionObjects(lang);
  return objects.find((o) => o.id === cardId || o.de === cardId) || null;
}

function buildTargetedFieldRequest(missingRow) {
  const reg = bindRegistryAuthorities(missingRow.language);
  const binding = reg.pass ? reg.binding : {};
  const card = findCardObject(missingRow.language, missingRow.cardId);
  const cardType = card?.cardType || "ordinary";

  return {
    auditRole: AI_AUDIT_ROLE,
    notLanguageAuthority: AI_NOT_LANGUAGE_AUTHORITY,
    promptVersion: TARGETED_PROMPT_VERSION,
    masterAuthorizedMin: MASTER_AUTHORIZED_MIN,
    requiredChain: "AUTHORITATIVE SOURCE → SOURCE EVIDENCE → CONTEXTUAL ANALYSIS → AUDIT VERDICT",
    forbiddenChain: "AI_INTERPRETATION → AUDIT VERDICT",
    oneResultPerFieldPath: true,
    forbidCardLevelSharedVerdict: true,
    language: missingRow.language,
    dataset: LEVEL,
    productionFile: missingRow.productionFile,
    cardId: missingRow.cardId,
    cardType,
    fieldPath: missingRow.fieldPath,
    identityKey: missingRow.identityKey,
    CURRENT: missingRow.currentValue,
    DE: card?.de || null,
    cardContext: card
      ? {
          de: card.de,
          targetHeadword: card.lv,
          study: card.study || null,
          cardType: card.cardType,
          objectIndex: card.index,
        }
      : null,
    DE_AUTHORITY: binding.DE_AUTHORITY,
    DE_SOURCE_URL: binding.DE_SOURCE_URL,
    TARGET_AUTHORITY: binding.TARGET_AUTHORITY,
    TARGET_SOURCE_URL: binding.TARGET_SOURCE_URL,
    allowedDEAuthorities: binding.DE_AUTHORITY,
    allowedTARGETAuthorities: binding.TARGET_AUTHORITY,
    cefrApplicable: missingRow.fieldPath.includes("study") || cardType !== "ordinary",
    requiredResponseFields: [
      "language",
      "dataset",
      "productionFile",
      "cardId",
      "fieldPath",
      "CURRENT",
      "DE_AUTHORITY",
      "DE_SOURCE_URL",
      "DE_SOURCE_ENTRY_OR_RULE",
      "DE_SOURCE_EVIDENCE",
      "TARGET_AUTHORITY",
      "TARGET_SOURCE_URL",
      "TARGET_SOURCE_ENTRY_OR_RULE",
      "TARGET_SOURCE_EVIDENCE",
      "CONTEXT_REASONING",
      "AUDIT_VERDICT",
    ],
  };
}

module.exports = {
  TARGETED_PROMPT_VERSION,
  buildTargetedFieldRequest,
  findCardObject,
};
