#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { ROOT } = require("../audit-common");
const { loadG2Level } = require("../content-crowdin-bridge/roundtrip");
const { loadHausProductionInventory, HAUS_POSITIVE_LOOKUP } = require("./haus-32-language-source-pilot");
const {
  loadStructuredLanguageAuthoritySources,
  rowByAppCode,
  allUrlsForLanguage,
} = require("../master-language-authority-sources-33");
const { extractNormativeLemma } = require("../master-capitalization-rule-verify");

const PILOT_DIR = path.join(ROOT, "reports/g2-a1-production-current/haus-32-language-source-pilot");
const OUT_DIR = path.join(ROOT, "reports/g2-a1-production-current/haus-owner-review");

/** Inventory control table — not automatic OWNER authorization. */
const FIXED_FINDING_IDENTITY = Object.freeze([
  { language: "en", currentTarget: "House", proposedTarget: "house", findingType: "CAPITALIZATION_ERROR" },
  { language: "da", currentTarget: "Hus", proposedTarget: "hus", findingType: "CAPITALIZATION_ERROR" },
  { language: "tr", currentTarget: "Ev", proposedTarget: "ev", findingType: "CAPITALIZATION_ERROR" },
  { language: "gr", currentTarget: "Σπίτι", proposedTarget: "σπίτι", findingType: "CAPITALIZATION_ERROR" },
  { language: "ru", currentTarget: "Дом", proposedTarget: "дом", findingType: "CAPITALIZATION_ERROR" },
  { language: "sk", currentTarget: "Domov", proposedTarget: "dom", findingType: "WRONG_TRANSLATION" },
  { language: "nb", currentTarget: "Maya", proposedTarget: "hus", findingType: "WRONG_TRANSLATION" },
  { language: "nn", currentTarget: "Maya", proposedTarget: "hus", findingType: "WRONG_TRANSLATION" },
  { language: "fi", currentTarget: "Maja", proposedTarget: "talo", findingType: "WRONG_TRANSLATION" },
]);

const OWNER_DECISION_LANG_ORDER = FIXED_FINDING_IDENTITY.map((r) => r.language);

function readPilotArtifacts() {
  const verdictPath = path.join(PILOT_DIR, "haus-32-language-verdicts.json");
  const dePath = path.join(PILOT_DIR, "haus-de-source-evidence.json");
  if (!fs.existsSync(verdictPath) || !fs.existsSync(dePath)) {
    return { ok: false, code: "HAUS_PILOT_ARTIFACTS_MISSING" };
  }
  const verdicts = JSON.parse(fs.readFileSync(verdictPath, "utf8"));
  const deEvidence = JSON.parse(fs.readFileSync(dePath, "utf8"));
  return { ok: true, verdicts, deEvidence };
}

function assertFindingIdentity(rows, blockers) {
  for (const spec of FIXED_FINDING_IDENTITY) {
    const matches = rows.filter((r) => r.language === spec.language && r.verdict === "FINDING");
    if (matches.length !== 1) {
      blockers.push({ code: "FINDING_IDENTITY_MISMATCH", language: spec.language, reason: "row_count", got: matches.length });
      continue;
    }
    const r = matches[0];
    if (r.currentTarget !== spec.currentTarget || r.proposedTarget !== spec.proposedTarget || r.findingType !== spec.findingType) {
      blockers.push({
        code: "FINDING_IDENTITY_MISMATCH",
        language: spec.language,
        got: { currentTarget: r.currentTarget, proposedTarget: r.proposedTarget, findingType: r.findingType },
        expected: spec,
      });
    }
  }
}

function assertBaselineCounts(counts, blockers) {
  const expected = { PASS: 4, FINDING: 9, NEEDS_SOURCE_REVIEW: 19, SOURCE_DE_ISSUE: 0 };
  for (const [k, v] of Object.entries(expected)) {
    if (counts[k] !== v) {
      blockers.push({ code: "HAUS_OWNER_REVIEW_BASELINE_MISMATCH", metric: k, got: counts[k], expected: v });
    }
  }
  if (counts.PASS + counts.FINDING + counts.NEEDS_SOURCE_REVIEW + counts.SOURCE_DE_ISSUE !== 32) {
    blockers.push({ code: "HAUS_OWNER_REVIEW_BASELINE_MISMATCH", metric: "TOTAL", got: 32 });
  }
}

