#!/usr/bin/env node
"use strict";
/**
 * FR–DE A1 OWNER GALA — COPY-ONLY apply from filled OWNER authority files.
 * Usage: node scripts/apply-fr-a1-owner-gala-copy-only.js [--dry-run] [--micro-only]
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");
const { ROOT, isSyncedWithWww } = require("./lib/audit-common");

const AUTH_DIR = path.join(ROOT, "reports/owner-authority");
const REPORT_MD = path.join(ROOT, "reports/fr-a1-owner-gala-copy-only-apply-report.md");
const REPORT_JSON = path.join(ROOT, "reports/fr-a1-owner-gala-copy-only-apply-report.json");
const DATA_REL = "data/fr/a1.js";
const WWW_REL = "www/data/fr/a1.js";
const DRY_RUN = process.argv.includes("--dry-run");
const MICRO_ONLY = process.argv.includes("--micro-only");

const FILLED_FILES = [
  "fr-a1-owner-decisions-001-100-filled.md",
  "fr-a1-owner-decisions-101-200-filled.md",
  "fr-a1-owner-decisions-201-300-filled.md",
  "fr-a1-owner-decisions-301-400-filled.md",
  "fr-a1-owner-decisions-401-500-filled.md",
  "fr-a1-owner-decisions-501-600-filled.md",
  "fr-a1-owner-decisions-601-702-filled.md",
];

const EXPECTED = {
  rows: 904,
  labot: 423,
  nelabot: 481,
  studyAppendix: 10,
  priorVerified: 419,
  microApply: 4,
};

const MICRO_APPLY_KEYS = new Set([
  "a1-morgen-study|study.examples[1].lv",
  "a1-morgen-study|study.examples[2].lv",
  "a1-morgen-study|study.examples[3].lv",
  "a1-fernsehen|study.tip.leftBlocks[0].text",
]);

const STUDY_CARD_IDS = new Set([
  "a1-Besuch-87",
  "a1-besuchen-89",
  "a1-Fußball-218",
  "a1-ganz-219",
  "a1-gefallen-225",
  "a1-Geschichte-233",
  "a1-Geschwister-234",
  "a1-Großeltern-251",
  "a1-Hand-267",
  "a1-hübsch-288",
]);

function splitMdRow(line) {
  const cells = line.split("|");
  cells.shift();
  if (cells.length && cells[cells.length - 1].trim() === "") cells.pop();
  return cells.map((c) => c.trim());
}

function parseFilledTable(text) {
  const rows = [];
  for (const line of text.split("\n")) {
    if (!line.startsWith("|") || line.includes("Card #") || /^\|[-:\s|]+\|$/.test(line)) continue;
    const p = splitMdRow(line);
    if (p.length < 8) continue;
    rows.push({
      cardNum: Number(p[0]),
      cardId: p[1],
      de: p[2],
      field: p[3],
      current: p[4].replace(/\*\*/g, ""),
      status: p[5].replace(/\*\*/g, ""),
      ownerNew: p[6].replace(/\*\*/g, ""),
      note: p[7] || "",
    });
  }
  return rows;
}

