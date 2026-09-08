#!/usr/bin/env node
"use strict";

const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const { ROOT } = require("../audit-common");

const TAXONOMY_VERSION = "g2-a1-phase3-owner-prep-usability-v1";
const MAX_BATCH_DECISION_TARGETS = 100;
const EXPECTED_SOURCE_HASH = "a6881d7d449aa331661f4bac3c792e7ec71659cc7411e52590d757942cd63419";
const EXPECTED_FINDING_COUNT = 22750;
const EXPECTED_RAW_CATEGORY_COUNT = 159;

const CANONICAL_REVIEW_BUCKETS = [
  "SOURCE_LV_REVIEW_REQUIRED",
  "MULTI_TRANSLATION_REVIEW_REQUIRED",
  "WRONG_OR_MIXED_TARGET_LANGUAGE",
  "MISSING_OR_UNTRANSLATED",
  "SEMANTIC_OR_MEANING_ERROR",
  "GRAMMAR_MORPHOLOGY_OR_FORM",
  "ORTHOGRAPHY_SPELLING_OR_DIACRITICS",
  "STYLE_FLUENCY_OR_REGISTER",
  "FORMAT_PLACEHOLDER_OR_ENCODING",
  "DUPLICATION",
  "CONTENT_CORRUPTION_OR_UNRELATED",
  "OTHER_REVIEW_REQUIRED",
];

const REVIEW_TRACKS = [
  "SOURCE_LV_REVIEW",
  "OWNER_DECISION_CONFLICTS",
  "WRONG_OR_MIXED_TARGET_LANGUAGE",
  "MISSING_OR_UNTRANSLATED",
  "SEMANTIC_OR_MEANING_ERROR",
  "GRAMMAR_MORPHOLOGY_OR_FORM",
  "ORTHOGRAPHY_SPELLING_OR_DIACRITICS",
  "MULTI_TRANSLATION_REVIEW",
  "STYLE_FORMAT_AND_OTHER",
];

const CANONICAL_TO_TRACK = {
  SOURCE_LV_REVIEW_REQUIRED: "SOURCE_LV_REVIEW",
  MULTI_TRANSLATION_REVIEW_REQUIRED: "MULTI_TRANSLATION_REVIEW",
  WRONG_OR_MIXED_TARGET_LANGUAGE: "WRONG_OR_MIXED_TARGET_LANGUAGE",
  MISSING_OR_UNTRANSLATED: "MISSING_OR_UNTRANSLATED",
  SEMANTIC_OR_MEANING_ERROR: "SEMANTIC_OR_MEANING_ERROR",
  GRAMMAR_MORPHOLOGY_OR_FORM: "GRAMMAR_MORPHOLOGY_OR_FORM",
  ORTHOGRAPHY_SPELLING_OR_DIACRITICS: "ORTHOGRAPHY_SPELLING_OR_DIACRITICS",
  STYLE_FLUENCY_OR_REGISTER: "STYLE_FORMAT_AND_OTHER",
  FORMAT_PLACEHOLDER_OR_ENCODING: "STYLE_FORMAT_AND_OTHER",
  DUPLICATION: "STYLE_FORMAT_AND_OTHER",
  CONTENT_CORRUPTION_OR_UNRELATED: "STYLE_FORMAT_AND_OTHER",
  OTHER_REVIEW_REQUIRED: "STYLE_FORMAT_AND_OTHER",
};

