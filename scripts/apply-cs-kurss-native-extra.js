#!/usr/bin/env node
/**
 * Apply approved CS native translations for Kurss extra sections.
 *
 * Usage:
 *   node scripts/apply-cs-kurss-native-extra.js --section=verb-basics
 *   node scripts/apply-cs-kurss-native-extra.js --section=sentence-structure
 */
const fs = require("fs");
const path = require("path");
const {
  ROOT,
  loadWindowGlobals,
  isSyncedWithWww
} = require("./lib/audit-common");
const { findDash, parseApprovedMarkdown } = require("./lib/cs-kurss-approved-parse");

const SECTIONS = {
  "verb-basics": {
    htmlKey: "kurssVerbBasicsLesson",
    approvedFile: "verb-basics-approved.md",
    uiTitle: "verbBasics",
    uiDesc: "verbBasicsDesc"
  },
  "sentence-structure": {
    htmlKey: "kurssSentenceStructureLesson",
    approvedFile: "sentence-structure-approved.md",
    uiTitle: "sentenceStructure",
    uiDesc: "sentenceStructureDesc"
  }
};

function parseArgs() {
  const argv = process.argv.slice(2);
  let section = null;
  let file = null;
  for (let i = 0; i < argv.length; i++) {
    if (argv[i].startsWith("--section=")) section = argv[i].slice("--section=".length);
    else if (argv[i] === "--section") section = argv[i + 1];
    else if (argv[i].startsWith("--file=")) file = argv[i].slice("--file=".length);
    else if (argv[i] === "--file") file = argv[i + 1];
  }
  if (!section || !SECTIONS[section]) {
    console.error("Usage: node scripts/apply-cs-kurss-native-extra.js --section=verb-basics|sentence-structure [--file=approved.md]");
    process.exit(1);
  }
  if (!file) {
    file = path.join(ROOT, "reports/cs-kurss-lesson-sources", SECTIONS[section].approvedFile);
  }
  return { section, file: path.resolve(file), cfg: SECTIONS[section] };
}

function parseSections(html) {
  return [...html.matchAll(/<section class="kurss-lesson-section">([\s\S]*?)<\/section>/g)].map(
    (m) => m[1]
  );
}

function rebuildSections(html, sectionParts) {
  let idx = 0;
  return html.replace(
    /<section class="kurss-lesson-section">[\s\S]*?<\/section>/g,
    () => `<section class="kurss-lesson-section">${sectionParts[idx++] || ""}</section>`
  );
}

function applyExample(inner, suffixId, fullId, byId) {
  if (byId[fullId] && !byId[suffixId]) {
    return `<div class="kurss-example">${byId[fullId]}</div>`;
  }
  if (byId[suffixId]) {
    const plain = inner.replace(/<br\s*\/?>/gi, " ").replace(/<[^>]+>/g, "").trim();
    const d = findDash(plain);
    const sep = d?.sep || " — ";
    const de = d?.de || plain;
    let native = byId[suffixId];
    const nd = findDash(native);
    if (nd) native = nd.native;
    const merged = `${de}${sep}${native}`;
    if (inner.includes("<br")) {
      const parts = merged.split(/\s+[–—-]\s+/);
      if (parts.length >= 2) {
        return `<div class="kurss-example">${parts[0]}<br>${parts.slice(1).join(" ")}</div>`;
      }
    }
    return `<div class="kurss-example">${merged}</div>`;
  }
  if (byId[fullId]) {
    return `<div class="kurss-example">${byId[fullId]}</div>`;
  }
  return `<div class="kurss-example">${inner}</div>`;
}

