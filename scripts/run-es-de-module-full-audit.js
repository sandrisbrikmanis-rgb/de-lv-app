#!/usr/bin/env node
"use strict";
/**
 * ES-DE single-module FIRST FULL DISCOVERY audit orchestrator (MASTER v1.9, READ-ONLY).
 * Usage: node scripts/run-es-de-module-full-audit.js --module=b2|c1|c2|sentences|verbs [--skip-luna] [--test-luna] [--fresh-luna]
 */
require("dotenv").config({ path: require("path").join(__dirname, "..", ".env") });

const fs = require("fs");
const path = require("path");
const { execSync, spawnSync } = require("child_process");
const { ROOT, isSyncedWithWww } = require("./lib/audit-common");
const { parseModuleArg, MASTER_VERSION, MASTER_FILE } = require("./lib/es-de-audit-config");
const {
  buildCards,
  mapSeverity,
  mapCategory,
  resolveCard,
  normalizeFieldPath,
  loadArray,
  vocabEntryId,
} = require("./lib/es-de-audit-helpers");
const { classifyFindings, mapValidationStatus } = require("./lib/openai-es-de-audit");
const { getAt } = require("./lib/da-a1-owner-path");

const cfg = parseModuleArg();
const SKIP_LUNA = process.argv.includes("--skip-luna");
const TEST_LUNA = process.argv.includes("--test-luna");
const FRESH_LUNA = process.argv.includes("--fresh-luna");

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

function readCurrentFromProduction(words, cardId, field) {
  const { entry, cardId: resolvedId } = resolveCard(words, cardId, cfg);
  if (!entry) return { entry: null, value: undefined, cardId: resolvedId };
  const normField = normalizeFieldPath(field);
  if (cfg.type === "sentences") {
    return { entry, value: entry.lv, cardId: resolvedId };
  }
  if (cfg.type === "verbs") {
    if (normField.includes(".")) {
      return { entry, value: getAt(entry, normField), cardId: resolvedId };
    }
    const form = entry[normField];
    return { entry, value: form?.lv, cardId: resolvedId };
  }
  if (normField === "lv") return { entry, value: entry.lv, cardId: resolvedId };
  return { entry, value: getAt(entry, normField), cardId: resolvedId };
}

