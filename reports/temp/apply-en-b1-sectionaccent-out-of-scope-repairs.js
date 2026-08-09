#!/usr/bin/env node
/**
 * EN–DE B1 SECTIONACCENT OUT-OF-SCOPE REPAIRS — 24 OWNER-approved LABOT mappings.
 * Usage:
 *   node reports/temp/apply-en-b1-sectionaccent-out-of-scope-repairs.js --verify-only
 *   node reports/temp/apply-en-b1-sectionaccent-out-of-scope-repairs.js --apply
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");

const ROOT = path.join(__dirname, "..", "..");
const REPAIRS_JSON = path.join(ROOT, "reports/temp/en-b1-sectionaccent-out-of-scope-repairs.json");
const LOG_JSON = path.join(ROOT, "reports/temp/en-b1-sectionaccent-out-of-scope-repair-log.json");
const MICRO_JSON = path.join(ROOT, "reports/temp/en-b1-sectionaccent-out-of-scope-micro-regression.json");
const REPORT_MD = path.join(ROOT, "reports/en-b1-sectionaccent-out-of-scope-repair.md");

const EXPECTED_REPAIRS = 24;
const EXPECTED_CARD_COUNT = 3367;
const EXCLUDED_ALREADY_RESOLVED = ["b1-folge", "b1-griff"];
const EXCLUDED_FALSE_POSITIVE = "b1-einerlei";
const ACCENT_COLORS = ["blue", "green", "yellow", "orange", "purple", "red"];

const APPLY = process.argv.includes("--apply");
const VERIFY_ONLY = process.argv.includes("--verify-only") || !APPLY;

function load(rel) {
  const code = fs.readFileSync(path.join(ROOT, rel), "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.B1_WORDS;
}

function serializeB1(words) {
  const lines = ["const B1_WORDS = ["];
  for (let i = 0; i < words.length; i++) {
    const json = JSON.stringify(words[i], null, 2).replace(/\n/g, "\n  ");
    lines.push("  " + json + (i < words.length - 1 ? "," : ""));
  }
  lines.push("];", "", "window.B1_WORDS = B1_WORDS;", "");
  return lines.join("\n");
}

function parseFieldPath(field) {
  const parts = [];
  const re = /([^.[\]]+)|\[(\d+)\]/g;
  let m;
  while ((m = re.exec(field))) parts.push(m[1] !== undefined ? m[1] : Number(m[2]));
  return parts;
}

function getFieldValueRaw(entry, field) {
  if (!field || field === "lv") return entry.lv;
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

function formatVal(v) {
  if (Array.isArray(v)) return v.join(", ");
  if (v === undefined || v === null) return "";
  return String(v);
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

function preconditionMatch(actual, expected) {
  return String(actual ?? "") === String(expected ?? "");
}

function setAccentTokenAtField(root, field, value) {
  const token = Array.isArray(value) ? value[0] : value;
  const parts = parseFieldPath(field);
  let cur = root;
  for (let i = 0; i < parts.length - 2; i++) cur = cur[parts[i]];
  const colorKey = parts[parts.length - 2];
  const idx = parts[parts.length - 1];
  if (!Array.isArray(cur[colorKey])) {
    cur[colorKey] = typeof cur[colorKey] === "string" ? [cur[colorKey]] : [];
  }
  while (cur[colorKey].length <= idx) cur[colorKey].push("");
  cur[colorKey][idx] = token;
}

function removeAccentAtField(entry, field, staleToken) {
  const p = field.replace(/^study\./, "");
  const parts = parseFieldPath(p);
  const last = parts[parts.length - 1];
  const prev = parts[parts.length - 2];

  if (typeof last === "number" && ACCENT_COLORS.includes(prev)) {
    let cur = entry.study;
    for (let i = 0; i < parts.length - 2; i++) cur = cur[parts[i]];
    const arr = cur[prev];
    if (Array.isArray(arr)) {
      if (arr[last] === staleToken) {
        arr.splice(last, 1);
      } else {
        cur[prev] = arr.filter((x) => x !== staleToken);
      }
      return;
    }
  }

  let cur = entry.study;
  for (let i = 0; i < parts.length - 1; i++) cur = cur[parts[i]];
  const key = parts[parts.length - 1];
  if (typeof cur?.[key] === "string") {
    delete cur[key];
    return;
  }
  if (Array.isArray(cur?.[key])) {
    cur[key] = cur[key].filter((x) => x !== staleToken);
  }
}

function setFieldValue(entry, field, value, staleToken) {
  if (value === "__REMOVE_ACCENT__") {
    removeAccentAtField(entry, field, staleToken);
    return;
  }
  if (field.match(/\.(purple|green|blue|yellow|orange|red)\[\d+\]$/)) {
    setAccentTokenAtField(entry, field, value);
    return;
  }
  const parts = parseFieldPath(field.replace(/^study\./, ""));
  let cur = entry.study;
  for (let i = 0; i < parts.length - 1; i++) cur = cur[parts[i]];
  cur[parts[parts.length - 1]] = value;
}

function ownerFinalMatches(entry, repair) {
  const field = repair.repairField;
  if (repair.ownerFinalEn === "__REMOVE_ACCENT__") {
    const val = getFieldValueRaw(entry, field);
    const stale = repair.expectedCurrent;
    if (val === undefined || val === null) return true;
    if (typeof val === "string" && val !== stale) return true;
    if (Array.isArray(val) && !val.includes(stale)) return true;
    if (typeof val === "object" && !Array.isArray(val) && formatVal(val) !== stale) return true;
    return false;
  }
  const actual = formatVal(getFieldValueRaw(entry, field));
  const expected = String(repair.ownerFinalEn);
  if (actual === expected) return true;
  const raw = getFieldValueRaw(entry, field);
  if (Array.isArray(raw) && raw.some((x) => String(x) === expected)) return true;
  return false;
}

function getEnB1ValidatorReport() {
  let out;
  try {
    out = execSync("node scripts/validate-study-design.js --lang=en", { cwd: ROOT, encoding: "utf8" });
  } catch (e) {
    out = e.stdout || "";
  }
  const data = JSON.parse(out);
  const b1 = data.perFile.find((f) => f.file === "data/en/b1.js");
  return {
    sectionAccentIssues: b1?.sectionAccentIssues ?? null,
    examples: b1?.examples?.sectionAccentIssues ?? [],
  };
}

function runStructuralChecks(enAfter, deBefore, deAfter) {
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

  let orderParityOk = true;
  for (let i = 0; i < deAfter.length; i++) {
    if (deAfter[i].de !== enAfter[i].de) orderParityOk = false;
  }

  let deUnchanged = true;
  for (let i = 0; i < deBefore.length; i++) {
    if (JSON.stringify(deBefore[i]) !== JSON.stringify(deAfter[i])) deUnchanged = false;
  }

  const deDiff = execSync("git diff data/b1.js", { cwd: ROOT }).toString().trim();

  return {
    mirrorOk,
    syntaxOk,
    orderParityOk,
    deUnchanged,
    deReadOnly: deUnchanged && !deDiff,
    cardCount: enAfter.length,
  };
}

// --- MAIN ---
const repairsData = JSON.parse(fs.readFileSync(REPAIRS_JSON, "utf8"));
const repairs = repairsData.repairs;

if (repairs.length !== EXPECTED_REPAIRS) {
  console.error("Expected", EXPECTED_REPAIRS, "repairs, got", repairs.length);
  process.exit(1);
}

const validatorBeforeReport = getEnB1ValidatorReport();
const validatorBefore = validatorBeforeReport.sectionAccentIssues;
const deBefore = JSON.parse(JSON.stringify(load("data/b1.js")));
const enBeforeSerialized = fs.readFileSync(path.join(ROOT, "data/en/b1.js"), "utf8");
const en = load("data/en/b1.js");

const log = {
  generatedAt: new Date().toISOString(),
  mode: VERIFY_ONLY ? "verify-only" : "apply",
  ownerApprovedFindings: EXPECTED_REPAIRS,
  alreadyResolvedExcluded: EXCLUDED_ALREADY_RESOLVED,
  falsePositiveExcluded: EXCLUDED_FALSE_POSITIVE,
  repairs: [],
  preconditionPass: 0,
  preconditionFail: 0,
  preconditionMismatchDetails: [],
  logicalFindingsApplied: 0,
  physicalFieldsChanged: new Set(),
  uniqueCardsChanged: new Set(),
};

for (const r of repairs) {
  const entry = findEntry(en, r.productionId, r.productionIndex);
  if (!entry) {
    log.preconditionFail++;
    log.preconditionMismatchDetails.push({
      triageId: r.triageId,
      cardId: r.cardId,
      error: "card not found",
    });
    continue;
  }
  const actual = formatVal(getFieldValueRaw(entry, r.repairField));
  if (!preconditionMatch(actual, r.expectedCurrent)) {
    log.preconditionFail++;
    log.preconditionMismatchDetails.push({
      triageId: r.triageId,
      cardId: r.cardId,
      field: r.repairField,
      expectedCurrent: r.expectedCurrent,
      actualCurrent: actual,
      ownerFinalEn: r.ownerFinalEn,
      error: "PRECONDITION MISMATCH",
    });
    continue;
  }
  log.preconditionPass++;
  if (APPLY) {
    setFieldValue(entry, r.repairField, r.ownerFinalEn, r.expectedCurrent);
    log.logicalFindingsApplied++;
    log.physicalFieldsChanged.add(`${r.productionId}:${r.repairField}`);
    log.uniqueCardsChanged.add(r.productionId);
    log.repairs.push({
      triageId: r.triageId,
      cardId: r.cardId,
      productionId: r.productionId,
      repairField: r.repairField,
      expectedCurrent: r.expectedCurrent,
      ownerFinalEn: r.ownerFinalEn,
      applied: "PASS",
    });
  }
}

if (log.preconditionFail > 0) {
  console.error(JSON.stringify({ preconditionFail: log.preconditionFail, details: log.preconditionMismatchDetails }, null, 2));
  process.exit(1);
}

if (VERIFY_ONLY) {
  const out = {
    mode: "verify-only",
    repairsTotal: repairs.length,
    preconditionPass: log.preconditionPass,
    preconditionFail: log.preconditionFail,
    productionChanges: 0,
  };
  console.log(JSON.stringify(out, null, 2));
  process.exit(0);
}

const enSerialized = serializeB1(en);
fs.writeFileSync(path.join(ROOT, "data/en/b1.js"), enSerialized);
fs.writeFileSync(path.join(ROOT, "www/data/en/b1.js"), enSerialized);

const enAfter = load("data/en/b1.js");
const deAfter = load("data/b1.js");

let ownerVerified = 0;
const mismatches = [];
for (const r of repairs) {
  const entry = findEntry(enAfter, r.productionId, r.productionIndex);
  if (!entry) {
    mismatches.push({ triageId: r.triageId, reason: "missing after apply" });
    continue;
  }
  if (ownerFinalMatches(entry, r)) ownerVerified++;
  else {
    mismatches.push({
      triageId: r.triageId,
      cardId: r.cardId,
      field: r.repairField,
      expected: r.ownerFinalEn,
      actual: formatVal(getFieldValueRaw(entry, r.repairField)),
    });
  }
}

const excludedChecks = {};
for (const id of EXCLUDED_ALREADY_RESOLVED) {
  const before = findEntry(load("data/en/b1.js"), id);
  const entryBefore = JSON.parse(JSON.stringify(findEntry(JSON.parse(JSON.stringify(en)), id)));
  excludedChecks[id] = {
    unchangedInDiff: !execSync("git diff data/en/b1.js", { cwd: ROOT }).toString().includes(id),
    stillPresent: !!findEntry(enAfter, id),
  };
}

const einerleiDiff = execSync("git diff data/en/b1.js", { cwd: ROOT }).toString().includes(EXCLUDED_FALSE_POSITIVE);

const structural = runStructuralChecks(enAfter, deBefore, deAfter);
const validatorAfterReport = getEnB1ValidatorReport();
const validatorAfter = validatorAfterReport.sectionAccentIssues;
const validatorExamples = validatorAfterReport.examples;

const isEinerleiFp = (e) =>
  String(e.de || "").toLowerCase() === "einerlei" ||
  (String(e.term || "").includes("matter") && String(e.de || "").toLowerCase() === "einerlei");

const validatedRealRemaining = validatorExamples.filter((e) => !isEinerleiFp(e)).length;

const unexpectedFindings = validatorExamples.filter((e) => !isEinerleiFp(e));

// Idempotence: second run should not change production
const enAfterFirst = fs.readFileSync(path.join(ROOT, "data/en/b1.js"), "utf8");
const enSecond = JSON.parse(JSON.stringify(enAfter));
for (const r of repairs) {
  const entry = findEntry(enSecond, r.productionId, r.productionIndex);
  if (!entry) continue;
  const actual = formatVal(getFieldValueRaw(entry, r.repairField));
  if (preconditionMatch(actual, r.expectedCurrent)) {
    setFieldValue(entry, r.repairField, r.ownerFinalEn, r.expectedCurrent);
  }
}
const enSecondSerialized = serializeB1(enSecond);
const secondRunDiff = enAfterFirst !== enSecondSerialized ? 1 : 0;

log.physicalFieldsChanged = log.physicalFieldsChanged.size;
log.uniqueCardsChanged = log.uniqueCardsChanged.size;
log.verification = {
  ownerFindingsVerified: ownerVerified,
  ownerFindingsAppliedCorrectly: ownerVerified,
  mismatches: mismatches.length,
  mismatchDetails: mismatches,
  excludedAlreadyResolved: excludedChecks,
  falsePositiveChanged: einerleiDiff,
  validatorBefore,
  validatorAfter,
  validatedRealRemaining,
  unexpectedFindings: unexpectedFindings.length,
  unexpectedFindingDetails: unexpectedFindings,
  secondRunProductionDiff: secondRunDiff,
  ...structural,
};

log.status =
  ownerVerified === EXPECTED_REPAIRS &&
  mismatches.length === 0 &&
  structural.syntaxOk &&
  structural.mirrorOk &&
  structural.deReadOnly &&
  structural.cardCount === EXPECTED_CARD_COUNT &&
  structural.orderParityOk &&
  validatedRealRemaining === 0 &&
  unexpectedFindings.length === 0 &&
  !einerleiDiff &&
  secondRunDiff === 0
    ? "EN–DE B1 SECTIONACCENT OUT-OF-SCOPE REPAIR — COMPLETE"
    : "EN–DE B1 SECTIONACCENT OUT-OF-SCOPE REPAIR — INCOMPLETE";

fs.writeFileSync(LOG_JSON, JSON.stringify(log, null, 2));

const micro = {
  generatedAt: new Date().toISOString(),
  status: "NOT STARTED",
  scope: "24 OWNER-approved sectionAccent out-of-scope repairs only",
  parentRepair: log.status,
  findingsScope: EXPECTED_REPAIRS,
  repairs: repairs.map((r) => ({
    triageId: r.triageId,
    cardId: r.cardId,
    productionId: r.productionId,
    productionIndex: r.productionIndex,
    repairField: r.repairField,
    expectedCurrent: r.expectedCurrent,
    ownerFinalEn: r.ownerFinalEn,
    ownerVerdict: r.ownerVerdict,
  })),
  excludedAlreadyResolved: EXCLUDED_ALREADY_RESOLVED,
  excludedFalsePositive: EXCLUDED_FALSE_POSITIVE,
  note: "Targeted micro-regression audit pending — scope: only 24 OWNER-approved repairs",
};
fs.writeFileSync(MICRO_JSON, JSON.stringify(micro, null, 2));

const md = [
  "# EN–DE B1 SECTIONACCENT OUT-OF-SCOPE REPAIR",
  "",
  `**Generated:** ${log.generatedAt}`,
  "",
  "## Input",
  "",
  "| Metric | Value |",
  "| --- | --- |",
  `| Validated REAL issues | 26 |`,
  `| OWNER LABOT | 24 |`,
  `| ALREADY RESOLVED | 2 |`,
  `| Known FALSE POSITIVE | 1 |`,
  "",
  "## Production",
  "",
  "| Metric | Value |",
  "| --- | --- |",
  `| OWNER-approved findings processed | ${log.logicalFindingsApplied}/24 |`,
  `| Applied correctly | ${ownerVerified}/24 |`,
  `| Physical fields changed | ${log.physicalFieldsChanged} |`,
  `| Unique cards changed | ${log.uniqueCardsChanged} |`,
  `| Mismatches | ${mismatches.length} |`,
  "",
  "## Excluded",
  "",
  `- b1-folge / series: ALREADY RESOLVED / unchanged`,
  `- b1-griff / grip: ALREADY RESOLVED / unchanged`,
  `- b1-einerlei: FALSE POSITIVE / unchanged (${einerleiDiff ? "CHANGED — FAIL" : "PASS"})`,
  "",
  "## Validator",
  "",
  "| Metric | Value |",
  "| --- | --- |",
  `| Before repair raw findings | ${validatorBefore ?? "unknown"} |`,
  `| After repair raw findings | ${validatorAfter ?? "unknown"} |`,
  `| Validated REAL findings remaining | ${validatedRealRemaining} |`,
  `| Known FALSE POSITIVE remaining | ${validatorAfter === 1 ? 1 : 0} |`,
  `| Unexpected findings | ${unexpectedFindings.length} |`,
  "",
  "## Validation",
  "",
  "| Check | Result |",
  "| --- | --- |",
  `| JavaScript syntax | ${structural.syntaxOk ? "PASS" : "FAIL"} |`,
  `| Mirror parity | ${structural.mirrorOk ? "PASS" : "FAIL"} |`,
  `| Order parity | ${structural.orderParityOk ? "PASS" : "FAIL"} |`,
  `| Card count | ${structural.cardCount} |`,
  `| DE READ-ONLY | ${structural.deReadOnly ? "PASS" : "FAIL"} |`,
  "",
  "## Idempotence",
  "",
  `| Check | Result |`,
  "| --- | --- |",
  `| OWNER FINAL verification | ${ownerVerified}/24 ${ownerVerified === 24 ? "PASS" : "FAIL"} |`,
  `| Second-run production diff | ${secondRunDiff} |`,
  "",
  `**Status:** ${log.status}`,
  "",
  "SECTIONACCENT TARGETED MICRO-REGRESSION: NOT STARTED",
  "HIGH REPAIR / REGRESSION CHAIN: CLOSED",
  "EN–DE B1 FINAL DATASET: NOT CLOSED",
];
fs.writeFileSync(REPORT_MD, md.join("\n"));

console.log(
  JSON.stringify(
    {
      logicalFindingsApplied: log.logicalFindingsApplied,
      ownerVerified,
      mismatches: mismatches.length,
      physicalFieldsChanged: log.physicalFieldsChanged,
      validatorBefore,
      validatorAfter,
      validatedRealRemaining,
      secondRunDiff,
      status: log.status,
    },
    null,
    2
  )
);

if (log.status !== "EN–DE B1 SECTIONACCENT OUT-OF-SCOPE REPAIR — COMPLETE") {
  console.error(JSON.stringify({ mismatches, unexpectedFindings }, null, 2));
  process.exit(1);
}
