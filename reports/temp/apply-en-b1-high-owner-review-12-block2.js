#!/usr/bin/env node
/**
 * Record OWNER decisions — HIGH #12 block 2/5 (cards/audit entries 11–20).
 * READ-ONLY production — updates review artifacts only.
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..", "..");
const JSON_PATH = path.join(ROOT, "reports/temp/en-b1-high-owner-review-12.json");
const MD_PATH = path.join(ROOT, "reports/en-b1-high-owner-review-12.md");
const BLOCK_SIZE = 50;
const EXPECTED_FINDINGS_BLOCK2 = 28;

const LING_NOTE = "OWNER approved linguistic correction.";
const ACCENT_NOTE = "OWNER approved sectionAccent correction.";
const IDENTITY_NOTE =
  "OWNER approved correction; shared production identity must be deduplicated during repair.";

/** cardId -> decisions */
const DECISIONS = {
  "b1-hupe": [
    {
      field: "study.important.text",
      ownerFinalEn: "die Hupe = horn. Plural: die Hupen.",
      ownerNote:
        "“Bugle” nav Hupe parastā nozīme. Nav vajadzīgs arī “ship's horn” kā otrs galvenais gloss; vienkāršais “horn” ir precīzs learner-facing variants.",
    },
  ],
  "b1-irren": [
    {
      field: "study.explanation",
      ownerFinalEn: "Main idea: irren means to err or go astray.",
      ownerNote: "“erren” ir kļūdaina vācu lemma.",
    },
    {
      field: "study.sectionAccents.explanation.purple[1]",
      ownerFinalEn: "REMOVE DUPLICATE ACCENTS",
      ownerNote:
        "Saglabāt tikai vienu matching “Main” accent; izņemt visus duplicate “Main” targets bez atbilstoša occurrence.",
    },
  ],
  "b1-kehren": [
    {
      field: "study.examples[2].lv",
      ownerFinalEn: "He turns his gaze toward the door.",
      ownerNote:
        "“glances” maina kehren konstrukcijas nozīmi; šeit runa ir par apzinātu skatiena pavēršanu.",
    },
    {
      field: "study.tip.leftBlocks[0].text",
      ownerFinalEn:
        "Kehren is often used with a broom, for example when sweeping a yard; zurückkehren is a different verb.",
      ownerNote: "Dabiskāks EN un skaidrāks learner-facing kontrasts.",
    },
  ],
  "b1-kiefer": [
    {
      field: "study.important.text",
      ownerFinalEn:
        "The article here is not a minor detail; der and die completely change the word's meaning.",
      ownerNote: "Luna correction apstiprināts.",
    },
    {
      field: "study.sectionAccents.important[0].purple[0]",
      ownerFinalEn: "change the word's meaning",
      ownerNote:
        "Accent jāatbilst izlabotā important teksta faktiskajai frāzei un capitalization.",
    },
    {
      field: "study.sectionAccents.tip.leftBlocks[0].purple[0]",
      ownerFinalEn: "article",
      ownerNote: "LV token aizstāt ar matching EN tokenu.",
    },
  ],
  "b1-kippen": [
    {
      field: "study.explanation",
      ownerFinalEn:
        "Main idea: kippen means to overturn or tilt something so that it loses its balance.",
      ownerNote: "Noņemt nevajadzīgo “To kippen” un duplicate “tilt”.",
    },
    {
      field: "study.examples[1].lv",
      ownerFinalEn: "Do not tilt the chair back.",
      ownerNote: "Nepieciešams imperatīvs.",
    },
    {
      field: "study.comparison[2].meaning",
      ownerFinalEn: "To turn over",
      ownerNote: "umdrehen = to turn over / turn around, nevis to cut.",
    },
    {
      field: "study.important.text",
      ownerFinalEn:
        "kippen does not simply mean “to fall”; it often involves tilting or a sudden change in mood.",
      ownerNote:
        "Luna recommendation joprojām atstāja nedabisko “not simply fallen”. OWNER FINAL ir gramatiski un semantiski skaidrāks.",
    },
    {
      field: "study.sectionAccents.important.purple[1]",
      ownerFinalEn: "REMOVE DUPLICATE ACCENT",
      ownerNote: "“kippen” redzamajā tekstā ir tikai viens matching occurrence.",
    },
  ],
  "b1-klappen": [
    {
      field: "study.sectionAccents.explanation.purple[1]",
      ownerFinalEn: "REMOVE DUPLICATE ACCENTS",
      ownerNote: "Saglabāt tikai vienu matching “Main” accent.",
    },
    {
      field: "study.sectionAccents.tip.leftBlocks[0].text.purple[0]",
      ownerFinalEn: "work",
      ownerNote: "LV token aizstāt ar matching EN learner-facing tokenu.",
    },
  ],
  "b1-knapp": [
    {
      field: "study.translation",
      ownerFinalEn: "Barely enough",
      ownerNote:
        "“Needy” apzīmē trūcīgu cilvēku un neatbilst šīs kartītes knapp nozīmei.",
    },
    {
      field: "study.tip.leftBlocks[0].text",
      ownerFinalEn: "knapp means: enough, but only barely.",
      ownerNote:
        "“not nearly enough” ir pretēja nozīme. OWNER FINAL ir dabiskāks par “enough, but barely enough”.",
    },
  ],
  "b1-kreuzen": [
    {
      field: "study.explanation",
      ownerFinalEn:
        "kreuzen means to cross; sich kreuzen means to intersect or cross each other, for example when roads, lines, or routes meet.",
      ownerNote:
        "Skaidri nodalīt transitive kreuzen un reflexive sich kreuzen lietojumu.",
    },
    {
      field: "study.comparison[0].meaning",
      ownerFinalEn: "To cross / intersect",
      ownerNote: "Novērst duplicate gloss.",
    },
    {
      field: "study.sectionAccents.comparison[0].example.purple",
      ownerFinalEn: "intersect",
      ownerNote: "LV target aizstāt ar EN.",
    },
    {
      field: "study.sectionAccents.comparison[1].example.purple",
      ownerFinalEn: "cross",
      ownerNote:
        "Izmantot mācāmo darbības vārda target tokenu, nevis pronoun + gloss fragmentu.",
    },
    {
      field: "study.sectionAccents.comparison[2].example.purple",
      ownerFinalEn: "cross",
      ownerNote:
        "Audit evidence rāda example: “Please mark the correct answer with a cross.” Tāpēc exact target token ir “cross”, nevis “Mark it”.",
    },
  ],
  "b1-kunde-2": [
    {
      field: "study.explanation",
      ownerFinalEn:
        "In older or literary German, die Kunde can mean a message or piece of news.",
      ownerNote:
        "Novērst duplicate “message” un precizēt, ka runa ir par German register.",
    },
    {
      field: "study.examples[0].lv",
      ownerFinalEn: "The customer pays at the checkout.",
      ownerNote: "“at the checkout” ir dabiskāks šajā kontekstā.",
    },
    {
      field: "study.sectionAccents.comparison[0].meaning.purple",
      ownerFinalEn: "customer",
      ownerNote: "LV token aizstāt ar EN.",
    },
    {
      field: "study.sectionAccents.comparison[1].meaning.purple",
      ownerFinalEn: "customer",
      ownerNote: "LV token aizstāt ar EN.",
    },
  ],
  "b1-kunde": [
    {
      field: "study.explanation",
      ownerFinalEn:
        "In older or literary German, die Kunde can mean a message or piece of news.",
      ownerNote:
        "Apzināti izmantot TO PAŠU gala explanation kā CARD 19, lai alias findings neradītu savstarpēju OWNER FINAL collision.",
    },
    {
      field: "study.sectionAccents.comparison[1].meaning.purple",
      ownerFinalEn: "customer",
      ownerNote:
        "Tas pats production field jānonāk pie vienas konsekventas EN accent vērtības.",
    },
  ],
};

