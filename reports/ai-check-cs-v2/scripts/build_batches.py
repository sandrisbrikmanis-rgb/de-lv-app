#!/usr/bin/env python3
"""Deterministic Czech AI-check batches, v2.

Reads stored pairs and dictionary statuses. Does not write data/.
"""

from __future__ import annotations

import csv
import json
import random
import re
import unicodedata
from collections import defaultdict
from pathlib import Path

REPO = Path(__file__).resolve().parents[3]
V1 = REPO / "reports" / "ai-check-cs"
LEVELS = ["a1", "a2", "b1", "b2", "c1", "c2"]
SEED = 20261007
CONTROL_ID_START = 5001
CZECH_CHARS = set("ěřůďťňýĚŘŮĎŤŇÝ")
PREFIXES = tuple(
    sorted(
        [
            "auseinander",
            "zusammen",
            "hindurch",
            "herunter",
            "herauf",
            "heraus",
            "herein",
            "hinauf",
            "hinaus",
            "hinein",
            "hinter",
            "wieder",
            "zurück",
            "gegen",
            "durch",
            "unter",
            "über",
            "wider",
            "empor",
            "statt",
            "fehl",
            "fest",
            "fort",
            "weg",
            "los",
            "vor",
            "nach",
            "mit",
            "auf",
            "aus",
            "ein",
            "ent",
            "emp",
            "ver",
            "zer",
            "miss",
            "dar",
            "her",
            "hin",
            "ab",
            "an",
            "be",
            "er",
            "ge",
            "um",
            "zu",
        ],
        key=len,
        reverse=True,
    )
)
RANK = {
    "shared_stem": 0,
    "shared_prefix": 1,
    "compound": 2,
    "common_prefix": 3,
    "shared_lv": 4,
    "shared_theme": 5,
}
STOP = {
    "kuras",
    "kuriem",
    "kurām",
    "kuru",
    "kurš",
    "kura",
    "kuri",
    "šajā",
    "tajā",
    "viens",
    "viena",
    "savas",
    "savus",
    "savām",
    "citas",
    "citiem",
    "tāds",
    "tāda",
    "šāds",
    "šāda",
    "kļūt",
    "būt",
    "nav",
    "arī",
    "bet",
    "kad",
    "lai",
    "pie",
    "par",
    "kas",
}
KNOWN_SPEC = [
    ("cs-000061", "wider", "", "Vs", ["pret"]),
    ("cs-000064", "Wechsel", "der", "Posun", ["maiņa"]),
    ("cs-000126", "austreten", "", "Vystěhovat", ["izmīt", "nomīt", "izstāties"]),
    ("cs-000144", "These", "die", "Práce", ["tēze"]),
]
MEANING_RE = re.compile(r"\((\d+)\)\s*(.*?)(?=\s*\(\d+\)|$)")
TOKEN_RE = re.compile(r"[^\W\d_]{5,}", re.UNICODE)


def nfc_cf(value):
    return unicodedata.normalize("NFC", value or "").casefold().strip()


def de_key(de, article):
    return (nfc_cf(article), nfc_cf(de))


def show_de(de, article):
    article = (article or "").strip()
    return f"{article} {de}" if article else de


def parse_meanings(text, k):
    found = MEANING_RE.findall((text or "").strip())
    numbers = [int(number) for number, _ in found]
    texts = [piece.strip() for _, piece in found]
    if numbers != list(range(1, k + 1)):
        raise SystemExit(f"meaning parse {text!r} != k {k}")
    return texts


def has_czech(text):
    return any(char in CZECH_CHARS for char in text)


def example_pairs(card):
    study = card.get("study") or {}
    pairs = []
    for item in study.get("examples") or []:
        if isinstance(item, dict):
            pairs.append((item.get("de") or "", item.get("lv") or ""))
        elif isinstance(item, str):
            pairs.append((item, ""))
    return pairs


def load_faces(directory):
    faces = {}
    for level in LEVELS:
        text = (directory / f"{level}.js").read_text(encoding="utf-8")
        data, _ = json.JSONDecoder().raw_decode(text[text.index("[") :])
        faces[level] = [
            {
                "de": card.get("de") or "",
                "article": card.get("de_article") or "",
                "lv": card.get("lv") or "",
                "examples": example_pairs(card),
            }
            for card in data
        ]
    return faces


