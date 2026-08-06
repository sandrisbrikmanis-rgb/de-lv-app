#!/usr/bin/env node
const { translateText } = require("./lib/openai-translate");

const ORIGINAL_TEXT = "Jānis brauc ar jaunu automašīnu. Pēteris gaida viņu pie mājas.";
const TARGET_LANGUAGE = "Italian";
const CONTEXT =
  "Vienkāršs A1 līmeņa valodas mācību piemērs. Jānis un Pēteris ir izdomāti personāži. Lokalizē viņu vārdus itāļu valodai saprotamā un dabiskā formā, saglabājot katra tēla identitāti un teikuma nozīmi.";

async function main() {
  const translation = await translateText({
    text: ORIGINAL_TEXT,
    targetLanguage: TARGET_LANGUAGE,
    context: CONTEXT,
  });

  if (typeof translation !== "string" || !translation.trim()) {
    throw new Error("Tulkojums nav derīga virkne.");
  }

  if (translation === ORIGINAL_TEXT) {
    throw new Error("Tulkojums ir identisks avota tekstam.");
  }

  if (/```/.test(translation)) {
    throw new Error("Tulkojums satur Markdown koda bloku.");
  }

  console.log(`Original: ${ORIGINAL_TEXT}`);
  console.log(`Target language: ${TARGET_LANGUAGE}`);
  console.log(`Translation: ${translation}`);
}

main().catch((error) => {
  const message = error instanceof Error ? error.message : String(error);
  console.error(message);
  process.exitCode = 1;
});
