#!/usr/bin/env node
"use strict";
/**
 * CS-DE Kurss Výslovnost — OWNER COPY-ONLY apply from merged apply map.
 * Usage: node scripts/apply-cs-kurs-pronunciation-owner-copy-only.js
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");

const ROOT = path.join(__dirname, "..");
const APPLY_MAP = path.join(
  ROOT,
  "reports/temp/cs-kurs-pronunciation-owner-apply-map-merged.json",
);
const REPORT_MD = path.join(ROOT, "reports/cs-kurs-pronunciation-owner-apply.md");
const PRIMARY = path.join(ROOT, "data/cs/courseLessons.js");
const WWW = path.join(ROOT, "www/data/cs/courseLessons.js");

function decodeHtmlEntities(s) {
  return String(s || "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, "\"")
    .replace(/&#39;/g, "'");
}

function stripTags(html) {
  return decodeHtmlEntities(
    String(html || "")
      .replace(/<br\s*\/?>/gi, "\n")
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .trim(),
  );
}

function normalizeMapCurrent(s) {
  return String(s || "")
    .replace(/^```\n?/, "")
    .replace(/\n?```$/, "")
    .trim();
}

function loadCourses(filePath) {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return {
    code,
    html: JSON.parse(JSON.stringify(ctx.window.COURSE_LESSON_HTML || {})),
    data: JSON.parse(JSON.stringify(ctx.window.COURSE_LESSON_DATA || {})),
  };
}

function parseFindingId(fid) {
  let m;
  if ((m = fid.match(/^(.+)\/section\[(\d+)\]\/example\[(\d+)\]$/))) {
    return { kind: "section_example", objectId: m[1], section: +m[2], index: +m[3] };
  }
  if ((m = fid.match(/^(.+)\/section\[(\d+)\]\/li\[(\d+)\]$/))) {
    return { kind: "section_li", objectId: m[1], section: +m[2], index: +m[3] };
  }
  if ((m = fid.match(/^(.+)\/legacyVyslovnost\/example\[(\d+)\]$/))) {
    return { kind: "legacy_example", objectId: m[1], index: +m[2] };
  }
  if ((m = fid.match(/^(.+)\/section\[(\d+)\]\/item\[(\d+)\]$/))) {
    return { kind: "section_item", objectId: m[1], section: +m[2], index: +m[3] };
  }
  if ((m = fid.match(/^(.+)\/section\[(\d+)\]\/h4$/))) {
    return { kind: "section_h4", objectId: m[1], section: +m[2] };
  }
  if ((m = fid.match(/^(.+)\/section\[(\d+)\]\/p\[(\d+)\]$/))) {
    return { kind: "section_p", objectId: m[1], section: +m[2], index: +m[3] };
  }
  throw new Error(`Unknown findingId: ${fid}`);
}

function getSectionBlocks(html) {
  const re = /<section class="kurss-lesson-section">([\s\S]*?)<\/section>/gi;
  const blocks = [];
  let m;
  while ((m = re.exec(html)) !== null) {
    blocks.push({ full: m[0], inner: m[1], start: m.index, end: re.lastIndex });
  }
  return blocks;
}

function replaceSectionExample(html, sectionIndex, exampleIndex, oldText, newText) {
  const blocks = getSectionBlocks(html);
  if (sectionIndex >= blocks.length) throw new Error(`section[${sectionIndex}] out of range`);
  const sec = blocks[sectionIndex];
  const examples = [...sec.inner.matchAll(/<div class="kurss-example">([\s\S]*?)<\/div>/gi)];
  if (exampleIndex >= examples.length) throw new Error(`example[${exampleIndex}] out of range`);
  const ex = examples[exampleIndex];
  if (stripTags(ex[1]) !== oldText) {
    throw new Error(`example text mismatch: got "${stripTags(ex[1])}"`);
  }
  const newInner = sec.inner.replace(ex[0], `<div class="kurss-example">${newText}</div>`);
  const newSec = sec.full.replace(sec.inner, newInner);
  return html.slice(0, sec.start) + newSec + html.slice(sec.end);
}

function replaceSectionH4(html, sectionIndex, oldText, newText) {
  const blocks = getSectionBlocks(html);
  if (sectionIndex >= blocks.length) throw new Error(`section[${sectionIndex}] out of range`);
  const sec = blocks[sectionIndex];
  const h4 = sec.inner.match(/<h4[^>]*>([\s\S]*?)<\/h4>/i);
  if (!h4) throw new Error(`h4 missing in section[${sectionIndex}]`);
  if (stripTags(h4[1]) !== oldText) {
    throw new Error(`h4 text mismatch: got "${stripTags(h4[1])}"`);
  }
  const newInner = sec.inner.replace(h4[0], h4[0].replace(h4[1], newText));
  const newSec = sec.full.replace(sec.inner, newInner);
  return html.slice(0, sec.start) + newSec + html.slice(sec.end);
}

function replaceSectionP(html, sectionIndex, pIndex, oldText, newText) {
  const blocks = getSectionBlocks(html);
  if (sectionIndex >= blocks.length) throw new Error(`section[${sectionIndex}] out of range`);
  const sec = blocks[sectionIndex];
  const ps = [...sec.inner.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)].filter(
    (pm) => !pm[0].includes("kurss-lesson-intro"),
  );
  if (pIndex >= ps.length) throw new Error(`p[${pIndex}] out of range`);
  const p = ps[pIndex];
  if (stripTags(p[1]) !== oldText) {
    throw new Error(`p text mismatch: got "${stripTags(p[1])}"`);
  }
  const newInner = sec.inner.replace(p[0], p[0].replace(p[1], newText));
  const newSec = sec.full.replace(sec.inner, newInner);
  return html.slice(0, sec.start) + newSec + html.slice(sec.end);
}

function replaceSectionLi(html, sectionIndex, liIndex, oldText, newText) {
  const blocks = getSectionBlocks(html);
  if (sectionIndex >= blocks.length) throw new Error(`section[${sectionIndex}] out of range`);
  const sec = blocks[sectionIndex];
  const lis = [...sec.inner.matchAll(/<li[^>]*>([\s\S]*?)<\/li>/gi)];
  if (liIndex >= lis.length) throw new Error(`li[${liIndex}] out of range`);
  const li = lis[liIndex];
  if (stripTags(li[1]) !== oldText) {
    throw new Error(`li text mismatch: got "${stripTags(li[1])}"`);
  }
  const newInner = sec.inner.replace(li[0], li[0].replace(li[1], newText));
  const newSec = sec.full.replace(sec.inner, newInner);
  return html.slice(0, sec.start) + newSec + html.slice(sec.end);
}

function replaceLegacyExample(html, exampleIndex, oldText, newText) {
  const detailsRe = /<details class="lesson1-accordion"[^>]*>([\s\S]*?)<\/details>/gi;
  let dm;
  while ((dm = detailsRe.exec(html)) !== null) {
    if (!/<span>\s*Výslovnost\s*<\/span>/i.test(dm[1])) continue;
    const block = dm[0];
    const inner = dm[1];
    const examples = [...inner.matchAll(/<div class="kurss-example">([\s\S]*?)<\/div>/gi)];
    if (exampleIndex >= examples.length) throw new Error(`legacy example[${exampleIndex}] out of range`);
    const ex = examples[exampleIndex];
    if (stripTags(ex[1]) !== oldText) {
      throw new Error(`legacy example mismatch: got "${stripTags(ex[1])}"`);
    }
    const newInner = inner.replace(ex[0], `<div class="kurss-example">${newText}</div>`);
    const newBlock = block.replace(inner, newInner);
    return html.replace(block, newBlock);
  }
  throw new Error("Výslovnost accordion not found");
}

function applyStructured(html, data, parsed, oldText, newText) {
  const { kind, objectId, section, index } = parsed;

  if (kind === "section_item") {
    const lesson = data[objectId];
    if (!lesson?.sections?.[section]?.items?.[index]) {
      throw new Error(`data item missing: ${objectId} section[${section}] item[${index}]`);
    }
    const actual = lesson.sections[section].items[index];
    if (actual !== oldText) throw new Error(`data item mismatch: got "${actual}"`);
    lesson.sections[section].items[index] = newText;
    return;
  }

  const htmlKey = objectId;
  if (!html[htmlKey]) throw new Error(`HTML key missing: ${htmlKey}`);
  let next;
  if (kind === "section_example") {
    next = replaceSectionExample(html[htmlKey], section, index, oldText, newText);
  } else if (kind === "section_li") {
    next = replaceSectionLi(html[htmlKey], section, index, oldText, newText);
  } else if (kind === "section_h4") {
    next = replaceSectionH4(html[htmlKey], section, oldText, newText);
  } else if (kind === "section_p") {
    next = replaceSectionP(html[htmlKey], section, index, oldText, newText);
  } else if (kind === "legacy_example") {
    next = replaceLegacyExample(html[htmlKey], index, oldText, newText);
  } else {
    throw new Error(`Unhandled kind ${kind}`);
  }
  html[htmlKey] = next;
}

function replaceSerialized(fileContent, oldVal, newVal, label) {
  const oldJson = JSON.stringify(oldVal);
  const newJson = JSON.stringify(newVal);
  const count = fileContent.split(oldJson).length - 1;
  if (count !== 1) {
    throw new Error(`Serialized block not unique for ${label}: count=${count}`);
  }
  return fileContent.replace(oldJson, newJson);
}

function replaceDataString(fileContent, oldStr, newStr, label) {
  const oldJson = JSON.stringify(oldStr);
  const newJson = JSON.stringify(newStr);
  const count = fileContent.split(oldJson).length - 1;
  if (count !== 1) {
    throw new Error(`Data string not unique for ${label}: count=${count}`);
  }
  return fileContent.replace(oldJson, newJson);
}

function buildReportMd(report) {
  const lines = [
    "# CS–DE Kurss Výslovnost — OWNER COPY-ONLY apply report",
    "",
    `Generated: ${new Date().toISOString()}`,
    "",
    "## Summary",
    "",
    "| Metric | Value |",
    "|--------|-------|",
    `| Requested unique targets | ${report.requested} |`,
    `| Exact CURRENT matches | ${report.exactMatches} |`,
    `| APPLIED | ${report.applied} |`,
    `| CURRENT_VALUE_MISMATCH | ${report.mismatch} |`,
    `| SKIPPED | ${report.skipped} |`,
    `| Duplicate target attempts | ${report.duplicateAttempts} |`,
    `| NELABOT touched | ${report.nelabotTouched} |`,
    `| FALSE_POSITIVE touched | ${report.falsePositiveTouched} |`,
    `| DE changes | ${report.deChanges} |`,
    `| LV MASTER changes | ${report.lvMasterChanges} |`,
    `| primary ↔ www | ${report.primaryWwwSync} |`,
    `| Unexpected changes | ${report.unexpectedChanges} |`,
    "",
  ];

  if (report.details.length) {
    lines.push("## Details", "");
    for (const d of report.details) {
      lines.push(`- **#${d.findingNum}** ${d.findingId}: ${d.status}${d.note ? ` — ${d.note}` : ""}`);
    }
    lines.push("");
  }

  if (report.errors.length) {
    lines.push("## Errors", "");
    for (const e of report.errors) {
      lines.push(`- **#${e.findingNum}**: ${e.message}`);
    }
    lines.push("");
  }

  return lines.join("\n");
}

function main() {
  const map = JSON.parse(fs.readFileSync(APPLY_MAP, "utf8"));
  const initial = loadCourses(PRIMARY);
  const html = JSON.parse(JSON.stringify(initial.html));
  const data = JSON.parse(JSON.stringify(initial.data));
  const dataStringChanges = [];

  const report = {
    requested: map.apply.length,
    exactMatches: 0,
    applied: 0,
    mismatch: 0,
    skipped: 0,
    duplicateAttempts: 0,
    nelabotTouched: 0,
    falsePositiveTouched: 0,
    deChanges: 0,
    lvMasterChanges: 0,
    primaryWwwSync: "PENDING",
    unexpectedChanges: 0,
    details: [],
    errors: [],
  };

  const seenTargets = new Set();

  for (const entry of map.apply) {
    const targetKey = `${entry.findingId}`;
    if (seenTargets.has(targetKey)) {
      report.duplicateAttempts++;
      report.details.push({
        findingNum: entry.findingNum,
        findingId: entry.findingId,
        status: "DUPLICATE_SKIPPED",
      });
      continue;
    }
    seenTargets.add(targetKey);

    const expectedCurrent = normalizeMapCurrent(entry.current);
    const parsed = parseFindingId(entry.findingId);

    let actualCurrent;
    try {
      if (parsed.kind === "section_item") {
        actualCurrent = data[parsed.objectId].sections[parsed.section].items[parsed.index];
      } else if (parsed.kind === "section_example") {
        const blocks = getSectionBlocks(html[parsed.objectId]);
        const ex = [...blocks[parsed.section].inner.matchAll(/<div class="kurss-example">([\s\S]*?)<\/div>/gi)][
          parsed.index
        ];
        actualCurrent = stripTags(ex[1]);
      } else if (parsed.kind === "section_li") {
        const blocks = getSectionBlocks(html[parsed.objectId]);
        const li = [...blocks[parsed.section].inner.matchAll(/<li[^>]*>([\s\S]*?)<\/li>/gi)][parsed.index];
        actualCurrent = stripTags(li[1]);
      } else if (parsed.kind === "section_h4") {
        const blocks = getSectionBlocks(html[parsed.objectId]);
        const h4 = blocks[parsed.section].inner.match(/<h4[^>]*>([\s\S]*?)<\/h4>/i);
        actualCurrent = stripTags(h4[1]);
      } else if (parsed.kind === "section_p") {
        const blocks = getSectionBlocks(html[parsed.objectId]);
        const ps = [...blocks[parsed.section].inner.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)].filter(
          (pm) => !pm[0].includes("kurss-lesson-intro"),
        );
        actualCurrent = stripTags(ps[parsed.index][1]);
      } else if (parsed.kind === "legacy_example") {
        actualCurrent = null;
        const detailsRe = /<details class="lesson1-accordion"[^>]*>([\s\S]*?)<\/details>/gi;
        let dm;
        while ((dm = detailsRe.exec(html[parsed.objectId])) !== null) {
          if (!/<span>\s*Výslovnost\s*<\/span>/i.test(dm[1])) continue;
          const ex = [...dm[1].matchAll(/<div class="kurss-example">([\s\S]*?)<\/div>/gi)][parsed.index];
          actualCurrent = stripTags(ex[1]);
          break;
        }
        if (!actualCurrent) throw new Error("legacy example not found");
      }
    } catch (err) {
      report.mismatch++;
      report.skipped++;
      report.errors.push({ findingNum: entry.findingNum, message: err.message });
      continue;
    }

    if (actualCurrent !== expectedCurrent) {
      report.mismatch++;
      report.skipped++;
      report.details.push({
        findingNum: entry.findingNum,
        findingId: entry.findingId,
        status: "CURRENT_VALUE_MISMATCH",
        note: `expected "${expectedCurrent.slice(0, 80)}..." got "${String(actualCurrent).slice(0, 80)}..."`,
      });
      continue;
    }

    report.exactMatches++;

    try {
      if (parsed.kind === "section_item") {
        const oldStr = data[parsed.objectId].sections[parsed.section].items[parsed.index];
        applyStructured(html, data, parsed, expectedCurrent, entry.ownerNew);
        dataStringChanges.push({
          findingNum: entry.findingNum,
          oldStr,
          newStr: entry.ownerNew,
          label: entry.findingId,
        });
      } else {
        applyStructured(html, data, parsed, expectedCurrent, entry.ownerNew);
      }
      report.applied++;
      report.details.push({
        findingNum: entry.findingNum,
        findingId: entry.findingId,
        status: "APPLIED",
      });
    } catch (err) {
      report.mismatch++;
      report.skipped++;
      report.errors.push({ findingNum: entry.findingNum, message: err.message });
    }
  }

  if (report.mismatch > 0 || report.skipped > 0) {
    fs.writeFileSync(REPORT_MD, buildReportMd(report), "utf8");
    console.error("Apply aborted — CURRENT_VALUE_MISMATCH or apply errors");
    console.error(JSON.stringify(report, null, 2));
    process.exit(1);
  }

  let fileContent = initial.code;

  const changedHtmlKeys = Object.keys(html).filter((k) => html[k] !== initial.html[k]);
  for (const key of changedHtmlKeys) {
    fileContent = replaceSerialized(fileContent, initial.html[key], html[key], `COURSE_LESSON_HTML.${key}`);
  }

  for (const ch of dataStringChanges) {
    fileContent = replaceDataString(fileContent, ch.oldStr, ch.newStr, ch.label);
  }

  fs.writeFileSync(PRIMARY, fileContent, "utf8");
  fs.writeFileSync(WWW, fileContent, "utf8");

  report.primaryWwwSync = fs.readFileSync(PRIMARY, "utf8") === fs.readFileSync(WWW, "utf8") ? "PASS" : "FAIL";

  try {
    execSync(`node --check "${PRIMARY}"`, { encoding: "utf8" });
    execSync(`node --check "${WWW}"`, { encoding: "utf8" });
  } catch {
    report.unexpectedChanges++;
    report.primaryWwwSync = "FAIL (syntax)";
  }

  fs.writeFileSync(REPORT_MD, buildReportMd(report), "utf8");
  console.log(JSON.stringify(report, null, 2));

  if (report.primaryWwwSync !== "PASS" || report.unexpectedChanges > 0) {
    process.exit(1);
  }
}

main();
