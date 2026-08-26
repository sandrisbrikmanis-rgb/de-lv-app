#!/usr/bin/env node
"use strict";
/**
 * ES-DE B1 FIRST FULL DISCOVERY audit orchestrator (MASTER v1.9, READ-ONLY).
 * Usage: node scripts/run-es-de-b1-full-audit.js [--skip-luna] [--test-luna] [--fresh-luna]
 */
require("dotenv").config({ path: require("path").join(__dirname, "..", ".env") });

const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync, spawnSync } = require("child_process");
const { ROOT, isSyncedWithWww } = require("./lib/audit-common");
const {
  MASTER_VERSION,
  MASTER_FILE,
  PRODUCTION_PATH,
  WWW_PATH,
  TOTAL_CARDS,
  STUDY_COUNT,
} = require("./lib/es-b1-discovery-config");
const {
  LUNA_JSON,
  buildCards,
  entryId,
  mapSeverity,
  mapCategory,
} = require("./lib/es-b1-audit-helpers");
const { classifyFindings, mapValidationStatus, NON_ERROR_CATEGORIES } = require("./lib/openai-es-b1-audit");

const SKIP_LUNA = process.argv.includes("--skip-luna");
const TEST_LUNA = process.argv.includes("--test-luna");
const FRESH_LUNA = process.argv.includes("--fresh-luna");
const OUT_MD = path.join(ROOT, "reports/es-de-b1-full-audit.md");
const OUT_JSON = path.join(ROOT, "reports/es-de-b1-full-audit.json");
const OUT_SUMMARY = path.join(ROOT, "reports/es-de-b1-full-audit-summary.md");
const COLLECT_JSON = path.join(ROOT, "reports/temp/es-de-b1-audit-data.json");
const EXPECTED_HEAD = "1ca4132d";

function git(cmd) {
  try {
    return execSync(cmd, { cwd: ROOT, encoding: "utf8" }).trim();
  } catch {
    return "";
  }
}

function runNode(script, args = []) {
  const result = spawnSync("node", [path.join(ROOT, "scripts", script), ...args], {
    cwd: ROOT,
    env: process.env,
    encoding: "utf8",
    maxBuffer: 64 * 1024 * 1024,
  });
  if (result.stdout) process.stdout.write(result.stdout);
  if (result.stderr) process.stderr.write(result.stderr);
  if (result.status !== 0) throw new Error(`${script} failed exit ${result.status}`);
}

function loadJson(p, fallback = null) {
  if (!fs.existsSync(p)) return fallback;
  return JSON.parse(fs.readFileSync(p, "utf8"));
}

function readCurrentFromWords(words, cardId, field) {
  const idx = words.findIndex((e, i) => entryId(e, i) === cardId || e.study?.id === cardId);
  if (idx < 0) return { entry: null, value: undefined };
  const entry = words[idx];
  if (field === "lv") return { entry, value: entry.lv };
  if (!field.startsWith("study.")) return { entry, value: undefined };
  const parts = field.replace(/^study\./, "").split(/\.|\[|\]/).filter((p) => p !== "");
  let cur = entry.study;
  for (const p of parts) {
    if (cur == null) return { entry, value: undefined };
    if (/^\d+$/.test(p)) cur = cur[parseInt(p, 10)];
    else cur = cur[p];
  }
  return { entry, value: cur };
}

