#!/usr/bin/env node
/**
 * Record OWNER decisions — HIGH #11 block 5/5 (cards 41–50).
 * READ-ONLY production — updates review artifacts only.
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..", "..");
const JSON_PATH = path.join(ROOT, "reports/temp/en-b1-high-owner-review-11.json");
const MD_PATH = path.join(ROOT, "reports/en-b1-high-owner-review-11.md");

/** cardId -> finding index (0-based) -> decision */
const DECISIONS = {
  "b1-fassen": [
    {
      ownerVerdict: "LABOT",
      ownerFinalEn:
        "With your hands, fassen means “to grasp”; mentally, it can mean “to comprehend”; a hall can fassen a certain number of people = accommodate them.",
      ownerNote:
        "Atšķirt fizisko grasp, mentālo comprehend un capacity/accommodate nozīmi.",
    },
    {
      ownerVerdict: "LABOT",
      ownerFinalEn:
        "fassen depends on the object: you can grasp someone’s hand, comprehend an idea, or accommodate a certain number of people.",
      ownerNote:
        "“embraces the thought/people” ir maldinoši un gramatiski bojāti.",
    },
    {
      ownerVerdict: "LABOT",
      ownerFinalEn: "grasp, comprehend, accommodate",
      ownerNote:
        "Visi trīs LV accent targets jāaizstāj ar faktiskajām EN nozīmēm.",
    },
  ],
  "b1-faul": [
    {
      ownerVerdict: "LABOT",
      ownerFinalEn: "Main idea: faul when used about a person means lazy.",
      ownerNote: "“foul” ir cits angļu vārds, nevis vācu lemma faul.",
    },
    {
      ownerVerdict: "LABOT",
      ownerFinalEn: "A person can be faul = lazy; food can be faul = rotten.",
      ownerNote: "Abās vietās target jābūt vācu faul, ne angļu foul.",
    },
    {
      ownerVerdict: "LABOT",
      ownerFinalEn: "REMOVE DUPLICATE ACCENT",
      ownerNote: "Otra “Main” occurrence nav.",
    },
    {
      ownerVerdict: "LABOT",
      ownerFinalEn: "REMOVE DUPLICATE ACCENT",
      ownerNote: "Trešā “Main” occurrence nav.",
    },
    {
      ownerVerdict: "LABOT",
      ownerFinalEn: "lazy, rotten",
      ownerNote:
        "Aizstāt LV targets ar faktiskajām EN nozīmēm.",
    },
  ],
  "b1-festhalten": [
    {
      ownerVerdict: "LABOT",
      ownerFinalEn:
        "Do not confuse festhalten with feststellen: festhalten = to hold or record; feststellen = to establish or ascertain.",
      ownerNote:
        "Pašreiz abas lemmas kļūdaini ir festhalten. “Record” precīzāk par “fix” rakstiskas informācijas kontekstā.",
    },
    {
      ownerVerdict: "LABOT",
      ownerFinalEn: "Hold tight / record",
      ownerNote: "“fix” šeit ir maldinošs.",
    },
    {
      ownerVerdict: "LABOT",
      ownerFinalEn:
        "With your hands, festhalten means “to hold tight”; in writing, it means “to record”.",
      ownerNote: "Dabisks fiziskās un dokumentēšanas nozīmes kontrasts.",
    },
  ],
  "b1-festlegen": [
    {
      ownerVerdict: "LABOT",
      ownerFinalEn:
        "festlegen means to set a deadline, price, plan, arrangement, or rule clearly in advance.",
      ownerNote: "“term” šeit ir neskaidrs; deadline ir precīzāk.",
    },
    {
      ownerVerdict: "LABOT",
      ownerFinalEn:
        "With festlegen, you can set a deadline, price, or rule clearly in advance.",
      ownerNote:
        "Novākt mixed-language fragmentu un nedabisko “set clearly ahead”.",
    },
    {
      ownerVerdict: "LABOT",
      ownerFinalEn:
        "festlegen = to set in advance; feststellen = to establish or ascertain an already existing fact.",
      ownerNote: "Otrajā daļā jābūt faktiskajai vācu lemmai feststellen.",
    },
    {
      ownerVerdict: "LABOT",
      ownerFinalEn: "set, in advance",
      ownerNote:
        "Izmantot tikai faktiskajā izlabotajā tip tekstā esošus EN targets.",
    },
  ],
  "b1-feststellen": [
    {
      ownerVerdict: "LABOT",
      ownerFinalEn:
        "Main idea: feststellen means to establish or ascertain a fact.",
      ownerNote: "Headword vietā jābūt vācu feststellen.",
    },
    {
      ownerVerdict: "LABOT",
      ownerFinalEn: "I found that you are right.",
      ownerNote:
        "Šajā learner example konstrukcija ar “that” ir skaidrāka un gramatiski pilnīga.",
    },
    {
      ownerVerdict: "LABOT",
      ownerFinalEn:
        "feststellen = to establish or ascertain an existing fact; festlegen = to set a decision, deadline, or price.",
      ownerNote: "“verzetten” ir bojāts target; “term” → “deadline”.",
    },
    {
      ownerVerdict: "LABOT",
      ownerFinalEn: "fact, error, disease, deadline, price",
      ownerNote:
        "LV “faktu” un “cenu” aizstāt ar EN; visiem targets jāeksistē faktiskajā tip tekstā pēc precondition pārbaudes.",
    },
  ],
  "b1-folge": [
    {
      ownerVerdict: "LABOT",
      ownerFinalEn: "Consequence / episode",
      ownerNote: "TV/media kontekstā Folge = episode, nevis series.",
    },
    {
      ownerVerdict: "LABOT",
      ownerFinalEn: "In a TV series, Folge means an episode.",
      ownerNote:
        "Gan “serial”, gan “series” kā pašas Folge tulkojums ir nepareizi.",
    },
    {
      ownerVerdict: "LABOT",
      ownerFinalEn: "episode",
      ownerNote: "Accent jāatbilst izlabotajai nozīmei.",
    },
  ],
  "b1-futter": [
    {
      ownerVerdict: "LABOT",
      ownerFinalEn:
        "Animals are given Futter as feed; in a jacket, Futter means lining.",
      ownerNote:
        "“The Futter jacket” ir nedabisks un var tikt saprasts kā īpašs jakas tips.",
    },
    {
      ownerVerdict: "LABOT",
      ownerFinalEn: "lining",
      ownerNote: "LV accent target aizstāt ar faktisko EN vārdu.",
    },
  ],
  "b1-gehalt": [
    {
      ownerVerdict: "LABOT",
      ownerFinalEn:
        "For the content or substance of a letter, speech, or text, use der Gehalt (plural: die Gehalte).",
      ownerNote: "Pareizais singular šajā nozīmē ir der Gehalt.",
    },
    {
      ownerVerdict: "LABOT",
      ownerFinalEn:
        "der Gehalt = content or substance (plural: die Gehalte).",
      ownerNote: "“der Gehalte” singular ir nepareizi.",
    },
    {
      ownerVerdict: "LABOT",
      ownerFinalEn: "Keep only one matching “Main” accent.",
      ownerNote: "Tekstā ir tikai viens “Main”.",
    },
  ],
  "b1-gehalt-2": [
    {
      ownerVerdict: "LABOT",
      ownerFinalEn:
        "For the content or substance of a letter, speech, or text — der Gehalt. For salary or wages — das Gehalt.",
      ownerNote:
        "“On the nature of” ir nedabisks un semantiski maldinošs. Saglabāt svarīgo der Gehalt / das Gehalt kontrastu.",
    },
    {
      ownerVerdict: "LABOT",
      ownerFinalEn:
        "For the meaning “content”, the plural is die Gehalte, not die Gehälter.",
      ownerNote:
        "Pilnībā novākt LV tekstu un skaidri parādīt plural kontrastu.",
    },
  ],
  "b1-gelten": [
    {
      ownerVerdict: "LABOT",
      ownerFinalEn:
        "gelten means to be in force or to be valid at a particular time, place, or in a particular situation.",
      ownerNote:
        "Novākt repeated “valid” un saglabāt “be in force” nozīmi likumiem/noteikumiem.",
    },
    {
      ownerVerdict: "LABOT",
      ownerFinalEn:
        "A rule, law, or ticket can be valid; a person can gelten als an expert = be regarded as an expert.",
      ownerNote:
        "Novākt LV “persona” un vienlaikus saglabāt svarīgo gelten als konstrukciju.",
    },
    {
      ownerVerdict: "LABOT",
      ownerFinalEn: "Keep only one matching “Main” accent.",
      ownerNote: "Tekstā ir tikai viens matching occurrence.",
    },
    {
      ownerVerdict: "LABOT",
      ownerFinalEn: "person, expert",
      ownerNote:
        "Aizstāt LV/German targets ar EN tokeniem no izlabotā tip teksta.",
    },
  ],
};

