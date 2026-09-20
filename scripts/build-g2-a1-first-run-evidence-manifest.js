#!/usr/bin/env node
"use strict";

const { buildFirstRunEvidenceManifest } = require("./lib/g2-a1-production-current/first-run-evidence-manifest");

function main() {
  const dryRun = process.argv.includes("--dry-run");
  const { manifest, manifestPath } = buildFirstRunEvidenceManifest({ dryRun });
  console.log(
    JSON.stringify(
      {
        gate: "FIRST_RUN_EVIDENCE_MANIFEST",
        pass: true,
        manifestPath,
        inventoryRows: manifest.inventoryRows,
        rawLunaCheckpointFiles: manifest.rawLunaCheckpointFiles,
        rawLunaItemCountFromIndex: manifest.rawLunaItemCountFromIndex,
        syntheticFallbackNsrCount: manifest.syntheticFallbackNsrCount,
        postRunPass: manifest.postRunPass,
        archivedFileCount: manifest.files.length,
      },
      null,
      2,
    ),
  );
}

main();
