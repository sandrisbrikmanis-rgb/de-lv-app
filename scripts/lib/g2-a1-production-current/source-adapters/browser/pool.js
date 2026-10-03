#!/usr/bin/env node
"use strict";

const { chromium } = require("playwright");

/** @type {import('playwright').Browser | null} */
let sharedBrowser = null;
const domainChains = new Map();
const lastRequestByDomain = new Map();
const MIN_GAP_MS = 1200;

async function getBrowser() {
  if (!sharedBrowser) {
    sharedBrowser = await chromium.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
  }
  return sharedBrowser;
}

async function withDomainBrowserSession(hostname, fn) {
  const host = hostname || "unknown";
  const prev = domainChains.get(host) || Promise.resolve();
  let release;
  const next = new Promise((r) => {
    release = r;
  });
  domainChains.set(
    host,
    prev.then(() => next),
  );
  await prev;

  const last = lastRequestByDomain.get(host) || 0;
  const wait = Math.max(0, MIN_GAP_MS - (Date.now() - last));
  if (wait) await new Promise((r) => setTimeout(r, wait));

  try {
    const browser = await getBrowser();
    const context = await browser.newContext({ locale: "en-US" });
    const page = await context.newPage();
    page.setDefaultTimeout(45000);
    const result = await fn(page);
    await context.close();
    lastRequestByDomain.set(host, Date.now());
    return result;
  } finally {
    release();
  }
}

async function closeBrowserPool() {
  if (sharedBrowser) {
    await sharedBrowser.close();
    sharedBrowser = null;
  }
}

module.exports = { withDomainBrowserSession, closeBrowserPool, getBrowser };
