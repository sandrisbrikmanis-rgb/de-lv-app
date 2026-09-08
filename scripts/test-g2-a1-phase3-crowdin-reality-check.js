#!/usr/bin/env node
"use strict";

const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const { CROWDIN_TARGET_LOCALE_IDS, crowdinLocaleToRepo } = require("./lib/content-crowdin-bridge");
const { STAGING_ROOT, EXPECTED_VALUE_COUNT, EXPECTED_LANG_COUNT } = require("./lib/g2-a1-phase3/constants");
const { stagingFilePath } = require("./lib/g2-a1-phase3/staging-objects");
const { loadOwnerPrepFindings } = require("./lib/g2-a1-phase3/owner-prep-usability");
const {
  SAMPLE_SEED,
  EXPECTED_FINDING_COUNT,
  buildCrowdinRealityCheck,
  buildFlaggedSamples,
  sha256File,
} = require("./audit-g2-a1-phase3-crowdin-reality-check");

const OWNER_DECISION_TOKENS = ["LABOT", "NELABOT", "NEW", "ACCEPT", "REJECT"];

const SOURCE_ARTIFACTS = [
  "reports/g2-a1-phase3-full-discovery.json",
  "reports/g2-a1-phase3-staging-export-proof.json",
  "reports/g2-a1-phase3-owner-proof.json",
  "reports/g2-a1-phase3-owner-decisions.csv",
  "reports/g2-a1-phase3-owner-view.md",
  "reports/g2-a1-phase3-owner-taxonomy-map.json",
];

let testsRun = 0;
let testsFailed = 0;

function assert(condition, message) {
  testsRun += 1;
  if (!condition) {
    testsFailed += 1;
    console.error(`FAIL: ${message}`);
  }
}

function checkpointSetSha() {
  const dir = path.join(ROOT, "reports", "temp", ["g2-a1-phase3", "luna-runs"].join("-"));
  if (!fs.existsSync(dir)) return null;
  const files = fs
    .readdirSync(dir)
    .map((name) => path.join(dir, name))
    .filter((p) => fs.statSync(p).isFile())
    .sort((a, b) => path.basename(a).localeCompare(path.basename(b)));
  const payload = files
    .map((filePath) => {
      const hash = crypto.createHash("sha256").update(fs.readFileSync(filePath)).digest("hex");
      return `${path.basename(filePath)}:${hash}`;
    })
    .join("\n");
  return crypto.createHash("sha256").update(payload).digest("hex");
}

function sourceArtifactShaMap() {
  const map = {};
  for (const rel of SOURCE_ARTIFACTS) {
    map[rel] = sha256File(path.join(ROOT, rel));
  }
  const stagingDir = STAGING_ROOT;
  const stagingFiles = fs
    .readdirSync(stagingDir)
    .filter((f) => f.endsWith(".json"))
    .sort()
    .map((f) => path.join(stagingDir, f));
  map["staging-set"] = crypto
    .createHash("sha256")
    .update(stagingFiles.map((p) => `${path.basename(p)}:${sha256File(p)}`).join("\n"))
    .digest("hex");
  const runsDir = path.join(ROOT, "reports/temp/g2-a1-phase3-luna-runs");
  if (fs.existsSync(runsDir)) {
    const runFiles = fs
      .readdirSync(runsDir)
      .filter((f) => f === "progress.json" || f.endsWith("-findings.json"))
      .sort()
      .map((f) => path.join(runsDir, f));
    map["luna-runs-set"] = crypto
      .createHash("sha256")
      .update(runFiles.map((p) => `${path.basename(p)}:${sha256File(p)}`).join("\n"))
      .digest("hex");
  }
  return map;
}

function testStagingFilesAndValues(result) {
  assert(fs.existsSync(STAGING_ROOT), "staging root exists");
  const stagingFiles = fs.readdirSync(STAGING_ROOT).filter((f) => f.endsWith(".json"));
  assert(stagingFiles.length === EXPECTED_LANG_COUNT, "31 staging files");
  assert(result.metrics.staging.totalValues === EXPECTED_VALUE_COUNT, "92,101 staging values");
  for (const file of stagingFiles) {
    const parsed = JSON.parse(fs.readFileSync(path.join(STAGING_ROOT, file), "utf8"));
    assert(parsed && typeof parsed === "object", `valid JSON ${file}`);
  }
}

