#!/usr/bin/env node
/**
 * Record OWNER decisions — HIGH #11 block 2/5 (cards 11–20).
 * READ-ONLY production — updates review artifacts only.
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..", "..");
const JSON_PATH = path.join(ROOT, "reports/temp/en-b1-high-owner-review-11.json");
const MD_PATH = path.join(ROOT, "reports/en-b1-high-owner-review-11.md");

/** cardId -> finding index (0-based) -> decision */
const DECISIONS = {
  "b1-daran": [
    {
      ownerVerdict: "LABOT",
      ownerFinalEn:
        "daran is not a place word. It refers to a thing, thought, or action mentioned above.",
      ownerNote:
        "Apstiprināt meaning repair. Pievienot dabisku angļu pieturzīmi.",
    },
    {
      ownerVerdict: "LABOT",
      ownerFinalEn: "To, on",
      ownerNote:
        "Neizgudrot jaunu comparison tekstu. Accent target jāņem no faktiskā production comparison[1].meaning pēc precondition pārbaudes.",
    },
    {
      ownerVerdict: "LABOT",
      ownerFinalEn: "not a place word",
      ownerNote:
        "Dzēst neeksistējošos “there” accent targets un izcelt faktiski esošo mācību kontrastu.",
    },
  ],
  "b1-darstellen": [
    {
      ownerVerdict: "LABOT",
      ownerFinalEn: "She plays a doctor.",
      ownerNote: "Viņa attēlo/tēlo vienu ārstu.",
    },
    {
      ownerVerdict: "LABOT",
      ownerFinalEn:
        "Data, graphs, situations, and roles can be represented with darstellen; sich vorstellen = to introduce yourself.",
      ownerNote:
        "Pilnībā novākt LV/German mixed-language fragmentu un skaidri saglabāt darstellen / sich vorstellen kontrastu.",
    },
    {
      ownerVerdict: "LABOT",
      ownerFinalEn: "plays",
      ownerNote: "Izcelt target darbību, nevis subject “She”.",
    },
  ],
  "b1-decken": [
    {
      ownerVerdict: "LABOT",
      ownerFinalEn:
        "Look at the object: Tisch decken, Kosten decken, Straße mit Schnee decken.",
      ownerNote: "LV sākums jāpārtulko; vācu piemērus saglabāt.",
    },
    {
      ownerVerdict: "LABOT",
      ownerFinalEn:
        "Tisch decken does not literally mean “to cover the table”; it means “to set the table.” Kosten decken = to cover costs.",
      ownerNote:
        "Esošais teksts pats sev pretrunā un nepareizi izskaidro literal meaning.",
    },
  ],
  "b1-dienen": [
    {
      ownerVerdict: "LABOT",
      ownerFinalEn:
        "Main idea: dienen means to serve or to be useful for a purpose. With als, it means “to serve as.”",
      ownerNote: "Luna recommendation ir korekts.",
    },
    {
      ownerVerdict: "LABOT",
      ownerFinalEn: "dienen als = to serve as; dienen zu = to serve a purpose.",
      ownerNote: "Labot “dien” typo un nepareizo “useful to someone”.",
    },
    {
      ownerVerdict: "LABOT",
      ownerFinalEn:
        "dienen is not usually used to mean “to help someone”; “to help” is usually helfen.",
      ownerNote: "Korekts dienen / helfen kontrasts.",
    },
    {
      ownerVerdict: "LABOT",
      ownerFinalEn: "serve, useful",
      ownerNote: "“Main” nav mācāmā nozīme.",
    },
  ],
  "b1-durchführen": [
    {
      ownerVerdict: "LABOT",
      ownerFinalEn:
        "Main idea: durchführen means to carry out or implement a planned action. It is used with inspections, repairs, experiments, and events.",
      ownerNote:
        "“gebieben” ir korumpēts headword; noņemt arī “carry out or carry out” atkārtojumu.",
    },
    {
      ownerVerdict: "LABOT",
      ownerFinalEn: "Inspection, repair, experiment → durchführen.",
      ownerNote:
        "Learner explanation terminiem jābūt EN; vācu target lemma saglabāt.",
    },
    {
      ownerVerdict: "LABOT",
      ownerFinalEn:
        "durchführen does not literally mean “to lead through”; in B1 texts it usually means “to carry out”.",
      ownerNote: "“gerünfung” ir korumpēts headword.",
    },
    {
      ownerVerdict: "LABOT",
      ownerFinalEn: "REMOVE DUPLICATE ACCENT",
      ownerNote: "Tekstā ir tikai viens matching “are”.",
    },
    {
      ownerVerdict: "LABOT",
      ownerFinalEn: "Inspection",
      ownerNote:
        "Pēc tip teksta labošanas “durchführen” joprojām ir vācu target lemma un to nevajag izmantot kā EN accent target. Izcelt pirmo EN activity noun “Inspection”.",
    },
    {
      ownerVerdict: "LABOT",
      ownerFinalEn: "carry out",
      ownerNote:
        "Aizstāt korumpēto “gerünfung” ar faktiski esošo EN target meaning.",
    },
  ],
  "b1-einbrechen": [
    {
      ownerVerdict: "LABOT",
      ownerFinalEn:
        "Crime + house → einbrechen = break into; roof → cave in; night → fall.",
      ownerNote:
        "Trīs einbrechen lietojumi: ielauzties, iebrukt/sabrukt konstrukcijai, iestāties naktij.",
    },
    {
      ownerVerdict: "LABOT",
      ownerFinalEn:
        "einbrechen usually does not mean “break into an object” but “break into a place”. With parts of buildings, it means “cave in” or “collapse”.",
      ownerNote: "“invade” šajā konstrukcijas nozīmē ir nepareizi.",
    },
    {
      ownerVerdict: "LABOT",
      ownerFinalEn: "REMOVE DUPLICATE ACCENT",
      ownerNote: null,
    },
    {
      ownerVerdict: "LABOT",
      ownerFinalEn: "REMOVE DUPLICATE ACCENT",
      ownerNote: "Nav otra un trešā matching “Main”.",
    },
    {
      ownerVerdict: "LABOT",
      ownerFinalEn: "break into",
      ownerNote: "Aizstāt LV “ielauzties”.",
    },
    {
      ownerVerdict: "LABOT",
      ownerFinalEn: "cave in",
      ownerNote: "Aizstāt LV “iebrukt”.",
    },
    {
      ownerVerdict: "LABOT",
      ownerFinalEn: "fall",
      ownerNote:
        "“To join” ir nepareizs un tekstā neeksistē. Pēc tip repair faktiskā night meaning ir “fall”.",
    },
  ],
  "b1-eindeutig": [
    {
      ownerVerdict: "LABOT",
      ownerFinalEn:
        "Main idea: eindeutig means clear and unambiguous when there is no doubt or more than one possible interpretation. This is not the same as einfach = simple.",
      ownerNote: "Izlabot “einveitt” un padarīt explanation loģiski precīzu.",
    },
    {
      ownerVerdict: "LABOT",
      ownerFinalEn:
        "If there is no doubt about the meaning or the result, use eindeutig.",
      ownerNote: "Labot “einteigt”.",
    },
    {
      ownerVerdict: "LABOT",
      ownerFinalEn:
        "eindeutig is not einfach: eindeutig = unambiguous, einfach = simple.",
      ownerNote: "Esošais kontrasts ir korumpēts.",
    },
  ],
  "b1-einerlei": [
    {
      ownerVerdict: "LABOT",
      ownerFinalEn:
        "Main idea: einerlei means “no matter” or “it doesn’t matter”. It sounds more formal or old-fashioned than everyday egal.",
      ownerNote: "Labot “einerle”.",
    },
    {
      ownerVerdict: "LABOT",
      ownerFinalEn:
        "egal is more common in everyday speech; recognize einerlei as a more formal way of saying “it doesn’t matter”.",
      ownerNote:
        "Šis ir dabiskāks par auditā piedāvāto “a more formal no matter”.",
    },
    {
      ownerVerdict: "LABOT",
      ownerFinalEn:
        "einerlei is not common in colloquial speech; in everyday conversation, it is safer to use egal.",
      ownerNote: "Labot headword un nedabisko “speaking”.",
    },
    {
      ownerVerdict: "LABOT",
      ownerFinalEn: "it doesn’t matter",
      ownerNote:
        "Aizstāt LV “vienalga” ar faktiski esošu EN target phrase pēc tip teksta labošanas.",
    },
  ],
  "b1-einfallen": [
    {
      ownerVerdict: "LABOT",
      ownerFinalEn:
        "Do not say “ich falle eine Idee ein”. The correct form is: Mir fällt eine Idee ein.",
      ownerNote: "Novākt LV “Nesaki / Pareizi”.",
    },
    {
      ownerVerdict: "LABOT",
      ownerFinalEn: "occurs to me",
      ownerNote:
        "Esošajā tip tekstā ir “something occurs to me”; “comes to mind” tur neeksistē.",
    },
  ],
  "b1-einfluss": [
    {
      ownerVerdict: "LABOT",
      ownerFinalEn:
        "Main idea: der Einfluss means influence on a person, decision, or situation. A very common construction is Einfluss auf + accusative.",
      ownerNote:
        "Neizmantot Luna “+ what?”. Pedagoģiski pareizā informācija ir vācu konstrukcija “Einfluss auf + Akkusativ”, angliski “+ accusative”.",
    },
    {
      ownerVerdict: "LABOT",
      ownerFinalEn: "Effect / impact",
      ownerNote: "Wirkung šeit nozīmē effect/impact, nevis exposure.",
    },
    {
      ownerVerdict: "LABOT",
      ownerFinalEn: "Effect, impact",
      ownerNote: "Highlight jāsakrīt ar izlaboto comparison meaning.",
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
let block2Resolved = 0;

for (const card of data.cards) {
  const decisions = DECISIONS[card.cardId];
  if (!decisions) continue;
  if (card.sequence < 11 || card.sequence > 20) {
    throw new Error(`Card ${card.cardId} has decisions but sequence ${card.sequence} outside block 2`);
  }

  card.ownerCardVerdict = "LABOT";

  for (let i = 0; i < decisions.length; i++) {
    const d = decisions[i];
    const f = card.findings[i];
    if (!f) throw new Error(`Missing finding ${i} on ${card.cardId}`);
    f.ownerVerdict = d.ownerVerdict;
    f.ownerFinalEn = d.ownerFinalEn;
    f.ownerNote = d.ownerNote;
    block2Resolved++;
  }
}

const block2Cards = data.cards.filter((c) => c.sequence >= 11 && c.sequence <= 20);
const pendingInBlock = block2Cards.flatMap((c) =>
  c.findings.filter((f) => f.ownerVerdict === "PENDING")
);
if (pendingInBlock.length) {
  console.error("PENDING remaining in block 2:", pendingInBlock.length);
  process.exit(1);
}

const block1Resolved = data.ownerReviewBlock1?.findingsOwnerResolved ?? 34;
data.ownerReviewBlock2 = {
  block: "2/5",
  cardsReviewed: 10,
  labot: 10,
  nelabot: 0,
  findingsOwnerResolved: block2Resolved,
  pendingInBlock2: 0,
  completedAt: new Date().toISOString(),
};
data.ownerDecisionsMade = block1Resolved + block2Resolved;

fs.writeFileSync(JSON_PATH, JSON.stringify(data, null, 2));

// Patch MD: replace card sections 11–20
const md = fs.readFileSync(MD_PATH, "utf8");
const startMarker = "## 11 —";
const endMarker = "## 21 —";
const startIdx = md.indexOf(startMarker);
const endIdx = md.indexOf(endMarker);
if (startIdx < 0 || endIdx < 0) {
  console.error("Could not find MD section boundaries");
  process.exit(1);
}

const newSections = block2Cards.map((c) => formatCardMd(c)).join("\n");
const newMd = md.slice(0, startIdx) + newSections + "\n" + md.slice(endIdx);
fs.writeFileSync(MD_PATH, newMd);

console.log(
  JSON.stringify(
    {
      cardsReviewed: 10,
      labot: 10,
      nelabot: 0,
      findingsOwnerResolved: block2Resolved,
      cumulativeFindingsOwnerResolved: data.ownerDecisionsMade,
      pendingInBlock2: 0,
      productionChanges: 0,
    },
    null,
    2
  )
);
