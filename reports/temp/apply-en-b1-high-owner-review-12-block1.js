#!/usr/bin/env node
/**
 * Record OWNER decisions — HIGH #12 block 1/5 (cards 01–10).
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

/** cardId -> decisions (field + optional matchCurrent for duplicate fields) */
const DECISIONS = {
  "b1-geschlecht": [
    {
      field: "study.explanation",
      ownerFinalEn: "masculine, feminine, or neuter gender",
    },
    {
      field: "study.tip.leftBlocks[0].text",
      ownerFinalEn: "For a word in grammar, Geschlecht = grammatical gender.",
    },
    {
      field: "study.sectionAccents.explanation",
      ownerFinalEn: '["Main"]',
    },
    {
      field: "study.sectionAccents.tip.leftBlocks[0].text",
      ownerFinalEn: '["sex","gender"]',
    },
  ],
  "b1-gewinn": [
    {
      field: "study.explanation",
      ownerFinalEn: "In games, contests, and lotteries, it means a win or a prize.",
    },
    {
      field: "study.examples[2].lv",
      ownerFinalEn: "The lottery prize was large.",
    },
    {
      field: "study.comparison[0].meaning",
      ownerFinalEn: "Profit / prize",
    },
    {
      field: "study.comparison[2].meaning",
      ownerFinalEn: "Price / prize",
    },
    {
      field: "study.tip.leftBlocks[0].text",
      ownerFinalEn: "In a company, Gewinn = profit; in a lottery, Gewinn = prize.",
    },
    {
      field: "study.sectionAccents.tip.leftBlocks[0].text",
      ownerFinalEn: '["profit","prize"]',
    },
  ],
  "b1-sich-gewöhnen": [
    {
      field: "study.important.text",
      ownerFinalEn:
        "With sich, the meaning is 'to get used to'; without sich, gewöhnen often means 'to get someone used to something'.",
    },
    {
      field: "study.sectionAccents.important",
      ownerFinalEn: "Without",
    },
  ],
  "b1-gitter": [
    {
      field: "study.important.text",
      ownerFinalEn:
        "Das Geländer is more commonly used for railings; das Gitter is not a general word for any railing.",
    },
    {
      field: "study.sectionAccents.tip.leftBlocks[0].text",
      ownerFinalEn: "door",
    },
  ],
  "b1-greifen": [
    {
      field: "study.explanation",
      ownerFinalEn: "zu Maßnahmen greifen",
    },
    {
      field: "study.comparison[1].meaning",
      ownerFinalEn: "Grasp / encompass",
    },
  ],
  "b1-griff": [
    {
      field: "study.comparison[1].meaning",
      ownerFinalEn: "Handle",
    },
    {
      field: "study.important.text",
      ownerFinalEn: "For cups or buckets, Henkel is often more appropriate than Griff.",
    },
    {
      field: "study.sectionAccents.tip.leftBlocks[0].text",
      matchCurrent: "vieta",
      ownerFinalEn: "where",
    },
    {
      field: "study.sectionAccents.tip.leftBlocks[0].text",
      matchCurrent: "satver",
      ownerFinalEn: "grab",
    },
  ],
  "b1-hauen": [
    {
      field: "study.explanation",
      ownerFinalEn: "hauen colloquially means to hit, chop or strike.",
    },
    {
      field: "study.examples[1].lv",
      ownerFinalEn: "A worker chops wood.",
    },
    {
      field: "study.tip.leftBlocks[0].text",
      ownerFinalEn: "Hau ab! is a separate phrase meaning “Get lost!”",
    },
    {
      field: "study.sectionAccents.tip.leftBlocks[0].text",
      ownerFinalEn: "blow",
    },
  ],
  "b1-herausgeben": [
    {
      field: "study.explanation",
      ownerFinalEn: "it can also mean to hand something over or give something out.",
    },
    {
      field: "study.comparison[0].meaning",
      ownerFinalEn: "Publish / hand out",
    },
    {
      field: "study.tip.leftBlocks[0].text",
      ownerFinalEn: "Verlag gibt heraus = publishes; Behörde gibt heraus = issues.",
    },
    {
      field: "study.sectionAccents.tip.leftBlocks[0].text",
      matchCurrent: "izdod",
      ownerFinalEn: "publishes",
    },
    {
      field: "study.sectionAccents.tip.leftBlocks[0].text",
      matchCurrent: "izsniedz",
      ownerFinalEn: "issues",
    },
  ],
  "b1-hinweis": [
    {
      field: "study.sectionAccents.tip.leftBlocks[0].text",
      ownerFinalEn: "advises",
    },
  ],
  "b1-horchen": [
    {
      field: "study.sectionAccents.tip.leftBlocks[0].text",
      ownerFinalEn: "furtively",
    },
  ],
};

