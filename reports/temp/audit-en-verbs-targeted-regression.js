#!/usr/bin/env node
/**
 * EN-DE Verbs targeted Luna regression audit after 421-finding repair cycle.
 * AUDIT ONLY — READ-ONLY production.
 */
require("dotenv").config();

const fs = require("fs");
const path = require("path");
const vm = require("vm");
const crypto = require("crypto");
const { execSync } = require("child_process");

const ROOT = path.join(__dirname, "..", "..");
const BASELINE_REF = "main";

const FORMS = [
  "infinitiv",
  "praesens",
  "imperfektIndikativ",
  "imperfektKonjunktiv",
  "partizipVergangenheit",
];

const REPAIR_COMMITS = [
  { block: 1, hash: "175beca4", findings: "1-50" },
  { block: 2, hash: "079bbec8", findings: "51-100" },
  { block: 3, hash: "ededd2ae", findings: "101-150" },
  { block: 4, hash: "95c4612b", findings: "151-200" },
  { block: 5, hash: "d4817f68", findings: "201-250" },
  { block: 6, hash: "95f9b878", findings: "251-300" },
  { block: 7, hash: "a0a996b1", findings: "301-350" },
  { block: 8, hash: "fb14470a", findings: "351-400" },
  { block: 9, hash: "da108077", findings: "401-421" },
];

const OWNER_DE_SOURCE_ISSUE = [
  { verbId: "verb-27-kennen", field: "imperfektKonjunktiv", ownerStatus: "DE_SOURCE_ISSUE" },
  { verbId: "verb-31-bleichen", field: "imperfektKonjunktiv", ownerStatus: "DE_SOURCE_ISSUE" },
  { verbId: "verb-34-brennen", field: "imperfektKonjunktiv", ownerStatus: "DE_SOURCE_ISSUE" },
  { verbId: "verb-41-dürfen", field: "imperfektKonjunktiv", ownerStatus: "DE_SOURCE_ISSUE" },
  { verbId: "verb-60-haben", field: "imperfektKonjunktiv", ownerStatus: "DE_SOURCE_ISSUE" },
  { verbId: "verb-75-mahlen", field: "imperfektKonjunktiv", ownerStatus: "DE_SOURCE_ISSUE" },
  { verbId: "verb-80-mögen", field: "imperfektKonjunktiv", ownerStatus: "DE_SOURCE_ISSUE" },
  { verbId: "verb-81-müssen", field: "imperfektKonjunktiv", ownerStatus: "DE_SOURCE_ISSUE" },
  { verbId: "verb-85-pflegen", field: "imperfektKonjunktiv", ownerStatus: "DE_SOURCE_ISSUE" },
  { verbId: "verb-101-schallen", field: "imperfektKonjunktiv", ownerStatus: "DE_SOURCE_ISSUE" },
  { verbId: "verb-105-scheren", field: "imperfektKonjunktiv", ownerStatus: "DE_SOURCE_ISSUE" },
  { verbId: "verb-117-schnauben", field: "imperfektKonjunktiv", ownerStatus: "DE_SOURCE_ISSUE" },
  { verbId: "verb-129-sein", field: "imperfektKonjunktiv", ownerStatus: "DE_SOURCE_ISSUE" },
  { verbId: "verb-131-sieden", field: "imperfektKonjunktiv", ownerStatus: "DE_SOURCE_ISSUE" },
  { verbId: "verb-139-spleißen", field: "imperfektKonjunktiv", ownerStatus: "DE_SOURCE_ISSUE" },
  { verbId: "verb-144-stecken", field: "imperfektKonjunktiv", ownerStatus: "DE_SOURCE_ISSUE" },
  { verbId: "verb-149-stieben", field: "imperfektKonjunktiv", ownerStatus: "DE_SOURCE_ISSUE" },
  { verbId: "verb-150-stinken", field: "imperfektKonjunktiv", ownerStatus: "DE_SOURCE_ISSUE" },
  { verbId: "verb-167-weben", field: "imperfektKonjunktiv", ownerStatus: "DE_SOURCE_ISSUE" },
  { verbId: "verb-172-werden", field: "imperfektKonjunktiv", ownerStatus: "DE_SOURCE_ISSUE" },
  { verbId: "verb-178-wringen", field: "imperfektKonjunktiv", ownerStatus: "DE_SOURCE_ISSUE" },
];

