#!/usr/bin/env node
"use strict";

const { loadG2Level } = require("../content-crowdin-bridge/roundtrip");
const { LEVEL } = require("./constants");
const { stripQuotes } = require("./source-adapters/lookup-normalization");
const { findCardObject } = require("./targeted-field-payload");

function inferPartOfSpeechFromCard(card) {
  if (!card) return null;
  if (card.de_article) return "noun";
  return null;
}

/**
 * DE metadati no kartītes / fieldRequest — bez AI ģenerēta germanMeaning.
 * @param {object} fieldRequest — buildTargetedFieldRequest() izvade
 */
function buildCardGermanFromFieldRequest(fieldRequest) {
  const lang = fieldRequest.language;
  const cardId = fieldRequest.cardId;
  let fullCard = findCardObject(lang, cardId);
  if (!fullCard?.de && fieldRequest.cardContext?.objectIndex != null) {
    const cards = loadG2Level(lang, LEVEL);
    fullCard = cards[fieldRequest.cardContext.objectIndex] || fullCard;
  }
  if (!fullCard?.de) {
    const deHint = fieldRequest.cardContext?.de || fieldRequest.DE;
    fullCard =
      loadG2Level(lang, LEVEL).find((c) => stripQuotes(c.de) === stripQuotes(deHint)) || fullCard;
  }

  const lemma = stripQuotes(fullCard?.de || fieldRequest.cardContext?.de || fieldRequest.DE || "");
  const article = fullCard?.de_article ? stripQuotes(fullCard.de_article) : null;
  const partOfSpeech = inferPartOfSpeechFromCard(fullCard);

  /** Konteksts no kartītes (study u.c.) — tikai production lauki */
  const contextSnippet = (() => {
    const study = fullCard?.study;
    if (study && typeof study === "object") {
      const parts = Object.values(study).filter((v) => typeof v === "string" && v.length > 0 && v.length < 400);
      if (parts.length) return parts.join(" | ").slice(0, 400);
    }
    return fieldRequest.cardContext?.study ? String(fieldRequest.cardContext.study).slice(0, 400) : null;
  })();

  return {
    lemma,
    partOfSpeech,
    article,
    /** Tukšs — nozīme tiek ņemta no DE avota fragmenta audita laikā, nevis no AI */
    germanMeaning: null,
    deSenseNote: null,
    contextSnippet,
    productionCard: fullCard || null,
  };
}

module.exports = {
  buildCardGermanFromFieldRequest,
  inferPartOfSpeechFromCard,
};
