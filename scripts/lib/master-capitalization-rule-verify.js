#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { ROOT } = require("./master-premerge-verify-core");
const { verifyEmbeddedLanguageRegistry } = require("./official-language-sources-registry");

const REQUIRED_MASTER_SNIPPETS = [
  "## 7.158. Mērķvalodas pamatforma, ortogrāfija un kapitalizācija",
  "vācu lietvārda lielais sākumburts **netiek automātiski pārnests** uz TARGET",
  "kartītes/saraksta/tabulas/UI pirmā pozīcija **nav** pamatojums lemma",
  "AI/LLM **nav** valodas autoritāte kapitalizācijai",
  "`PASS` bez DE **un** TARGET evidence ir aizliegts",
  "kirilica, grieķu",
  "ALL CAPS headword",
];

const REQUIRED_APVIENOTS_SNIPPETS = [
  "# 20. MĒRĶVALODAS PAMATFORMA, ORTOGRĀFIJA UN KAPITALIZĀCIJA",
  "Vācu lietvārda lielais sākumburts netiek automātiski pārnests",
  "Kartītes, saraksta, tabulas vai UI elementa pirmā pozīcija",
  "AI/LLM nedrīkst noteikt kapitalizāciju",
  "unikālo lingvistisko vienību",
  "`māja`",
  "`house`",
  "`dům`",
  "`къща`",
  "`σπίτι`",
  "`ev`",
  "`PASS` bez DE un TARGET evidence",
];

/** Per-document contradiction rules (no cross-doc allowIfAlso masking). */
const DOCUMENT_CONTRADICTION_RULES = [
  {
    id: "de_capital_transfer_allowed_without_ban",
    scope: "master",
    affirmative: /vācu lietvārda lielais sākumburts[\s\S]{0,160}?(?:drīkst|jā|obligāti)[\s\S]{0,40}?pārnest/i,
    requiredBan: /netiek automātiski pārnests/i,
  },
  {
    id: "de_capital_transfer_allowed_without_ban_apv",
    scope: "apvienots",
    affirmative: /vācu lietvārda lielais sākumburts[\s\S]{0,160}?(?:drīkst|jā|obligāti)[\s\S]{0,40}?pārnest/i,
    requiredBan: /netiek automātiski pārnests/i,
  },
  {
    id: "ui_position_caps_lemma_required",
    scope: "master",
    affirmative: /UI elementa pirmā pozīcija[\s\S]{0,120}?(?:oblig|jā|must)[\s\S]{0,60}?lielo sākumburtu/i,
    requiredBan: null,
  },
  {
    id: "ai_is_language_authority_apv",
    scope: "apvienots",
    affirmative: /AI\/LLM[\s\S]{0,80}?(?:ir|as)\s+\*\*LANGUAGE AUTHORITY\*\*/i,
    requiredBan: /AI nav:[\s\S]{0,40}\*\*LANGUAGE AUTHORITY\*\*/i,
  },
];

/** Dictionary-field capitalization check for tooling tests (not production apply). */
function evaluateDictionaryCapitalization({ fieldKind, current, authorityLemma, isProperNoun }) {
  const kind = fieldKind || "dictionary";
  if (kind === "sentence") {
    return { ok: true, reason: "sentence_field_exempt_from_lemma_rule" };
  }
  if (isProperNoun) {
    return { ok: true, reason: "proper_noun_exception" };
  }
  if (!authorityLemma || !current) {
    return { ok: null, reason: "needs_source_review" };
  }
  const norm = (s) => String(s).normalize("NFC").trim();
  const cur = norm(current);
  const auth = norm(authorityLemma);
  if (cur === auth) {
    return { ok: true, reason: "matches_authority_lemma" };
  }
  if (
    cur.length > 1 &&
    cur === cur.toUpperCase() &&
    auth === auth.toLowerCase() &&
    cur.toLowerCase() === auth.toLowerCase()
  ) {
    return {
      ok: false,
      findingType: "CAPITALIZATION_ERROR",
      proposedTarget: auth,
      reason: "all_caps_ui_headword_not_normative_lemma",
    };
  }
  if (cur.toLowerCase() === auth.toLowerCase()) {
    return {
      ok: false,
      findingType: "CAPITALIZATION_ERROR",
      proposedTarget: auth,
      reason: "case_mismatch_same_lemma",
    };
  }
  return { ok: false, findingType: "WRONG_TRANSLATION", reason: "lemma_mismatch" };
}

