#!/usr/bin/env node
"use strict";
/**
 * Apply OWNER decisions #051–100 to articles owner review markdown.
 */
const fs = require("fs");
const path = require("path");

const MD = path.join(__dirname, "../reports/cs-kurs-articles-owner-review-all-findings.md");

const DECISIONS = {
  "051": {
    status: "LABOT",
    new: "Ukazovací zájmeno to se v češtině mění podle čísla a rodu, ale v němčině se v tomto použití používá jeden tvar: das.",
  },
  "052": {
    status: "LABOT",
    new: "Der Wagen („vozík“) a der Schlitten („sáňky“) jsou v češtině v množném čísle, ale v němčině se tato slova používají v jednotném i množném čísle.",
  },
  "053": {
    status: "LABOT",
    new: "Příklady: der Hammer — die Hämmer; der Garten — die Gärten; das Fenster — die Fenster; das Messer — die Messer.",
  },
  "054": {
    status: "LABOT",
    new: "Podstatná jména ženského rodu zakončená na -el nebo -er často přijímají v množném čísle koncovku -n.",
  },
  "055": {
    status: "LABOT",
    new: "V oznamovací větě stojí určité sloveso na druhém místě: er legt den Schlüssel hin • Dann legt er den Schlüssel hin.",
  },
  "056": { status: "LABOT", new: "Slovíčka" },
  "057": { status: "LABOT", new: "Wem — komu? / čemu?" },
  "058": { status: "LABOT", new: "Schenken — darovat" },
  "059": { status: "LABOT", new: "Dem Sohne — synovi" },
  "060": { status: "LABOT", new: "Den Söhnen — synům" },
  "061": { status: "LABOT", new: "Sich nähern — přibližovat se" },
  "062": { status: "LABOT", new: "Ich nähere mich — přibližuji se" },
  "063": { status: "LABOT", new: "Du näherst dich — přibližuješ se" },
  "064": { status: "LABOT", new: "Geben — dávat" },
  "065": { status: "LABOT", new: "Ich gebe — dávám" },
  "066": { status: "LABOT", new: "Du gibst — dáváš" },
  "067": { status: "LABOT", new: "Er gibt — dává" },
  "068": { status: "LABOT", new: "Die Magd — služka" },
  "069": { status: "LABOT", new: "Brot — chléb" },
  "070": { status: "LABOT", new: "Milch — mléko" },
  "071": { status: "LABOT", new: "Gehorchen — poslouchat" },
  "072": { status: "LABOT", new: "Der Knecht — čeledín" },
  "073": { status: "LABOT", new: "Gehören — patřit" },
  "074": { status: "LABOT", new: "Das Feld — pole" },
  "075": { status: "LABOT", new: "Die Felder — pole" },
  "076": { status: "LABOT", new: "Die Wiese — louka" },
  "077": { status: "LABOT", new: "Die Wiesen — louky" },
  "078": { status: "LABOT", new: "Der Wald — les" },
  "079": { status: "LABOT", new: "Die Wälder — lesy" },
  "080": { status: "LABOT", new: "Der Bauer — zemědělec" },
  "081": { status: "LABOT", new: "Die Bäuerin — zemědělkyně" },
  "082": { status: "LABOT", new: "Folgen — následovat" },
  "083": { status: "LABOT", new: "Der Jäger — myslivec" },
  "084": { status: "LABOT", new: "Treu — věrný" },
  "085": { status: "LABOT", new: "Dativ" },
  "086": { status: "LABOT", new: "Jednotné číslo" },
  "087": { status: "LABOT", new: "Mužský rod" },
  "088": { status: "LABOT", new: "Ženský rod" },
  "089": { status: "LABOT", new: "Střední rod" },
  "090": { status: "LABOT", new: "Množné číslo" },
  "091": { status: "LABOT", new: "Mužský rod", note: "Deterministic FL; stejný OWNER NEW jako #087 (jiná tabulka)." },
  "092": { status: "LABOT", new: "Ženský rod", note: "Deterministic FL; stejný OWNER NEW jako #088." },
  "093": { status: "LABOT", new: "Střední rod", note: "Deterministic FL; stejný OWNER NEW jako #089." },
  "094": { status: "LABOT", new: "Koncovka -e v dativu" },
  "095": {
    status: "LABOT",
    new: "Podstatná jména mužského a středního rodu v dativu jednotného čísla mohou mít koncovku -e. V dnešní době se od této koncovky často upouští.",
  },
  "096": { status: "LABOT", new: "Ženský rod v dativu" },
  "097": {
    status: "LABOT",
    new: "Podstatná jména ženského rodu v dativu jednotného čísla nepřibírají koncovku -e.",
  },
  "098": { status: "LABOT", new: "Neurčitý člen v dativu" },
  "099": {
    status: "LABOT",
    new: "Dativ množného čísla",
    note: "Sdílený target s #100.",
  },
  "100": {
    status: "LABOT",
    new: "Dativ množného čísla",
    note: "SOURCE_DE_ISSUE: CS heading opraven společně s #099; DE zdroj neměněn.",
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
      inRange = Number(currentId) >= 51 && Number(currentId) <= 100;
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
