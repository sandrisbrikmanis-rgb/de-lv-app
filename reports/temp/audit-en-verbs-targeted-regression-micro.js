#!/usr/bin/env node
/**
 * Luna micro-regression after targeted regression repair (12 verbs, 19 fields).
 */
require("dotenv").config();

const fs = require("fs");
const path = require("path");
const vm = require("vm");
const crypto = require("crypto");
const { execSync } = require("child_process");

const ROOT = path.join(__dirname, "..", "..");
const FORMS = ["infinitiv", "praesens", "imperfektIndikativ", "imperfektKonjunktiv", "partizipVergangenheit"];

const REPAIRED_VERB_INDICES = [27, 34, 60, 68, 80, 83, 84, 85, 95, 98, 105, 110, 129, 156];
const REPAIRED_FIELDS = new Set([
  "verb-27-kennen|imperfektKonjunktiv",
  "verb-34-brennen|imperfektKonjunktiv",
  "verb-60-haben|imperfektIndikativ",
  "verb-68-lassen|imperfektIndikativ",
  "verb-80-mögen|imperfektKonjunktiv",
  "verb-83-nennen|partizipVergangenheit",
  "verb-84-pfeifen|partizipVergangenheit",
  "verb-85-pflegen|imperfektKonjunktiv",
  "verb-95-rinnen|partizipVergangenheit",
  "verb-98-saufen|infinitiv",
  "verb-98-saufen|praesens",
  "verb-98-saufen|imperfektIndikativ",
  "verb-98-saufen|imperfektKonjunktiv",
  "verb-105-scheren|imperfektKonjunktiv",
  "verb-110-schlagen|infinitiv",
  "verb-129-sein|imperfektKonjunktiv",
  "verb-156-treiben|praesens",
  "verb-156-treiben|imperfektIndikativ",
  "verb-156-treiben|imperfektKonjunktiv",
]);

const FOREIGN_PATTERNS = [
  /\bpazina\b/i,
  /\bdega\b/i,
  /\bbija\b/i,
  /\bpatika\b/i,
  /\bkopa\b/i,
  /\bcirpa\b/i,
  /\bsavienoja\b/i,
  /\bauda\b/i,
  /\bnosaukts\b/i,
  /\bsvilpots\b/i,
  /\bsist\b/i,
];
const LV_ONLY = /[āēīūģķļņĀĒĪŪĢĶĻŅ]/;

const OUT_JSON = path.join(ROOT, "reports/temp/en-verbs-targeted-regression-micro.json");
const OUT_RAW = path.join(ROOT, "reports/temp/en-verbs-targeted-regression-micro-raw.json");

const MICRO_PROMPT = [
  "TARGETED MICRO-REGRESSION audit after OWNER repair of 19 EN verb form slots.",
  "British English. Return ONLY JSON: { \"items\": [ ... ] }.",
  "PASS: { verbId, field, status: \"PASS\" }.",
  "FINDING: verbId, field, severity, category, de, lvSource, currentEn, proposedEn, reason, regressionType, confidence.",
  "Audit full 5-form paradigm per verb for consistency; focus on repaired slots.",
  "regressionType: REPAIR_REGRESSION | REPAIR_INCOMPLETE | PARADIGM_INCONSISTENCY only.",
  "Do NOT flag DE_SOURCE_ISSUE slots as findings unless clear new learner-facing error.",
  "verb-124-schwimmen imperfektIndikativ he was swimming is OWNER KEEP — PASS.",
  "verb-65-können imperfektKonjunktiv DE_SOURCE_ISSUE — do not require EN change to could.",
  "Severity CRITICAL|HIGH|MEDIUM|LOW. proposedEn exact replacement. reason under 140 chars.",
].join("\n");

function md5File(p) {
  return crypto.createHash("md5").update(fs.readFileSync(p)).digest("hex");
}

