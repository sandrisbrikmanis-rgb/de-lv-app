#!/usr/bin/env node
/**
 * Record OWNER decisions — HIGH #12 block 3/5 (cards/audit entries 21–30).
 * READ-ONLY production — updates review artifacts only.
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..", "..");
const JSON_PATH = path.join(ROOT, "reports/temp/en-b1-high-owner-review-12.json");
const MD_PATH = path.join(ROOT, "reports/en-b1-high-owner-review-12.md");
const BLOCK_SIZE = 50;
const EXPECTED_FINDINGS_BLOCK3 = 34;

const LING_NOTE = "OWNER approved linguistic correction.";
const ACCENT_NOTE = "OWNER approved sectionAccent correction.";

/** cardId -> decisions */
const DECISIONS = {
  "b1-kündigen": [
    {
      field: "study.translation",
      ownerFinalEn: "To quit one’s job / to give notice",
    },
    {
      field: "study.examples[0].lv",
      ownerFinalEn: "I quit my job.",
    },
    {
      field: "study.examples[2].lv",
      ownerFinalEn: "We terminate the contract at the end of the month.",
    },
    {
      field: "study.sectionAccents.comparison[0].meaning",
      ownerFinalEn: "quit",
    },
    {
      field: "study.sectionAccents.comparison[1].meaning",
      ownerFinalEn: "dismiss from work",
    },
  ],
  "b1-kuppeln": [
    {
      field: "study.important",
      ownerFinalEn:
        "kuppeln is not a general word for “connect” in all situations; verbinden is more common in everyday life.",
    },
    {
      field: "study.sectionAccents.comparison[0].example.purple",
      ownerFinalEn: "hitches",
    },
    {
      field: "study.sectionAccents.comparison[1].example.purple",
      ownerFinalEn: "connects",
    },
    {
      field: "study.sectionAccents.comparison[2].example.purple",
      ownerFinalEn: "connected",
    },
  ],
  "b1-laden": [
    {
      field: "study.tip",
      ownerFinalEn: "Items in a car or a battery being charged → laden.",
    },
    {
      field: "study.sectionAccents.comparison[2].meaning.purple",
      ownerFinalEn: "load",
    },
  ],
  "b1-lager": [
    {
      field: "study.examples[0].enText",
      ownerFinalEn: "The goods are in the warehouse.",
    },
    {
      field: "study.sectionAccents.comparison[2].meaning.purple",
      ownerFinalEn: "camp",
    },
  ],
  "b1-inhalt": [
    {
      field: "study.sectionAccents.comparison[0].meaning.purple",
      ownerFinalEn: "content",
    },
    {
      field: "study.sectionAccents.comparison[2].meaning.purple",
      ownerFinalEn: "volume",
    },
    {
      field: "study.sectionAccents.comparison[0].example.purple",
      ownerFinalEn: "Content",
    },
    {
      field: "study.sectionAccents.comparison[2].example.purple",
      ownerFinalEn: "Volume",
    },
  ],
  "b1-kante": [
    {
      field: "study.explanation",
      ownerFinalEn:
        "Main idea: die Kante is the edge or ridge of an object. It is not an ordinary territorial boundary, but a physical sharp or clearly defined edge.",
    },
    {
      field: "study.examples[2].enText",
      ownerFinalEn: "He puts the glass near the edge.",
    },
    {
      field: "study.important",
      ownerFinalEn:
        "Die Grenze is used for territorial boundaries; the edge of an object is often called die Kante.",
    },
    {
      field: "study.sectionAccents.comparison[0].meaning.purple",
      ownerFinalEn: "edge",
    },
  ],
  "b1-landen": [
    {
      field: "study.translation",
      ownerFinalEn: "To land",
    },
    {
      field: "study.sectionAccents.comparison[0].meaning.purple",
      ownerFinalEn: "land",
    },
    {
      field: "study.sectionAccents.comparison[1].meaning.purple",
      ownerFinalEn: "arrive",
    },
    {
      field: "study.sectionAccents.comparison[1].example.purple",
      ownerFinalEn: "arrives",
    },
  ],
  "b1-leisten": [
    {
      field: "study.explanation",
      ownerFinalEn:
        "Leisten means to perform work, provide a service, or make a contribution.",
    },
    {
      field: "study.important",
      ownerFinalEn: "sich leisten is a separate construction meaning 'to afford'.",
    },
  ],
  "b1-leistung": [
    {
      field: "study.tip.leftBlocks[0].text",
      ownerFinalEn:
        "For a person, Leistung means performance; for a motor, it means power.",
    },
    {
      field: "study.important.text",
      ownerFinalEn:
        "Leistung is not just about the end result. It often evaluates performance or power itself.",
    },
    {
      field: "study.sectionAccents.explanation.purple",
      ownerFinalEn: "Main",
    },
    {
      field: "study.sectionAccents.comparison[0].meaning.purple",
      ownerFinalEn: ["Performance", "achievement", "power"],
    },
  ],
  "b1-locker": [
    {
      field: "study.explanation",
      ownerFinalEn:
        "Main idea: locker means loose when something is not tightly secured. When referring to people, conversation, or mood, it means relaxed.",
    },
    {
      field: "study.tip",
      ownerFinalEn: "Think of the opposite of fest: if it's not tight, it's loose.",
    },
    {
      field: "study.sectionAccents.comparison[1].meaning.purple",
      ownerFinalEn: "loose",
    },
  ],
};

