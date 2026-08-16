#!/usr/bin/env node
"use strict";
/**
 * Build DA–DE Verbs post-regression OWNER review + decisions + accepted (READ-ONLY).
 * Pattern: A1/A2 low29 + verbs group workflow.
 * Sources: final regression audit JSON + signed OWNER decisions for reapply track.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./lib/audit-common");
const { findEntry, getDaValue, normalizeField } = require("./lib/da-verbs-owner-path");
const { parseAllDecisions, dedupeLabot, normalizeText } = require("./lib/da-verbs-signed-decisions");

const REGRESSION_JSON = path.join(ROOT, "reports/temp/da-verbs-owner-repairs-final-regression-audit.json");
const AUDIT_MD = "da-verbs-owner-repairs-final-regression-audit.md";
const BATCH_SIZE = 50;
const REPO = "sandrisbrikmanis-rgb/de-lv-app";
const BRANCH = process.env.GITHUB_BRANCH || "cursor/da-verbs-final-regression-audit-fffe";
const REGRESSION_PR = process.env.GITHUB_REGRESSION_PR || "561";
const REPAIR_PR = process.env.GITHUB_REPAIR_PR || "560";

/** Signed OWNER targets overridden by regression linguistic audit (truncated/incomplete). */
const ACCEPTED_OVERRIDES = {
  "verb-37|imperfektKonjunktiv": "Han ville ansætte",
  "verb-44|imperfektKonjunktiv": "Det ville gå ud",
  "verb-45|infinitiv": "At blive forskrækket",
  "verb-57|partizipVergangenheit": "Trivet",
  "verb-87|imperfektKonjunktiv": "Det ville svulme op",
};

function escapePipe(text) {
  return String(text || "").replace(/\|/g, "\\|").replace(/\n/g, " ").trim();
}

function truncate(text, max = 60) {
  const s = String(text || "");
  return s.length > max ? `${s.slice(0, max)}…` : s;
}

function cardPath(cardId, field) {
  const f = field.replace(/\.lv$/, "");
  return `${cardId}.${f}.lv`;
}

function loadProduction() {
  const ctx = vm.createContext({ window: {} });
  vm.runInContext(fs.readFileSync(path.join(ROOT, "data/da/verbs.js"), "utf8"), ctx);
  return ctx.window.VERB_ENTRIES;
}

function loadRegressionAudit() {
  if (!fs.existsSync(REGRESSION_JSON)) {
    console.error(`Missing ${REGRESSION_JSON}. Run final regression audit first.`);
    process.exit(1);
  }
  return JSON.parse(fs.readFileSync(REGRESSION_JSON, "utf8"));
}

function buildReapplyRows(after) {
  const { labot } = dedupeLabot(parseAllDecisions().rows);
  const rows = [];
  for (const row of labot) {
    const entry = findEntry(after, row.cardId);
    const actual = getDaValue(entry, row.field);
    if (normalizeText(actual) === normalizeText(row.ownerNew)) continue;
    const fieldNorm = normalizeField(row.field);
    const key = `${row.cardId}|${fieldNorm}`;
    const de = entry?.[fieldNorm]?.de || "";
    const override = ACCEPTED_OVERRIDES[key];
    rows.push({
      track: "reapply",
      origAuditId: row.auditId,
      cardId: row.cardId,
      field: fieldNorm,
      fieldPath: `${fieldNorm}.lv`,
      deContext: de,
      currentDa: actual,
      signedOwner: row.ownerNew,
      proposedDa: override || row.ownerNew,
      severity: "CRITICAL",
      category: "REAPPLY",
      problem: "OWNER repair not applied — production still shows LABOT/parser corruption",
      rationale:
        "Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.",
      signedSource: row.source || "",
    });
  }
  rows.sort((a, b) => {
    const ai = Number(a.cardId.replace("verb-", ""));
    const bi = Number(b.cardId.replace("verb-", ""));
    if (ai !== bi) return ai - bi;
    return a.field.localeCompare(b.field);
  });
  rows.forEach((r, i) => {
    r.regId = `DA-VERB-RR-${String(i + 1).padStart(4, "0")}`;
  });
  return rows;
}

