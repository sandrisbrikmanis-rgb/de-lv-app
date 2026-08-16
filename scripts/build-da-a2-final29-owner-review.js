#!/usr/bin/env node
"use strict";
/**
 * Build OWNER review for 29 post-regression tip sectionAccent findings (READ-ONLY).
 * Usage: node scripts/build-da-a2-final29-owner-review.js
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./lib/audit-common");
const { findEntry, getAt } = require("./lib/da-a2-owner-path");
const CASES = require("./lib/da-a2-final29-cases");

const REVIEW = path.join(ROOT, "reports/da-a2-owner-review-final29-sectionaccents.md");
const DECISIONS = path.join(ROOT, "reports/da-a2-owner-decisions-final29-sectionaccents.md");

/** PROPOSED pēc faktiskā DA tip bloka teksta — OWNER apstiprina */
const PROPOSED = {
  1: { action: "LABOT", value: "taske", note: "Tip bloks: «…cykel eller taske…» — LV somu → DA taske" },
  2: { action: "LABOT", value: "computer", note: "Tip bloks: «TV, computer eller lys…» — LV datoru → DA computer" },
  3: { action: "LABOT", value: "fornærmer", note: "Tip bloks: «…fornærmer med ord…» — LV apvaino → DA fornærmer" },
  4: { action: "LABOT", value: "artikel", note: "Tip bloks: «…Artikel normalt artikel» — LV raksts → DA artikel" },
  5: { action: "LABOT", value: "artikel", note: "same block as #4 — yellow slot" },
  6: { action: "LABOT", value: "vare", note: "Tip bloks: «…Artikel: vare eller artikel» — LV prece → DA vare" },
  7: { action: "LABOT", value: "vare", note: "same block as #6 — yellow slot" },
  8: { action: "LABOT", value: "landmand", note: "Tip bloks: «…Bauer landmand» — LV zemnieks → DA landmand" },
  9: { action: "LABOT", value: "sikkert", note: "Tip bloks: «…oftere sikkert eller sandsynligvis» — LV noteikti → DA sikkert" },
  10: { action: "LABOT", value: "bestemt", note: "Tip bloks: «…bestemt eller specifik» — LV noteikts → DA bestemt" },
  11: { action: "LABOT", value: "pære", note: "Tip bloks: «…die Birne betyde en pære» — LV spuldze → DA pære" },
  12: { action: "LABOT", value: "låne", note: "Tip bloks: «…at låne ud til en anden» — LV aizdot → DA låne" },
  13: { action: "LABOT", value: "låne", note: "same block as #12 — yellow slot" },
  14: { action: "LABOT", value: "damit", note: "Tip bloks par damit — LV lai → DA damit (faktisk tip teksts)" },
  15: { action: "LABOT", value: "lige", note: "Tip bloks: «…'lige nu'…» — LV tikko → DA lige" },
  16: { action: "LABOT", value: "lige", note: "same block as #15 — yellow slot" },
  17: { action: "LABOT", value: "firma", note: "Tip bloks: «…team, firma eller samtale…» — LV firmu → DA firma" },
  18: { action: "LABOT", value: "lige", note: "Tip bloks: «…'lige nu'…» — LV tikko → DA lige" },
  19: { action: "LABOT", value: "butikken", note: "Tip bloks: «…at gå i butikken» — LV veikalu → DA butikken" },
  20: { action: "LABOT", value: "grund", note: "Tip bloks: «…'af denne grund'» — LV iemesla → DA grund" },
  21: { action: "LABOT", value: "seddel", note: "Tip bloks: «…musikseddel, og seddel…» — LV nots → DA seddel" },
  22: { action: "LABOT", value: "seddel", note: "same block as #21 — yellow slot" },
  23: { action: "LABOT", value: "rolle", note: "Tip bloks: «…spille en rolle…» — LV lomu → DA rolle" },
  24: { action: "LABOT", value: "Sol", note: "Tip bloks: «Sol eller lys + scheinen…» — LV Saule → DA Sol" },
  25: { action: "LABOT", value: "skyld", note: "Tip bloks: «…skyld eller ansvar» — LV vaina → DA skyld" },
  26: { action: "LABOT", value: "skyld", note: "same block as #25 — orange slot" },
  27: { action: "LABOT", value: "priser", note: "Tip bloks: «…priser, temperatur, vandstand» — LV cenas → DA priser" },
  28: { action: "LABOT", value: "sted", note: "Tip bloks: «…et bestemt sted i teksten…» — LV vietu → DA sted" },
  29: { action: "LABOT", value: "nummer", note: "Tip bloks: «Nummer wählen…telefonnummer» — LV numuru → DA nummer" },
};

function loadWords() {
  const ctx = vm.createContext({ window: {} });
  vm.runInContext(fs.readFileSync(path.join(ROOT, "data/da/a2.js"), "utf8"), ctx);
  return ctx.window.A2_WORDS;
}

function blockString(block) {
  if (!block?.text) return "";
  const keys = Object.keys(block.text)
    .filter((k) => /^\d+$/.test(k))
    .map(Number)
    .sort((a, b) => a - b);
  return keys.map((k) => block.text[String(k)] || "").join("");
}

function tipStudyText(entry) {
  const tip = entry.study?.tip;
  if (!tip) return "(nav tip)";
  const parts = [];
  for (const side of ["leftBlocks", "rightBlocks"]) {
    for (const b of tip[side] || []) {
      const s = blockString(b);
      if (s) parts.push(s);
    }
  }
  return parts.join(" | ");
}

function tipBlockText(entry, c) {
  const block = entry.study?.tip?.[c.blockSide]?.[c.blockIdx];
  return block ? blockString(block) : "(nav bloks)";
}

