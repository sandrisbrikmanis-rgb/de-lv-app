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
const {
  CURRENT_PILOT_COUNTS,
  ORIGINAL_PACKAGE_BASELINE,
  FINDING_DECISION_LANG_ORDER,
  buildAuditDecisionRow,
  normalizeRuEvidenceUrl,
  evidenceUrlAcceptable,
  assertCsNotPassWhenCapitalizationMismatch,
  assertCurrentPilotCounts,
  emptyOwnerFields,
  ownerFieldsAreEmpty,
} = require("./haus-owner-audit-separation");
const {
  PREAUTHORIZED_CAP_ROWS,
  LEXICAL_FINDING_LANGS,
  evaluatePreauthorizedRow,
  buildPreauthorizedOwnerFields,
  OWNER_PREAUTHORIZED_CLASS,
} = require("./haus-preauthorized-capitalization");
const {
  OWNER_LEXICAL_APPLY_ROWS,
  LEXICAL_APPLY_CLOSURE_REL,
  evaluateLexicalApplyRow,
  buildLexicalOwnerFields,
  readLexicalClosure,
  isLexicalOwnerLabotRow,
  assertLexicalOwnerRow,
} = require("./haus-owner-lexical-apply");
const { HAUS_DE_SENSE_NOTE } = require("./haus-de-sense");

const PILOT_DIR = path.join(ROOT, "reports/g2-a1-production-current/haus-32-language-source-pilot");
const OUT_DIR = path.join(ROOT, "reports/g2-a1-production-current/haus-owner-review");

/** Inventory control table — not automatic OWNER authorization. */
const FIXED_FINDING_IDENTITY = Object.freeze([
  { language: "en", currentTarget: "House", proposedTarget: "house", findingType: "CAPITALIZATION_ERROR" },
  { language: "da", currentTarget: "Hus", proposedTarget: "hus", findingType: "CAPITALIZATION_ERROR" },
  { language: "tr", currentTarget: "Ev", proposedTarget: "ev", findingType: "CAPITALIZATION_ERROR" },
  { language: "gr", currentTarget: "Σπίτι", proposedTarget: "σπίτι", findingType: "CAPITALIZATION_ERROR" },
  { language: "ru", currentTarget: "Дом", proposedTarget: "дом", findingType: "CAPITALIZATION_ERROR" },
  { language: "cs", currentTarget: "Dům", proposedTarget: "dům", findingType: "CAPITALIZATION_ERROR" },
  { language: "sk", currentTarget: "Domov", proposedTarget: "dom", findingType: "WRONG_TRANSLATION" },
  { language: "nb", currentTarget: "Maya", proposedTarget: "hus", findingType: "WRONG_TRANSLATION" },
  { language: "nn", currentTarget: "Maya", proposedTarget: "hus", findingType: "WRONG_TRANSLATION" },
  { language: "fi", currentTarget: "Maja", proposedTarget: "talo", findingType: "WRONG_TRANSLATION" },
]);

