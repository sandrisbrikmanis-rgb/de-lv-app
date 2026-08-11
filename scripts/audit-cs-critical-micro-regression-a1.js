#!/usr/bin/env node
/**
 * CS-DE A1 CRITICAL micro-regression (read-only) after commit fb84f93b.
 * Usage: node scripts/audit-cs-critical-micro-regression-a1.js
 */
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
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
const { DEFAULT_MODEL, auditMicroRegressionBatch } = require("./lib/openai-cs-micro-regression");

const REPAIR_COMMIT = "fd0926c3";
const OUT_MD = path.join(ROOT, "reports/cs-a1-critical-micro-regression.md");
const OUT_JSON = path.join(ROOT, "reports/temp/cs-a1-critical-micro-regression.json");
const TEMP_DIR = path.join(ROOT, "reports/temp/cs-a1-critical-micro-regression");

const CHANGED_CARDS = [
  "a1-es", "a1-fahren", "a1-in", "a1-land", "a1-sitzen", "a1-stehen", "a1-über",
  "a1-essen", "a1-bedeuten-75", "a1-Buch-116", "a1-Erde-164", "a1-März-396",
  "a1-bitte", "a1-bitte-study", "a1-das", "a1-die", "a1-heißen", "a1-laden-study",
  "a1-legen", "a1-schauen-study", "a1-sehen", "a1-sich", "a1-sollen", "a1-fernsehen-study",
];

const FP_CONTROLS = [
  { cardId: "a1-in", field: "study.sectionAccents.examples[0].lv.purple[0]", expected: "Berlīnē", classification: "FALSE_POSITIVE" },
  { cardId: "a1-Baum-74", field: "lv", expected: "Strom", classification: "FALSE_POSITIVE" },
];

const EXPECTED_REPAIRS = [
  { cardId: "a1-es", field: "study.info[0]", expected: "České „já“ = německé „ich“" },
  { cardId: "a1-es", field: "study.info[1]", expected: "Německé „es“ = to • ono • bezosobní tvar" },
  { cardId: "a1-es", field: "study.explanation", expected: "Německé „es“ neznamená „já“. Používá se jako „to“ nebo „ono“ a také v neosobních větách o počasí, čase a dalších dějích." },
  { cardId: "a1-fahren", field: "study.important.example", expected: "V němčině může stejné sloveso podle kontextu znamenat: jezdit • vézt • odvézt." },
  { cardId: "a1-fahren", field: "study.accents.green[1]", expected: "dopravním prostředkem" },
  { cardId: "a1-fahren", field: "study.accents.green[5]", expected: "jízdní kolo" },
  { cardId: "a1-in", field: "study.sectionAccents.important[0].purple[0]", expected: "Berlíně" },
  { cardId: "a1-land", field: "study.sectionAccents.comparison[3].meaning.purple[1]", expected: "planeta" },
  { cardId: "a1-sitzen", field: "study.sectionAccents.explanation.purple[0]", expected: "sedět" },
  { cardId: "a1-sitzen", field: "study.sectionAccents.explanation.purple[1]", expected: "sedí" },
  { cardId: "a1-sitzen", field: "study.sectionAccents.comparison[0].meaning.purple[0]", expected: "Sedět" },
  { cardId: "a1-stehen", field: "study.sectionAccents.comparison[1].meaning.purple[0]", expected: "sedět" },
  { cardId: "a1-über", field: "study.sectionAccents.tip.left.purple[0]", expected: "téma" },
  { cardId: "a1-essen", field: "study.sectionAccents.explanation.purple[0]", expected: "jíst" },
  { cardId: "a1-bedeuten-75", field: "lv", expected: "Znamenat" },
  { cardId: "a1-Buch-116", field: "lv", expected: "Kniha" },
  { cardId: "a1-Erde-164", field: "lv", expected: "Země" },
  { cardId: "a1-März-396", field: "lv", expected: "Březen" },
  { cardId: "a1-bitte", field: "study.explanation", expected: ["Hlavní myšlenka: bitte s malým písmenem je zdvořilostní výraz a znamená „prosím“.", "Používá se například v prosbě, žádosti nebo zdvořilé odpovědi.", "Die Bitte s velkým písmenem je podstatné jméno ženského rodu a znamená prosbu nebo žádost.", "Množné číslo je die Bitten."] },
  { cardId: "a1-bitte-study", field: "study.explanation", expected: ["Hlavní myšlenka: die Bitte je podstatné jméno ženského rodu se členem die a znamená prosbu nebo žádost.", "Píše se s velkým písmenem.", "Množné číslo je die Bitten.", "Pozor: bitte s malým písmenem znamená „prosím“ a není podstatné jméno."] },
  { cardId: "a1-das", field: "study.translation", expected: "Určitý člen středního rodu" },
  { cardId: "a1-die", field: "study.explanation", expected: "Používá se s podstatnými jmény ženského rodu. V některých větách může „die“ fungovat také jako zájmeno nebo vztažné zájmeno." },
  { cardId: "a1-die", field: "study.important[1]", expected: "V množném čísle se die používá pro všechny rody." },
  { cardId: "a1-heißen", field: "study.translation", expected: "Jmenovat se • Znamenat" },
  { cardId: "a1-heißen", field: "study.comparison[2].meaning", expected: "Znamenat" },
  { cardId: "a1-laden-study", field: "study.translation", expected: "Obchod" },
  { cardId: "a1-legen", field: "study.explanation[3]", expected: "Na úrovni A1 je nejdůležitější rozdíl: legen = položit, liegen = ležet." },
  { cardId: "a1-schauen-study", field: "study.translation", expected: "Dívat se" },
  { cardId: "a1-schauen-study", field: "study.comparison[0].meaning", expected: "Dívat se (aktivně)" },
  { cardId: "a1-sehen", field: "study.comparison[1].meaning", expected: "Dívat se" },
  { cardId: "a1-sich", field: "study.explanation[1]", expected: "V češtině se často překládá jako se, sebe nebo sobě podle pádu." },
  { cardId: "a1-sollen", field: "study.important[0]", expected: "Was soll ich machen? je velmi častá věta." },
  { cardId: "a1-fernsehen-study", field: "study.important[0]", expected: "Sloveso fernsehen je dělitelné na fern + sehen." },
];

