#!/usr/bin/env node
/**
 * Record OWNER decisions — HIGH #11 block 3/5 (cards 21–30).
 * READ-ONLY production — updates review artifacts only.
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..", "..");
const JSON_PATH = path.join(ROOT, "reports/temp/en-b1-high-owner-review-11.json");
const MD_PATH = path.join(ROOT, "reports/en-b1-high-owner-review-11.md");

/** cardId -> finding index (0-based) -> decision */
const DECISIONS = {
  "b1-einfügen": [
    {
      ownerVerdict: "LABOT",
      ownerFinalEn:
        "einfügen is often a technical or document-related activity; “to add” is more often hinzufügen.",
      ownerNote:
        "Pašreizējais teksts otrajā daļā atkārto angļu “to add” un nepaskaidro vācu kontrastu.",
    },
    {
      ownerVerdict: "LABOT",
      ownerFinalEn:
        "In a text or document, einfügen means “to insert”; sich einfügen means “to fit in”.",
      ownerNote:
        "Saglabāt skaidru einfügen / sich einfügen kontrastu. Associated sectionAccent: insert (replace ievietot).",
    },
  ],
  "b1-einführen": [
    {
      ownerVerdict: "LABOT",
      ownerFinalEn:
        "Rules, systems, or methods can be introduced with einführen; goods can also be imported with einführen.",
      ownerNote:
        "Pilnībā dabiskot EN tekstu, vienlaikus saglabājot abas einführen nozīmes.",
    },
    {
      ownerVerdict: "LABOT",
      ownerFinalEn:
        "einführen is not the same as vorstellen: vorstellen means to present or introduce someone, while einführen can mean to introduce or implement a system, rule, or method.",
      ownerNote:
        "Luna pamatdoma pareiza, bet OWNER FINAL precīzāk parāda abu vācu verbu faktisko kontrastu.",
    },
  ],
  "b1-einführung": [
    {
      ownerVerdict: "LABOT",
      ownerFinalEn:
        "Main idea: die Einführung means introduction or implementation. In a text or course, it is an introduction; for a new system, rule, or product, it can mean implementation.",
      ownerNote:
        "Novākt dubulto “introduction” un skaidri nodalīt abas nozīmes.",
    },
    {
      ownerVerdict: "LABOT",
      ownerFinalEn:
        "Do not confuse Einführung with Einleitung: Einleitung is usually an introduction to a text, while Einführung can also mean implementation in practice.",
      ownerNote: "“introduction to practice” nav pareizā nozīme.",
    },
  ],
  "b1-sich-eingewöhnen": [
    {
      ownerVerdict: "LABOT",
      ownerFinalEn: "After moving, we adapted well.",
      ownerNote:
        "Esošais “got used to it well” ir nedabisks un ar neskaidru objektu.",
    },
    {
      ownerVerdict: "LABOT",
      ownerFinalEn:
        "In a new job, school, or place, a person has to get used to the new situation.",
      ownerNote:
        "Novākt German fragmentu “muss sich eingewöhnen” no EN learner-facing teksta.",
    },
  ],
  "b1-einhalten": [
    {
      ownerVerdict: "LABOT",
      ownerFinalEn: "Follow / comply with precisely",
      ownerNote:
        "“execute” nav piemērots rules/deadlines/promises/distances kontekstam.",
    },
    {
      ownerVerdict: "LABOT",
      ownerFinalEn:
        "With einhalten, you follow rules, keep appointments, meet deadlines, and maintain required distances.",
      ownerNote:
        "Neizmantot Luna “Keeping rules, appointments, deadlines, and distances...” — viena angļu darbības vārda konstrukcija šiem četriem objektiem nav dabiska. OWNER FINAL parāda dabiskās EN collocations.",
    },
  ],
  "b1-einheimisch": [
    {
      ownerVerdict: "LABOT",
      ownerFinalEn:
        "People, plants, animals, or products native to a particular place can be described as einheimisch.",
      ownerNote:
        "“native to a particular place” precīzāk izskaidro einheimisch nekā neskaidrais “from this place”. Associated sectionAccent: native.",
    },
  ],
  "b1-einheit": [
    {
      ownerVerdict: "LABOT",
      ownerFinalEn:
        "Main idea: die Einheit means a unit. It can be a unit of study, a technical unit, or a unit of measurement depending on the context.",
      ownerNote:
        "Šīs kartītes kontekstā primārā nozīme ir unit, nevis unity.",
    },
    {
      ownerVerdict: "LABOT",
      ownerFinalEn: "Chapter",
      ownerNote: "Kapitel = chapter.",
    },
    {
      ownerVerdict: "LABOT",
      ownerFinalEn: "Chapter",
      ownerNote: "Accent jāsakrīt ar izlaboto comparison meaning.",
    },
    {
      ownerVerdict: "LABOT",
      ownerFinalEn: "module",
      ownerNote:
        "Aizstāt LV accent tokenu ar faktiski esošo EN “module”. Learner-facing tip tekstu nemainīt, ja tas jau ir korekts.",
    },
  ],
  "b1-einheitlich": [
    {
      ownerVerdict: "LABOT",
      ownerFinalEn: "Uniform",
      ownerNote:
        "einheitlich parasti nozīmē uniform / consistent, nevis united.",
    },
    {
      ownerVerdict: "LABOT",
      ownerFinalEn:
        "einheitlich = uniform / consistent; einzig = the only one.",
      ownerNote:
        "“equal” nav labākais pamata skaidrojums. “uniform / consistent” precīzāk atspoguļo einheitlich.",
    },
  ],
  "b1-einholen": [
    {
      ownerVerdict: "LABOT",
      ownerFinalEn: "The runner catches up with the other runner.",
      ownerNote: "Novērst neskaidro “the other”.",
    },
    {
      ownerVerdict: "LABOT",
      ownerFinalEn: "Collect / obtain / catch up with",
      ownerNote:
        "“achieve” nav einholen nozīme. OWNER izvēlas “obtain” nevis “receive”, jo information/advice/permission kontekstā “obtain” ir dabiskāks.",
    },
    {
      ownerVerdict: "LABOT",
      ownerFinalEn:
        "You can obtain information, advice, or permission with einholen; you can also einholen another runner = catch up with them.",
      ownerNote:
        "Dabiskot EN un precīzi saglabāt abas einholen nozīmes.",
    },
    {
      ownerVerdict: "LABOT",
      ownerFinalEn: "Genehmigung",
      ownerNote: "Tiešs vācu spelling repair learner-facing EN laukā.",
    },
    {
      ownerVerdict: "LABOT",
      ownerFinalEn: "advice",
      ownerNote: "LV accent target jāaizstāj ar matching EN token.",
    },
  ],
  "b1-einsatz": [
    {
      ownerVerdict: "LABOT",
      ownerFinalEn: "The firefighters have been on duty for two hours.",
      ownerNote:
        "im Einsatz šeit visdabiskāk ir “on duty”. “deployed” ir iespējams, bet šajā vispārīgajā piemērā pārāk specifisks.",
    },
    {
      ownerVerdict: "LABOT",
      ownerFinalEn: "Use / deployment / stake",
      ownerNote:
        "Einsatz aptver use/deployment un gambling stake. “rate” ir nepareizi; “involvement” šeit nav tik precīzs kā deployment.",
    },
    {
      ownerVerdict: "LABOT",
      ownerFinalEn:
        "zum Einsatz kommen. In games, Einsatz can also mean a stake.",
      ownerNote:
        "Izlabot bojāto bullet sentence break un “bet” → “stake”.",
    },
    {
      ownerVerdict: "LABOT",
      ownerFinalEn:
        "With Einsatz, ask what is being used or deployed, and in what situation.",
      ownerNote:
        "“Who” ir pārāk šaurs; “used or deployed” labāk sasaista galvenās mācāmās nozīmes.",
    },
    {
      ownerVerdict: "LABOT",
      ownerFinalEn: "used, deployed",
      ownerNote:
        "Aizstāt LV accent tokenu ar matching EN learner-facing targets.",
    },
  ],
};

