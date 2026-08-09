#!/usr/bin/env node
/**
 * Record OWNER decisions — HIGH #12 block 5/5 (cards/audit entries 41–50).
 * READ-ONLY production — updates review artifacts only.
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..", "..");
const JSON_PATH = path.join(ROOT, "reports/temp/en-b1-high-owner-review-12.json");
const MD_PATH = path.join(ROOT, "reports/en-b1-high-owner-review-12.md");
const BLOCK_SIZE = 50;

const LING_NOTE = "OWNER approved linguistic correction.";
const ACCENT_NOTE = "OWNER approved sectionAccent correction.";

/** cardId -> decisions */
const DECISIONS = {
  "b1-opfern": [
    {
      field: "study.comparison[2].meaning",
      ownerFinalEn: "To get involved, to actively help",
    },
    {
      field: "study.sectionAccents.comparison[1].meaning.purple",
      ownerFinalEn: "donate",
    },
    {
      field: "study.sectionAccents.comparison[2].meaning.purple",
      ownerFinalEn: "to get involved",
    },
  ],
  "b1-periode": [
    {
      field: "study.sectionAccents.comparison[0].meaning.purple",
      ownerFinalEn: "period",
    },
    {
      field: "study.sectionAccents.comparison[1].meaning.purple",
      ownerFinalEn: "period of time",
    },
  ],
  "b1-pflegen": [
    {
      field: "study.translation",
      ownerFinalEn: "To take care of; to tend",
    },
    {
      field: "study.explanation",
      ownerFinalEn: "The construction pflegen zu + infinitive means “tend to do”.",
    },
    {
      field: "study.tip",
      ownerFinalEn:
        "Grooming or care is pflegen; caring more broadly is sich kümmern um.",
    },
    {
      field: "study.important",
      ownerFinalEn:
        "pflegen zu + infinitive is a special, slightly more formal construction: “tend to do”.",
    },
    {
      field: "study.sectionAccents.comparison[0].meaning.purple",
      ownerFinalEn: "take care of",
    },
  ],
  "b1-probe": [
    {
      field: "study.translation",
      ownerFinalEn: "Test; sample; rehearsal",
    },
    {
      field: "study.tip",
      ownerFinalEn:
        "In a laboratory, a test, or a concert, die Probe can be used in different senses.",
    },
    {
      field: "study.sectionAccents.comparison[0].meaning.purple",
      ownerFinalEn: "test",
    },
    {
      field: "study.sectionAccents.comparison[2].meaning.purple",
      ownerFinalEn: "sample",
    },
  ],
  "b1-rang": [
    {
      field: "study.explanation",
      ownerFinalEn: "der Rang means rank, level, or place in a hierarchy.",
    },
    {
      field: "study.comparison[0].meaning",
      ownerFinalEn: "Rank, level, place in the hierarchy",
    },
    {
      field: "study.sectionAccents.comparison[0].meaning.purple",
      ownerFinalEn: "rank",
    },
    {
      field: "study.sectionAccents.comparison[1].meaning.purple",
      ownerFinalEn: "row",
    },
    {
      field: "study.sectionAccents.comparison[2].meaning.purple",
      ownerFinalEn: "balcony",
    },
  ],
  "b1-rate": [
    {
      field: "study.translation",
      ownerFinalEn: "Installment",
    },
    {
      field: "study.examples[0].lv",
      ownerFinalEn: "I pay for the car in installments.",
    },
    {
      field: "study.tip",
      ownerFinalEn: "Rate ending in -e often means an installment.",
    },
  ],
  "b1-räumen": [
    {
      field: "study.translation",
      ownerFinalEn: "To clear; to vacate; to move out",
    },
    {
      field: "study.explanation",
      ownerFinalEn:
        "Main idea: räumen means to make a place free: to clear, empty, or move out. aufräumen means to tidy up.",
    },
    {
      field: "study.comparison[0].meaning",
      ownerFinalEn: "To clear, empty, or move out",
    },
    {
      field: "study.comparison[2].meaning",
      ownerFinalEn: "To leave a place",
    },
    {
      field: "study.important",
      ownerFinalEn:
        "räumen does not just mean to tidy up. In everyday language, “to tidy up” is usually aufräumen.",
    },
  ],
  "b1-rausch": [
    {
      field: "study.examples[1].lv",
      ownerFinalEn: "The intoxication slowly wore off.",
    },
    {
      field: "study.examples[2].lv",
      ownerFinalEn: "They experienced a powerful emotional high.",
    },
    {
      field: "study.tip",
      ownerFinalEn:
        "Rausch is a state in which a person is intoxicated or carried away by strong emotions.",
    },
  ],
  "b1-reißen": [
    {
      field: "study.translation",
      ownerFinalEn: "To tear; to rip; to burst",
    },
    {
      field: "study.explanation",
      ownerFinalEn:
        "Main idea: reißen means to tear or be torn. reisen, with s instead of ß, is different and means to travel.",
    },
    {
      field: "study.important",
      ownerFinalEn:
        "Without an object, reißen often means “to break” or “to tear”; with an object, it means “to tear” or “pull away”.",
    },
    {
      field: "study.sectionAccents.important.yellow",
      ownerFinalEn: "object",
    },
  ],
  "b1-richten": [
    {
      field: "study.explanation",
      ownerFinalEn:
        "Main idea: richten means to point or direct something in a certain direction. In a legal context, it can also mean to judge or try a case.",
    },
    {
      field: "study.important",
      ownerFinalEn:
        "richten is not the usual word for “to send”; it often means to direct a glance, question, or attention.",
    },
    {
      field: "study.sectionAccents.important.red",
      ownerFinalEn: "to direct",
    },
  ],
};

