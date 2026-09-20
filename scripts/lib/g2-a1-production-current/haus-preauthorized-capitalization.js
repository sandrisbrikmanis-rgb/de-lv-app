#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { ROOT } = require("../audit-common");
const { loadG2Level } = require("../content-crowdin-bridge/roundtrip");
const { productionA1Rel, wwwA1Rel } = require("./paths");
const { initialCaseOnlyChange } = require("../master-initial-case-only");
const { evidenceUrlAcceptable } = require("./haus-owner-audit-separation");

const OWNER_PREAUTHORIZED_CLASS = "OWNER_PREAUTHORIZED_CAPITALIZATION_ONLY";

const PREAUTHORIZED_CAP_ROWS = Object.freeze([
  { language: "en", current: "House", proposed: "house", cardId: "a1-haus-en-3", cardIndex: 3, fieldPath: "cards[3].lv" },
  { language: "da", current: "Hus", proposed: "hus", cardId: "a1-haus-da-3", cardIndex: 3, fieldPath: "cards[3].lv" },
  { language: "tr", current: "Ev", proposed: "ev", cardId: "a1-haus-tr-3", cardIndex: 3, fieldPath: "cards[3].lv" },
  { language: "gr", current: "Σπίτι", proposed: "σπίτι", cardId: "a1-haus-gr-3", cardIndex: 3, fieldPath: "cards[3].lv" },
  { language: "ru", current: "Дом", proposed: "дом", cardId: "a1-haus-ru-3", cardIndex: 3, fieldPath: "cards[3].lv" },
  { language: "cs", current: "Dům", proposed: "dům", cardId: "a1-haus-cs-3", cardIndex: 3, fieldPath: "cards[3].lv" },
]);

const LEXICAL_FINDING_LANGS = Object.freeze(["sk", "nb", "nn", "fi"]);

const OWNER_NOTE_PREAUTH =
  "OWNER_PREAUTHORIZED_CAPITALIZATION_ONLY: official TARGET headword confirms lowercase dictionary lemma; CURRENT and NEW differ only by initial-letter case; no lexical, semantic, script, grammatical or DE-side change.";

function loadPilotRow(lang) {
  const p = path.join(ROOT, "reports/g2-a1-production-current/haus-32-language-source-pilot/haus-32-language-verdicts.json");
  const rows = JSON.parse(fs.readFileSync(p, "utf8")).rows;
  return rows.find((r) => r.language === lang);
}

