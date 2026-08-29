#!/usr/bin/env node
"use strict";

const { createLunaAdapter } = require("./luna-adapter-runner");
const { getBatchLimit } = require("./luna-phase1-core");
const { loadG1VerbsObjects } = require("./luna-object-loaders");

function serializeG1Verb(obj) {
  return { id: obj.id, infinitiv: obj.infinitiv, forms: obj.forms, productionFile: obj.productionFile };
}

async function auditG1Verbs({ lang, scopeId, transport, options = {} }) {
  const id = scopeId || `g1/verbs/${lang}`;
  const adapter = createLunaAdapter({
    name: "g1-verbs",
    loadObjects: () => loadG1VerbsObjects(lang),
    getId: (obj) => obj.id,
    serialize: serializeG1Verb,
    batchSize: getBatchLimit("g1", "verbs"),
  });
  return adapter(id, { transport, ...options });
}

module.exports = { auditG1Verbs, serializeG1Verb };
