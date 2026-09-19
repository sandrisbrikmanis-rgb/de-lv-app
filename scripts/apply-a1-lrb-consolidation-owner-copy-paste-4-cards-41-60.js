#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const {
  applyOwnerCopyPasteBatch,
  OUT_DIR,
} = require("./lib/g2-a1-lrb-consolidation-owner-copy-paste-apply");

const SLICE_START = 40;
const SLICE_END = 60;
const DEFAULT_BUNDLE = path.join(
  OUT_DIR,
  "A1-LRB-CONSOLIDATION-decisions-COPY-PASTE-4-CARDS-041-060.json"
);
const PROOF_PATH = path.join(
  OUT_DIR,
  "A1-LRB-CONSOLIDATION-OWNER-CARDS-41-60-COPY-PASTE-PROOF.json"
);
const EXPECTED_CLASSIFICATION =
  "A1_LRB_CONSOLIDATION_OWNER_CARDS_041_060_FULL_CARD_COPY_PASTE_READY";
const PROOF_CLASSIFICATION =
  "A1_LRB_CONSOLIDATION_OWNER_CARDS_041_060_COPY_PASTE_COMPLETE_AWAITING_GALA_VERDICT";
const EXPECTED_OWNER_SHA = "416f80e4da4dd7afc4ff7551b27efa8f351de79ca65211c77332d9ff05cf5e77";
const EXPECTED_SOURCE_HEAD = "3c6ab972108b4fa8198317fa0e8ee59363c5b5d9";

function main() {
  const srcArg = process.argv[2];
  const src = srcArg ? path.resolve(srcArg) : DEFAULT_BUNDLE;
  if (!fs.existsSync(src)) {
    console.error("Owner cards 41–60 bundle not found:", src);
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
        "reports/g2-a1-owner/consolidation/owner-review/A1-LRB-CONSOLIDATION-decisions-COPY-PASTE-4-CARDS-041-060.json",
      sliceStart: SLICE_START,
      sliceEnd: SLICE_END,
      expectedClassification: EXPECTED_CLASSIFICATION,
      proofPath: PROOF_PATH,
      sourceReviewPackRef: { git_head: ownerBundle.source_head || EXPECTED_SOURCE_HEAD },
      proofClassification: PROOF_CLASSIFICATION,
      expectedOwnerSha256: EXPECTED_OWNER_SHA,
      expectedSourceHead: EXPECTED_SOURCE_HEAD,
    });

    const taskLines = [
      "A1 LRB — kartīšu 041–060 OWNER COPY/PASTE (piemērots)",
      "",
      `Klasifikācija: ${PROOF_CLASSIFICATION}`,
      `Avota HEAD: ${EXPECTED_SOURCE_HEAD}`,
      `OWNER JSON SHA-256: ${proof.owner_bundle_sha256}`,
      `Git HEAD: ${proof.git_head}`,
      `Proof SHA-256: (see proof file after commit)`,
      "",
      "Vārti:",
      `- applied_exactly: ${proof.gates.applied_exactly}`,
      `- pending: ${proof.gates.pending}`,
      `- empty target fields: ${proof.gates.empty_target_fields}`,
      `- wrong-language residue: ${proof.gates.wrong_language_residue}`,
      `- DE alignment: ${proof.gates.de_alignment}`,
      `- duplicate/degenerate pairs: ${proof.gates.duplicate_degenerate_pairs}`,
      `- internal contradictions: ${proof.gates.internal_contradictions}`,
      `- schema/sectionAccents failures: ${proof.gates.schema_sectionAccents_failures}`,
      "",
      "Nav GALA PASS; nav merge/apply/production.",
    ];
    fs.writeFileSync(
      path.join(OUT_DIR, "A1-LRB-CONSOLIDATION-VEICAMO-LABOJUMU-UZDEVUMS-4-CARDS-41-60-APPLIED.txt"),
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
