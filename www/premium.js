(function () {
  "use strict";

  // X Orbiglot Premium — Google Play abonements (tikai Android lietotnē).
  // Tīmekļa versijā un iOS saturs netiek bloķēts.
  // Play Console: abonements "premium" ar bāzes plāniem "monthly" un "yearly".
  var PRODUCT_ID = "premium";
  var PLANS = ["monthly", "yearly"];
  var STORAGE_KEY = "premiumActive";

  // Dāvanu kodi: lietotnē glabājas tikai SHA-256 nospiedumi (sāls + kods bez domuzīmēm, lielajiem burtiem).
  // Derīgs kods atbloķē Premium uz šīs ierīces pastāvīgi. Kodu atsauc, izņemot tā nospiedumu.
  var GIFT_KEY = "premiumGift";
  var GIFT_SALT = "x-orbiglot-gift-v1:";
  var GIFT_HASHES = [
    "2df8a2d3d319bc6c5e9da1468a8eaa56896ff3dfee0d236d6f64214af651de19",
    "3e4c67b90f932d689e91c743bac25a7efb741111e0cae0d7bf3afdbea6dd6cc2",
    "af3b123a3231bb29a5b60650d8d403f69eb27039ac133e2d04669a3e6f57fb95",
    "2223c3ddd69e948778b9430fa1f0db40a98d5f071a7de39497ee6e5476e138ba",
    "cadefcb791ed7bb22d8e8f7bf14088cd16169e0aac2ce2c6ec8ea9d33ca69387"
  ];

  // Bez maksas: A1 kartītes, Kurss → Izruna, Artikuli, Vietniekvārdi, Nodarbības 1–3.
  var FREE_GROUPS = { A1: true };
  var FREE_LESSONS = { kurssLesson1: true, kurssLesson2: true, kurssLesson3: true };
  var LOCKED_COURSE_SECTIONS = { verbBasics: true, sentenceStructure: true };

  var listeners = [];
  var products = {};
  var busy = false;
  var overlay = null;

  function store() {
    return window.store || {
      getItem: function (k) { try { return window.localStorage.getItem(k); } catch (e) { return null; } },
      setItem: function (k, v) { try { window.localStorage.setItem(k, v); } catch (e) { /* nav krātuves */ } }
    };
  }

  function plugin() {
    var cap = window.Capacitor;
    return cap && cap.Plugins ? cap.Plugins.NativePurchases || null : null;
  }

  function gatingActive() {
    var cap = window.Capacitor;
    if (!cap || typeof cap.getPlatform !== "function") return false;
    var native = typeof cap.isNativePlatform === "function" ? cap.isNativePlatform() : true;
    return native && cap.getPlatform() === "android";
  }

  var premium = store().getItem(STORAGE_KEY) === "1";
  var gift = store().getItem(GIFT_KEY) === "1";

  function tr(key, params) {
    if (window.AppI18n && typeof window.AppI18n.t === "function") {
      var value = window.AppI18n.t(key, params);
      if (value != null && value !== key) return value;
    }
    return key;
  }

  function isPremium() {
    return !gatingActive() || premium || gift;
  }

  function isLocked(kind, id) {
    if (isPremium()) return false;
    if (kind === "group") return !FREE_GROUPS[id];
    if (kind === "verbs") return true;
    if (kind === "lesson") return !FREE_LESSONS[id];
    if (kind === "course") return !!LOCKED_COURSE_SECTIONS[id];
    return false;
  }

  function emit() {
    var value = isPremium();
    listeners.forEach(function (fn) {
      try { fn(value); } catch (e) { console.error(e); }
    });
  }

  function setPremium(value) {
    var next = !!value;
    var changed = next !== premium;
    premium = next;
    store().setItem(STORAGE_KEY, next ? "1" : "0");
    if (changed) emit();
  }

  function normalizeCode(code) {
    return String(code || "").toUpperCase().replace(/[^A-Z0-9]/g, "");
  }

  function sha256Hex(text) {
    var subtle = window.crypto && window.crypto.subtle;
    if (!subtle || typeof TextEncoder === "undefined") return Promise.reject(new Error("no crypto"));
    return subtle.digest("SHA-256", new TextEncoder().encode(text)).then(function (buf) {
      return Array.prototype.map.call(new Uint8Array(buf), function (b) {
        return ("0" + b.toString(16)).slice(-2);
      }).join("");
    });
  }

  function redeemCode(code) {
    var normalized = normalizeCode(code);
    if (normalized.length < 8) return Promise.resolve(false);
    return sha256Hex(GIFT_SALT + normalized).then(function (hash) {
      if (GIFT_HASHES.indexOf(hash) < 0) return false;
      gift = true;
      store().setItem(GIFT_KEY, "1");
      emit();
      return true;
    }).catch(function () { return false; });
  }

  function onChange(fn) {
    if (typeof fn === "function") listeners.push(fn);
  }

  function refresh() {
    var p = plugin();
    if (!gatingActive() || !p || typeof p.getPurchases !== "function") return Promise.resolve(isPremium());
    return p.getPurchases({ productType: "subs" }).then(function (result) {
      var list = (result && result.purchases) || [];
      var active = list.some(function (item) {
        return item && item.productIdentifier === PRODUCT_ID && String(item.purchaseState) === "1";
      });
      setPremium(active);
      return active;
    }).catch(function (error) {
      // Bez savienojuma paliek pēdējais zināmais stāvoklis.
      console.warn("[Premium] getPurchases:", error);
      return isPremium();
    });
  }

  function loadProducts() {
    var p = plugin();
    if (!p || typeof p.getProducts !== "function") return Promise.resolve(products);
    return p.getProducts({ productIdentifiers: [PRODUCT_ID], productType: "subs" }).then(function (result) {
      var list = (result && result.products) || [];
      products = {};
      list.forEach(function (item) {
        if (!item || item.offerId) return;
        if (PLANS.indexOf(item.identifier) >= 0) products[item.identifier] = item;
      });
      return products;
    });
  }

  function purchase(plan) {
    var p = plugin();
    if (!p || busy) return Promise.resolve(false);
    busy = true;
    setStatus(tr("premium.processing"));
    var options = { productIdentifier: PRODUCT_ID, planIdentifier: plan, productType: "subs" };
    if (products[plan] && products[plan].offerToken) options.offerToken = products[plan].offerToken;
    return p.purchaseProduct(options).then(function () {
      return refresh();
    }).then(function (active) {
      busy = false;
      if (active) {
        setStatus(tr("premium.success"));
        setTimeout(closePaywall, 1200);
      } else {
        setStatus(tr("premium.pending"));
      }
      return active;
    }).catch(function (error) {
      busy = false;
      var code = error && error.code;
      setStatus(code === "USER_CANCELED" ? "" : tr("premium.error"));
      return false;
    });
  }

  function restore() {
    var p = plugin();
    if (!p || busy) return Promise.resolve(false);
    busy = true;
    setStatus(tr("premium.processing"));
    var step = typeof p.restorePurchases === "function" ? p.restorePurchases() : Promise.resolve();
    return step.catch(function () { /* turpina ar pārbaudi */ }).then(refresh).then(function (active) {
      busy = false;
      setStatus(active ? tr("premium.success") : tr("premium.nothingToRestore"));
      if (active) setTimeout(closePaywall, 1200);
      return active;
    });
  }

  function manage() {
    var p = plugin();
    if (p && typeof p.manageSubscriptions === "function") {
      p.manageSubscriptions().catch(function () { /* nav pieejams */ });
    }
  }

  // ---------- Abonēšanas ekrāns ----------

  function injectStyles() {
    if (document.getElementById("premiumStyles")) return;
    var css = [
      ".premium-overlay{position:fixed;inset:0;z-index:2147483000;display:flex;align-items:flex-end;justify-content:center;background:rgba(0,0,0,.72);padding:16px;padding-bottom:max(16px,env(safe-area-inset-bottom));}",
      "@media (min-height:640px){.premium-overlay{align-items:center;}}",
      ".premium-sheet{position:relative;width:100%;max-width:420px;max-height:100%;overflow:auto;background:linear-gradient(160deg,#101a25,#0b1118);border:1px solid #263544;border-radius:18px;padding:22px 18px 16px;color:#f5f8fc;box-shadow:0 20px 60px rgba(0,0,0,.6);font:inherit;}",
      ".premium-close{position:absolute;top:10px;right:12px;width:36px;height:36px;border-radius:50%;border:1px solid #263544;background:#111923;color:#cfd8e3;font-size:1.3rem;line-height:1;}",
      ".premium-title{margin:4px 40px 6px 0;font-size:1.35rem;font-weight:800;}",
      ".premium-sub{margin:0 0 14px;color:#aeb8c7;font-size:.92rem;line-height:1.35;}",
      ".premium-list{list-style:none;margin:0 0 16px;padding:0;display:grid;gap:8px;}",
      ".premium-list li{display:flex;gap:10px;align-items:flex-start;font-size:.95rem;line-height:1.3;}",
      ".premium-list li::before{content:'\\2713';flex:0 0 auto;width:22px;height:22px;border-radius:50%;display:grid;place-items:center;background:#16871f;color:#fff;font-size:.8rem;font-weight:800;}",
      ".premium-plans{display:grid;gap:10px;margin-bottom:12px;}",
      ".premium-plan{position:relative;width:100%;min-height:58px;padding:10px 14px;border-radius:14px;border:1px solid #2f4a66;background:#111923;color:#f5f8fc;display:flex;justify-content:space-between;align-items:center;gap:10px;font:inherit;font-weight:700;text-align:left;}",
      ".premium-plan.is-best{border-color:#2387ff;background:linear-gradient(100deg,#0f2f5c,#111923);}",
      ".premium-plan[disabled]{opacity:.55;}",
      ".premium-plan-price{font-weight:800;white-space:nowrap;}",
      ".premium-badge{position:absolute;top:-9px;left:14px;padding:2px 8px;border-radius:999px;background:#2387ff;color:#fff;font-size:.72rem;font-weight:800;}",
      ".premium-status{min-height:1.3em;margin:4px 0 8px;color:#ffd84a;font-size:.88rem;text-align:center;}",
      ".premium-links{display:flex;justify-content:center;gap:18px;flex-wrap:wrap;margin-bottom:8px;}",
      ".premium-link{background:none;border:0;color:#8cc4ff;font:inherit;font-size:.88rem;text-decoration:underline;padding:6px 2px;}",
      ".premium-note{margin:0;color:#7f8a99;font-size:.76rem;line-height:1.35;text-align:center;}",
      ".premium-lock{margin-left:6px;font-size:.85em;}",
      ".premium-code{display:flex;gap:8px;margin:0 0 10px;}",
      ".premium-code[hidden]{display:none;}",
      ".premium-code-input{flex:1 1 auto;min-width:0;padding:10px 12px;border-radius:10px;border:1px solid #2f4a66;background:#0b1118;color:#f5f8fc;font:inherit;letter-spacing:.06em;text-transform:uppercase;}",
      ".premium-code-apply{flex:0 0 auto;padding:10px 14px;border-radius:10px;border:0;background:#2387ff;color:#fff;font:inherit;font-weight:800;}"
    ].join("\n");
    var style = document.createElement("style");
    style.id = "premiumStyles";
    style.textContent = css;
    document.head.appendChild(style);
  }

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  }

  function setStatus(text) {
    var node = overlay && overlay.querySelector(".premium-status");
    if (node) node.textContent = text || "";
  }

  function planButton(plan) {
    var button = el("button", "premium-plan" + (plan === "yearly" ? " is-best" : ""));
    button.type = "button";
    button.setAttribute("data-plan", plan);
    if (plan === "yearly") button.appendChild(el("span", "premium-badge", tr("premium.bestValue")));
    button.appendChild(el("span", "premium-plan-name", tr(plan === "yearly" ? "premium.yearly" : "premium.monthly")));
    button.appendChild(el("span", "premium-plan-price", "…"));
    button.disabled = true;
    button.addEventListener("click", function () { purchase(plan); });
    return button;
  }

  function fillPrices() {
    if (!overlay) return;
    PLANS.forEach(function (plan) {
      var button = overlay.querySelector('[data-plan="' + plan + '"]');
      if (!button) return;
      var product = products[plan];
      var priceNode = button.querySelector(".premium-plan-price");
      if (product && product.priceString) {
        priceNode.textContent = tr(plan === "yearly" ? "premium.perYear" : "premium.perMonth", { price: product.priceString });
        button.disabled = false;
      } else {
        priceNode.textContent = "—";
        button.disabled = true;
      }
    });
  }

  function closePaywall() {
    if (overlay && overlay.parentNode) overlay.parentNode.removeChild(overlay);
    overlay = null;
    document.removeEventListener("keydown", onKey);
  }

  function onKey(event) {
    if (event.key === "Escape") closePaywall();
  }

  function openPaywall() {
    if (!gatingActive()) return;
    injectStyles();
    closePaywall();

    overlay = el("div", "premium-overlay");
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");
    overlay.setAttribute("aria-label", tr("premium.title"));
    overlay.addEventListener("click", function (event) {
      if (event.target === overlay) closePaywall();
    });

    var sheet = el("div", "premium-sheet");
    var close = el("button", "premium-close", "×");
    close.type = "button";
    close.setAttribute("aria-label", tr("buttons.close"));
    close.addEventListener("click", closePaywall);
    sheet.appendChild(close);

    sheet.appendChild(el("h2", "premium-title", tr("premium.title")));
    sheet.appendChild(el("p", "premium-sub", tr("premium.subtitle")));

    var list = el("ul", "premium-list");
    ["premium.benefitLevels", "premium.benefitVerbs", "premium.benefitSentences", "premium.benefitCourse"].forEach(function (key) {
      list.appendChild(el("li", null, tr(key)));
    });
    sheet.appendChild(list);

    var plans = el("div", "premium-plans");
    plans.appendChild(planButton("yearly"));
    plans.appendChild(planButton("monthly"));
    sheet.appendChild(plans);

    sheet.appendChild(el("p", "premium-status", tr("premium.loading")));

    var links = el("div", "premium-links");
    var restoreBtn = el("button", "premium-link", tr("premium.restore"));
    restoreBtn.type = "button";
    restoreBtn.addEventListener("click", restore);
    links.appendChild(restoreBtn);
    var manageBtn = el("button", "premium-link", tr("premium.manage"));
    manageBtn.type = "button";
    manageBtn.addEventListener("click", manage);
    links.appendChild(manageBtn);
    var codeBtn = el("button", "premium-link", tr("premium.haveCode"));
    codeBtn.type = "button";
    links.appendChild(codeBtn);
    sheet.appendChild(links);

    var codeRow = el("form", "premium-code");
    codeRow.hidden = true;
    var codeInput = el("input", "premium-code-input");
    codeInput.type = "text";
    codeInput.autocomplete = "off";
    codeInput.setAttribute("autocapitalize", "characters");
    codeInput.setAttribute("spellcheck", "false");
    codeInput.placeholder = tr("premium.codePlaceholder");
    codeInput.setAttribute("aria-label", tr("premium.codePlaceholder"));
    var codeApply = el("button", "premium-code-apply", tr("premium.codeApply"));
    codeApply.type = "submit";
    codeRow.appendChild(codeInput);
    codeRow.appendChild(codeApply);
    codeRow.addEventListener("submit", function (event) {
      event.preventDefault();
      if (busy) return;
      busy = true;
      redeemCode(codeInput.value).then(function (ok) {
        busy = false;
        setStatus(ok ? tr("premium.codeSuccess") : tr("premium.codeInvalid"));
        if (ok) setTimeout(closePaywall, 1200);
      });
    });
    codeBtn.addEventListener("click", function () {
      codeRow.hidden = !codeRow.hidden;
      if (!codeRow.hidden) codeInput.focus();
    });
    sheet.appendChild(codeRow);

    sheet.appendChild(el("p", "premium-note", tr("premium.note")));

    overlay.appendChild(sheet);
    document.body.appendChild(overlay);
    document.addEventListener("keydown", onKey);

    loadProducts().then(function () {
      fillPrices();
      var any = PLANS.some(function (plan) { return products[plan]; });
      setStatus(any ? "" : tr("premium.unavailable"));
    }).catch(function (error) {
      console.warn("[Premium] getProducts:", error);
      fillPrices();
      setStatus(tr("premium.unavailable"));
    });
  }

  function requirePremium(kind, id, action) {
    if (isLocked(kind, id)) {
      openPaywall();
      return false;
    }
    if (typeof action === "function") action();
    return true;
  }

  window.AppPremium = {
    isPremium: isPremium,
    isLocked: isLocked,
    isGatingActive: gatingActive,
    require: requirePremium,
    openPaywall: openPaywall,
    closePaywall: closePaywall,
    refresh: refresh,
    restore: restore,
    manage: manage,
    redeemCode: redeemCode,
    onChange: onChange
  };

  function start() {
    if (!gatingActive()) return;
    refresh();
    var p = plugin();
    if (p && typeof p.addListener === "function") {
      try {
        p.addListener("transactionUpdated", function () { refresh(); });
      } catch (e) { /* nav atbalstīts */ }
    }
    document.addEventListener("visibilitychange", function () {
      if (document.visibilityState === "visible") refresh();
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
