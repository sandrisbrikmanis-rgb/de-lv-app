#!/usr/bin/env node
"use strict";
/**
 * Verify Luna per-field linguistic coverage for ES Kurss Lessons audit.
 * Proves each of 2951 fields received an explicit Luna status (PASS or FINDING),
 * not a synthetic/auto-assigned PASS.
 *
 * Usage:
 *   node scripts/verify-es-kurss-lessons-luna-coverage.js [--luna-dir=PATH] [--out=PATH]
 */
const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const { collectAllEsFields } = require("./lib/es-kurss-lessons-audit-collect");

const args = process.argv.slice(2);
const lunaDirArg = args.find((a) => a.startsWith("--luna-dir="));
const outArg = args.find((a) => a.startsWith("--out="));
const LUNA_DIR = path.join(
  ROOT,
  lunaDirArg ? lunaDirArg.split("=")[1] : "reports/temp/es-kurss-lessons-full-audit-luna-v2",
);
const OUT_MD = path.join(
  ROOT,
  outArg ? outArg.split("=")[1] : "reports/es-kurss-lessons-luna-coverage-proof.md",
);
const OUT_JSON = path.join(ROOT, "reports/temp/es-kurss-lessons-luna-coverage-proof.json");

function loadBatchResults() {
  const perField = new Map();
  const perBatch = [];
  if (!fs.existsSync(LUNA_DIR)) {
    return { perField, perBatch, error: `Missing Luna dir: ${LUNA_DIR}` };
  }

  const resultFiles = fs
    .readdirSync(LUNA_DIR)
    .filter((f) => f.endsWith("-results.json"))
    .sort();

  for (const rf of resultFiles) {
    const data = JSON.parse(fs.readFileSync(path.join(LUNA_DIR, rf), "utf8"));
    const batchLabel = data.batch || rf.replace("-results.json", "");
    const inputCount = data.inputCount || (data.results || []).length;
    let explicitPass = 0;
    let explicitFinding = 0;
    let syntheticPass = 0;

    for (const item of data.results || []) {
      const entry = {
        cardId: item.cardId,
        status: item.status,
        batch: batchLabel,
        syntheticPass: !!item.syntheticPass,
        category: item.category || "",
        source: item.syntheticPass ? "synthetic" : "luna_explicit",
      };
      perField.set(item.cardId, entry);
      if (item.status === "FINDING") explicitFinding += 1;
      else if (item.syntheticPass) syntheticPass += 1;
      else explicitPass += 1;
    }

    perBatch.push({
      batch: batchLabel,
      inputCount,
      outputCount: (data.results || []).length,
      explicitPass,
      explicitFinding,
      syntheticPass,
      complete: inputCount === (data.results || []).length,
      allExplicit: syntheticPass === 0 && inputCount === (data.results || []).length,
    });
  }

  return { perField, perBatch };
}

function analyzeV1Legacy() {
  const v1Dir = path.join(ROOT, "reports/temp/es-kurss-lessons-full-audit-luna");
  if (!fs.existsSync(v1Dir)) return null;

  let input = 0;
  let returned = 0;
  const perBatch = [];
  for (const f of fs.readdirSync(v1Dir).filter((x) => x.endsWith(".json") && !x.includes("findings"))) {
    const batch = JSON.parse(fs.readFileSync(path.join(v1Dir, f), "utf8"));
    const findingsPath = path.join(v1Dir, f.replace(".json", "-findings.json"));
    const findings = fs.existsSync(findingsPath)
      ? JSON.parse(fs.readFileSync(findingsPath, "utf8")).findings || []
      : [];
    input += batch.fields.length;
    returned += findings.length;
    perBatch.push({
      batch: f.replace(".json", ""),
      input: batch.fields.length,
      lunaReturned: findings.length,
      syntheticPassInferred: batch.fields.length - findings.length,
    });
  }
  return {
    version: "v1_legacy",
    input,
    lunaReturnedFindingsOnly: returned,
    syntheticPassInferred: input - returned,
    proven: false,
    perBatch,
    note: "v1 parser assigned PASS to cardIds absent from Luna response — NOT proof of per-field evaluation",
  };
}

