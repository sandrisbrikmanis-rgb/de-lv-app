#!/usr/bin/env node
/**
 * Generate per-level native translation source files after DE sync from LV-DE.
 * DE fields are locked. Fill APPROVED_{LANG} columns via ChatGPT/owner.
 *
 * Usage:
 *   node scripts/prepare-de-sync-native-sources.js --lang=en
 *   node scripts/prepare-de-sync-native-sources.js --lang=cs
 */
const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const {
  LEVELS,
  mdEscape,
  collectDeSyncNativeUnits,
  findDeChangedCardKeys,
} = require("./lib/de-sync-native-scan");

const LANG_META = {
  en: { label: "English", colCurrent: "CURRENT_EN", colApproved: "APPROVED_EN" },
  cs: { label: "Czech", colCurrent: "CURRENT_CS", colApproved: "APPROVED_CS" },
};

function parseArgs() {
  const argv = process.argv.slice(2);
  let lang = null;
  let commit = "018ca5c9^";
  for (let i = 0; i < argv.length; i++) {
    if (argv[i].startsWith("--lang=")) lang = argv[i].slice("--lang=".length).toLowerCase();
    else if (argv[i] === "--lang") lang = String(argv[i + 1] || "").toLowerCase();
    else if (argv[i].startsWith("--commit=")) commit = argv[i].slice("--commit=".length);
    else if (argv[i] === "--commit") commit = argv[i + 1];
  }
  if (!lang || !LANG_META[lang]) {
    console.error("Usage: node scripts/prepare-de-sync-native-sources.js --lang=en|cs [--commit=018ca5c9^]");
    process.exit(1);
  }
  return { lang, commit };
}

const KIND_ORDER = [
  ["cardTitle", "Card title (lv)"],
  ["translation", "Study translation"],
  ["exampleNative", "Examples — native (DE locked)"],
  ["comparisonMeaning", "Comparison — meaning"],
  ["comparisonExampleNative", "Comparison examples — native suffix (DE locked)"],
  ["explanation", "Explanation"],
  ["tip", "Tip"],
  ["important", "Important"],
];

function levelFromId(id) {
  return id.split("[")[0];
}

function renderLevelFile(level, units, meta) {
  const lines = [
    `# ${level.toUpperCase()} — ${meta.label} native translation source (DE sync)`,
    "",
    `> **Workflow:** Translate LV reference → ${meta.label}. Fill **${meta.colApproved}** only.`,
    `> **DE LOCKED:** Do not change DE column / German fragments.`,
    `> **Apply:** \`node scripts/apply-de-sync-native-sources.js --lang=${meta.lang} --level=${level}\` (after approval)`,
    "",
    `Cards with DE fields synced from LV-DE: **${units.filter((u) => u.reason?.includes("DE field")).length}** units from changed cards; plus suspect natives (placeholder / LV leak).`,
    "",
  ];

  const byKind = {};
  for (const u of units) {
    if (!byKind[u.kind]) byKind[u.kind] = [];
    byKind[u.kind].push(u);
  }

  for (const [kind, heading] of KIND_ORDER) {
    const rows = byKind[kind];
    if (!rows?.length) continue;
    lines.push(`## ${heading}`);
    lines.push("");
    if (kind === "exampleNative" || kind === "comparisonExampleNative") {
      lines.push(
        `| ID | DE (locked) | LV reference | ${meta.colCurrent} | ${meta.colApproved} | Reason |`
      );
      lines.push(`|----|-------------|--------------|-------------------|---------------------|--------|`);
      for (const u of rows) {
        lines.push(
          `| \`${u.id}\` | ${mdEscape(u.de)} | ${mdEscape(u.lvRef)} | ${mdEscape(u.current)} | | ${mdEscape(u.reason)} |`
        );
      }
    } else if (kind === "comparisonMeaning") {
      lines.push(
        `| ID | DE word (locked) | LV reference | ${meta.colCurrent} | ${meta.colApproved} | Reason |`
      );
      lines.push(`|----|------------------|--------------|-------------------|---------------------|--------|`);
      for (const u of rows) {
        lines.push(
          `| \`${u.id}\` | ${mdEscape(u.de)} | ${mdEscape(u.lvRef)} | ${mdEscape(u.current)} | | ${mdEscape(u.reason)} |`
        );
      }
    } else {
      lines.push(`| ID | LV reference | ${meta.colCurrent} | ${meta.colApproved} | Reason |`);
      lines.push(`|----|--------------|-------------------|---------------------|--------|`);
      for (const u of rows) {
        lines.push(
          `| \`${u.id}\` | ${mdEscape(u.lvRef)} | ${mdEscape(u.current)} | | ${mdEscape(u.reason)} |`
        );
      }
    }
    lines.push("");
  }

  lines.push("---");
  lines.push(`Total units: **${units.length}**`);
  return lines.join("\n");
}

function main() {
  const { lang, commit } = parseArgs();
  const meta = { ...LANG_META[lang], lang };
  const outDir = path.join(ROOT, "reports", `${lang}-de-sync-native-sources`);
  fs.mkdirSync(outDir, { recursive: true });

  const allUnits = collectDeSyncNativeUnits(lang, commit);
  const changedCards = findDeChangedCardKeys(lang, commit);
  console.log(`DE-changed cards (${lang}): ${changedCards.size}`);
  console.log(`Total native units: ${allUnits.length}`);

  const index = [];
  for (const level of LEVELS) {
    const units = allUnits.filter((u) => levelFromId(u.id) === level);
    const fileName = `${level}.md`;
    fs.writeFileSync(path.join(outDir, fileName), renderLevelFile(level, units, meta), "utf8");
    index.push({ level, file: fileName, units: units.length });
    console.log(`Wrote ${fileName} (${units.length} units)`);
  }

  const readme = [
    `# ${lang.toUpperCase()}-DE word cards — native translation sources (after DE sync)`,
    "",
    `Generated by \`scripts/prepare-de-sync-native-sources.js --lang=${lang}\`.`,
    "",
    `Compare commit: \`${commit}\` (parent of DE sync \`018ca5c9\`).`,
    "",
    "## Instructions",
    "",
    `1. Open each level file (a1.md through c2.md).`,
    `2. Use **LV reference** as meaning source; write ${meta.label} in **${meta.colApproved}**.`,
    "3. **Never edit DE (locked)** columns — German comes from LV-DE master.",
    `4. After ${meta.colApproved} filled, save as \`{level}-approved.md\` or use default path and run apply script per level.`,
    "",
    "## Files",
    "",
    "| Level | File | Units |",
    "|-------|------|-------|",
    ...index.map((r) => `| ${r.level.toUpperCase()} | [${r.file}](./${r.file}) | ${r.units} |`),
    "",
    `**Total units:** ${index.reduce((s, r) => s + r.units, 0)}`,
    "",
    "## ChatGPT prompt (copy-paste)",
    "",
    "```",
    `You are translating German study card native fields into ${meta.label}.`,
    "Rules:",
    "- LV reference column = Latvian meaning source (translate this meaning, not copy Latvian).",
    "- DE (locked) column = German text — NEVER change or translate.",
    `- Fill only the ${meta.colApproved} column.`,
    "- For example rows: native translation must match the German sentence in DE (locked).",
    "- Keep the same punctuation and em-dash style as CURRENT column when present.",
    "```",
  ].join("\n");

  fs.writeFileSync(path.join(outDir, "README.md"), readme, "utf8");
  console.log(`\nDone. Output: ${outDir}`);
}

main();
