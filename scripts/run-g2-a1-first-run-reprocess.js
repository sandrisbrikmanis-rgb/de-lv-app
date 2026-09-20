#!/usr/bin/env node
"use strict";

const { runFirstRunReprocess } = require("./lib/g2-a1-production-current/first-run-reprocess");

function main() {
  const writeEvidence = process.argv.includes("--write-evidence");
  const result = runFirstRunReprocess({ writeEvidence });
  console.log(
    JSON.stringify(
      {
        gate: "G2_A1_FIRST_RUN_REPROCESS",
        pass: result.coveragePass && result.syntheticFallbackInLinguisticVerdicts === 0,
        classification: result.salvageGate.classification,
        nextAction: result.salvageGate.nextAction,
        rawLunaItemCount: result.rawLunaItemCount,
        classificationTotals: result.classificationTotals,
        reprocessProvenanceCounts: result.reprocessProvenanceCounts,
        coverage: result.coverage,
        postRunPass: result.postRunPass,
        missingFieldResults: result.missingFieldResults,
        syntheticFallbackInLinguisticVerdicts: result.syntheticFallbackInLinguisticVerdicts,
        summaryPath: result.summaryPath,
        missingManifestPath: result.missingPath,
      },
      null,
      2,
    ),
  );
  process.exit(0);
}

main();
