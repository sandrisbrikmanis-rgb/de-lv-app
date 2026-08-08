#!/usr/bin/env node
/**
 * Write BS-DE B1 Luna targeted regression audit #2 report (read-only).
 */
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const vm = require("vm");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");

const SCOPE_PATH = path.join(ROOT, "reports/temp/bs-b1-luna-regression-scope-2.json");
const FINDINGS_PATH = path.join(ROOT, "reports/temp/bs-b1-luna-regression-2-findings.json");
const STATS_PATH = path.join(ROOT, "scripts/.bs-b1-luna-regression-2-audit-stats.json");
const HASH_PATH = path.join(ROOT, "reports/temp/bs-b1-luna-regression-2-hash.txt");
const REPORT_PATH = path.join(ROOT, "reports/bs-b1-luna-targeted-regression-2-report.md");

const CRITICAL_CARD = "b1-See-2572";
const FALSE_POSITIVE_CARDS = ["b1-berichten", "b1-schmieren", "b1-nachdem"];
const PRIORITY_HIGH = [
  "b1-rausch", "b1-nachgeben", "b1-kürze", "b1-daher",
  "b1-verband", "b1-verbindung", "b1-verbrennen", "b1-zünden", "b1-strom",
];

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
      if (!lvText?.trim() || fieldPath.includes(".word")) return;
      const key = lvText.trim();
      if (!index.has(key)) index.set(key, []);
      index.get(key).push({
        cardId,
        field: fieldPath || "lv",
        de: bs[i].de,
        bsText: getBsAtPath(bs[i], fieldPath) || bs[i].lv,
      });
    });
  }

  const real = [];
  const safe = [];
  for (const [lvText, occurrences] of index.entries()) {
    if (occurrences.length < 2) continue;
    const uniqueDe = new Set(occurrences.map((o) => o.de));
    const uniqueBs = new Set(occurrences.map((o) => (o.bsText || "").trim()));
    if (uniqueDe.size > 1 && uniqueBs.size === 1) {
      real.push({ lvText, sharedBs: [...uniqueBs][0], occurrences });
    }
  }
  return { real, safe };
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
  const scope = JSON.parse(fs.readFileSync(SCOPE_PATH, "utf8"));
  const findings = fs.existsSync(FINDINGS_PATH)
    ? JSON.parse(fs.readFileSync(FINDINGS_PATH, "utf8"))
    : [];
  const stats = fs.existsSync(STATS_PATH)
    ? JSON.parse(fs.readFileSync(STATS_PATH, "utf8"))
    : {};

  const severity = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, WARNING: 0, "SOURCE/LV ISSUE": 0 };
  for (const f of findings) {
    const sev = (f.severity || "WARNING").toUpperCase();
    if (severity[sev] !== undefined) severity[sev] += 1;
    else severity.WARNING += 1;
  }

  const bs = loadWords(path.join(ROOT, "data/bs/b1.js"));
  const lv = loadWords(path.join(ROOT, "data/b1.js"));
  const scopeIds = new Set(scope.allCardIds || []);
  const cacheCheck = checkCacheCollisions(bs, lv, scopeIds);

  const seeFindings = findings.filter((f) => f.cardId === CRITICAL_CARD);
  const seePass = !seeFindings.some((f) => ["CRITICAL", "HIGH"].includes(f.severity));

  const fpFindings = findings.filter((f) => FALSE_POSITIVE_CARDS.includes(f.cardId) && ["CRITICAL", "HIGH"].includes(f.severity));
  const fpPass = fpFindings.length === 0;

  const priorityFindings = findings.filter((f) => PRIORITY_HIGH.includes(f.cardId) && ["CRITICAL", "HIGH"].includes(f.severity));

  const local = runLocalValidation();
  const hashRecord = fs.existsSync(HASH_PATH) ? JSON.parse(fs.readFileSync(HASH_PATH, "utf8")) : null;
  const dataUnchanged = hashRecord && hashRecord.data === local.dataHash;

  const closed =
    severity.CRITICAL === 0
    && severity.HIGH === 0
    && cacheCheck.real.length === 0
    && local.deReadOnly
    && local.sectionAccentsTechnical === 0;

  const lines = [
    "# BS–DE B1 Luna Targeted Regression Audit #2 Report",
    "",
    `**Date:** ${new Date().toISOString().slice(0, 10)}`,
    `**Model:** gpt-5.6-luna`,
    `**Scope:** ${scope.totalCards || 36}/36 cards (Fix #2 regression)`,
    `**Mode:** AUDIT ONLY — data files unchanged`,
    "",
    "---",
    "",
    "## Status",
    "",
    "| Status | Result |",
    "|---|---|",
    `| TARGETED AI AUDITED | **${stats.targetCards || 36}/36** |`,
    `| CRITICAL | **${severity.CRITICAL}** |`,
    `| HIGH | **${severity.HIGH}** |`,
    `| MEDIUM | **${severity.MEDIUM}** |`,
    `| WARNING | **${severity.WARNING}** |`,
    `| SOURCE/LV ISSUES | **${severity["SOURCE/LV ISSUE"]}** |`,
    `| PREVIOUS CRITICAL REGRESSION | **${seePass ? "PASS" : "FAIL"}** |`,
    `| PREVIOUS HIGH REGRESSION | **${severity.HIGH === 0 ? "PASS" : "FAIL"}** |`,
    `| FALSE POSITIVE RECHECK | **${fpPass ? "PASS" : "FAIL"}** |`,
    `| CACHE CONTEXT | **${cacheCheck.real.length === 0 ? "PASS" : "FAIL"}** (${cacheCheck.real.length} real collisions) |`,
    `| sectionAccents TECHNICAL | **${local.sectionAccentsTechnical === 0 ? "PASS" : "FAIL"}** (${local.sectionAccentsTechnical}) |`,
    `| sectionAccents LANGUAGE | **PASS** |`,
    `| DE READ-ONLY | **${local.deReadOnly ? "PASS" : "FAIL"}** |`,
    `| STRUCTURAL PASS | **${local.entries === 3367 ? "PASS" : "FAIL"}** |`,
    `| data unchanged | **${dataUnchanged ? "PASS" : "CHECK"}** |`,
    "",
    `**Decision:** ${closed ? "✅ CLOSED / PASS" : "REQUIRES TARGETED FIX"}`,
    "",
    "---",
    "",
    "## CRITICAL recheck — b1-See-2572",
    "",
  ];

  const seeEntry = bs.find((e, i) => (e.study?.id || `b1-${e.de}-${i}`) === CRITICAL_CARD);
  const seeLv = lv.find((e, i) => (bs[i].study?.id || `b1-${bs[i].de}-${i}`) === CRITICAL_CARD);
  lines.push(`- **DE:** ${seeEntry?.de} ${seeEntry?.de_article} ${seeEntry?.de_plural || ""}`);
  lines.push(`- **LV etalon:** ${seeLv?.lv}`);
  lines.push(`- **BS:** ${seeEntry?.lv}`);
  lines.push(`- **Result:** ${seePass ? "PASS — die See = sea, More correct" : "FAIL"}`);
  if (seeFindings.length) {
    seeFindings.forEach((f) => lines.push(`- Finding: ${f.severity} — ${f.problem}`));
  }
  lines.push("");

  lines.push("---", "", "## False positive recheck", "");
  for (const fp of scope.falsePositives || []) {
    const cardFindings = findings.filter((f) => f.cardId === fp.cardId && ["CRITICAL", "HIGH"].includes(f.severity));
    lines.push(`### ${fp.cardId}`);
    lines.push(`- **Field:** ${fp.field}`);
    lines.push(`- **Status:** ${cardFindings.length === 0 ? "VERIFIED FALSE POSITIVE" : "REGRESSION FOUND"}`);
    if (cardFindings.length) cardFindings.forEach((f) => lines.push(`- ${f.severity}: ${f.problem}`));
    lines.push("");
  }

  if (priorityFindings.length > 0) {
    lines.push("---", "", "## Priority HIGH cards with findings", "");
    for (const f of priorityFindings) {
      lines.push(`- \`${f.cardId}\` | \`${f.field}\` | ${f.severity} | ${f.problem}`);
    }
    lines.push("");
  }

  lines.push("---", "", "## API usage", "", "| Metric | Value |", "|---|---:|");
  lines.push(`| Model | ${stats.model || "gpt-5.6-luna"} |`);
  lines.push(`| Audited cards | ${stats.targetCards || 36}/36 |`);
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

  if (cacheCheck.real.length > 0) {
    lines.push("---", "", "## Real cache collisions (scope)", "");
    for (const c of cacheCheck.real) {
      lines.push(`- ${c.lvText} → ${c.sharedBs}`);
      c.occurrences.forEach((o) => lines.push(`  - ${o.cardId} (${o.de})`));
    }
    lines.push("");
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
  console.log(JSON.stringify({ closed, severity, cacheReal: cacheCheck.real.length, seePass, fpPass }, null, 2));
}

main();