function assertCaseExpectations(c, r) {
  let pass = false;
  if (c.expectOk === true) pass = r.ok === true;
  else if (c.expectOk === false) pass = r.ok === false;
  else pass = r.ok === null;
  if (c.expectFinding) pass = pass && r.findingType === c.expectFinding;
  if (c.expectProposedTarget) pass = pass && r.proposedTarget === c.expectProposedTarget;
  if (c.expectReason) pass = pass && r.reason === c.expectReason;
  return pass;
}

function runCapitalizationRuleTests() {
  const cases = [
    {
      id: "de_haus_en_house_ok",
      input: { fieldKind: "dictionary", current: "house", authorityLemma: "house" },
      expectOk: true,
      expectReason: "matches_authority_lemma",
    },
    {
      id: "de_haus_en_house_cap_finding",
      input: { fieldKind: "dictionary", current: "House", authorityLemma: "house" },
      expectOk: false,
      expectFinding: "CAPITALIZATION_ERROR",
      expectProposedTarget: "house",
      expectReason: "case_mismatch_same_lemma",
    },
    {
      id: "de_haus_da_hus_ok",
      input: { fieldKind: "dictionary", current: "hus", authorityLemma: "hus" },
      expectOk: true,
      expectReason: "matches_authority_lemma",
    },
    {
      id: "de_haus_da_hus_cap_finding",
      input: { fieldKind: "dictionary", current: "Hus", authorityLemma: "hus" },
      expectOk: false,
      expectFinding: "CAPITALIZATION_ERROR",
      expectProposedTarget: "hus",
      expectReason: "case_mismatch_same_lemma",
    },
    {
      id: "de_haus_tr_ev_ok",
      input: { fieldKind: "dictionary", current: "ev", authorityLemma: "ev" },
      expectOk: true,
      expectReason: "matches_authority_lemma",
    },
    {
      id: "de_haus_tr_ev_cap_finding",
      input: { fieldKind: "dictionary", current: "Ev", authorityLemma: "ev" },
      expectOk: false,
      expectFinding: "CAPITALIZATION_ERROR",
      expectProposedTarget: "ev",
      expectReason: "case_mismatch_same_lemma",
    },
    {
      id: "de_haus_ru_dom_ok",
      input: { fieldKind: "dictionary", current: "дом", authorityLemma: "дом" },
      expectOk: true,
      expectReason: "matches_authority_lemma",
    },
    {
      id: "de_haus_ru_dom_cap_finding",
      input: { fieldKind: "dictionary", current: "Дом", authorityLemma: "дом" },
      expectOk: false,
      expectFinding: "CAPITALIZATION_ERROR",
      expectProposedTarget: "дом",
      expectReason: "case_mismatch_same_lemma",
    },
    {
      id: "de_haus_bg_kashta_ok",
      input: { fieldKind: "dictionary", current: "къща", authorityLemma: "къща" },
      expectOk: true,
      expectReason: "matches_authority_lemma",
    },
    {
      id: "de_haus_bg_kashta_cap_finding",
      input: { fieldKind: "dictionary", current: "Къща", authorityLemma: "къща" },
      expectOk: false,
      expectFinding: "CAPITALIZATION_ERROR",
      expectProposedTarget: "къща",
      expectReason: "case_mismatch_same_lemma",
    },
    {
      id: "de_haus_gr_ok",
      input: { fieldKind: "dictionary", current: "σπίτι", authorityLemma: "σπίτι" },
      expectOk: true,
      expectReason: "matches_authority_lemma",
    },
    {
      id: "de_haus_gr_cap_finding",
      input: { fieldKind: "dictionary", current: "Σπίτι", authorityLemma: "σπίτι" },
      expectOk: false,
      expectFinding: "CAPITALIZATION_ERROR",
      expectProposedTarget: "σπίτι",
      expectReason: "case_mismatch_same_lemma",
    },
    {
      id: "sentence_starts_upper_ok",
      input: { fieldKind: "sentence", current: "Das ist ein Haus.", authorityLemma: "haus" },
      expectOk: true,
      expectReason: "sentence_field_exempt_from_lemma_rule",
    },
    {
      id: "proper_noun_ok",
      input: {
        fieldKind: "dictionary",
        current: "Berlin",
        authorityLemma: "Berlin",
        isProperNoun: true,
      },
      expectOk: true,
      expectReason: "proper_noun_exception",
    },
    {
      id: "ui_title_without_authority_nsr",
      input: { fieldKind: "dictionary", current: "Haus", authorityLemma: null },
      expectOk: null,
      expectReason: "needs_source_review",
    },
    {
      id: "all_caps_headword_not_auto_target",
      input: { fieldKind: "dictionary", current: "HAUS", authorityLemma: "haus" },
      expectOk: false,
      expectFinding: "CAPITALIZATION_ERROR",
      expectProposedTarget: "haus",
      expectReason: "all_caps_ui_headword_not_normative_lemma",
    },
  ];

  const results = [];
  for (const c of cases) {
    const r = evaluateDictionaryCapitalization(c.input);
    const pass = assertCaseExpectations(c, r);
    results.push({ id: c.id, pass, got: r });
  }
  return { pass: results.every((r) => r.pass), results };
}

