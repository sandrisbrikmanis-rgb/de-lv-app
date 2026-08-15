#!/usr/bin/env node
"use strict";
/**
 * CS-DE Slovesa Targeted Regression Audit (READ-ONLY)
 * GPT-5.6 Luna — OWNER repair scope only (468 mappings / 149 verbs).
 *
 * Usage:
 *   node scripts/audit-cs-slovesa-targeted-regression.js [--skip-luna] [--resume-luna]
 */
require("dotenv").config({ path: require("path").join(__dirname, "..", ".env") });

const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const { execSync, spawnSync } = require("child_process");

const {
  ROOT,
  BATCH_SIZE,
  loadArray,
  chunk,
  ensureDir,
  buildVerbCard,
} = require("./lib/cs-audit-helpers");
const {
  createStats,
  auditCardsBatch,
  recordRetryReason,
  classifyFindings,
  NON_ERROR_CATEGORIES,
  DEFAULT_MODEL,
} = require("./lib/openai-cs-full-audit");

const SKIP_LUNA = process.argv.includes("--skip-luna");
const RESUME_LUNA = process.argv.includes("--resume-luna");
const LINGUISTIC_MODEL = "GPT-5.6 Luna";
const SLOVESA_TOTAL = 189;
const OWNER_TOTAL = 468;
const BRANCH = "cursor/cs-slovesa-targeted-regression-audit-6ea4";
const APPLY_JSON = path.join(ROOT, "reports/temp/cs-slovesa-owner-copy-only-apply.json");
const VERBS_FILE = path.join(ROOT, "data/cs/verbs.js");
const WWW_FILE = path.join(ROOT, "www/data/cs/verbs.js");
const OUT_JSON = path.join(ROOT, "reports/temp/cs-slovesa-targeted-regression.json");
const OUT_MD = path.join(ROOT, "reports/cs-slovesa-targeted-regression.md");
const TEMP_DIR = path.join(ROOT, "reports/temp/cs-slovesa-targeted-regression-audit");
const DETERMINISTIC_JSON = path.join(TEMP_DIR, "deterministic-audit.json");
const LINGUISTIC_JSON = path.join(TEMP_DIR, "linguistic-audit.json");
const PROGRESS_FILE = path.join(ROOT, "scripts", ".cs-slovesa-targeted-luna-progress.json");
const DET_COLLECT_DIR = path.join(ROOT, "reports/temp/cs-slovesa-audit");
const FORM_KEYS = [
  "infinitiv",
  "praesens",
  "imperfektIndikativ",
  "imperfektKonjunktiv",
  "partizipVergangenheit",
];

const TARGETED_PROMPT = [
  "You are a targeted CS-DE Slovesa (German verbs → Czech conjugation) repair regression auditor (GPT-5.6 Luna).",
  "These verb cards were changed by OWNER-approved COPY-ONLY repair (468 Czech form mappings across 149 verbs).",
  "Audit the FULL current production Czech paradigm (all 5 forms) against German source forms.",
  "Independently verify whether OWNER-approved NEW Czech forms are semantically and grammatically correct vs German.",
  "Do NOT assume production is correct just because OWNER approved it — report objective Czech errors.",
  "This is NOT a full Slovesa discovery audit of unchanged verbs.",
  "Return ONLY valid JSON: { \"items\": [ ... ] }.",
  "PASS for correct content. Findings only for objective Czech linguistic errors.",
  "Check per form (infinitiv, praesens, imperfektIndikativ, imperfektKonjunktiv, partizipVergangenheit):",
  "DE→CS meaning accuracy, correct Czech lexeme, grammar, spelling, aspect, reflexivity,",
  "tense/mood/person agreement, participle/form correctness, paradigm internal consistency,",
  "unnatural Czech, wrong word class, foreign/wrong-sense forms, unnecessary duplicates.",
  "Non-error categories (do NOT count as REAL): FALSE_POSITIVE, STYLE_ONLY, PROJECT_CONVENTION,",
  "SOURCE_LV_ISSUE, SOURCE_DE_ISSUE, NEEDS_OWNER_REVIEW.",
  "SOURCE_DE_ISSUE = possible German source problem; do not suggest DE changes.",
  "Do NOT suggest DE changes.",
].join("\n");

function fileHash(filePath) {
  return crypto.createHash("sha256").update(fs.readFileSync(filePath)).digest("hex");
}

