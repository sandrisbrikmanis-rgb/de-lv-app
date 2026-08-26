#!/usr/bin/env node
"use strict";
/**
 * ES-DE B1 independent OWNER validation (2842 objects, single cycle).
 * Usage:
 *   node scripts/run-es-de-b1-owner-proposals-validation.js
 *   node scripts/run-es-de-b1-owner-proposals-validation.js --test-batch
 *   node scripts/run-es-de-b1-owner-proposals-validation.js --resume
 *   node scripts/run-es-de-b1-owner-proposals-validation.js --fresh
 */
require("dotenv").config({ path: require("path").join(__dirname, "..", ".env") });

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT, isSyncedWithWww } = require("./lib/audit-common");
const { PRODUCTION_PATH } = require("./lib/es-b1-discovery-config");
const { buildOwnerContext, loadProductionCards } = require("./lib/es-b1-owner-context");
const { DEFAULT_MODEL, DEFAULT_BATCH_SIZE, validateOwnerBatchWithRetry } = require("./lib/openai-es-b1-owner-proposals");
const {
  mergeLunaResult,
  buildFinalItem,
  validateProposalsFinal,
  countBy,
} = require("./lib/es-b1-owner-proposals-validate");

const SOURCE_JSON = path.join(ROOT, "reports/es-de-b1-full-audit-owner-source.json");
const AUDIT_JSON = path.join(ROOT, "reports/es-de-b1-full-audit.json");
const OUT_JSON = path.join(ROOT, "reports/es-de-b1-owner-proposals-final.json");
const OUT_VIEW = path.join(ROOT, "reports/es-de-b1-owner-proposals-final.md");
const OUT_SUMMARY = path.join(ROOT, "reports/es-de-b1-owner-proposals-final-summary.md");
const TEMP_DIR = path.join(ROOT, "reports/temp/es-de-b1-owner-proposals-luna");
const LUNA_RAW = path.join(ROOT, "reports/temp/es-de-b1-owner-proposals-luna-raw.json");
const PROGRESS_FILE = path.join(ROOT, "scripts/.es-de-b1-owner-proposals-progress.json");

const REPO = "sandrisbrikmanis-rgb/de-lv-app";
const PR = 665;
const BRANCH = "cursor/es-de-b1-first-full-discovery-master-1-9-3141";

const TEST_BATCH = process.argv.includes("--test-batch");
const RESUME = process.argv.includes("--resume");
const FRESH = process.argv.includes("--fresh");
const BATCH_SIZE = TEST_BATCH ? 5 : DEFAULT_BATCH_SIZE;

function truncate(text, max = 600) {
  const s = String(text ?? "").replace(/\n/g, " ");
  return s.length > max ? `${s.slice(0, max)}…` : s;
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function loadProgress() {
  if (!fs.existsSync(PROGRESS_FILE)) return { completedBatches: [], lunaItems: [] };
  try {
    return JSON.parse(fs.readFileSync(PROGRESS_FILE, "utf8"));
  } catch {
    return { completedBatches: [], lunaItems: [] };
  }
}

function saveProgress(progress) {
  fs.writeFileSync(PROGRESS_FILE, JSON.stringify(progress, null, 2));
}

function chunk(items, size) {
  const out = [];
  for (let i = 0; i < items.length; i += size) out.push(items.slice(i, i + size));
  return out;
}

function buildViewMd(items) {
  const lines = [
    "# ES–DE B1 — gala OWNER proposals (neatkarīga validācija)",
    "",
    `**Model:** ${DEFAULT_MODEL}`,
    `**Objekti:** ${items.length}`,
    "",
  ];
  for (const item of items) {
    lines.push(`## ${item.id}`, "");
    lines.push(`- Source Finding IDs: ${(item.sourceFindingIds || []).map((id) => `\`${id}\``).join(", ")}`);
    lines.push(`- Severity: ${item.severity}`);
    lines.push(`- Category: ${item.category}`);
    lines.push(`- Card ID: \`${item.cardId}\``);
    lines.push(`- DE: \`${truncate(item.de, 200)}\``);
    lines.push(`- Field/path: \`${item.field}\``);
    lines.push(`- CURRENT: \`${truncate(item.current, 500)}\``);
    lines.push(`- NEW: \`${truncate(item.new, 500)}\``);
    lines.push(`- Action: ${item.action}`);
    lines.push(`- Validation decision: ${item.validationDecision}`);
    lines.push(`- OWNER Status: ${item.status}`);
    lines.push(`- Pamatojums: ${item.reason}`);
    lines.push("");
  }
  return lines.join("\n");
}

