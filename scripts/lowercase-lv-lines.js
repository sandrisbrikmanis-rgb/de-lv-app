const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const bullet = "\u2022";

const targets = [
  "data/a1.js",
  "data/a2.js",
  "data/b1.js",
  "data/b2.js",
  "data/c1.js",
  "data/c2.js",
  "data/comparisonStudy.js",
];

const properNounStems = [
  "vācij", "latvij", "krievij", "francij", "spānij", "itālij", "polij", "zviedrij", "norvēģij",
  "somij", "īrij", "grieķij", "turcij", "austrij", "beļģij", "čehij", "ungārij", "rumānij",
  "bulgārij", "ukrain", "portugāl", "dānij", "nīderland", "šveic", "eirop", "āzij", "āfrik",
  "amerik", "kanād", "meksik", "brazīlij", "argentīn", "indij", "ķīn", "japān", "korej",
  "austrālij", "ēģipt", "marok", "nigērij", "dienvidāfrik", "island", "luksemburg", "lihtenštein",
  "andor", "monak", "serbij", "horvātij", "slovākij", "slovēnij", "bosnij",
  "moldov", "baltkriev", "gruzij", "armēnij", "azerbaidž", "kazahst", "uzbekist",
  "berlīn", "parīz", "london", "vīne", "hamburg", "minhen", "ķeln", "frankfurt",
  "dresden", "leipzig", "hannover", "stuttgart", "brema", "dortmund", "nürnberg",
  "brisel", "amsterd", "kopenhāg", "stokholm", "helsink", "atēn", "lisabon", "dublin",
  "ciurīh", "ženev", "prāg", "budapešt", "varšav", "kijev", "maskav", "sanktpēterburg",
  "bayern", "šlesvig", "holštēn", "brandenburg", "württemberg",
  "vācisk", "latvisk", "anglisk", "krievisk", "spānisk", "itālisk", "zviedrisk",
  "jānis", "pēter", "thomas", "michael", "stefan", "andreas", "klaus", "lukas", "felix",
  "sophie", "laura", "julia", "friedrich", "helmut", "angela", "merkel", "einstein",
  "goethe", "beethoven", "mozart",
];

const properNounExact = new Set(
  [
    "Rīga", "Rīgas", "Rīgā", "Rīgu", "Rīgai",
    "Roma", "Romas", "Romā", "Romu",
    "Oslo", "Bonn", "Malta", "Kipra", "Kiprā", "Kipru",
    "Hans", "Anna", "Marija", "Paul", "Max", "Leon", "Emma", "Maria", "Bach",
  ].map((w) => w.toLowerCase())
);

function getFirstWord(text) {
  const t = String(text || "").trim();
  const m = t.match(/^([^/\s•,;:.!?—–\-()]+)/);
  return m ? m[1] : t;
}

function isProperNounWord(word) {
  const lower = String(word || "").toLowerCase();
  if (!lower) return false;
  if (properNounExact.has(lower)) return true;
  return properNounStems.some((stem) => lower.startsWith(stem));
}

function convertSegment(segment) {
  const s = String(segment || "").trim();
  if (!s) return s;
  if (isProperNounWord(getFirstWord(s))) return s;
  const first = s[0];
  if (first && first === first.toUpperCase() && first !== first.toLowerCase()) {
    return first.toLowerCase() + s.slice(1);
  }
  return s;
}

function convertLvValue(value) {
  const text = String(value ?? "");
  if (!text) return text;
  if (text.includes(bullet)) {
    return text
      .split(bullet)
      .map((part) => convertSegment(part))
      .join(` ${bullet} `)
      .trim();
  }
  return convertSegment(text);
}

function replaceQuotedField(line, key) {
  const re = new RegExp(`(?<prefix>"?${key}"?\\s*:\\s*")(?<val>[^"]*)(?<suffix>")`, "gi");
  let changed = false;
  const result = line.replace(re, (full, prefix, val, suffix) => {
    const fixed = convertLvValue(val);
    if (fixed === val) return full;
    changed = true;
    return `${prefix}${fixed}${suffix}`;
  });
  return { line: result, changed };
}

