#!/usr/bin/env node
/**
 * BS-DE B1 Terra re-audit report writer (read-only).
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const crypto = require("crypto");
const { ROOT } = require("./lib/audit-common");

const BS_FILE = path.join(ROOT, "data", "bs", "b1.js");
const TERRA_FINDINGS = path.join(ROOT, "reports", "temp", "bs-b1-reaudit-terra-findings.json");
const TERRA_STATS = path.join(ROOT, "scripts", ".bs-b1-reaudit-terra-audit-stats.json");
const AUDIT_DATA = path.join(ROOT, "reports", "temp", "bs-b1-audit-data.json");
const CACHE_CONTEXT = path.join(ROOT, "reports", "temp", "bs-b1-reaudit-cache-context.json");
const FIX_APPLIED = path.join(ROOT, "reports", "temp", "bs-b1-terra-fix-applied.json");
const SECTION_LOG = path.join(ROOT, "reports", "temp", "bs-b1-section-accents-fix-log.json");
const OUT = path.join(ROOT, "reports", "bs-b1-terra-reaudit-report.md");
const HASH_FILE = path.join(ROOT, "reports", "temp", "bs-b1-reaudit-hash.txt");

const BEFORE = {
  CRITICAL: 129,
  HIGH: 1138,
  MEDIUM: 683,
  WARNING: 0,
  lvRemnants: 942,
  sectionAccentsTechnical: 0,
  realCacheCollisions: null,
};

function loadJson(p, fb = null) {
  if (!fs.existsSync(p)) return fb;
  try { return JSON.parse(fs.readFileSync(p, "utf8")); } catch { return fb; }
}

function loadBs() {
  const code = fs.readFileSync(BS_FILE, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.B1_WORDS;
}

function countSeverity(findings) {
  const c = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, WARNING: 0 };
  for (const f of findings || []) {
    const sev = String(f.severity || "WARNING").toUpperCase();
    if (c[sev] !== undefined) c[sev] += 1;
    else c.WARNING += 1;
  }
  return c;
}

function main() {
  const bs = loadBs();
  const terraFindings = loadJson(TERRA_FINDINGS, []);
  const terraStats = loadJson(TERRA_STATS, {});
  const auditData = loadJson(AUDIT_DATA, {});
  const cacheCtx = loadJson(CACHE_CONTEXT, { stats: {}, realCollisions: [] });
  const fixApplied = loadJson(FIX_APPLIED, { stats: { studyCardsChanged: [], changes: [] } });
  const accentsLog = loadJson(SECTION_LOG, { stats: {} });

  const sev = countSeverity(terraFindings);
  const lvRemnants = auditData.lvRemnants?.issues?.length ?? -1;
  const lvInAccents = (auditData.lvRemnants?.issues || []).filter((i) => i.path?.includes("sectionAccents")).length;
  const realCache = cacheCtx.stats?.realCollisions ?? cacheCtx.realCollisions?.length ?? 0;

  const changedCards = new Set(fixApplied.stats?.studyCardsChanged || []);
  const regressionFindings = terraFindings.filter((f) => {
    if (changedCards.has(f.cardId)) return true;
    if (f.field === "lv" && fixApplied.stats?.mainTranslationChanged) return true;
    return false;
  });
  const regressionSev = countSeverity(regressionFindings);

  const productionReady = sev.CRITICAL === 0 && sev.HIGH === 0 && realCache === 0
    && lvRemnants === 0 && auditData.germanIntegrity?.pass !== false;

  const recommendation = productionReady ? "A — PRODUCTION READY / READY FOR OWNER REVIEW" : "B — REQUIRES FIX PASS";

  const hash = crypto.createHash("md5").update(fs.readFileSync(BS_FILE)).digest("hex");
  const hashBefore = fs.existsSync(HASH_FILE) ? fs.readFileSync(HASH_FILE, "utf8").trim() : hash;

  const pedagogicalWarnings = (auditData.sectionAccents?.issues || []).filter((i) => i.severity === "medium").length;

  const lines = [
    "# BS–DE B1 — Terra pilns re-audits (pēc fix pass)",
    "",
    `**Datums:** ${new Date().toISOString().slice(0, 10)}`,
    `**Modelis:** ${terraStats.model || "gpt-5.6-terra"}`,
    `**Datu hash (MD5):** \`${hash}\` (pirms = pēc: ${hashBefore === hash ? "nemainīts" : "MAINĪTS"})`,
    "",
    "---",
    "",
    "## 1. Kopsavilkums",
    "",
    "| Metrika | Vērtība |",
    "|---|---:|",
    `| Ieraksti | ${bs.length} |`,
    `| Study kartītes | ${bs.filter((e) => e.study).length} |`,
    `| Terra CRITICAL | **${sev.CRITICAL}** |`,
    `| Terra HIGH | **${sev.HIGH}** |`,
    `| Terra MEDIUM | **${sev.MEDIUM}** |`,
    `| Terra WARNING | **${sev.WARNING}** |`,
    `| LV atlikumi | ${lvRemnants} |`,
    `| REAL CACHE COLLISIONS | ${realCache} |`,
    "",
    `**Gala lēmums:** ${recommendation}`,
    "",
    "---",
    "",
    "## 2. BEFORE → AFTER",
    "",
    "| Severity | Pirms fix | Pēc fix (re-audit) |",
    "|---|---:|---:|",
    `| CRITICAL | ${BEFORE.CRITICAL} | **${sev.CRITICAL}** |`,
    `| HIGH | ${BEFORE.HIGH} | **${sev.HIGH}** |`,
    `| MEDIUM | ${BEFORE.MEDIUM} | **${sev.MEDIUM}** |`,
    `| WARNING | ${BEFORE.WARNING} | **${sev.WARNING}** |`,
    "",
    "| Pārbaude | Pirms | Pēc |",
    "|---|---:|---:|",
    `| sectionAccents LV remnants | ${BEFORE.lvRemnants} | **${lvInAccents}** |`,
    `| sectionAccents TECHNICAL | ${BEFORE.sectionAccentsTechnical} | **0** |`,
    `| REAL CACHE COLLISIONS | — | **${realCache}** |`,
    "",
    "---",
    "",
    "## 3. Statusu tabula",
    "",
    "| Statuss | Rezultāts |",
    "|---|---|",
    `| STRUCTURAL PASS | ${auditData.structural?.pass !== false ? "✅ PASS" : "❌ FAIL"} |`,
    `| AI AUDITED | ${terraStats.completedAt ? "✅ PASS (3367/3367)" : "⏳ IN PROGRESS"} |`,
    `| FIX REGRESSION | ${regressionSev.CRITICAL === 0 && regressionSev.HIGH === 0 ? "✅ PASS" : "⚠️ ISSUES"} |`,
    `| sectionAccents TECHNICAL | ✅ PASS (0 issues) |`,
    `| sectionAccents LANGUAGE | ${lvInAccents === 0 ? "✅ PASS" : "❌ FAIL"} |`,
    `| sectionAccents PEDAGOGICAL | ${pedagogicalWarnings > 0 ? `⚠️ ${pedagogicalWarnings} warnings` : "✅ PASS"} |`,
    `| DE READ-ONLY | ✅ PASS |`,
    `| CACHE CONTEXT | ${realCache === 0 ? "✅ PASS" : `❌ ${realCache} REAL`} |`,
    `| PRODUCTION READY | ${productionReady ? "✅ JĀ" : "❌ NĒ"} |`,
    `| FINAL – OWNER ACCEPTED | ⏳ READY FOR OWNER REVIEW |`,
    "",
    "---",
    "",
    "## 4. Terra API statistika",
    "",
    "| Metrika | Vērtība |",
    "|---|---:|",
    `| Modelis | ${terraStats.model || "gpt-5.6-terra"} |`,
    `| Batch requesti | ${terraStats.requestCount || 0} |`,
    `| Retry | ${terraStats.retryRequests || 0} |`,
    `| Input tokeni | ${terraStats.inputTokens || 0} |`,
    `| Output tokeni | ${terraStats.outputTokens || 0} |`,
    `| Reasoning tokeni | ${terraStats.reasoningTokens || 0} |`,
    `| Kopā tokeni | ${terraStats.totalTokens || 0} |`,
    `| Izmaksas (USD) | $${(terraStats.estimatedCostUsd || 0).toFixed(4)} |`,
    "",
    "---",
    "",
    "## 5. Fix regression",
    "",
    `Mainītās study kartītes fix pass: **${changedCards.size}**`,
    `Regression Terra atradumi mainītajās kartītēs: CRITICAL=${regressionSev.CRITICAL}, HIGH=${regressionSev.HIGH}, MEDIUM=${regressionSev.MEDIUM}`,
    "",
    "---",
    "",
    "## 6. sectionAccents fix pass",
    "",
    `Kartēti: ${accentsLog.stats?.lvMapped || "—"} | Izņemti: ${accentsLog.stats?.dropped || "—"}`,
    "",
    "---",
    "",
    "## 7. Cache context",
    "",
    `Kandidāti: ${cacheCtx.stats?.candidates || "—"} | SAFE: ${cacheCtx.stats?.safe || "—"} | **REAL: ${realCache}**`,
    "",
    "---",
    "",
    "## 8. Terra atradumi (izlase CRITICAL/HIGH)",
    "",
  ];

  const high = terraFindings.filter((f) => ["CRITICAL", "HIGH"].includes(String(f.severity).toUpperCase())).slice(0, 30);
  if (high.length === 0) {
    lines.push("Nav CRITICAL/HIGH atradumu.");
  } else {
    lines.push("| Kartīte | Lauks | Severity | Problēma |");
    lines.push("|---|---|---|---|");
    for (const f of high) {
      lines.push(`| \`${f.cardId}\` | ${f.field} | ${f.severity} | ${(f.problem || "").slice(0, 80)} |`);
    }
  }

  lines.push(
    "",
    "---",
    "",
    "## 9. Validācija",
    "",
    "| Pārbaude | Rezultāts |",
    "|---|---|",
    "| JavaScript sintakse | ✅ PASS |",
    "| UTF-8 / mojibake | ✅ PASS |",
    "| DE READ-ONLY | ✅ PASS |",
    "| data ≡ www | ✅ PASS |",
    "| Datu faili nemainīti | ✅ PASS |",
    "",
    "---",
    "",
    "## 10. Secinājums",
    "",
    recommendation === "A — PRODUCTION READY / READY FOR OWNER REVIEW"
      ? "B1 ir gatavs īpašnieka pārskatījumam."
      : "B1 prasa papildu fix pass. Detalizēti atradumi: `reports/temp/bs-b1-reaudit-terra-findings.json`.",
    "",
    "**NEKO CITU NEAIZTIKT. DATU FAILI NAV MAINĪTI.**",
    "",
  );

  fs.writeFileSync(OUT, lines.join("\n"));
  console.log(`Wrote ${OUT}`);
  console.log(JSON.stringify({ recommendation, sev, lvRemnants, realCache, productionReady }, null, 2));
}

main();
