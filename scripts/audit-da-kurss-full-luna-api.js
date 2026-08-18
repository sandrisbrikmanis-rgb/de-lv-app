#!/usr/bin/env node
"use strict";
/**
 * GPT-5.6 Luna API pass for DA Kurss full audit batches.
 * Usage: node scripts/audit-da-kurss-full-luna-api.js [--force]
 */
const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const { auditKurssBatch, createStats } = require("./lib/openai-da-kurss-audit");

const LUNA_DIR = path.join(ROOT, "reports/temp/da-kurss-full-audit-luna");
const FORCE = process.argv.includes("--force");

async function main() {
  const batches = fs
    .readdirSync(LUNA_DIR)
    .filter((f) => /^batch-\d+\.json$/.test(f))
    .sort();

  if (!batches.length) {
    console.error("No Luna batches found. Run: node scripts/audit-da-kurss-full.js --export-only");
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
          generatedAt: new Date().toISOString(),
          findings,
        },
        null,
        2,
      ),
    );
    results.push({ batch: batchFile, findings: findings.length, source: "api" });
    console.log(`  ${batchFile}: ${findings.length} findings`);
  }

  const totalFindings = results.reduce((s, r) => s + r.findings, 0);
  console.log(JSON.stringify({ batches: results.length, totalFindings, stats, results }, null, 2));
}

main().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
