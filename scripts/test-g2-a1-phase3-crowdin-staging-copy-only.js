#!/usr/bin/env node
"use strict";

const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const os = require("os");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const { CROWDIN_TARGET_LOCALE_IDS, crowdinLocaleToRepo } = require("./lib/content-crowdin-bridge");
const { applyG2FlashcardsFlat, flattenG2Flashcards } = require("./lib/content-crowdin-bridge/flatten-g2-flashcards");
const { resolveCardSlug } = require("./lib/content-crowdin-bridge/slug");
const { writeArrayFile } = require("./lib/de-sync-core");
const {
  STAGING_ROOT,
  EXPECTED_LANG_COUNT,
  EXPECTED_KEY_COUNT,
  EXPECTED_VALUE_COUNT,
  EXPECTED_OBJECT_COUNT,
} = require("./lib/g2-a1-phase3/constants");
const {
  OWNER_AUTHORIZATION,
  OWNER_DECISION,
  EXPECTED_OWNER_SOURCE_HASH,
  PROOF_SCHEMA_VERSION,
  copyNativeOntoProduction,
  buildStableIdMaps,
  assertStableIdPreflight,
  mergeProductionViaStableId,
  mergeProductionViaIndex,
  exportProductionFlatViaStableId,
  compareProductionFileToStaging,
  loadProductionCardsFromDisk,
  runCrowdinStagingCopyOnlyApply,
  checkpointSetSha,
  sha256File,
  stableIdFromLvCard,
} = require("./lib/g2-a1-phase3/crowdin-staging-copy-only-apply");

let testsRun = 0;
let testsFailed = 0;

function assert(condition, message) {
  testsRun += 1;
  if (!condition) {
    testsFailed += 1;
    console.error(`FAIL: ${message}`);
  }
}

function makeTempDir() {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "g2-a1-apply-test-"));
  return dir;
}

function writeFixtureDataset(dir, lang, cards) {
  const relDir = lang === "lv" ? path.join(dir, "data") : path.join(dir, "data", lang);
  fs.mkdirSync(relDir, { recursive: true });
  const rel = path.join(relDir, "a1.js");
  writeArrayFile(rel, "A1_WORDS", cards);
  const wwwDir = lang === "lv" ? path.join(dir, "www/data") : path.join(dir, "www/data", lang);
  fs.mkdirSync(wwwDir, { recursive: true });
  writeArrayFile(path.join(wwwDir, "a1.js"), "A1_WORDS", cards);
  return rel;
}

function fixtureLvCards() {
  return [
    { de: "Apfel", lv: "ābols", level: "A1" },
    {
      de: "Besuch",
      lv: "vizīte",
      level: "A1",
      study: {
        id: "a1-besuch",
        translation: "vizīte",
        explanation: ["e1"],
        examples: [{ de: "Danke.", lv: "Paldies." }],
      },
    },
    { de: "Haus", lv: "māja", level: "A1" },
  ];
}

function fixtureStagingFlat() {
  return {
    "a1.card.apfel.native": "ābols-lt",
    "a1.card.a1-besuch.native": "vizīte-lt",
    "a1.card.a1-besuch.study.translation": "vizīte-lt",
    "a1.card.a1-besuch.study.explanation[0]": "e1-lt",
    "a1.card.a1-besuch.study.examples[0].native": "Paldies-lt",
    "a1.card.haus.native": "māja-lt",
  };
}

function testOwnerDecisionFile() {
  const text = fs.readFileSync(
    path.join(ROOT, "reports/g2-a1-crowdin-app-apply-owner-decision.md"),
    "utf8",
  );
  assert(text.includes(OWNER_AUTHORIZATION), "owner authorization present");
  assert(text.includes(OWNER_DECISION), "owner decision present");
  assert(text.includes("DEFERRED_POST_IMPORT_BACKLOG"), "deferred backlog status");
}