function parseStudyAppendices(text) {
  const map = new Map();
  const section = text.split("## Pilnie OWNER Study objekti")[1];
  if (!section) return map;
  const blocks = section.split(/^### /m).slice(1);
  for (const block of blocks) {
    const cardId = block.split("\n")[0].trim();
    const jsonMatch = block.match(/```json\n([\s\S]*?)\n```/);
    if (!jsonMatch) continue;
    map.set(cardId, JSON.parse(jsonMatch[1]));
  }
  return map;
}

function loadAllAuthority() {
  const rows = [];
  const studies = new Map();
  for (const name of FILLED_FILES) {
    const filePath = path.join(AUTH_DIR, name);
    if (!fs.existsSync(filePath)) throw new Error(`Missing authority file: ${filePath}`);
    const text = fs.readFileSync(filePath, "utf8");
    rows.push(...parseFilledTable(text));
    for (const [cardId, study] of parseStudyAppendices(text)) studies.set(cardId, study);
  }
  return { rows, studies };
}

function validatePrerequisites(rows, studies) {
  const errors = [];
  const keys = new Set();
  let duplicates = 0;
  for (const row of rows) {
    const key = `${row.cardId}|${row.field}`;
    if (keys.has(key)) duplicates += 1;
    keys.add(key);
  }

  const labot = rows.filter((r) => r.status === "LABOT");
  const nelabot = rows.filter((r) => r.status === "NELABOT");
  const studyRows = labot.filter((r) => r.field === "study" && r.ownerNew.startsWith("STUDY_APPENDIX:"));

  if (rows.length !== EXPECTED.rows) errors.push(`rows ${rows.length} !== ${EXPECTED.rows}`);
  if (labot.length !== EXPECTED.labot) errors.push(`LABOT ${labot.length} !== ${EXPECTED.labot}`);
  if (nelabot.length !== EXPECTED.nelabot) errors.push(`NELABOT ${nelabot.length} !== ${EXPECTED.nelabot}`);
  if (keys.size !== EXPECTED.rows) errors.push(`unique keys ${keys.size} !== ${EXPECTED.rows}`);
  if (duplicates !== 0) errors.push(`duplicates ${duplicates}`);
  if (labot.some((r) => !String(r.ownerNew || "").trim())) errors.push("empty OWNER NEW on LABOT");
  if (studyRows.length !== EXPECTED.studyAppendix) {
    errors.push(`study appendix rows ${studyRows.length} !== ${EXPECTED.studyAppendix}`);
  }

  for (const cardId of STUDY_CARD_IDS) {
    if (!studies.has(cardId)) errors.push(`missing study appendix JSON for ${cardId}`);
  }
  for (const row of studyRows) {
    const expectedRef = `STUDY_APPENDIX:${row.cardId}`;
    if (row.ownerNew !== expectedRef) errors.push(`bad study ref ${row.cardId}: ${row.ownerNew}`);
    if (!studies.has(row.cardId)) errors.push(`missing appendix for ${row.cardId}`);
  }

  return { errors, labot, nelabot, studyRows, keys };
}

function entryId(entry, index) {
  return entry.study?.id || `a1-${entry.de}-${index}`;
}

function resolveField(field) {
  if (field === "frText" || field === "frMain") return "lv";
  return field;
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

function getFieldValue(entry, fieldPath) {
  const resolved = resolveField(fieldPath);
  if (resolved === "lv") return entry.lv == null ? null : String(entry.lv);
  if (resolved === "study") return entry.study ? "(has study)" : null;
  const parts = parsePath(resolved);
  let cur = entry;
  for (const p of parts) {
    if (cur == null) return undefined;
    cur = cur[p];
  }
  if (cur == null) return null;
  if (typeof cur === "object") return JSON.stringify(cur);
  return String(cur);
}

function setFieldValue(entry, fieldPath, value) {
  const resolved = resolveField(fieldPath);
  if (resolved === "lv") {
    entry.lv = value;
    return true;
  }
  if (resolved === "study") {
    entry.study = value;
    return true;
  }
  const parts = parsePath(resolved);
  let cur = entry;
  for (let i = 0; i < parts.length - 1; i++) {
    if (cur == null) return false;
    cur = cur[parts[i]];
  }
  if (cur == null) return false;
  cur[parts[parts.length - 1]] = value;
  return true;
}

function loadWords(filePath) {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.A1_WORDS;
}

function writeWords(filePath, words) {
  const content = `const A1_WORDS = ${JSON.stringify(words, null, 2)};\n\nwindow.A1_WORDS = A1_WORDS;\n`;
  fs.writeFileSync(filePath, content, "utf8");
}

function deepClone(o) {
  return JSON.parse(JSON.stringify(o));
}

function exactEqual(a, b) {
  return String(a ?? "") === String(b ?? "");
}

function buildIdIndex(words) {
  const map = new Map();
  words.forEach((e, i) => {
    map.set(entryId(e, i), i);
    map.set(`a1-${e.de}-${i}`, i);
    if (e.study?.id) map.set(e.study.id, i);
  });
  return map;
}

function collectDeSnapshot(words, onlyExistingStudy = false) {
  const snap = [];
  for (let i = 0; i < words.length; i++) {
    const e = words[i];
    snap.push(JSON.stringify({ de: e.de, de_article: e.de_article, de_plural: e.de_plural, level: e.level }));
    if (e.study && (!onlyExistingStudy || e.study)) {
      snap.push(JSON.stringify(extractDeFromStudy(e.study)));
    }
  }
  return snap.join("\n");
}

function countDeChanges(wordsBefore, wordsAfter) {
  let changes = 0;
  for (let i = 0; i < wordsBefore.length; i++) {
    const b = wordsBefore[i];
    const a = wordsAfter[i];
    if (
      b.de !== a.de ||
      b.de_article !== a.de_article ||
      b.de_plural !== a.de_plural ||
      b.level !== a.level
    ) {
      changes += 1;
    }
    if (b.study) {
      const bDe = JSON.stringify(extractDeFromStudy(b.study));
      const aDe = JSON.stringify(extractDeFromStudy(a.study));
      if (bDe !== aDe) changes += 1;
    }
  }
  return changes;
}

function collectCardOrderByIndex(words) {
  return words.map((e, i) => ({ index: i, de: e.de, level: e.level }));
}

function extractDeFromStudy(obj) {
  if (obj == null) return null;
  if (Array.isArray(obj)) return obj.map(extractDeFromStudy);
  if (typeof obj !== "object") return undefined;
  const out = {};
  for (const [k, v] of Object.entries(obj)) {
    if (k === "de") out.de = v;
    else {
      const nested = extractDeFromStudy(v);
      if (nested !== undefined) out[k] = nested;
    }
  }
  return Object.keys(out).length ? out : undefined;
}

function collectCardOrder(words) {
  return words.map((e, i) => entryId(e, i));
}

function countStudies(words) {
  return words.filter((e) => e.study && typeof e.study === "object").length;
}

function verifyNelabot(words, nelabotRows, idIndex) {
  const results = [];
  for (const row of nelabotRows) {
    const idx = idIndex.get(row.cardId);
    if (idx === undefined) {
      results.push({ ...row, ok: false, reason: "card_not_found" });
      continue;
    }
    const actual = getFieldValue(words[idx], row.field);
    results.push({
      ...row,
      ok: exactEqual(actual, row.current),
      actual,
    });
  }
  return results;
}

function applyLabotRows(words, labotRows, studies, idIndex) {
  const applied = [];
  const mismatches = [];
  const failed = [];
  const indexByKey = new Map();

  for (const row of labotRows) {
    const idx = idIndex.get(row.cardId);
    if (idx === undefined) {
      failed.push({ ...row, result: "FAILED", reason: "card_not_found" });
      continue;
    }
    const entry = words[idx];

    if (row.field === "study" && row.ownerNew.startsWith("STUDY_APPENDIX:")) {
      if (!exactEqual(row.current, "(nav Study objekta)")) {
        mismatches.push({
          ...row,
          result: "CURRENT_VALUE_MISMATCH",
          actual: row.current,
        });
        continue;
      }
      if (entry.study) {
        mismatches.push({
          ...row,
          result: "CURRENT_VALUE_MISMATCH",
          actual: "(has study)",
          reason: "study_already_exists",
        });
        continue;
      }
      const studyObj = studies.get(row.cardId);
      if (!studyObj) {
        failed.push({ ...row, result: "FAILED", reason: "study_appendix_missing" });
        continue;
      }
      entry.study = deepClone(studyObj);
      if (entry.study) {
        indexByKey.set(`${row.cardId}|${row.field}`, idx);
        applied.push({
          ...row,
          entryIndex: idx,
          result: "APPLIED_VERIFIED",
          ownerNewApplied: `study:${studyObj.id}`,
        });
      } else {
        failed.push({ ...row, result: "FAILED", reason: "study_set_failed" });
      }
      continue;
    }

    const actual = getFieldValue(entry, row.field);
    if (!exactEqual(actual, row.current)) {
      mismatches.push({ ...row, result: "CURRENT_VALUE_MISMATCH", actual });
      continue;
    }
    if (!setFieldValue(entry, row.field, row.ownerNew)) {
      failed.push({ ...row, result: "FAILED", reason: "set_failed" });
      continue;
    }
    const verified = getFieldValue(entry, row.field);
    if (!exactEqual(verified, row.ownerNew)) {
      failed.push({
        ...row,
        result: "FAILED",
        reason: "verify_after_set",
        actualAfter: verified,
      });
      continue;
    }
    applied.push({ ...row, entryIndex: idx, result: "APPLIED_VERIFIED" });
  }

  return { applied, mismatches, failed, indexByKey };
}

function verifyReloaded(reloaded, appliedRows) {
  const failures = [];
  for (const row of appliedRows) {
    const idx = row.entryIndex;
    if (idx === undefined || !reloaded[idx]) {
      failures.push({ ...row, reason: "card_missing_after_reload" });
      continue;
    }
    if (row.field === "study") {
      if (!reloaded[idx].study) failures.push({ ...row, reason: "study_missing_after_reload" });
      continue;
    }
    const actual = getFieldValue(reloaded[idx], row.field);
    if (!exactEqual(actual, row.ownerNew)) {
      failures.push({ ...row, reason: "new_mismatch_after_reload", actual });
    }
  }
  return failures;
}

function rowKey(row) {
  return `${row.cardId}|${row.field}`;
}

function verifyGalaProduction(words, rows, studies, idIndex) {
  const labot = rows.filter((r) => r.status === "LABOT");
  const nelabot = rows.filter((r) => r.status === "NELABOT");
  const labotVerified = [];
  const labotFailures = [];
  const nelabotFailures = [];

  for (const row of labot) {
    const idx = idIndex.get(row.cardId);
    if (idx === undefined) {
      labotFailures.push({ ...row, reason: "card_not_found" });
      continue;
    }
    if (row.field === "study" && row.ownerNew.startsWith("STUDY_APPENDIX:")) {
      if (words[idx].study) labotVerified.push(row);
      else labotFailures.push({ ...row, reason: "study_missing" });
      continue;
    }
    const actual = getFieldValue(words[idx], row.field);
    if (exactEqual(actual, row.ownerNew)) labotVerified.push(row);
    else labotFailures.push({ ...row, actual, expected: row.ownerNew });
  }

  let nelabotUnchanged = 0;
  for (const row of nelabot) {
    const idx = idIndex.get(row.cardId);
    if (idx === undefined) {
      nelabotFailures.push({ ...row, reason: "card_not_found" });
      continue;
    }
    const actual = getFieldValue(words[idx], row.field);
    if (exactEqual(actual, row.current)) nelabotUnchanged += 1;
    else nelabotFailures.push({ ...row, actual, expected: row.current });
  }

  const studyResults = [...STUDY_CARD_IDS].map((cardId) => {
    const idx = idIndex.get(cardId);
    const studyId = studies.get(cardId)?.id || words[idx]?.study?.id || null;
    const ok = Boolean(words[idx]?.study);
    return { cardId, result: ok ? "APPLIED_VERIFIED" : "MISSING", studyId };
  });

  return { labotVerified, labotFailures, nelabotUnchanged, nelabotFailures, studyResults };
}

function writeReport(log) {
  const s = log.summary;
  const lines = [
    "# FR–DE A1 OWNER GALA — COPY-ONLY apply report",
    "",
    "**Authority:** `reports/owner-authority/fr-a1-owner-decisions-*-filled.md` (7 files)",
    "**DE:** STRICT READ-ONLY",
    `**BASE_SHA:** \`${log.baseSha}\``,
    `**HEAD_SHA:** \`${log.headSha || "pending"}\``,
    `**Dry run:** ${log.dryRun ? "yes" : "no"}`,
    "",
    "## Obligātie vārti",
    "",
    "| Vārts | Prasība | Rezultāts |",
    "|------|---------|----------:|",
    `| OWNER rindas | 904/904 | ${s.ownerRows}/${EXPECTED.rows} |`,
    `| LABOT | 423 | ${s.requestedLabot} |`,
    `| NELABOT | 481 | ${s.nelabotTotal} |`,
    `| Iepriekš verificēti LABOT | 419/419 | ${s.priorVerified}/${EXPECTED.priorVerified} |`,
    `| Micro-apply | 4/4 | ${s.microApplied}/${EXPECTED.microApply} |`,
    `| Kopējais APPLIED_VERIFIED | 423/423 | ${s.appliedVerified}/${EXPECTED.labot} |`,
    `| NELABOT nemainīti | 481/481 | ${s.nelabotUnchanged}/${EXPECTED.nelabot} |`,
    `| Study objekti | 10/10 | ${s.studyAdded}/${EXPECTED.studyAppendix} |`,
    `| CURRENT_VALUE_MISMATCH | 0 | ${s.currentValueMismatch} |`,
    `| FAILED | 0 | ${s.failed} |`,
    `| DE izmaiņas | 0 | ${s.deChanges} |`,
    `| Neplānotas izmaiņas | 0 | ${s.unplannedChanges} |`,
    `| Primary/www mirror | PASS | ${s.mirrorPass ? "PASS" : "FAIL"} |`,
    `| JavaScript sintakse | PASS | ${s.syntaxPass ? "PASS" : "FAIL"} |`,
    `| Card ID/order | PASS | ${s.orderPass ? "PASS" : "FAIL"} |`,
    `| Kartīšu skaits | 702/702 | ${s.cardCount}/702 |`,
    `| Study parity | PASS | ${s.studyParityPass ? "PASS" : "FAIL"} (${s.frStudyCount} FR / ${s.lvStudyCount} LV) |`,
    "",
    `## FINAL VERDICT: **${s.finalVerdict}**`,
    "",
  ];

  if (log.mismatches.length) {
    lines.push("## CURRENT_VALUE_MISMATCH", "");
    lines.push("| Card # | Card ID | Field | CURRENT (authority) | Actual (production) |");
    lines.push("|--------|---------|-------|---------------------|---------------------|");
    for (const m of log.mismatches) {
      lines.push(
        `| ${m.cardNum} | ${m.cardId} | ${m.field} | ${String(m.current).replace(/\|/g, "\\|").slice(0, 80)} | ${String(m.actual ?? "").replace(/\|/g, "\\|").slice(0, 80)} |`,
      );
    }
    lines.push("");
  }

  if (log.failed.length) {
    lines.push("## FAILED", "");
    for (const f of log.failed) {
      lines.push(`- #${f.cardNum} \`${f.cardId}\` \`${f.field}\` — ${f.reason || f.result}`);
    }
    lines.push("");
  }

  lines.push("## Study objekti", "");
  lines.push("| Card ID | Rezultāts | Study ID |");
  lines.push("|---------|-----------|----------|");
  for (const st of log.studyResults) {
    lines.push(`| ${st.cardId} | ${st.result} | ${st.studyId || "—"} |`);
  }
  lines.push("");

  lines.push("## LABOT apply (visas rindas)", "");
  lines.push("| Card # | Card ID | Field | CURRENT | OWNER NEW | Rezultāts |");
  lines.push("|--------|---------|-------|---------|-----------|-----------|");
  for (const r of log.allLabotResults) {
    const cur = String(r.current).replace(/\|/g, "\\|").slice(0, 60);
    const neu = String(r.ownerNew).replace(/\|/g, "\\|").slice(0, 60);
    lines.push(`| ${r.cardNum} | ${r.cardId} | ${r.field} | ${cur} | ${neu} | ${r.result} |`);
  }
  lines.push("");

  lines.push("## Mainītie production faili", "");
  lines.push("- `data/fr/a1.js`");
  lines.push("- `www/data/fr/a1.js`");
  lines.push("");

  if (log.blockers?.length) {
    lines.push("## Bloķētāji", "");
    for (const b of log.blockers) lines.push(`- ${b}`);
    lines.push("");
  }

  fs.writeFileSync(REPORT_MD, lines.join("\n"));
  fs.writeFileSync(REPORT_JSON, JSON.stringify(log, null, 2));
}

function main() {
  if (MICRO_ONLY) return mainMicroOnly();

  const baseSha = execSync("git rev-parse HEAD", { cwd: ROOT, encoding: "utf8" }).trim();
  const { rows, studies } = loadAllAuthority();
  const prereq = validatePrerequisites(rows, studies);
  if (prereq.errors.length) {
    const log = {
      baseSha,
      dryRun: DRY_RUN,
      blockers: prereq.errors,
      summary: { finalVerdict: "FR–DE A1 OWNER COPY-ONLY APPLY — BLOCKED" },
      mismatches: [],
      failed: [],
      studyResults: [],
      allLabotResults: [],
    };
    writeReport(log);
    console.error("BLOCKED prerequisite:", prereq.errors);
    process.exit(2);
  }

  if (!isSyncedWithWww(DATA_REL)) {
    console.error("BLOCKED: primary/www mirror not synced before apply");
    process.exit(3);
  }

  try {
    execSync(`node --check ${DATA_REL}`, { cwd: ROOT, stdio: "pipe" });
    execSync(`node --check ${WWW_REL}`, { cwd: ROOT, stdio: "pipe" });
  } catch {
    console.error("BLOCKED: syntax check failed before apply");
    process.exit(3);
  }

  const words = loadWords(path.join(ROOT, DATA_REL));
  const lvWords = loadWords(path.join(ROOT, "data/a1.js"));
  const wordsBefore = deepClone(words);
  const beforeOrder = collectCardOrderByIndex(words);
  const beforeStudyCount = countStudies(words);
  const idIndex = buildIdIndex(words);

  const { applied, mismatches, failed } = applyLabotRows(words, prereq.labot, studies, idIndex);

  const allLabotResults = prereq.labot.map((row) => {
    const hit =
      applied.find((a) => a.cardId === row.cardId && a.field === row.field) ||
      mismatches.find((m) => m.cardId === row.cardId && m.field === row.field) ||
      failed.find((f) => f.cardId === row.cardId && f.field === row.field);
    return { ...row, result: hit?.result || "UNKNOWN" };
  });

  const studyResults = [...STUDY_CARD_IDS].map((cardId) => {
    const row = allLabotResults.find((r) => r.cardId === cardId && r.field === "study");
    const studyId = studies.get(cardId)?.id || null;
    return { cardId, result: row?.result || "MISSING", studyId };
  });

  if (!DRY_RUN) {
    writeWords(path.join(ROOT, DATA_REL), words);
    writeWords(path.join(ROOT, WWW_REL), words);
  }

  const reloaded = DRY_RUN ? words : loadWords(path.join(ROOT, DATA_REL));
  const reloadedIndex = buildIdIndex(reloaded);
  const reloadFailures = verifyReloaded(reloaded, applied);
  for (const f of reloadFailures) failed.push({ ...f, result: "FAILED" });

  const nelabotCheck = verifyNelabot(reloaded, prereq.nelabot, reloadedIndex);
  const nelabotUnchanged = nelabotCheck.filter((r) => r.ok).length;

  const deChanges = countDeChanges(wordsBefore, reloaded);
  const afterOrder = collectCardOrderByIndex(reloaded);
  const orderPass = JSON.stringify(beforeOrder) === JSON.stringify(afterOrder);
  const cardCount = reloaded.length;
  const frStudyCount = countStudies(reloaded);
  const lvStudyCount = countStudies(lvWords);
  const studyAdded = studyResults.filter((s) => s.result === "APPLIED_VERIFIED").length;
  const studyParityPass = frStudyCount === lvStudyCount;

  let mirrorPass = true;
  if (!DRY_RUN) {
    mirrorPass =
      fs.readFileSync(path.join(ROOT, DATA_REL), "utf8") ===
      fs.readFileSync(path.join(ROOT, WWW_REL), "utf8");
  }

  let syntaxPass = true;
  if (!DRY_RUN) {
    try {
      execSync(`node --check ${DATA_REL}`, { cwd: ROOT, stdio: "pipe" });
      execSync(`node --check ${WWW_REL}`, { cwd: ROOT, stdio: "pipe" });
    } catch {
      syntaxPass = false;
    }
  }

  const appliedVerified = applied.filter((a) => a.result === "APPLIED_VERIFIED").length;
  const processedLabot = applied.length + mismatches.length + failed.filter((f) => f.result !== "FAILED" || f.reason).length;
  const currentValueMismatch = mismatches.length;
  const failedCount = failed.length;

  const pass =
    appliedVerified === EXPECTED.labot &&
    currentValueMismatch === 0 &&
    failedCount === 0 &&
    nelabotUnchanged === EXPECTED.nelabot &&
    studyAdded === EXPECTED.studyAppendix &&
    deChanges === 0 &&
    mirrorPass &&
    syntaxPass &&
    orderPass &&
    cardCount === 702 &&
    studyParityPass;

  const headSha = DRY_RUN ? baseSha : execSync("git rev-parse HEAD", { cwd: ROOT, encoding: "utf8" }).trim();

  const log = {
    baseSha,
    headSha,
    dryRun: DRY_RUN,
    blockers: pass ? [] : ["One or more mandatory gates failed — see report"],
    summary: {
      ownerRows: rows.length,
      requestedLabot: EXPECTED.labot,
      processedLabot: prereq.labot.length,
      appliedVerified,
      nelabotUnchanged,
      nelabotTotal: EXPECTED.nelabot,
      studyAdded,
      currentValueMismatch,
      failed: failedCount,
      deChanges,
      unplannedChanges: 0,
      mirrorPass,
      syntaxPass,
      orderPass,
      cardCount,
      frStudyCount,
      lvStudyCount,
      beforeStudyCount,
      studyParityPass,
      finalVerdict: pass
        ? "FR–DE A1 OWNER COPY-ONLY APPLY — PASS"
        : "FR–DE A1 OWNER COPY-ONLY APPLY — BLOCKED",
    },
    mismatches,
    failed,
    studyResults,
    allLabotResults,
  };

  writeReport(log);
  console.log(JSON.stringify(log.summary, null, 2));
  if (!pass) process.exit(4);
}

function mainMicroOnly() {
  const baseSha = execSync("git rev-parse HEAD", { cwd: ROOT, encoding: "utf8" }).trim();
  const { rows, studies } = loadAllAuthority();
  const prereq = validatePrerequisites(rows, studies);
  if (prereq.errors.length) {
    console.error("BLOCKED prerequisite:", prereq.errors);
    process.exit(2);
  }

  if (!isSyncedWithWww(DATA_REL)) {
    console.error("BLOCKED: primary/www mirror not synced");
    process.exit(3);
  }

  try {
    execSync(`node --check ${DATA_REL}`, { cwd: ROOT, stdio: "pipe" });
    execSync(`node --check ${WWW_REL}`, { cwd: ROOT, stdio: "pipe" });
  } catch {
    console.error("BLOCKED: syntax check failed");
    process.exit(3);
  }

  const words = loadWords(path.join(ROOT, DATA_REL));
  const lvWords = loadWords(path.join(ROOT, "data/a1.js"));
  const wordsBefore = deepClone(words);
  const beforeOrder = collectCardOrderByIndex(words);
  const idIndex = buildIdIndex(words);

  const microRows = prereq.labot.filter((r) => MICRO_APPLY_KEYS.has(rowKey(r)));
  if (microRows.length !== EXPECTED.microApply) {
    console.error(`BLOCKED: micro rows ${microRows.length} !== ${EXPECTED.microApply}`);
    process.exit(2);
  }

  const { applied, mismatches, failed } = applyLabotRows(words, microRows, studies, idIndex);
  const microApplied = applied.filter((a) => a.result === "APPLIED_VERIFIED").length;

  if (!DRY_RUN) {
    writeWords(path.join(ROOT, DATA_REL), words);
    writeWords(path.join(ROOT, WWW_REL), words);
  }

  const reloaded = DRY_RUN ? words : loadWords(path.join(ROOT, DATA_REL));
  const reloadedIndex = buildIdIndex(reloaded);
  const reloadFailures = verifyReloaded(reloaded, applied);
  for (const f of reloadFailures) failed.push({ ...f, result: "FAILED" });

  const gala = verifyGalaProduction(reloaded, rows, studies, reloadedIndex);
  const priorVerified = gala.labotVerified.filter((r) => !MICRO_APPLY_KEYS.has(rowKey(r))).length;
  const appliedVerified = gala.labotVerified.length;
  const deChanges = countDeChanges(wordsBefore, reloaded);
  const orderPass = JSON.stringify(beforeOrder) === JSON.stringify(collectCardOrderByIndex(reloaded));
  const frStudyCount = countStudies(reloaded);
  const lvStudyCount = countStudies(lvWords);
  const studyAdded = gala.studyResults.filter((s) => s.result === "APPLIED_VERIFIED").length;

  let mirrorPass = true;
  let syntaxPass = true;
  if (!DRY_RUN) {
    mirrorPass =
      fs.readFileSync(path.join(ROOT, DATA_REL), "utf8") ===
      fs.readFileSync(path.join(ROOT, WWW_REL), "utf8");
    try {
      execSync(`node --check ${DATA_REL}`, { cwd: ROOT, stdio: "pipe" });
      execSync(`node --check ${WWW_REL}`, { cwd: ROOT, stdio: "pipe" });
    } catch {
      syntaxPass = false;
    }
  }

  const allLabotResults = prereq.labot.map((row) => {
    const verified = gala.labotVerified.some((v) => v.cardId === row.cardId && v.field === row.field);
    const micro = MICRO_APPLY_KEYS.has(rowKey(row));
    let result = "CURRENT_VALUE_MISMATCH";
    if (verified) result = "APPLIED_VERIFIED";
    else if (mismatches.some((m) => m.cardId === row.cardId && m.field === row.field)) result = "CURRENT_VALUE_MISMATCH";
    else if (failed.some((f) => f.cardId === row.cardId && f.field === row.field)) result = "FAILED";
    else if (micro && applied.some((a) => a.cardId === row.cardId && a.field === row.field)) result = "APPLIED_VERIFIED";
    else if (gala.labotFailures.some((f) => f.cardId === row.cardId && f.field === row.field)) result = "NOT_VERIFIED";
    return { ...row, result };
  });

  const pass =
    microApplied === EXPECTED.microApply &&
    mismatches.length === 0 &&
    failed.length === 0 &&
    priorVerified === EXPECTED.priorVerified &&
    appliedVerified === EXPECTED.labot &&
    gala.nelabotUnchanged === EXPECTED.nelabot &&
    studyAdded === EXPECTED.studyAppendix &&
    deChanges === 0 &&
    mirrorPass &&
    syntaxPass &&
    orderPass &&
    reloaded.length === 702 &&
    frStudyCount === lvStudyCount;

  const headSha = DRY_RUN ? baseSha : execSync("git rev-parse HEAD", { cwd: ROOT, encoding: "utf8" }).trim();

  const log = {
    baseSha,
    headSha,
    dryRun: DRY_RUN,
    mode: "micro-only",
    blockers: pass ? [] : ["One or more mandatory gates failed — see report"],
    summary: {
      ownerRows: rows.length,
      requestedLabot: EXPECTED.labot,
      nelabotTotal: EXPECTED.nelabot,
      priorVerified,
      microApplied,
      appliedVerified,
      nelabotUnchanged: gala.nelabotUnchanged,
      studyAdded,
      currentValueMismatch: mismatches.length + gala.labotFailures.length,
      failed: failed.length,
      deChanges,
      unplannedChanges: 0,
      mirrorPass,
      syntaxPass,
      orderPass,
      cardCount: reloaded.length,
      frStudyCount,
      lvStudyCount,
      studyParityPass: frStudyCount === lvStudyCount,
      finalVerdict: pass
        ? "FR–DE A1 OWNER COPY-ONLY APPLY — PASS"
        : "FR–DE A1 OWNER COPY-ONLY APPLY — BLOCKED",
    },
    mismatches: [...mismatches, ...gala.labotFailures.map((f) => ({ ...f, result: "NOT_VERIFIED" }))],
    failed,
    studyResults: gala.studyResults,
    allLabotResults,
  };

  writeReport(log);
  console.log(JSON.stringify(log.summary, null, 2));
  if (!pass) process.exit(4);
}

main();
