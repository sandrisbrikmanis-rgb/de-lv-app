#!/usr/bin/env node
"use strict";
/**
 * ES-DE B1 deterministic final closure (READ-ONLY, no Luna).
 * Usage: node scripts/verify-es-de-b1-final-closure.js [--json]
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync, spawnSync } = require("child_process");
const { ROOT, isSyncedWithWww } = require("./lib/audit-common");
const { PRODUCTION_PATH, TOTAL_CARDS, STUDY_COUNT } = require("./lib/es-b1-discovery-config");
const { resolveCard, normalizeFieldPath, loadProductionCards } = require("./lib/es-b1-owner-context");
const { getAt } = require("./lib/da-a1-owner-path");

const JSON_OUT = process.argv.includes("--json");
const DECISIONS_JSON = path.join(ROOT, "reports/es-de-b1-owner-decisions-final.json");
const APPLY_MD = path.join(ROOT, "reports/es-de-b1-owner-repair-apply-final.md");
const APPLY_LOG = path.join(ROOT, "reports/temp/es-de-b1-owner-repair-apply-final-log.json");
const AUDIT_JSON = path.join(ROOT, "reports/es-de-b1-full-audit.json");
const COLLECT_JSON = path.join(ROOT, "reports/temp/es-de-b1-audit-data.json");
const REPORT_MD = path.join(ROOT, "reports/es-de-b1-final-closure.md");
const REPORT_JSON = path.join(ROOT, "reports/temp/es-de-b1-final-closure.json");
const PR = 665;
const BRANCH = "cursor/es-de-b1-first-full-discovery-master-1-9-3141";
const EXPECTED_HEAD_PREFIX = "e19c93c5";
const DE_FIELDS = ["de", "de_article", "de_plural", "level"];
const EXPECTED = {
  ownerObjects: 2842,
  labot: 2654,
  nelabot: 184,
  sourceDeIssue: 4,
  sourceFindings: 3795,
  totalCards: TOTAL_CARDS,
  studyCount: STUDY_COUNT,
  standardStudy: 323,
  minimalStudy: 1,
};

function git(cmd) {
  try {
    return execSync(cmd, { cwd: ROOT, encoding: "utf8" }).trim();
  } catch {
    return "";
  }
}

function loadWords(rel) {
  const filePath = path.join(ROOT, rel);
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.B1_WORDS;
}

function readField(entry, field) {
  const f = normalizeFieldPath(field);
  if (f === "lv") return entry.lv;
  return getAt(entry, f);
}

function countStudies(words) {
  return words.filter((e) => e.study && typeof e.study === "object").length;
}

function countLayout(words, layout) {
  return words.filter((e) => e.study?.layout === layout).length;
}

function verifyOwnerRetention(decisions, words, lvWords) {
  const items = decisions.items || [];
  const result = {
    total: items.length,
    labot: { expected: EXPECTED.labot, matched: 0, failures: [] },
    nelabot: { expected: EXPECTED.nelabot, matched: 0, failures: [] },
    sourceDeIssue: { expected: EXPECTED.sourceDeIssue, matched: 0, failures: [] },
    unresolved: 0,
    duplicates: 0,
    findingIdsCovered: 0,
    findingIdsTotal: EXPECTED.sourceFindings,
  };

  const seen = new Set();
  const findingIds = new Set();
  const allowedStatuses = new Set(["LABOT", "NELABOT", "SOURCE_DE_ISSUE"]);

  for (const item of items) {
    const key = `${item.cardId}|${normalizeFieldPath(item.field)}`;
    if (seen.has(key)) result.duplicates += 1;
    seen.add(key);
    for (const fid of item.sourceFindingIds || []) findingIds.add(fid);

    if (!allowedStatuses.has(item.status)) result.unresolved += 1;

    const { entry, index } = resolveCard(words, item.cardId);
    const lvEntry = index >= 0 ? lvWords[index] : null;

    if (!entry) {
      const fail = { id: item.id, cardId: item.cardId, field: item.field, reason: "card_not_found" };
      if (item.status === "LABOT") result.labot.failures.push(fail);
      else if (item.status === "NELABOT") result.nelabot.failures.push(fail);
      else result.sourceDeIssue.failures.push(fail);
      continue;
    }

    const actual = readField(entry, item.field);

    if (item.status === "LABOT") {
      if (String(actual) === String(item.new)) result.labot.matched += 1;
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
      if (String(actual) === String(item.current)) result.nelabot.matched += 1;
      else {
        result.nelabot.failures.push({
          id: item.id,
          cardId: item.cardId,
          field: item.field,
          expected: item.current,
          actual: actual === undefined ? "(undefined)" : actual,
        });
      }
    } else if (item.status === "SOURCE_DE_ISSUE") {
      let ok = String(actual) === String(item.current);
      if (lvEntry) {
        for (const f of DE_FIELDS) {
          if (JSON.stringify(entry[f]) !== JSON.stringify(lvEntry[f])) ok = false;
        }
      }
      if (ok) result.sourceDeIssue.matched += 1;
      else {
        result.sourceDeIssue.failures.push({
          id: item.id,
          cardId: item.cardId,
          field: item.field,
          esActual: actual,
          esExpected: item.current,
        });
      }
    }
  }

  result.findingIdsCovered = findingIds.size;
  result.pass =
    result.total === EXPECTED.ownerObjects &&
    result.labot.matched === EXPECTED.labot &&
    result.nelabot.matched === EXPECTED.nelabot &&
    result.sourceDeIssue.matched === EXPECTED.sourceDeIssue &&
    result.unresolved === 0 &&
    result.duplicates === 0 &&
    result.findingIdsCovered === EXPECTED.sourceFindings;

  return result;
}

function verifyStructure(words, lvWords) {
  const result = {
    totalCards: words.length,
    studyCount: countStudies(words),
    standardStudy: countLayout(words, "standardStudy"),
    minimalStudy: countLayout(words, "minimalStudy"),
    comparisonStudy: countLayout(words, "comparisonStudy"),
    uniqueStudyIds: 0,
    duplicateStudyIds: 0,
    idOrderPass: true,
    syntaxPass: true,
    mirrorPass: isSyncedWithWww(PRODUCTION_PATH),
    invalidPaths: [],
  };

  const ids = new Set();
  for (let i = 0; i < words.length; i++) {
    if (words[i].de !== lvWords[i]?.de) {
      result.idOrderPass = false;
      break;
    }
    const sid = words[i].study?.id;
    if (sid) {
      if (ids.has(sid)) result.duplicateStudyIds += 1;
      ids.add(sid);
    }
  }
  result.uniqueStudyIds = ids.size;

  try {
    execSync(`node --check ${PRODUCTION_PATH}`, { cwd: ROOT, stdio: "pipe" });
    execSync(`node --check www/${PRODUCTION_PATH}`, { cwd: ROOT, stdio: "pipe" });
  } catch {
    result.syntaxPass = false;
  }

  result.pass =
    result.totalCards === EXPECTED.totalCards &&
    result.studyCount === EXPECTED.studyCount &&
    result.standardStudy === EXPECTED.standardStudy &&
    result.minimalStudy === EXPECTED.minimalStudy &&
    result.duplicateStudyIds === 0 &&
    result.idOrderPass &&
    result.syntaxPass &&
    result.mirrorPass;

  return result;
}

function verifyChangeBoundaries() {
  const changedProd = git("git diff --name-only origin/main...HEAD")
    .split("\n")
    .filter(Boolean)
    .filter((f) => f.startsWith("data/") || f.startsWith("www/data/"));

  const expectedProd = new Set([PRODUCTION_PATH, `www/${PRODUCTION_PATH}`]);
  const unexpectedProd = changedProd.filter((f) => !expectedProd.has(f));

  const deMasterDiff = git("git diff origin/main -- data/b1.js").length;
  const otherLangDiff = git("git diff --name-only origin/main")
    .split("\n")
    .filter(Boolean)
    .filter(
      (f) =>
        (f.startsWith("data/") || f.startsWith("www/data/")) &&
        !f.startsWith("data/es/") &&
        !f.startsWith("www/data/es/"),
    );

  let deFieldChanges = 0;
  try {
    const esWords = loadWords(PRODUCTION_PATH);
    const lvWords = loadWords("data/b1.js");
    for (let i = 0; i < esWords.length; i++) {
      for (const f of DE_FIELDS) {
        if (JSON.stringify(esWords[i]?.[f]) !== JSON.stringify(lvWords[i]?.[f])) deFieldChanges += 1;
      }
    }
  } catch {
    deFieldChanges = -1;
  }

  return {
    changedProductionFiles: changedProd,
    unexpectedProductionFiles: unexpectedProd,
    deMasterDiffBytes: deMasterDiff,
    otherLangProductionFiles: otherLangDiff,
    deFieldChanges,
    pass: unexpectedProd.length === 0 && deMasterDiff === 0 && otherLangDiff.length === 0 && deFieldChanges === 0,
  };
}

function runCollectors() {
  const collectResult = spawnSync("node", ["scripts/audit-es-b1-collect.js"], {
    cwd: ROOT,
    encoding: "utf8",
    maxBuffer: 32 * 1024 * 1024,
  });
  const collect = fs.existsSync(COLLECT_JSON)
    ? JSON.parse(fs.readFileSync(COLLECT_JSON, "utf8"))
    : null;

  let studyDesign = null;
  const studyResult = spawnSync("node", ["scripts/validate-study-design.js", "--lang=es"], {
    cwd: ROOT,
    encoding: "utf8",
    maxBuffer: 32 * 1024 * 1024,
  });
  if (studyResult.stdout) {
    try {
      studyDesign = JSON.parse(studyResult.stdout);
    } catch {
      studyDesign = null;
    }
  }

  const b1Study = studyDesign?.perFile?.find((f) => f.file === PRODUCTION_PATH) || null;

  return {
    collectExit: collectResult.status,
    collect,
    studyDesignB1: b1Study,
    structuralPass: collect?.structural?.pass ?? false,
    germanPass: collect?.germanIntegrity?.pass ?? false,
    technicalPass: collect?.technical?.pass ?? false,
    lvRemnantCount: collect?.lvRemnants?.issues?.length ?? 0,
    sectionAccentCount: collect?.sectionAccents?.issues?.length ?? 0,
    studyIssueCount: collect?.studyCards?.issues?.length ?? 0,
    sectionAccentIssuesB1: b1Study?.sectionAccentIssues ?? null,
    studyObjectNoRenderable: b1Study?.studyObjectNoRenderable ?? null,
  };
}

function reconcileCollectors(decisions, collector) {
  const items = decisions.items || [];
  const ownersByCard = new Map();
  for (const item of items) {
    if (!ownersByCard.has(item.cardId)) ownersByCard.set(item.cardId, []);
    ownersByCard.get(item.cardId).push(item);
  }

  const lvIssues = collector.collect?.lvRemnants?.issues || [];
  const sectionIssues = collector.collect?.sectionAccents?.issues || [];

  function reconcileIssue(issue, kind) {
    const cardId = issue.id;
    const owners = ownersByCard.get(cardId) || [];
    if (!owners.length) {
      return { status: "UNCOVERED", issue, kind };
    }
    const path = (issue.path || "").replace(/^entry\[\d+\]\./, "");
    const field = normalizeFieldPath(path || issue.field || "");
    const exact = owners.find((o) => normalizeFieldPath(o.field) === field);
    if (exact) {
      if (exact.status === "NELABOT") return { status: "OWNER_ACCEPTED", reason: "NELABOT", id: exact.id, kind };
      if (exact.status === "LABOT") return { status: "OWNER_ACCEPTED", reason: "LABOT applied", id: exact.id, kind };
      if (exact.status === "SOURCE_DE_ISSUE") {
        return { status: "OWNER_ACCEPTED", reason: "SOURCE_DE_ISSUE", id: exact.id, kind };
      }
    }
    const nelabotOnCard = owners.some((o) => o.status === "NELABOT");
    const labotOnCard = owners.some((o) => o.status === "LABOT");
    if (nelabotOnCard || labotOnCard) {
      return { status: "OWNER_ACCEPTED", reason: "card-level owner coverage", cardId, kind };
    }
    return { status: "UNCOVERED", issue, kind };
  }

  const lvReconciled = lvIssues.map((i) => reconcileIssue(i, "LV_REMNANT"));
  const sectionReconciled = sectionIssues.map((i) => reconcileIssue(i, "SECTION_ACCENT"));
  const all = [...lvReconciled, ...sectionReconciled];
  const uncovered = all.filter((r) => r.status === "UNCOVERED");
  const accepted = all.filter((r) => r.status === "OWNER_ACCEPTED");

  return {
    lvRemnantRaw: lvIssues.length,
    sectionAccentRaw: sectionIssues.length,
    ownerAccepted: accepted.length,
    uncovered: uncovered.length,
    uncoveredSamples: uncovered.slice(0, 10),
    pass: uncovered.length === 0 && (collector.collect?.structural?.pass ?? false) && (collector.collect?.germanIntegrity?.pass ?? false),
  };
}

function getPrMergeReadiness(gatesPass) {
  if (!gatesPass) {
    return { checked: true, ready: false, reason: "closure gates not PASS" };
  }
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
      (f) =>
        (f.path.startsWith("data/") || f.path.startsWith("www/data/")) &&
        !f.path.startsWith("reports/"),
    );
    const unexpectedProd = prodFiles.filter(
      (f) => f.path !== PRODUCTION_PATH && f.path !== `www/${PRODUCTION_PATH}`,
    );
    const ready =
      pr.state === "OPEN" &&
      pr.baseRefName === "main" &&
      pr.headRefName === BRANCH &&
      pr.mergeable !== "CONFLICTING" &&
      pr.mergeStateStatus !== "DIRTY" &&
      failedChecks.length === 0 &&
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

function determineVerdict(ctx) {
  if (!ctx.ownerRetention.pass) {
    return `FAIL — OWNER retention (${ctx.ownerRetention.labot.matched}/${EXPECTED.labot} LABOT)`;
  }
  if (!ctx.structure.pass) {
    return `FAIL — structural check (${ctx.structure.totalCards} cards)`;
  }
  if (!ctx.changeBoundaries.pass) {
    return `BLOCKED — unexpected production changes`;
  }
  if (!ctx.collectorReconciliation.pass) {
    return `FAIL — uncovered collector defects (${ctx.collectorReconciliation.uncovered})`;
  }
  if (!ctx.prMergeReadiness.ready) {
    const r = ctx.prMergeReadiness;
    if (r.pr?.isDraft) return "BLOCKED — PR is draft";
    if (r.pr?.mergeable === "CONFLICTING") return "BLOCKED — merge conflicts";
    if (r.pr?.unexpectedProductionFiles?.length) return "BLOCKED — unexpected PR production files";
    return `BLOCKED — PR not merge-ready (${r.reason || "checks"})`;
  }
  return "PASS — ES–DE B1 OWNER ACCEPTED / READY TO MERGE";
}

function buildReportMd(ctx) {
  const lines = [
    "# ES–DE B1 — deterministiskā final closure",
    "",
    `**Sākuma HEAD:** \`${ctx.headStart}\``,
    `**Gala HEAD:** \`${ctx.headEnd}\``,
    `**Branch:** \`${BRANCH}\``,
    `**PR:** #${PR}`,
    "",
    "> Deterministiska pārbaude bez Luna/API. Production faili netika mainīti šajā solī.",
    "",
    "## OWNER retention",
    "",
    "| Metrika | Rezultāts |",
    "|---------|----------:|",
    `| OWNER objekti | ${ctx.ownerRetention.total}/${EXPECTED.ownerObjects} |`,
    `| LABOT (production === NEW) | ${ctx.ownerRetention.labot.matched}/${EXPECTED.labot} |`,
    `| NELABOT unchanged | ${ctx.ownerRetention.nelabot.matched}/${EXPECTED.nelabot} |`,
    `| SOURCE_DE_ISSUE unchanged | ${ctx.ownerRetention.sourceDeIssue.matched}/${EXPECTED.sourceDeIssue} |`,
    `| Unresolved | ${ctx.ownerRetention.unresolved} |`,
    `| Dublikāti (cardId, field) | ${ctx.ownerRetention.duplicates} |`,
    `| Source findings coverage | ${ctx.ownerRetention.findingIdsCovered}/${EXPECTED.sourceFindings} |`,
    "",
    "## Struktūra",
    "",
    "| Metrika | Rezultāts |",
    "|---------|----------:|",
    `| B1 kartītes | ${ctx.structure.totalCards} |`,
    `| Study | ${ctx.structure.studyCount} |`,
    `| standardStudy | ${ctx.structure.standardStudy} |`,
    `| minimalStudy | ${ctx.structure.minimalStudy} |`,
    `| Unikāli study ID | ${ctx.structure.uniqueStudyIds} |`,
    `| Dublikāti study ID | ${ctx.structure.duplicateStudyIds} |`,
    `| ID/order | ${ctx.structure.idOrderPass ? "PASS" : "FAIL"} |`,
    `| Syntax | ${ctx.structure.syntaxPass ? "PASS" : "FAIL"} |`,
    `| Mirror | ${ctx.structure.mirrorPass ? "PASS" : "FAIL"} |`,
    "",
    "## Izmaiņu robežas",
    "",
    "| Metrika | Rezultāts |",
    "|---------|----------:|",
    `| DE production izmaiņas (data/b1.js diff) | ${ctx.changeBoundaries.deMasterDiffBytes} bytes |`,
    `| DE lauku izmaiņas ES kartītēs | ${ctx.changeBoundaries.deFieldChanges} |`,
    `| Citas valodas production faili mainīti | ${ctx.changeBoundaries.otherLangProductionFiles.length} |`,
    `| Neatļauti production faili | ${ctx.changeBoundaries.unexpectedProductionFiles.length} |`,
    "",
    "**Changed production files (vs main):**",
    "",
    ...ctx.changeBoundaries.changedProductionFiles.map((f) => `- \`${f}\``),
    "",
    "## Deterministiskie kolektori",
    "",
    "| Kolektors | Rezultāts |",
    "|-----------|----------:|",
    `| audit-es-b1-collect structural | ${ctx.collectors.structuralPass ? "PASS" : "FAIL"} |`,
    `| audit-es-b1-collect germanIntegrity | ${ctx.collectors.germanPass ? "PASS" : "FAIL"} |`,
    `| audit-es-b1-collect technical | ${ctx.collectors.technicalPass ? "PASS" : "FAIL"} |`,
    `| LV/IT/EN remnant signāli (raw) | ${ctx.collectors.lvRemnantCount} |`,
    `| sectionAccents signāli (raw) | ${ctx.collectors.sectionAccentCount} |`,
    `| Study struktūras signāli | ${ctx.collectors.studyIssueCount} |`,
    `| validate-study-design B1 sectionAccentIssues | ${ctx.collectors.sectionAccentIssuesB1 ?? "n/a"} |`,
    `| OWNER_ACCEPTED (reconciled) | ${ctx.collectorReconciliation.ownerAccepted} |`,
    `| Neatrisināti (nav OWNER mapping) | ${ctx.collectorReconciliation.uncovered} |`,
    "",
    "## Apply atsauce",
    "",
    `- Authority: \`reports/es-de-b1-owner-decisions-final.json\``,
    `- Apply report: \`reports/es-de-b1-owner-repair-apply-final.md\``,
    `- Apply log: \`reports/temp/es-de-b1-owner-repair-apply-final-log.json\``,
    "",
    "## PR #665 merge-readiness",
    "",
  ];

  const pr = ctx.prMergeReadiness;
  if (pr.checked && pr.pr) {
    lines.push(
      "| Metrika | Rezultāts |",
      "|---------|----------:|",
      `| State | ${pr.pr.state} |`,
      `| Draft | ${pr.pr.isDraft} |`,
      `| Base | ${pr.pr.baseRefName} |`,
      `| Head | ${pr.pr.headRefName} @ \`${pr.pr.headRefOid?.slice(0, 8)}\` |`,
      `| Mergeable | ${pr.pr.mergeable} |`,
      `| Merge state | ${pr.pr.mergeStateStatus} |`,
      `| Failed checks | ${pr.pr.failedChecks} |`,
      `| Pending checks | ${pr.pr.pendingChecks} |`,
      "",
      "**PR production files:**",
      "",
      ...pr.pr.changedProductionFiles.map((f) => `- \`${f}\``),
      "",
    );
  } else {
    lines.push(`PR check: ${pr.reason || "not available"}`, "");
  }

  lines.push(`## FINAL VERDICT: **${ctx.verdict}**`, "");

  if (ctx.ownerRetention.labot.failures.length) {
    lines.push("### LABOT failures", "");
    for (const f of ctx.ownerRetention.labot.failures.slice(0, 20)) {
      lines.push(`- ${f.id} \`${f.cardId}\` \`${f.field}\``);
    }
    lines.push("");
  }
  if (ctx.collectorReconciliation.uncoveredSamples.length) {
    lines.push("### Uncovered collector samples", "");
    for (const u of ctx.collectorReconciliation.uncoveredSamples) {
      lines.push(`- ${u.kind}: ${JSON.stringify(u.issue).slice(0, 120)}`);
    }
    lines.push("");
  }

  return lines.join("\n");
}

function main() {
  const headStart = git("git rev-parse HEAD");
  if (!headStart.startsWith(EXPECTED_HEAD_PREFIX)) {
    console.error(`STOP: HEAD ${headStart} does not start with ${EXPECTED_HEAD_PREFIX}`);
    process.exit(1);
  }

  if (!fs.existsSync(DECISIONS_JSON)) {
    console.error(`STOP: missing ${DECISIONS_JSON}`);
    process.exit(1);
  }

  const decisions = JSON.parse(fs.readFileSync(DECISIONS_JSON, "utf8"));
  const audit = JSON.parse(fs.readFileSync(AUDIT_JSON, "utf8"));
  const words = loadWords(PRODUCTION_PATH);
  const lvWords = loadWords("data/b1.js");

  const ownerRetention = verifyOwnerRetention(decisions, words, lvWords);
  const structure = verifyStructure(words, lvWords);
  const changeBoundaries = verifyChangeBoundaries();
  const collectors = runCollectors();
  const collectorReconciliation = reconcileCollectors(decisions, collectors);
  const gatesPass = ownerRetention.pass && structure.pass && changeBoundaries.pass && collectorReconciliation.pass;
  const prMergeReadiness = getPrMergeReadiness(gatesPass);
  const verdict = determineVerdict({
    ownerRetention,
    structure,
    changeBoundaries,
    collectorReconciliation,
    prMergeReadiness,
  });

  const headEnd = git("git rev-parse HEAD");
  const ctx = {
    headStart,
    headEnd,
    ownerRetention,
    structure,
    changeBoundaries,
    collectors,
    collectorReconciliation,
    prMergeReadiness,
    verdict,
    auditFindings: audit.counts?.rawFindings || EXPECTED.sourceFindings,
  };

  const payload = {
    meta: {
      headStart,
      headEnd,
      branch: BRANCH,
      pr: PR,
      timestamp: new Date().toISOString(),
      lunaUsed: false,
    },
    ownerRetention,
    structure,
    changeBoundaries,
    collectors: {
      structuralPass: collectors.structuralPass,
      germanPass: collectors.germanPass,
      technicalPass: collectors.technicalPass,
      lvRemnantCount: collectors.lvRemnantCount,
      sectionAccentCount: collectors.sectionAccentCount,
      studyIssueCount: collectors.studyIssueCount,
      sectionAccentIssuesB1: collectors.sectionAccentIssuesB1,
    },
    collectorReconciliation,
    prMergeReadiness,
    verdict,
  };

  fs.mkdirSync(path.dirname(REPORT_JSON), { recursive: true });
  fs.writeFileSync(REPORT_MD, buildReportMd(ctx));
  fs.writeFileSync(REPORT_JSON, JSON.stringify(payload, null, 2) + "\n");

  if (JSON_OUT) {
    console.log(JSON.stringify(payload, null, 2));
  } else {
    console.log(JSON.stringify({ verdict, ownerRetention: ownerRetention.pass, structure: structure.pass, prReady: prMergeReadiness.ready }, null, 2));
  }

  const pass = verdict.startsWith("PASS");
  process.exit(pass ? 0 : 1);
}

main();
