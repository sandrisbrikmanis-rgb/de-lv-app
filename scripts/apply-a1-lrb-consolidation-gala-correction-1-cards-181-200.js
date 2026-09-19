#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { OUT_DIR } = require("./lib/g2-a1-lrb-consolidation-owner-review-artifacts");
const { applyGalaCorrectionSlice } = require("./lib/g2-a1-lrb-consolidation-gala-correction-apply");
const { runGalaCorrection181200Gates } = require("./lib/g2-a1-lrb-consolidation-gala-correction-181-200-gates");

const DEFAULT_CORRECTION = path.join(
  OUT_DIR,
  "A1-LRB-CONSOLIDATION-CARDS-181-200-GALA-CORRECTION-1.json"
);
const PROOF_PATH = path.join(
  OUT_DIR,
  "A1-LRB-CONSOLIDATION-CARDS-181-200-GALA-CORRECTION-1-PROOF.json"
);
const EXPECTED_CLASSIFICATION =
  "A1_LRB_CONSOLIDATION_CARDS_181_200_GALA_CORRECTION_1_READY";
const PROOF_CLASSIFICATION =
  "A1_LRB_CONSOLIDATION_CARDS_181_200_GALA_CORRECTION_1_COMPLETE_AWAITING_GALA_VERDICT";
const EXPECTED_SOURCE_HEAD = "4971b7a891e73e8118bf28dc409cefba96aa65c5";
const EXPECTED_CORRECTION_SHA =
  "faaf3bc1f720d59e53802f6c9f85a1e3b58241946144bf1aa5b1e6e1c1b23e5e";

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
        "reports/g2-a1-owner/consolidation/owner-review/A1-LRB-CONSOLIDATION-CARDS-181-200-GALA-CORRECTION-1.json",
      proofPath: PROOF_PATH,
      expectedSourceHead: EXPECTED_SOURCE_HEAD,
      expectedClassification: EXPECTED_CLASSIFICATION,
      expectedChangeCount: 2,
      expectedCorrectionSha256: EXPECTED_CORRECTION_SHA,
      sliceStart: 180,
      sliceEnd: 200,
      proofClassification: PROOF_CLASSIFICATION,
      copyPasteMetaKey: "gala_correction_1_cards_181_200",
      syncBundlePaths: [
        path.join(OUT_DIR, "A1-LRB-CONSOLIDATION-decisions-COPY-PASTE-4-CARDS-181-200.json"),
      ],
      runGates: runGalaCorrection181200Gates,
    });

    const lines = [
      "A1 LRB — GALA labojums #1 kartītes 181–200 (piemērots)",
      "",
      `Statuss: ${PROOF_CLASSIFICATION}`,
      `Avota HEAD: ${EXPECTED_SOURCE_HEAD}`,
      `Korekcijas JSON SHA-256: ${proof.correction_sha256}`,
      `Git HEAD: ${proof.git_head}`,
      "",
      "LABOT: sr|vor, sv|erst",
      "",
      "Vārti:",
      `- applied_exactly: ${proof.gates.applied_exactly}`,
      `- cards reviewed: ${proof.gates.cards_181_200_reviewed}/20`,
      `- pending: ${proof.gates.pending}`,
      `- DE alignment: ${proof.gates.de_alignment}`,
      `- semantic/source-fidelity: ${proof.gates.semantic_source_fidelity_violations}`,
      `- full composite completeness: ${proof.gates.full_composite_completeness}`,
      "",
      "Nav GALA PASS; nav merge/apply/production.",
    ];
    fs.writeFileSync(
      path.join(OUT_DIR, "A1-LRB-CONSOLIDATION-CARDS-181-200-GALA-CORRECTION-1-APPLIED.txt"),
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
