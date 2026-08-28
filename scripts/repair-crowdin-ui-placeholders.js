#!/usr/bin/env node
"use strict";

/**
 * Deterministic Crowdin UI placeholder repair (audit-driven).
 *
 * Phase 1 (default): build reports/crowdin-ui-placeholder-repair-owner.md
 * Phase 2 (--apply): write LABOT rows to crowdin/ui JSON + languages ui.js
 *
 * Run:
 *   node scripts/repair-crowdin-ui-placeholders.js
 *   node scripts/repair-crowdin-ui-placeholders.js --apply
 */

const fs = require("fs");
const path = require("path");
const {
  ROOT,
  UI_LANGUAGES,
  CROWDIN_SOURCE_LANG,
  crowdinCodeFromRepoLang,
  parseCrowdinJson,
  extractPlaceholderMultiset,
  extractHtmlTagStructure,
  flattenUiStrings,
  loadUiObject,
  UI_JS_REL,
  applySurgicalCrowdinPatch,
} = require("./lib/ui-crowdin-bridge");

const OWNER_REPORT = path.join(ROOT, "reports", "crowdin-ui-placeholder-repair-owner.md");
const ANY_PLACEHOLDER_RE = /\{[^}]+\}/g;
const LV_PLACEHOLDER_RE = /\{(\w+)\}/g;

/** Repo UI native code literals that replaced `{code}` in direction labels. */
const DIRECTION_NATIVE_CODE_LITERAL = {
  gr: "GR",
};

const DIRECTION_CANONICAL = {
  "direction.deToNative": "🔄 DE ➔ {code}",
  "direction.nativeToDe": "🔄 {code} ➔ DE",
};

function multisetEqual(a, b) {
  const keys = new Set([...Object.keys(a), ...Object.keys(b)]);
  for (const key of keys) {
    if ((a[key] || 0) !== (b[key] || 0)) return false;
  }
  return true;
}

function extractLvPlaceholderNames(value) {
  return [...value.matchAll(LV_PLACEHOLDER_RE)].map((match) => match[1]);
}

function extractCurrentPlaceholderTokens(value) {
  return [...value.matchAll(ANY_PLACEHOLDER_RE)].map((match) => match[0]);
}

function stripPlaceholders(value) {
  return value.replace(ANY_PLACEHOLDER_RE, "");
}

function multisetToJson(multiset) {
  const sorted = Object.keys(multiset).sort();
  const out = {};
  for (const key of sorted) out[key] = multiset[key];
  return JSON.stringify(out);
}

function buildRepairNew(key, lang, lvValue, currentValue) {
  const positional = buildPositionalPlaceholderRepair(lvValue, currentValue);
  if (positional.ok) return positional;

  const directionLiteral = buildDirectionNativeLiteralRepair(key, lang, lvValue, currentValue);
  if (directionLiteral.ok) return directionLiteral;

  const directionCanonical = buildDirectionCanonicalRepair(key, lvValue, currentValue);
  if (directionCanonical.ok) return directionCanonical;

  return positional.status === "NEEDS_OWNER_REVIEW" ? positional : directionLiteral;
}

function buildPositionalPlaceholderRepair(lvValue, currentValue) {
  const lvNames = extractLvPlaceholderNames(lvValue);
  const currentTokens = extractCurrentPlaceholderTokens(currentValue);

  if (lvNames.length !== currentTokens.length) {
    return {
      ok: false,
      status: "NEEDS_OWNER_REVIEW",
      reason: `Placeholder skaits nesakrīt (LV=${lvNames.length}, CURRENT=${currentTokens.length})`,
    };
  }

  let rebuilt = "";
  let lastIndex = 0;
  let index = 0;
  for (const match of currentValue.matchAll(ANY_PLACEHOLDER_RE)) {
    rebuilt += currentValue.slice(lastIndex, match.index);
    rebuilt += `{${lvNames[index]}}`;
    lastIndex = match.index + match[0].length;
    index += 1;
  }
  rebuilt += currentValue.slice(lastIndex);

  if (stripPlaceholders(rebuilt) !== stripPlaceholders(currentValue)) {
    return {
      ok: false,
      status: "NEEDS_OWNER_REVIEW",
      reason: "Apkārtējais teksts mainītos pēc placeholderu aizstāšanas",
    };
  }

  return finalizeRepair(lvValue, currentValue, rebuilt, "Deterministiska LV placeholderu tokena atjaunošana");
}