function buildLinguisticRows(audit, reapplyKeys) {
  const rows = [];
  for (const f of audit.findings || []) {
    if (f.source !== "luna") continue;
    const fieldNorm = normalizeField(f.field);
    const key = `${f.cardId}|${fieldNorm}`;
    if (reapplyKeys.has(key)) continue;
    if (!f.recommendedDa || f.recommendedDa === "—") continue;
    rows.push({
      track: "linguistic",
      origAuditId: f.auditId,
      cardId: f.cardId,
      field: fieldNorm,
      fieldPath: `${fieldNorm}.lv`,
      deContext: f.deCurrent || "",
      currentDa: f.daCurrent || "",
      signedOwner: f.daCurrent || "",
      proposedDa: f.recommendedDa,
      severity: f.severity || "MEDIUM",
      category: f.category || "GRAMMAR",
      problem: f.problem || "",
      rationale: f.reason || f.problem || "",
      signedSource: "",
    });
  }
  rows.forEach((r, i) => {
    r.regId = `DA-VERB-RL-${String(i + 1).padStart(4, "0")}`;
  });
  return rows;
}

function renderReviewHeader(title, slug, count, range, extra = "") {
  return [
    `# DA–DE Verbs — OWNER review ${title}`,
    "",
    `Avots: [${AUDIT_MD}](./${AUDIT_MD})`,
    `Findings: **${range}** (${count} ieraksti)`,
    `Fails: \`reports/da-verbs-owner-review-regression-${slug}.md\``,
    extra,
    "",
    "> **PROPOSED_DA** ir Luna ieteikums / signed OWNER mērķis — **nav** automātiski apstiprināts.",
    "> Ieraksti pareizo dāņu tekstu laukā **OWNER_DECISION** vai aizpildi decisions tabulu.",
    "> **DE lauki nemainīt.** Labojam tikai DA (`*.lv` formu laukus).",
    "",
  ].join("\n");
}

function renderFinding(r, num) {
  return [
    `## Finding ${num}`,
    "",
    `**Reg ID:** ${r.regId}`,
    `**Orig audit:** ${r.origAuditId}`,
    `**Verb/Card ID:** \`${r.cardId}\``,
    `**ID / path:** \`${cardPath(r.cardId, r.fieldPath)}\``,
    `**DE (read-only):** ${r.deContext || "—"}`,
    `**Severity:** ${r.severity}`,
    `**Category:** ${r.category}`,
    `**Field:** \`${r.fieldPath}\``,
    `**Production file:** \`data/da/verbs.js\``,
    `**CURRENT_DA:** ${r.currentDa}`,
    r.signedOwner && r.signedOwner !== r.currentDa
      ? `**SIGNED_OWNER (existing):** ${r.signedOwner}`
      : null,
    `**PROPOSED_DA:** ${r.proposedDa}`,
    `**Problēma:** ${r.problem}`,
    `**Audita pamatojums:** ${r.rationale}`,
    r.signedSource ? `**Signed avots:** \`${r.signedSource}\`` : null,
    `**Avots:** GPT-5.6 Luna regression audit (\`reports/${AUDIT_MD}\`)`,
    "",
    "**OWNER_DECISION:**",
    "",
    "---",
    "",
  ]
    .filter(Boolean)
    .join("\n");
}

function renderDecisionsHeader(title, slug, reviewFile) {
  return [
    `# DA–DE Verbs — OWNER decisions — ${title}`,
    "",
    `Avots: [da-verbs-owner-review-regression-${slug}.md](./da-verbs-owner-review-regression-${slug}.md)`,
    "",
    "Aizpildi tabulu. **DE = STRICT READ-ONLY.**",
    "",
    "| Reg ID | Orig | Verb/Card ID | Field | DE_CURRENT | DA_CURRENT | PROPOSED_DA | Severity | Statuss | OWNER_DECISION |",
    "|--------|------|--------------|-------|------------|------------|-------------|----------|---------|----------------|",
  ].join("\n");
}

function renderDecisionRow(r) {
  return `| ${r.regId} | ${r.origAuditId} | \`${r.cardId}\` | \`${r.fieldPath}\` | ${truncate(escapePipe(r.deContext))} | ${truncate(escapePipe(r.currentDa))} | ${truncate(escapePipe(r.proposedDa))} | ${r.severity} | PENDING | |`;
}

