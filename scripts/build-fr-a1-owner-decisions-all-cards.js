#!/usr/bin/env node
"use strict";
/**
 * Build FR–DE A1 OWNER decision files for all 702 cards (100 per file, last 102).
 * Usage: node scripts/build-fr-a1-owner-decisions-all-cards.js
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");

const REPO = "sandrisbrikmanis-rgb/de-lv-app";
const BRANCH = process.env.WORK_BRANCH || execSync("git branch --show-current", { cwd: ROOT, encoding: "utf8" }).trim();
const AUDIT_JSON = path.join(ROOT, "reports/fr-a1-full-audit.json");
const CHUNKS = [
  [1, 100],
  [101, 200],
  [201, 300],
  [301, 400],
  [401, 500],
  [501, 600],
  [601, 702],
];

const SEV_RANK = { CRITICAL: 0, HIGH: 1, MEDIUM: 2, LOW: 3 };

function gh(relPath) {
  return `https://github.com/${REPO}/blob/${BRANCH}/${relPath}`;
}

function escapePipe(text) {
  return String(text || "").replace(/\|/g, "\\|").replace(/\n/g, " ").trim();
}

function truncate(text, max = 120) {
  const s = String(text || "").replace(/\n/g, " ");
  return s.length > max ? `${s.slice(0, max)}…` : s;
}

function entryId(entry, index) {
  return entry.study?.id || `a1-${entry.de}-${index}`;
}

function loadCards() {
  const code = fs.readFileSync(path.join(ROOT, "data/fr/a1.js"), "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.A1_WORDS;
}

function loadFindingsByCard() {
  const byCard = new Map();
  if (!fs.existsSync(AUDIT_JSON)) return byCard;
  const audit = JSON.parse(fs.readFileSync(AUDIT_JSON, "utf8"));
  const findings = audit.ownerBacklogFinal || audit.validatedFindings || audit.findings?.filter((f) => f.validatedReal !== false) || [];
  for (const f of findings) {
    if (!f.cardId) continue;
    if (!byCard.has(f.cardId)) byCard.set(f.cardId, []);
    byCard.get(f.cardId).push(f);
  }
  return byCard;
}

function pickPrimaryFinding(findings) {
  if (!findings?.length) return null;
  const lvField = findings.find((f) => {
    const field = String(f.field || "");
    return field === "lv" || field === "frText" || field === "entry.lv";
  });
  if (lvField) return lvField;
  return [...findings].sort((a, b) => {
    const sa = SEV_RANK[String(a.severity || "MEDIUM").toUpperCase()] ?? 9;
    const sb = SEV_RANK[String(b.severity || "MEDIUM").toUpperCase()] ?? 9;
    return sa - sb;
  })[0];
}

function buildCardRows(cards, findingsByCard) {
  return cards.map((entry, index) => {
    const cardId = entryId(entry, index);
    const cardFindings = findingsByCard.get(cardId) || [];
    const primary = pickPrimaryFinding(cardFindings);
    const extraCount = cardFindings.length > 1 ? cardFindings.length - 1 : 0;
    const note =
      extraCount > 0
        ? `+${extraCount} cits atradums (${cardFindings.filter((f) => f !== primary).map((f) => f.field).slice(0, 3).join(", ")}${extraCount > 3 ? "…" : ""})`
        : primary
          ? ""
          : "Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW";

    return {
      seq: index + 1,
      cardId,
      de: entry.de || "",
      deArticle: entry.de_article || "",
      field: primary?.field || "lv",
      current: primary ? primary.currentFr || primary.currentEt || entry.lv : entry.lv,
      proposed: primary?.proposedFr || primary?.proposedEt || "",
      severity: primary?.severity || "—",
      category: primary?.category || (cardFindings.length ? "—" : "NO_FINDING"),
      auditId: primary?.findingId || "—",
      reason: primary?.reason || "",
      findingCount: cardFindings.length,
      note,
      hasStudy: Boolean(entry.study),
    };
  });
}

function fileRange(start, end) {
  return `${String(start).padStart(3, "0")}-${String(end).padStart(3, "0")}`;
}

function buildFileContent(rows, start, end, fileName) {
  const rel = `reports/${fileName}`;
  const lines = [
    `# FR–DE A1 — OWNER DECISIONS (${start}–${end})`,
    "",
    "**Standard:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.12",
    `**Kartītes:** **${rows.length}** (no **702** kopā)`,
    `**WORK_BRANCH:** \`${BRANCH}\``,
    `**Audita avots:** [fr-a1-full-audit.md](${gh("reports/fr-a1-full-audit.md")})`,
    "**DE:** STRICT READ-ONLY",
    "",
    "Atļautie statusi: **LABOT** | **NELABOT** | **FALSE_POSITIVE** | **NEEDS_SOURCE_REVIEW**",
    "",
    "> Viena rinda = viena A1 kartīte. Ja kartei ir vairāki audit atradumi, tabulā ir galvenais; pārējie — kolonnā Piezīme / pilns audits.",
    "",
    "## GitHub",
    "",
    "| | |",
    "|---|---|",
    `| Rediģēt | [${fileName}](https://github.com/${REPO}/edit/${BRANCH}/${rel}) |`,
    `| Raw | [${fileName}](https://raw.githubusercontent.com/${REPO}/${BRANCH}/${rel}) |`,
    "",
    "## Tabula",
    "",
    "| # | Card ID | DE | Field | CURRENT | PROPOSED_FR | Severity | Category | Audit ID | OWNER STATUS | OWNER NEW | Piezīme |",
    "|---|---------|----|-------|---------|-------------|----------|----------|----------|--------------|-----------|---------|",
  ];

  for (const row of rows) {
    lines.push(
      `| ${row.seq} | ${escapePipe(row.cardId)} | ${escapePipe(row.de)} | ${escapePipe(row.field)} | ${escapePipe(truncate(row.current, 100))} | ${escapePipe(truncate(row.proposed, 100))} | ${row.severity} | ${row.category} | ${row.auditId} | PENDING | | ${escapePipe(row.note)} |`,
    );
  }

  lines.push("");
  lines.push("## Detalizēti (ar DE artikulu un iemeslu)");
  lines.push("");

  for (const row of rows) {
    lines.push(`### ${row.seq}. \`${row.cardId}\` — ${row.de}`);
    lines.push("");
    lines.push(`| Lauks | Vērtība |`);
    lines.push(`|-------|---------|`);
    lines.push(`| DE | ${escapePipe(row.de)} (${escapePipe(row.deArticle) || "—"}) |`);
    lines.push(`| Field | \`${row.field}\` |`);
    lines.push(`| CURRENT | ${escapePipe(row.current)} |`);
    lines.push(`| PROPOSED_FR (audits) | ${escapePipe(row.proposed) || "—"} |`);
    lines.push(`| Audit ID | ${row.auditId} |`);
    lines.push(`| Severity / Category | ${row.severity} / ${row.category} |`);
    if (row.reason) lines.push(`| Problēma | ${escapePipe(row.reason)} |`);
    lines.push(`| Study | ${row.hasStudy ? "Jā" : "Nē"} |`);
    lines.push(`| Atradumi kartei | ${row.findingCount} |`);
    lines.push(`| **OWNER STATUS** | **PENDING** |`);
    lines.push(`| **OWNER NEW** | |`);
    if (row.note) lines.push(`| Piezīme | ${escapePipe(row.note)} |`);
    lines.push("");
  }

  return lines.join("\n");
}

function buildIndex(files) {
  const lines = [
    "# FR–DE A1 — OWNER DECISIONS (702 kartītes)",
    "",
    "**Standard:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.12",
    `**WORK_BRANCH:** \`${BRANCH}\``,
    "**Kartītes:** **702** · **7 faili** (6×100 + 1×102)",
    "",
    "| Diapazons | Kartītes | Fails | GitHub |",
    "|-----------|----------|-------|--------|",
  ];
  for (const f of files) {
    lines.push(
      `| ${f.start}–${f.end} | ${f.count} | [${f.name}](${gh(`reports/${f.name}`)}) | [rediģēt](https://github.com/${REPO}/edit/${BRANCH}/reports/${f.name}) |`,
    );
  }
  lines.push("");
  lines.push("## Kopsavilkums");
  lines.push("");
  lines.push("| Metrika | Skaits |");
  lines.push("|---------|--------|");
  lines.push("| Kopā kartītes | 702 |");
  lines.push(`| Ar audit atradumu | ${files.reduce((s, f) => s + f.withFindings, 0)} |`);
  lines.push(`| Bez audit atraduma | ${702 - files.reduce((s, f) => s + f.withFindings, 0)} |`);
  lines.push("");
  lines.push("> Aizpildiet kolonnas **OWNER STATUS** un **OWNER NEW** katrā failā. PROPOSED_FR nav automātisks OWNER lēmums.");
  return lines.join("\n");
}

function main() {
  const cards = loadCards();
  if (cards.length !== 702) {
    console.error(`Expected 702 cards, got ${cards.length}`);
    process.exit(1);
  }

  const findingsByCard = loadFindingsByCard();
  const rows = buildCardRows(cards, findingsByCard);

  const fileMeta = [];
  for (const [start, end] of CHUNKS) {
    const slice = rows.slice(start - 1, end);
    const name = `fr-a1-owner-decisions-${fileRange(start, end)}.md`;
    const content = buildFileContent(slice, start, end, name);
    fs.writeFileSync(path.join(ROOT, "reports", name), content);
    fileMeta.push({
      name,
      start,
      end,
      count: slice.length,
      withFindings: slice.filter((r) => r.findingCount > 0).length,
    });
    console.log(`Wrote reports/${name} (${slice.length} cards, ${slice.filter((r) => r.findingCount > 0).length} with findings)`);
  }

  const indexPath = path.join(ROOT, "reports/fr-a1-owner-decisions-702-INDEX.md");
  fs.writeFileSync(indexPath, buildIndex(fileMeta));
  console.log(`Wrote reports/fr-a1-owner-decisions-702-INDEX.md`);

  console.log(JSON.stringify({
    totalCards: 702,
    files: fileMeta.length,
    cardsWithFindings: rows.filter((r) => r.findingCount > 0).length,
    cardsWithoutFindings: rows.filter((r) => r.findingCount === 0).length,
  }, null, 2));
}

main();
