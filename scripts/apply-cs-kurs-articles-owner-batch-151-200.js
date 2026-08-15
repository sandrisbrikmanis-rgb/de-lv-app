#!/usr/bin/env node
"use strict";
/**
 * Apply OWNER decisions #151–200 to articles owner review markdown.
 */
const fs = require("fs");
const path = require("path");

const MD = path.join(__dirname, "../reports/cs-kurs-articles-owner-review-all-findings.md");

const TASK_SG_PL =
  "Odpověz v jednotném čísle a poté v množném čísle.";
const TASK_PL_ONLY = "Nyní odpověz v množném čísle.";

const DECISIONS = {
  "151": {
    status: "LABOT",
    new: "Desátá přednáška: sein, können, rozkazovací způsob, zdraví, věk a povolání.",
    note: "Sdílený target s #152; Přednáška konvence zachována.",
  },
  "152": {
    status: "LABOT",
    new: "Desátá přednáška: sein, können, rozkazovací způsob, zdraví, věk a povolání.",
    note: "DE_PARITY_ISSUE: CS intro opraven společně s #151; DE neměněn.",
  },
  "153": {
    status: "NELABOT",
    note: "Kurz konzistentně používá „Přednáška“.",
  },
  "154": {
    status: "NELABOT",
    note: "DE_PARITY_ISSUE dokumentováno; stejný důvod jako #153.",
  },
  "155": {
    status: "LABOT",
    new: "Haben, kein/keine/keinen, přivlastňovací zájmena a složená podstatná jména",
    note: "Sdílený target s #156.",
  },
  "156": {
    status: "LABOT",
    new: "Haben, kein/keine/keinen, přivlastňovací zájmena a složená podstatná jména",
    note: "DE_PARITY_ISSUE: CS subtitle opraven společně s #155.",
  },
  "157": {
    status: "LABOT",
    new: "Jedenáctá přednáška: haben, zápor s kein/keine/keinen, vyjadřování vlastnictví, složená podstatná jména a slovosled s denn.",
    note: "Sdílený target s #158.",
  },
  "158": {
    status: "LABOT",
    new: "Jedenáctá přednáška: haben, zápor s kein/keine/keinen, vyjadřování vlastnictví, složená podstatná jména a slovosled s denn.",
    note: "DE_PARITY_ISSUE: CS intro opraven společně s #157.",
  },
  "159": { status: "LABOT", new: "Český dativ a německý nominativ/akuzativ" },
  "160": {
    status: "LABOT",
    new: "V češtině je osoba, které něco patří, v dativu a vlastněný předmět v nominativu. V němčině je osoba v nominativu a vlastněný předmět v akuzativu.",
  },
  "161": { status: "LABOT", new: "Příklady" },
  "162": { status: "LABOT", new: "Ich habe einen Tisch — Mám stůl" },
  "163": { status: "LABOT", new: "Der Vater hat ein Buch — Otec má knihu" },
  "164": { status: "LABOT", new: "Sie haben eine Feder — Oni mají pero" },
  "165": {
    status: "LABOT",
    new: "Dvojitá negace českého jazyka se v němčině nevyjadřuje záporným slovem kein. Záporné slovo kein stojí před podstatným jménem.",
  },
  "166": { status: "LABOT", new: "Slovosled se spojkou denn" },
  "167": {
    status: "LABOT",
    new: "Obsahuje-li oznamovací věta spojku denn, zůstává sloveso na 2. pozici. Spojka denn se nepočítá jako větný člen.",
  },
  "168": { status: "LABOT", new: "Složená podstatná jména" },
  "169": {
    status: "LABOT",
    new: "Před složenými podstatnými jmény stojí člen určený podle posledního podstatného jména. Přízvuk bývá na první části složeniny.",
  },
  "170": { status: "LABOT", new: "Kleiner als ich — Menší než já" },
  "171": {
    status: "LABOT",
    new: "Druhý stupeň (komparativ) přídavných jmen se tvoří od základního stupně (pozitiv) s koncovkou -er.",
  },
  "172": { status: "LABOT", new: "Die Beine — Nohy" },
  "173": { status: "LABOT", new: "Beschneiden — ořezávat" },
  "174": { status: "LABOT", new: "Odlučitelná slovesa" },
  "175": { status: "LABOT", new: "Zájmeno jeder" },
  "176": {
    status: "LABOT",
    new: "Zájmeno jeder se skloňuje jako určitý člen der / die / das.",
  },
  "177": { status: "LABOT", new: "Mužský rod" },
  "178": { status: "LABOT", new: "Ženský rod" },
  "179": { status: "LABOT", new: "Střední rod" },
  "180": { status: "LABOT", new: "Nominativ" },
  "181": { status: "LABOT", new: "Akuzativ" },
  "182": { status: "LABOT", new: "munden — dobře chutnat" },
  "183": { status: "LABOT", new: "Důležité" },
  "184": {
    status: "NELABOT",
    note: "SOURCE_DE_ISSUE: německý imperativ záměrný; DE neměněn.",
  },
  "185": { status: "LABOT", new: "entzweischneiden — překrojit napůl" },
  "186": {
    status: "LABOT",
    new: "Sloveso entzweischneiden je odlučitelné, takže se v přítomném čase jeho část entzwei odděluje a stojí na konci věty.",
  },
  "187": {
    status: "LABOT",
    new: "Ich schneide den Apfel entzwei. — Jablko překrojím napůl.",
  },
  "188": { status: "LABOT", new: "Oddělitelné předpony" },
  "189": {
    status: "LABOT",
    new: "Slovesa auffangen a abwischen mají přízvuk na předponě. Proto se předpona v přítomném čase odděluje a kládá na konec věty.",
  },
  "190": {
    status: "LABOT",
    new: "Fegen a wischen označují různé způsoby úklidu: fegen znamená zametat, zatímco wischen znamená vytírat nebo utírat.",
  },
  "191": { status: "LABOT", new: "Fegen — zametat koštětem" },
  "192": {
    status: "LABOT",
    new: "Wischen / abwischen — vytírat nebo utírat hadrem či utěrkou, utírat prach",
  },
  "193": { status: "LABOT", new: TASK_SG_PL, note: "Stejný OWNER NEW pro #195, #197, #199." },
  "194": { status: "LABOT", new: TASK_PL_ONLY, note: "Stejný OWNER NEW pro #196, #198, #200." },
  "195": { status: "LABOT", new: TASK_SG_PL },
  "196": { status: "LABOT", new: TASK_PL_ONLY },
  "197": { status: "LABOT", new: TASK_SG_PL },
  "198": { status: "LABOT", new: TASK_PL_ONLY },
  "199": { status: "LABOT", new: TASK_SG_PL },
  "200": { status: "LABOT", new: TASK_PL_ONLY },
};

