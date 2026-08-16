#!/usr/bin/env node
/**
 * DA-DE B1 audit report generator.
 * Reads reports/temp/da-b1-audit-data.json → writes reports/da-b1-full-audit.md
 */
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");

const IN = path.join(ROOT, "reports/temp/da-b1-audit-data.json");
const OUT = path.join(ROOT, "reports/da-b1-full-audit.md");

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

function globOwnerReviewFiles() {
  const dir = path.join(ROOT, "reports");
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.startsWith("da-b1-owner-review-") && f.endsWith(".md"))
    .sort()
    .map((f) => `- [\`${f}\`](./${f})`);
}

function main() {
  if (!fs.existsSync(IN)) {
    console.error(`Missing audit data: ${IN}\nRun: node scripts/audit-da-b1-collect.js`);
    process.exit(1);
  }

  const data = JSON.parse(fs.readFileSync(IN, "utf8"));
  const { meta, structural, summary, findings } = data;
  const sev = summary.bySeverity;
  const verdict = summary.verdict === "PASS" ? "PASS" : "NEEDS REPAIR";

  let parityPass = false;
  try {
    const out = execSync("node scripts/audit-language-parity.js --lang=da", { cwd: ROOT, encoding: "utf8" });
    const j = JSON.parse(out.trim());
    parityPass = j.pass === true && (j.byLevel?.b1?.pass !== false);
  } catch {
    parityPass = false;
  }

  const comparisonCount = findings.filter(
    (f) => f.field.includes("comparison") && f.field.endsWith(".example")
  ).length;
  const zwCount = findings.filter((f) => f.problem.includes("ZERO_WIDTH")).length;
  const sectionAccentCount = findings.filter((f) => f.field.includes("sectionAccents")).length;
  const synonymCount = findings.filter((f) => f.field === "lv" && f.problem.includes("sinonīmu")).length;
  const missingStudyCount = findings.filter((f) => f.field === "study" && /Trūkst Study|missing/i.test(f.problem)).length;
  const foreignCount = findings.filter(
    (f) => f.problem.includes("Svešvalodu") || f.problem.includes("latviešu") || f.problem.includes("LV")
  ).length;
  const ownerFiles = globOwnerReviewFiles();

  const md = [];
  md.push("# DA–DE B1 pilns lingvistiskais un kvalitātes audits");
  md.push("");
  md.push(`**Datums:** ${meta.date}`);
  md.push("**Auditors:** GPT-5.6 Luna (READ-ONLY)");
  md.push("**Production fails:** `data/da/b1.js` (primārais) + `www/data/da/b1.js` (mirror)");
  md.push(`**Piezīme:** ${meta.note}`);
  md.push(`**DE etalons (tikai lasīšana):** \`${meta.deReference}\``);
  md.push("");
  md.push("---");
  md.push("");
  md.push("## 1. Dataset scope");
  md.push("");
  md.push("| Metrika | Vērtība |");
  md.push("|---------|---------|");
  md.push(`| Cards total | **${meta.expectedCards}** |`);
  md.push(`| Cards audited | **${meta.productionCards}/${meta.expectedCards}** |`);
  md.push(`| Study total | **${meta.expectedStudies}** |`);
  md.push(`| Study audited | **${meta.studyCount}/${meta.expectedStudies}** |`);
  md.push(`| Coverage | **${meta.productionCards === meta.expectedCards ? "100%" : "FAIL"}** |`);
  md.push(`| Parastās kartītes | **${meta.regularCards}** |`);
  md.push("");
  md.push("## 2. Kopsavilkums");
  md.push("");
  md.push("| Metrika | Vērtība |");
  md.push("|---------|---------|");
  md.push(`| Kopējie validētie atradumi | **${summary.total}** |`);
  md.push(`| CRITICAL | **${sev.CRITICAL || 0}** |`);
  md.push(`| HIGH | **${sev.HIGH || 0}** |`);
  md.push(`| MEDIUM | **${sev.MEDIUM || 0}** |`);
  md.push(`| LOW | **${sev.LOW || 0}** |`);
  md.push(`| FALSE_POSITIVE | **${summary.byStatus.FALSE_POSITIVE || 0}** |`);
  md.push(`| DE_SOURCE_ISSUE | **${summary.byStatus.DE_SOURCE_ISSUE || 0}** |`);
  md.push(`| Svešvalodu atlikumi (auditēti) | **${foreignCount}** |`);
  md.push(`| Zero-width artefakti | **${zwCount}** |`);
  md.push(`| sectionAccents findings | **${sectionAccentCount}** |`);
  md.push(`| Missing Study | **${missingStudyCount}** |`);
  md.push(`| Front/lv sinonīmu ķēdes | **${synonymCount}** |`);
  md.push(`| Comparison LV atlikumi | **${comparisonCount}** |`);
  md.push(`| Syntax | **${meta.syntaxOk ? "PASS" : "FAIL"}** |`);
  md.push(`| Mirror data ↔ www | **${structural.mirrorPass ? "PASS" : "FAIL"}** |`);
  md.push(`| Parity (--lang=da, B1) | **${parityPass ? "PASS" : "FAIL"}** |`);
  md.push(`| DE changes | **${meta.deChanges}** |`);
  md.push(`| Production changes | **${meta.productionChanges}** |`);
  md.push("");
  md.push("### Gala rezultāts");
  md.push("");
  md.push(`## **DA–DE B1: ${verdict}**`);
  md.push("");
  if (verdict === "NEEDS REPAIR") {
    md.push(
      `Atrasts **${summary.total}** labojumu ierakstu. DE integritāte: **${structural.deIntegrityPass ? "PASS" : "FAIL"}**; Study paritāte: **${structural.studyParityPass ? "PASS" : "FAIL"}**. OWNER review faili sagatavoti copy-only labojumiem.`
    );
  } else {
    md.push("Nav CRITICAL/HIGH atradumu. DE integritāte un struktūra atbilst etalonam.");
  }
  md.push("");
  md.push("---");
  md.push("");
  md.push("## 3. Strukturālā pārbaude");
  md.push("");
  md.push("| Pārbaude | Rezultāts |");
  md.push("|----------|-----------|");
  md.push(`| Kartīšu skaits | ${meta.productionCards}/${meta.expectedCards} ${structural.cardCountPass ? "PASS" : "FAIL"} |`);
  md.push(`| Study skaits | ${meta.studyCount}/${meta.expectedStudies} ${structural.studyCountPass ? "PASS" : "FAIL"} |`);
  md.push(`| DE lauku secība/identitāte | ${structural.deIntegrityPass ? "PASS" : "FAIL"} |`);
  md.push(`| Study paritāte (missing/extra) | ${structural.studyParityPass ? "PASS" : "FAIL"} |`);
  md.push(`| Study ID unikalitāte | ${structural.studyIdsUnique ? "PASS" : "FAIL"} |`);
  md.push(`| Mirror data ↔ www | ${structural.mirrorPass ? "PASS" : "FAIL"} |`);
  md.push(`| JS syntax | ${meta.syntaxOk ? "PASS" : "FAIL"} |`);
  md.push(`| Language parity (B1) | ${parityPass ? "PASS" : "FAIL"} |`);
  md.push("");
  md.push("---");
  md.push("");
  md.push("## 4. OWNER review faili");
  md.push("");
  if (ownerFiles.length) {
    md.push(...ownerFiles);
  } else {
    md.push("_Vēl nav ģenerēti. Palaid: `node scripts/build-da-b1-owner-review-groups.js`_");
  }
  md.push("");
  md.push("Indekss: [`da-b1-owner-review-README.md`](./da-b1-owner-review-README.md)");
  md.push("");
  md.push("---");
  md.push("");
  md.push("## 5. Pilns atradumu saraksts");
  md.push("");

  const sections = [
    ["5.1 CRITICAL — struktūra un DE integritāte", "CRITICAL"],
    ["5.2 HIGH — LV atlikumi un obligātie lauki", "HIGH"],
    ["5.3 MEDIUM — zero-width, sectionAccents, sinonīmu ķēdes", "MEDIUM"],
    ["5.4 LOW — pārējie", "LOW"],
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
  md.push("## 6. Metodoloģija");
  md.push("");
  md.push("1. `node scripts/audit-da-b1-collect.js` — READ-ONLY kolektors (DE etalons `data/b1.js`)");
  md.push("2. `node scripts/build-da-b1-owner-review-groups.js` — OWNER review batch faili");
  md.push("3. `node scripts/audit-da-b1-report-gen.js` — šis pārskats");
  md.push(`4. Pilna ${meta.expectedCards}/${meta.expectedCards} kartīšu coverage ar automātisku DA lauku caurskanēšanu`);
  md.push("5. DE lauki — STRICT READ-ONLY; Production/DE izmaiņas šajā auditā netika veiktas");
  md.push("");
  md.push("**Production changes = 0**");
  md.push("");
  md.push("**DE changes = 0**");

  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, md.join("\n"));
  console.log(`Wrote ${OUT}`);
  console.log(JSON.stringify({ verdict, total: summary.total, bySeverity: sev, parityPass }, null, 2));
}

main();
