#!/usr/bin/env node
"use strict";

function stableFindingSortKey(finding) {
  return finding.findingStableId || finding.dedupKey || finding.auditId || "";
}

function assignGlobalAuditIds(findings = []) {
  const sorted = [...findings].sort((a, b) => stableFindingSortKey(a).localeCompare(stableFindingSortKey(b)));
  return sorted.map((finding, index) => ({
    ...finding,
    auditId: `PH1-${String(index + 1).padStart(6, "0")}`,
  }));
}

function countDuplicateAuditIds(findings = []) {
  const ids = findings.map((f) => f.auditId).filter(Boolean);
  return ids.length - new Set(ids).size;
}

module.exports = {
  stableFindingSortKey,
  assignGlobalAuditIds,
  countDuplicateAuditIds,
};
