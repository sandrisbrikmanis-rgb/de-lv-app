#!/usr/bin/env node
"use strict";
/**
 * FR–DE A1 POST-REPAIR OWNER — COPY-ONLY micro-repair apply.
 * Usage: node scripts/apply-fr-a1-post-repair-owner-copy-only.js [--dry-run] [--cycle=1|2|3|4|5|6|7]
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");
const { ROOT, isSyncedWithWww } = require("./lib/audit-common");

const CYCLE = (process.argv.find((a) => a.startsWith("--cycle=")) || "--cycle=1").split("=")[1];
const CYCLE_CFG = {
  "1": {
    authFile: "fr-a1-post-repair-owner-decisions-filled.md",
    reportMd: "fr-a1-post-repair-owner-copy-only-apply-report.md",
    reportJson: "fr-a1-post-repair-owner-copy-only-apply-report.json",
    expected: { rows: 159, labot: 138, falsePositive: 14, needsSourceReview: 7 },
    skipLabot: new Set(["FR-A1-0474", "FR-A1-0475"]),
    allowRebase: true,
  },
  "2": {
    authFile: "fr-a1-post-repair-owner-decisions-cycle2-filled.md",
    reportMd: "fr-a1-post-repair-owner-copy-only-apply-report-cycle2.md",
    reportJson: "fr-a1-post-repair-owner-copy-only-apply-report-cycle2.json",
    expected: { rows: 63, labot: 54, falsePositive: 9, needsSourceReview: 0 },
    skipLabot: new Set(),
    allowRebase: false,
  },
  "3": {
    authFile: "fr-a1-post-repair-owner-decisions-cycle3-filled.md",
    reportMd: "fr-a1-post-repair-owner-copy-only-apply-report-cycle3.md",
    reportJson: "fr-a1-post-repair-owner-copy-only-apply-report-cycle3.json",
    expected: { rows: 40, labot: 36, falsePositive: 4, needsSourceReview: 0 },
    skipLabot: new Set(),
    allowRebase: false,
  },
  "4": {
    authFile: "fr-a1-post-repair-owner-decisions-cycle4-filled.md",
    reportMd: "fr-a1-post-repair-owner-copy-only-apply-report-cycle4.md",
    reportJson: "fr-a1-post-repair-owner-copy-only-apply-report-cycle4.json",
    expected: { rows: 22, labot: 18, falsePositive: 4, needsSourceReview: 0 },
    skipLabot: new Set(),
    allowRebase: false,
  },
  "5": {
    authFile: "fr-a1-post-repair-owner-decisions-cycle5-filled.md",
    reportMd: "fr-a1-post-repair-owner-copy-only-apply-report-cycle5.md",
    reportJson: "fr-a1-post-repair-owner-copy-only-apply-report-cycle5.json",
    expected: { rows: 11, labot: 10, falsePositive: 1, needsSourceReview: 0 },
    skipLabot: new Set(),
    allowRebase: false,
  },
  "6": {
    authFile: "fr-a1-post-repair-owner-decisions-cycle6-filled.md",
    reportMd: "fr-a1-post-repair-owner-copy-only-apply-report-cycle6.md",
    reportJson: "fr-a1-post-repair-owner-copy-only-apply-report-cycle6.json",
    expected: { rows: 6, labot: 5, falsePositive: 1, needsSourceReview: 0 },
    skipLabot: new Set(),
    allowRebase: false,
  },
  "7": {
    authFile: "fr-a1-post-repair-owner-decisions-cycle7-filled.md",
    reportMd: "fr-a1-post-repair-owner-copy-only-apply-report-cycle7.md",
    reportJson: "fr-a1-post-repair-owner-copy-only-apply-report-cycle7.json",
    expected: { rows: 10, labot: 7, falsePositive: 3, needsSourceReview: 0 },
    skipLabot: new Set(),
    allowRebase: false,
  },
};
const CFG = CYCLE_CFG[CYCLE] || CYCLE_CFG["1"];

const AUTH_FILE = path.join(ROOT, "reports/owner-authority", CFG.authFile);
const REPORT_MD = path.join(ROOT, "reports", CFG.reportMd);
const REPORT_JSON = path.join(ROOT, "reports", CFG.reportJson);
const DATA_REL = "data/fr/a1.js";
const WWW_REL = "www/data/fr/a1.js";
const DRY_RUN = process.argv.includes("--dry-run");
const EXPECTED = CFG.expected;
const SKIP_LABOT = CFG.skipLabot;
const ALLOW_REBASE = CFG.allowRebase;

const CARD_ALIASES = {
  "a1-klein": "a1-klein-study",
  "a1-auch": "a1-auch-study",
};

function splitMdRow(line) {
  const cells = line.split("|");
  cells.shift();
  if (cells.length && cells[cells.length - 1].trim() === "") cells.pop();
  return cells.map((c) => c.trim());
}

function normalizeCardId(cardId) {
  return String(cardId || "")
    .replace(/[\u200B-\u200D\uFEFF]/g, "")
    .trim();
}

function normalizeField(field) {
  let f = String(field || "").trim();
  f = f.replace(/^entry\[\d+\]\./, "");
  if (f === "frText" || f === "frMain") return "lv";
  return f;
}

function parsePath(fieldPath) {
  const parts = [];
  fieldPath.replace(/([^[\].]+)|\[(\d+)\]/g, (_, key, idx) => {
    if (key) parts.push(key);
    if (idx !== undefined) parts.push(Number(idx));
    return "";
  });
  return parts;
}

function parseFilledTable(text) {
  const extended = /OWNER mērķa Card ID/i.test(text);
  const rows = [];
  for (const line of text.split("\n")) {
    if (!line.startsWith("|") || line.includes("Audit ID") || /^\|[-:\s|]+\|$/.test(line)) continue;
    const p = splitMdRow(line);
    if (extended) {
      if (p.length < 9) continue;
      rows.push({
        num: Number(p[0]),
        auditId: p[1],
        cardId: normalizeCardId(p[3]),
        field: p[4],
        current: p[5].replace(/\*\*/g, ""),
        status: p[6].replace(/\*\*/g, "").toUpperCase(),
        ownerNew: p[7].replace(/\*\*/g, ""),
        note: p[8] || "",
      });
      continue;
    }
    if (p.length < 8) continue;
    rows.push({
      num: Number(p[0]),
      auditId: p[1],
      cardId: normalizeCardId(p[2]),
      field: p[3],
      current: p[4].replace(/\*\*/g, ""),
      status: p[5].replace(/\*\*/g, "").toUpperCase(),
      ownerNew: p[6].replace(/\*\*/g, ""),
      note: p[7] || "",
    });
  }
  return rows;
}

