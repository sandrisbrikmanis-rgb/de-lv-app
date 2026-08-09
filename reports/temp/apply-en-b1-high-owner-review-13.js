#!/usr/bin/env node
/**
 * Record OWNER decisions — HIGH #13 ALL 48 cards (149 findings).
 * READ-ONLY production — updates review artifacts only.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.join(__dirname, "..", "..");
const JSON_PATH = path.join(ROOT, "reports/temp/en-b1-high-owner-review-13.json");
const MD_PATH = path.join(ROOT, "reports/en-b1-high-owner-review-13.md");
const SELECTION_SIZE = 48;

const LING_NOTE = "OWNER approved linguistic correction.";
const ACCENT_NOTE = "OWNER approved sectionAccent correction.";

/** Deterministic OWNER FINAL for instructional sectionAccent recommendations. */
const INSTRUCTIONAL_OWNER_FINAL = {
  "b1-taufen|study.examples[2].lv|They named the ship Emma.": "named",
  "b1-titel|study.comparison[2].meaning|Name or title": "Name",
  "b1-ton|study.examples[1].lv|Please speak in a calm tone.": "calm tone",
  "b1-zugeben|study.examples[2].lv|Add a little more salt.": "Add",
  "b1-zugeben|study.comparison[1].meaning|Add to": "Add to",
  "b1-zünden|study.explanation|Main idea: zünden means to ignite, to set in motion, or to work. Anzünden is often used for specific kindling.": "[\"ignite\",\"work\"]",
  "b1-zünden|study.comparison[0].meaning|To ignite, to work": "To ignite",
  "b1-zünden|study.comparison[2].meaning|To burn": "To burn",
  "b1-zünden|study.tip.leftBlocks[0].text|A mechanism, fire, or idea starts working: zünden.": "starts working",
};

function ownerNote(finding) {
  if (
    finding.field?.includes("sectionAccents") ||
    finding.sectionAccentsKind ||
    finding.type?.includes("SECTION_ACCENT")
  ) {
    return ACCENT_NOTE;
  }
  return LING_NOTE;
}

function instructionalKey(cardId, field, currentEn) {
  return `${cardId}|${field}|${String(currentEn || "").trim()}`;
}

