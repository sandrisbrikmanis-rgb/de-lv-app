#!/usr/bin/env node
"use strict";
/**
 * Apply OWNER decisions #101–150 to articles owner review markdown.
 */
const fs = require("fs");
const path = require("path");

const MD = path.join(__dirname, "../reports/cs-kurs-articles-owner-review-all-findings.md");

const DECISIONS = {
  "101": {
    status: "LABOT",
    new: "V dativu množného čísla má podstatné jméno často koncovku -n.",
    note: "Sdílený target s #102.",
  },
  "102": {
    status: "LABOT",
    new: "V dativu množného čísla má podstatné jméno často koncovku -n.",
    note: "SOURCE_DE_ISSUE: CS text opraven společně s #101; DE zdroj neměněn.",
  },
  "103": { status: "LABOT", new: "Pokud množné číslo již končí na -n" },
  "104": {
    status: "NELABOT",
    note: "SOURCE_DE_ISSUE dokumentováno; CS text je korektní, DE neměněn.",
  },
  "105": {
    status: "NELABOT",
    note: "SOURCE_DE_ISSUE: německý slovesný heading záměrný; DE neměněn.",
  },
  "106": {
    status: "NELABOT",
    note: "SOURCE_DE_ISSUE dokumentováno; CS popis geben je korektní.",
  },
  "107": {
    status: "NELABOT",
    note: "SOURCE_DE_ISSUE: německý heading sich nähern záměrný.",
  },
  "108": {
    status: "NELABOT",
    note: "SOURCE_DE_ISSUE dokumentováno; CS text je korektní.",
  },
  "109": { status: "LABOT", new: "Množné číslo s přehláskou" },
  "110": { status: "LABOT", new: "Bez členu", note: "Sdílený target s #111." },
  "111": {
    status: "LABOT",
    new: "Bez členu",
    note: "SOURCE_DE_ISSUE: CS heading opraven společně s #110.",
  },
  "112": {
    status: "LABOT",
    new: "Často používaná slova bez členu: Milch, Brot.",
    note: "Sdílený target s #113, #114.",
  },
  "113": {
    status: "LABOT",
    new: "Často používaná slova bez členu: Milch, Brot.",
    note: "Sdílený target s #112, #114.",
  },
  "114": {
    status: "LABOT",
    new: "Často používaná slova bez členu: Milch, Brot.",
    note: "SOURCE_DE_ISSUE: CS text opraven společně s #112/#113.",
  },
  "115": {
    status: "NELABOT",
    note: "SOURCE_DE_ISSUE dokumentováno; výslovnostní CS text korektní.",
  },
  "116": {
    status: "NELABOT",
    note: "SOURCE_DE_ISSUE dokumentováno; výslovnostní CS text korektní.",
  },
  "117": {
    status: "NELABOT",
    note: "SOURCE_DE_ISSUE dokumentováno; výslovnostní CS text korektní.",
  },
  "118": {
    status: "NELABOT",
    note: "SOURCE_DE_ISSUE dokumentováno; výslovnostní CS text korektní.",
  },
  "119": {
    status: "NELABOT",
    note: "SOURCE_DE_ISSUE dokumentováno; výslovnostní CS text korektní.",
  },
  "120": {
    status: "LABOT",
    new: "Doplň správný člen v dativu/akuzativu podle významu věty.",
    note: "Stejný OWNER NEW pro #121–#125.",
  },
  "121": {
    status: "LABOT",
    new: "Doplň správný člen v dativu/akuzativu podle významu věty.",
  },
  "122": {
    status: "LABOT",
    new: "Doplň správný člen v dativu/akuzativu podle významu věty.",
  },
  "123": {
    status: "LABOT",
    new: "Doplň správný člen v dativu/akuzativu podle významu věty.",
  },
  "124": {
    status: "LABOT",
    new: "Doplň správný člen v dativu/akuzativu podle významu věty.",
  },
  "125": {
    status: "LABOT",
    new: "Doplň správný člen v dativu/akuzativu podle významu věty.",
  },
  "126": {
    status: "LABOT",
    new: "Doplň správný člen v dativu.",
    note: "Stejný OWNER NEW pro #127–#133.",
  },
  "127": { status: "LABOT", new: "Doplň správný člen v dativu." },
  "128": { status: "LABOT", new: "Doplň správný člen v dativu." },
  "129": { status: "LABOT", new: "Doplň správný člen v dativu." },
  "130": { status: "LABOT", new: "Doplň správný člen v dativu." },
  "131": { status: "LABOT", new: "Doplň správný člen v dativu." },
  "132": { status: "LABOT", new: "Doplň správný člen v dativu." },
  "133": { status: "LABOT", new: "Doplň správný člen v dativu." },
  "134": {
    status: "LABOT",
    new: "Převeď do množného čísla.",
    note: "Stejný OWNER NEW pro #135.",
  },
  "135": { status: "LABOT", new: "Převeď do množného čísla." },
  "136": {
    status: "FALSE_POSITIVE",
    note: "„Přeložit“ je korektní český název sekce (LV Pārtulko).",
  },
  "137": {
    status: "NELABOT",
    note: "SOURCE_DE_ISSUE: německý dialog v CS kurzu záměrný; DE neměněn.",
  },
  "138": { status: "LABOT", new: "Dieser (dízer) — tento" },
  "139": { status: "LABOT", new: "Jener (jéner) — ten" },
  "140": {
    status: "LABOT",
    new: "Ukazovací zájmena",
    note: "Sdílený target s #141.",
  },
  "141": {
    status: "LABOT",
    new: "Ukazovací zájmena",
    note: "DE_PARITY_ISSUE: CS heading opraven společně s #140; DE neměněn.",
  },
  "142": {
    status: "LABOT",
    new: "Ukazovací zájmena dieser a jener se skloňují podobně jako určitý člen.",
    note: "Sdílený target s #143.",
  },
  "143": {
    status: "LABOT",
    new: "Ukazovací zájmena dieser a jener se skloňují podobně jako určitý člen.",
    note: "DE_PARITY_ISSUE: CS text opraven společně s #142; DE neměněn.",
  },
  "144": { status: "LABOT", new: "Jednotné číslo" },
  "145": {
    status: "LABOT",
    new: "Člen se nepoužívá",
    note: "Sdílený target s #146.",
  },
  "146": {
    status: "LABOT",
    new: "Člen se nepoužívá",
    note: "DE_PARITY_ISSUE: CS heading opraven společně s #145; DE neměněn.",
  },
  "147": {
    status: "LABOT",
    new: "Pokud před podstatným jménem stojí zájmeno nebo číslovka, člen se nepoužívá.",
    note: "Sdílený target s #148.",
  },
  "148": {
    status: "LABOT",
    new: "Pokud před podstatným jménem stojí zájmeno nebo číslovka, člen se nepoužívá.",
    note: "DE_PARITY_ISSUE: CS text opraven společně s #147; DE neměněn.",
  },
  "149": {
    status: "NELABOT",
    note: "Kurz konzistentně používá „Přednáška“ (shodně s ostatními lekcemi).",
  },
  "150": {
    status: "NELABOT",
    note: "DE_PARITY_ISSUE dokumentováno; stejný důvod jako #149 — Přednáška konvence.",
  },
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
      inRange = Number(currentId) >= 101 && Number(currentId) <= 150;
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