def pick_example(lv_examples, cs_examples):
    cs_lv = {lv for _de, lv in cs_examples if lv}
    chosen = None
    for de, lv in lv_examples:
        if de or lv:
            chosen = (de, lv)
            break
    if chosen is None:
        for de, _lv in cs_examples:
            if de and not has_czech(de) and de not in cs_lv:
                return de, "—"
        return "—", "—"
    de, lv = chosen
    de_out = de if de and not has_czech(de) and de not in cs_lv else "—"
    lv_out = lv if lv and not has_czech(lv) and lv not in cs_lv else "—"
    return de_out, lv_out


def split_prefix(lemma):
    for prefix in PREFIXES:
        if lemma.startswith(prefix) and len(lemma) - len(prefix) >= 3:
            return prefix, lemma[len(prefix) :]
    return "", lemma


def form_reason(left, right):
    if left["de_cf"] == right["de_cf"]:
        return None
    if left["pref"] and left["pref"] == right["pref"] and len(left["stem"]) >= 3 and len(right["stem"]) >= 3:
        if left["stem"] == right["stem"] and len(left["stem"]) >= 4:
            return ("shared_stem", left["stem"])
        return ("shared_prefix", left["pref"])
    if left["stem"] and left["stem"] == right["stem"] and len(left["stem"]) >= 4:
        return ("shared_stem", left["stem"])
    shorter, longer = (left["de_cf"], right["de_cf"]) if len(left["de_cf"]) <= len(right["de_cf"]) else (right["de_cf"], left["de_cf"])
    if len(shorter) >= 4 and longer.startswith(shorter):
        return ("compound", shorter)
    limit = min(len(left["de_cf"]), len(right["de_cf"]))
    common = 0
    while common < limit and left["de_cf"][common] == right["de_cf"][common]:
        common += 1
    if common >= 5 and common < len(left["de_cf"]) and common < len(right["de_cf"]):
        return ("common_prefix", left["de_cf"][:common])
    return None


def meaning_tokens(meanings):
    tokens = set()
    for match in TOKEN_RE.findall(" ".join(meanings).casefold()):
        if match not in STOP and len(match) >= 5:
            tokens.add(match)
    return tokens


def shared_lv(left, right):
    return bool(left["lv_cf"] & right["lv_cf"])


def load_pairs():
    pairs = []
    with (V1 / "pairs.csv").open(encoding="utf-8", newline="") as handle:
        for row in csv.DictReader(handle):
            k = int(row["k"])
            meanings = parse_meanings(row["lv_meanings"], k)
            article = row["de_article"]
            pair = {
                "id": row["id"],
                "level": row["level"],
                "index": int(row["index"]),
                "de": row["de"],
                "article": article,
                "cs": row["cs_word"],
                "k": k,
                "meanings": meanings,
                "de_key": de_key(row["de"], article),
                "de_cf": nfc_cf(row["de"]),
                "cs_cf": nfc_cf(row["cs_word"]),
                "lv_cf": {nfc_cf(item) for item in meanings if len(nfc_cf(item)) >= 3},
            }
            pair["pos"] = pos_of(article, meanings)
            pair["pref"], pair["stem"] = split_prefix(pair["de_cf"])
            pair["tokens"] = meaning_tokens(meanings)
            pairs.append(pair)
    return pairs


def pos_of(article, meanings):
    if nfc_cf(article) in {"der", "die", "das"}:
        return "noun"
    first = nfc_cf(meanings[0]) if meanings else ""
    if first.endswith("ties") or first.endswith("t"):
        return "verb"
    return "other"


def load_status():
    status = {}
    full_cs = {}
    equivalents = defaultdict(set)
    directory = REPO / "reports" / "translation-check-cs-reverse" / "results"
    for path in sorted(directory.glob("part-*.csv")):
        with path.open(encoding="utf-8", newline="") as handle:
            for row in csv.DictReader(handle):
                key = (row["level"], int(row["index"]))
                status[key] = row["final_status"]
                full_cs[key] = row["cs"]
                for token in (row.get("equivalent") or "").split():
                    equivalents[key].add(nfc_cf(token))
                for part in re.split(r"[•/;]", row["cs"]):
                    piece = nfc_cf(part)
                    if piece:
                        equivalents[key].add(piece)
    return status, full_cs, equivalents


def load_flags():
    flagged_cards = set()
    flagged_cs = set()
    with (V1 / "mechanical-flags.csv").open(encoding="utf-8", newline="") as handle:
        for row in csv.DictReader(handle):
            flagged_cards.add((row["level"], int(row["index"])))
            flagged_cs.add(nfc_cf(row["cs"]))
    return flagged_cards, flagged_cs


def instruction_text():
    lines = (V1 / "batches" / "batch-001.md").read_text(encoding="utf-8").splitlines()
    return "\n".join(lines[:5])


