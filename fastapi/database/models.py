# models.py
from pydantic import BaseModel
from typing import Optional

# 1. This is the model for creating a new entry (POST requests)
class DictionaryEntryCreate(BaseModel):
    English: str
    Meiteilon: str
    LatinScript: str

# 2. (Optional) This is the model for returning data (GET responses)
class DictionaryEntryResponse(BaseModel):
    id: str  # This will map to MongoDB's "_id"
    English: str
    Meiteilon: str
    LatinScript: str
    creation: Optional[int] = None
    update: Optional[int] = None

class DictionaryEntryUpdate(BaseModel):
    English: Optional[str] = None
    Meiteilon: Optional[str] = None
    LatinScript: Optional[str] = None