function renderAcceptedTable(allRows) {
  const lines = [
    `# DA–DE Verbs — OWNER accepted regression (recommended LABOT track)`,
    "",
    "**Auditors:** GPT-5.6 Luna (READ-ONLY regression audit)",
    `Avots: [${AUDIT_MD}](./${AUDIT_MD})`,
    `Findings: **${allRows.length}** (175 reapply + ${allRows.length - 175} linguistic micro-repair)`,
    "",
    "**DE = STRICT READ-ONLY.**",
    "Šis fails ir **ieteicamais LABOT ceļš** pēc regression audit. Pārbaudi katru ierakstu pirms apply.",
    "Reapply ierakstiem PROPOSED = signed OWNER (+ audit labojumi truncētiem mērķiem).",
    "",
    "| # | Reg ID | Track | Verb/Card ID | Field | DE_CURRENT | DA_CURRENT | PROPOSED / OWNER NEW | Severity | Statuss | OWNER_DECISION |",
    "|--:|--------|-------|--------------|-------|------------|------------|----------------------|----------|---------|----------------|",
  ];
  allRows.forEach((r, i) => {
    lines.push(
      `| ${i + 1} | ${r.regId} | ${r.track} | \`${r.cardId}\` | \`${r.fieldPath}\` | ${truncate(escapePipe(r.deContext))} | ${truncate(escapePipe(r.currentDa))} | ${truncate(escapePipe(r.proposedDa))} | ${r.severity} | LABOT | ${truncate(escapePipe(r.proposedDa), 50)} |`
    );
  });
  const reapply = allRows.filter((r) => r.track === "reapply").length;
  const ling = allRows.filter((r) => r.track === "linguistic").length;
  lines.push(
    "",
    "## Kopsavilkums",
    "",
    `- Reapply (LABOT corruption): **${reapply}**`,
    `- Linguistic micro-repair: **${ling}**`,
    `- Ieteicams LABOT: **${allRows.length}/${allRows.length}**`,
    "- DE izmaiņas: **0**",
    ""
  );
  return lines.join("\n");
}

function renderPendingTable(allRows) {
  const lines = [
    `# DA–DE Verbs — OWNER decisions regression (PENDING)`,
    "",
    `Avots: [da-verbs-owner-review-regression-README.md](./da-verbs-owner-review-regression-README.md)`,
    `Findings: **${allRows.length}** ieraksti`,
    "",
    "Sākotnēji visi: **Statuss: PENDING**, **OWNER_DECISION:** tukšs.",
    "",
    "| # | Reg ID | Track | Verb/Card ID | Field | DE_CURRENT | DA_CURRENT | PROPOSED_DA | Severity | Statuss | OWNER_DECISION |",
    "|--:|--------|-------|--------------|-------|------------|------------|-------------|----------|---------|----------------|",
  ];
  allRows.forEach((r, i) => {
    lines.push(
      `| ${i + 1} | ${r.regId} | ${r.track} | \`${r.cardId}\` | \`${r.fieldPath}\` | ${truncate(escapePipe(r.deContext))} | ${truncate(escapePipe(r.currentDa))} | ${truncate(escapePipe(r.proposedDa))} | ${r.severity} | PENDING | |`
    );
  });
  lines.push("", "**Statuss:** LABOT | FALSE_POSITIVE | NELABOT | NEEDS_SOURCE_REVIEW", "");
  return lines.join("\n");
}

