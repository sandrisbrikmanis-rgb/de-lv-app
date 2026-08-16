#!/usr/bin/env node
"use strict";
/**
 * Build OWNER review for 11 final repair regression stale sectionAccents.
 * Source: reports/temp/da-b1-final-repair-regression-audit.json
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./lib/audit-common");

const AUDIT_JSON = path.join(ROOT, "reports/temp/da-b1-final-repair-regression-audit.json");
const REVIEW = path.join(ROOT, "reports/da-b1-owner-review-final-regression-01.md");
const DECISIONS = path.join(ROOT, "reports/da-b1-owner-decisions-final-regression-01.md");
const README = path.join(ROOT, "reports/da-b1-owner-review-final-regression-README.md");
const SLUG = "final-regression-01";

function loadWords() {
  const ctx = vm.createContext({ window: {} });
  vm.runInContext(fs.readFileSync(path.join(ROOT, "data/da/b1.js"), "utf8"), ctx);
  return ctx.window.B1_WORDS;
}

function toOwnerField(field) {
  let f = field.startsWith("study.") ? field : `study.${field}`;
  f = f.replace(/\.(blue|green|yellow|orange|purple|red)\[(\d+)\]/g, ".$1.[$2]");
  return f;
}

function cardPath(cardId, field) {
  return `${cardId}.${field}`;
}

function deForCard(cardId, daWords) {
  const entry = daWords.find((w) => w.study?.id === cardId);
  return entry?.de || cardId.replace(/^b1-/, "");
}

function main() {
  const audit = JSON.parse(fs.readFileSync(AUDIT_JSON, "utf8"));
  const findings = audit.findings.filter((f) => f.problem.startsWith("stale_accent"));
  const daWords = loadWords();

  const reviewLines = [
    "# DA–DE B1 — OWNER review final regression 01",
    "",
    "Avots: [`da-b1-final-repair-regression-audit.md`](./da-b1-final-repair-regression-audit.md)",
    `Findings: **1–${findings.length}** (${findings.length} ieraksti — residual stale sectionAccents pēc pilna repair)`,
    `Fails: \`reports/da-b1-owner-review-${SLUG}.md\``,
    "",
    "> **PROPOSED_DA** = ieteikums (parasti **FJERN `termins`**). Ieraksti lēmumu laukā **OWNER_DECISION** vai tabulā [`da-b1-owner-decisions-final-regression-01.md`](./da-b1-owner-decisions-final-regression-01.md).",
    "> **DE lauki nemainīt.** sectionAccents: **FJERN `termins`** noņem akcentu; alternatīvi var norādīt jaunu akcenta terminu, ja tas atbilst Study DA tekstam.",
    "",
    "## Kopsavilkuma tabula",
    "",
    "| # | Reg ID | Card ID | Field | CURRENT |",
    "|--:|---|---|---|---|",
  ];

  findings.forEach((f, i) => {
    const num = i + 1;
    const regId = `DA-B1-FRR-${String(num).padStart(4, "0")}`;
    const field = toOwnerField(f.field);
    reviewLines.push(`| ${num} | ${regId} | \`${f.cardId}\` | \`${field}\` | ${f.currentDa} |`);
  });

  reviewLines.push("", "---", "");

  findings.forEach((f, i) => {
    const num = i + 1;
    const regId = `DA-B1-FRR-${String(num).padStart(4, "0")}`;
    const field = toOwnerField(f.field);
    const de = deForCard(f.cardId, daWords);
    const proposed = `FJERN «${f.currentDa}»`;

    reviewLines.push(`## Finding ${num}`, "");
    reviewLines.push(`**Reg ID:** ${regId}`);
    reviewLines.push(`**Audit ID:** ${f.id}`);
    reviewLines.push(`**Card ID:** ${f.cardId}`);
    reviewLines.push(`**ID / path:** \`${cardPath(f.cardId, field)}\``);
    if (de) reviewLines.push(`**DE (read-only):** ${de}`);
    reviewLines.push(`**Severity:** ${f.severity}`);
    reviewLines.push(`**Field:** \`${field}\``);
    reviewLines.push(`**Production file:** \`data/da/b1.js\``);
    reviewLines.push(`**CURRENT:** ${f.currentDa}`);
    reviewLines.push(`**PROPOSED_DA:** ${proposed}`);
    reviewLines.push(`**Problēma:** sectionAccents stale — termins nav Study DA saturā`);
    reviewLines.push(`**Audita pamatojums:** ${f.rationale}`);
    reviewLines.push(
      "**Avots:** Final repair regression audit (`reports/da-b1-final-repair-regression-audit.md`)"
    );
    reviewLines.push("");
    reviewLines.push("**OWNER_DECISION:**");
    reviewLines.push("");
    reviewLines.push("---");
    reviewLines.push("");
  });

  const decisionLines = [
    `# DA–DE B1 — OWNER decisions — ${SLUG}`,
    "",
    `Avots: \`reports/da-b1-owner-review-${SLUG}.md\``,
    `Findings: **1–${findings.length}** (${findings.length} ieraksti)`,
    "",
    "**DE = STRICT READ-ONLY.** Aizpildi **OWNER_DECISION** katram ierakstam (piem., `LABOT` + `FJERN «termins»` vai `NELABOT`).",
    "",
    "| # | Reg ID | Card ID | Field | CURRENT | OWNER_DECISION |",
    "|--:|---|---|---|---|---|",
  ];

  findings.forEach((f, i) => {
    const num = i + 1;
    const regId = `DA-B1-FRR-${String(num).padStart(4, "0")}`;
    const field = toOwnerField(f.field);
    decisionLines.push(
      `| ${num} | ${regId} | \`${f.cardId}\` | \`${field}\` | ${f.currentDa} | |`
    );
  });

  decisionLines.push(
    "",
    "## Kopsavilkums",
    "",
    `- Pārskatīti: **0/${findings.length}**`,
    "- LABOT: **0**",
    "- FALSE_POSITIVE: **0**",
    "- NELABOT: **0**",
    "- DE izmaiņas: **0**",
    ""
  );

  const readme = `# DA–DE B1 — OWNER review (final regression residuals)

Avots: [da-b1-final-repair-regression-audit.md](./da-b1-final-repair-regression-audit.md) — **11** residual stale sectionAccents, kas bloķē repair closure.

## Faili

| Review | Decisions |
|--------|-----------|
| [da-b1-owner-review-final-regression-01.md](./da-b1-owner-review-final-regression-01.md) | [da-b1-owner-decisions-final-regression-01.md](./da-b1-owner-decisions-final-regression-01.md) |

## Pēc OWNER lēmumiem

\`\`\`bash
node scripts/build-da-b1-owner-apply-map.js
node scripts/apply-da-b1-owner-repair.js
node scripts/run-da-b1-final-repair-regression-audit.js
\`\`\`
`;

  fs.writeFileSync(REVIEW, reviewLines.join("\n"));
  fs.writeFileSync(DECISIONS, decisionLines.join("\n"));
  fs.writeFileSync(README, readme);

  console.log(
    JSON.stringify(
      {
        findings: findings.length,
        review: REVIEW,
        decisions: DECISIONS,
        readme: README,
      },
      null,
      2
    )
  );
}

main();