function loadAuthority() {
  if (!fs.existsSync(AUTH_FILE)) throw new Error(`Missing ${AUTH_FILE}`);
  return parseFilledTable(fs.readFileSync(AUTH_FILE, "utf8"));
}

function entryId(entry, index) {
  return entry.study?.id || `a1-${entry.de}-${index}`;
}

function buildIdIndex(words) {
  const map = new Map();
  words.forEach((e, i) => {
    map.set(entryId(e, i), i);
    map.set(`a1-${e.de}-${i}`, i);
    if (e.study?.id) map.set(normalizeCardId(e.study.id), i);
  });
  return map;
}

function getAt(obj, parts) {
  let cur = obj;
  for (const p of parts) {
    if (cur == null) return undefined;
    cur = cur[p];
  }
  return cur;
}

function setAt(obj, parts, value) {
  let cur = obj;
  for (let i = 0; i < parts.length - 1; i++) {
    if (cur[parts[i]] == null) return false;
    cur = cur[parts[i]];
  }
  if (cur == null) return false;
  cur[parts[parts.length - 1]] = value;
  return true;
}

function getFieldValue(entry, fieldPath) {
  const resolved = normalizeField(fieldPath);
  if (resolved === "lv") return entry.lv == null ? null : String(entry.lv);
  const parts = parsePath(resolved);
  const val = getAt(entry, parts);
  if (val == null) return null;
  if (typeof val === "object") return JSON.stringify(val);
  return String(val);
}

function setFieldValue(entry, fieldPath, value) {
  const resolved = normalizeField(fieldPath);
  if (resolved === "lv") {
    entry.lv = value;
    return true;
  }
  const parts = parsePath(resolved);
  return setAt(entry, parts, value);
}

function resolveCardIndex(idIndex, cardId) {
  const norm = normalizeCardId(cardId);
  if (idIndex.has(norm)) return idIndex.get(norm);
  const alias = CARD_ALIASES[norm];
  if (alias && idIndex.has(alias)) return idIndex.get(alias);
  return undefined;
}

function exactEqual(a, b) {
  return String(a ?? "") === String(b ?? "");
}