function testDeterministicSeedAndHash() {
  const r1 = buildCrowdinRealityCheck({ root: ROOT, seed: SAMPLE_SEED });
  const r2 = buildCrowdinRealityCheck({ root: ROOT, seed: SAMPLE_SEED });
  assert(r1.seed === SAMPLE_SEED, "fixed sample seed");
  assert(r1.outputHash === r2.outputHash, "identical output hash on repeat");
  assert(
    JSON.stringify(r1.sampleRows.map((r) => r.sampleId).sort()) ===
      JSON.stringify(r2.sampleRows.map((r) => r.sampleId).sort()),
    "identical sample ids",
  );
}

function testAllLanguagesRepresented(result) {
  const langs = new Set(
    CROWDIN_TARGET_LOCALE_IDS.map((id) => crowdinLocaleToRepo(id)),
  );
  const flaggedLangs = new Set(result.sampleRows.filter((r) => r.sampleType === "FLAGGED").map((r) => r.language));
  const controlLangs = new Set(result.sampleRows.filter((r) => r.sampleType === "CONTROL").map((r) => r.language));
  for (const lang of langs) {
    assert(flaggedLangs.has(lang), `flagged sample includes ${lang}`);
    assert(controlLangs.has(lang), `control sample includes ${lang}`);
  }
}

function testFlaggedAndControlNoOverlap(result) {
  const flaggedKeys = new Set(
    result.sampleRows
      .filter((r) => r.sampleType === "FLAGGED" && r.flatKey)
      .map((r) => `${r.language}|${r.flatKey}`),
  );
  const controls = result.sampleRows.filter((r) => r.sampleType === "CONTROL");
  for (const row of controls) {
    assert(!flaggedKeys.has(`${row.language}|${row.flatKey}`), `control not in flagged set ${row.sampleId}`);
  }
}

function testSourceClustersCountedOnce(result) {
  const clusters = result.sampleRows.filter((r) => r.sampleType === "SOURCE_LV_CLUSTER");
  const ids = clusters.map((c) => c.sourceClusterId);
  assert(ids.length === new Set(ids).size, "unique source cluster ids");
  assert(clusters.length === 50, "50 SOURCE_LV clusters sampled");
  const langsPerCluster = clusters.map((c) => c.languageCount);
  assert(langsPerCluster.every((n) => n >= 1), "each cluster spans languages");
}

function testSampleRowsLinked(result) {
  const flagged = result.sampleRows.filter((r) => r.sampleType === "FLAGGED");
  assert(result.metrics.linkedSamplePercent === 100, "100% flagged linked to staging");
  for (const row of flagged) {
    assert(row.flatKey, `flagged row has flat key ${row.sampleId}`);
    assert(row.fieldPath, `flagged row has field path ${row.sampleId}`);
    assert(row.cardObjectId, `flagged row has card/object ${row.sampleId}`);
  }
  for (const row of result.sampleRows.filter((r) => r.sampleType === "CONTROL")) {
    assert(row.flatKey, `control row has flat key ${row.sampleId}`);
  }
}

function testNoEmptyCurrentUnlessMissing(result) {
  for (const row of result.sampleRows.filter((r) => r.sampleType === "FLAGGED")) {
    const current = row.crowdinTargetValue;
 const bucket = row.canonicalReviewBucket;
    if (bucket === "MISSING_OR_UNTRANSLATED") {
      continue;
    }
    if (current === "" || current === null || current === undefined) {
      assert(false, `empty CURRENT on non-missing row ${row.sampleId}`);
    }
    if (current === "INSUFFICIENT_EVIDENCE") {
      assert(false, `INSUFFICIENT_EVIDENCE target on linked row ${row.sampleId}`);
    }
  }
}

