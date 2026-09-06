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

function testCrowdinYmlOffline() {
  const report = validateCrowdinYmlG2A1();
  assert(report.pass, report.errors.join("; "));
  assert(report.ui.source === "/crowdin/ui/lv.json", "UI source changed");
  assert(report.ui.translation === "/crowdin/ui/%two_letters_code%.json", "UI translation changed");
  assert(!report.ui.languages_mapping, "UI must not have languages_mapping");
  assert(report.repoFilenames.includes("gr-a1.json"), "missing gr-a1.json");
  assert(report.repoFilenames.includes("en-a1.json"), "missing en-a1.json");
  assert(report.repoFilenames.includes("es-a1.json"), "missing es-a1.json");
  assert(report.repoFilenames.includes("pt-a1.json"), "missing pt-a1.json");
  assert(report.repoFilenames.includes("nn-a1.json"), "missing nn-a1.json");
  assert(report.repoFilenames.includes("sv-a1.json"), "missing sv-a1.json");
  assert(report.repoFilenames.length === 31, `filename count ${report.repoFilenames.length}`);
  console.log("OK crowdin.yml offline validation: 31/31 repo filenames, UI unchanged");
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

function testGenuineDuplicateJsonKey() {
  const lang = "da";
  const stagingDir = makeTempDir("phase2-g2-a1-dupjson-");
  const dupKey = "a1.card.apfel.native";
  const raw = `{
  "${dupKey}": "first",
  "${dupKey}": "second"
}
`;
  fs.writeFileSync(path.join(stagingDir, `${lang}-a1.json`), raw, "utf8");
  const detected = detectDuplicateJsonKeys(raw);
  assert(detected.duplicates.includes(dupKey), "scanner must detect duplicate before parse");
  const result = prepareG2A1StagingImport({ lang, stagingDir });
  assert(!result.ok, "duplicate JSON key must fail");
  assert(result.errors.some((e) => e.startsWith("DUPLICATE_JSON_KEY")), result.errors?.join("; "));
  console.log("OK genuine duplicate JSON key → FAIL (DUPLICATE_JSON_KEY)");
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

  const lvFlat = exportG2LevelFlat("lv", "a1");
  const phKey = Object.keys(lvFlat)[10];
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

  console.log("OK negative cases: extra/empty/placeholder/symlink-path/structural");
}

function testSymlinkStagingBlocked() {
  const lang = "et";
  const tmp = makeTempDir("phase2-g2-a1-symlink-");
  const linkPath = path.join(tmp, "staging-link");
  const dataDir = path.join(ROOT, "data");
  fs.symlinkSync(dataDir, linkPath, "dir");

  let blocked = false;
  try {
    prepareG2A1StagingImport({ lang, stagingDir: linkPath });
  } catch (err) {
    blocked = err.code === "STAGING_PATH_FORBIDDEN";
  }
  assert(blocked, "symlink to data/** staging must fail");
  console.log("OK symlink to production data/** → FAIL");
}

function testProductionDiffZero() {
  const diff = execSync("git diff --name-only -- data www/data", { cwd: ROOT, encoding: "utf8" }).trim();
  assert(diff === "", `production diff not zero:\n${diff}`);
  console.log("OK production/DE diff = 0");
}

function main() {
  const exportSha = testDeterministicExportSha();
  testCrowdinYmlOffline();
  testLvExportCountsAndKeys();
  testLocaleMapping();
  testG2A1RoundTripAllLangs();
  testStagingImportHappyPath();
  testGenuineDuplicateJsonKey();
  testNegativeImportCases();
  testSymlinkStagingBlocked();
  testProductionDiffZero();

  console.log("");
  console.log(
    JSON.stringify(
      {
        classification: "PHASE2_G2_A1_CROWDIN_INFRA_REPAIR_TESTS_PASS",
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
