#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const { buildItMkNlReadinessReport } = require("./lib/g2-a1-production-current/card-translation-it-mk-nl-readiness");

const OUT_DIR = path.join(ROOT, "reports/g2-a1-production-current/card-translation-it-mk-nl-source-chain");

function main() {
  const report = buildItMkNlReadinessReport();
  fs.mkdirSync(OUT_DIR, { recursive: true });

  const jsonPath = path.join(OUT_DIR, "card-translation-it-mk-nl-source-chain.json");
  fs.writeFileSync(jsonPath, `${JSON.stringify(report, null, 2)}\n`);

  const lines = [
    "# G2/A1 kartīšu tulkojums — it / mk / nl audita avotu ķēde",
    "",
    `- **Ģenerēts:** ${report.generatedAt}`,
    `- **Avotu reģistrs:** \`${report.inputs.auditCatalog}\``,
    `- **Pilot verifikācija:** \`${report.inputs.pilotVerification}\``,
    `- **Discovery:** \`${report.inputs.discoveryReport}\``,
    `- **Production / OWNER / MASTER mainīti:** nē`,
    "",
    "## Kopsavilkums",
    "",
    "| Valoda | Audita ķēde | Gala statuss |",
    "|--------|-------------|--------------|",
    `| **it** | BSB 11793257 + MDZ IIIF + IA PDF/OCR | **${report.summary.itStatus}** |`,
    `| **nl** | Nieuw Woordenboek 1787 (3 daļas, MDZ IIIF + IA) | **${report.summary.nlStatus}** |`,
    `| **mk** | — (nav primary) | **${report.summary.mkStatus}** |`,
    "",
    "## Pilot (īss)",
    "",
    "- **it:** Haus, arbeiten, Kleingeld, bewirten ✅; reverse **casa** ✅; MDZ IIIF ✅",
    "- **nl:** Haus, arbeiten ✅; **Klein geld** variants; reverse **Huis** ✅",
    "- **mk:** nav primary avota — discovery evidence tikai",
    "",
    "## Audita secība",
    ...report.auditSequence.map((step) => `${step.step}. ${step.rule}`),
    "",
  ];

  for (const lang of report.languages) {
    lines.push(`## ${lang.appLang.toUpperCase()} — ${lang.readinessClassification}`);
    if (lang.usesNewAuditSources) {
      lines.push("", "> **Jaunie avoti:** reģistrēti audita katalogā.");
    }
    lines.push("");
    if (lang.digitizedAuditStatus) {
      lines.push(`- **Digitizācijas audits:** \`${lang.digitizedAuditStatus}\``);
    }
    if (lang.primaryDigitized?.length) {
      lines.push("### Primārie digitizētie avoti");
      for (const src of lang.primaryDigitized) {
        lines.push(`- **${src.name}** (${src.direction}): ${src.viewerUrl || src.pdfUrl}`);
      }
    }
    if (lang.supplementaryReserve?.length) {
      lines.push("", "### Papildu / rezerves avoti");
      for (const src of lang.supplementaryReserve) {
        lines.push(`- ${src.name} [${src.role}]`);
      }
    }
    if (lang.discoveryEvidenceOnly?.length) {
      lines.push("", "### Discovery evidence (nav primary audit)");
      for (const src of lang.discoveryEvidenceOnly) {
        lines.push(`- ${src.name}: ${src.note || src.role}`);
      }
    }
    lines.push("", "### Avotu secība");
    for (const line of lang.sourceChainPriority) lines.push(`- ${line}`);
    lines.push("", "### Regresija (pilot)");
    lines.push("| Lemma | Solis | Avots | Pāris |");
    lines.push("| --- | --- | --- | --- |");
    for (const row of lang.regressionPilotDe) {
      const pair = row.pairFound ? row.targetGloss || "FOUND" : "NOT_FOUND";
      lines.push(`| ${row.deLemma} | ${row.auditStepUsed} | ${row.sourceName} | ${pair} |`);
    }
    lines.push("");
  }

  fs.writeFileSync(path.join(OUT_DIR, "card-translation-it-mk-nl-source-chain.md"), `${lines.join("\n")}\n`);
  console.log(JSON.stringify({ ok: true, summary: report.summary, jsonPath }, null, 2));
}

main();
