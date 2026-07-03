const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const TARGETS = [
  { file: "data/b2.js", varName: "B2_WORDS", level: "B2" },
  { file: "data/c1.js", varName: "C1_WORDS", level: "C1" }
];
const SOURCE_FILES = [
  { file: "data/b1.js", varName: "B1_WORDS" },
  { file: "data/a2.js", varName: "A2_WORDS" }
];

const VERB_PREFIXES = /^(ab|an|auf|aus|bei|ein|mit|nach|vor|zu|zer|wider|durch|über|unter|hinter|neben|gegen|um|weg)/i;

function loadWords(filePath, varName) {
  const code = fs.readFileSync(path.join(ROOT, filePath), "utf8");
  return new Function(`${code}; return ${varName};`)();
}

function slugify(de) {
  return de
    .replace(/^(der|die|das)\s+/i, "")
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]+/g, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

function stripArticle(de) {
  return String(de || "").replace(/^(der|die|das)\s+/i, "").trim();
}

function getArticle(de) {
  const match = String(de || "").match(/^(der|die|das)\s+/i);
  return match ? match[1] : null;
}

function capitalizeFirst(value) {
  const text = String(value || "").trim();
  if (!text) return text;
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function splitMeanings(lv) {
  return String(lv || "")
    .split("•")
    .map((part) => part.trim())
    .filter(Boolean);
}

function formatTitle(lv) {
  return splitMeanings(lv).map(capitalizeFirst).join(" • ");
}

function uniqueTerms(terms) {
  const seen = new Set();
  const result = [];
  for (const term of terms) {
    const value = String(term || "").trim();
    if (!value) continue;
    const key = value.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    result.push(value);
  }
  return result;
}

function normalizeDe(de) {
  return stripArticle(de).toLowerCase();
}

function hasBrokenAccents(value) {
  return JSON.stringify(value || {}).includes('"Length"');
}

function isBadComparisonExample(example) {
  const text = String(example || "").trim();
  if (!text) return true;
  const dePart = text.split("=")[0]?.trim() || "";
  if (!dePart) return true;
  if (dePart.includes(".") && dePart.split(/\s+/).length >= 2) return false;
  if (/^[\wäöüßÄÖÜ().\s-]+\s*=\s*/.test(text) && dePart.split(/\s+/).length <= 3) return true;
  return false;
}

function hasDuplicateComparisonWords(comparison, mainDe) {
  const seen = new Set();
  let dupMain = 0;
  for (const row of comparison || []) {
    const word = normalizeDe(row.word || "");
    if (word === normalizeDe(mainDe)) dupMain += 1;
    if (seen.has(word)) return true;
    seen.add(word);
    if (dupMain > 1) return true;
  }
  return false;
}

function isPrefixGroupedComparison(comparison, mainDe) {
  const mainBare = normalizeDe(mainDe);
  const mainPrefix = mainBare.match(VERB_PREFIXES)?.[1]?.toLowerCase();
  if (!mainPrefix || mainPrefix.length < 2) return false;

  const others = (comparison || [])
    .map((row) => normalizeDe(row.word || ""))
    .filter((word) => word && word !== mainBare);

  if (others.length < 2) return false;
  const prefixMatches = others.filter((word) => word.startsWith(mainPrefix)).length;
  return prefixMatches >= Math.ceil(others.length * 0.6);
}

function isGoodStudy(study, mainDe) {
  if (!study || typeof study !== "object") return false;
  if (hasBrokenAccents(study.sectionAccents)) return false;
  if (!Array.isArray(study.examples) || !study.examples.length) return false;
  if (study.examples.some((ex) => /^[\wäöüßÄÖÜ().\s-]+\.\s*$/.test(String(ex.de || "").trim()))) return false;

  const comparison = study.comparison;
  if (!Array.isArray(comparison) || !comparison.length) {
    return true;
  }

  if (comparison.some((row) => isBadComparisonExample(row.example))) return false;
  if (hasDuplicateComparisonWords(comparison, mainDe)) return false;
  if (isPrefixGroupedComparison(comparison, mainDe)) return false;
  return true;
}

function isBadStudy(entry) {
  const study = entry.study;
  if (!study) return false;
  return !isGoodStudy(study, entry.de);
}

function detectPos(de) {
  const bare = stripArticle(de);
  if (/^(der|die|das)\s/i.test(de)) return "noun";
  if (/^(trotzdem|deshalb|deswegen|darum|allerdings|jedoch|sondern|während|obwohl|damit|dass|weil|wenn|als|bis|seit|ohne)$/i.test(bare)) {
    return "function";
  }
  if (/ig$|lich$|bar$|sam$|los$|voll$|frei$|reich$|arm$/i.test(bare)) return "adj";
  if (/en$|ern$|eln$/i.test(bare)) return "verb";
  return "other";
}

function capitalizeNounPhrase(de) {
  const article = getArticle(de);
  const bare = stripArticle(de);
  const noun = bare.charAt(0).toUpperCase() + bare.slice(1);
  return article ? `${capitalizeFirst(article)} ${noun}` : noun;
}

function buildExamples(entry) {
  const de = entry.de;
  const bare = stripArticle(de);
  const meanings = splitMeanings(entry.lv);
  const pos = detectPos(de);
  const examples = [];

  if (pos === "noun") {
    const phrase = capitalizeNounPhrase(de);
    const art = getArticle(de) || "das";
    examples.push({
      de: `${phrase} spielt hier eine wichtige Rolle.`,
      lv: `${capitalizeFirst(meanings[0])} šeit ir svarīgs.`
    });
    examples.push({
      de: `Wir sprechen heute über ${art} ${bare}.`,
      lv: `Šodien runājam par ${meanings[0]}.`
    });
    if (meanings.length > 1) {
      examples.push({
        de: `In diesem Text bedeutet ${phrase} auch „${bare}".`,
        lv: `Šajā tekstā ${phrase} nozīmē arī „${meanings[1]}".`
      });
    } else {
      examples.push({
        de: `Kennst du ${art} ${bare}?`,
        lv: `Vai tu zini, kas ir ${meanings[0]}?`
      });
    }
    return examples.slice(0, 4);
  }

  if (pos === "verb") {
    examples.push({
      de: `Man muss das heute ${bare}.`,
      lv: `To šodien vajag ${meanings[0]}.`
    });
    examples.push({
      de: `Er will das Problem ${bare}.`,
      lv: `Viņš vēlas ${meanings[0]} problēmu.`
    });
    if (meanings.length > 1) {
      examples.push({
        de: `Im anderen Satz kann man es auch so ${bare}.`,
        lv: `Citā teikumā tas nozīmē arī „${meanings[1]}".`
      });
    } else {
      examples.push({
        de: `Hier ${bare} wir oft im Alltag.`,
        lv: `Ikdienā mēs bieži ${meanings[0]}.`
      });
    }
    return examples.slice(0, 4);
  }

  if (pos === "adj") {
    examples.push({
      de: `Das ist wirklich ${bare}.`,
      lv: `Tas ir tiešām ${meanings[0]}.`
    });
    examples.push({
      de: `Ich finde die Lösung ${bare}.`,
      lv: `Es risinājumu uzskatu par ${meanings[0]}.`
    });
    examples.push({
      de: `Für uns ist das ${bare}.`,
      lv: `Mums tas ir ${meanings[0]}.`
    });
    return examples;
  }

  if (pos === "function") {
    examples.push({
      de: `${capitalizeFirst(bare)}, ich bleibe zu Hause.`,
      lv: `${capitalizeFirst(meanings[0])}, es palieku mājās.`
    });
    examples.push({
      de: `Er kommt nicht, ${bare} er ist krank.`,
      lv: `Viņš nāk, ${meanings[0]} viņš ir slims.`
    });
    return examples;
  }

  examples.push({
    de: `Das Wort „${de}" hört man oft.`,
    lv: `Vārdu „${de}" bieži dzird.`
  });
  examples.push({
    de: `Im Satz passt „${de}" gut.`,
    lv: `Teikumā „${de}" der labi – ${meanings[0]}.`
  });
  return examples;
}

function extractHighlightTerms(text, seeds = [], limit = 6) {
  const terms = uniqueTerms([
    ...seeds,
    ...String(text || "")
      .replace(/[„"“=]/g, " ")
      .split(/\s+/)
      .map((word) => word.replace(/[.,!?;:()]/g, ""))
      .filter((word) => word.length > 2)
  ]);
  return terms.slice(0, limit);
}

function buildExampleAccents(examples, entry, meanings) {
  const bare = stripArticle(entry.de);
  return examples.map((example) => ({
    de: { blue: extractHighlightTerms(example.de, [entry.de, bare], 5) },
    lv: { purple: extractHighlightTerms(example.lv, meanings, 5) }
  }));
}

function buildCleanStudy(entry, level, existingId) {
  const meanings = splitMeanings(entry.lv);
  const translation = formatTitle(entry.lv);
  const mainMeaning = meanings[0] || entry.lv;
  const examples = buildExamples(entry);
  const id = existingId || `${level.toLowerCase()}-${slugify(entry.de)}`;

  const study = {
    id,
    layout: "standardStudy",
    translation,
    explanation: `Galvenā doma: ${entry.de} visbiežāk nozīmē ${meanings.map((m) => m.toLowerCase()).join(" • ")}. Konteksts nosaka precīzu nozīmi teikumā.`,
    examples,
    tip: {
      leftBlocks: [
        {
          text: `Atceries: ${entry.de} → ${translation}.`
        }
      ]
    },
    important: {
      text: `${entry.de} lieto atbilstoši kontekstam. Galvenā nozīme: ${capitalizeFirst(mainMeaning)}.`,
      example: examples[0] ? `${examples[0].de} = ${examples[0].lv}` : ""
    },
    sectionAccents: {
      explanation: {
        blue: uniqueTerms([entry.de, stripArticle(entry.de)])
      },
      examples: buildExampleAccents(examples, entry, meanings),
      tip: {
        blue: uniqueTerms([entry.de])
      },
      important: {
        blue: uniqueTerms([entry.de]),
        purple: uniqueTerms(meanings)
      }
    }
  };

  return study;
}

function cloneStudyForEntry(sourceStudy, entry, level) {
  const cloned = JSON.parse(JSON.stringify(sourceStudy));
  cloned.id = entry.study?.id || `${level.toLowerCase()}-${slugify(entry.de)}`;
  cloned.layout = "standardStudy";
  if (cloned.translation) {
    cloned.translation = formatTitle(entry.lv);
  }
  return cloned;
}

function buildGoodStudyIndex() {
  const index = new Map();
  for (const source of SOURCE_FILES) {
    const entries = loadWords(source.file, source.varName);
    for (const entry of entries) {
      if (!entry.study) continue;
      if (!isGoodStudy(entry.study, entry.de)) continue;
      index.set(normalizeDe(entry.de), entry.study);
    }
  }
  return index;
}

function writeWordsFile(filePath, varName, entries) {
  const body = JSON.stringify(entries, null, 2);
  const output = `const ${varName} = ${body};\n\nwindow.${varName} = ${varName};\n`;
  fs.writeFileSync(path.join(ROOT, filePath), output, "utf8");
}

function processTarget(target, goodIndex) {
  const entries = loadWords(target.file, target.varName);
  let fixedFromSource = 0;
  let rebuiltClean = 0;
  let alreadyGood = 0;
  let noStudy = 0;

  for (const entry of entries) {
    if (!entry.study) {
      noStudy += 1;
      continue;
    }
    if (!isBadStudy(entry)) {
      alreadyGood += 1;
      continue;
    }

    const sourceStudy = goodIndex.get(normalizeDe(entry.de));
    if (sourceStudy) {
      entry.study = cloneStudyForEntry(sourceStudy, entry, target.level);
      fixedFromSource += 1;
      continue;
    }

    entry.study = buildCleanStudy(entry, target.level, entry.study.id);
    rebuiltClean += 1;
  }

  writeWordsFile(target.file, target.varName, entries);
  return { fixedFromSource, rebuiltClean, alreadyGood, noStudy, total: entries.length };
}

function main() {
  const goodIndex = buildGoodStudyIndex();
  const summary = [];

  for (const target of TARGETS) {
    summary.push({ file: target.file, ...processTarget(target, goodIndex) });
  }

  for (const item of summary) {
    console.log(
      `${item.file}: total=${item.total}, noStudy=${item.noStudy}, alreadyGood=${item.alreadyGood}, fixedFromSource=${item.fixedFromSource}, rebuiltClean=${item.rebuiltClean}`
    );
  }
}

main();
