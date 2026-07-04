# Vācu Valoda • LV-DE

Vācu valodas mācību lietotne latviešu valodā runājošiem — kartītes, mācību kursi, teikumi, darbības vārdi un progresa izsekošana. Lietotne darbojas pilnībā **lokāli** (bez servera, bez konta, bez analītikas) un ir iesaiņota ar [Capacitor](https://capacitorjs.com/) iOS un Android platformām, kā arī pieejama kā PWA.

- **Bundle ID (iOS/Android):** `com.vacuvaloda.app`
- **App nosaukums:** Vācu Valoda
- **Versija:** 1.0 (build 1)

## Projekta struktūra

```
index.html, style.css, ui.js, storage.js, groups.js  — tīmekļa lietotnes pirmkods
data/                — vārdu krājums un mācību saturs (A1–C2, teikumi, darbības vārdi, lekcijas)
www/                 — sinhronizēta kopija, ko ielādē Capacitor (skat. "Izstrādes darbplūsma")
ios/App/             — Xcode projekts (Capacitor iOS apvalks)
android/             — Android Studio projekts (Capacitor Android apvalks)
docs/                — GitHub Pages saknes mape (Settings → Pages → Source: `main` / `/docs`);
                       satur publicētā tīmekļa lietotnes kopiju (skat. "GitHub Pages publicēšana")
                       un `privacy.html` — publiski pieejamu privātuma politiku
docs_and_rules/       — satura un UI kvalitātes standarti
scripts/             — satura audita un build skripti (PowerShell/Node)
```

## Izstrādes darbplūsma

Tīmekļa lietotnes pirmkods dzīvo saknē (`index.html`, `ui.js`, `style.css`, `data/`, `icons/`). Capacitor lasa no `www/` mapes (skat. `capacitor.config.json` → `webDir: "www"`), tāpēc pēc katras izmaiņas saknes failos tā jāsinhronizē uz `www/`:

```bash
npm run sync:www     # kopē root failus → www/ (scripts/sync-web-to-www.js, Node — darbojas uz visām platformām)
npm run cap:sync      # sinhronizē www/ un palaiž `npx cap sync` (abas platformas)
npm run cap:ios       # atver iOS projektu Xcode
npm run cap:android   # atver Android projektu Android Studio
```

> **Piezīme:** `sync:www` agrāk izsauca `scripts/sync-web-to-www.ps1` (PowerShell), kas klusi neizdevās jebkurā Linux/macOS/CI/cloud-agent vidē bez PowerShell — tā bija viena no iemeslu, kāpēc izmaiņas reizēm nenonāca līdz `www/`. Tagad `sync:www` izmanto `scripts/sync-web-to-www.js` (tīrs Node.js), kas darbojas identiski visur. `.ps1` fails saglabāts repozitorijā kā atsauce Windows lietotājiem, bet vairs netiek izsaukts no `package.json`.

## Ikonas un splash ekrāni

Avota faili: `icon.png` (1024×1024) un `splash.png` (2732×2732) repozitorija saknē. Lai pārģenerētu visu platformu ikonu/splash komplektus:

```bash
npm run assets:generate   # capacitor-assets generate + PWA ikonu normalizācija
npm run cap:sync
```

iOS `AppIcon.appiconset` un `Splash.imageset`, kā arī Android `mipmap-*`/`drawable-*` resursi jau ir izpildīti un iekļauti repozitorijā.

## GitHub Pages publicēšana

GitHub Pages šim repozitorijam ir konfigurēts uz `main` zaru, `/docs` mapi (Settings → Pages → Source: Deploy from a branch). Tāpēc **publiskā vietne (`index.html`, saturs, `privacy.html`) tiek rādīta tieši no `docs/` mapes**, nevis no repozitorija saknes. Pēc katras izmaiņas saknes tīmekļa failos (`index.html`, `style.css`, `ui.js`, `data/`, `icons/` u.c.) tā jāsinhronizē uz `docs/`, pretējā gadījumā publiskā vietne rādīs vecu saturu (vai 404, ja `docs/index.html` nemaz nav):

```bash
npm run deploy   # kopē root tīmekļa failus → docs/ (node skripts, darbojas uz visām platformām)
git add docs/
git commit -m "chore: publicēt jaunāko web versiju uz GitHub Pages"
git push
```

`npm run deploy` (`scripts/sync-web-to-docs.js`) nekad neaiztiek `docs/privacy.html`, `docs/privacy.css` vai `docs/.nojekyll` — tie tiek uzturēti atsevišķi.

### Zināma problēma: GitHub iebūvētais ("legacy") Pages build var iestrēgt

GitHub "Deploy from a branch" publicēšanas process ir GitHub iekšējs, melnā kastē esošs process, kas ik pa laikam **iestrēgst statusā `building` uz nenoteiktu laiku** un vienkārši pārstāj apstrādāt jaunus push'us uz `main` — pat ja `docs/` saturs repozitorijā ir pilnīgi pareizs un jaunākais. Tieši tas notika pirms šī labojuma: vairāki commit'i (melnais fons, režīmu cilnes, violeto pogu dzēšana) bija korekti sinhronizēti uz `docs/` un push'oti uz `main`, bet GitHub Pages build process iestrēdza uz vecāka commit'a un nekad neizveidoja jaunu build'u — tāpēc publiskajā vietnē tie nebija redzami, lai gan repozitorijā viss bija pareizi.

**Risinājums:** repozitorijā ir pievienots `.github/workflows/deploy-pages.yml` — GitHub Actions darbplūsma, kas publicē `docs/` uz GitHub Pages neatkarīgi no iepriekšējā "legacy" build procesa. Tā palaižas automātiski pēc katra push uz `main` un izmanto oficiālos `actions/upload-pages-artifact` + `actions/deploy-pages`, kas paši konfigurē vietnes avotu uz "GitHub Actions" pirmajā veiksmīgajā palaišanas reizē. Progresu var sekot cilnē **Actions** repozitorijā — ja darbplūsma nokārtojas zaļa, jaunākais `docs/` saturs ir garantēti izvietots, neatkarīgi no vecā builder'a stāvokļa.

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
- ✅ **GitHub Pages ir ieslēgts** (Settings → Pages → Source: `main` branch, `/docs` mape) un `docs/` satur gan publicēto tīmekļa lietotni, gan `privacy.html` — pieejami `https://sandrisbrikmanis-rgb.github.io/de-lv-app/` un `https://sandrisbrikmanis-rgb.github.io/de-lv-app/privacy.html` (skat. "GitHub Pages publicēšana" iepriekš).

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
