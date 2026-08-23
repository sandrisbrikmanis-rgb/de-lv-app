#!/usr/bin/env node
"use strict";
/**
 * Apply OWNER revalidation deltas to production (COPY-ONLY, production CURRENT gate).
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");
const { ROOT, isSyncedWithWww } = require("./lib/audit-common");
const { normalizeField, getAt, setAt, findEntry } = require("./lib/et-b2-owner-path");
const { parsePipeRows } = require("./lib/et-b2-owner-accepted-parse");
const { loadB2 } = require("./lib/et-owner-production-resolve");

const ACCEPTED = path.join(ROOT, "reports/et-b2-owner-decisions-accepted.md");
const REPORT_MD = path.join(ROOT, "reports/et-b2-owner-revalidation-apply.md");
const LOG_JSON = path.join(ROOT, "reports/temp/et-b2-owner-revalidation-apply-log.json");
const B2_FILES = [path.join(ROOT, "data/et/b2.js"), path.join(ROOT, "www/data/et/b2.js")];
const B2_KEY = "B2_WORDS";
const DE_FIELDS = ["de", "de_article", "de_plural", "level"];
const STRUCT_CARDS = ["b2-genosse", "b2-genossin", "b2-neger", "b2-pacht"];

function writeWords(filePath, words) {
  fs.writeFileSync(
    filePath,
    `const ${B2_KEY} = ${JSON.stringify(words, null, 2)};\n\nwindow.${B2_KEY} = ${B2_KEY};\n`,
    "utf8",
  );
}

function readCurrent(entry, field) {
  const f = normalizeField(field);
  if (f === "lv") return entry.lv;
  return getAt(entry, f);
}

function applySet(entry, field, ownerNew) {
  const f = normalizeField(field);
  if (!f) return { ok: false, reason: "skip" };
  if (f === "lv") {
    entry.lv = ownerNew;
    return { ok: true };
  }
  if (!entry.study && f.startsWith("study.")) return { ok: false, reason: "no_study" };
  const before = getAt(entry, f);
  if (before === undefined) return { ok: false, reason: "path_missing" };
  setAt(entry, f, ownerNew);
  return { ok: true, before, after: ownerNew };
}

function verifyDeUnchanged(before, after) {
  let n = 0;
  for (let i = 0; i < after.length; i++) {
    for (const f of DE_FIELDS) {
      if (JSON.stringify(before[i]?.[f]) !== JSON.stringify(after[i]?.[f])) n++;
    }
  }
  return n;
}

function main() {
  execSync("node scripts/merge-et-b2-owner-revalidation.js", { cwd: ROOT, stdio: "pipe" });
  const rows = parsePipeRows(fs.readFileSync(ACCEPTED, "utf8"));
  const deltaMeta = JSON.parse(
    fs.readFileSync(path.join(ROOT, "reports/temp/et-b2-owner-revalidation-apply-map.json"), "utf8"),
  );
  const overrideCount = deltaMeta.meta?.overrides ?? deltaMeta.delta?.length ?? 0;

  const words = loadB2();
  const before = JSON.parse(JSON.stringify(words));
  const log = {
    ownerMatchConfirmed: [],
    applied: [],
    reverted: [],
    skipped: [],
    mismatches: [],
    structural: {},
  };

  // ET-B2-0001 structural check
  const studies = words.filter((e) => e.study).length;
  const lvWords = loadB2.bind(null);
  const lvCode = fs.readFileSync(path.join(ROOT, "data/b2.js"), "utf8");
  const lvCtx = { window: {} };
  vm.createContext(lvCtx);
  vm.runInContext(lvCode, lvCtx);
  const lvStudies = lvCtx.window.B2_WORDS.filter((e) => e.study).length;
  const extraPresent = STRUCT_CARDS.filter((id) => {
    const e = findEntry(words, id);
    return e?.study;
  });
  log.structural = {
    studies,
    lvStudies,
    extraPresent,
    pass: studies === 60 && lvStudies === 60 && extraPresent.length === 0,
  };

  for (const row of rows) {
    if (row.auditId === "ET-B2-0001") continue;
    if (row.cardId === "STRUCT") continue;
    if (/sectionAccents/i.test(row.field)) continue;

    const entry = findEntry(words, row.cardId);
    if (!entry) {
      log.skipped.push({ auditId: row.auditId, reason: "card_missing" });
      continue;
    }

    const actual = readCurrent(entry, row.field);
    const actualStr = String(actual ?? "");

    if (row.status === "FALSE_POSITIVE") {
      const f = normalizeField(row.field);
      if (f?.startsWith("study.") && !entry.study) {
        log.skipped.push({ auditId: row.auditId, reason: "fp_superseded_no_study" });
        continue;
      }
      // Revert if a prior LABOT changed production away from audit CURRENT
      if (actualStr !== String(row.current) && row.current) {
        const result = applySet(entry, row.field, row.current);
        if (result.ok) {
          log.reverted.push({
            auditId: row.auditId,
            cardId: row.cardId,
            field: row.field,
            from: actualStr,
            to: row.current,
          });
        } else {
          log.mismatches.push({ auditId: row.auditId, reason: "revert_failed", ...result });
        }
      }
      continue;
    }

    if (row.status !== "LABOT") continue;

    if (actualStr === String(row.ownerNew)) {
      log.ownerMatchConfirmed.push({ auditId: row.auditId, cardId: row.cardId, field: row.field });
      continue;
    }

    const result = applySet(entry, row.field, row.ownerNew);
    if (!result.ok) {
      log.mismatches.push({ auditId: row.auditId, ...result });
      continue;
    }
    if (String(getAt(entry, normalizeField(row.field))) !== String(row.ownerNew)) {
      log.mismatches.push({ auditId: row.auditId, reason: "post_write_mismatch" });
      continue;
    }
    log.applied.push({
      auditId: row.auditId,
      cardId: row.cardId,
      field: row.field,
      from: actualStr,
      to: row.ownerNew,
    });
  }

  const deChanges = verifyDeUnchanged(before, words);
  if (log.applied.length + log.reverted.length > 0) {
    for (const f of B2_FILES) writeWords(f, words);
  }

  const mirrorPass = isSyncedWithWww("data/et/b2.js");
  let syntaxPass = true;
  try {
    execSync("node --check data/et/b2.js", { cwd: ROOT, stdio: "pipe" });
    execSync("node --check www/data/et/b2.js", { cwd: ROOT, stdio: "pipe" });
  } catch {
    syntaxPass = false;
  }

  const pass =
    log.mismatches.length === 0 &&
    deChanges === 0 &&
    log.structural.pass &&
    mirrorPass &&
    syntaxPass;

  const summary = {
    deltaOverrides: overrideCount,
    ownerMatchConfirmed: log.ownerMatchConfirmed.length,
    applied: log.applied.length,
    reverted: log.reverted.length,
    mismatches: log.mismatches.length,
    deChanges,
    mirror: mirrorPass ? "PASS" : "FAIL",
    syntax: syntaxPass ? "PASS" : "FAIL",
    structural: log.structural.pass ? "PASS" : "FAIL",
    finalVerdict: pass ? "ET_B2_OWNER_REVALIDATION_APPLY_PASS" : "ET_B2_OWNER_REVALIDATION_APPLY_FAIL",
  };

  fs.writeFileSync(LOG_JSON, JSON.stringify({ summary, log }, null, 2));

  const md = [
    "# ET–DE B2 — OWNER revalidation apply",
    "",
    "**Authority:** `reports/et-b2-owner-decisions-accepted-owner-revalidated.md`",
    "",
    "| Metrika | Vērtība |",
    "|---------|---------|",
    `| OWNER overrides | **${overrideCount}** |`,
    `| OWNER_MATCH_CONFIRMED | **${summary.ownerMatchConfirmed}** |`,
    `| APPLIED (delta) | **${summary.applied}** |`,
    `| REVERTED (FP) | **${summary.reverted}** |`,
    `| MISMATCH | **${summary.mismatches}** |`,
    `| DE_CHANGES | **${summary.deChanges}** |`,
    `| Structural ET-B2-0001 | **${summary.structural}** |`,
    "",
    `## FINAL VERDICT: **${summary.finalVerdict}**`,
    "",
  ];
  fs.writeFileSync(REPORT_MD, md.join("\n"));
  console.log(JSON.stringify(summary, null, 2));
  if (!pass) process.exit(1);
}

main();
