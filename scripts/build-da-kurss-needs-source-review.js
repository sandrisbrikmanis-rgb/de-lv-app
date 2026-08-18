#!/usr/bin/env node
"use strict";
/**
 * Build DA–DE Kurss NEEDS_SOURCE_REVIEW owner pack (20 findings).
 * Usage: node scripts/build-da-kurss-needs-source-review.js
 */
const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const { parseDecisionFile, loadMonolithicFindings } = require("./lib/da-kurss-monolithic-owner-pack");

const DECISIONS_IN = path.join(ROOT, "reports/da-kurss-owner-decisions.md");
const AUDIT_JSON = path.join(ROOT, "reports/temp/da-kurss-full-audit.json");
const OUT_REVIEW = path.join(ROOT, "reports/da-kurss-needs-source-review.md");
const OUT_DECISIONS = path.join(ROOT, "reports/da-kurss-needs-source-review-decisions.md");

function truncate(text, max = 400) {
  const s = String(text || "").replace(/\s+/g, " ").trim();
  return s.length > max ? `${s.slice(0, max)}…` : s;
}

function escapePipe(text) {
  return String(text || "").replace(/\|/g, "\\|").replace(/\n/g, " ").trim();
}

function groupLabel(f) {
  const p = f.path || "";
  const lid = f.lessonId || "";
  if (p.includes(".subtitle")) return "subtitle";
  if (/TrainingCardsDa\[\d+\]/.test(p)) return "training-card";
  if (/kurssLesson(\d+)/.test(p) || (/^lesson\d+$/.test(lid) && p.includes("legacyHtml"))) {
    const m = p.match(/kurssLesson(\d+)/) || lid.match(/lesson(\d+)/);
    return `lesson-${String(m[1]).padStart(2, "0")}-legacyHtml`;
  }
  if (p.includes("kurssPronunciationLesson")) return "static-pronunciation";
  if (p.includes("kurssConsonantsLesson")) return "static-consonants";
  if (p.includes("kurssArticlesLesson")) return "static-articles";
  if (p.includes("kurssVerbBasicsLesson")) return "static-verb-basics";
  if (p.includes("kurssSentenceStructureLesson")) return "static-sentence-structure";
  return "other";
}

function lvMasterHint(f) {
  const p = f.path || "";
  const m = p.match(/kurssLesson(\d+)/) || (f.lessonId || "").match(/lesson(\d+)/);
  if (m) return `data/courseLessons.js → kurssLesson${m[1]}.legacyHtml (LV MASTER)`;
  if (p.includes("COURSE_LESSON_HTML.")) {
    const key = p.replace(/^COURSE_LESSON_HTML\./, "");
    return `data/courseLessons.js → COURSE_LESSON_HTML.${key} (salīdzināt ar LV struktūru)`;
  }
  if (/TrainingCardsDa/.test(p)) return `data/courseTrainingCards.js (DE avots) + LV training struktūra`;
  return "—";
}

