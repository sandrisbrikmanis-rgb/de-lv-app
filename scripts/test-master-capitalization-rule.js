#!/usr/bin/env node
"use strict";

const assert = require("assert");
const {
  verifyMasterCapitalizationRule,
  runCapitalizationRuleTests,
} = require("./lib/master-capitalization-rule-verify");

function main() {
  const fixtures = runCapitalizationRuleTests();
  assert.strictEqual(fixtures.pass, true, JSON.stringify(fixtures.results.filter((r) => !r.pass), null, 2));

  const gate = verifyMasterCapitalizationRule();
  assert.strictEqual(gate.pass, true, JSON.stringify(gate.blockers, null, 2));
  assert.strictEqual(gate.checks.activeContradictionCount, 0);
  assert.strictEqual(gate.embeddedRegistry.pass, true);

  console.log(JSON.stringify({ pass: true, fixtureCount: fixtures.results.length }, null, 2));
}

main();