function testStagingComplete() {
  const files = fs.readdirSync(STAGING_ROOT).filter((f) => f.endsWith(".json"));
  assert(files.length === EXPECTED_LANG_COUNT, "31 staging files");
  let total = 0;
  for (const file of files) {
    const flat = JSON.parse(fs.readFileSync(path.join(STAGING_ROOT, file), "utf8"));
    total += Object.keys(flat).length;
  }
  assert(total === EXPECTED_VALUE_COUNT, "92101 staging values");
}

function testCopyNativePreservesDe() {
  const production = {
    de: "Apfel",
    de_article: "der",
    lv: "old",
    study: { id: "x", translation: "old", examples: [{ de: "Ich esse.", lv: "old" }] },
  };
  const translated = {
    de: "ignored",
    lv: "new",
    study: { translation: "new", examples: [{ de: "ignored", lv: "new ex" }] },
  };
  const merged = copyNativeOntoProduction(translated, production);
  assert(merged.de === "Apfel", "de preserved");
  assert(merged.de_article === "der", "de_article preserved");
  assert(merged.lv === "new", "lv updated");
  assert(merged.study.examples[0].de === "Ich esse.", "example de preserved");
  assert(merged.study.examples[0].lv === "new ex", "example lv updated");
}

function testPermutedProductionStillMapsCorrectly() {
  const lvCards = fixtureLvCards();
  const staging = fixtureStagingFlat();
  const translated = applyG2FlashcardsFlat("a1", lvCards, staging);
  const productionOrdered = [
    { de: "Haus", lv: "old", level: "A1" },
    { de: "Apfel", lv: "old", level: "A1" },
    { de: "Besuch", lv: "old", level: "A1", study: { id: "a1-besuch", examples: [{ de: "Danke.", lv: "old" }] } },
  ];
  const productionPermuted = [
    productionOrdered[2],
    productionOrdered[0],
    productionOrdered[1],
  ];
  const maps = buildStableIdMaps(lvCards, translated, productionPermuted);
  assert(maps.stats.stableIdSetMatch === "PASS", "permuted production stable-ID preflight pass");
  const stableMerged = mergeProductionViaStableId(productionPermuted, lvCards, maps);
  const indexMerged = mergeProductionViaIndex(productionPermuted, translated);
  const besuchStable = stableMerged.find((c) => c.de === "Besuch");
  const besuchIndex = indexMerged.find((c) => c.de === "Besuch");
  assert(besuchStable.lv === "vizīte-lt", "permuted stable-ID maps besuch lv");
  assert(besuchIndex.lv !== "vizīte-lt", "index-based mapping wrong under permutation");
}

function testIndexBasedWouldBeWrongUnderPermutation() {
  const lvCards = fixtureLvCards();
  const staging = fixtureStagingFlat();
  const translated = applyG2FlashcardsFlat("a1", lvCards, staging);
  const productionPermuted = [
    { de: "Besuch", lv: "old", level: "A1", study: { id: "a1-besuch", examples: [{ de: "Danke.", lv: "old" }] } },
    { de: "Haus", lv: "old", level: "A1" },
    { de: "Apfel", lv: "old", level: "A1" },
  ];
  const indexMerged = mergeProductionViaIndex(productionPermuted, translated);
  assert(indexMerged[0].lv === "ābols-lt", "index 0 gets apfel translation (wrong card)");
  assert(indexMerged[0].de === "Besuch", "index 0 is besuch de");
}

function testDuplicateSlugFailsClosed() {
  const lvCards = [
    { de: "A", lv: "a", level: "A1" },
    { de: "B", lv: "b", level: "A1", study: { id: "dup-slug" } },
    { de: "C", lv: "c", level: "A1", study: { id: "dup-slug" } },
  ];
  const translated = lvCards;
  const production = lvCards;
  const maps = buildStableIdMaps(lvCards, translated, production);
  assert(maps.stats.duplicateStableIds > 0, "duplicate slug detected");
  assert(maps.stats.stableIdSetMatch === "FAIL", "duplicate slug fails preflight");
  let threw = false;
  try {
    assertStableIdPreflight(maps);
  } catch (err) {
    threw = err.message === "BLOCKED_STABLE_CARD_ID_MAPPING";
  }
  assert(threw, "duplicate slug throws BLOCKED_STABLE_CARD_ID_MAPPING");
}

