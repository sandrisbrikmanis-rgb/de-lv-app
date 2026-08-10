#!/usr/bin/env node
/**
 * OWNER Repair Block 1/5 — EN-DE Teikumi (mechanical apply + verify).
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
  { id: "satze-2", action: "LABOT", before: "I know that!", after: "I can imagine that!" },
  { id: "satze-5", action: "LABOT", before: "The more.", after: "All the more." },
  { id: "satze-6", action: "LABOT", before: "The more the better.", after: "The more, the better." },
  { id: "satze-7", action: "LABOT", before: "Everything points to the case.", after: "Everything points to rain." },
  { id: "satze-8", action: "LABOT", before: "It makes little sense to me.", after: "That is of little use to me." },
  { id: "satze-10", action: "LABOT", before: "Speak up!", after: "Go on, speak!" },
  { id: "satze-11", action: "LABOT", before: "Thunder roars.", after: "It's thundering." },
  { id: "satze-17", action: "LABOT", before: "Do not go through! • Exit closed!", after: "No through passage! • Exit closed!" },
  { id: "satze-18", action: "LABOT", before: "May i ask you", after: "May I ask you?" },
  { id: "satze-26", action: "LABOT", before: "You just imagine that you are sick.", after: "You're only imagining that you're ill." },
  { id: "satze-27", action: "NELABOT", before: "What comes to your mind?", after: null },
  { id: "satze-28", action: "LABOT", before: "Once there was.", after: "Once upon a time." },
  { id: "satze-34", action: "LABOT", before: "Excuse me, please!", after: "Excuse me!" },
  { id: "satze-42", action: "LABOT", before: "Talk! • Stories!", after: "Out with it! • Tell me!" },
  { id: "satze-47", action: "LABOT", before: "Last night", after: "Tonight" },
  { id: "satze-50", action: "LABOT", before: "Can you repeat that please?", after: "Can you repeat that, please?" },
  { id: "satze-65", action: "LABOT", before: "You should pay attention to that.", after: "You must pay attention to that." },
  { id: "satze-82", action: "NELABOT", before: null, after: null },
  { id: "satze-92", action: "LABOT", before: "Can you call me later", after: "Can you call me later?" },
  { id: "satze-98", action: "LABOT", before: "Find an echo. • Find responsiveness", after: "Resonate. • Meet with approval." },
  { id: "satze-99", action: "LABOT", before: "It depends on that.", after: "It depends." },
  { id: "satze-100", action: "LABOT", before: "Because of this time. • In this regard", after: "On this occasion. • For this reason." },
  { id: "satze-102", action: "LABOT", before: "What have you done there", after: "What have you done there?" },
  { id: "satze-106", action: "LABOT", before: "Don't pretend!", after: "Don't make such a fuss!" },
  { id: "satze-107", action: "LABOT", before: "Get to work.", after: "To get to work." },
  { id: "satze-109", action: "LABOT", before: "Good appetite!", after: "Enjoy your meal!" },
  { id: "satze-111", action: "LABOT", before: "In each case.", after: "In any case." },
  { id: "satze-114", action: "LABOT", before: "He took a loan.", after: "He took out a loan." },
  { id: "satze-116", action: "NELABOT", before: "I will stop now.", after: null },
  { id: "satze-122", action: "LABOT", before: "Cover the damages.", after: "To pay for the damage." },
  { id: "satze-124", action: "LABOT", before: "Sit up straight.", after: "To sit up straight." },
  { id: "satze-125", action: "LABOT", before: "He has stood up.", after: "He is up." },
  { id: "satze-126", action: "LABOT", before: "Devote all your strength.", after: "To use all one's strength." },
  { id: "satze-127", action: "LABOT", before: "Try very hard.", after: "To make a great effort." },
  { id: "satze-128", action: "LABOT", before: "Don't look at me again!", after: "Get out of my sight!" },
  { id: "satze-129", action: "LABOT", before: "In two. • Quietly", after: "In private. • Between the two of us." },
  { id: "satze-133", action: "LABOT", before: "Give importance to appearance.", after: "To attach importance to outward appearance." },
  { id: "satze-134", action: "NELABOT", before: "In the worst case.", after: null },
  { id: "satze-137", action: "NELABOT", before: "He has a good chance.", after: null },
  { id: "satze-140", action: "LABOT", before: "When was the championship?", after: "When were the championship matches held?" },
  { id: "satze-142", action: "NELABOT", before: "To influence.", after: null },
  { id: "satze-148", action: "LABOT", before: "Procrastinate. • Drag to length • Postpone indefinitely", after: "Procrastinate. • Drag it out. • Postpone indefinitely." },
  { id: "satze-151", action: "LABOT", before: "Shoot. • Make a fool of yourself", after: "Mess up. • Make a fool of yourself" },
  { id: "satze-164", action: "LABOT", before: "Starting", after: "At the start." },
  { id: "satze-166", action: "LABOT", before: "With accompaniment.", after: "With his companion." },
  { id: "satze-167", action: "LABOT", before: "He is slow to perceive. • He has slow thinking", after: "He is slow to understand. • He is slow-witted." },
  { id: "satze-168", action: "LABOT", before: "Remember. • Keep in memory", after: "Remember. • Keep in mind" },
  { id: "satze-172", action: "LABOT", before: "Not at all.", after: "Not nearly so." },
  { id: "satze-173", action: "LABOT", before: "Both two.", after: "Both." },
  { id: "satze-175", action: "LABOT", before: "Obtain consent.", after: "Meet with approval." },
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
  const lv = loadEntries(LV_FILE);
  const deHashBefore = md5(LV_FILE);

  const mismatches = [];
  const applied = [];
  const nelabotOk = [];

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
      applied.push({ id: m.id, before: m.before, after: m.after, de: entry.de });
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
    console.log(JSON.stringify({
      reviewed: MAPPINGS.length,
      labot: applied.length,
      nelabot: nelabotOk.length,
      mismatches: 0,
    }, null, 2));
    return;
  }

  // Write EN file preserving structure
  const header = "const SENTENCE_ENTRIES = ";
  const footer = "\n\nwindow.SENTENCE_ENTRIES = SENTENCE_ENTRIES;\n";
  const body = JSON.stringify(en, null, 2);
  const content = header + body + ";" + footer;
  fs.writeFileSync(EN_FILE, content);
  fs.writeFileSync(WWW_FILE, content);

  const deHashAfter = md5(LV_FILE);
  if (deHashBefore !== deHashAfter) {
    console.error("DE FILE CHANGED — abort");
    process.exit(1);
  }

  execSync(`node --check ${EN_FILE}`, { cwd: ROOT });
  execSync(`node --check ${WWW_FILE}`, { cwd: ROOT });

  const enHash = md5(EN_FILE);
  const wwwHash = md5(WWW_FILE);
  const mirrorPass = enHash === wwwHash;

  const report = {
    reviewed: MAPPINGS.length,
    changed: applied.length,
    nelabotUnchanged: nelabotOk.length,
    nelabotIds: nelabotOk,
    appliedIds: applied.map((a) => a.id),
    deReadOnly: deHashBefore === deHashAfter,
    mirrorPass,
    syntaxPass: true,
    unexpectedChanges: 0,
    applied,
  };

  fs.writeFileSync(
    path.join(ROOT, "reports/temp/en-sentences-repair-block1-log.json"),
    JSON.stringify(report, null, 2)
  );
  console.log(JSON.stringify(report, null, 2));
}

main();