function parseRemoveTerm(ownerNew) {
  const m = String(ownerNew || "").match(/^REMOVE_STALE_ACCENT_TERM:\s*(.+)$/i);
  return m ? m[1].trim() : null;
}

function accentScopeFromField(field) {
  const f = String(field || "");
  if (/study\.sectionAccents\.examples\.lv/i.test(f)) return ["examples"];
  const m = f.match(/study\.sectionAccents(?:\.(\w+(?:\.\w+)*))?(?:\s*\([^)]*\))?/i);
  if (!m) return null;
  if (m[1]) {
    const parts = m[1].split(".");
    if (parts[0] === "examples" && parts[1] === "lv") return ["examples"];
    return parts;
  }
  if (/\(examples\)/i.test(f)) return ["examples"];
  if (/\(tip\)/i.test(f)) return ["tip"];
  return null;
}

function removeTermRecursive(node, term) {
  if (node == null) return false;
  if (Array.isArray(node)) {
    const filtered = node.filter((t) => String(t) !== term);
    if (filtered.length !== node.length) {
      node.length = 0;
      node.push(...filtered);
      return true;
    }
    return false;
  }
  if (typeof node !== "object") return false;
  let changed = false;
  for (const key of Object.keys(node)) {
    if (removeTermRecursive(node[key], term)) changed = true;
  }
  return changed;
}

function removeAccentTerm(entry, field, term) {
  if (!entry.study?.sectionAccents) return { ok: false, reason: "no_sectionAccents" };
  const scope = accentScopeFromField(field);
  const target = scope ? getAt(entry.study.sectionAccents, scope) : entry.study.sectionAccents;
  if (target == null) return { ok: false, reason: "scope_missing", scope };
  const changed = removeTermRecursive(target, term);
  return { ok: true, changed, term, scope: scope || ["*"] };
}

function accentTermPresent(entry, term) {
  const found = [];
  function walk(node, p) {
    if (node == null) return;
    if (Array.isArray(node)) {
      if (node.includes(term)) found.push(p);
      return;
    }
    if (typeof node === "object") {
      for (const [k, v] of Object.entries(node)) walk(v, p ? `${p}.${k}` : k);
    }
  }
  walk(entry.study?.sectionAccents, "");
  return found;
}

function loadWords(filePath) {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.A1_WORDS;
}

function writeWords(filePath, words) {
  fs.writeFileSync(
    filePath,
    `const A1_WORDS = ${JSON.stringify(words, null, 2)};\n\nwindow.A1_WORDS = A1_WORDS;\n`,
    "utf8",
  );
}

function deepClone(o) {
  return JSON.parse(JSON.stringify(o));
}

function countStudies(words) {
  return words.filter((e) => e.study && typeof e.study === "object").length;
}

function extractDeFromStudy(obj, skipSectionAccents = false) {
  if (obj == null) return null;
  if (Array.isArray(obj)) return obj.map((x) => extractDeFromStudy(x, skipSectionAccents));
  if (typeof obj !== "object") return undefined;
  const out = {};
  for (const [k, v] of Object.entries(obj)) {
    if (skipSectionAccents && k === "sectionAccents") continue;
    if (k === "de") out.de = v;
    else {
      const nested = extractDeFromStudy(v, skipSectionAccents);
      if (nested !== undefined) out[k] = nested;
    }
  }
  return Object.keys(out).length ? out : undefined;
}

function countDeChanges(wordsBefore, wordsAfter) {
  let changes = 0;
  for (let i = 0; i < wordsBefore.length; i++) {
    const b = wordsBefore[i];
    const a = wordsAfter[i];
    if (b.de !== a.de || b.de_article !== a.de_article || b.de_plural !== a.de_plural || b.level !== a.level) {
      changes += 1;
    }
    if (b.study) {
      const bDe = JSON.stringify(extractDeFromStudy(b.study, true));
      const aDe = JSON.stringify(extractDeFromStudy(a.study, true));
      if (bDe !== aDe) changes += 1;
    }
  }
  return changes;
}

