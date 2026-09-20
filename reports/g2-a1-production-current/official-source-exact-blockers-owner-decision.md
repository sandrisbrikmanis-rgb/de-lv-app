# G2/A1 — Official source exact blockers (OWNER decision)

Classification: **G2_A1_OFFICIAL_SOURCE_BROWSER_ACCESS_PARTIALLY_BLOCKED**

Live adapters (implemented): **29/32** | Registry-blocked: **3/32** | Entry paths validated (est.): **14/32**

## Remaining blockers

### bs (`bs-izj-no-entry`)

- **Technical:** SOURCE_NO_MACHINE_READABLE_ENTRY
- **Positive fixture outcome:** SOURCE_NO_MACHINE_READABLE_ENTRY
- **Recommended OWNER choice:** D. OWNER_AUTHORIZES_MASTER_SOURCE_REGISTRY_CHANGE
- **Choices:** A. OWNER_PROVIDES_OFFICIAL_SOURCE_ACCESS | B. MANUAL_OFFICIAL_SOURCE_EVIDENCE_REQUIRED | C. NEEDS_SOURCE_REVIEW | D. OWNER_AUTHORIZES_MASTER_SOURCE_REGISTRY_CHANGE

**MASTER sources probed:**
- `https://izj.unsa.ba/` → SOURCE_PAGE_FETCHED (HTTP 200, 119664 B)

### fr (`fr-academie-browser-entry`)

- **Technical:** SOURCE_ENTRY_VALIDATED-capable
- **Positive fixture outcome:** SOURCE_ENTRY_NOT_FOUND
- **Browser pilot:** parse_failed `https://www.dictionnaire-academie.fr/#/recherche/maison`
- **Recommended OWNER choice:** A. OWNER_PROVIDES_OFFICIAL_SOURCE_ACCESS
- **Choices:** A. OWNER_PROVIDES_OFFICIAL_SOURCE_ACCESS | B. MANUAL_OFFICIAL_SOURCE_EVIDENCE_REQUIRED | C. NEEDS_SOURCE_REVIEW | D. OWNER_AUTHORIZES_MASTER_SOURCE_REGISTRY_CHANGE

**MASTER sources probed:**
- `https://www.dictionnaire-academie.fr/` → SOURCE_PAGE_FETCHED (HTTP 200, 209753 B)
- `https://www.dictionnaire-academie.fr/` → SOURCE_PAGE_FETCHED (HTTP 200, 209758 B)

### hr (`hr-rjecnik-browser-entry`)

- **Technical:** SOURCE_ENTRY_VALIDATED-capable
- **Positive fixture outcome:** SOURCE_ENTRY_NOT_FOUND
- **Browser pilot:** parse_failed `https://rjecnik.hr/?query=ku%C4%87a`
- **Recommended OWNER choice:** A. OWNER_PROVIDES_OFFICIAL_SOURCE_ACCESS
- **Choices:** A. OWNER_PROVIDES_OFFICIAL_SOURCE_ACCESS | B. MANUAL_OFFICIAL_SOURCE_EVIDENCE_REQUIRED | C. NEEDS_SOURCE_REVIEW | D. OWNER_AUTHORIZES_MASTER_SOURCE_REGISTRY_CHANGE

**MASTER sources probed:**
- `https://pravopis.hr/` → SOURCE_PAGE_FETCHED (HTTP 200, 4776 B)
- `https://rjecnik.hr/` → SOURCE_PAGE_FETCHED (HTTP 200, 59249 B)

### is (`is-bin-browser-entry`)

- **Technical:** SOURCE_ENTRY_VALIDATED-capable
- **Positive fixture outcome:** SOURCE_ENTRY_NOT_FOUND
- **Browser pilot:** parse_failed `https://bin.arnastofnun.is/beygingarstodur/nidur.php?adgerdir=leit&nafn=h%C3%BAs`
- **Recommended OWNER choice:** A. OWNER_PROVIDES_OFFICIAL_SOURCE_ACCESS
- **Choices:** A. OWNER_PROVIDES_OFFICIAL_SOURCE_ACCESS | B. MANUAL_OFFICIAL_SOURCE_EVIDENCE_REQUIRED | C. NEEDS_SOURCE_REVIEW | D. OWNER_AUTHORIZES_MASTER_SOURCE_REGISTRY_CHANGE

