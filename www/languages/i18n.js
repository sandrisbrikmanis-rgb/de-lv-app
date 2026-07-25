(function () {
  const FALLBACK_CODE = window.AppLanguageRegistry?.defaultCode || "lv";
  let nativeLanguage = FALLBACK_CODE;
  let strings = {};
  let fallbackStrings = null;
  const loadedUiScripts = new Set();

  function cloneStrings(source) {
    return JSON.parse(JSON.stringify(source || {}));
  }

  function getByPath(source, key) {
    return String(key || "")
      .split(".")
      .reduce((value, part) => (value && typeof value === "object" ? value[part] : undefined), source);
  }

  function interpolate(template, params) {
    if (!params || typeof template !== "string") return template;
    return template.replace(/\{(\w+)\}/g, (match, name) => {
      if (Object.prototype.hasOwnProperty.call(params, name)) {
        const value = params[name];
        return value == null ? "" : String(value);
      }
      return match;
    });
  }

  function resolveStringValue(value, params) {
    if (value == null) return null;
    if (typeof value === "function") return value(params || {});
    if (typeof value !== "string") return null;
    return interpolate(value, params);
  }

  function loadScript(src) {
    return new Promise((resolve, reject) => {
      const existing = document.querySelector(`script[data-lang-ui="${src}"]`);
      if (existing) {
        resolve();
        return;
      }
      const script = document.createElement("script");
      script.src = src;
      script.dataset.langUi = src;
      script.onload = () => resolve();
      script.onerror = () => reject(new Error(`Failed to load UI strings: ${src}`));
      document.head.appendChild(script);
    });
  }

  async function fetchUiStrings(code) {
    const entry = window.AppLanguageRegistry.get(code);
    if (!entry) {
      throw new Error(`Unknown native language code: ${code}`);
    }
    if (!loadedUiScripts.has(entry.uiPath)) {
      await loadScript(entry.uiPath);
      loadedUiScripts.add(entry.uiPath);
    }
    const uiStrings = window.LANGUAGE_UI_STRINGS;
    if (!uiStrings || uiStrings.__langCode !== code) {
      throw new Error(`UI strings for ${code} were not registered`);
    }
    return cloneStrings(uiStrings);
  }

  async function ensureFallbackStrings() {
    if (fallbackStrings) return fallbackStrings;
    fallbackStrings = await fetchUiStrings(FALLBACK_CODE);
    return fallbackStrings;
  }

  function syncNativeLanguage(code) {
    nativeLanguage = code;
    if (window.AppLanguageContext && typeof window.AppLanguageContext.setNativeLanguage === "function") {
      window.AppLanguageContext.setNativeLanguage(code);
    }
  }

  function applyDataI18n(root) {
    const scope = root || document;
    scope.querySelectorAll("[data-i18n]").forEach((node) => {
      const key = node.getAttribute("data-i18n");
      const value = window.AppI18n.t(key);
      if (value == null || value === key) return;
      const attr = node.getAttribute("data-i18n-attr");
      if (attr) {
        node.setAttribute(attr, value);
      } else if (node.tagName === "INPUT" || node.tagName === "TEXTAREA") {
        if (node.hasAttribute("placeholder")) {
          node.setAttribute("placeholder", value);
        } else {
          node.value = value;
        }
      } else {
        node.textContent = value;
      }
    });
    scope.querySelectorAll("[data-i18n-html]").forEach((node) => {
      const key = node.getAttribute("data-i18n-html");
      const value = window.AppI18n.t(key);
      if (value != null && value !== key) {
        node.innerHTML = value;
      }
    });
  }

  window.AppI18n = {
    storageKey: window.AppLanguageRegistry.storageKey,
    async init(code) {
      if (!window.AppLanguageRegistry.isValid(code)) {
        throw new Error(`Invalid native language code: ${code}`);
      }
      await ensureFallbackStrings();
      strings = await fetchUiStrings(code);
      syncNativeLanguage(code);
      document.documentElement.lang = code;
      return code;
    },
    async switchLanguage(code) {
      if (!window.AppLanguageRegistry.isValid(code)) {
        return false;
      }
      await window.AppI18n.init(code);
      if (window.AppLanguageContext && typeof window.AppLanguageContext.saveNativeLanguageToStorage === "function") {
        window.AppLanguageContext.saveNativeLanguageToStorage(code);
      } else {
        window.store.setItem(window.AppI18n.storageKey, code);
      }
      if (typeof window.refreshAppLanguageUi === "function") {
        window.refreshAppLanguageUi(code);
      }
      return true;
    },
    getNativeLanguage() {
      return nativeLanguage;
    },
    getTargetLanguage() {
      return window.AppLanguageContext?.getTargetLanguage?.() || "de";
    },
    getCurrentLanguage() {
      return nativeLanguage;
    },
    getNativeCode() {
      if (window.AppLanguageContext && typeof window.AppLanguageContext.getNativeCode === "function") {
        return window.AppLanguageContext.getNativeCode();
      }
      const entry = window.AppLanguageRegistry.get(nativeLanguage);
      return entry ? entry.nativeCode : "LV";
    },
    getTargetCode() {
      return window.AppLanguageContext?.getTargetCode?.() || "DE";
    },
    getLanguageEntry() {
      return window.AppLanguageRegistry.get(nativeLanguage);
    },
    t(key, params) {
      const primary = resolveStringValue(getByPath(strings, key), params);
      if (primary != null) return primary;

      if (nativeLanguage !== FALLBACK_CODE && fallbackStrings) {
        const fallback = resolveStringValue(getByPath(fallbackStrings, key), params);
        if (fallback != null) return fallback;
      }

      return String(key || "");
    },
    wordCountLabel(count) {
      const n = Number(count) || 0;
      const mod10 = n % 10;
      const mod100 = n % 100;
      if (mod100 >= 11 && mod100 <= 19) return window.AppI18n.t("plural.wordsMany");
      if (mod10 === 1) return window.AppI18n.t("plural.wordOne");
      return window.AppI18n.t("plural.wordsFew");
    },
    applyDataI18n,
    onLanguageReady(callback) {
      if (typeof callback === "function") {
        callback(nativeLanguage);
      }
    }
  };
})();