function testMissingProductionIdFailsClosed() {
  const lvCards = fixtureLvCards();
  const translated = applyG2FlashcardsFlat("a1", lvCards, fixtureStagingFlat());
  const production = [{ de: "Apfel", lv: "x", level: "A1" }];
  const maps = buildStableIdMaps(lvCards, translated, production);
  assert(maps.stats.missingProductionStableIds > 0, "missing production IDs detected");
  let threw = false;
  try {
    assertStableIdPreflight(maps);
  } catch (err) {
    threw = err.message === "BLOCKED_STABLE_CARD_ID_MAPPING";
  }
  assert(threw, "missing production ID throws");
}

function testExtraProductionIdFailsClosed() {
  const lvCards = [{ de: "Apfel", lv: "a", level: "A1" }];
  const translated = lvCards;
  const production = [
    { de: "Apfel", lv: "a", level: "A1" },
    { de: "Extra", lv: "e", level: "A1" },
  ];
  const maps = buildStableIdMaps(lvCards, translated, production);
  assert(maps.stats.extraProductionStableIds > 0, "extra production ID detected");
  let threw = false;
  try {
    assertStableIdPreflight(maps);
  } catch (err) {
    threw = err.message === "BLOCKED_STABLE_CARD_ID_MAPPING";
  }
  assert(threw, "extra production ID throws");
}

function testMissingTranslatedIdFailsClosed() {
  const lvCards = fixtureLvCards();
  const translated = [{ de: "Apfel", lv: "a", level: "A1" }];
  const production = [
    { de: "Apfel", lv: "a", level: "A1" },
    { de: "Haus", lv: "h", level: "A1" },
    { de: "Besuch", lv: "b", level: "A1" },
  ];
  const maps = buildStableIdMaps(lvCards, translated, production);
  assert(maps.stats.missingTranslatedStableIds > 0, "missing translated IDs detected");
  let threw = false;
  try {
    assertStableIdPreflight(maps);
  } catch (err) {
    threw = err.message === "BLOCKED_STABLE_CARD_ID_MAPPING";
  }
  assert(threw, "missing translated ID throws");
}

function testNoIndexFallbackInMerge() {
  const lvCards = fixtureLvCards();
  const staging = fixtureStagingFlat();
  const translated = applyG2FlashcardsFlat("a1", lvCards, staging);
  const production = [
    { de: "Haus", lv: "old", level: "A1" },
    { de: "Besuch", lv: "old", level: "A1", study: { id: "a1-besuch", examples: [{ de: "Danke.", lv: "old" }] } },
    { de: "Apfel", lv: "old", level: "A1" },
  ];
  const maps = buildStableIdMaps(lvCards, translated, production);
  const merged = mergeProductionViaStableId(production, lvCards, maps);
  const apfel = merged.find((c) => c.de === "Apfel");
  assert(apfel.lv === "ābols-lt", "stable merge uses de identity not index");
}

function testPostWriteReloadFromDisk() {
  const tmp = makeTempDir();
  const lvCards = fixtureLvCards();
  const staging = fixtureStagingFlat();
  const translated = applyG2FlashcardsFlat("a1", lvCards, staging);
  const production = [
    { de: "Apfel", lv: "old", level: "A1" },
    {
      de: "Besuch",
      lv: "old",
      level: "A1",
      study: { id: "a1-besuch", examples: [{ de: "Danke.", lv: "old" }] },
    },
    { de: "Haus", lv: "old", level: "A1" },
  ];
  const maps = buildStableIdMaps(lvCards, translated, production);
  const merged = mergeProductionViaStableId(production, lvCards, maps);
  writeFixtureDataset(tmp, "lt", merged);
  const reloaded = loadProductionCardsFromDisk("data/lt/a1.js", tmp);
  assert(JSON.stringify(reloaded) === JSON.stringify(merged), "post-write reload matches merged");
  const dataCompare = compareProductionFileToStaging({
    lang: "lt",
    relPath: "data/lt/a1.js",
    lvCards,
    stagingFlat: staging,
    diagnosticsDir: path.join(tmp, "diag"),
    layer: "data",
    root: tmp,
    expectedObjectCount: lvCards.length,
  });
  assert(dataCompare.matchedKeyCount === Object.keys(staging).length, "fixture data flat matches staging");
  assert(dataCompare.missingKeys === 0, "fixture data missing 0");
  assert(dataCompare.extraKeys === 0, "fixture data extra 0");
  fs.rmSync(tmp, { recursive: true, force: true });
}

