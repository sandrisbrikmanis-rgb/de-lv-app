#!/usr/bin/env node
/**
 * Record OWNER decisions — HIGH #12 block 4/5 (cards/audit entries 31–40).
 * READ-ONLY production — updates review artifacts only.
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..", "..");
const JSON_PATH = path.join(ROOT, "reports/temp/en-b1-high-owner-review-12.json");
const MD_PATH = path.join(ROOT, "reports/en-b1-high-owner-review-12.md");
const BLOCK_SIZE = 50;
const EXPECTED_FINDINGS_BLOCK4 = 47;

const LING_NOTE = "OWNER approved linguistic correction.";
const ACCENT_NOTE = "OWNER approved sectionAccent correction.";

/** cardId -> decisions */
const DECISIONS = {
  "b1-los": [
    {
      field: "study.explanation",
      ownerFinalEn:
        "Main idea: das Los is a lottery ticket or lot that is drawn or bought.",
    },
    {
      field: "study.examples[1].lv",
      ownerFinalEn: "She won with this ticket.",
    },
    {
      field: "study.comparison[1].meaning",
      ownerFinalEn: "Winnings / prize",
    },
    {
      field: "study.sectionAccents.comparison[0].meaning.purple",
      ownerFinalEn: "lot",
    },
    {
      field: "study.sectionAccents.comparison[1].meaning.purple",
      ownerFinalEn: "winnings / prize",
    },
    {
      field: "study.sectionAccents.comparison[2].meaning.purple",
      ownerFinalEn: "fate",
    },
  ],
  "b1-macht": [
    {
      field: "study.tip",
      ownerFinalEn:
        "In politics and when talking about influence, think of die Macht, not die Kraft.",
    },
    {
      field: "study.important",
      ownerFinalEn: "die Kraft is the physical force or energy of the body.",
    },
  ],
  "b1-maß": [
    {
      field: "study.translation",
      ownerFinalEn: "Measure",
    },
    {
      field: "study.tip",
      ownerFinalEn:
        "In the singular, Maß means a measure; in the plural, Maße often means dimensions.",
    },
    {
      field: "study.sectionAccents.comparison[0].meaning.purple",
      ownerFinalEn: "measure",
    },
    {
      field: "study.sectionAccents.comparison[2].meaning.purple",
      ownerFinalEn: "action / measure",
    },
  ],
  "b1-nachdem": [
    {
      field: "study.translation",
      ownerFinalEn: "After",
    },
    {
      field: "study.explanation",
      ownerFinalEn:
        "Main idea: nachdem introduces a subordinate clause and means after. In German, the verb in this subordinate clause comes at the end.",
    },
    {
      field: "study.examples[0].lv",
      ownerFinalEn: "After I had eaten, I went to sleep.",
    },
    {
      field: "study.examples[1].lv",
      ownerFinalEn: "After the course was over, we went home.",
    },
    {
      field: "study.comparison[0].meaning",
      ownerFinalEn: "After",
    },
    {
      field: "study.sectionAccents.comparison[2].meaning.purple",
      ownerFinalEn: "Before",
    },
    {
      field: "study.sectionAccents.important.purple[0]",
      ownerFinalEn: "had eaten",
    },
  ],
  "b1-nachfrage": [
    {
      field: "study.explanation",
      ownerFinalEn:
        "Main idea: die Nachfrage in economics means the demand for goods or services. In correspondence, it can also mean an inquiry or an additional question.",
    },
    {
      field: "study.tip",
      ownerFinalEn: "In the market, Nachfrage is the opposite of Angebot.",
    },
    {
      field: "study.important",
      ownerFinalEn:
        "die Nachfrage is not an ordinary question. Die Frage is used for a simple question.",
    },
  ],
  "b1-neigen": [
    {
      field: "study.translation",
      ownerFinalEn: "To be inclined; to lean",
    },
    {
      field: "study.explanation",
      ownerFinalEn: "Physically, it can also mean tilting the head or an object.",
    },
    {
      field: "study.tip",
      ownerFinalEn: "neigen zu + what case?: an inclination towards something.",
    },
    {
      field: "study.important",
      ownerFinalEn:
        "neigen is not sich nähern. neigen shows an inclination or a slope, while sich nähern means to approach.",
    },
    {
      field: "study.sectionAccents.comparison[0].meaning.purple",
      ownerFinalEn: "inclination",
    },
    {
      field: "study.sectionAccents.comparison[1].meaning.purple",
      ownerFinalEn: "approach",
    },
    {
      field: "study.sectionAccents.tip.purple[0]",
      ownerFinalEn: "inclination",
    },
  ],
  "b1-neigung": [
    {
      field: "study.examples[1].lv",
      ownerFinalEn: "Her tendency to take risks is well known.",
    },
    {
      field: "study.examples[2].lv",
      ownerFinalEn: "The roof has a steep slope.",
    },
    {
      field: "study.comparison[0].meaning",
      ownerFinalEn: "Tendency, inclination • Slope",
    },
    {
      field: "study.important",
      ownerFinalEn:
        "die Neigung is not simply interest. Neigung more often shows a persistent tendency or a slope.",
    },
    {
      field: "study.sectionAccents.comparison[0].meaning.purple",
      ownerFinalEn: "tendency",
    },
  ],
  "b1-nerven": [
    {
      field: "study.explanation",
      ownerFinalEn:
        "Main idea: nerven is a colloquial verb meaning to annoy or get on one's nerves.",
    },
    {
      field: "study.important",
      ownerFinalEn:
        "nerven is colloquial. In a more formal situation, stören is often safer.",
    },
    {
      field: "study.sectionAccents.comparison[2].meaning.purple",
      ownerFinalEn: "to anger",
    },
  ],
  "b1-nüchtern": [
    {
      field: "study.explanation",
      ownerFinalEn: "Main idea: nüchtern means not intoxicated or clear-headed.",
    },
    {
      field: "study.examples[2].lv",
      ownerFinalEn: "She assesses the situation matter-of-factly.",
    },
    {
      field: "study.tip",
      ownerFinalEn:
        "Alcohol, a medical examination, or a clear-headed view: nüchtern.",
    },
  ],
  "b1-objekt": [
    {
      field: "study.explanation",
      ownerFinalEn: "In grammar, Objekt means object.",
    },
    {
      field: "study.examples[2].lv",
      ownerFinalEn: "In a sentence it is an object.",
    },
    {
      field: "study.comparison[0].meaning",
      ownerFinalEn: "Object • Object in grammar",
    },
    {
      field: "study.comparison[1].meaning",
      ownerFinalEn: "Object or item",
    },
    {
      field: "study.important",
      ownerFinalEn:
        "In everyday life, an object can also be a building or a target being observed; in grammar it is an object.",
    },
    {
      field: "study.sectionAccents.examples[2].lv.red",
      ownerFinalEn: "object",
    },
    {
      field: "study.sectionAccents.important.red",
      ownerFinalEn: "object",
    },
  ],
};

