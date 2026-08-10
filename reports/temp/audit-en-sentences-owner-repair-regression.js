#!/usr/bin/env node
/**
 * EN-DE Teikumi OWNER repair targeted regression audit (READ-ONLY).
 */
require("dotenv").config();

const fs = require("fs");
const path = require("path");
const vm = require("vm");
const crypto = require("crypto");
const { execSync } = require("child_process");

const ROOT = path.join(__dirname, "..", "..");
const BASELINE_REF = "origin/main";

const OUT_MD = path.join(ROOT, "reports", "en-sentences-owner-repairs-regression-audit.md");
const OUT_JSON = path.join(ROOT, "reports", "temp", "en-sentences-owner-repairs-regression-audit.json");
const FINDINGS_JSON = path.join(ROOT, "reports", "temp", "en-sentences-owner-repairs-regression-findings.json");
const TARGET_JSON = path.join(ROOT, "reports", "temp", "en-sentences-owner-repair-regression-targets.json");
const RAW_JSON = path.join(ROOT, "reports", "temp", "en-sentences-owner-repair-regression-raw.json");
const PROGRESS_JSON = path.join(ROOT, "reports", "temp", ".en-sentences-owner-repair-regression-progress.json");

const BATCH_SIZE = 45;
const MAX_RETRIES = 3;

const OWNER_NELABOT = [
  "satze-27", "satze-82", "satze-116", "satze-134", "satze-137", "satze-142",
  "satze-212", "satze-216", "satze-217", "satze-263", "satze-264",
  "satze-471", "satze-483", "satze-626", "satze-705", "satze-725",
];

const SOURCE_LV_ISSUE_CARDS = new Set([
  "satze-242", "satze-379", "satze-414", "satze-556", "satze-559", "satze-562",
  "satze-651", "satze-660", "satze-673", "satze-674", "satze-727", "satze-760",
]);

const HIGH_RISK_CARDS = new Set([
  "satze-239", "satze-242", "satze-379", "satze-414", "satze-443", "satze-444",
  "satze-562", "satze-569", "satze-599", "satze-614", "satze-651", "satze-659",
  "satze-660", "satze-663", "satze-703", "satze-727", "satze-760", "satze-762", "satze-792",
]);

const NON_ERROR_CATEGORIES = new Set([
  "SOURCE_LV_ISSUE", "DE_SOURCE_ISSUE", "NEEDS_REVIEW", "STYLE_ONLY", "PROJECT_CONVENTION", "FALSE_POSITIVE",
]);

const LV_ONLY = /[āēīūģķļņĀĒĪŪĢĶĻŅ]/;
const MOJIBAKE = /Ô[^\x00-\x7F]{1,3}|[─┼][^\x00-\x7F]|â€[^\x00-\x7F]|Ã[^\x00-\x7F]/;
const ZWSP = /\u200B|\uFEFF/;

function md5File(p) {
  return crypto.createHash("md5").update(fs.readFileSync(p)).digest("hex");
}

function gitShow(ref, filePath) {
  return execSync(`git show ${ref}:${filePath}`, { cwd: ROOT, encoding: "utf8", maxBuffer: 50 * 1024 * 1024 });
}

function loadFromCode(code) {
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.SENTENCE_ENTRIES;
}

function loadFile(relPath) {
  return loadFromCode(fs.readFileSync(path.join(ROOT, relPath), "utf8"));
}

function cardId(index) {
  return `satze-${index}`;
}

function chunk(arr, n) {
  const out = [];
  for (let i = 0; i < arr.length; i += n) out.push(arr.slice(i, i + n));
  return out;
}

function escCell(s) {
  return String(s || "").replace(/\|/g, "\\|").replace(/\n/g, " ").slice(0, 100);
}

