#!/usr/bin/env node
"use strict";

const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const { CROWDIN_TARGET_LOCALE_IDS, crowdinLocaleToRepo } = require("./lib/content-crowdin-bridge");
const {
  STAGING_ROOT,
  EXPECTED_LANG_COUNT,
  EXPECTED_KEY_COUNT,
  EXPECTED_VALUE_COUNT,
} = require("./lib/g2-a1-phase3/constants");
const {
  OWNER_AUTHORIZATION,
  OWNER_DECISION,
  EXPECTED_OWNER_SOURCE_HASH,
  copyNativeOntoProduction,
  runCrowdinStagingCopyOnlyApply,
  checkpointSetSha,
  sha256File,
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

function testDryRunPass() {
  const checkpointBefore = checkpointSetSha();
  const lvBefore = sha256File(path.join(ROOT, "data/a1.js"));
  const ownerBefore = JSON.parse(
    fs.readFileSync(path.join(ROOT, "reports/g2-a1-phase3-owner-proof.json"), "utf8"),
  ).sourceHash;

  const result = runCrowdinStagingCopyOnlyApply({ root: ROOT, dryRun: true });
  assert(result.pass, "dry-run pass");
  assert(result.classification === "G2_A1_CROWDIN_STAGING_TO_APP_COPY_ONLY_APPLY_PASS", "dry-run classification");
  assert(result.valuesMatched === EXPECTED_VALUE_COUNT, "dry-run values matched");
  assert(result.languagesApplied === EXPECTED_LANG_COUNT, "dry-run 31 langs");
  assert(result.dryRun === true, "dry-run flag");
  assert(result.newLunaCalls === 0, "no luna calls");
  assert(result.automaticOwnerDecisions === 0, "no owner decisions");
  assert(result.lvSourceChanged === false, "lv unchanged during dry-run");

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

function testPerLanguageKeyCount() {
  const result = runCrowdinStagingCopyOnlyApply({ root: ROOT, dryRun: true });
  for (const row of result.perLanguage) {
    assert(row.keysMatched === EXPECTED_KEY_COUNT, `${row.lang} keys matched`);
    assert(row.deIntegrity === "PASS", `${row.lang} de integrity`);
    assert(row.stagingRoundTrip === "PASS", `${row.lang} staging roundtrip`);
  }
}

function testAllTargetLanguagesPresent() {
  const result = runCrowdinStagingCopyOnlyApply({ root: ROOT, dryRun: true });
  const langs = new Set(result.perLanguage.map((row) => row.lang));
  for (const id of CROWDIN_TARGET_LOCALE_IDS) {
    assert(langs.has(crowdinLocaleToRepo(id)), `language present ${crowdinLocaleToRepo(id)}`);
  }
}

function testProductionDeDiffZeroBeforeApply() {
  const { fetchOriginMain, resolveOriginMainSha, gitDeDiffAgainstBaseline } = require("./lib/content-discovery/git-baseline");
  fetchOriginMain();
  const origin = resolveOriginMainSha();
  const de = gitDeDiffAgainstBaseline(origin.sha);
  assert(de.clean, "DE diff 0 before apply test");
}

function main() {
  testOwnerDecisionFile();
  testStagingComplete();
  testCopyNativePreservesDe();
  testProductionDeDiffZeroBeforeApply();
  testDryRunPass();
  testDeterministicDryRunHash();
  testPerLanguageKeyCount();
  testAllTargetLanguagesPresent();

  console.log(`\nTests run: ${testsRun}, failed: ${testsFailed}`);
  if (testsFailed > 0) process.exit(1);
  console.log("PASS: g2-a1-phase3-crowdin-staging-copy-only (preflight)");
}

if (require.main === module) {
  main();
}
