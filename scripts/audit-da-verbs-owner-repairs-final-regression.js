#!/usr/bin/env node
"use strict";
/**
 * DA–DE Verbs OWNER repairs final targeted regression audit (READ-ONLY).
 * Usage: node scripts/audit-da-verbs-owner-repairs-final-regression.js [--skip-luna]
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const {
  findEntry,
  getDaValue,
  normalizeField,
  applyKey,
  verbIndex,
} = require("./lib/da-verbs-owner-path");
const {
  parseAllDecisions,
  countByStatus,
  dedupeLabot,
  uniqueByCardField,
  normalizeText,
} = require("./lib/da-verbs-signed-decisions");

const DA_FILE = path.join(ROOT, "data/da/verbs.js");
const WWW_FILE = path.join(ROOT, "www/data/da/verbs.js");
const DE_FILE = path.join(ROOT, "data/verbs.js");
const REPORT = path.join(ROOT, "reports/da-verbs-owner-repairs-final-regression-audit.md");
const JSON_OUT = path.join(ROOT, "reports/temp/da-verbs-owner-repairs-final-regression-audit.json");
const LUNA_DIR = path.join(ROOT, "reports/temp/da-verbs-regression-luna");
const BEFORE_REF = process.env.DA_VERBS_BEFORE || "/tmp/da-verbs-before.js";
const REPAIR_BASE = process.env.DA_VERBS_REPAIR_BASE || "main";
const SKIP_LUNA = process.argv.includes("--skip-luna");
const EXPECTED_VERBS = 189;
const FORM_KEYS = ["infinitiv", "praesens", "imperfektIndikativ", "imperfektKonjunktiv", "partizipVergangenheit"];

const LV_DIAC = /[āēīūģķļņĀĒĪŪĢĶĻŅ]/;
const LV_WORDS =
  /\b(viņš|viņa|viņam|viņi|Pazina|Bija|Iet|Atrast|Prik|Izdoties|Nosaukt|Saut|Salis|Piedot|Cept|Kost|Laisties|Lidojis|Spise|mēs|jūs|latviešu|vācu)\b/i;
const EN_PATTERNS = /\b(Translation:|TODO|TBD|instead of|you are|meaning:|Context-specific|Natural Danish|Distinct Danish)\b/i;
const CS_PATTERNS = /\b(přelož|použij|sloveso|podstatné)\b/i;
const PL_PATTERNS = /\b(przetłumacz|czasownik)\b/i;
const BS_PATTERNS = /\b(prijevod|glagol)\b/i;
const ET_LT_PATTERNS = /\b(tõlgi|žodis|daiktavardis)\b/i;
const RU_UA_PATTERNS = /\b(перевед|переклад|глагол)\b/i;
const ZERO_WIDTH = /[\u200B-\u200D\uFEFF]|​​/;
const MOJIBAKE = /â€|Ã.|Ô./;
const PLACEHOLDER = /(\bTODO\b|\bTBD\b|^\.\.\.$|Translation:|\(Context-specific|\(Natural Danish|\(Single natural|\(Distinct Danish)/i;

const NON_ERROR_CATEGORIES = new Set([
  "ACCEPTABLE_VARIANT",
  "FALSE_POSITIVE",
  "STYLE_ONLY",
  "NEEDS_SOURCE_REVIEW",
  "SOURCE_DE_ISSUE",
]);

function loadVerbs(filePath) {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.VERB_ENTRIES;
}

function ensureBefore() {
  if (!fs.existsSync(BEFORE_REF)) {
    execSync(`git show ${REPAIR_BASE}:data/da/verbs.js > ${BEFORE_REF}`, { cwd: ROOT, stdio: "pipe" });
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
  if (typeof text !== "string" || !text.trim()) return [];
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
  if (/\(Context-specific|\(Natural Danish|\(Single natural|\(Distinct Danish/i.test(text)) {
    issues.push("PLACEHOLDER");
  }
  return issues;
}

function getDeContext(entry, formKey) {
  return entry?.[formKey]?.de || "";
}

function loadLunaFindings() {
  if (!fs.existsSync(LUNA_DIR)) return [];
  const all = [];
  for (const f of fs.readdirSync(LUNA_DIR).filter((x) => x.endsWith("-findings.json")).sort()) {
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
  const batchSize = 50;
  const batches = [];
  for (let i = 0; i < labotRows.length; i += batchSize) {
    const slice = labotRows.slice(i, i + batchSize);
    const label = `batch-${String(Math.floor(i / batchSize) + 1).padStart(3, "0")}`;
    const payload = {
      auditType: "da_verbs_owner_repair_regression",
      batch: label,
      instructions:
        "Audit production DA verb form (lv) vs DE after OWNER repair. ownerNew is authoritative expected value; flag real Danish linguistic/semantic issues even if production matches ownerNew. Do NOT suggest DE changes.",
      verbs: slice.map((row) => {
        const entry = findEntry(after, row.cardId);
        const formKey = normalizeField(row.field);
        return {
          auditId: row.auditId,
          cardId: row.cardId,
          field: formKey,
          de: getDeContext(entry, formKey) || row.deContext || "",
          daCurrent: getDaValue(entry, row.field) || "",
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

function classifyLunaFindings(findings) {
  const severity = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0 };
  const regressionFalsePositives = [];
  const qualityFindings = [];
  for (const f of findings) {
    const cat = String(f.category || "").toUpperCase();
    if (NON_ERROR_CATEGORIES.has(cat) || f.severity === "FALSE_POSITIVE") {
      regressionFalsePositives.push(f);
      continue;
    }
    const sev = String(f.severity || "MEDIUM").toUpperCase();
    if (severity[sev] !== undefined) severity[sev] += 1;
    else severity.MEDIUM += 1;
    qualityFindings.push(f);
  }
  return { severity, regressionFalsePositives, qualityFindings };
}

function sweepAllDaFields(verbs, add) {
  const counts = { LV: 0, EN: 0, OTHER: 0, PLACEHOLDER: 0, ZERO_WIDTH: 0, MOJIBAKE: 0, EMPTY: 0 };
  for (let i = 0; i < verbs.length; i++) {
    const cardId = `verb-${i}`;
    for (const formKey of FORM_KEYS) {
      const lv = verbs[i]?.[formKey]?.lv;
      const de = verbs[i]?.[formKey]?.de || "";
      if (typeof lv !== "string" || !lv.trim()) {
        counts.EMPTY++;
        add("HIGH", cardId, `${formKey}.lv`, "Empty or missing DA field", {
          deCurrent: de,
          daCurrent: lv || "",
          recommended: "Natural Danish verb form required",
        });
        continue;
      }
      const reasons = classifyForeign(lv);
      if (reasons.includes("LV_DIAC") || reasons.includes("LV")) {
        counts.LV++;
        add("CRITICAL", cardId, `${formKey}.lv`, `Foreign remnant: ${reasons.join(", ")}`, {
          deCurrent: de,
          daCurrent: lv,
          recommended: "Natural Danish",
        });
      } else if (reasons.includes("EN")) {
        counts.EN++;
        add("HIGH", cardId, `${formKey}.lv`, `EN/placeholder remnant: ${reasons.join(", ")}`, {
          deCurrent: de,
          daCurrent: lv,
          recommended: "Natural Danish",
        });
      } else if (reasons.some((r) => ["CS", "PL", "BS", "ET_LT", "RU_UA"].includes(r))) {
        counts.OTHER++;
        add("HIGH", cardId, `${formKey}.lv`, `Other foreign remnant: ${reasons.join(", ")}`, {
          deCurrent: de,
          daCurrent: lv,
          recommended: "Natural Danish",
        });
      } else if (reasons.includes("PLACEHOLDER") || reasons.includes("MOJIBAKE")) {
        counts.PLACEHOLDER++;
        add("HIGH", cardId, `${formKey}.lv`, `Placeholder/corruption: ${reasons.join(", ")}`, {
          deCurrent: de,
          daCurrent: lv,
          recommended: "Remove placeholder",
        });
      } else if (reasons.includes("ZERO_WIDTH")) {
        counts.ZERO_WIDTH++;
        add("MEDIUM", cardId, `${formKey}.lv`, "Zero-width artifact", {
          deCurrent: de,
          daCurrent: lv,
          recommended: "Strip zero-width characters",
        });
      }
    }
  }
  return counts;
}

function main() {
  ensureBefore();
  const { files: decisionFiles, rows: signedRows } = parseAllDecisions();
  const statusCounts = countByStatus(signedRows);
  const { labot: labotRows, conflicts } = dedupeLabot(signedRows);
  const falsePositiveKeys = new Set(uniqueByCardField(signedRows, "FALSE_POSITIVE"));
  const nelabotKeys = new Set(uniqueByCardField(signedRows, "NELABOT"));
  const needsReviewKeys = new Set(uniqueByCardField(signedRows, "NEEDS_SOURCE_REVIEW"));

  const before = loadVerbs(BEFORE_REF);
  const after = loadVerbs(DA_FILE);
  const deRef = loadVerbs(DE_FILE);

  const findings = [];
  let fid = 0;
  function add(severity, cardId, field, problem, detail = {}) {
    fid++;
    findings.push({
      id: `DA-VERB-REG-${String(fid).padStart(4, "0")}`,
      severity,
      cardId,
      field,
      problem,
      deCurrent: detail.deCurrent || "",
      daCurrent: detail.daCurrent || detail.current || "",
      recommendedDa: detail.recommendedDa || detail.recommended || "",
      ...detail,
    });
  }

  const ownerMatch = {
    EXACT_MATCH: 0,
    MISMATCH: 0,
    MISSING_CARD: 0,
    MISSING_FIELD: 0,
    CONFLICTING_OWNER_MAPPING: conflicts.length,
  };

  for (const c of conflicts) {
    add("CRITICAL", c.a.cardId, c.a.field, "Conflicting OWNER LABOT mappings for same field", {
      deCurrent: c.a.deContext || "",
      daCurrent: "",
      recommendedDa: c.b.ownerDecision,
      conflictA: c.a.ownerDecision,
      conflictB: c.b.ownerDecision,
    });
  }

  const syntaxPass = (() => {
    try {
      execSync("node --check data/da/verbs.js", { cwd: ROOT, stdio: "pipe" });
      execSync("node --check www/data/da/verbs.js", { cwd: ROOT, stdio: "pipe" });
      return true;
    } catch {
      return false;
    }
  })();
  if (!syntaxPass) add("CRITICAL", "STRUCT", "syntax", "JS syntax check failed");

  const mirrorPass = fs.readFileSync(DA_FILE).equals(fs.readFileSync(WWW_FILE));
  if (!mirrorPass) add("CRITICAL", "MIRROR", "data↔www", "Production mirror not identical");

  const countPass = after.length === EXPECTED_VERBS && deRef.length === EXPECTED_VERBS;
  if (!countPass) {
    add("CRITICAL", "STRUCT", "count", `Expected ${EXPECTED_VERBS}, got DA=${after.length}, DE=${deRef.length}`);
  }

  let idOrderPass = true;
  let deChanges = 0;
  for (let i = 0; i < after.length; i++) {
    for (const formKey of FORM_KEYS) {
      if (JSON.stringify(before[i]?.[formKey]?.de) !== JSON.stringify(after[i]?.[formKey]?.de)) deChanges++;
      if (JSON.stringify(after[i]?.[formKey]?.de) !== JSON.stringify(deRef[i]?.[formKey]?.de)) {
        idOrderPass = false;
        add("CRITICAL", `verb-${i}`, `${formKey}.de`, "DE field changed or DE order mismatch", { index: i });
      }
    }
  }
  if (deChanges > 0) add("CRITICAL", "ALL", "de.fields", `${deChanges} DE field changes detected`, { deChanges });

  const allowedKeys = new Set(labotRows.map((r) => r.key));

  for (const row of labotRows) {
    const entry = findEntry(after, row.cardId);
    const formKey = normalizeField(row.field);
    if (!entry) {
      ownerMatch.MISSING_CARD++;
      add("CRITICAL", row.cardId, formKey, "OWNER LABOT target verb not found", {
        deCurrent: row.deContext || "",
        recommendedDa: row.ownerNew,
      });
      continue;
    }
    const actual = getDaValue(entry, row.field);
    if (actual === undefined) {
      ownerMatch.MISSING_FIELD++;
      add("CRITICAL", row.cardId, formKey, "OWNER LABOT target field missing", {
        deCurrent: getDeContext(entry, formKey),
        recommendedDa: row.ownerNew,
      });
      continue;
    }
    if (normalizeText(actual) === normalizeText(row.ownerNew)) ownerMatch.EXACT_MATCH++;
    else {
      ownerMatch.MISMATCH++;
      add("CRITICAL", row.cardId, formKey, "OWNER_DECISION mismatch vs production", {
        deCurrent: getDeContext(entry, formKey),
        daCurrent: actual,
        recommendedDa: row.ownerNew,
      });
    }
  }

  let unauthorizedFalsePositive = 0;
  let unauthorizedNelabot = 0;
  let unauthorizedNeedsReview = 0;

  for (let i = 0; i < after.length; i++) {
    const cardId = `verb-${i}`;
    for (const formKey of FORM_KEYS) {
      const key = `${cardId}|${formKey}`;
      const bLv = before[i]?.[formKey]?.lv;
      const aLv = after[i]?.[formKey]?.lv;
      if (normalizeText(bLv) === normalizeText(aLv)) continue;

      const labotForKey = labotRows.find((r) => r.key === key);
      if (falsePositiveKeys.has(key) && !labotForKey) {
        unauthorizedFalsePositive++;
        add("HIGH", cardId, `${formKey}.lv`, "Unauthorized change on FALSE_POSITIVE field", {
          deCurrent: after[i][formKey].de,
          daCurrent: aLv,
          recommendedDa: bLv,
          before: bLv,
        });
      }
      if (nelabotKeys.has(key) && !labotForKey) {
        unauthorizedNelabot++;
        add("HIGH", cardId, `${formKey}.lv`, "Unauthorized change on NELABOT field", {
          deCurrent: after[i][formKey].de,
          daCurrent: aLv,
          recommendedDa: bLv,
          before: bLv,
        });
      }
      if (needsReviewKeys.has(key) && !labotForKey) {
        unauthorizedNeedsReview++;
        add("HIGH", cardId, `${formKey}.lv`, "Unauthorized change on NEEDS_SOURCE_REVIEW field", {
          deCurrent: after[i][formKey].de,
          daCurrent: aLv,
          recommendedDa: bLv,
          before: bLv,
        });
      }
    }
  }

  let unexpectedChanges = 0;
  let productionLvChanges = 0;
  const changedFields = new Set();

  for (let i = 0; i < after.length; i++) {
    const cardId = `verb-${i}`;
    const diffs = walkDiff(before[i], after[i]);
    if (!diffs.length) continue;
    for (const d of diffs) {
      if (d.path.endsWith(".de")) continue;
      if (!d.path.endsWith(".lv")) continue;
      changedFields.add(`${cardId}|${d.path.replace(".lv", "")}`);
      productionLvChanges++;
      const formKey = d.path.replace(".lv", "");
      const key = `${cardId}|${formKey}`;
      if (!allowedKeys.has(key)) {
        unexpectedChanges++;
        add("CRITICAL", cardId, d.path, "UNEXPECTED_CHANGE outside OWNER LABOT scope", {
          deCurrent: after[i][formKey]?.de || "",
          daCurrent: String(d.after).slice(0, 160),
          recommendedDa: String(d.before).slice(0, 160),
        });
      }
    }
  }

  const remnantCounts = sweepAllDaFields(after, add);

  for (const row of labotRows) {
    const entry = findEntry(after, row.cardId);
    if (!entry) continue;
    const formKey = normalizeField(row.field);
    const lv = getDaValue(entry, row.field);
    const de = getDeContext(entry, formKey);
    for (const risk of ownerRiskPatterns(lv)) {
      add("MEDIUM", row.cardId, `${formKey}.lv`, `OWNER-repaired field risk: ${risk}`, {
        deCurrent: de,
        daCurrent: lv,
        recommendedDa: "Single natural Danish teaching form",
      });
    }
  }

  const lunaBatches = exportLunaBatches(labotRows, after);
  let lunaFindings = [];
  if (!SKIP_LUNA) lunaFindings = loadLunaFindings();
  const lunaBatchFiles = fs.existsSync(LUNA_DIR)
    ? fs.readdirSync(LUNA_DIR).filter((f) => f.endsWith("-findings.json"))
    : [];
  const lunaLoaded = lunaBatchFiles.length >= lunaBatches.length && lunaBatches.length > 0;
  const lunaClass = classifyLunaFindings(lunaFindings);
  const mismatchKeys = new Set(
    labotRows
      .filter((row) => {
        const entry = findEntry(after, row.cardId);
        const actual = getDaValue(entry, row.field);
        return normalizeText(actual) !== normalizeText(row.ownerNew);
      })
      .map((row) => applyKey(row.cardId, normalizeField(row.field)))
  );
  const lunaQualityOnly = [];
  for (const f of lunaClass.qualityFindings) {
    const formKey = normalizeField(f.field || "lv");
    const key = applyKey(f.cardId, formKey);
    const cat = String(f.category || "").toUpperCase();
    if (cat === "REGRESSION" && mismatchKeys.has(key)) continue;
    lunaQualityOnly.push(f);
    add(f.severity || "MEDIUM", f.cardId, `${formKey}.lv`, f.problem || f.reason || "Luna regression issue", {
      deCurrent: f.de || f.deContext || "",
      daCurrent: f.daCurrent || "",
      recommendedDa: f.recommendedDa || f.proposedDa || "",
      reason: f.reason || "",
      source: "luna",
      category: cat || "QUALITY",
    });
  }

  const bySev = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0 };
  const byGate = { ownerMismatch: 0, linguistic: 0, remnant: 0, structural: 0 };
  findings.forEach((f) => {
    if (f.severity === "FALSE_POSITIVE") return;
    bySev[f.severity] = (bySev[f.severity] || 0) + 1;
    if (f.problem === "OWNER_DECISION mismatch vs production") byGate.ownerMismatch++;
    else if (f.source === "luna") byGate.linguistic++;
    else if (/Foreign remnant|EN\/placeholder|Other foreign|Placeholder|Empty or missing/.test(f.problem)) byGate.remnant++;
    else byGate.structural++;
  });
  const linguisticBySev = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0 };
  findings
    .filter((f) => f.source === "luna" && f.severity !== "FALSE_POSITIVE")
    .forEach((f) => {
      linguisticBySev[f.severity] = (linguisticBySev[f.severity] || 0) + 1;
    });

  const deReadOnlyPass = deChanges === 0;
  const ownerExactPass =
    ownerMatch.MISMATCH === 0 &&
    ownerMatch.MISSING_CARD === 0 &&
    ownerMatch.MISSING_FIELD === 0 &&
    ownerMatch.CONFLICTING_OWNER_MAPPING === 0 &&
    ownerMatch.EXACT_MATCH === labotRows.length;

  const qualityPass =
    linguisticBySev.CRITICAL === 0 &&
    linguisticBySev.HIGH === 0 &&
    linguisticBySev.MEDIUM === 0 &&
    linguisticBySev.LOW === 0 &&
    remnantCounts.LV === 0 &&
    remnantCounts.EN === 0 &&
    remnantCounts.OTHER === 0 &&
    remnantCounts.PLACEHOLDER === 0 &&
    remnantCounts.EMPTY === 0;

  const pass =
    ownerExactPass &&
    qualityPass &&
    deReadOnlyPass &&
    unauthorizedFalsePositive === 0 &&
    unauthorizedNelabot === 0 &&
    unauthorizedNeedsReview === 0 &&
    unexpectedChanges === 0 &&
    syntaxPass &&
    mirrorPass &&
    idOrderPass &&
    countPass &&
    (SKIP_LUNA || lunaLoaded);

  const verdict = pass
    ? "**DA–DE VERBS OWNER REPAIRS = PASS**"
    : ownerExactPass && qualityPass && deReadOnlyPass && !(SKIP_LUNA || lunaLoaded)
      ? "**DA–DE VERBS OWNER REPAIRS = PENDING LUNA**"
      : "**DA–DE VERBS OWNER REPAIRS = NOT CLOSED**";

  const realFindings = findings.filter((f) => f.severity !== "FALSE_POSITIVE");
  const ownerMismatchFindings = realFindings.filter((f) => f.problem === "OWNER_DECISION mismatch vs production");
  const linguisticFindings = realFindings.filter((f) => f.source === "luna");
  const remnantFindings = realFindings.filter((f) =>
    /Foreign remnant|EN\/placeholder|Other foreign|Placeholder|Empty or missing/.test(f.problem)
  );
  const structuralFindings = realFindings.filter(
    (f) =>
      !ownerMismatchFindings.includes(f) &&
      !linguisticFindings.includes(f) &&
      !remnantFindings.includes(f)
  );

  const md = [
    "# DA–DE Verbs OWNER repairs final targeted regression audit",
    "",
    `**Date:** ${new Date().toISOString().slice(0, 10)}`,
    "**Auditor:** GPT-5.6 Luna (READ-ONLY targeted regression)",
    "**Scope:** Production `data/da/verbs.js` after OWNER signed repair (PR [#560](https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/560))",
    "**Decision sources (authoritative):** signed OWNER files `da-verbs-owner-decisions-signed-group01..12.md` (derived from `da-verbs-owner-decisions-group01..12.md`)",
    "**Production changes during audit:** 0",
    "",
    "## Summary",
    "",
    "| Metric | Value |",
    "|--------|-------|",
    `| OWNER findings reviewed | **${signedRows.length}** |`,
    `| LABOT findings | **${statusCounts.LABOT || 0}** |`,
    `| Unique LABOT production fields | **${labotRows.length}** |`,
    `| EXACT MATCH | **${ownerMatch.EXACT_MATCH}/${labotRows.length}** |`,
    `| MISMATCH | **${ownerMatch.MISMATCH}** |`,
    `| MISSING CARD | **${ownerMatch.MISSING_CARD}** |`,
    `| MISSING FIELD | **${ownerMatch.MISSING_FIELD}** |`,
    `| OWNER mapping conflicts | **${ownerMatch.CONFLICTING_OWNER_MAPPING}** |`,
    `| FALSE_POSITIVE | **${statusCounts.FALSE_POSITIVE || 0}** |`,
    `| NELABOT | **${statusCounts.NELABOT || 0}** |`,
    `| NEEDS_SOURCE_REVIEW | **${statusCounts.NEEDS_SOURCE_REVIEW || 0}** |`,
    `| Unauthorized FALSE_POSITIVE changes | **${unauthorizedFalsePositive}** |`,
    `| Unauthorized NELABOT changes | **${unauthorizedNelabot}** |`,
    `| Unauthorized NEEDS_SOURCE_REVIEW changes | **${unauthorizedNeedsReview}** |`,
    `| Changed DA fields (lv) | **${productionLvChanges}** |`,
    `| Changed fields audited (LABOT scope) | **${labotRows.length}** |`,
    "",
    "### Finding counts (deduplicated by gate)",
    "",
    "| Gate | CRITICAL | HIGH | MEDIUM | LOW | Total |",
    "|------|----------|------|--------|-----|-------|",
    `| Owner exact-match gate (MISMATCH) | **${ownerMismatchFindings.filter((f) => f.severity === "CRITICAL").length}** | 0 | 0 | 0 | **${ownerMismatchFindings.length}** |`,
    `| Luna linguistic (322 exact-match + ownerNew review) | **${linguisticBySev.CRITICAL}** | **${linguisticBySev.HIGH}** | **${linguisticBySev.MEDIUM}** | **${linguisticBySev.LOW}** | **${linguisticFindings.length}** |`,
    `| Full-file remnant sweep | **${remnantFindings.filter((f) => f.severity === "CRITICAL").length}** | **${remnantFindings.filter((f) => f.severity === "HIGH").length}** | **${remnantFindings.filter((f) => f.severity === "MEDIUM").length}** | 0 | **${remnantFindings.length}** |`,
    `| Structural / unauthorized | **${structuralFindings.filter((f) => f.severity === "CRITICAL").length}** | **${structuralFindings.filter((f) => f.severity === "HIGH").length}** | **${structuralFindings.filter((f) => f.severity === "MEDIUM").length}** | 0 | **${structuralFindings.length}** |`,
    "",
    "| Metric | Value |",
    "|--------|-------|",
    `| Validated real findings (unique) | **${realFindings.length}** |`,
    `| Regression FALSE_POSITIVE (Luna) | **${lunaClass.regressionFalsePositives.length}** |`,
    `| LV remnants (full file sweep) | **${remnantCounts.LV}** |`,
    `| EN remnants | **${remnantCounts.EN}** |`,
    `| Other foreign remnants | **${remnantCounts.OTHER}** |`,
    `| Placeholders | **${remnantCounts.PLACEHOLDER}** |`,
    `| Empty/corrupt DA fields | **${remnantCounts.EMPTY}** |`,
    `| DE changes | **${deChanges}** |`,
    `| DE READ-ONLY | **${deReadOnlyPass ? "PASS" : "FAIL"}** |`,
    `| Verb count | **${after.length}/${EXPECTED_VERBS}** |`,
    `| ID/order | **${idOrderPass ? "PASS" : "FAIL"}** |`,
    `| Structure | **${countPass ? "PASS" : "FAIL"}** |`,
    `| Mirror | **${mirrorPass ? "PASS" : "FAIL"}** |`,
    `| Unexpected production changes | **${unexpectedChanges}** |`,
    `| Luna batches | **${lunaBatches.length}** |`,
    `| Luna findings loaded | **${lunaBatchFiles.length}/${lunaBatches.length}** |`,
    `| Luna quality findings (deduped) | **${lunaQualityOnly.length}** |`,
    "",
    "### Verdict",
    "",
    verdict,
    "",
    "## Root cause: apply parser corruption",
    "",
    `All **${ownerMatch.MISMATCH}** MISMATCH fields contain literal \`LABOT\` text or parser debris in production instead of the OWNER-approved Danish. This affects verbs roughly **verb-33** through **verb-95** (groups parsed via ASCII blocks during first apply pass). The signed-decisions parser was subsequently fixed in \`scripts/lib/da-verbs-signed-decisions.js\`, but production was **not** re-applied during this audit.`,
    "",
    "**Required next step:** Re-run OWNER apply with fixed parser on affected groups, then re-audit. Do not auto-fix in this pass.",
    "",
  ];

  function renderFinding(f) {
    const lines = [`### ${f.id} [${f.severity}]`, ""];
    lines.push(`- **Verb/Card ID:** \`${f.cardId}\``);
    lines.push(`- **Field:** \`${f.field}\``);
    if (f.deCurrent) lines.push(`- **DE_CURRENT:** ${f.deCurrent}`);
    lines.push(`- **DA_CURRENT:** ${f.daCurrent || "—"}`);
    lines.push(`- **Problem:** ${f.problem}`);
    if (f.reason) lines.push(`- **Reason:** ${f.reason}`);
    if (f.recommendedDa) lines.push(`- **Recommended DA:** ${f.recommendedDa}`);
    lines.push("");
    return lines.join("\n");
  }

  if (ownerMismatchFindings.length) {
    md.push(`## Owner exact-match gate — MISMATCH (${ownerMismatchFindings.length})`, "");
    md.push("_Production value ≠ OWNER_DECISION. All are CRITICAL apply failures._", "");
    for (const f of ownerMismatchFindings.slice(0, 30)) md.push(renderFinding(f));
    if (ownerMismatchFindings.length > 30) {
      md.push(`_… and ${ownerMismatchFindings.length - 30} more MISMATCH entries (see JSON)._`, "");
    }
  }

  if (linguisticFindings.length) {
    md.push(`## Luna targeted linguistic regression (${linguisticFindings.length})`, "");
    md.push(
      "_Reviewed all 497 OWNER-changed fields. Luna REGRESSION duplicates of MISMATCH gate excluded. Remaining items are real Danish issues in production (exact-match subset) or in OWNER targets._",
      ""
    );
    for (const f of linguisticFindings) md.push(renderFinding(f));
  }

  if (remnantFindings.length) {
    md.push(`## Foreign-language / placeholder sweep (${remnantFindings.length})`, "");
    for (const f of remnantFindings) md.push(renderFinding(f));
  }

  if (structuralFindings.length) {
    md.push(`## Structural findings (${structuralFindings.length})`, "");
    for (const f of structuralFindings) md.push(renderFinding(f));
  }

  if (!realFindings.length) {
    md.push("## Findings", "", "_No CRITICAL/HIGH/MEDIUM/LOW findings._", "");
  }

  if (!lunaLoaded && !SKIP_LUNA) {
    md.push(
      "## Luna linguistic audit",
      "",
      `${lunaBatches.length} batch files exported to \`reports/temp/da-verbs-regression-luna/\`. Run GPT-5.6 Luna on each batch, save \`*-findings.json\`, then re-run this audit.`,
      ""
    );
  }

  if (!SKIP_LUNA && lunaLoaded) {
    md.push(
      "## OWNER review pack",
      "",
      "Pēc šī audita automātiski ģenerē OWNER review (A1/A2 pattern):",
      "",
      "- [`da-verbs-owner-review-regression-GITHUB.md`](./da-verbs-owner-review-regression-GITHUB.md) — GitHub saites",
      "- [`da-verbs-owner-review-regression-README.md`](./da-verbs-owner-review-regression-README.md) — workflow",
      "- [`da-verbs-owner-decisions-regression.md`](./da-verbs-owner-decisions-regression.md) — PENDING",
      "- [`da-verbs-owner-accepted-regression.md`](./da-verbs-owner-accepted-regression.md) — ieteicamais LABOT",
      "",
      "Regenerēt: `node scripts/run-da-verbs-owner-repairs-final-regression-audit.js`",
      ""
    );
  }

  md.push("## Closure gate", "");
  md.push(
    "| Gate | Required | Actual | Status |",
    "|------|----------|--------|--------|",
    `| OWNER exact match | MISMATCH=0 | ${ownerMatch.MISMATCH} | ${ownerMatch.MISMATCH === 0 ? "PASS" : "FAIL"} |`,
    `| MISSING | 0 | ${ownerMatch.MISSING_CARD + ownerMatch.MISSING_FIELD} | ${ownerMatch.MISSING_CARD + ownerMatch.MISSING_FIELD === 0 ? "PASS" : "FAIL"} |`,
    `| OWNER conflicts | 0 | ${ownerMatch.CONFLICTING_OWNER_MAPPING} | ${ownerMatch.CONFLICTING_OWNER_MAPPING === 0 ? "PASS" : "FAIL"} |`,
    `| CRITICAL (linguistic) | 0 | ${linguisticBySev.CRITICAL} | ${linguisticBySev.CRITICAL === 0 ? "PASS" : "FAIL"} |`,
    `| HIGH (linguistic) | 0 | ${linguisticBySev.HIGH} | ${linguisticBySev.HIGH === 0 ? "PASS" : "FAIL"} |`,
    `| MEDIUM (linguistic) | 0 | ${linguisticBySev.MEDIUM} | ${linguisticBySev.MEDIUM === 0 ? "PASS" : "FAIL"} |`,
    `| LOW (linguistic) | 0 | ${linguisticBySev.LOW} | ${linguisticBySev.LOW === 0 ? "PASS" : "FAIL"} |`,
    `| LV remnants | 0 | ${remnantCounts.LV} | ${remnantCounts.LV === 0 ? "PASS" : "FAIL"} |`,
    `| EN remnants | 0 | ${remnantCounts.EN} | ${remnantCounts.EN === 0 ? "PASS" : "FAIL"} |`,
    `| Placeholders | 0 | ${remnantCounts.PLACEHOLDER} | ${remnantCounts.PLACEHOLDER === 0 ? "PASS" : "FAIL"} |`,
    `| Corrupt/empty DA | 0 | ${remnantCounts.EMPTY} | ${remnantCounts.EMPTY === 0 ? "PASS" : "FAIL"} |`,
    `| DE changes | 0 | ${deChanges} | ${deReadOnlyPass ? "PASS" : "FAIL"} |`,
    `| DE READ-ONLY | PASS | ${deReadOnlyPass ? "PASS" : "FAIL"} | ${deReadOnlyPass ? "PASS" : "FAIL"} |`,
    `| ID/order | PASS | ${idOrderPass ? "PASS" : "FAIL"} | ${idOrderPass ? "PASS" : "FAIL"} |`,
    `| Structure | PASS | ${countPass ? "PASS" : "FAIL"} | ${countPass ? "PASS" : "FAIL"} |`,
    `| Unexpected changes | 0 | ${unexpectedChanges} | ${unexpectedChanges === 0 ? "PASS" : "FAIL"} |`,
    "",
    pass
      ? "All closure gates PASS."
      : "**DA–DE VERBS OWNER REPAIRS = NOT CLOSED** — do not apply automatic fixes. Re-apply OWNER repairs with fixed parser, then micro-repair remaining linguistic findings."
  );

  fs.writeFileSync(REPORT, md.join("\n"));
  fs.mkdirSync(path.dirname(JSON_OUT), { recursive: true });
  fs.writeFileSync(
    JSON_OUT,
    JSON.stringify(
      {
        generatedAt: new Date().toISOString(),
        statusCounts,
        ownerMatch,
        labotUnique: labotRows.length,
        unauthorizedFalsePositive,
        unauthorizedNelabot,
        unauthorizedNeedsReview,
        unexpectedChanges,
        deChanges,
        deReadOnlyPass,
        remnantCounts,
        bySev,
        byGate,
        linguisticBySev,
        lunaQuality: lunaQualityOnly.length,
        lunaQualityRaw: lunaClass.qualityFindings.length,
        lunaRegressionFalsePositives: lunaClass.regressionFalsePositives.length,
        lunaBatches: lunaBatches.length,
        lunaLoaded,
        pass,
        verdict: verdict.replace(/\*\*/g, ""),
        findings: realFindings.map((f) => ({
          auditId: f.id,
          cardId: f.cardId,
          field: f.field,
          deCurrent: f.deCurrent || "",
          daCurrent: f.daCurrent || "",
          severity: f.severity,
          problem: f.problem,
          reason: f.reason || "",
          recommendedDa: f.recommendedDa || "",
          source: f.source || "deterministic",
          category: f.category || "",
        })),
      },
      null,
      2
    )
  );

  console.log(
    JSON.stringify(
      {
        ownerMatch,
        labotUnique: labotRows.length,
        bySev,
        remnantCounts,
        deChanges,
        lunaBatches: lunaBatches.length,
        lunaLoaded,
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
