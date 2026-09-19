#!/usr/bin/env node
"use strict";
/**
 * Read-only verification: production CURRENT vs phase3 orchestrator data-flow.
 * Does NOT run Luna, Crowdin export, or modify production/staging.
 */
const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const ROOT = path.join(__dirname, "..");
const OUT_DIR = path.join(ROOT, "reports", "production-current-a1-orchestrator-readonly");

const { loadG2Level, exportG2LevelFlat, dataRel } = require("./lib/content-crowdin-bridge/roundtrip");
const { TARGET_LANGUAGES, CONTENT_LANGUAGES, MASTER_VERSION: BRIDGE_MASTER_VERSION } = require("./lib/content-crowdin-bridge/constants");
const { getBatchLimit, LUNA_BATCH_LIMITS } = require("./lib/luna-phase1-core");
const { getBatchSizeForCardType, loadG2StagingObjects } = require("./lib/g2-a1-phase3/staging-objects");
const { STAGING_ROOT, MASTER_STANDARD_VERSION, EXPECTED_LANG_COUNT } = require("./lib/g2-a1-phase3/constants");
const { loadProductionA1Words } = require("./lib/g2-a1-lrb-consolidation-owner-review-artifacts");
const { verifyEmbeddedLanguageRegistry } = require("./lib/official-language-sources-registry");

function sha256File(abs) {
  return crypto.createHash("sha256").update(fs.readFileSync(abs)).digest("hex");
}

function wwwRel(lang) {
  return lang === "lv" ? "www/data/a1.js" : `www/data/${lang}/a1.js`;
}

function buildInventory() {
  const langs = [...CONTENT_LANGUAGES].sort();
  const rows = [];
  let mirrorMismatch = 0;
  for (const lang of langs) {
    const dr = dataRel(lang, "a1.js");
    const wr = wwwRel(lang);
    const dAbs = path.join(ROOT, dr);
    const wAbs = path.join(ROOT, wr);
    const dataExists = fs.existsSync(dAbs);
    const wwwExists = fs.existsSync(wAbs);
    let dataSha256 = null;
    let wwwSha256 = null;
    let cards = 0;
    let flatKeys = 0;
    if (dataExists) {
      dataSha256 = sha256File(dAbs);
      cards = loadG2Level(lang, "a1").length;
      flatKeys = Object.keys(exportG2LevelFlat(lang, "a1")).length;
    }
    if (wwwExists) wwwSha256 = sha256File(wAbs);
    const mirrorMatch = dataExists && wwwExists && dataSha256 === wwwSha256;
    if (dataExists && wwwExists && !mirrorMatch) mirrorMismatch += 1;
    rows.push({
      lang,
      productionPath: dr,
      wwwMirrorPath: wr,
      loaderUsed: dr,
      dataExists,
      wwwExists,
      dataSha256,
      wwwSha256,
      mirrorMatch,
      cards,
      flatAuditKeys: flatKeys,
    });
  }

  const dataFiles = rows.filter((r) => r.dataExists).map((r) => r.productionPath);
  const wwwFiles = rows.filter((r) => r.wwwExists).map((r) => r.wwwMirrorPath);
  const sortedPaths = [...dataFiles, ...wwwFiles].sort();
  const composite = crypto.createHash("sha256");
  for (const rel of sortedPaths) {
    composite.update(`${rel}\0`);
    composite.update(fs.readFileSync(path.join(ROOT, rel)));
  }

  const wrongPathPatternCount = langs.filter((lang) => {
    const wrong = `data/${lang}/a1.js`;
    if (lang === "lv") return fs.existsSync(path.join(ROOT, wrong));
    return false;
  }).length;

  return {
    contentLanguageCount: langs.length,
    targetLanguageCount: TARGET_LANGUAGES.length,
    dataA1FileCount: dataFiles.length,
    wwwA1FileCount: wwwFiles.length,
    combinedFileCount: sortedPaths.length,
    mirrorMismatchCount: mirrorMismatch,
    productionFileSetSha256: composite.digest("hex"),
    reconciliation: {
      uniqueProductionLogicalFiles: dataFiles.length,
      explanation32vs62:
        "32 = unique production A1 datasets (1× data/a1.js for lv + 31× data/<lang>/a1.js). " +
        "62 = prior composite that iterated productionFileRel(lang) for all langs including lv as data/lv/a1.js " +
        "(missing) plus www mirrors only for langs where data/<lang>/a1.js exists (31), yielding 31+31=62 tracked entries. " +
        "Correct full mirror set = 32 data + 32 www = 64 files.",
      excludedFromPrior62: ["data/lv/a1.js (non-existent; lv uses data/a1.js)", "www/data/lv/a1.js if counted separately from data/a1.js path convention"],
      priorProductionFileRelBug: "productionFileRel(lang) always returns data/${lang}/a1.js (no lv root exception)",
      dataLvA1Exists: fs.existsSync(path.join(ROOT, "data/a1.js")),
      dataLvSubdirA1Exists: fs.existsSync(path.join(ROOT, "data/lv/a1.js")),
    },
    rows,
    mapping1to1: rows.map((r) => ({
      lang: r.lang,
      data: r.productionPath,
      www: r.wwwMirrorPath,
      ok: r.dataExists && r.wwwExists && r.mirrorMatch,
    })),
    missingData: rows.filter((r) => !r.dataExists).map((r) => r.lang),
    missingWww: rows.filter((r) => !r.wwwExists).map((r) => r.lang),
    dataWithoutMirror: rows.filter((r) => r.dataExists && !r.wwwExists).map((r) => r.productionPath),
    mirrorWithoutData: rows.filter((r) => r.wwwExists && !r.dataExists).map((r) => r.wwwMirrorPath),
    wrongPathPatternCount,
  };
}

