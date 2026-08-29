#!/usr/bin/env node
"use strict";

const {
  semanticIssueSignature,
  pathFamilyKey,
} = require("../discovery-stability");

function applySemanticRegistryDedup(findings = [], registry = new Map(), options = {}) {
  const conflicts = [];
  const output = [];

  for (const finding of findings) {
    const cardId = finding.cardId || finding.nodePath || "aggregate";
    const fieldPath = finding.fieldPath || finding.field || "";
    const signature = semanticIssueSignature(
      cardId,
      fieldPath,
      finding.reason || finding.message || finding.current || "",
      finding.category || "UNKNOWN",
    );
    const familyKey = pathFamilyKey(cardId, fieldPath);

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
