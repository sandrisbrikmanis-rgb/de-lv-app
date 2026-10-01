#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const {
  buildFrBgBsReadinessReport,
  LANGS,
  AUDIT_CATALOG_REL,
  PILOT_VERIFY_REL,
} = require("./lib/g2-a1-production-current/card-translation-fr-bg-bs-readiness");

const OUT_DIR = path.join(ROOT, "reports/g2-a1-production-current/card-translation-fr-bg-bs-source-chain");
const OUT_JSON = path.join(OUT_DIR, "card-translation-fr-bg-bs-source-chain-verification.json");

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
    report = buildFrBgBsReadinessReport();
  } catch (e) {
    failures.push(`BUILD_FAILED:${e.message}`);
    report = null;
  }

  if (catalog) {
    const fr = catalog.languages?.fr;
    const bg = catalog.languages?.bg;
    const bs = catalog.languages?.bs;

    const frPrimary = fr?.primaryDigitized?.[0]?.id;
    if (frPrimary !== "sachs-villatte-1906") failures.push("FR_PRIMARY_NOT_SACHS_VILLATTE");
    const mozinInPrimary = (fr?.primaryDigitized || []).some((s) => /mozin/i.test(s.id));
    if (mozinInPrimary) failures.push("FR_MOZIN_MUST_NOT_BE_PRIMARY");
    const mozinReserve = (fr?.supplementaryReserve || []).some((s) => /mozin/i.test(s.id));
    if (!mozinReserve) failures.push("FR_MOZIN_RESERVE_MISSING");

    const bgPrimary = bg?.primaryDigitized?.[0]?.id;
    if (bgPrimary !== "mdz-bsb-miladinov-vol1-1897") failures.push("BG_PRIMARY_NOT_MILADINOV_VOL1");
    const revIds = (bg?.reverseChainDigitized || []).map((s) => s.id);
    if (!revIds.includes("hathitrust-miladinov-vol2")) failures.push("BG_HATHITRUST_VOL2_MISSING");
    if (!revIds.includes("multislavdict-miladinov-1927")) failures.push("BG_MULTISLAVDICT_MISSING");

    if (bs?.digitizedAuditStatus !== "NOT_FOUND_DIGITIZED") {
      failures.push("BS_MUST_BE_NOT_FOUND_DIGITIZED");
    }
    if ((bs?.primaryDigitized || []).length > 0) failures.push("BS_MUST_NOT_HAVE_PRIMARY_DIGITIZED");
    const bsRejectedIds = (bs?.rejectedNotUsable || []).map((r) => r.id);
    for (const required of ["dict-cc-de-bs", "vukic-print-dictionaries", "hr-sr-dictionaries-as-bs"]) {
      if (!bsRejectedIds.includes(required)) failures.push(`BS_REJECTED_MISSING:${required}`);
    }
  }

  if (report) {
    if (report.schemaVersion !== "g2-a1-card-translation-fr-bg-bs-readiness-v1") {
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

    const frRow = report.languages.find((l) => l.appLang === "fr");
    if (frRow && !frRow.usesNewAuditSources) failures.push("FR_MUST_USE_NEW_AUDIT_SOURCES");

    const bgRow = report.languages.find((l) => l.appLang === "bg");
    if (bgRow && !bgRow.usesNewAuditSources) failures.push("BG_MUST_USE_NEW_AUDIT_SOURCES");

    const bsRow = report.languages.find((l) => l.appLang === "bs");
    if (bsRow) {
      if (bsRow.readinessClassification !== "BS_NOT_FOUND_DIGITIZED") {
        failures.push("BS_MUST_NOT_BE_READY");
      }
      if (bsRow.primaryDigitized?.length) failures.push("BS_REPORT_MUST_NOT_LIST_PRIMARY");
    }

    if (report.summary?.bsStatus !== "NOT_FOUND_DIGITIZED") {
      failures.push("SUMMARY_BS_STATUS_WRONG");
    }
  }

  const gate = { pass: failures.length === 0, failures };
  fs.mkdirSync(OUT_DIR, { recursive: true });
  fs.writeFileSync(
    OUT_JSON,
    `${JSON.stringify(
      {
        schemaVersion: "g2-a1-card-translation-fr-bg-bs-source-chain-verification-v1",
        generatedAt: new Date().toISOString(),
        gate,
        finalStatus: report
          ? {
              fr: report.languages.find((l) => l.appLang === "fr")?.readinessClassification,
              bg: report.languages.find((l) => l.appLang === "bg")?.readinessClassification,
              bs: report.summary.bsStatus,
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
