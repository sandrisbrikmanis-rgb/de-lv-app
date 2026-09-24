#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { ROOT } = require("../audit-common");
const { loadG2Level } = require("../content-crowdin-bridge/roundtrip");
const { productionA1Rel, wwwA1Rel } = require("./paths");
const { evidenceUrlAcceptable } = require("./haus-owner-audit-separation");
const { patchHausLvInFileContent, loadPilotRow } = require("./haus-preauthorized-capitalization");

const OWNER_LEXICAL_CLASS = "OWNER_INDIVIDUAL_LEXICAL_LABOT";
const LEXICAL_APPLY_CLOSURE_REL =
  "reports/g2-a1-production-current/haus-owner-review/haus-owner-lexical-production-apply-closure.json";

const OWNER_LEXICAL_APPLY_ROWS = Object.freeze([
  {
    language: "sk",
    current: "Domov",
    proposed: "dom",
    cardId: "a1-haus-sk-3",
    cardIndex: 3,
    fieldPath: "cards[3].lv",
    ownerNote:
      "OWNER apstiprina: `das Haus` nozīmē “māja”; oficiālajā slovāku avotā atbilstošā lemma ir `dom`. `Domov` neatbilst šīs kartītes konkrētajai vārdnīcas nozīmei.",
  },
  {
    language: "nb",
    current: "Maya",
    proposed: "hus",
    cardId: "a1-haus-nb-3",
    cardIndex: 3,
    fieldPath: "cards[3].lv",
    ownerNote:
      "OWNER apstiprina: `das Haus` nozīmē “māja”; Bokmålsordboka atbilstošā lemma ir `hus`. CURRENT `Maya` nav šīs kartītes norvēģu tulkojums.",
  },
  {
    language: "nn",
    current: "Maya",
    proposed: "hus",
    cardId: "a1-haus-nn-3",
    cardIndex: 3,
    fieldPath: "cards[3].lv",
    ownerNote:
      "OWNER apstiprina: `das Haus` nozīmē “māja”; Nynorskordboka atbilstošā lemma ir `hus`. CURRENT `Maya` nav šīs kartītes nn tulkojums.",
  },
  {
    language: "fi",
    current: "Maja",
    proposed: "talo",
    cardId: "a1-haus-fi-3",
    cardIndex: 3,
    fieldPath: "cards[3].lv",
    ownerNote:
      "OWNER apstiprina: `das Haus` nozīmē “māja”; Kielitoimiston sanakirja atbilstošā vispārīgā lemma ir `talo`. CURRENT `Maja` nav šīs kartītes vispārīgā tulkojums.",
  },
]);

function lexicalClosurePath() {
  return path.join(ROOT, LEXICAL_APPLY_CLOSURE_REL);
}

function lexicalClosureExists() {
  return fs.existsSync(lexicalClosurePath());
}

function readLexicalClosure() {
  if (!lexicalClosureExists()) return null;
  return JSON.parse(fs.readFileSync(lexicalClosurePath(), "utf8"));
}

function expectedLexicalFiles() {
  const files = new Set();
  for (const spec of OWNER_LEXICAL_APPLY_ROWS) {
    files.add(productionA1Rel(spec.language));
    files.add(wwwA1Rel(spec.language));
  }
  return files;
}

