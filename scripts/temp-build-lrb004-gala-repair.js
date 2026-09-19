#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");

const outPath = path.join(__dirname, "data/g2-a1-owner-pending/LRB-004-decisions.json");

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
  // ── ET baden (NELABOT→LABOT) ─────────────────────────────────────────
  "g2/a1/et|baden|idx:68|lv, study.translation, study.explanation, study.examples, study.comparison, study.important|WRONG_TARGET_LANGUAGE|gpt-5.6-luna": labot(
    {
      lv: "suplema",
      "study.translation": "suplema",
      "study.explanation": [
        "Põhiidee: baden tähendab suplema või vees olema.",
        "baden kasutatakse, kui jutt on puhkusest vees, järves, meres või basseinis.",
        "Kui rõhk on ujumisliigutustel või sportil, kasutatakse saksa keeles sagedamini schwimmen.",
        "baden ja schwimmen ei ole sünonüümid.",
      ],
      "study.examples[0].lv": "Ma lähen suplema.",
      "study.examples[1].lv": "Me läheme järves suplema.",
      "study.examples[2].lv": "Ta ujub väga hästi.",
      "study.examples[3].lv": "Ma käin igal esmaspäeval ujumas.",
      "study.comparison[0].meaning": "suplema / vees olema",
      "study.comparison[0].example": "Ich gehe baden. – Ma lähen suplema.",
      "study.comparison[1].meaning": "ujumist liikumise või spordialana",
      "study.comparison[1].example": "Er schwimmt sehr gut. – Ta ujub väga hästi.",
      "study.comparison[2].meaning": "duši all käima",
      "study.comparison[2].example": "Ich dusche am Morgen. – Ma käin hommikul duši all.",
      "study.comparison[3].meaning": "ujuma minema",
      "study.comparison[3].example":
        "Ich gehe heute schwimmen. – Ma lähen täna ujuma.",
      "study.important[0]": "baden ja schwimmen ei ole sünonüümid.",
      "study.important[1]":
        "baden = suplema/vees olema; schwimmen = ujuma (liikumine või sport).",
    },
    "ET baden gala: source peldēties→suplema only; no vannis käima/end pesema in headword; full baden vs schwimmen composite. DE untouched."
  ),

  // ── ET bei (full composite) ───────────────────────────────────────────
  "g2/a1/et|bei|idx:78|lv, study.translation, study.explanation, study.examples, study.comparison, study.important|WRONG_TARGET_LANGUAGE|gpt-5.6-luna": labot(
    {
      "study.comparison[2].meaning": "kellegi juurde (suund)",
      "study.comparison[2].example":
        "Ich gehe zu meinem Freund. – Ma lähen oma sõbra juurde.",
      "study.comparison[4].meaning": "juures (asukoht)",
      "study.comparison[4].example": "beim Arzt – arsti juures",
      "study.important[2]":
        "bei = juures (asukoht); zu/zum = juurde (suund).",
    },
    "ET bei gala: zu=kellegi juurde (suund); bei=location; full post-merge composite audit. DE untouched."
  ),

  // ── ET Besuch (source fidelity) ─────────────────────────────────────
  "g2/a1/et|Besuch|idx:87|lv, study.translation, study.explanation, study.examples, study.comparison, study.important|WRONG_TARGET_LANGUAGE|gpt-5.6-luna": labot(
    {
      lv: "külastus",
      "study.translation": "külastus",
      "study.explanation": [
        "Põhitähendus: der Besuch tähendab külastust.",
        "Kui räägitakse kohast või üritusest, sobib eesti keeles tavaliselt külastus.",
        "Kui räägitakse inimese külastamisest, võib kontekstis sobida ka külaskäik või visiit.",
        "Mitmus on die Besuche.",
      ],
      "study.comparison[0].meaning": "külastus • külaskäik • visiit",
      "study.important[0]":
        "der Besuch = külastus; laiemad tähendused (külaskäik, visiit) sõltuvad kontekstist.",
    },
    "ET Besuch gala: lv_source apmeklējums→külastus scalar only; broader senses in comparison only. DE untouched."
  ),

  "g2/a1/et|besuchen|idx:89|lv, study.translation, study.explanation, study.examples, study.comparison, study.important|WRONG_TARGET_LANGUAGE|gpt-5.6-luna": nelabot(
    "ET besuchen study: külastama kohta/inimest and accusative rule align with apmeklēt place vs person. DE untouched."
  ),

  "g2/a1/et|bis|idx:91|lv, study.translation, study.explanation, study.examples, study.comparison, study.important|WRONG_LANGUAGE_AND_MEANING_MISMATCH|gpt-5.6-luna": labot(
    {
      "study.comparison[0].example":
        "Ich bleibe bis morgen. – Ma jään homseni.",
      "study.comparison[1].example": "bis zum Bahnhof – jaama juurde",
      "study.comparison[2].example":
        "Bis jetzt habe ich nichts verstanden. – Siiani pole ma midagi aru saanud.",
    },
    "ET bis gala: comparison examples homseni/jaama juurde/siiani aru saanud; DE untouched."
  ),

  "g2/a1/et|bitte|idx:93|study|TARGET_LANGUAGE_WRONG_LANGUAGE|gpt-5.6-luna": nelabot(
    "ET bitte study: palun politeness word and bitte vs die Bitte noun contrast correctly taught for lūdzu. DE untouched."
  ),

  "g2/a1/et|Bitte|idx:94|study|TARGET_LANGUAGE_WRONG_LANGUAGE|gpt-5.6-luna": labot(
    {
      "study.explanation[0]":
        "Põhiidee: Nimisõna artikliga die ja suure algustähega. Konkreetne palve või taotlus.",
      "study.explanation[1]":
        "die Bitte tähendab peamiselt: palve või soov.",
      "study.explanation[2]":
        "Sageli kirjeldab: konkreetset palvet või taotlust.",
    },
    "ET Bitte gala: noun palve/soov teaching; remove viisakus leak in explanation. DE untouched."
  ),

  "g2/a1/et|bleiben|idx:101|study|TARGET_LANGUAGE_WRONG_LANGUAGE|gpt-5.6-luna": labot(
    {
      "study.examples[3].lv": "Ma lähen koju.",
      "study.comparison[1].example":
        "Ich gehe nach Hause. – Ma lähen koju.",
    },
    "ET bleiben gala: Ich gehe nach Hause→Ma lähen koju; gehen contrast in comparison. DE untouched."
  ),

  "g2/a1/et|bringen|idx:111|study|TARGET_LANGUAGE_WRONG_LANGUAGE|gpt-5.6-luna": labot(
    {
      "study.comparison[0].meaning": "tooma / viima",
      "study.comparison[0].example":
        "Ich bringe dir ein Buch. – Ma toon sulle raamatu.",
      "study.comparison[1].meaning": "viima kohale",
      "study.comparison[1].example":
        "Ich bringe das Paket zur Post. – Ma viin paki postkontorisse.",
      "study.comparison[2].meaning": "viima (nt lapsed kooli)",
      "study.comparison[2].example":
        "Ich bringe die Kinder zur Schule. – Ma viin lapsed kooli.",
      "study.comparison[3].meaning": "kaasa tooma",
      "study.comparison[3].example":
        "Bringst du Brot mit? – Kas sa tood leiba kaasa?",
      "study.comparison[4].meaning": "võtma",
      "study.comparison[4].example":
        "Ich nehme das Buch. – Ma võtan raamatu.",
    },
    "ET bringen gala: four comparison ET lines; nehmen contrast; no DE leaks. DE untouched."
  ),

  "g2/a1/et|da|idx:126|study|TARGET_LANGUAGE_WRONG_LANGUAGE|gpt-5.6-luna": nelabot(
    "ET da study: seal/siin place-word and da/hier/dort/dann contrast acceptable for tur at A1. DE untouched."
  ),

  "g2/a1/et|essen|idx:690|lv, study.*|LANGUAGE_MISMATCH|gpt-5.6-luna": nelabot(
    "ET essen study: sööma verb vs das Essen noun distinction correctly taught for ēst. DE untouched."
  ),

  "g2/a1/et|Fernsehen|idx:688|lv, study.*|LANGUAGE_MISMATCH|gpt-5.6-luna": nelabot(
    "ET Fernsehen study: televisioon noun singular-only and fernsehen verb split match televīzija. DE untouched."
  ),

  "g2/a1/et|können|idx:319|lv, study|WRONG_TARGET_LANGUAGE|gpt-5.6-luna": nelabot(
    "ET können study: saama/oskama modal ability/know-how teaching aligns with varēt • prast. DE untouched."
  ),

  "g2/a1/et|kosten|idx:320|lv, study.examples|WRONG_TARGET_LANGUAGE_AND_MEANING|gpt-5.6-luna": labot(
    {
      "study.examples[4].lv": "Ma maksan arve.",
      "study.examples[5].lv": "Kas ma saan sularahas maksta?",
      "study.examples[6].lv": "Ta maksab kaardiga.",
      "study.examples[7].lv": "Ma maksan kohe.",
    },
    "ET kosten gala: bezahlen/zahlen examples proper maksma Estonian; DE untouched."
  ),

  "g2/a1/et|Laden|idx:349|lv, study.examples|WRONG_TARGET_LANGUAGE_AND_MEANING|gpt-5.6-luna": labot(
    {
      "study.examples[3].lv": "Ma pean oma telefoni laadima.",
    },
    "ET Laden gala: Handy laden→telefoni laadima not shop open. DE untouched."
  ),

  "g2/a1/et|Land|idx:351|lv, study|WRONG_TARGET_LANGUAGE|gpt-5.6-luna": nelabot(
    "ET Land study: riik/maa country/land dual sense matches valsts • zeme. DE untouched."
  ),

  "g2/a1/et|lang|idx:352|lv, study|WRONG_TARGET_LANGUAGE|gpt-5.6-luna": nelabot(
    "ET lang study: pikk/kauakestev length vs duration covers garš • ilgs. DE untouched."
  ),

  // ── ET Mann (full composite) ────────────────────────────────────────
  "g2/a1/et|Mann|idx:394|lv; study.explanation; study.examples; study.tip; study.important|WRONG_TARGET_LANGUAGE|gpt-5.6-luna": labot(
    {
      lv: "mees • abikaasa",
      "study.translation": "mees • abikaasa",
      "study.explanation": [
        "Põhiidee: der Mann võib tähendada meest (sugu) või abikaasat (abielupool).",
        "Kui jutt on lihtsalt soost või isikust, der Mann = mees.",
        "Kui jutt on abikaasast, der Mann = abikaasa (mein Mann = minu abikaasa).",
        "Omastav asesõna (mein/dein/ihr Mann) tähendab peaaegu alati abikaasat.",
        "Mitmuses: die Männer.",
      ],
      "study.examples[0].lv": "Ta on tore mees.",
      "study.examples[1].lv": "See on minu abikaasa.",
      "study.examples[3].lv": "Minu abikaasa töötab Berliinis.",
      "study.examples[5].lv": "Tema abikaasa on arst.",
      "study.tip[0]":
        "Ilma omastava asesõnata (der Mann, ein Mann) = mees; mein/dein/ihr Mann = abikaasa.",
      "study.important[0]":
        "der Mann = mees (sugu) VÕI abikaasa (abielus) — olenevalt kontekstist.",
      "study.important[1]":
        "mein Mann = minu abikaasa (mitte lihtsalt «minu mees»).",
      "study.important[2]": "Mitmuses: die Männer.",
    },
    "ET Mann gala: mees≠abikaasa clearly distinguished; mein Mann=abikaasa in examples/important. DE untouched."
  ),

  "g2/a1/et|mit|idx:408|lv; study.explanation; study.examples; study.important|WRONG_TARGET_LANGUAGE|gpt-5.6-luna": nelabot(
    "ET mit study: -ga/with and mit+dative examples correctly teach ar. DE untouched."
  ),

  "g2/a1/et|mögen|idx:413|lv; study.explanation; study.examples; study.tip; study.important|WRONG_TARGET_LANGUAGE|gpt-5.6-luna": nelabot(
    "ET mögen study: meeldib and möchte contrast align with patikt teaching. DE untouched."
  ),

  // ── ET morgen (NELABOT→LABOT) ─────────────────────────────────────────
  "g2/a1/et|morgen|idx:417|lv; study.explanation; study.examples; study.tip; study.important|WRONG_TARGET_LANGUAGE|gpt-5.6-luna": labot(
    {
      lv: "homme",
      "study.translation": "homme",
      "study.explanation": [
        "Põhiidee: Ajamäärus väikese algustähega. Tähendab järgmist päeva — homme.",
        "morgen tähendab järgmisel päeval (Ich komme morgen = ma tulen homme).",
        "Ei tohi segi ajada nimisõnaga der Morgen (hommik).",
      ],
      "study.examples[0].lv": "Ma tulen homme.",
      "study.examples[1].lv": "Homseni!",
      "study.examples[2].lv": "Ma tulen homme.",
      "study.examples[3].lv": "Homme on esmaspäev.",
      "study.examples[4].lv": "Tere hommikust!",
      "study.examples[5].lv": "Hommik on ilus.",
      "study.tip[0]":
        "morgen = homme (ajamäärus); der Morgen = hommik (nimisõna).",
      "study.important[0]":
        "morgen kirjutatakse väikese tähega — ajamäärsõna (homme).",
      "study.important[1]":
        "der Morgen suure M-iga = hommik (nimisõna), mitte homme.",
      "study.important[2]":
        "Guten Morgen! = Tere hommikust! (nimisõna, mitte homme).",
    },
    "ET morgen gala: adverb homme only in explanation; remove der-Morgen noun clutter; examples/tip/important audit. DE untouched."
  ),

  "g2/a1/et|Morgen|idx:418|lv; study.explanation; study.examples; study.tip; study.important|WRONG_TARGET_LANGUAGE|gpt-5.6-luna": labot(
    {
      lv: "hommik",
      "study.translation": "hommik",
      "study.explanation": [
        "Põhiidee: Nimisõna artikliga der ja suure algustähega. Päevaosa — hommik.",
        "der Morgen tähendab hommikut kui päevaosa.",
        "Ei tohi segi ajada ajamäärusega morgen (homme).",
      ],
      "study.examples[0].lv": "Tere hommikust!",
      "study.examples[1].lv": "Homseni!",
      "study.examples[2].lv": "Ma tulen homme.",
      "study.examples[3].lv": "Homme on esmaspäev.",
      "study.examples[4].lv": "Tere hommikust!",
      "study.examples[5].lv": "Hommik on ilus.",
      "study.tip[0]":
        "der Morgen = hommik (nimisõna); morgen = homme (ajamäärus).",
      "study.important[0]":
        "der Morgen = hommik (päevaosa).",
      "study.important[1]":
        "morgen väikese m-iga = homme (järgmine päev).",
      "study.important[2]":
        "Guten Morgen! = Tere hommikust!",
    },
    "ET Morgen gala: der Morgen=hommik; fix scrambled examples; morgen adverb contrast in important. DE untouched."
  ),

  "g2/a1/et|noch|idx:451|lv, study|WRONG_LANGUAGE|gpt-5.6-luna": nelabot(
    "ET noch study: veel still/yet and noch nicht examples teach vēl. DE untouched."
  ),

  "g2/a1/et|nur|idx:456|lv, study|WRONG_LANGUAGE|gpt-5.6-luna": nelabot(
    "ET nur study: ainult/üksnes quantity/choice limiter matches tikai • vienīgi. DE untouched."
  ),

  "g2/a1/et|ob|idx:457|lv, study|WRONG_LANGUAGE|gpt-5.6-luna": nelabot(
    "ET ob study: kas indirect-question and ob vs oder contrast correctly taught for vai. DE untouched."
  ),

  "g2/a1/et|oder|idx:459|lv, study|WRONG_LANGUAGE|gpt-5.6-luna": nelabot(
    "ET oder study: või choice and oder vs ob distinction matches vai • jeb. DE untouched."
  ),

  "g2/a1/et|passen|idx:471|lv, study|WRONG_LANGUAGE|gpt-5.6-luna": nelabot(
    "ET passen study: sobima fit/size/color and Das passt phrase teach derēt • piestāvēt. DE untouched."
  ),

  "g2/a1/et|sicher|idx:548|lv; study.*|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna": nelabot(
    "ET sicher study: kindel/kindlasti safe vs certainly covers drošs • noteikti. DE untouched."
  ),

  "g2/a1/et|sie|idx:549|lv; study.*|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna": nelabot(
    "ET sie study: nemad/nad plural/feminine overview acceptable for viņi/viņas at A1. DE untouched."
  ),

  "g2/a1/et|Sie|idx:550|lv; study.*|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna": nelabot(
    "ET Sie study: teie formal address with capital S matches jūs polite form. DE untouched."
  ),

  "g2/a1/et|sitzen|idx:558|lv; study.*|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna": nelabot(
    "ET sitzen study: istuma and stehen/liegen contrast examples correctly teach sēdēt vs seisma. DE untouched."
  ),

  "g2/a1/et|sollen|idx:564|lv; study.*|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna": nelabot(
    "ET sollen study: peaks obligation-from-instruction sense matches vajadzētu. DE untouched."
  ),

  "g2/a1/et|werden|idx:657|lv, study.explanation, study.examples, study.comparison, study.important|WRONG_LANGUAGE|gpt-5.6-luna": nelabot(
    "ET werden study: saama/kutsuma become/passive and werden vs sein contrast teach kļūt. DE untouched."
  ),

  "g2/a1/et|Wetter|idx:658|lv, study.explanation, study.examples, study.comparison, study.important|WRONG_LANGUAGE|gpt-5.6-luna": nelabot(
    "ET Wetter study: ilm weather vs Zeit time distinction matches laiks (laikapstākļi). DE untouched."
  ),

  "g2/a1/et|zu|idx:668|lv, study.explanation, study.examples, study.comparison, study.important|WRONG_LANGUAGE|gpt-5.6-luna": nelabot(
    "ET zu study: juurde/liiga direction and zu Hause examples teach uz • pie. DE untouched."
  ),

  "g2/a1/et|Zug|idx:671|lv, study.explanation, study.examples, study.comparison, study.important|WRONG_LANGUAGE|gpt-5.6-luna": nelabot(
    "ET Zug study: rong train noun and Zug vs ziehen contrast match vilciens. DE untouched."
  ),

  // ── ET zum (NELABOT→LABOT) ────────────────────────────────────────────
  "g2/a1/et|zum|idx:672|lv, study.*|LANGUAGE_MISMATCH|gpt-5.6-luna": labot(
    {
      lv: "-sse • juurde",
      "study.translation": "juurde",
      "study.explanation": [
        "zum on eessõna zu ja artikli dem lühend.",
        "Täisvorm: zu dem (Dativ).",
        "Kasutatakse mees- ja kesksoost nimisõnadega suuna või eesmärgi näitamiseks.",
        "zum Arzt = arsti juurde (suund), mitte arsti juures (asukoht).",
        "Naissoost sõnade puhul: zu + der → zur.",
      ],
      "study.comparison[0].meaning": "-sse / juurde (suund)",
      "study.comparison[0].example": "zum Arzt – arsti juurde",
      "study.comparison[1].meaning": "-sse / juurde (naissoost: zu + der)",
      "study.comparison[1].example": "zur Schule – kooli",
      "study.comparison[4].meaning": "juures (asukoht)",
      "study.comparison[4].example": "beim Arzt – arsti juures",
      "study.important[0]":
        "zum = zu dem, mees- ja kesksoost nimisõnaga Dativis.",
      "study.important[1]":
        "zum näitab suunda (juurde); bei/beim näitab asukohta (juures).",
      "study.important[3]":
        "Ära aja segi: zum Arzt (arsti juurde) vs. beim Arzt (arsti juures).",
    },
    "ET zum gala: zu+dem Dativ; zum Arzt=arsti juurde; zur feminine; bei=location vs zum=direction. DE untouched."
  ),

  // ── FI (13) ─────────────────────────────────────────────────────────
  "g2/a1/fi|a1-ab|a1.card.a1-ab.study.comparison[1].meaning|MULTI_TRANSLATION|deterministic/multi-translation": nelabot(
    "FI ab comparison[1]: Kellestki/millestki • Päritolu mirrors LV no kāda/kaut kā • izcelsme from-origin senses. DE untouched."
  ),
  "g2/a1/fi|a1-aber|a1.card.a1-aber.study.comparison[0].meaning|MULTI_TRANSLATION|deterministic/multi-translation": nelabot(
    "FI aber comparison[0]: Vastand • Vastuväide • Siiski preserves contrast/objection/however LV pretstats • iebilde • tomēr. DE untouched."
  ),
  "g2/a1/fi|a1-also|a1.card.a1-also.study.comparison[0].meaning|MULTI_TRANSLATION|deterministic/multi-translation": nelabot(
    "FI also comparison[0]: Seega • Järelikult correctly maps thus/therefore LV tātad • līdz ar to. DE untouched."
  ),
  "g2/a1/fi|a1-an|a1.card.a1-an.native|MULTI_TRANSLATION|deterministic/multi-translation": nelabot(
    "FI an native: Juures • Peal • Ligi acceptably expands at/on/near LV pie for A1 an teaching. DE untouched."
  ),
  "g2/a1/fi|a1-an|a1.card.a1-an.study.translation|MULTI_TRANSLATION|deterministic/multi-translation": nelabot(
    "FI an study.translation: Juures • Pinna küljes • Serva ääres mirrors native at/surface/edge LV pie gloss. DE untouched."
  ),
  "g2/a1/fi|a1-aufs|a1.card.a1-aufs.native|MULTI_TRANSLATION|deterministic/multi-translation": nelabot(
    "FI aufs native: Peale • Otsa • Kuhu? covers onto/on-top/where LV uz movement sense. DE untouched."
  ),
  "g2/a1/fi|a1-aufs|a1.card.a1-aufs.study.translation|MULTI_TRANSLATION|deterministic/multi-translation": nelabot(
    "FI aufs study.translation mirrors native; Peale • Otsa • Kuhu? consistent with aufs card. DE untouched."
  ),
  "g2/a1/fi|a1-aus|a1.card.a1-aus.native|MULTI_TRANSLATION|deterministic/multi-translation": nelabot(
    "FI aus native: -st • Välja correctly distinguishes from-origin vs out LV no • ārā senses. DE untouched."
  ),
  "g2/a1/fi|a1-aus|a1.card.a1-aus.study.translation|MULTI_TRANSLATION|deterministic/multi-translation": nelabot(
    "FI aus study.translation mirrors native; -st • Välja consistent with aus dual-sense card. DE untouched."
  ),
  "g2/a1/fi|a1-besuch|a1.card.a1-besuch.study.comparison[0].meaning|MULTI_TRANSLATION|deterministic/multi-translation": nelabot(
    "FI besuch comparison[0]: vierailu • käynti • vierailu mirrors LV apmeklējums • apciemojums • vizīte visit senses. DE untouched."
  ),
  "g2/a1/fi|a1-besuchen|a1.card.a1-besuchen.study.comparison[0].meaning|MULTI_TRANSLATION|deterministic/multi-translation": nelabot(
    "FI besuchen comparison[0]: place/event vs person visit split matches LV apmeklēt vietu vs apciemot personu. DE untouched."
  ),
  "g2/a1/fi|a1-bringen|a1.card.a1-bringen.native|MULTI_TRANSLATION|deterministic/multi-translation": nelabot(
    "FI bringen native: Tooma • Viima distinguishes bring/carry LV atnest dual motion sense. DE untouched."
  ),
  "g2/a1/fi|a1-bringen|a1.card.a1-bringen.study.translation|MULTI_TRANSLATION|deterministic/multi-translation": nelabot(
    "FI bringen study.translation mirrors native; Tooma • Viima consistent with bringen card gloss. DE untouched."
  ),
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
