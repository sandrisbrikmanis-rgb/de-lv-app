#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const {
  analyzeProductionTargetAliases,
  validateProductionTargetAliasGate,
} = require("./lib/g2-a1-lrb-production-target-alias");
const { resolveProductionTargetStrict, productionEntrySha256 } = require("./lib/g2-a1-lrb-production-atomic-card");

const ROOT = path.join(__dirname, "..");
const atomic = JSON.parse(
  fs.readFileSync(
    path.join(ROOT, "reports/g2-a1-owner/consolidation/production-apply-prep/A1-LRB-001-103-PRODUCTION-ATOMIC-CARD-MAPPING.json"),
    "utf8"
  )
);

function main() {
  const analysis = analyzeProductionTargetAliases(atomic.cards);
  const gate = validateProductionTargetAliasGate(atomic.cards);

  const skGroup = analysis.proven_alias_group_details.find((g) => g.production_language === "sk" && g.production_array_index === 660);
  const r1 = resolveProductionTargetStrict("sk", "a1-wie");
  const r2 = resolveProductionTargetStrict("sk", "wie");
  const sameEntry =
    r1.ok &&
    r2.ok &&
    r1.index === 660 &&
    r2.index === 660 &&
    productionEntrySha256(r1.entry) === productionEntrySha256(r2.entry);

  const pass =
    gate.pass &&
    analysis.owner_target_keys === 234 &&
    analysis.unique_production_slots === 233 &&
    analysis.alias_collapsed_owner_keys === 1 &&
    analysis.proven_alias_groups === 1 &&
    analysis.unresolved_alias_conflicts === 0 &&
    skGroup &&
    skGroup.owner_card_keys.includes("sk|a1-wie") &&
    skGroup.owner_card_keys.includes("sk|wie") &&
    skGroup.production_current_entry_sha256 === "29000b1d10c14ef2c50cb94a20fcb848d59c41d1e5f1fae4a4b392a19adc8fb1" &&
    skGroup.production_planned_entry_sha256 === "8a30cd8a24523fc4aa40a6d1c8a16f5e18875c1cb5cde8c0342580d3b8e892ce" &&
    sameEntry;

  const out = {
    pass,
    gate_pass: gate.pass,
    analysis,
    sk_wie_same_live_entry: sameEntry,
  };
  console.log(JSON.stringify(out, null, 2));
  process.exit(pass ? 0 : 1);
}

main();