function deSnapshotHash(entries) {
  const parts = entries.map((entry) => {
    const forms = {};
    for (const key of FORM_KEYS) {
      if (entry[key]) forms[key] = { de: entry[key].de };
    }
    return JSON.stringify(forms);
  });
  return crypto.createHash("sha256").update(parts.join("\n")).digest("hex");
}

function getCsValue(entry, field) {
  if (!entry[field] || typeof entry[field] !== "object") return undefined;
  return entry[field].lv ?? entry[field].cs ?? "";
}

function loadOwnerMappings() {
  const payload = JSON.parse(fs.readFileSync(APPLY_JSON, "utf8"));
  const mappings = (payload.details || []).filter((d) =>
    d.status === "APPLIED" || d.status === "ALREADY_MATCHED_NEW",
  );
  if (mappings.length !== OWNER_TOTAL) {
    throw new Error(`Expected ${OWNER_TOTAL} mappings in apply JSON, got ${mappings.length}`);
  }
  return mappings;
}

function resolveIndex(verbId) {
  const m = String(verbId).match(/^verb-(\d+)$/);
  return m ? Number(m[1]) : null;
}

function verifyOwnerMappings(entries, mappings) {
  const results = [];
  let exact = 0;
  let drift = 0;
  let verbNotFound = 0;
  let fieldNotFound = 0;
  let conflict = 0;
  const seen = new Map();

  for (const m of mappings) {
    const key = `${m.verbId}\x1f${m.field}`;
    if (seen.has(key)) {
      conflict++;
      results.push({ ...m, status: "OWNER_MAPPING_CONFLICT" });
      continue;
    }
    seen.set(key, m);

    const index = resolveIndex(m.verbId);
    if (index === null || index < 0 || index >= entries.length) {
      verbNotFound++;
      results.push({ ...m, status: "VERB_NOT_FOUND" });
      continue;
    }
    const entry = entries[index];
    if (!(m.field in entry) || typeof entry[m.field] !== "object") {
      fieldNotFound++;
      results.push({ ...m, status: "FIELD_NOT_FOUND", actual: undefined });
      continue;
    }
    const actual = getCsValue(entry, m.field);
    if (actual !== m.new) {
      drift++;
      results.push({ ...m, status: "OWNER_DRIFT", actual });
      continue;
    }
    exact++;
    results.push({ ...m, status: "OWNER_NEW_EXACT", actual });
  }

  return {
    pass:
      mappings.length === OWNER_TOTAL
      && exact === OWNER_TOTAL
      && drift === 0
      && verbNotFound === 0
      && fieldNotFound === 0
      && conflict === 0,
    exact,
    drift,
    verbNotFound,
    fieldNotFound,
    conflict,
    currentMismatch: drift,
    results,
  };
}

function buildScope(mappings) {
  const verbIds = new Set();
  const fieldsByVerb = new Map();
  for (const m of mappings) {
    verbIds.add(m.verbId);
    if (!fieldsByVerb.has(m.verbId)) fieldsByVerb.set(m.verbId, new Set());
    fieldsByVerb.get(m.verbId).add(m.field);
  }
  return {
    changedMappings: mappings.length,
    uniqueChangedVerbs: verbIds.size,
    verbIdSet: verbIds,
    fieldsByVerb: Object.fromEntries(
      [...fieldsByVerb.entries()].map(([id, fields]) => [id, [...fields]]),
    ),
  };
}

function normalizeFinding(raw, source) {
  const cat = String(raw.category || raw.verdict || "").toUpperCase();
  const sev = String(raw.severity || "MEDIUM").toUpperCase();
  const cardId = raw.cardId || raw.verbId || "";
  return {
    cardId,
    verbId: cardId,
    field: raw.field || raw.path || "lv",
    severity: sev,
    category: cat || "TRANSLATION",
    current: raw.currentCs || raw.current || raw.currentText || "",
    proposed: raw.proposedCs || raw.proposed || raw.recommendedFix || "",
    reason: raw.reason || raw.problem || raw.rationale || "",
    de: raw.de || "",
    source,
    raw,
  };
}

function isSourceDeIssue(f) {
  const cat = String(f.category || f.raw?.category || "").toUpperCase();
  return cat === "SOURCE_DE_ISSUE" || cat === "DE_SOURCE_ISSUE";
}

function isNonErrorFinding(f) {
  const cat = String(f.category || f.raw?.category || "").toUpperCase();
  return NON_ERROR_CATEGORIES.has(cat);
}