const ASSOCIATED_REPAIRS = {
  "b1-maß": {
    field: "lv",
    currentEn: "Mayor",
    ownerFinalEn: "Measure",
    ownerNote: "Front translation un study.translation nedrīkst konfliktēt.",
  },
  "b1-nachdem": {
    field: "lv",
    currentEn: "After when",
    ownerFinalEn: "After",
    ownerNote: "Front translation un study.translation nedrīkst konfliktēt.",
  },
  "b1-neigen": {
    field: "lv",
    currentEn: "To strive",
    ownerFinalEn: "To be inclined; to lean",
    ownerNote: "Front translation un study.translation nedrīkst konfliktēt.",
  },
};

function findFinding(card, decision) {
  const matches = card.findings.filter((f) => f.field === decision.field);
  if (matches.length !== 1) {
    throw new Error(
      `PRECONDITION MISMATCH: ${card.cardId} field=${decision.field} found=${matches.length}`,
    );
  }
  return matches[0];
}

function ownerNote(finding) {
  if (
    finding.field?.includes("sectionAccents") ||
    finding.sectionAccentsKind ||
    finding.type?.includes("section-accent") ||
    finding.type?.includes("SECTION_ACCENT")
  ) {
    return ACCENT_NOTE;
  }
  return LING_NOTE;
}

function ownerFinalDisplay(value) {
  if (Array.isArray(value)) return value.join(",");
  return value;
}

function formatFindingBlock(f, cardNum, card) {
  const lines = [
    `CARD ${cardNum}/${BLOCK_SIZE}`,
    "",
    `Audit Card ID: ${card.auditCardId}`,
    `Production identity: ${card.productionCardId}`,
    `DE: ${card.lemma}`,
    `Current EN: ${card.productionEn}`,
    `Card type: ${card.cardType}`,
    `Production index: ${card.productionIndex}`,
  ];
  if (card.kundeSharedProductionIdentity) {
    lines.push("KUNDE SHARED PRODUCTION IDENTITY: YES");
  }
  if (card.auditAliasNote) {
    lines.push(`Audit alias note: ${card.auditAliasNote}`);
  }
  lines.push(
    "",
    `SEVERITY: ${f.severity}`,
    `CATEGORY: ${f.type}`,
    `FIELD: ${f.field}`,
    "",
    "CURRENT:",
    ownerFinalDisplay(f.currentEn),
    "",
    "LUNA RECOMMENDED:",
    ownerFinalDisplay(f.recommendedEn),
    "",
    "LUNA REASON:",
    f.reason,
    "",
    `Luna verdict: ${f.lunaVerdict || "—"}`,
    `sectionAccents: ${f.sectionAccentsKind || "—"}`,
  );
  if (f.duplicateNote) lines.push(`Duplicate note: ${f.duplicateNote}`);
  if (f.metadataAnomaly) lines.push(`Metadata anomaly: ${f.metadataAnomaly}`);
  lines.push(
    "",
    `OWNER VERDICT: ${f.ownerVerdict}`,
    `OWNER FINAL EN: ${ownerFinalDisplay(f.ownerFinalEn)}`,
    `OWNER NOTE: ${f.ownerNote}`,
    "",
  );
  return lines.join("\n");
}

