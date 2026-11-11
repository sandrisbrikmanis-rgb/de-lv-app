#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const {
  buildItMkNlReadinessReport,
  LANGS,
  AUDIT_CATALOG_REL,
  PILOT_VERIFY_REL,
  DISCOVERY_REL,
} = require("./lib/g2-a1-production-current/card-translation-it-mk-nl-readiness");

const OUT_DIR = path.join(ROOT, "reports/g2-a1-production-current/card-translation-it-mk-nl-source-chain");
const OUT_JSON = path.join(OUT_DIR, "card-translation-it-mk-nl-source-chain-verification.json");

function main() {
  const failures = [];

  for (const rel of [AUDIT_CATALOG_REL, PILOT_VERIFY_REL, DISCOVERY_REL]) {
    if (!fs.existsSync(path.join(ROOT, rel))) failures.push(`MISSING:${rel}`);
  }

  let catalog;
  try {
    catalog = JSON.parse(fs.readFileSync(path.join(ROOT, AUDIT_CATALOG_REL), "utf8"));
  } catch {
    failures.push("AUDIT_CATALOG_PARSE_FAIL");
    catalog = null;
  }

  let report;
  try {
    report = buildItMkNlReadinessReport();
  } catch (e) {
    failures.push(`BUILD_FAILED:${e.message}`);
    report = null;
  }

  if (catalog) {
    const it = catalog.languages?.it;
    const nl = catalog.languages?.nl;
    const mk = catalog.languages?.mk;

    if (it?.digitizedAuditStatus !== "READY") failures.push("IT_MUST_BE_READY");
    if (it?.primaryDigitized?.[0]?.id !== "ia-bsb-neues-it-de-11793257-vol1") {
      failures.push("IT_PRIMARY_MUST_BE_11793257");
    }
    const itSupp = (it?.supplementaryReserve || []).map((s) => s.id);
    if (!itSupp.includes("ia-neuesitalienisch00bulluoft-vol1")) failures.push("IT_BULL00_RESERVE_MISSING");
    if (!itSupp.includes("ia-neuesitalienisch02bulluoft")) failures.push("IT_BULL02_RESERVE_MISSING");
    if (it?.pilotNotes?.auditReady !== true) failures.push("IT_AUDIT_READY_MUST_BE_TRUE");

    if (nl?.digitizedAuditStatus !== "PARTIAL") failures.push("NL_MUST_BE_PARTIAL");
    if (nl?.primaryDigitized?.[0]?.id !== "ia-bsb-nieuw-woordenboek-nl-hoogduits-1787-3parts") {
      failures.push("NL_PRIMARY_1787_MISSING");
    }
    if (nl?.pilotNotes?.auditReady === true) failures.push("NL_MUST_NOT_BE_AUDIT_READY");

    if (mk?.digitizedAuditStatus !== "MK_NOT_FOUND_DIGITIZED") {
      failures.push("MK_MUST_BE_NOT_FOUND_DIGITIZED");
    }
    if ((mk?.primaryDigitized || []).length > 0) failures.push("MK_MUST_NOT_HAVE_PRIMARY");
  }

  if (report) {
    if (report.productionOrOwnerDecisionsModified !== false) {
      failures.push("PRODUCTION_OR_OWNER_FLAG_MUST_BE_FALSE");
    }
    if (report.masterModified !== false) failures.push("MASTER_MODIFIED_MUST_BE_FALSE");

    const itRow = report.languages.find((l) => l.appLang === "it");
    if (itRow?.readinessClassification !== "IT_DIGITIZED_SOURCES_REGISTERED_READY") {
      failures.push("IT_CLASSIFICATION_WRONG");
    }
    if (itRow?.auditReady !== true) failures.push("IT_REPORT_MUST_BE_AUDIT_READY");

    const nlRow = report.languages.find((l) => l.appLang === "nl");
    if (nlRow?.readinessClassification !== "NL_DIGITIZED_SOURCES_REGISTERED_PARTIAL") {
      failures.push("NL_CLASSIFICATION_WRONG");
    }

    const mkRow = report.languages.find((l) => l.appLang === "mk");
    if (mkRow?.readinessClassification !== "MK_NOT_FOUND_DIGITIZED") {
      failures.push("MK_CLASSIFICATION_WRONG");
    }
    if (mkRow?.primaryDigitized?.length) failures.push("MK_REPORT_MUST_NOT_LIST_PRIMARY");
    if (mkRow?.usesNewAuditSources) failures.push("MK_MUST_NOT_USE_NEW_AUDIT_SOURCES");
  }

  const gate = { pass: failures.length === 0, failures };
  fs.mkdirSync(OUT_DIR, { recursive: true });
  fs.writeFileSync(
    OUT_JSON,
    `${JSON.stringify(
      {
        schemaVersion: "g2-a1-card-translation-it-mk-nl-source-chain-verification-v1",
        generatedAt: new Date().toISOString(),
        gate,
        finalStatus: report
          ? {
              it: report.summary.itStatus,
              nl: report.summary.nlStatus,
              mk: report.summary.mkStatus,
            }
          : null,
      },
      null,
      2,
    )}\n`,
  );

  console.log(JSON.stringify(gate, null, 2));
  process.exit(gate.pass ? 0 : 1);
}

main();
