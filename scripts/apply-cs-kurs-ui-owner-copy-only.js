#!/usr/bin/env node
"use strict";
/**
 * CS-DE Kurss UI — OWNER approved COPY-ONLY apply from cs-kurs-ui-owner-apply-map.json
 * Usage: node scripts/apply-cs-kurs-ui-owner-copy-only.js
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.join(__dirname, "..");
const APPLY_MAP = path.join(ROOT, "reports", "temp", "cs-kurs-ui-owner-apply-map.json");
const CS_UI_PRIMARY = path.join(ROOT, "languages", "cs", "ui.js");
const CS_UI_WWW = path.join(ROOT, "www", "languages", "cs", "ui.js");
const UI_PRIMARY = path.join(ROOT, "ui.js");
const UI_WWW = path.join(ROOT, "www", "ui.js");

function loadUiStrings(filePath) {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.LANGUAGE_UI_STRINGS;
}

function writeUiStrings(filePath, obj) {
  fs.writeFileSync(filePath, `window.LANGUAGE_UI_STRINGS = ${JSON.stringify(obj, null, 2)};\n`, "utf8");
}

function getByPath(obj, dotPath) {
  return dotPath.split(".").reduce((acc, part) => acc?.[part], obj);
}

function setByPath(obj, dotPath, value) {
  const parts = dotPath.split(".");
  let cur = obj;
  for (let i = 0; i < parts.length - 1; i++) {
    cur = cur[parts[i]];
    if (cur == null) return false;
  }
  const last = parts[parts.length - 1];
  if (cur[last] === undefined) return false;
  cur[last] = value;
  return true;
}

function addToRegistrySet(filePath, registryName, title) {
  let code = fs.readFileSync(filePath, "utf8");
  const anchor = `${registryName} = new Set([`;
  const start = code.indexOf(anchor);
  if (start === -1) throw new Error(`Registry ${registryName} not found in ${filePath}`);
  const openBracket = start + anchor.length - 1;
  const closeBracket = code.indexOf("]", openBracket);
  if (closeBracket === -1) throw new Error(`Registry ${registryName} closing bracket not found`);
  const inner = code.slice(openBracket + 1, closeBracket);
  const items = inner.match(/"([^"]+)"/g) || [];
  const set = new Set(items.map((s) => s.replace(/"/g, "")));
  if (set.has(title)) return { applied: false, reason: "already_present" };
  const newItems = [...set, title];
  const newArray = newItems.map((t) => `"${t}"`).join(", ");
  code = code.slice(0, openBracket + 1) + newArray + code.slice(closeBracket);
  fs.writeFileSync(filePath, code, "utf8");
  return { applied: true };
}

function checkUebungStillUsed(uiObj, courseDataPath) {
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(courseDataPath, "utf8"), ctx);
  const courseData = ctx.window.COURSE_LESSON_DATA || {};
  let inLessons = false;
  for (let i = 1; i <= 21; i++) {
    const lesson = courseData[`kurssLesson${i}`];
    if (!lesson?.sections) continue;
    for (const sec of lesson.sections) {
      if (String(sec.title || "").trim() === "Übung / Cvičení") {
        inLessons = true;
        break;
      }
    }
    if (inLessons) break;
  }
  const inUi = getByPath(uiObj, "kurss.sections.exerciseCombined") === "Übung / Cvičení";
  return inLessons || inUi;
}

function main() {
  const map = JSON.parse(fs.readFileSync(APPLY_MAP, "utf8"));
  const uiObj = loadUiStrings(CS_UI_PRIMARY);

  const report = {
    ui: { requested: 0, applied: 0, skipped: 0, mismatch: 0, nelabot: 0, details: [] },
    renderer: {},
  };

  for (const entry of map.uiCopyApply) {
    if (entry.verdict === "NELABOT") {
      const actual = String(getByPath(uiObj, entry.key) ?? "");
      report.ui.nelabot++;
      report.ui.details.push({ id: entry.id, key: entry.key, status: "OWNER_NELABOT_RETAINED", actual });
      continue;
    }

    if (entry.verdict !== "LABOT") continue;

    report.ui.requested++;
    const actual = String(getByPath(uiObj, entry.key) ?? "");
    const expectedCurrent = entry.current;

    if (actual !== expectedCurrent) {
      report.ui.mismatch++;
      report.ui.details.push({
        id: entry.id,
        key: entry.key,
        status: "CURRENT_VALUE_MISMATCH",
        actual,
        expectedCurrent,
      });
      continue;
    }

    if (!setByPath(uiObj, entry.key, entry.ownerNew)) {
      report.ui.mismatch++;
      report.ui.details.push({
        id: entry.id,
        key: entry.key,
        status: "TARGET_MISSING",
        actual,
      });
      continue;
    }

    report.ui.applied++;
    report.ui.details.push({
      id: entry.id,
      key: entry.key,
      status: "APPLIED",
      from: expectedCurrent,
      to: entry.ownerNew,
    });
  }

  writeUiStrings(CS_UI_PRIMARY, uiObj);
  writeUiStrings(CS_UI_WWW, uiObj);

  const uebungStillUsed = checkUebungStillUsed(
    uiObj,
    path.join(ROOT, "data", "cs", "courseLessons.js"),
  );

  for (const r of map.rendererApply) {
    if (r.id === "R3" && !uebungStillUsed) {
      report.renderer.R3 = {
        status: "R3_NOT_REQUIRED",
        reason: "Übung / Cvičení not present in production after UI apply",
      };
      continue;
    }

    const file = path.join(ROOT, r.file);
    const result = addToRegistrySet(file, r.registry, r.add);
    const mirror = path.join(ROOT, r.mirror);
    addToRegistrySet(mirror, r.registry, r.add);

    report.renderer[r.id] = {
      status: result.applied ? "APPLIED" : "ALREADY_PRESENT",
      registry: r.registry,
      add: r.add,
      ...(r.id === "R3" ? { precondition: "R3_APPLIED", reason: "Übung / Cvičení still used in production" } : {}),
    };
  }

  const primaryWwwCs = fs.readFileSync(CS_UI_PRIMARY, "utf8") === fs.readFileSync(CS_UI_WWW, "utf8");
  const primaryWwwUi = fs.readFileSync(UI_PRIMARY, "utf8") === fs.readFileSync(UI_WWW, "utf8");

  report.sync = { csUi: primaryWwwCs, uiJs: primaryWwwUi };

  console.log(JSON.stringify(report, null, 2));

  if (report.ui.mismatch > 0) {
    process.exit(1);
  }
}

main();
