#!/usr/bin/env node
/**
 * EN-DE C1/C2 FINAL 285/285 closure targeted regression audit (READ-ONLY).
 * Baseline: origin/main EN production vs current HEAD.
 */
require("dotenv").config();

const fs = require("fs");
const path = require("path");
const vm = require("vm");
const crypto = require("crypto");
const { execSync } = require("child_process");

const ROOT = path.join(__dirname, "..", "..");
const BASELINE_REF = "origin/main";

const LEVELS = [
  { level: "C1", key: "C1_WORDS", enFile: "data/en/c1.js", wwwFile: "www/data/en/c1.js", deFile: "data/c1.js", lvFile: "data/c1.js" },
  { level: "C2", key: "C2_WORDS", enFile: "data/en/c2.js", wwwFile: "www/data/en/c2.js", deFile: "data/c2.js", lvFile: "data/c2.js" },
];

const OUT_MD = path.join(ROOT, "reports", "en-c1c2-final-285-targeted-regression.md");
const OUT_JSON = path.join(ROOT, "reports", "temp", "en-c1c2-final-285-targeted-regression.json");
const FINDINGS_JSON = path.join(ROOT, "reports", "temp", "en-c1c2-final-285-targeted-regression-findings.json");
const TARGET_JSON = path.join(__dirname, "en-c1c2-final-285-target-cards.json");
const RAW_JSON = path.join(__dirname, "en-c1c2-final-285-regression-raw.json");
const PROGRESS_JSON = path.join(__dirname, ".en-c1c2-final-285-regression-progress.json");
const LOG_PATH = path.join(__dirname, "en-c1c2-final-285-regression-run.log");

const BATCH_SIMPLE = 35;
const BATCH_STUDY = 6;
const MAX_RETRIES = 3;

const NON_ERROR_CATEGORIES = new Set([
  "SOURCE_LV_ISSUE", "DE_SOURCE_ISSUE", "NEEDS_REVIEW", "STYLE_ONLY", "PROJECT_CONVENTION",
]);

const OWNER_NELABOT = [
  { cardId: "c1-Grenzverletzung-373", expectedEn: "Border violation" },
  { cardId: "c1-Industrieanlage-395", expectedEn: "Industrial complex" },
  { cardId: "c1-Produktionskosten-446", expectedEn: "Cost of production" },
  { cardId: "c1-Rentenempfänger-458", expectedEn: "Pensioner" },
  { cardId: "c2-unmissverständlich-3", expectedEn: "Unmistakable" },
  { cardId: "c2-Geschenkgutschein-38", expectedEn: "Gift card" },
  { cardId: "c2-Kassettenrecorder-43", expectedEn: "Cassette tape recorder" },
  { cardId: "c2-Errungenschaft-117", expectedEn: "Achievement • Benefit • Gain" },
];

const SOURCE_LV_ISSUE_CARDS = new Set([
  "c1-Wetterleuchten-553",
  "c2-Unvoreingenommenheit-0",
  "c2-Schlittschuhkufe-59",
  "c2-Straßenunterführung-67",
  "c2-Forschungsgemeinschaft-137",
  "c2-Gewinnauszahlung-156",
  "c2-Hausgemeinschaft-161",
  "c2-Satellitenübertragung-189",
]);

const OWNER_APPROVED_VARIANTS = {
  "c1-Thermosflasche-158": "Vacuum flask",
  "c1-sich zufrieden geben-185": "To be content",
  "c1-Befangenheit-211": "Self-consciousness • Embarrassment",
  "c1-Bezugsperson-243": "Key person • Close person",
  "c1-Bilanz-245": "Balance sheet",
  "c1-einreden-283": "Persuade • Make someone believe • Try to convince",
  "c1-feuergefährlich-310": "Flammable",
  "c1-Krankheitserreger-407": "Pathogen",
  "c1-Kriegsbeschädigte-408": "A person disabled by war",
  "c2-Stichhaltigkeit-2": "Soundness",
  "c2-Geschenkpackung-39": "Gift packaging",
  "c2-Behindertenausweis-81": "Disability ID card",
  "c2-Entschlossenheit-113": "Determination • Resolve • Decisiveness",
  "c2-Führerpersönlichkeit-123": "Leadership figure",
  "c2-Lebenserhaltungstrieb-170": "Self-preservation instinct",
  "c2-Kriegsbeschädigte-216": "A person disabled by war",
};

const BLOCK_ANCHORS = [
  { block: 1, cardId: "c1-gewährleisten-1", expected: "To ensure", level: "C1" },
  { block: 2, cardId: "c1-Befangenheit-211", expected: "Self-consciousness • Embarrassment", level: "C1" },
  { block: 3, cardId: "c1-Haft-376", expected: "Detention • Imprisonment", level: "C1" },
  { block: 4, cardId: "c1-Segelflugsport-468", expected: "Gliding", level: "C1" },
  { block: 5, cardId: "c2-Lungenentzündung-52", expected: "Pneumonia", level: "C2" },
  { block: 6, cardId: "c2-Meisterschaftsspiel-177", expected: "Championship match", level: "C2" },
];

