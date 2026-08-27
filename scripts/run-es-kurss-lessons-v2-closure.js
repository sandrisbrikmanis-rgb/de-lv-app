#!/usr/bin/env node
"use strict";
/**
 * ES Kurss Lessons v2 closure: Luna coverage proof → merge v2 → OWNER decisions → fill NEW.
 * Usage: node scripts/run-es-kurss-lessons-v2-closure.js
 */
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");

function run(cmd) {
  console.log(`\n=== ${cmd} ===\n`);
  execSync(cmd, { cwd: ROOT, stdio: "inherit" });
}

function main() {
  run(
    "node scripts/verify-es-kurss-lessons-luna-coverage.js --luna-dir=reports/temp/es-kurss-lessons-full-audit-luna-v2 --out=reports/es-kurss-lessons-luna-v2-coverage-proof.md --out-json=reports/temp/es-kurss-lessons-luna-v2-coverage-proof.json",
  );
  run("node scripts/merge-es-kurss-lessons-audit-v2.js");
  run("node scripts/build-es-kurss-lessons-owner-decisions-filled.js --audit=reports/temp/es-kurss-lessons-full-audit-v2.json");
  run("node scripts/fill-es-kurss-lessons-labot-new-luna.js");
  console.log("\n=== v2 closure complete (fill is final step — do not rebuild after) ===\n");
}

if (require.main === module) main();