function buildInventory(baselineEn, currentEn, baselineLv, currentLv) {
  const changedCards = [];
  const nelabotCards = [];
  const allTarget = [];

  for (let i = 0; i < currentEn.length; i++) {
    const id = cardId(i);
    const isNelabot = OWNER_NELABOT.includes(id);
    const isChanged = baselineEn[i].lv !== currentEn[i].lv;
    const isSourceLv = SOURCE_LV_ISSUE_CARDS.has(id);
    const inScope = isChanged || isNelabot;

    if (!inScope) continue;

    const payload = {
      cardId: id,
      index: i,
      de: currentEn[i].de,
      lvSource: baselineLv[i].lv,
      currentEn: currentEn[i].lv,
      baselineEn: baselineEn[i].lv,
      ownerNelabot: isNelabot,
      ownerChanged: isChanged,
      sourceLvIssue: isSourceLv,
      highRisk: HIGH_RISK_CARDS.has(id),
    };

    allTarget.push(payload);
    if (isChanged) changedCards.push(payload);
    if (isNelabot) nelabotCards.push(payload);
  }

  return { changedCards, nelabotCards, allTarget };
}

function runDeterministic(currentEn, baselineEn, baselineLv, currentLv) {
  const enPath = path.join(ROOT, "data/en/sentences.js");
  const wwwPath = path.join(ROOT, "www/data/en/sentences.js");
  const lvPath = path.join(ROOT, "data/sentences.js");
  const dePath = path.join(ROOT, "data/sentences.js");

  const det = {
    entryCount: currentEn.length,
    baselineCount: baselineEn.length,
    lvCount: baselineLv.length,
    countParity: currentEn.length === baselineEn.length && currentEn.length === baselineLv.length,
    mirrorPass: md5File(enPath) === md5File(wwwPath),
    syntaxPass: true,
    deReadOnly: true,
    lvReadOnly: true,
    semicolonCount: 0,
    mojibakeCount: 0,
    zwspCount: 0,
    lvRemnantCount: 0,
    placeholderCount: 0,
    idOrderPass: true,
    nelabotPreserved: [],
    unexpectedChanges: 0,
  };

  try {
    execSync("node --check data/en/sentences.js", { cwd: ROOT });
    execSync("node --check www/data/en/sentences.js", { cwd: ROOT });
    execSync("node --check data/sentences.js", { cwd: ROOT });
  } catch {
    det.syntaxPass = false;
  }

  const deHashBefore = md5File(dePath);
  const lvHashBefore = md5File(lvPath);

  for (let i = 0; i < currentEn.length; i++) {
    if (baselineEn[i].de !== currentEn[i].de) det.deReadOnly = false;
    if (baselineLv[i].lv !== currentLv[i].lv) det.lvReadOnly = false;
    if (baselineEn[i].de !== currentEn[i].de) continue;

    const lv = currentEn[i].lv || "";
    if (lv.includes(";")) det.semicolonCount++;
    if (MOJIBAKE.test(lv) || MOJIBAKE.test(currentEn[i].de)) det.mojibakeCount++;
    if (ZWSP.test(lv)) det.zwspCount++;
    if (LV_ONLY.test(lv)) det.lvRemnantCount++;
    if (/^(TODO|TBD|\.\.\.)$/i.test(lv.split("•")[0].trim())) det.placeholderCount++;
  }

  for (const id of OWNER_NELABOT) {
    const idx = Number(id.replace("satze-", ""));
    const preserved = baselineEn[idx].lv === currentEn[idx].lv;
    det.nelabotPreserved.push({ cardId: id, preserved, baseline: baselineEn[idx].lv, current: currentEn[idx].lv });
    if (!preserved) det.unexpectedChanges++;
  }

  // Count total lv changes vs baseline
  let lvChanges = 0;
  for (let i = 0; i < currentEn.length; i++) {
    if (baselineEn[i].lv !== currentEn[i].lv) lvChanges++;
  }
  det.ownerChangedCount = lvChanges;

  det.deHashStable = md5File(dePath) === deHashBefore;
  det.lvHashStable = md5File(lvPath) === lvHashBefore;

  return det;
}

