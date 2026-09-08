#!/usr/bin/env node
"use strict";

const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT, dataPath, readFile } = require("../audit-common");
const { writeReportAtomic } = require("../content-discovery/report-builder");
const {
  loadG2Level,
  exportG2LevelFlat,
  CROWDIN_TARGET_LOCALE_IDS,
  crowdinLocaleToRepo,
} = require("../content-crowdin-bridge");
const { applyG2FlashcardsFlat, flattenG2Flashcards } = require("../content-crowdin-bridge/flatten-g2-flashcards");
const { writeArrayFile } = require("../de-sync-core");
const { loadCrowdinFlat } = require("./staging-objects");
const {
  STAGING_ROOT,
  EXPECTED_LANG_COUNT,
  EXPECTED_KEY_COUNT,
  EXPECTED_OBJECT_COUNT,
  EXPECTED_VALUE_COUNT,
  LUNA_RUNS_ROOT,
} = require("./constants");

const OWNER_AUTHORIZATION = "G2_A1_CROWDIN_STAGING_TO_APP_APPLY_APPROVED";
const OWNER_DECISION = "IMPORT_CROWDIN_A1_STAGING_AS_CURRENT_APP_BASELINE";
const EXPECTED_OWNER_SOURCE_HASH = "a6881d7d449aa331661f4bac3c792e7ec71659cc7411e52590d757942cd63419";
const A1_VAR_NAME = "A1_WORDS";
const NATIVE_STUDY_FIELDS = ["translation", "title", "note", "subtitle", "lead", "question"];

function sha256File(filePath) {
  return crypto.createHash("sha256").update(fs.readFileSync(filePath)).digest("hex");
}

function sha256Hex(value) {
  return crypto.createHash("sha256").update(value).digest("hex");
}

function checkpointSetSha() {
  if (!fs.existsSync(LUNA_RUNS_ROOT)) return null;
  const files = fs
    .readdirSync(LUNA_RUNS_ROOT)
    .filter((f) => f === "progress.json" || f.endsWith("-findings.json"))
    .sort()
    .map((f) => path.join(LUNA_RUNS_ROOT, f));
  const payload = files.map((p) => `${path.basename(p)}:${sha256File(p)}`).join("\n");
  return sha256Hex(payload);
}

function copyNativeOntoProduction(translated, production) {
  const out = JSON.parse(JSON.stringify(production));
  out.lv = translated.lv;
  const ts = translated.study;
  if (!ts || !production.study) return out;
  const ps = out.study;
  for (const field of NATIVE_STUDY_FIELDS) {
    if (ts[field] !== undefined) ps[field] = ts[field];
  }
  if (Array.isArray(ts.explanation)) ps.explanation = JSON.parse(JSON.stringify(ts.explanation));
  if (Array.isArray(ts.tip)) ps.tip = JSON.parse(JSON.stringify(ts.tip));
  if (Array.isArray(ts.important)) ps.important = JSON.parse(JSON.stringify(ts.important));
  if (Array.isArray(ts.examples) && Array.isArray(ps.examples)) {
    for (let i = 0; i < ts.examples.length && i < ps.examples.length; i += 1) {
      if (ts.examples[i].lv !== undefined) ps.examples[i].lv = ts.examples[i].lv;
    }
  }
  if (Array.isArray(ts.comparison) && Array.isArray(ps.comparison)) {
    for (let i = 0; i < ts.comparison.length && i < ps.comparison.length; i += 1) {
      if (ts.comparison[i].meaning !== undefined) ps.comparison[i].meaning = ts.comparison[i].meaning;
      if (ts.comparison[i].example !== undefined) ps.comparison[i].example = ts.comparison[i].example;
    }
  }
  return out;
}

function deSnapshot(cards) {
  return cards.map((card) => ({
    de: card.de,
    de_article: card.de_article,
    de_plural: card.de_plural,
    examplesDe: (card.study?.examples || []).map((ex) => ex.de),
    comparisonWord: (card.study?.comparison || []).map((row) => row.word),
  }));
}

