#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");

const outPath = path.join(__dirname, "data/g2-a1-owner-pending/LRB-001-decisions.json");

function labot(ownerNew, note) {
  return {
    owner_status: "DECIDED",
    owner_decision: "LABOT",
    owner_new: typeof ownerNew === "string" ? ownerNew : JSON.stringify(ownerNew),
    owner_note: note,
  };
}

function nelabot(note) {
  return {
    owner_status: "DECIDED",
    owner_decision: "NELABOT",
    owner_new: "",
    owner_note: note,
  };
}

const decisions = {
  // ── BG (22) ─────────────────────────────────────────────────────────
  "g2/a1/bg|a1-uhr|a1.card.a1-uhr.study.examples[5].native|MULTI_TRANSLATION|deterministic/multi-translation":
    nelabot("BG a1-uhr examples[5].native: field absent; no writable target. DE untouched."),

  "g2/a1/bg|also|idx:26|study.examples[1].lv; study.examples[2].lv|MISTRANSLATION|gpt-5.6-luna":
    nelabot("BG also examples[1–2].lv: cited paths null in production; non-actionable. DE untouched."),

  "g2/a1/bg|auch|idx:48|study.examples[1].lv; study.examples[2].lv|MISTRANSLATION|gpt-5.6-luna":
    nelabot("BG auch examples[1–2].lv: target fields absent; non-actionable. DE untouched."),

  "g2/a1/bg|auf|idx:49|study.comparison[1]; study.examples[1].lv|CONTENT_ERROR|gpt-5.6-luna":
    nelabot("BG auf comparison[1]/examples[1].lv: cited paths absent or non-actionable. DE untouched."),

  "g2/a1/bg|aufs|idx:60|study.explanation[2]; study.important[0]; study.important[2]; study.important[3]; study.examples[6].lv|CONTENT_ERROR|gpt-5.6-luna":
    labot(
      {
        lv: "До (накъде?)",
        "study.translation": "До (накъде?)",
        "study.explanation": [
          "Aufs е съкращение от предлога auf и члена das.",
          "Пълна форма: auf das (накъде?).",
          "Използва се с неутрални съществителни в единствено число — Wohin? (накъде?), не Wo? (къде?).",
          "Често се използва при движение: за изкачване, сядане, поставяне, шофиране до нещо.",
          "В разговорната реч почти винаги се използва aufs вместо пълното auf das.",
        ],
        "study.comparison[0].meaning": "накъде? (Akkusativ, neuter sg.)",
        "study.comparison[0].example": "aufs Dach – на покрива",
        "study.comparison[1].example": "auf den Tisch – на масата",
        "study.comparison[2].meaning": "на вертикална повърхност",
        "study.comparison[2].example": "an die Wand – на стената",
        "study.comparison[3].example": "ins Zimmer – в стаята",
        "study.comparison[4].example": "zum Arzt – при лекаря",
        "study.important": [
          "Aufs = auf das, само с неутрално съществително в единствено число — Wohin? (накъде?).",
          "Отговаря на накъде? — придвижване до определено място или повърхност.",
          "На хоризонтална повърхност често се използва auf den вместо aufs.",
          "Да не се бърка с an (вертикална стена), ins (вътре) или zum (посока).",
        ],
        "study.tip": [
          "Запомнете: auf + das → aufs (Wohin? = накъде?).",
          "Пълният auf das почти никога не се произнася — използва се aufs.",
        ],
        "study.examples[6].lv": "Бързо на лодката!",
      },
      "BG aufs gala: auf+das neuter sg; Wohin?=накъде?; full explanation/important/comparison. DE untouched."
    ),

  "g2/a1/bg|das|idx:129|study.comparison, study.important, study.examples[2].lv|MISTRANSLATION|gpt-5.6-luna":
    labot(
      {
        "study.comparison[0].example": "Das ist mein Auto. – Това е моята кола.",
        "study.comparison[1].example": "Dies ist mein Auto. – Това е моята кола.",
        "study.comparison[2].meaning": "кой",
        "study.comparison[2].example":
          "Das ist das Buch, welches ich lese. – Това е книгата, която чета.",
        "study.important[1]":
          "Das не е същото като dass: das е член или местоимение; dass е съюз и означава „че“.",
        "study.tip.text": "Запомнете: среден род → das • съюз → dass (че).",
      },
      "BG das gala: article/pronoun; dass=че not това; remove LV residue; full composite. DE untouched."
    ),

  "g2/a1/bg|dass|idx:130|lv, study.translation, study.comparison, study.important|MISTRANSLATION|gpt-5.6-luna":
    labot(
      {
        lv: "че",
        "study.translation": "че",
        "study.explanation":
          "Въвежда подчинена клауза, която изразява факт, мисъл или твърдение.",
        "study.comparison[0].meaning": "че",
        "study.comparison[0].example":
          "Ich weiß, dass er kommt. – Знам, че ще дойде.",
        "study.comparison[1].meaning": "защото",
        "study.comparison[1].example":
          "Ich bleibe zu Hause, weil es regnet. – Стоя вкъщи, защото вали.",
        "study.comparison[2].meaning": "за да",
        "study.comparison[2].example":
          "Ich lerne Deutsch, damit ich in Deutschland arbeiten kann. – Уча немски, за да работя в Германия.",
        "study.comparison[3].meaning": "дали",
        "study.comparison[3].example":
          "Ich weiß nicht, ob er kommt. – Не знам дали ще дойде.",
        "study.important[0]": "Dass означава \"че\" и въвежда подчинена клауза.",
        "study.important[1]": "Да не се бърка с das (член или местоимение).",
        "study.tip.text": "Запомнете: dass = че (съюз), das = член или местоимение.",
      },
      "BG dass gala: lv→че; weil=защото; damit=за да; ob=дали; full composite rewrite. DE untouched."
    ),

  "g2/a1/bg|die|idx:137|study.examples[1].lv, study.examples[2].lv, study.important[0]|MISTRANSLATION|gpt-5.6-luna":
    nelabot("BG die examples[1–2].lv: paths null; important[0] feminine-article note correct. DE untouched."),

  "g2/a1/bg|dieser|idx:139|study.examples[1].lv, study.examples[2].lv|MISTRANSLATION|gpt-5.6-luna":
    nelabot("BG dieser examples[1–2].lv: both paths null; non-actionable. DE untouched."),

  "g2/a1/bg|ein|idx:154|study|MISTRANSLATION|gpt-5.6-luna":
    labot(
      { "study.examples[0].lv": "Един мъж чака отвън." },
      "BG ein gala: Ein Mann→Един мъж (indefinite article). DE untouched."
    ),

  "g2/a1/bg|finden|idx:187|study.examples; study.explanation; study.comparison|SEMANTIC_MISMATCH|gpt-5.6-luna":
    labot(
      {
        "study.examples[0].lv": "Намирам ключа си.",
        "study.examples[1].lv": "Смятам, че е добре.",
        "study.examples[2].lv": "Какво мислиш за филма?",
        "study.examples[3].lv": "Какво мислиш за филма?",
        "study.comparison[0].example":
          "Ich finde das gut. – Смятам, че е добре.",
        "study.comparison[1].example":
          "Ich suche den Schlüssel. – Търся ключа.",
        "study.comparison[2].meaning": "мисля",
        "study.comparison[2].example": "Ich denke an dich. – Мисля за теб.",
        "study.comparison[3].example":
          "Ich glaube, er kommt. – Мисля, че ще дойде.",
      },
      "BG finden gala: index-by-index examples; remove LV residue; dictionary forms. DE untouched."
    ),

  "g2/a1/bg|gleich|idx:243|study.explanation, study.tip|MEANING_ERROR|gpt-5.6-luna":
    nelabot("BG gleich explanation/tip: temporal vs comparative split matches LV tūlīt/vienāds. DE untouched."),

  "g2/a1/bg|groß|idx:250|study.examples, study.explanation, study.tip|MEANING_ERROR|gpt-5.6-luna":
    labot(
      { "study.examples[1].lv": "Берлин е голям град." },
      "BG groß gala: Berlin example fix. DE untouched."
    ),

  "g2/a1/bg|Großeltern|idx:251|study.examples, study.comparison|MEANING_ERROR|gpt-5.6-luna":
    labot(
      { "study.examples[0].lv": "Баба ми и дядо ми живеят на село." },
      "BG Großeltern gala: auf dem Land→на село. DE untouched."
    ),

  "g2/a1/bg|gut|idx:259|study.explanation, study.tip, study.important|TRANSLATION_ERROR|gpt-5.6-luna":
    nelabot("BG gut explanation/tip/important: adjective vs das Gut noun distinction correct. DE untouched."),

  "g2/a1/bg|ihr|idx:292|study.explanation, study.examples, study.tip|TRANSLATION_ERROR|gpt-5.6-luna":
    labot(
      { "study.examples[0].lv": "Идвате ли вечерта?" },
      "BG ihr gala: plural Kommt ihr→Идвате ли вечерта? DE untouched."
    ),

  "g2/a1/bg|im|idx:293|study.explanation, study.examples, study.comparison|TRANSLATION_ERROR|gpt-5.6-luna":
    labot(
      {
        "study.explanation": [
          "Im е свиване на предлога in и члена dem.",
          "Пълна форма: in dem (Dativ, на кого?).",
          "Употребява се с мъжки и среднородни съществителни — Wo? (къде?), местоположение.",
          "С месеци и сезони: im Januar, im Sommer, im Winter.",
          "На практика im почти винаги се използва вместо пълното in dem.",
        ],
        "study.examples[5].lv": "През януари пътувам до Виена.",
        "study.examples[6].lv": "Тя е в киното.",
        "study.comparison[1].example": "ins Kino – в киното",
        "study.comparison[4].example": "auf dem Tisch – на масата",
        "study.important[3]": "За женски род: in der Schule, не im Schule.",
        "study.tip": [
          "Запомнете: in + dem → im (Dativ, къде?).",
          "Wohin? → ins • Wo? → im — не ги бъркайте!",
        ],
      },
      "BG im gala: in+dem Dativ; masc+neuter; location/time; full composite. DE untouched."
    ),

  "g2/a1/bg|schwimmen|idx:531|lv, study.translation|MISTRANSLATION|gpt-5.6-luna":
    labot(
      {
        lv: "плувам",
        "study.translation": "плувам",
        "study.comparison[0].meaning": "плуване",
        "study.comparison[0].example":
          "Er schwimmt sehr gut. – Той плува много добре.",
        "study.comparison[1].meaning": "къпане",
        "study.comparison[1].example": "Ich gehe baden. – Отивам да се къпя.",
        "study.comparison[2].meaning": "да отида да плувам",
        "study.comparison[2].example":
          "Wir gehen schwimmen. – Ходим да плуваме.",
        "study.comparison[3].meaning": "да се душирам",
        "study.comparison[3].example": "Ich dusche morgens. – Душирам се сутрин.",
      },
      "BG schwimmen gala: dictionary плувам; no imperative Плувайте. DE untouched."
    ),

  "g2/a1/bg|sehen|idx:539|lv, study.translation|MISTRANSLATION|gpt-5.6-luna":
    nelabot("BG sehen lv/translation: infinitive «да видя» standard for redzēt/sehen. DE untouched."),

  "g2/a1/bg|sein|idx:542|lv, study.translation|MISTRANSLATION|gpt-5.6-luna":
    labot(
      {
        lv: "съм • бъда",
        "study.translation": "съм • бъда",
        "study.comparison[0].meaning": "съм",
        "study.comparison[0].example": "Ich bin hier. – Аз съм тук.",
        "study.comparison[2].meaning": "ставам",
        "study.comparison[2].example": "Ich werde müde. – Ставам уморен.",
        "study.comparison[3].meaning": "оставам",
        "study.comparison[3].example": "Ich bleibe hier. – Оставам тук.",
        "study.tip.text": "Запомнете: ich bin = аз съм • du bist = ти си.",
      },
      "BG sein gala: dictionary съм•бъда; no imperative Бъди. DE untouched."
    ),

  "g2/a1/bg|Seite|idx:544|lv, study.translation|MISTRANSLATION|gpt-5.6-luna":
    labot(
      {
        lv: "Страница • Страна",
        "study.translation": "Страница • Страна",
      },
      "BG Seite gala: Страница•Страна noun senses; remove Странично. DE untouched."
    ),

  "g2/a1/bg|sollen|idx:564|study|CONTENT_ERROR|gpt-5.6-luna":
    labot(
      {
        "study.tip.text":
          "Запомнете: някой ви казва какво да правите → sollen • силна необходимост → müssen.",
      },
      "BG sollen gala: fix corrupt tip (раздразнен/мусон). DE untouched."
    ),

  // ── BS (19) ─────────────────────────────────────────────────────────
  "g2/a1/bs|a1-uhr|a1.card.a1-uhr.study.examples[5].native|MULTI_TRANSLATION|deterministic/multi-translation":
    nelabot("BS a1-uhr examples[5].native: field absent; non-actionable. DE untouched."),

  "g2/a1/bs|Appetit|idx:689|lv, study|TRANSLATION_ERROR|gpt-5.6-luna":
    nelabot("BS Appetit study: der Appetit singular and Guten Appetit examples correct. DE untouched."),

  "g2/a1/bs|erst|idx:165|study.examples[0].lv; study.examples[1].lv; study.comparison[0].example|MISTRANSLATION|gpt-5.6-luna":
    nelabot("BS erst: cited example paths null; non-actionable. DE untouched."),

  "g2/a1/bs|es|idx:167|study.examples[1].lv; study.examples[3].lv|MISTRANSLATION|gpt-5.6-luna":
    nelabot("BS es examples[1,3].lv: paths null; non-actionable. DE untouched."),

  "g2/a1/bs|essen|idx:690|lv, study|TRANSLATION_ERROR|gpt-5.6-luna":
    nelabot("BS essen study: jesti vs das Essen distinction correct. DE untouched."),

  "g2/a1/bs|etwas|idx:169|study.comparison[3].meaning; study.comparison[3].example; study.important[2]|MISTRANSLATION|gpt-5.6-luna":
    labot(
      {
        "study.comparison[3].meaning": "Nešto",
        "study.comparison[3].example": "Ich brauche etwas. – Trebam nešto.",
      },
      "BS etwas gala: comparison[3] German leak→Nešto. DE untouched."
    ),

  "g2/a1/bs|fernsehen|idx:687|lv, study|TRANSLATION_ERROR|gpt-5.6-luna":
    nelabot("BS fernsehen study: separable verb vs noun contrast clear. DE untouched."),

  "g2/a1/bs|Fernsehen|idx:688|lv, study|TRANSLATION_ERROR|gpt-5.6-luna":
    nelabot("BS Fernsehen study: TV noun singular-only rule correct. DE untouched."),

  "g2/a1/bs|groß|idx:250|study.examples[1].lv|TRANSLATION_ERROR|gpt-5.6-luna":
    nelabot("BS groß study.examples[1].lv: path absent; non-actionable. DE untouched."),

  "g2/a1/bs|Großeltern|idx:251|study.examples[1].lv|TRANSLATION_ERROR|gpt-5.6-luna":
    nelabot("BS Großeltern study.examples[1].lv: path absent; non-actionable. DE untouched."),

  "g2/a1/bs|gut|idx:259|study.sectionAccents.examples[1].lv|TRANSLATION_ERROR|gpt-5.6-luna":
    nelabot("BS gut sectionAccents.examples[1].lv: path absent; non-actionable. DE untouched."),

  "g2/a1/bs|halten|idx:265|study.examples[2].lv|TRANSLATION_ERROR|gpt-5.6-luna":
    nelabot("BS halten study.examples[2].lv: null path; non-actionable. DE untouched."),

  "g2/a1/bs|hoch|idx:285|study.examples[1].lv|MEANING_MISMATCH|gpt-5.6-luna":
    nelabot("BS hoch study.examples[1].lv: path absent; non-actionable. DE untouched."),

  "g2/a1/bs|Morgen|idx:418|study.explanation; study.tip|MEANING_ERROR|gpt-5.6-luna":
    labot(
      {
        "study.explanation": [
          "Glavna ideja: Morgen može biti imenica (jutro) ili prilog (sutra).",
          "Der Morgen (s velikim slovom i članom der) = jutro kao dio dana.",
          "morgen (malim slovom) = sutra, sljedeći dan.",
          "U pozdravu Guten Morgen! uvijek je veliko slovo — jutro, ne sutra.",
        ],
        "study.tip": [
          "Mali morgen = sutra (Ich komme morgen). der Morgen s velikim slovom = jutro (Guten Morgen!, am Morgen).",
          "Der Morgen = jutro (imenica), morgen = sutra (prilog).",
        ],
      },
      "BS Morgen gala: der Morgen=jutro vs morgen=sutra; full explanation/tip cleanup. DE untouched."
    ),

  "g2/a1/bs|über|idx:608|study.examples[3].lv|SEMANTIC_MISMATCH|gpt-5.6-luna":
    nelabot("BS über study.examples[3].lv: path null; non-actionable. DE untouched."),

  "g2/a1/bs|um|idx:611|study.examples[1].lv|SEMANTIC_MISMATCH|gpt-5.6-luna":
    nelabot("BS um study.examples[1].lv: path absent; non-actionable. DE untouched."),

  "g2/a1/bs|unter|idx:615|study.examples[1].lv|SEMANTIC_MISMATCH|gpt-5.6-luna":
    nelabot("BS unter study.examples[1].lv: path null; non-actionable. DE untouched."),

  "g2/a1/bs|verstehen|idx:621|study.examples[0].lv, study.examples[1].lv|ORTHOGRAPHY|gpt-5.6-luna":
    nelabot("BS verstehen examples[0–1].lv: both null; non-actionable. DE untouched."),

  "g2/a1/bs|zum|idx:672|lv, study|TRANSLATION_ERROR|gpt-5.6-luna":
    labot(
      {
        lv: "do",
        "study.translation": "do",
        "study.explanation": [
          "Zum je skraćeni oblik prijedloga zu i člana dem.",
          "Puni oblik: zu dem (Dativ, kome?).",
          "Koristi se s imenicama muškog i srednjeg roda kada označava smjer ili cilj.",
          "Za ženski rod: zur (zu + der).",
          "bei = lokacija (nalazim se), zum = smjer (idem).",
        ],
        "study.comparison[0].example": "zum Arzt – Kod doktora",
        "study.comparison[1].meaning": "do/kod (ženski rod)",
        "study.comparison[1].example": "zur Schule – u školu",
        "study.comparison[2].meaning": "kod / prema",
        "study.comparison[2].example": "zu Hause – kod kuće",
        "study.comparison[3].example": "nach Berlin – u Berlin",
        "study.comparison[4].meaning": "kod (lokacija)",
        "study.comparison[4].example": "beim Arzt – kod doktora (nalazim se)",
      },
      "BS zum gala: zu+dem Dativ; masc+neuter; zur feminine; bei vs zum; full composite. DE untouched."
    ),

  // ── CS (6) ──────────────────────────────────────────────────────────
  "g2/a1/cs|a1-uhr|a1.card.a1-uhr.study.examples[5].native|MULTI_TRANSLATION|deterministic/multi-translation":
    nelabot("CS a1-uhr examples[5].native: field absent; non-actionable. DE untouched."),

  "g2/a1/cs|Mann|idx:394|lv; study.explanation; study.examples[].lv; study.tip; study.important|TRANSLATION_ERROR|gpt-5.6-luna":
    nelabot("CS Mann study: Muž•Manžel and mein Mann=manžel correct. DE untouched."),

  "g2/a1/cs|mit|idx:408|lv; study.explanation; study.examples[].lv; study.comparison[].meaning; study.important|TRANSLATION_ERROR|gpt-5.6-luna":
    labot(
      { lv: "s", "study.translation": "s" },
      "CS mit gala: truncated «S»→lowercase s per LV ar. DE untouched."
    ),

  "g2/a1/cs|mögen|idx:413|lv; study.explanation; study.examples[].lv; study.comparison[].meaning; study.important|TRANSLATION_ERROR|gpt-5.6-luna":
    nelabot("CS mögen study: Mít rád and möchte contrast correct. DE untouched."),

  "g2/a1/cs|morgen|idx:417|lv; study.explanation; study.examples[].lv; study.tip; study.important|TRANSLATION_ERROR|gpt-5.6-luna":
    nelabot("CS morgen study: zítra vs Morgen ráno capitalization correct. DE untouched."),

  "g2/a1/cs|Morgen|idx:418|lv; study.explanation; study.examples[].lv; study.tip; study.important|TRANSLATION_ERROR|gpt-5.6-luna":
    nelabot("CS Morgen study: Ráno noun vs morgen adverb distinction correct. DE untouched."),

  // ── DA (3) ──────────────────────────────────────────────────────────
  "g2/a1/da|a1-uhr|a1.card.a1-uhr.study.examples[5].native|MULTI_TRANSLATION|deterministic/multi-translation":
    nelabot("DA a1-uhr examples[5].native: absent field; non-actionable. DE untouched."),

  "g2/a1/da|gleich|idx:243|study|MISTRANSLATION|gpt-5.6-luna":
    nelabot("DA gleich study: Straks/Lige temporal vs comparative correct. DE untouched."),

  "g2/a1/da|können|idx:319|study.translation; study.explanation; study.comparison|MISTRANSLATION|gpt-5.6-luna":
    nelabot("DA können study: Kunne/Kende modal comparison correct. DE untouched."),
};

const ids = Object.keys(decisions);
if (ids.length !== 50) {
  console.error(`Expected 50 decisions, got ${ids.length}`);
  process.exit(1);
}

let labotCount = 0;
let nelabotCount = 0;
for (const d of Object.values(decisions)) {
  if (d.owner_decision === "LABOT") labotCount++;
  else if (d.owner_decision === "NELABOT") nelabotCount++;
}

fs.writeFileSync(outPath, `${JSON.stringify(decisions, null, 2)}\n`);
console.log(
  JSON.stringify(
    { total: ids.length, labot: labotCount, nelabot: nelabotCount, pending: 0 },
    null,
    2
  )
);
