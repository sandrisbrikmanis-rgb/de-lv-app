#!/usr/bin/env node
"use strict";

const { buildRescan6, writeRescan6Artifacts } = require("./lib/g2-a1-production-current/german-target-dictionary-rescan-6");

async function main() {
  const payload = await buildRescan6();
  const paths = writeRescan6Artifacts(payload);
  console.log(JSON.stringify({ pass: true, classification: payload.classification, paths, languages: payload.languages.map((l) => ({ appCode: l.appCode, rec: l.recommendedRescan?.platform, status: l.recommendedRescan?.finalStatus })) }, null, 2));
}

main().catch((e) => {
  console.error(JSON.stringify({ pass: false, error: String(e.message || e) }, null, 2));
  process.exit(1);
});
