#!/usr/bin/env node
"use strict";
/**
 * DA–DE Kurss final post-repair audit orchestrator (READ-ONLY).
 * Usage: node scripts/run-da-kurss-final-post-repair-audit.js [--skip-luna]
 */
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");

const LUNA_DIR = path.join(ROOT, "reports/temp/da-kurss-final-post-repair-luna");
const skipLuna = process.argv.includes("--skip-luna");
const auditArgs = process.argv.slice(2).filter((a) => a !== "--skip-luna").join(" ");

console.log("\n=== Phase 1: export Luna batches ===\n");
execSync("node scripts/audit-da-kurss-final-post-repair.js --export-only", { cwd: ROOT, stdio: "inherit" });

if (!skipLuna) {
  const hasKey = fs.existsSync(path.join(ROOT, ".env")) && /OPENAI_API_KEY=/.test(fs.readFileSync(path.join(ROOT, ".env"), "utf8"));
  if (hasKey) {
    console.log("\n=== Phase 2: OpenAI Luna batches ===\n");
    try {
      execSync("node scripts/audit-da-kurss-final-post-repair-luna-api.js", { cwd: ROOT, stdio: "inherit" });
    } catch (e) {
      console.warn("Luna API pass incomplete:", e.message);
    }
  } else {
    console.log("\n=== Phase 2: heuristic Luna (no API key) ===\n");
    execSync("node scripts/audit-da-kurss-final-post-repair-luna-generate.js", { cwd: ROOT, stdio: "inherit" });
  }
}

console.log(`\n=== Phase 3: merge report ${auditArgs} ===\n`);
try {
  execSync(`node scripts/audit-da-kurss-final-post-repair.js ${auditArgs}`.trim(), {
    cwd: ROOT,
    stdio: "inherit",
  });
} catch (code) {
  // exit 1/2 expected when findings remain or luna pending
}
