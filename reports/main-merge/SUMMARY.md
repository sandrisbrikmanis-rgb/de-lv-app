# Main integrācija: PR #875

STAGE RESULT: **PASS**

ORIGIN_MAIN_BEFORE: `f00f6b72afd693a8f6f86b42cd1631a0be7d9a6d`
ORIGIN_MAIN_AFTER: `d3826548d6940d7389e9cd7aeb6e175383f83551`
MERGE_SHA: `d3826548d6940d7389e9cd7aeb6e175383f83551`
Datums: 2026-10-04

Merge vecāki: `f00f6b72afd693a8f6f86b42cd1631a0be7d9a6d` un `af3913cb84ab9418b6a4c23de6881562a8a7bcc3`.
Ziņojums: Merge pull request #875 from sandrisbrikmanis-rgb/cursor/study-deep-audit-f86b.

## B3 atcelšana (nav izpildīta)

```
git revert -m 1 d3826548d6940d7389e9cd7aeb6e175383f83551
```

## A1

`git fetch --all --prune`. `origin/main` sakrita ar gaidīto SHA `f00f6b72afd693a8f6f86b42cd1631a0be7d9a6d`. `git merge-base --is-ancestor` pret `origin/main` deva 0. Papildu komiti uz main nebija. Konfliktu pārbaude šī iemesla dēļ nebija jādara; atsevišķi `git merge-tree --write-tree origin/main af3913cb` arī deva 0.

## A2

`#875` galva `af3913cb84ab9418b6a4c23de6881562a8a7bcc3`. `git merge-base --is-ancestor` deva 0 visiem trim:

| PR | SHA | rezultāts |
|---|---|---|
| #873 | `401bd0ca7035e57230e2cc831863bc52c546ebb6` | iekļauts |
| #869 | `a8d3c8a2643a3043d1ef273750750e07741dc172` | iekļauts |
| #866 | `1071a13e3c6c534542aba7163e00208eaec80d4d` | iekļauts |

`#859` un `#863` saturs pret `origin/main` (LV `data/a1.js`–`data/c1.js`):

| marķieris | #875 | main |
|---|---|---|
| die Enden | 1 | 0 |
| die Wäschen | 1 | 0 |
| die Werbungen | 1 | 0 |
| die Wiedersehen | 1 | 0 |
| die Schäden | 1 | 0 |
| die Jagderlaubnisse | 1 | 0 |
| die Pfahlbauten | 1 | 0 |
| tālais zibens | 1 | 0 |
| die Morgen | 4 | 3 |
| die Urlaube | 4 | 3 |

Septiņi Goethe daudzskaitļi: die Enden, die Morgen, die Urlaube, die Wäschen, die Werbungen, die Wiedersehen, die Schäden. Jagderlaubnisse un Wetterleuchten LV `tālais zibens` ir diffā. Pfahlbau `de_plural` ir `die Pfahlbauten`.

## A3

`git diff --name-status origin/main...af3913cb84ab9418b6a4c23de6881562a8a7bcc3`: **314** faili. Statuss A 50, M 264.

| klase | skaits |
|---|---|
| data/ | 132 |
| www/data/ | 132 |
| reports/ | 46 |
| scripts/ (tikai jauni) | 4 |
| cita klase | 0 |

`git diff -- languages ui.js www/ui.js crowdin/content` tukšs. Esošie `scripts/` faili nav mainīti (M skaits scripts/ = 0). Datu failu vārdi ir tikai `a1.js`–`c2.js`.

Jaunie skripti: `scripts/audit-owner-lv-additions.js`, `scripts/audit-study-de-deep.js`, `scripts/restore-study-de-sync.js`, `scripts/sync-study-de.js`.

Atskaites: main-integration 3, owner-lv-additions 9, study-de-sync 22, study-deep-and-accents 10, study-deep-audit 2.

## A4

| pārbaude | rezultāts |
|---|---|
| `node --check` 268 mainītajiem JS | FAIL 0 |
| `node scripts/audit-study-de-deep.js` | TEXT 0, EXTRA 0, MISSING 0, ORDER 0, exit 0 |
| `audit-de-consistency` (audita zara kopija, ROOT `/tmp/accent-gate` → šis koks) | TEXT 5414, MISSING 307, EXTRA 2, ORDER 0, UNICODE_ONLY 760, exit 0 |
| `audit-lv-de-verify` | FINDING 80, REVIEW 51, EMPTY_PLURAL 492, records 8618, exit 0 |
| `npm test` | exit 1, teksts `Error: no test specified` |

