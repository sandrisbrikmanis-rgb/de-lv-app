#!/usr/bin/env node
"use strict";
/**
 * Apply OWNER decisions 151–200 into review markdown + partial apply map.
 * Usage: node scripts/apply-cs-kurs-pronunciation-owner-decisions-151-200.js
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const REVIEW_MD = path.join(ROOT, "reports/cs-kurs-pronunciation-owner-review-all-findings.md");
const SUMMARY_MD = path.join(ROOT, "reports/cs-kurs-pronunciation-owner-decisions-151-200.md");
const APPLY_JSON = path.join(ROOT, "reports/temp/cs-kurs-pronunciation-owner-apply-map-partial-151-200.json");

const SAME_151 =
  "Správná výslovnost: der Großvater (dér grósfátr).";
const SAME_153 =
  "Dvojhláska ei se vyslovuje přibližně jako české aj: seid (zajt), fleißig (flajsich; ch jako německý Ich-Laut [ç]).";
const SAME_156 =
  "Ve slově Lehrer je kmenové e dlouhé. Koncovka -er se vyslovuje přibližně jako [ɐ].";
const SAME_159 =
  "Dvojhláska eu se vyslovuje přibližně jako české oj: der Freund (frojnt), neun (nojn).";
const SAME_161 = "Z se vyslovuje jako české c: Franz (franc), das Zimmer (cimer).";
const SAME_163 = "X se vyslovuje jako ks: Max (maks), Felix (feliks).";
const SAME_165 =
  "Ve slovech Schwester a am jüngsten se skupina st vyslovuje jako české st: Schwester (švester), jüngsten [ˈjʏŋstən].";
const SAME_168 =
  "Ve slově der Federhalter se h vyslovuje jako hláska, zatímco ve slově der Sohn pouze označuje délku předcházející samohlásky.";
const SAME_170 = "Ve slově halten je h vyslovované.";
const SAME_172 = "Ve slově fahren h označuje délku předcházející samohlásky.";
const SAME_174 = "A ve slově halten se vyslovuje krátce.";
const SAME_176 = "A ve slově tragen se vyslovuje dlouze.";
const SAME_178 =
  "Dvojhláska äu se vyslovuje přibližně jako české oj: du läufst, er läuft.";
const SAME_180 =
  "Ve slově Kopf se skupina pf vyslovuje tak, aby byly slyšet obě souhlásky.";
const SAME_182 = "Znak ß se vyslovuje jako české s.";
const SAME_184 =
  "Znak ß se píše uprostřed nebo na konci slova po dlouhé samohlásce či dvojhlásce: die Füße, die Straße. Po krátké samohlásce se píše ss: ich muss, er muss.";
const SAME_187 =
  "Ve tvarech slovesa müssen se píše ss: müssen, ich muss, du musst, ihr müsst.";
const SAME_190 =
  "Ve slově mögen se ö vyslovuje dlouze, se zaokrouhlenými rty a s jazykem v poloze podobné českému e.";
const SAME_192 =
  "Ve tvarech du magst a ihr mögt se g vyslovuje nezněle, přibližně jako k.";
const SAME_194 =
  "Podobný princip existuje i v češtině: znělá souhláska se před neznělou může vyslovit nezněle.";
const SAME_196 =
  "Ä ve slovech Äpfel a schälen se vyslovuje jako otevřenější e; v Äpfel je krátké a v schälen dlouhé.";
const SAME_199 =
  "Ve slově Äpfel se ä vyslovuje krátce; následují po něm dvě souhlásky, což zde odpovídá běžnému pravopisnému vodítku.";

const DECISIONS = {
  "151": { status: "LABOT", new: SAME_151, note: "" },
  "152": { status: "LABOT", new: SAME_151, note: "Duplicate target — apply once (same as #151)." },
  "153": {
    status: "LABOT",
    new: SAME_153,
    note: "OWNER — flajsich + Ich-Laut [ç], ne Luna flaišich.",
  },
  "154": { status: "LABOT", new: SAME_153, note: "Duplicate target — apply once (same as #153)." },
  "155": { status: "LABOT", new: SAME_153, note: "Duplicate target — apply once (same as #153)." },
  "156": {
    status: "LABOT",
    new: SAME_156,
    note: "OWNER — īsāks nekā Luna sarežģīts variants; -er ≈ [ɐ].",
  },
  "157": { status: "LABOT", new: SAME_156, note: "Duplicate target — apply once (same as #156)." },
  "158": { status: "LABOT", new: SAME_156, note: "Duplicate target — apply once (same as #156)." },
  "159": { status: "LABOT", new: SAME_159, note: "" },
  "160": { status: "LABOT", new: SAME_159, note: "Duplicate target — apply once (same as #159)." },
  "161": { status: "LABOT", new: SAME_161, note: "" },
  "162": { status: "LABOT", new: SAME_161, note: "Duplicate target — apply once (same as #161)." },
  "163": { status: "LABOT", new: SAME_163, note: "" },
  "164": { status: "LABOT", new: SAME_163, note: "Duplicate target — apply once (same as #163)." },
  "165": {
    status: "LABOT",
    new: SAME_165,
    note: "OWNER — jüngsten [ˈjʏŋstən] IPA, ne čehu nk aproksimācija.",
  },
  "166": { status: "LABOT", new: SAME_165, note: "Duplicate target — apply once (same as #165)." },
  "167": { status: "LABOT", new: SAME_165, note: "Duplicate target — apply once (same as #165)." },
  "168": { status: "LABOT", new: SAME_168, note: "" },
  "169": { status: "LABOT", new: SAME_168, note: "Duplicate target — apply once (same as #168)." },
  "170": { status: "LABOT", new: SAME_170, note: "" },
  "171": { status: "LABOT", new: SAME_170, note: "Duplicate target — apply once (same as #170)." },
  "172": { status: "LABOT", new: SAME_172, note: "" },
  "173": { status: "LABOT", new: SAME_172, note: "Duplicate target — apply once (same as #172)." },
  "174": { status: "LABOT", new: SAME_174, note: "" },
  "175": { status: "LABOT", new: SAME_174, note: "Duplicate target — apply once (same as #174)." },
  "176": { status: "LABOT", new: SAME_176, note: "" },
  "177": { status: "LABOT", new: SAME_176, note: "Duplicate target — apply once (same as #176)." },
  "178": { status: "LABOT", new: SAME_178, note: "" },
  "179": { status: "LABOT", new: SAME_178, note: "Duplicate target — apply once (same as #178)." },
  "180": { status: "LABOT", new: SAME_180, note: "" },
  "181": { status: "LABOT", new: SAME_180, note: "Duplicate target — apply once (same as #180)." },
  "182": { status: "LABOT", new: SAME_182, note: "" },
  "183": { status: "LABOT", new: SAME_182, note: "Duplicate target — apply once (same as #182)." },
  "184": {
    status: "LABOT",
    new: SAME_184,
    note: "OWNER — skaidrs ß vs ss pretstats (garš vs īss patskanis).",
  },
  "185": { status: "LABOT", new: SAME_184, note: "Duplicate target — apply once (same as #184)." },
  "186": { status: "LABOT", new: SAME_184, note: "Duplicate target — apply once (same as #184)." },
  "187": {
    status: "LABOT",
    new: SAME_187,
    note: "OWNER — müssen formās vienmēr ss.",
  },
  "188": { status: "LABOT", new: SAME_187, note: "Duplicate target — apply once (same as #187)." },
  "189": { status: "LABOT", new: SAME_187, note: "Duplicate target — apply once (same as #187)." },
  "190": { status: "LABOT", new: SAME_190, note: "" },
  "191": { status: "LABOT", new: SAME_190, note: "Duplicate target — apply once (same as #190)." },
  "192": {
    status: "LABOT",
    new: SAME_192,
    note: "OWNER — du magst + ihr mögt, ne tikai „po g seko t“.",
  },
  "193": { status: "LABOT", new: SAME_192, note: "Duplicate target — apply once (same as #192)." },
  "194": {
    status: "LABOT",
    new: SAME_194,
    note: "OWNER — čehu princips, ne LV „smags“ salīdzinājums.",
  },
  "195": { status: "LABOT", new: SAME_194, note: "Duplicate target — apply once (same as #194)." },
  "196": {
    status: "LABOT",
    new: SAME_196,
    note: "OWNER — Äpfel īss / schälen garš ä; ne „šaurais e“.",
  },
  "197": { status: "LABOT", new: SAME_196, note: "Duplicate target — apply once (same as #196)." },
  "198": { status: "LABOT", new: SAME_196, note: "Duplicate target — apply once (same as #196)." },
  "199": {
    status: "LABOT",
    new: SAME_199,
    note: "OWNER — pravopisné vodítko, ne absolūts „divi līdzskaņi“ likums.",
  },
  "200": { status: "LABOT", new: SAME_199, note: "Duplicate target — apply once (same as #199)." },
};

/** Primary finding per shared production target */
const DEDUPE_APPLY_PRIMARY = {
  "kurssLesson10/section[2]/item[7]": "151",
  "kurssLesson10/section[2]/item[8]": "153",
  "kurssLesson10/section[2]/item[9]": "156",
  "kurssLesson11/section[2]/item[0]": "159",
  "kurssLesson11/section[2]/item[2]": "161",
  "kurssLesson12/section[2]/item[0]": "163",
  "kurssLesson12/section[2]/item[1]": "165",
  "kurssLesson12/section[2]/item[2]": "168",
  "kurssLesson13/section[3]/item[0]": "170",
  "kurssLesson13/section[3]/item[1]": "172",
  "kurssLesson13/section[3]/item[2]": "174",
  "kurssLesson13/section[3]/item[3]": "176",
  "kurssLesson13/section[3]/item[4]": "178",
  "kurssLesson13/section[3]/item[5]": "180",
  "kurssLesson14/section[3]/item[0]": "182",
  "kurssLesson14/section[3]/item[1]": "184",
  "kurssLesson14/section[3]/item[2]": "187",
  "kurssLesson14/section[3]/item[3]": "190",
  "kurssLesson14/section[3]/item[4]": "192",
  "kurssLesson14/section[3]/item[5]": "194",
  "kurssLesson15/section[3]/item[0]": "196",
  "kurssLesson15/section[3]/item[1]": "199",
};