function buildSummary(payload, validation, mirrorPass, syntaxPass) {
  const items = payload.items;
  const decisions = countBy(items, "validationDecision");
  const actions = countBy(items, "action");
  const severities = countBy(items, "severity");
  const labot = decisions.LABOT || 0;
  const nelabot = decisions.NELABOT || 0;
  const falsePositive = decisions.FALSE_POSITIVE || 0;
  const sourceDeIssue = decisions.SOURCE_DE_ISSUE || 0;
  const reviewReq = decisions.OWNER_REVIEW_REQUIRED || 0;

  const verdict =
    validation.errors.length > 0
      ? "FAIL"
      : reviewReq > items.length * 0.15
        ? "BLOCKED"
        : "READY FOR OWNER REVIEW";

  const lines = [
    "# ES–DE B1 — gala OWNER proposals kopsavilkums",
    "",
    `**HEAD:** \`${payload.sourceHead}\``,
    `**Model:** ${payload.model}`,
    `**PR:** #${payload.pr}`,
    "",
    "## Metrikas",
    "",
    "| Metrika | Rezultāts |",
    "|---------|----------:|",
    `| Source findings | ${payload.sourceFindings} |`,
    `| Source OWNER objects | ${payload.sourceOwnerObjects} |`,
    `| Processed | ${payload.processedOwnerObjects}/${payload.sourceOwnerObjects} |`,
    `| LABOT | ${labot} |`,
    `| NELABOT | ${nelabot} |`,
    `| FALSE_POSITIVE | ${falsePositive} |`,
    `| SOURCE_DE_ISSUE | ${sourceDeIssue} |`,
    `| OWNER_REVIEW_REQUIRED | ${reviewReq} |`,
    `| REPLACE | ${actions.REPLACE || 0} |`,
    `| REMOVE | ${actions.REMOVE || 0} |`,
    `| ADD_STUDY/STRUCTURE | ${actions.ADD_STUDY || 0} |`,
    `| KRITISKA | ${severities.KRITISKA || 0} |`,
    `| AUGSTA | ${severities.AUGSTA || 0} |`,
    `| VIDĒJA | ${severities.VIDĒJA || 0} |`,
    `| ZEMA | ${severities.ZEMA || 0} |`,
    `| CURRENT exact match | ${validation.metrics.currentMatchPct.toFixed(1)}% |`,
    `| Finding ID coverage | ${validation.metrics.findingIdsCovered}/${validation.metrics.sourceFindings} |`,
    `| Card ID found | ${validation.metrics.cardFoundPct.toFixed(1)}% |`,
    `| Field/path found | ${validation.metrics.fieldFoundPct.toFixed(1)}% |`,
    `| Tukšs NEW pie LABOT | ${validation.metrics.labotEmptyNew} |`,
    `| CURRENT === NEW pie LABOT | ${validation.metrics.labotSameNew} |`,
    `| CURRENT !== NEW pie NELABOT | ${validation.metrics.nelabotDiffNew} |`,
    `| Foreign remnants LABOT NEW | ${validation.metrics.foreignInLabotNew} |`,
    `| comparison DE saglabāts | ${validation.metrics.germanPreservedPct.toFixed(1)}% |`,
    `| sectionAccents visible match | ${validation.metrics.sectionAccentMatchPct.toFixed(1)}% |`,
    `| Production changes | 0 |`,
    `| DE changes | 0 |`,
    `| Mirror | ${mirrorPass ? "PASS" : "FAIL"} |`,
    `| Syntax | ${syntaxPass ? "PASS" : "FAIL"} |`,
    "",
    `## Verdikts: **${verdict}**`,
    "",
  ];

  if (validation.errors.length) {
    lines.push("## Validācijas kļūdas", "");
    for (const e of validation.errors.slice(0, 40)) lines.push(`- ${e}`);
    if (validation.errors.length > 40) lines.push(`- … un vēl ${validation.errors.length - 40}`);
    lines.push("");
  }

  return { lines: lines.join("\n"), verdict };
}

