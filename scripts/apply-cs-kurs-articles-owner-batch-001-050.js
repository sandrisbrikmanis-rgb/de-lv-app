#!/usr/bin/env node
"use strict";
/**
 * Apply OWNER decisions #001–050 to articles owner review markdown.
 */
const fs = require("fs");
const path = require("path");

const MD = path.join(__dirname, "../reports/cs-kurs-articles-owner-review-all-findings.md");

const DECISIONS = {
  "001": {
    status: "LABOT",
    new: "Německý člen se ne vždy shoduje s českým rodem. Podstatná jména se proto nejlépe učí společně se členem.",
  },
  "002": { status: "LABOT", new: "• Příklady členů" },
  "003": {
    status: "LABOT",
    new: "Člen der se často používá u označení mužských osob, dnů, měsíců, ročních období a u některých slov s určitými koncovkami.",
  },
  "004": {
    status: "LABOT",
    new: "-er → často der, například: der Computer, der Lehrer, ale ne vždy.",
  },
  "005": { status: "LABOT", new: "Značky aut → der BMW, der Mercedes" },
  "006": { status: "LABOT", new: "Der August — srpen" },
  "007": { status: "LABOT", new: "♀ Často DIE" },
  "008": {
    status: "LABOT",
    new: "Člen die se často používá u podstatných jmen ženského rodu a v množném čísle. Často se objevuje také u slov s koncovkami -ung, -heit, -keit, -schaft, -ion, -tät a -ei.",
  },
  "009": { status: "LABOT", new: "-ion → die Nation" },
  "010": { status: "LABOT", new: "Motocyklové značky → die Harley-Davidson, die Yamaha" },
  "011": {
    status: "LABOT",
    new: "Množné číslo: v 1. a 4. pádě die → die Autos, die Häuser, die Kinder. Ve 3. pádě je den a ve 2. pádě der.",
  },
  "012": {
    status: "LABOT",
    new: "U DAS jsou častá podstatná jména se zdrobňovacími příponami -chen / -lein, mnoho slov s -ment / -um a slovesa použitá jako podstatná jména.",
  },
  "013": {
    status: "LABOT",
    new: "Chemické prvky → das Eisen, der Sauerstoff",
    note: "Sdílený target s #014; rozšířený Luna text neodpovídá formátu karty — korekce členu u Sauerstoff.",
  },
  "014": {
    status: "LABOT",
    new: "Chemické prvky → das Eisen, der Sauerstoff",
    note: "SOURCE_DE_ISSUE: CS text opraven (der Sauerstoff), DE zdroj neměněn.",
  },
  "015": { status: "LABOT", new: "Slovesa jako podstatná jména → das Essen, das Lernen" },
  "016": { status: "LABOT", new: "! Důležité výjimky / nutno se naučit se členem" },
  "017": {
    status: "LABOT",
    new: "U některých slov nelze člen spolehlivě určit podle koncovky nebo českého rodu. Nejlépe se učí společně se členem.",
  },
  "018": {
    status: "LABOT",
    new: "U některých slov nelze člen spolehlivě určit podle koncovky nebo českého rodu. Nejlépe se učí společně se členem.",
    note: "Sdílený target s #017 — stejný OWNER NEW.",
  },
  "019": {
    status: "LABOT",
    new: "Koncovky a skupiny slov pomáhají uhodnout člen, ale nejsou stoprocentně spolehlivým pravidlem. Pokud si nejste jisti, naučte se slovo se členem.",
  },
  "020": {
    status: "NELABOT",
    note: "Kurz konzistentně používá „Přednáška“ (shodně s L2–L21 a intro).",
  },
  "021": {
    status: "LABOT",
    new: "Slovesa v přítomném čase, podstatná jména, gramatika a překlad",
  },
  "022": { status: "LABOT", new: "Členy, názvy míst a překlady" },
  "023": { status: "LABOT", new: "2 Členy" },
  "024": { status: "LABOT", new: "Určitý člen" },
  "025": { status: "LABOT", new: "Neurčitý člen" },
  "026": { status: "LABOT", new: "Mužský rod — der", note: "Sdílený target s #027." },
  "027": { status: "LABOT", new: "Mužský rod — der", note: "Sdílený target s #026." },
  "028": { status: "LABOT", new: "Ženský rod — die", note: "Sdílený target s #029." },
  "029": { status: "LABOT", new: "Ženský rod — die", note: "Sdílený target s #028." },
  "030": { status: "LABOT", new: "Střední rod — das" },
  "031": {
    status: "LABOT",
    new: "Určitý člen množného čísla pro všechny tři rody je die.",
    note: "Sdílený target s #032.",
  },
  "032": {
    status: "LABOT",
    new: "Určitý člen množného čísla pro všechny tři rody je die.",
    note: "Sdílený target s #031.",
  },
  "033": { status: "LABOT", new: "Mužský rod — ein" },
  "034": { status: "LABOT", new: "Ženský rod — eine" },
  "035": { status: "LABOT", new: "Střední rod — ein" },
  "036": { status: "LABOT", new: "Před většinou vlastních jmen se člen nepoužívá." },
  "037": { status: "LABOT", new: "4 Pozice slovesa" },
  "038": {
    status: "LABOT",
    new: "V oznamovací hlavní větě stojí určité sloveso na druhém místě.",
  },
  "039": {
    status: "LABOT",
    new: "V ženském a středním rodě se akuzativ shoduje s nominativem. Mění se pouze mužský rod.",
  },
  "040": { status: "LABOT", new: "Nominativ: der Federhalter, die Feder, das Messer." },
  "041": { status: "LABOT", new: "Akuzativ: einen Federhalter, eine Feder, ein Messer." },
  "042": {
    status: "LABOT",
    new: "Wen?, akuzativ, slovesa sitzen a fragen a koncovka -in",
  },
  "043": {
    status: "LABOT",
    new: "V češtině nominativ odpovídá otázkám kdo? a co?, zatímco akuzativ otázkám koho? a co?.",
  },
  "044": {
    status: "LABOT",
    new: "V němčině se v nominativu ptáme wer? u osob a was? u věcí.",
  },
  "045": { status: "LABOT", new: "V akuzativu se ptáme wen? u osob a was? u věcí." },
  "046": { status: "LABOT", new: "Změna členů v akuzativu" },
  "047": { status: "LABOT", new: "Nominativ: der Vater, die Mutter, das Kind." },
  "048": { status: "LABOT", new: "Nominativ: der Federhalter, die Feder, das Messer." },
  "049": {
    status: "LABOT",
    new: "Neurčitý člen má před podstatným jménem v jednotném čísle tyto tvary: ein v mužském rodě, eine v ženském rodě a ein ve středním rodě.",
  },
  "050": {
    status: "LABOT",
    new: "Podstatné jméno Schüler má v němčině tvar jednotného i množného čísla: der Schüler ist klein; die Schüler sind klein.",
  },
};

function applyDecisions(md) {
  const lines = md.split("\n");
  const out = [];
  let i = 0;
  let currentId = null;

  while (i < lines.length) {
    const line = lines[i];
    const m = line.match(/^### #(\d{3})$/);
    if (m) {
      currentId = m[1];
      out.push(line);
      i += 1;
      continue;
    }

    if (currentId && DECISIONS[currentId]) {
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

    // Stop applying at #051
    if (line === "### #051") {
      currentId = null;
    }

    out.push(line);
    i += 1;
  }

  return out.join("\n");
}

const md = fs.readFileSync(MD, "utf8");
const updated = applyDecisions(md);
fs.writeFileSync(MD, updated, "utf8");

const stats = { LABOT: 0, NELABOT: 0, FALSE_POSITIVE: 0 };
for (const d of Object.values(DECISIONS)) {
  stats[d.status] = (stats[d.status] || 0) + 1;
}
console.log("Applied", Object.keys(DECISIONS).length, "decisions");
console.log(stats);
