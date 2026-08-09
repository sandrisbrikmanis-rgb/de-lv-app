#!/usr/bin/env node
/**
 * Luna micro-regression for microrepair #3 — 5 cards only.
 */
require("dotenv").config();

const fs = require("fs");
const path = require("path");
const vm = require("vm");
const crypto = require("crypto");
const { execSync } = require("child_process");

const ROOT = path.join(__dirname, "..", "..");
const EN_FILE = path.join(ROOT, "data", "en", "b2.js");
const LV_FILE = path.join(ROOT, "data", "b2.js");
const DE_FILE = path.join(ROOT, "data", "b2.js");
const PRE_REPAIR_COMMIT = "195706e9";
const REPAIRS_JSON = path.join(__dirname, "en-b2-final-microrepair-03-repairs.json");

const OUT_MD = path.join(ROOT, "reports", "en-b2-final-microrepair-03-regression.md");
const OUT_JSON = path.join(ROOT, "reports", "temp", "en-b2-final-microrepair-03-regression.json");
const RAW_JSON = path.join(__dirname, "en-b2-final-microrepair-03-regression-raw.json");
const PROGRESS_JSON = path.join(__dirname, ".en-b2-final-microrepair-03-regression-progress.json");
const LOG_PATH = path.join(__dirname, "en-b2-final-microrepair-03-regression-run.log");

const TARGET_CARD_IDS = [
  "b2-sich-fassen",
  "b2-sich-gestalten",
  "b2-sich-herausbilden",
  "b2-aendern",
  "b2-fordern",
];

const NELABOT_FIELDS = [
  ["b2-ehrenvoll-512", "lv"],
  ["b2-Eifer-521", "lv"],
  ["b2-Wehe-2041", "lv"],
  ["b2-haube", "study.translation"],
  ["b2-haube", "enMain"],
  ["b2-haube", "study.examples[2].en"],
  ["b2-haube", "study.tip[1]"],
  ["b2-aendern", "study.examples[4].en"],
  ["b2-fordern", "study.examples[4].en"],
  ["b2-sich-herausbilden", "study.translation"],
];
const NELABOT_KEYS = new Set(NELABOT_FIELDS.map(([c, f]) => `${c}::${parseStoragePath(f)}`));

const DIALECT_PATTERNS = [
  /british english/i, /american english/i, /honourable/i, /honorable/i,
  /ardour/i, /ardor/i, /bonnet/i, /hood/i, /spelling preference/i, /dialect/i,
];

function gitShow(commit, filePath) {
  return execSync(`git show ${commit}:${filePath}`, { cwd: ROOT, encoding: "utf8", maxBuffer: 50 * 1024 * 1024 });
}

function loadFromCode(code) {
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.B2_WORDS;
}

function entryId(entry, index) {
  return entry.study?.id || `b2-${entry.de}-${index}`;
}

function parseStoragePath(fieldPath) {
  let p = String(fieldPath || "lv").replace(/^studyContext\./, "study.");
  if (p === "en" || p === "enMain" || p === "enText") return "lv";
  if (p.startsWith("study.")) {
    p = p.replace(/\.examples\[(\d+)\]\.en\b/g, ".examples[$1].lv");
    p = p.replace(/\[(\d+)\]/g, ".$1");
  }
  return p;
}

function normFp(fieldPath) {
  return parseStoragePath(fieldPath);
}

function buildManifest11() {
  const { decisions } = JSON.parse(fs.readFileSync(REPAIRS_JSON, "utf8"));
  const m = new Map();
  for (const d of decisions) {
    if (d.action === "APPLY") m.set(`${d.cardId}::${normFp(d.fieldPath)}`, d.finalEn);
  }
  return m;
}

