#!/usr/bin/env node
"use strict";

const { G2_LEVELS, TARGET_LANGUAGES } = require("./constants");

function parseListArg(values, allowed, label) {
  const out = [];
  for (const raw of values) {
    for (const part of String(raw).split(",")) {
      const v = part.trim().toLowerCase();
      if (!v) continue;
      if (!allowed.includes(v)) {
        throw new Error(`Invalid ${label}: ${v} (allowed: ${allowed.join(", ")})`);
      }
      if (!out.includes(v)) out.push(v);
    }
  }
  return out;
}

function parseArgs(argv) {
  const args = {
    help: false,
    dryRun: true,
    executeSources: false,
    levels: [],
    langs: [],
    limit: null,
    outDir: null,
  };

  for (let i = 2; i < argv.length; i++) {
    let arg = argv[i];
    let inline = null;
    const eq = arg.indexOf("=");
    if (eq > 2 && arg.startsWith("--")) {
      inline = arg.slice(eq + 1);
      arg = arg.slice(0, eq);
    }

    if (arg === "--help" || arg === "-h") args.help = true;
    else if (arg === "--dry-run") args.dryRun = true;
    else if (arg === "--execute-sources") {
      args.executeSources = true;
      args.dryRun = false;
    }
    else if (arg === "--level") args.levels.push(inline ?? argv[++i]);
    else if (arg === "--lang") args.langs.push(inline ?? argv[++i]);
    else if (arg === "--limit") args.limit = Number(inline ?? argv[++i]);
    else if (arg === "--out-dir") args.outDir = inline ?? argv[++i];
    else throw new Error(`Unknown argument: ${arg}`);
  }

  if (args.help) return args;

  if (!args.levels.length) args.levels = ["a1"];
  if (!args.langs.length) args.langs = ["sl"];

  args.levels = parseListArg(args.levels, G2_LEVELS, "level");
  args.langs = parseListArg(args.langs, TARGET_LANGUAGES, "lang");

  if (args.limit != null && (!Number.isFinite(args.limit) || args.limit < 1)) {
    throw new Error("--limit must be a positive number");
  }

  return args;
}

function printHelp() {
  console.log(`Usage: node scripts/run-card-translation-linguistic-audit.js [options]

Unified G2 card translation linguistic audit (A1–C2). Phase 1 default: dry-run inventory + source plan (read-only production).

Options:
  --level <a1|a2|...>   Repeatable or comma-separated (default: a1)
  --lang <code>         Repeatable or comma-separated TARGET lang (default: sl)
  --dry-run             Plan evidence only, no HTTP lookups (default)
  --execute-sources     Call official/dictionary adapters (network; not default in phase 1)
  --limit <n>           Max translation fields per language/level pair
  --out-dir <path>      Override report directory
  --help

Examples:
  node scripts/run-card-translation-linguistic-audit.js --dry-run --level a1 --lang sl,ro
  node scripts/run-card-translation-linguistic-audit.js --level a1,a2 --lang nn --limit 5
`);
}

module.exports = {
  parseArgs,
  printHelp,
};
