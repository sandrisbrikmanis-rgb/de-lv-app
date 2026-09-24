#!/usr/bin/env node
"use strict";

const { loadG2Level } = require("../content-crowdin-bridge/roundtrip");
const { entryId } = require("../content-crowdin-bridge/slug");
const { LEVEL } = require("./constants");
const { runCardTranslationAuditForLanguage, lookupDeForCard } = require("./card-translation-lang-run");
const { SOURCE_ACCESS_OUTCOME } = require("./official-source-access-constants");
const { manifestRowForLang } = require("./card-translation-bilingual-collector");
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
  const manifest = manifestRowForLang(appLang);
  const allowed = manifest ? manifestSourceAllowed(manifest) : { ok: false };
  return {
    collectorId: manifest?.overrideId || (manifest ? `manifest-${appLang}` : null),
    bilingualSourceUrl: manifest?.url || null,
    sourceType: manifest?.type || null,
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

    productionPilot = {
      pass: audit.verdict === TRANSLATION_AUDIT_VERDICT.TRANSLATION_VALIDATED,
      cardId: haus.cardId,
      currentTarget: haus.currentTarget,
      verdict: audit.verdict,
      blockers: audit.blockers,
    };
    positiveRegression = {
      pass: productionPilot.pass,
      deLemma: "Haus",
      expectedVerdict: TRANSLATION_AUDIT_VERDICT.TRANSLATION_VALIDATED,
      got: audit.verdict,
    };
    if (!productionPilot.pass) {
      blockers.push({
        code: "PRODUCTION_HAUS_PILOT_NOT_VALIDATED",
        verdict: audit.verdict,
        detail: audit.blockers?.[0]?.code,
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

  return {
    appLang,
    cardTranslationReady,
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