function testFixtureDataAndWwwVerifiedIndependently() {
  const tmp = makeTempDir();
  const lvCards = fixtureLvCards();
  const staging = fixtureStagingFlat();
  const translated = applyG2FlashcardsFlat("a1", lvCards, staging);
  const production = lvCards.map((lv) => {
    const base = { de: lv.de, lv: "old", level: "A1" };
    if (lv.study) {
      base.study = JSON.parse(JSON.stringify(lv.study));
      if (base.study.examples) base.study.examples = base.study.examples.map((ex) => ({ de: ex.de, lv: "old" }));
    }
    return base;
  });
  const maps = buildStableIdMaps(lvCards, translated, production);
  const merged = mergeProductionViaStableId(production, lvCards, maps);
  writeFixtureDataset(tmp, "lt", merged);
  const dataCompare = compareProductionFileToStaging({
    lang: "lt",
    relPath: "data/lt/a1.js",
    lvCards,
    stagingFlat: staging,
    diagnosticsDir: path.join(tmp, "diag"),
    layer: "data",
    root: tmp,
    expectedObjectCount: lvCards.length,
  });
  const wwwCompare = compareProductionFileToStaging({
    lang: "lt",
    relPath: "www/data/lt/a1.js",
    lvCards,
    stagingFlat: staging,
    diagnosticsDir: path.join(tmp, "diag"),
    layer: "www/data",
    root: tmp,
    expectedObjectCount: lvCards.length,
  });
  assert(dataCompare.matchedKeyCount === Object.keys(staging).length, "data layer matches");
  assert(wwwCompare.matchedKeyCount === Object.keys(staging).length, "www layer matches");
  fs.rmSync(tmp, { recursive: true, force: true });
}

function testMismatchDetection() {
  const lvCards = fixtureLvCards();
  const staging = fixtureStagingFlat();
  const translated = applyG2FlashcardsFlat("a1", lvCards, staging);
  const maps = buildStableIdMaps(lvCards, translated, lvCards);
  const merged = mergeProductionViaStableId(lvCards, lvCards, maps);
  merged[0].lv = "WRONG";
  const flat = exportProductionFlatViaStableId(merged, lvCards);
  let mismatches = 0;
  for (const [k, v] of Object.entries(staging)) {
    if (flat[k] !== undefined && flat[k] !== v) mismatches += 1;
  }
  assert(mismatches === 1, "one changed production value yields mismatch=1");
}

function testMissingKeyDetection() {
  const lvCards = fixtureLvCards();
  const staging = fixtureStagingFlat();
  const incomplete = [
    { de: "Apfel", lv: "ābols-lt", level: "A1" },
    { de: "Besuch", lv: "vizīte-lt", level: "A1" },
    { de: "Haus", lv: "māja-lt", level: "A1" },
  ];
  const flat = exportProductionFlatViaStableId(incomplete, lvCards);
  let missing = 0;
  for (const k of Object.keys(staging)) {
    if (flat[k] === undefined) missing += 1;
  }
  assert(missing >= 1, "missing study structure yields missing>=1");
}

function testExtraKeyDetection() {
  const lvCards = [{ de: "Apfel", lv: "a", level: "A1" }];
  const staging = { "a1.card.apfel.native": "a-lt" };
  const production = [
    {
      de: "Apfel",
      lv: "a-lt",
      level: "A1",
      study: { id: "extra-study", translation: "extra" },
    },
  ];
  const flat = exportProductionFlatViaStableId(production, lvCards);
  const extra = Object.keys(flat).filter((k) => staging[k] === undefined);
  assert(extra.length >= 1, "extra study field detected");
}

