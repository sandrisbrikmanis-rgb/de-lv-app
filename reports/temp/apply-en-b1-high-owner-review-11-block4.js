#!/usr/bin/env node
/**
 * Record OWNER decisions — HIGH #11 block 4/5 (cards 31–40).
 * READ-ONLY production — updates review artifacts only.
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..", "..");
const JSON_PATH = path.join(ROOT, "reports/temp/en-b1-high-owner-review-11.json");
const MD_PATH = path.join(ROOT, "reports/en-b1-high-owner-review-11.md");

/** cardId -> finding index (0-based) -> decision */
const DECISIONS = {
  "b1-einsetzen": [
    {
      ownerVerdict: "LABOT",
      ownerFinalEn: "the technology or equipment is used",
      ownerNote:
        "Technik šajā kontekstā nav “technique”; “technology or equipment” ir precīzāk.",
    },
    {
      ownerVerdict: "LABOT",
      ownerFinalEn:
        "Look at the object: use technology, assign a player, or say that rain begins.",
      ownerNote:
        "Pilnībā novākt LV/German mixed-language learner-facing tekstu un saglabāt trīs einsetzen nozīmju tipus.",
    },
    {
      ownerVerdict: "LABOT",
      ownerFinalEn: "one-size-fits-all",
      ownerNote: "Tieša spelling kļūda.",
    },
    {
      ownerVerdict: "LABOT",
      ownerFinalEn: "use technology",
      ownerNote:
        "Accent target jābūt faktiskā EN tip teksta fragmentam.",
    },
  ],
  "b1-eintreten": [
    {
      ownerVerdict: "LABOT",
      ownerFinalEn: "eintreten means to enter, join, or occur.",
      ownerNote:
        "Novākt dubulto “enter” un parādīt trīs galvenās lietojuma nozīmes.",
    },
    {
      ownerVerdict: "LABOT",
      ownerFinalEn: "Enter / join",
      ownerNote:
        "Abām comparison nozīmēm nedrīkst būt viens un tas pats tulkojums.",
    },
    {
      ownerVerdict: "LABOT",
      ownerFinalEn:
        "For entering a room, use eintreten; for joining an organisation, use eintreten or beitreten; consequences can eintreten = occur.",
      ownerNote:
        "Luna pamatdoma pareiza, bet OWNER FINAL saglabā vācu target formas un vienlaikus skaidri iztulko nozīmi.",
    },
    {
      ownerVerdict: "LABOT",
      ownerFinalEn: "the effect occurs",
      ownerNote: "“occur” ir dabiskā collocation.",
    },
    {
      ownerVerdict: "LABOT",
      ownerFinalEn: "Keep only one matching “Main” accent.",
      ownerNote:
        "Tekstā “Main” occurrence ir tikai viens. Neizgudrot papildu accent targets šajā finding.",
    },
    {
      ownerVerdict: "LABOT",
      ownerFinalEn: "consequences",
      ownerNote: "LV token aizstāt ar faktiski esošo EN target.",
    },
  ],
  "b1-empfangen": [
    {
      ownerVerdict: "LABOT",
      ownerFinalEn: "Receive in everyday situations",
      ownerNote: "Esošais fragments ir gramatiski nepilnīgs.",
    },
    {
      ownerVerdict: "LABOT",
      ownerFinalEn:
        "Use empfangen for receiving a message or signal; with people, it means to receive or welcome them.",
      ownerNote:
        "“empfangen of” nav gramatisks. Saglabāt receive/welcome person nozīmi.",
    },
    {
      ownerVerdict: "LABOT",
      ownerFinalEn:
        "With guests, empfangen means welcoming or receiving them, not simply receiving something.",
      ownerNote:
        "Esošais repeated “receiving” nedod nekādu kontrastu.",
    },
    {
      ownerVerdict: "LABOT",
      ownerFinalEn: "welcome",
      ownerNote:
        "“To admit” maina nozīmi. Highlight jābūt faktiskajai empfangen nozīmei cilvēku kontekstā.",
    },
  ],
  "b1-entfernen": [
    {
      ownerVerdict: "LABOT",
      ownerFinalEn: "remove, delete, or take something away from a place",
      ownerNote:
        "Novākt repeated “remove”; “take away” saglabā telpisko nozīmi.",
    },
    {
      ownerVerdict: "LABOT",
      ownerFinalEn: "Take away",
      ownerNote: "wegnehmen = take away, nevis parasti take off.",
    },
    {
      ownerVerdict: "LABOT",
      ownerFinalEn: "Remove an object; sich entfernen means to move away.",
      ownerNote: "Dabiskāka learner-facing angļu valoda.",
    },
  ],
  "b1-enthalten": [
    {
      ownerVerdict: "LABOT",
      ownerFinalEn:
        "Main idea: enthalten means to contain or include something as part of a whole.",
      ownerNote: "Novākt “contain or contain”.",
    },
    {
      ownerVerdict: "LABOT",
      ownerFinalEn:
        "When the idea is “it is inside or included”, German often uses enthalten.",
      ownerNote:
        "“der enthalten” ir nepareiza vācu forma learner-facing EN laukā.",
    },
    {
      ownerVerdict: "LABOT",
      ownerFinalEn:
        "enthalten is not halten. halten = hold; enthalten = to contain or include.",
      ownerNote:
        "Izlabot gan gramatisko fragmentu, gan repeated meaning.",
    },
  ],
  "b1-entsprechen": [
    {
      ownerVerdict: "LABOT",
      ownerFinalEn:
        "Main idea: entsprechen means to meet requirements, rules, a plan, or expectations. In German, it requires the dative: dem Plan, den Regeln, unseren Erwartungen.",
      ownerNote:
        "Labot korumpēto target “mechnen”, “Erwantungen” → “Erwartungen” un pieturzīmes.",
    },
    {
      ownerVerdict: "LABOT",
      ownerFinalEn: "The result does not correspond to the truth.",
      ownerNote:
        "Saglabāt entsprechen nozīmi “correspond to”, nevis vienkārši “is not true”.",
    },
    {
      ownerVerdict: "LABOT",
      ownerFinalEn:
        "entsprechen asks “corresponds to what?” — in German, the answer is in the dative.",
      ownerNote: "“matchen” ir nepareizais learner target.",
    },
    {
      ownerVerdict: "LABOT",
      ownerFinalEn:
        "Do not confuse entsprechen with antworten: entsprechen = correspond, antworten = answer.",
      ownerNote:
        "Gan vācu target, gan meaning pašreiz ir korumpēti.",
    },
    {
      ownerVerdict: "LABOT",
      ownerFinalEn: "Main",
      ownerNote:
        "Atstāt tikai vienu “Main” highlight, jo tekstā ir tikai viens matching occurrence.",
    },
  ],
  "b1-entstehen": [
    {
      ownerVerdict: "LABOT",
      ownerFinalEn:
        "Main idea: entstehen means to arise or come into being as a result of a process.",
      ownerNote:
        "Target vārdam jābūt entstehen, un “come into being” precīzi izsaka rašanās procesu.",
    },
    {
      ownerVerdict: "LABOT",
      ownerFinalEn:
        "If the focus is on something developing or coming into being during a process, use entstehen.",
      ownerNote:
        "“gegen” ir pilnīgi nepareizs target. OWNER FINAL ir dabiskāks nekā mehāniskais “if the main thing is the result”.",
    },
    {
      ownerVerdict: "LABOT",
      ownerFinalEn:
        "entstehen does not mean that someone deliberately creates something; schaffen is more suitable for deliberate creation.",
      ownerNote: "Labot target un nepareizo “der schaffen”.",
    },
    {
      ownerVerdict: "LABOT",
      ownerFinalEn:
        "Keep one matching “Main” accent and remove the duplicate “Main” targets; preserve only accent targets that actually occur in the corrected text.",
      ownerNote:
        "Neizgudrot neesošu “To” target, ja pēc OWNER FINAL explanation tas tekstā vairs nav.",
    },
  ],
  "b1-eröffnen": [
    {
      ownerVerdict: "LABOT",
      ownerFinalEn:
        "You use eröffnen for an account, an exhibition, or a meeting; you use öffnen for a door.",
      ownerNote:
        "Pašreizējais teksts ir sajaukts LV/EN/bojātā DE valodā. Saglabāt svarīgo eröffnen / öffnen kontrastu.",
    },
    {
      ownerVerdict: "LABOT",
      ownerFinalEn: "account, exhibition, meeting, door",
      ownerNote:
        "Visiem accent targets jābūt faktiski esošiem EN vārdiem no izlabotā tip teksta.",
    },
  ],
  "b1-erscheinen": [
    {
      ownerVerdict: "LABOT",
      ownerFinalEn:
        "A publication erscheint = appears or comes out; a person erscheint zum Termin = arrives at an appointment.",
      ownerNote:
        "Saglabāt erscheinen piemērus, bet izlabot malformed “man” konstrukciju.",
    },
    {
      ownerVerdict: "LABOT",
      ownerFinalEn: "comes out, arrives",
      ownerNote: "LV “ierodas” aizstāt ar matching EN tokenu.",
    },
  ],
  "b1-ersetzen": [
    {
      ownerVerdict: "LABOT",
      ownerFinalEn: "Schaden ersetzen means to compensate for damages.",
      ownerNote: "“ersensen” → “ersetzen”.",
    },
    {
      ownerVerdict: "LABOT",
      ownerFinalEn:
        "If something takes the place of something else, use ersetzen.",
      ownerNote: "Tiešs target spelling repair.",
    },
    {
      ownerVerdict: "LABOT",
      ownerFinalEn:
        "Schaden ersetzen means to compensate for the loss, not to “replace the damage”.",
      ownerNote:
        "Labot target spelling un dabisko collocation “compensate for”.",
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
let block4Resolved = 0;

for (const card of data.cards) {
  const decisions = DECISIONS[card.cardId];
  if (!decisions) continue;
  if (card.sequence < 31 || card.sequence > 40) {
    throw new Error(
      `Card ${card.cardId} has decisions but sequence ${card.sequence} outside block 4`
    );
  }

  card.ownerCardVerdict = "LABOT";

  for (let i = 0; i < decisions.length; i++) {
    const d = decisions[i];
    const f = card.findings[i];
    if (!f) throw new Error(`Missing finding ${i} on ${card.cardId}`);
    f.ownerVerdict = d.ownerVerdict;
    f.ownerFinalEn = d.ownerFinalEn;
    f.ownerNote = d.ownerNote;
    block4Resolved++;
  }
}

const block4Cards = data.cards.filter((c) => c.sequence >= 31 && c.sequence <= 40);
const pendingInBlock = block4Cards.flatMap((c) =>
  c.findings.filter((f) => f.ownerVerdict === "PENDING")
);
if (pendingInBlock.length) {
  console.error("PENDING remaining in block 4:", pendingInBlock.length);
  process.exit(1);
}

const block1Resolved = data.ownerReviewBlock1?.findingsOwnerResolved ?? 34;
const block2Resolved = data.ownerReviewBlock2?.findingsOwnerResolved ?? 37;
const block3Resolved = data.ownerReviewBlock3?.findingsOwnerResolved ?? 27;
data.ownerReviewBlock4 = {
  block: "4/5",
  cardsReviewed: 10,
  labot: 10,
  nelabot: 0,
  findingsOwnerResolved: block4Resolved,
  pendingInBlock4: 0,
  completedAt: new Date().toISOString(),
};
data.ownerDecisionsMade =
  block1Resolved + block2Resolved + block3Resolved + block4Resolved;

fs.writeFileSync(JSON_PATH, JSON.stringify(data, null, 2));

// Patch MD: replace card sections 31–40
const md = fs.readFileSync(MD_PATH, "utf8");
const startMarker = "## 31 —";
const endMarker = "## 41 —";
const startIdx = md.indexOf(startMarker);
const endIdx = md.indexOf(endMarker);
if (startIdx < 0 || endIdx < 0) {
  console.error("Could not find MD section boundaries");
  process.exit(1);
}

const newSections = block4Cards.map((c) => formatCardMd(c)).join("\n");
const newMd = md.slice(0, startIdx) + newSections + "\n" + md.slice(endIdx);
fs.writeFileSync(MD_PATH, newMd);

console.log(
  JSON.stringify(
    {
      cardsReviewed: 10,
      labot: 10,
      nelabot: 0,
      findingsOwnerResolved: block4Resolved,
      cumulativeFindingsOwnerResolved: data.ownerDecisionsMade,
      pendingInBlock4: 0,
      productionChanges: 0,
    },
    null,
    2
  )
);
