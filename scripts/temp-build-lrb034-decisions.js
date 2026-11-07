#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");

const outPath = path.join(__dirname, "data/g2-a1-owner-pending/LRB-034-decisions.json");

function entry(ownerNew, note) {
  return {
    owner_status: "DECIDED",
    owner_decision: "LABOT",
    owner_new: JSON.stringify(ownerNew),
    owner_note: note,
  };
}

const decisions = {
  "g2/a1/is|Kartoffel|idx:334|lv|MEANING_MISMATCH|gpt-5.6-luna": entry(
    { lv: "kartöfla" },
    "IS Kartoffel lv: garbage Kart→kartöfla for kartupelis potato. DE untouched."
  ),
  "g2/a1/is|Käse|idx:335|lv|MEANING_MISMATCH|gpt-5.6-luna": entry(
    { lv: "ostur" },
    "IS Käse lv: garbage Just→ostur for siers cheese. DE untouched."
  ),
  "g2/a1/is|Katze|idx:336|lv|MEANING_MISMATCH|gpt-5.6-luna": entry(
    { lv: "köttur" },
    "IS Katze lv: garbage Kasse→köttur for kaķis cat. DE untouched."
  ),
  "g2/a1/is|kaufen|idx:307|lv|MEANING_MISMATCH|gpt-5.6-luna": entry(
    { lv: "kaupa" },
    "IS kaufen lv: garbage Ost→kaupa for pirkt buy. DE untouched."
  ),
  "g2/a1/is|kein|idx:308|lv, study|WRONG_LANGUAGE|gpt-5.6-luna": entry(
    {
      lv: "enginn • engin",
      "study.translation": "enginn • engin",
      "study.explanation": [
        "Meginhugsun: kein er neitunarartikel sem neitar nafnorð.",
        "kein beygist eins og ein: kein/keine/keinen/keiner.",
        "Með teljanlegum nafnorðum þýðir kein enginn (kein Mensch = enginn maður).",
        "Með óteljanlegum nafnorðum þýðir kein engin/ekki neitt (kein Geld = engir peningar).",
        "kein neitar nafnorðið; nicht neitar sögn eða setningu.",
      ],
      "study.examples[0].lv": "Ég á enga peninga.",
      "study.examples[1].lv": "Það er ekki meiri mjólk.",
      "study.examples[2].lv": "Enginn var þarna.",
      "study.examples[3].lv": "Ég á engan tíma.",
      "study.examples[4].lv": "Þetta er ekki vandamál.",
      "study.examples[5].lv": "Við eigum engin börn.",
      "study.tip[0]":
        "kein neitar nafnorðið (kein + nafnorð), nicht neitar sögn eða setninguna.",
      "study.tip[1]": "kein beygist eins og ein: kein/keine/keinen/keiner.",
      "study.important[0]":
        "kein + nafnorð = enginn/engin/ekkert, ekki *ekki einn X.",
      "study.important[1]":
        "Rangt: Ich habe nicht ein Geld. → Rétt: Ich habe kein Geld.",
    },
    "IS kein composite: ET/NO Mitte ükski→enginn•engin throughout lv/study for neviens. DE untouched."
  ),
  "g2/a1/is|Keks|idx:309|lv|WRONG_LANGUAGE|gpt-5.6-luna": entry(
    { lv: "kex" },
    "IS Keks lv: NO Informasjonskapsler→kex for cepums cookie. DE untouched."
  ),
  "g2/a1/is|kennen|idx:310|lv, study|WRONG_LANGUAGE|gpt-5.6-luna": entry(
    {
      lv: "þekkja",
      "study.translation": "þekkja",
      "study.explanation": [
        "Meginhugsun: kennen þýðir að þekkja mann, stað eða hlut af reynslu.",
        "Kennen notað um persónulega þekkingu: mann, stað, hlut.",
        "Kennen = þekkja af reynslu; wissen = vita upplýsingar.",
        "Kennen notað þegar þú þekkir einhvern eða eitthvað persónulega.",
      ],
      "study.examples[0].lv": "Ég þekki hann.",
      "study.examples[1].lv": "Þekkir þú þessa konu?",
      "study.examples[2].lv": "Hvar hittust þið?",
      "study.examples[3].lv": "Ég þekki hann.",
      "study.examples[4].lv": "Þekkir þú þessa borg?",
      "study.comparison[0].meaning": "þekkja (mann, stað, hlut)",
      "study.comparison[0].example": "Ich kenne ihn. – Ég þekki hann.",
      "study.comparison[1].meaning": "vita (staðreynd)",
      "study.comparison[1].example": "Ich weiß seinen Namen. – Ég veit nafn hans.",
      "study.tip[0]": "kennen = þekkja",
      "study.tip[1]": "Notaðu kennen þegar samhengið passar við þessa merkingu.",
      "study.important[0]": "kennen = þekkja mann/stað.",
      "study.important[1]": "kennen = þekkja.",
      "study.important[2]": "Þekkja mann, stað eða hlut af reynslu.",
    },
    "IS kennen composite: NO Tynning/ET→þekkja throughout lv/study for pazīt know. DE untouched."
  ),
  "g2/a1/is|Kilogramm|idx:312|lv|WRONG_LANGUAGE|gpt-5.6-luna": entry(
    { lv: "kílógramm" },
    "IS Kilogramm lv: EN Kilogram→kílógramm for kilograms. DE untouched."
  ),
  "g2/a1/is|Kilometer|idx:313|lv|WRONG_LANGUAGE|gpt-5.6-luna": entry(
    { lv: "kílómetri" },
    "IS Kilometer lv: loan Kilometer→kílómetri for kilometrs. DE untouched."
  ),
  "g2/a1/is|Kind|idx:314|lv|MEANING_MISMATCH|gpt-5.6-luna": entry(
    { lv: "barn" },
    "IS Kind lv: NO Runder→barn for bērns child. DE untouched."
  ),
  "g2/a1/is|Kindergarten|idx:315|lv|MEANING_MISMATCH|gpt-5.6-luna": entry(
    { lv: "leikskóli" },
    "IS Kindergarten lv: NO Siste ed→leikskóli for bērnudārzs preschool. DE untouched."
  ),
  "g2/a1/is|Kirche|idx:316|lv|WRONG_LANGUAGE|gpt-5.6-luna": entry(
    { lv: "kirkja" },
    "IS Kirche lv: NO Kirke→kirkja for baznīca church. DE untouched."
  ),
  "g2/a1/is|Kleid|idx:337|lv|LANGUAGE_MISMATCH|gpt-5.6-luna": entry(
    { lv: "kjóll" },
    "IS Kleid lv: ET Kleit→kjóll for kleita dress. DE untouched."
  ),
  "g2/a1/is|Kleidung|idx:338|lv|LANGUAGE_MISMATCH|gpt-5.6-luna": entry(
    { lv: "fatnaður" },
    "IS Kleidung lv: ET Riietus→fatnaður for apģērbs clothing. DE untouched."
  ),
  "g2/a1/is|klein|idx:6|lv and study|WRONG_TARGET_LANGUAGE|gpt-5.6-luna": entry(
    {
      lv: "lítill",
      "study.translation": "lítill",
      "study.explanation": [
        "Meginhugsun: klein lýsir litlum stærð eða miklu.",
        "Klein lýsir oft stærð: lítill í stærð.",
        "Oft notað um hluti eða manneskju.",
      ],
      "study.examples[0].lv": "Herbergið er lítið.",
      "study.examples[1].lv": "Barnið er enn lítið.",
      "study.examples[2].lv": "Ég á lítinn poka.",
      "study.examples[3].lv": "Ég á lítinn poka.",
      "study.examples[4].lv": "Barnið er lítið.",
      "study.tip[0]": "klein = lítill",
      "study.tip[1]": "Notaðu klein þegar samhengið passar við þessa merkingu.",
      "study.important[0]": "klein = lítill í stærð.",
      "study.important[1]": "klein = lítill.",
    },
    "IS klein composite: ET Väike/NO på liten→lítill throughout lv/study for mazs small. DE untouched."
  ),
  "g2/a1/is|Knoblauch|idx:339|lv|LANGUAGE_MISMATCH|gpt-5.6-luna": entry(
    { lv: "hvítlaukur" },
    "IS Knoblauch lv: ET Küüslauk→hvítlaukur for ķiploks garlic. DE untouched."
  ),
  "g2/a1/is|Koch|idx:340|lv|LANGUAGE_MISMATCH|gpt-5.6-luna": entry(
    { lv: "kokkur" },
    "IS Koch lv: ET Kokk→kokkur for pavārs cook. DE untouched."
  ),
  "g2/a1/is|kochen|idx:317|lv|MEANING_MISMATCH|gpt-5.6-luna": entry(
    { lv: "elda" },
    "IS kochen lv: NO Forbered dem→elda for gatavot cook. DE untouched."
  ),
  "g2/a1/is|Köchin|idx:341|lv|LANGUAGE_MISMATCH|gpt-5.6-luna": entry(
    { lv: "kokka" },
    "IS Köchin lv: NO Kvinnelig kokk→kokka for pavāre female cook. DE untouched."
  ),
  "g2/a1/is|kommen|idx:318|lv|WRONG_LANGUAGE|gpt-5.6-luna": entry(
    { lv: "koma" },
    "IS kommen lv: ET Tulema→koma for nākt come. DE untouched."
  ),
  "g2/a1/is|können|idx:319|lv,study|TARGET_LANGUAGE_MISTRANSLATION|gpt-5.6-luna": entry(
    {
      lv: "geta • kunna",
      "study.translation": "geta • kunna",
      "study.explanation": [
        "Meginhugsun: können þýðir að geta eða kunna að gera eitthvað.",
        "Þegar talað er um hæfni eða þekkingu, þýðir können kunna.",
        "Þegar talað er um möguleika, þýðir können geta.",
        "Können er modalsögn; önnur sögn stendur oft í lok setningar.",
      ],
      "study.examples[0].lv": "Ég get talað þýsku.",
      "study.examples[1].lv": "Getur þú hjálpað mér?",
      "study.examples[2].lv": "Við getum komið í dag.",
      "study.examples[3].lv": "Hann kann vel að synda.",
      "study.comparison[0].meaning": "geta / kunna",
      "study.comparison[0].example": "Ich kann schwimmen. = Ég get sund.",
      "study.comparison[1].meaning": "mega",
      "study.comparison[1].example": "Darf ich gehen? = Má ég fara?",
      "study.comparison[2].meaning": "verða að",
      "study.comparison[2].example": "Ich muss lernen. = Ég verð að læra.",
      "study.comparison[3].meaning": "vita",
      "study.comparison[3].example": "Ich weiß das. = Ég veit það.",
      "study.tip.text": "Mundu: hæfni/möguleiki → können.",
      "study.important[0]":
        "können er ekki það sama og dürfen. können = geta/kunna, dürfen = mega.",
      "study.important[1]":
        "Í setningu með können stendur oft önnur sögn í lokin: Ich kann schwimmen.",
    },
    "IS können composite: ET/NO Saama/Oskama→geta•kunna throughout lv/study for varēt. DE untouched."
  ),
  "g2/a1/is|Kopf|idx:342|lv|LANGUAGE_MISMATCH|gpt-5.6-luna": entry(
    { lv: "höfuð" },
    "IS Kopf lv: garbage Ert→höfuð for galva head. DE untouched."
  ),
  "g2/a1/is|kosten|idx:320|lv,study|TARGET_LANGUAGE_MISTRANSLATION|gpt-5.6-luna": entry(
    {
      lv: "kosta",
      "study.translation": "kosta",
      "study.explanation": [
        "Meginhugsun: kosten þýðir að kosta — um verð á vöru.",
        "Notað þegar spurt er eða sagt hversu mikið eitthvað kostar, ekki þegar maður greiðir.",
        "Verðspurningar byrja oft á Was kostet...?",
        "Das kostet 5 Euro. = Það kostar 5 evrur.",
        "Þegar einstaklingur greiðir, nota bezahlen eða zahlen.",
      ],
      "study.examples[0].lv": "Það kostar 5 evrur.",
      "study.examples[1].lv": "Hvað kostar það?",
      "study.examples[2].lv": "Hversu mikið kostar peysan?",
      "study.examples[3].lv": "Maturinn kostar ekki mikið.",
      "study.examples[4].lv": "Ég borga reikninginn.",
      "study.examples[5].lv": "Get ég greitt með reiðufé?",
      "study.examples[6].lv": "Hann borgar með korti.",
      "study.examples[7].lv": "Ég borga strax.",
      "study.comparison[0].meaning": "kosta (verð)",
      "study.comparison[0].example": "Das kostet 5 Euro. = Það kostar 5 evrur.",
      "study.comparison[1].meaning": "borga",
      "study.comparison[1].example":
        "Ich bezahle die Rechnung. = Ég borga reikninginn.",
      "study.comparison[2].meaning": "borga",
      "study.comparison[2].example":
        "Kann ich bar zahlen? = Get ég greitt með reiðufé?",
      "study.comparison[3].meaning": "Hvað kostar...?",
      "study.comparison[3].example":
        "Was kostet das Buch? = Hvað kostar bókin?",
      "study.tip[0]": "Mundu: spurning um verð → kosten (Was kostet das?).",
      "study.tip[1]":
        "Mundu: greiðsla → bezahlen / zahlen (Ich bezahle die Rechnung.).",
      "study.important[0]":
        "kosten og bezahlen eru ekki samheiti: kosten = hvað kostar; bezahlen = borga peninga.",
      "study.important[1]":
        "Á íslensku er oft notað borga í báðum tilvikum, en á þýsku verður að velja eftir aðstæðum.",
    },
    "IS kosten composite: ET Maksimum/NO koster→kosta throughout lv/study for maksāt cost. DE untouched."
  ),
  "g2/a1/is|Kraftwagen|idx:343|lv|LANGUAGE_MISMATCH|gpt-5.6-luna": entry(
    { lv: "bíll" },
    "IS Kraftwagen lv: NO Bil→bíll for automašīna car. DE untouched."
  ),
  "g2/a1/is|Küche|idx:344|lv|LANGUAGE_MISMATCH|gpt-5.6-luna": entry(
    { lv: "eldhús" },
    "IS Küche lv: ET Köök→eldhús for virtuve kitchen. DE untouched."
  ),
  "g2/a1/is|Kuchen|idx:345|lv|LANGUAGE_MISMATCH|gpt-5.6-luna": entry(
    { lv: "kaka" },
    "IS Kuchen lv: ET Kook→kaka for kūka cake. DE untouched."
  ),
  "g2/a1/is|Kuh|idx:346|lv|LANGUAGE_MISMATCH|gpt-5.6-luna": entry(
    { lv: "kýr" },
    "IS Kuh lv: NO Leire→kýr for govs cow. DE untouched."
  ),
  "g2/a1/is|Kühlschrank|idx:347|lv|LANGUAGE_MISMATCH|gpt-5.6-luna": entry(
    { lv: "ísskápur" },
    "IS Kühlschrank lv: ET Külmkapp→ísskápur for ledusskapis fridge. DE untouched."
  ),
  "g2/a1/is|Kuss|idx:348|lv|LANGUAGE_MISMATCH|gpt-5.6-luna": entry(
    { lv: "koss" },
    "IS Kuss lv: ET Hodelus→koss for skūpsts kiss. DE untouched."
  ),
  "g2/a1/is|küssen|idx:321|lv|WRONG_LANGUAGE|gpt-5.6-luna": entry(
    { lv: "kyssa" },
    "IS küssen lv: ET Suudlema→kyssa for skūpstīt kiss. DE untouched."
  ),
  "g2/a1/is|lächeln|idx:322|lv|WRONG_LANGUAGE|gpt-5.6-luna": entry(
    { lv: "brosa" },
    "IS lächeln lv: ET Naeratama→brosa for smaidīt smile. DE untouched."
  ),
  "g2/a1/is|lachen|idx:323|lv|MEANING_MISMATCH|gpt-5.6-luna": entry(
    { lv: "hlæja" },
    "IS lachen lv: NO Nærmere→hlæja for smieties laugh. DE untouched."
  ),
  "g2/a1/is|Laden|idx:349|lv,study|TARGET_LANGUAGE_MISTRANSLATION|gpt-5.6-luna": entry(
    {
      lv: "verslun",
      "study.translation": "verslun",
      "study.explanation": [
        "Meginhugsun: der Laden með stórum staf og grein der er nafnorð — verslun.",
        "laden með litlum staf er sögn — hlaða.",
        "Der Laden notað um litla verslun í daglegu lífi.",
        "Fleirtala: die Läden.",
      ],
      "study.examples[0].lv": "Ég fer í verslunina.",
      "study.examples[1].lv": "Verslunin er lokuð.",
      "study.examples[2].lv": "Hér eru margar verslanir.",
      "study.examples[3].lv": "Ég verð að hlaða símann.",
      "study.tip[0]": "der Laden með stórum staf — nafnorð (verslun).",
      "study.tip[1]": "laden með litlum staf — sögn (hlaða).",
      "study.important[0]": "der Laden = verslun (nafnorð).",
      "study.important[1]": "laden = hlaða (sögn).",
      "study.important[2]": "Fleirtala: die Läden.",
    },
    "IS Laden composite: ET Pood/NO på lukket→verslun throughout lv/study for veikals store. DE untouched."
  ),
  "g2/a1/is|Land|idx:351|lv,study|TARGET_LANGUAGE_MISTRANSLATION|gpt-5.6-luna": entry(
    {
      lv: "ríki • land",
      "study.translation": "ríki • land",
      "study.explanation": [
        "Meginhugsun: das Land þýðir oft ríki eða land utan borgar.",
        "Þegar talað er um Þýskaland, Ísland eða annað svæði með landamærum, þýðir das Land ríki.",
        "Þegar talað er um sveit eða land í andstöðu við borg, þýðir das Land land eða sveit.",
        "Samhengið ákvarðar hvort merkingin er ríki, land eða sveit.",
      ],
      "study.examples[0].lv": "Þýskaland er fallegt land.",
      "study.examples[1].lv": "Ég kem úr litlu landi.",
      "study.examples[2].lv": "Við keyrum út á land.",
      "study.examples[3].lv": "Úti á landi er rólegt.",
      "study.comparison[0].meaning": "ríki / land / sveit",
      "study.comparison[0].example": "Deutschland ist ein Land.",
      "study.comparison[1].meaning": "borg",
      "study.comparison[1].example": "Ich wohne in der Stadt.",
      "study.comparison[2].meaning": "þorp",
      "study.comparison[2].example": "Er lebt in einem Dorf.",
      "study.comparison[3].meaning": "jörð / plánetan",
      "study.comparison[3].example": "Die Erde ist rund.",
      "study.tip.text": "Mundu: ríki → das Land; borg → die Stadt.",
      "study.important[0]":
        "aufs Land þýðir út á land/sveit, ekki á þjóðina.",
      "study.important[1]": "das Land er ekki það sama og die Stadt.",
    },
    "IS Land composite: ET Riik/NO Måltid→ríki•land throughout lv/study for valsts•zeme. DE untouched."
  ),
  "g2/a1/is|lang|idx:352|lv,study|TARGET_LANGUAGE_MISTRANSLATION|gpt-5.6-luna": entry(
    {
      lv: "langur • langt",
      "study.translation": "langur • langt",
      "study.explanation": [
        "Meginhugsun: lang getur þýtt langur í rúmi eða langt í tíma.",
        "Þegar talað er um stærð eða lengd, lang = langur (ein langer Tisch = langur borð).",
        "Þegar talað er um tímalengd, lang = langt/langur (ein langer Tag = langur dagur).",
        "Í orðasambandinu den ganzen Tag lang merkir allan daginn.",
        "Á íslensku nota langur um mál og oft langt/langur um tíma.",
      ],
      "study.examples[0].lv": "Borðið er mjög langt.",
      "study.examples[1].lv": "Myndin var mjög löng.",
      "study.examples[2].lv": "Hversu lengi tekur það?",
      "study.examples[3].lv": "Hún er með langt hár.",
      "study.examples[4].lv": "Ég hef beðið lengi.",
      "study.examples[5].lv": "Allan daginn.",
      "study.tip[0]": "Um mál eða fjarlægð (hár, leið, borð) → langur.",
      "study.tip[1]": "Um tíma (dagur, bið, kvikmynd) → langur/langt.",
      "study.important[0]":
        "lang = langur (mál) EÐA langur/langt (tími) — fer eftir samhengi.",
      "study.important[1]":
        "wie lange = hversu lengi (spurning um tíma, ekki mál).",
    },
    "IS lang composite: ET Hane/NO Snakk om→langur•langt throughout lv/study for garš•ilgs. DE untouched."
  ),
  "g2/a1/is|lange|idx:353|lv|LANGUAGE_MISMATCH|gpt-5.6-luna": entry(
    { lv: "lengi" },
    "IS lange lv: ET Kauai→lengi for ilgi long (adv). DE untouched."
  ),
  "g2/a1/is|langsam|idx:354|lv|LANGUAGE_MISMATCH|gpt-5.6-luna": entry(
    { lv: "hægur" },
    "IS langsam lv: ET Aeglane→hægur for lēns slow. DE untouched."
  ),
  "g2/a1/is|langweilig|idx:355|lv|LANGUAGE_MISMATCH|gpt-5.6-luna": entry(
    { lv: "leiðinlegur" },
    "IS langweilig lv: NO I går→leiðinlegur for garlaicīgs boring. DE untouched."
  ),
  "g2/a1/is|lassen|idx:356|lv|LANGUAGE_MISMATCH|gpt-5.6-luna": entry(
    { lv: "láta • leyfa" },
    "IS lassen lv: NO Kjempe•Laskma→láta•leyfa for atstāt•ļaut let/leave. DE untouched."
  ),
  "g2/a1/is|laufen|idx:357|lv|LANGUAGE_MISMATCH|gpt-5.6-luna": entry(
    { lv: "hlaupa • ganga" },
    "IS laufen lv: ET Jooksma•Töötama→hlaupa•ganga for skriet•darboties run/work. DE untouched."
  ),
  "g2/a1/is|laut|idx:358|lv|TRANSLATION_ERROR|gpt-5.6-luna": entry(
    { lv: "hátt" },
    "IS laut lv: NO Velge→hátt for skaļš loud (adj). DE untouched."
  ),
  "g2/a1/is|Laut|idx:359|lv|LANGUAGE_MISMATCH|gpt-5.6-luna": entry(
    { lv: "hljóð" },
    "IS Laut lv: ET Heli→hljóð for skaņa sound (noun). DE untouched."
  ),
  "g2/a1/is|leben|idx:360|lv|LANGUAGE_MISMATCH|gpt-5.6-luna": entry(
    { lv: "lifa" },
    "IS leben lv: ET Elam→lifa for dzīvot live. DE untouched."
  ),
  "g2/a1/is|lecker|idx:361|lv|LANGUAGE_MISMATCH|gpt-5.6-luna": entry(
    { lv: "bragðgóður" },
    "IS lecker lv: ET Maitsev→bragðgóður for gards tasty. DE untouched."
  ),
  "g2/a1/is|leer|idx:362|lv|LANGUAGE_MISMATCH|gpt-5.6-luna": entry(
    { lv: "tómur" },
    "IS leer lv: ET Tühi→tómur for tukšs empty. DE untouched."
  ),
  "g2/a1/is|legen|idx:363|lv|TRANSLATION_ERROR|gpt-5.6-luna": entry(
    { lv: "leggja" },
    "IS legen lv: ET Panem→leggja for nolikt lay/put. DE untouched."
  ),
  "g2/a1/is|Lehrer|idx:364|lv|LANGUAGE_MISMATCH|gpt-5.6-luna": entry(
    { lv: "kennari" },
    "IS Lehrer lv: ET Õpetaja→kennari for skolotājs teacher. DE untouched."
  ),
  "g2/a1/is|Lehrerin|idx:365|lv|LANGUAGE_MISMATCH|gpt-5.6-luna": entry(
    { lv: "kennari (kona)" },
    "IS Lehrerin lv: ET Naisöpetaja→kennari (kona) for skolotāja female teacher. DE untouched."
  ),
  "g2/a1/is|leicht|idx:366|lv|LANGUAGE_MISMATCH|gpt-5.6-luna": entry(
    { lv: "léttur" },
    "IS leicht lv: ET Kerge→léttur for viegls light/easy. DE untouched."
  ),
  "g2/a1/is|leider|idx:367|lv|LANGUAGE_MISMATCH|gpt-5.6-luna": entry(
    { lv: "því miður" },
    "IS leider lv: NO Dessverre→því miður for diemžēl unfortunately. DE untouched."
  ),
};

const keys = Object.keys(decisions);
if (keys.length !== 50) {
  throw new Error(`Expected 50 decisions, got ${keys.length}`);
}

fs.writeFileSync(outPath, `${JSON.stringify(decisions, null, 2)}\n`);
console.log(JSON.stringify({ written: outPath, count: keys.length }, null, 2));
