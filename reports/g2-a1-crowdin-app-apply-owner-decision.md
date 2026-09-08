# G2/A1 Crowdin staging → App — OWNER lēmums

## Lēmuma identitāte

| Lauks | Vērtība |
|---|---|
| Datums | 2026-09-08 |
| Repo | `sandrisbrikmanis-rgb/de-lv-app` |
| Avota zars | `cursor/phase3-g2-a1-full-discovery-6338` |
| Avota PR | `#718` (Draft) |
| Darba grupa/līmenis | `G2/A1` |
| OWNER autorizācija | `G2_A1_CROWDIN_STAGING_TO_APP_APPLY_APPROVED` |
| OWNER lēmums | `IMPORT_CROWDIN_A1_STAGING_AS_CURRENT_APP_BASELINE` |
| Statuss | `APPROVED` |

## OWNER lēmums

Es, OWNER, apstiprinu visu pabeigto G2/A1 Crowdin staging tulkojumu ievietošanu App kā pašreizējo A1 tulkojumu bāzi.

Apstiprinātais importējamais apjoms:

- 31 mērķvaloda;
- 2 971 vērtība katrai valodai;
- 92 101 vērtība kopā;
- avots: `reports/staging/g2-a1-phase3-crowdin/` checkpoint OWNER vidē `bc-4fcfe641-807a-4843-84eb-b777f9c96338`.

Valodas:

```text
lt, ru, pl, uk, et, en, ro, bg, tr, gr, sq, mk, sl, bs, sr, hr,
sk, cs, fi, sv, nb, nn, da, nl, lb, fr, it, es, pt, hu, is
```

## Saistošie nosacījumi

1. Crowdin staging vērtības ievieto App precīzi tādas, kādas tās ir staging failos.
2. DE saturs ir pilnībā READ-ONLY.
3. LV avota saturs ir READ-ONLY.
4. Nedrīkst mainīt kartīšu vai objektu ID, secību, struktūru vai lauku ceļus.
5. Nedrīkst izmantot fuzzy vai pozicionālu sasaistīšanu.
6. 22 750 Luna findings neaiztur sākotnējo Crowdin tulkojumu importu.
7. Luna findings paliek atsevišķs pēclabošanas backlog.
8. Luna `proposed` vērtības šī lēmuma ietvaros netiek piemērotas.
9. Šis lēmums neapgalvo, ka visi Crowdin tulkojumi ir lingvistiski perfekti.
10. Pēc importēšanas jābūt tehniski pierādītam `31/31` un `92101/92101` staging-to-App match.
11. Merge nav autorizēts ar šo failu; pēc apply nepieciešama OWNER pārbaude par izveidoto Apply PR un tā pierādījumiem.

## Luna findings statuss

| Lauks | Lēmums |
|---|---|
| Findings | 22 750 |
| Vai findings ir visi apstiprināti kā reālas kļūdas? | Nē |
| Vai findings bloķē Crowdin importu? | Nē |
| Vai Luna `proposed` tiek piemērots? | Nē |
| Turpmākais statuss | `DEFERRED_POST_IMPORT_BACKLOG` |

## Atļautā nākamā darbība

```text
CROWDIN_A1_STAGING_TO_APP_COPY_ONLY_APPLY
```

## Neatļautās darbības

- DE vai LV satura maiņa;
- Luna findings automātiska piemērošana;
- Crowdin tulkojumu pārrakstīšana apply laikā;
- jauns Luna discovery vai `--fresh-luna`;
- merge bez atsevišķa OWNER lēmuma.