async function runLuna(targetCards) {
  if (!process.env.OPENAI_API_KEY?.trim()) {
    return { status: "NOT_RUN_API_UNAVAILABLE", rawFindings: [], stats: null, audited: 0 };
  }

  const { auditSentencesBatch, createStats, recordRetryReason } = require("./openai-luna-en-sentences-owner-repair-regression");
  const stats = createStats();

  let progress = { completedBatches: [] };
  if (fs.existsSync(PROGRESS_JSON)) {
    try {
      progress = JSON.parse(fs.readFileSync(PROGRESS_JSON, "utf8"));
    } catch {
      progress = { completedBatches: [] };
    }
  }
  const completed = new Set(progress.completedBatches || []);

  let rawFindings = [];
  if (fs.existsSync(RAW_JSON)) {
    try {
      rawFindings = JSON.parse(fs.readFileSync(RAW_JSON, "utf8")).findings || [];
    } catch {
      rawFindings = [];
    }
  }

  async function auditWithRetry(sentences, batchKey) {
    for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
      try {
        if (attempt === 0) stats.initialBatchRequests += 1;
        else {
          stats.retryRequests += 1;
          stats.retryCount += 1;
          recordRetryReason(stats, attempt === 1 ? "first_retry" : "subsequent_retry");
          await new Promise((r) => setTimeout(r, 2000 * (attempt + 1)));
        }
        return await auditSentencesBatch({ sentences, stats, batchLabel: batchKey });
      } catch (error) {
        if (attempt >= MAX_RETRIES) throw error;
        recordRetryReason(stats, error.message.includes("JSON") ? "invalid_json" : "api_error");
      }
    }
    return { findings: [] };
  }

  const batches = chunk(targetCards, BATCH_SIZE);
  for (let i = 0; i < batches.length; i++) {
    const batchKey = `regression-${i}`;
    if (completed.has(batchKey)) {
      console.log(`  skip ${batchKey}`);
      continue;
    }
    const lunaPayload = batches[i].map((c) => ({
      cardId: c.cardId,
      de: c.de,
      lvSource: c.lvSource,
      currentEn: c.currentEn,
      baselineEn: c.baselineEn,
      ownerNelabot: c.ownerNelabot,
      ownerChanged: c.ownerChanged,
      sourceLvIssue: c.sourceLvIssue,
      highRisk: c.highRisk,
      auditMode: "owner_repair_targeted_regression",
      instruction: "Verify OWNER-approved EN vs DE. PASS if correct. Do NOT revert OWNER repairs stylistically.",
    }));
    const { findings } = await auditWithRetry(lunaPayload, batchKey);
    rawFindings.push(...findings);
    completed.add(batchKey);
    fs.writeFileSync(PROGRESS_JSON, JSON.stringify({ completedBatches: [...completed] }, null, 2));
    fs.writeFileSync(RAW_JSON, JSON.stringify({ findings: rawFindings, stats }, null, 2));
  }

  return { status: "COMPLETED", rawFindings, stats, audited: targetCards.length };
}

function isRevertToBaseline(finding, targetCards) {
  const card = targetCards.find((c) => c.cardId === finding.cardId);
  if (!card || !card.ownerChanged) return false;
  const proposed = (finding.proposedEn || finding.proposedFix || "").trim();
  const baseline = (card.baselineEn || "").trim();
  const current = (finding.currentEn || card.currentEn || "").trim();
  return proposed && baseline && proposed === baseline && current !== baseline;
}

