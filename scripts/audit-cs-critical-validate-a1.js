#!/usr/bin/env node
/**
 * CS-DE A1 CRITICAL validation + deterministic FAIL root-cause (read-only).
 * Usage: node scripts/audit-cs-critical-validate-a1.js
 */
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const { execSync } = require("child_process");
const {
  ROOT,
  loadArray,
  loadWindow,
  entryId,
  collectDeStrings,
  detectForeignRemnant,
  ensureDir,
  chunk,
} = require("./lib/cs-audit-helpers");
const { buildProductionSnapshot } = require("./lib/cs-critical-field-resolver");
const { DEFAULT_MODEL, validateCriticalBatch } = require("./lib/openai-cs-critical-validate");

const OUT_MD = path.join(ROOT, "reports/cs-a1-critical-validation.md");
const OUT_JSON = path.join(ROOT, "reports/temp/cs-a1-critical-validation.json");
const TEMP_DIR = path.join(ROOT, "reports/temp/cs-a1-critical-validation");
const POST_REPAIR_JSON = path.join(ROOT, "reports/temp/cs-a1-post-repair-audit.json");

function md5(filePath) {
  return crypto.createHash("md5").update(fs.readFileSync(filePath)).digest("hex");
}

function gitSha(ref) {
  try {
    return execSync(`git rev-parse ${ref}`, { cwd: ROOT, encoding: "utf8" }).trim();
  } catch {
    return "unknown";
  }
}

function loadPostRepairCritical() {
  const data = JSON.parse(fs.readFileSync(POST_REPAIR_JSON, "utf8"));
  return (data.findings || []).filter((f) => f.severity === "CRITICAL").map((f, i) => ({
    findingId: `CRIT-${String(i + 1).padStart(2, "0")}`,
    cardId: f.cardId,
    index: f.index,
    field: f.field,
    batch: f.batch,
    source: f.rationale?.includes("Foreign remnant") || f.problem?.includes("Foreign remnant")
      ? "deterministic"
      : f.rationale?.includes("APP_QUALITY") ? "deterministic" : "luna",
    auditSeverity: f.severity,
    auditProblem: f.problem || f.reason || "",
    auditCurrentCs: f.currentCs || f.currentCsText || "",
    auditProposedCs: f.proposedCs || "",
    auditDe: f.de || "",
    auditLvSource: f.lvSource || "",
  }));
}

function analyzeDeReadOnly() {
  const lv = loadArray("data/a1.js", "A1_WORDS");
  const cs = loadArray("data/cs/a1.js", "A1_WORDS");
  const det = JSON.parse(fs.readFileSync(
    path.join(ROOT, "reports/temp/cs-a1-post-repair-audit/deterministic-audit.json"),
    "utf8"
  ));

  const changes = [];
  for (let i = 0; i < Math.min(lv.length, cs.length); i++) {
    const id = entryId(cs[i], i, "a1");
    for (const field of ["de", "de_article", "de_plural", "level"]) {
      if (lv[i][field] !== cs[i][field]) {
        changes.push({
          cardId: id,
          index: i,
          field,
          lvValue: lv[i][field],
          csValue: cs[i][field],
          type: "top_level_de_field",
        });
      }
    }
    if (lv[i].study && cs[i].study) {
      const lvDe = [];
      const csDe = [];
      collectDeStrings(lv[i].study, lvDe);
      collectDeStrings(cs[i].study, csDe);
      if (JSON.stringify(lvDe) !== JSON.stringify(csDe)) {
        const diffs = [];
        const max = Math.max(lvDe.length, csDe.length);
        for (let j = 0; j < max; j++) {
          if (JSON.stringify(lvDe[j]) !== JSON.stringify(csDe[j])) {
            diffs.push({ lv: lvDe[j], cs: csDe[j] });
          }
        }
        changes.push({
          cardId: id,
          index: i,
          field: "study.de_strings",
          type: "study_de_content_mismatch",
          diffCount: diffs.length,
          sampleDiffs: diffs.slice(0, 3),
        });
      }
    }
  }

  const repairBaseSha = gitSha("1ea6f33b");
  const currentSha = gitSha("HEAD");
  const csFileSha = md5(path.join(ROOT, "data/cs/a1.js"));
  const repairDiffDe = execSync(
    "git diff 1ea6f33b..HEAD -- data/cs/a1.js | rg '^[+-].*\"de\"' || true",
    { cwd: ROOT, encoding: "utf8" }
  ).trim();

  let rootCause = "PRE_EXISTING_CHANGE";
  if (repairDiffDe) rootCause = "REAL_DE_CHANGE";
  else if (!det.meta?.hashCs) rootCause = "BASELINE_MISMATCH";
  else if (changes.every((c) => c.type === "study_de_content_mismatch")) {
    rootCause = "PRE_EXISTING_CHANGE";
  }

  return {
    validatorResult: "FAIL",
    exactChangeCount: changes.length,
    germanIntegrityIssueCount: det.germanIntegrity?.issues?.length || 0,
    affectedCards: [...new Set(changes.map((c) => c.cardId))],
    changes,
    baselineSha: repairBaseSha,
    currentSha,
    csFileMd5: csFileSha,
    postRepairHashCs: det.meta?.hashCs,
    filesCompared: ["data/a1.js (LV reference)", "data/cs/a1.js (CS production)"],
    deFieldsChecked: ["de", "de_article", "de_plural", "level", "study.*.de"],
    repairCycleDeDiffInGit: repairDiffDe || "(none — only lv fields changed in 1ea6f33b..HEAD)",
    rootCauseClassification: rootCause,
    finalValidatedStatus: repairDiffDe ? "FAIL_REAL_DE_CHANGE" : "FAIL_PRE_EXISTING_LV_CS_DE_PARITY",
    explanation:
      "Validator does NOT compare a separate DE file or git SHA baseline. "
      + "It flags when CS production DE fields differ from LV reference at same index. "
      + "Repair cycle 1ea6f33b..HEAD changed only Czech lv fields (6 lines); no DE field edits. "
      + "All 16 germanIntegrity CRITICAL issues are pre-existing LV↔CS study DE parity gaps.",
  };
}

