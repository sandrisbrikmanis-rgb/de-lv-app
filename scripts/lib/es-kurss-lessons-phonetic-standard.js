"use strict";
/**
 * Single Spanish phonetic notation standard for ES Kurss Lessons.
 * Aligns with kurssPronunciationLesson / kurssConsonantsLesson:
 * - Vocabulary rows: DE (phonetic) — Spanish gloss
 * - Pronunciation rules: Spanish prose + examples with macron/š transcription
 * - š for [ʃ], macrons āēīūō for length (same glyphs as ES course store)
 */

/** @type {Record<string, string>} */
const PHONETIC_LABOT_NEW = {
  "ES-KURSS-LESSONS-DET-0063": "der Lehrer (dēr lērer) — profesor",
  "ES-KURSS-LESSONS-DET-0066": "der Schüler (šūler) — estudiante",
  "ES-KURSS-LESSONS-DET-0081": "der Schlüssel (šlūsel) — llave",
  "ES-KURSS-LESSONS-DET-0082": "die Tafel (dī tāfel) — pizarra",
  "ES-KURSS-LESSONS-DET-0084": "der Deckel (dēr dekel) — tapa",
  "ES-KURSS-LESSONS-DET-0086": "schwer (švēr) — pesado, difícil",
  "ES-KURSS-LESSONS-DET-0137": "der Bäcker (dēr beker) — panadero",
  "ES-KURSS-LESSONS-DET-0138": "der Schneider (dēr šneider) — sastre",
  "ES-KURSS-LESSONS-DET-0139": "der Gärtner (dēr gertner) — jardinero",
  "ES-KURSS-LESSONS-DET-0141":
    "La ä también puede sonar como una e más abierta, por ejemplo en der Gärtner (dēr gertner).",
  "ES-KURSS-LESSONS-DET-0158": "der Brief (dēr brīf) — carta",
  "ES-KURSS-LESSONS-DET-0167": "ihr seid (īr zeit) — vosotros sois / estáis",
  "ES-KURSS-LESSONS-DET-0169": "der Knabe (dēr knābe) — un niño",
  "ES-KURSS-LESSONS-DET-0170": "der Großvater (dēr grōsfāter) — abuelo",
  "ES-KURSS-LESSONS-DET-0172":
    "Si a la vocal le sigue una sola consonante, normalmente es larga: Vögel (fōgel), Schüler (šūler), Bücher (būcher).",
  "ES-KURSS-LESSONS-DET-0173": "Pronuncia correctamente: der Großvater (dēr grōsfāter).",
  "ES-KURSS-LESSONS-DET-0174":
    "La e alemana puede ser cerrada o abierta: der Lehrer (dēr lērer). La e de la raíz es larga y cerrada; la de la terminación, corta y abierta.",
  "ES-KURSS-LESSONS-DET-0181": "der Bruder (dēr brūder) — hermano",
  "ES-KURSS-LESSONS-DET-0182": "der Schreibtisch (dēr šreibtīš) — un escritorio",
  "ES-KURSS-LESSONS-DET-0184": "der Freund (dēr froint) — amigo",
  "ES-KURSS-LESSONS-DET-0185": "der Stuhl (dēr štūl) — silla",
  "ES-KURSS-LESSONS-DET-0186": "die Landkarte (dī lantkarte) — mapa geográfico",
  "ES-KURSS-LESSONS-DET-0187": "die Schwester (dī švester) — hermana",
  "ES-KURSS-LESSONS-DET-0188": "eu se pronuncia «oi»: der Freund (dēr froint), neun (noin).",
  "ES-KURSS-LESSONS-DET-0189":
    "A menudo, la h indica que la vocal anterior es larga: der Stuhl (dēr štūl), zehn (cēn).",
  "ES-KURSS-LESSONS-DET-0202": "der Vetter (dēr feter) — primo",
  "ES-KURSS-LESSONS-DET-0203": "das Gummi (das gumī) — goma",
};

/** Semantic + pronunciation-section fixes reviewed individually. */
const SEMANTIC_LABOT_NEW = {
  "ES-KURSS-LESSONS-DET-0051": "die Feder (dī fēder) — pluma",
  "ES-KURSS-LESSONS-DET-0109": "das Lied (das līt) — canción",
  "ES-KURSS-LESSONS-DET-0110": "der Spiegel (špīgel) — espejo",
  // Lesson 7 Pronunciación — LV structural template (3 rules, no vocabulary prefix)
  "ES-KURSS-LESSONS-DET-0111":
    "sp al principio de una palabra o sílaba se pronuncia como šp: der Spiegel (dēr špīgel).",
  "ES-KURSS-LESSONS-DET-0112":
    "sch se pronuncia como š: die Schaufel (dī šaufel), die Schüssel (dī šūsel).",
  "ES-KURSS-LESSONS-DET-0113":
    "El diptongo äu se pronuncia como oi: das Fräulein (das froilein).",
  "ES-KURSS-LESSONS-DET-0114":
    "sp al principio de una palabra o sílaba se pronuncia como šp: der Spiegel (dēr špīgel).",
  "ES-KURSS-LESSONS-DET-0115":
    "sch se pronuncia como š: die Schaufel (dī šaufel), die Schüssel (dī šūsel).",
  "ES-KURSS-LESSONS-DET-0116":
    "El diptongo äu se pronuncia como oi: das Fräulein (das froilein).",
  "ES-KURSS-LESSONS-DET-0017": "Du kommst. — Vienes.\nKommst du? — ¿Vienes?",
  "ES-KURSS-LESSONS-DET-0035": "femenino — die",
  "ES-KURSS-LESSONS-DET-0040": "femenino — El artículo indefinido no tiene plural.",
};

const ALL_SEMANTIC = { ...SEMANTIC_LABOT_NEW };

module.exports = {
  PHONETIC_LABOT_NEW,
  SEMANTIC_LABOT_NEW,
  ALL_SEMANTIC,
};
