#!/usr/bin/env node
"use strict";

const { loadG2Level } = require("../content-crowdin-bridge/roundtrip");
const { entryId } = require("../content-crowdin-bridge/slug");
const { LEVEL } = require("./constants");
const { runCardTranslationAuditForLanguage, lookupDeForCard } = require("./card-translation-lang-run");
const { SOURCE_ACCESS_OUTCOME } = require("./official-source-access-constants");
const { selectedDictionaryCandidateForLang } = require("./card-translation-catalog-collector");
const {
  assessPositiveRegressionVerdict,
  assessHausPilotTargetOfficialValidation,
  assessBilingualCollectorProven,
  provenTargetLemmaFromAudit,
  targetSourceUrlFromAudit,
} = require("./card-translation-audit-flow");
const { isForbiddenTranslationHost, manifestSourceAllowed } = require("./card-translation-forbidden-sources");
const { isGermanDeAuthorityDwdsOrDuden } = require("./card-translation-audit-policy");
const { TRANSLATION_AUDIT_VERDICT } = require("./card-translation-audit-search");
const { getTargetAdapterMeta } = require("./source-adapters/target");
const { loadRegistryRows } = require("./registry-bindings");
const { matrixRowForLanguage } = require("./source-adapters/target");

function findHausProductionCard(appLang) {
  const cards = loadG2Level(appLang, LEVEL);
  for (let index = 0; index < cards.length; index += 1) {
    const card = cards[index];
    if (card.de === "Haus" && card.de_article === "das") {
      return {
        index,
        cardId: entryId(card, index),
        de: card.de,
        currentTarget: card.lv,
        partOfSpeech: "noun",
        article: card.de_article,
      };
    }
  }
  return null;
}

function targetValidatorMeta(appLang) {
  const loaded = loadRegistryRows();
  const row = loaded.pass ? loaded.rows.find((r) => r.appCode === appLang) : null;
  const matrix = row ? matrixRowForLanguage(row) : null;
  const reg = getTargetAdapterMeta(appLang);
  return {
    adapterId: matrix?.adapterId || reg?.id || null,
    authorityName: matrix?.authorityName || null,
    masterSourceUrl: matrix?.masterSourceUrl || reg?.masterUrl || null,
    entryValidation: matrix?.entryValidation || null,
    liveIntegrationStatus: matrix?.liveIntegrationStatus || null,
  };
}

function collectorMeta(appLang) {
  if (appLang === "lb") {
    return {
      collectorId: "lb-lod-de-reverse-api",
      bilingualSourceUrl: "https://lod.lu/api/de/search",
      sourceType: "OFFICIAL_BILINGUAL_LEXICON",
    };
  }
  const selected = selectedDictionaryCandidateForLang(appLang);
  const allowed = selected ? manifestSourceAllowed({ url: selected.url, type: selected.type }) : { ok: false };
  return {
    collectorId: selected?.id || null,
    bilingualSourceUrl: selected?.url || null,
    sourceType: selected?.type || null,
    platform: selected?.platform || null,
    manifestAllowed: allowed.ok,
  };
}

/**
 * Viena valodas gatavības vārti — nav manuāla FULL karoga.
 */
