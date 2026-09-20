#!/usr/bin/env node
"use strict";

const { writeJsonAtomic } = require("./lib/g2-a1-production-current/artifacts");
const { runOfficialSourceV2MultiPilot } = require("./lib/g2-a1-production-current/official-source-v2-multi-pilot");

const integration = process.argv.includes("--integration") || process.env.G2_A1_SOURCE_ACCESS_INTEGRATION === "1";

async function main() {
  if (!integration) {
    console.log("SKIP (set G2_A1_SOURCE_ACCESS_INTEGRATION=1 or --integration)");
    process.exit(0);
  }
  const result = await runOfficialSourceV2MultiPilot();
  writeJsonAtomic("official-source-v2-multi-pilot-result.json", result);
  console.log(JSON.stringify(result, null, 2));
  process.exit(result.pass ? 0 : 1);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
