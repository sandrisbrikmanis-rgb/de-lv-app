#!/usr/bin/env node
"use strict";
/**
 * Apply OWNER decisions #201–315 to articles owner review markdown.
 */
const fs = require("fs");
const path = require("path");

const MD = path.join(__dirname, "../reports/cs-kurs-articles-owner-review-all-findings.md");

const TASK_SG_PL = "Odpověz v jednotném čísle a poté v množném čísle.";
const TASK_PL_ONLY = "Nyní odpověz v množném čísle.";
const LOC_CASE = "Vyber správný pád: dativ, nebo akuzativ?";
const LOC_WOHIN_WO =
  "Vyber správný pád: wohin? → Akkusativ, wo? → Dativ.";
const LOC_WO_WANN_WOHIN =
  "Vyber správný pád: wo/wann → dativ, wohin → akuzativ.";
const READING = "Odpověz podle textu.";

const DECISIONS = {
  "201": { status: "LABOT", new: TASK_SG_PL },
  "202": { status: "LABOT", new: TASK_PL_ONLY },
  "203": {
    status: "NELABOT",
    note: "Kurz konzistentně používá „Přednáška“ (shodně s #020, #149–150, #153–154).",
  },
  "204": {
    status: "LABOT",
    new: "Wohin / wo, akuzativ nebo dativ s předložkami an / in / auf",
  },
  "205": {
    status: "LABOT",
    new: "Osmnáctá přednáška: wohin / wo, akuzativ nebo dativ s předložkami an / in / auf.",
  },
  "206": {
    status: "LABOT",
    new: "Pokud akce naznačuje změnu směru nebo místa, použije se akuzativ. Otázka: Wohin? — kam?",
  },
  "207": {
    status: "LABOT",
    new: "Ich gehe an den Tisch. — Jdu ke stolu.",
  },
  "208": {
    status: "LABOT",
    new: "Ich stelle den Korb auf die Bank. — Pokládám koš na lavici.",
  },
  "209": {
    status: "LABOT",
    new: "Ich lege die Äpfel in das Körbchen. — Dávám jablka do košíku.",
  },
  "210": {
    status: "LABOT",
    new: "Ich gieße das Wasser in den Krug. — Nalévám vodu do džbánu.",
  },
  "211": {
    status: "LABOT",
    new: "Pokud akce označuje umístění nebo stav, použije se dativ. Otázka: wo? — kde?",
  },
  "212": {
    status: "LABOT",
    new: "Ich stehe an dem Tische. — Stojím u stolu.",
  },
  "213": {
    status: "LABOT",
    new: "Der Korb steht auf der Bank. — Koš stojí na lavici.",
  },
  "214": {
    status: "LABOT",
    new: "Die Äpfel sind in dem Körbchen. — Jablka jsou v košíku.",
  },
  "215": {
    status: "LABOT",
    new: "Das Wasser ist in dem Kruge. — Voda je ve džbánu.",
  },
  "216": { status: "LABOT", new: "Slovesa s wo?" },
  "217": { status: "LABOT", new: "Sein — být" },
  "218": { status: "LABOT", new: "Sich befinden — nacházet se" },
  "219": { status: "LABOT", new: "Arbeiten — pracovat" },
  "220": {
    status: "LABOT",
    new: "Liegen — ležet / nacházet se ve vodorovné poloze",
  },
  "221": { status: "LABOT", new: "Sitzen — sedět" },
  "222": { status: "LABOT", new: "Hängen — viset" },
  "223": { status: "LABOT", new: "Finden — najít" },
  "224": { status: "LABOT", new: "Suchen — hledat" },
  "225": { status: "LABOT", new: "Spielen — hrát" },
  "226": { status: "LABOT", new: "Látková podstatná jména" },
  "227": { status: "LABOT", new: "Ich trinke Milch. — Piju mléko." },
  "228": {
    status: "LABOT",
    new: "In dem Eimer ist Wasser. — V kbelíku je voda.",
  },
  "229": { status: "LABOT", new: "Konkrétní látka" },
  "230": {
    status: "LABOT",
    new: "Pokud je látka zmíněna v určitém množství nebo na určitém místě, použije se určitý člen.",
  },
  "231": {
    status: "LABOT",
    new: "Ich gieße das Wasser in den Krug. — Nalévám vodu do džbánu.",
  },
  "232": { status: "LABOT", new: "In + místo" },
  "233": {
    status: "LABOT",
    new: "Pokud předložka in vyjadřuje místo, nikoli směr dovnitř, překládá se obvykle předložkou „v“ s lokálem.",
  },
  "234": { status: "LABOT", new: "In dem Eimer — v kbelíku" },
  "235": { status: "LABOT", new: "In dem Zimmer — v pokoji" },
  "236": { status: "LABOT", new: "Současné tvary" },
  "237": { status: "LABOT", new: LOC_CASE },
  "238": { status: "LABOT", new: LOC_CASE },
  "239": { status: "LABOT", new: LOC_CASE },
  "240": { status: "LABOT", new: LOC_CASE },
  "241": { status: "LABOT", new: LOC_CASE },
  "242": { status: "LABOT", new: LOC_CASE },
  "243": { status: "LABOT", new: LOC_CASE },
  "244": { status: "LABOT", new: LOC_CASE },
  "245": {
    status: "LABOT",
    new: "Devatenáctá přednáška: vor, hinter, unter, über, neben, zwischen s akuzativem nebo dativem.",
  },
  "246": {
    status: "NELABOT",
    note: "SOURCE_DE_ISSUE: německý heading Wohin? → Akkusativ záměrný; DE neměněn.",
  },
  "247": {
    status: "LABOT",
    new: "Pokud jde o směr nebo pohyb někam, ptáme se wohin? a používá se akuzativ.",
  },
  "248": {
    status: "NELABOT",
    note: "SOURCE_DE_ISSUE: německý heading Wo? → Dativ záměrný; DE neměněn.",
  },
  "249": {
    status: "LABOT",
    new: "Pokud jde o umístění, ptáme se wo? a používá se dativ.",
    note: "Sdílený target s #250.",
  },
  "250": {
    status: "LABOT",
    new: "Pokud jde o umístění, ptáme se wo? a používá se dativ.",
    note: "SOURCE_DE_ISSUE: CS text opraven společně s #249; DE neměněn.",
  },
  "251": {
    status: "LABOT",
    new: "Shrnutí: wohin?",
    note: "Sdílený target s #252.",
  },
  "252": {
    status: "LABOT",
    new: "Shrnutí: wohin?",
    note: "SOURCE_DE_ISSUE: CS heading opraven společně s #251; DE neměněn.",
  },
  "253": {
    status: "LABOT",
    new: "Wohin? → Akkusativ",
    note: "Sdílený target s #254.",
  },
  "254": {
    status: "LABOT",
    new: "Wohin? → Akkusativ",
    note: "SOURCE_DE_ISSUE: CS text opraven společně s #253; DE neměněn.",
  },
  "255": {
    status: "LABOT",
    new: "Shrnutí: wo?",
    note: "Sdílený target s #256.",
  },
  "256": {
    status: "LABOT",
    new: "Shrnutí: wo?",
    note: "SOURCE_DE_ISSUE: CS heading opraven společně s #255; DE neměněn.",
  },
  "257": { status: "LABOT", new: "Wo? → dativ" },
  "258": {
    status: "LABOT",
    new: "Gehen znamená „jít/chodit“. Treten může podle kontextu znamenat „vstoupit“, „šlápnout“, „vkročit“ nebo „nastoupit“.",
  },
  "259": { status: "LABOT", new: LOC_WOHIN_WO },
  "260": { status: "LABOT", new: LOC_WOHIN_WO },
  "261": {
    status: "LABOT",
    new: "Dvacátá přednáška: dům, podlaží, dativ/akuzativ a složená podstatná jména.",
  },
  "262": {
    status: "LABOT",
    new: "Der Boden — půda / podlaha / země",
  },
  "263": { status: "LABOT", new: "Anzünden — zapálit" },
  "264": { status: "LABOT", new: "Dativ s wann?" },
  "265": {
    status: "LABOT",
    new: "Předložková časová určení probíraná v 19. a 20. lekci se pojí s dativem. Dativ odpovídá nejen na wo? — kde?, ale v těchto výrazech také na wann? — kdy?",
  },
  "266": { status: "LABOT", new: "An dem Tage / am Tage — ve dne" },
  "267": { status: "LABOT", new: "In der Nacht — v noci" },
  "268": { status: "LABOT", new: "In dem Sommer / im Sommer — v létě" },
  "269": { status: "LABOT", new: "In dem Januar / im Januar — v lednu" },
  "270": { status: "LABOT", new: "Vor drei Tagen — před třemi dny" },
  "271": { status: "LABOT", new: "Předložka + člen" },
  "272": {
    status: "LABOT",
    new: "Mnoho předložek se spojuje se členem.",
  },
  "273": {
    status: "NELABOT",
    note: "SOURCE_DE_ISSUE: německý příklad kontrakce übers Land záměrný; DE neměněn.",
  },
  "274": { status: "LABOT", new: "Složená podstatná jména" },
  "275": {
    status: "LABOT",
    new: "Složená podstatná jména obvykle přebírají člen posledního slova.",
  },
  "276": {
    status: "LABOT",
    new: "Ve slovech der Ofen a der Boden se o vyslovuje dlouze.",
  },
  "277": {
    status: "LABOT",
    new: LOC_WO_WANN_WOHIN,
    note: "Sdílený target s #278.",
  },
  "278": {
    status: "LABOT",
    new: LOC_WO_WANN_WOHIN,
    note: "PEDAGOGICAL_ISSUE: CS task opraven společně s #277.",
  },
  "279": { status: "LABOT", new: LOC_WO_WANN_WOHIN },
  "280": { status: "LABOT", new: LOC_WO_WANN_WOHIN },
  "281": { status: "LABOT", new: LOC_WO_WANN_WOHIN },
  "282": { status: "LABOT", new: LOC_WO_WANN_WOHIN },
  "283": { status: "LABOT", new: LOC_WO_WANN_WOHIN },
  "284": { status: "LABOT", new: LOC_WO_WANN_WOHIN },
  "285": { status: "LABOT", new: LOC_WO_WANN_WOHIN },
  "286": { status: "LABOT", new: LOC_WO_WANN_WOHIN },
  "287": { status: "LABOT", new: LOC_WO_WANN_WOHIN },
  "288": { status: "LABOT", new: LOC_WO_WANN_WOHIN },
  "289": { status: "LABOT", new: LOC_WO_WANN_WOHIN },
  "290": { status: "LABOT", new: LOC_WO_WANN_WOHIN },
  "291": { status: "LABOT", new: LOC_WO_WANN_WOHIN },
  "292": { status: "LABOT", new: LOC_WO_WANN_WOHIN },
  "293": {
    status: "LABOT",
    new: "Woher / wohin / wo; von / aus / mit + dativ, wohin + akuzativ",
  },
  "294": {
    status: "LABOT",
    new: "Dvacátá první přednáška: woher / wohin / wo; von / aus / mit + dativ, wohin + akuzativ.",
  },
  "295": { status: "LABOT", new: "Finden — najít" },
  "296": { status: "LABOT", new: "Mit — s" },
  "297": { status: "LABOT", new: "Von — od / z" },
  "298": { status: "LABOT", new: "Aus — z / ze" },
  "299": { status: "LABOT", new: "Mit dem Mann — s mužem" },
  "300": {
    status: "LABOT",
    new: "Von dem Felde / vom Felde — z pole",
  },
  "301": { status: "LABOT", new: "Aus der Küche — z kuchyně" },
  "302": { status: "LABOT", new: "Současná forma: vom Feld, vom Berg." },
  "303": { status: "LABOT", new: "Woher? — odkud?" },
  "304": {
    status: "LABOT",
    new: "Pokud se osoba nebo předmět nachází v místnosti, na nějakém místě nebo v nádobě a vychází z tohoto prostoru, použijte aus.",
  },
  "305": { status: "LABOT", new: READING },
  "306": { status: "LABOT", new: READING },
  "307": { status: "LABOT", new: READING },
  "308": { status: "LABOT", new: READING },
  "309": { status: "LABOT", new: READING },
  "310": { status: "LABOT", new: READING },
  "311": { status: "LABOT", new: READING },
  "312": { status: "LABOT", new: READING },
  "313": { status: "LABOT", new: READING },
  "314": { status: "LABOT", new: "Odkud vystupuje?" },
  "315": { status: "LABOT", new: READING },
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
      inRange = Number(currentId) >= 201 && Number(currentId) <= 315;
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

function updateSummary(md) {
  const stats = { LABOT: 0, NELABOT: 0, FALSE_POSITIVE: 0, PENDING: 0 };
  const re = /^Status: (LABOT|NELABOT|FALSE_POSITIVE|PENDING)$/gm;
  let m;
  while ((m = re.exec(md)) !== null) {
    stats[m[1]] += 1;
  }

  let out = md.replace(
    /\| Status PENDING \| \*\*\d+\*\* \|/,
    `| Status PENDING | **${stats.PENDING}** |`
  );
  out = out.replace(
    /✅ \*\*PASS\*\* — all audit findings accounted; OWNER NEW empty; production\/DE\/LV MASTER = 0 changes\./,
    stats.PENDING === 0
      ? "✅ **PASS** — all 315 OWNER objects decided; production/DE/LV MASTER = 0 changes."
      : `⚠️ **INCOMPLETE** — PENDING=${stats.PENDING}; production/DE/LV MASTER = 0 changes.`
  );

  return { md: out, stats };
}

let md = fs.readFileSync(MD, "utf8");
md = applyDecisions(md);
const { md: updated, stats } = updateSummary(md);
fs.writeFileSync(MD, updated, "utf8");

const batchStats = { LABOT: 0, NELABOT: 0, FALSE_POSITIVE: 0 };
for (const d of Object.values(DECISIONS)) {
  batchStats[d.status] = (batchStats[d.status] || 0) + 1;
}
console.log("Applied batch #201–315:", Object.keys(DECISIONS).length, "decisions");
console.log("Batch:", batchStats);
console.log("Full file totals:", stats);
