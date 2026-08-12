#!/usr/bin/env node
/**
 * CS-DE A1 HIGH post-repair gala validation / micro-regression (READ-ONLY).
 * Usage: node scripts/audit-cs-a1-high-post-repair-a1.js
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");
const {
  ROOT,
  loadArray,
  entryId,
  collectDeStrings,
  chunk,
  buildStudyCard,
  buildSimpleCard,
} = require("./lib/cs-audit-helpers");
const { DEFAULT_MODEL, auditHighMicroRegressionBatch } = require("./lib/openai-cs-high-micro-regression");

const BASELINE_COMMIT = "539d4fbd"; // before HIGH repair block 1
const OUT_MD = path.join(ROOT, "reports/cs-a1-high-post-repair-audit.md");
const OUT_JSON = path.join(ROOT, "reports/temp/cs-a1-high-post-repair-audit.json");
const TEMP_DIR = path.join(ROOT, "reports/temp/cs-a1-high-post-repair-audit");
const VALIDATION_JSON = path.join(ROOT, "reports/temp/cs-a1-high-validation.json");

const OWNER_OVERRIDE = [
  { findingId: "HIGH-050", cardId: "a1-in", field: "study.sectionAccents", value: "Berlīnē" },
];

const STRUCTURAL_GAP_CARDS = new Set([
  "a1-Besuch-87", "a1-besuchen-89", "a1-Fußball-218", "a1-ganz-219", "a1-gefallen-225",
  "a1-Geschichte-233", "a1-Geschwister-234", "a1-Großeltern-251", "a1-Hand-267", "a1-hübsch-288",
]);

const NEEDS_OWNER_REVIEW_FINDINGS = [
  "HIGH-009", "HIGH-010", "HIGH-011", "HIGH-012", "HIGH-021", "HIGH-024", "HIGH-025",
];

const SPECIAL_FOCUS_CARDS = [
  "a1-das", "a1-essen-study", "a1-fahren", "a1-über", "a1-zu", "a1-zum",
];

function normalizeField(field) {
  if (!field) return "lv";
  return field
    .replace(/^entry\[\d+\]\./, "")
    .replace(/^csMain$/, "lv")
    .replace(/^csText$/, "lv");
}

function fieldsCompatible(a, b) {
  const na = normalizeField(a);
  const nb = normalizeField(b);
  if (na === nb) return true;
  if ((na === "lv" || na === "csText") && (nb === "lv" || nb === "csText")) return true;
  if (na.startsWith("study.") && nb.startsWith("study.")) {
    const sa = na.replace(/^study\./, "");
    const sb = nb.replace(/^study\./, "");
    if (sa === sb) return true;
    if (sa.startsWith(sb + "[") || sb.startsWith(sa + "[")) return true;
  }
  if (na === "study.sectionAccents" && nb.includes("sectionAccents")) return true;
  return false;
}

function loadAllRepairs() {
  const all = [];
  for (let i = 1; i <= 6; i++) {
    const mod = require(path.join(__dirname, `apply-cs-a1-high-repair-block${String(i).padStart(2, "0")}.js`));
    for (const r of mod.REPAIRS) {
      all.push({
        block: i,
        n: r.n,
        cardId: r.cardId,
        field: r.field || "csText",
        rawField: r.field || "csText",
        pirmd: r.pirmd,
        pec: r.pec,
        wholeArray: Boolean(r.wholeArray),
      });
    }
  }
  return all;
}

function parseBlockReport(filePath) {
  if (!fs.existsSync(filePath)) return [];
  const text = fs.readFileSync(filePath, "utf8");
  const rows = [];
  for (const line of text.split("\n")) {
    const m = line.match(/^\| (\d+) \| ([^|]+) \| ([^|]+) \| (APPLIED|ALREADY_CORRECT|CURRENT_VALUE_MISMATCH|OWNER_CONFLICT) \|/);
    if (m) rows.push({ n: Number(m[1]), cardId: m[2].trim(), field: m[3].trim(), status: m[4].trim() });
  }
  return rows;
}

function loadBlockReports() {
  const rows = [];
  for (let i = 1; i <= 6; i++) {
    rows.push(...parseBlockReport(path.join(ROOT, `reports/cs-a1-high-repair-block-${String(i).padStart(2, "0")}.md`)));
  }
  return rows;
}

function getFieldValue(entry, fieldPath) {
  const parts = [];
  normalizeField(fieldPath).replace(/([^[\].]+)|\[(\d+)\]/g, (_, key, idx) => {
    if (key) parts.push(key);
    if (idx !== undefined) parts.push(Number(idx));
    return "";
  });
  let cur = entry;
  for (const p of parts) {
    if (cur == null) return null;
    cur = cur[p];
  }
  return cur;
}

function serializeValue(v) {
  if (v == null) return null;
  if (Array.isArray(v) || typeof v === "object") return JSON.stringify(v);
  return String(v);
}

function valuesEqual(a, b) {
  if (Array.isArray(a) || Array.isArray(b)) return JSON.stringify(a) === JSON.stringify(b);
  return serializeValue(a) === serializeValue(b);
}

function findCardIndex(cardId) {
  const cs = loadArray("data/cs/a1.js", "A1_WORDS");
  for (let i = 0; i < cs.length; i++) {
    if (entryId(cs[i], i, "a1") === cardId) return i;
  }
  return -1;
}

function loadConfirmedReal() {
  const data = JSON.parse(fs.readFileSync(VALIDATION_JSON, "utf8"));
  const seen = new Set();
  const out = [];
  for (const v of data.validations) {
    if (v.validationStatus !== "CONFIRMED_REAL") continue;
    const key = v.findingId || `${v.cardId}::${normalizeField(v.field)}`;
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(v);
  }
  return { all: out, meta: data.meta, statusCounts: data.statusCounts };
}

function reconcileCoverage(confirmed, repairs, blockReports, cs) {
  const reconciliation = [];
  const repairByKey = new Map();
  for (const r of repairs) {
    const key = `${r.cardId}::${normalizeField(r.field)}`;
    if (!repairByKey.has(key)) repairByKey.set(key, []);
    repairByKey.get(key).push(r);
  }

  const statusCounts = {
    REPAIRED: 0,
    ALREADY_CORRECT: 0,
    OWNER_OVERRIDE_FALSE_POSITIVE: 0,
    CURRENT_VALUE_MISMATCH: 0,
    MISSING_FROM_REPAIR_SCOPE: 0,
    DUPLICATE_REPAIR_TARGET: 0,
  };

  for (const f of confirmed) {
    const field = normalizeField(f.field);
    let finalStatus;
    let repairMatch = null;
    let blockMatch = null;

    if (OWNER_OVERRIDE.some((o) => o.findingId === f.findingId || (o.cardId === f.cardId && fieldsCompatible(o.field, f.field)))) {
      finalStatus = "OWNER_OVERRIDE_FALSE_POSITIVE";
    } else {
      repairMatch = repairs.find((r) => r.cardId === f.cardId && fieldsCompatible(r.field, f.field));
      blockMatch = blockReports.find((r) => r.cardId === f.cardId && fieldsCompatible(r.field, f.field));
      if (!repairMatch) {
        finalStatus = "MISSING_FROM_REPAIR_SCOPE";
      } else if (blockMatch?.status === "CURRENT_VALUE_MISMATCH") {
        finalStatus = "CURRENT_VALUE_MISMATCH";
      } else {
        const idx = findCardIndex(f.cardId);
        const entry = cs[idx];
        const actual = getFieldValue(entry, repairMatch.field);
        const pecOk = valuesEqual(actual, repairMatch.pec);
        const pirmdGone = !valuesEqual(actual, repairMatch.pirmd);
        if (blockMatch?.status === "ALREADY_CORRECT") {
          finalStatus = "ALREADY_CORRECT";
        } else if (pecOk && pirmdGone) {
          finalStatus = blockMatch?.status === "APPLIED" ? "REPAIRED" : "REPAIRED";
        } else if (pecOk) {
          finalStatus = "ALREADY_CORRECT";
        } else if (blockMatch?.status === "APPLIED") {
          finalStatus = valuesEqual(actual, repairMatch.pec) ? "REPAIRED" : "CURRENT_VALUE_MISMATCH";
        } else {
          finalStatus = "CURRENT_VALUE_MISMATCH";
        }
      }
    }

    statusCounts[finalStatus]++;
    reconciliation.push({
      findingId: f.findingId,
      cardId: f.cardId,
      field: f.field,
      finalStatus,
      repairBlock: repairMatch?.block || null,
      repairN: repairMatch?.n || null,
      blockReportStatus: blockMatch?.status || null,
      proposedCs: f.proposedCs || repairMatch?.pec || null,
    });
  }

  const duplicateRepairTargets = [];
  for (const [key, list] of repairByKey) {
    if (list.length > 1) duplicateRepairTargets.push({ key, count: list.length, items: list.map((x) => x.n) });
  }

  return { reconciliation, statusCounts, duplicateRepairTargets };
}

function verifyRepairIntegrity(repairs, cs) {
  const retained = [];
  const missing = [];
  const pirmdStillPresent = [];
  for (const r of repairs) {
    const idx = findCardIndex(r.cardId);
    if (idx < 0) {
      missing.push({ ...r, reason: "card not found" });
      continue;
    }
    const actual = getFieldValue(cs[idx], r.field);
    const pecOk = valuesEqual(actual, r.pec);
    const pirmdStill = valuesEqual(actual, r.pirmd);
    if (pecOk) retained.push({ ...r, actual: serializeValue(actual) });
    else missing.push({ ...r, actual: serializeValue(actual), expected: serializeValue(r.pec) });
    if (pirmdStill && !pecOk) pirmdStillPresent.push({ ...r, actual: serializeValue(actual) });
  }
  return { expectedCount: repairs.length, retained, missing, pirmdStillPresent };
}

function verifyOwnerOverride(cs) {
  const idx = findCardIndex("a1-in");
  const val = getFieldValue(cs[idx], "study.sectionAccents.examples[0].lv.purple[0]");
  return {
    cardId: "a1-in",
    field: "study.sectionAccents.examples[0].lv.purple[0]",
    expected: "Berlīnē",
    actual: val,
    pass: val === "Berlīnē",
  };
}

function loadBaselineCs() {
  const tmp = path.join(ROOT, ".tmp-cs-a1-pre-high-repair.js");
  if (!fs.existsSync(tmp)) {
    execSync(`git show ${BASELINE_COMMIT}:data/cs/a1.js > "${tmp}"`, { cwd: ROOT });
  }
  return loadArray(".tmp-cs-a1-pre-high-repair.js", "A1_WORDS");
}

function collectCsLeafPaths(entry, prefix = "") {
  const paths = [];
  function walk(obj, p, inDe = false) {
    if (obj == null) return;
    if (typeof obj === "string") {
      if (!inDe) paths.push({ path: p, value: obj });
      return;
    }
    if (Array.isArray(obj)) {
      obj.forEach((v, i) => walk(v, `${p}[${i}]`, inDe));
      return;
    }
    if (typeof obj === "object") {
      for (const [k, v] of Object.entries(obj)) {
        const de = inDe || k === "de" || k === "de_article" || k === "de_plural";
        walk(v, p ? `${p}.${k}` : k, de);
      }
    }
  }
  walk(entry, prefix);
  return paths;
}

function unexpectedChangeAudit(before, after, repairs) {
  const expectedKeys = new Set(
    repairs.map((r) => `${r.cardId}::${normalizeField(r.field)}`)
  );
  const changed = [];
  const unexpected = [];
  const missingExpected = [];

  for (let i = 0; i < after.length; i++) {
    const cid = entryId(after[i], i, "a1");
    const beforePaths = collectCsLeafPaths(before[i]);
    const afterPaths = collectCsLeafPaths(after[i]);
    const bMap = new Map(beforePaths.map((x) => [x.path, x.value]));
    const aMap = new Map(afterPaths.map((x) => [x.path, x.value]));
    const allPaths = new Set([...bMap.keys(), ...aMap.keys()]);
    for (const p of allPaths) {
      const bv = bMap.get(p);
      const av = aMap.get(p);
      if (bv !== av) {
        const fullPath = p === "lv" ? "lv" : p;
        const fieldGuess = fullPath.startsWith("study.") ? fullPath : (fullPath === "lv" ? "lv" : fullPath);
        const key = `${cid}::${normalizeField(fieldGuess)}`;
        const item = { cardId: cid, path: fullPath, before: bv, after: av };
        changed.push(item);
        const matched = [...expectedKeys].some((ek) => {
          const [ec, ef] = ek.split("::");
          return ec === cid && (fieldsCompatible(ef, fieldGuess) || fullPath.includes(ef.replace("study.", "")));
        });
        if (!matched) unexpected.push(item);
      }
    }
  }

  for (const ek of expectedKeys) {
    const [cid, field] = ek.split("::");
    const idx = after.findIndex((e, i) => entryId(e, i, "a1") === cid);
    if (idx < 0) continue;
    const actual = getFieldValue(after[idx], field);
    const repair = repairs.find((r) => r.cardId === cid && normalizeField(r.field) === field);
    if (repair && !valuesEqual(actual, repair.pec)) {
      const hadChange = changed.some((c) => c.cardId === cid);
      if (!hadChange) missingExpected.push({ cardId: cid, field, pec: repair.pec, actual: serializeValue(actual) });
    }
  }

  return {
    expectedChangedFields: expectedKeys.size,
    actualChangedFields: changed.length,
    unexpectedChangedFields: unexpected.length,
    missingExpectedChanges: missingExpected.length,
    unexpected,
    changed,
    missingExpected,
  };
}

function verifyDeReadOnly(before, after) {
  let deChanges = 0;
  const details = [];
  for (let i = 0; i < after.length; i++) {
    for (const f of ["de", "de_article", "de_plural", "level"]) {
      if (before[i]?.[f] !== after[i]?.[f]) {
        deChanges++;
        details.push({ index: i, cardId: entryId(after[i], i, "a1"), field: f });
      }
    }
    const bDe = [];
    const aDe = [];
    if (before[i]?.study) collectDeStrings(before[i].study, bDe);
    if (after[i]?.study) collectDeStrings(after[i].study, aDe);
    if (JSON.stringify(bDe) !== JSON.stringify(aDe)) {
      deChanges++;
      details.push({ index: i, cardId: entryId(after[i], i, "a1"), field: "study.de_strings" });
    }
  }
  return { deChanges, details };
}

function verifyTechnical(csPath, wwwPath, before, after) {
  const cs = loadArray("data/cs/a1.js", "A1_WORDS");
  const lv = loadArray("data/a1.js", "A1_WORDS");
  let orderMismatch = 0;
  for (let i = 0; i < lv.length; i++) {
    if (lv[i].de !== cs[i].de) orderMismatch++;
  }
  const ids = cs.map((e, i) => entryId(e, i, "a1"));
  const dup = ids.length - new Set(ids).size;

  let syntax = "PASS";
  try {
    const code = fs.readFileSync(csPath, "utf8");
    const ctx = { window: {} };
    vm.createContext(ctx);
    vm.runInContext(code, ctx);
    if (!ctx.window.A1_WORDS || ctx.window.A1_WORDS.length !== 702) syntax = "FAIL";
  } catch {
    syntax = "FAIL";
  }

  const mirror = fs.readFileSync(csPath).equals(fs.readFileSync(wwwPath));

  let studyCreated = 0;
  let studyDeleted = 0;
  for (let i = 0; i < after.length; i++) {
    const had = Boolean(before[i]?.study);
    const has = Boolean(after[i]?.study);
    if (!had && has) studyCreated++;
    if (had && !has) studyDeleted++;
  }

  return {
    cards: cs.length,
    idUniqueness: dup === 0 ? "PASS" : "FAIL",
    idOrder: orderMismatch === 0 ? "PASS" : "FAIL",
    syntax,
    mirror: mirror ? "PASS" : "FAIL",
    studyCreated,
    studyDeleted,
  };
}

function verifyNeedsOwnerReviewUnchanged(before, after) {
  const validation = JSON.parse(fs.readFileSync(VALIDATION_JSON, "utf8"));
  const nor = validation.validations.filter((v) => v.validationStatus === "NEEDS_OWNER_REVIEW");
  const unauthorized = [];
  for (const f of nor) {
    const idx = after.findIndex((e, i) => entryId(e, i, "a1") === f.cardId);
    if (idx < 0) continue;
    if (f.field === "structure") {
      const bStudy = Boolean(before[idx]?.study);
      const aStudy = Boolean(after[idx]?.study);
      if (bStudy !== aStudy) unauthorized.push({ ...f, change: "study structure" });
      continue;
    }
    const bv = getFieldValue(before[idx], f.field);
    const av = getFieldValue(after[idx], f.field);
    if (serializeValue(bv) !== serializeValue(av)) {
      unauthorized.push({ ...f, before: serializeValue(bv), after: serializeValue(av) });
    }
  }
  return { count: nor.length, unauthorized };
}

function verifyStructuralGapUnchanged(before, after) {
  const changes = [];
  for (const cardId of STRUCTURAL_GAP_CARDS) {
    const idx = after.findIndex((e, i) => entryId(e, i, "a1") === cardId);
    if (idx < 0) continue;
    const bStudy = Boolean(before[idx]?.study);
    const aStudy = Boolean(after[idx]?.study);
    if (bStudy !== aStudy) changes.push({ cardId, before: bStudy, after: aStudy });
  }
  return { changes };
}

function buildLunaCard(cardId, repairs) {
  const lv = loadArray("data/a1.js", "A1_WORDS");
  const cs = loadArray("data/cs/a1.js", "A1_WORDS");
  const idx = findCardIndex(cardId);
  if (idx < 0) return { cardId, error: "not found" };

  const cardRepairs = repairs.filter((r) => r.cardId === cardId);
  const lvE = lv[idx];
  const csE = cs[idx];
  const payload = csE.study
    ? buildStudyCard(lvE, csE, idx, "a1")
    : buildSimpleCard(lvE, csE, idx, "a1");

  return {
    cardId,
    index: idx,
    de: csE.de,
    auditType: SPECIAL_FOCUS_CARDS.includes(cardId) ? "owner_corrected_focus" : "high_repair_changed_card",
    csMain: csE.lv,
    repairedFields: cardRepairs.map((r) => ({
      block: r.block,
      n: r.n,
      field: r.field,
      pirmd: r.pirmd,
      pec: r.pec,
    })),
    fullCard: payload,
    study: csE.study || null,
  };
}

async function runLunaAudit(cardIds, repairs) {
  fs.mkdirSync(TEMP_DIR, { recursive: true });
  const stats = { requestCount: 0, totalTokens: 0, model: DEFAULT_MODEL };
  const batches = chunk(cardIds, 4);
  const allResults = [];

  for (let i = 0; i < batches.length; i++) {
    const cards = batches[i].map((id) => buildLunaCard(id, repairs));
    let results;
    for (let attempt = 1; attempt <= 3; attempt++) {
      try {
        results = await auditHighMicroRegressionBatch(cards, stats, `batch-${i + 1}/${batches.length}`);
        break;
      } catch (e) {
        if (attempt >= 3) throw e;
        await new Promise((r) => setTimeout(r, 2500 * attempt));
      }
    }
    const batchFile = path.join(TEMP_DIR, `batch-${String(i + 1).padStart(2, "0")}.json`);
    fs.writeFileSync(batchFile, JSON.stringify({ cards, results, completedAt: new Date().toISOString() }, null, 2));
    allResults.push(...results);
  }
  return { results: allResults, stats };
}

function classifyLunaResults(results) {
  const counts = {
    CONFIRMED_REPAIR_REGRESSION: 0,
    PRE_EXISTING_NOT_CAUSED_BY_HIGH_REPAIR: 0,
    FALSE_POSITIVE: 0,
    DE_SOURCE_ISSUE: 0,
    NEEDS_OWNER_REVIEW: 0,
    STALE: 0,
  };
  const regressions = [];
  const allFindings = [];

  for (const r of results) {
    const st = String(r.validationStatus || "STALE").toUpperCase();
    if (counts[st] !== undefined) counts[st]++;
    else counts.STALE++;
    if (Array.isArray(r.findings)) {
      for (const f of r.findings) {
        const fs = String(f.validationStatus || st).toUpperCase();
        allFindings.push({ cardId: r.cardId, ...f });
        if (counts[fs] !== undefined) counts[fs]++;
        if (fs === "CONFIRMED_REPAIR_REGRESSION") regressions.push({ cardId: r.cardId, ...f });
      }
    }
    if (st === "CONFIRMED_REPAIR_REGRESSION") regressions.push(r);
  }
  return { counts, regressions, allFindings };
}

function writeReport(data) {
  const c = data.coverage.statusCounts;
  const accounted = data.coverage.reconciliation.length;
  const unresolvedMismatch = c.CURRENT_VALUE_MISMATCH + c.MISSING_FROM_REPAIR_SCOPE;

  const pass =
    data.coverage.confirmedInput === 287
    && accounted === 287
    && c.OWNER_OVERRIDE_FALSE_POSITIVE === 1
    && c.MISSING_FROM_REPAIR_SCOPE === 0
    && data.coverage.duplicateRepairTargets.length === 0
    && unresolvedMismatch === 0
    && data.ownerOverride.pass
    && data.repairIntegrity.missing.length === 0
    && data.lunaRegressions.length === 0
    && data.needsOwnerReview.unauthorized.length === 0
    && data.structuralGap.changes.length === 0
    && data.deReadOnly.deChanges === 0
    && data.unexpected.unexpectedChangedFields === 0
    && data.technical.syntax === "PASS"
    && data.technical.idOrder === "PASS"
    && data.technical.mirror === "PASS"
    && data.technical.studyCreated === 0
    && data.technical.studyDeleted === 0;

  const closure = pass ? "CS–DE A1 HIGH = CLOSED" : "CS–DE A1 HIGH = NOT CLOSED";

  const md = `# CS–DE A1 HIGH POST-REPAIR AUDIT

## KOPSAVILKUMS

- Audit type: HIGH POST-REPAIR GALA VALIDATION / MICRO-REGRESSION (read-only)
- Model: GPT-5.6 Luna
- Baseline: \`${BASELINE_COMMIT}\` (pirms HIGH repair block 1)
- Production changes šajā auditā: **0**
- **${closure}**

## HIGH COVERAGE

| Metrika | Vērtība |
|---|---|
| original raw HIGH | 371 |
| original CONFIRMED_REAL | ${data.coverage.confirmedInput} |
| repair-targeted (REPAIRED + ALREADY_CORRECT) | ${c.REPAIRED + c.ALREADY_CORRECT} |
| OWNER override | ${c.OWNER_OVERRIDE_FALSE_POSITIVE} |
| accounted | ${accounted}/${data.coverage.confirmedInput} |
| missing | ${c.MISSING_FROM_REPAIR_SCOPE} |
| duplicate repair applications | ${data.coverage.duplicateRepairTargets.length} |
| unresolved mismatches | ${unresolvedMismatch} |

### Reconciliation breakdown

| Gala statuss | Skaits |
|---|---|
| REPAIRED | ${c.REPAIRED} |
| ALREADY_CORRECT | ${c.ALREADY_CORRECT} |
| OWNER_OVERRIDE_FALSE_POSITIVE | ${c.OWNER_OVERRIDE_FALSE_POSITIVE} |
| CURRENT_VALUE_MISMATCH | ${c.CURRENT_VALUE_MISMATCH} |
| MISSING_FROM_REPAIR_SCOPE | ${c.MISSING_FROM_REPAIR_SCOPE} |

${data.coverage.reconciliation.filter((r) => r.finalStatus === "CURRENT_VALUE_MISMATCH" || r.finalStatus === "MISSING_FROM_REPAIR_SCOPE").length ? `### Bloķējošie / neatrisinātie

${data.coverage.reconciliation.filter((r) => r.finalStatus === "CURRENT_VALUE_MISMATCH" || r.finalStatus === "MISSING_FROM_REPAIR_SCOPE").map((r) => `- ${r.findingId} \`${r.cardId}\` \`${r.field}\` → **${r.finalStatus}** (block ${r.repairBlock || "—"}, report: ${r.blockReportStatus || "—"})`).join("\n")}
` : ""}

## REPAIR EXECUTION

| Metrika | Vērtība |
|---|---|
| expected repair fields (blocks 1–6) | ${data.repairIntegrity.expectedCount} |
| retained correct PĒC values | ${data.repairIntegrity.retained.length}/${data.repairIntegrity.expectedCount} |
| missing/wrong PĒC | ${data.repairIntegrity.missing.length} |
| PIRMS still present (wrong) | ${data.repairIntegrity.pirmdStillPresent.length} |
| unexpected changed fields | ${data.unexpected.unexpectedChangedFields} |
| missing expected changes | ${data.unexpected.missingExpectedChanges} |

${data.repairIntegrity.missing.length ? `### Missing PĒC

${data.repairIntegrity.missing.slice(0, 20).map((m) => `- block ${m.block} #${m.n} \`${m.cardId}\` \`${m.field}\`: got ${JSON.stringify(m.actual)}`).join("\n")}
` : ""}

## LUNA MICRO-REGRESSION

| Metrika | Vērtība |
|---|---|
| changed cards audited | ${data.changedCardsAudited}/${data.changedCardCount} |
| CONFIRMED_REPAIR_REGRESSION | ${data.lunaCounts.CONFIRMED_REPAIR_REGRESSION} |
| PRE_EXISTING_NOT_CAUSED_BY_HIGH_REPAIR | ${data.lunaCounts.PRE_EXISTING_NOT_CAUSED_BY_HIGH_REPAIR} |
| FALSE_POSITIVE | ${data.lunaCounts.FALSE_POSITIVE} |
| DE_SOURCE_ISSUE | ${data.lunaCounts.DE_SOURCE_ISSUE} |
| NEEDS_OWNER_REVIEW | ${data.lunaCounts.NEEDS_OWNER_REVIEW} |

${data.lunaRegressions.length ? `### CONFIRMED_REPAIR_REGRESSION

${data.lunaRegressions.map((f) => `- **${f.cardId}** \`${f.field || "card"}\`: ${f.reason || "—"}`).join("\n")}
` : "_Nav CONFIRMED_REPAIR_REGRESSION._\n"}

## OWNER PROTECTION

| Check | Result |
|---|---|
| a1-in / Berlīnē | ${data.ownerOverride.pass ? "PASS" : "FAIL"} (actual: ${JSON.stringify(data.ownerOverride.actual)}) |
| unauthorized changes to 7 NEEDS_OWNER_REVIEW | ${data.needsOwnerReview.unauthorized.length} |
| unauthorized structural-gap repairs | ${data.structuralGap.changes.length} |

## INTEGRITY

| Check | Result |
|---|---|
| DE changes | ${data.deReadOnly.deChanges} |
| cards | ${data.technical.cards} |
| ID/order | ${data.technical.idOrder} |
| syntax | ${data.technical.syntax} |
| mirror | ${data.technical.mirror} |
| unexpected production changes | ${data.unexpected.unexpectedChangedFields} |
| study created | ${data.technical.studyCreated} |
| study deleted | ${data.technical.studyDeleted} |

## PASS CRITERIA

| Kritērijs | Rezultāts |
|---|---|
| 287/287 CONFIRMED_REAL accounted | ${accounted === 287 ? "PASS" : "FAIL"} |
| missing = 0 | ${c.MISSING_FROM_REPAIR_SCOPE === 0 ? "PASS" : "FAIL"} |
| duplicate repair application = 0 | ${data.coverage.duplicateRepairTargets.length === 0 ? "PASS" : "FAIL"} |
| unresolved CURRENT_VALUE_MISMATCH = 0 | ${unresolvedMismatch === 0 ? "PASS" : "FAIL"} |
| OWNER override Berlīnē = PASS | ${data.ownerOverride.pass ? "PASS" : "FAIL"} |
| CONFIRMED_REPAIR_REGRESSION = 0 | ${data.lunaRegressions.length === 0 ? "PASS" : "FAIL"} |
| DE changes = 0 | ${data.deReadOnly.deChanges === 0 ? "PASS" : "FAIL"} |
| unexpected changes = 0 | ${data.unexpected.unexpectedChangedFields === 0 ? "PASS" : "FAIL"} |
| syntax / ID/order / mirror = PASS | ${data.technical.syntax === "PASS" && data.technical.idOrder === "PASS" && data.technical.mirror === "PASS" ? "PASS" : "FAIL"} |

---

_Audita datums: ${new Date().toISOString().slice(0, 10)}_
_Luna requests: ${data.stats.requestCount}, tokens: ${data.stats.totalTokens}_
`;

  fs.mkdirSync(path.dirname(OUT_MD), { recursive: true });
  fs.writeFileSync(OUT_MD, md);
  fs.writeFileSync(OUT_JSON, JSON.stringify({ ...data, closure, productionChanges: 0 }, null, 2));
  console.log(`Wrote ${OUT_MD}`);
  console.log(`Wrote ${OUT_JSON}`);
  console.log(`\n${closure}`);
}

async function main() {
  console.log("CS-DE A1 HIGH POST-REPAIR AUDIT");
  console.log(`Baseline: ${BASELINE_COMMIT}`);

  const repairs = loadAllRepairs();
  const blockReports = loadBlockReports();
  const { all: confirmed, statusCounts: origCounts } = loadConfirmedReal();
  const cs = loadArray("data/cs/a1.js", "A1_WORDS");
  const before = loadBaselineCs();

  const coverage = reconcileCoverage(confirmed, repairs, blockReports, cs);
  coverage.confirmedInput = confirmed.length;
  coverage.originalStatusCounts = origCounts;

  const repairIntegrity = verifyRepairIntegrity(repairs, cs);
  const ownerOverride = verifyOwnerOverride(cs);
  const deReadOnly = verifyDeReadOnly(before, cs);
  const unexpected = unexpectedChangeAudit(before, cs, repairs);
  const technical = verifyTechnical(
    path.join(ROOT, "data/cs/a1.js"),
    path.join(ROOT, "www/data/cs/a1.js"),
    before,
    cs
  );
  const needsOwnerReview = verifyNeedsOwnerReviewUnchanged(before, cs);
  const structuralGap = verifyStructuralGapUnchanged(before, cs);

  const changedCardIds = [...new Set(repairs.map((r) => r.cardId))];
  for (const id of SPECIAL_FOCUS_CARDS) {
    if (!changedCardIds.includes(id)) changedCardIds.push(id);
  }

  console.log(`\nLuna micro-regression: ${changedCardIds.length} changed cards`);
  const { results, stats } = await runLunaAudit(changedCardIds, repairs);
  const { counts: lunaCounts, regressions: lunaRegressions } = classifyLunaResults(results);

  writeReport({
    coverage,
    repairIntegrity,
    ownerOverride,
    deReadOnly,
    unexpected,
    technical,
    needsOwnerReview,
    structuralGap,
    lunaCounts,
    lunaRegressions,
    results,
    stats,
    changedCardCount: changedCardIds.length,
    changedCardsAudited: results.length,
    repairs,
    blockReports,
  });
}

if (require.main === module) {
  main().catch((e) => {
    console.error("HIGH post-repair audit failed:", e.message);
    process.exit(1);
  });
}