function isSubstantiveFinding(f) {
  if (!f?.cardId || isNonErrorFinding(f) || isSourceDeIssue(f)) return false;
  return Boolean(
    String(f.reason || f.raw?.problem || "").trim()
      || String(f.current || f.raw?.currentCs || "").trim()
      || String(f.proposed || f.raw?.proposedCs || "").trim(),
  );
}

function isMalformedFinding(f) {
  return !isSubstantiveFinding(f);
}

function enrichFindingFromProduction(f, entries) {
  if (String(f.current || "").trim()) return f;
  const index = resolveIndex(f.cardId || f.verbId);
  if (index === null || index < 0) return f;
  const value = getCsValue(entries[index], f.field);
  if (value === undefined) return f;
  return { ...f, current: String(value) };
}

function isPlCharOFalsePositive(f) {
  const reason = String(f.reason || f.raw?.problem || "").toLowerCase();
  const text = String(f.current || f.raw?.currentCs || "");
  const mentionsPl = reason.includes("pl_char") || reason.includes("polish");
  if (!mentionsPl && !String(f.category || "").includes("FOREIGN")) return false;
  if (/ó/.test(text) && !/[ąćęłńśźżĄĆĘŁŃŚŹŻ]/.test(text)) return true;
  return false;
}

function dedupeFindings(findings) {
  const seen = new Map();
  for (const f of findings) {
    const key = `${f.cardId}\x1f${f.field}\x1f${String(f.reason || "").slice(0, 80)}`;
    if (!seen.has(key)) seen.set(key, f);
  }
  return [...seen.values()];
}

function runDeterministicCollect() {
  ensureDir(DET_COLLECT_DIR);
  const outFile = path.join(DET_COLLECT_DIR, "deterministic-audit.json");
  if (!fs.existsSync(outFile)) {
    const result = spawnSync("node", ["scripts/audit-cs-collect.js", "--dataset=slovesa"], {
      cwd: ROOT,
      encoding: "utf8",
    });
    if (result.stdout) process.stdout.write(result.stdout);
    if (result.stderr) process.stderr.write(result.stderr);
    if (result.status !== 0) throw new Error("audit-cs-collect.js --dataset=slovesa failed");
  }
  return JSON.parse(fs.readFileSync(outFile, "utf8"));
}

function filterFindingsToVerbs(findings, verbIdSet) {
  return (findings || []).filter((f) => verbIdSet.has(f.cardId));
}

function checkIntegrity(entries, baselineDeHash) {
  let syntax = "PASS";
  try {
    execSync("node --check data/cs/verbs.js", { cwd: ROOT, stdio: "pipe" });
    loadArray("data/cs/verbs.js", "VERB_ENTRIES");
  } catch {
    syntax = "FAIL";
  }
  const mirror = fileHash(VERBS_FILE) === fileHash(WWW_FILE);
  const idOrder = entries.length === SLOVESA_TOTAL ? "PASS" : "FAIL";
  const deHash = deSnapshotHash(loadArray("data/verbs.js", "VERB_ENTRIES"));
  let formsIntact = "PASS";
  for (const entry of entries) {
    for (const key of FORM_KEYS) {
      if (!entry[key] || typeof entry[key] !== "object" || !entry[key].de) {
        formsIntact = "FAIL";
        break;
      }
    }
    if (formsIntact === "FAIL") break;
  }
  return {
    verbCount: entries.length,
    syntax,
    idOrder,
    formsIntact,
    mirrorParity: mirror ? "PASS" : "FAIL",
    deChanges: deHash === baselineDeHash ? 0 : 1,
    deIntegrity: deHash === baselineDeHash ? "PASS" : "FAIL",
  };
}

function buildLunaCards(targetSet, entries) {
  const lv = loadArray("data/verbs.js", "VERB_ENTRIES");
  const cards = [];
  for (let i = 0; i < entries.length; i++) {
    const id = `verb-${i}`;
    if (!targetSet.has(id)) continue;
    cards.push(buildVerbCard(lv[i], entries[i], i));
  }
  return { simple: cards, study: [] };
}

function loadProgress() {
  if (!fs.existsSync(PROGRESS_FILE)) return { completedBatches: [], auditedVerbIds: [] };
  try {
    return JSON.parse(fs.readFileSync(PROGRESS_FILE, "utf8"));
  } catch {
    return { completedBatches: [], auditedVerbIds: [] };
  }
}

