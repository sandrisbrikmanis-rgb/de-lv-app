#!/usr/bin/env node
"use strict";

const { getBatchLimit, chunkArray, runMockLunaAdapter } = require("./luna-phase1-core");

async function auditG3Lessons({ lang, objects = [], mock = true }) {
  const batchSize = getBatchLimit("g3", "courseLessons");
  const batches = chunkArray(objects, batchSize);
  if (mock) {
    return runMockLunaAdapter({ objects, scopeId: `g3/courseLessons/${lang}` });
  }
  throw new Error("Live Luna not allowed during F0-COMP");
}

module.exports = { auditG3Lessons, getBatchLimit, chunkArray };