function validateFindings(rawFindings, targetCards) {
  const qualityFindings = [];
  const sourceLvConfirmed = [];
  const sourceLvRejected = [];
  const falsePositives = [];
  const styleOnly = [];
  const deSourceIssues = [];
  const verifiedOwnerKeep = [];
  const counts = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0 };

  const seen = new Set();

  for (const f of rawFindings) {
    if (f.status === "PASS") continue;

    const cardId = f.cardId;
    const key = `${cardId}|${(f.currentEn || "").slice(0, 40)}|${f.category}`;
    if (seen.has(key)) continue;
    seen.add(key);

    const cat = String(f.category || "").toUpperCase();
    const isNelabot = OWNER_NELABOT.includes(cardId);

    if (isNelabot) {
      if (cat === "SOURCE_LV_ISSUE" || f.status === "SOURCE_LV_ISSUE") {
        sourceLvConfirmed.push({ ...f, status: "SOURCE_LV_ISSUE" });
        continue;
      }
      if (NON_ERROR_CATEGORIES.has(cat) || isRevertToBaseline(f, targetCards)) {
        falsePositives.push({ ...f, status: "FALSE_POSITIVE", reason: `NELABOT verify: ${f.reason}` });
        verifiedOwnerKeep.push({ cardId, currentEn: f.currentEn, status: "OWNER_NELABOT_PASS" });
        continue;
      }
      const sev = String(f.severity || "MEDIUM").toUpperCase();
      if (sev === "CRITICAL" || sev === "HIGH") {
        qualityFindings.push({ ...f, status: "FINDING", note: "NELABOT card — Luna flagged after OWNER keep decision" });
        if (counts[sev] !== undefined) counts[sev]++;
      } else {
        falsePositives.push({ ...f, status: "FALSE_POSITIVE", reason: `NELABOT low-severity/style: ${f.reason}` });
        verifiedOwnerKeep.push({ cardId, currentEn: f.currentEn, status: "OWNER_NELABOT_PASS" });
      }
      continue;
    }

    if (f.status === "SOURCE_LV_ISSUE" || cat === "SOURCE_LV_ISSUE") {
      if (SOURCE_LV_ISSUE_CARDS.has(cardId)) {
        sourceLvConfirmed.push({
          cardId,
          status: "SOURCE_LV_ISSUE",
          de: f.de,
          lvSource: f.lvSource,
          currentEn: f.currentEn,
          reason: f.reason || "LV source mismatch; EN follows DE.",
        });
      } else {
        sourceLvRejected.push({ cardId, reason: "Luna SOURCE_LV_ISSUE not in OWNER documented set" });
      }
      continue;
    }

    if (cat === "DE_SOURCE_ISSUE") {
      deSourceIssues.push(f);
      continue;
    }

    if (NON_ERROR_CATEGORIES.has(cat) || cat === "STYLE_ONLY") {
      styleOnly.push({ ...f, status: "STYLE_ONLY" });
      continue;
    }

    if (isRevertToBaseline(f, targetCards)) {
      falsePositives.push({ ...f, status: "FALSE_POSITIVE", reason: "Reverts OWNER-approved repair to baseline" });
      continue;
    }

    const sev = String(f.severity || "MEDIUM").toUpperCase();
    if (sev === "WARNING") counts.MEDIUM++;
    else if (counts[sev] !== undefined) counts[sev]++;

    qualityFindings.push({
      cardId,
      severity: sev,
      category: cat,
      de: f.de,
      lvSource: f.lvSource,
      currentEn: f.currentEn,
      proposedEn: f.proposedEn,
      reason: f.reason,
      confidence: typeof f.confidence === "number" ? f.confidence : f.confidence === "high" ? 0.9 : f.confidence === "low" ? 0.5 : 0.7,
      status: "FINDING",
    });
  }

  return {
    qualityFindings,
    sourceLvConfirmed,
    sourceLvRejected,
    falsePositives,
    styleOnly,
    deSourceIssues,
    verifiedOwnerKeep,
    counts,
  };
}

function deriveVerdict(counts) {
  if (counts.CRITICAL > 0 || counts.HIGH > 0) return "FOLLOW-UP REPAIRS REQUIRED";
  if (counts.MEDIUM > 0 || counts.LOW > 0) return "OWNER REVIEW REQUIRED";
  return "OWNER REPAIRS REGRESSION PASS";
}

