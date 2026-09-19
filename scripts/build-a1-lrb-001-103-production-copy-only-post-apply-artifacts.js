#!/usr/bin/env node
"use strict";

const {
  runPostApplyVerification,
  writePostApplyArtifacts,
} = require("./lib/g2-a1-lrb-production-copy-only-post-apply");

function main() {
  const verification = runPostApplyVerification();
  const written = writePostApplyArtifacts(verification);
  console.log(JSON.stringify({ pass: verification.pass, ...written }, null, 2));
  process.exit(verification.pass ? 0 : 1);
}

main();