def rotation(batch_number):
    versions = ["A", "B", "C"]
    vendors = [
        ("Anthropic", "ai-anthropic"),
        ("Gemini", "ai-gemini"),
        ("ChatGPT", "ai-chatgpt"),
    ]
    shift = (batch_number - 1) % 3
    assigned = {}
    for index, vendor in enumerate(vendors):
        assigned[versions[(index + shift) % 3]] = vendor
    return assigned


def lcp_len(left, right):
    limit = min(len(left), len(right))
    count = 0
    while count < limit and left[count] == right[count]:
        count += 1
    return count


class Builder:
    def __init__(self, lv_faces, cs_faces):
        self.lv_faces = lv_faces
        self.cs_faces = cs_faces
        self.pairs = load_pairs()
        self.by_id = {pair["id"]: pair for pair in self.pairs}
        self.status, self.full_cs, self.equivalents = load_status()
        self.flagged_cards, self.flagged_cs = load_flags()
        self.known = self._known()
        self.hard_donors = defaultdict(list)
        self._index_near()
        self.positive_pool = self._positives()

    def _known(self):
        found = []
        for ident, de, article, cs, meanings in KNOWN_SPEC:
            pair = self.by_id[ident]
            if pair["de"] != de or (pair["article"] or "") != article or pair["cs"] != cs or pair["meanings"] != meanings:
                raise SystemExit(f"known hard mismatch {ident}")
            found.append(pair)
        return found

    def _other_same_cs(self, pair):
        matches = [
            other
            for other in self.pairs
            if other["cs_cf"] == pair["cs_cf"] and other["id"] != pair["id"]
        ]
        matches.sort(key=lambda item: item["id"])
        return matches[0] if matches else pair

    def _bad_donor(self, pair):
        if (pair["level"], pair["index"]) in self.flagged_cards:
            return True
        if pair["cs_cf"] in self.flagged_cs:
            return True
        if "." in pair["cs"]:
            return True
        return False

    def _index_near(self):
        by_pref = defaultdict(list)
        by_stem = defaultdict(list)
        by_lv = defaultdict(list)
        by_token = defaultdict(list)
        by_five = defaultdict(list)
        for pair in self.pairs:
            if pair["pref"]:
                by_pref[(pair["pos"], pair["pref"])].append(pair)
            if len(pair["stem"]) >= 4:
                by_stem[(pair["pos"], pair["stem"])].append(pair)
            for meaning in pair["lv_cf"]:
                by_lv[(pair["pos"], meaning)].append(pair)
            for token in pair["tokens"]:
                by_token[(pair["pos"], token)].append(pair)
            if len(pair["de_cf"]) >= 5:
                by_five[(pair["pos"], pair["de_cf"][:5])].append(pair)
        best = defaultdict(dict)

        def consider(left, right, kind, detail):
            if left["id"] == right["id"] or left["pos"] != right["pos"]:
                return
            if left["de_key"] == right["de_key"] or left["cs_cf"] == right["cs_cf"]:
                return
            rank = RANK[kind]
            previous = best[left["id"]].get(right["id"])
            if previous is None or rank < previous[0]:
                best[left["id"]][right["id"]] = (rank, kind, detail, right)

        def consume(bucket, limit=60):
            if len(bucket) > limit:
                ordered = sorted(bucket, key=lambda item: item["id"])
                for index, left in enumerate(ordered):
                    for right in ordered[index + 1 : index + 1 + 25]:
                        yield left, right
                        yield right, left
            else:
                for left in bucket:
                    for right in bucket:
                        if left["id"] != right["id"]:
                            yield left, right

        for bucket in by_pref.values():
            for left, right in consume(bucket):
                reason = form_reason(left, right)
                if reason:
                    consider(left, right, reason[0], reason[1])
        for bucket in by_stem.values():
            for left, right in consume(bucket):
                reason = form_reason(left, right)
                if reason:
                    consider(left, right, reason[0], reason[1])
        for bucket in by_five.values():
            for left, right in consume(bucket):
                reason = form_reason(left, right)
                if reason:
                    consider(left, right, reason[0], reason[1])
        for bucket in by_lv.values():
            for left, right in consume(bucket, limit=40):
                if shared_lv(left, right):
                    consider(left, right, "shared_lv", "lv")
        for bucket in by_token.values():
            for left, right in consume(bucket, limit=30):
                if left["tokens"] & right["tokens"]:
                    consider(left, right, "shared_theme", "theme")
        for ident, donors in best.items():
            ordered = sorted(donors.values(), key=lambda item: (item[0], item[3]["id"]))
            self.hard_donors[ident] = ordered
        with_form = 0
        for ident, donors in self.hard_donors.items():
            if any(item[0] <= RANK["shared_lv"] for item in donors):
                with_form += 1
        print(f"NEAR_INDEX pairs_with_donor {sum(1 for item in self.hard_donors.values() if item)} form_or_lv {with_form}")

    def _positives(self):
        open_cards = {(pair["level"], pair["index"]) for pair in self.pairs}
        pool = []
        for level in LEVELS:
            for index, face in enumerate(self.lv_faces[level]):
                key = (level, index)
                if key in open_cards:
                    continue
                final = self.status.get(key)
                if final not in {"CONFIRMED_BILINGUAL", "CONFIRMED_REVERSE"}:
                    continue
                if key in self.flagged_cards:
                    continue
                czech = self.cs_faces[level][index]["lv"]
                if "•" in czech or "/" in czech or ";" in czech or "." in czech:
                    continue
                if nfc_cf(czech) in self.flagged_cs:
                    continue
                meanings = [part.strip() for part in face["lv"].split("•") if part.strip()]
                if len(meanings) != 1:
                    continue
                if nfc_cf(czech) != nfc_cf(self.full_cs.get(key, czech)):
                    continue
                article = face["article"]
                pair = {
                    "id": f"card:{level}:{index}",
                    "level": level,
                    "index": index,
                    "de": face["de"],
                    "article": article,
                    "cs": czech,
                    "k": 1,
                    "meanings": meanings,
                    "de_key": de_key(face["de"], article),
                    "de_cf": nfc_cf(face["de"]),
                    "cs_cf": nfc_cf(czech),
                    "lv_cf": {nfc_cf(meanings[0])} if len(nfc_cf(meanings[0])) >= 3 else set(),
                    "pos": pos_of(article, meanings),
                    "pref": "",
                    "stem": "",
                    "tokens": meaning_tokens(meanings),
                }
                pool.append(pair)
        pool.sort(key=lambda item: (item["level"], item["index"]))
        print(f"POSITIVE_POOL {len(pool)}")
        return pool

    def _donor_ok(self, base, donor, blocked_cs):
        if self._bad_donor(donor):
            return False
        if donor["cs_cf"] in blocked_cs or donor["cs_cf"] == base["cs_cf"]:
            return False
        if donor["de_key"] == base["de_key"]:
            return False
        if donor["cs_cf"] in self.equivalents.get((base["level"], base["index"]), set()):
            return False
        return True

    def _easy_ok(self, base, donor, blocked_cs):
        if not self._donor_ok(base, donor, blocked_cs):
            return False
        if donor["pos"] != base["pos"]:
            return False
        if form_reason(base, donor):
            return False
        if shared_lv(base, donor):
            return False
        if base["tokens"] & donor["tokens"]:
            return False
        if lcp_len(base["de_cf"], donor["de_cf"]) >= 4:
            return False
        return True

    def assign(self):
        known_ids = {pair["id"] for pair in self.known}
        batches = []
        for index in range(49):
            if index == 0:
                ordinary_cap = 88
                controls = {"POS": 6, "NEG_NEAR": 1, "NEG_EASY": 1}
            elif index in {1, 2}:
                ordinary_cap = 89
                controls = {"POS": 5, "NEG_NEAR": 5, "NEG_EASY": 1}
            else:
                ordinary_cap = 88
                controls = {"POS": 6, "NEG_NEAR": 5, "NEG_EASY": 1}
            batches.append(
                {
                    "ordinary": [],
                    "known": [],
                    "controls": [],
                    "cap": ordinary_cap,
                    "need": controls,
                    "blocked_de": set(),
                    "blocked_cs": set(),
                }
            )
        for pair in self.known:
            batches[0]["known"].append(pair)
            batches[0]["blocked_de"].add(pair["de_key"])
            batches[0]["blocked_cs"].add(pair["cs_cf"])
        groups = defaultdict(list)
        for pair in self.pairs:
            if pair["id"] in known_ids:
                continue
            groups[pair["de_key"]].append(pair)
        ordered_groups = sorted(groups.items(), key=lambda item: (-len(item[1]), item[0]))
        for _key, members in ordered_groups:
            for pair in sorted(members, key=lambda item: item["id"]):
                self._place(batches, pair)
        ordinary = sum(len(batch["ordinary"]) for batch in batches)
        if ordinary != 4314:
            raise SystemExit(f"ordinary {ordinary} != 4314")
        self._add_controls(batches)
        rows = []
        for index, batch in enumerate(batches):
            batch_rows = []
            for pair in batch["known"]:
                donor = self._other_same_cs(pair)
                if donor["id"] == pair["id"]:
                    note = "KNOWN_HARD batch-001; čehu vārds ir šīs kartītes vārds; cita pāra ar šo čehu vārdu nav"
                else:
                    note = "KNOWN_HARD batch-001; čehu vārds ir šīs kartītes vārds un vēl vienā pārī"
                batch_rows.append(self._row_from_pair(pair, "NEG_NEAR", pair, donor, note, True))
            for pair in batch["ordinary"]:
                batch_rows.append(self._row_from_pair(pair, "REAL", pair, None, "", False))
            batch_rows.extend(batch["controls"])
            if len(batch_rows) != 100:
                raise SystemExit(f"batch {index+1} rows {len(batch_rows)}")
            rng = random.Random(SEED + index)
            rng.shuffle(batch_rows)
            rows.append(batch_rows)
        self._assert_pairs(rows)
        return rows

    def _place(self, batches, pair):
        choices = []
        for index, batch in enumerate(batches):
            if len(batch["ordinary"]) >= batch["cap"]:
                continue
            if pair["de_key"] in batch["blocked_de"]:
                continue
            if pair["cs_cf"] in batch["blocked_cs"]:
                continue
            choices.append((batch["cap"] - len(batch["ordinary"]), -index))
        if choices:
            choices.sort(reverse=True)
            index = -choices[0][1]
            batches[index]["ordinary"].append(pair)
            batches[index]["blocked_de"].add(pair["de_key"])
            return
        if not self._repair_place(batches, pair):
            raise SystemExit(f"cannot place {pair['id']} {pair['de']}")

    def _repair_place(self, batches, pair):
        roomy = [index for index, batch in enumerate(batches) if len(batch["ordinary"]) < batch["cap"]]
        closed = [index for index in range(len(batches)) if pair["de_key"] not in batches[index]["blocked_de"] and index not in roomy]
        for source in closed:
            if pair["cs_cf"] in batches[source]["blocked_cs"]:
                continue
            for item_index, item in enumerate(list(batches[source]["ordinary"])):
                for dest in roomy:
                    if item["de_key"] in batches[dest]["blocked_de"]:
                        continue
                    if item["cs_cf"] in batches[dest]["blocked_cs"]:
                        continue
                    batches[source]["ordinary"].pop(item_index)
                    batches[source]["blocked_de"].remove(item["de_key"])
                    batches[dest]["ordinary"].append(item)
                    batches[dest]["blocked_de"].add(item["de_key"])
                    batches[source]["ordinary"].append(pair)
                    batches[source]["blocked_de"].add(pair["de_key"])
                    return True
        return False

    def _row_from_pair(self, shown, kind, base, donor, construction, known_hard, new_id=None):
        return {
            "id": new_id or shown["id"],
            "kind": kind,
            "de": shown["de"],
            "article": shown["article"],
            "cs": shown["cs"],
            "k": shown["k"],
            "meanings": list(shown["meanings"]),
            "level": base["level"],
            "index": base["index"],
            "base_id": base["id"],
            "donor_id": "" if donor is None else donor["id"],
            "construction": construction,
            "known_hard": "yes" if known_hard else "no",
            "de_key": shown["de_key"],
            "cs_cf": nfc_cf(shown["cs"]),
            "base_de": base["de"],
            "donor_de": "" if donor is None else donor["de"],
            "donor_cs": "" if donor is None else donor["cs"],
            "donor_level": "" if donor is None else donor["level"],
            "donor_index": "" if donor is None else donor["index"],
        }

    def _add_controls(self, batches):
        next_id = CONTROL_ID_START
        used_positive = set()
        reserved_de = {pair["de_key"] for pair in self.known}
        by_pos = defaultdict(list)
        for pair in self.pairs:
            by_pos[pair["pos"]].append(pair)
        for items in by_pos.values():
            items.sort(key=lambda item: item["id"])
        base_use = defaultdict(int)
        for batch_index, batch in enumerate(batches):
            blocked_de = set(batch["blocked_de"])
            blocked_cs = {pair["cs_cf"] for pair in batch["ordinary"]}
            blocked_cs.update(pair["cs_cf"] for pair in batch["known"])
            multi_k3 = sum(1 for pair in batch["ordinary"] + batch["known"] if pair["k"] >= 3)
            multi_k2 = sum(1 for pair in batch["ordinary"] + batch["known"] if pair["k"] == 2)
            need_k3 = multi_k2 % 2 == 1 and multi_k3 == 0

            def take_id():
                nonlocal next_id
                ident = f"cs-{next_id:06d}"
                next_id += 1
                return ident

            for _ in range(batch["need"]["POS"]):
                picked = self._pick_positive(batch_index, blocked_de, blocked_cs, used_positive, reserved_de)
                if picked is None:
                    raise SystemExit(f"POS shortfall batch {batch_index+1}")
                used_positive.add(picked["id"])
                blocked_de.add(picked["de_key"])
                blocked_cs.add(picked["cs_cf"])
                status = self.status[(picked["level"], picked["index"])]
                batch["controls"].append(
                    self._row_from_pair(
                        picked,
                        "POS",
                        picked,
                        None,
                        f"POS copy of dictionary {status}",
                        False,
                        take_id(),
                    )
                )
            for _ in range(batch["need"]["NEG_NEAR"]):
                picked = self._pick_near(batch_index, blocked_de, blocked_cs, reserved_de, base_use, require_k3=need_k3)
                if picked is None and need_k3:
                    picked = self._pick_near(batch_index, blocked_de, blocked_cs, reserved_de, base_use, require_k3=False)
                if picked is None:
                    raise SystemExit(f"NEG_NEAR shortfall batch {batch_index+1}")
                base, donor, kind, detail = picked
                if base["k"] >= 3:
                    need_k3 = False
                base_use[base["id"]] += 1
                blocked_de.add(base["de_key"])
                blocked_cs.add(donor["cs_cf"])
                shown = dict(base)
                shown["cs"] = donor["cs"]
                shown["cs_cf"] = donor["cs_cf"]
                batch["controls"].append(
                    self._row_from_pair(
                        shown,
                        "NEG_NEAR",
                        base,
                        donor,
                        f"NEG_NEAR {kind}:{detail}",
                        False,
                        take_id(),
                    )
                )
            for _ in range(batch["need"]["NEG_EASY"]):
                picked = self._pick_easy(batch_index, blocked_de, blocked_cs, reserved_de, by_pos, base_use, require_k3=need_k3)
                if picked is None and need_k3:
                    picked = self._pick_easy(batch_index, blocked_de, blocked_cs, reserved_de, by_pos, base_use, require_k3=False)
                if picked is None:
                    raise SystemExit(f"NEG_EASY shortfall batch {batch_index+1}")
                base, donor = picked
                if base["k"] >= 3:
                    need_k3 = False
                base_use[base["id"]] += 1
                blocked_de.add(base["de_key"])
                blocked_cs.add(donor["cs_cf"])
                shown = dict(base)
                shown["cs"] = donor["cs"]
                shown["cs_cf"] = donor["cs_cf"]
                batch["controls"].append(
                    self._row_from_pair(
                        shown,
                        "NEG_EASY",
                        base,
                        donor,
                        "NEG_EASY same_pos_not_near",
                        False,
                        take_id(),
                    )
                )
            if need_k3:
                raise SystemExit(f"batch {batch_index+1} still needs a k>=3 row for permutation balance")
        print(f"CONTROL_IDS {CONTROL_ID_START}..{next_id-1} count {next_id-CONTROL_ID_START}")

    def _pick_positive(self, batch_index, blocked_de, blocked_cs, used_positive, reserved_de):
        if not self.positive_pool:
            return None
        start = (batch_index * 13) % len(self.positive_pool)
        sequence = self.positive_pool[start:] + self.positive_pool[:start]
        for pair in sequence:
            if pair["id"] in used_positive:
                continue
            if pair["de_key"] in blocked_de or pair["de_key"] in reserved_de:
                continue
            if pair["cs_cf"] in blocked_cs:
                continue
            return pair
        return None

    def _pick_near(self, batch_index, blocked_de, blocked_cs, reserved_de, base_use, require_k3):
        ordered = sorted(self.pairs, key=lambda item: (base_use[item["id"]], item["id"]))
        start = (batch_index * 17) % len(ordered)
        sequence = ordered[start:] + ordered[:start]
        fallback = None
        checked = 0
        for base in sequence:
            if require_k3 and base["k"] < 3:
                continue
            if base["de_key"] in blocked_de or base["de_key"] in reserved_de:
                continue
            checked += 1
            if checked > 700 and fallback is not None:
                break
            form_choice = None
            theme_choice = None
            for rank, kind, detail, donor in self.hard_donors.get(base["id"], [])[:80]:
                if not self._donor_ok(base, donor, blocked_cs):
                    continue
                if rank <= RANK["shared_lv"] and form_choice is None:
                    form_choice = (base, donor, kind, detail)
                    break
                if rank == RANK["shared_theme"] and theme_choice is None:
                    theme_choice = (base, donor, kind, detail)
            if form_choice:
                return form_choice
            if theme_choice and fallback is None:
                fallback = theme_choice
        return fallback

    def _pick_easy(self, batch_index, blocked_de, blocked_cs, reserved_de, by_pos, base_use, require_k3):
        ordered = sorted(self.pairs, key=lambda item: (base_use[item["id"]], item["id"]))
        start = (batch_index * 19) % len(ordered)
        sequence = ordered[start:] + ordered[:start]
        checked = 0
        for base in sequence:
            if require_k3 and base["k"] < 3:
                continue
            if base["de_key"] in blocked_de or base["de_key"] in reserved_de:
                continue
            pool = by_pos[base["pos"]]
            if not pool:
                continue
            checked += 1
            if checked > 250:
                break
            same = [item for item in pool if item["level"] == base["level"]]
            other = [item for item in pool if item["level"] != base["level"]]
            cursor = (batch_index * 29 + int(base["id"].split("-")[1])) % max(len(pool), 1)
            ordered_donors = same[cursor % len(same) :] + same[: cursor % len(same)] if same else []
            ordered_donors += other
            for donor in ordered_donors[:350]:
                if self._easy_ok(base, donor, blocked_cs):
                    return base, donor
        return None

    def _assert_pairs(self, batches):
        seen = []
        for batch in batches:
            for row in batch:
                if row["kind"] == "REAL" or row["known_hard"] == "yes":
                    seen.append(row["base_id"])
        if sorted(seen) != sorted(self.by_id):
            raise SystemExit(f"real id set {len(seen)} unique {len(set(seen))}")
        print(f"REAL_IDS {len(seen)}")


