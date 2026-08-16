#!/usr/bin/env node
"use strict";
/**
 * Build DA–DE B2 OWNER review + decision files from audit JSON (READ-ONLY).
 * Auditor: GPT-5.6 Luna. Statuss sākotnēji: PENDING.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./lib/audit-common");

const AUDIT_JSON = path.join(ROOT, "reports/temp/da-b2-audit-data.json");
const BATCH_SIZE = 50;
const STUDY_BATCH_CARDS = 10;
const AUDITOR = "GPT-5.6 Luna";

function loadWords() {
  const ctx = vm.createContext({ window: {} });
  vm.runInContext(fs.readFileSync(path.join(ROOT, "data/da/b2.js"), "utf8"), ctx);
  return ctx.window.B2_WORDS;
}

function findingNum(f) {
  return Number(String(f.id).replace("DA-B2-", ""));
}

function isOwnerCandidate(f) {
  return f.status !== "DE_SOURCE_ISSUE" && f.status !== "FALSE_POSITIVE";
}

function deForFinding(f, daWords) {
  if (f.deContext) return f.deContext;
  const entry = daWords.find((w) => w.study?.id === f.cardId || w.de === f.cardId.replace(/^b2-/, ""));
  return entry?.de || f.cardId.replace(/^b2-/, "");
}

function isStudyCard(cardId, daWords) {
  const entry = daWords.find((w) => w.study?.id === cardId);
  return Boolean(entry?.study);
}

function packBatches(findings, daWords) {
  const byCard = new Map();
  for (const f of findings) {
    if (!byCard.has(f.cardId)) byCard.set(f.cardId, []);
    byCard.get(f.cardId).push(f);
  }

  const studyCards = [];
  const otherCards = [];
  for (const [cardId, items] of byCard) {
    if (isStudyCard(cardId, daWords)) studyCards.push({ cardId, items });
    else otherCards.push({ cardId, items });
  }

  studyCards.sort((a, b) => findingNum(a.items[0]) - findingNum(b.items[0]));
  otherCards.sort((a, b) => findingNum(a.items[0]) - findingNum(b.items[0]));

  const batches = [];

  for (let i = 0; i < studyCards.length; i += STUDY_BATCH_CARDS) {
    const slice = studyCards.slice(i, i + STUDY_BATCH_CARDS);
    const batch = slice.flatMap((g) => g.items);
    if (batch.length) batches.push({ batch, kind: "study" });
  }

  let current = [];
  let currentCount = 0;
  const flush = () => {
    if (current.length) {
      batches.push({ batch: current, kind: "general" });
      current = [];
      currentCount = 0;
    }
  };

  for (const group of otherCards) {
    if (currentCount + group.items.length > BATCH_SIZE && currentCount > 0) flush();
    current.push(...group.items);
    currentCount += group.items.length;
    if (currentCount >= BATCH_SIZE) flush();
  }
  flush();

  return batches.map((b, i) => {
    const nums = b.batch.map(findingNum);
    const slug = String(i + 1).padStart(2, "0");
    return {
      slug,
      batch: b.batch,
      range: `${Math.min(...nums)}–${Math.max(...nums)}`,
      count: b.batch.length,
      kind: b.kind,
    };
  });
}

function renderFinding(f, daWords) {
  const num = findingNum(f);
  const de = deForFinding(f, daWords);
  return [
    `## Finding ${num}`,
    "",
    `**Finding:** ${num}`,
    `**Audit ID:** ${f.id}`,
    `**Card ID:** ${f.cardId}`,
    `**Field:** \`${f.field}\``,
    `**DE (read-only):** ${de || "—"}`,
    `**CURRENT_DA:** ${f.currentDa}`,
    `**PROPOSED_DA:** ${f.proposedDa}`,
    `**Severity:** ${f.severity}`,
    `**Problēma:** ${f.problem}`,
    `**Pamatojums:** ${f.rationale}`,
    `**Statuss:** PENDING`,
    `**OWNER_DECISION:** [nav aizpildīts]`,
    "",
    `**Avots:** ${AUDITOR} audit (\`reports/da-b2-full-audit.md\`)`,
    "",
    "---",
    "",
  ].join("\n");
}

function renderGroupFile(g, daWords) {
  const lines = [
    `# DA–DE B2 — OWNER review ${g.slug}`,
    "",
    `**Auditors:** ${AUDITOR} (READ-ONLY)`,
    `Avots: \`reports/da-b2-full-audit.md\` / \`reports/temp/da-b2-audit-data.json\``,
    `Findings: **${g.range}** (${g.count} ieraksti)`,
    `Fails: \`reports/da-b2-owner-review-${g.slug}.md\``,
    "",
    "> **PROPOSED_DA** ir GPT-5.6 Luna ieteikums — **nav** OWNER apstiprināts.",
    "> **Statuss:** sākotnēji **PENDING**. OWNER aizpilda **OWNER_DECISION** vai tabulu `da-b2-owner-decisions-XX.md`.",
    "> **DE lauki nemainīt.** sectionAccents: var lietot **FJERN `termins`** vai jaunu terminu.",
    "",
  ];
  for (const f of g.batch) lines.push(renderFinding(f, daWords));
  return lines.join("\n");
}

function renderDecisionsTemplate(g) {
  const lines = [
    `# DA–DE B2 — OWNER decisions — ${g.slug}`,
    "",
    `**Auditors:** ${AUDITOR} (READ-ONLY)`,
    `Avots: \`reports/da-b2-owner-review-${g.slug}.md\``,
    `Findings: **${g.range}** (${g.count} ieraksti)`,
    "",
    "**DE = STRICT READ-ONLY.** Sākotnēji visi ieraksti: **Statuss: PENDING**, **OWNER_DECISION:** tukšs.",
    "",
    "| Finding | Card ID | Field | CURRENT_DA | PROPOSED_DA | Statuss | OWNER_DECISION |",
    "|--------:|---|---|---|---|---|---|",
  ];
  for (const f of g.batch) {
    const cur = String(f.currentDa || "").replace(/\|/g, "\\|").slice(0, 80);
    const prop = String(f.proposedDa || "").replace(/\|/g, "\\|").slice(0, 80);
    lines.push(
      `| ${findingNum(f)} | \`${f.cardId}\` | \`${f.field}\` | ${cur} | ${prop} | PENDING | |`
    );
  }
  lines.push(
    "",
    "## Kopsavilkums",
    "",
    `- Pārskatīti: **0/${g.count}**`,
    "- LABOT: **0**",
    "- FALSE_POSITIVE: **0**",
    "- NELABOT: **0**",
    "- NEEDS_SOURCE_REVIEW: **0**",
    "- DE izmaiņas: **0**",
    ""
  );
  return lines.join("\n");
}

function renderReadme(groups, total, ownerCount) {
  const tableRows = groups
    .map((g) => {
      const review = `da-b2-owner-review-${g.slug}.md`;
      const decisions = `da-b2-owner-decisions-${g.slug}.md`;
      return `| [${review}](./${review}) | ${g.range} | ${g.count} | ${g.kind} | [${decisions}](./${decisions}) |`;
    })
    .join("\n");

  return `# DA–DE B2 — OWNER review (GPT-5.6 Luna)

**Auditors:** GPT-5.6 Luna (READ-ONLY)

Avots: [da-b2-full-audit.md](./da-b2-full-audit.md)

## Kopsavilkums

| Metrika | Skaitlis |
|---------|----------|
| Kopā audit atradumi | **${total}** |
| OWNER kandidāti | **${ownerCount}** |
| Review faili | **${groups.length}** |

## Faili

| Review | Findings | Skaits | Tips | Decisions |
|--------|----------|--------|------|-----------|
${tableRows}

## OWNER statusi

- **PENDING** — sākotnējais stāvoklis
- **LABOT** — OWNER apstiprina labojumu
- **FALSE_POSITIVE** — nemainām
- **NELABOT** — apzināti atstājam
- **NEEDS_SOURCE_REVIEW** — DE avota jautājums

**GitHub indekss:** [da-b2-owner-review-GITHUB.md](./da-b2-owner-review-GITHUB.md)
`;
}

function traceabilityCheck(allFindings, ownerFindings, groups) {
  const reviewIds = new Set();
  const decisionIds = new Set();
  for (const g of groups) {
    for (const f of g.batch) {
      reviewIds.add(f.id);
      decisionIds.add(f.id);
    }
  }
  const ownerSet = new Set(ownerFindings.map((f) => f.id));
  let missing = 0;
  for (const id of ownerSet) {
    if (!reviewIds.has(id) || !decisionIds.has(id)) missing++;
  }
  const dupReview = ownerFindings.length - reviewIds.size;
  return {
    validatedOwnerCandidates: ownerFindings.length,
    reviewEntries: reviewIds.size,
    decisionEntries: decisionIds.size,
    auditEntries: allFindings.filter(isOwnerCandidate).length,
    missing,
    duplicates: dupReview > 0 ? dupReview : 0,
    pass: missing === 0 && dupReview === 0 && ownerFindings.length === reviewIds.size,
  };
}

function main() {
  if (!fs.existsSync(AUDIT_JSON)) {
    console.error(`Missing ${AUDIT_JSON}\nRun: node scripts/audit-da-b2-collect.js`);
    process.exit(1);
  }

  const { findings: allFindings } = JSON.parse(fs.readFileSync(AUDIT_JSON, "utf8"));
  allFindings.sort((a, b) => findingNum(a) - findingNum(b));
  const ownerFindings = allFindings.filter(isOwnerCandidate);
  const daWords = loadWords();
  const groups = packBatches(ownerFindings, daWords);

  fs.writeFileSync(
    path.join(ROOT, "reports/da-b2-owner-review-README.md"),
    renderReadme(groups, allFindings.length, ownerFindings.length)
  );

  for (const g of groups) {
    fs.writeFileSync(
      path.join(ROOT, `reports/da-b2-owner-review-${g.slug}.md`),
      renderGroupFile(g, daWords)
    );
    fs.writeFileSync(
      path.join(ROOT, `reports/da-b2-owner-decisions-${g.slug}.md`),
      renderDecisionsTemplate(g)
    );
  }

  const trace = traceabilityCheck(allFindings, ownerFindings, groups);
  fs.writeFileSync(
    path.join(ROOT, "reports/temp/da-b2-owner-review-traceability.json"),
    JSON.stringify(trace, null, 2)
  );

  console.log(
    JSON.stringify(
      {
        auditor: AUDITOR,
        totalFindings: allFindings.length,
        ownerCandidates: ownerFindings.length,
        reviewFiles: groups.length,
        traceability: trace,
        productionChanges: 0,
        deChanges: 0,
      },
      null,
      2
    )
  );
  if (!trace.pass) process.exit(1);
}

main();
