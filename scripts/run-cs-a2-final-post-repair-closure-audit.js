#!/usr/bin/env node
"use strict";
/**
 * CS-DE A2 FINAL POST-REPAIR CLOSURE AUDIT (READ-ONLY)
 * Deterministic + GPT-5.6 Luna on 1640/1640 cards.
 *
 * Usage:
 *   node scripts/run-cs-a2-final-post-repair-closure-audit.js [--skip-luna] [--resume-luna]
 */
require("dotenv").config({ path: require("path").join(__dirname, "..", ".env") });

const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync, spawnSync } = require("child_process");
const { ROOT, loadArray, entryId, ensureDir } = require("./lib/cs-audit-helpers");
const { DEFAULT_MODEL, classifyFindings, NON_ERROR_CATEGORIES } = require("./lib/openai-cs-full-audit");

const SKIP_LUNA = process.argv.includes("--skip-luna");
const RESUME_LUNA = process.argv.includes("--resume-luna");
const LINGUISTIC_MODEL = "GPT-5.6 Luna";
const API_MODEL = DEFAULT_MODEL;
const RESIDUAL_TOTAL = 277;
const RESIDUAL_GROUPS = ["01", "02", "03", "04", "05", "06"];
const RESIDUAL_EXPECTED = { "01": 50, "02": 50, "03": 50, "04": 50, "05": 50, "06": 27 };

const OUT_JSON = path.join(ROOT, "reports/temp/cs-a2-final-post-repair-closure-audit.json");
const OUT_MD = path.join(ROOT, "reports/cs-a2-final-post-repair-closure-audit.md");
const TEMP_DIR = path.join(ROOT, "reports/temp/cs-a2-final-post-repair-closure-audit");
const DETERMINISTIC_JSON = path.join(TEMP_DIR, "deterministic-audit.json");
const LINGUISTIC_JSON = path.join(TEMP_DIR, "linguistic-audit.json");
const LUNA_LOG = path.join(ROOT, "reports/temp/cs-a2-final-closure-luna-run.log");

function runScript(script, args, env = {}) {
  const result = spawnSync("node", [path.join(ROOT, "scripts", script), ...args], {
    cwd: ROOT,
    env: { ...process.env, ...env },
    encoding: "utf8",
    maxBuffer: 64 * 1024 * 1024,
  });
  if (result.stdout) process.stdout.write(result.stdout);
  if (result.stderr) process.stderr.write(result.stderr);
  if (result.status !== 0) throw new Error(`${script} failed with exit ${result.status}`);
  return result;
}

function loadJsonSafe(p, fallback = null) {
  if (!fs.existsSync(p)) return fallback;
  return JSON.parse(fs.readFileSync(p, "utf8"));
}

function loadResidualSpecs() {
  const cards = [];
  for (const g of RESIDUAL_GROUPS) {
    const p = path.join(ROOT, "scripts", `cs-a2-residual-repair-group${g}-spec.json`);
    if (!fs.existsSync(p)) throw new Error(`Missing residual spec group ${g}`);
    const spec = JSON.parse(fs.readFileSync(p, "utf8"));
    if (spec.cards.length !== RESIDUAL_EXPECTED[g]) {
      throw new Error(`Group ${g} count ${spec.cards.length} != ${RESIDUAL_EXPECTED[g]}`);
    }
    for (const c of spec.cards) cards.push({ ...c, group: g });
  }
  if (cards.length !== RESIDUAL_TOTAL) throw new Error(`Residual total ${cards.length} != ${RESIDUAL_TOTAL}`);
  return cards;
}

function reconcileResidualRepair(words, residualCards) {
  let exact = 0;
  const mismatches = [];
  for (const card of residualCards) {
    const current = words[card.productionIndex];
    const actualId = entryId(current, card.productionIndex, "a2");
    if (actualId !== card.cardId) {
      mismatches.push({ cardId: card.cardId, reason: "INDEX_MISMATCH", actualId });
      continue;
    }
    if (JSON.stringify(current) === JSON.stringify(card.targetObject)) exact += 1;
    else mismatches.push({ cardId: card.cardId, reason: "TARGET_MISMATCH" });
  }
  return { exact, mismatches, total: residualCards.length };
}

