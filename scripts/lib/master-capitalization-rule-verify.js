#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { ROOT } = require("./master-premerge-verify-core");
const { verifyEmbeddedLanguageRegistry } = require("./official-language-sources-registry");
const { stripQuotes, firstToken } = require("./g2-a1-production-current/source-adapters/lookup-normalization");

const REQUIRED_MASTER_SNIPPETS = [
  "## 7.158. Mērķvalodas pamatforma, ortogrāfija un kapitalizācija",
  "vācu lietvārda lielais sākumburts **netiek automātiski pārnests** uz TARGET",
  "kartītes/saraksta/tabulas/UI pirmā pozīcija **nav** pamatojums lemma",
  "AI/LLM **nav** valodas autoritāte kapitalizācijai",
  "`PASS` bez DE **un** TARGET evidence ir aizliegts",
  "kirilica, grieķu",
  "ALL CAPS headword",
  "OWNER iepriekš autorizēta kapitalizācija",
  "OWNER_PREAUTHORIZED_CAPITALIZATION_ONLY",
  "Šāda korekcija ir deterministiska",
  "ortogrāfiska normalizācija",
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
  "20.2.1. OWNER iepriekš autorizēta sākumburta normalizācija",
  "OWNER_PREAUTHORIZED_CAPITALIZATION_ONLY",
];

function normCompare(a, b) {
  return stripQuotes(a).normalize("NFC").trim().localeCompare(stripQuotes(b).normalize("NFC").trim(), undefined, {
    sensitivity: "accent",
  });
}

/** Normative dictionary lemma from TARGET entry evidence (shared by Haus pilot + verifier). */
function extractNormativeLemma(headword, fragment) {
  const hw = firstToken(stripQuotes(headword || ""));
  const frag = String(fragment || "");
  if (!hw) return null;

  const madde = frag.match(/"madde"\s*:\s*"([^"\\]+)"/);
  if (madde && madde[1]) {
    return madde[1].normalize("NFC").trim();
  }

  const ruLemma = frag.match(/\n([а-яёА-ЯЁ]+),\s*-/);
  if (ruLemma && normCompare(ruLemma[1], hw) === 0) {
    return ruLemma[1].normalize("NFC").trim();
  }
  if (/^[а-яё]+,\s*-/im.test(frag)) {
    const m = frag.match(/^([а-яё]+),\s*-/im);
    if (m && normCompare(m[1], hw) === 0) return m[1].normalize("NFC").trim();
  }

  const grLemma = frag.match(/\b(σπίτι)\b/i);
  if (grLemma && normCompare(grLemma[1], hw) === 0) {
    return grLemma[1].normalize("NFC").trim();
  }

  const scanLower = frag.match(new RegExp(`\\b(${hw.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})\\b`, "iu"));
  if (scanLower && scanLower[1] && scanLower[1] === scanLower[1].toLowerCase() && scanLower[1] !== hw) {
    return scanLower[1].normalize("NFC").trim();
  }

  const husLine = frag.match(/\n(hus)\s+sb\./i);
  if (husLine && normCompare(husLine[1], hw) === 0) {
    return husLine[1].normalize("NFC").trim();
  }

  if (hw === hw.toUpperCase() && hw.length > 1) {
    return hw.toLowerCase().normalize("NFC").trim();
  }

  if (
    hw[0] === hw[0].toUpperCase() &&
    hw.slice(1) === hw.slice(1).toLowerCase() &&
    !/^[A-Z]{2,}$/.test(hw)
  ) {
    const lower = hw.toLowerCase().normalize("NFC").trim();
    if (frag.toLowerCase().includes(lower)) return lower;
  }

  return hw.normalize("NFC").trim();
}

