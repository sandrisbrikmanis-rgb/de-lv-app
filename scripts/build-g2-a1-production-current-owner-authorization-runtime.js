#!/usr/bin/env node
"use strict";
/**
 * Generate non-commit OWNER authorization runtime package (HEAD = origin/main required).
 */

const { writeRuntimePackage } = require("./lib/g2-a1-production-current/owner-authorization-runtime");

function main() {
  const result = writeRuntimePackage();
  console.log(
    JSON.stringify(
      {
        pass: result.pass,
        path: result.path,
        written: result.written,
        headSha: result.headSha || null,
        originMainSha: result.originMainSha || null,
        productionFileSetSha256: result.productionFileSetSha256 || null,
        blockers: result.blockers,
      },
      null,
      2,
    ),
  );
  process.exit(result.pass ? 0 : 2);
}

main();