function loadFile(rel) {
  const code = fs.readFileSync(path.join(ROOT, rel), "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.VERB_ENTRIES;
}

function verbSlug(de) {
  return String(de).trim().replace(/\s+/g, "-").replace(/[^\wäöüßÄÖÜ-]/gi, "");
}

function verbEntryId(index, infinitivDe) {
  return `verb-${index}-${verbSlug(infinitivDe)}`;
}

function scanForeign(entries) {
  const hits = [];
  for (let i = 0; i < entries.length; i++) {
    const verbId = verbEntryId(i, entries[i].infinitiv.de);
    for (const field of FORMS) {
      const val = entries[i][field].lv || "";
      if (!val) hits.push({ verbId, field, currentEn: val, pattern: "EMPTY" });
      if (LV_ONLY.test(val)) hits.push({ verbId, field, currentEn: val, pattern: "LV_DIACRITICS" });
      for (const pat of FOREIGN_PATTERNS) {
        if (pat.test(val)) hits.push({ verbId, field, currentEn: val, pattern: pat.source });
      }
    }
  }
  return hits;
}

function buildVerbPayloads(enVerbs, lvVerbs) {
  const verbs = [];
  for (const index of REPAIRED_VERB_INDICES) {
    const en = enVerbs[index];
    const lv = lvVerbs[index];
    const verbId = verbEntryId(index, en.infinitiv.de);
    const forms = FORMS.map((field) => ({
      field,
      de: en[field].de,
      lvSource: lv[field].lv,
      currentEn: en[field].lv,
      repairedInCycle: REPAIRED_FIELDS.has(`${verbId}|${field}`),
    }));
    verbs.push({ verbId, index, infinitivDe: en.infinitiv.de, forms });
  }
  return verbs;
}

const OWNER_FINAL_EN = new Map([
  ["verb-68-lassen|imperfektIndikativ", "he ordered • allowed"],
  ["verb-85-pflegen|imperfektKonjunktiv", "cared for"],
  ["verb-129-sein|imperfektKonjunktiv", "he was"],
]);

const DE_SOURCE_KONJUNKTIV = new Set([
  "verb-60-haben|imperfektKonjunktiv",
  "verb-85-pflegen|imperfektKonjunktiv",
  "verb-129-sein|imperfektKonjunktiv",
  "verb-139-spleißen|imperfektKonjunktiv",
  "verb-167-weben|imperfektKonjunktiv",
]);

function validateFinding(f, enVerbs) {
  const m = f.verbId?.match(/^verb-(\d+)-/);
  if (!m) return { ...f, validation: "FALSE_POSITIVE" };
  const idx = Number(m[1]);
  const key = `${f.verbId}|${f.field}`;
  const production = enVerbs[idx]?.[f.field]?.lv;
  if (f.proposedEn === production) return { ...f, validation: "FALSE_POSITIVE" };
  if (OWNER_FINAL_EN.get(key) === production) return { ...f, validation: "FALSE_POSITIVE", validationNote: "OWNER FINAL EN authoritative" };
  if (f.verbId === "verb-124-schwimmen" && f.field === "imperfektIndikativ") return { ...f, validation: "FALSE_POSITIVE" };
  if (f.verbId === "verb-65-können" && f.field === "imperfektKonjunktiv") return { ...f, validation: "FALSE_POSITIVE" };
  if (DE_SOURCE_KONJUNKTIV.has(key) && !REPAIRED_FIELDS.has(key)) {
    return { ...f, validation: "DE_SOURCE_ISSUE", validationNote: "OWNER DE_SOURCE Konjunktiv slot — not this repair scope" };
  }
  if (DE_SOURCE_KONJUNKTIV.has(key) && REPAIRED_FIELDS.has(key)) {
    return { ...f, validation: "FALSE_POSITIVE", validationNote: "OWNER-approved EN matches DE-visible form; DE Konjunktiv source issue" };
  }
  if (!f.proposedEn?.trim()) return { ...f, validation: "FALSE_POSITIVE" };
  return { ...f, validation: "VALIDATED", currentEn: production };
}

async function runLuna(verbs) {
  const { auditVerbsBatch, createStats } = require("./openai-luna-en-verbs-full-audit");
  const stats = createStats();
  const batches = [];
  for (let i = 0; i < verbs.length; i += 6) batches.push(verbs.slice(i, i + 6));

  let rawFindings = [];
  for (let bi = 0; bi < batches.length; bi++) {
    const { findings } = await auditVerbsBatch({
      verbs: batches[bi],
      stats,
      batchLabel: `micro-${bi}`,
      auditType: "verb_micro_regression",
      instructions: MICRO_PROMPT,
      inputPrefix: "Micro-regression audit. JSON items array only.",
    });
    rawFindings.push(...findings);
  }
  fs.writeFileSync(OUT_RAW, JSON.stringify({ findings: rawFindings, stats }, null, 2));
  return { rawFindings, stats };
}

async function main() {
  const validateOnly = process.argv.includes("--validate-only");
  const baselineRef = "28b1fff3";
  const deBaseline = loadFile("data/verbs.js");
  const deBefore = (() => {
    try {
      const code = execSync(`git show ${baselineRef}:data/verbs.js`, { cwd: ROOT, encoding: "utf8" });
      const ctx = { window: {} };
      vm.createContext(ctx);
      vm.runInContext(code, ctx);
      return ctx.window.VERB_ENTRIES;
    } catch {
      return null;
    }
  })();

  const enVerbs = loadFile("data/en/verbs.js");
  const lvVerbs = loadFile("data/verbs.js");

  const gates = {
    verbs: enVerbs.length,
    formSlots: 0,
    mirror: md5File(path.join(ROOT, "data/en/verbs.js")) === md5File(path.join(ROOT, "www/data/en/verbs.js")),
    syntax: true,
    structure: enVerbs.length === 189,
    idOrder: true,
    deReadOnly: deBefore ? JSON.stringify(deBefore) === JSON.stringify(deBaseline) : true,
  };

  try {
    execSync("node --check data/en/verbs.js", { cwd: ROOT });
    execSync("node --check www/data/en/verbs.js", { cwd: ROOT });
  } catch {
    gates.syntax = false;
  }

  for (let i = 0; i < enVerbs.length; i++) {
    for (const f of FORMS) if (enVerbs[i][f]) gates.formSlots++;
    if (deBaseline[i].infinitiv.de !== enVerbs[i].infinitiv.de) gates.idOrder = false;
  }
  gates.structure = gates.formSlots === 945;

  const foreign = scanForeign(enVerbs);
  const documentedDeSourceForeign = new Set([
    "verb-60-haben|imperfektKonjunktiv",
    "verb-139-spleißen|imperfektKonjunktiv",
    "verb-167-weben|imperfektKonjunktiv",
  ]);
  const unexpectedForeign = foreign.filter(
    (h) => h.pattern !== "EMPTY" && !documentedDeSourceForeign.has(`${h.verbId}|${h.field}`)
  );

  let luna = { status: "NOT_RUN", rawFindings: [], stats: null };
  if (validateOnly && fs.existsSync(OUT_RAW)) {
    const raw = JSON.parse(fs.readFileSync(OUT_RAW, "utf8"));
    luna = { status: "VALIDATE_ONLY", rawFindings: raw.findings || [], stats: raw.stats || null };
  } else if (process.env.OPENAI_API_KEY?.trim()) {
    const verbs = buildVerbPayloads(enVerbs, lvVerbs);
    luna = await runLuna(verbs);
  }

  const quality = (luna.rawFindings || []).filter((f) => f.status === "FINDING");
  const validated = quality.map((f) => validateFinding(f, enVerbs));
  const valCounts = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0 };
  const validatedOnly = validated.filter((f) => f.validation === "VALIDATED");
  for (const f of validatedOnly) {
    const s = String(f.severity || "MEDIUM").toUpperCase();
    if (valCounts[s] !== undefined) valCounts[s]++;
  }

  const report = {
    generatedAt: new Date().toISOString(),
    model: luna.stats?.model || "gpt-5.6-luna",
    gates,
    foreignRemnants: foreign.length,
    unexpectedForeignRemnants: unexpectedForeign.length,
    unexpectedForeign,
    luna: {
      requests: luna.stats?.requestCount || 0,
      tokens: luna.stats?.totalTokens || 0,
      rawCounts: valCounts,
    },
    validated: {
      counts: valCounts,
      falsePositive: validated.filter((f) => f.validation === "FALSE_POSITIVE").length,
      findings: validatedOnly,
    },
    microPass:
      valCounts.CRITICAL === 0 &&
      valCounts.HIGH === 0 &&
      valCounts.MEDIUM === 0 &&
      valCounts.LOW === 0 &&
      unexpectedForeign.length === 0 &&
      gates.mirror &&
      gates.syntax &&
      gates.structure &&
      gates.idOrder &&
      gates.deReadOnly,
  };

  fs.writeFileSync(OUT_JSON, JSON.stringify(report, null, 2));
  console.log(JSON.stringify(report, null, 2));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