function findFinding(card, decision) {
  const matches = card.findings.filter((f) => f.field === decision.field);
  if (matches.length !== 1) {
    throw new Error(
      `PRECONDITION MISMATCH: ${card.cardId} field=${decision.field} found=${matches.length}`
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

const block1Cards = data.cards.filter((c) => c.sequence <= 10);
const block2Cards = data.cards.filter((c) => c.sequence >= 11 && c.sequence <= 20);
const block1Snapshot = snapshotCards(block1Cards);
const block2Snapshot = snapshotCards(block2Cards);

let findingsResolvedBlock3 = 0;

for (const card of data.cards) {
  if (card.sequence < 21 || card.sequence > 30) continue;

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

  for (const d of decisions) {
    const f = findFinding(card, d);
    f.ownerVerdict = "LABOT";
    f.ownerFinalEn = d.ownerFinalEn;
    f.ownerNote = ownerNote(f);
    findingsResolvedBlock3++;
  }
}

if (findingsResolvedBlock3 !== EXPECTED_FINDINGS_BLOCK3) {
  console.error("Finding count mismatch", findingsResolvedBlock3, EXPECTED_FINDINGS_BLOCK3);
  process.exit(1);
}

const block3Cards = data.cards.filter((c) => c.sequence >= 21 && c.sequence <= 30);
const pendingBlock3 = block3Cards.flatMap((c) =>
  c.findings.filter((f) => f.ownerVerdict === "PENDING"),
);
if (pendingBlock3.length) {
  console.error("PENDING remaining in block 3:", pendingBlock3.length);
  process.exit(1);
}

assertSnapshotUnchanged(data, block1Snapshot);
assertSnapshotUnchanged(data, block2Snapshot);

const cards31Changed = data.cards
  .filter((c) => c.sequence > 30)
  .flatMap((c) => c.findings.filter((f) => f.ownerVerdict !== "PENDING"));
if (cards31Changed.length) {
  console.error("Cards 31–50 unexpectedly changed:", cards31Changed.length);
  process.exit(1);
}

const block1FindingsResolved = block1Cards.reduce((n, c) => n + c.findings.length, 0);
const block2FindingsResolved = block2Cards.reduce((n, c) => n + c.findings.length, 0);
const cumulativeFindings =
  block1FindingsResolved + block2FindingsResolved + findingsResolvedBlock3;

if (!data.ownerReviewBlock2) {
  throw new Error("Missing ownerReviewBlock2");
}

data.ownerReviewBlock3 = {
  block: "3/5",
  cardsReviewed: 10,
  labot: 10,
  nelabot: 0,
  findingsOwnerResolved: findingsResolvedBlock3,
  pendingInBlock3: 0,
  cumulativeCardsReviewed: 30,
  cumulativeLabot: 30,
  cumulativeNelabot: 0,
  cumulativeFindingsOwnerResolved: cumulativeFindings,
  completedAt: new Date().toISOString(),
};

data.ownerDecisionsMade = cumulativeFindings;
data.ownerReviewStatus = "EN–DE B1 HIGH #12 OWNER REVIEW — BLOCK 3/5 COMPLETE";

fs.writeFileSync(JSON_PATH, JSON.stringify(data, null, 2));

const md = fs.readFileSync(MD_PATH, "utf8");
const startMarker = "CARD 21/50";
const endMarker = "CARD 31/50";
const startIdx = md.indexOf(startMarker);
const endIdx = md.indexOf(endMarker);
if (startIdx < 0 || endIdx < 0) {
  console.error("Could not find MD section boundaries");
  process.exit(1);
}

const newSection = block3Cards.map((c) => formatCardSection(c)).join("\n");
const newMd = md.slice(0, startIdx) + newSection + "\n" + md.slice(endIdx);

const statusBlock = [
  "",
  "---",
  "",
  "## Owner review progress",
  "",
  "EN–DE B1 HIGH #12 OWNER REVIEW — BLOCK 3/5 COMPLETE",
  "",
  "Cards/audit entries reviewed (block 3): 10/10",
  "LABOT: 10",
  "NELABOT: 0",
  "Findings owner-resolved (block 3): 34",
  "PENDING remaining cards 21–30: 0",
  "",
  "Cumulative cards/audit entries reviewed: 30/50",
  "Cumulative LABOT: 30",
  "Cumulative NELABOT: 0",
  "Cumulative findings owner-resolved: 93",
  "",
  "Associated top-level repairs recorded (blocks 1–2):",
  "- Hupe — Horn • Horn → Horn",
  "- knapp — Needy → Barely enough",
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
  "Next: HIGH #12 OWNER REVIEW — BLOCK 4/5 (cards 31–40)",
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
      findingsOwnerResolved: findingsResolvedBlock3,
      pendingInBlock3: 0,
      cumulativeCardsReviewed: 30,
      cumulativeFindingsOwnerResolved: cumulativeFindings,
      productionChanges: 0,
      deReadOnly: "PASS",
    },
    null,
    2,
  ),
);