def orders_for(row, k2_plan):
    k = row["k"]
    canonical = list(range(1, k + 1))
    if k == 1:
        return {"A": canonical, "B": canonical, "C": canonical}
    if k == 2:
        swapped = [2, 1]
        identity = [1, 2]
        which = k2_plan[row["id"]]
        return {"A": identity, "B": swapped, "C": which}
    version_a = canonical[1:] + canonical[:1]
    version_b = list(reversed(canonical))
    version_c = canonical[2:] + canonical[:2]
    if version_c == version_a or version_c == version_b:
        version_c = canonical[1:-1] + [canonical[-1], canonical[0]]
    if len({tuple(version_a), tuple(version_b), tuple(version_c)}) < 3:
        raise SystemExit(f"versions collapsed k={k}")
    if version_a[0] == 1 or version_b[0] == 1 or version_c[0] == 1:
        raise SystemExit(f"canonical 1 is first k={k}")
    return {"A": version_a, "B": version_b, "C": version_c}


def k2_plan_for(rows):
    k2_rows = sorted((row for row in rows if row["k"] == 2), key=lambda item: item["id"])
    differ_from_a = (len(k2_rows) + 1) // 2
    plan = {}
    for index, row in enumerate(k2_rows):
        plan[row["id"]] = [2, 1] if index < differ_from_a else [1, 2]
    return plan