function saveProgress(progress) {
  fs.writeFileSync(PROGRESS_FILE, JSON.stringify(progress, null, 2));
}

async function runTargetedLuna(entries, targetSet) {
  ensureDir(TEMP_DIR);
  const stats = createStats();
  const progress = RESUME_LUNA ? loadProgress() : { completedBatches: [], auditedVerbIds: [] };
  const completed = new Set(progress.completedBatches || []);
  const auditedVerbIds = new Set(progress.auditedVerbIds || []);

  let auditData =
    RESUME_LUNA && fs.existsSync(LINGUISTIC_JSON)
      ? JSON.parse(fs.readFileSync(LINGUISTIC_JSON, "utf8"))
      : { meta: {}, batches: [], allResults: [], findings: [] };
  if (RESUME_LUNA && auditData.apiUsage) {
    stats.requestCount = auditData.apiUsage.requestCount || 0;
    stats.totalTokens = auditData.apiUsage.totalTokens || 0;
    stats.batchCount = auditData.apiUsage.batchCount || 0;
  }

  const { simple } = buildLunaCards(targetSet, entries);
  const hashBefore = fileHash(VERBS_FILE);

  const batches = chunk(simple, BATCH_SIZE);
  for (let i = 0; i < batches.length; i++) {
    const start = i * BATCH_SIZE + 1;
    const end = Math.min((i + 1) * BATCH_SIZE, simple.length);
    const batchKey = `simple-${String(start).padStart(3, "0")}-${String(end).padStart(3, "0")}`;
    if (completed.has(batchKey)) {
      console.log(`  skip ${batchKey} (cached)`);
      continue;
    }
    let result;
    for (let attempt = 1; attempt <= 3; attempt++) {
      try {
        if (attempt > 1) {
          stats.retryCount += 1;
          recordRetryReason(stats, "retry");
        }
        result = await auditCardsBatch({
          cards: batches[i],
          stats,
          batchLabel: batchKey,
          auditType: "verbs",
          dataset: "slovesa",
          instructions: TARGETED_PROMPT,
        });
        break;
      } catch (e) {
        if (attempt >= 3) throw e;
        await new Promise((r) => setTimeout(r, 2000 * attempt));
      }
    }
    const batchFile = path.join(TEMP_DIR, `batch-${batchKey}.json`);
    fs.writeFileSync(
      batchFile,
      JSON.stringify(
        {
          batch: batchKey,
          cardIds: batches[i].map((c) => c.cardId),
          findings: result.findings,
          passCount: result.passCount,
        },
        null,
        2,
      ),
    );
    auditData.allResults.push(...result.results);
    auditData.findings.push(...result.findings);
    auditData.batches.push(batchKey);
    for (const c of batches[i]) auditedVerbIds.add(c.cardId);
    completed.add(batchKey);
    progress.completedBatches = [...completed];
    progress.auditedVerbIds = [...auditedVerbIds];
    saveProgress(progress);
    fs.writeFileSync(LINGUISTIC_JSON, JSON.stringify(auditData, null, 2));
    console.log(`  done ${batchKey}: ${result.findings.length} findings, ${result.passCount} pass`);
  }

  if (fileHash(VERBS_FILE) !== hashBefore) throw new Error("Production changed during Luna audit");

  const { qualityFindings, nonError } = classifyFindings(auditData.findings);
  auditData.meta = {
    ...auditData.meta,
    verbsExpected: targetSet.size,
    verbsAudited: auditedVerbIds.size,
    model: LINGUISTIC_MODEL,
    apiModel: DEFAULT_MODEL,
    completedAt: new Date().toISOString(),
  };
  auditData.apiUsage = stats;
  auditData.qualityFindings = qualityFindings;
  auditData.nonError = nonError;
  auditData.findings = qualityFindings;
  fs.writeFileSync(LINGUISTIC_JSON, JSON.stringify(auditData, null, 2));
  return { stats, auditedVerbIds: [...auditedVerbIds], findings: qualityFindings, nonError };
}

