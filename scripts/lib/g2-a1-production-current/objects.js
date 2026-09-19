#!/usr/bin/env node
"use strict";

const { loadG2Level } = require("../content-crowdin-bridge/roundtrip");
const { entryId } = require("../content-crowdin-bridge/slug");
const { getCardType } = require("../main-translation-field-inventory");
const { getBatchLimit } = require("../luna-phase1-core");
const { AUDIT_SOURCE, LEVEL } = require("./constants");
const { productionA1Rel } = require("./paths");

function loadG2ProductionObjects(lang) {
  const productionFile = productionA1Rel(lang);
  const cards = loadG2Level(lang, LEVEL);
  return cards.map((card, index) => ({
    id: entryId(card, index),
    cardType: getCardType(card),
    de: card.de || "",
    lv: card.lv || "",
    study: card.study || null,
    productionFile,
    language: lang,
    index,
    auditSource: AUDIT_SOURCE,
  }));
}

function splitObjectsByCardType(objects) {
  const groups = {
    ordinary: [],
    minimalStudy: [],
    standardStudy: [],
    comparisonStudy: [],
  };
  for (const obj of objects) {
    const type = obj.cardType || "ordinary";
    if (groups[type]) groups[type].push(obj);
    else groups.ordinary.push(obj);
  }
  return groups;
}

function getBatchSizeForCardType(cardType) {
  if (cardType === "comparisonStudy") return getBatchLimit("g2", "a1", "standardStudy");
  return getBatchLimit("g2", "a1", cardType === "ordinary" ? undefined : cardType);
}

function verifyBatchLimitsForLang(objects) {
  const groups = splitObjectsByCardType(objects);
  const limits = {};
  let pass = true;
  for (const [cardType, group] of Object.entries(groups)) {
    if (!group.length) continue;
    const max = getBatchSizeForCardType(cardType === "comparisonStudy" ? "standardStudy" : cardType);
    limits[cardType] = { count: group.length, maxBatch: max, pass: max <= 25 || cardType !== "ordinary" };
    if (cardType === "ordinary" && max !== 25) pass = false;
    if (cardType === "minimalStudy" && max !== 10) pass = false;
    if (cardType === "standardStudy" && max !== 5) pass = false;
    if (cardType === "comparisonStudy" && max !== 5) pass = false;
  }
  return { pass, limits, groups };
}

module.exports = {
  loadG2ProductionObjects,
  splitObjectsByCardType,
  getBatchSizeForCardType,
  verifyBatchLimitsForLang,
};