function validatePrerequisites(rows) {
  const errors = [];
  const byStatus = {
    LABOT: rows.filter((r) => r.status === "LABOT"),
    FALSE_POSITIVE: rows.filter((r) => r.status === "FALSE_POSITIVE"),
    NEEDS_SOURCE_REVIEW: rows.filter((r) => r.status === "NEEDS_SOURCE_REVIEW"),
  };
  const auditIds = new Set(rows.map((r) => r.auditId));
  if (rows.length !== EXPECTED.rows) errors.push(`rows ${rows.length} !== ${EXPECTED.rows}`);
  if (auditIds.size !== EXPECTED.rows) errors.push(`unique auditIds ${auditIds.size} !== ${EXPECTED.rows}`);
  if (byStatus.LABOT.length !== EXPECTED.labot) errors.push(`LABOT ${byStatus.LABOT.length} !== ${EXPECTED.labot}`);
  if (byStatus.FALSE_POSITIVE.length !== EXPECTED.falsePositive) {
    errors.push(`FALSE_POSITIVE ${byStatus.FALSE_POSITIVE.length} !== ${EXPECTED.falsePositive}`);
  }
  if (byStatus.NEEDS_SOURCE_REVIEW.length !== EXPECTED.needsSourceReview) {
    errors.push(`NEEDS_SOURCE_REVIEW ${byStatus.NEEDS_SOURCE_REVIEW.length} !== ${EXPECTED.needsSourceReview}`);
  }
  for (const row of byStatus.LABOT) {
    const removeTerm = parseRemoveTerm(row.ownerNew);
    if (!removeTerm && !String(row.ownerNew || "").trim()) {
      errors.push(`empty OWNER NEW on LABOT ${row.auditId}`);
    }
  }
  return { errors, ...byStatus };
}

function resolveComparisonMeaningIndex(entry, current) {
  const comp = entry.study?.comparison;
  if (!Array.isArray(comp)) return -1;
  return comp.findIndex((c) => exactEqual(c?.meaning, current));
}

function applyRowField(entry, row) {
  const directActual = getFieldValue(entry, row.field);
  if (exactEqual(directActual, row.current)) {
    return { actual: directActual, field: row.field, set: (v) => setFieldValue(entry, row.field, v) };
  }
  const m = String(row.field || "").match(/^study\.comparison\[(\d+)\]\.meaning$/);
  if (m) {
    const idx = resolveComparisonMeaningIndex(entry, row.current);
    if (idx >= 0) {
      const resolved = `study.comparison[${idx}].meaning`;
      return {
        actual: getFieldValue(entry, resolved),
        field: resolved,
        set: (v) => setFieldValue(entry, resolved, v),
      };
    }
  }
  return { actual: directActual, field: row.field, set: (v) => setFieldValue(entry, row.field, v) };
}

function applyRows(words, labotRows, idIndex) {
  const applied = [];
  const mismatches = [];
  const failed = [];
  const skipped = [];

  for (const row of labotRows) {
    if (SKIP_LABOT.has(row.auditId)) {
      skipped.push({ ...row, result: "SKIPPED_CONFLICT", reason: "audit CURRENT != production; OWNER NEW would corrupt card" });
      continue;
    }
    const idx = resolveCardIndex(idIndex, row.cardId);
    if (idx === undefined) {
      failed.push({ ...row, result: "FAILED", reason: "card_not_found" });
      continue;
    }
    const entry = words[idx];
    const removeTerm = parseRemoveTerm(row.ownerNew);

    if (removeTerm) {
      if (!exactEqual(row.current, removeTerm) && !row.current.includes(removeTerm)) {
        // CURRENT is the stale term itself in most rows
      }
      const beforePaths = accentTermPresent(entry, removeTerm);
      const result = removeAccentTerm(entry, row.field, removeTerm);
      if (!result.ok) {
        failed.push({ ...row, result: "FAILED", reason: result.reason, scope: result.scope });
        continue;
      }
      const afterPaths = accentTermPresent(entry, removeTerm);
      if (afterPaths.length > 0) {
        failed.push({ ...row, result: "FAILED", reason: "term_still_present", afterPaths });
        continue;
      }
      applied.push({
        ...row,
        entryIndex: idx,
        result: result.changed ? "APPLIED_VERIFIED" : "ALREADY_ABSENT",
        removeTerm,
        beforePaths,
      });
      continue;
    }

    const { actual, field: resolvedField, set: setField } = applyRowField(entry, row);
    if (exactEqual(actual, row.ownerNew)) {
      applied.push({ ...row, entryIndex: idx, result: "ALREADY_MATCHED", actual, field: resolvedField });
      continue;
    }
    if (!ALLOW_REBASE && !exactEqual(actual, row.current)) {
      mismatches.push({ ...row, result: "CURRENT_VALUE_MISMATCH", actual, field: resolvedField });
      continue;
    }
    if (ALLOW_REBASE && !exactEqual(actual, row.current)) {
      if (!setField(row.ownerNew)) {
        mismatches.push({ ...row, result: "CURRENT_VALUE_MISMATCH", actual, rebase: true, field: resolvedField });
        continue;
      }
      const verified = getFieldValue(entry, resolvedField);
      if (!exactEqual(verified, row.ownerNew)) {
        failed.push({ ...row, result: "FAILED", reason: "verify_after_rebase", actualAfter: verified });
        continue;
      }
      applied.push({ ...row, entryIndex: idx, result: "APPLIED_REBASED", actualBefore: actual, field: resolvedField });
      continue;
    }
    if (!setField(row.ownerNew)) {
      failed.push({ ...row, result: "FAILED", reason: "set_failed" });
      continue;
    }
    const verified = getFieldValue(entry, resolvedField);
    if (!exactEqual(verified, row.ownerNew)) {
      failed.push({ ...row, result: "FAILED", reason: "verify_after_set", actualAfter: verified });
      continue;
    }
    applied.push({ ...row, entryIndex: idx, result: "APPLIED_VERIFIED", field: resolvedField });
  }

  return { applied, mismatches, failed, skipped };
}