const RAW_TO_CANONICAL = {
  ADDED_MEANING: "SEMANTIC_OR_MEANING_ERROR",
  CAPITALIZATION: "ORTHOGRAPHY_SPELLING_OR_DIACRITICS",
  CLARITY: "STYLE_FLUENCY_OR_REGISTER",
  CONTENT_CONTAMINATION: "CONTENT_CORRUPTION_OR_UNRELATED",
  CONTENT_CORRUPTION: "CONTENT_CORRUPTION_OR_UNRELATED",
  CONTENT_ERROR: "SEMANTIC_OR_MEANING_ERROR",
  CONTENT_MISMATCH: "SEMANTIC_OR_MEANING_ERROR",
  CORRUPTED_CONTENT: "CONTENT_CORRUPTION_OR_UNRELATED",
  CORRUPTED_TEXT: "CONTENT_CORRUPTION_OR_UNRELATED",
  CORRUPTED_TRANSLATION: "CONTENT_CORRUPTION_OR_UNRELATED",
  DE_SOURCE_ISSUE: "OTHER_REVIEW_REQUIRED",
  DIACRITIC: "ORTHOGRAPHY_SPELLING_OR_DIACRITICS",
  DIACRITICS: "ORTHOGRAPHY_SPELLING_OR_DIACRITICS",
  DIACRITIC_ERROR: "ORTHOGRAPHY_SPELLING_OR_DIACRITICS",
  DUPLICATION: "DUPLICATION",
  ENCODING_ERROR: "FORMAT_PLACEHOLDER_OR_ENCODING",
  EXAMPLE_MISMATCH: "SEMANTIC_OR_MEANING_ERROR",
  FACTUAL_ERROR: "SEMANTIC_OR_MEANING_ERROR",
  FLUENCY: "STYLE_FLUENCY_OR_REGISTER",
  FORM: "GRAMMAR_MORPHOLOGY_OR_FORM",
  FORMAT: "FORMAT_PLACEHOLDER_OR_ENCODING",
  FORMAT_ORTHOGRAPHY: "ORTHOGRAPHY_SPELLING_OR_DIACRITICS",
  FORM_ERROR: "GRAMMAR_MORPHOLOGY_OR_FORM",
  FORM_MISMATCH: "GRAMMAR_MORPHOLOGY_OR_FORM",
  GARBLED_TEXT: "CONTENT_CORRUPTION_OR_UNRELATED",
  GENDER: "GRAMMAR_MORPHOLOGY_OR_FORM",
  GENDER_ERROR: "GRAMMAR_MORPHOLOGY_OR_FORM",
  GRAMMAR: "GRAMMAR_MORPHOLOGY_OR_FORM",
  GRAMMAR_AND_TARGET_LANGUAGE: "WRONG_OR_MIXED_TARGET_LANGUAGE",
  GRAMMAR_AND_TARGET_LANGUAGE_MISMATCH: "WRONG_OR_MIXED_TARGET_LANGUAGE",
  GRAMMAR_ERROR: "GRAMMAR_MORPHOLOGY_OR_FORM",
  GRAMMAR_MEANING: "SEMANTIC_OR_MEANING_ERROR",
  GRAMMAR_MISMATCH: "GRAMMAR_MORPHOLOGY_OR_FORM",
  GRAMMAR_OR_SPELLING: "ORTHOGRAPHY_SPELLING_OR_DIACRITICS",
  GRAMMATICAL_FORM: "GRAMMAR_MORPHOLOGY_OR_FORM",
  GRAMMATICAL_MISMATCH: "GRAMMAR_MORPHOLOGY_OR_FORM",
  INCOMPLETE_TEXT: "MISSING_OR_UNTRANSLATED",
  INCOMPLETE_TRANSLATION: "MISSING_OR_UNTRANSLATED",
  INFLECTION: "GRAMMAR_MORPHOLOGY_OR_FORM",
  INTERNAL_CONTRADICTION: "OTHER_REVIEW_REQUIRED",
  INVALID_TEXT: "CONTENT_CORRUPTION_OR_UNRELATED",
  LANGUAGE_CONTAMINATION: "WRONG_OR_MIXED_TARGET_LANGUAGE",
  LANGUAGE_ERROR: "WRONG_OR_MIXED_TARGET_LANGUAGE",
  LANGUAGE_MISMATCH: "WRONG_OR_MIXED_TARGET_LANGUAGE",
  LANGUAGE_MISMATCH_AND_TRANSLATION_ERROR: "WRONG_OR_MIXED_TARGET_LANGUAGE",
  LANGUAGE_MIX: "WRONG_OR_MIXED_TARGET_LANGUAGE",
  LANGUAGE_MIXING: "WRONG_OR_MIXED_TARGET_LANGUAGE",
  LANGUAGE_MIXUP: "WRONG_OR_MIXED_TARGET_LANGUAGE",
  "LANGUAGE_MIX_AND_CONTENT_CORRUPTION": "WRONG_OR_MIXED_TARGET_LANGUAGE",
  LEXICAL_ERROR: "SEMANTIC_OR_MEANING_ERROR",
  LEXICAL_MISMATCH: "SEMANTIC_OR_MEANING_ERROR",
  LINGUISTIC_CLARITY: "STYLE_FLUENCY_OR_REGISTER",
  LINGUISTIC_ERROR: "SEMANTIC_OR_MEANING_ERROR",
  LV_TRANSLATION_ERROR: "SEMANTIC_OR_MEANING_ERROR",
  MALFORMED_TRANSLATION: "CONTENT_CORRUPTION_OR_UNRELATED",
  MEANING: "SEMANTIC_OR_MEANING_ERROR",
  "MEANING MISMATCH": "SEMANTIC_OR_MEANING_ERROR",
  MEANING_AND_LANGUAGE: "WRONG_OR_MIXED_TARGET_LANGUAGE",
  MEANING_AND_TARGET_LANGUAGE: "WRONG_OR_MIXED_TARGET_LANGUAGE",
  MEANING_AND_USAGE: "SEMANTIC_OR_MEANING_ERROR",
  MEANING_ERROR: "SEMANTIC_OR_MEANING_ERROR",
  MEANING_LOSS: "SEMANTIC_OR_MEANING_ERROR",
  MEANING_MISMATCH: "SEMANTIC_OR_MEANING_ERROR",
  MEANING_NARROWING: "SEMANTIC_OR_MEANING_ERROR",
  MISSING_DIACRITIC: "ORTHOGRAPHY_SPELLING_OR_DIACRITICS",
  MISSING_INFLECTION: "GRAMMAR_MORPHOLOGY_OR_FORM",
  MISSING_TRANSLATION: "MISSING_OR_UNTRANSLATED",
  MISTRANSLATION: "SEMANTIC_OR_MEANING_ERROR",
  MISTRANSLATION_AND_LANGUAGE_MIX: "WRONG_OR_MIXED_TARGET_LANGUAGE",
  MISTRANSLATION_AND_MIXED_LANGUAGE: "WRONG_OR_MIXED_TARGET_LANGUAGE",
  MISTRANSLATION_AND_ORTHOGRAPHY: "ORTHOGRAPHY_SPELLING_OR_DIACRITICS",
  MISTRANSLATION_AND_WRONG_TARGET_LANGUAGE: "WRONG_OR_MIXED_TARGET_LANGUAGE",
  MIXED_LANGUAGE: "WRONG_OR_MIXED_TARGET_LANGUAGE",
  MIXED_LANGUAGE_AND_MISTRANSLATION: "WRONG_OR_MIXED_TARGET_LANGUAGE",
  MIXED_LANGUAGE_CONTAMINATION: "WRONG_OR_MIXED_TARGET_LANGUAGE",
  MIXED_TARGET_LANGUAGE: "WRONG_OR_MIXED_TARGET_LANGUAGE",
  MORPHOLOGY: "GRAMMAR_MORPHOLOGY_OR_FORM",
  MULTI_TRANSLATION: "MULTI_TRANSLATION_REVIEW_REQUIRED",
  NARROWED_MEANING: "SEMANTIC_OR_MEANING_ERROR",
  NEEDS_REVIEW: "OTHER_REVIEW_REQUIRED",
  NON_TARGET_LANGUAGE: "WRONG_OR_MIXED_TARGET_LANGUAGE",
  NUMBER: "GRAMMAR_MORPHOLOGY_OR_FORM",
  NUMBER_AND_GENDER_MISMATCH: "GRAMMAR_MORPHOLOGY_OR_FORM",
  NUMBER_ERROR: "GRAMMAR_MORPHOLOGY_OR_FORM",
  NUMBER_MISMATCH: "GRAMMAR_MORPHOLOGY_OR_FORM",
  OMISSION: "MISSING_OR_UNTRANSLATED",
  ORTHOGRAPHIC_ERROR: "ORTHOGRAPHY_SPELLING_OR_DIACRITICS",
  ORTHOGRAPHY: "ORTHOGRAPHY_SPELLING_OR_DIACRITICS",
  ORTHOGRAPHY_ERROR: "ORTHOGRAPHY_SPELLING_OR_DIACRITICS",
  PART_OF_SPEECH: "GRAMMAR_MORPHOLOGY_OR_FORM",
  PART_OF_SPEECH_ERROR: "GRAMMAR_MORPHOLOGY_OR_FORM",
  PART_OF_SPEECH_MISMATCH: "GRAMMAR_MORPHOLOGY_OR_FORM",
  PLACEHOLDER: "FORMAT_PLACEHOLDER_OR_ENCODING",
  PLACEHOLDER_AND_TARGET_LANGUAGE_CONTAMINATION: "WRONG_OR_MIXED_TARGET_LANGUAGE",
  POS_ERROR: "GRAMMAR_MORPHOLOGY_OR_FORM",
  POS_MISMATCH: "GRAMMAR_MORPHOLOGY_OR_FORM",
  PROJECT_CONVENTION: "OTHER_REVIEW_REQUIRED",
  REGISTER_MISMATCH: "STYLE_FLUENCY_OR_REGISTER",
  "SEMANTIC NARROWING": "SEMANTIC_OR_MEANING_ERROR",
  SEMANTICS: "SEMANTIC_OR_MEANING_ERROR",
  SEMANTIC_ACCURACY: "SEMANTIC_OR_MEANING_ERROR",
  SEMANTIC_ERROR: "SEMANTIC_OR_MEANING_ERROR",
  SEMANTIC_MISMATCH: "SEMANTIC_OR_MEANING_ERROR",
  SEMANTIC_MISTRANSLATION: "SEMANTIC_OR_MEANING_ERROR",
  SEMANTIC_NARROWING: "SEMANTIC_OR_MEANING_ERROR",
  SOURCE_CONTAMINATION: "CONTENT_CORRUPTION_OR_UNRELATED",
  SOURCE_LV_ISSUE: "SOURCE_LV_REVIEW_REQUIRED",
  SOURCE_TEXT_ERROR: "CONTENT_CORRUPTION_OR_UNRELATED",
  SPELLING: "ORTHOGRAPHY_SPELLING_OR_DIACRITICS",
  SPELLING_ERROR: "ORTHOGRAPHY_SPELLING_OR_DIACRITICS",
  STYLE_ONLY: "STYLE_FLUENCY_OR_REGISTER",
  TARGET_CORRUPTION: "WRONG_OR_MIXED_TARGET_LANGUAGE",
  TARGET_LANGUAGE: "WRONG_OR_MIXED_TARGET_LANGUAGE",
  TARGET_LANGUAGE_CONTAMINATION: "WRONG_OR_MIXED_TARGET_LANGUAGE",
  TARGET_LANGUAGE_CORRUPTION: "WRONG_OR_MIXED_TARGET_LANGUAGE",
  TARGET_LANGUAGE_ERROR: "WRONG_OR_MIXED_TARGET_LANGUAGE",
  TARGET_LANGUAGE_GRAMMAR: "GRAMMAR_MORPHOLOGY_OR_FORM",
  TARGET_LANGUAGE_ISSUE: "WRONG_OR_MIXED_TARGET_LANGUAGE",
  TARGET_LANGUAGE_LEAK: "WRONG_OR_MIXED_TARGET_LANGUAGE",
  TARGET_LANGUAGE_MISMATCH: "WRONG_OR_MIXED_TARGET_LANGUAGE",
  TARGET_LANGUAGE_MISTRANSLATION: "WRONG_OR_MIXED_TARGET_LANGUAGE",
  TARGET_LANGUAGE_MIX: "WRONG_OR_MIXED_TARGET_LANGUAGE",
  TARGET_LANGUAGE_MIXED: "WRONG_OR_MIXED_TARGET_LANGUAGE",
  TARGET_LANGUAGE_MIXED_LANGUAGE: "WRONG_OR_MIXED_TARGET_LANGUAGE",
  TARGET_LANGUAGE_MIXUP: "WRONG_OR_MIXED_TARGET_LANGUAGE",
  TARGET_LANGUAGE_USAGE: "WRONG_OR_MIXED_TARGET_LANGUAGE",
  TARGET_LANGUAGE_WRONG: "WRONG_OR_MIXED_TARGET_LANGUAGE",
  TARGET_LANGUAGE_WRONG_LANGUAGE: "WRONG_OR_MIXED_TARGET_LANGUAGE",
  TARGET_LOCALE_CONTAMINATION: "WRONG_OR_MIXED_TARGET_LANGUAGE",
  TARGET_LV_ERROR: "WRONG_OR_MIXED_TARGET_LANGUAGE",
  TARGET_MEANING_ERROR: "SEMANTIC_OR_MEANING_ERROR",
  TARGET_TRANSLATION_ERROR: "SEMANTIC_OR_MEANING_ERROR",
  TRANSLATION: "SEMANTIC_OR_MEANING_ERROR",
  TRANSLATION_ACCURACY: "SEMANTIC_OR_MEANING_ERROR",
  TRANSLATION_ERROR: "SEMANTIC_OR_MEANING_ERROR",
  TRUNCATION: "FORMAT_PLACEHOLDER_OR_ENCODING",
  TYPO: "ORTHOGRAPHY_SPELLING_OR_DIACRITICS",
  TYPOGRAPHY: "ORTHOGRAPHY_SPELLING_OR_DIACRITICS",
  UNDERSPECIFICATION: "STYLE_FLUENCY_OR_REGISTER",
  UNDERTRANSLATION: "MISSING_OR_UNTRANSLATED",
  UNNATURAL_TRANSLATION: "STYLE_FLUENCY_OR_REGISTER",
  UNRELATED_CONTENT: "CONTENT_CORRUPTION_OR_UNRELATED",
  UNTRANSLATED: "MISSING_OR_UNTRANSLATED",
  UNTRANSLATED_CONTENT: "MISSING_OR_UNTRANSLATED",
  UNTRANSLATED_LV: "MISSING_OR_UNTRANSLATED",
  UNTRANSLATED_TARGET: "MISSING_OR_UNTRANSLATED",
  UNTRANSLATED_TEXT: "MISSING_OR_UNTRANSLATED",
  WORD_CLASS_MISMATCH: "GRAMMAR_MORPHOLOGY_OR_FORM",
  WORD_FORM: "GRAMMAR_MORPHOLOGY_OR_FORM",
  WRONG_LANGUAGE: "WRONG_OR_MIXED_TARGET_LANGUAGE",
  WRONG_LANGUAGE_AND_FORM: "WRONG_OR_MIXED_TARGET_LANGUAGE",
  WRONG_LANGUAGE_AND_MEANING: "WRONG_OR_MIXED_TARGET_LANGUAGE",
  WRONG_LANGUAGE_AND_MEANING_MISMATCH: "WRONG_OR_MIXED_TARGET_LANGUAGE",
  WRONG_LANGUAGE_AND_MISTRANSLATION: "WRONG_OR_MIXED_TARGET_LANGUAGE",
  WRONG_MEANING: "SEMANTIC_OR_MEANING_ERROR",
  WRONG_TARGET_LANGUAGE: "WRONG_OR_MIXED_TARGET_LANGUAGE",
  WRONG_TARGET_LANGUAGE_AND_MEANING: "WRONG_OR_MIXED_TARGET_LANGUAGE",
  WRONG_TRANSLATION: "SEMANTIC_OR_MEANING_ERROR",
  WRONG_TRANSLATION_AND_LANGUAGE: "WRONG_OR_MIXED_TARGET_LANGUAGE",
};

