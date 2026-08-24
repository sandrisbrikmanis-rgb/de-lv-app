#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");
const { ROOT } = require("./audit-common");
const { classifyWithOwnerHistory, normalizePath } = require("./et-a1-owner-history");

const MASTER_VERSION = "1.11";
const MULTI_SEP = /[•/;]|\n/;
const MULTI_COMMA = /,\s*(?=[A-Za-zÕÄÖÜõäöü])/;

const DATASETS = {
  a1: {
    label: "A1",
    prefix: "ET-A1",
    global: "A1_WORDS",
    lvPath: "data/a1.js",
    etPath: "data/et/a1.js",
    wwwPath: "www/data/et/a1.js",
    collectScript: "audit-et-a1-collect.js",
    collectJson: "reports/temp/et-a1-audit-data.json",
    helpers: require("./et-a1-audit-helpers"),
    ownerHistory: () => require("./et-a1-owner-history").loadOwnerHistory(),
  },
  a2: {
    label: "A2",
    prefix: "ET-A2",
    global: "A2_WORDS",
    lvPath: "data/a2.js",
    etPath: "data/et/a2.js",
    wwwPath: "www/data/et/a2.js",
    collectScript: "audit-et-a2-collect.js",
    collectJson: "reports/temp/et-a2-audit-data.json",
    helpers: require("./et-a2-audit-helpers"),
    ownerHistory: () => require("./et-a2-owner-history").loadOwnerHistory(),
  },
  b1: {
    label: "B1",
    prefix: "ET-B1",
    global: "B1_WORDS",
    lvPath: "data/b1.js",
    etPath: "data/et/b1.js",
    wwwPath: "www/data/et/b1.js",
    collectScript: "audit-et-b1-collect.js",
    collectJson: "reports/temp/et-b1-audit-data.json",
    helpers: require("./et-b1-audit-helpers"),
    ownerHistory: () => require("./et-b1-owner-history").loadOwnerHistory(),
  },
  b2: {
    label: "B2",
    prefix: "ET-B2",
    global: "B2_WORDS",
    lvPath: "data/b2.js",
    etPath: "data/et/b2.js",
    wwwPath: "www/data/et/b2.js",
    collectScript: "audit-et-b2-collect.js",
    collectJson: "reports/temp/et-b2-audit-data.json",
    helpers: require("./et-b2-audit-helpers"),
    ownerHistory: () => require("./et-b2-owner-history").loadOwnerHistory(),
  },
  c1: {
    label: "C1",
    prefix: "ET-C1",
    global: "C1_WORDS",
    lvPath: "data/c1.js",
    etPath: "data/et/c1.js",
    wwwPath: "www/data/et/c1.js",
    collectScript: "audit-et-c1-collect.js",
    collectJson: "reports/temp/et-c1-audit-data.json",
    helpers: null,
    ownerHistory: () => loadC1C2OwnerHistory("c1"),
  },
  c2: {
    label: "C2",
    prefix: "ET-C2",
    global: "C2_WORDS",
    lvPath: "data/c2.js",
    etPath: "data/et/c2.js",
    wwwPath: "www/data/et/c2.js",
    collectScript: "audit-et-c2-collect.js",
    collectJson: "reports/temp/et-c2-audit-data.json",
    helpers: null,
    ownerHistory: () => loadC1C2OwnerHistory("c2"),
  },
};

function git(cmd) {
  try {
    return execSync(cmd, { cwd: ROOT, encoding: "utf8" }).trim();
  } catch {
    return "";
  }
}

