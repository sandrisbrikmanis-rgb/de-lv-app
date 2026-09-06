#!/usr/bin/env node
"use strict";

/**
 * Phase 2 G2/A1 Crowdin infrastructure gate tests (no Crowdin API writes).
 */

const crypto = require("crypto");
const fs = require("fs");
const os = require("os");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const {
  CONTENT_LANGUAGES,
  TARGET_LANGUAGES,
  verifyRoundTrip,
  exportG2LevelFlat,
  exportG2LevelToCrowdinJson,
  getLvG2SourceKeySet,
  loadG2Level,
  validateExportKeySet,
  validateLocaleMappingRegistry,
  crowdinLocaleToRepo,
  G2_A1_EXPECTED_KEY_COUNT,
  G2_A1_EXPECTED_OBJECT_COUNT,
  prepareG2A1StagingImport,
  writeG2A1StagingImport,
  parseCrowdinJson,
  exportFlatToJson,
} = require("./lib/content-crowdin-bridge");
const { isProductionPath } = require("./lib/content-crowdin-bridge/import-staging");

const LV_EXPORT_PATH = path.join(ROOT, "crowdin", "content", "g2", "lv-a1.json");

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function sha256File(filePath) {
  const hash = crypto.createHash("sha256");
  hash.update(fs.readFileSync(filePath));
  return hash.digest("hex");
}

function makeTempDir(prefix) {
  return fs.mkdtempSync(path.join(os.tmpdir(), prefix));
}

function testLvExportCountsAndKeys() {
  const cards = loadG2Level("lv", "a1");
  assert(cards.length === G2_A1_EXPECTED_OBJECT_COUNT, `object count ${cards.length}`);
  const flat = parseCrowdinJson(fs.readFileSync(LV_EXPORT_PATH, "utf8"));
  assert(Object.keys(flat).length === G2_A1_EXPECTED_KEY_COUNT, `key count ${Object.keys(flat).length}`);
  const exportErrors = validateExportKeySet(flat);
  assert(exportErrors.length === 0, exportErrors.join("; "));
  console.log(`OK LV export: ${cards.length} objects, ${Object.keys(flat).length} keys`);
}

function testDeterministicExportSha() {
  const first = sha256File(LV_EXPORT_PATH);
  const regenerated = exportG2LevelToCrowdinJson("lv", "a1");
  const tmp = path.join(makeTempDir("phase2-g2-a1-export-"), "lv-a1.json");
  fs.mkdirSync(path.dirname(tmp), { recursive: true });
  fs.writeFileSync(tmp, regenerated, "utf8");
  const second = sha256File(tmp);
  assert(first === second, `deterministic export SHA mismatch ${first} vs ${second}`);
  console.log(`OK deterministic export SHA: ${first}`);
  return first;
}

function testLocaleMapping() {
  const report = validateLocaleMappingRegistry();
  assert(report.pass, JSON.stringify(report));
  try {
    crowdinLocaleToRepo("zz-XX");
    throw new Error("unknown locale did not throw");
  } catch (err) {
    assert(String(err.message).includes("UNKNOWN_CROWDIN_LOCALE"), err.message);
  }
  console.log(`OK locale mapping: ${report.crowdinCount}/31 Crowdin → ${report.repoUniqueCount} repo locales`);
}

function testG2A1RoundTripAllLangs() {
  let passed = 0;
  for (const lang of CONTENT_LANGUAGES) {
    const result = verifyRoundTrip({ group: "g2", lang, level: "a1" });
    if (result.skipped) {
      throw new Error(`unexpected skip for g2/a1/${lang}: ${result.reason}`);
    }
    assert(result.pass, `${lang}: ${result.reason}`);
    passed++;
  }
  console.log(`OK G2/A1 round-trip: ${passed}/${CONTENT_LANGUAGES.length} languages`);
}

function buildValidTranslationFixture(lang = "et") {
  const source = exportG2LevelFlat("lv", "a1");
  const sourceKeys = Object.keys(source);
  const out = {};
  sourceKeys.forEach((key, index) => {
    out[key] = `${lang}-proposed-${index}`;
  });
  assert(Object.keys(out).length === G2_A1_EXPECTED_KEY_COUNT, "fixture key count");
  return out;
}

