#!/usr/bin/env node
"use strict";

const {
  buildThreeWordGermanTargetPilot32,
  writeThreeWordArtifacts,
} = require("./lib/g2-a1-production-current/three-word-german-target-pilot-32");

async function main() {
  const onlyArg = process.argv.find((a) => a.startsWith("--only="));
  const only = onlyArg ? onlyArg.split("=")[1].split(",").map((s) => s.trim()) : null;
  const payload = await buildThreeWordGermanTargetPilot32({
    onlyLanguages: only,
    onProgress: (p) => process.stderr.write(`${p.appCode}:${p.word}=${p.status}\n`),
  });
  const paths = writeThreeWordArtifacts(payload);
  console.log(
    JSON.stringify(
      {
        pass: true,
        classification: payload.classification,
        nextAction: payload.nextAction,
        metrics: payload.metrics,
        reuteDeSourceIssue: payload.reuteDeSourceIssue,
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
