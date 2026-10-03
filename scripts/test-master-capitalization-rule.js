#!/usr/bin/env node
"use strict";

const assert = require("assert");
const {
  verifyMasterCapitalizationRule,
  runCapitalizationRuleTests,
  runContradictionScannerTests,
} = require("./lib/master-capitalization-rule-verify");

function main() {
  const fixtures = runCapitalizationRuleTests();
  assert.strictEqual(fixtures.pass, true, JSON.stringify(fixtures.results.filter((r) => !r.pass), null, 2));

  const contradictionFixtures = runContradictionScannerTests();
  assert.strictEqual(
    contradictionFixtures.pass,
    true,
    JSON.stringify(contradictionFixtures.results.filter((r) => !r.pass), null, 2),
  );

  const gate = verifyMasterCapitalizationRule();
  assert.strictEqual(gate.pass, true, JSON.stringify(gate.blockers, null, 2));
  assert.strictEqual(gate.checks.activeContradictionCount, 0);
  assert.strictEqual(gate.CONTRADICTION_FIXTURES_PASSED, true);
  assert.strictEqual(gate.embeddedRegistry.pass, true);

  console.log(
    JSON.stringify(
      {
        pass: true,
        CAPITALIZATION_FIXTURE_COUNT: gate.CAPITALIZATION_FIXTURE_COUNT,
        CONTRADICTION_FIXTURE_COUNT: gate.CONTRADICTION_FIXTURE_COUNT,
        CONTRADICTION_FIXTURES_PASSED: gate.CONTRADICTION_FIXTURES_PASSED,
        ACTIVE_CONTRADICTION_COUNT: gate.ACTIVE_CONTRADICTION_COUNT,
      },
      null,
      2,
    ),
  );
}

main();