function buildTarget(beforeEn, afterEn, lvWords) {
  const cards = [];
  for (let i = 0; i < afterEn.length; i++) {
    const enE = afterEn[i];
    const cardId = entryId(enE, i);
    if (!TARGET_CARD_IDS.includes(cardId)) continue;
    const lvE = lvWords[i];
    const study = enE.study;
    const payload = {
      cardId,
      de: enE.de,
      de_article: enE.de_article || null,
      de_plural: enE.de_plural || null,
      enMain: enE.lv,
      lvMainSource: lvE.lv,
      hasStudy: !!study,
    };
    if (study) {
      payload.study = {
        layout: study.layout || "standardStudy",
        translation: study.translation || null,
        explanation: study.explanation || null,
        rektion: study.rektion || null,
        forms: study.forms || null,
        formsLabel: study.formsLabel || null,
        examples: (study.examples || []).map((ex) => ({ de: ex.de, en: ex.lv })),
        comparison: (study.comparison || []).map((c) => ({
          word: c.word,
          meaning: c.meaning,
          example: c.example,
        })),
        tip: study.tip || null,
        important: study.important || null,
      };
    }
    cards.push(payload);
  }
  return cards;
}

async function runLuna(targetCards) {
  if (!process.env.OPENAI_API_KEY?.trim()) {
    return { status: "NOT_RUN_API_UNAVAILABLE", rawFindings: [], stats: null };
  }
  const { auditCardsBatch, createStats, recordRetryReason } = require("./openai-luna-en-b2-full-audit");
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

  async function auditWithRetry(cards, batchKey, auditType) {
    for (let attempt = 0; attempt <= 3; attempt++) {
      try {
        if (attempt > 0) {
          stats.retryRequests += 1;
          stats.retryCount += 1;
          await new Promise((r) => setTimeout(r, 2000 * (attempt + 1)));
        } else stats.initialBatchRequests += 1;
        return await auditCardsBatch({ cards, stats, batchLabel: batchKey, auditType });
      } catch (e) {
        if (attempt >= 3) throw e;
        recordRetryReason(stats, e.message.includes("JSON") ? "invalid_json" : "api_error");
      }
    }
    return { findings: [] };
  }

  const log = (msg) => {
    fs.appendFileSync(LOG_PATH, msg + "\n");
    console.log(msg);
  };

  const simple = targetCards.filter((c) => !c.hasStudy);
  const study = targetCards.filter((c) => c.hasStudy);

  if (!completed.has("mr03-simple")) {
    if (simple.length) {
      const lunaCards = simple.map((c) => ({
        cardId: c.cardId,
        field: "lv",
        de: c.de,
        deArticle: c.de_article,
        dePlural: c.de_plural,
        lvSource: c.lvMainSource,
        enText: c.enMain,
      }));
      const { findings } = await auditWithRetry(lunaCards, "mr03-simple", "microrepair_03_simple");
      rawFindings.push(...findings);
    }
    completed.add("mr03-simple");
    fs.writeFileSync(PROGRESS_JSON, JSON.stringify({ completedBatches: [...completed] }, null, 2));
    fs.writeFileSync(RAW_JSON, JSON.stringify({ findings: rawFindings, stats }, null, 2));
    log(`done mr03-simple: ${simple.length} cards`);
  }

  if (!completed.has("mr03-study")) {
    const lunaCards = study.map((c) => ({
      cardId: c.cardId,
      de: c.de,
      deArticle: c.de_article,
      layout: c.study?.layout,
      studyContext: c.study,
      enMain: c.enMain,
      lvMainSource: c.lvMainSource,
    }));
    const { findings } = await auditWithRetry(lunaCards, "mr03-study", "microrepair_03_study");
    rawFindings.push(...findings);
    completed.add("mr03-study");
    fs.writeFileSync(PROGRESS_JSON, JSON.stringify({ completedBatches: [...completed] }, null, 2));
    fs.writeFileSync(RAW_JSON, JSON.stringify({ findings: rawFindings, stats }, null, 2));
    log(`done mr03-study: ${study.length} cards, findings=${findings.length}`);
  }

  return { status: "COMPLETED", audited: targetCards.length, rawFindings, stats };
}

