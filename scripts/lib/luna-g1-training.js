#!/usr/bin/env node
"use strict";

const { createLunaAdapter } = require("./luna-adapter-runner");
const { getBatchLimit } = require("./luna-phase1-core");
const { loadG1TrainingObjects } = require("./luna-object-loaders");

function serializeG1Training(obj) {
  return { id: obj.id, de: obj.de, lv: obj.lv, study: obj.study, productionFile: obj.productionFile };
}

async function auditG1Training({ lang, scopeId, transport, options = {} }) {
  const id = scopeId || `g1/training/${lang}`;
  const adapter = createLunaAdapter({
    name: "g1-training",
    loadObjects: () => loadG1TrainingObjects(lang),
    getId: (obj) => obj.id,
    serialize: serializeG1Training,
    batchSize: getBatchLimit("g1", "training"),
  });
  return adapter(id, { transport, ...options });
}

module.exports = { auditG1Training, serializeG1Training };
