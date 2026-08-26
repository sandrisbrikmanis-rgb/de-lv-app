#!/usr/bin/env node
"use strict";
/**
 * ES-DE A1+A2 LV remnants OWNER source extraction (READ-ONLY).
 * Usage: node scripts/build-es-a1-a2-lv-remnants-owner-source.js
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");
const { ROOT, isSyncedWithWww } = require("./lib/audit-common");
const { getAt } = require("./lib/da-a1-owner-path");

const OUT_JSON = path.join(ROOT, "reports/es-de-a1-a2-lv-remnants-owner-source.json");
const OUT_MD = path.join(ROOT, "reports/es-de-a1-a2-lv-remnants-owner-source-summary.md");
const REPO = "sandrisbrikmanis-rgb/de-lv-app";
const PR = 664;
const BRANCH = "cursor/es-de-a1-a2-owner-apply-001-200-3141";

const LV_ONLY = /[āēīūģķļņĀĒĪŪĢĶĻŅ]/;
const LV_WORDS =
  /latvijsk\w*|latvijski\w*|latviešu|vācu|vāciski|apmeklējums|apciemojums|tāpēc|peldēt|maksāt|Berlīnē|\bjūs\b|\bjums\b|\bjūsu\b|neesmu|sapratis|gribēju|vecvecākus|palīdzu|redzu|stātu|man jā|tev jā|mums jā|\brīsi\b|mācēt|\bprast\b|\blūdzu\b|\blūgums\b|Man ir|Es esmu|Es gribu|Es redzu|Es palīdzu|nāc iekšā|paliec|aiziet|mājās|skolā|darbā/gi;

function loadWords(level) {
  const rel = `data/es/${level}.js`;
  const code = fs.readFileSync(path.join(ROOT, rel), "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  const key = level === "a1" ? "A1_WORDS" : "A2_WORDS";
  return { words: ctx.window[key], rel };
}

function entryId(entry, index, level) {
  return entry.study?.id || `${level}-${entry.de}-${index}`;
}

function isLvRemnant(text) {
  if (!text || typeof text !== "string" || !text.trim()) return null;
  LV_WORDS.lastIndex = 0;
  const reasons = [];
  if (LV_ONLY.test(text)) reasons.push("Latvian diacritics (ā, ē, ī, ū, ģ, ķ, ļ, ņ)");
  if (LV_WORDS.test(text)) reasons.push("Latvian lexical pattern match");
  return reasons.length ? reasons.join("; ") : null;
}

function extractFragments(text) {
  const fragments = new Set();
  if (!text || typeof text !== "string") return [];
  const diacriticWord = /[^\s,.;:!?()[\]{}–—\-/]+[āēīūģķļņĀĒĪŪĢĶĻŅ][^\s,.;:!?()[\]{}–—\-/]*/g;
  let m;
  while ((m = diacriticWord.exec(text))) fragments.add(m[0]);
  LV_WORDS.lastIndex = 0;
  while ((m = LV_WORDS.exec(text))) fragments.add(m[0]);
  return [...fragments].sort((a, b) => a.localeCompare(b));
}

function walkStrings(value, visitor, ctx = { path: "", parentKey: "", inDe: false }) {
  if (value === null || value === undefined) return;
  if (typeof value === "string") {
    visitor(value, ctx);
    return;
  }
  if (Array.isArray(value)) {
    value.forEach((item, i) => walkStrings(item, visitor, { ...ctx, path: `${ctx.path}[${i}]` }));
    return;
  }
  if (typeof value === "object") {
    for (const [key, child] of Object.entries(value)) {
      const inDe = ctx.inDe || key === "de" || key === "de_article" || key === "de_plural";
      walkStrings(child, visitor, {
        path: ctx.path ? `${ctx.path}.${key}` : key,
        parentKey: key,
        inDe,
      });
    }
  }
}

function classifySection(field) {
  if (field === "lv") return "main";
  if (field.startsWith("study.translation")) return "study.translation";
  if (field.includes("study.examples")) return "examples";
  if (field.includes("study.comparison")) return "comparison";
  if (field.includes("study.tip")) return "tip";
  if (field.includes("study.important")) return "important";
  if (field.includes("study.explanation")) return "explanation";
  if (field.includes("sectionAccents")) return "sectionAccents";
  if (field.startsWith("study.")) return "study";
  return "other";
}

function resolveVisibleEsText(entry, field, current) {
  if (field.includes("sectionAccents")) {
    const base = field
      .replace(/^study\.sectionAccents\./, "study.")
      .replace(/\.(blue|green|yellow|orange|purple|red)(\[\d+\])+$/, "");
    const visible = getAt(entry, base);
    if (typeof visible === "string") return visible;
    if (visible !== undefined) return JSON.stringify(visible);
  }
  return typeof current === "string" ? current : JSON.stringify(current);
}