function buildDirectionNativeLiteralRepair(key, lang, lvValue, currentValue) {
  const nativeCode = DIRECTION_NATIVE_CODE_LITERAL[lang];
  if (!nativeCode) {
    return { ok: false, status: "NEEDS_OWNER_REVIEW", reason: "Nav direction literal kartējuma" };
  }
  if (key !== "direction.deToNative" && key !== "direction.nativeToDe") {
    return { ok: false, status: "NEEDS_OWNER_REVIEW", reason: "Nav direction atslēga" };
  }
  const lvNames = extractLvPlaceholderNames(lvValue);
  if (lvNames.length !== 1 || lvNames[0] !== "code") {
    return { ok: false, status: "NEEDS_OWNER_REVIEW", reason: "LV direction atslēgai sagaidāms tikai {code}" };
  }
  if (extractCurrentPlaceholderTokens(currentValue).length !== 0) {
    return { ok: false, status: "NEEDS_OWNER_REVIEW", reason: "CURRENT jau satur brace tokenus" };
  }

  let rebuilt = null;
  if (key === "direction.deToNative" && currentValue === `🔄 DE ➔ ${nativeCode}`) {
    rebuilt = DIRECTION_CANONICAL[key];
  }
  if (key === "direction.nativeToDe" && currentValue === `🔄 ${nativeCode} ➔ DE`) {
    rebuilt = DIRECTION_CANONICAL[key];
  }
  if (!rebuilt) {
    return {
      ok: false,
      status: "NEEDS_OWNER_REVIEW",
      reason: `CURRENT neatbilst direction literal šablonam ar ${nativeCode}`,
    };
  }

  return finalizeRepair(
    lvValue,
    currentValue,
    rebuilt,
    `Direction: native koda literals ${nativeCode} → {code}`
  );
}

function buildDirectionCanonicalRepair(key, lvValue, currentValue) {
  const canonical = DIRECTION_CANONICAL[key];
  if (!canonical) {
    return { ok: false, status: "NEEDS_OWNER_REVIEW", reason: "Nav direction canonical šablona" };
  }
  const lvNames = extractLvPlaceholderNames(lvValue);
  if (lvNames.length !== 1 || lvNames[0] !== "code") {
    return { ok: false, status: "NEEDS_OWNER_REVIEW", reason: "LV direction atslēgai sagaidāms tikai {code}" };
  }
  if (extractCurrentPlaceholderTokens(currentValue).length !== 0) {
    return { ok: false, status: "NEEDS_OWNER_REVIEW", reason: "CURRENT satur brace tokenus" };
  }
  if (currentValue === canonical) {
    return { ok: false, status: "NEEDS_OWNER_REVIEW", reason: "CURRENT jau ir kanoniskais" };
  }
  if (key !== "direction.deToNative") {
    return { ok: false, status: "NEEDS_OWNER_REVIEW", reason: "Canonical repair tikai deToNative" };
  }
  if (currentValue.includes("🔄") || currentValue.includes("DE") || currentValue.includes("{")) {
    return {
      ok: false,
      status: "NEEDS_OWNER_REVIEW",
      reason: "CURRENT satur direction struktūru, bet bez {code}",
    };
  }

  return finalizeRepair(
    lvValue,
    currentValue,
    canonical,
    "Direction: bojāts CURRENT bez placeholderiem → kanoniskais LV šablons"
  );
}

