#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const { writeJsonAtomic } = require("./lib/g2-a1-production-current/artifacts");
const { verifyStructuredRegistry } = require("./lib/master-language-authority-sources-33");
const { listTargetAdapterMatrix } = require("./lib/g2-a1-production-current/source-adapters/target");

function mdTable(rows) {
  const lines = [
    "| Valoda | ① Normatīvais avots | ② Primārā vārdnīca | ③ Papildu avots | Pašlaik MASTER §3 URL | Trūkst §3 tabulā |",
    "|---|---|---|---|---|---|",
  ];
  for (const r of rows) {
    lines.push(
      `| \`${r.appCode}\` | ${r.norm || "—"} | ${r.dict || "—"} | ${r.add || "—"} | ${r.section3Urls || "—"} | ${r.missing || "—"} |`,
    );
  }
  return lines.join("\n");
}

function main() {
  const verify = verifyStructuredRegistry(ROOT);
  const structured = verify.reconciliation || [];
  const matrix = listTargetAdapterMatrix();

  const loaded = require("./lib/master-language-authority-sources-33").loadStructuredLanguageAuthoritySources();
  const rows = structured.map((r) => {
    const full = loaded.languages.find((l) => l.appCode === r.appCode);
    const m = matrix.find((x) => x.language === r.appCode);
    return {
      appCode: r.appCode,
      norm: full?.LANGUAGE_NORM_AUTHORITY,
      dict: full?.PRIMARY_DICTIONARY_AUTHORITY || "—",
      add: full?.ADDITIONAL_AUTHORITY || "—",
      section3Urls: (r.section3Urls || []).join("; "),
      missing: (r.missingInSection3Table || []).join("; ") || "—",
      registryGapNotes: r.registryGapNotes,
      adapterStatus: m?.liveIntegrationStatus,
      adapterId: m?.adapterId,
    };
  });

  const gate = {
    pass: verify.pass,
    registryIncomplete: verify.registryIncomplete,
    classification: verify.registryIncomplete
      ? "MASTER_REGISTRY_INCOMPLETE"
      : "MASTER_REGISTRY_STRUCTURED_33_OK",
    structuredLanguageCount: verify.languageCount,
    reconciliation: rows,
  };

  writeJsonAtomic("language-authority-registry-reconciliation.json", gate);

  const md = [
    "# G2/A1 — LANGUAGE AUTHORITY REGISTRY RECONCILIATION",
    "",
    `Generated: ${new Date().toISOString()}`,
    "",
    `Classification: **${gate.classification}**`,
    "",
    "Salīdzinājums: MASTER §3 tabula vs `scripts/lib/data/master-language-authority-sources-33.json` (§3.1).",
    "",
    mdTable(rows),
    "",
    "## Piezīmes",
    "",
    verify.registryIncomplete
      ? "Dažiem ierakstiem §3.1 JSON ietver oficiālus URL, kas nav §3 tabulas `urlField` kolonnā — dokumentēts `registryGapNotes` un MASTER §3.1."
      : "Visi §3.1 URL ir saskaņoti ar §3 tabulu.",
    "",
  ].join("\n");

  const mdPath = path.join(ROOT, "reports/g2-a1-production-current/language-authority-registry-reconciliation.md");
  fs.mkdirSync(path.dirname(mdPath), { recursive: true });
  fs.writeFileSync(mdPath, md);

  console.log(JSON.stringify(gate, null, 2));
  process.exit(0);
}

main();
