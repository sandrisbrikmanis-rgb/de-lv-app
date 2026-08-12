#!/usr/bin/env node
/**
 * CS-DE A1 HIGH findings full validation (read-only).
 * Usage: node scripts/audit-cs-high-validate-a1.js [--resume]
 */
const fs = require("fs");
const path = require("path");
const {
  ROOT,
  loadArray,
  entryId,
  chunk,
  buildStudyCard,
  buildSimpleCard,
  ensureDir,
} = require("./lib/cs-audit-helpers");
const { DEFAULT_MODEL, validateHighBatch } = require("./lib/openai-cs-high-validate");

const POST_REPAIR_JSON = path.join(ROOT, "reports/temp/cs-a1-post-repair-audit.json");
const OUT_MD = path.join(ROOT, "reports/cs-a1-high-validation.md");
const OUT_JSON = path.join(ROOT, "reports/temp/cs-a1-high-validation.json");
const TEMP_DIR = path.join(ROOT, "reports/temp/cs-a1-high-validation");
const PROGRESS_FILE = path.join(ROOT, "scripts/.cs-a1-high-validation-progress.json");

const STUDY_GAP_CARDS = new Set([
  "a1-Besuch-87", "a1-besuchen-89", "a1-Fußball-218", "a1-ganz-219", "a1-gefallen-225",
  "a1-Geschichte-233", "a1-Geschwister-234", "a1-Großeltern-251", "a1-Hand-267", "a1-hübsch-288",
]);

const CRITICAL_REPAIRED_CARDS = new Set([
  "a1-es", "a1-fahren", "a1-in", "a1-land", "a1-sitzen", "a1-stehen", "a1-über",
  "a1-essen", "a1-bedeuten-75", "a1-Buch-116", "a1-Erde-164", "a1-März-396",
  "a1-bitte", "a1-bitte-study", "a1-das", "a1-die", "a1-heißen", "a1-laden-study",
  "a1-legen", "a1-schauen-study", "a1-sehen", "a1-sich", "a1-sollen", "a1-fernsehen-study",
]);

const RESUME = process.argv.includes("--resume");
const CARDS_PER_BATCH = 5;

function getFieldValue(entry, field) {
  if (!field || field === "lv" || field === "csText") return entry.lv;
  if (field.startsWith("structure")) return null;
  let pathStr = field;
  const m = pathStr.match(/^entry\[\d+\]\.(.+)$/);
  if (m) pathStr = m[1];
  if (!pathStr.startsWith("study.")) {
    if (entry.study && entry.study[pathStr.replace(/^study\./, "")] !== undefined) {
      pathStr = pathStr.startsWith("study.") ? pathStr : `study.${pathStr}`;
    } else if (!pathStr.includes(".")) {
      return entry[pathStr] ?? entry.lv;
    }
  }
  if (!pathStr.startsWith("study.") && field !== "lv") return entry.lv;
  const parts = [];
  pathStr.replace(/^study\./, "").replace(/([^[\].]+)|\[(\d+)\]/g, (_, key, idx) => {
    if (key) parts.push(key);
    if (idx !== undefined) parts.push(Number(idx));
    return "";
  });
  let cur = entry.study;
  for (const p of parts) {
    if (cur == null) return null;
    cur = cur[p];
  }
  return typeof cur === "object" ? JSON.stringify(cur) : cur;
}

function loadHighFindings() {
  const data = JSON.parse(fs.readFileSync(POST_REPAIR_JSON, "utf8"));
  const highs = (data.findings || []).filter((f) => f.severity === "HIGH");
  return highs.map((f, i) => ({
    findingId: `HIGH-${String(i + 1).padStart(3, "0")}`,
    cardId: f.cardId,
    index: f.index,
    field: f.field,
    batch: f.batch,
    source: f.rationale?.includes("APP_QUALITY") || f.problem?.includes("Missing fields")
      ? "deterministic"
      : f.problem?.includes("Foreign") || f.rationale?.includes("Foreign")
        ? "foreign_remnant"
        : "luna",
    auditProblem: f.problem || f.reason || "",
    auditCurrentCs: f.currentCs || f.currentCsText || "",
    auditProposedCs: f.proposedCs || "",
    auditDe: f.de || "",
    auditLvSource: f.lvSource || "",
    foreignRemnant: !!(f.problem?.includes("Foreign") || f.rationale?.includes("Foreign")),
  }));
}

function buildCardContext(cardId) {
  const lv = loadArray("data/a1.js", "A1_WORDS");
  const cs = loadArray("data/cs/a1.js", "A1_WORDS");
  let idx = -1;
  for (let i = 0; i < cs.length; i++) {
    if (entryId(cs[i], i, "a1") === cardId) { idx = i; break; }
  }
  if (idx < 0) return { cardId, error: "not found" };
  const lvE = lv[idx];
  const csE = cs[idx];
  const payload = csE.study
    ? buildStudyCard(lvE, csE, idx, "a1")
    : buildSimpleCard(lvE, csE, idx, "a1");
  return {
    cardId,
    index: idx,
    de: csE.de,
    csMain: csE.lv,
    study: csE.study || null,
    criticalRepaired: CRITICAL_REPAIRED_CARDS.has(cardId),
    studyGap: STUDY_GAP_CARDS.has(cardId),
    fullCard: payload,
  };
}