function masterAuthorityLabel(row) {
  if (!row) return null;
  return row.PRIMARY_DICTIONARY_AUTHORITY || row.LANGUAGE_NORM_AUTHORITY || row.ADDITIONAL_AUTHORITY || null;
}

function masterAuthorityUrl(row) {
  if (!row) return null;
  const urls = allUrlsForLanguage(row);
  return urls[0] || null;
}

function loadReadOnlyHausCard(appLang, cardIndex) {
  const cards = loadG2Level(appLang, "a1");
  const card = cards[cardIndex];
  if (!card) return null;
  return JSON.parse(JSON.stringify(card));
}

function capitalizationRationale(row, deEvidence, authorityLemma) {
  return [
    `DE lemma «${deEvidence.deHeadword}» (${deEvidence.deArticle || "das"}) is normatively capitalized in German (official DE entry: ${deEvidence.deEntryUrl}).`,
    `Sense for this card: ${deEvidence.senseNote}.`,
    `TARGET dictionary normative lemma «${authorityLemma}» starts with lowercase; German capitalization must not be transferred to TARGET (MASTER §7.158; APVIENOTS §20).`,
    `CURRENT «${row.currentTarget}» matches TARGET meaning; only capitalization differs from normative lemma «${authorityLemma}».`,
    `PROPOSED_NEW «${row.proposedTarget}» equals TARGET normative lemma.`,
    `Authority: ${row.targetAuthority}; entry: ${row.targetEntryUrl}.`,
  ].join(" ");
}

function wrongTranslationRationale(row, deEvidence) {
  const lemma = extractNormativeLemma(row.targetHeadword, row.targetMeaningFragment) || row.targetHeadword;
  const frag = String(row.targetMeaningFragment || "").slice(0, 400);
  const lines = [
    `DE «${deEvidence.deHeadword}» (${deEvidence.senseNote}).`,
    `CURRENT production value: «${row.currentTarget}».`,
    `TARGET authority «${row.targetAuthority}» entry ${row.targetEntryUrl} gives normative lemma «${lemma}».`,
    `TARGET building/dwelling sense fragment (excerpt): ${frag}`,
  ];
  if (row.language === "sk") {
    lines.push(
      "CURRENT «Domov» denotes home/homeland sense in Slovak usage; validated entry supports «dom» for building/house sense aligned with DE «Haus» as dwelling.",
    );
  }
  if (row.language === "nb" || row.language === "nn") {
    lines.push(
      "CURRENT «Maya» is unrelated (Mayan language/culture); validated Norwegian entry supports «hus» for building/dwelling matching DE «Haus».",
    );
  }
  if (row.language === "fi") {
    lines.push(
      "CURRENT «Maja» is not the validated Finnish house lemma for this sense; TARGET entry supports «talo» for building/dwelling.",
    );
  }
  lines.push(`PROPOSED_NEW «${row.proposedTarget}» matches validated TARGET lemma for DE dwelling sense.`);
  return lines.join(" ");
}

function findingRationale(row, deEvidence) {
  if (row.findingType === "CAPITALIZATION_ERROR") {
    const lemma = extractNormativeLemma(row.targetHeadword, row.targetMeaningFragment);
    return capitalizationRationale(row, deEvidence, lemma);
  }
  return wrongTranslationRationale(row, deEvidence);
}

