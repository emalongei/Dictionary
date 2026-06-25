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