function buildDataFlow() {
  return {
    rows: [
      {
        stage: "Production CURRENT (authoritative loader)",
        script: "scripts/lib/content-crowdin-bridge/roundtrip.js",
        function: "loadG2Level → loadArrayDataset(dataRel(lang, level.js))",
        fileSource: "data/a1.js (lv) | data/<lang>/a1.js",
        role: "Production flashcard arrays",
        authoritativeCurrent: "JĀ",
        chain: "run-* → loadG2Level(lang,'a1') → dataRel → audit-common.loadArrayDataset",
      },
      {
        stage: "Production flat audit keys",
        script: "scripts/lib/content-crowdin-bridge/roundtrip.js",
        function: "exportG2LevelFlat(lang,'a1')",
        fileSource: "same as loadG2Level",
        role: "Flattened field paths for multi-translation scan",
        authoritativeCurrent: "JĀ",
        chain: "exportG2LevelFlat → flattenG2Flashcards → loadG2Level",
      },
      {
        stage: "DE / structure side",
        script: "scripts/lib/content-crowdin-bridge/flatten-g2-flashcards.js",
        function: "flattenG2Flashcards",
        fileSource: "de fields inside production cards (read-only in audit)",
        role: "German source strings on cards",
        authoritativeCurrent: "JĀ (embedded in production CURRENT)",
        chain: "loadG2Level → card.de / study.*",
      },
      {
        stage: "Target translation side (production path)",
        script: "scripts/lib/content-crowdin-bridge/roundtrip.js",
        function: "loadG2Level",
        fileSource: "data/**/a1.js lang-specific fields",
        role: "Target-language values",
        authoritativeCurrent: "JĀ",
        chain: "loadG2Level(lang)",
      },
      {
        stage: "LRB helper (partial / lv bug)",
        script: "scripts/lib/g2-a1-lrb-consolidation-owner-review-artifacts.js",
        function: "loadProductionA1Words(lang)",
        fileSource: "data/${lang}/a1.js only (no lv exception)",
        role: "Production lookup for LRB consolidation",
        authoritativeCurrent: "NĒ for lv (returns null); JĀ for other langs",
        chain: "findProductionEntry → loadProductionA1Words",
      },
      {
        stage: "www mirror",
        script: "scripts/lib/audit-common.js",
        function: "dataPath(lang, fileName, {www:true})",
        fileSource: "www/data/**",
        role: "Mirror verification only",
        authoritativeCurrent: "NĒ",
        chain: "compliance scripts / post-apply verify",
      },
      {
        stage: "Phase3 Luna/deterministic CURRENT",
        script: "scripts/lib/g2-a1-phase3/staging-objects.js",
        function: "loadG2StagingObjects",
        fileSource: "reports/staging/g2-a1-phase3-crowdin/<lang>-a1.json + lv structure from loadG2Level('lv')",
        role: "Audit objects for phase3 discovery",
        authoritativeCurrent: "NĒ (staging overlay, auditSource=crowdin-staging)",
        chain: "run-g2-a1-phase3-full-discovery → loadG2StagingObjects → loadCrowdinFlat + applyG2FlashcardsFlat",
      },
      {
        stage: "Crowdin staging export",
        script: "scripts/lib/g2-a1-phase3/crowdin-export.js",
        function: "exportAllCrowdinStaging",
        fileSource: "Crowdin API → reports/staging/...",
        role: "Comparison / staging sync",
        authoritativeCurrent: "NĒ",
        chain: "run-g2-a1-phase3-full-discovery (always runs before discovery)",
      },
      {
        stage: "OWNER artifacts",
        script: "scripts/lib/g2-a1-phase3/owner-prep.js",
        function: "generateOwnerPrep",
        fileSource: "reports/g2-a1-phase3-owner-*",
        role: "Output only",
        authoritativeCurrent: "NĒ",
        chain: "findings → owner-prep",
      },
    ],
  };
}

