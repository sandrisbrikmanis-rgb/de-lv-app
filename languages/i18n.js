(function () {
  const FALLBACK_CODE = window.AppLanguageRegistry?.defaultCode || "lv";
  let currentCode = FALLBACK_CODE;
  let strings = {};
  const loadedUiScripts = new Set();

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

  async function loadUiStrings(code) {
    const entry = window.AppLanguageRegistry.get(code);
    if (!entry) {
      throw new Error(`Unknown language code: ${code}`);
    }
    if (!loadedUiScripts.has(entry.uiPath)) {
      await loadScript(entry.uiPath);
      loadedUiScripts.add(entry.uiPath);
    }
    const uiStrings = window.LANGUAGE_UI_STRINGS;
    if (!uiStrings || uiStrings.__langCode !== code) {
      throw new Error(`UI strings for ${code} were not registered`);
    }
    return uiStrings;
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
      const resolved = window.AppLanguageRegistry.isValid(code) ? code : FALLBACK_CODE;
      strings = await loadUiStrings(resolved);
      currentCode = resolved;
      document.documentElement.lang = resolved;
      return resolved;
    },
    getCurrentLanguage() {
      return currentCode;
    },
    getNativeCode() {
      const entry = window.AppLanguageRegistry.get(currentCode);
      return entry ? entry.nativeCode : "LV";
    },
    getLanguageEntry() {
      return window.AppLanguageRegistry.get(currentCode);
    },
    t(key, params) {
      const value = getByPath(strings, key);
      if (value == null) return key;
      if (typeof value === "function") return value(params || {});
      if (typeof value !== "string") return key;
      return interpolate(value, params);
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
        callback(currentCode);
      }
    }
  };
})();
