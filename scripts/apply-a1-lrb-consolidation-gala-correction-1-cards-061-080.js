#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { OUT_DIR } = require("./lib/g2-a1-lrb-consolidation-owner-review-artifacts");
const { applyGalaCorrectionSlice } = require("./lib/g2-a1-lrb-consolidation-gala-correction-apply");
const { runGalaCorrection061080Gates } = require("./lib/g2-a1-lrb-consolidation-gala-correction-061-080-gates");

const DEFAULT_CORRECTION = path.join(
  OUT_DIR,
  "A1-LRB-CONSOLIDATION-CARDS-061-080-GALA-CORRECTION-1.json"
);
const PROOF_PATH = path.join(
  OUT_DIR,
  "A1-LRB-CONSOLIDATION-CARDS-061-080-GALA-CORRECTION-1-PROOF.json"
);
const EXPECTED_CLASSIFICATION =
  "A1_LRB_CONSOLIDATION_CARDS_061_080_GALA_CORRECTION_1_READY";
const PROOF_CLASSIFICATION =
  "A1_LRB_CONSOLIDATION_CARDS_061_080_GALA_CORRECTION_1_COMPLETE_AWAITING_GALA_VERDICT";
const EXPECTED_SOURCE_HEAD = "8e937471d63f1f8091c61398a8a5df76296f9001";
const EXPECTED_CORRECTION_SHA =
  "df171ea346a81194841530b1c88562d2834d045540c21127b6da565ac4839479";

function main() {
  const srcArg = process.argv[2];
  const src = srcArg ? path.resolve(srcArg) : DEFAULT_CORRECTION;
  if (!fs.existsSync(src)) {
    console.error("GALA correction JSON not found:", src);
    process.exit(1);
  }
  const correctionRaw = fs.readFileSync(src);
  const correctionDoc = JSON.parse(correctionRaw.toString("utf8"));

  fs.mkdirSync(OUT_DIR, { recursive: true });
  if (src !== DEFAULT_CORRECTION) {
    fs.writeFileSync(DEFAULT_CORRECTION, correctionRaw);
  }

  try {
    const proof = applyGalaCorrectionSlice({
      correctionDoc,
      correctionRaw,
      correctionRelPath:
        "reports/g2-a1-owner/consolidation/owner-review/A1-LRB-CONSOLIDATION-CARDS-061-080-GALA-CORRECTION-1.json",
      proofPath: PROOF_PATH,
      expectedSourceHead: EXPECTED_SOURCE_HEAD,
      expectedClassification: EXPECTED_CLASSIFICATION,
      expectedChangeCount: 3,
      expectedCorrectionSha256: EXPECTED_CORRECTION_SHA,
      sliceStart: 60,
      sliceEnd: 80,
      proofClassification: PROOF_CLASSIFICATION,
      copyPasteMetaKey: "gala_correction_1_cards_061_080",
      syncBundlePaths: [
        path.join(OUT_DIR, "A1-LRB-CONSOLIDATION-decisions-COPY-PASTE-4-CARDS-061-080.json"),
      ],
      runGates: runGalaCorrection061080Gates,
    });

    const lines = [
      "A1 LRB — GALA labojums #1 kartītes 061–080 (piemērots)",
      "",
      `Statuss: ${PROOF_CLASSIFICATION}`,
      `Avota HEAD: ${EXPECTED_SOURCE_HEAD}`,
      `Korekcijas JSON SHA-256: ${proof.correction_sha256}`,
      `Git HEAD: ${proof.git_head}`,
      "",
      "LABOT: gr|passen, hu|klein, hu|Laden",
      "",
      "Vārti:",
      `- applied_exactly: ${proof.gates.applied_exactly}`,
      `- pending: ${proof.gates.pending}`,
      `- wrong-language residue: ${proof.gates.wrong_language_residue}`,
      `- DE alignment: ${proof.gates.de_alignment}`,
      `- EXTRA_MEANING_NOT_IN_SOURCE: ${proof.gates.extra_meaning_not_in_source}`,
      `- SEMANTIC_NARROWING_FROM_SOURCE: ${proof.gates.semantic_narrowing_from_source}`,
      `- duplicate/degenerate pairs: ${proof.gates.duplicate_degenerate_pairs}`,
      `- internal contradictions: ${proof.gates.internal_contradictions}`,
      `- full composite completeness: ${proof.gates.full_composite_completeness}`,
      `- schema/sectionAccents failures: ${proof.gates.schema_sectionAccents_failures}`,
      "",
      "Nav GALA PASS; nav merge/apply/production.",
    ];
    fs.writeFileSync(
      path.join(OUT_DIR, "A1-LRB-CONSOLIDATION-CARDS-061-080-GALA-CORRECTION-1-APPLIED.txt"),
      lines.join("\n") + "\n"
    );

    console.log(JSON.stringify(proof, null, 2));
    if (!proof.gates.pass) process.exit(1);
  } catch (err) {
    console.error(err.message || err);
    process.exit(1);
  }
}

if (require.main === module) main();
