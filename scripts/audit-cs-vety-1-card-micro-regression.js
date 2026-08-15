#!/usr/bin/env node
"use strict";
/**
 * CS-DE Věty — 1-card micro-regression (GPT-5.6 Luna, READ-ONLY).
 * Usage: node scripts/audit-cs-vety-1-card-micro-regression.js [--skip-luna]
 */
require("dotenv").config({ path: require("path").join(__dirname, "..", ".env") });

const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const { execSync } = require("child_process");

const {
  ROOT,
  loadArray,
  ensureDir,
  buildSentenceCard,
} = require("./lib/cs-audit-helpers");
const {
  createStats,
  auditCardsBatch,
  classifyFindings,
  NON_ERROR_CATEGORIES,
  DEFAULT_MODEL,
} = require("./lib/openai-cs-full-audit");

const SKIP_LUNA = process.argv.includes("--skip-luna");
const LINGUISTIC_MODEL = "GPT-5.6 Luna";
const BRANCH = "cursor/cs-vety-final-closure-6ea4";
const TARGET_CARD = "sentence-406";
const TARGET_INDEX = 406;
const MICRO_REPAIR_JSON = path.join(ROOT, "reports/temp/cs-vety-1-card-micro-repair.json");
const SENTENCES_FILE = path.join(ROOT, "data/cs/sentences.js");
const WWW_FILE = path.join(ROOT, "www/data/cs/sentences.js");
const OUT_MD = path.join(ROOT, "reports/cs-vety-1-card-micro-regression.md");
const OUT_JSON = path.join(ROOT, "reports/temp/cs-vety-1-card-micro-regression.json");
const TEMP_DIR = path.join(ROOT, "reports/temp/cs-vety-1-card-micro-regression-audit");
const LINGUISTIC_JSON = path.join(TEMP_DIR, "linguistic-audit.json");

const TARGETED_PROMPT = [
  "You are the CS-DE Věty FINAL 1-card micro-regression auditor (GPT-5.6 Luna).",
  "Audit ONLY sentence-406 after OWNER micro-repair of residual targeted-regression finding.",
  "DE: Auf diesem Wege. CURRENT CS: Takhle. • Tímto způsobem.",
  "Verify semantic accuracy, Czech naturalness, grammar, spelling, register vs DE.",
  "Return ONLY valid JSON: { \"items\": [ ... ] }.",
  "PASS for correct content. Findings only for objective Czech linguistic errors.",
  "Non-error: FALSE_POSITIVE, STYLE_ONLY, PROJECT_CONVENTION, SOURCE_LV_ISSUE, SOURCE_DE_ISSUE.",
  "Do NOT suggest DE changes.",
].join("\n");

function fileHash(filePath) {
  return crypto.createHash("sha256").update(fs.readFileSync(filePath)).digest("hex");
}

function deSnapshotHash(entries) {
  const parts = entries.map((e) => JSON.stringify({ de: e.de }));
  return crypto.createHash("sha256").update(parts.join("\n")).digest("hex");
}

function normalizeFinding(raw, source) {
  return {
    cardId: raw.cardId,
    field: raw.field || "lv",
    severity: String(raw.severity || "MEDIUM").toUpperCase(),
    category: String(raw.category || raw.verdict || "TRANSLATION").toUpperCase(),
    current: raw.currentCs || raw.current || "",
    proposed: raw.proposedCs || raw.proposed || "",
    reason: raw.reason || raw.problem || "",
    source,
    raw,
  };
}

function isSourceDeIssue(f) {
  const cat = String(f.category || "").toUpperCase();
  return cat === "SOURCE_DE_ISSUE" || cat === "DE_SOURCE_ISSUE";
}

function isNonErrorFinding(f) {
  return NON_ERROR_CATEGORIES.has(String(f.category || "").toUpperCase());
}

function isSubstantiveFinding(f) {
  if (!f?.cardId || isNonErrorFinding(f) || isSourceDeIssue(f)) return false;
  return Boolean(String(f.reason || "").trim() || String(f.current || "").trim() || String(f.proposed || "").trim());
}

