#!/usr/bin/env node
"use strict";

const { validateAuditedEvidenceRecord, validateCefrWhenApplicable } = require("./evidence-schema");
const { validateRecordByVerdict, validatePassRecord } = require("./verdict-validation");
const { validateCoverageEquation, tallyAuditedRecords } = require("./coverage");
const { filterOwnerReviewRows, assertPassExcludedFromOwnerReview } = require("./owner-scope");
const { rejectBulkPassRationale, rejectSharedEvidenceWithoutRowBinding } = require("./bulk-forbidden");
const { verifyMultipartNoGaps } = require("./csv-multipart");
const { AUDIT_VERDICTS } = require("./constants");

function verifyPostRunClosure(bundle, options = {}) {
  const blockers = [];
  const records = bundle.fullAuditEvidence?.records || bundle.records || [];
  if (!records.length) blockers.push({ code: "NO_RECORDS" });

  for (const r of records) {
    const schema = validateAuditedEvidenceRecord(r, { cefrApplicable: r.CEFR_APPLICABLE === true });
    if (!schema.pass) blockers.push({ code: "SCHEMA", rowId: r.rowId, errors: schema.errors });
    const verdict = validateRecordByVerdict(r);
    if (!verdict.pass) blockers.push({ code: "VERDICT", rowId: r.rowId, errors: verdict.errors });
    if (r.AUDIT_VERDICT === "PASS") {
      const pass = validatePassRecord(r);
      if (!pass.pass) blockers.push({ code: "PASS_9", rowId: r.rowId, errors: pass.errors });
    }
    const bulk = rejectBulkPassRationale(r);
    if (!bulk.pass) blockers.push({ code: "BULK_14", rowId: r.rowId, errors: bulk.errors });
  }

  const shared = rejectSharedEvidenceWithoutRowBinding(records);
  if (!shared.pass) blockers.push({ code: "SHARED_EVIDENCE", detail: shared.errors });

  const coverage = validateCoverageEquation(tallyAuditedRecords(records));
  if (!coverage.pass) blockers.push({ code: "COVERAGE_13", detail: coverage.errors });

  const ownerRows = filterOwnerReviewRows(records);
  const passInOwner = records.filter((r) => r.AUDIT_VERDICT === "PASS" && ownerRows.includes(r));
  if (passInOwner.length) blockers.push({ code: "PASS_IN_OWNER_SCOPE", n: passInOwner.length });

  const passExclude = assertPassExcludedFromOwnerReview(
    records.map((r) => ({ ...r, includeInOwnerView: bundle.ownerView?.rows?.some((o) => o.rowId === r.rowId) })),
  );
  if (!passExclude.pass) blockers.push({ code: "PASS_IN_OWNER_VIEW", rows: passExclude.violations });

  if (bundle.ownerCsvMultipart) {
    const mp = verifyMultipartNoGaps(bundle.ownerCsvMultipart);
    if (!mp.pass) blockers.push({ code: "CSV_MULTIPART", detail: mp });
  }

  if (options.productionDiffPaths?.length) {
    blockers.push({ code: "PRODUCTION_CHANGED", paths: options.productionDiffPaths });
  }
  if (options.deChanged) blockers.push({ code: "DE_CHANGED" });
  if (options.crowdinChanged) blockers.push({ code: "CROWDIN_CHANGED" });

  if (bundle.startFileSetSha && bundle.endFileSetSha && bundle.startFileSetSha !== bundle.endFileSetSha) {
    blockers.push({ code: "FILE_SET_SHA_CHANGED" });
  }

  const unknownVerdicts = records.filter((r) => !AUDIT_VERDICTS.includes(r.AUDIT_VERDICT));
  if (unknownVerdicts.length) blockers.push({ code: "UNKNOWN_VERDICT", n: unknownVerdicts.length });

  return {
    pass: blockers.length === 0,
    blockers,
    coverage: coverage.counts,
    closure: blockers.length === 0 ? "PASS" : "BLOCKED",
  };
}

module.exports = {
  verifyPostRunClosure,
};
