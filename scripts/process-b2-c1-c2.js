const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const TARGETS = [
  { file: "data/b2.js", varName: "B2_WORDS", level: "B2" },
  { file: "data/c1.js", varName: "C1_WORDS", level: "C1" },
  { file: "data/c2.js", varName: "C2_WORDS", level: "C2" }
];

const VERB_PREFIXES = /^(ab|an|auf|aus|bei|ein|mit|nach|vor|zu|zer|wider|durch|über|unter|hinter|neben|gegen|um|weg)/i;
const FUNCTION_WORD = /^(trotzdem|deshalb|deswegen|darum|allerdings|jedoch|sondern|während|obwohl|damit|dass|weil|wenn|als|bis|seit|ohne|gegenüber|innerhalb|außerhalb|infolge|aufgrund|mithilfe|anstatt|statt|sowie|sowohl|entweder|weder|noch|schon|erst|nur|auch|sogar|etwa|ungefähr|kaum|fast|bereits|eigentlich|übrigens|zwar|hingegen|dafür|dagegen|demnach|folglich|inzwischen|mittlerweile|insofern|soweit|sodass|sodann|zudem|außerdem|dennoch|gleichwohl|indessen|infolgedessen|somit|folglich|demzufolge)/i;

function loadWords(filePath, varName) {
  const code = fs.readFileSync(filePath, "utf8");
  const fn = new Function(`${code}; return ${varName};`);
  return fn();
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

function replaceListSemicolons(value) {
  if (typeof value !== "string" || !value.includes(";")) return value;
  return value.replace(/;\s*/g, " • ").replace(/\s+•\s+/g, " • ").trim();
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

function stripArticle(de) {
  return String(de || "").replace(/^(der|die|das)\s+/i, "").trim();
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

function meaningTerms(meaning) {
  return uniqueTerms(
    String(meaning || "")
      .split(/[•/]/)
      .flatMap((part) => part.trim().split(/\s+/))
      .filter((part) => part.length > 1)
  );
}

function parseExample(example) {
  const text = String(example || "");
  const match = text.match(/^(.+?)\s*[=–-]\s*(.+)$/);
  if (!match) return { de: text.trim(), lv: "" };
  return { de: match[1].trim(), lv: match[2].trim() };
}

function extractExampleTerms(text, limit = 5) {
  return uniqueTerms(
    String(text || "")
      .split(/\s+/)
      .filter((word) => word.length > 2)
  ).slice(0, limit);
}

function needsStudy(entry, level) {
  if (entry.study) return true;
  if (level === "C1" || level === "C2") return true;
  if (String(entry.lv || "").includes("•")) return true;

  const de = String(entry.de || "").trim();
  const bare = stripArticle(de);
  if (!de || de.includes(" ")) {
    return FUNCTION_WORD.test(bare);
  }
  if (/^(der|die|das)\s+/i.test(de)) return false;
  if (VERB_PREFIXES.test(bare)) return true;
  if (FUNCTION_WORD.test(bare)) return true;
  if (bare.length <= 12 && /^[a-zäöüß]/.test(bare)) return true;
  return false;
}

function findRelatedWords(entry, allWords, limit = 3) {
  const de = String(entry.de || "");
  const bare = stripArticle(de);
  const prefix = bare.match(VERB_PREFIXES)?.[1]?.toLowerCase();
  const related = [];

  if (prefix) {
    for (const candidate of allWords) {
      if (candidate.de === entry.de) continue;
      const candidateBare = stripArticle(candidate.de);
      if (candidateBare.toLowerCase().startsWith(prefix) && candidateBare !== bare) {
        related.push(candidate);
        if (related.length >= limit) break;
      }
    }
  }

  if (related.length < limit) {
    const root = bare.replace(VERB_PREFIXES, "").slice(0, 4);
    if (root.length >= 3) {
      for (const candidate of allWords) {
        if (candidate.de === entry.de) continue;
        const candidateBare = stripArticle(candidate.de);
        if (candidateBare.includes(root) && !related.includes(candidate)) {
          related.push(candidate);
          if (related.length >= limit) break;
        }
      }
    }
  }

  return related.slice(0, limit);
}

function buildComparisonRows(entry, allWords) {
  const meanings = splitMeanings(entry.lv);
  const rows = [];

  if (meanings.length > 1) {
    meanings.forEach((meaning) => {
      rows.push({
        word: entry.de,
        meaning: replaceListSemicolons(meaning.toLowerCase()),
        example: `${entry.de} = ${capitalizeFirst(meaning)}`
      });
    });
  } else {
    const meaning = meanings[0] || entry.lv;
    rows.push({
      word: entry.de,
      meaning: replaceListSemicolons(String(meaning).toLowerCase()),
      example: `${entry.de} = ${capitalizeFirst(meaning)}`
    });
  }

  for (const related of findRelatedWords(entry, allWords)) {
    const relatedMeaning = splitMeanings(related.lv)[0] || related.lv;
    rows.push({
      word: related.de,
      meaning: replaceListSemicolons(String(relatedMeaning).toLowerCase()),
      example: `${related.de} = ${capitalizeFirst(relatedMeaning)}`
    });
  }

  while (rows.length < 3) {
    rows.push({
      word: entry.de,
      meaning: replaceListSemicolons((meanings[0] || entry.lv).toLowerCase()),
      example: `${entry.de} = ${capitalizeFirst(meanings[0] || entry.lv)}`
    });
  }

  return rows.slice(0, 6).map((row) => ({
    word: row.word,
    meaning: replaceListSemicolons(row.meaning),
    example: row.example
  }));
}

function buildComparisonAccents(rows) {
  const altColors = ["yellow", "orange", "red", "blue"];
  return rows.map((row, index) => {
    const wordColor = index === 0 ? "green" : altColors[(index - 1) % altColors.length];
    const exampleParts = parseExample(row.example);
    const exampleAccents = {};
    if (exampleParts.de) exampleAccents.green = extractExampleTerms(exampleParts.de, 6);
    if (exampleParts.lv) exampleAccents.purple = extractExampleTerms(exampleParts.lv, 6);

    return {
      word: { [wordColor]: uniqueTerms([row.word, stripArticle(row.word)]) },
      meaning: { purple: uniqueTerms([row.meaning, ...meaningTerms(row.meaning)]) },
      example: exampleAccents
    };
  });
}

function buildExamples(entry) {
  const meanings = splitMeanings(entry.lv);
  const examples = meanings.slice(0, 3).map((meaning, index) => ({
    de: `${entry.de}${index > 0 ? ` (${meaning})` : ""}.`,
    lv: `${capitalizeFirst(meaning)}.`
  }));

  if (!examples.length) {
    examples.push({
      de: `${entry.de}.`,
      lv: `${capitalizeFirst(entry.lv)}.`
    });
  }

  return examples;
}

function buildExampleAccents(examples, deWord) {
  return examples.map((example) => ({
    de: { blue: uniqueTerms([deWord, stripArticle(deWord), ...extractExampleTerms(example.de, 4)]) },
    lv: { purple: uniqueTerms(extractExampleTerms(example.lv, 4)) }
  }));
}

function buildStudy(entry, level, allWords, usedIds) {
  const translation = formatTitle(entry.lv);
  const meanings = splitMeanings(entry.lv);
  const examples = buildExamples(entry);
  const mainMeaning = meanings[0] || entry.lv;

  const study = {
    id: buildStudyId(level, entry.de, usedIds),
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
      examples: buildExampleAccents(examples, entry.de),
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

function buildStudyId(level, de, usedIds) {
  const base = `${level.toLowerCase()}-${slugify(de)}`;
  let id = base || `${level.toLowerCase()}-card`;
  let suffix = 2;
  while (usedIds.has(id)) {
    id = `${base}-${suffix++}`;
  }
  usedIds.add(id);
  return id;
}

function fixStudyContent(study) {
  if (!study || typeof study !== "object") return study;

  if (study.translation) study.translation = replaceListSemicolons(study.translation);
  if (study.explanation) study.explanation = replaceListSemicolons(study.explanation);

  if (Array.isArray(study.comparison)) {
    const hasBadRows = study.comparison.some((row) => {
      const example = String(row.example || "");
      const dePart = example.split("=")[0]?.trim() || "";
      return !dePart.includes(".") || dePart.split(/\s+/).length < 2;
    });
    if (hasBadRows) {
      delete study.comparison;
      if (study.sectionAccents) delete study.sectionAccents.comparison;
    } else {
      study.comparison = study.comparison.map((row) => ({
        ...row,
        meaning: replaceListSemicolons(row.meaning),
        example: replaceListSemicolons(row.example)
      }));
      if (!study.sectionAccents) study.sectionAccents = {};
      study.sectionAccents.comparison = buildComparisonAccents(study.comparison);
    }
  }

  if (Array.isArray(study.comparisonTable)) {
    study.comparisonTable = study.comparisonTable.map((row) => {
      const next = { ...row };
      for (const key of Object.keys(next)) {
        if (typeof next[key] === "string") next[key] = replaceListSemicolons(next[key]);
      }
      return next;
    });
  }

  return study;
}

function processEntries(entries, level) {
  const usedIds = new Set();
  let generated = 0;
  let fixed = 0;

  for (const entry of entries) {
    if (entry.study?.id) usedIds.add(entry.study.id);
  }

  for (const entry of entries) {
    if (!entry.study && needsStudy(entry, level)) {
      entry.study = buildStudy(entry, level, entries, usedIds);
      generated += 1;
      continue;
    }

    if (entry.study) {
      if (!entry.study.id) entry.study.id = buildStudyId(level, entry.de, usedIds);
      if (!entry.study.layout) entry.study.layout = "standardStudy";
      entry.study = fixStudyContent(entry.study);
      fixed += 1;
    }
  }

  return { generated, fixed, totalStudies: entries.filter((entry) => entry.study).length };
}

function writeWordsFile(filePath, varName, entries) {
  const body = JSON.stringify(entries, null, 2);
  const output = `const ${varName} = ${body};\n\nwindow.${varName} = ${varName};\n`;
  fs.writeFileSync(filePath, output, "utf8");
}

function main() {
  const summary = [];

  for (const target of TARGETS) {
    const filePath = path.join(ROOT, target.file);
    const entries = loadWords(filePath, target.varName);
    const stats = processEntries(entries, target.level);
    writeWordsFile(filePath, target.varName, entries);
    summary.push({ file: target.file, ...stats });
  }

  for (const item of summary) {
    console.log(
      `${item.file}: generated=${item.generated}, fixed=${item.fixed}, totalStudies=${item.totalStudies}`
    );
  }
}

main();
