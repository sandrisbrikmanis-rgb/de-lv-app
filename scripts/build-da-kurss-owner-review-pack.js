#!/usr/bin/env node
"use strict";
/**
 * Generate DA–DE Kurss OWNER review + decisions files per section/subsection (A1/B1 workflow).
 */
const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const { collectAllDaFields } = require("./lib/da-kurss-audit-collect");

const REPORTS = path.join(ROOT, "reports");
const REPO = "sandrisbrikmanis-rgb/de-lv-app";
const BRANCH = "main";

const LV_DIAC = /[āēīūģķļņĀĒĪŪĢĶĻŅ]/;
const LV_WORDS =
  /\b(Tagad|Pārveido|Gatavs|piemēram|vārd|Vārd|Latviešu|Lekcija|lekcij|Iesāc|kartīt|izrunā|darbības|lietvār|pavēles|teikum|Foredrag)\b/i;

const SECTION_META = {
  "01-menu-shell": { title: "Galvenā Kurss izvēlne", file: "languages/da/ui.js" },
  "02-pronunciation-menu": { title: "Udtale apakšizvēlne", file: "languages/da/ui.js" },
  "03-articles": { title: "Artikler (statiskais panels)", file: "data/da/courseLessons.js" },
  "04-pronouns": { title: "Pronominer (statiskais panels)", file: "data/da/courseLessons.js" },
  "05-vowels": { title: "Vokaler — lange og korte", file: "data/da/courseLessons.js" },
  "06-consonants": { title: "Konsonanter og bogstavkombinationer", file: "data/da/courseLessons.js" },
  "07-verb-basics": { title: "Grundlæggende verber", file: "data/da/courseLessons.js" },
  "08-sentence-structure": { title: "Sætningsstruktur", file: "data/da/courseLessons.js" },
  "09-lessons-menu": { title: "Lektioner izvēlne (1–21)", file: "languages/da/ui.js" },
};

for (let n = 1; n <= 21; n++) {
  const slug = `10-lesson-${String(n).padStart(2, "0")}`;
  SECTION_META[slug] = {
    title: `Lektion ${n}`,
    file: "data/da/courseLessons.js",
  };
}

function sectionForField(f) {
  const p = f.path || "";
  const lid = f.lessonId || "";
  if (p.includes("lessonItems")) return "09-lessons-menu";
  if (p.startsWith("LANGUAGE_UI_STRINGS") || lid === "ui") {
    if (/vowels|consonants|pronunciationSubtitle|vowelsSubtitle|consonantsSubtitle/.test(p)) {
      return "02-pronunciation-menu";
    }
    return "01-menu-shell";
  }
  if (p.includes("kurssArticlesLesson")) return "03-articles";
  if (p.includes("kurssPronounsLesson")) return "04-pronouns";
  if (p.includes("kurssPronunciationLesson")) return "05-vowels";
  if (p.includes("kurssConsonantsLesson")) return "06-consonants";
  if (p.includes("kurssVerbBasicsLesson")) return "07-verb-basics";
  if (p.includes("kurssSentenceStructureLesson")) return "08-sentence-structure";
  const m = p.match(/kurssLesson(\d+)/) || lid.match(/lesson(\d+)/);
  if (m) return `10-lesson-${m[1].padStart(2, "0")}`;
  return null;
}

function truncate(text, max = 220) {
  const s = String(text || "").replace(/\s+/g, " ").trim();
  return s.length > max ? `${s.slice(0, max)}…` : s;
}

function classify(text) {
  const t = String(text || "");
  if (!t.trim()) return { severity: "INFO", problem: "Tukšs lauks" };
  if (LV_DIAC.test(t)) return { severity: "HIGH", problem: "LV diakritikas/atlikums" };
  if (LV_WORDS.test(t)) return { severity: "HIGH", problem: "LV vārdu/atlikumu pazīmes" };
  if (/^Lekcija \d+/i.test(t) || /^Foredrag \d+/i.test(t)) {
    return { severity: "MEDIUM", problem: "Ne-dāņu virsraksta formula (Lekcija/Foredrag)" };
  }
  return { severity: "INFO", problem: "Salīdzināt ar LV etalonu; ja dabīgs dāņu — NELABOT" };
}

function proposeDa(field, cls) {
  if (cls.severity === "INFO" && field.daCurrent === field.lvMasterDa) {
    return "(LV teksts DA laukā — OWNER: ierakstīt dāņu tulkojumu)";
  }
  if (cls.severity !== "INFO") {
    return "(OWNER: ierakstīt pareizo dāņu tekstu pēc LV/DE nozīmes)";
  }
  return "(Ja dabīgs dāņu tulkojums — NELABOT)";
}

function productionFile(field, sectionSlug) {
  if (field.source === "ui") return "languages/da/ui.js";
  if (field.source === "training") return "data/da/courseTrainingCards.js";
  return SECTION_META[sectionSlug]?.file || "data/da/courseLessons.js";
}