function formatCardSection(card) {
  const parts = [];
  if (card.ownerAssociatedRepairs?.length) {
    for (const ar of card.ownerAssociatedRepairs) {
      parts.push(
        `ASSOCIATED TOP-LEVEL OWNER DECISION — field ${ar.field}: ${ar.currentEn} → ${ar.ownerFinalEn}`,
        `Associated repair note: ${ar.ownerNote}`,
        "",
      );
    }
  }
  parts.push(...card.findings.map((f) => formatFindingBlock(f, card.sequence, card)));
  return parts.join("\n");
}

function snapshotCards(cards) {
  return cards.map((c) => ({
    cardId: c.cardId,
    ownerCardVerdict: c.ownerCardVerdict,
    ownerAssociatedRepairs: c.ownerAssociatedRepairs,
    findings: c.findings.map((f) => ({
      field: f.field,
      ownerVerdict: f.ownerVerdict,
      ownerFinalEn: f.ownerFinalEn,
      ownerNote: f.ownerNote,
    })),
  }));
}

function assertSnapshotUnchanged(data, snapshot) {
  for (const snap of snapshot) {
    const card = data.cards.find((c) => c.cardId === snap.cardId);
    if (!card || card.ownerCardVerdict !== snap.ownerCardVerdict) {
      throw new Error(`Prior block card changed: ${snap.cardId}`);
    }
    for (let i = 0; i < snap.findings.length; i++) {
      const f = card.findings[i];
      const s = snap.findings[i];
      const finalMatch =
        Array.isArray(f.ownerFinalEn) && Array.isArray(s.ownerFinalEn)
          ? JSON.stringify(f.ownerFinalEn) === JSON.stringify(s.ownerFinalEn)
          : f.ownerFinalEn === s.ownerFinalEn;
      if (
        f.field !== s.field ||
        f.ownerVerdict !== s.ownerVerdict ||
        !finalMatch ||
        f.ownerNote !== s.ownerNote
      ) {
        throw new Error(`Prior block finding changed: ${snap.cardId} ${s.field}`);
      }
    }
  }
}

const data = JSON.parse(fs.readFileSync(JSON_PATH, "utf8"));

const priorCards = data.cards.filter((c) => c.sequence <= 30);
const priorSnapshot = snapshotCards(priorCards);

let findingsResolvedBlock4 = 0;

for (const card of data.cards) {
  if (card.sequence < 31 || card.sequence > 40) continue;

  const decisions = DECISIONS[card.cardId];
  if (!decisions) {
    throw new Error(`Missing decisions for ${card.cardId}`);
  }
  if (card.findings.length !== decisions.length) {
    throw new Error(
      `PRECONDITION MISMATCH: ${card.cardId} expected ${decisions.length} decisions, has ${card.findings.length} findings`,
    );
  }

  card.ownerCardVerdict = "LABOT";

  const assoc = ASSOCIATED_REPAIRS[card.cardId];
  if (assoc) {
    card.ownerAssociatedRepairs = [assoc];
  }

  for (const d of decisions) {
    const f = findFinding(card, d);
    f.ownerVerdict = "LABOT";
    f.ownerFinalEn = d.ownerFinalEn;
    f.ownerNote = ownerNote(f);
    findingsResolvedBlock4++;
  }
}

if (findingsResolvedBlock4 !== EXPECTED_FINDINGS_BLOCK4) {
  console.error("Finding count mismatch", findingsResolvedBlock4, EXPECTED_FINDINGS_BLOCK4);
  process.exit(1);
}

const block4Cards = data.cards.filter((c) => c.sequence >= 31 && c.sequence <= 40);
const pendingBlock4 = block4Cards.flatMap((c) =>
  c.findings.filter((f) => f.ownerVerdict === "PENDING"),
);
if (pendingBlock4.length) {
  console.error("PENDING remaining in block 4:", pendingBlock4.length);
  process.exit(1);
}

