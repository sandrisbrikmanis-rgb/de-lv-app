#!/usr/bin/env node
"use strict";

const { execSync } = require("child_process");
const path = require("path");
const { ROOT } = require("./lib/audit-common");

const enabled =
  process.env.G2_A1_BROWSER_INTEGRATION === "1" || process.argv.includes("--browser-integration");

async function main() {
  if (!enabled) {
    console.log("SKIP (set G2_A1_BROWSER_INTEGRATION=1 or --browser-integration)");
    process.exit(0);
  }

  execSync("node scripts/build-g2-a1-browser-adapter-pilots.js", {
    cwd: ROOT,
    stdio: "inherit",
    env: { ...process.env, G2_A1_BROWSER_INTEGRATION: "1" },
  });

  const reportPath = path.join(ROOT, "reports/g2-a1-production-current/official-source-browser-adapter-pilots.json");
  const report = require(reportPath);
  const allNegativePass = report.pilots.every((p) => p.negative?.pass !== false);
  const pass = allNegativePass;
  console.log(
    JSON.stringify(
      {
        pass,
        positivePilotPass: report.positivePilotPass,
        browserAdapterCount: report.browserAdapterCount,
        negativeFailures: report.pilots.filter((p) => p.negative?.pass === false).map((p) => p.language),
      },
      null,
      2,
    ),
  );
  process.exit(pass ? 0 : 1);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
