#!/usr/bin/env node
"use strict";
/**
 * ES-DE A1+A2 foreign remnants (LV + IT) OWNER source extraction (READ-ONLY).
 * Usage: node scripts/build-es-a1-a2-foreign-remnants-owner-source.js
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");
const { ROOT, isSyncedWithWww } = require("./lib/audit-common");
const { getAt } = require("./lib/da-a1-owner-path");

const OUT_JSON = path.join(ROOT, "reports/es-de-a1-a2-foreign-remnants-owner-source.json");
const OUT_MD = path.join(ROOT, "reports/es-de-a1-a2-foreign-remnants-owner-source-summary.md");
const LV_SOURCE = path.join(ROOT, "reports/es-de-a1-a2-lv-remnants-owner-source.json");
const REPO = "sandrisbrikmanis-rgb/de-lv-app";
const PR = 664;
const BRANCH = "cursor/es-de-a1-a2-owner-apply-001-200-3141";

const LV_ONLY = /[āēīūģķļņĀĒĪŪĢĶĻŅ]/;
const LV_WORDS =
  /latvijsk\w*|latvijski\w*|latviešu|vācu|vāciski|apmeklējums|apciemojums|tāpēc|peldēt|maksāt|Berlīnē|\bjūs\b|\bjums\b|\bjūsu\b|neesmu|sapratis|gribēju|vecvecākus|palīdzu|redzu|stātu|man jā|tev jā|mums jā|\brīsi\b|mācēt|\bprast\b|\blūdzu\b|\blūgums\b|Man ir|Es esmu|Es gribu|Es redzu|Es palīdzu|nāc iekšā|paliec|aiziet|mājās|skolā|darbā/gi;
const IT_WORDS =
  /\b(per favore|grazie|buongiorno|buonasera|ciao|prego|scusi|scusa|dove|quando|perché|perche|anche|molto|poco|essere|avere|fare|dire|andare|venire|stare|dare|sapere|volere|dovere|potere|parlare|mangiare|bere|dormire|lavorare|studiare|italiano|italiana)\b/gi;

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

function classifyRemnant(text) {
  if (!text || typeof text !== "string" || !text.trim()) return null;
  const hits = [];
  LV_WORDS.lastIndex = 0;
  const lvDiacritics = LV_ONLY.test(text);
  const lvWords = LV_WORDS.test(text);
  if (lvDiacritics || lvWords) {
    hits.push({
      category: "LV_REMNANT",
      reason: [
        lvDiacritics ? "Latvian diacritics (ā, ē, ī, ū, ģ, ķ, ļ, ņ)" : null,
        lvWords ? "Latvian lexical pattern match" : null,
      ]
        .filter(Boolean)
        .join("; "),
    });
  }
  IT_WORDS.lastIndex = 0;
  if (IT_WORDS.test(text) && !/\bespañol\b/i.test(text)) {
    hits.push({
      category: "IT_REMNANT",
      reason: "Italian lexical pattern match",
    });
  }
  return hits.length ? hits : null;
}

function extractLvFragments(text) {
  const fragments = new Set();
  if (!text || typeof text !== "string") return [];
  const diacriticWord = /[^\s,.;:!?()[\]{}–—\-/]+[āēīūģķļņĀĒĪŪĢĶĻŅ][^\s,.;:!?()[\]{}–—\-/]*/g;
  let m;
  while ((m = diacriticWord.exec(text))) fragments.add(m[0]);
  LV_WORDS.lastIndex = 0;
  while ((m = LV_WORDS.exec(text))) fragments.add(m[0]);
  return [...fragments];
}

function extractItFragments(text) {
  const fragments = new Set();
  if (!text || typeof text !== "string") return [];
  IT_WORDS.lastIndex = 0;
  let m;
  while ((m = IT_WORDS.exec(text))) {
    if (!/\bespañol\b/i.test(text)) fragments.add(m[0]);
  }
  return [...fragments];
}

function extractFragments(text, categories) {
  const out = new Set();
  if (categories.includes("LV_REMNANT")) for (const f of extractLvFragments(text)) out.add(f);
  if (categories.includes("IT_REMNANT")) for (const f of extractItFragments(text)) out.add(f);
  return [...out].sort((a, b) => a.localeCompare(b));
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
        const hits = classifyRemnant(text);
        if (!hits) return;
        for (const hit of hits) {
          raw.push({
            level: level.toUpperCase(),
            sourceFile: rel,
            cardId,
            de: entry.de,
            deArticle: entry.de_article || null,
            dePlural: entry.de_plural || null,
            field: ctx.path,
            currentSnapshot: text,
            category: hit.category,
            collectorReason: hit.reason,
            cardIndex: i,
            levelRank: level === "a1" ? 0 : 1,
          });
        }
      },
      { path: "", parentKey: "", inDe: false },
    );
  }
  return raw;
}