function formatFindingBlock(f, idx, metaAnomaly) {
  const lines = [
    `### Finding ${idx}`,
    "",
    `Severity: ${f.severity}`,
    `Type: ${f.type}`,
    `Field: ${f.field}`,
    `Current EN: ${f.currentEn}`,
    `Recommended EN: ${f.recommendedEn}`,
    `Reason: ${f.reason}`,
    `Luna verdict: ${f.lunaVerdict || "—"}`,
    `sectionAccents: ${f.sectionAccentsKind || "—"}`,
  ];
  if (f.duplicateNote) lines.push(`Duplicate note: ${f.duplicateNote}`);
  if (metaAnomaly) lines.push(`Metadata anomaly: ${metaAnomaly}`);
  lines.push(
    "",
    `OWNER VERDICT: ${f.ownerVerdict}`,
    `OWNER FINAL EN: ${f.ownerFinalEn}`,
    `OWNER NOTE: ${f.ownerNote || "—"}`,
    ""
  );
  return lines.join("\n");
}

function formatCardMd(card) {
  const num = String(card.sequence).padStart(2, "0");
  const lines = [
    `## ${num} — ${card.cardId} — ${card.lemma}`,
    "",
  ];
  if (card.productionIndex !== null) {
    lines.push(`Production index: ${card.productionIndex}`);
  }
  lines.push(`Card type: ${card.cardType}`);
  lines.push(`DE: ${card.lemma}`);
  lines.push(`Article: ${card.article || "—"}`);
  lines.push(`Plural: ${card.plural || "—"}`);
  if (card.lvSource) lines.push(`LV source: ${card.lvSource}`);
  if (card.productionEn) lines.push(`Production EN: ${card.productionEn}`);
  lines.push(`Metadata anomaly: ${card.metadataAnomaly || "—"}`);
  if (card.gehaltIdentityNote) {
    lines.push(`Gehalt identity note: ${card.gehaltIdentityNote}`);
  }
  lines.push(`OWNER CARD VERDICT: ${card.ownerCardVerdict || "PENDING"}`);
  if (card.ownerAssociatedRepairs?.length) {
    for (const ar of card.ownerAssociatedRepairs) {
      lines.push(
        `ASSOCIATED REPAIR — field ${ar.field}: ${ar.currentEn} → ${ar.ownerFinalEn}`
      );
      if (ar.ownerNote) lines.push(`Associated repair note: ${ar.ownerNote}`);
    }
  }
  lines.push("");

  for (let j = 0; j < card.findings.length; j++) {
    lines.push(formatFindingBlock(card.findings[j], j + 1, card.metadataAnomaly));
  }
  return lines.join("\n");
}