function validateFindings(rawFindings) {
  const sourceDeIssues = [];
  const falsePositives = [];
  const validatedReal = [];
  for (const raw of rawFindings) {
    if (!isSubstantiveFinding(raw)) continue;
    if (isSourceDeIssue(raw)) {
      sourceDeIssues.push({ ...raw, validationStatus: "SOURCE_DE_ISSUE" });
      continue;
    }
    if (isNonErrorFinding(raw)) {
      falsePositives.push({ ...raw, validationStatus: "FALSE_POSITIVE" });
      continue;
    }
    validatedReal.push({ ...raw, validationStatus: "REAL" });
  }
  return { sourceDeIssues, falsePositives, validatedReal };
}

function verifyMicroRepair(entries) {
  const repair = JSON.parse(fs.readFileSync(MICRO_REPAIR_JSON, "utf8"));
  const detail = repair.details?.[0];
  const actual = entries[TARGET_INDEX]?.lv;
  const pass = actual === detail?.new;
  return { pass, expected: detail?.new, actual, detail };
}

async function runLuna(entries) {
  ensureDir(TEMP_DIR);
  const lv = loadArray("data/sentences.js", "SENTENCE_ENTRIES");
  const card = buildSentenceCard(lv[TARGET_INDEX], entries[TARGET_INDEX], TARGET_INDEX);
  const hashBefore = fileHash(SENTENCES_FILE);
  const stats = createStats();
  const result = await auditCardsBatch({
    cards: [card],
    stats,
    batchLabel: "simple-001-001",
    auditType: "sentences",
    dataset: "vety",
    instructions: TARGETED_PROMPT,
  });
  if (fileHash(SENTENCES_FILE) !== hashBefore) throw new Error("Production changed during Luna audit");
  const batchFile = path.join(TEMP_DIR, "batch-simple-001-001.json");
  fs.writeFileSync(batchFile, JSON.stringify({ batch: "simple-001-001", cardIds: [TARGET_CARD], findings: result.findings, passCount: result.passCount }, null, 2));
  const { qualityFindings, nonError } = classifyFindings(result.findings);
  const auditData = {
    meta: { cardsExpected: 1, cardsAudited: 1, model: LINGUISTIC_MODEL, apiModel: DEFAULT_MODEL, completedAt: new Date().toISOString() },
    findings: qualityFindings,
    qualityFindings,
    nonError,
    apiUsage: stats,
  };
  fs.writeFileSync(LINGUISTIC_JSON, JSON.stringify(auditData, null, 2));
  return { stats, findings: qualityFindings.map((f) => normalizeFinding(f, "gpt-5.6-luna")), nonError };
}

function buildMarkdown(data) {
  const s = data.summary;
  const totalReal = s.validated.CRITICAL + s.validated.HIGH + s.validated.MEDIUM + s.validated.LOW;
  const lines = [
    "# CS–DE Věty 1-Card Micro-Regression",
    "",
    "**MODE:** READ-ONLY",
    "",
    "## MODEL",
    "",
    LINGUISTIC_MODEL,
    "",
    "## TARGET",
    "",
    `- Card: \`${TARGET_CARD}\``,
    `- Field: \`lv\``,
    `- DE: Auf diesem Wege.`,
    `- CS CURRENT: Takhle. • Tímto způsobem.`,
    "",
    "## MICRO-REPAIR PREREQUISITE",
    "",
    `OWNER NEW exact: ${s.microRepairExact ? "1/1 PASS" : "FAIL"}`,
    "",
    "## FINDINGS",
    "",
    "| Metric | Value |",
    "|--------|------:|",
    `| Raw findings | ${s.rawFindings} |`,
    `| Validated REAL | ${totalReal} |`,
    `| FALSE_POSITIVE | ${s.falsePositive} |`,
    `| SOURCE_DE_ISSUE | ${s.sourceDeIssue} |`,
    `| CRITICAL | ${s.validated.CRITICAL} |`,
    `| HIGH | ${s.validated.HIGH} |`,
    `| MEDIUM | ${s.validated.MEDIUM} |`,
    `| LOW | ${s.validated.LOW} |`,
    "",
    "## INTEGRITY",
    "",
    `DE changes: ${s.deChanges}`,
    `CS production changes: ${s.productionChanges}`,
    `Card count: ${s.cardCount}/796`,
    `Syntax: ${s.syntax}`,
    `Mirror/parity: ${s.mirrorParity}`,
    "",
    "## VERDICT",
    "",
    totalReal === 0 ? "```text\nMICRO-REGRESSION = PASS\n```" : "```text\nMICRO-REGRESSION = NEEDS OWNER REVIEW\n```",
    "",
    `Generated: ${data.meta.date}`,
  ];
  if (data.realFindings?.length) {
    lines.push("", "## REAL FINDINGS", "");
    for (const f of data.realFindings) {
      lines.push(`### ${f.cardId}`, `- Severity: ${f.severity}`, `- Problem: ${f.reason}`, "");
    }
  }
  return lines.join("\n");
}

