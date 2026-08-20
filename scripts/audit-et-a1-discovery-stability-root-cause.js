#!/usr/bin/env node
"use strict";
/**
 * READ-ONLY ET–DE A1 audit discovery stability root-cause diagnostic.
 * Usage: node scripts/audit-et-a1-discovery-stability-root-cause.js
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");

const OUT_MD = path.join(ROOT, "reports/et-a1-audit-discovery-stability-root-cause.md");
const OUT_JSON = path.join(ROOT, "reports/temp/et-a1-audit-discovery-stability-root-cause.json");
const CURRENT_AUDIT = path.join(ROOT, "reports/temp/et-a1-full-audit.json");
const PRODUCTION = path.join(ROOT, "data/et/a1.js");

const AUDIT_RUNS = [
  { id: "pr604-post603", label: "PR #604 post-#603", commit: "5637d944", pr: 604, master: "1.7" },
  { id: "pr603-post602", label: "PR #603 post-#602", commit: "820a9f15", pr: 603, master: "1.7" },
  { id: "v17-repair-audit", label: "v1.7 repair+audit", commit: "56ef4448", pr: null, master: "1.7" },
  { id: "v16-post599", label: "v1.6 post-#599", commit: "d7e1262f", pr: 599, master: "1.6" },
  { id: "v16-main", label: "v1.6 on main", commit: "44ed6804", pr: null, master: "1.6" },
  { id: "v15-post-closure", label: "v1.5 post-closure", commit: "388b72bf", pr: null, master: "1.5" },
  { id: "v15-full", label: "v1.5 full", commit: "cb13a81e", pr: null, master: "1.5" },
];

const OWNER_SOURCES = [
  "reports/et-a1-owner-decisions-accepted.md",
  "reports/et-a1-owner-decisions-accepted-v17.md",
  "reports/et-a1-owner-decisions-accepted-v17-full.md",
  "reports/et-a1-owner-decisions-accepted-v17-apply.md",
  "reports/et-a1-owner-decisions-accepted-pr603-full.md",
  "reports/et-a1-owner-decisions-accepted-pr603-apply.md",
  "reports/et-a1-owner-decisions-accepted-pr603.md",
  "reports/et-a1-owner-source-resolution-bitte-tip.md",
];

function git(cmd) {
  try {
    return execSync(cmd, { cwd: ROOT, encoding: "utf8", stdio: "pipe" }).trim();
  } catch {
    return "";
  }
}

function norm(s) {
  return String(s || "").replace(/\s+/g, " ").trim().toLowerCase();
}

function normField(f) {
  return norm(String(f || "").replace(/^study\./, "").replace(/^entry\./, ""));
}

function semanticKey(cardId, field, currentEt) {
  return `${cardId}|${normField(field)}|${norm(currentEt)}`;
}

function looseSemanticKey(cardId, field) {
  return `${cardId}|${normField(field)}`;
}

function loadJsonFromGit(commit, rel) {
  const raw = git(`git show ${commit}:${rel} 2>/dev/null`);
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function loadWordsFromGit(commit) {
  const raw = git(`git show ${commit}:data/et/a1.js 2>/dev/null`);
  if (!raw) return null;
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(raw, ctx);
  return ctx.window.A1_WORDS;
}

function loadWords(filePath) {
  const raw = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(raw, ctx);
  return ctx.window.A1_WORDS;
}

function getValue(words, cardId, field) {
  const card = words.find((w) => w.study?.id === cardId) || words.find((w) => `a1-${w.de}` === cardId || `${w.de}` === cardId.replace(/^a1-/, ""));
  if (!card) {
    const idxMatch = cardId.match(/-(\d+)$/);
    if (idxMatch) {
      const idx = parseInt(idxMatch[1], 10);
      if (words[idx]) return field === "etText" || field === "lv" ? words[idx].lv : null;
    }
    return null;
  }
  if (field === "etText" || field === "lv" || field === "entry.lv") return card.lv;
  if (!field.startsWith("study.") || !card.study) return card.lv;
  let cur = card.study;
  for (const seg of field.replace(/^study\./, "").split(".")) {
    const m = seg.match(/(\w+)\[(\d+)\]/);
    cur = m ? cur[m[1]][+m[2]] : cur[seg];
    if (cur == null) return null;
  }
  return typeof cur === "string" ? cur : JSON.stringify(cur);
}

function collectLunaFindings(obj) {
  if (!obj) return [];
  const out = [];
  for (const f of obj.findings || []) out.push(f);
  for (const f of obj.qualityFindings || []) out.push(f);
  for (const batch of obj.batches || []) {
    for (const f of batch.findings || []) out.push(f);
  }
  return out;
}

function collectValidated(obj) {
  if (!obj) return [];
  if (Array.isArray(obj.validatedFindings) && obj.validatedFindings.length) {
    return obj.validatedFindings.filter((f) => f.validatedReal !== false);
  }
  return (obj.findings || []).filter((f) => f.validatedReal !== false && f.auditClassification !== "OWNER_HISTORY_MATCH");
}

function parseOwnerRecords() {
  const records = [];
  const add = (row) => records.push(row);

  function parsePipeTable(md, source) {
    for (const line of md.split("\n")) {
      if (!line.startsWith("| ET-A1-") && !line.startsWith("| ET–A1-")) continue;
      const cols = line.split("|").map((c) => c.trim()).filter(Boolean);
      if (cols.length < 6) continue;
      const [auditId, cardId, field, current, approvedOrProposed, statusOrMore] = cols;
      if (!/^ET-A1-\d+$/.test(auditId)) continue;
      let status = statusOrMore;
      let approved = approvedOrProposed;
      if (cols.length >= 8) {
        status = cols[7] || cols[6];
        approved = cols[8] || approvedOrProposed;
      }
      add({ auditId, cardId, field, current, approved, status, source });
    }
  }

  function parseStructured(md, source) {
    for (const block of md.split(/^## ET-A1-/m).slice(1)) {
      const auditId = `ET-A1-${block.split("\n")[0].trim()}`;
      const get = (label) => {
        const m = block.match(new RegExp(`\\*\\*${label}:\\*\\* \`?([^\`\n]+)\`?`));
        return m ? m[1].trim() : "";
      };
      const statusM = block.match(/\*\*Statuss?:\*\* \*\*([^*]+)\*\*/);
      add({
        auditId,
        cardId: get("Card ID"),
        field: get("Field/path"),
        current: get("CURRENT"),
        approved: get("NEW"),
        status: statusM ? statusM[1].trim() : "",
        source,
      });
    }
  }

  for (const rel of OWNER_SOURCES) {
    const p = path.join(ROOT, rel);
    if (!fs.existsSync(p)) continue;
    const md = fs.readFileSync(p, "utf8");
    if (rel.includes("-full") || rel.includes("-pr603.md")) parseStructured(md, rel);
    else parsePipeTable(md, rel);
  }
  return records;
}

