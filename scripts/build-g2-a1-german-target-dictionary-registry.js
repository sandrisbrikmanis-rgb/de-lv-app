#!/usr/bin/env node
"use strict";

const {
  buildGermanTargetDictionaryRegistry,
  applyRegistryToStructuredJson,
  writeArtifacts,
} = require("./lib/g2-a1-production-current/german-target-dictionary-registry");

async function main() {
  const payload = await buildGermanTargetDictionaryRegistry();
  writeArtifacts(payload);
  applyRegistryToStructuredJson(payload);
  console.log(
    JSON.stringify(
      {
        pass: true,
        classification: payload.classification,
        nextAction: payload.nextAction,
        summary: payload.summary,
        outDir: "reports/g2-a1-production-current",
      },
      null,
      2,
    ),
  );
}

main().catch((err) => {
  console.error(JSON.stringify({ pass: false, error: String(err.message || err) }, null, 2));
  process.exit(1);
});
