#!/usr/bin/env node
"use strict";

const { parseArgs, printHelp } = require("./lib/card-translation-linguistic-audit/parse-args");
const { runCardTranslationLinguisticAudit } = require("./lib/card-translation-linguistic-audit/run-audit");

async function main() {
  const args = parseArgs(process.argv);
  if (args.help) {
    printHelp();
    process.exit(0);
  }

  const result = await runCardTranslationLinguisticAudit({
    levels: args.levels,
    langs: args.langs,
    limit: args.limit,
    outDir: args.outDir,
    executeSources: args.executeSources,
  });

  console.log(
    JSON.stringify(
      {
        gate: "card-translation-linguistic-audit",
        pass: result.pass,
        mode: result.dryRun ? "dry-run" : "execute-sources",
        recordCount: result.recordCount,
        manifestPath: result.manifestPath,
        recordsPath: result.recordsPath,
        adapterMatrixPath: result.matrixPath,
        productionWrites: false,
      },
      null,
      2,
    ),
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
