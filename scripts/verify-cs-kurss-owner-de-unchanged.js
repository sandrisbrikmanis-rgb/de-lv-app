#!/usr/bin/env node
"use strict";
const fs = require("fs");
const vm = require("vm");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");

function loadCode(code) {
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window;
}

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

function extractDeOnly(win) {
  const data = win.COURSE_LESSON_DATA || {};
  const fields = [];
  const add = (loc, value) => {
    if (typeof value === "string" && value.trim()) fields.push({ loc, value });
  };

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

function main() {
  const beforeCode = execSync("git show HEAD:data/cs/courseLessons.js", { encoding: "utf8", cwd: ROOT });
  const afterCode = fs.readFileSync(`${ROOT}/data/cs/courseLessons.js`, "utf8");
  const before = extractDeOnly(loadCode(beforeCode));
  const after = extractDeOnly(loadCode(afterCode));
  const beforeMap = new Map(before.map((e) => [e.loc, e.value]));
  const changes = [];
  for (const [loc, value] of beforeMap) {
    const next = after.find((e) => e.loc === loc)?.value;
    if (next !== value) changes.push({ loc, before: value, after: next });
  }
  for (const entry of after) {
    if (!beforeMap.has(entry.loc)) changes.push({ loc: entry.loc, before: undefined, after: entry.value });
  }
  console.log(JSON.stringify({ deChanges: changes.length, sample: changes.slice(0, 10) }, null, 2));
  process.exit(changes.length ? 1 : 0);
}

main();
