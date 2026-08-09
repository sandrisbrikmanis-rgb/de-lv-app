#!/usr/bin/env node
/**
 * Record OWNER decisions — HIGH #11 block 1/5 (cards 01–10).
 * READ-ONLY production — updates review artifacts only.
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..", "..");
const JSON_PATH = path.join(ROOT, "reports/temp/en-b1-high-owner-review-11.json");
const MD_PATH = path.join(ROOT, "reports/en-b1-high-owner-review-11.md");

/** cardId -> finding index (0-based) -> decision */
const DECISIONS = {
  "b1-bestimmen": [
    {
      ownerVerdict: "LABOT",
      ownerFinalEn: "Determine / designate",
      ownerNote:
        "“predict” nav bestimmen šīs comparison nozīmes ekvivalents; “designate” saglabā nozīmi “noteikt / izraudzīties”.",
    },
    {
      ownerVerdict: "LABOT",
      ownerFinalEn: "Usually use bestimmen.",
      ownerNote:
        "“bestimnen” ir bojāta forma, artikuls “der” darbības vārdam nav pieļaujams, un pilns angļu teikums ir dabiskāks par fragmentu “usually bestimmen”.",
    },
    {
      ownerVerdict: "LABOT",
      ownerFinalEn: "price, dose",
      ownerNote:
        "Latviešu accent targets jāaizstāj ar precīziem EN tokeniem no learner-facing tip teksta.",
    },
  ],
  "b1-bewegen": [
    {
      ownerVerdict: "LABOT",
      ownerFinalEn:
        "Move an object → bewegen; move yourself → sich bewegen; emotions → bewegt.",
      ownerNote: "Pilns learner-facing tip pašlaik ir jauktā LV/DE valodā.",
    },
    {
      ownerVerdict: "LABOT",
      ownerFinalEn: "Without sich, bewegen usually means “to move something”.",
      ownerNote:
        "“Bez” ir LV atlikums. Vienlaikus saglabāt precīzu kontrastu starp bewegen un sich bewegen.",
    },
    {
      ownerVerdict: "LABOT",
      ownerFinalEn: "Move an object, move yourself, emotions",
      ownerNote: "Izmantot tikai faktiskajā EN tip tekstā eksistējošus target fragmentus.",
    },
  ],
  "b1-beziehen": [
    {
      ownerVerdict: "LABOT",
      ownerFinalEn: "The",
      ownerNote:
        "Trīs identiski “The” targets neatbilst vienam faktiskajam occurrence. Šajā repair neizdomāt citus accent targets.",
    },
    {
      ownerVerdict: "LABOT",
      ownerFinalEn: "Receive, move in",
      ownerNote: "Abām beziehen nozīmēm nedrīkst būt viens un tas pats highlight.",
    },
    {
      ownerVerdict: "LABOT",
      ownerFinalEn: "refer to",
      ownerNote: "LV token jāaizstāj ar atbilstošo EN learner-facing target.",
    },
  ],
  "b1-bildschirm": [
    {
      ownerVerdict: "LABOT",
      ownerFinalEn:
        "Main idea: der Bildschirm is a screen—the display surface of a computer monitor, phone, tablet, or television. Plural: die Bildschirme.",
      ownerNote:
        "Izlabot gan lemma “Bildschimmer”, gan nepareizo plural “Bildschimmer”.",
    },
    {
      ownerVerdict: "LABOT",
      ownerFinalEn: "der Bildschirm = screen. Plural: die Bildschirme.",
      ownerNote: "Pareizais plural ir die Bildschirme.",
    },
  ],
  "b1-bieten": [
    {
      ownerVerdict: "LABOT",
      ownerFinalEn:
        "Main idea: bieten means to offer or provide something as an opportunity, service, or benefit. anbieten more often means to actively offer something to someone in particular.",
      ownerNote: "“Beet” ir kļūdains target word; otrajā teikumā trūkst objekta.",
    },
    {
      ownerVerdict: "LABOT",
      ownerFinalEn: "Offer something to someone specific",
      ownerNote: "Nepieciešams objekts “something”.",
    },
    {
      ownerVerdict: "LABOT",
      ownerFinalEn:
        "bieten often describes what a place, programme, or service provides; anbieten places more emphasis on actively offering something to someone.",
      ownerNote:
        "“offering assets” ir semantiski maldinošs, “emphasizes more on” — negramatisks.",
    },
    {
      ownerVerdict: "LABOT",
      ownerFinalEn: "offers",
      ownerNote:
        "Highlight target jābūt mācāmajai nozīmei, nevis artikulam “The”.",
    },
    {
      ownerVerdict: "LABOT",
      ownerFinalEn: "offers",
      ownerNote:
        "Accentā izmantot EN tokenu, kas reāli eksistē learner-facing tekstā.",
    },
  ],
  "b1-block": [
    {
      ownerVerdict: "LABOT",
      ownerFinalEn: "block, notepad, lump",
      ownerNote:
        "Accent targets jābūt tikai EN tokeniem un tiem jāatspoguļo kartītē skaidrotās Block nozīmes.",
    },
  ],
  "b1-bogen": [
    {
      ownerVerdict: "LABOT",
      ownerFinalEn: "Bow",
      ownerNote:
        "Šīs kartītes LV source ir “loks”, un konkrētās kartītes pamata nozīme ir bow. Front translation un study.translation nedrīkst konfliktēt.",
    },
    {
      ownerVerdict: "LABOT",
      ownerFinalEn: "bow",
      ownerNote: "Highlight mācāmo Bogen nozīmi, nevis “The”.",
    },
    {
      ownerVerdict: "LABOT",
      ownerFinalEn: "arch",
      ownerNote: "Šajā piemērā Bogen nozīme ir “arch”.",
    },
    {
      ownerVerdict: "LABOT",
      ownerFinalEn: "form",
      ownerNote: "Šajā piemērā Bogen nozīme ir “form”, nevis “Please”.",
    },
  ],
  "b1-dadurch": [
    {
      ownerVerdict: "LABOT",
      ownerFinalEn:
        "Main idea: dadurch means thus or thereby. It links the cause mentioned above with its effect.",
      ownerNote: "“deruch” ir bojāta lemma.",
    },
    {
      ownerVerdict: "LABOT",
      ownerFinalEn:
        "dadurch refers to the action or situation mentioned above, not simply to a place.",
      ownerNote:
        "Izlabot lemma un artikulu “the place” uz dabisko “a place”.",
    },
    {
      ownerVerdict: "LABOT",
      ownerFinalEn: "thus, thereby",
      ownerNote:
        "Pedagoģiski izcelt dadurch angļu nozīmes, nevis heading “Main”.",
    },
  ],
  "b1-daher": [
    {
      ownerVerdict: "LABOT",
      ownerFinalEn:
        "When linking a cause to its result, daher is usually translated as “therefore”.",
      ownerNote:
        "“because” izsaka cēloni; daher šeit izsaka rezultātu.",
    },
    {
      ownerVerdict: "LABOT",
      ownerFinalEn:
        "daher can also mean “from there”, but as a core meaning it is better to learn “therefore”.",
      ownerNote:
        "Saglabāt sekundāro “from there” nozīmi, bet neiemācīt kļūdaino “because”.",
    },
    {
      ownerVerdict: "LABOT",
      ownerFinalEn: "It's",
      ownerNote: "Tekstā ir tikai viens atbilstošs occurrence.",
    },
    {
      ownerVerdict: "LABOT",
      ownerFinalEn: "there",
      ownerNote:
        "Šajā piemērā jāmāca daher telpiskā nozīme “from there / there”, nevis subject/article elements.",
    },
  ],
  "b1-dahin": [
    {
      ownerVerdict: "LABOT",
      ownerFinalEn: "There / to there",
      ownerNote:
        "“Cont” nav angļu tulkojums. Front translation un study.translation jāsakrīt.",
    },
    {
      ownerVerdict: "LABOT",
      ownerFinalEn:
        "Main idea: dahin means “there” or “to there”. In a figurative sense, es ist dahin means that something is gone or lost.",
      ownerNote:
        "Noņemt dubultojumu un korekti izskaidrot figuratīvo nozīmi.",
    },
    {
      ownerVerdict: "LABOT",
      ownerFinalEn: "My hope is gone.",
      ownerNote: "Figuratīvais “dahin” nozīmē “gone/lost”.",
    },
    {
      ownerVerdict: "LABOT",
      ownerFinalEn: "There / to there / gone",
      ownerNote: "Trīs faktiskās mācāmās nozīmes.",
    },
    {
      ownerVerdict: "LABOT",
      ownerFinalEn:
        "dahin indicates direction to a place, while dort indicates location. Es ist dahin = it is gone.",
      ownerNote:
        "Izlabot gan “I ist dahin”, gan absurdi burtisko “for the yard”.",
    },
    {
      ownerVerdict: "LABOT",
      ownerFinalEn: "there, to there, gone",
      ownerNote:
        "Šeit ne tikai jāizņem duplicate “Main”; pedagoģiski pareizāk ir izcelt trīs tatsächlich mācāmās dahin nozīmes.",
    },
  ],
};

