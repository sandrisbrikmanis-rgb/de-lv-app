"use strict";

const { loadOwnerHistory: loadA1History, classifyWithOwnerHistory, normalizePath } = require("./et-a1-owner-history");

/** ET-DE B1: no OWNER accepted history yet (first FULL_DISCOVERY). */
function loadOwnerHistory() {
  return {
    loaded: false,
    sourcesLoaded: [],
    entries: [],
    byKey: new Map(),
    count: 0,
    sourcesExpected: false,
  };
}

module.exports = {
  loadOwnerHistory,
  classifyWithOwnerHistory,
  normalizePath,
};