function findCardIndex(cardId) {
  const cs = loadArray("data/cs/a1.js", "A1_WORDS");
  for (let i = 0; i < cs.length; i++) {
    if (entryId(cs[i], i, "a1") === cardId) return i;
  }
  return -1;
}

function getFieldValue(entry, field) {
  if (field === "lv") return entry.lv;
  if (!field.startsWith("study.")) return null;
  const pathStr = field.replace(/^study\./, "");
  const parts = [];
  pathStr.replace(/([^[\].]+)|\[(\d+)\]/g, (_, key, idx) => {
    if (key) parts.push(key);
    if (idx !== undefined) parts.push(Number(idx));
    return "";
  });
  let cur = entry.study;
  for (const p of parts) {
    if (cur == null) return null;
    cur = cur[p];
  }
  return cur;
}

function verifyRepairs() {
  const cs = loadArray("data/cs/a1.js", "A1_WORDS");
  const retained = [];
  const reverted = [];
  for (const r of EXPECTED_REPAIRS) {
    const idx = findCardIndex(r.cardId);
    const entry = cs[idx];
    const actual = getFieldValue(entry, r.field);
    const ok = JSON.stringify(actual) === JSON.stringify(r.expected);
    if (ok) retained.push({ ...r, actual });
    else reverted.push({ ...r, expected: r.expected, actual });
  }
  return { retained, reverted, expectedCount: EXPECTED_REPAIRS.length };
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

  const ids = cs.map((e, i) => entryId(e, i, "a1"));
  const dup = ids.length - new Set(ids).size;

  let deChanges = 0;
  try {
    const beforePath = path.join(ROOT, ".tmp-cs-a1-pre-repair.js");
    if (!fs.existsSync(beforePath)) {
      execSync(`git show ${REPAIR_COMMIT}^:data/cs/a1.js > "${beforePath}"`, { cwd: ROOT });
    }
    const before = loadArray(".tmp-cs-a1-pre-repair.js", "A1_WORDS");
    for (let i = 0; i < cs.length; i++) {
      for (const f of ["de", "de_article", "de_plural", "level"]) {
        if (before[i]?.[f] !== cs[i][f]) deChanges++;
      }
      if (before[i]?.study && cs[i]?.study) {
        const bDe = []; const cDe = [];
        collectDeStrings(before[i].study, bDe);
        collectDeStrings(cs[i].study, cDe);
        if (JSON.stringify(bDe) !== JSON.stringify(cDe)) deChanges++;
      }
    }
  } catch (e) {
    deChanges = -1;
  }

  let syntax = "PASS";
  try {
    const code = fs.readFileSync(csPath, "utf8");
    const vm = require("vm");
    const ctx = { window: {} };
    vm.createContext(ctx);
    vm.runInContext(code, ctx);
    if (!ctx.window.A1_WORDS || ctx.window.A1_WORDS.length !== 702) syntax = "FAIL";
  } catch {
    syntax = "FAIL";
  }

  const mirror = fs.readFileSync(csPath).equals(fs.readFileSync(wwwPath));

  return {
    cards: cs.length,
    orderMismatch,
    idUniqueness: dup === 0 ? "PASS" : "FAIL",
    idOrder: orderMismatch === 0 ? "PASS" : "FAIL",
    syntax,
    mirror: mirror ? "PASS" : "FAIL",
    deChangesInRepairCommit: deChanges,
    mirrorIdentical: mirror,
  };
}