def format_meanings(meanings, order):
    parts = []
    for shown, canonical in enumerate(order, start=1):
        parts.append(f"({shown}) {meanings[canonical - 1]}")
    return " ".join(parts)


def write_outputs(out_dir, batches, lv_index, cs_index):
    batch_dir = out_dir / "batches"
    key_dir = out_dir / "keys"
    batch_dir.mkdir(parents=True, exist_ok=True)
    key_dir.mkdir(parents=True, exist_ok=True)
    for path in list(batch_dir.glob("*")) + list(key_dir.glob("*")):
        if path.is_file():
            path.unlink()
    instruction = instruction_text()
    control_rows = []
    stats = {"POS": 0, "NEG_NEAR": 0, "NEG_EASY": 0, "KNOWN_HARD": 0, "REAL": 0, "constructions": defaultdict(int)}
    for batch_index, rows in enumerate(batches, start=1):
        plan = k2_plan_for(rows)
        assigned = rotation(batch_index)
        version_orders = []
        for row in rows:
            version_orders.append(orders_for(row, plan))
            if row["kind"] == "REAL":
                stats["REAL"] += 1
            elif row["known_hard"] == "yes":
                stats["KNOWN_HARD"] += 1
                stats["NEG_NEAR"] += 1
            else:
                stats[row["kind"]] += 1
            if row["kind"] != "REAL":
                control_rows.append(row)
                stats["constructions"][row["construction"]] += 1
        for version in ("A", "B", "C"):
            vendor_name, _folder = assigned[version]
            path = batch_dir / f"batch-{batch_index:03d}-{version}.md"
            lines = [
                f"HOW-TO: šo versiju {version} saņem {vendor_name}.",
                "Saglabā atbildi kā CSV ar kolonnām id,meaning,confidence.",
                f"Anthropic -> ai-anthropic/batch-{batch_index:03d}.csv (versija { [key for key, value in assigned.items() if value[0]=='Anthropic'][0] }).",
                f"Gemini -> ai-gemini/batch-{batch_index:03d}.csv (versija { [key for key, value in assigned.items() if value[0]=='Gemini'][0] }).",
                f"ChatGPT -> ai-chatgpt/batch-{batch_index:03d}.csv (versija { [key for key, value in assigned.items() if value[0]=='ChatGPT'][0] }).",
                "Katru AI lieto jaunā sesijā. Otra AI atbildi nerāda. Kontroļu atslēgu partijā neliek.",
                "Ja divi AI nesakrīt vai kāds saka NONE vai UNSURE, trešajam AI dod tikai tās rindas.",
                "",
                instruction,
                "Ja piemēra teikums neizšķir nozīmi, atbildi UNSURE.",
                "",
                "| id | vācu vārds (ar artikulu) | čehu vārds | LV nozīmes (1) … (2) … | vācu piemērs | LV piemērs |",
                "|---|---|---|---|---|---|",
            ]
            for row, orders in zip(rows, version_orders):
                de_example, lv_example = pick_example(
                    lv_index[row["level"]][row["index"]],
                    cs_index[row["level"]][row["index"]],
                )
                if "|" in de_example or "|" in lv_example or "|" in row["cs"] or any("|" in item for item in row["meanings"]):
                    raise SystemExit(f"pipe in row {row['id']}")
                meaning = format_meanings(row["meanings"], orders[version])
                lines.append(
                    f"| {row['id']} | {show_de(row['de'], row['article'])} | {row['cs']} | {meaning} | {de_example} | {lv_example} |"
                )
            path.write_text("\n".join(lines) + "\n", encoding="utf-8")
            key_path = key_dir / f"permutation-{batch_index:03d}-{version}.csv"
            with key_path.open("w", encoding="utf-8", newline="") as handle:
                writer = csv.writer(handle, lineterminator="\n")
                writer.writerow(["id", "canonical", "displayed"])
                table = []
                for row, orders in zip(rows, version_orders):
                    for shown, canonical in enumerate(orders[version], start=1):
                        table.append((row["id"], canonical, shown))
                for ident, canonical, shown in sorted(table, key=lambda item: (item[0], item[1])):
                    writer.writerow([ident, canonical, shown])
    control_rows.sort(key=lambda item: item["id"])
    with (key_dir / "control-key.csv").open("w", encoding="utf-8", newline="") as handle:
        writer = csv.writer(handle, lineterminator="\n")
        writer.writerow(
            [
                "id",
                "control_type",
                "construction",
                "base_id",
                "donor_id",
                "base_level",
                "base_index",
                "base_de",
                "donor_level",
                "donor_index",
                "donor_de",
                "donor_cs",
                "known_hard",
            ]
        )
        for row in control_rows:
            writer.writerow(
                [
                    row["id"],
                    row["kind"],
                    row["construction"],
                    row["base_id"],
                    row["donor_id"],
                    row["level"],
                    row["index"],
                    row["base_de"],
                    row["donor_level"],
                    row["donor_index"],
                    row["donor_de"],
                    row["donor_cs"],
                    row["known_hard"],
                ]
            )
    print(f"STATS REAL {stats['REAL']} POS {stats['POS']} NEG_NEAR {stats['NEG_NEAR']} NEG_EASY {stats['NEG_EASY']} KNOWN_HARD {stats['KNOWN_HARD']}")
    for key, value in sorted(stats["constructions"].items()):
        print(f"CONSTRUCTION {value} {key}")
    return stats


def main():
    import argparse

    parser = argparse.ArgumentParser()
    parser.add_argument("--out", default=str(REPO / "reports" / "ai-check-cs-v2"))
    args = parser.parse_args()
    print("LOAD")
    lv_faces = load_faces(REPO / "data")
    cs_faces = load_faces(REPO / "data" / "cs")
    lv_index = {level: [face["examples"] for face in faces] for level, faces in lv_faces.items()}
    cs_index = {level: [face["examples"] for face in faces] for level, faces in cs_faces.items()}
    builder = Builder(lv_faces, cs_faces)
    print("ASSIGN")
    batches = builder.assign()
    print("WRITE", args.out)
    write_outputs(Path(args.out), batches, lv_index, cs_index)


if __name__ == "__main__":
    main()
