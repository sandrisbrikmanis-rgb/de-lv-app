#!/usr/bin/env node
"use strict";

const { getBatchLimit, chunkArray, runMockLunaAdapter } = require("./luna-phase1-core");

async function auditG1Verbs({ lang, objects = [], mock = true }) {
  const batchSize = getBatchLimit("g1", "verbs");
  const batches = chunkArray(objects, batchSize);
  if (mock) {
    return runMockLunaAdapter({ objects, scopeId: `g1/verbs/${lang}` });
  }
  throw new Error("Live Luna not allowed during F0-COMP");
}

module.exports = { auditG1Verbs, getBatchLimit, chunkArray };