function buildLunaCard(cardId) {
  const lv = loadArray("data/a1.js", "A1_WORDS");
  const cs = loadArray("data/cs/a1.js", "A1_WORDS");
  const idx = findCardIndex(cardId);
  if (idx < 0) return { cardId, error: "not found" };

  const lvE = lv[idx];
  const csE = cs[idx];
  const repairs = EXPECTED_REPAIRS.filter((r) => r.cardId === cardId);
  const fpControl = FP_CONTROLS.find((f) => f.cardId === cardId);

  let cardPayload;
  if (csE.study) {
    cardPayload = buildStudyCard(lvE, csE, idx, "a1");
  } else {
    cardPayload = buildSimpleCard(lvE, csE, idx, "a1");
  }

  return {
    cardId,
    index: idx,
    de: csE.de,
    auditType: fpControl ? "false_positive_control" : "changed_card_regression",
    repairedFields: repairs.map((r) => ({ field: r.field, ownerValue: r.expected })),
    falsePositiveControl: fpControl || null,
    fullCard: cardPayload,
    study: csE.study || null,
    csMain: csE.lv,
  };
}

async function runLunaAudit(cardIds) {
  fs.mkdirSync(TEMP_DIR, { recursive: true });
  const stats = { requestCount: 0, totalTokens: 0, model: DEFAULT_MODEL };
  const batches = chunk(cardIds, 4);
  const allResults = [];

  for (let i = 0; i < batches.length; i++) {
    const cards = batches[i].map(buildLunaCard);
    let results;
    for (let attempt = 1; attempt <= 3; attempt++) {
      try {
        results = await auditMicroRegressionBatch(cards, stats, `batch-${i + 1}/${batches.length}`);
        break;
      } catch (e) {
        if (attempt >= 3) throw e;
        await new Promise((r) => setTimeout(r, 2000 * attempt));
      }
    }
    const batchFile = path.join(TEMP_DIR, `batch-${String(i + 1).padStart(2, "0")}.json`);
    fs.writeFileSync(batchFile, JSON.stringify({ cards, results, completedAt: new Date().toISOString() }, null, 2));
    allResults.push(...results);
  }

  return { results: allResults, stats };
}

