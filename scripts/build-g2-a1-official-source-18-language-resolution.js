#!/usr/bin/env node
"use strict";

const {
  buildOfficialSource18LanguageResolution,
  writeResolutionArtifacts,
  writeVerificationJson,
} = require("./lib/g2-a1-production-current/official-source-18-language-resolution");

async function main() {
  if (process.argv.includes("--cache-only")) {
    console.error(JSON.stringify({ pass: false, error: "CACHE_ONLY_FORBIDDEN_FOR_18_LANG_RESOLUTION" }, null, 2));
    process.exit(1);
  }
  const payload = await buildOfficialSource18LanguageResolution();
  writeResolutionArtifacts(payload);
  const verification = writeVerificationJson(payload);
  console.log(
    JSON.stringify(
      {
        pass: verification.pass,
        classification: payload.classification,
        nextAction: payload.nextAction,
        summary: payload.summary,
        freshLiveProbeAt: payload.freshLiveProbeAt,
        outDir: "reports/g2-a1-production-current/official-source-18-language-resolution",
      },
      null,
      2,
    ),
  );
  process.exit(verification.pass ? 0 : 1);
}

main().catch((err) => {
  console.error(JSON.stringify({ pass: false, error: String(err.message || err) }, null, 2));
  process.exit(1);
});
