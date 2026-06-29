# main.py
from fastapi import FastAPI, APIRouter, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from connection import collection
import asyncio
from typing import Any, List
from database.schemas import all_data
from database.models import DictionaryEntryCreate, DictionaryEntryUpdate
from bson import ObjectId

app: FastAPI = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:3000"],  # React dev servers
    allow_credentials=True,
    allow_methods=["*"],  # Allow all methods (GET, POST, PUT, DELETE)
    allow_headers=["*"],  # Allow all headers
)


router: APIRouter = APIRouter()

#  GET all entries 
async def get_all_entries(skip: int = 0, limit: int = 20) -> List[dict[str, Any]]:
    # Use skip() and limit() for pagination
    cursor = collection.find().skip(skip).limit(limit)
    items = await asyncio.to_thread(list, cursor)
    return all_data(items)

router.add_api_route("/allentries", get_all_entries, methods=["GET"]) 

#page masing thoknaba
async def get_total_count() -> dict[str, int]:
    count = await asyncio.to_thread(collection.count_documents, {})
    return {"total": count}

router.add_api_route("/total", get_total_count, methods=["GET"])


#  POST add entry 
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

router.add_api_route("/addentries", add_entry, methods=["POST"])  # ✅ Right here


# SEARCH 
async def search_entries(q: str) -> List[dict[str, Any]]:
    query = {"English": {"$regex": q, "$options": "i"}}
    items = await asyncio.to_thread(list, collection.find(query).limit(20))
    for item in items:
        item["id"] = str(item.pop("_id"))
    return items

router.add_api_route("/search", search_entries, methods=["GET"])  # ✅ Right here (MOVED UP)


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

router.add_api_route("/entries/{entry_id}", get_entry, methods=["GET"])  # ✅ Right here


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

router.add_api_route("/entries/{entry_id}", update_entry, methods=["PUT"])  # ✅ Right here


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

router.add_api_route("/entries/{entry_id}", delete_entry, methods=["DELETE"])  # ✅ Right here

@app.get("/health")
async def health_check():
    return {"status": "healthy"}



# ---------- Include router ----------
app.include_router(router)