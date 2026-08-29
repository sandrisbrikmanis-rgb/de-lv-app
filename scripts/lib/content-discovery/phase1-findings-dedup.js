#!/usr/bin/env node
"use strict";

const { buildDedupKey, normalizeFinding } = require("./phase1-findings-validation");
const { applySemanticRegistryDedup } = require("./phase1-semantic-dedup");

function normalizeFieldPath(fieldPath) {
  return String(fieldPath || "")
    .trim()
    .replace(/\s+/g, " ");
}

function deduplicateFindings(findings = [], options = {}) {
  const normalized = findings.map((f, i) => normalizeFinding(f, i));
  const byDedupKey = new Map();
  const conflicts = [];
  const merged = [];

  for (const finding of normalized) {
    const key = buildDedupKey({
      ...finding,
      fieldPath: normalizeFieldPath(finding.fieldPath || finding.field),
    });
    const existing = byDedupKey.get(key);
    if (!existing) {
      const canonical = {
        ...finding,
        dedupKey: key,
        canonicalFindingId: finding.canonicalFindingId || finding.findingStableId,
      };
      byDedupKey.set(key, canonical);
      merged.push(canonical);
      continue;
    }

    const isDeterministic = String(finding.source || "").startsWith("deterministic/");
    const existingDeterministic = String(existing.source || "").startsWith("deterministic/");
    const isLuna = String(finding.source || "").includes("luna");
    const existingLuna = String(existing.source || "").includes("luna");

    if (isDeterministic && existingLuna) {
      existing.lunaVerdict = finding.lunaVerdict || finding.classificationStatus;
      finding.classificationStatus = "FALSE_POSITIVE";
      finding.canonicalFindingId = existing.canonicalFindingId;
      continue;
    }
    if (isLuna && existingDeterministic) {
      finding.classificationStatus = "FALSE_POSITIVE";
      finding.canonicalFindingId = existing.canonicalFindingId;
      existing.lunaVerdict = finding.lunaVerdict || finding.classificationStatus;
      continue;
    }

    if (
      finding.classificationStatus === "VALIDATED_REAL_FINDING" &&
      existing.classificationStatus === "VALIDATED_REAL_FINDING"
    ) {
      conflicts.push({
        dedupKey: key,
        findingA: existing.findingStableId,
        findingB: finding.findingStableId,
      });
      continue;
    }

    if (finding.classificationStatus === "PREVIOUSLY_SEEN_RAW_LLM_CANDIDATE") {
      finding.canonicalFindingId = existing.canonicalFindingId;
      continue;
    }
  }

  const semanticRegistry = options.registry instanceof Map ? options.registry : new Map();
  const semantic = applySemanticRegistryDedup(merged, semanticRegistry, {
    strictConflict: options.strictConflict || false,
  });

  if (!semantic.pass) {
    conflicts.push(
      ...semantic.conflicts.map((c) => ({
        dedupKey: c.signature,
        findingA: c.findingA,
        findingB: c.findingB,
        type: "SEMANTIC_REGISTRY_CONFLICT",
      })),
    );
  }

  const pass = conflicts.length === 0;
  return {
    pass,
    conflicts,
    findings: semantic.findings,
    dedupedCount: semantic.findings.length,
    inputCount: normalized.length,
    semanticRegistry: semantic.registry,
    semanticConflicts: semantic.conflicts,
  };
}

module.exports = {
  normalizeFieldPath,
  deduplicateFindings,
};