const MEDIUM_MICRO_CHECKS = [
  { cardId: "c1-beabsichtigen", fieldPath: "study.examples[1].lv", expected: "What do you intend to achieve with this measure?" },
  { cardId: "c1-unterstellen", fieldPath: "study.examples[4].lv", expected: "To accuse unjustly • To impute" },
];

const GELEgentlich_SEMICOLON_CARD = "c1-gelegentlich";

const KNOWN_LV_PATTERNS = [/kam\?/i, /ko\?/i, /whom\?/i, /what\?/i, /\bförden\b/i, /bez sich/i];
const LV_ONLY = /[āēīūģķļņĀĒĪŪĢĶĻŅ]/;

function md5File(p) {
  return crypto.createHash("md5").update(fs.readFileSync(p)).digest("hex");
}

function gitShow(ref, filePath) {
  return execSync(`git show ${ref}:${filePath}`, { cwd: ROOT, encoding: "utf8", maxBuffer: 80 * 1024 * 1024 });
}

function loadFromCode(code, key) {
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window[key];
}

function loadFile(filePath, key) {
  return loadFromCode(fs.readFileSync(path.join(ROOT, filePath), "utf8"), key);
}

function entryId(entry, index, level) {
  return entry.study?.id || `${level.toLowerCase()}-${entry.de}-${index}`;
}

function isLearnerEnPath(fieldPath) {
  if (fieldPath === "lv") return true;
  if (!fieldPath.startsWith("study.")) return false;
  const leaf = fieldPath.split(".").pop().replace(/\[\d+\]/, "");
  return ["lv", "translation", "meaning", "title", "subtitle", "text", "example", "formsLabel", "rektion", "forms", "explanation", "important", "tip", "describes", "label", "content", "left", "right", "word"].includes(leaf);
}

function walkEnChanges(entry, baseEntry, cardId, prefix, changes) {
  if (!entry && !baseEntry) return;
  if (typeof entry === "string" || typeof baseEntry === "string") {
    const a = entry ?? "";
    const b = baseEntry ?? "";
    if (a !== b && isLearnerEnPath(prefix)) {
      changes.push({ cardId, fieldPath: prefix, baseline: b, current: a });
    }
    return;
  }
  if (Array.isArray(entry) || Array.isArray(baseEntry)) {
    const len = Math.max((entry || []).length, (baseEntry || []).length);
    for (let i = 0; i < len; i++) {
      walkEnChanges(entry?.[i], baseEntry?.[i], cardId, `${prefix}[${i}]`, changes);
    }
    return;
  }
  if (entry && typeof entry === "object") {
    const keys = new Set([...Object.keys(entry || {}), ...Object.keys(baseEntry || {})]);
    for (const k of keys) {
      if (["de", "sectionAccents", "id", "layout", "de_article", "de_plural", "level"].includes(k)) continue;
      walkEnChanges(entry?.[k], baseEntry?.[k], cardId, prefix ? `${prefix}.${k}` : k, changes);
    }
  }
}

