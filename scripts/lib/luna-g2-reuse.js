#!/usr/bin/env node
"use strict";

const { createLunaAdapter } = require("./luna-adapter-runner");
const { getBatchLimit } = require("./luna-phase1-core");
const { loadG2Objects } = require("./luna-object-loaders");
const { buildLunaRequestPayload, getLegacyObjectId } = require("./phase1-luna-checkpoint/object-identity");

function serializeG2Object(obj, scopeId) {
  const base = {
    cardType: obj.cardType,
    de: obj.de,
    lv: obj.lv,
    study: obj.study,
    productionFile: obj.productionFile,
    index: obj.index,
    id: obj.id,
  };
  if (scopeId) {
    return buildLunaRequestPayload(scopeId, { ...obj, ...base });
  }
  return base;
}

const runG2Adapter = createLunaAdapter({
  name: "g2-reuse",
  loadObjects: (scopeId, options = {}) => {
    const [, level, lang] = String(scopeId).split("/");
    return loadG2Objects(lang, level);
  },
  getId: (obj) => getLegacyObjectId(obj),
  serialize: (obj) => obj,
  batchSize: 25,
});

async function auditG2Reuse({ lang, level, scopeId, transport, options = {} }) {
  const id = scopeId || `g2/${level}/${lang}`;
  const batchSize = getBatchLimit("g2", level, options.cardType);
  const adapter = createLunaAdapter({
    name: "g2-reuse",
    loadObjects: () => loadG2Objects(lang, level),
    getId: (obj) => getLegacyObjectId(obj),
    serialize: (obj) => serializeG2Object(obj, id),
    batchSize,
  });
  return adapter(id, { transport, ...options });
}

module.exports = { auditG2Reuse, runG2Adapter, serializeG2Object };
