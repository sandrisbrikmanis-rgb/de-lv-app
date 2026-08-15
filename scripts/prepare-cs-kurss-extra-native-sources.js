#!/usr/bin/env node
/**
 * Generate CS native translation source files for Kurss extra sections:
 * - verb-basics (kurssVerbBasicsLesson)
 * - sentence-structure (kurssSentenceStructureLesson)
 *
 * Usage: node scripts/prepare-cs-kurss-extra-native-sources.js
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT, loadWindowGlobals, readFile } = require("./lib/audit-common");

const OUT_DIR = path.join(ROOT, "reports", "cs-kurss-lesson-sources");
const DASH_RE = /\s*[–—\-]\s*/;

const SECTIONS = [
  {
    key: "kurssVerbBasicsLesson",
    fileName: "verb-basics.md",
    applyArg: "verb-basics",
    uiTitle: "verbBasics",
    uiDesc: "verbBasicsDesc"
  },
  {
    key: "kurssSentenceStructureLesson",
    fileName: "sentence-structure.md",
    applyArg: "sentence-structure",
    uiTitle: "sentenceStructure",
    uiDesc: "sentenceStructureDesc"
  }
];

function findDash(text) {
  const s = String(text || "");
  const m = s.match(DASH_RE);
  if (!m) return null;
  const idx = s.search(DASH_RE);
  return {
    sep: m[0],
    de: s.slice(0, idx).trim(),
    native: s.slice(idx + m[0].length).trim()
  };
}

function mdEscape(s) {
  return String(s || "").replace(/\|/g, "\\|").replace(/\n/g, " ").trim();
}