function evaluateLexicalApplyRow(spec, options = {}) {
  const skipProductionCheck = options.skipProductionCheck === true;
  const pilot = loadPilotRow(spec.language);
  const blockers = [];
  if (!pilot) blockers.push("MISSING_PILOT_ROW");
  if (pilot && pilot.verdict !== "FINDING") blockers.push("NOT_AUDIT_FINDING");
  if (pilot && pilot.findingType !== "WRONG_TRANSLATION") blockers.push("NOT_LEXICAL_FINDING");
  if (pilot && pilot.currentTarget !== spec.current) blockers.push("CURRENT_MISMATCH");
  if (pilot && pilot.proposedTarget !== spec.proposed) blockers.push("PROPOSED_MISMATCH");
  if (pilot && pilot.sourceAccessStatus !== "SOURCE_ENTRY_VALIDATED") blockers.push("TARGET_NOT_VALIDATED");
  if (pilot && !pilot.evidenceSha256) blockers.push("MISSING_EVIDENCE_SHA256");
  if (pilot && pilot.cardId !== spec.cardId) blockers.push("CARD_ID_MISMATCH");

  let auditEvidenceUrl = pilot?.targetEntryUrl;
  if (pilot) {
    const urlCheck = evidenceUrlAcceptable(pilot.targetEntryUrl, {
      language: spec.language,
      auditProposedNew: spec.proposed,
    });
    if (!urlCheck.ok) blockers.push(urlCheck.code);
    else auditEvidenceUrl = urlCheck.url;
  }

  if (!skipProductionCheck) {
    const cards = loadG2Level(spec.language, "a1");
    const card = cards[spec.cardIndex];
    if (!card || card.de !== "Haus" || card.de_article !== "das") blockers.push("HAUS_CARD_NOT_FOUND");
    if (card && card.lv !== spec.current && card.lv !== spec.proposed) {
      blockers.push("PRODUCTION_CURRENT_MISMATCH");
    } else if (card && card.lv === spec.proposed) {
      /* idempotent */
    } else if (card && card.lv !== spec.current) {
      blockers.push("PRODUCTION_CURRENT_MISMATCH");
    }
  }

  return {
    ...spec,
    productionFile: productionA1Rel(spec.language),
    wwwMirror: wwwA1Rel(spec.language),
    auditEvidenceUrl,
    auditEvidenceSha256: pilot?.evidenceSha256,
    targetAuthority: pilot?.targetAuthority,
    auditCheckedAt: pilot?.checkedAt,
    eligible: blockers.length === 0,
    blockers,
  };
}

function buildLexicalOwnerFields(spec, evaluated, reviewedAt) {
  const ts = reviewedAt || evaluated.auditCheckedAt || new Date().toISOString();
  return {
    OWNER_AUTHORIZATION_CLASS: OWNER_LEXICAL_CLASS,
    APPLY_STATUS: "LABOT",
    OWNER_STATUS: "LABOT",
    OWNER_NEW: spec.proposed,
    OWNER_NOTE: spec.ownerNote,
    OWNER_EVIDENCE_ACCEPTED: "YES",
    OWNER_REVIEWED_AT: ts,
  };
}

function isLexicalOwnerLabotRow(row) {
  return (
    row.OWNER_AUTHORIZATION_CLASS === OWNER_LEXICAL_CLASS &&
    row.OWNER_STATUS === "LABOT" &&
    row.APPLY_STATUS === "LABOT" &&
    row.OWNER_EVIDENCE_ACCEPTED === "YES" &&
    String(row.OWNER_NOTE || "").startsWith("OWNER apstiprina:")
  );
}

function assertLexicalOwnerRow(row, blockers) {
  const spec = OWNER_LEXICAL_APPLY_ROWS.find((s) => s.language === row.language);
  if (!spec) {
    blockers.push({ code: "LEXICAL_UNEXPECTED_LANG", language: row.language });
    return;
  }
  if (row.OWNER_NEW !== spec.proposed) blockers.push({ code: "LEXICAL_OWNER_NEW_MISMATCH", language: row.language });
  if (row.currentTarget !== spec.current) blockers.push({ code: "LEXICAL_CURRENT_MISMATCH", language: row.language });
  if (row.AUDIT_FINDING_TYPE !== "WRONG_TRANSLATION") {
    blockers.push({ code: "LEXICAL_NOT_WRONG_TRANSLATION", language: row.language });
  }
}

module.exports = {
  OWNER_LEXICAL_CLASS,
  OWNER_LEXICAL_APPLY_ROWS,
  LEXICAL_APPLY_CLOSURE_REL,
  lexicalClosurePath,
  lexicalClosureExists,
  readLexicalClosure,
  expectedLexicalFiles,
  evaluateLexicalApplyRow,
  buildLexicalOwnerFields,
  isLexicalOwnerLabotRow,
  assertLexicalOwnerRow,
  patchHausLvInFileContent,
};
