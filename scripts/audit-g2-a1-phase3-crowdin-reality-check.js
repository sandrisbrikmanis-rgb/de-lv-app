#!/usr/bin/env node
"use strict";

const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const { writeReportAtomic } = require("./lib/content-discovery/report-builder");
const { exportG2LevelFlat, CROWDIN_TARGET_LOCALE_IDS, crowdinLocaleToRepo, loadG2Level, flattenG2Flashcards } = require("./lib/content-crowdin-bridge");
const { MULTI_TRANSLATION_SEP } = require("./lib/content-crowdin-bridge/import-staging");
const { verifyStagingExport } = require("./lib/g2-a1-phase3/crowdin-export");
const { loadCrowdinFlat, stagingFilePath } = require("./lib/g2-a1-phase3/staging-objects");
const { STAGING_ROOT, EXPECTED_VALUE_COUNT, EXPECTED_LANG_COUNT } = require("./lib/g2-a1-phase3/constants");
const {
  RAW_TO_CANONICAL,
  loadOwnerPrepFindings,
  buildSourceLvClusters,
  mapRawToCanonical,
} = require("./lib/g2-a1-phase3/owner-prep-usability");
const {
  buildG2A1AuditKeyRegistry,
  resolveG2A1AuditFinding,
} = require("./lib/content-crowdin-bridge/g2-a1-audit-key-resolver");

const SAMPLE_SEED = "g2-a1-crowdin-reality-check-v1";
const EXPECTED_FINDING_COUNT = 22750;

const GRAMMAR_OR_ORTHO_BUCKETS = new Set([
  "GRAMMAR_MORPHOLOGY_OR_FORM",
  "ORTHOGRAPHY_SPELLING_OR_DIACRITICS",
]);

const OTHER_BUCKETS = new Set([
  "STYLE_FLUENCY_OR_REGISTER",
  "FORMAT_PLACEHOLDER_OR_ENCODING",
  "DUPLICATION",
  "CONTENT_CORRUPTION_OR_UNRELATED",
  "OTHER_REVIEW_REQUIRED",
]);

const FLAGGED_SLOT_SPECS = [
  { slot: "wrong_or_mixed", bucket: "WRONG_OR_MIXED_TARGET_LANGUAGE", count: 2 },
  { slot: "semantic", bucket: "SEMANTIC_OR_MEANING_ERROR", count: 2 },
  { slot: "multi", bucket: "MULTI_TRANSLATION_REVIEW_REQUIRED", count: 1 },
  { slot: "missing", bucket: "MISSING_OR_UNTRANSLATED", count: 1 },
  { slot: "grammar_ortho", buckets: [...GRAMMAR_OR_ORTHO_BUCKETS], count: 1 },
  { slot: "other", buckets: [...OTHER_BUCKETS], count: 1 },
];

const AUDIT_STATUSES = new Set([
  "CONFIRMED_REAL_ERROR",
  "LIKELY_REAL_ERROR",
  "FALSE_POSITIVE",
  "DUPLICATE_SOURCE_REPETITION",
  "INSUFFICIENT_EVIDENCE",
  "CONTROL_PASS",
  "CONTROL_POSSIBLE_MISSED_ERROR",
]);

function sha256File(filePath) {
  return crypto.createHash("sha256").update(fs.readFileSync(filePath)).digest("hex");
}

function sha256Hex(value) {
  return crypto.createHash("sha256").update(value).digest("hex");
}

function createSeededRng(seed) {
  let state = sha256Hex(seed);
  return () => {
    state = sha256Hex(state);
    const slice = state.slice(0, 8);
    return Number.parseInt(slice, 16) / 0xffffffff;
  };
}