const ASSOCIATED_LV = {
  "b1-bogen": {
    field: "lv",
    currentEn: "Circle",
    ownerFinalEn: "Bow",
    ownerNote: "Front translation un study.translation nedrīkst konfliktēt.",
  },
  "b1-dahin": {
    field: "lv",
    currentEn: "Cont",
    ownerFinalEn: "There / to there",
    ownerNote: "Front translation un study.translation jāsakrīt.",
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
    `OWNER NOTE: ${f.ownerNote}`,
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
let findingsResolved = 0;

for (const card of data.cards) {
  const decisions = DECISIONS[card.cardId];
  if (!decisions) continue;

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

data.ownerReviewBlock1 = {
  block: "1/5",
  cardsReviewed: 10,
  labot: 10,
  nelabot: 0,
  findingsOwnerResolved: findingsResolved,
  pendingInBlock1: 0,
  completedAt: new Date().toISOString(),
};
data.ownerDecisionsMade = findingsResolved;

fs.writeFileSync(JSON_PATH, JSON.stringify(data, null, 2));

// Patch MD: replace card sections 01–10
const md = fs.readFileSync(MD_PATH, "utf8");
const startMarker = "## 01 —";
const endMarker = "## 11 —";
const startIdx = md.indexOf(startMarker);
const endIdx = md.indexOf(endMarker);
if (startIdx < 0 || endIdx < 0) {
  console.error("Could not find MD section boundaries");
  process.exit(1);
}

const newSections = block1Cards.map((c) => formatCardMd(c)).join("\n");
const newMd = md.slice(0, startIdx) + newSections + "\n" + md.slice(endIdx);
fs.writeFileSync(MD_PATH, newMd);

console.log(
  JSON.stringify(
    {
      cardsReviewed: 10,
      labot: 10,
      nelabot: 0,
      findingsOwnerResolved: findingsResolved,
      pendingInBlock1: 0,
      productionChanges: 0,
    },
    null,
    2
  )
);