const OWNER_KEEP = [
  { verbId: "verb-152-streichen", field: "praesens", ownerStatus: "KEEP" },
  { verbId: "verb-152-streichen", field: "imperfektIndikativ", ownerStatus: "KEEP" },
  { verbId: "verb-152-streichen", field: "partizipVergangenheit", ownerStatus: "KEEP" },
];

const OWNER_AUDIT_SOURCE = [
  { verbId: "verb-79-misslingen", field: "imperfektKonjunktiv", ownerStatus: "AUDIT_SOURCE_ISSUE" },
];

const OUT_MD = path.join(ROOT, "reports", "en-verbs-targeted-regression-audit.md");
const OUT_SCOPE = path.join(ROOT, "reports", "temp", "en-verbs-targeted-regression-scope.json");
const OUT_FINDINGS = path.join(ROOT, "reports", "temp", "en-verbs-targeted-regression-findings.json");
const OUT_RAW = path.join(ROOT, "reports", "temp", "en-verbs-targeted-regression-raw.json");
const PROGRESS_PATH = path.join(ROOT, "reports", "temp", ".en-verbs-targeted-regression-progress.json");
const LOG_PATH = path.join(ROOT, "reports", "temp", "en-verbs-targeted-regression-run.log");

const VERB_BATCH = 10;
const MAX_RETRIES = 3;

const NON_ERROR_CATEGORIES = new Set([
  "SOURCE_LV_ISSUE",
  "DE_SOURCE_ISSUE",
  "NEEDS_REVIEW",
  "STYLE_ONLY",
  "PROJECT_CONVENTION",
]);

const LV_ONLY = /[āēīūģķļņĀĒĪŪĢĶĻŅ]/;
const KNOWN_FOREIGN_PATTERNS = [
  /viņš/i,
  /viņa/i,
  /\bpazina\b/i,
  /\bbija\b/i,
  /\bpatika\b/i,
  /\bkopa\b/i,
  /\bcirpa\b/i,
  /\bauda\b/i,
  /\bdega\b/i,
  /\bsavienoja\b/i,
];

function md5File(p) {
  return crypto.createHash("md5").update(fs.readFileSync(p)).digest("hex");
}

function gitShow(ref, filePath) {
  return execSync(`git show ${ref}:${filePath}`, { cwd: ROOT, encoding: "utf8", maxBuffer: 80 * 1024 * 1024 });
}

function loadFromCode(code) {
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.VERB_ENTRIES;
}

function loadFile(rel) {
  return loadFromCode(fs.readFileSync(path.join(ROOT, rel), "utf8"));
}

function verbSlug(de) {
  return String(de).trim().replace(/\s+/g, "-").replace(/[^\wäöüßÄÖÜ-]/gi, "");
}

function verbEntryId(index, infinitivDe) {
  return `verb-${index}-${verbSlug(infinitivDe)}`;
}