const ASSOCIATED_REPAIRS = {
  "b1-hupe": {
    field: "lv",
    currentEn: "Horn • Horn",
    ownerFinalEn: "Horn",
    ownerNote: "Identisks dubultojums front kartītē nav pedagoģiski jēgpilns.",
  },
  "b1-knapp": {
    field: "lv",
    currentEn: "Needy",
    ownerFinalEn: "Barely enough",
    ownerNote: "Front translation un study.translation nedrīkst konfliktēt.",
  },
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

function ownerNote(finding, decision) {
  if (decision.ownerNote) return decision.ownerNote;
  if (
    finding.field?.includes("sectionAccents") ||
    finding.sectionAccentsKind ||
    finding.type?.includes("SECTION_ACCENT") ||
    finding.type?.includes("section-accent")
  ) {
    return ACCENT_NOTE;
  }
  return LING_NOTE;
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
  );
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

function formatCardSection(card) {
  const parts = [];
  if (card.ownerAssociatedRepairs?.length) {
    for (const ar of card.ownerAssociatedRepairs) {
      parts.push(
        `ASSOCIATED TOP-LEVEL OWNER DECISION — field ${ar.field}: ${ar.currentEn} → ${ar.ownerFinalEn}`,
        `Associated repair note: ${ar.ownerNote}`,
        ""
      );
    }
  }
  parts.push(...card.findings.map((f) => formatFindingBlock(f, card.sequence, card)));
  return parts.join("\n");
}

const data = JSON.parse(fs.readFileSync(JSON_PATH, "utf8"));

const block1Cards = data.cards.filter((c) => c.sequence <= 10);
const block1Snapshot = block1Cards.map((c) => ({
  cardId: c.cardId,
  ownerCardVerdict: c.ownerCardVerdict,
  findings: c.findings.map((f) => ({
    field: f.field,
    ownerVerdict: f.ownerVerdict,
    ownerFinalEn: f.ownerFinalEn,
    ownerNote: f.ownerNote,
  })),
}));

let findingsResolvedBlock2 = 0;

for (const card of data.cards) {
  if (card.sequence < 11 || card.sequence > 20) continue;

  const decisions = DECISIONS[card.cardId];
  if (!decisions) {
    throw new Error(`Missing decisions for ${card.cardId}`);
  }
  if (card.findings.length !== decisions.length) {
    throw new Error(
      `PRECONDITION MISMATCH: ${card.cardId} expected ${decisions.length} decisions, has ${card.findings.length} findings`
    );
  }

  card.ownerCardVerdict = "LABOT";

  const assoc = ASSOCIATED_REPAIRS[card.cardId];
  if (assoc) {
    card.ownerAssociatedRepairs = [assoc];
  }

  if (card.cardId === "b1-kunde-2" || card.cardId === "b1-kunde") {
    card.kundeSharedProductionIdentity = true;
  }
  if (card.cardId === "b1-kunde") {
    card.auditAliasNote =
      "Audit ID b1-kunde maps to production identity b1-kunde-2 at index 1660; not an independent production card.";
  }

  for (const d of decisions) {
    const f = findFinding(card, d);
    f.ownerVerdict = "LABOT";
    f.ownerFinalEn = d.ownerFinalEn;
    f.ownerNote = d.ownerNote || (card.cardId === "b1-kunde" ? IDENTITY_NOTE : ownerNote(f, d));
    findingsResolvedBlock2++;
  }
}

if (findingsResolvedBlock2 !== EXPECTED_FINDINGS_BLOCK2) {
  console.error("Finding count mismatch", findingsResolvedBlock2, EXPECTED_FINDINGS_BLOCK2);
  process.exit(1);
}

const block2Cards = data.cards.filter((c) => c.sequence >= 11 && c.sequence <= 20);
const pendingBlock2 = block2Cards.flatMap((c) =>
  c.findings.filter((f) => f.ownerVerdict === "PENDING")
);
if (pendingBlock2.length) {
  console.error("PENDING remaining in block 2:", pendingBlock2.length);
  process.exit(1);
}

for (const snap of block1Snapshot) {
  const card = data.cards.find((c) => c.cardId === snap.cardId);
  if (!card || card.ownerCardVerdict !== snap.ownerCardVerdict) {
    throw new Error(`Block 1 card changed: ${snap.cardId}`);
  }
  for (let i = 0; i < snap.findings.length; i++) {
    const f = card.findings[i];
    const s = snap.findings[i];
    if (
      f.field !== s.field ||
      f.ownerVerdict !== s.ownerVerdict ||
      f.ownerFinalEn !== s.ownerFinalEn ||
      f.ownerNote !== s.ownerNote
    ) {
      throw new Error(`Block 1 finding changed: ${snap.cardId} ${s.field}`);
    }
  }
}

const cards21Pending = data.cards
  .filter((c) => c.sequence > 20)
  .flatMap((c) => c.findings.filter((f) => f.ownerVerdict !== "PENDING"));
if (cards21Pending.length) {
  console.error("Cards 21–50 unexpectedly changed:", cards21Pending.length);
  process.exit(1);
}

const block1FindingsResolved = block1Cards.reduce((n, c) => n + c.findings.length, 0);
const cumulativeFindings = block1FindingsResolved + findingsResolvedBlock2;

data.kundeSharedProductionIdentity = {
  yes: true,
  auditEntries: 2,
  auditIds: ["b1-kunde-2", "b1-kunde"],
  productionIdentity: "b1-kunde-2",
  productionIndex: 1660,
  expectedUniqueProductionCardsRepresentedByCards19To20: 1,
  note: "Mandatory HIGH REPAIR #12 identity gate — do not count as two production cards.",
};

data.ownerReviewBlock2 = {
  block: "2/5",
  cardsReviewed: 10,
  labot: 10,
  nelabot: 0,
  findingsOwnerResolved: findingsResolvedBlock2,
  pendingInBlock2: 0,
  associatedTopLevelRepairs: [
    { cardId: "b1-hupe", field: "lv", from: "Horn • Horn", to: "Horn" },
    { cardId: "b1-knapp", field: "lv", from: "Needy", to: "Barely enough" },
  ],
  cumulativeCardsReviewed: 20,
  cumulativeLabot: 20,
  cumulativeNelabot: 0,
  cumulativeFindingsOwnerResolved: cumulativeFindings,
  completedAt: new Date().toISOString(),
};

if (!data.ownerReviewBlock1) {
  throw new Error("Missing ownerReviewBlock1");
}
data.ownerDecisionsMade = cumulativeFindings;
data.ownerReviewStatus = "EN–DE B1 HIGH #12 OWNER REVIEW — BLOCK 2/5 COMPLETE";

fs.writeFileSync(JSON_PATH, JSON.stringify(data, null, 2));

const md = fs.readFileSync(MD_PATH, "utf8");
const startMarker = "CARD 11/50";
const endMarker = "CARD 21/50";
const startIdx = md.indexOf(startMarker);
const endIdx = md.indexOf(endMarker);
if (startIdx < 0 || endIdx < 0) {
  console.error("Could not find MD section boundaries");
  process.exit(1);
}

const newSection = block2Cards.map((c) => formatCardSection(c)).join("\n");
const newMd = md.slice(0, startIdx) + newSection + "\n" + md.slice(endIdx);

const statusBlock = [
  "",
  "---",
  "",
  "## Owner review progress",
  "",
  "EN–DE B1 HIGH #12 OWNER REVIEW — BLOCK 2/5 COMPLETE",
  "",
  "Cards/audit entries reviewed (block 2): 10/10",
  "LABOT: 10",
  "NELABOT: 0",
  "Findings owner-resolved (block 2): 28",
  "PENDING remaining cards 11–20: 0",
  "",
  "Cumulative cards/audit entries reviewed: 20/50",
  "Cumulative LABOT: 20",
  "Cumulative NELABOT: 0",
  "Cumulative findings owner-resolved: 59",
  "",
  "Associated top-level repairs recorded:",
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
  "Next: HIGH #12 OWNER REVIEW — BLOCK 3/5 (cards 21–30)",
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
      findingsOwnerResolved: findingsResolvedBlock2,
      pendingInBlock2: 0,
      cumulativeCardsReviewed: 20,
      cumulativeFindingsOwnerResolved: cumulativeFindings,
      kundeSharedProductionIdentity: data.kundeSharedProductionIdentity.yes,
      productionChanges: 0,
      deReadOnly: "PASS",
    },
    null,
    2
  )
);