function buildFindingEvidenceRow(row, deEvidence) {
  const authorityLemma = extractNormativeLemma(row.targetHeadword, row.targetMeaningFragment);
  return {
    language: row.language,
    appCode: row.appCode,
    productionFile: row.productionFile,
    cardId: row.cardId,
    cardIndex: row.cardIndex,
    fieldPath: `cards[${row.cardIndex}].lv`,
    deCurrent: deEvidence.deHeadword,
    deArticle: row.deArticle,
    deSenseNote: deEvidence.senseNote,
    deAuthority: deEvidence.deAuthority,
    deEntryUrl: deEvidence.deEntryUrl,
    deEvidenceFragment: deEvidence.deEvidenceFragment,
    deEvidenceSha256: deEvidence.deContentSha256,
    targetCurrent: row.currentTarget,
    targetAuthority: row.targetAuthority,
    targetEntryUrl: row.targetEntryUrl,
    targetNormativeLemma: authorityLemma,
    targetMeaningFragment: row.targetMeaningFragment,
    targetEvidenceSha256: row.evidenceSha256,
    orthographyStatus: row.orthographyStatus,
    capitalizationStatus: row.capitalizationStatus,
    lemmaStatus: row.lemmaStatus,
    semanticMatchStatus: row.semanticMatchStatus,
    findingType: row.findingType,
    proposedNew: row.proposedTarget,
    rationale: findingRationale(row, deEvidence),
    ownerDecisionField: "",
  };
}

function nsrMissingEvidence(row) {
  const missing = [];
  if (!row.targetHeadword) missing.push("TARGET headword");
  if (!row.targetMeaningFragment) missing.push("TARGET meaning fragment");
  if (!row.targetEntryUrl) missing.push("concrete validated entry URL");
  if (row.sourceAccessStatus !== "SOURCE_ENTRY_VALIDATED") missing.push("validated source access");
  if (row.capitalizationStatus === "NOT_EVALUATED" && !missing.includes("normative capitalization proof")) {
    missing.push("normative capitalization proof");
  }
  if (row.semanticMatchStatus === "NOT_EVALUATED") missing.push("semantic match proof");
  return missing;
}

function nsrNeedsAndAction(row, masterRow) {
  const missing = nsrMissingEvidence(row);
  const status = row.sourceAccessStatus || "UNKNOWN";
  let technicalBlocker = `Adapter outcome: ${status}`;
  if (row.targetEntryUrl && !row.targetHeadword) {
    technicalBlocker = `Attempted entry ${row.targetEntryUrl} did not produce validated headword + meaning fragment (outcome ${status}).`;
  } else if (!row.targetEntryUrl && masterRow) {
    const urls = allUrlsForLanguage(masterRow);
    if (!urls.length) {
      technicalBlocker = "No MASTER-listed official dictionary URL available for automated entry validation.";
    } else {
      technicalBlocker = `No validated entry URL resolved from MASTER sources (outcome ${status}).`;
    }
  }
  if (/^\)/.test(String(row.currentTarget || ""))) {
    technicalBlocker += " Production CURRENT appears corrupted (leading punctuation); adapter used corrupted lookup term.";
  }
  if (row.language === "hr" && /\p{Script=Cyrillic}/u.test(String(row.currentTarget))) {
    technicalBlocker += " CURRENT uses Cyrillic script; MASTER target expects Latin Croatian official sources.";
  }

  let needsAdapter = true;
  let needsManual = false;
  let needsMaster = false;
  if (!masterRow || !allUrlsForLanguage(masterRow).length) {
    needsMaster = true;
    needsAdapter = false;
  }
  if (["bs", "sq", "sr", "mk"].includes(row.language) && !row.targetEntryUrl) {
    needsMaster = true;
    needsManual = true;
  }
  if (status === "SOURCE_AUTHENTICATION_REQUIRED" || status === "SOURCE_ACCESS_BLOCKED") {
    needsManual = true;
  }

  const ownerNext = needsMaster
    ? "OWNER: confirm MASTER authority URL / adapter path, or supply manual official evidence"
    : needsManual
      ? "OWNER: provide official source access or manual entry evidence; then re-run adapter"
      : "Engineering: adapter rework to obtain validated TARGET headword + dwelling-sense fragment";

  return {
    missing,
    needsAdapterRework: needsAdapter && !needsMaster,
    needsManualOwnerEvidence: needsManual,
    needsMasterSourceDecision: needsMaster,
    ownerNextAction: ownerNext,
    technicalBlocker,
  };
}