function testFlaggedHaveReason(result) {
  for (const row of result.sampleRows.filter((r) => r.sampleType === "FLAGGED")) {
    const reason = row.lunaReason;
    assert(
      reason && reason !== "" && reason !== "INSUFFICIENT_EVIDENCE",
      `flagged row has Luna reason ${row.sampleId}`,
    );
  }
}

function testNoOwnerDecisions(result) {
  assert(result.newRealLunaCalls === 0, "no new Luna calls");
  assert(result.automaticOwnerDecisions === 0, "no automatic owner decisions");
  const serialized = JSON.stringify(result);
  for (const token of OWNER_DECISION_TOKENS) {
    assert(!serialized.includes(`"ownerStatus":"${token}"`), `no owner token ${token}`);
  }
  const csvPath = path.join(ROOT, "reports/g2-a1-phase3-crowdin-reality-check-sample.csv");
  const csv = fs.readFileSync(csvPath, "utf8");
  for (const token of OWNER_DECISION_TOKENS) {
    assert(!csv.includes(token), `csv has no owner decision ${token}`);
  }
}

function testProductionAndDeDiffZero() {
  const { fetchOriginMain, resolveOriginMainSha, gitProductionDiffAgainstBaseline, gitDeDiffAgainstBaseline } =
    require("./lib/content-discovery/git-baseline");
  fetchOriginMain();
  const origin = resolveOriginMainSha();
  const prod = gitProductionDiffAgainstBaseline(origin.sha);
  const de = gitDeDiffAgainstBaseline(origin.sha);
  assert(prod.clean, "production diff 0");
  assert(de.clean, "DE diff 0");
}

function testSourceArtifactsUnchanged(before, checkpointBefore) {
  const after = sourceArtifactShaMap();
  const checkpointAfter = checkpointSetSha();
  assert(checkpointBefore === checkpointAfter, "checkpoint sha unchanged");
  for (const key of Object.keys(before)) {
    assert(before[key] === after[key], `source artifact unchanged ${key}`);
  }
}

function testSampleSizeBounds(result) {
  const flagged = result.sampleRows.filter((r) => r.sampleType === "FLAGGED").length;
  const controls = result.sampleRows.filter((r) => r.sampleType === "CONTROL").length;
  const clusters = result.sampleRows.filter((r) => r.sampleType === "SOURCE_LV_CLUSTER").length;
  assert(flagged <= 248, "flagged sample <= 248");
  assert(controls === 62, "62 unflagged controls");
  assert(clusters === 50, "50 source LV clusters");
  assert(result.sampleSize >= 360 && result.sampleSize <= 400, "total sample within 360-400");
}

function testFindingCount(result) {
  const findings = loadOwnerPrepFindings(ROOT);
  assert(findings.length === EXPECTED_FINDING_COUNT, "22,750 findings in source CSV");
  assert(result.pass || result.classification !== "BLOCKED_CROWDIN_A1_TRANSLATION_REALITY_CHECK", "not blocked");
}

function main() {
  const checkpointBefore = checkpointSetSha();
  const sourceBefore = sourceArtifactShaMap();

  const result = buildCrowdinRealityCheck({ root: ROOT, seed: SAMPLE_SEED });

  testFindingCount(result);
  testStagingFilesAndValues(result);
  testDeterministicSeedAndHash();
  testAllLanguagesRepresented(result);
  testFlaggedAndControlNoOverlap(result);
  testSourceClustersCountedOnce(result);
  testSampleRowsLinked(result);
  testNoEmptyCurrentUnlessMissing(result);
  testFlaggedHaveReason(result);
  testNoOwnerDecisions(result);
  testProductionAndDeDiffZero();
  testSampleSizeBounds(result);
  testSourceArtifactsUnchanged(sourceBefore, checkpointBefore);

  console.log(`\nTests run: ${testsRun}, failed: ${testsFailed}`);
  if (testsFailed > 0) process.exit(1);
  console.log("PASS: g2-a1-phase3-crowdin-reality-check");
}

if (require.main === module) {
  main();
}
