#!/usr/bin/env node
"use strict";

const fs = require("fs");
const os = require("os");
const path = require("path");
const fixture = require("./fixtures/phase1-id-recovery-lb-sq.json");
const {
  recoverLunaResponseItems,
  evaluateRawCorruptionRecovery,
  parseCanonicalLunaRequestId,
} = require("./lib/phase1-luna-id-recovery");
const {
  evaluateLandlichStructuralSegment,
  isLandlichStructuralC0Recovery,
} = require("./lib/phase1-luna-id-recovery-landlich");
const {
  escapeDiagnosticString,
  buildRecoveryFailureDiagnostic,
  writeRecoveryDiagnostics,
  formatShortRecoveryError,
} = require("./lib/phase1-luna-id-recovery-diagnostics");

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

function landlichExpectedBatch(mutatedId) {
  return buildItems(
    fixture.expectedIds25.map((id) => (id === fixture.landlichCanonicalId ? mutatedId : id)),
  );
}

function testObservedLbVariantsPass() {
  for (const [label, mutationId] of [
    ["U0002", fixture.landlichLbMutationId],
    ["U0014", fixture.landlichLbMutationIdU0014],
    ["U0005", fixture.landlichLbMutationIdU0005],
  ]) {
    const result = recoverLunaResponseItems(landlichExpectedBatch(mutationId), fixture.expectedIds25);
    assert(result.ok, `observed ${label} structural recovery PASS`);
  }
}

function testSyntheticStructuralVariantsPass() {
  for (const [label, mutationId] of [
    ["U0003", fixture.landlichLbSyntheticU0003],
    ["U00035", fixture.landlichLbSyntheticU00035],
    ["U0001ab", fixture.landlichLbSyntheticU0001ab],
  ]) {
    const result = recoverLunaResponseItems(landlichExpectedBatch(mutationId), fixture.expectedIds25);
    assert(result.ok, `synthetic ${label} structural recovery PASS`);
    assert(
      result.recoveries[0]?.reason === "LANDLICH_STRUCTURAL_C0_RECOVERY",
      `synthetic ${label} recovery reason`,
    );
  }
}

function testExactCanonicalPassWithoutRecovery() {
  const items = buildItems(fixture.expectedIds25);
  const result = recoverLunaResponseItems(items, fixture.expectedIds25);
  assert(result.ok, "exact canonical PASS without recovery");
  assert(result.recoveries.length === 0, "no recovery records");
}

function testCompletelyWrongFails() {
  const result = recoverLunaResponseItems(
    [passItem(fixture.landlichLbUnknownSubstitutionId)],
    [fixture.landlichCanonicalId],
  );
  assert(!result.ok, "completely wrong FAIL");
  assert(result.shortError.includes("BLOCKED_UNCAPTURED_RAW_VARIANT"), "wrong substitution classification");
}

function testWrongPrefixSuffixFail() {
  const prefix = recoverLunaResponseItems(
    [passItem(fixture.landlichLbWrongPrefix)],
    [fixture.landlichCanonicalId],
  );
  assert(!prefix.ok, "wrong prefix FAIL");
  const suffix = recoverLunaResponseItems(
    [passItem(fixture.landlichLbWrongSuffix)],
    [fixture.landlichCanonicalId],
  );
  assert(!suffix.ok, "wrong suffix FAIL");
}

function testSegmentTooLongFails() {
  const result = recoverLunaResponseItems(
    [passItem(fixture.landlichLbSegmentTooLong)],
    [fixture.landlichCanonicalId],
  );
  assert(!result.ok, "segment too long FAIL");
  const evalResult = evaluateLandlichStructuralSegment("l\u0002abcdndlich");
  assert(!evalResult.ok && evalResult.reason === "SEGMENT_LENGTH_OUT_OF_RANGE", "segment length rejected");
}

