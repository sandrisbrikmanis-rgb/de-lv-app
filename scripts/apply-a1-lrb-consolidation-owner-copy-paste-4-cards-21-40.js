#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const {
  applyOwnerCopyPasteBatch,
  OUT_DIR,
} = require("./lib/g2-a1-lrb-consolidation-owner-copy-paste-apply");

const SLICE_START = 20;
const SLICE_END = 40;
const DEFAULT_BUNDLE = path.join(
  OUT_DIR,
  "A1-LRB-CONSOLIDATION-decisions-COPY-PASTE-4-CARDS-021-040.json"
);
const PROOF_PATH = path.join(
  OUT_DIR,
  "A1-LRB-CONSOLIDATION-OWNER-CARDS-21-40-COPY-PASTE-PROOF.json"
);
const EXPECTED_CLASSIFICATION = "A1_LRB_CONSOLIDATION_OWNER_NEXT_20_FULL_CARD_COPY_PASTE_READY";

function main() {
  const srcArg = process.argv[2];
  const src = srcArg ? path.resolve(srcArg) : DEFAULT_BUNDLE;
  if (!fs.existsSync(src)) {
    console.error("Owner cards 21–40 bundle not found:", src);
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
        "reports/g2-a1-owner/consolidation/owner-review/A1-LRB-CONSOLIDATION-decisions-COPY-PASTE-4-CARDS-021-040.json",
      sliceStart: SLICE_START,
      sliceEnd: SLICE_END,
      expectedClassification: EXPECTED_CLASSIFICATION,
      proofPath: PROOF_PATH,
      sourceReviewPackRef: {
        sha256: ownerBundle.source_review_pack_sha || null,
      },
    });

    const taskLines = [
      "A1 LRB-001…103 — kartīšu 21–40 OWNER COPY/PASTE (piemērots)",
      "",
      "Klasifikācija: AWAITING_GALA_VERDICT",
      `Review-pack SHA (avots): ${ownerBundle.source_review_pack_sha || "n/a"}`,
      `OWNER bundle SHA-256: ${proof.owner_bundle_sha256}`,
      `Git HEAD: ${proof.git_head}`,
      "",
      "Vārti:",
      `- applied_exactly: ${proof.gates.applied_exactly}`,
      `- pending: ${proof.gates.pending}`,
      `- empty target fields: ${proof.gates.empty_target_fields}`,
      `- wrong-language residue: ${proof.gates.wrong_language_residue}`,
      `- semantic/source-fidelity violations: ${proof.gates.semantic_source_fidelity_violations}`,
      `- DE alignment: ${proof.gates.de_alignment}`,
      `- duplicate/degenerate pairs: ${proof.gates.duplicate_degenerate_pairs}`,
      `- internal contradictions: ${proof.gates.internal_contradictions}`,
      `- schema/sectionAccents failures: ${proof.gates.schema_sectionAccents_failures}`,
      "",
      "Nav Gala PASS; nav merge/apply/production.",
    ];
    fs.writeFileSync(
      path.join(OUT_DIR, "A1-LRB-CONSOLIDATION-VEICAMO-LABOJUMU-UZDEVUMS-4-CARDS-21-40-APPLIED.txt"),
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
