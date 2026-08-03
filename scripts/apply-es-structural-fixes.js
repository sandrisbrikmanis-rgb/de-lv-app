#!/usr/bin/env node
/**
 * One-shot ES-DE structural/deterministic fixes per audit task.
 * Modifies only approved ES files under data/es and languages/es.
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");

function read(p) {
  return fs.readFileSync(p, "utf8");
}

function write(p, content) {
  fs.writeFileSync(p, content, "utf8");
}

function syncPair(relPath) {
  const rootPath = path.join(ROOT, relPath);
  const wwwPath = path.join(ROOT, "www", relPath);
  write(wwwPath, read(rootPath));
}

// --- 1 & 2: UI fixes ---
function fixUi() {
  let ui = read(path.join(ROOT, "languages/es/ui.js"));
  const placeholderFixes = [
    ["{código}", "{code}"],
    ["{etiqueta}", "{label}"],
    ["{actual}", "{current}"],
    ["{convertirse en}", "{tap}"],
    ["{lección}", "{lesson}"],
  ];
  let placeholderCount = 0;
  for (const [from, to] of placeholderFixes) {
    const n = (ui.match(new RegExp(from.replace(/[{}]/g, "\\$&"), "g")) || []).length;
    placeholderCount += n;
    ui = ui.split(from).join(to);
  }
  const uiStringFixes = [
    ['"check": "Controlar"', '"check": "Comprobar"'],
    ['"close": "Cerca"', '"close": "Cerrar"'],
    ['"knownWords": "Por supuesto"', '"knownWords": "Conocidas"'],
    ['"markSessionLearned": "🏅 Marcar la sesión como impartida"', '"markSessionLearned": "🏅 Marcar la sesión como aprendida"'],
    ['"quickTools": "herramientas rapidas"', '"quickTools": "herramientas rápidas"'],
    ['"spellingOn": "Modo hechizo activado."', '"spellingOn": "Modo de ortografía activado."'],
    ['"lessons": "conferencias"', '"lessons": "lecciones"'],
    ['"lessonsDesc": "Impartición de conferencias en orden secuencial del 1 al 21."', '"lessonsDesc": "Lecciones en orden secuencial del 1 al 21."'],
    ['"lessonsSubtitle": "Impartición de conferencias en orden secuencial del 1 al 21."', '"lessonsSubtitle": "Lecciones en orden secuencial del 1 al 21."'],
    ['"lessonProgress": "Lekcija {lesson} · Traduce: {current} / {total}"', '"lessonProgress": "Lección {lesson} · Traducir: {current} / {total}"'],
    ['"exerciseProgress": "Conferencia {lesson} · Ejercicio"', '"exerciseProgress": "Lección {lesson} · Ejercicio"'],
    ['"sessionMovedToKnown": "Los nombres de las sesiones pasaron a ser conocidos."', '"sessionMovedToKnown": "Las palabras de la sesión pasaron a conocidas."'],
    ['"movedToKnown": "¡Nombre movido a Conocido!"', '"movedToKnown": "¡Palabra movida a Conocidas!"'],
    ['"problemsFinishedMoved": "Palabras problemáticas aprendidas. ¡Nombre movido a Conocido!"', '"problemsFinishedMoved": "Palabras problemáticas aprendidas. ¡Palabra movida a Conocidas!"'],
    ['"answerRevealed": "La respuesta se revela. El nombre permanece en la sesión."', '"answerRevealed": "La respuesta se revela. La palabra permanece en la sesión."'],
    ['"addedMastered": "Nombre añadido a 100% conocido."', '"addedMastered": "Palabra añadida a 100% conocida."'],
    ['"alreadyMastered": "El nombre ya está en la lista 100% conocida."', '"alreadyMastered": "La palabra ya está en la lista 100% conocida."'],
    ['"word": "Nombre"', '"word": "Palabra"'],
  ];
  let uiStringCount = 0;
  for (const [from, to] of uiStringFixes) {
    if (ui.includes(from)) {
      ui = ui.replace(from, to);
      uiStringCount++;
    }
  }
  write(path.join(ROOT, "languages/es/ui.js"), ui);
  syncPair("languages/es/ui.js");
  return { placeholderCount, uiStringCount };
}

// --- 3: dialogueIdMap specific fixes ---
function fixDialogueIdMap() {
  const p = path.join(ROOT, "data/es/dialogueIdMap.js");
  let d = read(p);
  const fixes = [
    ['"lv": "Veseļojieties! • Atveseļojies!"', '"lv": "¡Que te mejores! • ¡Recupérate!"'],
    ['"lv": "Priecājos ar Jums iepazīties."', '"lv": "Encantado de conocerle."'],
    ['"lv": "¿Vas vēl guļi?"', '"lv": "¿Sigues durmiendo?"'],
    ['"lv": "Hij slaapt snel."', '"lv": "Se ha quedado profundamente dormido."'],
    ['"lv": "Lūdzu, pamodini viņu, jau ir vēls!"', '"lv": "Por favor, despiértalo, ¡ya es tarde!"'],
  ];
  let fixed = 0;
  for (const [from, to] of fixes) {
    if (d.includes(from)) {
      d = d.replace(from, to);
      fixed++;
    }
  }
  write(p, d);
  syncPair("data/es/dialogueIdMap.js");

  const lvChar = /[āčēģīķļņšūžĀČĒĢĪĶĻŅŠŪŽ]/;
  const lvWords = /\b(lūdzu|paldies|esmu|vēl|jau|māja|skola|Labrit|Labdien|Veseļojieties)\b/i;
  const dutch = /\b(Hij|slaapt|snel)\b/;
  const entries = [...d.matchAll(/"lv":\s*"([^"]*)"/g)].map((m) => m[1]);
  let remaining = 0;
  for (const t of entries) {
    if (lvChar.test(t) || lvWords.test(t) || (dutch.test(t) && /Hij slaapt/.test(t))) remaining++;
  }
  return { fixed, remaining, total: entries.length };
}

// --- 4: sectionAccents in a2.js ---
function fixSectionAccents() {
  const p = path.join(ROOT, "data/es/a2.js");
  let a2 = read(p);
  const accentReplacements = [
    ['"paklausīgs": "#B565FF"', '"obediente": "#B565FF"'],
    ['"kārtīgs": "#B565FF"', '"ordenado": "#B565FF"'],
    ['"labi audzināts": "#B565FF"', '"educado": "#B565FF"'],
    ['"dedzinoši sāp": "#FF4D4D"', '"ardor": "#FF4D4D"'],
    ['"ierakstīt": "#FFD21F"', '"grabar": "#FFD21F"'],
    ['"no tā": "#B565FF",\n        "par to"', '"de eso": "#B565FF",\n        "par to"'],
    ['"priekšā": "#B565FF",\n        "pirms tam"', '"delante": "#B565FF",\n        "antes"'],
    ['"pie tā": "#B565FF",\n        "klāt": "#B565FF",\n        "turklāt"', '"además": "#B565FF",\n        "presente": "#B565FF",\n        "sobre eso"'],
    ['"jautājumos": "#35D46A"', '"pregunta": "#35D46A"'],
    ['"ārsts": "#B565FF"', '"médico": "#B565FF"'],
    ['"ārsta": "#B565FF"', '"médico": "#B565FF"'],
    ['"ārsta prakse": "#FFB020"', '"practica medica": "#FFB020"'],
    ['"doktors": "#B565FF"', '"doctor": "#B565FF"'],
    ['"tituls": "#FF4D4D"', '"título": "#FF4D4D"'],
    ['"grozīt": "#B565FF"', '"girar": "#B565FF"'],
    ['"drukāt": "#FF4D4D"', '"imprimir": "#FF4D4D"'],
    ['"drukāju": "#FF4D4D"', '"imprimir": "#FF4D4D"'],
    ['"plāns": "#FF4D4D"', '"delgado": "#FF4D4D"'],
    ['"plāns": "#B565FF"', '"fino": "#B565FF"'],
    ['"šķidrs": "#B565FF"', '"líquido": "#B565FF"'],
    ['"dēļ": "#FF4D4D"', '"por": "#FF4D4D"'],
    ['"godīgs": "#B565FF"', '"honesto": "#B565FF"'],
    ['"atklāts": "#B565FF"', '"franco": "#B565FF"'],
    ['"atklāta": "#B565FF"', '"franca": "#B565FF"'],
    ['"atklāti": "#B565FF"', '"francos": "#B565FF"'],
    ['"patiesībā": "#B565FF"', '"en realidad": "#B565FF"'],
    ['"Patiesībā": "#B565FF"', '"En realidad": "#B565FF"'],
    ['"īstenībā": "#B565FF"', '"realmente": "#B565FF"'],
    ['"īstais": "#B565FF"', '"verdadero": "#B565FF"'],
  ];
  let count = 0;
  for (const [from, to] of accentReplacements) {
    if (a2.includes(from)) {
      a2 = a2.replace(from, to);
      count++;
    }
  }
  write(p, a2);
  syncPair("data/es/a2.js");
  return count;
}

// --- 5-8: courseLessons ---
function fixCourseLessons() {
  const p = path.join(ROOT, "data/es/courseLessons.js");
  let c = read(p);
  let count = 0;

  const replacements = [
    // Lekcija titles
    ['"title": "Lekcija 8"', '"title": "Lección 8"'],
    ['"title": "Lekcija 9"', '"title": "Lección 9"'],
    ['"title": "Lekcija 10"', '"title": "Lección 10"'],
    ['"title": "Lekcija 11"', '"title": "Lección 11"'],
    ['"title": "Lekcija 12"', '"title": "Lección 12"'],
    ['"title": "Lekcija 13"', '"title": "Lección 13"'],
    ['"title": "Lekcija 14"', '"title": "Lección 14"'],
    ['"title": "Lekcija 15"', '"title": "Lección 15"'],
    ['"title": "Lekcija 16"', '"title": "Lección 16"'],
    ['"title": "Lekcija 17"', '"title": "Lección 17"'],
    ['"title": "Lekcija 18"', '"title": "Lección 18"'],
    ['"title": "Lekcija 19"', '"title": "Lección 19"'],
    ['"title": "Lekcija 20"', '"title": "Lección 20"'],
    ['"title": "Lekcija 21"', '"title": "Lección 21"'],
    // RU/LV remnants
    [
      '"krievu: я имею тетрадь; отец имеет книгу."',
      '"en ruso: я имею тетрадь; отец имеет книгу.\\nen español: Tengo un cuaderno; el padre tiene un libro."',
    ],
    ['"Ich habe einen Tisch - man ir galds"', '"Ich habe einen Tisch — Tengo una mesa."'],
    // Broken DE dialogues (restore from LV etalon)
    ["¿Fue tut Paul?", "Was tut Paul?"],
    ["¿Fue tun Paul y Marie?", "Was tun Paul und Marie?"],
    ["¿Fue tut ihr?", "Was tut ihr?"],
    ["¿Era tun Sie?", "Was tun Sie?"],
    ["¿Eran tun Hans y Olga?", "Was tun Hans und Olga?"],
    ['"de": "¿Fue tut du?"', '"de": "Was tust du?"'],
    ['"¿Fue tut der Knabe?"', '"Was tut der Knabe?"'],
    ['"de": "¿Fue tut er?"', '"de": "Was tut er?"'],
    // Hybrid fragments
    ["kommen - por venir", "kommen — venir"],
    ["<span>I ven</span>", "<span>yo vengo</span>"],
    ["Me canto ein Lied.", "Ich singe ein Lied."],
    ["Hans, ¡singe ein Lied!", "Hans, singe ein Lied!"],
    ["Hans y Olga, cantan ein Lied!", "Hans und Olga, singt ein Lied!"],
    ["kommen - por venir", "kommen — venir"],
  ];
  for (const [from, to] of replacements) {
    if (c.includes(from)) {
      c = c.split(from).join(to);
      count++;
    }
  }
  write(p, c);
  syncPair("data/es/courseLessons.js");
  return count;
}

// --- 9: Safe letón -> español (category A only) ---
function fixSafeLeton() {
  const files = [
    "data/es/courseLessons.js",
    "data/es/a1.js",
    "data/es/a2.js",
    "data/es/b1.js",
  ];
  const safePatterns = [
    [/En letón,/g, "En español,"],
    [/en letón,/g, "en español,"],
    [/En letón /g, "En español "],
    [/en letón /g, "en español "],
    [/del letón al alemán/g, "del español al alemán"],
    [/La o letona es/g, "La o española es"],
    [/c letona:/g, "c española:"],
    [/Dativo letón y/g, "Dativo español y"],
    [/lengua letona/g, "lengua española"],
    [/letona no se/g, "española no se"],
    [/ordinaria letona/g, "ordinaria española"],
    [/s letona\./g, "s española."],
    [/Letón: mit =/g, "Español: mit ="],
    [/idioma letón/g, "idioma español"],
    [/el letón /g, "el español "],
    [/El letón /g, "El español "],
  ];
  let safeFixed = 0;
  const semanticLeft = [];
  for (const rel of files) {
    const p = path.join(ROOT, rel);
    let content = read(p);
    const before = (content.match(/letón|leton|Letón/gi) || []).length;
    for (const [re, rep] of safePatterns) {
      const matches = content.match(re);
      if (matches) safeFixed += matches.length;
      content = content.replace(re, rep);
    }
    const after = (content.match(/letón|leton|Letón/gi) || []).length;
    write(p, content);
    syncPair(rel);
    if (after > 0) semanticLeft.push({ file: rel, count: after });
  }
  const totalLeton = semanticLeft.reduce((s, x) => s + x.count, 0);
  return { safeFixed, semanticLeft, totalLeton };
}

// --- 10: sentences artifacts ---
function fixSentences() {
  const p = path.join(ROOT, "data/es/sentences.js");
  let s = read(p);
  let count = 0;
  const fixes = [
    ['"lv": "OMS...? • ¿Qué pasa con...?"', '"lv": "¿Qué clase de...? • ¿Qué tipo de...?"'],
    ['"lv": "¿Cómo estás? ¿Cómo estás?"', '"lv": "¿Cómo está usted?"'],
  ];
  for (const [from, to] of fixes) {
    if (s.includes(from)) {
      s = s.replace(from, to);
      count++;
    }
  }
  write(p, s);
  syncPair("data/es/sentences.js");
  return count;
}

const ui = fixUi();
const dialogue = fixDialogueIdMap();
const accents = fixSectionAccents();
const kurss = fixCourseLessons();
const leton = fixSafeLeton();
const sentences = fixSentences();

console.log(JSON.stringify({ ui, dialogue, accents, kurss, leton, sentences }, null, 2));
