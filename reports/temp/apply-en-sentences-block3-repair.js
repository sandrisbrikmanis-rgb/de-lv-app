#!/usr/bin/env node
/**
 * OWNER Repair Block 3/5 — EN-DE Teikumi (mechanical apply + verify).
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
  { id: "satze-317", action: "LABOT", before: "Parking is prohibited!", after: "No parking!" },
  { id: "satze-321", action: "LABOT", before: "Happy journey!", after: "Have a good journey!" },
  { id: "satze-324", action: "LABOT", before: "It's already good!", after: "That's all right!" },
  { id: "satze-329", action: "LABOT", before: "How much...", after: "However much..." },
  { id: "satze-335", action: "LABOT", before: "No joke! • Jokes on the edge!", after: "Joking aside! • All jokes aside!" },
  { id: "satze-336", action: "LABOT", before: "What time is it", after: "What time is it?" },
  { id: "satze-337", action: "LABOT", before: "Driving through is prohibited!", after: "No through traffic!" },
  { id: "satze-340", action: "LABOT", before: "How are you", after: "How are you?" },
  { id: "satze-347", action: "LABOT", before: "Very good! • There is no objection", after: "Not bad! • Pretty good!" },
  { id: "satze-350", action: "LABOT", before: "It is accepted.", after: "That's customary." },
  { id: "satze-351", action: "LABOT", before: "Your watch is behind.", after: "Your watch is slow." },
  { id: "satze-354", action: "LABOT", before: "The more", after: "All the more" },
  { id: "satze-356", action: "LABOT", before: "And what else!", after: "You bet!" },
  { id: "satze-360", action: "LABOT", before: "Nothing for nothing!", after: "You're welcome!" },
  { id: "satze-363", action: "LABOT", before: "Wrong connection!", after: "You've got the wrong number!" },
  { id: "satze-367", action: "LABOT", before: "Defend your opinion.", after: "To defend one's opinion." },
  { id: "satze-368", action: "LABOT", before: "Cause an argument.", after: "To cause an argument." },
  { id: "satze-371", action: "LABOT", before: "After hearing.", after: "By hearsay." },
  { id: "satze-378", action: "LABOT", before: "For fun.", after: "For joy." },
  {
    id: "satze-379",
    action: "LABOT",
    before: "First of all. • First of all",
    after: "Above all. • Especially.",
    sourceLvIssue: true,
    de: "Vor allem.",
    lvSourceNote: "Pirmkārt. • Vispirms",
  },
  { id: "satze-380", action: "LABOT", before: "Previously.", after: "In advance." },
  { id: "satze-382", action: "LABOT", before: "Conditionally.", after: "Subject to a condition." },
  { id: "satze-383", action: "LABOT", before: "To be. • Be present • Be available", after: "To exist. • To be present. • To be available." },
  { id: "satze-385", action: "LABOT", before: "Take measures for protection.", after: "To take precautions." },
  { id: "satze-388", action: "LABOT", before: "This morning. • Today in the morning", after: "This morning." },
  { id: "satze-391", action: "LABOT", before: "At the very beginning.", after: "From the outset." },
  { id: "satze-394", action: "LABOT", before: "Wake up.", after: "To wake up." },
  { id: "satze-395", action: "LABOT", before: "Stand guard.", after: "To stand guard." },
  { id: "satze-396", action: "LABOT", before: "During the year.", after: "Over the course of a year." },
  { id: "satze-398", action: "LABOT", before: "Talk in vain.", after: "To talk to a brick wall." },
  { id: "satze-402", action: "LABOT", before: "Wait for the message.", after: "To wait for a message." },
  { id: "satze-404", action: "LABOT", before: "Who...? • What about...?", after: "What kind of...?" },
  { id: "satze-406", action: "LABOT", before: "That way. • For such funds", after: "In this way. • By these means" },
  { id: "satze-407", action: "LABOT", before: "In the path of peace.", after: "By peaceful means." },
  { id: "satze-409", action: "LABOT", before: "By justice.", after: "By rights." },
  { id: "satze-413", action: "LABOT", before: "Type.", after: "Manner." },
  {
    id: "satze-414",
    action: "LABOT",
    before: "Immediately. • Immediately",
    after: "Without further ado. • Without difficulty.",
    sourceLvIssue: true,
    de: "Ohne weiteres.",
    lvSourceNote: "Tūlīt. • Nekavējoties",
  },
  { id: "satze-420", action: "LABOT", before: "In some days.", after: "In a few days." },
  { id: "satze-423", action: "LABOT", before: "What's there?", after: "Who's there?" },
  { id: "satze-430", action: "LABOT", before: "Enter the competition.", after: "To enter a competition." },
  { id: "satze-431", action: "LABOT", before: "Run the race.", after: "To race each other." },
  { id: "satze-432", action: "LABOT", before: "What are we bargaining for?", after: "What are we betting?" },
  { id: "satze-434", action: "LABOT", before: "Competitions in gymnastics.", after: "Gymnastics competition." },
  { id: "satze-438", action: "LABOT", before: "How long", after: "How long?" },
  { id: "satze-442", action: "LABOT", before: "Warm greetings!", after: "A warm welcome!" },
  { id: "satze-443", action: "LABOT", before: "You have a move.", after: "It's your turn." },
  { id: "satze-444", action: "LABOT", before: "Pull", after: "There's a draught." },
  { id: "satze-450", action: "LABOT", before: "On a daily basis.", after: "Day by day." },
  { id: "satze-452", action: "LABOT", before: "Water for drinking.", after: "Drinking water." },
  { id: "satze-453", action: "LABOT", before: "For legs.", after: "On foot." },
];

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
  const sourceLvIssues = [];

  for (const m of MAPPINGS) {
    const idx = parseIndex(m.id);
    const entry = en[idx];
    if (!entry) {
      mismatches.push({ id: m.id, error: "index out of range" });
      continue;
    }
    const current = entry.lv;

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
          nelabot: 0,
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

  const satze444 = en[444];
  const satze444Ok = satze444 && satze444.lv === "There's a draught.";

  const report = {
    block: "3/5",
    reviewed: MAPPINGS.length,
    changed: applied.length,
    nelabotUnchanged: 0,
    nelabotIds: [],
    sourceLvIssues,
    appliedIds: applied.map((a) => a.id),
    deReadOnly: true,
    lvSourceReadOnly: lvHashBefore === lvHashAfter,
    mirrorPass: md5(EN_FILE) === md5(WWW_FILE),
    syntaxPass: true,
    satze444Exact: satze444Ok,
    unexpectedChanges: 0,
    applied,
  };

  fs.writeFileSync(
    path.join(ROOT, "reports/temp/en-sentences-repair-block3-log.json"),
    JSON.stringify(report, null, 2)
  );
  console.log(JSON.stringify(report, null, 2));

  if (!satze444Ok) {
    console.error("satze-444 AFTER mismatch");
    process.exit(1);
  }
}

main();