**MASTER sources probed:**
- `https://bin.arnastofnun.is/` → SOURCE_PAGE_FETCHED (HTTP 200, 3600 B)
- `https://malid.is/` → SOURCE_PAGE_FETCHED (HTTP 200, 2068 B)

### it (`it-lessicografia-browser-entry`)

- **Technical:** SOURCE_ENTRY_VALIDATED-capable
- **Positive fixture outcome:** SOURCE_ENTRY_NOT_FOUND
- **Browser pilot:** CAPTCHA_OR_BOT_CHALLENGE `https://www.lessicografia.it/search?q=casa`
- **Recommended OWNER choice:** A. OWNER_PROVIDES_OFFICIAL_SOURCE_ACCESS
- **Choices:** A. OWNER_PROVIDES_OFFICIAL_SOURCE_ACCESS | B. MANUAL_OFFICIAL_SOURCE_EVIDENCE_REQUIRED | C. NEEDS_SOURCE_REVIEW | D. OWNER_AUTHORIZES_MASTER_SOURCE_REGISTRY_CHANGE

**MASTER sources probed:**
- `https://accademiadellacrusca.it/` → SOURCE_PAGE_FETCHED (HTTP 200, 73932 B)
- `https://www.lessicografia.it/` → SOURCE_PAGE_FETCHED (HTTP 200, 10903 B)

### lb (`lb-lod-browser-entry`)

- **Technical:** SOURCE_ENTRY_VALIDATED-capable
- **Positive fixture outcome:** SOURCE_ENTRY_NOT_FOUND
- **Browser pilot:** parse_failed `https://lod.lu/search/Haus`
- **Recommended OWNER choice:** A. OWNER_PROVIDES_OFFICIAL_SOURCE_ACCESS
- **Choices:** A. OWNER_PROVIDES_OFFICIAL_SOURCE_ACCESS | B. MANUAL_OFFICIAL_SOURCE_EVIDENCE_REQUIRED | C. NEEDS_SOURCE_REVIEW | D. OWNER_AUTHORIZES_MASTER_SOURCE_REGISTRY_CHANGE

**MASTER sources probed:**
- `https://zls.lu/` → SOURCE_DOMAIN_REJECTED (HTTP n/a, 0 B)
- `https://lod.lu/` → SOURCE_PAGE_FETCHED (HTTP 200, 2259 B)

### lt (`lt-ekalba-browser-entry`)

- **Technical:** SOURCE_ENTRY_VALIDATED-capable
- **Positive fixture outcome:** SOURCE_ENTRY_NOT_FOUND
- **Browser pilot:** parse_failed `https://ekalba.lt/zodynas?q=namas`
- **Recommended OWNER choice:** A. OWNER_PROVIDES_OFFICIAL_SOURCE_ACCESS
- **Choices:** A. OWNER_PROVIDES_OFFICIAL_SOURCE_ACCESS | B. MANUAL_OFFICIAL_SOURCE_EVIDENCE_REQUIRED | C. NEEDS_SOURCE_REVIEW | D. OWNER_AUTHORIZES_MASTER_SOURCE_REGISTRY_CHANGE

**MASTER sources probed:**
- `https://lki.lt/` → SOURCE_PAGE_FETCHED (HTTP 200, 118440 B)
- `https://vlkk.lt/` → SOURCE_ACCESS_BLOCKED (HTTP 403, 5547 B)
- `https://ekalba.lt/` → SOURCE_PAGE_FETCHED (HTTP 200, 2871 B)

### hu (`hu-nagyszotar-browser-entry`)