function buildNsrRow(row, structured) {
  const masterRow = structured.pass ? rowByAppCode(structured.languages, row.language) : null;
  const meta = nsrNeedsAndAction(row, masterRow);
  const hint = row.hausPositiveLookupHint
    ? { hausPositiveLookupHint: row.hausPositiveLookupHint, note: "Search hint only — not approved PROPOSED_NEW or OWNER LABOT" }
    : null;
  return {
    language: row.language,
    current: row.currentTarget,
    masterAuthority: masterAuthorityLabel(masterRow),
    masterSourceUrl: masterAuthorityUrl(masterRow),
    attemptedEntryUrl: row.targetEntryUrl,
    sourceAccessStatus: row.sourceAccessStatus,
    technicalBlocker: meta.technicalBlocker,
    missingEvidence: meta.missing,
    needsAdapterRework: meta.needsAdapterRework,
    needsManualOwnerEvidence: meta.needsManualOwnerEvidence,
    needsMasterSourceDecision: meta.needsMasterSourceDecision,
    ownerNextAction: meta.ownerNextAction,
    lookupHintOnly: hint,
  };
}

function buildOwnerDecisionRow(row) {
  return {
    language: row.language,
    appCode: row.appCode,
    cardId: row.cardId,
    currentTarget: row.currentTarget,
    findingType: row.findingType,
    proposedNew: row.proposedTarget,
    targetNormativeLemma: extractNormativeLemma(row.targetHeadword, row.targetMeaningFragment),
    targetEntryUrl: row.targetEntryUrl,
    OWNER_STATUS: "",
    OWNER_NEW: "",
    OWNER_NOTE: "",
    OWNER_EVIDENCE_ACCEPTED: "",
    OWNER_REVIEWED_AT: "",
  };
}

function buildPassEvidenceRow(row, deEvidence) {
  return {
    language: row.language,
    currentTarget: row.currentTarget,
    verdict: row.verdict,
    deEntryUrl: deEvidence.deEntryUrl,
    deEvidenceSha256: deEvidence.deContentSha256,
    deEvidenceFragmentExcerpt: String(deEvidence.deEvidenceFragment || "").slice(0, 280),
    targetAuthority: row.targetAuthority,
    targetEntryUrl: row.targetEntryUrl,
    targetHeadword: row.targetHeadword,
    targetMeaningFragmentExcerpt: String(row.targetMeaningFragment || "").slice(0, 280),
    targetEvidenceSha256: row.evidenceSha256,
    contextComparison:
      `DE «${deEvidence.deHeadword}» ↔ TARGET «${row.currentTarget}» matches normative lemma «${extractNormativeLemma(row.targetHeadword, row.targetMeaningFragment)}» with validated official entries.`,
    pilotVerdict: "PASS",
  };
}

function buildFullCardSnapshot(row, deEvidence) {
  const card = loadReadOnlyHausCard(row.appCode, row.cardIndex);
  return {
    language: row.language,
    productionFile: row.productionFile,
    cardId: row.cardId,
    cardIndex: row.cardIndex,
    auditedField: "lv",
    currentTarget: row.currentTarget,
    proposedNew: row.proposedTarget,
    findingType: row.findingType,
    verdict: row.verdict,
    deEvidence: {
      deCurrent: deEvidence.deHeadword,
      deArticle: row.deArticle,
      deSenseNote: deEvidence.senseNote,
      deAuthority: deEvidence.deAuthority,
      deEntryUrl: deEvidence.deEntryUrl,
      deEvidenceSha256: deEvidence.deContentSha256,
    },
    targetEvidence: {
      targetAuthority: row.targetAuthority,
      targetEntryUrl: row.targetEntryUrl,
      targetHeadword: row.targetHeadword,
      targetMeaningFragment: row.targetMeaningFragment,
      targetEvidenceSha256: row.evidenceSha256,
    },
    readOnlyCard: card,
  };
}

