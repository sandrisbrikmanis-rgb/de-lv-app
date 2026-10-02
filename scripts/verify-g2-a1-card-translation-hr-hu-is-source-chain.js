#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const {
  buildHrHuIsReadinessReport,
  LANGS,
  AUDIT_CATALOG_REL,
  PILOT_VERIFY_REL,
} = require("./lib/g2-a1-production-current/card-translation-hr-hu-is-readiness");

const OUT_DIR = path.join(ROOT, "reports/g2-a1-production-current/card-translation-hr-hu-is-source-chain");
const OUT_JSON = path.join(OUT_DIR, "card-translation-hr-hu-is-source-chain-verification.json");

function main() {
  const failures = [];

  const catalogPath = path.join(ROOT, AUDIT_CATALOG_REL);
  if (!fs.existsSync(catalogPath)) failures.push("MISSING_AUDIT_CATALOG");

  const pilotPath = path.join(ROOT, PILOT_VERIFY_REL);
  if (!fs.existsSync(pilotPath)) failures.push("MISSING_PILOT_VERIFY");

  let catalog;
  try {
    catalog = JSON.parse(fs.readFileSync(catalogPath, "utf8"));
  } catch {
    failures.push("AUDIT_CATALOG_PARSE_FAIL");
    catalog = null;
  }

  let report;
  try {
    report = buildHrHuIsReadinessReport();
  } catch (e) {
    failures.push(`BUILD_FAILED:${e.message}`);
    report = null;
  }

  if (catalog) {
    const hr = catalog.languages?.hr;
    const hu = catalog.languages?.hu;
    const is = catalog.languages?.is;

    if (hr?.digitizedAuditStatus !== "PARTIAL") failures.push("HR_MUST_BE_PARTIAL");
    const hrPrimaryIds = (hr?.primaryDigitized || []).map((s) => s.id);
    if (!hrPrimaryIds.includes("mdz-bsb-sulek-de-hr-vol1-1860")) failures.push("HR_SULEK_VOL1_MISSING");
    if (!hrPrimaryIds.includes("mdz-bsb-sulek-de-hr-vol2-1860")) failures.push("HR_SULEK_VOL2_MISSING");
    const hrRev = (hr?.reverseChainDigitized || []).map((s) => s.id);
    if (!hrRev.includes("ia-filipovic-hr-de-vol-a-o-1875")) failures.push("HR_FILIPOVIC_1875_MISSING");
    if (hr?.pilotNotes?.auditReady === true) failures.push("HR_MUST_NOT_BE_AUDIT_READY");

    const huPrimaryIds = (hu?.primaryDigitized || []).map((s) => s.id);
    if (!huPrimaryIds.includes("mek-24482-nemet-magyar-pdf-2023")) failures.push("HU_MEK_24482_MISSING");
    if (!huPrimaryIds.includes("mek-00072-de-hu-hu-de-html")) failures.push("HU_MEK_00072_MISSING");
    const huSupp = (hu?.supplementaryReserve || []).map((s) => s.id);
    if (!huSupp.includes("real-eod-nemet-magyar-zsebszotar-vol13-1838")) {
      failures.push("HU_REAL_EOD_SUPPLEMENT_MISSING");
    }
    if (hu?.pilotNotes?.auditReady === true) failures.push("HU_MUST_NOT_BE_AUDIT_READY");

    if (is?.digitizedAuditStatus !== "IS_NOT_VERIFIED_DIGITIZED") {
      failures.push("IS_MUST_BE_NOT_VERIFIED_DIGITIZED");
    }
    if ((is?.primaryDigitized || []).length > 0) failures.push("IS_MUST_NOT_HAVE_PRIMARY_DIGITIZED");
    const isRejected = (is?.rejectedNotUsable || []).map((r) => r.id);
    if (!isRejected.includes("lexia-is-de-sam")) failures.push("IS_LEXIA_REJECTED_MISSING");
  }

  if (report) {
    if (report.schemaVersion !== "g2-a1-card-translation-hr-hu-is-readiness-v1") {
      failures.push("SCHEMA_VERSION_MISMATCH");
    }
    if (report.auditSequence?.length !== 6) failures.push("AUDIT_SEQUENCE_NOT_SIX_STEPS");
    if (report.productionOrOwnerDecisionsModified !== false) {
      failures.push("PRODUCTION_OR_OWNER_FLAG_MUST_BE_FALSE");
    }
    if (report.masterModified !== false) failures.push("MASTER_MODIFIED_MUST_BE_FALSE");

    for (const appLang of LANGS) {
      const row = report.languages.find((l) => l.appLang === appLang);
      if (!row) failures.push(`MISSING_LANGUAGE_${appLang}`);
    }

    const hrRow = report.languages.find((l) => l.appLang === "hr");
    if (hrRow) {
      if (hrRow.readinessClassification !== "HR_DIGITIZED_SOURCES_REGISTERED_PARTIAL") {
        failures.push("HR_CLASSIFICATION_WRONG");
      }
      if (hrRow.auditReady === true) failures.push("HR_MUST_NOT_BE_READY");
      if (!hrRow.usesNewAuditSources) failures.push("HR_MUST_USE_NEW_AUDIT_SOURCES");
    }

    const huRow = report.languages.find((l) => l.appLang === "hu");
    if (huRow) {
      if (huRow.readinessClassification !== "HU_DIGITIZED_SOURCES_REGISTERED_PARTIAL") {
        failures.push("HU_CLASSIFICATION_WRONG");
      }
      if (huRow.auditReady === true) failures.push("HU_MUST_NOT_BE_READY");
      if (!huRow.usesNewAuditSources) failures.push("HU_MUST_USE_NEW_AUDIT_SOURCES");
    }

    const isRow = report.languages.find((l) => l.appLang === "is");
    if (isRow) {
      if (isRow.readinessClassification !== "IS_NOT_VERIFIED_DIGITIZED") {
        failures.push("IS_CLASSIFICATION_WRONG");
      }
      if (isRow.primaryDigitized?.length) failures.push("IS_REPORT_MUST_NOT_LIST_PRIMARY");
      if (isRow.usesNewAuditSources) failures.push("IS_MUST_NOT_USE_NEW_AUDIT_SOURCES");
    }

    if (report.summary?.isStatus !== "IS_NOT_VERIFIED_DIGITIZED") {
      failures.push("SUMMARY_IS_STATUS_WRONG");
    }
    if (report.summary?.hrStatus !== "HR_DIGITIZED_SOURCES_REGISTERED_PARTIAL") {
      failures.push("SUMMARY_HR_STATUS_WRONG");
    }
    if (report.summary?.huStatus !== "HU_DIGITIZED_SOURCES_REGISTERED_PARTIAL") {
      failures.push("SUMMARY_HU_STATUS_WRONG");
    }
  }

  const gate = { pass: failures.length === 0, failures };
  fs.mkdirSync(OUT_DIR, { recursive: true });
  fs.writeFileSync(
    OUT_JSON,
    `${JSON.stringify(
      {
        schemaVersion: "g2-a1-card-translation-hr-hu-is-source-chain-verification-v1",
        generatedAt: new Date().toISOString(),
        gate,
        finalStatus: report
          ? {
              hr: report.languages.find((l) => l.appLang === "hr")?.readinessClassification,
              hu: report.languages.find((l) => l.appLang === "hu")?.readinessClassification,
              is: report.summary.isStatus,
            }
          : null,
        reportSummary: report?.summary || null,
      },
      null,
      2,
    )}\n`,
  );

  console.log(JSON.stringify(gate, null, 2));
  process.exit(gate.pass ? 0 : 1);
}

main();
