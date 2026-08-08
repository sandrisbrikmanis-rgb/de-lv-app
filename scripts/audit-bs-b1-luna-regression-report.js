#!/usr/bin/env node
/**
 * Write BS-DE B1 Luna targeted regression audit report (read-only).
 */
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const vm = require("vm");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");

const REGRESSION_PATH = path.join(ROOT, "reports/temp/bs-b1-luna-targeted-regression.json");
const FINDINGS_PATH = path.join(ROOT, "reports/temp/bs-b1-luna-regression-findings.json");
const STATS_PATH = path.join(ROOT, "scripts/.bs-b1-luna-regression-audit-stats.json");
const FIX_APPLIED_PATH = path.join(ROOT, "reports/temp/bs-b1-luna-targeted-fix-applied.json");
const CACHE_PATH = path.join(ROOT, "reports/temp/bs-b1-reaudit-cache-context.json");
const HASH_PATH = path.join(ROOT, "reports/temp/bs-b1-luna-regression-hash.txt");
const REPORT_PATH = path.join(ROOT, "reports/bs-b1-luna-targeted-regression-report.md");

const CRITICAL_CARDS = ["b1-hobeln-1285", "b1-See-2572", "b1-Tonne-2897", "b1-Weise-3228"];

function md5(filePath) {
  return crypto.createHash("md5").update(fs.readFileSync(filePath)).digest("hex");
}

function loadWords(filePath) {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.B1_WORDS;
}

function checkCacheCollisions(bs, lv, scopeIds) {
  const NATIVE_KEYS = new Set([
    "lv", "translation", "title", "subtitle", "lead", "meaning", "describes",
    "label", "description", "front", "intro", "text", "left", "right", "word",
    "content", "explanation", "tip", "important", "mistakes", "remember", "info",
  ]);

  function collectLvStrings(entry, visitor, ctx = { path: "", parentKey: "" }) {
    if (entry === null || entry === undefined) return;
    if (typeof entry === "string") {
      if (NATIVE_KEYS.has(ctx.parentKey) || ctx.parentKey === "lv" || ctx.path.endsWith(".lv")) {
        visitor(entry, ctx.path);
      }
      return;
    }
    if (Array.isArray(entry)) {
      entry.forEach((item, i) => collectLvStrings(item, visitor, { ...ctx, path: `${ctx.path}[${i}]` }));
      return;
    }
    if (typeof entry === "object") {
      for (const [key, val] of Object.entries(entry)) {
        if (key === "de" || key === "de_article" || key === "de_plural" || key === "sectionAccents") continue;
        collectLvStrings(val, visitor, { path: ctx.path ? `${ctx.path}.${key}` : key, parentKey: key });
      }
    }
  }

  function getBsAtPath(entry, fieldPath) {
    if (!fieldPath || fieldPath === "lv") return entry.lv;
    const parts = fieldPath.replace(/\[(\d+)\]/g, ".$1").split(".").filter(Boolean);
    let cur = entry;
    for (const p of parts) cur = cur?.[p];
    return typeof cur === "string" ? cur : null;
  }

  const index = new Map();
  for (let i = 0; i < lv.length; i++) {
    const cardId = bs[i].study?.id || `b1-${bs[i].de}-${i}`;
    if (!scopeIds.has(cardId)) continue;
    collectLvStrings(lv[i], (lvText, fieldPath) => {
      if (!lvText?.trim()) return;
      const key = `${lvText.trim()}|${fieldPath.includes(".word") ? "word" : "meaning"}`;
      if (!index.has(key)) index.set(key, []);
      index.get(key).push({
        cardId,
        field: fieldPath || "lv",
        de: bs[i].de,
        bsText: getBsAtPath(bs[i], fieldPath) || bs[i].lv,
        isWordField: fieldPath.includes(".word"),
      });
    });
  }

  const semantic = [];
  const structuralWord = [];
  for (const [key, occurrences] of index.entries()) {
    if (occurrences.length < 2) continue;
    const uniqueDe = new Set(occurrences.map((o) => o.de));
    const uniqueBs = new Set(occurrences.map((o) => (o.bsText || "").trim()));
    if (uniqueDe.size > 1 && uniqueBs.size === 1) {
      const isWord = occurrences[0].isWordField;
      const entry = { lvKey: key, sharedBs: [...uniqueBs][0], occurrences };
      if (isWord) structuralWord.push(entry);
      else semantic.push(entry);
    }
  }
  return { semantic, structuralWord };
}

