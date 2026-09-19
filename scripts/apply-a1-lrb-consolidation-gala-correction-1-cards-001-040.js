#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const { OUT_DIR } = require("./lib/g2-a1-lrb-consolidation-owner-review-artifacts");
const { applyGalaCorrection001040 } = require("./lib/g2-a1-lrb-consolidation-gala-correction-apply");

const DEFAULT_CORRECTION = path.join(
  OUT_DIR,
  "A1-LRB-CONSOLIDATION-CARDS-001-040-GALA-CORRECTION-1.json"
);
const PROOF_PATH = path.join(
  OUT_DIR,
  "A1-LRB-CONSOLIDATION-CARDS-001-040-GALA-CORRECTION-1-PROOF.json"
);
const EXPECTED_CLASSIFICATION = "A1_LRB_CONSOLIDATION_CARDS_001_040_GALA_CORRECTION_REQUIRED";
const EXPECTED_SOURCE_HEAD = "841de1000c998337ac8c93710e15caf2e6626e7d";

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
    const proof = applyGalaCorrection001040({
      correctionDoc,
      correctionRaw,
      correctionRelPath:
        "reports/g2-a1-owner/consolidation/owner-review/A1-LRB-CONSOLIDATION-CARDS-001-040-GALA-CORRECTION-1.json",
      proofPath: PROOF_PATH,
      expectedSourceHead: EXPECTED_SOURCE_HEAD,
      expectedClassification: EXPECTED_CLASSIFICATION,
    });

    const taskLines = [
      "A1 LRB konsolidācija — kartīšu 1–40 GALA korekcija #1 (piemērots)",
      "",
      "Klasifikācija: COPY-PASTE_CORRECTION_1_COMPLETE_AWAITING_GALA_VERDICT",
      `Bāzes HEAD: ${EXPECTED_SOURCE_HEAD}`,
      `Korekcijas SHA-256: ${proof.correction_sha256}`,
      `Git HEAD: ${proof.git_head}`,
      "",
      "LABOT (10):",
      proof.corrected_keys.join(", "),
      "",
      "Vārti (kartītes 1–40):",
      `- applied_exactly: ${proof.gates.applied_exactly}`,
      `- pending: ${proof.gates.pending}`,
      `- wrong-language residue: ${proof.gates.wrong_language_residue}`,
      `- semantic/source-fidelity violations: ${proof.gates.semantic_source_fidelity_violations}`,
      `- DE alignment: ${proof.gates.de_alignment}`,
      `- duplicate/degenerate pairs: ${proof.gates.duplicate_degenerate_pairs}`,
      `- internal contradictions: ${proof.gates.internal_contradictions}`,
      `- full composite completeness: ${proof.gates.full_composite_completeness}`,
      `- schema/sectionAccents failures: ${proof.gates.schema_sectionAccents_failures}`,
      "",
      "Nav Gala PASS; nav merge/apply/production.",
    ];
    fs.writeFileSync(
      path.join(
        OUT_DIR,
        "A1-LRB-CONSOLIDATION-CARDS-001-040-GALA-CORRECTION-1-APPLIED.txt"
      ),
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