const BASELINE_CATEGORY_COUNTS = {
  SOURCE_LV_ISSUE: 5053,
  MULTI_TRANSLATION: 3985,
  WRONG_LANGUAGE: 2379,
  TARGET_LANGUAGE_MISMATCH: 2237,
  WRONG_TARGET_LANGUAGE: 1957,
  LANGUAGE_MISMATCH: 1918,
  MISTRANSLATION: 1239,
  TRANSLATION_ERROR: 908,
  MISSING_TRANSLATION: 410,
  TARGET_LANGUAGE_ERROR: 345,
  TARGET_LANGUAGE_ISSUE: 321,
  MEANING_ERROR: 252,
  ORTHOGRAPHY: 210,
};

function sha256Hex(value) {
  return crypto.createHash("sha256").update(value).digest("hex");
}

function stableJoin(parts) {
  return parts.map((p) => String(p ?? "")).join("\u001f");
}

function parseCsvLine(line) {
  const cells = [];
  let current = "";
  let inQuotes = false;
  for (let i = 0; i < line.length; i += 1) {
    const ch = line[i];
    if (inQuotes) {
      if (ch === '"') {
        if (line[i + 1] === '"') {
          current += '"';
          i += 1;
        } else {
          inQuotes = false;
        }
      } else {
        current += ch;
      }
    } else if (ch === '"') {
      inQuotes = true;
    } else if (ch === ",") {
      cells.push(current);
      current = "";
    } else {
      current += ch;
    }
  }
  cells.push(current);
  return cells;
}