function chunk(arr, size) {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

function ownerSlotMap() {
  const map = new Map();
  for (const s of [...OWNER_DE_SOURCE_ISSUE, ...OWNER_KEEP, ...OWNER_AUDIT_SOURCE]) {
    map.set(`${s.verbId}|${s.field}`, s.ownerStatus);
  }
  return map;
}

function buildScope(baselineEn, currentEn, lvVerbs) {
  const fieldChanges = [];
  const blockMap = new Map();

  for (const rc of REPAIR_COMMITS) {
    try {
      const parentCode = execSync(`git rev-parse ${rc.hash}^`, { cwd: ROOT, encoding: "utf8" }).trim();
      const before = loadFromCode(gitShow(parentCode, "data/en/verbs.js"));
      const after = loadFromCode(gitShow(rc.hash, "data/en/verbs.js"));
      for (let i = 0; i < after.length; i++) {
        for (const field of FORMS) {
          const b = before[i][field].lv;
          const a = after[i][field].lv;
          if (b !== a) {
            const verbId = verbEntryId(i, after[i].infinitiv.de);
            const key = `${verbId}|${field}`;
            if (!blockMap.has(key)) {
              blockMap.set(key, { block: rc.block, commit: rc.hash, findings: rc.findings });
            }
          }
        }
      }
    } catch (e) {
      console.warn(`Block map warning for ${rc.hash}: ${e.message}`);
    }
  }

  for (let i = 0; i < currentEn.length; i++) {
    for (const field of FORMS) {
      const before = baselineEn[i][field].lv;
      const after = currentEn[i][field].lv;
      if (before !== after) {
        const verbId = verbEntryId(i, currentEn[i].infinitiv.de);
        const key = `${verbId}|${field}`;
        const meta = blockMap.get(key) || { block: null, commit: null, findings: null };
        fieldChanges.push({
          verbId,
          index: i,
          field,
          de: currentEn[i][field].de,
          lvSource: lvVerbs[i][field].lv,
          enBefore: before,
          enAfter: after,
          repairBlock: meta.block,
          repairCommit: meta.commit,
          repairFindings: meta.findings,
        });
      }
    }
  }

  const verbIndices = [...new Set(fieldChanges.map((c) => c.index))].sort((a, b) => a - b);
  return {
    baselineRef: BASELINE_REF,
    repairBlocks: 9,
    originalFindingsProcessed: 421,
    uniqueChangedVerbs: verbIndices.length,
    uniqueChangedFields: fieldChanges.length,
    fieldChanges,
    changedVerbIndices: verbIndices,
  };
}

function buildVerbPayloads(scope, currentEn, lvVerbs) {
  const changedSet = new Set(scope.changedVerbIndices);
  const repairedFields = new Map();
  for (const c of scope.fieldChanges) {
    repairedFields.set(`${c.verbId}|${c.field}`, c);
  }

  const verbs = [];
  for (const index of scope.changedVerbIndices) {
    const en = currentEn[index];
    const lv = lvVerbs[index];
    const verbId = verbEntryId(index, en.infinitiv.de);
    const forms = FORMS.map((field) => {
      const repair = repairedFields.get(`${verbId}|${field}`);
      return {
        field,
        de: en[field].de,
        lvSource: lv[field].lv,
        currentEn: en[field].lv,
        repairedInCycle: !!repair,
        enBefore: repair?.enBefore || null,
        enAfter: repair?.enAfter || null,
        repairBlock: repair?.repairBlock || null,
      };
    });
    verbs.push({ verbId, index, infinitivDe: en.infinitiv.de, forms });
  }
  return verbs;
}

function scanForeignRemnants(entries) {
  const findings = [];
  for (let i = 0; i < entries.length; i++) {
    const verbId = verbEntryId(i, entries[i].infinitiv.de);
    for (const field of FORMS) {
      const val = entries[i][field].lv || "";
      if (!val) {
        findings.push({ verbId, field, currentEn: val, pattern: "EMPTY_EN", language: "empty" });
        continue;
      }
      if (LV_ONLY.test(val)) {
        findings.push({ verbId, field, currentEn: val, pattern: "LV_DIACRITICS", language: "Latvian" });
        continue;
      }
      for (const pat of KNOWN_FOREIGN_PATTERNS) {
        if (pat.test(val)) {
          findings.push({ verbId, field, currentEn: val, pattern: pat.source, language: "Latvian/remnant" });
          break;
        }
      }
    }
  }
  return findings;
}

function hygieneScan(entries) {
  const issues = [];
  for (let i = 0; i < entries.length; i++) {
    const verbId = verbEntryId(i, entries[i].infinitiv.de);
    for (const field of FORMS) {
      const val = entries[i][field].lv || "";
      if (val.includes(";")) issues.push({ verbId, field, type: "SEMICOLON", snippet: val.slice(0, 80) });
      if (/[\uFFFD\u0000]/.test(val)) issues.push({ verbId, field, type: "MOJIBAKE", snippet: val.slice(0, 80) });
      if (val.includes("  ")) issues.push({ verbId, field, type: "DOUBLE_SPACE", snippet: val.slice(0, 80) });
    }
  }
  return issues;
}

function runDeterministicGates(baselineEn, currentEn, lvVerbs, deVerbs) {
  const enPath = path.join(ROOT, "data/en/verbs.js");
  const wwwPath = path.join(ROOT, "www/data/en/verbs.js");
  const dePath = path.join(ROOT, "data/verbs.js");

  const gates = {
    verbs: currentEn.length,
    expectedVerbs: 189,
    formSlots: 0,
    expectedFormSlots: 945,
    mirror: true,
    syntax: true,
    structure: true,
    idOrder: true,
    deReadOnly: true,
    foreignRemnants: [],
    hygiene: [],
  };

  try {
    execSync("node --check data/en/verbs.js", { cwd: ROOT });
    execSync("node --check www/data/en/verbs.js", { cwd: ROOT });
  } catch {
    gates.syntax = false;
  }

  gates.mirror = md5File(enPath) === md5File(wwwPath);

  for (let i = 0; i < currentEn.length; i++) {
    for (const field of FORMS) {
      if (currentEn[i][field]) gates.formSlots++;
    }
  }
  gates.structure = gates.verbs === 189 && gates.formSlots === 945;

  for (let i = 0; i < currentEn.length; i++) {
    if (currentEn[i].infinitiv.de !== deVerbs[i].infinitiv.de) gates.idOrder = false;
    if (currentEn.length !== deVerbs.length) gates.idOrder = false;
  }

  try {
    const deBaseline = loadFromCode(gitShow(BASELINE_REF, "data/verbs.js"));
    gates.deReadOnly = JSON.stringify(deBaseline) === JSON.stringify(deVerbs);
  } catch {
    gates.deReadOnly = false;
  }

  gates.foreignRemnants = scanForeignRemnants(currentEn);
  gates.hygiene = hygieneScan(currentEn);

  gates.criticalFail =
    !gates.syntax ||
    !gates.mirror ||
    !gates.structure ||
    !gates.idOrder ||
    !gates.deReadOnly;

  return gates;
}

function validateFinding(finding, currentEn, lvVerbs, ownerMap) {
  const key = `${finding.verbId}|${finding.field}`;
  const ownerStatus = ownerMap.get(key);

  if (NON_ERROR_CATEGORIES.has(finding.category)) {
    return { ...finding, validation: finding.category === "DE_SOURCE_ISSUE" ? "DE_SOURCE_ISSUE" : "FALSE_POSITIVE" };
  }

  const match = finding.verbId.match(/^verb-(\d+)-/);
  if (!match) return { ...finding, validation: "FALSE_POSITIVE", validationNote: "invalid verbId" };
  const index = Number(match[1]);
  const en = currentEn[index];
  if (!en || !en[finding.field]) return { ...finding, validation: "FALSE_POSITIVE", validationNote: "slot missing" };

  const productionEn = en[finding.field].lv;
  const productionDe = en[finding.field].de;

  if (finding.currentEn && finding.currentEn !== productionEn) {
    return { ...finding, validation: "FALSE_POSITIVE", validationNote: "stale currentEn vs production" };
  }

  if (finding.proposedEn && finding.proposedEn === productionEn) {
    return { ...finding, validation: "FALSE_POSITIVE", validationNote: "proposed matches production" };
  }

  if (ownerStatus === "DE_SOURCE_ISSUE" || ownerStatus === "AUDIT_SOURCE_ISSUE") {
    if (finding.regressionType === "OWNER_DECISION_RECHECK") {
      return { ...finding, validation: "OWNER_DECISION_RECHECK", ownerStatus };
    }
    if (
      finding.category === "FOREIGN_REMNANT" ||
      LV_ONLY.test(productionEn) ||
      KNOWN_FOREIGN_PATTERNS.some((p) => p.test(productionEn))
    ) {
      return {
        ...finding,
        validation: "OWNER_DECISION_RECHECK",
        ownerStatus,
        validationNote: "LV remnant on OWNER-kept slot — recheck not auto-FIX",
      };
    }
    if (finding.regressionType === "DE_SOURCE_ISSUE" || finding.category === "GRAMMAR" || finding.field === "imperfektKonjunktiv") {
      return {
        ...finding,
        validation: "DE_SOURCE_ISSUE",
        ownerStatus,
        validationNote: "OWNER DE_SOURCE/AUDIT slot preserved",
      };
    }
  }

  if (finding.regressionType === "OWNER_DECISION_RECHECK") {
    return { ...finding, validation: "OWNER_DECISION_RECHECK", ownerStatus: ownerStatus || null };
  }

  if (finding.regressionType === "DE_SOURCE_ISSUE" || finding.category === "DE_SOURCE_ISSUE") {
    return { ...finding, validation: "DE_SOURCE_ISSUE", validationNote: "DE source issue — not auto EN repair" };
  }

  if (ownerStatus === "KEEP") {
    if (
      finding.verbId === "verb-152-streichen" &&
      /cross out/i.test(finding.proposedEn || "") ||
      /cross out/i.test(finding.reason || "")
    ) {
      return { ...finding, validation: "OWNER_DECISION_RECHECK", ownerStatus: "KEEP", validationNote: "streichen cross out rejected" };
    }
    if (finding.severity === "LOW" || finding.category === "NATURALNESS" || finding.category === "FORMAT") {
      return { ...finding, validation: "OWNER_DECISION_RECHECK", ownerStatus: "KEEP" };
    }
  }

  if (finding.verbId === "verb-152-streichen" && /cross out/i.test(finding.proposedEn || finding.reason || "")) {
    return { ...finding, validation: "OWNER_DECISION_RECHECK", validationNote: "streichen semantic OWNER decision" };
  }

  if (finding.verbId === "verb-186-hangen" && finding.field === "imperfektKonjunktiv" && /himself/i.test(finding.proposedEn || "")) {
    return { ...finding, validation: "OWNER_DECISION_RECHECK", validationNote: "hangen reflexive rejected" };
  }

  const deSourceList = OWNER_DE_SOURCE_ISSUE.map((s) => s.verbId);
  if (
    deSourceList.includes(finding.verbId) &&
    finding.field === "imperfektKonjunktiv" &&
    finding.regressionType !== "REPAIR_REGRESSION" &&
    finding.category !== "FOREIGN_REMNANT"
  ) {
    const lvSlot = lvVerbs[index]?.[finding.field]?.lv || "";
    if (finding.regressionType === "DE_SOURCE_ISSUE" || finding.category === "GRAMMAR") {
      return { ...finding, validation: "DE_SOURCE_ISSUE", ownerStatus: "DE_SOURCE_ISSUE" };
    }
  }

  if (!finding.proposedEn || !finding.proposedEn.trim()) {
    return { ...finding, validation: "FALSE_POSITIVE", validationNote: "no proposedEn" };
  }

  return { ...finding, validation: "VALIDATED", currentEn: productionEn, de: productionDe || finding.de };
}

async function runLuna(verbs) {
  if (!process.env.OPENAI_API_KEY?.trim()) {
    return { status: "NOT_RUN_API_UNAVAILABLE", rawFindings: [], stats: null };
  }

  const { auditRegressionBatch, createStats, recordRetryReason } = require("./openai-luna-en-verbs-targeted-regression");

  const stats = createStats();
  let progress = { completedBatches: [] };
  if (fs.existsSync(PROGRESS_PATH)) {
    try {
      progress = JSON.parse(fs.readFileSync(PROGRESS_PATH, "utf8"));
    } catch {
      progress = { completedBatches: [] };
    }
  }
  const completed = new Set(progress.completedBatches || []);

  let rawFindings = [];
  if (fs.existsSync(OUT_RAW)) {
    try {
      rawFindings = JSON.parse(fs.readFileSync(OUT_RAW, "utf8")).findings || [];
    } catch {
      rawFindings = [];
    }
  }

  const batches = chunk(verbs, VERB_BATCH);
  const log = fs.createWriteStream(LOG_PATH, { flags: "a" });
  log.write(`\n--- run ${new Date().toISOString()} verbs=${verbs.length} batches=${batches.length} ---\n`);

  for (let bi = 0; bi < batches.length; bi++) {
    const batchId = `batch-${bi}`;
    if (completed.has(batchId)) {
      process.stdout.write(`  skip ${batchId} (completed)\n`);
      continue;
    }

    let lastError = null;
    for (let attempt = 0; attempt < MAX_RETRIES; attempt++) {
      try {
        const { findings } = await auditRegressionBatch({
          verbs: batches[bi],
          stats,
          batchLabel: batchId,
        });
        rawFindings.push(...findings);
        completed.add(batchId);
        progress.completedBatches = [...completed];
        fs.writeFileSync(PROGRESS_PATH, JSON.stringify(progress, null, 2));
        fs.writeFileSync(OUT_RAW, JSON.stringify({ findings: rawFindings, stats }, null, 2));
        log.write(`${batchId}: findings=${findings.length}\n`);
        lastError = null;
        break;
      } catch (err) {
        lastError = err;
        recordRetryReason(stats, err.message?.slice(0, 60) || "error");
        stats.retryCount += 1;
        stats.retryRequests += 1;
        log.write(`${batchId} retry ${attempt + 1}: ${err.message}\n`);
        await new Promise((r) => setTimeout(r, 2000 * (attempt + 1)));
      }
    }
    if (lastError) throw lastError;
  }

  log.end();
  return { status: "COMPLETE", rawFindings, stats };
}

function countBySeverity(findings, validation) {
  const counts = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0 };
  for (const f of findings) {
    if (f.validation !== validation) continue;
    const sev = String(f.severity || "MEDIUM").toUpperCase();
    if (counts[sev] !== undefined) counts[sev]++;
  }
  return counts;
}