`package.json` lauks `test` ir aizvietotājs bez testiem. Nav datu smoke skripta. Pārējie `test:*` skripti ir Crowdin un fāžu infrastruktūra, un tie šajā solī netika pildīti.

## A5

`gh pr view 875` pirms bāzes maiņas: state OPEN, mergeable MERGEABLE, mergeStateStatus CLEAN, reviewDecision tukšs, head `af3913cb84ab9418b6a4c23de6881562a8a7bcc3`. `gh pr checks 875`: Cursor Bugbot pass. Aizsardzības API atbildēja 403, tāpēc prasības netika nolasītas. `--admin` netika lietots. Apvienošana izdevās bez apiešanas.

## B

B1. `gh pr edit 875 --base main` atgrieza 403 `updatePullRequest`. Bāze nomainīta uz `main` ar PR atjaunināšanas rīku. Pēc tam `baseRefName=main`, head tas pats, MERGEABLE, CLEAN. Failu saraksts caur Pulls files API: 314, identisks A3 (`comm` bez starpības). `gh pr diff` atteica 406, jo diff pārsniedz 300 failus.

B2. `gh pr merge 875 --merge --match-head-commit af3913cb84ab9418b6a4c23de6881562a8a7bcc3`. `--delete-branch` netika dots. Zars `cursor/study-deep-audit-f86b` paliek uz `af3913cb84ab9418b6a4c23de6881562a8a7bcc3`.

## C1

Workflow `pages-build-deployment`, run `37217442378`, headSha `d3826548d6940d7389e9cd7aeb6e175383f83551`, conclusion **success**. https://github.com/sandrisbrikmanis-rgb/de-lv-app/actions/runs/37217442378

## C2

Pages: `source.branch=main`, `source.path=/`, `html_url=https://sandrisbrikmanis-rgb.github.io/de-lv-app/`.

| pārbaude | rezultāts |
|---|---|
| `data/b2.js` satur `die Pfahlbauten` | jā (HTTP 200, 316767 baiti; `www/data/b2.js` tie paši baiti) |
| `data/c1.js` satur `tālais zibens` | jā |
| `data/da/a1.js` a1-bis comparison | 3 rindas |
| `data/en/a1.js` a1-liter Study | atslēgas id, layout, translation, explanation, sectionAccents; examples un comparison nav, tāpat kā LV |
| `data/b1.js` satur `die Jagderlaubnisse` | jā |

## Aizvērtie PR

| PR | stāvoklis | komentārs |
|---|---|---|
| #859 | MERGED (GitHub, kad galva kļuva sasniedzama no main; atsevišķa apvienošana netika taisīta) | Saturs iekļauts #875 un apvienots uz main (`d3826548d6940d7389e9cd7aeb6e175383f83551`). |
| #863 | MERGED (tāpat) | tas pats teksts |
| #866 | MERGED (tāpat) | tas pats teksts |
| #869 | MERGED (tāpat) | tas pats teksts |
| #873 | CLOSED, nav merge | Saturs iekļauts #875 un apvienots uz main (`d3826548d6940d7389e9cd7aeb6e175383f83551`). |
| #870 | CLOSED, nav merge | Aizvērts bez apvienošanas. Noņēma Study rindas, kas bija valodas versijas LV rindām. Aizstāts ar #873. |
| #872 | CLOSED, nav merge | Aizvērts. Apturēts realignment (EXTRA vārti pārkāpti). Aizstāts ar #873. |
| #871 | CLOSED, nav merge | Aizvērts bez apvienošanas. Tikai analīzes atskaite, nav datu izmaiņu. Zars un atskaites saglabāti. |
| #874 | CLOSED, nav merge | Aizvērts bez apvienošanas. Akcentu datu izmaiņas netiek ņemtas. Audita skripts un atskaites ir #875. |

`gh pr close --comment` nevarēja pievienot komentāru (GraphQL `addComment` 403). Komentāri un #870–#874 aizvēršana izdarīta ar PR rīku, bez `--delete-branch`. Zari paliek. `origin/main` pēc tam joprojām ir MERGE_SHA; #859/#863/#866/#869 stāvokļa maiņa nepievienoja komitu.

## Atvērtie PR