async function verifyCardTranslationLanguageReadiness(appLang) {
  const blockers = [];
  const col = collectorMeta(appLang);
  const tgt = targetValidatorMeta(appLang);

  if (!col.collectorId) blockers.push({ code: "MISSING_COLLECTOR_ID" });
  if (!col.bilingualSourceUrl && appLang !== "lb") blockers.push({ code: "MISSING_BILINGUAL_SOURCE_URL" });
  if (col.bilingualSourceUrl && isForbiddenTranslationHost(col.bilingualSourceUrl)) {
    blockers.push({ code: "BILINGUAL_SOURCE_FORBIDDEN_AUTO_TRANSLATOR" });
  }
  if (col.manifestAllowed === false) blockers.push({ code: "MANIFEST_SOURCE_NOT_ALLOWED" });
  if (!tgt.adapterId) blockers.push({ code: "MISSING_TARGET_VALIDATOR_ADAPTER" });
  if (!tgt.masterSourceUrl) blockers.push({ code: "MISSING_TARGET_MASTER_URL" });

  const autoTranslatorRejection = {
    pass: isForbiddenTranslationHost("https://translate.google.com/"),
    testedHost: "translate.google.com",
  };
  if (!autoTranslatorRejection.pass) blockers.push({ code: "AUTO_TRANSLATOR_GUARD_BROKEN" });

  const haus = findHausProductionCard(appLang);
  let productionPilot = { pass: false, code: "HAUS_CARD_MISSING" };
  let positiveRegression = { pass: false, code: "SKIPPED" };

  if (haus) {
    const cardGerman = {
      lemma: "Haus",
      partOfSpeech: "noun",
      article: "das",
      germanMeaning: null,
    };
    const audit = await runCardTranslationAuditForLanguage(appLang, cardGerman, haus.currentTarget);
    if (!isGermanDeAuthorityDwdsOrDuden(audit.deAuthority)) {
      blockers.push({ code: "DE_NOT_DWDS_DUDEN", url: audit.deAuthority?.entryUrl });
    }
    if (audit.deAuthority?.entryUrl && /lod\.lu/i.test(audit.deAuthority.entryUrl)) {
      blockers.push({ code: "DE_USED_LOD_INSTEAD_OF_DWDS" });
    }

    const regression = assessPositiveRegressionVerdict(audit, cardGerman);
    const targetOfficial = assessHausPilotTargetOfficialValidation(audit);
    const bilingualProven = assessBilingualCollectorProven(audit, appLang);
    const targetSourceUrl = targetSourceUrlFromAudit(audit);
    const provenTargetLemma = provenTargetLemmaFromAudit(audit);

    productionPilot = {
      pass: false,
      positiveRegressionPass: regression.pass,
      cardId: haus.cardId,
      currentTarget: haus.currentTarget,
      verdict: audit.verdict,
      blockers: audit.blockers,
      regressionDetail: regression.code || null,
      targetOfficialValidation: targetOfficial.valid,
      bilingualCollectorProven: bilingualProven,
      deSourceUrl: audit.deSourceUrl || audit.deAuthority?.entryUrl || null,
      bilingualSourceUrl: audit.bilingualSourceUrl || audit.bilingualMeta?.sourceUrl || null,
      bilingualResultUrl: audit.bilingualResultUrl || audit.bilingualMeta?.resultUrl || null,
      targetSourceUrl,
      provenTargetLemma,
    };
    positiveRegression = {
      pass: regression.pass,
      deLemma: "Haus",
      acceptableVerdicts: [
        TRANSLATION_AUDIT_VERDICT.TRANSLATION_VALIDATED,
        TRANSLATION_AUDIT_VERDICT.FINDING,
      ],
      got: audit.verdict,
      detail: regression.code || null,
    };

    if (!bilingualProven) {
      blockers.push({ code: "BILINGUAL_COLLECTOR_NOT_PROVEN", verdict: audit.verdict });
    }
    if (!targetOfficial.valid) {
      blockers.push({
        code: "TARGET_OFFICIAL_VALIDATION_INCOMPLETE",
        verdict: audit.verdict,
        detail: targetOfficial.code,
        targetSourceUrl,
        provenTargetLemma,
      });
    }
    if (audit.verdict === TRANSLATION_AUDIT_VERDICT.NEEDS_SOURCE_REVIEW) {
      blockers.push({
        code: "NSR_DOES_NOT_SATISFY_READINESS",
        verdict: audit.verdict,
        auditBlockers: audit.blockers?.map((b) => b.code),
      });
    } else if (!regression.pass) {
      blockers.push({
        code: "PRODUCTION_HAUS_POSITIVE_REGRESSION_FAIL",
        verdict: audit.verdict,
        detail: regression.code || audit.blockers?.[0]?.code,
      });
    }

  } else {
    blockers.push({ code: "PRODUCTION_HAUS_CARD_NOT_FOUND" });
  }

  const negativeRegression = await (async () => {
    const cardGerman = { lemma: "zzqqxxnotaword999", partOfSpeech: "noun" };
    const de = await lookupDeForCard(cardGerman);
    if (de.outcome !== SOURCE_ACCESS_OUTCOME.SOURCE_ENTRY_VALIDATED) {
      return { pass: true, got: TRANSLATION_AUDIT_VERDICT.DE_NOT_CONFIRMED, mode: "de_authority_reject" };
    }
    const audit = await runCardTranslationAuditForLanguage(appLang, cardGerman, "zzqqxxnotaword999");
    const ok =
      audit.verdict === TRANSLATION_AUDIT_VERDICT.DE_NOT_CONFIRMED ||
      audit.verdict === TRANSLATION_AUDIT_VERDICT.NO_ELIGIBLE_DICTIONARY_CANDIDATE ||
      audit.verdict === TRANSLATION_AUDIT_VERDICT.NEEDS_SOURCE_REVIEW;
    return { pass: ok, got: audit.verdict, mode: "full_audit" };
  })();
  if (!negativeRegression.pass) {
    blockers.push({ code: "NEGATIVE_REGRESSION_FAIL", got: negativeRegression.got });
  }

  const cardTranslationReady = blockers.length === 0;
  if (productionPilot.cardId) {
    productionPilot.pass = cardTranslationReady;
  }

  return {
    appLang,
    cardTranslationReady,
    targetOfficialValidation: Boolean(productionPilot?.targetOfficialValidation),
    blockers,
    collector: col,
    targetValidator: tgt,
    autoTranslatorRejection,
    positiveRegression,
    negativeRegression,
    productionPilot,
  };
}

module.exports = {
  verifyCardTranslationLanguageReadiness,
  findHausProductionCard,
  collectorMeta,
  targetValidatorMeta,
};