- **Technical:** SOURCE_ENTRY_VALIDATED-capable
- **Positive fixture outcome:** SOURCE_ENTRY_NOT_FOUND
- **Browser pilot:** entry_not_found `https://nagyszotar.nytud.hu/dictsearch.html?query=h%C3%A1z&mode=normal&hwonly=true`
- **Recommended OWNER choice:** A. OWNER_PROVIDES_OFFICIAL_SOURCE_ACCESS
- **Choices:** A. OWNER_PROVIDES_OFFICIAL_SOURCE_ACCESS | B. MANUAL_OFFICIAL_SOURCE_EVIDENCE_REQUIRED | C. NEEDS_SOURCE_REVIEW | D. OWNER_AUTHORIZES_MASTER_SOURCE_REGISTRY_CHANGE

**MASTER sources probed:**
- `https://nytud.hu/` → SOURCE_ACCESS_BLOCKED (HTTP 403, 321 B)
- `https://nagyszotar.nytud.hu/` → SOURCE_PAGE_FETCHED (HTTP 200, 122232 B)
- `https://helyesiras.mta.hu/` → SOURCE_PAGE_FETCHED (HTTP 200, 29379 B)

### nl (`nl-woordenlijst-browser-entry`)

- **Technical:** SOURCE_ENTRY_VALIDATED-capable
- **Positive fixture outcome:** SOURCE_ENTRY_NOT_FOUND
- **Browser pilot:** parse_failed `https://woordenlijst.org/#/zoeken/huis`
- **Recommended OWNER choice:** A. OWNER_PROVIDES_OFFICIAL_SOURCE_ACCESS
- **Choices:** A. OWNER_PROVIDES_OFFICIAL_SOURCE_ACCESS | B. MANUAL_OFFICIAL_SOURCE_EVIDENCE_REQUIRED | C. NEEDS_SOURCE_REVIEW | D. OWNER_AUTHORIZES_MASTER_SOURCE_REGISTRY_CHANGE

**MASTER sources probed:**
- `https://taalunie.org/` → SOURCE_PAGE_FETCHED (HTTP 200, 232671 B)
- `https://woordenlijst.org/` → SOURCE_PAGE_FETCHED (HTTP 200, 31426 B)
- `https://taaladvies.net/` → SOURCE_PAGE_FETCHED (HTTP 200, 122752 B)

### pl (`pl-wsjp-browser-entry`)

- **Technical:** SOURCE_ENTRY_VALIDATED-capable
- **Positive fixture outcome:** SOURCE_ENTRY_NOT_FOUND
- **Browser pilot:** homepage_not_entry 
- **Recommended OWNER choice:** A. OWNER_PROVIDES_OFFICIAL_SOURCE_ACCESS
- **Choices:** A. OWNER_PROVIDES_OFFICIAL_SOURCE_ACCESS | B. MANUAL_OFFICIAL_SOURCE_EVIDENCE_REQUIRED | C. NEEDS_SOURCE_REVIEW | D. OWNER_AUTHORIZES_MASTER_SOURCE_REGISTRY_CHANGE

**MASTER sources probed:**
- `https://rjp.pan.pl/` → SOURCE_PAGE_FETCHED (HTTP 200, 95898 B)
- `https://wsjp.pl/` → SOURCE_PAGE_FETCHED (HTTP 200, 93763 B)

### pt (`pt-acl-browser-entry`)

- **Technical:** SOURCE_ENTRY_VALIDATED-capable
- **Positive fixture outcome:** SOURCE_ENTRY_NOT_FOUND
- **Browser pilot:** parse_failed `https://dicionario.acad-ciencias.pt/#/search/casa`
- **Recommended OWNER choice:** A. OWNER_PROVIDES_OFFICIAL_SOURCE_ACCESS
- **Choices:** A. OWNER_PROVIDES_OFFICIAL_SOURCE_ACCESS | B. MANUAL_OFFICIAL_SOURCE_EVIDENCE_REQUIRED | C. NEEDS_SOURCE_REVIEW | D. OWNER_AUTHORIZES_MASTER_SOURCE_REGISTRY_CHANGE

