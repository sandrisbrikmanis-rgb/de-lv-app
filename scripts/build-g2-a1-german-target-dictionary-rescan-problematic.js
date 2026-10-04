#!/usr/bin/env node
"use strict";

const {
  buildRescanProblematic,
  writeRescanProblematicArtifacts,
} = require("./lib/g2-a1-production-current/german-target-dictionary-rescan-problematic");

async function main() {
  const payload = await buildRescanProblematic();
  const paths = writeRescanProblematicArtifacts(payload);
  console.log(
    JSON.stringify(
      {
        pass: true,
        classification: payload.classification,
        paths,
        languages: payload.languages.map((l) => ({
          appCode: l.appCode,
          rec: l.recommendedRescan?.platform,
          status: l.recommendedRescan?.finalStatus,
          score: l.recommendedRescan?.score,
        })),
      },
      null,
      2,
    ),
  );
}

main().catch((e) => {
  console.error(JSON.stringify({ pass: false, error: String(e.message || e) }, null, 2));
  process.exit(1);
});
