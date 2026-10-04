#!/usr/bin/env node
"use strict";

const {
  verifyGermanTargetBilingualDictionaries32,
  writeGermanTargetBilingualArtifacts,
} = require("./lib/g2-a1-production-current/master-german-target-bilingual-32");

function main() {
  const verify = verifyGermanTargetBilingualDictionaries32();
  const paths = writeGermanTargetBilingualArtifacts(verify);
  console.log(
    JSON.stringify(
      {
        pass: verify.pass,
        classification: verify.classification,
        nextAction: verify.nextAction,
        blockers: verify.blockers,
        ...paths,
      },
      null,
      2,
    ),
  );
  process.exit(verify.pass ? 0 : 1);
}

main();