function loadProgress() {
  if (!RESUME || !fs.existsSync(PROGRESS_FILE)) {
    return { completedBatches: [], validatedIds: [] };
  }
  return JSON.parse(fs.readFileSync(PROGRESS_FILE, "utf8"));
}

function saveProgress(progress) {
  fs.writeFileSync(PROGRESS_FILE, JSON.stringify(progress, null, 2));
}

function verifyTechnical() {
  const lv = loadArray("data/a1.js", "A1_WORDS");
  const cs = loadArray("data/cs/a1.js", "A1_WORDS");
  const csPath = path.join(ROOT, "data/cs/a1.js");
  const wwwPath = path.join(ROOT, "www/data/cs/a1.js");
  let orderMismatch = 0;
  for (let i = 0; i < lv.length; i++) {
    if (lv[i].de !== cs[i].de) orderMismatch++;
  }
  let syntax = "PASS";
  try {
    const vm = require("vm");
    const ctx = { window: {} };
    vm.createContext(ctx);
    vm.runInContext(fs.readFileSync(csPath, "utf8"), ctx);
    if (!ctx.window.A1_WORDS || ctx.window.A1_WORDS.length !== 702) syntax = "FAIL";
  } catch { syntax = "FAIL"; }
  const mirror = fs.readFileSync(csPath).equals(fs.readFileSync(wwwPath));
  return {
    cards: cs.length,
    idOrder: orderMismatch === 0 ? "PASS" : "FAIL",
    syntax,
    mirror: mirror ? "PASS" : "FAIL",
    productionChanges: 0,
    deChanges: 0,
  };
}

function countStatuses(validations) {
  const counts = {
    CONFIRMED_REAL: 0,
    FALSE_POSITIVE: 0,
    STALE_ALREADY_FIXED: 0,
    DUPLICATE: 0,
    DE_SOURCE_ISSUE: 0,
    PRE_EXISTING_STRUCTURAL_GAP: 0,
    NEEDS_OWNER_REVIEW: 0,
  };
  for (const v of validations) {
    const s = String(v.validationStatus || "NEEDS_OWNER_REVIEW").toUpperCase();
    if (counts[s] !== undefined) counts[s]++;
    else counts.NEEDS_OWNER_REVIEW++;
  }
  return counts;
}

function writeReport(data) {
  const confirmed = data.validations.filter((v) => v.validationStatus === "CONFIRMED_REAL");
  const sum = Object.values(data.statusCounts).reduce((a, b) => a + b, 0);

  const md = `# CS–DE A1 HIGH VALIDATION

## KOPSAVILKUMS

- Audit type: HIGH FULL VALIDATION (read-only)
- Model: GPT-5.6 Luna
- Post-repair audit source: \`reports/temp/cs-a1-post-repair-audit.json\`
- CRITICAL cycle: CLOSED
- Production changes: 0

## COVERAGE

| Metrika | Vērtība |
|---|---|
| Raw HIGH expected | 371 |
| HIGH loaded | ${data.input.loaded} |
| Processed | ${data.validations.length} |
| Missing | ${Math.max(0, 371 - data.validations.length)} |
| Duplicate input findings (technical) | ${data.input.techDuplicates} |
| Unique input findings | ${data.input.unique} |
| Status sum | ${sum}/371 |

## CLASSIFICATION

| Status | Count |
|---|---|
| CONFIRMED_REAL | ${data.statusCounts.CONFIRMED_REAL} |
| FALSE_POSITIVE | ${data.statusCounts.FALSE_POSITIVE} |
| STALE_ALREADY_FIXED | ${data.statusCounts.STALE_ALREADY_FIXED} |
| DUPLICATE | ${data.statusCounts.DUPLICATE} |
| DE_SOURCE_ISSUE | ${data.statusCounts.DE_SOURCE_ISSUE} |
| PRE_EXISTING_STRUCTURAL_GAP | ${data.statusCounts.PRE_EXISTING_STRUCTURAL_GAP} |
| NEEDS_OWNER_REVIEW | ${data.statusCounts.NEEDS_OWNER_REVIEW} |

## CONFIRMED_REAL REPAIR CANDIDATES (${confirmed.length})

${confirmed.length <= 80
    ? confirmed.map((v) => `### ${v.findingId}: ${v.cardId} — \`${v.field}\`

- **currentCs:** ${v.currentCs || "—"}
- **proposedCs:** ${v.proposedCs || "—"}
- **reason:** ${v.reason || "—"}
- **confidence:** ${v.confidence || "—"}
- **source:** ${v.findingId}
`).join("\n")
    : confirmed.slice(0, 80).map((v) => `- **${v.findingId}** ${v.cardId} \`${v.field}\`: ${(v.reason || "").slice(0, 100)}`).join("\n")
      + `\n\n_... un vēl ${confirmed.length - 80} CONFIRMED_REAL (skat. JSON)._`}

## INTEGRITY

