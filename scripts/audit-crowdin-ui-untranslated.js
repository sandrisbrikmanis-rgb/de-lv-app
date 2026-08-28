#!/usr/bin/env node
"use strict";

/**
 * READ-ONLY audit: crowdin/ui/{lang}.json vs LV source (305 keys).
 * Generates reports/crowdin-ui-untranslated-audit.md
 *
 * Run: node scripts/audit-crowdin-ui-untranslated.js
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
} = require("./lib/ui-crowdin-bridge");

const REPORT_PATH = path.join(ROOT, "reports", "crowdin-ui-untranslated-audit.md");
const LV_DIACRITICS_RE = /[āčēģīķļņšūžĀČĒĢĪĶĻŅŠŪŽ]/;
const LATVIAN_HINT_RE =
  /\b(un|vārdu|vārdi|vārdus|iemācī|Pārbaud|Atcelt|Turpin|Izvēl|Klikšķ|Nospied|Rādām|Turpinām|Šonedēļ|Šomēnes|Nezinu|Zinu|Darbības|Teikumi|Galvenā|Problemātisk|Nevajadzīg|pareizrakstīb|mācīšanās|sesij|kartīt|līmenis|pārskat)\b/i;

const INTENTIONAL_KEYS = new Set([
  "study.table.german",
  "direction.deToNative",
  "direction.nativeToDe",
  "verb.infinitiv",
  "verb.hintSessionProgress",
]);

const GERMAN_BRAND_VALUES = new Set(["Deutsch lernen", "Sprache wählen"]);

const GERMAN_BRAND_KEYS = new Set([
  "languageSelect.footer",
  "languageSelect.title",
  "splash.subtitle",
]);

const COGNATE_REVIEW_KEYS = new Set([
  "kurss.sections.grammar",
  "card.sessionLabel",
  "extra.statistics",
  "study.minimal.formsLabel",
  "tools.problemShort",
]);

function multisetEqual(a, b) {
  const keys = new Set([...Object.keys(a), ...Object.keys(b)]);
  for (const key of keys) {
    if ((a[key] || 0) !== (b[key] || 0)) return false;
  }
  return true;
}

function countWords(text) {
  return text
    .replace(/<[^>]+>/g, " ")
    .replace(/\{[^}]+\}/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}

function hasLatvianDiacritics(value) {
  return LV_DIACRITICS_RE.test(value);
}

function isGermanPedagogyMenuDesc(key, value) {
  if (!/^kurss\.lessonItems\.\d+\.menuDesc$/.test(key)) return false;
  if (hasLatvianDiacritics(value)) return false;
  if (/\b(Dativs|Akuzatīvs|akuzatīvs|Refleksīvie|modālie|daudzskaitl|vienskaitl|piederība|salīdzināmās|ģermeņa|augļi)\b/i.test(value)) {
    return false;
  }
  return true;
}

function isCodeOrSymbolicOnly(value) {
  const withoutPlaceholders = value.replace(/\{[^}]+\}/g, "");
  const compact = withoutPlaceholders.replace(/\s+/g, "");
  if (!compact) return true;
  if (/^(DE|LV|GR|EN|A1|A2|B1|B2|C1|C2|[🔄➔‹›▲▼🏅🎉·/:.\-]+)+$/u.test(compact)) return true;
  return false;
}

function isCognateReviewKey(key) {
  if (/^kurss\.lessonItems\.\d+\.title$/.test(key)) return true;
  return COGNATE_REVIEW_KEYS.has(key);
}

function looksLatvianText(value) {
  if (hasLatvianDiacritics(value)) return true;
  return LATVIAN_HINT_RE.test(value);
}

function classifySameRow(key, lvValue) {
  if (INTENTIONAL_KEYS.has(key)) {
    if (key === "study.table.german") {
      return ["INTENTIONAL_SAME", "DE kolonnas kods"];
    }
    if (key === "direction.deToNative" || key === "direction.nativeToDe") {
      return ["INTENTIONAL_SAME", "Virziena indikators ar DE kodu un placeholder {code}"];
    }
    if (key === "verb.infinitiv") {
      return ["INTENTIONAL_SAME", "Latīņu gramatikas termins"];
    }
    return ["INTENTIONAL_SAME", "Placeholder struktūra identiska avotam"];
  }

  if (GERMAN_BRAND_KEYS.has(key) && GERMAN_BRAND_VALUES.has(lvValue)) {
    return ["INTENTIONAL_SAME", "Vācu zīmola / palaišanas virkne"];
  }

  if (isGermanPedagogyMenuDesc(key, lvValue)) {
    return ["INTENTIONAL_SAME", "Apzināti saglabāts vācu mācību apraksts"];
  }

  if (isCodeOrSymbolicOnly(lvValue)) {
    return ["INTENTIONAL_SAME", "Kods, simboli vai tikai placeholderi"];
  }

  if (isCognateReviewKey(key)) {
    return [
      "NEEDS_OWNER_REVIEW",
      "Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam",
    ];
  }

  if (/^kurss\.lessonItems\.\d+\.menuDesc$/.test(key)) {
    return [
      "NEEDS_OWNER_REVIEW",
      "Jaukts LV + DE mācību apraksts — nepieciešams OWNER vērtējums",
    ];
  }

  if (looksLatvianText(lvValue)) {
    return ["REAL_UNTRANSLATED", "LV avota teksts nav iztulkots mērķvalodā"];
  }

  return ["NEEDS_OWNER_REVIEW", "Nav droši klasificējams automātiski"];
}

function escapeTableCell(value) {
  return String(value).replace(/\|/g, "\\|").replace(/\n/g, " ");
}

function langLabel(repoLang) {
  const crowdin = crowdinCodeFromRepoLang(repoLang);
  if (crowdin !== repoLang) {
    return `${repoLang} (Crowdin: \`${crowdin}\`)`;
  }
  return repoLang;
}

function auditLanguage(repoLang, lvFlat, lvKeys) {
  const jsonPath = path.join(ROOT, "crowdin", "ui", `${repoLang}.json`);
  const targetFlat = parseCrowdinJson(fs.readFileSync(jsonPath, "utf8"));
  const targetKeys = new Set(Object.keys(targetFlat));

  const missing = lvKeys.filter((key) => !targetKeys.has(key));
  const extra = Object.keys(targetFlat).filter((key) => !lvFlat[key]);
  const empty = lvKeys.filter((key) => targetKeys.has(key) && targetFlat[key] === "");

  const placeholderErrors = [];
  const htmlErrors = [];
  for (const key of lvKeys) {
    if (!targetKeys.has(key)) continue;
    const source = lvFlat[key];
    const target = targetFlat[key];
    const sourcePh = extractPlaceholderMultiset(source);
    const targetPh = extractPlaceholderMultiset(target);
    if (!multisetEqual(sourcePh, targetPh)) {
      placeholderErrors.push({
        key,
        source,
        target,
        expected: sourcePh,
        actual: targetPh,
      });
    }
    const sourceHtml = extractHtmlTagStructure(source);
    const targetHtml = extractHtmlTagStructure(target);
    if (sourceHtml !== targetHtml) {
      htmlErrors.push({ key, source, target, expected: sourceHtml, actual: targetHtml });
    }
  }

  const sameRows = [];
  for (const key of lvKeys) {
    if (!targetKeys.has(key)) continue;
    if (targetFlat[key] !== lvFlat[key]) continue;
    const [status, rationale] = classifySameRow(key, lvFlat[key]);
    sameRows.push({
      language: repoLang,
      key,
      lvSource: lvFlat[key],
      currentTarget: targetFlat[key],
      status,
      rationale,
      lvWordCount: countWords(lvFlat[key]),
    });
  }

  const statusCounts = {
    INTENTIONAL_SAME: 0,
    REAL_UNTRANSLATED: 0,
    NEEDS_OWNER_REVIEW: 0,
  };
  let lvWordTotal = 0;
  for (const row of sameRows) {
    statusCounts[row.status] += 1;
    lvWordTotal += row.lvWordCount;
  }

  return {
    repoLang,
    keyCount: Object.keys(targetFlat).length,
    expectedKeys: lvKeys.length,
    missing,
    extra,
    empty,
    placeholderErrors,
    htmlErrors,
    sameRows,
    sameCount: sameRows.length,
    lvWordTotal,
    statusCounts,
  };
}

function renderSameTable(rows) {
  if (!rows.length) {
    return "_Nav rindu, kur `target === LV source`._\n";
  }
  const lines = [
    "| language | key | LV source | current target | status | pamatojums |",
    "|---|---|---|---|---|---|",
  ];
  for (const row of rows) {
    lines.push(
      `| ${escapeTableCell(row.language)} | \`${escapeTableCell(row.key)}\` | ${escapeTableCell(row.lvSource)} | ${escapeTableCell(row.currentTarget)} | ${row.status} | ${escapeTableCell(row.rationale)} |`
    );
  }
  return `${lines.join("\n")}\n`;
}

function renderStructuralIssues(label, items, formatter) {
  if (!items.length) return `**${label}:** 0\n`;
  const lines = [`**${label}:** ${items.length}`, ""];
  for (const item of items) {
    lines.push(`- ${formatter(item)}`);
  }
  lines.push("");
  return `${lines.join("\n")}\n`;
}

function main() {
  const lvPath = path.join(ROOT, "crowdin", "ui", `${CROWDIN_SOURCE_LANG}.json`);
  const lvFlat = parseCrowdinJson(fs.readFileSync(lvPath, "utf8"));
  const lvKeys = Object.keys(lvFlat).sort();

  if (lvKeys.length !== 305) {
    console.error(`Expected 305 LV source keys, found ${lvKeys.length}`);
    process.exit(1);
  }

  const targetLangs = UI_LANGUAGES.filter((lang) => lang !== CROWDIN_SOURCE_LANG);
  if (targetLangs.length !== 31) {
    console.error(`Expected 31 target languages, found ${targetLangs.length}`);
    process.exit(1);
  }

  const results = targetLangs.map((lang) => auditLanguage(lang, lvFlat, lvKeys));

  const totals = {
    languages: targetLangs.length,
    keysPerLanguage: lvKeys.length,
    totalKeysChecked: targetLangs.length * lvKeys.length,
    intentionalSame: 0,
    realUntranslated: 0,
    needsOwnerReview: 0,
    placeholderErrors: 0,
    htmlErrors: 0,
    missingKeys: 0,
    extraKeys: 0,
    emptyValues: 0,
    sameRows: 0,
  };

  for (const result of results) {
    totals.intentionalSame += result.statusCounts.INTENTIONAL_SAME;
    totals.realUntranslated += result.statusCounts.REAL_UNTRANSLATED;
    totals.needsOwnerReview += result.statusCounts.NEEDS_OWNER_REVIEW;
    totals.placeholderErrors += result.placeholderErrors.length;
    totals.htmlErrors += result.htmlErrors.length;
    totals.missingKeys += result.missing.length;
    totals.extraKeys += result.extra.length;
    totals.emptyValues += result.empty.length;
    totals.sameRows += result.sameCount;
  }

  const now = new Date().toISOString().slice(0, 10);
  const lines = [
    "# Crowdin UI — netulkoto / identisko rindu audits",
    "",
    `**Datums:** ${now}  `,
    "**Režīms:** READ-ONLY  ",
    `**LV avots:** \`crowdin/ui/lv.json\` — **${lvKeys.length}** atslēgas  `,
    "**Mērķis:** visas **31** mērķvaloda pret LV avotu  ",
    "**Greek kartējums:** Crowdin \`el\` → repo \`gr\`  ",
    "**Production izmaiņas:** **0** (nav mainīti \`crowdin/ui/*.json\`, \`languages/**\`, \`data/**\`, \`www/**\`)",
    "",
    "---",
    "",
    "## Gala kopsavilkums",
    "",
    "| Metrika | Vērtība |",
    "|---|---|",
    `| Pārbaudīto valodu skaits | **${totals.languages}** |`,
    `| Atslēgas uz valodu | **${totals.keysPerLanguage}** |`,
    `| Kopā pārbaudīto atslēgu salīdzinājumu | **${totals.totalKeysChecked}** (${totals.languages} × ${totals.keysPerLanguage}) |`,
    `| Valodu ar 305/305 atslēgām | **${results.filter((r) => r.keyCount === 305 && r.missing.length === 0 && r.extra.length === 0).length}/${totals.languages}** |`,
    `| Kopējais \`target === LV source\` rindu skaits | **${totals.sameRows}** |`,
    `| INTENTIONAL_SAME | **${totals.intentionalSame}** |`,
    `| REAL_UNTRANSLATED | **${totals.realUntranslated}** |`,
    `| NEEDS_OWNER_REVIEW | **${totals.needsOwnerReview}** |`,
    `| Placeholder kļūdas | **${totals.placeholderErrors}** |`,
    `| HTML struktūras kļūdas | **${totals.htmlErrors}** |`,
    `| Trūkstošas atslēgas | **${totals.missingKeys}** |`,
    `| Liekas atslēgas | **${totals.extraKeys}** |`,
    `| Tukšas vērtības | **${totals.emptyValues}** |`,
    `| Production izmaiņas | **0** |`,
    "",
    "### Valodu kopsavilkuma tabula",
    "",
    "| Valoda | Atslēgas | target===source | LV vārdu skaits | INTENTIONAL_SAME | REAL_UNTRANSLATED | NEEDS_OWNER_REVIEW | Placeholder | HTML | Trūkst | Liekas | Tukšas |",
    "|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|",
  ];

  for (const result of results) {
    lines.push(
      `| ${langLabel(result.repoLang)} | ${result.keyCount}/305 | ${result.sameCount} | ${result.lvWordTotal} | ${result.statusCounts.INTENTIONAL_SAME} | ${result.statusCounts.REAL_UNTRANSLATED} | ${result.statusCounts.NEEDS_OWNER_REVIEW} | ${result.placeholderErrors.length} | ${result.htmlErrors.length} | ${result.missing.length} | ${result.extra.length} | ${result.empty.length} |`
    );
  }

  lines.push("", "---", "");

  for (const result of results) {
    lines.push(`## ${langLabel(result.repoLang)}`, "");
    lines.push(
      `- **Atslēgas:** ${result.keyCount}/305`,
      `- **target === source rindas:** ${result.sameCount}`,
      `- **Šo rindu LV avota vārdu skaits:** ${result.lvWordTotal}`,
      `- **INTENTIONAL_SAME:** ${result.statusCounts.INTENTIONAL_SAME}`,
      `- **REAL_UNTRANSLATED:** ${result.statusCounts.REAL_UNTRANSLATED}`,
      `- **NEEDS_OWNER_REVIEW:** ${result.statusCounts.NEEDS_OWNER_REVIEW}`,
      `- **Placeholder kļūdas:** ${result.placeholderErrors.length}`,
      `- **HTML struktūras kļūdas:** ${result.htmlErrors.length}`,
      `- **Trūkstošas atslēgas:** ${result.missing.length}${result.missing.length ? ` (${result.missing.join(", ")})` : ""}`,
      `- **Liekas atslēgas:** ${result.extra.length}${result.extra.length ? ` (${result.extra.join(", ")})` : ""}`,
      `- **Tukšas vērtības:** ${result.empty.length}${result.empty.length ? ` (${result.empty.join(", ")})` : ""}`,
      ""
    );

    if (result.placeholderErrors.length) {
      lines.push(
        renderStructuralIssues("Placeholder kļūdas", result.placeholderErrors, (item) =>
          `\`${item.key}\` — sagaidīts ${JSON.stringify(item.expected)}, faktiski ${JSON.stringify(item.actual)}`
        ).trimEnd(),
        ""
      );
    }

    if (result.htmlErrors.length) {
      lines.push(
        renderStructuralIssues("HTML struktūras kļūdas", result.htmlErrors, (item) =>
          `\`${item.key}\` — sagaidīts \`${item.expected}\`, faktiski \`${item.actual}\``
        ).trimEnd(),
        ""
      );
    }

    lines.push("### target === source tabula", "");
    lines.push(renderSameTable(result.sameRows).trimEnd());
    lines.push("", "---", "");
  }

  fs.mkdirSync(path.dirname(REPORT_PATH), { recursive: true });
  fs.writeFileSync(REPORT_PATH, `${lines.join("\n")}\n`, "utf8");

  console.log(`Wrote ${REPORT_PATH}`);
  console.log(
    JSON.stringify(
      {
        languages: totals.languages,
        keys: totals.keysPerLanguage,
        sameRows: totals.sameRows,
        intentionalSame: totals.intentionalSame,
        realUntranslated: totals.realUntranslated,
        needsOwnerReview: totals.needsOwnerReview,
        placeholderErrors: totals.placeholderErrors,
        htmlErrors: totals.htmlErrors,
      },
      null,
      2
    )
  );
}

main();
