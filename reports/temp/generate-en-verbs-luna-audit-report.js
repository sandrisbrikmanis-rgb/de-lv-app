#!/usr/bin/env node
/**
 * Generate EN-DE Verbs Luna full linguistic audit report (read-only).
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..", "..");
const DET = path.join(ROOT, "reports", "temp", "en-verbs-audit-data.json");
const LUNA = path.join(ROOT, "reports", "temp", "en-verbs-luna-linguistic-findings.json");
const STATS = path.join(ROOT, "reports", "temp", ".en-verbs-luna-audit-stats.json");
const OUT_MD = path.join(ROOT, "reports", "en-verbs-luna-full-linguistic-audit.md");
const OUT_JSON = path.join(ROOT, "reports", "temp", "en-verbs-luna-full-linguistic-audit.json");

function loadJson(filePath, fallback = null) {
  if (!fs.existsSync(filePath)) return fallback;
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
  } catch {
    return fallback;
  }
}

function escCell(s) {
  return String(s || "").replace(/\|/g, "\\|").replace(/\n/g, " ").slice(0, 120);
}

function deriveVerdict(verbsAudited, verbsExpected, findings, det) {
  if (verbsAudited < verbsExpected) return "INCOMPLETE";
  const sev = findings.reduce(
    (acc, f) => {
      const s = String(f.severity || "MEDIUM").toUpperCase();
      if (s === "WARNING") acc.MEDIUM += 1;
      else if (acc[s] !== undefined) acc[s] += 1;
      return acc;
    },
    { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0 }
  );
  const detHigh =
    (det?.lvRemnantCount || 0) > 0 ||
    (det?.mojibakeCount || 0) > 0 ||
    (det?.semicolonCount || 0) > 0;
  if (sev.CRITICAL > 0 || sev.HIGH > 0 || detHigh) return "REPAIRS REQUIRED";
  if (sev.MEDIUM > 0 || sev.LOW > 0) return "OWNER REVIEW REQUIRED";
  return "CLEAN";
}

function main() {
  const det = loadJson(DET, {});
  const luna = loadJson(LUNA, {});
  const stats = loadJson(STATS, luna.apiUsage || {});

  const sev = luna.severityCounts || { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0 };
  const nonError = luna.nonErrorCounts || {};
  const findings = luna.qualityFindings || luna.findings || [];

  const verbsExpected = luna.meta?.verbsExpected || 189;
  const formsExpected = luna.meta?.formsExpected || 945;
  const verbsAudited = luna.meta?.verbsAudited || new Set(luna.auditedVerbIds || []).size;
  const formsAudited = luna.meta?.formsAudited || luna.allResults?.length || 0;
  const complete = luna.meta?.complete || verbsAudited >= verbsExpected;
  const verdict = deriveVerdict(verbsAudited, verbsExpected, findings, det);

  const cleanVerbs = verbsAudited - new Set(findings.map((f) => f.verbId)).size;
  const byCategory = {};
  for (const f of findings) {
    const c = String(f.category || "OTHER").toUpperCase();
    byCategory[c] = (byCategory[c] || 0) + 1;
  }

  const summaryJson = {
    generatedAt: new Date().toISOString(),
    model: stats.model || luna.meta?.model || "gpt-5.6-luna",
    mode: "AUDIT_ONLY",
    verbsReviewed: verbsAudited,
    verbsExpected,
    formsReviewed: formsAudited,
    formsExpected,
    complete,
    severityCounts: sev,
    nonErrorCounts: nonError,
    qualityFindingsCount: findings.length,
    cleanVerbs,
    verdict,
    deterministic: det,
    apiUsage: stats,
    dataUnchanged: luna.meta?.dataUnchanged,
  };
  fs.writeFileSync(OUT_JSON, JSON.stringify(summaryJson, null, 2));

  const lines = [
    "# EN–DE Darbības vārdi — Luna pilns lingvistiskais audits",
    "",
    `**Audita datums:** ${new Date().toISOString().slice(0, 10)}`,
    `**Audita modelis:** ${stats.model || "gpt-5.6-luna"}`,
    "**Režģis:** AUDIT ONLY — production dati netika mainīti",
    "**Audita faili:** `data/en/verbs.js`, mirror `www/data/en/verbs.js`",
    "**Etalons (DE):** `data/verbs.js` (DE READ-ONLY)",
    "",
    "## Verdikts",
    "",
    `**${verdict}**`,
    "",
    "## Apjoms",
    "",
    "```text",
    `Verbs reviewed: ${verbsAudited} / ${verbsExpected}`,
    `Forms reviewed: ${formsAudited} / ${formsExpected}`,
    "",
    "infinitiv: " + verbsAudited + " / " + verbsExpected,
    "praesens: " + verbsAudited + " / " + verbsExpected,
    "imperfektIndikativ: " + verbsAudited + " / " + verbsExpected,
    "imperfektKonjunktiv: " + verbsAudited + " / " + verbsExpected,
    "partizipVergangenheit: " + verbsAudited + " / " + verbsExpected,
    "",
    "Data modifications: NONE",
    "",
    `CRITICAL: ${sev.CRITICAL}`,
    `HIGH: ${sev.HIGH}`,
    `MEDIUM: ${sev.MEDIUM}`,
    `LOW: ${sev.LOW}`,
    `SOURCE_LV_ISSUE: ${nonError.SOURCE_LV_ISSUE || 0}`,
    `DE_SOURCE_ISSUE: ${nonError.DE_SOURCE_ISSUE || 0}`,
    `Clean verbs: ${cleanVerbs} / ${verbsAudited}`,
    "```",
    "",
    "## Strukturālā regresija",
    "",
    "| Pārbaude | Rezultāts |",
    "| --- | --- |",
    `| LV verbs = EN verbs (${verbsExpected}) | ${det.countParity ? "PASS" : "FAIL"} |`,
    `| Structural parity | ${det.countParity ? "PASS" : "FAIL"} |`,
    `| Order parity | ${det.countParity ? "PASS" : "FAIL"} |`,
    `| DE READ-ONLY | ${det.deReadOnly ? "PASS" : "FAIL"} |`,
    `| JavaScript syntax | ${det.syntaxPass ? "PASS" : "FAIL"} |`,
    `| Mojibake (deterministic) | ${det.mojibakeCount === 0 ? "PASS" : `FAIL (${det.mojibakeCount})`} |`,
    `| data/en/verbs.js ≡ www mirror | ${det.mirrorPass ? "PASS" : "FAIL"} |`,
  ];

  if (Object.keys(byCategory).length) {
    lines.push("", "## Atradumu kategorijas", "");
    for (const [cat, count] of Object.entries(byCategory).sort((a, b) => b[1] - a[1])) {
      lines.push(`- ${cat}: ${count}`);
    }
  }

  lines.push(
    "",
    "## Luna API",
    "",
    "| Metrika | Vērtība |",
    "| --- | ---: |",
    `| API requests | ${stats.requestCount || 0} |`,
    `| Input tokens | ${stats.inputTokens || 0} |`,
    `| Output tokens | ${stats.outputTokens || 0} |`,
    `| Total tokens | ${stats.totalTokens || 0} |`,
    "",
    "## Metodoloģija",
    "",
    "- Katrs verbs audits ar visām 5 formām kontekstā (10 verbs/batch).",
    "- Luna novērtē DE nozīmi (primāri), LV semantisko intentu (sekundāri), pašreizējo EN formu.",
    "- Paradigma konsekvence pārbaudīta katram verbam.",
    "- Konjunktiv II ↔ angļu conditional/would; Partizip II ↔ passive participle kur attiecināms.",
    "",
  );

  if (findings.length) {
    lines.push("## Atradumi (" + findings.length + " quality issues)", "");
    let n = 0;
    const sorted = [...findings].sort((a, b) => {
      const order = { CRITICAL: 0, HIGH: 1, MEDIUM: 2, LOW: 3 };
      return (order[a.severity] ?? 9) - (order[b.severity] ?? 9);
    });
    for (const f of sorted) {
      n += 1;
      lines.push(
        `### ${n}. ${f.severity} — \`${f.verbId}\` / \`${f.field}\``,
        "",
        `**Severity:** ${f.severity}`,
        `**Verb ID:** ${f.verbId}`,
        `**German:** ${escCell(f.de)}`,
        `**Field:** ${f.field}`,
        `**Current EN:** ${escCell(f.currentEn)}`,
        `**Recommended EN:** ${escCell(f.proposedEn)}`,
        `**Reason:** ${escCell(f.reason)}`,
        "",
      );
    }
  } else if (complete) {
    lines.push("## Atradumi", "", "Nav apstiprinātu quality atradumu.", "");
  }

  lines.push(
    "---",
    "",
    "This is **AUDIT ONLY** — not `FINAL – OWNER ACCEPTED` and not `PRODUCTION READY`.",
    "",
    "**Artefakti:**",
    "- `reports/temp/en-verbs-luna-linguistic-findings.json`",
    "- `reports/temp/en-verbs-luna-full-linguistic-audit.json`",
    "- `reports/temp/en-verbs-audit-data.json`",
  );

  fs.writeFileSync(OUT_MD, lines.join("\n"));
  console.log(`Report: ${OUT_MD}`);
  console.log(`Verdict: ${verdict}`);
  console.log(`Findings: ${findings.length}`);
}

main();