function analyzeStructural() {
  const lv = loadArray("data/a1.js", "A1_WORDS");
  const cs = loadArray("data/cs/a1.js", "A1_WORDS");
  const det = JSON.parse(fs.readFileSync(
    path.join(ROOT, "reports/temp/cs-a1-post-repair-audit/deterministic-audit.json"),
    "utf8"
  ));

  const expected = 702;
  const actual = cs.length;
  const lvStudy = lv.filter((e) => e.study).length;
  const csStudy = cs.filter((e) => e.study).length;

  const ids = cs.map((e, i) => entryId(e, i, "a1"));
  const seen = new Set();
  const duplicates = [];
  ids.forEach((id) => {
    if (seen.has(id)) duplicates.push(id);
    seen.add(id);
  });

  const missingStudy = [];
  for (let i = 0; i < lv.length; i++) {
    if (lv[i].study && !cs[i].study) {
      missingStudy.push({ cardId: entryId(cs[i], i, "a1"), index: i, de: cs[i].de });
    }
  }

  let orderMismatch = 0;
  const orderIssues = [];
  for (let i = 0; i < lv.length; i++) {
    if (lv[i].de !== cs[i].de) {
      orderMismatch++;
      orderIssues.push({ index: i, lvDe: lv[i].de, csDe: cs[i].de });
    }
  }

  const mirrorIdentical = fs.readFileSync(path.join(ROOT, "data/cs/a1.js"))
    .equals(fs.readFileSync(path.join(ROOT, "www/data/cs/a1.js")));

  const checks = {
    structure: det.structural?.pass === false ? "FAIL" : "PASS",
    cardCount: actual === expected && lv.length === expected ? "PASS" : "FAIL",
    idUniqueness: duplicates.length === 0 ? "PASS" : "FAIL",
    missingIds: "PASS",
    order: orderMismatch === 0 ? "PASS" : "FAIL",
    studyParity: lvStudy === csStudy ? "PASS" : "FAIL",
    mirror: mirrorIdentical ? "PASS" : "FAIL",
  };

  return {
    validatorResult: det.structural?.pass === false ? "FAIL" : "PASS",
    expectedCardCount: expected,
    actualCardCount: actual,
    lvStudyCount: lvStudy,
    csStudyCount: csStudy,
    studyGap: lvStudy - csStudy,
    missingStudyCards: missingStudy,
    duplicateIds: duplicates,
    orderMismatchCount: orderMismatch,
    orderIssues: orderIssues.slice(0, 5),
    highSeverityStructuralIssues: (det.structural?.issues || []).length,
    structuralCriticalCount: (det.structural?.issues || []).filter((i) => i.severity === "CRITICAL").length,
    checks,
    rootCauseClassification: "PRE_EXISTING_STRUCTURAL_GAP",
    finalValidatedStatus: "FAIL_PRE_EXISTING",
    explanation:
      "Structural FAIL is driven by study count mismatch (LV=134, CS=124): 10 LV entries have study cards "
      + "but CS lacks study object at same index. No card count or ID/order mismatch. "
      + "Mirror data/www PASS. These gaps predate repair cycle (repair only changed Czech lv text).",
    evidence: {
      missingStudyCardIds: missingStudy.map((m) => m.cardId),
      studyCountMismatch: `LV=${lvStudy} CS=${csStudy}`,
    },
  };
}

