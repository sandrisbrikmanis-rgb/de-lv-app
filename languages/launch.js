(function () {
  const SPLASH_DURATION_MS = 4000;
  const STORAGE_KEY = window.AppLanguageRegistry.storageKey;

  function delay(ms) {
    return new Promise((resolve) => window.setTimeout(resolve, ms));
  }

  function getSavedLanguage() {
    try {
      return window.store?.getItem(STORAGE_KEY) || null;
    } catch (error) {
      return null;
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
      list.addEventListener("click", (event) => {
        const button = event.target.closest("[data-lang-code]");
        if (!button) return;
        resolve(button.dataset.langCode);
      }, { once: true });
    });
  }

  async function runLaunchFlow() {
    const splash = document.getElementById("appSplashScreen");
    const languageScreen = document.getElementById("appLanguageScreen");
    const appRoot = document.getElementById("appRoot");

    document.body.classList.add("app-launching");
    if (appRoot) appRoot.hidden = true;

    const splashStartedAt = Date.now();
    let savedLanguage = getSavedLanguage();

    if (!savedLanguage || !window.AppLanguageRegistry.isValid(savedLanguage)) {
      await delay(SPLASH_DURATION_MS);
      if (splash) splash.hidden = true;
      if (languageScreen) {
        languageScreen.hidden = false;
        renderLanguageOptions(languageScreen.querySelector("#languageOptionsList"));
        savedLanguage = await waitForLanguageSelection(languageScreen);
        saveLanguage(savedLanguage);
        if (languageScreen) languageScreen.hidden = true;
      }
    } else {
      const elapsed = Date.now() - splashStartedAt;
      if (elapsed < SPLASH_DURATION_MS) {
        await delay(SPLASH_DURATION_MS - elapsed);
      }
      if (splash) splash.hidden = true;
    }

    const activeLanguage = await window.AppI18n.init(savedLanguage);
    await window.AppDataLoader.init(activeLanguage);

    document.body.classList.remove("app-launching");
    if (appRoot) appRoot.hidden = false;

    window.AppI18n.applyDataI18n(document);

    if (typeof window.bootAppUi === "function") {
      const studyCardTestParam = new URLSearchParams(window.location.search).get("study")
        || new URLSearchParams(window.location.search).get("card");
      if (!activateStudyCardTestMode(studyCardTestParam)) {
        window.bootAppUi();
      }
    } else {
      document.addEventListener("bootAppUi", () => {
        if (typeof window.bootAppUi === "function") {
          window.bootAppUi();
        }
      }, { once: true });
    }
  }

  window.AppLaunch = {
    run: runLaunchFlow,
    renderLanguageOptions,
    SPLASH_DURATION_MS
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", runLaunchFlow);
  } else {
    runLaunchFlow();
  }
})();