function mergeDeterministicFindings(collect, validateStudy, words) {
  const findings = [];
  let seq = 1;
  const add = (partial) => {
    findings.push({
      id: `ES-B1-${String(seq++).padStart(4, "0")}`,
      source: partial.source || "deterministic",
      level: "B1",
      ...partial,
    });
  };

  for (const issue of collect.structural?.issues || []) {
    add({
      cardId: issue.id || "STRUCT",
      field: issue.field || "structure",
      severity: issue.severity === "critical" ? "CRITICAL" : "HIGH",
      category: "STUDY_STRUCTURE",
      pairedGermanText: issue.de || "",
      current: issue.message,
      proposedNew: "",
      reason: issue.message,
      validationStatus: "REAL",
    });
  }

  for (const issue of collect.lvRemnants?.issues || []) {
    const cardId = issue.id;
    const { value } = readCurrentFromWords(words, cardId, issue.path?.replace(/^entry\[\d+\]\./, "study.") || "lv");
    add({
      cardId,
      field: issue.path || "lv",
      severity: "HIGH",
      category: "FOREIGN_REMNANT",
      pairedGermanText: "",
      current: issue.text || value || "",
      proposedNew: "",
      reason: `Svešvalodas atlikums (${issue.kind || "LV"})`,
      validationStatus: "REAL",
    });
  }

  for (const issue of collect.sectionAccents?.issues || []) {
    add({
      cardId: issue.id,
      field: issue.path || `study.sectionAccents.${issue.section || "?"}`,
      severity: issue.severity === "high" ? "HIGH" : "MEDIUM",
      category: "SECTION_ACCENT",
      pairedGermanText: issue.de || "",
      current: issue.term || issue.message,
      proposedNew: issue.suggested || "",
      reason: issue.message || "sectionAccents neatbilstība",
      validationStatus: "REAL",
    });
  }

  const b1Validate = validateStudy?.perFile?.find((f) => f.file === PRODUCTION_PATH);
  for (const issue of b1Validate?.examples?.sectionAccentIssues || []) {
    add({
      cardId: issue.id || `b1-${issue.de}`,
      field: `study.sectionAccents.${issue.section}.${issue.field}`,
      severity: "MEDIUM",
      category: "SECTION_ACCENT",
      pairedGermanText: issue.de || "",
      current: issue.term,
      proposedNew: "",
      reason: `Accent term "${issue.term}" nav atrodams sadaļā ${issue.section}`,
      validationStatus: "REAL",
    });
  }

  for (const issue of collect.technical?.issues || []) {
    add({
      cardId: issue.id,
      field: issue.path || "lv",
      severity: issue.severity === "critical" ? "CRITICAL" : "HIGH",
      category: "ORTHOGRAPHY",
      pairedGermanText: "",
      current: issue.text || "",
      proposedNew: "",
      reason: issue.message,
      validationStatus: "REAL",
    });
  }

  return findings;
}

function mergeLunaFindings(lunaData) {
  const findings = [];
  let seq = 1;
  const raw = lunaData.qualityFindings?.length ? lunaData.qualityFindings : lunaData.findings || [];
  for (const f of raw) {
    if (f.status === "PASS") continue;
    const validationStatus = mapValidationStatus(f);
    if (validationStatus === "FALSE_POSITIVE") continue;
    findings.push({
      id: `ES-B1-LUNA-${String(seq++).padStart(4, "0")}`,
      source: "gpt-5.6-luna",
      level: "B1",
      cardId: f.cardId,
      field: f.field || "lv",
      severity: f.severity || "MEDIUM",
      category: mapCategory(f.category),
      pairedGermanText: f.pairedGermanText || f.de || "",
      current: f.currentEs || "",
      proposedNew: f.proposedEs || "",
      reason: f.reason || "",
      validationStatus,
    });
  }
  return findings;
}

function consolidateOwnerObjects(findings, words) {
  const byTarget = new Map();
  for (const f of findings) {
    if (f.validationStatus === "FALSE_POSITIVE") continue;
    const key = `B1|${f.cardId}|${f.field}`;
    if (!byTarget.has(key)) {
      byTarget.set(key, { ...f, findingIds: [f.id] });
      continue;
    }
    const existing = byTarget.get(key);
    existing.findingIds.push(f.id);
    const proposals = new Set([existing.proposedNew, f.proposedNew].filter(Boolean));
    if (proposals.size > 1) {
      existing.validationStatus = "OWNER_REVIEW_REQUIRED";
      existing.reason = `${existing.reason}; konflikts: ${f.reason}`;
    } else if (!existing.proposedNew && f.proposedNew) {
      existing.proposedNew = f.proposedNew;
    }
    if (f.severity === "CRITICAL") existing.severity = "CRITICAL";
    else if (f.severity === "HIGH" && existing.severity !== "CRITICAL") existing.severity = "HIGH";
  }

  const owners = [];
  let seq = 1;
  for (const [, row] of byTarget) {
    const { value } = readCurrentFromWords(words, row.cardId, row.field);
    const current = value !== undefined ? value : row.current;
    owners.push({
      id: `ES-DE-B1-OWNER-${String(seq++).padStart(4, "0")}`,
      findingIds: row.findingIds,
      level: "B1",
      cardId: row.cardId,
      field: row.field,
      current: typeof current === "object" ? JSON.stringify(current) : String(current ?? ""),
      pairedGermanText: row.pairedGermanText || "",
      category: row.category,
      severity: mapSeverity(row.severity),
      reason: row.reason,
      proposedNew: row.proposedNew || "",
      validationStatus: row.validationStatus,
      ownerStatus: "PĀRSKATĪT",
      new: null,
    });
  }
  return owners;
}

