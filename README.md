# Vācu Valoda • LV-DE

Vācu valodas mācību lietotne latviešu valodā runājošiem — kartītes, mācību kursi, teikumi, darbības vārdi un progresa izsekošana. Lietotne darbojas pilnībā **lokāli** (bez servera, bez konta, bez analītikas) un ir iesaiņota ar [Capacitor](https://capacitorjs.com/) iOS un Android platformām, kā arī pieejama kā PWA.

- **Bundle ID (iOS/Android):** `com.vacuvaloda.app`
- **App nosaukums:** Vācu Valoda
- **Versija:** 1.0 (build 1)

## Projekta struktūra

```
index.html, style.css, ui.js, wordRain.js, storage.js, groups.js  — tīmekļa lietotnes pirmkods
data/                — vārdu krājums un mācību saturs (A1–C2, teikumi, darbības vārdi, lekcijas)
www/                 — sinhronizēta kopija, ko ielādē Capacitor (skat. "Izstrādes darbplūsma")
ios/App/             — Xcode projekts (Capacitor iOS apvalks)
android/             — Android Studio projekts (Capacitor Android apvalks)
docs/privacy.html    — publiski pieejama privātuma politika
docs_and_rules/       — satura un UI kvalitātes standarti
scripts/             — satura audita un build skripti (PowerShell/Node)
```

## Izstrādes darbplūsma

Tīmekļa lietotnes pirmkods dzīvo saknē (`index.html`, `ui.js`, `style.css`, `data/`, `icons/`). Capacitor lasa no `www/` mapes (skat. `capacitor.config.json` → `webDir: "www"`), tāpēc pēc katras izmaiņas saknes failos tā jāsinhronizē uz `www/`:

```bash
npm run sync:www     # kopē root failus → www/ (PowerShell skripts)
npm run cap:sync      # sinhronizē www/ un palaiž `npx cap sync` (abas platformas)
npm run cap:ios       # atver iOS projektu Xcode
npm run cap:android   # atver Android projektu Android Studio
```

> **Piezīme:** `scripts/sync-web-to-www.ps1` ir PowerShell skripts. Uz Linux/macOS bez PowerShell to var aizstāt ar manuālu kopēšanu:
> ```bash
> cp index.html manifest.json ui.js style.css groups.js storage.js wordRain.js www/
> rm -rf www/data www/icons && cp -r data www/data && cp -r icons www/icons
> ```

## Ikonas un splash ekrāni

Avota faili: `icon.png` (1024×1024) un `splash.png` (2732×2732) repozitorija saknē. Lai pārģenerētu visu platformu ikonu/splash komplektus:

```bash
npm run assets:generate   # capacitor-assets generate + PWA ikonu normalizācija
npm run cap:sync
```

iOS `AppIcon.appiconset` un `Splash.imageset`, kā arī Android `mipmap-*`/`drawable-*` resursi jau ir izpildīti un iekļauti repozitorijā.

---

## App Store (iOS) publicēšanas checklists

Šis saraksts atspoguļo pašreizējo statusu. Atzīmes ar ✅ ir izpildītas pirmkodā/repozitorijā. Atzīmes ar ⬜ prasa darbības **Apple Developer kontā, Xcode vai App Store Connect** — tās nevar veikt automatizēts aģents bez piekļuves šiem rīkiem un kontam, tās jāveic izstrādātājam manuāli.

### Pirmkods un konfigurācija

- ✅ `capacitor.config.json` un `Info.plist` bundle ID sakrīt (`com.vacuvaloda.app`).
- ✅ `CFBundleDisplayName` = "Vācu Valoda".
- ✅ `MARKETING_VERSION` = 1.0, `CURRENT_PROJECT_VERSION` = 1 (`ios/App/App.xcodeproj/project.pbxproj`).
- ✅ `LSApplicationCategoryType` = `public.app-category.education` (pievienots `Info.plist`).
- ✅ `ITSAppUsesNonExemptEncryption` = `false` (lietotne neizmanto nestandarta šifrēšanu — tikai standarta HTTPS/TLS, ja vispār).
- ✅ App ikona (`AppIcon.appiconset`) un palaišanas ekrāns (`Splash.imageset`, `LaunchScreen.storyboard`) ir iekļauti.
- ✅ Privātuma politika (`docs/privacy.html`) sagatavota latviski, apraksta lokālo datu glabāšanu bez trešo pušu servisiem.
- ✅ Lietotnē ("Kurss" izvēlnē) pievienota saite uz privātuma politiku.
- ⬜ **GitHub Pages jāieslēdz**, lai `docs/privacy.html` būtu publiski pieejams pastāvīgā URL (Settings → Pages → Source: `main` branch, `/docs` mape). Pēc ieslēgšanas URL būs `https://sandrisbrikmanis-rgb.github.io/de-lv-app/privacy.html` — šis URL jau ir izmantots gan lietotnē, gan zemāk minētajā App Store Connect solī.

### Apple Developer / Xcode (jāveic lokāli, ar Apple Developer kontu)

- ⬜ Reģistrēties/pieslēgties [Apple Developer Program](https://developer.apple.com/programs/) (maksas konts, nepieciešams App Store publicēšanai).
- ⬜ Xcode → `ios/App/App.xcodeproj` → Signing & Capabilities → izvēlēties **Team** (pašlaik `CODE_SIGN_STYLE = Automatic`, bet `DEVELOPMENT_TEAM` nav iestatīts repozitorijā, jo tas ir per-developer iestatījums).
- ⬜ Reģistrēt App ID `com.vacuvaloda.app` Apple Developer portālā (ja vēl nav reģistrēts).
- ⬜ `npm run cap:sync` → Xcode → **Product → Archive** → **Distribute App** → App Store Connect.
- ⬜ Validēt un augšupielādēt būvējumu (build) App Store Connect / TestFlight.

### App Store Connect (produkta lapa)

- ⬜ Izveidot app ierakstu App Store Connect ar bundle ID `com.vacuvaloda.app`.
- ⬜ Aizpildīt aprakstu, atslēgvārdus, kategoriju (Izglītība/Education), atbalsta un mārketinga URL.
- ⬜ Pievienot privātuma politikas URL (skat. GitHub Pages soli augstāk).
- ⬜ Augšupielādēt ekrānuzņēmumus (6.7", 6.5", 5.5" iPhone; iPad, ja atbalstīts — `TARGETED_DEVICE_FAMILY = 1,2`).
- ⬜ Aizpildīt "App Privacy" (Privacy Nutrition Label) sadaļu — lietotne nevāc nekādus datus, viss glabājas tikai lokāli (`localStorage`), tāpēc atbilde uz visiem datu vākšanas jautājumiem ir "Data Not Collected".
- ⬜ Aizpildīt eksporta atbilstības (export compliance) anketu — atbilde "NO" (izmanto tikai standarta šifrēšanu), sakrīt ar `ITSAppUsesNonExemptEncryption = false`.
- ⬜ Iestatīt vecuma reitingu (age rating) — sagaidāms 4+, jo nav lietotāju ģenerēta satura vai tiešsaistes funkciju.
- ⬜ Iesniegt izskatīšanai (Submit for Review).

### Ieteicams pirms iesniegšanas

- Pārbaudīt lietotni fiziskā iPhone un iPad ierīcē (vai TestFlight beta grupā).
- Pārliecināties, ka visi "Kurss" saturi (lekcijas, izruna, artikuli) atveras bez kļūdām WebView vidē.
- Pārskatīt `docs_and_rules/*.md` satura kvalitātes standartus attiecībā uz jauno/mainīto mācību saturu.

---

## Satura kvalitātes standarti

Skatīt `docs_and_rules/` mapi:
- `APP_QUALITY_STANDARD.md` — vispārīgie datu/pirmkoda kvalitātes noteikumi.
- `STUDY_CARD_RULES.md` un `COMPARISON_STUDY_RULES.md` — padziļināto mācību kartīšu struktūra.
- `UI_UX_VISUAL_COLOR_RULES.md` — vizuālā stila un krāsu konsekvences noteikumi.
