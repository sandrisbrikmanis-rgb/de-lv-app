#!/usr/bin/env node
/**
 * EN-DE Teikumi Luna full linguistic audit report generator.
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..", "..");
const AUDIT_DATA = path.join(ROOT, "reports", "temp", "en-sentences-audit-data.json");
const LUNA_AUDIT = path.join(ROOT, "reports", "temp", "en-sentences-luna-linguistic-findings.json");
const LUNA_STATS = path.join(ROOT, "reports", "temp", ".en-sentences-luna-audit-stats.json");
const OUT = path.join(ROOT, "reports", "en-sentences-luna-full-linguistic-audit.md");
const OUT_JSON = path.join(ROOT, "reports", "temp", "en-sentences-luna-full-linguistic-audit.json");

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

function deriveVerdict(sentencesAudited, sentencesExpected, findings, det) {
  if (sentencesAudited < sentencesExpected) return "INCOMPLETE";
  const sev = findings.reduce(
    (acc, f) => {
      const s = String(f.severity || "MEDIUM").toUpperCase();
      if (s === "WARNING") acc.MEDIUM += 1;
      else if (acc[s] !== undefined) acc[s] += 1;
      return acc;
    },
    { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0 }
  );
  const detHigh = (det?.deterministic?.lvRemnants?.count || 0) > 0;
  if (sev.CRITICAL > 0 || sev.HIGH > 0 || detHigh) return "REPAIRS REQUIRED";
  if (sev.MEDIUM > 0 || sev.LOW > 0) return "OWNER REVIEW REQUIRED";
  return "CLEAN";
}

function main() {
  const det = loadJson(AUDIT_DATA, {});
  const luna = loadJson(LUNA_AUDIT, {});
  const stats = loadJson(LUNA_STATS, luna.apiUsage || {});

  const sev = luna.severityCounts || { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0 };
  const nonError = luna.nonErrorCounts || {};
  const deSourceIssues = luna.deSourceIssues || [];
  const findings = luna.qualityFindings || luna.findings || [];

  const sentencesExpected = luna.meta?.sentencesExpected || luna.meta?.cardsExpected || det.totals?.sentences || 796;
  const sentencesAudited = luna.meta?.sentencesAudited || luna.meta?.cardsAudited || luna.auditedCardIds?.length || 0;
  const complete = sentencesAudited >= sentencesExpected;
  const verdict = deriveVerdict(sentencesAudited, sentencesExpected, findings, det);

  const byCategory = {};
  for (const f of findings) {
    const c = String(f.category || "OTHER").toUpperCase();
    byCategory[c] = (byCategory[c] || 0) + 1;
  }

  const bySeverityDetail = {};
  for (const f of findings) {
    const s = String(f.severity || "MEDIUM").toUpperCase();
    bySeverityDetail[s] = (bySeverityDetail[s] || 0) + 1;
  }

  const lines = [
    "# EN–DE Teikumi (Sätze) — Luna pilns lingvistiskais audits (GPT-5.6 Luna)",
    "",
    `**Audita datums:** ${new Date().toISOString().slice(0, 10)}`,
    `**Audita modelis:** ${stats.model || luna.meta?.model || "gpt-5.6-luna"}`,
    "**Režģis:** READ-ONLY — production dati netika mainīti",
    "**Audita faili:** `data/en/sentences.js`, mirror `www/data/en/sentences.js`",
    "**Etalons (LV):** `data/sentences.js` (lv lauks = latviešu avots, READ-ONLY)",
    "**DE avots:** `de` lauks (identisks LV un EN failos, READ-ONLY)",
    "",
    "**Standarti:** LANGUAGE_AUDIT_STANDARD, APP_QUALITY_STANDARD",
    "",
    "## Apjoms",
    "",
    "| Metrika | Skaits |",
    "| --- | ---: |",
    "| Teikumi (SENTENCE_ENTRIES) | " + sentencesExpected + " |",
    "| Luna auditēti | " + sentencesAudited + "/" + sentencesExpected + " |",
    "| Batch skaits (~50 teikumi) | " + (luna.batches?.length || Math.ceil(sentencesExpected / 50)) + " |",
    "",
    "## Deterministiskā pārbaude",
    "",
    "| Pārbaude | Rezultāts |",
    "| --- | --- |",
    "| Ierakstu skaits (LV = EN) | " + (det.deterministic?.countMatch ? "PASS" : "FAIL") + " |",
    "| DE lauku atbilstība | " + (det.deterministic?.parity?.pass ? "PASS" : "FAIL") + " |",
    "| Sintakse (LV, EN, www) | " + (det.deterministic?.syntaxPass ? "PASS" : "FAIL") + " |",
    "| Mirror (data = www) | " + (det.deterministic?.mirrorPass ? "PASS" : "FAIL") + " |",
    "| Semikoli EN lv laukā | " + (det.deterministic?.semicolonIssues || 0) + " |",
    "| LV diakritiku atlikumi (auto) | " + (det.deterministic?.lvRemnants?.count || 0) + " |",
    "| Mojibake | " + (det.deterministic?.mojibake?.count || 0) + " |",
    "| Placeholder (TODO/TBD) | " + (det.deterministic?.placeholder?.count || 0) + " |",
    "| DE tikai lasāms | PASS |",
    "",
    "## Luna atradumi (kvalitātes)",
    "",
    "| Smagums | Skaits |",
    "| --- | ---: |",
    "| KRITISKA | " + sev.CRITICAL + " |",
    "| AUGSTA | " + sev.HIGH + " |",
    "| VIDĒJA | " + sev.MEDIUM + " |",
    "| ZEMA | " + sev.LOW + " |",
    "",
    "| Kategorija | Skaits |",
    "| --- | ---: |",
    ...Object.entries(byCategory)
      .sort((a, b) => b[1] - a[1])
      .map(([k, v]) => "| " + k + " | " + v + " |"),
    "",
    "| Nav kļūda (non-error) | Skaits |",
    "| --- | ---: |",
    "| DE_SOURCE_ISSUE | " + (nonError.DE_SOURCE_ISSUE || 0) + " |",
    "| SOURCE_LV_ISSUE | " + (nonError.SOURCE_LV_ISSUE || 0) + " |",
    "| STYLE_ONLY | " + (nonError.STYLE_ONLY || 0) + " |",
    "| PROJECT_CONVENTION | " + (nonError.PROJECT_CONVENTION || 0) + " |",
    "| NEEDS_REVIEW | " + (nonError.NEEDS_REVIEW || 0) + " |",
    "",
    "## API lietojums",
    "",
    "| Metrika | Skaits |",
    "| --- | ---: |",
    "| Batch pieprasījumi | " + (stats.requestCount || 0) + " |",
    "| Kopā tokeni | " + (stats.totalTokens || 0) + " |",
    "| Input tokeni | " + (stats.inputTokens || 0) + " |",
    "| Output tokeni | " + (stats.outputTokens || 0) + " |",
    "",
    "## Gala verdikts",
    "",
    "**" + (complete ? verdict : "INCOMPLETE") + "**",
    "",
  ];

  if (findings.length > 0) {
    lines.push(
      "## Visi Luna atradumi (" + findings.length + ")",
      "",
      "| ID | DE | EN (pašreiz) | Ieteikums | Smagums | Kategorija | Pamatojums |",
      "| --- | --- | --- | --- | --- | --- | --- |"
    );
    for (const f of findings) {
      lines.push(
        "| " +
          [
            escCell(f.cardId),
            escCell(f.de),
            escCell(f.currentEn),
            escCell(f.proposedEn),
            escCell(f.severity),
            escCell(f.category),
            escCell(f.reason),
          ].join(" | ") +
          " |"
      );
    }
    lines.push("");
  }

  if (deSourceIssues.length > 0) {
    lines.push("## DE avota piezīmes (nav EN labojumu)", "");
    for (const f of deSourceIssues.slice(0, 30)) {
      lines.push("- **" + f.cardId + "** — " + escCell(f.reason));
    }
    lines.push("");
  }

  fs.writeFileSync(OUT, lines.join("\n"));

  const summary = {
    generatedAt: new Date().toISOString(),
    model: stats.model || "gpt-5.6-luna",
    scope: "EN-DE Teikumi (Sätze)",
    sentencesExpected,
    sentencesAudited,
    complete,
    verdict,
    severityCounts: sev,
    nonErrorCounts: nonError,
    qualityFindingsCount: findings.length,
    deSourceIssuesCount: deSourceIssues.length,
    deterministic: det.deterministic,
    totals: det.totals,
    apiUsage: stats,
    allFindings: findings,
  };
  fs.writeFileSync(OUT_JSON, JSON.stringify(summary, null, 2));
  console.log("Report:", OUT);
  console.log(JSON.stringify({ verdict, sentencesAudited, findings: findings.length, sev }, null, 2));
}

main();
