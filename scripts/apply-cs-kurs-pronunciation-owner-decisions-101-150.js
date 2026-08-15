#!/usr/bin/env node
"use strict";
/**
 * Apply OWNER decisions 101–150 into review markdown + partial apply map.
 * Usage: node scripts/apply-cs-kurs-pronunciation-owner-decisions-101-150.js
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const REVIEW_MD = path.join(ROOT, "reports/cs-kurs-pronunciation-owner-review-all-findings.md");
const SUMMARY_MD = path.join(ROOT, "reports/cs-kurs-pronunciation-owner-decisions-101-150.md");
const APPLY_JSON = path.join(ROOT, "reports/temp/cs-kurs-pronunciation-owner-apply-map-partial-101-150.json");

const DECISIONS = {
  "101": { status: "LABOT", new: "Qu → kv", note: "" },
  "102": {
    status: "NELABOT",
    new: "",
    note: "Īss kopsavilkuma noteikums Qu→kv / ß→s kontekstā — nav pilna teikuma.",
  },
  "103": { status: "LABOT", new: "ß → s", note: "" },
  "104": {
    status: "LABOT",
    new: "V lekcích je správná výslovnost slov přepsána českými písmeny.",
    note: "",
  },
  "105": {
    status: "LABOT",
    new: "Wir (vír) — my. Ve slově wir se i vyslovuje dlouze.",
    note: "",
  },
  "106": {
    status: "LABOT",
    new: "Wir (vír) — my. Ve slově wir se i vyslovuje dlouze.",
    note: "Duplicate target — apply once (same as #105).",
  },
  "107": {
    status: "LABOT",
    new:
      "Ve slovech ich, nicht, rechnen a zeichnen se ch vyslovuje měkce jako německý Ich-Laut [ç]; v češtině nemá přesný ekvivalent.",
    note: "",
  },
  "108": {
    status: "LABOT",
    new: "Ve slovech arbeiten a zeichnen se dvojhláska ei vyslovuje přibližně jako české aj.",
    note: "",
  },
  "109": {
    status: "FALSE_POSITIVE",
    new: "",
    note: "ī špīlen ir garuma apzīmējums, ne LV atlikums; reāls fix #110 (neredzamie simboli).",
  },
  "110": {
    status: "LABOT",
    new: "Shluk souhlásek sp se vyslovuje jako šp: spielen (špílen).",
    note: "OWNER — noņemt neredzamos simboli; špílen garuma zīme paliek.",
  },
  "111": {
    status: "LABOT",
    new: "Sloveso tun se ve všech osobách vyslovuje s dlouhým u.",
    note: "",
  },
  "112": {
    status: "LABOT",
    new: "ck jsou dvě písmena, která označují jednu hlásku [k]: dick (dikk).",
    note: "",
  },
  "113": {
    status: "LABOT",
    new:
      "V přídavných jménech a příslovcích se koncovka -ig ve standardní výslovnosti často vyslovuje s německým měkkým ch [ç]: niedrig.",
    note: "",
  },
  "114": {
    status: "LABOT",
    new: "Pokud po -ig následuje koncovka -e, vyslovuje se g jako [g]: niedrige (nídrige) Bänke.",
    note: "",
  },
  "115": {
    status: "LABOT",
    new:
      "Písmeno h v němčině může označovat hlásku [h], nebo může být němé a označovat délku předchozí samohlásky.",
    note: "",
  },
  "116": {
    status: "LABOT",
    new:
      "Je-li h němé a označuje délku předchozí samohlásky, nevyslovuje se jako samostatná hláska: nehmen (némen).",
    note: "",
  },
  "117": {
    status: "LABOT",
    new:
      "Délku samohlásky nelze určit pouze podle počtu následujících souhlásek. Například die, Feder a den mají dlouhou samohlásku.",
    note: "",
  },
  "118": {
    status: "LABOT",
    new: "Písmena tz označují hlásku [ts], tedy české „c“: sitzen (zicen).",
    note: "OWNER — zicen, ne Luna cicen (s = [z], tz = [ts] ≈ české c).",
  },
  "119": {
    status: "LABOT",
    new:
      "V se v mnoha původně německých slovech vyslovuje jako f: der Vater (fátr). V přejatých slovech se může vyslovovat jako v.",
    note: "",
  },
  "120": {
    status: "LABOT",
    new:
      "V se v mnoha původně německých slovech vyslovuje jako f: der Vater (fátr). V přejatých slovech se může vyslovovat jako v.",
    note: "Duplicate target — apply once (same as #119).",
  },
  "121": {
    status: "LABOT",
    new: "Písmeno ß (Eszett) se vyslovuje jako české s: groß (grós), weiß (vais).",
    note: "",
  },
  "122": {
    status: "LABOT",
    new: "Písmeno ß (Eszett) se vyslovuje jako české s: groß (grós), weiß (vais).",
    note: "Duplicate target — apply once (same as #121).",
  },
  "123": {
    status: "LABOT",
    new: "Ä je přehláska písmene a. Vyslovuje se jako krátké nebo dlouhé otevřené e [ɛ] / [ɛː].",
    note: "",
  },
  "124": {
    status: "FALSE_POSITIVE",
    new: "",
    note: "Mädchen (mētchen) pareizs — standarta ä garš /ɛː/; Luna metchen sabojātu izrunu.",
  },
  "125": {
    status: "LABOT",
    new:
      "Ü je přehláska písmene u. Při jeho vyslovování mějte rty zaokrouhlené a vyslovte i, aniž byste polohu rtů změnili.",
    note: "",
  },
  "126": {
    status: "LABOT",
    new: "Ö se vyslovuje s jazykem v poloze podobné českému e a se zaokrouhlenými rty: der Löffel.",
    note: "",
  },
  "127": {
    status: "FALSE_POSITIVE",
    new: "",
    note: "Dī/šūsel garuma apzīmējumi — ne LV atlikums; reāls typo labo #128.",
  },
  "128": {
    status: "LABOT",
    new: "Sch se vyslovuje jako české š: die Schaufel (dí šaufel), die Schüssel (dí šüssel).",
    note: "",
  },
  "129": {
    status: "LABOT",
    new: "Dvojhláska äu se vyslovuje přibližně jako české oi: das Fräulein (das froilein).",
    note: "",
  },
  "130": {
    status: "LABOT",
    new: "Ä se někdy vyslovuje jako otevřené e, například ve slově der Gärtner (dér gertner).",
    note: "",
  },
  "131": {
    status: "LABOT",
    new: "Ä se někdy vyslovuje jako otevřené e, například ve slově der Gärtner (dér gertner).",
    note: "Duplicate target — apply once (same as #130).",
  },
  "132": {
    status: "LABOT",
    new: "ß se vyslovuje jako s: grüßen (grüsen).",
    note: "",
  },
  "133": {
    status: "LABOT",
    new: "ß se vyslovuje jako s: grüßen (grüsen).",
    note: "Duplicate target — apply once (same as #132).",
  },
  "134": {
    status: "LABOT",
    new: "Eu se vyslovuje přibližně jako české oj: deutlich (dojtlich).",
    note: "OWNER — oj, ne Luna oi/doitlich.",
  },
  "135": {
    status: "LABOT",
    new: "Eu se vyslovuje přibližně jako české oj: deutlich (dojtlich).",
    note: "Duplicate target — apply once (same as #134).",
  },
  "136": {
    status: "LABOT",
    new: "Je důležité správně vyslovovat přehlásky.",
    note: "",
  },
  "137": {
    status: "LABOT",
    new: "Je důležité správně vyslovovat přehlásky.",
    note: "Duplicate target — apply once (same as #136).",
  },
  "138": {
    status: "LABOT",
    new:
      "Ö se vyslovuje se zaokrouhlenými rty a s jazykem v poloze podobné českému e: wir können, ihr könnt, sie können, der Löffel.",
    note: "",
  },
  "139": {
    status: "LABOT",
    new:
      "Ö se vyslovuje se zaokrouhlenými rty a s jazykem v poloze podobné českému e: wir können, ihr könnt, sie können, der Löffel.",
    note: "Duplicate target — apply once (same as #138).",
  },
  "140": {
    status: "LABOT",
    new:
      "Ü se vyslovuje se zaokrouhlenými rty a s jazykem v poloze podobné českému i: Müller (müller), Bücher (bücher).",
    note: "OWNER — saglabāt ü, ne Luna miller/býcher.",
  },
  "141": {
    status: "LABOT",
    new:
      "Ü se vyslovuje se zaokrouhlenými rty a s jazykem v poloze podobné českému i: Müller (müller), Bücher (bücher).",
    note: "Duplicate target — apply once (same as #140).",
  },
  "142": {
    status: "LABOT",
    new: "Pravopis následujících souhlásek může často napovědět délku samohlásky.",
    note: "",
  },
  "143": {
    status: "LABOT",
    new: "Pravopis následujících souhlásek může často napovědět délku samohlásky.",
    note: "Duplicate target — apply once (same as #142).",
  },
  "144": {
    status: "LABOT",
    new:
      "Následuje-li po samohlásce jedna souhláska, bývá samohláska často dlouhá, nejde však o bezvýjimečné pravidlo: Vögel, Schüler, Bücher.",
    note: "",
  },
  "145": {
    status: "LABOT",
    new:
      "Následují-li po samohlásce dvě nebo více souhlásek, bývá samohláska často krátká, nejde však o bezvýjimečné pravidlo: wir können, der Löffel, der Müller.",
    note: "",
  },
  "146": {
    status: "LABOT",
    new:
      "Následují-li po samohlásce dvě nebo více souhlásek, bývá samohláska často krátká, nejde však o bezvýjimečné pravidlo: wir können, der Löffel, der Müller.",
    note: "Duplicate target — apply once (same as #145).",
  },
  "147": {
    status: "LABOT",
    new:
      "Následují-li po samohlásce dvě nebo více souhlásek, bývá samohláska často krátká, nejde však o bezvýjimečné pravidlo: wir können, der Löffel, der Müller.",
    note: "Duplicate target — apply once (same as #145).",
  },
  "148": {
    status: "LABOT",
    new:
      "Německé o může být krátké nebo dlouhé a jeho výslovnost se liší podle slova, například ve slovech Fonds, Nominativ a Fotograf.",
    note: "OWNER — lokalizēta pedagoģiskā doma, ne LV „uo“ dvojhláska.",
  },
  "149": {
    status: "LABOT",
    new:
      "Německé o může být krátké nebo dlouhé a jeho výslovnost se liší podle slova, například ve slovech Fonds, Nominativ a Fotograf.",
    note: "Duplicate target — apply once (same as #148).",
  },
  "150": {
    status: "LABOT",
    new:
      "Německé o může být krátké nebo dlouhé a jeho výslovnost se liší podle slova, například ve slovech Fonds, Nominativ a Fotograf.",
    note: "Duplicate target — apply once (same as #148).",
  },
};

/** Primary finding per shared production target */
const DEDUPE_APPLY_PRIMARY = {
  "kurssLesson1/legacyVyslovnost/example[1]": "105",
  "kurssLesson2/legacyVyslovnost/example[2]": "110",
  "kurssLesson5/legacyVyslovnost/example[1]": "119",
  "kurssLesson5/legacyVyslovnost/example[2]": "121",
  "kurssLesson7/legacyVyslovnost/example[1]": "128",
  "kurssLesson8/section[2]/item[1]": "130",
  "kurssLesson8/section[2]/item[4]": "132",
  "kurssLesson8/section[2]/item[5]": "134",
  "kurssLesson10/section[2]/item[0]": "136",
  "kurssLesson10/section[2]/item[1]": "138",
  "kurssLesson10/section[2]/item[2]": "140",
  "kurssLesson10/section[2]/item[3]": "142",
  "kurssLesson10/section[2]/item[5]": "145",
  "kurssLesson10/section[2]/item[6]": "148",
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
      scope: "CS Kurss Výslovnost — OWNER batch 101–150",
      source: "reports/cs-kurs-pronunciation-owner-review-all-findings.md",
      reviewed: "101–150",
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
    "# CS–DE Kurss Výslovnost — OWNER decisions 101–150",
    "",
    "READ-ONLY documentation. **Production changes: 0**",
    "",
    "## Summary",
    "",
    "| Verdict | Count |",
    "|---------|-------|",
    `| LABOT (finding rows) | ${summary.labot} |`,
    `| NELABOT | ${summary.nelabot} (#102) |`,
    `| FALSE_POSITIVE | ${summary.falsePositive} (#109, #124, #127) |`,
    `| Deduplicated LABOT apply targets (this batch) | **${applyEntries.length}** |`,
    "",
    "## OWNER overrides vs Luna",
    "",
    "- **#102:** NELABOT — īss kopsavilkuma noteikums Qu→kv / ß→s kontekstā.",
    "- **#109:** FALSE_POSITIVE — ī špīlen ir garuma zīme; reāls fix #110.",
    "- **#110:** noņemt neredzamos simboli; špílen paliek.",
    "- **#118:** sitzen (zicen), ne Luna cicen.",
    "- **#124:** FALSE_POSITIVE — Mädchen (mētchen) pareizs.",
    "- **#127:** FALSE_POSITIVE — garuma apzīmējumi; typo #128.",
    "- **#134–135:** deutlich (dojtlich), ne doitlich.",
    "- **#140–141:** saglabāt ü müller/bücher, ne miller/býcher.",
    "- **#148–150:** Německé o — lokalizēta pedagoģiskā doma, ne LV uo.",
    "",
    "## Duplicate targets (one apply per target)",
    "",
    "| Primary | Duplicate rows |",
    "|---------|----------------|",
    "| 105 | 106 |",
    "| 110 | 109 (FP, same target) |",
    "| 119 | 120 |",
    "| 121 | 122 |",
    "| 128 | 127 (FP, same target) |",
    "| 130 | 131 |",
    "| 132 | 133 |",
    "| 134 | 135 |",
    "| 136 | 137 |",
    "| 138 | 139 |",
    "| 140 | 141 |",
    "| 142 | 143 |",
    "| 145 | 146, 147 |",
    "| 148 | 149, 150 |",
    "",
    "## Apply map",
    "",
    "Partial JSON: `reports/temp/cs-kurs-pronunciation-owner-apply-map-partial-101-150.json`",
    "",
    "**DE = 0**, **LV MASTER = 0**.",
    "",
  ];

  fs.writeFileSync(SUMMARY_MD, summaryLines.join("\n"), "utf8");

  console.log(`Updated ${REVIEW_MD}`);
  console.log(`Written ${SUMMARY_MD}`);
  console.log(`Apply targets (101–150 batch): ${applyEntries.length} (from ${summary.labot} LABOT rows)`);
}

main();