function testAllStudyFieldsCoveredInFixture() {
  const lvCards = [
    {
      de: "Test",
      lv: "t",
      level: "A1",
      study: {
        id: "a1-test",
        translation: "tr",
        title: "ti",
        note: "no",
        subtitle: "su",
        lead: "le",
        question: "qu",
        explanation: ["e0"],
        tip: ["tip0"],
        important: ["imp0"],
        examples: [{ de: "d", lv: "n" }],
        comparison: [{ word: "w", meaning: "m", example: "ex" }],
      },
    },
  ];
  const staging = flattenG2Flashcards("a1", lvCards);
  const translated = applyG2FlashcardsFlat("a1", lvCards, staging);
  const production = JSON.parse(JSON.stringify(lvCards));
  const maps = buildStableIdMaps(lvCards, translated, production);
  const merged = mergeProductionViaStableId(production, lvCards, maps);
  const flat = exportProductionFlatViaStableId(merged, lvCards);
  let matched = 0;
  for (const [k, v] of Object.entries(staging)) {
    if (flat[k] === v) matched += 1;
  }
  assert(matched === Object.keys(staging).length, "all study translation fields covered");
}

function testDryRunStableIdPreflight() {
  const checkpointBefore = checkpointSetSha();
  const lvBefore = sha256File(path.join(ROOT, "data/a1.js"));
  const ownerBefore = JSON.parse(
    fs.readFileSync(path.join(ROOT, "reports/g2-a1-phase3-owner-proof.json"), "utf8"),
  ).sourceHash;

  const result = runCrowdinStagingCopyOnlyApply({ root: ROOT, dryRun: true });
  assert(result.schemaVersion === PROOF_SCHEMA_VERSION, "proof schema v2");
  assert(result.verificationMode === "POST_WRITE_RELOAD_FROM_DISK", "post-write mode");
  assert(result.cardMapping === "STABLE_ID_OR_SLUG", "stable ID mapping");
  assert(result.positionalCardMappingUsed === false, "no positional mapping");
  assert(result.fuzzyMappingUsed === false, "no fuzzy mapping");
  assert(result.languagesApplied === EXPECTED_LANG_COUNT, "dry-run 31 langs");
  assert(result.newLunaCalls === 0, "no luna calls");
  assert(result.automaticOwnerDecisions === 0, "no owner decisions");
  assert(result.lvSourceChanged === false, "lv unchanged during dry-run");
  assert(result.stableIdDuplicates === 0, "no stable ID duplicates in preflight");

  const checkpointAfter = checkpointSetSha();
  const lvAfter = sha256File(path.join(ROOT, "data/a1.js"));
  const ownerAfter = JSON.parse(
    fs.readFileSync(path.join(ROOT, "reports/g2-a1-phase3-owner-proof.json"), "utf8"),
  ).sourceHash;
  assert(checkpointBefore === checkpointAfter, "checkpoint unchanged dry-run");
  assert(lvBefore === lvAfter, "lv source unchanged dry-run");
  assert(ownerBefore === EXPECTED_OWNER_SOURCE_HASH, "owner source hash expected");
  assert(ownerBefore === ownerAfter, "owner source unchanged dry-run");
}

function testDeterministicDryRunHash() {
  const r1 = runCrowdinStagingCopyOnlyApply({ root: ROOT, dryRun: true });
  const r2 = runCrowdinStagingCopyOnlyApply({ root: ROOT, dryRun: true });
  assert(r1.outputHash === r2.outputHash, "deterministic dry-run output hash");
}

function testPerLanguageStableIdPreflight() {
  const result = runCrowdinStagingCopyOnlyApply({ root: ROOT, dryRun: true });
  for (const row of result.perLanguage) {
    assert(row.stableIdSetMatch === "PASS", `${row.lang} stable ID set match`);
    assert(row.stagingRoundTrip === "PASS", `${row.lang} staging roundtrip`);
    assert(row.stableCardCount === EXPECTED_OBJECT_COUNT, `${row.lang} 702 cards`);
  }
}