function verifyDeUnchanged(beforeCards, afterCards) {
  const before = deSnapshot(beforeCards);
  const after = deSnapshot(afterCards);
  return JSON.stringify(before) === JSON.stringify(after);
}

function writeA1Dataset(lang, cards, dryRun = false) {
  const relPaths = [dataPath(lang, "a1.js"), dataPath(lang, "a1.js", { www: true })];
  if (dryRun) {
    return relPaths;
  }
  for (const rel of relPaths) {
    const abs = path.join(ROOT, rel);
    fs.mkdirSync(path.dirname(abs), { recursive: true });
    writeArrayFile(abs, A1_VAR_NAME, cards);
  }
  return relPaths;
}

function verifyNodeCheck(relPaths) {
  for (const rel of relPaths) {
    execSync(`node --check ${JSON.stringify(path.join(ROOT, rel))}`, { stdio: "pipe" });
  }
}

function countOwnerFindings() {
  const csv = fs.readFileSync(path.join(ROOT, "reports/g2-a1-phase3-owner-decisions.csv"), "utf8").trim();
  const lines = csv.split(/\r?\n/).slice(1);
  let pending = 0;
  for (const line of lines) {
    if (line.includes('"PENDING"')) pending += 1;
  }
  return { total: lines.length, pending };
}

function applyLanguage(lang, options = {}) {
  const stagingRoot = options.stagingRoot || STAGING_ROOT;
  const lvCards = options.lvCards || loadG2Level("lv", "a1");
  const stagingFlat = loadCrowdinFlat(lang, stagingRoot);
  const stagingKeys = Object.keys(stagingFlat);
  if (stagingKeys.length !== EXPECTED_KEY_COUNT) {
    throw new Error(`STAGING_KEY_COUNT_MISMATCH:${lang}:${stagingKeys.length}`);
  }

  const translated = applyG2FlashcardsFlat("a1", lvCards, stagingFlat);
  const translatedFlat = flattenG2Flashcards("a1", translated);
  let stagingMatch = 0;
  for (const [key, value] of Object.entries(stagingFlat)) {
    if (translatedFlat[key] === value) stagingMatch += 1;
  }
  if (stagingMatch !== EXPECTED_KEY_COUNT) {
    throw new Error(`STAGING_ROUNDTRIP_MISMATCH:${lang}:${stagingMatch}/${EXPECTED_KEY_COUNT}`);
  }

  const productionBefore = loadG2Level(lang, "a1");
  if (productionBefore.length !== EXPECTED_OBJECT_COUNT) {
    throw new Error(`PRODUCTION_OBJECT_COUNT_MISMATCH:${lang}:${productionBefore.length}`);
  }
  for (let i = 0; i < lvCards.length; i += 1) {
    if (productionBefore[i].de !== lvCards[i].de) {
      throw new Error(`DE_ALIGNMENT_MISMATCH:${lang}:${i}:${productionBefore[i].de}`);
    }
  }

  const merged = productionBefore.map((card, index) =>
    copyNativeOntoProduction(translated[index], card),
  );
  if (!verifyDeUnchanged(productionBefore, merged)) {
    throw new Error(`DE_INTEGRITY_FAIL:${lang}`);
  }
  for (let i = 0; i < merged.length; i += 1) {
    if (merged[i].lv !== translated[i].lv) {
      throw new Error(`NATIVE_FIELD_MISMATCH:${lang}:${i}`);
    }
  }

  const writtenPaths = writeA1Dataset(lang, merged, options.dryRun);
  if (!options.dryRun) {
    verifyNodeCheck(writtenPaths);
    const dataText = readFile(writtenPaths[0]);
    const wwwText = readFile(writtenPaths[1]);
    if (dataText !== wwwText) {
      throw new Error(`DATA_WWW_MISMATCH:${lang}`);
    }
  }

  return {
    lang,
    keysMatched: stagingMatch,
    objects: merged.length,
    deIntegrity: "PASS",
    stagingRoundTrip: "PASS",
    files: writtenPaths,
    dryRun: Boolean(options.dryRun),
  };
}

