#!/usr/bin/env node
"use strict";
/**
 * Build FR–DE A1 OWNER decision files for all 702 cards (7 files by card range).
 * One table row = one exact (Card ID, Field) finding; NO_FINDING cards get one review row.
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

const MISSING_STUDY_DE = [
  "Besuch",
  "besuchen",
  "Fußball",
  "ganz",
  "gefallen",
  "Geschichte",
  "Geschwister",
  "Großeltern",
  "Hand",
  "hübsch",
];

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

function findingKey(f) {
  return `${String(f.cardId || "").trim()}|${String(f.field || "").trim()}`;
}

function loadCards() {
  const code = fs.readFileSync(path.join(ROOT, "data/fr/a1.js"), "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.A1_WORDS;
}

function loadAuditFindings() {
  if (!fs.existsSync(AUDIT_JSON)) {
    console.error(`Missing ${AUDIT_JSON}`);
    process.exit(1);
  }
  const audit = JSON.parse(fs.readFileSync(AUDIT_JSON, "utf8"));
  const backlog = audit.ownerBacklogFinal || [];
  const allFindings = audit.findings || [];

  const missingStudy = allFindings.filter(
    (f) =>
      f.field === "study" &&
      f.validatedReal !== false &&
      String(f.reason || "").includes("Study objekta"),
  );

  const byKey = new Map();
  for (const f of backlog) {
    if (!f.cardId || !f.field) continue;
    byKey.set(findingKey(f), f);
  }

  for (const f of missingStudy) {
    const key = findingKey(f);
    if (!byKey.has(key)) byKey.set(key, f);
  }

  return {
    audit,
    backlog,
    missingStudy,
    mergedFindings: [...byKey.values()],
  };
}

function groupFindingsByCard(findings) {
  const byCard = new Map();
  for (const f of findings) {
    if (!f.cardId) continue;
    if (!byCard.has(f.cardId)) byCard.set(f.cardId, []);
    byCard.get(f.cardId).push(f);
  }
  for (const list of byCard.values()) {
    list.sort((a, b) => String(a.field).localeCompare(String(b.field)));
  }
  return byCard;
}

function buildOwnerRows(cards, findingsByCard) {
  const rows = [];

  cards.forEach((entry, index) => {
    const cardNum = index + 1;
    const cardId = entryId(entry, index);
    const cardFindings = findingsByCard.get(cardId) || [];

    if (cardFindings.length === 0) {
      rows.push({
        cardNum,
        cardId,
        de: entry.de || "",
        field: "lv",
        current: entry.lv || "",
        proposed: "",
        severity: "—",
        category: "NO_FINDING",
        auditId: "—",
        note: "Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW",
        rowKind: "NO_FINDING",
      });
      return;
    }

    for (const f of cardFindings) {
      rows.push({
        cardNum,
        cardId,
        de: f.de || entry.de || "",
        field: f.field || "",
        current: f.currentFr || f.currentEt || entry.lv || "",
        proposed: f.proposedFr || f.proposedEt || "",
        severity: f.severity || "—",
        category: f.category || "—",
        auditId: f.findingId || "—",
        note: f.reason ? truncate(f.reason, 160) : "",
        rowKind: "FINDING",
      });
    }
  });

  return rows;
}

function fileRange(start, end) {
  return `${String(start).padStart(3, "0")}-${String(end).padStart(3, "0")}`;
}

function buildFileContent(rows, start, end, fileName, cardCount) {
  const rel = `reports/${fileName}`;
  const findingRows = rows.filter((r) => r.rowKind === "FINDING");
  const noFindingRows = rows.filter((r) => r.rowKind === "NO_FINDING");
  const cardsWithFindings = new Set(findingRows.map((r) => r.cardId)).size;

  const lines = [
    `# FR–DE A1 — OWNER DECISIONS (${start}–${end})`,
    "",
    "**Standard:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.12",
    `**Kartītes:** **${cardCount}** (no **702** kopā) · **Rindas:** **${rows.length}**`,
    `**WORK_BRANCH:** \`${BRANCH}\``,
    `**Audita avots:** [fr-a1-full-audit.md](${gh("reports/fr-a1-full-audit.md")})`,
    "**DE:** STRICT READ-ONLY",
    "",
    "Atļautie statusi: **LABOT** | **NELABOT** | **FALSE_POSITIVE** | **NEEDS_SOURCE_REVIEW**",
    "",
    "> Viena rinda = viens precīzs **(Card ID, Field)** atradums. Kartei ar vairākiem atradumiem — vairākas rindas.",
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
    "| Card # | Card ID | DE | Field | CURRENT | PROPOSED_FR | Severity | Category | Audit ID | OWNER STATUS | OWNER NEW | Piezīme |",
    "|--------|---------|----|-------|---------|-------------|----------|----------|----------|--------------|-----------|---------|",
  ];

  for (const row of rows) {
    lines.push(
      `| ${row.cardNum} | ${escapePipe(row.cardId)} | ${escapePipe(row.de)} | ${escapePipe(row.field)} | ${escapePipe(truncate(row.current, 100))} | ${escapePipe(truncate(row.proposed, 100))} | ${row.severity} | ${row.category} | ${row.auditId} | | | ${escapePipe(row.note)} |`,
    );
  }

  lines.push("");
  lines.push("## Lokālais kopsavilkums");
  lines.push("");
  lines.push("| Metrika | Skaits |");
  lines.push("|---------|--------|");
  lines.push(`| Kartītes diapazonā | ${cardCount} |`);
  lines.push(`| Rindas kopā | ${rows.length} |`);
  lines.push(`| Atradumu rindas | ${findingRows.length} |`);
  lines.push(`| NO_FINDING rindas | ${noFindingRows.length} |`);
  lines.push(`| Kartītes ar atradumiem | ${cardsWithFindings} |`);
  lines.push("");
  lines.push("> Aizpildiet kolonnas **OWNER STATUS** un **OWNER NEW**. PROPOSED_FR nav automātisks OWNER lēmums.");

  return lines.join("\n");
}

function validate(rows, cards, backlog, missingStudy, mergedFindings) {
  const findingRows = rows.filter((r) => r.rowKind === "FINDING");
  const noFindingRows = rows.filter((r) => r.rowKind === "NO_FINDING");
  const cardsWithFindings = new Set(findingRows.map((r) => r.cardId));

  const rowKeys = new Set();
  let duplicateRows = 0;
  for (const row of findingRows) {
    const key = `${row.cardId}|${row.field}`;
    if (rowKeys.has(key)) duplicateRows += 1;
    else rowKeys.add(key);
  }

  const backlogKeys = new Set(backlog.map(findingKey));
  const mergedKeys = new Set(mergedFindings.map(findingKey));
  let missingFindings = 0;
  for (const key of mergedKeys) {
    if (!rowKeys.has(key)) missingFindings += 1;
  }

  let missingBacklog = 0;
  for (const key of backlogKeys) {
    if (!rowKeys.has(key)) missingBacklog += 1;
  }

  const backlogCardIds = new Set(backlog.map((f) => f.cardId));
  const missingStudyRows = findingRows.filter(
    (r) => r.field === "study" && MISSING_STUDY_DE.includes(r.de),
  );
  const missingStudyDeFound = new Set(missingStudyRows.map((r) => r.de));
  const studyOnlyCardIds = new Set(
    missingStudy.filter((f) => !backlogCardIds.has(f.cardId)).map((f) => f.cardId),
  );

  return {
    cardsTotal: cards.length,
    cardsWithFindings: cardsWithFindings.size,
    cardsWithBacklogFindings: backlogCardIds.size,
    cardsNoFinding: noFindingRows.length,
    cardsNoBacklogFindings: cards.length - backlogCardIds.size,
    findingRows: findingRows.length,
    backlogRows: backlog.length,
    missingStudyExpected: missingStudy.length,
    missingStudyIncluded: missingStudyDeFound.size,
    studyOnlyCards: studyOnlyCardIds.size,
    uniqueCardField: rowKeys.size,
    duplicateRows,
    missingFindings,
    missingBacklog,
    pass:
      cards.length === 702 &&
      duplicateRows === 0 &&
      missingFindings === 0 &&
      missingBacklog === 0 &&
      rowKeys.size === mergedKeys.size &&
      missingStudyDeFound.size === MISSING_STUDY_DE.length &&
      backlog.length === 412 &&
      backlogCardIds.size === 215 &&
      cards.length - backlogCardIds.size === 487,
  };
}

function buildIndex(files, validation) {
  const lines = [
    "# FR–DE A1 — OWNER DECISIONS (702 kartītes)",
    "",
    "**Standard:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.12",
    `**WORK_BRANCH:** \`${BRANCH}\``,
    "**Kartītes:** **702** · **7 faili** (6×100 + 1×102)",
    "",
    "| Diapazons | Kartītes | Rindas | Fails | GitHub |",
    "|-----------|----------|--------|-------|--------|",
  ];
  for (const f of files) {
    lines.push(
      `| ${f.start}–${f.end} | ${f.cardCount} | ${f.rowCount} | [${f.name}](${gh(`reports/${f.name}`)}) | [rediģēt](https://github.com/${REPO}/edit/${BRANCH}/reports/${f.name}) |`,
    );
  }
  lines.push("");
  lines.push("## Validācijas kopsavilkums");
  lines.push("");
  lines.push("| Metrika | Skaits |");
  lines.push("|---------|--------|");
  lines.push(`| Kartītes | **${validation.cardsTotal}/702** |`);
  lines.push(`| Kartītes ar atradumiem | **${validation.cardsWithBacklogFindings}** |`);
  lines.push(`| OWNER atradumu rindas (OWNER_BACKLOG_FINAL) | **${validation.backlogRows}/${validation.backlogRows}** |`);
  lines.push(`| Trūkstošie Study objekti | **${validation.missingStudyIncluded}/${validation.missingStudyExpected}** |`);
  lines.push(`| OWNER atradumu rindas (kopā tabulā) | **${validation.findingRows}/${validation.findingRows}** |`);
  lines.push(`| NO_FINDING kartītes (tabulā) | **${validation.cardsNoFinding}/${validation.cardsNoBacklogFindings - validation.studyOnlyCards}** |`);
  lines.push(`| NO_FINDING kartītes (bez OWNER_BACKLOG atradumiem) | **${validation.cardsNoBacklogFindings}/${validation.cardsNoBacklogFindings}** |`);
  lines.push(`| Unikāli (Card ID, Field) | **${validation.uniqueCardField}** |`);
  lines.push(`| Pazuduši atradumi | **${validation.missingFindings}** |`);
  lines.push(`| Dublikāti | **${validation.duplicateRows}** |`);
  lines.push("");
  lines.push(
    validation.pass
      ? "**Validācija:** ✅ PASS"
      : "**Validācija:** ❌ FAIL — pārbaudiet skaitļus un avotu",
  );
  lines.push("");
  lines.push("> Viena tabulas rinda = viens **(Card ID, Field)** atradums. **OWNER STATUS** un **OWNER NEW** aizpilda OWNER.");
  return lines.join("\n");
}

function main() {
  const cards = loadCards();
  if (cards.length !== 702) {
    console.error(`Expected 702 cards, got ${cards.length}`);
    process.exit(1);
  }

  const { backlog, missingStudy, mergedFindings } = loadAuditFindings();
  const findingsByCard = groupFindingsByCard(mergedFindings);
  const allRows = buildOwnerRows(cards, findingsByCard);
  const validation = validate(allRows, cards, backlog, missingStudy, mergedFindings);

  const fileMeta = [];
  for (const [start, end] of CHUNKS) {
    const cardSlice = cards.slice(start - 1, end);
    const cardIdsInRange = new Set(cardSlice.map((e, i) => entryId(e, start - 1 + i)));
    const slice = allRows.filter((r) => cardIdsInRange.has(r.cardId));
    const name = `fr-a1-owner-decisions-${fileRange(start, end)}.md`;
    const content = buildFileContent(slice, start, end, name, cardSlice.length);
    fs.writeFileSync(path.join(ROOT, "reports", name), content);
    fileMeta.push({
      name,
      start,
      end,
      cardCount: cardSlice.length,
      rowCount: slice.length,
    });
    console.log(`Wrote reports/${name} (${cardSlice.length} cards, ${slice.length} rows)`);
  }

  const indexPath = path.join(ROOT, "reports/fr-a1-owner-decisions-702-INDEX.md");
  fs.writeFileSync(indexPath, buildIndex(fileMeta, validation));
  console.log(`Wrote reports/fr-a1-owner-decisions-702-INDEX.md`);

  console.log(JSON.stringify(validation, null, 2));
  if (!validation.pass) process.exit(2);
}

main();
