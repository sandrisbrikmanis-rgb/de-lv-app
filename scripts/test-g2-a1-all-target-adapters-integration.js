#!/usr/bin/env node
"use strict";

const {
  runAllTargetAdapterIntegrationTests,
} = require("./lib/g2-a1-production-current/source-adapters/target/integration-tests");

const integration = process.argv.includes("--integration") || process.env.G2_A1_SOURCE_ACCESS_INTEGRATION === "1";

async function main() {
  if (!integration) {
    console.log("SKIP (set G2_A1_SOURCE_ACCESS_INTEGRATION=1 or --integration)");
    process.exit(0);
  }
  const summary = await runAllTargetAdapterIntegrationTests({ verbose: process.argv.includes("--verbose") });
  console.log(JSON.stringify(summary, null, 2));
  process.exit(summary.pass ? 0 : 1);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
