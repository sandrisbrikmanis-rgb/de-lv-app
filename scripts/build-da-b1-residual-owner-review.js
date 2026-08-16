#!/usr/bin/env node
"use strict";
/**
 * Build OWNER review + pre-filled accepted decisions for B1 post-regression residuals.
 * Source: reports/temp/da-b1-audit-data.json after post-regression collect (61 sectionAccent stale).
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./lib/audit-common");

const AUDIT_JSON = path.join(ROOT, "reports/temp/da-b1-audit-data.json");
const BATCH_SIZE = 50;
const PREFIX = "residual-sectionaccents";

function loadWords() {
  const ctx = vm.createContext({ window: {} });
  vm.runInContext(fs.readFileSync(path.join(ROOT, "data/da/b1.js"), "utf8"), ctx);
  return ctx.window.B1_WORDS;
}

function deForFinding(f, daWords) {
  if (f.deContext) return f.deContext;
  const entry = daWords.find((w) => w.study?.id === f.cardId);
  return entry?.de || f.cardId.replace(/^b1-/, "");
}

function cardPath(cardId, field) {
  return `${cardId}.${field}`;
}

function chunk(arr, size) {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

function renderReviewBatch(batch, slug, range, daWords, globalOffset) {
  const lines = [
    `# DA–DE B1 — OWNER review ${slug.replace(/-/g, " ")}`,
    "",
    "Avots: `reports/da-b1-post-regression-audit.md` / `reports/temp/da-b1-audit-data.json`",
    `Findings: **${range}** (${batch.length} ieraksti — post-regression sectionAccent stale)`,
    `Fails: \`reports/da-b1-owner-review-${slug}.md\``,
    "",
    "> **PROPOSED_DA** = FJERN stale termins. Decisions failā jau aizpildīts ar **OWNER accepted** (LABOT).",
    "> **DE lauki nemainīt.** sectionAccents: **FJERN `termins`** noņem akcentu.",
    "",
  ];
  batch.forEach((f, i) => {
    const regNum = globalOffset + i + 1;
    const regId = `DA-B1-RES-${String(regNum).padStart(4, "0")}`;
    const de = deForFinding(f, daWords);
    lines.push(`## Finding ${regNum}`, "");
    lines.push(`**Reg ID:** ${regId}`);
    lines.push(`**Audit ID:** ${f.id}`);
    lines.push(`**Card ID:** ${f.cardId}`);
    lines.push(`**ID / path:** \`${cardPath(f.cardId, f.field)}\``);
    if (de) lines.push(`**DE (read-only):** ${de}`);
    lines.push(`**Severity:** ${f.severity}`);
    lines.push(`**Field:** \`${f.field}\``);
    lines.push(`**Production file:** \`data/da/b1.js\``);
    lines.push(`**CURRENT_DA:** ${f.currentDa}`);
    lines.push(`**PROPOSED_DA:** ${f.proposedDa}`);
    lines.push(`**Problēma:** ${f.problem}`);
    lines.push(`**Audita pamatojums:** ${f.rationale}`);
    lines.push("**Avots:** Post-regression audit (`reports/da-b1-post-regression-audit.md`)");
    lines.push("");
    lines.push(`**OWNER_DECISION:** ${f.proposedDa}`);
    lines.push("");
    lines.push("---");
    lines.push("");
  });
  return lines.join("\n");
}

function renderDecisionsAccepted(batch, slug, range, globalOffset) {
  const lines = [
    `# DA–DE B1 — OWNER decisions (accepted) — ${slug}`,
    "",
    `Avots: \`reports/da-b1-owner-review-${slug}.md\``,
    `Findings: **${range}** (${batch.length} ieraksti)`,
    "",
    "**DE = STRICT READ-ONLY.** Visi ieraksti: **LABOT** = FJERN stale sectionAccent termins (OWNER accepted).",
    "",
    "| # | Reg ID | Card ID | Field | Term | Statuss | OWNER_DECISION |",
    "|--:|---|---|---|---|---|---|",
  ];
  batch.forEach((f, i) => {
    const regNum = globalOffset + i + 1;
    const regId = `DA-B1-RES-${String(regNum).padStart(4, "0")}`;
    const term = String(f.currentDa || "").replace(/`/g, "");
    lines.push(
      `| ${regNum} | ${regId} | \`${f.cardId}\` | \`${f.field}\` | ${term} | **LABOT** | ${f.proposedDa} |`
    );
  });
  lines.push("");
  lines.push("## Kopsavilkums");
  lines.push("");
  lines.push(`- Pārskatīti: **${batch.length}/${batch.length}**`);
  lines.push(`- LABOT: **${batch.length}**`);
  lines.push("- FALSE_POSITIVE: **0**");
  lines.push("- NELABOT: **0**");
  lines.push("- DE izmaiņas: **0**");
  lines.push("");
  return lines.join("\n");
}

function renderReadme(batches, total) {
  const rows = batches
    .map((b) => {
      const review = `da-b1-owner-review-${b.slug}.md`;
      const decisions = `da-b1-owner-decisions-${b.slug}.md`;
      return `| [${review}](./${review}) | ${b.range} | ${b.count} | [${decisions}](./${decisions}) |`;
    })
    .join("\n");

  return `# DA–DE B1 — OWNER accepted (post-regression residuals)

Avots: [da-b1-post-regression-audit.md](./da-b1-post-regression-audit.md) — **61** sectionAccent stale pēc galvenā repair.

Decisions faili jau aizpildīti ar **LABOT** + **FJERN** (OWNER accepted). Var tieši apply:

\`\`\`bash
node scripts/build-da-b1-owner-apply-map.js
node scripts/apply-da-b1-owner-repair.js
\`\`\`

**GitHub indekss:** [da-b1-owner-review-residual-GITHUB.md](./da-b1-owner-review-residual-GITHUB.md)

## Kopsavilkums

| Metrika | Skaitlis |
|---------|----------|
| Post-regression residuals | **${total}** |
| Kategorija | sectionAccent stale (LV/EN termini tip/comparison) |
| LABOT (accepted) | **${total}** |
| Review faili | **${batches.length}** |

## Faili

| Review | Findings | Skaits | Decisions (accepted) |
|--------|----------|--------|------------------------|
${rows}

## Saistītie reporti

- [da-b1-post-regression-audit.md](./da-b1-post-regression-audit.md)
- [da-b1-targeted-regression-audit.md](./da-b1-targeted-regression-audit.md)
- [da-b1-full-audit.md](./da-b1-full-audit.md)
`;
}

function renderGithub(batches, branch, pr) {
  const repo = "sandrisbrikmanis-rgb/de-lv-app";
  const base = `https://github.com/${repo}/blob/${branch}/reports`;
  const link = (f) => `[${f}](${base}/${f})`;
  const lines = [
    `# DA–DE B1 — GitHub: OWNER accepted residuals`,
    "",
    `**Branch:** \`${branch}\` · **PR:** [#${pr}](https://github.com/${repo}/pull/${pr})`,
    "",
    "## Sākt šeit",
    "",
    `| Fails | Apraksts |`,
    `|-------|----------|`,
    `| ${link("da-b1-owner-review-residual-README.md")} | Indekss |`,
    `| ${link("da-b1-post-regression-audit.md")} | Post-regression audits |`,
    "",
    "## Review + Decisions (accepted)",
    "",
  ];
  batches.forEach((b, i) => {
    lines.push(`${i + 1}. ${link(`da-b1-owner-review-${b.slug}.md`)} ↔ ${link(`da-b1-owner-decisions-${b.slug}.md`)} (${b.count})`);
  });
  lines.push("");
  lines.push("**Apply pēc apstiprinājuma:** jau aizpildīti — var upload decisions failus vai apply tieši no repo.");
  lines.push("");
  return lines.join("\n");
}

function main() {
  if (!fs.existsSync(AUDIT_JSON)) {
    console.error(`Missing ${AUDIT_JSON}. Run: node scripts/run-da-b1-post-regression-audit.js`);
    process.exit(1);
  }

  const { findings } = JSON.parse(fs.readFileSync(AUDIT_JSON, "utf8"));
  const residuals = findings
    .filter((f) => f.field.includes("sectionAccents") && /stale/i.test(f.problem))
    .sort((a, b) => String(a.cardId).localeCompare(String(b.cardId)) || String(a.field).localeCompare(String(b.field)));

  if (!residuals.length) {
    console.error("No sectionAccent stale residuals in audit JSON");
    process.exit(1);
  }

  const daWords = loadWords();
  const batches = chunk(residuals, BATCH_SIZE).map((batch, i) => {
    const slug = `${PREFIX}-${String(i + 1).padStart(2, "0")}`;
    const range = `${i * BATCH_SIZE + 1}–${i * BATCH_SIZE + batch.length}`;
    return { slug, batch, range, count: batch.length };
  });

  let offset = 0;
  for (const b of batches) {
    const reviewPath = path.join(ROOT, `reports/da-b1-owner-review-${b.slug}.md`);
    const decisionsPath = path.join(ROOT, `reports/da-b1-owner-decisions-${b.slug}.md`);
    fs.writeFileSync(reviewPath, renderReviewBatch(b.batch, b.slug, b.range, daWords, offset));
    fs.writeFileSync(decisionsPath, renderDecisionsAccepted(b.batch, b.slug, b.range, offset));
    offset += b.count;
  }

  fs.writeFileSync(path.join(ROOT, "reports/da-b1-owner-review-residual-README.md"), renderReadme(batches, residuals.length));
  fs.writeFileSync(
    path.join(ROOT, "reports/da-b1-owner-review-residual-GITHUB.md"),
    renderGithub(batches, process.env.GITHUB_BRANCH || "cursor/da-b1-owner-repair-sectionaccents-misc-fffe", process.env.GITHUB_PR || "548")
  );

  // Combined single-file upload convenience
  const allDecisions = [
    "# DA–DE B1 — OWNER decisions (accepted) — ALL residuals",
    "",
    `Kopā **${residuals.length}** ieraksti. DE = STRICT READ-ONLY.`,
    "",
    "| # | Reg ID | Card ID | Field | Term | Statuss | OWNER_DECISION |",
    "|--:|---|---|---|---|---|---|",
  ];
  residuals.forEach((f, i) => {
    const regId = `DA-B1-RES-${String(i + 1).padStart(4, "0")}`;
    allDecisions.push(
      `| ${i + 1} | ${regId} | \`${f.cardId}\` | \`${f.field}\` | ${f.currentDa} | **LABOT** | ${f.proposedDa} |`
    );
  });
  allDecisions.push("", "## Kopsavilkums", "", `- LABOT: **${residuals.length}**`, "- DE izmaiņas: **0**", "");
  fs.writeFileSync(path.join(ROOT, "reports/da-b1-owner-decisions-residual-all.md"), allDecisions.join("\n"));

  console.log(
    JSON.stringify(
      {
        residuals: residuals.length,
        batches: batches.map((b) => ({ slug: b.slug, count: b.count })),
        files: [
          "reports/da-b1-owner-review-residual-README.md",
          "reports/da-b1-owner-review-residual-GITHUB.md",
          "reports/da-b1-owner-decisions-residual-all.md",
          ...batches.flatMap((b) => [
            `reports/da-b1-owner-review-${b.slug}.md`,
            `reports/da-b1-owner-decisions-${b.slug}.md`,
          ]),
        ],
      },
      null,
      2
    )
  );
}

main();
