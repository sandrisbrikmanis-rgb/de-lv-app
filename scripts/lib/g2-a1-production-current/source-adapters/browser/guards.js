#!/usr/bin/env node
"use strict";

const { SOURCE_ACCESS_OUTCOME } = require("../../official-source-access-constants");

const CAPTCHA_RE =
  /captcha|cloudflare|verify you are human|not a bot|are you a robot|hcaptcha|recaptcha|turnstile/i;
const AUTH_RE = /log in|sign in|authentication required|401|403 forbidden|access denied/i;

function classifyBrowserText(text, url) {
  const t = String(text || "");
  const u = String(url || "");
  if (CAPTCHA_RE.test(t) || CAPTCHA_RE.test(u)) {
    return { blocked: true, outcome: SOURCE_ACCESS_OUTCOME.SOURCE_ACCESS_BLOCKED, reason: "CAPTCHA_OR_BOT_CHALLENGE" };
  }
  if (AUTH_RE.test(t.slice(0, 1500))) {
    return { blocked: true, outcome: SOURCE_ACCESS_OUTCOME.SOURCE_AUTHENTICATION_REQUIRED, reason: "AUTH_WALL" };
  }
  return { blocked: false };
}

module.exports = { classifyBrowserText, CAPTCHA_RE };
