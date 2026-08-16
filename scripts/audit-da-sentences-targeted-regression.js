#!/usr/bin/env node
"use strict";
/**
 * DA–DE Sätze targeted regression audit (READ-ONLY) after PR #555 OWNER repair.
 * Usage: node scripts/audit-da-sentences-targeted-regression.js [--skip-luna]
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const { findEntry } = require("./lib/da-sentences-owner-path");
const {
  parseSignedDecisions,
  dedupeLabot,
  countByStatus,
  uniqueByCard,
  normalizeText,
} = require("./lib/da-sentences-signed-decisions");

const NON_ERROR_CATEGORIES = new Set([
  "SOURCE_DE_ISSUE",
  "NEEDS_SOURCE_REVIEW",
  "STYLE_ONLY",
  "FALSE_POSITIVE",
  "ACCEPTABLE_VARIANT",
]);

function classifyFindings(findings) {
  const severity = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0, NEEDS_SOURCE_REVIEW: 0 };
  const nonError = { FALSE_POSITIVE: 0, STYLE_ONLY: 0, ACCEPTABLE_VARIANT: 0, SOURCE_DE_ISSUE: 0 };
  const qualityFindings = [];
  for (const f of findings) {
    if (f.status === "PASS") continue;
    const cat = String(f.category || "").toUpperCase();
    if (NON_ERROR_CATEGORIES.has(cat)) {
      nonError[cat] = (nonError[cat] || 0) + 1;
      continue;
    }
    const sev = String(f.severity || "MEDIUM").toUpperCase();
    if (severity[sev] !== undefined) severity[sev] += 1;
    else severity.MEDIUM += 1;
    qualityFindings.push(f);
  }
  return { severity, nonError, qualityFindings };
}

const DA_FILE = path.join(ROOT, "data/da/sentences.js");
const WWW_FILE = path.join(ROOT, "www/data/da/sentences.js");
const DE_FILE = path.join(ROOT, "data/sentences.js");
const REPORT = path.join(ROOT, "reports/da-sentences-targeted-regression-audit.md");
const JSON_OUT = path.join(ROOT, "reports/temp/da-sentences-targeted-regression-audit.json");
const LUNA_DIR = path.join(ROOT, "reports/temp/da-sentences-regression-luna");
const REPAIR_COMMIT = process.env.DA_SENTENCES_REPAIR_COMMIT || "455c7cc8";
const BEFORE_REF = process.env.DA_SENTENCES_BEFORE || "/tmp/da-sentences-before.js";
const SKIP_LUNA = process.argv.includes("--skip-luna");
const EXPECTED = 796;

const LV_DIAC = /[āēīūģķļņĀĒĪŪĢĶĻŅ]/;
const LV_WORDS =
  /\b(Viņš|Viņa|Reizēm|gadījuma|svētku|vēlētāj|līst|latviešu|vācu|Galvenā doma|Atceries|Izmanto|Nepareizi|Pareizi|mēs|jūs|jums|jūsu|neesmu|skatī|redzēt|Berlīn|Spānij|kā tev|mums jā|tev jā|Brīvdienās|Bērniem|apmeklēj|apciemoj|tāpēc|peldēt|maksāt|vecvecāk|palīdzu|stāstu|man jā|rīsi|mācēt|prast|braukt|vest|aizvest|Autobuss|Vilciens|atslēgu|pieteikumu|aizbraucu|iesniedzu|grāmatu|mājās|tagad|tūlīt|atiet|prom|rīt|sākam|Plūdi|plūdi|izpostīja|mājas|uzsver|termiņu|Ko tad|Vai tad|No turienes|Divtik|Jo vairāk|liecina par lietu)\b/i;
const EN_PATTERNS =
  /\b(Translation:|TODO|TBD|instead of|Change this|Ready\. Next|Look at the|you are|meaning:|Context-specific Danish)\b/i;
const CS_PATTERNS = /\b(přelož|použij|doplň|věta|sloveso|podstatné)\b/i;
const PL_PATTERNS = /\b(przetłumacz|użyj|uzupełnij|czasownik|rzeczownik)\b/i;
const BS_PATTERNS = /\b(prijevod|koristite|dopunite|prevedi|glagol|imenica)\b/i;
const ET_LT_PATTERNS = /\b(tõlgi|kasuta|sõna|tegusõna|daiktavard|dažnai|žodis|daiktavardis)\b/i;
const RU_UA_PATTERNS = /\b(перевед|использ|слово|глагол|часто|переклад|використ)\b/i;
const ZERO_WIDTH = /[\u200B-\u200D\uFEFF]|​​/;
const MOJIBAKE = /â€|Ã.|Ô./;
const PLACEHOLDER = /(\bTODO\b|\bTBD\b|^\.\.\.$|```|Translation:|Tulkojums:|COPY-ONLY apply|\(Context-specific)/i;

function loadSentences(filePath) {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.SENTENCE_ENTRIES;
}

function sentenceId(index) {
  return `sentence-${index}`;
}

function ensureBefore() {
  if (!fs.existsSync(BEFORE_REF)) {
    execSync(`git show ${REPAIR_COMMIT}^:data/da/sentences.js > ${BEFORE_REF}`, { cwd: ROOT, stdio: "pipe" });
  }
}

function walkDiff(before, after, prefix = "", out = []) {
  if (before === after) return out;
  if (typeof before !== typeof after || before == null || after == null) {
    out.push({ path: prefix, before, after });
    return out;
  }
  if (typeof before === "string" || typeof before === "number" || typeof before === "boolean") {
    if (before !== after) out.push({ path: prefix, before, after });
    return out;
  }
  if (Array.isArray(before) && Array.isArray(after)) {
    const len = Math.max(before.length, after.length);
    for (let i = 0; i < len; i++) walkDiff(before[i], after[i], `${prefix}[${i}]`, out);
    return out;
  }
  if (typeof before === "object" && typeof after === "object") {
    const keys = new Set([...Object.keys(before || {}), ...Object.keys(after || {})]);
    for (const k of keys) walkDiff(before[k], after[k], prefix ? `${prefix}.${k}` : k, out);
  }
  return out;
}

function classifyForeign(text) {
  if (typeof text !== "string") return [];
  const reasons = [];
  if (LV_DIAC.test(text)) reasons.push("LV_DIAC");
  if (LV_WORDS.test(text)) reasons.push("LV");
  if (EN_PATTERNS.test(text)) reasons.push("EN");
  if (CS_PATTERNS.test(text)) reasons.push("CS");
  if (PL_PATTERNS.test(text)) reasons.push("PL");
  if (BS_PATTERNS.test(text)) reasons.push("BS");
  if (ET_LT_PATTERNS.test(text)) reasons.push("ET_LT");
  if (RU_UA_PATTERNS.test(text)) reasons.push("RU_UA");
  if (ZERO_WIDTH.test(text)) reasons.push("ZERO_WIDTH");
  if (MOJIBAKE.test(text)) reasons.push("MOJIBAKE");
  if (PLACEHOLDER.test(text)) reasons.push("PLACEHOLDER");
  return reasons;
}

function ownerRiskPatterns(text) {
  const issues = [];
  if (typeof text !== "string" || !text.trim()) {
    issues.push("EMPTY_OR_INCOMPLETE");
    return issues;
  }
  if (/•/.test(text)) issues.push("MULTI_VARIANT_BULLET");
  if (/\s\/\s|\s\/[^/]|[^/]\/\s/.test(text)) issues.push("SLASH_VARIANT");
  if (/\(Context-specific/i.test(text)) issues.push("CONTEXT_PLACEHOLDER");
  if (/\bTODO\b|\bTBD\b|Translation:/i.test(text)) issues.push("PLACEHOLDER");
  if (/OWNER|auditor|PROPOSED_DA|Saglabāt CURRENT/i.test(text)) issues.push("OWNER_COMMENT");
  return issues;
}

function loadLunaFindings() {
  if (!fs.existsSync(LUNA_DIR)) return [];
  const files = fs
    .readdirSync(LUNA_DIR)
    .filter((f) => f.endsWith("-findings.json"))
    .sort();
  const all = [];
  for (const f of files) {
    const data = JSON.parse(fs.readFileSync(path.join(LUNA_DIR, f), "utf8"));
    for (const item of data.findings || []) {
      if (String(item.status || "").toUpperCase() === "PASS") continue;
      all.push(item);
    }
  }
  return all;
}

function exportLunaBatches(labotRows, after) {
  fs.mkdirSync(LUNA_DIR, { recursive: true });
  const batchSize = 43;
  const batches = [];
  for (let i = 0; i < labotRows.length; i += batchSize) {
    const slice = labotRows.slice(i, i + batchSize);
    const label = `batch-${String(Math.floor(i / batchSize) + 1).padStart(2, "0")}`;
    const payload = {
      auditType: "da_sentences_targeted_regression",
      batch: label,
      instructions:
        "Audit production DA (lv) vs DE after OWNER repair. OWNER NEW is authoritative expected value; flag real linguistic/semantic issues even if production matches OWNER NEW.",
      sentences: slice.map((row) => {
        const entry = findEntry(after, row.cardId);
        return {
          cardId: row.cardId,
          de: entry?.de || row.deContext,
          daCurrent: entry?.lv || "",
          ownerNew: row.ownerNew,
        };
      }),
    };
    const outPath = path.join(LUNA_DIR, `${label}.json`);
    fs.writeFileSync(outPath, JSON.stringify(payload, null, 2));
    batches.push(outPath);
  }
  return batches;
}

function main() {
  ensureBefore();
  execSync("node scripts/build-da-sentences-owner-apply-map.js", { cwd: ROOT, stdio: "pipe" });

  const signedRows = parseSignedDecisions();
  const statusCounts = countByStatus(signedRows);
  const labotRows = dedupeLabot(signedRows);
  const nelabotCards = uniqueByCard(signedRows, "NELABOT");
  const needsReviewCards = uniqueByCard(signedRows, "NEEDS_SOURCE_REVIEW");

  const before = loadSentences(BEFORE_REF);
  const after = loadSentences(DA_FILE);
  const deRef = loadSentences(DE_FILE);

  const findings = [];
  let fid = 0;
  function add(severity, cardId, field, problem, detail = {}) {
    fid++;
    findings.push({
      id: `DA-SENT-REG-${String(fid).padStart(4, "0")}`,
      severity,
      cardId,
      field,
      problem,
      deCurrent: detail.deCurrent || "",
      daCurrent: detail.daCurrent || detail.current || "",
      recommended: detail.recommended || "",
      ...detail,
    });
  }

  const ownerMatch = {
    EXACT_MATCH: 0,
    MISMATCH: 0,
    MISSING_SENTENCE: 0,
    MISSING_FIELD: 0,
  };

  const syntaxPass = (() => {
    try {
      execSync("node --check data/da/sentences.js", { cwd: ROOT, stdio: "pipe" });
      execSync("node --check www/data/da/sentences.js", { cwd: ROOT, stdio: "pipe" });
      return true;
    } catch {
      return false;
    }
  })();
  if (!syntaxPass) add("CRITICAL", "STRUCT", "syntax", "JS syntax check failed");

  const mirrorPass = fs.readFileSync(DA_FILE).equals(fs.readFileSync(WWW_FILE));
  if (!mirrorPass) add("CRITICAL", "MIRROR", "data↔www", "Production mirror not identical");

  const countPass = after.length === EXPECTED && deRef.length === EXPECTED;
  if (!countPass) {
    add("CRITICAL", "STRUCT", "count", `Expected ${EXPECTED}, got DA=${after.length}, DE=${deRef.length}`);
  }

  let idOrderPass = true;
  let deChanges = 0;
  for (let i = 0; i < after.length; i++) {
    for (const f of ["de", "level"]) {
      if (JSON.stringify(before[i]?.[f]) !== JSON.stringify(after[i]?.[f])) deChanges++;
    }
    if (before[i]?.de !== deRef[i]?.de) {
      idOrderPass = false;
      add("CRITICAL", sentenceId(i), "de.order", "DE order mismatch vs etalon", { index: i });
    }
  }
  if (deChanges > 0) add("CRITICAL", "ALL", "de.fields", `${deChanges} DE field changes detected`, { deChanges });

  const allowedKeys = new Set(labotRows.map((r) => `${r.cardId}|lv`));

  for (const row of labotRows) {
    const entry = findEntry(after, row.cardId);
    if (!entry) {
      ownerMatch.MISSING_SENTENCE++;
      add("HIGH", row.cardId, "lv", "OWNER LABOT target sentence not found", {
        deCurrent: row.deContext,
        daCurrent: "",
        recommended: row.ownerNew,
      });
      continue;
    }
    if (entry.lv === undefined) {
      ownerMatch.MISSING_FIELD++;
      add("HIGH", row.cardId, "lv", "OWNER LABOT target field missing", {
        deCurrent: entry.de,
        recommended: row.ownerNew,
      });
      continue;
    }
    if (normalizeText(entry.lv) === normalizeText(row.ownerNew)) {
      ownerMatch.EXACT_MATCH++;
    } else {
      ownerMatch.MISMATCH++;
      add("HIGH", row.cardId, "lv", "OWNER NEW mismatch vs production", {
        deCurrent: entry.de,
        daCurrent: entry.lv,
        recommended: row.ownerNew,
      });
    }
  }

  const sentence541 = findEntry(after, "sentence-541");
  if (sentence541) {
    const expected541 = "Tag for dig!";
    if (normalizeText(sentence541.lv) !== normalizeText(expected541)) {
      add("HIGH", "sentence-541", "lv", "sentence-541 special case: expected OWNER NEW after repair", {
        deCurrent: sentence541.de,
        daCurrent: sentence541.lv,
        recommended: expected541,
        note: "Pre-repair DA_CURRENT audit typo corrected; OWNER NEW authoritative",
      });
    }
  }

  let unauthorizedNelabot = 0;
  for (const cardId of nelabotCards) {
    const entry = findEntry(after, cardId);
    const beforeEntry = findEntry(before, cardId);
    if (!entry || !beforeEntry) continue;
    if (normalizeText(beforeEntry.lv) !== normalizeText(entry.lv)) {
      unauthorizedNelabot++;
      const labotConflict = labotRows.find((r) => r.cardId === cardId);
      add("HIGH", cardId, "lv", "Unauthorized change on NELABOT sentence", {
        deCurrent: entry.de,
        daCurrent: entry.lv,
        recommended: beforeEntry.lv,
        before: beforeEntry.lv,
        ownerConflict: labotConflict
          ? `Same card also has signed LABOT → production matches LABOT OWNER NEW: "${labotConflict.ownerNew}"`
          : undefined,
      });
    }
  }

  let unauthorizedNeedsReview = 0;
  for (const cardId of needsReviewCards) {
    const entry = findEntry(after, cardId);
    const beforeEntry = findEntry(before, cardId);
    if (!entry || !beforeEntry) continue;
    if (normalizeText(beforeEntry.lv) !== normalizeText(entry.lv)) {
      unauthorizedNeedsReview++;
      add("HIGH", cardId, "lv", "Unauthorized change on NEEDS_SOURCE_REVIEW sentence", {
        deCurrent: entry.de,
        daCurrent: entry.lv,
        recommended: beforeEntry.lv,
        before: beforeEntry.lv,
      });
    }
  }

  const changedSentences = new Map();
  const changedFields = new Set();
  let productionLvStrict = 0;
  let productionLvNormalized = 0;
  let unexpectedChanges = 0;
  let noOpLabot = 0;
  let zeroWidthOnly = 0;

  for (let i = 0; i < after.length; i++) {
    const cardId = sentenceId(i);
    const strictChanged = before[i].lv !== after[i].lv;
    const normChanged = normalizeText(before[i].lv) !== normalizeText(after[i].lv);
    if (strictChanged) productionLvStrict++;
    if (normChanged) productionLvNormalized++;

    const diffs = walkDiff(before[i], after[i]);
    if (!diffs.length) continue;
    changedSentences.set(cardId, { index: i, de: after[i].de, diffs, entry: after[i] });

    for (const d of diffs) {
      if (d.path === "de" || d.path === "level") continue;
      changedFields.add(`${cardId}|${d.path}`);
      if (!allowedKeys.has(`${cardId}|lv`)) {
        unexpectedChanges++;
        add("HIGH", cardId, d.path, "UNEXPECTED_CHANGE outside OWNER LABOT scope", {
          deCurrent: after[i].de,
          daCurrent: String(d.after).slice(0, 160),
          recommended: String(d.before).slice(0, 160),
          before: String(d.before).slice(0, 160),
        });
      }
    }
  }

  for (const row of labotRows) {
    const idx = parseInt(row.cardId.replace("sentence-", ""), 10);
    const strictSame = before[idx].lv === after[idx].lv;
    const normSame = normalizeText(before[idx].lv) === normalizeText(after[idx].lv);
    if (normSame && normalizeText(after[idx].lv) === normalizeText(row.ownerNew)) noOpLabot++;
    if (strictSame !== normSame && normSame) zeroWidthOnly++;
  }

  const remnantCounts = {
    LV: 0,
    EN: 0,
    OTHER: 0,
    MIXED: 0,
    PLACEHOLDER: 0,
    ZERO_WIDTH: 0,
    MOJIBAKE: 0,
    OWNER_RISK: 0,
  };
  const falsePositives = [];

  for (const row of labotRows) {
    const entry = findEntry(after, row.cardId);
    if (!entry) continue;
    const lv = entry.lv;
    const de = entry.de;

    for (const risk of ownerRiskPatterns(lv)) {
      remnantCounts.OWNER_RISK++;
      add("MEDIUM", row.cardId, "lv", `OWNER risk artifact in production: ${risk}`, {
        deCurrent: de,
        daCurrent: lv,
        recommended: "Single natural Danish sentence without placeholders/multi-variant chains",
      });
    }

    const reasons = classifyForeign(lv);
    if (reasons.includes("LV_DIAC") || reasons.includes("LV")) {
      remnantCounts.LV++;
      add("HIGH", row.cardId, "lv", `LV remnant: ${reasons.join(", ")}`, {
        deCurrent: de,
        daCurrent: lv,
        recommended: "Replace with natural Danish",
      });
    } else if (reasons.includes("EN")) {
      remnantCounts.EN++;
      add("HIGH", row.cardId, "lv", `EN remnant: ${reasons.join(", ")}`, {
        deCurrent: de,
        daCurrent: lv,
        recommended: "Replace with natural Danish",
      });
    } else if (reasons.some((r) => ["CS", "PL", "BS", "ET_LT", "RU_UA"].includes(r))) {
      remnantCounts.OTHER++;
      add("HIGH", row.cardId, "lv", `Foreign remnant: ${reasons.join(", ")}`, {
        deCurrent: de,
        daCurrent: lv,
        recommended: "Replace with natural Danish",
      });
    } else if (reasons.includes("PLACEHOLDER") || reasons.includes("MOJIBAKE")) {
      remnantCounts.PLACEHOLDER++;
      add("HIGH", row.cardId, "lv", `Placeholder/corruption: ${reasons.join(", ")}`, {
        deCurrent: de,
        daCurrent: lv,
        recommended: "Remove placeholder/corruption",
      });
    } else if (reasons.includes("ZERO_WIDTH")) {
      remnantCounts.ZERO_WIDTH++;
      add("MEDIUM", row.cardId, "lv", "Zero-width artifact", {
        deCurrent: de,
        daCurrent: lv,
        recommended: "Strip zero-width characters",
      });
    }
  }

  const lunaBatches = exportLunaBatches(labotRows, after);
  const lunaBatchFiles = fs.existsSync(LUNA_DIR)
    ? fs.readdirSync(LUNA_DIR).filter((f) => f.endsWith("-findings.json"))
    : [];
  let lunaFindings = [];
  if (!SKIP_LUNA) {
    lunaFindings = loadLunaFindings();
  }
  const lunaLoaded = lunaBatchFiles.length >= lunaBatches.length && lunaBatches.length > 0;
  const lunaClass = classifyFindings(lunaFindings);
  for (const f of lunaClass.qualityFindings) {
    add(f.severity || "MEDIUM", f.cardId, f.field || "lv", f.reason || f.problem || "Luna linguistic issue", {
      deCurrent: f.de || "",
      daCurrent: f.daCurrent || "",
      recommended: f.proposedDa || "",
      source: "luna",
    });
  }
  for (const [cat, count] of Object.entries(lunaClass.nonError)) {
    if (count > 0) falsePositives.push({ note: `${cat}: ${count} Luna non-error verdicts`, count });
  }

  const bySev = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0, FALSE_POSITIVE: falsePositives.length };
  findings.forEach((f) => {
    bySev[f.severity] = (bySev[f.severity] || 0) + 1;
  });

  const uniqueRepairsExpected = 213;
  const uniqueRepairsFound = labotRows.length;
  const reconstructionNote =
    productionLvNormalized + noOpLabot === uniqueRepairsExpected
      ? "Reconstruction reconciles: normalized lv changes + no-op LABOT = 213."
      : `Reconstruction delta: normalizedChanges=${productionLvNormalized}, noOpLabot=${noOpLabot}, zeroWidthOnly=${zeroWidthOnly}, strictChanges=${productionLvStrict}.`;

  const pass =
    statusCounts.LABOT === 228 &&
    uniqueRepairsFound === uniqueRepairsExpected &&
    ownerMatch.EXACT_MATCH === uniqueRepairsExpected &&
    ownerMatch.MISMATCH === 0 &&
    ownerMatch.MISSING_SENTENCE === 0 &&
    ownerMatch.MISSING_FIELD === 0 &&
    unauthorizedNelabot === 0 &&
    unauthorizedNeedsReview === 0 &&
    bySev.CRITICAL === 0 &&
    bySev.HIGH === 0 &&
    bySev.MEDIUM === 0 &&
    remnantCounts.LV === 0 &&
    remnantCounts.EN === 0 &&
    remnantCounts.OTHER === 0 &&
    remnantCounts.MIXED === 0 &&
    remnantCounts.PLACEHOLDER === 0 &&
    remnantCounts.ZERO_WIDTH === 0 &&
    remnantCounts.MOJIBAKE === 0 &&
    remnantCounts.OWNER_RISK === 0 &&
    deChanges === 0 &&
    unexpectedChanges === 0 &&
    syntaxPass &&
    mirrorPass &&
    idOrderPass &&
    countPass &&
    (SKIP_LUNA || lunaLoaded);

  const verdict = pass
    ? "**DA–DE SENTENCES TARGETED REGRESSION AUDIT — PASS**"
    : "**DA–DE SENTENCES TARGETED REGRESSION AUDIT — FAIL**";

  const md = [
    "# DA–DE Sätze targeted regression audit (READ-ONLY)",
    "",
    `**Date:** ${new Date().toISOString().slice(0, 10)}`,
    "**Scope:** Production `data/da/sentences.js` after PR [#555](https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/555) OWNER signed repair",
    "**Auditor:** GPT-5.6 Luna (READ-ONLY targeted regression)",
    "**Authoritative source:** `reports/da-sentences-owner-decisions-signed.md`",
    "**Production changes during audit:** 0",
    "",
    "## Summary",
    "",
    "| Metric | Value |",
    "|--------|-------|",
    `| OWNER signed findings loaded | **${signedRows.length}** |`,
    `| LABOT findings loaded | **${statusCounts.LABOT}** |`,
    `| Unique OWNER repairs expected | **${uniqueRepairsExpected}** |`,
    `| Unique OWNER repairs found (dedup) | **${uniqueRepairsFound}** |`,
    `| EXACT_MATCH | **${ownerMatch.EXACT_MATCH}/${uniqueRepairsExpected}** |`,
    `| MISMATCH | **${ownerMatch.MISMATCH}** |`,
    `| MISSING_SENTENCE | **${ownerMatch.MISSING_SENTENCE}** |`,
    `| MISSING_FIELD | **${ownerMatch.MISSING_FIELD}** |`,
    `| NELABOT checked (unique cards) | **${nelabotCards.length}** |`,
    `| Unauthorized NELABOT changes | **${unauthorizedNelabot}** |`,
    `| NEEDS_SOURCE_REVIEW checked | **${needsReviewCards.length}** |`,
    `| Unauthorized NEEDS_SOURCE_REVIEW changes | **${unauthorizedNeedsReview}** |`,
    `| Changed sentences (strict lv) | **${productionLvStrict}** |`,
    `| Changed sentences (normalized lv) | **${productionLvNormalized}** |`,
    `| No-op LABOT (pre-existing OWNER NEW) | **${noOpLabot}** |`,
    `| Zero-width-only LABOT | **${zeroWidthOnly}** |`,
    `| Changed sentences audited (LABOT scope) | **${labotRows.length}** |`,
    `| Changed fields audited | **${changedFields.size}** |`,
    `| CRITICAL | **${bySev.CRITICAL}** |`,
    `| HIGH | **${bySev.HIGH}** |`,
    `| MEDIUM | **${bySev.MEDIUM}** |`,
    `| LOW | **${bySev.LOW}** |`,
    `| FALSE_POSITIVE | **${falsePositives.length}** |`,
    `| LV remnants | **${remnantCounts.LV}** |`,
    `| EN remnants | **${remnantCounts.EN}** |`,
    `| Other foreign remnants | **${remnantCounts.OTHER}** |`,
    `| Mixed-language remnants | **${remnantCounts.MIXED}** |`,
    `| Placeholders | **${remnantCounts.PLACEHOLDER}** |`,
    `| Zero-width | **${remnantCounts.ZERO_WIDTH}** |`,
    `| Mojibake | **${remnantCounts.MOJIBAKE}** |`,
    `| OWNER risk artifacts | **${remnantCounts.OWNER_RISK}** |`,
    `| DE changed sentences | **${deChanges > 0 ? "FAIL" : 0}** |`,
    `| DE changed fields | **${deChanges}** |`,
    `| Unexpected production changes | **${unexpectedChanges}** |`,
    `| Sentence count | **${after.length}/${EXPECTED}** |`,
    `| Syntax | **${syntaxPass ? "PASS" : "FAIL"}** |`,
    `| ID/order | **${idOrderPass ? "PASS" : "FAIL"}** |`,
    `| Structure | **${countPass ? "PASS" : "FAIL"}** |`,
    `| Mirror sync | **${mirrorPass ? "PASS" : "FAIL"}** |`,
    `| Luna batches exported | **${lunaBatches.length}** |`,
    `| Luna quality findings | **${lunaClass.qualityFindings.length}** |`,
    "",
    "### Verdict",
    "",
    verdict,
    "",
    "## Reconstruction note",
    "",
    reconstructionNote,
    "",
    "## sentence-541 special case",
    "",
    "Pre-repair production DA was `Spis så meget som du vil!` (audit typo omitted *som*). Signed `DA_CURRENT` corrected before apply. Authoritative expected production value: **`Tag for dig!`**. Current production:",
    "",
    `\`${sentence541 ? sentence541.lv : "NOT FOUND"}\``,
    "",
  ];

  const realFindings = findings.filter((f) => !["FALSE_POSITIVE"].includes(f.severity));
  if (realFindings.length) {
    md.push("## Findings", "");
    for (const f of realFindings) {
      md.push(`### ${f.id} [${f.severity}]`, "");
      md.push(`- **Sentence/Card ID:** \`${f.cardId}\``);
      md.push(`- **Field:** \`${f.field}\``);
      if (f.deCurrent) md.push(`- **DE_CURRENT:** ${f.deCurrent}`);
      md.push(`- **DA_CURRENT:** ${f.daCurrent || "—"}`);
      md.push(`- **Problem:** ${f.problem}`);
      if (f.recommended) md.push(`- **Recommended correction:** ${f.recommended}`);
      md.push("");
    }
  } else {
    md.push("## Findings", "", "_No CRITICAL/HIGH/MEDIUM findings._", "");
  }

  if (!lunaLoaded && !SKIP_LUNA) {
    md.push(
      "## Luna linguistic audit",
      "",
      `_${lunaBatches.length} batch files exported to \`reports/temp/da-sentences-regression-luna/\`. Run GPT-5.6 Luna on each batch and save \`*-findings.json\`, then re-run this audit._`,
      ""
    );
  }

  md.push("## Next step", "");
  if (pass) {
    md.push("Repair scope closed for targeted regression gate.");
  } else {
    md.push("For each real finding: **finding → OWNER review → COPY-ONLY micro-repair → micro-regression**.");
  }

  fs.writeFileSync(REPORT, md.join("\n"));
  fs.mkdirSync(path.dirname(JSON_OUT), { recursive: true });
  fs.writeFileSync(
    JSON_OUT,
    JSON.stringify(
      {
        generatedAt: new Date().toISOString(),
        statusCounts,
        ownerMatch,
        uniqueRepairsExpected,
        uniqueRepairsFound,
        productionLvStrict,
        productionLvNormalized,
        noOpLabot,
        zeroWidthOnly,
        unauthorizedNelabot,
        unauthorizedNeedsReview,
        unexpectedChanges,
        deChanges,
        remnantCounts,
        bySev,
        lunaFindings: lunaFindings.length,
        pass,
        verdict: verdict.replace(/\*\*/g, ""),
      },
      null,
      2
    )
  );

  console.log(
    JSON.stringify(
      {
        ownerMatch,
        uniqueRepairsFound,
        bySev,
        remnantCounts,
        unauthorizedNelabot,
        unauthorizedNeedsReview,
        unexpectedChanges,
        deChanges,
        pass,
        verdict: verdict.replace(/\*\*/g, ""),
        report: REPORT,
      },
      null,
      2
    )
  );
  process.exit(pass ? 0 : 1);
}

main();
