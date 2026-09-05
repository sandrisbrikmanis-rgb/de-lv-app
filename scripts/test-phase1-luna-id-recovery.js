#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const fixture = require("./fixtures/phase1-id-recovery-lb-sq.json");
const {
  recoverLunaResponseItems,
  parseCanonicalLunaRequestId,
  containsC0ControlChars,
} = require("./lib/phase1-luna-id-recovery");
const { parsePhase1LunaResponseStrict } = require("./lib/luna-phase1-openai");
const { validateBatchResponse } = require("./lib/luna-adapter-runner");
const { buildLunaRequestPayload } = require("./lib/phase1-luna-checkpoint/object-identity");

let testsRun = 0;
let testsFailed = 0;

function assert(condition, message) {
  testsRun += 1;
  if (!condition) {
    testsFailed += 1;
    console.error(`FAIL: ${message}`);
  }
}

function passItem(id, status = "PASS") {
  return { id, status };
}

function buildItems(ids) {
  return ids.map((id) => passItem(id));
}

function testExact25PassWithoutRemap() {
  const expectedIds = fixture.expectedIds25;
  const items = buildItems(expectedIds);
  const result = recoverLunaResponseItems(items, expectedIds);
  assert(result.ok, "1: exact 25 IDs recover/pass");
  assert(result.recoveries.length === 0, "1: no remaps for exact IDs");
  assert(result.items.length === 25, "1: count preserved");
}

function testLbLandlichC0Recovery() {
  const expectedIds = fixture.expectedIds25;
  const items = buildItems(expectedIds.map((id) => (id === fixture.landlichCanonicalId ? fixture.landlichLbMutationId : id)));
  const result = recoverLunaResponseItems(items, expectedIds);
  assert(result.ok, "2: lb ländlich C0 mutation recovers");
  assert(result.recoveries.length === 1, "2: one recovery");
  assert(result.recoveries[0].canonicalId === fixture.landlichCanonicalId, "2: canonical id");
  assert(result.recoveries[0].returnedId === fixture.landlichLbMutationId, "2: returned id preserved in proof");
}

function testLbLandlichC0RecoveryU0014() {
  const expectedIds = fixture.expectedIds25;
  const items = buildItems(
    expectedIds.map((id) => (id === fixture.landlichCanonicalId ? fixture.landlichLbMutationIdU0014 : id)),
  );
  const result = recoverLunaResponseItems(items, expectedIds);
  assert(result.ok, "2b: lb ländlich U0014 mutation recovers");
  assert(result.recoveries.length === 1, "2b: one recovery");
  assert(result.recoveries[0].returnedId === fixture.landlichLbMutationIdU0014, "2b: returned id U0014");
}

function testLbLandlichC0RecoveryU0005() {
  const expectedIds = fixture.expectedIds25;
  const items = buildItems(
    expectedIds.map((id) => (id === fixture.landlichCanonicalId ? fixture.landlichLbMutationIdU0005 : id)),
  );
  const result = recoverLunaResponseItems(items, expectedIds);
  assert(result.ok, "2c: lb ländlich U0005 mutation recovers");
  assert(result.recoveries.length === 1, "2c: one recovery");
  assert(result.recoveries[0].returnedId === fixture.landlichLbMutationIdU0005, "2c: returned id U0005");
}

function testLbUnknownSubstitutionFails() {
  const expected = [fixture.landlichCanonicalId];
  const items = [passItem(fixture.landlichLbUnknownSubstitutionId)];
  const result = recoverLunaResponseItems(items, expected);
  assert(!result.ok, "2d: unknown lb substitution fails");
}

function testSqMutationRecovery() {
  const expectedIds = fixture.expectedIds25.map((id) => id.replace("g2/b1/lb", "g2/b1/sq"));
  const canonical = fixture.landlichSqExactId;
  const items = buildItems(
    expectedIds.map((id) => (id === canonical ? fixture.landlichSqMutationIdA : id)),
  );
  const result = recoverLunaResponseItems(items, expectedIds);
  assert(result.ok, "3: sq C0 mutation recovers");
  assert(result.recoveries.length === 1, "3: one recovery");
}

function testSqExactPassWithoutRemap() {
  const expectedIds = fixture.expectedIds25.map((id) => id.replace("g2/b1/lb", "g2/b1/sq"));
  const items = buildItems(expectedIds);
  const result = recoverLunaResponseItems(items, expectedIds);
  assert(result.ok, "4: sq exact pass");
  assert(result.recoveries.length === 0, "4: no remap");
}

function testMultipleC0MutationsUniqueIdentity() {
  const ids = [
    "g2/b1/lb|idx:1718|raw:l\u00023ndlich|src:b1.js",
    "g2/b1/lb|idx:1719|raw:Land\u0004straße|src:b1.js",
  ];
  const expected = [
    "g2/b1/lb|idx:1718|raw:ländlich|src:b1.js",
    "g2/b1/lb|idx:1719|raw:Landstraße|src:b1.js",
  ];
  const result = recoverLunaResponseItems(buildItems(ids), expected);
  assert(result.ok, "5: multiple C0 mutations recover");
  assert(result.recoveries.length === 2, "5: two recoveries");
}

