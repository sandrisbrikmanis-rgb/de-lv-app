#!/usr/bin/env node
"use strict";
const fs = require("fs");
const { loadCsv } = require("./lib/g2-a1-phase3/batch-001-csv");
const { getAt, setAt } = require("./lib/da-a1-owner-path");

const CYR = /[\u0400-\u04FF]/;
const MK = /[љњџќѓ]/i;
const BG_WORDS = /\b(Разберете|Германия|Баща|Мога|Познайте|Запомнете|Отговаря|Използва|съществителн|мъжки|женски|обем|тих|дълъг|дълго|към|чака|спиране|задържане|почивка|ваканция|разбирам|разбирате)\b/i;
const MK_WORDS = /\b(Доаѓа|Дојдовме|празникот|докторот|Имам|Имате|Направих|гладни)\b/i;
const SL_WORDS = /\b(Prosimo|utihnite|miza|zelo|čakal|dolga|trajanje|Ves dan|Ranjen|Tudi|Če|Kdaj|Atceries|nekaj|pusti|za seboj)\b/i;
const EN_WORDS = /\b(Shop|English|the store)\b/i;
const LV_LEAK = /\b(Atceries|man ir|Latvijisk|latvijski|latvijska)\b/i;

function parseMaybeJson(v) {
  if (typeof v !== "string") return v;
  const t = v.trim();
  if ((t.startsWith("[") && t.endsWith("]")) || (t.startsWith("{") && t.endsWith("}"))) {
    try { return JSON.parse(t); } catch { return v; }
  }
  return v;
}

function flatToNested(flat) {
  const out = { lv: flat.lv };
  const study = {};
  for (const [k, v] of Object.entries(flat)) {
    if (k === "lv") continue;
    if (k.startsWith("study.")) {
      const sub = k.slice(6);
      if (sub.includes("[") || sub.includes(".")) continue;
      study[sub] = parseMaybeJson(v);
    }
  }
  if (Object.keys(study).length) out.study = study;
  return out;
}

function applyPatches(nested, ownerNewStr) {
  const out = JSON.parse(JSON.stringify(nested));
  if (!ownerNewStr) return out;
  const patches = JSON.parse(ownerNewStr);
  for (const [path, value] of Object.entries(patches)) {
    if (path === "lv") { out.lv = value; continue; }
    if (!out.study && path.startsWith("study.")) out.study = {};
    if (path.startsWith("study.")) {
      const field = path.slice(6);
      if (!setAt(out.study, field, value)) {
        // ensure parent arrays exist
        const m = field.match(/^(\w+)\[(\d+)\]/);
        if (m) {
          const arrName = m[1];
          if (!Array.isArray(out.study[arrName])) out.study[arrName] = [];
          setAt(out.study, field, value);
        }
      }
    }
  }
  return out;
}

function collectTargetStrings(obj, prefix = "", acc = []) {
  if (obj == null) return acc;
  if (typeof obj === "string") {
    if (prefix.endsWith(".de") || prefix.endsWith(".word")) return acc;
    acc.push({ path: prefix, text: obj });
    return acc;
  }
  if (Array.isArray(obj)) {
    obj.forEach((v, i) => collectTargetStrings(v, `${prefix}[${i}]`, acc));
    return acc;
  }
  if (typeof obj === "object") {
    for (const [k, v] of Object.entries(obj)) {
      if (k === "de" || k === "word") continue;
      collectTargetStrings(v, prefix ? `${prefix}.${k}` : k, acc);
    }
  }
  return acc;
}

function flags(text) {
  const f = [];
  if (CYR.test(text)) f.push("CYRILLIC");
  if (MK.test(text)) f.push("MK_CHARS");
  if (BG_WORDS.test(text)) f.push("BG");
  if (MK_WORDS.test(text)) f.push("MK");
  if (SL_WORDS.test(text)) f.push("SL");
  if (EN_WORDS.test(text)) f.push("EN");
  if (LV_LEAK.test(text)) f.push("LV_LEAK");
  // Bulgarian chars in Latin script context
  if (/[ъщ]/i.test(text) && !/[čćžšđ]/i.test(text)) f.push("BG_CHARS");
  return f;
}

const { rows } = loadCsv("reports/g2-a1-owner/batches-pending/LRB-022-input.csv");
const decisions = JSON.parse(fs.readFileSync("scripts/data/g2-a1-owner-pending/LRB-022-decisions.json", "utf8"));
const issues = [];

for (const row of rows) {
  const d = decisions[row.finding_stable_ids];
  if (d.owner_decision !== "LABOT") continue;
  if (!row.finding_stable_ids.startsWith("g2/a1/hr|")) continue;
  let flat;
  try {
    flat = JSON.parse(row.production_current || "{}");
  } catch {
    flat = { lv: row.production_current || "" };
  }
  const nested = flatToNested(flat);
  const merged = applyPatches(nested, d.owner_new);
  const strings = collectTargetStrings(merged);
  const bad = [];
  for (const s of strings) {
    const f = flags(s.text);
    const real = f.filter((x) => x !== "LV_LEAK");
  if (real.length) bad.push({ path: s.path, text: s.text.slice(0, 100), flags: real });
  }
  if (bad.length) {
    const card = row.finding_stable_ids.split("|")[1];
    issues.push({ card, count: bad.length, bad });
  }
}

const out = {
  labotHr: rows.filter((r) => decisions[r.finding_stable_ids]?.owner_decision === "LABOT" && r.finding_stable_ids.startsWith("g2/a1/hr|")).length,
  issueCards: issues.length,
  issues,
};
fs.writeFileSync("reports/g2-a1-owner/batches-reviewed/LRB-022-residual-audit-temp.json", JSON.stringify(out, null, 2));
console.log(JSON.stringify({ issueCards: issues.length, cards: issues.map((i) => i.card) }, null, 2));
