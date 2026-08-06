#!/usr/bin/env node
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "..", ".env") });

const OpenAI = require("openai");

const PROMPT = "Atbildi tikai ar vārdu: Darbojas";

async function main() {
  const apiKey = process.env.OPENAI_API_KEY?.trim();
  if (!apiKey) {
    throw new Error("OPENAI_API_KEY is missing in .env");
  }

  const client = new OpenAI({ apiKey });
  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: PROMPT }],
    temperature: 0,
  });

  const reply = response.choices[0]?.message?.content?.trim() || "";
  console.log(`Prompt: ${PROMPT}`);
  console.log(`Reply: ${reply}`);

  if (!/darbojas/i.test(reply)) {
    throw new Error(`Unexpected reply: "${reply}"`);
  }

  console.log("OpenAI test passed.");
}

main().catch((err) => {
  console.error("OpenAI test failed:", err.message || err);
  process.exit(1);
});