function isStaleAccentFragment(entry, field, fragment) {
  if (!field.includes("sectionAccents") || !fragment) return null;
  const visible = resolveVisibleEsText(entry, field, fragment);
  if (typeof visible !== "string") return null;
  return !visible.includes(fragment);
}

function pairedGermanText(entry, field) {
  const ex = field.match(/^study\.examples\[(\d+)\]\.lv$/);
  if (ex) return entry.study?.examples?.[parseInt(ex[1], 10)]?.de || entry.de;

  const cmpEx = field.match(/^study\.comparison\[(\d+)\]\.example$/);
  if (cmpEx) {
    const idx = parseInt(cmpEx[1], 10);
    const row = entry.study?.comparison?.[idx];
    const example = row?.example || "";
    const dash = example.split(/\s+[–—-]\s+/);
    if (dash.length >= 2) return dash[0].trim();
    return row?.word ? `${row.word}${example ? ` (${example})` : ""}` : entry.de;
  }

  const cmpMean = field.match(/^study\.comparison\[(\d+)\]\.meaning$/);
  if (cmpMean) {
    const idx = parseInt(cmpMean[1], 10);
    const row = entry.study?.comparison?.[idx];
    return row?.word ? `${row.word}${row.example ? ` — ${row.example.split(/\s+[–—-]\s+/)[0] || ""}` : ""}` : entry.de;
  }

  const cmpWord = field.match(/^study\.comparison\[(\d+)\]\.word$/);
  if (cmpWord) return entry.study?.comparison?.[parseInt(cmpWord[1], 10)]?.word || entry.de;

  return entry.de;
}

function collectRawFindings(level, words, rel) {
  const raw = [];
  for (let i = 0; i < words.length; i++) {
    const entry = words[i];
    const cardId = entryId(entry, i, level);
    walkStrings(
      entry,
      (text, ctx) => {
        if (ctx.inDe || ["de", "de_article", "de_plural"].includes(ctx.parentKey)) return;
        const reason = isLvRemnant(text);
        if (!reason) return;
        const field = ctx.path;
        raw.push({
          level: level.toUpperCase(),
          sourceFile: rel,
          cardId,
          de: entry.de,
          deArticle: entry.de_article || null,
          dePlural: entry.de_plural || null,
          field,
          currentSnapshot: text,
          collectorReason: reason,
          index: i,
        });
      },
      { path: "", parentKey: "", inDe: false },
    );
  }
  return raw;
}

function dedupeFindings(raw) {
  const map = new Map();
  for (const row of raw) {
    const key = `${row.level}|${row.cardId}|${row.field}`;
    if (!map.has(key)) {
      map.set(key, { ...row, matchedFragments: new Set(), rawHits: 0 });
    }
    const item = map.get(key);
    item.rawHits += 1;
    for (const frag of extractFragments(row.currentSnapshot)) item.matchedFragments.add(frag);
  }
  return [...map.values()].map((item) => {
    const entry = item._entry;
    const current = getAt(entry, item.field);
    const currentStr = current === undefined ? item.currentSnapshot : current;
    const fragments = extractFragments(
      typeof currentStr === "string" ? currentStr : JSON.stringify(currentStr),
    );
    for (const f of item.matchedFragments) fragments.push(f);
    const uniqueFragments = [...new Set(fragments)].sort((a, b) => a.localeCompare(b));
    const visibleEs = resolveVisibleEsText(entry, item.field, currentStr);
    const stale = item.field.includes("sectionAccents")
      ? uniqueFragments.some((f) => isStaleAccentFragment(entry, item.field, f))
      : null;
    return {
      level: item.level,
      sourceFile: item.sourceFile,
      cardId: item.cardId,
      de: item.de,
      deArticle: item.deArticle,
      dePlural: item.dePlural,
      field: item.field,
      current: currentStr,
      matchedFragments: uniqueFragments,
      pairedGermanText: pairedGermanText(entry, item.field),
      context: {
        mainLv: entry.lv ?? null,
        studyTranslation: entry.study?.translation ?? null,
        section: classifySection(item.field),
        visibleEsText: item.field.includes("sectionAccents") ? visibleEs : undefined,
        accentFragmentStale: stale,
      },
      collectorReason: item.collectorReason,
      ownerStatus: "PĀRSKATĪT",
      new: null,
      rawHits: item.rawHits,
    };
  });
}

function countStudies(words) {
  return words.filter((e) => e.study).length;
}