function runCrowdinStagingCopyOnlyApply(options = {}) {
  const root = options.root || ROOT;
  const stagingRoot = options.stagingRoot || STAGING_ROOT;
  const dryRun = Boolean(options.dryRun);
  const errors = [];

  const ownerProofPath = path.join(root, "reports/g2-a1-phase3-owner-proof.json");
  const ownerProof = JSON.parse(fs.readFileSync(ownerProofPath, "utf8"));
  if (ownerProof.sourceHash !== EXPECTED_OWNER_SOURCE_HASH) {
    errors.push(`OWNER_SOURCE_HASH_MISMATCH:${ownerProof.sourceHash}`);
  }

  const ownerDecisionPath = path.join(root, "reports/g2-a1-crowdin-app-apply-owner-decision.md");
  if (!fs.existsSync(ownerDecisionPath)) {
    errors.push("OWNER_DECISION_FILE_MISSING");
  } else {
    const decisionText = fs.readFileSync(ownerDecisionPath, "utf8");
    if (!decisionText.includes(OWNER_AUTHORIZATION) || !decisionText.includes(OWNER_DECISION)) {
      errors.push("OWNER_DECISION_TEXT_INVALID");
    }
  }

  const lvSourceBefore = sha256File(path.join(root, "data/a1.js"));
  const checkpointBefore = checkpointSetSha();
  const ownerSourceBefore = ownerProof.sourceHash;

  const stagingFiles = fs
    .readdirSync(stagingRoot)
    .filter((f) => f.endsWith(".json"))
    .sort();
  if (stagingFiles.length !== EXPECTED_LANG_COUNT) {
    errors.push(`STAGING_LANG_COUNT:${stagingFiles.length}`);
  }

  const lvCards = loadG2Level("lv", "a1");
  if (lvCards.length !== EXPECTED_OBJECT_COUNT) {
    errors.push(`LV_OBJECT_COUNT:${lvCards.length}`);
  }

  const perLanguage = [];
  if (!errors.length) {
    for (const crowdinLocaleId of CROWDIN_TARGET_LOCALE_IDS) {
      const lang = crowdinLocaleToRepo(crowdinLocaleId);
      try {
        perLanguage.push(
          applyLanguage(lang, {
            stagingRoot,
            lvCards,
            dryRun,
          }),
        );
      } catch (err) {
        errors.push(err.message || String(err));
        break;
      }
    }
  }

  const valuesMatched = perLanguage.reduce((sum, row) => sum + row.keysMatched, 0);
  const lvSourceAfter = sha256File(path.join(root, "data/a1.js"));
  const checkpointAfter = checkpointSetSha();
  const ownerProofAfter = JSON.parse(fs.readFileSync(ownerProofPath, "utf8")).sourceHash;
  const findings = countOwnerFindings();

  const pass =
    errors.length === 0 &&
    perLanguage.length === EXPECTED_LANG_COUNT &&
    valuesMatched === EXPECTED_VALUE_COUNT &&
    lvSourceBefore === lvSourceAfter &&
    checkpointBefore === checkpointAfter &&
    ownerSourceBefore === ownerProofAfter &&
    findings.total === 22750 &&
    findings.pending === 22750;

  const result = {
    pass,
    classification: pass
      ? "G2_A1_CROWDIN_STAGING_TO_APP_COPY_ONLY_APPLY_PASS"
      : "G2_A1_CROWDIN_STAGING_TO_APP_COPY_ONLY_APPLY_BLOCKED",
    ownerAuthorization: OWNER_AUTHORIZATION,
    ownerDecision: OWNER_DECISION,
    dryRun,
    stagingRoot: path.relative(root, stagingRoot).replace(/\\/g, "/"),
    languagesApplied: perLanguage.length,
    valuesMatched,
    valuesExpected: EXPECTED_VALUE_COUNT,
    filesChanged: dryRun ? 0 : perLanguage.length * 2,
    deFieldsChanged: 0,
    lvSourceChanged: lvSourceBefore !== lvSourceAfter,
    lunaFindingsCount: findings.total,
    lunaFindingsPending: findings.pending,
    lunaFindingsStatus: "DEFERRED_POST_IMPORT_BACKLOG",
    newLunaCalls: 0,
    automaticOwnerDecisions: 0,
    checkpointShaBefore: checkpointBefore,
    checkpointShaAfter: checkpointAfter,
    ownerSourceHashBefore: ownerSourceBefore,
    ownerSourceHashAfter: ownerProofAfter,
    lvSourceShaBefore: lvSourceBefore,
    lvSourceShaAfter: lvSourceAfter,
    perLanguage,
    errors,
    nextStep: pass ? "OWNER_REVIEW_APPLY_PR" : "BLOCKED_FIX_APPLY_FAILURE",
  };

  result.outputHash = sha256Hex(
    JSON.stringify({
      classification: result.classification,
      dryRun,
      valuesMatched: result.valuesMatched,
      perLanguage: perLanguage.map((row) => row.lang),
      errors,
    }),
  );

  return result;
}

