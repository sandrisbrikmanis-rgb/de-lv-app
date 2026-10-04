#!/usr/bin/env node
/**
 * EXTRA Study elements (READ-ONLY).
 * Aligns study arrays to LV by German value and order, not by index.
 * Does not edit data, www/data, languages, ui.js, or existing scripts.
 * Does not invent Latvian and does not call a model.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const crypto = require("crypto");
const { execFileSync } = require("child_process");

const ROOT = path.resolve(__dirname, "..");
const LEVELS = ["a1", "a2", "b1", "b2", "c1", "c2"];
const LANGS = "bg bs cs da en es et fi fr gr hr hu is it lb lt mk nb nl nn pl pt ro ru sk sl sq sr sv tr uk".split(" ");
const SEP = /[–—]|\s-\s|\s=\s/;
const UMLAUT = /[äöüÄÖÜß]/;
const GERMAN_STRONG = /(?:^|[^\p{L}])(ich|nicht|eine|einen|einem|einer|und|ist|sind|zum|zur|habe|bin|bist|kein|keine|für|schon|heute|morgen|jetzt|bitte)(?=[^\p{L}]|$)/iu;
const GERMAN_KEYS = new Set(["de", "word", "de_article", "de_plural", "article", "plural"]);
const TRANSLATION_KEYS = new Set([
  "lv", "meaning", "translation", "explanation", "tip", "important", "native",
  "note", "hint", "title", "description", "context", "describes", "mainMeaning"
]);
const SKIP_KEYS = new Set(["sectionAccents"]);

function argValue(name) {
  const eq = process.argv.find((arg) => arg.startsWith(`${name}=`));
  return eq ? eq.slice(name.length + 1) : "";
}

const OUT_DIR = path.resolve(argValue("--out") || path.join(ROOT, "reports/owner-lv-additions"));

function loadArray(filePath) {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx, { filename: filePath });
  const key = Object.keys(ctx.window).find((name) => Array.isArray(ctx.window[name]));
  if (!key) throw new Error(`no array global in ${filePath}`);
  return ctx.window[key];
}

function sha256Text(text) {
  return crypto.createHash("sha256").update(text).digest("hex");
}

function nfc(value) {
  return String(value ?? "").normalize("NFC").replace(/\u00A0/g, " ").trim();
}

function splitMixed(raw) {
  const s = String(raw ?? "");
  const match = s.match(SEP);
  if (!match) return { left: nfc(s), right: "", sep: false };
  const index = match.index;
  return {
    left: nfc(s.slice(0, index)),
    right: nfc(s.slice(index + match[0].length)),
    sep: true
  };
}

function isGermanText(value, sharedGerman) {
  const text = nfc(value);
  if (!text) return false;
  if (sharedGerman && sharedGerman.has(text)) return true;
  if (/ß/.test(text)) return true;
  if (GERMAN_STRONG.test(text)) return true;
  if (UMLAUT.test(text) && GERMAN_STRONG.test(text)) return true;
  return false;
}

function cardId(entry, index) {
  if (entry && entry.study && entry.study.id) return String(entry.study.id);
  if (entry && entry.id) return String(entry.id);
  if (entry && entry.de) return `${index}:${entry.de}`;
  return String(index);
}

function cardKey(entry) {
  return `${entry && entry.de}\0${entry && entry.level}`;
}

function pairCards(lvList, langList) {
  const queues = new Map();
  langList.forEach((item, index) => {
    const key = cardKey(item);
    if (!queues.has(key)) queues.set(key, []);
    queues.get(key).push(index);
  });
  const pairs = [];
  const used = new Set();
  lvList.forEach((item, index) => {
    const queue = queues.get(cardKey(item));
    if (!queue || !queue.length) return;
    const langIndex = queue.shift();
    used.add(langIndex);
    pairs.push({ lv: item, lang: langList[langIndex], lvIndex: index, langIndex });
  });
  const unpaired = [];
  langList.forEach((item, index) => {
    if (!used.has(index)) unpaired.push({ lang: item, langIndex: index });
  });
  return { pairs, unpaired };
}

function collectObjectArrays(node, basePath, out) {
  if (!node || typeof node !== "object" || Array.isArray(node)) return;
  Object.keys(node).forEach((key) => {
    if (SKIP_KEYS.has(key)) return;
    const value = node[key];
    const next = basePath ? `${basePath}.${key}` : key;
    if (Array.isArray(value)) {
      const objects = value.filter((item) => item && typeof item === "object" && !Array.isArray(item));
      if (objects.length) out.push({ path: next, items: value });
      value.forEach((item, index) => {
        if (item && typeof item === "object" && !Array.isArray(item)) {
          collectObjectArrays(item, `${next}[${index}]`, out);
        }
      });
      return;
    }
    if (value && typeof value === "object") collectObjectArrays(value, next, out);
  });
}

function studyArrays(entry) {
  const out = [];
  if (!entry || !entry.study || typeof entry.study !== "object") return out;
  collectObjectArrays(entry.study, "study", out);
  return out;
}

function hasGermanBearing(item) {
  if (!item || typeof item !== "object") return false;
  return Object.keys(item).some((key) => GERMAN_KEYS.has(key) || key === "example");
}

function lvExampleDe(row) {
  if (!row || typeof row !== "object") return "";
  if ("example" in row) return splitMixed(row.example).left;
  if ("de" in row) return splitMixed(row.de).left;
  return "";
}

function describeItem(item, lvGermanExamples, sharedGerman, trustGerman) {
  const german = {};
  const translation = {};
  if (!item || typeof item !== "object" || Array.isArray(item)) {
    return { german, translation, sig: "{}" };
  }
  const knownGerman = new Set(lvGermanExamples || []);
  const leftIsGermanText = (left) => Boolean(left) && (trustGerman || knownGerman.has(left) || isGermanText(left, sharedGerman));
  Object.keys(item).forEach((key) => {
    const value = item[key];
    if (value && typeof value === "object") return;
    if (key === "example" || key === "de") {
      const parts = splitMixed(value);
      const leftIsGerman = leftIsGermanText(parts.left);
      if (key === "example") {
        if (leftIsGerman) german.example_de = parts.left;
        if (parts.sep) translation.example_translation = parts.right;
        else if (!leftIsGerman && parts.left) translation.example_translation = parts.left;
      } else if (leftIsGerman) {
        german.de = parts.left;
        if (parts.right) translation[`${key}_translation`] = parts.right;
      } else if (parts.left) {
        translation.de_replaced = parts.left;
      }
      return;
    }
    if (GERMAN_KEYS.has(key)) {
      const text = typeof value === "string" ? nfc(value) : value;
      if (key === "word" || key === "article" || key === "plural" || key === "de_article" || key === "de_plural") {
        german[key] = text;
      } else if (typeof text === "string" && (knownGerman.has(text) || isGermanText(text, sharedGerman))) {
        german[key] = text;
      } else {
        translation[key] = text;
      }
      return;
    }
    if (TRANSLATION_KEYS.has(key)) {
      translation[key] = typeof value === "string" ? nfc(value) : value;
      return;
    }
    if (typeof value === "string" && key !== "icon" && key !== "separator" && key !== "accent" && key !== "id" && key !== "level") {
      if (trustGerman || isGermanText(value, sharedGerman) || knownGerman.has(nfc(value))) german[key] = nfc(value);
      else translation[key] = nfc(value);
    }
  });
  const sig = JSON.stringify(german);
  return { german, translation, sig };
}

function arrayByPath(entry, arrayPath) {
  const found = studyArrays(entry).find((row) => row.path === arrayPath);
  return found ? found.items : [];
}

function alignArray(lvItems, langItems, sharedGerman) {
  const lvDescribed = (lvItems || []).map((item) => {
    const examples = [];
    const de = lvExampleDe(item);
    if (de) examples.push(de);
    return describeItem(item, examples, sharedGerman, true);
  });
  const lvGerman = lvDescribed.map((row) => row.german.example_de || row.german.de || "").filter(Boolean);
  const used = new Set();
  const extras = [];
  let orderShift = 0;
  (langItems || []).forEach((item, index) => {
    if (!item || typeof item !== "object" || Array.isArray(item)) return;
    if (!hasGermanBearing(item)) return;
    const described = describeItem(item, lvGerman, sharedGerman, false);
    if (!Object.keys(described.german).length) return;
    const word = described.german.word;
    const exampleDe = described.german.example_de || "";
    const de = described.german.de || "";
    let match = null;
    const sameSig = (row) => row.sig === described.sig;
    if (index < lvDescribed.length && !used.has(index) && sameSig(lvDescribed[index])) match = index;
    else {
      for (let j = 0; j < lvDescribed.length; j += 1) {
        if (!used.has(j) && sameSig(lvDescribed[j])) {
          match = j;
          break;
        }
      }
    }
    if (match == null && described.german.example_de == null && word) {
      const wordOnly = (row) => row.german.word === word && !row.german.example_de;
      if (index < lvDescribed.length && !used.has(index) && lvDescribed[index].german.word === word) match = index;
      else {
        for (let j = 0; j < lvDescribed.length; j += 1) {
          if (!used.has(j) && lvDescribed[j].german.word === word) {
            match = j;
            break;
          }
        }
      }
      if (match != null && wordOnly(lvDescribed[match]) === false && lvDescribed[match].german.example_de && !exampleDe) {
        // word match against an LV row that has a German example, translation-only example on the language side
      }
    }
    if (match != null && exampleDe && lvDescribed[match].german.example_de && lvDescribed[match].german.example_de !== exampleDe) {
      match = null;
    }
    if (match != null && de && lvDescribed[match].german.de && lvDescribed[match].german.de !== de && described.sig !== lvDescribed[match].sig) {
      match = null;
    }
    if (match != null) {
      used.add(match);
      if (match !== index) orderShift += 1;
      return;
    }
    const duplicate = lvDescribed.some((row) => row.sig === described.sig);
    extras.push({
      index,
      german: described.german,
      translation: described.translation,
      sig: described.sig,
      classification: duplicate ? "DUPLICATE_OF_LV_ROW" : "NEW_CONTENT"
    });
  });
  return { extras, orderShift };
}

function indexFieldExtras(lvEntry, langEntry) {
  const fieldsOf = (entry) => {
    const fields = {};
    const study = entry && entry.study;
    if (!study || typeof study !== "object") return fields;
    (study.examples || []).forEach((ex, i) => {
      if (ex && typeof ex === "object" && "de" in ex) fields[`study.examples[${i}].de`] = ex.de;
    });
    (study.comparison || []).forEach((row, i) => {
      if (row && typeof row === "object" && "word" in row) fields[`study.comparison[${i}].word`] = row.word;
    });
    (study.words || []).forEach((row, i) => {
      if (row && typeof row === "object" && "de" in row) fields[`study.words[${i}].de`] = row.de;
    });
    (study.comparisonTable || []).forEach((row, i) => {
      if (row && typeof row === "object" && "de" in row) fields[`study.comparisonTable[${i}].de`] = row.de;
    });
    return fields;
  };
  const lvFields = fieldsOf(lvEntry);
  const langFields = fieldsOf(langEntry);
  let extra = 0;
  Object.keys(langFields).forEach((field) => {
    if (!Object.prototype.hasOwnProperty.call(lvFields, field)) extra += 1;
  });
  return extra;
}

function csvCell(value) {
  const text = String(value ?? "");
  if (/[",\n\r]/.test(text)) return `"${text.replace(/"/g, '""')}"`;
  return text;
}

function fileHas(sha, file, needle) {
  try {
    execFileSync("git", ["grep", "-F", "-q", "-e", needle, sha, "--", file], {
      cwd: ROOT,
      stdio: "ignore"
    });
    return true;
  } catch (error) {
    return false;
  }
}

function historyFor(level, needle, cache) {
  const key = `${level}\0${needle}`;
  if (cache.has(key)) return cache.get(key);
  const file = `data/${level}.js`;
  let log = "";
  try {
    log = execFileSync(
      "git",
      ["log", "--all", `-S${needle}`, "--format=%H%x09%aI%x09%s", "--", file],
      { cwd: ROOT, encoding: "utf8", maxBuffer: 32 * 1024 * 1024 }
    );
  } catch (error) {
    log = "";
  }
  const commits = log.trim() ? log.trim().split("\n").map((line) => {
    const [sha, date, ...rest] = line.split("\t");
    return { sha, date, subject: rest.join("\t") };
  }) : [];
  let text = "NEVER_IN_LV";
  if (commits.length) {
    const current = fs.readFileSync(path.join(ROOT, file), "utf8").includes(needle);
    const removal = commits.find((commit) => !fileHas(commit.sha, file, needle));
    if (removal) {
      text = `REMOVED ${removal.sha} ${removal.date} ${removal.subject}`;
    } else if (current) {
      text = `STILL_IN_LV ${commits[0].sha} ${commits[0].date} ${commits[0].subject}`;
    } else {
      text = `NEVER_IN_LV`;
    }
  }
  cache.set(key, text);
  return text;
}

function historyNeedle(german) {
  const candidates = [german.example_de, german.de, german.word, german.plural, german.article]
    .map((value) => nfc(value))
    .filter(Boolean);
  return candidates.sort((a, b) => b.length - a.length)[0] || "";
}

function scanCode() {
  const files = ["ui.js", "www/ui.js"];
  fs.readdirSync(path.join(ROOT, "languages")).filter((name) => name.endsWith(".js")).forEach((name) => {
    files.push(`languages/${name}`);
  });
  fs.readdirSync(path.join(ROOT, "www")).filter((name) => name.endsWith(".js")).forEach((name) => {
    files.push(`www/${name}`);
  });
  const patterns = [
    /examples\[\s*\d+\s*\]/,
    /comparison\[\s*\d+\s*\]/,
    /comparisonTable\[\s*\d+\s*\]/,
    /words\[\s*\d+\s*\]/,
    /\.examples\.length/,
    /\.comparison\.length/,
    /\.comparisonTable\.length/,
    /study\.examples/,
    /study\.comparison/,
    /study\.words/,
    /study\.comparisonTable/,
    /study\.items/,
    /study\.terms/,
    /study\.matrix/,
    /study\.comparisonRows/,
    /sectionAccentRules/,
    /COMPARISON_WORD_ACCENTS\[index %/
  ];
  const hits = [];
  files.forEach((rel) => {
    const full = path.join(ROOT, rel);
    if (!fs.existsSync(full) || !fs.statSync(full).isFile()) return;
    const lines = fs.readFileSync(full, "utf8").split("\n");
    lines.forEach((line, index) => {
      if (patterns.some((pattern) => pattern.test(line))) {
        hits.push({ file: rel, line: index + 1, text: line.trim().slice(0, 180) });
      }
    });
  });
  return hits;
}

function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const treeNote = [];
  LEVELS.forEach((level) => {
    const lvRoot = sha256Text(fs.readFileSync(path.join(ROOT, `data/${level}.js`)));
    const lvWww = sha256Text(fs.readFileSync(path.join(ROOT, `www/data/${level}.js`)));
    if (lvRoot !== lvWww) treeNote.push(`LV ${level} data/www differ`);
    LANGS.forEach((lang) => {
      const a = sha256Text(fs.readFileSync(path.join(ROOT, `data/${lang}/${level}.js`)));
      const b = sha256Text(fs.readFileSync(path.join(ROOT, `www/data/${lang}/${level}.js`)));
      if (a !== b) treeNote.push(`${lang} ${level} data/www differ`);
    });
  });

  const groups = new Map();
  const indexExtra = {};
  const orderShift = {};
  const langsByLevel = {};
  const tipRows = [];
  const pathsFound = new Set();
  LEVELS.forEach((level) => {
    indexExtra[level] = 0;
    orderShift[level] = 0;
    langsByLevel[level] = new Set();
  });

  const sharedCounts = new Map();
  function noteShared(text, lang) {
    const value = nfc(text);
    if (!value) return;
    if (!sharedCounts.has(value)) sharedCounts.set(value, new Set());
    sharedCounts.get(value).add(lang);
  }
  LEVELS.forEach((level) => {
    LANGS.forEach((lang) => {
      const list = loadArray(path.join(ROOT, `data/${lang}/${level}.js`));
      list.forEach((entry) => {
        studyArrays(entry).forEach((array) => {
          array.items.forEach((item) => {
            if (!item || typeof item !== "object") return;
            if (typeof item.example === "string") noteShared(splitMixed(item.example).left, lang);
            if (typeof item.de === "string") noteShared(splitMixed(item.de).left, lang);
          });
        });
      });
    });
  });
  const sharedGerman = new Set();
  sharedCounts.forEach((langs, text) => {
    if (langs.size >= 5) sharedGerman.add(text);
  });

  function addGroup(level, card, arrayPath, extra, lang) {
    const key = `${level}\0${card}\0${arrayPath}\0${extra.sig}`;
    if (!groups.has(key)) {
      groups.set(key, {
        level,
        card_id: card,
        array_path: arrayPath,
        sig: extra.sig,
        german: extra.german,
        classification: extra.classification,
        translationKeys: new Set(),
        langs: new Set(),
        sample: extra.translation
      });
    }
    const group = groups.get(key);
    group.langs.add(lang);
    langsByLevel[level].add(lang);
    Object.keys(extra.translation).forEach((name) => group.translationKeys.add(name));
    if (extra.classification === "DUPLICATE_OF_LV_ROW") group.classification = "DUPLICATE_OF_LV_ROW";
  }

  LEVELS.forEach((level) => {
    const lvList = loadArray(path.join(ROOT, `data/${level}.js`));
    LANGS.forEach((lang) => {
      const langList = loadArray(path.join(ROOT, `data/${lang}/${level}.js`));
      const { pairs, unpaired } = pairCards(lvList, langList);
      pairs.forEach((pair) => {
        indexExtra[level] += indexFieldExtras(pair.lv, pair.lang);
        const lvArrays = new Map(studyArrays(pair.lv).map((row) => [row.path, row.items]));
        const langArrays = studyArrays(pair.lang);
        langArrays.forEach((row) => pathsFound.add(row.path.replace(/\[\d+\]/g, "[*]")));
        const seen = new Set();
        langArrays.forEach((row) => {
          if (seen.has(row.path)) return;
          seen.add(row.path);
          const germanItems = row.items.filter((item) => item && typeof item === "object" && hasGermanBearing(item));
          const textOnly = row.items.filter((item) => item && typeof item === "object" && !hasGermanBearing(item));
          if (textOnly.length && !germanItems.length) {
            const lvItems = lvArrays.get(row.path) || [];
            if (row.items.length > lvItems.length) {
              tipRows.push({
                level,
                card_id: cardId(pair.lv, pair.lvIndex),
                array_path: row.path,
                language: lang,
                lv_length: lvItems.length,
                lang_length: row.items.length
              });
            }
            return;
          }
          if (!germanItems.length) return;
          const aligned = alignArray(lvArrays.get(row.path) || [], row.items, sharedGerman);
          orderShift[level] += aligned.orderShift;
          aligned.extras.forEach((extra) => {
            addGroup(level, cardId(pair.lv, pair.lvIndex), row.path, extra, lang);
          });
        });
      });
      unpaired.forEach((row) => {
        studyArrays(row.lang).forEach((array) => {
          if (!array.items.some((item) => hasGermanBearing(item))) return;
          const aligned = alignArray([], array.items, sharedGerman);
          aligned.extras.forEach((extra) => {
            addGroup(level, cardId(row.lang, row.langIndex), array.path, extra, lang);
          });
        });
      });
    });
  });

  const parent = new Map();
  function find(id) {
    if (!parent.has(id)) parent.set(id, id);
    if (parent.get(id) !== id) parent.set(id, find(parent.get(id)));
    return parent.get(id);
  }
  function unite(a, b) {
    const left = find(a);
    const right = find(b);
    if (left !== right) parent.set(right, left);
  }
  const buckets = new Map();
  function bucket(key, group) {
    if (!key) return;
    if (!buckets.has(key)) buckets.set(key, []);
    buckets.get(key).push(group);
  }
  let gid = 0;
  groups.forEach((group) => {
    group._gid = gid;
    gid += 1;
    const german = group.german || {};
    const stem = german.word || german.de || "";
    if (stem) bucket(`${group.level}\0${group.card_id}\0${group.array_path}\0word:${stem}`, group);
    if (german.example_de) bucket(`${group.level}\0${group.card_id}\0${group.array_path}\0ex:${german.example_de}`, group);
  });
  buckets.forEach((list) => {
    for (let i = 1; i < list.length; i += 1) unite(list[0]._gid, list[i]._gid);
  });
  const components = new Map();
  groups.forEach((group) => {
    const root = find(group._gid);
    if (!components.has(root)) components.set(root, []);
    components.get(root).push(group);
  });
  components.forEach((list) => {
    const sigs = new Set(list.map((group) => group.sig));
    if (sigs.size < 2) return;
    list.forEach((group) => {
      group.deVariant = list
        .filter((other) => other.sig !== group.sig)
        .map((other) => ({
          german: other.german,
          languages: [...other.langs].sort(),
          count: other.langs.size
        }));
    });
  });

  const rows = [...groups.values()].sort((a, b) => {
    if (b.langs.size !== a.langs.size) return b.langs.size - a.langs.size;
    if (a.level !== b.level) return a.level < b.level ? -1 : 1;
    if (a.card_id !== b.card_id) return a.card_id < b.card_id ? -1 : 1;
    if (a.array_path !== b.array_path) return a.array_path < b.array_path ? -1 : 1;
    return a.sig < b.sig ? -1 : 1;
  });

  const historyCache = new Map();
  rows.forEach((row, index) => {
    row.element_id = `E${String(index + 1).padStart(4, "0")}`;
    row.count = row.langs.size;
    row.small = row.count <= 4;
    row.base = row.classification;
    if (row.small) row.classification = `SMALL_GROUP/${row.base}`;
    if (row.deVariant) row.classification += "+DE_VARIANT";
    const withList = [...row.langs].sort();
    const withoutList = LANGS.filter((lang) => !row.langs.has(lang));
    row.languages_with = `${row.count}: ${withList.join(", ")}`;
    row.languages_without = `${withoutList.length}: ${withoutList.join(", ")}`;
    const translationKeys = [...row.translationKeys].sort();
    row.translation_fields_needed = translationKeys;
    const template = {};
    translationKeys.forEach((key) => {
      template[key] = "";
    });
    row.owner_lv_text = JSON.stringify(template);
    row.owner_lv_text_proposed = "";
    const germanOut = { ...row.german };
    if (row.deVariant) germanOut.DE_VARIANT = row.deVariant.map((item) => item.german);
    row.german_fields = JSON.stringify(germanOut);
    const needle = row.count >= 5 ? historyNeedle(row.german) : "";
    row.history = needle ? historyFor(row.level, needle, historyCache) : "";
    const proposed = row.card_id === "a1-bis"
      && row.array_path === "study.comparison"
      && row.german.word === "bis jetzt"
      && row.german.example_de === "Bis jetzt ist alles gut.";
    if (proposed) {
      row.owner_lv_text_proposed = JSON.stringify({
        meaning: "līdz šim, līdz šai dienai",
        example_translation: "Līdz šim viss ir labi.",
        status: "PROPOSED, nav apstiprināts"
      });
    }
  });

  const header = [
    "element_id", "level", "card_id", "array_path", "classification", "german_fields",
    "translation_fields_needed", "history", "languages_with", "languages_without",
    "DE_REVIEW", "OWNER_DECISION", "OWNER_LV_TEXT", "OWNER_LV_TEXT_PROPOSED"
  ];
  const csvLines = [header.join(",")];
  rows.forEach((row) => {
    csvLines.push([
      row.element_id,
      row.level,
      row.card_id,
      row.array_path,
      row.classification,
      row.german_fields,
      JSON.stringify(row.translation_fields_needed),
      row.history,
      row.languages_with,
      row.languages_without,
      "",
      "",
      row.owner_lv_text,
      row.owner_lv_text_proposed
    ].map(csvCell).join(","));
  });
  fs.writeFileSync(path.join(OUT_DIR, "owner-lv-additions.csv"), `${csvLines.join("\n")}\n`);

  const small = rows.filter((row) => row.small);
  const smallLines = [
    "# SMALL_GROUP",
    "",
    "Elementi 1–4 valodās. Šai lapai nav ieteikuma ADD vai SKIP.",
    "",
    "| element_id | level | card_id | array_path | base | languages_with | german_fields |",
    "|---|---|---|---|---|---|---|"
  ];
  small.forEach((row) => {
    smallLines.push(`| ${row.element_id} | ${row.level} | ${row.card_id} | ${row.array_path} | ${row.base} | ${row.languages_with} | ${row.german_fields.replace(/\|/g, "¦")} |`);
  });
  fs.writeFileSync(path.join(OUT_DIR, "small-group.md"), `${smallLines.join("\n")}\n`);

  const tipKey = new Map();
  tipRows.forEach((row) => {
    const key = `${row.level}\0${row.card_id}\0${row.array_path}\0${row.lv_length}\0${row.lang_length}`;
    if (!tipKey.has(key)) tipKey.set(key, { ...row, langs: new Set() });
    tipKey.get(key).langs.add(row.language);
  });
  const tipLines = [
    "# study.tip teksta bloki",
    "",
    "study.tip, study.tip.leftBlocks un study.tip.rightBlocks satur objektus ar lauku text. Tajos nav de/word. Tie nav vācu kopējamie elementi un nav OWNER_LV_TEXT rindas.",
    "",
    "| level | card_id | array_path | lv_length | lang_length | languages |",
    "|---|---|---|---|---:|---|"
  ];
  [...tipKey.values()].sort((a, b) => b.langs.size - a.langs.size || a.card_id.localeCompare(b.card_id)).forEach((row) => {
    tipLines.push(`| ${row.level} | ${row.card_id} | ${row.array_path} | ${row.lv_length} | ${row.lang_length} | ${row.langs.size}: ${[...row.langs].sort().join(", ")} |`);
  });
  fs.writeFileSync(path.join(OUT_DIR, "tip-text-only.md"), `${tipLines.join("\n")}\n`);

  const hits = scanCode();
  const codeLines = [
    "# Koda lasīšana",
    "",
    "ui.js un www/ui.js Study masīvus iet ar .map un .length. Fiksēta examples[2] vai comparison[3] nolasīšana nav atrasta.",
    "sectionAccentRules(section, index) ņem sectionAccents masīva indeksu. Ja akcentu masīvs ir īsāks, rezultāts ir undefined. formatStudyText un withComparisonFieldFallback tad lieto paša rindas tekstu. Papildu rinda netiek izmesta un neapstādina renderi. Akcents var iztrūkt.",
    "COMPARISON_WORD_ACCENTS[index % garums] iet cikliski. Garāks masīvs neiziet ārpus akcentu saraksta.",
    "languages/*.js šos masīvus pēc indeksa nelasa.",
    "",
    "| file | line | text |",
    "|---|---:|---|"
  ];
  hits.forEach((hit) => {
    codeLines.push(`| ${hit.file} | ${hit.line} | ${hit.text.replace(/\|/g, "¦")} |`);
  });
  fs.writeFileSync(path.join(OUT_DIR, "code-index.md"), `${codeLines.join("\n")}\n`);

  const byLevel = {};
  rows.forEach((row) => {
    if (!byLevel[row.level]) byLevel[row.level] = { groups: 0, ge5: 0, small: 0, newContent: 0, duplicate: 0, langs: {} };
    const bucket = byLevel[row.level];
    bucket.groups += 1;
    if (row.small) bucket.small += 1;
    else bucket.ge5 += 1;
    if (row.base === "NEW_CONTENT") bucket.newContent += 1;
    if (row.base === "DUPLICATE_OF_LV_ROW") bucket.duplicate += 1;
    row.langs.forEach((lang) => {
      bucket.langs[lang] = (bucket.langs[lang] || 0) + 1;
    });
  });

  const bis = rows.find((row) => row.owner_lv_text_proposed);
  const stats = {
    treesIdentical: treeNote.length === 0,
    treeDiffs: treeNote,
    pathsFound: [...pathsFound].sort(),
    groups: rows.length,
    small: small.length,
    ge5: rows.filter((row) => !row.small).length,
    newContent: rows.filter((row) => row.base === "NEW_CONTENT").length,
    duplicate: rows.filter((row) => row.base === "DUPLICATE_OF_LV_ROW").length,
    deVariant: rows.filter((row) => row.deVariant).length,
    indexExtraPerTree: indexExtra,
    indexExtraBothTrees: Object.fromEntries(LEVELS.map((level) => [level, indexExtra[level] * (treeNote.length ? 1 : 2)])),
    orderShift,
    langsByLevel: Object.fromEntries(LEVELS.map((level) => [level, [...langsByLevel[level]].sort()])),
    byLevel,
    a1Bis: bis ? {
      element_id: bis.element_id,
      languages_with: bis.languages_with,
      languages_without: bis.languages_without,
      history: bis.history,
      classification: bis.classification
    } : null,
    examples: {
      NEW_CONTENT: rows.filter((row) => row.base === "NEW_CONTENT" && !row.small).slice(0, 10).map(brief),
      DUPLICATE_OF_LV_ROW: rows.filter((row) => row.base === "DUPLICATE_OF_LV_ROW").slice(0, 10).map(brief),
      SMALL_GROUP: small.slice(0, 10).map(brief)
    }
  };
  fs.writeFileSync(path.join(OUT_DIR, "stats.json"), `${JSON.stringify(stats, null, 2)}\n`);

  const bisLines = [
    "# a1-bis study.comparison",
    "",
    "| language | rows | fourth_word | fourth_example_de |",
    "|---|---:|---|---|"
  ];
  const lvA1 = loadArray(path.join(ROOT, "data/a1.js"));
  const lvBis = lvA1.find((card) => card.study && card.study.id === "a1-bis");
  bisLines.push(`| lv | ${(lvBis.study.comparison || []).length} |  |  |`);
  LANGS.forEach((lang) => {
    const cards = loadArray(path.join(ROOT, `data/${lang}/a1.js`));
    const card = cards.find((item) => item.study && item.study.id === "a1-bis");
    const comp = (card && card.study && card.study.comparison) || [];
    const fourth = comp[3];
    let exampleDe = "";
    if (fourth) {
      const parts = splitMixed(fourth.example);
      exampleDe = isGermanText(parts.left) || parts.left === "Bis jetzt ist alles gut." ? parts.left : "";
    }
    bisLines.push(`| ${lang} | ${comp.length} | ${fourth ? fourth.word : ""} | ${exampleDe} |`);
  });
  fs.writeFileSync(path.join(OUT_DIR, "a1-bis-languages.md"), `${bisLines.join("\n")}\n`);

  process.stdout.write(`${JSON.stringify({
    out: OUT_DIR,
    groups: rows.length,
    small: small.length,
    ge5: stats.ge5,
    indexExtraPerTree: indexExtra,
    indexExtraBothTrees: stats.indexExtraBothTrees,
    orderShift,
    a1Bis: stats.a1Bis,
    treesIdentical: stats.treesIdentical,
    deVariant: stats.deVariant,
    duplicate: stats.duplicate
  })}\n`);
}

function brief(row) {
  return {
    element_id: row.element_id,
    level: row.level,
    card_id: row.card_id,
    array_path: row.array_path,
    classification: row.classification,
    german: row.german,
    languages_with: row.languages_with,
    history: row.history
  };
}

if (require.main === module) main();