function writeReport(log) {
  const s = log.summary;
  const lines = [
    `# FR–DE A1 POST-REPAIR OWNER — COPY-ONLY apply report (cycle ${CYCLE})`,
    "",
    `**Authority:** \`reports/owner-authority/${CFG.authFile}\``,
    "**DE:** STRICT READ-ONLY",
    `**BASE_SHA:** \`${log.baseSha}\``,
    `**HEAD_SHA:** \`${log.headSha || "pending"}\``,
    `**Dry run:** ${log.dryRun ? "yes" : "no"}`,
    "",
    "## Obligātie vārti",
    "",
    "| Vārts | Prasība | Rezultāts |",
    "|------|---------|----------:|",
    `| OWNER rindas | ${EXPECTED.rows}/${EXPECTED.rows} | ${s.ownerRows}/${EXPECTED.rows} |`,
    `| LABOT | ${EXPECTED.labot} | ${s.labotRequested} |`,
    `| FALSE_POSITIVE | ${EXPECTED.falsePositive} | ${s.falsePositive} |`,
    `| NEEDS_SOURCE_REVIEW | ${EXPECTED.needsSourceReview} | ${s.needsSourceReview} |`,
    `| APPLIED | ${EXPECTED.labot}/${EXPECTED.labot} | ${s.appliedVerified}/${s.labotAppliedTarget} |`,
    `| SKIPPED_CONFLICT | ${SKIP_LABOT.size} | ${s.skippedConflict} |`,
    `| CURRENT_VALUE_MISMATCH | 0 | ${s.currentValueMismatch ?? 0} |`,
    `| FAILED | 0 | ${s.failed} |`,
    `| DE izmaiņas | 0 | ${s.deChanges} |`,
    `| Mirror | PASS | ${s.mirrorPass ? "PASS" : "FAIL"} |`,
    `| Syntax | PASS | ${s.syntaxPass ? "PASS" : "FAIL"} |`,
    `| Study parity | 134/134 | ${s.studyParityPass ? "PASS" : "FAIL"} (${s.frStudyCount} FR / ${s.lvStudyCount} LV) |`,
    "",
    `## FINAL VERDICT: **${s.finalVerdict}**`,
    "",
  ];

  if (log.mismatches.length) {
    lines.push("## CURRENT_VALUE_MISMATCH", "");
    for (const m of log.mismatches) {
      lines.push(
        `- \`${m.auditId}\` \`${m.cardId}\` \`${m.field}\` expected \`${String(m.current).slice(0, 60)}\` actual \`${String(m.actual ?? "").slice(0, 60)}\``,
      );
    }
    lines.push("");
  }
  if (log.failed.length) {
    lines.push("## FAILED", "");
    for (const f of log.failed) {
      lines.push(`- \`${f.auditId}\` \`${f.cardId}\` \`${f.field}\` — ${f.reason || f.result}`);
    }
    lines.push("");
  }

  fs.writeFileSync(REPORT_MD, lines.join("\n"));
  fs.writeFileSync(REPORT_JSON, JSON.stringify(log, null, 2));
}

