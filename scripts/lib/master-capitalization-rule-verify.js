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

const FORBIDDEN_ACTIVE_CONTRADICTIONS = [
  {
    id: "de_capital_transfer_allowed",
    pattern: /vācu lietvārda lielais sākumburts.*(?:automātiski )?pārnest/i,
    allowIfAlso: /netiek automātiski pārnests/i,
    doc: "MASTER+APVIENOTS",
  },
  {
    id: "ui_position_caps_lemma",
    pattern: /UI elementa pirmā pozīcija.*(?:oblig|jā|must).*lielo sākumburtu/i,
    doc: "MASTER+APVIENOTS",
  },
  {
    id: "ai_language_authority_capitalization",
    pattern: /AI\/LLM.*(?:ir|as) LANGUAGE AUTHORITY/i,
    doc: "APVIENOTS",
    forbiddenInApvienots: true,
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
  if (norm(current) === norm(authorityLemma)) {
    return { ok: true, reason: "matches_authority_lemma" };
  }
  if (norm(current).toLowerCase() === norm(authorityLemma).toLowerCase()) {
    return {
      ok: false,
      findingType: "CAPITALIZATION_ERROR",
      proposedTarget: authorityLemma,
      reason: "case_mismatch_same_lemma",
    };
  }
  return { ok: false, findingType: "WRONG_TRANSLATION", reason: "lemma_mismatch" };
}

function runCapitalizationRuleTests() {
  const cases = [
    {
      id: "de_haus_en_house_ok",
      input: { fieldKind: "dictionary", current: "house", authorityLemma: "house" },
      expectOk: true,
    },
    {
      id: "de_haus_en_house_cap_finding",
      input: { fieldKind: "dictionary", current: "House", authorityLemma: "house" },
      expectOk: false,
      expectFinding: "CAPITALIZATION_ERROR",
    },
    {
      id: "de_haus_bg_kashta_ok",
      input: { fieldKind: "dictionary", current: "къща", authorityLemma: "къща" },
      expectOk: true,
    },
    {
      id: "de_haus_bg_kashta_cap_finding",
      input: { fieldKind: "dictionary", current: "Къща", authorityLemma: "къща" },
      expectOk: false,
      expectFinding: "CAPITALIZATION_ERROR",
    },
    {
      id: "de_haus_gr_ok",
      input: { fieldKind: "dictionary", current: "σπίτι", authorityLemma: "σπίτι" },
      expectOk: true,
    },
    {
      id: "de_haus_gr_cap_finding",
      input: { fieldKind: "dictionary", current: "Σπίτι", authorityLemma: "σπίτι" },
      expectOk: false,
      expectFinding: "CAPITALIZATION_ERROR",
    },
    {
      id: "sentence_starts_upper_ok",
      input: { fieldKind: "sentence", current: "Das ist ein Haus.", authorityLemma: "haus" },
      expectOk: true,
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
    },
    {
      id: "ui_title_without_authority_nsr",
      input: { fieldKind: "dictionary", current: "Haus", authorityLemma: null },
      expectOk: null,
    },
    {
      id: "all_caps_headword_not_auto_target",
      input: { fieldKind: "dictionary", current: "HAUS", authorityLemma: "haus" },
      expectOk: false,
    },
  ];

  const results = [];
  for (const c of cases) {
    const r = evaluateDictionaryCapitalization(c.input);
    let pass = false;
    if (c.expectOk === true) pass = r.ok === true;
    else if (c.expectOk === false) pass = r.ok === false;
    else pass = r.ok === null;
    if (c.expectFinding) pass = pass && r.findingType === c.expectFinding;
    results.push({ id: c.id, pass, got: r });
  }
  return { pass: results.every((r) => r.pass), results };
}

function scanForbiddenContradictions(masterText, apvText) {
  const active = [];
  for (const rule of FORBIDDEN_ACTIVE_CONTRADICTIONS) {
    const hay = `${masterText}\n${apvText}`;
    if (!rule.pattern.test(hay)) continue;
    if (rule.allowIfAlso && rule.allowIfAlso.test(hay)) continue;
    if (rule.forbiddenInApvienots && !rule.pattern.test(apvText)) continue;
    if (rule.id === "ai_language_authority_capitalization") {
      if (/AI nav:\s*\n\s*\*\*LANGUAGE AUTHORITY\*\*/.test(apvText)) continue;
    }
    active.push(rule.id);
  }
  return active;
}

function verifyMasterCapitalizationRule(options = {}) {
  const root = options.root || ROOT;
  const masterPath = path.join(root, "docs_and_rules/PROJECT_LANGUAGE_MASTER_STANDARD.md");
  const apvPath = path.join(root, "docs_and_rules/MASTER_1.12_LINGVISTISKA_AUDITA_GROZIJUMI_APVIENOTS.md");
  const masterText = fs.readFileSync(masterPath, "utf8");
  const apvText = fs.readFileSync(apvPath, "utf8");

  const blockers = [];
  const missingMaster = REQUIRED_MASTER_SNIPPETS.filter((s) => !masterText.includes(s));
  const missingApv = REQUIRED_APVIENOTS_SNIPPETS.filter((s) => !apvText.includes(s));
  if (missingMaster.length) blockers.push({ code: "MASTER_SNIPPETS", missing: missingMaster });
  if (missingApv.length) blockers.push({ code: "APVIENOTS_SNIPPETS", missing: missingApv });

  const contradictions = scanForbiddenContradictions(masterText, apvText);
  if (contradictions.length) {
    blockers.push({ code: "ACTIVE_CONTRADICTIONS", ids: contradictions });
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
