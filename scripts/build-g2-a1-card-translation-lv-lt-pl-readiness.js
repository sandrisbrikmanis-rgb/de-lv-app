#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const { buildLvLtPlReadinessReport } = require("./lib/g2-a1-production-current/card-translation-lv-lt-pl-readiness");

const OUT_DIR = path.join(ROOT, "reports/g2-a1-production-current/card-translation-lv-lt-pl-readiness");

function main() {
  const report = buildLvLtPlReadinessReport();
  fs.mkdirSync(OUT_DIR, { recursive: true });

  const jsonPath = path.join(OUT_DIR, "card-translation-lv-lt-pl-readiness.json");
  fs.writeFileSync(jsonPath, `${JSON.stringify(report, null, 2)}\n`);

  const lines = [];
  lines.push("# G2/A1 kartīšu tulkojums — lv / lt / pl gatavība (divvalodu audits)");
  lines.push("");
  lines.push(`- **Ģenerēts:** ${report.generatedAt}`);
  lines.push(`- **Avotu reģistrs:** \`${report.inputs.auditCatalog}\``);
  lines.push(`- **Regresijas dokumentācija (6 DE lemmmas):** ${report.summary.regressionDocumentedPass ? "PASS" : "FAIL"}`);
  lines.push(`- **Production / OWNER lēmumi mainīti:** ${report.productionOrOwnerDecisionsModified ? "jā" : "nē"}`);
  lines.push("");
  lines.push("## Audita secība");
  for (const step of report.auditSequence) {
    lines.push(`${step.step}. ${step.rule}`);
  }
  lines.push("");

  for (const lang of report.languages) {
    lines.push(`## ${lang.appLang.toUpperCase()} — ${lang.readinessClassification}`);
    lines.push("");
    lines.push("### Primārie avoti");
    for (const src of lang.primaryModern) {
      lines.push(`- **${src.name}** (${src.direction}): ${src.portalUrl}`);
    }
    lines.push("");
    lines.push("### Papildavoti (tikai ja primārais nedod pāri)");
    for (const src of lang.supplementaryHistorical) {
      const url = src.portalUrl ? ` — ${src.portalUrl}` : "";
      lines.push(`- ${src.name}${url}`);
    }
    lines.push("");
    lines.push("### Regresija (DE pilotlemmas)");
    lines.push("| Lemma | Solis | Avots | Pāris | URL |");
    lines.push("| --- | --- | --- | --- | --- |");
    for (const row of lang.regressionPilotDe) {
      const pair = row.pairFound ? (row.targetGloss || "FOUND") : "NOT_FOUND";
      const url = row.entryUrl ? `[link](${row.entryUrl})` : "—";
      lines.push(`| ${row.deLemma} | ${row.auditStepUsed} | ${row.sourceName} | ${pair} | ${url} |`);
    }
    lines.push("");
    if (lang.cardTranslation32LangSnapshot) {
      const s = lang.cardTranslation32LangSnapshot;
      lines.push(
        `### 32 valodu live verifikācija: cardTranslationReady=${s.cardTranslationReady}, Haus verdict=${s.productionPilotVerdict || "n/a"}, collector=\`${s.collectorId}\``,
      );
      if (s.blockers?.length) lines.push(`- Blockers: ${s.blockers.join(", ")}`);
      if (s.sixLemmaLiveAudit?.rows?.length) {
        lines.push("");
        lines.push("#### Live audits (6 DE lemmas, production CURRENT)");
        lines.push("| Lemma | Strategy | Platform | Verdict | Bilingual URL |");
        lines.push("| --- | --- | --- | --- | --- |");
        for (const row of s.sixLemmaLiveAudit.rows) {
          const url = row.bilingualResultUrl ? `[link](${row.bilingualResultUrl})` : "—";
          lines.push(
            `| ${row.deLemma} | ${row.dictionarySearchStrategy || "—"} | ${row.institutionalPlatform || "—"} | ${row.verdict}${row.definitionFallbackUsed ? " (def.)" : ""} | ${url} |`,
          );
        }
      }
      lines.push("");
    }
  }

  const mdPath = path.join(OUT_DIR, "card-translation-lv-lt-pl-readiness.md");
  fs.writeFileSync(mdPath, `${lines.join("\n")}\n`);

  console.log(
    JSON.stringify(
      {
        ok: true,
        regressionDocumentedPass: report.summary.regressionDocumentedPass,
        paths: [
          "reports/g2-a1-production-current/card-translation-lv-lt-pl-readiness/card-translation-lv-lt-pl-readiness.json",
          "reports/g2-a1-production-current/card-translation-lv-lt-pl-readiness/card-translation-lv-lt-pl-readiness.md",
        ],
      },
      null,
      2,
    ),
  );
}

main();