function extraPronounFindings() {
  return [
    {
      lessonId: "kurssPronounsLesson",
      path: "COURSE_LESSON_HTML.kurssPronounsLesson > Nominativ > er",
      fieldType: "kurss-example",
      daCurrent: "Øh — han",
      lvMasterDa: "er — viņš",
      source: "html-extra",
      problem: "Vācu er aizstāts ar “Øh”",
      severity: "MEDIUM",
      proposedDa: "er — han",
    },
    {
      lessonId: "kurssPronounsLesson",
      path: "COURSE_LESSON_HTML.kurssPronounsLesson > Nominativ > du",
      fieldType: "kurss-example",
      daCurrent: "Du — dig",
      lvMasterDa: "du — tu",
      source: "html-extra",
      problem: "Nominativ du, bet tulkojums “dig” (Akkusativ)",
      severity: "MEDIUM",
      proposedDa: "du — du",
    },
    {
      lessonId: "kurssPronounsLesson",
      path: "COURSE_LESSON_HTML.kurssPronounsLesson > Nominativ > sie",
      fieldType: "kurss-example",
      daCurrent: "Sie — hun",
      lvMasterDa: "sie — viņa",
      source: "html-extra",
      problem: "Lielais S = Sie (høflighed), nevis sie (viņa)",
      severity: "MEDIUM",
      proposedDa: "sie — hun",
    },
    {
      lessonId: "kurssPronounsLesson",
      path: "COURSE_LESSON_HTML.kurssPronounsLesson > Nominativ > es",
      fieldType: "kurss-example",
      daCurrent: "Jeg — det",
      lvMasterDa: "es — tas",
      source: "html-extra",
      problem: "“Jeg” nav vācu es",
      severity: "HIGH",
      proposedDa: "es — det",
    },
    {
      lessonId: "kurssPronounsLesson",
      path: "COURSE_LESSON_HTML.kurssPronounsLesson > Nominativ > ihr",
      fieldType: "kurss-example",
      daCurrent: "Ihr — dig",
      lvMasterDa: "ihr — jūs",
      source: "html-extra",
      problem: "Nominativ ihr, bet tulkojums “dig” (Akkusativ)",
      severity: "MEDIUM",
      proposedDa: "ihr — I",
    },
    {
      lessonId: "kurssPronounsLesson",
      path: "COURSE_LESSON_HTML.kurssPronounsLesson > Nominativ > sie-plural",
      fieldType: "kurss-example",
      daCurrent: "Slips — de/hende",
      lvMasterDa: "sie — viņi / viņas",
      source: "html-extra",
      problem: "“Slips” nav vācu sie",
      severity: "HIGH",
      proposedDa: "sie — de/hende",
    },
    {
      lessonId: "kurssPronounsLesson",
      path: "COURSE_LESSON_HTML.kurssPronounsLesson > Nominativ > Sie-formal",
      fieldType: "kurss-example",
      daCurrent: "Slips — dig (høflighed)",
      lvMasterDa: "Sie — Jūs (pieklājības)",
      source: "html-extra",
      problem: "“Slips” nav vācu Sie",
      severity: "HIGH",
      proposedDa: "Sie — De (høflighed)",
    },
  ];
}

function reviewFindingBlock(f, index, sectionSlug) {
  const cls = f.severity
    ? { severity: f.severity, problem: f.problem }
    : classify(f.daCurrent);
  const proposed = f.proposedDa || proposeDa(f, cls);
  const auditId = `DA-KURSS-${sectionSlug.toUpperCase().replace(/-/g, "")}-${String(index).padStart(4, "0")}`;

  return `## Finding ${index}

**Audit ID:** ${auditId}
**Lesson/ID:** \`${f.lessonId}\`
**ID / path:** \`${f.path}\`
**DE (read-only):** ${truncate(f.deCurrent || "—", 120)}
**Severity:** ${cls.severity}
**Field:** \`${f.fieldType || "text"}\`
**Production file:** \`${productionFile(f, sectionSlug)}\`
**LV reference:** ${truncate(f.lvMasterDa || "—", 400)}
**CURRENT_DA:** ${truncate(f.daCurrent, 400)}
**PROPOSED_DA:** ${truncate(proposed, 400)}
**Problēma:** ${cls.problem}
**Audita pamatojums:** Salīdzinājums ar LV etalonu; DE nemainīt.
**Avots:** DA–DE Kurss owner pack (${f.source || "collect"})

**OWNER_DECISION:**

---
`;
}

