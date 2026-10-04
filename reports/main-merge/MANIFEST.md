d3826548d6940d7389e9cd7aeb6e175383f83551 2026-10-04

# MANIFEST main-merge

MERGE_SHA: d3826548d6940d7389e9cd7aeb6e175383f83551
ORIGIN_MAIN_BEFORE: f00f6b72afd693a8f6f86b42cd1631a0be7d9a6d
ORIGIN_MAIN_AFTER: d3826548d6940d7389e9cd7aeb6e175383f83551
HEAD_875: af3913cb84ab9418b6a4c23de6881562a8a7bcc3
STAGE RESULT: PASS

## B3

```
git revert -m 1 d3826548d6940d7389e9cd7aeb6e175383f83551
```

Komanda nav izpildīta.

## A1–A5, B, C

Skatīt SUMMARY.md. Atkārtojums skaitļos: A2 ancestor exit 0 trim galvām; A3 faili 314 (data 132, www/data 132, reports 46, scripts 4 jauni, cita klase 0); A4 node --check 268/0, deep 0/0/0/0, consistency TEXT 5414 MISSING 307 EXTRA 2 ORDER 0 UNICODE_ONLY 760, lv-de-verify FINDING 80 REVIEW 51 EMPTY_PLURAL 492; npm test exit 1 (no test specified). A5 MERGEABLE CLEAN, Bugbot pass. B2 merge commit bez zaru dzēšanas. C1 pages-build-deployment 37217442378 success. C2 pieci publicētie faili satur prasītos marķierus.

## Aizvērtie

| PR | stāvoklis | zars saglabāts |
|---|---|---|
| #859 | MERGED | cursor/owner-de-copy-20261004-f86b fc892441307135d49c4709b29957510d86b00ec4 |
| #863 | MERGED | cursor/goethe-plural-apply-f86b f56fc2f9610ce8224e3b2ab7f7f53137b144d0ff |
| #866 | MERGED | cursor/main-integration-f86b 1071a13e3c6c534542aba7163e00208eaec80d4d |
| #869 | MERGED | cursor/pfahlbau-lv-additions-f86b a8d3c8a2643a3043d1ef273750750e07741dc172 |
| #873 | CLOSED | cursor/study-de-sync-f86b 401bd0ca7035e57230e2cc831863bc52c546ebb6 |
| #870 | CLOSED | cursor/remove-extra-study-f86b bd8c8ff7cf3177417957b03c911fd5a791a46bac |
| #872 | CLOSED | cursor/study-realign-f86b a75348f7dc41b53a8a1e12122a97d9fca1598535 |
| #871 | CLOSED | cursor/study-gap-analysis-f86b ac01fb5813ddccd5031d3ab9425aad6f7f4b2d43 |
| #874 | CLOSED | cursor/study-deep-accents-f86b 9b50f16ed3c0d98484ca8872cc68a1ece02e8728 |

## Atvērtie PR

Skaits 282. data/ vai www/data/ = 45. konfliktē = 74. nav diff = 51.