function countBy(items, key) {
  const out = {};
  for (const item of items) {
    const k = item[key] || "UNKNOWN";
    out[k] = (out[k] || 0) + 1;
  }
  return out;
}

function buildSummaryMd(ctx) {
  return [
    "# ES–DE B1 — audita kopsavilkums",
    "",
    `**Verdict:** **${ctx.verdict}**`,
    `**HEAD:** \`${ctx.head}\``,
    `**MASTER:** \`${MASTER_FILE}\` v${MASTER_VERSION}`,
    `**Kartītes:** ${ctx.totalCards}`,
    `**Study:** ${ctx.studyCount} (standardStudy ${ctx.standardStudy}, minimalStudy ${ctx.minimalStudy})`,
    `**Luna coverage:** ${ctx.lunaCoverage}`,
    `**Raw findings:** ${ctx.rawFindings}`,
    `**Validated REAL:** ${ctx.realCount}`,
    `**OWNER_REVIEW_REQUIRED:** ${ctx.reviewCount}`,
    `**FALSE_POSITIVE:** ${ctx.falsePositiveCount}`,
    `**SOURCE_DE_ISSUE:** ${ctx.sourceDeCount}`,
    `**Unikālie OWNER objekti:** ${ctx.ownerCount}`,
    "",
    "Pilns audits: `reports/es-de-b1-full-audit.md`",
    "OWNER skats: `reports/es-de-b1-full-audit-owner-view.md`",
    "",
  ].join("\n");
}

function buildFullMd(ctx) {
  const lines = [
    "# ES–DE B1 pilns lingvistiskais audits (MASTER v1.9 FIRST_FULL_DISCOVERY)",
    "",
    `**HEAD:** \`${ctx.head}\``,
    `**Standards:** \`${MASTER_FILE}\` v${MASTER_VERSION}`,
    `**Production changes:** **0** · **DE changes:** **0**`,
    "",
    "## 1. Kopsavilkums",
    "",
    "| Metrika | Vērtība |",
    "|---------|--------:|",
    `| Kartītes | **${ctx.totalCards}** |`,
    `| Study | **${ctx.studyCount}** |`,
    `| Luna model | **${ctx.lunaModel}** |`,
    `| Luna coverage | **${ctx.lunaCoverage}** |`,
    `| API batches | **${ctx.batchCount}** |`,
    `| Failed batches | **${ctx.failedBatches}** |`,
    `| Retry batches | **${ctx.retryBatches}** |`,
    `| Raw findings | **${ctx.rawFindings}** |`,
    `| REAL | **${ctx.realCount}** |`,
    `| OWNER_REVIEW_REQUIRED | **${ctx.reviewCount}** |`,
    `| FALSE_POSITIVE | **${ctx.falsePositiveCount}** |`,
    `| SOURCE_DE_ISSUE | **${ctx.sourceDeCount}** |`,
    `| Unikālie OWNER | **${ctx.ownerCount}** |`,
    `| Mirror | **${ctx.mirror}** |`,
    `| Syntax | **${ctx.syntax}** |`,
    "",
    `## **Verdict: ${ctx.verdict}**`,
    "",
    "## 2. Severity sadalījums (OWNER objekti)",
    "",
    ...Object.entries(ctx.severityBreakdown).map(([k, v]) => `- ${k}: **${v}**`),
    "",
    "## 3. Kategoriju sadalījums (OWNER objekti)",
    "",
    ...Object.entries(ctx.categoryBreakdown).map(([k, v]) => `- ${k}: **${v}**`),
    "",
    "## 4. Metodoloģija",
    "",
    "| Rīks | Komanda |",
    "|------|---------|",
    "| Kolektors | `node scripts/audit-es-b1-collect.js` |",
    "| Luna | `node scripts/audit-es-b1-linguistic.js` |",
    "| Orķestrators | `node scripts/run-es-de-b1-full-audit.js` |",
    "| Validācija | `node scripts/validate-es-de-b1-full-audit.js` |",
    "",
  ];
  return lines.join("\n");
}

