#!/usr/bin/env node
"use strict";

const { createLunaAdapter } = require("./luna-adapter-runner");
const { getBatchLimit } = require("./luna-phase1-core");
const { loadG1SentencesObjects } = require("./luna-object-loaders");

function serializeG1Sentence(obj) {
  return { id: obj.id, de: obj.de, lv: obj.lv, productionFile: obj.productionFile };
}

async function auditG1Sentences({ lang, scopeId, transport, options = {} }) {
  const id = scopeId || `g1/sentences/${lang}`;
  const adapter = createLunaAdapter({
    name: "g1-sentences",
    loadObjects: () => loadG1SentencesObjects(lang),
    getId: (obj) => obj.id,
    serialize: serializeG1Sentence,
    batchSize: getBatchLimit("g1", "sentences"),
  });
  return adapter(id, { transport, ...options });
}

module.exports = { auditG1Sentences, serializeG1Sentence };