/** Split markdown into section-scoped paragraph blocks (line numbers 1-based). */
function splitMarkdownIntoLocalBlocks(document, text) {
  const lines = text.split(/\n/);
  const blocks = [];
  let section = "(preamble)";
  let paraLines = [];
  let paraStart = 1;

  function flush(endBeforeLine) {
    if (!paraLines.length) return;
    const body = paraLines.join("\n").trim();
    if (!body) {
      paraLines = [];
      return;
    }
    blocks.push({
      document,
      section,
      startLine: paraStart,
      endLine: endBeforeLine - 1 > paraStart ? endBeforeLine - 1 : paraStart + paraLines.length - 1,
      text: body,
    });
    paraLines = [];
  }

  for (let i = 0; i < lines.length; i++) {
    const lineNum = i + 1;
    const line = lines[i];
    const heading = line.match(/^(#{1,6})\s+(.+)/);
    if (heading) {
      flush(lineNum);
      section = heading[2].trim();
      continue;
    }
    if (line.trim() === "") {
      flush(lineNum);
      continue;
    }
    if (!paraLines.length) paraStart = lineNum;
    paraLines.push(line);
  }
  flush(lines.length + 1);
  return blocks;
}

function locateMatchInBlock(block, matchedText) {
  const idx = block.text.indexOf(matchedText);
  const prefix = idx >= 0 ? block.text.slice(0, idx) : "";
  const line = block.startLine + (prefix.match(/\n/g) || []).length;
  return {
    line,
    startLine: block.startLine,
    endLine: block.endLine,
    matchedText,
  };
}

const LOCAL_CONTRADICTION_RULES = [
  {
    contradictionId: "de_capital_transfer_to_target",
    detectBad(text) {
      const patterns = [
        /vācu lietvārda lielais sākumburts[\s\S]{0,120}?(?:jā|drīkst|oblig)[\s\S]{0,60}?pārn/i,
        /vācu liel[aā][\s\S]{0,60}?(?:drīkst|jā)[\s\S]{0,40}?automātiski pārn/i,
        /TARGET[\s\S]{0,120}?lielo burtu[\s\S]{0,80}?tikai tāpēc, ka DE/i,
      ];
      for (const p of patterns) {
        const m = text.match(p);
        if (m) return m[0];
      }
      return null;
    },
    suppressInBlock(text) {
      return /netiek automātiski pārnests/i.test(text);
    },
    reason: "Local block allows German noun capitalization transfer to TARGET without same-block ban",
  },
  {
    contradictionId: "ui_position_requires_uppercase_lemma",
    detectBad(text) {
      const patterns = [
        /(?:kartītes|saraksta|tabulas|UI elementa|UI virsraksta)[\s\S]{0,80}?pirmā pozīcija[\s\S]{0,100}?(?:prasa|jā|oblig|must)[\s\S]{0,60}?lielo sākumburtu/i,
        /pirmā pozīcija[\s\S]{0,80}?(?:prasa|jā|oblig)[\s\S]{0,40}?vārdnīcas lemmu ar lielo/i,
      ];
      for (const p of patterns) {
        const m = text.match(p);
        if (m) return m[0];
      }
      return null;
    },
    suppressInBlock(text) {
      return /pirmā pozīcija[\s\S]{0,60}?\*\*nav\*\*|nav pamatojums|nav lingvistisks pamatojums/i.test(text);
    },
    reason: "Local block treats UI/list/card position as requiring uppercase dictionary lemma",
  },
  {
    contradictionId: "ai_is_language_authority",
    detectBad(text) {
      const m = text.match(/AI\/LLM[\s\S]{0,100}?(?:ir|as)[\s\S]{0,30}?\*\*LANGUAGE AUTHORITY\*\*/i);
      return m ? m[0] : null;
    },
    suppressInBlock(text) {
      return /AI nav:[\s\S]{0,50}\*\*LANGUAGE AUTHORITY\*\*|AI\/LLM[\s\S]{0,40}?nedrīkst[\s\S]{0,80}?valodas izjūtas/i.test(text);
    },
    reason: "Local block declares AI/LLM as LANGUAGE AUTHORITY",
  },
  {
    contradictionId: "ai_translation_without_source",
    detectBad(text) {
      const m = text.match(/AI\/LLM[\s\S]{0,80}?(?:drīkst|var)[\s\S]{0,60}?noteikt TARGET tulkojumu[\s\S]{0,40}?bez[\s\S]{0,40}?avot/i);
      return m ? m[0] : null;
    },
    suppressInBlock(text) {
      return /AI\/LLM[\s\S]{0,40}?nedrīkst:[\s\S]{0,200}?izdomāt tulkojumu/i.test(text);
    },
    reason: "Local block allows AI to set TARGET translation without authoritative source",
  },
  {
    contradictionId: "pass_without_de_target_evidence_allowed",
    detectBad(text) {
      const m = text.match(/`PASS`[\s\S]{0,50}?(?:drīkst|atļauts|allowed)[\s\S]{0,50}?bez[\s\S]{0,40}?(?:DE|TARGET)?[\s\S]{0,30}?evidence/i);
      if (m) return m[0];
      const m2 = text.match(/PASS[\s\S]{0,40}?bez[\s\S]{0,30}?TARGET evidence[\s\S]{0,20}?(?:drīkst|pieļauj)/i);
      return m2 ? m2[0] : null;
    },
    suppressInBlock(text) {
      return /PASS[\s\S]{0,40}?bez[\s\S]{0,40}?(?:DE|TARGET)?[\s\S]{0,30}?evidence[\s\S]{0,20}?aizliegts/i.test(text);
    },
    reason: "Local block allows PASS without DE and TARGET evidence",
  },
  {
    contradictionId: "finding_without_target_evidence_allowed",
    detectBad(text) {
      const m = text.match(/(?:FINDING|PROPOSED_NEW|NEW)[\s\S]{0,50}?(?:drīkst|atļauts)[\s\S]{0,50}?bez[\s\S]{0,40}?TARGET evidence/i);
      return m ? m[0] : null;
    },
    suppressInBlock(text) {
      return /FINDING[\s\S]{0,50}?bez[\s\S]{0,30}?TARGET evidence[\s\S]{0,20}?aizliegts/i.test(text);
    },
    reason: "Local block allows FINDING/NEW without TARGET evidence",
  },
  {
    contradictionId: "technical_access_as_linguistic_finding_allowed",
    detectBad(text) {
      const m = text.match(/tehnisk[\s\S]{0,40}?piekļuves[\s\S]{0,60}?(?:drīkst|jā)[\s\S]{0,40}?FINDING/i);
      return m ? m[0] : null;
    },
    suppressInBlock(text) {
      return /tehnisk[\s\S]{0,40}?piekļuves[\s\S]{0,60}?nedrīkst pārvērst par lingvistisku/i.test(text);
    },
    reason: "Local block allows technical access failure to become linguistic FINDING",
  },
];

function scanLocalBlocksForContradictions(blocks) {
  const found = [];
  for (const block of blocks) {
    for (const rule of LOCAL_CONTRADICTION_RULES) {
      const matchedText = rule.detectBad(block.text);
      if (!matchedText) continue;
      if (rule.suppressInBlock(block.text)) continue;
      const loc = locateMatchInBlock(block, matchedText);
      found.push({
        contradictionId: rule.contradictionId,
        document: block.document,
        section: block.section,
        line: loc.line,
        startLine: loc.startLine,
        endLine: loc.endLine,
        matchedText: loc.matchedText,
        reason: rule.reason,
      });
    }
  }
  return found;
}

function scanForbiddenContradictions(masterText, apvText) {
  const masterBlocks = splitMarkdownIntoLocalBlocks("PROJECT_LANGUAGE_MASTER_STANDARD.md", masterText);
  const apvBlocks = splitMarkdownIntoLocalBlocks("MASTER_1.12_LINGVISTISKA_AUDITA_GROZIJUMI_APVIENOTS.md", apvText);
  return scanLocalBlocksForContradictions([...masterBlocks, ...apvBlocks]);
}

function scanSyntheticDocument(document, text) {
  return scanLocalBlocksForContradictions(splitMarkdownIntoLocalBlocks(document, text));
}

/** Dictionary-field capitalization check (shared by Haus pilot + verifier). */
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

function assertContradictionExpectation(found, expect) {
  if (expect.expectPass) {
    return found.length === 0;
  }
  const hit = found.find((f) => {
    if (expect.contradictionId && f.contradictionId !== expect.contradictionId) return false;
    if (expect.document && !f.document.includes(expect.document) && f.document !== expect.document) return false;
    if (expect.sectionContains && !String(f.section).includes(expect.sectionContains)) return false;
    if (expect.matchedTextContains && !String(f.matchedText).includes(expect.matchedTextContains)) return false;
    return true;
  });
  if (!hit) return false;
  if (expect.lineMin && hit.line < expect.lineMin) return false;
  return Boolean(hit.matchedText && hit.reason && hit.contradictionId);
}

function runContradictionScannerTests() {
  const cases = [
    {
      id: "master_two_sections_de_transfer",
      run() {
        const doc = `# Good section
Vācu lietvārda lielais sākumburts netiek automātiski pārnests uz TARGET.

# Bad section
Vācu lietvārda lielais sākumburts jāpārnes uz TARGET.`;
        return scanSyntheticDocument("PROJECT_LANGUAGE_MASTER_STANDARD.md", doc);
      },
      expectPass: false,
      contradictionId: "de_capital_transfer_to_target",
      document: "PROJECT_LANGUAGE_MASTER_STANDARD.md",
      sectionContains: "Bad section",
      matchedTextContains: "jāpārn",
    },
    {
      id: "master_ok_apv_bad",
      run() {
        const master = `# OK
Vācu lietvārda lielais sākumburts netiek automātiski pārnests.`;
        const apv = `# Bad APVIENOTS
Vācu lietvārda lielais sākumburts jāpārnes uz TARGET.`;
        return [
          ...scanSyntheticDocument("PROJECT_LANGUAGE_MASTER_STANDARD.md", master),
          ...scanSyntheticDocument("MASTER_1.12_LINGVISTISKA_AUDITA_GROZIJUMI_APVIENOTS.md", apv),
        ];
      },
      expectPass: false,
      contradictionId: "de_capital_transfer_to_target",
      document: "MASTER_1.12",
      sectionContains: "Bad APVIENOTS",
    },
    {
      id: "master_bad_apv_ok",
      run() {
        const master = `# Bad MASTER
Vācu lietvārda lielais sākumburts jāpārnes uz TARGET.`;
        const apv = `# OK APVIENOTS
Vācu lietvārda lielais sākumburts netiek automātiski pārnests.`;
        return [
          ...scanSyntheticDocument("PROJECT_LANGUAGE_MASTER_STANDARD.md", master),
          ...scanSyntheticDocument("MASTER_1.12_LINGVISTISKA_AUDITA_GROZIJUMI_APVIENOTS.md", apv),
        ];
      },
      expectPass: false,
      contradictionId: "de_capital_transfer_to_target",
      document: "PROJECT_LANGUAGE_MASTER_STANDARD.md",
      sectionContains: "Bad MASTER",
    },
    {
      id: "both_docs_only_ban",
      run() {
        const master = `# A
Vācu lietvārda lielais sākumburts netiek automātiski pārnests.`;
        const apv = `# B
Vācu lietvārda lielais sākumburts netiek automātiski pārnests.`;
        return [
          ...scanSyntheticDocument("PROJECT_LANGUAGE_MASTER_STANDARD.md", master),
          ...scanSyntheticDocument("MASTER_1.12_LINGVISTISKA_AUDITA_GROZIJUMI_APVIENOTS.md", apv),
        ];
      },
      expectPass: true,
    },
    {
      id: "ai_authority_two_sections",
      run() {
        const doc = `# Good AI
AI nav:
**LANGUAGE AUTHORITY**

# Bad AI
AI/LLM ir **LANGUAGE AUTHORITY** visos gadījumos.`;
        return scanSyntheticDocument("MASTER_1.12_LINGVISTISKA_AUDITA_GROZIJUMI_APVIENOTS.md", doc);
      },
      expectPass: false,
      contradictionId: "ai_is_language_authority",
      document: "MASTER_1.12",
      sectionContains: "Bad AI",
    },
    {
      id: "ui_position_requires_caps",
      run() {
        const doc = `# UI rule
Kartītes pirmā pozīcija prasa vārdnīcas lemmu ar lielo sākumburtu.`;
        return scanSyntheticDocument("PROJECT_LANGUAGE_MASTER_STANDARD.md", doc);
      },
      expectPass: false,
      contradictionId: "ui_position_requires_uppercase_lemma",
      matchedTextContains: "pirmā pozīcija",
    },
  ];

  const results = [];
  for (const c of cases) {
    const found = c.run();
    let pass;
    if (c.expectPass) {
      pass = found.length === 0;
    } else {
      pass = assertContradictionExpectation(found, c);
    }
    results.push({ id: c.id, pass, found: found.slice(0, 3) });
  }
  return { pass: results.every((r) => r.pass), results, count: cases.length };
}

function validateContradictionRecords(records) {
  const invalid = [];
  for (const r of records) {
    if (!r.contradictionId || !r.document || !r.section || !r.matchedText || !r.reason) {
      invalid.push({ record: r, code: "INCOMPLETE_CONTRADICTION_RECORD" });
    }
    if (r.line == null && r.startLine == null) {
      invalid.push({ record: r, code: "MISSING_LINE" });
    }
  }
  return invalid;
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

  const contradictionFixtures = runContradictionScannerTests();
  if (!contradictionFixtures.pass) {
    blockers.push({
      code: "CONTRADICTION_SCANNER_FIXTURES",
      results: contradictionFixtures.results.filter((r) => !r.pass),
    });
  }

  const activeContradictions = scanForbiddenContradictions(masterText, apvText);
  const invalidRecords = validateContradictionRecords(activeContradictions);
  if (invalidRecords.length) {
    blockers.push({ code: "INVALID_CONTRADICTION_RECORDS", invalidRecords });
  }
  if (activeContradictions.length) {
    blockers.push({ code: "ACTIVE_CONTRADICTIONS", items: activeContradictions });
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
    CAPITALIZATION_FIXTURE_COUNT: fixtureTests.results.length,
    CONTRADICTION_FIXTURE_COUNT: contradictionFixtures.count,
    CONTRADICTION_FIXTURES_PASSED: contradictionFixtures.pass,
    ACTIVE_CONTRADICTION_COUNT: activeContradictions.length,
    activeContradictions,
    checks: {
      newRuleSection: missingMaster.length === 0 && missingApv.length === 0,
      germanCapitalTransferForbidden: masterText.includes("netiek automātiski pārnests"),
      targetAuthorityRequired: masterText.includes("TARGET evidence ir aizliegts"),
      lemmaSeparateFromSentence: masterText.includes("vārdnīcas lauks un pilns teikums"),
      cyrillicGreekIncluded: masterText.includes("kirilica, grieķu"),
      aiNotLanguageAuthority: masterText.includes("AI/LLM **nav** valodas autoritāte"),
      passFindingEvidenceRequirements: masterText.includes("TARGET evidence ir aizliegts"),
      activeContradictionCount: activeContradictions.length,
      embeddedLanguageCount: embedded.EMBEDDED_LANGUAGE_REGISTRY_COUNT,
      languageAuditPartiallySuperseded: langAuditText.includes("PARTIALLY SUPERSEDED"),
      localBlockScanner: true,
      globalRequiredBanRemoved: true,
    },
    fixtureTests,
    contradictionFixtures,
    embeddedRegistry: embedded,
  };
}

module.exports = {
  verifyMasterCapitalizationRule,
  evaluateDictionaryCapitalization,
  extractNormativeLemma,
  runCapitalizationRuleTests,
  runContradictionScannerTests,
  splitMarkdownIntoLocalBlocks,
  scanForbiddenContradictions,
  scanLocalBlocksForContradictions,
  REQUIRED_MASTER_SNIPPETS,
  REQUIRED_APVIENOTS_SNIPPETS,
};
