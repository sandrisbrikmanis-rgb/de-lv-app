#!/usr/bin/env node
"use strict";

require("dotenv").config({ path: require("path").join(__dirname, "..", ".env") });

const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const { TARGET_LANGUAGES } = require("./lib/content-crowdin-bridge/constants");
const { crowdinLocaleToRepo, CROWDIN_TARGET_LOCALE_IDS } = require("./lib/content-crowdin-bridge/locale-map");
const { createLunaTransport } = require("./lib/luna-transport");
const { runBatchedAdapter } = require("./lib/luna-adapter-runner");
const { buildLunaRequestPayload, getLegacyObjectId } = require("./lib/phase1-luna-checkpoint/object-identity");
const { normalizeLunaItemsToFindings } = require("./lib/phase1-luna-checkpoint/findings");
const { splitObjectsIntoBatches } = require("./lib/phase1-luna-checkpoint/batch-split");
const { validateFindings } = require("./lib/content-discovery/phase1-findings-validation");
const { deduplicateFindings } = require("./lib/content-discovery/phase1-findings-dedup");
const { runPreBacklogHistoryGate } = require("./lib/content-discovery/phase1-owner-prep");
const { validateHistoryGates } = require("./lib/discovery-stability");
const { isApiKeyConfigured, DEFAULT_MODEL } = require("./lib/luna-phase1-openai");
const { writeReportAtomic } = require("./lib/content-discovery/report-builder");
const { gitProductionDiffAgainstBaseline } = require("./lib/content-discovery/git-baseline");

const {
  SCOPE_LABEL,
  MASTER_STANDARD_VERSION,
  STAGING_ROOT,
  LUNA_RUNS_ROOT,
  EXPECTED_OBJECT_COUNT,
  EXPECTED_KEY_COUNT,
  EXPECTED_LANG_COUNT,
  EXPECTED_VALUE_COUNT,
} = require("./lib/g2-a1-phase3/constants");
const { exportAllCrowdinStaging, verifyStagingExport } = require("./lib/g2-a1-phase3/crowdin-export");
const {
  loadG2StagingObjects,
  splitObjectsByCardType,
  getBatchSizeForCardType,
} = require("./lib/g2-a1-phase3/staging-objects");
const { collectAllDeterministic } = require("./lib/g2-a1-phase3/deterministic");
const { generateOwnerPrep } = require("./lib/g2-a1-phase3/owner-prep");

const OUT_MD = path.join(ROOT, "reports", "g2-a1-phase3-full-discovery.md");
const OUT_JSON = path.join(ROOT, "reports", "g2-a1-phase3-full-discovery.json");

function git(cmd) {
  try {
    return execSync(cmd, { cwd: ROOT, encoding: "utf8" }).trim();
  } catch {
    return "";
  }
}

function parseArgs(argv) {
  const args = {
    exportOnly: false,
    skipLuna: true,
    withLuna: false,
    freshLuna: false,
    langs: null,
    forceExport: false,
    help: false,
  };
  for (let i = 2; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === "--help" || arg === "-h") args.help = true;
    else if (arg === "--export-only") args.exportOnly = true;
    else if (arg === "--skip-luna") {
      args.skipLuna = true;
      args.withLuna = false;
    } else if (arg === "--with-luna") {
      args.withLuna = true;
      args.skipLuna = false;
    } else if (arg === "--fresh-luna") args.freshLuna = true;
    else if (arg === "--force-export") args.forceExport = true;
    else if (arg === "--lang") args.langs = [argv[++i]];
    else throw new Error(`Unknown argument: ${arg}`);
  }
  if (!args.langs) args.langs = TARGET_LANGUAGES;
  return args;
}

function printHelp() {
  console.log(`Usage: node scripts/run-g2-a1-phase3-full-discovery.js [options]

Options:
  --export-only     Export Crowdin G2/A1 staging and verify counts only
  --skip-luna       Deterministic discovery only (default)
  --with-luna       Full discovery with GPT-5.6 Luna
  --fresh-luna      Clear per-lang Luna progress before run
  --force-export    Re-download all Crowdin staging files
  --lang <code>     Limit to one repo language
  --help            Show help
`);
}