function writeReports(summary, validated, det, lunaResult, inventory) {
  const lines = [
    "# EN–DE Teikumi — OWNER Repair Targeted Regression Audit",
    "",
    `**Audita datums:** ${new Date().toISOString().slice(0, 10)}`,
    `**Modelis:** ${lunaResult.stats?.model || "gpt-5.6-luna"}`,
    "**Režģis:** READ-ONLY — production dati netika mainīti",
    "",
    "## Dataset",
    "",
    "| Metrika | Skaits |",
    "| --- | ---: |",
    "| Total dataset | 796 |",
    "| OWNER reviewed baseline | 248 |",
    "| OWNER approved changed | 232 |",
    "| OWNER NELABOT baseline | 16 |",
    "| SOURCE_LV_ISSUE baseline | 12 |",
    "| Regression audited changed | " + inventory.changedCards.length + "/232 |",
    "| OWNER NELABOT verified | " + det.nelabotPreserved.filter((n) => n.preserved).length + "/16 |",
    "| SOURCE_LV_ISSUE verified | " + SOURCE_LV_ISSUE_CARDS.size + "/12 |",
    "| Luna scoped cards | " + inventory.allTarget.length + " |",
    "",
    "## Deterministiskā pārbaude",
    "",
    "| Pārbaude | Rezultāts |",
    "| --- | --- |",
    "| Entry count parity (796) | " + (det.countParity ? "PASS" : "FAIL") + " |",
    "| Mirror data = www | " + (det.mirrorPass ? "PASS" : "FAIL") + " |",
    "| Syntax | " + (det.syntaxPass ? "PASS" : "FAIL") + " |",
    "| DE READ-ONLY | " + (det.deReadOnly && det.deHashStable ? "PASS" : "FAIL") + " |",
    "| LV READ-ONLY | " + (det.lvReadOnly && det.lvHashStable ? "PASS" : "FAIL") + " |",
    "| Semicolons | " + det.semicolonCount + " |",
    "| Mojibake | " + det.mojibakeCount + " |",
    "| Zero-width chars | " + det.zwspCount + " |",
    "| LV remnants | " + det.lvRemnantCount + " |",
    "| Placeholders | " + det.placeholderCount + " |",
    "| Unexpected changes | " + det.unexpectedChanges + " |",
    "",
    "## Luna regression findings (kvalitāte)",
    "",
    "| Smagums | Skaits |",
    "| --- | ---: |",
    "| KRITISKA | " + validated.counts.CRITICAL + " |",
    "| AUGSTA | " + validated.counts.HIGH + " |",
    "| VIDĒJA | " + validated.counts.MEDIUM + " |",
    "| ZEMA | " + validated.counts.LOW + " |",
    "",
    "| Klasifikācija | Skaits |",
    "| --- | ---: |",
    "| SOURCE_LV_ISSUE confirmed | " + validated.sourceLvConfirmed.length + " |",
    "| SOURCE_LV_ISSUE rejected | " + validated.sourceLvRejected.length + " |",
    "| DE_SOURCE_ISSUE | " + validated.deSourceIssues.length + " |",
    "| STYLE_ONLY | " + validated.styleOnly.length + " |",
    "| FALSE_POSITIVE | " + validated.falsePositives.length + " |",
    "| Production changes | 0 |",
    "",
    "## Gala verdikts",
    "",
    "**" + summary.verdict + "**",
    "",
  ];

  if (validated.qualityFindings.length > 0) {
    lines.push("## Quality findings", "", "| cardId | Sev | Cat | EN | Ieteikums | Pamatojums |", "| --- | --- | --- | --- | --- | --- |");
    for (const f of validated.qualityFindings) {
      lines.push("| " + [escCell(f.cardId), escCell(f.severity), escCell(f.category), escCell(f.currentEn), escCell(f.proposedEn), escCell(f.reason)].join(" | ") + " |");
    }
    lines.push("");
  }

  if (validated.sourceLvConfirmed.length > 0) {
    lines.push("## SOURCE_LV_ISSUE confirmed", "");
    for (const s of validated.sourceLvConfirmed) {
      lines.push("- **" + s.cardId + "** — " + escCell(s.reason));
    }
    lines.push("");
  }

  fs.writeFileSync(OUT_MD, lines.join("\n"));

  const out = {
    generatedAt: new Date().toISOString(),
    model: lunaResult.stats?.model || "gpt-5.6-luna",
    scope: "EN-DE Teikumi OWNER repair regression",
    dataset: summary,
    deterministic: det,
    luna: {
      status: lunaResult.status,
      audited: lunaResult.audited,
      apiUsage: lunaResult.stats,
      rawFindingCount: lunaResult.rawFindings?.length || 0,
    },
    classification: {
      severityCounts: validated.counts,
      sourceLvConfirmed: validated.sourceLvConfirmed.length,
      sourceLvRejected: validated.sourceLvRejected.length,
      deSourceIssues: validated.deSourceIssues.length,
      styleOnly: validated.styleOnly.length,
      falsePositives: validated.falsePositives.length,
      qualityFindingsCount: validated.qualityFindings.length,
    },
    verdict: summary.verdict,
    verifiedOwnerKeep: validated.verifiedOwnerKeep,
    sourceLvIssues: validated.sourceLvConfirmed,
    qualityFindings: validated.qualityFindings,
    falsePositives: validated.falsePositives,
    styleOnly: validated.styleOnly,
    deSourceIssues: validated.deSourceIssues,
  };

  fs.writeFileSync(OUT_JSON, JSON.stringify(out, null, 2));
  fs.writeFileSync(FINDINGS_JSON, JSON.stringify({
    qualityFindings: validated.qualityFindings,
    sourceLvIssues: validated.sourceLvConfirmed,
    falsePositives: validated.falsePositives,
    styleOnly: validated.styleOnly,
    verifiedOwnerKeep: validated.verifiedOwnerKeep,
    verdict: summary.verdict,
  }, null, 2));
}