function parseViewProposed(viewPath) {
  const proposedByAuditId = new Map();
  const content = fs.readFileSync(viewPath, "utf8");
  const blocks = content.split("## Finding ");
  for (const block of blocks.slice(1)) {
    const auditMatch = block.match(/\*\*Audit ID:\*\* `([^`]+)`/);
    const proposedMatch = block.match(/\*\*Proposed:\*\* (.+)/);
    if (!auditMatch) continue;
    const raw = proposedMatch ? proposedMatch[1].trim() : null;
    proposedByAuditId.set(auditMatch[1], raw === "—" || raw === "" ? null : raw);
  }
  return proposedByAuditId;
}

function extractObjectIdentity(stableId, cardId) {
  const parts = stableId.split("|");
  const objectPart = parts[1] || cardId || "";
  const indexPart = parts.find((p) => p.startsWith("idx:") || p.startsWith("raw:")) || null;
  const objectKey = indexPart ? `${objectPart}|${indexPart}` : objectPart;
  return { objectId: objectPart, objectIndex: indexPart, objectKey };
}

function productionFileForLang(lang) {
  return `crowdin-staging/g2/${lang}-a1.json`;
}

function mapRawToCanonical(rawCategory) {
  const bucket = RAW_TO_CANONICAL[rawCategory];
  if (!bucket) return "OTHER_REVIEW_REQUIRED";
  return bucket;
}

function loadOwnerPrepFindings(root = ROOT) {
  const csvPath = path.join(root, "reports/g2-a1-phase3-owner-decisions.csv");
  const viewPath = path.join(root, "reports/g2-a1-phase3-owner-view.md");
  const proposedByAuditId = parseViewProposed(viewPath);
  const lines = fs.readFileSync(csvPath, "utf8").trim().split(/\r?\n/);
  const header = parseCsvLine(lines[0]);
  const findings = [];
  for (let i = 1; i < lines.length; i += 1) {
    const cells = parseCsvLine(lines[i]);
    const row = {};
    header.forEach((key, idx) => {
      row[key] = cells[idx] ?? "";
    });
    const stableId = row.finding_stable_id;
    const objectIdentity = extractObjectIdentity(stableId, row.card_id);
    const rawCategory = row.category;
    const proposed = proposedByAuditId.get(row.audit_id) ?? null;
    const reason = null;
    findings.push({
      sourceFindingId: stableId,
      auditId: row.audit_id,
      dedupKey: sha256Hex(
        stableJoin([
          row.lang,
          productionFileForLang(row.lang),
          objectIdentity.objectKey,
          row.field_path,
          row.current,
          proposed,
          rawCategory,
          reason,
        ]),
      ),
      lang: row.lang,
      productionFile: productionFileForLang(row.lang),
      cardId: row.card_id,
      objectId: objectIdentity.objectId,
      objectIndex: objectIdentity.objectIndex,
      objectKey: objectIdentity.objectKey,
      fieldPath: row.field_path,
      current: row.current,
      proposed,
      reason,
      severity: row.severity,
      rawCategory,
      canonicalReviewBucket: mapRawToCanonical(rawCategory),
      ownerStatus: row.owner_status,
      source: row.source,
    });
  }
  return findings;
}

function validateSourceIntegrity(root = ROOT) {
  const errors = [];
  const proof = JSON.parse(fs.readFileSync(path.join(root, "reports/g2-a1-phase3-owner-proof.json"), "utf8"));
  const discovery = JSON.parse(fs.readFileSync(path.join(root, "reports/g2-a1-phase3-full-discovery.json"), "utf8"));
  const findings = loadOwnerPrepFindings(root);

  if (proof.findingCount !== EXPECTED_FINDING_COUNT) {
    errors.push(`proof findingCount ${proof.findingCount}`);
  }
  if (proof.sourceHash !== EXPECTED_SOURCE_HASH) {
    errors.push(`sourceHash mismatch ${proof.sourceHash}`);
  }
  if (findings.length !== EXPECTED_FINDING_COUNT) {
    errors.push(`loaded findings ${findings.length}`);
  }
  if (discovery.findings.validated !== EXPECTED_FINDING_COUNT) {
    errors.push(`discovery validated ${discovery.findings.validated}`);
  }

  const byCategory = discovery.findings.byCategory || {};
  const rawCategoryCount = Object.keys(byCategory).length;
  if (rawCategoryCount !== EXPECTED_RAW_CATEGORY_COUNT) {
    errors.push(`raw category count ${rawCategoryCount}`);
  }
  const rawSum = Object.values(byCategory).reduce((a, b) => a + b, 0);
  if (rawSum !== EXPECTED_FINDING_COUNT) {
    errors.push(`raw category sum ${rawSum}`);
  }

  for (const [cat, expected] of Object.entries(BASELINE_CATEGORY_COUNTS)) {
    if (byCategory[cat] !== expected) {
      errors.push(`baseline ${cat} expected ${expected} got ${byCategory[cat]}`);
    }
  }

  const statuses = new Set(findings.map((f) => f.ownerStatus));
  if (!statuses.has("PENDING") || statuses.size !== 1) {
    errors.push(`owner statuses ${[...statuses].join(",")}`);
  }

  const forbidden = ["LABOT", "NELABOT", "NEW", "ACCEPT", "REJECT"];
  for (const f of findings) {
    if (forbidden.includes(f.ownerStatus)) errors.push(`forbidden status on ${f.auditId}`);
  }

  const stableIds = findings.map((f) => f.sourceFindingId);
  if (new Set(stableIds).size !== stableIds.length) {
    errors.push("duplicate sourceFindingId in source");
  }

  const csvCategories = new Set(findings.map((f) => f.rawCategory));
  for (const raw of Object.keys(byCategory)) {
    if (!csvCategories.has(raw)) errors.push(`missing raw category in csv ${raw}`);
  }

  return {
    pass: errors.length === 0,
    errors,
    proof,
    discovery,
    findings,
    rawCategoryCount,
    rawSum,
  };
}

function buildExactDuplicateGroups(findings) {
  const groups = new Map();
  for (const finding of findings) {
    if (!groups.has(finding.dedupKey)) {
      groups.set(finding.dedupKey, {
        reviewGroupId: `DUP-${finding.dedupKey.slice(0, 16)}`,
        dedupKey: finding.dedupKey,
        memberFindingIds: [],
        memberAuditIds: [],
        memberCount: 0,
      });
    }
    const group = groups.get(finding.dedupKey);
    group.memberFindingIds.push(finding.sourceFindingId);
    group.memberAuditIds.push(finding.auditId);
    group.memberCount += 1;
  }
  return [...groups.values()].sort((a, b) => a.reviewGroupId.localeCompare(b.reviewGroupId));
}

function decisionTargetKey(finding) {
  return sha256Hex(
    stableJoin([
      finding.lang,
      finding.productionFile,
      finding.objectKey,
      finding.fieldPath,
      finding.current,
    ]),
  );
}

function buildDecisionTargets(findings) {
  const targets = new Map();
  for (const finding of findings) {
    const key = decisionTargetKey(finding);
    if (!targets.has(key)) {
      targets.set(key, {
        decisionTargetKey: key,
        lang: finding.lang,
        productionFile: finding.productionFile,
        objectKey: finding.objectKey,
        fieldPath: finding.fieldPath,
        current: finding.current,
        proposedValues: new Set(),
        reasons: new Set(),
        memberFindingIds: [],
        memberAuditIds: [],
        rawCategories: new Set(),
        canonicalBuckets: new Set(),
        conflict: false,
      });
    }
    const target = targets.get(key);
    target.memberFindingIds.push(finding.sourceFindingId);
    target.memberAuditIds.push(finding.auditId);
    target.rawCategories.add(finding.rawCategory);
    target.canonicalBuckets.add(finding.canonicalReviewBucket);
    if (finding.proposed != null) target.proposedValues.add(finding.proposed);
    if (finding.reason != null) target.reasons.add(finding.reason);
  }

  const list = [];
  for (const target of targets.values()) {
    const proposedList = [...target.proposedValues];
    const reasonList = [...target.reasons];
    const conflict =
      proposedList.length > 1 ||
      (reasonList.length > 1 && target.memberFindingIds.length > 1);
    target.conflict = conflict;
    target.conflictStatus = conflict ? "OWNER_DECISION_CONFLICT" : "NONE";
    target.reviewTrack = conflict
      ? "OWNER_DECISION_CONFLICTS"
      : CANONICAL_TO_TRACK[[...target.canonicalBuckets][0]] || "STYLE_FORMAT_AND_OTHER";
    if (
      !conflict &&
      target.canonicalBuckets.size === 1 &&
      target.canonicalBuckets.has("SOURCE_LV_REVIEW_REQUIRED")
    ) {
      target.reviewTrack = "SOURCE_LV_REVIEW";
    }
    list.push({
      ...target,
      proposedValues: proposedList,
      reasons: reasonList,
      rawCategories: [...target.rawCategories].sort(),
      canonicalBuckets: [...target.canonicalBuckets].sort(),
      memberCount: target.memberFindingIds.length,
    });
  }
  return list.sort((a, b) => a.decisionTargetKey.localeCompare(b.decisionTargetKey));
}

function sourceClusterKey(finding) {
  return sha256Hex(
    stableJoin([
      finding.objectKey,
      finding.fieldPath,
      finding.current,
      finding.rawCategory,
      finding.reason,
    ]),
  );
}

function buildSourceLvClusters(findings) {
  const sourceFindings = findings.filter((f) => f.rawCategory === "SOURCE_LV_ISSUE");
  const clusters = new Map();
  for (const finding of sourceFindings) {
    const key = sourceClusterKey(finding);
    if (!clusters.has(key)) {
      clusters.set(key, {
        sourceClusterId: `SRC-LV-${key.slice(0, 16)}`,
        clusterKey: key,
        objectKey: finding.objectKey,
        fieldPath: finding.fieldPath,
        currentLvValue: finding.current,
        rawCategory: finding.rawCategory,
        reasons: new Set(),
        languages: new Set(),
        productionFiles: new Set(),
        memberFindingIds: [],
        memberAuditIds: [],
        conflict: false,
      });
    }
    const cluster = clusters.get(key);
    cluster.memberFindingIds.push(finding.sourceFindingId);
    cluster.memberAuditIds.push(finding.auditId);
    cluster.languages.add(finding.lang);
    cluster.productionFiles.add(finding.productionFile);
    if (finding.reason) cluster.reasons.add(finding.reason);
  }

  return [...clusters.values()]
    .map((cluster) => ({
      ...cluster,
      languages: [...cluster.languages].sort(),
      productionFiles: [...cluster.productionFiles].sort(),
      reasons: [...cluster.reasons].sort(),
      languageCount: cluster.languages.size,
      memberCount: cluster.memberFindingIds.length,
      ownerStatus: "PENDING",
      conflict: false,
    }))
    .sort((a, b) => a.sourceClusterId.localeCompare(b.sourceClusterId));
}

function sortDecisionTargetsForBatching(targets) {
  return [...targets].sort((a, b) => {
    const trackOrder = REVIEW_TRACKS.indexOf(a.reviewTrack) - REVIEW_TRACKS.indexOf(b.reviewTrack);
    if (trackOrder !== 0) return trackOrder;
    const langCmp = a.lang.localeCompare(b.lang);
    if (langCmp !== 0) return langCmp;
    const bucketCmp = (a.canonicalBuckets[0] || "").localeCompare(b.canonicalBuckets[0] || "");
    if (bucketCmp !== 0) return bucketCmp;
    return a.decisionTargetKey.localeCompare(b.decisionTargetKey);
  });
}

function buildBatchManifest(findings, decisionTargets, sourceClusters, sourceHash) {
  const batches = [];
  let batchSeq = 0;

  const byTrack = new Map();
  for (const track of REVIEW_TRACKS) byTrack.set(track, []);

  for (const target of sortDecisionTargetsForBatching(decisionTargets)) {
    byTrack.get(target.reviewTrack).push(target);
  }

  for (const track of REVIEW_TRACKS) {
    const trackTargets = byTrack.get(track) || [];
    if (!trackTargets.length) continue;

    if (track === "SOURCE_LV_REVIEW") {
      const clusterById = new Map(sourceClusters.map((c) => [c.sourceClusterId, c]));
      const clusterOrder = sourceClusters.map((c) => c.sourceClusterId);
      const targetsByCluster = new Map();
      for (const target of trackTargets) {
        const clusterId = `SRC-LV-${sourceClusterKey({
          objectKey: target.objectKey,
          fieldPath: target.fieldPath,
          current: target.current,
          rawCategory: "SOURCE_LV_ISSUE",
          reason: null,
        }).slice(0, 16)}`;
        if (!targetsByCluster.has(clusterId)) targetsByCluster.set(clusterId, []);
        targetsByCluster.get(clusterId).push(target);
      }
      const orderedClusterIds = clusterOrder.filter((id) => targetsByCluster.has(id));
      let chunk = [];
      let chunkClusters = [];
      const flush = () => {
        if (!chunk.length) return;
        batchSeq += 1;
        const memberIds = chunk.flatMap((t) => t.memberFindingIds).sort();
        batches.push({
          batchId: `BATCH-${String(batchSeq).padStart(3, "0")}`,
          reviewTrack: track,
          canonicalReviewBucket: "SOURCE_LV_REVIEW_REQUIRED",
          languages: [...new Set(chunk.flatMap((t) => [t.lang]))].sort(),
          decisionTargetCount: chunk.length,
          sourceClusterCount: chunkClusters.length,
          findingCount: memberIds.length,
          firstStableId: memberIds[0],
          lastStableId: memberIds[memberIds.length - 1],
          sourceHash,
          status: "PENDING",
          decisionTargetKeys: chunk.map((t) => t.decisionTargetKey),
          sourceClusterIds: chunkClusters,
          memberFindingIds: memberIds,
        });
        chunk = [];
        chunkClusters = [];
      };
      for (const clusterId of orderedClusterIds) {
        const clusterTargets = targetsByCluster.get(clusterId) || [];
        if (chunkClusters.length > 0 && chunkClusters.length >= MAX_BATCH_DECISION_TARGETS) flush();
        if (chunk.length + clusterTargets.length > MAX_BATCH_DECISION_TARGETS) flush();
        chunk.push(...clusterTargets);
        chunkClusters.push(clusterId);
        if (chunk.length >= MAX_BATCH_DECISION_TARGETS) flush();
      }
      flush();
      continue;
    }

    let chunk = [];
    const flush = () => {
      if (!chunk.length) return;
      batchSeq += 1;
      const memberIds = chunk.flatMap((t) => t.memberFindingIds).sort();
      const buckets = [...new Set(chunk.flatMap((t) => t.canonicalBuckets))].sort();
      batches.push({
        batchId: `BATCH-${String(batchSeq).padStart(3, "0")}`,
        reviewTrack: track,
        canonicalReviewBucket: buckets.length === 1 ? buckets[0] : "MIXED_WITHIN_TRACK",
        languages: [...new Set(chunk.map((t) => t.lang))].sort(),
        decisionTargetCount: chunk.length,
        sourceClusterCount: 0,
        findingCount: memberIds.length,
        firstStableId: memberIds[0],
        lastStableId: memberIds[memberIds.length - 1],
        sourceHash,
        status: "PENDING",
        decisionTargetKeys: chunk.map((t) => t.decisionTargetKey),
        sourceClusterIds: [],
        memberFindingIds: memberIds,
      });
      chunk = [];
    };

    for (const target of trackTargets) {
      if (chunk.length >= MAX_BATCH_DECISION_TARGETS) flush();
      chunk.push(target);
    }
    flush();
  }

  const assigned = new Set();
  for (const batch of batches) {
    for (const id of batch.memberFindingIds) {
      if (assigned.has(id)) {
        throw new Error(`BLOCKED_OWNER_PREP_USABILITY: finding assigned twice ${id}`);
      }
      assigned.add(id);
    }
  }
  if (assigned.size !== findings.length) {
    throw new Error(
      `BLOCKED_OWNER_PREP_USABILITY: findings not fully assigned ${assigned.size}/${findings.length}`,
    );
  }

  return batches;
}

function buildBatch001Preview(batches, decisionTargets, findingsById) {
  const batch001 = batches.find((b) => b.batchId === "BATCH-001");
  if (!batch001) return "# Batch 001 preview\n\n(no BATCH-001)\n";

  const targetMap = new Map(decisionTargets.map((t) => [t.decisionTargetKey, t]));
  const lines = [
    "# G2/A1 Phase 3 — OWNER review BATCH-001 preview",
    "",
    `**Review track:** ${batch001.reviewTrack}`,
    `**Decision targets:** ${batch001.decisionTargetCount}`,
    `**Findings:** ${batch001.findingCount}`,
    `**Status:** PENDING`,
    "",
  ];

  const previewTargets = batch001.decisionTargetKeys.slice(0, 20);
  previewTargets.forEach((key, index) => {
    const target = targetMap.get(key);
    if (!target) return;
    const sampleFinding = findingsById.get(target.memberFindingIds[0]);
    lines.push(`## Review target ${index + 1}`);
    lines.push("");
    lines.push(`**Review group ID:** \`${target.conflict ? "CONFLICT" : target.decisionTargetKey.slice(0, 16)}\``);
    lines.push(`**Finding/member IDs:** ${target.memberAuditIds.slice(0, 5).join(", ")}${target.memberAuditIds.length > 5 ? " …" : ""}`);
    lines.push(`**Language(s):** ${target.lang}`);
    lines.push(`**Card/object ID:** \`${target.objectKey}\``);
    lines.push(`**Field/path:** \`${target.fieldPath}\``);
    lines.push(`**CURRENT:** ${target.current}`);
    lines.push(`**PROPOSED:** ${target.proposedValues.length ? target.proposedValues.join(" | ") : "—"}`);
    lines.push(`**Raw category:** ${target.rawCategories.join(", ")}`);
    lines.push(`**Canonical bucket:** ${target.canonicalBuckets.join(", ")}`);
    lines.push(`**Reason:** ${target.reasons.length ? target.reasons.join(" | ") : "—"}`);
    lines.push(`**Severity:** ${sampleFinding?.severity || "—"}`);
    lines.push(`**Conflict status:** ${target.conflictStatus}`);
    lines.push(`**OWNER STATUS:** PENDING`);
    lines.push(`**OWNER DECISION:** —`);
    lines.push(`**OWNER NEW:** —`);
    lines.push(`**OWNER NOTE:** —`);
    lines.push("");
    lines.push("---");
    lines.push("");
  });

  return `${lines.join("\n")}\n`;
}

