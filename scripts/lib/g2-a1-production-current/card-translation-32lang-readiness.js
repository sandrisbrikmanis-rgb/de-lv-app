#!/usr/bin/env node
"use strict";

/**
 * Kartes tulkošanas gatavība — balstīta uz verify-g2-a1-card-translation-32lang-full.js artefaktu.
 * Valodu nedrīkst atzīmēt FULL ar manuālu karogu.
 */

const fs = require("fs");
const path = require("path");
const { ROOT } = require("../audit-common");
const { EXPECTED_APP_LANGUAGES } = require("./constants");
const { listAllTargetAppLanguages } = require("./source-adapters/target");
const { manifestRowForLang } = require("./card-translation-bilingual-collector");
const { getTargetAdapterMeta } = require("./source-adapters/target");

const COLLECTOR_STAGE = Object.freeze({
  NOT_IMPLEMENTED: "NOT_IMPLEMENTED",
  DICTIONARY_FOUND_PILOT_ONLY: "DICTIONARY_FOUND_PILOT_ONLY",
  FULL_DE_TO_TARGET_COLLECTOR: "FULL_DE_TO_TARGET_COLLECTOR",
});

const VERIFICATION_JSON = path.join(
  ROOT,
  "reports/g2-a1-production-current/card-translation-32lang-readiness/card-translation-32lang-full-verification.json",
);

function loadVerificationSnapshot() {
  if (!fs.existsSync(VERIFICATION_JSON)) return null;
  try {
    return JSON.parse(fs.readFileSync(VERIFICATION_JSON, "utf8"));
  } catch {
    return null;
  }
}

function isLanguageCardTranslationReady(row) {
  return Boolean(row.cardTranslationReady);
}

function staticMeta(appLang) {
  if (appLang === "lb") {
    return {
      collectorId: "lb-lod-de-reverse-api",
      bilingualSourceUrl: "https://lod.lu/api/de/search",
      targetValidatorAdapterId: "lb-lod-official-lb-search",
    };
  }
  const m = manifestRowForLang(appLang);
  const t = getTargetAdapterMeta(appLang);
  return {
    collectorId: m?.overrideId || (m ? `manifest-${appLang}` : null),
    bilingualSourceUrl: m?.url || null,
    targetValidatorAdapterId: t?.id || null,
  };
}

function buildRowFromVerification(appLang, verifiedLang) {
  const col = verifiedLang?.collector || staticMeta(appLang);
  const tgt = verifiedLang?.targetValidator || { adapterId: staticMeta(appLang).targetValidatorAdapterId };
  const ready = Boolean(verifiedLang?.cardTranslationReady);
  return {
    appLang,
    deToTargetCollector: ready
      ? COLLECTOR_STAGE.FULL_DE_TO_TARGET_COLLECTOR
      : COLLECTOR_STAGE.NOT_IMPLEMENTED,
    targetOfficialValidation: ready,
    cardTranslationReady: ready,
    collectorId: col.collectorId,
    bilingualSourceUrl: col.bilingualSourceUrl,
    targetValidatorAdapterId: tgt.adapterId,
    targetAuthorityUrl: tgt.masterSourceUrl,
    blockers: verifiedLang?.blockers || [{ code: "NOT_VERIFIED_RUN_FULL_VERIFY" }],
    productionPilot: verifiedLang?.productionPilot || null,
  };
}

function defaultNotVerifiedRow(appLang) {
  const meta = staticMeta(appLang);
  return {
    appLang,
    deToTargetCollector: COLLECTOR_STAGE.NOT_IMPLEMENTED,
    targetOfficialValidation: false,
    cardTranslationReady: false,
    collectorId: meta.collectorId,
    bilingualSourceUrl: meta.bilingualSourceUrl,
    targetValidatorAdapterId: meta.targetValidatorAdapterId,
    blockers: [{ code: "RUN_verify-g2-a1-card-translation-32lang-full" }],
  };
}

function getCardTranslation32LangReadiness() {
  const appLangs = listAllTargetAppLanguages().sort();
  const snap = loadVerificationSnapshot();
  const byLang = new Map((snap?.languages || []).map((r) => [r.appLang, r]));

  const languages = appLangs.map((appLang) => {
    const v = byLang.get(appLang);
    if (v) return buildRowFromVerification(appLang, v);
    return defaultNotVerifiedRow(appLang);
  });

  const ready = languages.filter((l) => l.cardTranslationReady);
  const notReady = languages.filter((l) => !l.cardTranslationReady);

  return {
    schemaVersion: "g2-a1-card-translation-32lang-readiness-v2",
    expectedCount: EXPECTED_APP_LANGUAGES,
    registryLanguageCount: appLangs.length,
    readyCount: ready.length,
    remainingCount: EXPECTED_APP_LANGUAGES - ready.length,
    fullCardTranslationBatchReady:
      snap?.fullCardTranslationBatchReady === true && ready.length === EXPECTED_APP_LANGUAGES,
    readyLanguages: ready.map((l) => l.appLang),
    notReadyLanguages: notReady.map((l) => l.appLang),
    languages,
    verificationArtifact: fs.existsSync(VERIFICATION_JSON) ? VERIFICATION_JSON : null,
    classification: snap?.classification || "CARD_TRANSLATION_READINESS_IN_PROGRESS",
    nextAction: snap?.nextAction || "CONTINUE_DE_TO_TARGET_COLLECTORS_AND_TARGET_VALIDATORS_PER_LANGUAGE",
  };
}

function isFullCardTranslationBatchReady() {
  return getCardTranslation32LangReadiness().fullCardTranslationBatchReady;
}

module.exports = {
  COLLECTOR_STAGE,
  getCardTranslation32LangReadiness,
  isLanguageCardTranslationReady,
  isFullCardTranslationBatchReady,
  loadVerificationSnapshot,
  VERIFICATION_JSON,
};