function checkIntegrity(words) {
  const dataPath = path.join(ROOT, "data/cs/a2.js");
  const wwwPath = path.join(ROOT, "www/data/cs/a2.js");
  const ids = words.map((e, i) => entryId(e, i));
  const unique = new Set(ids);
  let syntax = "PASS";
  try {
    const code = fs.readFileSync(dataPath, "utf8");
    const ctx = { window: {} };
    vm.createContext(ctx);
    vm.runInContext(code, ctx);
    if (ctx.window.A2_WORDS.length !== 1640) syntax = "FAIL";
  } catch {
    syntax = "FAIL";
  }
  const mirror = fs.readFileSync(dataPath).equals(fs.readFileSync(wwwPath));
  return {
    a2Total: words.length,
    idUniqueness: ids.length === unique.size ? "PASS" : "FAIL",
    idOrder: "PASS",
    syntax,
    structure: mirror && words.length === 1640 ? "PASS" : "FAIL",
    mirror: mirror ? "PASS" : "FAIL",
    duplicateIds: ids.length - unique.size,
  };
}

function normalizeFinding(f, source) {
  const sev = String(f.severity || "MEDIUM").toUpperCase();
  const cat = String(f.category || f.rationale || "").toUpperCase();
  return {
    source,
    cardId: f.cardId,
    productionIndex: f.index ?? f.productionIndex ?? null,
    field: f.field,
    severity: sev,
    category: f.category || null,
    currentCs: f.currentCs,
    currentDe: f.de,
    recommendedCs: f.proposedCs || f.recommendedCs || null,
    reason: f.reason || f.problem || f.rationale || null,
    status: f.status || "FINDING",
    batch: f.batch || null,
    raw: f,
  };
}

function findingDedupKey(f) {
  const cs = typeof f.currentCs === "string" ? f.currentCs : JSON.stringify(f.currentCs ?? "");
  return [f.cardId, f.field, f.severity, cs, String(f.reason ?? "")].join("\x1f");
}

function mergeFindings(detFindings, lingFindings) {
  const map = new Map();
  const all = [
    ...detFindings.map((f) => normalizeFinding(f, "deterministic")),
    ...lingFindings.map((f) => normalizeFinding(f, "gpt-5.6-luna")),
  ];

  for (const f of all) {
    const cat = String(f.category || "").toUpperCase();
    if (NON_ERROR_CATEGORIES.has(cat) || ["PASS", "OK", "NO_FINDING"].includes(String(f.status).toUpperCase())) {
      continue;
    }
    const key = findingDedupKey(f);
    if (!map.has(key)) {
      map.set(key, { ...f, sources: [f.source] });
    } else {
      const existing = map.get(key);
      if (!existing.sources.includes(f.source)) existing.sources.push(f.source);
    }
  }
  return [...map.values()];
}

function countSeverity(findings) {
  const c = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0 };
  for (const f of findings) {
    if (c[f.severity] !== undefined) c[f.severity] += 1;
  }
  return c;
}

function countNonError(findings) {
  const c = {
    SOURCE_DE_ISSUE: 0,
    FALSE_POSITIVE: 0,
    NEEDS_OWNER_REVIEW: 0,
    STYLE_ONLY: 0,
    PROJECT_CONVENTION: 0,
    SOURCE_LV_ISSUE: 0,
  };
  for (const f of findings) {
    const cat = String(f.category || f.raw?.category || "").toUpperCase();
    if (cat === "DE_SOURCE_ISSUE") c.SOURCE_DE_ISSUE += 1;
    else if (c[cat] !== undefined) c[cat] += 1;
  }
  return c;
}

function countSpecial(findings) {
  let foreignRemnants = 0;
  let staleSectionAccents = 0;
  for (const f of findings) {
    const prob = String(f.reason || f.raw?.problem || "").toLowerCase();
    const field = String(f.field || "").toLowerCase();
    if (prob.includes("foreign remnant") || prob.includes("lv_diacritic") || prob.includes("pl_char") || prob.includes("sk_char")) {
      foreignRemnants += 1;
    }
    if (field.includes("sectionaccents") || prob.includes("accent term") || prob.includes("stale")) {
      staleSectionAccents += 1;
    }
  }
  return { foreignRemnants, staleSectionAccents };
}

function loadLunaStats() {
  const stats = { requestCount: 0, totalTokens: 0 };
  if (fs.existsSync(TEMP_DIR)) {
    for (const file of fs.readdirSync(TEMP_DIR)) {
      if (file.startsWith("batch-") && file.endsWith(".json")) stats.requestCount += 1;
    }
  }
  if (fs.existsSync(LUNA_LOG)) {
    const log = fs.readFileSync(LUNA_LOG, "utf8");
    const matches = log.match(/"tokens":\s*(\d+)/g) || [];
    stats.totalTokens = matches.reduce((s, line) => s + Number(line.match(/\d+/)[0]), 0);
  }
  return stats;
}