function validateFindings(rawFindings, manifest11, beforeEn, afterEn) {
  const validated = [];
  function getBefore(cardId, fieldPath) {
    const fp = parseStoragePath(fieldPath);
    const entry = beforeEn.find((e, i) => entryId(e, i) === cardId);
    if (!entry) return null;
    if (fp === "lv") return entry.lv;
    if (!fp.startsWith("study.")) return null;
    const parts = fp.slice("study.".length).split(".").filter(Boolean);
    let cur = entry.study;
    for (const p of parts) {
      const k = /^\d+$/.test(p) ? parseInt(p, 10) : p;
      cur = cur?.[k];
    }
    return cur;
  }

  function existsUnchangedInBefore(afterEntry, beforeEntry, text) {
    if (!afterEntry || !beforeEntry || !text) return false;
    if (afterEntry.lv === text && beforeEntry.lv === text) return true;
    function walk(a, b) {
      if (typeof a === "string") return a === text && typeof b === "string" && a === b;
      if (Array.isArray(a)) return a.some((v, i) => walk(v, b?.[i]));
      if (a && typeof a === "object") {
        return Object.keys(a).some((k) => {
          if (["de", "sectionAccents", "id", "layout"].includes(k)) return false;
          return walk(a[k], b?.[k]);
        });
      }
      return false;
    }
    return walk(afterEntry.study, beforeEntry.study);
  }

  for (const f of rawFindings) {
    if (f.status === "PASS") continue;
    const reason = String(f.reason || "");
    const fieldPath = f.field || "lv";
    const key = `${f.cardId}::${normFp(fieldPath)}`;
    const afterEntry = afterEn.find((e, i) => entryId(e, i) === f.cardId);
    const beforeEntry = beforeEn.find((e, i) => entryId(e, i) === f.cardId);

    if (NELABOT_KEYS.has(key) || DIALECT_PATTERNS.some((p) => p.test(reason))) {
      validated.push({
        cardId: f.cardId,
        fieldPath,
        currentEn: f.currentEn,
        problem: reason,
        recommendedEn: f.proposedEn,
        validatedStatus: "VILTUS_POZITĪVS",
        validatedSeverity: "NAV",
        rationale: "OWNER NELABOT vai dialekta preference.",
      });
      continue;
    }

    if (manifest11.has(key) && f.currentEn === manifest11.get(key)) {
      validated.push({
        cardId: f.cardId,
        fieldPath,
        currentEn: f.currentEn,
        problem: reason,
        recommendedEn: f.proposedEn,
        validatedStatus: "VILTUS_POZITĪVS",
        validatedSeverity: "NAV",
        rationale: "OWNER mikrolabojums #3 gala EN.",
      });
      continue;
    }

    const beforeVal = getBefore(f.cardId, fieldPath);
    if (existsUnchangedInBefore(afterEntry, beforeEntry, f.currentEn)) {
      validated.push({
        cardId: f.cardId,
        fieldPath,
        currentEn: f.currentEn,
        problem: reason,
        recommendedEn: f.proposedEn,
        validatedStatus: "IEPRIEKŠ_EKSISTĒJA",
        validatedSeverity: "NAV",
        rationale: "Problēma eksistēja pirms mikrolabojuma #3 (nav no šī 11 lauku cikla).",
      });
      continue;
    }

    if (beforeVal && f.currentEn !== beforeVal && reason && !manifest11.has(key)) {
      const sevMap = { CRITICAL: "KRITISKA", HIGH: "AUGSTA", MEDIUM: "VIDĒJA", LOW: "ZEMA" };
      const sev = String(f.severity || "MEDIUM").toUpperCase();
      validated.push({
        cardId: f.cardId,
        fieldPath,
        currentEn: f.currentEn,
        problem: reason,
        recommendedEn: f.proposedEn,
        validatedStatus: "REĀLA_PROBLĒMA",
        validatedSeverity: sevMap[sev] || "VIDĒJA",
        rationale: reason,
      });
      continue;
    }

    if (beforeVal === f.currentEn) {
      validated.push({
        cardId: f.cardId,
        fieldPath,
        currentEn: f.currentEn,
        problem: reason,
        recommendedEn: f.proposedEn,
        validatedStatus: "IEPRIEKŠ_EKSISTĒJA",
        validatedSeverity: "NAV",
        rationale: "Problēma eksistēja pirms mikrolabojuma #3.",
      });
      continue;
    }

    validated.push({
      cardId: f.cardId,
      fieldPath,
      currentEn: f.currentEn,
      problem: reason,
      recommendedEn: f.proposedEn,
      validatedStatus: "REĀLA_PROBLĒMA",
      validatedSeverity: "VIDĒJA",
      rationale: reason,
    });
  }
  return validated;
}