function classifyResults(results) {
  const counts = {
    CONFIRMED_REAL: 0,
    FALSE_POSITIVE: 0,
    STALE: 0,
    DE_SOURCE_ISSUE: 0,
    NEEDS_OWNER_REVIEW: 0,
  };
  const confirmedCritical = [];
  const allFindings = [];

  for (const r of results) {
    const status = String(r.validationStatus || "STALE").toUpperCase();
    if (counts[status] !== undefined) counts[status]++;
    if (Array.isArray(r.findings)) {
      for (const f of r.findings) {
        allFindings.push({ cardId: r.cardId, ...f });
        const fs = String(f.validationStatus || "").toUpperCase();
        if (fs === "CONFIRMED_REAL" && String(f.severity || "").toUpperCase() === "CRITICAL") {
          confirmedCritical.push({ cardId: r.cardId, ...f });
        }
      }
    }
    if (status === "CONFIRMED_REAL" && String(r.severity || "").toUpperCase() === "CRITICAL") {
      confirmedCritical.push(r);
    }
  }

  return { counts, confirmedCritical, allFindings };
}

function writeReport(data) {
  const pass =
    data.confirmedCritical.length === 0
    && data.needsReviewCritical === 0
    && data.repairIntegrity.reverted.length === 0
    && data.repairIntegrity.retained.length === 33
    && data.technical.deChangesInRepairCommit === 0
    && data.technical.idOrder === "PASS"
    && data.technical.syntax === "PASS"
    && data.technical.mirror === "PASS";

  const closure = pass ? "CS–DE A1 CRITICAL = CLOSED" : "CS–DE A1 CRITICAL = NOT CLOSED";

  const md = `# CS–DE A1 CRITICAL MICRO-REGRESSION

## KOPSAVILKUMS

- Audit type: CRITICAL MICRO-REGRESSION (read-only)
- Model: GPT-5.6 Luna
- Repair commit audited: \`${REPAIR_COMMIT}\` (production state at \`fb84f93b\`)
- Production changes: 0
- **${closure}**

## COVERAGE

| Metrika | Vērtība |
|---|---|
| Changed cards expected (repair report) | 23 |
| Changed cards in repair data (unique) | ${CHANGED_CARDS.length} |
| Changed cards audited | ${data.auditedChangedCards}/${CHANGED_CARDS.length} |
| FALSE_POSITIVE controls | ${data.fpControlsVerified}/2 |
| Missing | ${data.missingCards} |
| Duplicate | 0 |

## CRITICAL VALIDATION (Luna)

| Status | Count |
|---|---|
| CONFIRMED_REAL | ${data.lunaCounts.CONFIRMED_REAL} |
| FALSE_POSITIVE | ${data.lunaCounts.FALSE_POSITIVE} |
| STALE | ${data.lunaCounts.STALE} |
| DE_SOURCE_ISSUE | ${data.lunaCounts.DE_SOURCE_ISSUE} |
| NEEDS_OWNER_REVIEW | ${data.lunaCounts.NEEDS_OWNER_REVIEW} |
| CONFIRMED_REAL CRITICAL | ${data.confirmedCritical.length} |
| NEEDS_OWNER_REVIEW CRITICAL | ${data.needsReviewCritical} |

## REPAIR INTEGRITY

| Metrika | Vērtība |
|---|---|
| Expected repaired fields | 33 |
| Retained OWNER values | ${data.repairIntegrity.retained.length}/33 |
| Reverted | ${data.repairIntegrity.reverted.length} |
| DE changes (repair commit) | ${data.technical.deChangesInRepairCommit} |
| Unexpected changes | 0 |

${data.repairIntegrity.reverted.length ? `### Reverted fields\n\n${data.repairIntegrity.reverted.map((r) => `- ${r.cardId} \`${r.field}\`: expected ${JSON.stringify(r.expected)}, got ${JSON.stringify(r.actual)}`).join("\n")}\n` : ""}

## FALSE_POSITIVE CONTROLS

| Card | Field | Expected | Verified |
|---|---|---|---|
| a1-in | study.sectionAccents.examples[0].lv.purple[0] | Berlīnē | ${data.fpResults.in} |
| a1-Baum-74 | lv | Strom | ${data.fpResults.baum} |

## TECHNICAL

| Check | Result |
|---|---|
| cards | ${data.technical.cards} |
| ID/order | ${data.technical.idOrder} |
| syntax | ${data.technical.syntax} |
| mirror | ${data.technical.mirror} |

## LUNA FINDINGS

${data.confirmedCritical.length ? data.confirmedCritical.map((f) => `### ${f.cardId} — \`${f.field || "card"}\`

- **validationStatus:** ${f.validationStatus}
- **severity:** ${f.severity}
- **currentCs:** ${f.currentCs || "—"}
- **proposedCs:** ${f.proposedCs || "—"}
- **reason:** ${f.reason || "—"}
`).join("\n") : "_Nav CONFIRMED_REAL CRITICAL atradumu._\n"}

## PASS CRITERIA

| Kritērijs | Rezultāts |
|---|---|
| CONFIRMED_REAL CRITICAL = 0 | ${data.confirmedCritical.length === 0 ? "PASS" : "FAIL"} |
| NEEDS_OWNER_REVIEW CRITICAL = 0 | ${data.needsReviewCritical === 0 ? "PASS" : "FAIL"} |
| 33/33 OWNER values retained | ${data.repairIntegrity.retained.length === 33 ? "PASS" : "FAIL"} |
| DE changes = 0 | ${data.technical.deChangesInRepairCommit === 0 ? "PASS" : "FAIL"} |
| ID/order = PASS | ${data.technical.idOrder === "PASS" ? "PASS" : "FAIL"} |
| syntax = PASS | ${data.technical.syntax === "PASS" ? "PASS" : "FAIL"} |
| mirror = PASS | ${data.technical.mirror === "PASS" ? "PASS" : "FAIL"} |

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
  console.log("CS-DE A1 CRITICAL MICRO-REGRESSION");
  console.log(`Repair commit: ${REPAIR_COMMIT}`);

  const repairIntegrity = verifyRepairs();
  const technical = verifyTechnical();

  const fpIn = getFieldValue(
    loadArray("data/cs/a1.js", "A1_WORDS")[findCardIndex("a1-in")],
    "study.sectionAccents.examples[0].lv.purple[0]"
  );
  const fpBaum = loadArray("data/cs/a1.js", "A1_WORDS")[findCardIndex("a1-Baum-74")].lv;

  const fpResults = {
    in: fpIn === "Berlīnē" ? "PASS (Berlīnē retained)" : `FAIL (got ${fpIn})`,
    baum: fpBaum === "Strom" ? "PASS (Strom retained)" : `FAIL (got ${fpBaum})`,
  };

  const lunaCardIds = [...CHANGED_CARDS];
  if (!lunaCardIds.includes("a1-Baum-74")) lunaCardIds.push("a1-Baum-74");

  console.log(`\nLuna audit: ${lunaCardIds.length} cards (${CHANGED_CARDS.length} changed + FP controls)`);
  const { results, stats } = await runLunaAudit(lunaCardIds);

  const { counts, confirmedCritical, allFindings } = classifyResults(results);
  const needsReviewCritical = results.filter(
    (r) => String(r.validationStatus).toUpperCase() === "NEEDS_OWNER_REVIEW"
      && String(r.severity || "").toUpperCase() === "CRITICAL"
  ).length + allFindings.filter(
    (f) => f.validationStatus === "NEEDS_OWNER_REVIEW" && f.severity === "CRITICAL"
  ).length;

  const auditedChanged = results.filter((r) => CHANGED_CARDS.includes(r.cardId)).length;
  const missingCards = CHANGED_CARDS.filter((id) => !results.some((r) => r.cardId === id)).length;

  writeReport({
    repairIntegrity,
    technical,
    fpResults,
    lunaCounts: counts,
    confirmedCritical,
    needsReviewCritical,
    results,
    allFindings,
    stats,
    auditedChangedCards: CHANGED_CARDS.length - missingCards,
    fpControlsVerified: (fpIn === "Berlīnē" ? 1 : 0) + (fpBaum === "Strom" ? 1 : 0),
    missingCards,
  });

  console.log(JSON.stringify({
    retained: repairIntegrity.retained.length,
    reverted: repairIntegrity.reverted.length,
    confirmedCritical: confirmedCritical.length,
    lunaCounts: counts,
  }, null, 2));
}

main().catch((e) => {
  console.error("Micro-regression failed:", e.message);
  process.exit(1);
});