function proposedLine(p) {
  if (p.action === "FJERN") return `FJERN \`${p.value}\``;
  if (p.action === "FALSE_POSITIVE") return "FALSE_POSITIVE";
  return `${p.value} (CURRENT \`${p.from || "?"}\` → NEW \`${p.value}\`)`;
}

function main() {
  const words = loadWords();
  const lines = [];

  lines.push("# DA–DE A2 — OWNER review (29 FINAL tip sectionAccents)");
  lines.push("");
  lines.push("Avots: [da-a2-post-regression-audit.md](./da-a2-post-regression-audit.md) + [da-a2-full-audit.md](./da-a2-full-audit.md)");
  lines.push("");
  lines.push("## Kopsavilkums");
  lines.push("");
  lines.push("| Metrika | Skaits |");
  lines.push("|---------|-------:|");
  lines.push("| Raw findings (full re-scan) | **30** |");
  lines.push("| Reālie tip sectionAccent | **29** |");
  lines.push("| FALSE_POSITIVE (ārpus review) | **1** |");
  lines.push("| OWNER review ieraksti | **29/29** |");
  lines.push("| Production changes (šis posms) | **0** |");
  lines.push("| DE changes | **0** |");
  lines.push("");
  lines.push("### FALSE_POSITIVE (nemainīt, nav šajā review sarakstā)");
  lines.push("");
  lines.push("- **`a2-Weste-1584`** / `lv` = **Vest** — dāņu homogrāfs; regex `vest` ≠ LV kļūda. Statuss: **FALSE_POSITIVE**. Production **NEMAINĪT**.");
  lines.push("");
  lines.push("---");
  lines.push("");
  lines.push("> **PROPOSED** = ieteikums pēc faktiskā `study.tip` DA teksta konkrētajā blokā — nav automātiski apstiprināts.");
  lines.push("> **DE nemainīt.** Tikai `study.sectionAccents.tip.*` termini.");
  lines.push("> Statusi: **LABOT** (precīzs DA terms) | **FJERN** `termins` | **FALSE_POSITIVE**");
  lines.push("> Aizpildi **Statuss** un **OWNER_DECISION** [decisions tabulā](./da-a2-owner-decisions-final29-sectionaccents.md).");
  lines.push("> Tikai pēc apstiprinājuma — COPY-ONLY apply.");
  lines.push("");

  const decisionLines = [];
  decisionLines.push("# DA–DE A2 — OWNER decisions — final29-sectionaccents");
  decisionLines.push("");
  decisionLines.push("Avots: [da-a2-owner-review-final29-sectionaccents.md](./da-a2-owner-review-final29-sectionaccents.md)");
  decisionLines.push("");
  decisionLines.push("Aizpildi **Statuss** un **OWNER_DECISION** katrā rindā.");
  decisionLines.push("");
  decisionLines.push("**Statusi:** `LABOT` | `FJERN` | `FALSE_POSITIVE` | `NELABOT` | `NEEDS_SOURCE_REVIEW`");
  decisionLines.push("");
  decisionLines.push("**OWNER_DECISION piemēri:**");
  decisionLines.push("- LABOT: precīzs jaunais DA terms (piem. `taske`)");
  decisionLines.push("- FJERN: `FJERN \\`termins\\``");
  decisionLines.push("- FALSE_POSITIVE: `FALSE_POSITIVE`");
  decisionLines.push("");
  decisionLines.push("| # | Reg ID | Audit ID | Card ID | Field | Term | PROPOSED (hint) | Statuss | OWNER_DECISION |");
  decisionLines.push("|---:|---|---|---|---|---|---|---|---|");

  for (const c of CASES) {
    const entry = findEntry(words, c.cardId);
    const de = entry?.de || "?";
    const current = getAt(entry, c.field);
    const block = tipBlockText(entry, c);
    const studyAll = tipStudyText(entry);
    const p = { ...PROPOSED[c.id], from: c.term };

    lines.push(`## ${c.id}. ${c.reg}`);
    lines.push("");
    lines.push(`**Audit ID:** ${c.auditId}`);
    lines.push(`**Card ID:** \`${c.cardId}\` (de: ${de})`);
    lines.push(`**Field:** \`${c.field}\``);
    lines.push(`**CURRENT term:** ${current === undefined ? "(nav)" : `\`${current}\``}`);
    lines.push(`**Tip bloks (DA, validācijas konteksts):** ${block}`);
    lines.push(`**Visi tip bloki (DA):** ${studyAll.slice(0, 280)}${studyAll.length > 280 ? "…" : ""}`);
    lines.push(`**Problēma:** sectionAccent termins \`${c.term}\` nav atrodams DA Study tip tekstā (stale LV atlikums)`);
    lines.push(`**PROPOSED (${p.action}):** ${proposedLine(p)} — ${p.note}`);
    lines.push("");
    lines.push("**OWNER_DECISION:** _(aizpildi [decisions tabulā](./da-a2-owner-decisions-final29-sectionaccents.md))_");
    lines.push("");
    lines.push("---");
    lines.push("");

    const hint = p.action === "FJERN" ? `FJERN \`${c.term}\`` : p.value;
    decisionLines.push(
      `| ${c.id} | ${c.reg} | ${c.auditId} | \`${c.cardId}\` | \`${c.field}\` | \`${c.term}\` | ${hint} | | |`
    );
  }

  fs.writeFileSync(REVIEW, lines.join("\n"));
  fs.writeFileSync(DECISIONS, decisionLines.join("\n"));
  console.log(
    JSON.stringify(
      {
        cases: CASES.length,
        review: REVIEW,
        decisions: DECISIONS,
        productionChanges: 0,
        falsePositive: "a2-Weste-1584/Vest",
      },
      null,
      2
    )
  );
}

main();