function evaluatePreauthorizedRow(spec, options = {}) {
  const skipProductionCheck = options.skipProductionCheck === true;
  const pilot = loadPilotRow(spec.language);
  const blockers = [];
  if (!pilot) blockers.push("MISSING_PILOT_ROW");
  if (pilot && pilot.verdict !== "FINDING") blockers.push("NOT_AUDIT_FINDING");
  if (pilot && pilot.findingType !== "CAPITALIZATION_ERROR") blockers.push("NOT_CAPITALIZATION_FINDING");
  if (pilot && pilot.currentTarget !== spec.current) blockers.push("CURRENT_MISMATCH");
  if (pilot && pilot.proposedTarget !== spec.proposed) blockers.push("PROPOSED_MISMATCH");
  if (pilot && pilot.sourceAccessStatus !== "SOURCE_ENTRY_VALIDATED") blockers.push("TARGET_NOT_VALIDATED");
  if (pilot && !pilot.evidenceSha256) blockers.push("MISSING_EVIDENCE_SHA256");

  const caseCheck = initialCaseOnlyChange(spec.current, spec.proposed, spec.language);
  if (!caseCheck.ok) blockers.push(caseCheck.code);

  if (spec.language === "ru" && spec.proposed !== "дом") blockers.push("RU_NOT_CYRILLIC_DOM");

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
      /* post-apply: NEW already on disk */
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

function buildPreauthorizedOwnerFields(spec, evaluated) {
  if (!evaluated.eligible) {
    return {
      OWNER_AUTHORIZATION_CLASS: "",
      APPLY_STATUS: "",
      OWNER_STATUS: "",
      OWNER_NEW: "",
      OWNER_NOTE: "",
      OWNER_EVIDENCE_ACCEPTED: "",
      OWNER_REVIEWED_AT: "",
    };
  }
  const reviewedAt = evaluated.auditCheckedAt || new Date().toISOString();
  return {
    OWNER_AUTHORIZATION_CLASS: OWNER_PREAUTHORIZED_CLASS,
    APPLY_STATUS: "LABOT",
    OWNER_STATUS: "LABOT",
    OWNER_NEW: spec.proposed,
    OWNER_NOTE: OWNER_NOTE_PREAUTH,
    OWNER_EVIDENCE_ACCEPTED: "YES",
    OWNER_REVIEWED_AT: reviewedAt,
  };
}

function isPreauthorizedCapitalizationOwnerRow(row) {
  return (
    row.OWNER_AUTHORIZATION_CLASS === OWNER_PREAUTHORIZED_CLASS &&
    row.APPLY_STATUS === "LABOT" &&
    row.OWNER_STATUS === "LABOT" &&
    row.OWNER_EVIDENCE_ACCEPTED === "YES" &&
    String(row.OWNER_NOTE || "").startsWith(OWNER_PREAUTHORIZED_CLASS)
  );
}

function assertPreauthorizedOwnerRow(row, blockers) {
  const spec = PREAUTHORIZED_CAP_ROWS.find((s) => s.language === row.language);
  if (!spec) {
    blockers.push({ code: "PREAUTH_UNEXPECTED_LANG", language: row.language });
    return;
  }
  const evaluated = evaluatePreauthorizedRow(spec, { skipProductionCheck: true });
  if (!evaluated.eligible) {
    blockers.push({ code: "PREAUTH_INELIGIBLE_AT_VERIFY", language: row.language, blockers: evaluated.blockers });
  }
  if (row.OWNER_NEW !== spec.proposed) {
    blockers.push({ code: "PREAUTH_OWNER_NEW_MISMATCH", language: row.language });
  }
  if (row.currentTarget !== spec.current) {
    blockers.push({ code: "PREAUTH_CURRENT_MISMATCH", language: row.language });
  }
  if (row.AUDIT_FINDING_TYPE !== "CAPITALIZATION_ERROR") {
    blockers.push({ code: "PREAUTH_NOT_CAP_FINDING", language: row.language });
  }
}

function patchHausLvInFileContent(content, expectedCurrent, newValue, windowAfterHaus = 1200) {
  const marker = '"de": "Haus"';
  const idx = content.indexOf(marker);
  if (idx < 0) return { ok: false, code: "NO_HAUS_MARKER" };
  const slice = content.slice(idx, idx + windowAfterHaus);
  const lvRe = /"lv": "([^"]*)"/;
  const m = slice.match(lvRe);
  if (!m) return { ok: false, code: "NO_LV_IN_BLOCK" };
  if (m[1] !== expectedCurrent) return { ok: false, code: "CURRENT_MISMATCH", got: m[1] };
  const needle = `"lv": "${expectedCurrent.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;
  const pos = content.indexOf(needle, idx);
  if (pos < 0 || pos > idx + windowAfterHaus) return { ok: false, code: "LV_POSITION" };
  const replacement = `"lv": "${newValue.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;
  return {
    ok: true,
    content: content.slice(0, pos) + replacement + content.slice(pos + needle.length),
    before: expectedCurrent,
    after: newValue,
  };
}

module.exports = {
  OWNER_PREAUTHORIZED_CLASS,
  OWNER_NOTE_PREAUTH,
  PREAUTHORIZED_CAP_ROWS,
  LEXICAL_FINDING_LANGS,
  evaluatePreauthorizedRow,
  buildPreauthorizedOwnerFields,
  isPreauthorizedCapitalizationOwnerRow,
  assertPreauthorizedOwnerRow,
  patchHausLvInFileContent,
  loadPilotRow,
};