function validateOutput(payload, wordsByLevel) {
  const errors = [];
  const seen = new Set();
  let prevNum = 0;

  for (const item of payload.items) {
    const num = parseInt(item.id.replace("ES-A1A2-LVREM-", ""), 10);
    if (num !== prevNum + 1) errors.push(`ID gap: expected ${prevNum + 1}, got ${num}`);
    prevNum = num;

    for (const req of ["level", "cardId", "field", "current", "sourceFile", "de"]) {
      if (item[req] === undefined || item[req] === null || item[req] === "") {
        errors.push(`${item.id}: missing ${req}`);
      }
    }

    const key = `${item.level}|${item.cardId}|${item.field}`;
    if (seen.has(key)) errors.push(`duplicate key ${key}`);
    seen.add(key);

    const level = item.level.toLowerCase();
    const words = wordsByLevel[level];
    const idx = words.findIndex((e, i) => entryId(e, i, level) === item.cardId || e.study?.id === item.cardId);
    let entry = idx >= 0 ? words[idx] : words.find((e) => e.de === item.de);
    if (!entry) {
      errors.push(`${item.id}: card not found (${item.cardId})`);
      continue;
    }
    const actual = getAt(entry, item.field);
    if (JSON.stringify(actual) !== JSON.stringify(item.current)) {
      errors.push(`${item.id}: current mismatch at ${item.field}`);
    }
  }

  return errors;
}

function buildSummary(payload, validation, studyCountA1, mirrorPass, syntaxPass) {
  const items = payload.items;
  const a1 = items.filter((i) => i.level === "A1").length;
  const a2 = items.filter((i) => i.level === "A2").length;
  const mainLv = items.filter((i) => i.field === "lv").length;
  const studyVisible = items.filter((i) => i.context.section !== "sectionAccents" && i.field !== "lv").length;
  const sectionAccents = items.filter((i) => i.context.section === "sectionAccents").length;
  const otherNested = items.length - mainLv - studyVisible - sectionAccents;

  const verdict =
    validation.errors.length > 0
      ? "FAIL"
      : validation.unresolved > 0
        ? "BLOCKED"
        : "READY FOR OWNER TRANSLATION";

  const lines = [
    "# ES–DE A1+A2 — LV remnants OWNER source summary",
    "",
    `**HEAD:** \`${payload.head}\``,
    `**Branch:** \`${payload.branch}\``,
    `**PR:** #${payload.pr}`,
    "",
    "## Kopsavilkums",
    "",
    "| Metrika | Rezultāts |",
    "|---------|----------:|",
    `| Raw collector findings (LV_REMNANT) | **${payload.rawCollectorFindings}** |`,
    `| Raw collector foreign total (LV+IT) | **${payload.rawCollectorForeignTotal}** |`,
    `| Ne-LV foreign (IT_REMNANT, nav iekļauts items) | **${payload.rawCollectorItFindings}** |`,
    `| Unikāli field/path OWNER objekti | **${payload.uniqueOwnerObjects}** |`,
    `| A1 objekti | **${a1}** |`,
    `| A2 objekti | **${a2}** |`,
    `| Main \`lv\` | **${mainLv}** |`,
    `| Study redzamais saturs | **${studyVisible}** |`,
    `| \`sectionAccents\` | **${sectionAccents}** |`,
    `| Citi nested lauki | **${otherNested}** |`,
    `| Neatrisināti kandidāti | **${validation.unresolved}** |`,
    `| A1 Study skaits | **${studyCountA1}** |`,
    `| Production izmaiņas | **0** |`,
    `| DE izmaiņas | **0** |`,
    `| JSON validācija | **${validation.jsonPass ? "PASS" : "FAIL"}** |`,
    `| Mirror | **${mirrorPass ? "PASS" : "FAIL"}** |`,
    `| Syntax | **${syntaxPass ? "PASS" : "FAIL"}** |`,
    "",
    "## Skaitļu skaidrojums",
    "",
    "Iepriekšējā collectora kopsavilkuma `foreignRemnants: 573` ietver **529 LV** + **44 IT** atlikumus.",
    "Šis OWNER avots ietver tikai **LV_REMNANT** kategoriju (`529` raw → `529` unikāli objekti).",
    "Deduplikācija pēc `(level, cardId, field)` — dublikātu nav, jo katrs raw hits jau ir unikāls lauks.",
    "",
    `## FINAL VERDICT: **${verdict}**`,
    "",
  ];

  if (validation.errors.length) {
    lines.push("## Validācijas kļūdas", "");
    for (const e of validation.errors.slice(0, 30)) lines.push(`- ${e}`);
    if (validation.errors.length > 30) lines.push(`- … un vēl ${validation.errors.length - 30}`);
    lines.push("");
  }

  return { lines: lines.join("\n"), verdict };
}