function finalizeRepair(lvValue, currentValue, rebuilt, rationale) {
  const expected = extractPlaceholderMultiset(lvValue);
  const actual = extractPlaceholderMultiset(rebuilt);
  if (!multisetEqual(expected, actual)) {
    return {
      ok: false,
      status: "NEEDS_OWNER_REVIEW",
      reason: `Pēc remonta multiset vēl neatbilst LV (${multisetToJson(actual)} ≠ ${multisetToJson(expected)})`,
    };
  }
  if (extractHtmlTagStructure(lvValue) !== extractHtmlTagStructure(rebuilt)) {
    return {
      ok: false,
      status: "NEEDS_OWNER_REVIEW",
      reason: "HTML struktūra mainītos pēc remonta",
    };
  }
  if (rebuilt === currentValue) {
    return { ok: false, status: "NEEDS_OWNER_REVIEW", reason: "NEW === CURRENT" };
  }
  return { ok: true, status: "LABOT", newValue: rebuilt, reason: rationale };
}

function collectPlaceholderErrors(lvFlat) {
  const rows = [];
  const targetLangs = UI_LANGUAGES.filter((lang) => lang !== CROWDIN_SOURCE_LANG);

  for (const lang of targetLangs) {
    const jsonPath = path.join(ROOT, "crowdin", "ui", `${lang}.json`);
    const jsonFlat = parseCrowdinJson(fs.readFileSync(jsonPath, "utf8"));
    const { obj, code } = loadUiObject(UI_JS_REL(lang));
    const uiFlat = flattenUiStrings(obj);
    void code;

    for (const key of Object.keys(lvFlat).sort()) {
      const lvValue = lvFlat[key];
      const expected = extractPlaceholderMultiset(lvValue);
      const jsonCurrent = jsonFlat[key];
      const uiCurrent = uiFlat[key];
      const jsonActual = extractPlaceholderMultiset(jsonCurrent);
      const uiActual = extractPlaceholderMultiset(uiCurrent);

      if (multisetEqual(expected, jsonActual)) continue;

      let status = "LABOT";
      let reason = "";
      let newValue = jsonCurrent;

      if (jsonCurrent !== uiCurrent) {
        status = "CURRENT_VALUE_MISMATCH";
        reason = "crowdin/ui JSON un languages/ui.js vērtības nesakrīt";
      } else {
        const repair = buildRepairNew(key, lang, lvValue, jsonCurrent);
        status = repair.status;
        reason = repair.reason || "Deterministiska LV placeholderu tokena atjaunošana";
        if (repair.ok) newValue = repair.newValue;
      }

      rows.push({
        language: lang,
        key,
        lvSource: lvValue,
        current: jsonCurrent,
        uiCurrent,
        newValue,
        currentPlaceholders: multisetToJson(jsonActual),
        lvExpectedPlaceholders: multisetToJson(expected),
        status,
        reason,
      });
    }
  }

  return rows;
}