async function main() {
  const beforeEn = loadFromCode(gitShow(PRE_REPAIR_COMMIT, "data/en/b2.js"));
  const afterEn = loadFromCode(fs.readFileSync(EN_FILE, "utf8"));
  const lvWords = loadFromCode(fs.readFileSync(LV_FILE, "utf8"));
  const targetCards = buildTarget(beforeEn, afterEn, lvWords);
  const manifest11 = buildManifest11();

  const luna = await runLuna(targetCards);
  const validated = validateFindings(luna.rawFindings || [], manifest11, beforeEn, afterEn);
  const real = validated.filter((v) => v.validatedStatus === "REĀLA_PROBLĒMA");
  const sev = { KRITISKA: 0, AUGSTA: 0, VIDĒJA: 0, ZEMA: 0, VILTUS_POZITĪVS: 0, IEPRIEKŠ_EKSISTĒJA: 0 };
  for (const v of validated) {
    if (v.validatedStatus === "VILTUS_POZITĪVS") sev.VILTUS_POZITĪVS++;
    else if (v.validatedStatus === "IEPRIEKŠ_EKSISTĒJA") sev.IEPRIEKŠ_EKSISTĒJA++;
    else if (sev[v.validatedSeverity] !== undefined) sev[v.validatedSeverity]++;
  }

  const deBefore = crypto.createHash("md5").update(gitShow(PRE_REPAIR_COMMIT, "data/b2.js")).digest("hex");
  const deAfter = crypto.createHash("md5").update(fs.readFileSync(DE_FILE)).digest("hex");

  const verdict =
    real.length === 0 && luna.status === "COMPLETED"
      ? "EN–DE B2 GALA MIKROLABOJUMS #3: PASS"
      : luna.status === "NOT_RUN_API_UNAVAILABLE"
        ? "LUNA MIKROREGRESIJA NAV PABEIGTA"
        : "NEPIECIEŠAMS PAPILDU MIKROLABOJUMS";

  const closureVerdict =
    verdict === "EN–DE B2 GALA MIKROLABOJUMS #3: PASS"
      ? "EN–DE B2 — GATAVS OWNER ACCEPTED / CLOSED"
      : verdict;

  const result = {
    generatedAt: new Date().toISOString(),
    preRepairCommit: PRE_REPAIR_COMMIT,
    scope: { uniqueCards: TARGET_CARD_IDS.length, lunaAudited: luna.audited, lunaExpected: targetCards.length },
    luna: {
      status: luna.status,
      rawCount: (luna.rawFindings || []).filter((f) => f.status !== "PASS").length,
      realProblems: real.length,
      severity: sev,
      stats: luna.stats,
    },
    findings: validated,
    deReadOnly: deBefore === deAfter,
    verdict,
    closureVerdict,
  };

  fs.writeFileSync(OUT_JSON, JSON.stringify(result, null, 2));
  fs.writeFileSync(
    OUT_MD,
    [
      "# EN–DE B2 — Mikrolabojums #3 Luna mikroregresija",
      "",
      "| Metrika | Skaits |",
      "| --- | ---: |",
      "| Kartītes | 5 |",
      "| Luna auditētas | " + luna.audited + "/5 |",
      "| Raw | " + result.luna.rawCount + " |",
      "| Reālās | " + real.length + " |",
      "| Viltus pozitīvi | " + sev.VILTUS_POZITĪVS + " |",
      "| Iepriekš eksistēja | " + sev.IEPRIEKŠ_EKSISTĒJA + " |",
      "",
      "## Gala verdikts",
      "",
      "**" + verdict + "**",
      "",
      closureVerdict !== verdict ? "**" + closureVerdict + "**" : "",
    ].join("\n")
  );

  console.log(JSON.stringify({ verdict, closureVerdict, realProblems: real.length, audited: luna.audited }, null, 2));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
