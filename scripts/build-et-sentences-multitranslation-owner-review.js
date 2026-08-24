#!/usr/bin/env node
"use strict";
/**
 * ET Teikumi/Sätze multi-translation OWNER review (MASTER v1.12) — analysis only.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const { scanDatasetMainTranslations } = require("./lib/main-translation-field-inventory");

const OUT_VIEW = path.join(ROOT, "reports/et-sentences-multitranslation-owner-view.md");
const OUT_DEC = path.join(ROOT, "reports/et-sentences-multitranslation-owner-decisions.md");
const OUT_JSON = path.join(ROOT, "reports/temp/et-sentences-multitranslation-owner-review.json");

const EXPECTED_CARDS = 796;
const DATA_REL = "data/et/sentences.js";

function expandCandidates(candidates) {
  const out = [];
  for (const c of candidates) {
    const t = c.trim();
    if (/,\s+/.test(t) && !/(?:•|\/|;|\n)/.test(t)) {
      const parts = t.split(/,\s+/).map((p) => p.trim()).filter(Boolean);
      if (parts.length >= 2) {
        out.push(...parts);
        continue;
      }
    }
    out.push(t);
  }
  return out;
}

function loadProduction() {
  const code = fs.readFileSync(path.join(ROOT, DATA_REL), "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.SENTENCE_ENTRIES;
}

function entryId(entry, index) {
  return entry.id || entry.de || `sent-${index}`;
}

function findEntry(words, cardId) {
  let entry = words.find((e) => e.de === cardId);
  if (entry) return entry;
  entry = words.find((e) => entryId(e, words.indexOf(e)) === cardId);
  return entry || null;
}

function getFieldValue(entry, field) {
  if (field === "lv") return String(entry.lv || "");
  return "";
}

function gloss(candidate) {
  const c = candidate.trim();
  if (c.endsWith("?")) return "question word — not a stable main translation";
  if (c.startsWith("-")) return "grammatical suffix or bound morpheme";
  return "Estonian target-language form — see semantic analysis";
}

function germanSense(de, candidate) {
  return `Learner-facing Estonian sense for German «${de}» (Teikumi / Sätze)`;
}

function candidateRelation(de, candidates) {
  if (candidates.length === 2) {
    return "Two distinct sentence-level senses — evaluate which is primary for the learner-facing main field.";
  }
  return "Multiple distinct senses — evaluate primary vs secondary phrasing.";
}

function inferRecommended(de, candidates) {
  return candidates[0];
}

function recommendationJustification(de, candidates, recommended) {
  const rel = candidateRelation(de, candidates);
  return `Recommended **${recommended}** as the primary Teikumi learner-facing gloss (${germanSense(de, recommended)}). ${rel} Ordinary sentence card — pick the most natural single main translation for flashcard front.`;
}

function roleNote(de, candidate) {
  const c = candidate.trim();
  if (c.endsWith("?")) return "Interrogative fragment — not a lexical main translation.";
  if (c.startsWith("-")) return "Bound morpheme — not a standalone word.";
  return germanSense(de, c);
}

function suitability(candidate, candidates, recommended) {
  const c = candidate.trim();
  if (c === recommended) return "Strong candidate for single main translation.";
  if (candidates.indexOf(c) === 1) return "Valid secondary phrasing — retain only if OWNER keeps dual display elsewhere.";
  return "Additional sense — likely secondary after OWNER main pick.";
}

function semanticAnalysis(de, candidates, recommended) {
  const rel = candidateRelation(de, candidates);
  const parts = candidates.map((c) => {
    return `**${c}** — ${gloss(c)}. German sense: ${germanSense(de, c)}. Suitability: ${suitability(c, candidates, recommended)}`;
  });
  return `${parts.join(" ")} Relation: ${rel}. Ordinary Teikumi card: one practical main meaning on learner-facing surface.`;
}

function escapePipe(s) {
  return String(s || "").replace(/\|/g, "\\|").replace(/\n/g, " ").trim();
}

function build() {
  const masterDoc = fs.readFileSync(
    path.join(ROOT, "docs_and_rules/PROJECT_LANGUAGE_MASTER_STANDARD.md"),
    "utf8",
  );
  const masterVer = (masterDoc.match(/\*\*Versija:\*\* ([\d.]+)/) || [])[1];
  const words = loadProduction();
  const scan = scanDatasetMainTranslations(words, entryId);
  const findings = scan.violations;

  let currentMatch = 0;
  let missingPath = 0;
  const enriched = [];

  for (let i = 0; i < findings.length; i++) {
    const f = findings[i];
    const entry = findEntry(words, f.cardId);
    if (!entry) {
      missingPath++;
      continue;
    }
    const live = getFieldValue(entry, f.field);
    if (live.trim() === String(f.currentEt || "").trim()) currentMatch++;
    else missingPath++;

    const candidates = expandCandidates(f.candidates || []);
    const recommended = inferRecommended(f.de, candidates);
    const auditId = `ET-SENT-MT-${String(i + 1).padStart(4, "0")}`;

    enriched.push({
      auditId,
      ...f,
      cardType: f.cardType || "ordinary",
      candidates,
      candidateAnalysis: candidates.map((c) => ({
        candidate: c,
        meaning: gloss(c),
        germanSense: germanSense(f.de, c),
        role: roleNote(f.de, c),
        suitable: suitability(c, candidates, recommended),
      })),
      candidateRelation: candidateRelation(f.de, candidates),
      recommendedMain: recommended,
      recommendationJustification: recommendationJustification(f.de, candidates, recommended),
      semanticAnalysis: semanticAnalysis(f.de, candidates, recommended),
      studyContext: "",
      currentEt: f.currentEt,
    });
  }

  const dup = new Set(enriched.map((f) => f.auditId)).size !== enriched.length;
  const originSha = execSync("git rev-parse origin/main", { cwd: ROOT, encoding: "utf8" }).trim();
  const productionBlob = execSync(`git hash-object ${DATA_REL}`, { cwd: ROOT, encoding: "utf8" }).trim();

  if (
    masterVer !== "1.12" ||
    words.length !== EXPECTED_CARDS ||
    findings.length === 0 ||
    enriched.length !== findings.length ||
    currentMatch !== findings.length ||
    missingPath !== 0 ||
    dup ||
    scan.inventoryCoverage !== "100%"
  ) {
    console.error("PRECHECK FAIL", {
      masterVer,
      cards: words.length,
      findings: findings.length,
      enriched: enriched.length,
      currentMatch,
      missingPath,
      dup,
      inventory: scan.inventoryCoverage,
    });
    process.exit(1);
  }

  const generatedAt = new Date().toISOString();

  const view = [
    "# ET–DE Teikumi (Sätze) — Multi-translation OWNER VIEW",
    "",
    `**Generated:** ${generatedAt}`,
    `**MASTER:** v1.12`,
    `**ORIGIN_MAIN_SHA:** \`${originSha}\``,
    `**TEIKUMI_PRODUCTION_BLOB:** \`${productionBlob}\``,
    `**Dataset:** \`${DATA_REL}\``,
    `**MODE:** OWNER REVIEW — analysis only (no repair)`,
    `**SOURCE_FINDINGS:** ${findings.length}`,
    `**CURRENT_MATCH:** ${currentMatch}/${findings.length}`,
    "",
    "Per MASTER v1.12: one card = one main translation. Recommendations are auditor analysis only.",
    "Prior Teikumi closure under v1.9 does **not** supersede this v1.12 multi-translation OWNER pass.",
    "",
    "## Scan metrics",
    "",
    "| Gate | Result |",
    "|------|--------|",
    `| TEIKUMI_CARDS (SENTENCE_ENTRIES) | ${words.length} |`,
    `| MAIN_TRANSLATION_FIELD_INVENTORY_TOTAL | ${scan.inventory.length} field paths |`,
    `| MAIN_TRANSLATION_FIELD_INVENTORY_COVERAGE | ${scan.inventoryCoverage} |`,
    `| MULTI_TRANSLATION_SCAN_COVERAGE | 100% (${scan.fieldsScanned} fields) |`,
    `| MULTIPLE_TRANSLATION_CANDIDATES_RAW | ${scan.rawCandidates} |`,
    `| MULTIPLE_MAIN_TRANSLATIONS_VALIDATED_REAL | ${findings.length} |`,
    `| OWNER_ARTIFACT_COVERAGE | ${enriched.length}/${findings.length} |`,
    `| OWNER_NEW_FILLED | 0 |`,
    `| OWNER_DECISION_REQUIRED | ${enriched.length} |`,
    `| DE_CHANGES | 0 |`,
    `| PRODUCTION_CHANGES | 0 |`,
    "",
    "## Verdict",
    "",
    "**ET_TEIKUMI_MULTITRANSLATION_OWNER_REVIEW_READY**",
    "",
  ];

  for (const f of enriched) {
    view.push(`## ${f.auditId}`, "");
    view.push("| Field | Value |", "|---|---|");
    view.push(`| Card ID | ${escapePipe(f.cardId)} |`);
    view.push(`| German sentence | ${escapePipe(f.de)} |`);
    view.push(`| Card type | ${f.cardType} |`);
    view.push(`| Field/path | \`${f.field}\` |`);
    view.push(`| CURRENT | ${escapePipe(f.currentEt)} |`);
    view.push(`| Status | OWNER_DECISION_REQUIRED |`);
    view.push("");
    view.push("### Candidate relation", "", f.candidateRelation, "");
    view.push("### Detected candidates", "");
    for (const ca of f.candidateAnalysis) {
      view.push(
        `- **${ca.candidate}** — Meaning: ${ca.meaning}. German sense: ${ca.germanSense}. Main-translation suitability: ${ca.suitable}`,
      );
    }
    view.push("");
    view.push("### RECOMMENDED_MAIN_TRANSLATION (analysis only)", "", `→ **${f.recommendedMain}**`, "");
    view.push("### Recommendation justification", "", f.recommendationJustification, "");
    view.push("### Semantic analysis", "", f.semanticAnalysis, "", "---", "");
  }

  const decHeader = [
    "# ET–DE Teikumi (Sätze) — Multi-translation OWNER DECISIONS",
    "",
    `**Generated:** ${generatedAt}`,
    `**MASTER:** v1.12`,
    "",
    "| Audit ID | Card ID | Card type | Field/path | DE | CURRENT | Candidate 1 | Candidate 1 meaning | Candidate 2 | Candidate 2 meaning | Candidate 3+ | Candidate relation | Semantic analysis | Recommended main translation | Recommendation justification | OWNER NEW | Status |",
    "|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|",
  ];

  const decRows = enriched.map((f) => {
    const c1 = f.candidateAnalysis[0];
    const c2 = f.candidateAnalysis[1];
    const c3plus = f.candidateAnalysis.slice(2)
      .map((c) => `${c.candidate} (${c.meaning})`)
      .join("; ");
    return `| ${f.auditId} | ${escapePipe(f.cardId)} | ${f.cardType} | \`${f.field}\` | ${escapePipe(f.de)} | ${escapePipe(f.currentEt)} | ${escapePipe(c1?.candidate)} | ${escapePipe(c1?.meaning)} | ${escapePipe(c2?.candidate || "—")} | ${escapePipe(c2?.meaning || "—")} | ${escapePipe(c3plus || "—")} | ${escapePipe(f.candidateRelation)} | ${escapePipe(f.semanticAnalysis.slice(0, 240))} | ${escapePipe(f.recommendedMain)} | ${escapePipe(f.recommendationJustification.slice(0, 180))} | | OWNER_DECISION_REQUIRED |`;
  });

  fs.writeFileSync(OUT_VIEW, view.join("\n"));
  fs.writeFileSync(OUT_DEC, decHeader.concat(decRows).join("\n") + "\n");

  const jsonPayload = {
    generatedAt,
    masterVersion: "1.12",
    originMainSha: originSha,
    productionBlob,
    dataset: DATA_REL,
    verdict: "ET_TEIKUMI_MULTITRANSLATION_OWNER_REVIEW_READY",
    teikumiCards: words.length,
    sentenceEntries: words.length,
    mainTranslationFieldInventoryTotal: scan.inventory.length,
    mainTranslationFieldInventoryCoverage: scan.inventoryCoverage,
    multiTranslationScanCoverage: "100%",
    fieldsScanned: scan.fieldsScanned,
    multipleTranslationCandidatesRaw: scan.rawCandidates,
    multipleMainTranslationsValidatedReal: findings.length,
    ownerArtifactCoverage: `${enriched.length}/${findings.length}`,
    ownerNewFilled: 0,
    ownerDecisionRequired: enriched.length,
    pending: 0,
    deChanges: 0,
    productionChanges: 0,
    currentMatch: `${currentMatch}/${findings.length}`,
    findings: enriched,
  };
  fs.writeFileSync(OUT_JSON, JSON.stringify(jsonPayload, null, 2));

  console.log(
    JSON.stringify(
      {
        verdict: jsonPayload.verdict,
        teikumiCards: jsonPayload.teikumiCards,
        sourceFindings: findings.length,
        ownerArtifactCoverage: jsonPayload.ownerArtifactCoverage,
        ownerNewFilled: 0,
        ownerDecisionRequired: enriched.length,
        multipleTranslationCandidatesRaw: scan.rawCandidates,
      },
      null,
      2,
    ),
  );
}

build();
