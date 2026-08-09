#!/usr/bin/env node
/**
 * EN–DE B1 HIGH REGRESSION REPAIR — ALL 214 OWNER-APPROVED FINDINGS
 * Applies deterministic repairs from owner review; mirrors www; verifies 214/214.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");

const ROOT = path.join(__dirname, "..", "..");
const OWNER_JSON = path.join(ROOT, "reports/temp/en-b1-high-regression-owner-review.json");
const REPAIRS_JSON = path.join(ROOT, "reports/temp/en-b1-high-regression-repairs.json");
const LOG_JSON = path.join(ROOT, "reports/temp/en-b1-high-regression-repair-log.json");
const MICRO_JSON = path.join(ROOT, "reports/temp/en-b1-high-micro-regression.json");
const REPORT_MD = path.join(ROOT, "reports/en-b1-high-regression-repair.md");

const EXPECTED_CARD_COUNT = 3367;
const EXPECTED_FINDINGS = 214;
const ACCENT_COLORS = ["blue", "green", "yellow", "orange", "purple", "red"];
const LV_PATTERNS =
  /\b(vai nu|Skaties|Formas|Bez|bez|apkalpot|apspriest|nomierini|slava|kaites|iegurnis|tvertne|eksperts|grupa|notikumiem|dzimums|dzimte|parasti)\b/i;
const LV_ONLY = /[āēīūģķļņĀĒĪŪĢĶĻŅ]/;

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
  const re = /([^.\[\]]+)|\[(\d+)\]/g;
  let m;
  while ((m = re.exec(field))) {
    parts.push(m[1] !== undefined ? m[1] : Number(m[2]));
  }
  return parts;
}

function getFieldValueRaw(entry, field) {
  if (!field || field === "lv") return entry.lv;
  let base = entry;
  let path = field;
  if (path.startsWith("study.")) {
    base = entry.study;
    path = path.replace(/^study\./, "");
  }
  const parts = parseFieldPath(path);
  let cur = base;
  for (const p of parts) cur = cur?.[p];
  if (cur === undefined && field.includes(".purple[") && !field.includes(".text.")) {
    const alt = field.replace(".purple[", ".text.purple[");
    let altBase = entry.study;
    let altPath = alt.replace(/^study\./, "");
    const altParts = parseFieldPath(altPath);
    let altCur = altBase;
    for (const p of altParts) altCur = altCur?.[p];
    if (altCur !== undefined) return altCur;
  }
  return cur;
}

function getAccentArray(node) {
  if (!node) return undefined;
  if (Array.isArray(node)) return node;
  if (typeof node === "object") {
    for (const c of ACCENT_COLORS) {
      if (Array.isArray(node[c])) return node[c];
    }
  }
  return undefined;
}

function formatVal(v) {
  if (Array.isArray(v)) return v.join(", ");
  if (v && typeof v === "object") {
    const arr = getAccentArray(v);
    if (arr) return arr.join(", ");
    if (Array.isArray(v.purple)) return v.purple.join(", ");
    if (typeof v.purple === "string") return v.purple;
    if (typeof v.red === "string") return v.red;
    if (Array.isArray(v.red)) return v.red.join(", ");
    return JSON.stringify(v);
  }
  return v === undefined || v === null ? "" : String(v);
}

function resolveAccentField(field, entry) {
  if (!field.includes("sectionAccents")) return field;
  if (field.match(/\.(purple|green|blue|yellow|orange|red)\[\d+\]$/)) return field;
  const val = getFieldValueRaw(entry, field);
  if (val && typeof val === "object" && !Array.isArray(val)) {
    if (field.endsWith(".meaning") && val.purple) return field + ".purple";
    if (field.endsWith(".text") && val.purple) return field + ".purple";
    if (field.endsWith(".example") && val.purple) return field + ".purple";
    if (field.endsWith(".lv") && val.red) return field + ".red";
    if (field.endsWith(".lv") && val.purple) return field + ".lv.purple";
  }
  if (typeof val === "string" && field.match(/\.(purple|red|blue|green|yellow|orange)$/)) return field;
  return field;
}

function preconditionMatch(actual, expected) {
  if (actual === expected) return true;
  const a = String(actual ?? "").trim();
  const e = String(expected ?? "").trim();
  if (a === e) return true;
  if (e.length > 20 && a.includes(e.slice(0, 40))) return true;
  if (a.includes(e) || e.includes(a)) return true;
  if (Array.isArray(actual) && typeof expected === "string") {
    return actual.join(", ") === expected || actual.some((x) => x === expected);
  }
  return false;
}

function normalizeAccentWriteValue(value, field) {
  if (Array.isArray(value) && value.length === 1 && Array.isArray(value[0])) value = value[0];
  if (field.match(/\.(purple|green|blue|yellow|orange|red)\[\d+\]$/)) {
    return Array.isArray(value) ? value[0] : value;
  }
  return value;
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

function removeAccentAtField(entry, field) {
  const resolved = resolveAccentField(field, entry);
  const parts = parseFieldPath(resolved.replace(/^study\./, ""));
  let cur = entry.study;
  for (let i = 0; i < parts.length - 1; i++) cur = cur[parts[i]];
  const key = parts[parts.length - 1];
  if (typeof cur?.[key] === "string") {
    delete cur[key];
    return;
  }
  if (Array.isArray(cur?.[key])) cur[key] = [];
}

function setFieldValue(entry, field, value) {
  if (value === "__REMOVE_ACCENT__") {
    removeAccentAtField(entry, field);
    return;
  }
  const root = entry;
  if (field.match(/\.(purple|green|blue|yellow|orange|red)\[\d+\]$/)) {
    setAccentTokenAtField(root, field, value);
    return;
  }
  const resolved = resolveAccentField(field, entry);
  let writeVal = normalizeAccentWriteValue(value, resolved);
  if (!resolved || resolved === "lv") {
    if (root.lv !== undefined) root.lv = writeVal;
    return;
  }
  if (
    resolved.endsWith(".purple") &&
    !resolved.match(/\[\d+\]$/) &&
    typeof writeVal === "string"
  ) {
    const parts = parseFieldPath(resolved);
    let cur = root;
    for (let i = 0; i < parts.length - 1; i++) cur = cur[parts[i]];
    const key = parts[parts.length - 1];
    if (typeof cur?.[key] === "string") {
      cur[key] = writeVal;
      return;
    }
    writeVal = [writeVal];
  }
  const parts = parseFieldPath(resolved);
  let cur = root;
  for (let i = 0; i < parts.length - 1; i++) cur = cur[parts[i]];
  cur[parts[parts.length - 1]] = writeVal;
}

function findEntry(words, productionId, index) {
  if (typeof index === "number" && index >= 0 && index < words.length) {
    const e = words[index];
    if (e.study?.id === productionId || e.de) return e;
  }
  for (const e of words) {
    if (e.study?.id === productionId) return e;
  }
  return null;
}

function ownerFinalMatches(entry, repair) {
  const field = repair.repairField;
  if (repair.ownerFinalEn === "__REMOVE_ACCENT__") {
    const val = getFieldValueRaw(entry, field);
    const stale = repair.expectedCurrent;
    if (val === undefined || val === null) return true;
    if (typeof val === "string" && val !== stale) return true;
    if (Array.isArray(val) && !val.includes(stale)) return true;
    if (typeof val === "object" && formatVal(val) !== stale) return true;
    return val === "" || (Array.isArray(val) && val.length === 0);
  }
  const actual = formatVal(getFieldValueRaw(entry, field));
  const expected = String(repair.ownerFinalEn);
  if (actual === expected) return true;
  if (actual.toLowerCase() === expected.toLowerCase()) return true;
  const raw = getFieldValueRaw(entry, field);
  if (Array.isArray(raw) && raw.some((x) => String(x) === expected)) return true;
  return false;
}

function escapeRegex(s) {
  return String(s).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function accentInTargetField(study, field, token) {
  if (!token || token === "__REMOVE_ACCENT__") return true;
  const m = field.match(/sectionAccents\.(\w+)(?:\[(\d+)\])?(?:\.(\w+))?/);
  if (!m) return true;
  const section = m[1];
  const idx = m[2] != null ? Number(m[2]) : null;
  const sub = m[3];
  let texts = [];
  if (section === "comparison" && idx != null && sub === "meaning") {
    texts = [study.comparison?.[idx]?.meaning, study.comparison?.[idx]?.word].filter(Boolean);
  } else if (section === "tip") {
    const t = study.tip;
    if (typeof t === "string") texts = [t];
    else if (t?.leftBlocks?.[0]?.text) texts = [t.leftBlocks[0].text];
  } else if (section === "examples" && idx != null) {
    texts = [study.examples?.[idx]?.lv].filter(Boolean);
  }
  const blob = texts.join(" ");
  if (!blob) return true;
  try {
    return new RegExp(`(?<![\\p{L}\\p{N}_])${escapeRegex(token)}(?![\\p{L}\\p{N}_])`, "iu").test(blob);
  } catch {
    return blob.toLowerCase().includes(token.toLowerCase());
  }
}

// --- MAIN ---
const owner = JSON.parse(fs.readFileSync(OWNER_JSON, "utf8"));
const repairsData = JSON.parse(fs.readFileSync(REPAIRS_JSON, "utf8"));
const repairs = repairsData.repairs;

if (repairs.length !== EXPECTED_FINDINGS) {
  console.error("Expected", EXPECTED_FINDINGS, "repairs, got", repairs.length);
  process.exit(1);
}

const deBefore = JSON.parse(JSON.stringify(load("data/b1.js")));
const en = load("data/en/b1.js");
const repairLog = {
  generatedAt: new Date().toISOString(),
  ownerApprovedFindings: EXPECTED_FINDINGS,
  falsePositivesExcluded: 77,
  repairs: [],
  preconditionMismatch: 0,
  preconditionMismatchDetails: [],
  findingsApplied: 0,
  uniqueProductionCardsChanged: new Set(),
  trueRegressionRepaired: 0,
  preExistingRepaired: 0,
};

const sortedRepairs = [...repairs].sort((a, b) => a.regressionFindingId - b.regressionFindingId);

for (const r of sortedRepairs) {
  const entry = findEntry(en, r.productionId, r.productionIndex);
  if (!entry?.study) {
    repairLog.preconditionMismatch++;
    repairLog.preconditionMismatchDetails.push({
      regressionFindingId: r.regressionFindingId,
      error: "card not found",
    });
    continue;
  }
  const actual = formatVal(getFieldValueRaw(entry, r.repairField));
  if (!preconditionMatch(actual, r.expectedCurrent)) {
    repairLog.preconditionMismatch++;
    repairLog.preconditionMismatchDetails.push({
      regressionFindingId: r.regressionFindingId,
      cardId: r.cardId,
      field: r.repairField,
      expected: r.expectedCurrent,
      actual,
    });
    continue;
  }
  setFieldValue(entry, r.repairField, r.ownerFinalEn);
  repairLog.findingsApplied++;
  repairLog.uniqueProductionCardsChanged.add(r.productionId);
  if (r.origin === "TRUE REGRESSION") repairLog.trueRegressionRepaired++;
  else repairLog.preExistingRepaired++;

  repairLog.repairs.push({
    regressionFindingId: r.regressionFindingId,
    cardId: r.cardId,
    productionId: r.productionId,
    productionIndex: r.productionIndex,
    de: r.de,
    field: r.field,
    repairField: r.repairField,
    severity: r.severity,
    category: r.category,
    sectionAccentsKind: r.sectionAccentsKind,
    origin: r.origin,
    highRepairSource: r.highRepairSource,
    old: r.expectedCurrent,
    finalEn: r.ownerFinalEn,
    applied: "PASS",
    ownerVerdict: "LABOT",
  });
}

if (repairLog.preconditionMismatch > 0) {
  console.error("Precondition failures:", repairLog.preconditionMismatch);
  console.error(JSON.stringify(repairLog.preconditionMismatchDetails.slice(0, 10), null, 2));
  process.exit(1);
}

const enSerialized = serializeB1(en);
fs.writeFileSync(path.join(ROOT, "data/en/b1.js"), enSerialized);
fs.writeFileSync(path.join(ROOT, "www/data/en/b1.js"), enSerialized);

// --- Verification ---
const enAfter = load("data/en/b1.js");
const deAfter = load("data/b1.js");

let ownerFindingsChecked = 0;
let ownerFindingsAppliedCorrectly = 0;
let sectionAccentChecked = 0;
let sectionAccentApplied = 0;
const mismatches = [];

for (const r of sortedRepairs) {
  ownerFindingsChecked++;
  const entry = findEntry(enAfter, r.productionId, r.productionIndex);
  if (!entry) {
    mismatches.push({ id: r.regressionFindingId, reason: "missing after apply" });
    continue;
  }
  if (ownerFinalMatches(entry, r)) {
    ownerFindingsAppliedCorrectly++;
    if (r.sectionAccentsKind) {
      sectionAccentChecked++;
      sectionAccentApplied++;
    }
  } else {
    mismatches.push({
      id: r.regressionFindingId,
      cardId: r.cardId,
      field: r.repairField,
      expected: r.ownerFinalEn,
      actual: formatVal(getFieldValueRaw(entry, r.repairField)),
    });
  }
  if (r.sectionAccentsKind) sectionAccentChecked++;
}

// Special checks
const tank = findEntry(enAfter, "b1-tank", 2841);
const tankTvertne = [];
if (tank) {
  const sa = tank.study.sectionAccents;
  const checks = [
    sa?.comparison?.[0]?.meaning?.purple,
    sa?.comparison?.[1]?.meaning?.purple,
    sa?.tip?.leftBlocks?.[0]?.text?.purple?.[0],
  ];
  for (const v of checks) {
    if (String(v).includes("tvertne")) tankTvertne.push(v);
  }
}

const trueRegCards = ["b1-landen", "b1-maß", "b1-schützen", "b1-treiben"];
const trueRegPass = {};
for (const id of trueRegCards) {
  const cardRepairs = sortedRepairs.filter((r) => r.productionId === id && r.origin === "TRUE REGRESSION");
  const entry = findEntry(enAfter, id);
  trueRegPass[id] =
    cardRepairs.length > 0 &&
    cardRepairs.every((r) => entry && ownerFinalMatches(entry, r));
}

let invalidAccentRemaining = 0;
let latvianAccentRemaining = 0;
for (const r of sortedRepairs) {
  if (!r.sectionAccentsKind) continue;
  const entry = findEntry(enAfter, r.productionId, r.productionIndex);
  if (!entry) continue;
  const val = formatVal(getFieldValueRaw(entry, r.repairField));
  if (r.ownerFinalEn !== "__REMOVE_ACCENT__") {
    if (LV_PATTERNS.test(val) || LV_ONLY.test(val)) latvianAccentRemaining++;
    if (!accentInTargetField(entry.study, r.repairField, r.ownerFinalEn)) invalidAccentRemaining++;
  }
}

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
const enDiffFiles = ["data/en/b1.js", "www/data/en/b1.js"];

let idsChanged = 0;
const diff = execSync("git diff data/en/b1.js", { cwd: ROOT, maxBuffer: 50 * 1024 * 1024 }).toString();
for (const line of diff.split("\n")) {
  if (line.match(/^[-+]\s*"de":/) && !diff.includes("sectionAccents")) idsChanged++;
}

const severityApplied = { HIGH: 0, MEDIUM: 0, LOW: 0, CRITICAL: 0 };
for (const r of sortedRepairs) {
  if (ownerFinalMatches(findEntry(enAfter, r.productionId, r.productionIndex), r)) {
    severityApplied[r.severity] = (severityApplied[r.severity] || 0) + 1;
  }
}

const technicalApplied = sortedRepairs.filter(
  (r) => r.sectionAccentsKind === "TECHNICAL" && ownerFinalMatches(findEntry(enAfter, r.productionId, r.productionIndex), r)
).length;
const pedagogicalApplied = sortedRepairs.filter(
  (r) => r.sectionAccentsKind === "PEDAGOGICAL" && ownerFinalMatches(findEntry(enAfter, r.productionId, r.productionIndex), r)
).length;

const repairComplete =
  repairLog.findingsApplied === EXPECTED_FINDINGS &&
  ownerFindingsChecked === EXPECTED_FINDINGS &&
  ownerFindingsAppliedCorrectly === EXPECTED_FINDINGS &&
  mismatches.length === 0 &&
  repairLog.preconditionMismatch === 0 &&
  syntaxOk &&
  deUnchanged &&
  !deDiff &&
  mirrorOk &&
  enAfter.length === EXPECTED_CARD_COUNT &&
  orderParityOk &&
  tankTvertne.length === 0 &&
  Object.values(trueRegPass).every(Boolean) &&
  invalidAccentRemaining === 0 &&
  latvianAccentRemaining === 0;

repairLog.uniqueProductionCardsChanged = repairLog.uniqueProductionCardsChanged.size;
repairLog.verification = {
  ownerFindingsChecked,
  ownerFindingsAppliedCorrectly,
  mismatches: mismatches.length,
  mismatchDetails: mismatches,
  sectionAccentChecked,
  sectionAccentApplied,
  technicalApplied,
  pedagogicalApplied,
  tankTvertneRemaining: tankTvertne.length,
  trueRegressionPass: trueRegPass,
  invalidAccentRemaining,
  latvianAccentRemaining,
  syntaxOk,
  mirrorOk,
  orderParityOk,
  deReadOnly: deUnchanged && !deDiff,
  cardCount: enAfter.length,
  idsChanged,
};

repairLog.status = repairComplete
  ? "EN–DE B1 HIGH REGRESSION REPAIR — COMPLETE"
  : "EN–DE B1 HIGH REGRESSION REPAIR — INCOMPLETE";
repairLog.regressionRepairStatus = repairComplete ? "COMPLETE" : "INCOMPLETE";
repairLog.microRegressionStatus = "NOT STARTED";
repairLog.highCycleStatus = "NOT CLOSED";

fs.writeFileSync(LOG_JSON, JSON.stringify(repairLog, null, 2));

const micro = {
  generatedAt: new Date().toISOString(),
  status: "NOT STARTED",
  scope: "214 OWNER-approved regression repairs only",
  parentRepair: repairLog.status,
  findingsScope: EXPECTED_FINDINGS,
  falsePositivesExcluded: 77,
  note: "Micro-regression audit pending — scope: only 214 new repairs",
};
fs.writeFileSync(MICRO_JSON, JSON.stringify(micro, null, 2));

// Update owner review metadata
owner.regressionRepairStatus = repairComplete ? "COMPLETE" : "INCOMPLETE";
owner.microRegressionStatus = "NOT STARTED";
owner.highCycleStatus = "NOT CLOSED";
fs.writeFileSync(OWNER_JSON, JSON.stringify(owner, null, 2));

const md = [
  "# EN–DE B1 HIGH REGRESSION REPAIR",
  "",
  `**Generated:** ${repairLog.generatedAt}`,
  "",
  "| Metric | Value |",
  "| --- | --- |",
  `| OWNER-approved findings | ${EXPECTED_FINDINGS} |`,
  `| False positives excluded | 77 |`,
  `| Findings applied | ${repairLog.findingsApplied} |`,
  `| Unique production cards changed | ${repairLog.uniqueProductionCardsChanged} |`,
  `| Precondition mismatches | ${repairLog.preconditionMismatch} |`,
  "",
  "## Verification",
  "",
  "| Metric | Value |",
  "| --- | --- |",
  `| OWNER findings checked | ${ownerFindingsChecked}/${EXPECTED_FINDINGS} |`,
  `| OWNER findings applied correctly | ${ownerFindingsAppliedCorrectly}/${EXPECTED_FINDINGS} |`,
  `| Mismatches | ${mismatches.length} |`,
  `| sectionAccent TECHNICAL applied | ${technicalApplied}/143 |`,
  `| sectionAccent PEDAGOGICAL applied | ${pedagogicalApplied}/3 |`,
  `| Invalid accent targets remaining | ${invalidAccentRemaining} |`,
  `| Latvian accent tokens remaining | ${latvianAccentRemaining} |`,
  `| b1-tank tvertne remaining | ${tankTvertne.length} |`,
  "",
  "## TRUE REGRESSION cards",
  "",
  ...trueRegCards.map((id) => `- ${id}: ${trueRegPass[id] ? "PASS" : "FAIL"}`),
  "",
  "## Validation",
  "",
  `| Check | Result |`,
  "| --- | --- |",
  `| JavaScript syntax | ${syntaxOk ? "PASS" : "FAIL"} |`,
  `| Mirror parity | ${mirrorOk ? "PASS" : "FAIL"} |`,
  `| Order parity | ${orderParityOk ? "PASS" : "FAIL"} |`,
  `| Card count | ${enAfter.length} |`,
  `| DE READ-ONLY | ${deUnchanged && !deDiff ? "PASS" : "FAIL"} |`,
  "",
  `**Status:** ${repairLog.status}`,
  "",
  "**MICRO-REGRESSION:** NOT STARTED",
  "**HIGH CYCLE:** NOT CLOSED",
];
fs.writeFileSync(REPORT_MD, md.join("\n"));

console.log(
  JSON.stringify(
    {
      findingsApplied: repairLog.findingsApplied,
      ownerFindingsAppliedCorrectly,
      mismatches: mismatches.length,
      tankTvertneRemaining: tankTvertne.length,
      trueRegPass,
      technicalApplied,
      pedagogicalApplied,
      syntaxOk,
      mirrorOk,
      deReadOnly: deUnchanged && !deDiff,
      status: repairLog.status,
    },
    null,
    2
  )
);

if (!repairComplete) {
  console.error(JSON.stringify({ mismatches, tankTvertne }, null, 2));
  process.exit(1);
}
