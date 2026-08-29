#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const os = require("os");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const {
  buildInventoryFromScan,
  scanDatasetMainTranslations,
  scanG3CourseLessonsInventory,
} = require("./lib/main-translation-field-inventory");
const { finalizeInventoryMetrics } = require("./lib/content-discovery/inventory-metrics");
const { scanG3StructuredInventory } = require("./lib/content-discovery/g3-inventory-schema");
const { applySemanticRegistryDedup } = require("./lib/content-discovery/phase1-semantic-dedup");
const { deduplicateFindings } = require("./lib/content-discovery/phase1-findings-dedup");
const { writeReportAtomic } = require("./lib/content-discovery/report-builder");
const {
  extractLegacyHtmlNodes,
  extractTextNodeFallback,
} = require("./lib/content-discovery/collectors/g3-legacy-html");
const { runLunaForScope } = require("./lib/luna-orchestrator");
const { createMockLunaTransport } = require("./lib/luna-transport");
const { runBatchedAdapter } = require("./lib/luna-adapter-runner");
const { runPhase1Discovery } = require("./run-phase1-discovery");
const {
  runPreBacklogHistoryGate,
  generateOwnerPrep,
} = require("./lib/content-discovery/phase1-owner-prep");
const { validateHistoryGates } = require("./lib/discovery-stability");
const { evaluateLunaCoverage } = require("./lib/content-discovery/phase1-coverage-gates");
const { collectG1SentencesMultiTranslation } = require("./lib/content-discovery/collectors/multi-translation");

function assert(condition, message) {
  if (!condition) {
    console.error(`FAIL: ${message}`);
    process.exit(1);
  }
}

async function testInventoryComputed() {
  const entries = [
    { de: "Haus", lv: "maja", study: null },
    { de: "test", lv: "a • b", study: { translation: "x • y", layout: "standardStudy" } },
  ];
  const inventory = buildInventoryFromScan(entries, (e, i) => e.de || `card-${i}`, "data/test.js");
  assert(inventory.inventoryCoverage === 1, "inventory coverage computed");
  assert(inventory.unmappedMainTranslationFields === 0, "no unmapped in known schema");

  const bad = scanG3StructuredInventory(
    { lesson1: { customUnknownPath: { lv: "nezināms" } } },
    "data/test.js",
  );
  assert(bad.unmappedMainTranslationFields > 0, "unmapped detected for unknown field");
  assert(bad.inventoryCoverage < 1, "coverage < 1 when unmapped");

  try {
    finalizeInventoryMetrics({
      inventoryObjectsExpected: 5,
      inventoryFieldsDiscovered: 5,
      inventoryFieldsMapped: 4,
      inventoryFieldsUnmapped: 0,
    });
    assert(false, "invariant should throw");
  } catch (err) {
    assert(/invariant/i.test(err.message), "inventory invariant enforced");
  }
}

async function testG1SentencesMultiScan() {
  const multi = collectG1SentencesMultiTranslation({ lang: "da", idPrefix: "TEST" });
  assert(multi.stats.fieldsScanned === 796, `g1/sentences/da fieldsScanned=796 got ${multi.stats.fieldsScanned}`);
  assert(
    (multi.stats.candidatesRaw || 0) < multi.stats.fieldsScanned,
    "candidatesRaw must be less than fieldsScanned",
  );
}

