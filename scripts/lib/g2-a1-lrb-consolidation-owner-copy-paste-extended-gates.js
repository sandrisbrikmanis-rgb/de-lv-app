#!/usr/bin/env node
"use strict";

const { runOwnerCopyPasteGates } = require("./g2-a1-lrb-consolidation-owner-copy-paste-gates");
const { assessFullCompositeCompleteness } = require("./g2-a1-lrb-consolidation-gala-correction-gates");
const { cardKey } = require("./g2-a1-lrb-consolidation-owner-review-artifacts");
function runOwnerCopyPasteExtendedGates({ scopeCards, sourceByKey, appliedByKey }) {
  const base = runOwnerCopyPasteGates({ scopeCards, sourceByKey, appliedByKey });
  const scopeKeys = scopeCards.map((c) => cardKey(c.target_language, c.canonical_card_object_id));

  let fullCompositeFailures = 0;
  for (const key of scopeKeys) {
    const applied = appliedByKey.get(key);
    if (!assessFullCompositeCompleteness(applied)) fullCompositeFailures += 1;
  }

  const pass = base.pass && fullCompositeFailures === 0;

  return {
    ...base,
    full_composite_completeness: fullCompositeFailures === 0 ? "PASS" : "FAIL",
    full_composite_completeness_failures: fullCompositeFailures,
    de_examples_index_alignment: base.de_alignment,
    pass,
  };
}

module.exports = { runOwnerCopyPasteExtendedGates };
