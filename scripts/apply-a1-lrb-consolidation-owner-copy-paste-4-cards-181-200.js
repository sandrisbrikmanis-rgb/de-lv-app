#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const {
  applyOwnerCopyPasteBatch,
  OUT_DIR,
} = require("./lib/g2-a1-lrb-consolidation-owner-copy-paste-apply");
const { runOwnerCopyPasteExtendedGates } = require("./lib/g2-a1-lrb-consolidation-owner-copy-paste-extended-gates");

const SLICE_START = 180;
const SLICE_END = 200;
const DEFAULT_BUNDLE = path.join(
  OUT_DIR,
  "A1-LRB-CONSOLIDATION-decisions-COPY-PASTE-4-CARDS-181-200.json"
);
const PROOF_PATH = path.join(
  OUT_DIR,
  "A1-LRB-CONSOLIDATION-OWNER-CARDS-181-200-COPY-PASTE-PROOF.json"
);
const EXPECTED_CLASSIFICATION =
  "A1_LRB_CONSOLIDATION_OWNER_CARDS_181_200_FULL_CARD_COPY_PASTE_READY";
const PROOF_CLASSIFICATION =
  "A1_LRB_CONSOLIDATION_OWNER_CARDS_181_200_COPY_PASTE_COMPLETE_AWAITING_GALA_VERDICT";
const EXPECTED_OWNER_SHA = "d7aa7de5d9f521cc45917e25550a21ae8d9ff8ef9a46922abe50fd4286da095c";
const EXPECTED_SOURCE_HEAD = "75300102a0fa51f4da9be003349f1e409c93863d";

function main() {
  const srcArg = process.argv[2];
  const src = srcArg ? path.resolve(srcArg) : DEFAULT_BUNDLE;
  if (!fs.existsSync(src)) {
    console.error("Owner cards 181–200 bundle not found:", src);
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
        "reports/g2-a1-owner/consolidation/owner-review/A1-LRB-CONSOLIDATION-decisions-COPY-PASTE-4-CARDS-181-200.json",
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
        start_ordinal: 181,
        end_ordinal: 200,
        cards: 20,
        full_composites: 20,
        scalar_cards: 0,
        pending: 0,
      },
    });

    const taskLines = [
      "A1 LRB — kartīšu 181–200 OWNER COPY/PASTE (piemērots)",
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
      path.join(OUT_DIR, "A1-LRB-CONSOLIDATION-VEICAMO-LABOJUMU-UZDEVUMS-4-CARDS-181-200-APPLIED.txt"),
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