function productionDiffClean() {
  const diff = git("git diff --name-only -- data www/data crowdin/content crowdin/ui");
  return diff === "" ? { clean: true, changed: [] } : { clean: false, changed: diff.split("\n").filter(Boolean) };
}

function authorizePhase3Luna() {
  const blockers = [];
  if (!isApiKeyConfigured()) {
    blockers.push({ code: "OPENAI_API_KEY_MISSING", message: "OPENAI_API_KEY is not configured" });
  }
  const prodDiff = productionDiffClean();
  if (!prodDiff.clean) {
    blockers.push({
      code: "PRODUCTION_DIFF_NONZERO",
      message: `Forbidden paths changed: ${prodDiff.changed.join(", ")}`,
    });
  }
  return { pass: blockers.length === 0, blockers, blocker: blockers[0]?.code || null };
}

function loadProgress(progressPath) {
  if (!fs.existsSync(progressPath)) return { completedLangs: [] };
  return JSON.parse(fs.readFileSync(progressPath, "utf8"));
}

function saveProgress(progressPath, data) {
  fs.mkdirSync(path.dirname(progressPath), { recursive: true });
  fs.writeFileSync(progressPath, `${JSON.stringify(data, null, 2)}\n`, "utf8");
}

async function runLunaForLang(lang, options = {}) {
  const scopeId = `g2/a1/${lang}`;
  const objects = loadG2StagingObjects(lang, "a1", options.stagingRoot);
  if (objects.length !== EXPECTED_OBJECT_COUNT) {
    throw new Error(`OBJECT_COUNT_MISMATCH:${lang}:${objects.length}`);
  }

  const transport = options.transport || createLunaTransport({ mode: "real" });
  const groups = splitObjectsByCardType(objects);
  const allFindings = [];
  let lunaCalls = 0;
  let tokensUsed = 0;
  let batches = 0;
  let retries = 0;

  for (const [cardType, groupObjects] of Object.entries(groups)) {
    if (!groupObjects.length) continue;
    const batchSize = getBatchSizeForCardType(cardType);
    const subBatches = splitObjectsIntoBatches(groupObjects, batchSize);
    for (let batchIndex = 0; batchIndex < subBatches.length; batchIndex++) {
      const batch = subBatches[batchIndex];
      const result = await runBatchedAdapter({
        transport,
        objects: batch,
        getId: getLegacyObjectId,
        serialize: (obj) => buildLunaRequestPayload(scopeId, obj),
        batchSize,
        scopeId: `${scopeId}:${cardType}:${batchIndex}`,
        adapterName: "g2-phase3-staging",
        missingCanonicalIdRetry: true,
        cardType,
      });
      lunaCalls += result.stats?.realCalls || 0;
      tokensUsed += result.stats?.tokensUsed || 0;
      batches += result.stats?.batches || 0;
      retries += result.stats?.retries || 0;
      if (!result.ok) {
        return {
          ok: false,
          lang,
          reason: result.reason,
          missingIds: result.missingIds || [],
          lunaCalls,
          tokensUsed,
          batches,
          retries,
          findings: allFindings,
        };
      }
      const scope = { scopeId, group: "g2", dataset: "a1", lang };
      const batchFindings = normalizeLunaItemsToFindings(result.results, scope, {
        productionFile: `crowdin-staging/g2/${lang}-a1.json`,
      });
      allFindings.push(...batchFindings);
    }
  }

  return {
    ok: true,
    lang,
    lunaCalls,
    tokensUsed,
    batches,
    retries,
    objectsExpected: objects.length,
    objectsReturned: objects.length,
    findings: allFindings,
  };
}

function assignAuditIds(findings, startSeq = 1) {
  let seq = startSeq;
  return findings.map((f) => {
    if (f.auditId) return f;
    const lang = f.lang || "xx";
    return {
      ...f,
      auditId: `G2A1P3-${String(lang).toUpperCase()}-${String(seq++).padStart(5, "0")}`,
    };
  });
}

