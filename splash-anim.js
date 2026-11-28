(function () {
  "use strict";
  // X Orbiglot — ielādes ekrāna logo animācija un skaņa.
  // Sāk, kad visi slāņi ir ielādēti (ne ilgāk par 700 ms gaidīšanu); citādi rāda statisku logo.
  var splash = document.getElementById("appSplashScreen");
  if (!splash) return;
  var holder = splash.querySelector(".splash-anim");
  if (!holder) return;

  var reduced = false;
  try {
    reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  } catch (e) { reduced = false; }

  function setStatic() {
    splash.classList.remove("is-animated");
    splash.classList.add("is-static");
  }

  if (reduced) {
    setStatic();
    return;
  }

  var audio = null;
  try {
    audio = new Audio("./assets/splash/splash.mp3");
    audio.preload = "auto";
    audio.volume = 0.8;
  } catch (e) { audio = null; }

  var started = false;
  function start() {
    if (started) return;
    started = true;
    splash.classList.add("is-animated");
    if (audio) {
      try {
        var p = audio.play();
        if (p && typeof p.catch === "function") p.catch(function () { /* pārlūks neļauj atskaņot bez pieskāriena */ });
      } catch (e) { /* bez skaņas */ }
    }
  }

  var images = Array.prototype.slice.call(holder.querySelectorAll("img"));
  var pending = images.length;
  function done() {
    pending -= 1;
    if (pending <= 0) start();
  }
  images.forEach(function (img) {
    if (img.complete && img.naturalWidth > 0) {
      done();
    } else {
      img.addEventListener("load", done, { once: true });
      img.addEventListener("error", done, { once: true });
    }
  });
  if (pending <= 0) start();

  window.setTimeout(function () {
    if (!started) {
      started = true;
      setStatic();
    }
  }, 700);
})();
