#!/usr/bin/env node
"use strict";
/**
 * Retention checks for ES-DE A1+A2 final linguistic regression.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./audit-common");
const { getAt } = require("./da-a1-owner-path");

const FOREIGN_DECISIONS = path.join(
  ROOT,
  "reports/es-de-a1-a2-foreign-remnants-owner-decisions-final.json",
);
const MISSING_10_JSON = path.join(ROOT, "scripts/data/es-a1-missing-10-study-repairs.json");

const LEGACY_ROW_RE =
  /^\s*\d+\s+`(ES-A1A2-LUNA-\d+)`\s+`([^`]+)`\s+`([^`]+)`\s+`([^`]+)`\s+`([^`]+)`\s+\*\*LABOT\*\*/;
const TABLE_ROW_RE =
  /^\|\s*\d+\s*\|\s*`(ES-A1A2-LUNA-\d+)`\s*\|\s*`([^`]+)`\s*\|\s*`([^`]+)`\s*\|\s*`([^`]+)`\s*\|\s*`([^`]+)`\s*\|\s*\*\*LABOT\*\*\s*\|/;

function loadWords(rel, globalKey) {
  const code = fs.readFileSync(path.join(ROOT, rel), "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window[globalKey];
}

function findEntry(words, cardId, prefix) {
  let entry = words.find((e) => e.study?.id === cardId);
  if (entry) return entry;
  const idxMatch = cardId.match(/-(\d+)$/);
  if (idxMatch && words[parseInt(idxMatch[1], 10)]) return words[parseInt(idxMatch[1], 10)];
  const deGuess = cardId.replace(new RegExp(`^${prefix}-`), "").replace(/-study.*$/i, "").replace(/-\d+$/, "");
  return (
    words.find((e) => e.de === deGuess) ||
    words.find((e) => e.de?.toLowerCase() === deGuess.toLowerCase()) ||
    null
  );
}

function resolveEntry(wordsByLevel, cardId) {
  if (cardId.startsWith("a2-")) {
    const entry = findEntry(wordsByLevel.a2, cardId, "a2");
    return { level: "a2", entry };
  }
  if (cardId.startsWith("a1-")) {
    const entry = findEntry(wordsByLevel.a1, cardId, "a1");
    return { level: "a1", entry };
  }
  for (const level of ["a2", "a1"]) {
    const entry = findEntry(wordsByLevel[level], cardId, level);
    if (entry) return { level, entry };
  }
  return { level: null, entry: null };
}

function readCurrent(entry, field) {
  if (field === "lv") return entry.lv;
  if (field === "study.tip.text") {
    const tip = entry.study?.tip;
    if (!tip) return undefined;
    if (typeof tip === "string") return tip;
    if (Array.isArray(tip)) return undefined;
    return tip.text;
  }
  return getAt(entry, field);
}

function parseOwnerRows(filePath) {
  const md = fs.readFileSync(filePath, "utf8");
  const rows = [];
  for (const line of md.split("\n")) {
    let m = line.match(TABLE_ROW_RE);
    if (!m) m = line.match(LEGACY_ROW_RE);
    if (!m) continue;
    rows.push({
      auditId: m[1],
      cardId: m[2],
      field: m[3] === "esText" || m[3] === "esMain" ? "lv" : m[3],
      ownerNew: m[5],
    });
  }
  return rows;
}

function discoverLunaOwnerSources() {
  const reports = path.join(ROOT, "reports");
  const numbered = fs
    .readdirSync(reports)
    .filter((name) => /^es-de-a1-a2-owner-decisions-master-\d+-\d+\.md$/.test(name))
    .sort((a, b) => parseInt(a.match(/master-(\d+)/)[1], 10) - parseInt(b.match(/master-(\d+)/)[1], 10))
    .map((name) => path.join(reports, name));
  const remaining = path.join(reports, "es-de-a1-a2-owner-decisions-master-remaining-101.md");
  return fs.existsSync(remaining) ? [...numbered, remaining] : numbered;
}

function runRetention(wordsByLevel) {
  const sources = discoverLunaOwnerSources();
  const lunaRows = [];
  const byId = new Map();
  for (const src of sources) lunaRows.push(...parseOwnerRows(src));
  for (const row of lunaRows) byId.set(row.auditId, row);
  const lunaOwner = [...byId.values()];

  let lunaOk = 0;
  const lunaFail = [];
  for (const row of lunaOwner) {
    const { entry } = resolveEntry(wordsByLevel, row.cardId);
    if (!entry) {
      lunaFail.push({ ...row, reason: "CARD_NOT_FOUND" });
      continue;
    }
    const actual = readCurrent(entry, row.field);
    if (String(actual) === String(row.ownerNew)) lunaOk += 1;
    else lunaFail.push({ ...row, actual, reason: "MISMATCH" });
  }

  const foreign = JSON.parse(fs.readFileSync(FOREIGN_DECISIONS, "utf8"));
  let foreignLabotOk = 0;
  let foreignNelabotOk = 0;
  const foreignFail = [];
  for (const item of foreign.items) {
    const { entry } = resolveEntry(wordsByLevel, item.cardId);
    if (!entry) {
      foreignFail.push({ id: item.id, reason: "CARD_NOT_FOUND" });
      continue;
    }
    const actual = readCurrent(entry, item.field);
    if (item.status === "LABOT") {
      if (item.action === "REMOVE") {
        const parentField = item.field.replace(/\[\d+\]$/, "");
        const parent = getAt(entry, parentField);
        if (Array.isArray(parent) && !parent.includes(item.current)) foreignLabotOk += 1;
        else foreignFail.push({ id: item.id, reason: "REMOVE_NOT_APPLIED" });
      } else if (String(actual) === String(item.new)) foreignLabotOk += 1;
      else foreignFail.push({ id: item.id, reason: "MISMATCH", actual, expected: item.new });
    } else if (item.status === "NELABOT") {
      if (String(actual) === String(item.current)) foreignNelabotOk += 1;
      else foreignFail.push({ id: item.id, reason: "NELABOT_CHANGED", actual, expected: item.current });
    }
  }

  const missing10 = JSON.parse(fs.readFileSync(MISSING_10_JSON, "utf8"));
  let study10Ok = 0;
  const study10Fail = [];
  for (const item of missing10) {
    const entry = wordsByLevel.a1.find((e) => e.de === item.de && e.study?.id === item.study.id);
    if (!entry) {
      study10Fail.push({ de: item.de, id: item.study.id, reason: "MISSING" });
      continue;
    }
    if (entry.study.translation === item.study.translation) study10Ok += 1;
    else study10Fail.push({ de: item.de, reason: "TRANSLATION_MISMATCH" });
  }

  const related = foreign.items.find((i) => i.id === "ES-A1A2-FOREIGN-RELATED-0001");
  const sein = findEntry(wordsByLevel.a1, "a1-sein", "a1");
  const seinPurple = sein ? getAt(sein, "study.sectionAccents.tip.left.purple") : null;
  const seinOk =
    JSON.stringify(seinPurple) === JSON.stringify(["yo soy/estoy", "tú eres/estás"]);

  return {
    luna1208: { ok: lunaOk, expected: 1208, fail: lunaFail },
    foreignLabot: { ok: foreignLabotOk, expected: 537, fail: foreignFail.filter((f) => !f.id?.includes("NELABOT")) },
    foreignNelabot: { ok: foreignNelabotOk, expected: 37, fail: foreignFail },
    study10: { ok: study10Ok, expected: 10, fail: study10Fail },
    seinTipPurple: { ok: seinOk, actual: seinPurple },
    related0001: related
      ? String(getAt(sein, related.field)) === related.new
      : false,
    pass:
      lunaOk === 1208 &&
      foreignLabotOk === 537 &&
      foreignNelabotOk === 37 &&
      study10Ok === 10 &&
      seinOk,
  };
}

module.exports = { runRetention, loadWords, findEntry, readCurrent, resolveEntry };
