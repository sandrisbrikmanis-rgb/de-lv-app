#!/usr/bin/env node
"use strict";

const {
  buildOfficialSource32LanguageAccess,
  writeOfficialSource32LanguageAccessArtifacts,
} = require("./lib/g2-a1-production-current/official-source-32-language-access");

async function main() {
  const live = !process.argv.includes("--cache-only");
  const payload = await buildOfficialSource32LanguageAccess({
    live,
    reuseValidatedPilot: true,
  });
  writeOfficialSource32LanguageAccessArtifacts(payload);
  console.log(
    JSON.stringify(
      {
        pass: true,
        classification: payload.classification,
        nextAction: payload.nextAction,
        summary: payload.summary,
        buildMode: payload.buildMode,
        outDir: "reports/g2-a1-production-current/official-source-32-language-access",
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