function replaceArrayString(line) {
  const m = line.match(/^(\s*)"([^"]+)"(,?\s*)$/);
  if (!m) return { line, changed: false };
  const fixed = convertLvValue(m[2]);
  if (fixed === m[2]) return { line, changed: false };
  return { line: `${m[1]}"${fixed}"${m[3]}`, changed: true };
}

function countBraces(line) {
  return (line.match(/\{/g) || []).length - (line.match(/\}/g) || []).length;
}

function countBrackets(line) {
  return (line.match(/\[/g) || []).length - (line.match(/\]/g) || []).length;
}

function processFile(relativePath) {
  const filePath = path.join(root, relativePath);
  const lines = fs.readFileSync(filePath, "utf8").split(/\r?\n/);
  const stats = { lvFields: 0, translations: 0, purpleItems: 0 };

  let inSectionAccents = false;
  let sectionDepth = 0;
  let accentField = null;
  let inPurpleArray = false;
  let purpleDepth = 0;

  const lvFieldKeys = ["lv", "translation", "title", "meaning", "describes"];
  const result = [];

  for (const line of lines) {
    let newLine = line;
    let changed = false;

    if (!inSectionAccents && /"?sectionAccents"?\s*:\s*\{/.test(line)) {
      inSectionAccents = true;
      sectionDepth = countBraces(line);
      if (sectionDepth <= 0) sectionDepth = 1;
    } else if (inSectionAccents) {
      sectionDepth += countBraces(line);
      if (sectionDepth <= 0) {
        inSectionAccents = false;
        accentField = null;
        inPurpleArray = false;
        purpleDepth = 0;
      }
    }

    if (inSectionAccents) {
      const fieldMatch = line.match(/"(lv|meaning|translation|describes)"\s*:\s*\{/i);
      if (fieldMatch) {
        accentField = fieldMatch[1].toLowerCase();
        inPurpleArray = false;
        purpleDepth = 0;
      }
      if (accentField && /"purple"\s*:\s*\[/.test(line)) {
        inPurpleArray = true;
        purpleDepth = countBrackets(line);
        if (purpleDepth <= 0) purpleDepth = 1;
      } else if (inPurpleArray) {
        purpleDepth += countBrackets(line);
        if (purpleDepth <= 0) {
          inPurpleArray = false;
          purpleDepth = 0;
        } else if (/^\s+"[^"]+"/.test(line)) {
          const item = replaceArrayString(line);
          if (item.changed) {
            newLine = item.line;
            stats.purpleItems++;
            changed = true;
          }
        }
      }
    }

    for (const key of lvFieldKeys) {
      const field = replaceQuotedField(newLine, key);
      if (field.changed) {
        newLine = field.line;
        changed = true;
        if (key === "lv") stats.lvFields++;
        else stats.translations++;
      }
    }

    result.push(changed ? newLine : line);
  }

  const total = stats.lvFields + stats.translations + stats.purpleItems;
  if (total > 0) {
    fs.writeFileSync(filePath, result.join("\n") + "\n", "utf8");
  }

  return stats;
}

const grand = { lvFields: 0, translations: 0, purpleItems: 0 };
for (const target of targets) {
  const s = processFile(target);
  console.log(
    `${target} : lv=${s.lvFields} translation/title/meaning=${s.translations} purple=${s.purpleItems}`
  );
  grand.lvFields += s.lvFields;
  grand.translations += s.translations;
  grand.purpleItems += s.purpleItems;
}

console.log("");
console.log("=== Lowercase LV complete ===");
console.log(
  `Total: lv=${grand.lvFields} translation/title/meaning=${grand.translations} purple=${grand.purpleItems}`
);
