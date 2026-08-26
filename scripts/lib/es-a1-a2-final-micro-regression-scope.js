#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { ROOT } = require("./audit-common");
const { buildCards } = require("./es-a1-a2-audit-helpers");
const { resolveEntry, readCurrent, loadWords } = require("./es-a1-a2-final-regression-retention");
const { SCOPE_JSON } = require("./es-a1-a2-final-micro-regression-paths");

const OWNER_JSON = path.join(ROOT, "reports/es-de-a1-a2-final-regression-owner-decisions.json");

const MANDATORY_EXTRA_CARD_IDS = [
  "a2-kurz",
  "a1-besuch",
  "a1-besuchen",
  "a1-fussball-study",
  "a1-ganz-study",
  "a1-gefallen-study",
  "a1-geschichte-study",
  "a1-geschwister-study",
  "a1-grosseltern-study",
  "a1-hand-study",
  "a1-huebsch",
];

function buildScope(ownerJsonPath = OWNER_JSON) {
  const decisions = JSON.parse(fs.readFileSync(ownerJsonPath, "utf8"));
  const wordsByLevel = {
    a1: loadWords("data/es/a1.js", "A1_WORDS"),
    a2: loadWords("data/es/a2.js", "A2_WORDS"),
  };

  const cardMap = new Map();
  let missingCard = 0;
  let missingField = 0;

  for (const item of decisions.items) {
    const key = `${item.level}|${item.cardId}`;
    if (!cardMap.has(key)) {
      cardMap.set(key, {
        level: item.level,
        cardId: item.cardId,
        fields: [],
        ownerTargetIds: [],
      });
    }
    const row = cardMap.get(key);
    row.fields.push(item.field);
    row.ownerTargetIds.push(item.id);

    const { entry } = resolveEntry(wordsByLevel, item.cardId);
    if (!entry) missingCard += 1;
    else if (readCurrent(entry, item.field) === undefined) missingField += 1;
  }

  for (const cardId of MANDATORY_EXTRA_CARD_IDS) {
    const level = cardId.startsWith("a2-") ? "A2" : "A1";
    const key = `${level}|${cardId}`;
    if (!cardMap.has(key)) {
      cardMap.set(key, {
        level,
        cardId,
        fields: [],
        ownerTargetIds: [],
        mandatoryExtra: true,
      });
    } else {
      cardMap.get(key).mandatoryExtra = true;
    }
  }

  const cards = [...cardMap.values()].sort((a, b) => a.cardId.localeCompare(b.cardId));
  const cardIds = new Set(cards.map((c) => c.cardId));
  const { simple, study } = buildCards();
  const scopedSimple = simple.filter((c) => cardIds.has(c.cardId));
  const scopedStudy = study.filter((c) => cardIds.has(c.cardId));
  const foundIds = new Set([...scopedSimple, ...scopedStudy].map((c) => c.cardId));
  const notFound = cards.filter((c) => !foundIds.has(c.cardId));

  const payload = {
    ownerTargets: decisions.items.length,
    uniqueCards: cards.length,
    a1Cards: cards.filter((c) => c.level === "A1" || c.cardId.startsWith("a1-")).length,
    a2Cards: cards.filter((c) => c.level === "A2" || c.cardId.startsWith("a2-")).length,
    mandatoryExtras: MANDATORY_EXTRA_CARD_IDS,
    missingCardTargets: missingCard,
    missingFieldTargets: missingField,
    scopedSimple: scopedSimple.length,
    scopedStudy: scopedStudy.length,
    scopedTotal: scopedSimple.length + scopedStudy.length,
    cards,
    notFound: notFound.map((c) => c.cardId),
    cardIds: [...cardIds],
  };

  return { payload, scopedSimple, scopedStudy, decisions };
}

function saveScope(scope) {
  fs.mkdirSync(path.dirname(SCOPE_JSON), { recursive: true });
  fs.writeFileSync(SCOPE_JSON, JSON.stringify(scope.payload, null, 2) + "\n");
}

module.exports = {
  OWNER_JSON,
  MANDATORY_EXTRA_CARD_IDS,
  buildScope,
  saveScope,
};
