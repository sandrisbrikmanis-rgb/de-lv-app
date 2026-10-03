#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const DATA = require("./lib/data/master-german-target-pdf-bilingual-dictionaries-32.json");

const OUT_DIR = path.join(
  ROOT,
  "reports/g2-a1-production-current/german-target-pdf-bilingual-dictionary-discovery-32",
);
const BASE = "pdf-bilingual-dictionary-discovery-32";

function summarize(lang) {
  const de = lang.deToTarget?.sizeClass || "GAP";
  const rev = lang.targetToDe?.sizeClass || "GAP";
  const comparable =
    lang.pairCompleteness === "BOTH_DIRECTIONS_WIRED" ||
    (de === "COMPARABLE" && rev === "COMPARABLE") ||
    lang.pairCompleteness === "BOTH_DIRECTIONS_ONE_WORK";
  return { de, rev, comparable };
}

function main() {
  const generatedAt = new Date().toISOString();
  const langs = DATA.languages.slice().sort((a, b) => a.appCode.localeCompare(b.appCode));

  const stats = {
    total: langs.length,
    wiredLikeEt: langs.filter((l) => l.pairCompleteness === "BOTH_DIRECTIONS_WIRED").length,
    comparablePair: langs.filter((l) => {
      const s = summarize(l);
      return s.comparable;
    }).length,
    gap: langs.filter((l) => l.deToTarget?.sizeClass === "GAP").length,
    candidateNeedsWork: langs.filter((l) => String(l.pairCompleteness).includes("CANDIDATE")).length,
  };

  const md = [
    "# PDF divvalodu vārdnīcas — 32 mērķvalodas (DE↔TARGET)",
    "",
    `Ģenerēts: ${generatedAt}`,
    "",
    "## Etalons (ET)",
    "",
    "| Virziens | Vārdnīca | Viewer | Piemēra lapa |",
    "|----------|----------|--------|--------------|",
    `| DE→ET | ${DATA.referenceTemplate.deToTarget.title} | ${DATA.referenceTemplate.deToTarget.viewerUrl} | ${DATA.referenceTemplate.deToTarget.examplePageUrl} |`,
    `| ET→DE | ${DATA.referenceTemplate.targetToDe.title} | ${DATA.referenceTemplate.targetToDe.viewerUrl} | ${DATA.referenceTemplate.targetToDe.examplePageUrl} (~${DATA.referenceTemplate.targetToDe.approxEntries} lemma) |`,
    "",
    "## Kopsavilkums",
    "",
    `- Valodas: **${stats.total}**`,
    `- Pilnībā integrētas kā ET (DIGAR): **${stats.wiredLikeEt}**`,
    `- Abvirzienu **COMPARABLE** (vai ekvivalents): **${stats.comparablePair}**`,
    `- **GAP** (nav atvērta PDF pāra): **${stats.gap}**`,
    `- Kandidāti (nepieciešams kataloga audits): **${stats.candidateNeedsWork}**`,
    "",
    "## Visas 32 valodas",
    "",
    "| Valoda | DE→TARGET | TARGET→DE | Apjoma klase (DE / rev) | Statuss | Piezīmes |",
    "|--------|-----------|-----------|-------------------------|---------|----------|",
  ];

  for (const lang of langs) {
    const s = summarize(lang);
    const deUrl = lang.deToTarget?.viewerUrl || "—";
    const revUrl = lang.targetToDe?.viewerUrl || "—";
    const deTitle = lang.deToTarget?.title || "—";
    const revTitle = lang.targetToDe?.title || "—";
    md.push(
      `| **${lang.appCode}** | [${deTitle.slice(0, 48)}](${deUrl === "—" ? "#" : deUrl}) | [${revTitle.slice(0, 48)}](${revUrl === "—" ? "#" : revUrl}) | ${s.de} / ${s.rev} | ${lang.pairCompleteness} | ${(lang.notes || "").replace(/\|/g, "/").slice(0, 120)} |`,
    );
  }

  md.push("");
  md.push("## Apjoma leģenda");
  md.push("");
  for (const [k, v] of Object.entries(DATA.sizeClassLegend)) {
    md.push(`- **${k}**: ${v}`);
  }
  md.push("");
  md.push("Manifests: `scripts/lib/data/master-german-target-pdf-bilingual-dictionaries-32.json`");
  md.push("");

  fs.mkdirSync(OUT_DIR, { recursive: true });
  const jsonPath = path.join(OUT_DIR, `${BASE}.json`);
  const mdPath = path.join(OUT_DIR, `${BASE}.md`);

  fs.writeFileSync(
    jsonPath,
    `${JSON.stringify({ generatedAt, stats, referenceTemplate: DATA.referenceTemplate, languages: langs }, null, 2)}\n`,
  );
  fs.writeFileSync(mdPath, md.join("\n"));

  console.log(JSON.stringify({ generatedAt, stats, json: jsonPath, md: mdPath }, null, 2));
}

main();
