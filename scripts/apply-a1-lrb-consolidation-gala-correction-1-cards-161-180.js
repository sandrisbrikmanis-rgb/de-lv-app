#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { OUT_DIR } = require("./lib/g2-a1-lrb-consolidation-owner-review-artifacts");
const { applyGalaCorrectionSlice } = require("./lib/g2-a1-lrb-consolidation-gala-correction-apply");
const { runGalaCorrection161180Gates } = require("./lib/g2-a1-lrb-consolidation-gala-correction-161-180-gates");

const DEFAULT_CORRECTION = path.join(
  OUT_DIR,
  "A1-LRB-CONSOLIDATION-CARDS-161-180-GALA-CORRECTION-1.json"
);
const PROOF_PATH = path.join(
  OUT_DIR,
  "A1-LRB-CONSOLIDATION-CARDS-161-180-GALA-CORRECTION-1-PROOF.json"
);
const EXPECTED_CLASSIFICATION =
  "A1_LRB_CONSOLIDATION_CARDS_161_180_GALA_CORRECTION_1_READY";
const PROOF_CLASSIFICATION =
  "A1_LRB_CONSOLIDATION_CARDS_161_180_GALA_CORRECTION_1_COMPLETE_AWAITING_GALA_VERDICT";
const EXPECTED_SOURCE_HEAD = "962e6df5bb3625be129b51cc72b5938729acaad9";
const EXPECTED_CORRECTION_SHA =
  "b1a241f0b4bc6c951e3fbb3f4390dba4f3d8a880ceb412c873227688185c418b";

const LABOT_KEYS = [
  "sr|aufs",
  "sr|dass",
  "sr|der",
  "sr|die",
  "sr|oder",
  "sr|schwimmen",
  "sr|sehen",
  "sr|sein",
  "sr|sich",
  "sr|vom",
];

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
        "reports/g2-a1-owner/consolidation/owner-review/A1-LRB-CONSOLIDATION-CARDS-161-180-GALA-CORRECTION-1.json",
      proofPath: PROOF_PATH,
      expectedSourceHead: EXPECTED_SOURCE_HEAD,
      expectedClassification: EXPECTED_CLASSIFICATION,
      expectedChangeCount: 10,
      expectedCorrectionSha256: EXPECTED_CORRECTION_SHA,
      sliceStart: 160,
      sliceEnd: 180,
      proofClassification: PROOF_CLASSIFICATION,
      copyPasteMetaKey: "gala_correction_1_cards_161_180",
      syncBundlePaths: [
        path.join(OUT_DIR, "A1-LRB-CONSOLIDATION-decisions-COPY-PASTE-4-CARDS-161-180.json"),
      ],
      runGates: runGalaCorrection161180Gates,
    });

    const lines = [
      "A1 LRB — GALA labojums #1 kartītes 161–180 (piemērots)",
      "",
      `Statuss: ${PROOF_CLASSIFICATION}`,
      `Avota HEAD: ${EXPECTED_SOURCE_HEAD}`,
      `Korekcijas JSON SHA-256: ${proof.correction_sha256}`,
      `Git HEAD: ${proof.git_head}`,
      "",
      `LABOT (${LABOT_KEYS.length}): ${LABOT_KEYS.join(", ")}`,
      "",
      "Vārti:",
      `- applied_exactly: ${proof.gates.applied_exactly}`,
      `- cards reviewed: ${proof.gates.cards_161_180_reviewed}/20`,
      `- pending: ${proof.gates.pending}`,
      `- DE alignment: ${proof.gates.de_alignment}`,
      `- extra_meaning_not_in_source: ${proof.gates.extra_meaning_not_in_source}`,
      `- semantic_narrowing_from_source: ${proof.gates.semantic_narrowing_from_source}`,
      `- full composite completeness: ${proof.gates.full_composite_completeness}`,
      "",
      "Nav GALA PASS; nav merge/apply/production.",
    ];
    fs.writeFileSync(
      path.join(OUT_DIR, "A1-LRB-CONSOLIDATION-CARDS-161-180-GALA-CORRECTION-1-APPLIED.txt"),
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