function renderOwnerReport(rows, applySummary = null) {
  const counts = {
    REQUESTED: rows.length,
    LABOT: rows.filter((row) => row.status === "LABOT").length,
    CURRENT_VALUE_MISMATCH: rows.filter((row) => row.status === "CURRENT_VALUE_MISMATCH").length,
    NEEDS_OWNER_REVIEW: rows.filter((row) => row.status === "NEEDS_OWNER_REVIEW").length,
    APPLIED_VERIFIED: applySummary ? applySummary.appliedVerified : 0,
    FAILED: applySummary ? applySummary.failed : 0,
  };

  const byLang = {};
  for (const row of rows) {
    if (!byLang[row.language]) {
      byLang[row.language] = { before: 0, labot: 0, review: 0, mismatch: 0 };
    }
    byLang[row.language].before += 1;
    if (row.status === "LABOT") byLang[row.language].labot += 1;
    if (row.status === "NEEDS_OWNER_REVIEW") byLang[row.language].review += 1;
    if (row.status === "CURRENT_VALUE_MISMATCH") byLang[row.language].mismatch += 1;
  }

  const lines = [
    "# Crowdin UI placeholder repair — OWNER mapping",
    "",
    `**Datums:** ${new Date().toISOString().slice(0, 10)}  `,
    "**Avots:** `reports/crowdin-ui-untranslated-audit.md`  ",
    "**LV etalons:** `crowdin/ui/lv.json`  ",
    "**Greek kartējums:** Crowdin `el` → repo `gr`",
    "",
    "## Kopsavilkums",
    "",
    "| Statuss | Skaits |",
    "|---|---:|",
    `| REQUESTED | ${counts.REQUESTED} |`,
    `| LABOT | ${counts.LABOT} |`,
    `| CURRENT_VALUE_MISMATCH | ${counts.CURRENT_VALUE_MISMATCH} |`,
    `| NEEDS_OWNER_REVIEW | ${counts.NEEDS_OWNER_REVIEW} |`,
    `| APPLIED_VERIFIED | ${counts.APPLIED_VERIFIED} |`,
    `| FAILED | ${counts.FAILED} |`,
    "",
    "### Pēc valodas (REQUESTED / LABOT / NEEDS_OWNER_REVIEW / MISMATCH)",
    "",
    "| Valoda | REQUESTED | LABOT | NEEDS_OWNER_REVIEW | CURRENT_VALUE_MISMATCH |",
    "|---|---:|---:|---:|---:|",
  ];

  for (const lang of Object.keys(byLang).sort()) {
    const label =
      crowdinCodeFromRepoLang(lang) !== lang
        ? `${lang} (Crowdin: \`${crowdinCodeFromRepoLang(lang)}\`)`
        : lang;
    const row = byLang[lang];
    lines.push(
      `| ${label} | ${row.before} | ${row.labot} | ${row.review} | ${row.mismatch} |`
    );
  }

  lines.push("", "## Mapping", "");
  for (const row of rows) {
    const label =
      crowdinCodeFromRepoLang(row.language) !== row.language
        ? `${row.language} (Crowdin: \`${crowdinCodeFromRepoLang(row.language)}\`)`
        : row.language;
    lines.push(`### ${label} — \`${row.key}\``, "");
    lines.push(`- **Status:** ${row.status}`);
    lines.push(`- **LV source:** \`${row.lvSource}\``);
    lines.push(`- **CURRENT:** \`${row.current}\``);
    lines.push(`- **NEW:** \`${row.status === "LABOT" ? row.newValue : row.current}\``);
    lines.push(`- **CURRENT placeholders:** ${row.currentPlaceholders}`);
    lines.push(`- **LV expected placeholders:** ${row.lvExpectedPlaceholders}`);
    lines.push(`- **Pamatojums:** ${row.reason}`);
    lines.push("");
  }

  if (applySummary) {
    lines.push("## Apply rezultāts", "");
    lines.push(`- **Applied verified:** ${applySummary.appliedVerified}`);
    lines.push(`- **Failed:** ${applySummary.failed}`);
    lines.push(`- **Changed files:** ${applySummary.changedFiles.length}`);
    for (const file of applySummary.changedFiles) {
      lines.push(`  - \`${file}\``);
    }
    lines.push("");
  }

  return `${lines.join("\n")}\n`;
}

