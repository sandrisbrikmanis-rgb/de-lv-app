#!/usr/bin/env python3
"""Fix incorrectly generated comparison tables in b2.js and c1.js."""

from __future__ import annotations

import json
import re
from copy import deepcopy
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
TARGETS = [
    {"file": "data/b2.js", "varName": "B2_WORDS", "level": "B2"},
    {"file": "data/c1.js", "varName": "C1_WORDS", "level": "C1"},
]
SOURCE_FILES = [
    {"file": "data/b1.js", "varName": "B1_WORDS"},
    {"file": "data/a2.js", "varName": "A2_WORDS"},
]

VERB_PREFIXES = re.compile(
    r"^(ab|an|auf|aus|bei|ein|mit|nach|vor|zu|zer|wider|durch|über|unter|hinter|neben|gegen|um|weg)",
    re.I,
)


def load_words(file_path: str, var_name: str) -> list:
    code = (ROOT / file_path).read_text(encoding="utf-8")
    match = re.search(r"const\s+\w+\s*=\s*(\[[\s\S]*?\])\s*;", code)
    if not match:
        raise ValueError(f"Could not parse array from {file_path}")
    return json.loads(match.group(1))


def write_words(file_path: str, var_name: str, entries: list) -> None:
    body = json.dumps(entries, ensure_ascii=False, indent=2)
    output = f"const {var_name} = {body};\n\nwindow.{var_name} = {var_name};\n"
    (ROOT / file_path).write_text(output, encoding="utf-8")


def strip_article(de: str) -> str:
    return re.sub(r"^(der|die|das)\s+", "", de or "", flags=re.I).strip()


def get_article(de: str) -> str | None:
    match = re.match(r"^(der|die|das)\s+", de or "", flags=re.I)
    return match.group(1) if match else None


def capitalize_first(value: str) -> str:
    value = (value or "").strip()
    return value[:1].upper() + value[1:] if value else value


def split_meanings(lv: str) -> list[str]:
    return [part.strip() for part in (lv or "").split("•") if part.strip()]


def format_title(lv: str) -> str:
    return " • ".join(capitalize_first(part) for part in split_meanings(lv))


def unique_terms(terms: list[str]) -> list[str]:
    seen: set[str] = set()
    result: list[str] = []
    for term in terms:
        value = (term or "").strip()
        if not value:
            continue
        key = value.lower()
        if key in seen:
            continue
        seen.add(key)
        result.append(value)
    return result


def normalize_de(de: str) -> str:
    return strip_article(de).lower()


def slugify(de: str) -> str:
    bare = strip_article(de).lower()
    for src, dst in [("ä", "ae"), ("ö", "oe"), ("ü", "ue"), ("ß", "ss")]:
        bare = bare.replace(src, dst)
    bare = re.sub(r"\s+", "-", bare)
    bare = re.sub(r"[^a-z0-9-]+", "", bare)
    bare = re.sub(r"-+", "-", bare).strip("-")
    return bare


def has_broken_accents(value) -> bool:
    return '"Length"' in json.dumps(value or {})


def is_bad_comparison_example(example: str) -> bool:
    text = (example or "").strip()
    if not text:
        return True
    de_part = text.split("=")[0].strip() if "=" in text else text
    if not de_part:
        return True
    if "." in de_part and len(de_part.split()) >= 2:
        return False
    if re.match(r"^[\wäöüßÄÖÜ().\s-]+\s*=\s*", text) and len(de_part.split()) <= 3:
        return True
    return False


def has_duplicate_comparison_words(comparison: list, main_de: str) -> bool:
    seen: set[str] = set()
    dup_main = 0
    for row in comparison or []:
        word = normalize_de(row.get("word", ""))
        if word == normalize_de(main_de):
            dup_main += 1
        if word in seen:
            return True
        seen.add(word)
        if dup_main > 1:
            return True
    return False


def is_prefix_grouped_comparison(comparison: list, main_de: str) -> bool:
    main_bare = normalize_de(main_de)
    prefix_match = VERB_PREFIXES.match(main_bare)
    if not prefix_match:
        return False
    main_prefix = prefix_match.group(1).lower()
    if len(main_prefix) < 2:
        return False

    others = [
        normalize_de(row.get("word", ""))
        for row in comparison or []
        if normalize_de(row.get("word", "")) and normalize_de(row.get("word", "")) != main_bare
    ]
    if len(others) < 2:
        return False
    prefix_matches = sum(1 for word in others if word.startswith(main_prefix))
    return prefix_matches >= (len(others) + 1) // 2