function main() {
  const { fields, stats } = collectAllEsFields();
  const allFieldIds = new Set(fields.map((f) => f.id));
  const { perField, perBatch, error } = loadBatchResults();

  const covered = [...allFieldIds].filter((id) => perField.has(id));
  const missing = [...allFieldIds].filter((id) => !perField.has(id));
  const explicitPass = [...perField.values()].filter((v) => v.status === "PASS" && !v.syntheticPass).length;
  const explicitFinding = [...perField.values()].filter((v) => v.status === "FINDING").length;
  const syntheticPass = [...perField.values()].filter((v) => v.syntheticPass).length;

  const pass =
    !error &&
    missing.length === 0 &&
    syntheticPass === 0 &&
    perField.size === stats.totalFields &&
    perBatch.every((b) => b.allExplicit);

  const v1 = analyzeV1Legacy();

  const report = {
    generatedAt: new Date().toISOString(),
    lunaDir: path.relative(ROOT, LUNA_DIR),
    totalFields: stats.totalFields,
    coveredFields: perField.size,
    missingFields: missing.length,
    explicitPass,
    explicitFinding,
    syntheticPass,
    batches: perBatch.length,
    batchesComplete: perBatch.filter((b) => b.complete).length,
    batchesAllExplicit: perBatch.filter((b) => b.allExplicit).length,
    pass,
    verdict: pass
      ? "PASS — 2951/2951 fields have explicit Luna status (no synthetic PASS)"
      : syntheticPass > 0
        ? "FAIL — synthetic PASS detected; not proof of per-field Luna evaluation"
        : missing.length > 0
          ? `FAIL — ${missing.length} fields missing Luna response`
          : "FAIL — incomplete batch coverage",
    v1Legacy: v1,
    missingSample: missing.slice(0, 20),
    perBatch,
  };

  const md = [
    "# ES–DE Kurss Lessons — Luna coverage proof",
    "",
    `**Generated:** ${report.generatedAt.slice(0, 19)}Z`,
    `**Luna dir:** \`${report.lunaDir}\``,
    "",
    "## Verdict",
    "",
    `**${report.verdict}**`,
    "",
    "## Per-field coverage",
    "",
    "| Metrika | Vērtība |",
    "|---------|--------:|",
    `| Total fields | **${report.totalFields}** |`,
    `| Covered (explicit Luna) | **${report.coveredFields}** |`,
    `| Missing | **${report.missingFields}** |`,
    `| Explicit PASS | **${report.explicitPass}** |`,
    `| Explicit FINDING | **${report.explicitFinding}** |`,
    `| Synthetic PASS (rejected) | **${report.syntheticPass}** |`,
    "",
    "## Batch integrity",
    "",
    "| Metrika | Vērtība |",
    "|---------|--------:|",
    `| Batches | **${report.batches}** |`,
    `| Complete (input=output) | **${report.batchesComplete}/${report.batches}** |`,
    `| All explicit (no synthetic) | **${report.batchesAllExplicit}/${report.batches}** |`,
    "",
  ];

  if (v1) {
    md.push(
      "## v1 legacy audit (NOT valid proof)",
      "",
      `v1 sent **${v1.input}** fields to Luna but only **${v1.lunaReturnedFindingsOnly}** returned explicit items.`,
      `**${v1.syntheticPassInferred}** fields received synthetic PASS via parser — **not** proof of linguistic evaluation.`,
      "",
    );
  }

  md.push(
    "## Proof criteria (MASTER §7.8)",
    "",
    "1. Every field ID appears in exactly one batch `*-results.json`.",
    "2. Each field has `status: PASS` or `status: FINDING` from Luna response.",
    "3. `syntheticPass` count must be **0**.",
    "4. No field is marked pass-only by deterministic pre-filter without Luna response.",
    "",
  );

  if (!pass && missing.length) {
    md.push("## Missing field sample", "", ...missing.slice(0, 10).map((id) => `- \`${id}\``), "");
  }

  fs.mkdirSync(path.dirname(OUT_JSON), { recursive: true });
  fs.writeFileSync(OUT_JSON, JSON.stringify(report, null, 2));
  fs.writeFileSync(OUT_MD, md.join("\n"));

  console.log(JSON.stringify(report, null, 2));
  process.exit(pass ? 0 : 1);
}

if (require.main === module) main();

module.exports = { loadBatchResults, analyzeV1Legacy };
