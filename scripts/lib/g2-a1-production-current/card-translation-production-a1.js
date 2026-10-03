#!/usr/bin/env node
"use strict";

const { loadG2Level } = require("../content-crowdin-bridge/roundtrip");
const { entryId } = require("../content-crowdin-bridge/slug");
const { LEVEL } = require("./constants");
const { productionA1Rel } = require("./paths");
const { buildTargetedFieldRequest } = require("./targeted-field-payload");

/**
 * Reālas production A1 kartītes (ne pilotu stubi) — fieldRequest `lv` laukam.
 */
function buildProductionA1FieldRequestsForLanguage(appLang, { maxCards = 25, deLemmasFilter = null } = {}) {
  const cards = loadG2Level(appLang, LEVEL);
  const productionFile = productionA1Rel(appLang);
  const out = [];

  for (let index = 0; index < cards.length && out.length < maxCards; index += 1) {
    const card = cards[index];
    const de = String(card.de || "").trim();
    const lv = String(card.lv || "").trim();
    if (!de || !lv) continue;
    if (deLemmasFilter && !deLemmasFilter.includes(de)) continue;

    const cardId = entryId(card, index);
    const missingRow = {
      language: appLang,
      productionFile,
      cardId,
      fieldPath: "lv",
      currentValue: lv,
      identityKey: `${appLang}|lv|${cardId}`,
      auditSource: "production-current",
      datasetProductionSha: "production-live",
      auditBaselineSha: "production-live",
    };
    const req = buildTargetedFieldRequest(missingRow);
    req.cardContext = {
      ...req.cardContext,
      de,
      targetHeadword: lv,
      objectIndex: index,
    };
    out.push({ index, de, lv, cardId, fieldRequest: req });
  }

  return {
    appLang,
    productionFile,
    cardCount: cards.length,
    sampled: out.length,
    rows: out,
  };
}

module.exports = {
  buildProductionA1FieldRequestsForLanguage,
};