async function testSemanticDedup() {
  const base = {
    auditId: "S-1",
    scopeId: "g2/a1/et",
    group: "g2",
    dataset: "a1",
    lang: "et",
    cardId: "c1",
    fieldPath: "lv",
    severity: "HIGH",
    category: "MULTIPLE_TRANSLATIONS_DETECTED",
    classificationStatus: "VALIDATED_REAL_FINDING",
    current: "a • b",
    source: "gpt-5.6-luna",
    reason: "dup family",
  };
  const registry = new Map();
  const first = applySemanticRegistryDedup([{ ...base, dedupKey: "k1", findingStableId: "f1" }], registry);
  assert(first.pass, "semantic first pass");
  const second = applySemanticRegistryDedup(
    [{ ...base, dedupKey: "k2", findingStableId: "f2", auditId: "S-2" }],
    first.registry,
  );
  assert(
    second.findings[0].classificationStatus === "PREVIOUSLY_SEEN_RAW_LLM_CANDIDATE",
    "semantic dedup marks previously seen",
  );

  const conflict = applySemanticRegistryDedup(
    [{ ...base, dedupKey: "k3", findingStableId: "f3" }],
    first.registry,
    { strictConflict: true },
  );
  assert(!conflict.pass, "semantic conflict detected");
}

async function testG3InventoryUnmapped() {
  const fixture = {
    lesson1: {
      title: { lv: "Sveiki" },
      customUnknownPath: { lv: "nezināms" },
    },
  };
  const scan = scanG3StructuredInventory(fixture, "data/test/courseLessons.js");
  assert(scan.unmappedMainTranslationFields > 0, "G3 unknown path unmapped > 0");
  assert(!scan.pass, "G3 inventory fails with unknown path");
}

async function testLegacyHtmlNoRoot() {
  const malformed = extractLegacyHtmlNodes("<p><span>broken", "lesson-a");
  assert(malformed.error === "LEGACY_HTML_GRANULARITY_UNAVAILABLE", "malformed html returns error not root");

  const nested = extractTextNodeFallback("<div><p>Hello</p><span>World</span></div>", "lesson-b");
  assert(nested.length >= 2, "text-node fallback extracts granular nodes");
  assert(!nested.some((n) => n.nodePath === "root"), "no parent-only root node");
}

async function testAtomicWrites() {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "phase1-atomic-"));
  const target = path.join(dir, "report.json");
  writeReportAtomic(target, { ok: true });
  assert(fs.existsSync(target), "atomic write creates target");
  assert(fs.readdirSync(dir).every((f) => !f.endsWith(".tmp")), "no stale temp files");
}

async function testLunaAdapters() {
  const scopes = [
    { group: "g2", dataset: "a1", lang: "et" },
    { group: "g1", dataset: "sentences", lang: "da" },
    { group: "g1", dataset: "verbs", lang: "da" },
    { group: "g1", dataset: "training", lang: "da" },
    { group: "g3", dataset: "courseLessons", lang: "cs" },
  ];

  for (const scope of scopes) {
    const result = await runLunaForScope(scope, { transport: createMockLunaTransport() });
    assert(!result.skipped, `adapter reachable for ${scope.group}/${scope.dataset}/${scope.lang}`);
    assert(result.ok, `adapter pass for ${scope.group}/${scope.dataset}/${scope.lang}`);
    assert((result.stats?.realCalls || 0) === 0, "mock transport realCalls=0");
  }

  const partialTransport = createMockLunaTransport({ default: { partial: true } });
  const fail = await runLunaForScope({ group: "g2", dataset: "a1", lang: "et" }, { transport: partialTransport });
  assert(!fail.ok, "coverage mismatch fails batch");
}

async function testLunaRetryTimeoutContract() {
  let calls = 0;
  const transport = {
    get realCallsDelta() {
      return 0;
    },
    async call() {
      calls += 1;
      if (calls < 2) throw new Error("TIMEOUT");
      return { items: [{ id: "x" }], tokensUsed: 0 };
    },
  };
  const result = await runBatchedAdapter({
    transport,
    objects: [{ id: "x" }],
    getId: (o) => o.id,
    serialize: (o) => o,
    batchSize: 1,
    scopeId: "test",
    adapterName: "test",
  });
  assert(result.ok, "retry succeeds after transient failure");
  assert(result.stats.retries >= 1, "retry stats recorded");
}

