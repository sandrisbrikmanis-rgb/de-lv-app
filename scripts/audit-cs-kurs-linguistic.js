#!/usr/bin/env node
/**
 * CS-DE Kurs Luna linguistic audit (read-only).
 * Usage: node scripts/audit-cs-kurs-linguistic.js [--resume] [--test-batch]
 */
const fs = require("fs");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "..", ".env") });

const { ROOT, chunk, ensureDir } = require("./lib/cs-audit-helpers");
const { extractUnits } = require("./lib/cs-kurs-audit-extract");
const {
  createStats,
  auditCardsBatch,
  classifyFindings,
  DEFAULT_MODEL,
} = require("./lib/openai-cs-full-audit");

const BATCH_SIZE = 25;
const TEST_BATCH = process.argv.includes("--test-batch");
const RESUME = process.argv.includes("--resume");
const OUT_DIR = path.join(ROOT, "reports", "temp", "cs-kurs-audit");
const OUT_JSON = path.join(OUT_DIR, "linguistic-audit.json");
const PROGRESS = path.join(ROOT, "scripts", ".cs-kurs-luna-progress.json");

const KURS_INSTRUCTIONS = [
  "You audit Czech localization for CS-DE Kurss (German course for Czech learners).",
  "Each item has Czech user-visible text (currentCs) and German reference (de). Latvian (lvSource) is MASTER context only.",
  "Field name 'lv' on cards stores Czech text — NOT Latvian language.",
  "Audit types: translate prompts (CS->DE), word glosses, exercise tasks, UI strings, titles.",
  "Flag: wrong Czech grammar, unnatural Czech, semantic mismatch with DE answer, LV/EN/PL leftovers, wrong pedagogical prompt.",
  "SOURCE_DE_ISSUE if DE in data looks wrong — do not propose DE changes.",
  "FALSE_POSITIVE for macron vowel notation in pronunciation guides e.g. (hīr), (flūr).",
  "STYLE_ONLY if Czech is correct but wording could differ without quality gain.",
  "Return JSON { items: [...] } with cardId matching input.",
].join("\n");

function shouldAudit(unit) {
  if (unit.type === "legacyHtml") return false;
  if (unit.type === "conjugationExercise") return false;
  const cs = String(unit.currentCs || "").trim();
  if (!cs || cs.startsWith("(DE conjugation")) return false;
  if (cs.length > 2500) return false;
  return true;
}

function buildLunaCards(units) {
  return units.filter(shouldAudit).map((unit) => ({
    cardId: unit.unitId,
    field: unit.field,
    type: unit.type,
    lessonKey: unit.lessonKey,
    csText: unit.currentCs,
    currentCs: unit.currentCs,
    de: unit.deAnswer || unit.deContext || "",
    lvSource: unit.lvReference || "",
  }));
}

function loadProgress() {
  if (!RESUME || !fs.existsSync(PROGRESS)) return { completedBatches: [] };
  try {
    return JSON.parse(fs.readFileSync(PROGRESS, "utf8"));
  } catch {
    return { completedBatches: [] };
  }
}

function saveProgress(progress) {
  fs.writeFileSync(PROGRESS, JSON.stringify(progress, null, 2));
}

async function main() {
  ensureDir(OUT_DIR);
  const { units } = extractUnits();
  const cards = buildLunaCards(units);
  const batches = chunk(cards, BATCH_SIZE);
  const limit = TEST_BATCH ? 1 : batches.length;

  console.log(`Kurs Luna audit: ${cards.length} units, ${limit} batches (model ${DEFAULT_MODEL})`);

  const progress = loadProgress();
  const completed = new Set(progress.completedBatches || []);
  const stats = createStats();
  const allFindings = [];
  const allResults = [];

  for (let i = 0; i < limit; i++) {
    const start = i * BATCH_SIZE + 1;
    const end = Math.min((i + 1) * BATCH_SIZE, cards.length);
    const batchKey = `kurs-${String(start).padStart(4, "0")}-${String(end).padStart(4, "0")}`;
    if (completed.has(batchKey)) {
      const cached = path.join(OUT_DIR, `luna-batch-${batchKey}.json`);
      if (fs.existsSync(cached)) {
        const data = JSON.parse(fs.readFileSync(cached, "utf8"));
        allFindings.push(...(data.findings || []));
        allResults.push(...(data.results || []));
        console.log(`  skip ${batchKey} (cached, ${data.findings?.length || 0} findings)`);
        continue;
      }
    }

    const batchCards = batches[i];
    const result = await auditCardsBatch({
      cards: batchCards,
      stats,
      batchLabel: batchKey,
      auditType: "kurs_linguistic",
      dataset: "kurs",
      instructions: KURS_INSTRUCTIONS,
    });

    const batchFile = path.join(OUT_DIR, `luna-batch-${batchKey}.json`);
    fs.writeFileSync(
      batchFile,
      JSON.stringify({
        batchKey,
        cardCount: batchCards.length,
        findings: result.findings,
        results: result.results,
        completedAt: new Date().toISOString(),
      }, null, 2),
    );

    allFindings.push(...result.findings);
    allResults.push(...result.results);
    completed.add(batchKey);
    progress.completedBatches = [...completed];
    saveProgress(progress);
  }

  const { severity, nonError, qualityFindings } = classifyFindings(allFindings);
  const output = {
    meta: {
      model: DEFAULT_MODEL,
      unitsTotal: units.length,
      unitsAudited: cards.length,
      batchesRun: limit,
      completedAt: new Date().toISOString(),
      coverage: `${cards.length}/${cards.length}`,
    },
    apiUsage: stats,
    severityCounts: severity,
    nonErrorCounts: nonError,
    findings: qualityFindings,
    allResults,
  };
  fs.writeFileSync(OUT_JSON, JSON.stringify(output, null, 2));

  console.log("\n=== Kurs Luna complete ===");
  console.log(JSON.stringify({
    unitsAudited: cards.length,
    findings: qualityFindings.length,
    severity,
    nonError,
    tokens: stats.totalTokens,
    requests: stats.requestCount,
  }, null, 2));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
