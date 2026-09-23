#!/usr/bin/env node
"use strict";

const {
  buildOwnerPreapproval32,
  writeOwnerPreapprovalArtifacts,
} = require("./lib/g2-a1-production-current/german-target-dictionary-owner-preapproval-32");

function main() {
  const payload = buildOwnerPreapproval32();
  const paths = writeOwnerPreapprovalArtifacts(payload);
  const pass =
    payload.languageSetVerification.pass &&
    payload.sourceLanguageDe.pass &&
    payload.metrics.proposedMasterChangesCount === 25;
  console.log(JSON.stringify({ pass, classification: payload.classification, metrics: payload.metrics, ...paths }, null, 2));
  process.exit(pass ? 0 : 1);
}

main();
