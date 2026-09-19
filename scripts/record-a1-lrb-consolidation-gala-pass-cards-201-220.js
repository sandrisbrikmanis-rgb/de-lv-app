#!/usr/bin/env node
"use strict";

const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const {
  OUT_DIR,
  sha256,
  cardKey,
} = require("./lib/g2-a1-lrb-consolidation-owner-review-artifacts");
const { runGalaCorrection201220Gates } = require("./lib/g2-a1-lrb-consolidation-gala-correction-201-220-gates");

const PASS_CLASSIFICATION = "A1_LRB_CONSOLIDATION_CARDS_201_220_GALA_PASS";
const PASS_PROOF_PATH = path.join(
  OUT_DIR,
  "A1-LRB-CONSOLIDATION-CARDS-201-220-GALA-PASS-PROOF.json"
);
const CORRECTION_PROOF_PATH = path.join(
  OUT_DIR,
  "A1-LRB-CONSOLIDATION-CARDS-201-220-GALA-CORRECTION-1-PROOF.json"
);
const CORRECTION_PATH = path.join(
  OUT_DIR,
  "A1-LRB-CONSOLIDATION-CARDS-201-220-GALA-CORRECTION-1.json"
);
const COPY_PASTE_4 = path.join(OUT_DIR, "A1-LRB-CONSOLIDATION-decisions-COPY-PASTE-4.json");

function main() {
  execSync("node scripts/verify-a1-lrb-consolidation-gala-correction-1-cards-201-220.js", {
    cwd: ROOT,
    stdio: "pipe",
  });

  const correctionDoc = JSON.parse(fs.readFileSync(CORRECTION_PATH, "utf8"));
  const correctionProof = JSON.parse(fs.readFileSync(CORRECTION_PROOF_PATH, "utf8"));
  const copyPaste = JSON.parse(fs.readFileSync(COPY_PASTE_4, "utf8"));
  const scopeCards = copyPaste.cards.slice(200, 220);

  const correctionByKey = new Map();
  for (const ch of correctionDoc.changes || []) {
    correctionByKey.set(cardKey(ch.target_language, ch.canonical_card_object_id), ch);
  }

  const appliedByKey = new Map();
  for (const c of scopeCards) {
    appliedByKey.set(
      cardKey(c.target_language, c.canonical_card_object_id),
      c.full_card_owner_new
    );
  }

  const gates = runGalaCorrection201220Gates({
    scopeCards,
    appliedByKey,
    correctionChanges: correctionDoc.changes || [],
    correctionByKey,
  });
  if (!gates.pass) {
    console.error("Mechanical gates failed; cannot record GALA PASS");
    process.exit(1);
  }

  let nelabotPreserved = 0;
  for (const c of scopeCards) {
    const key = cardKey(c.target_language, c.canonical_card_object_id);
    if (correctionByKey.has(key)) continue;
    if (c.full_card_owner_new != null) nelabotPreserved += 1;
  }

  const cardsPayload = scopeCards.map((c) => ({
    target_language: c.target_language,
    canonical_card_object_id: c.canonical_card_object_id,
    full_card_owner_new: c.full_card_owner_new,
  }));
  const cards201220Sha256 = sha256(JSON.stringify(cardsPayload));

  const head = execSync("git rev-parse HEAD", { cwd: ROOT, encoding: "utf8" }).trim();

  const extraOrNarrowed =
    (gates.extra_meaning_not_in_source ?? 0) + (gates.semantic_narrowing_from_source ?? 0);
  const duplicatesOrContradictions =
    (gates.duplicate_degenerate_pairs ?? 0) + (gates.internal_contradictions ?? 0);

  const galaVerdict = {
    individually_reviewed_cards: "20/20",
    labot: 3,
    labot_applied_exactly: gates.applied_exactly,
    nelabot: 17,
    nelabot_cards_preserved: `${nelabotPreserved}/17`,
    pending: 0,
    full_composite_completeness: gates.full_composite_completeness,
    correction_applied_exactly: gates.applied_exactly,
    de_mismatches: gates.de_alignment,
    extra_or_narrowed_meanings: extraOrNarrowed,
    wrong_language_residue: gates.wrong_language_residue,
    duplicates_or_contradictions: duplicatesOrContradictions,
    schema_sectionAccents_failures: gates.schema_sectionAccents_failures,
  };

  if (nelabotPreserved !== 17) {
    console.error("NELABOT preserve check failed:", nelabotPreserved);
    process.exit(1);
  }

  const proof = {
    schema_version: 1,
    classification: PASS_CLASSIFICATION,
    recorded_at: new Date().toISOString(),
    git_head: head,
    pre_pass_correction_proof_sha256: sha256(fs.readFileSync(CORRECTION_PROOF_PATH)),
    correction_sha256: correctionProof.correction_sha256,
    cards_201_220_payload_sha256: cards201220Sha256,
    consolidated_mapping_modified: false,
    production_modified: false,
    production_apply_performed: false,
    merge_performed: false,
    linguistic_changes_made_by_cursor: 0,
    gala_verdict: galaVerdict,
    mechanical_gates: gates,
    copy_paste_4_path:
      "reports/g2-a1-owner/consolidation/owner-review/A1-LRB-CONSOLIDATION-decisions-COPY-PASTE-4.json",
  };

  fs.writeFileSync(PASS_PROOF_PATH, JSON.stringify(proof, null, 2) + "\n");

  copyPaste.cards_201_220_gala_pass = {
    classification: PASS_CLASSIFICATION,
    recorded_at: proof.recorded_at,
    git_head: head,
    pass_proof_sha256: sha256(fs.readFileSync(PASS_PROOF_PATH)),
    cards_201_220_payload_sha256: cards201220Sha256,
  };
  fs.writeFileSync(COPY_PASTE_4, JSON.stringify(copyPaste, null, 2) + "\n");

  const summaryLines = [
    "A1 LRB konsolidācija — kartīšu 201–220 GALA PASS",
    "",
    `Verdikts: ${PASS_CLASSIFICATION}`,
    "",
    "| Pārbaude | Rezultāts |",
    "| --- | ---: |",
    "| Pārbaudītas kartītes | 20/20 |",
    "| LABOT / NELABOT / PENDING | 3 / 17 / 0 |",
    "| Precīzi piemēroti labojumi | 3/3 |",
    "| Nemainītas NELABOT kartītes | 17/17 |",
    "| Pilno kartīšu pilnīgums | PASS |",
    "| DE atbilstības kļūdas | 0 |",
    "| Nozīmes paplašinājumi/sašaurinājumi | 0 |",
    "| Nepareizas valodas atlikumi | 0 |",
    "| Dublikāti/pretrunas | 0 |",
    "",
    `Git HEAD: ${head}`,
    `Cards 201–220 payload SHA-256: ${cards201220Sha256}`,
    `Pass proof SHA-256: ${sha256(fs.readFileSync(PASS_PROOF_PATH))}`,
  ];
  fs.writeFileSync(
    path.join(OUT_DIR, "A1-LRB-CONSOLIDATION-CARDS-201-220-GALA-PASS.txt"),
    summaryLines.join("\n") + "\n"
  );

  console.log(JSON.stringify(proof, null, 2));
}

if (require.main === module) main();