function buildTaxonomyMap() {
  return {
    taxonomyVersion: TAXONOMY_VERSION,
    canonicalReviewBuckets: CANONICAL_REVIEW_BUCKETS,
    reviewTracks: REVIEW_TRACKS,
    canonicalToTrack: CANONICAL_TO_TRACK,
    rawToCanonical: RAW_TO_CANONICAL,
    mappingCount: Object.keys(RAW_TO_CANONICAL).length,
  };
}

function buildOwnerPrepUsability(options = {}) {
  const root = options.root || ROOT;
  const integrity = validateSourceIntegrity(root);
  if (!integrity.pass) {
    return {
      classification: "BLOCKED_OWNER_PREP_SOURCE_INTEGRITY",
      pass: false,
      errors: integrity.errors,
    };
  }

  if (options.expectedSourceHash && options.expectedSourceHash !== integrity.proof.sourceHash) {
    return {
      classification: "BLOCKED_OWNER_PREP_USABILITY",
      pass: false,
      errors: ["source hash mismatch fail-closed"],
    };
  }

  const findings = integrity.findings;
  const duplicateGroups = buildExactDuplicateGroups(findings);
  const decisionTargets = buildDecisionTargets(findings);
  const sourceClusters = buildSourceLvClusters(findings);
  const batches = buildBatchManifest(
    findings,
    decisionTargets,
    sourceClusters,
    integrity.proof.sourceHash,
  );

  const canonicalDistribution = {};
  for (const bucket of CANONICAL_REVIEW_BUCKETS) canonicalDistribution[bucket] = 0;
  for (const finding of findings) {
    canonicalDistribution[finding.canonicalReviewBucket] += 1;
  }

  const findingsById = new Map(findings.map((f) => [f.sourceFindingId, f]));
  const derivedFindings = findings.map((f) => ({
    sourceFindingId: f.sourceFindingId,
    auditId: f.auditId,
    dedupKey: f.dedupKey,
    lang: f.lang,
    productionFile: f.productionFile,
    objectKey: f.objectKey,
    fieldPath: f.fieldPath,
    current: f.current,
    proposed: f.proposed,
    reason: f.reason,
    severity: f.severity,
    rawCategory: f.rawCategory,
    canonicalReviewBucket: f.canonicalReviewBucket,
    ownerStatus: f.ownerStatus,
    decisionTargetKey: decisionTargetKey(f),
  }));

  const result = {
    classification: "G2_A1_PHASE3_OWNER_PREP_USABILITY_READY",
    pass: true,
    taxonomyVersion: TAXONOMY_VERSION,
    sourceHash: integrity.proof.sourceHash,
    findingCount: findings.length,
    rawCategoryCount: integrity.rawCategoryCount,
    canonicalBucketCount: CANONICAL_REVIEW_BUCKETS.length,
    canonicalDistribution,
    duplicateGroups: duplicateGroups.filter((g) => g.memberCount > 1),
    exactDuplicateGroupCount: duplicateGroups.filter((g) => g.memberCount > 1).length,
    exactDuplicateMemberCount: duplicateGroups
      .filter((g) => g.memberCount > 1)
      .reduce((sum, g) => sum + g.memberCount, 0),
    decisionTargetCount: decisionTargets.length,
    ownerDecisionConflictCount: decisionTargets.filter((t) => t.conflict).length,
    sourceLvFindings: sourceClusters.reduce((sum, c) => sum + c.memberCount, 0),
    sourceLvUniqueClusters: sourceClusters.length,
    reviewTrackCount: REVIEW_TRACKS.length,
    batchCount: batches.length,
    maxBatchDecisionTargets: Math.max(...batches.map((b) => b.decisionTargetCount), 0),
    batches,
    batch001Preview: buildBatch001Preview(batches, decisionTargets, findingsById),
    taxonomyMap: buildTaxonomyMap(),
    derivedFindings,
    automaticOwnerDecisions: 0,
    ownerStatuses: ["PENDING"],
  };

  result.outputHash = computeOutputHash(result);
  return result;
}