function parseFindingBlocks(md) {
  const re = /^## Finding (\d{3})\n([\s\S]*?)(?=\n---\n\n## Finding |\n## End)/gm;
  const blocks = {};
  let m;
  while ((m = re.exec(md)) !== null) {
    blocks[m[1]] = m[0];
  }
  return blocks;
}

function extractMeta(block) {
  const id = block.match(/\*\*Finding ID:\*\* (.+)/)?.[1]?.trim() || "";
  const file = block.match(/\*\*File:\*\* (.+)/)?.[1]?.trim() || "";
  const objectId = block.match(/\*\*Object:\*\* (.+)/)?.[1]?.trim() || "";
  const field = block.match(/\*\*Field:\*\* (.+)/)?.[1]?.trim() || "";
  const current = block.match(/### CURRENT\n([\s\S]*?)### Luna PROPOSED/)?.[1]?.trim() || "";
  return { findingId: id, file, objectId, field, current };
}

function patchOwnerBlock(block, decision) {
  return block.replace(
    /### OWNER\n\*\*Status:\*\*[^\n]*\n\*\*OWNER NEW:\*\*[^\n]*\n\*\*OWNER note:\*\*[^\n]*\n/,
    `### OWNER\n**Status:** ${decision.status}\n**OWNER NEW:** ${decision.new}\n**OWNER note:** ${decision.note}\n`,
  );
}

function main() {
  let md = fs.readFileSync(REVIEW_MD, "utf8");
  const blocks = parseFindingBlocks(md);

  for (const [num, decision] of Object.entries(DECISIONS)) {
    if (!blocks[num]) {
      console.error(`Missing finding block ${num}`);
      process.exit(1);
    }
    const patched = patchOwnerBlock(blocks[num], decision);
    md = md.replace(blocks[num], patched);
    blocks[num] = patched;
  }

  fs.writeFileSync(REVIEW_MD, md, "utf8");

  const applyEntries = [];
  for (const [num, decision] of Object.entries(DECISIONS)) {
    if (decision.status !== "LABOT") continue;
    const meta = extractMeta(blocks[num]);
    const primary = DEDUPE_APPLY_PRIMARY[meta.findingId];
    if (primary && primary !== num) continue;

    applyEntries.push({
      findingNum: num,
      findingId: meta.findingId,
      file: meta.file || "data/cs/courseLessons.js",
      objectId: meta.objectId,
      field: meta.field,
      current: meta.current,
      ownerNew: decision.new,
      verdict: "LABOT",
    });
  }

  const summary = { labot: 0, nelabot: 0, falsePositive: 0 };
  for (const d of Object.values(DECISIONS)) {
    if (d.status === "LABOT") summary.labot += 1;
    if (d.status === "NELABOT") summary.nelabot += 1;
    if (d.status === "FALSE_POSITIVE") summary.falsePositive += 1;
  }

  const applyJson = {
    meta: {
      scope: "CS Kurss Výslovnost — OWNER batch 151–200",
      source: "reports/cs-kurs-pronunciation-owner-review-all-findings.md",
      reviewed: "151–200",
      labotFindingRows: summary.labot,
      nelabot: summary.nelabot,
      falsePositive: summary.falsePositive,
      deduplicatedApplyTargets: applyEntries.length,
      productionChanges: 0,
    },
    dedupeNote:
      "Multiple finding rows may share one production target; apply map lists one entry per unique findingId.",
    apply: applyEntries,
  };

  fs.writeFileSync(APPLY_JSON, JSON.stringify(applyJson, null, 2), "utf8");

  const summaryLines = [
    "# CS–DE Kurss Výslovnost — OWNER decisions 151–200",
    "",
    "READ-ONLY documentation. **Production changes: 0**",
    "",
    "## Summary",
    "",
    "| Verdict | Count |",
    "|---------|-------|",
    `| LABOT (finding rows) | ${summary.labot} |`,
    `| NELABOT | ${summary.nelabot} |`,
    `| FALSE_POSITIVE | ${summary.falsePositive} |`,
    `| Deduplicated LABOT apply targets (this batch) | **${applyEntries.length}** |`,
    "",
    "## OWNER overrides vs Luna",
    "",
    "- **#153–155:** flajsich + Ich-Laut [ç], ne flaišich.",
    "- **#156–158:** īsāks Lehrer / -er ≈ [ɐ] variants.",
    "- **#165–167:** jüngsten [ˈjʏŋstən] IPA, ne čehu nk.",
    "- **#184–186:** skaidrs ß (garš patskanis) vs ss (īss patskanis).",
    "- **#187–189:** müssen formās vienmēr ss.",
    "- **#192–193:** du magst + ihr mögt, ne tikai „po g seko t“.",
    "- **#194–195:** čehu princips, ne LV „smags“.",
    "- **#196–198:** Äpfel īss / schälen garš ä.",
    "- **#199–200:** pravopisné vodítko, ne absolūts likums.",
    "",
    "## Duplicate targets (one apply per target)",
    "",
    "| Primary | Duplicate rows |",
    "|---------|----------------|",
    "| 151 | 152 |",
    "| 153 | 154, 155 |",
    "| 156 | 157, 158 |",
    "| 159 | 160 |",
    "| 161 | 162 |",
    "| 163 | 164 |",
    "| 165 | 166, 167 |",
    "| 168 | 169 |",
    "| 170 | 171 |",
    "| 172 | 173 |",
    "| 174 | 175 |",
    "| 176 | 177 |",
    "| 178 | 179 |",
    "| 180 | 181 |",
    "| 182 | 183 |",
    "| 184 | 185, 186 |",
    "| 187 | 188, 189 |",
    "| 190 | 191 |",
    "| 192 | 193 |",
    "| 194 | 195 |",
    "| 196 | 197, 198 |",
    "| 199 | 200 |",
    "",
    "## Apply map",
    "",
    "Partial JSON: `reports/temp/cs-kurs-pronunciation-owner-apply-map-partial-151-200.json`",
    "",
    "**DE = 0**, **LV MASTER = 0**.",
    "",
  ];

  fs.writeFileSync(SUMMARY_MD, summaryLines.join("\n"), "utf8");

  console.log(`Updated ${REVIEW_MD}`);
  console.log(`Written ${SUMMARY_MD}`);
  console.log(`Apply targets (151–200 batch): ${applyEntries.length} (from ${summary.labot} LABOT rows)`);
}

main();