function validateFindings(rawFindings, entries) {
  const sourceDeIssues = [];
  const falsePositives = [];
  const validatedReal = [];

  for (const raw of rawFindings) {
    if (isMalformedFinding(raw)) continue;
    const f = enrichFindingFromProduction(raw, entries);
    if (isSourceDeIssue(f)) {
      sourceDeIssues.push({ ...f, validationStatus: "SOURCE_DE_ISSUE" });
      continue;
    }
    if (isNonErrorFinding(f) || isPlCharOFalsePositive(f)) {
      falsePositives.push({ ...f, validationStatus: "FALSE_POSITIVE" });
      continue;
    }
    if (isSubstantiveFinding(f)) {
      validatedReal.push({ ...f, validationStatus: "REAL" });
    }
  }

  return { sourceDeIssues, falsePositives, validatedReal };
}

function buildMarkdown(data) {
  const s = data.summary;
  const lines = [
    "# CS–DE Slovesa TARGETED REGRESSION AUDIT",
    "",
    "**MODE:** READ-ONLY",
    "",
    "## MODEL",
    "",
    LINGUISTIC_MODEL,
    "",
    "## PREREQUISITE (OWNER repair reconciliation)",
    "",
    "| Metric | Value |",
    "|--------|------:|",
    `| OWNER LABOT mappings | ${OWNER_TOTAL} |`,
    `| OWNER NEW exact | ${s.ownerNewExact}/${OWNER_TOTAL} |`,
    `| OWNER drift | ${s.ownerDrift} |`,
    `| CURRENT_VALUE_MISMATCH | ${s.currentMismatch} |`,
    `| VERB_NOT_FOUND | ${s.verbNotFound} |`,
    `| FIELD_NOT_FOUND | ${s.fieldNotFound} |`,
    `| OWNER_MAPPING_CONFLICT | ${s.ownerConflict} |`,
    "",
    `**Prerequisite:** ${s.prerequisitePass ? "PASS" : "FAIL"}`,
    "",
    "## TARGETED SCOPE",
    "",
    "| Metric | Value |",
    "|--------|------:|",
    `| Target mappings | ${s.changedMappings} |`,
    `| Target verbs | ${s.uniqueChangedVerbs} |`,
    "",
    "## RAW → VALIDATED PIPELINE",
    "",
    "| Metric | Value |",
    "|--------|------:|",
    `| OWNER mappings checked | ${OWNER_TOTAL}/${OWNER_TOTAL} |`,
    `| Raw findings | ${s.rawFindings} |`,
    `| Malformed filtered | ${s.malformedFiltered} |`,
    `| FALSE_POSITIVE | ${s.falsePositive} |`,
    `| SOURCE_DE_ISSUE | ${s.sourceDeIssue} |`,
    "",
    "## VALIDATED REAL FINDINGS",
    "",
    "| Severity | Count |",
    "|----------|------:|",
    `| CRITICAL | ${s.validated.CRITICAL} |`,
    `| HIGH | ${s.validated.HIGH} |`,
    `| MEDIUM | ${s.validated.MEDIUM} |`,
    `| LOW | ${s.validated.LOW} |`,
    "",
    "## INTEGRITY",
    "",
    "| Check | Result |",
    "|-------|--------|",
    `| Production changes | ${s.productionChanges} |`,
    `| DE changes | ${s.deChanges} |`,
    `| CS production changes during regression | ${s.productionChanges} |`,
    `| Unexpected production changes | ${s.unexpectedProductionChanges} |`,
    `| Syntax | ${s.syntax} |`,
    `| ID/order | ${s.idOrder} |`,
    `| Verb count | ${s.verbCount}/${SLOVESA_TOTAL} |`,
    `| Forms intact | ${s.formsIntact} |`,
    `| Mirror/parity | ${s.mirrorParity} |`,
    "",
    "## LUNA API",
    "",
    "| Metric | Value |",
    "|--------|------:|",
    `| Requests | ${s.lunaRequests} |`,
    `| Tokens | ${s.lunaTokens} |`,
    "",
    "## VERDICT",
    "",
  ];

  const totalReal = s.validated.CRITICAL + s.validated.HIGH + s.validated.MEDIUM + s.validated.LOW;
  if (totalReal === 0) {
    lines.push("```text", "VALIDATED REAL FINDINGS = 0", "TARGETED REGRESSION = PASS", "```");
  } else {
    lines.push("```text", "TARGETED REGRESSION = NEEDS OWNER REVIEW", "```");
  }

  lines.push(
    "",
    "## SUMMARY",
    "",
    "```text",
    `Target mappings: ${s.changedMappings}`,
    `Target verbs: ${s.uniqueChangedVerbs}`,
    "",
    `OWNER NEW exact: ${s.ownerNewExact}/${OWNER_TOTAL}`,
    `OWNER drift: ${s.ownerDrift}`,
    "",
    `Luna requests: ${s.lunaRequests}`,
    `Tokens: ${s.lunaTokens}`,
    "",
    `Raw findings: ${s.rawFindings}`,
    "",
    `Validated REAL: ${totalReal}`,
    `FALSE_POSITIVE: ${s.falsePositive}`,
    `SOURCE_DE_ISSUE: ${s.sourceDeIssue}`,
    "",
    `CRITICAL: ${s.validated.CRITICAL}`,
    `HIGH: ${s.validated.HIGH}`,
    `MEDIUM: ${s.validated.MEDIUM}`,
    `LOW: ${s.validated.LOW}`,
    "",
    `DE changes: ${s.deChanges}`,
    `CS production changes: ${s.productionChanges}`,
    `Unexpected changes: ${s.unexpectedProductionChanges}`,
    "",
    `Verb count: ${s.verbCount}/${SLOVESA_TOTAL}`,
    `Syntax: ${s.syntax}`,
    `ID/order: ${s.idOrder}`,
    `Mirror/parity: ${s.mirrorParity}`,
    "```",
    "",
    `Generated: ${data.meta.date}`,
    `Branch: \`${data.meta.branch}\``,
    `Audit commit: \`${data.meta.auditCommit}\``,
  );

  if (data.realFindings?.length) {
    lines.push("", "## REAL FINDINGS (validated)", "");
    for (const f of data.realFindings) {
      lines.push(`### ${f.cardId} — ${f.field}`, "");
      lines.push(`- Severity: **${f.severity}**`);
      lines.push(`- CURRENT: ${f.current}`);
      if (f.proposed) lines.push(`- Proposed replacement (informational): ${f.proposed}`);
      lines.push(`- Problem: ${f.reason}`);
      if (f.de) lines.push(`- DE (context): ${f.de}`);
      lines.push(`- Source: ${f.source}`);
      lines.push("");
    }
  }

  if (data.sourceDeIssues?.length) {
    lines.push("", "## SOURCE_DE_ISSUE (documented, DE READ-ONLY)", "");
    for (const f of data.sourceDeIssues) {
      lines.push(`### ${f.cardId} — ${f.field}`, "");
      lines.push(`- Problem: ${f.reason}`);
      lines.push("");
    }
  }

  return lines.join("\n");
}