def is_good_study(study: dict, main_de: str) -> bool:
    if not study or not isinstance(study, dict):
        return False
    if has_broken_accents(study.get("sectionAccents")):
        return False
    examples = study.get("examples") or []
    if not examples:
        return False
    if any(re.match(r"^[\wäöüßÄÖÜ().\s-]+\.\s*$", str(ex.get("de", "")).strip()) for ex in examples):
        return False

    comparison = study.get("comparison")
    if not comparison:
        return True
    if any(is_bad_comparison_example(row.get("example", "")) for row in comparison):
        return False
    if has_duplicate_comparison_words(comparison, main_de):
        return False
    if is_prefix_grouped_comparison(comparison, main_de):
        return False
    return True


def is_bad_study(entry: dict) -> bool:
    study = entry.get("study")
    if not study:
        return False
    return not is_good_study(study, entry.get("de", ""))


def detect_pos(de: str) -> str:
    bare = strip_article(de)
    if re.match(r"^(der|die|das)\s+", de or "", flags=re.I):
        return "noun"
    if re.match(
        r"^(trotzdem|deshalb|deswegen|darum|allerdings|jedoch|sondern|während|obwohl|damit|dass|weil|wenn|als|bis|seit|ohne)$",
        bare,
        flags=re.I,
    ):
        return "function"
    if re.search(r"(ig|lich|bar|sam|los|voll|frei|reich|arm)$", bare, flags=re.I):
        return "adj"
    if re.search(r"(en|ern|eln)$", bare, flags=re.I):
        return "verb"
    return "other"


def capitalize_noun_phrase(de: str) -> str:
    article = get_article(de)
    bare = strip_article(de)
    noun = capitalize_first(bare)
    return f"{capitalize_first(article)} {noun}" if article else noun


def build_examples(entry: dict) -> list[dict]:
    de = entry["de"]
    bare = strip_article(de)
    meanings = split_meanings(entry.get("lv", ""))
    pos = detect_pos(de)
    examples: list[dict] = []

    if pos == "noun":
        phrase = capitalize_noun_phrase(de)
        art = get_article(de) or "das"
        examples.append(
            {
                "de": f"{phrase} spielt hier eine wichtige Rolle.",
                "lv": f"{capitalize_first(meanings[0])} šeit ir svarīgs.",
            }
        )
        examples.append(
            {
                "de": f"Wir sprechen heute über {art} {bare}.",
                "lv": f"Šodien runājam par {meanings[0]}.",
            }
        )
        if len(meanings) > 1:
            examples.append(
                {
                    "de": f'In diesem Text bedeutet {phrase} auch „{bare}".',
                    "lv": f'Šajā tekstā {phrase} nozīmē arī „{meanings[1]}".',
                }
            )
        else:
            examples.append(
                {
                    "de": f"Kennst du {art} {bare}?",
                    "lv": f"Vai tu zini, kas ir {meanings[0]}?",
                }
            )
        return examples[:4]

    if pos == "verb":
        examples.append(
            {"de": f"Man muss das heute {bare}.", "lv": f"To šodien vajag {meanings[0]}."}
        )
        examples.append(
            {"de": f"Er will das Problem {bare}.", "lv": f"Viņš vēlas {meanings[0]} problēmu."}
        )
        if len(meanings) > 1:
            examples.append(
                {
                    "de": f"Im anderen Satz kann man es auch so {bare}.",
                    "lv": f'Citā teikumā tas nozīmē arī „{meanings[1]}".',
                }
            )
        else:
            examples.append(
                {"de": f"Hier {bare} wir oft im Alltag.", "lv": f"Ikdienā mēs bieži {meanings[0]}."}
            )
        return examples[:4]

    if pos == "adj":
        return [
            {"de": f"Das ist wirklich {bare}.", "lv": f"Tas ir tiešām {meanings[0]}."},
            {"de": f"Ich finde die Lösung {bare}.", "lv": f"Es risinājumu uzskatu par {meanings[0]}."},
            {"de": f"Für uns ist das {bare}.", "lv": f"Mums tas ir {meanings[0]}."},
        ]

    if pos == "function":
        return [
            {
                "de": f"{capitalize_first(bare)}, ich bleibe zu Hause.",
                "lv": f"{capitalize_first(meanings[0])}, es palieku mājās.",
            },
            {
                "de": f"Er kommt nicht, {bare} er ist krank.",
                "lv": f"Viņš nāk, {meanings[0]} viņš ir slims.",
            },
        ]

    examples.append({"de": f'Das Wort „{de}" hört man oft.', "lv": f'Vārdu „{de}" bieži dzird.'})
    examples.append(
        {
            "de": f'Im Satz passt „{de}" gut.',
            "lv": f'Teikumā „{de}" der labi – {meanings[0]}.',
        }
    )
    return examples


