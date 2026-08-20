"use strict";

/**
 * MASTER v1.8 discovery-stability shared library.
 * Dataset-agnostic: RAW/semantic registries, history gates, root-cause classification,
 * discovery churn, NEEDS_SOURCE_REVIEW carry-forward, OWNER_BACKLOG_FINAL.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");
const { ROOT } = require("./audit-common");

const COVERAGE_DISCLAIMER = {
  OBJECT_COVERAGE: "100% means every card/object was sent to the auditor at least once.",
  DISCOVERY_COMPLETENESS: "NOT_GUARANTEED",
  forbiddenInterpretation: "702/702 does NOT mean all possible defects were found.",
};

const ROOT_CAUSE_CATEGORIES = [
  "PREVIOUSLY_SEEN_RAW_LLM_CANDIDATE",
  "PRE_EXISTING_BUT_PREVIOUSLY_MISSED",
  "OWNER_DECISION_CONFIRMED",
  "OWNER_DECISION_REOPEN_REQUIRED",
  "REPAIR_REGRESSION",
  "FALSE_POSITIVE_OR_STYLE_ONLY",
  "NEEDS_SOURCE_REVIEW_CARRY_FORWARD",
  "GENUINELY_NEW_VALIDATED_REAL_FINDING",
];

const OWNER_BACKLOG_CATEGORIES = new Set([
  "GENUINELY_NEW_VALIDATED_REAL_FINDING",
  "OWNER_DECISION_REOPEN_REQUIRED",
  "REPAIR_REGRESSION",
  "NEEDS_SOURCE_REVIEW_CARRY_FORWARD",
]);

function git(cmd, cwd = ROOT) {
  try {
    return execSync(cmd, { cwd, encoding: "utf8", stdio: "pipe" }).trim();
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

function fieldFamily(field) {
  return normField(field).replace(/\[\d+\]/g, "[]");
}

function problemSignature(cardId, field, currentEt) {
  return `${cardId}|${normField(field)}|${norm(currentEt)}`;
}

function semanticIssueSignature(cardId, field, reason, category) {
  const pedagogical = norm(reason).slice(0, 160) || norm(category);
  return `${cardId}|${fieldFamily(field)}|${pedagogical}`;
}

function looseSemanticKey(cardId, field) {
  return `${cardId}|${normField(field)}`;
}

function pathFamilyKey(cardId, field) {
  return `${cardId}|${fieldFamily(field)}`;
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function readJsonSafe(filePath, fallback) {
  if (!fs.existsSync(filePath)) return fallback;
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
  } catch {
    return fallback;
  }
}

function writeJsonSafe(filePath, data) {
  ensureDir(path.dirname(filePath));
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
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
  return (obj.findings || []).filter(
    (f) => f.validatedReal !== false && f.auditClassification !== "OWNER_HISTORY_MATCH",
  );
}

function normalizeFinding(f, defaults = {}) {
  return {
    dataset: defaults.dataset || f.dataset,
    auditRunId: defaults.auditRunId || f.auditRunId,
    mainSha: defaults.mainSha || f.mainSha,
    productionBlob: defaults.productionBlob || f.productionBlob,
    masterVersion: defaults.masterVersion || f.masterVersion,
    model: defaults.model || f.model,
    cardId: f.cardId,
    objectId: f.cardId,
    field: f.field,
    path: f.field,
    currentValue: f.currentEt || f.currentValue || f.etText || "",
    currentEt: f.currentEt || f.currentValue || f.etText || "",
    category: f.category || "",
    severity: f.severity || "MEDIUM",
    problemSignature: problemSignature(f.cardId, f.field, f.currentEt || f.currentValue || f.etText),
    semanticSignature: semanticIssueSignature(f.cardId, f.field, f.reason, f.category),
    pathFamilySignature: pathFamilyKey(f.cardId, f.field),
    proposedReplacement: f.proposedEt || f.proposedReplacement || "",
    proposedEt: f.proposedEt || f.proposedReplacement || "",
    rawModelVerdict: f.rawModelVerdict || (f.source === "gpt-5.6-luna" ? "FINDING" : f.source || "UNKNOWN"),
    validatedStatus: f.validatedStatus || (f.validatedReal === false ? "EXCLUDED" : "CANDIDATE"),
    reason: f.reason || "",
    source: f.source || "",
    findingId: f.findingId,
  };
}

function loadRawRegistry(registryDir) {
  const file = path.join(registryDir, "raw-findings.json");
  const data = readJsonSafe(file, { version: 1, entries: [] });
  return { file, entries: data.entries || [], meta: data.meta || {} };
}

function loadSemanticRegistry(registryDir) {
  const file = path.join(registryDir, "semantic-findings.json");
  const data = readJsonSafe(file, { version: 1, entries: [] });
  return { file, entries: data.entries || [], meta: data.meta || {} };
}

function loadNeedsSourceReviewRegistry(registryDir) {
  const file = path.join(registryDir, "needs-source-review-unresolved.json");
  const data = readJsonSafe(file, { version: 1, unresolved: [] });
  return { file, unresolved: data.unresolved || [] };
}

function persistRawFindings(registryDir, findings, meta) {
  const raw = loadRawRegistry(registryDir);
  const seen = new Set(raw.entries.map((e) => `${e.auditRunId}|${e.problemSignature}`));
  const added = [];
  for (const f of findings) {
    const row = normalizeFinding(f, meta);
    const key = `${row.auditRunId}|${row.problemSignature}`;
    if (seen.has(key)) continue;
    seen.add(key);
    raw.entries.push({ ...row, persistedAt: new Date().toISOString() });
    added.push(row);
  }
  writeJsonSafe(raw.file, {
    version: 1,
    meta: { ...raw.meta, ...meta, updatedAt: new Date().toISOString() },
    entries: raw.entries,
  });
  updateSemanticRegistry(registryDir, added, meta);
  return added.length;
}

function updateSemanticRegistry(registryDir, findings, meta) {
  const sem = loadSemanticRegistry(registryDir);
  const bySig = new Map(sem.entries.map((e) => [e.semanticSignature, e]));
  for (const f of findings) {
    const sig = f.semanticSignature || semanticIssueSignature(f.cardId, f.field, f.reason, f.category);
    const existing = bySig.get(sig);
    const row = {
      semanticSignature: sig,
      pathFamilySignature: f.pathFamilySignature || pathFamilyKey(f.cardId, f.field),
      dataset: f.dataset || meta.dataset,
      cardId: f.cardId,
      fieldFamily: fieldFamily(f.field),
      pedagogicalMeaning: norm(f.reason).slice(0, 160) || norm(f.category),
      auditRunIds: existing ? [...new Set([...existing.auditRunIds, f.auditRunId || meta.auditRunId])] : [f.auditRunId || meta.auditRunId],
      problemSignatures: existing
        ? [...new Set([...existing.problemSignatures, f.problemSignature])]
        : [f.problemSignature],
      lastSeenAt: new Date().toISOString(),
    };
    bySig.set(sig, row);
  }
  writeJsonSafe(sem.file, {
    version: 1,
    meta: { ...sem.meta, ...meta, updatedAt: new Date().toISOString() },
    entries: [...bySig.values()],
  });
}

function loadAuditRunFromGit(run) {
  const auditJson =
    loadJsonFromGit(run.commit, "reports/temp/et-a1-full-audit.json")
    || loadJsonFromGit(run.commit, "reports/et-a1-full-audit.json");
  const lunaJson = loadJsonFromGit(run.commit, "reports/temp/et-a1-linguistic-audit.json");
  const meta = auditJson?.meta || {};
  return {
    ...run,
    blob:
      meta.datasetProductionBlobSha
      || meta.datasetProductionSha
      || git(`git rev-parse ${run.commit}:data/et/a1.js`)
      || null,
    rawLuna: auditJson?.classification?.rawLlmCandidates ?? collectLunaFindings(lunaJson).length,
    validated: auditJson?.classification?.newValidatedRealFindings ?? collectValidated(auditJson).length,
    rawFindings: collectLunaFindings(lunaJson),
    validatedFindings: collectValidated(auditJson),
    meta,
  };
}

function buildHistoryIndexes(auditRuns, registryEntries, currentRunId) {
  const rawHistory = new Map();
  const validatedHistory = new Map();
  const semanticHistory = new Map();
  const pathFamilyHistory = new Map();

  function add(map, key, runId) {
    if (!map.has(key)) map.set(key, []);
    if (!map.get(key).includes(runId)) map.get(key).push(runId);
  }

  for (const run of auditRuns) {
    if (run.id === currentRunId) continue;
    for (const f of run.rawFindings || []) {
      const cardId = f.cardId;
      const current = f.currentEt || f.etText || "";
      add(rawHistory, problemSignature(cardId, f.field, current), run.id);
      add(rawHistory, looseSemanticKey(cardId, f.field), run.id);
      add(semanticHistory, semanticIssueSignature(cardId, f.field, f.reason, f.category), run.id);
      add(pathFamilyHistory, pathFamilyKey(cardId, f.field), run.id);
    }
    for (const f of run.validatedFindings || []) {
      add(validatedHistory, problemSignature(f.cardId, f.field, f.currentEt), run.id);
      add(validatedHistory, looseSemanticKey(f.cardId, f.field), run.id);
      add(semanticHistory, semanticIssueSignature(f.cardId, f.field, f.reason, f.category), run.id);
      add(pathFamilyHistory, pathFamilyKey(f.cardId, f.field), run.id);
    }
  }

  for (const e of registryEntries) {
    const runId = e.auditRunId || "registry";
    add(rawHistory, e.problemSignature, runId);
    add(rawHistory, looseSemanticKey(e.cardId, e.field || e.path), runId);
    add(semanticHistory, e.semanticSignature, runId);
    add(pathFamilyHistory, e.pathFamilySignature || pathFamilyKey(e.cardId, e.field || e.path), runId);
  }

  return { rawHistory, validatedHistory, semanticHistory, pathFamilyHistory };
}

function parseOwnerRecords(ownerSources, root = ROOT) {
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

  for (const rel of ownerSources) {
    const p = path.join(root, rel);
    if (!fs.existsSync(p)) continue;
    const md = fs.readFileSync(p, "utf8");
    if (rel.includes("-full") || rel.includes("-pr603.md")) parseStructured(md, rel);
    else parsePipeTable(md, rel);
  }
  return records;
}

function findOwnerMatch(records, cardId, field) {
  const nf = normField(field);
  return (
    records.find((r) => r.cardId === cardId && normField(r.field) === nf)
    || records.find(
      (r) =>
        r.cardId === cardId
        && (normField(r.field).includes(nf) || nf.includes(normField(r.field))),
    )
  );
}

function repairCommitsBetween(beforeSha, afterSha, productionPath) {
  const log = git(`git log --format=%H|%s ${beforeSha}..${afterSha} -- ${productionPath}`);
  return log
    ? log.split("\n").filter(Boolean).map((line) => {
        const [sha, ...rest] = line.split("|");
        return { sha, subject: rest.join("|") };
      })
    : [];
}

function loadWordsFromGit(commit, productionPath) {
  const raw = git(`git show ${commit}:${productionPath} 2>/dev/null`);
  if (!raw) return null;
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(raw, ctx);
  return ctx.window.A1_WORDS;
}

function getProductionValue(words, cardId, field) {
  const card =
    words.find((w) => w.study?.id === cardId)
    || words.find((w) => `a1-${w.de}` === cardId || `${w.de}` === cardId.replace(/^a1-/, ""));
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

function classifyRootCause(ctx) {
  const {
    finding,
    productionValue,
    owner,
    seenRawRuns,
    seenValidatedRuns,
    seenSemanticRuns,
    seenPathFamilyRuns,
    repairTouchedField,
    repairCommit,
    existedBeforePreviousAudit,
    unresolvedNeedsSourceReview,
    styleOnly,
  } = ctx;

  if (styleOnly) {
    return {
      rootCause: "FALSE_POSITIVE_OR_STYLE_ONLY",
      evidence: `Category/style-only: ${finding.category}`,
    };
  }

  if (unresolvedNeedsSourceReview) {
    return {
      rootCause: "NEEDS_SOURCE_REVIEW_CARRY_FORWARD",
      evidence: `Unresolved NEEDS_SOURCE_REVIEW from ${unresolvedNeedsSourceReview.auditRunId || "prior run"}; Luna ${finding.findingId ? "re-detected or absent" : "absent"}.`,
      carryForward: true,
    };
  }

  if (owner && String(owner.status).toUpperCase() === "NEEDS_SOURCE_REVIEW") {
    return {
      rootCause: "PREVIOUSLY_SEEN_RAW_LLM_CANDIDATE",
      evidence: `Iepriekš NEEDS_SOURCE_REVIEW (#${owner.auditId}, ${owner.source}); Luna atkārto.`,
    };
  }

  if (
    owner
    && ["NELABOT", "FALSE_POSITIVE"].includes(String(owner.status).toUpperCase())
    && norm(productionValue) === norm(owner.current)
  ) {
    return {
      rootCause: "OWNER_DECISION_CONFIRMED",
      evidence: `OWNER ${owner.status} (#${owner.auditId}); production matches OWNER CURRENT.`,
    };
  }

  if (owner && String(owner.status).toUpperCase() === "LABOT" && norm(productionValue) === norm(owner.approved)) {
    return {
      rootCause: "OWNER_DECISION_CONFIRMED",
      evidence: `OWNER LABOT (#${owner.auditId}); production = OWNER NEW.`,
    };
  }

  if (owner && String(owner.status).toUpperCase() === "LABOT" && norm(productionValue) !== norm(owner.approved)) {
    return {
      rootCause: "OWNER_DECISION_REOPEN_REQUIRED",
      evidence: `OWNER LABOT (#${owner.auditId}) NEW ≠ production; reopen requires REOPEN_JUSTIFICATION.`,
    };
  }

  if (repairTouchedField) {
    return {
      rootCause: "REPAIR_REGRESSION",
      evidence: `Field changed by repair ${repairCommit}; prior="${ctx.valueAtPreviousAudit}" → production="${productionValue}".`,
    };
  }

  if (seenValidatedRuns.length > 0) {
    return {
      rootCause: "PREVIOUSLY_SEEN_RAW_LLM_CANDIDATE",
      evidence: `Prior validated/OWNER backlog: ${seenValidatedRuns.join(", ")}.`,
      pathFamilyMatch: seenPathFamilyRuns.length > 0,
    };
  }

  if (seenRawRuns.length > 0) {
    return {
      rootCause: "PREVIOUSLY_SEEN_RAW_LLM_CANDIDATE",
      evidence: `Prior RAW Luna (${seenRawRuns.join(", ")}); not authoritative OWNER backlog.`,
      pathFamilyMatch: seenPathFamilyRuns.length > 0,
    };
  }

  if (norm(productionValue) === norm(finding.currentEt) && existedBeforePreviousAudit) {
    return {
      rootCause: "PRE_EXISTING_BUT_PREVIOUSLY_MISSED",
      evidence: `Production "${productionValue}" unchanged since prior FULL_DISCOVERY; Luna previously PASS/missed.`,
    };
  }

  return {
    rootCause: "GENUINELY_NEW_VALIDATED_REAL_FINDING",
    evidence: "No prior RAW/validated/OWNER record; not repair regression.",
  };
}

function computeDiscoveryChurn(previousFindings, currentFindings) {
  const prevKeys = new Set(
    (previousFindings || []).map((f) => pathFamilyKey(f.cardId, f.field)),
  );
  const curKeys = new Set(
    (currentFindings || []).map((f) => pathFamilyKey(f.cardId, f.field)),
  );
  const prevExact = new Set(
    (previousFindings || []).map((f) => problemSignature(f.cardId, f.field, f.currentEt)),
  );
  const curExact = new Set(
    (currentFindings || []).map((f) => problemSignature(f.cardId, f.field, f.currentEt)),
  );

  let exactOverlap = 0;
  for (const k of curExact) if (prevExact.has(k)) exactOverlap += 1;

  let semanticOverlap = 0;
  for (const k of curKeys) if (prevKeys.has(k)) semanticOverlap += 1;

  const previousOnly = [...prevKeys].filter((k) => !curKeys.has(k)).length;
  const currentOnly = [...curKeys].filter((k) => !prevKeys.has(k)).length;
  const previousRawCount = previousFindings?.length || 0;
  const currentRawCount = currentFindings?.length || 0;
  const denom = Math.max(previousRawCount, 1);
  const discoveryChurnRate = ((currentOnly + previousOnly) / denom) * 100;

  return {
    PREVIOUS_RAW_COUNT: previousRawCount,
    CURRENT_RAW_COUNT: currentRawCount,
    EXACT_OVERLAP: exactOverlap,
    SEMANTIC_OVERLAP: semanticOverlap,
    PREVIOUS_ONLY: previousOnly,
    CURRENT_ONLY: currentOnly,
    DISCOVERY_CHURN_RATE: Number(discoveryChurnRate.toFixed(1)),
  };
}

function validateHistoryGates({ rawHistoryLoaded, ownerHistoryLoaded, preBacklogReady }) {
  return {
    RAW_AUDIT_HISTORY_GATE: rawHistoryLoaded ? "PASS" : "FAIL",
    OWNER_HISTORY_GATE: ownerHistoryLoaded ? "PASS" : "FAIL",
    PRE_BACKLOG_HISTORY_GATE: preBacklogReady ? "PASS" : "FAIL",
    ownerBacklogAllowed:
      rawHistoryLoaded && ownerHistoryLoaded && preBacklogReady,
  };
}

function countByRootCause(rows) {
  const counts = Object.fromEntries(ROOT_CAUSE_CATEGORIES.map((c) => [c, 0]));
  for (const row of rows) {
    if (counts[row.rootCause] !== undefined) counts[row.rootCause] += 1;
  }
  return counts;
}

function buildOwnerBacklogFinal(classifiedRows) {
  return classifiedRows.filter((r) => OWNER_BACKLOG_CATEGORIES.has(r.rootCause));
}

function runDiscoveryStability(options) {
  const {
    dataset,
    registryDir,
    auditRuns = [],
    currentRunId,
    findings,
    ownerSources = [],
    productionPath,
    words,
    wordsAtPreviousAudit,
    repairRange = {},
    ownerHistoryLoaded = false,
    persistCurrentRaw = false,
    currentMeta = {},
  } = options;

  const rawRegistry = loadRawRegistry(registryDir);
  const needsSourceReview = loadNeedsSourceReviewRegistry(registryDir);
  const ownerRecords = parseOwnerRecords(ownerSources);
  const loadedRuns = auditRuns.map((r) => (r.rawFindings ? r : loadAuditRunFromGit(r)));
  const indexes = buildHistoryIndexes(loadedRuns, rawRegistry.entries, currentRunId);

  const repairs = repairRange.beforeSha && repairRange.afterSha
    ? repairCommitsBetween(repairRange.beforeSha, repairRange.afterSha, productionPath)
    : [];

  const unresolvedBySig = new Map(
    needsSourceReview.unresolved.map((u) => [u.semanticSignature || u.problemSignature, u]),
  );

  const classified = findings.map((f) => {
    const nf = normalizeFinding(f, currentMeta);
    const productionValue = getProductionValue(words, f.cardId, f.field);
    const productionPre = wordsAtPreviousAudit
      ? getProductionValue(wordsAtPreviousAudit, f.cardId, f.field)
      : null;
    const owner = findOwnerMatch(ownerRecords, f.cardId, f.field);
    const semKey = semanticIssueSignature(f.cardId, f.field, f.reason, f.category);
    const looseKey = looseSemanticKey(f.cardId, f.field);
    const pfKey = pathFamilyKey(f.cardId, f.field);
    const probKey = problemSignature(f.cardId, f.field, f.currentEt);

    const seenRaw = [
      ...new Set([
        ...(indexes.rawHistory.get(probKey) || []),
        ...(indexes.rawHistory.get(looseKey) || []),
      ]),
    ].filter((id) => id !== currentRunId);
    const seenValidated = [
      ...new Set([
        ...(indexes.validatedHistory.get(probKey) || []),
        ...(indexes.validatedHistory.get(looseKey) || []),
      ]),
    ].filter((id) => id !== currentRunId);
    const seenSemantic = [...new Set(indexes.semanticHistory.get(semKey) || [])].filter(
      (id) => id !== currentRunId,
    );
    const seenPathFamily = [...new Set(indexes.pathFamilyHistory.get(pfKey) || [])].filter(
      (id) => id !== currentRunId,
    );

    const existedBeforePreviousAudit =
      productionPre != null && norm(productionValue) === norm(productionPre);
    const repairTouchedField = productionPre != null && !existedBeforePreviousAudit;
    const repairCommit = repairTouchedField ? repairs.map((r) => r.sha.slice(0, 8)).join(", ") : null;
    const styleOnly = /^(STYLE_ONLY|FALSE_POSITIVE|PROJECT_CONVENTION)$/i.test(String(f.category || ""));

    const unresolved = unresolvedBySig.get(semKey) || unresolvedBySig.get(probKey);

    const { rootCause, evidence, pathFamilyMatch, carryForward } = classifyRootCause({
      finding: f,
      productionValue,
      owner,
      seenRawRuns: seenRaw,
      seenValidatedRuns: seenValidated,
      seenSemanticRuns: seenSemantic,
      seenPathFamilyRuns: seenPathFamily,
      valueAtPreviousAudit: productionPre,
      repairTouchedField,
      repairCommit,
      existedBeforePreviousAudit,
      unresolvedNeedsSourceReview: unresolved,
      styleOnly,
    });

    return {
      ...f,
      productionValue,
      rootCause,
      discoveryEvidence: evidence,
      pathFamilyMatch: Boolean(pathFamilyMatch),
      semanticSignature: semKey,
      pathFamilySignature: pfKey,
      problemSignature: probKey,
      seenInPreviousRaw: seenRaw.length > 0 || seenPathFamily.length > 0 ? "YES" : "NO",
      previousAuditRuns: [...new Set([...seenRaw, ...seenValidated, ...seenSemantic, ...seenPathFamily])].join(", ") || "none",
      carryForward: Boolean(carryForward),
      auditClassification: rootCause,
      validatedReal: OWNER_BACKLOG_CATEGORIES.has(rootCause),
      ownerBacklogEligible: OWNER_BACKLOG_CATEGORIES.has(rootCause),
    };
  });

  const rootCauseCounts = countByRootCause(classified);
  const ownerBacklogFinal = buildOwnerBacklogFinal(classified);

  const previousRun = loadedRuns.find((r) => r.id !== currentRunId);
  const churn = computeDiscoveryChurn(
    previousRun?.validatedFindings || previousRun?.rawFindings || [],
    findings,
  );

  const rawHistoryAvailable =
    loadedRuns.filter((r) => (r.rawFindings || []).length > 0).length >= 1 || rawRegistry.entries.length > 0;
  const gates = validateHistoryGates({
    rawHistoryLoaded: rawHistoryAvailable,
    ownerHistoryLoaded,
    preBacklogReady: rawHistoryAvailable && ownerHistoryLoaded,
  });

  const auditInstability =
    rootCauseCounts.PREVIOUSLY_SEEN_RAW_LLM_CANDIDATE
    + rootCauseCounts.PRE_EXISTING_BUT_PREVIOUSLY_MISSED
    + rootCauseCounts.NEEDS_SOURCE_REVIEW_CARRY_FORWARD;
  const productionUnchanged =
    repairRange.productionBlobCurrent
    && repairRange.productionBlobPrevious
    && repairRange.productionBlobCurrent === repairRange.productionBlobPrevious;

  const discoveryNonReproducibility =
    auditInstability >= 15 || (productionUnchanged && churn.DISCOVERY_CHURN_RATE >= 30)
      ? "YES"
      : auditInstability > 0
        ? "PARTIAL"
        : "NO";

  if (persistCurrentRaw) {
    persistRawFindings(registryDir, findings, { dataset, ...currentMeta });
  }

  return {
    dataset,
    gates,
    rootCauseCounts,
    classified,
    ownerBacklogFinal,
    ownerBacklogFinalCount: ownerBacklogFinal.length,
    discoveryChurn: churn,
    AUDIT_DISCOVERY_NON_REPRODUCIBILITY: discoveryNonReproducibility,
    RAW_REGISTRY_LOADED: rawRegistry.entries.length,
    SEMANTIC_REGISTRY_LOADED: loadSemanticRegistry(registryDir).entries.length,
    NEEDS_SOURCE_REVIEW_UNRESOLVED: needsSourceReview.unresolved.length,
    coverage: COVERAGE_DISCLAIMER,
    metrics: {
      RAW_CANDIDATES: findings.length,
      SEMANTIC_DEDUPED: new Set(classified.map((r) => r.semanticSignature)).size,
      PREVIOUS_RAW_MATCHES: rootCauseCounts.PREVIOUSLY_SEEN_RAW_LLM_CANDIDATE,
      PREVIOUSLY_MISSED: rootCauseCounts.PRE_EXISTING_BUT_PREVIOUSLY_MISSED,
      OWNER_CONFIRMED: rootCauseCounts.OWNER_DECISION_CONFIRMED,
      OWNER_REOPEN_REQUIRED: rootCauseCounts.OWNER_DECISION_REOPEN_REQUIRED,
      REPAIR_REGRESSION: rootCauseCounts.REPAIR_REGRESSION,
      FALSE_POSITIVE: rootCauseCounts.FALSE_POSITIVE_OR_STYLE_ONLY,
      GENUINELY_NEW: rootCauseCounts.GENUINELY_NEW_VALIDATED_REAL_FINDING,
      NEEDS_SOURCE_REVIEW_CARRY_FORWARD: rootCauseCounts.NEEDS_SOURCE_REVIEW_CARRY_FORWARD,
      OWNER_BACKLOG_FINAL: ownerBacklogFinal.length,
    },
  };
}

module.exports = {
  ROOT,
  COVERAGE_DISCLAIMER,
  ROOT_CAUSE_CATEGORIES,
  OWNER_BACKLOG_CATEGORIES,
  norm,
  normField,
  fieldFamily,
  problemSignature,
  semanticIssueSignature,
  looseSemanticKey,
  pathFamilyKey,
  normalizeFinding,
  loadRawRegistry,
  loadSemanticRegistry,
  loadNeedsSourceReviewRegistry,
  persistRawFindings,
  loadJsonFromGit,
  collectLunaFindings,
  collectValidated,
  loadAuditRunFromGit,
  parseOwnerRecords,
  findOwnerMatch,
  repairCommitsBetween,
  loadWordsFromGit,
  getProductionValue,
  classifyRootCause,
  computeDiscoveryChurn,
  validateHistoryGates,
  countByRootCause,
  buildOwnerBacklogFinal,
  runDiscoveryStability,
};
