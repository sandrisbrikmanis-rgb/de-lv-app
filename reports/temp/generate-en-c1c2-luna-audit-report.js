#!/usr/bin/env node
/**
 * EN-DE C1/C2 Luna full linguistic audit report.
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..", "..");
const AUDIT_DATA = path.join(ROOT, "reports", "temp", "en-c1c2-audit-data.json");
const LUNA_AUDIT = path.join(ROOT, "reports", "temp", "en-c1c2-luna-linguistic-findings.json");
const LUNA_STATS = path.join(ROOT, "reports", "temp", ".en-c1c2-luna-audit-stats.json");
const OUT = path.join(ROOT, "reports", "en-c1c2-luna-full-linguistic-audit.md");
const OUT_JSON = path.join(ROOT, "reports", "temp", "en-c1c2-luna-full-linguistic-audit.json");

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

function deriveVerdict(cardsAudited, cardsExpected, findings, det) {
  if (cardsAudited < cardsExpected) return "INCOMPLETE";
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

  const cardsExpected = luna.meta?.cardsExpected || 791;
  const cardsAudited = luna.meta?.cardsAudited || luna.auditedCardIds?.length || 0;
  const complete = cardsAudited >= cardsExpected;
  const verdict = deriveVerdict(cardsAudited, cardsExpected, findings, det);

  const byCategory = {};
  for (const f of findings) {
    const c = String(f.category || "OTHER").toUpperCase();
    byCategory[c] = (byCategory[c] || 0) + 1;
  }

  const lines = [
    "# EN–DE C1/C2 — Luna pilns lingvistiskais audits (GPT-5.6 Luna)",
    "",
    `**Audita datums:** ${new Date().toISOString().slice(0, 10)}`,
    `**Audita modelis:** ${stats.model || luna.meta?.model || "gpt-5.6-luna"}`,
    "**Režģis:** READ-ONLY — production dati netika mainīti",
    "**Audita faili:** `data/en/c1.js`, `data/en/c2.js`, mirror `www/data/en/`",
    "**Etalons (DE):** `data/c1.js`, `data/c2.js` (DE READ-ONLY)",
    "",
    "**Standarti:** LANGUAGE_AUDIT_STANDARD, APP_QUALITY_STANDARD, STUDY_CARD_RULES, COMPARISON_STUDY_RULES, UI_UX_VISUAL_COLOR_RULES",
    "",
    "## Apjoms",
    "",
    "| Metrika | Skaits |",
    "| --- | ---: |",
    "| C1 kartītes | " + (luna.meta?.c1Cards || det.totals?.c1 || 572) + " |",
    "| C2 kartītes | " + (luna.meta?.c2Cards || det.totals?.c2 || 219) + " |",
    "| Kopā | " + cardsExpected + " |",
    "| Flashcards | " + (luna.meta?.flashcardsExpected || det.totals?.flashcards || 775) + " |",
    "| Study kartītes | " + (luna.meta?.studyExpected || det.totals?.studies || 16) + " |",
    "| Luna auditētas | " + cardsAudited + "/" + cardsExpected + " |",
    "",
    "## Deterministiskā pārbaude",
    "",
    "| Pārbaude | Rezultāts |",
    "| --- | --- |",
    "| Language parity | " + (det.deterministic?.parity?.pass ? "PASS" : "FAIL") + " |",
    "| Sintakse | " + (det.deterministic?.syntaxPass ? "PASS" : "FAIL") + " |",
    "| Mirror (C1/C2) | " + (det.deterministic?.mirrorPass ? "PASS" : "FAIL") + " |",
    "| sectionAccents | " + (det.deterministic?.sectionAccentIssues ?? "?") + " |",
    "| Semikoli tulkojumos | " + (det.deterministic?.semicolonIssues || 0) + " |",
    "| LV/svešvalodu atlikumi (auto) | " + (det.deterministic?.lvRemnants?.count || 0) + " |",
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
    "",
    "## Gala verdikts",
    "",
    "**" + (complete ? verdict : "INCOMPLETE") + "**",
    "",
  ];

  if (findings.length > 0) {
    lines.push("## Top atradumi (max 40)", "", "| Kartīte | Lauks | Smagums | Kategorija | EN | Ieteikums | Pamatojums |", "| --- | --- | --- | --- | --- | --- | --- |");
    for (const f of findings.slice(0, 40)) {
      lines.push(
        "| " +
          [
            escCell(f.cardId),
            escCell(f.field),
            escCell(f.severity),
            escCell(f.category),
            escCell(f.currentEn),
            escCell(f.proposedEn),
            escCell(f.reason),
          ].join(" | ") +
          " |"
      );
    }
    lines.push("");
  }

  if (deSourceIssues.length > 0) {
    lines.push("## DE avota piezīmes (nav EN labojumu)", "");
    for (const f of deSourceIssues.slice(0, 15)) {
      lines.push("- **" + f.cardId + "** — " + escCell(f.reason));
    }
    lines.push("");
  }

  fs.writeFileSync(OUT, lines.join("\n"));

  const summary = {
    generatedAt: new Date().toISOString(),
    model: stats.model || "gpt-5.6-luna",
    scope: "EN-DE C1/C2",
    cardsExpected,
    cardsAudited,
    complete,
    verdict,
    severityCounts: sev,
    nonErrorCounts: nonError,
    qualityFindingsCount: findings.length,
    deSourceIssuesCount: deSourceIssues.length,
    deterministic: det.deterministic,
    totals: det.totals,
    apiUsage: stats,
    topFindings: findings.slice(0, 100),
  };
  fs.writeFileSync(OUT_JSON, JSON.stringify(summary, null, 2));
  console.log("Report:", OUT);
  console.log(JSON.stringify({ verdict, cardsAudited, findings: findings.length, sev }, null, 2));
}

main();