def extract_highlight_terms(text: str, seeds: list[str] | None = None, limit: int = 6) -> list[str]:
    seeds = seeds or []
    words = re.sub(r'[„"“=]', " ", text or "")
    words = [w.strip(".,!?;:()") for w in words.split() if len(w.strip(".,!?;:()")) > 2]
    return unique_terms([*seeds, *words])[:limit]


def build_example_accents(examples: list[dict], entry: dict, meanings: list[str]) -> list[dict]:
    bare = strip_article(entry["de"])
    return [
        {
            "de": {"blue": extract_highlight_terms(ex["de"], [entry["de"], bare], 5)},
            "lv": {"purple": extract_highlight_terms(ex["lv"], meanings, 5)},
        }
        for ex in examples
    ]


def build_clean_study(entry: dict, level: str, existing_id: str | None = None) -> dict:
    meanings = split_meanings(entry.get("lv", ""))
    translation = format_title(entry.get("lv", ""))
    main_meaning = meanings[0] if meanings else entry.get("lv", "")
    examples = build_examples(entry)
    study_id = existing_id or f"{level.lower()}-{slugify(entry['de'])}"

    return {
        "id": study_id,
        "layout": "standardStudy",
        "translation": translation,
        "explanation": (
            f"Galvenā doma: {entry['de']} visbiežāk nozīmē "
            f"{' • '.join(m.lower() for m in meanings)}. "
            "Konteksts nosaka precīzu nozīmi teikumā."
        ),
        "examples": examples,
        "tip": {"leftBlocks": [{"text": f"Atceries: {entry['de']} → {translation}."}]},
        "important": {
            "text": f"{entry['de']} lieto atbilstoši kontekstam. Galvenā nozīme: {capitalize_first(main_meaning)}.",
            "example": f"{examples[0]['de']} = {examples[0]['lv']}" if examples else "",
        },
        "sectionAccents": {
            "explanation": {"blue": unique_terms([entry["de"], strip_article(entry["de"])])},
            "examples": build_example_accents(examples, entry, meanings),
            "tip": {"blue": unique_terms([entry["de"]])},
            "important": {
                "blue": unique_terms([entry["de"]]),
                "purple": unique_terms(meanings),
            },
        },
    }


def clone_study_for_entry(source_study: dict, entry: dict, level: str) -> dict:
    cloned = deepcopy(source_study)
    cloned["id"] = entry.get("study", {}).get("id") or f"{level.lower()}-{slugify(entry['de'])}"
    cloned["layout"] = "standardStudy"
    if cloned.get("translation"):
        cloned["translation"] = format_title(entry.get("lv", ""))
    return cloned


def build_good_study_index() -> dict[str, dict]:
    index: dict[str, dict] = {}
    for source in SOURCE_FILES:
        entries = load_words(source["file"], source["varName"])
        for entry in entries:
            study = entry.get("study")
            if not study:
                continue
            if is_good_study(study, entry.get("de", "")):
                index[normalize_de(entry["de"])] = study
    return index


def process_target(target: dict, good_index: dict[str, dict]) -> dict:
    entries = load_words(target["file"], target["varName"])
    stats = {
        "fixedFromSource": 0,
        "rebuiltClean": 0,
        "alreadyGood": 0,
        "noStudy": 0,
        "total": len(entries),
    }

    for entry in entries:
        if not entry.get("study"):
            stats["noStudy"] += 1
            continue
        if not is_bad_study(entry):
            stats["alreadyGood"] += 1
            continue

        source_study = good_index.get(normalize_de(entry["de"]))
        if source_study:
            entry["study"] = clone_study_for_entry(source_study, entry, target["level"])
            stats["fixedFromSource"] += 1
        else:
            entry["study"] = build_clean_study(
                entry, target["level"], entry.get("study", {}).get("id")
            )
            stats["rebuiltClean"] += 1

    write_words(target["file"], target["varName"], entries)
    return stats


def main() -> None:
    good_index = build_good_study_index()
    for target in TARGETS:
        stats = process_target(target, good_index)
        print(
            f"{target['file']}: total={stats['total']}, noStudy={stats['noStudy']}, "
            f"alreadyGood={stats['alreadyGood']}, fixedFromSource={stats['fixedFromSource']}, "
            f"rebuiltClean={stats['rebuiltClean']}"
        )


if __name__ == "__main__":
    main()