function mergeDeterministicFindings(collect, validateStudy, words) {
  const findings = [];
  let seq = 1;
  const add = (partial) => {
    findings.push({
      id: `${cfg.findingIdPrefix}-${String(seq++).padStart(4, "0")}`,
      source: partial.source || "deterministic",
      level: cfg.level,
      module: cfg.moduleKey,
      ...partial,
    });
  };

  for (const issue of collect.structural?.issues || []) {
    add({
      cardId: issue.id || "STRUCT",
      field: issue.field || "structure",
      severity: issue.severity === "critical" || issue.severity === "CRITICAL" ? "CRITICAL" : "HIGH",
      category: "STUDY_STRUCTURE",
      pairedGermanText: issue.de || "",
      current: issue.message || issue.problem || "",
      proposedNew: "",
      reason: issue.message || issue.problem || "",
      validationStatus: "REAL",
    });
  }

  for (const issue of collect.lvRemnants?.issues || []) {
    const cardId = issue.id;
    const field = normalizeFieldPath(issue.path);
    const { value } = readCurrentFromProduction(words, cardId, field);
    add({
      cardId,
      field,
      severity: "HIGH",
      category: "FOREIGN_REMNANT",
      pairedGermanText: "",
      current: value !== undefined ? value : issue.text || "",
      proposedNew: "",
      reason: `Svešvalodas atlikums (${issue.kind || "LV"})`,
      validationStatus: "REAL",
    });
  }

  for (const issue of collect.sectionAccents?.issues || []) {
    const field = normalizeFieldPath(issue.path) || `study.sectionAccents.${issue.section || "?"}`;
    const { value } = readCurrentFromProduction(words, issue.id, field);
    add({
      cardId: issue.id,
      field,
      severity: issue.severity === "high" ? "HIGH" : "MEDIUM",
      category: "SECTION_ACCENT",
      pairedGermanText: issue.de || "",
      current: value !== undefined ? (typeof value === "object" ? JSON.stringify(value) : value) : issue.term || issue.message,
      proposedNew: issue.suggested || "",
      reason: issue.message || "sectionAccents neatbilstība",
      validationStatus: "REAL",
    });
  }

  for (const issue of collect.technical?.issues || []) {
    const field = normalizeFieldPath(issue.path);
    const { value } = readCurrentFromProduction(words, issue.id, field);
    add({
      cardId: issue.id,
      field,
      severity: issue.severity === "critical" ? "CRITICAL" : "HIGH",
      category: "ORTHOGRAPHY",
      pairedGermanText: "",
      current: value !== undefined ? value : issue.text || "",
      proposedNew: "",
      reason: issue.message,
      validationStatus: "REAL",
    });
  }

  if (validateStudy && cfg.type === "vocab") {
    const fileValidate = validateStudy?.perFile?.find((f) => f.file === cfg.productionPath);
    for (const issue of fileValidate?.examples?.sectionAccentIssues || []) {
      add({
        cardId: issue.id || `${cfg.idPrefix}-${issue.de}`,
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
  }

  return findings;
}

function normalizeLunaField(field) {
  const f = String(field || "lv");
  if (f === "esText" || f === "esMain") return "lv";
  if (f.startsWith("study.")) return f;
  return f;
}

function mergeLunaFindings(lunaData) {
  const findings = [];
  let seq = 1;
  const raw = lunaData.qualityFindings?.length ? lunaData.qualityFindings : lunaData.findings || [];
  for (const f of raw) {
    if (f.status === "PASS") continue;
    const validationStatus = mapValidationStatus(f);
    if (validationStatus === "FALSE_POSITIVE") continue;
    const field = normalizeLunaField(f.field);
    findings.push({
      id: `${cfg.lunaFindingPrefix}-${String(seq++).padStart(4, "0")}`,
      source: "gpt-5.6-luna",
      level: cfg.level,
      module: cfg.moduleKey,
      cardId: f.cardId,
      field,
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
    const key = `${cfg.moduleKey}|${f.cardId}|${f.field}`;
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
    const field = normalizeFieldPath(row.field);
    const { value, entry, cardId } = readCurrentFromProduction(words, row.cardId, field);
    if (value === undefined && field !== "lv" && cfg.type !== "verbs") continue;
    const current = value !== undefined ? value : row.current;
    owners.push({
      id: `${cfg.ownerIdPrefix}-${String(seq++).padStart(4, "0")}`,
      findingIds: row.findingIds,
      module: cfg.moduleKey,
      level: cfg.level,
      cardId,
      field,
      current: typeof current === "object" ? JSON.stringify(current) : String(current ?? ""),
      pairedGermanText: row.pairedGermanText || entry?.de || "",
      category: row.category,
      severity: mapSeverity(row.severity),
      explanation: row.reason,
      reason: row.reason,
      proposedNew: row.proposedNew || "",
      validationStatus: row.validationStatus,
      sourceFindingIds: row.findingIds,
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
    `# ES–DE ${cfg.moduleKey} — audita kopsavilkums`,
    "",
    `**Verdict:** **${ctx.verdict}**`,
    `**HEAD:** \`${ctx.head}\``,
    `**MASTER:** \`${MASTER_FILE}\` v${MASTER_VERSION}`,
    `**Kartītes:** ${ctx.totalCards}`,
    cfg.studyCount ? `**Study:** ${ctx.studyCount}` : "",
    `**Luna coverage:** ${ctx.lunaCoverage}`,
    `**Raw findings:** ${ctx.rawFindings}`,
    `**Validated REAL:** ${ctx.realCount}`,
    `**OWNER_REVIEW_REQUIRED:** ${ctx.reviewCount}`,
    `**FALSE_POSITIVE:** ${ctx.falsePositiveCount}`,
    `**SOURCE_DE_ISSUE:** ${ctx.sourceDeCount}`,
    `**Unikālie OWNER objekti:** ${ctx.ownerCount}`,
  ]
    .filter(Boolean)
    .concat(["", `Pilns audits: \`reports/${cfg.reportPrefix}.md\``, `OWNER skats: \`reports/${cfg.reportPrefix}-owner-view.md\``, ""])
    .join("\n");
}

function buildFullMd(ctx) {
  return [
    `# ES–DE ${cfg.moduleKey} pilns lingvistiskais audits (MASTER v1.9 FIRST_FULL_DISCOVERY)`,
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
    cfg.studyCount ? `| Study | **${ctx.studyCount}** |` : "",
    `| Luna model | **${ctx.lunaModel}** |`,
    `| Luna coverage | **${ctx.lunaCoverage}** |`,
    `| API batches | **${ctx.batchCount}** |`,
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
  ]
    .filter(Boolean)
    .join("\n");
}

async function main() {
  console.log(`\n=== ES–DE ${cfg.moduleKey} FIRST FULL DISCOVERY (MASTER v1.9) ===\n`);
  const head = git("git rev-parse HEAD");

  fs.mkdirSync(path.join(ROOT, "reports/temp"), { recursive: true });
  runNode("audit-es-de-collect.js", [`--module=${cfg.moduleKey.toLowerCase()}`]);

  execSync(`node --check ${cfg.productionPath}`, { cwd: ROOT, stdio: "pipe" });
  execSync(`node --check ${cfg.wwwPath}`, { cwd: ROOT, stdio: "pipe" });

  let validateStudy = null;
  if (cfg.type === "vocab") {
    const validate = spawnSync("node", [path.join(ROOT, "scripts/validate-study-design.js"), "--lang=es"], {
      cwd: ROOT,
      encoding: "utf8",
      maxBuffer: 32 * 1024 * 1024,
    });
    try {
      validateStudy = JSON.parse(validate.stdout || "{}");
    } catch {
      validateStudy = {};
    }
  }

  if (FRESH_LUNA) {
    if (fs.existsSync(cfg.progressFile)) fs.unlinkSync(cfg.progressFile);
    if (fs.existsSync(cfg.lunaJson)) fs.unlinkSync(cfg.lunaJson);
  }

  if (!SKIP_LUNA) {
    if (!process.env.OPENAI_API_KEY?.trim()) throw new Error("OPENAI_API_KEY required");
    const lunaArgs = [`--module=${cfg.moduleKey.toLowerCase()}`];
    if (TEST_LUNA) lunaArgs.push("--test-batch");
    else if (!FRESH_LUNA) lunaArgs.push("--resume");
    if (FRESH_LUNA) lunaArgs.push("--fresh");
    runNode("audit-es-de-linguistic.js", lunaArgs);
  }

  const collect = loadJson(cfg.collectJson, {});
  const lunaData = loadJson(cfg.lunaJson, { findings: [], qualityFindings: [], meta: {} });
  const built = buildCards(cfg);
  const words = built.es;

  const detFindings = mergeDeterministicFindings(collect, validateStudy, words);
  const lunaFindings = SKIP_LUNA ? [] : mergeLunaFindings(lunaData);
  const allFindings = [...detFindings, ...lunaFindings];

  const falsePositiveCount = allFindings.filter((f) => f.validationStatus === "FALSE_POSITIVE").length;
  const reviewCount = allFindings.filter((f) => f.validationStatus === "OWNER_REVIEW_REQUIRED").length;
  const sourceDeCount = allFindings.filter((f) => f.validationStatus === "SOURCE_DE_ISSUE").length;
  const realFindings = allFindings.filter((f) => f.validationStatus === "REAL");
  const ownerObjects = consolidateOwnerObjects(allFindings, words);

  const studyCount = cfg.type === "vocab" ? words.filter((e) => e.study).length : 0;
  const lunaCoverage = lunaData.meta?.coverage || (SKIP_LUNA ? "skipped" : "0%");
  const cardsAudited = lunaData.meta?.cardsAudited || 0;
  const coverageComplete = SKIP_LUNA ? false : lunaCoverage === "100%" && cardsAudited === cfg.totalCards;
  const mirrorPass = isSyncedWithWww(cfg.productionPath);

  let verdict = "AUDIT INCOMPLETE";
  if (coverageComplete && mirrorPass) verdict = "READY FOR OWNER REVIEW";
  else if (!coverageComplete && !SKIP_LUNA) verdict = "AUDIT INCOMPLETE";

  const payload = {
    meta: {
      head,
      masterFile: MASTER_FILE,
      masterVersion: MASTER_VERSION,
      module: cfg.moduleKey,
      auditMode: "FIRST_FULL_DISCOVERY",
      totalCards: cfg.totalCards,
      studyCount,
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

  fs.writeFileSync(cfg.auditJson, JSON.stringify(payload, null, 2) + "\n");
  fs.writeFileSync(
    cfg.auditSummary,
    buildSummaryMd({
      verdict,
      head,
      totalCards: cfg.totalCards,
      studyCount,
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
    cfg.auditMd,
    buildFullMd({
      verdict,
      head,
      totalCards: cfg.totalCards,
      studyCount,
      lunaModel: payload.meta.lunaModel,
      lunaCoverage,
      batchCount: payload.meta.batchCount,
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

  runNode("build-es-de-module-owner.js", [`--module=${cfg.moduleKey.toLowerCase()}`]);
  if (coverageComplete) runNode("validate-es-de-module-full-audit.js", [`--module=${cfg.moduleKey.toLowerCase()}`]);

  console.log(`\nWrote ${cfg.auditMd}`);
  console.log(`VERDICT: ${verdict}`);
  console.log(JSON.stringify(payload.counts, null, 2));

  if (!coverageComplete && !SKIP_LUNA) process.exit(1);
}

main().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