function buildReportMarkdown(summary) {
  const lines = [
    "# G2/A1 Phase 3 — FULL READ-ONLY discovery",
    "",
    `**Classification:** \`${summary.classification}\``,
    `**Generated:** ${summary.generatedAt}`,
    `**MASTER_STANDARD_VERSION:** ${summary.masterStandardVersion}`,
    `**MAIN_BASE_SHA:** \`${summary.mainBaseSha}\``,
    `**WORK_BRANCH:** \`${summary.workBranch}\``,
    `**SCOPE:** ${summary.scope}`,
    "",
    "## Coverage",
    "",
    `| Metric | Value |`,
    `|--------|-------|`,
    `| Languages | ${summary.coverage.langsProcessed}/${summary.coverage.langsExpected} |`,
    `| Cards per language | ${summary.coverage.cardsPerLang} |`,
    `| Keys per language | ${summary.coverage.keysPerLang} |`,
    `| Staging values | ${summary.coverage.stagingValues}/${summary.coverage.stagingValuesExpected} |`,
    `| Luna calls | ${summary.luna.lunaCalls} |`,
    `| Luna scopes processed | ${summary.luna.scopesProcessed}/${summary.luna.scopesExpected} |`,
    "",
    "## Findings",
    "",
    `| Bucket | Count |`,
    `|--------|-------|`,
    `| Raw | ${summary.findings.raw} |`,
    `| Validated | ${summary.findings.validated} |`,
    `| Excluded | ${summary.findings.excluded} |`,
    "",
    "## Gates",
    "",
    `| Gate | Status |`,
    `|------|--------|`,
    `| PRE_BACKLOG_HISTORY_GATE | ${summary.gates.PRE_BACKLOG_HISTORY_GATE} |`,
    `| PRE_BACKLOG_SEMANTIC_GATE | ${summary.gates.PRE_BACKLOG_SEMANTIC_GATE} |`,
    `| Production/DE/UI diff | ${summary.productionDiff.clean ? "0" : "NONZERO"} |`,
    "",
    "## OWNER-PREP",
    "",
  ];
  if (summary.ownerPrep?.files) {
    for (const [k, v] of Object.entries(summary.ownerPrep.files)) {
      lines.push(`- ${k}: \`${v}\``);
    }
  } else {
    lines.push("- (not generated — zero validated findings or gate blocked)");
  }
  lines.push("");
  lines.push("## Prior candidates (not auto-errors)");
  lines.push("");
  lines.push(`- Prior risk heuristics: ${summary.candidates.priorRiskCount}`);
  lines.push(`- LV-identical candidates (this run): ${summary.candidates.lvIdenticalCandidates}`);
  lines.push("");
  return `${lines.join("\n")}\n`;
}