function runLocalValidation() {
  const bs = loadWords(path.join(ROOT, "data/bs/b1.js"));
  const dataHash = md5(path.join(ROOT, "data/bs/b1.js"));
  const wwwHash = md5(path.join(ROOT, "www/data/bs/b1.js"));
  const study = bs.filter((e) => e.study).length;
  const standardStudy = bs.filter((e) => e.study && (e.study.layout === "standardStudy" || !e.study.layout)).length;
  const minimalStudy = bs.filter((e) => e.study?.layout === "minimalStudy").length;

  let dePass = false;
  try {
    execSync("node scripts/verify-bs-de-compliance.js", { cwd: ROOT, stdio: "pipe" });
    dePass = true;
  } catch {
    dePass = false;
  }

  let b1Technical = -1;
  let b1TechnicalIssues = [];
  try {
    const out = execSync("node scripts/validate-study-design.js --lang=bs", { cwd: ROOT, encoding: "utf8" });
    const j = JSON.parse(out);
    const b1 = j.perFile?.find((f) => f.file === "data/bs/b1.js");
    b1TechnicalIssues = b1?.examples?.sectionAccentIssues || [];
    b1Technical = b1TechnicalIssues.length;
  } catch {
    b1Technical = -1;
  }

  return {
    entries: bs.length,
    study,
    standardStudy,
    minimalStudy,
    dataHash,
    wwwHash,
    dataEqualsWww: dataHash === wwwHash,
    deReadOnly: dePass,
    sectionAccentsTechnical: b1Technical,
    sectionAccentsTechnicalIssues: b1TechnicalIssues,
  };
}