function computeOutputHash(result) {
  const payload = {
    taxonomyVersion: result.taxonomyVersion,
    sourceHash: result.sourceHash,
    findingCount: result.findingCount,
    canonicalDistribution: result.canonicalDistribution,
    batchIds: result.batches.map((b) => b.batchId),
    batchFindingCounts: result.batches.map((b) => b.findingCount),
    duplicateGroupIds: result.duplicateGroups.map((g) => g.reviewGroupId).sort(),
    sourceClusterIds: result.batches.flatMap((b) => b.sourceClusterIds).sort(),
    decisionTargetCount: result.decisionTargetCount,
    ownerDecisionConflictCount: result.ownerDecisionConflictCount,
  };
  return sha256Hex(JSON.stringify(payload));
}

module.exports = {
  TAXONOMY_VERSION,
  CANONICAL_REVIEW_BUCKETS,
  REVIEW_TRACKS,
  RAW_TO_CANONICAL,
  EXPECTED_SOURCE_HASH,
  EXPECTED_FINDING_COUNT,
  EXPECTED_RAW_CATEGORY_COUNT,
  MAX_BATCH_DECISION_TARGETS,
  mapRawToCanonical,
  loadOwnerPrepFindings,
  validateSourceIntegrity,
  buildExactDuplicateGroups,
  buildDecisionTargets,
  buildSourceLvClusters,
  buildBatchManifest,
  buildOwnerPrepUsability,
  computeOutputHash,
  decisionTargetKey,
  sourceClusterKey,
};
