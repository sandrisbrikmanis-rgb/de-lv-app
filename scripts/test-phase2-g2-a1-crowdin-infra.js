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
  verifyRoundTrip,
  exportG2LevelFlat,
  exportG2LevelToCrowdinJson,
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
  detectDuplicateJsonKeys,
  validateCrowdinYmlG2A1,
  loadCrowdinYmlConfig,
} = require("./lib/content-crowdin-bridge");
const { extractTopLevelJsonKeys } = require("./lib/content-crowdin-bridge/json-duplicate-keys");
const {
  assertLvSourceExportIdentity,
  isProductionPath,
} = require("./lib/content-crowdin-bridge/import-staging");

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

function testCrowdinYmlOffline() {
  const config = loadCrowdinYmlConfig();
  assert(Array.isArray(config.files), "yaml parse must yield files array");
  const report = validateCrowdinYmlG2A1();
  assert(report.pass, report.errors.join("; "));
  assert(report.ui.source === "/crowdin/ui/lv.json", "UI source changed");
  assert(report.ui.translation === "/crowdin/ui/%two_letters_code%.json", "UI translation changed");
  assert(!report.ui.languages_mapping, "UI must not have languages_mapping");
  assert(Object.keys(report.localeMap).length === 31, "yaml locale map must have 31 entries");
  assert(report.repoFilenames.includes("gr-a1.json"), "missing gr-a1.json");
  assert(report.repoFilenames.includes("en-a1.json"), "missing en-a1.json");
  assert(report.repoFilenames.includes("es-a1.json"), "missing es-a1.json");
  assert(report.repoFilenames.includes("pt-a1.json"), "missing pt-a1.json");
  assert(report.repoFilenames.includes("nn-a1.json"), "missing nn-a1.json");
  assert(report.repoFilenames.includes("sv-a1.json"), "missing sv-a1.json");
  assert(report.repoFilenames.length === 31, `filename count ${report.repoFilenames.length}`);
  console.log("OK crowdin.yml YAML validation: 31/31 locale entries, UI unchanged");
}

function testLvSourceExportIdentity() {
  const sha = assertLvSourceExportIdentity();
  assert(sha === sha256File(LV_EXPORT_PATH), "identity gate sha must match committed export");
  console.log(`OK LV source export identity gate: ${sha}`);
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
  const out = {};
  for (const [key, lvValue] of Object.entries(source)) {
    if (/\{[^}]+\}/.test(lvValue) || /</.test(lvValue)) {
      out[key] = `${lang} ${lvValue}`;
    } else {
      out[key] = `${lang}-proposed-${lvValue.length}`;
    }
  }
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
  assert(prepared.payload.meta.lvSourceSha256, "missing lvSourceSha256");
  assert(prepared.payload.meta.translationInputSha256, "missing translationInputSha256");
  const outPath = writeG2A1StagingImport(prepared);
  const payload = JSON.parse(fs.readFileSync(outPath, "utf8"));
  assert(payload.meta.classification === "PROPOSED", "meta.classification");
  const multiEntry = Object.values(payload.entries).find((e) => e.status === "OWNER_DECISION_REQUIRED");
  assert(multiEntry, "missing OWNER_DECISION_REQUIRED entry");
  assert(!Object.values(payload.entries).some((e) => e.status === "NEW"), "no OWNER NEW allowed");
  console.log("OK valid staging import → PASS with SHA bindings");
}

function testDuplicateKeyDetector() {
  const stringDup = `{
  "same.key": "first",
  "same.key": "second"
}`;
  const numStringDup = `{
  "same.key": 1,
  "same.key": "translation"
}`;
  const escapedDup = `{
  "a": "x",
  "\\u0061": "y"
}`;
  const nested = `{
  "nested": { "inner": 1 },
  "ok": "value"
}`;
  const arrayVal = `{
  "arr": [1, 2],
  "ok": "value"
}`;

  assert(detectDuplicateJsonKeys(stringDup).duplicates.includes("same.key"), "string/string");
  assert(detectDuplicateJsonKeys(numStringDup).duplicates.includes("same.key"), "number/string");
  assert(detectDuplicateJsonKeys(escapedDup).duplicates.includes("a"), "escaped equivalent");
  assert(detectDuplicateJsonKeys(nested).duplicates.length === 0, "nested object allowed");
  assert(detectDuplicateJsonKeys(arrayVal).duplicates.length === 0, "array value allowed");

  let malformedCaught = false;
  try {
    extractTopLevelJsonKeys("{ invalid");
  } catch (err) {
    malformedCaught = err.code === "MALFORMED_JSON";
  }
  assert(malformedCaught, "malformed JSON");

  let nonStringCaught = false;
  try {
    parseCrowdinJson('{"k": 1}');
  } catch (err) {
    nonStringCaught = /must be string/.test(err.message);
  }
  assert(nonStringCaught, "non-string value rejected");

  console.log("OK duplicate-key detector: string/number/escaped/nested/array/malformed");
}

