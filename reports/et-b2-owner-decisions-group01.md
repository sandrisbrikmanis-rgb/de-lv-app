# ET–DE B2 — OWNER DECISIONS (grupa 01, 1–50)

**Standard:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.9
**Audit PR:** [#628](https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/628)

| Navigācija | Saite |
|------------|-------|
| GitHub indekss | [et-b2-owner-review-GITHUB.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-b2-full-audit-4a7c/reports/et-b2-owner-review-GITHUB.md) |
| VIEW (šī grupa) | [et-b2-owner-view-group01.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-b2-full-audit-4a7c/reports/et-b2-owner-view-group01.md) |
| Decisions (indekss) | [et-b2-owner-decisions.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-b2-full-audit-4a7c/reports/et-b2-owner-decisions.md) |

Atļautie statusi: **LABOT** | **NELABOT** | **FALSE_POSITIVE** | **NEEDS_SOURCE_REVIEW**

| Audit ID | Card ID | Field | CURRENT | PROPOSED_ET | Severity | Category | OWNER STATUS | OWNER_DECISION | Piezīme |
|----------|---------|-------|---------|-------------|----------|----------|--------------|----------------|---------|
| ET-B2-0001 | STRUCT | study.count | 64 | 60 | CRITICAL | STRUCTURE | PENDING | | |
| ET-B2-0002 | b2-hochwasser | entry[1145].study.comparison[0].example | Es gibt Hochwasser. = Ir plūdi. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-B2-0003 | b2-hochwasser | entry[1145].study.comparison[1].example | Die Überschwemmung zerstörte Häuser. = Plūdi izpostīja mājas. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-B2-0004 | b2-hochwasser | entry[1145].study.comparison[2].example | Der Pegel steigt. = Ūdens līmenis ceļas. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-B2-0005 | b2-nachdruck | entry[1349].study.comparison[0].example | Er legt Nachdruck auf die Frist. = Viņš uzsver termiņu. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-B2-0006 | b2-nachdruck | entry[1349].study.comparison[1].example | Der Nachdruck erschien im Frühjahr. = Atkārtotais izdevums iznāca pavasarī. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-B2-0007 | b2-nachdruck | entry[1349].study.comparison[2].example | Unter Druck stehen = būt spiedienā. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-B2-0008 | b2-zuweisen | entry[2100].study.comparison[0].example | Er weist die Aufgabe zu. = Viņš piešķir uzdevumu. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-B2-0009 | b2-zuweisen | entry[2100].study.comparison[1].example | Er gibt mir die Arbeit. = Viņš man dod darbu. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-B2-0010 | b2-zuweisen | entry[2100].study.comparison[2].example | Er verteilt die Aufgaben. = Viņš sadala uzdevumus. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-B2-0011 | b2-zuwider | entry[2102].study.comparison[1].example | Es ist mir zuwider. = Man tas nepatīk. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-B2-0012 | b2-anbieten | entry[2113].study.comparison[0].example | Ich biete Hilfe an. = Es piedāvāju palīdzību. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-B2-0013 | b2-anbieten | entry[2113].study.comparison[1].example | Er bietet viel Geld. = Viņš piedāvā daudz naudas. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-B2-0014 | b2-genosse | study.sectionAccents | {"explanation":{"blue":"Genosse","purple":"seltsiline","green":"Mitglied","yellow":"liige","red":"Kamerad"},"examples":[… | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-B2-0015 | b2-genossin | study.sectionAccents | {"explanation":{"blue":"Genossin","purple":"seltsiline","green":"Mitglied","yellow":"liige","red":"Kameradin"},"examples… | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-B2-0016 | b2-neger | study.sectionAccents | {"explanation":{"blue":"Neger","purple":"neeger","red":"solvav","green":"schwarze Person"},"examples":[{"de":{"blue":"Ne… | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-B2-0017 | b2-neger | study.sectionAccents (examples) | {"explanation":{"blue":"Neger","purple":"neeger","red":"solvav","green":"schwarze Person"},"examples":[{"de":{"blue":"Ne… | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-B2-0018 | b2-pacht | study.sectionAccents | {"explanation":{"blue":"die Pacht","purple":"rent","green":"die Miete","yellow":"üür"},"examples":[{"de":{"blue":"Pacht"… | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-B2-0019 | b2-anbelangen-13 | etText | puudutama, käima kohta | puudutama | MEDIUM | NATURALNESS | PENDING | | |
| ET-B2-0020 | b2-angehen-19 | etText | puudutama • pöörduma vastu | puudutama • vastu astuma | MEDIUM | NATURALNESS | PENDING | | |
| ET-B2-0021 | b2-Aktienkurs-21 | etText | aktsia kurss | aktsiakurss | LOW | ORTHOGRAPHY | PENDING | | |
| ET-B2-0022 | b2-angeblich-28 | etText | justkui • näiliselt | väidetavalt • oletatav | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0023 | b2-abbringen-36 | etText | ümber veenma • hoiatama • kõrvale juhtima | ümber veenma • ära hoidma • kõrvale juhtima | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0024 | b2-abgesehen-44 | etText | kuigi • pealegi | välja arvatud • kõrvale jättes | HIGH | SEMANTICS | PENDING | | |
| ET-B2-0025 | b2-abgetan-46 | etText | lõpetatud • korraldatud | lõpetatud • lahendatud | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0026 | b2-abhören-49 | etText | kuulama • pealt kuulama | pealt kuulama • salaja pealt kuulama | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0027 | b2-ableiten-50 | etText | juhtima • kõrvale juhtima • tuletama | ära juhtima • kõrvale juhtima • tuletama | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0028 | b2-Abnutzung-52 | etText | kulumine • amortiseerumine • kulu | kulumine • amortiseerumine | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0029 | b2-Absatzmarkt-56 | etText | turustusturg | müügiturg | MEDIUM | NATURALNESS | PENDING | | |
| ET-B2-0030 | b2-abtragen-71 | etText | ära kandma • kulutama (kandes) • lammutama | ära kandma • kulutama • lammutama | MEDIUM | NATURALNESS | PENDING | | |
| ET-B2-0031 | b2-affig-80 | etText | silmatorkav • edev | afekteeritud • edvistav | HIGH | SEMANTICS | PENDING | | |
| ET-B2-0032 | b2-Anorak-87 | etText | kapuutsiga dressijakk | kapuutsiga jope | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0033 | b2-Aster-92 | etText | astra | aster | HIGH | ORTHOGRAPHY | PENDING | | |
| ET-B2-0034 | b2-Ausbeutung-96 | etText | ekspluatatsioon | ekspluateerimine | MEDIUM | TRANSLATION | PENDING | | |
| ET-B2-0035 | b2-Äußerlichkeit-103 | etText | väline sära | välisus • pealiskaudsus | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0036 | b2-Äußerung-104 | etText | väljendus • avaldumine • ilming | väljendus • avaldus • ütlus | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0037 | b2-aussetzen-105 | etText | eksponeerima • allutama • vastu vaidlema • astuma | ohustama • allutama • vastu vaidlema • välja panema | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0038 | b2-aussichtslos-106 | etText | lootusetu • väljavaadeteta | lootusetu • väljavaatetu | MEDIUM | NATURALNESS | PENDING | | |
| ET-B2-0039 | b2-ausstatten-108 | etText | varustama • vormistama | varustama • sisustama | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0040 | b2-austragen-112 | etText | kandma • kohale toimetama • välja võitlema | laiali kandma • kohale toimetama • välja võitlema | LOW | SEMANTICS | PENDING | | |
| ET-B2-0041 | b2-austreten-114 | etText | sisse tallama • maha tallama • välja astuma | välja tallama • maha tallama • välja astuma | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0042 | b2-auswärtig-115 | etText | välismaine • välisasjade | välismaine • välisasjadega seotud | LOW | GRAMMAR | PENDING | | |
| ET-B2-0043 | b2-ausweisen-117 | etText | välja saatma • välja saatma • kinnitama • tõestama | välja saatma • välja tõrjuma • kinnitama • tõestama | LOW | SEMANTICS | PENDING | | |
| ET-B2-0044 | b2-auszeichnen-120 | etText | autasustama • andma • silma paistma | autasustama • esile tõstma • silma paistma | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0045 | b2-Schwebebalken-123 | etText | tasakaalupulk | võimlemispoom | HIGH | TRANSLATION | PENDING | | |
| ET-B2-0046 | b2-Blutbank-125 | etText | verevaru | verepank | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0047 | b2-Baugrube-142 | etText | ehituskraav | ehituskaevik | MEDIUM | TRANSLATION | PENDING | | |
| ET-B2-0048 | b2-bebauen-146 | etText | töötlema • hoonestama | harima • hoonestama | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0049 | b2-befallen-148 | etText | peale tulema • ründama | tabama • ründama | MEDIUM | NATURALNESS | PENDING | | |
| ET-B2-0050 | b2-beispiellos-163 | etText | enneolematu • nähtamatu • võrreldamatu | enneolematu • enneolematu • võrreldamatu | MEDIUM | SEMANTICS | PENDING | | |
