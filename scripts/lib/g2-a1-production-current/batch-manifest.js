#!/usr/bin/env node
"use strict";

const { splitObjectsIntoBatches } = require("../phase1-luna-checkpoint/batch-split");
const { LUNA_BATCH_LIMITS } = require("../luna-phase1-core");
const { AUDIT_LANGUAGES } = require("./constants");
const {
  loadG2ProductionObjects,
  splitObjectsByCardType,
  getBatchSizeForCardType,
} = require("./objects");

function buildBatchManifest() {
  const perLanguage = [];
  let totalBatches = 0;
  let oversizeBatch = 0;
  let splitCardViolations = 0;

  for (const lang of AUDIT_LANGUAGES) {
    const objects = loadG2ProductionObjects(lang);
    const groups = splitObjectsByCardType(objects);
    const langBatches = [];
    for (const [cardType, group] of Object.entries(groups)) {
      if (!group.length) continue;
      const batchSize = getBatchSizeForCardType(cardType === "comparisonStudy" ? "standardStudy" : cardType);
      const batches = splitObjectsIntoBatches(group, batchSize);
      for (const b of batches) {
        if (b.length > batchSize) oversizeBatch += 1;
        const ids = new Set(b.map((o) => o.id));
        if (ids.size !== b.length) splitCardViolations += 1;
      }
      langBatches.push({ cardType, objectCount: group.length, batchSize, batchCount: batches.length });
      totalBatches += batches.length;
    }
    perLanguage.push({ language: lang, batches: langBatches });
  }

  return {
    pass: oversizeBatch === 0 && splitCardViolations === 0,
    BATCH_LIMIT_CHANGES: 0,
    limits: LUNA_BATCH_LIMITS,
    g2A1Limits: {
      ordinary: 25,
      minimalStudy: 10,
      standardStudy: 5,
      comparisonStudyUsesStandardStudyLimit: 5,
    },
    totalBatches,
    oversizeBatch,
    splitCardViolations,
    perLanguage,
    note: "Full card objects stay intact within each batch slice (object-level split only).",
  };
}

module.exports = {
  buildBatchManifest,
};