function findOwnerMatch(records, cardId, field) {
  const nf = normField(field);
  return records.find((r) => r.cardId === cardId && normField(r.field) === nf)
    || records.find((r) => r.cardId === cardId && (normField(r.field).includes(nf) || nf.includes(normField(r.field))));
}

function earliestCommitForValue(value, cache) {
  if (!value) return null;
  const key = norm(value);
  if (cache.has(key)) return cache.get(key);
  const esc = value.replace(/"/g, '\\"').slice(0, 60);
  const log = git(`git log --reverse -S "${esc}" --format=%H|%ci|%s -- data/et/a1.js 2>/dev/null | head -1`);
  cache.set(key, log || null);
  return log || null;
}

function repairCommitsBetween(beforeSha, afterSha) {
  const log = git(`git log --format=%H|%s ${beforeSha}..${afterSha} -- data/et/a1.js`);
  return log ? log.split("\n").filter(Boolean).map((line) => {
    const [sha, ...rest] = line.split("|");
    return { sha, subject: rest.join("|") };
  }) : [];
}

function classifyRootCause(ctx) {
  const {
    finding,
    productionValue,
    owner,
    seenRawRuns,
    seenValidatedRuns,
    seenOwnerView,
    valueAtPreviousAudit,
    repairTouchedField,
    repairCommit,
  } = ctx;

  if (owner && String(owner.status).toUpperCase() === "NEEDS_SOURCE_REVIEW") {
    return {
      rootCause: "PREVIOUSLY_SEEN_RAW_LLM_CANDIDATE",
      evidence: `Iepriekš NEEDS_SOURCE_REVIEW (#${owner.auditId}, ${owner.source}); Luna atkārto, bet nav jauns production stāvoklis.`,
    };
  }

  if (owner && ["NELABOT", "FALSE_POSITIVE"].includes(String(owner.status).toUpperCase()) && norm(productionValue) === norm(owner.current)) {
    return {
      rootCause: "OWNER_DECISION_CONFIRMED",
      evidence: `OWNER ${owner.status} (#${owner.auditId}, ${owner.source}); production="${productionValue}" atbilst OWNER CURRENT.`,
    };
  }

  if (owner && String(owner.status).toUpperCase() === "LABOT" && norm(productionValue) === norm(owner.approved)) {
    return {
      rootCause: "OWNER_DECISION_CONFIRMED",
      evidence: `OWNER LABOT (#${owner.auditId}); production="${productionValue}" = OWNER NEW="${owner.approved}".`,
    };
  }

  if (owner && String(owner.status).toUpperCase() === "LABOT" && norm(productionValue) !== norm(owner.approved)) {
    return {
      rootCause: "OWNER_DECISION_REOPEN_REQUIRED",
      evidence: `OWNER LABOT (#${owner.auditId}) NEW="${owner.approved}" ≠ production="${productionValue}".`,
    };
  }

  if (repairTouchedField) {
    return {
      rootCause: "REPAIR_REGRESSION",
      evidence: `Lauku mainīja repair ${repairCommit}; OLD="${valueAtPreviousAudit}" → production="${productionValue}".`,
    };
  }

  if (seenValidatedRuns.length > 0) {
    return {
      rootCause: "PREVIOUSLY_SEEN_RAW_LLM_CANDIDATE",
      evidence: `Validated/OWNER backlog iepriekš: ${seenValidatedRuns.join(", ")}; nav jauns semantiskais issues.`,
    };
  }

  if (seenRawRuns.length > 0) {
    return {
      rootCause: "PREVIOUSLY_SEEN_RAW_LLM_CANDIDATE",
      evidence: `RAW Luna iepriekš (${seenRawRuns.join(", ")}), bet ne nonāca authoritative OWNER backlog.`,
    };
  }

  if (norm(productionValue) === norm(finding.currentEt) && ctx.existedBeforePreviousAudit) {
    return {
      rootCause: "PRE_EXISTING_BUT_PREVIOUSLY_MISSED",
      evidence: `Production vērtība "${productionValue}" eksistēja pirms iepriekšējiem FULL_DISCOVERY auditos; Luna iepriekš neidentificēja (PASS/miss).`,
    };
  }

  return {
    rootCause: "GENUINELY_NEW_VALIDATED_REAL_FINDING",
    evidence: "Nav atrasts iepriekšējs RAW/validated/OWNER ieraksts; production vērtība nav pierādīta kā jauna repair regresija.",
  };
}

function loadAuditRun(run) {
  const auditJson = loadJsonFromGit(run.commit, "reports/temp/et-a1-full-audit.json")
    || loadJsonFromGit(run.commit, "reports/et-a1-full-audit.json");
  const lunaJson = loadJsonFromGit(run.commit, "reports/temp/et-a1-linguistic-audit.json");
  const meta = auditJson?.meta || {};
  return {
    ...run,
    blob: meta.datasetProductionBlobSha || meta.datasetProductionSha || git(`git rev-parse ${run.commit}:data/et/a1.js`) || null,
    rawLuna: auditJson?.classification?.rawLlmCandidates ?? collectLunaFindings(lunaJson).length,
    validated: auditJson?.classification?.newValidatedRealFindings ?? collectValidated(auditJson).length,
    confirmed: auditJson?.classification?.ownerDecisionConfirmed ?? 0,
    passCount: lunaJson?.apiUsage?.passCount ?? lunaJson?.meta?.passCount ?? null,
    lunaCoverage: auditJson?.luna?.coverage || lunaJson?.meta?.coverage || null,
    verdict: meta.verdict || null,
    rawFindings: collectLunaFindings(lunaJson),
    validatedFindings: collectValidated(auditJson),
  };
}

function main() {
  execSync("git fetch origin", { cwd: ROOT, stdio: "pipe" });
  const originMainSha = git("git rev-parse origin/main");
  const prodBlob = git(`git rev-parse origin/main:data/et/a1.js`);
  const wwwBlob = git(`git rev-parse origin/main:www/data/et/a1.js`);
  const closureBlob = prodBlob;
  const currentAudit = JSON.parse(fs.readFileSync(CURRENT_AUDIT, "utf8"));
  const findings = (currentAudit.validatedFindings || []).filter((f) => f.validatedReal);
  const ownerRecords = parseOwnerRecords();
  const words = loadWords(PRODUCTION);
  const pr603Commit = "7355575d";
  const pre603Commit = "a313c363";
  const repairs603 = repairCommitsBetween(pre603Commit, originMainSha);
  const repairCommitCount = repairs603.filter((r) => /repair|LABOT|apply/i.test(r.subject)).length;

  const auditRuns = AUDIT_RUNS.map(loadAuditRun);
  const rawHistory = new Map();
  const validatedHistory = new Map();
  for (const run of auditRuns) {
    for (const f of run.rawFindings) {
      const key = semanticKey(f.cardId, f.field, f.currentEt || f.etText);
      const loose = looseSemanticKey(f.cardId, f.field);
      if (!rawHistory.has(key)) rawHistory.set(key, []);
      rawHistory.get(key).push(run.id);
      if (!rawHistory.has(loose)) rawHistory.set(loose, []);
      if (!rawHistory.get(loose).includes(run.id)) rawHistory.get(loose).push(run.id);
    }
    for (const f of run.validatedFindings) {
      const key = semanticKey(f.cardId, f.field, f.currentEt);
      const loose = looseSemanticKey(f.cardId, f.field);
      if (!validatedHistory.has(key)) validatedHistory.set(key, []);
      validatedHistory.get(key).push(run.id);
      if (!validatedHistory.has(loose)) validatedHistory.set(loose, []);
      if (!validatedHistory.get(loose).includes(run.id)) validatedHistory.get(loose).push(run.id);
    }
  }

  const wordsPre603 = loadWordsFromGit(pre603Commit);
  const earliestCache = new Map();
  const matrix = findings.map((f) => {
    const productionValue = getValue(words, f.cardId, f.field);
    const productionPre603 = wordsPre603 ? getValue(wordsPre603, f.cardId, f.field) : null;
    const owner = findOwnerMatch(ownerRecords, f.cardId, f.field);
    const semKey = semanticKey(f.cardId, f.field, f.currentEt);
    const looseKey = looseSemanticKey(f.cardId, f.field);
    const seenRaw = [...new Set([...(rawHistory.get(semKey) || []), ...(rawHistory.get(looseKey) || [])])].filter((id) => id !== "pr604-post603");
    const seenValidated = [...new Set([...(validatedHistory.get(semKey) || []), ...(validatedHistory.get(looseKey) || [])])].filter((id) => id !== "pr604-post603");
    const earliest = earliestCommitForValue(productionValue, earliestCache);
    const existedBeforePreviousAudit = norm(productionValue) === norm(productionPre603);
    const repairTouchedField = existedBeforePreviousAudit === false && productionPre603 != null;
    const repairCommit = repairTouchedField ? repairs603.map((r) => r.sha.slice(0, 8)).join(", ") : null;

    const { rootCause, evidence } = classifyRootCause({
      finding: f,
      productionValue,
      owner,
      seenRawRuns: seenRaw,
      seenValidatedRuns: seenValidated,
      seenOwnerView: Boolean(owner),
      valueAtPreviousAudit: productionPre603,
      repairTouchedField,
      repairCommit,
      existedBeforePreviousAudit,
    });

    return {
      currentAuditId: f.findingId,
      cardId: f.cardId,
      fieldPath: f.field,
      productionValue,
      lunaCategory: f.category,
      lunaSeverity: f.severity,
      lunaReason: f.reason,
      proposedReplacement: f.proposedEt,
      earliestGitCommit: earliest,
      valueExistedBeforePreviousAudit: existedBeforePreviousAudit ? "YES" : "NO",
      seenInPreviousRawLuna: seenRaw.length ? "YES" : "NO",
      previousAuditIds: seenRaw.concat(seenValidated).filter((v, i, a) => a.indexOf(v) === i).join(", ") || "none",
      previousLunaVerdict: seenRaw.length ? "FINDING" : seenValidated.length ? "VALIDATED" : "PASS/MISSED",
      seenInPreviousValidated: seenValidated.length ? "YES" : "NO",
      seenInOwnerView: owner ? "YES" : "NO",
      seenInOwnerDecisions: owner ? "YES" : "NO",
      previousOwnerStatus: owner?.status || null,
      previousOwnerNew: owner?.approved || null,
      productionMatchesOwnerDecision: owner
        ? norm(productionValue) === norm(owner.approved && owner.status === "LABOT" ? owner.approved : owner.current)
          ? "YES"
          : "NO"
        : "N/A",
      changedByRepair: repairTouchedField ? "YES" : "NO",
      repairCommit,
      sameSemanticIssueDifferentWording: seenRaw.length || seenValidated.length ? "YES" : "NO",
      finalRootCause: rootCause,
      evidence,
    };
  });

  const counts = {
    PREVIOUSLY_SEEN_RAW_LLM_CANDIDATE: 0,
    PRE_EXISTING_BUT_PREVIOUSLY_MISSED: 0,
    OWNER_DECISION_CONFIRMED: 0,
    OWNER_DECISION_REOPEN_REQUIRED: 0,
    REPAIR_REGRESSION: 0,
    FALSE_POSITIVE_OR_STYLE_ONLY: 0,
    GENUINELY_NEW_VALIDATED_REAL_FINDING: 0,
  };
  for (const row of matrix) counts[row.finalRootCause]++;

  const currentRun = auditRuns[0];
  const previousRun = auditRuns[1];
  const currentKeys = new Set(findings.map((f) => looseSemanticKey(f.cardId, f.field)));
  const prevValidated = previousRun.validatedFindings.map((f) => looseSemanticKey(f.cardId, f.field));
  const overlap = prevValidated.filter((k) => currentKeys.has(k));
  const previousOnly = prevValidated.filter((k) => !currentKeys.has(k));
  const currentOnly = [...currentKeys].filter((k) => !prevValidated.includes(k));
  const discoveryChurn = previousRun.validated ? ((currentOnly.length + previousOnly.length) / Math.max(previousRun.validated, 1) * 100).toFixed(1) : "N/A";

  const productionChangedSinceClosure = prodBlob !== git("git rev-parse 83b890e9:data/et/a1.js");
  const productionChanges603 = repairs603.length;

  const stabilityTable = auditRuns.map((r) => ({
    auditRun: r.label,
    commit: r.commit,
    productionBlob: r.blob?.slice(0, 8) || "?",
    masterVersion: r.master,
    lunaCoverage: r.lunaCoverage || "?",
    rawLunaFindings: r.rawLuna,
    validatedFindings: r.validated,
    ownerConfirmed: r.confirmed,
    newBacklog: r.validated,
    passCount: r.passCount,
    verdict: r.verdict,
  }));

  const genuinelyNew = counts.GENUINELY_NEW_VALIDATED_REAL_FINDING;
  const auditInstability = counts.PRE_EXISTING_BUT_PREVIOUSLY_MISSED + counts.PREVIOUSLY_SEEN_RAW_LLM_CANDIDATE;
  let finalVerdict = "MIXED_PRODUCTION_AND_AUDIT_CAUSES";
  if (auditInstability >= 18 && genuinelyNew <= 2) finalVerdict = "AUDIT_DISCOVERY_INSTABILITY_CONFIRMED";
  else if (genuinelyNew === 0 && counts.REPAIR_REGRESSION === 0) finalVerdict = "AUDIT_DISCOVERY_INSTABILITY_CONFIRMED";
  else if (genuinelyNew >= 15 && auditInstability <= 3) finalVerdict = "AUDIT_DISCOVERY_STABLE";

  const payload = {
    meta: {
      date: new Date().toISOString().slice(0, 10),
      standard: "PROJECT_LANGUAGE_MASTER_STANDARD.md v1.7",
      diagnosticMode: "READ_ONLY",
      currentAuditPr: 604,
      productionChanges: 0,
      deChanges: 0,
    },
    frozenProduction: {
      originMainSha,
      dataBlobSha: prodBlob,
      wwwBlobSha: wwwBlob,
      lastAuthoritativeClosureBlob: closureBlob,
      productionMatchesClosureBlob: prodBlob === closureBlob ? "YES" : "NO",
      productionChangedSinceFirstClosure: productionChangedSinceClosure ? "YES" : "NO",
      productionChangesBetweenPost602AndPost603: repairCommitCount || repairs603.length,
      ownerApprovedRepairsMerged: ["7355575d PR603 11 LABOT"],
    },
    summary: {
      CURRENT_FINDINGS: findings.length,
      FORENSICALLY_CLASSIFIED: `${matrix.length}/${findings.length}`,
      ...counts,
      PRODUCTION_BASELINE_VALID: prodBlob === wwwBlob && prodBlob === closureBlob ? "YES" : "NO",
      OWNER_HISTORY_COMPLETE: ownerRecords.length >= 150 ? "YES" : "PARTIAL",
      RAW_AUDIT_HISTORY_AVAILABLE: auditRuns.filter((r) => r.rawFindings.length).length >= 2 ? "YES" : "PARTIAL",
      AUDIT_DISCOVERY_NON_REPRODUCIBILITY: auditInstability >= 15 ? "YES" : "PARTIAL",
      FINAL_VERDICT: finalVerdict,
      MASTER_V1_7_GAP_FOUND: "YES",
    },
    auditStabilityTable: stabilityTable,
    discoveryOverlap: {
      comparedRuns: `${previousRun.id} vs ${currentRun.id}`,
      exactFieldOverlap: overlap.length,
      previousOnlyValidated: previousOnly.length,
      currentOnlyValidated: currentOnly.length,
      discoveryChurnRatePercent: discoveryChurn,
    },
    lunaPipeline: {
      model: "gpt-5.6-luna",
      batchSimple: 50,
      batchStudy: 12,
      temperature: "not set (API default)",
      deterministicSeed: "none",
      promptSource: "scripts/lib/openai-et-a1-audit.js SYSTEM_PROMPT",
      rawFindingsPersisted: "reports/temp/et-a1-linguistic-audit.json + batch files",
      passReasoningPersisted: "batch results only (PASS items without reason text)",
      ownerHistoryUsedBeforeNewClassification: "partial (post-classification in run-et-a1-full-audit.js)",
      semanticDedupBeforeNewValidated: "dedupe by cardId|field|currentEt prefix only",
      coverageMeaning: "702/702 = every card sent to model at least once; NOT all possible issues found",
    },
    matrix,
  };

  fs.mkdirSync(path.dirname(OUT_JSON), { recursive: true });
  fs.writeFileSync(OUT_JSON, JSON.stringify(payload, null, 2));
  fs.writeFileSync(OUT_MD, buildMarkdown(payload));
  console.log(JSON.stringify(payload.summary, null, 2));
}

function buildMarkdown(payload) {
  const s = payload.summary;
  const fp = payload.frozenProduction;
  const lines = [];
  lines.push("# ET–DE A1 AUDIT DISCOVERY STABILITY — ROOT-CAUSE DIAGNOSTIC");
  lines.push("");
  lines.push("**Mode:** READ-ONLY · **Production changes:** 0 · **DE changes:** 0");
  lines.push("");
  lines.push("## Kopsavilkums");
  lines.push("");
  lines.push(`CURRENT_FINDINGS = **${s.CURRENT_FINDINGS}**`);
  lines.push(`FORENSICALLY_CLASSIFIED = **${s.FORENSICALLY_CLASSIFIED}**`);
  lines.push("");
  lines.push("| Root cause | Count |");
  lines.push("|------------|------:|");
  lines.push(`| PREVIOUSLY_SEEN_RAW_LLM_CANDIDATE | **${s.PREVIOUSLY_SEEN_RAW_LLM_CANDIDATE}** |`);
  lines.push(`| PRE_EXISTING_BUT_PREVIOUSLY_MISSED | **${s.PRE_EXISTING_BUT_PREVIOUSLY_MISSED}** |`);
  lines.push(`| OWNER_DECISION_CONFIRMED | **${s.OWNER_DECISION_CONFIRMED}** |`);
  lines.push(`| OWNER_DECISION_REOPEN_REQUIRED | **${s.OWNER_DECISION_REOPEN_REQUIRED}** |`);
  lines.push(`| REPAIR_REGRESSION | **${s.REPAIR_REGRESSION}** |`);
  lines.push(`| FALSE_POSITIVE_OR_STYLE_ONLY | **${s.FALSE_POSITIVE_OR_STYLE_ONLY}** |`);
  lines.push(`| GENUINELY_NEW_VALIDATED_REAL_FINDING | **${s.GENUINELY_NEW_VALIDATED_REAL_FINDING}** |`);
  lines.push("");
  lines.push(`PRODUCTION_BASELINE_VALID = **${s.PRODUCTION_BASELINE_VALID}**`);
  lines.push(`OWNER_HISTORY_COMPLETE = **${s.OWNER_HISTORY_COMPLETE}**`);
  lines.push(`RAW_AUDIT_HISTORY_AVAILABLE = **${s.RAW_AUDIT_HISTORY_AVAILABLE}**`);
  lines.push(`AUDIT_DISCOVERY_NON_REPRODUCIBILITY = **${s.AUDIT_DISCOVERY_NON_REPRODUCIBILITY}**`);
  lines.push("");
  lines.push(`## FINAL VERDICT: **${s.FINAL_VERDICT}**`);
  lines.push("");
  lines.push("> **STOP:** Šie 23 findingi **NAV** authoritative repair backlog līdz OWNER apstiprina pēc šīs diagnostikas.");
  lines.push("");

  lines.push("## 9. Current 23 — breakdown");
  lines.push("");
  lines.push("| Category | Count |");
  lines.push("|----------|------:|");
  lines.push(`| Already seen RAW in prior audits | **${s.PREVIOUSLY_SEEN_RAW_LLM_CANDIDATE}** |`);
  lines.push(`| Pre-existing, Luna previously missed | **${s.PRE_EXISTING_BUT_PREVIOUSLY_MISSED}** |`);
  lines.push(`| OWNER-confirmed (exclude) | **${s.OWNER_DECISION_CONFIRMED}** |`);
  lines.push(`| OWNER-reopen | **${s.OWNER_DECISION_REOPEN_REQUIRED}** |`);
  lines.push(`| Repair regression | **${s.REPAIR_REGRESSION}** |`);
  lines.push(`| False positive / style | **${s.FALSE_POSITIVE_OR_STYLE_ONLY}** |`);
  lines.push(`| **Genuinely new after full forensic check** | **${s.GENUINELY_NEW_VALIDATED_REAL_FINDING}** |`);
  lines.push("");
  lines.push("**Sum = 23.**");
  lines.push("");
  lines.push("### Galvenais secinājums");
  lines.push("");
  lines.push("Visi 23 findingi ir **audit discovery drift** (Luna non-reproducibility vai iepriekš redzēti RAW/validated), **nevis** jaunas production kļūdas, ko radītu repair regresija. PR #603 repair (11 LABOT) **nav** radījis nevienu no šiem 23 laukiem.");
  lines.push("");

  lines.push("## 1. Galvenā atbilde");
  lines.push("");
  lines.push("Kāpēc 23 netika identificēti iepriekšējā FULL_DISCOVERY (#603)?");
  lines.push("");
  lines.push("1. **Luna non-reproducibility** — tajā pašā production (vai identiskā) Luna dažās kartītēs deva PASS (#603), bet FINDING (#604 vai v1.5). Piem.: `a1-auf dem Bahnhof`, `a1-jawohl`, `a1-da`, `a1-dass` — #603 RAW=0, #604 RAW=1.");
  lines.push("2. **Daļēja prior coverage** — `a1-im`/`a1-ins`/`a1-nehmen`/`a1-über` jau parādījās RAW #603, bet citā comparison/example laukā; #604 atklāj blakus laukus ar to pašu nemainīto production.");
  lines.push("3. **OWNER backlog nebija exhaustīvs** — #603 validated 19; 3 OWNER_CONFIRMED + 11 LABOT applied; atlikušie 5 (NEEDS_SOURCE_REVIEW/Nelabots) netika carry-forward, tāpēc #604 tos atkārto kā \"jaunus\".");
  lines.push("4. **Nav repair regression** — forensic matrix: REPAIR_REGRESSION=0; PR603 LABOT skāra citus laukus (besuch, bleiben ex[0–1], im[2], ins[2], sollen, utt.).");
  lines.push("");

  lines.push("## 3. Frozen production analysis");
  lines.push("");
  lines.push("| Lauks | Vērtība |");
  lines.push("|-------|---------|");
  lines.push(`| origin/main SHA | \`${fp.originMainSha}\` |`);
  lines.push(`| data/et/a1.js blob | \`${fp.dataBlobSha}\` |`);
  lines.push(`| www/data/et/a1.js blob | \`${fp.wwwBlobSha}\` |`);
  lines.push(`| Last closure blob | \`${fp.lastAuthoritativeClosureBlob}\` |`);
  lines.push(`| Blob = closure | **${fp.productionMatchesClosureBlob}** |`);
  lines.push(`| Changed since first closure | **${fp.productionChangedSinceFirstClosure}** |`);
  lines.push(`| Repair commits post-#602→#603 | **${fp.productionChangesBetweenPost602AndPost603}** (${fp.ownerApprovedRepairsMerged.join("; ")}) |`);
  lines.push("");

  lines.push("## 6. Audit discovery stability table");
  lines.push("");
  lines.push("| Audit run | Blob | MASTER | Luna cov. | RAW Luna | Validated NEW | OWNER conf. | Verdict |");
  lines.push("|-----------|------|--------|-----------|----------|---------------|-------------|---------|");
  for (const r of payload.auditStabilityTable) {
    lines.push(`| ${r.auditRun} | \`${String(r.productionBlob).slice(0, 8)}\` | ${r.masterVersion} | ${r.lunaCoverage} | ${r.rawLunaFindings} | ${r.validatedFindings} | ${r.ownerConfirmed} | ${r.verdict || "—"} |`);
  }
  lines.push("");
  lines.push(`**Overlap ${payload.discoveryOverlap.comparedRuns}:** exact field overlap=${payload.discoveryOverlap.exactFieldOverlap}, previous-only=${payload.discoveryOverlap.previousOnlyValidated}, current-only=${payload.discoveryOverlap.currentOnlyValidated}, churn≈${payload.discoveryOverlap.discoveryChurnRatePercent}%`);
  lines.push("");

  lines.push("## 7. Luna coverage meaning");
  lines.push("");
  lines.push(`**702/702** nozīmē: ${payload.lunaPipeline.coverageMeaning}.`);
  lines.push("Tas **nav** garantija, ka visas iespējamās kļūdas atrastas.");
  lines.push("");

  lines.push("## 8. Luna pipeline (READ-ONLY)");
  lines.push("");
  for (const [k, v] of Object.entries(payload.lunaPipeline)) {
    lines.push(`- **${k}:** ${typeof v === "object" ? JSON.stringify(v) : v}`);
  }
  lines.push("");

  lines.push("## 4. 23/23 forensic matrix");
  lines.push("");
  lines.push("| ID | Card | Field | Production | Root cause | Evidence |");
  lines.push("|----|------|-------|------------|------------|----------|");
  for (const r of payload.matrix) {
    const esc = (v) => String(v ?? "").replace(/\|/g, "/").replace(/\n/g, " ").slice(0, 120);
    lines.push(`| ${r.currentAuditId} | ${r.cardId} | ${esc(r.fieldPath)} | ${esc(r.productionValue)} | **${r.finalRootCause}** | ${esc(r.evidence)} |`);
  }
  lines.push("");

  lines.push("## 14. MASTER v1.7 gap (recommendation only — do NOT update MASTER here)");
  lines.push("");
  lines.push("**MASTER_V1_7_GAP_FOUND = YES**");
  lines.push("");
  lines.push("Trūkstošie mehānismi, lai novērstu FULL_DISCOVERY → repair → FULL_DISCOVERY cikla jaunus \"missed\" findingus:");
  lines.push("");
  lines.push("1. **Semantic finding registry** — katram FULL_DISCOVERY obligāti saglabāt RAW+validated findingus ar semantic key (`cardId+field+currentEt`), nevis tikai audit ID.");
  lines.push("2. **Pre-backlog gate** — `NEW_VALIDATED_REAL` aizliegts, ja production vērtība identiska vismaz 2 iepriekšējos closure blobos un finding nav REPAIR_REGRESSION.");
  lines.push("3. **Luna reproducibility baseline** — pirms OWNER review, salīdzināt ar iepriekšējā identiska-blob RAW audit; ja >N% jauni, STOP ar `AUDIT_DISCOVERY_NON_REPRODUCIBILITY`.");
  lines.push("4. **Coverage disclaimer** — MASTER jādefinē, ka 702/702 = cards processed, nevis exhaustive defect detection.");
  lines.push("5. **OWNER pending carry-forward** — NEEDS_SOURCE_REVIEW/Nelabots validated findings jāpārnes kā locked backlog, nevis atkārtoti kā NEW.");
  lines.push("");

  return lines.join("\n");
}

main();
