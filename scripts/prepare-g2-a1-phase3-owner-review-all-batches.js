#!/usr/bin/env node
"use strict";

const { ROOT } = require("./lib/audit-common");
const { prepareAllRemainingBatches } = require("./lib/g2-a1-phase3/owner-review-all-batches");

function main() {
  const result = prepareAllRemainingBatches({ root: ROOT });
  console.log(JSON.stringify(result, null, 2));
  if (!result.pass) process.exit(1);
}

if (require.main === module) {
  main();
}

module.exports = { main };
