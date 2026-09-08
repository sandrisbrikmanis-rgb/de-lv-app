#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { entryId } = require("../content-crowdin-bridge/slug");
const { parseCrowdinJson } = require("../content-crowdin-bridge/guards");
const { loadG2Level } = require("../content-crowdin-bridge/roundtrip");
const { applyG2FlashcardsFlat } = require("../content-crowdin-bridge/flatten-g2-flashcards");
const { getCardType } = require("../main-translation-field-inventory");
const { getBatchLimit } = require("../luna-phase1-core");
const { STAGING_ROOT, EXPECTED_OBJECT_COUNT } = require("./constants");

function stagingFilePath(lang, stagingRoot = STAGING_ROOT) {
  return path.join(stagingRoot, `${lang}-a1.json`);
}

function loadCrowdinFlat(lang, stagingRoot = STAGING_ROOT) {
  const filePath = stagingFilePath(lang, stagingRoot);
  if (!fs.existsSync(filePath)) {
    const err = new Error(`STAGING_FILE_MISSING:${filePath}`);
    err.code = "STAGING_FILE_MISSING";
    throw err;
  }
  return parseCrowdinJson(fs.readFileSync(filePath, "utf8"));
}

function loadG2StagingCards(lang, level = "a1", stagingRoot = STAGING_ROOT) {
  const lvCards = loadG2Level("lv", level);
  if (lvCards.length !== EXPECTED_OBJECT_COUNT) {
    throw new Error(`LV_OBJECT_COUNT_MISMATCH:${lvCards.length}`);
  }
  const flat = loadCrowdinFlat(lang, stagingRoot);
  return applyG2FlashcardsFlat(level, lvCards, flat);
}

function loadG2StagingObjects(lang, level = "a1", stagingRoot = STAGING_ROOT) {
  const cards = loadG2StagingCards(lang, level, stagingRoot);
  const productionFile = `crowdin-staging/g2/${lang}-${level}.json`;
  return cards.map((card, index) => ({
    id: entryId(card, index),
    cardType: getCardType(card),
    de: card.de || "",
    lv: card.lv || "",
    study: card.study || null,
    productionFile,
    index,
    auditSource: "crowdin-staging",
  }));
}

function splitObjectsByCardType(objects) {
  const groups = {
    ordinary: [],
    minimalStudy: [],
    standardStudy: [],
  };
  for (const obj of objects) {
    const type = obj.cardType || "ordinary";
    if (groups[type]) groups[type].push(obj);
    else groups.ordinary.push(obj);
  }
  return groups;
}

function getBatchSizeForCardType(cardType) {
  return getBatchLimit("g2", "a1", cardType);
}

module.exports = {
  stagingFilePath,
  loadCrowdinFlat,
  loadG2StagingCards,
  loadG2StagingObjects,
  splitObjectsByCardType,
  getBatchSizeForCardType,
};
