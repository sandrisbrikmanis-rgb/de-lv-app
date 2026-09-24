#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const { buildProductionA1FieldRequestsForLanguage } = require("./lib/g2-a1-production-current/card-translation-production-a1");
const { executeCardTranslationAuditFieldRecord } = require("./lib/g2-a1-production-current/card-translation-audit-executor");
const { isGermanDeAuthorityDwdsOrDuden, languageMayReceiveTranslationValidated } = require("./lib/g2-a1-production-current/card-translation-audit-policy");
const { TRANSLATION_AUDIT_VERDICT } = require("./lib/g2-a1-production-current/card-translation-audit-search");

const OUT_DIR = path.join(ROOT, "reports/g2-a1-production-current/card-translation-production-a1");
const MIN_LB_SAMPLE = 20;

async function main() {
  const blockers = [];
  const results = [];

  const hausRows = buildProductionA1FieldRequestsForLanguage("lb", { deLemmasFilter: ["Haus"], maxCards: 5 });
  if (!hausRows.rows.length) {
    blockers.push({ code: "LB_PRODUCTION_HAUS_CARD_MISSING" });
  }

  const lbSample = buildProductionA1FieldRequestsForLanguage("lb", { maxCards: MIN_LB_SAMPLE });
  if (lbSample.sampled < MIN_LB_SAMPLE) {
    blockers.push({ code: "LB_PRODUCTION_SAMPLE_TOO_SMALL", got: lbSample.sampled, need: MIN_LB_SAMPLE });
  }

  for (const row of lbSample.rows) {
    const record = await executeCardTranslationAuditFieldRecord(row.fieldRequest);
    const deUrl = record.DE_SOURCE_URL || "";
    if (record.DE_SOURCE_EVIDENCE && deUrl && !isGermanDeAuthorityDwdsOrDuden({ ...record, entryUrl: deUrl, outcome: "SOURCE_ENTRY_VALIDATED", evidenceFragment: record.DE_SOURCE_EVIDENCE, adapterId: deUrl.includes("dwds") ? "de-dwds-wb-entry" : null })) {
      if (!/dwds\.de|duden\.de/i.test(deUrl)) {
        blockers.push({ code: "DE_NOT_DWDS_DUDEN", cardId: row.cardId, de: row.de, url: deUrl });
      }
    }
    if (/lod\.lu/i.test(deUrl)) {
      blockers.push({ code: "DE_MUST_NOT_BE_LOD", cardId: row.cardId, url: deUrl });
    }

    const tv = record.translationAuditVerdict;
    if (tv === TRANSLATION_AUDIT_VERDICT.TRANSLATION_VALIDATED && !languageMayReceiveTranslationValidated("lb")) {
      blockers.push({ code: "VALIDATED_LANG_POLICY", cardId: row.cardId });
    }

    results.push({
      cardId: row.cardId,
      de: row.de,
      current: row.lv,
      translationAuditVerdict: tv,
      auditVerdict: record.AUDIT_VERDICT,
      deSourceUrl: deUrl,
      targetSourceUrl: record.TARGET_SOURCE_URL,
    });
  }

  const haus = results.find((r) => r.de === "Haus");
  if (haus && haus.translationAuditVerdict !== TRANSLATION_AUDIT_VERDICT.TRANSLATION_VALIDATED) {
    blockers.push({
      code: "LB_HAUS_PRODUCTION_NOT_VALIDATED",
      got: haus.translationAuditVerdict,
      auditVerdict: haus.auditVerdict,
    });
  }

  fs.mkdirSync(OUT_DIR, { recursive: true });
  const gate = {
    pass: blockers.length === 0,
    blockers,
    lbProductionCardCount: lbSample.cardCount,
    lbSampleSize: lbSample.sampled,
    hausProductionChecked: Boolean(haus),
    results,
    policyNote:
      "DE sense: DWDS/Duden only. LOD: lb TARGET official only. TRANSLATION_VALIDATED: lb only. mk/nn/other: dictionary FOUND pilots only.",
    generatedAt: new Date().toISOString(),
  };
  fs.writeFileSync(path.join(OUT_DIR, "card-translation-production-a1-verification.json"), `${JSON.stringify(gate, null, 2)}\n`);
  console.log(JSON.stringify({ pass: gate.pass, blockers, lbSampleSize: gate.lbSampleSize, haus: haus?.translationAuditVerdict }, null, 2));
  process.exit(gate.pass ? 0 : 1);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
