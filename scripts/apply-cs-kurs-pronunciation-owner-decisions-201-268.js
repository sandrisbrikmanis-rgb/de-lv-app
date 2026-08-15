#!/usr/bin/env node
"use strict";
/**
 * Apply OWNER decisions 201–268 into review markdown + partial apply map.
 * Usage: node scripts/apply-cs-kurs-pronunciation-owner-decisions-201-268.js
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const REVIEW_MD = path.join(ROOT, "reports/cs-kurs-pronunciation-owner-review-all-findings.md");
const SUMMARY_MD = path.join(ROOT, "reports/cs-kurs-pronunciation-owner-decisions-201-268.md");
const APPLY_JSON = path.join(ROOT, "reports/temp/cs-kurs-pronunciation-owner-apply-map-partial-201-268.json");
const MERGED_JSON = path.join(ROOT, "reports/temp/cs-kurs-pronunciation-owner-apply-map-merged.json");

const SAME_201 =
  "Ve slově Äpfel se ä vyslovuje krátce; následují po něm dvě souhlásky, což zde odpovídá běžnému pravopisnému vodítku.";
const SAME_202 =
  "Ve slově schälen se ä vyslovuje dlouze; následuje po něm jedna souhláska, což zde odpovídá běžnému pravopisnému vodítku.";
const SAME_205 = "Ve slově gern je e krátké a otevřené.";
const SAME_207 =
  "Pamatuj: německá dvojhláska ei se vyslovuje přibližně jako české aj: reif, unreif.";
const SAME_210 =
  "Ve slovech wem, dem, den a der je e dlouhé a vyslovuje se přibližně jako české é.";
const SAME_212 = "Ve slově gehorchen se h vyslovuje: ge-hor-chen.";
const SAME_214 = "Ve slově die Wälder se ä vyslovuje jako krátké otevřené e.";
const SAME_217 = "Ve slově die Bäuerinnen se äu vyslovuje přibližně jako české oj.";
const SAME_219 = "Ve slově die Wiese se skupina ie vyslovuje jako dlouhé í.";
const SAME_221 = "Ve slově werfen je první e krátké a otevřené.";
const SAME_223 =
  "Ve slově wieder se skupina ie vyslovuje jako dlouhé í; koncovka -er se vyslovuje přibližně jako [ɐ].";
const SAME_226 =
  "Ve slovech wieder a die Diele se skupina ie vyslovuje jako dlouhé í.";
const SAME_228 = "Na začátku slova Spaten se skupina sp vyslovuje jako šp.";
const SAME_230 = "Ve slově wohin se h vyslovuje: wo-hin.";
const SAME_232 = "Ve slově wo je o dlouhé.";
const SAME_234 = "Ve slově vor se o vyslovuje dlouze.";
const SAME_236 =
  "Ve slově hinter se h vyslovuje, i je krátké a koncovka -er se vyslovuje přibližně jako [ɐ].";
const SAME_239 =
  "Ve slově der Stuhl se st vyslovuje jako št; h označuje délku předchozí samohlásky a nevyslovuje se.";
const SAME_241 = "Ve slově der Strauch se st vyslovuje jako št.";
const SAME_243 = "Ve slově wachsen se skupina chs vyslovuje jako ks.";
const SAME_246 =
  "Ve slovech Stockwerk, Stein, Stadt a stecken se počáteční st vyslovuje jako št.";
const SAME_248 = "Ve slovech der Ofen a der Boden je o dlouhé.";
const SAME_250 =
  "Spojení písmen sch se vyslovuje jako české š: der Schornstein, der Mensch.";
const SAME_252 = "Ve slovech das Haus a das Holz se h vyslovuje.";
const SAME_254 =
  "Ve slovech die Wohnung a wohnen h označuje délku předchozí samohlásky a nevyslovuje se.";
const SAME_256 =
  "Ve slovech die Küche a die Dächer se ch vyslovuje jako německý Ich-Laut [ç], který v češtině nemá přesný ekvivalent.";
const SAME_258 = "Ve slově das Vorhaus se v vyslovuje jako f.";
const SAME_260 = "Ve slově die Axt se x vyslovuje jako ks.";
const SAME_262 =
  "Ve slovech arbeiten, das Beil a steigen se ei vyslovuje přibližně jako české aj.";
const SAME_264 = "Ve slově die Scheune se eu vyslovuje přibližně jako české oj.";
const SAME_266 = "Ve slově die Brücke se skupina ck vyslovuje jako jedno k.";

const DECISIONS = {
  "201": {
    status: "LABOT",
    new: SAME_201,
    note: "Same target as #199–200 (batch 151–200); OWNER review accounted.",
  },
  "202": {
    status: "LABOT",
    new: SAME_202,
    note: "OWNER — pravopisné vodítko, ne absolūts „1 līdzskanis = garš“ likums.",
  },
  "203": { status: "LABOT", new: SAME_202, note: "Duplicate target — apply once (same as #202)." },
  "204": { status: "LABOT", new: SAME_202, note: "Duplicate target — apply once (same as #202)." },
  "205": { status: "LABOT", new: SAME_205, note: "" },
  "206": { status: "LABOT", new: SAME_205, note: "Duplicate target — apply once (same as #205)." },
  "207": { status: "LABOT", new: SAME_207, note: "" },
  "208": { status: "LABOT", new: SAME_207, note: "Duplicate target — apply once (same as #207)." },
  "209": { status: "LABOT", new: SAME_207, note: "Duplicate target — apply once (same as #207)." },
  "210": { status: "LABOT", new: SAME_210, note: "" },
  "211": { status: "LABOT", new: SAME_210, note: "Duplicate target — apply once (same as #210)." },
  "212": { status: "LABOT", new: SAME_212, note: "" },
  "213": { status: "LABOT", new: SAME_212, note: "Duplicate target — apply once (same as #212)." },
  "214": { status: "LABOT", new: SAME_214, note: "" },
  "215": { status: "LABOT", new: SAME_214, note: "Duplicate target — apply once (same as #214)." },
  "216": { status: "LABOT", new: SAME_214, note: "Duplicate target — apply once (same as #214)." },
  "217": { status: "LABOT", new: SAME_217, note: "" },
  "218": { status: "LABOT", new: SAME_217, note: "Duplicate target — apply once (same as #217)." },
  "219": { status: "LABOT", new: SAME_219, note: "" },
  "220": { status: "LABOT", new: SAME_219, note: "Duplicate target — apply once (same as #219)." },
  "221": { status: "LABOT", new: SAME_221, note: "" },
  "222": { status: "LABOT", new: SAME_221, note: "Duplicate target — apply once (same as #221)." },
  "223": {
    status: "LABOT",
    new: SAME_223,
    note: "OWNER — ie garš í + -er ≈ [ɐ], ne Luna „koncové e“.",
  },
  "224": { status: "LABOT", new: SAME_223, note: "Duplicate target — apply once (same as #223)." },
  "225": { status: "LABOT", new: SAME_223, note: "Duplicate target — apply once (same as #223)." },
  "226": { status: "LABOT", new: SAME_226, note: "" },
  "227": { status: "LABOT", new: SAME_226, note: "Duplicate target — apply once (same as #226)." },
  "228": { status: "LABOT", new: SAME_228, note: "" },
  "229": { status: "LABOT", new: SAME_228, note: "Duplicate target — apply once (same as #228)." },
  "230": { status: "LABOT", new: SAME_230, note: "" },
  "231": { status: "LABOT", new: SAME_230, note: "Duplicate target — apply once (same as #230)." },
  "232": { status: "LABOT", new: SAME_232, note: "" },
  "233": { status: "LABOT", new: SAME_232, note: "Duplicate target — apply once (same as #232)." },
  "234": { status: "LABOT", new: SAME_234, note: "" },
  "235": { status: "LABOT", new: SAME_234, note: "Duplicate target — apply once (same as #234)." },
  "236": {
    status: "LABOT",
    new: SAME_236,
    note: "OWNER — i īss + -er ≈ [ɐ], ne Luna „koncové e“.",
  },
  "237": { status: "LABOT", new: SAME_236, note: "Duplicate target — apply once (same as #236)." },
  "238": { status: "LABOT", new: SAME_236, note: "Duplicate target — apply once (same as #236)." },
  "239": { status: "LABOT", new: SAME_239, note: "" },
  "240": { status: "LABOT", new: SAME_239, note: "Duplicate target — apply once (same as #239)." },
  "241": { status: "LABOT", new: SAME_241, note: "" },
  "242": { status: "LABOT", new: SAME_241, note: "Duplicate target — apply once (same as #241)." },
  "243": {
    status: "LABOT",
    new: SAME_243,
    note: "OWNER — chs → ks, ne Luna ch → ks.",
  },
  "244": { status: "LABOT", new: SAME_243, note: "Duplicate target — apply once (same as #243)." },
  "245": { status: "LABOT", new: SAME_243, note: "Duplicate target — apply once (same as #243)." },
  "246": { status: "LABOT", new: SAME_246, note: "" },
  "247": { status: "LABOT", new: SAME_246, note: "Duplicate target — apply once (same as #246)." },
  "248": { status: "LABOT", new: SAME_248, note: "" },
  "249": { status: "LABOT", new: SAME_248, note: "Duplicate target — apply once (same as #248)." },
  "250": { status: "LABOT", new: SAME_250, note: "" },
  "251": {
    status: "LABOT",
    new: SAME_250,
    note: "Duplicate target — apply once (same as #250).",
  },
  "252": { status: "LABOT", new: SAME_252, note: "" },
  "253": { status: "LABOT", new: SAME_252, note: "Duplicate target — apply once (same as #252)." },
  "254": { status: "LABOT", new: SAME_254, note: "" },
  "255": { status: "LABOT", new: SAME_254, note: "Duplicate target — apply once (same as #254)." },
  "256": {
    status: "LABOT",
    new: SAME_256,
    note: "OWNER — Ich-Laut [ç], ne Luna „hláska podobná h“.",
  },
  "257": { status: "LABOT", new: SAME_256, note: "Duplicate target — apply once (same as #256)." },
  "258": { status: "LABOT", new: SAME_258, note: "" },
  "259": { status: "LABOT", new: SAME_258, note: "Duplicate target — apply once (same as #258)." },
  "260": { status: "LABOT", new: SAME_260, note: "" },
  "261": { status: "LABOT", new: SAME_260, note: "Duplicate target — apply once (same as #260)." },
  "262": { status: "LABOT", new: SAME_262, note: "" },
  "263": { status: "LABOT", new: SAME_262, note: "Duplicate target — apply once (same as #262)." },
  "264": { status: "LABOT", new: SAME_264, note: "" },
  "265": { status: "LABOT", new: SAME_264, note: "Duplicate target — apply once (same as #264)." },
  "266": {
    status: "LABOT",
    new: SAME_266,
    note: "OWNER — ck kā viens k, ne dubults [k].",
  },
  "267": { status: "LABOT", new: SAME_266, note: "Duplicate target — apply once (same as #266)." },
  "268": { status: "LABOT", new: SAME_266, note: "Duplicate target — apply once (same as #266)." },
};

/** Primary finding per shared production target (within batch + cross-batch) */
const DEDUPE_APPLY_PRIMARY = {
  "kurssLesson15/section[3]/item[1]": "199",
  "kurssLesson15/section[3]/item[2]": "202",
  "kurssLesson15/section[3]/item[3]": "205",
  "kurssLesson15/section[3]/item[4]": "207",
  "kurssLesson16/section[3]/item[0]": "210",
  "kurssLesson16/section[3]/item[1]": "212",
  "kurssLesson16/section[3]/item[2]": "214",
  "kurssLesson16/section[3]/item[3]": "217",
  "kurssLesson16/section[3]/item[4]": "219",
  "kurssLesson17/section[3]/item[0]": "221",
  "kurssLesson17/section[3]/item[1]": "223",
  "kurssLesson17/section[3]/item[2]": "226",
  "kurssLesson17/section[3]/item[3]": "228",
  "kurssLesson18/section[3]/item[0]": "230",
  "kurssLesson18/section[3]/item[1]": "232",
  "kurssLesson19/section[3]/item[0]": "234",
  "kurssLesson19/section[3]/item[1]": "236",
  "kurssLesson19/section[3]/item[2]": "239",
  "kurssLesson19/section[3]/item[3]": "241",
  "kurssLesson19/section[3]/item[4]": "243",
  "kurssLesson20/section[3]/item[0]": "246",
  "kurssLesson20/section[3]/item[1]": "248",
  "kurssLesson20/section[3]/item[2]": "250",
  "kurssLesson20/section[3]/item[3]": "252",
  "kurssLesson20/section[3]/item[4]": "254",
  "kurssLesson20/section[3]/item[5]": "256",
  "kurssLesson20/section[3]/item[6]": "258",
  "kurssLesson21/section[3]/item[0]": "260",
  "kurssLesson21/section[3]/item[1]": "262",
  "kurssLesson21/section[3]/item[2]": "264",
  "kurssLesson21/section[3]/item[3]": "266",
};

