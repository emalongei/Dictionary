from typing import Any, List
def individual_data(entry:dict[str,Any])-> dict[str, Any]:
    return {
        "id": str(entry["_id"]),
        "English": entry["English"],
        "Meiteilon": entry["Meiteilon"],
        "LatinScript": entry["LatinScript"]
        }
def all_data(entries:list[dict[str,Any]])-> List[dict[str, Any]]:
    return [individual_data(entry) for entry in entries]

# database/schemas.py
from typing import Any, List

# ---------- DICTIONARY SCHEMAS ----------

def individual_data(entry: dict[str, Any]) -> dict[str, Any]:
    return {
        "id": str(entry["_id"]),
        "English": entry["English"],
        "Meiteilon": entry["Meiteilon"],
        "LatinScript": entry["LatinScript"]
    }

def all_data(entries: list[dict[str, Any]]) -> List[dict[str, Any]]:
    return [individual_data(entry) for entry in entries]


# ---------- ALPHABET SCHEMAS ----------

def individual_alphabet(letter: dict[str, Any]) -> dict[str, Any]:
    """Convert a single alphabet MongoDB document to dictionary"""
    return {
        "id": str(letter["_id"]),
        "character": letter.get("character", ""),
        "name": letter.get("name", ""),
        "meaning": letter.get("meaning", ""),
        "ipa": letter.get("ipa", ""),
        "description": letter.get("description", ""),
        "sound": letter.get("sound", ""),
        "mapsTo": letter.get("mapsTo", ""),
        "position": letter.get("position", ""),
        "value": letter.get("value", None),
        "category": letter.get("category", ""),
        "order": letter.get("order", 0)
    }

def all_alphabet_data(letters: list[dict[str, Any]]) -> List[dict[str, Any]]:
    """Convert multiple alphabet documents to dictionary list"""
    return [individual_alphabet(letter) for letter in letters]