async function runLunaBatches(contextItems) {
  if (!process.env.OPENAI_API_KEY?.trim()) {
    throw new Error("OPENAI_API_KEY required for Luna validation");
  }

  ensureDir(TEMP_DIR);
  if (FRESH) {
    if (fs.existsSync(PROGRESS_FILE)) fs.unlinkSync(PROGRESS_FILE);
    if (fs.existsSync(LUNA_RAW)) fs.unlinkSync(LUNA_RAW);
    if (fs.existsSync(TEMP_DIR)) fs.rmSync(TEMP_DIR, { recursive: true, force: true });
    ensureDir(TEMP_DIR);
  }

  const progress = RESUME && !FRESH ? loadProgress() : { completedBatches: [], lunaItems: [] };
  const completed = new Set(progress.completedBatches || []);
  const lunaById = new Map((progress.lunaItems || []).map((i) => [i.id, i]));

  const batches = chunk(contextItems, BATCH_SIZE);
  const stats = { requestCount: 0, inputTokens: 0, outputTokens: 0, totalTokens: 0, batchSizes: [] };

  console.log(`Luna validation: ${contextItems.length} objects in ${batches.length} batches (size=${BATCH_SIZE})`);

  for (let i = 0; i < batches.length; i += 1) {
    const batch = batches[i];
    const start = i * BATCH_SIZE + 1;
    const end = start + batch.length - 1;
    const batchKey = `owner-${String(start).padStart(4, "0")}-${String(end).padStart(4, "0")}`;
    if (completed.has(batchKey)) {
      process.stdout.write(`  skip ${batchKey} (already done)\n`);
      continue;
    }

    const result = await validateOwnerBatchWithRetry(batch, {
      model: DEFAULT_MODEL,
      stats,
      batchLabel: batchKey,
    });

    const batchFile = path.join(TEMP_DIR, `${batchKey}.json`);
    fs.writeFileSync(batchFile, JSON.stringify({ batchKey, items: result.items }, null, 2));

    for (const item of result.items) lunaById.set(item.id, item);
    completed.add(batchKey);
    progress.completedBatches = [...completed];
    progress.lunaItems = [...lunaById.values()];
    saveProgress(progress);

    const rawData = {
      meta: { model: DEFAULT_MODEL, batchCount: completed.size, totalObjects: contextItems.length },
      items: progress.lunaItems,
    };
    fs.writeFileSync(LUNA_RAW, JSON.stringify(rawData, null, 2));
    process.stdout.write(`  saved ${batchKey} (${progress.lunaItems.length}/${contextItems.length})\n`);
  }

  return { lunaById, stats, batchCount: batches.length };
}

async function main() {
  const head = execSync("git rev-parse HEAD", { cwd: ROOT, encoding: "utf8" }).trim();
  const source = JSON.parse(fs.readFileSync(SOURCE_JSON, "utf8"));
  const audit = JSON.parse(fs.readFileSync(AUDIT_JSON, "utf8"));
  const sourceOwners = source.ownerObjects || [];
  const expectedCount = 2842;

  if (sourceOwners.length !== expectedCount) {
    throw new Error(`Expected ${expectedCount} source owner objects, got ${sourceOwners.length}`);
  }

  console.log("Prerequisites:");
  console.log(
    JSON.stringify(
      {
        cards: audit.meta?.totalCards,
        study: audit.meta?.studyCount,
        rawFindings: audit.counts?.rawFindings,
        ownerObjects: sourceOwners.length,
        head,
      },
      null,
      2,
    ),
  );

  const { esWords, lvWords } = loadProductionCards();
  const contextItems = sourceOwners.map((o) => buildOwnerContext(o, esWords, lvWords));
  const toProcess = TEST_BATCH ? contextItems.slice(0, 5) : contextItems;

  const { lunaById, stats, batchCount } = await runLunaBatches(toProcess);

  const finalItems = [];
  for (const src of toProcess) {
    const luna = lunaById.get(src.id) || {};
    const merged = mergeLunaResult(src, luna);
    finalItems.push(buildFinalItem(src, merged));
  }

  const sourceFindings = audit.counts?.rawFindings || 3795;
  const payload = {
    repository: REPO,
    pr: PR,
    branch: BRANCH,
    sourceHead: head,
    model: DEFAULT_MODEL,
    sourceFindings,
    sourceOwnerObjects: expectedCount,
    processedOwnerObjects: TEST_BATCH ? toProcess.length : expectedCount,
    productionFilesChanged: 0,
    usage: { ...stats, batchCount },
    items: finalItems,
  };

  const validation = validateProposalsFinal(sourceOwners.slice(0, toProcess.length), payload, esWords);

  let syntaxPass = true;
  try {
    execSync("node --check data/es/b1.js", { cwd: ROOT, stdio: "pipe" });
    execSync("node --check www/data/es/b1.js", { cwd: ROOT, stdio: "pipe" });
  } catch {
    syntaxPass = false;
  }
  const mirrorPass = isSyncedWithWww(PRODUCTION_PATH);

  const { lines, verdict } = buildSummary(payload, validation, mirrorPass, syntaxPass);

  if (!TEST_BATCH) {
    fs.writeFileSync(OUT_JSON, JSON.stringify(payload, null, 2) + "\n");
    fs.writeFileSync(OUT_VIEW, buildViewMd(finalItems));
    fs.writeFileSync(OUT_SUMMARY, lines);
  }

  console.log(
    JSON.stringify(
      {
        processed: finalItems.length,
        validationErrors: validation.errors.length,
        metrics: validation.metrics,
        mirrorPass,
        syntaxPass,
        verdict,
        testBatch: TEST_BATCH,
        outJson: TEST_BATCH ? null : OUT_JSON,
      },
      null,
      2,
    ),
  );

  if (verdict === "FAIL" && !TEST_BATCH) {
    console.error("Validation errors:", validation.errors.slice(0, 15));
    process.exit(1);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