function writeSection(slug, findings) {
  const meta = SECTION_META[slug];
  if (!meta) return null;
  const reviewName = `da-kurss-owner-review-${slug}.md`;
  const decisionsName = `da-kurss-owner-decisions-${slug}.md`;

  const reviewHeader = `# DA–DE Kurss — OWNER review — ${meta.title}

Avots: LV etalons (\`data/courseLessons.js\`, \`languages/lv/ui.js\`) salīdzināts ar DA (\`data/da/courseLessons.js\`, \`languages/da/ui.js\`)
Findings: **1–${findings.length}** (${findings.length} ieraksti)

> **PROPOSED_DA** ir ieteikums — **nav** OWNER apstiprināts. Ieraksti pareizo dāņu tekstu laukā **OWNER_DECISION** (vai atgriez \`${decisionsName}\` tabulu).
> **DE lauki nemainīt.** Labojam tikai DA.
> **LV reference** = LV etalona paralelais lauks (nevis dāņu).

`;

  const reviewBody = findings.map((f, i) => reviewFindingBlock(f, i + 1, slug)).join("\n");
  fs.writeFileSync(path.join(REPORTS, reviewName), reviewHeader + reviewBody);

  const decisionsHeader = `# DA–DE Kurss — OWNER decisions — ${meta.title}

Avots: \`reports/${reviewName}\`
Findings: **1–${findings.length}** (${findings.length} ieraksti)

**DE = STRICT READ-ONLY.** Aizpildi tabulu pēc ChatGPT/OWNER pārbaudes.

**Statuss:** LABOT | FALSE_POSITIVE | NELABOT | NEEDS_SOURCE_REVIEW

| Finding | Lesson/ID | Path | Statuss | OWNER_DECISION |
|---:|---|---|---|---|
`;

  const tableRows = findings
    .map(
      (f, i) =>
        `| ${i + 1} | \`${f.lessonId}\` | \`${String(f.path).replace(/\|/g, "\\|")}\` | PENDING | |`
    )
    .join("\n");

  const pasteBlock = findings.map((_, i) => `${i + 1}\tPENDING\t`).join("\n");

  const decisionsBody = `${decisionsHeader}${tableRows}

---

## Copy/paste — atgriešanai agentam

Formāts: \`Finding<TAB>Statuss<TAB>OWNER_DECISION\`

\`\`\`
${pasteBlock}
\`\`\`
`;

  fs.writeFileSync(path.join(REPORTS, decisionsName), decisionsBody);

  return { slug, title: meta.title, reviewName, decisionsName, count: findings.length };
}

function ghLink(file) {
  return `https://github.com/${REPO}/blob/${BRANCH}/reports/${file}`;
}

function rawLink(file) {
  return `https://raw.githubusercontent.com/${REPO}/${BRANCH}/reports/${file}`;
}

function main() {
  const { fields } = collectAllDaFields();
  const grouped = {};

  for (const field of fields) {
    const slug = sectionForField(field);
    if (!slug) continue;
    if (!grouped[slug]) grouped[slug] = [];
    grouped[slug].push(field);
  }

  grouped["04-pronouns"] = (grouped["04-pronouns"] || []).concat(extraPronounFindings());

  const order = Object.keys(SECTION_META);
  const written = [];

  for (const slug of order) {
    const list = grouped[slug] || [];
    if (!list.length) continue;
    written.push(writeSection(slug, list));
  }

  const indexLines = [
    "# DA–DE Kurss — OWNER review — indekss (visas sadaļas)",
    "",
    "Tas pats **Copy-Only** workflow kā A1/A2/B1:",
    "",
    "1. Atver **review** failu sadaļai.",
    "2. ChatGPT/OWNER aizpilda **OWNER_DECISION** (vai **decisions** tabulu).",
    "3. Atgriez aizpildīto failu — es veicu COPY-ONLY labojumus.",
    "",
    "**Statuss:** LABOT | FALSE_POSITIVE | NELABOT | NEEDS_SOURCE_REVIEW",
    "",
    "## Sadaļas",
    "",
    "| # | Sadaļa | Findings | Review (GitHub) | Decisions (GitHub) |",
    "|---|--------|----------|-----------------|---------------------|",
  ];

  written.forEach((row, i) => {
    indexLines.push(
      `| ${i + 1} | ${row.title} | ${row.count} | [review](${ghLink(row.reviewName)}) | [decisions](${ghLink(row.decisionsName)}) |`
    );
  });

  indexLines.push("");
  indexLines.push("## Raw (ChatGPT kopēšanai)");
  indexLines.push("");
  for (const row of written) {
    indexLines.push(`- **${row.title}** review: ${rawLink(row.reviewName)}`);
    indexLines.push(`- **${row.title}** decisions: ${rawLink(row.decisionsName)}`);
  }

  fs.writeFileSync(path.join(REPORTS, "da-kurss-owner-review-INDEX.md"), indexLines.join("\n"));

  console.log(JSON.stringify({ sections: written.length, totalFindings: written.reduce((a, b) => a + b.count, 0) }, null, 2));
}

main();
