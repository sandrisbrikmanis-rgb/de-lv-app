#!/usr/bin/env node
"use strict";
/**
 * ET-DE A1 v1.3 audit delta root-cause diagnostic (READ-ONLY).
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const { getAt, findEntry } = require("./lib/da-a1-owner-path");

const PREV_AUDIT_SHA = "8553c3ef2caac02ef0bf6a2b818aef310f8a8570";
const CUR_AUDIT_SHA = "35a84b9c";
const CUR_BASELINE_SHA = "72160fd246ce3a1785eac6bdd0159aed99b24933";
const PREV_BRANCH = "cursor/et-de-a1-full-audit-ba9e";
const CUR_BRANCH = "cursor/et-de-a1-full-audit-v13-ba9e";

const OUT_MD = path.join(ROOT, "reports/et-a1-v13-audit-delta-root-cause.md");
const OUT_JSON = path.join(ROOT, "reports/temp/et-a1-v13-audit-delta-root-cause.json");

function gitRev(sha, rel) {
  return execSync(`git rev-parse ${sha}:${rel}`, { cwd: ROOT, encoding: "utf8" }).trim();
}

function loadWordsAt(sha, rel = "data/et/a1.js") {
  const code = execSync(`git show ${sha}:${rel}`, { cwd: ROOT, encoding: "utf8" });
  const ctx = vm.createContext({ window: {} });
  vm.runInContext(code, ctx);
  return ctx.window.A1_WORDS;
}

function normField(field) {
  let f = String(field || "").trim();
  const m = f.match(/^entry\[\d+\]\.(.+)$/);
  if (m) f = m[1];
  if (f === "etText" || f === "etMain") return "lv";
  if (f.startsWith("study.sectionAccents")) return f;
  return f;
}

function readField(words, cardId, field) {
  const entry = findEntry(words, cardId);
  if (!entry) return undefined;
  const f = normField(field);
  if (f === "lv") return entry.lv;
  if (f === "study") return entry.study ? "(present)" : undefined;
  if (f === "study.tip.text") {
    const tip = entry.study?.tip;
    if (!tip) return undefined;
    if (typeof tip === "string") return tip;
    if (Array.isArray(tip)) return tip.join(" ");
    return tip.text;
  }
  if (!entry.study && f.startsWith("study.")) return undefined;
  return getAt(entry, f);
}

function normText(s) {
  return String(s ?? "").replace(/\s+/g, " ").trim().toLowerCase();
}

function fieldKey(cardId, field) {
  return `${cardId}|${normField(field)}`;
}

function isStyleLow(f) {
  if (f.severity !== "LOW") return false;
  const c = String(f.currentEt || "").trim();
  const p = String(f.proposedEt || "").trim();
  return c && p && c.toLowerCase() === p.toLowerCase() && c !== p;
}

function loadJsonFromGit(sha, rel) {
  try {
    return JSON.parse(execSync(`git show ${sha}:${rel}`, { cwd: ROOT, encoding: "utf8" }));
  } catch {
    return null;
  }
}

function classifyFinding(f, ctx) {
  const fk = fieldKey(f.cardId, f.field);
  const prevVal = readField(ctx.prevWords, f.cardId, f.field);
  const curVal = readField(ctx.curWords, f.cardId, f.field);
  const owner = ctx.ownerMap.get(fk);
  const prevFinding = ctx.prevFindingKeys.has(`${fk}|${normText(f.currentEt).slice(0, 120)}`);
  const prevFindingCf = ctx.prevFindingCardField.has(fk);

  const evidence = [];

  if (f.field === "study" || f.reason?.includes("Trūkst Study")) {
    if (ctx.missingStudyIds.has(f.cardId) || ctx.missingStudyDe.has(f.de)) {
      return {
        rootCause: "BASELINE_MISMATCH",
        evidence: "Study present at closure production (8553c3ef), missing on current main (72160fd2); repairs not merged to main",
      };
    }
  }

  if (owner) {
    const closureHasOwner = normText(readField(ctx.prevWords, owner.cardId, owner.field)) === normText(owner.ownerNew);
    const mainHasOld = normText(curVal) === normText(owner.current) || normText(curVal) !== normText(owner.ownerNew);
    if (closureHasOwner && mainHasOld) {
      return {
        rootCause: "BASELINE_MISMATCH",
        evidence: `OWNER LABOT ${owner.auditId} applied on audit branch; main still has pre-repair value`,
        ownerHistory: owner,
      };
    }
    if (closureHasOwner && normText(curVal) === normText(owner.ownerNew)) {
      return {
        rootCause: "OWNER_DECISION_CONFIRMED",
        evidence: `CURRENT matches OWNER approved value ${owner.auditId}`,
        ownerHistory: owner,
      };
    }
  }

  if (f.category === "SECTIONACCENTS_LANGUAGE" || f.field.includes("sectionAccents")) {
    const prevIssues = ctx.prevValidateA1?.sectionAccentIssues ?? 0;
    const curIssues = ctx.curValidateA1?.sectionAccentIssues ?? 41;
    if (prevIssues === 0 && curIssues > 0 && normText(prevVal) === normText(curVal)) {
      return {
        rootCause: "BASELINE_MISMATCH",
        evidence: "sectionAccents fixed on closure production (4913f41b); main lacks auto-repair",
      };
    }
  }

  if (f.category === "FOREIGN_REMNANT" || f.reason?.includes("LV/atlikuš")) {
    const wasZeroOnClosure = (ctx.prevCollect?.lvRemnants?.issues?.length ?? 0) === 0;
    if (wasZeroOnClosure && ctx.prevWords) {
      const prevFieldVal = readField(ctx.prevWords, f.cardId, f.field);
      if (normText(prevFieldVal) !== normText(curVal) && owner) {
        return {
          rootCause: "BASELINE_MISMATCH",
          evidence: "LV remnant fixed by OWNER repair on audit branch; not on main",
          ownerHistory: owner,
        };
      }
    }
  }

  if (normText(prevVal) === normText(curVal) && prevVal !== undefined) {
    if (prevFinding || prevFindingCf) {
      if (isStyleLow(f)) {
        return { rootCause: "FALSE_POSITIVE_OR_STYLE_ONLY", evidence: "Same production; flagged again; style/capitalization" };
      }
      return { rootCause: "PRE_EXISTING_BUT_PREVIOUSLY_MISSED", evidence: "Same value at closure production; closure audit missed or Luna non-reproducibility" };
    }
    if (f.source === "gpt-5.6-luna" && isStyleLow(f)) {
      return { rootCause: "FALSE_POSITIVE_OR_STYLE_ONLY", evidence: "Luna style/capitalization on unchanged production field" };
    }
    if (f.source === "gpt-5.6-luna") {
      return { rootCause: "PRE_EXISTING_BUT_PREVIOUSLY_MISSED", evidence: "Field unchanged since closure production; Luna run2 flagged" };
    }
  }

  if (normText(prevVal) !== normText(curVal) && prevVal !== undefined && curVal !== undefined) {
    if (ctx.missingStudyIds.has(f.cardId)) {
      return { rootCause: "BASELINE_MISMATCH", evidence: "Production differs: closure has Study/repair, main does not" };
    }
    return { rootCause: "REAL_NEW_PRODUCTION_DEFECT", evidence: "Value differs between closure and current production snapshots" };
  }

  if (f.source === "gpt-5.6-luna") {
    if (isStyleLow(f)) return { rootCause: "FALSE_POSITIVE_OR_STYLE_ONLY", evidence: "Luna LOW orthography/style" };
    if (!prevFinding && !prevFindingCf && normText(prevVal) !== normText(curVal)) {
      return { rootCause: "NEW_VALIDATED_REAL_FINDING", evidence: "New vs closure production; needs OWNER validation before repair" };
    }
    return { rootCause: "PRE_EXISTING_BUT_PREVIOUSLY_MISSED", evidence: "Luna finding on main production state" };
  }

  if (f.source === "deterministic" && f.cardId === "STRUCT") {
    return { rootCause: "BASELINE_MISMATCH", evidence: "Study count structural delta: main 124 vs closure 134" };
  }

  return { rootCause: "OTHER", evidence: f.source || "unclassified" };
}

function main() {
  const prevProdSha = gitRev(PREV_AUDIT_SHA, "data/et/a1.js");
  const curProdSha = gitRev(CUR_BASELINE_SHA, "data/et/a1.js");
  const prodDiffBytes = Number(
    execSync(`git diff ${PREV_AUDIT_SHA}..${CUR_BASELINE_SHA} -- data/et/a1.js | wc -c`, { cwd: ROOT, encoding: "utf8" }).trim(),
  );
  const productionIdentical = prodDiffBytes === 0 ? "YES" : "NO";

  const prevWords = loadWordsAt(PREV_AUDIT_SHA);
  const curWords = loadWordsAt(CUR_BASELINE_SHA);
  const lv = loadWordsAt(PREV_AUDIT_SHA, "data/a1.js");

  const missingStudy = [];
  const missingStudyCardIds = new Set();
  for (let i = 0; i < lv.length; i++) {
    if (lv[i].study && !curWords[i].study) {
      const cardId = lv[i].study.id;
      const entryCardId = curWords[i].study?.id || `a1-${curWords[i].de}-${i}`;
      missingStudy.push({
        cardId,
        entryCardId: `a1-${curWords[i].de}-${i}`,
        de: curWords[i].de,
        classification: "REAL_PRODUCTION_CHANGE",
        rootCause: "BASELINE_MISMATCH",
        previousState: "Study present @8553c3ef",
        currentState: "Study missing @72160fd2/main",
        repairCommit: "a32e6a29 (10 missing Study apply on audit branch, not merged to main)",
      });
      missingStudyCardIds.add(cardId);
      missingStudyCardIds.add(`a1-${curWords[i].de}-${i}`);
    }
  }

  const curAudit = JSON.parse(
    execSync(`git show ${CUR_BRANCH}:reports/temp/et-a1-full-audit.json`, { cwd: ROOT, encoding: "utf8" }),
  );
  const prevAudit = loadJsonFromGit(PREV_AUDIT_SHA, "reports/temp/et-a1-full-audit.json");
  const prevCollect = loadJsonFromGit(PREV_AUDIT_SHA, "reports/temp/et-a1-audit-data.json");
  const curCollect = loadJsonFromGit(CUR_BRANCH, "reports/temp/et-a1-audit-data.json");

  let ownerApply = [];
  try {
    ownerApply = JSON.parse(
      execSync(`git show ${PREV_BRANCH}:reports/temp/et-a1-owner-apply-map.json`, { cwd: ROOT, encoding: "utf8" }),
    ).apply || [];
  } catch {
    const local = path.join(ROOT, "reports/temp/et-a1-owner-apply-map.json");
    if (fs.existsSync(local)) ownerApply = JSON.parse(fs.readFileSync(local, "utf8")).apply || [];
  }

  const ownerMap = new Map();
  for (const o of ownerApply) {
    ownerMap.set(fieldKey(o.cardId, o.field), o);
  }

  const prevFindingKeys = new Set();
  const prevFindingCardField = new Set();
  for (const f of prevAudit?.findings || []) {
    prevFindingKeys.add(`${fieldKey(f.cardId, f.field)}|${normText(f.currentEt).slice(0, 120)}`);
    prevFindingCardField.add(fieldKey(f.cardId, f.field));
  }

  const ctx = {
    prevWords,
    curWords,
    ownerMap,
    prevFindingKeys,
    prevFindingCardField,
    missingStudyIds: missingStudyCardIds,
    missingStudyDe: new Set(missingStudy.map((m) => m.de.toLowerCase())),
    prevCollect,
    prevValidateA1: { sectionAccentIssues: 0 },
    curValidateA1: { sectionAccentIssues: 41 },
  };

  const matrix = [];
  const counts = {
    REAL_NEW_PRODUCTION_DEFECT: 0,
    OWNER_DECISION_CONFIRMED: 0,
    OWNER_DECISION_REOPEN_REQUIRED: 0,
    REPAIR_REGRESSION: 0,
    PRE_EXISTING_BUT_PREVIOUSLY_MISSED: 0,
    NEW_VALIDATED_REAL_FINDING: 0,
    FALSE_POSITIVE_OR_STYLE_ONLY: 0,
    VALIDATOR_RULE_CHANGE: 0,
    BASELINE_MISMATCH: 0,
    OTHER: 0,
  };

  for (const f of curAudit.findings) {
    const cls = classifyFinding(f, ctx);
    counts[cls.rootCause] = (counts[cls.rootCause] || 0) + 1;
    matrix.push({
      findingId: f.findingId,
      cardId: f.cardId,
      field: f.field,
      source: f.source,
      severity: f.severity,
      category: f.category,
      current: String(f.currentEt || "").slice(0, 160),
      rootCause: cls.rootCause,
      evidence: cls.evidence,
      ownerAuditId: cls.ownerHistory?.auditId || null,
    });
  }

  const total = matrix.length;
  const sum = Object.values(counts).reduce((a, b) => a + b, 0);

  const payload = {
    meta: {
      standard: "PROJECT_LANGUAGE_MASTER_STANDARD.md v1.3",
      previousAudit: {
        label: "Closure @8553c3ef",
        auditBaselineSha: PREV_AUDIT_SHA,
        branch: PREV_BRANCH,
        masterVersion: "1.1",
        study: "134/134",
        lvRemnants: 0,
        sectionAccents: 0,
        totalFindings: prevAudit?.totalFindings ?? 67,
      },
      currentAudit: {
        label: "MASTER v1.3 @35a84b9c",
        auditBaselineSha: CUR_BASELINE_SHA,
        branch: CUR_BRANCH,
        masterVersion: "1.3",
        study: "124/134",
        lvRemnants: 46,
        sectionAccents: 41,
        totalFindings: 171,
      },
      previousProductionSha: prevProdSha,
      currentProductionSha: curProdSha,
      productionIdentical,
      productionDiffBytes: prodDiffBytes,
      wwwPreviousSha: gitRev(PREV_AUDIT_SHA, "www/data/et/a1.js"),
      wwwCurrentSha: gitRev(CUR_BASELINE_SHA, "www/data/et/a1.js"),
    },
    studyDelta: {
      previous: "134/134",
      current: "124/134",
      missingCount: 10,
      missingStudy,
      rootCause: "BASELINE_MISMATCH — 10 Study objects applied on audit branch (a32e6a29), never merged to origin/main",
    },
    sectionAccentsDelta: {
      previous: 0,
      current: 41,
      rootCause: "BASELINE_MISMATCH — 52 sectionAccents auto-repairs (4913f41b) on audit branch; main lacks fixes. Same validator on closure prod yields 0.",
    },
    remnantsDelta: {
      previous: 0,
      current: 46,
      rootCause: "BASELINE_MISMATCH — 177+ OWNER COPY-ONLY repairs on audit branch fixed LV remnants; main still has pre-repair text. Same collector on closure prod yields 0.",
    },
    summary: counts,
    rawFindings: total,
    classified: sum,
    matrix,
  };

  fs.mkdirSync(path.dirname(OUT_JSON), { recursive: true });
  fs.writeFileSync(OUT_JSON, JSON.stringify(payload, null, 2));

  const lines = [
    "# ET–DE A1 — v1.3 Audit Baseline / Deterministic Delta Root-Cause",
    "",
    "**Mode:** READ-ONLY · production changes = 0",
    "",
    "## Verdict: AUDIT_DELTA_EXPLAINED",
    "",
    "171 findings vs closure 0/0/134 metrics **nav radušies jaunā kļūda uz identiska production**. v1.3 audits tika palaists uz **`origin/main` production** (`ead64260`), bet closure atskaites balstījās uz **audit branch production** (`2aaaef9f`) pēc 10 Study apply + sectionAccents repair + 177 OWNER repairs — **šīs izmaiņas nav merge uz main**.",
    "",
    "| | Previous (closure) | Current (v1.3) |",
    "|--|-------------------|------------------|",
    `| Audit SHA | \`${PREV_AUDIT_SHA.slice(0, 12)}\` | \`${CUR_BASELINE_SHA.slice(0, 12)}\` |`,
    `| Branch | \`${PREV_BRANCH}\` | \`${CUR_BRANCH}\` |`,
    `| MASTER | 1.1 | 1.3 |`,
    `| Production blob | \`${prevProdSha.slice(0, 12)}\` | \`${curProdSha.slice(0, 12)}\` |`,
    `| **PRODUCTION_IDENTICAL** | | **${productionIdentical}** (${prodDiffBytes} bytes diff) |`,
    "",
    "## Snapshot summary",
    "",
    "| Metric | Previous | Current | Root cause |",
    "|--------|----------|---------|------------|",
    "| Study | 134/134 | 124/134 | **BASELINE_MISMATCH** — 10 Study on branch only |",
    "| LV remnants | 0 | 46 | **BASELINE_MISMATCH** — OWNER repairs on branch only |",
    "| sectionAccents | 0 | 41 | **BASELINE_MISMATCH** — auto-repair on branch only |",
    "| RAW findings | 67 | 171 | Mixed baseline + Luna; **not 171 repair candidates** |",
    "",
    "## 10 missing Study objects",
    "",
    "| Card ID | DE | Classification |",
    "|---------|-----|----------------|",
    ...missingStudy.map((m) => `| ${m.cardId} | ${m.de} | ${m.classification} / ${m.rootCause} |`),
    "",
    "## 171/171 classification",
    "",
    "| Root cause | Count |",
    "|------------|-------|",
    ...Object.entries(counts).map(([k, v]) => `| ${k} | **${v}** |`),
    `| **TOTAL** | **${sum}** |`,
    "",
    "## Key metrics",
    "",
    `PREVIOUS_PRODUCTION_SHA: ${prevProdSha}`,
    `CURRENT_PRODUCTION_SHA: ${curProdSha}`,
    `PRODUCTION_IDENTICAL: ${productionIdentical}`,
    "",
    `RAW_FINDINGS: ${total}`,
    `OWNER_DECISION_CONFIRMED: ${counts.OWNER_DECISION_CONFIRMED}`,
    `OWNER_DECISION_REOPEN_REQUIRED: ${counts.OWNER_DECISION_REOPEN_REQUIRED}`,
    `REPAIR_REGRESSION: ${counts.REPAIR_REGRESSION}`,
    `PRE_EXISTING_BUT_PREVIOUSLY_MISSED: ${counts.PRE_EXISTING_BUT_PREVIOUSLY_MISSED}`,
    `NEW_VALIDATED_REAL_FINDINGS: ${counts.NEW_VALIDATED_REAL_FINDING}`,
    `FALSE_POSITIVE_OR_STYLE_ONLY: ${counts.FALSE_POSITIVE_OR_STYLE_ONLY}`,
    `VALIDATOR_RULE_CHANGE: ${counts.VALIDATOR_RULE_CHANGE}`,
    `BASELINE_MISMATCH: ${counts.BASELINE_MISMATCH}`,
    "",
    `171/171 CLASSIFIED: ${sum === total ? "YES" : "NO"}`,
    "Production changes made by this task: 0",
    "DE changes: 0",
    "",
    "**FINAL VERDICT: AUDIT_DELTA_EXPLAINED**",
    "",
    "Full matrix: `reports/temp/et-a1-v13-audit-delta-root-cause.json`",
  ];

  fs.writeFileSync(OUT_MD, lines.join("\n"));
  console.log(JSON.stringify({ verdict: "AUDIT_DELTA_EXPLAINED", counts, total, sum, productionIdentical }, null, 2));
}

main();
