#!/usr/bin/env node
"use strict";
/**
 * GPT-5.6 Luna API pass for DA Kurss final closure audit batches.
 */
const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const { auditKurssBatch, createStats } = require("./lib/openai-da-kurss-audit");

const LUNA_DIR = path.join(ROOT, "reports/temp/da-kurss-final-closure-luna");
const FORCE = process.argv.includes("--force");

async function main() {
  if (!fs.existsSync(LUNA_DIR)) {
    console.error("Luna batch dir missing:", LUNA_DIR);
    process.exit(1);
  }

  const batches = fs
    .readdirSync(LUNA_DIR)
    .filter((f) => /^batch-\d+\.json$/.test(f))
    .sort();

  if (!batches.length) {
    console.error("No Luna batches found.");
    process.exit(1);
  }

  const stats = createStats();
  const results = [];

  for (const batchFile of batches) {
    const inPath = path.join(LUNA_DIR, batchFile);
    const outPath = path.join(LUNA_DIR, batchFile.replace(".json", "-findings.json"));
    if (!FORCE && fs.existsSync(outPath)) {
      const cached = JSON.parse(fs.readFileSync(outPath, "utf8"));
      results.push({ batch: batchFile, findings: (cached.findings || []).length, source: "cached" });
      continue;
    }

    const data = JSON.parse(fs.readFileSync(inPath, "utf8"));
    const { findings } = await auditKurssBatch({
      fields: data.fields || [],
      stats,
      batchLabel: data.batch || batchFile,
    });

    fs.writeFileSync(
      outPath,
      JSON.stringify(
        {
          batch: data.batch,
          auditor: "GPT-5.6 Luna",
          model: stats.model,
          generatedAt: new Date().toISOString(),
          findings,
        },
        null,
        2,
      ),
    );
    results.push({ batch: batchFile, findings: findings.length, source: "api" });
  }

  console.log(JSON.stringify({ batches: results.length, stats, results }, null, 2));
}

main().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