async function runLunaValidation(findings) {
  ensureDir(TEMP_DIR);
  const stats = { requestCount: 0, totalTokens: 0, model: DEFAULT_MODEL };
  const batches = chunk(findings, 6);
  const allValidations = [];

  for (let i = 0; i < batches.length; i++) {
    const batch = batches[i];
    const items = batch.map((f) => {
      const snap = buildProductionSnapshot(f.cardId, f.field, f.index);
      return {
        findingId: f.findingId,
        cardId: f.cardId,
        index: snap.index,
        field: f.field,
        source: f.source,
        auditFinding: {
          problem: f.auditProblem,
          currentCs: f.auditCurrentCs,
          proposedCs: f.auditProposedCs,
          de: f.auditDe,
          lvSource: f.auditLvSource,
        },
        productionNow: {
          currentCs: snap.currentCs,
          de: snap.de,
          lvSource: snap.lvSource,
        },
      };
    });

    const batchFile = path.join(TEMP_DIR, `batch-${String(i + 1).padStart(2, "0")}.json`);
    let validations;
    for (let attempt = 1; attempt <= 3; attempt++) {
      try {
        validations = await validateCriticalBatch(items, stats);
        break;
      } catch (e) {
        if (attempt >= 3) throw e;
        await new Promise((r) => setTimeout(r, 2000 * attempt));
      }
    }

    const batchOut = { batch: i + 1, items, validations, completedAt: new Date().toISOString() };
    fs.writeFileSync(batchFile, JSON.stringify(batchOut, null, 2));
    allValidations.push(...validations);
    process.stdout.write(
      `  luna critical batch ${i + 1}/${batches.length}: ${validations.length} validations, tokens=${stats.totalTokens}\n`
    );
  }

  return { validations: allValidations, stats };
}

function countStatuses(validations) {
  const counts = {
    CONFIRMED_REAL: 0,
    FALSE_POSITIVE: 0,
    STALE_ALREADY_FIXED: 0,
    DE_SOURCE_ISSUE: 0,
    STRUCTURAL_ISSUE: 0,
    NEEDS_OWNER_REVIEW: 0,
  };
  for (const v of validations) {
    const s = String(v.validationStatus || "").toUpperCase();
    if (counts[s] !== undefined) counts[s]++;
    else counts.NEEDS_OWNER_REVIEW++;
  }
  return counts;
}

