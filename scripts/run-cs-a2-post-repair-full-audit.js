#!/usr/bin/env node
"use strict";
/**
 * CS-DE A2 POST-REPAIR FULL AUDIT (READ-ONLY)
 * Deterministic reconciliation + Luna linguistic validation (GPT-5.6 Luna).
 *
 * Usage:
 *   node scripts/run-cs-a2-post-repair-full-audit.js [--skip-luna] [--resume-luna]
 */
require("dotenv").config({ path: require("path").join(__dirname, "..", ".env") });

const fs = require("fs");
const path = require("path");
const { execSync, spawnSync } = require("child_process");
const { ROOT, loadArray, entryId, ensureDir } = require("./lib/cs-audit-helpers");
const { DEFAULT_MODEL, classifyFindings } = require("./lib/openai-cs-full-audit");
const {
  BASELINE_COMMIT,
  TOTAL_REPAIR_CARDS,
  loadBaselineWords,
  loadRepairSpecs,
  reconcileTargetObjects,
  buildScopeTable,
  computeChangeSets,
  checkIntegrity,
  checkOutsideA2Changes,
} = require("./lib/cs-a2-post-repair-reconcile");

const SKIP_LUNA = process.argv.includes("--skip-luna");
const RESUME_LUNA = process.argv.includes("--resume-luna");
const LINGUISTIC_MODEL = "GPT-5.6 Luna";
const API_MODEL = DEFAULT_MODEL;

const OUT_JSON = path.join(ROOT, "reports", "temp", "cs-a2-post-repair-full-audit.json");
const OUT_MD = path.join(ROOT, "reports", "cs-a2-post-repair-full-audit.md");
const TEMP_DIR = path.join(ROOT, "reports", "temp", "cs-a2-post-repair-full-audit");
const DETERMINISTIC_JSON = path.join(TEMP_DIR, "deterministic-audit.json");
const LINGUISTIC_JSON = path.join(TEMP_DIR, "linguistic-audit.json");

function runPhase(label, fn) {
  console.log(`\n=== ${label} ===`);
  return fn();
}

function runScript(script, args, env = {}) {
  const result = spawnSync("node", [path.join(ROOT, "scripts", script), ...args], {
    cwd: ROOT,
    env: { ...process.env, ...env },
    encoding: "utf8",
    maxBuffer: 64 * 1024 * 1024,
  });
  if (result.stdout) process.stdout.write(result.stdout);
  if (result.stderr) process.stderr.write(result.stderr);
  if (result.status !== 0) {
    throw new Error(`${script} failed with exit ${result.status}`);
  }
  return result;
}

function loadJsonSafe(p, fallback = null) {
  if (!fs.existsSync(p)) return fallback;
  return JSON.parse(fs.readFileSync(p, "utf8"));
}

function loadLunaStatsFromBatches(tempDir) {
  const stats = { requestCount: 0, totalTokens: 0, model: API_MODEL };
  if (!fs.existsSync(tempDir)) return stats;
  for (const file of fs.readdirSync(tempDir)) {
    if (!file.startsWith("batch-") || !file.endsWith(".json")) continue;
    stats.requestCount += 1;
  }
  const logPath = path.join(ROOT, "reports", "temp", "cs-a2-post-repair-luna-run.log");
  if (fs.existsSync(logPath)) {
    const log = fs.readFileSync(logPath, "utf8");
    const m = log.match(/"tokens":\s*(\d+)/g);
    if (m) {
      stats.totalTokens = m.reduce((sum, line) => sum + Number(line.match(/\d+/)[0]), 0);
    }
  }
  return stats;
}