function testWrongScopeIndexSourceFail() {
  const expected = [fixture.landlichCanonicalId];
  assert(!recoverLunaResponseItems([passItem("g2/b1/sq|idx:1718|raw:l\u00023ndlich|src:b1.js")], expected).ok, "wrong scope");
  assert(!recoverLunaResponseItems([passItem("g2/b1/lb|idx:1719|raw:l\u00023ndlich|src:b1.js")], expected).ok, "wrong index");
  assert(!recoverLunaResponseItems([passItem("g2/b1/lb|idx:1718|raw:l\u00023ndlich|src:b2.js")], expected).ok, "wrong source");
}

function testNonC0VariantFails() {
  const result = recoverLunaResponseItems([passItem(fixture.nonC0MutationId)], [fixture.landlichCanonicalId]);
  assert(!result.ok, "non-C0 FAIL");
}

function testStructuralRuleScopedToLandlichCanonical() {
  const otherParsed = parseCanonicalLunaRequestId("g2/b1/lb|idx:1719|raw:Land\u0004straße|src:b1.js");
  assert(!isLandlichStructuralC0Recovery(otherParsed, "Land\u0004straße"), "other index not structural");
  const evalOther = evaluateRawCorruptionRecovery(
    parseCanonicalLunaRequestId("g2/b1/lb|idx:1719|raw:Landstraße|src:b1.js"),
    "Land\u0004straße",
  );
  assert(evalOther.ok, "other word still uses insertion-only rule");
}

function testDiagnosticsEscapedAndNoApiKey() {
  process.env.OPENAI_API_KEY = "sk-test-secret-key-12345";
  const result = recoverLunaResponseItems(
    [passItem(fixture.landlichLbUnknownSubstitutionId)],
    [fixture.landlichCanonicalId],
    { attempt: 2 },
  );
  assert(result.diagnostics.length > 0, "diagnostics recorded");
  const diag = result.diagnostics[0];
  assert(diag.returnedIdEscaped.includes("\\u"), "returnedId escaped");
  assert(diag.returnedRawEscaped.includes("\\u"), "returnedRaw escaped");
  assert(!JSON.stringify(diag).includes("sk-test-secret-key-12345"), "api key redacted");
  assert(diag.attempt === 2, "attempt number preserved");
  assert(diag.classification === "BLOCKED_UNCAPTURED_RAW_VARIANT", "classification");
  assert(
    formatShortRecoveryError(result.issues, result.diagnostics).includes("BLOCKED_UNCAPTURED_RAW_VARIANT"),
    "short error classification",
  );

  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), "id-recovery-diag-"));
  process.env.PHASE1_ID_RECOVERY_DIAGNOSTICS_DIR = tmpDir;
  const filePath = writeRecoveryDiagnostics(result.diagnostics, { scopeId: "g2/b1/lb", batchIndex: 68, attempt: 2 });
  const saved = JSON.parse(fs.readFileSync(filePath, "utf8"));
  assert(saved.records.length === result.diagnostics.length, "diagnostics written");
  assert(saved.batchIndex === 68, "batch index saved");
  delete process.env.PHASE1_ID_RECOVERY_DIAGNOSTICS_DIR;
  delete process.env.OPENAI_API_KEY;
  fs.rmSync(tmpDir, { recursive: true, force: true });
}

function testEscapeDiagnosticControlChars() {
  const escaped = escapeDiagnosticString("l\u0002wrong");
  assert(escaped.includes("\\u0002"), "control char escaped in diagnostics");
}

function main() {
  testObservedLbVariantsPass();
  testSyntheticStructuralVariantsPass();
  testExactCanonicalPassWithoutRecovery();
  testCompletelyWrongFails();
  testWrongPrefixSuffixFail();
  testSegmentTooLongFails();
  testWrongScopeIndexSourceFail();
  testNonC0VariantFails();
  testStructuralRuleScopedToLandlichCanonical();
  testDiagnosticsEscapedAndNoApiKey();
  testEscapeDiagnosticControlChars();

  console.log(`\nPhase 1 Luna structural ID recovery tests: ${testsRun - testsFailed}/${testsRun} passed`);
  if (testsFailed > 0) process.exit(1);
}

if (require.main === module) {
  main();
}

module.exports = { main };