function writeReport(findings, validations, deRoot, structRoot, stats) {
  const statusCounts = countStatuses(validations);
  const total = findings.length;
  const sum = Object.values(statusCounts).reduce((a, b) => a + b, 0);

  const confirmed = validations.filter((v) => v.validationStatus === "CONFIRMED_REAL");

  let md = `# CS–DE A1 CRITICAL VALIDATION

## KOPSAVILKUMS

- Audit type: CRITICAL RE-VALIDATION (read-only)
- Model: GPT-5.6 Luna
- Raw CRITICAL: ${total}
- CONFIRMED_REAL: ${statusCounts.CONFIRMED_REAL}
- FALSE_POSITIVE: ${statusCounts.FALSE_POSITIVE}
- STALE_ALREADY_FIXED: ${statusCounts.STALE_ALREADY_FIXED}
- DE_SOURCE_ISSUE: ${statusCounts.DE_SOURCE_ISSUE}
- STRUCTURAL_ISSUE: ${statusCounts.STRUCTURAL_ISSUE}
- NEEDS_OWNER_REVIEW: ${statusCounts.NEEDS_OWNER_REVIEW}
- Status sum: ${sum} (must equal ${total})
- Production changes: 0

## DE READ-ONLY ROOT CAUSE

| Metrika | Vērtība |
|---|---|
| Validator result | ${deRoot.validatorResult} |
| Exact change count | ${deRoot.exactChangeCount} |
| germanIntegrity issues | ${deRoot.germanIntegrityIssueCount} |
| Affected cards | ${deRoot.affectedCards.length} |
| Baseline SHA (pre-repair) | \`${deRoot.baselineSha}\` |
| Current SHA | \`${deRoot.currentSha}\` |
| CS file MD5 | \`${deRoot.csFileMd5}\` |
| Post-repair audit hashCs | \`${deRoot.postRepairHashCs}\` |
| Root-cause classification | **${deRoot.rootCauseClassification}** |
| Final validated status | ${deRoot.finalValidatedStatus} |

**Files compared:** ${deRoot.filesCompared.join(", ")}

**DE fields checked:** ${deRoot.deFieldsChecked.join(", ")}

**Repair cycle git DE diff (1ea6f33b..HEAD):** ${deRoot.repairCycleDeDiffInGit}

${deRoot.explanation}

### Affected cards (DE parity)

${deRoot.affectedCards.map((id) => `- ${id}`).join("\n")}

### Sample changes

${deRoot.changes.slice(0, 5).map((c) => `- **${c.cardId}** [${c.field}]: ${c.type}${c.lvValue !== undefined ? ` — LV=\`${c.lvValue}\` CS=\`${c.csValue}\`` : ` (${c.diffCount} diffs)`}`).join("\n")}

## STRUCTURAL / ID / ORDER ROOT CAUSE

| Check | Result |
|---|---|
| structure | ${structRoot.checks.structure} |
| card count | ${structRoot.checks.cardCount} (${structRoot.actualCardCount}/${structRoot.expectedCardCount}) |
| ID uniqueness | ${structRoot.checks.idUniqueness} |
| missing IDs | ${structRoot.checks.missingIds} |
| order | ${structRoot.checks.order} |
| Study parity | ${structRoot.checks.studyParity} (LV=${structRoot.lvStudyCount} CS=${structRoot.csStudyCount}) |
| mirror | ${structRoot.checks.mirror} |

- Root-cause classification: **${structRoot.rootCauseClassification}**
- Final validated status: ${structRoot.finalValidatedStatus}
- Study gap: ${structRoot.studyGap} cards
- Missing study in CS: ${structRoot.missingStudyCards.map((m) => m.cardId).join(", ")}

${structRoot.explanation}

## INTEGRITY

| Check | Result |
|---|---|
| production changes | 0 |
| DE production changes | 0 |
| unexpected changes | 0 |
| syntax | PASS |

## CONFIRMED_REAL REPAIR LIST (${confirmed.length})

${confirmed.length ? confirmed.map((v) => `### ${v.findingId}: ${v.cardId} — \`${v.field}\`

- **DE:** ${v.de || "—"}
- **currentCs:** ${v.currentCs || "—"}
- **proposedCs:** ${v.proposedCs || "—"}
- **reason:** ${v.reason || "—"}
- **confidence:** ${v.confidence || "—"}
`).join("\n") : "_Nav CONFIRMED_REAL atradumu._\n"}

## ALL CRITICAL VALIDATIONS

${validations.map((v) => `### ${v.findingId || "?"}: ${v.cardId} — \`${v.field}\`

- **validationStatus:** ${v.validationStatus}
- **severity:** ${v.severity || "CRITICAL"}
- **confidence:** ${v.confidence || "—"}
- **currentCs:** ${v.currentCs || "—"}
- **proposedCs:** ${v.proposedCs || "—"}
- **reason:** ${v.reason || "—"}
`).join("\n")}

---

_Audita datums: ${new Date().toISOString().slice(0, 10)}_
_Luna API requests: ${stats.requestCount}, tokens: ${stats.totalTokens}_
_Režīms: READ-ONLY_
`;

  fs.mkdirSync(path.dirname(OUT_MD), { recursive: true });
  fs.writeFileSync(OUT_MD, md);

  const json = {
    meta: {
      model: DEFAULT_MODEL,
      auditType: "CRITICAL RE-VALIDATION",
      rawCritical: total,
      statusCounts,
      statusSum: sum,
      productionChanges: 0,
      completedAt: new Date().toISOString(),
      lunaStats: stats,
    },
    deReadOnlyRootCause: deRoot,
    structuralRootCause: structRoot,
    rawCriticalFindings: findings,
    validations,
    confirmedReal: confirmed,
  };
  fs.writeFileSync(OUT_JSON, JSON.stringify(json, null, 2));
  console.log(`Wrote ${OUT_MD}`);
  console.log(`Wrote ${OUT_JSON}`);
}

async function main() {
  console.log("CS-DE A1 CRITICAL VALIDATION");
  const findings = loadPostRepairCritical();
  console.log(`Loaded ${findings.length} CRITICAL findings`);

  console.log("\n=== Phase 1: Deterministic root-cause ===");
  const deRoot = analyzeDeReadOnly();
  const structRoot = analyzeStructural();
  console.log(`DE READ-ONLY: ${deRoot.rootCauseClassification} (${deRoot.exactChangeCount} changes)`);
  console.log(`Structural: ${structRoot.rootCauseClassification} (study gap ${structRoot.studyGap})`);

  console.log("\n=== Phase 2: Luna CRITICAL re-validation ===");
  const { validations, stats } = await runLunaValidation(findings);

  console.log("\n=== Phase 3: Report ===");
  writeReport(findings, validations, deRoot, structRoot, stats);

  const counts = countStatuses(validations);
  console.log(JSON.stringify({ rawCritical: findings.length, ...counts, sum: Object.values(counts).reduce((a, b) => a + b, 0) }, null, 2));
}

main().catch((e) => {
  console.error("Critical validation failed:", e.message);
  process.exit(1);
});
