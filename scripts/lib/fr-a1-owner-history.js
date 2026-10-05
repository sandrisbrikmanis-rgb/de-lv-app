"use strict";

/** FR–DE A1 first audit — no prior OWNER decisions. */
function loadOwnerHistory() {
  return {
    loaded: false,
    sourcesLoaded: [],
    sourcesExpected: false,
    entries: [],
    byKey: new Map(),
    count: 0,
  };
}

function classifyWithOwnerHistory(finding) {
  return {
    ownerHistoryStatus: null,
    validatedReal: true,
    auditClassification: finding.source === "gpt-5.6-luna" ? "VALIDATED_REAL_FINDING" : "DETERMINISTIC_FINDING",
  };
}

module.exports = {
  loadOwnerHistory,
  classifyWithOwnerHistory,
};