function main() {
  if (!fs.existsSync(DECISIONS_IN)) {
    console.error(`Missing ${DECISIONS_IN}`);
    process.exit(1);
  }
  if (!fs.existsSync(AUDIT_JSON)) {
    console.error(`Missing ${AUDIT_JSON}`);
    process.exit(1);
  }

  const rows = parseDecisionFile(DECISIONS_IN);
  const findings = loadMonolithicFindings();
  const nsr = rows.filter((r) => r.status === "NEEDS_SOURCE_REVIEW");

  const byGroup = {};
  for (const row of nsr) {
    const f = findings[row.findingNum - 1];
    const g = groupLabel(f);
    if (!byGroup[g]) byGroup[g] = [];
    byGroup[g].push({ row, f });
  }

  const groupOrder = [
    "lesson-01-legacyHtml",
    "lesson-02-legacyHtml",
    "lesson-03-legacyHtml",
    "lesson-04-legacyHtml",
    "lesson-05-legacyHtml",
    "lesson-06-legacyHtml",
    "lesson-07-legacyHtml",
    "subtitle",
    "training-card",
    "static-pronunciation",
    "static-consonants",
    "static-articles",
    "static-verb-basics",
    "static-sentence-structure",
    "other",
  ];

  const lines = [];
  lines.push("# DA–DE Kurss — NEEDS_SOURCE_REVIEW (20)");
  lines.push("");
  lines.push("Avots: `reports/da-kurss-owner-decisions.md` · post-Luna re-audits (69 findings)");
  lines.push("Saistītais apply PR: **#581** (41 LABOT jau piemēroti)");
  lines.push("Decisions veidne: [`da-kurss-needs-source-review-decisions.md`](./da-kurss-needs-source-review-decisions.md)");
  lines.push("");
  lines.push("> **DE = STRICT READ-ONLY.** Šie 20 ieraksti **nav** piemēroti automātiski.");
  lines.push(
    "> Katram jāizvērtē pret **LV MASTER** (`data/courseLessons.js`) un jā sagatavo pilns dāņu HTML/teksts vai apstiprināts NELABOT/FALSE_POSITIVE.",
  );
  lines.push("");
  lines.push("## Kopsavilkums");
  lines.push("");
  lines.push("| Grupa | Skaits | Severity mix |");
  lines.push("|---|---:|---|");
  for (const g of groupOrder) {
    if (!byGroup[g]) continue;
    const sev = [...new Set(byGroup[g].map((x) => x.f.severity))].join(", ");
    lines.push(`| ${g} | ${byGroup[g].length} | ${sev} |`);
  }
  lines.push(`| **Kopā** | **${nsr.length}** | |`);
  lines.push("");
  lines.push("## Blokējošie iemesli (OWNER)");
  lines.push("");
  lines.push("| Tips | Findings | Apraksts |");
  lines.push("|---|---:|---|");
  lines.push("| Pilns `legacyHtml` (saīsināts auditā) | 1–7 | Nepietiek drošam COPY-ONLY; vajag LV MASTER salīdzinājumu |");
  lines.push("| Statiskie HTML paneļi (veselums) | 8–9, 46, 61–62 | Paneļi jālabo kā viens autoritatīvs HTML, nevis fragmenti |");
  lines.push("| Latvisks / nederīgs PROPOSED_DA | 10–11, 13–15, 17 | Luna PROPOSED nav dāņu; vajag manuālu lokalizāciju |");
  lines.push("| Subtitle vs LV tēma | 16 | DA subtitle var būt korekts, bet jāapstiprina pret Lesson 6 struktūru |");
  lines.push("| DE/source jautājums | 63 | DA korekts; iespējama DE avota kļūda — DA nemainīt bez avota afklaring |");
  lines.push("");
  lines.push("## OWNER darba plūsma");
  lines.push("");
  lines.push("1. Atver finding sadaļu zemāk (vai aizpildi [`decisions`](./da-kurss-needs-source-review-decisions.md)).");
  lines.push("2. Salīdzini **LV MASTER** vs **CURRENT_DA** vs **PROPOSED_DA** (PROPOSED nav apstiprināts).");
  lines.push("3. `Statuss` → LABOT | NELABOT | FALSE_POSITIVE | NEEDS_SOURCE_REVIEW (ja joprojām bloķēts).");
  lines.push("4. `OWNER_DECISION` → pilns dāņu HTML/teksts COPY-ONLY apply, vai pamatojums kāpēc nemainīt.");
  lines.push("");
  lines.push("## Decisions (aizpildāms)");
  lines.push("");
  lines.push("| Finding | Audit ID | Lesson/ID | Path | Severity | Grupa | LV MASTER | Statuss | OWNER_DECISION |");
  lines.push("|--:|---|---|---|---|---|---|---|---|");
  for (const row of nsr) {
    const f = findings[row.findingNum - 1];
    lines.push(
      `| ${row.findingNum} | ${f.id} | \`${f.lessonId}\` | \`${escapePipe(truncate(f.path, 48))}\` | ${f.severity} | ${groupLabel(f)} | ${escapePipe(truncate(lvMasterHint(f), 40))} | NEEDS_SOURCE_REVIEW | ${escapePipe(row.ownerNew)} |`,
    );
  }
  lines.push("");
  lines.push("## Finding detaļas");
  lines.push("");

  for (const row of nsr) {
    const f = findings[row.findingNum - 1];
    lines.push(`### Finding ${row.findingNum} — ${f.lessonId} (${groupLabel(f)})`);
    lines.push("");
    lines.push(`- **Audit ID:** ${f.id}`);
    lines.push(`- **Path:** \`${f.path}\``);
    lines.push(`- **LV MASTER:** ${lvMasterHint(f)}`);
    lines.push(`- **DA production:** \`data/da/courseLessons.js\` / \`data/da/courseTrainingCards.js\``);
    lines.push(`- **Severity / Category:** ${f.severity} / ${f.category}`);
    lines.push(`- **OWNER iemesls:** ${row.ownerNew}`);
    lines.push(`- **Problem:** ${f.problem || "—"}`);
    lines.push(`- **Reason:** ${f.reason || f.problem || "—"}`);
    lines.push("");
    lines.push("**DE (read-only):**");
    lines.push("");
    lines.push("```");
    lines.push(truncate(f.deCurrent, 1200) || "—");
    lines.push("```");
    lines.push("");
    lines.push("**CURRENT_DA (production snapshot auditā):**");
    lines.push("");
    lines.push("```");
    lines.push(truncate(f.daCurrent, 1200) || "—");
    lines.push("```");
    lines.push("");
    lines.push("**PROPOSED_DA (Luna ieteikums — NAV apstiprināts):**");
    lines.push("");
    lines.push("```");
    lines.push(truncate(f.proposedDa, 1200) || "—");
    lines.push("```");
    lines.push("");
    lines.push("**OWNER lēmums (aizpildīt):**");
    lines.push("");
    lines.push("- Statuss: NEEDS_SOURCE_REVIEW");
    lines.push("- OWNER_DECISION:");
    lines.push("");
    lines.push("---");
    lines.push("");
  }

  lines.push("## Copy/paste — agentam");
  lines.push("");
  lines.push("Formāts: `Finding<TAB>Statuss<TAB>OWNER_DECISION`");
  lines.push("");
  lines.push("```text");
  for (const row of nsr) {
    lines.push(`${row.findingNum}\tNEEDS_SOURCE_REVIEW\t${row.ownerNew}`);
  }
  lines.push("```");

  const decisionLines = [];
  decisionLines.push("# DA–DE Kurss — NEEDS_SOURCE_REVIEW decisions");
  decisionLines.push("");
  decisionLines.push("Avots: [`da-kurss-needs-source-review.md`](./da-kurss-needs-source-review.md)");
  decisionLines.push(`Findings: **${nsr.length}** · sākotnēji visi **NEEDS_SOURCE_REVIEW**`);
  decisionLines.push("");
  decisionLines.push("> Aizpildi **Statuss** un **OWNER_DECISION**. LABOT = pilns dāņu HTML/teksts COPY-ONLY apply.");
  decisionLines.push("");
  decisionLines.push("| Finding | Statuss | OWNER_DECISION |");
  decisionLines.push("|---:|---|---|");
  for (const row of nsr) {
    decisionLines.push(`| ${row.findingNum} | NEEDS_SOURCE_REVIEW | ${escapePipe(row.ownerNew)} |`);
  }
  decisionLines.push("");
  decisionLines.push("## Copy/paste — agentam");
  decisionLines.push("");
  decisionLines.push("```text");
  for (const row of nsr) {
    decisionLines.push(`${row.findingNum}\tNEEDS_SOURCE_REVIEW\t${row.ownerNew}`);
  }
  decisionLines.push("```");

  fs.writeFileSync(OUT_REVIEW, `${lines.join("\n")}\n`, "utf8");
  fs.writeFileSync(OUT_DECISIONS, `${decisionLines.join("\n")}\n`, "utf8");
  console.log(JSON.stringify({ review: OUT_REVIEW, decisions: OUT_DECISIONS, count: nsr.length }, null, 2));
}

main();