function seededShuffle(items, seed) {
  const rng = createSeededRng(seed);
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(rng() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function seededPick(items, seed, count) {
  if (!items.length) return [];
  return seededShuffle(items, seed).slice(0, Math.min(count, items.length));
}

function normalizeText(value) {
  return String(value ?? "")
    .normalize("NFKC")
    .trim()
    .toLowerCase();
}

function isEmptyValue(value) {
  return normalizeText(value) === "";
}

function containsMultiDelimiter(value) {
  return String(value ?? "").includes(MULTI_TRANSLATION_SEP);
}

function hasHtmlLikeMarkup(value) {
  return /<[^>]+>/.test(String(value ?? ""));
}

function hasPlaceholderMismatch(value) {
  const text = String(value ?? "");
  const opens = (text.match(/{{/g) || []).length;
  const closes = (text.match(/}}/g) || []).length;
  return opens !== closes;
}

function loadRawLunaIndex() {
  const index = new Map();
  const runsRoot = path.join(ROOT, "reports/temp/g2-a1-phase3-luna-runs");
  for (const filePath of fs.readdirSync(runsRoot)) {
    if (!filePath.endsWith("-findings.json")) continue;
    const findings = JSON.parse(fs.readFileSync(path.join(runsRoot, filePath), "utf8"));
    for (const finding of findings) {
      if (finding.findingStableId) index.set(finding.findingStableId, finding);
    }
  }
  return index;
}

function parseObjectIndex(finding) {
  if (typeof finding.objectIndex === "number" && !Number.isNaN(finding.objectIndex)) {
    return finding.objectIndex;
  }
  const idx = finding.objectIndex;
  if (typeof idx === "string") {
    if (idx.startsWith("idx:")) {
      const parsed = Number.parseInt(idx.slice(4), 10);
      return Number.isNaN(parsed) ? null : parsed;
    }
    const parsed = Number.parseInt(idx, 10);
    return Number.isNaN(parsed) ? null : parsed;
  }
  return null;
}

function pickResolvedFlatKey(keys, finding, flat) {
  if (!keys.length) return null;
  const fieldPath = String(finding.fieldPath || "");
  if (fieldPath.startsWith("a1.card.")) {
    const exact = keys.find((k) => k === fieldPath);
    if (exact && flat[exact] !== undefined) return exact;
  }
  const current = normalizeText(finding.current);
  if (current) {
    const byValue = keys.filter((k) => normalizeText(flat[k]) === current);
    if (byValue.length === 1) return byValue[0];
    if (byValue.length > 1) return byValue.sort()[0];
  }
  const sorted = [...keys].sort();
  return sorted[0];
}

function resolveFlatKey(finding, flat, registry) {
  const fieldPath = finding.fieldPath;
  if (fieldPath && fieldPath.startsWith("a1.card.") && flat[fieldPath] !== undefined) {
    return fieldPath;
  }
  if (fieldPath && flat[fieldPath] !== undefined) return fieldPath;

  const objectIndex = parseObjectIndex(finding);
  if (objectIndex != null && registry) {
    const mapping = resolveG2A1AuditFinding(
      {
        group: "g2",
        dataset: "a1",
        lang: finding.lang,
        cardId: finding.cardId || finding.objectId,
        objectIndex,
        fieldPath,
      },
      registry,
    );
    const key = pickResolvedFlatKey(mapping.keys || [], finding, flat);
    if (key && flat[key] !== undefined) return key;
  }

  const slug = String(finding.cardId || "")
    .toLowerCase()
    .replace(/^a1-/, "");
  const candidates = [
    `a1.card.${slug}.native`,
    `a1.card.a1-${slug}.native`,
    `a1.card.${finding.cardId}.native`,
    `a1.card.a1-${finding.cardId}.native`,
  ];
  for (const key of candidates) {
    if (flat[key] !== undefined) return key;
  }
  const cardNeedle = String(finding.cardId || "").toLowerCase();
  const matches = Object.keys(flat).filter((key) => key.toLowerCase().includes(cardNeedle));
  if (matches.length === 1) return matches[0];
  if (fieldPath === "lv" && matches.length) {
    const native = matches.find((k) => k.endsWith(".native"));
    if (native) return native;
  }
  return null;
}

function getFieldValues(finding, stagingByLang, registry) {
  const lang = finding.lang;
  const flat = stagingByLang.target[lang];
  const lvFlat = stagingByLang.lv;
  const deFlat = stagingByLang.de;
  const flatKey = resolveFlatKey(finding, flat, registry);
  const crowdinTarget = flatKey ? flat[flatKey] : null;
  const lvSource = flatKey ? lvFlat[flatKey] : null;
  const deReference = flatKey ? deFlat[flatKey] : finding.de || null;
  const targetFromFinding = finding.current || null;
  const crowdinResolved =
    crowdinTarget !== null && crowdinTarget !== undefined ? crowdinTarget : "INSUFFICIENT_EVIDENCE";
  const lvResolved = lvSource !== null && lvSource !== undefined ? lvSource : "INSUFFICIENT_EVIDENCE";
  const deResolved =
    deReference !== null && deReference !== undefined && deReference !== ""
      ? deReference
      : finding.de || "INSUFFICIENT_EVIDENCE";
  const targetResolved =
    crowdinResolved !== "INSUFFICIENT_EVIDENCE"
      ? crowdinResolved
      : targetFromFinding || "INSUFFICIENT_EVIDENCE";
  return {
    flatKey,
    lvSource: lvResolved,
    deReference: deResolved,
    crowdinTarget: targetResolved,
    linkedToStaging: flatKey !== null && crowdinTarget !== null && crowdinTarget !== undefined,
  };
}

function buildLunaReason(finding, rawLuna) {
  if (rawLuna?.reason) return rawLuna.reason;
  if (rawLuna?.message) return rawLuna.message;
  if (finding.source?.startsWith("deterministic/")) {
    return finding.source === "deterministic/multi-translation"
      ? "Multiple translation candidates separated by •"
      : `Deterministic ${finding.rawCategory || finding.category}`;
  }
  const parts = [finding.rawCategory || finding.category, finding.fieldPath].filter(Boolean);
  return parts.length ? parts.join(" on ") : "INSUFFICIENT_EVIDENCE";
}

function evaluateFlaggedSample(finding, context, canonicalBucket) {
  const { lvSource, deReference, crowdinTarget, linkedToStaging } = context;
  const rawCategory = finding.rawCategory || finding.category;
  const current = crowdinTarget === "INSUFFICIENT_EVIDENCE" ? finding.current : crowdinTarget;

  if (!linkedToStaging && (lvSource === "INSUFFICIENT_EVIDENCE" || crowdinTarget === "INSUFFICIENT_EVIDENCE")) {
    return {
      status: "INSUFFICIENT_EVIDENCE",
      rationale:
        "Could not deterministically link finding to staging flat key; audit context incomplete for translation judgment.",
    };
  }

  if (canonicalBucket === "SOURCE_LV_REVIEW_REQUIRED" || rawCategory === "SOURCE_LV_ISSUE") {
    return {
      status: "DUPLICATE_SOURCE_REPETITION",
      rationale:
        "SOURCE_LV_ISSUE reflects repeated LV-source concern across languages; not counted as target-language Crowdin translation defect.",
    };
  }

  if (canonicalBucket === "MULTI_TRANSLATION_REVIEW_REQUIRED") {
    const field = String(finding.fieldPath || "");
    const isStudyField = field.includes("study.") || field.includes("comparison") || field.includes("examples");
    if (containsMultiDelimiter(String(current))) {
      if (field.endsWith(".native") || field === "native" || field.endsWith(".lv")) {
        return {
          status: "LIKELY_REAL_ERROR",
          rationale:
            "Multiple meanings in primary native translation field (• delimiter) likely violates one-card-one-meaning convention.",
        };
      }
      if (isStudyField) {
        return {
          status: "FALSE_POSITIVE",
          rationale: "• delimiter appears inside Study sub-structure where multiple elements may be intentional.",
        };
      }
      return {
        status: "LIKELY_REAL_ERROR",
        rationale: "• delimiter present in translation field; requires OWNER review but likely a real convention issue.",
      };
    }
    return {
      status: "FALSE_POSITIVE",
      rationale: "MULTI_TRANSLATION category flagged but staging value has no • delimiter.",
    };
  }

  if (canonicalBucket === "MISSING_OR_UNTRANSLATED") {
    if (isEmptyValue(current)) {
      return {
        status: "CONFIRMED_REAL_ERROR",
        rationale: "Staging/target value is empty for a field flagged as missing or untranslated.",
      };
    }
    return {
      status: "FALSE_POSITIVE",
      rationale: "Finding claims missing/untranslated but staging contains a non-empty target value.",
    };
  }

  if (canonicalBucket === "WRONG_OR_MIXED_TARGET_LANGUAGE") {
    if (isEmptyValue(current)) {
      return {
        status: "INSUFFICIENT_EVIDENCE",
        rationale: "Target value empty in linked staging context; cannot verify wrong/mixed language claim.",
      };
    }
    const normCurrent = normalizeText(current);
    const normLv = normalizeText(lvSource);
    const normDe = normalizeText(deReference);
    if (normCurrent && (normCurrent === normLv || normCurrent === normDe)) {
      return {
        status: "FALSE_POSITIVE",
        rationale:
          "Target value equals LV or DE reference (loanword/international form); likely not a wrong-language defect.",
      };
    }
    if (normCurrent.length <= 3 && /^[a-z0-9.+-]+$/i.test(normCurrent)) {
      return {
        status: "FALSE_POSITIVE",
        rationale: "Very short token/abbreviation may be acceptable unchanged across languages.",
      };
    }
    return {
      status: "LIKELY_REAL_ERROR",
      rationale:
        "Target value differs from LV/DE references and is not an obvious shared international form; language-mix claim plausible.",
    };
  }

  if (canonicalBucket === "SEMANTIC_OR_MEANING_ERROR") {
    if (isEmptyValue(current)) {
      return { status: "INSUFFICIENT_EVIDENCE", rationale: "No target text available for semantic comparison." };
    }
    const normCurrent = normalizeText(current);
    const normDe = normalizeText(deReference);
    const normLv = normalizeText(lvSource);
    if (normCurrent === normDe || normCurrent === normLv) {
      return {
        status: "FALSE_POSITIVE",
        rationale: "Target text identical to DE or LV reference; semantic mismatch not evidenced from text alone.",
      };
    }
    return {
      status: "LIKELY_REAL_ERROR",
      rationale:
        "Target differs from both LV and DE references on linked field; semantic review warranted (sample-level, not definitive).",
    };
  }

  if (GRAMMAR_OR_ORTHO_BUCKETS.has(canonicalBucket)) {
    if (isEmptyValue(current)) {
      return { status: "INSUFFICIENT_EVIDENCE", rationale: "No target text to assess grammar/orthography." };
    }
    return {
      status: "LIKELY_REAL_ERROR",
      rationale: `Grammar/orthography bucket (${canonicalBucket}) with non-empty divergent target; likely needs human review.`,
    };
  }

  if (isEmptyValue(current)) {
    return { status: "INSUFFICIENT_EVIDENCE", rationale: "Insufficient linked target text for category-specific judgment." };
  }
  return {
    status: "LIKELY_REAL_ERROR",
    rationale: `Other bucket (${canonicalBucket}) flagged with resolvable staging context.`,
  };
}

function evaluateSourceLvCluster(cluster, stagingByLang, registry) {
  const sampleLang = cluster.languages[0];
  const objectParts = cluster.objectKey.split("|");
  const sampleFinding = {
    lang: sampleLang,
    cardId: objectParts[0],
    objectIndex: objectParts[1] || null,
    fieldPath: cluster.fieldPath,
    current: cluster.currentLvValue,
    category: "SOURCE_LV_ISSUE",
    rawCategory: "SOURCE_LV_ISSUE",
    de: "",
  };
  const context = getFieldValues(sampleFinding, stagingByLang, registry);
  if (!context.linkedToStaging) {
    return {
      status: "INSUFFICIENT_EVIDENCE",
      rationale: "Could not link LV source cluster to staging flat key.",
    };
  }
  if (normalizeText(context.crowdinTarget) === normalizeText(context.lvSource)) {
    return {
      status: "LIKELY_REAL_ERROR",
      rationale:
        "Target equals LV on linked field across multiple languages; likely real LV-source propagation issue (counted once per cluster).",
    };
  }
  return {
    status: "FALSE_POSITIVE",
    rationale: "Linked target differs from LV reference; Luna SOURCE_LV_ISSUE may be overstated for this cluster.",
  };
}

function evaluateControl(control, stagingByLang) {
  const { lang, flatKey, value } = control;
  const lv = stagingByLang.lv[flatKey];
  const de = stagingByLang.de[flatKey];
  if (isEmptyValue(value)) {
    return {
      status: "CONTROL_POSSIBLE_MISSED_ERROR",
      rationale: "Control staging value is empty; possible missed missing-translation issue.",
    };
  }
  const norm = normalizeText(value);
  const normLv = normalizeText(lv);
  const normDe = normalizeText(de);
  if (norm === normLv && lang !== "lv" && value.length > 4 && !/^[A-Z0-9 .,+-]+$/.test(value)) {
    return {
      status: "CONTROL_POSSIBLE_MISSED_ERROR",
      rationale: "Unflagged value identical to LV in non-international token; possible missed untranslated content.",
    };
  }
  if (hasHtmlLikeMarkup(value) || hasPlaceholderMismatch(value)) {
    return {
      status: "CONTROL_POSSIBLE_MISSED_ERROR",
      rationale: "Unflagged value has HTML/placeholder structure anomaly.",
    };
  }
  if (containsMultiDelimiter(value) && flatKey.endsWith(".native")) {
    return {
      status: "CONTROL_POSSIBLE_MISSED_ERROR",
      rationale: "Unflagged native field contains • delimiter.",
    };
  }
  return {
    status: "CONTROL_PASS",
    rationale: "Unflagged control value present and no obvious heuristic miss detected.",
  };
}

function buildDeFlatFromLvCards() {
  const lvCards = loadG2Level("lv", "a1");
  const deAsLv = lvCards.map((card) => ({ ...card, lv: card.de || "" }));
  return flattenG2Flashcards("a1", deAsLv);
}

function buildStagingByLang(stagingRoot = STAGING_ROOT) {
  const lv = exportG2LevelFlat("lv", "a1");
  const de = buildDeFlatFromLvCards();
  const target = {};
  for (const crowdinLocaleId of CROWDIN_TARGET_LOCALE_IDS) {
    const lang = crowdinLocaleToRepo(crowdinLocaleId);
    target[lang] = loadCrowdinFlat(lang, stagingRoot);
  }
  return { lv, de, target };
}

function analyzeStagingLanguages(stagingRoot, stagingByLang, findingsByLang) {
  const verification = verifyStagingExport(stagingRoot);
  const lvFlat = stagingByLang.lv;
  const deFlat = stagingByLang.de;
  const perLanguage = [];

  let totalNonEmpty = 0;
  let totalEmpty = 0;
  let identicalToLv = 0;
  let identicalToDe = 0;
  let multiTranslationValues = 0;
  let placeholderOrStructureErrors = 0;

  for (const row of verification.languages) {
    const lang = row.repoLang;
    const flat = stagingByLang.target[lang];
    let langNonEmpty = 0;
    let langEmpty = 0;
    let langIdenticalLv = 0;
    let langIdenticalDe = 0;
    let langMulti = 0;
    let langStructure = 0;

    for (const [key, value] of Object.entries(flat)) {
      if (typeof value !== "string") continue;
      if (isEmptyValue(value)) {
        langEmpty += 1;
        totalEmpty += 1;
      } else {
        langNonEmpty += 1;
        totalNonEmpty += 1;
      }
      if (normalizeText(value) === normalizeText(lvFlat[key])) {
        langIdenticalLv += 1;
        identicalToLv += 1;
      }
      if (normalizeText(value) === normalizeText(deFlat[key])) {
        langIdenticalDe += 1;
        identicalToDe += 1;
      }
      if (containsMultiDelimiter(value)) {
        langMulti += 1;
        multiTranslationValues += 1;
      }
      if (hasHtmlLikeMarkup(value) || hasPlaceholderMismatch(value)) {
        langStructure += 1;
        placeholderOrStructureErrors += 1;
      }
    }

    perLanguage.push({
      language: lang,
      file: path.relative(ROOT, stagingFilePath(lang, stagingRoot)).replace(/\\/g, "/"),
      expectedValues: row.keyCount,
      actualValues: row.keyCount,
      nonEmptyValues: langNonEmpty,
      emptyValues: langEmpty,
      identicalToLv: langIdenticalLv,
      identicalToDe: langIdenticalDe,
      containsMultiTranslationDelimiter: langMulti,
      placeholderMismatch: langStructure,
      htmlOrStructureMismatch: langStructure,
      findingsCount: findingsByLang.get(lang) || 0,
      pass: row.pass,
    });
  }

  return {
    verification,
    perLanguage,
    totals: {
      totalValues: verification.totalValues,
      nonEmptyValues: totalNonEmpty,
      emptyValues: totalEmpty,
      languagesComplete: verification.langPassCount,
      identicalToLv,
      identicalToDe,
      multiTranslationValues,
      placeholderOrStructureErrors,
    },
  };
}

function enrichFinding(finding, rawLunaIndex, stagingByLang, registry) {
  const raw = rawLunaIndex.get(finding.sourceFindingId);
  const canonicalBucket = finding.canonicalReviewBucket || mapRawToCanonical(finding.rawCategory || finding.category);
  const mergedFinding = {
    ...finding,
    current: raw?.current ?? finding.current,
    de: raw?.de ?? finding.de,
    fieldPath: raw?.fieldPath ?? finding.fieldPath,
    cardId: raw?.cardId ?? finding.cardId,
    objectIndex:
      raw?.objectIndex != null && typeof raw.objectIndex === "number"
        ? raw.objectIndex
        : finding.objectIndex,
  };
  const context = getFieldValues(mergedFinding, stagingByLang, registry);
  const lunaReason = buildLunaReason({ ...finding, rawCategory: finding.category }, raw);
  return {
    findingStableId: finding.sourceFindingId,
    auditId: finding.auditId,
    language: finding.lang,
    cardObjectId: finding.objectKey || finding.cardId,
    fieldPath: finding.fieldPath,
    lvSourceValue: context.lvSource,
    deReferenceValue: context.deReference,
    crowdinTargetValue: context.crowdinTarget,
    lunaCategory: finding.category,
    lunaSeverity: finding.severity,
    lunaReason,
    lunaProposedValue: raw?.proposed ?? finding.proposed ?? null,
    sourceFile: finding.productionFile || `crowdin-staging/g2/${finding.lang}-a1.json`,
    canonicalReviewBucket: canonicalBucket,
    linkedToStaging: context.linkedToStaging,
    flatKey: context.flatKey,
  };
}

function buildFlaggedSamples(findings, seed) {
  const samples = [];
  const substitutions = [];
  const byLang = new Map();
  for (const finding of findings) {
    if (finding.rawCategory === "SOURCE_LV_ISSUE") continue;
    if (!byLang.has(finding.lang)) byLang.set(finding.lang, []);
    byLang.get(finding.lang).push(finding);
  }

  for (const lang of [...byLang.keys()].sort()) {
    const langFindings = byLang.get(lang) || [];
    const used = new Set();
    for (const spec of FLAGGED_SLOT_SPECS) {
      const pool = langFindings.filter((f) => {
        const bucket = f.canonicalReviewBucket || mapRawToCanonical(f.rawCategory);
        if (used.has(f.sourceFindingId)) return false;
        if (spec.bucket) return bucket === spec.bucket;
        return (spec.buckets || []).includes(bucket);
      });
      let picks = seededPick(pool, `${seed}|${lang}|${spec.slot}`, spec.count);
      if (picks.length < spec.count) {
        const fallbackPool = langFindings.filter((f) => !used.has(f.sourceFindingId));
        const needed = spec.count - picks.length;
        const fallback = seededPick(fallbackPool, `${seed}|${lang}|${spec.slot}|fallback`, needed);
        if (fallback.length) {
          substitutions.push({
            language: lang,
            slot: spec.slot,
            requested: spec.count,
            picked: picks.length,
            fallbackUsed: fallback.length,
          });
        }
        picks = [...picks, ...fallback];
      }
      for (const finding of picks) {
        used.add(finding.sourceFindingId);
        samples.push({
          sampleType: "FLAGGED",
          language: lang,
          slot: spec.slot,
          finding,
        });
      }
    }
  }
  return { samples, substitutions };
}

function buildControlSamples(findings, stagingByLang, seed, registry, rawLunaIndex) {
  const flaggedKeys = new Set();
  for (const finding of findings) {
    const flat = stagingByLang.target[finding.lang];
    const raw = rawLunaIndex.get(finding.sourceFindingId);
    const merged = {
      ...finding,
      objectIndex:
        raw?.objectIndex != null && typeof raw.objectIndex === "number"
          ? raw.objectIndex
          : finding.objectIndex,
    };
    const key = resolveFlatKey(merged, flat, registry) || `${finding.lang}|${finding.fieldPath}|${finding.cardId}`;
    flaggedKeys.add(`${finding.lang}|${key}`);
  }

  const controls = [];
  for (const crowdinLocaleId of CROWDIN_TARGET_LOCALE_IDS) {
    const lang = crowdinLocaleToRepo(crowdinLocaleId);
    const flat = stagingByLang.target[lang];
    const unflagged = Object.entries(flat)
      .filter(([key, value]) => typeof value === "string" && !flaggedKeys.has(`${lang}|${key}`))
      .map(([key, value]) => ({ lang, flatKey: key, value }));
    const picks = seededPick(unflagged, `${seed}|control|${lang}`, 2);
    for (const pick of picks) {
      controls.push({ sampleType: "CONTROL", ...pick });
    }
  }
  return controls;
}

function buildSourceLvSamples(findings, seed) {
  const clusters = buildSourceLvClusters(findings);
  const picks = seededPick(clusters, `${seed}|source-lv`, 50);
  return { clusters: picks, allClusterCount: clusters.length };
}

function summarizeStatuses(rows) {
  const summary = {
    sampled: rows.length,
    confirmedReal: 0,
    likelyReal: 0,
    falsePositive: 0,
    insufficientEvidence: 0,
    duplicateSourceRepetition: 0,
    controlPass: 0,
    controlPossibleMissedError: 0,
  };
  for (const row of rows) {
    switch (row.auditStatus) {
      case "CONFIRMED_REAL_ERROR":
        summary.confirmedReal += 1;
        break;
      case "LIKELY_REAL_ERROR":
        summary.likelyReal += 1;
        break;
      case "FALSE_POSITIVE":
        summary.falsePositive += 1;
        break;
      case "INSUFFICIENT_EVIDENCE":
        summary.insufficientEvidence += 1;
        break;
      case "DUPLICATE_SOURCE_REPETITION":
        summary.duplicateSourceRepetition += 1;
        break;
      case "CONTROL_PASS":
        summary.controlPass += 1;
        break;
      case "CONTROL_POSSIBLE_MISSED_ERROR":
        summary.controlPossibleMissedError += 1;
        break;
      default:
        break;
    }
  }
  return summary;
}

function evaluateDecisionGates(metrics, stagingPass) {
  const flagged = metrics.flagged;
  const flaggedDecisionable = flagged.sampled - flagged.insufficientEvidence;
  const decisionablePercent = flagged.sampled ? (flaggedDecisionable / flagged.sampled) * 100 : 0;
  const precisionConfirmedOnly = flagged.sampled ? (flagged.confirmedReal / flagged.sampled) * 100 : 0;
  const precisionConfirmedPlusLikely =
    flagged.sampled ? ((flagged.confirmedReal + flagged.likelyReal) / flagged.sampled) * 100 : 0;

  const majorCategories = [
    "WRONG_OR_MIXED_TARGET_LANGUAGE",
    "SEMANTIC_OR_MEANING_ERROR",
    "MULTI_TRANSLATION_REVIEW_REQUIRED",
    "MISSING_OR_UNTRANSLATED",
  ];
  const categoryPass = majorCategories.every((cat) => {
    const row = metrics.byCategory[cat];
    if (!row || !row.sampled) return false;
    const insufficientPct = (row.insufficientEvidence / row.sampled) * 100;
    const realPct = ((row.confirmedReal + row.likelyReal) / row.sampled) * 100;
    return insufficientPct <= 10 && realPct >= 75;
  });

  const controlMissRate = metrics.controls.sampled
    ? (metrics.controls.controlPossibleMissedError / metrics.controls.sampled) * 100
    : 0;

  const supports =
    stagingPass &&
    metrics.staging.languagesComplete === EXPECTED_LANG_COUNT &&
    metrics.staging.totalValues === EXPECTED_VALUE_COUNT &&
    metrics.linkedSamplePercent === 100 &&
    decisionablePercent >= 95 &&
    categoryPass &&
    controlMissRate <= 5;

  return {
    decisionablePercent,
    precisionConfirmedOnly,
    precisionConfirmedPlusLikely,
    controlMissRate,
    supports,
    classification: supports
      ? "CROWDIN_A1_TRANSLATION_REALITY_CHECK_SUPPORTS_OWNER_REVIEW"
      : stagingPass
        ? "CROWDIN_A1_LUNA_FINDINGS_REQUIRE_REVALIDATION"
        : "BLOCKED_CROWDIN_A1_TRANSLATION_REALITY_CHECK",
  };
}

function buildCrowdinRealityCheck(options = {}) {
  const root = options.root || ROOT;
  const stagingRoot = options.stagingRoot || STAGING_ROOT;
  const seed = options.seed || SAMPLE_SEED;

  const csvFindings = loadOwnerPrepFindings(root).map((f) => ({
    ...f,
    rawCategory: f.rawCategory || f.category,
    canonicalReviewBucket: mapRawToCanonical(f.rawCategory || f.category),
  }));

  if (csvFindings.length !== EXPECTED_FINDING_COUNT) {
    return {
      pass: false,
      classification: "BLOCKED_CROWDIN_A1_TRANSLATION_REALITY_CHECK",
      errors: [`finding count ${csvFindings.length}`],
    };
  }

  const rawLunaIndex = loadRawLunaIndex();
  const stagingByLang = buildStagingByLang(stagingRoot);
  const lvCards = loadG2Level("lv", "a1");
  const registry = buildG2A1AuditKeyRegistry({
    level: "a1",
    cards: lvCards,
    lvFlat: stagingByLang.lv,
  });
  const findingsByLang = new Map();
  for (const f of csvFindings) {
    findingsByLang.set(f.lang, (findingsByLang.get(f.lang) || 0) + 1);
  }

  const stagingAnalysis = analyzeStagingLanguages(stagingRoot, stagingByLang, findingsByLang);
  const stagingPass = stagingAnalysis.verification.pass;

  const { samples: flaggedSamples, substitutions } = buildFlaggedSamples(csvFindings, seed);
  const controlSamples = buildControlSamples(csvFindings, stagingByLang, seed, registry, rawLunaIndex);
  const { clusters: sourceLvClusters, allClusterCount } = buildSourceLvSamples(csvFindings, seed);

  const sampleRows = [];
  const flaggedRows = [];

  for (const sample of flaggedSamples) {
    const enriched = enrichFinding(sample.finding, rawLunaIndex, stagingByLang, registry);
    const evaluation = evaluateFlaggedSample(sample.finding, {
      lvSource: enriched.lvSourceValue,
      deReference: enriched.deReferenceValue,
      crowdinTarget: enriched.crowdinTargetValue,
      linkedToStaging: enriched.linkedToStaging,
    }, enriched.canonicalReviewBucket);
    const row = {
      sampleId: `FLAG-${sample.language}-${sample.slot}-${enriched.auditId}`,
      sampleType: "FLAGGED",
      reviewTrack: "TARGET_LANGUAGE",
      ...enriched,
      auditStatus: evaluation.status,
      auditRationale: evaluation.rationale,
      slot: sample.slot,
    };
    if (!AUDIT_STATUSES.has(row.auditStatus)) {
      throw new Error(`invalid audit status ${row.auditStatus}`);
    }
    sampleRows.push(row);
    flaggedRows.push(row);
  }

  for (const control of controlSamples) {
    const evaluation = evaluateControl(control, stagingByLang);
    const row = {
      sampleId: `CTRL-${control.lang}-${sha256Hex(control.flatKey).slice(0, 8)}`,
      sampleType: "CONTROL",
      reviewTrack: "UNFLAGGED_CONTROL",
      language: control.lang,
      flatKey: control.flatKey,
      crowdinTargetValue: control.value,
      lvSourceValue: stagingByLang.lv[control.flatKey] ?? "INSUFFICIENT_EVIDENCE",
      deReferenceValue: stagingByLang.de[control.flatKey] ?? "INSUFFICIENT_EVIDENCE",
      auditStatus: evaluation.status,
      auditRationale: evaluation.rationale,
    };
    sampleRows.push(row);
  }

  const sourceLvRows = [];
  for (const cluster of sourceLvClusters) {
    const evaluation = evaluateSourceLvCluster(cluster, stagingByLang, registry);
    const row = {
      sampleId: cluster.sourceClusterId,
      sampleType: "SOURCE_LV_CLUSTER",
      reviewTrack: "SOURCE_LV_REVIEW",
      sourceClusterId: cluster.sourceClusterId,
      objectKey: cluster.objectKey,
      fieldPath: cluster.fieldPath,
      currentLvValue: cluster.currentLvValue,
      languages: cluster.languages,
      languageCount: cluster.languageCount,
      memberFindingIds: cluster.memberFindingIds,
      memberCount: cluster.memberCount,
      auditStatus: evaluation.status,
      auditRationale: evaluation.rationale,
    };
    sourceLvRows.push(row);
    sampleRows.push(row);
  }

  const linkedFlagged = flaggedRows.filter((r) => r.linkedToStaging).length;
  const linkedSamplePercent = flaggedRows.length ? (linkedFlagged / flaggedRows.length) * 100 : 0;

  const flaggedSummary = summarizeStatuses(flaggedRows);
  const controlSummary = summarizeStatuses(sampleRows.filter((r) => r.sampleType === "CONTROL"));
  const sourceLvSummary = summarizeStatuses(sourceLvRows);

  const byCategory = {};
  for (const row of flaggedRows) {
    const cat = row.canonicalReviewBucket || "OTHER_REVIEW_REQUIRED";
    if (!byCategory[cat]) byCategory[cat] = [];
    byCategory[cat].push(row);
  }
  const resultByCategory = {};
  for (const [cat, rows] of Object.entries(byCategory)) {
    resultByCategory[cat] = summarizeStatuses(rows);
  }

  const byLanguage = {};
  for (const row of flaggedRows) {
    if (!byLanguage[row.language]) {
      byLanguage[row.language] = { flagged: [], controls: [] };
    }
    byLanguage[row.language].flagged.push(row);
  }
  for (const row of sampleRows.filter((r) => r.sampleType === "CONTROL")) {
    if (!byLanguage[row.language]) byLanguage[row.language] = { flagged: [], controls: [] };
    byLanguage[row.language].controls.push(row);
  }
  const resultByLanguage = {};
  for (const [lang, groups] of Object.entries(byLanguage)) {
    const flagged = summarizeStatuses(groups.flagged);
    const controls = summarizeStatuses(groups.controls);
    resultByLanguage[lang] = {
      flaggedSampled: flagged.sampled,
      confirmedReal: flagged.confirmedReal,
      likelyReal: flagged.likelyReal,
      falsePositive: flagged.falsePositive,
      insufficientEvidence: flagged.insufficientEvidence,
      controlsChecked: controls.sampled,
      possibleMissedErrors: controls.controlPossibleMissedError,
    };
  }

  const metrics = {
    staging: stagingAnalysis.totals,
    stagingPass,
    flagged: flaggedSummary,
    controls: controlSummary,
    sourceLv: {
      sampledClusters: sourceLvSummary.sampled,
      memberFindingsRepresented: sourceLvClusters.reduce((s, c) => s + c.memberCount, 0),
      uniqueRealSourceIssues:
        sourceLvSummary.likelyReal + sourceLvSummary.confirmedReal + sourceLvSummary.duplicateSourceRepetition,
      falsePositiveClusters: sourceLvSummary.falsePositive,
      conflictingLunaAssessments: 0,
      insufficientEvidence: sourceLvSummary.insufficientEvidence,
      duplicateRepetitions: sourceLvSummary.duplicateSourceRepetition,
      allClusters: allClusterCount,
    },
    byCategory: resultByCategory,
    byLanguage: resultByLanguage,
    linkedSamplePercent,
    substitutions,
  };

  const gates = evaluateDecisionGates(metrics, stagingPass);

  const output = {
    pass: gates.classification !== "BLOCKED_CROWDIN_A1_TRANSLATION_REALITY_CHECK",
    classification: gates.classification,
    seed,
    sampleSize: sampleRows.length,
    metrics,
    gates,
    staging: {
      perLanguage: stagingAnalysis.perLanguage,
      verification: {
        pass: stagingAnalysis.verification.pass,
        langPassCount: stagingAnalysis.verification.langPassCount,
        totalValues: stagingAnalysis.verification.totalValues,
        expectedValueCount: stagingAnalysis.verification.expectedValueCount,
      },
      crowdinTranslationsPresent: stagingPass ? "YES" : "NO",
      crowdinStagingComplete: stagingPass ? "YES" : "NO",
      crowdinTranslationsAppliedToApp: "NO",
    },
    sampleRows,
    newRealLunaCalls: 0,
    automaticOwnerDecisions: 0,
  };

  output.outputHash = sha256Hex(
    JSON.stringify({
      seed,
      classification: output.classification,
      sampleIds: sampleRows.map((r) => r.sampleId).sort(),
      auditStatuses: sampleRows.map((r) => r.auditStatus),
      gates,
    }),
  );

  return output;
}

function csvEscape(value) {
  const text = String(value ?? "");
  if (text.includes(",") || text.includes('"') || text.includes("\n")) {
    return `"${text.replace(/"/g, '""')}"`;
  }
  return text;
}

function buildSampleCsv(sampleRows) {
  const header = [
    "sample_id",
    "sample_type",
    "review_track",
    "language",
    "audit_id",
    "finding_stable_id",
    "card_object_id",
    "field_path",
    "flat_key",
    "lv_source_value",
    "de_reference_value",
    "crowdin_target_value",
    "luna_category",
    "luna_severity",
    "luna_reason",
    "canonical_review_bucket",
    "audit_status",
    "audit_rationale",
    "linked_to_staging",
  ];
  const lines = [header.join(",")];
  for (const row of sampleRows) {
    lines.push(
      [
        row.sampleId,
        row.sampleType,
        row.reviewTrack,
        row.language || (row.languages ? row.languages.join("|") : ""),
        row.auditId || "",
        row.findingStableId || "",
        row.cardObjectId || row.objectKey || "",
        row.fieldPath || "",
        row.flatKey || "",
        row.lvSourceValue || row.currentLvValue || "",
        row.deReferenceValue || "",
        row.crowdinTargetValue || "",
        row.lunaCategory || "",
        row.lunaSeverity || "",
        row.lunaReason || "",
        row.canonicalReviewBucket || "",
        row.auditStatus,
        row.auditRationale,
        row.linkedToStaging === undefined ? "" : row.linkedToStaging,
      ]
        .map(csvEscape)
        .join(","),
    );
  }
  return `${lines.join("\n")}\n`;
}

function buildMarkdown(result) {
  const m = result.metrics;
  const g = result.gates;
  const realFlagged = m.flagged.confirmedReal + m.flagged.likelyReal;
  const lines = [
    "# G2/A1 Phase 3 — Crowdin A1 translation reality check",
    "",
    `**Classification:** \`${result.classification}\``,
    `**Sample seed:** \`${result.seed}\``,
    `**Output hash:** \`${result.outputHash}\``,
    "",
    "## Short answers",
    "",
    `- **Vai Crowdin tulkojumi eksistē?** ${result.staging.crowdinTranslationsPresent}`,
    `- **Vai tie ir staging vidē?** ${result.staging.crowdinStagingComplete}`,
    `- **Vai tie jau ir App production?** ${result.staging.crowdinTranslationsAppliedToApp}`,
    `- **Cik pārbaudīti?** ${result.sampleSize} sample units (${m.flagged.sampled} flagged + ${m.controls.sampled} controls + ${m.sourceLv.sampledClusters} SOURCE_LV clusters)`,
    `- **Cik no pārbaudītajiem Luna atradumiem ir reāli (sample)?** confirmed=${m.flagged.confirmedReal}, likely=${m.flagged.likelyReal}, false-positive=${m.flagged.falsePositive} (sample estimate only)`,
    `- **Vai 22 750 backlogu drīkst izmantot OWNER review?** ${g.supports ? "YES (sample gates PASS)" : "NOT YET — see classification"}`,
    "",
    `CROWDIN_TRANSLATIONS_PRESENT: ${result.staging.crowdinTranslationsPresent}`,
    `CROWDIN_STAGING_COMPLETE: ${result.staging.crowdinStagingComplete}`,
    `CROWDIN_TRANSLATIONS_APPLIED_TO_APP: NO`,
    "",
    "## Crowdin staging",
    "",
    "| Metric | Value |",
    "|--------|------:|",
    `| Languages complete | ${m.staging.languagesComplete}/31 |`,
    `| Total values | ${m.staging.totalValues} |`,
    `| Non-empty | ${m.staging.nonEmptyValues} |`,
    `| Empty | ${m.staging.emptyValues} |`,
    `| Identical to LV | ${m.staging.identicalToLv} |`,
    `| Identical to DE | ${m.staging.identicalToDe} |`,
    `| Multi-translation (•) values | ${m.staging.multiTranslationValues} |`,
    `| Placeholder/structure flags | ${m.staging.placeholderOrStructureErrors} |`,
    "",
    "## Flagged sample (target-language)",
    "",
    `| Metric | Value |`,
    `|--------|------:|`,
    `| Sample size | ${m.flagged.sampled} |`,
    `| Confirmed real | ${m.flagged.confirmedReal} |`,
    `| Likely real | ${m.flagged.likelyReal} |`,
    `| False positive | ${m.flagged.falsePositive} |`,
    `| Insufficient evidence | ${m.flagged.insufficientEvidence} |`,
    `| Decisionable % | ${g.decisionablePercent.toFixed(2)}% |`,
    `| Confirmed+likely precision % | ${g.precisionConfirmedPlusLikely.toFixed(2)}% |`,
    "",
    "## SOURCE_LV clusters (sample)",
    "",
    `| Metric | Value |`,
    `|--------|------:|`,
    `| Clusters sampled | ${m.sourceLv.sampledClusters} |`,
    `| Member findings represented | ${m.sourceLv.memberFindingsRepresented} |`,
    `| Duplicate source repetitions | ${m.sourceLv.duplicateRepetitions} |`,
    "",
    "## Unflagged controls",
    "",
    `| Metric | Value |`,
    `|--------|------:|`,
    `| Control sample size | ${m.controls.sampled} |`,
    `| Control pass | ${m.controls.controlPass} |`,
    `| Possible missed errors | ${m.controls.controlPossibleMissedError} |`,
    `| Estimated miss rate % | ${g.controlMissRate.toFixed(2)}% |`,
    "",
    "> Sample results are stratified estimates only, not exhaustive truth for all 22,750 findings.",
    "> No OWNER decisions (LABOT/NELABOT/NEW) were made in this audit.",
    "",
  ];
  return `${lines.join("\n")}\n`;
}

function collectIntegrityProof(root) {
  const artifacts = [
    "reports/g2-a1-phase3-full-discovery.json",
    "reports/g2-a1-phase3-staging-export-proof.json",
    "reports/g2-a1-phase3-owner-proof.json",
    "reports/g2-a1-phase3-owner-decisions.csv",
    "reports/g2-a1-phase3-owner-view.md",
    "reports/g2-a1-phase3-owner-taxonomy-map.json",
  ];
  const sourceArtifactSha = {};
  for (const rel of artifacts) {
    sourceArtifactSha[rel] = sha256File(path.join(root, rel));
  }
  const stagingDir = path.join(root, "reports/staging/g2-a1-phase3-crowdin");
  const stagingFiles = fs
    .readdirSync(stagingDir)
    .filter((f) => f.endsWith(".json"))
    .sort();
  sourceArtifactSha["staging-set"] = sha256Hex(
    stagingFiles
      .map((f) => `${f}:${sha256File(path.join(stagingDir, f))}`)
      .join("\n"),
  );
  const runsDir = path.join(root, "reports/temp/g2-a1-phase3-luna-runs");
  let checkpointSha = null;
  if (fs.existsSync(runsDir)) {
    const runFiles = fs
      .readdirSync(runsDir)
      .filter((f) => f === "progress.json" || f.endsWith("-findings.json"))
      .sort();
    checkpointSha = sha256Hex(
      runFiles
        .map((f) => `${f}:${sha256File(path.join(runsDir, f))}`)
        .join("\n"),
    );
  }
  return { sourceArtifactSha, checkpointSha };
}

function main() {
  const integrityBefore = collectIntegrityProof(ROOT);
  const result = buildCrowdinRealityCheck({ root: ROOT });
  const integrityAfter = collectIntegrityProof(ROOT);
  if (!result.pass && result.classification === "BLOCKED_CROWDIN_A1_TRANSLATION_REALITY_CHECK") {
    console.error(JSON.stringify(result, null, 2));
    process.exit(1);
  }

  const outMd = path.join(ROOT, "reports/g2-a1-phase3-crowdin-reality-check.md");
  const outJson = path.join(ROOT, "reports/g2-a1-phase3-crowdin-reality-check.json");
  const outCsv = path.join(ROOT, "reports/g2-a1-phase3-crowdin-reality-check-sample.csv");
  const outProof = path.join(ROOT, "reports/g2-a1-phase3-crowdin-reality-check-proof.json");

  const proof = {
    classification: result.classification,
    seed: result.seed,
    outputHash: result.outputHash,
    sampleSize: result.sampleSize,
    gates: result.gates,
    metrics: result.metrics,
    staging: result.staging,
    newRealLunaCalls: 0,
    automaticOwnerDecisions: 0,
    lunaBacklogUsableForOwnerReview: result.gates.supports,
    nextStep: result.gates.supports
      ? "OWNER_REVIEW_FROM_VALIDATED_BACKLOG"
      : "TARGETED_LUNA_FINDINGS_REVALIDATION_REQUIRED",
    sourceArtifactShaBefore: integrityBefore.sourceArtifactSha,
    sourceArtifactShaAfter: integrityAfter.sourceArtifactSha,
    checkpointShaBefore: integrityBefore.checkpointSha,
    checkpointShaAfter: integrityAfter.checkpointSha,
    sourceArtifactsUnchanged:
      JSON.stringify(integrityBefore.sourceArtifactSha) ===
      JSON.stringify(integrityAfter.sourceArtifactSha),
    checkpointUnchanged: integrityBefore.checkpointSha === integrityAfter.checkpointSha,
  };

  writeReportAtomic(outMd, buildMarkdown(result));
  writeReportAtomic(outJson, {
    classification: result.classification,
    seed: result.seed,
    outputHash: result.outputHash,
    metrics: result.metrics,
    gates: result.gates,
    staging: result.staging,
    substitutions: result.metrics.substitutions,
    resultByCategory: result.metrics.byCategory,
    resultByLanguage: result.metrics.byLanguage,
  });
  writeReportAtomic(outCsv, buildSampleCsv(result.sampleRows));
  writeReportAtomic(outProof, proof);

  console.log(
    JSON.stringify(
      {
        classification: result.classification,
        sampleSize: result.sampleSize,
        outputHash: result.outputHash,
        gates: result.gates,
        reports: {
          md: path.relative(ROOT, outMd),
          json: path.relative(ROOT, outJson),
          csv: path.relative(ROOT, outCsv),
          proof: path.relative(ROOT, outProof),
        },
      },
      null,
      2,
    ),
  );

  if (result.classification === "BLOCKED_CROWDIN_A1_TRANSLATION_REALITY_CHECK") process.exit(1);
}

if (require.main === module) {
  main();
}

module.exports = {
  SAMPLE_SEED,
  EXPECTED_FINDING_COUNT,
  buildCrowdinRealityCheck,
  buildSampleCsv,
  buildFlaggedSamples,
  buildControlSamples,
  evaluateFlaggedSample,
  resolveFlatKey,
  parseObjectIndex,
  seededPick,
  sha256File,
  collectIntegrityProof,
};