function testGenuineDuplicateJsonKeyImport() {
  const lang = "da";
  const stagingDir = makeTempDir("phase2-g2-a1-dupjson-");
  const raw = `{
  "a1.card.apfel.native": 1,
  "a1.card.apfel.native": "translation"
}`;
  fs.writeFileSync(path.join(stagingDir, `${lang}-a1.json`), raw, "utf8");
  const result = prepareG2A1StagingImport({ lang, stagingDir });
  assert(!result.ok, "duplicate JSON key must fail");
  assert(result.errors.some((e) => e.startsWith("DUPLICATE_JSON_KEY")), result.errors?.join("; "));
  console.log("OK genuine duplicate JSON key import → FAIL");
}

function testNegativeImportCases() {
  const lang = "da";
  const base = buildValidTranslationFixture(lang);

  const extraDir = makeTempDir("phase2-g2-a1-extra-");
  const extraFlat = { ...base, "a1.card.__injected__.native": "x" };
  fs.writeFileSync(path.join(extraDir, `${lang}-a1.json`), exportFlatToJson(extraFlat), "utf8");
  const extra = prepareG2A1StagingImport({ lang, stagingDir: extraDir });
  assert(!extra.ok && extra.errors.some((e) => e.startsWith("EXTRA_KEYS")), "extra keys");

  const emptyDir = makeTempDir("phase2-g2-a1-empty-");
  const emptyFlat = { ...base };
  emptyFlat[Object.keys(emptyFlat)[5]] = "   ";
  fs.writeFileSync(path.join(emptyDir, `${lang}-a1.json`), exportFlatToJson(emptyFlat), "utf8");
  const empty = prepareG2A1StagingImport({ lang, stagingDir: emptyDir });
  assert(!empty.ok && empty.errors.some((e) => e.startsWith("UNTRANSLATED")), "empty value");

  const phKey = Object.keys(base)[10];
  const phDir = makeTempDir("phase2-g2-a1-ph-");
  const phFlat = { ...base };
  phFlat[phKey] = `{INJECTED} ${phFlat[phKey]}`;
  fs.writeFileSync(path.join(phDir, `${lang}-a1.json`), exportFlatToJson(phFlat), "utf8");
  const ph = prepareG2A1StagingImport({ lang, stagingDir: phDir });
  assert(!ph.ok && ph.errors.some((e) => e.includes("placeholder multiset mismatch vs LV source")), ph.errors?.join("; "));

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

  console.log("OK negative import cases: extra/empty/placeholder/structural/production path");
}

function symlinkOrSkip(target, linkPath, type = "dir") {
  try {
    fs.symlinkSync(target, linkPath, type);
    return true;
  } catch (err) {
    if (err.code === "EPERM" || err.code === "EACCES") return false;
    throw err;
  }
}