| numurs | nosaukums | veids | data/ vai www/data/ | konfliktē ar jauno main | bāze | galva |
|---|---|---|---|---|---|---|
| 868 | Atvērt ?card= saiti, nevis palikt sākuma ekrānā | cits | nē | nē | main | cursor/card-search-open-f86b |
| 867 | Report empty DE field notations | atskaite+audit-skripts | nē | nē | main | cursor/de-empty-representation-f86b |
| 865 | Report six-word dictionary pilot results | atskaite+audit-skripts | nē | nē | main | cursor/pilot-results-f86b |
| 864 | Inventory DE-target dictionary sources on origin/main | atskaite+audit-skripts | nē | nē | main | cursor/dictionary-sources-f86b |
| 862 | Plural source reclassification from cache | atskaite+audit-skripts | nē | nē | main | cursor/plural-reclass-f86b |
| 861 | Translation leakage: casefold, markers, strict families | atskaite+audit-skripts | nē | nē | main | cursor/leakage-markers-f86b |
| 860 | Plural source check and translation leakage audit | atskaite+audit-skripts | nē | nē | main | cursor/plural-leakage-audit-f86b |
| 858 | LV-DE internal verification for A1–C2 (read-only, partial) | atskaite+audit-skripts | nē | nē | main | cursor/lv-de-verify-f86b |
| 857 | DE consistency audit across 31 target languages (read-only) | atskaite+audit-skripts | nē | nē | main | cursor/de-consistency-audit-f86b |
| 856 | docs: MASTER 1.19 end marker, §15 version, §10.1 numbering | docs | nē | nē | cursor/master-v119-word-source-f86b | cursor/master-version-numbering-f86b |
| 855 | docs: MASTER v1.19 — satura Crowdin ārā, vārda līmeņa avotu apstiprināšana | docs | nē | nē | main | cursor/master-v119-word-source-f86b |
| 854 | G2: unified A1–C2 card translation linguistic audit (phase 1 skeleton) | atskaite+audit-skripts+cits | nē | nē | main | cursor/g2-a1-card-translation-linguistic-audit-17f5 |
| 853 | G2/A1: SL/SQ/SR/SV digitized DE dictionary discovery + 6-lemma pilot | atskaite+audit-skripts | nē | nē | main | cursor/pdf-bilingual-sl-sq-sr-sv-discovery-17f5 |
| 852 | fix(g2-a1): nn-pt-ro readiness MD URL for modernInstitutional (SNORRE) | atskaite+audit-skripts | nē | nē | main | cursor/nn-pt-ro-readiness-md-url-fix-17f5 |
| 850 | G2/A1: lt/pl/uk bilingual dictionary discovery, pilot, audit source-chain (scope-clean) | atskaite+audit-skripts+cits | nē | nē | main | cursor/g2-a1-lt-pl-uk-audit-only-17f5 |
| 849 | G2/A1: fr/bg/bs PDF bilingual dictionary discovery, pilot, audit source-chain (scope-clean) | atskaite+audit-skripts+cits | nē | nē | main | cursor/pdf-bilingual-fr-bg-bs-audit-only-17f5 |
| 848 | G2/A1: hr/hu/is PDF bilingual dictionary discovery, pilot, audit source-chain (scope-clean) | atskaite+audit-skripts+cits | nē | nē | main | cursor/pdf-bilingual-hr-hu-is-audit-only-17f5 |
| 847 | G2/A1: it/mk/nl PDF bilingual dictionary discovery, pilot, audit source-chain (scope-clean) | atskaite+audit-skripts+cits | nē | nē | main | cursor/pdf-bilingual-it-mk-nl-audit-only-17f5 |
| 846 | G2 A1: DE↔it/mk/nl digitized dictionary discovery + pilot verify | docs+atskaite+audit-skripts+cits | jā | nē | main | cursor/pdf-bilingual-it-mk-nl-discovery-17f5 |
| 845 | Discover digitized DE↔HR, HU, IS bilingual dictionary sources | docs+atskaite+audit-skripts+cits | jā | nē | main | cursor/pdf-bilingual-hr-hu-is-discovery-17f5 |
| 844 | docs(bg,bs,fr): PDF bilingual DE↔TARGET dictionary discovery | docs+atskaite+audit-skripts+cits | jā | nē | main | cursor/pdf-bilingual-bg-bs-fr-pilot-17f5 |
| 843 | G2/A1: card translation readiness 12/32 (catalog wiring, strict gates) | docs+atskaite+audit-skripts+cits | jā | nē | cursor/g2-a1-official-target-adapters-17f5 | cursor/g2-a1-card-translation-31lang-17f5 |
| 842 | G2/A1: 18-language official source resolution + MASTER OWNER scope | docs+atskaite+audit-skripts+cits | jā | nē | main | cursor/g2-a1-official-target-adapters-17f5 |
| 829 | A1 LRB: dual-PC consolidation inventory (pre-merge audit) | atskaite+audit-skripts | nē | jā | cursor/lrb-072-owner-authorization-aa66 | cursor/a1-lrb-consolidation-inventory-aa66 |
| 828 | LRB-072: owner authorization APPROVED (LB batch 15 tail) | atskaite+audit-skripts+cits | nē | nē | cursor/lrb-071-owner-authorization-aa66 | cursor/lrb-072-owner-authorization-aa66 |
| 827 | LRB-071: owner authorization APPROVED (LB batch 14 mop-up) | atskaite+audit-skripts+cits | nē | nē | cursor/lrb-070-owner-authorization-aa66 | cursor/lrb-071-owner-authorization-aa66 |
| 826 | LRB-073: OWNER review + GALA PASS (NL 42 / NN 8) | atskaite+audit-skripts | nē | nē | main | cursor/lrb-073-owner-authorization-ed35 |
| 825 | LRB-070: owner authorization APPROVED — LB mop-up a1-ab..a1-hoeren-study (50 rows) | atskaite+audit-skripts+cits | nē | nē | cursor/lrb-069-owner-authorization-aa66 | cursor/lrb-070-owner-authorization-aa66 |
| 824 | LRB-069: owner authorization APPROVED — LB warm..noch mal (44 rows) | atskaite+audit-skripts+cits | nē | nē | cursor/lrb-068-owner-authorization-aa66 | cursor/lrb-069-owner-authorization-aa66 |
| 823 | LRB-074: OWNER authorization APPROVED (50 NN, PC2) | atskaite+audit-skripts | nē | nē | main | cursor/lrb-074-owner-authorization-ed35 |
| 822 | LRB-068: owner authorization APPROVED — LB Tante..wann | atskaite+audit-skripts+cits | nē | nē | cursor/lrb-067-owner-authorization-aa66 | cursor/lrb-068-owner-authorization-aa66 |
| 821 | LRB-075: OWNER auth + COPY-PASTE + GALA PASS | atskaite+audit-skripts | nē | nē | main | cursor/lrb-075-owner-authorization-ed35 |
| 820 | LRB-067: COPY-PASTE (50/0/0) — awaiting Gala | atskaite+audit-skripts+cits | nē | nē | cursor/lrb-066-owner-authorization-aa66 | cursor/lrb-067-owner-authorization-aa66 |
| 819 | LRB-076: OWNER auth + COPY-PASTE + GALA PASS | atskaite+audit-skripts | nē | nē | main | cursor/lrb-076-owner-authorization-ed35 |
| 818 | LRB-066: Gala FULL_50_50 PASS (48/2/0) — LINGUISTICALLY_CLOSED | atskaite+audit-skripts+cits | nē | nē | cursor/lrb-065-owner-authorization-aa66 | cursor/lrb-066-owner-authorization-aa66 |
| 817 | LRB-077: OWNER authorization + COPY-PASTE + GALA PASS | atskaite+audit-skripts | nē | nē | main | cursor/lrb-077-owner-authorization-ed35 |
| 816 | LRB-078: OWNER authorization + COPY-PASTE corrections + GALA PASS | atskaite+audit-skripts | nē | nē | main | cursor/lrb-078-owner-authorization-ed35 |
| 815 | LRB-065: Gala FULL_50_50 PASS (47/3/0) — LINGUISTICALLY_CLOSED | atskaite+audit-skripts+cits | nē | nē | cursor/lrb-064-owner-authorization-aa66 | cursor/lrb-065-owner-authorization-aa66 |
| 814 | LRB-064: owner auth → Luna COPY-PASTE → Gala PASS | atskaite+audit-skripts+cits | nē | nē | cursor/lrb-063-owner-authorization-aa66 | cursor/lrb-064-owner-authorization-aa66 |
| 813 | LRB-063: owner auth → Luna COPY-PASTE → Gala PASS | atskaite+audit-skripts+cits | nē | nē | cursor/lrb-062-owner-authorization-aa66 | cursor/lrb-063-owner-authorization-aa66 |
| 812 | LRB-079: OWNER authorization + Phase 1 Luna + COPY-PASTE corrections #1–#2 | atskaite+audit-skripts | nē | nē | main | cursor/lrb-079-owner-authorization-ed35 |
| 811 | LRB-062: owner auth → Luna COPY-PASTE → Gala correction #1 → Gala PASS | atskaite+audit-skripts+cits | nē | nē | cursor/lrb-061-owner-authorization-aa66 | cursor/lrb-062-owner-authorization-aa66 |
| 810 | LRB-061: owner auth + Luna COPY-PASTE + Gala PASS (Frau..grüßen) | atskaite+audit-skripts+cits | nē | nē | cursor/lrb-060-owner-authorization-aa66 | cursor/lrb-061-owner-authorization-aa66 |
| 809 | LRB-080: OWNER authorization APPROVED (PT 50) — pending Luna Phase 1 | atskaite+audit-skripts | nē | nē | main | cursor/lrb-080-owner-authorization-ed35 |
| 808 | LRB-060: owner auth + Luna COPY-PASTE + Gala PASS (dass..fragen) | atskaite+audit-skripts+cits | nē | nē | cursor/lrb-059-owner-authorization-aa66 | cursor/lrb-060-owner-authorization-aa66 |
| 807 | LRB-081: PT+RO linguistic review + OWNER copy/paste correction #4 | atskaite+audit-skripts | nē | nē | main | cursor/lrb-081-owner-authorization-ed35 |
| 806 | LRB-059: LINGUISTICALLY_CLOSED — Gala PASS (50 LABOT / 0 NELABOT) | atskaite+audit-skripts+cits | nē | nē | cursor/lrb-058-owner-authorization-aa66 | cursor/lrb-059-owner-authorization-aa66 |
| 805 | LRB-082: GALA PASS — LRB_082_FULL_50_50_LINGUISTIC_REVIEW_PASS | atskaite+audit-skripts | nē | nē | main | cursor/lrb-082-owner-authorization-ed35 |
| 804 | LRB-058: owner authorization APPROVED — LB Wasser..Augenfarbe (50 rows) | atskaite+audit-skripts+cits | nē | nē | cursor/lrb-057-owner-authorization-aa66 | cursor/lrb-058-owner-authorization-aa66 |
| 803 | LRB-057: owner authorization APPROVED — ES Essen..Urlaub (5 rows, final mop-up) | atskaite+audit-skripts+cits | nē | nē | cursor/lrb-056-owner-authorization-aa66 | cursor/lrb-057-owner-authorization-aa66 |
| 802 | LRB-083: RO+RU linguistic review — GALA PASS (LRB_083_FULL_50_50_OWNER_GALA_PASS) | atskaite+audit-skripts | nē | nē | main | cursor/lrb-083-owner-authorization-ed35 |
| 801 | LRB-056: owner authorization APPROVED — ES Appetit..zum (50 rows) | atskaite+audit-skripts+cits | nē | nē | cursor/lrb-055-owner-authorization-aa66 | cursor/lrb-056-owner-authorization-aa66 |
| 800 | LRB-084: GALA PASS — full 50/50 linguistic review complete | atskaite+audit-skripts | nē | nē | main | cursor/lrb-084-owner-authorization-ed35 |
| 799 | LRB-055: owner authorization APPROVED — FI a1-ueber..rechts (23 rows, final mop-up) | atskaite+audit-skripts+cits | nē | nē | cursor/lrb-054-owner-authorization-aa66 | cursor/lrb-055-owner-authorization-aa66 |
| 798 | LRB-054: owner authorization APPROVED — FI a1-huebsch..a1-ueber (50 rows) | atskaite+audit-skripts+cits | nē | nē | cursor/lrb-053-owner-authorization-aa66 | cursor/lrb-054-owner-authorization-aa66 |
| 797 | LRB-085: GALA PASS — full 50/50 linguistic review complete | atskaite+audit-skripts | nē | nē | main | cursor/lrb-085-owner-authorization-ed35 |
| 796 | LRB-053: owner authorization APPROVED — FI a1-ab..a1-hoeren-study (50 rows) | atskaite+audit-skripts+cits | nē | nē | cursor/lrb-052-owner-authorization-aa66 | cursor/lrb-053-owner-authorization-aa66 |
| 795 | LRB-086: GALA PASS — full 50/50 linguistic review complete | atskaite+audit-skripts | nē | nē | main | cursor/lrb-086-owner-authorization-ed35 |
| 794 | LRB-052: owner authorization APPROVED — FI Weg..noch mal (45 rows, final pool) | atskaite+audit-skripts+cits | nē | nē | cursor/lrb-051-owner-authorization-aa66 | cursor/lrb-052-owner-authorization-aa66 |
| 793 | LRB-051: owner authorization APPROVED — FI Telefon..sich waschen (50 rows) | atskaite+audit-skripts+cits | nē | nē | cursor/lrb-050-owner-authorization-aa66 | cursor/lrb-051-owner-authorization-aa66 |
| 792 | LRB-050: owner authorization APPROVED — FI Schnee..Tee (50 rows) | atskaite+audit-skripts+cits | nē | nē | cursor/lrb-049-owner-authorization-aa66 | cursor/lrb-050-owner-authorization-aa66 |
| 791 | LRB-087: GALA PASS — full 50/50 linguistic review complete | atskaite+audit-skripts | nē | nē | main | cursor/lrb-087-owner-authorization-ed35 |
| 790 | LRB-049: owner authorization APPROVED — FI Ostern..schmutzig (50 rows) | atskaite+audit-skripts+cits | nē | nē | cursor/lrb-048-owner-authorization-aa66 | cursor/lrb-049-owner-authorization-aa66 |
| 789 | LRB-048: owner authorization APPROVED — FI morgen..Orange (50 rows) | atskaite+audit-skripts+cits | nē | nē | cursor/lrb-047-owner-authorization-aa66 | cursor/lrb-048-owner-authorization-aa66 |
| 788 | LRB-047: owner authorization APPROVED — FI leider..Montag (50 rows) | atskaite+audit-skripts+cits | nē | nē | cursor/lrb-046-owner-authorization-aa66 | cursor/lrb-047-owner-authorization-aa66 |
| 787 | LRB-088: GALA PASS — LRB_088_FULL_50_50_LINGUISTIC_REVIEW_PASS | atskaite+audit-skripts | nē | nē | main | cursor/lrb-088-owner-authorization-ed35 |
| 786 | LRB-046: owner authorization APPROVED — FI hören..leicht (50 rows) | atskaite+audit-skripts+cits | nē | nē | cursor/lrb-045-owner-authorization-aa66 | cursor/lrb-046-owner-authorization-aa66 |
| 785 | LRB-045: owner authorization APPROVED — FI gesund..höflich (50 rows) | atskaite+audit-skripts+cits | nē | nē | cursor/lrb-044-owner-authorization-aa66 | cursor/lrb-045-owner-authorization-aa66 |
| 784 | LRB-044: owner authorization APPROVED — FI er..gestern (50 rows) | atskaite+audit-skripts+cits | nē | nē | cursor/lrb-043-owner-authorization-aa66 | cursor/lrb-044-owner-authorization-aa66 |
| 783 | LRB-043: owner authorization APPROVED — FI Beispiel..Ende (50 rows) | atskaite+audit-skripts+cits | nē | nē | cursor/lrb-042-owner-authorization-aa66 | cursor/lrb-043-owner-authorization-aa66 |
| 782 | LRB-042: owner authorization APPROVED — FI Apfel..Bein (50 rows) | atskaite+audit-skripts+cits | nē | nē | cursor/lrb-041-owner-authorization-aa66 | cursor/lrb-042-owner-authorization-aa66 |
| 781 | LRB-041: owner authorization APPROVED — final IS mop-up (11 rows) | atskaite+audit-skripts+cits | nē | nē | cursor/lrb-040-owner-authorization-aa66 | cursor/lrb-041-owner-authorization-aa66 |
| 780 | feat(g2-a1): LRB-089 OWNER full-card copy/paste remonts (50 LABOT / 27 cards) | atskaite+audit-skripts | nē | nē | main | cursor/lrb-089-owner-authorization-ed35 |
| 779 | LRB-040: owner authorization APPROVED — Vogel..zwölf (50 IS) | atskaite+audit-skripts+cits | nē | nē | cursor/lrb-039-owner-authorization-aa66 | cursor/lrb-040-owner-authorization-aa66 |
| 778 | LRB-039: owner authorization APPROVED — Spiel..vierzigste (50 IS) | atskaite+audit-skripts+cits | nē | nē | cursor/lrb-038-owner-authorization-aa66 | cursor/lrb-039-owner-authorization-aa66 |
| 777 | feat(g2-a1): LRB-090 Slovak linguistic review (OWNER_AUTHORIZATION_STATUS=APPROVED) | atskaite+audit-skripts | nē | nē | main | cursor/lrb-090-owner-authorization-ed35 |
| 776 | LRB-038: owner authorization APPROVED — schnell..spazieren gehen (50 IS) | atskaite+audit-skripts+cits | nē | nē | cursor/lrb-037-owner-authorization-aa66 | cursor/lrb-038-owner-authorization-aa66 |
| 775 | LRB-037: owner authorization APPROVED — Ostern..schneien (50 IS) | atskaite+audit-skripts+cits | nē | nē | cursor/lrb-036-owner-authorization-aa66 | cursor/lrb-037-owner-authorization-aa66 |
| 774 | LRB-036: owner authorization APPROVED — GPT-5.6 Luna review pending | atskaite+audit-skripts+cits | nē | nē | cursor/lrb-035-owner-authorization-aa66 | cursor/lrb-036-owner-authorization-aa66 |
| 773 | feat(g2-a1): LRB-091 Slovak linguistic review (OWNER_AUTHORIZATION_STATUS=APPROVED) | atskaite+audit-skripts | nē | nē | main | cursor/lrb-091-owner-authorization-ed35 |
| 772 | LRB-035: Gala FULL_50_50 linguistic review PASS — LINGUISTICALLY_CLOSED | atskaite+audit-skripts+cits | nē | nē | cursor/lrb-034-owner-authorization-aa66 | cursor/lrb-035-owner-authorization-aa66 |
| 771 | LRB-034: Gala FULL_50_50 linguistic review PASS — LINGUISTICALLY_CLOSED | atskaite+audit-skripts+cits | nē | nē | cursor/lrb-033-owner-authorization-aa66 | cursor/lrb-034-owner-authorization-aa66 |
| 770 | LRB-033: Gala FULL_50_50 linguistic review PASS — LINGUISTICALLY_CLOSED | atskaite+audit-skripts+cits | nē | nē | cursor/lrb-032-owner-authorization-6530 | cursor/lrb-033-owner-authorization-aa66 |
| 769 | G2/A1 LRB-032: Gala FULL_50_50 linguistic review PASS — LINGUISTICALLY_CLOSED | atskaite+audit-skripts+cits | nē | nē | main | cursor/lrb-032-owner-authorization-6530 |
| 768 | feat(g2-a1): LRB-092 Slovak OWNER-approved overrides (copy/paste) | atskaite+audit-skripts | nē | nē | main | cursor/lrb-092-owner-authorization-ed35 |
| 767 | LRB-031: GPT-5.6 Luna paste applied — PENDING_LINGUISTIC_REVIEW | atskaite+audit-skripts+cits | nē | nē | cursor/lrb-030-owner-authorization-bdda | cursor/lrb-031-owner-authorization-bdda |
| 766 | LRB-030: GPT-5.6 Luna paste applied — PENDING_LINGUISTIC_REVIEW | atskaite+audit-skripts+cits | nē | nē | cursor/lrb-029-owner-authorization-bdda | cursor/lrb-030-owner-authorization-bdda |
| 765 | LRB-093: OWNER review prep — SK 18 + SL 32 (gpt-5.6-luna) | atskaite+audit-skripts | nē | nē | main | cursor/lrb-093-owner-review-pc2-3db2 |
| 764 | LRB-029: GPT-5.6 Luna paste applied — PENDING_LINGUISTIC_REVIEW | atskaite+audit-skripts+cits | nē | nē | cursor/lrb-028-owner-authorization-bdda | cursor/lrb-029-owner-authorization-bdda |
| 763 | LRB-094: OWNER review prep — SL 50 (gpt-5.6-luna) | atskaite+audit-skripts | nē | nē | main | cursor/lrb-094-owner-review-pc2-3db2 |
| 762 | LRB-028: GPT-5.6 Luna paste applied — PENDING_LINGUISTIC_REVIEW | atskaite+audit-skripts+cits | nē | nē | cursor/lrb-027-owner-authorization-bdda | cursor/lrb-028-owner-authorization-bdda |
| 761 | LRB-095: OWNER review prep — SQ 50 (gpt-5.6-luna) | atskaite+audit-skripts | nē | nē | main | cursor/lrb-095-owner-review-pc2-3db2 |
| 760 | LRB-027: GPT-5.6 Luna paste applied — PENDING_LINGUISTIC_REVIEW | atskaite+audit-skripts+cits | nē | nē | cursor/lrb-026-owner-authorization-bdda | cursor/lrb-027-owner-authorization-bdda |
| 759 | LRB-026: owner authorization APPROVED — GPT-5.6 Luna review pending | atskaite+audit-skripts+cits | nē | nē | cursor/lrb-025-owner-authorization-bdda | cursor/lrb-026-owner-authorization-bdda |
| 758 | LRB-096: OWNER review prep — SQ 35 + SR 15 (gpt-5.6-luna) | atskaite+audit-skripts | nē | nē | main | cursor/lrb-096-owner-review-pc2-3db2 |
| 757 | LRB-025: owner authorization APPROVED — GPT-5.6 Luna review pending | atskaite+audit-skripts+cits | nē | nē | cursor/lrb-024-owner-authorization-bdda | cursor/lrb-025-owner-authorization-bdda |
| 756 | LRB-097 PC2 — GALA PASS (LRB_097_FULL_50_50_LINGUISTIC_REVIEW_PASS) | atskaite+audit-skripts | nē | nē | main | cursor/lrb-097-owner-review-pc2-3db2 |
| 755 | LRB-024: owner authorization APPROVED — GPT-5.6 Luna review pending | atskaite+audit-skripts+cits | nē | nē | cursor/lrb-023-owner-authorization-bdda | cursor/lrb-024-owner-authorization-bdda |
| 754 | LRB-023: owner authorization APPROVED — GPT-5.6 Luna review pending | atskaite+audit-skripts+cits | nē | nē | cursor/lrb-022-owner-authorization-bdda | cursor/lrb-023-owner-authorization-bdda |
| 753 | LRB-098 PC2 — GALA PASS (LRB_098_FULL_50_50_LINGUISTIC_REVIEW_PASS) | atskaite+audit-skripts | nē | nē | main | cursor/lrb-098-owner-review-pc2-3db2 |
| 752 | LRB-099 PC2 — GALA PASS (LRB_099_FULL_50_50_LINGUISTIC_REVIEW_PASS) | atskaite+audit-skripts | nē | nē | main | cursor/lrb-099-owner-review-pc2-3db2 |
| 751 | LRB-022: owner authorization APPROVED — GPT-5.6 Luna review pending | atskaite+audit-skripts+cits | nē | nē | cursor/lrb-021-owner-authorization-bdda | cursor/lrb-022-owner-authorization-bdda |
| 750 | LRB-100 PC2 — GALA PASS (LRB_100_FULL_50_50_LINGUISTIC_REVIEW_PASS) | atskaite+audit-skripts | nē | nē | main | cursor/lrb-100-owner-review-pc2-3db2 |
| 749 | LRB-101: PC2 OWNER prep (50 rows — TR 50) | atskaite+audit-skripts | nē | nē | main | cursor/lrb-101-owner-review-pc2-3db2 |
| 748 | LRB-021: owner authorization APPROVED — GPT-5.6 Luna review pending | atskaite+audit-skripts+cits | nē | nē | cursor/lrb-020-owner-authorization-bdda | cursor/lrb-021-owner-authorization-bdda |
| 747 | LRB-102: PC2 OWNER prep (50 rows — TR 20 + UK 30) | atskaite+audit-skripts | nē | nē | main | cursor/lrb-102-owner-review-pc2-3db2 |
| 746 | LRB-103: PC2 OWNER approved overrides applied (25 LABOT) | atskaite+audit-skripts | nē | nē | main | cursor/lrb-103-owner-review-pc2 |
| 745 | LRB-020: Luna copy/paste round 2 — 50 cards (15 FR + 35 GR) | atskaite+audit-skripts | nē | nē | main | cursor/lrb-020-owner-authorization-bdda |
| 744 | LRB-019: FR repair engine + owner prep (50 cards, pending Luna review) | atskaite+audit-skripts | nē | nē | main | cursor/lrb-019-owner-authorization-bdda |
| 743 | LRB-018: full 28-card FR composite reconstruction — 50 LABOT / 0 NELABOT | atskaite+audit-skripts | nē | nē | main | cursor/lrb-018-owner-authorization-bdda |
| 742 | LRB-017: OWNER authorization APPROVED — voll..zweimal (49 LABOT / 1 NELABOT) | atskaite+audit-skripts | nē | nē | main | cursor/lrb-017-owner-authorization-bdda |
| 741 | LRB-016: OWNER authorization APPROVED — GPT-5.6 Luna FI review (Stadt..Vogel) | atskaite+audit-skripts | nē | nē | main | cursor/lrb-016-owner-authorization-bdda |
| 740 | LRB-015: sie/Sie explanation semantic dedupe + full 50/50 linguistic review | atskaite+audit-skripts | nē | nē | main | cursor/lrb-015-owner-authorization-bdda |
| 739 | LRB-014: GPT-5.6 Luna owner authorization + PDF reaudit (öffnen..sauber) | atskaite+audit-skripts | nē | nē | main | cursor/lrb-014-owner-authorization-bdda |
| 738 | LRB-013: GPT-5.6 Luna owner authorization + PDF reaudit (Mittwoch..oder) | atskaite+audit-skripts | nē | nē | main | cursor/lrb-013-owner-authorization-bdda |
| 737 | LRB-012 PDF-STANDARD REAUDIT REPAIR — lieb Rakas + fresh 50-row gates | atskaite+audit-skripts | nē | nē | main | cursor/lrb-012-owner-authorization-bdda |
| 736 | LRB-011 PDF-STANDARD REAUDIT REPAIR — hübsch FI + fresh 50-row gates | atskaite+audit-skripts | nē | nē | main | cursor/lrb-011-owner-authorization-bdda |
| 735 | LRB-010 PDF-STANDARD REAUDIT REPAIR — Gesundheit + composites | atskaite+audit-skripts | nē | nē | main | cursor/lrb-010-owner-authorization-bdda |
| 734 | LRB-009 PDF-STANDARD REAUDIT REPAIR — erst + Geschichte | atskaite+audit-skripts | nē | nē | main | cursor/lrb-009-owner-authorization-bdda |
| 733 | LRB-008 PDF-standard reaudit repair (besuchen / bitte / Bitte) | atskaite+audit-skripts | nē | nē | main | cursor/lrb-008-owner-authorization-bdda |
| 732 | LRB-007 PDF micro-repair — baden + aufs | atskaite+audit-skripts | nē | nē | main | cursor/lrb-007-owner-authorization-bdda |
| 731 | LRB-006 PDF-STANDARD REAUDIT REPAIR — passen/sich/wer/machen/nehmen | atskaite+audit-skripts | nē | nē | main | cursor/lrb-006-owner-authorization-bdda |
| 730 | LRB-005 PDF-STANDARD FULL REAUDIT REPAIR (FI 50/50) | atskaite+audit-skripts | nē | nē | main | cursor/lrb-005-owner-authorization-bdda |
| 729 | LRB-004 FULL PDF-STANDARD REAUDIT REPAIR — 30 LABOT / 20 NELABOT | atskaite+audit-skripts | nē | nē | main | cursor/lrb-004-owner-authorization-bdda |
| 728 | LRB-003: FULL 50/50 gala repair + OWNER authorization APPROVED (gpt-5.6-luna) | atskaite+audit-skripts | nē | nē | main | cursor/lrb-003-owner-authorization-bdda |
| 727 | LRB-001 gala repair: 17 LABOT / 33 NELABOT — FULL 50/50 linguistic review PASS | atskaite+audit-skripts | nē | nē | main | cursor/lrb-001-gala-repair-bdda |
| 726 | LRB-001: AUTHORIZATION METADATA SYNC — FULL_50_50 PASS (17/33) | atskaite+audit-skripts | nē | nē | main | cursor/lrb-001-owner-authorization-bdda |
| 725 | LRB-002 gala repair: 24 LABOT / 26 NELABOT — FULL 50/50 linguistic review PASS | atskaite+audit-skripts | nē | nē | main | cursor/lrb-002-gala-repair-bdda |
| 724 | Fix card deep-link search (?card= / ?study=) | cits | nē | nē | main | cursor/fix-card-search-deep-link-d95e |
| 723 | LRB-041 FINAL SOURCE-SEMANTIC REPAIR — 50/50 PASS | atskaite+audit-skripts | nē | nē | main | cursor/g2-a1-recheck-350-lrb001-bdda |
| 722 | docs(g2-a1): OWNER review repair task pack (anti-bulk + batched workflow) | atskaite | nē | nē | main | cursor/g2-a1-owner-review-repair-task-docs-bdda |
| 721 | fix(g2-a1): linguistic quarantine repair for 21 erroneous OWNER decisions | atskaite+audit-skripts | nē | nē | cursor/g2-a1-owner-review-batch-001 | cursor/g2-a1-linguistic-quarantine-repair-6338 |
| 720 | G2/A1 — OWNER review batch-001 + escalation repair (5241 automatic NELABOT restored) | atskaite+audit-skripts | nē | nē | main | cursor/g2-a1-owner-review-batch-001 |
| 699 | docs(phase1): full READ-ONLY discovery BLOCKED — Luna path not operational | atskaite | nē | nē | main | cursor/phase1-full-read-only-discovery |
| 690 | New Crowdin updates | cits | nē | jā | main | l10n_main |
| 684 | PROJECT_LANGUAGE_MASTER_STANDARD v1.13 — field-level full audit methodology | docs | nē | jā | main | cursor/master-standard-v1-13-f5bc |
| 683 | FR–DE A1 OWNER COPY-ONLY apply — PASS (423/423 LABOT, 481 NELABOT) | atskaite+audit-skripts+cits | jā | jā | main | cursor/fr-a1-owner-gala-copy-only-f5bc |
| 682 | FR–DE A1: MASTER v1.12 pilns audits + OWNER review | atskaite+audit-skripts | nē | nē | main | cursor/fr-de-a1-full-audit-f5bc |
| 678 | ES Kurss L1-21: per-lesson filled OWNER decision files | atskaite+audit-skripts+cits | jā | jā | main | cursor/es-kurss-lessons-01-21-owner-filled-3141 |
| 677 | ES Kurss Lessons: COPY-ONLY apply 520 LABOT (PR #676 OWNER) | atskaite+audit-skripts+cits | jā | jā | main | cursor/es-kurss-lessons-filled-apply-3141 |
| 676 | ES-DE Kurss Lessons 1–21 FIRST_FULL_DISCOVERY audit (MASTER v1.9) | atskaite+audit-skripts | nē | jā | main | cursor/es-kurss-lessons-full-audit-3141 |
| 674 | ES Kurss lessons 01–21 V2 MAIN-CURRENT OWNER decisions | atskaite | nē | nē | main | cursor/es-kurss-lessons-v2-main-current-owner-files-3141 |
| 666 | Add Cloud Agent development environment config | atskaite+audit-skripts+cits | nē | jā | cursor/es-de-a1-a2-full-audit-3141 | cursor/setup-cloud-agent-env-9203 |
| 663 | ES-DE A1+A2 full READ-ONLY audit (NEEDS REPAIR) | atskaite+audit-skripts | nē | jā | main | cursor/es-de-a1-a2-full-audit-3141 |
| 646 | ET A1 multi-translation OWNER review (59 findings) | atskaite+audit-skripts | nē | nē | main | cursor/et-de-a1-multitranslation-owner-review-4a7c |
| 644 | ET Kurss: v1.11 full module audit PASS — ET_KURSS_FINAL_CLOSED_ON_MAIN | atskaite+audit-skripts | nē | nē | main | cursor/et-de-kurss-v111-full-module-audit-4a7c |
| 641 | MASTER v1.10: deterministic completeness + Kurss runtime closure gates | docs+atskaite | nē | jā | main | cursor/master-v110-standard-4a7c |
| 639 | ET Kurss live/runtime reopen audit (reopens closure) | atskaite+audit-skripts | nē | jā | main | cursor/et-de-kurss-live-runtime-reopen-audit-4a7c |
| 636 | ET–DE Kurss: FIRST_FULL_DISCOVERY audit (MASTER v1.9) | atskaite+audit-skripts | nē | jā | main | cursor/et-de-kurss-full-audit-4a7c |
| 628 | ET–DE B2: FIRST_FULL_DISCOVERY audit (355 OWNER backlog, NEEDS OWNER REVIEW) | atskaite+audit-skripts | nē | jā | main | cursor/et-de-b2-full-audit-4a7c |
| 623 | ET–DE B1: OWNER accepted overlay expansion (2738/2738, copy-only mapping) | nav diff pret main | nē | nē | cursor/et-de-b1-full-audit-4a7c | cursor/et-de-b1-owner-accepted-mapping-4a7c |
| 622 | ET–DE C1/C2 + Teikumi: first FULL_DISCOVERY audit (MASTER v1.9) | atskaite+audit-skripts | nē | jā | main | cursor/et-de-c1c2-teikumi-full-audit-4a7c |
| 605 | diagnostic(et-a1): audit discovery stability root-cause — PR604 23 findings | atskaite+audit-skripts | nē | jā | main | cursor/et-a1-discovery-stability-diagnostic-ba9e |
| 604 | audit(et-a1): FULL_DISCOVERY v1.7 post-#603 — 23 NEW findings | atskaite+audit-skripts | nē | jā | main | cursor/et-de-a1-full-audit-v17-post603-ba9e |
| 600 | audit(et-a1): FULL_DISCOVERY MASTER v1.6 post-#599 — 23 findings | atskaite+audit-skripts | nē | jā | main | cursor/et-de-a1-full-audit-v17-ba9e |
| 595 | audit(et-a1): post-closure FULL_DISCOVERY — MASTER v1.5 (100 validated findings) | atskaite+audit-skripts | nē | jā | main | cursor/et-de-a1-full-audit-post-closure-ba9e |
| 593 | audit(et-a1): full ET-DE A1 discovery audit — MASTER v1.5 (171 findings) | atskaite+audit-skripts | nē | jā | main | cursor/et-de-a1-full-audit-v15-ba9e |
| 591 | ET-DE A1 v1.3 audit delta diagnostic — BASELINE_MISMATCH explained (READ-ONLY) | atskaite+audit-skripts | nē | nē | main | cursor/et-a1-v13-delta-diagnostic-ba9e |
| 589 | ET-DE A1 full READ-ONLY audit (MASTER v1.3) — 171 findings, 702/702 Luna | atskaite+audit-skripts | nē | jā | main | cursor/et-de-a1-full-audit-v13-ba9e |
| 584 | PROJECT_LANGUAGE_MASTER_STANDARD v1.1 — 100% legacy parity, standards retired | docs+atskaite+audit-skripts | nē | nē | main | cursor/project-language-master-standard-fffe |
| 583 | DA–DE Kurss final integration consolidation (BLOCKED — 4 OWNER conflicts) | atskaite+audit-skripts+cits | jā | jā | main | cursor/da-kurss-final-integration-fffe |
| 577 | Add DA Kurss static UI parity owner review pack | atskaite | nē | nē | main | cursor/da-kurss-static-ui-parity-owner-pack-fffe |
| 566 | DA–DE Kurss full READ-ONLY audit (1287 fields, NEEDS OWNER REVIEW) | atskaite+audit-skripts | nē | jā | main | cursor/da-kurss-full-audit-fffe |
| 563 | DA–DE Verbs final post-repair audit (READ-ONLY) | atskaite+audit-skripts+cits | jā | jā | main | cursor/da-verbs-final-post-repair-audit-fffe |
| 525 | CS–DE Slovesa final closure (OWNER ACCEPTED / CLOSED) | nav diff pret main | nē | nē | cursor/cs-slovesa-targeted-regression-audit-6ea4 | cursor/cs-slovesa-final-closure-6ea4 |
| 524 | CS–DE Slovesa targeted regression audit (READ-ONLY, PASS) | nav diff pret main | nē | nē | cursor/cs-slovesa-owner-copy-only-apply-6ea4 | cursor/cs-slovesa-targeted-regression-audit-6ea4 |
| 522 | CS–DE Slovesa OWNER source preparation (READ-ONLY, 189/189) | atskaite+audit-skripts | nē | jā | main | cursor/cs-slovesa-owner-source-preparation-6ea4 |
| 521 | CS–DE Věty: final closure — OWNER ACCEPTED / CLOSED | nav diff pret main | nē | nē | cursor/cs-vety-targeted-regression-audit-6ea4 | cursor/cs-vety-final-closure-6ea4 |
| 520 | CS-DE Věty: GPT-5.6 Luna targeted regression audit (328 OWNER scope) | nav diff pret main | nē | nē | cursor/cs-vety-owner-copy-only-apply-6ea4 | cursor/cs-vety-targeted-regression-audit-6ea4 |
| 517 | CS–DE C2 final closure: OWNER ACCEPTED / CLOSED | nav diff pret main | nē | nē | cursor/cs-c2-targeted-regression-audit-6ea4 | cursor/cs-c2-final-closure-6ea4 |
| 516 | CS-DE C2: GPT-5.6 Luna targeted regression audit (75 OWNER scope) | nav diff pret main | nē | nē | cursor/cs-c2-owner-copy-only-apply-6ea4 | cursor/cs-c2-targeted-regression-audit-6ea4 |
| 515 | CS-DE C2: apply 75 OWNER COPY-ONLY LABOT mappings | nav diff pret main | nē | nē | cursor/cs-c2-all-findings-by-card-6ea4 | cursor/cs-c2-owner-copy-only-apply-6ea4 |
| 513 | CS-DE C1: READ-ONLY final closure — OWNER ACCEPTED / CLOSED | nav diff pret main | nē | nē | cursor/cs-c1-targeted-regression-audit-6ea4 | cursor/cs-c1-final-closure-6ea4 |
| 512 | CS-DE C1: GPT-5.6 Luna targeted regression audit (265 OWNER scope) | nav diff pret main | nē | nē | cursor/cs-c1-3-mismatch-micro-repair-6ea4 | cursor/cs-c1-targeted-regression-audit-6ea4 |
| 511 | CS-DE C1: 3 CURRENT_VALUE_MISMATCH dash micro-repair | nav diff pret main | nē | nē | cursor/cs-c1-owner-copy-only-apply-6ea4 | cursor/cs-c1-3-mismatch-micro-repair-6ea4 |
| 509 | CS–DE C1 OWNER review package export (572/572) | atskaite+audit-skripts | nē | nē | main | cursor/cs-c1-owner-review-export-6ea4 |
| 505 | CS-DE B2: full repair source consolidation (READ-ONLY) | atskaite+audit-skripts | nē | nē | main | cursor/cs-b2-repair-source-complete-6ea4 |
| 501 | CS-DE B1: final targeted closure audit (RESIDUAL REPAIR REQUIRED) | atskaite+audit-skripts | nē | nē | main | cursor/cs-b1-final-targeted-closure-audit-6ea4 |
| 497 | CS–DE B1: full audit findings reconciliation (4444/4444) | atskaite+audit-skripts | nē | nē | main | cursor/cs-b1-full-audit-reconciliation-6ea4 |
| 495 | CS–DE B1: production snapshot for OWNER review (3367/3367) | atskaite+audit-skripts | nē | nē | main | cursor/cs-b1-production-snapshot-6ea4 |
| 493 | CS–DE A2 V3 Targeted Regression + Final Closure Audit — CLOSED | nav diff pret main | nē | nē | cursor/cs-a2-final-closure-repair-v3-groups01-03-6ea4 | cursor/cs-a2-v3-targeted-final-closure-audit-6ea4 |
| 492 | CS–DE A2 Final Closure Repair V3 — Apply Groups 01–03 (115/115) | nav diff pret main | nē | nē | cursor/cs-a2-final-closure-findings-by-card-v3-6ea4 | cursor/cs-a2-final-closure-repair-v3-groups01-03-6ea4 |
| 491 | CS-DE A2 final closure findings by-card v3 worklist (READ-ONLY) | nav diff pret main | nē | nē | cursor/cs-a2-final-closure-audit-v2-6ea4 | cursor/cs-a2-final-closure-findings-by-card-v3-6ea4 |
| 490 | CS-DE A2 final closure audit V2 (READ-ONLY): 1640/1640 — A2 NOT CLOSED | nav diff pret main | nē | nē | cursor/cs-a2-final-closure-repair-v2-groups01-03-6ea4 | cursor/cs-a2-final-closure-audit-v2-6ea4 |
| 489 | CS-DE A2 final closure repair V2 groups 01-03: apply 149/149 COPY-ONLY | nav diff pret main | nē | nē | cursor/cs-a2-final-closure-findings-by-card-v2-6ea4 | cursor/cs-a2-final-closure-repair-v2-groups01-03-6ea4 |
| 488 | CS-DE A2 final closure findings by-card v2 worklist (READ-ONLY) | nav diff pret main | nē | nē | cursor/cs-a2-final-closure-audit-6ea4 | cursor/cs-a2-final-closure-findings-by-card-v2-6ea4 |
| 487 | CS-DE A2 full final closure audit (READ-ONLY): 1640/1640 — A2 NOT CLOSED | nav diff pret main | nē | nē | cursor/cs-a2-final-closure-repair-groups01-05-6ea4 | cursor/cs-a2-final-closure-audit-6ea4 |
| 486 | CS-DE A2 final closure repair groups 01-05: apply 205/205 COPY-ONLY | nav diff pret main | nē | nē | cursor/cs-a2-final-closure-findings-by-card-6ea4 | cursor/cs-a2-final-closure-repair-groups01-05-6ea4 |
| 485 | CS-DE A2 final closure findings by-card worklist (READ-ONLY) | nav diff pret main | nē | nē | cursor/cs-a2-final-post-repair-closure-audit-6ea4 | cursor/cs-a2-final-closure-findings-by-card-6ea4 |
| 484 | CS-DE A2 final post-repair closure audit (READ-ONLY) — FAIL | nav diff pret main | nē | nē | cursor/cs-a2-residual-repair-groups01-06-6ea4 | cursor/cs-a2-final-post-repair-closure-audit-6ea4 |
| 483 | CS-DE A2 residual repair groups 01-06 apply (277/277 COPY-ONLY) | nav diff pret main | nē | nē | cursor/cs-a2-post-repair-residual-worklist-6ea4 | cursor/cs-a2-residual-repair-groups01-06-6ea4 |
| 482 | CS-DE A2 post-repair residual findings worklist (READ-ONLY) | nav diff pret main | nē | nē | cursor/cs-a2-post-repair-full-audit-6ea4 | cursor/cs-a2-post-repair-residual-worklist-6ea4 |
| 481 | CS-DE A2 repair group 12 (50/50 COPY-ONLY) | nav diff pret main | nē | nē | cursor/cs-a2-repair-group11-6ea4 | cursor/cs-a2-repair-group12-6ea4 |
| 480 | CS-DE A2 repair group 13 (29/29 COPY-ONLY) — FINAL | nav diff pret main | nē | nē | cursor/cs-a2-repair-group12-6ea4 | cursor/cs-a2-repair-group13-6ea4 |
| 479 | CS-DE A2 repair group 11 (49/50 COPY-ONLY) | nav diff pret main | nē | nē | cursor/cs-a2-repair-group10-6ea4 | cursor/cs-a2-repair-group11-6ea4 |
| 478 | CS-DE A2 repair group 08 (48/50 COPY-ONLY) | nav diff pret main | nē | nē | cursor/cs-a2-repair-group07-6ea4 | cursor/cs-a2-repair-group08-6ea4 |
| 477 | CS-DE A2 repair group 09 (48/50 COPY-ONLY) | nav diff pret main | nē | nē | cursor/cs-a2-repair-group08-6ea4 | cursor/cs-a2-repair-group09-6ea4 |
| 476 | CS-DE A2 repair group 10 (49/50 COPY-ONLY) | nav diff pret main | nē | nē | cursor/cs-a2-repair-group09-6ea4 | cursor/cs-a2-repair-group10-6ea4 |
| 475 | CS-DE A2 repair group 07 (49/50 COPY-ONLY) | nav diff pret main | nē | nē | cursor/cs-a2-repair-group06-6ea4 | cursor/cs-a2-repair-group07-6ea4 |
| 474 | CS-DE A2 post-repair full audit (READ-ONLY) — FAIL | nav diff pret main | nē | nē | cursor/cs-a2-repair-group13-6ea4 | cursor/cs-a2-post-repair-full-audit-6ea4 |
| 473 | CS-DE A2 repair group 06 (251-300, 50/50 COPY-ONLY) | nav diff pret main | nē | nē | cursor/cs-a2-repair-group05-6ea4 | cursor/cs-a2-repair-group06-6ea4 |
| 472 | CS-DE A2 repair group 05 (201-250, 50/50 COPY-ONLY) | nav diff pret main | nē | nē | cursor/cs-a2-repair-group04-6ea4 | cursor/cs-a2-repair-group05-6ea4 |
| 471 | CS-DE A2 repair group 04 (151-200, 50/50 COPY-ONLY) | nav diff pret main | nē | nē | cursor/cs-a2-repair-group03-6ea4 | cursor/cs-a2-repair-group04-6ea4 |
| 470 | CS-DE A2 repair group 03 (101-150, 50/50 COPY-ONLY) | nav diff pret main | nē | nē | cursor/cs-a2-repair-group02-6ea4 | cursor/cs-a2-repair-group03-6ea4 |
| 469 | CS-DE A2 repair group 02 (051-100, 50/50 COPY-ONLY) | nav diff pret main | nē | nē | cursor/cs-a2-repair-group01-6ea4 | cursor/cs-a2-repair-group02-6ea4 |
| 467 | CS-DE A2 all findings by unique card (4162/4162) | atskaite+audit-skripts | nē | nē | main | cursor/cs-a2-all-findings-by-card-6ea4 |
| 465 | CS-DE A1 final closure audit on main @ 3bfbb4bb (NOT CLOSED) | atskaite+audit-skripts | nē | jā | main | cursor/cs-a1-final-closure-audit-on-main-6ea4 |
| 460 | CS-DE A1 final 702/702 audit on main @ d658e2b5 — NOT CLOSED | atskaite+audit-skripts | nē | jā | main | cursor/cs-a1-final-702-audit-on-main-6ea4 |
| 457 | CS-DE A1 MISSING_STUDY_PARITY review package (14/14) | atskaite+audit-skripts+cits | jā | jā | main | cursor/cs-a1-missing-study-parity-review-6ea4 |
| 453 | CS-DE A1 final audit on main (GPT-5.6 Luna, read-only) | atskaite+audit-skripts | nē | jā | main | cursor/cs-a1-final-audit-on-main-6ea4 |
| 451 | CS–DE A1 Full Review — Block 14 + Closure (Findings 651–689) | atskaite+audit-skripts+cits | jā | jā | main | cursor/cs-a1-full-review-block-14-6ea4 |
| 450 | CS–DE A1 Full Review — Block 13 Classification (Findings 601–650) | atskaite+audit-skripts+cits | jā | jā | main | cursor/cs-a1-full-review-block-13-6ea4 |
| 437 | CS–DE A1: ChatGPT/OWNER full audit review package | atskaite+audit-skripts+cits | jā | jā | main | cursor/cs-a1-chatgpt-review-package-6ea4 |
| 434 | CS–DE A1 HIGH micro-regression #2: final closure audit (NOT CLOSED) | atskaite+audit-skripts+cits | jā | jā | main | cursor/cs-a1-high-micro-regression-02-6ea4 |
| 425 | CS A1 HIGH validation: 371/371 Luna (read-only) | atskaite+audit-skripts+cits | jā | jā | main | cursor/cs-a1-high-validation-6ea4 |
| 424 | CS A1 CRITICAL micro-regression: CLOSED (read-only) | atskaite+audit-skripts+cits | jā | jā | main | cursor/cs-a1-critical-micro-regression-6ea4 |
| 422 | CS A1 CRITICAL validation + deterministic root-cause (read-only) | atskaite+audit-skripts+cits | jā | jā | main | cursor/cs-a1-critical-validation-6ea4 |
| 420 | CS A1 batch 15 final: audit fixes index 700–701 | audit-skripts+cits | jā | jā | main | cursor/cs-a1-batch15-final-6ea4 |
| 419 | CS A1 batch 14: audit fixes index 650–699 | audit-skripts+cits | jā | jā | main | cursor/cs-a1-batch14-fixes-6ea4 |
| 418 | CS A1 batch 13: audit fixes index 600–649 | audit-skripts+cits | jā | jā | main | cursor/cs-a1-batch13-fixes-6ea4 |
| 417 | CS A1 audit fixes: index 550–599 (batch 12) | audit-skripts+cits | jā | jā | main | cursor/cs-a1-batch12-fixes-6ea4 |
| 416 | CS A1 audit fixes: index 500–549 (batch 11) | audit-skripts+cits | jā | jā | main | cursor/cs-a1-batch11-fixes-6ea4 |
| 415 | CS A1 audit fixes: index 450–499 (batch 10) | audit-skripts+cits | jā | jā | main | cursor/cs-a1-batch10-fixes-6ea4 |
| 414 | CS A1 audit fixes: index 400–449 (batch 9) | audit-skripts+cits | jā | jā | main | cursor/cs-a1-batch9-fixes-6ea4 |
| 413 | CS A1 audit fixes: index 350–399 (batch 8) | audit-skripts+cits | jā | jā | main | cursor/cs-a1-batch8-fixes-6ea4 |
| 412 | CS A1 batch 7 fixes (index 300–349) | audit-skripts+cits | jā | jā | main | cursor/cs-a1-batch7-fixes-6ea4 |
| 411 | CS A1 batch 6 fixes (index 250–299) | audit-skripts+cits | jā | jā | main | cursor/cs-a1-batch6-fixes-6ea4 |
| 410 | CS A1 batch 5 fixes (index 200–249) | audit-skripts+cits | jā | jā | main | cursor/cs-a1-batch5-fixes-6ea4 |
| 409 | CS A1 batch 4 fixes (index 150–199) | audit-skripts+cits | jā | jā | main | cursor/cs-a1-batch4-fixes-6ea4 |
| 408 | CS A1 batch 3 fixes (index 100–149) | audit-skripts+cits | jā | jā | main | cursor/cs-a1-batch3-fixes-6ea4 |
| 407 | CS–DE A1 batch 2 fixes (index 50–99) | audit-skripts+cits | jā | jā | main | cursor/cs-a1-batch2-fixes-6ea4 |
| 406 | Consolidate CS-DE A1 audit findings into cs-a1-all-findings.json | atskaite+audit-skripts | nē | jā | main | cursor/cs-a1-consolidate-findings-6ea4 |
| 405 | CS–DE A1 batch 1–50: 7 owner-approved translation fixes | cits | jā | jā | main | cursor/cs-a1-batch1-fixes-6ea4 |
| 404 | CS–DE pilns READ-ONLY valodas audits (A1–Kurs) | atskaite+audit-skripts | nē | jā | main | cursor/cs-de-full-audit-6ea4 |
| 403 | CS-DE A1+A2 pilns audits (tikai audits) | docs+atskaite | nē | nē | main | cursor/cs-de-a1a2-full-audit-f3c4 |
| 402 | EN-DE Verbs targeted regression repair (19 OWNER fields) | nav diff pret main | nē | nē | cursor/en-verbs-targeted-regression-audit-6850 | cursor/en-verbs-targeted-regression-repair-6850 |
| 401 | EN-DE Verbs targeted Luna regression audit (post-repair, read-only) | nav diff pret main | nē | nē | cursor/en-verbs-repair-block9-6850 | cursor/en-verbs-targeted-regression-audit-6850 |
| 400 | EN-DE Verbs repair block 9/9 — findings 401–421 (final) | nav diff pret main | nē | nē | cursor/en-verbs-repair-block8-6850 | cursor/en-verbs-repair-block9-6850 |
| 399 | EN–DE Verbs OWNER repair block 8/9 (findings 351–400) | nav diff pret main | nē | nē | cursor/en-verbs-repair-block7-6850 | cursor/en-verbs-repair-block8-6850 |
| 398 | EN–DE Verbs OWNER repair block 7/9 (findings 301–350) | nav diff pret main | nē | nē | cursor/en-verbs-repair-block6-6850 | cursor/en-verbs-repair-block7-6850 |
| 397 | EN–DE Verbs OWNER repair block 6/9 (findings 251–300) | nav diff pret main | nē | nē | cursor/en-verbs-repair-block5-6850 | cursor/en-verbs-repair-block6-6850 |
| 396 | EN–DE Verbs OWNER repair block 5/9 (findings 201–250) | nav diff pret main | nē | nē | cursor/en-verbs-repair-block4-6850 | cursor/en-verbs-repair-block5-6850 |
| 395 | EN–DE Verbs OWNER repair block 4/9 (findings 151–200) | nav diff pret main | nē | nē | cursor/en-verbs-repair-block3-6850 | cursor/en-verbs-repair-block4-6850 |
| 394 | EN–DE Verbs OWNER repair block 3/9 (findings 101–150) | nav diff pret main | nē | nē | cursor/en-verbs-repair-block2-6850 | cursor/en-verbs-repair-block3-6850 |
| 393 | EN–DE Verbs OWNER repair block 2/9 (findings 51–100) | nav diff pret main | nē | nē | cursor/en-verbs-repair-block1-6850 | cursor/en-verbs-repair-block2-6850 |
| 391 | EN–DE Verbs — full Luna linguistic audit (read-only) | atskaite | nē | jā | main | cursor/en-verbs-luna-audit-6850 |
| 384 | EN-DE Teikumi Luna pilns lingvistiskais audits (READ-ONLY) | atskaite | nē | nē | main | cursor/en-sentences-luna-audit-6850 |
| 374 | BS–DE B1: 19 unresolved owner review (read-only) | atskaite | nē | jā | main | cursor/bs-b1-19-unresolved-owner-review-6850 |
| 373 | Global main integration reconciliation audit — NEEDS OWNER REVIEW | atskaite | nē | jā | main | cursor/global-main-integration-reconciliation-audit-6850 |
| 370 | EN-DE B1 main reconciliation audit — FAIL (175 missing repairs) | atskaite | nē | jā | main | cursor/en-b1-main-reconciliation-audit-6850 |
| 369 | EN–DE B1 HIGH full targeted regression audit (#1–#13) | nav diff pret main | nē | nē | cursor/en-b1-high-audit-13-6850 | cursor/en-b1-high-full-regression-audit-6850 |
| 363 | EN-DE B1 HIGH Owner Review #10 — 50 cards (audit prep) | atskaite | nē | nē | main | cursor/en-b1-high-owner-review-10-6850 |
| 362 | Tageordnung B1 production identity verification (report-only) | atskaite | nē | nē | main | cursor/en-b1-tageordnung-verification-6850 |
| 358 | EN-DE B1 HIGH Owner Review #8 — 50 cards (audit prep) | atskaite | nē | nē | main | cursor/en-b1-high-owner-review-08-6850 |
| 356 | EN-DE B1 HIGH Owner Review #7 — 25 cards (audit prep) | atskaite | nē | nē | main | cursor/en-b1-high-owner-review-07-6850 |
| 354 | EN-DE B1 HIGH Owner Review #6 — 25 cards (audit prep) | atskaite+cits | jā | jā | main | cursor/en-b1-high-owner-review-06-6850 |
| 352 | docs(en-b1): HIGH owner review block #5 (25 cards) | atskaite+cits | jā | jā | main | cursor/en-b1-high-owner-review-05-6850 |
| 350 | docs(en-b1): HIGH owner review block #4 (25 cards) | atskaite+cits | jā | jā | main | cursor/en-b1-high-owner-review-04-6850 |
| 348 | docs(en-b1): HIGH owner review block #3 (25 cards) | atskaite+cits | jā | jā | main | cursor/en-b1-high-owner-review-03-6850 |
| 346 | EN–DE B1 HIGH OWNER REVIEW #2 — 25 cards (prep only) | atskaite+cits | jā | jā | main | cursor/en-b1-high-owner-review-02-6850 |
| 344 | docs(en-b1): HIGH owner review preparation block #1 (25 cards) | atskaite+cits | jā | jā | main | cursor/en-b1-high-owner-review-01-6850 |
| 342 | EN–DE B1 full linguistic audit complete — ready for owner review | atskaite | nē | nē | main | cursor/en-b1-full-audit-6850 |
| 330 | BS–DE verbs micro-repair #2 (6/6, repair cycle closed) | nav diff pret main | nē | nē | cursor/bs-verbs-targeted-regression-audit-c1b5 | cursor/bs-verbs-micro-repair-2-c1b5 |
| 329 | BS–DE verbs targeted regression audit (82 forms, 6 findings) | nav diff pret main | nē | nē | cursor/bs-verbs-audit-repairs-c1b5 | cursor/bs-verbs-targeted-regression-audit-c1b5 |
| 328 | BS–DE verbs: apply 82 confirmed linguistic audit repairs | nav diff pret main | nē | nē | cursor/bs-verbs-full-linguistic-audit-c1b5 | cursor/bs-verbs-audit-repairs-c1b5 |
| 327 | BS–DE verbs full linguistic audit (189 verbs, 945 forms) | nav diff pret main | nē | nē | cursor/bs-verbs-translation-c1b5 | cursor/bs-verbs-full-linguistic-audit-c1b5 |
| 324 | BS–DE C2: targeted regression audit (34 repaired cards) | atskaite | nē | nē | main | cursor/bs-c2-targeted-regression-audit-c1b5 |
| 322 | BS–DE C2: full linguistic audit report (219 cards, audit only) | atskaite | nē | nē | main | cursor/bs-c2-linguistic-audit-only-c1b5 |
| 296 | BS–DE B1 generation (GPT-5.6 Luna + batching) | atskaite+audit-skripts+cits | jā | jā | main | cursor/bs-b1-generation-c1b5 |
| 279 | A1-LF-001/002/003: bringen, Brötchen, finden | cits | jā | jā | main | cursor/a1-lf-fixes-001-2d63 |
| 273 | fix(hu): align registry status and safe technical HU boundary fixes | audit-skripts+cits | jā | jā | main | cursor/hu-de-content-boundary-7968 |
| 137 | Add Kurss scroll diagnostic mode (?debugKurss=1) | cits | nē | jā | main | cursor/kurss-scroll-diagnostics-f4ff |
| 111 | Rewrite Latvian text in a1-bitte-study card | cits | jā | jā | main | cursor/fix-bitte-study-lv-text-5a8d |
| 109 | Rewrite Latvian text in a1-bitte study card | cits | jā | jā | main | cursor/fix-bitte-lv-text-5a8d |
| 108 | Fix Latvian text in a1-appetit study card | cits | jā | jā | main | cursor/fix-appetit-lv-text-5a8d |
| 33 | Boost shield halo glow opacity by another 15% | cits | nē | nē | main | cursor/shield-halo-boost-5-fb55 |
| 32 | Boost shield halo glow opacity by another 15% | cits | nē | nē | main | cursor/shield-halo-boost-4-fb55 |
| 13 | Info PopUp vizuālais uzlabojums + drošības loga novietojuma root-cause labojums | docs+audit-skripts+cits | nē | jā | main | cursor/popup-visual-polish-2c5e |
| 12 | Fix: #resetConfirmPanel fiziski iesprostots melnajā kartītē (root-cause labojums) | docs+audit-skripts+cits | nē | jā | main | cursor/fix-reset-popup-position-1c96 |
| 8 | Dzēst 'Pārskatīt zināmos' pogu + labot sesijas automātisku ielādi | docs+audit-skripts+cits | nē | jā | main | cursor/remove-review-button-fix-loading-8f43 |
| 4 | Dzēst "Jaukt secību" pogu, ieviest automātisku sesijas sajaukšanu | docs+audit-skripts+cits | nē | jā | main | cursor/remove-shuffle-button-auto-shuffle-ba93 |
| 3 | Melns fons + peldošo vārdu fona animācijas noņemšana | docs+audit-skripts+cits | nē | jā | main | cursor/black-background-remove-word-rain-0435 |

