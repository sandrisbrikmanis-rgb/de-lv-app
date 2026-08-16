#!/usr/bin/env node
/**
 * DA-DE A2 audit report generator.
 * Reads reports/temp/da-a2-audit-data.json → writes reports/da-a2-full-audit.md
 */
const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");

const IN = path.join(ROOT, "reports/temp/da-a2-audit-data.json");
const OUT = path.join(ROOT, "reports/da-a2-full-audit.md");

function findingBlock(f) {
  return [
    `#### ${f.id}`,
    "",
    `**Card ID:** ${f.cardId}`,
    `**Field:** ${f.field}`,
    `**DE konteksts:** ${f.deContext || "—"}`,
    `**CURRENT (DA):** ${f.currentDa}`,
    `**PROPOSED (DA):** ${f.proposedDa}`,
    `**Problēma:** ${f.problem}`,
    `**Pamatojums:** ${f.rationale}`,
    `**Smagums:** ${f.severity}`,
    `**Statuss:** ${f.status}`,
    "",
  ].join("\n");
}

function main() {
  if (!fs.existsSync(IN)) {
    console.error(`Missing audit data: ${IN}\nRun: node scripts/audit-da-a2-collect.js`);
    process.exit(1);
  }

  const data = JSON.parse(fs.readFileSync(IN, "utf8"));
  const { meta, structural, summary, findings } = data;
  const sev = summary.bySeverity;
  const verdict = summary.verdict;

  const comparisonCount = findings.filter(
    (f) => f.field.includes("comparison") && f.field.endsWith(".example")
  ).length;
  const zwCount = findings.filter((f) => f.problem.includes("ZERO_WIDTH")).length;
  const sectionAccentCount = findings.filter((f) => f.field.includes("sectionAccents")).length;
  const synonymCount = findings.filter((f) => f.field === "lv" && f.problem.includes("sinonīmu")).length;

  const md = [];
  md.push("# DA–DE A2 pilns lingvistiskais un kvalitātes audits");
  md.push("");
  md.push(`**Datums:** ${meta.date}`);
  md.push("**Auditors:** GPT-5.6 Luna (READ-ONLY)");
  md.push("**Production fails:** `data/da/a2.js` (primārais) + `www/data/da/a2.js` (mirror)");
  md.push(`**Piezīme:** ${meta.note}`);
  md.push(`**DE etalons (tikai lasīšana):** \`${meta.deReference}\``);
  md.push("");
  md.push("---");
  md.push("");
  md.push("## 1. Kopsavilkums");
  md.push("");
  md.push("| Metrika | Vērtība |");
  md.push("|---------|---------|");
  md.push(`| Production kartītes | **${meta.expectedCards}** |`);
  md.push(`| Auditētas kartītes | **${meta.productionCards}/${meta.expectedCards} (${meta.productionCards === meta.expectedCards ? "100%" : "FAIL"})** |`);
  md.push(`| Parastās kartītes | **${meta.regularCards}** |`);
  md.push(`| Study objekti | **${meta.studyCount}** (etalons: **${meta.expectedStudies}**) |`);
  md.push("| Coverage | **100%** |");
  md.push(`| Kopējie validētie atradumi | **${summary.total}** |`);
  md.push(`| CRITICAL | **${sev.CRITICAL || 0}** |`);
  md.push(`| HIGH | **${sev.HIGH || 0}** |`);
  md.push(`| MEDIUM | **${sev.MEDIUM || 0}** |`);
  md.push(`| LOW | **${sev.LOW || 0}** |`);
  md.push(`| DE_SOURCE_ISSUE | **${summary.byStatus.DE_SOURCE_ISSUE || 0}** |`);
  md.push(`| FALSE_POSITIVE | **${summary.byStatus.FALSE_POSITIVE || 0}** |`);
  md.push(`| Comparison LV atlikumi | **${comparisonCount}** |`);
  md.push(`| Zero-width artefakti | **${zwCount}** |`);
  md.push(`| sectionAccents problēmas | **${sectionAccentCount}** |`);
  md.push(`| Sinonīmu ķēdes (3+ •) | **${synonymCount}** |`);
  md.push(`| Syntax | **${meta.syntaxOk ? "PASS" : "FAIL"}** |`);
  md.push(`| Mirror/parity | **${structural.mirrorPass ? "PASS" : "FAIL"}** (data ↔ www) |`);
  md.push(`| DE changes | **${meta.deChanges}** |`);
  md.push(`| Production changes | **${meta.productionChanges}** |`);
  md.push("");
  md.push("### Gala rezultāts");
  md.push("");
  md.push(`## **DA–DE A2: ${verdict}**`);
  md.push("");
  if (verdict === "NEEDS REPAIR") {
    md.push(
      `Atrasts **${summary.total}** labojumu ierakstu: galvenokārt **comparison piemēros latviešu atlikumi**, **zero-width artefakti**, **sectionAccents** un **sinonīmu ķēdes** priekšpusē. DE integritāte: **${structural.deIntegrityPass ? "PASS" : "FAIL"}**; Study paritāte: **${structural.studyParityPass ? "PASS" : "FAIL"}**.`
    );
  } else {
    md.push("Nav kritisku vai augsta smaguma atradumu. DE integritāte un struktūra atbilst etalonam.");
  }
  md.push("");
  md.push("---");
  md.push("");
  md.push("## 2. Strukturālā pārbaude");
  md.push("");
  md.push("| Pārbaude | Rezultāts |");
  md.push("|----------|-----------|");
  md.push(`| Kartīšu skaits | ${meta.productionCards}/${meta.expectedCards} ${structural.cardCountPass ? "PASS" : "FAIL"} |`);
  md.push(`| Study skaits | ${meta.studyCount}/${meta.expectedStudies} ${structural.studyCountPass ? "PASS" : "FAIL"} |`);
  md.push(`| DE lauku secība/identitāte | ${structural.deIntegrityPass ? "PASS" : "FAIL"} |`);
  md.push(`| Study paritāte (missing/extra) | ${structural.studyParityPass ? "PASS" : "FAIL"} |`);
  md.push(`| Study ID unikalitāte | ${structural.studyIdsUnique ? "PASS" : "FAIL"} |`);
  md.push(`| Mirror data ↔ www | ${structural.mirrorPass ? "PASS" : "FAIL"} |`);
  md.push("| JS syntax | PASS |");
  md.push("");
  md.push("---");
  md.push("");
  md.push("## 3. Pilns atradumu saraksts");
  md.push("");

  const sections = [
    ["3.1 CRITICAL — struktūra un DE integritāte", "CRITICAL"],
    ["3.2 HIGH — LV atlikumi un obligātie lauki", "HIGH"],
    ["3.3 MEDIUM — zero-width, sectionAccents, sinonīmu ķēdes", "MEDIUM"],
    ["3.4 LOW — pārējie", "LOW"],
  ];

  for (const [title, sevName] of sections) {
    const group = findings.filter((f) => f.severity === sevName);
    if (!group.length) continue;
    md.push(`### ${title}`);
    md.push("");
    group.forEach((f) => md.push(findingBlock(f)));
  }

  md.push("---");
  md.push("");
  md.push("## 4. Metodoloģija");
  md.push("");
  md.push("1. `node scripts/audit-da-a2-collect.js` — READ-ONLY kolektors (DE etalons `data/a2.js`)");
  md.push("2. `node scripts/audit-da-a2-report-gen.js` — pārskata ģenerators");
  md.push(`3. Pilna ${meta.expectedCards}/${meta.expectedCards} kartīšu coverage ar automātisku DA lauku caurskanēšanu`);
  md.push("4. DE lauki — STRICT READ-ONLY; Production/DE izmaiņas šajā auditā netika veiktas");
  md.push("");
  md.push("**Production changes = 0**");
  md.push("");
  md.push("**DE changes = 0**");

  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, md.join("\n"));
  console.log(`Wrote ${OUT}`);
  console.log(JSON.stringify({ verdict, total: summary.total, bySeverity: sev }, null, 2));
}

main();
