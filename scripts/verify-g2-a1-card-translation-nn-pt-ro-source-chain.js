#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const {
  buildNnPtRoReadinessReport,
  LANGS,
  AUDIT_CATALOG_REL,
  PILOT_VERIFY_REL,
  DISCOVERY_REL,
} = require("./lib/g2-a1-production-current/card-translation-nn-pt-ro-readiness");

const OUT_DIR = path.join(ROOT, "reports/g2-a1-production-current/card-translation-nn-pt-ro-source-chain");
const OUT_JSON = path.join(OUT_DIR, "card-translation-nn-pt-ro-source-chain-verification.json");

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
    report = buildNnPtRoReadinessReport();
  } catch (e) {
    failures.push(`BUILD_FAILED:${e.message}`);
    report = null;
  }

  if (catalog) {
    const pt = catalog.languages?.pt;
    const ro = catalog.languages?.ro;
    const nn = catalog.languages?.nn;

    if (pt?.digitizedAuditStatus !== "PARTIAL") failures.push("PT_MUST_BE_PARTIAL");
    if (pt?.primaryDigitized?.[0]?.id !== "ia-torchtrop-de-pt-1943") {
      failures.push("PT_PRIMARY_TORCHTROP_MISSING");
    }
    if (pt?.pilotNotes?.auditReady === true) failures.push("PT_MUST_NOT_BE_AUDIT_READY");

    if (ro?.digitizedAuditStatus !== "PARTIAL") failures.push("RO_MUST_BE_PARTIAL");
    if (ro?.primaryDigitized?.[0]?.id !== "ia-barcianu-de-ro-bidir-1886") {
      failures.push("RO_PRIMARY_BARCIANU_MISSING");
    }
    if (!ro?.modernInstitutional?.some((s) => s.id === "tdrg3-solirom-ro-de")) {
      failures.push("RO_TDRG3_MISSING");
    }

    if (nn?.digitizedAuditStatus !== "PARTIAL") failures.push("NN_MUST_BE_PARTIAL");
    if (nn?.primaryDigitized?.[0]?.id !== "ia-bsb-helms-dano-nor-de-11752747") {
      failures.push("NN_PRIMARY_HELMS_MISSING");
    }
    if (!nn?.supplementaryControlOnly?.some((s) => s.id === "dinordbok-tysk-nynorsk-web")) {
      failures.push("NN_DINORDBOK_CONTROL_ONLY_MISSING");
    }
    if (nn?.pilotNotes?.modernNynorskGap !== true) failures.push("NN_MODERN_GAP_FLAG_REQUIRED");
  }

  if (report) {
    if (report.productionOrOwnerDecisionsModified !== false) {
      failures.push("PRODUCTION_OR_OWNER_FLAG_MUST_BE_FALSE");
    }
    if (report.masterModified !== false) failures.push("MASTER_MODIFIED_MUST_BE_FALSE");
    if (report.languages?.length !== LANGS.length) failures.push("LANG_COUNT_WRONG");

    for (const appLang of LANGS) {
      const row = report.languages.find((l) => l.appLang === appLang);
      if (!row?.usesNewAuditSources) failures.push(`${appLang.toUpperCase()}_MUST_USE_NEW_AUDIT_SOURCES`);
      if (row?.auditReady === true) failures.push(`${appLang.toUpperCase()}_MUST_NOT_BE_AUDIT_READY`);
    }
  }

  const gate = { pass: failures.length === 0, failures };
  fs.mkdirSync(OUT_DIR, { recursive: true });
  fs.writeFileSync(
    OUT_JSON,
    `${JSON.stringify(
      {
        schemaVersion: "g2-a1-card-translation-nn-pt-ro-source-chain-verification-v1",
        generatedAt: new Date().toISOString(),
        gate,
        catalogPath: AUDIT_CATALOG_REL,
      },
      null,
      2,
    )}\n`,
  );

  if (!gate.pass) {
    console.error(JSON.stringify(gate, null, 2));
    process.exit(1);
  }
  console.log(JSON.stringify(gate, null, 2));
}

main();
