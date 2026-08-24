#!/usr/bin/env node
"use strict";
/**
 * MASTER v1.12 §13 — main translation regression fixtures.
 */
const { runRegressionFixtures } = require("./lib/main-translation-field-inventory");

const result = runRegressionFixtures();
console.log("\n=== MAIN TRANSLATION v1.12 REGRESSION (§13) ===\n");
for (const r of result.results) {
  console.log(`${r.pass ? "PASS" : "FAIL"} · ${r.id} · detected=${r.detected} · expect=${r.expectDetected}`);
}
console.log(`\nOverall: ${result.pass ? "PASS" : "FAIL"}\n`);
if (!result.pass) process.exit(1);