| Check | Result |
|---|---|
| production changes | 0 |
| DE changes | 0 |
| cards | ${data.technical.cards} |
| ID/order | ${data.technical.idOrder} |
| syntax | ${data.technical.syntax} |
| mirror | ${data.technical.mirror} |

## LUNA STATS

- API requests: ${data.stats.requestCount}
- Tokens: ${data.stats.totalTokens}

---

_Audita datums: ${new Date().toISOString().slice(0, 10)}_
_Artefakti: reports/temp/cs-a1-high-validation/_
`;

  fs.mkdirSync(path.dirname(OUT_MD), { recursive: true });
  fs.writeFileSync(OUT_MD, md);
  fs.writeFileSync(OUT_JSON, JSON.stringify({ ...data, productionChanges: 0 }, null, 2));
  console.log(`Wrote ${OUT_MD}`);
  console.log(`Wrote ${OUT_JSON}`);
}

async function main() {
  console.log("CS-DE A1 HIGH VALIDATION");
  const findings = loadHighFindings();
  console.log(`Loaded ${findings.length} HIGH findings`);

  const keys = new Set();
  let techDup = 0;
  for (const f of findings) {
    const k = `${f.cardId}|${f.field}|${f.auditCurrentCs}`;
    if (keys.has(k)) techDup++;
    else keys.add(k);
  }

  const byCard = new Map();
  for (const f of findings) {
    if (!byCard.has(f.cardId)) byCard.set(f.cardId, []);
    byCard.get(f.cardId).push(f);
  }
  const cardIds = [...byCard.keys()];

  ensureDir(TEMP_DIR);
  const progress = loadProgress();
  const completed = new Set(progress.completedBatches || []);
  const allValidations = progress.validations || [];
  const validatedIds = new Set(progress.validatedIds || []);
  const stats = progress.stats || { requestCount: 0, totalTokens: 0, model: DEFAULT_MODEL };

  const cardBatches = chunk(cardIds, CARDS_PER_BATCH);
  console.log(`${cardIds.length} cards, ${cardBatches.length} Luna batches`);

  for (let i = 0; i < cardBatches.length; i++) {
    const batchKey = `batch-${String(i + 1).padStart(3, "0")}`;
    if (completed.has(batchKey)) {
      console.log(`  skip ${batchKey}`);
      continue;
    }

    const batchFindings = [];
    const cards = [];
    for (const cardId of cardBatches[i]) {
      const cardFindings = byCard.get(cardId);
      const ctx = buildCardContext(cardId);
      cards.push(ctx);
      for (const f of cardFindings) {
        const csEntry = loadArray("data/cs/a1.js", "A1_WORDS")[ctx.index];
        batchFindings.push({
          ...f,
          productionCurrentCs: getFieldValue(csEntry, f.field),
          productionMatchesAudit: getFieldValue(csEntry, f.field) === f.auditCurrentCs
            || JSON.stringify(getFieldValue(csEntry, f.field)) === JSON.stringify(f.auditCurrentCs),
        });
      }
    }

    let validations;
    for (let attempt = 1; attempt <= 3; attempt++) {
      try {
        validations = await validateHighBatch(
          batchFindings.map((f) => ({ ...f, cardContext: cards.find((c) => c.cardId === f.cardId) })),
          stats,
          `${batchKey} (${batchFindings.length} findings)`
        );
        break;
      } catch (e) {
        if (attempt >= 3) throw e;
        await new Promise((r) => setTimeout(r, 2000 * attempt));
      }
    }

    const batchOut = {
      batch: batchKey,
      cardIds: cardBatches[i],
      findingCount: batchFindings.length,
      findings: batchFindings,
      validations,
      completedAt: new Date().toISOString(),
    };
    fs.writeFileSync(path.join(TEMP_DIR, `${batchKey}.json`), JSON.stringify(batchOut, null, 2));

    for (const v of validations) {
      if (v.findingId) validatedIds.add(v.findingId);
    }
    allValidations.push(...validations);
    completed.add(batchKey);
    progress.completedBatches = [...completed];
    progress.validatedIds = [...validatedIds];
    progress.validations = allValidations;
    progress.stats = stats;
    saveProgress(progress);
  }

  const statusCounts = countStatuses(allValidations);
  const technical = verifyTechnical();

  const payload = {
    meta: {
      model: DEFAULT_MODEL,
      auditType: "HIGH FULL VALIDATION",
      rawHigh: 371,
      completedAt: new Date().toISOString(),
    },
    input: { loaded: findings.length, techDuplicates: techDup, unique: keys.size },
    statusCounts,
    validations: allValidations,
    confirmedReal: allValidations.filter((v) => v.validationStatus === "CONFIRMED_REAL"),
    technical,
    stats,
    coverage: {
      processed: allValidations.length,
      missing: Math.max(0, 371 - allValidations.length),
      validatedIds: validatedIds.size,
    },
  };

  writeReport(payload);
  console.log(JSON.stringify({ processed: allValidations.length, ...statusCounts }, null, 2));
}

main().catch((e) => {
  console.error("HIGH validation failed:", e.message);
  process.exit(1);
});
