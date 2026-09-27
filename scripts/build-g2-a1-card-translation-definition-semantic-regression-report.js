#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");

const OUT_DIR = path.join(
  ROOT,
  "reports/g2-a1-production-current/card-translation-definition-semantic-regression",
);
const BASE = "card-translation-definition-semantic-regression";

function main() {
  let testOut;
  try {
    testOut = execSync("node scripts/test-g2-a1-card-translation-evidence-ladder.js", {
      cwd: ROOT,
      encoding: "utf8",
    });
  } catch (e) {
    testOut = e.stdout || e.message;
    fs.mkdirSync(OUT_DIR, { recursive: true });
    fs.writeFileSync(path.join(OUT_DIR, `${BASE}.json`), `${testOut}\n`);
    process.exit(1);
  }

  const parsed = JSON.parse(testOut);
  const generatedAt = new Date().toISOString();

  const md = [
    "# Kartīšu tulkojums — definīciju semantikas regresija",
    "",
    `Ģenerēts: ${generatedAt}`,
    "",
    `**Tests:** \`node scripts/test-g2-a1-card-translation-evidence-ladder.js\` → **${parsed.pass ? "PASS" : "FAIL"}**`,
    "",
    "## Pozitīvs piemērs (definīciju ekvivalence)",
    "",
    "| DE | TARGET | Avoti | Rezultāts |",
    "|----|--------|-------|-----------|",
    "| Grenzkonflikt | piirikonflikt | DWDS + EKI Sõnaveeb | `DEFINITION_SEMANTIC_CLEAR` → gala `DEFINITION_EQUIVALENCE_VALIDATED` (bez divvalodu pāra) |",
    "",
    "## Negatīvs piemērs (daļēja jēdzieniska līdzība, cita nozīme)",
    "",
    "| DE | TARGET | Rezultāts |",
    "|----|--------|-----------|",
    "| Grenzkonflikt (piiri konflikts) | töökonflikt | `DEFINITION_SEMANTIC_MISMATCH` → `NEEDS_SOURCE_REVIEW` |",
    "",
    "## Testa kastu kopsavilkums",
    "",
    "| ID | tier | reason |",
    "|----|------|--------|",
  ];

  for (const c of parsed.cases || []) {
    md.push(`| ${c.id} | ${c.tier} | ${c.reason} |`);
  }
  md.push("");

  fs.mkdirSync(OUT_DIR, { recursive: true });
  fs.writeFileSync(
    path.join(OUT_DIR, `${BASE}.json`),
    `${JSON.stringify({ generatedAt, ...parsed }, null, 2)}\n`,
  );
  fs.writeFileSync(path.join(OUT_DIR, `${BASE}.md`), `${md.join("\n")}\n`);

  console.log(
    JSON.stringify(
      {
        pass: parsed.pass,
        caseCount: (parsed.cases || []).length,
        paths: {
          json: path.join(OUT_DIR, `${BASE}.json`),
          md: path.join(OUT_DIR, `${BASE}.md`),
        },
      },
      null,
      2,
    ),
  );
  process.exit(parsed.pass ? 0 : 1);
}

main();
