#!/usr/bin/env node
"use strict";

const { splitObjectsIntoBatches } = require("../phase1-luna-checkpoint/batch-split");
const { G2_A1_BATCH_LIMITS } = require("./constants");
const { loadG2ProductionObjects, splitObjectsByCardType, getBatchSizeForCardType } = require("./objects");
const { buildTargetedFieldRequest } = require("./targeted-field-payload");

function groupMissingRowsByCard(missingRows) {
  const byLangCard = new Map();
  for (const row of missingRows) {
    const key = `${row.language}|${row.cardId}`;
    if (!byLangCard.has(key)) byLangCard.set(key, []);
    byLangCard.get(key).push(row);
  }
  return byLangCard;
}

function buildTargetedBatchPlan(missingRows) {
  const byLangCard = groupMissingRowsByCard(missingRows);
  const batches = [];
  const cardTypes = { ordinary: 0, minimalStudy: 0, standardStudy: 0, comparisonStudy: 0 };
  let duplicateIdentities = 0;
  const seen = new Set();

  for (const lang of [...new Set(missingRows.map((r) => r.language))].sort()) {
    const objects = loadG2ProductionObjects(lang);
    const objById = new Map(objects.map((o) => [o.id, o]));
    const cardsWithMissing = [];
    for (const [key, rows] of byLangCard) {
      if (!key.startsWith(`${lang}|`)) continue;
      const cardId = key.split("|")[1];
      const obj = objById.get(cardId);
      if (!obj) continue;
      cardsWithMissing.push({ obj, missingRows: rows });
    }

    const groups = { ordinary: [], minimalStudy: [], standardStudy: [], comparisonStudy: [] };
    for (const entry of cardsWithMissing) {
      const t = entry.obj.cardType || "ordinary";
      if (groups[t]) groups[t].push(entry);
      else groups.ordinary.push(entry);
      cardTypes[t] = (cardTypes[t] || 0) + 1;
    }

    for (const [cardType, entries] of Object.entries(groups)) {
      if (!entries.length) continue;
      const limitKey = cardType === "comparisonStudy" ? "standardStudy" : cardType;
      const batchSize = getBatchSizeForCardType(cardType === "comparisonStudy" ? "standardStudy" : cardType);
      const maxAllowed =
        cardType === "comparisonStudy"
          ? G2_A1_BATCH_LIMITS.comparisonStudyUsesStandardStudyLimit
          : G2_A1_BATCH_LIMITS[limitKey] || G2_A1_BATCH_LIMITS.ordinary;
      if (batchSize !== maxAllowed) {
        return { pass: false, error: "BATCH_LIMIT_MISMATCH", cardType, batchSize, maxAllowed };
      }
      const objectList = entries.map((e) => e.obj);
      const subBatches = splitObjectsIntoBatches(objectList, batchSize);
      for (let batchIndex = 0; batchIndex < subBatches.length; batchIndex++) {
        const cardBatch = subBatches[batchIndex];
        const fieldRows = [];
        const fieldRequests = [];
        for (const obj of cardBatch) {
          const entry = entries.find((e) => e.obj.id === obj.id);
          for (const row of entry.missingRows) {
            if (seen.has(row.identityKey)) duplicateIdentities += 1;
            seen.add(row.identityKey);
            fieldRows.push(row);
            fieldRequests.push(buildTargetedFieldRequest(row));
          }
        }
        const batchId = `${lang}|${cardType}|${batchIndex}`;
        batches.push({
          batchId,
          language: lang,
          cardType,
          batchIndex,
          cardCount: cardBatch.length,
          fieldCount: fieldRows.length,
          expectedFieldIdentities: fieldRows.map((r) => ({
            identityKey: r.identityKey,
            rowId: r.rowId,
            fieldPath: r.fieldPath,
          })),
          fieldRequests,
          cards: cardBatch.map((o) => o.id),
        });
      }
    }
  }

  return {
    pass: true,
    batches,
    batchCount: batches.length,
    totalMissingFields: missingRows.length,
    cardTypeBreakdown: cardTypes,
    duplicateIdentities,
    g2Limits: G2_A1_BATCH_LIMITS,
    BATCH_LIMIT_CHANGES: 0,
  };
}

module.exports = {
  groupMissingRowsByCard,
  buildTargetedBatchPlan,
};