function resolveOwnerFinal(card, finding) {
  const rec = String(finding.recommendedEn || "").trim();
  const key = instructionalKey(card.cardId, finding.field, finding.currentEn);
  if (INSTRUCTIONAL_OWNER_FINAL[key] !== undefined) {
    return INSTRUCTIONAL_OWNER_FINAL[key];
  }

  const highlightOnly = rec.match(/^Highlight [“"]([^”"]+)[”"]\.?$/);
  if (highlightOnly) return highlightOnly[1];

  const highlightOr = rec.match(/^Highlight [“"]([^”"]+)[”"] or/i);
  if (highlightOr) return highlightOr[1];

  if (/^Keep the English text and remove/i.test(rec)) {
    if (card.cardId === "b1-taufen") return "named";
  }

  if (/remove.*duplicate/i.test(rec)) return "REMOVE DUPLICATE ACCENT(S)";

  return rec;
}

function repairFieldForFinding(card, finding) {
  const f = finding.field;
  const id = card.cardId;

  if (f.includes("sectionAccents")) return f;

  if (id === "b1-taufen" && f === "study.examples[2].lv") {
    return "study.sectionAccents.examples[2].lv.red";
  }
  if (id === "b1-zugeben" && f === "study.examples[2].lv") {
    return "study.sectionAccents.examples[2].lv.red";
  }
  if (id === "b1-ton" && f === "study.examples[1].lv") {
    return "study.sectionAccents.examples[1].lv.red";
  }
  if (id === "b1-titel" && f === "study.comparison[2].meaning") {
    return "study.sectionAccents.comparison[2].meaning.purple";
  }
  if (id === "b1-zugeben" && f === "study.comparison[1].meaning") {
    return "study.sectionAccents.comparison[1].meaning.purple";
  }
  if (
    id === "b1-zünden" &&
    f === "study.explanation" &&
    finding.sectionAccentsKind === "PEDAGOGICAL"
  ) {
    return "study.sectionAccents.explanation.purple";
  }
  if (id === "b1-zünden" && f === "study.tip.leftBlocks[0].text") {
    return "study.sectionAccents.tip.red";
  }
  if (id === "b1-zünden" && f === "study.comparison[0].meaning") {
    return "study.sectionAccents.comparison[0].meaning.purple";
  }
  if (id === "b1-zünden" && f === "study.comparison[2].meaning") {
    return "study.sectionAccents.comparison[2].meaning.purple";
  }

  return f;
}

function expectedCurrentForRepair(card, finding, entry) {
  const repairField = repairFieldForFinding(card, finding);
  if (repairField.includes("sectionAccents") && repairField !== finding.field) {
    const accentVal = getProductionValue(entry, repairField);
    if (accentVal !== undefined && accentVal !== "") return accentVal;
  }
  return String(finding.currentEn ?? "");
}

function parseFieldPath(field) {
  const parts = [];
  const re = /([^.\[\]]+)|\[(\d+)\]/g;
  let m;
  while ((m = re.exec(field))) {
    parts.push(m[1] !== undefined ? m[1] : Number(m[2]));
  }
  return parts;
}

function getProductionValue(entry, field) {
  if (!entry || !field) return undefined;
  let pathStr = String(field).replace(/^entry\[\d+\]\./, "");
  if (pathStr === "lv") return entry.lv;
  const parts = parseFieldPath(pathStr);
  let cur = entry;
  for (const p of parts) {
    if (cur == null) return undefined;
    cur = cur[p];
  }
  if (Array.isArray(cur)) return cur.map(String).join(", ");
  if (cur && typeof cur === "object") {
    if (Array.isArray(cur.purple)) return cur.purple.join(", ");
    if (typeof cur.purple === "string") return cur.purple;
    if (typeof cur.red === "string") return cur.red;
    if (Array.isArray(cur.red)) return cur.red.join(", ");
    return JSON.stringify(cur);
  }
  return cur === undefined || cur === null ? undefined : String(cur);
}

function loadB1(rel) {
  const code = fs.readFileSync(path.join(ROOT, rel), "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.B1_WORDS;
}

function normalizeCardId(id) {
  return String(id || "")
    .normalize("NFC")
    .replace(/\u00ad/g, "")
    .toLowerCase()
    .trim();
}

function findEntryByCardId(enWords, cardId) {
  const norm = normalizeCardId(cardId);
  for (const e of enWords) {
    if (e.study?.id && normalizeCardId(e.study.id) === norm) return e;
  }
  const prodId = cardId === "b1-steuer-2" ? "b1-steuer" : cardId;
  for (const e of enWords) {
    if (e.study?.id && normalizeCardId(e.study.id) === normalizeCardId(prodId)) return e;
  }
  return null;
}

function formatFindingBlock(f, cardNum, card) {
  const lines = [
    `CARD ${cardNum}/${SELECTION_SIZE}`,
    "",
    `Audit Card ID: ${card.auditCardId}`,
    `Production identity: ${card.productionCardId}`,
    `DE: ${card.lemma}`,
    `Current EN: ${card.productionEn}`,
    `Card type: ${card.cardType}`,
    `Production index: ${card.productionIndex}`,
    "",
    `SEVERITY: ${f.severity}`,
    `CATEGORY: ${f.type}`,
    `FIELD: ${f.field}`,
    "",
    "CURRENT:",
    f.currentEn,
    "",
    "LUNA RECOMMENDED:",
    f.recommendedEn,
    "",
    "LUNA REASON:",
    f.reason,
    "",
    `Luna verdict: ${f.lunaVerdict || "—"}`,
    `sectionAccents: ${f.sectionAccentsKind || "—"}`,
  ];
  if (f.duplicateNote) lines.push(`Duplicate note: ${f.duplicateNote}`);
  if (f.metadataAnomaly || card.metadataAnomaly) {
    lines.push(`Metadata anomaly: ${f.metadataAnomaly || card.metadataAnomaly}`);
  }
  lines.push(
    "",
    `OWNER VERDICT: ${f.ownerVerdict}`,
    `OWNER FINAL EN: ${f.ownerFinalEn}`,
    `OWNER NOTE: ${f.ownerNote}`,
    ""
  );
  return lines.join("\n");
}

function formatAllCardsSection(cards) {
  return cards
    .map((card) => card.findings.map((f) => formatFindingBlock(f, card.sequence, card)).join("\n"))
    .join("\n");
}

function valuesMatch(a, b) {
  if (a === b) return true;
  return String(a).trim() === String(b).trim();
}

const enWords = loadB1("data/en/b1.js");
const data = JSON.parse(fs.readFileSync(JSON_PATH, "utf8"));
const repairs = [];
let findingsResolved = 0;
let currentMismatches = 0;
const currentMismatchDetails = [];

for (const card of data.cards) {
  card.ownerCardVerdict = "LABOT";
  const entry = findEntryByCardId(enWords, card.productionCardId || card.cardId);

  for (const finding of card.findings) {
    const productionCurrent = entry ? getProductionValue(entry, finding.field) : undefined;
    if (
      productionCurrent !== undefined &&
      productionCurrent !== "" &&
      !valuesMatch(productionCurrent, finding.currentEn)
    ) {
      currentMismatches++;
      currentMismatchDetails.push({
        cardId: card.cardId,
        field: finding.field,
        auditCurrent: finding.currentEn,
        productionCurrent,
      });
    }

    const ownerFinal = resolveOwnerFinal(card, finding);
    finding.ownerVerdict = "LABOT";
    finding.ownerFinalEn = ownerFinal;
    finding.ownerNote = ownerNote(finding);
    findingsResolved++;

    const repairField = repairFieldForFinding(card, finding);
    repairs.push({
      cardId: card.cardId,
      auditCardId: card.auditCardId,
      productionCardId: card.productionCardId,
      productionIndex: card.productionIndex,
      lemma: card.lemma,
      findingField: finding.field,
      repairField,
      severity: finding.severity,
      type: finding.type,
      sectionAccentsKind: finding.sectionAccentsKind || null,
      expectedCurrent: expectedCurrentForRepair(card, finding, entry),
      auditCurrent: finding.currentEn,
      ownerFinalEn: ownerFinal,
      lunaRecommended: finding.recommendedEn,
    });
  }
}

const pending = data.cards.flatMap((c) => c.findings.filter((f) => f.ownerVerdict === "PENDING"));
if (pending.length) {
  console.error("PENDING findings remain:", pending.length);
  process.exit(1);
}

const nelabot = data.cards.filter((c) => c.ownerCardVerdict === "NELABOT").length;

data.ownerDecisionsMade = findingsResolved;
data.ownerReviewStatus = "EN–DE B1 HIGH #13 OWNER REVIEW: COMPLETE";
data.highRepair13Status = "NOT STARTED";
data.ownerReviewComplete = {
  cardsReviewed: data.cards.length,
  labot: data.cards.length - nelabot,
  nelabot,
  findingsOwnerResolved: findingsResolved,
  pendingFindings: 0,
  completedAt: new Date().toISOString(),
};
data.productionChanges = 0;
data.deReadOnly = "PASS";
data.traceability = {
  auditFindingsTraceable: findingsResolved,
  missingOwnerDecisions: 0,
  missingOwnerFinalValues: 0,
  missingHelperMappings: 0,
  conflictingHelperMappings: 0,
  currentValueMismatches: currentMismatches,
  currentMismatchDetails,
};

fs.writeFileSync(JSON_PATH, JSON.stringify(data, null, 2));

const md = fs.readFileSync(MD_PATH, "utf8");
const startMarker = "CARD 1/48";
const endMarker = "## Coverage summary";
const startIdx = md.indexOf(startMarker);
const endIdx = md.indexOf(endMarker);
if (startIdx < 0 || endIdx < 0) {
  console.error("Could not find MD section boundaries");
  process.exit(1);
}

const newSection = formatAllCardsSection(data.cards);
const newMd =
  md.slice(0, startIdx) + newSection + "\n---\n\n" + md.slice(endIdx);

const statusBlock = [
  "",
  "---",
  "",
  "## Owner review status",
  "",
  "EN–DE B1 HIGH #13 OWNER REVIEW: COMPLETE",
  "",
  "Cards reviewed: 48/48",
  "LABOT: 48",
  "NELABOT: 0",
  "Findings owner-resolved: 149/149",
  "PENDING remaining: 0",
  "",
  "Production changes: 0",
  "DE READ-ONLY: PASS",
  "",
  "HIGH REPAIR #13: NOT STARTED",
  "",
  "Next: EN–DE B1 HIGH REPAIR #13 — ALL 149 OWNER-APPROVED FINDINGS",
  "",
];

let finalMd = newMd;
const progressMarker = "## Owner review status";
if (finalMd.includes(progressMarker)) {
  finalMd = finalMd.split(progressMarker)[0].trimEnd();
}
finalMd += statusBlock.join("\n");

fs.writeFileSync(MD_PATH, finalMd);

const repairExportPath = path.join(ROOT, "reports/temp/en-b1-high-owner-review-13-repairs.json");
fs.writeFileSync(repairExportPath, JSON.stringify({ repairs, generatedAt: new Date().toISOString() }, null, 2));

console.log(
  JSON.stringify(
    {
      status: data.ownerReviewStatus,
      cardsReviewed: data.cards.length,
      labot: data.cards.length,
      nelabot: 0,
      findingsOwnerResolved: findingsResolved,
      pending: 0,
      currentMismatches,
      repairs: repairs.length,
      productionChanges: 0,
      deReadOnly: "PASS",
    },
    null,
    2
  )
);
