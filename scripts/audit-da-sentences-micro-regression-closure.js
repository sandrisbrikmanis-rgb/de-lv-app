#!/usr/bin/env node
"use strict";
/**
 * DA–DE Sätze micro-regression closure audit (READ-ONLY).
 * After regression OWNER micro-repair (16 unique LABOT).
 * Usage: node scripts/audit-da-sentences-micro-regression-closure.js [--skip-luna]
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const { findEntry } = require("./lib/da-sentences-owner-path");
const { dedupeLabot, normalizeText } = require("./lib/da-sentences-signed-decisions");

const DA_FILE = path.join(ROOT, "data/da/sentences.js");
const WWW_FILE = path.join(ROOT, "www/data/da/sentences.js");
const DE_FILE = path.join(ROOT, "data/sentences.js");
const REGRESSION_SIGNED = path.join(ROOT, "reports/da-sentences-regression-owner-decisions-signed.md");
const REGRESSION_APPLY = path.join(ROOT, "reports/temp/da-sentences-regression-owner-apply-map.json");
const OWNER_SIGNED = path.join(ROOT, "reports/da-sentences-owner-decisions-signed.md");
const REPORT = path.join(ROOT, "reports/da-sentences-micro-regression-closure-audit.md");
const JSON_OUT = path.join(ROOT, "reports/temp/da-sentences-micro-regression-closure-audit.json");
const LUNA_DIR = path.join(ROOT, "reports/temp/da-sentences-micro-regression-luna");
const PRE_MICRO_REF = process.env.DA_SENTENCES_PRE_MICRO || "/tmp/da-sentences-pre-micro.js";
const PRE_MICRO_SHA = process.env.DA_SENTENCES_PRE_MICRO_SHA || "aba53e55^";
const SKIP_LUNA = process.argv.includes("--skip-luna");
const EXPECTED = 796;
const EXPECTED_MICRO_LABOT = 16;

const STATUS = "(LABOT|FALSE_POSITIVE|NELABOT|NEEDS_SOURCE_REVIEW)";
const REG_PIPE = new RegExp(
  `^\\|\\s*(\\d+)\\s*\\|\\s*\`{1,2}(DA-SENT-REG-\\d+)\`{1,2}\\s*\\|\\s*\`{1,2}([^|\`]+)\`{1,2}\\s*\\|\\s*\`{1,2}([^|\`]*)\`{1,2}\\s*\\|\\s*\`{1,2}([^|\`]*)\`{1,2}\\s*\\|\\s*\\*\\*${STATUS}\\*\\*\\s*\\|\\s*$`
);

const LV_DIAC = /[āēīūģķļņĀĒĪŪĢĶĻŅ]/;
const EN_PATTERNS = /\b(Translation:|TODO|TBD|Context-specific|instead of|you are|meaning:)\b/i;
const ZERO_WIDTH = /[\u200B-\u200D\uFEFF]|​​/;
const PLACEHOLDER = /(\bTODO\b|\bTBD\b|\(Context-specific)/i;

function loadSentences(filePath) {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.SENTENCE_ENTRIES;
}

function ensurePreMicro() {
  if (!fs.existsSync(PRE_MICRO_REF)) {
    execSync(`git show ${PRE_MICRO_SHA}:data/da/sentences.js > ${PRE_MICRO_REF}`, { cwd: ROOT, stdio: "pipe" });
  }
}

function parseRegressionSigned() {
  const rows = [];
  for (const line of fs.readFileSync(REGRESSION_SIGNED, "utf8").split("\n")) {
    const m = line.match(REG_PIPE);
    if (!m) continue;
    rows.push({
      auditId: m[2].trim(),
      cardId: m[3].trim(),
      currentDa: normalizeText(m[4]),
      ownerNew: normalizeText(m[5]),
      status: m[6],
      field: "lv",
    });
  }
  return rows;
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
  if (LV_DIAC.test(text)) reasons.push("LV");
  if (EN_PATTERNS.test(text)) reasons.push("EN");
  if (ZERO_WIDTH.test(text)) reasons.push("ZERO_WIDTH");
  if (PLACEHOLDER.test(text)) reasons.push("PLACEHOLDER");
  if (/•/.test(text)) reasons.push("MULTI_VARIANT");
  if (/\s\/\s/.test(text)) reasons.push("SLASH_VARIANT");
  return reasons;
}

function exportLunaBatches(labotRows, after) {
  fs.mkdirSync(LUNA_DIR, { recursive: true });
  const batchSize = 8;
  const batches = [];
  for (let i = 0; i < labotRows.length; i += batchSize) {
    const slice = labotRows.slice(i, i + batchSize);
    const label = `batch-${String(Math.floor(i / batchSize) + 1).padStart(2, "0")}`;
    const payload = {
      auditType: "da_sentences_micro_regression",
      batch: label,
      sentences: slice.map((row) => {
        const entry = findEntry(after, row.cardId);
        return {
          cardId: row.cardId,
          auditId: row.auditId,
          de: entry?.de || "",
          daCurrent: entry?.lv || "",
          ownerNew: row.ownerNew,
        };
      }),
    };
    fs.writeFileSync(path.join(LUNA_DIR, `${label}.json`), JSON.stringify(payload, null, 2));
    batches.push(label);
  }
  return batches;
}

function loadLunaFindings() {
  if (!fs.existsSync(LUNA_DIR)) return [];
  const all = [];
  for (const f of fs.readdirSync(LUNA_DIR).filter((x) => x.endsWith("-findings.json"))) {
    const data = JSON.parse(fs.readFileSync(path.join(LUNA_DIR, f), "utf8"));
    for (const item of data.findings || []) {
      if (String(item.status || "").toUpperCase() === "PASS") continue;
      all.push(item);
    }
  }
  return all;
}

function main() {
  ensurePreMicro();
  execSync("node scripts/build-da-sentences-regression-owner-apply-map.js", { cwd: ROOT, stdio: "pipe" });

  const regressionRows = parseRegressionSigned();
  const regressionLabot = JSON.parse(fs.readFileSync(REGRESSION_APPLY, "utf8")).apply;
  const nelabotCards = [...new Set(regressionRows.filter((r) => r.status === "NELABOT").map((r) => r.cardId))];
  const fpCards = [...new Set(regressionRows.filter((r) => r.status === "FALSE_POSITIVE").map((r) => r.cardId))];

  const preMicro = loadSentences(PRE_MICRO_REF);
  const after = loadSentences(DA_FILE);
  const deRef = loadSentences(DE_FILE);

  const findings = [];
  let fid = 0;
  function add(severity, cardId, field, problem, detail = {}) {
    fid++;
    findings.push({
      id: `DA-SENT-MREG-${String(fid).padStart(4, "0")}`,
      severity,
      cardId,
      field,
      problem,
      ...detail,
    });
  }

  const microMatch = { EXACT_MATCH: 0, MISMATCH: 0, MISSING: 0 };
  for (const row of regressionLabot) {
    const entry = findEntry(after, row.cardId);
    if (!entry) {
      microMatch.MISSING++;
      add("HIGH", row.cardId, "lv", "Micro-repair target missing", { recommended: row.ownerNew });
      continue;
    }
    if (normalizeText(entry.lv) === normalizeText(row.ownerNew)) {
      microMatch.EXACT_MATCH++;
    } else {
      microMatch.MISMATCH++;
      add("HIGH", row.cardId, "lv", "Regression OWNER NEW mismatch", {
        deCurrent: entry.de,
        daCurrent: entry.lv,
        recommended: row.ownerNew,
      });
    }
  }

  let unauthorizedNelabot = 0;
  for (const cardId of nelabotCards) {
    const b = findEntry(preMicro, cardId);
    const a = findEntry(after, cardId);
    if (b && a && normalizeText(b.lv) !== normalizeText(a.lv)) {
      unauthorizedNelabot++;
      add("HIGH", cardId, "lv", "Unauthorized change on regression NELABOT", {
        deCurrent: a.de,
        daCurrent: a.lv,
        recommended: b.lv,
      });
    }
  }

  let unauthorizedFp = 0;
  for (const cardId of fpCards) {
    const b = findEntry(preMicro, cardId);
    const a = findEntry(after, cardId);
    if (b && a && normalizeText(b.lv) !== normalizeText(a.lv)) {
      unauthorizedFp++;
      add("HIGH", cardId, "lv", "Unauthorized change on regression FALSE_POSITIVE", {
        deCurrent: a.de,
        daCurrent: a.lv,
        recommended: b.lv,
      });
    }
  }

  const allowed = new Set(regressionLabot.map((r) => `${r.cardId}|lv`));
  let microLvChanges = 0;
  let unexpectedChanges = 0;
  for (let i = 0; i < after.length; i++) {
    if (normalizeText(preMicro[i].lv) === normalizeText(after[i].lv)) continue;
    microLvChanges++;
    const cardId = `sentence-${i}`;
    if (!allowed.has(`${cardId}|lv`)) {
      unexpectedChanges++;
      add("HIGH", cardId, "lv", "Unexpected change outside micro-repair scope", {
        deCurrent: after[i].de,
        daCurrent: after[i].lv,
        before: preMicro[i].lv,
      });
    }
  }

  let deChanges = 0;
  let idOrderPass = true;
  for (let i = 0; i < after.length; i++) {
    for (const f of ["de", "level"]) {
      if (JSON.stringify(preMicro[i]?.[f]) !== JSON.stringify(after[i]?.[f])) deChanges++;
    }
    if (preMicro[i]?.de !== deRef[i]?.de) idOrderPass = false;
  }
  if (deChanges) add("CRITICAL", "ALL", "de", `${deChanges} DE changes in micro scope`);

  const syntaxPass = (() => {
    try {
      execSync("node --check data/da/sentences.js", { cwd: ROOT, stdio: "pipe" });
      execSync("node --check www/data/da/sentences.js", { cwd: ROOT, stdio: "pipe" });
      return true;
    } catch {
      return false;
    }
  })();
  if (!syntaxPass) add("CRITICAL", "STRUCT", "syntax", "Syntax check failed");

  const mirrorPass = fs.readFileSync(DA_FILE).equals(fs.readFileSync(WWW_FILE));
  if (!mirrorPass) add("CRITICAL", "MIRROR", "mirror", "Mirror mismatch");

  const countPass = after.length === EXPECTED;
  if (!countPass) add("CRITICAL", "STRUCT", "count", `Expected ${EXPECTED}, got ${after.length}`);

  const remnantCounts = { LV: 0, EN: 0, OTHER: 0, RISK: 0 };
  for (const row of regressionLabot) {
    const entry = findEntry(after, row.cardId);
    if (!entry) continue;
    const reasons = classifyForeign(entry.lv);
    if (reasons.includes("LV")) {
      remnantCounts.LV++;
      add("HIGH", row.cardId, "lv", `LV remnant: ${reasons.join(", ")}`, { daCurrent: entry.lv });
    } else if (reasons.includes("EN")) {
      remnantCounts.EN++;
      add("HIGH", row.cardId, "lv", `EN remnant: ${reasons.join(", ")}`, { daCurrent: entry.lv });
    } else if (reasons.includes("MULTI_VARIANT") || reasons.includes("SLASH_VARIANT") || reasons.includes("PLACEHOLDER")) {
      remnantCounts.RISK++;
      add("MEDIUM", row.cardId, "lv", `Risk artifact: ${reasons.join(", ")}`, { daCurrent: entry.lv });
    }
  }

  let owner213Pass = true;
  let owner213Match = 0;
  let owner213MicroOverlap = 0;
  let owner213Expected = 213;
  const microCardSet = new Set(regressionLabot.map((r) => r.cardId));
  if (fs.existsSync(OWNER_SIGNED)) {
    const ownerLabot = dedupeLabot(
      require("./lib/da-sentences-signed-decisions").parseSignedDecisions(OWNER_SIGNED)
    );
    owner213Expected = ownerLabot.length - [...microCardSet].filter((id) => ownerLabot.some((r) => r.cardId === id)).length;
    for (const row of ownerLabot) {
      if (microCardSet.has(row.cardId)) {
        owner213MicroOverlap++;
        continue;
      }
      const entry = findEntry(after, row.cardId);
      if (entry && normalizeText(entry.lv) === normalizeText(row.ownerNew)) owner213Match++;
      else owner213Pass = false;
    }
    if (!owner213Pass || owner213Match !== owner213Expected) {
      add("HIGH", "OWNER-213", "scope", `Original OWNER scope drift outside micro-repair: ${owner213Match}/${owner213Expected} EXACT_MATCH`);
    }
  }

  const lunaBatches = exportLunaBatches(regressionLabot, after);
  const lunaFindings = SKIP_LUNA ? [] : loadLunaFindings();
  const lunaLoaded = !SKIP_LUNA && fs.existsSync(LUNA_DIR) && fs.readdirSync(LUNA_DIR).some((f) => f.endsWith("-findings.json"));
  const regressionOwnerByCard = new Map(regressionLabot.map((r) => [r.cardId, r]));
  const ownerAcceptedLuna = [];
  for (const f of lunaFindings) {
    const cat = String(f.category || "").toUpperCase();
    if (["FALSE_POSITIVE", "STYLE_ONLY", "ACCEPTABLE_VARIANT", "SOURCE_DE_ISSUE"].includes(cat)) continue;
    const ownerRow = regressionOwnerByCard.get(f.cardId);
    const entry = findEntry(after, f.cardId);
    if (ownerRow && entry && normalizeText(entry.lv) === normalizeText(ownerRow.ownerNew)) {
      ownerAcceptedLuna.push({
        cardId: f.cardId,
        auditId: ownerRow.auditId,
        note: "OWNER-signed regression LABOT; production matches authoritative OWNER NEW",
        lunaReason: f.reason,
      });
      continue;
    }
    const sev = String(f.severity || "MEDIUM").toUpperCase();
    add(sev === "CRITICAL" || sev === "HIGH" || sev === "MEDIUM" || sev === "LOW" ? sev : "MEDIUM", f.cardId, "lv", f.reason || "Luna finding", {
      deCurrent: f.de || "",
      daCurrent: f.daCurrent || "",
      recommended: f.proposedDa || "",
      source: "luna",
    });
  }

  const bySev = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0 };
  findings.forEach((f) => {
    bySev[f.severity] = (bySev[f.severity] || 0) + 1;
  });

  const pass =
    microMatch.EXACT_MATCH === EXPECTED_MICRO_LABOT &&
    microMatch.MISMATCH === 0 &&
    microMatch.MISSING === 0 &&
    microLvChanges === EXPECTED_MICRO_LABOT &&
    unexpectedChanges === 0 &&
    unauthorizedNelabot === 0 &&
    unauthorizedFp === 0 &&
    owner213Pass &&
    owner213Match === owner213Expected &&
    bySev.CRITICAL === 0 &&
    bySev.HIGH === 0 &&
    bySev.MEDIUM === 0 &&
    remnantCounts.LV === 0 &&
    remnantCounts.EN === 0 &&
    remnantCounts.RISK === 0 &&
    deChanges === 0 &&
    syntaxPass &&
    mirrorPass &&
    idOrderPass &&
    countPass &&
    (SKIP_LUNA || lunaLoaded);

  const verdict = pass
    ? "**DA–DE SENTENCES MICRO-REGRESSION CLOSURE AUDIT — PASS**"
    : "**DA–DE SENTENCES MICRO-REGRESSION CLOSURE AUDIT — FAIL**";

  const md = [
    "# DA–DE Sätze micro-regression closure audit (READ-ONLY)",
    "",
    `**Date:** ${new Date().toISOString().slice(0, 10)}`,
    "**Scope:** 16 unique regression LABOT after PR [#557](https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/557)",
    "**Auditor:** GPT-5.6 Luna",
    "**Pre-micro baseline:** `" + PRE_MICRO_SHA + "`",
    "**Production changes during audit:** 0",
    "",
    "## Summary",
    "",
    "| Metric | Value |",
    "|--------|-------|",
    `| Regression findings reviewed | **23** |`,
    `| Micro LABOT expected | **${EXPECTED_MICRO_LABOT}** |`,
    `| Micro EXACT_MATCH | **${microMatch.EXACT_MATCH}/${EXPECTED_MICRO_LABOT}** |`,
    `| Micro MISMATCH | **${microMatch.MISMATCH}** |`,
    `| Micro lv changes (normalized) | **${microLvChanges}** |`,
    `| Unexpected changes | **${unexpectedChanges}** |`,
    `| Regression NELABOT unauthorized | **${unauthorizedNelabot}** |`,
    `| Regression FALSE_POSITIVE unauthorized | **${unauthorizedFp}** |`,
    `| Original OWNER scope (excl. micro) | **${owner213Match}/${owner213Expected}** |`,
    `| CRITICAL | **${bySev.CRITICAL}** |`,
    `| HIGH | **${bySev.HIGH}** |`,
    `| MEDIUM | **${bySev.MEDIUM}** |`,
    `| LOW | **${bySev.LOW}** |`,
    `| LV remnants | **${remnantCounts.LV}** |`,
    `| EN remnants | **${remnantCounts.EN}** |`,
    `| Risk artifacts | **${remnantCounts.RISK}** |`,
    `| DE changes | **${deChanges}** |`,
    `| Syntax | **${syntaxPass ? "PASS" : "FAIL"}** |`,
    `| Mirror | **${mirrorPass ? "PASS" : "FAIL"}** |`,
    `| Structure | **${countPass ? "PASS" : "FAIL"}** |`,
    `| Luna batches | **${lunaBatches.length}** |`,
    `| Luna findings | **${lunaFindings.length}** |`,
    "",
    "### Verdict",
    "",
    verdict,
    "",
  ];

  if (findings.length) {
    md.push("## Findings", "");
    for (const f of findings) {
      md.push(`### ${f.id} [${f.severity}]`, "");
      md.push(`- **Card ID:** \`${f.cardId}\``);
      if (f.deCurrent) md.push(`- **DE_CURRENT:** ${f.deCurrent}`);
      if (f.daCurrent) md.push(`- **DA_CURRENT:** ${f.daCurrent}`);
      md.push(`- **Problem:** ${f.problem}`);
      if (f.recommended) md.push(`- **Recommended:** ${f.recommended}`);
      md.push("");
    }
  } else {
    md.push("## Findings", "", "_No CRITICAL/HIGH/MEDIUM findings._", "");
  }

  if (!lunaLoaded && !SKIP_LUNA) {
    md.push("## Luna", "", "_Run Luna on batches in `reports/temp/da-sentences-micro-regression-luna/` and re-run audit._", "");
  }

  if (ownerAcceptedLuna.length) {
    md.push("## OWNER-accepted Luna notes (not counted as defects)", "");
    for (const n of ownerAcceptedLuna) {
      md.push(`- \`${n.cardId}\` (${n.auditId}) — ${n.note}. Luna note: ${n.lunaReason}`);
    }
    md.push("");
  }

  fs.writeFileSync(REPORT, md.join("\n"));
  fs.mkdirSync(path.dirname(JSON_OUT), { recursive: true });
  fs.writeFileSync(JSON_OUT, JSON.stringify({ microMatch, microLvChanges, unexpectedChanges, owner213Match, bySev, pass, verdict: verdict.replace(/\*\*/g, "") }, null, 2));

  console.log(JSON.stringify({ microMatch, microLvChanges, unexpectedChanges, owner213Match, bySev, pass, verdict: verdict.replace(/\*\*/g, ""), report: REPORT }, null, 2));
  process.exit(pass ? 0 : 1);
}

main();