function applyDecisions(md) {
  const lines = md.split("\n");
  const out = [];
  let i = 0;
  let currentId = null;
  let inRange = false;

  while (i < lines.length) {
    const line = lines[i];
    const m = line.match(/^### #(\d{3})$/);
    if (m) {
      currentId = m[1];
      inRange = Number(currentId) >= 151 && Number(currentId) <= 200;
      out.push(line);
      i += 1;
      continue;
    }

    if (inRange && currentId && DECISIONS[currentId]) {
      const d = DECISIONS[currentId];
      if (line === "Status: PENDING") {
        out.push(`Status: ${d.status}`);
        i += 1;
        continue;
      }
      if (line === "OWNER NEW:") {
        out.push("OWNER NEW:");
        if (d.status === "LABOT" && d.new) {
          out.push(d.new);
        }
        i += 1;
        continue;
      }
      if (line === "OWNER note:") {
        out.push("OWNER note:");
        if (d.note) {
          out.push(d.note);
        }
        i += 1;
        continue;
      }
    }

    out.push(line);
    i += 1;
  }

  return out.join("\n");
}

const md = fs.readFileSync(MD, "utf8");
fs.writeFileSync(MD, applyDecisions(md), "utf8");

const stats = { LABOT: 0, NELABOT: 0, FALSE_POSITIVE: 0 };
for (const d of Object.values(DECISIONS)) {
  stats[d.status] = (stats[d.status] || 0) + 1;
}
console.log("Applied", Object.keys(DECISIONS).length, "decisions");
console.log(stats);