async function main() {
  if (!fs.existsSync(MICRO_REPAIR_JSON)) throw new Error("Missing micro-repair JSON");
  const auditCommit = execSync("git rev-parse HEAD", { cwd: ROOT, encoding: "utf8" }).trim();
  const baselineHash = fileHash(SENTENCES_FILE);
  const baselineDeHash = deSnapshotHash(loadArray("data/sentences.js", "SENTENCE_ENTRIES"));
  const entries = loadArray("data/cs/sentences.js", "SENTENCE_ENTRIES");

  const microCheck = verifyMicroRepair(entries);
  if (!microCheck.pass) {
    console.error(JSON.stringify({ status: "MICRO_REPAIR_PREREQUISITE_FAIL", microCheck }, null, 2));
    process.exit(2);
  }

  let lunaFindings = [];
  let lunaStats = createStats();
  let nonError = {};
  if (!SKIP_LUNA) {
    if (!process.env.OPENAI_API_KEY?.trim()) throw new Error("OPENAI_API_KEY required");
    const luna = await runLuna(entries);
    lunaFindings = luna.findings;
    lunaStats = luna.stats;
    nonError = luna.nonError;
  } else if (fs.existsSync(LINGUISTIC_JSON)) {
    const ling = JSON.parse(fs.readFileSync(LINGUISTIC_JSON, "utf8"));
    lunaFindings = (ling.qualityFindings || ling.findings || []).map((f) => normalizeFinding(f, "gpt-5.6-luna"));
    lunaStats = ling.apiUsage || createStats();
    nonError = ling.nonError || {};
  }

  const { sourceDeIssues, falsePositives, validatedReal } = validateFindings(lunaFindings);
  const validated = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0 };
  for (const f of validatedReal) {
    const sev = f.severity || "MEDIUM";
    if (validated[sev] !== undefined) validated[sev] += 1;
    else validated.MEDIUM += 1;
  }

  const productionChanges = fileHash(SENTENCES_FILE) !== baselineHash ? 1 : 0;
  const deChanges = deSnapshotHash(loadArray("data/sentences.js", "SENTENCE_ENTRIES")) === baselineDeHash ? 0 : 1;
  let syntax = "PASS";
  try {
    execSync("node --check data/cs/sentences.js", { cwd: ROOT, stdio: "pipe" });
  } catch {
    syntax = "FAIL";
  }
  const mirrorParity = fileHash(SENTENCES_FILE) === fileHash(WWW_FILE) ? "PASS" : "FAIL";

  const summary = {
    microRepairExact: microCheck.pass,
    targetCard: TARGET_CARD,
    rawFindings: lunaFindings.length,
    falsePositive: falsePositives.length + (nonError.FALSE_POSITIVE || 0),
    sourceDeIssue: sourceDeIssues.length + (nonError.SOURCE_DE_ISSUE || 0),
    validated,
    productionChanges,
    deChanges,
    cardCount: entries.length,
    syntax,
    mirrorParity,
    lunaRequests: lunaStats.requestCount || 0,
    lunaTokens: lunaStats.totalTokens || 0,
    pass: validated.CRITICAL + validated.HIGH + validated.MEDIUM + validated.LOW === 0,
  };

  const payload = {
    meta: { date: new Date().toISOString(), branch: BRANCH, auditCommit, model: LINGUISTIC_MODEL },
    summary,
    validatedReal,
    falsePositives,
    sourceDeIssues,
    realFindings: validatedReal,
  };

  fs.writeFileSync(OUT_JSON, JSON.stringify(payload, null, 2));
  fs.writeFileSync(OUT_MD, buildMarkdown(payload));

  console.log(JSON.stringify(summary, null, 2));
  if (!summary.pass || productionChanges || deChanges) process.exit(1);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