function buildCallChain() {
  return {
    npmPhase3Discovery: "npm run phase3:g2-a1:discovery → node scripts/run-g2-a1-phase3-full-discovery.js --with-luna --fresh-luna",
    npmPhase3ExportOnly: "npm run phase3:g2-a1:export → --export-only (Crowdin staging export only; no production inventory)",
    orchestratorMain: [
      "run-g2-a1-phase3-full-discovery.js:main",
      "→ exportAllCrowdinStaging (Crowdin)",
      "→ collectAllDeterministic(STAGING_ROOT) uses loadCrowdinFlat",
      "→ runLunaForLang → loadG2StagingObjects (staging)",
      "→ generateOwnerPrep (findings-based)",
    ],
    productionCapableLoaders: [
      "loadG2Level / exportG2LevelFlat (roundtrip.js) — production data/**",
      "loadArrayDataset (audit-common.js)",
    ],
    notProductionCurrent: [
      "loadG2StagingObjects sets auditSource=crowdin-staging and productionFile=crowdin-staging/g2/<lang>-a1.json",
    ],
  };
}

function buildBatchVerification() {
  const expected = {
    "g2:ordinary": 25,
    "g2:minimalStudy": 10,
    "g2:standardStudy": 5,
    "g1:sentences": 25,
    "g1:verbs": 10,
    "g1:training": 50,
    "g3:courseLessons": 20,
  };
  const fromCore = { ...LUNA_BATCH_LIMITS };
  const phase3G2 = {
    ordinary: getBatchSizeForCardType("ordinary"),
    minimalStudy: getBatchSizeForCardType("minimalStudy"),
    standardStudy: getBatchSizeForCardType("standardStudy"),
  };
  const match = Object.keys(expected).every((k) => fromCore[k] === expected[k]);
  return {
    pass: match && phase3G2.ordinary === 25 && phase3G2.minimalStudy === 10 && phase3G2.standardStudy === 5,
    expected,
    lunaPhase1Core: fromCore,
    phase3GetBatchSizeForCardType: phase3G2,
    studyObjectSplitAcrossBatches:
      "Card-type groups split via splitObjectsByCardType; objects within a type chunked by splitObjectsIntoBatches — full card stays in one batch slice (no field-level split).",
    batchLimitChanges: 0,
  };
}