function applySectionHtml(html, byId) {
  let out = html;

  if (byId["page/title"]) {
    out = out.replace(/(<h3>)([\s\S]*?)(<\/h3>)/i, `$1${byId["page/title"]}$3`);
  }
  if (byId["page/intro"]) {
    out = out.replace(
      /(<p class="kurss-lesson-intro">)([\s\S]*?)(<\/p>)/i,
      `$1${byId["page/intro"]}$3`
    );
  }

  const sections = parseSections(out);
  const updated = sections.map((sectionHtml, si) => {
    let block = sectionHtml;
    const headingId = `section[${si}]/heading`;
    if (byId[headingId]) {
      block = block.replace(/(<h4>)([\s\S]*?)(<\/h4>)/i, `$1${byId[headingId]}$3`);
    }

    let pIdx = 0;
    block = block.replace(/<p>([\s\S]*?)<\/p>/g, (match, inner) => {
      const id = `section[${si}]/paragraph[${pIdx}]`;
      pIdx += 1;
      if (!byId[id]) return match;
      return `<p>${byId[id]}</p>`;
    });

    let exIdx = 0;
    block = block.replace(/<div class="kurss-example">([\s\S]*?)<\/div>/g, (match, inner) => {
      const suffixId = `section[${si}]/example[${exIdx}]/native`;
      const fullId = `section[${si}]/example[${exIdx}]`;
      exIdx += 1;
      return applyExample(inner, suffixId, fullId, byId);
    });

    return block;
  });

  return rebuildSections(out, updated);
}

function escapeRegExp(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function updateUiString(code, key, value) {
  const re = new RegExp(`("${escapeRegExp(key)}":\\s*")([^"]*)(")`);
  if (!re.test(code)) {
    const re2 = new RegExp(`(${escapeRegExp(key)}:\\s*")([^"]*)(")`);
    return code.replace(re2, `$1${value}$3`);
  }
  return code.replace(re, `$1${value}$3`);
}

function writeCourseLessons(filePath, html, data) {
  let dataJson = JSON.stringify(data, null, 2);
  for (let i = 1; i <= 7; i++) {
    const lessonKey = `kurssLesson${i}`;
    const htmlEscaped = JSON.stringify(html[lessonKey]);
    dataJson = dataJson.replace(
      new RegExp(`("legacyHtml": )${escapeRegExp(htmlEscaped)}`),
      `$1COURSE_LESSON_HTML.${lessonKey}`
    );
  }
  const content = `const COURSE_LESSON_HTML = ${JSON.stringify(html, null, 2)};\n\nconst COURSE_LESSON_DATA = ${dataJson};\n\nwindow.COURSE_LESSON_HTML = COURSE_LESSON_HTML;\nwindow.COURSE_LESSON_DATA = COURSE_LESSON_DATA;\n`;
  fs.writeFileSync(filePath, content, "utf8");
}

function main() {
  const { section, file, cfg } = parseArgs();
  if (!fs.existsSync(file)) {
    console.error(`Approved file not found: ${file}`);
    process.exit(1);
  }

  const { byId } = parseApprovedMarkdown(fs.readFileSync(file, "utf8"));
  const csWin = loadWindowGlobals("data/cs/courseLessons.js");
  const csHtml = { ...csWin.COURSE_LESSON_HTML };
  const csData = JSON.parse(JSON.stringify(csWin.COURSE_LESSON_DATA));

  csHtml[cfg.htmlKey] = applySectionHtml(csHtml[cfg.htmlKey] || "", byId);

  writeCourseLessons(path.join(ROOT, "data/cs/courseLessons.js"), csHtml, csData);
  writeCourseLessons(path.join(ROOT, "www/data/cs/courseLessons.js"), csHtml, csData);

  for (const uiPath of ["languages/cs/ui.js", "www/languages/cs/ui.js"]) {
    const fullPath = path.join(ROOT, uiPath);
    let code = fs.readFileSync(fullPath, "utf8");
    if (byId.menuTitle) code = updateUiString(code, cfg.uiTitle, byId.menuTitle);
    if (byId.menuDesc) code = updateUiString(code, cfg.uiDesc, byId.menuDesc);
    fs.writeFileSync(fullPath, code, "utf8");
  }

  const applied = Object.keys(byId).length;
  console.log(`Applied section ${section} from ${file}`);
  console.log(`Fields applied: ${applied}`);
  console.log(`primary ↔ www courseLessons: ${isSyncedWithWww("data/cs/courseLessons.js") ? "PASS" : "FAIL"}`);
  console.log(`primary ↔ www ui.js: ${isSyncedWithWww("languages/cs/ui.js") ? "PASS" : "FAIL"}`);
}

main();
