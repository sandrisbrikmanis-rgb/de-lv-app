#!/usr/bin/env node
"use strict";

const {
  buildPilotContentAccess32,
  writePilotContentAccessArtifacts,
} = require("./lib/g2-a1-production-current/pilot-content-access-32");

async function main() {
  const dry = process.argv.includes("--dry-run");
  if (dry) {
    console.log(JSON.stringify({ pass: true, dryRun: true, message: "Use without --dry-run for live probes" }, null, 2));
    process.exit(0);
  }
  const onlyArg = process.argv.find((a) => a.startsWith("--only="));
  const only = onlyArg ? onlyArg.split("=")[1].split(",").map((s) => s.trim()) : null;
  const payload = await buildPilotContentAccess32({
    onlyLanguages: only,
    onProgress: (p) => process.stderr.write(`${p.appCode}:${p.pilotId}=${p.final}\n`),
  });
  const paths = writePilotContentAccessArtifacts(payload);
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
