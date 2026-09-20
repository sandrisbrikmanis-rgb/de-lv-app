#!/usr/bin/env node
"use strict";

const { writeFullMissingFieldInventory } = require("./lib/g2-a1-production-current/missing-field-inventory");

function main() {
  const result = writeFullMissingFieldInventory();
  console.log(
    JSON.stringify(
      {
        gate: "TARGETED_MISSING_FIELD_INVENTORY",
        pass: result.pass,
        totalRows: result.totalRows,
        expected: 95731,
        multipartManifestPath: result.multipartManifestPath,
        previewPath: result.previewPath,
        verifyMultipart: result.verifyMultipart,
        mergedRowCount: result.mergedRowCount,
        productionFileSetSha: result.productionFileSetSha,
      },
      null,
      2,
    ),
  );
  process.exit(result.pass && result.totalRows === 95731 ? 0 : 1);
}

main();