function generateReport(scope, gates, luna, validatedFindings, verdict) {
  const rawCounts = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0 };
  for (const f of luna.rawFindings || []) {
    if (f.status !== "FINDING") continue;
    const sev = String(f.severity || "MEDIUM").toUpperCase();
    if (rawCounts[sev] !== undefined) rawCounts[sev]++;
  }

  const validated = validatedFindings.filter((f) => f.validation === "VALIDATED");
  const valCounts = countBySeverity(validatedFindings, "VALIDATED");
  const fp = validatedFindings.filter((f) => f.validation === "FALSE_POSITIVE").length;
  const ownerRecheck = validatedFindings.filter((f) => f.validation === "OWNER_DECISION_RECHECK").length;
  const deSource = validatedFindings.filter((f) => f.validation === "DE_SOURCE_ISSUE").length;

  const regTypes = { REPAIR_REGRESSION: 0, REPAIR_INCOMPLETE: 0, PARADIGM_INCONSISTENCY: 0 };
  for (const f of validated) {
    const rt = f.regressionType || "";
    if (regTypes[rt] !== undefined) regTypes[rt]++;
  }

  const lines = [
    "# EN–DE Verbs — Targeted Luna Regression Audit",
    "",
    `**Date:** ${new Date().toISOString().slice(0, 10)}`,
    `**Model:** ${luna.stats?.model || "gpt-5.6-luna"}`,
    "**Mode:** AUDIT ONLY — no production changes",
    "",
    "## Verdict",
    "",
    `**${verdict}**`,
    "",
    "## Scope",
    "",
    "| Metric | Value |",
    "| --- | ---: |",
    `| Repair blocks | 9/9 |`,
    `| Original findings processed | 421/421 |`,
    `| Unique changed verbs | ${scope.uniqueChangedVerbs} |`,
    `| Unique changed fields | ${scope.uniqueChangedFields} |`,
    `| Luna verbs audited | ${scope.changedVerbIndices.length} |`,
    `| Luna requests | ${luna.stats?.requestCount || 0} |`,
    `| Luna tokens | ${luna.stats?.totalTokens || 0} |`,
    "",
    "## Deterministic gates",
    "",
    "| Gate | Result |",
    "| --- | --- |",
    `| verbs | ${gates.verbs}/${gates.expectedVerbs} |`,
    `| form slots | ${gates.formSlots}/${gates.expectedFormSlots} |`,
    `| mirror | ${gates.mirror ? "PASS" : "FAIL"} |`,
    `| syntax | ${gates.syntax ? "PASS" : "FAIL"} |`,
    `| structure | ${gates.structure ? "PASS" : "FAIL"} |`,
    `| ID/order | ${gates.idOrder ? "PASS" : "FAIL"} |`,
    `| DE READ-ONLY | ${gates.deReadOnly ? "PASS" : "FAIL"} |`,
    `| foreign-language remnants | ${gates.foreignRemnants.length} |`,
    "",
    "## Luna raw",
    "",
    `CRITICAL: ${rawCounts.CRITICAL} · HIGH: ${rawCounts.HIGH} · MEDIUM: ${rawCounts.MEDIUM} · LOW: ${rawCounts.LOW}`,
    "",
    "## Validated",
    "",
    `CRITICAL: ${valCounts.CRITICAL} · HIGH: ${valCounts.HIGH} · MEDIUM: ${valCounts.MEDIUM} · LOW: ${valCounts.LOW}`,
    `FALSE_POSITIVE: ${fp} · OWNER_DECISION_RECHECK: ${ownerRecheck} · DE_SOURCE_ISSUE: ${deSource}`,
    "",
    "## Regression classification (VALIDATED only)",
    "",
    `REPAIR_REGRESSION: ${regTypes.REPAIR_REGRESSION} · REPAIR_INCOMPLETE: ${regTypes.REPAIR_INCOMPLETE} · PARADIGM_INCONSISTENCY: ${regTypes.PARADIGM_INCONSISTENCY}`,
    "",
    "## Production",
    "",
    "production changes = 0",
    "",
  ];

  if (validated.length > 0) {
    lines.push("## Validated findings", "");
    for (const f of validated) {
      lines.push(
        `- **${f.severity}** \`${f.verbId}\` / \`${f.field}\` — ${f.reason} → \`${f.proposedEn}\` (${f.regressionType || "?"})`
      );
    }
    lines.push("");
  }

  if (ownerRecheck > 0) {
    lines.push("## OWNER_DECISION_RECHECK", "");
    for (const f of validatedFindings.filter((x) => x.validation === "OWNER_DECISION_RECHECK")) {
      lines.push(`- \`${f.verbId}\` / \`${f.field}\` — ${f.reason || f.validationNote || ""}`);
    }
    lines.push("");
  }

  if (gates.foreignRemnants.length > 0) {
    lines.push("## Foreign remnants (deterministic)", "");
    for (const r of gates.foreignRemnants.slice(0, 30)) {
      lines.push(`- \`${r.verbId}\` / \`${r.field}\` — ${r.currentEn} (${r.language})`);
    }
    lines.push("");
  }

  lines.push("## Repair commits", "");
  for (const rc of REPAIR_COMMITS) {
    lines.push(`- Block ${rc.block}: \`${rc.hash}\` (findings ${rc.findings})`);
  }

  fs.writeFileSync(OUT_MD, lines.join("\n"));
}

