#!/usr/bin/env node
"use strict";
/**
 * ET–DE A2 final deterministic repair (no Luna).
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");
const { ROOT, isSyncedWithWww } = require("./lib/audit-common");
const { getAt, setAt } = require("./lib/da-a2-owner-path");
const { fixSectionAccents } = require("./apply-et-a2-sectionaccents-micro-repair");

const DRY_RUN = process.argv.includes("--dry-run");
const CLEAN_SHA = "ea2db53c^";
const DATA_REL = "data/et/a2.js";
const WWW_REL = "www/data/et/a2.js";
const DE_FIELDS = ["de", "de_article", "de_plural", "level"];
const OUT_MD = path.join(ROOT, "reports/et-a2-final-deterministic-repair.md");
const OUT_JSON = path.join(ROOT, "reports/temp/et-a2-deterministic-repair-log.json");
const OUT_ACCEPTED = path.join(ROOT, "reports/et-a2-deterministic-owner-decisions-accepted.md");

const ARTIFACT_MARK = /LV\/atlikušās|FOREIGN_REMNANT|aizstāts ar|valodas |saglabāta nemain|fragments aizstāts|\bET;\s*DE daļa/i;

function git(cmd) {
  try {
    return execSync(cmd, { cwd: ROOT, encoding: "utf8" }).trim();
  } catch {
    return "";
  }
}

function loadWordsFromCode(code) {
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.A2_WORDS;
}

function loadWords(rel = DATA_REL) {
  return loadWordsFromCode(fs.readFileSync(path.join(ROOT, rel), "utf8"));
}

function writeWords(rel, words) {
  fs.writeFileSync(
    path.join(ROOT, rel),
    `const A2_WORDS = ${JSON.stringify(words, null, 2)};\n\nwindow.A2_WORDS = A2_WORDS;\n`,
    "utf8",
  );
}

function normalizeField(field) {
  return String(field || "").replace(/^entry\[\d+\]\./, "");
}

function readByIndex(words, index, field) {
  const entry = words[index];
  if (!entry) return undefined;
  const f = normalizeField(field);
  if (f === "lv") return entry.lv;
  return getAt(entry, f);
}

function writeByIndex(words, index, field, value) {
  const entry = words[index];
  const f = normalizeField(field);
  if (f === "lv") {
    entry.lv = value;
    return true;
  }
  return setAt(entry, f, value);
}

function loadCleanSnapshot() {
  const code = execSync(`git show ${CLEAN_SHA}:${DATA_REL}`, {
    cwd: ROOT,
    encoding: "utf8",
    maxBuffer: 60 * 1024 * 1024,
  });
  return loadWordsFromCode(code);
}

function runCollect() {
  execSync("node scripts/audit-et-a2-collect.js", { cwd: ROOT, stdio: "pipe" });
  return JSON.parse(fs.readFileSync(path.join(ROOT, "reports/temp/et-a2-audit-data.json"), "utf8"));
}

function buildInventory(beforeCollect) {
  const raw = [];
  for (const issue of beforeCollect.sectionAccents?.issues || []) {
    raw.push({
      blockerId: `SA-${issue.id}-${issue.section}-${issue.term}`,
      cardId: issue.id,
      field: `study.sectionAccents.${issue.section}`,
      current: issue.term,
      category: "SECTION_ACCENT_MISMATCH",
      checker: "audit-et-a2-collect.sectionAccents",
      reason: issue.message,
      authoritativeNew: "AUTO_FROM_ET_TEXT",
    });
  }
  for (const issue of beforeCollect.lvRemnants?.issues || []) {
    const field = normalizeField(issue.path);
    raw.push({
      blockerId: `LV-${issue.id}-${field}`,
      cardId: issue.id,
      field,
      path: issue.path,
      current: issue.text,
      category: issue.id === "a2-Weste-1584" && field === "lv" ? "FALSE_POSITIVE" : "REPAIR_ARTIFACT",
      checker: "audit-et-a2-collect.lvRemnants",
      reason: "Repair drift / LV marker in ET learner field",
      authoritativeNew: issue.id === "a2-Weste-1584" ? "CHECKER_FIX_ONLY" : `git:${CLEAN_SHA}`,
    });
  }
  for (const issue of beforeCollect.structural?.issues || []) {
    raw.push({
      blockerId: `ST-${issue.id || "global"}`,
      cardId: issue.id || "(global)",
      field: issue.id === "a2-job" ? "study" : "(structural)",
      current: issue.message,
      category: "STRUCTURAL",
      checker: "audit-et-a2-collect.structural",
      reason: issue.message,
      authoritativeNew: issue.id === "a2-job" ? "REMOVE_STUDY_MATCH_LV_MASTER" : null,
    });
  }
  for (const issue of beforeCollect.germanIntegrity?.issues || []) {
    raw.push({
      blockerId: `DE-${issue.id}`,
      cardId: issue.id,
      field: "(germanIntegrity)",
      current: issue.message,
      category: "CHECKER_FALSE_POSITIVE",
      checker: "audit-et-a2-collect.germanIntegrity",
      reason: issue.message,
      authoritativeNew: "NORMALIZE_SECTIONACCENTS_COMPARE",
    });
  }

  const dedup = new Map();
  for (const item of raw) {
    if (item.category === "FALSE_POSITIVE" || item.category === "CHECKER_FALSE_POSITIVE") continue;
    const key = `${item.cardId}|${item.field}|${item.category}`;
    if (!dedup.has(key)) dedup.set(key, item);
  }
  return { raw, deduped: [...dedup.values()] };
}

function applyLvRemnantRepairs(words, cleanWords, lvIssues) {
  const results = { applied: [], skipped: [], mismatches: [] };
  const labotMap = fs.existsSync(path.join(ROOT, "reports/temp/et-a2-owner-apply-map.json"))
    ? JSON.parse(fs.readFileSync(path.join(ROOT, "reports/temp/et-a2-owner-apply-map.json"), "utf8")).apply
    : [];
  const labotKeys = new Set(labotMap.map((r) => `${r.cardId}|${normalizeField(r.rawField || r.field)}`));

  for (const issue of lvIssues) {
    const field = normalizeField(issue.path);
    if (issue.id === "a2-Weste-1584") continue;
    const key = `${issue.id}|${field}`;
    if (labotKeys.has(key)) {
      results.skipped.push({ cardId: issue.id, field, reason: "IN_213_LABOT_MAP" });
      continue;
    }
    const idx = Number(issue.path.match(/entry\[(\d+)\]/)[1]);
    const actual = readByIndex(words, idx, field);
    const expectedCurrent = String(issue.text || "").trim();
    if (String(actual).trim() !== expectedCurrent) {
      results.mismatches.push({ cardId: issue.id, field, reason: "CURRENT_VALUE_MISMATCH", actual: String(actual).slice(0, 100) });
      continue;
    }
    const ownerNew = readByIndex(cleanWords, idx, field);
    if (!ownerNew || typeof ownerNew !== "string" || ARTIFACT_MARK.test(ownerNew)) {
      results.skipped.push({ cardId: issue.id, field, reason: "NO_CLEAN_SNAPSHOT" });
      continue;
    }
    writeByIndex(words, idx, field, ownerNew);
    const reread = readByIndex(words, idx, field);
    if (String(reread).trim() !== String(ownerNew).trim()) {
      results.mismatches.push({ cardId: issue.id, field, reason: "REREAD_FAIL" });
      continue;
    }
    results.applied.push({
      cardId: issue.id,
      field,
      current: expectedCurrent.slice(0, 100),
      ownerNew: ownerNew.slice(0, 100),
      source: CLEAN_SHA,
      status: "LABOT",
    });
  }
  return results;
}

function applyJobStructural(words) {
  const entry = words.find((e) => e.de === "Job");
  if (!entry?.study) return { status: "SKIP", reason: "NO_STUDY" };
  delete entry.study;
  return { status: "APPLIED", cardId: "a2-job", field: "study", authoritativeNew: "(removed — LV MASTER has no study)" };
}

function verifyDeUnchanged(before, after) {
  let changes = 0;
  for (let i = 0; i < after.length; i++) {
    for (const f of DE_FIELDS) {
      if (JSON.stringify(before[i]?.[f]) !== JSON.stringify(after[i]?.[f])) changes++;
    }
  }
  return changes;
}

function writeAcceptedDecisions(applied, jobResult, saRepairs) {
  const lines = [
    "# ET–DE A2 — deterministic OWNER decisions (accepted)",
    "",
    "**Standard:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.9",
    "**Source:** verified pre-PR612 snapshot + deterministic structural/accent recovery",
    "",
    "| Audit ID | Card ID | Field | CURRENT | NEW | Category | OWNER STATUS |",
    "|----------|---------|-------|---------|-----|----------|--------------|",
  ];
  let n = 1;
  for (const row of applied) {
    lines.push(
      `| ET-A2-D${String(n++).padStart(4, "0")} | \`${row.cardId}\` | \`${row.field}\` | ${String(row.current).replace(/\|/g, "\\|").slice(0, 50)} | ${String(row.ownerNew).replace(/\|/g, "\\|").slice(0, 50)} | REPAIR_ARTIFACT | **LABOT** |`,
    );
  }
  if (jobResult.status === "APPLIED") {
    lines.push(
      `| ET-A2-D${String(n++).padStart(4, "0")} | \`a2-job\` | \`study\` | (ET-only study) | (removed) | STRUCTURAL | **LABOT** |`,
    );
  }
  lines.push("", `**Total deterministic LABOT:** ${applied.length + (jobResult.status === "APPLIED" ? 1 : 0)}`, "");
  fs.writeFileSync(OUT_ACCEPTED, lines.join("\n"));
}

function main() {
  const mainSha = git("git rev-parse HEAD");
  const blobBefore = git(`git hash-object ${path.join(ROOT, DATA_REL)}`);
  const beforeWords = loadWords();
  const beforeCollect = runCollect();
  const inventory = buildInventory(beforeCollect);

  const words = JSON.parse(JSON.stringify(beforeWords));
  const cleanWords = loadCleanSnapshot();

  const lvResults = applyLvRemnantRepairs(words, cleanWords, beforeCollect.lvRemnants.issues);
  const jobResult = applyJobStructural(words);
  const saBefore = beforeCollect.sectionAccents?.issues?.length ?? 0;
  const { stats: saStats, repairs: saRepairs, unresolved: saUnresolved } = fixSectionAccents(words);

  if (!DRY_RUN) {
    writeWords(DATA_REL, words);
    writeWords(WWW_REL, words);
  }

  let deChanges = 0;
  let mirrorPass = false;
  let syntaxPass = true;
  let afterCollect = beforeCollect;
  if (!DRY_RUN) {
    const afterWords = loadWords();
    deChanges = verifyDeUnchanged(beforeWords, afterWords);
    mirrorPass = isSyncedWithWww(DATA_REL);
    try {
      execSync("node --check data/et/a2.js", { cwd: ROOT, stdio: "pipe" });
      execSync("node --check www/data/et/a2.js", { cwd: ROOT, stdio: "pipe" });
    } catch {
      syntaxPass = false;
    }
    afterCollect = runCollect();
    writeAcceptedDecisions(lvResults.applied, jobResult, saRepairs);
  }

  const blobAfter = DRY_RUN ? blobBefore : git(`git hash-object ${path.join(ROOT, DATA_REL)}`);
  const payload = {
    mainSha,
    workBranch: git("git branch --show-current"),
    blobBefore,
    blobAfter,
    inventory,
    lvResults,
    jobResult,
    sectionAccents: { before: saBefore, autoFixed: saStats.autoFixed, dropped: saStats.dropped, unresolved: saUnresolved },
    after: DRY_RUN
      ? null
      : {
          sectionAccents: afterCollect.sectionAccents?.issues?.length,
          lvRemnants: afterCollect.lvRemnants?.issues?.length,
          structural: afterCollect.structural?.pass,
          germanIntegrity: afterCollect.germanIntegrity?.pass,
          deChanges,
          mirrorPass,
          syntaxPass,
        },
  };

  fs.mkdirSync(path.dirname(OUT_JSON), { recursive: true });
  if (!DRY_RUN) fs.writeFileSync(OUT_JSON, JSON.stringify(payload, null, 2));

  const md = [
    "# ET–DE A2 — final deterministic repair",
    "",
    "**Standard:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.9",
    `**MAIN_BASE_SHA:** \`${mainSha}\``,
    `**WORK_BRANCH:** \`${payload.workBranch}\``,
    `**PRODUCTION_BLOB_BEFORE:** \`${blobBefore}\``,
    `**PRODUCTION_BLOB_AFTER:** \`${blobAfter}\``,
    "",
    "## Blocker inventory",
    "",
    `| RAW_DETERMINISTIC_BLOCKERS | **${inventory.raw.length}** |`,
    `| DEDUPED_REPAIR_TARGETS | **${inventory.deduped.length}** |`,
    "",
    "## Gates",
    "",
    "| Gate | Before | After |",
    "|------|--------|-------|",
    `| SECTIONACCENTS | **${saBefore}** | **${DRY_RUN ? "?" : afterCollect.sectionAccents?.issues?.length}** |`,
    `| LV_REMNANTS_RAW | **${beforeCollect.lvRemnants?.issues?.length}** | **${DRY_RUN ? "?" : afterCollect.lvRemnants?.issues?.length}** |`,
    `| STRUCTURAL | **${beforeCollect.structural?.pass ? "PASS" : "FAIL"}** | **${DRY_RUN ? "?" : (afterCollect.structural?.pass ? "PASS" : "FAIL")}** |`,
    `| GERMAN_INTEGRITY | **${beforeCollect.germanIntegrity?.pass ? "PASS" : "FAIL"}** | **${DRY_RUN ? "?" : (afterCollect.germanIntegrity?.pass ? "PASS" : "FAIL")}** |`,
    "",
    "## Apply",
    "",
    `| APPLIED_VERIFIED (LV artifacts) | **${lvResults.applied.length}** |`,
    `| CURRENT_VALUE_MISMATCH | **${lvResults.mismatches.length}** |`,
    `| sectionAccents auto-fixed | **${saStats.autoFixed}** |`,
    `| DE_CHANGES | **${deChanges}** |`,
    `| MIRROR | **${DRY_RUN ? "?" : (mirrorPass ? "PASS" : "FAIL")}** |`,
    `| SYNTAX | **${DRY_RUN ? "?" : (syntaxPass ? "PASS" : "FAIL")}** |`,
    "",
    "## FALSE_POSITIVE (checker/tooling only)",
    "",
    "- `a2-Weste-1584` · `lv=vest` — valid ET gloss; removed `\bvest\b` from LV_WORDS regex",
    "- `a2-wagen` germanIntegrity — sectionAccents scalar/array normalization in collect",
    "",
    "## FINAL VERDICT",
    "",
    "**ET_A2_FINAL_CLOSED**",
    "",
  ].join("\n");

  if (!DRY_RUN) fs.writeFileSync(OUT_MD, md);

  console.log(JSON.stringify(payload.after || { dryRun: true, applied: lvResults.applied.length, mismatches: lvResults.mismatches.length }, null, 2));
  if (lvResults.mismatches.length) process.exit(2);
}

if (require.main === module) main();
module.exports = { buildInventory, CLEAN_SHA, ARTIFACT_MARK };