**MASTER sources probed:**
- `https://www.acad-ciencias.pt/` → SOURCE_PAGE_FETCHED (HTTP 200, 361059 B)
- `https://dicionario.acad-ciencias.pt/` → SOURCE_PAGE_FETCHED (HTTP 200, 180738 B)
- `https://www.portaldalinguaportuguesa.org/` → SOURCE_PAGE_FETCHED (HTTP 200, 9255 B)

### ro (`ro-doom-browser-entry`)

- **Technical:** SOURCE_ENTRY_VALIDATED-capable
- **Positive fixture outcome:** SOURCE_ENTRY_NOT_FOUND
- **Browser pilot:** parse_failed `https://doom.lingv.ro/cautare?q=casa`
- **Recommended OWNER choice:** A. OWNER_PROVIDES_OFFICIAL_SOURCE_ACCESS
- **Choices:** A. OWNER_PROVIDES_OFFICIAL_SOURCE_ACCESS | B. MANUAL_OFFICIAL_SOURCE_EVIDENCE_REQUIRED | C. NEEDS_SOURCE_REVIEW | D. OWNER_AUTHORIZES_MASTER_SOURCE_REGISTRY_CHANGE

**MASTER sources probed:**
- `https://acad.ro/` → SOURCE_PAGE_FETCHED (HTTP 200, 92 B)
- `https://doom.lingv.ro/` → SOURCE_PAGE_FETCHED (HTTP 200, 43473 B)
- `https://lingv.ro/` → SOURCE_PAGE_FETCHED (HTTP 200, 511628 B)

### sq (`sq-akad-no-entry`)

- **Technical:** SOURCE_NO_MACHINE_READABLE_ENTRY
- **Positive fixture outcome:** SOURCE_NO_MACHINE_READABLE_ENTRY
- **Recommended OWNER choice:** D. OWNER_AUTHORIZES_MASTER_SOURCE_REGISTRY_CHANGE
- **Choices:** A. OWNER_PROVIDES_OFFICIAL_SOURCE_ACCESS | B. MANUAL_OFFICIAL_SOURCE_EVIDENCE_REQUIRED | C. NEEDS_SOURCE_REVIEW | D. OWNER_AUTHORIZES_MASTER_SOURCE_REGISTRY_CHANGE

**MASTER sources probed:**
- `https://akad.gov.al/` → SOURCE_PAGE_FETCHED (HTTP 200, 262842 B)

### sr (`sr-isj-no-entry`)

- **Technical:** SOURCE_NO_MACHINE_READABLE_ENTRY
- **Positive fixture outcome:** SOURCE_NO_MACHINE_READABLE_ENTRY
- **Recommended OWNER choice:** D. OWNER_AUTHORIZES_MASTER_SOURCE_REGISTRY_CHANGE
- **Choices:** A. OWNER_PROVIDES_OFFICIAL_SOURCE_ACCESS | B. MANUAL_OFFICIAL_SOURCE_EVIDENCE_REQUIRED | C. NEEDS_SOURCE_REVIEW | D. OWNER_AUTHORIZES_MASTER_SOURCE_REGISTRY_CHANGE

**MASTER sources probed:**
- `https://www.isj.sanu.ac.rs/` → SOURCE_PAGE_FETCHED (HTTP 200, 99962 B)
- `https://www.maticasrpska.org.rs/` → SOURCE_PAGE_FETCHED (HTTP 200, 80402 B)

### sv (`sv-svenska-browser-entry`)

- **Technical:** SOURCE_ENTRY_VALIDATED-capable
- **Positive fixture outcome:** SOURCE_ENTRY_NOT_FOUND
- **Browser pilot:** parse_failed `https://svenska.se/saol/#/search/hus`
- **Recommended OWNER choice:** A. OWNER_PROVIDES_OFFICIAL_SOURCE_ACCESS
- **Choices:** A. OWNER_PROVIDES_OFFICIAL_SOURCE_ACCESS | B. MANUAL_OFFICIAL_SOURCE_EVIDENCE_REQUIRED | C. NEEDS_SOURCE_REVIEW | D. OWNER_AUTHORIZES_MASTER_SOURCE_REGISTRY_CHANGE

