#!/usr/bin/env node
"use strict";
/**
 * ES-DE five modules deterministic final closure (READ-ONLY, no Luna/API).
 * Usage: node scripts/verify-es-de-five-modules-final-closure.js [--json] [--skip-pr-check]
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");
const { ROOT, isSyncedWithWww } = require("./lib/audit-common");
const { getModuleConfig, ALL_MODULE_KEYS, MASTER_VERSION, MASTER_FILE } = require("./lib/es-de-audit-config");
const { resolveCard, normalizeFieldPath } = require("./lib/es-de-audit-helpers");
const { getAt } = require("./lib/da-a1-owner-path");

const JSON_OUT = process.argv.includes("--json");
const SKIP_PR_CHECK = process.argv.includes("--skip-pr-check");
const REPORT_MD = path.join(ROOT, "reports/es-de-b2-c1-c2-sentences-verbs-final-closure.md");
const REPORT_JSON = path.join(ROOT, "reports/temp/es-de-five-modules-final-closure.json");
const PR = 667;
const BRANCH = "cursor/es-de-b2-c1-c2-sentences-verbs-full-audit-3141";

const MODULE_EXPECTED = {
  b2: { labot: 1022, nelabot: 0, total: 1022, totalCards: 2118, studyCount: 60 },
  c1: { labot: 253, nelabot: 2, total: 255, totalCards: 572, studyCount: 15 },
  c2: { labot: 91, nelabot: 1, total: 92, totalCards: 219, studyCount: 1 },
  sentences: { labot: 310, nelabot: 7, total: 317, totalCards: 796, studyCount: 0 },
  verbs: { labot: 545, nelabot: 5, total: 550, totalCards: 189, studyCount: 0 },
};

const TOTAL_EXPECTED = {
  labot: 2221,
  nelabot: 15,
  ownerObjects: 2236,
  unresolved: 0,
};

const VOCAB_DE_FIELDS = ["de", "de_article", "de_plural", "level"];
const SENTENCE_DE_FIELDS = ["de", "level"];
const VERB_FORM_KEYS = ["infinitiv", "praesens", "imperfektIndikativ", "imperfektKonjunktiv", "partizipVergangenheit"];

function git(cmd) {
  try {
    return execSync(cmd, { cwd: ROOT, encoding: "utf8" }).trim();
  } catch {
    return "";
  }
}

function loadArray(filePath, globalKey) {
  const code = fs.readFileSync(path.join(ROOT, filePath), "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window[globalKey];
}

function normalizeComparable(value) {
  if (value === undefined || value === null) return "";
  if (typeof value === "object") return JSON.stringify(value);
  const text = String(value);
  if ((text.startsWith("[") && text.endsWith("]")) || (text.startsWith("{") && text.endsWith("}"))) {
    try {
      return JSON.stringify(JSON.parse(text));
    } catch {
      return text;
    }
  }
  return text.replace(/[\u200B-\u200D\uFEFF]/g, "").replace(/\s+/g, " ").trim();
}

function readField(entry, field, moduleType) {
  const f = normalizeFieldPath(field);
  if (moduleType === "sentences") return entry.lv;
  if (moduleType === "verbs") {
    const formKey = f.includes(".") ? f.split(".")[0] : f;
    return entry?.[formKey]?.lv;
  }
  if (f === "lv") return entry.lv;
  return getAt(entry, f);
}

function verifyModuleOwner(moduleKey) {
  const cfg = getModuleConfig(moduleKey);
  const expected = MODULE_EXPECTED[moduleKey];
  const decisionsPath = path.join(ROOT, `reports/es-de-${moduleKey === "sentences" ? "sentences" : moduleKey}-owner-decisions-final.json`);
  const applyLogPath = path.join(ROOT, `reports/temp/es-de-${moduleKey}-owner-repair-apply-final-log.json`);

  const decisions = JSON.parse(fs.readFileSync(decisionsPath, "utf8"));
  const items = decisions.decisions || decisions.items || [];
  const esData = loadArray(cfg.productionPath, cfg.globalKey);
  const deRef = loadArray(cfg.deReferencePath, cfg.globalKey);

  const result = {
    module: cfg.moduleKey,
    total: items.length,
    labot: { expected: expected.labot, matched: 0, failures: [] },
    nelabot: { expected: expected.nelabot, matched: 0, failures: [] },
    sourceDeIssue: { expected: 0, matched: 0, failures: [] },
    unresolved: 0,
    duplicates: 0,
    applyLogVerified: null,
  };

  const seen = new Set();
  const allowed = new Set(["LABOT", "NELABOT", "SOURCE_DE_ISSUE"]);

  for (const item of items) {
    const key = `${item.cardId}|${normalizeFieldPath(item.field || "lv")}`;
    if (seen.has(key)) result.duplicates += 1;
    seen.add(key);
    if (!allowed.has(item.status)) result.unresolved += 1;

    const { entry } = resolveCard(esData, item.cardId, cfg);
    if (!entry) {
      const fail = { id: item.id, cardId: item.cardId, field: item.field, reason: "card_not_found" };
      if (item.status === "LABOT") result.labot.failures.push(fail);
      else if (item.status === "NELABOT") result.nelabot.failures.push(fail);
      continue;
    }

    const actual = readField(entry, item.field || "lv", cfg.type);

    if (item.status === "LABOT") {
      if (normalizeComparable(actual) === normalizeComparable(item.new)) result.labot.matched += 1;
      else {
        result.labot.failures.push({
          id: item.id,
          cardId: item.cardId,
          field: item.field,
          expected: item.new,
          actual: actual === undefined ? "(undefined)" : actual,
        });
      }
    } else if (item.status === "NELABOT") {
      if (normalizeComparable(actual) === normalizeComparable(item.current)) result.nelabot.matched += 1;
      else {
        result.nelabot.failures.push({
          id: item.id,
          cardId: item.cardId,
          field: item.field,
          expected: item.current,
          actual: actual === undefined ? "(undefined)" : actual,
        });
      }
    }
  }

  if (fs.existsSync(applyLogPath)) {
    const applyLog = JSON.parse(fs.readFileSync(applyLogPath, "utf8"));
    result.applyLogVerified =
      applyLog.summary?.appliedVerified === expected.labot &&
      applyLog.summary?.nelabotUnchanged === expected.nelabot &&
      applyLog.summary?.deChanges === 0 &&
      applyLog.summary?.mirrorPass === "PASS" &&
      applyLog.summary?.syntaxPass === "PASS";
  } else {
    result.applyLogVerified = false;
  }

  const structure = verifyModuleStructure(cfg, esData, deRef, expected);
  result.structure = structure;

  result.pass =
    items.length === expected.total &&
    result.labot.matched === expected.labot &&
    result.nelabot.matched === expected.nelabot &&
    result.unresolved === 0 &&
    result.duplicates === 0 &&
    result.applyLogVerified === true &&
    structure.pass;

  return result;
}

function verifyModuleStructure(cfg, esData, deRef, expected) {
  const result = {
    totalCards: esData.length,
    studyCount: cfg.type === "vocab" ? esData.filter((e) => e.study).length : 0,
    mirrorPass: isSyncedWithWww(cfg.productionPath),
    syntaxPass: true,
    idOrderPass: true,
    deFieldChanges: 0,
  };

  try {
    execSync(`node --check ${cfg.productionPath}`, { cwd: ROOT, stdio: "pipe" });
    execSync(`node --check ${cfg.wwwPath}`, { cwd: ROOT, stdio: "pipe" });
  } catch {
    result.syntaxPass = false;
  }

  if (cfg.type === "vocab") {
    for (let i = 0; i < Math.min(esData.length, deRef.length); i++) {
      if (esData[i].de !== deRef[i].de) {
        result.idOrderPass = false;
        break;
      }
      for (const f of VOCAB_DE_FIELDS) {
        if (JSON.stringify(esData[i]?.[f]) !== JSON.stringify(deRef[i]?.[f])) result.deFieldChanges += 1;
      }
    }
  } else if (cfg.type === "sentences") {
    for (let i = 0; i < Math.min(esData.length, deRef.length); i++) {
      if (esData[i].de !== deRef[i].de) {
        result.idOrderPass = false;
        break;
      }
      for (const f of SENTENCE_DE_FIELDS) {
        if (JSON.stringify(esData[i]?.[f]) !== JSON.stringify(deRef[i]?.[f])) result.deFieldChanges += 1;
      }
    }
  } else if (cfg.type === "verbs") {
    for (let i = 0; i < Math.min(esData.length, deRef.length); i++) {
      for (const formKey of VERB_FORM_KEYS) {
        if (esData[i]?.[formKey]?.de !== deRef[i]?.[formKey]?.de) result.deFieldChanges += 1;
      }
    }
  }

  result.pass =
    result.totalCards === expected.totalCards &&
    result.studyCount === expected.studyCount &&
    result.mirrorPass &&
    result.syntaxPass &&
    result.idOrderPass &&
    result.deFieldChanges === 0;

  return result;
}

function verifyChangeBoundaries() {
  const changedProd = git("git diff --name-only origin/main...HEAD")
    .split("\n")
    .filter(Boolean)
    .filter((f) => f.startsWith("data/") || f.startsWith("www/data/"));

  const expectedProd = new Set();
  for (const key of ALL_MODULE_KEYS) {
    const cfg = getModuleConfig(key);
    expectedProd.add(cfg.productionPath);
    expectedProd.add(cfg.wwwPath);
  }

  const unexpectedProd = changedProd.filter((f) => !expectedProd.has(f));
  const deMasterDiff = ALL_MODULE_KEYS.filter((key) => {
    const cfg = getModuleConfig(key);
    return git(`git diff origin/main -- ${cfg.deReferencePath}`).length > 0;
  });

  const otherLangDiff = git("git diff --name-only origin/main")
    .split("\n")
    .filter(Boolean)
    .filter(
      (f) =>
        (f.startsWith("data/") || f.startsWith("www/data/")) &&
        !f.startsWith("data/es/") &&
        !f.startsWith("www/data/es/"),
    );

  return {
    changedProductionFiles: changedProd,
    unexpectedProductionFiles: unexpectedProd,
    deMasterFilesChanged: deMasterDiff,
    otherLangProductionFiles: otherLangDiff,
    pass: unexpectedProd.length === 0 && deMasterDiff.length === 0 && otherLangDiff.length === 0,
  };
}

function getPrMergeReadiness(gatesPass) {
  if (SKIP_PR_CHECK) return { checked: false, ready: true, reason: "skipped" };
  if (!gatesPass) return { checked: true, ready: false, reason: "closure gates not PASS" };
  try {
    const raw = execSync(
      `gh pr view ${PR} --json state,isDraft,baseRefName,headRefName,mergeable,mergeStateStatus,statusCheckRollup,files,headRefOid`,
      { cwd: ROOT, encoding: "utf8" },
    );
    const pr = JSON.parse(raw);
    const failedChecks = (pr.statusCheckRollup || []).filter((c) => c.conclusion === "FAILURE");
    const pendingChecks = (pr.statusCheckRollup || []).filter(
      (c) => c.status === "IN_PROGRESS" || c.status === "QUEUED",
    );
    const prodFiles = (pr.files || []).filter(
      (f) => (f.path.startsWith("data/") || f.path.startsWith("www/data/")) && !f.path.startsWith("reports/"),
    );
    const expectedProd = new Set();
    for (const key of ALL_MODULE_KEYS) {
      const cfg = getModuleConfig(key);
      expectedProd.add(cfg.productionPath);
      expectedProd.add(cfg.wwwPath);
    }
    const unexpectedProd = prodFiles.filter((f) => !expectedProd.has(f.path));
    const ready =
      pr.state === "OPEN" &&
      pr.baseRefName === "main" &&
      pr.headRefName === BRANCH &&
      pr.mergeable !== "CONFLICTING" &&
      pr.mergeStateStatus !== "DIRTY" &&
      failedChecks.length === 0 &&
      pendingChecks.length === 0 &&
      unexpectedProd.length === 0;

    return {
      checked: true,
      ready,
      pr: {
        state: pr.state,
        isDraft: pr.isDraft,
        baseRefName: pr.baseRefName,
        headRefName: pr.headRefName,
        headRefOid: pr.headRefOid,
        mergeable: pr.mergeable,
        mergeStateStatus: pr.mergeStateStatus,
        failedChecks: failedChecks.length,
        pendingChecks: pendingChecks.length,
        changedProductionFiles: prodFiles.map((f) => f.path),
        unexpectedProductionFiles: unexpectedProd.map((f) => f.path),
      },
    };
  } catch (error) {
    return { checked: false, ready: false, reason: error.message };
  }
}

function isClosedOnMain(head, branch) {
  if (branch === "main") return true;
  try {
    const raw = execSync(`gh pr view ${PR} --json state,mergeCommit`, { cwd: ROOT, encoding: "utf8" });
    const pr = JSON.parse(raw);
    return pr.state === "MERGED" && Boolean(pr.mergeCommit?.oid);
  } catch {
    return false;
  }
}

function determineVerdict(ctx) {
  if (!ctx.totals.labotPass || !ctx.totals.nelabotPass || !ctx.totals.unresolvedPass) {
    return `FAIL — OWNER retention (LABOT ${ctx.totals.labotMatched}/${TOTAL_EXPECTED.labot}, NELABOT ${ctx.totals.nelabotMatched}/${TOTAL_EXPECTED.nelabot})`;
  }
  if (!ctx.allModulesPass) return "FAIL — module structure/apply checks";
  if (!ctx.changeBoundaries.pass) return "BLOCKED — unexpected production/DE changes";
  if (ctx.closedOnMain) {
    return "PASS — ES–DE B2/C1/C2/Teikumi/Darbības vārdi OWNER ACCEPTED / CLOSED ON MAIN";
  }
  if (!ctx.prMergeReadiness.ready && !SKIP_PR_CHECK) {
    const r = ctx.prMergeReadiness;
    if (r.pr?.isDraft) return "BLOCKED — PR is draft";
    if (r.pr?.mergeable === "CONFLICTING") return "BLOCKED — merge conflicts";
    if (r.pr?.failedChecks > 0) return "BLOCKED — failed CI checks";
    if (r.pr?.pendingChecks > 0) return "BLOCKED — pending CI checks";
    return `BLOCKED — PR not merge-ready (${r.reason || "checks"})`;
  }
  return "PASS — ES–DE B2/C1/C2/Teikumi/Darbības vārdi OWNER ACCEPTED / READY TO MERGE";
}

function buildReportMd(ctx) {
  const lines = [
    "# ES–DE B2/C1/C2/Teikumi/Darbības vārdi — deterministiskā final closure",
    "",
    `**HEAD:** \`${ctx.head}\``,
    `**Branch:** \`${ctx.branch}\``,
    `**PR:** #${PR}`,
    `**MASTER:** \`${MASTER_FILE}\` v${MASTER_VERSION}`,
    "",
    "> Deterministiska pārbaude bez Luna/API. Production faili netika mainīti šajā solī.",
    "",
    "## Kopējais kopsavilkums",
    "",
    "| Metrika | Rezultāts |",
    "|---------|----------:|",
    `| LABOT (production === NEW) | ${ctx.totals.labotMatched}/${TOTAL_EXPECTED.labot} |`,
    `| NELABOT unchanged | ${ctx.totals.nelabotMatched}/${TOTAL_EXPECTED.nelabot} |`,
    `| Unresolved | ${ctx.totals.unresolved} |`,
    `| DE izmaiņas | ${ctx.totals.deChanges} |`,
    "",
    "## Moduļu OWNER retention",
    "",
    "| Modulis | LABOT | NELABOT | Kartītes | Study | Mirror | Syntax | ID/order |",
    "|---------|------:|--------:|---------:|------:|--------|--------|----------|",
  ];

  for (const mod of ctx.modules) {
    const exp = MODULE_EXPECTED[mod.key];
    const s = mod.result.structure;
    lines.push(
      `| ${mod.result.module} | ${mod.result.labot.matched}/${exp.labot} | ${mod.result.nelabot.matched}/${exp.nelabot} | ${s.totalCards}/${exp.totalCards} | ${s.studyCount}/${exp.studyCount} | ${s.mirrorPass ? "PASS" : "FAIL"} | ${s.syntaxPass ? "PASS" : "FAIL"} | ${s.idOrderPass ? "PASS" : "FAIL"} |`,
    );
  }

  lines.push(
    "",
    "## Izmaiņu robežas",
    "",
    "| Metrika | Rezultāts |",
    "|---------|----------:|",
    `| DE master faili mainīti | ${ctx.changeBoundaries.deMasterFilesChanged.length} |`,
    `| Citas valodas production | ${ctx.changeBoundaries.otherLangProductionFiles.length} |`,
    `| Neatļauti production faili | ${ctx.changeBoundaries.unexpectedProductionFiles.length} |`,
    "",
    "**Changed production files (vs main):**",
    "",
    ...ctx.changeBoundaries.changedProductionFiles.map((f) => `- \`${f}\``),
    "",
  );

  if (ctx.prMergeReadiness.checked && ctx.prMergeReadiness.pr) {
    const pr = ctx.prMergeReadiness.pr;
    lines.push(
      "## PR #667 merge-readiness",
      "",
      "| Metrika | Rezultāts |",
      "|---------|----------:|",
      `| State | ${pr.state} |`,
      `| Draft | ${pr.isDraft} |`,
      `| Mergeable | ${pr.mergeable} |`,
      `| Merge state | ${pr.mergeStateStatus} |`,
      `| Failed checks | ${pr.failedChecks} |`,
      `| Pending checks | ${pr.pendingChecks} |`,
      "",
    );
  }

  lines.push(`## FINAL VERDICT: **${ctx.verdict}**`, "");

  if (ctx.closedOnMain) {
    lines.push("**Status:** ES–DE B2/C1/C2/Teikumi/Darbības vārdi — OWNER ACCEPTED / CLOSED ON MAIN", "");
  } else if (ctx.verdict.startsWith("PASS")) {
    lines.push("**Status:** READY TO MERGE", "");
  }

  return lines.join("\n");
}

function main() {
  const head = git("git rev-parse HEAD");
  const branch = git("git branch --show-current");
  git("git fetch origin main 2>/dev/null || true");

  const modules = ALL_MODULE_KEYS.map((key) => ({
    key,
    result: verifyModuleOwner(key),
  }));

  const totals = {
    labotMatched: modules.reduce((n, m) => n + m.result.labot.matched, 0),
    nelabotMatched: modules.reduce((n, m) => n + m.result.nelabot.matched, 0),
    unresolved: modules.reduce((n, m) => n + m.result.unresolved, 0),
    deChanges: modules.reduce((n, m) => n + m.result.structure.deFieldChanges, 0),
    labotPass: modules.every((m) => m.result.labot.matched === MODULE_EXPECTED[m.key].labot),
    nelabotPass: modules.every((m) => m.result.nelabot.matched === MODULE_EXPECTED[m.key].nelabot),
    unresolvedPass: modules.every((m) => m.result.unresolved === 0),
  };

  const allModulesPass = modules.every((m) => m.result.pass);
  const changeBoundaries = verifyChangeBoundaries();
  const gatesPass = totals.labotPass && totals.nelabotPass && totals.unresolvedPass && allModulesPass && changeBoundaries.pass;
  const closedOnMain = isClosedOnMain(head, branch);
  const prMergeReadiness = getPrMergeReadiness(gatesPass || closedOnMain);
  const verdict = determineVerdict({
    totals,
    allModulesPass,
    changeBoundaries,
    prMergeReadiness,
    closedOnMain,
  });

  const payload = {
    meta: { head, branch, pr: PR, prBranch: BRANCH, closedOnMain, timestamp: new Date().toISOString(), lunaUsed: false },
    totals,
    modules: modules.map((m) => ({ key: m.key, ...m.result })),
    changeBoundaries,
    prMergeReadiness,
    verdict,
  };

  fs.mkdirSync(path.dirname(REPORT_JSON), { recursive: true });
  fs.writeFileSync(
    REPORT_MD,
    buildReportMd({ head, branch, modules, totals, changeBoundaries, prMergeReadiness, verdict, closedOnMain }),
  );
  fs.writeFileSync(REPORT_JSON, JSON.stringify(payload, null, 2) + "\n");

  if (JSON_OUT) console.log(JSON.stringify(payload, null, 2));
  else console.log(JSON.stringify({ verdict, totals, allModulesPass, prReady: prMergeReadiness.ready }, null, 2));

  process.exit(verdict.startsWith("PASS") ? 0 : 1);
}

main();
