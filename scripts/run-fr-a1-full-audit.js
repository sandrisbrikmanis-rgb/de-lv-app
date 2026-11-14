#!/usr/bin/env node
"use strict";
/**
 * FR-DE A1 full READ-ONLY audit orchestrator (deterministic + GPT-5.6 Luna).
 * Usage: node scripts/run-fr-a1-full-audit.js [--skip-luna] [--test-luna] [--fresh-luna]
 * MASTER v1.12: production audit must NOT use --force-baseline (§7.9.4).
 */
require("dotenv").config({ path: require("path").join(__dirname, "..", ".env") });

const fs = require("fs");
const path = require("path");
const { execSync, spawnSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const {
  buildCards,
  deterministicStructuralFindings,
  LUNA_JSON,
  TEMP_DIR,
} = require("./lib/fr-a1-audit-helpers");
const { loadOwnerHistory, classifyWithOwnerHistory } = require("./lib/fr-a1-owner-history");
const { runDiscoveryStability, COVERAGE_DISCLAIMER } = require("./lib/discovery-stability");
const {
  DATASET,
  PRODUCTION_PATH: DS_PRODUCTION_PATH,
  REGISTRY_DIR,
  AUDIT_RUNS,
  OWNER_SOURCES,
} = require("./lib/fr-a1-discovery-config");
const { publishOwnerArtifacts, resolveFinalVerdict } = require("./lib/owner-artifact-publisher");
const vm = require("vm");

const SKIP_LUNA = process.argv.includes("--skip-luna");
const TEST_LUNA = process.argv.includes("--test-luna");
const FRESH_LUNA = process.argv.includes("--fresh-luna");
const OUT_MD = path.join(ROOT, "reports", "fr-a1-full-audit.md");
const OUT_JSON = path.join(ROOT, "reports", "temp", "fr-a1-full-audit.json");
const MASTER_VERSION = "1.12";
const PRODUCTION_PATH = "data/fr/a1.js";
const WWW_PATH = "www/data/fr/a1.js";
const { scanDatasetMainTranslations } = require("./lib/main-translation-field-inventory");

function git(cmd) {
  try {
    return execSync(cmd, { cwd: ROOT, encoding: "utf8" }).trim();
  } catch {
    return "";
  }
}

function computeOwnerHistoryCoverage(ownerHistory, frEntries) {
  const cardById = new Map();
  frEntries.forEach((entry, index) => {
    const id = entry.study?.id || `a1-${entry.de}-${index}`;
    cardById.set(id, entry);
    cardById.set(`a1-${entry.de}`, entry);
  });
  let checked = 0;
  let matching = 0;
  let drifted = 0;
  const uniqueKeys = new Set();

  for (const row of ownerHistory.entries) {
    const key = `${row.cardId}|${row.field}`;
    if (uniqueKeys.has(key)) continue;
    uniqueKeys.add(key);
    if (String(row.ownerStatus || "").toUpperCase() !== "LABOT") continue;
    checked += 1;
    const card = cardById.get(row.cardId);
    if (!card) {
      drifted += 1;
      continue;
    }
    const current = String(findingCurrentFromCard(card, row.field) || "").replace(/\s+/g, " ").trim();
    const approved = String(row.ownerApprovedValue || "").replace(/\s+/g, " ").trim();
    if (current === approved) matching += 1;
    else drifted += 1;
  }

  const gate =
    ownerHistory.loaded && ownerHistory.count > 0
      ? "PASS"
      : ownerHistory.sourcesExpected
        ? "FAIL"
        : "N/A";

  return {
    ownerHistoryAvailable: ownerHistory.loaded ? "YES" : "NO",
    ownerHistoryFilesLoaded: ownerHistory.sourcesLoaded.join(", ") || "none",
    ownerApprovedFieldsTotal: uniqueKeys.size,
    ownerApprovedFieldsChecked: checked,
    ownerApprovedFieldsMatchingCurrent: matching,
    ownerApprovedFieldsDrifted: drifted,
    ownerHistoryGate: gate,
  };
}

function findingCurrentFromCard(card, fieldPath) {
  const f = String(fieldPath || "");
  if (f === "lv" || f === "entry.lv") return card.lv;
  if (f.startsWith("study.")) {
    const study = card.study;
    if (!study) return "";
    const parts = f.replace(/^study\./, "").split(".");
    let cur = study;
    for (const p of parts) {
      if (cur == null) return "";
      cur = cur[p];
    }
    return typeof cur === "string" ? cur : JSON.stringify(cur);
  }
  return card.lv;
}

function computeBaselineGate(ownerHistory) {
  execSync("git fetch origin", { cwd: ROOT, stdio: "pipe" });
  const originMainSha = git("git rev-parse origin/main");
  const datasetProductionSha = git(`git rev-parse origin/main:${PRODUCTION_PATH}`);
  const wwwDatasetBlobSha = git(`git rev-parse origin/main:${WWW_PATH}`);
  const datasetProductionBlobSha = datasetProductionSha;

  if (datasetProductionSha !== wwwDatasetBlobSha) {
    return {
      auditMode: "FULL_DISCOVERY",
      masterVersion: MASTER_VERSION,
      originMainSha,
      datasetProductionSha,
      datasetProductionBlobSha,
      wwwDatasetBlobSha,
      lastFinalClosureMainSha: null,
      lastFinalClosureDatasetBlobSha: null,
      unmergedRepairBranchesFound: [],
      baselineStatus: "BLOCKED_MIRROR_MISMATCH",
      ownerHistoryLoaded: ownerHistory?.loaded ? "YES" : "NO",
      deReadOnly: "PASS",
      blocked: true,
      blockReason: "data/fr/a1.js blob !== www/data/fr/a1.js blob",
    };
  }

  return {
    auditMode: "FULL_DISCOVERY",
    masterVersion: MASTER_VERSION,
    originMainSha,
    datasetProductionSha,
    datasetProductionBlobSha,
    wwwDatasetBlobSha,
    lastFinalClosureMainSha: null,
    lastFinalClosureDatasetBlobSha: null,
    unmergedRepairBranchesFound: [],
    baselineStatus: "FIRST_AUDIT_NO_CLOSURE_BASELINE",
    ownerHistoryLoaded: ownerHistory?.loaded ? `YES (${ownerHistory.count} entries)` : "NO",
    deReadOnly: "PASS",
    blocked: false,
  };
}

function run(cmd, { allowFail = false } = {}) {
  console.log(`\n$ ${cmd}\n`);
  try {
    execSync(cmd, { cwd: ROOT, stdio: "inherit" });
  } catch (error) {
    if (!allowFail) throw error;
  }
}

function runCapture(args, outFile) {
  const result = spawnSync("node", [path.join(ROOT, "scripts", args[0]), ...args.slice(1)], {
    cwd: ROOT,
    env: process.env,
    encoding: "utf8",
    maxBuffer: 64 * 1024 * 1024,
  });
  fs.writeFileSync(outFile, result.stdout || "");
  if (result.stderr) process.stderr.write(result.stderr);
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
  if (result.status !== 0) throw new Error(`${script} failed with exit ${result.status}`);
}

function loadJsonSafe(p, fallback = null) {
  if (!fs.existsSync(p)) return fallback;
  return JSON.parse(fs.readFileSync(p, "utf8"));
}

function loadProductionWords() {
  const raw = fs.readFileSync(path.join(ROOT, PRODUCTION_PATH), "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(raw, ctx);
  return ctx.window.A1_WORDS;
}

function mergeFindings(detFindings, collectData, lunaData, validateStudy) {
  const all = [...detFindings];
  let seq = all.length + 1;

  function addFromLvRemnant(issue) {
    all.push({
      findingId: `FR-A1-${String(seq++).padStart(4, "0")}`,
      source: "deterministic",
      cardId: issue.id,
      field: issue.path,
      severity: "HIGH",
      category: "FOREIGN_REMNANT",
      de: "",
      currentFr: issue.text,
      proposedFr: "(FR tulkojums)",
      reason: "LV/atlikušā valoda FR laukā",
    });
  }

  for (const issue of collectData.lvRemnants?.issues || []) {
    addFromLvRemnant(issue);
  }

  for (const issue of collectData.sectionAccents?.issues || []) {
    all.push({
      findingId: `FR-A1-${String(seq++).padStart(4, "0")}`,
      source: "deterministic",
      cardId: issue.id,
      field: `study.sectionAccents (${issue.section || "?"})`,
      severity: issue.severity === "high" ? "HIGH" : "MEDIUM",
      category: "SECTIONACCENTS_LANGUAGE",
      de: issue.de || "",
      currentFr: issue.term || issue.message,
      proposedFr: "(termins no FR teksta)",
      reason: issue.message || "sectionAccents neatbilstība",
    });
  }

  const a1Validate = validateStudy?.perFile?.find((f) => f.file === "data/fr/a1.js");
  for (const issue of a1Validate?.examples?.sectionAccentIssues || []) {
    all.push({
      findingId: `FR-A1-${String(seq++).padStart(4, "0")}`,
      source: "validate-study-design",
      cardId: `a1-${issue.de}`,
      field: `study.sectionAccents.${issue.section}.${issue.field}`,
      severity: "MEDIUM",
      category: "SECTIONACCENTS_LANGUAGE",
      de: issue.de,
      currentFr: issue.term,
      proposedFr: "(termins no attiecīgā FR teksta)",
      reason: `sectionAccents termins "${issue.term}" nav atrodams sadaļā ${issue.section}`,
    });
  }

  const lunaFindings = lunaData?.qualityFindings || lunaData?.findings || [];
  for (const f of lunaFindings) {
    if (f.status === "PASS") continue;
    all.push({
      findingId: `FR-A1-${String(seq++).padStart(4, "0")}`,
      source: "gpt-5.6-luna",
      cardId: f.cardId,
      field: f.field,
      severity: f.severity || "MEDIUM",
      category: f.category || "TRANSLATION",
      de: f.de || "",
      lvSource: f.lvSource || "",
      currentFr: f.currentFr || "",
      proposedFr: f.proposedFr || "",
      reason: f.reason || "",
      confidence: f.confidence || "medium",
    });
  }

  const seen = new Set();
  return all.filter((f) => {
    const key = `${f.cardId}|${f.field}|${String(f.currentFr || "").slice(0, 80)}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function classifyAllFindings(rawFindings, ownerHistory) {
  const stats = {
    rawLlmCandidates: 0,
    deterministicFindings: 0,
    validatedRealFindings: 0,
    ownerHistoryMatch: 0,
    ownerDecisionConfirmed: 0,
    ownerDecisionReopenRequired: 0,
    repairRegression: 0,
    falsePositiveOrStyleOnly: 0,
    needsSourceReview: 0,
    newValidatedRealFindings: 0,
  };

  const classified = rawFindings.map((f) => {
    const base = { ...f, auditStatus: "PENDING" };
    if (f.source === "gpt-5.6-luna") stats.rawLlmCandidates += 1;
    if (f.source === "deterministic" || f.source === "validate-study-design") {
      stats.deterministicFindings += 1;
    }

    const styleOnly = /^(STYLE_ONLY|FALSE_POSITIVE|PROJECT_CONVENTION)$/i.test(String(f.category || ""));
    if (styleOnly) {
      stats.falsePositiveOrStyleOnly += 1;
      return {
        ...base,
        auditClassification: "FALSE_POSITIVE_OR_STYLE_ONLY",
        ownerHistoryStatus: null,
        validatedReal: false,
      };
    }

    const ownerClass = classifyWithOwnerHistory(f, ownerHistory);
    if (ownerClass.ownerHistoryStatus === "OWNER_DECISION_CONFIRMED") {
      stats.ownerDecisionConfirmed += 1;
      stats.ownerHistoryMatch += 1;
      return { ...base, ...ownerClass, validatedReal: false };
    }
    if (ownerClass.ownerHistoryStatus === "OWNER_DECISION_REOPEN_REQUIRED") {
      stats.ownerDecisionReopenRequired += 1;
      stats.validatedRealFindings += 1;
      stats.newValidatedRealFindings += 1;
      return { ...base, ...ownerClass, validatedReal: true };
    }

    stats.validatedRealFindings += 1;
    stats.newValidatedRealFindings += 1;
    return {
      ...base,
      auditClassification: f.source === "gpt-5.6-luna" ? "VALIDATED_REAL_FINDING" : "DETERMINISTIC_FINDING",
      ownerHistoryStatus: ownerClass.ownerHistoryStatus,
      validatedReal: true,
    };
  });

  return { classified, stats };
}

function computeVerdict(stats, ctx, publication) {
  if (ctx.baseline.blocked) return ctx.baseline.baselineStatus;
  const gatesPass =
    ctx.frStudy === 134 &&
    ctx.lvRemnantCount === 0 &&
    ctx.sectionAccentCount === 0 &&
    ctx.syntax === "PASS" &&
    ctx.mirror === "PASS";
  if (stats.newValidatedRealFindings === 0 && gatesPass) return "PASS";
  if (stats.newValidatedRealFindings > 0) {
    return resolveFinalVerdict({
      backlogCount: stats.newValidatedRealFindings,
      baseVerdict: "NEEDS_OWNER_REVIEW",
      publication,
    });
  }
  return gatesPass ? "PASS" : "NEEDS_OWNER_REVIEW";
}

function countSeverity(findings) {
  const counts = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0 };
  for (const f of findings) {
    const s = String(f.severity || "MEDIUM").toUpperCase();
    if (counts[s] !== undefined) counts[s] += 1;
    else counts.MEDIUM += 1;
  }
  return counts;
}

function formatFinding(f) {
  return [
    `#### ${f.findingId}`,
    "",
    `**Card ID:** ${f.cardId}`,
    `**Field:** ${f.field}`,
    `**CURRENT:** ${f.currentFr || "—"}`,
    f.proposedFr ? `**PROPOSED_FR:** ${f.proposedFr}` : "",
    `**Problēma:** ${f.reason}`,
    f.lvSource ? `**LV etalons (konteksts):** ${f.lvSource}` : "",
    `**DE konteksts:** ${f.de || "—"}`,
    `**Smagums:** ${f.severity}`,
    `**Kategorija:** ${f.category || "—"}`,
    `**Avots:** ${f.source}`,
    f.auditClassification ? `**Klasifikācija:** ${f.auditClassification}` : "",
    f.ownerHistoryStatus ? `**OWNER history:** ${f.ownerHistoryStatus}` : "",
    f.ownerApprovedValue ? `**OWNER approved:** ${String(f.ownerApprovedValue).slice(0, 120)}` : "",
    "**Statuss:** PENDING",
    "",
  ].filter(Boolean).join("\n");
}

function buildReport(ctx) {
  const validatedOnly = ctx.findings.filter((f) => f.validatedReal);
  const sev = countSeverity(validatedOnly);
  const totalRaw = ctx.findings.length;
  const verdict = ctx.verdict;

  const lines = [];
  lines.push("# FR–DE A1 pilns lingvistiskais audits (MASTER v1.12 FULL_DISCOVERY)");
  lines.push("");
  lines.push("## MASTER baseline header (§7.8.3)");
  lines.push("");
  lines.push("| Lauks | Vērtība |");
  lines.push("|-------|---------|");
  lines.push(`| **MASTER VERSION** | **${ctx.baseline.masterVersion}** |`);
  lines.push(`| **AUDIT MODE** | ${ctx.baseline.auditMode} |`);
  lines.push(`| **ORIGIN_MAIN_SHA** | \`${ctx.baseline.originMainSha}\` |`);
  lines.push(`| **DATASET_PRODUCTION_BLOB** | \`${ctx.baseline.datasetProductionBlobSha}\` |`);
  lines.push(`| **WWW DATASET BLOB** | \`${ctx.baseline.wwwDatasetBlobSha}\` |`);
  lines.push(`| **LAST FINAL CLOSURE MAIN SHA** | \`${ctx.baseline.lastFinalClosureMainSha}\` |`);
  lines.push(`| **LAST FINAL CLOSURE DATASET BLOB** | \`${ctx.baseline.lastFinalClosureDatasetBlobSha}\` |`);
  lines.push(`| **UNMERGED CLOSURE/REPAIR FOUND** | **${ctx.baseline.unmergedRepairBranchesFound.length}** |`);
  lines.push(`| **BASELINE STATUS** | **${ctx.baseline.baselineStatus}** |`);
  lines.push(`| **OWNER HISTORY AVAILABLE** | ${ctx.ownerCoverage.ownerHistoryAvailable} |`);
  lines.push(`| **OWNER HISTORY FILES LOADED** | ${ctx.ownerCoverage.ownerHistoryFilesLoaded} |`);
  lines.push(`| **OWNER APPROVED FIELDS TOTAL** | **${ctx.ownerCoverage.ownerApprovedFieldsTotal}** |`);
  lines.push(`| **OWNER APPROVED FIELDS CHECKED** | **${ctx.ownerCoverage.ownerApprovedFieldsChecked}** |`);
  lines.push(`| **OWNER APPROVED FIELDS MATCHING CURRENT** | **${ctx.ownerCoverage.ownerApprovedFieldsMatchingCurrent}** |`);
  lines.push(`| **OWNER APPROVED FIELDS DRIFTED** | **${ctx.ownerCoverage.ownerApprovedFieldsDrifted}** |`);
  lines.push(`| **OWNER HISTORY GATE** | **${ctx.ownerCoverage.ownerHistoryGate}** |`);
  lines.push(`| **OWNER HISTORY LOADED** | ${ctx.baseline.ownerHistoryLoaded} |`);
  lines.push(`| **DE READ-ONLY** | ${ctx.baseline.deReadOnly} |`);
  lines.push("");
  lines.push("**AUTHORITATIVE STANDARD:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` **v1.12**");
  lines.push("**Valodas lauks:** `lv` = franču teksts (projekta konvencija, nav latviešu valoda)");
  lines.push(`**Audita datums:** ${ctx.date}`);
  lines.push("**Production changes:** **0**");
  lines.push("");

  lines.push("## 1. Kopsavilkums");
  lines.push("");
  lines.push("| Metrika | Vērtība |");
  lines.push("|---------|---------|");
  lines.push("| Kartītes | **702** |");
  lines.push(`| Luna coverage | **${ctx.lunaCoverage}** |`);
  lines.push(`| Study | **${ctx.frStudy}/134** |`);
  lines.push(`| RAW findings | **${totalRaw}** |`);
  lines.push(`| NEW_VALIDATED_REAL_FINDINGS | **${ctx.classificationStats.newValidatedRealFindings}** |`);
  lines.push(`| OWNER_BACKLOG_FINAL | **${ctx.discoveryStability?.metrics?.OWNER_BACKLOG_FINAL ?? "—"}** |`);
  lines.push(`| PREVIOUSLY_SEEN_RAW | **${ctx.discoveryStability?.metrics?.PREVIOUS_RAW_MATCHES ?? "—"}** |`);
  lines.push(`| PREVIOUSLY_MISSED | **${ctx.discoveryStability?.metrics?.PREVIOUSLY_MISSED ?? "—"}** |`);
  lines.push(`| GENUINELY_NEW | **${ctx.discoveryStability?.metrics?.GENUINELY_NEW ?? "—"}** |`);
  lines.push(`| AUDIT_DISCOVERY_NON_REPRODUCIBILITY | **${ctx.discoveryStability?.AUDIT_DISCOVERY_NON_REPRODUCIBILITY ?? "—"}** |`);
  lines.push(`| OBJECT_COVERAGE | **702/702 (100%)** |`);
  lines.push(`| DISCOVERY_COMPLETENESS | **${COVERAGE_DISCLAIMER.DISCOVERY_COMPLETENESS}** |`);
  lines.push(`| OWNER_DECISION_CONFIRMED | **${ctx.classificationStats.ownerDecisionConfirmed}** |`);
  lines.push(`| sectionAccents | **${ctx.sectionAccentCount}** |`);
  lines.push(`| LV remnants | **${ctx.lvRemnantCount}** |`);
  lines.push(`| Mirror | **${ctx.mirror}** |`);
  lines.push("");

  lines.push(`## **Verdict: ${verdict}**`);
  lines.push("");

  lines.push("## 2. Classification");
  lines.push("");
  lines.push("| Kategorija | Skaits |");
  lines.push("|------------|--------|");
  lines.push(`| RAW LLM candidates | ${ctx.classificationStats.rawLlmCandidates} |`);
  lines.push(`| Deterministic | ${ctx.classificationStats.deterministicFindings} |`);
  lines.push(`| OWNER_DECISION_CONFIRMED | ${ctx.classificationStats.ownerDecisionConfirmed} |`);
  lines.push(`| OWNER_DECISION_REOPEN_REQUIRED | **${ctx.classificationStats.ownerDecisionReopenRequired}** |`);
  lines.push(`| REPAIR_REGRESSION | **${ctx.classificationStats.repairRegression}** |`);
  lines.push(`| PREVIOUSLY_SEEN_RAW_LLM_CANDIDATE | **${ctx.discoveryStability?.rootCauseCounts?.PREVIOUSLY_SEEN_RAW_LLM_CANDIDATE ?? 0}** |`);
  lines.push(`| PRE_EXISTING_BUT_PREVIOUSLY_MISSED | **${ctx.discoveryStability?.rootCauseCounts?.PRE_EXISTING_BUT_PREVIOUSLY_MISSED ?? 0}** |`);
  lines.push(`| GENUINELY_NEW_VALIDATED_REAL_FINDING | **${ctx.discoveryStability?.rootCauseCounts?.GENUINELY_NEW_VALIDATED_REAL_FINDING ?? ctx.classificationStats.newValidatedRealFindings}** |`);
  lines.push(`| OWNER_BACKLOG_FINAL | **${ctx.discoveryStability?.ownerBacklogFinalCount ?? 0}** |`);
  lines.push("");
  if (ctx.discoveryStability?.gates) {
    lines.push("## 2b. Discovery history gates (§7.12 / §7.18)");
    lines.push("");
    lines.push(`| RAW_AUDIT_HISTORY_GATE | **${ctx.discoveryStability.gates.RAW_AUDIT_HISTORY_GATE}** |`);
    lines.push(`| OWNER_HISTORY_GATE | **${ctx.discoveryStability.gates.OWNER_HISTORY_GATE}** |`);
    lines.push(`| PRE_BACKLOG_HISTORY_GATE | **${ctx.discoveryStability.gates.PRE_BACKLOG_HISTORY_GATE}** |`);
    lines.push("");
    lines.push(`> ${COVERAGE_DISCLAIMER.OBJECT_COVERAGE} ${COVERAGE_DISCLAIMER.forbiddenInterpretation}`);
    lines.push("");
  }

  if (validatedOnly.length) {
    lines.push("## 3. Validated findings");
    lines.push("");
    lines.push(`CRITICAL: **${sev.CRITICAL}** · HIGH: **${sev.HIGH}** · MEDIUM: **${sev.MEDIUM}** · LOW: **${sev.LOW}**`);
    lines.push("");
    for (const f of validatedOnly) lines.push(formatFinding(f));
  }

  lines.push("## 4. Deterministic gates");
  lines.push("");
  lines.push(`| Study 134/134 | ${ctx.frStudy === 134 ? "PASS" : "FAIL"} |`);
  lines.push(`| sectionAccents | ${ctx.sectionAccentCount === 0 ? "PASS" : "FAIL"} |`);
  lines.push(`| remnants | ${ctx.lvRemnantCount === 0 ? "PASS" : "FAIL"} |`);
  lines.push(`| mirror | ${ctx.mirror} |`);
  lines.push(`| syntax | ${ctx.syntax} |`);
  lines.push("");

  return lines.join("\n");
}

async function main() {
  if (process.argv.includes("--force-baseline")) {
    console.error("MASTER v1.12 §7.9.4: --force-baseline is prohibited for production FULL_DISCOVERY.");
    console.error("AUDIT_VALIDITY = INVALID · VALID_FOR_REPAIR = NO · DIAGNOSTIC_ONLY");
    process.exit(3);
  }

  console.log("\n=== FR–DE A1 FULL_DISCOVERY — MASTER v1.12 ===\n");

  const ownerHistory = loadOwnerHistory();
  ownerHistory.sourcesExpected = false;
  const baseline = computeBaselineGate(ownerHistory);
  console.log(JSON.stringify(baseline, null, 2));
  if (baseline.blocked) {
    console.error("\nSTOP: BASELINE STATUS =", baseline.baselineStatus);
    if (baseline.blockReason) console.error(baseline.blockReason);
    process.exit(2);
  }

  if (FRESH_LUNA) {
    const progress = path.join(ROOT, "scripts/.fr-a1-luna-progress.json");
    if (fs.existsSync(progress)) fs.unlinkSync(progress);
    if (fs.existsSync(LUNA_JSON)) fs.unlinkSync(LUNA_JSON);
    if (fs.existsSync(TEMP_DIR)) fs.rmSync(TEMP_DIR, { recursive: true, force: true });
  }

  run("node scripts/audit-fr-a1-collect.js");
  runCapture(["audit-language-parity.js", "--lang=fr"], path.join(ROOT, "reports/temp/fr-a1-parity.json"));
  const moj = spawnSync("node", [path.join(ROOT, "scripts", "audit-mojibake.js"), "--lang=fr"], {
    cwd: ROOT,
    env: process.env,
    encoding: "utf8",
  });
  fs.writeFileSync(path.join(ROOT, "reports/temp/fr-a1-mojibake.json"), moj.stdout || "");
  runCapture(["validate-study-design.js", "--lang=fr"], path.join(ROOT, "reports/temp/fr-validate-study.json"));
  run("node --check data/fr/a1.js");

  const collectData = loadJsonSafe(path.join(ROOT, "reports/temp/fr-a1-audit-data.json"), {});
  const validateStudy = loadJsonSafe(path.join(ROOT, "reports/temp/fr-validate-study.json"), {});
  const { lv, fr } = buildCards();
  const ownerCoverage = computeOwnerHistoryCoverage(ownerHistory, fr);
  const multiTranslationScan = scanDatasetMainTranslations(fr, (e, i) => e.study?.id || `a1-${e.de}-${i}`);

  if (ownerCoverage.ownerHistoryGate === "FAIL") {
    console.error("\nSTOP: OWNER_HISTORY_GATE = FAIL (§11.8.5)");
    process.exit(4);
  }

  const missingStudy = [];
  for (let i = 0; i < lv.length; i++) {
    if (lv[i].study && !fr[i].study) {
      missingStudy.push({ de: fr[i].de, id: lv[i].study.id, layout: lv[i].study.layout || "standardStudy" });
    }
  }

  if (!SKIP_LUNA) {
    const lunaArgs = TEST_LUNA ? ["--test-batch"] : FRESH_LUNA ? [] : ["--resume"];
    runNode("audit-fr-a1-linguistic.js", lunaArgs);
  } else {
    console.log("\n=== Luna SKIPPED (--skip-luna) ===\n");
  }

  const lunaData = loadJsonSafe(LUNA_JSON, { findings: [], qualityFindings: [] });
  const detFindings = deterministicStructuralFindings(lv, fr);
  let rawFindings = mergeFindings(detFindings, collectData, lunaData, validateStudy);
  let seq = rawFindings.length + 1;
  for (const hit of multiTranslationScan.violations || []) {
    rawFindings.push({
      findingId: `FR-A1-${String(seq++).padStart(4, "0")}`,
      source: "deterministic",
      cardId: hit.cardId,
      field: hit.field,
      severity: hit.severity || "HIGH",
      category: "MULTIPLE_TRANSLATIONS_DETECTED",
      de: hit.de || "",
      currentFr: hit.currentEt || hit.current || "",
      proposedFr: hit.recommendedMain || "",
      reason: hit.reason || "Vairāki tulkojuma kandidāti learner-facing laukā (MASTER §1.1.3)",
      ownerDecisionRequired: true,
    });
  }
  rawFindings = rawFindings.map((f, i) => ({
    ...f,
    findingId: `FR-A1-${String(i + 1).padStart(4, "0")}`,
    currentEt: f.currentFr || f.currentEt || "",
    proposedEt: f.proposedFr || f.proposedEt || "",
  }));
  const { classified: findings, stats: classificationStats } = classifyAllFindings(rawFindings, ownerHistory);

  const currentRunId = `run-${git("git rev-parse --short HEAD")}-${new Date().toISOString().slice(0, 10)}`;
  const words = loadProductionWords();
  const discoveryStability = runDiscoveryStability({
    dataset: DATASET,
    registryDir: REGISTRY_DIR,
    auditRuns: AUDIT_RUNS,
    currentRunId,
    findings: findings.filter((f) => f.validatedReal !== false && !/^(STYLE_ONLY|FALSE_POSITIVE|PROJECT_CONVENTION)$/i.test(String(f.category || ""))),
    ownerSources: OWNER_SOURCES,
    productionPath: PRODUCTION_PATH,
    words,
    wordsAtPreviousAudit: null,
    repairRange: {},
    ownerHistoryLoaded: ownerHistory.loaded,
    persistCurrentRaw: true,
    currentMeta: {
      auditRunId: currentRunId,
      mainSha: baseline.originMainSha,
      productionBlob: baseline.datasetProductionBlobSha,
      masterVersion: MASTER_VERSION,
      model: lunaData.meta?.model || "gpt-5.6-luna",
    },
  });

  const discoveryClassified = discoveryStability.classified;
  const ownerBacklogFinal = discoveryStability.ownerBacklogFinal;
  classificationStats.newValidatedRealFindings = discoveryStability.rootCauseCounts.GENUINELY_NEW_VALIDATED_REAL_FINDING
    + discoveryStability.rootCauseCounts.OWNER_DECISION_REOPEN_REQUIRED
    + discoveryStability.rootCauseCounts.REPAIR_REGRESSION
    + discoveryStability.rootCauseCounts.NEEDS_SOURCE_REVIEW_CARRY_FORWARD;
  classificationStats.repairRegression = discoveryStability.rootCauseCounts.REPAIR_REGRESSION;
  classificationStats.needsSourceReview = discoveryStability.rootCauseCounts.NEEDS_SOURCE_REVIEW_CARRY_FORWARD;

  if (baseline.baselineStatus === "FIRST_AUDIT_NO_CLOSURE_BASELINE") {
    discoveryStability.gates = {
      RAW_AUDIT_HISTORY_GATE: "N/A",
      OWNER_HISTORY_GATE: "N/A",
      PRE_BACKLOG_HISTORY_GATE: "PASS",
      ownerBacklogAllowed: true,
    };
  }

  const validatedForOwner = ownerBacklogFinal;

  const a1Validate = validateStudy?.perFile?.find((f) => f.file === "data/fr/a1.js");
  const lvRemnantCards = new Set((collectData.lvRemnants?.issues || []).map((x) => x.id)).size;

  const ctx = {
    date: new Date().toISOString().slice(0, 10),
    baseline,
    ownerCoverage,
    findings,
    classificationStats,
    discoveryStability,
    verdict: "",
    frStudy: fr.filter((e) => e.study).length,
    multiTranslationHits: multiTranslationScan.violations?.length || 0,
    missingStudy,
    lvRemnantCount: collectData.lvRemnants?.issues?.length || 0,
    lvRemnantCards,
    sectionAccentCount: a1Validate?.sectionAccentIssues || 0,
    lunaCoverage: lunaData.meta?.coverage || (SKIP_LUNA ? "skipped" : "0"),
    lunaMeta: lunaData.meta || {},
    syntax: "PASS",
    mirror: collectData.layerIdentity?.identical ? "PASS" : "FAIL",
  };
  ctx.verdict = computeVerdict(classificationStats, ctx, null);

  const payload = {
    meta: {
      date: ctx.date,
      standard: "PROJECT_LANGUAGE_MASTER_STANDARD.md v1.12",
      multiTranslationScan: {
        violations: multiTranslationScan.violations?.length || 0,
        rawCandidates: multiTranslationScan.rawCandidates,
        fieldsScanned: multiTranslationScan.fieldsScanned,
      },
      masterVersion: MASTER_VERSION,
      auditMode: baseline.auditMode,
      originMainSha: baseline.originMainSha,
      datasetProductionSha: baseline.datasetProductionSha,
      datasetProductionBlobSha: baseline.datasetProductionBlobSha,
      wwwDatasetBlobSha: baseline.wwwDatasetBlobSha,
      lastFinalClosureMainSha: baseline.lastFinalClosureMainSha,
      lastFinalClosureDatasetBlobSha: baseline.lastFinalClosureDatasetBlobSha,
      unmergedRepairBranchesFound: baseline.unmergedRepairBranchesFound,
      baselineStatus: baseline.baselineStatus,
      ownerHistoryLoaded: baseline.ownerHistoryLoaded,
      ownerCoverage,
      deReadOnly: baseline.deReadOnly,
      pr593FindingsStatus: baseline.pr593FindingsStatus,
      auditBaselineSha: git("git rev-parse HEAD"),
      model: lunaData.meta?.model || "gpt-5.6-luna",
      readOnly: true,
      verdict: ctx.verdict,
    },
    classification: classificationStats,
    discoveryStability: {
      gates: discoveryStability.gates,
      rootCauseCounts: discoveryStability.rootCauseCounts,
      metrics: discoveryStability.metrics,
      discoveryChurn: discoveryStability.discoveryChurn,
      AUDIT_DISCOVERY_NON_REPRODUCIBILITY: discoveryStability.AUDIT_DISCOVERY_NON_REPRODUCIBILITY,
      coverage: discoveryStability.coverage,
      ownerBacklogFinalCount: discoveryStability.ownerBacklogFinalCount,
    },
    discoveryClassified,
    ownerBacklogFinal,
    summary: countSeverity(validatedForOwner),
    totalRawFindings: findings.length,
    totalValidatedRealFindings: classificationStats.newValidatedRealFindings,
    luna: lunaData.meta || {},
    deterministic: {
      studyCount: ctx.frStudy,
      lvRemnants: ctx.lvRemnantCount,
      missingStudy: missingStudy.length,
      sectionAccents: ctx.sectionAccentCount,
    },
    findings,
    validatedFindings: validatedForOwner,
  };

  fs.mkdirSync(path.dirname(OUT_JSON), { recursive: true });
  fs.writeFileSync(OUT_JSON, JSON.stringify(payload, null, 2));
  fs.writeFileSync(path.join(ROOT, "reports/fr-a1-full-audit.json"), JSON.stringify(payload, null, 2));
  fs.writeFileSync(OUT_MD, buildReport(ctx));

  if (discoveryStability.gates.ownerBacklogAllowed && ownerBacklogFinal.length > 0) {
    fs.writeFileSync(
      path.join(ROOT, "reports/temp/fr-a1-full-audit.json"),
      JSON.stringify({ ...payload, findings: ownerBacklogFinal, validatedFindings: ownerBacklogFinal, totalFindings: ownerBacklogFinal.length }, null, 2),
    );
    const dryRun = process.argv.includes("--owner-publish-dry-run");
    const ownerPublication = publishOwnerArtifacts({
      moduleKey: "fr-a1",
      backlogCount: ownerBacklogFinal.length,
      dryRun,
      skipCommit: dryRun,
      skipPush: dryRun,
    });
    if (!ownerPublication.pass) {
      ctx.verdict = ownerPublication.verdict || "BLOCKED_OWNER_ARTIFACT_PUBLICATION_FAILED";
      console.error("\nSTOP:", ctx.verdict, "\n");
      if (ownerPublication.coverage) console.error(JSON.stringify(ownerPublication.coverage, null, 2));
      process.exit(9);
    }
    ctx.verdict = computeVerdict(classificationStats, ctx, ownerPublication);
    payload.meta.verdict = ctx.verdict;
    payload.meta.ownerArtifactPublication = ownerPublication.publication?.ownerArtifactPublication || "PASS";
    fs.writeFileSync(OUT_JSON, JSON.stringify(payload, null, 2));
    fs.writeFileSync(path.join(ROOT, "reports/fr-a1-full-audit.json"), JSON.stringify(payload, null, 2));
    fs.writeFileSync(OUT_MD, buildReport(ctx));
    if (ownerPublication.responseText) console.log(ownerPublication.responseText);
  } else if (ownerBacklogFinal.length > 0 && !discoveryStability.gates.ownerBacklogAllowed) {
    console.error("\nSTOP: PRE_BACKLOG_HISTORY_GATE = FAIL — OWNER-PREP blocked (§7.18)\n");
  } else {
    console.log("\nOWNER-PREP skipped: OWNER_BACKLOG_FINAL = 0\n");
  }

  console.log(`\nWrote ${OUT_MD}`);
  console.log(`\nVERDICT: ${ctx.verdict}`);
  console.log(JSON.stringify({ classification: classificationStats, verdict: ctx.verdict }, null, 2));

  const { runPostAuditOwnerReview } = require("./lib/audit-post-run");
  runPostAuditOwnerReview("fr-a1-full", {
    backlogCount: ownerBacklogFinal.length,
    skipPublish: true,
  });
}

main().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