async function testOwnerPrepWiring() {
  const skip = runPreBacklogHistoryGate([]);
  assert(skip.status === "SKIP", "zero validated findings skips owner prep");

  const fail = runPreBacklogHistoryGate(
    [{ classificationStatus: "VALIDATED_REAL_FINDING", registryConflict: true }],
    {},
  );
  assert(fail.status === "FAIL", "registry conflict blocks owner prep");

  const gateFail = validateHistoryGates({
    rawHistoryLoaded: true,
    ownerHistoryLoaded: true,
    preBacklogReady: false,
  });
  assert(gateFail.PRE_BACKLOG_HISTORY_GATE === "FAIL", "pre backlog gate fail");

  const pass = runPreBacklogHistoryGate(
    [
      {
        classificationStatus: "VALIDATED_REAL_FINDING",
        scopeId: "g2/a1/et",
        findingType: "TEST",
        fieldPath: "lv",
      },
    ],
    {},
  );
  assert(pass.status === "PASS", "pre backlog pass with findings");

  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "owner-prep-"));
  const prep = generateOwnerPrep(
    [
      {
        classificationStatus: "VALIDATED_REAL_FINDING",
        scopeId: "g2/a1/et",
        findingType: "TEST",
        fieldPath: "lv",
        proposed: "TEST",
      },
    ],
    "g2/a1/et",
    dir,
  );
  assert(prep.count === 1, "owner prep generates files");
  assert(fs.existsSync(path.join(dir, "g2_a1_et", "owner-prep-status.json")), "owner prep status file");
}

async function testOrchestratorMockLuna() {
  const result = await runPhase1Discovery({
    groups: ["g2"],
    datasetsByGroup: { g2: ["a1"], g1: [], g3: [] },
    langs: ["et"],
    skipLuna: true,
    lunaMockIntegration: true,
    allowWithLuna: false,
    preBacklogReady: true,
  });
  assert(result.matrix.summary.length === 1, "orchestrator single scope");
  assert(result.matrix.summary[0].lunaProcessed, "mock luna processed scope");
  assert(result.matrix.constraints.lunaCalls === 0, "orchestrator luna real calls 0");
}

async function testOrchestratorCoverageMismatchFail() {
  const partialTransport = createMockLunaTransport({ default: { partial: true } });
  const result = await runPhase1Discovery({
    groups: ["g2"],
    datasetsByGroup: { g2: ["a1"], g1: [], g3: [] },
    langs: ["et"],
    skipLuna: true,
    lunaMockIntegration: true,
    lunaTransport: partialTransport,
    allowWithLuna: false,
    preBacklogReady: true,
  });
  assert(result.lunaAggregate.failures.length > 0, "orchestrator fails on luna coverage mismatch");
}

async function testCliUnknownArg() {
  try {
    execSync("node scripts/run-phase1-discovery.js --bogus-flag", {
      cwd: ROOT,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "pipe"],
    });
    assert(false, "unknown arg should exit non-zero");
  } catch (err) {
    assert(err.status === 1, "unknown arg exit 1");
    assert(/ERROR: Unknown argument/.test(err.stderr || ""), "unknown arg message");
    assert(!/at parseArgs/.test(err.stderr || ""), "no stack trace without --debug");
  }
}

async function run() {
  await testInventoryComputed();
  await testG1SentencesMultiScan();
  await testSemanticDedup();
  await testG3InventoryUnmapped();
  await testLegacyHtmlNoRoot();
  await testAtomicWrites();
  await testLunaAdapters();
  await testLunaRetryTimeoutContract();
  await testOwnerPrepWiring();
  await testOrchestratorMockLuna();
  await testOrchestratorCoverageMismatchFail();
  await testCliUnknownArg();

  const fixture = evaluateLunaCoverage([], { fixture: { expected: 318, processed: 318 } });
  assert(fixture.pass, "evaluateLunaCoverage fixture 318/318");

  console.log("PASS: phase1 F0-COMP repair integration checks");
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