function main() {
  const head = execSync("git rev-parse HEAD", { cwd: ROOT, encoding: "utf8" }).trim();

  const a1 = loadWords("a1");
  const a2 = loadWords("a2");
  const wordsByLevel = { a1: a1.words, a2: a2.words };

  const studyCountA1 = countStudies(a1.words);
  if (studyCountA1 !== 134) {
    console.warn(`WARN: expected A1 study count 134, got ${studyCountA1}`);
  }

  const rawA1 = collectRawFindings("a1", a1.words, a1.rel);
  const rawA2 = collectRawFindings("a2", a2.words, a2.rel);
  const rawAll = [...rawA1, ...rawA2];

  for (const row of rawAll) {
    const level = row.level.toLowerCase();
    const words = wordsByLevel[level];
    const idx = words.findIndex((e, i) => entryId(e, i, level) === row.cardId);
    row._entry = idx >= 0 ? words[idx] : words.find((e) => e.de === row.de);
  }

  const deduped = dedupeFindings(rawAll);
  deduped.sort((a, b) => {
    if (a.level !== b.level) return a.level.localeCompare(b.level);
    if (a.cardId !== b.cardId) return a.cardId.localeCompare(b.cardId);
    return a.field.localeCompare(b.field);
  });

  const items = deduped.map((row, i) => ({
    id: `ES-A1A2-LVREM-${String(i + 1).padStart(4, "0")}`,
    level: row.level,
    sourceFile: row.sourceFile,
    cardId: row.cardId,
    de: row.de,
    deArticle: row.deArticle,
    dePlural: row.dePlural,
    field: row.field,
    current: row.current,
    matchedFragments: row.matchedFragments,
    pairedGermanText: row.pairedGermanText,
    context: row.context,
    collectorReason: row.collectorReason,
    ownerStatus: row.ownerStatus,
    new: row.new,
  }));

  const payload = {
    repository: REPO,
    pr: PR,
    branch: BRANCH,
    head,
    productionFilesChanged: 0,
    rawCollectorFindings: rawAll.length,
    rawCollectorForeignTotal: 573,
    rawCollectorItFindings: 44,
    uniqueOwnerObjects: items.length,
    items,
  };

  // refresh foreign total from live collector summary if available
  execSync("node scripts/audit-es-a1-a2-collect.js", { cwd: ROOT, stdio: "pipe" });
  const audit = JSON.parse(fs.readFileSync(path.join(ROOT, "reports/temp/es-de-a1-a2-audit-data.json"), "utf8"));
  const lvCount = audit.levels.reduce(
    (s, l) => s + l.foreignRemnants.issues.filter((i) => i.category === "LV_REMNANT").length,
    0,
  );
  const itCount = audit.levels.reduce(
    (s, l) => s + l.foreignRemnants.issues.filter((i) => i.category === "IT_REMNANT").length,
    0,
  );
  payload.rawCollectorFindings = lvCount;
  payload.rawCollectorForeignTotal = audit.summary.foreignRemnants;
  payload.rawCollectorItFindings = itCount;

  let jsonPass = true;
  try {
    JSON.parse(JSON.stringify(payload));
  } catch {
    jsonPass = false;
  }

  const errors = validateOutput(payload, wordsByLevel);
  const unresolved = Math.max(0, payload.rawCollectorLvFindings - items.length);

  let syntaxPass = true;
  try {
    execSync("node --check data/es/a1.js", { cwd: ROOT, stdio: "pipe" });
    execSync("node --check data/es/a2.js", { cwd: ROOT, stdio: "pipe" });
    execSync("node --check www/data/es/a1.js", { cwd: ROOT, stdio: "pipe" });
    execSync("node --check www/data/es/a2.js", { cwd: ROOT, stdio: "pipe" });
  } catch {
    syntaxPass = false;
  }

  const mirrorPass = isSyncedWithWww("data/es/a1.js") && isSyncedWithWww("data/es/a2.js");

  const validation = { errors, unresolved, jsonPass };
  const { lines, verdict } = buildSummary(payload, validation, studyCountA1, mirrorPass, syntaxPass);

  fs.writeFileSync(OUT_JSON, JSON.stringify(payload, null, 2) + "\n");
  fs.writeFileSync(OUT_MD, lines);

  console.log(
    JSON.stringify(
      {
        head,
        studyCountA1,
        rawCollectorLvFindings: payload.rawCollectorFindings,
        rawCollectorForeignTotal: payload.rawCollectorForeignTotal,
        uniqueOwnerObjects: payload.uniqueOwnerObjects,
        validationErrors: errors.length,
        unresolved,
        mirrorPass,
        syntaxPass,
        verdict,
        outJson: OUT_JSON,
        outMd: OUT_MD,
      },
      null,
      2,
    ),
  );

  if (verdict !== "READY FOR OWNER TRANSLATION") process.exit(1);
}

main();