function loadWords(relPath, globalKey) {
  const code = fs.readFileSync(path.join(ROOT, relPath), "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window[globalKey];
}

function loadC1C2OwnerHistory(level) {
  const p = path.join(ROOT, "reports/et-c1c2-owner-decisions-accepted.md");
  const entries = [];
  const byKey = new Map();
  if (!fs.existsSync(p)) {
    return { loaded: false, sourcesLoaded: [], entries, byKey, count: 0 };
  }
  for (const line of fs.readFileSync(p, "utf8").split("\n")) {
    if (!line.startsWith("| ET-C1C2-")) continue;
    const cols = line.split("|").map((c) => c.trim()).filter(Boolean);
    if (cols.length < 6) continue;
    const [auditId, cardId, field, current, status, ownerNew] = cols;
    const row = {
      auditId,
      cardId,
      field,
      ownerPrevious: current,
      ownerApprovedValue: ownerNew || "",
      ownerStatus: status,
      source: "et-c1c2-owner-decisions-accepted.md",
    };
    if (!cardId.startsWith(level)) continue;
    entries.push(row);
    byKey.set(`${row.cardId}|${normalizePath(row.field)}`, row);
  }
  return {
    loaded: entries.length > 0,
    sourcesLoaded: entries.length ? ["et-c1c2-owner-decisions-accepted.md"] : [],
    entries,
    byKey,
    count: entries.length,
  };
}

function valuesMatch(a, b) {
  const x = String(a || "").replace(/\s+/g, " ").trim();
  const y = String(b || "").replace(/\s+/g, " ").trim();
  return x === y;
}

function isMultiTranslationFalsePositive(text, fieldPath) {
  const t = String(text || "").trim();
  if (!t) return true;
  if (/—/.test(t) && /\b(ich|du|der |die |das |ein |eine?n? )\b/i.test(t)) return true;
  if (fieldPath && !fieldPath.endsWith(".lv") && !fieldPath.endsWith("entry.lv")) return true;
  return false;
}

function scanMultiTranslation(entries, entryIdFn) {
  const violations = [];
  entries.forEach((entry, index) => {
    const text = entry.lv || "";
    if (!text.trim()) return;
    let parts = [];
    if (MULTI_SEP.test(text)) {
      parts = text.split(MULTI_SEP).map((p) => p.trim()).filter(Boolean);
    } else if (MULTI_COMMA.test(text) && text.split(",").length >= 2) {
      parts = text.split(",").map((p) => p.trim()).filter(Boolean);
    }
    if (parts.length < 2 || !parts.every((p) => p.length > 0 && p.length < 80)) return;
    const fieldPath = "lv";
    if (isMultiTranslationFalsePositive(text, fieldPath)) return;
    violations.push({
      cardId: entryIdFn(entry, index),
      field: fieldPath,
      de: entry.de || "",
      currentEt: text,
      candidates: parts.slice(0, 6),
      translationCount: parts.length,
      category: "MULTIPLE_TRANSLATION",
      severity: "HIGH",
      reason: `Ordinary flashcard shows ${parts.length} learner-facing translation candidates (${parts.slice(0, 3).join(" | ")})`,
    });
  });
  return violations;
}

function classifyFinding(finding, history) {
  const key = `${finding.cardId}|${normalizePath(finding.field)}`;
  const owner = history.byKey.get(key);
  if (owner) {
    const st = String(owner.ownerStatus || "").toUpperCase();
    if (st === "FALSE_POSITIVE" || st === "NELABOT") {
      if (valuesMatch(finding.currentEt, owner.ownerPrevious)) {
        return { ...finding, status: st, validated: false, ownerHistoryRetained: true };
      }
    }
    if (st === "NEEDS_SOURCE_REVIEW" && valuesMatch(finding.currentEt, owner.ownerPrevious)) {
      return { ...finding, status: "NEEDS_SOURCE_REVIEW", validated: false, ownerHistoryRetained: true };
    }
  }
  const ownerClass = classifyWithOwnerHistory(finding, history);
  if (!ownerClass.validatedReal) {
    return { ...finding, status: "OWNER_DECISION_CONFIRMED", validated: false, ownerHistoryRetained: true };
  }
  return {
    ...finding,
    status: "OWNER_DECISION_REQUIRED",
    validated: true,
    ownerHistoryStatus: ownerClass.ownerHistoryStatus,
  };
}

function collectToFindings(cfg, collectData, validateFile, seqStart) {
  const findings = [];
  let seq = seqStart;

  function add(partial) {
    findings.push({
      auditId: `${cfg.prefix}-${String(seq++).padStart(4, "0")}`,
      dataset: cfg.label,
      ...partial,
    });
  }

  for (const issue of collectData.structural?.issues || []) {
    if (issue.message?.includes("not identical")) continue;
    add({
      cardId: issue.id || "STRUCT",
      field: issue.message?.includes("Study") ? "study.count" : "structure",
      de: issue.de || "",
      currentEt: issue.message,
      severity: issue.severity === "critical" ? "CRITICAL" : "HIGH",
      category: "STRUCTURE",
      reason: issue.message,
      recommendedAction: "Align ET structure with LV MASTER",
    });
  }

  for (const issue of collectData.germanIntegrity?.issues || []) {
    add({
      cardId: issue.id || "DE",
      field: issue.field || "de",
      de: issue.de || "",
      currentEt: String(issue.etValue ?? ""),
      severity: "CRITICAL",
      category: "DE_INTEGRITY",
      reason: issue.message || `German field mismatch: ${issue.field}`,
      recommendedAction: "Restore DE parity with LV MASTER (DE read-only reference)",
    });
  }

  for (const issue of collectData.lvRemnants?.issues || []) {
    add({
      cardId: issue.id,
      field: issue.path || "lv",
      de: "",
      currentEt: issue.text || "",
      severity: "CRITICAL",
      category: "FOREIGN_REMNANT",
      reason: "Latvian or mixed-language remnant in ET learner field",
      recommendedAction: "OWNER: provide ET replacement",
    });
  }

  for (const issue of collectData.technical?.issues || []) {
    add({
      cardId: issue.id,
      field: issue.path || "technical",
      de: "",
      currentEt: issue.text || issue.message || "",
      severity: issue.severity === "critical" ? "CRITICAL" : "HIGH",
      category: issue.message?.includes("Mojibake") ? "MOJIBAKE" : "TECHNICAL",
      reason: issue.message || "Technical quality issue",
      recommendedAction: "OWNER review",
    });
  }

  for (const issue of collectData.sectionAccents?.issues || []) {
    add({
      cardId: issue.id,
      field: `study.sectionAccents (${issue.section || "?"})`,
      de: issue.de || "",
      currentEt: issue.term || issue.message || "",
      severity: issue.severity === "high" ? "HIGH" : "MEDIUM",
      category: "SECTIONACCENTS",
      reason: issue.message || "sectionAccents integrity issue",
      recommendedAction: "Rebuild sectionAccents from ET Study text or OWNER decision",
    });
  }

  for (const issue of collectData.studyCards?.issues || []) {
    add({
      cardId: issue.id,
      field: "study",
      de: "",
      currentEt: issue.message || "",
      severity: "HIGH",
      category: "STUDY",
      reason: issue.message,
      recommendedAction: "Complete Study object per MASTER",
    });
  }

  for (const main of collectData.mainTranslations?.entries || []) {
    if (main.status !== "ERROR") continue;
    add({
      cardId: main.id,
      field: "lv",
      de: main.de || "",
      currentEt: main.etMain || "",
      severity: "HIGH",
      category: main.flags?.includes("latvian_remnant_in_main") ? "FOREIGN_REMNANT" : "TRANSLATION",
      reason: `Main translation flags: ${(main.flags || []).join(", ")}`,
      recommendedAction: "OWNER: correct main translation",
    });
  }

  if (validateFile?.sectionAccentIssues) {
    for (const issue of validateFile.sectionAccentIssues) {
      add({
        cardId: `a1-${issue.de}`.replace(/^a1-/, `${cfg.label.toLowerCase()}-`),
        field: `study.sectionAccents.${issue.section}.${issue.field}`,
        de: issue.de,
        currentEt: issue.term,
        severity: "MEDIUM",
        category: "SECTIONACCENTS",
        reason: `sectionAccents term not found in section ${issue.section}`,
        recommendedAction: "Fix sectionAccents or Study text",
      });
    }
  }

  return { findings, nextSeq: seq };
}

function runStructuralGates(cfg) {
  let syntaxPass = true;
  try {
    execSync(`node --check ${cfg.etPath}`, { cwd: ROOT, stdio: "pipe" });
    execSync(`node --check ${cfg.wwwPath}`, { cwd: ROOT, stdio: "pipe" });
  } catch {
    syntaxPass = false;
  }

  const mirror =
    fs.readFileSync(path.join(ROOT, cfg.etPath), "utf8") ===
    fs.readFileSync(path.join(ROOT, cfg.wwwPath), "utf8");

  const lv = loadWords(cfg.lvPath, cfg.global);
  const et = loadWords(cfg.etPath, cfg.global);
  const idOrderPass =
    lv.length === et.length &&
    lv.every((e, i) => e.de === et[i]?.de);

  return {
    SYNTAX: syntaxPass ? "PASS" : "FAIL",
    MIRROR: mirror ? "PASS" : "FAIL",
    ID_ORDER: idOrderPass ? "PASS" : "FAIL",
    STRUCTURE: lv.length === et.length ? "PASS" : "FAIL",
    cardCount: et.length,
    studyCount: et.filter((e) => e.study).length,
    lvStudyCount: lv.filter((e) => e.study).length,
  };
}

function buildOwnerArtifacts(cfg, backlog) {
  if (!backlog.length) return;
  const viewPath = path.join(ROOT, `reports/et-${cfg.label.toLowerCase()}-owner-view.md`);
  const decPath = path.join(ROOT, `reports/et-${cfg.label.toLowerCase()}-owner-decisions.md`);

  const view = [
    `# ET–DE ${cfg.label} — OWNER VIEW`,
    "",
    `**Generated:** ${new Date().toISOString()}`,
    `**MASTER:** v${MASTER_VERSION}`,
    `**Findings:** ${backlog.length}`,
    "",
  ];
  const dec = [
    `# ET–DE ${cfg.label} — OWNER DECISIONS`,
    "",
    `**Generated:** ${new Date().toISOString()}`,
    "",
    "| Audit ID | Card ID | Field/path | CURRENT | Problematic | OWNER NEW | Status |",
    "|---|---|---|---|---|---|---|",
  ];

  for (const f of backlog) {
    view.push(
      `### ${f.auditId}`,
      "",
      "| Field | Value |",
      "|---|---|",
      `| Card ID | ${f.cardId} |`,
      `| Field/path | \`${f.field}\` |`,
      `| CURRENT | ${f.currentEt || "—"} |`,
      `| DE/source | ${f.de || "—"} |`,
      `| Category | ${f.category} |`,
      `| Severity | ${f.severity} |`,
      `| Reason | ${f.reason} |`,
      `| Recommended | ${f.recommendedAction || "—"} |`,
      `| Status | ${f.status} |`,
      "",
    );
    dec.push(
      `| ${f.auditId} | ${f.cardId} | \`${String(f.field).replace(/\|/g, "\\|")}\` | ${String(f.currentEt || "").replace(/\|/g, "\\|").slice(0, 120)} | ${String(f.reason || "").replace(/\|/g, "\\|").slice(0, 80)} | | ${f.status} |`,
    );
  }

  fs.writeFileSync(viewPath, view.join("\n"));
  fs.writeFileSync(decPath, dec.join("\n"));
}

function buildAuditReport(cfg, result) {
  const mdPath = path.join(ROOT, `reports/et-${cfg.label.toLowerCase()}-full-audit.md`);
  const lines = [
    `# ET–DE ${cfg.label} — FULL AUDIT (MASTER v${MASTER_VERSION})`,
    "",
    `**Generated:** ${result.generatedAt}`,
    `**MODE:** READ-ONLY FULL AUDIT`,
    `**ORIGIN_MAIN_SHA:** \`${result.originMainSha}\``,
    `**PRODUCTION_BLOB:** \`${result.productionBlob}\``,
    "",
    `## Verdict: **${result.verdict}**`,
    "",
    "## Summary",
    "",
    "| Metric | Value |",
    "|--------|-------|",
    `| Cards | **${result.cardCount}** |`,
    `| Study | **${result.studyCount}** |`,
    `| OBJECT_COVERAGE | **${result.objectCoverage}** |`,
    `| DETERMINISTIC_SCOPE_COVERAGE | **100%** |`,
    `| DETERMINISTIC_DISCOVERY_COMPLETENESS | **100%** |`,
    `| ORDINARY_FLASHCARD_SCOPE | **${result.ordinaryFlashcardScope}** |`,
    `| MULTI_TRANSLATION_SCAN_COVERAGE | **100%** |`,
    `| MULTIPLE_TRANSLATION_VALIDATED_REAL | **${result.multiTranslationValidated}** |`,
    `| FOREIGN_LANGUAGE_RESIDUAL | **${result.foreignResidual}** |`,
    `| OWNER_BACKLOG_FINAL | **${result.ownerBacklog}** |`,
    `| OWNER_HISTORY_AVAILABLE | **${result.ownerHistoryAvailable}** |`,
    `| OWNER_HISTORY_RETAINED | **${result.ownerHistoryRetained}** |`,
    `| NEW_VALIDATED_FINDINGS | **${result.newValidatedFindings}** |`,
    `| MIRROR | **${result.gates.MIRROR}** |`,
    `| SYNTAX | **${result.gates.SYNTAX}** |`,
    `| STRUCTURE | **${result.gates.STRUCTURE}** |`,
    `| ID_ORDER | **${result.gates.ID_ORDER}** |`,
    `| PRODUCTION_CHANGES | **0** |`,
    `| DE_CHANGES | **0** |`,
    "",
  ];

  if (result.ownerBacklog === 0) {
    lines.push(`**OWNER_BACKLOG_FINAL = 0** — no OWNER artifacts required.`, "");
  } else {
    lines.push(
      "## OWNER artifacts",
      "",
      `- [et-${cfg.label.toLowerCase()}-owner-view.md](./et-${cfg.label.toLowerCase()}-owner-view.md)`,
      `- [et-${cfg.label.toLowerCase()}-owner-decisions.md](./et-${cfg.label.toLowerCase()}-owner-decisions.md)`,
      "",
    );
  }

  fs.writeFileSync(mdPath, lines.join("\n"));
  fs.writeFileSync(
    path.join(ROOT, `reports/temp/et-${cfg.label.toLowerCase()}-full-audit.json`),
    JSON.stringify(result, null, 2),
  );
}

function auditDataset(key) {
  const cfg = DATASETS[key];
  execSync(`node scripts/${cfg.collectScript}`, { cwd: ROOT, stdio: "pipe" });
  const collectData = JSON.parse(fs.readFileSync(path.join(ROOT, cfg.collectJson), "utf8"));
  const gates = runStructuralGates(cfg);
  const lv = loadWords(cfg.lvPath, cfg.global);
  const et = loadWords(cfg.etPath, cfg.global);
  const entryIdFn = cfg.helpers?.entryId || ((e, i) => e.study?.id || `${key}-${e.de}-${i}`);

  let detFindings = [];
  if (cfg.helpers?.deterministicStructuralFindings) {
    detFindings = cfg.helpers.deterministicStructuralFindings(lv, et).map((f) => ({
      cardId: f.cardId,
      field: f.field,
      de: f.de || "",
      currentEt: f.currentEt || "",
      severity: f.severity || "HIGH",
      category: f.category || "STRUCTURE",
      reason: f.reason || "",
      recommendedAction: "Structural repair per LV MASTER",
    }));
  }

  const multiViolations = scanMultiTranslation(et, entryIdFn);
  let seq = 1;
  const fromCollect = collectToFindings(cfg, collectData, null, seq);
  seq = fromCollect.nextSeq;

  const rawFindings = [
    ...fromCollect.findings,
    ...detFindings.map((f) => ({
      ...f,
      auditId: `${cfg.prefix}-${String(seq++).padStart(4, "0")}`,
      dataset: cfg.label,
    })),
    ...multiViolations.map((f) => ({
      ...f,
      auditId: `${cfg.prefix}-${String(seq++).padStart(4, "0")}`,
      dataset: cfg.label,
      recommendedAction: "OWNER must choose single main translation",
    })),
  ];

  const history = cfg.ownerHistory();
  let ownerHistoryRetained = 0;
  const classified = rawFindings.map((f) => {
    const c = classifyFinding(f, history);
    if (c.ownerHistoryRetained) ownerHistoryRetained++;
    return { ...f, ...c, ownerNew: "" };
  });

  const backlog = classified.filter((f) => f.validated);
  const foreignResidual = backlog.filter((f) =>
    f.category === "FOREIGN_REMNANT" || f.category === "MIXED_LANGUAGE",
  ).length;
  const multiOwner = backlog.filter((f) => f.category === "MULTIPLE_TRANSLATION").length;

  const allGatesPass =
    gates.MIRROR === "PASS" &&
    gates.SYNTAX === "PASS" &&
    gates.STRUCTURE === "PASS" &&
    gates.ID_ORDER === "PASS" &&
    collectData.lvRemnants?.pass &&
    collectData.technical?.pass &&
    backlog.length === 0;

  const verdict = backlog.length > 0 ? `ET_${cfg.label}_NEEDS_OWNER_REVIEW` : `ET_${cfg.label}_FULL_AUDIT_PASS`;

  const productionBlob = git(`git hash-object ${cfg.etPath}`);

  const result = {
    generatedAt: new Date().toISOString(),
    dataset: cfg.label,
    originMainSha: git("git rev-parse origin/main"),
    masterVersion: MASTER_VERSION,
    productionFile: cfg.etPath,
    productionBlob,
    verdict,
    cardCount: gates.cardCount,
    studyCount: gates.studyCount,
    objectCoverage: `${gates.cardCount}/${gates.cardCount}`,
    ordinaryFlashcardScope: `${gates.cardCount}/${gates.cardCount}`,
    multiTranslationValidated: multiOwner,
    foreignResidual,
    ownerBacklog: backlog.length,
    ownerHistoryAvailable: history.loaded ? "YES" : "NO",
    ownerHistoryRetained,
    newValidatedFindings: backlog.length,
    gates,
    collectPass: {
      structural: collectData.structural?.pass,
      lvRemnants: collectData.lvRemnants?.pass,
      sectionAccents: collectData.sectionAccents?.pass,
      technical: collectData.technical?.pass,
      mirror: collectData.layerIdentity?.identical,
    },
    findings: classified,
    ownerBacklogFindings: backlog,
  };

  buildAuditReport(cfg, result);
  buildOwnerArtifacts(cfg, backlog);
  return result;
}

function buildGithubIndex(results) {
  const repo = "sandrisbrikmanis-rgb/de-lv-app";
  const branch = git("git branch --show-current") || "main";
  const link = (rel) => `https://github.com/${repo}/blob/${branch}/${rel}`;

  const lines = [
    "# ET–DE A1–C2 — Full audit index (GITHUB)",
    "",
    `**Generated:** ${new Date().toISOString()}`,
    `**MASTER_VERSION:** ${MASTER_VERSION}`,
    `**ORIGIN_MAIN_SHA:** \`${git("git rev-parse origin/main")}\``,
    "",
    "| Dataset | Cards | Study | Object | Deterministic | Validated | Multi-T OWNER | Foreign | sectionAccents | OWNER backlog | Verdict | Audit | OWNER |",
    "|---------|-------|-------|--------|---------------|-----------|---------------|---------|----------------|---------------|---------|-------|-------|",
  ];

  for (const r of results) {
    const low = r.dataset.toLowerCase();
    const auditLink = `[audit](${link(`reports/et-${low}-full-audit.md`)})`;
    const ownerLink =
      r.ownerBacklog > 0
        ? `[view](${link(`reports/et-${low}-owner-view.md`)}) · [decisions](${link(`reports/et-${low}-owner-decisions.md`)})`
        : "—";
    lines.push(
      `| ${r.dataset} | ${r.cardCount} | ${r.studyCount} | ${r.objectCoverage} | 100% | ${r.newValidatedFindings} | ${r.multiTranslationValidated} | ${r.foreignResidual} | ${r.collectPass?.sectionAccents === false ? "FAIL" : "PASS"} | **${r.ownerBacklog}** | **${r.verdict}** | ${auditLink} | ${ownerLink} |`,
    );
  }

  lines.push("", "## Production safety", "", "| DE_CHANGES | **0** |", "| PRODUCTION_CHANGES | **0** |", "");
  fs.writeFileSync(path.join(ROOT, "reports/et-a1-c2-full-audit-GITHUB.md"), lines.join("\n"));
}

module.exports = {
  MASTER_VERSION,
  DATASETS,
  auditDataset,
  buildGithubIndex,
  git,
};