function testAllTargetLanguagesPresent() {
  const result = runCrowdinStagingCopyOnlyApply({ root: ROOT, dryRun: true });
  const langs = new Set(result.perLanguage.map((row) => row.lang));
  for (const id of CROWDIN_TARGET_LOCALE_IDS) {
    assert(langs.has(crowdinLocaleToRepo(id)), `language present ${crowdinLocaleToRepo(id)}`);
  }
}

function testLunaFindingsUnchanged() {
  const result = runCrowdinStagingCopyOnlyApply({ root: ROOT, dryRun: true });
  assert(result.lunaFindingsCount === 22750, "luna findings count 22750");
  assert(result.lunaFindingsPending === 22750, "luna findings pending 22750");
}

function testCheckpointShaUnchanged() {
  const result = runCrowdinStagingCopyOnlyApply({ root: ROOT, dryRun: true });
  assert(result.checkpointShaBefore === result.checkpointShaAfter, "checkpoint SHA unchanged");
}

function testOwnerSourceHashUnchanged() {
  const result = runCrowdinStagingCopyOnlyApply({ root: ROOT, dryRun: true });
  assert(result.ownerSourceHashBefore === result.ownerSourceHashAfter, "owner source hash unchanged");
  assert(result.ownerSourceHashBefore === EXPECTED_OWNER_SOURCE_HASH, "expected owner source hash");
}

function testLvSourceUnchanged() {
  const result = runCrowdinStagingCopyOnlyApply({ root: ROOT, dryRun: true });
  assert(result.lvSourceShaBefore === result.lvSourceShaAfter, "lv source SHA unchanged");
}

function testProductionDeDiffZeroBeforeApply() {
  const { fetchOriginMain, resolveOriginMainSha, gitDeDiffAgainstBaseline } = require("./lib/content-discovery/git-baseline");
  fetchOriginMain();
  const origin = resolveOriginMainSha();
  const de = gitDeDiffAgainstBaseline(origin.sha);
  assert(de.clean, "DE diff 0 before apply test");
}

function testStableIdUsesLvSlugAuthority() {
  const lvCards = fixtureLvCards();
  const besuchLv = lvCards.find((c) => c.de === "Besuch");
  assert(stableIdFromLvCard(besuchLv) === "a1-besuch", "LV slug authority for study card");
  const ordinary = { de: "Besuch", lv: "x", level: "A1" };
  assert(resolveCardSlug(ordinary) === "besuch", "production ordinary slug differs");
}

function main() {
  testOwnerDecisionFile();
  testStagingComplete();
  testCopyNativePreservesDe();
  testStableIdUsesLvSlugAuthority();
  testPermutedProductionStillMapsCorrectly();
  testIndexBasedWouldBeWrongUnderPermutation();
  testDuplicateSlugFailsClosed();
  testMissingProductionIdFailsClosed();
  testExtraProductionIdFailsClosed();
  testMissingTranslatedIdFailsClosed();
  testNoIndexFallbackInMerge();
  testPostWriteReloadFromDisk();
  testFixtureDataAndWwwVerifiedIndependently();
  testMismatchDetection();
  testMissingKeyDetection();
  testExtraKeyDetection();
  testAllStudyFieldsCoveredInFixture();
  testProductionDeDiffZeroBeforeApply();
  testDryRunStableIdPreflight();
  testDeterministicDryRunHash();
  testPerLanguageStableIdPreflight();
  testAllTargetLanguagesPresent();
  testLunaFindingsUnchanged();
  testCheckpointShaUnchanged();
  testOwnerSourceHashUnchanged();
  testLvSourceUnchanged();

  console.log(`\nTests run: ${testsRun}, failed: ${testsFailed}`);
  if (testsFailed > 0) process.exit(1);
  console.log("PASS: g2-a1-phase3-crowdin-staging-copy-only");
}

if (require.main === module) {
  main();
}

module.exports = { main };
