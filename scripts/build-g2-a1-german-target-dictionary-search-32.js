#!/usr/bin/env node
"use strict";

const {
  buildGermanTargetDictionarySearch32,
  writeGermanTargetDictionarySearchArtifacts,
} = require("./lib/g2-a1-production-current/german-target-dictionary-search-32");

async function main() {
  const onlyArg = process.argv.find((a) => a.startsWith("--only="));
  const only = onlyArg ? onlyArg.split("=")[1].split(",").map((s) => s.trim()) : null;
  const payload = await buildGermanTargetDictionarySearch32({
    onlyLanguages: only,
    onProgress: (p) => process.stderr.write(`${p.appCode}=${p.finalStatus}\n`),
  });
  const paths = writeGermanTargetDictionarySearchArtifacts(payload);
  console.log(
    JSON.stringify(
      {
        pass: true,
        classification: payload.classification,
        nextAction: payload.nextAction,
        metrics: payload.metrics,
        ...paths,
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
