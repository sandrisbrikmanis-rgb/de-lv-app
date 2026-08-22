#!/usr/bin/env node
"use strict";
/**
 * ET-DE Sätze/Teikumi Luna linguistic audit (READ-ONLY, batched 50).
 * Usage: node scripts/audit-et-sentences-linguistic.js [--test-batch] [--fresh]
 */
require("dotenv").config({ path: require("path").join(__dirname, "..", ".env") });

const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const { auditSentencesBatch, createStats, classifyFindings } = require("./lib/openai-et-sentences-audit");

const COLLECT = path.join(ROOT, "reports/temp/et-sentences-audit-data.json");
const LUNA_DIR = path.join(ROOT, "reports/temp/et-sentences-luna");
const OUT = path.join(ROOT, "reports/temp/et-sentences-linguistic-audit.json");
const TEST_BATCH = process.argv.includes("--test-batch");
const FRESH = process.argv.includes("--fresh");
const HAS_API = Boolean(process.env.OPENAI_API_KEY?.trim());

async function main() {
  if (!fs.existsSync(COLLECT)) {
    throw new Error("Run audit-et-sentences-collect.js first");
  }
  if (!HAS_API) {
    throw new Error("OPENAI_API_KEY required for Luna linguistic audit");
  }

  const collect = JSON.parse(fs.readFileSync(COLLECT, "utf8"));
  if (FRESH && fs.existsSync(LUNA_DIR)) {
    fs.rmSync(LUNA_DIR, { recursive: true, force: true });
  }
  fs.mkdirSync(LUNA_DIR, { recursive: true });

  const stats = createStats();
  const allResults = [];
  const allFindings = [];
  const batchesDone = [];
  const limit = TEST_BATCH ? 1 : collect.batches.length;

  for (let i = 0; i < limit; i++) {
    const batchMeta = collect.batches[i];
    const batchData = JSON.parse(fs.readFileSync(batchMeta.file, "utf8"));
    const lunaOut = path.join(LUNA_DIR, `${batchMeta.batch}-findings.json`);

    if (fs.existsSync(lunaOut) && !FRESH) {
      const cached = JSON.parse(fs.readFileSync(lunaOut, "utf8"));
      allResults.push(...(cached.results || []));
      allFindings.push(...(cached.findings || []));
      batchesDone.push({ batch: batchMeta.batch, source: "cached", findings: (cached.findings || []).length });
      console.log(`  skip ${batchMeta.batch} (cached, findings=${(cached.findings || []).length})`);
      continue;
    }

    console.log(`  auditing ${batchMeta.batch} (${batchData.sentences?.length || 0} sentences)...`);
    const result = await auditSentencesBatch({
      sentences: batchData.sentences,
      stats,
      batchLabel: batchMeta.batch,
    });
    const payload = {
      batch: batchMeta.batch,
      results: result.results,
      findings: result.findings,
      passCount: result.passCount,
      sentencesAudited: (result.results || []).length,
      completedAt: new Date().toISOString(),
      source: "openai-api",
    };
    fs.writeFileSync(lunaOut, JSON.stringify(payload, null, 2));
    allResults.push(...(result.results || []));
    allFindings.push(...(result.findings || []));
    batchesDone.push({ batch: batchMeta.batch, source: "api", findings: (result.findings || []).length });
    console.log(`  done ${batchMeta.batch}: findings=${(result.findings || []).length}`);
  }

  const classified = classifyFindings(allFindings);
  const payload = {
    meta: {
      generatedAt: new Date().toISOString(),
      auditor: "GPT-5.6 Luna",
      mode: "READ-ONLY",
      sentencesTotal: collect.meta.sentencesTotal,
      sentencesAudited: allResults.filter((r) => r.status === "PASS" || r.status === "FINDING").length,
      batchesCompleted: batchesDone.length,
      batchesExpected: collect.batches.length,
      apiUsed: true,
      model: stats.model,
    },
    stats,
    batches: batchesDone,
    allResults,
    findings: classified.qualityFindings,
    falsePositiveCategories: classified.nonError,
    severity: classified.severity,
  };

  fs.writeFileSync(OUT, JSON.stringify(payload, null, 2));
  console.log(JSON.stringify({ batchesDone: batchesDone.length, findings: payload.findings.length, out: OUT }, null, 2));
}

main().catch((e) => {
  console.error(e.message || e);
  process.exit(1);
});