function buildMarkdown(result) {
  const lines = [
    "# G2/A1 Phase 3 — Crowdin staging → App copy-only apply",
    "",
    `**Classification:** \`${result.classification}\``,
    `**Dry run:** ${result.dryRun ? "YES" : "NO"}`,
    `**Output hash:** \`${result.outputHash}\``,
    "",
    "## Summary",
    "",
    "| Metric | Value |",
    "|--------|------:|",
    `| Languages applied | ${result.languagesApplied}/31 |`,
    `| Staging values matched | ${result.valuesMatched}/${result.valuesExpected} |`,
    `| Files changed | ${result.filesChanged} |`,
    `| DE fields changed | ${result.deFieldsChanged} |`,
    `| LV source changed | ${result.lvSourceChanged ? "YES" : "NO"} |`,
    `| Luna findings | ${result.lunaFindingsCount} (${result.lunaFindingsStatus}) |`,
    `| New Luna calls | ${result.newLunaCalls} |`,
    "",
    "> Copy-only apply from Crowdin staging checkpoint. Luna findings remain deferred.",
    "",
  ];
  if (result.errors.length) {
    lines.push("## Errors", "");
    for (const err of result.errors) lines.push(`- ${err}`);
    lines.push("");
  }
  return `${lines.join("\n")}\n`;
}

function writeApplyReports(result, root = ROOT) {
  const mdPath = path.join(root, "reports/g2-a1-phase3-crowdin-app-apply.md");
  const jsonPath = path.join(root, "reports/g2-a1-phase3-crowdin-app-apply.json");
  const proofPath = path.join(root, "reports/g2-a1-phase3-crowdin-app-apply-proof.json");
  writeReportAtomic(mdPath, buildMarkdown(result));
  writeReportAtomic(jsonPath, {
    classification: result.classification,
    dryRun: result.dryRun,
    outputHash: result.outputHash,
    languagesApplied: result.languagesApplied,
    valuesMatched: result.valuesMatched,
    valuesExpected: result.valuesExpected,
    perLanguage: result.perLanguage,
    errors: result.errors,
  });
  writeReportAtomic(proofPath, result);
  return { mdPath, jsonPath, proofPath };
}

module.exports = {
  OWNER_AUTHORIZATION,
  OWNER_DECISION,
  EXPECTED_OWNER_SOURCE_HASH,
  copyNativeOntoProduction,
  applyLanguage,
  runCrowdinStagingCopyOnlyApply,
  writeApplyReports,
  checkpointSetSha,
  sha256File,
};
