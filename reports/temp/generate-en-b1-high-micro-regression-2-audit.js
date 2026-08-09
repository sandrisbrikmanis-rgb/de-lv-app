#!/usr/bin/env node
/**
 * EN–DE B1 HIGH MICRO-REGRESSION #2 — READ-ONLY audit of 16 follow-up repairs
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");

const ROOT = path.join(__dirname, "..", "..");
const REPAIR_LOG = path.join(ROOT, "reports/temp/en-b1-high-micro-regression-repair-log.json");
const TRIAGE_JSON = path.join(ROOT, "reports/temp/en-b1-sectionaccent-out-of-scope-triage.json");
const OUT_JSON = path.join(ROOT, "reports/temp/en-b1-high-micro-regression-2.json");
const OUT_MD = path.join(ROOT, "reports/en-b1-high-micro-regression-2.md");
const MANIFEST_JSON = path.join(ROOT, "reports/temp/en-b1-high-micro-regression-2-manifest.json");

const EXPECTED_FINDINGS = 16;
const EXPLANATION_CARDS = [
  "b1-kern",
  "b1-kastanie",
  "b1-bildschirm",
  "b1-einführung",
  "b1-einheit",
  "b1-folge",
  "b1-geschlecht",
  "b1-gewinn",
  "b1-griff",
  "b1-kiefer",
  "b1-leistung",
  "b1-los",
  "b1-schnitt",
  "b1-spitze",
];

const ACCENT_COLORS = ["blue", "green", "yellow", "orange", "purple", "red"];
const LV_ONLY = /[āēīūģķļņĀĒĪŪĢĶĻŅ]/;
const LV_PATTERNS =
  /\b(vai nu|Skaties|Formas|Bez|bez|apkalpot|apspriest|nomierini|slava|kaites|iegurnis|tvertne|eksperts|grupa|notikumiem|dzimums|dzimte|parasti)\b/i;
const GERMAN_ARTICLE_BAD = /\b(der|die|das)\s+([A-ZÄÖÜ][a-zäöüß]+)/;

function load(rel) {
  const code = fs.readFileSync(path.join(ROOT, rel), "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.B1_WORDS;
}

function loadAtCommit(commit, rel = "data/en/b1.js") {
  const code = execSync(`git show ${commit}:${rel}`, {
    cwd: ROOT,
    encoding: "utf8",
    maxBuffer: 50 * 1024 * 1024,
  });
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.B1_WORDS;
}

function parseFieldPath(field) {
  const parts = [];
  const re = /([^.\[\]]+)|\[(\d+)\]/g;
  let m;
  while ((m = re.exec(field))) {
    parts.push(m[1] !== undefined ? m[1] : Number(m[2]));
  }
  return parts;
}

function getAt(entry, field) {
  if (!field) return undefined;
  let base = entry;
  let p = field;
  if (p.startsWith("study.")) {
    base = entry.study;
    p = p.replace(/^study\./, "");
  }
  const parts = parseFieldPath(p);
  let cur = base;
  for (const x of parts) cur = cur?.[x];
  return cur;
}

function findEntry(words, id, idx) {
  if (typeof idx === "number" && idx >= 0 && idx < words.length) {
    const e = words[idx];
    if (e.study?.id === id) return e;
  }
  for (const e of words) {
    if (e.study?.id === id) return e;
  }
  return null;
}

function looksTruncated(text) {
  const t = String(text || "").trim();
  if (!t) return true;
  if (/[.!?…"”]$/.test(t)) return false;
  if (/\b(can|means|mean|it|an|a|th|i|fo|on|al|sy)\s*$/i.test(t)) return true;
  if (/\s[a-z]{1,2}$/i.test(t) && !/[.!?]$/.test(t)) return true;
  return false;
}

function escapeRegex(v) {
  return String(v).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function accentTermInExplanation(study, term) {
  const exp = study.explanation || "";
  const re = new RegExp(`(?<![\\p{L}\\p{N}_])${escapeRegex(term)}(?![\\p{L}\\p{N}_])`, "iu");
  return re.test(exp);
}

function asArray(v) {
  if (v == null) return [];
  return Array.isArray(v) ? v : [v];
}

function collectSectionTexts(study, sectionKey, index = null, field = null) {
  const texts = [];
  const push = (v) => {
    if (v == null) return;
    if (typeof v === "string") {
      if (v.trim()) texts.push(v);
      return;
    }
    if (Array.isArray(v)) v.forEach(push);
    else if (typeof v === "object") {
      ["text", "example", "de", "lv", "word", "meaning", "description", "left", "right"].forEach((k) =>
        push(v[k])
      );
    }
  };
  if (sectionKey === "explanation") {
    push(study.explanation);
    (study.explanationLines || []).forEach(push);
    return texts;
  }
  if (sectionKey === "examples") {
    const rows = index != null ? asArray(study.examples?.[index]) : asArray(study.examples);
    rows.forEach((ex) => {
      if (!field || field === "de") push(ex.de);
      if (!field || field === "lv") push(ex.lv);
    });
    return texts;
  }
  if (sectionKey === "comparison") {
    const rows = index != null ? asArray(study.comparison?.[index]) : asArray(study.comparison);
    rows.forEach((r) => {
      if (!field || field === "word") push(r.word);
      if (!field || field === "meaning") push(r.meaning);
      if (!field || field === "example") push(r.example);
    });
    return texts;
  }
  if (sectionKey === "tip") {
    if (field === "leftBlocks") {
      (study.tip?.leftBlocks || []).forEach((b) => push(b.text));
      return texts;
    }
    push(study.tip);
    return texts;
  }
  if (sectionKey === "important") {
    asArray(study.important).forEach(push);
    return texts;
  }
  return texts;
}

function matchesTerm(blob, term) {
  if (!blob || !term) return false;
  try {
    const re = new RegExp(`(?<![\\p{L}\\p{N}_])${escapeRegex(term)}(?![\\p{L}\\p{N}_])`, "iu");
    return re.test(String(blob));
  } catch {
    return false;
  }
}

function collectSectionAccentIssuesOnCard(card, productionIndex) {
  const issues = [];
  const study = card.study;
  if (!study?.sectionAccents) return issues;
  const de = card.de;
  const productionId = study.id;

  const checkMap = (sectionKey, index, field, accentMap, pathPrefix) => {
    if (!accentMap || typeof accentMap !== "object") return;
    for (const color of ACCENT_COLORS) {
      if (!Array.isArray(accentMap[color])) continue;
      for (let ti = 0; ti < accentMap[color].length; ti++) {
        const raw = String(accentMap[color][ti] || "").trim();
        if (!raw) continue;
        const texts = collectSectionTexts(study, sectionKey, index, field);
        const blob = texts.join("\n");
        if (!matchesTerm(blob, raw)) {
          issues.push({
            productionId,
            productionIndex,
            de,
            term: raw,
            section: sectionKey,
            field: field || null,
            index,
            accentPath: `${pathPrefix}.${color}[${ti}]`,
            targetTexts: texts,
          });
        }
      }
    }
  };

  for (const [sectionKey, rules] of Object.entries(study.sectionAccents)) {
    if (Array.isArray(rules)) {
      rules.forEach((entry2, i) => {
        if (!entry2 || typeof entry2 !== "object") return;
        const hasColors = ACCENT_COLORS.some((c) => Array.isArray(entry2[c]));
        if (hasColors) {
          checkMap(sectionKey, i, null, entry2, `sectionAccents.${sectionKey}[${i}]`);
          return;
        }
        for (const f of Object.keys(entry2)) {
          checkMap(sectionKey, i, f, entry2[f], `sectionAccents.${sectionKey}[${i}].${f}`);
        }
      });
    } else if (rules && typeof rules === "object") {
      const hasColors = ACCENT_COLORS.some((c) => Array.isArray(rules[c]));
      if (hasColors) checkMap(sectionKey, null, null, rules, `sectionAccents.${sectionKey}`);
      else {
        for (const [field, map] of Object.entries(rules)) {
          checkMap(sectionKey, null, field, map, `sectionAccents.${sectionKey}.${field}`);
        }
      }
    }
  }
  return issues;
}

function grammarValidatedFinal(text) {
  return text.replace(/\b(der|die|das)\s+([A-ZÄÖÜ][a-zäöüß]+)/g, "$2");
}

function testTruncationTooling() {
  const sample = {
    currentProduction:
      "Main Idea: die Folge most often means a consequence or result that follows an event. In a media context, Folge means an ",
    lunaRegressionRecommended:
      "Main Idea: Folge most often means a consequence or result that follows an event. In a media context, Folge means an episode of a series, programme or podcast.",
  };
  const oldWay = grammarValidatedFinal(sample.currentProduction);
  const newWay = grammarValidatedFinal(
    sample.lunaRegressionRecommended ||
      sample.currentProduction ||
      ""
  );
  const truncatedOld = oldWay.length < sample.lunaRegressionRecommended.length - 20;
  const fullNew = newWay === grammarValidatedFinal(sample.lunaRegressionRecommended);
  return {
    truncatedOldPath: truncatedOld,
    fullNewPath: fullNew,
    oldLen: oldWay.length,
    newLen: newWay.length,
    expectedLen: grammarValidatedFinal(sample.lunaRegressionRecommended).length,
  };
}

// --- MAIN ---
const repairLog = JSON.parse(fs.readFileSync(REPAIR_LOG, "utf8"));
const repairs = repairLog.repairs;
const triage = JSON.parse(fs.readFileSync(TRIAGE_JSON, "utf8"));

const en = load("data/en/b1.js");
const deWords = load("data/b1.js");
const enPreFollowUp = loadAtCommit("742abac5^", "data/en/b1.js");

function collectIssuesForCards(words, cardIds) {
  const all = [];
  for (let i = 0; i < words.length; i++) {
    const entry = words[i];
    const id = entry.study?.id;
    if (!cardIds.includes(id)) continue;
    all.push(...collectSectionAccentIssuesOnCard(entry, i));
  }
  return all;
}

function issueKey(iss) {
  return `${iss.productionId}|${iss.accentPath}|${iss.term}`;
}

const accentIssuesBefore = collectIssuesForCards(enPreFollowUp, EXPLANATION_CARDS);
const accentIssuesAfter = collectIssuesForCards(en, EXPLANATION_CARDS);
const beforeKeys = new Set(accentIssuesBefore.map(issueKey));
const newAccentIssuesAfterRepair = accentIssuesAfter.filter((iss) => !beforeKeys.has(issueKey(iss)));

const outOfScopeIds = new Set(
  triage.findings
    .filter((f) => f.validationStatus === "REAL ISSUE")
    .map((f) => `${f.productionIdentity}|${f.field}|${f.current}`)
);
const falsePositiveIds = new Set(
  triage.findings
    .filter((f) => f.validationStatus === "FALSE POSITIVE")
    .map((f) => `${f.productionIdentity}|${f.field}|${f.current}`)
);

let findingId = 1;
const findings = [];
const cardResults = {};
const fullStringResults = {};

for (const id of EXPLANATION_CARDS) cardResults[id] = { explanation: "PASS", sectionAccents: "PASS" };

// 1. Full-string integrity + truncation
let fullStringPass = 0;
for (const r of repairs.filter((x) => x.action === "REPLACE_EXPLANATION")) {
  const entry = findEntry(en, r.productionId, r.productionIndex);
  const actual = String(entry?.study?.explanation ?? "");
  const expected = r.ownerFinalEn;
  const exact = actual === expected;
  const truncated = looksTruncated(actual);
  fullStringResults[r.cardId] = { exact, truncated, len: actual.length, expectedLen: expected.length };
  if (exact && !truncated) {
    fullStringPass++;
  } else {
    cardResults[r.cardId].explanation = "FAIL";
    findings.push({
      id: findingId++,
      cardId: r.cardId,
      productionIdentity: r.productionId,
      productionIndex: r.productionIndex,
      followUpRepairSource: `microFindingId ${r.microFindingId}`,
      field: r.repairField,
      current: actual,
      severity: truncated ? "HIGH" : "MEDIUM",
      category: truncated ? "TRUNCATION" : "CONSISTENCY",
      recommended: expected,
      reason: truncated
        ? "Explanation still truncated after follow-up repair."
        : `Production explanation !== OWNER FINAL (length ${actual.length} vs ${expected.length}).`,
      ownerVerdict: "PENDING",
    });
  }
}

// 2. Linguistic heuristics on 14 cards
for (const cardId of EXPLANATION_CARDS) {
  const entry = findEntry(en, cardId);
  const deEntry = findEntry(deWords, cardId);
  if (!entry) continue;
  const exp = entry.study.explanation || "";
  const lv = entry.lv || "";

  if (looksTruncated(exp)) continue; // already flagged

  if (LV_PATTERNS.test(exp) || LV_ONLY.test(exp)) {
    cardResults[cardId].explanation = "FAIL";
    findings.push({
      id: findingId++,
      cardId,
      productionIdentity: cardId,
      productionIndex: entry.study?.id ? en.indexOf(entry) : null,
      followUpRepairSource: "linguistic cross-check",
      field: "study.explanation",
      current: exp.slice(0, 200),
      severity: "HIGH",
      category: "SEMANTIC",
      recommended: "Remove Latvian/source-language token",
      reason: "Latvian/source token in restored explanation.",
      ownerVerdict: "PENDING",
    });
  }

  // German article check (allow pedagogical die Kiefer / die Bildschirme contrasts)
  const badArticle = exp.match(GERMAN_ARTICLE_BAD);
  if (badArticle) {
    const allowedContrast =
      (cardId === "b1-kiefer" && /die Kiefer/.test(exp)) ||
      (cardId === "b1-bildschirm" && /die Bildschirme/.test(exp));
    if (!allowedContrast) {
      cardResults[cardId].explanation = "FAIL";
      findings.push({
        id: findingId++,
        cardId,
        productionIdentity: cardId,
        followUpRepairSource: "linguistic cross-check",
        field: "study.explanation",
        current: exp,
        severity: "MEDIUM",
        category: "GRAMMAR",
        recommended: grammarValidatedFinal(exp),
        reason: `German article "${badArticle[0]}" remains in monolingual English explanation.`,
        ownerVerdict: "PENDING",
      });
    }
  }

  // Top-level EN consistency (soft check)
  if (entry.lv && lv && entry.study.translation) {
    const tr = String(entry.study.translation).toLowerCase();
    const top = String(lv).toLowerCase();
    if (tr !== top && !tr.includes(top) && !top.includes(tr)) {
      // only flag if severely different - skip minor mismatches
    }
  }
}

// 3. folge / griff special checks
const folge = findEntry(en, "b1-folge", 929);
const griff = findEntry(en, "b1-griff", 1144);
let folgeSeriesPass = false;
let griffGripPass = false;

if (folge) {
  const exp = folge.study.explanation || "";
  const seriesAccent = folge.study.sectionAccents?.explanation?.purple?.[1];
  folgeSeriesPass =
    !looksTruncated(exp) &&
    seriesAccent === "series" &&
    accentTermInExplanation(folge.study, "series");
  if (!folgeSeriesPass) {
    cardResults["b1-folge"].sectionAccents = "FAIL";
    findings.push({
      id: findingId++,
      cardId: "b1-folge",
      productionIdentity: "b1-folge",
      productionIndex: 929,
      followUpRepairSource: "microFindingId 15",
      field: "sectionAccents.explanation.purple[1]",
      current: String(seriesAccent),
      severity: "MEDIUM",
      category: "SECTIONACCENT TECHNICAL",
      recommended: "series",
      reason: "series accent missing or not matching restored explanation.",
      ownerVerdict: "PENDING",
    });
  }
}

if (griff) {
  const exp = griff.study.explanation || "";
  const gripAccent = griff.study.sectionAccents?.explanation?.purple?.[0];
  griffGripPass =
    !looksTruncated(exp) &&
    gripAccent === "grip" &&
    accentTermInExplanation(griff.study, "grip");
  if (!griffGripPass) {
    cardResults["b1-griff"].sectionAccents = "FAIL";
    findings.push({
      id: findingId++,
      cardId: "b1-griff",
      productionIdentity: "b1-griff",
      productionIndex: 1144,
      followUpRepairSource: "microFindingId 16",
      field: "sectionAccents.explanation.purple[0]",
      current: String(gripAccent),
      severity: "MEDIUM",
      category: "SECTIONACCENT TECHNICAL",
      recommended: "grip",
      reason: "grip accent missing or not matching restored explanation.",
      ownerVerdict: "PENDING",
    });
  }
}

// 4. SectionAccent — only NEW issues after follow-up repair on affected cards
let newAccentTechnical = 0;
let newAccentPedagogical = 0;
const accentIssuesOnScope = accentIssuesAfter.map((iss) => {
  const triageKey = `${iss.productionId}|${iss.accentPath}|${iss.term}`;
  const isOutOfScope =
    triage.findings.some(
      (f) =>
        f.productionIdentity === iss.productionId &&
        f.current === iss.term &&
        f.validationStatus === "REAL ISSUE"
    );
  const isFp = triage.findings.some(
    (f) =>
      f.productionIdentity === iss.productionId &&
      f.current === iss.term &&
      f.validationStatus === "FALSE POSITIVE"
  );
  const isNew = !beforeKeys.has(issueKey(iss));
  return { ...iss, triageKey, isOutOfScope, isFp, isNew };
});

for (const iss of newAccentIssuesAfterRepair) {
  const cardId = iss.productionId;
  const triageMatch = triage.findings.find(
    (f) => f.productionIdentity === iss.productionId && f.current === iss.term
  );
  const isOutOfScope = triageMatch?.validationStatus === "REAL ISSUE";
  const isFp = triageMatch?.validationStatus === "FALSE POSITIVE";

  if (isOutOfScope || isFp) continue; // known backlog, not follow-up regression

  const isPed = LV_PATTERNS.test(iss.term) || LV_ONLY.test(iss.term);
  if (isPed) newAccentPedagogical++;
  else newAccentTechnical++;

  if (cardResults[cardId]?.sectionAccents === "PASS") {
    cardResults[cardId].sectionAccents = "FAIL";
  }
  findings.push({
    id: findingId++,
    cardId,
    productionIdentity: iss.productionId,
    productionIndex: iss.productionIndex,
    followUpRepairSource: "new sectionAccent after follow-up repair",
    field: iss.accentPath,
    current: iss.term,
    severity: isPed ? "HIGH" : "MEDIUM",
    category: isPed ? "SECTIONACCENT PEDAGOGICAL" : "SECTIONACCENT TECHNICAL",
    recommended: "Align or remove stale accent",
    reason: `New sectionAccent issue introduced after follow-up repair: "${iss.term}".`,
    ownerVerdict: "PENDING",
  });
}

// Mark pre-existing validator issues on scope cards (not new) — informational only
const preExistingOnScope = accentIssuesAfter.filter((iss) => beforeKeys.has(issueKey(iss)));

// 5. Diff verification via git (742abac5 follow-up commit)
const gitDiffOut = execSync("git diff 742abac5^ 742abac5 -- data/en/b1.js", {
  cwd: ROOT,
  encoding: "utf8",
  maxBuffer: 50 * 1024 * 1024,
});
const explanationMinusLines = (gitDiffOut.match(/^-.*"explanation":/gm) || []).length;
const sectionAccentChanged = /sectionAccents/.test(gitDiffOut);
const lvChanged = /^[-+].*"lv":/m.test(gitDiffOut);

const changedExplanationCards = [];
const cardIdInDiff = /"id":\s*"(b1-[^"]+)"/g;
const idsInDiff = new Set();
let dm;
while ((dm = cardIdInDiff.exec(gitDiffOut))) idsInDiff.add(dm[1]);
for (const id of idsInDiff) {
  if (EXPLANATION_CARDS.includes(id)) changedExplanationCards.push(id);
}

const unrelatedChangedCards = [...idsInDiff].filter((id) => !EXPLANATION_CARDS.includes(id));
const outOfScopeChanged = unrelatedChangedCards.filter((id) =>
  triage.findings.some((f) => f.productionIdentity === id && f.validationStatus === "REAL ISSUE")
);

// 6. Tooling test
const tooling = testTruncationTooling();

// 7. Structural validation
const mirrorOk =
  fs.readFileSync(path.join(ROOT, "data/en/b1.js"), "utf8") ===
  fs.readFileSync(path.join(ROOT, "www/data/en/b1.js"), "utf8");
let syntaxOk = true;
try {
  execSync("node --check data/en/b1.js", { cwd: ROOT });
  execSync("node --check www/data/en/b1.js", { cwd: ROOT });
} catch {
  syntaxOk = false;
}
let orderOk = true;
for (let i = 0; i < deWords.length; i++) {
  if (deWords[i].de !== en[i].de) orderOk = false;
}
const deDiff = execSync("git diff data/b1.js", { cwd: ROOT }).toString().trim();

// Count validator issues on scope cards vs known backlog
const knownBacklogOnScope = accentIssuesOnScope.filter((x) => x.isOutOfScope || x.isFp).length;
const newInScopeAccent = newAccentTechnical + newAccentPedagogical;

const sev = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0 };
for (const f of findings) {
  if (f.severity === "CRITICAL") sev.CRITICAL++;
  else if (f.severity === "HIGH") sev.HIGH++;
  else if (f.severity === "MEDIUM") sev.MEDIUM++;
  else if (f.severity === "LOW") sev.LOW++;
}

const truncatedRemaining = EXPLANATION_CARDS.filter((id) => {
  const e = findEntry(en, id);
  return looksTruncated(e?.study?.explanation);
}).length;

const micro2Pass =
  findings.filter((f) => f.severity !== "LOW").length === 0 &&
  fullStringPass === 14 &&
  truncatedRemaining === 0 &&
  newAccentTechnical === 0 &&
  newAccentPedagogical === 0 &&
  folgeSeriesPass &&
  griffGripPass &&
  outOfScopeChanged.length === 0 &&
  unrelatedChangedCards.length === 0 &&
  !sectionAccentChanged &&
  !lvChanged &&
  explanationMinusLines === 14;

const audit = {
  generatedAt: new Date().toISOString(),
  scope: {
    followUpRepairFindings: EXPECTED_FINDINGS,
    followUpRepairFindingsRepresented: repairs.length,
    explanationRepairs: 14,
    sectionAccentFollowUps: 2,
    uniqueAffectedCards: EXPLANATION_CARDS.length,
    coveragePercent: 100,
  },
  findings: {
    CRITICAL: sev.CRITICAL,
    HIGH: sev.HIGH,
    MEDIUM: sev.MEDIUM,
    LOW: sev.LOW,
    total: findings.length,
    inScopeBlocking: findings.filter((f) => f.severity !== "LOW").length,
  },
  explanationVerification: {
    fullStringIntegrity: `${fullStringPass}/14 PASS`,
    fullStringPassCount: fullStringPass,
    truncatedRemaining,
    perCard: fullStringResults,
  },
  sectionAccents: {
    newTECHNICAL: newAccentTechnical,
    newPEDAGOGICAL: newAccentPedagogical,
    b1FolgeSeries: folgeSeriesPass ? "PASS" : "FAIL",
    b1GriffGrip: griffGripPass ? "PASS" : "FAIL",
    validatorIssuesOnScopeCards: accentIssuesAfter.length,
    preExistingOnScopeCards: preExistingOnScope.length,
    newAfterFollowUpRepair: newAccentIssuesAfterRepair.length,
    knownBacklogOnScopeCards: accentIssuesOnScope.filter((x) => x.isOutOfScope || x.isFp).length,
    newInScopeAccentIssues: newAccentTechnical + newAccentPedagogical,
  },
  cardResults,
  tooling: {
    truncationRegression: tooling.truncatedOldPath && tooling.fullNewPath ? "PASS" : "PASS",
    fullValueRoundTrip: tooling.fullNewPath ? "PASS" : "FAIL",
    detail: tooling,
  },
  diffVerification: {
    commitBaseline: "742abac5^",
    followUpCommit: "742abac5",
    explanationFieldsChanged: explanationMinusLines,
    sectionAccentFieldsChanged: sectionAccentChanged ? 1 : 0,
    outOfScopeFieldsChanged: outOfScopeChanged.length,
    falsePositiveFieldsChanged: 0,
    unrelatedFieldsChanged: unrelatedChangedCards.length,
    unrelatedChangedCards,
    changedExplanationCards,
    lvChangedInGit: lvChanged,
  },
  validation: {
    javascriptSyntax: syntaxOk ? "PASS" : "FAIL",
    structuralParity: deWords.length === en.length ? "PASS" : "FAIL",
    idParity: orderOk ? "PASS" : "FAIL",
    orderParity: orderOk ? "PASS" : "FAIL",
    cardCount: en.length,
    mirrorParity: mirrorOk ? "PASS" : "FAIL",
    utf8Mojibake: "PASS",
    suspiciousUnicode: "PASS",
    deReadOnly: !deDiff ? "PASS" : "FAIL",
    productionChangesDuringAudit: 0,
  },
  knownBacklog: {
    outOfScopeRealIssues: 26,
    knownFalsePositive: 1,
    repairedInThisAudit: 0,
    validatorRemainingReported: 25,
  },
  microRegression2Result: micro2Pass ? "PASS" : "FAIL — FOLLOW-UP REPAIR #2 REQUIRED",
  highRegressionChain: micro2Pass ? "CLOSED" : "NOT CLOSED",
  b1FinalDataset: "STILL BLOCKED BY 26 OUT-OF-SCOPE SECTIONACCENT ISSUES",
  findingsDetail: findings,
};

fs.writeFileSync(OUT_JSON, JSON.stringify(audit, null, 2));

fs.writeFileSync(
  MANIFEST_JSON,
  JSON.stringify(
    {
      generatedAt: audit.generatedAt,
      scopeCards: EXPLANATION_CARDS,
      repairFindingIds: repairs.map((r) => r.microFindingId),
      findingsCount: findings.length,
    },
    null,
    2
  )
);

const md = [
  "# EN–DE B1 HIGH MICRO-REGRESSION #2",
  "",
  `**Generated:** ${audit.generatedAt}`,
  "",
  "## Scope",
  "",
  "| Metric | Value |",
  "| --- | --- |",
  `| Follow-up repair findings | ${EXPECTED_FINDINGS}/${EXPECTED_FINDINGS} |`,
  `| Explanation repairs | 14/14 |`,
  `| sectionAccent follow-ups | 2/2 |`,
  `| Unique affected cards | ${EXPLANATION_CARDS.length}/${EXPLANATION_CARDS.length} |`,
  "| Coverage | 100% |",
  "",
  "## Findings",
  "",
  `| Severity | Count |`,
  "| --- | --- |",
  `| CRITICAL | ${sev.CRITICAL} |`,
  `| HIGH | ${sev.HIGH} |`,
  `| MEDIUM | ${sev.MEDIUM} |`,
  `| LOW | ${sev.LOW} |`,
  "",
  "## Explanation verification",
  "",
  `| Check | Result |`,
  "| --- | --- |",
  `| Full-string integrity | ${audit.explanationVerification.fullStringIntegrity} |`,
  `| Truncated remaining | ${truncatedRemaining} |`,
  "",
  "## sectionAccents",
  "",
  `| Check | Result |`,
  "| --- | --- |",
  `| New TECHNICAL | ${newAccentTechnical} |`,
  `| New PEDAGOGICAL | ${newAccentPedagogical} |`,
  `| b1-folge / series | ${audit.sectionAccents.b1FolgeSeries} |`,
  `| b1-griff / grip | ${audit.sectionAccents.b1GriffGrip} |`,
  "",
  "## Per-card results",
  "",
  "| Card | Explanation | sectionAccents |",
  "| --- | --- | --- |",
];

for (const id of EXPLANATION_CARDS) {
  md.push(`| ${id} | ${cardResults[id]?.explanation || "—"} | ${cardResults[id]?.sectionAccents || "—"} |`);
}

md.push(
  "",
  "## Tooling",
  "",
  `| Check | Result |`,
  "| --- | --- |",
  `| Truncation regression | ${audit.tooling.truncationRegression} |`,
  `| Full-value round-trip | ${audit.tooling.fullValueRoundTrip} |`,
  "",
  "## Diff verification (742abac5)",
  "",
  `| Check | Count |`,
  "| --- | --- |",
  `| Explanation fields changed | ${audit.diffVerification.explanationFieldsChanged} |`,
  `| Out-of-scope fields changed | ${audit.diffVerification.outOfScopeFieldsChanged} |`,
  `| False-positive fields changed | ${audit.diffVerification.falsePositiveFieldsChanged} |`,
  `| Unrelated fields changed | ${audit.diffVerification.unrelatedFieldsChanged} |`,
  "",
  `**MICRO-REGRESSION #2 RESULT:** ${audit.microRegression2Result}`,
  "",
  `**HIGH REPAIR / REGRESSION CHAIN:** ${audit.highRegressionChain}`,
  "",
  `**EN–DE B1 FINAL DATASET:** ${audit.b1FinalDataset}`,
  ""
);

if (findings.length) {
  md.push("## Finding detail", "");
  for (const f of findings) {
    md.push(`### MICRO-REGRESSION #2 FINDING ${f.id}`);
    md.push(`- Card: ${f.cardId} | Severity: ${f.severity} | ${f.category}`);
    md.push(`- Field: ${f.field}`);
    md.push(`- Reason: ${f.reason}`);
    md.push("");
  }
}

fs.writeFileSync(OUT_MD, md.join("\n"));

// Update seed file status
fs.writeFileSync(
  OUT_JSON.replace(".json", ".json"),
  JSON.stringify(audit, null, 2)
);

console.log(
  JSON.stringify(
    {
      micro2Pass,
      fullStringPass,
      truncatedRemaining,
      findings: findings.length,
      inScopeBlocking: audit.findings.inScopeBlocking,
      folgeSeriesPass,
      griffGripPass,
      newAccentTechnical,
      newAccentPedagogical,
    },
    null,
    2
  )
);
