#!/usr/bin/env node
"use strict";
/**
 * ET–DE Verbs linguistic audit with GPT-5.6 Luna (READ-ONLY).
 * Usage: node scripts/audit-et-verbs-linguistic.js [--test-batch] [--resume]
 */
require("dotenv").config({ path: require("path").join(__dirname, "..", ".env") });

const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const { createStats, auditVerbsBatch } = require("./lib/openai-et-verbs-audit");

const BATCH_DIR = path.join(ROOT, "reports/temp/et-verbs-audit-batches");
const LUNA_DIR = path.join(ROOT, "reports/temp/et-verbs-luna");
const COLLECT = path.join(ROOT, "reports/temp/et-verbs-audit-data.json");
const TEST_BATCH = process.argv.includes("--test-batch");
const RESUME = process.argv.includes("--resume");
const MAX_RETRIES = 3;

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function batchFindingsPath(batchLabel) {
  return path.join(LUNA_DIR, `${batchLabel}-findings.json`);
}

function toLunaVerbs(batchVerbs) {
  return batchVerbs.map((v) => ({
    verbId: v.cardId,
    infinitivDe: v.infinitivDe || "",
    infinitivEt: v.infinitivDa || "",
    forms: (v.forms || []).map((f) => ({
      field: f.field,
      de: f.de || "",
      currentEt: f.daCurrent || f.etCurrent || "",
    })),
  }));
}

async function auditBatchWithRetry(verbs, stats, batchLabel) {
  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      return await auditVerbsBatch({ verbs, stats, batchLabel });
    } catch (error) {
      if (attempt >= MAX_RETRIES) throw error;
      console.warn(`  retry ${attempt}/${MAX_RETRIES}: ${error.message}`);
      await new Promise((r) => setTimeout(r, 2000 * attempt));
    }
  }
  return { findings: [], passCount: 0 };
}

async function main() {
  if (!process.env.OPENAI_API_KEY?.trim()) {
    throw new Error("OPENAI_API_KEY required for GPT-5.6 Luna audit");
  }
  if (!fs.existsSync(COLLECT)) {
    throw new Error(`Missing ${COLLECT}. Run: node scripts/audit-et-verbs-collect.js`);
  }

  const collect = JSON.parse(fs.readFileSync(COLLECT, "utf8"));
  const batches = collect.batches || [];
  if (!batches.length) throw new Error("No verb batches in collect data.");

  ensureDir(LUNA_DIR);
  const stats = createStats();
  const limit = TEST_BATCH ? 1 : batches.length;
  console.log(`ET Verbs Luna audit: ${batches.length} batches (${collect.meta?.verbsTotal || 189} verbs)`);
  if (TEST_BATCH) console.log("TEST BATCH mode — 1 batch only");

  for (let i = 0; i < limit; i++) {
    const batchMeta = batches[i];
    const batchLabel = batchMeta.batch;
    const outPath = batchFindingsPath(batchLabel);

    if (RESUME && fs.existsSync(outPath)) {
      console.log(`  skip ${batchLabel} (cached)`);
      continue;
    }

    const batchData = JSON.parse(fs.readFileSync(batchMeta.file, "utf8"));
    const verbs = toLunaVerbs(batchData.verbs || []);
    const formsAudited = verbs.reduce((n, v) => n + (v.forms?.length || 0), 0);

    const result = await auditBatchWithRetry(verbs, stats, batchLabel);
    const payload = {
      batch: batchLabel,
      auditor: "GPT-5.6 Luna",
      verbsAudited: verbs.length,
      formsAudited,
      findings: result.findings,
      passCount: result.passCount,
      completedAt: new Date().toISOString(),
    };
    fs.writeFileSync(outPath, JSON.stringify(payload, null, 2));
    console.log(`  wrote ${outPath} (${result.findings.length} findings)`);
  }

  const lunaFiles = fs.readdirSync(LUNA_DIR).filter((f) => f.endsWith("-findings.json"));
  const totalFindings = lunaFiles.reduce((sum, f) => {
    const data = JSON.parse(fs.readFileSync(path.join(LUNA_DIR, f), "utf8"));
    return sum + (data.findings?.length || 0);
  }, 0);

  console.log(
    JSON.stringify(
      {
        batchesCompleted: lunaFiles.length,
        batchesExpected: batches.length,
        totalLunaFindings: totalFindings,
        stats,
      },
      null,
      2
    )
  );
}

main().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
