#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const {
  applyOwnerCopyPasteBatch,
  OUT_DIR,
} = require("./lib/g2-a1-lrb-consolidation-owner-copy-paste-apply");
const { runOwnerCopyPasteExtendedGates } = require("./lib/g2-a1-lrb-consolidation-owner-copy-paste-extended-gates");

const SLICE_START = 160;
const SLICE_END = 180;
const DEFAULT_BUNDLE = path.join(
  OUT_DIR,
  "A1-LRB-CONSOLIDATION-decisions-COPY-PASTE-4-CARDS-161-180.json"
);
const PROOF_PATH = path.join(
  OUT_DIR,
  "A1-LRB-CONSOLIDATION-OWNER-CARDS-161-180-COPY-PASTE-PROOF.json"
);
const EXPECTED_CLASSIFICATION =
  "A1_LRB_CONSOLIDATION_OWNER_CARDS_161_180_FULL_CARD_COPY_PASTE_READY";
const PROOF_CLASSIFICATION =
  "A1_LRB_CONSOLIDATION_OWNER_CARDS_161_180_COPY_PASTE_COMPLETE_AWAITING_GALA_VERDICT";
const EXPECTED_OWNER_SHA = "30d1890626e1a70f713f2bf27c65af1c86b2695c86f22e0ea29d58abba9458eb";
const EXPECTED_SOURCE_HEAD = "c399ca06d8bc50a0fa09ea0355834612e174c12b";

function main() {
  const srcArg = process.argv[2];
  const src = srcArg ? path.resolve(srcArg) : DEFAULT_BUNDLE;
  if (!fs.existsSync(src)) {
    console.error("Owner cards 161–180 bundle not found:", src);
    process.exit(1);
  }
  const ownerRaw = fs.readFileSync(src);
  const ownerBundle = JSON.parse(ownerRaw.toString("utf8"));

  fs.mkdirSync(OUT_DIR, { recursive: true });
  if (src !== DEFAULT_BUNDLE) {
    fs.writeFileSync(DEFAULT_BUNDLE, ownerRaw);
  }

  try {
    const proof = applyOwnerCopyPasteBatch({
      ownerBundle,
      ownerRaw,
      ownerBundleRelPath:
        "reports/g2-a1-owner/consolidation/owner-review/A1-LRB-CONSOLIDATION-decisions-COPY-PASTE-4-CARDS-161-180.json",
      sliceStart: SLICE_START,
      sliceEnd: SLICE_END,
      expectedClassification: EXPECTED_CLASSIFICATION,
      proofPath: PROOF_PATH,
      sourceReviewPackRef: { git_head: ownerBundle.source_head || EXPECTED_SOURCE_HEAD },
      proofClassification: PROOF_CLASSIFICATION,
      expectedOwnerSha256: EXPECTED_OWNER_SHA,
      expectedSourceHead: EXPECTED_SOURCE_HEAD,
      gatesRunner: runOwnerCopyPasteExtendedGates,
      scopeMeta: {
        start_ordinal: 161,
        end_ordinal: 180,
        cards: 20,
        full_composites: 20,
        scalar_cards: 0,
        pending: 0,
      },
    });

    const taskLines = [
      "A1 LRB — kartīšu 161–180 OWNER COPY/PASTE (piemērots)",
      "",
      `Klasifikācija: ${PROOF_CLASSIFICATION}`,
      `Sākuma HEAD (ref): ${EXPECTED_SOURCE_HEAD}`,
      `OWNER JSON SHA-256: ${proof.owner_bundle_sha256}`,
      `Git HEAD: ${proof.git_head}`,
      "",
      "Vārti:",
      `- applied_exactly: ${proof.gates.applied_exactly}`,
      `- pending: ${proof.gates.pending}`,
      `- empty target fields: ${proof.gates.empty_target_fields}`,
      `- wrong-language residue: ${proof.gates.wrong_language_residue}`,
      `- semantic/source-fidelity violations: ${proof.gates.semantic_source_fidelity_violations}`,
      `- DE examples index alignment: ${proof.gates.de_examples_index_alignment}`,
      `- duplicate/degenerate pairs: ${proof.gates.duplicate_degenerate_pairs}`,
      `- internal contradictions: ${proof.gates.internal_contradictions}`,
      `- full composite completeness: ${proof.gates.full_composite_completeness}`,
      `- schema/sectionAccents failures: ${proof.gates.schema_sectionAccents_failures}`,
      "",
      "Nav GALA PASS; nav merge/apply/production.",
    ];
    fs.writeFileSync(
      path.join(OUT_DIR, "A1-LRB-CONSOLIDATION-VEICAMO-LABOJUMU-UZDEVUMS-4-CARDS-161-180-APPLIED.txt"),
      taskLines.join("\n") + "\n"
    );

    console.log(JSON.stringify(proof, null, 2));
    if (!proof.gates.pass) process.exit(1);
  } catch (err) {
    console.error(err.message || err);
    process.exit(1);
  }
}

if (require.main === module) main();