function findFinding(card, decision) {
  const matches = card.findings.filter((f) => {
    if (f.field !== decision.field) return false;
    if (decision.matchCurrent !== undefined) {
      return String(f.currentEn).trim() === decision.matchCurrent;
    }
    return true;
  });
  if (matches.length !== 1) {
    throw new Error(
      `PRECONDITION MISMATCH: ${card.cardId} field=${decision.field} matchCurrent=${decision.matchCurrent ?? "—"} found=${matches.length}`
    );
  }
  return matches[0];
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
  if (f.metadataAnomaly) lines.push(`Metadata anomaly: ${f.metadataAnomaly}`);
  lines.push(
    "",
    `OWNER VERDICT: ${f.ownerVerdict}`,
    `OWNER FINAL EN: ${f.ownerFinalEn}`,
    `OWNER NOTE: ${f.ownerNote}`,
    ""
  );
  return lines.join("\n");
}

function formatBlockSection(cards) {
  return cards.map((card) => {
    const parts = card.findings.map((f) => formatFindingBlock(f, card.sequence, card));
    return parts.join("\n");
  }).join("\n");
}

const data = JSON.parse(fs.readFileSync(JSON_PATH, "utf8"));
let findingsResolved = 0;

for (const card of data.cards) {
  const decisions = DECISIONS[card.cardId];
  if (!decisions) {
    if (card.sequence <= 10) {
      throw new Error(`Missing decisions for card ${card.cardId}`);
    }
    continue;
  }

  if (card.findings.length !== decisions.length) {
    throw new Error(
      `PRECONDITION MISMATCH: ${card.cardId} expected ${decisions.length} decisions, card has ${card.findings.length} findings`
    );
  }

  card.ownerCardVerdict = "LABOT";

  for (const d of decisions) {
    const f = findFinding(card, d);
    f.ownerVerdict = "LABOT";
    f.ownerFinalEn = d.ownerFinalEn;
    f.ownerNote = d.ownerNote || ownerNote(f);
    findingsResolved++;
  }
}

const block1Cards = data.cards.filter((c) => c.sequence <= 10);
const pendingInBlock = block1Cards.flatMap((c) =>
  c.findings.filter((f) => f.ownerVerdict === "PENDING")
);
if (pendingInBlock.length) {
  console.error("PENDING remaining in block 1:", pendingInBlock.length);
  process.exit(1);
}

const cards11to50Pending = data.cards
  .filter((c) => c.sequence > 10)
  .flatMap((c) => c.findings.filter((f) => f.ownerVerdict !== "PENDING"));
if (cards11to50Pending.length) {
  console.error("Cards 11–50 unexpectedly changed:", cards11to50Pending.length);
  process.exit(1);
}

data.ownerReviewBlock1 = {
  block: "1/5",
  cardsReviewed: 10,
  labot: 10,
  nelabot: 0,
  findingsOwnerResolved: findingsResolved,
  pendingInBlock1: 0,
  cumulativeCardsReviewed: 10,
  cumulativeLabot: 10,
  cumulativeNelabot: 0,
  completedAt: new Date().toISOString(),
};
data.ownerDecisionsMade = findingsResolved;
data.ownerReviewStatus = "EN–DE B1 HIGH #12 OWNER REVIEW — BLOCK 1/5 COMPLETE";

fs.writeFileSync(JSON_PATH, JSON.stringify(data, null, 2));

const md = fs.readFileSync(MD_PATH, "utf8");
const startMarker = "CARD 1/50";
const endMarker = "CARD 11/50";
const startIdx = md.indexOf(startMarker);
const endIdx = md.indexOf(endMarker);
if (startIdx < 0 || endIdx < 0) {
  console.error("Could not find MD section boundaries");
  process.exit(1);
}

const newSection = formatBlockSection(block1Cards);
const newMd = md.slice(0, startIdx) + newSection + "\n" + md.slice(endIdx);

const statusBlock = [
  "",
  "---",
  "",
  "## Owner review progress",
  "",
  "EN–DE B1 HIGH #12 OWNER REVIEW — BLOCK 1/5 COMPLETE",
  "",
  "Cards reviewed: 10/10",
  "LABOT: 10",
  "NELABOT: 0",
  "PENDING remaining in cards 01–10: 0",
  "",
  "Cumulative cards reviewed: 10/50",
  "Cumulative LABOT: 10",
  "Cumulative NELABOT: 0",
  "",
  "Production changes: 0",
  "DE READ-ONLY: PASS",
  "",
  "Next: HIGH #12 OWNER REVIEW — BLOCK 2/5 (cards 11–20)",
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
      findingsOwnerResolved: findingsResolved,
      pendingInBlock1: 0,
      cumulativeCardsReviewed: 10,
      productionChanges: 0,
      deReadOnly: "PASS",
    },
    null,
    2
  )
);