function scanForbiddenContradictions(masterText, apvText) {
  const scopes = {
    master: masterText,
    apvienots: apvText,
  };
  const active = [];
  for (const rule of DOCUMENT_CONTRADICTION_RULES) {
    const text = scopes[rule.scope];
    if (!text) continue;
    if (!rule.affirmative.test(text)) continue;
    if (rule.requiredBan && rule.requiredBan.test(text)) continue;
    active.push({ id: rule.id, scope: rule.scope });
  }
  return active;
}

function verifyMasterCapitalizationRule(options = {}) {
  const root = options.root || ROOT;
  const masterPath = path.join(root, "docs_and_rules/PROJECT_LANGUAGE_MASTER_STANDARD.md");
  const apvPath = path.join(root, "docs_and_rules/MASTER_1.12_LINGVISTISKA_AUDITA_GROZIJUMI_APVIENOTS.md");
  const langAuditPath = path.join(root, "docs_and_rules/LANGUAGE_AUDIT_STANDARD.md");
  const masterText = fs.readFileSync(masterPath, "utf8");
  const apvText = fs.readFileSync(apvPath, "utf8");
  const langAuditText = fs.readFileSync(langAuditPath, "utf8");

  const blockers = [];
  const missingMaster = REQUIRED_MASTER_SNIPPETS.filter((s) => !masterText.includes(s));
  const missingApv = REQUIRED_APVIENOTS_SNIPPETS.filter((s) => !apvText.includes(s));
  if (missingMaster.length) blockers.push({ code: "MASTER_SNIPPETS", missing: missingMaster });
  if (missingApv.length) blockers.push({ code: "APVIENOTS_SNIPPETS", missing: missingApv });

  if (
    langAuditText.includes("vēsturisks reference") &&
    /obligāts audita standarts jebkurai jaunai/.test(langAuditText) &&
    !langAuditText.includes("PARTIALLY SUPERSEDED")
  ) {
    blockers.push({ code: "LANGUAGE_AUDIT_BANNER_CONTRADICTION" });
  }

  const contradictions = scanForbiddenContradictions(masterText, apvText);
  if (contradictions.length) {
    blockers.push({ code: "ACTIVE_CONTRADICTIONS", items: contradictions });
  }

  const fixtureTests = runCapitalizationRuleTests();
  if (!fixtureTests.pass) {
    blockers.push({ code: "CAPITALIZATION_FIXTURE_TESTS", results: fixtureTests.results.filter((r) => !r.pass) });
  }

  const embedded = verifyEmbeddedLanguageRegistry(root);
  if (embedded.pass !== true) {
    blockers.push({ code: "EMBEDDED_LANGUAGE_REGISTRY", message: embedded.blockerMessage });
  }

  const versionMatch = masterText.match(/\*\*Versija:\*\* ([\d.]+)/);
  const masterVersion = versionMatch ? versionMatch[1] : "UNKNOWN";

  return {
    pass: blockers.length === 0,
    blockers,
    masterVersion,
    checks: {
      newRuleSection: missingMaster.length === 0 && missingApv.length === 0,
      germanCapitalTransferForbidden: masterText.includes("netiek automātiski pārnests"),
      targetAuthorityRequired: masterText.includes("TARGET evidence ir aizliegts"),
      lemmaSeparateFromSentence: masterText.includes("vārdnīcas lauks un pilns teikums"),
      cyrillicGreekIncluded: masterText.includes("kirilica, grieķu"),
      aiNotLanguageAuthority: masterText.includes("AI/LLM **nav** valodas autoritāte"),
      passFindingEvidenceRequirements: masterText.includes("TARGET evidence ir aizliegts"),
      activeContradictionCount: contradictions.length,
      embeddedLanguageCount: embedded.EMBEDDED_LANGUAGE_REGISTRY_COUNT,
      languageAuditPartiallySuperseded: langAuditText.includes("PARTIALLY SUPERSEDED"),
    },
    fixtureTests,
    embeddedRegistry: embedded,
  };
}

module.exports = {
  verifyMasterCapitalizationRule,
  evaluateDictionaryCapitalization,
  runCapitalizationRuleTests,
  REQUIRED_MASTER_SNIPPETS,
  REQUIRED_APVIENOTS_SNIPPETS,
};