const PARTIAL_MAPS = [
  "reports/temp/cs-kurs-pronunciation-owner-apply-map-partial-001-050.json",
  "reports/temp/cs-kurs-pronunciation-owner-apply-map-partial-051-100.json",
  "reports/temp/cs-kurs-pronunciation-owner-apply-map-partial-101-150.json",
  "reports/temp/cs-kurs-pronunciation-owner-apply-map-partial-151-200.json",
];

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

function buildMergedApplyMap(batchApplyEntries) {
  const merged = [];
  const seen = new Set();

  for (const partialPath of PARTIAL_MAPS) {
    const full = path.join(ROOT, partialPath);
    const data = JSON.parse(fs.readFileSync(full, "utf8"));
    for (const entry of data.apply) {
      if (seen.has(entry.findingId)) continue;
      seen.add(entry.findingId);
      merged.push(entry);
    }
  }

  for (const entry of batchApplyEntries) {
    if (seen.has(entry.findingId)) continue;
    seen.add(entry.findingId);
    merged.push(entry);
  }

  return {
    meta: {
      scope: "CS Kurss Výslovnost — OWNER merged apply map 001–268",
      source: "reports/cs-kurs-pronunciation-owner-review-all-findings.md",
      reviewed: "001–268",
      partialMapsMerged: [
        ...PARTIAL_MAPS.map((p) => p.replace("reports/temp/", "")),
        "cs-kurs-pronunciation-owner-apply-map-partial-201-268.json",
      ],
      deduplicatedApplyTargets: merged.length,
      productionChanges: 0,
      ownerVerdictTotals: {
        labotFindingRows: 254,
        nelabot: 9,
        falsePositive: 5,
        unreviewed: 0,
      },
      note: "One entry per unique findingId; cross-batch duplicates resolved to earliest primary finding.",
    },
    apply: merged,
  };
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
      scope: "CS Kurss Výslovnost — OWNER batch 201–268",
      source: "reports/cs-kurs-pronunciation-owner-review-all-findings.md",
      reviewed: "201–268",
      labotFindingRows: summary.labot,
      nelabot: summary.nelabot,
      falsePositive: summary.falsePositive,
      deduplicatedApplyTargets: applyEntries.length,
      productionChanges: 0,
      note: "#201 same target as #199 (batch 151–200); not duplicated in this batch apply map.",
    },
    dedupeNote:
      "Multiple finding rows may share one production target; apply map lists one entry per unique findingId not in prior batches.",
    apply: applyEntries,
  };

  fs.writeFileSync(APPLY_JSON, JSON.stringify(applyJson, null, 2), "utf8");

  const merged = buildMergedApplyMap(applyEntries);
  fs.writeFileSync(MERGED_JSON, JSON.stringify(merged, null, 2), "utf8");

  const summaryLines = [
    "# CS–DE Kurss Výslovnost — OWNER decisions 201–268",
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
    "**OWNER review 001–268 complete.**",
    "",
    "## OWNER overrides vs Luna",
    "",
    "- **#202–204:** schälen garš ä — pravopisné vodítko, ne absolūts likums.",
    "- **#223–225:** wieder — ie garš í + -er ≈ [ɐ], ne „koncové e“.",
    "- **#236–238:** hinter — i īss + -er ≈ [ɐ].",
    "- **#243–245:** wachsen — **chs** → ks, ne ch → ks.",
    "- **#256–257:** Ich-Laut [ç], ne „hláska podobná h“.",
    "- **#266–268:** ck kā viens k.",
    "",
    "## Cross-batch note",
    "",
    "#201 shares target with #199–200 (`kurssLesson15/section[3]/item[1]`); apply primary remains #199.",
    "",
    "## Merged apply map",
    "",
    "Full deduplicated map: `reports/temp/cs-kurs-pronunciation-owner-apply-map-merged.json`",
    "",
    `Merged unique targets (001–268): **${merged.meta.deduplicatedApplyTargets}**`,
    "",
    "## Cumulative OWNER verdict totals (all 268 findings)",
    "",
    "| Verdict | Count |",
    "|---------|-------|",
    "| LABOT | 254 |",
    "| NELABOT | 9 |",
    "| FALSE_POSITIVE | 5 |",
    "| Unreviewed | 0 |",
    "",
    "**DE = 0**, **LV MASTER = 0**.",
    "",
  ];

  fs.writeFileSync(SUMMARY_MD, summaryLines.join("\n"), "utf8");

  console.log(`Updated ${REVIEW_MD}`);
  console.log(`Written ${SUMMARY_MD}`);
  console.log(`Apply targets (201–268 batch): ${applyEntries.length} (from ${summary.labot} LABOT rows)`);
  console.log(`Merged apply targets (001–268): ${merged.meta.deduplicatedApplyTargets}`);
}

main();