function buildArtifactReadiness() {
  return {
    phase3OwnerPrep: {
      supports: ["owner-view.md", "owner-decisions.md/csv", "owner-proof.json", "github links"],
      ownerStatusModel: "PENDING only in owner-prep.js",
      fullFinalCards: "Not in phase3 owner-prep (findings rows only)",
    },
    masterApvienotsVerdictModel: {
      required: ["AUDIT_PASS", "FINDING", "NEEDS_SOURCE_REVIEW", "SOURCE_DE_ISSUE"],
      equation: "TOTAL_CHECKED = AUDIT_PASS + FINDING + NEEDS_SOURCE_REVIEW + SOURCE_DE_ISSUE",
      phase3Orchestrator: "Uses VALIDATED_REAL_FINDING / OWNER_DECISION_REQUIRED — not APVIENOTS verdict taxonomy",
    },
    embeddedRegistry: verifyEmbeddedLanguageRegistry(ROOT),
    csvMultipart4Mb: "Not implemented in phase3 owner-prep (single CSV write)",
    postRunVerify: "No dedicated production-current A1 post-run verifier on main",
    coverage100ProductionCurrent: "Not implemented in phase3 (31 target langs × staging CURRENT)",
  };
}

function buildVerdict(ctx) {
  const blockers = [];
  if (ctx.orchestratorUsesStagingAsAuditCurrent) {
    blockers.push({
      code: "STAGING_NOT_PRODUCTION_CURRENT",
      detail: "loadG2StagingObjects uses Crowdin flat JSON overlay; auditSource=crowdin-staging",
    });
  }
  if (ctx.phase3LangScope !== 32) {
    blockers.push({
      code: "LANG_SCOPE_31_NOT_32",
      detail: `TARGET_LANGUAGES=${ctx.phase3LangScope} (excludes lv as audited target scope)`,
    });
  }
  if (!ctx.embeddedRegistryInOrchestrator) {
    blockers.push({
      code: "NO_EMBEDDED_REGISTRY_IN_ORCHESTRATOR",
      detail: "phase3 does not call verifyEmbeddedLanguageRegistry or APVIENOTS parser",
    });
  }
  if (ctx.masterVersionMismatch) {
    blockers.push({
      code: "MASTER_VERSION_CONSTANT_MISMATCH",
      detail: `g2-a1-phase3/constants MASTER_STANDARD_VERSION=${ctx.masterVersionConstant} vs PROJECT_LANGUAGE_MASTER 1.18`,
    });
  }
  if (!ctx.apvienotsVerdictModel) {
    blockers.push({
      code: "VERDICT_TAXONOMY_MISMATCH",
      detail: "Phase3 findings ≠ AUDIT_PASS/FINDING/NEEDS_SOURCE_REVIEW/SOURCE_DE_ISSUE pipeline",
    });
  }
  if (ctx.loadProductionA1WordsLvBroken) {
    blockers.push({
      code: "LOAD_PRODUCTION_A1_WORDS_LV_PATH",
      detail: "loadProductionA1Words('lv') uses data/lv/a1.js (missing); lv CURRENT is data/a1.js",
    });
  }
  if (ctx.exportOnlyIsCrowdinNotProduction) {
    blockers.push({
      code: "EXPORT_ONLY_NOT_PRODUCTION_INVENTORY",
      detail: "--export-only runs exportAllCrowdinStaging only",
    });
  }

  const pass = blockers.length === 0;
  return {
    verdict: pass ? "PRODUCTION_CURRENT_READY" : "NOT_PRODUCTION_CURRENT_READY",
    blockers,
    minimalFixPlan: pass
      ? []
      : [
          "Add run-g2-a1-production-current-full-discovery.js (or extend orchestrator) with CURRENT=loadG2Level/exportG2LevelFlat from data/** for all 32 CONTENT_LANGUAGES.",
          "Wire verifyEmbeddedLanguageRegistry + APVIENOTS §3 into pre-run gate.",
          "Implement MASTER 1.18 verdict taxonomy (AUDIT_PASS/FINDING/NEEDS_SOURCE_REVIEW/SOURCE_DE_ISSUE) and coverage equation.",
          "Fix loadProductionA1Words to use dataRel('lv','a1.js') for lv.",
          "Set MASTER_STANDARD_VERSION from PROJECT_LANGUAGE_MASTER (1.18) in phase3 constants.",
          "Keep Crowdin staging as optional comparison layer only (never auditSource=crowdin-staging for production CURRENT audit).",
          "Add post-run verifier for 100% row coverage + artifact manifest/SHA.",
        ],
  };
}