function loadLvOriginalIdMap() {
  const map = new Map();
  if (!fs.existsSync(LV_SOURCE)) return map;
  const data = JSON.parse(fs.readFileSync(LV_SOURCE, "utf8"));
  for (const item of data.items || []) {
    map.set(`${item.level}|${item.cardId}|${item.field}`, item.id);
  }
  return map;
}

function dedupeFindings(raw, wordsByLevel, lvOriginalMap) {
  const map = new Map();
  let itSeq = 0;

  for (const row of raw) {
    const key = `${row.level}|${row.cardId}|${row.field}`;
    if (!map.has(key)) {
      const level = row.level.toLowerCase();
      const words = wordsByLevel[level];
      const entry = words[row.cardIndex];
      map.set(key, {
        ...row,
        _entry: entry,
        categories: new Set(),
        reasons: new Set(),
        matchedFragments: new Set(),
        rawHits: 0,
        originalIds: new Set(),
      });
    }
    const item = map.get(key);
    item.rawHits += 1;
    item.categories.add(row.category);
    item.reasons.add(row.collectorReason);

    if (row.category === "LV_REMNANT") {
      const orig = lvOriginalMap.get(key);
      item.originalIds.add(orig || `LV-UNMAPPED-${key}`);
    } else {
      itSeq += 1;
      item.originalIds.add(`ES-A1A2-ITREM-${String(itSeq).padStart(4, "0")}`);
    }

    const frags =
      row.category === "LV_REMNANT"
        ? extractLvFragments(row.currentSnapshot)
        : extractItFragments(row.currentSnapshot);
    for (const f of frags) item.matchedFragments.add(f);
  }

  return [...map.values()].map((item) => {
    const entry = item._entry;
    const current = getAt(entry, item.field);
    const currentStr = current === undefined ? item.currentSnapshot : current;
    const categories = [...item.categories].sort();
    const textForFrags = typeof currentStr === "string" ? currentStr : JSON.stringify(currentStr);
    const uniqueFragments = extractFragments(textForFrags, categories);
    for (const f of item.matchedFragments) if (!uniqueFragments.includes(f)) uniqueFragments.push(f);
    uniqueFragments.sort((a, b) => a.localeCompare(b));

    const stale = item.field.includes("sectionAccents")
      ? uniqueFragments.some((f) => isStaleAccentFragment(entry, item.field, f))
      : null;

    const originalId =
      item.originalIds.size === 1 ? [...item.originalIds][0] : [...item.originalIds].sort().join(" + ");

    const out = {
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
        visibleEsText: item.field.includes("sectionAccents")
          ? resolveVisibleEsText(entry, item.field, currentStr)
          : undefined,
        accentFragmentStale: stale,
      },
      collectorReason: [...item.reasons].sort().join(" | "),
      ownerStatus: "PĀRSKATĪT",
      new: null,
      originalId,
      cardIndex: item.cardIndex,
      levelRank: item.levelRank,
      rawHits: item.rawHits,
    };

    if (categories.length === 1) out.category = categories[0];
    else out.categories = categories;

    return out;
  });
}