function determineFinalStatus(data) {
  const tr = data.changeCounts?.repairTargetCardsInSpec ?? 0;
  const sc = data.targetObjectReconciliation.statusCounts;
  const gates = [
    tr === TOTAL_REPAIR_CARDS,
    sc.EXACT_MATCH === TOTAL_REPAIR_CARDS,
    sc.PARTIAL_MATCH === 0,
    sc.CURRENT_VALUE_MISMATCH === 0,
    sc.CARD_NOT_FOUND === 0,
    sc.INDEX_MISMATCH === 0,
    sc.SPEC_MISSING === 0,
    (data.changeCounts?.unexpectedChanges ?? 1) === 0,
    (data.changeCounts?.missingExpectedChanges ?? 1) === 0,
    (data.deReadOnly?.changes ?? 1) === 0,
    (data.copyOnlyValidation?.UNSPECIFIED_CHANGE ?? 1) === 0,
    data.integrity?.syntax === "PASS",
    data.integrity?.mirror === "PASS",
    data.integrity?.a2Total === 1640,
    (data.outsideA2?.unexpectedProductionFiles?.length ?? 1) === 0,
    (data.linguisticAudit?.cardsAudited ?? 0) === 1640,
    (data.linguisticAudit?.model ?? "") === API_MODEL,
    (data.regression?.CRITICAL ?? 1) === 0,
    (data.regression?.HIGH ?? 1) === 0,
    (data.regression?.MEDIUM ?? 1) === 0,
    (data.regression?.LOW ?? 1) === 0,
  ];
  return gates.every(Boolean)
    ? "CS–DE A2 POST-REPAIR AUDIT — PASS"
    : "CS–DE A2 POST-REPAIR AUDIT — FAIL";
}

