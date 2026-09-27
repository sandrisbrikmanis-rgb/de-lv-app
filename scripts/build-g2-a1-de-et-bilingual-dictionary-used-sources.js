#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const MANIFEST = require("./lib/data/german-target-dictionary-de-et-used-sources.json");

const OUT_DIR = path.join(
  ROOT,
  "reports/g2-a1-production-current/german-target-dictionary-de-et-used-sources",
);
const BASE = "german-target-dictionary-de-et-used-sources";

function buildMarkdown() {
  const lines = [
    "# DE→ET divvalodu vārdnīcu izmantoto avotu saraksts",
    "",
    `Ģenerēts: ${new Date().toISOString()}`,
    "",
    "## Reģistrētie avoti",
    "",
    "| ID | Nosaukums | Virziens | Izdevējs | Gads | Apjoms | DIGAR | Skatītājs |",
    "|----|-----------|----------|----------|------|--------|-------|-----------|",
  ];

  for (const dict of MANIFEST.dictionaries) {
    const authors = dict.authors?.length ? dict.authors.join("; ") : "—";
    const scope = dict.approxEntryCount ? `~${dict.approxEntryCount.toLocaleString("en-US")} šķirkļi` : "—";
    const archive = dict.digarArchiveUrl || "—";
    lines.push(
      `| ${dict.id} | ${dict.name} | ${dict.direction || "—"} | ${dict.publisher} | ${dict.year} | ${scope} | ${archive} | ${dict.viewerBaseUrl} |`,
    );
    if (dict.authors?.length) {
      lines[lines.length - 1] = lines[lines.length - 1].replace(dict.name, `${dict.name} (${authors})`);
    }
  }

  lines.push(
    "",
    "## Pilotā pārbaudītie šķirkļi — Saksa-eesti (Valgus 1976, DE→ET)",
    "",
    "| DE lemma | Statuss | lpp. | Skatītāja URL | ET tulkojumi |",
    "|----------|---------|------|---------------|--------------|",
  );

  for (const [lemma, entry] of Object.entries(MANIFEST.verifiedEntries)) {
    const gloss = entry.targetTranslations?.length ? entry.targetTranslations.join(", ") : "—";
    const page = entry.page != null ? String(entry.page) : "—";
    const url = entry.viewerUrl || "—";
    lines.push(`| ${lemma} | ${entry.status} | ${page} | ${url} | ${gloss} |`);
  }

  const reverse = MANIFEST.verifiedReverseEntries || {};
  if (Object.keys(reverse).length) {
    lines.push(
      "",
      "## Reverso pāris (Eesti-saksa Valgus 1987, ET→DE → DE→ET apstiprinājums)",
      "",
      "| DE karte | ET šķirkļis | DE gloss (viewer) | lpp. | Skatītāja URL | Statuss |",
      "|----------|-------------|-------------------|------|---------------|---------|",
    );
    for (const [deLemma, entry] of Object.entries(reverse)) {
      lines.push(
        `| ${deLemma} | ${entry.etHeadword} | ${entry.deGlossDisplay || "—"} | ${entry.page} | ${entry.viewerUrl} | ${entry.status} |`,
      );
    }
  }

  lines.push("");
  lines.push(
    "Manifests: `scripts/lib/data/german-target-dictionary-de-et-used-sources.json` · lookup: `scripts/lib/g2-a1-production-current/digar-de-et-bilingual-lookup.js`",
  );
  lines.push("");
  return lines.join("\n");
}

function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const jsonPath = path.join(OUT_DIR, `${BASE}.json`);
  const mdPath = path.join(OUT_DIR, `${BASE}.md`);

  const payload = {
    ...MANIFEST,
    generatedAt: new Date().toISOString(),
    reportClassification: "G2_A1_DE_ET_BILINGUAL_DICTIONARY_USED_SOURCES",
  };

  fs.writeFileSync(jsonPath, `${JSON.stringify(payload, null, 2)}\n`);
  fs.writeFileSync(mdPath, `${buildMarkdown()}\n`);

  console.log(
    JSON.stringify(
      {
        pass: true,
        dictionaryCount: MANIFEST.dictionaries.length,
        verifiedEntryCount: Object.keys(MANIFEST.verifiedEntries).length,
        verifiedReverseEntryCount: Object.keys(MANIFEST.verifiedReverseEntries || {}).length,
        paths: { json: jsonPath, md: mdPath },
      },
      null,
      2,
    ),
  );
}

main();