const data = JSON.parse(fs.readFileSync(JSON_PATH, "utf8"));
let block5Resolved = 0;

for (const card of data.cards) {
  const decisions = DECISIONS[card.cardId];
  if (!decisions) continue;
  if (card.sequence < 41 || card.sequence > 50) {
    throw new Error(
      `Card ${card.cardId} has decisions but sequence ${card.sequence} outside block 5`
    );
  }

  card.ownerCardVerdict = "LABOT";

  if (card.cardId === "b1-gehalt" || card.cardId === "b1-gehalt-2") {
    card.gehaltIdentityNote =
      "Shared production index 1027 with b1-gehalt / b1-gehalt-2 audit entries; verify GEHALT IDENTITY GATE at repair.";
  }

  for (let i = 0; i < decisions.length; i++) {
    const d = decisions[i];
    const f = card.findings[i];
    if (!f) throw new Error(`Missing finding ${i} on ${card.cardId}`);
    f.ownerVerdict = d.ownerVerdict;
    f.ownerFinalEn = d.ownerFinalEn;
    f.ownerNote = d.ownerNote;
    block5Resolved++;
  }
}

const block5Cards = data.cards.filter((c) => c.sequence >= 41 && c.sequence <= 50);
const pendingInBlock = block5Cards.flatMap((c) =>
  c.findings.filter((f) => f.ownerVerdict === "PENDING")
);
const pendingAll = data.cards.flatMap((c) =>
  c.findings.filter((f) => f.ownerVerdict === "PENDING")
);
if (pendingInBlock.length) {
  console.error("PENDING remaining in block 5:", pendingInBlock.length);
  process.exit(1);
}