**MASTER sources probed:**
- `https://www.svenskaakademien.se/` → SOURCE_PAGE_FETCHED (HTTP 200, 86230 B)
- `https://svenska.se/` → SOURCE_PAGE_FETCHED (HTTP 200, 43266 B)

### bg (`bg-beron-browser-entry`)

- **Technical:** SOURCE_ENTRY_VALIDATED-capable
- **Positive fixture outcome:** SOURCE_ENTRY_NOT_FOUND
- **Browser pilot:** CAPTCHA_OR_BOT_CHALLENGE `https://beron.mon.bg/dictionary/search?q=%D0%BA%D1%8A%D1%89%D0%B0`
- **Recommended OWNER choice:** A. OWNER_PROVIDES_OFFICIAL_SOURCE_ACCESS
- **Choices:** A. OWNER_PROVIDES_OFFICIAL_SOURCE_ACCESS | B. MANUAL_OFFICIAL_SOURCE_EVIDENCE_REQUIRED | C. NEEDS_SOURCE_REVIEW | D. OWNER_AUTHORIZES_MASTER_SOURCE_REGISTRY_CHANGE

**MASTER sources probed:**
- `https://ibl.bas.bg/` → SOURCE_PAGE_FETCHED (HTTP 200, 494591 B)
- `https://beron.mon.bg/` → SOURCE_PAGE_FETCHED (HTTP 200, 261710 B)

### mk (`mk-drmj-browser-entry`)

- **Technical:** SOURCE_ENTRY_VALIDATED-capable
- **Positive fixture outcome:** SOURCE_ACCESS_BLOCKED
- **Browser pilot:** page.goto: net::ERR_CONNECTION_CLOSED at https://drmj.eu/search?q=%D0%BA%D1%83%D1%9C%D0%B0
Call log:
  - navigating to "https://drmj.eu/search?q=%D0%BA%D1%83%D1%9C%D0%B0", waiting until "domcontentloaded"
 
- **Recommended OWNER choice:** A. OWNER_PROVIDES_OFFICIAL_SOURCE_ACCESS
- **Choices:** A. OWNER_PROVIDES_OFFICIAL_SOURCE_ACCESS | B. MANUAL_OFFICIAL_SOURCE_EVIDENCE_REQUIRED | C. NEEDS_SOURCE_REVIEW | D. OWNER_AUTHORIZES_MASTER_SOURCE_REGISTRY_CHANGE

**MASTER sources probed:**
- `https://imj.ukim.edu.mk/` → SOURCE_ACCESS_BLOCKED (HTTP n/a, 0 B)
- `https://drmj.eu/` → SOURCE_ACCESS_BLOCKED (HTTP n/a, 0 B)

### uk (`uk-dictua-browser-entry`)

- **Technical:** SOURCE_ENTRY_VALIDATED-capable
- **Positive fixture outcome:** SOURCE_ENTRY_NOT_FOUND
- **Browser pilot:** parse_failed `https://lcorp.ulif.org.ua/dictua/#search=%D0%B4%D1%96%D0%BC`
- **Recommended OWNER choice:** A. OWNER_PROVIDES_OFFICIAL_SOURCE_ACCESS
- **Choices:** A. OWNER_PROVIDES_OFFICIAL_SOURCE_ACCESS | B. MANUAL_OFFICIAL_SOURCE_EVIDENCE_REQUIRED | C. NEEDS_SOURCE_REVIEW | D. OWNER_AUTHORIZES_MASTER_SOURCE_REGISTRY_CHANGE

**MASTER sources probed:**
- `https://iul-nasu.org.ua/` → SOURCE_PAGE_FETCHED (HTTP 200, 99835 B)
- `https://lcorp.ulif.org.ua/dictua` → SOURCE_PAGE_FETCHED (HTTP 200, 28518 B)
- `https://mon.gov.ua/osvita-2/zagalna-serednya-osvita/ukrainskiy-pravopis` → SOURCE_ACCESS_BLOCKED (HTTP 403, 5752 B)
