(function () {
  /**
   * Centralizēta valodu lomu konfigurācija.
   * nativeLanguage — lietotāja dzimtā/UI valoda (no localStorage.appLanguage).
   * targetLanguage — vienmēr apgūstamā mērķa valoda (šajā projektā: "de").
   */
  const TARGET_LANGUAGE = "de";
  const registry = window.AppLanguageRegistry;
  const storageKey = registry?.storageKey || "appLanguage";
  const defaultNativeLanguage = registry?.defaultCode || "lv";

  let nativeLanguage = defaultNativeLanguage;

  function isValidNativeLanguage(code) {
    return Boolean(registry && registry.isValid(code));
  }

  function setNativeLanguage(code) {
    if (isValidNativeLanguage(code)) {
      nativeLanguage = code;
      return true;
    }
    return false;
  }

  function readNativeLanguageFromStorage() {
    try {
      const value = window.store?.getItem(storageKey);
      const code = value == null ? null : String(value).trim();
      if (code && isValidNativeLanguage(code)) {
        nativeLanguage = code;
        return code;
      }
    } catch (error) {
      // ignore storage failures
    }
    return null;
  }

  function saveNativeLanguageToStorage(code) {
    if (!isValidNativeLanguage(code)) return false;
    window.store.setItem(storageKey, code);
    nativeLanguage = code;
    return true;
  }

  function getNativeCode() {
    const entry = registry?.get(nativeLanguage);
    return entry ? entry.nativeCode : String(nativeLanguage || defaultNativeLanguage).toUpperCase();
  }

  function getTargetCode() {
    return TARGET_LANGUAGE.toUpperCase();
  }

  function getLanguagePairLabel() {
    return `${getNativeCode()}-${getTargetCode()}`;
  }

  window.AppLanguageContext = {
    targetLanguage: TARGET_LANGUAGE,
    storageKey,
    directionTargetToNative: "de-native",
    directionNativeToTarget: "native-de",
    getNativeLanguage() {
      return nativeLanguage;
    },
    getTargetLanguage() {
      return TARGET_LANGUAGE;
    },
    setNativeLanguage,
    readNativeLanguageFromStorage,
    saveNativeLanguageToStorage,
    getNativeCode,
    getTargetCode,
    getLanguagePairLabel,
    isTargetToNativeDirection(direction) {
      return direction === "de-native" || direction === "de-lv";
    },
    isNativeToTargetDirection(direction) {
      return direction === "native-de" || direction === "lv-de";
    }
  };

  readNativeLanguageFromStorage();
})();
