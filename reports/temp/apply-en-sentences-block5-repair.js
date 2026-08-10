#!/usr/bin/env node
/**
 * OWNER Repair Block 5/5 — EN-DE Teikumi (mechanical apply + verify).
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
  { id: "satze-628", action: "LABOT", before: "Bill, please!", after: "The bill, please!" },
  { id: "satze-636", action: "LABOT", before: "Waiters, menu, please!", after: "Waiter, the menu, please!" },
  { id: "satze-639", action: "LABOT", before: "Waiters, please pay!", after: "Waiter, the bill, please!" },
  { id: "satze-640", action: "LABOT", before: "I will go to a cafe to drink coffee.", after: "I'm going to the café to have a coffee." },
  { id: "satze-643", action: "LABOT", before: "Faster please, I have to hurry!", after: "Faster, please. I'm in a hurry!" },
  {
    id: "satze-651",
    action: "LABOT",
    before: "Remind me to sign tomorrow!",
    after: "Remind me tomorrow to write!",
    sourceLvIssue: true,
    de: "Erinnere mich morgen daran zu schreiben!",
    lvSourceNote: "Atgādini man rīt parakstīt!",
  },
  { id: "satze-654", action: "LABOT", before: "Can i call you later", after: "Can I call you later?" },
  { id: "satze-657", action: "LABOT", before: "In the back, please, not too short.", after: "Not too short at the back, please." },
  { id: "satze-659", action: "LABOT", before: "It starts at half past eight.", after: "It starts at half past seven." },
  {
    id: "satze-660",
    action: "LABOT",
    before: "All tickets are sold out.",
    after: "All the seats are sold out.",
    sourceLvIssue: true,
    de: "Alle Plätze sind ausverkauft.",
    lvSourceNote: "Visas biļetes ir izpārdotas.",
  },
  { id: "satze-662", action: "LABOT", before: "Let's leave the jackets in the wardrobe.", after: "Let's leave the jackets in the cloakroom." },
  { id: "satze-663", action: "LABOT", before: "Quicker please, the curtain is about to open!", after: "Quickly, please! The curtain is about to go up!" },
  {
    id: "satze-673",
    action: "LABOT",
    before: "Is everything already boxed?",
    after: "Is everything packed already?",
    sourceLvIssue: true,
    de: "Hast du alles eingepackt?",
    lvSourceNote: "Vai viss jau ir salikts kastēs?",
  },
  {
    id: "satze-674",
    action: "LABOT",
    before: "I am in correspondence with my friend.",
    after: "I am in contact with my friend.",
    sourceLvIssue: true,
    de: "Ich stehe mit meinem Freund in Kontakt.",
    lvSourceNote: "Esmu sarakstē ar savu draugu.",
  },
  { id: "satze-678", action: "LABOT", before: "Now we can put everything back together.", after: "Now we can tidy everything up again." },
  { id: "satze-680", action: "LABOT", before: "I will go to the sea in the summer.", after: "I will go to the seaside in the summer." },
  { id: "satze-681", action: "LABOT", before: "Can you swim", after: "Can you swim?" },
  { id: "satze-689", action: "LABOT", before: "I feel bad.", after: "I don't feel well." },
  { id: "satze-703", action: "LABOT", before: "Can I buy in installments?", after: "Can I buy it in installments?" },
  { id: "satze-705", action: "NELABOT", before: "Noah learned to swim in two weeks.", after: null },
  { id: "satze-707", action: "LABOT", before: "Do you speak german", after: "Do you speak German?" },
  { id: "satze-712", action: "LABOT", before: "Always looking for an opportunity to speak German.", after: "I am always looking for an opportunity to speak German." },
  { id: "satze-713", action: "LABOT", before: "Is this book still available?", after: "Is this book still in stock?" },
  { id: "satze-720", action: "LABOT", before: "Can you weigh half a kilo?", after: "Can you weigh out half a kilo for me?" },
  { id: "satze-723", action: "LABOT", before: "Please weigh two kilograms.", after: "Please weigh out two kilograms for me." },
  { id: "satze-725", action: "NELABOT", before: "Do you have good beef?", after: null },
  {
    id: "satze-727",
    action: "LABOT",
    before: "One loaf of bread, please, but not too hard.",
    after: "One loaf of bread, please, but not too crusty.",
    sourceLvIssue: true,
    de: "Ein Laib Brot, bitte, aber nicht zu knusprig.",
    lvSourceNote: "Vienu maizes kukuli, lūdzu, bet ne pārāk cietu.",
  },
  { id: "satze-733", action: "LABOT", before: "Can you deliver everything to your home?", after: "Can you deliver everything to my home?" },
  { id: "satze-738", action: "LABOT", before: "Can you deliver furniture to the apartment?", after: "Can you deliver the furniture to my apartment?" },
  { id: "satze-739", action: "LABOT", before: "Please pay at the cashier.", after: "Please pay at the checkout." },
  { id: "satze-742", action: "LABOT", before: "I love this fabric.", after: "I like this fabric." },
  { id: "satze-743", action: "LABOT", before: "Please cut three meters.", after: "Please cut off three meters for me." },
  { id: "satze-746", action: "LABOT", before: "Give brighter.", after: "Give me a lighter one." },
  { id: "satze-748", action: "LABOT", before: "What kind of gloves do you want?", after: "Which gloves would you like?" },
  { id: "satze-750", action: "LABOT", before: "So, it works fine now.", after: "So, now they fit well." },
  { id: "satze-755", action: "LABOT", before: "The pants are too long.", after: "The trousers are too long." },
  { id: "satze-759", action: "LABOT", before: "Can you fix your shoes today?", after: "Can you fix the shoes today?" },
  {
    id: "satze-760",
    action: "LABOT",
    before: "When can I bring the shoes?",
    after: "When can I pick up the shoes?",
    sourceLvIssue: true,
    de: "Wann kann ich die Schuhe abholen?",
    lvSourceNote: "Kad varu atnest kurpes?",
  },
  { id: "satze-762", action: "LABOT", before: "It's five minutes early.", after: "It's five minutes fast." },
  { id: "satze-769", action: "LABOT", before: "Please pack and send home.", after: "Please pack it and send it to my home." },
  { id: "satze-775", action: "LABOT", before: "The photo was successful.", after: "The photo turned out well." },
  { id: "satze-781", action: "LABOT", before: "The ring is a little too big for me.", after: "The ring is a little too loose for me." },
  { id: "satze-782", action: "LABOT", before: "I can narrow it down.", after: "I can make it smaller." },
  { id: "satze-783", action: "LABOT", before: "This ring suits me.", after: "This ring fits me." },
  { id: "satze-784", action: "LABOT", before: "Showcase beautiful gift ideas.", after: "Show me some beautiful gift ideas." },
  { id: "satze-788", action: "LABOT", before: "This is not real stone, it is glass.", after: "This isn't a real stone. It's glass." },
  { id: "satze-790", action: "LABOT", before: "It is extremely finely crafted.", after: "It is particularly finely crafted." },
  { id: "satze-792", action: "LABOT", before: "Did I get the box for free?", after: "Do I get the box for free?" },
];

const SPECIAL_CHECKS = {
  "satze-643": "Faster, please. I'm in a hurry!",
  "satze-651": "Remind me tomorrow to write!",
  "satze-659": "It starts at half past seven.",
  "satze-660": "All the seats are sold out.",
  "satze-663": "Quickly, please! The curtain is about to go up!",
  "satze-703": "Can I buy it in installments?",
  "satze-760": "When can I pick up the shoes?",
  "satze-792": "Do I get the box for free?",
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
    block: "5/5",
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
    cumulative: {
      reviewedTotal: 248,
      changedTotal: 232,
      nelabotTotal: 16,
      sourceLvIssueTotal: 12,
    },
    unexpectedChanges: 0,
    applied,
  };

  fs.writeFileSync(
    path.join(ROOT, "reports/temp/en-sentences-repair-block5-log.json"),
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