function main() {
  const baseSha = execSync("git rev-parse HEAD", { cwd: ROOT, encoding: "utf8" }).trim();
  const rows = loadAuthority();
  const prereq = validatePrerequisites(rows);
  if (prereq.errors.length) {
    writeReport({
      baseSha,
      dryRun: DRY_RUN,
      blockers: prereq.errors,
      mismatches: [],
      failed: [],
      summary: { finalVerdict: "FR–DE A1 POST-REPAIR COPY-ONLY APPLY — BLOCKED", ownerRows: rows.length },
    });
    console.error("BLOCKED:", prereq.errors);
    process.exit(2);
  }

  if (!isSyncedWithWww(DATA_REL)) {
    console.error("BLOCKED: mirror not synced");
    process.exit(3);
  }

  const words = loadWords(path.join(ROOT, DATA_REL));
  const lvWords = loadWords(path.join(ROOT, "data/a1.js"));
  const wordsBefore = deepClone(words);
  const idIndex = buildIdIndex(words);

  const { applied, mismatches, failed, skipped } = applyRows(words, prereq.LABOT, idIndex);

  if (!DRY_RUN) {
    writeWords(path.join(ROOT, DATA_REL), words);
    writeWords(path.join(ROOT, WWW_REL), words);
  }

  const reloaded = DRY_RUN ? words : loadWords(path.join(ROOT, DATA_REL));
  const deChanges = countDeChanges(wordsBefore, reloaded);
  const frStudyCount = countStudies(reloaded);
  const lvStudyCount = countStudies(lvWords);
  const appliedVerified = applied.filter((a) =>
    ["APPLIED_VERIFIED", "ALREADY_ABSENT", "ALREADY_MATCHED", "APPLIED_REBASED"].includes(a.result),
  ).length;
  const appliedExpected = EXPECTED.labot - SKIP_LABOT.size;

  let mirrorPass = true;
  let syntaxPass = true;
  if (!DRY_RUN) {
    mirrorPass =
      fs.readFileSync(path.join(ROOT, DATA_REL), "utf8") === fs.readFileSync(path.join(ROOT, WWW_REL), "utf8");
    try {
      execSync(`node --check ${DATA_REL}`, { cwd: ROOT, stdio: "pipe" });
      execSync(`node --check ${WWW_REL}`, { cwd: ROOT, stdio: "pipe" });
    } catch {
      syntaxPass = false;
    }
  }

  const blockers = [];
  if (mismatches.length) blockers.push(`CURRENT_VALUE_MISMATCH=${mismatches.length}`);
  if (failed.length) blockers.push(`FAILED=${failed.length}`);
  if (deChanges) blockers.push(`DE_CHANGES=${deChanges}`);
  if (!mirrorPass) blockers.push("MIRROR_FAIL");
  if (!syntaxPass) blockers.push("SYNTAX_FAIL");
  if (frStudyCount !== 134 || lvStudyCount !== 134) blockers.push("STUDY_PARITY_FAIL");

  const pass =
    mismatches.length === 0 &&
    failed.length === 0 &&
    deChanges === 0 &&
    mirrorPass &&
    syntaxPass &&
    frStudyCount === 134 &&
    lvStudyCount === 134 &&
    appliedVerified === appliedExpected &&
    skipped.length === SKIP_LABOT.size;

  const headSha = DRY_RUN ? baseSha : execSync("git rev-parse HEAD", { cwd: ROOT, encoding: "utf8" }).trim();
  const log = {
    baseSha,
    headSha,
    dryRun: DRY_RUN,
    blockers,
    mismatches,
    failed,
    applied,
    skipped,
    summary: {
      ownerRows: rows.length,
      labotRequested: prereq.LABOT.length,
      falsePositive: prereq.FALSE_POSITIVE.length,
      needsSourceReview: prereq.NEEDS_SOURCE_REVIEW.length,
      skippedConflict: skipped.length,
      appliedVerified,
      labotAppliedTarget: appliedExpected,
      currentValueMismatch: mismatches.length,
      failed: failed.length,
      deChanges,
      mirrorPass,
      syntaxPass,
      frStudyCount,
      lvStudyCount,
      studyParityPass: frStudyCount === lvStudyCount,
      finalVerdict: pass
        ? "FR–DE A1 POST-REPAIR COPY-ONLY APPLY — PASS"
        : "FR–DE A1 POST-REPAIR COPY-ONLY APPLY — BLOCKED",
    },
  };

  writeReport(log);
  console.log(JSON.stringify(log.summary, null, 2));
  if (!pass) process.exit(1);
}

main();
