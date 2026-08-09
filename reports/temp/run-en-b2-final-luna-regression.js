#!/usr/bin/env node
/**
 * EN-DE B2 final targeted Luna regression (READ-ONLY).
 * Baseline: 496f377f → audited: c9f2f6b5
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const crypto = require("crypto");
const { execSync } = require("child_process");

const ROOT = path.join(__dirname, "..", "..");
const BASELINE_COMMIT = "496f377f";
const AUDITED_COMMIT = "c9f2f6b5";
const EN_FILE = path.join(ROOT, "data", "en", "b2.js");
const WWW_FILE = path.join(ROOT, "www", "data", "en", "b2.js");
const DE_FILE = path.join(ROOT, "data", "b2.js");
const LV_FILE = path.join(ROOT, "data", "b2.js");
const COMPLETE_REVIEW = path.join(__dirname, "en-b2-complete-owner-review.json");

const OUT_MD = path.join(ROOT, "reports", "en-b2-final-luna-regression.md");
const OUT_JSON = path.join(ROOT, "reports", "temp", "en-b2-final-luna-regression.json");
const TARGET_JSON = path.join(__dirname, "en-b2-final-luna-target-cards.json");
const RAW_JSON = path.join(__dirname, "en-b2-final-luna-raw-findings.json");
const VALIDATED_JSON = path.join(__dirname, "en-b2-final-luna-validated-findings.json");

const LUNA_MODEL = "gpt-5.6-luna";
const BATCH_SIZE_SIMPLE = 40;
const BATCH_SIZE_STUDY = 8;

const KNOWN_LV_PATTERNS = [/kam\?/i, /ko\?/i, /whom\?/i, /what\?/i, /\bförden\b/i, /bez sich/i, /Ko vieta/i, /Podnieka/i];
const LV_ONLY = /[āēīūģķļņĀĒĪŪĢĶĻŅ]/;

function md5File(p) {
  return crypto.createHash("md5").update(fs.readFileSync(p)).digest("hex");
}

function gitShow(commit, filePath) {
  return execSync(`git show ${commit}:${filePath}`, { cwd: ROOT, encoding: "utf8", maxBuffer: 50 * 1024 * 1024 });
}

function loadFromCode(code) {
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.B2_WORDS;
}

function loadFile(p) {
  return loadFromCode(fs.readFileSync(p, "utf8"));
}

function entryId(entry, index) {
  return entry.study?.id || `b2-${entry.de}-${index}`;
}

function isLearnerEnPath(fieldPath) {
  if (fieldPath === "lv") return true;
  if (!fieldPath.startsWith("study.")) return false;
  const leaf = fieldPath.split(".").pop().replace(/\[\d+\]/, "");
  return ["lv", "translation", "meaning", "title", "subtitle", "text", "example", "formsLabel", "rektion", "forms"].includes(leaf);
}

function walkEnChanges(entry, baseEntry, cardId, prefix, changes) {
  if (!entry && !baseEntry) return;
  if (typeof entry === "string" || typeof baseEntry === "string") {
    const a = entry ?? "";
    const b = baseEntry ?? "";
    if (a !== b && isLearnerEnPath(prefix)) {
      changes.push({ cardId, fieldPath: prefix, baseline: b, final: a });
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

function buildTargetInventory(baselineEn, finalEn, baselineLv) {
  const changes = [];
  for (let i = 0; i < baselineEn.length; i++) {
    walkEnChanges(finalEn[i], baselineEn[i], entryId(finalEn[i], i), "", changes);
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
    const cardId = entryId(enE, i);
    if (!byCard.has(cardId)) continue;

    const changedFields = byCard.get(cardId);
    const study = enE.study;
    const payload = {
      cardId,
      de: enE.de,
      de_article: enE.de_article || null,
      de_plural: enE.de_plural || null,
      enMain: enE.lv,
      lvMainSource: lvE.lv,
      changedFields: changedFields.map((f) => ({
        fieldPath: f.fieldPath,
        baselineEn: f.baseline,
        currentEn: f.final,
      })),
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
  return { changes, cards, uniqueCards: cards.length, fieldEdits: changes.length };
}

function parseStudyDesign() {
  try {
    const out = execSync("node scripts/validate-study-design.js --lang=en", {
      cwd: ROOT,
      encoding: "utf8",
      maxBuffer: 50 * 1024 * 1024,
    });
    return JSON.parse(out);
  } catch (e) {
    return JSON.parse(e.stdout || "{}");
  }
}

function scanForeign(words) {
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
  for (const e of words) {
    walk(e, [], false, e.study?.id || e.de);
  }
  return findings;
}

function countFormsLabel(words) {
  let management = 0, government = 0, rection = 0;
  for (const e of words) {
    const fl = e.study?.formsLabel;
    if (!fl) continue;
    if (fl.includes("Management:")) management++;
    if (fl.includes("Government:")) government++;
    if (fl.includes("Rection:")) rection++;
  }
  return { management, government, rection };
}

function structuralCounts(words) {
  const studies = words.filter((e) => e.study);
  return {
    cards: words.length,
    studies: studies.length,
    standardStudy: studies.filter((e) => e.study.layout === "standardStudy" || !e.study.layout).length,
    minimalStudy: studies.filter((e) => e.study.layout === "minimalStudy").length,
    flashcards: words.filter((e) => !e.study).length,
  };
}

async function runLunaIfAvailable(targetCards) {
  if (!process.env.OPENAI_API_KEY?.trim()) {
    return {
      status: "NOT_RUN_API_UNAVAILABLE",
      audited: 0,
      expected: targetCards.length,
      batches: 0,
      rawFindings: [],
      stats: null,
    };
  }

  const { auditCardsBatch, createStats } = require("./openai-luna-en-b2-full-audit");
  const stats = createStats();
  const rawFindings = [];
  let batchNum = 0;

  const simple = targetCards.filter((c) => !c.hasStudy);
  const study = targetCards.filter((c) => c.hasStudy);

  function chunk(arr, n) {
    const out = [];
    for (let i = 0; i < arr.length; i += n) out.push(arr.slice(i, i + n));
    return out;
  }

  for (const batch of chunk(simple, BATCH_SIZE_SIMPLE)) {
    batchNum++;
    const lunaCards = batch.map((c) => ({
      cardId: c.cardId,
      field: "lv",
      de: c.de,
      deArticle: c.de_article,
      dePlural: c.de_plural,
      lvSource: c.lvMainSource,
      enText: c.enMain,
      changedFields: c.changedFields,
    }));
    const { findings } = await auditCardsBatch({
      cards: lunaCards,
      stats,
      batchLabel: `simple-${batchNum}`,
      auditType: "final_targeted_regression",
    });
    rawFindings.push(...findings);
  }

  for (const batch of chunk(study, BATCH_SIZE_STUDY)) {
    batchNum++;
    const lunaCards = batch.map((c) => ({
      cardId: c.cardId,
      de: c.de,
      deArticle: c.de_article,
      layout: c.study?.layout,
      changedFields: c.changedFields,
      studyContext: c.study,
      enMain: c.enMain,
      lvMainSource: c.lvMainSource,
    }));
    const { findings } = await auditCardsBatch({
      cards: lunaCards,
      stats,
      batchLabel: `study-${batchNum}`,
      auditType: "final_targeted_regression",
    });
    rawFindings.push(...findings);
  }

  return {
    status: "COMPLETED",
    audited: targetCards.length,
    expected: targetCards.length,
    batches: batchNum,
    rawFindings,
    stats,
  };
}

function validateFindings(rawFindings, deSourceIds) {
  const validated = [];
  for (const f of rawFindings) {
    if (f.status === "PASS") continue;
    const cardId = f.cardId;
    const isDeSource = deSourceIds.has(cardId);
    const cat = String(f.category || "").toUpperCase();
    if (isDeSource || cat === "DE_SOURCE_ISSUE") {
      validated.push({
        ...f,
        validatedStatus: "DE_AVOTA_PROBLĒMA",
        validatedSeverity: "NAV",
        origin: "DE_AVOTA_PROBLĒMA",
      });
      continue;
    }
    if (cat === "STYLE_ONLY" || cat === "PROJECT_CONVENTION") {
      validated.push({
        ...f,
        validatedStatus: "VILTUS_POZITĪVS",
        validatedSeverity: "NAV",
        origin: "VILTUS_POZITĪVS",
      });
      continue;
    }
    const sev = String(f.severity || "MEDIUM").toUpperCase();
    const sevMap = { CRITICAL: "KRITISKA", HIGH: "AUGSTA", MEDIUM: "VIDĒJA", LOW: "ZEMA" };
    validated.push({
      ...f,
      validatedStatus: "REĀLA_PROBLĒMA",
      validatedSeverity: sevMap[sev] || "VIDĒJA",
      origin: "LABOJUMA_REGRESIJA",
    });
  }
  return validated;
}

async function main() {
  const hashEnBefore = { data: md5File(EN_FILE), www: md5File(WWW_FILE) };
  const hashDeBefore = md5File(DE_FILE);

  const baselineEn = loadFromCode(gitShow(BASELINE_COMMIT, "data/en/b2.js"));
  const baselineLv = loadFromCode(gitShow(BASELINE_COMMIT, "data/b2.js"));
  const finalEn = loadFile(EN_FILE);
  const inventory = buildTargetInventory(baselineEn, finalEn, baselineLv);

  fs.writeFileSync(
    TARGET_JSON,
    JSON.stringify(
      {
        generatedAt: new Date().toISOString(),
        baselineCommit: BASELINE_COMMIT,
        auditedCommit: AUDITED_COMMIT,
        uniqueCards: inventory.uniqueCards,
        fieldEdits: inventory.fieldEdits,
        cards: inventory.cards,
      },
      null,
      2
    )
  );

  const luna = await runLunaIfAvailable(inventory.cards);

  const hashEnAfter = { data: md5File(EN_FILE), www: md5File(WWW_FILE) };
  const hashDeAfter = md5File(DE_FILE);
  const productionUnchanged =
    hashEnBefore.data === hashEnAfter.data &&
    hashEnBefore.www === hashEnAfter.www &&
    hashDeBefore === hashDeAfter;

  const studyDesign = parseStudyDesign();
  const b2 = studyDesign.perFile?.find((f) => f.file?.endsWith("/b2.js"));
  const sectionAccentCount = b2?.sectionAccentIssues ?? -1;
  const foreignFindings = scanForeign(finalEn);
  const formsLabel = countFormsLabel(finalEn);
  const structure = structuralCounts(finalEn);
  const mirrorPass = hashEnBefore.data === hashEnAfter.data && hashEnBefore.www === hashEnAfter.www;

  let syntaxPass = true;
  try {
    execSync("node --check data/en/b2.js", { cwd: ROOT });
  } catch {
    syntaxPass = false;
  }

  let parityPass = true;
  try {
    parityPass = JSON.parse(execSync("node scripts/audit-language-parity.js --lang=en", { cwd: ROOT, encoding: "utf8" })).pass;
  } catch {
    parityPass = false;
  }

  const complete = JSON.parse(fs.readFileSync(COMPLETE_REVIEW, "utf8"));
  const deSourceIds = new Set(
    complete.findings.filter((f) => f.status === "DE_SOURCE_ISSUE").map((f) => f.cardId)
  );

  if (luna.rawFindings.length) {
    fs.writeFileSync(RAW_JSON, JSON.stringify({ findings: luna.rawFindings, stats: luna.stats }, null, 2));
  } else {
    fs.writeFileSync(RAW_JSON, JSON.stringify({ status: luna.status, findings: [], stats: luna.stats }, null, 2));
  }

  const validated = validateFindings(luna.rawFindings, deSourceIds);
  fs.writeFileSync(VALIDATED_JSON, JSON.stringify({ findings: validated }, null, 2));

  const rawCounts = { KRITISKA: 0, AUGSTA: 0, VIDĒJA: 0, ZEMA: 0 };
  for (const f of luna.rawFindings) {
    const s = String(f.severity || "").toUpperCase();
    if (s === "CRITICAL") rawCounts.KRITISKA++;
    else if (s === "HIGH") rawCounts.AUGSTA++;
    else if (s === "MEDIUM") rawCounts.VIDĒJA++;
    else if (s === "LOW") rawCounts.ZEMA++;
  }

  const valCounts = { KRITISKA: 0, AUGSTA: 0, VIDĒJA: 0, ZEMA: 0, VILTUS_POZITĪVS: 0, DE_AVOTA_PROBLĒMA: 0 };
  let repairRegression = 0, preExisting = 0;
  for (const f of validated) {
    if (f.validatedSeverity === "KRITISKA") valCounts.KRITISKA++;
    else if (f.validatedSeverity === "AUGSTA") valCounts.AUGSTA++;
    else if (f.validatedSeverity === "VIDĒJA") valCounts.VIDĒJA++;
    else if (f.validatedSeverity === "ZEMA") valCounts.ZEMA++;
    if (f.validatedStatus === "VILTUS_POZITĪVS") valCounts.VILTUS_POZITĪVS++;
    if (f.validatedStatus === "DE_AVOTA_PROBLĒMA") valCounts.DE_AVOTA_PROBLĒMA++;
    if (f.origin === "LABOJUMA_REGRESIJA") repairRegression++;
    if (f.origin === "IEPRIEKŠ_EKSISTĒJA") preExisting++;
  }

  let verdict;
  if (luna.status === "NOT_RUN_API_UNAVAILABLE") {
    verdict = "LUNA AUDITS NAV PABEIGTS";
  } else if (luna.audited < inventory.uniqueCards) {
    verdict = "LUNA AUDITS NAV PABEIGTS";
  } else if (
    valCounts.KRITISKA === 0 &&
    valCounts.AUGSTA === 0 &&
    valCounts.VIDĒJA === 0 &&
    valCounts.ZEMA === 0
  ) {
    verdict = "EN–DE B2 GALA LUNA REGRESIJA: PASS";
  } else {
    verdict = "EN–DE B2 — NEPIECIEŠAMI PAPILDU LABOJUMI";
  }

  const reportCommit = execSync("git rev-parse HEAD", { cwd: ROOT, encoding: "utf8" }).trim();

  const result = {
    generatedAt: new Date().toISOString(),
    branch: "cursor/en-b2-full-audit-6850",
    pr: "#376",
    baselineCommit: BASELINE_COMMIT,
    auditedProductionCommit: AUDITED_COMMIT,
    reportCommit,
    scope: {
      uniqueChangedCards: inventory.uniqueCards,
      changedEnFields: inventory.fieldEdits,
      lunaAudited: luna.audited,
      lunaExpected: inventory.uniqueCards,
      apiBatches: luna.batches,
    },
    luna: {
      model: LUNA_MODEL,
      status: luna.status,
      apiAvailable: Boolean(process.env.OPENAI_API_KEY?.trim()),
      rawCounts,
      rawTotal: luna.rawFindings.length,
      validatedCounts: valCounts,
      repairRegression,
      preExisting,
      stats: luna.stats,
    },
    safety: {
      productionUnchanged,
      deReadOnly: hashDeBefore === hashDeAfter,
      structure: structure.cards === 2118 && structure.flashcards === 2058 ? "PASS" : "FAIL",
      mirror: mirrorPass ? "PASS" : "FAIL",
      sectionAccents: sectionAccentCount === 0 ? "PASS" : "FAIL",
      sectionAccentCount,
      foreignRemnants: foreignFindings.length,
      formsLabel,
      syntaxPass,
      parityPass,
      counts: structure,
    },
    verdict,
  };

  fs.writeFileSync(OUT_JSON, JSON.stringify(result, null, 2));

  const md = [
    "# EN–DE B2 — Gala mērķētais Luna regresijas audits",
    "",
    "**Datums:** " + new Date().toISOString().slice(0, 10),
    "**Režīms:** TIKAI LASĪŠANA (production izmaiņas = 0)",
    "**Branch:** cursor/en-b2-full-audit-6850",
    "**PR:** #376",
    "",
    "## Tvērums",
    "",
    "| Metrika | Skaits |",
    "| --- | ---: |",
    "| Baseline commit | " + BASELINE_COMMIT + " |",
    "| Audited production commit | " + AUDITED_COMMIT + " |",
    "| Unikālās mainītās kartītes | " + inventory.uniqueCards + " |",
    "| Mainīti learner-facing EN lauki | " + inventory.fieldEdits + " |",
    "| Luna auditētas | " + luna.audited + "/" + inventory.uniqueCards + " |",
    "| API partijas | " + luna.batches + " |",
    "",
    "## Luna statuss",
    "",
    "**" + luna.status + "**",
    "",
    luna.status === "NOT_RUN_API_UNAVAILABLE"
      ? "Luna audits NAV PALAISTS — API nav pieejams. Gala lingvistiskā PASS nav iespējams."
      : "Luna audits pabeigts.",
    "",
    "## Luna sākotnējie atradumi (raw)",
    "",
    "| Nopietnība | Skaits |",
    "| --- | ---: |",
    "| KRITISKA | " + rawCounts.KRITISKA + " |",
    "| AUGSTA | " + rawCounts.AUGSTA + " |",
    "| VIDĒJA | " + rawCounts.VIDĒJA + " |",
    "| ZEMA | " + rawCounts.ZEMA + " |",
    "| Kopā | " + luna.rawFindings.length + " |",
    "",
    "## Pēc neatkarīgas validācijas",
    "",
    "| Rezultāts | Skaits |",
    "| --- | ---: |",
    "| KRITISKA | " + valCounts.KRITISKA + " |",
    "| AUGSTA | " + valCounts.AUGSTA + " |",
    "| VIDĒJA | " + valCounts.VIDĒJA + " |",
    "| ZEMA | " + valCounts.ZEMA + " |",
    "| VILTUS POZITĪVI | " + valCounts.VILTUS_POZITĪVS + " |",
    "| DE AVOTA PROBLĒMAS | " + valCounts.DE_AVOTA_PROBLĒMA + " |",
    "",
    "LABOJUMA REGRESIJAS: " + repairRegression + " | IEPRIEKŠ EKSISTĒJUŠAS: " + preExisting,
    "",
    "## Drošība",
    "",
    "| Pārbaude | Rezultāts |",
    "| --- | --- |",
    "| DE tikai lasāms | " + (hashDeBefore === hashDeAfter ? "PASS" : "FAIL") + " |",
    "| Production dati nemainīti | " + (productionUnchanged ? "PASS" : "FAIL") + " |",
    "| Struktūra | " + result.safety.structure + " |",
    "| sectionAccents | " + result.safety.sectionAccents + " (" + sectionAccentCount + ") |",
    "| Svešvalodu atlikumi | " + foreignFindings.length + " |",
    "| formsLabel Rection: | " + formsLabel.rection + " |",
    "",
    "## Gala verdikts",
    "",
    "**" + verdict + "**",
    "",
  ].join("\n");

  fs.writeFileSync(OUT_MD, md);
  console.log(JSON.stringify({ verdict, scope: result.scope, luna: luna.status, productionUnchanged }, null, 2));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
