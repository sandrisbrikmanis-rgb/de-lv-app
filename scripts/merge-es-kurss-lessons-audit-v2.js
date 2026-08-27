#!/usr/bin/env node
"use strict";
/**
 * Merge deterministic + Luna v2 into deduplicated audit v2 findings set.
 * Usage: node scripts/merge-es-kurss-lessons-audit-v2.js
 */
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const { collectAllEsFields, compareStructureWithLvMaster, checkLegacyHtmlDrift } = require("./lib/es-kurss-lessons-audit-collect");
const { NON_ERROR_CATEGORIES } = require("./lib/openai-es-kurss-lessons-audit");

const LUNA_V2_DIR = path.join(ROOT, "reports/temp/es-kurss-lessons-full-audit-luna-v2");
const OUT_JSON = path.join(ROOT, "reports/temp/es-kurss-lessons-full-audit-v2.json");
const OUT_MD = path.join(ROOT, "reports/es-kurss-lessons-full-audit-v2.md");
const COVERAGE_JSON = path.join(ROOT, "reports/temp/es-kurss-lessons-luna-v2-coverage-proof.json");

const {
  scanDeterministic,
  structureFindings,
  countBySev,
  countByCategory,
} = require("./lib/es-kurss-lessons-audit-scan");

function loadLunaV2Findings(fieldMap) {
  const findings = [];
  let seq = 0;
  for (const f of fs.readdirSync(LUNA_V2_DIR).filter((x) => x.endsWith("-results.json")).sort()) {
    const data = JSON.parse(fs.readFileSync(path.join(LUNA_V2_DIR, f), "utf8"));
    for (const item of data.results || []) {
      if (item.status !== "FINDING") continue;
      const cat = String(item.category || "").toUpperCase();
      if (NON_ERROR_CATEGORIES.has(cat)) continue;
      const field = fieldMap.get(item.cardId) || {};
      seq++;
      findings.push({
        id: `ES-KURSS-LESSONS-LV2-${String(seq).padStart(4, "0")}`,
        severity: item.severity || "MEDIUM",
        lessonId: field.lessonId || item.lessonId || "",
        lessonNumber: field.lessonNumber,
        path: item.path || field.path || "",
        field: item.field || field.field || "",
        fieldType: field.fieldType || item.fieldType || "",
        category: item.category || "TRANSLATION",
        problem: item.reason || "",
        deContext: item.de || field.deContext || "",
        esCurrent: item.currentEs || field.esCurrent || "",
        proposedEs: item.proposedEs || "",
        reason: item.reason || "",
        source: "luna-v2",
        cardId: item.cardId,
      });
    }
  }
  return findings;
}

function verifyLunaV2Coverage() {
  execSync(`node scripts/verify-es-kurss-lessons-luna-coverage.js --luna-dir=${path.relative(ROOT, LUNA_V2_DIR)}`, {
    cwd: ROOT,
    stdio: "inherit",
  });
}

function dedupeKey(f) {
  return `${f.lessonId}|${f.path}|${String(f.esCurrent || "").slice(0, 120)}`;
}

function dedupeFindings(findings) {
  const merged = [];
  const seen = new Set();
  const duplicates = [];
  for (const f of findings) {
    const key = dedupeKey(f);
    if (seen.has(key)) {
      duplicates.push({ key, id: f.id });
      continue;
    }
    seen.add(key);
    merged.push(f);
  }
  return { merged, duplicateCount: duplicates.length, duplicates: duplicates.slice(0, 20) };
}

function main() {
  verifyLunaV2Coverage();

  const head = execSync("git rev-parse HEAD", { cwd: ROOT, encoding: "utf8" }).trim();
  const { fields, stats } = collectAllEsFields();
  const fieldMap = new Map(fields.map((f) => [f.id, f]));
  const structure = compareStructureWithLvMaster();
  const legacyDrift = checkLegacyHtmlDrift();
  const detFindings = scanDeterministic(fields);
  const lunaV2Findings = loadLunaV2Findings(fieldMap);

  const structIssues = [...structure.issues, ...legacyDrift.issues];
  const structFindings = structureFindings(structIssues);
  const rawMerged = [...structFindings, ...detFindings, ...lunaV2Findings];

  const { merged, duplicateCount } = dedupeFindings(rawMerged);
  const bySev = countBySev(merged);
  const byCategory = countByCategory(merged);
  const bySource = merged.reduce((acc, f) => {
    acc[f.source] = (acc[f.source] || 0) + 1;
    return acc;
  }, {});

  const v1Audit = JSON.parse(fs.readFileSync(path.join(ROOT, "reports/temp/es-kurss-lessons-full-audit.json"), "utf8"));
  const v1Keys = new Set((v1Audit.findings || []).map(dedupeKey));
  const v2Keys = new Set(merged.map(dedupeKey));
  const newInV2 = merged.filter((f) => !v1Keys.has(dedupeKey(f)));
  const droppedFromV1 = (v1Audit.findings || []).filter((f) => !v2Keys.has(dedupeKey(f)));

  const payload = {
    generatedAt: new Date().toISOString(),
    head,
    version: "v2",
    stats,
    coverage: { totalFields: stats.totalFields, lunaV2: true },
    bySev,
    byCategory,
    bySource,
    duplicateCount,
    comparison: {
      v1Findings: v1Audit.findings?.length || 0,
      v2Findings: merged.length,
      newInV2: newInV2.length,
      droppedFromV1: droppedFromV1.length,
      newInV2Sample: newInV2.slice(0, 30).map((f) => ({ id: f.id, category: f.category, path: f.path })),
      droppedSample: droppedFromV1.slice(0, 20).map((f) => ({ id: f.id, category: f.category, path: f.path })),
    },
    findings: merged,
  };

  fs.mkdirSync(path.dirname(OUT_JSON), { recursive: true });
  fs.writeFileSync(OUT_JSON, JSON.stringify(payload, null, 2));
  fs.writeFileSync(
    OUT_MD,
    [
      "# ES–DE Kurss Lessons — audit v2 (deduplicated)",
      "",
      `**HEAD:** \`${head}\``,
      `**Findings:** ${merged.length} (deduped from ${rawMerged.length}, duplicates removed: ${duplicateCount})`,
      `**v1 → v2:** +${newInV2.length} new, -${droppedFromV1.length} dropped`,
      "",
      "## By source",
      ...Object.entries(bySource).map(([k, v]) => `- ${k}: **${v}**`),
      "",
      "## By severity",
      ...Object.entries(bySev).map(([k, v]) => `- ${k}: **${v}**`),
      "",
    ].join("\n"),
  );

  console.log(JSON.stringify({ out: OUT_JSON, findings: merged.length, newInV2: newInV2.length, duplicateCount }, null, 2));
}

if (require.main === module) {
  try {
    main();
  } catch (e) {
    console.error(e.message);
    process.exit(1);
  }
}

module.exports = { dedupeKey, dedupeFindings };