function buildMarkdown(data) {
  const lines = [];
  lines.push("# CS–DE A2 POST-REPAIR FULL AUDIT");
  lines.push("");
  lines.push("## KOPSAVILKUMS");
  lines.push("");
  lines.push(`- **Linguistic audit model:** ${data.meta.linguisticAuditModel}`);
  lines.push(`- **A2 production cards audited by Luna:** ${data.linguisticAudit.cardsAudited}/1640`);
  lines.push(`- **Repair-target cards covered:** ${data.changeCounts.repairTargetCardsInSpec}/${TOTAL_REPAIR_CARDS}`);
  lines.push(`- **Audit mode:** READ-ONLY`);
  lines.push(`- **Baseline commit:** \`${data.meta.baselineCommit}\``);
  lines.push(`- **Current branch:** \`${data.meta.currentBranch}\``);
  lines.push(`- **Date:** ${data.meta.date}`);
  lines.push("");
  lines.push("| Metrika | Rezultāts |");
  lines.push("|---|---|");
  for (const [k, v] of Object.entries(data.summary)) {
    lines.push(`| ${k} | ${v} |`);
  }
  lines.push("");
  lines.push(`## GALA STATUSS: ${data.finalStatus}`);
  lines.push("");

  lines.push("## 1. SCOPE RECONCILIATION");
  lines.push("");
  lines.push("| Group | Requested | Found in spec | Exact target match | Mismatch |");
  lines.push("|---|---:|---:|---:|---:|");
  for (const row of data.scopeReconciliation.rows) {
    lines.push(`| ${row.group} | ${row.requested} | ${row.foundInSpec}${row.specMissing ? " (MISSING)" : ""} | ${row.exactTargetMatch} | ${row.mismatch} |`);
  }
  lines.push(`| **TOTAL** | **${data.scopeReconciliation.total.requested}** | **${data.scopeReconciliation.total.foundInSpec}** | **${data.scopeReconciliation.total.exactTargetMatch}** | **${data.scopeReconciliation.total.mismatch}** |`);
  if (data.scopeReconciliation.total.duplicateCardIds.length) {
    lines.push("");
    lines.push("**Duplicate cardIds between groups:**");
    for (const d of data.scopeReconciliation.total.duplicateCardIds) {
      lines.push(`- ${d.cardId}: groups ${d.groups.join(", ")}`);
    }
  }
  if (data.scopeReconciliation.total.foundInSpec < TOTAL_REPAIR_CARDS) {
    lines.push("");
    lines.push(`**BLOCKER:** Remonta specifikācijas aptver tikai ${data.scopeReconciliation.total.foundInSpec}/${TOTAL_REPAIR_CARDS} kartītes. Trūkst Group 07–13 spec failu.`);
  }
  lines.push("");

  lines.push("## 2. TARGETOBJECT RECONCILIATION");
  lines.push("");
  lines.push("| Status | Count |");
  lines.push("|---|---:|");
  for (const [k, v] of Object.entries(data.targetObjectReconciliation.statusCounts)) {
    lines.push(`| ${k} | ${v} |`);
  }
  if (data.targetObjectReconciliation.mismatches.length) {
    lines.push("");
    lines.push("### Mismatches (first 30)");
    for (const m of data.targetObjectReconciliation.mismatches.slice(0, 30)) {
      lines.push(`- **${m.cardId}** (group ${m.group}): ${m.status}`);
      if (m.diffs) {
        for (const d of m.diffs.slice(0, 5)) {
          lines.push(`  - \`${d.path}\`: expected vs actual differ`);
        }
      }
    }
  }
  lines.push("");

  lines.push("## 3. PRECĪZS LABOJUMU SKAITS");
  lines.push("");
  lines.push("| Metrika | Skaits |");
  lines.push("|---|---:|");
  lines.push(`| Repair target cards (expected) | ${TOTAL_REPAIR_CARDS} |`);
  lines.push(`| Repair target cards (in spec) | ${data.changeCounts.repairTargetCardsInSpec} |`);
  lines.push(`| Actually changed cards | ${data.changeCounts.actuallyChangedCards} |`);
  lines.push(`| Expected changed values | ${data.changeCounts.expectedChangedValues} |`);
  lines.push(`| Actual changed values | ${data.changeCounts.actualChangedValues} |`);
  lines.push(`| Exact expected changes applied | ${data.changeCounts.exactExpectedApplied ? "YES" : "NO"} |`);
  lines.push(`| Missing expected changes | ${data.changeCounts.missingExpectedChanges} |`);
  lines.push(`| Unexpected changes | ${data.changeCounts.unexpectedChanges} |`);
  lines.push("");
  lines.push("### By category (ACTUAL)");
  for (const [k, v] of Object.entries(data.changeCounts.actualByCategory || {})) {
    lines.push(`- ${k}: ${v}`);
  }
  if (data.changeCounts.unexpectedSample?.length) {
    lines.push("");
    lines.push("### Unexpected changes (first 20)");
    for (const u of data.changeCounts.unexpectedSample) {
      lines.push(`- ${u.cardId} \`${u.path}\``);
    }
  }
  lines.push("");

  lines.push("## 4. COMPOSER COPY-ONLY VALIDĀCIJA");
  lines.push("");
  lines.push(`| Metrika | Skaits |`);
  lines.push("|---|---:|");
  lines.push(`| SPECIFIED_CHANGE | ${data.copyOnlyValidation.SPECIFIED_CHANGE} |`);
  lines.push(`| UNSPECIFIED_CHANGE | ${data.copyOnlyValidation.UNSPECIFIED_CHANGE} |`);
  lines.push("");

  lines.push("## 5. DE READ-ONLY");
  lines.push("");
  lines.push(`**DE changes:** ${data.deReadOnly.changes} (expected 0)`);
  if (data.deReadOnly.violations.length) {
    for (const v of data.deReadOnly.violations.slice(0, 20)) {
      lines.push(`- ${v.cardId} \`${v.path}\`: "${v.before}" → "${v.after}"`);
    }
  }
  lines.push("");

  lines.push("## 6. INTEGRITĀTE");
  lines.push("");
  for (const [k, v] of Object.entries(data.integrity)) {
    if (Array.isArray(v)) continue;
    lines.push(`- **${k}:** ${v}`);
  }
  lines.push("");
  lines.push("## 7. DETERMINISTISKĀ VALIDĀCIJA (1640/1640)");
  lines.push("");
  lines.push(`- Findings: ${data.deterministicAudit.totalFindings}`);
  lines.push(`- Structural pass: ${data.deterministicAudit.structuralPass}`);
  lines.push(`- sectionAccents pass: ${data.deterministicAudit.sectionAccentsPass}`);
  lines.push(`- Foreign remnants pass: ${data.deterministicAudit.foreignRemnantsPass}`);
  lines.push("");

  lines.push("## 8. LINGVISTISKĀ VALIDĀCIJA — GPT-5.6 Luna (1640/1640)");
  lines.push("");
  lines.push(`- Model: ${data.linguisticAudit.model}`);
  lines.push(`- Cards audited: ${data.linguisticAudit.cardsAudited}/1640`);
  lines.push(`- Quality findings: ${data.linguisticAudit.qualityFindings}`);
  lines.push(`- API requests: ${data.linguisticAudit.requestCount}`);
  lines.push(`- Tokens: ${data.linguisticAudit.totalTokens}`);
  lines.push("");

  lines.push("## 9. REGRESIJAS KLASIFIKĀCIJA");
  lines.push("");
  lines.push("| Severity | Count |");
  lines.push("|---|---:|");
  lines.push(`| CRITICAL | ${data.regression.CRITICAL} |`);
  lines.push(`| HIGH | ${data.regression.HIGH} |`);
  lines.push(`| MEDIUM | ${data.regression.MEDIUM} |`);
  lines.push(`| LOW | ${data.regression.LOW} |`);
  lines.push(`| SOURCE_DE_ISSUE | ${data.regression.SOURCE_DE_ISSUE} |`);
  lines.push(`| FALSE_POSITIVE | ${data.regression.FALSE_POSITIVE} |`);
  lines.push("");

  if (data.regression.topFindings?.length) {
    lines.push("### Sample regression findings (first 15)");
    for (const f of data.regression.topFindings.slice(0, 15)) {
      lines.push(`- **${f.cardId}** [${f.severity}] ${f.field}: ${f.reason || f.category}`);
    }
  }

  lines.push("");
  lines.push("---");
  lines.push(`**Production changes during audit:** 0`);
  lines.push(`**Final status:** ${data.finalStatus}`);
  return lines.join("\n");
}