function computeVerdict(gates, validatedFindings, foreignRemnants) {
  if (gates.criticalFail) return "GATES_FAIL";
  const validated = validatedFindings.filter((f) => f.validation === "VALIDATED");
  const hasValidated = validated.length > 0;
  const ownerRecheck = validatedFindings.filter((f) => f.validation === "OWNER_DECISION_RECHECK").length;

  const ownerForeignKeys = new Set(
    OWNER_DE_SOURCE_ISSUE.map((s) => `${s.verbId}|${s.field}`)
  );
  const unexpectedForeign = foreignRemnants.filter(
    (r) => r.pattern !== "EMPTY_EN" && !ownerForeignKeys.has(`${r.verbId}|${r.field}`)
  ).length;

  if (hasValidated || unexpectedForeign > 0) return "REPAIRS REQUIRED";
  if (ownerRecheck > 0) return "OWNER REVIEW REQUIRED";
  return "TARGETED REGRESSION PASS";
}

async function main() {
  const validateOnly = process.argv.includes("--validate-only");
  const baselineEn = loadFromCode(gitShow(BASELINE_REF, "data/en/verbs.js"));
  const currentEn = loadFile("data/en/verbs.js");
  const lvVerbs = loadFile("data/verbs.js");
  const deVerbs = loadFile("data/verbs.js");

  const scope = fs.existsSync(OUT_SCOPE)
    ? JSON.parse(fs.readFileSync(OUT_SCOPE, "utf8"))
    : buildScope(baselineEn, currentEn, lvVerbs);
  if (!fs.existsSync(OUT_SCOPE)) fs.writeFileSync(OUT_SCOPE, JSON.stringify(scope, null, 2));

  const gates = runDeterministicGates(baselineEn, currentEn, lvVerbs, deVerbs);
  if (gates.criticalFail && !validateOnly) {
    console.error("CRITICAL GATES FAIL — stopping before Luna API");
    const report = {
      verdict: "GATES_FAIL",
      gates,
      scope: {
        uniqueChangedVerbs: scope.uniqueChangedVerbs,
        uniqueChangedFields: scope.uniqueChangedFields,
      },
    };
    fs.writeFileSync(OUT_FINDINGS, JSON.stringify(report, null, 2));
    generateReport(scope, gates, { rawFindings: [], stats: null }, [], "GATES_FAIL");
    console.log(JSON.stringify(report, null, 2));
    process.exit(1);
  }

  const verbs = buildVerbPayloads(scope, currentEn, lvVerbs);
  let luna;
  if (validateOnly && fs.existsSync(OUT_RAW)) {
    const raw = JSON.parse(fs.readFileSync(OUT_RAW, "utf8"));
    luna = {
      status: "VALIDATE_ONLY",
      rawFindings: raw.findings || [],
      stats: raw.stats || null,
    };
  } else {
    luna = await runLuna(verbs);
  }

  const ownerMap = ownerSlotMap();
  const qualityRaw = (luna.rawFindings || []).filter((f) => f.status === "FINDING");
  const validatedFindings = qualityRaw.map((f) => validateFinding(f, currentEn, lvVerbs, ownerMap));

  const verdict = computeVerdict(gates, validatedFindings, gates.foreignRemnants);

  const out = {
    meta: {
      generatedAt: new Date().toISOString(),
      model: luna.stats?.model || "gpt-5.6-luna",
      verdict,
      productionChanges: 0,
      repairBlocks: 9,
      originalFindingsProcessed: 421,
    },
    scope: {
      uniqueChangedVerbs: scope.uniqueChangedVerbs,
      uniqueChangedFields: scope.uniqueChangedFields,
      lunaVerbsAudited: verbs.length,
      lunaRequests: luna.stats?.requestCount || 0,
      lunaTokens: luna.stats?.totalTokens || 0,
    },
    gates,
    luna: {
      status: luna.status,
      rawSeverity: countBySeverity(qualityRaw.map((f) => ({ ...f, validation: "RAW" })), "RAW"),
      stats: luna.stats,
    },
    validated: {
      counts: countBySeverity(validatedFindings, "VALIDATED"),
      falsePositive: validatedFindings.filter((f) => f.validation === "FALSE_POSITIVE").length,
      ownerDecisionRecheck: validatedFindings.filter((f) => f.validation === "OWNER_DECISION_RECHECK").length,
      deSourceIssue: validatedFindings.filter((f) => f.validation === "DE_SOURCE_ISSUE").length,
      findings: validatedFindings.filter((f) => f.validation === "VALIDATED"),
      ownerRecheckFindings: validatedFindings.filter((f) => f.validation === "OWNER_DECISION_RECHECK"),
    },
    allFindings: validatedFindings,
  };

  fs.writeFileSync(OUT_FINDINGS, JSON.stringify(out, null, 2));
  generateReport(scope, gates, luna, validatedFindings, verdict);

  console.log(JSON.stringify({ verdict, scope: out.scope, gates: { ...gates, foreignRemnants: gates.foreignRemnants.length }, validated: out.validated }, null, 2));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