async function main() {
  console.log("\n=== ES–DE B1 FIRST FULL DISCOVERY (MASTER v1.9) ===\n");
  const head = git("git rev-parse HEAD");
  if (!head.startsWith(EXPECTED_HEAD)) {
    console.warn(`Note: HEAD ${head} (expected prefix ${EXPECTED_HEAD})`);
  }

  fs.mkdirSync(path.join(ROOT, "reports/temp"), { recursive: true });
  runNode("audit-es-b1-collect.js");

  execSync("node --check data/es/b1.js", { cwd: ROOT, stdio: "pipe" });
  execSync("node --check www/data/es/b1.js", { cwd: ROOT, stdio: "pipe" });

  const validate = spawnSync("node", [path.join(ROOT, "scripts/validate-study-design.js"), "--lang=es"], {
    cwd: ROOT,
    encoding: "utf8",
    maxBuffer: 32 * 1024 * 1024,
  });
  const validateStudy = JSON.parse(validate.stdout || "{}");

  if (FRESH_LUNA) {
    const progress = path.join(ROOT, "scripts/.es-de-b1-luna-progress.json");
    if (fs.existsSync(progress)) fs.unlinkSync(progress);
    if (fs.existsSync(LUNA_JSON)) fs.unlinkSync(LUNA_JSON);
  }

  if (!SKIP_LUNA) {
    if (!process.env.OPENAI_API_KEY?.trim()) throw new Error("OPENAI_API_KEY required");
    const lunaArgs = [];
    if (TEST_LUNA) lunaArgs.push("--test-batch");
    else if (!FRESH_LUNA) lunaArgs.push("--resume");
    if (FRESH_LUNA) lunaArgs.push("--fresh");
    runNode("audit-es-b1-linguistic.js", lunaArgs);
  }

  const collect = loadJson(COLLECT_JSON, {});
  const lunaData = loadJson(LUNA_JSON, { findings: [], qualityFindings: [], meta: {} });
  const { es } = buildCards();

  const detFindings = mergeDeterministicFindings(collect, validateStudy, es);
  const lunaFindings = SKIP_LUNA ? [] : mergeLunaFindings(lunaData);
  const allFindings = [...detFindings, ...lunaFindings];

  const falsePositiveCount = allFindings.filter((f) => f.validationStatus === "FALSE_POSITIVE").length;
  const reviewCount = allFindings.filter((f) => f.validationStatus === "OWNER_REVIEW_REQUIRED").length;
  const sourceDeCount = allFindings.filter((f) => f.validationStatus === "SOURCE_DE_ISSUE").length;
  const realFindings = allFindings.filter((f) => f.validationStatus === "REAL");
  const ownerObjects = consolidateOwnerObjects(allFindings, es);

  const standardStudy = es.filter((e) => e.study?.layout === "standardStudy" || (e.study && e.study.layout !== "minimalStudy")).length;
  const minimalStudy = es.filter((e) => e.study?.layout === "minimalStudy").length;
  const studyCount = es.filter((e) => e.study).length;
  const lunaCoverage = lunaData.meta?.coverage || (SKIP_LUNA ? "skipped" : "0%");
  const cardsAudited = lunaData.meta?.cardsAudited || (SKIP_LUNA ? 0 : 0);

  const coverageComplete = SKIP_LUNA ? false : lunaCoverage === "100%" && cardsAudited === TOTAL_CARDS;
  const mirrorPass = isSyncedWithWww(PRODUCTION_PATH);
  let verdict = "AUDIT INCOMPLETE";
  if (!coverageComplete && !SKIP_LUNA) verdict = "AUDIT INCOMPLETE";
  else if (ownerObjects.length > 0 || realFindings.length > 0) verdict = "READY FOR OWNER REVIEW";
  else if (coverageComplete && mirrorPass) verdict = "READY FOR OWNER REVIEW";

  const payload = {
    meta: {
      head,
      masterFile: MASTER_FILE,
      masterVersion: MASTER_VERSION,
      auditMode: "FIRST_FULL_DISCOVERY",
      totalCards: TOTAL_CARDS,
      studyCount,
      standardStudy,
      minimalStudy,
      lunaModel: lunaData.meta?.model || "gpt-5.6-luna",
      lunaCoverage,
      cardsAudited,
      batchCount: lunaData.meta?.batchCount || 0,
      failedBatches: lunaData.meta?.failedBatches || 0,
      retryBatches: lunaData.meta?.retryBatches || 0,
      readOnly: true,
      productionChanges: 0,
      deChanges: 0,
      mirror: mirrorPass ? "PASS" : "FAIL",
      syntax: "PASS",
      verdict,
    },
    counts: {
      rawFindings: allFindings.length,
      real: realFindings.length,
      ownerReviewRequired: reviewCount,
      falsePositive: falsePositiveCount,
      sourceDeIssue: sourceDeCount,
      ownerObjects: ownerObjects.length,
      consolidatedDuplicates: allFindings.length - ownerObjects.length,
    },
    severityBreakdown: countBy(ownerObjects, "severity"),
    categoryBreakdown: countBy(ownerObjects, "category"),
    findings: allFindings,
    ownerObjects,
    luna: lunaData.meta || {},
    collect: {
      structuralPass: collect.structural?.pass,
      layerIdentity: collect.layerIdentity?.identical,
      lvRemnants: collect.lvRemnants?.issues?.length || 0,
      sectionAccents: collect.sectionAccents?.issues?.length || 0,
    },
  };

  fs.writeFileSync(OUT_JSON, JSON.stringify(payload, null, 2) + "\n");
  fs.writeFileSync(
    OUT_SUMMARY,
    buildSummaryMd({
      verdict,
      head,
      totalCards: TOTAL_CARDS,
      studyCount,
      standardStudy,
      minimalStudy,
      lunaCoverage,
      rawFindings: allFindings.length,
      realCount: realFindings.length,
      reviewCount,
      falsePositiveCount,
      sourceDeCount,
      ownerCount: ownerObjects.length,
    }),
  );
  fs.writeFileSync(
    OUT_MD,
    buildFullMd({
      verdict,
      head,
      totalCards: TOTAL_CARDS,
      studyCount,
      standardStudy,
      minimalStudy,
      lunaModel: payload.meta.lunaModel,
      lunaCoverage,
      batchCount: payload.meta.batchCount,
      failedBatches: payload.meta.failedBatches,
      retryBatches: payload.meta.retryBatches,
      rawFindings: allFindings.length,
      realCount: realFindings.length,
      reviewCount,
      falsePositiveCount,
      sourceDeCount,
      ownerCount: ownerObjects.length,
      mirror: mirrorPass ? "PASS" : "FAIL",
      syntax: "PASS",
      severityBreakdown: payload.severityBreakdown,
      categoryBreakdown: payload.categoryBreakdown,
    }),
  );

  runNode("build-es-de-b1-full-audit-owner-source.js");
  runNode("build-es-de-b1-full-audit-owner-view.js");
  if (coverageComplete) runNode("validate-es-de-b1-full-audit.js");

  console.log(`\nWrote ${OUT_MD}`);
  console.log(`VERDICT: ${verdict}`);
  console.log(JSON.stringify(payload.counts, null, 2));

  if (!coverageComplete && !SKIP_LUNA) process.exit(1);
}

main().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
