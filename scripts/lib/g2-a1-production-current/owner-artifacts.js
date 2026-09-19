#!/usr/bin/env node
"use strict";

const path = require("path");
const { writeJsonAtomic } = require("./artifacts");
const { tallyAuditedRecords, validateCoverageEquation } = require("./coverage");
const { filterOwnerReviewRows, assertPassExcludedFromOwnerReview } = require("./owner-scope");
const { splitCsvMultipart } = require("./csv-multipart");
const { verifyEmbeddedLanguageRegistry } = require("../official-language-sources-registry");
const { ROOT } = require("../audit-common");
const { AI_AUDIT_ROLE, AI_NOT_LANGUAGE_AUTHORITY, RECORD_KIND } = require("./constants");

function buildOwnerCsvRows(ownerRows) {
  const header = "rowId,language,fieldPath,AUDIT_VERDICT,OWNER_STATUS";
  const lines = ownerRows.map(
    (r) =>
      `${r.rowId},${r.language},${JSON.stringify(r.fieldPath)},${r.AUDIT_VERDICT},${r.OWNER_STATUS || "PENDING"}`,
  );
  return `${header}\n${lines.join("\n")}\n`;
}

function buildOwnerArtifactsFromEvidence(auditedRecords, meta = {}) {
  const coverage = validateCoverageEquation(tallyAuditedRecords(auditedRecords));
  const ownerRows = filterOwnerReviewRows(auditedRecords).map((r) => ({
    ...r,
    OWNER_STATUS: "PENDING",
    includeInOwnerView: true,
  }));
  const passExclude = assertPassExcludedFromOwnerReview(
    auditedRecords.map((r) => ({ ...r, includeInOwnerView: r.AUDIT_VERDICT !== "PASS" })),
  );
  const passEvidence = auditedRecords.filter((r) => r.AUDIT_VERDICT === "PASS");
  const registry = verifyEmbeddedLanguageRegistry(ROOT);
  const csvText = buildOwnerCsvRows(ownerRows);
  const csvMultipart = splitCsvMultipart(csvText);

  const findings = ownerRows.filter((r) => r.AUDIT_VERDICT === "FINDING");
  const finalCards = findings.map((r) => ({
    rowId: r.rowId,
    CURRENT: r.currentValue,
    PROPOSED_NEW: r.PROPOSED_NEW,
    fieldPath: r.fieldPath,
  }));

  return {
    pass: coverage.pass && passExclude.pass,
    aiRole: { role: AI_AUDIT_ROLE, notAuthority: AI_NOT_LANGUAGE_AUTHORITY },
    fullAuditEvidence: {
      recordKind: RECORD_KIND.AUDITED_EVIDENCE,
      rowCount: auditedRecords.length,
      records: auditedRecords,
    },
    auditPassEvidence: { count: passEvidence.length, records: passEvidence },
    ownerView: { count: ownerRows.length, rows: ownerRows },
    ownerDecisions: ownerRows.map((r) => ({ rowId: r.rowId, OWNER_STATUS: "PENDING" })),
    finalCardsFindings: finalCards,
    sourceEvidenceRegistry: registry.coverageRows || [],
    coverageSummary: coverage.counts,
    coverageValidation: coverage,
    batchManifest: meta.batchManifest || { note: "synthetic_fixture" },
    reproducibilityManifest: {
      DATASET_PRODUCTION_SHA: meta.datasetProductionSha || null,
      AUDIT_BASELINE_SHA: meta.auditBaselineSha || null,
      productionFileSetSha256: meta.auditBaselineSha || null,
      originMainSha: meta.originMainSha || null,
    },
    ownerCsvMultipart: csvMultipart.manifest,
    passExcludedFromOwner: passExclude,
  };
}

function writeSyntheticOwnerArtifacts(bundle, prefix = "synthetic-owner") {
  const written = {};
  written.evidence = writeJsonAtomic(`${prefix}-full-audit-evidence.json`, bundle.fullAuditEvidence);
  written.pass = writeJsonAtomic(`${prefix}-audit-pass-evidence.json`, bundle.auditPassEvidence);
  written.view = writeJsonAtomic(`${prefix}-owner-view.json`, bundle.ownerView);
  written.decisions = writeJsonAtomic(`${prefix}-owner-decisions.json`, bundle.ownerDecisions);
  written.finalCards = writeJsonAtomic(`${prefix}-final-cards-findings.json`, bundle.finalCardsFindings);
  written.coverage = writeJsonAtomic(`${prefix}-coverage-summary.json`, {
    coverageSummary: bundle.coverageSummary,
    coverageValidation: bundle.coverageValidation,
  });
  written.repro = writeJsonAtomic(`${prefix}-reproducibility-manifest.json`, bundle.reproducibilityManifest);
  written.postRun = writeJsonAtomic(`${prefix}-post-run-ready.json`, { pass: bundle.pass });
  return written;
}

module.exports = {
  buildOwnerArtifactsFromEvidence,
  buildOwnerCsvRows,
  writeSyntheticOwnerArtifacts,
};
