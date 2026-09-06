#!/usr/bin/env node
"use strict";

const {
  semanticIssueSignature,
  pathFamilyKey,
} = require("../discovery-stability");

function scopeSemanticIssueSignature(finding) {
  const cardId = finding.cardId || finding.nodePath || "aggregate";
  const fieldPath = finding.fieldPath || finding.field || "";
  const scopeId = finding.scopeId || `${finding.group}/${finding.dataset}/${finding.lang}`;
  const lang = finding.lang || scopeId.split("/")[2] || "";
  const base = require("../discovery-stability").semanticIssueSignature(
    cardId,
    fieldPath,
    finding.reason || finding.message || finding.current || "",
    finding.category || "UNKNOWN",
  );
  return `${scopeId}|${lang}|${base}`;
}

function scopePathFamilyKey(finding) {
  const cardId = finding.cardId || finding.nodePath || "aggregate";
  const fieldPath = finding.fieldPath || finding.field || "";
  const scopeId = finding.scopeId || `${finding.group}/${finding.dataset}/${finding.lang}`;
  const lang = finding.lang || scopeId.split("/")[2] || "";
  const base = require("../discovery-stability").pathFamilyKey(cardId, fieldPath);
  return `${scopeId}|${lang}|${base}`;
}

function applySemanticRegistryDedup(findings = [], registry = new Map(), options = {}) {
  const conflicts = [];
  const output = [];

  for (const finding of findings) {
    const signature = scopeSemanticIssueSignature(finding);
    const familyKey = scopePathFamilyKey(finding);

    if (options.strictConflict && registry.has(signature) && registry.get(signature) !== finding.dedupKey) {
      conflicts.push({ signature, findingA: registry.get(signature), findingB: finding.dedupKey });
      continue;
    }

    const seenFamily = registry.get(`family:${familyKey}`);
    if (seenFamily && seenFamily !== finding.dedupKey && finding.source?.includes("luna")) {
      output.push({
        ...finding,
        classificationStatus: "PREVIOUSLY_SEEN_RAW_LLM_CANDIDATE",
        canonicalFindingId: seenFamily,
        semanticRegistryRef: signature,
      });
      continue;
    }

    if (registry.has(signature)) {
      output.push({
        ...finding,
        classificationStatus: "PREVIOUSLY_SEEN_RAW_LLM_CANDIDATE",
        canonicalFindingId: registry.get(signature),
        semanticRegistryRef: signature,
      });
      continue;
    }

    registry.set(signature, finding.canonicalFindingId || finding.findingStableId);
    registry.set(`family:${familyKey}`, finding.canonicalFindingId || finding.findingStableId);
    output.push({ ...finding, semanticRegistryRef: signature });
  }

  return {
    pass: conflicts.length === 0,
    conflicts,
    findings: output,
    registry,
  };
}

module.exports = { applySemanticRegistryDedup };