function validateOutput(payload, wordsByLevel) {
  const errors = [];
  const seen = new Set();
  let prevNum = 0;

  for (const item of payload.items) {
    const num = parseInt(item.id.replace("ES-A1A2-FOREIGN-", ""), 10);
    if (num !== prevNum + 1) errors.push(`ID gap: expected ${prevNum + 1}, got ${num}`);
    prevNum = num;

    for (const req of ["level", "cardId", "field", "current", "sourceFile", "de", "originalId"]) {
      if (item[req] === undefined || item[req] === null || item[req] === "") {
        errors.push(`${item.id}: missing ${req}`);
      }
    }

    const key = `${item.level}|${item.cardId}|${item.field}`;
    if (seen.has(key)) errors.push(`duplicate key ${key}`);
    seen.add(key);

    const level = item.level.toLowerCase();
    const words = wordsByLevel[level];
    let entry = words.find((e, i) => entryId(e, i, level) === item.cardId);
    if (!entry) entry = words.find((e) => e.de === item.de);
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

function buildSummary(payload, validation, mirrorPass, syntaxPass) {
  const items = payload.items;
  const a1 = items.filter((i) => i.level === "A1").length;
  const a2 = items.filter((i) => i.level === "A2").length;
  const comparison = items.filter((i) => i.context.section === "comparison").length;
  const explanation = items.filter((i) => i.context.section === "explanation").length;
  const important = items.filter((i) => i.context.section === "important").length;
  const sectionAccents = items.filter((i) => i.context.section === "sectionAccents").length;

  const verdict =
    validation.errors.length > 0
      ? "FAIL"
      : validation.unresolved > 0
        ? "BLOCKED"
        : "READY FOR OWNER TRANSLATION";

  const lines = [
    "# ES–DE A1+A2 — foreign remnants OWNER source summary",
    "",
    `**HEAD:** \`${payload.head}\``,
    `**Branch:** \`${payload.branch}\``,
    `**PR:** #${payload.pr}`,
    "",
    "## Kopsavilkums",
    "",
    "| Metrika | Rezultāts |",
    "|---------|----------:|",
    `| LV raw findings | **${payload.rawLvFindings}** |`,
    `| IT raw findings | **${payload.rawItFindings}** |`,
    `| Raw kopā | **${payload.rawTotalFindings}** |`,
    `| Unikāli OWNER objekti | **${payload.uniqueOwnerObjects}** |`,
    `| A1 | **${a1}** |`,
    `| A2 | **${a2}** |`,
    `| Comparison examples | **${comparison}** |`,
    `| Explanation | **${explanation}** |`,
    `| Important | **${important}** |`,
    `| sectionAccents | **${sectionAccents}** |`,
    `| LV/IT pārklāšanās | **${payload.overlapObjects}** |`,
    `| Neatrisināti | **${validation.unresolved}** |`,
    `| Production izmaiņas | **0** |`,
    `| DE izmaiņas | **0** |`,
    `| JSON parse | **${validation.jsonPass ? "PASS" : "FAIL"}** |`,
    `| Mirror | **${mirrorPass ? "PASS" : "FAIL"}** |`,
    `| Syntax | **${syntaxPass ? "PASS" : "FAIL"}** |`,
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

  execSync("node scripts/audit-es-a1-a2-collect.js", { cwd: ROOT, stdio: "pipe" });
  const audit = JSON.parse(fs.readFileSync(path.join(ROOT, "reports/temp/es-de-a1-a2-audit-data.json"), "utf8"));
  const rawLv = audit.levels.reduce(
    (s, l) => s + l.foreignRemnants.issues.filter((i) => i.category === "LV_REMNANT").length,
    0,
  );
  const rawIt = audit.levels.reduce(
    (s, l) => s + l.foreignRemnants.issues.filter((i) => i.category === "IT_REMNANT").length,
    0,
  );

  const a1 = loadWords("a1");
  const a2 = loadWords("a2");
  const wordsByLevel = { a1: a1.words, a2: a2.words };

  const rawAll = [
    ...collectRawFindings("a1", a1.words, a1.rel),
    ...collectRawFindings("a2", a2.words, a2.rel),
  ];

  const lvOriginalMap = loadLvOriginalIdMap();
  const deduped = dedupeFindings(rawAll, wordsByLevel, lvOriginalMap);

  deduped.sort((a, b) => {
    if (a.levelRank !== b.levelRank) return a.levelRank - b.levelRank;
    if (a.cardIndex !== b.cardIndex) return a.cardIndex - b.cardIndex;
    return a.field.localeCompare(b.field);
  });

  const overlapObjects = deduped.filter((r) => (r.categories?.length || 0) > 1).length;

  const items = deduped.map((row, i) => {
    const {
      cardIndex,
      levelRank,
      rawHits,
      categories: _cats,
      category,
      categories,
      ...rest
    } = row;
    const item = {
      id: `ES-A1A2-FOREIGN-${String(i + 1).padStart(4, "0")}`,
      ...rest,
    };
    if (category) item.category = category;
    if (categories) item.categories = categories;
    return item;
  });

  const payload = {
    repository: REPO,
    pr: PR,
    branch: BRANCH,
    head,
    productionFilesChanged: 0,
    rawLvFindings: rawLv,
    rawItFindings: rawIt,
    rawTotalFindings: rawLv + rawIt,
    uniqueOwnerObjects: items.length,
    overlapObjects,
    items,
  };

  let jsonPass = true;
  try {
    JSON.parse(JSON.stringify(payload));
  } catch {
    jsonPass = false;
  }

  const errors = validateOutput(payload, wordsByLevel);
  const unresolved = Math.max(0, payload.rawTotalFindings - rawAll.length + (rawAll.length - items.length));
  // unresolved = raw total not mapped to unique objects
  const actualUnresolved = Math.max(0, payload.rawTotalFindings - deduped.reduce((s, r) => s + r.rawHits, 0) + (rawAll.length - items.length));
  const unresolvedCount = payload.rawTotalFindings === items.length + overlapObjects ? 0 : payload.rawTotalFindings - items.length;

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

  const validation = { errors, unresolved: unresolvedCount, jsonPass };
  const { lines, verdict } = buildSummary(payload, validation, mirrorPass, syntaxPass);

  fs.writeFileSync(OUT_JSON, JSON.stringify(payload, null, 2) + "\n");
  fs.writeFileSync(OUT_MD, lines);

  console.log(
    JSON.stringify(
      {
        head,
        rawLv,
        rawIt,
        rawTotal: rawLv + rawIt,
        uniqueOwnerObjects: items.length,
        overlapObjects,
        validationErrors: errors.length,
        unresolved: unresolvedCount,
        mirrorPass,
        syntaxPass,
        verdict,
        outJson: OUT_JSON,
      },
      null,
      2,
    ),
  );

  if (verdict !== "READY FOR OWNER TRANSLATION") process.exit(1);
}

main();