const block1Resolved = data.ownerReviewBlock1?.findingsOwnerResolved ?? 34;
const block2Resolved = data.ownerReviewBlock2?.findingsOwnerResolved ?? 37;
const block3Resolved = data.ownerReviewBlock3?.findingsOwnerResolved ?? 27;
const block4Resolved = data.ownerReviewBlock4?.findingsOwnerResolved ?? 36;

data.ownerReviewBlock5 = {
  block: "5/5",
  cardsReviewed: 10,
  labot: 10,
  nelabot: 0,
  findingsOwnerResolved: block5Resolved,
  pendingInBlock5: 0,
  completedAt: new Date().toISOString(),
};
data.ownerDecisionsMade =
  block1Resolved + block2Resolved + block3Resolved + block4Resolved + block5Resolved;
data.ownerReviewComplete = true;
data.ownerPendingAcrossHigh11 = pendingAll.length;

data.gehaltIdentityGate = {
  b1GehaltProductionIndex: 1027,
  b1Gehalt2ProductionIndex: 1027,
  sharedProductionFlaggedForRepairGate: true,
  auditEntriesTargetingProduction: 2,
  expectedMatchingProductionCards: 1,
  repairGateNote:
    "Before HIGH REPAIR #11 production write: verify both audit entries target one production Gehalt card at index 1027; apply all OWNER-approved findings once; do not double-count cards repaired.",
};

fs.writeFileSync(JSON_PATH, JSON.stringify(data, null, 2));

// Patch MD: replace card sections 41–50
const md = fs.readFileSync(MD_PATH, "utf8");
const startMarker = "## 41 —";
const endMarker = "---\n\n## Coverage summary";
const startIdx = md.indexOf(startMarker);
const endIdx = md.indexOf(endMarker);
if (startIdx < 0 || endIdx < 0) {
  console.error("Could not find MD section boundaries");
  process.exit(1);
}

const newSections = block5Cards.map((c) => formatCardMd(c)).join("\n");
const newMd = md.slice(0, startIdx) + newSections + "\n" + md.slice(endIdx);
fs.writeFileSync(MD_PATH, newMd);

console.log(
  JSON.stringify(
    {
      cardsReviewed: 10,
      labot: 10,
      nelabot: 0,
      findingsOwnerResolved: block5Resolved,
      cumulativeFindingsOwnerResolved: data.ownerDecisionsMade,
      ownerPendingAcrossHigh11: data.ownerPendingAcrossHigh11,
      ownerReviewComplete: data.ownerReviewComplete,
      gehaltIdentityGate: data.gehaltIdentityGate,
      pendingInBlock5: 0,
      productionChanges: 0,
    },
    null,
    2
  )
);
