#!/usr/bin/env node
"use strict";

function createInterruptState() {
  return {
    interrupted: false,
    signal: null,
    currentBatchInFlight: false,
  };
}

function installSignalHandlers(state) {
  const onSignal = (signal) => {
    state.interrupted = true;
    state.signal = signal;
  };
  process.once("SIGINT", () => onSignal("SIGINT"));
  process.once("SIGTERM", () => onSignal("SIGTERM"));
  return state;
}

function assertNotInterrupted(state) {
  if (state?.interrupted) {
    const err = new Error(`Interrupted by ${state.signal || "SIGNAL"}`);
    err.code = "INTERRUPTED";
    throw err;
  }
}

module.exports = {
  createInterruptState,
  installSignalHandlers,
  assertNotInterrupted,
};