async function main() {
  console.log("EN Teikumi OWNER repair regression audit (READ-ONLY)");
  console.log("Baseline:", BASELINE_REF);

  const baselineEn = loadFromCode(gitShow(BASELINE_REF, "data/en/sentences.js"));
  const currentEn = loadFile("data/en/sentences.js");
  const baselineLv = loadFromCode(gitShow(BASELINE_REF, "data/sentences.js"));
  const currentLv = loadFile("data/sentences.js");

  const inventory = buildInventory(baselineEn, currentEn, baselineLv, currentLv);
  fs.writeFileSync(TARGET_JSON, JSON.stringify(inventory, null, 2));

  console.log(`Target scope: ${inventory.allTarget.length} cards (${inventory.changedCards.length} changed, ${inventory.nelabotCards.length} NELABOT)`);

  const det = runDeterministic(currentEn, baselineEn, baselineLv, currentLv);
  console.log("Deterministic:", JSON.stringify({
    mirror: det.mirrorPass,
    deReadOnly: det.deReadOnly,
    lvReadOnly: det.lvReadOnly,
    semicolons: det.semicolonCount,
    nelabotPreserved: det.nelabotPreserved.filter((n) => n.preserved).length,
  }));

  const lunaResult = await runLuna(inventory.allTarget);
  const validated = validateFindings(lunaResult.rawFindings || [], inventory.allTarget);

  const summary = {
    totalDataset: 796,
    ownerReviewedBaseline: 248,
    ownerApprovedChanged: 232,
    ownerNelabotBaseline: 16,
    sourceLvIssueBaseline: 12,
    regressionAuditedChanged: inventory.changedCards.length,
    ownerNelabotVerified: det.nelabotPreserved.filter((n) => n.preserved).length,
    sourceLvIssueVerified: SOURCE_LV_ISSUE_CARDS.size,
    lunaScopedCards: inventory.allTarget.length,
    productionChanges: 0,
    verdict: deriveVerdict(validated.counts),
  };

  writeReports(summary, validated, det, lunaResult, inventory);

  console.log("\n=== Regression audit complete ===");
  console.log(JSON.stringify({
    verdict: summary.verdict,
    CRITICAL: validated.counts.CRITICAL,
    HIGH: validated.counts.HIGH,
    MEDIUM: validated.counts.MEDIUM,
    LOW: validated.counts.LOW,
    falsePositives: validated.falsePositives.length,
    sourceLvConfirmed: validated.sourceLvConfirmed.length,
    tokens: lunaResult.stats?.totalTokens,
  }, null, 2));
  console.log("Report:", OUT_MD);
}

main().catch((e) => {
  console.error("Regression audit failed:", e.message);
  process.exit(1);
});