const OWNER_DECISION_LANG_ORDER = FINDING_DECISION_LANG_ORDER;

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
  assertCurrentPilotCounts(counts, blockers);
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
    `TARGET HOUSE / MĀJA sense fragment (excerpt): ${frag}`,
  ];
  if (row.language === "sk") {
    lines.push(
      "CURRENT «Domov» aligns with home/homeland (not `das Haus` house sense); validated entry supports «dom» for DE «das Haus» (māja), not «Domov» (mājas/home).",
    );
  }
  if (row.language === "nb" || row.language === "nn") {
    lines.push(
      "CURRENT «Maya» is unrelated (Mayan language/culture); validated Norwegian entry supports «hus» for DE «das Haus» (māja), not Gebäude or Zuhause.",
    );
  }
  if (row.language === "fi") {
    lines.push(
      "CURRENT «Maja» is a building/cabin sense (namu/mītnes), not the general «talo» (māja) for DE «das Haus».",
    );
  }
  lines.push(`PROPOSED_NEW «${row.proposedTarget}» matches validated TARGET lemma for DE «das Haus» (HOUSE / MĀJA sense).`);
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
  const auditRow = buildAuditDecisionRow(row, deEvidence);
  if (auditRow.error) {
    return { language: row.language, error: auditRow.error };
  }
  const urlOk = evidenceUrlAcceptable(auditRow.AUDIT_EVIDENCE_URL, {
    language: row.language,
    auditProposedNew: auditRow.AUDIT_PROPOSED_NEW,
  });
  const targetEntryUrl = urlOk.ok ? urlOk.url : auditRow.AUDIT_EVIDENCE_URL;
  const evidenceBase = {
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
    targetEntryUrl,
    targetNormativeLemma: authorityLemma,
    targetHeadword: row.targetHeadword,
    targetMeaningFragment: row.targetMeaningFragment,
    targetEvidenceSha256: row.evidenceSha256,
    orthographyStatus: row.orthographyStatus,
    capitalizationStatus: row.capitalizationStatus,
    lemmaStatus: row.lemmaStatus,
    semanticMatchStatus: row.semanticMatchStatus,
    findingType: row.findingType,
    AUDIT_VERDICT: auditRow.AUDIT_VERDICT,
    AUDIT_FINDING_TYPE: auditRow.AUDIT_FINDING_TYPE,
    AUDIT_PROPOSED_NEW: auditRow.AUDIT_PROPOSED_NEW,
    AUDIT_REASON: auditRow.AUDIT_REASON,
    AUDIT_EVIDENCE_URL: targetEntryUrl,
    AUDIT_EVIDENCE_STATUS: auditRow.AUDIT_EVIDENCE_STATUS,
    AUDIT_EVIDENCE_SHA256: auditRow.AUDIT_EVIDENCE_SHA256,
    AUDIT_CHECKED_AT: auditRow.AUDIT_CHECKED_AT,
    rationale: findingRationale(row, deEvidence),
    ...emptyOwnerFields(),
  };
  return mergePreauthorizedOwnerDecision(evidenceBase, row);
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

function mergePreauthorizedOwnerDecision(auditRow, pilotRow) {
  const spec = PREAUTHORIZED_CAP_ROWS.find((s) => s.language === auditRow.language);
  if (!spec || LEXICAL_FINDING_LANGS.includes(auditRow.language)) {
    return auditRow;
  }
  const evaluated = evaluatePreauthorizedRow(spec);
  evaluated.auditCheckedAt = auditRow.AUDIT_CHECKED_AT || pilotRow?.checkedAt;
  const owner = buildPreauthorizedOwnerFields(spec, evaluated);
  if (!evaluated.eligible) {
    return auditRow;
  }
  return { ...auditRow, ...owner };
}

function mergeLexicalOwnerDecision(auditRow, pilotRow) {
  const spec = OWNER_LEXICAL_APPLY_ROWS.find((s) => s.language === auditRow.language);
  if (!spec) return auditRow;
  const evaluated = evaluateLexicalApplyRow(spec, { skipProductionCheck: true });
  evaluated.auditCheckedAt = auditRow.AUDIT_CHECKED_AT || pilotRow?.checkedAt;
  if (!evaluated.eligible) return auditRow;
  const closure = readLexicalClosure();
  const reviewedAt = closure?.ownerReviewedAt || closure?.generatedAt || new Date().toISOString();
  const owner = buildLexicalOwnerFields(spec, evaluated, reviewedAt);
  return { ...auditRow, ...owner };
}

function mergeOwnerAuthorizationFields(auditRow, pilotRow) {
  let row = mergePreauthorizedOwnerDecision(auditRow, pilotRow);
  if (LEXICAL_FINDING_LANGS.includes(row.language)) {
    row = mergeLexicalOwnerDecision(row, pilotRow);
  }
  return row;
}

