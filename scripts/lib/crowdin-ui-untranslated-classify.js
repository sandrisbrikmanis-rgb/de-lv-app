#!/usr/bin/env node
"use strict";

const LV_DIACRITICS_RE = /[āčēģīķļņšūžĀČĒĢĪĶĻŅŠŪŽ]/;
const LATVIAN_HINT_RE =
  /\b(un|vārdu|vārdi|vārdus|iemācī|Pārbaud|Atcelt|Turpin|Izvēl|Klikšķ|Nospied|Rādām|Turpinām|Šonedēļ|Šomēnes|Nezinu|Zinu|Darbības|Teikumi|Galvenā|Problemātisk|Nevajadzīg|pareizrakstīb|mācīšanās|sesij|kartīt|līmenis|pārskat)\b/i;

const INTENTIONAL_KEYS = new Set([
  "study.table.german",
  "direction.deToNative",
  "direction.nativeToDe",
  "verb.infinitiv",
  "verb.hintSessionProgress",
]);

const GERMAN_BRAND_VALUES = new Set(["Deutsch lernen", "Sprache wählen"]);

const GERMAN_BRAND_KEYS = new Set([
  "languageSelect.footer",
  "languageSelect.title",
  "splash.subtitle",
]);

const COGNATE_REVIEW_KEYS = new Set([
  "kurss.sections.grammar",
  "card.sessionLabel",
  "extra.statistics",
  "study.minimal.formsLabel",
  "tools.problemShort",
]);

function hasLatvianDiacritics(value) {
  return LV_DIACRITICS_RE.test(value);
}

function isGermanPedagogyMenuDesc(key, value) {
  if (!/^kurss\.lessonItems\.\d+\.menuDesc$/.test(key)) return false;
  if (hasLatvianDiacritics(value)) return false;
  if (
    /\b(Dativs|Akuzatīvs|akuzatīvs|Refleksīvie|modālie|daudzskaitl|vienskaitl|piederība|salīdzināmās|ģermeņa|augļi)\b/i.test(
      value
    )
  ) {
    return false;
  }
  return true;
}

function isCodeOrSymbolicOnly(value) {
  const withoutPlaceholders = value.replace(/\{[^}]+\}/g, "");
  const compact = withoutPlaceholders.replace(/\s+/g, "");
  if (!compact) return true;
  if (/^(DE|LV|GR|EN|A1|A2|B1|B2|C1|C2|[🔄➔‹›▲▼🏅🎉·/:.\-]+)+$/u.test(compact)) return true;
  return false;
}

function isCognateReviewKey(key) {
  if (/^kurss\.lessonItems\.\d+\.title$/.test(key)) return true;
  return COGNATE_REVIEW_KEYS.has(key);
}

function looksLatvianText(value) {
  if (hasLatvianDiacritics(value)) return true;
  return LATVIAN_HINT_RE.test(value);
}

function reasonCategoryForIntentional(key, lvValue, rationale) {
  if (key === "study.table.german") return "DE_CODE";
  if (key === "direction.deToNative" || key === "direction.nativeToDe") return "DE_CODE";
  if (key === "verb.infinitiv") return "LATIN_GRAMMAR";
  if (key === "verb.hintSessionProgress") return "PLACEHOLDER";
  if (GERMAN_BRAND_KEYS.has(key) && GERMAN_BRAND_VALUES.has(lvValue)) return "GERMAN_BRAND";
  if (isGermanPedagogyMenuDesc(key, lvValue)) return "GERMAN_PEDAGOGY";
  if (isCodeOrSymbolicOnly(lvValue)) return "CODE_SYMBOL";
  if (rationale.includes("DE kolonnas")) return "DE_CODE";
  if (rationale.includes("placeholder")) return "PLACEHOLDER";
  if (rationale.includes("zīmola")) return "GERMAN_BRAND";
  if (rationale.includes("mācību")) return "GERMAN_PEDAGOGY";
  return "INTENTIONAL_OTHER";
}

function classifySameRow(key, lvValue) {
  if (INTENTIONAL_KEYS.has(key)) {
    if (key === "study.table.german") {
      return ["INTENTIONAL_SAME", "DE kolonnas kods"];
    }
    if (key === "direction.deToNative" || key === "direction.nativeToDe") {
      return ["INTENTIONAL_SAME", "Virziena indikators ar DE kodu un placeholder {code}"];
    }
    if (key === "verb.infinitiv") {
      return ["INTENTIONAL_SAME", "Latīņu gramatikas termins"];
    }
    return ["INTENTIONAL_SAME", "Placeholder struktūra identiska avotam"];
  }

  if (GERMAN_BRAND_KEYS.has(key) && GERMAN_BRAND_VALUES.has(lvValue)) {
    return ["INTENTIONAL_SAME", "Vācu zīmola / palaišanas virkne"];
  }

  if (isGermanPedagogyMenuDesc(key, lvValue)) {
    return ["INTENTIONAL_SAME", "Apzināti saglabāts vācu mācību apraksts"];
  }

  if (isCodeOrSymbolicOnly(lvValue)) {
    return ["INTENTIONAL_SAME", "Kods, simboli vai tikai placeholderi"];
  }

  if (isCognateReviewKey(key)) {
    return [
      "NEEDS_OWNER_REVIEW",
      "Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam",
    ];
  }

  if (/^kurss\.lessonItems\.\d+\.menuDesc$/.test(key)) {
    return [
      "NEEDS_OWNER_REVIEW",
      "Jaukts LV + DE mācību apraksts — nepieciešams OWNER vērtējums",
    ];
  }

  if (looksLatvianText(lvValue)) {
    return ["REAL_UNTRANSLATED", "LV avota teksts nav iztulkots mērķvalodā"];
  }

  return ["NEEDS_OWNER_REVIEW", "Nav droši klasificējams automātiski"];
}

module.exports = {
  classifySameRow,
  reasonCategoryForIntentional,
};
