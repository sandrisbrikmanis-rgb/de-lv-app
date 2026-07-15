#!/usr/bin/env node
/**
 * Replace Latin/linguistic jargon in user-facing vocabulary content (a1–c2).
 * Usage: node scripts/cleanup-linguistic-jargon.js [--dry-run]
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const DRY_RUN = process.argv.includes("--dry-run");
const root = path.join(__dirname, "..");

const LEVEL_FILES = [
  { file: "data/a1.js", key: "A1_WORDS", www: "www/data/a1.js" },
  { file: "data/a2.js", key: "A2_WORDS", www: "www/data/a2.js" },
  { file: "data/b1.js", key: "B1_WORDS", www: "www/data/b1.js" },
  { file: "data/b2.js", key: "B2_WORDS", www: "www/data/b2.js" },
  { file: "data/c1.js", key: "C1_WORDS", www: "www/data/c1.js" },
  { file: "data/c2.js", key: "C2_WORDS", www: "www/data/c2.js" },
];

const JARGON_PATTERN =
  /Singularetantum|Pluraletantum|Akkusativ|Dativ|Nominativ|Genitiv|Infinitiv|Perfekt|rekcij|substantiv|Partizip|Konjunktiv|Präteritum|Komparativ|Superlativ|atdalāms darbības vārds|\bDativs\b|\bDativā\b|\bAkkusativs\b|\bAkkusativā\b/gi;

const REPLACEMENTS = [
  [/zu-Infinitiv/gi, "zu + nenoteiksme"],
  [/zu \+ Infinitiv/gi, "zu + nenoteiksme"],
  [/Singularetantum/g, "tikai vienskaitlis"],
  [/Pluraletantum/g, "tikai daudzskaitlis"],
  [/atdalāms darbības vārds/gi, "darbības vārds, ko var sadalīt"],
  [/atdalāms:/gi, "sadalāms:"],
  [/obligāts Dativ/gi, "obligāti jālieto ar kam? formu"],
  [/obligāti jābūt Dativam/gi, "obligāti jālieto ar kam? formu"],
  [/jābūt Dativam/gi, "jālieto ar kam? formu"],
  [/prasa Dativ/gi, "prasa kam? formu"],
  [/ar Dativ/gi, "ar kam? formu"],
  [/mit Dativ/gi, "mit + kam?"],
  [/von Dativ/gi, "von + kam?"],
  [/zu Dativ/gi, "zu + kam?"],
  [/an Dativ/gi, "an + kam?"],
  [/in Dativ/gi, "in + kur?"],
  [/vor Dativ/gi, "vor + kam?"],
  [/aus Dativ/gi, "aus + kam?"],
  [/bei Dativ/gi, "bei + kam?"],
  [/auf Akkusativ/gi, "auf + ko?"],
  [/in Akkusativ/gi, "in + ko?"],
  [/über Akkusativ/gi, "über + ko?"],
  [/um Akkusativ/gi, "um + ko?"],
  [/als Akkusativ/gi, "als + ko?"],
  [/als Nominativ/gi, "als + kas?"],
  [/an \+ Dativ/gi, "an + kam?"],
  [/mit \+ Dativ/gi, "mit + kam?"],
  [/von \+ Dativ/gi, "von + kam?"],
  [/zu \+ Dativ/gi, "zu + kam?"],
  [/auf \+ Akkusativ/gi, "auf + ko?"],
  [/in \+ Akkusativ/gi, "in + ko?"],
  [/in \+ Dativ/gi, "in + kur?"],
  [/über \+ Akkusativ/gi, "über + ko?"],
  [/vor \+ Dativ/gi, "vor + kam?"],
  [/aus \+ Dativ/gi, "aus + kam?"],
  [/bei \+ Dativ/gi, "bei + kam?"],
  [/um \+ Akkusativ/gi, "um + ko?"],
  [/als \+ Nominativ/gi, "als + kas?"],
  [/als \+ Akkusativ/gi, "als + ko?"],
  [/trotz \+ Dativ/gi, "trotz + kam?"],
  [/ohne \+ Akkusativ/gi, "ohne + ko?"],
  [/\+ Genitiv/gi, "+ piederības forma"],
  [/\+ Dativ/gi, "+ kam?"],
  [/\+ Akkusativ/gi, "+ ko?"],
  [/\+ Nominativ/gi, "+ teikuma priekšmets"],
  [/Akkusativā/gi, "kurp? locījumā"],
  [/Akkusativs/gi, "kurp? forma"],
  [/Akkusativ/gi, "kurp?"],
  [/Dativā/gi, "kam? locījumā"],
  [/Dativs/gi, "kam? forma"],
  [/Dativ-Fall/gi, "kam? locījums"],
  [/\bDativ\b/gi, "kam?"],
  [/Nominativ Pl\./gi, "daudzskaitļa teikuma priekšmets"],
  [/Nominativs/gi, "teikuma priekšmeta forma"],
  [/Nominativ/gi, "teikuma priekšmets"],
  [/Genitiv/gi, "piederības forma"],
  [/Infinitiv/gi, "nenoteiksme"],
  [/Perfektā/gi, "pagātnes laikā ar palīgvārdu"],
  [/substantivācija/gi, "darbības vārda pārvēršana par lietvārdu"],
  [/rekcija/gi, "prievārdu vadība"],
  [/Dativ \+ Pl\./gi, "kam? + daudzskaitlis"],
  [/Dativ \+ Sg\./gi, "kam? + vienskaitlis"],
  [/Nominativ Pl\./gi, "daudzskaitļa teikuma priekšmets"],
  [/possessiv \+ Pl\./gi, "piederības forma + daudzskaitlis"],
  [/\(Sg\.\)/g, "(tikai vienskaitlī)"],
  [/\(Pl\.\)/g, "(tikai daudzskaitlī)"],
  [/\bSg\.\b/g, "vienskaitlis"],
  [/\bPl\.\b/g, "daudzskaitlis"],
  [/nekatr\. lietv\./gi, "nekatrā dzimtē"],
  [/lietvārdu \(vienskaitlis\)/gi, "lietvārdu (tikai vienskaitlī)"],
  [/sajūtu \(vienskaitlis\)/gi, "sajūtu (tikai vienskaitlī)"],
  [/nekatr\. lietv\. \(vienskaitlis\)/gi, "nekatrā dzimtē, tikai vienskaitlī"],
  [/Sg\. → Pl\./gi, "vienskaitlis → daudzskaitlis"],
  [/die \+ Pl\./gi, "die + daudzskaitlis"],
  [/\(Pl\.\)/g, "(tikai daudzskaitlī)"],
  [/beabsichtigen \+ zu \+ nenoteiksme/gi, "beabsichtigen + zu + nenoteiksme"],
  [/unterstellen \+ kam\? \+ kurp\?/gi, "unterstellen + kam? + ko?"],
  [/unterstellen \+ Dativ \+ Akkusativ/gi, "unterstellen + kam? + ko?"],
  [/voraussetzen \+ kurp\?/gi, "voraussetzen + ko?"],
  [/voraussetzen \+ Akkusativ/gi, "voraussetzen + ko?"],
  [/sich beziehen auf \+ kurp\?/gi, "sich beziehen auf + ko?"],
  [/sich beziehen auf \+ Akkusativ/gi, "sich beziehen auf + ko?"],
  [/beziehen bieži ar sich beziehen auf \+ kurp\?/gi, "beziehen bieži ar sich beziehen auf + ko?"],
  [/mūsdienu vāciski lieto ar piederības forma bez prievārda/gi,
    "mūsdienu vāciski lieto ar piederības formu bez prievārda"],
  [/prasa fiksētu prievārdu/gi, "nepieciešams noteikts prievārds"],
  [/schaden vienmēr ar Dativ:/gi, "schaden vienmēr ar kam? formu:"],
];

function cleanText(text) {
  if (typeof text !== "string" || !text) return text;
  let out = text;
  for (const [pattern, replacement] of REPLACEMENTS) {
    out = out.replace(pattern, replacement);
  }
  return out;
}

function walkStudy(value, inDeBranch, onChange) {
  if (typeof value === "string") {
    if (inDeBranch) return value;
    const cleaned = cleanText(value);
    if (cleaned !== value) onChange();
    return cleaned;
  }
  if (Array.isArray(value)) {
    return value.map((item) => walkStudy(item, inDeBranch, onChange));
  }
  if (value && typeof value === "object") {
    const out = {};
    for (const [k, v] of Object.entries(value)) {
      out[k] = walkStudy(v, inDeBranch || k === "de", onChange);
    }
    return out;
  }
  return value;
}

function processEntry(entry) {
  let changed = false;
  const onChange = () => {
    changed = true;
  };
  const out = { ...entry };
  if (entry.lv) {
    const lv = cleanText(entry.lv);
    if (lv !== entry.lv) {
      changed = true;
      out.lv = lv;
    }
  }
  if (entry.study) {
    const study = walkStudy(entry.study, false, onChange);
    out.study = study;
  }
  return { entry: out, changed };
}

function loadWords(filePath, key) {
  const win = {};
  vm.runInContext(fs.readFileSync(path.join(root, filePath), "utf8"), vm.createContext({ window: win }));
  return win[key];
}

function serializeWords(words, constName) {
  const lines = [`const ${constName} = [`];
  for (const w of words) {
    lines.push("  " + JSON.stringify(w, null, 2).replace(/\n/g, "\n  ") + ",");
  }
  lines.push("];", "", `window.${constName} = ${constName};`);
  return lines.join("\n");
}

function fixReis(words) {
  let changed = false;
  for (let i = 0; i < words.length; i++) {
    const w = words[i];
    if (w.de !== "Reis") continue;
    const next = {
      ...w,
      lv: "rīsi",
      de_article: "der",
    };
    delete next.de_plural;
    if (!next.study) {
      next.study = {
        id: "a1-reis",
        layout: "standardStudy",
        translation: "rīsi",
        explanation:
          "Vācu valodā vārdu „der Reis” lieto tikai vienskaitlī, tāpēc teikumā darbības vārdam jābūt vienskaitļa formā (piemēram, „ist”, nevis „sind”). Latviski tomēr bieži saka „rīsi”.",
        examples: [
          { de: "Der Reis ist fertig.", lv: "rīsi ir gatavi." },
          { de: "Ich esse Reis.", lv: "es ēdu rīsus." },
          { de: "Kochst du Reis?", lv: "vai tu gatavo rīsus?" },
          { de: "Der Reis schmeckt gut.", lv: "rīsi garšo labi." },
        ],
        tip: {
          text: "Atceries: der Reis ir vienskaitlis vāciski, bet latviski parasti — rīsi.",
        },
        important: [
          "der Reis — vācu valodā tikai vienskaitlis (Der Reis ist..., nicht *sind).",
          "Latviski tulkojumā bieži lieto daudzskaitli: rīsi ir gatavi.",
        ],
        sectionAccents: {
          explanation: {
            blue: ["der Reis", "ist"],
            purple: ["vienskaitlis", "rīsi"],
            red: ["sind"],
          },
          examples: [
            {
              de: { blue: ["Reis", "ist"] },
              lv: { purple: ["rīsi"] },
            },
            {
              de: { blue: ["Reis"] },
              lv: { purple: ["rīsus"] },
            },
          ],
          tip: {
            blue: ["der Reis"],
            purple: ["vienskaitlis", "rīsi"],
          },
        },
      };
      changed = true;
    }
    words[i] = next;
    if (JSON.stringify(next) !== JSON.stringify(w)) changed = true;
  }
  return changed;
}

const stats = {
  files: {},
  totalCards: 0,
  totalReplacements: 0,
};

for (const { file, key, www } of LEVEL_FILES) {
  const words = loadWords(file, key);
  let fileChanges = 0;

  for (let i = 0; i < words.length; i++) {
    const { entry, changed } = processEntry(words[i]);
    words[i] = entry;
    if (changed) fileChanges++;
  }

  if (file === "data/a1.js") {
    if (fixReis(words)) fileChanges++;
  }

  stats.files[file] = fileChanges;
  stats.totalCards += fileChanges;

  if (!DRY_RUN) {
    const out = serializeWords(words, key);
    fs.writeFileSync(path.join(root, file), out, "utf8");
    fs.writeFileSync(path.join(root, www), out, "utf8");
  }
}

// Count remaining jargon in user-facing fields
let remaining = 0;
for (const { file, key } of LEVEL_FILES) {
  const words = loadWords(file, key);
  for (const w of words) {
    const { entry } = processEntry(w);
    const blob = JSON.stringify({ lv: entry.lv, study: entry.study });
    if (JARGON_PATTERN.test(blob)) remaining++;
  }
}

console.log(JSON.stringify({ ...stats, remainingJargonCards: remaining, dryRun: DRY_RUN }, null, 2));