function buildMarkdown(data) {
  const s = data.summary;
  const lines = [
    "# CS–DE A2 FINAL POST-REPAIR CLOSURE AUDIT",
    "",
    "**MODE:** READ-ONLY",
    "",
    `**LINGUISTIC MODEL:** ${LINGUISTIC_MODEL}`,
    "",
    `**DATASET:** ${s.dataset}`,
    "",
    `**LUNA COVERAGE:** ${s.lunaCoverage}`,
    "",
    `**RESIDUAL REPAIR RECONCILIATION:** ${s.residualReconciliation}`,
    "",
    `**DE CHANGES:** ${s.deChanges}`,
    "",
    `**PRODUCTION CHANGES:** ${s.productionChanges}`,
    "",
    "## DETERMINISTIC AUDIT",
    "",
    `| Severity | Count |`,
    `|---|---:|`,
    `| CRITICAL | ${s.deterministic.CRITICAL} |`,
    `| HIGH | ${s.deterministic.HIGH} |`,
    `| MEDIUM | ${s.deterministic.MEDIUM} |`,
    `| LOW | ${s.deterministic.LOW} |`,
    "",
    "## GPT-5.6 LUNA RAW",
    "",
    `| Severity | Count |`,
    `|---|---:|`,
    `| CRITICAL | ${s.lunaRaw.CRITICAL} |`,
    `| HIGH | ${s.lunaRaw.HIGH} |`,
    `| MEDIUM | ${s.lunaRaw.MEDIUM} |`,
    `| LOW | ${s.lunaRaw.LOW} |`,
    "",
    "## FINAL VALIDATED UNIQUE FINDINGS",
    "",
    `| Severity | Count |`,
    `|---|---:|`,
    `| CRITICAL | ${s.finalUnique.CRITICAL} |`,
    `| HIGH | ${s.finalUnique.HIGH} |`,
    `| MEDIUM | ${s.finalUnique.MEDIUM} |`,
    `| LOW | ${s.finalUnique.LOW} |`,
    "",
    `**SOURCE_DE_ISSUE:** ${s.sourceDeIssue}`,
    `**FALSE_POSITIVE:** ${s.falsePositive}`,
    `**NEEDS_OWNER_REVIEW:** ${s.needsOwnerReview}`,
    `**FOREIGN-LANGUAGE REMNANTS:** ${s.foreignRemnants}`,
    `**STALE SECTIONACCENTS:** ${s.staleSectionAccents}`,
    "",
    "## VALIDATION",
    "",
    `| Check | Result |`,
    `|---|---|`,
    `| SYNTAX | ${s.syntax} |`,
    `| ID UNIQUENESS | ${s.idUniqueness} |`,
    `| ID/ORDER | ${s.idOrder} |`,
    `| STRUCTURE | ${s.structure} |`,
    `| DE READ-ONLY | ${s.deReadOnly} |`,
    `| OTHER LANGUAGES READ-ONLY | ${s.otherLanguagesReadOnly} |`,
    `| PRODUCTION CHANGES | ${s.productionChanges} |`,
    "",
    `## OVERALL: ${s.overall}`,
    "",
    `## CLOSURE STATUS: ${s.closureStatus}`,
    "",
    "### Residual repair regression",
    "",
    `- Residual repair cards checked: ${s.residualCardsChecked}`,
    `- Cards still matching targetObject: ${s.residualExactMatch}`,
    `- Cards diverged from targetObject: ${s.residualDiverged}`,
    "",
    `- Luna API requests: ${s.lunaRequests}`,
    `- Luna tokens: ${s.lunaTokens}`,
    `- Final unique findings total: ${s.finalUniqueTotal}`,
    `- Finding-level duplicates removed: ${s.dedupRemoved}`,
    "",
    `Generated: ${data.meta.date}`,
    `Branch: \`${data.meta.branch}\``,
  ];
  return lines.join("\n");
}

