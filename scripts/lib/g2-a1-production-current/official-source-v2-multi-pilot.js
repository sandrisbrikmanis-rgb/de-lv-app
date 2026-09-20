#!/usr/bin/env node
"use strict";

const { accessOfficialSourcesForField } = require("./official-source-access");
const { evidenceQualityOk, isValidatedEntry } = require("./targeted-source-access-validation");
const { SOURCE_ACCESS_OUTCOME } = require("./official-source-access-constants");

function pilotField({ language, dataset, fieldPath, current, deLemma, cardId, identityKey }) {
  return {
    language,
    dataset,
    productionFile: `data/${language}.js`,
    cardId,
    fieldPath,
    CURRENT: current,
    DE: deLemma,
    cardContext: { de: deLemma },
    identityKey,
  };
}

const PILOTS = [
  {
    id: "de-bg-ordinary",
    description: "DE + BG (blocked target — expect technical, not dual validated)",
    field: pilotField({
      language: "bg",
      dataset: "ordinary",
      fieldPath: "cards[0].target",
      current: "учене",
      deLemma: "lernen",
      cardId: "pilot-bg-ordinary",
      identityKey: "pilot|bg|ordinary|0",
    }),
    requireDualValidated: false,
    expectTargetBlocked: true,
  },
  {
    id: "de-et-ordinary",
    description: "DE + ET",
    field: pilotField({
      language: "et",
      dataset: "ordinary",
      fieldPath: "cards[0].target",
      current: "õppima",
      deLemma: "lernen",
      cardId: "pilot-et-ordinary",
      identityKey: "pilot|et|ordinary|0",
    }),
    requireDualValidated: true,
  },
  {
    id: "de-gr-ordinary",
    description: "DE + GR/EL",
    field: pilotField({
      language: "gr",
      dataset: "ordinary",
      fieldPath: "cards[0].target",
      current: "σπίτι",
      deLemma: "lernen",
      cardId: "pilot-gr-ordinary",
      identityKey: "pilot|gr|ordinary|0",
    }),
    requireDualValidated: true,
  },
  {
    id: "de-en-latin",
    description: "DE + EN (Latin script target)",
    field: pilotField({
      language: "en",
      dataset: "ordinary",
      fieldPath: "cards[0].target",
      current: "learn",
      deLemma: "lernen",
      cardId: "pilot-en-ordinary",
      identityKey: "pilot|en|ordinary|0",
    }),
    requireDualValidated: true,
  },
  {
    id: "de-ru-cyrillic",
    description: "DE + RU (Cyrillic target)",
    field: pilotField({
      language: "ru",
      dataset: "ordinary",
      fieldPath: "cards[0].target",
      current: "учить",
      deLemma: "lernen",
      cardId: "pilot-ru-ordinary",
      identityKey: "pilot|ru|ordinary|0",
    }),
    requireDualValidated: false,
    expectTargetBlocked: true,
  },
  {
    id: "de-cs-inflection",
    description: "DE + CS (inflected target lookup)",
    field: pilotField({
      language: "cs",
      dataset: "ordinary",
      fieldPath: "cards[0].target",
      current: "učit se",
      deLemma: "lernen",
      cardId: "pilot-cs-ordinary",
      identityKey: "pilot|cs|ordinary|0",
    }),
    requireDualValidated: true,
  },
  {
    id: "de-et-study",
    description: "DE + ET study field",
    field: pilotField({
      language: "et",
      dataset: "study",
      fieldPath: "cards[0].studyHint",
      current: "õppima",
      deLemma: "lernen",
      cardId: "pilot-et-study",
      identityKey: "pilot|et|study|0",
    }),
    requireDualValidated: true,
  },
  {
    id: "de-en-sentence",
    description: "DE + EN full example sentence (lexical aspect only)",
    field: pilotField({
      language: "en",
      dataset: "ordinary",
      fieldPath: "cards[0].example",
      current: "learn German every day.",
      deLemma: "lernen",
      cardId: "pilot-en-sentence",
      identityKey: "pilot|en|sentence|0",
    }),
    requireDualValidated: true,
    note: "Sentence CURRENT — entry proves lemma only, not full sentence correctness",
  },
];

async function runOfficialSourceV2MultiPilot() {
  const results = [];
  const failures = [];

  for (const pilot of PILOTS) {
    // eslint-disable-next-line no-await-in-loop
    const bundle = await accessOfficialSourcesForField(pilot.field);
    const deOk = isValidatedEntry(bundle.de) && evidenceQualityOk(bundle.de);
    const targetOk = isValidatedEntry(bundle.target) && evidenceQualityOk(bundle.target);
    const dual = deOk && targetOk;
    const pass = pilot.requireDualValidated
      ? dual
      : pilot.expectTargetBlocked
        ? deOk && !targetOk
        : deOk;

    const row = {
      id: pilot.id,
      description: pilot.description,
      deOutcome: bundle.de.outcome,
      targetOutcome: bundle.target.outcome,
      dualValidated: dual,
      pass,
      deEntryUrl: bundle.de.entryUrl,
      targetEntryUrl: bundle.target.entryUrl,
    };
    results.push(row);
    if (!pass) {
      failures.push({
        id: pilot.id,
        deOutcome: bundle.de.outcome,
        targetOutcome: bundle.target.outcome,
        dual,
      });
    }
  }

  const requireDual = PILOTS.filter((p) => p.requireDualValidated);
  const dualPassCount = results.filter((r) => r.dualValidated).length;

  return {
    pass: failures.length === 0,
    pilotCount: PILOTS.length,
    dualValidatedCount: dualPassCount,
    dualValidatedRequired: requireDual.length,
    failures,
    results,
    classification: failures.length
      ? "G2_A1_OFFICIAL_SOURCE_V2_MULTI_PILOT_BLOCKED"
      : "G2_A1_OFFICIAL_SOURCE_V2_MULTI_PILOT_PASS",
  };
}

module.exports = { runOfficialSourceV2MultiPilot, PILOTS };