async function main() {
  ensureDir(TEMP_DIR);
  if (!fs.existsSync(APPLY_JSON)) throw new Error(`Missing apply JSON: ${APPLY_JSON}`);

  const auditCommit = execSync("git rev-parse HEAD", { cwd: ROOT, encoding: "utf8" }).trim();
  const baselineHash = fileHash(VERBS_FILE);
  const entries = loadArray("data/cs/verbs.js", "VERB_ENTRIES");
  const baselineDeHash = deSnapshotHash(loadArray("data/verbs.js", "VERB_ENTRIES"));

  console.log("\n=== Slovesa OWNER prerequisite check (468 mappings) ===");
  const mappings = loadOwnerMappings();
  const ownerCheck = verifyOwnerMappings(entries, mappings);
  if (!ownerCheck.pass) {
    console.error(JSON.stringify({ status: "PREREQUISITE FAIL — STOP", ownerCheck }, null, 2));
    process.exit(2);
  }
  console.log(`PASS: OWNER NEW exact ${ownerCheck.exact}/${OWNER_TOTAL}, drift=${ownerCheck.drift}`);

  const scope = buildScope(mappings);
  console.log(`\n=== Targeted scope: ${scope.uniqueChangedVerbs} unique verbs (${scope.changedMappings} mappings) ===`);

  console.log("\n=== Deterministic collect (Slovesa) — filtered to scope ===");
  const detFull = runDeterministicCollect();
  const detTargeted = filterFindingsToVerbs(detFull.findings || [], scope.verbIdSet);
  fs.writeFileSync(DETERMINISTIC_JSON, JSON.stringify({ findings: detTargeted, fullIntegrity: detFull.meta }, null, 2));
  console.log(`Deterministic raw findings in scope: ${detTargeted.length}`);

  let lunaResult = { stats: createStats(), auditedVerbIds: [], findings: [], nonError: {} };
  if (!SKIP_LUNA) {
    console.log(`\n=== GPT-5.6 Luna targeted audit (${scope.uniqueChangedVerbs} verbs) ===`);
    if (!process.env.OPENAI_API_KEY?.trim()) throw new Error("OPENAI_API_KEY required");
    lunaResult = await runTargetedLuna(entries, scope.verbIdSet);
  } else if (fs.existsSync(LINGUISTIC_JSON)) {
    const ling = JSON.parse(fs.readFileSync(LINGUISTIC_JSON, "utf8"));
    lunaResult.findings = ling.qualityFindings || ling.findings || [];
    lunaResult.auditedVerbIds = ling.meta?.auditedVerbIds || loadProgress().auditedVerbIds || [];
    lunaResult.stats = ling.apiUsage || createStats();
    lunaResult.nonError = ling.nonError || {};
  } else {
    console.log("Skipping Luna (--skip-luna, no cache)");
  }

  const productionChanges = fileHash(VERBS_FILE) !== baselineHash ? 1 : 0;
  const integrity = checkIntegrity(loadArray("data/cs/verbs.js", "VERB_ENTRIES"), baselineDeHash);

  const allRawNorm = [
    ...detTargeted.map((f) => normalizeFinding(f, "deterministic")),
    ...lunaResult.findings.map((f) => normalizeFinding(f, "gpt-5.6-luna")),
  ];
  const preMerge = allRawNorm.filter(
    (f) => isSubstantiveFinding(f) || isSourceDeIssue(f) || isPlCharOFalsePositive(f),
  );
  const merged = dedupeFindings(preMerge);
  const malformedCount = allRawNorm.length - preMerge.length;
  const { sourceDeIssues, falsePositives, validatedReal } = validateFindings(merged, entries);

  const validatedSev = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0 };
  for (const f of validatedReal) {
    const sev = f.severity || "MEDIUM";
    if (validatedSev[sev] !== undefined) validatedSev[sev] += 1;
    else validatedSev.MEDIUM += 1;
  }

  const summary = {
    prerequisitePass: ownerCheck.pass,
    ownerNewExact: ownerCheck.exact,
    ownerDrift: ownerCheck.drift,
    currentMismatch: ownerCheck.currentMismatch,
    verbNotFound: ownerCheck.verbNotFound,
    fieldNotFound: ownerCheck.fieldNotFound,
    ownerConflict: ownerCheck.conflict,
    changedMappings: scope.changedMappings,
    uniqueChangedVerbs: scope.uniqueChangedVerbs,
    rawFindings: allRawNorm.length,
    malformedFiltered: malformedCount,
    falsePositive: falsePositives.length + (lunaResult.nonError?.FALSE_POSITIVE || 0) + malformedCount,
    sourceDeIssue: sourceDeIssues.length + (lunaResult.nonError?.SOURCE_DE_ISSUE || 0),
    validated: validatedSev,
    productionChanges,
    unexpectedProductionChanges: productionChanges,
    deChanges: integrity.deChanges,
    syntax: integrity.syntax,
    idOrder: integrity.idOrder,
    formsIntact: integrity.formsIntact,
    verbCount: integrity.verbCount,
    mirrorParity: integrity.mirrorParity,
    lunaRequests: lunaResult.stats.requestCount || 0,
    lunaTokens: lunaResult.stats.totalTokens || 0,
  };

  const totalReal = validatedSev.CRITICAL + validatedSev.HIGH + validatedSev.MEDIUM + validatedSev.LOW;
  const verdict = totalReal === 0 ? "PASS" : "NEEDS OWNER REVIEW";

  const payload = {
    meta: {
      date: new Date().toISOString(),
      branch: BRANCH,
      auditCommit,
      model: LINGUISTIC_MODEL,
      apiModel: DEFAULT_MODEL,
      verdict,
    },
    summary,
    ownerCheck,
    scope,
    rawFindings: allRawNorm,
    validatedReal,
    falsePositives,
    sourceDeIssues,
    integrity,
    lunaUsage: lunaResult.stats,
    realFindings: validatedReal,
  };

  fs.writeFileSync(OUT_JSON, JSON.stringify(payload, null, 2));
  fs.writeFileSync(OUT_MD, buildMarkdown(payload));

  console.log("\n=== Summary ===");
  console.log(JSON.stringify({ ...summary, verdict }, null, 2));

  if (productionChanges) throw new Error("Production changed during audit");
  if (integrity.deChanges) throw new Error("DE changes detected");
  if (integrity.verbCount !== SLOVESA_TOTAL) throw new Error("Verb count mismatch");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
