#!/usr/bin/env node
"use strict";

const OWNER_SEVERITY_MAPPINGS = [
  {
    findingId: "g2/b2/fr|unknown|idx:926|lv|STYLE_ONLY|gpt-5.6-luna",
    current: {
      severity: "STYLE_ONLY",
      category: "STYLE_ONLY",
      classificationStatus: "PREVIOUSLY_SEEN_RAW_LLM_CANDIDATE",
    },
    next: {
      severity: "INFO",
      classificationStatus: "STYLE_ONLY",
    },
  },
  {
    findingId: "g2/b2/fr|unknown|idx:947|lv|STYLE_ONLY|gpt-5.6-luna",
    current: {
      severity: "STYLE_ONLY",
      category: "STYLE_ONLY",
      classificationStatus: "PREVIOUSLY_SEEN_RAW_LLM_CANDIDATE",
    },
    next: {
      severity: "INFO",
      classificationStatus: "STYLE_ONLY",
    },
  },
  {
    findingId: "g2/b2/hu|Böschung|lv|STYLE_ONLY|gpt-5.6-luna",
    current: {
      severity: "STYLE_ONLY",
      category: "STYLE_ONLY",
      classificationStatus: "PREVIOUSLY_SEEN_RAW_LLM_CANDIDATE",
    },
    next: {
      severity: "INFO",
      classificationStatus: "STYLE_ONLY",
    },
  },
  {
    findingId: "g2/b2/sk|unknown|idx:2046|lv|AMBIGUITY|gpt-5.6-luna",
    current: {
      severity: "NEEDS_REVIEW",
      category: "AMBIGUITY",
      classificationStatus: "PREVIOUSLY_SEEN_RAW_LLM_CANDIDATE",
    },
    next: {
      severity: "HIGH",
      classificationStatus: "NEEDS_REVIEW",
    },
  },
  {
    findingId: "g2/c1/bs|Erstaufführung|lv|DUPLICATION|gpt-5.6-luna",
    current: {
      severity: "STYLE_ONLY",
      category: "DUPLICATION",
      classificationStatus: "PREVIOUSLY_SEEN_RAW_LLM_CANDIDATE",
    },
    next: {
      severity: "INFO",
      classificationStatus: "STYLE_ONLY",
    },
  },
];

const OWNER_MAPPING_BY_ID = new Map(OWNER_SEVERITY_MAPPINGS.map((entry) => [entry.findingId, entry]));

function buildOwnerMappingMismatchError(finding, mapping, field, actual) {
  const err = new Error(
    `OWNER_MAPPING_MISMATCH for ${finding.findingStableId}: expected ${field}=${mapping.current[field]}, got ${actual}`,
  );
  err.code = "OWNER_MAPPING_MISMATCH";
  err.findingId = finding.findingStableId;
  err.field = field;
  err.expected = mapping.current[field];
  err.actual = actual;
  return err;
}

function applyOwnerSeverityMappings(findings = []) {
  const mappingErrors = [];
  const proofs = [];
  let ownerMappingApplied = 0;

  const normalized = findings.map((finding) => {
    const mapping = OWNER_MAPPING_BY_ID.get(finding.findingStableId);
    if (!mapping) return finding;

    for (const field of ["severity", "category", "classificationStatus"]) {
      const actual = String(finding[field] ?? "");
      const expected = String(mapping.current[field] ?? "");
      if (actual !== expected) {
        mappingErrors.push({
          findingId: finding.findingStableId,
          field,
          expected,
          actual,
        });
        return finding;
      }
    }

    ownerMappingApplied += 1;
    const proof = {
      findingId: mapping.findingId,
      current: {
        severity: finding.severity,
        category: finding.category,
        classificationStatus: finding.classificationStatus,
      },
      next: { ...mapping.next },
      appliedAt: "read-time",
    };
    proofs.push(proof);

    return {
      ...finding,
      severity: mapping.next.severity,
      classificationStatus: mapping.next.classificationStatus,
      ownerSeverityNormalizationProof: proof,
    };
  });

  return {
    findings: normalized,
    ownerMappingApplied,
    ownerMappingExpected: OWNER_SEVERITY_MAPPINGS.length,
    mappingErrors,
    proofs,
  };
}

module.exports = {
  OWNER_SEVERITY_MAPPINGS,
  OWNER_MAPPING_BY_ID,
  applyOwnerSeverityMappings,
  buildOwnerMappingMismatchError,
};
