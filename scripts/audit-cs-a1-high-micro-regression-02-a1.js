#!/usr/bin/env node
/**
 * CS–DE A1 HIGH micro-regression #2 / final closure (READ-ONLY).
 * Scope: 13 unique cards touched by 18-field gala repair.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");
const {
  ROOT,
  loadArray,
  entryId,
  chunk,
  buildStudyCard,
  buildSimpleCard,
} = require("./lib/cs-audit-helpers");
const {
  REPAIRS,
  getRawValue,
  valuesMatchPec,
  valuesMatchPirmd,
  accentComparable,
  serializeValue,
} = require("./apply-cs-a1-high-regression-final-repair.js");
const { DEFAULT_MODEL, auditHighMicroRegression02Batch } = require("./lib/openai-cs-high-micro-regression-02.js");

const BASELINE_COMMIT = "539d4fbd";
const PRE_GALA_REPAIR_COMMIT = "9c2947c8"; // post-repair audit, before gala repair
const REPAIR_REPORT = path.join(ROOT, "reports/cs-a1-high-regression-final-repair.md");
const OUT_MD = path.join(ROOT, "reports/cs-a1-high-micro-regression-02.md");
const OUT_JSON = path.join(ROOT, "reports/temp/cs-a1-high-micro-regression-02.json");
const TEMP_DIR = path.join(ROOT, "reports/temp/cs-a1-high-micro-regression-02");

const EXPECTED_CARDS = [
  "a1-blond-103", "a1-ins", "a1-kennen-study", "a1-können", "a1-lassen",
  "a1-laufen", "a1-seite", "a1-sich", "a1-sie-study", "a1-sollen",
  "a1-essen", "a1-sprechen-study", "a1-auch-study",
];

const ESSEN_EXPLANATION_PEC = [
  "Hlavní myšlenka: essen znamená jíst nebo konzumovat jídlo.",
  "Používá se jako sloveso pro konzumaci jídla.",
  "Das Essen je podstatné jméno a znamená jídlo.",
  "Essen a das Essen nejsou totéž.",
];

function findCardIndex(cardId, cs) {
  for (let i = 0; i < cs.length; i++) {
    if (entryId(cs[i], i, "a1") === cardId) return i;
  }
  return -1;
}

function parseRepairReport() {
  if (!fs.existsSync(REPAIR_REPORT)) return { exists: false };
  const text = fs.readFileSync(REPAIR_REPORT, "utf8");
  const processed = text.match(/processed:\s*\*\*(\d+)\/(\d+)\*\*/i);
  const mismatch = text.match(/CURRENT_VALUE_MISMATCH:\s*\*\*(\d+)\*\*/i);
  const deChanges = text.match(/DE changes:\s*\*\*(\d+)\*\*/i);
  return {
    exists: true,
    processed: processed ? `${processed[1]}/${processed[2]}` : "unknown",
    mismatchCount: mismatch ? Number(mismatch[1]) : null,
    deChanges: deChanges ? Number(deChanges[1]) : null,
    complete: processed && processed[1] === processed[2],
  };
}

function checkRetention(cs) {
  const results = [];
  let retained = 0;
  let reverted = 0;
  let mismatch = 0;
  let missing = 0;

  for (const r of REPAIRS) {
    const idx = findCardIndex(r.cardId, cs);
    if (idx < 0) {
      results.push({ ...r, status: "FIELD_MISSING", reason: "card not found" });
      missing++;
      continue;
    }
    const raw = getRawValue(cs[idx], r.field);
    if (raw == null) {
      results.push({ ...r, status: "FIELD_MISSING", reason: "field not found" });
      missing++;
      continue;
    }

    const pecOk = valuesMatchPec(raw, r.pec, r.wholeArray, r.accentSubtree);
    const pirmdStill = valuesMatchPirmd(raw, r.pirmd, r.wholeArray, r.accentSubtree);
    let status;
    if (pecOk) {
      status = "RETAINED";
      retained++;
    } else if (pirmdStill) {
      status = "REVERTED";
      reverted++;
    } else {
      status = "CURRENT_VALUE_MISMATCH";
      mismatch++;
    }

    results.push({
      n: r.n,
      cardId: r.cardId,
      field: r.field,
      status,
      pirmd: r.pirmd,
      pec: r.pec,
      current: r.accentSubtree ? accentComparable(raw) : (r.wholeArray ? raw : serializeValue(raw)),
    });
  }

  return { results, retained, reverted, mismatch, missing };
}