function buildOwnerDecisionRow(row, deEvidence) {
  const audit = buildAuditDecisionRow(row, deEvidence);
  if (audit.error) return audit;
  const urlOk = evidenceUrlAcceptable(audit.AUDIT_EVIDENCE_URL, {
    language: row.language,
    auditProposedNew: audit.AUDIT_PROPOSED_NEW,
  });
  const merged = {
    ...audit,
    AUDIT_EVIDENCE_URL: urlOk.ok ? urlOk.url : audit.AUDIT_EVIDENCE_URL,
  };
  return mergeOwnerAuthorizationFields(merged, row);
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
    "**6 capitalization FINDING rows:** class-level `OWNER_PREAUTHORIZED_CAPITALIZATION_ONLY`. **4 lexical FINDING rows:** individual OWNER LABOT (sk, nb, nn, fi). **18 NSR** remain open.",
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
    `## ${counts.FINDING || 10} FINDING — audit evidence`,
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
    `# das Haus — NEEDS_SOURCE_REVIEW (${nsrRows.length} languages)`,
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

function buildHausOwnerReviewPackage() {
  const blockers = [];
  const pilot = readPilotArtifacts();
  if (!pilot.ok) {
    return { pass: false, code: pilot.code, blockers: [pilot] };
  }

  const { verdicts, deEvidence: deEvidenceRaw } = pilot;
  const deEvidence = { ...deEvidenceRaw, senseNote: HAUS_DE_SENSE_NOTE };
  const rows = verdicts.rows || [];
  const counts = verdicts.counts || {};
  const lexicalClosure = readLexicalClosure();

  assertBaselineCounts(counts, blockers);
  assertFindingIdentity(rows, blockers);
  assertCsNotPassWhenCapitalizationMismatch(rows, blockers);
  if (blockers.length) {
    return { pass: false, code: blockers[0].code, blockers };
  }

  const structured = loadStructuredLanguageAuthoritySources();
  const order = rows.map((r) => r.language);
  const byLang = new Map(rows.map((r) => [r.language, r]));

  const findingRows = OWNER_DECISION_LANG_ORDER.map((lang) => byLang.get(lang)).filter(Boolean);
  const findings = findingRows.map((r) => buildFindingEvidenceRow(r, deEvidence));
  for (const f of findings) {
    if (f.error) blockers.push({ code: f.error, language: f.language });
    if (f.language === "ru" && f.AUDIT_PROPOSED_NEW && !/\p{Script=Cyrillic}/u.test(f.AUDIT_PROPOSED_NEW)) {
      blockers.push({ code: "RU_LATIN_IN_FINDINGS", language: "ru" });
    }
  }
  if (blockers.length) {
    return { pass: false, code: blockers[0].code, blockers };
  }

  const nsrRows = rows.filter((r) => r.verdict === "NEEDS_SOURCE_REVIEW").map((r) => buildNsrRow(r, structured));
  const passRows = rows.filter((r) => r.verdict === "PASS").map((r) => buildPassEvidenceRow(r, deEvidence));
  const fullCards = findingRows.map((r) => {
    const snap = buildFullCardSnapshot(r, deEvidence);
    const audit = buildAuditDecisionRow(r, deEvidence);
    if (!audit.error) {
      snap.AUDIT_PROPOSED_NEW = audit.AUDIT_PROPOSED_NEW;
      snap.AUDIT_EVIDENCE_URL = audit.AUDIT_EVIDENCE_URL;
    }
    return snap;
  });
  const ownerDecisions = findingRows.map((r) => buildOwnerDecisionRow(r, deEvidence));

  for (const d of ownerDecisions) {
    if (LEXICAL_FINDING_LANGS.includes(d.language)) {
      if (ownerFieldsAreEmpty(d)) {
        blockers.push({ code: "LEXICAL_OWNER_FIELDS_MUST_BE_FILLED", language: d.language });
      } else if (!isLexicalOwnerLabotRow(d)) {
        blockers.push({ code: "LEXICAL_OWNER_ROW_INVALID", language: d.language });
      } else {
        assertLexicalOwnerRow(d, blockers);
      }
    }
    const spec = PREAUTHORIZED_CAP_ROWS.find((s) => s.language === d.language);
    if (spec) {
      const evaluated = evaluatePreauthorizedRow(spec);
      if (!evaluated.eligible) {
        blockers.push({ code: "PREAUTH_ROW_INELIGIBLE", language: d.language, blockers: evaluated.blockers });
      }
      if (d.OWNER_AUTHORIZATION_CLASS !== OWNER_PREAUTHORIZED_CLASS) {
        blockers.push({ code: "PREAUTH_CLASS_MISSING", language: d.language });
      }
    }
  }
  if (blockers.length) {
    return { pass: false, code: blockers[0].code, blockers };
  }

  const preauthLabot = ownerDecisions.filter((d) => d.OWNER_AUTHORIZATION_CLASS === OWNER_PREAUTHORIZED_CLASS).length;
  const lexicalLabot = ownerDecisions.filter((d) => isLexicalOwnerLabotRow(d)).length;
  const ownerDecisionFinal = {
    LABOT: preauthLabot + lexicalLabot,
    NELABOT: 0,
    PENDING: 0,
    NEEDS_SOURCE_REVIEW: 0,
    SOURCE_DE_ISSUE: 0,
    empty: 0,
    OWNER_PREAUTHORIZED_CAPITALIZATION_ONLY: preauthLabot,
    OWNER_INDIVIDUAL_LABOT: lexicalLabot,
    OWNER_PENDING_FINDINGS: 0,
    NSR_REMAINING: nsrRows.length,
  };

  const lexicalProductionApplied = lexicalClosure?.pass === true && lexicalLabot === OWNER_LEXICAL_APPLY_ROWS.length;

  const manifest = {
    generatedAt: new Date().toISOString(),
    sourcePilotDir: "reports/g2-a1-production-current/haus-32-language-source-pilot",
    originalPackageBaseline: ORIGINAL_PACKAGE_BASELINE,
    auditCounts: counts,
    ownerDecisionFinal,
    ownerDecisionsFilled: preauthLabot + lexicalLabot > 0,
    ownerPreauthorization: {
      class: OWNER_PREAUTHORIZED_CLASS,
      capitalizationRows: preauthLabot,
      lexicalRowsOwnerLabot: lexicalLabot,
      lexicalRowsPendingIndividualOwner: 0,
      nsrRemaining: nsrRows.length,
    },
    invalidatedPriorRuns: ["INVALIDATED_UNAUTHORIZED_OWNER_FIELD_POPULATION"],
    priorRunNote:
      "Commit 81a4d7f1 auto-filled OWNER_STATUS/LABOT — void; OWNER fields must be filled only by OWNER.",
    coverage: {
      totalLanguages: 32,
      auditFindingRows: ownerDecisions.length,
      nsrRows: nsrRows.length,
      auditPassRows: passRows.length,
      sum: ownerDecisions.length + nsrRows.length + passRows.length,
    },
    full95731FieldAuditRun: false,
    FULL_LINGUISTIC_AUDITS_EXECUTED: 0,
    productionApply: false,
    lexicalProductionApply: lexicalProductionApplied,
    lexicalProductionApplyClosure: lexicalClosure ? LEXICAL_APPLY_CLOSURE_REL : null,
    classification: lexicalProductionApplied
      ? "G2_A1_HAUS_4_OWNER_LEXICAL_FIXES_APPLIED_AND_VERIFIED"
      : "G2_A1_HAUS_PREAUTHORIZED_CAPITALIZATION_OWNER_PACKAGE",
    nextAction: lexicalProductionApplied
      ? "RESOLVE_18_REMAINING_HAUS_SOURCE_BLOCKERS"
      : "APPLY_OWNER_LEXICAL_FIXES_SK_NB_NN_FI_THEN_RESOLVE_18_NSR",
    languageOrder: order,
  };

  return {
    pass: true,
    counts,
    findings,
    nsrRows,
    passRows,
    fullCards,
    ownerDecisions,
    deEvidence,
    manifest,
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
    note: "AUDIT_* = executor evidence. OWNER_*: 6 cap = OWNER_PREAUTHORIZED_CAPITALIZATION_ONLY; 4 lexical = individual OWNER LABOT.",
    rows: result.ownerDecisions,
  });
  writeJson("haus-owner-review-manifest.json", result.manifest);

  writeJson("haus-audit-evidence-proposals.json", {
    generatedAt: new Date().toISOString(),
    role: "AUDIT_EXECUTOR_EVIDENCE_ONLY",
    invalidatedUnauthorizedOwnerPopulation: true,
    rows: result.ownerDecisions.map((d) => ({
      language: d.language,
      AUDIT_VERDICT: d.AUDIT_VERDICT,
      AUDIT_FINDING_TYPE: d.AUDIT_FINDING_TYPE,
      AUDIT_PROPOSED_NEW: d.AUDIT_PROPOSED_NEW,
      AUDIT_EVIDENCE_URL: d.AUDIT_EVIDENCE_URL,
      AUDIT_EVIDENCE_SHA256: d.AUDIT_EVIDENCE_SHA256,
    })),
  });

  writeJson("haus-source-resolution-summary.json", {
    generatedAt: new Date().toISOString(),
    note: "Audit-only summary; no OWNER decisions.",
    auditCounts: result.counts,
    nsrUnresolved: result.nsrRows.length,
    invalidatedPriorRuns: ["INVALIDATED_UNAUTHORIZED_OWNER_FIELD_POPULATION"],
  });

  const sumLines = [
    "# das Haus — audit evidence summary (not OWNER decisions)",
    "",
    `FINDING rows: **${result.ownerDecisions.length}** · NSR: **${result.nsrRows.length}** · PASS: **${result.passRows.length}**`,
    "",
    "| Lang | CURRENT | AUDIT_PROPOSED_NEW | AUDIT_EVIDENCE_URL |",
    "|------|---------|-------------------|-------------------|",
    ...result.ownerDecisions.map(
      (d) => `| ${d.language} | ${d.currentTarget} | ${d.AUDIT_PROPOSED_NEW} | ${d.AUDIT_EVIDENCE_URL} |`,
    ),
  ];
  fs.writeFileSync(path.join(OUT_DIR, "haus-source-resolution-summary.md"), sumLines.join("\n"));

  fs.writeFileSync(
    path.join(OUT_DIR, "haus-master-source-change-proposals.md"),
    [
      "# MASTER source change proposals (OWNER_APPROVAL_REQUIRED)",
      "",
      "Languages: bs, sq, sr, mk — no verified automated entry adapter on current MASTER URLs.",
      "",
      "Status: **OWNER_APPROVAL_REQUIRED** — not authorized in this audit pass.",
    ].join("\n"),
  );

  const manualHeader = [
    "language",
    "productionCurrent",
    "candidateLookupLemma",
    "masterAuthority",
    "officialUrl",
    "technicalBlocker",
    "OWNER_STATUS",
    "OWNER_NEW",
  ].join(",");
  const manualBody = result.nsrRows.map((n) =>
    [n.language, n.current, "", n.masterAuthority, n.attemptedEntryUrl || n.masterSourceUrl, n.technicalBlocker, "", ""]
      .map(csvEscape)
      .join(","),
  );
  fs.writeFileSync(path.join(OUT_DIR, "haus-manual-evidence-required.csv"), [manualHeader, ...manualBody].join("\n"));

  const csvHeader = [
    "language",
    "appCode",
    "cardId",
    "fieldPath",
    "currentTarget",
    "AUDIT_VERDICT",
    "AUDIT_FINDING_TYPE",
    "AUDIT_PROPOSED_NEW",
    "AUDIT_EVIDENCE_URL",
    "AUDIT_EVIDENCE_SHA256",
    "AUDIT_EVIDENCE_STATUS",
    "AUDIT_CHECKED_AT",
    "OWNER_AUTHORIZATION_CLASS",
    "APPLY_STATUS",
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
      r.fieldPath,
      r.currentTarget,
      r.AUDIT_VERDICT,
      r.AUDIT_FINDING_TYPE,
      r.AUDIT_PROPOSED_NEW,
      r.AUDIT_EVIDENCE_URL,
      r.AUDIT_EVIDENCE_SHA256,
      r.AUDIT_EVIDENCE_STATUS,
      r.AUDIT_CHECKED_AT,
      r.OWNER_AUTHORIZATION_CLASS,
      r.APPLY_STATUS,
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
      "AUDIT_* from pilot. Six cap rows carry OWNER_PREAUTHORIZED_CAPITALIZATION_ONLY; sk/nb/nn/fi OWNER_* empty.",
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
  CURRENT_PILOT_COUNTS,
  FINDING_DECISION_LANG_ORDER,
};