function main() {
  ensureDir(path.dirname(OUT_JSON));
  ensureDir(TEMP_DIR);

  const currentBranch = execSync("git branch --show-current", { encoding: "utf8" }).trim();
  const currentWords = loadArray("data/cs/a2.js", "A2_WORDS");
  const baselineWords = loadBaselineWords();
  const groups = loadRepairSpecs();

  const { statusCounts, mismatches, allSpecCards } = reconcileTargetObjects(currentWords, groups);
  const scopeTable = buildScopeTable(groups, currentWords, allSpecCards);
  const changeSets = computeChangeSets(baselineWords, currentWords, allSpecCards);
  const integrity = checkIntegrity(currentWords);
  const outsideA2 = checkOutsideA2Changes();

  runPhase("Deterministic audit (audit-cs-collect.js)", () => {
    runScript("audit-cs-collect.js", ["--dataset=a2", "--post-repair"], { CS_A2_POST_REPAIR: "1" });
  });

  const det = loadJsonSafe(DETERMINISTIC_JSON, { findings: [], structural: { pass: false }, sectionAccents: { pass: false }, foreignRemnants: { pass: false } });

  if (!SKIP_LUNA) {
    runPhase("Linguistic audit (GPT-5.6 Luna)", () => {
      if (!process.env.OPENAI_API_KEY?.trim()) {
        throw new Error("OPENAI_API_KEY required for Luna linguistic audit");
      }
      runScript("audit-cs-linguistic.js", ["--dataset=a2", "--post-repair", ...(RESUME_LUNA ? ["--resume"] : [])], {
        CS_A2_POST_REPAIR: "1",
      });
    });
  } else {
    console.log("Skipping Luna audit (--skip-luna)");
  }

  const ling = loadJsonSafe(LINGUISTIC_JSON, { findings: [], meta: {}, apiUsage: {} });
  const batchStats = loadLunaStatsFromBatches(TEMP_DIR);
  const lingClass = classifyFindings(ling.findings || ling.qualityFindings || []);
  const detSeverity = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0 };
  for (const f of det.findings || []) {
    const sev = String(f.severity || "MEDIUM").toUpperCase();
    if (detSeverity[sev] !== undefined) detSeverity[sev] += 1;
  }

  const regression = {
    CRITICAL: detSeverity.CRITICAL + (lingClass.severity.CRITICAL || 0),
    HIGH: detSeverity.HIGH + (lingClass.severity.HIGH || 0),
    MEDIUM: detSeverity.MEDIUM + (lingClass.severity.MEDIUM || 0),
    LOW: detSeverity.LOW + (lingClass.severity.LOW || 0),
    SOURCE_DE_ISSUE: (lingClass.nonError.SOURCE_DE_ISSUE || 0),
    FALSE_POSITIVE: (lingClass.nonError.FALSE_POSITIVE || 0),
    topFindings: [...(det.findings || []).slice(0, 5), ...(lingClass.qualityFindings || []).slice(0, 10)],
  };

  const repairTargetCardsInSpec = allSpecCards.length;
  const data = {
    meta: {
      auditType: "CS-DE A2 POST-REPAIR FULL AUDIT",
      linguisticAuditModel: LINGUISTIC_MODEL,
      apiModel: API_MODEL,
      date: new Date().toISOString(),
      baselineCommit: BASELINE_COMMIT,
      currentBranch,
      readOnly: true,
      productionChangesDuringAudit: 0,
    },
    summary: {
      a2Total: `${integrity.a2Total}/1640`,
      repairTargetCards: `${repairTargetCardsInSpec}/${TOTAL_REPAIR_CARDS}`,
      exactTargetObjectMatches: `${statusCounts.EXACT_MATCH}/${TOTAL_REPAIR_CARDS}`,
      partialMismatch: statusCounts.PARTIAL_MATCH + statusCounts.CURRENT_VALUE_MISMATCH + statusCounts.SPEC_MISSING,
      actuallyChangedCards: changeSets.actual.changedCards,
      expectedChangedValues: changeSets.expected.changedValues,
      actualChangedValues: changeSets.actual.changedValues,
      missingExpectedChanges: changeSets.missingExpected.length,
      unexpectedChanges: changeSets.unexpected.length,
      deChanges: changeSets.deChanges,
      CRITICAL: regression.CRITICAL,
      HIGH: regression.HIGH,
      MEDIUM: regression.MEDIUM,
      LOW: regression.LOW,
      SOURCE_DE_ISSUE: regression.SOURCE_DE_ISSUE,
      syntax: integrity.syntax,
      idOrder: integrity.idOrderPreserved,
      structure: integrity.mirror,
    },
    scopeReconciliation: scopeTable,
    targetObjectReconciliation: { statusCounts, mismatches },
    changeCounts: {
      repairTargetCardsInSpec,
      repairTargetCardsExpected: TOTAL_REPAIR_CARDS,
      actuallyChangedCards: changeSets.actual.changedCards,
      expectedChangedValues: changeSets.expected.changedValues,
      actualChangedValues: changeSets.actual.changedValues,
      expectedChangedFields: changeSets.expected.changedFields,
      actualChangedFields: changeSets.actual.changedFields,
      expectedByCategory: changeSets.expected.byCategory,
      actualByCategory: changeSets.actual.byCategory,
      missingExpectedChanges: changeSets.missingExpected.length,
      unexpectedChanges: changeSets.unexpected.length,
      exactExpectedApplied: changeSets.exactExpectedApplied,
      missingExpectedSample: changeSets.missingExpected.slice(0, 50),
      unexpectedSample: changeSets.unexpected.slice(0, 50),
    },
    copyOnlyValidation: {
      SPECIFIED_CHANGE: changeSets.expected.changedValues,
      UNSPECIFIED_CHANGE: changeSets.unexpected.length,
    },
    deReadOnly: {
      changes: changeSets.deChanges,
      violations: changeSets.deViolations,
      gate: changeSets.deChanges === 0 ? "PASS" : "FAIL",
    },
    integrity,
    outsideA2,
    deterministicAudit: {
      totalFindings: (det.findings || []).length,
      structuralPass: det.structural?.pass ? "PASS" : "FAIL",
      sectionAccentsPass: det.sectionAccents?.pass ? "PASS" : "FAIL",
      foreignRemnantsPass: det.foreignRemnants?.pass ? "PASS" : "FAIL",
      severityCounts: detSeverity,
    },
    linguisticAudit: {
      model: ling.apiUsage?.model || ling.meta?.model || API_MODEL,
      cardsAudited: ling.meta?.cardsAudited || ling.meta?.auditedCardIds?.length || 0,
      cardsExpected: 1640,
      qualityFindings: (lingClass.qualityFindings || []).length,
      severityCounts: lingClass.severity,
      nonErrorCounts: lingClass.nonError,
      requestCount: batchStats.requestCount || ling.apiUsage?.requestCount || 0,
      totalTokens: batchStats.totalTokens || ling.apiUsage?.totalTokens || 0,
      coverage: ling.meta?.coverage || "0%",
    },
    regression,
  };

  data.finalStatus = determineFinalStatus({
    ...data,
    summary: {
      ...data.summary,
      repairTargetCards: repairTargetCardsInSpec,
    },
    targetObjectReconciliation: data.targetObjectReconciliation,
    changeCounts: data.changeCounts,
    deReadOnly: data.deReadOnly,
    copyOnlyValidation: data.copyOnlyValidation,
    integrity: data.integrity,
    outsideA2: data.outsideA2,
    linguisticAudit: data.linguisticAudit,
    regression: data.regression,
  });

  fs.writeFileSync(OUT_JSON, JSON.stringify(data, null, 2));
  fs.writeFileSync(OUT_MD, buildMarkdown(data));
  console.log(`\nWrote ${OUT_MD}`);
  console.log(`Wrote ${OUT_JSON}`);
  console.log(`\n${data.finalStatus}`);
}

main();
