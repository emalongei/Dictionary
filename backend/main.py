# main.py
from fastapi import FastAPI, APIRouter, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware
from connection import collection, collection_alphabet
from database.schemas import all_data, all_alphabet_data, individual_alphabet
from database.models import DictionaryEntryCreate, DictionaryEntryUpdate
from bson import ObjectId
import asyncio
from typing import Any, List, Optional

app: FastAPI = FastAPI()

# CORS - Add your Vercel URLs
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://emalongei.vercel.app",
        "http://localhost:5173",
        "http://localhost:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

router: APIRouter = APIRouter()

# ---------- DICTIONARY ENDPOINTS ----------

# GET all entries 
async def get_all_entries(skip: int = 0, limit: int = 20) -> List[dict[str, Any]]:
    cursor = collection.find().skip(skip).limit(limit)
    items = await asyncio.to_thread(list, cursor)
    return all_data(items)

router.add_api_route("/allentries", get_all_entries, methods=["GET"])

# GET total count
async def get_total_count() -> dict[str, int]:
    count = await asyncio.to_thread(collection.count_documents, {})
    return {"total": count}

router.add_api_route("/total", get_total_count, methods=["GET"])

# POST add entry 
async def add_entry(entry: DictionaryEntryCreate) -> dict[str, Any]:
    try:
        new_doc = entry.model_dump()
        from datetime import datetime
        new_doc["creation"] = int(datetime.now().timestamp())
        new_doc["update"] = int(datetime.now().timestamp())
        result = await asyncio.to_thread(collection.insert_one, new_doc)
        return {"status_code": 200, "id": str(result.inserted_id)}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Insert failed: {str(e)}")

router.add_api_route("/addentries", add_entry, methods=["POST"])

# SEARCH 
async def search_entries(q: str) -> List[dict[str, Any]]:
    query = {"English": {"$regex": q, "$options": "i"}}
    items = await asyncio.to_thread(list, collection.find(query).limit(20))
    for item in items:
        item["id"] = str(item.pop("_id"))
    return items

router.add_api_route("/search", search_entries, methods=["GET"])

# GET single entry 
async def get_entry(entry_id: str) -> dict[str, Any]:
    try:
        obj_id = ObjectId(entry_id)
        item = await asyncio.to_thread(collection.find_one, {"_id": obj_id})
        if not item:
            raise HTTPException(status_code=404, detail="Word not found")
        item["id"] = str(item.pop("_id"))
        return item
    except Exception:
        raise HTTPException(status_code=400, detail="Invalid ID format")

router.add_api_route("/entries/{entry_id}", get_entry, methods=["GET"])

# UPDATE entry 
async def update_entry(entry_id: str, update_data: DictionaryEntryUpdate) -> dict[str, Any]:
    try:
        obj_id = ObjectId(entry_id)
        update_dict = update_data.model_dump(exclude_unset=True)
        if not update_dict:
            raise HTTPException(status_code=400, detail="No fields to update")
        from datetime import datetime
        update_dict["update"] = int(datetime.now().timestamp())
        result = await asyncio.to_thread(
            collection.update_one,
            {"_id": obj_id},
            {"$set": update_dict}
        )
        if result.matched_count == 0:
            raise HTTPException(status_code=404, detail="Word not found")
        return {"status_code": 200, "message": "Entry updated successfully"}
    except Exception as e:
        if "invalid" in str(e).lower() or "objectid" in str(e).lower():
            raise HTTPException(status_code=400, detail="Invalid ID format")
        raise HTTPException(status_code=500, detail=f"Update failed: {str(e)}")

router.add_api_route("/entries/{entry_id}", update_entry, methods=["PUT"])

# DELETE entry
async def delete_entry(entry_id: str) -> dict[str, Any]:
    try:
        obj_id = ObjectId(entry_id)
        result = await asyncio.to_thread(collection.delete_one, {"_id": obj_id})
        if result.deleted_count == 0:
            raise HTTPException(status_code=404, detail="Word not found")
        return {"status_code": 200, "message": "Entry deleted successfully"}
    except Exception as e:
        if "invalid" in str(e).lower() or "objectid" in str(e).lower():
            raise HTTPException(status_code=400, detail="Invalid ID format")
        raise HTTPException(status_code=500, detail=f"Delete failed: {str(e)}")

router.add_api_route("/entries/{entry_id}", delete_entry, methods=["DELETE"])


# ---------- ALPHABET ENDPOINTS ----------

# GET all alphabet letters (with optional category filter)
@router.get("/alphabet")
async def get_alphabet(category: Optional[str] = Query(None)):
    """
    Get all alphabet letters.
    Optional: filter by category (mapung, lonsum, cheitap, digits)
    """
    try:
        query = {}
        if category:
            valid_categories = ["mapung", "lonsum", "cheitap", "digits"]
            if category not in valid_categories:
                raise HTTPException(
                    status_code=400,
                    detail=f"Invalid category. Must be one of: {', '.join(valid_categories)}"
                )
            query["category"] = category
        
        cursor = collection_alphabet.find(query).sort("order", 1)
        items = await asyncio.to_thread(list, cursor)
        
        return {
            "status": "success",
            "count": len(items),
            "data": all_alphabet_data(items)
        }
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to fetch alphabet: {str(e)}")

# GET alphabet by category
@router.get("/alphabet/category/{category}")
async def get_alphabet_by_category(category: str):
    """
    Get alphabet letters by specific category.
    Valid categories: mapung, lonsum, cheitap, digits
    """
    valid_categories = ["mapung", "lonsum", "cheitap", "digits"]
    if category not in valid_categories:
        raise HTTPException(
            status_code=400,
            detail=f"Invalid category. Must be one of: {', '.join(valid_categories)}"
        )
    
    try:
        cursor = collection_alphabet.find({"category": category}).sort("order", 1)
        items = await asyncio.to_thread(list, cursor)
        
        return {
            "status": "success",
            "category": category,
            "count": len(items),
            "data": all_alphabet_data(items)
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to fetch category: {str(e)}")

# GET single alphabet letter by ID
@router.get("/alphabet/letter/{letter_id}")
async def get_alphabet_letter(letter_id: str):
    """
    Get a single alphabet letter by its ID
    """
    try:
        obj_id = ObjectId(letter_id)
        item = await asyncio.to_thread(collection_alphabet.find_one, {"_id": obj_id})
        if not item:
            raise HTTPException(status_code=404, detail="Letter not found")
        return {
            "status": "success",
            "data": individual_alphabet(item)
        }
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Invalid ID format: {str(e)}")


# ---------- Include router ----------
app.include_router(router)

# Root endpoint
@app.get("/")
async def root():
    return {
        "message": "Meitei Mayek Dictionary API is running!",
        "endpoints": {
            "dictionary": [
                "/allentries?skip=0&limit=20",
                "/total",
                "/search?q=query",
                "/entries/{id}",
                "/addentries (POST)",
                "/entries/{id} (PUT)",
                "/entries/{id} (DELETE)"
            ],
            "alphabet": [
                "/alphabet",
                "/alphabet?category=mapung",
                "/alphabet/category/{category}",
                "/alphabet/letter/{id}"
            ]
        }
    }