function stripTags(html) {
  return String(html || "")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<[^>]+>/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function isGermanOnly(text) {
  const plain = stripTags(text);
  if (!plain) return true;
  if (findDash(plain)) return false;
  return /^[A-Za-zÄÖÜßäöüß0-9\s,.!?"'„“():;?\-]+$/.test(plain)
    && /\b(ich|du|er|sie|wir|ihr|der|die|das|und|nicht|ist|sind|ein|eine|ja|nein)\b/i.test(plain);
}

function loadUiKurss(lang) {
  const code = readFile(`languages/${lang}/ui.js`);
  const w = {};
  vm.runInNewContext(code, { window: w });
  return w.LANGUAGE_UI_STRINGS?.kurss || {};
}

function parseSections(html) {
  return [...html.matchAll(/<section class="kurss-lesson-section">([\s\S]*?)<\/section>/g)].map(
    (m) => m[1]
  );
}

function extractSectionUnits(lvHtml, csHtml, lessonKey) {
  const units = [];
  const lvSections = parseSections(lvHtml);
  const csSections = parseSections(csHtml);

  const lvH3 = (lvHtml.match(/<h3>([\s\S]*?)<\/h3>/i) || [])[1];
  const csH3 = (csHtml.match(/<h3>([\s\S]*?)<\/h3>/i) || [])[1];
  if (csH3) {
    units.push({
      id: "page/title",
      kind: "pageTitle",
      lv: stripTags(lvH3),
      currentCs: stripTags(csH3),
      de: "",
      note: "Page heading (h3)"
    });
  }

  const lvIntro = (lvHtml.match(/class="kurss-lesson-intro"[^>]*>([\s\S]*?)<\/p>/i) || [])[1];
  const csIntro = (csHtml.match(/class="kurss-lesson-intro"[^>]*>([\s\S]*?)<\/p>/i) || [])[1];
  if (csIntro) {
    units.push({
      id: "page/intro",
      kind: "intro",
      lv: stripTags(lvIntro),
      currentCs: stripTags(csIntro),
      de: "",
      note: "Intro paragraph under page title"
    });
  }

  for (let si = 0; si < Math.max(lvSections.length, csSections.length); si++) {
    const lvS = lvSections[si] || "";
    const csS = csSections[si] || "";
    const secId = `section[${si}]`;

    const lvH4 = (lvS.match(/<h4>([\s\S]*?)<\/h4>/i) || [])[1];
    const csH4 = (csS.match(/<h4>([\s\S]*?)<\/h4>/i) || [])[1];
    if (csH4) {
      units.push({
        id: `${secId}/heading`,
        kind: "sectionHeading",
        lv: stripTags(lvH4),
        currentCs: stripTags(csH4),
        de: "",
        note: "Section heading (h4)"
      });
    }

    const lvPs = [...lvS.matchAll(/<p>([\s\S]*?)<\/p>/g)].map((m) => m[1]);
    const csPs = [...csS.matchAll(/<p>([\s\S]*?)<\/p>/g)].map((m) => m[1]);
    for (let pi = 0; pi < Math.max(lvPs.length, csPs.length); pi++) {
      if (!csPs[pi]) continue;
      units.push({
        id: `${secId}/paragraph[${pi}]`,
        kind: "sectionParagraph",
        lv: stripTags(lvPs[pi]),
        currentCs: stripTags(csPs[pi]),
        de: "",
        note: "Section explanation paragraph"
      });
    }

    const lvExamples = [...lvS.matchAll(/<div class="kurss-example">([\s\S]*?)<\/div>/g)].map((m) => m[1]);
    const csExamples = [...csS.matchAll(/<div class="kurss-example">([\s\S]*?)<\/div>/g)].map((m) => m[1]);
    for (let ei = 0; ei < Math.max(lvExamples.length, csExamples.length); ei++) {
      const lvEx = lvExamples[ei] || "";
      const csEx = csExamples[ei] || "";
      const lvDash = findDash(stripTags(lvEx));
      const csDash = findDash(stripTags(csEx));

      if (lvDash || csDash) {
        units.push({
          id: `${secId}/example[${ei}]/native`,
          kind: "exampleNativeSuffix",
          lv: lvDash?.native || stripTags(lvEx),
          currentCs: csDash?.native || stripTags(csEx),
          de: lvDash?.de || csDash?.de || "",
          note: "Czech suffix after em-dash (DE prefix locked)"
        });
      } else if (!isGermanOnly(lvEx) && !isGermanOnly(csEx)) {
        units.push({
          id: `${secId}/example[${ei}]`,
          kind: "exampleNativeFull",
          lv: stripTags(lvEx),
          currentCs: stripTags(csEx),
          de: "",
          note: "Full Czech/native example (no DE dash line)"
        });
      }
    }
  }

  return units;
}

function renderSectionFile(cfg, units, lvUi, csUi) {
  const lines = [
    `# ${cfg.key} — CS native translation source`,
    ``,
    `> **Workflow:** Translate LV reference → Czech. Fill **APPROVED_CS** only.`,
    `> **DE LOCKED:** Do not change DE column / German fragments.`,
    `> **Apply:** \`node scripts/apply-cs-kurss-native-extra.js --section=${cfg.applyArg}\` (after approval)`,
    ``,
    `## UI menu (kurss card)`,
    ``,
    `| Field | LV reference | CURRENT_CS | APPROVED_CS |`,
    `|-------|--------------|------------|-------------|`,
    `| menuTitle | ${mdEscape(lvUi[cfg.uiTitle])} | ${mdEscape(csUi[cfg.uiTitle])} | |`,
    `| menuDesc | ${mdEscape(lvUi[cfg.uiDesc])} | ${mdEscape(csUi[cfg.uiDesc])} | |`,
    ``
  ];

  const byKind = {};
  for (const u of units) {
    if (!byKind[u.kind]) byKind[u.kind] = [];
    byKind[u.kind].push(u);
  }

  const kindOrder = [
    ["pageTitle", "Page title"],
    ["intro", "Intro"],
    ["sectionHeading", "Section headings"],
    ["sectionParagraph", "Section paragraphs"],
    ["exampleNativeSuffix", "Examples — Czech suffix (DE locked)"],
    ["exampleNativeFull", "Examples — full Czech text"]
  ];

  for (const [kind, heading] of kindOrder) {
    const rows = byKind[kind];
    if (!rows?.length) continue;
    lines.push(`## ${heading}`);
    lines.push(``);
    if (kind === "exampleNativeSuffix") {
      lines.push(`| ID | DE (locked) | LV reference (suffix) | CURRENT_CS (suffix) | APPROVED_CS (suffix) |`);
      lines.push(`|----|-------------|------------------------|---------------------|----------------------|`);
      for (const u of rows) {
        lines.push(`| \`${u.id}\` | ${mdEscape(u.de)} | ${mdEscape(u.lv)} | ${mdEscape(u.currentCs)} | |`);
      }
    } else {
      lines.push(`| ID | LV reference | CURRENT_CS | APPROVED_CS |`);
      lines.push(`|----|--------------|------------|-------------|`);
      for (const u of rows) {
        lines.push(`| \`${u.id}\` | ${mdEscape(u.lv)} | ${mdEscape(u.currentCs)} | |`);
      }
    }
    lines.push(``);
  }

  lines.push(`---`);
  lines.push(`Total units: **${units.length}**`);
  return lines.join("\n");
}

function main() {
  const lvWin = loadWindowGlobals("data/courseLessons.js");
  const csWin = loadWindowGlobals("data/cs/courseLessons.js");
  const lvUi = loadUiKurss("lv");
  const csUi = loadUiKurss("cs");

  fs.mkdirSync(OUT_DIR, { recursive: true });

  const index = [];
  for (const cfg of SECTIONS) {
    const lvHtml = lvWin.COURSE_LESSON_HTML[cfg.key] || "";
    const csHtml = csWin.COURSE_LESSON_HTML[cfg.key] || "";
    const units = extractSectionUnits(lvHtml, csHtml, cfg.key);
    const content = renderSectionFile(cfg, units, lvUi, csUi);
    const outPath = path.join(OUT_DIR, cfg.fileName);
    fs.writeFileSync(outPath, content, "utf8");
    index.push({ section: cfg.applyArg, file: cfg.fileName, units: units.length });
    console.log(`Wrote ${cfg.fileName} (${units.length} units)`);
  }

  const readmePath = path.join(OUT_DIR, "README-extra-sections.md");
  const readme = [
    `# CS-DE Kurss — extra section native translation sources`,
    ``,
    `Generated by \`scripts/prepare-cs-kurss-extra-native-sources.js\`.`,
    ``,
    `## Instructions`,
    ``,
    `1. Open each workbook file below.`,
    `2. Use **LV reference** as meaning source; write Czech in **APPROVED_CS**.`,
    `3. **Never edit DE (locked)** columns — German comes from LV-DE master.`,
    `4. After approval, run: \`node scripts/apply-cs-kurss-native-extra.js --section=...\``,
    ``,
    `## Files`,
    ``,
    `| Section | File | Units |`,
    `|---------|------|-------|`,
    ...index.map((r) => `| ${r.section} | [${r.file}](./${r.file}) | ${r.units} |`),
    ``,
    `**Total units:** ${index.reduce((s, r) => s + r.units, 0)}`
  ].join("\n");
  fs.writeFileSync(readmePath, readme, "utf8");
  console.log(`\nDone. Output: ${OUT_DIR}`);
}

main();