const ASSOCIATED_REPAIRS = {
  "b1-pflegen": {
    field: "lv",
    currentEn: "Maintain",
    ownerFinalEn: "To take care of; to tend",
    ownerNote: "Front translation un study.translation nedrīkst konfliktēt.",
  },
  "b1-probe": {
    field: "lv",
    currentEn: "Inspection",
    ownerFinalEn: "Test; sample; rehearsal",
    ownerNote: "Front translation un study.translation nedrīkst konfliktēt.",
  },
  "b1-rate": {
    field: "lv",
    currentEn: "Contribution",
    ownerFinalEn: "Installment",
    ownerNote: "Front translation un study.translation nedrīkst konfliktēt.",
  },
  "b1-räumen": {
    field: "lv",
    currentEn: "Release",
    ownerFinalEn: "To clear; to vacate; to move out",
    ownerNote: "Front translation un study.translation nedrīkst konfliktēt.",
  },
  "b1-reißen": {
    field: "lv",
    currentEn: "Bursting",
    ownerFinalEn: "To tear; to rip; to burst",
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

const priorCards = data.cards.filter((c) => c.sequence <= 40);
const priorSnapshot = snapshotCards(priorCards);

const expectedFindingsBlock5 = data.cards
  .filter((c) => c.sequence >= 41 && c.sequence <= 50)
  .reduce((n, c) => n + c.findings.length, 0);

let findingsResolvedBlock5 = 0;

for (const card of data.cards) {
  if (card.sequence < 41 || card.sequence > 50) continue;

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
    findingsResolvedBlock5++;
  }
}

if (findingsResolvedBlock5 !== expectedFindingsBlock5) {
  console.error(
    "Finding count mismatch",
    findingsResolvedBlock5,
    expectedFindingsBlock5,
  );
  process.exit(1);
}

const block5Cards = data.cards.filter((c) => c.sequence >= 41 && c.sequence <= 50);
const pendingBlock5 = block5Cards.flatMap((c) =>
  c.findings.filter((f) => f.ownerVerdict === "PENDING"),
);
if (pendingBlock5.length) {
  console.error("PENDING remaining in block 5:", pendingBlock5.length);
  process.exit(1);
}

assertSnapshotUnchanged(data, priorSnapshot);

const allPending = data.cards.flatMap((c) =>
  c.findings.filter((f) => f.ownerVerdict === "PENDING"),
);
if (allPending.length) {
  console.error("Cumulative PENDING findings remain:", allPending.length);
  process.exit(1);
}

const priorFindingsResolved = priorCards.reduce((n, c) => n + c.findings.length, 0);
const cumulativeFindings = priorFindingsResolved + findingsResolvedBlock5;

if (!data.ownerReviewBlock4) {
  throw new Error("Missing ownerReviewBlock4");
}

data.ownerReviewBlock5 = {
  block: "5/5",
  cardsReviewed: 10,
  labot: 10,
  nelabot: 0,
  findingsOwnerResolved: findingsResolvedBlock5,
  pendingInBlock5: 0,
  associatedTopLevelRepairs: [
    {
      cardId: "b1-pflegen",
      field: "lv",
      from: "Maintain",
      to: "To take care of; to tend",
    },
    {
      cardId: "b1-probe",
      field: "lv",
      from: "Inspection",
      to: "Test; sample; rehearsal",
    },
    {
      cardId: "b1-rate",
      field: "lv",
      from: "Contribution",
      to: "Installment",
    },
    {
      cardId: "b1-räumen",
      field: "lv",
      from: "Release",
      to: "To clear; to vacate; to move out",
    },
    {
      cardId: "b1-reißen",
      field: "lv",
      from: "Bursting",
      to: "To tear; to rip; to burst",
    },
  ],
  cumulativeCardsReviewed: 50,
  cumulativeLabot: 50,
  cumulativeNelabot: 0,
  cumulativeFindingsOwnerResolved: cumulativeFindings,
  cumulativePending: 0,
  completedAt: new Date().toISOString(),
};

data.ownerDecisionsMade = cumulativeFindings;
data.ownerReviewStatus = "EN–DE B1 HIGH #12 OWNER REVIEW: COMPLETE";
data.highRepair12Status = "READY / NOT STARTED";
data.ownerReviewComplete = {
  cardsReviewed: 50,
  labot: 50,
  nelabot: 0,
  pending: 0,
  findingsOwnerResolved: cumulativeFindings,
  productionChanges: 0,
  deReadOnly: "PASS",
  highRepair12: "READY / NOT STARTED",
  completedAt: new Date().toISOString(),
};

fs.writeFileSync(JSON_PATH, JSON.stringify(data, null, 2));

const md = fs.readFileSync(MD_PATH, "utf8");
const startMarker = "CARD 41/50";
const endMarker = "## Coverage summary";
const startIdx = md.indexOf(startMarker);
const endIdx = md.indexOf(endMarker);
if (startIdx < 0 || endIdx < 0) {
  console.error("Could not find MD section boundaries");
  process.exit(1);
}

const newSection = block5Cards.map((c) => formatCardSection(c)).join("\n");
const newMd = md.slice(0, startIdx) + newSection + "\n" + md.slice(endIdx);

const statusBlock = [
  "",
  "---",
  "",
  "## Owner review progress",
  "",
  "EN–DE B1 HIGH #12 OWNER REVIEW — BLOCK 5/5 COMPLETE",
  "",
  "Cards/audit entries reviewed (block 5): 10/10",
  "LABOT: 10",
  "NELABOT: 0",
  `Findings owner-resolved (block 5): ${findingsResolvedBlock5}`,
  "PENDING remaining cards 41–50: 0",
  "",
  "Cumulative cards/audit entries reviewed: 50/50",
  "Cumulative LABOT: 50",
  "Cumulative NELABOT: 0",
  `Cumulative findings owner-resolved: ${cumulativeFindings}`,
  "Cumulative PENDING: 0",
  "",
  "Associated top-level repairs recorded:",
  "- Hupe — Horn • Horn → Horn",
  "- knapp — Needy → Barely enough",
  "- Maß — Mayor → Measure",
  "- nachdem — After when → After",
  "- neigen — To strive → To be inclined; to lean",
  "- pflegen — Maintain → To take care of; to tend",
  "- Probe — Inspection → Test; sample; rehearsal",
  "- Rate — Contribution → Installment",
  "- räumen — Release → To clear; to vacate; to move out",
  "- reißen — Bursting → To tear; to rip; to burst",
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
  "---",
  "",
  "## EN–DE B1 HIGH #12 OWNER REVIEW: COMPLETE",
  "",
  "Cards reviewed: 50/50",
  "LABOT: 50",
  "NELABOT: 0",
  "PENDING: 0",
  "",
  "Production changes: 0",
  "DE READ-ONLY: PASS",
  "",
  "HIGH REPAIR #12: READY / NOT STARTED",
  "",
  "Next: EN–DE B1 HIGH REPAIR #12",
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
      block5CardsReviewed: 10,
      block5Labot: 10,
      block5Nelabot: 0,
      findingsOwnerResolvedBlock5: findingsResolvedBlock5,
      pendingInBlock5: 0,
      cumulativeCardsReviewed: 50,
      cumulativeLabot: 50,
      cumulativeNelabot: 0,
      cumulativeFindingsOwnerResolved: cumulativeFindings,
      cumulativePending: 0,
      highRepair12: data.highRepair12Status,
      productionChanges: 0,
      deReadOnly: "PASS",
    },
    null,
    2,
  ),
);
