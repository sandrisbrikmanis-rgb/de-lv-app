"use strict";

const fs = require("fs");
const path = require("path");
const { ROOT } = require("./audit-common");
const { collectAllDaFields } = require("./da-kurss-audit-collect");

const SECTION_META = {
  "01-menu-shell": { title: "Galvenā Kurss izvēlne" },
  "02-pronunciation-menu": { title: "Udtale apakšizvēlne" },
  "03-articles": { title: "Artikler" },
  "04-pronouns": { title: "Pronominer" },
  "05-vowels": { title: "Vokaler" },
  "06-consonants": { title: "Konsonanter" },
  "07-verb-basics": { title: "Grundlæggende verber" },
  "08-sentence-structure": { title: "Sætningsstruktur" },
  "09-lessons-menu": { title: "Lektioner izvēlne" },
};

for (let n = 1; n <= 21; n++) {
  SECTION_META[`10-lesson-${String(n).padStart(2, "0")}`] = { title: `Lektion ${n}` };
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

function groupFieldsBySection() {
  const { fields } = collectAllDaFields();
  const grouped = {};
  for (const field of fields) {
    const slug = sectionForField(field);
    if (!slug) continue;
    if (!grouped[slug]) grouped[slug] = [];
    grouped[slug].push(field);
  }
  return grouped;
}

function parsePasteBlock(md) {
  const m = md.match(/```(?:text)?\n([\s\S]*?)```/);
  if (!m) return [];
  return m[1]
    .split("\n")
    .map((line) => line.trimEnd())
    .filter((line) => /^\d+\t/.test(line))
    .map((line) => {
      const parts = line.split("\t");
      const findingNum = parseInt(parts[0], 10);
      const status = (parts[1] || "").trim();
      const ownerNew = parts.slice(2).join("\t").trim();
      return { findingNum, status, ownerNew };
    });
}

function parseTableRows(md) {
  const rows = [];
  for (const line of md.split("\n")) {
    if (!line.startsWith("|")) continue;
    if (/^\|\s*[-:]+/.test(line)) continue;
    const cells = line
      .split("|")
      .slice(1, -1)
      .map((c) => c.trim());
    if (cells.length < 4 || !/^\d+$/.test(cells[0])) continue;
    rows.push({
      findingNum: parseInt(cells[0], 10),
      status: cells[3].replace(/\*/g, "").trim(),
      ownerNew: (cells[4] || "").trim(),
    });
  }
  return rows;
}

function parseDecisionFile(filePath) {
  const md = fs.readFileSync(filePath, "utf8");
  const paste = parsePasteBlock(md);
  if (paste.length) return paste;
  return parseTableRows(md);
}

function parseArrowReplacement(text) {
  const m = String(text || "").match(/(.+?)\s*(?:→|->)\s*(.+)/);
  if (!m) return null;
  return { from: m[1].trim(), to: m[2].trim() };
}

function parseQuotedHtmlReplace(text) {
  const m = String(text || "").match(/"([^"]+)"\s*(?:→|->)\s*"([^"]+)"/);
  if (!m) return null;
  return { from: m[1], to: m[2] };
}

function normalizeDashVariants(text) {
  return String(text || "")
    .replace(/\u2014/g, "-")
    .replace(/\u2013/g, "-")
    .replace(/\s-\s/g, " - ");
}

function sectionDecisionPath(slug, decisionsDir) {
  return path.join(decisionsDir || path.join(ROOT, "reports"), `da-kurss-owner-decisions-${slug}.md`);
}

function listSectionSlugs() {
  return Object.keys(SECTION_META);
}

/** Synthetic fields for pronoun pill fixes (Findings 2–8 in 04-pronouns review). */
function pronounHtmlFinding(findingNum) {
  const map = {
    2: { daCurrent: "Øh - han", path: "COURSE_LESSON_HTML.kurssPronounsLesson > Nominativ > er" },
    3: { daCurrent: "Du - dig", path: "COURSE_LESSON_HTML.kurssPronounsLesson > Nominativ > du" },
    4: { daCurrent: "Sie - hun", path: "COURSE_LESSON_HTML.kurssPronounsLesson > Nominativ > sie" },
    5: { daCurrent: "Jeg - det", path: "COURSE_LESSON_HTML.kurssPronounsLesson > Nominativ > es" },
    6: { daCurrent: "Ihr - dig", path: "COURSE_LESSON_HTML.kurssPronounsLesson > Nominativ > ihr" },
    7: { daCurrent: "Slips - de/hende", path: "COURSE_LESSON_HTML.kurssPronounsLesson > Nominativ > sie-plural" },
    8: { daCurrent: "Slips - dig (høflighed)", path: "COURSE_LESSON_HTML.kurssPronounsLesson > Nominativ > Sie-formal" },
  };
  const row = map[findingNum];
  if (!row) return null;
  return {
    lessonId: "kurssPronounsLesson",
    path: row.path,
    daCurrent: row.daCurrent,
    fieldType: "kurss-example",
    source: "html-extra",
  };
}

module.exports = {
  SECTION_META,
  sectionForField,
  groupFieldsBySection,
  parseDecisionFile,
  parsePasteBlock,
  parseArrowReplacement,
  parseQuotedHtmlReplace,
  normalizeDashVariants,
  sectionDecisionPath,
  listSectionSlugs,
  pronounHtmlFinding,
};