function testSymlinkStagingBlocked() {
  const lang = "et";
  let ran = 0;

  const dataRoot = makeTempDir("phase2-g2-a1-symlink-data-");
  const dataLink = path.join(dataRoot, "staging-link");
  if (symlinkOrSkip(path.join(ROOT, "data"), dataLink)) {
    let blocked = false;
    try {
      prepareG2A1StagingImport({ lang, stagingDir: dataLink });
    } catch (err) {
      blocked = err.code === "STAGING_PATH_FORBIDDEN";
    }
    assert(blocked, "staging root symlink → data/** must fail");
    ran++;
  }

  const wwwDir = makeTempDir("phase2-g2-a1-symlink-www-");
  fs.mkdirSync(wwwDir, { recursive: true });
  const sub = path.join(wwwDir, "g2");
  fs.mkdirSync(sub, { recursive: true });
  const wwwLink = path.join(sub, "a1");
  if (symlinkOrSkip(path.join(ROOT, "www", "data"), wwwLink)) {
    const fixture = buildValidTranslationFixture(lang);
    fs.writeFileSync(path.join(wwwDir, `${lang}-a1.json`), exportFlatToJson(fixture), "utf8");
    let blocked = false;
    try {
      prepareG2A1StagingImport({ lang, stagingDir: wwwDir });
    } catch (err) {
      blocked = err.code === "STAGING_PATH_FORBIDDEN";
    }
    assert(blocked, "staging subdir symlink → www/data/** must fail");
    ran++;
  }

  const langRoot = makeTempDir("phase2-g2-a1-symlink-lang-");
  const fixture = buildValidTranslationFixture(lang);
  fs.writeFileSync(path.join(langRoot, `${lang}-a1.json`), exportFlatToJson(fixture), "utf8");
  const prepared = prepareG2A1StagingImport({ lang, stagingDir: langRoot });
  assert(prepared.ok, prepared.errors?.join("; "));
  const langParent = path.dirname(prepared.outDir);
  if (fs.existsSync(langParent)) {
    fs.rmSync(langParent, { recursive: true, force: true });
  }
  fs.mkdirSync(path.dirname(langParent), { recursive: true });
  if (symlinkOrSkip(path.join(ROOT, "languages", lang), langParent, "dir")) {
    let blocked = false;
    try {
      writeG2A1StagingImport(prepared);
    } catch (err) {
      blocked = err.code === "STAGING_PATH_FORBIDDEN";
    }
    assert(blocked, "output parent symlink → languages/** must fail");
    ran++;
  }

  const wwwLangRoot = makeTempDir("phase2-g2-a1-symlink-wwwlang-");
  const fixture2 = buildValidTranslationFixture("da");
  fs.writeFileSync(path.join(wwwLangRoot, "da-a1.json"), exportFlatToJson(fixture2), "utf8");
  const prepared2 = prepareG2A1StagingImport({ lang: "da", stagingDir: wwwLangRoot });
  assert(prepared2.ok, prepared2.errors?.join("; "));
  const outParent = path.dirname(prepared2.outDir);
  if (fs.existsSync(outParent)) fs.rmSync(outParent, { recursive: true, force: true });
  fs.mkdirSync(path.dirname(outParent), { recursive: true });
  if (symlinkOrSkip(path.join(ROOT, "www", "languages", "da"), outParent, "dir")) {
    let blocked = false;
    try {
      writeG2A1StagingImport(prepared2);
    } catch (err) {
      blocked = err.code === "STAGING_PATH_FORBIDDEN";
    }
    assert(blocked, "output parent symlink → www/languages/** must fail");
    ran++;
  }

  const lateRoot = makeTempDir("phase2-g2-a1-symlink-late-");
  const fixture3 = buildValidTranslationFixture("cs");
  fs.writeFileSync(path.join(lateRoot, "cs-a1.json"), exportFlatToJson(fixture3), "utf8");
  const prepared3 = prepareG2A1StagingImport({ lang: "cs", stagingDir: lateRoot });
  assert(prepared3.ok, prepared3.errors?.join("; "));
  fs.mkdirSync(path.dirname(prepared3.outDir), { recursive: true });
  if (symlinkOrSkip(path.join(ROOT, "languages", "cs"), prepared3.outDir, "dir")) {
    let blocked = false;
    try {
      writeG2A1StagingImport(prepared3);
    } catch (err) {
      blocked = err.code === "STAGING_PATH_FORBIDDEN";
    }
    assert(blocked, "symlink after prepare before write must fail");
    ran++;
  }

  assert(ran >= 3, `expected at least 3 symlink tests, ran ${ran}`);
  console.log(`OK symlink negative tests (${ran} cases)`);
}

function testProductionDiffZero() {
  const diff = execSync("git diff --name-only -- data www/data", { cwd: ROOT, encoding: "utf8" }).trim();
  assert(diff === "", `production diff not zero:\n${diff}`);
  console.log("OK production/DE diff = 0");
}

function main() {
  const exportSha = testDeterministicExportSha();
  testCrowdinYmlOffline();
  testLvSourceExportIdentity();
  testLvExportCountsAndKeys();
  testLocaleMapping();
  testG2A1RoundTripAllLangs();
  testDuplicateKeyDetector();
  testStagingImportHappyPath();
  testGenuineDuplicateJsonKeyImport();
  testNegativeImportCases();
  testSymlinkStagingBlocked();
  testProductionDiffZero();

  console.log("");
  console.log(
    JSON.stringify(
      {
        classification: "PHASE2_G2_A1_CROWDIN_INFRA_FINAL_OWNER_REVIEW_READY",
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
