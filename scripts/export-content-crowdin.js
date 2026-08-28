#!/usr/bin/env node
"use strict";

/**
 * Export content datasets to flat Crowdin JSON (Phase 0: dry-run by default).
 * Writes only with explicit --write; targets must be under crowdin/.
 */

const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const {
  G2_LEVELS,
  CROWDIN_SOURCE_LANG,
  CONTENT_LANGUAGES,
  exportContentToCrowdinJson,
  flattenGroup,
} = require("./lib/content-crowdin-bridge");

const CROWDIN_ROOT = path.join(ROOT, "crowdin");

function parseArgs(argv) {
  let group = "g2";
  let level = "a1";
  let lang = CROWDIN_SOURCE_LANG;
  let out = null;
  let write = false;

  for (let i = 2; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === "--group" && argv[i + 1]) group = argv[++i];
    else if (arg === "--level" && argv[i + 1]) level = argv[++i];
    else if (arg === "--lang" && argv[i + 1]) lang = argv[++i];
    else if (arg === "--out" && argv[i + 1]) out = path.resolve(argv[++i]);
    else if (arg === "--write") write = true;
    else if (arg === "--help" || arg === "-h") {
      console.log(
        "Usage: node scripts/export-content-crowdin.js [--group g2|g1-sentences|g1-verbs|g1-training|g3] [--level a1] [--lang lv] [--out PATH] [--write]",
      );
      console.log("");
      console.log("Default: dry-run only (no file written).");
      console.log("--write: persist JSON under crowdin/ (required for any write).");
      console.log("--out: optional path hint; without --write, no file is written.");
      process.exit(0);
    } else {
      console.error(`Unknown argument: ${arg}`);
      process.exit(1);
    }
  }
  return { group, level, lang, out, write };
}

function defaultCrowdinTarget(group, level, lang) {
  const safeGroup = group.replace("g1-", "g1-");
  const suffix = level && group === "g2" ? `-${level}` : "";
  return path.join(CROWDIN_ROOT, "content", safeGroup, `${lang}${suffix}.json`);
}

function isUnderCrowdin(absPath) {
  const rel = path.relative(CROWDIN_ROOT, absPath);
  return rel !== "" && !rel.startsWith("..") && !path.isAbsolute(rel);
}

function resolveWriteTarget({ out, group, level, lang }) {
  const target = out || defaultCrowdinTarget(group, level, lang);
  if (!isUnderCrowdin(target)) {
    console.error(`--write target must be under ${CROWDIN_ROOT}`);
    console.error(`Refused: ${target}`);
    process.exit(1);
  }
  return target;
}

function main() {
  const { group, level, lang, out, write } = parseArgs(process.argv);

  if (!CONTENT_LANGUAGES.includes(lang)) {
    console.error(`Unknown language: ${lang}`);
    process.exit(1);
  }

  if (group === "g2" && !G2_LEVELS.includes(level)) {
    console.error(`Invalid level: ${level}`);
    process.exit(1);
  }

  const json = exportContentToCrowdinJson({ group, lang, level });
  const keyCount = Object.keys(flattenGroup({ group, lang, level })).length;

  if (!write) {
    const hint = out || defaultCrowdinTarget(group, level, lang);
    console.log(
      `DRY-RUN export ${group}${level ? `/${level}` : ""} lang=${lang}: ${keyCount} keys (no file written; would target ${hint})`,
    );
    return;
  }

  const target = resolveWriteTarget({ out, group, level, lang });
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, json, "utf8");
  console.log(`Exported ${keyCount} keys → ${target}`);
}

module.exports = {
  CROWDIN_ROOT,
  defaultCrowdinTarget,
  isUnderCrowdin,
  resolveWriteTarget,
};

if (require.main === module) {
  main();
}