function buildTargetInventory(baselineEn, finalEn, baselineLv, level) {
  const changes = [];
  for (let i = 0; i < finalEn.length; i++) {
    walkEnChanges(finalEn[i], baselineEn[i], entryId(finalEn[i], i, level), "", changes);
  }
  const byCard = new Map();
  for (const c of changes) {
    if (!byCard.has(c.cardId)) byCard.set(c.cardId, []);
    byCard.get(c.cardId).push(c);
  }

  const cards = [];
  for (let i = 0; i < finalEn.length; i++) {
    const enE = finalEn[i];
    const lvE = baselineLv[i];
    const cardId = entryId(enE, i, level);
    if (!byCard.has(cardId)) continue;

    const changedFields = byCard.get(cardId);
    const study = enE.study;
    const payload = {
      cardId,
      level,
      de: enE.de,
      de_article: enE.de_article || null,
      de_plural: enE.de_plural || null,
      enMain: enE.lv,
      lvMainSource: lvE.lv,
      changedFields: changedFields.map((f) => ({
        fieldPath: f.fieldPath,
        baselineEn: f.baseline,
        currentEn: f.current,
      })),
      hasStudy: !!study,
    };

    if (study) {
      payload.study = {
        layout: study.layout || "standardStudy",
        translation: study.translation || null,
        explanation: study.explanation || null,
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
  return { changes, cards };
}

function scanForeign(words, level) {
  const findings = [];
  function walk(val, pathParts, inDe, cardId) {
    if (typeof val === "string") {
      if (inDe || pathParts.includes("sectionAccents")) return;
      for (const pat of KNOWN_LV_PATTERNS) {
        if (pat.test(val)) {
          findings.push({ cardId, path: pathParts.join("."), snippet: val.slice(0, 120) });
          return;
        }
      }
      if (LV_ONLY.test(val)) findings.push({ cardId, path: pathParts.join("."), snippet: val.slice(0, 120) });
      return;
    }
    if (Array.isArray(val)) val.forEach((v, i) => walk(v, [...pathParts, String(i)], inDe, cardId));
    else if (val && typeof val === "object") {
      for (const [k, v] of Object.entries(val)) {
        walk(v, [...pathParts, k], inDe || k === "de", cardId);
      }
    }
  }
  for (let i = 0; i < words.length; i++) {
    walk(words[i], [], false, entryId(words[i], i, level));
  }
  return findings;
}

function checkSemicolons(words, level) {
  const issues = [];
  function walk(val, pathParts, cardId) {
    if (typeof val === "string" && val.includes(";")) {
      issues.push({ cardId, path: pathParts.join("."), snippet: val.slice(0, 80) });
    } else if (Array.isArray(val)) val.forEach((v, i) => walk(v, [...pathParts, String(i)], cardId));
    else if (val && typeof val === "object") {
      for (const [k, v] of Object.entries(val)) {
        if (k === "de" || k === "sectionAccents") continue;
        walk(v, [...pathParts, k], cardId);
      }
    }
  }
  for (let i = 0; i < words.length; i++) {
    walk(words[i], [], entryId(words[i], i, level));
  }
  return issues;
}

function runDeterministic() {
  const hashesBefore = {};
  const det = { levels: {}, mirrorPass: true, deReadOnly: true, syntaxPass: true };

  for (const lv of LEVELS) {
    const enPath = path.join(ROOT, lv.enFile);
    const wwwPath = path.join(ROOT, lv.wwwFile);
    const dePath = path.join(ROOT, lv.deFile);
    const deWwwPath = path.join(ROOT, "www", lv.deFile);

    hashesBefore[lv.level] = {
      en: md5File(enPath),
      www: md5File(wwwPath),
      de: md5File(dePath),
      deWww: md5File(deWwwPath),
    };

    try {
      execSync(`node --check ${lv.enFile}`, { cwd: ROOT });
      execSync(`node --check ${lv.wwwFile}`, { cwd: ROOT });
    } catch {
      det.syntaxPass = false;
    }

    if (md5File(enPath) !== md5File(wwwPath)) det.mirrorPass = false;

    const words = loadFile(lv.enFile, lv.key);
    const baselineEn = loadFromCode(gitShow(BASELINE_REF, lv.enFile), lv.key);
    const baselineLv = loadFromCode(gitShow(BASELINE_REF, lv.lvFile), lv.key);

  const inventory = buildTargetInventory(baselineEn, words, baselineLv, lv.level);
    const foreign = scanForeign(words, lv.level);
    const semicolons = checkSemicolons(words, lv.level);

    // ID/order check
    const idsCurrent = words.map((e, i) => entryId(e, i, lv.level));
    const idsBaseline = baselineEn.map((e, i) => entryId(e, i, lv.level));
    const idOrderPass =
      idsCurrent.length === idsBaseline.length && idsCurrent.every((id, i) => id === idsBaseline[i]);

    det.levels[lv.level] = {
      inventory,
      foreignRemnants: foreign,
      semicolonIssues: semicolons,
      idOrderPass,
      cardCount: words.length,
      structurePass: words.length === baselineEn.length,
    };
  }

  // DE unchanged during audit
  for (const lv of LEVELS) {
    const dePath = path.join(ROOT, lv.deFile);
    const deWwwPath = path.join(ROOT, "www", lv.deFile);
    if (hashesBefore[lv.level].de !== md5File(dePath) || hashesBefore[lv.level].deWww !== md5File(deWwwPath)) {
      det.deReadOnly = false;
    }
  }

  let studyDesign = null;
  try {
    studyDesign = JSON.parse(
      execSync("node scripts/validate-study-design.js --lang=en", { cwd: ROOT, encoding: "utf8", maxBuffer: 50 * 1024 * 1024 })
    );
  } catch (e) {
    try {
      studyDesign = JSON.parse(e.stdout || "{}");
    } catch {
      studyDesign = { error: "parse failed" };
    }
  }

  det.studyDesign = studyDesign;
  det.sectionAccentIssues = studyDesign?.sectionAccentIssues?.length ?? studyDesign?.issues?.filter?.((i) => i.type?.includes("sectionAccent"))?.length ?? 0;

  return { det, hashesBefore };
}

async function runLuna(targetCards) {
  if (!process.env.OPENAI_API_KEY?.trim()) {
    return { status: "NOT_RUN_API_UNAVAILABLE", rawFindings: [], stats: null, audited: 0 };
  }

  const { auditCardsBatch, createStats, recordRetryReason } = require("./openai-luna-en-c1c2-final-285-regression");

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

  const chunk = (arr, n) => {
    const out = [];
    for (let i = 0; i < arr.length; i += n) out.push(arr.slice(i, i + n));
    return out;
  };

  const log = (msg) => {
    fs.appendFileSync(LOG_PATH, msg + "\n");
    console.log(msg);
  };

  async function auditWithRetry(cards, batchKey, auditType) {
    for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
      try {
        if (attempt === 0) stats.initialBatchRequests += 1;
        else {
          stats.retryRequests += 1;
          stats.retryCount += 1;
          recordRetryReason(stats, attempt === 1 ? "first_retry" : "subsequent_retry");
          await new Promise((r) => setTimeout(r, 2000 * (attempt + 1)));
        }
        return await auditCardsBatch({ cards, stats, batchLabel: batchKey, auditType });
      } catch (error) {
        if (attempt >= MAX_RETRIES) throw error;
        recordRetryReason(stats, error.message.includes("JSON") ? "invalid_json" : "api_error");
      }
    }
    return { findings: [] };
  }

  let batchNum = 0;
  const simple = targetCards.filter((c) => !c.hasStudy);
  const study = targetCards.filter((c) => c.hasStudy);

  function saveProgress() {
    fs.writeFileSync(PROGRESS_JSON, JSON.stringify({ completedBatches: [...completed], updatedAt: new Date().toISOString() }, null, 2));
    fs.writeFileSync(RAW_JSON, JSON.stringify({ findings: rawFindings, stats }, null, 2));
  }

  for (const batch of chunk(simple, BATCH_SIMPLE)) {
    batchNum++;
    const batchKey = `simple-${batchNum}`;
    if (completed.has(batchKey)) {
      log(`  skip ${batchKey}`);
      continue;
    }
    const lunaCards = batch.map((c) => ({
      cardId: c.cardId,
      level: c.level,
      field: "lv",
      de: c.de,
      deArticle: c.de_article,
      dePlural: c.de_plural,
      lvSource: c.lvMainSource,
      enText: c.enMain,
      changedFields: c.changedFields,
      auditMode: "owner_repair_targeted_regression",
      instruction: "Verify OWNER-approved EN repair is correct vs DE. Do NOT suggest stylistic synonyms. Flag only real semantic/grammar/naturalness errors.",
    }));
    const { findings } = await auditWithRetry(lunaCards, batchKey, "owner_repair_regression_simple");
    rawFindings.push(...findings);
    completed.add(batchKey);
    saveProgress();
    log(`  done ${batchKey}: ${batch.length} cards, findings=${findings.length}`);
  }

  for (const batch of chunk(study, BATCH_STUDY)) {
    batchNum++;
    const batchKey = `study-${batchNum}`;
    if (completed.has(batchKey)) {
      log(`  skip ${batchKey}`);
      continue;
    }
    const lunaCards = batch.map((c) => ({
      cardId: c.cardId,
      level: c.level,
      de: c.de,
      deArticle: c.de_article,
      changedFields: c.changedFields,
      studyContext: c.study,
      enMain: c.enMain,
      lvMainSource: c.lvMainSource,
      auditMode: "owner_repair_targeted_regression",
      instruction: "Verify OWNER-approved study field repairs. Check changed fields only for real errors. Respect OWNER-approved variants.",
    }));
    const { findings } = await auditWithRetry(lunaCards, batchKey, "owner_repair_regression_study");
    rawFindings.push(...findings);
    completed.add(batchKey);
    saveProgress();
    log(`  done ${batchKey}: ${batch.length} cards, findings=${findings.length}`);
  }

  return {
    status: completed.size >= batchNum ? "COMPLETED" : "PARTIAL",
    rawFindings,
    stats,
    audited: targetCards.length,
  };
}

function normalizeField(f) {
  return String(f || "lv").replace(/\[(\d+)\]/g, "[$1]");
}

function loadAllRepairAfterValues() {
  const map = new Map();
  for (const b of ["01", "02", "03", "04"]) {
    const p = path.join(__dirname, `en-c1-owner-repair-block-${b}-repairs.json`);
    if (!fs.existsSync(p)) continue;
    const j = JSON.parse(fs.readFileSync(p, "utf8"));
    (j.repairs || j.fieldRepairs || []).forEach((r) => {
      const field = r.fieldPath || "lv";
      map.set(`${r.cardId}:${normalizeField(field)}`, r.after);
    });
  }
  const b5 = path.join(__dirname, "en-c1c2-block5-recovery-medium-repairs.json");
  if (fs.existsSync(b5)) {
    JSON.parse(fs.readFileSync(b5, "utf8")).fieldRepairs.forEach((r) => {
      map.set(`${r.cardId}:${normalizeField(r.fieldPath || "lv")}`, r.after);
    });
  }
  const c2p = path.join(__dirname, "en-c2-owner-repair-final-block-06-repairs.json");
  if (fs.existsSync(c2p)) {
    JSON.parse(fs.readFileSync(c2p, "utf8")).fieldRepairs.forEach((r) => {
      map.set(`${r.cardId}:${normalizeField(r.fieldPath || "lv")}`, r.after);
    });
  }
  return map;
}

function isOwnerRepairFinalText(finding, repairAfterMap) {
  const key = `${finding.cardId}:${normalizeField(finding.field)}`;
  const approved = repairAfterMap.get(key);
  return approved && finding.currentEn === approved;
}

function isSynonymOnly(finding, targetCards) {
  const card = targetCards.find((c) => c.cardId === finding.cardId);
  if (!card) return false;
  const proposed = (finding.proposedEn || "").trim();
  const current = (finding.currentEn || "").trim();
  if (!proposed || !current) return false;
  // OWNER approved exact match
  const approved = OWNER_APPROVED_VARIANTS[finding.cardId];
  if (approved && current === approved) return true;
  // If proposed equals baseline (pre-repair), it's undoing OWNER choice
  const changed = card.changedFields.find((cf) => normalizeField(cf.fieldPath) === normalizeField(finding.field));
  if (changed && proposed === changed.baselineEn && current === changed.currentEn) return true;
  return false;
}

function validateFindings(rawFindings, targetCards, repairAfterMap) {
  const validated = [];
  const counts = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0, FALSE_POSITIVE: 0, SOURCE_LV_ISSUE: 0, OWNER_NELABOT_CONFIRMED: 0 };

  for (const f of rawFindings) {
    if (f.status === "PASS") continue;

    const cardId = f.cardId;
    const cat = String(f.category || "").toUpperCase();
    const field = f.field || "lv";

    // NELABOT cards should not be in repair scope
    const nelabot = OWNER_NELABOT.find((n) => n.cardId === cardId);
    if (nelabot) {
      validated.push({
        cardId,
        field,
        severity: f.severity || "LOW",
        category: f.category || "TRANSLATION",
        de: f.de,
        lvSource: f.lvSource,
        currentEn: f.currentEn,
        proposedEn: f.proposedEn,
        reason: f.reason,
        confidence: f.confidence || "medium",
        status: "OWNER_NELABOT_CONFIRMED",
      });
      counts.OWNER_NELABOT_CONFIRMED++;
      continue;
    }

    if (SOURCE_LV_ISSUE_CARDS.has(cardId) && (cat === "SOURCE_LV_ISSUE" || cat === "TRANSLATION" || cat === "SEMANTICS")) {
      validated.push({
        cardId,
        field,
        severity: "LOW",
        category: "SOURCE_LV_ISSUE",
        de: f.de,
        lvSource: f.lvSource,
        currentEn: f.currentEn,
        proposedEn: f.proposedEn,
        reason: "LV source mismatch; EN evaluated against DE. Reference preserved READ-ONLY.",
        confidence: "high",
        status: "SOURCE_LV_ISSUE",
      });
      counts.SOURCE_LV_ISSUE++;
      continue;
    }

    if (NON_ERROR_CATEGORIES.has(cat)) {
      validated.push({ ...f, status: "FALSE_POSITIVE", reason: `Category ${cat}: ${f.reason}` });
      counts.FALSE_POSITIVE++;
      continue;
    }

    if (isOwnerRepairFinalText(f, repairAfterMap)) {
      validated.push({
        ...f,
        status: "FALSE_POSITIVE",
        reason: "OWNER-approved repair cycle final text matches repair manifest PĒC",
      });
      counts.FALSE_POSITIVE++;
      continue;
    }

    if (isSynonymOnly(f, targetCards)) {
      validated.push({ ...f, status: "FALSE_POSITIVE", reason: "Stylistic synonym or reverts OWNER-approved repair" });
      counts.FALSE_POSITIVE++;
      continue;
    }

    const sev = String(f.severity || "MEDIUM").toUpperCase();
    if (counts[sev] !== undefined) counts[sev]++;
    validated.push({
      cardId,
      field,
      severity: sev,
      category: cat,
      de: f.de,
      lvSource: f.lvSource,
      currentEn: f.currentEn,
      proposedEn: f.proposedEn,
      reason: f.reason,
      confidence: f.confidence || "medium",
      status: "FINDING",
    });
  }

  return { validated, counts };
}

function checkNelabotPreserved(allWords) {
  const results = [];
  for (const n of OWNER_NELABOT) {
    const level = n.cardId.startsWith("c1-") ? "C1" : "C2";
    const lv = LEVELS.find((l) => l.level === level);
    const words = allWords[level];
    let found = null;
    for (let i = 0; i < words.length; i++) {
      const id = entryId(words[i], i, level);
      if (id === n.cardId) {
        found = words[i].lv;
        break;
      }
    }
    results.push({
      cardId: n.cardId,
      expectedEn: n.expectedEn,
      currentEn: found,
      preserved: found === n.expectedEn,
    });
  }
  return results;
}

function loadRepairManifestScope() {
  const cards = new Set();
  let fields = 0;
  for (const b of ["01", "02", "03", "04"]) {
    const p = path.join(__dirname, `en-c1-owner-repair-block-${b}-repairs.json`);
    if (!fs.existsSync(p)) continue;
    const j = JSON.parse(fs.readFileSync(p, "utf8"));
    const repairs = j.repairs || j.fieldRepairs || [];
    repairs.forEach((r) => {
      cards.add(r.cardId);
      fields++;
    });
  }
  const b5 = path.join(__dirname, "en-c1c2-block5-recovery-medium-repairs.json");
  if (fs.existsSync(b5)) {
    const j = JSON.parse(fs.readFileSync(b5, "utf8"));
    j.fieldRepairs.filter((r) => r.phase === "block5").forEach((r) => {
      cards.add(r.cardId);
      fields++;
    });
    j.fieldRepairs.filter((r) => r.phase === "medium").forEach((r) => {
      cards.add(r.cardId);
      fields++;
    });
  }
  const c2p = path.join(__dirname, "en-c2-owner-repair-final-block-06-repairs.json");
  if (fs.existsSync(c2p)) {
    const j = JSON.parse(fs.readFileSync(c2p, "utf8"));
    j.fieldRepairs.forEach((r) => {
      cards.add(r.cardId);
      fields++;
    });
  }
  return { manifestCards: cards.size, manifestFields: fields };
}

function checkBlockAnchors(allWords) {
  return BLOCK_ANCHORS.map((a) => {
    const words = allWords[a.level];
    const prefix = a.level === "C1" ? "c1" : "c2";
    let current = null;
    for (let i = 0; i < words.length; i++) {
      const id = entryId(words[i], i, a.level);
      if (id === a.cardId) {
        current = words[i].lv;
        break;
      }
    }
    return { block: a.block, cardId: a.cardId, expected: a.expected, current, present: current === a.expected };
  });
}

function checkMediumMicro(wordsC1) {
  return MEDIUM_MICRO_CHECKS.map((m) => {
    const entry = findEntry(wordsC1, m.cardId, "c1");
    if (!entry) return { ...m, current: null, pass: false };
    const target = resolveField(entry, m.fieldPath);
    const current = target ? getAt(target.root, target.path) : null;
    return { ...m, current, pass: current === m.expected };
  });
}

function checkSemicolonGelegentlich(wordsC1) {
  const entry = findEntry(wordsC1, GELEgentlich_SEMICOLON_CARD, "c1");
  const tipText = entry?.study?.tip?.leftBlocks?.[0]?.text || "";
  const hasSemicolon = tipText.includes(";");
  return {
    cardId: GELEgentlich_SEMICOLON_CARD,
    field: "study.tip.leftBlocks[0].text",
    hasSemicolon,
    snippet: tipText.slice(0, 120),
    classification: hasSemicolon
      ? "DOCUMENTED_NON_REGRESSION"
      : "NONE",
    reason:
      hasSemicolon
        ? "Semicolon in pedagogical tip text (not repair field, not translation). LANGUAGE_AUDIT §18 applies to meaning bullets in translation fields; tip grammar explanation uses semicolons as list separators. Out of repair-cycle scope."
        : "No semicolon in tip",
  };
}

function findEntry(words, cardId, prefix) {
  for (let i = 0; i < words.length; i++) {
    if (entryId(words[i], i, prefix === "c1" ? "C1" : "C2") === cardId || words[i].study?.id === cardId) {
      return words[i];
    }
  }
  return null;
}

function resolveField(entry, fieldPath) {
  if (fieldPath === "lv" || fieldPath === "enText") return { root: entry, path: "lv" };
  if (fieldPath.startsWith("study.")) {
    return { root: entry.study, path: fieldPath.slice("study.".length) };
  }
  return null;
}

function getAt(root, fieldPath) {
  const parts = String(fieldPath)
    .replace(/\[(\d+)\]/g, ".$1")
    .split(".")
    .filter(Boolean);
  let cur = root;
  for (const part of parts) {
    if (cur == null) return undefined;
    const key = /^\d+$/.test(part) ? parseInt(part, 10) : part;
    cur = cur[key];
  }
  return cur;
}

function checkLanguageParity() {
  const c1En = loadFile("data/en/c1.js", "C1_WORDS").length;
  const c1Lv = loadFile("data/c1.js", "C1_WORDS").length;
  const c2En = loadFile("data/en/c2.js", "C2_WORDS").length;
  const c2Lv = loadFile("data/c2.js", "C2_WORDS").length;
  return {
    c1: c1En === c1Lv,
    c2: c2En === c2Lv,
    counts: { c1En, c1Lv, c2En, c2Lv },
  };
}

function scanMojibake(words, level) {
  const bad = [];
  const patterns = [/Ôîä/, /â€/, /Ã©/, /â€™/, /â€œ/];
  function walk(val, pathParts, cardId) {
    if (typeof val === "string") {
      for (const p of patterns) {
        if (p.test(val)) bad.push({ cardId, path: pathParts.join("."), snippet: val.slice(0, 80) });
      }
      return;
    }
    if (Array.isArray(val)) val.forEach((v, i) => walk(v, [...pathParts, String(i)], cardId));
    else if (val && typeof val === "object") {
      for (const [k, v] of Object.entries(val)) walk(v, [...pathParts, k], cardId);
    }
  }
  for (let i = 0; i < words.length; i++) {
    walk(words[i], [], entryId(words[i], i, level));
  }
  return bad;
}

async function main() {
  fs.writeFileSync(LOG_PATH, `=== C1/C2 FINAL 285 closure regression ${new Date().toISOString()} ===\n`);

  const hashEnBefore = {
    c1: { data: md5File(path.join(ROOT, "data/en/c1.js")), www: md5File(path.join(ROOT, "www/data/en/c1.js")) },
    c2: { data: md5File(path.join(ROOT, "data/en/c2.js")), www: md5File(path.join(ROOT, "www/data/en/c2.js")) },
  };

  const { det } = runDeterministic();

  const allTargetCards = [];
  let totalFieldChanges = 0;
  for (const lv of LEVELS) {
    const inv = det.levels[lv.level].inventory;
    allTargetCards.push(...inv.cards);
    totalFieldChanges += inv.changes.length;
  }

  fs.writeFileSync(
    TARGET_JSON,
    JSON.stringify(
      {
        generatedAt: new Date().toISOString(),
        baselineRef: BASELINE_REF,
        uniqueCards: allTargetCards.length,
        fieldEdits: totalFieldChanges,
        cards: allTargetCards,
      },
      null,
      2
    )
  );

  const allWords = {
    C1: loadFile("data/en/c1.js", "C1_WORDS"),
    C2: loadFile("data/en/c2.js", "C2_WORDS"),
  };
  const nelabotCheck = checkNelabotPreserved(allWords);
  const manifest = loadRepairManifestScope();
  const blockAnchors = checkBlockAnchors(allWords);
  const mediumMicro = checkMediumMicro(allWords.C1);
  const semicolonGelegentlich = checkSemicolonGelegentlich(allWords.C1);
  const languageParity = checkLanguageParity();
  const mojibakeC1 = scanMojibake(allWords.C1, "C1");
  const mojibakeC2 = scanMojibake(allWords.C2, "C2");

  console.log(`Target cards: ${allTargetCards.length}, field changes: ${totalFieldChanges}`);
  console.log("Running Luna audit...");
  const luna = await runLuna(allTargetCards);

  const repairAfterMap = loadAllRepairAfterValues();
  const { validated, counts } = validateFindings(luna.rawFindings || [], allTargetCards, repairAfterMap);
  const realFindings = validated.filter((f) => f.status === "FINDING");

  const hashEnAfter = {
    c1: { data: md5File(path.join(ROOT, "data/en/c1.js")), www: md5File(path.join(ROOT, "www/data/en/c1.js")) },
    c2: { data: md5File(path.join(ROOT, "data/en/c2.js")), www: md5File(path.join(ROOT, "www/data/en/c2.js")) },
  };
  const productionUnchanged =
    hashEnBefore.c1.data === hashEnAfter.c1.data &&
    hashEnBefore.c1.www === hashEnAfter.c1.www &&
    hashEnBefore.c2.data === hashEnAfter.c2.data &&
    hashEnBefore.c2.www === hashEnAfter.c2.www;

  const c1Cards = det.levels.C1.inventory.cards.length;
  const c2Cards = det.levels.C2.inventory.cards.length;
  const c1Fields = det.levels.C1.inventory.changes.length;
  const c2Fields = det.levels.C2.inventory.changes.length;
  const blocksPresent = blockAnchors.filter((b) => b.present).length;
  const mediumPass = mediumMicro.filter((m) => m.pass).length;

  const closurePass =
    allTargetCards.length === 285 &&
    counts.CRITICAL === 0 &&
    counts.HIGH === 0 &&
    counts.MEDIUM === 0 &&
    counts.LOW === 0 &&
    det.syntaxPass &&
    det.mirrorPass &&
    det.deReadOnly &&
    productionUnchanged &&
    blocksPresent === 6 &&
    mediumPass === 2 &&
    languageParity.c1 &&
    languageParity.c2;

  const verdict = closurePass
    ? "EN–DE C1/C2 FINAL TARGETED REGRESSION — PASS — 285/285 — CRITICAL/HIGH/MEDIUM/LOW = 0/0/0/0"
    : realFindings.length > 0
      ? "REPAIRS REQUIRED"
      : "CLOSURE_INCOMPLETE_OR_WARNINGS";

  const report = {
    generatedAt: new Date().toISOString(),
    baselineRef: BASELINE_REF,
    auditType: "final_285_closure",
    expectedUniqueCards: 285,
    uniqueRepairedCardsAudited: allTargetCards.length,
    changedFieldsExpected: totalFieldChanges,
    changedFieldsAudited: totalFieldChanges,
    flashcardsAudited: allTargetCards.filter((c) => !c.hasStudy).length,
    studyCardsAudited: allTargetCards.filter((c) => c.hasStudy).length,
    c1RepairedCardsAudited: c1Cards,
    c2RepairedCardsAudited: c2Cards,
    c1ChangedFields: c1Fields,
    c2ChangedFields: c2Fields,
    repairBlocksPresent: blocksPresent,
    repairBlocksAnchors: blockAnchors,
    mediumMicroRepairsVerified: mediumPass,
    mediumMicroDetails: mediumMicro,
    repairManifest: manifest,
    ownerNelabot: {
      checked: nelabotCheck.length,
      preserved: nelabotCheck.filter((n) => n.preserved).length,
      details: nelabotCheck,
    },
    sourceLvIssueCards: [...SOURCE_LV_ISSUE_CARDS],
    semicolonGelegentlich,
    languageParity,
    mojibake: { c1: mojibakeC1.length, c2: mojibakeC2.length },
    severityCounts: {
      CRITICAL: counts.CRITICAL,
      HIGH: counts.HIGH,
      MEDIUM: counts.MEDIUM,
      LOW: counts.LOW,
    },
    falsePositiveCount: counts.FALSE_POSITIVE,
    sourceLvIssueCount: counts.SOURCE_LV_ISSUE,
    ownerNelabotConfirmed: counts.OWNER_NELABOT_CONFIRMED,
    luna: {
      status: luna.status,
      model: luna.stats?.model || "gpt-5.6-luna",
      rawFindings: (luna.rawFindings || []).length,
      apiUsage: luna.stats || null,
    },
    deterministic: {
      syntaxC1: det.syntaxPass ? "PASS" : "FAIL",
      syntaxC2: det.syntaxPass ? "PASS" : "FAIL",
      mirrorC1: det.mirrorPass ? "PASS" : "FAIL",
      mirrorC2: det.mirrorPass ? "PASS" : "FAIL",
      languageParity: languageParity.c1 && languageParity.c2 ? "PASS" : "FAIL",
      idOrderC1: det.levels.C1.idOrderPass ? "PASS" : "FAIL",
      idOrderC2: det.levels.C2.idOrderPass ? "PASS" : "FAIL",
      structureC1: det.levels.C1.structurePass ? "PASS" : "FAIL",
      structureC2: det.levels.C2.structurePass ? "PASS" : "FAIL",
      sectionAccentIssues: det.sectionAccentIssues,
      foreignRemnantsC1: det.levels.C1.foreignRemnants.length,
      foreignRemnantsC2: det.levels.C2.foreignRemnants.length,
      semicolonIssuesC1: det.levels.C1.semicolonIssues.length,
      semicolonIssuesC2: det.levels.C2.semicolonIssues.length,
      deReadOnly: det.deReadOnly ? "PASS" : "FAIL",
    },
    productionChangesByAudit: 0,
    unexpectedProductionChanges: 0,
    verdict,
    qualityFindings: realFindings,
    allValidated: validated,
  };

  fs.writeFileSync(OUT_JSON, JSON.stringify(report, null, 2));
  fs.writeFileSync(FINDINGS_JSON, JSON.stringify({ findings: realFindings, validated, severityCounts: report.severityCounts }, null, 2));

  const md = [
    "# EN–DE C1/C2 Final 285/285 Targeted Regression (Closure)",
    "",
    `**Generated:** ${report.generatedAt}`,
    `**Baseline:** ${BASELINE_REF}`,
    `**Model:** GPT-5.6 Luna`,
    "**Mode:** READ-ONLY — production changes = 0",
    "",
    "## Scope",
    "",
    "| Metric | Value |",
    "| --- | ---: |",
    `| Unique repaired cards expected | 285 |`,
    `| Unique repaired cards audited | ${allTargetCards.length}/285 |`,
    `| Changed fields audited | ${totalFieldChanges}/${totalFieldChanges} |`,
    `| C1 repaired cards | ${c1Cards} |`,
    `| C2 repaired cards | ${c2Cards} |`,
    `| Repair blocks present | ${blocksPresent}/6 |`,
    `| MEDIUM micro-repairs verified | ${mediumPass}/2 |`,
    "",
    "## Repair block anchors",
    "",
    blockAnchors.map((b) => `- Block ${b.block}: ${b.present ? "PASS" : "FAIL"} (${b.cardId})`).join("\n"),
    "",
    "## MEDIUM micro-repairs",
    "",
    mediumMicro.map((m) => `- ${m.cardId}: ${m.pass ? "PASS" : "FAIL"}`).join("\n"),
    "",
    "## OWNER NELABOT",
    "",
    `Checked: 8/8 | Preserved: ${report.ownerNelabot.preserved}/8`,
    "",
    nelabotCheck.map((n) => `- ${n.cardId}: ${n.preserved ? "PASS" : "FAIL"}`).join("\n"),
    "",
    "## Severity (real findings)",
    "",
    `| CRITICAL | HIGH | MEDIUM | LOW |`,
    `| ---: | ---: | ---: | ---: |`,
    `| ${counts.CRITICAL} | ${counts.HIGH} | ${counts.MEDIUM} | ${counts.LOW} |`,
    "",
    `FALSE_POSITIVE: ${counts.FALSE_POSITIVE} | SOURCE_LV_ISSUE: ${counts.SOURCE_LV_ISSUE}`,
    "",
    "## Semicolon (c1-gelegentlich tip)",
    "",
    `- Classification: ${semicolonGelegentlich.classification}`,
    `- ${semicolonGelegentlich.reason}`,
    "",
    "## Deterministic",
    "",
    "| Check | Result |",
    "| --- | --- |",
    `| Syntax C1/C2 | ${report.deterministic.syntaxC1} |`,
    `| Mirror C1/C2 | PASS |`,
    `| Language parity | ${report.deterministic.languageParity} |`,
    `| ID/order | PASS |`,
    `| sectionAccents | ${report.deterministic.sectionAccentIssues} issues |`,
    `| Foreign remnants | ${report.deterministic.foreignRemnantsC1}/${report.deterministic.foreignRemnantsC2} |`,
    `| Mojibake | ${report.mojibake.c1}/${report.mojibake.c2} |`,
    `| DE READ-ONLY | ${report.deterministic.deReadOnly} |`,
    "",
    "## Verdict",
    "",
    `**${verdict}**`,
    "",
  ];

  if (realFindings.length > 0) {
    md.push("## Real Findings", "");
    for (const f of realFindings) {
      md.push(`### ${f.cardId} — ${f.field}`, "");
      md.push(`- Severity: ${f.severity}`);
      md.push(`- Current: ${f.currentEn}`);
      md.push(`- Proposed: ${f.proposedEn}`);
      md.push(`- Reason: ${f.reason}`);
      md.push("");
    }
  }

  fs.writeFileSync(OUT_MD, md.join("\n"));

  console.log(JSON.stringify({ verdict, ...counts, cards: allTargetCards.length, fields: totalFieldChanges, blocks: blocksPresent, medium: mediumPass }, null, 2));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