assertSnapshotUnchanged(data, priorSnapshot);

const cards41Changed = data.cards
  .filter((c) => c.sequence > 40)
  .flatMap((c) => c.findings.filter((f) => f.ownerVerdict !== "PENDING"));
if (cards41Changed.length) {
  console.error("Cards 41–50 unexpectedly changed:", cards41Changed.length);
  process.exit(1);
}

const priorFindingsResolved = priorCards.reduce((n, c) => n + c.findings.length, 0);
const cumulativeFindings = priorFindingsResolved + findingsResolvedBlock4;

if (!data.ownerReviewBlock3) {
  throw new Error("Missing ownerReviewBlock3");
}

data.ownerReviewBlock4 = {
  block: "4/5",
  cardsReviewed: 10,
  labot: 10,
  nelabot: 0,
  findingsOwnerResolved: findingsResolvedBlock4,
  pendingInBlock4: 0,
  associatedTopLevelRepairs: [
    { cardId: "b1-maß", field: "lv", from: "Mayor", to: "Measure" },
    { cardId: "b1-nachdem", field: "lv", from: "After when", to: "After" },
    {
      cardId: "b1-neigen",
      field: "lv",
      from: "To strive",
      to: "To be inclined; to lean",
    },
  ],
  cumulativeCardsReviewed: 40,
  cumulativeLabot: 40,
  cumulativeNelabot: 0,
  cumulativeFindingsOwnerResolved: cumulativeFindings,
  completedAt: new Date().toISOString(),
};

data.ownerDecisionsMade = cumulativeFindings;
data.ownerReviewStatus = "EN–DE B1 HIGH #12 OWNER REVIEW — BLOCK 4/5 COMPLETE";

fs.writeFileSync(JSON_PATH, JSON.stringify(data, null, 2));

const md = fs.readFileSync(MD_PATH, "utf8");
const startMarker = "CARD 31/50";
const endMarker = "CARD 41/50";
const startIdx = md.indexOf(startMarker);
const endIdx = md.indexOf(endMarker);
if (startIdx < 0 || endIdx < 0) {
  console.error("Could not find MD section boundaries");
  process.exit(1);
}

const newSection = block4Cards.map((c) => formatCardSection(c)).join("\n");
const newMd = md.slice(0, startIdx) + newSection + "\n" + md.slice(endIdx);

const statusBlock = [
  "",
  "---",
  "",
  "## Owner review progress",
  "",
  "EN–DE B1 HIGH #12 OWNER REVIEW — BLOCK 4/5 COMPLETE",
  "",
  "Cards/audit entries reviewed (block 4): 10/10",
  "LABOT: 10",
  "NELABOT: 0",
  "Findings owner-resolved (block 4): 47",
  "PENDING remaining cards 31–40: 0",
  "",
  "Cumulative cards/audit entries reviewed: 40/50",
  "Cumulative LABOT: 40",
  "Cumulative NELABOT: 0",
  "Cumulative findings owner-resolved: 140",
  "",
  "Associated top-level repairs recorded:",
  "- Hupe — Horn • Horn → Horn",
  "- knapp — Needy → Barely enough",
  "- Maß — Mayor → Measure",
  "- nachdem — After when → After",
  "- neigen — To strive → To be inclined; to lean",
  "",
  "Kunde metadata:",
  "Audit IDs: b1-kunde-2 + b1-kunde",
  "Production identity: b1-kunde-2",
  "Production index: 1660",
  "Shared production identity: YES",
  "Expected unique production cards (cards 19–20): 1",
  "",
  "Production changes: 0",
  "DE READ-ONLY: PASS",
  "",
  "Next: HIGH #12 OWNER REVIEW — BLOCK 5/5 (cards 41–50)",
  "HIGH REPAIR #12 not started.",
  "",
];

let finalMd = newMd;
const progressMarker = "## Owner review progress";
if (finalMd.includes(progressMarker)) {
  finalMd = finalMd.split(progressMarker)[0].trimEnd();
}
finalMd += statusBlock.join("\n");

fs.writeFileSync(MD_PATH, finalMd);

console.log(
  JSON.stringify(
    {
      status: data.ownerReviewStatus,
      cardsReviewed: 10,
      labot: 10,
      nelabot: 0,
      findingsOwnerResolved: findingsResolvedBlock4,
      pendingInBlock4: 0,
      cumulativeCardsReviewed: 40,
      cumulativeFindingsOwnerResolved: cumulativeFindings,
      productionChanges: 0,
      deReadOnly: "PASS",
    },
    null,
    2,
  ),
);
