#!/usr/bin/env node
"use strict";
/**
 * DA-DE Sätze Luna linguistic audit (READ-ONLY, batched 50).
 * Uses OpenAI gpt-5.6-luna when OPENAI_API_KEY is set; otherwise expects
 * pre-generated batch findings in reports/temp/et-sentences-luna/.
 * Usage: node scripts/audit-et-sentences-linguistic.js [--test-batch]
 */
const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const { auditSentencesBatch, createStats, classifyFindings } = require("./lib/openai-et-sentences-audit");

const COLLECT = path.join(ROOT, "reports/temp/et-sentences-audit-data.json");
const BATCH_DIR = path.join(ROOT, "reports/temp/et-sentences-audit-batches");
const LUNA_DIR = path.join(ROOT, "reports/temp/et-sentences-luna");
const OUT = path.join(ROOT, "reports/temp/et-sentences-linguistic-audit.json");
const TEST_BATCH = process.argv.includes("--test-batch");
const HAS_API = Boolean(process.env.OPENAI_API_KEY?.trim());

function main() {
  if (!fs.existsSync(COLLECT)) {
    throw new Error("Run audit-et-sentences-collect.js first");
  }
  const collect = JSON.parse(fs.readFileSync(COLLECT, "utf8"));
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

    if (fs.existsSync(lunaOut)) {
      const cached = JSON.parse(fs.readFileSync(lunaOut, "utf8"));
      allResults.push(...(cached.results || []));
      allFindings.push(...(cached.findings || []));
      batchesDone.push({ batch: batchMeta.batch, source: "cached", findings: (cached.findings || []).length });
      console.log(`  skip ${batchMeta.batch} (cached, findings=${(cached.findings || []).length})`);
      continue;
    }

    if (HAS_API) {
      (async () => {
        const result = await auditSentencesBatch({
          sentences: batchData.sentences,
          stats,
          batchLabel: batchMeta.batch,
        });
        fs.writeFileSync(
          lunaOut,
          JSON.stringify(
            {
              batch: batchMeta.batch,
              results: result.results,
              findings: result.findings,
              passCount: result.passCount,
              completedAt: new Date().toISOString(),
              source: "openai-api",
            },
            null,
            2
          )
        );
      })();
    } else {
      console.log(`  pending ${batchMeta.batch}: no API key and no cached Luna findings at ${lunaOut}`);
    }
  }

  if (HAS_API) {
    console.log("API mode requires async — re-run after batches complete.");
    return;
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
      apiUsed: false,
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

if (require.main === module) {
  try {
    main();
  } catch (e) {
    console.error(e.message);
    process.exit(1);
  }
}

module.exports = { LUNA_DIR, OUT };
