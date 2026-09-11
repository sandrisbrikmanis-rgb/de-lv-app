#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");

const outPath = path.join(__dirname, "data/g2-a1-owner-pending/LRB-035-decisions.json");

function entry(ownerNew, note) {
  return {
    owner_status: "DECIDED",
    owner_decision: "LABOT",
    owner_new: JSON.stringify(ownerNew),
    owner_note: note,
  };
}

const decisions = {
  "g2/a1/is|leise|idx:368|lv, study|MISTRANSLATION|gpt-5.6-luna": entry(
    {
      lv: "þögul • hljóðlát",
      "study.translation": "þögul • hljóðlát",
      "study.explanation": [
        "Meginhugsun: leise lýsir lágri hljóðstyrk eða rólegri rödd.",
        "Leise þýðir oft þögult eða með litlum hljóði.",
        "Oft notað um rödd, hljóð eða tónlist.",
        "Leise lýsir lítilli hljóðstyrk eða rólegu tali.",
      ],
      "study.examples[0].lv": "Vinsamlegast verið þögul.",
      "study.examples[1].lv": "Vinsamlegast verið þögul.",
      "study.examples[2].lv": "Tónlistin er hljóðlát.",
      "study.examples[3].lv": "Talaðu hljóðlega, takk.",
      "study.tip[0]": "leise = þögul",
      "study.tip[1]": "Notaðu leise þegar samhengið passar við þessa merkingu.",
      "study.important[0]": "leise = þögul rödd/hljóð.",
      "study.important[1]": "leise = hljóðstyrkur.",
      "study.important[2]": "Þögult eða með litlum hljóði.",
    },
    "IS leise composite: NO Våkn opp/ET→þögul•hljóðlát throughout lv/study for kluss quiet. DE untouched."
  ),
  "g2/a1/is|lernen|idx:4|lv|WRONG_LANGUAGE|gpt-5.6-luna": entry(
    { lv: "læra" },
    "IS lernen lv: ET Õppima→læra for mācīties learn. DE untouched."
  ),
  "g2/a1/is|lesen|idx:369|lv|LANGUAGE_MISMATCH|gpt-5.6-luna": entry(
    { lv: "lesa" },
    "IS lesen lv: ET Lugema→lesa for lasīt read. DE untouched."
  ),
  "g2/a1/is|letzte|idx:370|lv|LANGUAGE_MISMATCH|gpt-5.6-luna": entry(
    { lv: "síðasti" },
    "IS letzte lv: ET Viimane→síðasti for pēdējais last. DE untouched."
  ),
  "g2/a1/is|Licht|idx:372|lv|MISTRANSLATION|gpt-5.6-luna": entry(
    { lv: "ljós" },
    "IS Licht lv: ET Valgus→ljós for gaisma light. DE untouched."
  ),
  "g2/a1/is|lieb|idx:373|lv|MISTRANSLATION|gpt-5.6-luna": entry(
    { lv: "elskanlegur • kæra" },
    "IS lieb lv: garbage Callis→elskanlegur•kæra for mīļš dear. DE untouched."
  ),
  "g2/a1/is|Liebe|idx:374|lv|MISTRANSLATION|gpt-5.6-luna": entry(
    { lv: "ást" },
    "IS Liebe lv: ET Armastus→ást for mīlestība love (noun). DE untouched."
  ),
  "g2/a1/is|lieben|idx:375|lv|MISTRANSLATION|gpt-5.6-luna": entry(
    { lv: "elska" },
    "IS lieben lv: ET Armastama→elska for mīlēt love (verb). DE untouched."
  ),
  "g2/a1/is|Lied|idx:376|lv|MISTRANSLATION|gpt-5.6-luna": entry(
    { lv: "lag" },
    "IS Lied lv: NO Sang→lag for dziesma song. DE untouched."
  ),
  "g2/a1/is|liegen|idx:377|lv, study|MISTRANSLATION|gpt-5.6-luna": entry(
    {
      lv: "liggja • sofa",
      "study.translation": "liggja • sofa",
      "study.explanation": [
        "Meginhugsun: liegen þýðir að liggja eða sofa lárétt.",
        "Fyrir manneskju getur liegen þýtt að sofa.",
        "Fyrir hlut þýðir liegen að hann liggur einhvers staðar.",
        "Þetta er ekki sama og legen, sem þýðir að leggja eitthvað niður.",
      ],
      "study.examples[0].lv": "Bókin liggur á borðinu.",
      "study.examples[1].lv": "Síminn minn er í bílnum.",
      "study.examples[2].lv": "Hann liggur í rúminu.",
      "study.examples[3].lv": "Ég legg bókina á borðið.",
      "study.comparison[0].meaning": "liggja / sofa",
      "study.comparison[0].example": "Bókin liggur hér.",
      "study.comparison[1].meaning": "leggja",
      "study.comparison[1].example": "Ég legg bókina hingað.",
      "study.comparison[2].meaning": "standa",
      "study.comparison[2].example": "Flaskan stendur á borðinu.",
      "study.comparison[3].meaning": "vera",
      "study.comparison[3].example": "Ég er hér.",
      "study.tip.text":
        "Mundu: hlutur er þegar á stað → liegen; þú setur hann niður → legen.",
      "study.important[0]": "liegen sýnir stöðu eða staðsetningu.",
      "study.important[1]": "legen sýnir athöfn: einhver setur eitthvað niður.",
    },
    "IS liegen composite: ET Asuma•Lamama/NO→liggja•sofa throughout lv/study for atrasties•gulēt. DE untouched."
  ),
  "g2/a1/is|Limonade|idx:378|lv|MISTRANSLATION|gpt-5.6-luna": entry(
    { lv: "sítrónudrykkur" },
    "IS Limonade lv: EN Lemonade→sítrónudrykkur for limonāde lemonade. DE untouched."
  ),
  "g2/a1/is|Lineal|idx:379|lv|MISTRANSLATION|gpt-5.6-luna": entry(
    { lv: "reglustika" },
    "IS Lineal lv: ET Joonlaud→reglustika for lineāls ruler. DE untouched."
  ),
  "g2/a1/is|links|a1.card.links.native|MULTI_TRANSLATION|deterministic/multi-translation": entry(
    { lv: "til vinstri • vinstri" },
    "IS links native: ET Vasakule•Vasak→til vinstri•vinstri for pa kreisi•kreisais left. DE untouched."
  ),
  "g2/a1/is|links|idx:380|lv|MISTRANSLATION|gpt-5.6-luna": entry(
    { lv: "til vinstri • vinstri" },
    "IS links lv: ET Vasakule•Vasak→til vinstri•vinstri for pa kreisi•kreisais left. DE untouched."
  ),
  "g2/a1/is|Liste|idx:381|lv|MISTRANSLATION|gpt-5.6-luna": entry(
    { lv: "listi" },
    "IS Liste lv: ET Nimekiri→listi for saraksts list. DE untouched."
  ),
  "g2/a1/is|Löffel|idx:383|lv|MISTRANSLATION|gpt-5.6-luna": entry(
    { lv: "skeið" },
    "IS Löffel lv: garbage Lusika sin→skeið for karote spoon. DE untouched."
  ),
  "g2/a1/is|Luft|idx:384|lv|MISTRANSLATION|gpt-5.6-luna": entry(
    { lv: "loft" },
    "IS Luft lv: ET Õhk→loft for gaiss air. DE untouched."
  ),
  "g2/a1/is|lustig|idx:385|lv|MISTRANSLATION|gpt-5.6-luna": entry(
    { lv: "skemmtilegur" },
    "IS lustig lv: ET Lõbus→skemmtilegur for jautrs funny. DE untouched."
  ),
  "g2/a1/is|machen|idx:386|lv, study|MISTRANSLATION|gpt-5.6-luna": entry(
    {
      lv: "gera • búa til",
      "study.translation": "gera • búa til",
      "study.explanation": [
        "Meginhugsun: machen er mjög algengt orð sem þýðir að gera eitthvað.",
        "Þegar talað er um almenna athöfn, þýðir machen gera.",
        "Þegar eitthvað er búið til eða undirbúið, þýðir machen búa til.",
        "Í mörgum setningum þýðist machen náttúrulega, ekki orðrétt.",
      ],
      "study.examples[0].lv": "Hvað ertu að gera?",
      "study.examples[1].lv": "Ég er að gera heimavinnu.",
      "study.examples[2].lv": "Við búum til pizzu.",
      "study.examples[3].lv": "Það er gaman.",
      "study.tip.text": "Mundu: Was machst du? = Hvað ertu að gera?",
      "study.important[0]":
        "machen er mjög víðtækt orð, en á íslensku þarf oft að þýða náttúrulega eftir aðstæðum.",
      "study.important[1]":
        "Das macht Spaß þýðir það er gaman, ekki bóklega það gerir gleði.",
    },
    "IS machen composite: ET Tegema•Forbered/NO→gera•búa til throughout lv/study for darīt•taisīt. DE untouched."
  ),
  "g2/a1/is|Mädchen|idx:387|lv|MISTRANSLATION|gpt-5.6-luna": entry(
    { lv: "stúlka" },
    "IS Mädchen lv: NO Pike→stúlka for meitene girl. DE untouched."
  ),
  "g2/a1/is|Mahlzeit|idx:388|lv|MISTRANSLATION|gpt-5.6-luna": entry(
    { lv: "máltíð" },
    "IS Mahlzeit lv: NO Søk etter akkorder→máltíð for maltīte meal. DE untouched."
  ),
  "g2/a1/is|Mai|idx:389|lv|MISTRANSLATION|gpt-5.6-luna": entry(
    { lv: "maí" },
    "IS Mai lv: loan Mai→maí for maijs May (month). DE untouched."
  ),
  "g2/a1/is|Mal|idx:390|lv, study|MISTRANSLATION|gpt-5.6-luna": entry(
    {
      lv: "skipti",
      "study.translation": "skipti",
      "study.explanation": [
        "Meginhugsun: das Mal þýðir skipti eða sinni.",
        "Oft notað með tölum: ein Mal, zwei Mal, drei Mal.",
        "Með röðunartölu: das erste Mal, das zweite Mal.",
        "Ekki rugla við smáorðið mal (Komm mal her!) — það er annað orð.",
      ],
      "study.examples[0].lv": "Í fyrsta skiptið var erfitt.",
      "study.examples[1].lv": "Ég hef verið í Berlín tvisvar.",
      "study.examples[2].lv": "Einu sinni nægir.",
      "study.examples[3].lv": "Aftur einu sinni, takk!",
      "study.tip.text":
        "Mundu: das Mal = skipti (nafnorð); mal án greinis = tímabundin partikla.",
      "study.important[0]": "das Mal / die Male — nafnorð með greini.",
      "study.important[1]": "ein Mal, zwei Mal — telur endurtekningar.",
      "study.important[2]":
        "mal án greinis (Komm mal her!) er ekki það sama og das Mal.",
    },
    "IS Mal composite: NO Snor/ET→skipti throughout lv/study for reize time/occasion. DE untouched."
  ),
  "g2/a1/is|malen|a1.card.malen.native|MULTI_TRANSLATION|deterministic/multi-translation": entry(
    { lv: "mála • lita" },
    "IS malen native: ET Maalima•Värvima→mála•lita for gleznot•krāsot paint. DE untouched."
  ),
  "g2/a1/is|malen|idx:391|lv|MISTRANSLATION|gpt-5.6-luna": entry(
    { lv: "mála • lita" },
    "IS malen lv: ET Maalima•Värvima→mála•lita for gleznot•krāsot paint. DE untouched."
  ),
  "g2/a1/is|manchmal|idx:392|lv|MISTRANSLATION|gpt-5.6-luna": entry(
    { lv: "stundum" },
    "IS manchmal lv: ET Vahel→stundum for dažreiz sometimes. DE untouched."
  ),
  "g2/a1/is|Mandarine|idx:393|lv|ORTHOGRAPHY|gpt-5.6-luna": entry(
    { lv: "mandarína" },
    "IS Mandarine lv: EN Mandarin→mandarína for mandarīns mandarin. DE untouched."
  ),
  "g2/a1/is|Mann|idx:394|lv; study|TARGET_LANGUAGE_CORRUPTION|gpt-5.6-luna": entry(
    {
      lv: "maður • eiginmaður",
      "study.translation": "maður • eiginmaður",
      "study.explanation": [
        "Meginhugsun: der Mann þýðir karl (kyn) eða eiginmann.",
        "Þegar talað er um karlmann eða persónu, der Mann = maður.",
        "Þegar talað er um maka, der Mann = eiginmaður (mein Mann = minn eiginmaður).",
        "Eignarfornafn (mein/dein/ihr Mann) þýðir næstum alltaf eiginmann.",
        "Fleirtala: die Männer.",
        "Kvenkynið die Frau er samsvarandi orð fyrir konu.",
      ],
      "study.examples[0].lv": "Hann er góður maður.",
      "study.examples[1].lv": "Þetta er minn eiginmaður.",
      "study.examples[2].lv": "Hversu margir menn eru hér?",
      "study.examples[3].lv": "Eiginmaður minn vinnur í Berlín.",
      "study.examples[4].lv": "Maðurinn er í jakkafötum.",
      "study.examples[5].lv": "Eiginmaður hennar er læknir.",
      "study.tip[0]":
        "Með eignarfornafni (mein/dein/ihr Mann) er næstum alltaf átt við eiginmann.",
      "study.tip[1]": "Án eignarfornafns (der Mann, ein Mann) er venjulega átt við karl.",
      "study.important[0]":
        "der Mann = karl EÐA eiginmaður — fer eftir samhengi.",
      "study.important[1]":
        "mein Mann = minn eiginmaður (ekki minn karl).",
      "study.important[2]": "Fleirtala: die Männer.",
    },
    "IS Mann composite: ET Mees•Abikaasa/NO→maður•eiginmaður throughout lv/study for vīrietis•vīrs. DE untouched."
  ),
  "g2/a1/is|Marmelade|idx:395|lv|MISTRANSLATION|gpt-5.6-luna": entry(
    { lv: "ávaxtasulta" },
    "IS Marmelade lv: garbage Mose→ávaxtasulta for ievārījums jam. DE untouched."
  ),
  "g2/a1/is|März|idx:396|lv|MISTRANSLATION|gpt-5.6-luna": entry(
    { lv: "mars" },
    "IS März lv: garbage Mars→mars for marts March (month). DE untouched."
  ),
  "g2/a1/is|Maus|idx:397|lv|TRANSLATION_ERROR|gpt-5.6-luna": entry(
    { lv: "mús" },
    "IS Maus lv: garbage Her→mús for pele mouse. DE untouched."
  ),
  "g2/a1/is|Meer|idx:398|lv|TRANSLATION_ERROR|gpt-5.6-luna": entry(
    { lv: "haf" },
    "IS Meer lv: garbage Mary→haf for jūra sea. DE untouched."
  ),
  "g2/a1/is|Mehl|idx:399|lv|TRANSLATION_ERROR|gpt-5.6-luna": entry(
    { lv: "hveiti" },
    "IS Mehl lv: garbage Ja→hveiti for milti flour. DE untouched."
  ),
  "g2/a1/is|mehr|idx:400|lv|TRANSLATION_ERROR|gpt-5.6-luna": entry(
    { lv: "meira" },
    "IS mehr lv: NO Flere→meira for vairāk more. DE untouched."
  ),
  "g2/a1/is|mein|idx:401|lv|MISTRANSLATION|gpt-5.6-luna": entry(
    { lv: "minn" },
    "IS mein lv: NO Min→minn for mans my. DE untouched."
  ),
  "g2/a1/is|Mensch|idx:402|lv|WRONG_LANGUAGE|gpt-5.6-luna": entry(
    { lv: "manneskja" },
    "IS Mensch lv: ET Inimene→manneskja for cilvēks human/person. DE untouched."
  ),
  "g2/a1/is|Messer|idx:403|lv|MISTRANSLATION|gpt-5.6-luna": entry(
    { lv: "hnífur" },
    "IS Messer lv: garbage Nougat→hnífur for nazis knife. DE untouched."
  ),
  "g2/a1/is|Meter|idx:404|lv|WRONG_LANGUAGE|gpt-5.6-luna": entry(
    { lv: "metri" },
    "IS Meter lv: NO Møte→metri for metrs meter. DE untouched."
  ),
  "g2/a1/is|Milch|idx:405|lv|MISTRANSLATION|gpt-5.6-luna": entry(
    { lv: "mjólk" },
    "IS Milch lv: garbage Pim→mjólk for piens milk. DE untouched."
  ),
  "g2/a1/is|Million|idx:406|lv|MISTRANSLATION|gpt-5.6-luna": entry(
    { lv: "milljón" },
    "IS Million lv: loan Million→milljón for miljons million. DE untouched."
  ),
  "g2/a1/is|Minute|idx:407|lv|WRONG_LANGUAGE|gpt-5.6-luna": entry(
    { lv: "mínúta" },
    "IS Minute lv: NO Minutt→mínúta for minūte minute. DE untouched."
  ),
  "g2/a1/is|mit|idx:408|lv; study.explanation; study.important|TARGET_LANGUAGE_CORRUPTION|gpt-5.6-luna": entry(
    {
      lv: "með",
      "study.explanation": [
        "Meginhugsun: mit þýðir með eða -með.",
        "Notað þegar einhver fer eða gerir eitthvað ásamt einhverju eða einhverjum.",
        "Með samgöngum: mit dem Bus, mit dem Auto.",
        "A1 stig: mjög algengar setningar eru mit dem Bus, mit dem Auto og mit dir.",
      ],
      "study.important[0]":
        "mit krefst þolfalls: mit dem Bus, mit der Mutter, mit dir.",
      "study.important[1]":
        "Kommst du mit? þýðir Viltu koma með mér?",
    },
    "IS mit partial study: NO - gå/ET→með in lv+explanation+important for ar with. DE untouched."
  ),
  "g2/a1/is|mitnehmen|idx:409|lv|WRONG_LANGUAGE|gpt-5.6-luna": entry(
    { lv: "taka með sér" },
    "IS mitnehmen lv: NO Ta det→taka með sér for ņemt līdzi take along. DE untouched."
  ),
  "g2/a1/is|Mittag|idx:410|lv|WRONG_LANGUAGE|gpt-5.6-luna": entry(
    { lv: "hádegi" },
    "IS Mittag lv: ET Keskpäev→hádegi for pusdiena noon. DE untouched."
  ),
  "g2/a1/is|Mittagessen|idx:411|lv|WRONG_LANGUAGE|gpt-5.6-luna": entry(
    { lv: "hádegisverður" },
    "IS Mittagessen lv: ET Lõunasöök→hádegisverður for pusdienas lunch. DE untouched."
  ),
  "g2/a1/is|Mittwoch|idx:412|lv|WRONG_LANGUAGE|gpt-5.6-luna": entry(
    { lv: "miðvikudagur" },
    "IS Mittwoch lv: ET Kolmapäev→miðvikudagur for trešdiena Wednesday. DE untouched."
  ),
  "g2/a1/is|mögen|idx:413|lv; study|TARGET_LANGUAGE_CORRUPTION|gpt-5.6-luna": entry(
    {
      lv: "líka við",
      "study.translation": "líka við",
      "study.explanation": [
        "Meginhugsun: mögen þýðir að líka við eitthvað.",
        "Ich mag... = Mér líkar við...",
        "Möchte er annað form, notað kurteislega: ég myndi vilja.",
        "A1 stig: mikilvægasta setningin er Ich mag das.",
      ],
      "study.examples[0].lv": "Mér líkar við tónlist.",
      "study.examples[1].lv": "Líkar þér kaffi?",
      "study.examples[2].lv": "Henni líkar við börn.",
      "study.examples[3].lv": "Ég myndi vilja fá kaffi.",
      "study.comparison[0].meaning": "líka við",
      "study.comparison[0].example": "Ich mag Musik. – Mér líkar við tónlist.",
      "study.comparison[1].meaning": "myndi vilja",
      "study.comparison[1].example": "Ich möchte einen Kaffee. – Ég myndi vilja fá kaffi.",
      "study.comparison[2].meaning": "vilja",
      "study.comparison[2].example": "Ich will nach Hause. – Ég vil heim.",
      "study.comparison[3].meaning": "elska",
      "study.comparison[3].example": "Ich liebe dich. – Ég elska þig.",
      "study.tip.text": "Mundu: Ich mag... = Mér líkar við...",
      "study.important[0]":
        "mögen er ekki aðalorðið fyrir kurteisa ósk; flestir nota möchte.",
      "study.important[1]":
        "Ich mag Kaffee þýðir mér finnst kaffi gott.",
    },
    "IS mögen composite: ET Meeldima/NO Jeg liker→líka við throughout lv/study for patikt like. DE untouched."
  ),
  "g2/a1/is|Möhre|idx:414|lv|WRONG_LANGUAGE|gpt-5.6-luna": entry(
    { lv: "gulrófa" },
    "IS Möhre lv: NO Gulrøtter→gulrófa for burkāns carrot. DE untouched."
  ),
  "g2/a1/is|Monat|idx:415|lv|WRONG_LANGUAGE|gpt-5.6-luna": entry(
    { lv: "mánuður" },
    "IS Monat lv: ET Kuu→mánuður for mēnesis month. DE untouched."
  ),
  "g2/a1/is|Montag|idx:416|lv|WRONG_LANGUAGE|gpt-5.6-luna": entry(
    { lv: "mánudagur" },
    "IS Montag lv: ET Esmaspäev→mánudagur for pirmdiena Monday. DE untouched."
  ),
};

const keys = Object.keys(decisions);
if (keys.length !== 50) {
  throw new Error(`Expected 50 decisions, got ${keys.length}`);
}

fs.writeFileSync(outPath, `${JSON.stringify(decisions, null, 2)}\n`);
console.log(JSON.stringify({ written: outPath, count: keys.length }, null, 2));