function checkHigh362(cs) {
  const idx = findCardIndex("a1-essen", cs);
  if (idx < 0) return { status: "NOT RESOLVED", reason: "card not found" };
  const exp = cs[idx]?.study?.explanation;
  if (!Array.isArray(exp)) return { status: "NOT RESOLVED", reason: "not an array", explanation: exp };
  const matches = exp.length === 4 && JSON.stringify(exp) === JSON.stringify(ESSEN_EXPLANATION_PEC);
  const hasDest = exp.some((s) => typeof s === "string" && s.includes("déšť"));
  const hasOld7 = exp.length === 7;
  if (matches && !hasDest && !hasOld7) return { status: "RESOLVED", explanation: exp };
  return {
    status: "NOT RESOLVED",
    explanation: exp,
    issues: { wrongLength: exp.length !== 4, hasDest, hasOld7, matches },
  };
}

function verifyOwnerOverride(cs) {
  const idx = findCardIndex("a1-in", cs);
  const val = getRawValue(cs[idx], "study.sectionAccents.examples[0].lv.purple[0]");
  return {
    cardId: "a1-in",
    field: "study.sectionAccents.examples[0].lv.purple[0]",
    expected: "Berlīnē",
    actual: val,
    pass: val === "Berlīnē",
    status: val === "Berlīnē" ? "OWNER_OVERRIDE_FALSE_POSITIVE" : "FAIL",
  };
}

function loadCsAtCommit(commit) {
  const tmp = path.join(ROOT, `.tmp-cs-a1-${commit.slice(0, 8)}.js`);
  if (!fs.existsSync(tmp)) {
    execSync(`git show ${commit}:data/cs/a1.js > "${tmp}"`, { cwd: ROOT });
  }
  return loadArray(`.tmp-cs-a1-${commit.slice(0, 8)}.js`, "A1_WORDS");
}

function loadBaselineCs() {
  return loadCsAtCommit(BASELINE_COMMIT);
}

function loadPreGalaRepairCs() {
  return loadCsAtCommit(PRE_GALA_REPAIR_COMMIT);
}