function applyRepairs(rows) {
  const labotRows = rows.filter((row) => row.status === "LABOT");
  const changedFiles = new Set();
  let appliedVerified = 0;
  let failed = 0;

  const byLang = new Map();
  for (const row of labotRows) {
    if (!byLang.has(row.language)) byLang.set(row.language, []);
    byLang.get(row.language).push(row);
  }

  for (const [lang, langRows] of [...byLang.entries()].sort()) {
    const jsonPath = path.join(ROOT, "crowdin", "ui", `${lang}.json`);
    const jsonFlat = parseCrowdinJson(fs.readFileSync(jsonPath, "utf8"));
    const rel = UI_JS_REL(lang);
    const { filePath, code, obj } = loadUiObject(rel);
    const uiFlat = flattenUiStrings(obj);

    for (const row of langRows) {
      if (jsonFlat[row.key] !== row.current) {
        failed += 1;
        continue;
      }
      if (uiFlat[row.key] !== row.current) {
        failed += 1;
        continue;
      }
      jsonFlat[row.key] = row.newValue;
    }

    const sortedJson = {};
    for (const key of Object.keys(jsonFlat).sort()) sortedJson[key] = jsonFlat[key];
    fs.writeFileSync(jsonPath, `${JSON.stringify(sortedJson, null, 2)}\n`, "utf8");
    changedFiles.add(path.relative(ROOT, jsonPath));

    const patchFlat = {};
    for (const row of langRows) {
      if (jsonFlat[row.key] === row.newValue && uiFlat[row.key] === row.current) {
        patchFlat[row.key] = row.newValue;
      }
    }

    const patch = applySurgicalCrowdinPatch(code, uiFlat, patchFlat);
    if (patch.changed) {
      fs.writeFileSync(filePath, patch.content, "utf8");
      changedFiles.add(path.relative(ROOT, rel));
    }

    const reparsedJson = parseCrowdinJson(fs.readFileSync(jsonPath, "utf8"));
    const reparsedUi = flattenUiStrings(loadUiObject(rel).obj);

    for (const row of langRows) {
      const lvExpected = extractPlaceholderMultiset(row.lvSource);
      const jsonValue = reparsedJson[row.key];
      const uiValue = reparsedUi[row.key];

      if (jsonValue !== row.newValue || uiValue !== row.newValue) {
        failed += 1;
        continue;
      }
      if (!multisetEqual(extractPlaceholderMultiset(jsonValue), lvExpected)) {
        failed += 1;
        continue;
      }
      if (stripPlaceholders(jsonValue) !== stripPlaceholders(row.current)) {
        failed += 1;
        continue;
      }
      if (extractHtmlTagStructure(row.lvSource) !== extractHtmlTagStructure(jsonValue)) {
        failed += 1;
        continue;
      }
      appliedVerified += 1;
    }
  }

  return { appliedVerified, failed, changedFiles: [...changedFiles].sort() };
}

function main() {
  const apply = process.argv.includes("--apply");
  const lvFlat = parseCrowdinJson(
    fs.readFileSync(path.join(ROOT, "crowdin", "ui", `${CROWDIN_SOURCE_LANG}.json`), "utf8")
  );
  const rows = collectPlaceholderErrors(lvFlat);

  if (!apply && rows.length !== 55) {
    console.error(`Expected exactly 55 audit placeholder rows, found ${rows.length}`);
    process.exit(1);
  }

  if (!apply) {
    const expectedByLang = {
      pt: 12,
      ro: 6,
      bg: 5,
      gr: 5,
      mk: 5,
      hu: 5,
      sl: 5,
      sr: 5,
      hr: 5,
      tr: 1,
      sq: 1,
    };
    for (const [lang, count] of Object.entries(expectedByLang)) {
      const actual = rows.filter((row) => row.language === lang).length;
      if (actual !== count) {
        console.error(`Language ${lang}: expected ${count} rows, found ${actual}`);
        process.exit(1);
      }
    }
  }

  let applySummary = null;
  if (apply) {
    applySummary = applyRepairs(rows);
    if (applySummary.failed > 0) {
      console.error(`Apply failures: ${applySummary.failed}`);
      process.exit(1);
    }
  }

  fs.mkdirSync(path.dirname(OWNER_REPORT), { recursive: true });
  fs.writeFileSync(OWNER_REPORT, renderOwnerReport(rows, applySummary), "utf8");

  console.log(`Wrote ${OWNER_REPORT}`);
  console.log(
    JSON.stringify(
      {
        requested: rows.length,
        labot: rows.filter((row) => row.status === "LABOT").length,
        needsOwnerReview: rows.filter((row) => row.status === "NEEDS_OWNER_REVIEW").length,
        currentValueMismatch: rows.filter((row) => row.status === "CURRENT_VALUE_MISMATCH").length,
        appliedVerified: applySummary ? applySummary.appliedVerified : 0,
      },
      null,
      2
    )
  );
}

main();