function csvEscape(v) {
  const s = String(v ?? "");
  if (/[",\n]/.test(s)) return `"${s.replace(/"/g, '""')}"`;
  return s;
}

function buildOwnerViewMarkdown({ counts, findings, nsrRows, passRows, deEvidence }) {
  const lines = [
    "# das Haus — OWNER review package (32-language pilot)",
    "",
    "**OWNER has not decided yet.** Audit FINDING ≠ OWNER LABOT.",
    "",
    "## Counts",
    "",
    `- TOTAL: 32`,
    `- PASS: ${counts.PASS}`,
    `- FINDING: ${counts.FINDING}`,
    `- NEEDS_SOURCE_REVIEW: ${counts.NEEDS_SOURCE_REVIEW}`,
    `- SOURCE_DE_ISSUE: ${counts.SOURCE_DE_ISSUE}`,
    "",
    "## DE evidence (shared)",
    "",
    `- Authority: ${deEvidence.deAuthority}`,
    `- URL: ${deEvidence.deEntryUrl}`,
    `- SHA-256: \`${deEvidence.deContentSha256}\``,
    `- Sense: ${deEvidence.senseNote}`,
    "",
    "## 9 FINDING — evidence summary",
    "",
  ];

  for (const f of findings) {
    lines.push(`### ${f.language.toUpperCase()} — ${f.findingType}`);
    lines.push("");
    lines.push(`| Field | Value |`);
    lines.push(`|-------|-------|`);
    const entries = Object.entries(f).filter(([k]) => k !== "rationale");
    for (const [k, v] of entries) {
      const val = String(v ?? "").replace(/\|/g, "\\|").slice(0, 500);
      lines.push(`| ${k} | ${val} |`);
    }
    lines.push("");
    lines.push(`**Rationale:** ${f.rationale}`);
    lines.push("");
  }

  lines.push("## 19 NEEDS_SOURCE_REVIEW");
  lines.push("");
  lines.push("| Lang | CURRENT | Blocker | Missing | Next |");
  lines.push("|------|---------|---------|---------|------|");
  for (const n of nsrRows) {
    lines.push(
      `| ${n.language} | ${n.current} | ${String(n.technicalBlocker).slice(0, 120)} | ${n.missingEvidence.join("; ")} | ${String(n.ownerNextAction).slice(0, 80)} |`,
    );
  }
  lines.push("");
  lines.push("## 4 PASS (no OWNER decision required)");
  lines.push("");
  for (const p of passRows) {
    lines.push(`- **${p.language}**: ${p.contextComparison}`);
  }
  lines.push("");
  return lines.join("\n");
}

function buildNsrMarkdown(nsrRows) {
  const lines = [
    "# das Haus — NEEDS_SOURCE_REVIEW (19 languages)",
    "",
    "Do not assign LABOT/NELABOT or invented PROPOSED_NEW for these rows.",
    "",
    "| Valoda | CURRENT | MASTER avots | Attempted URL | Status | Bloķētājs | Trūkst |",
    "|--------|---------|--------------|---------------|--------|-----------|--------|",
  ];
  for (const n of nsrRows) {
    lines.push(
      `| ${n.language} | ${n.current} | ${n.masterAuthority || "—"} | ${n.attemptedEntryUrl || "—"} | ${n.sourceAccessStatus} | ${String(n.technicalBlocker).slice(0, 100).replace(/\|/g, "/")} | ${n.missingEvidence.join("; ")} |`,
    );
  }
  if (nsrRows.some((n) => n.lookupHintOnly)) {
    lines.push("");
    lines.push("Rows with `hausPositiveLookupHint` in JSON: hint is for search only, not approved NEW.");
  }
  return lines.join("\n");
}

function buildHausOwnerReviewPackage(execution = null) {
  const blockers = [];
  const pilot = readPilotArtifacts();
  if (!pilot.ok) {
    return { pass: false, code: pilot.code, blockers: [pilot] };
  }

  const { verdicts, deEvidence } = pilot;
  const rows = verdicts.rows || [];
  const counts = verdicts.counts || {};

  const baselineAtStart = { PASS: 4, FINDING: 9, NEEDS_SOURCE_REVIEW: 19, SOURCE_DE_ISSUE: 0 };
  if (!execution) {
    assertBaselineCounts(counts, blockers);
  }
  assertFindingIdentity(rows, blockers);
  if (blockers.length) {
    return { pass: false, code: blockers[0].code, blockers };
  }

  const structured = loadStructuredLanguageAuthoritySources();
  const order = rows.map((r) => r.language);
  const byLang = new Map(rows.map((r) => [r.language, r]));

  const findingRows = OWNER_DECISION_LANG_ORDER.map((lang) => byLang.get(lang)).filter(Boolean);
  const findings = findingRows.map((r) => buildFindingEvidenceRow(r, deEvidence));
  const nsrRows = rows.filter((r) => r.verdict === "NEEDS_SOURCE_REVIEW").map((r) => buildNsrRow(r, structured));
  const passRows = rows.filter((r) => r.verdict === "PASS").map((r) => buildPassEvidenceRow(r, deEvidence));
  const fullCards = findingRows.map((r) => buildFullCardSnapshot(r, deEvidence));
  let ownerDecisions = findingRows.map((r) => buildOwnerDecisionRow(r));

  let mergedFindings = findings;
  if (execution?.ownerDecisions?.length === 9) {
    ownerDecisions = execution.ownerDecisions;
    mergedFindings = findings.map((f) => {
      const rev = execution.findingResults.find((x) => x.language === f.language);
      return rev ? { ...f, reverification: rev, targetEntryUrl: rev.targetEntryUrl || f.targetEntryUrl, targetEvidenceSha256: rev.targetEvidenceSha256 || f.targetEvidenceSha256, targetNormativeLemma: rev.targetNormativeLemma || f.targetNormativeLemma, targetMeaningFragment: rev.targetMeaningFragment || f.targetMeaningFragment } : f;
    });
  }

  let mergedNsrRows = nsrRows;
  if (execution?.nsrResults?.length) {
    const unresolved = execution.nsrResults.filter((r) => !r.resolved);
    mergedNsrRows = unresolved.map((r) => ({
      language: r.language,
      current: r.productionCurrent,
      masterAuthority: masterAuthorityLabel(structured.pass ? rowByAppCode(structured.languages, r.language) : null),
      masterSourceUrl: masterAuthorityUrl(structured.pass ? rowByAppCode(structured.languages, r.language) : null),
      attemptedEntryUrl: r.targetEntryUrl,
      sourceAccessStatus: r.targetOutcome,
      technicalBlocker: r.technicalBlocker,
      missingEvidence: r.sourceValidated ? [] : ["validated TARGET headword", "TARGET meaning fragment", "validated source access"],
      resolution: r.resolution,
      ownerNextAction: r.masterProposalRequired ? "OWNER: MASTER source registry decision" : "Engineering or manual official evidence",
      lookupHintOnly: HAUS_POSITIVE_LOOKUP[r.language]
        ? { hausPositiveLookupHint: HAUS_POSITIVE_LOOKUP[r.language], note: "Search hint only — not approved PROPOSED_NEW" }
        : null,
    }));
  }

  const decisionCounts = execution?.decisionCounts || { LABOT: 0, NELABOT: 0, NEEDS_SOURCE_REVIEW: 0, SOURCE_DE_ISSUE: 0 };
  const ownerFilled = Object.values(decisionCounts).reduce((a, b) => a + b, 0) === 9 && decisionCounts.LABOT + decisionCounts.NELABOT + decisionCounts.NEEDS_SOURCE_REVIEW + decisionCounts.SOURCE_DE_ISSUE === 9;

  const nsrUnresolved = execution?.nsrUnresolved ?? nsrRows.length;
  const nsrResolved = execution?.nsrResolved ?? 0;

  let classification = "G2_A1_HAUS_OWNER_REVIEW_PACKAGE_READY";
  let nextAction = "OWNER_REVIEW_9_HAUS_FINDINGS_AND_19_SOURCE_BLOCKERS";
  if (execution) {
    classification =
      nsrUnresolved === 0
        ? "G2_A1_HAUS_32_LANGUAGE_OWNER_REVIEW_COMPLETE"
        : "G2_A1_HAUS_OWNER_FINDINGS_REVIEWED_SOURCE_BLOCKERS_REMAIN";
    nextAction =
      nsrUnresolved === 0
        ? "PREPARE_OWNER_AUTHORIZED_HAUS_PRODUCTION_APPLY"
        : "OWNER_RESOLVE_REMAINING_HAUS_SOURCE_BLOCKERS";
  }

  const manifest = {
    generatedAt: new Date().toISOString(),
    pilotHeadRequired: "fc4c8a57ca65e596d44d7f2dd23c439664596889",
    sourcePilotDir: "reports/g2-a1-production-current/haus-32-language-source-pilot",
    baselineAtStart,
    pilotCountsAfterRun: counts,
    counts,
    ownerDecisionFinal: decisionCounts,
    nsrAtStart: 19,
    nsrResolved,
    nsrUnresolved,
    manualOwnerReviewRows: execution?.manualRows?.length ?? 0,
    masterSourceChangeProposals: execution?.masterProposals?.length ?? 0,
    coverage: {
      totalLanguages: 32,
      findingDecisionRows: ownerDecisions.length,
      nsrRows: mergedNsrRows.length,
      passEvidenceRows: passRows.length,
      sum: ownerDecisions.length + mergedNsrRows.length + passRows.length,
    },
    full95731FieldAuditRun: false,
    FULL_LINGUISTIC_AUDITS_EXECUTED: 0,
    productionApply: false,
    ownerDecisionsFilled: ownerFilled,
    classification,
    nextAction,
    languageOrder: order,
    executionAt: execution?.executedAt || null,
  };

  return {
    pass: true,
    counts,
    findings: mergedFindings,
    nsrRows: mergedNsrRows,
    passRows,
    fullCards,
    ownerDecisions,
    deEvidence,
    manifest,
    execution,
    outDir: OUT_DIR,
  };
}

function writeHausOwnerReviewArtifacts(result) {
  if (!result.pass) return result;

  fs.mkdirSync(OUT_DIR, { recursive: true });
  const writeJson = (name, obj) => {
    fs.writeFileSync(path.join(OUT_DIR, name), `${JSON.stringify(obj, null, 2)}\n`);
  };

  writeJson("haus-findings-evidence.json", {
    generatedAt: new Date().toISOString(),
    deEvidenceShared: result.deEvidence,
    rows: result.findings,
  });
  writeJson("haus-findings-full-cards.json", {
    generatedAt: new Date().toISOString(),
    rows: result.fullCards,
  });
  writeJson("haus-needs-source-review.json", {
    generatedAt: new Date().toISOString(),
    rowCount: result.nsrRows.length,
    rows: result.nsrRows,
  });
  writeJson("haus-pass-evidence.json", {
    generatedAt: new Date().toISOString(),
    rowCount: result.passRows.length,
    rows: result.passRows,
  });
  writeJson("haus-owner-decisions.json", {
    generatedAt: new Date().toISOString(),
    note: "OWNER_STATUS must be filled by OWNER only (LABOT | NELABOT | NEEDS_SOURCE_REVIEW).",
    rows: result.ownerDecisions,
  });
  writeJson("haus-owner-review-manifest.json", result.manifest);

  if (result.execution) {
    writeJson("haus-source-resolution-summary.json", {
      generatedAt: new Date().toISOString(),
      baseline: result.execution.baseline,
      decisionCounts: result.execution.decisionCounts,
      nsrResolved: result.execution.nsrResolved,
      nsrUnresolved: result.execution.nsrUnresolved,
      findingResults: result.execution.findingResults,
      nsrResults: result.execution.nsrResults,
    });
    const sumLines = [
      "# das Haus — source resolution summary",
      "",
      `Executed: ${result.execution.executedAt}`,
      "",
      "## 9 FINDING OWNER decisions",
      "",
      "| Lang | OWNER_STATUS | OWNER_NEW | Entry URL |",
      "|------|--------------|-----------|-----------|",
      ...result.execution.ownerDecisions.map(
        (d) => `| ${d.language} | ${d.OWNER_STATUS} | ${d.OWNER_NEW || "—"} | ${d.targetEntryUrl || "—"} |`,
      ),
      "",
      `NSR resolved: **${result.execution.nsrResolved}** / 19 · unresolved: **${result.execution.nsrUnresolved}**`,
      "",
      "## Unresolved NSR",
      "",
      ...result.execution.nsrResults
        .filter((r) => !r.resolved)
        .map((r) => `- **${r.language}**: ${r.technicalBlocker}`),
    ];
    fs.writeFileSync(path.join(OUT_DIR, "haus-source-resolution-summary.md"), sumLines.join("\n"));

    fs.writeFileSync(
      path.join(OUT_DIR, "haus-master-source-change-proposals.md"),
      [
        "# MASTER source change proposals (OWNER_APPROVAL_REQUIRED)",
        "",
        ...result.execution.masterProposals.map(
          (p) =>
            `## ${p.language}\n\n- Authority: ${p.currentMasterAuthority}\n- URLs: ${(p.currentMasterUrls || []).join(", ")}\n- Reason: ${p.reason}\n- Action: ${p.proposedAction}\n- Status: **${p.status}**\n`,
        ),
      ].join("\n"),
    );

    const manualHeader = [
      "language",
      "productionCurrent",
      "candidateLookupLemma",
      "masterAuthority",
      "officialUrl",
      "searchHeadword",
      "senseToVerify",
      "technicalBlocker",
      "OWNER_STATUS",
      "OWNER_NEW",
      "OWNER_NOTE",
      "OWNER_EVIDENCE_ACCEPTED",
      "OWNER_REVIEWED_AT",
    ].join(",");
    const manualBody = (result.execution.manualRows || []).map((m) =>
      [
        m.language,
        m.productionCurrent,
        m.candidateLookupLemma,
        m.masterAuthority,
        m.officialUrl,
        m.searchHeadword,
        m.senseToVerify,
        m.technicalBlocker,
        m.OWNER_STATUS,
        m.OWNER_NEW,
        m.OWNER_NOTE,
        m.OWNER_EVIDENCE_ACCEPTED,
        m.OWNER_REVIEWED_AT,
      ]
        .map(csvEscape)
        .join(","),
    );
    fs.writeFileSync(path.join(OUT_DIR, "haus-manual-evidence-required.csv"), [manualHeader, ...manualBody].join("\n"));
  }

  const csvHeader = [
    "language",
    "appCode",
    "cardId",
    "currentTarget",
    "findingType",
    "proposedNew",
    "targetNormativeLemma",
    "targetEntryUrl",
    "OWNER_STATUS",
    "OWNER_NEW",
    "OWNER_NOTE",
    "OWNER_EVIDENCE_ACCEPTED",
    "OWNER_REVIEWED_AT",
  ].join(",");
  const csvBody = result.ownerDecisions.map((r) =>
    [
      r.language,
      r.appCode,
      r.cardId,
      r.currentTarget,
      r.findingType,
      r.proposedNew,
      r.targetNormativeLemma,
      r.targetEntryUrl,
      r.OWNER_STATUS,
      r.OWNER_NEW,
      r.OWNER_NOTE,
      r.OWNER_EVIDENCE_ACCEPTED,
      r.OWNER_REVIEWED_AT,
    ]
      .map(csvEscape)
      .join(","),
  );
  fs.writeFileSync(path.join(OUT_DIR, "haus-owner-decisions.csv"), [csvHeader, ...csvBody].join("\n"));

  fs.writeFileSync(path.join(OUT_DIR, "haus-owner-view.md"), buildOwnerViewMarkdown(result));
  fs.writeFileSync(path.join(OUT_DIR, "haus-needs-source-review.md"), buildNsrMarkdown(result.nsrRows));

  fs.writeFileSync(
    path.join(OUT_DIR, "README.md"),
    [
      "# Haus OWNER review package",
      "",
      "Generated from read-only `haus-32-language-source-pilot` verdicts. No production / DE / Crowdin writes.",
      "",
      "Build: `npm run build:g2-a1:haus-owner-review`",
      "Verify: `npm run verify:g2-a1:haus-owner-review`",
      "",
      "After execution pass, OWNER decisions reflect reverified official evidence only.",
    ].join("\n"),
  );

  return result;
}

module.exports = {
  FIXED_FINDING_IDENTITY,
  OUT_DIR,
  PILOT_DIR,
  buildHausOwnerReviewPackage,
  writeHausOwnerReviewArtifacts,
  assertBaselineCounts,
  assertFindingIdentity,
};