function main() {
  const mainSha = execSync("git rev-parse origin/main", { cwd: ROOT, encoding: "utf8" }).trim();
  const inventory = buildInventory();
  const dataFlow = buildDataFlow();
  const callChain = buildCallChain();
  const batch = buildBatchVerification();
  const artifacts = buildArtifactReadiness();
  const lvWords = loadProductionA1Words("lv");
  const ctx = {
    orchestratorUsesStagingAsAuditCurrent: true,
    phase3LangScope: TARGET_LANGUAGES.length,
    embeddedRegistryInOrchestrator: false,
    masterVersionMismatch: MASTER_STANDARD_VERSION !== "1.18",
    masterVersionConstant: MASTER_STANDARD_VERSION,
    bridgeMasterVersion: BRIDGE_MASTER_VERSION,
    apvienotsVerdictModel: false,
    loadProductionA1WordsLvBroken: lvWords == null,
    exportOnlyIsCrowdinNotProduction: true,
  };
  const verdict = buildVerdict(ctx);

  fs.mkdirSync(OUT_DIR, { recursive: true });
  const manifest = {
    classification: "PRODUCTION_CURRENT_A1_AUDIT_ORCHESTRATOR_READ_ONLY_VERIFICATION",
    generatedAt: new Date().toISOString(),
    originMainSha: mainSha,
    orchestratorVerdict: verdict.verdict,
    inventorySummary: {
      dataA1FileCount: inventory.dataA1FileCount,
      wwwA1FileCount: inventory.wwwA1FileCount,
      combinedFileCount: inventory.combinedFileCount,
      mirrorMismatchCount: inventory.mirrorMismatchCount,
      productionFileSetSha256: inventory.productionFileSetSha256,
    },
    batchPass: batch.pass,
    masterPremerge: "run separately via npm run verify:master-v112-premerge",
  };

  const files = {
    "production-current-a1-file-inventory.json": inventory,
    "data-www-a1-mirror-mapping.json": {
      mapping: inventory.mapping1to1,
      missingData: inventory.missingData,
      missingWww: inventory.missingWww,
      dataWithoutMirror: inventory.dataWithoutMirror,
      mirrorWithoutData: inventory.mirrorWithoutData,
    },
    "32-62-file-count-reconciliation.json": inventory.reconciliation,
    "production-current-a1-data-flow.json": dataFlow,
    "a1-audit-orchestrator-call-chain.json": callChain,
    "a1-audit-batch-limit-verification.json": batch,
    "a1-audit-artifact-readiness.json": artifacts,
    "production-current-a1-orchestrator-verdict.json": verdict,
    "sha-reproducibility-manifest.json": manifest,
  };

  for (const [name, payload] of Object.entries(files)) {
    const rel = path.join(OUT_DIR, name);
    fs.writeFileSync(rel, `${JSON.stringify(payload, null, 2)}\n`, "utf8");
    manifest.artifactSha256 = manifest.artifactSha256 || {};
    manifest.artifactSha256[name] = sha256File(rel);
  }
  fs.writeFileSync(
    path.join(OUT_DIR, "README.md"),
    `# Production CURRENT A1 orchestrator — read-only verification\n\n` +
      `- **Verdict:** \`${verdict.verdict}\`\n` +
      `- **origin/main:** \`${mainSha}\`\n` +
      `- **Blockers:** ${verdict.blockers.length}\n\n` +
      `See JSON artifacts in this directory.\n`,
    "utf8",
  );

  console.log(JSON.stringify({ manifest, verdict: verdict.verdict, blockers: verdict.blockers.length }, null, 2));
  process.exit(verdict.verdict === "PRODUCTION_CURRENT_READY" ? 0 : 2);
}

main();