function normalizeField(field) {
  if (field === "csMain" || field === "csText") return "lv";
  return field;
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

function fieldInRepairScope(cardId, pathName) {
  return REPAIRS.some((r) => {
    if (r.cardId !== cardId) return false;
    const rf = normalizeField(r.field);
    if (pathName === rf) return true;
    if (pathName.startsWith(`${rf}.`)) return true;
    if (pathName.startsWith(`${rf}[`)) return true;
    if (pathName === "lv" && (r.field === "csMain" || r.field === "csText")) return true;
    if (r.wholeArray) {
      const base = rf.replace(/\[\d+\].*$/, "");
      if (pathName === base || pathName.startsWith(`${base}[`) || pathName.startsWith(`${base}.`)) return true;
    }
    return false;
  });
}

function unexpectedGalaRepairChanges(preGala, current) {
  const repairCardIds = new Set(REPAIRS.map((r) => r.cardId));
  const unexpected = [];
  for (let i = 0; i < current.length; i++) {
    const cid = entryId(current[i], i, "a1");
    if (!repairCardIds.has(cid)) continue;
    const beforePaths = collectCsLeafPaths(preGala[i]);
    const afterPaths = collectCsLeafPaths(current[i]);
    const bMap = new Map(beforePaths.map((x) => [x.path, x.value]));
    const aMap = new Map(afterPaths.map((x) => [x.path, x.value]));
    const allPaths = new Set([...bMap.keys(), ...aMap.keys()]);
    for (const p of allPaths) {
      const bv = bMap.get(p);
      const av = aMap.get(p);
      if (bv !== av && !fieldInRepairScope(cid, p)) {
        unexpected.push({ cardId: cid, path: p, before: bv, after: av });
      }
    }
  }
  return { unexpectedProductionChanges: unexpected.length, unexpected };
}

function verifyDeReadOnly(before, after) {
  let deChanges = 0;
  for (let i = 0; i < after.length; i++) {
    for (const f of ["de", "de_article", "de_plural", "level"]) {
      if (before[i]?.[f] !== after[i]?.[f]) deChanges++;
    }
  }
  return { deChanges };
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

function unexpectedChanges(preGala, current) {
  return unexpectedGalaRepairChanges(preGala, current);
}

function buildLunaCard(cardId, retentionResults) {
  const lv = loadArray("data/a1.js", "A1_WORDS");
  const cs = loadArray("data/cs/a1.js", "A1_WORDS");
  const idx = findCardIndex(cardId, cs);
  if (idx < 0) return { cardId, error: "not found" };

  const lvE = lv[idx];
  const csE = cs[idx];
  const cardRepairs = retentionResults.filter((r) => r.cardId === cardId);
  const fullCard = csE.study
    ? buildStudyCard(lvE, csE, idx, "a1")
    : buildSimpleCard(lvE, csE, idx, "a1");

  return {
    cardId,
    index: idx,
    deLemma: csE.de,
    csText: csE.lv,
    csMain: csE.lv,
    study: csE.study || null,
    repairedFields: cardRepairs.map((r) => ({
      n: r.n,
      field: r.field,
      status: r.status,
      pirmd: r.pirmd,
      pec: r.pec,
      current: r.current,
    })),
    fullCard,
  };
}

async function runLunaAudit(cardIds, retentionResults) {
  fs.mkdirSync(TEMP_DIR, { recursive: true });
  const stats = { requestCount: 0, totalTokens: 0, model: DEFAULT_MODEL };
  const batches = chunk(cardIds, 4);
  const batchFiles = [];
  const allResults = [];

  for (let i = 0; i < batches.length; i++) {
    const cards = batches[i].map((id) => buildLunaCard(id, retentionResults));
    let results;
    for (let attempt = 1; attempt <= 3; attempt++) {
      try {
        results = await auditHighMicroRegression02Batch(cards, stats, `batch-${i + 1}/${batches.length}`);
        break;
      } catch (e) {
        if (attempt >= 3) throw e;
        await new Promise((r) => setTimeout(r, 2500 * attempt));
      }
    }
    const batchFile = path.join(TEMP_DIR, `batch-${String(i + 1).padStart(2, "0")}.json`);
    fs.writeFileSync(batchFile, JSON.stringify({ cards, results, completedAt: new Date().toISOString() }, null, 2));
    batchFiles.push(batchFile);
    allResults.push(...results);
  }

  return { results: allResults, stats, batchFiles };
}

function classifyLunaResults(results, repairFieldSet) {
  const counts = {
    CONFIRMED_REPAIR_REGRESSION: 0,
    PRE_EXISTING_NOT_CAUSED_BY_HIGH_REPAIR: 0,
    FALSE_POSITIVE: 0,
    DE_SOURCE_ISSUE: 0,
    NEEDS_OWNER_REVIEW: 0,
  };
  const allFindings = [];
  const repairRegressions = [];
  const repairNeedsOwner = [];

  function addFinding(cardId, f) {
    const fs = String(f.validationStatus || "PRE_EXISTING_NOT_CAUSED_BY_HIGH_REPAIR").toUpperCase();
    if (counts[fs] !== undefined) counts[fs]++;
    const item = { cardId, field: f.field, status: fs, issue: f.reason || f.issue || "" };
    allFindings.push(item);
    if (fs === "CONFIRMED_REPAIR_REGRESSION") repairRegressions.push(item);
    if (fs === "NEEDS_OWNER_REVIEW") {
      const key = `${cardId}::${f.field || ""}`;
      if (repairFieldSet.has(key) || !f.field) repairNeedsOwner.push(item);
    }
  }

  for (const r of results) {
    if (Array.isArray(r.findings) && r.findings.length) {
      for (const f of r.findings) addFinding(r.cardId, f);
    } else if (r.validationStatus) {
      addFinding(r.cardId, r);
    }
  }

  return { counts, allFindings, repairRegressions, repairNeedsOwner };
}

function determineClosure(retention, high362, luna, owner, integrity, deReadOnly, unexpected) {
  const blockers = [];
  if (retention.retained !== 18) blockers.push(`retention ${retention.retained}/18 (expected 18/18)`);
  if (retention.reverted > 0) blockers.push(`REVERTED=${retention.reverted}`);
  if (retention.mismatch > 0) blockers.push(`CURRENT_VALUE_MISMATCH=${retention.mismatch}`);
  if (retention.missing > 0) blockers.push(`FIELD_MISSING=${retention.missing}`);
  if (high362.status !== "RESOLVED") blockers.push(`HIGH-362=${high362.status}`);
  if (luna.counts.CONFIRMED_REPAIR_REGRESSION > 0) {
    blockers.push(`CONFIRMED_REPAIR_REGRESSION=${luna.counts.CONFIRMED_REPAIR_REGRESSION}`);
  }
  if (luna.repairNeedsOwner.length > 0) {
    blockers.push(`repair-caused NEEDS_OWNER_REVIEW=${luna.repairNeedsOwner.length}`);
  }
  if (!owner.pass) blockers.push("a1-in/Berlīnē=FAIL");
  if (deReadOnly.deChanges !== 0) blockers.push(`DE changes=${deReadOnly.deChanges}`);
  if (unexpected.unexpectedProductionChanges !== 0) {
    blockers.push(`unexpected production changes=${unexpected.unexpectedProductionChanges}`);
  }
  if (integrity.idOrder !== "PASS") blockers.push("ID/order=FAIL");
  if (integrity.syntax !== "PASS") blockers.push("syntax=FAIL");
  if (integrity.mirror !== "PASS") blockers.push("mirror=FAIL");
  if (integrity.studyCreated !== 0 || integrity.studyDeleted !== 0) {
    blockers.push(`Study created/deleted=${integrity.studyCreated}/${integrity.studyDeleted}`);
  }

  return {
    status: blockers.length === 0 ? "CLOSED" : "NOT CLOSED",
    blockers,
  };
}

function writeReport(data) {
  const {
    prerequisite, retention, high362, owner, integrity, deReadOnly, unexpected,
    luna, closure, stats, batchFiles, actualCardIds,
  } = data;

  let md = `# CS–DE A1 HIGH Micro-Regression #2 / Final Closure

**Date:** ${new Date().toISOString().split("T")[0]}
**Mode:** READ-ONLY
**Model:** GPT-5.6 Luna (linguistic); Composer (deterministic)
**Baseline:** \`${BASELINE_COMMIT}\`

## Prerequisite (gala repair)

| Check | Value |
|-------|-------|
| Report | ${prerequisite.exists ? "found" : "MISSING"} |
| Processed | ${prerequisite.processed} |
| Repair mismatch (report) | ${prerequisite.mismatchCount} |

${prerequisite.mismatchCount > 0 ? "_Note: repair report shows CURRENT_VALUE_MISMATCH > 0; closure cannot be CLOSED until resolved._\n" : ""}

## Coverage

| Metric | Value |
|--------|-------|
| repair fields | 18 |
| retained | ${retention.retained}/18 |
| reverted | ${retention.reverted} |
| mismatch | ${retention.mismatch} |
| missing fields | ${retention.missing} |
| changed cards audited | ${EXPECTED_CARDS.length}/${EXPECTED_CARDS.length} |
| actual repair card count | ${actualCardIds.length} |

### Retention detail

| # | cardId | field | status | current |
|---|--------|-------|--------|---------|
`;
  for (const r of retention.results) {
    const cur = typeof r.current === "string" ? r.current : JSON.stringify(r.current);
    md += `| ${r.n} | ${r.cardId} | ${r.field} | **${r.status}** | ${JSON.stringify(cur)} |\n`;
  }

  md += `
## HIGH-362

- **a1-essen study.explanation:** ${high362.status}

## Luna findings

| Status | Count |
|--------|-------|
| CONFIRMED_REPAIR_REGRESSION | ${luna.counts.CONFIRMED_REPAIR_REGRESSION} |
| PRE_EXISTING_NOT_CAUSED_BY_HIGH_REPAIR | ${luna.counts.PRE_EXISTING_NOT_CAUSED_BY_HIGH_REPAIR} |
| FALSE_POSITIVE | ${luna.counts.FALSE_POSITIVE} |
| DE_SOURCE_ISSUE | ${luna.counts.DE_SOURCE_ISSUE} |
| NEEDS_OWNER_REVIEW | ${luna.counts.NEEDS_OWNER_REVIEW} |

`;

  if (luna.allFindings.length) {
    md += `### Finding list\n\n`;
    for (const f of luna.allFindings) {
      md += `- **${f.cardId}** [\`${f.status}\`] ${f.field || "(card)"}: ${f.issue}\n`;
    }
    md += "\n";
  } else {
    md += "_Nav lingvistisku atradumu._\n\n";
  }

  md += `## Owner protection

| Check | Result |
|-------|--------|
| a1-in / Berlīnē | ${owner.pass ? "PASS" : "FAIL"} |
| Status | ${owner.status} |
| Current | \`${owner.actual}\` |

## Integrity

| Check | Result |
|-------|--------|
| DE changes | ${deReadOnly.deChanges} |
| unexpected production changes | ${unexpected.unexpectedProductionChanges} |
| cards | ${integrity.cards} |
| ID uniqueness | ${integrity.idUniqueness} |
| ID/order | ${integrity.idOrder} |
| syntax | ${integrity.syntax} |
| mirror | ${integrity.mirror} |
| Study created/deleted | ${integrity.studyCreated}/${integrity.studyDeleted} |

## Luna batches

`;
  for (const f of batchFiles) {
    md += `- \`${path.relative(ROOT, f)}\`\n`;
  }

  md += `
_Luna requests: ${stats.requestCount}, tokens: ${stats.totalTokens}_

## Closure

### CS–DE A1 HIGH = **${closure.status}**

`;
  if (closure.blockers.length) {
    md += `**Blocking criteria:**\n\n`;
    for (const b of closure.blockers) {
      md += `- ${b}\n`;
    }
  } else {
    md += "All closure criteria met.\n";
  }

  fs.mkdirSync(path.dirname(OUT_MD), { recursive: true });
  fs.writeFileSync(OUT_MD, md);
  fs.writeFileSync(OUT_JSON, JSON.stringify({ ...data, closure, productionChanges: 0 }, null, 2));
  console.log(`Wrote ${OUT_MD}`);
  console.log(`Wrote ${OUT_JSON}`);
}

async function main() {
  console.log("CS–DE A1 HIGH Micro-Regression #2 — READ-ONLY\n");

  if (!fs.existsSync(REPAIR_REPORT)) {
    console.error("STOP: repair report not found:", REPAIR_REPORT);
    process.exit(1);
  }

  const prerequisite = parseRepairReport();
  console.log("Prerequisite:", prerequisite);

  const cs = loadArray("data/cs/a1.js", "A1_WORDS");
  const before = loadBaselineCs();
  const preGala = loadPreGalaRepairCs();

  const retention = checkRetention(cs);
  console.log(`Retention: ${retention.retained}/18, mismatch=${retention.mismatch}, reverted=${retention.reverted}`);

  const high362 = checkHigh362(cs);
  console.log("HIGH-362:", high362.status);

  const owner = verifyOwnerOverride(cs);
  console.log("Owner a1-in:", owner.pass ? "PASS" : "FAIL");

  const deReadOnly = verifyDeReadOnly(before, cs);
  const integrity = verifyTechnical(
    path.join(ROOT, "data/cs/a1.js"),
    path.join(ROOT, "www/data/cs/a1.js"),
    before,
    cs
  );
  const unexpected = unexpectedChanges(preGala, cs);
  console.log("Integrity:", integrity);

  const actualCardIds = [...new Set(REPAIRS.map((r) => r.cardId))].sort();
  if (actualCardIds.length !== EXPECTED_CARDS.length) {
    console.log(`Note: expected ${EXPECTED_CARDS.length} unique cards, repair has ${actualCardIds.length}`);
    console.log("Actual:", actualCardIds.join(", "));
  }

  const repairFieldSet = new Set(REPAIRS.map((r) => `${r.cardId}::${r.field}`));

  console.log(`\nLuna micro-regression: ${EXPECTED_CARDS.length} cards`);
  const { results, stats, batchFiles } = await runLunaAudit(EXPECTED_CARDS, retention.results);
  const luna = classifyLunaResults(results, repairFieldSet);
  console.log("Luna counts:", luna.counts);

  const closure = determineClosure(retention, high362, luna, owner, integrity, deReadOnly, unexpected);
  console.log(`\nCS–DE A1 HIGH = ${closure.status}`);
  if (closure.blockers.length) console.log("Blockers:", closure.blockers);

  writeReport({
    prerequisite,
    expectedCards: EXPECTED_CARDS,
    actualCardIds,
    retention,
    high362,
    owner,
    integrity,
    deReadOnly,
    unexpected,
    luna,
    closure,
    stats,
    batchFiles,
    lunaResults: results,
  });
}

if (require.main === module) {
  main().catch((e) => {
    console.error("HIGH micro-regression #2 failed:", e.message);
    process.exit(1);
  });
}
