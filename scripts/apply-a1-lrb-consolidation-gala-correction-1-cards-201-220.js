#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { OUT_DIR } = require("./lib/g2-a1-lrb-consolidation-owner-review-artifacts");
const { applyGalaCorrectionSlice } = require("./lib/g2-a1-lrb-consolidation-gala-correction-apply");
const { runGalaCorrection201220Gates } = require("./lib/g2-a1-lrb-consolidation-gala-correction-201-220-gates");

const DEFAULT_CORRECTION = path.join(
  OUT_DIR,
  "A1-LRB-CONSOLIDATION-CARDS-201-220-GALA-CORRECTION-1.json"
);
const PROOF_PATH = path.join(
  OUT_DIR,
  "A1-LRB-CONSOLIDATION-CARDS-201-220-GALA-CORRECTION-1-PROOF.json"
);
const EXPECTED_CLASSIFICATION =
  "A1_LRB_CONSOLIDATION_CARDS_201_220_GALA_CORRECTION_1_READY";
const PROOF_CLASSIFICATION =
  "A1_LRB_CONSOLIDATION_CARDS_201_220_GALA_CORRECTION_1_COMPLETE_AWAITING_GALA_VERDICT";
const EXPECTED_SOURCE_HEAD = "5356338694b841191197ea6c9730241a25fef2d4";
const EXPECTED_CORRECTION_SHA =
  "c05e3e5011a976be63fee4e4f413eb2700c0844da85c4474d6e73c9047ffe5cd";

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
        "reports/g2-a1-owner/consolidation/owner-review/A1-LRB-CONSOLIDATION-CARDS-201-220-GALA-CORRECTION-1.json",
      proofPath: PROOF_PATH,
      expectedSourceHead: EXPECTED_SOURCE_HEAD,
      expectedClassification: EXPECTED_CLASSIFICATION,
      expectedChangeCount: 3,
      expectedCorrectionSha256: EXPECTED_CORRECTION_SHA,
      sliceStart: 200,
      sliceEnd: 220,
      proofClassification: PROOF_CLASSIFICATION,
      copyPasteMetaKey: "gala_correction_1_cards_201_220",
      syncBundlePaths: [
        path.join(OUT_DIR, "A1-LRB-CONSOLIDATION-decisions-COPY-PASTE-4-CARDS-201-220.json"),
      ],
      runGates: runGalaCorrection201220Gates,
    });

    const lines = [
      "A1 LRB — GALA labojums #1 kartītes 201–220 (piemērots)",
      "",
      `Statuss: ${PROOF_CLASSIFICATION}`,
      `Avota HEAD: ${EXPECTED_SOURCE_HEAD}`,
      `Korekcijas JSON SHA-256: ${proof.correction_sha256}`,
      `Git HEAD: ${proof.git_head}`,
      "",
      "LABOT: sv|laufen, sv|laut, sv|Laut",
      "",
      "Vārti:",
      `- applied_exactly: ${proof.gates.applied_exactly}`,
      `- cards reviewed: ${proof.gates.cards_201_220_reviewed}/20`,
      `- pending: ${proof.gates.pending}`,
      `- DE alignment: ${proof.gates.de_alignment}`,
      `- full composite completeness: ${proof.gates.full_composite_completeness}`,
      "",
      "Nav GALA PASS; nav merge/apply/production.",
    ];
    fs.writeFileSync(
      path.join(OUT_DIR, "A1-LRB-CONSOLIDATION-CARDS-201-220-GALA-CORRECTION-1-APPLIED.txt"),
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