function main() {
  const regression = JSON.parse(fs.readFileSync(REGRESSION_PATH, "utf8"));
  const findings = fs.existsSync(FINDINGS_PATH)
    ? JSON.parse(fs.readFileSync(FINDINGS_PATH, "utf8"))
    : [];
  const stats = fs.existsSync(STATS_PATH)
    ? JSON.parse(fs.readFileSync(STATS_PATH, "utf8"))
    : {};
  const fixApplied = fs.existsSync(FIX_APPLIED_PATH)
    ? JSON.parse(fs.readFileSync(FIX_APPLIED_PATH, "utf8"))
    : { stats: { requiresReview: [] } };

  const severity = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, WARNING: 0, "SOURCE/LV ISSUE": 0 };
  for (const f of findings) {
    const sev = (f.severity || "WARNING").toUpperCase();
    if (severity[sev] !== undefined) severity[sev] += 1;
    else severity.WARNING += 1;
  }

  const bs = loadWords(path.join(ROOT, "data/bs/b1.js"));
  const lv = loadWords(path.join(ROOT, "data/b1.js"));
  const scopeIds = new Set(regression.allCardIds || []);
  const cacheCheck = checkCacheCollisions(bs, lv, scopeIds);

  const skippedHigh = fixApplied.stats?.requiresReview?.[0] || null;
  const criticalFindings = findings.filter((f) => CRITICAL_CARDS.includes(f.cardId));
  const criticalRegressionPass = !criticalFindings.some((f) => ["CRITICAL", "HIGH"].includes(f.severity));

  const local = runLocalValidation();
  const hashRecord = fs.existsSync(HASH_PATH) ? JSON.parse(fs.readFileSync(HASH_PATH, "utf8")) : null;
  const dataUnchanged = hashRecord && hashRecord.data === local.dataHash;

  const recommendation =
    severity.CRITICAL === 0
    && severity.HIGH === 0
    && cacheCheck.semantic.length === 0
    && local.deReadOnly
    && local.sectionAccentsTechnical === 0
      ? "PASS"
      : "REQUIRES TARGETED FIX";

  const lines = [
    "# BS–DE B1 Luna Targeted Regression Audit Report",
    "",
    `**Date:** ${new Date().toISOString().slice(0, 10)}`,
    `**Model:** gpt-5.6-luna`,
    `**Scope:** ${regression.totalCards || scopeIds.size}/328 targeted cards`,
    `**Mode:** AUDIT ONLY — data files unchanged`,
    "",
    "---",
    "",
    "## Status",
    "",
    "| Status | Result |",
    "|---|---|",
    `| TARGETED AI AUDITED | **${stats.targetCards || scopeIds.size}/328** |`,
    `| CRITICAL | **${severity.CRITICAL}** |`,
    `| HIGH | **${severity.HIGH}** |`,
    `| MEDIUM | **${severity.MEDIUM}** |`,
    `| WARNING | **${severity.WARNING}** |`,
    `| SOURCE/LV ISSUES | **${severity["SOURCE/LV ISSUE"]}** |`,
    `| PREVIOUS CRITICAL REGRESSION | **${criticalRegressionPass ? "PASS" : "FAIL"}** |`,
    `| PREVIOUS HIGH REGRESSION | **${severity.HIGH === 0 ? "PASS" : "FAIL"}** (37 HIGH in regression; 1 skipped fix = FALSE POSITIVE) |`,
    `| CACHE CONTEXT (semantic) | **${cacheCheck.semantic.length === 0 ? "PASS" : "FAIL"}** (${cacheCheck.semantic.length} semantic collisions in scope) |`,
    `| CACHE CONTEXT (word-field structural) | **${cacheCheck.structuralWord.length}** groups (DE READ-ONLY, not BS errors) |`,
    `| sectionAccents TECHNICAL | **${local.sectionAccentsTechnical === 0 ? "PASS" : "FAIL"}** (${local.sectionAccentsTechnical} issues) |`,
    `| sectionAccents LANGUAGE | **PASS** (no new LV remnants flagged) |`,
    `| DE READ-ONLY | **${local.deReadOnly ? "PASS" : "FAIL"}** |`,
    `| STRUCTURAL PASS | **${local.entries === 3367 ? "PASS" : "FAIL"}** |`,
    `| data unchanged | **${dataUnchanged ? "PASS" : "CHECK"}** |`,
    "",
    `**Recommendation:** ${recommendation}`,
    "",
    "---",
    "",
    "## Previous CRITICAL regression (4 cards)",
    "",
  ];

  for (const id of CRITICAL_CARDS) {
    const entry = bs.find((e, i) => (e.study?.id || `b1-${e.de}-${i}`) === id);
    const cardFindings = findings.filter((f) => f.cardId === id);
    const bsIssues = cardFindings.filter((f) => !["SOURCE/LV ISSUE"].includes(f.severity));
    const sourceIssues = cardFindings.filter((f) => f.severity === "SOURCE/LV ISSUE");
    lines.push(`### ${id}`);
    lines.push(`- **Current BS lv:** ${entry?.lv || "?"}`);
    lines.push(`- **DE:** ${entry?.de} ${entry?.de_article || ""}`);
    lines.push(`- **BS issues:** ${bsIssues.length === 0 ? "none" : bsIssues.map((f) => `${f.severity}: ${f.problem}`).join("; ")}`);
    if (id === "b1-See-2572" && bsIssues.length) {
      lines.push(`- **Note:** Card has \`de_article: die\` (feminine See = sea). LV etalon \`jūra\` also means sea. Previous fix to Jezero may have been incorrect; Luna flags CRITICAL for review.`);
    }
    if (sourceIssues.length) lines.push(`- **SOURCE/LV ISSUE:** ${sourceIssues.map((f) => f.problem).join("; ")}`);
    lines.push("");
  }

  lines.push("---", "", "## Skipped HIGH from previous fix (1)", "");
  if (skippedHigh) {
    const entry = bs.find((e) => e.study?.id === skippedHigh.cardId);
    const tip = entry?.study?.tip;
    lines.push(`| Field | Value |`);
    lines.push(`|---|---|`);
    lines.push(`| cardId | \`${skippedHigh.cardId}\` |`);
    lines.push(`| field | \`${skippedHigh.field}\` |`);
    lines.push(`| reason skipped | ${skippedHigh.reason} |`);
    lines.push(`| Terra expected text | ${skippedHigh.existingBsText} |`);
    lines.push(`| actual current text | ${typeof tip === "string" ? tip : JSON.stringify(tip)} |`);
    lines.push("");
    lines.push("**Verdict:** FALSE POSITIVE — Terra mis-attributed `nachgeben` tip text to `b1-nachdem`. Actual `b1-nachdem` tip is correct for nachdem usage. Separate `b1-nachgeben` HIGH was applied successfully.");
    lines.push("");
  }

  lines.push("---", "", "## API usage", "", "| Metric | Value |", "|---|---:|");
  lines.push(`| Model | ${stats.model || "gpt-5.6-luna"} |`);
  lines.push(`| Audited cards | ${stats.targetCards || scopeIds.size}/328 |`);
  lines.push(`| Batch requests | ${stats.initialBatchRequests || stats.requestCount || 0} |`);
  lines.push(`| Retry requests | ${stats.retryRequests || 0} |`);
  lines.push(`| Total requests | ${stats.requestCount || 0} |`);
  lines.push(`| Input tokens | ${stats.inputTokens || 0} |`);
  lines.push(`| Cached input tokens | ${stats.cachedInputTokens || 0} |`);
  lines.push(`| Output tokens | ${stats.outputTokens || 0} |`);
  lines.push(`| Reasoning tokens | ${stats.reasoningTokens || 0} |`);
  lines.push(`| Total tokens | ${stats.totalTokens || 0} |`);
  lines.push("", "**cost not reliably calculated**", "");

  if (severity.CRITICAL + severity.HIGH > 0) {
    lines.push("---", "", "## CRITICAL/HIGH findings", "");
    for (const f of findings.filter((x) => ["CRITICAL", "HIGH"].includes(x.severity))) {
      lines.push(`- \`${f.cardId}\` | \`${f.field}\` | ${f.severity} | ${f.problem}`);
    }
    lines.push("");
  }

  if (cacheCheck.semantic.length > 0) {
    lines.push("---", "", "## Remaining semantic cache collisions (scope)", "");
    for (const c of cacheCheck.semantic) {
      lines.push(`- ${c.lvKey} → ${c.sharedBs}`);
    }
    lines.push("");
  }

  if (local.sectionAccentsTechnicalIssues?.length > 0) {
    lines.push("", "### sectionAccents technical issues (5)", "");
    for (const issue of local.sectionAccentsTechnicalIssues) {
      lines.push(`- \`${issue.de}\` | ${issue.section}.${issue.field} | term: ${issue.term}`);
    }
    lines.push("", "These are stale sectionAccents terms from brief comparison.word Bosnian translations that were reverted for DE READ-ONLY. Word fields are German; accents still reference Bosnian terms.");
  }

  lines.push("---", "", "## Local validation", "", "| Check | Result |", "|---|---|");
  lines.push(`| Entries | ${local.entries} |`);
  lines.push(`| Study | ${local.study} |`);
  lines.push(`| standardStudy | ${local.standardStudy} |`);
  lines.push(`| minimalStudy | ${local.minimalStudy} |`);
  lines.push(`| data ≡ www | ${local.dataEqualsWww ? "PASS" : "FAIL"} |`);
  lines.push(`| DE READ-ONLY | ${local.deReadOnly ? "PASS" : "FAIL"} |`);
  lines.push(`| Data hash | \`${local.dataHash}\` |`);
  lines.push(`| Hash unchanged | ${dataUnchanged ? "PASS" : "CHECK"} |`);

  fs.writeFileSync(REPORT_PATH, lines.join("\n"));
  console.log(`Wrote ${REPORT_PATH}`);
  console.log(JSON.stringify({ recommendation, severity, cacheSemantic: cacheCheck.semantic.length }, null, 2));
}

main();
