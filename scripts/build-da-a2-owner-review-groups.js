#!/usr/bin/env node
"use strict";
/**
 * Build DA–DE A2 OWNER review group files from audit JSON (READ-ONLY).
 * Same workflow as A1: CURRENT_DA → OWNER fills decision → copy-only apply.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./lib/audit-common");

const AUDIT_JSON = path.join(ROOT, "reports/temp/da-a2-audit-data.json");
const BATCH_SIZE = 50;

function loadWords() {
  const ctx = vm.createContext({ window: {} });
  vm.runInContext(fs.readFileSync(path.join(ROOT, "data/da/a2.js"), "utf8"), ctx);
  const lvCtx = vm.createContext({ window: {} });
  vm.runInContext(fs.readFileSync(path.join(ROOT, "data/a2.js"), "utf8"), lvCtx);
  return { da: ctx.window.A2_WORDS, lv: lvCtx.window.A2_WORDS };
}

function findingNum(f) {
  return Number(String(f.id).replace("DA-A2-", ""));
}

function categorize(f) {
  if (f.field.includes("comparison") && f.field.endsWith(".example")) return "comparison";
  if (f.field.includes("sectionAccents")) return "sectionAccents";
  return "misc";
}

function deForFinding(f, daWords) {
  if (f.deContext) return f.deContext;
  const entry = daWords.find((w) => w.study?.id === f.cardId || w.de === f.cardId.replace(/^a2-/, ""));
  return entry?.de || f.cardId.replace(/^a2-/, "");
}

function cardPath(cardId, field) {
  return `${cardId}.${field}`;
}

function renderFinding(f, daWords) {
  const num = findingNum(f);
  const de = deForFinding(f, daWords);
  const lines = [];
  lines.push(`## Finding ${num}`);
  lines.push("");
  lines.push(`**Audit ID:** ${f.id}`);
  lines.push(`**Card ID:** ${f.cardId}`);
  lines.push(`**ID / path:** \`${cardPath(f.cardId, f.field)}\``);
  if (de) lines.push(`**DE (read-only):** ${de}`);
  lines.push(`**Severity:** ${f.severity}`);
  lines.push(`**Field:** \`${f.field}\``);
  lines.push(`**Production file:** \`data/da/a2.js\``);
  lines.push(`**LV reference:** (skat. LV etalonu \`data/a2.js\`)`);
  lines.push(`**CURRENT_DA:** ${f.currentDa}`);
  lines.push(`**PROPOSED_DA:** ${f.proposedDa}`);
  lines.push(`**Problēma:** ${f.problem}`);
  lines.push(`**Audita pamatojums:** ${f.rationale}`);
  lines.push(`**Avots:** GPT-5.6 Luna audit (\`reports/da-a2-full-audit.md\`)`);
  lines.push("");
  lines.push("**OWNER_DECISION:**");
  lines.push("");
  lines.push("---");
  lines.push("");
  return lines.join("\n");
}

function renderGroupFile(title, slug, batchIndex, slice, daWords, findingRange) {
  const lines = [];
  lines.push(`# DA–DE A2 — OWNER review ${title}`);
  lines.push("");
  lines.push(`Avots: \`reports/da-a2-full-audit.md\` / \`reports/temp/da-a2-audit-data.json\``);
  lines.push(`Findings: **${findingRange}** (${slice.length} ieraksti)`);
  lines.push(`Fails: \`reports/da-a2-owner-review-${slug}.md\``);
  lines.push("");
  lines.push(
    "> **PROPOSED_DA** ir Luna ieteikums — **nav** OWNER apstiprināts. Ieraksti pareizo dāņu tekstu laukā **OWNER_DECISION** (vai atgriez \`da-a2-owner-decisions-${slug}.md\` tabulu)."
  );
  lines.push("> **DE lauki nemainīt.** Labojam tikai DA (`lv` un Study DA laukus).");
  lines.push("> sectionAccents: var lietot **FJERN `termins`** vai pilnu jaunu tekstu.");
  lines.push("");
  for (const f of slice) lines.push(renderFinding(f, daWords));
  return lines.join("\n");
}

function renderDecisionsTemplate(slug, slice, findingRange) {
  const lines = [];
  lines.push(`# DA–DE A2 — OWNER decisions — ${slug}`);
  lines.push("");
  lines.push(`Avots: \`reports/da-a2-owner-review-${slug}.md\``);
  lines.push(`Findings: **${findingRange}** (${slice.length} ieraksti)`);
  lines.push("");
  lines.push("Aizpildi tabulu. **DE = STRICT READ-ONLY.**");
  lines.push("");
  lines.push("| Finding | Card ID | Field | Statuss | OWNER_DECISION |");
  lines.push("|---------|---------|-------|---------|----------------|");
  for (const f of slice) {
    lines.push(`| ${findingNum(f)} | \`${f.cardId}\` | \`${f.field}\` | | |`);
  }
  lines.push("");
  lines.push("**Statuss:** LABOT | FALSE_POSITIVE | NELABOT | NEEDS_SOURCE_REVIEW");
  lines.push("");
  return lines.join("\n");
}

function chunk(arr, size) {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

function batchMeta(category, batches) {
  return batches.map((batch, i) => {
    const nums = batch.map(findingNum);
    const slug = `${category}-${String(i + 1).padStart(2, "0")}`;
    const range = `${Math.min(...nums)}–${Math.max(...nums)}`;
    return { slug, batch, range, count: batch.length, category };
  });
}

function mdLink(filename) {
  return `[${filename}](./${filename})`;
}

function renderReadme(groups, total) {
  const byCat = { comparison: 0, sectionaccents: 0, misc: 0 };
  groups.forEach((g) => {
    byCat[g.category] = (byCat[g.category] || 0) + g.count;
  });

  const tableRows = groups
    .map((g) => {
      const review = `da-a2-owner-review-${g.slug}.md`;
      const decisions = `da-a2-owner-decisions-${g.slug}.md`;
      return `| ${mdLink(review)} | ${g.range} | ${g.count} | ${g.category} | ${mdLink(decisions)} |`;
    })
    .join("\n");

  return `# DA–DE A2 — OWNER review (Copy-Only workflow)

Tas pats princips kā **DA–DE A1** un **CS–DE Kurss — Lekcijas**:

1. Zemāk tabulā **noklikšķini** uz Review vai Decisions faila (zilais links).
2. Katram finding — **CURRENT_DA** ir nepareizais teksts production failā (\`data/da/a2.js\`, lauks \`lv\`).
3. **ChatGPT / OWNER** ieraksta pareizo dāņu variantu laukā **OWNER_DECISION** (vai aizpilda decisions tabulu).
4. Atgriez aizpildītos failus — deterministisks **COPY-ONLY** apply uz \`data/da/a2.js\` + \`www/data/da/a2.js\`.

**Mape ar visiem failiem:** [reports/](./)

## Kopsavilkums

| Metrika | Skaitlis |
|---------|----------|
| Kopā audit atradumi | **${total}** |
| Comparison LV (HIGH) | **${byCat.comparison}** |
| sectionAccents (MEDIUM) | **${byCat.sectionaccents}** |
| Citi (ZW, sinonīmi, u.c.) | **${byCat.misc}** |
| Review faili | **${groups.length}** |

## Faili

| Review | Findings | Skaits | Kategorija | Decisions template |
|--------|----------|--------|------------|-------------------|
${tableRows}

## OWNER statusi

- **LABOT** — ieraksti NEW tekstu; copy-paste apply
- **FALSE_POSITIVE** — nemainām
- **NELABOT** — apzināti atstājam
- **NEEDS_SOURCE_REVIEW** — vajag papildu kontekstu
- **FJERN \`termins\`** — sectionAccents: noņem akcenta terminu (apply map)

## Apply (pēc OWNER atgriešanas)

\`\`\`bash
node scripts/build-da-a2-owner-apply-map.js
node scripts/apply-da-a2-owner-repair.js
\`\`\`

## Svarīgi

- **PROPOSED_DA** = Luna ieteikums; OWNER var apstiprināt vai labot.
- **DE nemainīt** (\`de\`, \`de_article\`, Study DE piemēri).
- Production changes tikai pēc OWNER lēmumiem.
- Comparison \`PROPOSED_DA\` dažās vietās ir mehāniski — OWNER jāpārbauda dabiskums.

**Audits:** [da-a2-full-audit.md](./da-a2-full-audit.md)
`;
}

function main() {
  if (!fs.existsSync(AUDIT_JSON)) {
    console.error(`Missing ${AUDIT_JSON}\nRun: node scripts/audit-da-a2-collect.js`);
    process.exit(1);
  }

  const { findings } = JSON.parse(fs.readFileSync(AUDIT_JSON, "utf8"));
  findings.sort((a, b) => findingNum(a) - findingNum(b));
  const { da } = loadWords();

  const comparison = findings.filter((f) => categorize(f) === "comparison");
  const sectionAccents = findings.filter((f) => categorize(f) === "sectionAccents");
  const misc = findings.filter((f) => categorize(f) === "misc");

  const groups = [
    ...batchMeta("comparison", chunk(comparison, BATCH_SIZE)),
    ...batchMeta("sectionaccents", chunk(sectionAccents, BATCH_SIZE)),
    ...batchMeta("misc", chunk(misc, BATCH_SIZE)),
  ];

  const written = [];

  fs.writeFileSync(path.join(ROOT, "reports/da-a2-owner-review-README.md"), renderReadme(groups, findings.length));
  written.push({ file: "reports/da-a2-owner-review-README.md", count: 1 });

  for (const g of groups) {
    const title =
      g.category === "comparison"
        ? `Comparison ${g.slug.replace("comparison-", "part ")}`
        : g.category === "sectionAccents"
          ? `sectionAccents ${g.slug.replace("sectionaccents-", "part ")}`
          : `Misc ${g.slug.replace("misc-", "part ")}`;

    const reviewPath = path.join(ROOT, `reports/da-a2-owner-review-${g.slug}.md`);
    fs.writeFileSync(
      reviewPath,
      renderGroupFile(title, g.slug, g.slug, g.batch, da, g.range)
    );
    written.push({ file: `reports/da-a2-owner-review-${g.slug}.md`, count: g.count, range: g.range });

    const decisionsPath = path.join(ROOT, `reports/da-a2-owner-decisions-${g.slug}.md`);
    fs.writeFileSync(decisionsPath, renderDecisionsTemplate(g.slug, g.batch, g.range));
    written.push({ file: `reports/da-a2-owner-decisions-${g.slug}.md`, count: g.count, template: true });
  }

  console.log(
    JSON.stringify(
      {
        totalFindings: findings.length,
        comparison: comparison.length,
        sectionAccents: sectionAccents.length,
        misc: misc.length,
        reviewFiles: groups.length,
        decisionTemplates: groups.length,
        groups: written.filter((w) => !w.template),
        productionChanges: 0,
        deChanges: 0,
      },
      null,
      2
    )
  );
}

main();