function testReorderedResponseStillIdentityMapped() {
  const expected = [
    "g2/b1/lb|idx:1718|raw:ländlich|src:b1.js",
    "g2/b1/lb|idx:1719|raw:Landstraße|src:b1.js",
  ];
  const items = [
    passItem("g2/b1/lb|idx:1719|raw:Landstraße|src:b1.js"),
    passItem("g2/b1/lb|idx:1718|raw:l\u00023ndlich|src:b1.js"),
  ];
  const result = recoverLunaResponseItems(items, expected);
  assert(result.ok, "6: reordered response recovers by identity");
  assert(result.items[0].id === expected[0], "6: first expected mapped");
}

function testWrongScopeFails() {
  const expected = ["g2/b1/lb|idx:1718|raw:ländlich|src:b1.js"];
  const items = [passItem("g2/b1/sq|idx:1718|raw:l\u00023ndlich|src:b1.js")];
  const result = recoverLunaResponseItems(items, expected);
  assert(!result.ok, "7: wrong scope fails");
}

function testWrongObjectIndexFails() {
  const expected = ["g2/b1/lb|idx:1718|raw:ländlich|src:b1.js"];
  const items = [passItem("g2/b1/lb|idx:1719|raw:l\u00023ndlich|src:b1.js")];
  const result = recoverLunaResponseItems(items, expected);
  assert(!result.ok, "8: wrong objectIndex fails");
}

function testWrongSourceFileFails() {
  const expected = ["g2/b1/lb|idx:1718|raw:ländlich|src:b1.js"];
  const items = [passItem("g2/b1/lb|idx:1718|raw:l\u00023ndlich|src:b2.js")];
  const result = recoverLunaResponseItems(items, expected);
  assert(!result.ok, "9: wrong sourceFile fails");
}

function testRawOnlyMatchFails() {
  const expected = ["g2/b1/lb|idx:1718|raw:ländlich|src:b1.js"];
  const items = [passItem("g2/b1/lb|idx:1719|raw:l\u00023ndlich|src:b1.js")];
  const result = recoverLunaResponseItems(items, expected);
  assert(!result.ok, "10: raw-only / wrong identity fails");
}

function testDuplicateCandidateFails() {
  const expected = [
    "g2/b1/lb|idx:1718|raw:ländlich|src:b1.js",
    "g2/b1/lb|idx:1718|raw:ländlich|src:b1.js",
  ];
  const items = buildItems(expected);
  const result = recoverLunaResponseItems(items, expected);
  assert(!result.ok, "11: duplicate candidate fails");
}

function testDuplicateReturnedIdFails() {
  const expected = [
    "g2/b1/lb|idx:1718|raw:ländlich|src:b1.js",
    "g2/b1/lb|idx:1719|raw:Landstraße|src:b1.js",
  ];
  const dupId = "g2/b1/lb|idx:1718|raw:l\u00023ndlich|src:b1.js";
  const items = [passItem(dupId), passItem(dupId)];
  const result = recoverLunaResponseItems(items, expected);
  assert(!result.ok, "12: duplicate returned id fails");
  assert(result.issues.includes("DUPLICATE_RETURNED_ID"), "12: duplicate issue");
}

function testMissingResponseObjectFails() {
  const expected = [
    "g2/b1/lb|idx:1718|raw:ländlich|src:b1.js",
    "g2/b1/lb|idx:1719|raw:Landstraße|src:b1.js",
  ];
  const items = [passItem("g2/b1/lb|idx:1718|raw:ländlich|src:b1.js")];
  const result = recoverLunaResponseItems(items, expected);
  assert(!result.ok, "13: missing object fails");
  assert(result.issues.includes("COUNT_MISMATCH"), "13: count mismatch");
}

function testUnexpectedExtraObjectFails() {
  const expected = ["g2/b1/lb|idx:1718|raw:ländlich|src:b1.js"];
  const items = [
    passItem("g2/b1/lb|idx:1718|raw:ländlich|src:b1.js"),
    passItem("g2/b1/lb|idx:1719|raw:Landstraße|src:b1.js"),
  ];
  const result = recoverLunaResponseItems(items, expected);
  assert(!result.ok, "14: unexpected extra fails");
}

function testCountMismatchFails() {
  const expected = fixture.expectedIds25;
  const items = buildItems(expected.slice(0, 24));
  const result = recoverLunaResponseItems(items, expected);
  assert(!result.ok, "15: count mismatch fails");
}