const ASSOCIATED_LV = {
  "b1-einheitlich": {
    field: "lv",
    currentEn: "United",
    ownerFinalEn: "Uniform",
    ownerNote: "Front translation un study.translation nedrīkst konfliktēt.",
  },
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
let block3Resolved = 0;

for (const card of data.cards) {
  const decisions = DECISIONS[card.cardId];
  if (!decisions) continue;
  if (card.sequence < 21 || card.sequence > 30) {
    throw new Error(
      `Card ${card.cardId} has decisions but sequence ${card.sequence} outside block 3`
    );
  }

  card.ownerCardVerdict = "LABOT";
  const assoc = ASSOCIATED_LV[card.cardId];
  if (assoc) {
    card.ownerAssociatedRepairs = [assoc];
  }

  for (let i = 0; i < decisions.length; i++) {
    const d = decisions[i];
    const f = card.findings[i];
    if (!f) throw new Error(`Missing finding ${i} on ${card.cardId}`);
    f.ownerVerdict = d.ownerVerdict;
    f.ownerFinalEn = d.ownerFinalEn;
    f.ownerNote = d.ownerNote;
    block3Resolved++;
  }
}

const block3Cards = data.cards.filter((c) => c.sequence >= 21 && c.sequence <= 30);
const pendingInBlock = block3Cards.flatMap((c) =>
  c.findings.filter((f) => f.ownerVerdict === "PENDING")
);
if (pendingInBlock.length) {
  console.error("PENDING remaining in block 3:", pendingInBlock.length);
  process.exit(1);
}

const block1Resolved = data.ownerReviewBlock1?.findingsOwnerResolved ?? 34;
const block2Resolved = data.ownerReviewBlock2?.findingsOwnerResolved ?? 37;
data.ownerReviewBlock3 = {
  block: "3/5",
  cardsReviewed: 10,
  labot: 10,
  nelabot: 0,
  findingsOwnerResolved: block3Resolved,
  pendingInBlock3: 0,
  completedAt: new Date().toISOString(),
};
data.ownerDecisionsMade = block1Resolved + block2Resolved + block3Resolved;

fs.writeFileSync(JSON_PATH, JSON.stringify(data, null, 2));

// Patch MD: replace card sections 21–30
const md = fs.readFileSync(MD_PATH, "utf8");
const startMarker = "## 21 —";
const endMarker = "## 31 —";
const startIdx = md.indexOf(startMarker);
const endIdx = md.indexOf(endMarker);
if (startIdx < 0 || endIdx < 0) {
  console.error("Could not find MD section boundaries");
  process.exit(1);
}

const newSections = block3Cards.map((c) => formatCardMd(c)).join("\n");
const newMd = md.slice(0, startIdx) + newSections + "\n" + md.slice(endIdx);
fs.writeFileSync(MD_PATH, newMd);

console.log(
  JSON.stringify(
    {
      cardsReviewed: 10,
      labot: 10,
      nelabot: 0,
      findingsOwnerResolved: block3Resolved,
      cumulativeFindingsOwnerResolved: data.ownerDecisionsMade,
      pendingInBlock3: 0,
      productionChanges: 0,
    },
    null,
    2
  )
);
