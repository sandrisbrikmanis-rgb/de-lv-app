#!/usr/bin/env node
"use strict";
/**
 * CS-DE Kurss — OWNER COPY-ONLY repair apply.
 * Usage: node scripts/apply-cs-kurss-owner-repair.js [--dry-run]
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const crypto = require("crypto");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const { getAt, setAt, fieldLabel } = require("./lib/cs-kurss-owner-path");

const APPLY_MAP = path.join(ROOT, "reports/temp/cs-kurss-owner-apply-map.json");
const APPLY_LOG = path.join(ROOT, "reports/temp/cs-kurss-owner-apply-log.json");
const PRIMARY = path.join(ROOT, "data/cs/courseLessons.js");
const WWW = path.join(ROOT, "www/data/cs/courseLessons.js");
const LV_PRIMARY = path.join(ROOT, "data/courseLessons.js");
const DRY_RUN = process.argv.includes("--dry-run");

const EXTRA_HTML_KEYS = ["kurssVerbBasicsLesson", "kurssSentenceStructureLesson"];

function md5(filePath) {
  return crypto.createHash("md5").update(fs.readFileSync(filePath)).digest("hex");
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

function escapeRegExp(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function writeCourseLessons(filePath, html, data) {
  let dataJson = JSON.stringify(data, null, 2);
  for (let i = 1; i <= 21; i++) {
    const key = `kurssLesson${i}`;
    if (!html[key]) continue;
    const htmlEscaped = JSON.stringify(html[key]);
    dataJson = dataJson.replace(
      new RegExp(`("legacyHtml": )${escapeRegExp(htmlEscaped)}`),
      `$1COURSE_LESSON_HTML.${key}`,
    );
  }
  for (const key of EXTRA_HTML_KEYS) {
    if (!html[key]) continue;
    const htmlEscaped = JSON.stringify(html[key]);
    dataJson = dataJson.replace(
      new RegExp(`("legacyHtml": )${escapeRegExp(htmlEscaped)}`),
      `$1COURSE_LESSON_HTML.${key}`,
    );
  }
  const content = `const COURSE_LESSON_HTML = ${JSON.stringify(html, null, 2)};\n\nconst COURSE_LESSON_DATA = ${dataJson};\n\nwindow.COURSE_LESSON_HTML = COURSE_LESSON_HTML;\nwindow.COURSE_LESSON_DATA = COURSE_LESSON_DATA;\n`;
  fs.writeFileSync(filePath, content, "utf8");
}

function extractDeOnlyFields(win) {
  const data = win.COURSE_LESSON_DATA || {};
  const fields = [];
  const add = (loc, value) => {
    if (typeof value === "string" && value.trim()) fields.push({ loc, value });
  };

  function isGermanOnly(text) {
    const t = String(text || "").trim();
    if (!t) return false;
    if (/[āēīūģķļņĀĒĪŪĢĶĻŅ]/.test(t)) return false;
    if (/\b(izrunā|vārd|piemēram|Latviešu|darbības|patskani|sloves|vyslovuje|samohlásk|předložka|podstatná)\b/i.test(t)) {
      return false;
    }
    if (/^(Der |Die |Das |Ich |Paul|Alle |Wer |Wie |Wen |Wo|Wohin|Endlich|Dann |Zwei |In dem|an dem|vor drei|Mit |Das Kind)/.test(t)) {
      return true;
    }
    return /^[\s"A-Za-zÄÖÜäöüß„«».,!?;:()\-0-9]+$/.test(t);
  }

  for (const [lessonKey, lesson] of Object.entries(data)) {
    if (!lesson?.sections) continue;
    lesson.sections.forEach((section, si) => {
      if (Array.isArray(section.items)) {
        section.items.forEach((item, ii) => {
          if (typeof item === "string" && isGermanOnly(item)) {
            add(`${lessonKey}.sections[${si}].items[${ii}]`, item);
          }
        });
      }
      if (Array.isArray(section.cards)) {
        section.cards.forEach((card, ci) => {
          for (const key of ["prompt", "answer", "back", "de", "base", "ich", "du", "er", "wir", "ihr", "sie"]) {
            if (card[key] !== undefined) add(`${lessonKey}.sections[${si}].cards[${ci}].${key}`, card[key]);
          }
          if (Array.isArray(card.forms)) {
            card.forms.forEach((form, fi) => {
              if (form.text && isGermanOnly(form.text)) {
                add(`${lessonKey}.sections[${si}].cards[${ci}].forms[${fi}].text`, form.text);
              }
            });
          }
        });
      }
    });
  }

  const html = win.COURSE_LESSON_HTML || {};
  for (const [key, htmlStr] of Object.entries(html)) {
    if (typeof htmlStr !== "string") continue;
    [...htmlStr.matchAll(/<div class="kurss-example">([\s\S]*?)<\/div>/g)].forEach((m, i) => {
      add(`html.${key}.example[${i}]`, m[1].trim());
    });
  }

  return fields;
}

function compareDeSnapshots(before, after) {
  const beforeMap = new Map(before.map((e) => [e.loc, e.value]));
  const changes = [];
  for (const [loc, value] of beforeMap) {
    const afterVal = after.find((e) => e.loc === loc)?.value;
    if (afterVal !== value) changes.push({ loc, before: value, after: afterVal });
  }
  for (const entry of after) {
    if (!beforeMap.has(entry.loc)) changes.push({ loc: entry.loc, before: undefined, after: entry.value });
  }
  return changes;
}

function main() {
  if (!fs.existsSync(APPLY_MAP)) {
    require("./build-cs-kurss-owner-apply-map.js");
  }

  const map = JSON.parse(fs.readFileSync(APPLY_MAP, "utf8"));
  const initial = loadCourses(PRIMARY);
  const lvWin = loadCourses(LV_PRIMARY);
  const data = JSON.parse(JSON.stringify(initial.data));
  const html = JSON.parse(JSON.stringify(initial.html));

  const deBefore = extractDeOnlyFields({ COURSE_LESSON_DATA: initial.data, COURSE_LESSON_HTML: initial.html });
  const lvHashBefore = md5(LV_PRIMARY);

  const log = {
    generatedAt: new Date().toISOString(),
    dryRun: DRY_RUN,
    ownerMappingsTotal: map.ownerMappingsTotal,
    requested: map.apply.length,
    applied: [],
    currentValueMismatch: [],
    skipped: [],
    notFound: [],
    deChanges: 0,
    lvMasterChanges: 0,
    unexpectedChanges: 0,
    primaryWwwSync: "PENDING",
  };

  for (const entry of map.apply) {
    const actual = getAt(data, entry.normalizedPath);
    const record = {
      findingNum: entry.findingNum,
      ownerPath: entry.ownerPath,
      normalizedPath: entry.normalizedPath,
      field: fieldLabel(entry.normalizedPath),
      expectedCurrent: entry.current,
      ownerNew: entry.ownerNew,
    };

    if (actual === undefined) {
      log.notFound.push({ ...record, status: "NOT_FOUND" });
      continue;
    }
    if (typeof actual !== "string") {
      log.notFound.push({ ...record, status: "NOT_STRING", actualType: typeof actual });
      continue;
    }
    if (actual !== entry.current) {
      log.currentValueMismatch.push({
        ...record,
        status: "CURRENT_VALUE_MISMATCH",
        actualCurrent: actual,
      });
      continue;
    }
    if (entry.ownerNew === entry.current) {
      log.skipped.push({ ...record, status: "SKIPPED", reason: "NEW_EQUALS_CURRENT" });
      continue;
    }

    if (!DRY_RUN) {
      const ok = setAt(data, entry.normalizedPath, entry.ownerNew);
      if (!ok) {
        log.notFound.push({ ...record, status: "SET_FAILED" });
        continue;
      }
    }

    log.applied.push({ ...record, status: "APPLIED", previous: entry.current, appliedNew: entry.ownerNew });
  }

  if (!DRY_RUN && log.applied.length > 0) {
    writeCourseLessons(PRIMARY, html, data);
    writeCourseLessons(WWW, html, data);

    try {
      execSync(`node --check "${PRIMARY}"`, { encoding: "utf8" });
      execSync(`node --check "${WWW}"`, { encoding: "utf8" });
    } catch (err) {
      log.unexpectedChanges++;
      throw new Error(`Syntax check failed after apply: ${err.message}`);
    }
  }

  const final = DRY_RUN ? initial : loadCourses(PRIMARY);
  const deAfter = extractDeOnlyFields({ COURSE_LESSON_DATA: final.data, COURSE_LESSON_HTML: final.html });
  const deDiff = compareDeSnapshots(deBefore, deAfter);
  log.deChanges = deDiff.length;
  log.deDiffSample = deDiff.slice(0, 20);
  log.lvMasterChanges = md5(LV_PRIMARY) === lvHashBefore ? 0 : 1;
  log.primaryWwwSync =
    fs.existsSync(PRIMARY) && fs.existsSync(WWW) && fs.readFileSync(PRIMARY, "utf8") === fs.readFileSync(WWW, "utf8")
      ? "PASS"
      : "FAIL";

  fs.mkdirSync(path.dirname(APPLY_LOG), { recursive: true });
  fs.writeFileSync(APPLY_LOG, JSON.stringify(log, null, 2), "utf8");

  console.log(JSON.stringify({
    requested: log.requested,
    applied: log.applied.length,
    currentValueMismatch: log.currentValueMismatch.length,
    skipped: log.skipped.length,
    notFound: log.notFound.length,
    deChanges: log.deChanges,
    lvMasterChanges: log.lvMasterChanges,
    primaryWwwSync: log.primaryWwwSync,
    dryRun: DRY_RUN,
  }, null, 2));

  if (log.deChanges > 0 || log.lvMasterChanges > 0) {
    process.exit(1);
  }
}

main();
