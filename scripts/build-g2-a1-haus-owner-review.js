#!/usr/bin/env node
"use strict";

const {
  buildHausOwnerReviewPackage,
  writeHausOwnerReviewArtifacts,
} = require("./lib/g2-a1-production-current/haus-owner-review");

function main() {
  const built = buildHausOwnerReviewPackage();
  if (!built.pass) {
    console.error(JSON.stringify({ pass: false, ...built }, null, 2));
    process.exit(1);
  }
  writeHausOwnerReviewArtifacts(built);
  console.log(
    JSON.stringify({
      pass: true,
      classification: built.manifest.classification,
      nextAction: built.manifest.nextAction,
      counts: built.counts,
      outDir: "reports/g2-a1-production-current/haus-owner-review",
    }),
  );
}

main();