function testAmbiguousIdentityFails() {
  const expected = [
    "g2/b1/lb|idx:1718|raw:ländlich|src:b1.js",
    "g2/b1/lb|idx:1719|raw:Landstraße|src:b1.js",
  ];
  const items = [
    passItem("g2/b1/lb|idx:1718|raw:l\u00023ndlich|src:b1.js"),
    passItem("g2/b1/lb|idx:1718|raw:l\u00043ndlich|src:b1.js"),
  ];
  const result = recoverLunaResponseItems(items, expected);
  assert(!result.ok, "16: ambiguous identity fails");
}

function testNonC0RawDifferenceFails() {
  const expected = ["g2/b1/lb|idx:1718|raw:ländlich|src:b1.js"];
  const items = [passItem(fixture.nonC0MutationId)];
  const result = recoverLunaResponseItems(items, expected);
  assert(!result.ok, "17: non-C0 corruption fails");
  assert(!containsC0ControlChars("l\u0314ndlich"), "17: fixture uses non-C0 mutation");
}

function testWrongRawWithC0Rejected() {
  const expected = ["g2/b1/lb|idx:1718|raw:ländlich|src:b1.js"];
  const items = [passItem("g2/b1/lb|idx:1718|raw:completely\u0002wrong|src:b1.js")];
  const result = recoverLunaResponseItems(items, expected);
  assert(!result.ok, "18: wrong raw plus C0 rejected");
  assert(result.issues.includes("NON_C0_RAW_CORRUPTION") || result.issues.includes("MISSING_OR_UNRECOVERABLE_ID"), "18: fail-closed issue");
}

function testCanonicalUnicodePreserved() {
  const umlaut = fixture.unicodePreservation.umlautId;
  const eszett = fixture.unicodePreservation.eszettId;
  const parsedU = parseCanonicalLunaRequestId(umlaut);
  const parsedE = parseCanonicalLunaRequestId(eszett);
  assert(parsedU.raw === "längs", "19: ä preserved");
  assert(parsedE.raw === "Straße", "19: ß preserved");
  const strict = parsePhase1LunaResponseStrict(
    JSON.stringify({ items: [passItem(umlaut), passItem(eszett)] }),
    [umlaut, eszett],
  );
  assert(strict.items[0].id === umlaut && strict.items[1].id === eszett, "19: strict parse preserves unicode");
}

function testStrictParserIntegration() {
  const expectedIds = fixture.expectedIds25;
  const items = buildItems(
    expectedIds.map((id) => (id === fixture.landlichCanonicalId ? fixture.landlichLbMutationId : id)),
  );
  const parsed = parsePhase1LunaResponseStrict(JSON.stringify({ items }), expectedIds);
  assert(parsed.items.length === 25, "strict parser: 25 items");
  assert(parsed.idRecoveries.length === 1, "strict parser: one recovery proof");
}

function testValidateBatchResponseRecovery() {
  const batch = [
    buildLunaRequestPayload("g2/b1/lb", { de: "laden", index: 1700, productionFile: "data/lb/b1.js" }),
    buildLunaRequestPayload("g2/b1/lb", { de: "Ladendieb", index: 1701, productionFile: "data/lb/b1.js" }),
    buildLunaRequestPayload("g2/b1/lb", { de: "ländlich", index: 1718, productionFile: "data/lb/b1.js" }),
  ];
  const expectedIds = batch.map((obj) => obj.id);
  const items = [
    passItem(expectedIds[0]),
    passItem(expectedIds[1]),
    passItem("g2/b1/lb|idx:1718|raw:l\u00023ndlich|src:b1.js"),
  ];
  const validation = validateBatchResponse(batch, { items }, (item) => item.id);
  assert(validation.ok, "adapter validation integrates recovery");
}

function main() {
  testExact25PassWithoutRemap();
  testLbLandlichC0Recovery();
  testLbLandlichC0RecoveryU0014();
  testLbLandlichC0RecoveryU0005();
  testLbUnknownSubstitutionFails();
  testSqMutationRecovery();
  testSqExactPassWithoutRemap();
  testMultipleC0MutationsUniqueIdentity();
  testReorderedResponseStillIdentityMapped();
  testWrongScopeFails();
  testWrongObjectIndexFails();
  testWrongSourceFileFails();
  testRawOnlyMatchFails();
  testDuplicateCandidateFails();
  testDuplicateReturnedIdFails();
  testMissingResponseObjectFails();
  testUnexpectedExtraObjectFails();
  testCountMismatchFails();
  testAmbiguousIdentityFails();
  testNonC0RawDifferenceFails();
  testWrongRawWithC0Rejected();
  testCanonicalUnicodePreserved();
  testStrictParserIntegration();
  testValidateBatchResponseRecovery();

  console.log(`\nPhase 1 Luna ID recovery tests: ${testsRun - testsFailed}/${testsRun} passed`);
  if (testsFailed > 0) process.exit(1);
}

if (require.main === module) {
  main();
}

module.exports = {
  testExact25PassWithoutRemap,
  testLbLandlichC0Recovery,
};