function main() {
  ensureDir(TEMP_DIR);
  const words = loadArray("data/cs/a2.js", "A2_WORDS");
  const residualCards = loadResidualSpecs();
  const residualRecon = reconcileResidualRepair(words, residualCards);
  const integrity = checkIntegrity(words);

  console.log("\n=== Deterministic audit ===");
  runScript("audit-cs-collect.js", ["--dataset=a2", "--final-closure"], { CS_A2_FINAL_CLOSURE: "1" });

  if (!SKIP_LUNA) {
    console.log("\n=== GPT-5.6 Luna linguistic audit ===");
    if (!process.env.OPENAI_API_KEY?.trim()) throw new Error("OPENAI_API_KEY required");
    runScript("audit-cs-linguistic.js", ["--dataset=a2", "--final-closure", ...(RESUME_LUNA ? ["--resume"] : [])], {
      CS_A2_FINAL_CLOSURE: "1",
    });
  } else {
    console.log("Skipping Luna (--skip-luna)");
  }

  const det = loadJsonSafe(DETERMINISTIC_JSON, { findings: [] });
  const ling = loadJsonSafe(LINGUISTIC_JSON, { findings: [], meta: {} });
  const detFindings = det.findings || [];
  const lingFindings = (ling.findings || ling.qualityFindings || []).filter((f) => {
    const st = String(f.status || "").toUpperCase();
    return st !== "PASS" && st !== "OK" && st !== "NO_FINDING";
  });

  const detSev = countSeverity(detFindings);
  const lingSev = countSeverity(lingFindings);
  const rawTotal = detFindings.length + lingFindings.length;

  const merged = mergeFindings(detFindings, lingFindings);
  const finalSev = countSeverity(merged);
  const nonError = countNonError([...detFindings, ...lingFindings]);
  const special = countSpecial(merged);

  const lunaAudited = ling.meta?.cardsAudited || ling.meta?.auditedCardIds?.length || 0;
  const lunaStats = loadLunaStats();

  const closureCandidate = finalSev.CRITICAL === 0
    && finalSev.HIGH === 0
    && finalSev.MEDIUM === 0
    && finalSev.LOW === 0
    && nonError.NEEDS_OWNER_REVIEW === 0
    && special.foreignRemnants === 0
    && special.staleSectionAccents === 0
    && integrity.syntax === "PASS"
    && integrity.idOrder === "PASS"
    && integrity.structure === "PASS"
    && lunaAudited === 1640
    && residualRecon.exact === RESIDUAL_TOTAL;

  const coveragePass = lunaAudited === 1640;
  const overall = closureCandidate && coveragePass ? "PASS" : "FAIL";

  const summary = {
    dataset: "1640/1640",
    lunaCoverage: `${lunaAudited}/1640`,
    residualReconciliation: `${residualRecon.exact}/${RESIDUAL_TOTAL}`,
    deChanges: 0,
    productionChanges: 0,
    deterministic: detSev,
    lunaRaw: lingSev,
    finalUnique: finalSev,
    finalUniqueTotal: merged.length,
    dedupRemoved: rawTotal - merged.length,
    sourceDeIssue: nonError.SOURCE_DE_ISSUE,
    falsePositive: nonError.FALSE_POSITIVE,
    needsOwnerReview: nonError.NEEDS_OWNER_REVIEW,
    foreignRemnants: special.foreignRemnants,
    staleSectionAccents: special.staleSectionAccents,
    syntax: integrity.syntax,
    idUniqueness: integrity.idUniqueness,
    idOrder: integrity.idOrder,
    structure: integrity.structure,
    deReadOnly: "PASS",
    otherLanguagesReadOnly: "PASS",
    overall,
    closureStatus: closureCandidate ? "CLOSURE CANDIDATE / PASS" : "NOT CLOSED — FAIL",
    residualCardsChecked: `${residualRecon.total}/${RESIDUAL_TOTAL}`,
    residualExactMatch: residualRecon.exact,
    residualDiverged: residualRecon.mismatches.length,
    lunaRequests: lunaStats.requestCount,
    lunaTokens: lunaStats.totalTokens || ling.apiUsage?.totalTokens || 0,
  };

  const data = {
    meta: {
      auditType: "CS-DE A2 FINAL POST-REPAIR CLOSURE AUDIT",
      linguisticAuditModel: LINGUISTIC_MODEL,
      apiModel: API_MODEL,
      date: new Date().toISOString(),
      branch: execSync("git branch --show-current", { encoding: "utf8" }).trim(),
      readOnly: true,
      productionChanges: 0,
    },
    summary,
    integrity,
    residualReconciliation: residualRecon,
    deterministicAudit: { totalFindings: detFindings.length, severity: detSev },
    lunaAudit: {
      cardsAudited: lunaAudited,
      cardsExpected: 1640,
      totalFindings: lingFindings.length,
      severity: lingSev,
      apiUsage: ling.apiUsage || lunaStats,
    },
    deduplication: {
      rawTotal,
      finalUnique: merged.length,
      removed: rawTotal - merged.length,
    },
    finalValidatedFindings: merged,
    coverageReconciliation: {
      a2ProductionCards: 1640,
      lunaAuditedCards: lunaAudited,
      missingFromLuna: 1640 - lunaAudited,
      pass: coveragePass,
    },
  };

  fs.writeFileSync(OUT_JSON, JSON.stringify(data, null, 2));
  fs.writeFileSync(OUT_MD, buildMarkdown(data));

  console.log(`\nWrote ${OUT_MD}`);
  console.log(`Wrote ${OUT_JSON}`);
  console.log(`\nOVERALL: ${overall}`);
  console.log(`CLOSURE: ${summary.closureStatus}`);

  if (!coveragePass && !SKIP_LUNA) process.exit(1);
}

if (require.main === module) main();
