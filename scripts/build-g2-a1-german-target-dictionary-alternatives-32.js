#!/usr/bin/env node
"use strict";

const {
  buildGermanTargetDictionaryAlternatives32,
  writeAlternativesArtifacts,
} = require("./lib/g2-a1-production-current/german-target-dictionary-alternatives-32");

async function main() {
  const onlyArg = process.argv.find((a) => a.startsWith("--only="));
  const only = onlyArg ? onlyArg.split("=")[1].split(",").map((s) => s.trim()) : null;
  const payload = await buildGermanTargetDictionaryAlternatives32({
    onlyLanguages: only,
    onProgress: (p) => process.stderr.write(`${p.appCode} usable=${p.usable} rec=${p.recommended}\n`),
  });
  const paths = writeAlternativesArtifacts(payload);
  console.log(JSON.stringify({ pass: true, classification: payload.classification, metrics: payload.metrics, ...paths }, null, 2));
}

main().catch((e) => {
  console.error(JSON.stringify({ pass: false, error: String(e.message || e) }, null, 2));
  process.exit(1);
});
