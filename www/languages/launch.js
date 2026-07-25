(function () {
  const SPLASH_DURATION_MS = 4000;
  const STORAGE_KEY = window.AppLanguageRegistry.storageKey;
  let bootStarted = false;

  function delay(ms) {
    return new Promise((resolve) => window.setTimeout(resolve, ms));
  }

  function getSavedLanguage() {
    try {
      const value = window.store?.getItem(STORAGE_KEY);
      return value == null ? null : String(value).trim();
    } catch (error) {
      return null;
    }
  }

  function clearSavedLanguage() {
    try {
      if (typeof window.store.removeItem === "function") {
        window.store.removeItem(STORAGE_KEY);
      } else {
        window.store.setItem(STORAGE_KEY, "");
      }
    } catch (error) {
      // ignore storage failures
    }
  }

  function saveLanguage(code) {
    window.store.setItem(STORAGE_KEY, code);
  }

  function renderLanguageOptions(container) {
    if (!container) return;
    container.innerHTML = "";
    window.AppLanguageRegistry.active().forEach((entry) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "language-option-btn";
      button.dataset.langCode = entry.code;
      button.textContent = entry.nativeName;
      button.setAttribute("aria-label", entry.nativeName);
      container.appendChild(button);
    });
  }

  function waitForLanguageSelection(screen) {
    return new Promise((resolve) => {
      const list = screen.querySelector("#languageOptionsList");
      if (!list) {
        resolve(window.AppLanguageRegistry.defaultCode);
        return;
      }

      let settled = false;
      const finish = (code) => {
        if (settled) return;
        settled = true;
        list.querySelectorAll(".language-option-btn").forEach((button) => {
          button.disabled = true;
        });
        resolve(code);
      };

      list.addEventListener("click", (event) => {
        const button = event.target.closest("[data-lang-code]");
        if (!button || button.disabled) return;
        finish(button.dataset.langCode);
      });
    });
  }

  function hideLaunchScreen(element) {
    if (!element) return;
    element.hidden = true;
    element.setAttribute("aria-hidden", "true");
  }

  function hideAllLaunchScreens(splash, languageScreen) {
    hideLaunchScreen(splash);
    hideLaunchScreen(languageScreen);
  }

  function revealApplication(appRoot) {
    document.body.classList.remove("app-launching");
    if (appRoot) {
      appRoot.hidden = false;
      appRoot.removeAttribute("aria-hidden");
    }
  }

  async function initializeLanguage(code) {
    const activeLanguage = await window.AppI18n.init(code);
    await window.AppDataLoader.init(activeLanguage);
    return activeLanguage;
  }

  function bootApplicationOnce() {
    if (bootStarted) return;
    bootStarted = true;

    window.AppI18n.applyDataI18n(document);

    if (typeof window.bootAppUi !== "function") {
      return;
    }

    const studyCardTestParam = new URLSearchParams(window.location.search).get("study")
      || new URLSearchParams(window.location.search).get("card");

    if (typeof activateStudyCardTestMode === "function" && activateStudyCardTestMode(studyCardTestParam)) {
      return;
    }

    window.bootAppUi();
  }

  async function runLaunchFlow() {
    const splash = document.getElementById("appSplashScreen");
    const languageScreen = document.getElementById("appLanguageScreen");
    const appRoot = document.getElementById("appRoot");

    document.body.classList.add("app-launching");
    if (appRoot) appRoot.hidden = true;
    if (languageScreen) languageScreen.hidden = true;

    const minSplashDelay = delay(SPLASH_DURATION_MS);
    let savedLanguage = getSavedLanguage();
    let needsLanguagePicker = !savedLanguage || !window.AppLanguageRegistry.isValid(savedLanguage);

    if (needsLanguagePicker && savedLanguage && !window.AppLanguageRegistry.isValid(savedLanguage)) {
      clearSavedLanguage();
      savedLanguage = null;
    }

    if (needsLanguagePicker) {
      await minSplashDelay;
      hideLaunchScreen(splash);
      if (languageScreen) {
        languageScreen.hidden = false;
        languageScreen.removeAttribute("aria-hidden");
        renderLanguageOptions(languageScreen.querySelector("#languageOptionsList"));
        savedLanguage = await waitForLanguageSelection(languageScreen);
        saveLanguage(savedLanguage);
        hideAllLaunchScreens(splash, languageScreen);
        revealApplication(appRoot);
      }
      await initializeLanguage(savedLanguage);
    } else {
      const initPromise = initializeLanguage(savedLanguage);
      await Promise.all([minSplashDelay, initPromise]);
      hideAllLaunchScreens(splash, languageScreen);
      revealApplication(appRoot);
    }

    bootApplicationOnce();
  }

  async function openLanguagePicker() {
    const languageScreen = document.getElementById("appLanguageScreen");
    if (!languageScreen) return false;

    renderLanguageOptions(languageScreen.querySelector("#languageOptionsList"));
    languageScreen.hidden = false;
    languageScreen.removeAttribute("aria-hidden");
    const selectedCode = await waitForLanguageSelection(languageScreen);
    hideLaunchScreen(languageScreen);

    if (!selectedCode || selectedCode === window.AppI18n.getCurrentLanguage()) {
      return false;
    }

    saveLanguage(selectedCode);
    await window.AppI18n.switchLanguage(selectedCode);
    return true;
  }

  window.AppLaunch = {
    run: runLaunchFlow,
    renderLanguageOptions,
    openLanguagePicker,
    SPLASH_DURATION_MS
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", runLaunchFlow);
  } else {
    runLaunchFlow();
  }
})();