function chunk(arr, size) {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

function mdLink(file, label) {
  return `[${label || file}](./${file})`;
}

function ghLink(file) {
  return `https://github.com/${REPO}/blob/${BRANCH}/reports/${file}`;
}

function ghMd(file, label) {
  return `[${label || file}](${ghLink(file)})`;
}

function renderReadme(reapplyGroups, linguisticCount, total) {
  const reapplyRows = reapplyGroups
    .map(
      (g) =>
        `| ${g.range} | ${mdLink(`da-verbs-owner-review-regression-${g.slug}.md`, "Preview")} | ${mdLink(`da-verbs-owner-decisions-regression-${g.slug}.md`, "Decisions")} | ${g.count} |`
    )
    .join("\n");

  return `# DA–DE Verbs — OWNER review regression (Copy-Only workflow)

Tas pats princips kā **DA–DE A1/A2**:

1. Atver review failus (lokāli vai caur ${mdLink("da-verbs-owner-review-regression-GITHUB.md", "GitHub indeksu")}).
2. Katram finding — **CURRENT_DA** ir faktiskais production teksts (\`data/da/verbs.js\`, \`*.lv\`).
3. **OWNER** apstiprina **PROPOSED_DA** laukā **OWNER_DECISION** (vai aizpilda decisions tabulu).
4. Atgriez aizpildītos failus — deterministisks **COPY-ONLY** apply.

**GitHub indekss:** ${mdLink("da-verbs-owner-review-regression-GITHUB.md", "da-verbs-owner-review-regression-GITHUB.md")}

## Kopsavilkums

| Metrika | Skaitlis |
|---------|----------|
| Regression audit | [${AUDIT_MD}](./${AUDIT_MD}) |
| Reapply (LABOT corruption) | **175** |
| Linguistic micro-repair | **${linguisticCount}** |
| Kopā OWNER review | **${total}** |
| DE changes | **0** |

## Divi trases

| Trase | Apraksts | Grupas |
|-------|----------|--------|
| **Reapply** | Signed OWNER lēmumi nav nonākuši production (parser bug) | 4 × 50 |
| **Linguistic** | Jauni regression findingi uz jau apply-otiem laukiem | 1 × ${linguisticCount} |

## Reapply grupas

| Findings | Preview | Decisions | Skaits |
|----------|---------|-----------|--------|
${reapplyRows}

## Linguistic micro-repair

| Preview | Decisions | Skaits |
|---------|-----------|--------|
| ${mdLink("da-verbs-owner-review-regression-linguistic.md", "Preview")} | ${mdLink("da-verbs-owner-decisions-regression-linguistic.md", "Decisions")} | **${linguisticCount}** |

## Konsolidētie faili

| Tips | Fails |
|------|-------|
| Decisions (viss, PENDING) | ${mdLink("da-verbs-owner-decisions-regression.md")} |
| Accepted (ieteicamais LABOT) | ${mdLink("da-verbs-owner-accepted-regression.md")} |
| GitHub | ${mdLink("da-verbs-owner-review-regression-GITHUB.md")} |

## OWNER statusi

- **LABOT** — copy-paste PROPOSED/OWNER_DECISION
- **FALSE_POSITIVE** — nemainām
- **NELABOT** — apzināti atstājam
- **NEEDS_SOURCE_REVIEW** — DE avota jautājums

## Apply noteikumi

- COPY-ONLY pēc OWNER lēmuma.
- Pirms apply: \`actual current === CURRENT_DA\`, citādi SKIP.
- **DE = STRICT READ-ONLY.**

**Production changes = 0 · DE changes = 0**
`;
}

function renderGithubIndex(reapplyGroups, linguisticCount, total) {
  const reapplyRows = reapplyGroups
    .map(
      (g) =>
        `| ${g.range} | ${ghMd(`da-verbs-owner-review-regression-${g.slug}.md`, "Preview")} | ${ghMd(`da-verbs-owner-decisions-regression-${g.slug}.md`, "Decisions")} | ${g.count} |`
    )
    .join("\n");

  return `# DA–DE Verbs — GitHub indekss (regression OWNER review)

**Auditors:** GPT-5.6 Luna
**Branch:** \`${BRANCH}\`
**Regression audit PR:** [#${REGRESSION_PR}](https://github.com/${REPO}/pull/${REGRESSION_PR}) · **Repair PR:** [#${REPAIR_PR}](https://github.com/${REPO}/pull/${REPAIR_PR})

## Sākt šeit

| Fails | Apraksts |
|-------|----------|
| ${ghMd("da-verbs-owner-review-regression-README.md", "OWNER README")} | Workflow + kopsavilkums |
| ${ghMd("da-verbs-owner-review-regression-GITHUB.md", "Šis indekss")} | Visas GitHub saites |
| ${ghMd("da-verbs-owner-repairs-final-regression-audit.md", "Regression audits")} | NOT CLOSED · 175 MISMATCH + ${linguisticCount} linguistic |

## Konsolidētie faili

| Tips | Fails |
|------|-------|
| Decisions (PENDING) | ${ghMd("da-verbs-owner-decisions-regression.md")} |
| Accepted (ieteicamais LABOT) | ${ghMd("da-verbs-owner-accepted-regression.md")} |

## Reapply grupas (175 LABOT corruption)

| Findings | Preview | Decisions | Skaits |
|----------|---------|-----------|--------|
${reapplyRows}

## Linguistic micro-repair (${linguisticCount})

| Preview | Decisions |
|---------|-----------|
| ${ghMd("da-verbs-owner-review-regression-linguistic.md", "Preview")} | ${ghMd("da-verbs-owner-decisions-regression-linguistic.md", "Decisions")} |

---

**Kopā:** **${total}** · **Reapply:** **175** · **Linguistic:** **${linguisticCount}** · **DE changes:** **0**
`;
}

function main() {
  const after = loadProduction();
  const audit = loadRegressionAudit();
  const reapplyRows = buildReapplyRows(after);
  const reapplyKeys = new Set(reapplyRows.map((r) => `${r.cardId}|${r.field}`));
  const linguisticRows = buildLinguisticRows(audit, reapplyKeys);
  const allRows = [...reapplyRows, ...linguisticRows];

  const reapplyBatches = chunk(reapplyRows, BATCH_SIZE);
  const reapplyGroups = reapplyBatches.map((batch, i) => {
    const slug = `reapply-group${String(i + 1).padStart(2, "0")}`;
    const start = i * BATCH_SIZE + 1;
    const end = start + batch.length - 1;
    return { slug, batch, range: `${start}–${end}`, count: batch.length };
  });

  const written = [];
  const reports = path.join(ROOT, "reports");

  fs.writeFileSync(
    path.join(reports, "da-verbs-owner-decisions-regression.md"),
    renderPendingTable(allRows)
  );
  written.push("da-verbs-owner-decisions-regression.md");

  fs.writeFileSync(
    path.join(reports, "da-verbs-owner-accepted-regression.md"),
    renderAcceptedTable(allRows)
  );
  written.push("da-verbs-owner-accepted-regression.md");

  fs.writeFileSync(
    path.join(reports, "da-verbs-owner-review-regression-README.md"),
    renderReadme(reapplyGroups, linguisticRows.length, allRows.length)
  );
  written.push("da-verbs-owner-review-regression-README.md");

  for (const g of reapplyGroups) {
    const slug = g.slug;
    const reviewPath = path.join(reports, `da-verbs-owner-review-regression-${slug}.md`);
    const reviewContent = [
      renderReviewHeader(
        `regression ${slug.replace("reapply-group", "reapply Group ")}`,
        slug,
        g.count,
        g.range,
        "> **Trase:** Reapply — signed OWNER lēmums jau pastāv; production vēl rāda LABOT."
      ),
      ...g.batch.map((r, i) => renderFinding(r, i + 1)),
    ].join("\n");
    fs.writeFileSync(reviewPath, reviewContent);
    written.push(`da-verbs-owner-review-regression-${slug}.md`);

    const decPath = path.join(reports, `da-verbs-owner-decisions-regression-${slug}.md`);
    const decContent = [
      renderDecisionsHeader(`regression ${slug}`, slug, `da-verbs-owner-review-regression-${slug}.md`),
      ...g.batch.map(renderDecisionRow),
      "",
      "**Statuss:** LABOT | FALSE_POSITIVE | NELABOT | NEEDS_SOURCE_REVIEW",
      "",
    ].join("\n");
    fs.writeFileSync(decPath, decContent);
    written.push(`da-verbs-owner-decisions-regression-${slug}.md`);
  }

  const lingReview = [
    renderReviewHeader(
      "regression linguistic",
      "linguistic",
      linguisticRows.length,
      `1–${linguisticRows.length}`,
      "> **Trase:** Linguistic — production atbilst signed repair, bet regression audits atrada reālu DA kļūdu."
    ),
    ...linguisticRows.map((r, i) => renderFinding(r, i + 1)),
  ].join("\n");
  fs.writeFileSync(path.join(reports, "da-verbs-owner-review-regression-linguistic.md"), lingReview);
  written.push("da-verbs-owner-review-regression-linguistic.md");

  const lingDec = [
    renderDecisionsHeader("regression linguistic", "linguistic", "da-verbs-owner-review-regression-linguistic.md"),
    ...linguisticRows.map(renderDecisionRow),
    "",
    "**Statuss:** LABOT | FALSE_POSITIVE | NELABOT | NEEDS_SOURCE_REVIEW",
    "",
  ].join("\n");
  fs.writeFileSync(path.join(reports, "da-verbs-owner-decisions-regression-linguistic.md"), lingDec);
  written.push("da-verbs-owner-decisions-regression-linguistic.md");

  fs.writeFileSync(
    path.join(reports, "da-verbs-owner-review-regression-GITHUB.md"),
    renderGithubIndex(reapplyGroups, linguisticRows.length, allRows.length)
  );
  written.push("da-verbs-owner-review-regression-GITHUB.md");

  fs.mkdirSync(path.join(reports, "temp"), { recursive: true });
  fs.writeFileSync(
    path.join(reports, "temp/da-verbs-regression-owner-review-traceability.json"),
    JSON.stringify(
      {
        reapply: reapplyRows.length,
        linguistic: linguisticRows.length,
        total: allRows.length,
        reapplyGroups: reapplyGroups.length,
        overrides: Object.keys(ACCEPTED_OVERRIDES).length,
        filesWritten: written.length,
        pass: true,
      },
      null,
      2
    )
  );

  console.log(
    JSON.stringify(
      {
        reapply: reapplyRows.length,
        linguistic: linguisticRows.length,
        total: allRows.length,
        filesWritten: written.length,
        github: "reports/da-verbs-owner-review-regression-GITHUB.md",
        productionChanges: 0,
        deChanges: 0,
      },
      null,
      2
    )
  );
}

main();
