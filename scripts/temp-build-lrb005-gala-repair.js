#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");

const outPath = path.join(__dirname, "data/g2-a1-owner-pending/LRB-005-decisions.json");

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
  "g2/a1/fi|a1-da|a1.card.a1-da.study.comparison[0].meaning|MULTI_TRANSLATION|deterministic/multi-translation": labot(
    "Siellä • Täällä • Tuossa (yleisesti)",
    "FI da gala: ET Seal/Siin → FI Siellä/Täällä/Tuossa for tur•te•šeit. DE untouched."
  ),
  "g2/a1/fi|a1-das|a1.card.a1-das.study.comparison[2].meaning|MULTI_TRANSLATION|deterministic/multi-translation": labot(
    "Mikä • Jonka • Mitä",
    "FI das gala: ET Mis/Mille/Mida → FI Mikä/Jonka/Mitä for kurš•kura•kuru. DE untouched."
  ),
  "g2/a1/fi|a1-dass|a1.card.a1-dass.study.comparison[1].meaning|MULTI_TRANSLATION|deterministic/multi-translation": labot(
    "Koska • Siksi että",
    "FI dass gala: ET Sest/Sellepärast et → FI Koska/Siksi että for jo•tāpēc ka. DE untouched."
  ),

  // ── ein (source expansion fix) ──────────────────────────────────────
  "g2/a1/fi|a1-ein|a1.card.a1-ein.native|MULTI_TRANSLATION|deterministic/multi-translation": labot(
    "Epämääräinen artikkeli",
    "FI ein gala: lv_source nenoteiktais artikuls→Epämääräinen artikkeli only; no Yksi•Jokin. DE untouched."
  ),
  "g2/a1/fi|a1-ein|a1.card.a1-ein.study.translation|MULTI_TRANSLATION|deterministic/multi-translation": labot(
    "Epämääräinen artikkeli",
    "FI ein gala: study.translation mirrors native scalar fidelity. DE untouched."
  ),

  "g2/a1/fi|a1-einmal|a1.card.a1-einmal.native|MULTI_TRANSLATION|deterministic/multi-translation": labot(
    "Kerran • Kerta",
    "FI einmal gala: ET Üks kord/Kord → FI Kerran/Kerta for vienreiz•reiz. DE untouched."
  ),
  "g2/a1/fi|a1-einmal|a1.card.a1-einmal.study.translation|MULTI_TRANSLATION|deterministic/multi-translation": labot(
    "Kerran • Kerta",
    "FI einmal gala: study.translation mirrors native. DE untouched."
  ),
  "g2/a1/fi|a1-eis|a1.card.a1-eis.native|MULTI_TRANSLATION|deterministic/multi-translation": labot(
    "Jää • Jäätelö",
    "FI eis gala: ET Jäätis → FI Jäätelö for ledus•saldējums. DE untouched."
  ),
  "g2/a1/fi|a1-eis|a1.card.a1-eis.study.translation|MULTI_TRANSLATION|deterministic/multi-translation": labot(
    "Jää • Jäätelö",
    "FI eis gala: study.translation mirrors native. DE untouched."
  ),

  // ── erst (source expansion fix) ───────────────────────────────────────
  "g2/a1/fi|a1-erst|a1.card.a1-erst.native|MULTI_TRANSLATION|deterministic/multi-translation": labot(
    "Vasta",
    "FI erst gala: lv_source tikai→Vasta only on native/translation. DE untouched."
  ),
  "g2/a1/fi|a1-erst|a1.card.a1-erst.study.comparison[0].meaning|MULTI_TRANSLATION|deterministic/multi-translation": labot(
    "Ensin • Vasta",
    "FI erst gala: comparison[0] lv_source vispirms•tikai keeps Ensin•Vasta. DE untouched."
  ),
  "g2/a1/fi|a1-erst|a1.card.a1-erst.study.translation|MULTI_TRANSLATION|deterministic/multi-translation": labot(
    "Vasta",
    "FI erst gala: study.translation tikai→Vasta scalar. DE untouched."
  ),

  // ── es (source expansion fix) ───────────────────────────────────────
  "g2/a1/fi|a1-es|a1.card.a1-es.native|MULTI_TRANSLATION|deterministic/multi-translation": labot(
    "Se",
    "FI es gala: lv_source tas→Se only; no Se•Se; no Persoonaton muoto in scalar. DE untouched."
  ),
  "g2/a1/fi|a1-es|a1.card.a1-es.study.comparison[0].meaning|MULTI_TRANSLATION|deterministic/multi-translation": nelabot(
    "FI es comparison[0]: se•persoonaton muoto matches lv_source tas•bezpersoniska forma. DE untouched."
  ),
  "g2/a1/fi|a1-es|a1.card.a1-es.study.translation|MULTI_TRANSLATION|deterministic/multi-translation": labot(
    "Se",
    "FI es gala: study.translation tas→Se scalar only. DE untouched."
  ),

  // ── etwas (source expansion fix) ────────────────────────────────────
  "g2/a1/fi|a1-etwas|a1.card.a1-etwas.native|MULTI_TRANSLATION|deterministic/multi-translation": labot(
    "Jotain",
    "FI etwas gala: lv_source kaut kas→Jotain only; no Vähän. DE untouched."
  ),
  "g2/a1/fi|a1-etwas|a1.card.a1-etwas.study.translation|MULTI_TRANSLATION|deterministic/multi-translation": labot(
    "Jotain",
    "FI etwas gala: study.translation mirrors native scalar. DE untouched."
  ),

  "g2/a1/fi|a1-euch|a1.card.a1-euch.native|MULTI_TRANSLATION|deterministic/multi-translation": labot(
    "Teitä • Teille",
    "FI euch gala: ET Teid/Teile → FI Teitä/Teille for jūs•jums. DE untouched."
  ),
  "g2/a1/fi|a1-euch|a1.card.a1-euch.study.translation|MULTI_TRANSLATION|deterministic/multi-translation": labot(
    "Teitä • Teille",
    "FI euch gala: study.translation mirrors native. DE untouched."
  ),

  // ── fahren (source expansion fix) ───────────────────────────────────
  "g2/a1/fi|a1-fahren|a1.card.a1-fahren.native|MULTI_TRANSLATION|deterministic/multi-translation": labot(
    "Ajaa",
    "FI fahren gala: lv_source braukt→Ajaa only; no Kuljettaa•Viedä. DE untouched."
  ),
  "g2/a1/fi|a1-fahren|a1.card.a1-fahren.study.translation|MULTI_TRANSLATION|deterministic/multi-translation": labot(
    "Ajaa",
    "FI fahren gala: study.translation mirrors native scalar. DE untouched."
  ),

  // ── finden (source expansion fix) ───────────────────────────────────
  "g2/a1/fi|a1-finden|a1.card.a1-finden.native|MULTI_TRANSLATION|deterministic/multi-translation": labot(
    "Löytää",
    "FI finden gala: lv_source atrast→Löytää only; no Pitää. DE untouched."
  ),
  "g2/a1/fi|a1-finden|a1.card.a1-finden.study.translation|MULTI_TRANSLATION|deterministic/multi-translation": labot(
    "Löytää",
    "FI finden gala: study.translation mirrors native scalar. DE untouched."
  ),

  // ── Frau (source expansion fix) ─────────────────────────────────────
  "g2/a1/fi|a1-frau|a1.card.a1-frau.native|MULTI_TRANSLATION|deterministic/multi-translation": labot(
    "Nainen",
    "FI frau gala: lv_source sieviete→Nainen only; no Vaimo. DE untouched."
  ),
  "g2/a1/fi|a1-frau|a1.card.a1-frau.study.translation|MULTI_TRANSLATION|deterministic/multi-translation": labot(
    "Nainen",
    "FI frau gala: study.translation mirrors native scalar. DE untouched."
  ),

  "g2/a1/fi|a1-fuer|a1.card.a1-fuer.native|MULTI_TRANSLATION|deterministic/multi-translation": labot(
    "Varten",
    "FI für gala: lv_source priekš→Varten scalar; ET Jaoks/Eest removed. DE untouched."
  ),
  "g2/a1/fi|a1-fuer|a1.card.a1-fuer.study.translation|MULTI_TRANSLATION|deterministic/multi-translation": labot(
    "Varten",
    "FI für gala: study.translation priekš→Varten scalar. DE untouched."
  ),

  "g2/a1/fi|a1-ganz-study|a1.card.a1-ganz-study.study.comparison[0].meaning|MULTI_TRANSLATION|deterministic/multi-translation": nelabot(
    "FI ganz comparison[0]: kokonainen•kokonaan•täysin matches vesels•viss kopumā•pilnīgi. DE untouched."
  ),
  "g2/a1/fi|a1-gefallen-study|a1.card.a1-gefallen-study.study.comparison[0].meaning|MULTI_TRANSLATION|deterministic/multi-translation": nelabot(
    "FI gefallen comparison[0]: pitää•henkilö datiivissa matches patikt•persona datīvā. DE untouched."
  ),

  // ── gleich (source expansion fix) ───────────────────────────────────
  "g2/a1/fi|a1-gleich|a1.card.a1-gleich.native|MULTI_TRANSLATION|deterministic/multi-translation": labot(
    "Heti",
    "FI gleich gala: lv_source tūlīt→Heti only; no Sama. DE untouched."
  ),
  "g2/a1/fi|a1-gleich|a1.card.a1-gleich.study.translation|MULTI_TRANSLATION|deterministic/multi-translation": labot(
    "Heti",
    "FI gleich gala: study.translation mirrors native scalar. DE untouched."
  ),

  "g2/a1/fi|a1-halten|a1.card.a1-halten.native|MULTI_TRANSLATION|deterministic/multi-translation": labot(
    "Pitää",
    "FI halten gala: lv_source turēt→Pitää scalar; ET Hoidma/Peatama removed. DE untouched."
  ),
  "g2/a1/fi|a1-halten|a1.card.a1-halten.study.translation|MULTI_TRANSLATION|deterministic/multi-translation": labot(
    "Pitää",
    "FI halten gala: study.translation mirrors native scalar. DE untouched."
  ),
  "g2/a1/fi|a1-heissen|a1.card.a1-heissen.native|MULTI_TRANSLATION|deterministic/multi-translation": labot(
    "Nimeltään",
    "FI heißen gala: lv_source saukties→Nimeltään scalar; ET Nimi olema removed. DE untouched."
  ),
  "g2/a1/fi|a1-heissen|a1.card.a1-heissen.study.translation|MULTI_TRANSLATION|deterministic/multi-translation": labot(
    "Nimeltään",
    "FI heißen gala: study.translation mirrors native scalar. DE untouched."
  ),
  "g2/a1/fi|a1-hoeren-study|a1.card.a1-hoeren-study.native|MULTI_TRANSLATION|deterministic/multi-translation": labot(
    "Kuulla • Kuunnella",
    "FI hören gala: ET Kuulma/Kuulama → FI Kuulla/Kuunnella for dzirdēt•klausīties. DE untouched."
  ),
  "g2/a1/fi|a1-hoeren-study|a1.card.a1-hoeren-study.study.translation|MULTI_TRANSLATION|deterministic/multi-translation": labot(
    "Kuulla • Kuunnella",
    "FI hören gala: study.translation mirrors native. DE untouched."
  ),
  "g2/a1/fi|a1-huebsch|a1.card.a1-huebsch.study.comparison[0].meaning|MULTI_TRANSLATION|deterministic/multi-translation": nelabot(
    "FI hübsch comparison[0]: kaunis•houkutteleva ulkonäöllään matches glīts•pievilcīgs. DE untouched."
  ),
  "g2/a1/fi|a1-ihr|a1.card.a1-ihr.native|MULTI_TRANSLATION|deterministic/multi-translation": labot(
    "Te • Hänelle",
    "FI ihr gala: ET Teie/Temale → FI Te/Hänelle for jūs•viņai. DE untouched."
  ),
  "g2/a1/fi|a1-ihr|a1.card.a1-ihr.study.translation|MULTI_TRANSLATION|deterministic/multi-translation": labot(
    "Te • Hänelle",
    "FI ihr gala: study.translation mirrors native. DE untouched."
  ),
  "g2/a1/fi|a1-im|a1.card.a1-im.native|MULTI_TRANSLATION|deterministic/multi-translation": labot(
    "Sisällä (-ssa) • Missä?",
    "FI im gala: ET Sees/Kus → FI Sisällä (-ssa)/Missä? for iekšā•kur?. DE untouched."
  ),
  "g2/a1/fi|a1-im|a1.card.a1-im.study.translation|MULTI_TRANSLATION|deterministic/multi-translation": labot(
    "Sisällä (-ssa) • Missä?",
    "FI im gala: study.translation mirrors native. DE untouched."
  ),
  "g2/a1/fi|a1-in|a1.card.a1-in.native|MULTI_TRANSLATION|deterministic/multi-translation": labot(
    "Sisällä • Sisään",
    "FI in gala: ET Sees/Sisse → FI Sisällä/Sisään for iekšā•uz. DE untouched."
  ),
  "g2/a1/fi|a1-in|a1.card.a1-in.study.translation|MULTI_TRANSLATION|deterministic/multi-translation": labot(
    "Sisällä • Sisään",
    "FI in gala: study.translation mirrors native. DE untouched."
  ),
  "g2/a1/fi|a1-ins|a1.card.a1-ins.native|MULTI_TRANSLATION|deterministic/multi-translation": labot(
    "Sisään • Sisään päin • Mihin?",
    "FI ins gala: ET Sisse/Sissepoole/Kuhu → FI Sisään/Sisään päin/Mihin? DE untouched."
  ),
  "g2/a1/fi|a1-ins|a1.card.a1-ins.study.translation|MULTI_TRANSLATION|deterministic/multi-translation": labot(
    "Sisään • Sisään päin • Mihin?",
    "FI ins gala: study.translation mirrors native. DE untouched."
  ),
  "g2/a1/fi|a1-kein|a1.card.a1-kein.native|MULTI_TRANSLATION|deterministic/multi-translation": labot(
    "Ei kukaan • Ei mikään",
    "FI kein gala: ET Mitte ükski/mingi → FI Ei kukaan/Ei mikään for neviens•nekāds. DE untouched."
  ),
  "g2/a1/fi|a1-kein|a1.card.a1-kein.study.translation|MULTI_TRANSLATION|deterministic/multi-translation": labot(
    "Ei kukaan • Ei mikään",
    "FI kein gala: study.translation mirrors native. DE untouched."
  ),
  "g2/a1/fi|a1-koennen|a1.card.a1-koennen.native|MULTI_TRANSLATION|deterministic/multi-translation": labot(
    "Voida • Osata",
    "FI können gala: ET Saama/Oskama → FI Voida/Osata for varēt•prast. DE untouched."
  ),
  "g2/a1/fi|a1-koennen|a1.card.a1-koennen.study.translation|MULTI_TRANSLATION|deterministic/multi-translation": labot(
    "Voida • Osata",
    "FI können gala: study.translation mirrors native. DE untouched."
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