async function main() {
  const args = parseArgs(process.argv);
  if (args.help) {
    printHelp();
    process.exit(0);
  }

  execSync("git fetch origin main", { cwd: ROOT, stdio: "pipe" });
  const mainBaseSha = git("git rev-parse origin/main");
  const workBranch = git("git rev-parse --abbrev-ref HEAD");
  const prodDiff = productionDiffClean();

  const identity = {
    masterStandardVersion: MASTER_STANDARD_VERSION,
    mainBaseSha,
    workBranch,
    scope: SCOPE_LABEL,
    generatedAt: new Date().toISOString(),
  };

  console.log(JSON.stringify({ phase: "identity", ...identity, productionDiffClean: prodDiff.clean }, null, 2));

  const exportResult = await exportAllCrowdinStaging({ force: args.forceExport, stagingRoot: STAGING_ROOT });
  console.log(
    JSON.stringify(
      {
        phase: "staging-export",
        pass: exportResult.verification.pass,
        langPassCount: exportResult.verification.langPassCount,
        totalValues: exportResult.verification.totalValues,
        manifestPath: path.relative(ROOT, exportResult.manifestPath),
      },
      null,
      2,
    ),
  );

  if (args.exportOnly) {
    process.exit(exportResult.verification.pass ? 0 : 1);
  }

  if (!exportResult.verification.pass) {
    console.error("BLOCKED: staging export verification failed");
    process.exit(1);
  }

  if (prodDiff.clean === false) {
    console.error("BLOCKED: production/DE/UI diff is not zero");
    process.exit(1);
  }

  const progressPath = path.join(LUNA_RUNS_ROOT, "progress.json");
  if (args.freshLuna && fs.existsSync(progressPath)) {
    fs.rmSync(progressPath, { force: true });
  }
  const progress = loadProgress(progressPath);
  const previousLunaStats = progress.lunaStats || {};
  const previousFailureHistory = Array.isArray(previousLunaStats.failureHistory)
    ? previousLunaStats.failureHistory
    : Array.isArray(previousLunaStats.failures)
      ? previousLunaStats.failures
      : [];

  const deterministic = collectAllDeterministic(STAGING_ROOT, args.langs);
  let allFindings = [...deterministic.findings];
  const lunaStats = {
    lunaCalls: previousLunaStats.lunaCalls || 0,
    tokensUsed: previousLunaStats.tokensUsed || 0,
    batches: previousLunaStats.batches || 0,
    retries: previousLunaStats.retries || 0,
    scopesExpected: args.langs.length,
    scopesProcessed: 0,
    failures: [],
    failureHistory: [...previousFailureHistory],
  };

  if (args.withLuna) {
    const auth = authorizePhase3Luna();
    if (!auth.pass) {
      console.error(`BLOCKED: ${auth.blocker}`);
      process.exit(1);
    }
    const transport = createLunaTransport({ mode: "real" });
    fs.mkdirSync(LUNA_RUNS_ROOT, { recursive: true });

    for (const lang of args.langs) {
      if (progress.completedLangs?.includes(lang)) {
        const cachedPath = path.join(LUNA_RUNS_ROOT, `${lang}-findings.json`);
        if (fs.existsSync(cachedPath)) {
          allFindings.push(...JSON.parse(fs.readFileSync(cachedPath, "utf8")));
          lunaStats.scopesProcessed += 1;
          continue;
        }
      }
      console.error(`[g2-a1-phase3] Luna scope g2/a1/${lang} ...`);
      const result = await runLunaForLang(lang, { transport, stagingRoot: STAGING_ROOT });
      if (!result.ok) {
        lunaStats.lunaCalls += result.lunaCalls || 0;
        lunaStats.tokensUsed += result.tokensUsed || 0;
        lunaStats.batches += result.batches || 0;
        lunaStats.retries += result.retries || 0;
        const failureRecord = {
          lang,
          reason: result.reason,
          missingIds: result.missingIds || [],
          lunaCalls: result.lunaCalls || 0,
          tokensUsed: result.tokensUsed || 0,
          retries: result.retries || 0,
          recordedAt: new Date().toISOString(),
          runScope: "current",
        };
        lunaStats.failures.push(failureRecord);
        lunaStats.failureHistory.push({ ...failureRecord, runScope: "historical" });
        progress.lunaStats = lunaStats;
        saveProgress(progressPath, progress);
        break;
      }
      fs.writeFileSync(
        path.join(LUNA_RUNS_ROOT, `${lang}-findings.json`),
        `${JSON.stringify(result.findings, null, 2)}\n`,
      );
      allFindings.push(...result.findings);
      lunaStats.lunaCalls += result.lunaCalls;
      lunaStats.tokensUsed += result.tokensUsed;
      lunaStats.batches += result.batches;
      lunaStats.retries += result.retries;
      lunaStats.scopesProcessed += 1;
      progress.completedLangs = [...(progress.completedLangs || []), lang];
      progress.lunaStats = lunaStats;
      saveProgress(progressPath, progress);
    }
  }

  allFindings = assignAuditIds(allFindings);
  const validation = validateFindings(allFindings);
  const dedup = deduplicateFindings(validation.findings);
  const validatedFindings = dedup.findings.filter((f) =>
    ["VALIDATED_REAL_FINDING", "OWNER_DECISION_REQUIRED"].includes(f.classificationStatus),
  );

  const historyGate = validateHistoryGates({
    rawHistoryLoaded: true,
    ownerHistoryLoaded: true,
    preBacklogReady: true,
  });
  const preBacklogGate = runPreBacklogHistoryGate(validatedFindings, {});

  let ownerPrep = null;
  if (
    validatedFindings.length > 0 &&
    historyGate.PRE_BACKLOG_HISTORY_GATE === "PASS" &&
    preBacklogGate.status === "PASS"
  ) {
    ownerPrep = generateOwnerPrep(validatedFindings, {
      ...identity,
      branch: workBranch,
      reportsDir: path.join(ROOT, "reports"),
    });
  }

  const coveragePass =
    exportResult.verification.pass &&
    lunaStats.failures.length === 0 &&
    (!args.withLuna || lunaStats.scopesProcessed === lunaStats.scopesExpected);

  let classification;
  if (!coveragePass || preBacklogGate.status === "FAIL" || historyGate.PRE_BACKLOG_HISTORY_GATE !== "PASS") {
    classification = "G2_A1_PHASE3_FULL_DISCOVERY_BLOCKED";
  } else if (validatedFindings.length > 0) {
    classification = "G2_A1_PHASE3_FULL_DISCOVERY_NEEDS_OWNER_REVIEW";
  } else {
    classification = "G2_A1_PHASE3_FULL_DISCOVERY_PASS_NO_OWNER_REVIEW";
  }

  const summary = {
    ...identity,
    classification,
    coverage: {
      langsExpected: EXPECTED_LANG_COUNT,
      langsProcessed: args.withLuna ? lunaStats.scopesProcessed : args.langs.length,
      cardsPerLang: EXPECTED_OBJECT_COUNT,
      keysPerLang: EXPECTED_KEY_COUNT,
      stagingValues: exportResult.verification.totalValues,
      stagingValuesExpected: EXPECTED_VALUE_COUNT,
      coveragePercent:
        exportResult.verification.pass && (!args.withLuna || lunaStats.scopesProcessed === lunaStats.scopesExpected)
          ? "100%"
          : `${Math.round((lunaStats.scopesProcessed / Math.max(1, lunaStats.scopesExpected)) * 100)}%`,
    },
    luna: {
      model: args.withLuna ? DEFAULT_MODEL : null,
      transport: args.withLuna ? "REAL" : "NOT_RUN",
      ...lunaStats,
    },
    findings: {
      raw: allFindings.length,
      validated: validatedFindings.length,
      excluded: dedup.findings.length - validatedFindings.length,
      byCategory: validatedFindings.reduce((acc, f) => {
        const c = f.category || "UNKNOWN";
        acc[c] = (acc[c] || 0) + 1;
        return acc;
      }, {}),
    },
    candidates: deterministic.stats,
    gates: {
      PRE_BACKLOG_HISTORY_GATE: historyGate.PRE_BACKLOG_HISTORY_GATE,
      PRE_BACKLOG_SEMANTIC_GATE: preBacklogGate.status,
      validationPass: validation.pass && dedup.pass,
    },
    productionDiff: prodDiff,
    ownerPrep,
    stagingManifest: path.relative(ROOT, exportResult.manifestPath).replace(/\\/g, "/"),
  };

  writeReportAtomic(OUT_JSON, summary);
  writeReportAtomic(OUT_MD, buildReportMarkdown(summary));

  console.log(
    JSON.stringify(
      {
        classification: summary.classification,
        coverage: summary.coverage,
        lunaCalls: summary.luna.lunaCalls,
        findingsValidated: summary.findings.validated,
        ownerPrepGenerated: Boolean(ownerPrep),
        productionDiffClean: prodDiff.clean,
        reports: {
          md: path.relative(ROOT, OUT_MD),
          json: path.relative(ROOT, OUT_JSON),
        },
      },
      null,
      2,
    ),
  );

  if (!coveragePass || preBacklogGate.status === "FAIL") process.exit(1);
  process.exit(0);
}

if (require.main === module) {
  main().catch((err) => {
    console.error(err.stack || err.message || err);
    process.exit(1);
  });
}

module.exports = { main, runLunaForLang };
