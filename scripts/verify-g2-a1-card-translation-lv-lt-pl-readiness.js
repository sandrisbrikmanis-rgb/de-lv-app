#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const {
  buildLvLtPlReadinessReport,
  LANGS,
  regressionPass,
  AUDIT_CATALOG_REL,
} = require("./lib/g2-a1-production-current/card-translation-lv-lt-pl-readiness");

const OUT_DIR = path.join(ROOT, "reports/g2-a1-production-current/card-translation-lv-lt-pl-readiness");
const OUT_JSON = path.join(OUT_DIR, "card-translation-lv-lt-pl-readiness-verification.json");

function main() {
  const failures = [];
  const catalogPath = path.join(ROOT, AUDIT_CATALOG_REL);
  if (!fs.existsSync(catalogPath)) failures.push("MISSING_AUDIT_CATALOG");

  let report;
  try {
    report = buildLvLtPlReadinessReport();
  } catch (e) {
    failures.push(`BUILD_FAILED:${e.message}`);
    report = null;
  }

  if (report) {
    if (report.schemaVersion !== "g2-a1-card-translation-lv-lt-pl-readiness-v1") {
      failures.push("SCHEMA_VERSION_MISMATCH");
    }
    if (report.auditSequence?.length !== 6) failures.push("AUDIT_SEQUENCE_NOT_SIX_STEPS");
    for (const appLang of LANGS) {
      const row = report.languages.find((l) => l.appLang === appLang);
      if (!row) failures.push(`MISSING_LANGUAGE_${appLang}`);
      else {
        if (!row.bilingualAuditSourcesRegistered) failures.push(`${appLang}_SOURCES_NOT_REGISTERED`);
        const reg = regressionPass(row.regressionPilotDe);
        if (reg.missingLemmas.length) failures.push(`${appLang}_REGRESSION_MISSING:${reg.missingLemmas.join(",")}`);
        if (!reg.corePrimaryFound) failures.push(`${appLang}_CORE_REGRESSION_FAIL:${reg.coreFailures.join(",")}`);
        if (appLang === "lv" || appLang === "lt") {
          if (!reg.compoundNotFoundOnPrimary.includes("Grenzkonflikt")) {
            failures.push(`${appLang}_GRENZKONFLIKT_EXPECTED_NOT_FOUND_ON_PRIMARY`);
          }
          if (!reg.compoundNotFoundOnPrimary.includes("Machtgier")) {
            failures.push(`${appLang}_MACHTGIER_EXPECTED_NOT_FOUND_ON_PRIMARY`);
          }
        }
      }
    }
    if (report.productionOrOwnerDecisionsModified !== false) {
      failures.push("PRODUCTION_OR_OWNER_FLAG_MUST_BE_FALSE");
    }
  }

  const gate = { pass: failures.length === 0, failures };
  fs.mkdirSync(OUT_DIR, { recursive: true });
  fs.writeFileSync(
    OUT_JSON,
    `${JSON.stringify(
      {
        schemaVersion: "g2-a1-card-translation-lv-lt-pl-readiness-verification-v1",
        generatedAt: new Date().toISOString(),
        gate,
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
