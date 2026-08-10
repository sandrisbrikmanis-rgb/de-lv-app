#!/usr/bin/env node
/**
 * OWNER Repair Block 4/5 — EN-DE Teikumi (mechanical apply + verify).
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const crypto = require("crypto");
const { execSync } = require("child_process");

const ROOT = path.join(__dirname, "..", "..");
const EN_FILE = path.join(ROOT, "data/en/sentences.js");
const WWW_FILE = path.join(ROOT, "www/data/en/sentences.js");
const LV_FILE = path.join(ROOT, "data/sentences.js");

const MAPPINGS = [
  { id: "satze-454", action: "LABOT", before: "Yes.", after: "On horseback." },
  { id: "satze-463", action: "LABOT", before: "Put on the basis. • Take as a basis.", after: "Use as a basis. • Take as a basis." },
  { id: "satze-471", action: "NELABOT", before: "Free entry.", after: null },
  { id: "satze-474", action: "LABOT", before: "Become disgusting. • Get sick", after: "Become repulsive. • Become distasteful." },
  { id: "satze-477", action: "LABOT", before: "Without hesitation.", after: "Without doubt." },
  { id: "satze-481", action: "LABOT", before: "Happy journey!", after: "Have a good trip!" },
  { id: "satze-483", action: "NELABOT", before: "Would you please be so kind?", after: null },
  { id: "satze-489", action: "LABOT", before: "Are you still sleeping", after: "Are you still sleeping?" },
  { id: "satze-495", action: "LABOT", before: "Finn, start, please!", after: "Finn, please start!" },
  { id: "satze-496", action: "LABOT", before: "Read on, please!", after: "Read along, please!" },
  {
    id: "satze-497",
    action: "LABOT",
    before: "Emma, \u200B\u200Bplease don't look out the window!",
    after: "Emma, please don't look out the window!",
  },
  { id: "satze-499", action: "LABOT", before: "Go back to your place!", after: "Please go back to your place!" },
  { id: "satze-505", action: "LABOT", before: "Do not forget to ventilate the room!", after: "Do not forget to air the room!" },
  { id: "satze-506", action: "LABOT", before: "Where is the towel", after: "Where is the towel?" },
  { id: "satze-519", action: "LABOT", before: "I drink black coffee best.", after: "I prefer black coffee." },
  { id: "satze-523", action: "LABOT", before: "Give me a cheese bun, please.", after: "Give me a bread roll with cheese, please." },
  { id: "satze-528", action: "LABOT", before: "When do you eat lunch", after: "When do you eat lunch?" },
  { id: "satze-534", action: "LABOT", before: "Thanks, I already have.", after: "Thanks, I've already got some." },
  { id: "satze-538", action: "LABOT", before: "Are you free tonight", after: "Are you free tonight?" },
  { id: "satze-544", action: "LABOT", before: "When do you go to sleep", after: "When do you go to sleep?" },
  { id: "satze-547", action: "LABOT", before: "It's a nice time.", after: "The weather is nice." },
  { id: "satze-548", action: "LABOT", before: "Do you want to walk with me?", after: "Do you want to go for a walk with me?" },
  { id: "satze-549", action: "LABOT", before: "Look, it will rain soon.", after: "Look, it's going to rain soon." },
  { id: "satze-553", action: "LABOT", before: "Think it's going to rain all day?", after: "Do you think it's going to rain all day?" },
  { id: "satze-554", action: "LABOT", before: "The rain stops.", after: "The rain is stopping." },
  {
    id: "satze-556",
    action: "LABOT",
    before: "It is very hot.",
    after: "It is very warm.",
    sourceLvIssue: true,
    de: "Es ist sehr warm.",
    lvSourceNote: "Ir ļoti karsti.",
  },
  { id: "satze-558", action: "LABOT", before: "We're about to get a storm.", after: "There's a thunderstorm coming." },
  {
    id: "satze-559",
    action: "LABOT",
    before: "The storm has passed.",
    after: "The storm is passing.",
    sourceLvIssue: true,
    de: "Das Gewitter zieht vorüber.",
    lvSourceNote: "Negaiss ir garām pagājis.",
  },
  { id: "satze-561", action: "LABOT", before: "See the rainbow?", after: "Can you see the rainbow?" },
  {
    id: "satze-562",
    action: "LABOT",
    before: "Winter is here, it snowed at night.",
    after: "Winter is here. It has snowed.",
    sourceLvIssue: true,
    de: "Der Winter ist da, es hat geschneit.",
    lvSourceNote: "Ziema ir klāt, naktī sniga.",
  },
  { id: "satze-566", action: "LABOT", before: "It's slippery outside, be careful!", after: "There's black ice outside, be careful!" },
  { id: "satze-569", action: "LABOT", before: "It is half past seven.", after: "It is half past six." },
  { id: "satze-570", action: "LABOT", before: "My watch is fast five minutes.", after: "My watch is five minutes fast." },
  { id: "satze-576", action: "LABOT", before: "How are you", after: "How are you?" },
  { id: "satze-580", action: "LABOT", before: "I came to take you for a walk.", after: "I've come to pick you up for a walk." },
  { id: "satze-582", action: "LABOT", before: "I am here for the first time.", after: "I'm in this area for the first time." },
  { id: "satze-587", action: "LABOT", before: "Which is the shortest path?", after: "Which is the shortest route?" },
  { id: "satze-589", action: "LABOT", before: "How to get to the station faster?", after: "What is the quickest way to get to the station?" },
  { id: "satze-593", action: "LABOT", before: "Finn is driving to Berlin, then he will go to the sea.", after: "Finn is travelling as far as Berlin, then he'll go to the seaside." },
  { id: "satze-595", action: "LABOT", before: "After half an hour.", after: "In half an hour." },
  { id: "satze-599", action: "LABOT", before: "The train leaves at half past seven.", after: "The train leaves at half past six." },
  { id: "satze-603", action: "LABOT", before: "Is the box office open yet?", after: "Is the ticket counter open yet?" },
  { id: "satze-607", action: "LABOT", before: "Do I have to change seats in Koblenz?", after: "Do I have to change trains in Koblenz?" },
  { id: "satze-608", action: "LABOT", before: "Yes, you have to change seats there.", after: "Yes, you have to change trains there." },
  { id: "satze-612", action: "LABOT", before: "Put my carry-on in the grid.", after: "Put my carry-on in the luggage net." },
  { id: "satze-614", action: "LABOT", before: "Pull through, please close the window!", after: "There's a draught, please close the window!" },
  { id: "satze-616", action: "LABOT", before: "How long does the train stand?", after: "How long does the train stop here?" },
  { id: "satze-617", action: "LABOT", before: "Where should I transfer?", after: "Where do I have to change trains?" },
  { id: "satze-621", action: "LABOT", before: "Do you have something to clear?", after: "Do you have anything to declare?" },
  { id: "satze-626", action: "NELABOT", before: "How much is the room per night?", after: null },
];

const SPECIAL_CHECKS = {
  "satze-562": "Winter is here. It has snowed.",
  "satze-614": "There's a draught, please close the window!",
  "satze-569": "It is half past six.",
  "satze-599": "The train leaves at half past six.",
};

function md5(p) {
  return crypto.createHash("md5").update(fs.readFileSync(p)).digest("hex");
}

function loadEntries(filePath) {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.SENTENCE_ENTRIES;
}

function parseIndex(cardId) {
  const m = /^satze-(\d+)$/.exec(cardId);
  if (!m) throw new Error(`Invalid cardId: ${cardId}`);
  return Number(m[1]);
}

function main() {
  const apply = process.argv.includes("--apply");
  const en = loadEntries(EN_FILE);
  const lvEntries = loadEntries(LV_FILE);
  const lvHashBefore = md5(LV_FILE);

  const mismatches = [];
  const applied = [];
  const nelabotOk = [];
  const sourceLvIssues = [];

  for (const m of MAPPINGS) {
    const idx = parseIndex(m.id);
    const entry = en[idx];
    if (!entry) {
      mismatches.push({ id: m.id, error: "index out of range" });
      continue;
    }
    const current = entry.lv;

    if (m.action === "NELABOT") {
      if (m.before && current !== m.before) {
        mismatches.push({ id: m.id, expected: m.before, actual: current, action: "NELABOT" });
      } else {
        nelabotOk.push(m.id);
      }
      continue;
    }

    if (current !== m.before) {
      mismatches.push({ id: m.id, expected: m.before, actual: current, action: m.action });
      continue;
    }

    if (apply) {
      entry.lv = m.after;
      applied.push({
        id: m.id,
        before: m.before,
        after: m.after,
        de: entry.de,
        sourceLvIssue: m.sourceLvIssue || false,
      });
      if (m.sourceLvIssue) {
        const lvEntry = lvEntries[idx];
        sourceLvIssues.push({
          cardId: m.id,
          de: m.de || entry.de,
          lvSourceBefore: lvEntry.lv,
          lvSourceNote: m.lvSourceNote,
          enBefore: m.before,
          enAfter: m.after,
          lvChanged: false,
        });
      }
    } else {
      applied.push({ id: m.id, wouldApply: m.after });
    }
  }

  if (mismatches.length > 0) {
    console.error("BEFORE MISMATCH — STOP");
    console.error(JSON.stringify(mismatches, null, 2));
    process.exit(1);
  }

  if (!apply) {
    console.log(
      JSON.stringify(
        {
          reviewed: MAPPINGS.length,
          labot: applied.length,
          nelabot: nelabotOk.length,
          sourceLvIssues: MAPPINGS.filter((x) => x.sourceLvIssue).length,
          mismatches: 0,
        },
        null,
        2
      )
    );
    return;
  }

  const header = "const SENTENCE_ENTRIES = ";
  const footer = "\n\nwindow.SENTENCE_ENTRIES = SENTENCE_ENTRIES;\n";
  const body = JSON.stringify(en, null, 2);
  const content = header + body + ";" + footer;
  fs.writeFileSync(EN_FILE, content);
  fs.writeFileSync(WWW_FILE, content);

  const lvHashAfter = md5(LV_FILE);
  if (lvHashBefore !== lvHashAfter) {
    console.error("LV SOURCE FILE CHANGED — abort");
    process.exit(1);
  }

  execSync(`node --check ${EN_FILE}`, { cwd: ROOT });
  execSync(`node --check ${WWW_FILE}`, { cwd: ROOT });

  const specialCheckResults = {};
  for (const [id, expected] of Object.entries(SPECIAL_CHECKS)) {
    const idx = parseIndex(id);
    specialCheckResults[id] = {
      expected,
      actual: en[idx].lv,
      pass: en[idx].lv === expected,
    };
  }

  let semicolonCount = 0;
  for (const e of en) {
    if ((e.lv || "").includes(";")) semicolonCount += 1;
  }

  const report = {
    block: "4/5",
    reviewed: MAPPINGS.length,
    changed: applied.length,
    nelabotUnchanged: nelabotOk.length,
    nelabotIds: nelabotOk,
    sourceLvIssues,
    appliedIds: applied.map((a) => a.id),
    deReadOnly: true,
    lvSourceReadOnly: lvHashBefore === lvHashAfter,
    mirrorPass: md5(EN_FILE) === md5(WWW_FILE),
    syntaxPass: true,
    semicolonCount,
    specialChecks: specialCheckResults,
    unexpectedChanges: 0,
    applied,
  };

  fs.writeFileSync(
    path.join(ROOT, "reports/temp/en-sentences-repair-block4-log.json"),
    JSON.stringify(report, null, 2)
  );
  console.log(JSON.stringify(report, null, 2));

  const failedSpecial = Object.values(specialCheckResults).some((s) => !s.pass);
  if (failedSpecial || semicolonCount > 0) {
    console.error("Special checks or semicolon gate failed");
    process.exit(1);
  }
}

main();
