#!/usr/bin/env node
"use strict";

const LUNA_BATCH_LIMITS = {
  "g2:ordinary": 25,
  "g2:minimalStudy": 10,
  "g2:standardStudy": 5,
  "g1:sentences": 25,
  "g1:verbs": 10,
  "g1:training": 50,
  "g3:courseLessons": 20,
};

function getBatchLimit(group, dataset, cardType) {
  if (group === "g2") {
    if (cardType === "minimalStudy") return LUNA_BATCH_LIMITS["g2:minimalStudy"];
    if (cardType === "standardStudy") return LUNA_BATCH_LIMITS["g2:standardStudy"];
    return LUNA_BATCH_LIMITS["g2:ordinary"];
  }
  if (group === "g1" && dataset === "sentences") return LUNA_BATCH_LIMITS["g1:sentences"];
  if (group === "g1" && dataset === "verbs") return LUNA_BATCH_LIMITS["g1:verbs"];
  if (group === "g1" && dataset === "training") return LUNA_BATCH_LIMITS["g1:training"];
  if (group === "g3") return LUNA_BATCH_LIMITS["g3:courseLessons"];
  return 25;
}

function chunkArray(items, size) {
  const chunks = [];
  for (let i = 0; i < items.length; i += size) chunks.push(items.slice(i, i + size));
  return chunks;
}

function createLunaStats() {
  return {
    lunaScopesExpected: 0,
    lunaScopesProcessed: 0,
    lunaCalls: 0,
    lunaSuccessfulBatches: 0,
    lunaRetryAttempts: 0,
    status: "NOT_RUN",
  };
}

async function runMockLunaAdapter({ objects = [], scopeId }) {
  const stats = createLunaStats();
  stats.status = "MOCK";
  stats.lunaScopesExpected = 1;
  stats.lunaScopesProcessed = 1;
  return {
    pass: true,
    scopeId,
    objectsExpected: objects.length,
    objectsReturned: objects.length,
    attemptCount: 1,
    findings: [],
    stats,
  };
}

module.exports = {
  LUNA_BATCH_LIMITS,
  getBatchLimit,
  chunkArray,
  createLunaStats,
  runMockLunaAdapter,
};