Skaits: **282**. Ar `data/` vai `www/data/` izmaiņām pret jauno main: **45**. Konfliktē ar jauno main (`git merge-tree --write-tree`): **74**. Bez failu diff pret main: **51**. Citi atvērtie PR netika aizvērti.

Īsais saraksts (numurs, veids, data/, konflikts). Nosaukumi ir MANIFEST.

| numurs | veids | data/ vai www/data/ | konfliktē |
|---|---|---|---|
| 868 | cits | nē | nē |
| 867 | atskaite+audit-skripts | nē | nē |
| 865 | atskaite+audit-skripts | nē | nē |
| 864 | atskaite+audit-skripts | nē | nē |
| 862 | atskaite+audit-skripts | nē | nē |
| 861 | atskaite+audit-skripts | nē | nē |
| 860 | atskaite+audit-skripts | nē | nē |
| 858 | atskaite+audit-skripts | nē | nē |
| 857 | atskaite+audit-skripts | nē | nē |
| 856 | docs | nē | nē |
| 855 | docs | nē | nē |
| 854 | atskaite+audit-skripts+cits | nē | nē |
| 853 | atskaite+audit-skripts | nē | nē |
| 852 | atskaite+audit-skripts | nē | nē |
| 850 | atskaite+audit-skripts+cits | nē | nē |
| 849 | atskaite+audit-skripts+cits | nē | nē |
| 848 | atskaite+audit-skripts+cits | nē | nē |
| 847 | atskaite+audit-skripts+cits | nē | nē |
| 846 | docs+atskaite+audit-skripts+cits | jā | nē |
| 845 | docs+atskaite+audit-skripts+cits | jā | nē |
| 844 | docs+atskaite+audit-skripts+cits | jā | nē |
| 843 | docs+atskaite+audit-skripts+cits | jā | nē |
| 842 | docs+atskaite+audit-skripts+cits | jā | nē |
| 829 | atskaite+audit-skripts | nē | jā |
| 828 | atskaite+audit-skripts+cits | nē | nē |
| 827 | atskaite+audit-skripts+cits | nē | nē |
| 826 | atskaite+audit-skripts | nē | nē |
| 825 | atskaite+audit-skripts+cits | nē | nē |
| 824 | atskaite+audit-skripts+cits | nē | nē |
| 823 | atskaite+audit-skripts | nē | nē |
| 822 | atskaite+audit-skripts+cits | nē | nē |
| 821 | atskaite+audit-skripts | nē | nē |
| 820 | atskaite+audit-skripts+cits | nē | nē |
| 819 | atskaite+audit-skripts | nē | nē |
| 818 | atskaite+audit-skripts+cits | nē | nē |
| 817 | atskaite+audit-skripts | nē | nē |
| 816 | atskaite+audit-skripts | nē | nē |
| 815 | atskaite+audit-skripts+cits | nē | nē |
| 814 | atskaite+audit-skripts+cits | nē | nē |
| 813 | atskaite+audit-skripts+cits | nē | nē |
| 812 | atskaite+audit-skripts | nē | nē |
| 811 | atskaite+audit-skripts+cits | nē | nē |
| 810 | atskaite+audit-skripts+cits | nē | nē |
| 809 | atskaite+audit-skripts | nē | nē |
| 808 | atskaite+audit-skripts+cits | nē | nē |
| 807 | atskaite+audit-skripts | nē | nē |
| 806 | atskaite+audit-skripts+cits | nē | nē |
| 805 | atskaite+audit-skripts | nē | nē |
| 804 | atskaite+audit-skripts+cits | nē | nē |
| 803 | atskaite+audit-skripts+cits | nē | nē |
| 802 | atskaite+audit-skripts | nē | nē |
| 801 | atskaite+audit-skripts+cits | nē | nē |
| 800 | atskaite+audit-skripts | nē | nē |
| 799 | atskaite+audit-skripts+cits | nē | nē |
| 798 | atskaite+audit-skripts+cits | nē | nē |
| 797 | atskaite+audit-skripts | nē | nē |
| 796 | atskaite+audit-skripts+cits | nē | nē |
| 795 | atskaite+audit-skripts | nē | nē |
| 794 | atskaite+audit-skripts+cits | nē | nē |
| 793 | atskaite+audit-skripts+cits | nē | nē |
| 792 | atskaite+audit-skripts+cits | nē | nē |
| 791 | atskaite+audit-skripts | nē | nē |
| 790 | atskaite+audit-skripts+cits | nē | nē |
| 789 | atskaite+audit-skripts+cits | nē | nē |
| 788 | atskaite+audit-skripts+cits | nē | nē |
| 787 | atskaite+audit-skripts | nē | nē |
| 786 | atskaite+audit-skripts+cits | nē | nē |
| 785 | atskaite+audit-skripts+cits | nē | nē |
| 784 | atskaite+audit-skripts+cits | nē | nē |
| 783 | atskaite+audit-skripts+cits | nē | nē |
| 782 | atskaite+audit-skripts+cits | nē | nē |
| 781 | atskaite+audit-skripts+cits | nē | nē |
| 780 | atskaite+audit-skripts | nē | nē |
| 779 | atskaite+audit-skripts+cits | nē | nē |
| 778 | atskaite+audit-skripts+cits | nē | nē |
| 777 | atskaite+audit-skripts | nē | nē |
| 776 | atskaite+audit-skripts+cits | nē | nē |
| 775 | atskaite+audit-skripts+cits | nē | nē |
| 774 | atskaite+audit-skripts+cits | nē | nē |
| 773 | atskaite+audit-skripts | nē | nē |
| 772 | atskaite+audit-skripts+cits | nē | nē |
| 771 | atskaite+audit-skripts+cits | nē | nē |
| 770 | atskaite+audit-skripts+cits | nē | nē |
| 769 | atskaite+audit-skripts+cits | nē | nē |
| 768 | atskaite+audit-skripts | nē | nē |
| 767 | atskaite+audit-skripts+cits | nē | nē |
| 766 | atskaite+audit-skripts+cits | nē | nē |
| 765 | atskaite+audit-skripts | nē | nē |
| 764 | atskaite+audit-skripts+cits | nē | nē |
| 763 | atskaite+audit-skripts | nē | nē |
| 762 | atskaite+audit-skripts+cits | nē | nē |
| 761 | atskaite+audit-skripts | nē | nē |
| 760 | atskaite+audit-skripts+cits | nē | nē |
| 759 | atskaite+audit-skripts+cits | nē | nē |
| 758 | atskaite+audit-skripts | nē | nē |
| 757 | atskaite+audit-skripts+cits | nē | nē |
| 756 | atskaite+audit-skripts | nē | nē |
| 755 | atskaite+audit-skripts+cits | nē | nē |
| 754 | atskaite+audit-skripts+cits | nē | nē |
| 753 | atskaite+audit-skripts | nē | nē |
| 752 | atskaite+audit-skripts | nē | nē |
| 751 | atskaite+audit-skripts+cits | nē | nē |
| 750 | atskaite+audit-skripts | nē | nē |
| 749 | atskaite+audit-skripts | nē | nē |
| 748 | atskaite+audit-skripts+cits | nē | nē |
| 747 | atskaite+audit-skripts | nē | nē |
| 746 | atskaite+audit-skripts | nē | nē |
| 745 | atskaite+audit-skripts | nē | nē |
| 744 | atskaite+audit-skripts | nē | nē |
| 743 | atskaite+audit-skripts | nē | nē |
| 742 | atskaite+audit-skripts | nē | nē |
| 741 | atskaite+audit-skripts | nē | nē |
| 740 | atskaite+audit-skripts | nē | nē |
| 739 | atskaite+audit-skripts | nē | nē |
| 738 | atskaite+audit-skripts | nē | nē |
| 737 | atskaite+audit-skripts | nē | nē |
| 736 | atskaite+audit-skripts | nē | nē |
| 735 | atskaite+audit-skripts | nē | nē |
| 734 | atskaite+audit-skripts | nē | nē |
| 733 | atskaite+audit-skripts | nē | nē |
| 732 | atskaite+audit-skripts | nē | nē |
| 731 | atskaite+audit-skripts | nē | nē |
| 730 | atskaite+audit-skripts | nē | nē |
| 729 | atskaite+audit-skripts | nē | nē |
| 728 | atskaite+audit-skripts | nē | nē |
| 727 | atskaite+audit-skripts | nē | nē |
| 726 | atskaite+audit-skripts | nē | nē |
| 725 | atskaite+audit-skripts | nē | nē |
| 724 | cits | nē | nē |
| 723 | atskaite+audit-skripts | nē | nē |
| 722 | atskaite | nē | nē |
| 721 | atskaite+audit-skripts | nē | nē |
| 720 | atskaite+audit-skripts | nē | nē |
| 699 | atskaite | nē | nē |
| 690 | cits | nē | jā |
| 684 | docs | nē | jā |
| 683 | atskaite+audit-skripts+cits | jā | jā |
| 682 | atskaite+audit-skripts | nē | nē |
| 678 | atskaite+audit-skripts+cits | jā | jā |
| 677 | atskaite+audit-skripts+cits | jā | jā |
| 676 | atskaite+audit-skripts | nē | jā |
| 674 | atskaite | nē | nē |
| 666 | atskaite+audit-skripts+cits | nē | jā |
| 663 | atskaite+audit-skripts | nē | jā |
| 646 | atskaite+audit-skripts | nē | nē |
| 644 | atskaite+audit-skripts | nē | nē |
| 641 | docs+atskaite | nē | jā |
| 639 | atskaite+audit-skripts | nē | jā |
| 636 | atskaite+audit-skripts | nē | jā |
| 628 | atskaite+audit-skripts | nē | jā |
| 623 | nav diff pret main | nē | nē |
| 622 | atskaite+audit-skripts | nē | jā |
| 605 | atskaite+audit-skripts | nē | jā |
| 604 | atskaite+audit-skripts | nē | jā |
| 600 | atskaite+audit-skripts | nē | jā |
| 595 | atskaite+audit-skripts | nē | jā |
| 593 | atskaite+audit-skripts | nē | jā |
| 591 | atskaite+audit-skripts | nē | nē |
| 589 | atskaite+audit-skripts | nē | jā |
| 584 | docs+atskaite+audit-skripts | nē | nē |
| 583 | atskaite+audit-skripts+cits | jā | jā |
| 577 | atskaite | nē | nē |
| 566 | atskaite+audit-skripts | nē | jā |
| 563 | atskaite+audit-skripts+cits | jā | jā |
| 525 | nav diff pret main | nē | nē |
| 524 | nav diff pret main | nē | nē |
| 522 | atskaite+audit-skripts | nē | jā |
| 521 | nav diff pret main | nē | nē |
| 520 | nav diff pret main | nē | nē |
| 517 | nav diff pret main | nē | nē |
| 516 | nav diff pret main | nē | nē |
| 515 | nav diff pret main | nē | nē |
| 513 | nav diff pret main | nē | nē |
| 512 | nav diff pret main | nē | nē |
| 511 | nav diff pret main | nē | nē |
| 509 | atskaite+audit-skripts | nē | nē |
| 505 | atskaite+audit-skripts | nē | nē |
| 501 | atskaite+audit-skripts | nē | nē |
| 497 | atskaite+audit-skripts | nē | nē |
| 495 | atskaite+audit-skripts | nē | nē |
| 493 | nav diff pret main | nē | nē |
| 492 | nav diff pret main | nē | nē |
| 491 | nav diff pret main | nē | nē |
| 490 | nav diff pret main | nē | nē |
| 489 | nav diff pret main | nē | nē |
| 488 | nav diff pret main | nē | nē |
| 487 | nav diff pret main | nē | nē |
| 486 | nav diff pret main | nē | nē |
| 485 | nav diff pret main | nē | nē |
| 484 | nav diff pret main | nē | nē |
| 483 | nav diff pret main | nē | nē |
| 482 | nav diff pret main | nē | nē |
| 481 | nav diff pret main | nē | nē |
| 480 | nav diff pret main | nē | nē |
| 479 | nav diff pret main | nē | nē |
| 478 | nav diff pret main | nē | nē |
| 477 | nav diff pret main | nē | nē |
| 476 | nav diff pret main | nē | nē |
| 475 | nav diff pret main | nē | nē |
| 474 | nav diff pret main | nē | nē |
| 473 | nav diff pret main | nē | nē |
| 472 | nav diff pret main | nē | nē |
| 471 | nav diff pret main | nē | nē |
| 470 | nav diff pret main | nē | nē |
| 469 | nav diff pret main | nē | nē |
| 467 | atskaite+audit-skripts | nē | nē |
| 465 | atskaite+audit-skripts | nē | jā |
| 460 | atskaite+audit-skripts | nē | jā |
| 457 | atskaite+audit-skripts+cits | jā | jā |
| 453 | atskaite+audit-skripts | nē | jā |
| 451 | atskaite+audit-skripts+cits | jā | jā |
| 450 | atskaite+audit-skripts+cits | jā | jā |
| 437 | atskaite+audit-skripts+cits | jā | jā |
| 434 | atskaite+audit-skripts+cits | jā | jā |
| 425 | atskaite+audit-skripts+cits | jā | jā |
| 424 | atskaite+audit-skripts+cits | jā | jā |
| 422 | atskaite+audit-skripts+cits | jā | jā |
| 420 | audit-skripts+cits | jā | jā |
| 419 | audit-skripts+cits | jā | jā |
| 418 | audit-skripts+cits | jā | jā |
| 417 | audit-skripts+cits | jā | jā |
| 416 | audit-skripts+cits | jā | jā |
| 415 | audit-skripts+cits | jā | jā |
| 414 | audit-skripts+cits | jā | jā |
| 413 | audit-skripts+cits | jā | jā |
| 412 | audit-skripts+cits | jā | jā |
| 411 | audit-skripts+cits | jā | jā |
| 410 | audit-skripts+cits | jā | jā |
| 409 | audit-skripts+cits | jā | jā |
| 408 | audit-skripts+cits | jā | jā |
| 407 | audit-skripts+cits | jā | jā |
| 406 | atskaite+audit-skripts | nē | jā |
| 405 | cits | jā | jā |
| 404 | atskaite+audit-skripts | nē | jā |
| 403 | docs+atskaite | nē | nē |
| 402 | nav diff pret main | nē | nē |
| 401 | nav diff pret main | nē | nē |
| 400 | nav diff pret main | nē | nē |
| 399 | nav diff pret main | nē | nē |
| 398 | nav diff pret main | nē | nē |
| 397 | nav diff pret main | nē | nē |
| 396 | nav diff pret main | nē | nē |
| 395 | nav diff pret main | nē | nē |
| 394 | nav diff pret main | nē | nē |
| 393 | nav diff pret main | nē | nē |
| 391 | atskaite | nē | jā |
| 384 | atskaite | nē | nē |
| 374 | atskaite | nē | jā |
| 373 | atskaite | nē | jā |
| 370 | atskaite | nē | jā |
| 369 | nav diff pret main | nē | nē |
| 363 | atskaite | nē | nē |
| 362 | atskaite | nē | nē |
| 358 | atskaite | nē | nē |
| 356 | atskaite | nē | nē |
| 354 | atskaite+cits | jā | jā |
| 352 | atskaite+cits | jā | jā |
| 350 | atskaite+cits | jā | jā |
| 348 | atskaite+cits | jā | jā |
| 346 | atskaite+cits | jā | jā |
| 344 | atskaite+cits | jā | jā |
| 342 | atskaite | nē | nē |
| 330 | nav diff pret main | nē | nē |
| 329 | nav diff pret main | nē | nē |
| 328 | nav diff pret main | nē | nē |
| 327 | nav diff pret main | nē | nē |
| 324 | atskaite | nē | nē |
| 322 | atskaite | nē | nē |
| 296 | atskaite+audit-skripts+cits | jā | jā |
| 279 | cits | jā | jā |
| 273 | audit-skripts+cits | jā | jā |
| 137 | cits | nē | jā |
| 111 | cits | jā | jā |
| 109 | cits | jā | jā |
| 108 | cits | jā | jā |
| 33 | cits | nē | nē |
| 32 | cits | nē | nē |
| 13 | docs+audit-skripts+cits | nē | jā |
| 12 | docs+audit-skripts+cits | nē | jā |
| 8 | docs+audit-skripts+cits | nē | jā |
| 4 | docs+audit-skripts+cits | nē | jā |
| 3 | docs+audit-skripts+cits | nē | jā |

## Atvēršanai un lejupielādei

Saites ved uz satura komitu `bf504f844e5aa920531da18c8a8c4603224e69b7`.

- SUMMARY blob: https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/bf504f844e5aa920531da18c8a8c4603224e69b7/reports/main-merge/SUMMARY.md
- SUMMARY raw: https://raw.githubusercontent.com/sandrisbrikmanis-rgb/de-lv-app/bf504f844e5aa920531da18c8a8c4603224e69b7/reports/main-merge/SUMMARY.md
- MANIFEST blob: https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/bf504f844e5aa920531da18c8a8c4603224e69b7/reports/main-merge/MANIFEST.md
- MANIFEST raw: https://raw.githubusercontent.com/sandrisbrikmanis-rgb/de-lv-app/bf504f844e5aa920531da18c8a8c4603224e69b7/reports/main-merge/MANIFEST.md