function testStagingImportHappyPath() {
  const stagingDir = makeTempDir("phase2-g2-a1-staging-");
  const lang = "et";
  const fixture = buildValidTranslationFixture(lang);
  fixture[Object.keys(fixture)[0]] = "Variant A • Variant B";
  const inputPath = path.join(stagingDir, `${lang}-a1.json`);
  fs.writeFileSync(inputPath, exportFlatToJson(fixture), "utf8");

  const prepared = prepareG2A1StagingImport({ lang, stagingDir });
  assert(prepared.ok, prepared.errors?.join("; "));
  assert(prepared.ownerDecisionRequired >= 1, "expected OWNER_DECISION_REQUIRED");
  const outPath = writeG2A1StagingImport(prepared);
  const payload = JSON.parse(fs.readFileSync(outPath, "utf8"));
  assert(payload.meta.classification === "PROPOSED", "meta.classification");
  const multiEntry = Object.values(payload.entries).find((e) => e.status === "OWNER_DECISION_REQUIRED");
  assert(multiEntry, "missing OWNER_DECISION_REQUIRED entry");
  console.log("OK staging import happy path + multi-translation OWNER_DECISION_REQUIRED");
}

function testNegativeImportCases() {
  const lang = "da";
  const base = buildValidTranslationFixture(lang);

  const missingDir = makeTempDir("phase2-g2-a1-missing-");
  const missingFlat = { ...base };
  delete missingFlat[Object.keys(missingFlat)[0]];
  fs.writeFileSync(path.join(missingDir, `${lang}-a1.json`), exportFlatToJson(missingFlat), "utf8");
  const missing = prepareG2A1StagingImport({ lang, stagingDir: missingDir });
  assert(!missing.ok && missing.errors.some((e) => e.startsWith("MISSING_KEYS")), "missing keys");

  const extraDir = makeTempDir("phase2-g2-a1-extra-");
  const extraFlat = { ...base, "a1.card.__injected__.native": "x" };
  fs.writeFileSync(path.join(extraDir, `${lang}-a1.json`), exportFlatToJson(extraFlat), "utf8");
  const extra = prepareG2A1StagingImport({ lang, stagingDir: extraDir });
  assert(!extra.ok && extra.errors.some((e) => e.startsWith("EXTRA_KEYS")), "extra keys");

  const dupDir = makeTempDir("phase2-g2-a1-dup-");
  const dupText = exportFlatToJson(base) + "\n";
  fs.writeFileSync(path.join(dupDir, `${lang}-a1.json`), dupText.replace(/}\n$/, ',"dup":"y"}\n'), "utf8");
  const dupParsed = { ...base, dup: "y" };
  fs.writeFileSync(path.join(dupDir, `${lang}-a1.json`), exportFlatToJson(dupParsed), "utf8");
  const dup = prepareG2A1StagingImport({ lang, stagingDir: dupDir });
  assert(!dup.ok, "duplicate/extra should fail");

  const structuralDir = makeTempDir("phase2-g2-a1-struct-");
  const structuralFlat = { ...base, "a1.card.apfel.de": "verboten" };
  fs.writeFileSync(path.join(structuralDir, `${lang}-a1.json`), exportFlatToJson(structuralFlat), "utf8");
  const structural = prepareG2A1StagingImport({ lang, stagingDir: structuralDir });
  assert(!structural.ok, "structural key injection should fail");

  assert(isProductionPath(path.join(ROOT, "data", "et", "a1.js")), "data path forbidden");
  let productionBlocked = false;
  try {
    prepareG2A1StagingImport({ lang, stagingDir: path.join(ROOT, "data", "et") });
  } catch (err) {
    productionBlocked = err.code === "STAGING_PATH_FORBIDDEN";
  }
  assert(productionBlocked, "production staging path must fail");

  console.log("OK negative import cases: missing/extra/structural/production path");
}

function testProductionDiffZero() {
  const diff = execSync("git diff --name-only -- data www/data", { cwd: ROOT, encoding: "utf8" }).trim();
  assert(diff === "", `production diff not zero:\n${diff}`);
  console.log("OK production/DE diff = 0");
}

function main() {
  const exportSha = testDeterministicExportSha();
  testLvExportCountsAndKeys();
  testLocaleMapping();
  testG2A1RoundTripAllLangs();
  testStagingImportHappyPath();
  testNegativeImportCases();
  testProductionDiffZero();

  console.log("");
  console.log(
    JSON.stringify(
      {
        classification: "PHASE2_G2_A1_CROWDIN_INFRA_TESTS_PASS",
        exportSha256: exportSha,
        objects: G2_A1_EXPECTED_OBJECT_COUNT,
        keys: G2_A1_EXPECTED_KEY_COUNT,
        localeMapping: "31/31",
        crowdinApiWrites: 0,
      },
      null,
      2,
    ),
  );
}

main();
