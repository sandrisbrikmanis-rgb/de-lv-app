#!/usr/bin/env node
/**
 * OWNER Repair Block 2/5 — EN-DE Teikumi (mechanical apply + verify).
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
  { id: "satze-180", action: "LABOT", before: "Invest your share.", after: "Make a contribution." },
  { id: "satze-183", action: "LABOT", before: "Sandwiches with toppings.", after: "Topped bread rolls." },
  { id: "satze-188", action: "LABOT", before: "Be ready. • Be at peace", after: "Be ready. • Be willing" },
  { id: "satze-190", action: "LABOT", before: "Report. • Provide a report • Provide an overview", after: "Report. • Provide a report • Give an account" },
  { id: "satze-192", action: "LABOT", before: "A new broom sweeps well.", after: "New brooms sweep clean." },
  { id: "satze-195", action: "LABOT", before: "The better.", after: "All the better." },
  { id: "satze-197", action: "LABOT", before: "Whatever you want.", after: "With the best will in the world." },
  { id: "satze-198", action: "LABOT", before: "The best.", after: "Ideally." },
  { id: "satze-202", action: "LABOT", before: "Definitely. • Completely safe", after: "Definitely. • Certainly." },
  { id: "satze-204", action: "LABOT", before: "To visit. • To visit", after: "To be visiting. • To be a guest." },
  { id: "satze-210", action: "LABOT", before: "Both two.", after: "Both of them." },
  { id: "satze-212", action: "NELABOT", before: null, after: null },
  { id: "satze-213", action: "LABOT", before: "Please", after: "Please." },
  { id: "satze-214", action: "LABOT", before: "How please", after: "Pardon?" },
  { id: "satze-215", action: "LABOT", before: "Please", after: "Please." },
  { id: "satze-216", action: "NELABOT", before: "I have a request for you.", after: null },
  { id: "satze-217", action: "NELABOT", before: "Blow the trumpet.", after: null },
  { id: "satze-218", action: "LABOT", before: "Sort the book.", after: "Leaf through a book." },
  { id: "satze-219", action: "LABOT", before: "Bare feet.", after: "Barefoot." },
  { id: "satze-223", action: "LABOT", before: "Check. • Check", after: "Please check. • Please verify." },
  { id: "satze-225", action: "LABOT", before: "Everything speaks well.", after: "Everything speaks in favour of it." },
  { id: "satze-226", action: "LABOT", before: "I can't do anything there.", after: "I can't help it." },
  { id: "satze-230", action: "LABOT", before: "Make a lady's move.", after: "Move the queen." },
  { id: "satze-239", action: "LABOT", before: "Don't lower your head!", after: "Keep your chin up!" },
  {
    id: "satze-242",
    action: "LABOT",
    before: "Since childhood • From the very beginning",
    after: "By nature. • Originally.",
    sourceLvIssue: true,
    de: "von Haus aus",
    lvSourceNote: "kopš bērnības • no pašiem sākumiem",
  },
  { id: "satze-243", action: "LABOT", before: "Congratulations!", after: "My warmest congratulations!" },
  { id: "satze-244", action: "LABOT", before: "Be so kind! • Be so good!", after: "Be so kind! • Please!" },
  { id: "satze-251", action: "LABOT", before: "Last night", after: "Yesterday evening" },
  { id: "satze-254", action: "LABOT", before: "Don't do nonsense! • Don't make jokes!", after: "Don't make a fuss! • Don't make a scene!" },
  { id: "satze-255", action: "LABOT", before: "Not to mention that. • Where else", after: "Not to mention... • Let alone..." },
  { id: "satze-257", action: "LABOT", before: "How are you • How are you?", after: "How are you? • How are you?" },
  { id: "satze-258", action: "LABOT", before: "Ask him if he comes out if...", after: "Ask him occasionally whether..." },
  { id: "satze-262", action: "LABOT", before: "It appears from this letter that...", after: "It follows from this letter that..." },
  { id: "satze-263", action: "NELABOT", before: "Keep it up!", after: null },
  { id: "satze-264", action: "NELABOT", before: "He doesn't like...", after: null },
  { id: "satze-266", action: "LABOT", before: "Do you remember me • Have you thought about me?", after: "Do you remember me? • Have you thought about me?" },
  { id: "satze-269", action: "LABOT", before: "Sad to watch...", after: "It pains me to see..." },
  { id: "satze-270", action: "LABOT", before: "The more the better", after: "The more, the better" },
  { id: "satze-272", action: "LABOT", before: "How to get to the station?", after: "How do I get to the station?" },
  { id: "satze-281", action: "LABOT", before: "How are you", after: "How's it going?" },
  { id: "satze-283", action: "LABOT", before: "Live healthy! • Goodbye!", after: "Farewell! • Goodbye!" },
  { id: "satze-286", action: "LABOT", before: "It was a busy day.", after: "It was a tiring day." },
  { id: "satze-294", action: "LABOT", before: "The dog has been released.", after: "The dog is loose." },
  { id: "satze-297", action: "LABOT", before: "What are you doing", after: "What are you doing?" },
  { id: "satze-298", action: "LABOT", before: "Say yes!", after: "Tell me!" },
  { id: "satze-299", action: "LABOT", before: "What do you mean by that? • What do you think?", after: "What do you mean by that? • What do you mean?" },
  { id: "satze-305", action: "LABOT", before: "On monday", after: "On Monday" },
  { id: "satze-309", action: "LABOT", before: "Sit down!", after: "Please take a seat!" },
  { id: "satze-310", action: "LABOT", before: "The latest news!", after: "The latest novelty!" },
  { id: "satze-312", action: "LABOT", before: "No, of course! • Don't!", after: "Oh, no! • Don't!" },
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
          sourceLvIssues: sourceLvIssues.length || (MAPPINGS.filter((x) => x.sourceLvIssue).length),
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

  const report = {
    block: "2/5",
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
    unexpectedChanges: 0,
    applied,
  };

  fs.writeFileSync(
    path.join(ROOT, "reports/temp/en-sentences-repair-block2-log.json"),
    JSON.stringify(report, null, 2)
  );
  console.log(JSON.stringify(report, null, 2));
}

main();
